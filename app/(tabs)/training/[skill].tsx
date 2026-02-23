import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter, useFocusEffect } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { getTrainingForSkill } from '@/lib/training-content';
import { QUIZ_XP, getLevelFromXP } from '@/lib/gamification-types';
import { checkAndUnlockBadges } from '@/lib/badge-checker';
import GamificationPopup from '@/components/GamificationPopup';
import type { GamificationEvent } from '@/components/GamificationPopup';
import type { Skill, TrainingItem, QuizOption } from '@/lib/types';
import ProgressBar from '@/components/ProgressBar';
import Card from '@/components/Card';
import { SKILL_COLORS } from '@/lib/colors';
import { AppIcon, InlineIcon } from '@/lib/icons';

const DIFFICULTY_CONFIG: Record<string, { color: string; label: string }> = {
  basis: { color: '#34D399', label: 'Basis' },
  gevorderd: { color: '#FBBF24', label: 'Gevorderd' },
  expert: { color: '#A78BFA', label: 'Expert' },
};

export default function SkillTraining() {
  const { colors } = useTheme();
  const router = useRouter();
  const { skill: rawSkill } = useLocalSearchParams<{ skill: string }>();
  const skill = decodeURIComponent(rawSkill || '') as Skill;
  const skillColor = SKILL_COLORS[skill] || colors.amber;

  const store = useStore();
  const items = useMemo(() => getTrainingForSkill(skill), [skill]);

  // Initialize state from store progress so we never flash the wrong screen
  const [currentIndex, setCurrentIndex] = useState(() => {
    if (items.length === 0) return 0;
    const progress = store.getTrainingProgress(skill);
    if (progress.completedItems.length >= items.length) return 0;
    if (progress.completedItems.length > 0) {
      const nextIndex = items.findIndex(
        (item) => !progress.completedItems.includes(item.id),
      );
      return nextIndex >= 0 ? nextIndex : 0;
    }
    return 0;
  });
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [oefeningDone, setOefeningDone] = useState(false);
  const [showCompletion, setShowCompletion] = useState(() => {
    if (items.length === 0) return false;
    const progress = store.getTrainingProgress(skill);
    return progress.completedItems.length >= items.length;
  });
  const [sessionCorrect, setSessionCorrect] = useState(() => {
    if (items.length === 0) return 0;
    const progress = store.getTrainingProgress(skill);
    if (progress.completedItems.length >= items.length) return progress.correctAnswers;
    return 0;
  });
  const [sessionIncorrect, setSessionIncorrect] = useState(() => {
    if (items.length === 0) return 0;
    const progress = store.getTrainingProgress(skill);
    if (progress.completedItems.length >= items.length) return progress.totalAttempts - progress.correctAnswers;
    return 0;
  });
  const [sessionXP, setSessionXP] = useState(0);
  const [xpPopup, setXpPopup] = useState<{ xp: number; key: number } | null>(null);
  const [gamificationEvent, setGamificationEvent] = useState<GamificationEvent | null>(null);
  const [streak, setStreak] = useState(0);

  // Sync completion state when screen gains focus (handles cached components)
  useFocusEffect(
    useCallback(() => {
      if (items.length === 0) return;
      const progress = store.getTrainingProgress(skill);
      if (progress.completedItems.length >= items.length) {
        setShowCompletion(true);
        setSessionCorrect(progress.correctAnswers);
        setSessionIncorrect(progress.totalAttempts - progress.correctAnswers);
      } else if (progress.completedItems.length > 0) {
        // Resume from where user left off
        setShowCompletion(false);
        const nextIndex = items.findIndex(
          (item) => !progress.completedItems.includes(item.id),
        );
        if (nextIndex >= 0) setCurrentIndex(nextIndex);
      } else {
        // No progress — fresh start
        setShowCompletion(false);
        setCurrentIndex(0);
      }
    }, [items, skill]),
  );

  const currentItem: TrainingItem | undefined = items[currentIndex];
  const totalItems = items.length;
  const progressValue = totalItems > 0 ? currentIndex / totalItems : 0;

  // -- Quiz handlers --

  function handleSelectOption(optionId: string) {
    if (isAnswered || !currentItem || currentItem.type !== 'quiz') return;
    setSelectedAnswer(optionId);
    setIsAnswered(true);

    const selected = currentItem.options?.find((o) => o.id === optionId);
    const isCorrect = selected?.isCorrect ?? false;

    if (isCorrect) {
      setSessionCorrect((prev) => prev + 1);
      setStreak((prev) => prev + 1);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      setSessionIncorrect((prev) => prev + 1);
      setStreak(0);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }

    // Award XP
    const xp = isCorrect
      ? QUIZ_XP[`correct_${currentItem.difficulty}` as keyof typeof QUIZ_XP]
      : QUIZ_XP.incorrect;
    setSessionXP((prev) => prev + xp);
    store.awardBonusXP(xp, skill);

    // Show XP popup
    setXpPopup({ xp, key: Date.now() });
    setTimeout(() => setXpPopup(null), 1500);

    store.markTrainingItemComplete(skill, currentItem.id, isCorrect);

    // Update arena stats per answer
    const newStreak = isCorrect ? streak + 1 : 0;
    store.updateArenaStats({
      totalQuestionsAnswered: store.arenaStats.totalQuestionsAnswered + 1,
      bestStreak: Math.max(store.arenaStats.bestStreak, newStreak),
    });
  }

  // -- Oefening handlers --

  function handleOefeningDone() {
    if (!currentItem || currentItem.type !== 'oefening') return;
    setOefeningDone(true);
    store.markTrainingItemComplete(skill, currentItem.id);

    // Auto-advance after short delay
    setTimeout(() => {
      advanceToNext();
    }, 1200);
  }

  // -- Navigation --

  function advanceToNext() {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= totalItems) {
      // Quiz complete
      const progress = store.getTrainingProgress(skill);
      setSessionCorrect(progress.correctAnswers);
      setSessionIncorrect(progress.totalAttempts - progress.correctAnswers);

      // Completion bonus XP
      const totalAttempts = progress.correctAnswers + (progress.totalAttempts - progress.correctAnswers);
      const percentage = totalAttempts > 0 ? (progress.correctAnswers / totalAttempts) * 100 : 0;
      let bonus = 0;
      if (percentage >= 100) {
        bonus = QUIZ_XP.perfect_bonus;
      } else if (percentage >= 80) {
        bonus = QUIZ_XP.completion_bonus;
      }
      if (bonus > 0) {
        store.awardBonusXP(bonus, skill);
        setSessionXP((prev) => prev + bonus);
      }

      // Update arena stats on quiz completion
      const isPerfect = percentage >= 100;
      store.updateArenaStats({
        totalQuizzesCompleted: store.arenaStats.totalQuizzesCompleted + 1,
        skillsQuizzed: [...store.arenaStats.skillsQuizzed, skill],
        ...(isPerfect ? { perfectQuizzes: store.arenaStats.perfectQuizzes + 1 } : {}),
      });

      // Check for new badges
      const newBadges = checkAndUnlockBadges(store, {
        source: 'quiz',
        skill,
        quizStreak: streak,
        quizCompleted: true,
      });
      if (newBadges.length > 0) {
        setGamificationEvent({ type: 'badge', badge: newBadges[0] });
      }

      setShowCompletion(true);
    } else {
      setCurrentIndex(nextIndex);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setOefeningDone(false);
    }
  }

  function handleReset() {
    store.resetTraining(skill);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setOefeningDone(false);
    setShowCompletion(false);
    setSessionCorrect(0);
    setSessionIncorrect(0);
    setSessionXP(0);
  }

  // -- Empty state --

  if (items.length === 0) {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
        >
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
              <InlineIcon name="arrowLeft" size={16} color={colors.amber} />
              <Text style={[styles.backText, { color: colors.amber }]}>Quiz</Text>
            </View>
          </Pressable>
          <View style={styles.emptyContainer}>
            <AppIcon name="construction" size="lg" variant="featured" color={colors.text3} bgColor={colors.surface2} iconSize={40} />
            <Text style={[styles.emptyTitle, { color: colors.text }]}>
              Binnenkort beschikbaar
            </Text>
            <Text style={[styles.emptyText, { color: colors.text2 }]}>
              We werken aan de quiz voor {skill}. Kom binnenkort terug!
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // -- Completion screen --

  if (showCompletion) {
    const totalAttempts = sessionCorrect + sessionIncorrect;
    const percentage = totalAttempts > 0 ? Math.round((sessionCorrect / totalAttempts) * 100) : 0;

    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
              <InlineIcon name="arrowLeft" size={16} color={colors.amber} />
              <Text style={[styles.backText, { color: colors.amber }]}>Quiz</Text>
            </View>
          </Pressable>

          <View style={styles.completionContainer}>
            <AppIcon name="trophy" size="lg" variant="featured" color="#F59E0B" bgColor="#F59E0B18" iconSize={40} />
            <Text style={[styles.completionTitle, { color: colors.text }]}>
              Quiz voltooid!
            </Text>
            <Text style={[styles.completionSubtitle, { color: colors.text2 }]}>
              Je hebt de {skill} quiz afgerond
            </Text>

            {/* Stats */}
            <View
              style={[
                styles.statsCard,
                { backgroundColor: colors.surface, borderColor: colors.border },
              ]}
            >
              <Text style={[styles.statsTitle, { color: colors.text }]}>
                Resultaten
              </Text>

              {/* Colored bar */}
              <View style={styles.statsBarContainer}>
                {totalAttempts > 0 && (
                  <View style={styles.statsBar}>
                    <View
                      style={[
                        styles.statsBarSegment,
                        {
                          backgroundColor: '#34D399',
                          flex: sessionCorrect || 0.01,
                        },
                      ]}
                    />
                    <View
                      style={[
                        styles.statsBarSegment,
                        {
                          backgroundColor: '#EF4444',
                          flex: sessionIncorrect || 0.01,
                        },
                      ]}
                    />
                  </View>
                )}
              </View>

              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <View
                    style={[styles.statDot, { backgroundColor: '#34D399' }]}
                  />
                  <Text style={[styles.statNumber, { color: '#34D399' }]}>
                    {sessionCorrect}
                  </Text>
                  <Text style={[styles.statLabel, { color: colors.text2 }]}>
                    Correct
                  </Text>
                </View>
                <View style={styles.statItem}>
                  <View
                    style={[styles.statDot, { backgroundColor: '#EF4444' }]}
                  />
                  <Text style={[styles.statNumber, { color: '#EF4444' }]}>
                    {sessionIncorrect}
                  </Text>
                  <Text style={[styles.statLabel, { color: colors.text2 }]}>
                    Incorrect
                  </Text>
                </View>
                <View style={styles.statItem}>
                  <View
                    style={[styles.statDot, { backgroundColor: skillColor }]}
                  />
                  <Text style={[styles.statNumber, { color: skillColor }]}>
                    {totalItems}
                  </Text>
                  <Text style={[styles.statLabel, { color: colors.text2 }]}>
                    Totaal
                  </Text>
                </View>
              </View>

              {totalAttempts > 0 && (
                <Text style={[styles.percentageText, { color: colors.text2 }]}>
                  Score: {percentage}% correct
                </Text>
              )}
            </View>

            {/* XP earned */}
            <View style={[styles.xpEarnedCard, { backgroundColor: '#F59E0B18', borderColor: '#F59E0B40' }]}>
              <Text style={styles.xpEarnedValue}>+{sessionXP} XP</Text>
              <Text style={[styles.xpEarnedLabel, { color: colors.text2 }]}>
                verdiend{percentage >= 100 ? ' (incl. +100 perfecte score bonus!)' : percentage >= 80 ? ' (incl. +50 bonus!)' : ''}
              </Text>
            </View>

            {/* Action buttons */}
            <Pressable
              onPress={handleReset}
              style={[styles.completionButton, { backgroundColor: skillColor }]}
            >
              <Text style={styles.completionButtonText}>
                Herhaal quiz
              </Text>
            </Pressable>

            <Pressable
              onPress={() => router.navigate('/(tabs)/training')}
              style={[
                styles.completionButton,
                {
                  backgroundColor: colors.surface2,
                  borderWidth: 1,
                  borderColor: colors.border,
                },
              ]}
            >
              <Text
                style={[styles.completionButtonText, { color: colors.text }]}
              >
                Terug naar Quiz
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // -- Active training item --

  if (!currentItem) return null;

  const diffConfig = DIFFICULTY_CONFIG[currentItem.difficulty] || DIFFICULTY_CONFIG.basis;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Back link */}
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
            <InlineIcon name="arrowLeft" size={16} color={colors.amber} />
            <Text style={[styles.backText, { color: colors.amber }]}>Quiz</Text>
          </View>
        </Pressable>

        {/* Progress bar */}
        <View style={styles.topProgressContainer}>
          <View style={styles.topProgressLabelRow}>
            <Text style={[styles.topProgressLabel, { color: colors.text2 }]}>
              {skill}
            </Text>
            <Text style={[styles.topProgressCount, { color: skillColor }]}>
              {currentIndex + 1}/{totalItems}
            </Text>
          </View>
          <ProgressBar
            progress={progressValue}
            color={skillColor}
            height={6}
          />
        </View>

        {/* Difficulty + type badges + streak */}
        <View style={styles.itemBadgeRow}>
          <View
            style={[
              styles.itemBadge,
              { backgroundColor: diffConfig.color + '20' },
            ]}
          >
            <Text style={[styles.itemBadgeText, { color: diffConfig.color }]}>
              {diffConfig.label}
            </Text>
          </View>
          <View
            style={[
              styles.itemBadge,
              { backgroundColor: skillColor + '20' },
            ]}
          >
            <Text style={[styles.itemBadgeText, { color: skillColor }]}>
              Vraag {currentIndex + 1} van {totalItems}
            </Text>
          </View>
          {streak >= 3 && (
            <View style={[styles.itemBadge, { backgroundColor: '#F59E0B20' }]}>
              <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
                <InlineIcon name="flame" size={13} color="#F59E0B" />
                <Text style={[styles.itemBadgeText, { color: '#F59E0B' }]}>
                  {streak} op rij!
                </Text>
              </View>
            </View>
          )}
        </View>

        {/* ── QUIZ TYPE ── */}
        {currentItem.type === 'quiz' && (
          <View>
            {/* Context card */}
            {currentItem.context && (
              <View
                style={[
                  styles.contextCard,
                  {
                    backgroundColor: colors.blueDim,
                    borderColor: colors.blue,
                  },
                ]}
              >
                <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
                  <InlineIcon name="bookOpen" size={13} color={colors.blue} />
                  <Text style={[styles.contextLabel, { color: colors.blue }]}>Context</Text>
                </View>
                <Text style={[styles.contextText, { color: colors.text2 }]}>
                  {currentItem.context}
                </Text>
              </View>
            )}

            {/* Question */}
            <View
              style={[
                styles.questionCard,
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                },
              ]}
            >
              <Text style={[styles.questionText, { color: colors.text }]}>
                {currentItem.question}
              </Text>
            </View>

            {/* Options */}
            {currentItem.options?.map((option: QuizOption) => {
              const isSelected = selectedAnswer === option.id;
              const showResult = isAnswered;
              let optionBg = colors.surface;
              let optionBorder = colors.border;
              let optionTextColor = colors.text;

              if (showResult) {
                if (option.isCorrect) {
                  optionBg = '#34D399' + '15';
                  optionBorder = '#34D399';
                  optionTextColor = '#34D399';
                } else if (isSelected && !option.isCorrect) {
                  optionBg = '#EF4444' + '15';
                  optionBorder = '#EF4444';
                  optionTextColor = '#EF4444';
                }
              } else if (isSelected) {
                optionBorder = skillColor;
              }

              return (
                <Pressable
                  key={option.id}
                  onPress={() => handleSelectOption(option.id)}
                  disabled={isAnswered}
                  style={[
                    styles.optionButton,
                    {
                      backgroundColor: optionBg,
                      borderColor: optionBorder,
                    },
                  ]}
                >
                  {/* Option letter */}
                  <View
                    style={[
                      styles.optionLetter,
                      {
                        backgroundColor: showResult
                          ? option.isCorrect
                            ? '#34D399' + '30'
                            : isSelected
                              ? '#EF4444' + '30'
                              : colors.surface2
                          : isSelected
                            ? skillColor + '30'
                            : colors.surface2,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.optionLetterText,
                        {
                          color: showResult
                            ? option.isCorrect
                              ? '#34D399'
                              : isSelected
                                ? '#EF4444'
                                : colors.text3
                            : isSelected
                              ? skillColor
                              : colors.text3,
                        },
                      ]}
                    >
                      {option.id.toUpperCase()}
                    </Text>
                  </View>

                  {/* Option text */}
                  <View style={styles.optionContent}>
                    <Text
                      style={[styles.optionText, { color: optionTextColor }]}
                    >
                      {option.text}
                    </Text>

                    {/* Feedback (shown after answer) */}
                    {showResult && isSelected && (
                      <Text
                        style={[
                          styles.feedbackText,
                          {
                            color: option.isCorrect
                              ? '#34D399'
                              : '#EF4444',
                          },
                        ]}
                      >
                        {option.feedback}
                      </Text>
                    )}

                    {/* Show correct option's feedback if user chose wrong */}
                    {showResult && option.isCorrect && !isSelected && (
                      <Text style={[styles.feedbackText, { color: '#34D399' }]}>
                        {option.feedback}
                      </Text>
                    )}
                  </View>

                  {/* Result icon */}
                  {showResult && (option.isCorrect || isSelected) && (
                    <View style={styles.resultIcon}>
                      <InlineIcon name={option.isCorrect ? 'check' : 'x'} size={18} color={option.isCorrect ? '#34D399' : '#EF4444'} />
                    </View>
                  )}
                </Pressable>
              );
            })}

            {/* Explanation card (shown after answer) */}
            {isAnswered && currentItem.explanation && (
              <View
                style={[
                  styles.explanationCard,
                  {
                    backgroundColor: colors.amberDim,
                    borderColor: colors.amber,
                  },
                ]}
              >
                <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
                  <InlineIcon name="lightbulb" size={13} color={colors.amber} />
                  <Text style={[styles.explanationLabel, { color: colors.amber }]}>Uitleg</Text>
                </View>
                <Text style={[styles.explanationText, { color: colors.text2 }]}>
                  {currentItem.explanation}
                </Text>
              </View>
            )}

            {/* Research source (shown after answer) */}
            {isAnswered && currentItem.research && (
              <View
                style={[
                  styles.researchCard,
                  { backgroundColor: colors.surface2 },
                ]}
              >
                <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
                  <InlineIcon name="bookMarked" size={12} color={colors.text3} />
                  <Text style={[styles.researchLabel, { color: colors.text3 }]}>Bron</Text>
                </View>
                <Text style={[styles.researchText, { color: colors.text3 }]}>
                  {currentItem.research}
                </Text>
              </View>
            )}

            {/* Next button (shown after answer) */}
            {isAnswered && (
              <Pressable
                onPress={advanceToNext}
                style={[
                  styles.nextButton,
                  { backgroundColor: skillColor },
                ]}
              >
                <Text style={styles.nextButtonText}>
                  {currentIndex + 1 >= totalItems
                    ? 'Bekijk resultaten'
                    : 'Volgende'}
                </Text>
              </Pressable>
            )}
          </View>
        )}

        {/* ── OEFENING TYPE ── */}
        {currentItem.type === 'oefening' && (
          <View>
            {/* Exercise card */}
            <View
              style={[
                styles.exerciseCard,
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                },
              ]}
            >
              {currentItem.exercise && (
                <Text style={[styles.exerciseTitle, { color: colors.text }]}>
                  {currentItem.exercise}
                </Text>
              )}

              {currentItem.instructions && (
                <Text
                  style={[
                    styles.exerciseInstructions,
                    { color: colors.text2 },
                  ]}
                >
                  {currentItem.instructions}
                </Text>
              )}

              {/* Duration badge */}
              {currentItem.duration != null && currentItem.duration > 0 && (
                <View style={styles.durationRow}>
                  <View
                    style={[
                      styles.durationBadge,
                      { backgroundColor: skillColor + '20' },
                    ]}
                  >
                    <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
                      <InlineIcon name="clock" size={13} color={skillColor} />
                      <Text style={[styles.durationText, { color: skillColor }]}>
                        {currentItem.duration} minuten
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>

            {/* Research source */}
            {currentItem.research && (
              <View
                style={[
                  styles.researchCard,
                  { backgroundColor: colors.surface2 },
                ]}
              >
                <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
                  <InlineIcon name="bookMarked" size={12} color={colors.text3} />
                  <Text style={[styles.researchLabel, { color: colors.text3 }]}>Bron</Text>
                </View>
                <Text style={[styles.researchText, { color: colors.text3 }]}>
                  {currentItem.research}
                </Text>
              </View>
            )}

            {/* Done button / confirmation */}
            {!oefeningDone ? (
              <Pressable
                onPress={handleOefeningDone}
                style={[
                  styles.oefeningButton,
                  { backgroundColor: skillColor },
                ]}
              >
                <Text style={styles.oefeningButtonText}>
                  Oefening gedaan
                </Text>
              </Pressable>
            ) : (
              <View
                style={[
                  styles.oefeningConfirmation,
                  { backgroundColor: '#34D399' + '15', borderColor: '#34D399' },
                ]}
              >
                <View style={{flexDirection:'row',alignItems:'center',gap:6}}>
                  <InlineIcon name="check" size={16} color="#34D399" />
                  <Text style={[styles.oefeningConfirmText, { color: '#34D399' }]}>
                    Goed gedaan! Je gaat automatisch door...
                  </Text>
                </View>
              </View>
            )}
          </View>
        )}

        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* XP Popup */}
      {xpPopup && (
        <View style={styles.xpPopupContainer} pointerEvents="none">
          <Text style={[styles.xpPopupText, { color: skillColor }]}>+{xpPopup.xp} XP</Text>
        </View>
      )}

      <GamificationPopup event={gamificationEvent} onDismiss={() => setGamificationEvent(null)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  backButton: {
    marginBottom: 16,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  backText: {
    fontSize: 16,
    fontWeight: '600',
  },

  // -- Top progress --
  topProgressContainer: {
    marginBottom: 20,
  },
  topProgressLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  topProgressLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  topProgressCount: {
    fontSize: 14,
    fontWeight: '700',
  },

  // -- Badges --
  itemBadgeRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  itemBadge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
  },
  itemBadgeText: {
    fontSize: 13,
    fontWeight: '600',
  },

  // -- Quiz: Context --
  contextCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
  },
  contextLabel: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
  },
  contextText: {
    fontSize: 14,
    lineHeight: 20,
  },

  // -- Quiz: Question --
  questionCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },

  // -- Quiz: Options --
  optionButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    marginBottom: 12,
  },
  optionLetter: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    flexShrink: 0,
  },
  optionLetterText: {
    fontSize: 14,
    fontWeight: '800',
  },
  optionContent: {
    flex: 1,
  },
  optionText: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
  },
  feedbackText: {
    fontSize: 13,
    lineHeight: 19,
    marginTop: 8,
    fontStyle: 'italic',
  },
  resultIcon: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 8,
    marginTop: 4,
  },

  // -- Quiz: Explanation --
  explanationCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    marginTop: 4,
    marginBottom: 12,
  },
  explanationLabel: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
  },
  explanationText: {
    fontSize: 14,
    lineHeight: 20,
  },

  // -- Research --
  researchCard: {
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
  },
  researchLabel: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  researchText: {
    fontSize: 13,
    lineHeight: 18,
    fontStyle: 'italic',
  },

  // -- Next button --
  nextButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  // -- Oefening --
  exerciseCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    lineHeight: 26,
  },
  exerciseInstructions: {
    fontSize: 15,
    lineHeight: 22,
  },
  durationRow: {
    marginTop: 16,
  },
  durationBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  durationText: {
    fontSize: 13,
    fontWeight: '600',
  },
  oefeningButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 14,
    alignItems: 'center',
  },
  oefeningButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  oefeningConfirmation: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 20,
    alignItems: 'center',
  },
  oefeningConfirmText: {
    fontSize: 16,
    fontWeight: '600',
  },

  // -- Completion screen --
  completionContainer: {
    alignItems: 'center',
    paddingTop: 24,
  },
  completionEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  completionTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  completionSubtitle: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 32,
  },
  statsCard: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    padding: 24,
    marginBottom: 24,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  statsBarContainer: {
    marginBottom: 20,
  },
  statsBar: {
    flexDirection: 'row',
    height: 12,
    borderRadius: 6,
    overflow: 'hidden',
  },
  statsBarSegment: {
    height: '100%',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginBottom: 6,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 13,
    fontWeight: '500',
  },
  percentageText: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  completionButton: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  completionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  // -- Empty state --
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingHorizontal: 32,
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  // XP earned card (completion)
  xpEarnedCard: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center' as const,
    marginBottom: 24,
  },
  xpEarnedValue: { fontSize: 28, fontWeight: '900' as const, color: '#F59E0B' },
  xpEarnedLabel: { fontSize: 14, fontWeight: '600' as const, marginTop: 2 },

  // XP popup (floating)
  xpPopupContainer: {
    position: 'absolute' as const,
    top: 80,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  xpPopupText: { fontSize: 16, fontWeight: '800' as const },

  bottomSpacer: {
    height: 20,
  },
});
