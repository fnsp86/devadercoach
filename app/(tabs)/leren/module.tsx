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
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { getLearningModulesForSkill } from '@/lib/learning-modules';
import { transformModuleToDiscoveryCards, migrateStageIds } from '@/lib/module-stages';
import type { Skill, Stage, ModuleStages, InsightCard, ScenarioChoice, ThemeTag } from '@/lib/types';
import { resolveActiveThemes } from '@/lib/theme-resolver';
import SkillCompletionPopup from '@/components/SkillCompletionPopup';
import { SKILLS } from '@/lib/skills';
import { SKILL_MASTERY_BONUS_XP, checkModuleMilestone } from '@/lib/gamification-types';
import { checkAndUnlockBadges } from '@/lib/badge-checker';
import type { GamificationEvent } from '@/components/GamificationPopup';
import GamificationPopup from '@/components/GamificationPopup';
import { SKILL_COLORS } from '@/lib/colors';
import { AppIcon, InlineIcon } from '@/lib/icons';
import { getTasksForModule } from '@/lib/task-module-map';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// ─────────────────────────────────────────────────────────────────────────────
// ProgressBar — smooth bar bovenaan (i.p.v. dots, want 12-15 stages is teveel)
// ─────────────────────────────────────────────────────────────────────────────

function ProgressBar({
  current,
  total,
  skillColor,
}: {
  current: number;
  total: number;
  skillColor: string;
}) {
  const { colors } = useTheme();
  const progress = total > 0 ? (current + 1) / total : 0;

  return (
    <View style={[progressStyles.track, { backgroundColor: colors.surface2 }]}>
      <View
        style={[
          progressStyles.fill,
          { backgroundColor: skillColor, width: `${Math.min(progress * 100, 100)}%` },
        ]}
      />
    </View>
  );
}

