import React, { useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { SKILL_LIST } from '@/lib/skills';
import { getTrainingForSkill } from '@/lib/training-content';
import type { Skill } from '@/lib/types';
import { SKILL_COLORS } from '@/lib/colors';
import { AppIcon, InlineIcon, getSkillIcon } from '@/lib/icons';

export default function TrainingOverview() {
  const { colors } = useTheme();
  const router = useRouter();
  const store = useStore();

  // Pre-compute training data per skill
  const skillData = useMemo(() => {
    return SKILL_LIST.map((s) => {
      const totalItems = getTrainingForSkill(s.label).length;
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

  // Totals
  const totalCorrect = skillData.reduce((sum, s) => sum + s.correctCount, 0);
  const totalItems = skillData.reduce((sum, s) => sum + s.totalItems, 0);
  const totalCompleted = skillData.reduce((sum, s) => sum + s.completedCount, 0);
  const totalPct = totalItems > 0 ? Math.round((totalCompleted / totalItems) * 100) : 0;

  function handleNavigate(skill: Skill) {
    router.push(`/(tabs)/training/${encodeURIComponent(skill)}`);
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Hero Banner ── */}
        <LinearGradient
          colors={[colors.surface2, colors.bg]}
          style={styles.heroBanner}
        >
          <View style={{flexDirection:'row',alignItems:'center',gap:8}}>
            <InlineIcon name="swords" size={28} color={colors.text} />
            <Text style={[styles.heroTitle, { color: colors.text }]}>Vader Arena</Text>
          </View>
          <Text style={[styles.heroSub, { color: colors.text3 }]}>Test je kennis · Verdien XP</Text>

          {/* Total score card */}
          <View style={[styles.scoreCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <View style={styles.scoreTop}>
              <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
                <InlineIcon name="barChart3" size={14} color={colors.text2} />
                <Text style={[styles.scoreLabel, { color: colors.text2 }]}>Jouw totaalscore</Text>
              </View>
              <Text style={[styles.scorePct, { color: colors.amber }]}>{totalPct}%</Text>
            </View>
            <View style={[styles.scoreBarTrack, { backgroundColor: colors.border }]}>
              <View style={[styles.scoreBarFill, { width: `${totalPct}%`, backgroundColor: colors.amber }]} />
            </View>
            <Text style={[styles.scoreDetail, { color: colors.text3 }]}>
              {totalCompleted}/{totalItems} voltooid · {totalCorrect} goed beantwoord
            </Text>
          </View>
        </LinearGradient>

        {/* ── Skill Grid ── */}
        <View style={styles.grid}>
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
                  styles.gridCard,
                  {
                    backgroundColor: colors.surface,
                    borderColor: isComplete ? '#34D399' : colors.border,
                    opacity: skill.hasTraining ? 1 : 0.5,
                  },
                ]}
              >
                {/* Accent top bar */}
                <View style={[styles.gridAccent, { backgroundColor: skillColor }]} />

                <AppIcon name={getSkillIcon(skill.label)} size="md" variant="compact" color={skillColor} />
                <Text style={[styles.gridName, { color: colors.text }]} numberOfLines={1}>
                  {skill.label}
                </Text>

                {/* Mini progress bar */}
                <View style={[styles.gridBarTrack, { backgroundColor: colors.surface2 }]}>
                  <View
                    style={[
                      styles.gridBarFill,
                      {
                        width: `${skill.pct}%`,
                        backgroundColor: isComplete ? '#34D399' : skillColor,
                      },
                    ]}
                  />
                </View>

                {/* Score / Status */}
                {notStarted ? (
                  <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
                    <Text style={[styles.gridStatus, { color: colors.text3 }]}>Start</Text>
                    <InlineIcon name="arrowRight" size={13} color={colors.text3} />
                  </View>
                ) : (
                  <View style={styles.gridScoreRow}>
                    <Text style={[styles.gridScore, { color: isComplete ? '#34D399' : skillColor }]}>
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

                {/* Percentage */}
                {!notStarted && (
                  <Text style={[styles.gridPct, { color: colors.text3 }]}>{skill.pct}%</Text>
                )}
              </Pressable>
            );
          })}
        </View>

        {/* ── Info card ── */}
        <View style={[styles.infoCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <View style={{flexDirection:'row',alignItems:'center',gap:6}}>
            <InlineIcon name="lightbulb" size={16} color={colors.amber} />
            <Text style={[styles.infoTitle, { color: colors.amber }]}>Hoe werkt de Arena?</Text>
          </View>
          <Text style={[styles.infoText, { color: colors.text2 }]}>
            Kies een skill en beantwoord 30 scenario-vragen. Verdien XP per goed antwoord en
            unlock badges bij 80%+ en 100% scores. Je kunt quizzen herhalen om je score te verbeteren.
          </Text>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { flex: 1 },
  scrollContent: { paddingBottom: 40 },

  // Hero banner
  heroBanner: {
    padding: 20,
    paddingTop: 24,
    paddingBottom: 24,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 4,
  },
  heroSub: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 20,
  },

  // Score card
  scoreCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
  },
  scoreTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  scoreLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  scorePct: {
    fontSize: 18,
    fontWeight: '900',
  },
  scoreBarTrack: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  scoreBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  scoreDetail: {
    fontSize: 12,
    fontWeight: '600',
  },

  // Grid
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 12,
  },
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
  gridAccent: {
    height: 4,
    marginHorizontal: -16,
    marginBottom: 14,
  },
  gridEmoji: {
    fontSize: 28,
    marginBottom: 6,
  },
  gridName: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10,
  },
  gridBarTrack: {
    height: 5,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  gridBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  gridScoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  gridScore: {
    fontSize: 14,
    fontWeight: '800',
  },
  gridBadge: {
    fontSize: 14,
  },
  gridStatus: {
    fontSize: 13,
    fontWeight: '700',
  },
  gridPct: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },

  // Info card
  infoCard: {
    marginHorizontal: 16,
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
  },
  bottomSpacer: {
    height: 20,
  },
});
