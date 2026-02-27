import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useFocusEffect } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { getHelpSituations } from '@/lib/help';
import { resolveActiveThemes } from '@/lib/theme-resolver';
import { doelenToSkills } from '@/lib/task-selector';
import type { HelpAgeGroup, HelpSituation, Skill } from '@/lib/types';
import { SKILL_COLORS } from '@/lib/colors';
import { AppIcon, InlineIcon, getSkillIcon, emojiToIcon } from '@/lib/icons';
import type { IconName } from '@/lib/icons';
import Header from '@/components/Header';
import Card from '@/components/Card';

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

const ALL_SKILLS: Skill[] = [
  'Aanwezigheid', 'Emotiecoaching', 'Zelfregulatie', 'Grenzen',
  'Autonomie', 'Herstel', 'Verbinding', 'Reflectie',
];

const THEME_PURPLE = '#8B5CF6';

function getThemeLabel(situation: HelpSituation): string | null {
  if (!situation.themes || situation.themes.length === 0) return null;
  if (situation.themes.includes('bonuskind') || situation.themes.includes('samengesteld_gezin') || situation.themes.includes('co-ouderschap')) {
    return 'Bonuskind';
  }
  return 'Extra zorg';
}

export default function HelpPage() {
  const { colors } = useTheme();
  const router = useRouter();
  const { profile, helpFavorites, isHelpFavorite, helpHistory, removeHelpHistory } = useStore();

  const [selectedAge, setSelectedAge] = useState<HelpAgeGroup>('4-7');
  const [searchQuery, setSearchQuery] = useState('');
  const [sosExpanded, setSosExpanded] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [collapsedSkills, setCollapsedSkills] = useState<Set<string>>(new Set());

  // Reset collapsed state when tab regains focus
  useFocusEffect(
    useCallback(() => {
      setCollapsedSkills(new Set());
    }, []),
  );

  // Resolve active themes from profile
  const activeThemes = useMemo(
    () => (profile ? resolveActiveThemes(profile) : []),
    [profile],
  );

  // All help situations including themed ones
  const allSituations = useMemo(
    () => getHelpSituations(activeThemes),
    [activeThemes],
  );

  // Doel skills for "Voor jouw gezin" scoring
  const doelSkills = useMemo(
    () => (profile?.doelen ? doelenToSkills(profile.doelen) : []),
    [profile?.doelen],
  );

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

  // Search: searches ALL fields, ignores age filter
  const isSearching = searchQuery.trim().length > 0;
  const filteredSituations = useMemo(() => {
    if (isSearching) {
      const q = searchQuery.toLowerCase();
      return allSituations.filter((s) =>
        s.situatie.toLowerCase().includes(q) ||
        s.watSpeeltInKind.toLowerCase().includes(q) ||
        s.watSpeeltInVader.toLowerCase().includes(q) ||
        s.psychologie.toLowerCase().includes(q) ||
        s.skillLink.toLowerCase().includes(q) ||
        s.voorbeeldzin.toLowerCase().includes(q) ||
        s.valkuil.toLowerCase().includes(q) ||
        s.stappen.some((st) => st.toLowerCase().includes(q)),
      );
    }
    if (showFavorites) {
      return allSituations.filter((s) => helpFavorites.includes(s.id));
    }
    return allSituations.filter((s) => s.ageGroup === selectedAge);
  }, [searchQuery, isSearching, showFavorites, helpFavorites, selectedAge, allSituations]);

  // Group by skill for collapsible sections
  const skillGroups = useMemo(() => {
    const groups: { skill: Skill; situations: HelpSituation[] }[] = [];
    const grouped: Record<string, HelpSituation[]> = {};
    for (const s of filteredSituations) {
      if (!grouped[s.skillLink]) grouped[s.skillLink] = [];
      grouped[s.skillLink].push(s);
    }
    // Maintain consistent skill order
    for (const sk of ALL_SKILLS) {
      if (grouped[sk] && grouped[sk].length > 0) {
        groups.push({ skill: sk, situations: grouped[sk] });
      }
    }
    return groups;
  }, [filteredSituations]);

  // "Voor jouw gezin" recommended themed situations
  const recommendedSituations = useMemo(() => {
    if (activeThemes.length === 0 || isSearching || showFavorites) return [];
    const themed = allSituations.filter(
      (s) => s.themes && s.themes.length > 0 && s.ageGroup === selectedAge,
    );
    // Score: theme match (10), doel-skill match (5), not favorite (-2)
    const scored = themed.map((s) => {
      let score = 10;
      if (doelSkills.includes(s.skillLink)) score += 5;
      if (!helpFavorites.includes(s.id)) score -= 2;
      return { situation: s, score };
    });
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 4).map((s) => s.situation);
  }, [activeThemes, allSituations, selectedAge, doelSkills, helpFavorites, isSearching, showFavorites]);

  // Recent viewed situations
  const recentSituations = useMemo(() => {
    if (helpHistory.length === 0 || isSearching || showFavorites) return [];
    return helpHistory
      .map((id) => allSituations.find((s) => s.id === id))
      .filter(Boolean) as HelpSituation[];
  }, [helpHistory, allSituations, isSearching, showFavorites]);

  function toggleSkillGroup(skill: string) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCollapsedSkills((prev) => {
      const next = new Set(prev);
      if (next.has(skill)) next.delete(skill);
      else next.add(skill);
      return next;
    });
  }

  function renderSituationCard(situation: HelpSituation, compact = false) {
    const skillColor = SKILL_COLORS[situation.skillLink] || colors.amber;
    const skillIconName = getSkillIcon(situation.skillLink);
    const themeLabel = getThemeLabel(situation);

    return (
      <Pressable
        key={situation.id}
        onPress={() => router.push(`/(tabs)/help/${situation.id}`)}
      >
        <Card variant="small" style={{ marginBottom: compact ? 8 : 12 }}>
          <View style={styles.cardHeader}>
            <View style={[styles.cardIconWrap, { backgroundColor: skillColor + '14' }]}>
              <AppIcon name={emojiToIcon(situation.icon)} size="md" variant="compact" color={skillColor} />
            </View>
            <View style={styles.cardHeaderText}>
              <Text style={[styles.cardTitle, { color: colors.text }]} numberOfLines={2}>
                {situation.situatie}
              </Text>
              <Text style={[styles.cardPreview, { color: colors.text3 }]} numberOfLines={2}>
                {situation.watSpeeltInKind}
              </Text>
            </View>
          </View>

          <View style={styles.cardFooter}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, flex: 1 }}>
              <View style={[styles.skillTag, { backgroundColor: skillColor + '14' }]}>
                <InlineIcon name={skillIconName} size={13} color={skillColor} />
                <Text style={[styles.skillTagText, { color: skillColor }]}>
                  {situation.skillLink}
                </Text>
              </View>
              {themeLabel && (
                <View style={[styles.themeBadge, { backgroundColor: THEME_PURPLE + '20', borderColor: THEME_PURPLE + '40' }]}>
                  <Text style={[styles.themeBadgeText, { color: THEME_PURPLE }]}>{themeLabel}</Text>
                </View>
              )}
            </View>
            <View style={[styles.arrowCircle, { backgroundColor: colors.amber + '18' }]}>
              <InlineIcon name="arrowRight" size={16} color={colors.amber} />
            </View>
          </View>
        </Card>
      </Pressable>
    );
  }

  function renderMiniCard(situation: HelpSituation) {
    const skillColor = SKILL_COLORS[situation.skillLink] || colors.amber;
    return (
      <Pressable
        key={situation.id}
        onPress={() => router.push(`/(tabs)/help/${situation.id}`)}
        style={[styles.miniCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
      >
        <Pressable
          onPress={(e) => { e.stopPropagation(); removeHelpHistory(situation.id); }}
          style={styles.miniDeleteBtn}
          hitSlop={6}
        >
          <InlineIcon name="x" size={12} color={colors.text3} />
        </Pressable>
        <View style={[styles.miniIconWrap, { backgroundColor: skillColor + '14' }]}>
          <AppIcon name={emojiToIcon(situation.icon)} size="sm" variant="compact" color={skillColor} />
        </View>
        <Text style={[styles.miniTitle, { color: colors.text }]} numberOfLines={2}>
          {situation.situatie}
        </Text>
      </Pressable>
    );
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Header
          title="Hulp per Situatie"
          subtitle="Direct toepasbare hulp met psychologie, stappen en voorbeeldzinnen"
        />

        {/* SOS Quick Access */}
        <Pressable
          onPress={() => { LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setSosExpanded(!sosExpanded); }}
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
            <View style={[styles.chevronCircle, { backgroundColor: '#EF444420' }]}>
              <InlineIcon
                name={sosExpanded ? 'chevronUp' : 'chevronDown'}
                size={16}
                color="#EF4444"
              />
            </View>
          </View>
        </Pressable>

        {sosExpanded && (
          <View style={styles.sosGrid}>
            {SOS_IDS[selectedAge].map((id) => {
              const sit = allSituations.find((s) => s.id === id);
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
            style={[styles.filterChip, {
              backgroundColor: showFavorites ? colors.amber + '18' : colors.surface,
              borderColor: showFavorites ? colors.amber : colors.border,
            }]}
          >
            <InlineIcon name="heart" size={14} color={showFavorites ? colors.amber : colors.text3} />
            <Text style={[styles.filterChipText, { color: showFavorites ? colors.amber : colors.text3 }]}>
              Opgeslagen ({helpFavorites.length})
            </Text>
          </Pressable>
        </View>

        {/* Age tabs */}
        {!isSearching && !showFavorites && (
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

        {/* Recent viewed */}
        {recentSituations.length > 0 && !isSearching && !showFavorites && (
          <View style={styles.sectionBlock}>
            <Text style={[styles.sectionTitle, { color: colors.text2 }]}>Recent bekeken</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.miniRow}>
              {recentSituations.map(renderMiniCard)}
            </ScrollView>
          </View>
        )}

        {/* "Voor jouw gezin" recommended themed situations */}
        {recommendedSituations.length > 0 && (
          <View style={styles.sectionBlock}>
            <View style={styles.sectionHeaderRow}>
              <Text style={[styles.sectionTitle, { color: colors.text2 }]}>Voor jouw gezin</Text>
              <View style={[styles.themeDot, { backgroundColor: THEME_PURPLE + '20' }]}>
                <Text style={[styles.themeDotText, { color: THEME_PURPLE }]}>Persoonlijk</Text>
              </View>
            </View>
            {recommendedSituations.map((s) => renderSituationCard(s, true))}
          </View>
        )}

        {/* Count */}
        <Text style={[styles.countText, { color: colors.text3 }]}>
          {filteredSituations.length} situaties
          {isSearching ? ` voor "${searchQuery}"` : ''}
        </Text>

        {/* Skill-grouped situations (all open by default, tap header to collapse) */}
        {skillGroups.map(({ skill, situations }) => {
          const skillColor = SKILL_COLORS[skill] || colors.amber;
          const isExpanded = isSearching || collapsedSkills.has(skill);
          const skillIconName = getSkillIcon(skill);

          return (
            <View key={skill} style={styles.skillGroupBlock}>
              <Pressable
                onPress={() => toggleSkillGroup(skill)}
                style={[styles.skillGroupHeader, { backgroundColor: skillColor + '08', borderColor: skillColor + '20' }]}
              >
                <View style={[styles.skillGroupIconWrap, { backgroundColor: skillColor + '18' }]}>
                  <InlineIcon name={skillIconName} size={18} color={skillColor} />
                </View>
                <Text style={[styles.skillGroupTitle, { color: colors.text }]}>
                  {skill}
                </Text>
                <Text style={[styles.skillGroupCount, { color: skillColor }]}>
                  {situations.length}
                </Text>
                <View style={[styles.chevronCircleSmall, { backgroundColor: skillColor + '14' }]}>
                  <InlineIcon
                    name={isExpanded ? 'chevronUp' : 'chevronDown'}
                    size={14}
                    color={skillColor}
                  />
                </View>
              </Pressable>

              {isExpanded && (
                <View style={styles.skillGroupContent}>
                  {situations.map((s) => renderSituationCard(s, true))}
                </View>
              )}
            </View>
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
              {isSearching ? 'Probeer een ander zoekwoord' : 'Probeer een andere leeftijdscategorie'}
            </Text>
          </View>
        )}

        {/* Info box */}
        <Card style={{ marginTop: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
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
        </Card>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 40 },

  // SOS
  chevronCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  sosButton: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
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
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding: 0,
  },

  // Filter chips
  filterRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  filterChipText: { fontSize: 12, fontWeight: '600' },

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
  ageTabLabel: { fontSize: 12, fontWeight: '700' },

  // Section blocks
  sectionBlock: { marginBottom: 16 },
  sectionHeaderRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 },
  sectionTitle: { fontSize: 14, fontWeight: '700', marginBottom: 10 },
  themeDot: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 10,
  },
  themeDotText: { fontSize: 11, fontWeight: '700' },

  // Mini cards (recent viewed)
  miniRow: { gap: 10, paddingRight: 20 },
  miniCard: {
    width: 120,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    gap: 8,
  },
  miniIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  miniDeleteBtn: {
    position: 'absolute' as const,
    top: 6,
    right: 6,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    zIndex: 1,
  },
  miniTitle: { fontSize: 12, fontWeight: '600', lineHeight: 16 },

  // Count
  countText: { fontSize: 13, marginBottom: 10 },

  // Skill group
  skillGroupBlock: { marginBottom: 12 },
  skillGroupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
  },
  skillGroupIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillGroupTitle: { flex: 1, fontSize: 15, fontWeight: '700' },
  skillGroupCount: { fontSize: 14, fontWeight: '700' },
  chevronCircleSmall: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillGroupContent: { marginTop: 8 },

  // Cards
  cardHeader: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 14,
  },
  cardIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeaderText: { flex: 1 },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
    lineHeight: 20,
  },
  cardPreview: {
    fontSize: 13,
    lineHeight: 18,
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
  skillTagText: { fontSize: 12, fontWeight: '600' },
  themeBadge: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  themeBadgeText: { fontSize: 10, fontWeight: '700' },
  arrowCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

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
  emptyTitle: { fontSize: 18, fontWeight: '700', marginBottom: 6 },
  emptyText: { fontSize: 14 },

  // Info card
  infoTitle: { fontSize: 16, fontWeight: '700', marginBottom: 14 },
  infoList: { gap: 10 },
  infoItem: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  infoText: { fontSize: 14, lineHeight: 20 },

  bottomSpacer: { height: 20 },
});
