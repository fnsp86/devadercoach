import React, { useMemo, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter, useFocusEffect } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { getLearningModulesForSkill } from '@/lib/learning-modules';
import { transformModuleToDiscoveryCards, migrateStageIds } from '@/lib/module-stages';
import type { Skill, LearningModule, ThemeTag } from '@/lib/types';
import { resolveActiveThemes } from '@/lib/theme-resolver';
import { SKILL_COLORS } from '@/lib/colors';
import { AppIcon, InlineIcon, getSkillIcon } from '@/lib/icons';

// ─────────────────────────────────────────────────────────────────────────────
// Vader Inzicht quotes per skill
// ─────────────────────────────────────────────────────────────────────────────

const VADER_INZICHT: Record<string, { quote: string; bron: string }> = {
  Emotiecoaching: {
    quote: 'Emotiecoaching draait niet om het oplossen van emoties. Het draait om erbij zijn wanneer je kind ze voelt.',
    bron: 'Gottman (1997)',
  },
  Zelfregulatie: {
    quote: 'Je kunt pas rust geven als je zelf rust hebt. Zelfregulatie begint bij de vader, niet bij het kind.',
    bron: 'Siegel & Bryson (2020)',
  },
  Aanwezigheid: {
    quote: 'Kinderen onthouden niet wat je zei. Ze onthouden of je er was. Écht aanwezig, met je aandacht erbij.',
    bron: 'Tronick (1978)',
  },
  Grenzen: {
    quote: 'Een grens is geen muur. Het is een vangrail: je kind kan vrij bewegen, maar valt niet van de weg.',
    bron: 'Baumrind (1966)',
  },
  Autonomie: {
    quote: 'Het doel is niet om alles voor je kind te doen. Het doel is om jezelf overbodig te maken.',
    bron: 'Vygotsky (1978)',
  },
  Herstel: {
    quote: 'Je hoeft geen perfecte vader te zijn. Je moet een vader zijn die herstelt. Dát leert je kind veerkracht.',
    bron: 'Winnicott (1957)',
  },
  Verbinding: {
    quote: 'Verbinding ontstaat niet in grote momenten. Het zit in de kleine, dagelijkse blikken en gebaren.',
    bron: 'Gottman (1997)',
  },
  Reflectie: {
    quote: 'De krachtigste vraag die een vader zichzelf kan stellen: "Wat had mijn kind op dat moment nodig?"',
    bron: 'Siegel & Bryson (2011)',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Stage progress dots
// ─────────────────────────────────────────────────────────────────────────────

function StageDots({
  moduleId,
  skill,
  color,
  activeThemes = [],
}: {
  moduleId: string;
  skill: Skill;
  color: string;
  activeThemes?: ThemeTag[];
}) {
  const { colors } = useTheme();
  const { getStageProgress } = useStore();

  const stages = useMemo(() => {
    const mods = getLearningModulesForSkill(skill, activeThemes);
    const mod = mods.find((m) => m.id === moduleId);
    if (!mod) return [];
    return transformModuleToDiscoveryCards(mod).stages;
  }, [moduleId, skill, activeThemes]);

  const progress = getStageProgress(moduleId);
  // Als module volledig afgerond is (completedAt), toon 100% ongeacht ID matching
  const isFullyComplete = !!progress?.completedAt;
  const rawIds = progress?.completedStageIds ?? [];
  const completedIds = migrateStageIds(rawIds, stages, moduleId);
  const completedCount = isFullyComplete ? stages.length : stages.filter((s) => completedIds.includes(s.id)).length;
  const pct = stages.length > 0 ? (completedCount / stages.length) * 100 : 0;

  // Mini progress bar (beter dan dots bij 12-15 stages)
  return (
    <View style={dotStyles.barRow}>
      <View style={[dotStyles.barTrack, { backgroundColor: colors.surface2 }]}>
        <View style={[dotStyles.barFill, { width: `${pct}%`, backgroundColor: color }]} />
      </View>
      <Text style={[dotStyles.barLabel, { color: colors.text3 }]}>
        {completedCount}/{stages.length}
      </Text>
    </View>
  );
}

const dotStyles = StyleSheet.create({
  barRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 6 },
  barTrack: { flex: 1, height: 4, borderRadius: 2, overflow: 'hidden' },
  barFill: { height: '100%', borderRadius: 2 },
  barLabel: { fontSize: 11, fontWeight: '700', minWidth: 30 },
});

// ─────────────────────────────────────────────────────────────────────────────
// Difficulty config
// ─────────────────────────────────────────────────────────────────────────────

const DIFFICULTY_CONFIG: Record<string, { color: string; label: string }> = {
  basis: { color: '#34D399', label: 'Basis' },
  gevorderd: { color: '#FBBF24', label: 'Gevorderd' },
  expert: { color: '#A78BFA', label: 'Expert' },
};

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────

type ModuleStatus = 'done' | 'in_progress' | 'next' | 'locked';

export default function SkillLearningModules() {
  const { colors } = useTheme();
  const router = useRouter();
  const { skill: rawSkill } = useLocalSearchParams<{ skill: string }>();
  const skill = decodeURIComponent(rawSkill || '') as Skill;
  const skillColor = SKILL_COLORS[skill] || colors.amber;

  const store = useStore();
  const { stageProgress } = store;

  const activeThemes = useMemo(() => {
    const profile = store.profile;
    if (!profile) return [] as ThemeTag[];
    return resolveActiveThemes(profile);
  }, [store.profile]);

  const modules = useMemo(
    () => getLearningModulesForSkill(skill, activeThemes),
    [skill, activeThemes],
  );

  // Force re-render when screen gains focus
  const [, setFocusCount] = React.useState(0);
  useFocusEffect(
    useCallback(() => {
      setFocusCount((c) => c + 1);
    }, []),
  );

  // Compute completion status per module
  const moduleStatuses = useMemo(() => {
    return modules.map((mod, i) => {
      const progress = stageProgress[mod.id];
      const stages = transformModuleToDiscoveryCards(mod).stages;
      const rawIds = progress?.completedStageIds ?? [];
      const migrated = migrateStageIds(rawIds, stages, mod.id);
      const totalStages = stages.length;
      const completedStages = progress?.completedAt ? totalStages : stages.filter((s) => migrated.includes(s.id)).length;
      const done = progress?.completedAt || completedStages >= totalStages;
      const hasStarted = completedStages > 0;
      const prevDone = i === 0 || (() => {
        const prev = modules[i - 1];
        const pp = stageProgress[prev.id];
        const ps = transformModuleToDiscoveryCards(prev).stages;
        const prevMigrated = migrateStageIds(pp?.completedStageIds ?? [], ps, prev.id);
        return pp?.completedAt || ps.filter((s) => prevMigrated.includes(s.id)).length >= ps.length;
      })();

      let status: ModuleStatus;
      if (done) status = 'done';
      else if (hasStarted) status = 'in_progress';
      else if (prevDone) status = 'next';
      else status = 'locked';

      return { mod, status, completedStages, totalStages };
    });
  }, [modules, stageProgress]);

  const completedCount = moduleStatuses.filter((m) => m.status === 'done').length;
  const totalCount = modules.length;
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Find "continue" module — first in_progress module
  const continueModule = moduleStatuses.find((m) => m.status === 'in_progress');

  // Estimated remaining time
  const remainingMinutes = useMemo(() => {
    let total = 0;
    for (const { mod, status } of moduleStatuses) {
      if (status === 'done') continue;
      // Parse duration like "8-10 min" → take the higher number
      const match = mod.duration?.match(/(\d+)/g);
      if (match) {
        total += parseInt(match[match.length - 1], 10);
      }
    }
    return total;
  }, [moduleStatuses]);

  // Encouragement text
  const encouragement = useMemo(() => {
    if (completedCount === 0) return 'Begin je eerste missie';
    if (completedCount === totalCount) return 'Alle missies voltooid!';
    if (pct >= 80) return 'Bijna klaar!';
    if (pct >= 50) return 'Halverwege, goed bezig!';
    return 'Goed op weg!';
  }, [completedCount, totalCount, pct]);

  function handleModulePress(mod: LearningModule, status: ModuleStatus) {
    if (status === 'locked') {
      Alert.alert(
        'Module vergrendeld',
        'Voltooi eerst de vorige module om deze te ontgrendelen.',
      );
      return;
    }
    router.push(
      `/(tabs)/leren/module?skill=${encodeURIComponent(skill)}&moduleId=${mod.id}` as any,
    );
  }

  const inzicht = VADER_INZICHT[skill];

  // ── Empty state ──
  if (!skill || modules.length === 0) {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <InlineIcon name="arrowLeft" size={16} color={colors.amber} />
              <Text style={[styles.backText, { color: colors.amber }]}>Leren</Text>
            </View>
          </Pressable>
          <View style={styles.emptyContainer}>
            <AppIcon name="construction" size="lg" variant="featured" color={colors.text3} bgColor={colors.surface2} />
            <Text style={[styles.emptyTitle, { color: colors.text }]}>Binnenkort beschikbaar</Text>
            <Text style={[styles.emptyText, { color: colors.text2 }]}>
              We werken hard aan de leermodules voor {skill || 'deze vaardigheid'}. Kom binnenkort terug!
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
        {/* ── Back button ── */}
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <InlineIcon name="arrowLeft" size={16} color={colors.amber} />
            <Text style={[styles.backText, { color: colors.amber }]}>Leren</Text>
          </View>
        </Pressable>

        {/* ── Gradient Header ── */}
        <LinearGradient
          colors={[skillColor + '18', colors.bg]}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <AppIcon name={getSkillIcon(skill)} size="lg" variant="featured" color={skillColor} bgColor={skillColor + '20'} iconSize={32} />
            <View style={styles.headerInfo}>
              <Text style={[styles.headerTitle, { color: colors.text }]}>{skill}</Text>
              <Text style={[styles.headerSub, { color: colors.text2 }]}>
                {completedCount} van {totalCount} modules voltooid
              </Text>
            </View>
          </View>

          {/* Progress bar */}
          <View style={styles.headerProgress}>
            <View style={[styles.headerBarTrack, { backgroundColor: colors.surface2 }]}>
              <View style={[styles.headerBarFill, { width: `${pct}%`, backgroundColor: skillColor }]} />
            </View>
            <Text style={[styles.headerPct, { color: skillColor }]}>{pct}%</Text>
          </View>

          {/* Meta row */}
          <View style={styles.headerMeta}>
            <Text style={[styles.headerEncouragement, { color: colors.amber }]}>
              {encouragement}
            </Text>
            {remainingMinutes > 0 && completedCount < totalCount && (
              <View style={styles.headerTimeRow}>
                <InlineIcon name="clock" size={13} color={colors.text3} />
                <Text style={[styles.headerTime, { color: colors.text3 }]}>
                  Nog ~{remainingMinutes} min
                </Text>
              </View>
            )}
          </View>
        </LinearGradient>

        {/* ── "Ga verder" card ── */}
        {continueModule && (
          <Pressable
            onPress={() => handleModulePress(continueModule.mod, 'in_progress')}
            style={[styles.continueCard, { backgroundColor: colors.surface, borderColor: skillColor + '60' }]}
          >
            <View style={styles.continueTop}>
              <View style={[styles.continueBadge, { backgroundColor: skillColor + '18' }]}>
                <InlineIcon name="play" size={14} color={skillColor} />
                <Text style={[styles.continueBadgeText, { color: skillColor }]}>Ga verder</Text>
              </View>
              <Text style={[styles.continueProgress, { color: colors.text3 }]}>
                {continueModule.completedStages}/{continueModule.totalStages} stappen
              </Text>
            </View>
            <Text style={[styles.continueTitle, { color: colors.text }]} numberOfLines={1}>
              Module {continueModule.mod.order}: {continueModule.mod.title}
            </Text>
            <StageDots moduleId={continueModule.mod.id} skill={skill} color={skillColor} activeThemes={activeThemes} />
            <View style={[styles.continueButton, { backgroundColor: skillColor }]}>
              <Text style={styles.continueButtonText}>Hervat</Text>
              <InlineIcon name="arrowRight" size={16} color="#FFFFFF" />
            </View>
          </Pressable>
        )}

        {/* ── Module list ── */}
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Alle modules
        </Text>

        {moduleStatuses.map(({ mod, status, completedStages, totalStages }, i) => {
          const diffConfig = DIFFICULTY_CONFIG[mod.difficulty] || DIFFICULTY_CONFIG.basis;
          const borderColor =
            status === 'done' ? '#22C55E'
            : status === 'in_progress' ? skillColor
            : colors.border;

          return (
            <Pressable
              key={mod.id}
              onPress={() => handleModulePress(mod, status)}
              style={[
                styles.moduleCard,
                {
                  backgroundColor: colors.surface,
                  borderColor,
                  borderWidth: status === 'in_progress' ? 2 : 1,
                  opacity: status === 'locked' ? 0.5 : 1,
                },
              ]}
            >
              <View style={styles.moduleRow}>
                {/* Number circle */}
                <View
                  style={[
                    styles.numberCircle,
                    {
                      backgroundColor:
                        status === 'done' ? 'rgba(34,197,94,0.12)'
                        : status === 'in_progress' || status === 'next' ? skillColor + '18'
                        : colors.surface2,
                      borderColor:
                        status === 'done' ? '#22C55E'
                        : status === 'in_progress' || status === 'next' ? skillColor
                        : colors.border,
                    },
                  ]}
                >
                  {status === 'done' ? (
                    <InlineIcon name="check" size={16} color="#22C55E" />
                  ) : status === 'locked' ? (
                    <InlineIcon name="lock" size={14} color={colors.text3} />
                  ) : (
                    <Text style={[styles.numberText, { color: status === 'in_progress' || status === 'next' ? skillColor : colors.text3 }]}>
                      {i + 1}
                    </Text>
                  )}
                </View>

                {/* Module info */}
                <View style={styles.moduleInfo}>
                  <Text style={[styles.moduleTitle, { color: status === 'locked' ? colors.text3 : colors.text }]} numberOfLines={2}>
                    {mod.title}
                  </Text>
                  <Text style={[styles.moduleDesc, { color: colors.text3 }]} numberOfLines={1}>
                    {mod.description}
                  </Text>

                  {/* Badges row */}
                  <View style={styles.badgeRow}>
                    <View style={[styles.badge, { backgroundColor: diffConfig.color + '20' }]}>
                      <Text style={[styles.badgeText, { color: diffConfig.color }]}>{diffConfig.label}</Text>
                    </View>
                    <View style={[styles.badge, { backgroundColor: colors.surface2 }]}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                        <InlineIcon name="clock" size={11} color={colors.text3} />
                        <Text style={[styles.badgeText, { color: colors.text3 }]}>{mod.duration}</Text>
                      </View>
                    </View>
                    {mod.themes && mod.themes.length > 0 && (
                      <View style={[styles.badge, { backgroundColor: '#8B5CF620', borderColor: '#8B5CF640', borderWidth: 1 }]}>
                        <Text style={[styles.badgeText, { color: '#8B5CF6' }]}>
                          {mod.themes.includes('bonuskind') || mod.themes.includes('samengesteld_gezin') ? 'Bonuskind' : 'Extra zorg'}
                        </Text>
                      </View>
                    )}
                  </View>

                  {/* Stage dots */}
                  {status !== 'locked' && (
                    <StageDots moduleId={mod.id} skill={skill} color={skillColor} activeThemes={activeThemes} />
                  )}
                </View>

                {/* Status indicator */}
                <View style={styles.statusCol}>
                  {status === 'done' && (
                    <Text style={[styles.statusText, { color: '#22C55E' }]}>Voltooid</Text>
                  )}
                  {status === 'in_progress' && (
                    <View style={[styles.startBadge, { backgroundColor: skillColor }]}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                        <InlineIcon name="play" size={12} color="#FFFFFF" />
                        <Text style={[styles.startText, { color: '#FFFFFF' }]}>Verder</Text>
                      </View>
                    </View>
                  )}
                  {status === 'next' && (
                    <View style={[styles.startBadge, { backgroundColor: skillColor + '18' }]}>
                      <Text style={[styles.startText, { color: skillColor }]}>Start</Text>
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

        {/* ── Vader Inzicht ── */}
        {inzicht && (
          <View style={[styles.inzichtCard, { backgroundColor: colors.surface, borderColor: colors.amber + '30' }]}>
            <View style={styles.inzichtHeader}>
              <InlineIcon name="lightbulb" size={16} color={colors.amber} />
              <Text style={[styles.inzichtLabel, { color: colors.amber }]}>Vader Inzicht</Text>
            </View>
            <Text style={[styles.inzichtQuote, { color: colors.text }]}>
              "{inzicht.quote}"
            </Text>
            <Text style={[styles.inzichtBron, { color: colors.text3 }]}>
              — {inzicht.bron}
            </Text>
          </View>
        )}

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 40 },

  // Back
  backButton: { marginBottom: 8, paddingVertical: 4, alignSelf: 'flex-start' },
  backText: { fontSize: 16, fontWeight: '600' },

  // Header
  header: { borderRadius: 16, padding: 20, marginBottom: 20 },
  headerTop: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 16 },
  headerInfo: { flex: 1 },
  headerTitle: { fontSize: 24, fontWeight: '800', marginBottom: 2 },
  headerSub: { fontSize: 14, fontWeight: '500' },
  headerProgress: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 12 },
  headerBarTrack: { flex: 1, height: 8, borderRadius: 4, overflow: 'hidden' },
  headerBarFill: { height: '100%', borderRadius: 4 },
  headerPct: { fontSize: 16, fontWeight: '800', minWidth: 36, textAlign: 'right' },
  headerMeta: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerEncouragement: { fontSize: 14, fontWeight: '700' },
  headerTimeRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  headerTime: { fontSize: 13, fontWeight: '500' },

  // Continue card
  continueCard: { borderRadius: 16, borderWidth: 2, padding: 18, marginBottom: 24 },
  continueTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  continueBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  continueBadgeText: { fontSize: 13, fontWeight: '700' },
  continueProgress: { fontSize: 12, fontWeight: '600' },
  continueTitle: { fontSize: 16, fontWeight: '700', marginBottom: 4, lineHeight: 22 },
  continueButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 14, paddingVertical: 12, borderRadius: 12 },
  continueButtonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },

  // Section title
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 12 },

  // Module card
  moduleCard: { borderRadius: 14, padding: 14, marginBottom: 10 },
  moduleRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  numberCircle: {
    width: 36, height: 36, borderRadius: 18, borderWidth: 1.5,
    alignItems: 'center', justifyContent: 'center', marginTop: 2,
  },
  numberText: { fontSize: 14, fontWeight: '800' },
  moduleInfo: { flex: 1 },
  moduleTitle: { fontSize: 15, fontWeight: '700', lineHeight: 20, marginBottom: 2 },
  moduleDesc: { fontSize: 12, marginBottom: 6, lineHeight: 16 },
  badgeRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  badge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  badgeText: { fontSize: 11, fontWeight: '600' },
  statusCol: { alignItems: 'flex-end', paddingTop: 2 },
  statusText: { fontSize: 12, fontWeight: '700' },
  startBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  startText: { fontSize: 12, fontWeight: '700' },

  // Vader Inzicht
  inzichtCard: { borderRadius: 16, borderWidth: 1, padding: 20, marginTop: 16 },
  inzichtHeader: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 12 },
  inzichtLabel: { fontSize: 14, fontWeight: '700' },
  inzichtQuote: { fontSize: 15, fontWeight: '500', lineHeight: 22, fontStyle: 'italic', marginBottom: 8 },
  inzichtBron: { fontSize: 12, fontWeight: '600' },

  // Empty state
  emptyContainer: { alignItems: 'center', justifyContent: 'center', paddingTop: 80, paddingHorizontal: 32 },
  emptyTitle: { fontSize: 22, fontWeight: '700', marginBottom: 12, textAlign: 'center' },
  emptyText: { fontSize: 15, lineHeight: 22, textAlign: 'center' },

  bottomSpacer: { height: 20 },
});