const progressStyles = StyleSheet.create({
  track: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    marginRight: 12,
  },
  fill: {
    height: '100%',
    borderRadius: 3,
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
// ONTDEKKAART RENDERERS
// ─────────────────────────────────────────────────────────────────────────────

/** Map emoji naar Lucide icoon naam voor professionele weergave */
const EMOJI_ICON_MAP: Record<string, string> = {
  '😡': 'alertTriangle', '😤': 'alertTriangle', '🚨': 'alertTriangle', '🔴': 'alertTriangle',
  '🌡️': 'alertTriangle', '🪫': 'alertTriangle', '🟠': 'alertTriangle',
  '🙅': 'ban', '😶': 'ban', '🚫': 'ban', '🔇': 'ban', '🕳️': 'ban',
  '🏃': 'footprints', '😭': 'heart', '💗': 'heart', '💚': 'heart', '💛': 'heart', '💔': 'heart',
  '👴': 'user', '👶': 'baby', '👥': 'users', '🎭': 'users', '👻': 'eye',
  '🔄': 'refreshCw', '🔁': 'refreshCw',
  '🧭': 'compass', '🌍': 'compass', '🌉': 'compass', '🪞': 'compass',
  '🔎': 'search', '🔍': 'search',
  '🌋': 'flame', '🔥': 'flame',
  '⚖️': 'barChart3', '📉': 'barChart3',
  '🤚': 'hand', '🤲': 'hand',
  '💬': 'messageCircle',
  '📡': 'zap', '💥': 'zap', '⚡': 'zap', '🚀': 'zap', '🔋': 'zap',
  '🌪️': 'waves', '🌊': 'waves', '🌫️': 'waves', '🎢': 'waves',
  '🔧': 'construction', '🏗️': 'construction', '🏠': 'construction', '📦': 'construction', '⚙️': 'construction',
  '🌱': 'sprout', '🤝': 'handshake', '🔗': 'handshake',
  '📋': 'fileText', '🏷️': 'fileText', '🪪': 'fileText',
  '🎨': 'lightbulb', '💡': 'lightbulb',
  '🛡️': 'shield', '💪': 'shield', '🦸': 'shield', '🧱': 'shield',
  '🧠': 'brain', '🤖': 'brain', '🫁': 'brain',
  '📱': 'smartphone', '🔑': 'lock',
  '👀': 'eye', '👁️': 'eye', '🙈': 'eye', '🙉': 'eye', '😐': 'eye', '🫣': 'eye',
  '👂': 'eye',
  '🎯': 'target', '⚓': 'target',
  '✅': 'check', '🟢': 'check',
  '⏱️': 'clock', '⏳': 'clock',
  '☀️': 'sun', '🌅': 'sun', '🌤️': 'sun',
  '🌙': 'moon',
  '📖': 'bookOpen',
  '💰': 'star', '🟡': 'star',
  '🤫': 'eye', '🚪': 'arrowRight',
  '🧊': 'snowflake',
};

/** Render body text met paragraaf-structuur */
function ParagraphText({ text, color }: { text: string; color: string }) {
  const paragraphs = text.split(/\n\n+/).filter((p) => p.trim().length > 0);
  return (
    <View style={{ gap: 10 }}>
      {paragraphs.map((p, i) => (
        <Text key={i} style={{ fontSize: 15, lineHeight: 24, fontWeight: '500', color }}>
          {p.trim()}
        </Text>
      ))}
    </View>
  );
}

// ── HerkenCard ──────────────────────────────────────────────────────────────
function HerkenCard({
  stage,
  skillColor,
  onComplete,
}: {
  stage: Stage;
  skillColor: string;
  onComplete: () => void;
}) {
  const { colors } = useTheme();
  const [tapped, setTapped] = useState<'herken' | 'nieuw' | null>(null);
  const responseAnim = useRef(new Animated.Value(0)).current;

  function handleTap(type: 'herken' | 'nieuw') {
    if (tapped) return;
    setTapped(type);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Animated.spring(responseAnim, { toValue: 1, friction: 6, useNativeDriver: true }).start();
    setTimeout(onComplete, 1200);
  }

  return (
    <View style={cardStyles.fullCard}>
      <View style={[cardStyles.cardInner, { backgroundColor: skillColor + '08' }]}>
        <View style={cardStyles.stageIcon}>
          <AppIcon name="search" size="lg" variant="featured" color={skillColor} bgColor={skillColor + '12'} iconSize={28} />
        </View>
        <Text style={[cardStyles.cardLabel, { color: skillColor }]}>HERKEN JE DIT?</Text>
        <Text style={[cardStyles.herkenText, { color: colors.text }]}>
          {stage.herkenText}
        </Text>

        {!tapped && (
          <View style={cardStyles.herkenButtons}>
            <Pressable
              onPress={() => handleTap('herken')}
              style={[cardStyles.herkenBtn, { backgroundColor: skillColor + '15', borderColor: skillColor + '30' }]}
            >
              <Text style={[cardStyles.herkenBtnText, { color: skillColor }]}>Herken ik</Text>
            </Pressable>
            <Pressable
              onPress={() => handleTap('nieuw')}
              style={[cardStyles.herkenBtn, { backgroundColor: colors.surface2, borderColor: colors.border }]}
            >
              <Text style={[cardStyles.herkenBtnText, { color: colors.text2 }]}>Nieuw voor mij</Text>
            </Pressable>
          </View>
        )}

        {tapped && (
          <Animated.View style={{
            opacity: responseAnim,
            transform: [{ translateY: responseAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }],
          }}>
            <View style={[cardStyles.herkenResponse, { backgroundColor: skillColor + '10' }]}>
              <Text style={[cardStyles.herkenResponseText, { color: skillColor }]}>
                {tapped === 'herken'
                  ? 'Je bent niet de enige. Veel vaders herkennen dit.'
                  : 'Goed dat je hier open voor staat. Laten we erin duiken!'}
              </Text>
            </View>
          </Animated.View>
        )}
      </View>
    </View>
  );
}

// ── InzichtCard ─────────────────────────────────────────────────────────────
function InzichtCard({
  stage,
  skillColor,
  onComplete,
}: {
  stage: Stage;
  skillColor: string;
  onComplete: () => void;
}) {
  const { colors } = useTheme();
  const card = stage.cards?.[0];
  const [showMore, setShowMore] = useState(false);

  if (!card) return null;

  return (
    <View style={cardStyles.fullCard}>
      <View style={[cardStyles.cardInner, { backgroundColor: colors.surface }]}>
        <View style={cardStyles.stageIcon}>
          <AppIcon name="lightbulb" size="lg" variant="featured" color={skillColor} bgColor={skillColor + '12'} iconSize={24} />
        </View>
        <Text style={[cardStyles.cardLabel, { color: skillColor }]}>{stage.stageLabel}</Text>

        {card.highlight && (
          <View style={[cardStyles.highlightBlock, { backgroundColor: skillColor + '08', borderLeftColor: skillColor }]}>
            <Text style={[cardStyles.highlightText, { color: skillColor }]}>{card.highlight}</Text>
          </View>
        )}

        <Text style={[cardStyles.bodyText, { color: colors.text }]}>{card.body}</Text>

        {stage.readMoreText && (
          <View>
            <Pressable
              onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                setShowMore(!showMore);
              }}
              style={cardStyles.readMoreToggle}
            >
              <Text style={[cardStyles.readMoreText, { color: skillColor }]}>
                {showMore ? 'Minder' : 'Lees meer'}
              </Text>
              <InlineIcon name={showMore ? 'chevronUp' : 'chevronDown'} size={14} color={skillColor} />
            </Pressable>
            {showMore && (
              <Text style={[cardStyles.bodyText, { color: colors.text2, marginTop: 12 }]}>
                {stage.readMoreText}
              </Text>
            )}
          </View>
        )}

        <Pressable
          onPress={onComplete}
          style={[cardStyles.continueBtn, { backgroundColor: skillColor }]}
        >
          <Text style={cardStyles.continueBtnText}>Volgende</Text>
          <InlineIcon name="arrowRight" size={16} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}

// ── WistJeDatCard ───────────────────────────────────────────────────────────
function WistJeDatCard({
  stage,
  skillColor,
  onComplete,
}: {
  stage: Stage;
  skillColor: string;
  onComplete: () => void;
}) {
  const { colors } = useTheme();
  const facts = stage.facts ?? (stage.factText ? [{ text: stage.factText, source: stage.factSource }] : []);
  const [revealedCount, setRevealedCount] = useState(0);
  const flipAnim = useRef(new Animated.Value(0)).current;

  function handleReveal() {
    if (revealedCount >= facts.length) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    flipAnim.setValue(0);
    Animated.spring(flipAnim, { toValue: 1, friction: 6, tension: 80, useNativeDriver: true }).start();
    setRevealedCount((c) => c + 1);
  }

  const allRevealed = revealedCount >= facts.length;

  return (
    <View style={cardStyles.fullCard}>
      <View style={[cardStyles.cardInner, { backgroundColor: colors.amberDim }]}>
        <View style={cardStyles.stageIcon}>
          <AppIcon name="brain" size="lg" variant="featured" color={colors.amber} bgColor={colors.amber + '12'} iconSize={24} />
        </View>
        <Text style={[cardStyles.cardLabel, { color: colors.amber }]}>WIST JE DAT...</Text>

        {/* Feiten */}
        <View style={wistStyles.factsContainer}>
          {facts.map((fact, i) => {
            const isRevealed = i < revealedCount;
            if (!isRevealed) {
              // Hidden card
              return (
                <Pressable
                  key={i}
                  onPress={i === revealedCount ? handleReveal : undefined}
                  style={[wistStyles.hiddenCard, {
                    backgroundColor: colors.surface,
                    borderColor: colors.amber + '30',
                    opacity: i === revealedCount ? 1 : 0.4,
                  }]}
                >
                  <InlineIcon name="brain" size={20} color={colors.amber} />
                  <Text style={[wistStyles.tapHint, { color: colors.amber }]}>
                    {i === revealedCount ? 'Tik om te onthullen' : `Feit ${i + 1}`}
                  </Text>
                </Pressable>
              );
            }
            // Revealed card
            return (
              <View key={i} style={[wistStyles.revealedCard, { backgroundColor: colors.surface, borderColor: colors.amber + '30' }]}>
                <View style={[wistStyles.factNumber, { backgroundColor: colors.amber + '15' }]}>
                  <Text style={[wistStyles.factNumberText, { color: colors.amber }]}>{i + 1}</Text>
                </View>
                <Text style={[wistStyles.factText, { color: colors.text }]}>{fact.text}</Text>
                {fact.source && (
                  <Text style={[wistStyles.source, { color: colors.text3 }]}>Bron: {fact.source}</Text>
                )}
              </View>
            );
          })}
        </View>

        {allRevealed && (
          <Pressable
            onPress={onComplete}
            style={[cardStyles.continueBtn, { backgroundColor: colors.amber }]}
          >
            <Text style={cardStyles.continueBtnText}>Volgende</Text>
            <InlineIcon name="arrowRight" size={16} color="#fff" />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const wistStyles = StyleSheet.create({
  factsContainer: {
    gap: 12,
    width: '100%',
  },
  hiddenCard: {
    borderRadius: 16,
    borderWidth: 1.5,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    minHeight: 60,
  },
  tapHint: {
    fontSize: 14,
    fontWeight: '700',
  },
  revealedCard: {
    borderRadius: 16,
    borderWidth: 1.5,
    padding: 20,
  },
  factNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  factNumberText: {
    fontSize: 14,
    fontWeight: '800',
  },
  factText: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '500',
  },
  source: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 10,
    fontStyle: 'italic',
  },
});

// ── DiagramCard ─────────────────────────────────────────────────────────────
function DiagramCard({
  stage,
  skillColor,
  onComplete,
}: {
  stage: Stage;
  skillColor: string;
  onComplete: () => void;
}) {
  const { colors } = useTheme();
  const [visibleCount, setVisibleCount] = useState(0);
  const items = stage.diagramItems ?? [];

  function handleTapItem(index: number) {
    if (index !== visibleCount) return; // only reveal next in sequence
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setVisibleCount((c) => c + 1);
  }

  const allRevealed = visibleCount >= items.length;

  return (
    <View style={cardStyles.fullCard}>
      <View style={[cardStyles.cardInner, { backgroundColor: colors.surface2 }]}>
        <View style={cardStyles.stageIcon}>
          <AppIcon name="barChart3" size="lg" variant="featured" color={skillColor} bgColor={skillColor + '12'} iconSize={24} />
        </View>
        <Text style={[cardStyles.cardLabel, { color: skillColor }]}>{stage.stageLabel}</Text>

        {stage.diagramIntro && (
          <Text style={[cardStyles.bodyText, { color: colors.text2, marginBottom: 16, textAlign: 'center' }]}>
            {stage.diagramIntro}
          </Text>
        )}

        <View style={diagramStyles.itemsList}>
          {items.map((item, i) => {
            const isRevealed = i < visibleCount;
            const isNext = i === visibleCount;

            if (!isRevealed) {
              // Hidden/next item — tappable
              return (
                <Pressable
                  key={i}
                  onPress={() => handleTapItem(i)}
                  style={[
                    diagramStyles.hiddenItem,
                    {
                      backgroundColor: colors.surface,
                      borderColor: isNext ? skillColor + '40' : colors.border,
                      opacity: isNext ? 1 : 0.35,
                    },
                  ]}
                >
                  <View style={[diagramStyles.itemIconWrap, { backgroundColor: (isNext ? skillColor : colors.text3) + '10' }]}>
                    <InlineIcon name={(EMOJI_ICON_MAP[item.emoji] || 'info') as any} size={18} color={isNext ? skillColor : colors.text3} />
                  </View>
                  <Text style={[diagramStyles.hiddenLabel, { color: isNext ? skillColor : colors.text3 }]}>
                    {isNext ? 'Tik om te onthullen' : `Stap ${i + 1}`}
                  </Text>
                </Pressable>
              );
            }

            // Revealed item
            return (
              <View
                key={i}
                style={[
                  diagramStyles.item,
                  { backgroundColor: colors.surface, borderColor: colors.border },
                ]}
              >
                <View style={[diagramStyles.itemIconWrap, { backgroundColor: skillColor + '10' }]}>
                  <InlineIcon name={(EMOJI_ICON_MAP[item.emoji] || 'info') as any} size={20} color={skillColor} />
                </View>
                <View style={diagramStyles.itemContent}>
                  <Text style={[diagramStyles.itemLabel, { color: colors.text }]}>{item.label}</Text>
                  <Text style={[diagramStyles.itemDesc, { color: colors.text2 }]}>{item.description}</Text>
                </View>
              </View>
            );
          })}
        </View>

        {allRevealed && (
          <Pressable
            onPress={onComplete}
            style={[cardStyles.continueBtn, { backgroundColor: skillColor }]}
          >
            <Text style={cardStyles.continueBtnText}>Volgende</Text>
            <InlineIcon name="arrowRight" size={16} color="#fff" />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const diagramStyles = StyleSheet.create({
  itemsList: { gap: 10, width: '100%' },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  hiddenItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1.5,
    minHeight: 56,
  },
  hiddenLabel: { fontSize: 14, fontWeight: '700' },
  itemIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  itemContent: { flex: 1 },
  itemLabel: { fontSize: 16, fontWeight: '800', marginBottom: 2 },
  itemDesc: { fontSize: 14, lineHeight: 20 },
});

// ── KeuzeCard ───────────────────────────────────────────────────────────────
function KeuzeCard({
  stage,
  skillColor,
  onComplete,
}: {
  stage: Stage;
  skillColor: string;
  onComplete: (correct: boolean) => void;
}) {
  const { colors } = useTheme();
  const [chosen, setChosen] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const revealAnim = useRef(new Animated.Value(0)).current;
  const choices = stage.choices ?? [];

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
    <View style={cardStyles.fullCard}>
      <View style={[cardStyles.cardInner, { backgroundColor: skillColor + '08' }]}>
        <View style={cardStyles.stageIcon}>
          <AppIcon name="target" size="lg" variant="featured" color={skillColor} bgColor={skillColor + '12'} iconSize={24} />
        </View>
        <Text style={[cardStyles.cardLabel, { color: skillColor }]}>WAT ZOU JIJ DOEN?</Text>

        {/* Situatie */}
        <View style={[keuzeStyles.situationCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[keuzeStyles.situationText, { color: colors.text }]}>{stage.situation}</Text>
        </View>

        {/* Keuzes */}
        {!chosen && (
          <View style={keuzeStyles.choicesContainer}>
            {choices.map((choice) => (
              <Pressable
                key={choice.id}
                onPress={() => handleChoose(choice)}
                style={[keuzeStyles.choiceBtn, { backgroundColor: colors.surface, borderColor: skillColor + '30' }]}
              >
                <Text style={[keuzeStyles.choiceText, { color: colors.text }]}>{choice.text}</Text>
              </Pressable>
            ))}
          </View>
        )}

        {/* Resultaat na keuze */}
        {chosen && chosenChoice && (
          <Animated.View style={{
            opacity: revealAnim,
            transform: [{ translateY: revealAnim.interpolate({ inputRange: [0, 1], outputRange: [30, 0] }) }],
          }}>
            {/* Banner */}
            <View style={[keuzeStyles.resultBanner, {
              backgroundColor: isCorrect ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.08)',
            }]}>
              <InlineIcon name={isCorrect ? 'checkCircle' : 'xCircle'} size={24} color={isCorrect ? '#22C55E' : '#EF4444'} />
              <Text style={[keuzeStyles.resultTitle, { color: isCorrect ? '#22C55E' : '#EF4444' }]}>
                {isCorrect ? 'Goed gekozen!' : 'Niet helemaal...'}
              </Text>
            </View>

            {/* Jouw keuze */}
            <View style={[keuzeStyles.approachCard, {
              backgroundColor: colors.surface,
              borderColor: isCorrect ? '#22C55E40' : '#EF444440',
            }]}>
              <View style={[keuzeStyles.approachBadge, {
                backgroundColor: isCorrect ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.1)',
              }]}>
                <Text style={[keuzeStyles.approachBadgeText, {
                  color: isCorrect ? '#22C55E' : '#EF4444',
                }]}>JOUW KEUZE</Text>
              </View>
              <ParagraphText text={chosenChoice.fullText} color={colors.text2} />
            </View>

            {/* Betere aanpak bij fout */}
            {!isCorrect && correctChoice && (
              <View style={[keuzeStyles.approachCard, {
                backgroundColor: colors.surface,
                borderColor: '#22C55E40',
              }]}>
                <View style={[keuzeStyles.approachBadge, { backgroundColor: 'rgba(34,197,94,0.12)' }]}>
                  <Text style={[keuzeStyles.approachBadgeText, { color: '#22C55E' }]}>BETERE AANPAK</Text>
                </View>
                <ParagraphText text={correctChoice.fullText} color={colors.text2} />
              </View>
            )}

            {/* Foute aanpak bij goed antwoord — zodat papa het verschil ziet */}
            {isCorrect && wrongChoice && (
              <View style={[keuzeStyles.approachCard, {
                backgroundColor: colors.surface,
                borderColor: '#EF444425',
              }]}>
                <View style={[keuzeStyles.approachBadge, { backgroundColor: 'rgba(239,68,68,0.08)' }]}>
                  <Text style={[keuzeStyles.approachBadgeText, { color: '#EF4444' }]}>DIT LIEVER NIET</Text>
                </View>
                <ParagraphText text={wrongChoice.fullText} color={colors.text3} />
              </View>
            )}

            {/* Uitleg toggle */}
            {stage.explanation && (
              <View>
                <Pressable
                  onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                    setShowExplanation(!showExplanation);
                  }}
                  style={keuzeStyles.explanationToggle}
                >
                  <Text style={[keuzeStyles.explanationToggleText, { color: skillColor }]}>
                    {showExplanation ? 'Verberg uitleg' : 'Waarom?'}
                  </Text>
                </Pressable>
                {showExplanation && (
                  <View style={[keuzeStyles.explanationCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                    <ParagraphText text={stage.explanation} color={colors.text2} />
                  </View>
                )}
              </View>
            )}

            <Pressable
              onPress={() => onComplete(isCorrect === true)}
              style={[cardStyles.continueBtn, { backgroundColor: skillColor, marginTop: 20 }]}
            >
              <Text style={cardStyles.continueBtnText}>Volgende</Text>
              <InlineIcon name="arrowRight" size={16} color="#fff" />
            </Pressable>
          </Animated.View>
        )}
      </View>
    </View>
  );
}

const keuzeStyles = StyleSheet.create({
  situationCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
  },
  situationText: { fontSize: 16, lineHeight: 26, fontWeight: '500' },
  choicesContainer: { gap: 12 },
  choiceBtn: {
    borderRadius: 14,
    borderWidth: 1.5,
    padding: 18,
  },
  choiceText: { fontSize: 15, lineHeight: 22, fontWeight: '600' },
  resultBanner: {
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
  },
  resultTitle: { fontSize: 20, fontWeight: '800' },
  approachCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    marginBottom: 12,
  },
  approachBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 14,
  },
  approachBadgeText: { fontSize: 11, fontWeight: '800', letterSpacing: 1.2 },
  explanationToggle: { alignSelf: 'center', paddingVertical: 10 },
  explanationToggleText: { fontSize: 14, fontWeight: '700' },
  explanationCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 18,
    marginBottom: 8,
  },
});

