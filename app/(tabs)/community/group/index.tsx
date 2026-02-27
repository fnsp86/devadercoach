import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import {
  discoverGroups, joinGroup,
  type Group,
} from '@/lib/supabase';
import { InlineIcon } from '@/lib/icons';
import * as Haptics from 'expo-haptics';

type GroupFilter = 'mijn' | 'stad' | 'thema';

const FILTERS: { value: GroupFilter; label: string }[] = [
  { value: 'mijn', label: 'Mijn groepen' },
  { value: 'stad', label: 'Stadsgroepen' },
  { value: 'thema', label: 'Themagroepen' },
];

export default function GroupsScreen() {
  const { colors } = useTheme();
  const { user } = useAuth();
  const router = useRouter();

  const [filter, setFilter] = useState<GroupFilter>('mijn');
  const [myGroups, setMyGroups] = useState<Group[]>([]);
  const [otherGroups, setOtherGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const [joining, setJoining] = useState<string | null>(null);

  useEffect(() => {
    loadGroups();
  }, [user]);

  async function loadGroups() {
    if (!user) return;
    setLoading(true);
    try {
      const result = await discoverGroups(user.id);
      setMyGroups(result.myGroups);
      setOtherGroups(result.otherGroups);
    } catch {
      // Silent
    }
    setLoading(false);
  }

  async function handleJoin(group: Group) {
    if (!user) return;
    setJoining(group.id);
    try {
      await joinGroup(group.id, user.id);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      // Move from other to my
      setMyGroups((prev) => [...prev, group]);
      setOtherGroups((prev) => prev.filter((g) => g.id !== group.id));
    } catch {
      Alert.alert('Fout', 'Kon niet lid worden van de groep.');
    }
    setJoining(null);
  }

  const filteredGroups = (() => {
    if (filter === 'mijn') return myGroups;
    if (filter === 'stad') return otherGroups.filter((g) => g.type === 'stad');
    return otherGroups.filter((g) => g.type === 'thema');
  })();

  function renderGroup({ item }: { item: Group }) {
    const isMember = myGroups.some((g) => g.id === item.id);
    const icon = item.type === 'stad' ? '📍' : '🏷️';
    const subtitle = item.type === 'stad' && item.city ? item.city : item.description;

    return (
      <Pressable
        onPress={() => {
          if (isMember) {
            router.push(`/(tabs)/community/group/${item.id}`);
          } else {
            handleJoin(item);
          }
        }}
        style={[styles.groupCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
      >
        <View style={[styles.groupIcon, { backgroundColor: colors.amberDim }]}>
          <Text style={{ fontSize: 20 }}>{icon}</Text>
        </View>
        <View style={styles.groupInfo}>
          <Text style={[styles.groupName, { color: colors.text }]} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={[styles.groupSub, { color: colors.text3 }]} numberOfLines={1}>
            {subtitle}
          </Text>
          <View style={styles.groupMeta}>
            <InlineIcon name="users" size={12} color={colors.text3} />
            <Text style={[styles.groupMembers, { color: colors.text3 }]}>
              {item.member_count} leden
            </Text>
            {item.last_message_at && (
              <Text style={[styles.groupTime, { color: colors.text3 }]}>
                · {formatRelativeTime(item.last_message_at)}
              </Text>
            )}
          </View>
        </View>
        {isMember ? (
          <View style={[styles.badge, { backgroundColor: colors.amberDim }]}>
            <Text style={[styles.badgeText, { color: colors.amber }]}>Lid</Text>
          </View>
        ) : (
          <Pressable
            onPress={() => handleJoin(item)}
            disabled={joining === item.id}
            style={[styles.joinBtn, { backgroundColor: colors.amber }]}
          >
            <Text style={styles.joinBtnText}>
              {joining === item.id ? '...' : 'Word lid'}
            </Text>
          </Pressable>
        )}
      </Pressable>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={[styles.header, { borderColor: colors.border }]}>
        <Pressable onPress={() => router.back()} hitSlop={8}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Groepen</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Filter tabs */}
      <View style={styles.filterRow}>
        {FILTERS.map((f) => (
          <Pressable
            key={f.value}
            onPress={() => setFilter(f.value)}
            style={[
              styles.filterChip,
              {
                backgroundColor: filter === f.value ? colors.amber + '18' : colors.surface,
                borderColor: filter === f.value ? colors.amber : colors.border,
              },
            ]}
          >
            <Text
              style={[
                styles.filterText,
                { color: filter === f.value ? colors.amber : colors.text2 },
              ]}
              numberOfLines={1}
            >
              {f.label}
              {f.value === 'mijn' && myGroups.length > 0 ? ` (${myGroups.length})` : ''}
            </Text>
          </Pressable>
        ))}
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.amber} />
        </View>
      ) : (
        <FlatList
          data={filteredGroups}
          keyExtractor={(item) => item.id}
          renderItem={renderGroup}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={{ fontSize: 36, marginBottom: 12 }}>
                {filter === 'mijn' ? '👥' : '🔍'}
              </Text>
              <Text style={[styles.emptyTitle, { color: colors.text }]}>
                {filter === 'mijn'
                  ? 'Nog geen groepen'
                  : 'Geen groepen gevonden'}
              </Text>
              <Text style={[styles.emptyText, { color: colors.text3 }]}>
                {filter === 'mijn'
                  ? 'Ontdek stads- of themagroepen en word lid!'
                  : 'Nieuwe groepen worden automatisch aangemaakt.'}
              </Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}

function formatRelativeTime(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'nu';
  if (mins < 60) return `${mins}m`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}u`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d`;
  return `${Math.floor(days / 7)}w`;
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  headerTitle: { fontSize: 17, fontWeight: '700' },
  filterRow: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  filterChip: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignItems: 'center' as const,
  },
  filterText: { fontSize: 12, fontWeight: '600' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  listContent: { paddingHorizontal: 16, paddingBottom: 40 },
  groupCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    gap: 12,
  },
  groupIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupInfo: { flex: 1 },
  groupName: { fontSize: 15, fontWeight: '700' },
  groupSub: { fontSize: 13, marginTop: 2 },
  groupMeta: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 },
  groupMembers: { fontSize: 12 },
  groupTime: { fontSize: 12 },
  badge: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: { fontSize: 12, fontWeight: '700' },
  joinBtn: {
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  joinBtnText: { color: '#fff', fontSize: 13, fontWeight: '700' },
  emptyContainer: { alignItems: 'center', paddingTop: 60 },
  emptyTitle: { fontSize: 17, fontWeight: '700', marginBottom: 4 },
  emptyText: { fontSize: 14, textAlign: 'center', paddingHorizontal: 40 },
});
