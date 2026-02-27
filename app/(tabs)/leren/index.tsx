import React, { useMemo, useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { SKILL_LIST } from '@/lib/skills';
import { getLearningModulesForSkill } from '@/lib/learning-modules';
import { transformModuleToDiscoveryCards } from '@/lib/module-stages';
import { getTrainingForSkill } from '@/lib/training-content';
import type { Skill, ThemeTag } from '@/lib/types';
import { getSkillMasteryTier, MASTERY_TIER_INFO } from '@/lib/gamification-types';
import { resolveActiveThemes } from '@/lib/theme-resolver';
import { SKILL_COLORS } from '@/lib/colors';
import { AppIcon, InlineIcon, getSkillIcon } from '@/lib/icons';
import { getTodayDateStr } from '@/lib/daily-arena';

// ─────────────────────────────────────────────────────────────────────────────
// Mini progress ring (SVG-free, border-based)
// ─────────────────────────────────────────────────────────────────────────────

function MiniProgressRing({
  done,
  total,
  color,
  size = 40,
}: {
  done: number;
  total: number;
  color: string;
  size?: number;
}) {
  const { colors } = useTheme();
  const pct = total > 0 ? done / total : 0;
  const allDone = done === total && total > 0;
  return (
    <View
      style={[
        ringStyles.outer,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderColor: allDone ? '#22C55E' : pct > 0 ? color : colors.border,
          borderWidth: allDone ? 3 : 2.5,
          backgroundColor: allDone ? 'rgba(34,197,94,0.1)' : 'transparent',
        },
      ]}
    >
      {allDone ? (
        <InlineIcon name="check" size={size * 0.38} color="#22C55E" />
      ) : (
        <Text
          style={[
            ringStyles.text,
            { color: pct > 0 ? color : colors.text3, fontSize: size * 0.28 },
          ]}
        >
          {`${done}/${total}`}
        </Text>
      )}
    </View>
  );
}

const ringStyles = StyleSheet.create({
  outer: { alignItems: 'center', justifyContent: 'center' },
  text: { fontWeight: '800' },
});

// ─────────────────────────────────────────────────────────────────────────────
// SkillCard (compact, for grid)
// ─────────────────────────────────────────────────────────────────────────────

function SkillCard({
  skill,
  doneCount,
  totalCount,
  masteryTier,
  hasThemed,
  onPress,
}: {
  skill: Skill;
  doneCount: number;
  totalCount: number;
  masteryTier: 'none' | 'bronze' | 'silver' | 'gold';
  hasThemed?: boolean;
  onPress: () => void;
}) {
  const { colors } = useTheme();
  const color = SKILL_COLORS[skill] ?? '#667eea';
  const allDone = doneCount === totalCount && totalCount > 0;
  const tierInfo = MASTERY_TIER_INFO[masteryTier];

  return (
    <Pressable
      onPress={onPress}
      style={[
        gridStyles.card,
        {
          backgroundColor: colors.surface,
          borderColor: allDone ? '#22C55E' : colors.border,
          borderWidth: 1,
        },
      ]}
    >
      <AppIcon name={getSkillIcon(skill)} size="md" variant="featured" color={color} bgColor={color + '15'} />
      <Text style={[gridStyles.skillName, { color: colors.text }]} numberOfLines={1}>
        {skill}
      </Text>
      <MiniProgressRing done={doneCount} total={totalCount} color={color} size={36} />
      {hasThemed && (
        <View style={[gridStyles.themedDot, { backgroundColor: '#8B5CF6' }]}>
          <Text style={gridStyles.themedDotText}>+1</Text>
        </View>
      )}
      {masteryTier !== 'none' ? (
        <View style={[gridStyles.doneBadge, { backgroundColor: tierInfo.color + '20' }]}>
          <InlineIcon name="trophy" size={12} color={tierInfo.color} />
        </View>
      ) : allDone ? (
        <View style={[gridStyles.doneBadge, { backgroundColor: 'rgba(34,197,94,0.12)' }]}>
          <InlineIcon name="checkCircle" size={12} color="#22C55E" />
        </View>
      ) : null}
    </Pressable>
  );
}