// ── StrategieCard ───────────────────────────────────────────────────────────
function StrategieCard({
  stage,
  skillColor,
  onComplete,
}: {
  stage: Stage;
  skillColor: string;
  onComplete: () => void;
}) {
  const { colors } = useTheme();

  return (
    <View style={cardStyles.fullCard}>
      <View style={[cardStyles.cardInner, { backgroundColor: colors.surface }]}>
        <View style={[strategieStyles.iconWrap, { backgroundColor: skillColor + '12' }]}>
          <InlineIcon name="shield" size={28} color={skillColor} />
        </View>
        <Text style={[cardStyles.cardLabel, { color: skillColor }]}>{stage.stageLabel}</Text>

        {stage.strategieTitle && (
          <Text style={[strategieStyles.title, { color: colors.text }]}>{stage.strategieTitle}</Text>
        )}

        {stage.strategieText && (
          <Text style={[cardStyles.bodyText, { color: colors.text2 }]}>{stage.strategieText}</Text>
        )}

        <Pressable
          onPress={onComplete}
          style={[cardStyles.continueBtn, { backgroundColor: skillColor }]}
        >
          <Text style={cardStyles.continueBtnText}>Volgende</Text>
          <InlineIcon name="arrowRight" size={16} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}

const strategieStyles = StyleSheet.create({
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 28,
  },
});

