import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Redirect } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { SKILL_LIST, ALL_SKILLS } from '@/lib/skills';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { SKILL_COLORS } from '@/lib/colors';
import { AppIcon, InlineIcon, getSkillIcon, type IconName } from '@/lib/icons';

const EXPECT_ITEMS: { icon: IconName; text: string }[] = [
  { icon: 'calendarDays', text: '7 weektaken op jouw niveau' },
  { icon: 'bookOpen', text: 'Interactieve leermodules' },
  { icon: 'brain', text: "Scenario's en quiz-vragen" },
  { icon: 'trophy', text: 'XP, badges en levels' },
  { icon: 'waves', text: 'Dagelijkse Vader Pulse check-in' },
];

export default function OnboardingSkills() {
  const { colors } = useTheme();
  const { profile, saveOnboarding } = useStore();
  const router = useRouter();

  if (!profile) {
    return <Redirect href="/onboarding/children?setup=true" />;
  }

  function handleStart() {
    saveOnboarding({
      ageGroup: profile!.ageGroup,
      skill: ALL_SKILLS[0],
      skills: ALL_SKILLS,
    });
    router.replace('/(tabs)/vandaag');
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.greeting, { color: colors.text }]}>
          Welkom {profile.naam}!
        </Text>

        <Text style={[styles.instructions, { color: colors.text2 }]}>
          Je gaat aan de slag met alle 8 opvoedvaardigheden. Elke week krijg je
          taken, inzichten en oefeningen op maat van jouw kinderen.
        </Text>

        <Card
          style={{
            marginTop: 8,
            marginBottom: 8,
            backgroundColor: colors.amberDim,
            borderColor: colors.amber + '30',
          }}
        >
          <View style={styles.cardTitleRow}>
            <InlineIcon name="target" size={16} color={colors.amber} />
            <Text style={[styles.cardTitle, { color: colors.amber }]}>Jouw vaardigheden</Text>
          </View>
          <View style={styles.skillsGrid}>
            {SKILL_LIST.map((skill) => {
              const skillColor = SKILL_COLORS[skill.label] || colors.amber;
              return (
                <View
                  key={skill.label}
                  style={[
                    styles.skillPill,
                    { backgroundColor: skillColor + '18', borderColor: skillColor + '40' },
                  ]}
                >
                  <AppIcon name={getSkillIcon(skill.label)} size="sm" variant="compact" color={skillColor} />
                  <Text style={[styles.skillName, { color: skillColor }]}>
                    {skill.label}
                  </Text>
                </View>
              );
            })}
          </View>
        </Card>

        <Card style={{ marginTop: 8 }}>
          <View style={styles.cardTitleRow}>
            <InlineIcon name="fileText" size={16} color={colors.text} />
            <Text style={[styles.cardTitle, { color: colors.text }]}>Wat je kunt verwachten</Text>
          </View>
          <View style={styles.expectList}>
            {EXPECT_ITEMS.map((item, index) => (
              <View key={index} style={styles.expectRow}>
                <InlineIcon name={item.icon} size={16} color={colors.text2} />
                <Text style={[styles.expectItem, { color: colors.text2 }]}>{item.text}</Text>
              </View>
            ))}
          </View>
        </Card>

        <View style={styles.buttonContainer}>
          <Button
            title="Start je reis als vader"
            onPress={handleStart}
            size="lg"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 8,
  },
  instructions: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
  },
  skillName: {
    fontSize: 14,
    fontWeight: '600',
  },
  expectList: {
    gap: 12,
  },
  expectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  expectItem: {
    fontSize: 15,
    lineHeight: 22,
    flex: 1,
  },
  buttonContainer: {
    marginTop: 24,
    marginBottom: 20,
  },
});
