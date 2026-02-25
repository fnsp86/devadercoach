import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { AppIcon, InlineIcon, type IconName } from '@/lib/icons';

const FEATURES: { icon: IconName; text: string }[] = [
  { icon: 'target', text: 'Dagelijkse oefeningen op maat' },
  { icon: 'bookOpen', text: 'Interactieve trainingen & leermodules' },
  { icon: 'brain', text: 'Gebaseerd op psychologie & onderzoek' },
  { icon: 'barChart3', text: 'Volg je groei per vaardigheid' },
  { icon: 'zap', text: '2-10 minuten per dag' },
];

export default function IndexScreen() {
  const { colors } = useTheme();
  const { hydrated, profile } = useStore();
  const { session, loading: authLoading } = useAuth();
  const router = useRouter();

  // Auto-redirect returning users who are logged in
  useEffect(() => {
    if (hydrated && !authLoading && profile && session) {
      // Verify session is still valid (not stale from a recent signOut)
      supabase.auth.getSession().then(({ data: { session: current } }) => {
        if (current) {
          router.replace('/(tabs)/vandaag');
        }
      });
    }
  }, [hydrated, authLoading, profile, session]);

  if (!hydrated || authLoading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.amber} />
          <Text style={[styles.loadingText, { color: colors.text3 }]}>Laden...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // While redirecting logged-in users, show spinner
  if (profile && session) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.amber} />
        </View>
      </SafeAreaView>
    );
  }

  // Logged out but profile exists — welcome back
  if (profile && !session) {
    const initials = profile.naam ? profile.naam.slice(0, 2).toUpperCase() : '?';
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.heroSection}>
            <View style={[styles.welcomeAvatar, { backgroundColor: colors.amber }]}>
              <Text style={styles.welcomeAvatarText}>{initials}</Text>
            </View>
            <Text style={[styles.appName, { color: colors.text }]}>
              Welkom terug, {profile.naam?.split(' ')[0] || 'vader'}!
            </Text>
            <Text style={[styles.tagline, { color: colors.text2 }]}>
              Log in om verder te gaan waar je gebleven was
            </Text>
          </View>

          <View style={styles.buttonSection}>
            <Button
              title="Inloggen"
              onPress={() => router.push('/login')}
              variant="primary"
              size="lg"
            />
          </View>

          <Pressable onPress={() => router.push('/register')} style={styles.loginLink}>
            <Text style={[styles.loginText, { color: colors.text2 }]}>
              Ander account?{' '}
              <Text style={{ color: colors.amber, fontWeight: '700' }}>Registreren</Text>
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroSection}>
          <AppIcon name="heart" size="lg" variant="featured" color={colors.amber} bgColor={colors.amberDim} />
          <Text style={[styles.appName, { color: colors.amber }]}>De Vadercoach</Text>
          <Text style={[styles.tagline, { color: colors.text2 }]}>
            Word elke dag een iets betere vader
          </Text>
        </View>

        <Card style={{ marginBottom: 24 }}>
          <Text style={[styles.featuresTitle, { color: colors.text }]}>Wat je kunt verwachten</Text>
          {FEATURES.map((feature, index) => (
            <View key={index} style={styles.featureRow}>
              <View style={styles.featureIconWrap}>
                <InlineIcon name={feature.icon} size={20} color={colors.amber} />
              </View>
              <Text style={[styles.featureText, { color: colors.text2 }]}>{feature.text}</Text>
            </View>
          ))}
        </Card>

        <View style={styles.buttonSection}>
          <Button
            title="Account aanmaken"
            onPress={() => router.push('/register')}
            variant="primary"
            size="lg"
          />
        </View>

        <Pressable onPress={() => router.push('/login')} style={styles.loginLink}>
          <Text style={[styles.loginText, { color: colors.text2 }]}>
            Al een account?{' '}
            <Text style={{ color: colors.amber, fontWeight: '700' }}>Inloggen</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  loadingText: {
    fontSize: 15,
    fontWeight: '500',
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 32,
    paddingTop: 40,
    gap: 12,
  },
  appName: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 4,
  },
  tagline: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '500',
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    gap: 12,
  },
  featureIconWrap: {
    width: 28,
    alignItems: 'center',
  },
  featureText: {
    fontSize: 15,
    fontWeight: '500',
    flex: 1,
  },
  buttonSection: {
    marginTop: 8,
    marginBottom: 16,
  },
  loginLink: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  loginText: {
    fontSize: 15,
    fontWeight: '500',
  },
  welcomeAvatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeAvatarText: {
    color: '#000',
    fontSize: 28,
    fontWeight: '800',
  },
});
