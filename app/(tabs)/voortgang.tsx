import React, { useMemo, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import { AppIcon, InlineIcon, getSkillIcon, emojiToIcon } from '@/lib/icons';
import BadgeIcon from '@/components/BadgeIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import {
  ALL_BADGES,
  XP_LEVELS,
  MILESTONES,
  getLevelFromXP,
  getProgressToNextLevel,
} from '@/lib/gamification-types';
import { skillColors as themeSkillColors, rarityColors } from '@/lib/colors';
import { ALL_INTERACTIVE_TASKS } from '@/lib/interactive-tasks';
import Card from '@/components/Card';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import { getTopRecommendedSkills } from '@/lib/skill-recommender';

// ── Constants ───────────────────────────────────────────────────
const RARITY_COLORS: Record<string, string> = {
  common:    rarityColors.common,
  rare:      rarityColors.rare,
  epic:      rarityColors.epic,
  legendary: rarityColors.legendary,
};

const RARITY_LABELS: Record<string, string> = {
  common: 'Basis',
  rare: 'Zeldzaam',
  epic: 'Episch',
  legendary: 'Legendarisch',
};

const BADGE_CATEGORIES = [
  { key: 'streak', label: 'Streak Badges', icon: 'flame' as const },
  { key: 'skill', label: 'Skill Badges', icon: 'target' as const },
  { key: 'vader', label: 'Vader Badges', icon: 'user' as const },
  { key: 'arena', label: 'Arena Badges', icon: 'swords' as const },
  { key: 'learn', label: 'Leer Badges', icon: 'bookMarked' as const },
  { key: 'combo', label: 'Combo Badges', icon: 'zap' as const },
  { key: 'explorer', label: 'Ontdekking Badges', icon: 'compass' as const },
  { key: 'daily', label: 'Dagelijks Badges', icon: 'sun' as const },
  { key: 'challenge', label: 'Challenge Badges', icon: 'swords' as const },
  { key: 'secret', label: 'Geheime Badges', icon: 'lock' as const },
] as const;

const DAY_LABELS = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'];

// SKILL_EMOJI replaced by getSkillIcon() from @/lib/icons

// XP per completed task
const XP_PER_TASK = 15;
const XP_WEEK_BONUS = 50;

// ── Helper: get week key (Monday YYYY-MM-DD) ─────────────────────
function getCurrentWeekKey(): string {
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(d.setDate(diff));
  return `${monday.getFullYear()}-${String(monday.getMonth() + 1).padStart(2, '0')}-${String(monday.getDate()).padStart(2, '0')}`;
}

// ── Helper: get week activity from pulse check-ins ───────────────
function getWeekActivityFromPulse(pulseCheckIns: { date: string }[]): boolean[] {
  const today = new Date();
  const dayOfWeek = (today.getDay() + 6) % 7; // Mon=0, Sun=6
  const activity = Array(7).fill(false);

  // Find Monday of this week
  const monday = new Date(today);
  monday.setDate(today.getDate() - dayOfWeek);
  monday.setHours(0, 0, 0, 0);

  pulseCheckIns.forEach(({ date }) => {
    const d = new Date(date + 'T00:00:00');
    if (d >= monday) {
      const dayIdx = (d.getDay() + 6) % 7;
      if (dayIdx <= dayOfWeek) activity[dayIdx] = true;
    }
  });

  return activity;
}

