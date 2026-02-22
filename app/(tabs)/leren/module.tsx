import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Animated,
  TextInput,
  Dimensions,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { getLearningModulesForSkill } from '@/lib/learning-modules';
import { transformModuleToStages } from '@/lib/module-stages';
import type { Skill, Stage, ModuleStages, InsightCard, ScenarioChoice, QuizQuestion } from '@/lib/types';
import SkillCompletionPopup from '@/components/SkillCompletionPopup';
import { SKILLS } from '@/lib/skills';
import { SKILL_MASTERY_BONUS_XP, checkModuleMilestone } from '@/lib/gamification-types';
import { checkAndUnlockBadges } from '@/lib/badge-checker';
import type { GamificationEvent } from '@/components/GamificationPopup';
import GamificationPopup from '@/components/GamificationPopup';
import { SKILL_COLORS } from '@/lib/colors';
import { AppIcon, InlineIcon, getSkillIcon } from '@/lib/icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// ─────────────────────────────────────────────────────────────────────────────
// StageProgressBar — dots bovenaan
// ─────────────────────────────────────────────────────────────────────────────

function StageProgressBar({
  stages,
  currentIndex,
  completedIds,
  skillColor,
}: {
  stages: Stage[];
  currentIndex: number;
  completedIds: string[];
  skillColor: string;
}) {
  const { colors } = useTheme();
  return (
    <View style={progStyles.container}>
      {stages.map((stage, i) => {
        const done = completedIds.includes(stage.id);
        const active = i === currentIndex;
        return (
          <View
            key={stage.id}
            style={[
              progStyles.dot,
              {
                backgroundColor: done
                  ? '#22C55E'
                  : active
                  ? skillColor
                  : colors.surface2,
                width: active ? 24 : 10,
              },
            ]}
          />
        );
      })}
    </View>
  );
}

const progStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    flex: 1,
    paddingRight: 40,
  },
  dot: {
    height: 10,
    borderRadius: 5,
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// XPPopup — zwevende "+15 XP" animatie
// ─────────────────────────────────────────────────────────────────────────────

function XPPopup({ xp, visible }: { xp: number; visible: boolean }) {
  const { colors } = useTheme();
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!visible) return;
    anim.setValue(0);
    Animated.sequence([
      Animated.spring(anim, { toValue: 1, friction: 5, tension: 120, useNativeDriver: true }),
      Animated.delay(1200),
      Animated.timing(anim, { toValue: 2, duration: 400, useNativeDriver: true }),
    ]).start();
  }, [visible, anim]);

  if (!visible) return null;

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        xpStyles.popup,
        {
          backgroundColor: colors.surface,
          borderColor: colors.amber,
          shadowColor: colors.amber,
          opacity: anim.interpolate({ inputRange: [0, 0.3, 1, 1.7, 2], outputRange: [0, 1, 1, 1, 0] }),
          transform: [
            { translateY: anim.interpolate({ inputRange: [0, 1, 2], outputRange: [30, 0, -40] }) },
            { scale: anim.interpolate({ inputRange: [0, 0.4, 0.7, 1], outputRange: [0.3, 1.15, 0.95, 1], extrapolate: 'clamp' }) },
          ],
        },
      ]}
    >
      <View style={xpStyles.inner}>
        <InlineIcon name="star" size={20} color={colors.amber} />
        <View>
          <Text style={xpStyles.value}>+{xp}</Text>
          <Text style={xpStyles.label}>XP</Text>
        </View>
      </View>
    </Animated.View>
  );
}

