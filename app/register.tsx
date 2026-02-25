import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { useAuth } from '@/lib/auth';
import { upsertCommunityProfile } from '@/lib/supabase';
import { getCurrentLocation, getCurrentCity, DUTCH_CITIES, CITY_COORDS } from '@/lib/location';
import { SKILL_LIST, ALL_SKILLS } from '@/lib/skills';
import { SKILL_COLORS } from '@/lib/colors';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { InlineIcon, AppIcon, getSkillIcon, type IconName } from '@/lib/icons';
import type { Child, UserProfile, ChildRelatie, ChildAandachtspunt, GezinsSituatie, AppDoel } from '@/lib/types';

type Step = 'account' | 'confirm_email' | 'kinderen' | 'doelen' | 'community' | 'welkom';

const STEP_PROGRESS: Record<Step, number> = {
  account: 17,
  confirm_email: 33,
  kinderen: 50,
  doelen: 67,
  community: 83,
  welkom: 100,
};

const ALL_DOELEN: AppDoel[] = [
  'Rustiger reageren',
  'Meer verbinding',
  'Betere grenzen stellen',
  'Mijn kind beter begrijpen',
  'Minder schreeuwen',
  'Meer geduld hebben',
  'Beter luisteren',
  'Herstellen na een ruzie',
  'Mijn kind zelfstandiger maken',
  'Bewuster opvoeden',
  'Mijn eigen patronen doorbreken',
  'Emoties beter begeleiden',
  'Consequenter zijn',
  'Meer quality time',
];

const EXPECT_ITEMS: { icon: IconName; text: string }[] = [
  { icon: 'calendarDays', text: '7 weektaken op jouw niveau' },
  { icon: 'bookOpen', text: 'Interactieve leermodules' },
  { icon: 'brain', text: "Scenario's en quiz-vragen" },
  { icon: 'trophy', text: 'XP, badges en levels' },
  { icon: 'waves', text: 'Dagelijkse Vader Pulse check-in' },
];

function getAgeGroup(age: number): string {
  if (age <= 2) return '0-2';
  if (age <= 5) return '3-5';
  if (age <= 9) return '6-9';
  if (age <= 12) return '10-12';
  return '13-16';
}

interface ChildForm {
  id: string;
  name: string;
  age: string;
  relatie: ChildRelatie;
  aandachtspunten: ChildAandachtspunt[];
}

function createEmptyChild(): ChildForm {
  return { id: Date.now().toString() + Math.random().toString(36).substring(2, 6), name: '', age: '', relatie: 'eigen_kind', aandachtspunten: [] };
}

const AANDACHTSPUNT_OPTIONS: { value: ChildAandachtspunt; label: string; tip: string }[] = [
  { value: 'adhd', label: 'ADHD / druk gedrag', tip: 'We passen je taken aan met extra tips voor druk of impulsief gedrag.' },
  { value: 'gedragsproblemen', label: 'Gedragsproblemen', tip: 'Je krijgt taken die helpen bij moeilijk of uitdagend gedrag.' },
  { value: 'hooggevoelig', label: 'Hooggevoelig', tip: 'We houden rekening met de gevoeligheid van je kind.' },
  { value: 'prikkelverwerking', label: 'Prikkelgevoelig', tip: 'Je krijgt taken gericht op prikkelverwerking en rust.' },
];

const AGE_ICONS: Record<string, IconName> = {
  '0-2': 'baby',
  '3-5': 'user',
  '6-9': 'user',
  '10-12': 'user',
  '13-16': 'users',
};

