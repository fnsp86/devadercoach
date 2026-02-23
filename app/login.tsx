import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { InlineIcon } from '@/lib/icons';
import Button from '@/components/Button';

export default function LoginScreen() {
  const { colors } = useTheme();
  const { signIn, resetPassword } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin() {
    if (!email.trim() || !password.trim()) {
      setError('Vul je e-mail en wachtwoord in');
      return;
    }
    setLoading(true);
    setError('');
    const result = await signIn(email.trim(), password);
    setLoading(false);
    if (result.error) {
      setError('E-mail of wachtwoord klopt niet');
    } else {
      router.replace('/(tabs)/vandaag');
    }
  }

  async function handleForgotPassword() {
    if (!email.trim()) {
      Alert.alert('E-mail vereist', 'Vul eerst je e-mailadres in');
      return;
    }
    setLoading(true);
    const result = await resetPassword(email.trim());
    setLoading(false);
    if (result.error) {
      Alert.alert('Fout', result.error);
    } else {
      Alert.alert(
        'E-mail verzonden',
        `We hebben een herstellink gestuurd naar ${email.trim()}. Controleer ook je spam-map.`
      );
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
          <Text style={[s.title, { color: colors.text }]}>Inloggen</Text>
        </View>

        <View style={s.body}>
          <Text style={[s.label, { color: colors.text }]}>E-mailadres</Text>
          <TextInput
            style={[
              s.input,
              {
                backgroundColor: colors.surface,
                borderColor: error ? colors.red : colors.border,
                color: colors.text,
              },
            ]}
            placeholder="jouw@email.nl"
            placeholderTextColor={colors.text3}
            value={email}
            onChangeText={(t) => { setEmail(t); setError(''); }}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />

          <Text style={[s.label, { color: colors.text, marginTop: 16 }]}>Wachtwoord</Text>
          <TextInput
            style={[
              s.input,
              {
                backgroundColor: colors.surface,
                borderColor: error ? colors.red : colors.border,
                color: colors.text,
              },
            ]}
            placeholder="Je wachtwoord"
            placeholderTextColor={colors.text3}
            value={password}
            onChangeText={(t) => { setPassword(t); setError(''); }}
            secureTextEntry
            autoCapitalize="none"
          />

          {error ? (
            <Text style={[s.errorText, { color: colors.red }]}>{error}</Text>
          ) : null}

          <Pressable onPress={handleForgotPassword} style={s.forgotBtn}>
            <Text style={[s.forgotText, { color: colors.amber }]}>Wachtwoord vergeten?</Text>
          </Pressable>

          <View style={{ marginTop: 8 }}>
            <Button
              title={loading ? 'Inloggen...' : 'Inloggen'}
              onPress={handleLogin}
              variant="primary"
              size="lg"
            />
          </View>

          <Pressable onPress={() => router.replace('/register')} style={s.registerBtn}>
            <Text style={[s.registerText, { color: colors.text2 }]}>
              Nog geen account?{' '}
              <Text style={{ color: colors.amber, fontWeight: '700' }}>Registreren</Text>
            </Text>
          </Pressable>
        </View>
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
  title: { fontSize: 22, fontWeight: '800' },
  body: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  label: { fontSize: 15, fontWeight: '600', marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 4,
  },
  errorText: { fontSize: 13, fontWeight: '500', marginTop: 6, marginBottom: 4 },
  forgotBtn: { alignSelf: 'flex-end', paddingVertical: 10 },
  forgotText: { fontSize: 14, fontWeight: '600' },
  registerBtn: { marginTop: 24, alignItems: 'center' },
  registerText: { fontSize: 15, fontWeight: '500' },
});
