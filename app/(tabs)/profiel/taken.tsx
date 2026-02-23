import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  Modal,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { ALL_INTERACTIVE_TASKS } from '@/lib/interactive-tasks';
import { SKILL_COLORS } from '@/lib/colors';
import { InlineIcon } from '@/lib/icons';
import type { InteractiveTask } from '@/lib/types';

const TASK_MAP = new Map(ALL_INTERACTIVE_TASKS.map((t) => [t.id, t]));

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('nl-NL', { weekday: 'short', day: 'numeric', month: 'short' });
}

function formatFullDate(iso: string): string {
  return new Date(iso).toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

export default function TakenHistorie() {
  const { colors } = useTheme();
  const router = useRouter();
  const { weekTaskCompletions } = useStore();
  const [selectedTask, setSelectedTask] = useState<{ task: InteractiveTask; completedAt: string; points: number } | null>(null);

  const completions = useMemo(() => {
    return [...weekTaskCompletions]
      .filter((c) => TASK_MAP.has(c.taskId))
      .sort((a, b) => b.completedAt.localeCompare(a.completedAt));
  }, [weekTaskCompletions]);

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={[s.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.back()} style={s.backBtn}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={[s.title, { color: colors.text }]}>Voltooide taken</Text>
          <Text style={[s.subtitle, { color: colors.text3 }]}>{completions.length} taken</Text>
        </View>
      </View>

      {completions.length === 0 ? (
        <View style={s.empty}>
          <InlineIcon name="checkCircle" size={40} color={colors.text3} />
          <Text style={[s.emptyText, { color: colors.text3 }]}>Nog geen taken voltooid.</Text>
        </View>
      ) : (
        <FlatList
          data={completions}
          keyExtractor={(item, i) => item.taskId + item.completedAt + i}
          contentContainerStyle={s.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            const task = TASK_MAP.get(item.taskId);
            const skillColor = task?.skill ? (SKILL_COLORS[task.skill] ?? colors.amber) : colors.amber;

            return (
              <Pressable
                onPress={() => {
                  if (task) setSelectedTask({ task, completedAt: item.completedAt, points: item.points });
                }}
                style={[s.taskCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
              >
                <View style={[s.taskDot, { backgroundColor: skillColor }]} />
                <View style={s.taskInfo}>
                  <Text style={[s.taskTitle, { color: colors.text }]} numberOfLines={2}>
                    {task?.title || item.taskId}
                  </Text>
                  <View style={s.taskMeta}>
                    {task?.skill && (
                      <View style={[s.skillChip, { backgroundColor: skillColor + '15' }]}>
                        <Text style={[s.skillChipText, { color: skillColor }]}>{task.skill}</Text>
                      </View>
                    )}
                    <Text style={[s.taskDate, { color: colors.text3 }]}>
                      {formatDate(item.completedAt)}
                    </Text>
                  </View>
                </View>
                <View style={[s.xpBadge, { backgroundColor: colors.amberDim }]}>
                  <Text style={[s.xpText, { color: colors.amber }]}>+{item.points}</Text>
                </View>
              </Pressable>
            );
          }}
        />
      )}

      {/* Task detail modal */}
      <Modal visible={!!selectedTask} transparent animationType="fade" onRequestClose={() => setSelectedTask(null)}>
        <Pressable style={s.modalOverlay} onPress={() => setSelectedTask(null)}>
          <Pressable style={[s.modalCard, { backgroundColor: colors.surface }]} onPress={() => {}}>
            {selectedTask && (() => {
              const { task, completedAt, points } = selectedTask;
              const skillColor = SKILL_COLORS[task.skill] ?? colors.amber;
              const steps = task.instructions || [];
              return (
                <ScrollView style={{ maxHeight: Dimensions.get('window').height * 0.75 }} showsVerticalScrollIndicator={true}>
                  {/* Skill accent bar */}
                  <View style={[s.modalAccent, { backgroundColor: skillColor }]} />

                  <Pressable onPress={() => setSelectedTask(null)} style={s.modalClose}>
                    <InlineIcon name="x" size={20} color={colors.text3} />
                  </Pressable>

                  <View style={s.modalBody}>
                    {/* Skill + difficulty */}
                    <View style={s.modalTagRow}>
                      <View style={[s.modalTag, { backgroundColor: skillColor + '18' }]}>
                        <Text style={[s.modalTagText, { color: skillColor }]}>{task.skill}</Text>
                      </View>
                      {task.difficulty && (
                        <View style={[s.modalTag, { backgroundColor: colors.surface2 }]}>
                          <Text style={[s.modalTagText, { color: colors.text2 }]}>{task.difficulty}</Text>
                        </View>
                      )}
                    </View>

                    <Text style={[s.modalTitle, { color: colors.text }]}>{task.title}</Text>
                    <Text style={[s.modalDesc, { color: colors.text2 }]}>{task.description}</Text>

                    {/* Steps */}
                    {steps.length > 0 && (
                      <View style={s.stepsSection}>
                        <Text style={[s.stepsLabel, { color: colors.text }]}>Stappen</Text>
                        {steps.map((step, i) => (
                          <View key={i} style={s.stepRow}>
                            <View style={[s.stepNumber, { backgroundColor: skillColor + '18' }]}>
                              <Text style={[s.stepNumberText, { color: skillColor }]}>{i + 1}</Text>
                            </View>
                            <Text style={[s.stepText, { color: colors.text2 }]}>{step}</Text>
                          </View>
                        ))}
                      </View>
                    )}

                    {/* Reflection */}
                    {task.reflection && (
                      <View style={[s.reflectionBox, { backgroundColor: colors.amberDim }]}>
                        <InlineIcon name="lightbulb" size={14} color={colors.amber} />
                        <Text style={[s.reflectionText, { color: colors.text }]}>{task.reflection}</Text>
                      </View>
                    )}

                    {/* Completion info */}
                    <View style={[s.completionBar, { borderTopColor: colors.border }]}>
                      <Text style={[s.completionDate, { color: colors.text3 }]}>
                        {formatFullDate(completedAt)}
                      </Text>
                      <View style={[s.xpBadge, { backgroundColor: colors.amberDim }]}>
                        <Text style={[s.xpText, { color: colors.amber }]}>+{points} XP</Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              );
            })()}
          </Pressable>
        </Pressable>
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

  list: { padding: 16, gap: 8, paddingBottom: 40 },

  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    gap: 12,
  },
  taskDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  taskInfo: { flex: 1 },
  taskTitle: { fontSize: 14, fontWeight: '600', lineHeight: 19 },
  taskMeta: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 5 },
  skillChip: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  skillChipText: { fontSize: 11, fontWeight: '700' },
  taskDate: { fontSize: 11 },
  xpBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  xpText: { fontSize: 13, fontWeight: '700' },

  empty: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, gap: 12 },
  emptyText: { fontSize: 15, fontWeight: '500', textAlign: 'center' },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalCard: {
    width: '100%',
    maxWidth: 380,
    borderRadius: 20,
    overflow: 'hidden',
  },
  modalAccent: { height: 6 },
  modalClose: {
    position: 'absolute',
    top: 14,
    right: 14,
    zIndex: 1,
    padding: 4,
  },
  modalBody: {
    padding: 24,
    gap: 12,
  },
  modalTagRow: { flexDirection: 'row', gap: 8 },
  modalTag: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  modalTagText: { fontSize: 12, fontWeight: '700' },
  modalTitle: { fontSize: 20, fontWeight: '800', lineHeight: 26 },
  modalDesc: { fontSize: 15, lineHeight: 22 },

  stepsSection: { marginTop: 8, gap: 10 },
  stepsLabel: { fontSize: 15, fontWeight: '700' },
  stepRow: { flexDirection: 'row', gap: 10, alignItems: 'flex-start' },
  stepNumber: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  stepNumberText: { fontSize: 12, fontWeight: '800' },
  stepText: { flex: 1, fontSize: 14, lineHeight: 20 },

  reflectionBox: {
    flexDirection: 'row',
    gap: 8,
    padding: 12,
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  reflectionText: { flex: 1, fontSize: 13, lineHeight: 19, fontWeight: '500' },

  completionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    paddingTop: 14,
    marginTop: 4,
  },
  completionDate: { fontSize: 12, fontWeight: '500' },
});
