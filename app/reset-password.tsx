import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { InlineIcon } from '@/lib/icons';
import Button from '@/components/Button';

type Step = 'otp' | 'password';

export default function ResetPasswordScreen() {
  const { colors } = useTheme();
  const { verifyRecoveryOtp, updatePassword, pendingPasswordReset } = useAuth();
  const router = useRouter();
  const { email: paramEmail } = useLocalSearchParams<{ email?: string }>();

  // If we arrived via deep link (pendingPasswordReset=true), skip OTP step
  const [step, setStep] = useState<Step>(pendingPasswordReset ? 'password' : 'otp');
  const [otpCode, setOtpCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleVerifyOtp() {
    if (!paramEmail) {
      setError('E-mailadres ontbreekt. Ga terug en probeer opnieuw.');
      return;
    }
    if (otpCode.trim().length < 8) {
      setError('Voer de 8-cijferige code in uit je e-mail');
      return;
    }
    setLoading(true);
    setError('');
    const result = await verifyRecoveryOtp(paramEmail, otpCode.trim());
    setLoading(false);
    if (result.error) {
      setError('Ongeldige code. Controleer je e-mail en probeer opnieuw.');
    } else {
      setStep('password');
    }
  }

  async function handleSetPassword() {
    if (password.length < 6) {
      setError('Wachtwoord moet minimaal 6 tekens zijn');
      return;
    }
    if (password !== confirmPassword) {
      setError('Wachtwoorden komen niet overeen');
      return;
    }
    setLoading(true);
    setError('');
    const result = await updatePassword(password);
    setLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      Alert.alert('Gelukt!', 'Je wachtwoord is gewijzigd. Je kunt nu inloggen.', [
        { text: 'OK', onPress: () => router.replace('/') },
      ]);
    }
  }

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {/* Header */}
        <View style={[s.header, { borderBottomColor: colors.border }]}>
          <Pressable onPress={() => router.back()} style={s.backBtn}>
            <InlineIcon name="arrowLeft" size={22} color={colors.text} />
          </Pressable>
          <Text style={[s.headerTitle, { color: colors.text }]}>Wachtwoord herstellen</Text>
        </View>

        <ScrollView contentContainerStyle={s.body} keyboardShouldPersistTaps="handled">
          {step === 'otp' ? (
            <>
              <Text style={[s.title, { color: colors.text }]}>Code invoeren</Text>
              <Text style={[s.subtitle, { color: colors.text2 }]}>
                We hebben een 8-cijferige code naar {paramEmail ?? 'je e-mail'} gestuurd. Voer deze hieronder in.
              </Text>

              <Text style={[s.label, { color: colors.text }]}>Herstelcode</Text>
              <TextInput
                style={[
                  s.input,
                  s.otpInput,
                  {
                    backgroundColor: colors.surface,
                    borderColor: error ? colors.red : colors.border,
                    color: colors.text,
                  },
                ]}
                placeholder="00000000"
                placeholderTextColor={colors.text3}
                value={otpCode}
                onChangeText={(t) => { setOtpCode(t.replace(/[^0-9]/g, '').slice(0, 8)); setError(''); }}
                keyboardType="number-pad"
                maxLength={8}
                autoFocus
              />

              {error ? (
                <Text style={[s.errorText, { color: colors.red }]}>{error}</Text>
              ) : null}

              <View style={{ marginTop: 24 }}>
                <Button
                  title={loading ? 'Controleren...' : 'Code verifiëren'}
                  onPress={handleVerifyOtp}
                  variant="primary"
                  size="lg"
                  disabled={loading || otpCode.length < 8}
                />
              </View>

              <Text style={[s.hint, { color: colors.text3 }]}>
                Geen code ontvangen? Controleer je spam-map of ga terug om opnieuw te versturen.
              </Text>
            </>
          ) : (
            <>
              <Text style={[s.title, { color: colors.text }]}>Nieuw wachtwoord</Text>
              <Text style={[s.subtitle, { color: colors.text2 }]}>
                Kies een nieuw wachtwoord voor je account.
              </Text>

              <Text style={[s.label, { color: colors.text }]}>Nieuw wachtwoord</Text>
              <TextInput
                style={[
                  s.input,
                  {
                    backgroundColor: colors.surface,
                    borderColor: error ? colors.red : colors.border,
                    color: colors.text,
                  },
                ]}
                placeholder="Minimaal 6 tekens"
                placeholderTextColor={colors.text3}
                value={password}
                onChangeText={(t) => { setPassword(t); setError(''); }}
                secureTextEntry
                autoCapitalize="none"
                autoFocus
              />

              <Text style={[s.label, { color: colors.text, marginTop: 16 }]}>Bevestig wachtwoord</Text>
              <TextInput
                style={[
                  s.input,
                  {
                    backgroundColor: colors.surface,
                    borderColor: error ? colors.red : colors.border,
                    color: colors.text,
                  },
                ]}
                placeholder="Herhaal je wachtwoord"
                placeholderTextColor={colors.text3}
                value={confirmPassword}
                onChangeText={(t) => { setConfirmPassword(t); setError(''); }}
                secureTextEntry
                autoCapitalize="none"
              />

              {error ? (
                <Text style={[s.errorText, { color: colors.red }]}>{error}</Text>
              ) : null}

              <View style={{ marginTop: 24 }}>
                <Button
                  title={loading ? 'Opslaan...' : 'Wachtwoord opslaan'}
                  onPress={handleSetPassword}
                  variant="primary"
                  size="lg"
                  disabled={loading}
                />
              </View>
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  backBtn: { padding: 4 },
  headerTitle: { fontSize: 22, fontWeight: '800' },
  body: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
  },
  title: { fontSize: 24, fontWeight: '800', marginBottom: 8 },
  subtitle: { fontSize: 15, fontWeight: '500', lineHeight: 22, marginBottom: 24 },
  label: { fontSize: 15, fontWeight: '600', marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 4,
  },
  otpInput: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 6,
    textAlign: 'center',
  },
  errorText: { fontSize: 13, fontWeight: '500', marginTop: 6, marginBottom: 4 },
  hint: { fontSize: 13, fontWeight: '500', textAlign: 'center', marginTop: 20, lineHeight: 18 },
});
