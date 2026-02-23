import React, { useMemo } from 'react';
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
import { InlineIcon } from '@/lib/icons';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('nl-NL', { weekday: 'short', day: 'numeric', month: 'short' });
}

interface StreakPeriod {
  startDate: string;
  endDate: string;
  length: number;
  isCurrent: boolean;
}

export default function StreaksScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const { pulseCheckIns } = useStore();

  const { currentStreak, longestStreak, totalDays, streakPeriods } = useMemo(() => {
    const sortedDates = [...new Set(pulseCheckIns.map((c) => c.date))].sort();
    const todayStr = new Date().toISOString().split('T')[0];

    if (sortedDates.length === 0) {
      return { currentStreak: 0, longestStreak: 0, totalDays: 0, streakPeriods: [] as StreakPeriod[] };
    }

    // Build streak periods
    const periods: StreakPeriod[] = [];
    let periodStart = sortedDates[0];
    let periodEnd = sortedDates[0];

    for (let i = 1; i < sortedDates.length; i++) {
      const prev = new Date(sortedDates[i - 1]).getTime();
      const curr = new Date(sortedDates[i]).getTime();
      const diffDays = (curr - prev) / (1000 * 60 * 60 * 24);

      if (diffDays === 1) {
        periodEnd = sortedDates[i];
      } else {
        const len = Math.round((new Date(periodEnd).getTime() - new Date(periodStart).getTime()) / (1000 * 60 * 60 * 24)) + 1;
        periods.push({ startDate: periodStart, endDate: periodEnd, length: len, isCurrent: false });
        periodStart = sortedDates[i];
        periodEnd = sortedDates[i];
      }
    }
    // Push last period
    const lastLen = Math.round((new Date(periodEnd).getTime() - new Date(periodStart).getTime()) / (1000 * 60 * 60 * 24)) + 1;
    const lastDiffFromToday = (new Date(todayStr).getTime() - new Date(periodEnd).getTime()) / (1000 * 60 * 60 * 24);
    const isCurrentPeriod = lastDiffFromToday <= 1;
    periods.push({ startDate: periodStart, endDate: periodEnd, length: lastLen, isCurrent: isCurrentPeriod });

    // Sort by length descending
    const sorted = [...periods].sort((a, b) => b.length - a.length);

    const current = isCurrentPeriod ? periods[periods.length - 1].length : 0;
    const longest = sorted.length > 0 ? sorted[0].length : 0;

    return {
      currentStreak: current,
      longestStreak: longest,
      totalDays: sortedDates.length,
      streakPeriods: periods.reverse(), // Most recent first
    };
  }, [pulseCheckIns]);

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={[s.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.back()} style={s.backBtn}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={[s.title, { color: colors.text }]}>Streaks</Text>
          <Text style={[s.subtitle, { color: colors.text3 }]}>{totalDays} actieve dagen</Text>
        </View>
      </View>

      {totalDays === 0 ? (
        <View style={s.empty}>
          <InlineIcon name="flame" size={40} color={colors.text3} />
          <Text style={[s.emptyText, { color: colors.text3 }]}>
            Doe dagelijks een Pulse Check-in om je streak op te bouwen!
          </Text>
        </View>
      ) : (
        <FlatList
          data={streakPeriods}
          keyExtractor={(item) => item.startDate}
          contentContainerStyle={s.list}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={s.statsCards}>
              {/* Current streak */}
              <View style={[s.statCard, { backgroundColor: colors.surface }]}>
                <InlineIcon name="flame" size={28} color="#F97316" />
                <Text style={[s.statCardValue, { color: colors.text }]}>{currentStreak}</Text>
                <Text style={[s.statCardLabel, { color: colors.text3 }]}>Huidige streak</Text>
              </View>
              {/* Longest streak */}
              <View style={[s.statCard, { backgroundColor: colors.surface }]}>
                <InlineIcon name="trophy" size={28} color={colors.amber} />
                <Text style={[s.statCardValue, { color: colors.text }]}>{longestStreak}</Text>
                <Text style={[s.statCardLabel, { color: colors.text3 }]}>Langste streak</Text>
              </View>
            </View>
          }
          renderItem={({ item }) => (
            <View style={[s.periodCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <View style={[s.periodDot, { backgroundColor: item.isCurrent ? '#F97316' : colors.text3 }]} />
              <View style={s.periodInfo}>
                <View style={s.periodTopRow}>
                  <Text style={[s.periodLength, { color: colors.text }]}>
                    {item.length} {item.length === 1 ? 'dag' : 'dagen'}
                  </Text>
                  {item.isCurrent && (
                    <View style={[s.currentBadge, { backgroundColor: '#F9731615' }]}>
                      <Text style={[s.currentBadgeText, { color: '#F97316' }]}>Actief</Text>
                    </View>
                  )}
                </View>
                <Text style={[s.periodDates, { color: colors.text3 }]}>
                  {formatDate(item.startDate)}
                  {item.startDate !== item.endDate ? ` — ${formatDate(item.endDate)}` : ''}
                </Text>
              </View>
            </View>
          )}
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

  list: { padding: 16, gap: 8, paddingBottom: 40 },

  statsCards: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    gap: 6,
  },
  statCardValue: { fontSize: 32, fontWeight: '800' },
  statCardLabel: { fontSize: 13, fontWeight: '600' },

  periodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    gap: 12,
  },
  periodDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  periodInfo: { flex: 1 },
  periodTopRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  periodLength: { fontSize: 15, fontWeight: '700' },
  periodDates: { fontSize: 12, marginTop: 3 },
  currentBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  currentBadgeText: { fontSize: 11, fontWeight: '700' },

  empty: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, gap: 12 },
  emptyText: { fontSize: 15, fontWeight: '500', textAlign: 'center' },
});
