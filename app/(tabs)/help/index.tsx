import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { HELP_SITUATIONS } from '@/lib/help';
import type { HelpAgeGroup } from '@/lib/types';
import { SKILL_COLORS } from '@/lib/colors';
import { AppIcon, InlineIcon, getSkillIcon, emojiToIcon } from '@/lib/icons';
import type { IconName } from '@/lib/icons';

const AGE_TABS: { age: HelpAgeGroup; label: string; icon: IconName }[] = [
  { age: '0-3', label: '0-3', icon: 'baby' },
  { age: '4-7', label: '4-7', icon: 'users' },
  { age: '8-12', label: '8-12', icon: 'users' },
  { age: '13-18', label: '13-18', icon: 'users' },
];

// Skill icons are now provided via getSkillIcon() from @/lib/icons

export default function HelpPage() {
  const { colors } = useTheme();
  const router = useRouter();
  const { profile } = useStore();

  const [selectedAge, setSelectedAge] = useState<HelpAgeGroup>('4-7');

  useEffect(() => {
    if (profile?.children && profile.children.length > 0) {
      const firstChild = profile.children[0];
      const age = firstChild.age;
      if (age <= 3) setSelectedAge('0-3');
      else if (age <= 7) setSelectedAge('4-7');
      else if (age <= 12) setSelectedAge('8-12');
      else setSelectedAge('13-18');
    }
  }, [profile]);

  const filteredSituations = HELP_SITUATIONS.filter(
    (s) => s.ageGroup === selectedAge,
  );

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Header */}
        <View style={styles.heroSection}>
          <View style={[styles.heroIconWrap, { backgroundColor: colors.amber + '18' }]}>
            <AppIcon name="lightbulb" size="lg" variant="compact" color={colors.amber} iconSize={32} />
          </View>
          <Text style={[styles.heroTitle, { color: colors.text }]}>
            Hulp per Situatie
          </Text>
          <Text style={[styles.heroSub, { color: colors.text2 }]}>
            Direct toepasbare hulp met psychologie, stappen en voorbeeldzinnen
          </Text>
        </View>

        {/* Age tabs */}
        <View style={styles.ageTabsRow}>
          {AGE_TABS.map((tab) => {
            const isActive = selectedAge === tab.age;
            return (
              <Pressable
                key={tab.age}
                onPress={() => setSelectedAge(tab.age)}
                style={[
                  styles.ageTab,
                  {
                    backgroundColor: isActive ? colors.amber : colors.surface,
                    borderColor: isActive ? colors.amber : colors.border,
                  },
                  isActive && styles.ageTabActive,
                ]}
              >
                <InlineIcon name={tab.icon} size={20} color={isActive ? '#FFFFFF' : colors.text2} />
                <Text
                  style={[
                    styles.ageTabLabel,
                    { color: isActive ? '#FFFFFF' : colors.text2 },
                  ]}
                >
                  {tab.label} jaar
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Count */}
        <Text style={[styles.countText, { color: colors.text3 }]}>
          {filteredSituations.length} situaties gevonden
        </Text>

        {/* Situations */}
        {filteredSituations.map((situation) => {
          const skillColor = SKILL_COLORS[situation.skillLink] || colors.amber;
          const skillIconName = getSkillIcon(situation.skillLink);
          return (
            <Pressable
              key={situation.id}
              onPress={() => router.push(`/(tabs)/help/${situation.id}`)}
              style={[
                styles.card,
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                },
              ]}
            >
              <View style={styles.cardHeader}>
                <View style={[styles.cardIconWrap, { backgroundColor: skillColor + '14' }]}>
                  <AppIcon name={emojiToIcon(situation.icon)} size="md" variant="compact" color={skillColor} />
                </View>
                <View style={styles.cardHeaderText}>
                  <Text style={[styles.cardTitle, { color: colors.text }]} numberOfLines={2}>
                    {situation.situatie}
                  </Text>
                  <Text
                    style={[styles.cardPreview, { color: colors.text3 }]}
                    numberOfLines={2}
                  >
                    {situation.watSpeeltInKind}
                  </Text>
                </View>
              </View>

              <View style={styles.cardFooter}>
                <View style={[styles.skillTag, { backgroundColor: skillColor + '14' }]}>
                  <InlineIcon name={skillIconName} size={13} color={skillColor} />
                  <Text style={[styles.skillTagText, { color: skillColor }]}>
                    {situation.skillLink}
                  </Text>
                </View>
                <View style={[styles.arrowCircle, { backgroundColor: colors.amber + '18' }]}>
                  <InlineIcon name="arrowRight" size={16} color={colors.amber} />
                </View>
              </View>
            </Pressable>
          );
        })}

        {filteredSituations.length === 0 && (
          <View style={styles.emptyContainer}>
            <View style={[styles.emptyIconWrap, { backgroundColor: colors.surface }]}>
              <AppIcon name="search" size="lg" variant="compact" color={colors.text3} iconSize={36} />
            </View>
            <Text style={[styles.emptyTitle, { color: colors.text }]}>
              Geen situaties gevonden
            </Text>
            <Text style={[styles.emptyText, { color: colors.text3 }]}>
              Probeer een andere leeftijdscategorie
            </Text>
          </View>
        )}

        {/* Info box */}
        <View style={[styles.infoCard, {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        }]}>
          <View style={{flexDirection:'row',alignItems:'center',gap:6}}>
            <InlineIcon name="zap" size={16} color={colors.amber} />
            <Text style={[styles.infoTitle, { color: colors.text }]}>
              Per situatie krijg je
            </Text>
          </View>
          <View style={styles.infoList}>
            {([
              { icon: 'brain' as IconName, text: 'Psychologische achtergrond' },
              { icon: 'baby' as IconName, text: 'Wat speelt in je kind' },
              { icon: 'user' as IconName, text: 'Wat speelt in jou' },
              { icon: 'zap' as IconName, text: '3 concrete stappen' },
              { icon: 'messageCircle' as IconName, text: 'Een voorbeeldzin' },
              { icon: 'alertTriangle' as IconName, text: 'Veelgemaakte valkuilen' },
            ]).map((item, i) => (
              <View key={i} style={styles.infoItem}>
                <InlineIcon name={item.icon} size={18} color={colors.amber} />
                <Text style={[styles.infoText, { color: colors.text2 }]}>{item.text}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 40 },

  // Hero
  heroSection: { alignItems: 'center', marginBottom: 24 },
  heroIconWrap: {
    width: 64,
    height: 64,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  heroEmoji: { fontSize: 32 },
  heroTitle: { fontSize: 26, fontWeight: '800', marginBottom: 8, textAlign: 'center' },
  heroSub: { fontSize: 15, lineHeight: 22, textAlign: 'center', paddingHorizontal: 10 },

  // Age tabs
  ageTabsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 18,
  },
  ageTab: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 14,
    borderWidth: 1,
    gap: 2,
  },
  ageTabActive: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  ageTabEmoji: { fontSize: 20 },
  ageTabLabel: { fontSize: 12, fontWeight: '700' },

  // Count
  countText: { fontSize: 13, marginBottom: 14 },

  // Cards
  card: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 14,
  },
  cardIconWrap: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIcon: { fontSize: 28 },
  cardHeaderText: { flex: 1 },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
    lineHeight: 22,
  },
  cardPreview: {
    fontSize: 13,
    lineHeight: 19,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skillTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  skillTagEmoji: { fontSize: 13 },
  skillTagText: { fontSize: 12, fontWeight: '600' },
  arrowCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: { fontSize: 16, fontWeight: '700' },

  // Empty
  emptyContainer: { alignItems: 'center', paddingVertical: 50 },
  emptyIconWrap: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  emptyEmoji: { fontSize: 36 },
  emptyTitle: { fontSize: 18, fontWeight: '700', marginBottom: 6 },
  emptyText: { fontSize: 14 },

  // Info card
  infoCard: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 20,
    marginTop: 20,
  },
  infoTitle: { fontSize: 16, fontWeight: '700', marginBottom: 14 },
  infoList: { gap: 10 },
  infoItem: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  infoEmoji: { fontSize: 18 },
  infoText: { fontSize: 14, lineHeight: 20 },

  bottomSpacer: { height: 20 },
});