// ── QuickStat sub-component ──────────────────────────────────────
function QuickStat({
  icon,
  value,
  label,
  bgColor,
  textColor,
  labelColor,
}: {
  icon: string;
  value: number | string;
  label: string;
  bgColor: string;
  textColor: string;
  labelColor: string;
}) {
  return (
    <View style={[styles.quickStat, { backgroundColor: bgColor }]}>
      <View style={styles.quickStatIconWrap}>
        <InlineIcon name={icon} size={20} color={textColor} />
      </View>
      <Text style={[styles.quickStatValue, { color: textColor }]}>{value}</Text>
      <Text style={[styles.quickStatLabel, { color: labelColor }]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

// ── Component ────────────────────────────────────────────────────
export default function VoortgangScreen() {
  const { colors } = useTheme();
  const { weekTaskCompletions, pulseCheckIns, hydrated, unlockedBadges, badgeUnlockDates, taskOutcomes, profile, stageProgress } = useStore();

  // ── Animations ────────────────────────────────────────────────
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const streakPulse = useRef(new Animated.Value(1)).current;

  // ── Compute gamification from weekTaskCompletions ─────────────
  const stats = useMemo(() => {
    const totalTasksCompleted = weekTaskCompletions.length;

    // Build task→skill lookup
    const taskSkillMap: Record<string, string> = {};
    ALL_INTERACTIVE_TASKS.forEach((t) => { taskSkillMap[t.id] = t.skill; });

    // Tasks by skill
    const tasksBySkill: Record<string, number> = {
      Aanwezigheid: 0,
      Emotiecoaching: 0,
      Grenzen: 0,
      Zelfregulatie: 0,
      Autonomie: 0,
      Herstel: 0,
      Verbinding: 0,
      Reflectie: 0,
    };
    weekTaskCompletions.forEach((c) => {
      const skill = taskSkillMap[c.taskId];
      if (skill && skill in tasksBySkill) {
        tasksBySkill[skill]++;
      }
    });

    // Count tasks per week to find completed weeks (7 tasks)
    const tasksPerWeek: Record<string, number> = {};
    weekTaskCompletions.forEach((c) => {
      tasksPerWeek[c.weekKey] = (tasksPerWeek[c.weekKey] || 0) + 1;
    });
    const completedWeeks = Object.values(tasksPerWeek).filter((n) => n >= 7).length;

    // We can't know skill from weekTaskCompletion (no skill field), so we read from
    // the InteractiveTask data. For now, distribute evenly – but actually the
    // weekTaskCompletions has a taskId we can look up. Let's compute XP simply.
    const totalXP = totalTasksCompleted * XP_PER_TASK + completedWeeks * XP_WEEK_BONUS;

    // Pulse streak
    const sortedDates = [...new Set(pulseCheckIns.map((c) => c.date))].sort();
    let currentStreak = 0;
    let longestStreak = 0;
    let streak = 0;
    const todayStr = new Date().toISOString().split('T')[0];

    for (let i = sortedDates.length - 1; i >= 0; i--) {
      const date = sortedDates[i];
      const diffFromToday = (new Date(todayStr).getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24);

      if (i === sortedDates.length - 1) {
        if (diffFromToday <= 1) {
          streak = 1;
          currentStreak = 1;
        } else {
          break;
        }
      } else {
        const prev = sortedDates[i];
        const next = sortedDates[i + 1];
        const diffBetween = (new Date(next).getTime() - new Date(prev).getTime()) / (1000 * 60 * 60 * 24);
        if (diffBetween === 1) {
          streak++;
          if (currentStreak > 0) currentStreak = streak;
        } else {
          if (streak > longestStreak) longestStreak = streak;
          streak = 1;
          if (currentStreak > 0) {
            currentStreak = 0;
            break;
          }
        }
      }
    }
    if (streak > longestStreak) longestStreak = streak;

    // Outcome stats
    const outcomeGelukt = taskOutcomes.filter((o) => o.outcome === 'Gelukt').length;
    const outcomeDeels = taskOutcomes.filter((o) => o.outcome === 'Deels').length;
    const outcomeNiet = taskOutcomes.filter((o) => o.outcome === 'Niet').length;
    const outcomeTotal = taskOutcomes.length;

    return {
      totalXP,
      totalTasksCompleted,
      tasksBySkill,
      currentStreak,
      longestStreak,
      completedWeeks,
      outcomeGelukt,
      outcomeDeels,
      outcomeNiet,
      outcomeTotal,
    };
  }, [weekTaskCompletions, pulseCheckIns, taskOutcomes]);

  const levelData = useMemo(() => getLevelFromXP(stats.totalXP), [stats.totalXP]);
  const xpProgress = useMemo(() => getProgressToNextLevel(stats.totalXP) / 100, [stats.totalXP]);
  const xpInLevel = stats.totalXP - levelData.minXP;
  const xpNeeded = levelData.maxXP - levelData.minXP;
  const nextLevelData = XP_LEVELS.find((l) => l.level === levelData.level + 1);

  const weekActivity = useMemo(() => getWeekActivityFromPulse(pulseCheckIns), [pulseCheckIns]);

  // ── Skill aanbevelingen ────────────────────────────────────────
  const recommendations = useMemo(() => getTopRecommendedSkills({
    doelen: profile?.doelen,
    taskOutcomes,
    weekTaskCompletions,
    pulseCheckIns,
    stageProgress,
  }, 2), [profile?.doelen, taskOutcomes, weekTaskCompletions, pulseCheckIns, stageProgress]);

  const unlockedBadgeSet = new Set(unlockedBadges);
  const unlockedCount = unlockedBadges.length;
  const totalBadges = ALL_BADGES.length;

  // Skill entries (filter out zeros only if ALL are zero, otherwise show all)
  const skillEntries = Object.entries(stats.tasksBySkill);
  const maxSkillCount = Math.max(...skillEntries.map(([, v]) => v), 1);

  // ── Entry animations ──────────────────────────────────────────
  useEffect(() => {
    if (!hydrated) return;
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.back(1.2)),
        useNativeDriver: true,
      }),
    ]).start();

    if (stats.currentStreak > 0) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(streakPulse, {
            toValue: 1.15,
            duration: 1200,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(streakPulse, {
            toValue: 1,
            duration: 1200,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }
  }, [hydrated, stats.currentStreak, fadeAnim, slideAnim, scaleAnim, streakPulse]);

  // ── Render ──────────────────────────────────────────────────
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header title="Voortgang" subtitle="Bekijk je groei als vader" />

        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
        >
          {/* ── HERO: Level + XP ─────────────────────────────── */}
          <Card variant="highlighted" style={{ marginTop: 16, marginBottom: 20 }}>
            <View style={styles.heroRow}>
              <Animated.View
                style={[
                  styles.levelCircleOuter,
                  {
                    borderColor: colors.amber,
                    shadowColor: colors.amber,
                    transform: [{ scale: scaleAnim }],
                  },
                ]}
              >
                <View style={[styles.levelCircleInner, { backgroundColor: colors.amberDim }]}>
                  <Text style={[styles.levelNumber, { color: colors.amber }]}>
                    {levelData.level}
                  </Text>
                  <Text style={[styles.levelWord, { color: colors.amber }]}>LVL</Text>
                </View>
              </Animated.View>

              <View style={styles.heroInfo}>
                <Text style={[styles.heroTitle, { color: colors.text }]}>
                  {levelData.title}
                </Text>
                <View style={styles.xpRow}>
                  <Text style={[styles.xpCurrent, { color: colors.amber }]}>
                    {xpInLevel.toLocaleString()}
                  </Text>
                  <Text style={[styles.xpSeparator, { color: colors.text3 }]}> / </Text>
                  <Text style={[styles.xpTotal, { color: colors.text3 }]}>
                    {xpNeeded.toLocaleString()} XP
                  </Text>
                </View>
                <View style={{ marginTop: 8 }}>
                  <ProgressBar progress={xpProgress} color={colors.amber} height={10} />
                </View>
                {nextLevelData && (
                  <Text style={[styles.nextLevelHint, { color: colors.text3 }]}>
                    Nog {Math.max(0, xpNeeded - xpInLevel).toLocaleString()} XP naar {nextLevelData.title}
                  </Text>
                )}
              </View>
            </View>

            <View style={[styles.totalXPPill, { backgroundColor: colors.surface2 }]}>
              <Text style={[styles.totalXPLabel, { color: colors.text3 }]}>Totaal</Text>
              <Text style={[styles.totalXPValue, { color: colors.text }]}>
                {stats.totalXP.toLocaleString()} XP
              </Text>
            </View>
          </Card>

          {/* ── STREAK + WEEKLY ACTIVITY ──────────────────────── */}
          {/* Streak card: horizontal compact layout */}
          <Card style={styles.streakCard}>
            <View style={styles.streakRow}>
              <Animated.View style={[styles.streakEmojiWrap, { transform: [{ scale: streakPulse }] }]}>
                {stats.currentStreak > 0 ? (
                  <InlineIcon name="flame" size={40} color={colors.amber} />
                ) : (
                  <InlineIcon name="snowflake" size={40} color={colors.text3} />
                )}
              </Animated.View>
              <View style={styles.streakInfo}>
                <Text style={[styles.streakNumber, { color: colors.text }]}>
                  {stats.currentStreak}
                  <Text style={[styles.streakNumberUnit, { color: colors.text3 }]}> dagen</Text>
                </Text>
                <Text style={[styles.streakLabel, { color: colors.text3 }]}>
                  Pulse streak
                </Text>
              </View>
              <View style={[styles.streakBestPill, { backgroundColor: colors.surface2 }]}>
                <InlineIcon name="star" size={16} color={colors.amber} />
                <Text style={[styles.streakBestText, { color: colors.text2 }]}>
                  Best: {stats.longestStreak}
                </Text>
              </View>
            </View>
          </Card>

          {/* Week pulse: full width card with proper spacing */}
          <Card style={styles.weekCard}>
            <View style={styles.weekHeader}>
              <Text style={[styles.weekTitle, { color: colors.text }]}>
                Pulse deze week
              </Text>
              <Text style={[styles.weekSummary, { color: colors.text3 }]}>
                {weekActivity.filter(Boolean).length}/7 dagen
              </Text>
            </View>
            <View style={styles.weekDots}>
              {DAY_LABELS.map((day, i) => {
                const isToday = i === (new Date().getDay() + 6) % 7;
                const active = weekActivity[i];
                return (
                  <View key={day} style={styles.weekDotColumn}>
                    <View
                      style={[
                        styles.weekDot,
                        {
                          backgroundColor: active ? colors.green : colors.surface2,
                          borderColor: isToday ? colors.amber : colors.border,
                          borderWidth: isToday ? 2 : 1,
                        },
                      ]}
                    >
                      {active && <InlineIcon name="check" size={14} color="#FFFFFF" />}
                    </View>
                    <Text
                      style={[
                        styles.weekDotLabel,
                        {
                          color: isToday ? colors.amber : active ? colors.text : colors.text3,
                          fontWeight: isToday ? '700' : '500',
                        },
                      ]}
                    >
                      {day}
                    </Text>
                  </View>
                );
              })}
            </View>
          </Card>

          {/* ── QUICK STATS ───────────────────────────────────── */}
          <View style={styles.quickStatsRow}>
            <QuickStat
              icon="fileText"
              value={stats.totalTasksCompleted}
              label="Taken"
              bgColor={colors.blueDim}
              textColor={colors.blue}
              labelColor={colors.text3}
            />
            <QuickStat
              icon="trophy"
              value={`${unlockedCount}/${totalBadges}`}
              label="Badges"
              bgColor={colors.purpleDim}
              textColor={colors.purple}
              labelColor={colors.text3}
            />
            <QuickStat
              icon="calendarDays"
              value={stats.completedWeeks}
              label="Weken af"
              bgColor={colors.orangeDim}
              textColor={colors.orange}
              labelColor={colors.text3}
            />
          </View>

          {/* ── OUTCOME STATS ──────────────────────────────────── */}
          {stats.outcomeTotal > 0 && (
            <Card style={{ marginBottom: 20 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <InlineIcon name="checkCircle" size={18} color={colors.text} />
                <Text style={[styles.sectionTitle, { color: colors.text, marginBottom: 0 }]}>
                  Hoe ging het?
                </Text>
              </View>
              <View style={styles.outcomeRow}>
                <View style={[styles.outcomeItem, { backgroundColor: '#22C55E18' }]}>
                  <Text style={[styles.outcomeValue, { color: '#22C55E' }]}>{stats.outcomeGelukt}</Text>
                  <Text style={[styles.outcomeLabel, { color: colors.text3 }]}>Gelukt</Text>
                </View>
                <View style={[styles.outcomeItem, { backgroundColor: '#FBBF2418' }]}>
                  <Text style={[styles.outcomeValue, { color: '#FBBF24' }]}>{stats.outcomeDeels}</Text>
                  <Text style={[styles.outcomeLabel, { color: colors.text3 }]}>Deels</Text>
                </View>
                <View style={[styles.outcomeItem, { backgroundColor: '#EF444418' }]}>
                  <Text style={[styles.outcomeValue, { color: '#EF4444' }]}>{stats.outcomeNiet}</Text>
                  <Text style={[styles.outcomeLabel, { color: colors.text3 }]}>Niet</Text>
                </View>
              </View>
              {stats.outcomeGelukt > 0 && (
                <View style={[styles.outcomeBar, { backgroundColor: colors.surface2 }]}>
                  <View style={[styles.outcomeBarFill, { width: `${(stats.outcomeGelukt / stats.outcomeTotal) * 100}%`, backgroundColor: '#22C55E' }]} />
                  <View style={[styles.outcomeBarFill, { width: `${(stats.outcomeDeels / stats.outcomeTotal) * 100}%`, backgroundColor: '#FBBF24' }]} />
                  <View style={[styles.outcomeBarFill, { width: `${(stats.outcomeNiet / stats.outcomeTotal) * 100}%`, backgroundColor: '#EF4444' }]} />
                </View>
              )}
              <Text style={[styles.outcomeFooter, { color: colors.text3 }]}>
                {Math.round((stats.outcomeGelukt / stats.outcomeTotal) * 100)}% succesvol · eerlijkheid = groei
              </Text>
            </Card>
          )}

          {/* ── AANBEVOLEN VOOR JOU ────────────────────────────── */}
          {recommendations.length > 0 && recommendations[0].score > 0 && (
            <Card style={{ marginBottom: 20 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <InlineIcon name="target" size={18} color={colors.text} />
                <Text style={[styles.sectionTitle, { color: colors.text, marginBottom: 0 }]}>
                  Aanbevolen voor jou
                </Text>
              </View>
              <View style={styles.recRow}>
                {recommendations.map((rec) => {
                  const colorKey = themeSkillColors[rec.skill];
                  const mainColor = colorKey
                    ? (colors as Record<string, string>)[colorKey.main] ?? colors.blue
                    : colors.blue;
                  const dimColor = colorKey
                    ? (colors as Record<string, string>)[colorKey.dim] ?? colors.blueDim
                    : colors.blueDim;
                  return (
                    <View key={rec.skill} style={[styles.recCard, { backgroundColor: dimColor }]}>
                      <InlineIcon name={getSkillIcon(rec.skill)} size={22} color={mainColor} />
                      <Text style={[styles.recSkill, { color: mainColor }]}>{rec.skill}</Text>
                      <Text style={[styles.recReason, { color: colors.text2 }]}>{rec.reason}</Text>
                    </View>
                  );
                })}
              </View>
            </Card>
          )}

          {/* ── MILESTONE JOURNEY ─────────────────────────────── */}
          <Card style={{ marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <InlineIcon name="compass" size={18} color={colors.text} />
              <Text style={[styles.sectionTitle, { color: colors.text, marginBottom: 0 }]}>
                Je reis als vader
              </Text>
            </View>
            <View style={styles.journeyTimeline}>
              {MILESTONES.map((milestone, i) => {
                const reached = stats.totalTasksCompleted >= milestone.tasks;
                const isCurrent =
                  stats.totalTasksCompleted >= milestone.tasks &&
                  (i === MILESTONES.length - 1 ||
                    stats.totalTasksCompleted < MILESTONES[i + 1].tasks);
                const remaining = Math.max(0, milestone.tasks - stats.totalTasksCompleted);

                return (
                  <View key={milestone.tasks} style={styles.journeyRow}>
                    {i > 0 && (
                      <View
                        style={[
                          styles.journeyLine,
                          { backgroundColor: reached ? colors.amber : colors.border },
                        ]}
                      />
                    )}
                    <View style={styles.journeyNodeRow}>
                      <View
                        style={[
                          styles.journeyNode,
                          {
                            backgroundColor: reached ? colors.amber : colors.surface2,
                            borderColor: isCurrent ? colors.amber : reached ? colors.amber : colors.border,
                            borderWidth: isCurrent ? 3 : 2,
                          },
                        ]}
                      >
                        <AppIcon name={emojiToIcon(milestone.emoji)} size="sm" variant="compact" color={reached ? '#FFFFFF' : colors.text3} />
                      </View>
                      <View style={styles.journeyInfo}>
                        <Text
                          style={[
                            styles.journeyTitle,
                            {
                              color: reached ? colors.text : colors.text3,
                              fontWeight: isCurrent ? '800' : '600',
                            },
                          ]}
                        >
                          {milestone.title}
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                          {reached ? (
                            <>
                              <Text style={[styles.journeyMeta, { color: colors.text3 }]}>
                                {milestone.tasks} taken
                              </Text>
                              <InlineIcon name="check" size={12} color={colors.text3} />
                            </>
                          ) : (
                            <Text style={[styles.journeyMeta, { color: colors.text3 }]}>
                              Nog {remaining} taken
                            </Text>
                          )}
                        </View>
                        {isCurrent && (
                          <Text style={[styles.journeyMessage, { color: colors.text2 }]}>
                            {milestone.message}
                          </Text>
                        )}
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </Card>

          {/* ── SKILL BREAKDOWN ───────────────────────────────── */}
          <Card style={{ marginBottom: 20 }}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Vaardigheden
            </Text>
            {stats.totalTasksCompleted === 0 ? (
              <Text style={[styles.emptyText, { color: colors.text3 }]}>
                Voltooi taken om je vaardigheidsverdeling te zien.
              </Text>
            ) : (
              <View style={styles.skillList}>
                {skillEntries.map(([skill, count]) => {
                  const colorKey = themeSkillColors[skill];
                  const barColor = colorKey
                    ? (colors as Record<string, string>)[colorKey.main] ?? colors.blue
                    : colors.blue;
                  const dimColor = colorKey
                    ? (colors as Record<string, string>)[colorKey.dim] ?? colors.blueDim
                    : colors.blueDim;
                  const barWidth = maxSkillCount > 0 ? count / maxSkillCount : 0;

                  return (
                    <View key={skill} style={styles.skillRow}>
                      <View style={styles.skillHeader}>
                        <View style={styles.skillNameRow}>
                          <InlineIcon name={getSkillIcon(skill)} size={14} color={barColor} />
                          <Text style={[styles.skillLabel, { color: colors.text }]}>
                            {skill}
                          </Text>
                        </View>
                        <Text style={[styles.skillCount, { color: barColor }]}>{count}</Text>
                      </View>
                      <View style={[styles.skillBarTrack, { backgroundColor: dimColor }]}>
                        <View
                          style={[
                            styles.skillBarFill,
                            {
                              backgroundColor: barColor,
                              width: `${Math.max(barWidth * 100, count > 0 ? 3 : 0)}%`,
                            },
                          ]}
                        />
                      </View>
                    </View>
                  );
                })}
              </View>
            )}
          </Card>

          {/* ── BADGES ───────────────────────────────────────── */}
          {BADGE_CATEGORIES.map(({ key, label, icon }) => {
            const categoryBadges = ALL_BADGES.filter((b) => b.category === key);
            if (categoryBadges.length === 0) return null;

            const unlockedInCategory = categoryBadges.filter((b) => unlockedBadgeSet.has(b.id)).length;

            return (
              <View key={key} style={styles.badgeSection}>
                <View style={styles.badgeSectionHeader}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <InlineIcon name={icon} size={17} color={colors.text} />
                    <Text style={[styles.badgeSectionTitle, { color: colors.text }]}>
                      {label}
                    </Text>
                  </View>
                  <View style={[styles.badgeCountPill, { backgroundColor: colors.surface2 }]}>
                    <Text style={[styles.badgeCountText, { color: colors.text2 }]}>
                      {unlockedInCategory}/{categoryBadges.length}
                    </Text>
                  </View>
                </View>
                <View style={styles.badgeGrid}>
                  {categoryBadges.map((badge) => {
                    const unlocked = unlockedBadgeSet.has(badge.id);
                    const isSecret = badge.category === 'secret';
                    const rarityColor = RARITY_COLORS[badge.rarity] ?? RARITY_COLORS.common;

                    // Badge progress
                    let progressCurrent = 0;
                    let progressTarget = badge.requirement.value;
                    let showProgress = false;
                    switch (badge.requirement.type) {
                      case 'streak':
                        progressCurrent = Math.min(stats.currentStreak, progressTarget);
                        showProgress = true;
                        break;
                      case 'tasks_completed':
                        progressCurrent = Math.min(stats.totalTasksCompleted, progressTarget);
                        showProgress = true;
                        break;
                      case 'weekly_challenges':
                        progressCurrent = Math.min(stats.completedWeeks, progressTarget);
                        showProgress = true;
                        break;
                    }

                    return (
                      <View
                        key={badge.id}
                        style={[
                          styles.badgeCard,
                          {
                            backgroundColor: unlocked ? colors.surface : colors.surface2,
                            borderColor: unlocked ? rarityColor : colors.border,
                            borderWidth: unlocked ? 2 : 1,
                            shadowColor: unlocked ? rarityColor : 'transparent',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: unlocked ? 0.4 : 0,
                            shadowRadius: unlocked ? 12 : 0,
                            elevation: unlocked ? 6 : 0,
                          },
                        ]}
                      >
                        <View style={[styles.rarityStrip, { backgroundColor: unlocked ? rarityColor : colors.border }]} />
                        <View
                          style={[
                            styles.badgeEmojiWrap,
                            {
                              backgroundColor: unlocked ? `${rarityColor}20` : colors.surface2,
                              opacity: unlocked ? 1 : 0.4,
                            },
                          ]}
                        >
                            {isSecret && !unlocked ? (
                            <InlineIcon name="lock" size={32} color={colors.text3} />
                          ) : (
                            <BadgeIcon emoji={badge.emoji} rarity={badge.rarity as 'common' | 'rare' | 'epic' | 'legendary'} size="sm" />
                          )}
                        </View>
                        <Text
                          style={[styles.badgeName, { color: unlocked ? colors.text : colors.text3 }]}
                          numberOfLines={1}
                        >
                          {isSecret && !unlocked ? '???' : badge.name}
                        </Text>
                        <Text style={[styles.badgeDesc, { color: colors.text3 }]} numberOfLines={2}>
                          {isSecret && !unlocked ? 'Geheim!' : badge.description}
                        </Text>
                        {!unlocked && showProgress && (
                          <View style={styles.badgeProgressWrap}>
                            <View style={[styles.badgeProgressTrack, { backgroundColor: colors.border }]}>
                              <View
                                style={[
                                  styles.badgeProgressFill,
                                  {
                                    backgroundColor: rarityColor,
                                    width: `${Math.min((progressCurrent / progressTarget) * 100, 100)}%`,
                                  },
                                ]}
                              />
                            </View>
                            <Text style={[styles.badgeProgressText, { color: colors.text3 }]}>
                              {progressCurrent}/{progressTarget}
                            </Text>
                          </View>
                        )}
                        {unlocked && (
                          <View style={[styles.badgeUnlockedBadge, { backgroundColor: colors.successDim }]}>
                            <InlineIcon name="check" size={12} color={colors.success} />
                          </View>
                        )}
                        {unlocked && badgeUnlockDates[badge.id] && (
                          <Text style={[styles.badgeDate, { color: colors.text3 }]}>
                            {new Date(badgeUnlockDates[badge.id]).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' })}
                          </Text>
                        )}
                        <Text style={[styles.rarityLabel, { color: unlocked ? rarityColor : colors.text3 }]}>
                          {RARITY_LABELS[badge.rarity] ?? badge.rarity}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}

          {/* ── LEVEL PROGRESSION ────────────────────────────── */}
          <Card style={{ marginTop: 4, marginBottom: 40 }}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Level Progressie
            </Text>
            <View style={styles.levelList}>
              {XP_LEVELS.slice(0, 10).map((level) => {
                const isCurrent = level.level === levelData.level;
                const isReached = levelData.level >= level.level;
                const progressInLevel =
                  isCurrent && level.maxXP > level.minXP
                    ? (stats.totalXP - level.minXP) / (level.maxXP - level.minXP)
                    : isReached
                      ? 1
                      : 0;

                return (
                  <View
                    key={level.level}
                    style={[
                      styles.levelRow,
                      {
                        backgroundColor: isCurrent ? colors.amberDim : 'transparent',
                        borderColor: isCurrent ? colors.amber : 'transparent',
                        borderWidth: isCurrent ? 1 : 0,
                      },
                    ]}
                  >
                    <View style={styles.levelRowLeft}>
                      <View
                        style={[
                          styles.levelDot,
                          {
                            backgroundColor: isReached ? colors.amber : colors.surface2,
                            borderColor: isReached ? colors.amber : colors.border,
                          },
                        ]}
                      >
                        {isReached && !isCurrent ? (
                          <InlineIcon name="check" size={16} color={colors.bg} />
                        ) : (
                          <Text style={[styles.levelDotText, { color: isReached ? colors.bg : colors.text3 }]}>
                            {level.level}
                          </Text>
                        )}
                      </View>
                      <View style={styles.levelRowInfo}>
                        <Text
                          style={[
                            styles.levelRowTitle,
                            {
                              color: isCurrent ? colors.amber : isReached ? colors.text : colors.text3,
                              fontWeight: isCurrent ? '700' : '500',
                            },
                          ]}
                        >
                          {level.title}
                        </Text>
                        <Text style={[styles.levelRowXP, { color: colors.text3 }]}>
                          {level.minXP.toLocaleString()} – {level.maxXP.toLocaleString()} XP
                        </Text>
                      </View>
                    </View>
                    {isCurrent && (
                      <View style={styles.levelRowProgress}>
                        <ProgressBar progress={Math.min(Math.max(progressInLevel, 0), 1)} color={colors.amber} height={6} />
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          </Card>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ── Styles ────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 14,
    fontStyle: 'italic',
  },

  // Hero
  heroRow: { flexDirection: 'row', alignItems: 'center', gap: 18 },
  levelCircleOuter: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },
  levelCircleInner: {
    width: 82,
    height: 82,
    borderRadius: 41,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelNumber: { fontSize: 36, fontWeight: '900', lineHeight: 40 },
  levelWord: { fontSize: 10, fontWeight: '800', letterSpacing: 2, marginTop: -2 },
  heroInfo: { flex: 1 },
  heroTitle: { fontSize: 22, fontWeight: '800', marginBottom: 4 },
  xpRow: { flexDirection: 'row', alignItems: 'baseline' },
  xpCurrent: { fontSize: 18, fontWeight: '800' },
  xpSeparator: { fontSize: 14, fontWeight: '500' },
  xpTotal: { fontSize: 14, fontWeight: '600' },
  nextLevelHint: { fontSize: 12, fontWeight: '500', marginTop: 6 },
  totalXPPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'center',
  },
  totalXPLabel: { fontSize: 12, fontWeight: '600' },
  totalXPValue: { fontSize: 14, fontWeight: '800' },

  // Streak
  streakCard: { marginBottom: 12 },
  streakRow: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  streakEmojiWrap: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  streakEmoji: { fontSize: 40 },
  streakInfo: { flex: 1 },
  streakNumber: { fontSize: 36, fontWeight: '900', lineHeight: 40 },
  streakNumberUnit: { fontSize: 16, fontWeight: '500' },
  streakLabel: { fontSize: 13, fontWeight: '600', marginTop: 2 },
  streakBestPill: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12, alignItems: 'center' },
  streakBestEmoji: { fontSize: 16, textAlign: 'center' },
  streakBestText: { fontSize: 12, fontWeight: '700', marginTop: 2 },
  // Week pulse
  weekCard: { marginBottom: 20 },
  weekHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  weekTitle: { fontSize: 15, fontWeight: '700' },
  weekDots: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 0 },
  weekDotColumn: { alignItems: 'center', gap: 6, flex: 1 },
  weekDot: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center' },
  weekDotCheck: { fontSize: 14, fontWeight: '800', color: '#FFFFFF' },
  weekDotLabel: { fontSize: 11, fontWeight: '600' },
  weekSummary: { fontSize: 13, fontWeight: '600' },

  // Quick stats
  quickStatsRow: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  quickStat: {
    flex: 1,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  quickStatIconWrap: { marginBottom: 4 },
  quickStatValue: { fontSize: 20, fontWeight: '900' },
  quickStatLabel: { fontSize: 11, fontWeight: '600', marginTop: 2, textAlign: 'center' },

  // Journey
  journeyTimeline: { paddingLeft: 4 },
  journeyRow: { position: 'relative' },
  journeyLine: { position: 'absolute', left: 19, top: -16, width: 2, height: 16 },
  journeyNodeRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, paddingVertical: 8 },
  journeyNode: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  journeyNodeEmoji: { fontSize: 18 },
  journeyInfo: { flex: 1 },
  journeyTitle: { fontSize: 14 },
  journeyMeta: { fontSize: 12, fontWeight: '500', marginTop: 2 },
  journeyMessage: { fontSize: 13, lineHeight: 18, marginTop: 4, fontStyle: 'italic' },

  // Skill breakdown
  skillList: { gap: 16 },
  skillRow: { gap: 6 },
  skillHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  skillNameRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  // skillDot replaced by InlineIcon
  skillLabel: { fontSize: 14, fontWeight: '600' },
  skillCount: { fontSize: 15, fontWeight: '800' },
  skillBarTrack: { height: 10, borderRadius: 5, overflow: 'hidden' },
  skillBarFill: { height: 10, borderRadius: 5 },

  // Badges
  badgeSection: { marginBottom: 24 },
  badgeSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  badgeSectionTitle: { fontSize: 17, fontWeight: '700' },
  badgeCountPill: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  badgeCountText: { fontSize: 12, fontWeight: '700' },
  badgeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  badgeCard: {
    width: '47%',
    borderRadius: 18,
    padding: 16,
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  rarityStrip: { position: 'absolute', top: 0, left: 0, right: 0, height: 3 },
  badgeEmojiWrap: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 10,
  },
  badgeEmoji: { fontSize: 32 },
  badgeName: { fontSize: 14, fontWeight: '700', textAlign: 'center', marginBottom: 4 },
  badgeDesc: { fontSize: 11, fontWeight: '500', textAlign: 'center', lineHeight: 16 },
  badgeProgressWrap: { width: '100%', marginTop: 8, alignItems: 'center' },
  badgeProgressTrack: { width: '100%', height: 4, borderRadius: 2, overflow: 'hidden' },
  badgeProgressFill: { height: 4, borderRadius: 2 },
  badgeProgressText: { fontSize: 10, fontWeight: '700', marginTop: 4 },
  badgeUnlockedBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeUnlockedText: { fontSize: 12, fontWeight: '800' },
  badgeDate: { fontSize: 10, fontWeight: '500', marginTop: 4 },
  rarityLabel: { fontSize: 10, fontWeight: '700', marginTop: 4, textTransform: 'uppercase', letterSpacing: 0.5 },

  // Recommendations
  recRow: { flexDirection: 'row', gap: 10 },
  recCard: {
    flex: 1,
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    gap: 6,
  },
  recSkill: { fontSize: 14, fontWeight: '800' },
  recReason: { fontSize: 12, fontWeight: '500', textAlign: 'center' },

  // Level list
  levelList: { gap: 4 },
  levelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    padding: 12,
    minHeight: 56,
  },
  levelRowLeft: { flexDirection: 'row', alignItems: 'center', flex: 1, gap: 12 },
  levelDot: { width: 38, height: 38, borderRadius: 19, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  levelDotText: { fontSize: 14, fontWeight: '800' },
  levelDotCheck: { fontSize: 16, fontWeight: '800' },
  levelRowInfo: { flex: 1 },
  levelRowTitle: { fontSize: 14 },
  levelRowXP: { fontSize: 11, fontWeight: '500', marginTop: 2 },
  levelRowProgress: { width: 80, marginLeft: 8 },

  // Outcome stats
  outcomeRow: { flexDirection: 'row', gap: 10, marginBottom: 12 },
  outcomeItem: { flex: 1, borderRadius: 12, paddingVertical: 12, alignItems: 'center' },
  outcomeValue: { fontSize: 24, fontWeight: '900' },
  outcomeLabel: { fontSize: 11, fontWeight: '600', marginTop: 2 },
  outcomeBar: { height: 8, borderRadius: 4, overflow: 'hidden', flexDirection: 'row', marginBottom: 8 },
  outcomeBarFill: { height: 8 },
  outcomeFooter: { fontSize: 12, fontStyle: 'italic', textAlign: 'center' },
});
