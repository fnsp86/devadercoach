import React, { useMemo, useState, useRef, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Modal,
  TextInput,
  Animated,
  Keyboard,
  LayoutAnimation,
  Platform,
  UIManager,
  Alert,
  InteractionManager,
} from 'react-native';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}
import { AppIcon, InlineIcon, getSkillIcon } from '@/lib/icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { ALL_INTERACTIVE_TASKS } from '@/lib/interactive-tasks';
import { selectMixedWeekTasks, getWeekKey, getWeekNumber, ageToGroup } from '@/lib/week-selector';
import { PULSE_QUESTIONS } from '@/lib/pulse-questions';
import { BONUSKIND_PULSE_QUESTIONS } from '@/lib/themed-content-bonuskind';
import { GEDRAG_PULSE_QUESTIONS } from '@/lib/themed-content-gedrag';
import type { ThemeTag, CompletionStatus } from '@/lib/types';
import { getLevelFromXP, getComboMultiplier } from '@/lib/gamification-types';
import { getWijsheidVanDeDag } from '@/lib/vader-wijsheid';
import { checkAndUnlockBadges } from '@/lib/badge-checker';
import GamificationPopup from '@/components/GamificationPopup';
import type { GamificationEvent } from '@/components/GamificationPopup';
import { ALL_SKILLS } from '@/lib/skills';
import { doelenToSkills } from '@/lib/task-selector';
import { getWeeklyReflections } from '@/lib/week-selector';
import type { WeeklyReflection } from '@/lib/week-selector';
import type { InteractiveTask, Skill } from '@/lib/types';
import { resolveActiveThemes } from '@/lib/theme-resolver';
import WeeklyRecapModal from '@/components/WeeklyRecapModal';
import JournalEntryModal from '@/components/JournalEntryModal';
import { getModuleForTask } from '@/lib/task-module-map';
import { getTopRecommendedSkills } from '@/lib/skill-recommender';
import { SKILLS } from '@/lib/skills';
import { useAuth } from '@/lib/auth';
import { createStory } from '@/lib/supabase';

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function getTodayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function formatWeekRange(weekKey: string): string {
  const monday = new Date(weekKey + 'T00:00:00');
  const sunday = new Date(weekKey + 'T00:00:00');
  sunday.setDate(sunday.getDate() + 6);
  const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
  return `${monday.toLocaleDateString('nl-NL', opts)} – ${sunday.toLocaleDateString('nl-NL', opts)}`;
}

const DIFFICULTY_LABEL: Record<string, string> = {
  basis: 'Basis',
  gevorderd: 'Gevorderd',
  expert: 'Expert',
};

const DIFFICULTY_COLOR: Record<string, string> = {
  basis: '#34D399',
  gevorderd: '#FBBF24',
  expert: '#F87171',
};

const SKILL_COLOR: Record<Skill, string> = {
  Aanwezigheid: '#667eea',
  Emotiecoaching: '#EF4444',
  Zelfregulatie: '#34D399',
  Grenzen: '#FBBF24',
  Autonomie: '#A78BFA',
  Herstel: '#FB923C',
  Verbinding: '#60A5FA',
  Reflectie: '#C084FC',
};

function getDailyPulseQuestion(skills: Skill[], activeThemes: ThemeTag[] = []) {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

  // Elke 3e dag een themed pulse-vraag als themes actief zijn
  if (activeThemes.length > 0 && dayOfYear % 3 === 0) {
    const themedPool = [
      ...BONUSKIND_PULSE_QUESTIONS,
      ...GEDRAG_PULSE_QUESTIONS,
    ].filter((q) => q.themes?.some((t) => activeThemes.includes(t)));
    if (themedPool.length > 0) {
      return themedPool[dayOfYear % themedPool.length];
    }
  }

  const relevant = PULSE_QUESTIONS.filter((q) => skills.includes(q.skill));
  const pool = relevant.length > 0 ? relevant : PULSE_QUESTIONS;
  return pool[dayOfYear % pool.length];
}

// ─────────────────────────────────────────────────────────────────────────────
// WeekProgressBar
// ─────────────────────────────────────────────────────────────────────────────

function WeekProgressBar({ done, total, color }: { done: number; total: number; color: string }) {
  const { colors } = useTheme();
  const pct = total === 0 ? 0 : Math.min(done / total, 1);
  return (
    <View style={pbStyles.wrapper}>
      <View style={[pbStyles.track, { backgroundColor: colors.border }]}>
        <View style={[pbStyles.fill, { width: `${pct * 100}%`, backgroundColor: color }]} />
      </View>
      <Text style={[pbStyles.label, { color: colors.text2 }]}>{done}/{total}</Text>
    </View>
  );
}

const pbStyles = StyleSheet.create({
  wrapper: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  track: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: { height: '100%', borderRadius: 4 },
  label: { fontSize: 13, fontWeight: '700', minWidth: 30 },
});

// ─────────────────────────────────────────────────────────────────────────────
// TaskCard
// ─────────────────────────────────────────────────────────────────────────────

