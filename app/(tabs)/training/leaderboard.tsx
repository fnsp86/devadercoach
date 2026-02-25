import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { getTodayDateStr } from '@/lib/daily-arena';
import {
  getDailyArenaLeaderboard,
  getWeeklyArenaLeaderboard,
  type DailyArenaScore,
} from '@/lib/supabase';
import { InlineIcon } from '@/lib/icons';

type Tab = 'vandaag' | 'week';

interface WeeklyEntry {
  user_id: string;
  totalScore: number;
  totalTime: number;
  totalCorrect: number;
  days: number;
  profile: any;
}

export default function LeaderboardScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const { user } = useAuth();

  const [tab, setTab] = useState<Tab>('vandaag');
  const [dailyScores, setDailyScores] = useState<DailyArenaScore[]>([]);
  const [weeklyScores, setWeeklyScores] = useState<WeeklyEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const todayStr = getTodayDateStr();

  // Calculate week range (Monday - Sunday)
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(now.getFullYear(), now.getMonth(), diff);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const weekStartDate = monday.toISOString().split('T')[0];
  const weekEndDate = sunday.toISOString().split('T')[0];

  useEffect(() => {
    loadData();
  }, [tab]);

  async function loadData() {
    setLoading(true);
    try {
      if (tab === 'vandaag') {
        const scores = await getDailyArenaLeaderboard(todayStr);
        setDailyScores(scores);
      } else {
        const scores = await getWeeklyArenaLeaderboard(weekStartDate, weekEndDate);
        setWeeklyScores(scores);
      }
    } catch (e) {
      console.warn('[leaderboard] Error loading:', e);
    }
    setLoading(false);
  }

  function formatTime(ms: number) {
    const seconds = Math.round(ms / 1000);
    return `${seconds}s`;
  }

  const myRank = tab === 'vandaag'
    ? dailyScores.findIndex((s) => s.user_id === user?.id) + 1
    : weeklyScores.findIndex((s) => s.user_id === user?.id) + 1;

  function renderDailyItem({ item, index }: { item: DailyArenaScore; index: number }) {
    const rank = index + 1;
    const isMe = item.user_id === user?.id;
    const profile = item.profile as any;
    const name = profile?.naam || 'Vader';
    const avatar = profile?.avatar_url;

    return (
      <View
        style={[
          s.row,
          {
            backgroundColor: isMe ? colors.amberDim : colors.surface,
            borderColor: isMe ? colors.amber + '40' : colors.border,
          },
        ]}
      >
        <View style={s.rankContainer}>
          {rank <= 3 ? (
            <Text style={s.rankEmoji}>{rank === 1 ? '🥇' : rank === 2 ? '🥈' : '🥉'}</Text>
          ) : (
            <Text style={[s.rankText, { color: colors.text3 }]}>{rank}</Text>
          )}
        </View>

        {avatar ? (
          <Image source={{ uri: avatar }} style={s.avatar} />
        ) : (
          <View style={[s.avatarPlaceholder, { backgroundColor: colors.surface2 }]}>
            <Text style={[s.avatarInitials, { color: colors.text3 }]}>
              {name.slice(0, 2).toUpperCase()}
            </Text>
          </View>
        )}

        <View style={s.nameSection}>
          <Text style={[s.name, { color: isMe ? colors.amber : colors.text }]} numberOfLines={1}>
            {isMe ? `${name} (jij)` : name}
          </Text>
          <Text style={[s.detail, { color: colors.text3 }]}>
            {item.correct_count}/5 correct · {formatTime(item.time_ms)}
          </Text>
        </View>

        <Text style={[s.score, { color: colors.amber }]}>{item.score}</Text>
      </View>
    );
  }

  function renderWeeklyItem({ item, index }: { item: WeeklyEntry; index: number }) {
    const rank = index + 1;
    const isMe = item.user_id === user?.id;
    const name = item.profile?.naam || 'Vader';
    const avatar = item.profile?.avatar_url;

    return (
      <View
        style={[
          s.row,
          {
            backgroundColor: isMe ? colors.amberDim : colors.surface,
            borderColor: isMe ? colors.amber + '40' : colors.border,
          },
        ]}
      >
        <View style={s.rankContainer}>
          {rank <= 3 ? (
            <Text style={s.rankEmoji}>{rank === 1 ? '🥇' : rank === 2 ? '🥈' : '🥉'}</Text>
          ) : (
            <Text style={[s.rankText, { color: colors.text3 }]}>{rank}</Text>
          )}
        </View>

        {avatar ? (
          <Image source={{ uri: avatar }} style={s.avatar} />
        ) : (
          <View style={[s.avatarPlaceholder, { backgroundColor: colors.surface2 }]}>
            <Text style={[s.avatarInitials, { color: colors.text3 }]}>
              {name.slice(0, 2).toUpperCase()}
            </Text>
          </View>
        )}

        <View style={s.nameSection}>
          <Text style={[s.name, { color: isMe ? colors.amber : colors.text }]} numberOfLines={1}>
            {isMe ? `${name} (jij)` : name}
          </Text>
          <Text style={[s.detail, { color: colors.text3 }]}>
            {item.days} {item.days === 1 ? 'dag' : 'dagen'} · {item.totalCorrect} correct
          </Text>
        </View>

        <Text style={[s.score, { color: colors.amber }]}>{item.totalScore}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={[s.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.navigate('/(tabs)/leren')} style={s.headerBtn}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <Text style={[s.headerTitle, { color: colors.text }]}>Ranglijst</Text>
        <View style={s.headerBtn} />
      </View>

      {/* Tabs */}
      <View style={[s.tabBar, { backgroundColor: colors.surface }]}>
        <Pressable
          onPress={() => setTab('vandaag')}
          style={[s.tab, tab === 'vandaag' && { backgroundColor: colors.amber }]}
        >
          <Text style={[s.tabText, { color: tab === 'vandaag' ? '#000' : colors.text2 }]}>
            Vandaag
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setTab('week')}
          style={[s.tab, tab === 'week' && { backgroundColor: colors.amber }]}
        >
          <Text style={[s.tabText, { color: tab === 'week' ? '#000' : colors.text2 }]}>
            Deze Week
          </Text>
        </Pressable>
      </View>

      {/* My rank */}
      {myRank > 0 && (
        <View style={[s.myRank, { backgroundColor: colors.amberDim, borderColor: colors.amber + '30' }]}>
          <InlineIcon name="trophy" size={16} color={colors.amber} />
          <Text style={[s.myRankText, { color: colors.amber }]}>
            Jouw positie: #{myRank}
          </Text>
        </View>
      )}

      {/* List */}
      {loading ? (
        <View style={s.loadingContainer}>
          <ActivityIndicator size="large" color={colors.amber} />
        </View>
      ) : (
        <FlatList
          data={tab === 'vandaag' ? dailyScores : (weeklyScores as any)}
          renderItem={tab === 'vandaag' ? renderDailyItem : (renderWeeklyItem as any)}
          keyExtractor={(item: any) => item.user_id || item.id}
          contentContainerStyle={s.list}
          ListEmptyComponent={
            <View style={s.emptyContainer}>
              <InlineIcon name="trophy" size={40} color={colors.text3} />
              <Text style={[s.emptyTitle, { color: colors.text }]}>Nog geen scores</Text>
              <Text style={[s.emptyText, { color: colors.text3 }]}>
                Doe de dagelijkse duel en verschijn hier!
              </Text>
            </View>
          }
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  headerBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { flex: 1, fontSize: 20, fontWeight: '800', textAlign: 'center' },
  tabBar: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 12,
    padding: 3,
    gap: 3,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  tabText: { fontSize: 14, fontWeight: '700' },
  myRank: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginHorizontal: 20,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
  },
  myRankText: { fontSize: 15, fontWeight: '700' },
  list: { padding: 20, gap: 8 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    gap: 12,
  },
  rankContainer: { width: 28, alignItems: 'center' },
  rankEmoji: { fontSize: 20 },
  rankText: { fontSize: 16, fontWeight: '800' },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  avatarPlaceholder: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  avatarInitials: { fontSize: 14, fontWeight: '700' },
  nameSection: { flex: 1 },
  name: { fontSize: 15, fontWeight: '700' },
  detail: { fontSize: 12, fontWeight: '500', marginTop: 2 },
  score: { fontSize: 20, fontWeight: '800' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyContainer: { alignItems: 'center', paddingTop: 60, gap: 12 },
  emptyTitle: { fontSize: 18, fontWeight: '700' },
  emptyText: { fontSize: 14, fontWeight: '500', textAlign: 'center' },
});