const xpStyles = StyleSheet.create({
  popup: {
    position: 'absolute',
    top: 75,
    alignSelf: 'center',
    borderRadius: 24,
    borderWidth: 2,
    zIndex: 100,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 12,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  starIcon: { marginRight: 2 },
  value: {
    color: '#F59E0B',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  label: {
    color: 'rgba(251,191,36,0.7)',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    textAlign: 'center',
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// InsightCardsStage — verticale kaartlijst met volledige teksten
// ─────────────────────────────────────────────────────────────────────────────

/** Render body text met paragraaf-structuur */
function ParagraphText({ text, color }: { text: string; color: string }) {
  const paragraphs = text.split(/\n\n+/).filter((p) => p.trim().length > 0);
  return (
    <View style={insightStyles.paragraphs}>
      {paragraphs.map((p, i) => (
        <Text key={i} style={[insightStyles.paragraph, { color }]}>
          {p.trim()}
        </Text>
      ))}
    </View>
  );
}

/** Render mission instructies met nette bullets en paragrafen */
function MissionText({ text, color, bulletColor }: { text: string; color: string; bulletColor: string }) {
  const lines = text.split(/\n/).filter((l) => l.trim().length > 0);
  return (
    <View style={insightStyles.paragraphs}>
      {lines.map((line, i) => {
        const trimmed = line.trim();
        // Herken bullet-regels (begint met -, •, *, of nummer.)
        const bulletMatch = trimmed.match(/^[-•*]\s+(.+)$/);
        const numMatch = trimmed.match(/^(\d+)[.)]\s+(.+)$/);
        if (bulletMatch) {
          return (
            <View key={i} style={missionStyles.bulletRow}>
              <Text style={[missionStyles.bulletDot, { color: bulletColor }]}>{'\u2022'}</Text>
              <Text style={[missionStyles.bulletText, { color }]}>{bulletMatch[1]}</Text>
            </View>
          );
        }
        if (numMatch) {
          return (
            <View key={i} style={missionStyles.bulletRow}>
              <Text style={[missionStyles.bulletNum, { color: bulletColor }]}>{numMatch[1]}.</Text>
              <Text style={[missionStyles.bulletText, { color }]}>{numMatch[2]}</Text>
            </View>
          );
        }
        return (
          <Text key={i} style={[insightStyles.paragraph, { color }]}>
            {trimmed}
          </Text>
        );
      })}
    </View>
  );
}

function InsightCardsStage({
  cards,
  skillColor,
  onComplete,
  stageLabel,
}: {
  cards: InsightCard[];
  skillColor: string;
  onComplete: () => void;
  stageLabel?: string;
}) {
  const { colors } = useTheme();
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set([0]));

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <View style={stageShared.container}>
      {/* Verticale kaartlijst */}
      {cards.map((card, i) => {
        const isAlwaysOpen = !!card.isSamenvatting;
        const isExpanded = isAlwaysOpen || expandedCards.has(i);
        const isCollapsible = !isAlwaysOpen;

        return (
          <Pressable
            key={i}
            onPress={isCollapsible ? () => toggleCard(i) : undefined}
            style={[
              insightStyles.card,
              {
                backgroundColor: card.isSamenvatting ? skillColor + '08' : colors.surface,
                borderColor: card.isSamenvatting ? skillColor + '30' : colors.border,
              },
            ]}
          >
            {card.emoji && (
              <View style={insightStyles.emojiIcon}>
                <AppIcon name="lightbulb" size="lg" variant="featured" color={skillColor} bgColor={skillColor + '12'} />
              </View>
            )}

            {/* Samenvatting badge */}
            {card.isSamenvatting && (
              <View style={[insightStyles.samenvattingBadge, { backgroundColor: skillColor + '20' }]}>
                <Text style={[insightStyles.samenvattingText, { color: skillColor }]}>IN HET KORT</Text>
              </View>
            )}

            {!card.isSamenvatting && (
              <View style={insightStyles.titleRow}>
                <Text style={[insightStyles.title, { color: colors.text, flex: 1 }]}>{card.title}</Text>
                {isCollapsible && (
                  <InlineIcon name={isExpanded ? 'chevronUp' : 'chevronDown'} size={14} color={colors.text3} />
                )}
              </View>
            )}

            {isExpanded && (
              <>
                {/* Highlight callout */}
                {card.highlight && (
                  <View style={[insightStyles.highlightBlock, { borderLeftColor: skillColor }]}>
                    <Text style={[insightStyles.highlightText, { color: skillColor }]}>{card.highlight}</Text>
                  </View>
                )}

                {/* Volledige body tekst met paragrafen */}
                <ParagraphText text={card.body} color={colors.text2} />
              </>
            )}
          </Pressable>
        );
      })}

      <Pressable
        onPress={onComplete}
        style={[stageShared.ctaButton, { backgroundColor: skillColor }]}
      >
        <Text style={stageShared.ctaText}>Volgende etappe</Text>
      </Pressable>
    </View>
  );
}

const insightStyles = StyleSheet.create({
  card: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 24,
    marginBottom: 16,
    position: 'relative',
  },
  samenvattingBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 8,
  },
  samenvattingText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  emojiIcon: { marginBottom: 10 },
  titleRow: { flexDirection: 'row' as const, alignItems: 'flex-start' as const, gap: 8, marginBottom: 12 },
  title: { fontSize: 19, fontWeight: '800', lineHeight: 25 },
  highlightBlock: {
    borderLeftWidth: 3,
    paddingLeft: 12,
    marginBottom: 14,
  },
  highlightText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    fontStyle: 'italic',
  },
  paragraphs: { gap: 10 },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '500',
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// ScenarioStage
// ─────────────────────────────────────────────────────────────────────────────

function ScenarioStage({
  situation,
  choices,
  explanation,
  skillColor,
  onComplete,
}: {
  situation: string;
  choices: ScenarioChoice[];
  explanation?: string;
  skillColor: string;
  onComplete: (correct: boolean) => void;
}) {
  const { colors } = useTheme();
  const [chosen, setChosen] = useState<string | null>(null);
  const [showAlternative, setShowAlternative] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const revealAnim = useRef(new Animated.Value(0)).current;

  function handleChoose(choice: ScenarioChoice) {
    if (chosen) return;
    setChosen(choice.id);
    Haptics.impactAsync(
      choice.isCorrect ? Haptics.ImpactFeedbackStyle.Medium : Haptics.ImpactFeedbackStyle.Heavy,
    );
    Animated.spring(revealAnim, { toValue: 1, friction: 7, useNativeDriver: true }).start();
  }

  const chosenChoice = chosen ? choices.find((c) => c.id === chosen) : null;
  const correctChoice = choices.find((c) => c.isCorrect);
  const wrongChoice = choices.find((c) => !c.isCorrect);
  const isCorrect = chosenChoice?.isCorrect ?? null;

  return (
    <View style={stageShared.container}>
      {/* Situation */}
      <View style={[scenarioStyles.situationCard, { backgroundColor: colors.surface2 }]}>
        <Text style={[scenarioStyles.situationText, { color: colors.text }]}>{situation}</Text>
      </View>

      {/* Wat zou jij doen? */}
      {!chosen && (
        <Text style={[scenarioStyles.prompt, { color: colors.text }]}>Wat zou jij doen?</Text>
      )}

      {/* Choices */}
      <View style={scenarioStyles.choicesContainer}>
        {choices.map((choice) => {
          const isThis = chosen === choice.id;
          let borderColor = colors.border;
          let bg = colors.surface;
          if (chosen) {
            if (choice.isCorrect) {
              borderColor = '#22C55E';
              bg = 'rgba(34,197,94,0.08)';
            } else if (isThis && !choice.isCorrect) {
              borderColor = '#EF4444';
              bg = 'rgba(239,68,68,0.08)';
            } else {
              bg = colors.surface2;
            }
          }
          return (
            <Pressable
              key={choice.id}
              onPress={() => handleChoose(choice)}
              disabled={!!chosen}
              style={[scenarioStyles.choiceBtn, { backgroundColor: bg, borderColor, opacity: chosen && !isThis && !choice.isCorrect ? 0.5 : 1 }]}
            >
              {chosen && choice.isCorrect && (
                <InlineIcon name="checkCircle" size={18} color="#22C55E" />
              )}
              {chosen && isThis && !choice.isCorrect && (
                <InlineIcon name="xCircle" size={18} color="#EF4444" />
              )}
              <Text style={[scenarioStyles.choiceText, { color: colors.text }]}>{choice.text}</Text>
            </Pressable>
          );
        })}
      </View>

      {/* Reveal — volledige teksten na keuze */}
      {chosen && chosenChoice && (
        <Animated.View
          style={{
            opacity: revealAnim,
            transform: [{ translateY: revealAnim.interpolate({ inputRange: [0, 1], outputRange: [30, 0] }) }],
          }}
        >
          {/* Resultaat banner */}
          <View style={[scenarioStyles.resultBanner, {
            backgroundColor: isCorrect ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.08)',
          }]}>
            <InlineIcon name={isCorrect ? 'checkCircle' : 'xCircle'} size={24} color={isCorrect ? '#22C55E' : '#EF4444'} />
            <Text style={[scenarioStyles.resultTitle, { color: isCorrect ? '#22C55E' : '#EF4444' }]}>
              {isCorrect ? 'Goed gekozen!' : 'Niet helemaal...'}
            </Text>
          </View>

          {/* Jouw keuze — volledige aanpak-tekst */}
          <View style={[scenarioStyles.approachCard, {
            backgroundColor: colors.surface,
            borderColor: isCorrect ? '#22C55E40' : '#EF444440',
          }]}>
            <View style={[scenarioStyles.approachBadge, {
              backgroundColor: isCorrect ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.1)',
            }]}>
              <Text style={[scenarioStyles.approachBadgeText, {
                color: isCorrect ? '#22C55E' : '#EF4444',
              }]}>JOUW KEUZE</Text>
            </View>
            <ParagraphText text={chosenChoice.fullText} color={colors.text2} />
          </View>

          {/* Uitleg — inklapbaar */}
          {explanation && (
            <View>
              <Pressable
                onPress={() => setShowExplanation(!showExplanation)}
                style={scenarioStyles.alternativeToggle}
              >
                <Text style={[scenarioStyles.alternativeToggleText, { color: skillColor }]}>
                  {showExplanation ? 'Verberg uitleg' : 'Bekijk uitleg'}
                </Text>
              </Pressable>
              {showExplanation && (
                <View style={[scenarioStyles.explanationCard, {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                }]}>
                  <Text style={[scenarioStyles.explanationLabel, { color: skillColor }]}>Uitleg</Text>
                  <ParagraphText text={explanation} color={colors.text2} />
                </View>
              )}
            </View>
          )}

          {/* Alternatief */}
          {isCorrect && wrongChoice ? (
            /* Bij juiste keuze: inklapbaar alternatief */
            <View>
              <Pressable
                onPress={() => setShowAlternative(!showAlternative)}
                style={scenarioStyles.alternativeToggle}
              >
                <Text style={[scenarioStyles.alternativeToggleText, { color: skillColor }]}>
                  {showAlternative ? 'Verberg de foute aanpak' : 'Bekijk de foute aanpak'}
                </Text>
              </Pressable>
              {showAlternative && (
                <View style={[scenarioStyles.approachCard, {
                  backgroundColor: colors.surface,
                  borderColor: '#EF444430',
                }]}>
                  <View style={[scenarioStyles.approachBadge, { backgroundColor: 'rgba(239,68,68,0.1)' }]}>
                    <Text style={[scenarioStyles.approachBadgeText, { color: '#EF4444' }]}>FOUTE AANPAK</Text>
                  </View>
                  <ParagraphText text={wrongChoice.fullText} color={colors.text2} />
                </View>
              )}
            </View>
          ) : !isCorrect && correctChoice ? (
            /* Bij foute keuze: betere aanpak direct zichtbaar */
            <View style={[scenarioStyles.approachCard, {
              backgroundColor: colors.surface,
              borderColor: '#22C55E40',
            }]}>
              <View style={[scenarioStyles.approachBadge, { backgroundColor: 'rgba(34,197,94,0.12)' }]}>
                <Text style={[scenarioStyles.approachBadgeText, { color: '#22C55E' }]}>BETERE AANPAK</Text>
              </View>
              <ParagraphText text={correctChoice.fullText} color={colors.text2} />
            </View>
          ) : null}

          <Pressable
            onPress={() => onComplete(isCorrect === true)}
            style={[stageShared.ctaButton, { backgroundColor: skillColor, marginTop: 20 }]}
          >
            <Text style={stageShared.ctaText}>Volgende etappe</Text>
          </Pressable>
        </Animated.View>
      )}
    </View>
  );
}