// ── UitdagingCard ───────────────────────────────────────────────────────────
function UitdagingCard({
  stage,
  skillColor,
  onComplete,
}: {
  stage: Stage;
  skillColor: string;
  onComplete: () => void;
}) {
  const { colors } = useTheme();
  const [accepted, setAccepted] = useState(false);
  const [showTips, setShowTips] = useState(false);

  function handleAccept() {
    setAccepted(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setTimeout(onComplete, 1200);
  }

  return (
    <View style={cardStyles.fullCard}>
      <View style={[cardStyles.cardInner, { backgroundColor: colors.amberDim }]}>
        <View style={[uitdagingStyles.iconWrap, { backgroundColor: colors.amber + '18' }]}>
          <AppIcon name="target" size="lg" variant="featured" color={colors.amber} bgColor="transparent" iconSize={36} />
        </View>
        <Text style={[cardStyles.cardLabel, { color: colors.amber }]}>UITDAGING</Text>

        <Text style={[uitdagingStyles.title, { color: colors.text }]}>
          {stage.missionTitle || 'Jouw uitdaging'}
        </Text>

        {stage.missionDuration != null && (
          <View style={[uitdagingStyles.durationBadge, { backgroundColor: colors.amber + '18' }]}>
            <InlineIcon name="clock" size={14} color={colors.amber} />
            <Text style={[uitdagingStyles.durationText, { color: colors.amber }]}>{stage.missionDuration} min</Text>
          </View>
        )}

        {stage.missionInstructions && (
          <View style={[uitdagingStyles.instructionsCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <ParagraphText text={stage.missionInstructions} color={colors.text2} />
          </View>
        )}

        {stage.missionTips && stage.missionTips.length > 0 && (
          <View>
            <Pressable
              onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                setShowTips(!showTips);
              }}
              style={uitdagingStyles.tipsToggle}
            >
              <Text style={[uitdagingStyles.tipsToggleText, { color: colors.amber }]}>
                {showTips ? 'Verberg tips' : 'Bekijk tips'}
              </Text>
            </Pressable>
            {showTips && (
              <View style={[uitdagingStyles.tipsCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                {stage.missionTips.map((tip, i) => (
                  <View key={i} style={uitdagingStyles.tipRow}>
                    <Text style={[uitdagingStyles.tipBullet, { color: colors.amber }]}>{'\u2022'}</Text>
                    <Text style={[uitdagingStyles.tipText, { color: colors.text2 }]}>{tip}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}

        {!accepted ? (
          <Pressable
            onPress={handleAccept}
            style={[cardStyles.continueBtn, { backgroundColor: colors.amber, marginTop: 20 }]}
          >
            <Text style={cardStyles.continueBtnText}>Ik doe het!</Text>
            <InlineIcon name="flame" size={16} color="#fff" />
          </Pressable>
        ) : (
          <View style={uitdagingStyles.acceptedRow}>
            <InlineIcon name="checkCircle" size={20} color="#22C55E" />
            <Text style={uitdagingStyles.acceptedText}>Uitdaging geaccepteerd!</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const uitdagingStyles = StyleSheet.create({
  iconWrap: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 4,
  },
  title: { fontSize: 22, fontWeight: '800', textAlign: 'center', marginBottom: 12 },
  durationBadge: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 16,
  },
  durationText: { fontSize: 14, fontWeight: '700' },
  instructionsCard: { borderRadius: 14, borderWidth: 1, padding: 20, marginBottom: 8 },
  tipsToggle: { alignSelf: 'center', paddingVertical: 8 },
  tipsToggleText: { fontSize: 14, fontWeight: '700' },
  tipsCard: { borderRadius: 12, borderWidth: 1, padding: 16, marginTop: 8 },
  tipRow: { flexDirection: 'row', gap: 10, marginBottom: 8 },
  tipBullet: { fontSize: 16, marginTop: 1 },
  tipText: { fontSize: 14, lineHeight: 21, flex: 1 },
  acceptedRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 24 },
  acceptedText: { fontSize: 18, fontWeight: '800', color: '#22C55E' },
});

// ── SpiegelCard ─────────────────────────────────────────────────────────────
function SpiegelCard({
  stage,
  skillColor,
  onComplete,
  moduleId,
  moduleTitle,
  skill,
}: {
  stage: Stage;
  skillColor: string;
  onComplete: () => void;
  moduleId?: string;
  moduleTitle?: string;
  skill?: string;
}) {
  const { colors } = useTheme();
  const { addReflectionNote } = useStore();
  const [journal, setJournal] = useState('');

  function handleComplete() {
    if (journal.trim() && moduleId && stage.id && skill) {
      addReflectionNote({
        moduleId,
        moduleTitle: moduleTitle || '',
        skill,
        stageId: stage.id,
        question: stage.reflectionQuestion || 'Wat neem je mee?',
        note: journal.trim(),
        createdAt: new Date().toISOString(),
      });
    }
    onComplete();
  }

  return (
    <View style={cardStyles.fullCard}>
      <View style={[cardStyles.cardInner, { backgroundColor: colors.blueDim }]}>
        <View style={cardStyles.stageIcon}>
          <AppIcon name="compass" size="lg" variant="featured" color={colors.blue} bgColor={colors.blue + '12'} iconSize={24} />
        </View>
        <Text style={[cardStyles.cardLabel, { color: colors.blue }]}>EVEN STILSTAAN</Text>

        {stage.spiegelContext && (
          <Text style={[spiegelStyles.context, { color: colors.text3 }]}>{stage.spiegelContext}</Text>
        )}

        <Text style={[spiegelStyles.question, { color: colors.text }]}>
          {stage.reflectionQuestion || 'Wat neem je mee uit deze module?'}
        </Text>

        <TextInput
          style={[spiegelStyles.input, { color: colors.text, backgroundColor: colors.surface, borderColor: colors.border }]}
          placeholder="Schrijf hier je gedachten... (optioneel)"
          placeholderTextColor={colors.text3}
          multiline
          textAlignVertical="top"
          value={journal}
          onChangeText={setJournal}
        />
        {journal.trim().length > 0 && (
          <Text style={[spiegelStyles.savedHint, { color: colors.text3 }]}>
            Je notitie wordt opgeslagen bij het afronden
          </Text>
        )}

        {/* Extra vragen */}
        {stage.allQuestions && stage.allQuestions.length > 1 && (
          <View style={spiegelStyles.moreList}>
            <Text style={[spiegelStyles.moreLabel, { color: colors.text3 }]}>Meer om over na te denken:</Text>
            {stage.allQuestions.slice(1, 3).map((q, i) => (
              <Text key={i} style={[spiegelStyles.moreQuestion, { color: colors.text2 }]}>
                {'\u2022'} {q}
              </Text>
            ))}
          </View>
        )}

        <Pressable
          onPress={handleComplete}
          style={[cardStyles.continueBtn, { backgroundColor: colors.blue, marginTop: 20 }]}
        >
          <Text style={cardStyles.continueBtnText}>Afronden</Text>
          <InlineIcon name="arrowRight" size={16} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}

const spiegelStyles = StyleSheet.create({
  context: { fontSize: 13, fontWeight: '600', textAlign: 'center', marginBottom: 12, fontStyle: 'italic' },
  question: { fontSize: 20, fontWeight: '700', textAlign: 'center', lineHeight: 28, marginBottom: 20 },
  input: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    minHeight: 100,
    fontSize: 15,
    lineHeight: 22,
  },
  savedHint: { fontSize: 12, marginTop: 6, textAlign: 'center', fontStyle: 'italic' },
  moreList: { marginTop: 16, gap: 8 },
  moreLabel: { fontSize: 12, fontWeight: '700', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 4 },
  moreQuestion: { fontSize: 14, lineHeight: 21 },
});

// ── SamenvattingCard ────────────────────────────────────────────────────────
function SamenvattingCard({
  stage,
  skillColor,
  onComplete,
}: {
  stage: Stage;
  skillColor: string;
  onComplete: () => void;
}) {
  const { colors } = useTheme();
  const takeaways = stage.takeaways ?? [];

  return (
    <View style={cardStyles.fullCard}>
      <View style={[cardStyles.cardInner, { backgroundColor: skillColor + '08' }]}>
        <View style={cardStyles.stageIcon}>
          <AppIcon name="bookMarked" size="lg" variant="featured" color={skillColor} bgColor={skillColor + '12'} iconSize={24} />
        </View>
        <Text style={[cardStyles.cardLabel, { color: skillColor }]}>ONTHOUD DIT</Text>

        <View style={samenvattingStyles.takeawaysList}>
          {takeaways.map((t, i) => (
            <View key={i} style={[samenvattingStyles.takeawayRow, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <View style={[samenvattingStyles.checkCircle, { backgroundColor: skillColor + '15' }]}>
                <InlineIcon name="check" size={14} color={skillColor} />
              </View>
              <Text style={[samenvattingStyles.takeawayText, { color: colors.text }]}>{t}</Text>
            </View>
          ))}
        </View>

        {stage.researchRef && (
          <View style={[samenvattingStyles.researchCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <InlineIcon name="bookOpen" size={14} color={colors.text3} />
            <Text style={[samenvattingStyles.researchText, { color: colors.text3 }]}>{stage.researchRef}</Text>
          </View>
        )}

        <Pressable
          onPress={onComplete}
          style={[cardStyles.continueBtn, { backgroundColor: skillColor, marginTop: 20 }]}
        >
          <Text style={cardStyles.continueBtnText}>Module afronden</Text>
          <InlineIcon name="checkCircle" size={16} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}

const samenvattingStyles = StyleSheet.create({
  takeawaysList: { gap: 12, width: '100%' },
  takeawayRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  checkCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  takeawayText: { fontSize: 15, lineHeight: 22, fontWeight: '600', flex: 1 },
  researchCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 16,
  },
  researchText: { fontSize: 12, lineHeight: 18, flex: 1, fontStyle: 'italic' },
});

// ── Shared card styles ──────────────────────────────────────────────────────
const cardStyles = StyleSheet.create({
  fullCard: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  cardInner: {
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
  },
  stageIcon: {
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '500',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  herkenText: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
  },
  herkenButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  herkenBtn: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1.5,
    paddingVertical: 14,
    alignItems: 'center',
  },
  herkenBtnText: {
    fontSize: 15,
    fontWeight: '700',
  },
  herkenResponse: {
    borderRadius: 14,
    padding: 18,
    marginTop: 16,
  },
  herkenResponseText: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 22,
  },
  highlightBlock: {
    borderLeftWidth: 3,
    paddingLeft: 14,
    paddingVertical: 10,
    paddingRight: 8,
    marginBottom: 16,
    borderRadius: 6,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    alignSelf: 'stretch',
  },
  highlightText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '700',
    fontStyle: 'italic',
  },
  readMoreToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'center',
    paddingVertical: 10,
    marginTop: 8,
  },
  readMoreText: {
    fontSize: 14,
    fontWeight: '700',
  },
  continueBtn: {
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 24,
    alignSelf: 'stretch',
  },
  continueBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// ModuleCompletionScreen
// ─────────────────────────────────────────────────────────────────────────────

function ModuleCompletionScreen({
  moduleStages,
  skillColor,
  onNextModule,
  onBack,
  onReview,
  nextModuleTitle,
}: {
  moduleStages: ModuleStages;
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
          <AppIcon name="checkCircle" size="lg" variant="featured" color="#22C55E" bgColor="rgba(34,197,94,0.10)" iconSize={44} />
        </View>
        <Text style={[completeStyles.title, { color: colors.text }]}>Module Voltooid!</Text>
        <Text style={[completeStyles.moduleName, { color: skillColor }]}>{moduleStages.title}</Text>

        {/* XP summary */}
        <View style={[completeStyles.xpCard, { backgroundColor: '#F59E0B0D', borderColor: '#F59E0B30' }]}>
          <View style={completeStyles.xpIconRow}>
            <InlineIcon name="star" size={24} color="#F59E0B" />
            <Text style={completeStyles.xpValue}>+{moduleStages.totalXP} XP</Text>
          </View>
          <Text style={[completeStyles.xpLabel, { color: colors.text2 }]}>verdiend</Text>
        </View>

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

        {/* Probeer deze taken */}
        {(() => {
          const suggestedTasks = getTasksForModule(moduleStages.moduleId, moduleStages.skill);
          if (suggestedTasks.length === 0) return null;
          return (
            <View style={[completeStyles.takeawaysCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={[completeStyles.takeawaysTitle, { color: colors.text }]}>Probeer deze taken</Text>
              {suggestedTasks.map((t) => (
                <View key={t.id} style={completeStyles.takeawayRow}>
                  <View style={[completeStyles.takeawayDot, { backgroundColor: skillColor }]} />
                  <Text style={[completeStyles.takeawayText, { color: colors.text2 }]} numberOfLines={2}>{t.title}</Text>
                </View>
              ))}
            </View>
          );
        })()}

        {/* Buttons */}
        <View style={completeStyles.buttons}>
          {onNextModule && (
            <Pressable
              onPress={onNextModule}
              style={[completeStyles.primaryBtn, { backgroundColor: skillColor }]}
            >
              <View>
                <Text style={completeStyles.primaryBtnLabel}>Volgende Module</Text>
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
  bigCheckIcon: { marginBottom: 20 },
  title: { fontSize: 28, fontWeight: '900', marginBottom: 6, letterSpacing: -0.5 },
  moduleName: { fontSize: 16, fontWeight: '700', marginBottom: 28, textAlign: 'center' },
  xpCard: {
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 24,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  xpIconRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  xpValue: { fontSize: 34, fontWeight: '900', color: '#F59E0B', letterSpacing: -0.5 },
  xpLabel: { fontSize: 14, fontWeight: '600', marginTop: 4 },
  takeawaysCard: {
    borderRadius: 18,
    borderWidth: 1,
    padding: 22,
    width: '100%',
    marginBottom: 24,
  },
  takeawaysTitle: { fontSize: 16, fontWeight: '800', marginBottom: 16, letterSpacing: 0.3 },
  takeawayRow: { flexDirection: 'row', gap: 12, marginBottom: 12 },
  takeawayDot: { width: 6, height: 6, borderRadius: 3, marginTop: 8 },
  takeawayText: { fontSize: 14, lineHeight: 22, flex: 1 },
  buttons: { width: '100%', gap: 12 },
  primaryBtn: {
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  primaryBtnLabel: { color: 'rgba(255,255,255,0.75)', fontSize: 12, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 0.5 },
  primaryBtnTitle: { color: '#fff', fontSize: 16, fontWeight: '800', marginTop: 2 },
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
// Stage renderer — dispatches to the right card component
// ─────────────────────────────────────────────────────────────────────────────

function renderStage(
  stage: Stage,
  skillColor: string,
  onComplete: (xp: number) => void,
  moduleInfo: { moduleId: string; moduleTitle: string; skill: string },
) {
  switch (stage.type) {
    case 'herken':
      return <HerkenCard stage={stage} skillColor={skillColor} onComplete={() => onComplete(stage.xpReward)} />;
    case 'inzicht':
      return <InzichtCard stage={stage} skillColor={skillColor} onComplete={() => onComplete(stage.xpReward)} />;
    case 'wist_je_dat':
      return <WistJeDatCard stage={stage} skillColor={skillColor} onComplete={() => onComplete(stage.xpReward)} />;
    case 'diagram':
      return <DiagramCard stage={stage} skillColor={skillColor} onComplete={() => onComplete(stage.xpReward)} />;
    case 'keuze':
      return <KeuzeCard stage={stage} skillColor={skillColor} onComplete={(correct) => onComplete(stage.xpReward + (correct ? 5 : 0))} />;
    case 'strategie':
      return <StrategieCard stage={stage} skillColor={skillColor} onComplete={() => onComplete(stage.xpReward)} />;
    case 'uitdaging':
      return <UitdagingCard stage={stage} skillColor={skillColor} onComplete={() => onComplete(stage.xpReward)} />;
    case 'spiegel':
      return (
        <SpiegelCard
          stage={stage}
          skillColor={skillColor}
          onComplete={() => onComplete(stage.xpReward)}
          moduleId={moduleInfo.moduleId}
          moduleTitle={moduleInfo.moduleTitle}
          skill={moduleInfo.skill}
        />
      );
    case 'samenvatting':
      return <SamenvattingCard stage={stage} skillColor={skillColor} onComplete={() => onComplete(stage.xpReward)} />;
    // Legacy support for old stages
    case 'insight_cards':
    case 'scenario':
    case 'quiz':
    case 'video':
    case 'mission':
    case 'reflection':
      // Simple fallback: show a continue button
      return (
        <View style={cardStyles.fullCard}>
          <View style={[cardStyles.cardInner, { backgroundColor: skillColor + '08' }]}>
            <Text style={[cardStyles.cardLabel, { color: skillColor }]}>{stage.stageLabel}</Text>
            <Pressable
              onPress={() => onComplete(stage.xpReward)}
              style={[cardStyles.continueBtn, { backgroundColor: skillColor }]}
            >
              <Text style={cardStyles.continueBtnText}>Volgende</Text>
            </Pressable>
          </View>
        </View>
      );
    default:
      return null;
  }
}

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

  const activeThemes = useMemo(() => {
    const profile = store.profile;
    if (!profile) return [] as ThemeTag[];
    return resolveActiveThemes(profile);
  }, [store.profile]);

  // Transform module into discovery cards
  const moduleStages = useMemo(() => {
    if (!skill || !moduleId) return null;
    const mods = getLearningModulesForSkill(skill, activeThemes);
    const found = mods.find((m) => m.id === moduleId);
    if (!found) return null;
    return transformModuleToDiscoveryCards(found);
  }, [skill, moduleId, activeThemes]);

  // Stage navigation state
  const [stageIndex, setStageIndex] = useState(0);
  const [completedStageIds, setCompletedStageIds] = useState<string[]>([]);
  const [showCompletion, setShowCompletion] = useState(false);
  const [xpPopup, setXpPopup] = useState<{ xp: number; key: number } | null>(null);
  const [showSkillCompletion, setShowSkillCompletion] = useState(false);
  const [milestoneEvent, setMilestoneEvent] = useState<GamificationEvent | null>(null);
  const [reviewMode, setReviewMode] = useState(false);

  // Fade animation
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scrollRef = useRef<ScrollView>(null);
  const isAnimating = useRef(false);

  // Reset ALL state when moduleId changes
  useEffect(() => {
    setStageIndex(0);
    setCompletedStageIds([]);
    setShowCompletion(false);
    setXpPopup(null);
    fadeAnim.setValue(1);
    isAnimating.current = false;
  }, [moduleId]);

  // Load persisted progress (with migration from old _d{N} IDs to semantic IDs)
  useEffect(() => {
    if (!moduleId || !moduleStages) return;
    const progress = getStageProgress(moduleId);
    if (progress) {
      const migrated = migrateStageIds(progress.completedStageIds, moduleStages.stages, moduleId);
      setCompletedStageIds(migrated);
      if (progress.completedAt) {
        setShowCompletion(true);
      } else if (progress.currentStageIndex > 0) {
        setStageIndex(Math.min(progress.currentStageIndex, moduleStages.stages.length - 1));
      }
    }
  }, [moduleId, moduleStages]);

  // Animate stage transition
  function animateToStage(nextIndex: number) {
    if (isAnimating.current) return;
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

    // Review mode: navigate without XP
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

    // Show XP popup (only for interactive cards with XP)
    if (xpEarned > 0) {
      setXpPopup({ xp: xpEarned, key: Date.now() });
      setTimeout(() => setXpPopup(null), 2000);
    }

    // Check if all stages are done
    if (stageIndex >= moduleStages.stages.length - 1) {
      setTimeout(() => {
        setShowCompletion(true);
        markModuleComplete();
      }, 800);
    } else {
      setTimeout(() => animateToStage(stageIndex + 1), 300);
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
      const allMods = getLearningModulesForSkill(skill, activeThemes);
      if (completed.length >= allMods.length) {
        awardBonusXP(SKILL_MASTERY_BONUS_XP, skill);
        setTimeout(() => setShowSkillCompletion(true), 1200);
      }

      // Check for module milestone
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
        }, completed.length >= allMods.length ? 5000 : 1500);
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
    const mods = getLearningModulesForSkill(skill, activeThemes);
    const idx = mods.findIndex((m) => m.id === moduleId);
    return mods[idx + 1] ?? null;
  }, [skill, moduleId, activeThemes]);

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
    const allModuleTitles = getLearningModulesForSkill(skill, activeThemes).map((m) => m.title);
    const totalSkillXP = allModuleTitles.length * 30;
    const skillEmoji = SKILLS[skill]?.emoji || '';

    return (
      <SafeAreaView style={[mainStyles.safe, { backgroundColor: colors.bg }]}>
        <ModuleCompletionScreen
          moduleStages={moduleStages}
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

  // ── Card player ────────────────────────────────────────────────────────────
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

      {/* Header with back + progress bar + step count + close */}
      <View style={[mainStyles.headerBar, { borderBottomColor: colors.border }]}>
        <Pressable onPress={handleGoBack} style={mainStyles.backButton}>
          <InlineIcon name="arrowLeft" size={18} color={colors.text2} />
        </Pressable>
        <ProgressBar
          current={stageIndex}
          total={totalStages}
          skillColor={skillColor}
        />
        <Text style={[mainStyles.stepCount, { color: colors.text3 }]}>
          {stageIndex + 1}/{totalStages}
        </Text>
        <Pressable
          onPress={() => router.back()}
          style={[mainStyles.closeButton, { backgroundColor: colors.surface2 }]}
        >
          <InlineIcon name="x" size={18} color={colors.text2} />
        </Pressable>
      </View>

      {/* XP Popup */}
      {xpPopup && <XPPopup xp={xpPopup.xp} visible key={xpPopup.key} />}

      {/* Card content with fade animation */}
      <Animated.ScrollView
        ref={scrollRef as any}
        style={[mainStyles.stageScroll, { opacity: fadeAnim }]}
        contentContainerStyle={mainStyles.stageScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {currentStage && renderStage(currentStage, skillColor, handleStageComplete, {
          moduleId: moduleId || '',
          moduleTitle: moduleStages?.title || '',
          skill,
        })}

        {/* Vorige kaart knop */}
        {stageIndex > 0 && (
          <Pressable
            onPress={() => animateToStage(stageIndex - 1)}
            style={mainStyles.prevButton}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <InlineIcon name="arrowLeft" size={14} color={colors.text3} />
              <Text style={[mainStyles.prevButtonText, { color: colors.text3 }]}>
                Vorige
              </Text>
            </View>
          </Pressable>
        )}
      </Animated.ScrollView>
    </SafeAreaView>
  );
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
  closeButton: {
    marginLeft: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  backText: { fontSize: 18, fontWeight: '700' },
  stepCount: {
    fontSize: 13,
    fontWeight: '700',
    minWidth: 36,
    textAlign: 'right',
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
