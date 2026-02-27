import React, { useMemo, useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
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
import { InlineIcon, getSkillIcon } from '@/lib/icons';
import { PULSE_QUESTIONS } from '@/lib/pulse-questions';
import { BONUSKIND_PULSE_QUESTIONS } from '@/lib/themed-content-bonuskind';
import { GEDRAG_PULSE_QUESTIONS } from '@/lib/themed-content-gedrag';
import { SKILL_COLORS } from '@/lib/colors';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('nl-NL', { weekday: 'short', day: 'numeric', month: 'short' });
}

const ANSWER_COLORS = ['#22C55E', '#60A5FA', '#F59E0B', '#9CA3AF'];

export default function PulseHistoryScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const { pulseCheckIns } = useStore();

  const sortedCheckIns = useMemo(
    () => [...pulseCheckIns].sort((a, b) => b.date.localeCompare(a.date)),
    [pulseCheckIns],
  );

  const questionMap = useMemo(() => {
    const map: Record<string, typeof PULSE_QUESTIONS[0]> = {};
    for (const q of [...PULSE_QUESTIONS, ...BONUSKIND_PULSE_QUESTIONS, ...GEDRAG_PULSE_QUESTIONS]) map[q.id] = q;
    return map;
  }, []);

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const toggleExpand = useCallback((id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId((prev) => prev === id ? null : id);
  }, []);

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      <View style={[s.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.back()} style={s.backBtn}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={[s.title, { color: colors.text }]}>Vader Pulse</Text>
          <Text style={[s.subtitle, { color: colors.text3 }]}>
            {pulseCheckIns.length} check-in{pulseCheckIns.length !== 1 ? 's' : ''}
          </Text>
        </View>
      </View>

      {sortedCheckIns.length === 0 ? (
        <View style={s.empty}>
          <InlineIcon name="activity" size={40} color={colors.text3} />
          <Text style={[s.emptyText, { color: colors.text3 }]}>
            Je hebt nog geen Vader Pulse check-ins gedaan. Doe dagelijks een check-in op het Vandaag-scherm!
          </Text>
        </View>
      ) : (
        <FlatList
          data={sortedCheckIns}
          keyExtractor={(item) => `${item.date}-${item.questionId}`}
          contentContainerStyle={s.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            const question = questionMap[item.questionId];
            const skill = question?.skill;
            const skillColor = skill ? SKILL_COLORS[skill] || colors.amber : colors.amber;
            const answerColor = ANSWER_COLORS[item.antwoordIndex] ?? colors.text3;
            const answerText = question?.antwoorden[item.antwoordIndex];
            const cardId = `${item.date}-${item.questionId}`;
            const isExpanded = expandedId === cardId;

            return (
              <Pressable
                onPress={() => toggleExpand(cardId)}
                style={[s.card, { backgroundColor: colors.surface, borderColor: isExpanded ? skillColor + '60' : colors.border }]}
              >
                <View style={s.cardTop}>
                  <Text style={[s.cardDate, { color: colors.text3 }]}>{formatDate(item.date)}</Text>
                  <View style={s.cardTopRight}>
                    {skill && (
                      <View style={[s.skillChip, { backgroundColor: skillColor + '18' }]}>
                        <InlineIcon name={getSkillIcon(skill)} size={12} color={skillColor} />
                        <Text style={[s.skillChipText, { color: skillColor }]}>{skill}</Text>
                      </View>
                    )}
                    <InlineIcon name={isExpanded ? 'chevronUp' : 'chevronDown'} size={14} color={colors.text3} />
                  </View>
                </View>
                {question && (
                  <Text style={[s.questionText, { color: colors.text }]} numberOfLines={isExpanded ? undefined : 2}>
                    {question.vraag}
                  </Text>
                )}
                {answerText && (
                  <View style={[s.answerRow, { backgroundColor: answerColor + '12' }]}>
                    <View style={[s.answerDot, { backgroundColor: answerColor }]} />
                    <Text style={[s.answerText, { color: colors.text2 }]} numberOfLines={isExpanded ? undefined : 1}>
                      {answerText}
                    </Text>
                  </View>
                )}
                {item.notitie && (
                  <Text style={[s.notitie, { color: colors.text3 }]} numberOfLines={isExpanded ? undefined : 2}>
                    {item.notitie}
                  </Text>
                )}
                {isExpanded && question?.inzicht && (
                  <View style={[s.insightBox, { backgroundColor: skillColor + '10', borderColor: skillColor + '30' }]}>
                    <View style={s.insightHeader}>
                      <InlineIcon name="lightbulb" size={13} color={skillColor} />
                      <Text style={[s.insightLabel, { color: skillColor }]}>Inzicht</Text>
                    </View>
                    <Text style={[s.insightText, { color: colors.text }]}>{question.inzicht}</Text>
                    {question.bron && (
                      <Text style={[s.insightBron, { color: colors.text3 }]}>{question.bron}</Text>
                    )}
                  </View>
                )}
              </Pressable>
            );
          }}
        />
      )}
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

  list: { padding: 16, gap: 10, paddingBottom: 40 },

  card: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    gap: 8,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTopRight: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    gap: 8,
  },
  cardDate: { fontSize: 12, fontWeight: '600' },
  skillChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  skillChipText: { fontSize: 11, fontWeight: '700' },
  questionText: { fontSize: 14, fontWeight: '600', lineHeight: 20 },
  answerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 8,
    padding: 10,
  },
  answerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  answerText: { fontSize: 13, fontWeight: '500', flex: 1 },
  notitie: { fontSize: 12, fontStyle: 'italic', lineHeight: 17 },

  insightBox: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    gap: 6,
  },
  insightHeader: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    gap: 6,
  },
  insightLabel: { fontSize: 12, fontWeight: '700' as const, letterSpacing: 0.3 },
  insightText: { fontSize: 13, lineHeight: 19 },
  insightBron: { fontSize: 11, fontStyle: 'italic' as const },

  empty: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, gap: 12 },
  emptyText: { fontSize: 15, fontWeight: '500', textAlign: 'center' },
});
