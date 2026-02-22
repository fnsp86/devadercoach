import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { getGroups, joinGroup, leaveGroup, type Group } from '@/lib/supabase';
import { InlineIcon } from '@/lib/icons';
import Card from '@/components/Card';

type Tab = 'mine' | 'discover';

export default function GroupsScreen() {
  const { colors } = useTheme();
  const { user } = useAuth();
  const router = useRouter();

  const [tab, setTab] = useState<Tab>('mine');
  const [myGroups, setMyGroups] = useState<Group[]>([]);
  const [allGroups, setAllGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGroups();
  }, []);

  async function loadGroups() {
    if (!user) return;
    setLoading(true);
    try {
      const [mine, all] = await Promise.all([
        getGroups(user.id),
        getGroups(),
      ]);
      setMyGroups(mine);
      setAllGroups(all);
    } catch {
      // Silent
    }
    setLoading(false);
  }

  async function handleJoin(groupId: string) {
    if (!user) return;
    await joinGroup(groupId, user.id);
    loadGroups();
  }

  async function handleLeave(groupId: string) {
    if (!user) return;
    await leaveGroup(groupId, user.id);
    loadGroups();
  }

  const myGroupIds = new Set(myGroups.map((g) => g.id));
  const groups = tab === 'mine' ? myGroups : allGroups;

  function renderGroup({ item }: { item: Group }) {
    const isMember = myGroupIds.has(item.id);
    return (
      <Card style={{ marginBottom: 10 }}>
        <View style={styles.groupRow}>
          <View style={[styles.groupIcon, { backgroundColor: colors.amberDim }]}>
            <InlineIcon name={item.type === 'stad' ? 'mapPin' : 'users'} size={20} color={colors.amber} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.groupName, { color: colors.text }]}>{item.name}</Text>
            <Text style={[styles.groupDesc, { color: colors.text2 }]} numberOfLines={1}>{item.description}</Text>
            <Text style={[styles.groupMembers, { color: colors.text3 }]}>
              {item.member_count} {item.member_count === 1 ? 'lid' : 'leden'}
            </Text>
          </View>
          <Pressable
            onPress={() => isMember ? handleLeave(item.id) : handleJoin(item.id)}
            style={[styles.joinBtn, { backgroundColor: isMember ? colors.surface2 : colors.amberDim }]}
          >
            <Text style={{ color: isMember ? colors.text2 : colors.amber, fontWeight: '600', fontSize: 13 }}>
              {isMember ? 'Verlaat' : 'Word lid'}
            </Text>
          </Pressable>
        </View>
      </Card>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <Text style={[styles.title, { color: colors.text }]}>Groepen</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Tabs */}
      <View style={[styles.tabBar, { borderColor: colors.border }]}>
        {(['mine', 'discover'] as Tab[]).map((t) => (
          <Pressable
            key={t}
            onPress={() => setTab(t)}
            style={[styles.tab, tab === t && { borderBottomColor: colors.amber, borderBottomWidth: 2 }]}
          >
            <Text style={[styles.tabText, { color: tab === t ? colors.amber : colors.text3 }]}>
              {t === 'mine' ? 'Mijn groepen' : 'Ontdek'}
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
          data={groups}
          keyExtractor={(item) => item.id}
          renderItem={renderGroup}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <InlineIcon name="users" size={40} color={colors.text3} />
              <Text style={[styles.emptyText, { color: colors.text3 }]}>
                {tab === 'mine' ? 'Je bent nog geen lid van groepen.' : 'Geen groepen gevonden.'}
              </Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },
  title: { fontSize: 20, fontWeight: '700' },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginBottom: 12,
  },
  tab: { flex: 1, paddingVertical: 12, alignItems: 'center' },
  tabText: { fontSize: 15, fontWeight: '600' },
  listContent: { paddingHorizontal: 20, paddingBottom: 40 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  groupRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  groupIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupName: { fontSize: 15, fontWeight: '700' },
  groupDesc: { fontSize: 13, marginTop: 2 },
  groupMembers: { fontSize: 12, marginTop: 2 },
  joinBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  emptyContainer: { alignItems: 'center', paddingTop: 60, gap: 12 },
  emptyText: { fontSize: 15, fontWeight: '500', textAlign: 'center' },
});
