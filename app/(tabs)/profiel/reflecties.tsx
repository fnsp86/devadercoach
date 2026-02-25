import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  Pressable,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import type { WeekTaskCompletion } from '@/lib/store';
import { SKILL_COLORS } from '@/lib/colors';
import { InlineIcon } from '@/lib/icons';
import { ALL_SKILLS } from '@/lib/skills';
import { getLearningModulesForSkill } from '@/lib/learning-modules';
import { transformModuleToStages } from '@/lib/module-stages';
import { getWeeklyReflections } from '@/lib/week-selector';
import { resolveActiveThemes } from '@/lib/theme-resolver';
import type { ReflectionNote, Skill, ThemeTag } from '@/lib/types';

// ── Types ────────────────────────────────────────────────────────────────────

interface CompletedReflection {
  key: string;
  moduleId: string;
  moduleTitle: string;
  skill: string;
  stageId: string;
  question: string;
  note: string | null;
  completedAt: string;
}

interface WeeklyReflectionItem {
  key: string;
  id: string;
  question: string;
  skill: string;
  sourceModuleTitle: string;
  completedAt: string;
  weekKey: string;
}

type Tab = 'modules' | 'weekly';

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('nl-NL', { weekday: 'short', day: 'numeric', month: 'short' });
}

function formatWeekLabel(weekKey: string): string {
  const d = new Date(weekKey + 'T00:00:00');
  return `Week van ${d.toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' })}`;
}

// ── Expandable cards ─────────────────────────────────────────────────────────