const gridStyles = StyleSheet.create({
  card: {
    width: '48%',
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
    gap: 6,
    position: 'relative',
  },
  skillName: { fontSize: 13, fontWeight: '700', textAlign: 'center' },
  themedDot: {
    position: 'absolute',
    top: 8,
    left: 8,
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  themedDotText: { color: '#fff', fontSize: 10, fontWeight: '800' },
  doneBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// Arena section (embedded)
// ─────────────────────────────────────────────────────────────────────────────

function ArenaSection() {
  const { colors } = useTheme();
  const router = useRouter();
  const store = useStore();

  const activeThemes = useMemo(() => {
    const profile = store.profile;
    if (!profile) return [] as ThemeTag[];
    return resolveActiveThemes(profile);
  }, [store.profile]);

  const skillData = useMemo(() => {
    return SKILL_LIST.map((s) => {
      const allItems = getTrainingForSkill(s.label, activeThemes);
      const totalItems = allItems.length;
      const mid = Math.ceil(totalItems / 2);
      const part1Ids = new Set(allItems.slice(0, mid).map((i) => i.id));
      const part2Ids = new Set(allItems.slice(mid).map((i) => i.id));
      const progress = store.getTrainingProgress(s.label);
      const completedCount = progress.completedItems.length;
      const correctCount = progress.correctAnswers;
      const pct = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;
      const scorePct = progress.totalAttempts > 0
        ? Math.round((correctCount / progress.totalAttempts) * 100)
        : 0;
      const part1Total = mid;
      const part1Completed = progress.completedItems.filter((id) => part1Ids.has(id)).length;
      const part2Total = totalItems - mid;
      const part2Completed = progress.completedItems.filter((id) => part2Ids.has(id)).length;
      return {
        ...s,
        totalItems,
        completedCount,
        correctCount,
        pct,
        scorePct,
        hasTraining: totalItems > 0,
        part1Total,
        part1Completed,
        part2Total,
        part2Completed,
      };
    });
  }, [store]);

  const totalCorrect = skillData.reduce((sum, s) => sum + s.correctCount, 0);
  const totalItems = skillData.reduce((sum, s) => sum + s.totalItems, 0);
  const totalCompleted = skillData.reduce((sum, s) => sum + s.completedCount, 0);
  const totalPct = totalItems > 0 ? Math.round((totalCompleted / totalItems) * 100) : 0;

  // Zwakste skill: laagste scorePct van skills met ≥5 pogingen
  const weakestSkill = useMemo(() => {
    const attempted = skillData.filter((s) => s.completedCount >= 5);
    if (attempted.length === 0) return null;
    return attempted.reduce((lowest, s) => s.scorePct < lowest.scorePct ? s : lowest);
  }, [skillData]);

  function handleNavigate(skill: Skill) {
    router.push(`/(tabs)/training/${encodeURIComponent(skill)}`);
  }

  return (
    <>
      <LinearGradient colors={[colors.surface2, colors.bg]} style={arena.heroBanner}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <InlineIcon name="swords" size={28} color={colors.text} />
          <Text style={[arena.heroTitle, { color: colors.text }]}>Vader Arena</Text>
        </View>
        <Text style={[arena.heroSub, { color: colors.text3 }]}>Test je kennis · Verdien XP</Text>

        <View style={[arena.scoreCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <View style={arena.scoreTop}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <InlineIcon name="barChart3" size={14} color={colors.text2} />
              <Text style={[arena.scoreLabel, { color: colors.text2 }]}>Jouw totaalscore</Text>
            </View>
            <Text style={[arena.scorePct, { color: colors.amber }]}>{totalPct}%</Text>
          </View>
          <View style={[arena.scoreBarTrack, { backgroundColor: colors.border }]}>
            <View style={[arena.scoreBarFill, { width: `${totalPct}%`, backgroundColor: colors.amber }]} />
          </View>
          <Text style={[arena.scoreDetail, { color: colors.text3 }]}>
            {totalCompleted}/{totalItems} voltooid · {totalCorrect} goed beantwoord
          </Text>
        </View>

        {/* Zwakste skill suggestie */}
        {weakestSkill && weakestSkill.scorePct < 80 && (
          <Pressable
            onPress={() => handleNavigate(weakestSkill.label)}
            style={[arena.weakestCard, { backgroundColor: colors.surface, borderColor: SKILL_COLORS[weakestSkill.label] + '40' }]}
          >
            <InlineIcon name="target" size={16} color={SKILL_COLORS[weakestSkill.label] || colors.amber} />
            <Text style={[arena.weakestText, { color: colors.text2 }]}>
              Zwakste skill: <Text style={{ color: SKILL_COLORS[weakestSkill.label] || colors.amber, fontWeight: '800' }}>{weakestSkill.label}</Text> ({weakestSkill.scorePct}%)
            </Text>
            <InlineIcon name="arrowRight" size={14} color={colors.text3} />
          </Pressable>
        )}
      </LinearGradient>

      {/* ── Dagelijkse Duel Card ── */}
      <Pressable
        onPress={() => {
          if (store.dailyArenaLastPlayed === getTodayDateStr()) {
            router.push('/(tabs)/training/leaderboard');
          } else {
            router.push('/(tabs)/training/daily');
          }
        }}
        style={[arena.dailyCard, { backgroundColor: colors.surface, borderColor: colors.amber + '40' }]}
      >
        <View style={[arena.dailyIconWrap, { backgroundColor: colors.amberDim }]}>
          <InlineIcon name={store.dailyArenaLastPlayed === getTodayDateStr() ? 'trophy' : 'zap'} size={22} color={colors.amber} />
        </View>
        <View style={arena.dailyContent}>
          <Text style={[arena.dailyTitle, { color: colors.text }]}>Dagelijkse Duel</Text>
          <Text style={[arena.dailySub, { color: colors.text3 }]}>
            {store.dailyArenaLastPlayed === getTodayDateStr()
              ? 'Vandaag al gespeeld — bekijk de ranglijst!'
              : '5 vragen · 20 sec per vraag · Versla andere vaders'}
          </Text>
        </View>
        {store.dailyArenaStreak > 0 && (
          <View style={[arena.dailyStreak, { backgroundColor: '#F59E0B18' }]}>
            <InlineIcon name="flame" size={14} color="#F59E0B" />
            <Text style={arena.dailyStreakText}>{store.dailyArenaStreak}</Text>
          </View>
        )}
        <InlineIcon name="arrowRight" size={18} color={colors.text3} />
      </Pressable>

      {/* ── Snelle Ronde Card ── */}
      <Pressable
        onPress={() => router.push('/(tabs)/training/quickfire')}
        style={[arena.dailyCard, { backgroundColor: colors.surface, borderColor: '#A78BFA40' }]}
      >
        <View style={[arena.dailyIconWrap, { backgroundColor: '#A78BFA18' }]}>
          <InlineIcon name="zap" size={22} color="#A78BFA" />
        </View>
        <View style={arena.dailyContent}>
          <Text style={[arena.dailyTitle, { color: colors.text }]}>Snelle Ronde</Text>
          <Text style={[arena.dailySub, { color: colors.text3 }]}>
            Eindeloos · 3 levens · Hoe ver kom jij?
          </Text>
        </View>
        {store.quickFireBest > 0 && (
          <View style={[arena.dailyStreak, { backgroundColor: '#A78BFA18' }]}>
            <InlineIcon name="trophy" size={14} color="#A78BFA" />
            <Text style={[arena.dailyStreakText, { color: '#A78BFA' }]}>{store.quickFireBest}</Text>
          </View>
        )}
        <InlineIcon name="arrowRight" size={18} color={colors.text3} />
      </Pressable>

      {/* ── Skill Duel Card ── */}
      <Pressable
        onPress={() => router.push('/(tabs)/training/duels')}
        style={[arena.dailyCard, { backgroundColor: colors.surface, borderColor: '#EF444440' }]}
      >
        <View style={[arena.dailyIconWrap, { backgroundColor: '#EF444418' }]}>
          <InlineIcon name="swords" size={22} color="#EF4444" />
        </View>
        <View style={arena.dailyContent}>
          <Text style={[arena.dailyTitle, { color: colors.text }]}>Skill Duel</Text>
          <Text style={[arena.dailySub, { color: colors.text3 }]}>
            Daag een vader uit · 10 vragen · Wie wint?
          </Text>
        </View>
        <InlineIcon name="arrowRight" size={18} color={colors.text3} />
      </Pressable>

      <View style={arena.grid}>
        {skillData.map((skill) => {
          const skillColor = SKILL_COLORS[skill.label] || colors.amber;
          const isComplete = skill.completedCount >= skill.totalItems && skill.totalItems > 0;
          const notStarted = skill.completedCount === 0;

          return (
            <Pressable
              key={skill.label}
              onPress={() => handleNavigate(skill.label)}
              disabled={!skill.hasTraining}
              style={[
                arena.gridCard,
                {
                  backgroundColor: colors.surface,
                  borderColor: isComplete ? '#34D399' : colors.border,
                  opacity: skill.hasTraining ? 1 : 0.5,
                },
              ]}
            >
              <View style={[arena.gridAccent, { backgroundColor: skillColor }]} />
              <AppIcon name={getSkillIcon(skill.label)} size="md" variant="compact" color={skillColor} />
              <Text style={[arena.gridName, { color: colors.text }]} numberOfLines={1}>
                {skill.label}
              </Text>
              {notStarted ? (
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 }}>
                  <Text style={[arena.gridStatus, { color: colors.text3 }]}>Start</Text>
                  <InlineIcon name="arrowRight" size={13} color={colors.text3} />
                </View>
              ) : (
                <View style={arena.gridParts}>
                  <View style={arena.gridPartRow}>
                    <Text style={[arena.gridPartLabel, { color: colors.text3 }]}>Deel 1</Text>
                    <View style={[arena.gridPartBar, { backgroundColor: colors.surface2 }]}>
                      <View style={[arena.gridPartFill, { flex: skill.part1Completed || 0.001, backgroundColor: skill.part1Completed >= skill.part1Total ? '#34D399' : skillColor }]} />
                      <View style={{ flex: Math.max(skill.part1Total - skill.part1Completed, 0.001) }} />
                    </View>
                    <Text style={[arena.gridPartCount, { color: skill.part1Completed >= skill.part1Total ? '#34D399' : colors.text3 }]}>
                      {skill.part1Completed}/{skill.part1Total}
                    </Text>
                  </View>
                  <View style={arena.gridPartRow}>
                    <Text style={[arena.gridPartLabel, { color: colors.text3 }]}>Deel 2</Text>
                    <View style={[arena.gridPartBar, { backgroundColor: colors.surface2 }]}>
                      <View style={[arena.gridPartFill, { flex: skill.part2Completed || 0.001, backgroundColor: skill.part2Completed >= skill.part2Total ? '#34D399' : skillColor }]} />
                      <View style={{ flex: Math.max(skill.part2Total - skill.part2Completed, 0.001) }} />
                    </View>
                    <Text style={[arena.gridPartCount, { color: skill.part2Completed >= skill.part2Total ? '#34D399' : colors.text3 }]}>
                      {skill.part2Completed}/{skill.part2Total}
                    </Text>
                  </View>
                </View>
              )}
              {isComplete && (
                <View style={arena.gridScoreRow}>
                  {skill.scorePct >= 100 && <InlineIcon name="crown" size={14} color="#F59E0B" />}
                  {skill.scorePct >= 80 && skill.scorePct < 100 && <InlineIcon name="star" size={14} color="#F59E0B" />}
                </View>
              )}
            </Pressable>
          );
        })}
      </View>

      <View style={[arena.infoCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <InlineIcon name="lightbulb" size={16} color={colors.amber} />
          <Text style={[arena.infoTitle, { color: colors.amber }]}>Hoe werkt de Arena?</Text>
        </View>
        <Text style={[arena.infoText, { color: colors.text2 }]}>
          Kies een skill en doorloop 2 delen met elk 25 scenario-vragen. Verdien XP per goed antwoord en
          unlock badges bij 80%+ en 100% scores. Je kunt quizzen herhalen om je score te verbeteren.
        </Text>
      </View>
    </>
  );
}

const arena = StyleSheet.create({
  heroBanner: { padding: 20, paddingTop: 16, paddingBottom: 24 },
  heroTitle: { fontSize: 28, fontWeight: '800', marginBottom: 4 },
  heroSub: { fontSize: 14, fontWeight: '600', marginBottom: 20 },
  scoreCard: { borderRadius: 14, borderWidth: 1, padding: 16 },
  scoreTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  scoreLabel: { fontSize: 13, fontWeight: '600' },
  scorePct: { fontSize: 18, fontWeight: '900' },
  scoreBarTrack: { height: 8, borderRadius: 4, overflow: 'hidden', marginBottom: 8 },
  scoreBarFill: { height: '100%', borderRadius: 4 },
  scoreDetail: { fontSize: 12, fontWeight: '600' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 16, paddingTop: 16, gap: 12 },
  gridCard: {
    width: '47%',
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    paddingTop: 0,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  gridAccent: { height: 4, marginHorizontal: -16, marginBottom: 14 },
  gridName: { fontSize: 15, fontWeight: '700', marginBottom: 10 },
  gridBarTrack: { height: 5, borderRadius: 3, overflow: 'hidden', marginBottom: 8 },
  gridBarFill: { height: '100%', borderRadius: 3 },
  gridParts: { marginTop: 4, gap: 4 },
  gridPartRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  gridPartLabel: { fontSize: 10, fontWeight: '600', width: 34 },
  gridPartBar: { flex: 1, height: 5, borderRadius: 3, flexDirection: 'row', overflow: 'hidden' },
  gridPartFill: { height: '100%', borderRadius: 3 },
  gridPartCount: { fontSize: 10, fontWeight: '700', width: 32, textAlign: 'right' },
  gridScoreRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4, marginTop: 4 },
  gridScore: { fontSize: 14, fontWeight: '800' },
  gridStatus: { fontSize: 13, fontWeight: '700' },
  dailyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    gap: 12,
  },
  dailyIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dailyContent: { flex: 1 },
  dailyTitle: { fontSize: 16, fontWeight: '700', marginBottom: 2 },
  dailySub: { fontSize: 12, fontWeight: '500', lineHeight: 16 },
  dailyStreak: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dailyStreakText: { fontSize: 13, fontWeight: '800', color: '#F59E0B' },
  weakestCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
  weakestText: { flex: 1, fontSize: 13, fontWeight: '600' },
  newBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginTop: 2,
  },
  newBadgeText: { fontSize: 11, fontWeight: '800' },
  infoCard: { marginHorizontal: 16, marginTop: 16, borderWidth: 1, borderRadius: 14, padding: 16 },
  infoTitle: { fontSize: 15, fontWeight: '700', marginBottom: 8 },
  infoText: { fontSize: 14, lineHeight: 20 },
});

// ─────────────────────────────────────────────────────────────────────────────
// Main screen
// ─────────────────────────────────────────────────────────────────────────────

type Section = 'modules' | 'arena';

export default function LerenOverview() {
  const { colors } = useTheme();
  const router = useRouter();
  const store = useStore();
  const { stageProgress } = store;
  const { openSkill } = useLocalSearchParams<{ openSkill?: string }>();

  const activeThemes = useMemo(() => {
    const profile = store.profile;
    if (!profile) return [] as ThemeTag[];
    return resolveActiveThemes(profile);
  }, [store.profile]);

  const [section, setSection] = useState<Section>('modules');

  // Auto-navigate to skill page when navigated from help situatie
  useEffect(() => {
    if (openSkill) {
      setSection('modules');
      router.push(`/(tabs)/leren/${encodeURIComponent(decodeURIComponent(openSkill))}` as any);
    }
  }, [openSkill]);

  const [, setFocusCount] = useState(0);
  useFocusEffect(
    useCallback(() => {
      setFocusCount((c) => c + 1);
    }, []),
  );

  const completedBySkill = useMemo(() => {
    const result: Record<string, string[]> = {};
    for (const s of SKILL_LIST) {
      const mods = getLearningModulesForSkill(s.label, activeThemes);
      result[s.label] = mods
        .filter((mod) => {
          const progress = stageProgress[mod.id];
          if (!progress) return false;
          if (progress.completedAt) return true;
          const stages = transformModuleToDiscoveryCards(mod).stages;
          return progress.completedStageIds.length >= stages.length;
        })
        .map((mod) => mod.id);
    }
    return result;
  }, [stageProgress, activeThemes]);

  const allModules = useMemo(
    () => SKILL_LIST.flatMap((s) => getLearningModulesForSkill(s.label, activeThemes)),
    [activeThemes],
  );
  const totalDone = useMemo(
    () => SKILL_LIST.reduce((sum, s) => sum + (completedBySkill[s.label] ?? []).length, 0),
    [completedBySkill],
  );
  const totalCount = allModules.length;
  const pct = totalCount > 0 ? Math.round((totalDone / totalCount) * 100) : 0;

  const sortedSkills = SKILL_LIST;

  const ringColor = totalDone === 0 ? colors.border : '#F59E0B';

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      {/* ── Segmented control ─────────────────────────────────────── */}
      <View style={[s.segmentContainer, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <Pressable
          onPress={() => setSection('modules')}
          style={[s.segment, section === 'modules' && { borderBottomColor: colors.amber, borderBottomWidth: 2 }]}
        >
          <Text style={[s.segmentText, { color: section === 'modules' ? colors.amber : colors.text2 }]}>
            Modules
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSection('arena')}
          style={[s.segment, section === 'arena' && { borderBottomColor: colors.amber, borderBottomWidth: 2 }]}
        >
          <InlineIcon name="swords" size={14} color={section === 'arena' ? colors.amber : colors.text2} />
          <Text style={[s.segmentText, { color: section === 'arena' ? colors.amber : colors.text2 }]}>
            Arena
          </Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>
        {section === 'modules' ? (
          <>
            {/* ── Hero ─────────────────────────────────────────────── */}
            <View style={[s.hero, { backgroundColor: colors.surface2 }]}>
              <View style={s.heroInner}>
                <View style={[s.ring, { borderColor: ringColor }]}>
                  <Text style={[s.ringPct, { color: colors.text }]}>{pct}%</Text>
                  <Text style={[s.ringLabel, { color: colors.text3 }]}>voltooid</Text>
                </View>
                <View style={s.heroText}>
                  <Text style={[s.heroTitle, { color: colors.text }]}>Vader Missies</Text>
                  <Text style={[s.heroSub, { color: colors.text2 }]}>{totalDone} van {totalCount} modules</Text>
                  {totalDone === 0 ? (
                    <Text style={[s.heroHint, { color: colors.amber }]}>Kies een skill en begin je eerste missie</Text>
                  ) : (
                    <Text style={[s.heroHint, { color: colors.amber }]}>Je bent goed op weg</Text>
                  )}
                </View>
              </View>
            </View>

            {/* ── Skill Grid ─────────────────────────────────────── */}
            <View style={s.gridContainer}>
              <View style={s.grid}>
                {sortedSkills.map((skill) => {
                  const modules = getLearningModulesForSkill(skill.label, activeThemes);
                  const doneCount = (completedBySkill[skill.label] ?? []).length;
                  const hasThemed = modules.some((m) => m.themes && m.themes.length > 0);

                  let totalQuizPct = 0;
                  let quizCount = 0;
                  for (const mod of modules) {
                    const sp = stageProgress[mod.id];
                    if (sp?.completedAt && sp.quizTotal && sp.quizTotal > 0) {
                      totalQuizPct += (sp.quizCorrect / sp.quizTotal) * 100;
                      quizCount++;
                    }
                  }
                  const avgQuiz = quizCount > 0 ? totalQuizPct / quizCount : 0;
                  const masteryTier = getSkillMasteryTier(doneCount, modules.length, avgQuiz);

                  return (
                    <SkillCard
                      key={skill.label}
                      skill={skill.label}
                      doneCount={doneCount}
                      totalCount={modules.length}
                      masteryTier={masteryTier}
                      hasThemed={hasThemed}
                      onPress={() => router.push(`/(tabs)/leren/${encodeURIComponent(skill.label)}` as any)}
                    />
                  );
                })}
              </View>

            </View>
          </>
        ) : (
          <ArenaSection />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingBottom: 60 },

  // Segmented control
  segmentContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  segment: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  segmentText: {
    fontSize: 14,
    fontWeight: '700',
  },

  // Hero
  hero: {
    padding: 24,
    paddingBottom: 28,
    marginBottom: 20,
  },
  heroInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  ring: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringPct: {
    fontSize: 20,
    fontWeight: '800',
  },
  ringLabel: {
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  heroText: {
    flex: 1,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 4,
  },
  heroSub: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  heroHint: {
    fontSize: 13,
    fontWeight: '600',
  },

  // Grid
  gridContainer: {
    paddingHorizontal: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
  },
});
