import React, { useMemo, useState, useRef, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Modal,
  TextInput,
  Animated,
} from 'react-native';
import { AppIcon, InlineIcon, getSkillIcon } from '@/lib/icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { ALL_INTERACTIVE_TASKS } from '@/lib/interactive-tasks';
import { selectMixedWeekTasks, getWeekKey, getWeekNumber, ageToGroup } from '@/lib/week-selector';
import { PULSE_QUESTIONS } from '@/lib/pulse-questions';
import { getLevelFromXP, getComboMultiplier } from '@/lib/gamification-types';
import { getWijsheidVanDeDag } from '@/lib/vader-wijsheid';
import { checkAndUnlockBadges } from '@/lib/badge-checker';
import GamificationPopup from '@/components/GamificationPopup';
import type { GamificationEvent } from '@/components/GamificationPopup';
import { ALL_SKILLS } from '@/lib/skills';
import { getWeeklyReflections } from '@/lib/week-selector';
import type { WeeklyReflection } from '@/lib/week-selector';
import type { InteractiveTask, Skill } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function getTodayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function formatWeekRange(weekKey: string): string {
  const monday = new Date(weekKey);
  const sunday = new Date(weekKey);
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

function getDailyPulseQuestion(skills: Skill[]) {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
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
  onComplete,
  onUndo,
}: {
  task: InteractiveTask;
  done: boolean;
  onComplete: () => void;
  onUndo: () => void;
}) {
  const { colors } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const skillColor = SKILL_COLOR[task.skill] ?? '#667eea';
  const diffColor = DIFFICULTY_COLOR[task.difficulty] ?? '#FBBF24';
  const xp = (task as any).points ?? (task as any).xpReward ?? 10;

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
      {/* Pills row */}
      <Pressable onPress={() => setExpanded((e) => !e)} style={tcStyles.topRow}>
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
        <InlineIcon name={expanded ? 'chevronUp' : 'chevronDown'} size={11} color={colors.text3} />
      </Pressable>

      <View style={tcStyles.titleRow}>
        <View style={[
          tcStyles.checkCircle,
          done
            ? { backgroundColor: '#22C55E' }
            : { backgroundColor: 'transparent', borderWidth: 2, borderColor: colors.border },
        ]}>
          {done && <InlineIcon name="check" size={14} color="#fff" />}
        </View>
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
  card: { borderRadius: 16, padding: 16, marginBottom: 12 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  pills: { flexDirection: 'row', alignItems: 'center', gap: 6, flexWrap: 'wrap' },
  pill: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  pillText: { fontSize: 11, fontWeight: '700' },
  xpText: { fontSize: 12, fontWeight: '600' },
  chevron: { fontSize: 11 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 6 },
  checkCircle: { width: 24, height: 24, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  checkMark: { color: '#fff', fontSize: 14, fontWeight: '800' },
  title: { fontSize: 17, fontWeight: '700', flex: 1 },
  desc: { fontSize: 14, lineHeight: 20, marginBottom: 6 },
  dur: { fontSize: 12, marginBottom: 12 },
  expanded: { borderTopWidth: 1, paddingTop: 14, marginTop: 4 },
  section: { marginBottom: 14 },
  sectionTitle: { fontSize: 12, fontWeight: '700', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 },
  step: { fontSize: 14, lineHeight: 20, marginBottom: 4 },
  scienceBox: { borderRadius: 10, padding: 12, marginBottom: 14 },
  bodyText: { fontSize: 14, lineHeight: 20 },
  bron: { fontSize: 12, marginTop: 6, fontStyle: 'italic' },
  doneBtn: { borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginTop: 4 },
  doneBtnText: { color: '#fff', fontSize: 15, fontWeight: '700' },
  undoBtn: { borderRadius: 12, paddingVertical: 12, alignItems: 'center', marginTop: 4, borderWidth: 1 },
  undoText: { fontSize: 14, fontWeight: '600' },
});


// ─────────────────────────────────────────────────────────────────────────────
// PulseModal
// ─────────────────────────────────────────────────────────────────────────────

function PulseModal({
  visible,
  onClose,
  skills,
}: {
  visible: boolean;
  onClose: () => void;
  skills: Skill[];
}) {
  const { colors } = useTheme();
  const { addPulseCheckIn } = useStore();
  const [selected, setSelected] = useState<number | null>(null);
  const [showInsight, setShowInsight] = useState(false);
  const [notitie, setNotitie] = useState('');

  const question = useMemo(() => getDailyPulseQuestion(skills), [skills]);
  const skillColor = SKILL_COLOR[question.skill] ?? '#667eea';

  function handleAnswer(i: number) {
    if (showInsight) return;
    setSelected(i);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setShowInsight(true);
  }

  function handleSave() {
    if (selected === null) return;
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
        <ScrollView contentContainerStyle={pmStyles.content} keyboardShouldPersistTaps="handled">
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
  } = store;

  const [pulseVisible, setPulseVisible] = useState(false);
  const [toast, setToast] = useState<ToastInfo | null>(null);
  const [gamificationEvent, setGamificationEvent] = useState<GamificationEvent | null>(null);
  const [completedModuleIds, setCompletedModuleIds] = useState<string[]>([]);
  const [expandedReflection, setExpandedReflection] = useState<string | null>(null);

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

  // Weeknummer voor progressie
  const weekNumber = useMemo(() => {
    if (!profile?.startDate) return 1;
    return getWeekNumber(weekKey, profile.startDate);
  }, [weekKey, profile]);

  // Laad voltooide modules voor primaire skill
  React.useEffect(() => {
    const primarySkill = skills[0];
    if (!primarySkill) return;
    AsyncStorage.getItem(`vc-completed-modules-${primarySkill}`)
      .then((stored) => {
        if (stored) setCompletedModuleIds(JSON.parse(stored));
      })
      .catch(() => {});
  }, [skills]);

  // 7 taken: 6 interactief + 1 leermodule
  const weekTasks = useMemo(
    () => selectMixedWeekTasks(ALL_INTERACTIVE_TASKS, ageGroups, skills, weekKey, weekNumber, completedModuleIds).tasks,
    [ageGroups, skills, weekKey, weekNumber, completedModuleIds],
  );

  const weekTaskIds = useMemo(() => new Set(weekTasks.map(t => t.id)), [weekTasks]);
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

    // Check badges after reflection
    setTimeout(() => {
      const newBadges = checkAndUnlockBadges(store, { source: 'task' });
      if (newBadges.length > 0) {
        setGamificationEvent({ type: 'badge', badge: newBadges[0] });
      }
    }, 1000);
  }, [combo.multiplier, completeWeekTask, weekKey, recordActiveDay, store]);

  const handleComplete = useCallback(async (task: InteractiveTask) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    recordActiveDay();
    const baseXp = (task as any).points ?? (task as any).xpReward ?? 10;
    const xp = Math.round(baseXp * combo.multiplier);

    // Compute XP before and after to detect level-up
    // Filter against current weekTaskIds to prevent stale completions from inflating counts
    const completionsBefore = getWeekTasksDone(weekKey).filter(c => weekTaskIds.has(c.taskId));
    const xpBefore = completionsBefore.reduce((s, c) => s + c.points, 0);

    // Count completed weeks before this action
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

    // Show toast with varied celebration messages
    if (newDoneCount >= 7) {
      setToast({ title: 'Week voltooid!', sub: `Weekbonus verdiend · Geweldig gedaan!`, color: '#D97706', icon: 'trophy', xp: 50 });
    } else {
      const celebration = TASK_CELEBRATIONS[newDoneCount % TASK_CELEBRATIONS.length];
      setToast({ title: celebration.title, sub: `${celebration.sub} · nog ${7 - newDoneCount} te gaan`, color: skillColor, icon: celebration.icon, xp });
    }

    // Detect level-up or badge unlock after a short delay
    setTimeout(async () => {
      const weekBonus = newDoneCount >= 7 ? 50 : 0;
      const totalXpAfter = xpBefore + xp + weekBonusBefore + weekBonus;
      const levelBefore = getLevelFromXP(totalXpBefore);
      const levelAfter = getLevelFromXP(totalXpAfter);

      if (levelAfter.level > levelBefore.level) {
        setGamificationEvent({ type: 'levelup', level: levelAfter.level, title: levelAfter.title });
        return;
      }

      // Check for newly unlocked badges (centralized)
      const newBadges = checkAndUnlockBadges(store, { source: 'task' });
      if (newBadges.length > 0) {
        setGamificationEvent({ type: 'badge', badge: newBadges[0] });
      }
    }, 1000);
  }, [completeWeekTask, weekKey, getWeekTasksDone, weekTaskIds]);

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

          <View style={s.heroBottom}>
            <Text style={[s.heroBottomText, { color: colors.text3 }]}>
              {weekComplete ? 'Alle taken afgerond!' : `Nog ${7 - doneCount} te gaan · doe ze in je eigen tempo`}
            </Text>
            {weekComplete && <Text style={[s.heroBonus, { color: colors.amber }]}>+{bonusXP} XP weekbonus</Text>}
          </View>
        </LinearGradient>

        {/* ── Vader Wijsheid (Level 2+) ──────────────────────────────── */}
        {wijsheid && (
          <View style={[s.wijsheidCard, { backgroundColor: colors.surface2, borderColor: colors.border }]}>
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
                <InlineIcon name="checkCircle" size={26} color={colors.success} />
              ) : (
                <InlineIcon name="compass" size={26} color={colors.amber} />
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

          {weekTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                done={isWeekTaskDone(task.id, weekKey)}
                onComplete={() => handleComplete(task)}
                onUndo={() => undoWeekTask(task.id, weekKey)}
              />
          ))}

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
                      onPress={() => setExpandedReflection(isExpanded ? null : r.id)}
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
                      <InlineIcon name={isExpanded ? 'chevronUp' : 'chevronDown'} size={12} color={done ? colors.text3 : '#A78BFA'} />
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
          <View style={[s.completeBanner, { backgroundColor: colors.amber + '20', borderColor: colors.amber }]}>
            <InlineIcon name="trophy" size={30} color={colors.amber} />
            <View>
              <Text style={[s.completeBannerTitle, { color: colors.amber }]}>Week voltooid!</Text>
              <Text style={[s.completeBannerSub, { color: colors.text2 }]}>
                +{bonusXP} XP bonus · Week {weekNumber} klaar
              </Text>
            </View>
          </View>
        )}

        {/* ── Info ────────────────────────────────────────────────────── */}
        <View style={[s.infoCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
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
        </View>

      </ScrollView>

      <PulseModal visible={pulseVisible} onClose={() => setPulseVisible(false)} skills={skills} />
      <CelebrationToast toast={toast} onHide={() => setToast(null)} />
      <GamificationPopup event={gamificationEvent} onDismiss={() => setGamificationEvent(null)} />
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

  // Wijsheid card
  wijsheidCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  wijsheidText: {
    fontSize: 15,
    fontStyle: 'italic',
    lineHeight: 22,
    fontWeight: '500',
  },
  wijsheidBron: {
    fontSize: 12,
    marginTop: 8,
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
    padding: 16,
  },
  pulseLeft: { flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 },
  pulseEmojiWrap: { width: 26, alignItems: 'center' as const, justifyContent: 'center' as const },
  pulseTitle: { fontSize: 15, fontWeight: '700' },
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
  tasksSectionSub: { fontSize: 13, marginBottom: 16 },

  // Complete banner
  completeBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    gap: 14,
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
  bonusRow: { flexDirection: 'row' as const, alignItems: 'center' as const, paddingVertical: 8, gap: 8 },
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
});