function ModuleCard({ item, expanded, onToggle }: {
  item: CompletedReflection;
  expanded: boolean;
  onToggle: () => void;
}) {
  const { colors } = useTheme();
  const skillColor = SKILL_COLORS[item.skill as keyof typeof SKILL_COLORS] || '#F59E0B';

  return (
    <View style={[st.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      {/* Header — always visible, tappable */}
      <Pressable onPress={onToggle} style={st.cardHeader}>
        <View style={[st.cardIcon, { backgroundColor: skillColor + '18' }]}>
          <InlineIcon name="compass" size={18} color={skillColor} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[st.cardTitle, { color: colors.text }]} numberOfLines={expanded ? undefined : 2}>
            {item.question}
          </Text>
          <View style={st.cardMeta}>
            <View style={[st.skillPill, { backgroundColor: skillColor + '18' }]}>
              <Text style={[st.skillPillText, { color: skillColor }]}>{item.skill}</Text>
            </View>
            {item.note ? (
              <View style={[st.skillPill, { backgroundColor: colors.amber + '18' }]}>
                <InlineIcon name="penLine" size={10} color={colors.amber} />
                <Text style={[st.skillPillText, { color: colors.amber }]}>Notitie</Text>
              </View>
            ) : null}
            <Text style={[st.cardDate, { color: colors.text3 }]}>{formatDate(item.completedAt)}</Text>
          </View>
        </View>
        <View style={[st.chevronCircle, { backgroundColor: colors.surface2 }]}>
          <InlineIcon name={expanded ? 'chevronUp' : 'chevronDown'} size={16} color={colors.text2} />
        </View>
      </Pressable>

      {/* Expanded content */}
      {expanded && (
        <View style={[st.expandedBody, { borderTopColor: colors.border }]}>
          <View style={st.expandedSection}>
            <Text style={[st.expandedLabel, { color: colors.text3 }]}>MODULE</Text>
            <Text style={[st.expandedText, { color: colors.text2 }]}>{item.moduleTitle}</Text>
          </View>

          <View style={[st.questionBox, { backgroundColor: skillColor + '08', borderColor: skillColor + '20' }]}>
            <InlineIcon name="compass" size={16} color={skillColor} />
            <Text style={[st.questionText, { color: skillColor }]}>{item.question}</Text>
          </View>

          {item.note ? (
            <View style={st.expandedSection}>
              <View style={st.labelRow}>
                <InlineIcon name="penLine" size={13} color={colors.amber} />
                <Text style={[st.expandedLabel, { color: colors.amber }]}>JOUW NOTITIE</Text>
              </View>
              <Text style={[st.noteText, { color: colors.text }]}>{item.note}</Text>
            </View>
          ) : (
            <View style={[st.noNoteBox, { backgroundColor: colors.surface2 }]}>
              <InlineIcon name="penLine" size={16} color={colors.text3} />
              <Text style={[st.noNoteBoxText, { color: colors.text3 }]}>
                Geen notitie geschreven — je hebt er wel over nagedacht!
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

function WeeklyCard({ item, expanded, onToggle }: {
  item: WeeklyReflectionItem;
  expanded: boolean;
  onToggle: () => void;
}) {
  const { colors } = useTheme();
  const skillColor = SKILL_COLORS[item.skill as keyof typeof SKILL_COLORS] || '#A78BFA';

  return (
    <View style={[st.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      {/* Header — always visible, tappable */}
      <Pressable onPress={onToggle} style={st.cardHeader}>
        <View style={[st.cardIcon, { backgroundColor: '#A78BFA18' }]}>
          <InlineIcon name="brain" size={18} color="#A78BFA" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[st.cardTitle, { color: colors.text }]} numberOfLines={expanded ? undefined : 2}>
            {item.question}
          </Text>
          <View style={st.cardMeta}>
            <View style={[st.skillPill, { backgroundColor: skillColor + '18' }]}>
              <Text style={[st.skillPillText, { color: skillColor }]}>{item.skill}</Text>
            </View>
            <View style={[st.skillPill, { backgroundColor: '#22C55E18' }]}>
              <InlineIcon name="checkCircle" size={10} color="#22C55E" />
              <Text style={[st.skillPillText, { color: '#22C55E' }]}>Afgerond</Text>
            </View>
            <Text style={[st.cardDate, { color: colors.text3 }]}>{formatDate(item.completedAt)}</Text>
          </View>
        </View>
        <View style={[st.chevronCircle, { backgroundColor: colors.surface2 }]}>
          <InlineIcon name={expanded ? 'chevronUp' : 'chevronDown'} size={16} color={colors.text2} />
        </View>
      </Pressable>

      {/* Expanded content */}
      {expanded && (
        <View style={[st.expandedBody, { borderTopColor: colors.border }]}>
          <View style={st.expandedSection}>
            <Text style={[st.expandedLabel, { color: colors.text3 }]}>BRON MODULE</Text>
            <Text style={[st.expandedText, { color: colors.text2 }]}>{item.sourceModuleTitle}</Text>
          </View>

          <View style={[st.questionBox, { backgroundColor: '#A78BFA08', borderColor: '#A78BFA20' }]}>
            <InlineIcon name="brain" size={16} color="#A78BFA" />
            <Text style={[st.questionText, { color: colors.text }]}>{item.question}</Text>
          </View>

          <View style={[st.infoBox, { backgroundColor: colors.surface2 }]}>
            <InlineIcon name="lightbulb" size={15} color={colors.amber} />
            <Text style={[st.infoBoxText, { color: colors.text2 }]}>
              Deze reflectievraag was onderdeel van je wekelijkse reflectieopdrachten ({formatWeekLabel(item.weekKey)}).
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

export default function ReflectiesScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const store = useStore();
  const { reflectionNotes, stageProgress, weekTaskCompletions } = store;
  const activeThemes = useMemo(() => {
    const profile = store.profile;
    if (!profile) return [] as ThemeTag[];
    return resolveActiveThemes(profile);
  }, [store.profile]);
  const [activeTab, setActiveTab] = useState<Tab>('modules');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  function toggle(key: string) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId((prev) => (prev === key ? null : key));
  }

  // ── Leermodule reflecties ──────────────────────────────────────────────────

  const allReflections = useMemo(() => {
    const noteMap = new Map<string, ReflectionNote>();
    for (const n of reflectionNotes) {
      noteMap.set(`${n.moduleId}_${n.stageId}`, n);
    }

    const result: CompletedReflection[] = [];

    for (const skill of ALL_SKILLS) {
      const modules = getLearningModulesForSkill(skill, activeThemes);
      for (const mod of modules) {
        const progress = stageProgress[mod.id];
        if (!progress) continue;

        const moduleStages = transformModuleToStages(mod);
        for (const stage of moduleStages.stages) {
          if (stage.type !== 'reflection') continue;
          if (!progress.completedStageIds.includes(stage.id)) continue;

          const noteKey = `${mod.id}_${stage.id}`;
          const existingNote = noteMap.get(noteKey);

          result.push({
            key: `mod_${mod.id}_${stage.id}`,
            moduleId: mod.id,
            moduleTitle: mod.title,
            skill: skill as string,
            stageId: stage.id,
            question: stage.reflectionQuestion || 'Wat neem je mee uit deze module?',
            note: existingNote?.note ?? null,
            completedAt: existingNote?.createdAt ?? progress.startedAt ?? new Date().toISOString(),
          });
        }
      }
    }

    result.sort((a, b) => b.completedAt.localeCompare(a.completedAt));
    return result;
  }, [reflectionNotes, stageProgress]);

  const withNotes = useMemo(() => allReflections.filter((r) => r.note !== null), [allReflections]);
  const withoutNotes = useMemo(() => allReflections.filter((r) => r.note === null), [allReflections]);

  const moduleSections = useMemo(() => {
    const s: { title: string; data: CompletedReflection[] }[] = [];
    if (withNotes.length > 0) s.push({ title: `Met notitie (${withNotes.length})`, data: withNotes });
    if (withoutNotes.length > 0) s.push({ title: `Zonder notitie (${withoutNotes.length})`, data: withoutNotes });
    return s;
  }, [withNotes, withoutNotes]);

  // ── Wekelijkse reflecties ──────────────────────────────────────────────────

  const weeklyReflections = useMemo(() => {
    const reflCompletions = weekTaskCompletions.filter((c) => /^refl_\d{4}-/.test(c.taskId));
    if (reflCompletions.length === 0) return [];

    const byWeek = new Map<string, WeekTaskCompletion[]>();
    for (const c of reflCompletions) {
      const list = byWeek.get(c.weekKey) || [];
      list.push(c);
      byWeek.set(c.weekKey, list);
    }

    const result: WeeklyReflectionItem[] = [];

    for (const [weekKey, completions] of byWeek) {
      const questions = getWeeklyReflections(ALL_SKILLS, weekKey);
      const questionMap = new Map(questions.map((q) => [q.id, q]));

      for (const c of completions) {
        const q = questionMap.get(c.taskId);
        if (q) {
          result.push({
            key: `wk_${c.taskId}`,
            id: c.taskId,
            question: q.question,
            skill: q.skill,
            sourceModuleTitle: q.sourceModuleTitle,
            completedAt: c.completedAt,
            weekKey,
          });
        }
      }
    }

    result.sort((a, b) => b.completedAt.localeCompare(a.completedAt));
    return result;
  }, [weekTaskCompletions]);

  const weekGroups = useMemo(() => {
    const groups = new Map<string, WeeklyReflectionItem[]>();
    for (const r of weeklyReflections) {
      const list = groups.get(r.weekKey) || [];
      list.push(r);
      groups.set(r.weekKey, list);
    }

    const result: { title: string; data: WeeklyReflectionItem[] }[] = [];
    const sortedKeys = [...groups.keys()].sort((a, b) => b.localeCompare(a));
    for (const key of sortedKeys) {
      result.push({
        title: formatWeekLabel(key),
        data: groups.get(key)!,
      });
    }
    return result;
  }, [weeklyReflections]);

  // ── Counts ─────────────────────────────────────────────────────────────────

  const totalCount = allReflections.length + weeklyReflections.length;

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <SafeAreaView style={[st.safe, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={[st.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.back()} style={st.backBtn}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={[st.headerTitle, { color: colors.text }]}>Mijn Reflecties</Text>
          <Text style={[st.headerSub, { color: colors.text3 }]}>
            {totalCount} {totalCount === 1 ? 'reflectie' : 'reflecties'}
          </Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={[st.tabBar, { borderBottomColor: colors.border }]}>
        <Pressable
          onPress={() => { setActiveTab('modules'); setExpandedId(null); }}
          style={[st.tab, activeTab === 'modules' && { borderBottomColor: colors.amber, borderBottomWidth: 2 }]}
        >
          <InlineIcon name="bookMarked" size={15} color={activeTab === 'modules' ? colors.amber : colors.text3} />
          <Text style={[st.tabText, { color: activeTab === 'modules' ? colors.amber : colors.text3 }]}>
            Leermodules{allReflections.length > 0 ? ` (${allReflections.length})` : ''}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => { setActiveTab('weekly'); setExpandedId(null); }}
          style={[st.tab, activeTab === 'weekly' && { borderBottomColor: '#A78BFA', borderBottomWidth: 2 }]}
        >
          <InlineIcon name="brain" size={15} color={activeTab === 'weekly' ? '#A78BFA' : colors.text3} />
          <Text style={[st.tabText, { color: activeTab === 'weekly' ? '#A78BFA' : colors.text3 }]}>
            Van de week{weeklyReflections.length > 0 ? ` (${weeklyReflections.length})` : ''}
          </Text>
        </Pressable>
      </View>

      {/* Tab content: Leermodules */}
      {activeTab === 'modules' && (
        allReflections.length === 0 ? (
          <View style={st.emptyContainer}>
            <InlineIcon name="penLine" size={48} color={colors.text3} />
            <Text style={[st.emptyTitle, { color: colors.text }]}>Nog geen module-reflecties</Text>
            <Text style={[st.emptyText, { color: colors.text3 }]}>
              Voltooi de reflectiefase in een leermodule. Je reflecties verschijnen hier.
            </Text>
          </View>
        ) : (
          <SectionList
            sections={moduleSections}
            keyExtractor={(item) => item.key}
            contentContainerStyle={st.list}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
            renderSectionHeader={({ section }) => (
              <Text style={[st.sectionTitle, { color: colors.text2 }]}>{section.title}</Text>
            )}
            renderItem={({ item }) => (
              <ModuleCard
                item={item}
                expanded={expandedId === item.key}
                onToggle={() => toggle(item.key)}
              />
            )}
          />
        )
      )}

      {/* Tab content: Van de week */}
      {activeTab === 'weekly' && (
        weeklyReflections.length === 0 ? (
          <View style={st.emptyContainer}>
            <InlineIcon name="brain" size={48} color={colors.text3} />
            <Text style={[st.emptyTitle, { color: colors.text }]}>Nog geen wekelijkse reflecties</Text>
            <Text style={[st.emptyText, { color: colors.text3 }]}>
              Rond de reflectievragen van de week af op je dagelijkse pagina. Ze verschijnen hier.
            </Text>
          </View>
        ) : (
          <SectionList
            sections={weekGroups}
            keyExtractor={(item) => item.key}
            contentContainerStyle={st.list}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
            renderSectionHeader={({ section }) => (
              <View style={st.weekSectionHeader}>
                <InlineIcon name="calendar" size={14} color="#A78BFA" />
                <Text style={[st.weekSectionText, { color: '#A78BFA' }]}>{section.title}</Text>
              </View>
            )}
            renderItem={({ item }) => (
              <WeeklyCard
                item={item}
                expanded={expandedId === item.key}
                onToggle={() => toggle(item.key)}
              />
            )}
          />
        )
      )}
    </SafeAreaView>
  );
}

// ── Styles ───────────────────────────────────────────────────────────────────

const st = StyleSheet.create({
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
  headerTitle: { fontSize: 22, fontWeight: '800' },
  headerSub: { fontSize: 13, fontWeight: '500', marginTop: 2 },

  // Tabs
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabText: { fontSize: 14, fontWeight: '700' },

  list: { padding: 20, paddingBottom: 40 },

  // Section headers
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 10,
    marginTop: 8,
  },
  weekSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
    marginTop: 8,
  },
  weekSectionText: { fontSize: 13, fontWeight: '700' },

  // Card — collapsed
  card: {
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 12,
    overflow: 'hidden',
  },
  chevronCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    minHeight: 56,
  },
  cardIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cardTitle: { fontSize: 14, fontWeight: '700', lineHeight: 20, marginBottom: 4 },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexWrap: 'wrap',
  },
  skillPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 6,
  },
  skillPillText: { fontSize: 11, fontWeight: '700' },
  cardDate: { fontSize: 11, fontWeight: '500' },

  // Card — expanded
  expandedBody: {
    borderTopWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 14,
    gap: 14,
  },
  expandedSection: { gap: 4 },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  expandedLabel: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  expandedText: { fontSize: 14, lineHeight: 20 },
  questionBox: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  questionText: {
    fontSize: 15,
    fontWeight: '700',
    fontStyle: 'italic',
    lineHeight: 22,
    flex: 1,
  },
  noteText: {
    fontSize: 15,
    lineHeight: 24,
  },
  noNoteBox: {
    borderRadius: 10,
    padding: 14,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  noNoteBoxText: { fontSize: 13, flex: 1, lineHeight: 18 },
  infoBox: {
    borderRadius: 10,
    padding: 14,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  infoBoxText: { fontSize: 13, lineHeight: 18, flex: 1 },

  // Empty
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, gap: 12 },
  emptyTitle: { fontSize: 20, fontWeight: '800' },
  emptyText: { fontSize: 14, textAlign: 'center', lineHeight: 20 },
});