export default function RegisterScreen() {
  const { colors } = useTheme();
  const { saveProfile, saveOnboarding } = useStore();
  const { user, signUp, verifySignUpOtp, setCommunityProfile } = useAuth();
  const router = useRouter();

  const [step, setStep] = useState<Step>('account');
  const [loading, setLoading] = useState(false);

  // Step 1: account
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Step 2: confirm email OTP
  const [otpCode, setOtpCode] = useState('');

  // Step 3: kinderen
  const [children, setChildren] = useState<ChildForm[]>([createEmptyChild()]);

  // Step 3.5: doelen
  const [selectedDoelen, setSelectedDoelen] = useState<AppDoel[]>([]);

  // Step 4: community profiel
  const [bio, setBio] = useState('');
  const [locationMethod, setLocationMethod] = useState<'gps' | 'manual' | null>(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [citySearch, setCitySearch] = useState('');
  const [detectedCity, setDetectedCity] = useState('');
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [locationLoading, setLocationLoading] = useState(false);

  // ── Account step ──────────────────────────────────────────────────
  function validateAccount(): boolean {
    const e: Record<string, string> = {};
    if (!naam.trim()) e.naam = 'Vul je naam in';
    if (!email.trim()) {
      e.email = 'Vul je e-mailadres in';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      e.email = 'Vul een geldig e-mailadres in';
    }
    if (!password || password.length < 6) e.password = 'Wachtwoord moet minimaal 6 tekens zijn';
    if (!acceptedTerms) e.terms = 'Je moet akkoord gaan met de voorwaarden';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleAccountSubmit() {
    if (!validateAccount()) return;
    setLoading(true);
    setErrors({});
    const result = await signUp(email.trim(), password);
    setLoading(false);
    if (result.error) {
      if (result.error.includes('already registered') || result.error.includes('already in use')) {
        setErrors({ general: 'Dit e-mailadres is al geregistreerd. Ga naar inloggen.' });
      } else {
        setErrors({ general: result.error });
      }
    } else if (result.needsConfirmation) {
      setStep('confirm_email');
    } else {
      setStep('kinderen');
    }
  }

  // ── Resend cooldown ──────────────────────────────────────────────
  const [resendCooldown, setResendCooldown] = useState(0);
  const cooldownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (resendCooldown <= 0) {
      if (cooldownRef.current) clearInterval(cooldownRef.current);
      return;
    }
    cooldownRef.current = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) {
          if (cooldownRef.current) clearInterval(cooldownRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (cooldownRef.current) clearInterval(cooldownRef.current); };
  }, [resendCooldown > 0]);

  // ── Email confirm step ────────────────────────────────────────────
  async function handleVerifySignUpOtp() {
    if (otpCode.trim().length < 8) {
      setErrors({ general: 'Voer de 8-cijferige code in uit je e-mail' });
      return;
    }
    setLoading(true);
    setErrors({});
    const result = await verifySignUpOtp(email.trim(), otpCode.trim());
    setLoading(false);
    if (result.error) {
      setErrors({ general: 'Ongeldige code. Controleer je e-mail en probeer opnieuw.' });
    } else {
      setStep('kinderen');
    }
  }

  async function handleResendEmail() {
    if (resendCooldown > 0) return;
    setLoading(true);
    await signUp(email.trim(), password);
    setLoading(false);
    setResendCooldown(60);
    Alert.alert('Verstuurd', 'We hebben een nieuwe bevestigingsmail gestuurd.');
  }

  // Step 4: gezinssituatie
  const [gezinssituatie, setGezinssituatie] = useState<GezinsSituatie>('standaard');

  // ── Kinderen step ─────────────────────────────────────────────────
  function updateChild(id: string, field: 'name' | 'age', value: string) {
    setChildren((prev) => prev.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
    if (errors.children) setErrors({});
  }

  function toggleChildRelatie(id: string) {
    setChildren((prev) => prev.map((c) =>
      c.id === id ? { ...c, relatie: c.relatie === 'eigen_kind' ? 'bonuskind' : 'eigen_kind' } : c
    ));
  }

  function toggleAandachtspunt(id: string, ap: ChildAandachtspunt) {
    setChildren((prev) => prev.map((c) => {
      if (c.id !== id) return c;
      const has = c.aandachtspunten.includes(ap);
      return { ...c, aandachtspunten: has ? c.aandachtspunten.filter((a) => a !== ap) : [...c.aandachtspunten, ap] };
    }));
  }

  function validateChildren(): boolean {
    const hasValid = children.some(
      (c) => c.name.trim() && c.age.trim() && !isNaN(parseInt(c.age, 10)),
    );
    if (!hasValid) {
      setErrors({ children: 'Voeg minstens één kind toe met naam en leeftijd' });
      return false;
    }
    setErrors({});
    return true;
  }

  // ── Location (community step) ─────────────────────────────────────
  async function handleLocationGPS() {
    setLocationLoading(true);
    const location = await getCurrentLocation();
    if (location) {
      setCoords({ lat: location.latitude, lng: location.longitude });
      const city = await getCurrentCity();
      setDetectedCity(city ?? '');
      setSelectedCity(city ?? '');
    } else {
      Alert.alert('Locatie', 'Kan locatie niet ophalen. Kies je stad handmatig.');
    }
    setLocationMethod('gps');
    setLocationLoading(false);
  }

  const filteredCities = citySearch
    ? DUTCH_CITIES.filter((c) => c.toLowerCase().includes(citySearch.toLowerCase())).slice(0, 8)
    : [];

  // ── Final submit ──────────────────────────────────────────────────
  async function handleFinish() {
    const validChildren: Child[] = children
      .filter((c) => c.name.trim() && c.age.trim() && !isNaN(parseInt(c.age, 10)))
      .map((c) => {
        const age = parseInt(c.age, 10);
        return {
          id: c.id,
          name: c.name.trim(),
          age,
          ageGroup: getAgeGroup(age),
          relatie: c.relatie,
          aandachtspunten: c.aandachtspunten.length > 0 ? c.aandachtspunten : undefined,
        };
      });

    const primaryAgeGroup = (validChildren[0]?.ageGroup ?? '6-9') as UserProfile['ageGroup'];

    // Automatisch gezinssituatie afleiden als er bonuskinderen zijn
    const hasBonuskind = validChildren.some((c) => c.relatie === 'bonuskind');
    const resolvedGezin: GezinsSituatie = gezinssituatie !== 'standaard'
      ? gezinssituatie
      : hasBonuskind ? 'samengesteld_gezin' : 'standaard';

    const localProfile: UserProfile = {
      naam: naam.trim(),
      email: email.trim(),
      ageGroup: primaryAgeGroup,
      doel: selectedDoelen[0] ?? 'Gewoon een betere vader zijn',
      doelen: selectedDoelen.length > 0 ? selectedDoelen : undefined,
      startDate: new Date().toISOString().split('T')[0],
      children: validChildren,
      gezinssituatie: resolvedGezin !== 'standaard' ? resolvedGezin : undefined,
    };

    saveProfile(localProfile);
    saveOnboarding({ ageGroup: primaryAgeGroup, skill: ALL_SKILLS[0], skills: ALL_SKILLS });

    // Always create community profile so Social tab doesn't require re-setup
    if (user) {
      // Use CITY_COORDS for manual city selection so user appears in nearby searches
      let lat = coords?.lat ?? null;
      let lng = coords?.lng ?? null;
      if (!lat && !lng && selectedCity && CITY_COORDS[selectedCity]) {
        lat = CITY_COORDS[selectedCity].lat;
        lng = CITY_COORDS[selectedCity].lng;
      }

      try {
        const communityProf = await upsertCommunityProfile({
          user_id: user.id,
          naam: naam.trim(),
          bio: bio.trim(),
          stad: selectedCity,
          latitude: lat,
          longitude: lng,
        });
        setCommunityProfile(communityProf);
      } catch {
        // Silent fail — profile can be created later from Social tab
      }
    }

    router.replace('/(tabs)/vandaag');
  }

  // ── Progress bar component ────────────────────────────────────────
  function ProgBar() {
    return (
      <View style={[s.progressTrack, { backgroundColor: colors.surface2 }]}>
        <View style={[s.progressFill, { backgroundColor: colors.amber, width: `${STEP_PROGRESS[step]}%` }]} />
      </View>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Account
  // ═══════════════════════════════════════════════════════════════════
  if (step === 'account') {
    return (
      <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
        <KeyboardAvoidingView style={s.flex} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView contentContainerStyle={s.scroll} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <View style={s.header}>
              <Text style={[s.stepLabel, { color: colors.text3 }]}>Stap 1 van 6</Text>
              <Text style={[s.title, { color: colors.text }]}>Account aanmaken</Text>
              <Text style={[s.subtitle, { color: colors.text2 }]}>We personaliseren de app voor jou.</Text>
            </View>
            <ProgBar />

            <View style={s.form}>
              <View style={s.fieldGroup}>
                <Text style={[s.label, { color: colors.text }]}>Naam *</Text>
                <TextInput
                  style={[s.input, { backgroundColor: colors.surface, borderColor: errors.naam ? colors.red : colors.border, color: colors.text }]}
                  placeholder="Je voornaam"
                  placeholderTextColor={colors.text3}
                  value={naam}
                  onChangeText={(t) => { setNaam(t); if (errors.naam) setErrors((p) => ({ ...p, naam: '' })); }}
                  autoCapitalize="words"
                />
                {errors.naam ? <Text style={[s.error, { color: colors.red }]}>{errors.naam}</Text> : null}
              </View>

              <View style={s.fieldGroup}>
                <Text style={[s.label, { color: colors.text }]}>E-mail *</Text>
                <TextInput
                  style={[s.input, { backgroundColor: colors.surface, borderColor: errors.email ? colors.red : colors.border, color: colors.text }]}
                  placeholder="je@email.nl"
                  placeholderTextColor={colors.text3}
                  value={email}
                  onChangeText={(t) => { setEmail(t); if (errors.email) setErrors((p) => ({ ...p, email: '' })); }}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                {errors.email ? <Text style={[s.error, { color: colors.red }]}>{errors.email}</Text> : null}
              </View>

              <View style={s.fieldGroup}>
                <Text style={[s.label, { color: colors.text }]}>Wachtwoord *</Text>
                <TextInput
                  style={[s.input, { backgroundColor: colors.surface, borderColor: errors.password ? colors.red : colors.border, color: colors.text }]}
                  placeholder="Minimaal 6 tekens"
                  placeholderTextColor={colors.text3}
                  value={password}
                  onChangeText={(t) => { setPassword(t); if (errors.password) setErrors((p) => ({ ...p, password: '' })); }}
                  secureTextEntry
                />
                {errors.password ? <Text style={[s.error, { color: colors.red }]}>{errors.password}</Text> : null}
              </View>

              {/* Terms consent */}
              <Pressable
                onPress={() => { setAcceptedTerms(!acceptedTerms); if (errors.terms) setErrors((p) => ({ ...p, terms: '' })); }}
                style={s.termsRow}
              >
                <View style={[s.checkbox, { borderColor: errors.terms ? colors.red : colors.border, backgroundColor: acceptedTerms ? colors.amber : 'transparent' }]}>
                  {acceptedTerms && <InlineIcon name="check" size={14} color="#fff" />}
                </View>
                <Text style={[s.termsText, { color: colors.text2 }]}>
                  Ik ga akkoord met de{' '}
                  <Text style={{ color: colors.amber, fontWeight: '600' }} onPress={() => router.push('/(tabs)/profiel/legal' as any)}>
                    Algemene Voorwaarden
                  </Text>
                  {' '}en{' '}
                  <Text style={{ color: colors.amber, fontWeight: '600' }} onPress={() => router.push('/(tabs)/profiel/legal' as any)}>
                    Privacyverklaring
                  </Text>
                </Text>
              </Pressable>
              {errors.terms ? <Text style={[s.error, { color: colors.red }]}>{errors.terms}</Text> : null}

              {errors.general ? (
                <View style={[s.errorBox, { backgroundColor: colors.redDim, borderColor: colors.red }]}>
                  <Text style={[s.error, { color: colors.red }]}>{errors.general}</Text>
                </View>
              ) : null}

              <Button
                title={loading ? 'Bezig...' : 'Account aanmaken'}
                onPress={handleAccountSubmit}
                variant="primary"
                size="lg"
              />

              <Pressable onPress={() => router.push('/login' as any)} style={s.linkRow}>
                <Text style={[s.linkText, { color: colors.text3 }]}>
                  Al een account?{' '}
                  <Text style={{ color: colors.amber, fontWeight: '700' }}>Inloggen</Text>
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Email bevestigen
  // ═══════════════════════════════════════════════════════════════════
  if (step === 'confirm_email') {
    return (
      <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
        <KeyboardAvoidingView style={s.flex} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView contentContainerStyle={s.scroll} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <View style={s.header}>
              <Text style={[s.stepLabel, { color: colors.text3 }]}>Stap 2 van 6</Text>
              <Text style={[s.title, { color: colors.text }]}>Bevestig je e-mail</Text>
            </View>
            <ProgBar />

            <View style={s.confirmCenter}>
              <View style={[s.mailIcon, { backgroundColor: colors.amberDim }]}>
                <InlineIcon name="mail" size={40} color={colors.amber} />
              </View>
              <Text style={[s.confirmText, { color: colors.text2 }]}>
                We hebben een 8-cijferige code gestuurd naar{'\n'}
                <Text style={{ color: colors.text, fontWeight: '700' }}>{email}</Text>
              </Text>
              <Text style={[s.confirmHint, { color: colors.text3 }]}>
                Voer de code uit je e-mail hieronder in om je account te bevestigen.
              </Text>
            </View>

            <View style={s.form}>
              <Text style={[s.label, { color: colors.text }]}>Bevestigingscode</Text>
              <TextInput
                style={[
                  s.input,
                  s.otpInput,
                  {
                    backgroundColor: colors.surface,
                    borderColor: errors.general ? colors.red : colors.border,
                    color: colors.text,
                  },
                ]}
                placeholder="00000000"
                placeholderTextColor={colors.text3}
                value={otpCode}
                onChangeText={(t) => { setOtpCode(t.replace(/[^0-9]/g, '').slice(0, 8)); setErrors({}); }}
                keyboardType="number-pad"
                maxLength={8}
                autoFocus
              />

              {errors.general ? (
                <View style={[s.errorBox, { backgroundColor: colors.redDim, borderColor: colors.red, marginTop: 8 }]}>
                  <Text style={[s.error, { color: colors.red }]}>{errors.general}</Text>
                </View>
              ) : null}

              <View style={{ marginTop: 24 }}>
                <Button
                  title={loading ? 'Controleren...' : 'Code verifiëren →'}
                  onPress={handleVerifySignUpOtp}
                  variant="primary"
                  size="lg"
                  disabled={loading || otpCode.length < 8}
                />
              </View>

              <Pressable onPress={handleResendEmail} disabled={resendCooldown > 0} style={[s.linkRow, { marginTop: 16, opacity: resendCooldown > 0 ? 0.5 : 1 }]}>
                <Text style={[s.linkText, { color: colors.text3 }]}>
                  Geen code ontvangen?{' '}
                  <Text style={{ color: colors.amber, fontWeight: '700' }}>
                    {resendCooldown > 0 ? `Opnieuw versturen (${resendCooldown}s)` : 'Opnieuw versturen'}
                  </Text>
                </Text>
              </Pressable>

              <Pressable onPress={() => { setStep('account'); setErrors({}); setOtpCode(''); }} style={[s.linkRow, { marginTop: 12 }]}>
                <Text style={[s.linkText, { color: colors.text3 }]}>
                  ← Terug naar registratie
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Kinderen
  // ═══════════════════════════════════════════════════════════════════
  if (step === 'kinderen') {
    return (
      <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
        <KeyboardAvoidingView style={s.flex} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView contentContainerStyle={s.scroll} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <View style={s.header}>
              <Text style={[s.stepLabel, { color: colors.text3 }]}>Stap 3 van 6</Text>
              <Text style={[s.title, { color: colors.text }]}>Je kinderen</Text>
              <Text style={[s.subtitle, { color: colors.text2 }]}>We stemmen de taken af op hun leeftijd.</Text>
            </View>
            <ProgBar />

            <View style={s.form}>
              {children.map((child, index) => {
                const ageNum = parseInt(child.age, 10);
                const ageGroup = !isNaN(ageNum) && child.age.trim() ? getAgeGroup(ageNum) : null;
                return (
                  <View key={child.id} style={[s.childCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                    <View style={s.childCardHeader}>
                      <Text style={[s.childCardTitle, { color: colors.text }]}>Kind {index + 1}</Text>
                      {children.length > 1 && (
                        <Pressable
                          onPress={() => setChildren((p) => p.filter((c) => c.id !== child.id))}
                          style={[s.removeBtn, { backgroundColor: colors.redDim }]}
                        >
                          <Text style={[s.removeBtnText, { color: colors.red }]}>✕</Text>
                        </Pressable>
                      )}
                    </View>
                    <Text style={[s.label, { color: colors.text }]}>Naam</Text>
                    <TextInput
                      style={[s.input, { backgroundColor: colors.surface2, borderColor: colors.border, color: colors.text }]}
                      placeholder="Naam van je kind"
                      placeholderTextColor={colors.text3}
                      value={child.name}
                      onChangeText={(v) => updateChild(child.id, 'name', v)}
                      autoCapitalize="words"
                    />
                    <Text style={[s.label, { color: colors.text }]}>Leeftijd</Text>
                    <TextInput
                      style={[s.input, { backgroundColor: colors.surface2, borderColor: colors.border, color: colors.text }]}
                      placeholder="Leeftijd in jaren"
                      placeholderTextColor={colors.text3}
                      value={child.age}
                      onChangeText={(v) => updateChild(child.id, 'age', v.replace(/[^0-9]/g, ''))}
                      keyboardType="number-pad"
                      maxLength={2}
                    />
                    {ageGroup && (
                      <View style={[s.ageTag, { backgroundColor: colors.amberDim }]}>
                        <InlineIcon name={AGE_ICONS[ageGroup]} size={14} color={colors.amber} />
                        <Text style={[s.ageTagText, { color: colors.amber }]}>{ageGroup} jaar</Text>
                      </View>
                    )}

                    {/* Relatie toggle */}
                    <Text style={[s.label, { color: colors.text3, fontSize: 13, marginTop: 12 }]}>Relatie (optioneel)</Text>
                    <View style={s.relatieRow}>
                      {(['eigen_kind', 'bonuskind'] as const).map((rel) => (
                        <Pressable
                          key={rel}
                          onPress={() => toggleChildRelatie(child.id)}
                          style={[s.relatiePill, {
                            backgroundColor: child.relatie === rel ? colors.amberDim : colors.surface2,
                            borderColor: child.relatie === rel ? colors.amber + '40' : colors.border,
                          }]}
                        >
                          <InlineIcon name={rel === 'eigen_kind' ? 'heart' : 'users'} size={14} color={child.relatie === rel ? colors.amber : colors.text3} />
                          <Text style={[s.relatiePillText, { color: child.relatie === rel ? colors.amber : colors.text3 }]}>
                            {rel === 'eigen_kind' ? 'Mijn kind' : 'Bonuskind'}
                          </Text>
                        </Pressable>
                      ))}
                    </View>

                    {/* Aandachtspunten */}
                    <Text style={[s.label, { color: colors.text3, fontSize: 13, marginTop: 12 }]}>Extra aandachtspunten (optioneel)</Text>
                    <View style={s.aandachtspuntenGrid}>
                      {AANDACHTSPUNT_OPTIONS.map((opt) => {
                        const selected = child.aandachtspunten.includes(opt.value);
                        return (
                          <Pressable
                            key={opt.value}
                            onPress={() => toggleAandachtspunt(child.id, opt.value)}
                            style={[s.aandachtspuntPill, {
                              backgroundColor: selected ? colors.amberDim : colors.surface2,
                              borderColor: selected ? colors.amber + '40' : colors.border,
                            }]}
                          >
                            <Text style={[s.aandachtspuntText, { color: selected ? colors.amber : colors.text3 }]}>
                              {opt.label}
                            </Text>
                          </Pressable>
                        );
                      })}
                    </View>
                    {child.aandachtspunten.length > 0 && (
                      <Text style={[s.aandachtspuntTip, { color: colors.text3, backgroundColor: colors.amberDim }]}>
                        {AANDACHTSPUNT_OPTIONS.find((o) => o.value === child.aandachtspunten[0])?.tip}
                      </Text>
                    )}
                  </View>
                );
              })}

              {errors.children ? <Text style={[s.error, { color: colors.red, marginBottom: 8 }]}>{errors.children}</Text> : null}

              <Pressable
                onPress={() => setChildren((p) => [...p, createEmptyChild()])}
                style={[s.addChildBtn, { borderColor: colors.border, backgroundColor: colors.surface }]}
              >
                <Text style={[s.addChildBtnText, { color: colors.amber }]}>+ Nog een kind toevoegen</Text>
              </Pressable>

              <View style={s.buttonRow}>
                <View style={{ flex: 1 }}>
                  <Button title="← Terug" onPress={() => setStep('account')} variant="secondary" size="md" />
                </View>
                <View style={{ flex: 2 }}>
                  <Button
                    title="Volgende →"
                    onPress={() => { if (validateChildren()) setStep('doelen'); }}
                    variant="primary"
                    size="lg"
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4: Doelen
  // ═══════════════════════════════════════════════════════════════════
  if (step === 'doelen') {
    function toggleDoel(doel: AppDoel) {
      setSelectedDoelen((prev) => {
        if (prev.includes(doel)) return prev.filter((d) => d !== doel);
        if (prev.length >= 3) return prev; // Max 3
        return [...prev, doel];
      });
    }

    return (
      <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
        <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>
          <View style={s.header}>
            <Text style={[s.stepLabel, { color: colors.text3 }]}>Stap 4 van 6</Text>
            <Text style={[s.title, { color: colors.text }]}>Jouw doelen</Text>
            <Text style={[s.subtitle, { color: colors.text2 }]}>
              Kies 3 doelen. We stemmen je taken hierop af.
            </Text>
          </View>
          <ProgBar />

          <View style={s.doelenGrid}>
            {ALL_DOELEN.map((doel) => {
              const isSelected = selectedDoelen.includes(doel);
              const isDisabled = !isSelected && selectedDoelen.length >= 3;
              return (
                <Pressable
                  key={doel}
                  onPress={() => toggleDoel(doel)}
                  disabled={isDisabled}
                  style={[
                    s.doelPill,
                    {
                      backgroundColor: isSelected ? colors.amberDim : colors.surface,
                      borderColor: isSelected ? colors.amber : colors.border,
                      opacity: isDisabled ? 0.4 : 1,
                    },
                  ]}
                >
                  <Text
                    style={[
                      s.doelPillText,
                      { color: isSelected ? colors.amber : colors.text },
                    ]}
                  >
                    {doel}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <Text style={[s.doelCount, { color: selectedDoelen.length >= 3 ? colors.green : colors.text3 }]}>
            {selectedDoelen.length}/3 gekozen
          </Text>

          <View style={s.buttonRow}>
            <View style={{ flex: 1 }}>
              <Button title="← Terug" onPress={() => setStep('kinderen')} variant="secondary" size="md" />
            </View>
            <View style={{ flex: 2 }}>
              <Button
                title="Volgende →"
                onPress={() => setStep('community')}
                variant="primary"
                size="lg"
                disabled={selectedDoelen.length < 3}
              />
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 5: Community profiel (optioneel)
  // ═══════════════════════════════════════════════════════════════════
  if (step === 'community') {
    const displayCity = locationMethod === 'gps' ? (detectedCity || 'Locatie gevonden') : selectedCity;

    return (
      <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
        <KeyboardAvoidingView style={s.flex} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView contentContainerStyle={s.scroll} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <View style={s.header}>
              <Text style={[s.stepLabel, { color: colors.text3 }]}>Stap 5 van 6</Text>
              <Text style={[s.title, { color: colors.text }]}>Social profiel</Text>
              <Text style={[s.subtitle, { color: colors.text2 }]}>Optioneel — sla over als je wilt.</Text>
            </View>
            <ProgBar />

            <View style={s.form}>
              <View style={s.fieldGroup}>
                <Text style={[s.label, { color: colors.text }]}>Over jezelf</Text>
                <TextInput
                  style={[s.textArea, { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text }]}
                  placeholder="Vertel iets over jezelf als vader (optioneel)"
                  placeholderTextColor={colors.text3}
                  value={bio}
                  onChangeText={setBio}
                  maxLength={200}
                  multiline
                  numberOfLines={4}
                />
                <Text style={[s.charCount, { color: colors.text3 }]}>{bio.length}/200</Text>
              </View>

              <View style={s.fieldGroup}>
                <Text style={[s.label, { color: colors.text }]}>Woonplaats</Text>
                <View style={s.locationBtns}>
                  <Pressable
                    onPress={handleLocationGPS}
                    style={[s.locationBtn, { backgroundColor: colors.surface, borderColor: locationMethod === 'gps' ? colors.amber : colors.border }]}
                    disabled={locationLoading}
                  >
                    {locationLoading ? (
                      <ActivityIndicator size="small" color={colors.amber} />
                    ) : (
                      <InlineIcon name="mapPin" size={18} color={locationMethod === 'gps' ? colors.amber : colors.text2} />
                    )}
                    <Text style={[s.locationBtnText, { color: locationMethod === 'gps' ? colors.amber : colors.text2 }]}>
                      GPS
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => setLocationMethod('manual')}
                    style={[s.locationBtn, { backgroundColor: colors.surface, borderColor: locationMethod === 'manual' ? colors.amber : colors.border }]}
                  >
                    <InlineIcon name="search" size={18} color={locationMethod === 'manual' ? colors.amber : colors.text2} />
                    <Text style={[s.locationBtnText, { color: locationMethod === 'manual' ? colors.amber : colors.text2 }]}>
                      Stad kiezen
                    </Text>
                  </Pressable>
                </View>

                {locationMethod === 'gps' && displayCity ? (
                  <View style={[s.detectedCity, { backgroundColor: colors.amberDim }]}>
                    <InlineIcon name="mapPin" size={14} color={colors.amber} />
                    <Text style={[s.detectedCityText, { color: colors.amber }]}>{displayCity}</Text>
                  </View>
                ) : null}

                {locationMethod === 'manual' && (
                  <View>
                    <TextInput
                      style={[s.input, { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text, marginTop: 8 }]}
                      placeholder="Zoek je stad..."
                      placeholderTextColor={colors.text3}
                      value={citySearch}
                      onChangeText={setCitySearch}
                      autoCorrect={false}
                      returnKeyType="done"
                      onSubmitEditing={() => Keyboard.dismiss()}
                    />
                    {filteredCities.map((city) => (
                      <Pressable
                        key={city}
                        onPress={() => { setSelectedCity(city); setCitySearch(city); Keyboard.dismiss(); }}
                        style={[s.cityOption, { borderBottomColor: colors.border }]}
                      >
                        <Text style={[s.cityOptionText, { color: selectedCity === city ? colors.amber : colors.text }]}>
                          {city}
                        </Text>
                        {selectedCity === city && <InlineIcon name="check" size={16} color={colors.amber} />}
                      </Pressable>
                    ))}
                  </View>
                )}
              </View>

              <View style={s.buttonRow}>
                <View style={{ flex: 1 }}>
                  <Button title="← Terug" onPress={() => setStep('doelen')} variant="secondary" size="md" />
                </View>
                <View style={{ flex: 2 }}>
                  <Button title="Volgende →" onPress={() => setStep('welkom')} variant="primary" size="lg" />
                </View>
              </View>

              <Pressable onPress={() => setStep('welkom')} style={s.linkRow}>
                <Text style={[s.linkText, { color: colors.text3 }]}>Overslaan — later instellen</Text>
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 5: Welkom
  // ═══════════════════════════════════════════════════════════════════
  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>
        <View style={s.header}>
          <Text style={[s.stepLabel, { color: colors.text3 }]}>Stap 6 van 6</Text>
          <Text style={[s.title, { color: colors.text }]}>Welkom, {naam}!</Text>
          <Text style={[s.subtitle, { color: colors.text2 }]}>Je bent klaar om te beginnen.</Text>
        </View>
        <ProgBar />

        <Text style={[s.instructions, { color: colors.text2 }]}>
          Je gaat aan de slag met alle 8 opvoedvaardigheden. Elke week krijg je
          taken, inzichten en oefeningen op maat van jouw kinderen.
        </Text>

        <Card style={{ marginBottom: 12, backgroundColor: colors.amberDim, borderColor: colors.amber + '30' }}>
          <View style={s.cardTitleRow}>
            <InlineIcon name="target" size={16} color={colors.amber} />
            <Text style={[s.cardTitle, { color: colors.amber }]}>Jouw vaardigheden</Text>
          </View>
          <View style={s.skillsGrid}>
            {SKILL_LIST.map((skill) => {
              const skillColor = SKILL_COLORS[skill.label] || colors.amber;
              return (
                <View
                  key={skill.label}
                  style={[s.skillPill, { backgroundColor: skillColor + '18', borderColor: skillColor + '40' }]}
                >
                  <AppIcon name={getSkillIcon(skill.label)} size="sm" variant="compact" color={skillColor} />
                  <Text style={[s.skillName, { color: skillColor }]}>{skill.label}</Text>
                </View>
              );
            })}
          </View>
        </Card>

        <Card style={{ marginBottom: 24 }}>
          <View style={s.cardTitleRow}>
            <InlineIcon name="fileText" size={16} color={colors.text} />
            <Text style={[s.cardTitle, { color: colors.text }]}>Wat je kunt verwachten</Text>
          </View>
          <View style={s.expectList}>
            {EXPECT_ITEMS.map((item, index) => (
              <View key={index} style={s.expectRow}>
                <InlineIcon name={item.icon} size={16} color={colors.text2} />
                <Text style={[s.expectItem, { color: colors.text2 }]}>{item.text}</Text>
              </View>
            ))}
          </View>
        </Card>

        <Button title="Start je reis als vader" onPress={handleFinish} variant="primary" size="lg" />
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1 },
  flex: { flex: 1 },
  scroll: { flexGrow: 1, paddingHorizontal: 20, paddingTop: 24, paddingBottom: 40 },

  header: { marginBottom: 16 },
  stepLabel: { fontSize: 13, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 },
  title: { fontSize: 28, fontWeight: '800', marginBottom: 6 },
  subtitle: { fontSize: 15, fontWeight: '500' },

  progressTrack: { height: 4, borderRadius: 2, marginBottom: 28, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 2 },

  form: {},
  fieldGroup: { marginBottom: 22 },
  label: { fontSize: 15, fontWeight: '600', marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 4,
  },
  textArea: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  charCount: { fontSize: 12, textAlign: 'right', marginTop: 4 },
  otpInput: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 6,
    textAlign: 'center',
  },
  error: { fontSize: 13, fontWeight: '500', marginTop: 4 },
  errorBox: { borderWidth: 1, borderRadius: 10, padding: 12, marginBottom: 16 },

  termsRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, marginBottom: 8 },
  checkbox: { width: 24, height: 24, borderRadius: 6, borderWidth: 2, alignItems: 'center', justifyContent: 'center', marginTop: 1 },
  termsText: { flex: 1, fontSize: 14, lineHeight: 20 },

  buttonRow: { flexDirection: 'row', gap: 12, marginTop: 8 },
  linkRow: { alignItems: 'center', marginTop: 20 },
  linkText: { fontSize: 14 },

  childCard: { borderWidth: 1, borderRadius: 16, padding: 16, marginBottom: 16 },
  childCardHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 },
  childCardTitle: { fontSize: 16, fontWeight: '700' },
  removeBtn: { width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  removeBtnText: { fontSize: 14, fontWeight: '700' },
  ageTag: { flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8, marginTop: 6, gap: 6 },
  ageTagText: { fontSize: 13, fontWeight: '600' },
  relatieRow: { flexDirection: 'row', gap: 8, marginBottom: 4 },
  relatiePill: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, paddingVertical: 10, borderRadius: 10, borderWidth: 1 },
  relatiePillText: { fontSize: 13, fontWeight: '600' },
  aandachtspuntenGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 4 },
  aandachtspuntPill: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10, borderWidth: 1 },
  aandachtspuntText: { fontSize: 12, fontWeight: '600' },
  aandachtspuntTip: { fontSize: 12, lineHeight: 17, padding: 10, borderRadius: 8, marginTop: 4, overflow: 'hidden' },
  addChildBtn: { borderWidth: 1, borderStyle: 'dashed', borderRadius: 12, paddingVertical: 16, alignItems: 'center', marginBottom: 8 },
  addChildBtnText: { fontSize: 15, fontWeight: '600' },

  confirmCenter: { alignItems: 'center', gap: 16, marginVertical: 32 },
  mailIcon: { width: 80, height: 80, borderRadius: 40, alignItems: 'center', justifyContent: 'center' },
  confirmText: { fontSize: 16, textAlign: 'center', lineHeight: 24 },
  confirmHint: { fontSize: 14, textAlign: 'center', lineHeight: 20 },

  locationBtns: { flexDirection: 'row', gap: 10 },
  locationBtn: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8, borderWidth: 1, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 14 },
  locationBtnText: { fontSize: 14, fontWeight: '600' },
  detectedCity: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 10, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10, alignSelf: 'flex-start' },
  detectedCityText: { fontSize: 14, fontWeight: '600' },
  cityOption: { paddingVertical: 12, paddingHorizontal: 4, borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  cityOptionText: { fontSize: 15, fontWeight: '500' },

  instructions: { fontSize: 16, lineHeight: 24, marginBottom: 20 },
  cardTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 14 },
  cardTitle: { fontSize: 16, fontWeight: '700' },
  skillsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  skillPill: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10, borderWidth: 1 },
  skillName: { fontSize: 14, fontWeight: '600' },
  expectList: { gap: 12 },
  expectRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  expectItem: { fontSize: 15, lineHeight: 22, flex: 1 },

  // Doelen
  doelenGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 12 },
  doelPill: { paddingHorizontal: 16, paddingVertical: 12, borderRadius: 12, borderWidth: 1.5 },
  doelPillText: { fontSize: 14, fontWeight: '600' },
  doelCount: { fontSize: 13, fontWeight: '600', textAlign: 'center', marginBottom: 20 },
});
