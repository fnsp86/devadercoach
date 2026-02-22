import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  RefreshControl,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { getStories, type Story } from '@/lib/supabase';
import { InlineIcon } from '@/lib/icons';
import Button from '@/components/Button';
import Card from '@/components/Card';

type FeedTab = 'all' | 'nearby';

const CATEGORY_LABELS: Record<string, string> = {
  tip: 'Tip',
  ervaring: 'Ervaring',
  vraag: 'Vraag',
  overwinning: 'Overwinning',
};

const CATEGORY_COLORS: Record<string, string> = {
  tip: '#667eea',
  ervaring: '#34D399',
  vraag: '#F59E0B',
  overwinning: '#A78BFA',
};

function timeAgo(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diff = Math.floor((now - then) / 1000);
  if (diff < 60) return 'zojuist';
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}u`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d`;
  return `${Math.floor(diff / 604800)}w`;
}

export default function CommunityFeed() {
  const { colors } = useTheme();
  const { user, communityProfile } = useAuth();
  const router = useRouter();

  const [tab, setTab] = useState<FeedTab>('all');
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadStories = useCallback(async () => {
    try {
      const data = await getStories({ limit: 20 });
      setStories(data);
    } catch {
      // Silent fail — show empty state
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [tab]);

  useEffect(() => {
    loadStories();
  }, [loadStories]);

  // Not signed in or no community profile → show setup
  if (!user || !communityProfile) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
        <View style={styles.setupContainer}>
          <InlineIcon name="users" size={48} color={colors.amber} />
          <Text style={[styles.setupTitle, { color: colors.text }]}>
            Vader Community
          </Text>
          <Text style={[styles.setupSubtitle, { color: colors.text2 }]}>
            Ontmoet andere vaders in je buurt, deel verhalen en leer van elkaar.
          </Text>
          <View style={{ width: '100%', marginTop: 24 }}>
            <Button
              title="Community instellen"
              onPress={() => router.push('/(tabs)/community/setup')}
              variant="primary"
              size="lg"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  function renderStoryCard({ item }: { item: Story }) {
    const catColor = CATEGORY_COLORS[item.category] ?? colors.amber;
    return (
      <Pressable onPress={() => router.push(`/(tabs)/community/story/${item.id}`)}>
        <Card style={{ marginBottom: 12 }}>
          {/* Author row */}
          <View style={styles.authorRow}>
            {item.author?.avatar_url ? (
              <Image source={{ uri: item.author.avatar_url }} style={styles.avatar} />
            ) : (
              <View style={[styles.avatarPlaceholder, { backgroundColor: colors.amberDim }]}>
                <InlineIcon name="user" size={16} color={colors.amber} />
              </View>
            )}
            <View style={{ flex: 1 }}>
              <Text style={[styles.authorName, { color: colors.text }]}>
                {item.author?.naam ?? 'Vader'}
              </Text>
              <Text style={[styles.authorMeta, { color: colors.text3 }]}>
                {item.author?.stad ? `${item.author.stad} · ` : ''}{timeAgo(item.created_at)}
              </Text>
            </View>
            <View style={[styles.categoryBadge, { backgroundColor: catColor + '18' }]}>
              <Text style={[styles.categoryText, { color: catColor }]}>
                {CATEGORY_LABELS[item.category]}
              </Text>
            </View>
          </View>

          {/* Content */}
          <Text style={[styles.storyContent, { color: colors.text }]} numberOfLines={4}>
            {item.content}
          </Text>

          {/* Image */}
          {item.image_url && (
            <Image source={{ uri: item.image_url }} style={styles.storyImage} />
          )}

          {/* Actions */}
          <View style={styles.actionsRow}>
            <View style={styles.actionItem}>
              <InlineIcon name="heart" size={16} color={colors.text3} />
              <Text style={[styles.actionText, { color: colors.text3 }]}>{item.likes_count}</Text>
            </View>
            <View style={styles.actionItem}>
              <InlineIcon name="messageCircle" size={16} color={colors.text3} />
              <Text style={[styles.actionText, { color: colors.text3 }]}>{item.comments_count}</Text>
            </View>
          </View>
        </Card>
      </Pressable>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Community</Text>
        <View style={styles.headerActions}>
          <Pressable
            onPress={() => router.push('/(tabs)/community/chat/')}
            style={[styles.headerBtn, { backgroundColor: colors.surface }]}
          >
            <InlineIcon name="messageCircle" size={20} color={colors.text2} />
          </Pressable>
          <Pressable
            onPress={() => router.push('/(tabs)/community/nearby')}
            style={[styles.headerBtn, { backgroundColor: colors.surface }]}
          >
            <InlineIcon name="mapPin" size={20} color={colors.text2} />
          </Pressable>
        </View>
      </View>

      {/* Tab bar */}
      <View style={[styles.tabBar, { borderColor: colors.border }]}>
        {(['all', 'nearby'] as FeedTab[]).map((t) => (
          <Pressable
            key={t}
            onPress={() => setTab(t)}
            style={[styles.tab, tab === t && { borderBottomColor: colors.amber, borderBottomWidth: 2 }]}
          >
            <Text style={[styles.tabText, { color: tab === t ? colors.amber : colors.text3 }]}>
              {t === 'all' ? 'Iedereen' : 'In de buurt'}
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
          data={stories}
          keyExtractor={(item) => item.id}
          renderItem={renderStoryCard}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); loadStories(); }} tintColor={colors.amber} />
          }
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <InlineIcon name="fileText" size={40} color={colors.text3} />
              <Text style={[styles.emptyText, { color: colors.text3 }]}>
                Nog geen verhalen. Wees de eerste!
              </Text>
            </View>
          }
        />
      )}

      {/* FAB */}
      <Pressable
        onPress={() => router.push('/(tabs)/community/story/create')}
        style={[styles.fab, { backgroundColor: colors.amber }]}
      >
        <InlineIcon name="fileText" size={24} color="#fff" />
      </Pressable>
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
  title: { fontSize: 28, fontWeight: '800' },
  headerActions: { flexDirection: 'row', gap: 8 },
  headerBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginBottom: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabText: { fontSize: 15, fontWeight: '600' },
  listContent: { paddingHorizontal: 20, paddingBottom: 100 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  avatar: { width: 36, height: 36, borderRadius: 18 },
  avatarPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authorName: { fontSize: 14, fontWeight: '700' },
  authorMeta: { fontSize: 12 },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  categoryText: { fontSize: 12, fontWeight: '600' },
  storyContent: { fontSize: 15, lineHeight: 22, marginBottom: 8 },
  storyImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 8,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 4,
  },
  actionItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  actionText: { fontSize: 13, fontWeight: '500' },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  setupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    gap: 12,
  },
  setupTitle: { fontSize: 26, fontWeight: '800', textAlign: 'center', marginTop: 8 },
  setupSubtitle: { fontSize: 16, textAlign: 'center', lineHeight: 24 },
  emptyContainer: {
    alignItems: 'center',
    paddingTop: 60,
    gap: 12,
  },
  emptyText: { fontSize: 15, fontWeight: '500' },
});