const scenarioStyles = StyleSheet.create({
  situationCard: {
    borderRadius: 18,
    padding: 24,
    marginBottom: 20,
  },
  situationText: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '500',
  },
  prompt: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  choicesContainer: { gap: 12 },
  choiceBtn: {
    borderRadius: 14,
    borderWidth: 1.5,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  choiceIconWrap: { marginTop: 1 },
  choiceText: { fontSize: 15, lineHeight: 22, fontWeight: '600', flex: 1 },
  resultBanner: {
    borderRadius: 14,
    padding: 16,
    marginTop: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
  },
  resultIcon: { marginRight: 2 },
  resultTitle: { fontSize: 20, fontWeight: '800' },
  approachCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    marginBottom: 16,
  },
  approachBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 14,
  },
  approachBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  explanationCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    marginBottom: 16,
  },
  explanationLabel: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  alternativeToggle: {
    alignSelf: 'center',
    paddingVertical: 10,
    marginBottom: 8,
  },
  alternativeToggleText: {
    fontSize: 14,
    fontWeight: '700',
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// QuizStage
// ─────────────────────────────────────────────────────────────────────────────

function QuizStage({
  questions,
  skillColor,
  onComplete,
}: {
  questions: QuizQuestion[];
  skillColor: string;
  onComplete: (correct: number, total: number) => void;
}) {
  const { colors } = useTheme();
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const q = questions[qIndex];
  const isLast = qIndex >= questions.length - 1;

  function handleSelect(optId: string) {
    if (selected) return;
    setSelected(optId);
    const correct = q.options.find((o) => o.id === optId)?.isCorrect;
    if (correct) setScore((s) => s + 1);
    Haptics.impactAsync(correct ? Haptics.ImpactFeedbackStyle.Light : Haptics.ImpactFeedbackStyle.Heavy);
  }

  function handleNext() {
    if (isLast) {
      const finalScore = score + (q.options.find((o) => o.id === selected)?.isCorrect ? 0 : 0); // score already updated
      onComplete(score, questions.length);
    } else {
      setSelected(null);
      setQIndex((i) => i + 1);
    }
  }

  return (
    <View style={stageShared.container}>
      <Text style={[stageShared.badgeLabel, { color: skillColor, textAlign: 'center', marginBottom: 16 }]}>
        Vraag {qIndex + 1} van {questions.length}
      </Text>

      <Text style={[quizStyles.question, { color: colors.text }]}>{q.question}</Text>

      <View style={quizStyles.optionsContainer}>
        {q.options.map((opt) => {
          let bg = colors.surface;
          let border = colors.border;
          if (selected) {
            if (opt.isCorrect) {
              bg = 'rgba(34,197,94,0.1)';
              border = '#22C55E';
            } else if (opt.id === selected && !opt.isCorrect) {
              bg = 'rgba(239,68,68,0.08)';
              border = '#EF4444';
            }
          }
          return (
            <Pressable
              key={opt.id}
              onPress={() => handleSelect(opt.id)}
              disabled={!!selected}
              style={[quizStyles.option, { backgroundColor: bg, borderColor: border }]}
            >
              {selected && opt.isCorrect && <InlineIcon name="checkCircle" size={16} color="#22C55E" />}
              {selected && opt.id === selected && !opt.isCorrect && <InlineIcon name="xCircle" size={16} color="#EF4444" />}
              <Text style={[quizStyles.optText, { color: colors.text }]}>{opt.text}</Text>
            </Pressable>
          );
        })}
      </View>

      {selected && (
        <View style={[quizStyles.explanationCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[quizStyles.explanation, { color: colors.text2 }]}>{q.explanation}</Text>
        </View>
      )}

      {selected && (
        <Pressable
          onPress={handleNext}
          style={[stageShared.ctaButton, { backgroundColor: skillColor }]}
        >
          <Text style={stageShared.ctaText}>
            {isLast ? `Klaar! ${score}/${questions.length} goed` : 'Volgende vraag'}
          </Text>
        </Pressable>
      )}

      {/* Score indicator */}
      <View style={quizStyles.scoreRow}>
        {questions.map((_, i) => (
          <View
            key={i}
            style={[
              quizStyles.scoreDot,
              {
                backgroundColor:
                  i < qIndex ? (i < score ? '#22C55E' : '#EF4444')
                  : i === qIndex ? skillColor + '40'
                  : colors.surface2,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const quizStyles = StyleSheet.create({
  question: { fontSize: 18, fontWeight: '700', lineHeight: 26, marginBottom: 20, textAlign: 'center' },
  optionsContainer: { gap: 10 },
  option: {
    borderRadius: 14,
    borderWidth: 1.5,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  optIconWrap: { marginRight: 2 },
  optText: { fontSize: 15, fontWeight: '600', flex: 1, lineHeight: 21 },
  explanationCard: { borderRadius: 12, borderWidth: 1, padding: 16, marginTop: 16 },
  explanation: { fontSize: 14, lineHeight: 21 },
  scoreRow: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginTop: 20 },
  scoreDot: { width: 12, height: 12, borderRadius: 6 },
});

// ─────────────────────────────────────────────────────────────────────────────
// VideoStage
// ─────────────────────────────────────────────────────────────────────────────

function VideoStage({
  youtubeId,
  videoTitle,
  videoDuration,
  videoContext,
  keyTakeaway,
  skillColor,
  onComplete,
}: {
  youtubeId: string;
  videoTitle?: string;
  videoDuration?: string;
  videoContext?: string;
  keyTakeaway?: string;
  skillColor: string;
  onComplete: () => void;
}) {
  const { colors } = useTheme();

  return (
    <View style={stageShared.container}>
      {videoContext && (
        <Text style={[videoStyles.context, { color: colors.text2 }]}>{videoContext}</Text>
      )}

      {videoTitle && (
        <Text style={[videoStyles.videoTitleAbove, { color: colors.text }]}>{videoTitle}</Text>
      )}

      {/* Embedded YouTube player */}
      <View style={videoStyles.playerContainer}>
        <YouTubeEmbed
          videoId={youtubeId}
          height={220}
          width={SCREEN_WIDTH - 40}
        />
      </View>

      <View style={videoStyles.metaRow}>
        {videoDuration && (
          <Text style={[videoStyles.durationLabel, { color: colors.text3 }]}>Duur: {videoDuration}</Text>
        )}
        <Pressable onPress={() => Linking.openURL(`https://youtube.com/watch?v=${youtubeId}`)}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Text style={[videoStyles.fallbackLink, { color: colors.text3 }]}>Bekijk op YouTube</Text>
            <InlineIcon name="arrowRight" size={13} color={colors.text3} />
          </View>
        </Pressable>
      </View>

      {/* Key takeaway */}
      {keyTakeaway && (
        <View style={[videoStyles.takeawayCard, { backgroundColor: colors.surface, borderColor: skillColor + '40' }]}>
          <Text style={[videoStyles.takeawayLabel, { color: skillColor }]}>Kernpunt</Text>
          <Text style={[videoStyles.takeawayText, { color: colors.text }]}>{keyTakeaway}</Text>
        </View>
      )}

      <Pressable
        onPress={onComplete}
        style={[stageShared.ctaButton, { backgroundColor: skillColor }]}
      >
        <Text style={stageShared.ctaText}>Volgende etappe</Text>
      </Pressable>
    </View>
  );
}

const videoStyles = StyleSheet.create({
  context: { fontSize: 15, lineHeight: 23, marginBottom: 12, textAlign: 'center' },
  videoTitleAbove: { fontSize: 17, fontWeight: '700', textAlign: 'center', marginBottom: 14 },
  playerContainer: {
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 12,
  },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, paddingHorizontal: 4 },
  durationLabel: { fontSize: 13, fontWeight: '600' },
  fallbackLink: { fontSize: 13, fontWeight: '600' },
  takeawayCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 18,
    marginBottom: 16,
  },
  takeawayLabel: { fontSize: 12, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 },
  takeawayText: { fontSize: 15, lineHeight: 23, fontWeight: '600' },
});

// ─────────────────────────────────────────────────────────────────────────────
// MissionStage
// ─────────────────────────────────────────────────────────────────────────────

function MissionStage({
  missionTitle,
  missionInstructions,
  missionDuration,
  missionTips,
  skillColor,
  onComplete,
}: {
  missionTitle?: string;
  missionInstructions?: string;
  missionDuration?: number;
  missionTips?: string[];
  skillColor: string;
  onComplete: () => void;
}) {
  const { colors } = useTheme();
  const [showTips, setShowTips] = useState(false);
  const [accepted, setAccepted] = useState(false);

  function handleAccept() {
    setAccepted(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setTimeout(onComplete, 1200);
  }

  return (
    <View style={stageShared.container}>
      <View style={missionStyles.bigIcon}>
        <AppIcon name="target" size="lg" variant="featured" color={skillColor} bgColor={skillColor + '15'} iconSize={36} />
      </View>

      <Text style={[missionStyles.title, { color: colors.text }]}>
        {missionTitle || 'Jouw missie deze week'}
      </Text>

      {missionDuration != null && (
        <View style={[missionStyles.durationBadge, { backgroundColor: skillColor + '18' }]}>
          <Text style={[missionStyles.durationText, { color: skillColor }]}>{missionDuration} min</Text>
        </View>
      )}

      {missionInstructions && (
        <View style={[missionStyles.instructionsCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <MissionText text={missionInstructions} color={colors.text2} bulletColor={skillColor} />
        </View>
      )}

      {/* Tips */}
      {missionTips && missionTips.length > 0 && (
        <View>
          <Pressable onPress={() => setShowTips(!showTips)} style={missionStyles.tipsToggle}>
            <Text style={[missionStyles.tipsToggleText, { color: skillColor }]}>
              {showTips ? 'Verberg tips' : 'Bekijk tips'} ({missionTips.length})
            </Text>
          </Pressable>
          {showTips && (
            <View style={[missionStyles.tipsCard, { backgroundColor: colors.surface2, borderColor: colors.border }]}>
              {missionTips.map((tip, i) => (
                <View key={i} style={missionStyles.tipRow}>
                  <Text style={[missionStyles.tipBullet, { color: skillColor }]}>{'\u2022'}</Text>
                  <Text style={[missionStyles.tipText, { color: colors.text2 }]}>{tip}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      )}

      {!accepted ? (
        <Pressable
          onPress={handleAccept}
          style={[stageShared.ctaButton, { backgroundColor: skillColor, marginTop: 24 }]}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Text style={stageShared.ctaText}>Missie Geaccepteerd</Text>
            <InlineIcon name="check" size={16} color="#fff" />
          </View>
        </Pressable>
      ) : (
        <View style={missionStyles.acceptedRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <InlineIcon name="checkCircle" size={18} color="#22C55E" />
            <Text style={[missionStyles.acceptedText, { color: '#22C55E' }]}>
              Missie geaccepteerd!
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const missionStyles = StyleSheet.create({
  bigIcon: { alignItems: 'center', marginBottom: 16 },
  title: { fontSize: 22, fontWeight: '800', textAlign: 'center', marginBottom: 12 },
  durationBadge: { alignSelf: 'center', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 12, marginBottom: 16 },
  durationText: { fontSize: 14, fontWeight: '700' },
  instructionsCard: { borderRadius: 14, borderWidth: 1, padding: 20, marginBottom: 12 },
  instructions: { fontSize: 15, lineHeight: 24 },
  bulletRow: { flexDirection: 'row', gap: 8, marginBottom: 6 },
  bulletDot: { fontSize: 16, marginTop: 1, fontWeight: '700' },
  bulletNum: { fontSize: 14, fontWeight: '700', minWidth: 20 },
  bulletText: { fontSize: 15, lineHeight: 24, flex: 1 },
  tipsToggle: { alignSelf: 'center', paddingVertical: 8 },
  tipsToggleText: { fontSize: 14, fontWeight: '700' },
  tipsCard: { borderRadius: 12, borderWidth: 1, padding: 16, marginTop: 8 },
  tipRow: { flexDirection: 'row', gap: 10, marginBottom: 8 },
  tipBullet: { fontSize: 16, marginTop: 1 },
  tipText: { fontSize: 14, lineHeight: 21, flex: 1 },
  acceptedRow: { alignItems: 'center', marginTop: 24 },
  acceptedText: { fontSize: 18, fontWeight: '800' },
});

// ─────────────────────────────────────────────────────────────────────────────
// ReflectionStage
// ─────────────────────────────────────────────────────────────────────────────

function ReflectionStage({
  reflectionQuestion,
  allQuestions,
  skillColor,
  onComplete,
  summaryCard,
}: {
  reflectionQuestion?: string;
  allQuestions?: string[];
  skillColor: string;
  onComplete: () => void;
  summaryCard?: { title: string; body: string };
}) {
  const { colors } = useTheme();
  const [journal, setJournal] = useState('');
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={stageShared.container}>
      <View style={[reflectStyles.gradientBg, { backgroundColor: skillColor + '08' }]}>
        <View style={reflectStyles.emojiIcon}>
          <AppIcon name="compass" size="lg" variant="featured" color={skillColor} bgColor={skillColor + '12'} iconSize={32} />
        </View>

        <Text style={[reflectStyles.mainQuestion, { color: colors.text }]}>
          {reflectionQuestion || 'Wat neem je mee uit deze module?'}
        </Text>

        <TextInput
          style={[reflectStyles.input, { color: colors.text, backgroundColor: colors.surface, borderColor: colors.border }]}
          placeholder="Schrijf hier je gedachten... (optioneel)"
          placeholderTextColor={colors.text3}
          multiline
          textAlignVertical="top"
          value={journal}
          onChangeText={setJournal}
        />

        {allQuestions && allQuestions.length > 1 && (
          <View>
            <Pressable onPress={() => setShowMore(!showMore)} style={reflectStyles.moreToggle}>
              <Text style={[reflectStyles.moreToggleText, { color: skillColor }]}>
                {showMore ? 'Verberg extra vragen' : 'Meer reflectievragen'}
              </Text>
            </Pressable>
            {showMore && (
              <View style={reflectStyles.moreList}>
                {allQuestions.slice(1).map((q, i) => (
                  <Text key={i} style={[reflectStyles.moreQuestion, { color: colors.text2 }]}>
                    {'\u2022'} {q}
                  </Text>
                ))}
              </View>
            )}
          </View>
        )}

        {/* Samenvatting als afsluiter */}
        {summaryCard && (
          <View style={[reflectStyles.summaryCard, { backgroundColor: colors.surface, borderColor: skillColor + '30' }]}>
            <Text style={[reflectStyles.summaryBadge, { color: skillColor }]}>IN HET KORT</Text>
            <ParagraphText text={summaryCard.body} color={colors.text2} />
          </View>
        )}

        <Pressable
          onPress={onComplete}
          style={[stageShared.ctaButton, { backgroundColor: skillColor, marginTop: 24 }]}
        >
          <Text style={stageShared.ctaText}>Afronden</Text>
        </Pressable>
      </View>
    </View>
  );
}

const reflectStyles = StyleSheet.create({
  gradientBg: { borderRadius: 20, padding: 24, marginHorizontal: -24, marginTop: -8, paddingTop: 8 },
  emojiIcon: { alignItems: 'center', marginBottom: 16 },
  mainQuestion: { fontSize: 20, fontWeight: '700', textAlign: 'center', lineHeight: 28, marginBottom: 20 },
  input: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    minHeight: 100,
    fontSize: 15,
    lineHeight: 22,
  },
  moreToggle: { alignSelf: 'center', paddingVertical: 10, marginTop: 8 },
  moreToggleText: { fontSize: 14, fontWeight: '700' },
  moreList: { gap: 10, marginTop: 8 },
  moreQuestion: { fontSize: 14, lineHeight: 21 },
  summaryCard: {
    marginTop: 20,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  summaryBadge: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 8,
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// ModuleCompletionScreen
// ─────────────────────────────────────────────────────────────────────────────

function ModuleCompletionScreen({
  moduleStages,
  quizScore,
  skillColor,
  onNextModule,
  onBack,
  onReview,
  nextModuleTitle,
}: {
  moduleStages: ModuleStages;
  quizScore: { correct: number; total: number };
  skillColor: string;
  onNextModule: (() => void) | null;
  onBack: () => void;
  onReview: () => void;
  nextModuleTitle?: string;
}) {
  const { colors } = useTheme();
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Animated.parallel([
      Animated.spring(scaleAnim, { toValue: 1, friction: 5, tension: 80, useNativeDriver: true }),
      Animated.timing(opacityAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={completeStyles.container} showsVerticalScrollIndicator={false}>
      <Animated.View style={[completeStyles.inner, { opacity: opacityAnim, transform: [{ scale: scaleAnim }] }]}>
        <View style={completeStyles.bigCheckIcon}>
          <AppIcon name="checkCircle" size="lg" variant="featured" color="#22C55E" bgColor="rgba(34,197,94,0.12)" iconSize={40} />
        </View>
        <Text style={[completeStyles.title, { color: colors.text }]}>Missie Voltooid!</Text>
        <Text style={[completeStyles.moduleName, { color: skillColor }]}>{moduleStages.title}</Text>

        {/* XP summary */}
        <View style={[completeStyles.xpCard, { backgroundColor: '#F59E0B18', borderColor: '#F59E0B40' }]}>
          <Text style={completeStyles.xpValue}>+{moduleStages.totalXP} XP</Text>
          <Text style={[completeStyles.xpLabel, { color: colors.text2 }]}>verdiend</Text>
        </View>

        {/* Quiz score */}
        {quizScore.total > 0 && (
          <View style={[completeStyles.scoreCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Text style={[completeStyles.scoreTitle, { color: colors.text }]}>Quiz score</Text>
            <Text style={[completeStyles.scoreValue, { color: skillColor }]}>
              {quizScore.correct}/{quizScore.total}
            </Text>
          </View>
        )}

        {/* Key takeaways */}
        {moduleStages.keyTakeaways.length > 0 && (
          <View style={[completeStyles.takeawaysCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Text style={[completeStyles.takeawaysTitle, { color: colors.text }]}>Kernpunten</Text>
            {moduleStages.keyTakeaways.map((t, i) => (
              <View key={i} style={completeStyles.takeawayRow}>
                <View style={[completeStyles.takeawayDot, { backgroundColor: skillColor }]} />
                <Text style={[completeStyles.takeawayText, { color: colors.text2 }]}>{t}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Buttons */}
        <View style={completeStyles.buttons}>
          {onNextModule && (
            <Pressable
              onPress={onNextModule}
              style={[completeStyles.primaryBtn, { backgroundColor: skillColor }]}
            >
              <View>
                <Text style={completeStyles.primaryBtnLabel}>Volgende Missie</Text>
                {nextModuleTitle && (
                  <Text style={completeStyles.primaryBtnTitle} numberOfLines={1}>{nextModuleTitle}</Text>
                )}
              </View>
              <InlineIcon name="arrowRight" size={22} color="#fff" />
            </Pressable>
          )}
          <Pressable
            onPress={onBack}
            style={[completeStyles.secondaryBtn, { backgroundColor: colors.surface, borderColor: colors.border }]}
          >
            <Text style={[completeStyles.secondaryBtnText, { color: colors.text }]}>Terug naar overzicht</Text>
          </Pressable>
          <Pressable
            onPress={onReview}
            style={[completeStyles.reviewBtn, { borderColor: skillColor }]}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <InlineIcon name="bookOpen" size={15} color={skillColor} />
              <Text style={[completeStyles.reviewBtnText, { color: skillColor }]}>Herlees deze module</Text>
            </View>
          </Pressable>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const completeStyles = StyleSheet.create({
  container: { paddingVertical: 40, paddingHorizontal: 24, alignItems: 'center' },
  inner: { width: '100%', alignItems: 'center' },
  bigCheckIcon: { marginBottom: 16 },
  title: { fontSize: 26, fontWeight: '900', marginBottom: 6 },
  moduleName: { fontSize: 16, fontWeight: '700', marginBottom: 24, textAlign: 'center' },
  xpCard: {
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  xpValue: { fontSize: 32, fontWeight: '900', color: '#F59E0B' },
  xpLabel: { fontSize: 14, fontWeight: '600', marginTop: 2 },
  scoreCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  scoreTitle: { fontSize: 15, fontWeight: '700' },
  scoreValue: { fontSize: 20, fontWeight: '900' },
  takeawaysCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 20,
    width: '100%',
    marginBottom: 24,
  },
  takeawaysTitle: { fontSize: 16, fontWeight: '700', marginBottom: 14 },
  takeawayRow: { flexDirection: 'row', gap: 10, marginBottom: 10 },
  takeawayDot: { width: 6, height: 6, borderRadius: 3, marginTop: 8 },
  takeawayText: { fontSize: 14, lineHeight: 21, flex: 1 },
  buttons: { width: '100%', gap: 12 },
  primaryBtn: {
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  primaryBtnLabel: { color: 'rgba(255,255,255,0.75)', fontSize: 12, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 0.5 },
  primaryBtnTitle: { color: '#fff', fontSize: 16, fontWeight: '800', marginTop: 2 },
  arrowIcon: { marginLeft: 4 },
  secondaryBtn: {
    borderRadius: 14,
    borderWidth: 1,
    paddingVertical: 14,
    alignItems: 'center',
  },
  secondaryBtnText: { fontSize: 15, fontWeight: '700' },
  reviewBtn: {
    borderRadius: 14,
    borderWidth: 1,
    paddingVertical: 14,
    alignItems: 'center' as const,
  },
  reviewBtnText: { fontSize: 15, fontWeight: '700' as const },
});

// ─────────────────────────────────────────────────────────────────────────────
// Shared stage styles
// ─────────────────────────────────────────────────────────────────────────────

const stageShared = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  topBadge: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  badgeLabel: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  ctaButton: {
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// ModulePlayer — Main component
// ─────────────────────────────────────────────────────────────────────────────

export default function ModulePlayer() {
  const { colors } = useTheme();
  const router = useRouter();
  const store = useStore();
  const { completeStage, getStageProgress, awardBonusXP } = store;
  const { skill: rawSkill, moduleId } = useLocalSearchParams<{ skill: string; moduleId: string }>();
  const skill = decodeURIComponent(rawSkill || '') as Skill;
  const skillColor = SKILL_COLORS[skill] || '#F59E0B';

  // Transform module into stages
  const moduleStages = useMemo(() => {
    if (!skill || !moduleId) return null;
    const mods = getLearningModulesForSkill(skill);
    const found = mods.find((m) => m.id === moduleId);
    if (!found) return null;
    return transformModuleToStages(found);
  }, [skill, moduleId]);

  // Stage navigation state
  const [stageIndex, setStageIndex] = useState(0);
  const [completedStageIds, setCompletedStageIds] = useState<string[]>([]);
  const [showCompletion, setShowCompletion] = useState(false);
  const [quizScore, setQuizScore] = useState({ correct: 0, total: 0 });
  const [xpPopup, setXpPopup] = useState<{ xp: number; key: number } | null>(null);
  const [showSkillCompletion, setShowSkillCompletion] = useState(false);
  const [milestoneEvent, setMilestoneEvent] = useState<GamificationEvent | null>(null);
  const [reviewMode, setReviewMode] = useState(false);

  // Fade animation (smooth, no slide jump)
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scrollRef = useRef<ScrollView>(null);
  const isAnimating = useRef(false);

  // Reset ALL state when moduleId changes (fixes "volgende module" bug)
  useEffect(() => {
    setStageIndex(0);
    setCompletedStageIds([]);
    setShowCompletion(false);
    setQuizScore({ correct: 0, total: 0 });
    setXpPopup(null);
    fadeAnim.setValue(1);
    isAnimating.current = false;
  }, [moduleId]);

  // Load persisted progress (runs after reset)
  useEffect(() => {
    if (!moduleId) return;
    const progress = getStageProgress(moduleId);
    if (progress) {
      setCompletedStageIds(progress.completedStageIds);
      if (progress.completedAt) {
        setShowCompletion(true);
      } else if (progress.currentStageIndex > 0) {
        setStageIndex(Math.min(progress.currentStageIndex, (moduleStages?.stages.length ?? 1) - 1));
      }
    }
  }, [moduleId]);

  // Animate stage transition (fade out → change → fade in + scroll to top)
  function animateToStage(nextIndex: number) {
    if (isAnimating.current) return; // Voorkom dubbele animaties
    isAnimating.current = true;
    Animated.timing(fadeAnim, { toValue: 0, duration: 150, useNativeDriver: true }).start(() => {
      setStageIndex(nextIndex);
      scrollRef.current?.scrollTo({ y: 0, animated: false });
      Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }).start(() => {
        isAnimating.current = false;
      });
    });
  }

  function handleStageComplete(xpEarned: number) {
    if (!moduleStages || !moduleId) return;
    const stage = moduleStages.stages[stageIndex];
    if (!stage) return;

    // Review mode: navigate stages without XP or progress tracking
    if (reviewMode) {
      if (stageIndex < moduleStages.stages.length - 1) {
        animateToStage(stageIndex + 1);
      } else {
        setShowCompletion(true);
        setReviewMode(false);
      }
      return;
    }

    // Mark complete
    completeStage(moduleId, stage.id, xpEarned, skill, moduleStages.stages.length);
    const newCompleted = [...completedStageIds, stage.id];
    setCompletedStageIds(newCompleted);

    // Show XP popup
    setXpPopup({ xp: xpEarned, key: Date.now() });
    setTimeout(() => setXpPopup(null), 2000);

    // Check if all stages are done
    if (stageIndex >= moduleStages.stages.length - 1) {
      setTimeout(() => {
        setShowCompletion(true);
        markModuleComplete();
      }, 800);
    } else {
      setTimeout(() => animateToStage(stageIndex + 1), 400);
    }
  }

  function handleGoBack() {
    if (reviewMode && stageIndex === 0) {
      setShowCompletion(true);
      setReviewMode(false);
      return;
    }
    if (stageIndex > 0) {
      animateToStage(stageIndex - 1);
    } else {
      router.back();
    }
  }

  async function markModuleComplete() {
    if (!moduleId || !skill) return;
    try {
      const AsyncStorage = (await import('@react-native-async-storage/async-storage')).default;
      const storageKey = `vc-completed-modules-${skill}`;
      const stored = await AsyncStorage.getItem(storageKey);
      const completed: string[] = stored ? JSON.parse(stored) : [];
      if (!completed.includes(moduleId)) {
        completed.push(moduleId);
        await AsyncStorage.setItem(storageKey, JSON.stringify(completed));
      }

      // Check if all modules of this skill are now complete
      const allMods = getLearningModulesForSkill(skill);
      if (completed.length >= allMods.length) {
        awardBonusXP(SKILL_MASTERY_BONUS_XP, skill);
        setTimeout(() => setShowSkillCompletion(true), 1200);
      }

      // Check for module milestone (total across all skills)
      const allSkills = ['Aanwezigheid', 'Emotiecoaching', 'Zelfregulatie', 'Grenzen', 'Autonomie', 'Herstel', 'Verbinding', 'Reflectie'];
      let totalCompleted = 0;
      for (const sk of allSkills) {
        const key = `vc-completed-modules-${sk}`;
        const raw = await AsyncStorage.getItem(key);
        totalCompleted += raw ? (JSON.parse(raw) as string[]).length : 0;
      }
      const milestone = checkModuleMilestone(totalCompleted);
      if (milestone) {
        setTimeout(() => {
          setMilestoneEvent({ type: 'milestone', emoji: milestone.emoji, title: milestone.title, message: milestone.message });
        }, completed.length >= allMods.length ? 5000 : 1500); // Delay after skill popup if both trigger
      }

      // Check for learn badges
      const newBadges = checkAndUnlockBadges(store, { source: 'module', skill }, totalCompleted);
      if (newBadges.length > 0) {
        const delay = milestone ? 4000 : (completed.length >= allMods.length ? 6000 : 2000);
        setTimeout(() => {
          setMilestoneEvent({ type: 'badge', badge: newBadges[0] });
        }, delay);
      }
    } catch {}
  }

  // Next module
  const nextModule = useMemo(() => {
    if (!skill || !moduleId) return null;
    const mods = getLearningModulesForSkill(skill);
    const idx = mods.findIndex((m) => m.id === moduleId);
    return mods[idx + 1] ?? null;
  }, [skill, moduleId]);

  function handleNextModule() {
    if (!nextModule) return;
    router.replace(`/(tabs)/leren/module?skill=${encodeURIComponent(skill)}&moduleId=${nextModule.id}` as any);
  }

  // ── Not found ──────────────────────────────────────────────────────────────
  if (!moduleStages) {
    return (
      <SafeAreaView style={[mainStyles.safe, { backgroundColor: colors.bg }]}>
        <View style={mainStyles.headerBar}>
          <Pressable onPress={() => router.back()} style={mainStyles.backButton}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <InlineIcon name="arrowLeft" size={18} color={colors.amber} />
              <Text style={[mainStyles.backText, { color: colors.amber }]}>Terug</Text>
            </View>
          </Pressable>
        </View>
        <View style={mainStyles.emptyContainer}>
          <View style={mainStyles.emptyIcon}>
            <AppIcon name="search" size="lg" variant="featured" color={colors.text3} bgColor={colors.surface2} iconSize={36} />
          </View>
          <Text style={[mainStyles.emptyTitle, { color: colors.text }]}>Module niet gevonden</Text>
        </View>
      </SafeAreaView>
    );
  }

  // ── Completion screen ──────────────────────────────────────────────────────
  if (showCompletion) {
    const allModuleTitles = getLearningModulesForSkill(skill).map((m) => m.title);
    const totalSkillXP = allModuleTitles.length * 30; // ~30 XP per module average
    const skillEmoji = SKILLS[skill]?.emoji || '';

    return (
      <SafeAreaView style={[mainStyles.safe, { backgroundColor: colors.bg }]}>
        <ModuleCompletionScreen
          moduleStages={moduleStages}
          quizScore={quizScore}
          skillColor={skillColor}
          onNextModule={nextModule ? handleNextModule : null}
          onBack={() => router.back()}
          onReview={() => {
            setShowCompletion(false);
            setReviewMode(true);
            setStageIndex(0);
          }}
          nextModuleTitle={nextModule?.title}
        />
        <SkillCompletionPopup
          visible={showSkillCompletion}
          skill={skill}
          skillEmoji={skillEmoji}
          skillColor={skillColor}
          moduleTitles={allModuleTitles}
          totalSkillXP={totalSkillXP}
          bonusXP={SKILL_MASTERY_BONUS_XP}
          onDismiss={() => setShowSkillCompletion(false)}
        />
        <GamificationPopup event={milestoneEvent} onDismiss={() => setMilestoneEvent(null)} />
      </SafeAreaView>
    );
  }

  // ── Stage player ───────────────────────────────────────────────────────────
  const currentStage = moduleStages.stages[stageIndex];
  const totalStages = moduleStages.stages.length;

  return (
    <SafeAreaView style={[mainStyles.safe, { backgroundColor: colors.bg }]}>
      {/* Review mode banner */}
      {reviewMode && (
        <View style={[mainStyles.reviewBanner, { backgroundColor: skillColor + '15', borderBottomColor: skillColor + '40' }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <InlineIcon name="bookOpen" size={14} color={skillColor} />
            <Text style={[mainStyles.reviewBannerText, { color: skillColor }]}>Herleesmodus</Text>
          </View>
          <Pressable onPress={() => { setShowCompletion(true); setReviewMode(false); }}>
            <Text style={[mainStyles.reviewBannerClose, { color: skillColor }]}>Sluiten</Text>
          </Pressable>
        </View>
      )}

      {/* Header with back + progress + module title */}
      <View style={[mainStyles.headerBar, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.back()} style={mainStyles.backButton}>
          <InlineIcon name="arrowLeft" size={18} color={colors.amber} />
        </Pressable>
        <StageProgressBar
          stages={moduleStages.stages}
          currentIndex={stageIndex}
          completedIds={completedStageIds}
          skillColor={skillColor}
        />
      </View>

      {/* Stage step indicator */}
      <View style={mainStyles.stepIndicator}>
        <Text style={[mainStyles.stepLabel, { color: skillColor }]}>
          {currentStage?.stageLabel ?? ''}
        </Text>
        <Text style={[mainStyles.stepCount, { color: colors.text3 }]}>
          Stap {stageIndex + 1} van {totalStages}
        </Text>
      </View>

      {/* XP Popup */}
      {xpPopup && <XPPopup xp={xpPopup.xp} visible key={xpPopup.key} />}

      {/* Stage content with fade animation */}
      <Animated.ScrollView
        ref={scrollRef as any}
        style={[mainStyles.stageScroll, { opacity: fadeAnim }]}
        contentContainerStyle={mainStyles.stageScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {currentStage && renderStage(currentStage, skillColor, handleStageComplete, quizScore, setQuizScore)}

        {/* Vorige etappe knop */}
        {stageIndex > 0 && (
          <Pressable
            onPress={() => animateToStage(stageIndex - 1)}
            style={mainStyles.prevButton}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <InlineIcon name="arrowLeft" size={14} color={colors.text3} />
              <Text style={[mainStyles.prevButtonText, { color: colors.text3 }]}>
                Vorige etappe
              </Text>
            </View>
          </Pressable>
        )}
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stage renderer
// ─────────────────────────────────────────────────────────────────────────────

function renderStage(
  stage: Stage,
  skillColor: string,
  onComplete: (xp: number) => void,
  quizScore: { correct: number; total: number },
  setQuizScore: (s: { correct: number; total: number }) => void,
) {
  switch (stage.type) {
    case 'insight_cards':
      return (
        <InsightCardsStage
          cards={stage.cards || []}
          skillColor={skillColor}
          onComplete={() => onComplete(stage.xpReward)}
          stageLabel={stage.stageLabel}
        />
      );
    case 'scenario':
      return (
        <ScenarioStage
          situation={stage.situation || ''}
          choices={stage.choices || []}
          explanation={stage.explanation}
          skillColor={skillColor}
          onComplete={(correct) => onComplete(stage.xpReward + (correct ? 10 : 0))}
        />
      );
    case 'quiz':
      return (
        <QuizStage
          questions={stage.questions || []}
          skillColor={skillColor}
          onComplete={(correct, total) => {
            setQuizScore({ correct, total });
            onComplete(correct * stage.xpReward);
          }}
        />
      );
    case 'video':
      return (
        <VideoStage
          youtubeId={stage.youtubeId || ''}
          videoTitle={stage.videoTitle}
          videoDuration={stage.videoDuration}
          videoContext={stage.videoContext}
          keyTakeaway={stage.keyTakeaway}
          skillColor={skillColor}
          onComplete={() => onComplete(stage.xpReward)}
        />
      );
    case 'mission':
      return (
        <MissionStage
          missionTitle={stage.missionTitle}
          missionInstructions={stage.missionInstructions}
          missionDuration={stage.missionDuration}
          missionTips={stage.missionTips}
          skillColor={skillColor}
          onComplete={() => onComplete(stage.xpReward)}
        />
      );
    case 'reflection':
      return (
        <ReflectionStage
          reflectionQuestion={stage.reflectionQuestion}
          allQuestions={stage.allQuestions}
          skillColor={skillColor}
          onComplete={() => onComplete(stage.xpReward)}
          summaryCard={stage.summaryCard}
        />
      );
    default:
      return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Main styles
// ─────────────────────────────────────────────────────────────────────────────

const mainStyles = StyleSheet.create({
  safe: { flex: 1 },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
  },
  backButton: { paddingVertical: 4, paddingRight: 12 },
  backText: { fontSize: 18, fontWeight: '700' },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 4,
  },
  stepLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  stepCount: {
    fontSize: 12,
    fontWeight: '600',
  },
  stageScroll: { flex: 1 },
  stageScrollContent: { paddingBottom: 60, paddingTop: 4 },
  prevButton: {
    alignSelf: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginTop: 4,
  },
  prevButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  emptyContainer: { alignItems: 'center', justifyContent: 'center', paddingTop: 80, paddingHorizontal: 32 },
  emptyIcon: { marginBottom: 20 },
  emptyTitle: { fontSize: 22, fontWeight: '700', textAlign: 'center' },
  reviewBanner: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  reviewBannerText: { fontSize: 14, fontWeight: '700' as const },
  reviewBannerClose: { fontSize: 14, fontWeight: '700' as const },
});
