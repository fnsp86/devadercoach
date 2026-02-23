import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { HELP_SITUATIONS } from '@/lib/help';
import type { HelpAgeGroup, HelpSituation } from '@/lib/types';
import { SKILL_COLORS } from '@/lib/colors';
import { AppIcon, InlineIcon, getSkillIcon, emojiToIcon } from '@/lib/icons';
import type { IconName } from '@/lib/icons';

const AGE_TABS: { age: HelpAgeGroup; label: string; icon: IconName }[] = [
  { age: '0-3', label: '0-3', icon: 'baby' },
  { age: '4-7', label: '4-7', icon: 'bike' },
  { age: '8-12', label: '8-12', icon: 'graduationCap' },
  { age: '13-18', label: '13-18', icon: 'smartphone' },
];

const SOS_IDS: Record<HelpAgeGroup, string[]> = {
  '0-3': [
    'peuter-driftbui-supermarkt',
    'peuter-niet-naar-bed',
    'peuter-bijten-slaan',
    'peuter-nee-negeren',
  ],
  '4-7': [
    'kind-driftbui-frustratie',
    'kind-niet-luisteren',
    'kind-broertje-ruzie',
    'kind-agressie-slaan',
  ],
  '8-12': [
    'kind-niet-luisteren-812',
    'kind-broerzus-ruzie-812',
    'kind-schelden-schreeuwen',
    'kind-grenzen-negeren',
  ],
  '13-18': [
    'tiener-geen-communicatie',
    'tiener-geen-respect-regels',
    'tiener-agressief-intimiderend',
    'tiener-slecht-humeur-constant',
  ],
};

function getDailySituation(ageGroup: HelpAgeGroup): HelpSituation | null {
  const pool = HELP_SITUATIONS.filter((s) => s.ageGroup === ageGroup);
  if (pool.length === 0) return null;
  const today = new Date();
  const dateStr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
    hash = hash & hash;
  }
  return pool[Math.abs(hash) % pool.length];
}

// Skill icons are now provided via getSkillIcon() from @/lib/icons

