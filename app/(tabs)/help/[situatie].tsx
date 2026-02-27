import React, { useEffect, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { getHelpSituations } from '@/lib/help';
import { resolveActiveThemes } from '@/lib/theme-resolver';
import type { Skill, HelpSituation } from '@/lib/types';
import { SKILL_COLORS } from '@/lib/colors';
import { AppIcon, InlineIcon, emojiToIcon } from '@/lib/icons';
import Card from '@/components/Card';
import SkillBadge from '@/components/SkillBadge';

const THEME_PURPLE = '#8B5CF6';

function getThemeLabel(situation: HelpSituation): string | null {
  if (!situation.themes || situation.themes.length === 0) return null;
  if (situation.themes.includes('bonuskind') || situation.themes.includes('samengesteld_gezin') || situation.themes.includes('co-ouderschap')) {
    return 'Bonuskind';
  }
  return 'Extra zorg';
}

export default function HelpDetailPage() {
  const { colors } = useTheme();
  const router = useRouter();
  const { situatie: situatieId } = useLocalSearchParams<{
    situatie: string;
  }>();

  const {
    profile,
    isHelpFavorite,
    toggleHelpFavorite,
    addHelpHistory,
    helpFeedback,
    setHelpFeedback,
  } = useStore();

  const activeThemes = useMemo(
    () => (profile ? resolveActiveThemes(profile) : []),
    [profile],
  );

  const allSituations = useMemo(
    () => getHelpSituations(activeThemes),
    [activeThemes],
  );

  const situation = allSituations.find((s) => s.id === situatieId);
  const col = situation
    ? SKILL_COLORS[situation.skillLink] || colors.amber
    : colors.amber;

  const isFavorite = situation ? isHelpFavorite(situation.id) : false;
  const themeLabel = situation ? getThemeLabel(situation) : null;
  const currentFeedback = situatieId ? helpFeedback[situatieId] : undefined;

  // Track help history on mount
  useEffect(() => {
    if (situatieId) {
      addHelpHistory(situatieId);
    }
  }, [situatieId]);

  // Related situations: better scoring with theme overlap
  const relatedSituations = useMemo(() => {
    if (!situation) return [];
    return allSituations
      .filter((s) => s.id !== situation.id)
      .map((s) => {
        let score = 0;
        if (s.skillLink === situation.skillLink) score += 3;
        if (s.ageGroup === situation.ageGroup) score += 2;
        // Theme overlap bonus
        if (situation.themes && s.themes) {
          const overlap = situation.themes.filter((t) => s.themes!.includes(t)).length;
          score += overlap * 2;
        }
        return { situation: s, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((r) => r.situation);
  }, [situation, allSituations]);

  if (!situation) {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <InlineIcon name="arrowLeft" size={16} color={colors.amber} />
              <Text style={[styles.backText, { color: colors.amber }]}>Terug</Text>
            </View>
          </Pressable>
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyTitle, { color: colors.text }]}>
              Situatie niet gevonden
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top bar with back + bookmark */}
        <View style={styles.topBar}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <InlineIcon name="arrowLeft" size={16} color={colors.amber} />
              <Text style={[styles.backText, { color: colors.amber }]}>Terug</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => toggleHelpFavorite(situation.id)} style={styles.bookmarkBtn}>
            <InlineIcon
              name="heart"
              size={22}
              color={isFavorite ? '#EF4444' : colors.text3}
            />
          </Pressable>
        </View>

        {/* Hero Header */}
        <View style={styles.heroHeader}>
          <View style={[styles.heroIconWrap, { backgroundColor: col + '14' }]}>
            <AppIcon name={emojiToIcon(situation.icon)} size="lg" variant="compact" color={col} />
          </View>
          <Text style={[styles.heroTitle, { color: colors.text }]}>
            {situation.situatie}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <SkillBadge skill={situation.skillLink} size="md" />
            {themeLabel && (
              <View style={[styles.themeBadge, { backgroundColor: THEME_PURPLE + '20', borderColor: THEME_PURPLE + '40' }]}>
                <Text style={[styles.themeBadgeText, { color: THEME_PURPLE }]}>{themeLabel}</Text>
              </View>
            )}
          </View>
        </View>

        {/* Psychologie */}
        <View style={[styles.section, { borderLeftColor: colors.amber }]}>
          <View style={styles.sectionHeader}>
            <InlineIcon name="brain" size={18} color={colors.amber} />
            <Text style={[styles.sectionLabel, { color: colors.amber }]}>
              Psychologische achtergrond
            </Text>
          </View>
          <Text style={[styles.sectionText, { color: colors.text2 }]}>
            {situation.psychologie}
          </Text>
        </View>

        {/* Wat speelt in kind */}
        <View style={[styles.section, { borderLeftColor: '#60A5FA' }]}>
          <View style={styles.sectionHeader}>
            <InlineIcon name="baby" size={18} color="#60A5FA" />
            <Text style={[styles.sectionLabel, { color: '#60A5FA' }]}>
              Wat speelt in je kind
            </Text>
          </View>
          <Text style={[styles.sectionText, { color: colors.text2 }]}>
            {situation.watSpeeltInKind}
          </Text>
        </View>

        {/* Wat speelt in vader */}
        <View style={[styles.section, { borderLeftColor: '#FBBF24' }]}>
          <View style={styles.sectionHeader}>
            <InlineIcon name="user" size={18} color="#FBBF24" />
            <Text style={[styles.sectionLabel, { color: '#FBBF24' }]}>
              Wat speelt in jou
            </Text>
          </View>
          <Text style={[styles.sectionText, { color: colors.text2 }]}>
            {situation.watSpeeltInVader}
          </Text>
        </View>

        {/* 3 Stappen */}
        <Card style={{ marginBottom: 20 }}>
          <View style={styles.sectionHeader}>
            <InlineIcon name="zap" size={18} color={col} />
            <Text style={[styles.sectionLabel, { color: colors.text }]}>
              Doe dit nu
            </Text>
          </View>
          <View style={styles.stepsContainer}>
            {situation.stappen.map((stap, i) => (
              <View key={i} style={styles.stepRow}>
                <View style={[styles.stepNumber, { backgroundColor: col + '18' }]}>
                  <Text style={[styles.stepNumberText, { color: col }]}>
                    {i + 1}
                  </Text>
                </View>
                <Text style={[styles.stepText, { color: colors.text }]}>
                  {stap}
                </Text>
              </View>
            ))}
          </View>
        </Card>

        {/* Voorbeeldzin */}
        <Card style={{ marginBottom: 20, backgroundColor: '#22C55E10', borderColor: '#22C55E30' }}>
          <View style={styles.sectionHeader}>
            <InlineIcon name="messageCircle" size={18} color="#22C55E" />
            <Text style={[styles.sectionLabel, { color: '#22C55E' }]}>
              Voorbeeldzin
            </Text>
          </View>
          <Text style={[styles.quoteText, { color: colors.text }]}>
            &ldquo;{situation.voorbeeldzin}&rdquo;
          </Text>
        </Card>

        {/* Valkuil */}
        <Card style={{ marginBottom: 24, backgroundColor: '#EF444408', borderColor: '#EF444425' }}>
          <View style={styles.sectionHeader}>
            <InlineIcon name="alertTriangle" size={18} color="#EF4444" />
            <Text style={[styles.sectionLabel, { color: '#EF4444' }]}>
              Valkuil
            </Text>
          </View>
          <Text style={[styles.sectionText, { color: colors.text2 }]}>
            {situation.valkuil}
          </Text>
        </Card>

        {/* "Was dit nuttig?" feedback */}
        <View style={[styles.feedbackRow, { borderColor: colors.border }]}>
          <Text style={[styles.feedbackLabel, { color: colors.text2 }]}>Was dit nuttig?</Text>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <Pressable
              onPress={() => setHelpFeedback(situation.id, 'up')}
              style={[
                styles.feedbackBtn,
                {
                  backgroundColor: currentFeedback === 'up' ? '#22C55E18' : colors.surface,
                  borderColor: currentFeedback === 'up' ? '#22C55E' : colors.border,
                },
              ]}
            >
              <InlineIcon name="thumbsUp" size={18} color={currentFeedback === 'up' ? '#22C55E' : colors.text3} />
            </Pressable>
            <Pressable
              onPress={() => setHelpFeedback(situation.id, 'down')}
              style={[
                styles.feedbackBtn,
                {
                  backgroundColor: currentFeedback === 'down' ? '#EF444418' : colors.surface,
                  borderColor: currentFeedback === 'down' ? '#EF4444' : colors.border,
                },
              ]}
            >
              <InlineIcon name="thumbsDown" size={18} color={currentFeedback === 'down' ? '#EF4444' : colors.text3} />
            </Pressable>
          </View>
        </View>

        {/* Related skill CTA */}
        <Pressable
          onPress={() =>
            router.push(
              `/(tabs)/leren?openSkill=${encodeURIComponent(situation.skillLink)}`,
            )
          }
          style={[styles.ctaButton, { backgroundColor: col }]}
        >
          <InlineIcon name="bookMarked" size={24} color="#fff" />
          <View style={styles.ctaTextWrap}>
            <Text style={styles.ctaTitle}>Verdiep je in {situation.skillLink}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Text style={styles.ctaSub}>Bekijk leermodules</Text>
              <InlineIcon name="arrowRight" size={13} color="rgba(255,255,255,0.75)" />
            </View>
          </View>
        </Pressable>

        {/* Share with community */}
        <Pressable
          onPress={() => {
            const prefillText = `Hoe gaan jullie om met: "${situation.situatie}"?\n\nIk las net de tips in de app en vroeg me af hoe andere vaders dit aanpakken.`;
            const returnTo = `/(tabs)/help/${situation.id}`;
            router.push(
              `/(tabs)/community/story/create?prefill=${encodeURIComponent(prefillText)}&prefillCategory=vraag&returnTo=${encodeURIComponent(returnTo)}`
            );
          }}
          style={[styles.shareBtn, {
            backgroundColor: colors.surface,
            borderColor: colors.border,
          }]}
        >
          <InlineIcon name="users" size={20} color={colors.amber} />
          <View style={styles.shareTextWrap}>
            <Text style={[styles.shareTitle, { color: colors.text }]}>Bespreek in community</Text>
            <Text style={[styles.shareSub, { color: colors.text3 }]}>Vraag andere vaders hoe zij dit doen</Text>
          </View>
          <InlineIcon name="arrowRight" size={16} color={colors.text3} />
        </Pressable>

        {/* Related situations */}
        {relatedSituations.length > 0 && (
          <View style={styles.relatedSection}>
            <Text style={[styles.relatedTitle, { color: colors.text }]}>Vergelijkbare situaties</Text>
            {relatedSituations.map((rel) => {
              const relColor = SKILL_COLORS[rel.skillLink] || colors.amber;
              const relThemeLabel = getThemeLabel(rel);
              return (
                <Pressable
                  key={rel.id}
                  onPress={() => router.push(`/(tabs)/help/${rel.id}`)}
                  style={[styles.relatedCard, {
                    backgroundColor: colors.surface,
                    borderColor: colors.border,
                  }]}
                >
                  <View style={[styles.relatedIconWrap, { backgroundColor: relColor + '14' }]}>
                    <AppIcon name={emojiToIcon(rel.icon)} size="sm" variant="compact" color={relColor} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.relatedCardTitle, { color: colors.text }]} numberOfLines={1}>
                      {rel.situatie}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 2 }}>
                      <Text style={[styles.relatedCardSub, { color: colors.text3 }]}>
                        {rel.ageGroup} jaar · {rel.skillLink}
                      </Text>
                      {relThemeLabel && (
                        <View style={[styles.themeBadgeSmall, { backgroundColor: THEME_PURPLE + '20' }]}>
                          <Text style={[styles.themeBadgeSmallText, { color: THEME_PURPLE }]}>{relThemeLabel}</Text>
                        </View>
                      )}
                    </View>
                  </View>
                  <InlineIcon name="arrowRight" size={16} color={colors.text3} />
                </Pressable>
              );
            })}
          </View>
        )}

        {/* Back */}
        <Pressable
          onPress={() => router.back()}
          style={[styles.backBar, { borderColor: colors.border }]}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <InlineIcon name="arrowLeft" size={15} color={colors.text2} />
            <Text style={[styles.backBarText, { color: colors.text2 }]}>Terug naar overzicht</Text>
          </View>
        </Pressable>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 40 },
  backButton: { paddingVertical: 4, alignSelf: 'flex-start' },
  backText: { fontSize: 16, fontWeight: '600' },

  // Top bar
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  bookmarkBtn: {
    padding: 8,
  },

  // Hero
  heroHeader: { alignItems: 'center', marginBottom: 28 },
  heroIconWrap: {
    width: 80,
    height: 80,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  themeBadge: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  themeBadgeText: { fontSize: 12, fontWeight: '700' },

  // Sections with left border
  section: {
    borderLeftWidth: 3,
    paddingLeft: 16,
    marginBottom: 20,
    paddingVertical: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  sectionLabel: { fontSize: 15, fontWeight: '700' },
  sectionText: { fontSize: 15, lineHeight: 23 },

  // Steps
  stepsContainer: { gap: 16, marginTop: 4 },
  stepRow: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  stepNumberText: { fontSize: 15, fontWeight: '800' },
  stepText: { fontSize: 15, lineHeight: 23, flex: 1, paddingTop: 4 },

  // Quote
  quoteText: {
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'italic',
    fontWeight: '500',
  },

  // Feedback
  feedbackRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 14,
    marginBottom: 20,
  },
  feedbackLabel: { fontSize: 15, fontWeight: '600' },
  feedbackBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // CTA
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
  },
  ctaTextWrap: { flex: 1 },
  ctaTitle: { color: '#fff', fontSize: 16, fontWeight: '700', marginBottom: 2 },
  ctaSub: { color: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: '500' },

  // Share with community
  shareBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  shareTextWrap: { flex: 1 },
  shareTitle: { fontSize: 15, fontWeight: '600', marginBottom: 2 },
  shareSub: { fontSize: 13 },

  // Related situations
  relatedSection: { marginBottom: 16 },
  relatedTitle: { fontSize: 17, fontWeight: '700', marginBottom: 12 },
  relatedCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    marginBottom: 8,
  },
  relatedIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  relatedCardTitle: { fontSize: 14, fontWeight: '600' },
  relatedCardSub: { fontSize: 12 },
  themeBadgeSmall: {
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  themeBadgeSmallText: { fontSize: 9, fontWeight: '700' },

  // Back bar
  backBar: {
    borderWidth: 1,
    borderRadius: 99,
    paddingVertical: 14,
    alignItems: 'center',
  },
  backBarText: { fontSize: 15, fontWeight: '600' },

  emptyContainer: { alignItems: 'center', paddingTop: 80 },
  emptyTitle: { fontSize: 20, fontWeight: '700' },
  bottomSpacer: { height: 20 },
});
