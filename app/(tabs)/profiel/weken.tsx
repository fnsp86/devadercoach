import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { getWeekNumber } from '@/lib/week-selector';
import { InlineIcon } from '@/lib/icons';
import WeeklyRecapModal from '@/components/WeeklyRecapModal';

const XP_PER_TASK = 15;
const XP_WEEK_BONUS = 50;

function formatWeekRange(weekKey: string): string {
  const monday = new Date(weekKey + 'T00:00:00');
  const sunday = new Date(weekKey + 'T00:00:00');
  sunday.setDate(sunday.getDate() + 6);
  const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
  return `${monday.toLocaleDateString('nl-NL', opts)} – ${sunday.toLocaleDateString('nl-NL', opts)}`;
}

export default function WekenScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const { weekTaskCompletions, profile } = useStore();
  const [recapWeekKey, setRecapWeekKey] = useState('');

  const weeks = useMemo(() => {
    // Group completions by weekKey (excl. wekelijkse reflectievragen)
    const perWeek: Record<string, { count: number; xp: number }> = {};
    weekTaskCompletions.forEach((c) => {
      if (!perWeek[c.weekKey]) perWeek[c.weekKey] = { count: 0, xp: 0 };
      if (!/^refl_\d{4}-/.test(c.taskId)) perWeek[c.weekKey].count++;
      perWeek[c.weekKey].xp += c.points;
    });

    // Build sorted list, newest first
    return Object.entries(perWeek)
      .map(([weekKey, { count, xp }]) => {
        const complete = count >= 7;
        const totalXP = xp + (complete ? XP_WEEK_BONUS : 0);
        const weekNum = profile?.startDate ? getWeekNumber(weekKey, profile.startDate) : 1;
        return { weekKey, count, xp: totalXP, complete, weekNum };
      })
      .sort((a, b) => b.weekKey.localeCompare(a.weekKey));
  }, [weekTaskCompletions, profile]);

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={[s.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.back()} style={s.backBtn}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <View>
          <Text style={[s.title, { color: colors.text }]}>Weken overzicht</Text>
          <Text style={[s.subtitle, { color: colors.text3 }]}>
            {weeks.filter((w) => w.complete).length} weken voltooid
          </Text>
        </View>
      </View>

      {weeks.length === 0 ? (
        <View style={s.empty}>
          <InlineIcon name="calendarDays" size={48} color={colors.text3} />
          <Text style={[s.emptyText, { color: colors.text3 }]}>
            Voltooi je eerste week met 7 taken!
          </Text>
        </View>
      ) : (
        <FlatList
          data={weeks}
          keyExtractor={(item) => item.weekKey}
          contentContainerStyle={s.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push(`/(tabs)/profiel/week-detail?weekKey=${item.weekKey}` as any)}
              style={[
                s.weekCard,
                {
                  backgroundColor: colors.surface,
                  borderColor: item.complete ? colors.amber + '40' : colors.border,
                  borderWidth: item.complete ? 1.5 : 1,
                },
              ]}
            >
              <View style={s.weekLeft}>
                <View style={[s.weekNumBadge, { backgroundColor: item.complete ? colors.amberDim : colors.surface2 }]}>
                  <Text style={[s.weekNumText, { color: item.complete ? colors.amber : colors.text3 }]}>
                    W{item.weekNum}
                  </Text>
                </View>
                <View>
                  <Text style={[s.weekRange, { color: colors.text }]}>{formatWeekRange(item.weekKey)}</Text>
                  <Text style={[s.weekStats, { color: colors.text3 }]}>
                    {item.count} taken · {item.xp} XP
                  </Text>
                </View>
              </View>

              <View style={s.weekRight}>
                {item.count > 0 && (
                  <Pressable
                    onPress={(e) => { e.stopPropagation(); setRecapWeekKey(item.weekKey); }}
                    style={[s.recapBtn, { backgroundColor: colors.surface2 }]}
                    hitSlop={4}
                  >
                    <InlineIcon name="trophy" size={12} color={colors.text3} />
                  </Pressable>
                )}
                {item.complete ? (
                  <View style={[s.completeBadge, { backgroundColor: colors.amberDim }]}>
                    <InlineIcon name="check" size={14} color={colors.amber} />
                    <Text style={[s.completeText, { color: colors.amber }]}>Klaar</Text>
                  </View>
                ) : (
                  <Text style={[s.progressText, { color: colors.text3 }]}>{item.count}/7</Text>
                )}
                <InlineIcon name="chevronRight" size={18} color={colors.text3} />
              </View>
            </Pressable>
          )}
        />
      )}
      {recapWeekKey !== '' && (
        <WeeklyRecapModal
          visible={recapWeekKey !== ''}
          weekKey={recapWeekKey}
          onClose={() => setRecapWeekKey('')}
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

  list: { padding: 16, gap: 10 },

  weekCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 14,
    padding: 14,
  },
  weekLeft: { flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 },
  weekNumBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekNumText: { fontSize: 14, fontWeight: '800' },
  weekRange: { fontSize: 14, fontWeight: '600' },
  weekStats: { fontSize: 12, marginTop: 2 },

  weekRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  completeBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 },
  completeText: { fontSize: 13, fontWeight: '700' },
  progressText: { fontSize: 14, fontWeight: '600' },

  recapBtn: { width: 30, height: 30, borderRadius: 15, alignItems: 'center' as const, justifyContent: 'center' as const },

  empty: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, padding: 40 },
  emptyText: { fontSize: 16, fontWeight: '500', textAlign: 'center', lineHeight: 24 },
});
