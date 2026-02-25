import React, { useState, useCallback } from 'react';
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
import {
  getQuickFireQuestion,
  calculateQuickFireXP,
  getDifficultyForStreak,
  QUICKFIRE_START_LIVES,
  QUICKFIRE_MAX_LIVES,
  QUICKFIRE_BONUS_EVERY,
} from '@/lib/quickfire';
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

export default function QuickFireScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const store = useStore();

  // Game state
  const [lives, setLives] = useState(QUICKFIRE_START_LIVES);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [answeredIds, setAnsweredIds] = useState<Set<string>>(new Set());
  const [gameOver, setGameOver] = useState(false);
  const [gamificationEvent, setGamificationEvent] = useState<GamificationEvent | null>(null);

  // Current question state
  const [currentQuestion, setCurrentQuestion] = useState<TrainingItem | null>(
    () => getQuickFireQuestion(new Set(), 0),
  );
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [bonusLifeAnim] = useState(new Animated.Value(0));

  const skillColor = currentQuestion ? SKILL_COLORS[currentQuestion.skill] || colors.amber : colors.amber;
  const difficulty = getDifficultyForStreak(streak);
  const diffConfig = DIFFICULTY_CONFIG[difficulty] || DIFFICULTY_CONFIG.basis;

  function handleSelectOption(optionId: string) {
    if (isAnswered || !currentQuestion) return;
    setSelectedAnswer(optionId);
    setIsAnswered(true);

    const selected = currentQuestion.options?.find((o) => o.id === optionId);
    const isCorrect = selected?.isCorrect ?? false;

    setTotalAnswered((p) => p + 1);

    if (isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      const newStreak = streak + 1;
      setStreak(newStreak);
      setTotalCorrect((p) => p + 1);
      if (newStreak > bestStreak) setBestStreak(newStreak);

      const xp = calculateQuickFireXP(newStreak);
      setTotalXP((p) => p + xp);
      store.awardBonusXP(xp, currentQuestion.skill);

      // Update arena stats
      store.updateArenaStats({
        totalQuestionsAnswered: store.arenaStats.totalQuestionsAnswered + 1,
      });

      // Bonus life every N correct in a row
      if (newStreak > 0 && newStreak % QUICKFIRE_BONUS_EVERY === 0 && lives < QUICKFIRE_MAX_LIVES) {
        setLives((p) => Math.min(p + 1, QUICKFIRE_MAX_LIVES));
        // Animate bonus life
        bonusLifeAnim.setValue(1);
        Animated.timing(bonusLifeAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }).start();
      }
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setStreak(0);
      const newLives = lives - 1;
      setLives(newLives);

      if (newLives <= 0) {
        // Game over — handled in handleNext
      }
    }
  }

  function handleNext() {
    if (lives <= 0) {
      finishGame();
      return;
    }

    const newIds = new Set(answeredIds);
    if (currentQuestion) newIds.add(currentQuestion.id);
    setAnsweredIds(newIds);

    const next = getQuickFireQuestion(newIds, streak);
    if (!next) {
      finishGame();
      return;
    }

    setCurrentQuestion(next);
    setSelectedAnswer(null);
    setIsAnswered(false);
  }

  function finishGame() {
    setGameOver(true);
    store.updateQuickFire(totalAnswered);

    // Check badges
    const newBadges = checkAndUnlockBadges(store, {
      source: 'quickfire',
      quizStreak: bestStreak,
      quickFireScore: totalAnswered,
    });
    if (newBadges.length > 0) {
      setGamificationEvent({ type: 'badge', badge: newBadges[0] });
    }
  }

  function handleRestart() {
    setLives(QUICKFIRE_START_LIVES);
    setStreak(0);
    setBestStreak(0);
    setTotalAnswered(0);
    setTotalCorrect(0);
    setTotalXP(0);
    setAnsweredIds(new Set());
    setGameOver(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setCurrentQuestion(getQuickFireQuestion(new Set(), 0));
  }

  // ── Game over screen ──

  if (gameOver) {
    const isNewRecord = totalAnswered > 0 && totalAnswered >= store.quickFireBest;

    return (
      <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
        <View style={s.gameOverContainer}>
          <AppIcon
            name={isNewRecord ? 'trophy' : 'target'}
            size="lg"
            variant="featured"
            color={isNewRecord ? colors.amber : colors.text2}
            bgColor={isNewRecord ? colors.amberDim : colors.surface2}
          />

          <Text style={[s.gameOverTitle, { color: colors.text }]}>
            {isNewRecord ? 'Nieuw Record!' : 'Game Over'}
          </Text>

          <View style={[s.statsCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <View style={s.statsGrid}>
              <View style={s.statBox}>
                <Text style={[s.statValue, { color: colors.text }]}>{totalAnswered}</Text>
                <Text style={[s.statLabel, { color: colors.text3 }]}>Beantwoord</Text>
              </View>
              <View style={s.statBox}>
                <Text style={[s.statValue, { color: '#34D399' }]}>{totalCorrect}</Text>
                <Text style={[s.statLabel, { color: colors.text3 }]}>Correct</Text>
              </View>
              <View style={s.statBox}>
                <Text style={[s.statValue, { color: colors.amber }]}>{bestStreak}</Text>
                <Text style={[s.statLabel, { color: colors.text3 }]}>Streak</Text>
              </View>
            </View>
          </View>

          <View style={[s.xpCard, { backgroundColor: '#F59E0B18', borderColor: '#F59E0B40' }]}>
            <Text style={s.xpValue}>+{totalXP} XP</Text>
            <Text style={[s.xpLabel, { color: colors.text2 }]}>verdiend</Text>
          </View>

          {store.quickFireBest > 0 && (
            <View style={[s.recordCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <InlineIcon name="trophy" size={16} color={colors.amber} />
              <Text style={[s.recordText, { color: colors.text2 }]}>
                Persoonlijk record: <Text style={{ color: colors.amber, fontWeight: '800' }}>{store.quickFireBest}</Text>
              </Text>
            </View>
          )}

          <View style={s.gameOverButtons}>
            <Pressable
              onPress={handleRestart}
              style={[s.retryBtn, { backgroundColor: colors.amber }]}
            >
              <InlineIcon name="zap" size={18} color="#000" />
              <Text style={s.retryBtnText}>Opnieuw</Text>
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

  // ── Quiz screen ──

  if (!currentQuestion) {
    return (
      <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
        <View style={s.emptyContainer}>
          <Text style={[s.emptyText, { color: colors.text2 }]}>Geen vragen meer beschikbaar</Text>
          <Pressable onPress={() => router.back()} style={[s.backBtn, { borderColor: colors.border, marginTop: 20 }]}>
            <Text style={[s.backBtnText, { color: colors.text2 }]}>Terug</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={[s.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.navigate('/(tabs)/leren')} style={s.headerBtn}>
          <InlineIcon name="x" size={22} color={colors.text} />
        </Pressable>
        <View style={s.headerCenter}>
          <Text style={[s.headerTitle, { color: colors.text }]}>Snelle Ronde</Text>
        </View>
        <View style={s.headerBtn} />
      </View>

      {/* Status bar: lives + streak */}
      <View style={[s.statusBar, { backgroundColor: colors.surface }]}>
        {/* Lives */}
        <View style={s.livesSection}>
          {Array.from({ length: QUICKFIRE_MAX_LIVES }).map((_, i) => (
            <Text key={i} style={[s.heart, { opacity: i < lives ? 1 : 0.2 }]}>
              {i < lives ? '❤️' : '🖤'}
            </Text>
          ))}
          {/* Bonus life animation */}
          <Animated.Text
            style={[
              s.bonusLife,
              {
                opacity: bonusLifeAnim,
                transform: [{ translateY: bonusLifeAnim.interpolate({ inputRange: [0, 1], outputRange: [-30, 0] }) }],
              },
            ]}
          >
            +1 ❤️
          </Animated.Text>
        </View>

        {/* Streak */}
        <View style={s.streakSection}>
          {streak > 0 && (
            <View style={[s.streakBadge, { backgroundColor: colors.amber + '20' }]}>
              <InlineIcon name="flame" size={14} color={colors.amber} />
              <Text style={[s.streakValue, { color: colors.amber }]}>{streak}</Text>
            </View>
          )}
          <Text style={[s.answeredCount, { color: colors.text3 }]}>#{totalAnswered + 1}</Text>
        </View>
      </View>

      {/* Difficulty indicator */}
      <View style={s.diffRow}>
        <View style={[s.diffIndicator, { backgroundColor: diffConfig.color + '18' }]}>
          <View style={[s.diffDot, { backgroundColor: diffConfig.color }]} />
          <Text style={[s.diffLabel, { color: diffConfig.color }]}>{diffConfig.label}</Text>
        </View>
      </View>

      {/* Question */}
      <View style={s.questionSection}>
        <View style={s.questionMeta}>
          <View style={[s.skillBadge, { backgroundColor: skillColor + '18' }]}>
            <InlineIcon name={getSkillIcon(currentQuestion.skill)} size={14} color={skillColor} />
            <Text style={[s.skillBadgeText, { color: skillColor }]}>{currentQuestion.skill}</Text>
          </View>
        </View>

        {currentQuestion.context && (
          <Text style={[s.context, { color: colors.text3 }]}>{currentQuestion.context}</Text>
        )}

        <Text style={[s.question, { color: colors.text }]}>{currentQuestion.question}</Text>
      </View>

      {/* Options */}
      <View style={s.optionsSection}>
        {currentQuestion.options?.map((option: QuizOption) => {
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
            style={[s.nextBtn, { backgroundColor: lives <= 0 ? '#EF4444' : colors.amber }]}
          >
            <Text style={s.nextBtnText}>
              {lives <= 0 ? 'Bekijk resultaat' : 'Volgende'}
            </Text>
            <InlineIcon name="arrowRight" size={18} color="#000" />
          </Pressable>
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

  // Status bar
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  livesSection: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  heart: { fontSize: 18 },
  bonusLife: { fontSize: 14, fontWeight: '800', marginLeft: 4, position: 'absolute', right: -50 },
  streakSection: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  streakValue: { fontSize: 15, fontWeight: '800' },
  answeredCount: { fontSize: 14, fontWeight: '600' },

  // Difficulty
  diffRow: { paddingHorizontal: 20, paddingTop: 8 },
  diffIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  diffDot: { width: 8, height: 8, borderRadius: 4 },
  diffLabel: { fontSize: 12, fontWeight: '700' },

  // Question
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
  context: { fontSize: 13, lineHeight: 18, marginBottom: 8, fontStyle: 'italic' },
  question: { fontSize: 16, fontWeight: '600', lineHeight: 24 },

  // Options
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

  // Game over
  gameOverContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: 'center',
    gap: 16,
  },
  gameOverTitle: { fontSize: 24, fontWeight: '800', textAlign: 'center' },
  statsCard: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
  },
  statsGrid: { flexDirection: 'row', justifyContent: 'space-around' },
  statBox: { alignItems: 'center', gap: 4 },
  statValue: { fontSize: 28, fontWeight: '800' },
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
  recordCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  recordText: { fontSize: 14, fontWeight: '600' },
  gameOverButtons: { width: '100%', gap: 10, marginTop: 8 },
  retryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 14,
  },
  retryBtnText: { fontSize: 16, fontWeight: '700', color: '#000' },
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
