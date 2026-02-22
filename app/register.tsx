import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import Button from '@/components/Button';
import { InlineIcon, type IconName } from '@/lib/icons';
import type { Child, UserProfile } from '@/lib/types';

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
}

function createEmptyChild(): ChildForm {
  return {
    id: Date.now().toString() + Math.random().toString(36).substring(2, 6),
    name: '',
    age: '',
  };
}

const AGE_ICONS: Record<string, IconName> = {
  '0-2': 'baby',
  '3-5': 'user',
  '6-9': 'user',
  '10-12': 'user',
  '13-16': 'users',
};

export default function RegisterScreen() {
  const { colors } = useTheme();
  const { saveProfile } = useStore();
  const router = useRouter();

  const [step, setStep] = useState<1 | 2>(1);

  // Step 1 fields
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [vaderLeeftijd, setVaderLeeftijd] = useState('');

  // Step 2: children
  const [children, setChildren] = useState<ChildForm[]>([createEmptyChild()]);

  // Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validateStep1(): boolean {
    const newErrors: Record<string, string> = {};
    if (!naam.trim()) newErrors.naam = 'Vul je naam in';
    if (!email.trim()) {
      newErrors.email = 'Vul je e-mailadres in';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Vul een geldig e-mailadres in';
    }
    if (vaderLeeftijd && (isNaN(Number(vaderLeeftijd)) || Number(vaderLeeftijd) < 16 || Number(vaderLeeftijd) > 99)) {
      newErrors.vaderLeeftijd = 'Vul een geldige leeftijd in (16-99)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function validateStep2(): boolean {
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

  function updateChild(id: string, field: 'name' | 'age', value: string) {
    setChildren((prev) => prev.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
    if (errors.children) setErrors({});
  }

  function addChild() {
    setChildren((prev) => [...prev, createEmptyChild()]);
  }

  function removeChild(id: string) {
    setChildren((prev) => prev.filter((c) => c.id !== id));
  }

  function handleNext() {
    if (validateStep1()) {
      setErrors({});
      setStep(2);
    }
  }

  function handleSubmit() {
    if (!validateStep2()) return;

    const validChildren: Child[] = children
      .filter((c) => c.name.trim() && c.age.trim() && !isNaN(parseInt(c.age, 10)))
      .map((c) => {
        const age = parseInt(c.age, 10);
        return { id: c.id, name: c.name.trim(), age, ageGroup: getAgeGroup(age) };
      });

    // Primary ageGroup comes from first child
    const primaryAgeGroup = (validChildren[0]?.ageGroup ?? '6-9') as UserProfile['ageGroup'];

    const profile: UserProfile = {
      naam: naam.trim(),
      email: email.trim(),
      ...(vaderLeeftijd ? { vaderLeeftijd: Number(vaderLeeftijd) } : {}),
      ageGroup: primaryAgeGroup,
      doel: 'Gewoon een betere vader zijn', // legacy field, no longer shown
      startDate: new Date().toISOString().split('T')[0],
      children: validChildren,
    };

    saveProfile(profile);
    router.push('/onboarding');
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={[styles.stepIndicator, { color: colors.text3 }]}>
              Stap {step} van 2
            </Text>
            <Text style={[styles.title, { color: colors.text }]}>
              {step === 1 ? 'Over jou' : 'Je kinderen'}
            </Text>
            <Text style={[styles.subtitle, { color: colors.text2 }]}>
              {step === 1
                ? 'We personaliseren de app voor jou.'
                : 'Voeg je kinderen toe – we stemmen de taken af op hun leeftijd.'}
            </Text>
          </View>

          {/* Progress bar */}
          <View style={[styles.progressTrack, { backgroundColor: colors.surface2 }]}>
            <View
              style={[
                styles.progressFill,
                { backgroundColor: colors.amber, width: step === 1 ? '50%' : '100%' },
              ]}
            />
          </View>

          {step === 1 ? (
            <View style={styles.formSection}>
              {/* Naam */}
              <View style={styles.fieldGroup}>
                <Text style={[styles.label, { color: colors.text }]}>Naam *</Text>
                <TextInput
                  style={[styles.input, { backgroundColor: colors.surface, borderColor: errors.naam ? colors.red : colors.border, color: colors.text }]}
                  placeholder="Je voornaam"
                  placeholderTextColor={colors.text3}
                  value={naam}
                  onChangeText={(text) => { setNaam(text); if (errors.naam) setErrors((p) => ({ ...p, naam: '' })); }}
                  autoCapitalize="words"
                  returnKeyType="next"
                />
                {errors.naam ? <Text style={[styles.errorText, { color: colors.red }]}>{errors.naam}</Text> : null}
              </View>

              {/* Email */}
              <View style={styles.fieldGroup}>
                <Text style={[styles.label, { color: colors.text }]}>E-mail *</Text>
                <TextInput
                  style={[styles.input, { backgroundColor: colors.surface, borderColor: errors.email ? colors.red : colors.border, color: colors.text }]}
                  placeholder="je@email.nl"
                  placeholderTextColor={colors.text3}
                  value={email}
                  onChangeText={(text) => { setEmail(text); if (errors.email) setErrors((p) => ({ ...p, email: '' })); }}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                />
                {errors.email ? <Text style={[styles.errorText, { color: colors.red }]}>{errors.email}</Text> : null}
              </View>

              {/* Vader leeftijd */}
              <View style={styles.fieldGroup}>
                <Text style={[styles.label, { color: colors.text }]}>Je leeftijd (optioneel)</Text>
                <TextInput
                  style={[styles.input, { backgroundColor: colors.surface, borderColor: errors.vaderLeeftijd ? colors.red : colors.border, color: colors.text }]}
                  placeholder="Bijv. 35"
                  placeholderTextColor={colors.text3}
                  value={vaderLeeftijd}
                  onChangeText={(text) => { setVaderLeeftijd(text.replace(/[^0-9]/g, '')); if (errors.vaderLeeftijd) setErrors((p) => ({ ...p, vaderLeeftijd: '' })); }}
                  keyboardType="number-pad"
                  maxLength={2}
                  returnKeyType="done"
                />
                {errors.vaderLeeftijd ? <Text style={[styles.errorText, { color: colors.red }]}>{errors.vaderLeeftijd}</Text> : null}
              </View>

              <View style={styles.buttonRow}>
                <Button title="Volgende →" onPress={handleNext} variant="primary" size="lg" />
              </View>
            </View>
          ) : (
            <View style={styles.formSection}>
              {children.map((child, index) => {
                const ageNum = parseInt(child.age, 10);
                const ageGroup = !isNaN(ageNum) && child.age.trim() ? getAgeGroup(ageNum) : null;
                return (
                  <View
                    key={child.id}
                    style={[styles.childCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
                  >
                    <View style={styles.childCardHeader}>
                      <Text style={[styles.childCardTitle, { color: colors.text }]}>
                        Kind {index + 1}
                      </Text>
                      {children.length > 1 && (
                        <Pressable
                          onPress={() => removeChild(child.id)}
                          style={[styles.removeBtn, { backgroundColor: colors.redDim }]}
                        >
                          <Text style={[styles.removeBtnText, { color: colors.red }]}>✕</Text>
                        </Pressable>
                      )}
                    </View>

                    <Text style={[styles.label, { color: colors.text }]}>Naam</Text>
                    <TextInput
                      style={[styles.input, { backgroundColor: colors.surface2, borderColor: colors.border, color: colors.text }]}
                      placeholder="Naam van je kind"
                      placeholderTextColor={colors.text3}
                      value={child.name}
                      onChangeText={(v) => updateChild(child.id, 'name', v)}
                      autoCapitalize="words"
                    />

                    <Text style={[styles.label, { color: colors.text }]}>Leeftijd</Text>
                    <TextInput
                      style={[styles.input, { backgroundColor: colors.surface2, borderColor: colors.border, color: colors.text }]}
                      placeholder="Leeftijd in jaren"
                      placeholderTextColor={colors.text3}
                      value={child.age}
                      onChangeText={(v) => updateChild(child.id, 'age', v.replace(/[^0-9]/g, ''))}
                      keyboardType="number-pad"
                      maxLength={2}
                      returnKeyType="done"
                    />

                    {ageGroup && (
                      <View style={[styles.ageTag, { backgroundColor: colors.amberDim }]}>
                        <InlineIcon name={AGE_ICONS[ageGroup]} size={14} color={colors.amber} />
                        <Text style={[styles.ageTagText, { color: colors.amber }]}>
                          {ageGroup} jaar
                        </Text>
                      </View>
                    )}
                  </View>
                );
              })}

              {errors.children ? (
                <Text style={[styles.errorText, { color: colors.red, marginBottom: 8 }]}>{errors.children}</Text>
              ) : null}

              <Pressable
                onPress={addChild}
                style={[styles.addChildBtn, { borderColor: colors.border, backgroundColor: colors.surface }]}
              >
                <Text style={[styles.addChildBtnText, { color: colors.amber }]}>
                  + Nog een kind toevoegen
                </Text>
              </Pressable>

              <View style={styles.buttonRow}>
                <View style={{ flex: 1 }}>
                  <Button title="← Terug" onPress={() => setStep(1)} variant="secondary" size="md" />
                </View>
                <View style={{ flex: 2 }}>
                  <Button title="Volgende →" onPress={handleSubmit} variant="primary" size="lg" />
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  flex: { flex: 1 },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  header: { marginBottom: 20 },
  stepIndicator: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  title: { fontSize: 28, fontWeight: '800', marginBottom: 6 },
  subtitle: { fontSize: 15, fontWeight: '500' },
  progressTrack: {
    height: 4,
    borderRadius: 2,
    marginBottom: 28,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', borderRadius: 2 },
  formSection: { flex: 1 },
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
  errorText: { fontSize: 13, fontWeight: '500', marginTop: 6 },
  buttonRow: { flexDirection: 'row', gap: 12, marginTop: 24 },
  childCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  childCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  childCardTitle: { fontSize: 16, fontWeight: '700' },
  removeBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeBtnText: { fontSize: 14, fontWeight: '700' },
  ageTag: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: 6,
    gap: 6,
  },
  // ageTagEmoji removed (replaced by InlineIcon)
  ageTagText: { fontSize: 13, fontWeight: '600' },
  addChildBtn: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 8,
  },
  addChildBtnText: { fontSize: 15, fontWeight: '600' },
});
