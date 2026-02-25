import React, { useMemo } from 'react';
import {
  View,
  Text,
  Modal,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { InlineIcon } from '@/lib/icons';
import { SKILL_COLORS } from '@/lib/colors';
import { getWeekNumber } from '@/lib/week-selector';
import Button from '@/components/Button';
import { ALL_INTERACTIVE_TASKS } from '@/lib/interactive-tasks';
import type { Skill } from '@/lib/types';

const MOTIVATIONAL = [
  'Elke stap die je zet als vader telt. Ga zo door!',
  'Bewust opvoeden is een keuze — en jij maakt hem elke dag.',
  'Jouw kinderen voelen dat je erin investeert.',
  'Vooruitgang is niet altijd zichtbaar, maar altijd waardevol.',
  'Een vader die leert, is een vader die groeit.',
  'Je bent niet perfect, maar je bent er wel. Dat is wat telt.',
  'Kleine veranderingen maken grote vaderen.',
  'Volgende week weer een kans om te groeien.',
];

function getMotivational(weekKey: string): string {
  let hash = 0;
  for (let i = 0; i < weekKey.length; i++) {
    hash = ((hash << 5) - hash) + weekKey.charCodeAt(i);
    hash |= 0;
  }
  return MOTIVATIONAL[Math.abs(hash) % MOTIVATIONAL.length];
}

interface WeeklyRecapModalProps {
  visible: boolean;
  onClose: () => void;
  weekKey: string;
}

export default function WeeklyRecapModal({ visible, onClose, weekKey }: WeeklyRecapModalProps) {
  const { colors } = useTheme();
  const {
    weekTaskCompletions,
    pulseCheckIns,
    taskOutcomes,
    consecutiveActiveDays,
    profile,
    markRecapSeen,
  } = useStore();

  const stats = useMemo(() => {
    const completions = weekTaskCompletions.filter((c) => c.weekKey === weekKey);
    const taskCount = completions.filter((c) => !/^refl_\d{4}-/.test(c.taskId)).length;
    const totalXP = completions.reduce((sum, c) => sum + c.points, 0) + (taskCount >= 7 ? 50 : 0);

    // Skills geoefend — opzoeken via task map
    const taskMap = new Map(ALL_INTERACTIVE_TASKS.map((t) => [t.id, t]));
    const skillSet = new Set<Skill>();
    completions.forEach((c) => {
      const task = taskMap.get(c.taskId);
      if (task) skillSet.add(task.skill);
    });

    // Pulse voor deze week
    const monday = new Date(weekKey + 'T00:00:00');
    const sunday = new Date(weekKey + 'T00:00:00');
    sunday.setDate(sunday.getDate() + 6);
    const weekPulses = pulseCheckIns.filter((p) => {
      const d = new Date(p.date);
      return d >= monday && d <= sunday;
    });
    // antwoordIndex: 0=laagste, 3=hoogste → map naar 1-4 schaal
    const avgPulse = weekPulses.length > 0
      ? Math.round(weekPulses.reduce((sum, p) => sum + (p.antwoordIndex + 1), 0) / weekPulses.length * 10) / 10
      : null;

    // Outcomes
    const weekOutcomes = taskOutcomes.filter((o) => o.weekKey === weekKey);
    const gelukt = weekOutcomes.filter((o) => o.outcome === 'Gelukt').length;
    const deels = weekOutcomes.filter((o) => o.outcome === 'Deels').length;
    const niet = weekOutcomes.filter((o) => o.outcome === 'Niet').length;

    const weekNum = profile?.startDate ? getWeekNumber(weekKey, profile.startDate) : 1;

    return { taskCount, totalXP, skills: Array.from(skillSet), avgPulse, weekPulseCount: weekPulses.length, gelukt, deels, niet, weekNum, isComplete: taskCount >= 7 };
  }, [weekTaskCompletions, pulseCheckIns, taskOutcomes, weekKey, profile]);

  function handleClose() {
    markRecapSeen(weekKey);
    onClose();
  }

  const motivational = useMemo(() => getMotivational(weekKey), [weekKey]);

  function formatWeekRange(): string {
    const monday = new Date(weekKey + 'T00:00:00');
    const sunday = new Date(weekKey + 'T00:00:00');
    sunday.setDate(sunday.getDate() + 6);
    const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
    return `${monday.toLocaleDateString('nl-NL', opts)} – ${sunday.toLocaleDateString('nl-NL', opts)}`;
  }

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={handleClose}>
      <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
        <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={s.header}>
            <View style={[s.iconCircle, { backgroundColor: colors.amberDim }]}>
              <InlineIcon name="trophy" size={32} color={colors.amber} />
            </View>
            <Text style={[s.title, { color: colors.text }]}>Week {stats.weekNum} Recap</Text>
            <Text style={[s.subtitle, { color: colors.text3 }]}>{formatWeekRange()}</Text>
          </View>

          {/* Main stats */}
          <View style={[s.statsCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <View style={s.statsRow}>
              <View style={s.statItem}>
                <Text style={[s.statValue, { color: colors.text }]}>{stats.taskCount}</Text>
                <Text style={[s.statLabel, { color: colors.text3 }]}>Taken</Text>
              </View>
              <View style={[s.statDivider, { backgroundColor: colors.border }]} />
              <View style={s.statItem}>
                <Text style={[s.statValue, { color: colors.amber }]}>{stats.totalXP}</Text>
                <Text style={[s.statLabel, { color: colors.text3 }]}>XP</Text>
              </View>
              <View style={[s.statDivider, { backgroundColor: colors.border }]} />
              <View style={s.statItem}>
                <Text style={[s.statValue, { color: '#F97316' }]}>{consecutiveActiveDays}</Text>
                <Text style={[s.statLabel, { color: colors.text3 }]}>Streak</Text>
              </View>
            </View>

            {stats.isComplete && (
              <View style={[s.completeBanner, { backgroundColor: colors.amberDim }]}>
                <InlineIcon name="check" size={16} color={colors.amber} />
                <Text style={[s.completeBannerText, { color: colors.amber }]}>
                  Week voltooid! +50 bonus XP
                </Text>
              </View>
            )}
          </View>

          {/* Skills geoefend */}
          {stats.skills.length > 0 && (
            <View style={[s.section, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={[s.sectionTitle, { color: colors.text }]}>Skills geoefend</Text>
              <View style={s.skillsRow}>
                {stats.skills.map((skill) => (
                  <View key={skill} style={[s.skillChip, { backgroundColor: (SKILL_COLORS[skill] ?? '#667eea') + '18' }]}>
                    <Text style={[s.skillChipText, { color: SKILL_COLORS[skill] ?? '#667eea' }]}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Outcomes */}
          {(stats.gelukt + stats.deels + stats.niet) > 0 && (
            <View style={[s.section, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={[s.sectionTitle, { color: colors.text }]}>Hoe ging het?</Text>
              <View style={s.outcomesRow}>
                <View style={s.outcomeItem}>
                  <View style={[s.outcomeDot, { backgroundColor: '#22C55E' }]} />
                  <Text style={[s.outcomeValue, { color: colors.text }]}>{stats.gelukt}</Text>
                  <Text style={[s.outcomeLabel, { color: colors.text3 }]}>Gelukt</Text>
                </View>
                <View style={s.outcomeItem}>
                  <View style={[s.outcomeDot, { backgroundColor: '#FBBF24' }]} />
                  <Text style={[s.outcomeValue, { color: colors.text }]}>{stats.deels}</Text>
                  <Text style={[s.outcomeLabel, { color: colors.text3 }]}>Deels</Text>
                </View>
                <View style={s.outcomeItem}>
                  <View style={[s.outcomeDot, { backgroundColor: '#EF4444' }]} />
                  <Text style={[s.outcomeValue, { color: colors.text }]}>{stats.niet}</Text>
                  <Text style={[s.outcomeLabel, { color: colors.text3 }]}>Niet</Text>
                </View>
              </View>
            </View>
          )}

          {/* Pulse trend */}
          {stats.avgPulse !== null && (
            <View style={[s.section, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={[s.sectionTitle, { color: colors.text }]}>Vader Pulse</Text>
              <View style={s.pulseRow}>
                <Text style={[s.pulseScore, { color: colors.amber }]}>{stats.avgPulse}</Text>
                <Text style={[s.pulseLabel, { color: colors.text3 }]}>
                  gemiddeld ({stats.weekPulseCount} check-in{stats.weekPulseCount !== 1 ? 's' : ''})
                </Text>
              </View>
            </View>
          )}

          {/* Motivational */}
          <View style={[s.motivational, { backgroundColor: colors.surface2 }]}>
            <Text style={[s.motivationalText, { color: colors.text2 }]}>{motivational}</Text>
          </View>

          <Button title="Sluiten" onPress={handleClose} size="lg" />
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { padding: 24, paddingBottom: 40 },
  header: { alignItems: 'center', marginBottom: 24 },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: { fontSize: 26, fontWeight: '800', marginBottom: 4 },
  subtitle: { fontSize: 14, fontWeight: '500' },

  statsCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  statItem: { alignItems: 'center', gap: 4 },
  statValue: { fontSize: 32, fontWeight: '800' },
  statLabel: { fontSize: 13, fontWeight: '600' },
  statDivider: { width: 1, height: 44 },
  completeBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  completeBannerText: { fontSize: 14, fontWeight: '700' },

  section: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 14, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 12 },
  skillsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  skillChip: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8 },
  skillChipText: { fontSize: 13, fontWeight: '700' },

  outcomesRow: { flexDirection: 'row', justifyContent: 'space-around' },
  outcomeItem: { alignItems: 'center', gap: 4 },
  outcomeDot: { width: 10, height: 10, borderRadius: 5 },
  outcomeValue: { fontSize: 22, fontWeight: '800' },
  outcomeLabel: { fontSize: 12, fontWeight: '500' },

  pulseRow: { flexDirection: 'row', alignItems: 'baseline', gap: 8 },
  pulseScore: { fontSize: 28, fontWeight: '800' },
  pulseLabel: { fontSize: 14, fontWeight: '500' },

  motivational: {
    borderRadius: 14,
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
  },
  motivationalText: { fontSize: 15, fontWeight: '600', textAlign: 'center', lineHeight: 22, fontStyle: 'italic' },
});