function TaskCard({
  task,
  done,
  outcome,
  onComplete,
  onUndo,
  relatedModule,
  onModulePress,
}: {
  task: InteractiveTask;
  done: boolean;
  outcome?: CompletionStatus;
  onComplete: () => void;
  onUndo: () => void;
  relatedModule?: { title: string; id: string; skill: Skill } | null;
  onModulePress?: (moduleId: string, skill: Skill) => void;
}) {
  const { colors } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const skillColor = SKILL_COLOR[task.skill] ?? '#667eea';
  const diffColor = DIFFICULTY_COLOR[task.difficulty] ?? '#FBBF24';
  const xp = (task as any).points ?? (task as any).xpReward ?? 10;

  // Afgeronde taken zijn standaard ingeklapt
  const toggle = () => { LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setExpanded((e) => !e); };

  // ── Collapsed done state: alleen titel + checkmark ──
  if (done && !expanded) {
    return (
      <Pressable
        onPress={toggle}
        style={[
          tcStyles.card,
          tcStyles.doneCardCollapsed,
          { backgroundColor: colors.surface, borderColor: skillColor },
        ]}
      >
        <InlineIcon name="checkCircle" size={18} color="#22C55E" />
        <Text style={[tcStyles.title, { color: colors.text3 }]} numberOfLines={1}>
          {task.title}
        </Text>
        {outcome && (
          <InlineIcon
            name={outcome === 'Gelukt' ? 'checkCircle' : outcome === 'Deels' ? 'alertTriangle' : 'xCircle'}
            size={14}
            color={outcome === 'Gelukt' ? '#22C55E' : outcome === 'Deels' ? '#FBBF24' : '#EF4444'}
          />
        )}
        <InlineIcon name="chevronDown" size={14} color={colors.text3} />
      </Pressable>
    );
  }

  // ── Full card (open taken, of afgeronde taken uitgeklapt) ──
  return (
    <View
      style={[
        tcStyles.card,
        {
          backgroundColor: colors.surface,
          borderColor: done ? skillColor : colors.border,
          borderWidth: done ? 2 : 1,
        },
      ]}
    >
      {/* Pills row — expandable header */}
      <Pressable onPress={toggle} style={[tcStyles.topRow, { backgroundColor: expanded ? skillColor + '08' : 'transparent', borderRadius: 10, marginHorizontal: -8, paddingHorizontal: 8 }]}>
        <View style={tcStyles.pills}>
          <View style={[tcStyles.pill, { backgroundColor: skillColor + '22' }]}>
            <Text style={[tcStyles.pillText, { color: skillColor }]}>{task.skill}</Text>
          </View>
          <View style={[tcStyles.pill, { backgroundColor: diffColor + '22' }]}>
            <Text style={[tcStyles.pillText, { color: diffColor }]}>
              {DIFFICULTY_LABEL[task.difficulty]}
            </Text>
          </View>
          <Text style={[tcStyles.xpText, { color: colors.text3 }]}>+{xp} XP</Text>
        </View>
        <View style={[tcStyles.chevronWrap, { backgroundColor: colors.surface2 }]}>
          <InlineIcon name={expanded ? 'chevronUp' : 'chevronDown'} size={16} color={colors.text2} />
        </View>
      </Pressable>

      <View style={tcStyles.titleRow}>
        {done ? (
          <InlineIcon name="checkCircle" size={20} color="#22C55E" />
        ) : (
          <View style={[tcStyles.checkCircle, { borderWidth: 2, borderColor: colors.border }]} />
        )}
        <Text style={[tcStyles.title, { color: done ? colors.text3 : colors.text }]}>
          {task.title}
        </Text>
      </View>
      <Text style={[tcStyles.desc, { color: colors.text2 }]}>{task.description}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
        <InlineIcon name="clock" size={12} color={colors.text3} />
        <Text style={[tcStyles.dur, { color: colors.text3 }]}>
          {(task as any).duration ?? `${(task as any).durationMin} min`}
        </Text>
      </View>

      {/* Expanded */}
      {expanded && (
        <View style={[tcStyles.expanded, { borderTopColor: colors.border }]}>
          {(task as any).instructions && (
            <View style={tcStyles.section}>
              <Text style={[tcStyles.sectionTitle, { color: colors.text }]}>Stappen</Text>
              {((task as any).instructions as string[]).map((step, i) => (
                <Text key={i} style={[tcStyles.step, { color: colors.text2 }]}>
                  {i + 1}. {step}
                </Text>
              ))}
            </View>
          )}
          {((task as any).psychologie || (task as any).scienceNote) && (
            <View style={[tcStyles.scienceBox, { backgroundColor: colors.surface2 }]}>
              <Text style={[tcStyles.sectionTitle, { color: colors.text }]}>Waarom werkt dit?</Text>
              <Text style={[tcStyles.bodyText, { color: colors.text2 }]}>
                {(task as any).psychologie ?? (task as any).scienceNote}
              </Text>
              {(task as any).bron && (
                <Text style={[tcStyles.bron, { color: colors.text3 }]}>{(task as any).bron}</Text>
              )}
            </View>
          )}
          {(task as any).reflection && (
            <View style={tcStyles.section}>
              <Text style={[tcStyles.sectionTitle, { color: colors.text }]}>Reflectie</Text>
              <Text style={[tcStyles.bodyText, { color: colors.text2 }]}>{(task as any).reflection}</Text>
            </View>
          )}
          {((task as any).skillTip || (task as any).vermijd) && (
            <View style={tcStyles.section}>
              {(task as any).skillTip && (
                <>
                  <Text style={[tcStyles.sectionTitle, { color: colors.text }]}>Tip</Text>
                  <Text style={[tcStyles.bodyText, { color: colors.text2 }]}>{(task as any).skillTip}</Text>
                </>
              )}
              {(task as any).vermijd && (
                <>
                  <Text style={[tcStyles.sectionTitle, { color: colors.text, marginTop: 8 }]}>Vermijd</Text>
                  <Text style={[tcStyles.bodyText, { color: colors.text2 }]}>{(task as any).vermijd}</Text>
                </>
              )}
            </View>
          )}
          {relatedModule && onModulePress && (
            <Pressable
              onPress={() => onModulePress(relatedModule.id, relatedModule.skill)}
              style={[tcStyles.moduleLink, { backgroundColor: skillColor + '10', borderColor: skillColor + '30' }]}
            >
              <InlineIcon name="bookOpen" size={14} color={skillColor} />
              <Text style={[tcStyles.moduleLinkText, { color: skillColor }]} numberOfLines={1}>
                {relatedModule.title}
              </Text>
              <InlineIcon name="arrowRight" size={12} color={skillColor} />
            </Pressable>
          )}
        </View>
      )}

      {/* Outcome indicator */}
      {done && outcome && (
        <View style={[tcStyles.outcomeBadge, {
          backgroundColor: outcome === 'Gelukt' ? '#22C55E18' : outcome === 'Deels' ? '#FBBF2418' : '#EF444418',
        }]}>
          <InlineIcon
            name={outcome === 'Gelukt' ? 'checkCircle' : outcome === 'Deels' ? 'alertTriangle' : 'xCircle'}
            size={14}
            color={outcome === 'Gelukt' ? '#22C55E' : outcome === 'Deels' ? '#FBBF24' : '#EF4444'}
          />
          <Text style={[tcStyles.outcomeText, {
            color: outcome === 'Gelukt' ? '#22C55E' : outcome === 'Deels' ? '#FBBF24' : '#EF4444',
          }]}>
            {outcome === 'Gelukt' ? 'Gelukt' : outcome === 'Deels' ? 'Deels gelukt' : 'Niet gelukt'}
          </Text>
        </View>
      )}

      {/* Action */}
      {done ? (
        <Pressable onPress={onUndo} style={[tcStyles.undoBtn, { borderColor: colors.border }]}>
          <Text style={[tcStyles.undoText, { color: colors.text3 }]}>Ongedaan maken</Text>
        </Pressable>
      ) : (
        <Pressable onPress={onComplete} style={[tcStyles.doneBtn, { backgroundColor: skillColor }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Text style={tcStyles.doneBtnText}>Afgerond</Text>
            <InlineIcon name="check" size={15} color="#fff" />
          </View>
        </Pressable>
      )}
    </View>
  );
}

const tcStyles = StyleSheet.create({
  card: { borderRadius: 14, padding: 14, marginBottom: 8 },
  doneCardCollapsed: { flexDirection: 'row' as const, alignItems: 'center' as const, gap: 10, borderWidth: 2, paddingVertical: 10 },
  doneOutcomeInline: { fontSize: 13, fontWeight: '700' as const },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6, minHeight: 36, paddingVertical: 3 },
  chevronWrap: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  pills: { flexDirection: 'row', alignItems: 'center', gap: 6, flexWrap: 'wrap' },
  pill: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  pillText: { fontSize: 11, fontWeight: '700' },
  xpText: { fontSize: 12, fontWeight: '600' },
  chevron: { fontSize: 11 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 6 },
  checkCircle: { width: 20, height: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  checkMark: { color: '#fff', fontSize: 14, fontWeight: '800' },
  title: { fontSize: 15, fontWeight: '700', flex: 1 },
  desc: { fontSize: 13, lineHeight: 18, marginBottom: 6 },
  dur: { fontSize: 12, marginBottom: 8 },
  expanded: { borderTopWidth: 1, paddingTop: 14, marginTop: 4 },
  section: { marginBottom: 14 },
  sectionTitle: { fontSize: 12, fontWeight: '700', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 },
  step: { fontSize: 14, lineHeight: 20, marginBottom: 4 },
  scienceBox: { borderRadius: 10, padding: 12, marginBottom: 14 },
  bodyText: { fontSize: 14, lineHeight: 20 },
  bron: { fontSize: 12, marginTop: 6, fontStyle: 'italic' },
  doneBtn: { borderRadius: 12, paddingVertical: 11, alignItems: 'center', marginTop: 4 },
  doneBtnText: { color: '#fff', fontSize: 14, fontWeight: '700' },
  undoBtn: { borderRadius: 12, paddingVertical: 10, alignItems: 'center', marginTop: 4, borderWidth: 1 },
  undoText: { fontSize: 14, fontWeight: '600' },
  outcomeBadge: { flexDirection: 'row' as const, alignItems: 'center' as const, alignSelf: 'flex-start' as const, gap: 6, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8, marginTop: 4, marginBottom: 4 },
  outcomeText: { fontSize: 13, fontWeight: '700' },
  moduleLink: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    gap: 8,
    marginTop: 12,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  moduleLinkText: { fontSize: 13, fontWeight: '600' as const, flex: 1 },
});


// ─────────────────────────────────────────────────────────────────────────────
// PulseModal
// ─────────────────────────────────────────────────────────────────────────────

function PulseModal({
  visible,
  onClose,
  skills,
  activeThemes = [],
}: {
  visible: boolean;
  onClose: () => void;
  skills: Skill[];
  activeThemes?: ThemeTag[];
}) {
  const { colors } = useTheme();
  const { addPulseCheckIn } = useStore();
  const [selected, setSelected] = useState<number | null>(null);
  const [showInsight, setShowInsight] = useState(false);
  const [notitie, setNotitie] = useState('');

  const question = useMemo(() => getDailyPulseQuestion(skills, activeThemes), [skills, activeThemes]);
  const skillColor = SKILL_COLOR[question.skill] ?? '#667eea';

  function handleAnswer(i: number) {
    if (showInsight) return;
    setSelected(i);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setShowInsight(true);
  }

  function handleSave() {
    if (selected === null) return;
    Keyboard.dismiss();
    addPulseCheckIn({
      date: getTodayKey(),
      questionId: question.id,
      antwoordIndex: selected,
      notitie: notitie.trim() || undefined,
    });
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setSelected(null);
    setShowInsight(false);
    setNotitie('');
    onClose();
  }

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      <SafeAreaView style={[pmStyles.safe, { backgroundColor: colors.bg }]}>
        <ScrollView contentContainerStyle={pmStyles.content} keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag">
          {/* Header */}
          <View style={[pmStyles.header, { backgroundColor: skillColor + '18', borderColor: skillColor + '40' }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <InlineIcon name="compass" size={14} color={skillColor} />
              <Text style={[pmStyles.headerLabel, { color: skillColor }]}>
                Vader Pulse · {question.skill}
              </Text>
            </View>
            <Pressable onPress={onClose} style={pmStyles.closeBtn}>
              <InlineIcon name="x" size={18} color={colors.text3} />
            </Pressable>
          </View>

          <Text style={[pmStyles.question, { color: colors.text }]}>{question.vraag}</Text>

          {/* Antwoorden */}
          <View style={pmStyles.answers}>
            {question.antwoorden.map((ant, i) => {
              const isSelected = selected === i;
              const isLast = i === 3;
              return (
                <Pressable
                  key={i}
                  onPress={() => handleAnswer(i)}
                  style={[
                    pmStyles.answer,
                    {
                      backgroundColor: isSelected ? skillColor + '22' : colors.surface,
                      borderColor: isSelected ? skillColor : colors.border,
                      borderWidth: isSelected ? 2 : 1,
                      opacity: showInsight && !isSelected ? 0.45 : 1,
                    },
                  ]}
                >
                  <Text style={pmStyles.bullet}>{isSelected ? '●' : isLast ? '—' : '○'}</Text>
                  <Text
                    style={[
                      pmStyles.answerText,
                      {
                        color: isSelected ? skillColor : isLast ? colors.text3 : colors.text,
                        fontWeight: isSelected ? '700' : '500',
                      },
                    ]}
                  >
                    {ant}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {/* Inzicht */}
          {showInsight && (
            <View style={[pmStyles.insight, { backgroundColor: skillColor + '14', borderColor: skillColor + '30' }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <InlineIcon name="lightbulb" size={13} color={skillColor} />
                <Text style={[pmStyles.insightTitle, { color: skillColor }]}>Inzicht</Text>
              </View>
              <Text style={[pmStyles.insightText, { color: colors.text }]}>{question.inzicht}</Text>
              <Text style={[pmStyles.insightBron, { color: colors.text3 }]}>{question.bron}</Text>

              <Text style={[pmStyles.notitieLabel, { color: colors.text2 }]}>Optioneel: schrijf één zin</Text>
              <TextInput
                style={[pmStyles.notitieInput, { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text }]}
                placeholder="Iets wat opviel vandaag..."
                placeholderTextColor={colors.text3}
                value={notitie}
                onChangeText={setNotitie}
                multiline
                blurOnSubmit
                returnKeyType="done"
                maxLength={200}
              />

              <Pressable onPress={handleSave} style={[pmStyles.saveBtn, { backgroundColor: skillColor }]}>
                <Text style={pmStyles.saveTxt}>Opslaan & sluiten</Text>
              </Pressable>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const pmStyles = StyleSheet.create({
  safe: { flex: 1 },
  content: { padding: 20, paddingBottom: 60 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 24,
  },
  headerLabel: { fontSize: 14, fontWeight: '700' },
  closeBtn: { padding: 4 },
  closeTxt: { fontSize: 18, fontWeight: '600' },
  question: { fontSize: 20, fontWeight: '700', lineHeight: 28, marginBottom: 24 },
  answers: { gap: 10, marginBottom: 24 },
  answer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 12,
    padding: 14,
    gap: 10,
  },
  bullet: { fontSize: 15, marginTop: 2 },
  answerText: { fontSize: 15, lineHeight: 21, flex: 1 },
  insight: { borderWidth: 1, borderRadius: 14, padding: 16 },
  insightTitle: { fontSize: 13, fontWeight: '800', marginBottom: 10, letterSpacing: 0.3 },
  insightText: { fontSize: 15, lineHeight: 22, marginBottom: 6 },
  insightBron: { fontSize: 12, fontStyle: 'italic', marginBottom: 16 },
  notitieLabel: { fontSize: 13, fontWeight: '600', marginBottom: 6 },
  notitieInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    minHeight: 60,
    marginBottom: 16,
  },
  saveBtn: { borderRadius: 12, paddingVertical: 14, alignItems: 'center' },
  saveTxt: { color: '#fff', fontSize: 15, fontWeight: '700' },
});

// ─────────────────────────────────────────────────────────────────────────────
// OutcomeModal ("Hoe ging het?")
// ─────────────────────────────────────────────────────────────────────────────

const OUTCOME_OPTIONS: { value: CompletionStatus; label: string; icon: string; color: string; sub: string }[] = [
  { value: 'Gelukt', label: 'Gelukt', icon: 'checkCircle', color: '#22C55E', sub: 'Ik heb het gedaan zoals beschreven' },
  { value: 'Deels', label: 'Deels gelukt', icon: 'alertTriangle', color: '#FBBF24', sub: 'Ik heb een poging gedaan' },
  { value: 'Niet', label: 'Niet gelukt', icon: 'xCircle', color: '#EF4444', sub: 'Kwam er niet van of het lukte niet' },
];

function OutcomeModal({
  visible,
  task,
  onSave,
  onClose,
}: {
  visible: boolean;
  task: InteractiveTask | null;
  onSave: (outcome: CompletionStatus, note?: string) => void;
  onClose: () => void;
}) {
  const { colors } = useTheme();
  const [selected, setSelected] = useState<CompletionStatus | null>(null);
  const [note, setNote] = useState('');

  // Reset bij nieuwe taak
  useEffect(() => {
    if (visible) {
      setSelected(null);
      setNote('');
    }
  }, [visible]);

  function handleSave() {
    if (!selected) return;
    Keyboard.dismiss();
    onSave(selected, note.trim() || undefined);
  }

  if (!task) return null;

  const skillColor = SKILL_COLOR[task.skill] ?? '#667eea';

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      <SafeAreaView style={[omStyles.safe, { backgroundColor: colors.bg }]}>
        <ScrollView contentContainerStyle={omStyles.content} keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag">
          {/* Header */}
          <View style={[omStyles.header, { backgroundColor: skillColor + '18', borderColor: skillColor + '40' }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <InlineIcon name="checkCircle" size={14} color={skillColor} />
              <Text style={[omStyles.headerLabel, { color: skillColor }]}>Hoe ging het?</Text>
            </View>
            <Pressable onPress={onClose} style={omStyles.closeBtn}>
              <InlineIcon name="x" size={18} color={colors.text3} />
            </Pressable>
          </View>

          <Text style={[omStyles.taskTitle, { color: colors.text }]}>{task.title}</Text>
          <Text style={[omStyles.question, { color: colors.text2 }]}>
            Hoe is deze oefening gegaan?
          </Text>
          <Text style={[omStyles.honesty, { color: colors.text3 }]}>
            Eerlijkheid levert +2 XP op — ongeacht het resultaat
          </Text>

          {/* Opties */}
          <View style={omStyles.options}>
            {OUTCOME_OPTIONS.map((opt) => {
              const isSelected = selected === opt.value;
              return (
                <Pressable
                  key={opt.value}
                  onPress={() => { setSelected(opt.value); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); }}
                  style={[
                    omStyles.option,
                    {
                      backgroundColor: isSelected ? opt.color + '18' : colors.surface,
                      borderColor: isSelected ? opt.color : colors.border,
                      borderWidth: isSelected ? 2 : 1,
                    },
                  ]}
                >
                  <View style={[omStyles.optionIcon, { backgroundColor: opt.color + '22' }]}>
                    <InlineIcon name={opt.icon as any} size={20} color={opt.color} />
                  </View>
                  <View style={omStyles.optionTextWrap}>
                    <Text style={[omStyles.optionLabel, { color: isSelected ? opt.color : colors.text }]}>
                      {opt.label}
                    </Text>
                    <Text style={[omStyles.optionSub, { color: colors.text3 }]}>{opt.sub}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>

          {/* Notitie */}
          {selected && (
            <View style={omStyles.noteSection}>
              <Text style={[omStyles.noteLabel, { color: colors.text2 }]}>Optioneel: kort notitie</Text>
              <TextInput
                style={[omStyles.noteInput, { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text }]}
                placeholder="Wat ging goed? Wat was lastig?"
                placeholderTextColor={colors.text3}
                value={note}
                onChangeText={setNote}
                multiline
                blurOnSubmit
                returnKeyType="done"
                maxLength={200}
              />
              <Pressable onPress={handleSave} style={[omStyles.saveBtn, { backgroundColor: skillColor }]}>
                <Text style={omStyles.saveTxt}>Opslaan</Text>
              </Pressable>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const omStyles = StyleSheet.create({
  safe: { flex: 1 },
  content: { padding: 20, paddingBottom: 60 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 24,
  },
  headerLabel: { fontSize: 14, fontWeight: '700' },
  closeBtn: { padding: 4 },
  taskTitle: { fontSize: 20, fontWeight: '700', marginBottom: 8 },
  question: { fontSize: 16, lineHeight: 22, marginBottom: 4 },
  honesty: { fontSize: 13, fontStyle: 'italic', marginBottom: 20 },
  options: { gap: 10, marginBottom: 20 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    padding: 14,
    gap: 12,
  },
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionEmoji: { fontSize: 18, fontWeight: '800' },
  optionTextWrap: { flex: 1 },
  optionLabel: { fontSize: 16, fontWeight: '700' },
  optionSub: { fontSize: 13, marginTop: 2 },
  noteSection: { marginTop: 4 },
  noteLabel: { fontSize: 13, fontWeight: '600', marginBottom: 6 },
  noteInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    minHeight: 60,
    marginBottom: 16,
  },
  saveBtn: { borderRadius: 12, paddingVertical: 14, alignItems: 'center' },
  saveTxt: { color: '#fff', fontSize: 15, fontWeight: '700' },
});

// ─────────────────────────────────────────────────────────────────────────────
// CelebrationToast
// ─────────────────────────────────────────────────────────────────────────────

interface ToastInfo {
  title: string;
  sub: string;
  color: string;
  icon: string;
  xp?: number;
}

function CelebrationToast({
  toast,
  onHide,
}: {
  toast: ToastInfo | null;
  onHide: () => void;
}) {
  const slideY = useRef(new Animated.Value(-120)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  React.useEffect(() => {
    if (!toast) return;
    slideY.setValue(-120);
    opacity.setValue(0);
    scaleAnim.setValue(0.8);
    // Slide in with spring
    Animated.parallel([
      Animated.spring(slideY, { toValue: 0, useNativeDriver: true, tension: 60, friction: 8 }),
      Animated.timing(opacity, { toValue: 1, duration: 250, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true, tension: 80, friction: 6 }),
    ]).start();
    // Auto-hide after 3s
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(slideY, { toValue: -120, duration: 350, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0, duration: 350, useNativeDriver: true }),
      ]).start(() => onHide());
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast, slideY, opacity, scaleAnim, onHide]);

  if (!toast) return null;

  return (
    <Animated.View
      style={[
        toastStyles.container,
        {
          opacity,
          transform: [{ translateY: slideY }, { scale: scaleAnim }],
        },
      ]}
    >
      {/* Achtergrond met gradient-effect */}
      <View style={[toastStyles.bg, { backgroundColor: toast.color }]} />
      <View style={toastStyles.content}>
        <View style={toastStyles.iconWrap}>
          <InlineIcon name={toast.icon} size={24} color="#fff" />
        </View>
        <View style={toastStyles.textWrap}>
          <Text style={toastStyles.title}>{toast.title}</Text>
          <Text style={toastStyles.sub}>{toast.sub}</Text>
        </View>
        {/* XP badge rechts */}
        {toast.xp != null && toast.xp > 0 && (
          <View style={toastStyles.xpBadge}>
            <Text style={toastStyles.xpText}>+{toast.xp}</Text>
            <Text style={toastStyles.xpLabel}>XP</Text>
          </View>
        )}
      </View>
    </Animated.View>
  );
}

const toastStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    left: 16,
    right: 16,
    borderRadius: 20,
    overflow: 'hidden',
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  bg: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.95,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 14,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: { fontSize: 24 },
  textWrap: { flex: 1 },
  title: { color: '#fff', fontSize: 16, fontWeight: '800', letterSpacing: 0.2 },
  sub: { color: 'rgba(255,255,255,0.85)', fontSize: 13, marginTop: 3, fontWeight: '500' },
  xpBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.35)',
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: 'center',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 4,
  },
  xpText: { color: '#fff', fontSize: 20, fontWeight: '900' },
  xpLabel: { color: 'rgba(255,255,255,0.8)', fontSize: 10, fontWeight: '800', letterSpacing: 1.5 },
});

// ─────────────────────────────────────────────────────────────────────────────
// Task celebration messages
// ─────────────────────────────────────────────────────────────────────────────

const TASK_CELEBRATIONS = [
  { title: 'Goed bezig!', icon: 'star' as const, sub: 'Elke stap telt' },
  { title: 'Sterke zet!', icon: 'star' as const, sub: 'Je kind merkt het verschil' },
  { title: 'Geweldig!', icon: 'flame' as const, sub: 'Je groeit als vader' },
  { title: 'Top gedaan!', icon: 'target' as const, sub: 'Consistentie is de sleutel' },
  { title: 'Respect!', icon: 'thumbsUp' as const, sub: 'Je investeert in jullie band' },
  { title: 'Held!', icon: 'shield' as const, sub: 'Je kind heeft geluk met jou' },
  { title: 'Klasse!', icon: 'zap' as const, sub: 'Nog een stap vooruit' },
  { title: 'Knap!', icon: 'trophy' as const, sub: 'Bewust vaderschap in actie' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Main Screen
// ─────────────────────────────────────────────────────────────────────────────

export default function WeekScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const store = useStore();
  const { user } = useAuth();
  const {
    profile,
    completeWeekTask,
    undoWeekTask,
    isWeekTaskDone,
    getWeekTasksDone,
    getTodayPulse,
    consecutiveActiveDays,
    recordActiveDay,
    weekTaskCompletions,
    addTaskOutcome,
    getTaskOutcome,
    isRecapSeen,
    taskOutcomes,
    pulseCheckIns,
    stageProgress,
  } = store;

  const [pulseVisible, setPulseVisible] = useState(false);
  const [recapVisible, setRecapVisible] = useState(false);
  const [recapWeekKey, setRecapWeekKey] = useState('');
  const [journalVisible, setJournalVisible] = useState(false);
  const [outcomeVisible, setOutcomeVisible] = useState(false);
  const [outcomeTask, setOutcomeTask] = useState<InteractiveTask | null>(null);
  const [toast, setToast] = useState<ToastInfo | null>(null);
  const [gamificationEvent, setGamificationEvent] = useState<GamificationEvent | null>(null);
  const [expandedReflection, setExpandedReflection] = useState<string | null>(null);
  const [sharePrompt, setSharePrompt] = useState<{ task: InteractiveTask; outcome: CompletionStatus; note?: string } | null>(null);
  const [shareText, setShareText] = useState('');
  const [sharePosting, setSharePosting] = useState(false);

  // Track pending timeouts so we can cancel them on undo/re-complete
  const pendingTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const clearPendingTimers = useCallback(() => {
    pendingTimers.current.forEach(clearTimeout);
    pendingTimers.current = [];
  }, []);

  const weekKey = useMemo(() => getWeekKey(), []);
  const todayPulse = getTodayPulse();

  // Alle skills actief
  const skills: Skill[] = ALL_SKILLS;

  // Leeftijdsgroepen
  const ageGroups = useMemo(() => {
    if (profile?.children && profile.children.length > 0) {
      return [...new Set(profile.children.map((c) => ageToGroup(c.age)))];
    }
    if (profile?.ageGroup) return [profile.ageGroup];
    return ['6-9' as const];
  }, [profile]);

  // Actieve thema's (bonuskind, ADHD, etc.)
  const activeThemes = useMemo(() => {
    if (!profile) return [];
    return resolveActiveThemes(profile);
  }, [profile]);

  // Skills afgeleid van doelen — voor taak-boosting
  const doelSkills = useMemo(() => {
    if (!profile?.doelen || profile.doelen.length === 0) return [];
    return doelenToSkills(profile.doelen);
  }, [profile?.doelen]);

  // Skill aanbeveling — subtiele tip in hero area
  const topRec = useMemo(() => {
    const recs = getTopRecommendedSkills({
      doelen: profile?.doelen,
      taskOutcomes,
      weekTaskCompletions,
      pulseCheckIns,
      stageProgress,
    }, 1);
    return recs.length > 0 && recs[0].score > 0 ? recs[0] : null;
  }, [profile?.doelen, taskOutcomes, weekTaskCompletions, pulseCheckIns, stageProgress]);

  // Weeknummer voor progressie
  const weekNumber = useMemo(() => {
    if (!profile?.startDate) return 1;
    return getWeekNumber(weekKey, profile.startDate);
  }, [weekKey, profile]);

  // Verzamel alle voltooide taak-IDs (excl. reflecties en huidige week)
  const completedTaskIds = useMemo(() => {
    return weekTaskCompletions
      .filter((c) => c.weekKey !== weekKey && !/^refl_\d{4}-/.test(c.taskId))
      .map((c) => c.taskId);
  }, [weekTaskCompletions, weekKey]);

  // 7 taken per week — gecached per weekKey zodat ze niet mid-week wijzigen
  // bij profielwijzigingen (bijv. gedragsproblemen toevoegen).
  // Nieuwe themes gaan pas in bij de volgende weekselectie.
  const WEEK_TASKS_CACHE_KEY = 'vc-week-tasks-cache';
  const [weekTasks, setWeekTasks] = useState<typeof ALL_INTERACTIVE_TASKS>([]);
  const weekTasksInitialized = useRef(false);

  useEffect(() => {
    if (!profile) return; // wacht op hydration

    (async () => {
      try {
        const raw = await AsyncStorage.getItem(WEEK_TASKS_CACHE_KEY);
        if (raw) {
          const cached: { weekKey: string; taskIds: string[] } = JSON.parse(raw);
          if (cached.weekKey === weekKey && cached.taskIds.length > 0) {
            // Zelfde week — gebruik gecachede taken
            const taskMap = new Map(ALL_INTERACTIVE_TASKS.map((t) => [t.id, t]));
            const restored = cached.taskIds.map((id) => taskMap.get(id)).filter(Boolean) as typeof ALL_INTERACTIVE_TASKS;
            if (restored.length > 0) {
              setWeekTasks(restored);
              weekTasksInitialized.current = true;
              return;
            }
          }
        }
      } catch {}

      // Geen cache of nieuwe week — bereken en sla op
      const computed = selectMixedWeekTasks(
        ALL_INTERACTIVE_TASKS, ageGroups, skills, weekKey, weekNumber, completedTaskIds, activeThemes, doelSkills, topRec?.skill,
      ).tasks;
      setWeekTasks(computed);
      weekTasksInitialized.current = true;
      AsyncStorage.setItem(
        WEEK_TASKS_CACHE_KEY,
        JSON.stringify({ weekKey, taskIds: computed.map((t) => t.id) }),
      ).catch(() => {});
    })();
  }, [weekKey, profile]); // Bij nieuwe week, eerste hydration, of account switch (profile ref verandert)

  // ── Weekly Recap auto-trigger ──
  // Op zondag: recap voor huidige week. Op maandag: recap voor vorige week.
  useEffect(() => {
    if (!profile) return;
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0=Sun
    let targetWeek: string | null = null;

    if (dayOfWeek === 0) {
      // Zondag — recap huidige week
      targetWeek = weekKey;
    } else if (dayOfWeek === 1) {
      // Maandag — recap vorige week
      const prevMonday = new Date(today);
      prevMonday.setDate(prevMonday.getDate() - 7);
      const y = prevMonday.getFullYear();
      const m = String(prevMonday.getMonth() + 1).padStart(2, '0');
      const d = String(prevMonday.getDate()).padStart(2, '0');
      targetWeek = `${y}-${m}-${d}`;
    }

    if (targetWeek && !isRecapSeen(targetWeek)) {
      const hasCompletions = weekTaskCompletions.some((c) => c.weekKey === targetWeek);
      if (hasCompletions) {
        setRecapWeekKey(targetWeek);
        setRecapVisible(true);
      }
    }
  }, [profile, weekKey]);

  const weekTaskIds = useMemo(() => new Set(weekTasks.map(t => t.id)), [weekTasks]);

  // Open taken bovenaan, afgeronde taken onderaan
  const sortedTasks = useMemo(() => {
    return [...weekTasks].sort((a, b) => {
      const aDone = isWeekTaskDone(a.id, weekKey) ? 1 : 0;
      const bDone = isWeekTaskDone(b.id, weekKey) ? 1 : 0;
      return aDone - bDone;
    });
  }, [weekTasks, weekTaskCompletions, weekKey]);

  const doneTasks = getWeekTasksDone(weekKey).filter(c => weekTaskIds.has(c.taskId));
  const doneCount = doneTasks.length;
  const weekComplete = doneCount >= 7;
  const weekXP = doneTasks.reduce((sum, c) => sum + c.points, 0);
  const bonusXP = weekComplete ? 50 : 0;

  // Combo multiplier
  const combo = useMemo(() => getComboMultiplier(consecutiveActiveDays), [consecutiveActiveDays]);

  // Level + daily wisdom
  const totalXP = useMemo(() => weekTaskCompletions.reduce((sum, c) => sum + c.points, 0), [weekTaskCompletions]);
  const currentLevel = useMemo(() => getLevelFromXP(totalXP), [totalXP]);
  const wijsheid = useMemo(() => currentLevel.level >= 2 ? getWijsheidVanDeDag(getTodayKey()) : null, [currentLevel.level]);

  // Wekelijkse reflectievragen
  const weeklyReflections = useMemo(() => getWeeklyReflections(skills, weekKey), [skills, weekKey]);
  const totalReflectionXP = useMemo(() => weeklyReflections.reduce((sum, r) => sum + r.xpReward, 0), [weeklyReflections]);

  // Reflectie completion handler
  const handleReflectionComplete = useCallback((r: WeeklyReflection) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const xp = Math.round(r.xpReward * combo.multiplier);
    completeWeekTask(r.id, weekKey, xp);
    recordActiveDay();
    setToast({
      title: 'Reflectie afgerond!',
      sub: 'Nadenken = groeien',
      color: '#A78BFA',
      icon: 'brain',
      xp,
    });

    // Check badges after reflection (defer to avoid UI freeze)
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
        const newBadges = checkAndUnlockBadges(store, { source: 'task' });
        if (newBadges.length > 0) {
          setGamificationEvent({ type: 'badge', badge: newBadges[0] });
        }
      }, 500);
    });
  }, [combo.multiplier, completeWeekTask, weekKey, recordActiveDay, store]);

  // Toon OutcomeModal in plaats van direct afronden
  const handleComplete = useCallback((task: InteractiveTask) => {
    clearPendingTimers();
    setSharePrompt(null);
    setOutcomeTask(task);
    setOutcomeVisible(true);
  }, [clearPendingTimers]);

  // Wordt aangeroepen vanuit OutcomeModal na keuze
  const handleOutcomeSave = useCallback((outcome: CompletionStatus, note?: string) => {
    const task = outcomeTask;
    if (!task) return;

    setOutcomeVisible(false);
    setOutcomeTask(null);

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    recordActiveDay();
    const baseXp = (task as any).points ?? (task as any).xpReward ?? 10;
    const xp = Math.round(baseXp * combo.multiplier);

    // Sla outcome op
    addTaskOutcome({
      taskId: task.id,
      weekKey,
      outcome,
      skill: task.skill,
      note,
      createdAt: new Date().toISOString(),
    });

    // Compute XP before and after to detect level-up
    const completionsBefore = getWeekTasksDone(weekKey).filter(c => weekTaskIds.has(c.taskId));
    const xpBefore = completionsBefore.reduce((s, c) => s + c.points, 0);

    const tasksPerWeekBefore: Record<string, number> = {};
    completionsBefore.forEach((c) => {
      tasksPerWeekBefore[c.weekKey] = (tasksPerWeekBefore[c.weekKey] || 0) + 1;
    });
    const completedWeeksBefore = Object.values(tasksPerWeekBefore).filter((n) => n >= 7).length;
    const weekBonusBefore = completedWeeksBefore * 50;
    const totalXpBefore = xpBefore + weekBonusBefore;

    completeWeekTask(task.id, weekKey, xp);

    const newDoneCount = completionsBefore.length + 1;
    const skillColor = SKILL_COLOR[task.skill] ?? '#667eea';

    // Toast met outcome feedback
    const outcomeEmoji = outcome === 'Gelukt' ? 'Goed bezig!' : outcome === 'Deels' ? 'Sterk!' : 'Eerlijk!';
    if (newDoneCount >= 7) {
      setToast({ title: 'Week voltooid!', sub: `Weekbonus verdiend · Geweldig gedaan!`, color: '#D97706', icon: 'trophy', xp: 50 });
    } else {
      const celebration = TASK_CELEBRATIONS[newDoneCount % TASK_CELEBRATIONS.length];
      setToast({ title: outcomeEmoji, sub: `${celebration.sub} · nog ${7 - newDoneCount} te gaan`, color: skillColor, icon: celebration.icon, xp });
    }

    // Detect level-up or badge unlock after UI has settled
    clearPendingTimers();
    InteractionManager.runAfterInteractions(() => {
      pendingTimers.current.push(
        setTimeout(() => {
          const weekBonus = newDoneCount >= 7 ? 50 : 0;
          const totalXpAfter = xpBefore + xp + weekBonusBefore + weekBonus;
          const levelBefore = getLevelFromXP(totalXpBefore);
          const levelAfter = getLevelFromXP(totalXpAfter);

          if (levelAfter.level > levelBefore.level) {
            setGamificationEvent({ type: 'levelup', level: levelAfter.level, title: levelAfter.title });
            return;
          }

          const newBadges = checkAndUnlockBadges(store, { source: 'task' });
          if (newBadges.length > 0) {
            setGamificationEvent({ type: 'badge', badge: newBadges[0] });
          }
        }, 500),
      );

      // Show share prompt only on 1st and 7th (last) task of the week
      if (newDoneCount === 1 || newDoneCount >= 7) {
        pendingTimers.current.push(
          setTimeout(() => {
            setSharePrompt({ task, outcome, note });
          }, 3000),
        );
      }
    });
  }, [outcomeTask, completeWeekTask, addTaskOutcome, weekKey, getWeekTasksDone, weekTaskIds, combo.multiplier, recordActiveDay, store, clearPendingTimers]);

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <LinearGradient colors={[colors.surface2, colors.bg]} style={s.hero}>
          <View style={s.heroTop}>
            <View>
              <Text style={[s.heroWeekLabel, { color: colors.text3 }]}>Week {weekNumber}</Text>
              <Text style={[s.heroRange, { color: colors.text2 }]}>{formatWeekRange(weekKey)}</Text>
            </View>
            <View style={[s.xpBadge, { backgroundColor: colors.amberDim, borderColor: colors.amber + '40' }]}>
              <Text style={[s.xpBadgeText, { color: colors.amber }]}>
                {weekXP}{weekComplete ? ` +${bonusXP}` : ''} XP
              </Text>
            </View>
          </View>

          {weekComplete ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <InlineIcon name="trophy" size={22} color={colors.amber} />
              <Text style={[s.heroTitle, { color: colors.text }]}>Week voltooid!</Text>
            </View>
          ) : (
            <Text style={[s.heroTitle, { color: colors.text }]}>{doneCount} van 7 taken gedaan</Text>
          )}

          {combo.multiplier > 1 && (
            <View style={[s.comboBadge, { backgroundColor: colors.amberDim }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <InlineIcon name="flame" size={13} color={colors.amber} />
                <Text style={[s.comboText, { color: colors.amber }]}>{combo.label} XP Combo · {consecutiveActiveDays} dagen actief</Text>
              </View>
            </View>
          )}

          <WeekProgressBar done={doneCount} total={7} color={colors.amber} />

          {topRec && (
            <View style={[s.skillTip, { backgroundColor: SKILL_COLOR[topRec.skill] + '12' }]}>
              <InlineIcon name={getSkillIcon(topRec.skill)} size={14} color={SKILL_COLOR[topRec.skill]} />
              <Text style={[s.skillTipText, { color: colors.text2 }]}>
                <Text style={{ fontWeight: '700', color: SKILL_COLOR[topRec.skill] }}>{topRec.skill}</Text>
                {' · '}{SKILLS[topRec.skill].microTip}
              </Text>
            </View>
          )}

          <View style={s.heroBottom}>
            <Text style={[s.heroBottomText, { color: colors.text3 }]}>
              {weekComplete ? 'Alle taken afgerond!' : `Nog ${7 - doneCount} te gaan · doe ze in je eigen tempo`}
            </Text>
            {weekComplete && <Text style={[s.heroBonus, { color: colors.amber }]}>+{bonusXP} XP weekbonus</Text>}
          </View>
        </LinearGradient>

        {/* ── Vader Wijsheid (Level 2+) ──────────────────────────────── */}
        {wijsheid && (
          <View style={[s.wijsheidCard, { backgroundColor: colors.amber + '08', borderLeftColor: colors.amber }]}>
            <InlineIcon name="messageCircle" size={14} color={colors.amber} />
            <Text style={[s.wijsheidText, { color: colors.text }]}>"{wijsheid.text}"</Text>
            {wijsheid.bron && (
              <Text style={[s.wijsheidBron, { color: colors.text3 }]}>— {wijsheid.bron}</Text>
            )}
          </View>
        )}

        {/* ── Vader Pulse ───────────────────────────────────────────────── */}
        <Pressable
          onPress={() => !todayPulse && setPulseVisible(true)}
          style={[
            s.pulseCard,
            {
              backgroundColor: todayPulse ? colors.surface : colors.surface2,
              borderColor: todayPulse ? colors.border : colors.amber,
              borderWidth: todayPulse ? 1 : 2,
            },
          ]}
        >
          <View style={s.pulseLeft}>
            <View style={s.pulseEmojiWrap}>
              {todayPulse ? (
                <InlineIcon name="checkCircle" size={22} color={colors.success} />
              ) : (
                <InlineIcon name="compass" size={22} color={colors.amber} />
              )}
            </View>
            <View>
              <Text style={[s.pulseTitle, { color: todayPulse ? colors.text3 : colors.text }]}>
                {todayPulse ? 'Vader Pulse gedaan' : 'Vader Pulse · dagelijkse check-in'}
              </Text>
              <Text style={[s.pulseSub, { color: todayPulse ? colors.text3 : colors.text2 }]}>
                {todayPulse
                  ? 'Je streak blijft intact'
                  : 'Één vraag · één inzicht · 20 seconden'}
              </Text>
            </View>
          </View>
          {!todayPulse && (
            <View style={[s.pulseArrow, { backgroundColor: colors.amber }]}>
              <InlineIcon name="arrowRight" size={16} color="#000" />
            </View>
          )}
        </Pressable>

        {/* ── Taken ────────────────────────────────────────────────────── */}
        <View style={s.tasksSection}>
          <Text style={[s.tasksSectionTitle, { color: colors.text }]}>Jouw weektaken</Text>
          <Text style={[s.tasksSectionSub, { color: colors.text3 }]}>
            Kies vrij – doe ze wanneer het uitkomt
          </Text>

          {sortedTasks.map((task) => {
            const mod = getModuleForTask(task, activeThemes);
            return (
              <TaskCard
                key={task.id}
                task={task}
                done={isWeekTaskDone(task.id, weekKey)}
                outcome={getTaskOutcome(task.id, weekKey)?.outcome}
                onComplete={() => handleComplete(task)}
                onUndo={() => { clearPendingTimers(); setSharePrompt(null); undoWeekTask(task.id, weekKey); }}
                relatedModule={mod ? { title: mod.title, id: mod.id, skill: mod.skill } : null}
                onModulePress={(moduleId, skill) => router.push(`/(tabs)/leren/module?skill=${skill}&moduleId=${moduleId}` as any)}
              />
            );
          })}

          {/* Reflectie van de week */}
          {weeklyReflections.length > 0 && (
            <View style={[s.bonusCard, { backgroundColor: colors.surface, borderColor: '#A78BFA20' }]}>
              <View style={s.bonusHeader}>
                <InlineIcon name="brain" size={22} color="#A78BFA" />
                <Text style={[s.bonusTitle, { color: colors.text }]}>Reflectie van de week</Text>
                <View style={[s.bonusXpBadge, { backgroundColor: '#A78BFA15' }]}>
                  <Text style={s.bonusXpBadgeText}>+{totalReflectionXP} XP</Text>
                </View>
              </View>
              {weeklyReflections.map((r) => {
                const done = isWeekTaskDone(r.id, weekKey);
                const isExpanded = expandedReflection === r.id;
                return (
                  <View key={r.id}>
                    <Pressable
                      onPress={() => { LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setExpandedReflection(isExpanded ? null : r.id); }}
                      style={s.bonusRow}
                    >
                      <View style={s.bonusCheckWrap}>
                        {done ? (
                          <InlineIcon name="checkCircle" size={16} color="#22C55E" />
                        ) : (
                          <Text style={s.bonusCheck}>{'○'}</Text>
                        )}
                      </View>
                      <Text
                        style={[
                          s.bonusRowTitle,
                          { color: done ? colors.text3 : colors.text },
                          done && { textDecorationLine: 'line-through' as const },
                        ]}
                        numberOfLines={isExpanded ? undefined : 2}
                      >
                        {r.question}
                      </Text>
                      <View style={[s.chevronWrap, { backgroundColor: done ? colors.surface2 : '#A78BFA15' }]}>
                        <InlineIcon name={isExpanded ? 'chevronUp' : 'chevronDown'} size={16} color={done ? colors.text3 : '#A78BFA'} />
                      </View>
                    </Pressable>
                    {isExpanded && (
                      <View style={[s.reflExpanded, { backgroundColor: colors.surface2 }]}>
                        <View style={s.reflMeta}>
                          <View style={[s.reflSkillBadge, { backgroundColor: '#A78BFA22' }]}>
                            <Text style={[s.reflSkillText, { color: '#A78BFA' }]}>{r.skill}</Text>
                          </View>
                          <Text style={[s.reflSource, { color: colors.text3 }]}>{r.sourceModuleTitle}</Text>
                        </View>
                        {!done && (
                          <Pressable
                            onPress={() => handleReflectionComplete(r)}
                            style={[s.reflDoneBtn, { backgroundColor: '#A78BFA' }]}
                          >
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
                              <Text style={s.reflDoneBtnText}>Afgerond</Text>
                              <InlineIcon name="check" size={14} color="#fff" />
                              <Text style={s.reflDoneBtnText}> +{r.xpReward} XP</Text>
                            </View>
                          </Pressable>
                        )}
                      </View>
                    )}
                  </View>
                );
              })}
              <Text style={[s.bonusFooter, { color: colors.text3 }]}>Nadenken = groeien</Text>
            </View>
          )}

          {/* Leer-reminder banner */}
          <Pressable
            onPress={() => router.push('/(tabs)/leren' as any)}
            style={[s.learnBanner, { backgroundColor: colors.amber + '15', borderColor: colors.amber + '40' }]}
          >
            <InlineIcon name="bookMarked" size={28} color={colors.amber} />
            <View style={s.learnBannerTextWrap}>
              <Text style={[s.learnBannerTitle, { color: colors.text }]}>Leer je vaardigheden</Text>
              <Text style={[s.learnBannerSub, { color: colors.text3 }]}>
                Ontdek modules met inzichten, scenario's en oefeningen
              </Text>
            </View>
            <InlineIcon name="arrowRight" size={20} color={colors.amber} />
          </Pressable>
        </View>

        {/* ── Week complete banner ─────────────────────────────────────── */}
        {weekComplete && (
          <Pressable
            onPress={() => router.push('/(tabs)/profiel/weken')}
            style={[s.completeBanner, { backgroundColor: colors.amber + '20', borderColor: colors.amber }]}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <InlineIcon name="trophy" size={30} color={colors.amber} />
              <View>
                <Text style={[s.completeBannerTitle, { color: colors.amber }]}>Week voltooid!</Text>
                <Text style={[s.completeBannerSub, { color: colors.text2 }]}>
                  +{bonusXP} XP bonus · Bekijk weekoverzicht
                </Text>
              </View>
            </View>
            <InlineIcon name="arrowRight" size={20} color={colors.amber} />
          </Pressable>
        )}

        {/* ── Win van de dag ─────────────────────────────────────────── */}
        <Pressable
          onPress={() => setJournalVisible(true)}
          style={[s.journalCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
        >
          <View style={[s.journalIcon, { backgroundColor: colors.amberDim }]}>
            <InlineIcon name="fileText" size={18} color={colors.amber} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[s.journalTitle, { color: colors.text }]}>Win van de dag</Text>
            <Text style={[s.journalSub, { color: colors.text3 }]}>Schrijf op wat goed ging · +5 XP</Text>
          </View>
          <InlineIcon name="chevronRight" size={16} color={colors.text3} />
        </Pressable>

        {/* ── Info (verberg na week 2) ─────────────────────────────── */}
        {weekNumber <= 2 && <View style={[s.infoCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <InlineIcon name="info" size={14} color={colors.text} />
            <Text style={[s.infoTitle, { color: colors.text, marginBottom: 0 }]}>Hoe werkt dit?</Text>
          </View>
          <Text style={[s.infoText, { color: colors.text2 }]}>
            7 taken per week, te doen wanneer het jou uitkomt. De moeilijkheid bouwt op: 2 basis, 3 gevorderd, 2 expert. Elke week nieuwe taken passend bij jouw kinderen en vaardigheden.
          </Text>
          <Text style={[s.infoText, { color: colors.text2, marginTop: 8 }]}>
            Doe elke dag de Vader Pulse check-in (20 sec) om je streak te bewaren en dagelijks een nieuw inzicht te leren.
          </Text>
        </View>}

      </ScrollView>

      <PulseModal visible={pulseVisible} onClose={() => setPulseVisible(false)} skills={skills} activeThemes={activeThemes} />
      <OutcomeModal
        visible={outcomeVisible}
        task={outcomeTask}
        onSave={handleOutcomeSave}
        onClose={() => { setOutcomeVisible(false); setOutcomeTask(null); }}
      />
      <CelebrationToast toast={toast} onHide={() => setToast(null)} />
      <GamificationPopup event={gamificationEvent} onDismiss={() => setGamificationEvent(null)} />
      <JournalEntryModal visible={journalVisible} onClose={() => setJournalVisible(false)} />
      {recapWeekKey !== '' && (
        <WeeklyRecapModal
          visible={recapVisible}
          weekKey={recapWeekKey}
          onClose={() => setRecapVisible(false)}
        />
      )}

      {/* Share prompt after task completion */}
      {sharePrompt && (
        <Modal
          visible
          animationType="slide"
          transparent
          onRequestClose={() => { setSharePrompt(null); setShareText(''); }}
          onShow={() => {
            const outcomeLabel = sharePrompt.outcome === 'Gelukt' ? 'Gelukt' : sharePrompt.outcome === 'Deels' ? 'Deels gelukt' : 'Lastig';
            setShareText(`${sharePrompt.task.title} — ${outcomeLabel}${sharePrompt.note ? `\n\n${sharePrompt.note}` : ''}`);
          }}
        >
          <Pressable style={s.shareOverlay} onPress={() => { setSharePrompt(null); setShareText(''); }}>
            <Pressable style={[s.shareSheet, { backgroundColor: colors.surface }]} onPress={Keyboard.dismiss}>
              <View style={[s.shareHandle, { backgroundColor: colors.border }]} />
              <InlineIcon name="users" size={28} color={SKILL_COLOR[sharePrompt.task.skill] ?? '#667eea'} />
              <Text style={[s.shareTitle, { color: colors.text }]}>Deel met de community</Text>
              <TextInput
                style={[s.shareInput, { color: colors.text, borderColor: colors.border, backgroundColor: colors.bg }]}
                value={shareText}
                onChangeText={setShareText}
                multiline
                maxLength={500}
                placeholder="Schrijf je ervaring..."
                placeholderTextColor={colors.text3}
              />
              <Pressable
                style={[s.shareBtn, { backgroundColor: SKILL_COLOR[sharePrompt.task.skill] ?? '#667eea', opacity: sharePosting || !shareText.trim() ? 0.6 : 1 }]}
                disabled={sharePosting || !shareText.trim()}
                onPress={async () => {
                  if (!user || !shareText.trim()) return;
                  setSharePosting(true);
                  try {
                    await createStory({
                      author_id: user.id,
                      content: shareText.trim(),
                      category: 'ervaring',
                      skill: sharePrompt.task.skill,
                    });
                    setSharePrompt(null);
                    setShareText('');
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                    setToast({ title: 'Gedeeld!', icon: 'check', sub: 'Je ervaring staat in de feed', color: '#34D399' });
                    setTimeout(() => setToast(null), 2500);
                  } catch {
                    Alert.alert('Fout', 'Kon niet delen. Probeer het opnieuw.');
                  }
                  setSharePosting(false);
                }}
              >
                <InlineIcon name="send" size={16} color="#fff" />
                <Text style={s.shareBtnText}>{sharePosting ? 'Delen...' : 'Deel je ervaring'}</Text>
              </Pressable>
              <Pressable onPress={() => { setSharePrompt(null); setShareText(''); }} style={s.shareSkip}>
                <Text style={[s.shareSkipText, { color: colors.text3 }]}>Niet nu</Text>
              </Pressable>
            </Pressable>
          </Pressable>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingBottom: 40 },

  // Hero
  hero: {
    padding: 20,
    paddingTop: 24,
    paddingBottom: 24,
    marginBottom: 16,
  },
  heroTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  heroWeekLabel: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  heroRange: { fontSize: 14, fontWeight: '600' },
  xpBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
  },
  xpBadgeText: { fontSize: 14, fontWeight: '800' },
  heroTitle: { fontSize: 22, fontWeight: '800', marginBottom: 14 },
  heroBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  heroBottomText: { fontSize: 12, fontWeight: '600' },
  heroBonus: { fontSize: 12, fontWeight: '700' },

  // Skill tip
  skillTip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
  },
  skillTipText: { fontSize: 12, fontWeight: '500', flex: 1, lineHeight: 17 },

  // Wijsheid card
  wijsheidCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 12,
    paddingLeft: 14,
    borderRadius: 12,
    borderLeftWidth: 4,
    gap: 4,
  },
  wijsheidText: {
    fontSize: 13,
    fontStyle: 'italic',
    lineHeight: 19,
    fontWeight: '500',
  },
  wijsheidBron: {
    fontSize: 11,
    marginTop: 1,
    fontWeight: '600',
  },

  // Pulse card
  pulseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    padding: 14,
  },
  pulseLeft: { flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1 },
  pulseEmojiWrap: { width: 22, alignItems: 'center' as const, justifyContent: 'center' as const },
  pulseTitle: { fontSize: 14, fontWeight: '700' },
  pulseSub: { fontSize: 12, marginTop: 2 },
  pulseArrow: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  pulseArrowTxt: { color: '#000', fontSize: 16, fontWeight: '800' },

  // Tasks section
  tasksSection: { paddingHorizontal: 16, marginBottom: 8 },
  tasksSectionTitle: { fontSize: 19, fontWeight: '800', marginBottom: 4 },
  tasksSectionSub: { fontSize: 13, marginBottom: 12 },

  // Complete banner
  completeBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
  },
  completeBannerEmoji: { fontSize: 30 },
  completeBannerTitle: { fontSize: 16, fontWeight: '800' },
  completeBannerSub: { fontSize: 13, marginTop: 2 },

  // Learn banner
  learnBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    gap: 12,
    marginTop: 12,
  },
  learnBannerEmoji: { fontSize: 28 },
  learnBannerTextWrap: { flex: 1 },
  learnBannerTitle: { fontSize: 15, fontWeight: '700' },
  learnBannerSub: { fontSize: 12, marginTop: 2 },
  learnBannerArrow: { fontSize: 20, fontWeight: '800' },

  // Info card
  journalCard: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    gap: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
  },
  journalIcon: {
    width: 34,
    height: 34,
    borderRadius: 19,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  journalTitle: { fontSize: 15, fontWeight: '700' as const },
  journalSub: { fontSize: 12, fontWeight: '500' as const, marginTop: 2 },

  infoCard: {
    marginHorizontal: 16,
    marginTop: 4,
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
  },
  infoTitle: { fontSize: 14, fontWeight: '700', marginBottom: 8 },
  infoText: { fontSize: 14, lineHeight: 21 },

  // Combo badge
  comboBadge: {
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  comboText: { fontSize: 13, fontWeight: '700' },

  // Bonus compact card
  bonusCard: { borderWidth: 1, borderRadius: 14, padding: 16, marginTop: 16 },
  bonusHeader: { flexDirection: 'row' as const, alignItems: 'center' as const, marginBottom: 12, gap: 8 },
  bonusEmoji: { fontSize: 22 },
  bonusTitle: { fontSize: 15, fontWeight: '700' as const, flex: 1 },
  bonusXpBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  bonusXpBadgeText: { color: '#A78BFA', fontSize: 12, fontWeight: '700' as const },
  bonusRow: { flexDirection: 'row' as const, alignItems: 'center' as const, paddingVertical: 12, gap: 10, minHeight: 48 },
  bonusCheckWrap: { width: 24, alignItems: 'center' as const, justifyContent: 'center' as const },
  bonusCheck: { fontSize: 16 },
  bonusRowTitle: { fontSize: 14, flex: 1 },
  bonusRowXp: { fontSize: 12, fontWeight: '700' as const },
  bonusFooter: { fontSize: 11, marginTop: 8, fontStyle: 'italic' as const },

  // Reflectie expanded
  reflExpanded: { borderRadius: 10, padding: 12, marginBottom: 8, marginLeft: 32, gap: 10 },
  reflMeta: { flexDirection: 'row' as const, alignItems: 'center' as const, gap: 8, flexWrap: 'wrap' as const },
  reflSkillBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  reflSkillText: { fontSize: 11, fontWeight: '700' as const },
  reflSource: { fontSize: 12, fontStyle: 'italic' as const },
  reflDoneBtn: { borderRadius: 10, paddingVertical: 10, alignItems: 'center' as const },
  reflDoneBtnText: { color: '#fff', fontSize: 14, fontWeight: '700' as const },
  chevronWrap: { width: 32, height: 32, borderRadius: 16, alignItems: 'center' as const, justifyContent: 'center' as const },
  shareOverlay: { flex: 1, justifyContent: 'flex-end' as const, backgroundColor: 'rgba(0,0,0,0.4)' },
  shareSheet: { borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24, alignItems: 'center' as const, gap: 12 },
  shareHandle: { width: 40, height: 4, borderRadius: 2, marginBottom: 8 },
  shareTitle: { fontSize: 18, fontWeight: '700' as const },
  shareSub: { fontSize: 14, textAlign: 'center' as const, lineHeight: 20, paddingHorizontal: 12 },
  shareInput: { width: '100%' as const, fontSize: 15, lineHeight: 22, borderWidth: 1, borderRadius: 12, padding: 14, minHeight: 80, textAlignVertical: 'top' as const },
  shareBtn: { flexDirection: 'row' as const, alignItems: 'center' as const, justifyContent: 'center' as const, gap: 8, paddingVertical: 14, borderRadius: 14, width: '100%' as const, marginTop: 4 },
  shareBtnText: { fontSize: 16, fontWeight: '700' as const, color: '#fff' },
  shareSkip: { paddingVertical: 10, paddingBottom: 16 },
  shareSkipText: { fontSize: 14, fontWeight: '600' as const },
});
