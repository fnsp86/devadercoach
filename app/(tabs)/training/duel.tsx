import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { useAuth } from '@/lib/auth';
import { generateDuelQuestions, DUEL_QUESTION_COUNT, DUEL_XP } from '@/lib/duel-arena';
import { submitDuelScore, getDuelHistory, getOrCreateConversation, sendMessage } from '@/lib/supabase';
import { SKILL_COLORS } from '@/lib/colors';
import { InlineIcon, getSkillIcon, AppIcon } from '@/lib/icons';
import { checkAndUnlockBadges } from '@/lib/badge-checker';
import GamificationPopup from '@/components/GamificationPopup';
import type { TrainingItem, QuizOption, Skill } from '@/lib/types';

const DIFFICULTY_CONFIG: Record<string, { color: string; label: string }> = {
  basis: { color: '#34D399', label: 'Basis' },
  gevorderd: { color: '#FBBF24', label: 'Gevorderd' },
  expert: { color: '#A78BFA', label: 'Expert' },
};

export default function DuelScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const store = useStore();
  const { user } = useAuth();
  const params = useLocalSearchParams<{
    duelId: string;
    skill: string;
    seed: string;
    opponentName: string;
  }>();

  const { duelId, skill, seed, opponentName } = params;
  const skillColor = SKILL_COLORS[skill ?? ''] || colors.amber;

  // Generate questions deterministically from the seed
  const questions = React.useMemo<TrainingItem[]>(() => {
    if (!skill || !seed) return [];
    return generateDuelQuestions(skill as Skill, seed);
  }, [skill, seed]);

  // Quiz state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState<{ correct: boolean; timeMs: number }[]>([]);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [showCompletion, setShowCompletion] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [gamificationEvent, setGamificationEvent] = useState<any>(null);

  const currentItem = questions[currentIndex];
  const diffConfig = currentItem
    ? DIFFICULTY_CONFIG[currentItem.difficulty] || DIFFICULTY_CONFIG.basis
    : DIFFICULTY_CONFIG.basis;

  // Reset start time when moving to next question
  useEffect(() => {
    if (!showCompletion && currentIndex < questions.length) {
      setQuestionStartTime(Date.now());
    }
  }, [currentIndex, showCompletion]);

  // ── Answer handling ──

  function handleSelectOption(optionId: string) {
    if (isAnswered || !currentItem) return;
    setSelectedAnswer(optionId);
    setIsAnswered(true);

    const elapsed = Date.now() - questionStartTime;
    const selected = currentItem.options?.find((o) => o.id === optionId);
    const isCorrect = selected?.isCorrect ?? false;

    if (isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }

    setResults((prev) => [...prev, { correct: isCorrect, timeMs: elapsed }]);
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
    setSubmitting(true);

    const correctCount = results.filter((r) => r.correct).length;
    const totalTimeMs = results.reduce((sum, r) => sum + r.timeMs, 0);

    // Award XP per correct answer
    const xpEarned = correctCount * DUEL_XP.perCorrect;
    if (xpEarned > 0 && skill) {
      store.awardBonusXP(xpEarned, skill as Skill);
    }

    // Submit score to backend
    let updatedDuel: any = null;
    if (user?.id && duelId) {
      try {
        updatedDuel = await submitDuelScore(duelId, user.id, correctCount, totalTimeMs);
      } catch (e) {
        console.warn('[duel] Failed to submit score:', e);
      }
    }

    // Badge checking
    if (user?.id) {
      try {
        const history = await getDuelHistory(user.id, 100);
        const completedDuels = history.filter((d) => d.status === 'completed');
        const wonDuels = completedDuels.filter((d) => {
          const myScore = d.challenger_id === user.id ? d.challenger_score : d.opponent_score;
          const theirScore = d.challenger_id === user.id ? d.opponent_score : d.challenger_score;
          return (myScore ?? 0) > (theirScore ?? 0);
        });

        const newBadges = checkAndUnlockBadges(store, {
          source: 'skill_duel',
          skill: skill as Skill,
          duelScore: correctCount,
          totalDuelsPlayed: history.filter((d) => d.status !== 'declined').length,
          totalDuelsWon: wonDuels.length,
        });
        if (newBadges.length > 0) {
          setGamificationEvent({ type: 'badge', badge: newBadges[0] });
        }
      } catch { /* badge check is optional */ }
    }

    // Auto DM result when duel is completed (both played)
    if (updatedDuel?.status === 'completed' && user?.id) {
      try {
        const otherId = updatedDuel.challenger_id === user.id
          ? updatedDuel.opponent_id
          : updatedDuel.challenger_id;
        const myScore = updatedDuel.challenger_id === user.id
          ? updatedDuel.challenger_score
          : updatedDuel.opponent_score;
        const theirScore = updatedDuel.challenger_id === user.id
          ? updatedDuel.opponent_score
          : updatedDuel.challenger_score;
        const result = myScore > theirScore ? 'gewonnen' : myScore < theirScore ? 'verloren' : 'gelijkgespeeld';
        const conv = await getOrCreateConversation(user.id, otherId);
        await sendMessage({
          conversation_id: conv.id,
          sender_id: user.id,
          content: `⚔️ Duel resultaat (${skill}): ${myScore}/${DUEL_QUESTION_COUNT} - ${theirScore}/${DUEL_QUESTION_COUNT}. Ik heb ${result}!`,
        });
      } catch { /* DM is optional */ }
    }

    setSubmitting(false);
  }

  // ── Computed values ──

  const correctCount = results.filter((r) => r.correct).length;
  const totalTimeMs = results.reduce((sum, r) => sum + r.timeMs, 0);
  const xpEarned = correctCount * DUEL_XP.perCorrect;

  // ── Completion screen ──

  if (showCompletion) {
    const totalTimeSec = Math.round(totalTimeMs / 1000);
    const minutes = Math.floor(totalTimeSec / 60);
    const seconds = totalTimeSec % 60;
    const timeDisplay = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

    return (
      <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
        <ScrollView contentContainerStyle={s.completionContainer}>
          <AppIcon
            name="trophy"
            size="lg"
            variant="featured"
            color={skillColor}
            bgColor={skillColor + '18'}
          />

          <Text style={[s.completionTitle, { color: colors.text }]}>
            Duel Voltooid!
          </Text>

          <Text style={[s.opponentLabel, { color: colors.text3 }]}>
            Tegen {opponentName || 'tegenstander'}
          </Text>

          {/* Score bar */}
          <View style={[s.statsCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
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
                <Text style={[s.statNumber, { color: '#EF4444' }]}>
                  {DUEL_QUESTION_COUNT - correctCount}
                </Text>
                <Text style={[s.statLabel, { color: colors.text2 }]}>Fout</Text>
              </View>
              <View style={s.statItem}>
                <InlineIcon name="clock" size={14} color={colors.text3} />
                <Text style={[s.statNumber, { color: colors.text }]}>{timeDisplay}</Text>
                <Text style={[s.statLabel, { color: colors.text2 }]}>Totaal</Text>
              </View>
            </View>
          </View>

          {/* XP card */}
          <View style={[s.xpCard, { backgroundColor: skillColor + '18', borderColor: skillColor + '40' }]}>
            <Text style={[s.xpValue, { color: skillColor }]}>+{xpEarned} XP</Text>
            <Text style={[s.xpLabel, { color: colors.text2 }]}>verdiend</Text>
          </View>

          {/* Waiting for opponent */}
          {submitting ? (
            <View style={[s.waitingCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <ActivityIndicator size="small" color={skillColor} />
              <Text style={[s.waitingText, { color: colors.text2 }]}>
                Score wordt verzonden...
              </Text>
            </View>
          ) : (
            <View style={[s.waitingCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <InlineIcon name="clock" size={18} color={colors.text3} />
              <Text style={[s.waitingText, { color: colors.text2 }]}>
                Wachten op {opponentName || 'tegenstander'}...
              </Text>
            </View>
          )}

          {/* Back button */}
          <View style={s.completionButtons}>
            <Pressable
              onPress={() => router.back()}
              style={[s.backBtn, { borderColor: colors.border }]}
            >
              <Text style={[s.backBtnText, { color: colors.text2 }]}>
                Terug naar overzicht
              </Text>
            </Pressable>
          </View>
        </ScrollView>
        {gamificationEvent && (
          <GamificationPopup event={gamificationEvent} onDismiss={() => setGamificationEvent(null)} />
        )}
      </SafeAreaView>
    );
  }

  // ── Empty / loading state ──

  if (!currentItem) {
    return (
      <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
        <View style={s.emptyContainer}>
          <Text style={[s.emptyText, { color: colors.text2 }]}>Geen vragen beschikbaar</Text>
          <Pressable
            onPress={() => router.back()}
            style={[s.backBtn, { borderColor: colors.border, marginTop: 20 }]}
          >
            <Text style={[s.backBtnText, { color: colors.text2 }]}>Terug</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  // ── Quiz screen ──

  // Find selected option for feedback display
  const selectedOption = isAnswered
    ? currentItem.options?.find((o) => o.id === selectedAnswer)
    : null;
  const correctOption = isAnswered
    ? currentItem.options?.find((o) => o.isCorrect)
    : null;

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={[s.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.back()} style={s.headerBtn}>
          <InlineIcon name="x" size={22} color={colors.text} />
        </Pressable>
        <View style={s.headerCenter}>
          <View style={s.headerTitleRow}>
            <InlineIcon name="swords" size={16} color={skillColor} />
            <Text style={[s.headerTitle, { color: colors.text }]}>
              Duel: {skill}
            </Text>
          </View>
          <Text style={[s.headerSub, { color: colors.text3 }]}>
            vs {opponentName || 'tegenstander'}
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
              backgroundColor: skillColor,
              width: `${((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100}%`,
            },
          ]}
        />
      </View>

      <ScrollView style={s.scrollContent} contentContainerStyle={s.scrollInner}>
        {/* Question number indicator */}
        <View style={s.questionIndicator}>
          <Text style={[s.questionNumber, { color: skillColor }]}>
            Vraag {currentIndex + 1}/{DUEL_QUESTION_COUNT}
          </Text>
        </View>

        {/* Question meta */}
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
              optionBorder = skillColor;
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

        {/* Feedback / explanation after answering */}
        {isAnswered && (
          <View style={s.feedbackSection}>
            {/* Show per-option feedback */}
            {selectedOption && !selectedOption.isCorrect && selectedOption.feedback && (
              <View style={[s.feedbackCard, { backgroundColor: '#EF444410', borderColor: '#EF444430' }]}>
                <InlineIcon name="x" size={16} color="#EF4444" />
                <Text style={[s.feedbackText, { color: colors.text }]}>
                  {selectedOption.feedback}
                </Text>
              </View>
            )}
            {correctOption && correctOption.feedback && (
              <View style={[s.feedbackCard, { backgroundColor: '#34D39910', borderColor: '#34D39930' }]}>
                <InlineIcon name="check" size={16} color="#34D399" />
                <Text style={[s.feedbackText, { color: colors.text }]}>
                  {correctOption.feedback}
                </Text>
              </View>
            )}

            {/* Explanation */}
            {currentItem.explanation && (
              <View style={[s.explanationCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                <InlineIcon name="lightbulb" size={16} color={skillColor} />
                <Text style={[s.explanationText, { color: colors.text2 }]}>
                  {currentItem.explanation}
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Next button */}
        {isAnswered && (
          <View style={s.nextSection}>
            <Pressable
              onPress={handleNext}
              style={[s.nextBtn, { backgroundColor: skillColor }]}
            >
              <Text style={s.nextBtnText}>
                {currentIndex + 1 >= questions.length ? 'Bekijk resultaat' : 'Volgende'}
              </Text>
              <InlineIcon name="arrowRight" size={18} color="#000" />
            </Pressable>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1 },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  headerBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  headerTitle: { fontSize: 17, fontWeight: '700' },
  headerSub: { fontSize: 13, fontWeight: '600', marginTop: 2 },

  // Progress
  progressTrack: { height: 3 },
  progressFill: { height: 3, borderRadius: 2 },

  // Scroll
  scrollContent: { flex: 1 },
  scrollInner: { paddingBottom: 32 },

  // Question indicator
  questionIndicator: { alignItems: 'center', paddingTop: 16, paddingBottom: 4 },
  questionNumber: { fontSize: 14, fontWeight: '700' },

  // Question
  questionSection: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 16 },
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

  // Feedback
  feedbackSection: { paddingHorizontal: 20, paddingTop: 14, gap: 10 },
  feedbackCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    padding: 14,
    borderWidth: 1,
    borderRadius: 12,
  },
  feedbackText: { flex: 1, fontSize: 13, lineHeight: 19, fontWeight: '500' },
  explanationCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    padding: 14,
    borderWidth: 1,
    borderRadius: 12,
  },
  explanationText: { flex: 1, fontSize: 13, lineHeight: 19, fontWeight: '500' },

  // Next
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

  // Completion screen
  completionContainer: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
    gap: 16,
  },
  completionTitle: { fontSize: 24, fontWeight: '800', textAlign: 'center' },
  opponentLabel: { fontSize: 15, fontWeight: '600', marginTop: -8 },
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
  xpValue: { fontSize: 28, fontWeight: '800' },
  xpLabel: { fontSize: 13, fontWeight: '600' },
  waitingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    justifyContent: 'center',
  },
  waitingText: { fontSize: 14, fontWeight: '600' },
  completionButtons: { width: '100%', gap: 10, marginTop: 8 },
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
