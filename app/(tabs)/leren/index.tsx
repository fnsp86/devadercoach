import React, { useMemo, useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useFocusEffect } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { SKILL_LIST } from '@/lib/skills';
import { getLearningModulesForSkill } from '@/lib/learning-modules';
import { transformModuleToStages } from '@/lib/module-stages';
import type { Skill, LearningModule } from '@/lib/types';
import { getSkillMasteryTier, MASTERY_TIER_INFO } from '@/lib/gamification-types';
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
  onPress,
}: {
  skill: Skill;
  doneCount: number;
  totalCount: number;
  isExpanded: boolean;
  masteryTier: 'none' | 'bronze' | 'silver' | 'gold';
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
              {/* Number / status */}
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
                <Text style={[expandStyles.moduleTitle, { color: status === 'locked' ? colors.text3 : colors.text }]} numberOfLines={1}>
                  {mod.title}
                </Text>
                <Text style={[expandStyles.moduleDesc, { color: colors.text3 }]} numberOfLines={1}>
                  {mod.description}
                </Text>
                {/* Stage progress dots */}
                {status !== 'locked' && (
                  <StageDots moduleId={mod.id} skill={skill} color={color} />
                )}
              </View>

              {/* Status label */}
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
  statusCol: { alignItems: 'flex-end' },
  statusText: { fontSize: 12, fontWeight: '700' },
  nextBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  nextText: { fontSize: 12, fontWeight: '700' },
});

// ─────────────────────────────────────────────────────────────────────────────
// Main screen
// ─────────────────────────────────────────────────────────────────────────────

export default function LerenOverview() {
  const { colors } = useTheme();
  const router = useRouter();
  const { stageProgress } = useStore();

  // Expanded skill
  const [expandedSkill, setExpandedSkill] = useState<Skill | null>(null);

  // Force re-render when screen gains focus (e.g., returning from module)
  const [, setFocusCount] = useState(0);
  useFocusEffect(
    useCallback(() => {
      setFocusCount((c) => c + 1);
    }, []),
  );

  // Bereken voltooide modules per skill op basis van stageProgress (single source of truth)
  const completedBySkill = useMemo(() => {
    const result: Record<string, string[]> = {};
    for (const s of SKILL_LIST) {
      const mods = getLearningModulesForSkill(s.label);
      result[s.label] = mods
        .filter((mod) => {
          const progress = stageProgress[mod.id];
          if (!progress) return false;
          // Module is voltooid als completedAt is gezet OF alle stages zijn afgerond
          if (progress.completedAt) return true;
          const stages = transformModuleToStages(mod).stages;
          return progress.completedStageIds.length >= stages.length;
        })
        .map((mod) => mod.id);
    }
    return result;
  }, [stageProgress]);

  // Total stats
  const allModules = useMemo(
    () => SKILL_LIST.flatMap((s) => getLearningModulesForSkill(s.label)),
    [],
  );
  const totalDone = useMemo(
    () =>
      SKILL_LIST.reduce(
        (sum, s) => sum + (completedBySkill[s.label] ?? []).length,
        0,
      ),
    [completedBySkill],
  );
  const totalCount = allModules.length;
  const pct = totalCount > 0 ? Math.round((totalDone / totalCount) * 100) : 0;

  // Alle skills in standaard volgorde
  const sortedSkills = SKILL_LIST;

  function handleNavigate(skill: Skill, moduleId: string) {
    router.push(
      `/(tabs)/leren/module?skill=${encodeURIComponent(skill)}&moduleId=${encodeURIComponent(moduleId)}` as any,
    );
  }

  function handleSkillPress(skill: Skill) {
    setExpandedSkill(expandedSkill === skill ? null : skill);
  }

  const ringColor = totalDone === 0 ? colors.border : '#F59E0B';

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>

        {/* ── Hero ─────────────────────────────────────────────────── */}
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

        {/* ── Skill Grid ─────────────────────────────────────────── */}
        <View style={s.gridContainer}>
          <View style={s.grid}>
            {sortedSkills.map((skill) => {
              const modules = getLearningModulesForSkill(skill.label);
              const doneCount = (completedBySkill[skill.label] ?? []).length;

              // Calculate average quiz percentage for mastery tier
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
                  onPress={() => handleSkillPress(skill.label)}
                />
              );
            })}
          </View>

          {/* ── Expanded module list ──────────────────────────────── */}
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
                modules={getLearningModulesForSkill(expandedSkill)}
                completedIds={completedBySkill[expandedSkill] ?? []}
                color={SKILL_COLORS[expandedSkill] ?? '#667eea'}
                onNavigate={(moduleId) => handleNavigate(expandedSkill, moduleId)}
              />
            </View>
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingBottom: 60 },

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
