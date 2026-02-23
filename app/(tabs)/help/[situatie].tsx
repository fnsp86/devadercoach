import React from 'react';
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
import { HELP_SITUATIONS } from '@/lib/help';
import type { Skill, HelpSituation } from '@/lib/types';
import { SKILL_COLORS } from '@/lib/colors';
import { AppIcon, InlineIcon, emojiToIcon } from '@/lib/icons';

export default function HelpDetailPage() {
  const { colors } = useTheme();
  const router = useRouter();
  const { situatie: situatieId } = useLocalSearchParams<{
    situatie: string;
  }>();

  const situation = HELP_SITUATIONS.find((s) => s.id === situatieId);
  const col = situation
    ? SKILL_COLORS[situation.skillLink] || colors.amber
    : colors.amber;

  const { isHelpFavorite, toggleHelpFavorite } = useStore();
  const isFavorite = situation ? isHelpFavorite(situation.id) : false;

  const relatedSituations = situation
    ? HELP_SITUATIONS
        .filter((s) => s.id !== situation.id)
        .sort((a, b) => {
          const aScore = (a.skillLink === situation.skillLink ? 2 : 0) + (a.ageGroup === situation.ageGroup ? 1 : 0);
          const bScore = (b.skillLink === situation.skillLink ? 2 : 0) + (b.ageGroup === situation.ageGroup ? 1 : 0);
          return bScore - aScore;
        })
        .slice(0, 3)
    : [];

  if (!situation) {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
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
            <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
              <InlineIcon name="arrowLeft" size={16} color={colors.amber} />
              <Text style={[styles.backText, { color: colors.amber }]}>Terug</Text>
            </View>
          </Pressable>
          {situation && (
            <Pressable onPress={() => toggleHelpFavorite(situation.id)} style={styles.bookmarkBtn}>
              <InlineIcon
                name="heart"
                size={22}
                color={isFavorite ? '#EF4444' : colors.text3}
              />
            </Pressable>
          )}
        </View>

        {/* Hero Header */}
        <View style={styles.heroHeader}>
          <View style={[styles.heroIconWrap, { backgroundColor: col + '14' }]}>
            <AppIcon name={emojiToIcon(situation.icon)} size="lg" variant="compact" color={col} />
          </View>
          <Text style={[styles.heroTitle, { color: colors.text }]}>
            {situation.situatie}
          </Text>
          <View style={[styles.skillBadge, { backgroundColor: col + '14' }]}>
            <Text style={[styles.skillBadgeText, { color: col }]}>
              {situation.skillLink}
            </Text>
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
        <View style={[styles.stepsCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
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
        </View>

        {/* Voorbeeldzin */}
        <View style={[styles.quoteCard, { backgroundColor: '#22C55E10', borderColor: '#22C55E30' }]}>
          <View style={styles.sectionHeader}>
            <InlineIcon name="messageCircle" size={18} color="#22C55E" />
            <Text style={[styles.sectionLabel, { color: '#22C55E' }]}>
              Voorbeeldzin
            </Text>
          </View>
          <Text style={[styles.quoteText, { color: colors.text }]}>
            "{situation.voorbeeldzin}"
          </Text>
        </View>

        {/* Valkuil */}
        <View style={[styles.warningCard, { backgroundColor: '#EF444408', borderColor: '#EF444425' }]}>
          <View style={styles.sectionHeader}>
            <InlineIcon name="alertTriangle" size={18} color="#EF4444" />
            <Text style={[styles.sectionLabel, { color: '#EF4444' }]}>
              Valkuil
            </Text>
          </View>
          <Text style={[styles.sectionText, { color: colors.text2 }]}>
            {situation.valkuil}
          </Text>
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
            <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
              <Text style={styles.ctaSub}>Bekijk leermodules</Text>
              <InlineIcon name="arrowRight" size={13} color="rgba(255,255,255,0.75)" />
            </View>
          </View>
        </Pressable>

        {/* Share with community */}
        <Pressable
          onPress={() => {
            const prefillText = `Hoe gaan jullie om met: "${situation.situatie}"?\n\nIk las net de tips in de app en vroeg me af hoe andere vaders dit aanpakken.`;
            router.push(
              `/(tabs)/community/story/create?prefill=${encodeURIComponent(prefillText)}&prefillCategory=vraag`
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
                    <Text style={[styles.relatedCardSub, { color: colors.text3 }]}>
                      {rel.ageGroup} jaar · {rel.skillLink}
                    </Text>
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
          <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
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
  heroIcon: { fontSize: 44 },
  heroTitle: {
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  skillBadge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
  },
  skillBadgeText: { fontSize: 13, fontWeight: '700' },

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
  sectionEmoji: { fontSize: 18 },
  sectionLabel: { fontSize: 15, fontWeight: '700' },
  sectionText: { fontSize: 15, lineHeight: 23 },

  // Steps card
  stepsCard: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
  },
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
  quoteCard: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'italic',
    fontWeight: '500',
  },

  // Warning
  warningCard: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 20,
    marginBottom: 24,
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
  ctaEmoji: { fontSize: 24 },
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
  relatedCardSub: { fontSize: 12, marginTop: 2 },

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
