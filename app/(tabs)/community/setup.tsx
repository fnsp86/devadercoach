import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { useStore } from '@/lib/store';
import { upsertCommunityProfile } from '@/lib/supabase';
import { getCurrentLocation, getCurrentCity, DUTCH_CITIES } from '@/lib/location';
import { InlineIcon } from '@/lib/icons';
import Button from '@/components/Button';

type Step = 'profile' | 'location';

export default function CommunitySetup() {
  const { colors } = useTheme();
  const { user, setCommunityProfile } = useAuth();
  const { profile } = useStore();
  const router = useRouter();

  const [step, setStep] = useState<Step>('profile');
  const [loading, setLoading] = useState(false);

  // Profile
  const [bio, setBio] = useState('');

  // Location
  const [locationMethod, setLocationMethod] = useState<'gps' | 'manual' | null>(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [citySearch, setCitySearch] = useState('');
  const [detectedCity, setDetectedCity] = useState('');
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

  const naam = profile?.naam ?? '';

  async function handleLocationGPS() {
    setLoading(true);
    const location = await getCurrentLocation();
    if (location) {
      setCoords({ lat: location.latitude, lng: location.longitude });
      const city = await getCurrentCity();
      setDetectedCity(city ?? '');
    } else {
      Alert.alert('Locatie niet beschikbaar', 'Je kunt ook handmatig een stad kiezen.');
    }
    setLoading(false);
  }

  async function handleComplete() {
    if (!user) {
      Alert.alert('Niet ingelogd', 'Log in via het profiel scherm en probeer opnieuw.');
      return;
    }
    setLoading(true);

    const stad = locationMethod === 'gps' ? detectedCity : selectedCity;

    try {
      const newProfile = await upsertCommunityProfile({
        user_id: user.id,
        naam,
        bio: bio.trim(),
        stad,
        latitude: coords?.lat ?? null,
        longitude: coords?.lng ?? null,
      });
      setCommunityProfile(newProfile);
      router.back();
    } catch (err: any) {
      Alert.alert('Fout', err.message ?? 'Er ging iets mis');
    }
    setLoading(false);
  }

  const filteredCities = citySearch
    ? DUTCH_CITIES.filter((c) => c.toLowerCase().includes(citySearch.toLowerCase()))
    : DUTCH_CITIES;

  const progressPct = step === 'profile' ? '50%' : '100%';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Back button */}
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <InlineIcon name="arrowLeft" size={20} color={colors.text2} />
            <Text style={[styles.backText, { color: colors.text2 }]}>Terug</Text>
          </Pressable>

          <Text style={[styles.title, { color: colors.text }]}>
            {step === 'profile' ? 'Over jou' : 'Je locatie'}
          </Text>
          <Text style={[styles.subtitle, { color: colors.text2 }]}>
            {step === 'profile'
              ? 'Schrijf een korte bio zodat andere vaders je leren kennen.'
              : 'Deel je locatie om vaders in de buurt te vinden.'}
          </Text>

          {/* Progress */}
          <View style={[styles.progressTrack, { backgroundColor: colors.surface2 }]}>
            <View
              style={[styles.progressFill, { backgroundColor: colors.amber, width: progressPct }]}
            />
          </View>

          {step === 'profile' && (
            <View style={styles.formSection}>
              <Text style={[styles.label, { color: colors.text }]}>Bio</Text>
              <TextInput
                style={[
                  styles.textArea,
                  { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text },
                ]}
                placeholder="Vader van 2, woont in Amsterdam, houdt van koken..."
                placeholderTextColor={colors.text3}
                value={bio}
                onChangeText={setBio}
                multiline
                numberOfLines={4}
                maxLength={200}
                textAlignVertical="top"
              />
              <Text style={[styles.charCount, { color: colors.text3 }]}>{bio.length}/200</Text>

              <View style={{ marginTop: 24 }}>
                <Button
                  title="Volgende"
                  onPress={() => setStep('location')}
                  variant="primary"
                  size="lg"
                />
              </View>
            </View>
          )}

          {step === 'location' && (
            <View style={styles.formSection}>
              {!locationMethod && (
                <View style={styles.locationOptions}>
                  <Pressable
                    onPress={() => { setLocationMethod('gps'); handleLocationGPS(); }}
                    style={[styles.locationCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
                  >
                    <InlineIcon name="mapPin" size={24} color={colors.amber} />
                    <Text style={[styles.locationCardTitle, { color: colors.text }]}>Gebruik GPS</Text>
                    <Text style={[styles.locationCardDesc, { color: colors.text2 }]}>
                      Automatisch je stad detecteren
                    </Text>
                  </Pressable>

                  <Pressable
                    onPress={() => setLocationMethod('manual')}
                    style={[styles.locationCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
                  >
                    <InlineIcon name="search" size={24} color={colors.amber} />
                    <Text style={[styles.locationCardTitle, { color: colors.text }]}>Kies je stad</Text>
                    <Text style={[styles.locationCardDesc, { color: colors.text2 }]}>
                      Selecteer handmatig
                    </Text>
                  </Pressable>
                </View>
              )}

              {locationMethod === 'gps' && loading && (
                <View style={styles.loadingBox}>
                  <ActivityIndicator size="large" color={colors.amber} />
                  <Text style={[styles.loadingText, { color: colors.text2 }]}>Locatie zoeken...</Text>
                </View>
              )}

              {locationMethod === 'gps' && !loading && detectedCity && (
                <View style={styles.detectedBox}>
                  <InlineIcon name="mapPin" size={20} color={colors.amber} />
                  <Text style={[styles.detectedText, { color: colors.text }]}>{detectedCity}</Text>
                </View>
              )}

              {locationMethod === 'manual' && (
                <View>
                  <TextInput
                    style={[styles.input, { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text }]}
                    placeholder="Zoek je stad..."
                    placeholderTextColor={colors.text3}
                    value={citySearch}
                    onChangeText={setCitySearch}
                    autoCapitalize="words"
                    returnKeyType="done"
                    onSubmitEditing={() => Keyboard.dismiss()}
                  />
                  <View style={styles.cityGrid}>
                    {filteredCities.slice(0, 20).map((city) => (
                      <Pressable
                        key={city}
                        onPress={() => { setSelectedCity(city); Keyboard.dismiss(); }}
                        style={[
                          styles.cityChip,
                          {
                            backgroundColor: selectedCity === city ? colors.amberDim : colors.surface,
                            borderColor: selectedCity === city ? colors.amber : colors.border,
                          },
                        ]}
                      >
                        <Text style={[styles.cityChipText, { color: selectedCity === city ? colors.amber : colors.text2 }]}>
                          {city}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                </View>
              )}

              {(locationMethod === 'gps' && detectedCity) || (locationMethod === 'manual' && selectedCity) ? (
                <View style={{ marginTop: 24 }}>
                  <Button
                    title={loading ? 'Even wachten...' : 'Klaar!'}
                    onPress={handleComplete}
                    variant="primary"
                    size="lg"
                  />
                </View>
              ) : null}

              {locationMethod && (
                <Pressable
                  onPress={() => { setLocationMethod(null); setDetectedCity(''); setSelectedCity(''); }}
                  style={{ marginTop: 16, alignItems: 'center' }}
                >
                  <Text style={[styles.switchText, { color: colors.amber }]}>Andere methode kiezen</Text>
                </Pressable>
              )}

              <Pressable onPress={handleComplete} style={{ marginTop: 16, alignItems: 'center' }}>
                <Text style={[styles.switchText, { color: colors.text3 }]}>Overslaan</Text>
              </Pressable>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 40 },
  backBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 16 },
  backText: { fontSize: 15, fontWeight: '500' },
  title: { fontSize: 28, fontWeight: '800', marginBottom: 6 },
  subtitle: { fontSize: 15, fontWeight: '500', lineHeight: 22, marginBottom: 16 },
  progressTrack: { height: 4, borderRadius: 2, marginBottom: 28, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 2 },
  formSection: { flex: 1 },
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
    fontSize: 16,
    minHeight: 100,
  },
  charCount: { fontSize: 12, textAlign: 'right', marginTop: 4 },
  switchText: { fontSize: 14, fontWeight: '600' },
  locationOptions: { gap: 12 },
  locationCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    gap: 8,
  },
  locationCardTitle: { fontSize: 16, fontWeight: '700' },
  locationCardDesc: { fontSize: 14 },
  loadingBox: { alignItems: 'center', paddingVertical: 40, gap: 12 },
  loadingText: { fontSize: 15 },
  detectedBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 16,
    justifyContent: 'center',
  },
  detectedText: { fontSize: 20, fontWeight: '700' },
  cityGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 },
  cityChip: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  cityChipText: { fontSize: 14, fontWeight: '500' },
});
