import React, { useMemo, useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
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
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { SKILL_LIST } from '@/lib/skills';
import { getLearningModulesForSkill } from '@/lib/learning-modules';
import { transformModuleToStages } from '@/lib/module-stages';
import { getTrainingForSkill } from '@/lib/training-content';
import type { Skill, LearningModule, ThemeTag } from '@/lib/types';
import { getSkillMasteryTier, MASTERY_TIER_INFO } from '@/lib/gamification-types';
import { resolveActiveThemes } from '@/lib/theme-resolver';
import { SKILL_COLORS } from '@/lib/colors';
import { AppIcon, InlineIcon, getSkillIcon } from '@/lib/icons';

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
// Stage progress dots for a module
// ─────────────────────────────────────────────────────────────────────────────

function StageDots({
  moduleId,
  skill,
  color,
}: {
  moduleId: string;
  skill: Skill;
  color: string;
}) {
  const { colors } = useTheme();
  const { getStageProgress } = useStore();

  const stages = useMemo(() => {
    const mods = getLearningModulesForSkill(skill);
    const mod = mods.find((m) => m.id === moduleId);
    if (!mod) return [];
    return transformModuleToStages(mod).stages;
  }, [moduleId, skill]);

  const progress = getStageProgress(moduleId);
  const completedIds = progress?.completedStageIds ?? [];

  return (
    <View style={dotStyles.row}>
      {stages.map((s) => (
        <View
          key={s.id}
          style={[
            dotStyles.dot,
            {
              backgroundColor: completedIds.includes(s.id) ? color : colors.surface2,
            },
          ]}
        />
      ))}
    </View>
  );
}

const dotStyles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 4, marginTop: 6 },
  dot: { width: 8, height: 8, borderRadius: 4 },
});

// ─────────────────────────────────────────────────────────────────────────────
// SkillCard (compact, for grid)
// ─────────────────────────────────────────────────────────────────────────────