export default function HelpPage() {
  const { colors } = useTheme();
  const router = useRouter();
  const { profile, helpFavorites, isHelpFavorite } = useStore();

  const [selectedAge, setSelectedAge] = useState<HelpAgeGroup>('4-7');
  const [searchQuery, setSearchQuery] = useState('');
  const [sosExpanded, setSosExpanded] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

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

  const dailySituation = useMemo(
    () => getDailySituation(selectedAge),
    [selectedAge]
  );

  const filteredSituations = useMemo(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return HELP_SITUATIONS.filter((s) =>
        s.situatie.toLowerCase().includes(q) ||
        s.watSpeeltInKind.toLowerCase().includes(q)
      );
    }
    if (showFavorites) {
      return HELP_SITUATIONS.filter((s) => helpFavorites.includes(s.id));
    }
    return HELP_SITUATIONS.filter((s) => s.ageGroup === selectedAge);
  }, [searchQuery, showFavorites, helpFavorites, selectedAge]);

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

        {/* SOS Quick Access */}
        <Pressable
          onPress={() => setSosExpanded(!sosExpanded)}
          style={[styles.sosButton, {
            backgroundColor: '#EF444414',
            borderColor: '#EF444430',
          }]}
        >
          <View style={styles.sosInner}>
            <View style={[styles.sosIconWrap, { backgroundColor: '#EF444420' }]}>
              <InlineIcon name="zap" size={20} color="#EF4444" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.sosTitle, { color: '#EF4444' }]}>SOS – Acute Situatie</Text>
              <Text style={[styles.sosSub, { color: colors.text3 }]}>Snelle hulp bij nood</Text>
            </View>
            <InlineIcon
              name={sosExpanded ? 'chevronUp' : 'chevronDown'}
              size={20}
              color="#EF4444"
            />
          </View>
        </Pressable>

        {sosExpanded && (
          <View style={styles.sosGrid}>
            {SOS_IDS[selectedAge].map((id) => {
              const sit = HELP_SITUATIONS.find((s) => s.id === id);
              if (!sit) return null;
              return (
                <Pressable
                  key={id}
                  onPress={() => router.push(`/(tabs)/help/${id}`)}
                  style={[styles.sosCard, {
                    backgroundColor: colors.surface,
                    borderColor: '#EF444425',
                  }]}
                >
                  <AppIcon name={emojiToIcon(sit.icon)} size="sm" variant="compact" color="#EF4444" />
                  <Text style={[styles.sosCardText, { color: colors.text }]} numberOfLines={2}>
                    {sit.situatie}
                  </Text>
                  <InlineIcon name="arrowRight" size={14} color="#EF4444" />
                </Pressable>
              );
            })}
          </View>
        )}

        {/* Search */}
        <View style={[styles.searchRow, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <InlineIcon name="search" size={18} color={colors.text3} />
          <TextInput
            style={[styles.searchInput, { color: colors.text }]}
            placeholder="Zoek een situatie..."
            placeholderTextColor={colors.text3}
            value={searchQuery}
            onChangeText={(t) => { setSearchQuery(t); if (t) setShowFavorites(false); }}
            autoCorrect={false}
            returnKeyType="search"
          />
          {searchQuery.length > 0 && (
            <Pressable onPress={() => setSearchQuery('')}>
              <InlineIcon name="x" size={18} color={colors.text3} />
            </Pressable>
          )}
        </View>

        {/* Favorites filter */}
        <View style={styles.filterRow}>
          <Pressable
            onPress={() => { setShowFavorites(!showFavorites); setSearchQuery(''); }}
            style={[styles.favChip, {
              backgroundColor: showFavorites ? colors.amber + '18' : colors.surface,
              borderColor: showFavorites ? colors.amber : colors.border,
            }]}
          >
            <InlineIcon name="heart" size={14} color={showFavorites ? colors.amber : colors.text3} />
            <Text style={[styles.favChipText, { color: showFavorites ? colors.amber : colors.text3 }]}>
              Opgeslagen ({helpFavorites.length})
            </Text>
          </Pressable>
        </View>

        {/* Age tabs */}
        {!searchQuery.trim() && !showFavorites && (
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
        )}

        {/* Count */}
        <Text style={[styles.countText, { color: colors.text3 }]}>
          {filteredSituations.length} situaties gevonden
          {searchQuery.trim() ? ` voor "${searchQuery}"` : ''}
        </Text>

        {/* Daily Tip */}
        {!searchQuery.trim() && !showFavorites && dailySituation && (
          <Pressable
            onPress={() => router.push(`/(tabs)/help/${dailySituation.id}`)}
            style={[styles.dailyCard, {
              backgroundColor: colors.amber + '10',
              borderColor: colors.amber + '30',
            }]}
          >
            <View style={styles.dailyHeader}>
              <View style={[styles.dailyBadge, { backgroundColor: colors.amber + '20' }]}>
                <InlineIcon name="sun" size={14} color={colors.amber} />
                <Text style={[styles.dailyBadgeText, { color: colors.amber }]}>Tip van de dag</Text>
              </View>
            </View>
            <View style={styles.dailyContent}>
              <View style={[styles.dailyIconWrap, { backgroundColor: colors.amber + '18' }]}>
                <AppIcon name={emojiToIcon(dailySituation.icon)} size="md" variant="compact" color={colors.amber} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.dailyTitle, { color: colors.text }]} numberOfLines={2}>{dailySituation.situatie}</Text>
                <Text style={[styles.dailyPreview, { color: colors.text3 }]} numberOfLines={2}>{dailySituation.psychologie}</Text>
              </View>
              <View style={[styles.dailyArrow, { backgroundColor: colors.amber + '20' }]}>
                <InlineIcon name="arrowRight" size={16} color={colors.amber} />
              </View>
            </View>
          </Pressable>
        )}

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

  // SOS
  sosButton: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  sosInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  sosIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sosTitle: { fontSize: 16, fontWeight: '700' },
  sosSub: { fontSize: 13 },
  sosGrid: { gap: 8, marginBottom: 16 },
  sosCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
  },
  sosCardText: { flex: 1, fontSize: 14, fontWeight: '600' },

  // Search
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding: 0,
  },

  // Favorites filter
  filterRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  favChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  favChipText: { fontSize: 13, fontWeight: '600' },

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

  // Daily tip
  dailyCard: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
  },
  dailyHeader: { marginBottom: 12 },
  dailyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dailyBadgeText: { fontSize: 12, fontWeight: '700' },
  dailyContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dailyIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dailyTitle: { fontSize: 15, fontWeight: '700', marginBottom: 4 },
  dailyPreview: { fontSize: 13, lineHeight: 18 },
  dailyArrow: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

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
