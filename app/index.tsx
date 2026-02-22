import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
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
  const { hydrated, profile, clearAll } = useStore();
  const router = useRouter();

  if (!hydrated) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.amber} />
          <Text style={[styles.loadingText, { color: colors.text3 }]}>Laden...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (profile) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.welcomeSection}>
            <AppIcon name="hand" size="lg" variant="featured" color={colors.amber} bgColor={colors.amberDim} />
            <Text style={[styles.welcomeTitle, { color: colors.text }]}>
              Welkom terug, {profile.naam}!
            </Text>
            <Text style={[styles.welcomeSubtitle, { color: colors.text2 }]}>
              Ga verder waar je gebleven was.
            </Text>
          </View>

          <View style={styles.buttonSection}>
            <Button
              title="Ga naar de app"
              onPress={() => router.replace('/(tabs)/vandaag')}
              variant="primary"
              size="lg"
            />
          </View>

          <View style={styles.resetSection}>
            <Button
              title="Opnieuw beginnen"
              onPress={clearAll}
              variant="ghost"
              size="sm"
            />
          </View>
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
            title="Start"
            onPress={() => router.push('/register')}
            variant="primary"
            size="lg"
          />
        </View>

        <Text style={[styles.footer, { color: colors.text3 }]}>
          Gratis - Geen account nodig
        </Text>
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
  // Welcome back screen
  welcomeSection: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 40,
    gap: 12,
  },
  welcomeTitle: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 4,
  },
  welcomeSubtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  // Hero section
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
  // Features
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
  // Buttons
  buttonSection: {
    marginTop: 8,
    marginBottom: 16,
  },
  resetSection: {
    alignItems: 'center',
    marginTop: 24,
  },
  footer: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 8,
  },
});