function SkillCard({
  skill,
  doneCount,
  totalCount,
  isExpanded,
  masteryTier,
  hasThemed,
  onPress,
}: {
  skill: Skill;
  doneCount: number;
  totalCount: number;
  isExpanded: boolean;
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
          borderColor: isExpanded ? color : colors.border,
          borderWidth: isExpanded ? 2 : 1,
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
// Expanded skill module list
// ─────────────────────────────────────────────────────────────────────────────

type ModuleStatus = 'done' | 'in_progress' | 'next' | 'locked';

function ExpandedSkillModules({
  skill,
  modules,
  completedIds,
  color,
  onNavigate,
}: {
  skill: Skill;
  modules: LearningModule[];
  completedIds: string[];
  color: string;
  onNavigate: (moduleId: string) => void;
}) {
  const { colors } = useTheme();
  const { getStageProgress } = useStore();

  return (
    <View style={expandStyles.container}>
      {modules.map((mod, i) => {
        const done = completedIds.includes(mod.id);
        const prevDone = i === 0 || completedIds.includes(modules[i - 1].id);
        const progress = getStageProgress(mod.id);
        const hasStarted = progress && progress.completedStageIds.length > 0;

        let status: ModuleStatus;
        if (done || progress?.completedAt) {
          status = 'done';
        } else if (hasStarted) {
          status = 'in_progress';
        } else if (prevDone) {
          status = 'next';
        } else {
          status = 'locked';
        }

        const borderColor =
          status === 'done' ? '#22C55E'
          : status === 'in_progress' ? color
          : status === 'next' ? color + '60'
          : colors.border;

        return (
          <Pressable
            key={mod.id}
            onPress={status !== 'locked' ? () => onNavigate(mod.id) : undefined}
            style={[
              expandStyles.moduleCard,
              {
                backgroundColor: colors.surface,
                borderColor,
                borderWidth: status === 'in_progress' ? 2 : 1,
                opacity: status === 'locked' ? 0.5 : 1,
              },
            ]}
          >
            <View style={expandStyles.moduleTop}>
              <View
                style={[
                  expandStyles.numberCircle,
                  {
                    backgroundColor:
                      status === 'done' ? 'rgba(34,197,94,0.12)'
                      : status === 'in_progress' || status === 'next' ? color + '18'
                      : colors.surface2,
                    borderColor:
                      status === 'done' ? '#22C55E'
                      : status === 'in_progress' || status === 'next' ? color
                      : colors.border,
                  },
                ]}
              >
                {status === 'done' ? (
                  <InlineIcon name="check" size={16} color="#22C55E" />
                ) : status === 'locked' ? (
                  <InlineIcon name="lock" size={14} color={colors.text3} />
                ) : (
                  <Text style={[expandStyles.number, { color: status === 'next' || status === 'in_progress' ? color : colors.text3 }]}>
                    {i + 1}
                  </Text>
                )}
              </View>

              <View style={expandStyles.moduleInfo}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                  <Text style={[expandStyles.moduleTitle, { color: status === 'locked' ? colors.text3 : colors.text, flex: 1 }]} numberOfLines={1}>
                    {mod.title}
                  </Text>
                  {mod.themes && mod.themes.length > 0 && (
                    <View style={[expandStyles.themeBadge, { backgroundColor: '#8B5CF6' + '20', borderColor: '#8B5CF6' + '40' }]}>
                      <Text style={[expandStyles.themeBadgeText, { color: '#8B5CF6' }]}>
                        {mod.themes.includes('bonuskind') || mod.themes.includes('samengesteld_gezin') ? 'Bonuskind' : 'Extra zorg'}
                      </Text>
                    </View>
                  )}
                </View>
                <Text style={[expandStyles.moduleDesc, { color: colors.text3 }]} numberOfLines={1}>
                  {mod.description}
                </Text>
                {status !== 'locked' && (
                  <StageDots moduleId={mod.id} skill={skill} color={color} />
                )}
              </View>

              <View style={expandStyles.statusCol}>
                {status === 'done' && (
                  <Text style={[expandStyles.statusText, { color: '#22C55E' }]}>Voltooid</Text>
                )}
                {status === 'in_progress' && (
                  <Text style={[expandStyles.statusText, { color }]}>Bezig</Text>
                )}
                {status === 'next' && (
                  <View style={[expandStyles.nextBadge, { backgroundColor: color + '18' }]}>
                    <Text style={[expandStyles.nextText, { color }]}>Start</Text>
                  </View>
                )}
                {status === 'locked' && (
                  <InlineIcon name="lock" size={14} color={colors.text3} />
                )}
              </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const expandStyles = StyleSheet.create({
  container: { gap: 8, marginTop: 12, marginBottom: 8 },
  moduleCard: {
    borderRadius: 14,
    padding: 14,
  },
  moduleTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  numberCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: { fontSize: 14, fontWeight: '800' },
  moduleInfo: { flex: 1 },
  moduleTitle: { fontSize: 14, fontWeight: '700', lineHeight: 19 },
  moduleDesc: { fontSize: 12, marginTop: 2 },
  themeBadge: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  themeBadgeText: { fontSize: 10, fontWeight: '700' },
  statusCol: { alignItems: 'flex-end' },
  statusText: { fontSize: 12, fontWeight: '700' },
  nextBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  nextText: { fontSize: 12, fontWeight: '700' },
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
      const totalItems = getTrainingForSkill(s.label, activeThemes).length;
      const progress = store.getTrainingProgress(s.label);
      const completedCount = progress.completedItems.length;
      const correctCount = progress.correctAnswers;
      const pct = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;
      const scorePct = progress.totalAttempts > 0
        ? Math.round((correctCount / progress.totalAttempts) * 100)
        : 0;
      return {
        ...s,
        totalItems,
        completedCount,
        correctCount,
        pct,
        scorePct,
        hasTraining: totalItems > 0,
      };
    });
  }, [store]);

  const totalCorrect = skillData.reduce((sum, s) => sum + s.correctCount, 0);
  const totalItems = skillData.reduce((sum, s) => sum + s.totalItems, 0);
  const totalCompleted = skillData.reduce((sum, s) => sum + s.completedCount, 0);
  const totalPct = totalItems > 0 ? Math.round((totalCompleted / totalItems) * 100) : 0;

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
      </LinearGradient>

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
              <View style={[arena.gridBarTrack, { backgroundColor: colors.surface2 }]}>
                <View
                  style={[
                    arena.gridBarFill,
                    { width: `${skill.pct}%`, backgroundColor: isComplete ? '#34D399' : skillColor },
                  ]}
                />
              </View>
              {notStarted ? (
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                  <Text style={[arena.gridStatus, { color: colors.text3 }]}>Start</Text>
                  <InlineIcon name="arrowRight" size={13} color={colors.text3} />
                </View>
              ) : (
                <View style={arena.gridScoreRow}>
                  <Text style={[arena.gridScore, { color: isComplete ? '#34D399' : skillColor }]}>
                    {skill.completedCount}/{skill.totalItems}
                  </Text>
                  {isComplete && skill.scorePct >= 100 && (
                    <InlineIcon name="crown" size={14} color="#F59E0B" />
                  )}
                  {isComplete && skill.scorePct >= 80 && skill.scorePct < 100 && (
                    <InlineIcon name="star" size={14} color="#F59E0B" />
                  )}
                </View>
              )}
              {!notStarted && (
                <Text style={[arena.gridPct, { color: colors.text3 }]}>{skill.pct}%</Text>
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
          Kies een skill en beantwoord 30 scenario-vragen. Verdien XP per goed antwoord en
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
  gridScoreRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  gridScore: { fontSize: 14, fontWeight: '800' },
  gridStatus: { fontSize: 13, fontWeight: '700' },
  gridPct: { fontSize: 11, fontWeight: '600', marginTop: 2 },
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
  const [expandedSkill, setExpandedSkill] = useState<Skill | null>(null);

  // Auto-expand skill when navigated from help situatie
  useEffect(() => {
    if (openSkill) {
      setSection('modules');
      setExpandedSkill(decodeURIComponent(openSkill) as Skill);
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
          const stages = transformModuleToStages(mod).stages;
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

  function handleNavigate(skill: Skill, moduleId: string) {
    router.push(
      `/(tabs)/leren/module?skill=${encodeURIComponent(skill)}&moduleId=${encodeURIComponent(moduleId)}` as any,
    );
  }

  function handleSkillPress(skill: Skill) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedSkill(expandedSkill === skill ? null : skill);
  }

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
                      isExpanded={expandedSkill === skill.label}
                      masteryTier={masteryTier}
                      hasThemed={hasThemed}
                      onPress={() => handleSkillPress(skill.label)}
                    />
                  );
                })}
              </View>

              {expandedSkill && (
                <View style={[s.expandedSection, { borderColor: SKILL_COLORS[expandedSkill] + '40' }]}>
                  <View style={s.expandedHeader}>
                    <Text style={[s.expandedTitle, { color: colors.text }]}>{expandedSkill}</Text>
                    <Pressable onPress={() => setExpandedSkill(null)} style={s.closeBtn}>
                      <InlineIcon name="x" size={18} color={colors.text3} />
                    </Pressable>
                  </View>
                  <ExpandedSkillModules
                    skill={expandedSkill}
                    modules={getLearningModulesForSkill(expandedSkill, activeThemes)}
                    completedIds={completedBySkill[expandedSkill] ?? []}
                    color={SKILL_COLORS[expandedSkill] ?? '#667eea'}
                    onNavigate={(moduleId) => handleNavigate(expandedSkill, moduleId)}
                  />
                </View>
              )}
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

  // Expanded
  expandedSection: {
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
  },
  expandedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expandedTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  closeBtn: {
    padding: 8,
  },
});
