import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { getWeekNumber, getWeeklyReflections } from '@/lib/week-selector';
import { ALL_INTERACTIVE_TASKS } from '@/lib/interactive-tasks';
import { InlineIcon } from '@/lib/icons';
import { SKILL_COLORS } from '@/lib/colors';
import { ALL_SKILLS } from '@/lib/skills';
import type { InteractiveTask, Skill } from '@/lib/types';

const XP_WEEK_BONUS = 50;

function formatWeekRange(weekKey: string): string {
  const monday = new Date(weekKey + 'T00:00:00');
  const sunday = new Date(weekKey + 'T00:00:00');
  sunday.setDate(sunday.getDate() + 6);
  const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
  return `${monday.toLocaleDateString('nl-NL', opts)} – ${sunday.toLocaleDateString('nl-NL', opts)}`;
}

function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleDateString('nl-NL', { weekday: 'short', day: 'numeric', month: 'short' });
}

const TASK_MAP = new Map(ALL_INTERACTIVE_TASKS.map((t) => [t.id, t]));

export default function WeekDetailScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const { weekKey } = useLocalSearchParams<{ weekKey: string }>();
  const { weekTaskCompletions, profile } = useStore();
  const [selectedTask, setSelectedTask] = useState<InteractiveTask | null>(null);

  // Reflectie-taken opzoeken voor deze week
  const reflectionMap = useMemo(() => {
    if (!weekKey) return new Map<string, { question: string; skill: Skill }>();
    const reflections = getWeeklyReflections(ALL_SKILLS, weekKey);
    return new Map(reflections.map((r) => [r.id, { question: r.question, skill: r.skill }]));
  }, [weekKey]);

  const completions = useMemo(() => {
    return weekTaskCompletions
      .filter((c) => c.weekKey === weekKey)
      .sort((a, b) => a.completedAt.localeCompare(b.completedAt));
  }, [weekTaskCompletions, weekKey]);

  const isComplete = completions.length >= 7;
  const totalXP = completions.reduce((sum, c) => sum + c.points, 0) + (isComplete ? XP_WEEK_BONUS : 0);
  const weekNum = profile?.startDate && weekKey ? getWeekNumber(weekKey, profile.startDate) : 1;

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={[s.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.back()} style={s.backBtn}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={[s.title, { color: colors.text }]}>Week {weekNum}</Text>
          <Text style={[s.subtitle, { color: colors.text3 }]}>{weekKey ? formatWeekRange(weekKey) : ''}</Text>
        </View>
        {isComplete && (
          <View style={[s.completeTag, { backgroundColor: colors.amberDim }]}>
            <InlineIcon name="trophy" size={14} color={colors.amber} />
            <Text style={[s.completeTagText, { color: colors.amber }]}>Voltooid</Text>
          </View>
        )}
      </View>

      {/* Summary */}
      <View style={[s.summary, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <View style={s.summaryItem}>
          <Text style={[s.summaryValue, { color: colors.text }]}>{completions.length}</Text>
          <Text style={[s.summaryLabel, { color: colors.text3 }]}>Taken</Text>
        </View>
        <View style={[s.summaryDivider, { backgroundColor: colors.border }]} />
        <View style={s.summaryItem}>
          <Text style={[s.summaryValue, { color: colors.amber }]}>{totalXP}</Text>
          <Text style={[s.summaryLabel, { color: colors.text3 }]}>XP behaald</Text>
        </View>
        {isComplete && (
          <>
            <View style={[s.summaryDivider, { backgroundColor: colors.border }]} />
            <View style={s.summaryItem}>
              <Text style={[s.summaryValue, { color: '#34D399' }]}>+{XP_WEEK_BONUS}</Text>
              <Text style={[s.summaryLabel, { color: colors.text3 }]}>Week bonus</Text>
            </View>
          </>
        )}
      </View>

      {completions.length === 0 ? (
        <View style={s.empty}>
          <Text style={[s.emptyText, { color: colors.text3 }]}>Geen taken gevonden voor deze week.</Text>
        </View>
      ) : (
        <FlatList
          data={completions}
          keyExtractor={(item) => item.taskId + item.completedAt}
          contentContainerStyle={s.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const task = TASK_MAP.get(item.taskId);
            const refl = reflectionMap.get(item.taskId);
            const isReflection = !!refl;
            const displayTitle = task?.title ?? (isReflection ? refl.question : item.taskId);
            const displaySkill = task?.skill ?? refl?.skill;
            const skillColor = displaySkill ? (SKILL_COLORS[displaySkill] ?? colors.amber) : colors.amber;

            return (
              <Pressable
                onPress={() => task && setSelectedTask(task)}
                style={[s.taskCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
              >
                <View style={[s.taskNumber, { backgroundColor: skillColor + '18' }]}>
                  {isReflection ? (
                    <InlineIcon name="brain" size={16} color={skillColor} />
                  ) : (
                    <Text style={[s.taskNumberText, { color: skillColor }]}>{index + 1}</Text>
                  )}
                </View>
                <View style={s.taskInfo}>
                  <Text style={[s.taskTitle, { color: colors.text }]} numberOfLines={2}>
                    {displayTitle}
                  </Text>
                  <View style={s.taskMeta}>
                    {displaySkill && (
                      <View style={[s.skillChip, { backgroundColor: skillColor + '15' }]}>
                        <Text style={[s.skillChipText, { color: skillColor }]}>
                          {isReflection ? 'Reflectie' : displaySkill}
                        </Text>
                      </View>
                    )}
                    <Text style={[s.taskDate, { color: colors.text3 }]}>
                      {formatDateTime(item.completedAt)}
                    </Text>
                  </View>
                </View>
                <View style={[s.xpBadge, { backgroundColor: colors.amberDim }]}>
                  <Text style={[s.xpText, { color: colors.amber }]}>+{item.points}</Text>
                </View>
                {task && <InlineIcon name="chevronRight" size={14} color={colors.text3} />}
              </Pressable>
            );
          }}
        />
      )}

      {/* Detail Modal */}
      <Modal visible={!!selectedTask} animationType="slide" presentationStyle="pageSheet" onRequestClose={() => setSelectedTask(null)}>
        <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
          {selectedTask && (
            <ScrollView contentContainerStyle={s.modalContent} showsVerticalScrollIndicator={false}>
              <View style={[s.modalHeader, { borderBottomColor: colors.border }]}>
                <Pressable onPress={() => setSelectedTask(null)} style={s.backBtn}>
                  <InlineIcon name="arrowLeft" size={22} color={colors.text} />
                </Pressable>
                <Text style={[s.modalHeaderTitle, { color: colors.text }]} numberOfLines={1}>Taakdetails</Text>
              </View>

              <View style={s.modalBody}>
                <View style={s.modalPills}>
                  <View style={[s.skillChip, { backgroundColor: (SKILL_COLORS[selectedTask.skill] ?? '#667eea') + '18' }]}>
                    <Text style={[s.skillChipText, { color: SKILL_COLORS[selectedTask.skill] ?? '#667eea' }]}>{selectedTask.skill}</Text>
                  </View>
                  <View style={[s.skillChip, { backgroundColor: '#FBBF2422' }]}>
                    <Text style={[s.skillChipText, { color: '#FBBF24' }]}>
                      {selectedTask.difficulty === 'basis' ? 'Basis' : selectedTask.difficulty === 'gevorderd' ? 'Gevorderd' : 'Expert'}
                    </Text>
                  </View>
                </View>

                <Text style={[s.modalTitle, { color: colors.text }]}>{selectedTask.title}</Text>
                <Text style={[s.modalDesc, { color: colors.text2 }]}>{selectedTask.description}</Text>

                {(selectedTask as any).instructions && (
                  <View style={s.modalSection}>
                    <Text style={[s.modalSectionTitle, { color: colors.text }]}>Stappen</Text>
                    {((selectedTask as any).instructions as string[]).map((step: string, i: number) => (
                      <Text key={i} style={[s.modalStep, { color: colors.text2 }]}>{i + 1}. {step}</Text>
                    ))}
                  </View>
                )}

                {(selectedTask as any).reflection && (
                  <View style={s.modalSection}>
                    <Text style={[s.modalSectionTitle, { color: colors.text }]}>Reflectie</Text>
                    <Text style={[s.modalBodyText, { color: colors.text2 }]}>{(selectedTask as any).reflection}</Text>
                  </View>
                )}

                {((selectedTask as any).scienceNote || (selectedTask as any).psychologie) && (
                  <View style={[s.modalScienceBox, { backgroundColor: colors.surface2 }]}>
                    <Text style={[s.modalSectionTitle, { color: colors.text }]}>Waarom werkt dit?</Text>
                    <Text style={[s.modalBodyText, { color: colors.text2 }]}>
                      {(selectedTask as any).scienceNote ?? (selectedTask as any).psychologie}
                    </Text>
                    {(selectedTask as any).bron && (
                      <Text style={[s.modalBron, { color: colors.text3 }]}>{(selectedTask as any).bron}</Text>
                    )}
                  </View>
                )}
              </View>
            </ScrollView>
          )}
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  backBtn: { padding: 4 },
  title: { fontSize: 22, fontWeight: '800' },
  subtitle: { fontSize: 13, fontWeight: '500', marginTop: 2 },
  completeTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  completeTagText: { fontSize: 13, fontWeight: '700' },

  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  summaryItem: { alignItems: 'center', gap: 2 },
  summaryValue: { fontSize: 26, fontWeight: '800' },
  summaryLabel: { fontSize: 12, fontWeight: '500' },
  summaryDivider: { width: 1, height: 40 },

  list: { padding: 16, gap: 10, paddingBottom: 40 },

  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    gap: 12,
  },
  taskNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskNumberText: { fontSize: 15, fontWeight: '800' },
  taskInfo: { flex: 1 },
  taskTitle: { fontSize: 14, fontWeight: '600', lineHeight: 19 },
  taskMeta: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 5 },
  skillChip: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  skillChipText: { fontSize: 11, fontWeight: '700' },
  taskDate: { fontSize: 11 },
  xpBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  xpText: { fontSize: 13, fontWeight: '700' },

  empty: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 },
  emptyText: { fontSize: 15, fontWeight: '500', textAlign: 'center' },

  // Modal styles
  modalContent: { paddingBottom: 60 },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  modalHeaderTitle: { fontSize: 18, fontWeight: '700' },
  modalBody: { padding: 20 },
  modalPills: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  modalTitle: { fontSize: 22, fontWeight: '800', marginBottom: 10, lineHeight: 28 },
  modalDesc: { fontSize: 15, lineHeight: 22, marginBottom: 20 },
  modalSection: { marginBottom: 20 },
  modalSectionTitle: { fontSize: 13, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 },
  modalStep: { fontSize: 15, lineHeight: 22, marginBottom: 4 },
  modalBodyText: { fontSize: 15, lineHeight: 22 },
  modalScienceBox: { borderRadius: 12, padding: 16, marginBottom: 20 },
  modalBron: { fontSize: 12, marginTop: 8, fontStyle: 'italic' },
});
