import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { useAuth } from '@/lib/auth';
import {
  generateDailyQuestions,
  getTodayDateStr,
  calculateDailyXP,
  TIMER_SECONDS,
} from '@/lib/daily-arena';
import { submitDailyArenaScore } from '@/lib/supabase';
import { checkAndUnlockBadges } from '@/lib/badge-checker';
import GamificationPopup from '@/components/GamificationPopup';
import type { GamificationEvent } from '@/components/GamificationPopup';
import { SKILL_COLORS } from '@/lib/colors';
import { InlineIcon, getSkillIcon, AppIcon } from '@/lib/icons';
import type { TrainingItem, QuizOption } from '@/lib/types';

const DIFFICULTY_CONFIG: Record<string, { color: string; label: string }> = {
  basis: { color: '#34D399', label: 'Basis' },
  gevorderd: { color: '#FBBF24', label: 'Gevorderd' },
  expert: { color: '#A78BFA', label: 'Expert' },
};

export default function DailyArenaScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const store = useStore();
  const { user } = useAuth();

  const todayStr = getTodayDateStr();
  const alreadyPlayed = store.dailyArenaLastPlayed === todayStr;
  const questions = React.useMemo(() => generateDailyQuestions(todayStr), [todayStr]);

  // Quiz state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState<{ correct: boolean; xp: number; timeMs: number }[]>([]);
  const [showCompletion, setShowCompletion] = useState(false);
  const [totalXP, setTotalXP] = useState(0);
  const [xpPopup, setXpPopup] = useState<{ xp: number; key: number } | null>(null);

  // Gamification
  const [gamificationEvent, setGamificationEvent] = useState<GamificationEvent | null>(null);

  // Timer state
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef(Date.now());
  const timerAnim = useRef(new Animated.Value(1)).current;

  const currentItem = questions[currentIndex];
  const skillColor = currentItem ? SKILL_COLORS[currentItem.skill] || colors.amber : colors.amber;

  // ── Timer logic ──

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    setTimeLeft(TIMER_SECONDS);
    startTimeRef.current = Date.now();
    timerAnim.setValue(1);

    Animated.timing(timerAnim, {
      toValue: 0,
      duration: TIMER_SECONDS * 1000,
      useNativeDriver: false,
    }).start();

    timerRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const remaining = Math.max(0, TIMER_SECONDS - elapsed);
      setTimeLeft(Math.ceil(remaining));
      if (remaining <= 0) {
        stopTimer();
        handleTimeout();
      }
    }, 100);
  }, [stopTimer]);

  useEffect(() => {
    if (!showCompletion && !isAnswered && currentIndex < questions.length) {
      startTimer();
    }
    return stopTimer;
  }, [currentIndex, showCompletion]);

  // ── Answer handling ──

  function handleTimeout() {
    if (isAnswered) return;
    setIsAnswered(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    setResults((prev) => [...prev, { correct: false, xp: 0, timeMs: TIMER_SECONDS * 1000 }]);
  }

  function handleSelectOption(optionId: string) {
    if (isAnswered || !currentItem) return;
    stopTimer();
    setSelectedAnswer(optionId);
    setIsAnswered(true);

    const elapsed = Date.now() - startTimeRef.current;
    const selected = currentItem.options?.find((o) => o.id === optionId);
    const isCorrect = selected?.isCorrect ?? false;
    const xp = calculateDailyXP(isCorrect, elapsed);

    if (isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }

    setTotalXP((prev) => prev + xp);
    setResults((prev) => [...prev, { correct: isCorrect, xp, timeMs: elapsed }]);

    // Award XP to skill
    store.awardBonusXP(xp, currentItem.skill);

    // Show XP popup
    if (xp > 0) {
      setXpPopup({ xp, key: Date.now() });
      setTimeout(() => setXpPopup(null), 1500);
    }

    // Update arena stats
    store.updateArenaStats({
      totalQuestionsAnswered: store.arenaStats.totalQuestionsAnswered + 1,
    });
  }

  function handleNext() {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= questions.length) {
      handleQuizComplete();
    } else {
      setCurrentIndex(nextIndex);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  }

  async function handleQuizComplete() {
    setShowCompletion(true);
    stopTimer();

    const correctCount = results.length > 0
      ? results.filter((r) => r.correct).length
      : 0;
    const totalTimeMs = results.reduce((sum, r) => sum + r.timeMs, 0);
    const score = totalXP;

    // Update daily arena streak
    store.updateDailyArena(todayStr);

    // Check for new badges
    const newBadges = checkAndUnlockBadges(store, {
      source: 'daily_duel',
      dailyArenaStreak: store.dailyArenaStreak,
      dailyArenaCorrect: correctCount,
    });
    if (newBadges.length > 0) {
      setGamificationEvent({ type: 'badge', badge: newBadges[0] });
    }

    // Submit to leaderboard
    if (user?.id) {
      try {
        await submitDailyArenaScore(user.id, todayStr, score, totalTimeMs, correctCount);
      } catch (e) {
        console.warn('[daily-arena] Failed to submit score:', e);
      }
    }
  }

  // ── Completion screen ──

  if (showCompletion) {
    const correctCount = results.filter((r) => r.correct).length;
    const totalTime = results.reduce((sum, r) => sum + r.timeMs, 0);
    const avgTimePerQuestion = results.length > 0 ? Math.round(totalTime / results.length / 1000) : 0;

    return (
      <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
        <View style={s.completionContainer}>
          <AppIcon name="trophy" size="lg" variant="featured" color={colors.amber} bgColor={colors.amberDim} />

          <Text style={[s.completionTitle, { color: colors.text }]}>
            Dagelijkse Duel Voltooid!
          </Text>

          <View style={[s.statsCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            {/* Score bar */}
            <View style={s.scoreBar}>
              {results.map((r, i) => (
                <View
                  key={i}
                  style={[
                    s.scoreBarSegment,
                    { backgroundColor: r.correct ? '#34D399' : '#EF4444' },
                  ]}
                />
              ))}
            </View>

            <View style={s.statsRow}>
              <View style={s.statItem}>
                <View style={[s.statDot, { backgroundColor: '#34D399' }]} />
                <Text style={[s.statNumber, { color: '#34D399' }]}>{correctCount}</Text>
                <Text style={[s.statLabel, { color: colors.text2 }]}>Correct</Text>
              </View>
              <View style={s.statItem}>
                <View style={[s.statDot, { backgroundColor: '#EF4444' }]} />
                <Text style={[s.statNumber, { color: '#EF4444' }]}>{questions.length - correctCount}</Text>
                <Text style={[s.statLabel, { color: colors.text2 }]}>Fout</Text>
              </View>
              <View style={s.statItem}>
                <InlineIcon name="clock" size={14} color={colors.text3} />
                <Text style={[s.statNumber, { color: colors.text }]}>{avgTimePerQuestion}s</Text>
                <Text style={[s.statLabel, { color: colors.text2 }]}>Gem.</Text>
              </View>
            </View>
          </View>

          <View style={[s.xpCard, { backgroundColor: '#F59E0B18', borderColor: '#F59E0B40' }]}>
            <Text style={s.xpValue}>+{totalXP} XP</Text>
            <Text style={[s.xpLabel, { color: colors.text2 }]}>verdiend vandaag</Text>
          </View>

          {store.dailyArenaStreak > 1 && (
            <View style={[s.streakCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <InlineIcon name="flame" size={18} color="#F59E0B" />
              <Text style={[s.streakText, { color: colors.text }]}>
                {store.dailyArenaStreak} dagen streak!
              </Text>
            </View>
          )}

          <View style={s.completionButtons}>
            <Pressable
              onPress={() => router.push('/(tabs)/training/leaderboard')}
              style={[s.leaderboardBtn, { backgroundColor: colors.amber }]}
            >
              <InlineIcon name="trophy" size={18} color="#000" />
              <Text style={s.leaderboardBtnText}>Bekijk Ranglijst</Text>
            </Pressable>

            <Pressable
              onPress={() => router.navigate('/(tabs)/leren')}
              style={[s.backBtn, { borderColor: colors.border }]}
            >
              <Text style={[s.backBtnText, { color: colors.text2 }]}>Terug naar Arena</Text>
            </Pressable>
          </View>
        </View>
        <GamificationPopup event={gamificationEvent} onDismiss={() => setGamificationEvent(null)} />
      </SafeAreaView>
    );
  }

  // ── Already played today guard ──

  if (alreadyPlayed && !showCompletion) {
    return (
      <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
        <View style={s.completionContainer}>
          <AppIcon name="trophy" size="lg" variant="featured" color={colors.amber} bgColor={colors.amberDim} />
          <Text style={[s.completionTitle, { color: colors.text }]}>
            Al gespeeld vandaag!
          </Text>
          <Text style={[{ fontSize: 15, color: colors.text2, textAlign: 'center', lineHeight: 22 }]}>
            Je hebt de dagelijkse duel van vandaag al voltooid. Kom morgen terug voor nieuwe vragen!
          </Text>
          {store.dailyArenaStreak > 1 && (
            <View style={[s.streakCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <InlineIcon name="flame" size={18} color="#F59E0B" />
              <Text style={[s.streakText, { color: colors.text }]}>
                {store.dailyArenaStreak} dagen streak!
              </Text>
            </View>
          )}
          <View style={s.completionButtons}>
            <Pressable
              onPress={() => router.push('/(tabs)/training/leaderboard')}
              style={[s.leaderboardBtn, { backgroundColor: colors.amber }]}
            >
              <InlineIcon name="trophy" size={18} color="#000" />
              <Text style={s.leaderboardBtnText}>Bekijk Ranglijst</Text>
            </Pressable>
            <Pressable
              onPress={() => router.navigate('/(tabs)/leren')}
              style={[s.backBtn, { borderColor: colors.border }]}
            >
              <Text style={[s.backBtnText, { color: colors.text2 }]}>Terug naar Arena</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // ── Quiz screen ──

  if (!currentItem) {
    return (
      <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
        <View style={s.emptyContainer}>
          <Text style={[s.emptyText, { color: colors.text2 }]}>Geen vragen beschikbaar</Text>
        </View>
      </SafeAreaView>
    );
  }

  const timerColor = timeLeft <= 5 ? '#EF4444' : timeLeft <= 10 ? '#FBBF24' : colors.amber;
  const diffConfig = DIFFICULTY_CONFIG[currentItem.difficulty] || DIFFICULTY_CONFIG.basis;

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={[s.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.navigate('/(tabs)/leren')} style={s.headerBtn}>
          <InlineIcon name="x" size={22} color={colors.text} />
        </Pressable>
        <View style={s.headerCenter}>
          <Text style={[s.headerTitle, { color: colors.text }]}>Dagelijkse Duel</Text>
          <Text style={[s.headerSub, { color: colors.text3 }]}>
            {currentIndex + 1}/{questions.length}
          </Text>
        </View>
        <View style={s.headerBtn} />
      </View>

      {/* Progress bar */}
      <View style={[s.progressTrack, { backgroundColor: colors.surface2 }]}>
        <View
          style={[
            s.progressFill,
            {
              backgroundColor: colors.amber,
              width: `${((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100}%`,
            },
          ]}
        />
      </View>

      {/* Timer */}
      <View style={s.timerSection}>
        <View style={[s.timerCircle, { borderColor: timerColor }]}>
          <Text style={[s.timerText, { color: timerColor }]}>{timeLeft}</Text>
        </View>
        <Animated.View
          style={[
            s.timerBar,
            {
              backgroundColor: timerColor,
              width: timerAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>

      {/* Question */}
      <View style={s.questionSection}>
        <View style={s.questionMeta}>
          <View style={[s.skillBadge, { backgroundColor: skillColor + '18' }]}>
            <InlineIcon name={getSkillIcon(currentItem.skill)} size={14} color={skillColor} />
            <Text style={[s.skillBadgeText, { color: skillColor }]}>{currentItem.skill}</Text>
          </View>
          <View style={[s.diffBadge, { backgroundColor: diffConfig.color + '18' }]}>
            <Text style={[s.diffBadgeText, { color: diffConfig.color }]}>{diffConfig.label}</Text>
          </View>
        </View>

        {currentItem.context && (
          <Text style={[s.context, { color: colors.text3 }]}>{currentItem.context}</Text>
        )}

        <Text style={[s.question, { color: colors.text }]}>{currentItem.question}</Text>
      </View>

      {/* Options */}
      <View style={s.optionsSection}>
        {currentItem.options?.map((option: QuizOption) => {
          const isSelected = selectedAnswer === option.id;
          const showResult = isAnswered;
          let optionBg = colors.surface;
          let optionBorder = colors.border;
          let optionTextColor = colors.text;

          if (showResult) {
            if (option.isCorrect) {
              optionBg = '#34D39915';
              optionBorder = '#34D399';
              optionTextColor = '#34D399';
            } else if (isSelected && !option.isCorrect) {
              optionBg = '#EF444415';
              optionBorder = '#EF4444';
              optionTextColor = '#EF4444';
            }
          } else if (isSelected) {
            optionBorder = colors.amber;
          }

          return (
            <Pressable
              key={option.id}
              onPress={() => handleSelectOption(option.id)}
              disabled={isAnswered}
              style={[s.optionBtn, { backgroundColor: optionBg, borderColor: optionBorder }]}
            >
              <View
                style={[
                  s.optionLetter,
                  {
                    backgroundColor: showResult && option.isCorrect
                      ? '#34D39920'
                      : showResult && isSelected && !option.isCorrect
                        ? '#EF444420'
                        : colors.surface2,
                  },
                ]}
              >
                <Text
                  style={[
                    s.optionLetterText,
                    { color: showResult ? optionTextColor : colors.text2 },
                  ]}
                >
                  {option.id.toUpperCase()}
                </Text>
              </View>
              <Text style={[s.optionText, { color: optionTextColor }]} numberOfLines={3}>
                {option.text}
              </Text>
              {showResult && (option.isCorrect || isSelected) && (
                <InlineIcon
                  name={option.isCorrect ? 'check' : 'x'}
                  size={18}
                  color={option.isCorrect ? '#34D399' : '#EF4444'}
                />
              )}
            </Pressable>
          );
        })}
      </View>

      {/* Next button (after answer) */}
      {isAnswered && (
        <View style={s.nextSection}>
          <Pressable
            onPress={handleNext}
            style={[s.nextBtn, { backgroundColor: colors.amber }]}
          >
            <Text style={s.nextBtnText}>
              {currentIndex + 1 >= questions.length ? 'Bekijk resultaat' : 'Volgende'}
            </Text>
            <InlineIcon name="arrowRight" size={18} color="#000" />
          </Pressable>
        </View>
      )}

      {/* XP popup */}
      {xpPopup && (
        <View style={s.xpPopupContainer} pointerEvents="none">
          <Text style={[s.xpPopupText, { color: colors.amber }]}>+{xpPopup.xp} XP</Text>
        </View>
      )}

      <GamificationPopup event={gamificationEvent} onDismiss={() => setGamificationEvent(null)} />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  headerBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: '700' },
  headerSub: { fontSize: 13, fontWeight: '600' },
  progressTrack: { height: 3 },
  progressFill: { height: 3, borderRadius: 2 },
  timerSection: { alignItems: 'center', paddingTop: 16, paddingBottom: 8, gap: 8 },
  timerCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: { fontSize: 22, fontWeight: '800' },
  timerBar: { height: 4, borderRadius: 2, alignSelf: 'stretch', marginHorizontal: 40 },
  questionSection: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 16 },
  questionMeta: { flexDirection: 'row', gap: 8, marginBottom: 10 },
  skillBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  skillBadgeText: { fontSize: 12, fontWeight: '700' },
  diffBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  diffBadgeText: { fontSize: 12, fontWeight: '700' },
  context: { fontSize: 13, lineHeight: 18, marginBottom: 8, fontStyle: 'italic' },
  question: { fontSize: 16, fontWeight: '600', lineHeight: 24 },
  optionsSection: { paddingHorizontal: 20, gap: 10 },
  optionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 14,
    padding: 14,
    gap: 12,
  },
  optionLetter: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionLetterText: { fontSize: 14, fontWeight: '700' },
  optionText: { flex: 1, fontSize: 14, fontWeight: '500', lineHeight: 20 },
  nextSection: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 8 },
  nextBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 14,
  },
  nextBtnText: { fontSize: 16, fontWeight: '700', color: '#000' },
  xpPopupContainer: {
    position: 'absolute',
    top: 80,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },
  xpPopupText: { fontSize: 18, fontWeight: '800' },

  // Completion screen
  completionContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: 'center',
    gap: 16,
  },
  completionTitle: { fontSize: 24, fontWeight: '800', textAlign: 'center' },
  statsCard: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
    gap: 14,
  },
  scoreBar: {
    flexDirection: 'row',
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    gap: 3,
  },
  scoreBarSegment: { flex: 1, borderRadius: 4 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around' },
  statItem: { alignItems: 'center', gap: 4 },
  statDot: { width: 8, height: 8, borderRadius: 4 },
  statNumber: { fontSize: 22, fontWeight: '800' },
  statLabel: { fontSize: 12, fontWeight: '600' },
  xpCard: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  xpValue: { fontSize: 28, fontWeight: '800', color: '#F59E0B' },
  xpLabel: { fontSize: 13, fontWeight: '600' },
  streakCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  streakText: { fontSize: 15, fontWeight: '700' },
  completionButtons: { width: '100%', gap: 10, marginTop: 8 },
  leaderboardBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 14,
  },
  leaderboardBtnText: { fontSize: 16, fontWeight: '700', color: '#000' },
  backBtn: {
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
  },
  backBtnText: { fontSize: 15, fontWeight: '600' },

  // Empty state
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 16, fontWeight: '500' },
});
