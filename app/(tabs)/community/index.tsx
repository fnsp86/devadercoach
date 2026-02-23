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
  ScrollView,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { useStore } from '@/lib/store';
import { getStories, getNearbyFathers, upsertCommunityProfile, type Story, type CommunityProfile } from '@/lib/supabase';
import { InlineIcon, AppIcon } from '@/lib/icons';
import Button from '@/components/Button';
import Card from '@/components/Card';

type CategoryFilter = 'all' | 'tip' | 'ervaring' | 'vraag' | 'overwinning';

const FILTER_OPTIONS: { key: CategoryFilter; label: string; icon: string }[] = [
  { key: 'all', label: 'Alles', icon: 'layers' },
  { key: 'tip', label: 'Tips', icon: 'lightbulb' },
  { key: 'ervaring', label: 'Ervaringen', icon: 'heart' },
  { key: 'vraag', label: 'Vragen', icon: 'helpCircle' },
  { key: 'overwinning', label: 'Wins', icon: 'trophy' },
];

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

const CATEGORY_ICONS: Record<string, string> = {
  tip: 'lightbulb',
  ervaring: 'heart',
  vraag: 'helpCircle',
  overwinning: 'trophy',
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

export default function SocialFeed() {
  const { colors } = useTheme();
  const { user, communityProfile, setCommunityProfile } = useAuth();
  const { profile } = useStore();
  const router = useRouter();

  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [nearbyFathers, setNearbyFathers] = useState<(CommunityProfile & { distance_km: number })[]>([]);
  const [showWelcome, setShowWelcome] = useState(false);

  // Check for first visit + auto-create community profile if missing
  useEffect(() => {
    if (!user) return;
    (async () => {
      // Auto-create community profile if user is logged in but profile is missing
      if (!communityProfile) {
        try {
          const newProf = await upsertCommunityProfile({
            user_id: user.id,
            naam: profile?.naam ?? '',
            bio: '',
            stad: '',
            latitude: null,
            longitude: null,
          });
          setCommunityProfile(newProf);
        } catch {
          // Will retry next time
        }
      }
      // Show welcome on first visit
      const seen = await AsyncStorage.getItem('vc-social-welcome-seen');
      if (!seen) {
        setShowWelcome(true);
      }
    })();
  }, [user, communityProfile]);

  const dismissWelcome = useCallback(async () => {
    setShowWelcome(false);
    await AsyncStorage.setItem('vc-social-welcome-seen', '1');
  }, []);

  const loadStories = useCallback(async () => {
    try {
      const data = await getStories({ limit: 50 });
      setStories(data);
    } catch {
      // Silent fail
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  const loadNearby = useCallback(async () => {
    if (!communityProfile?.latitude || !communityProfile?.longitude) return;
    try {
      const data = await getNearbyFathers(
        communityProfile.latitude,
        communityProfile.longitude,
        25,
      );
      setNearbyFathers(data.filter((f) => f.user_id !== communityProfile.user_id).slice(0, 8));
    } catch {
      // Silent fail
    }
  }, [communityProfile]);

  const filteredStories = filter === 'all'
    ? stories
    : stories.filter((s) => s.category === filter);

  useEffect(() => {
    loadStories();
    loadNearby();
  }, [loadStories, loadNearby]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    loadStories();
    loadNearby();
  }, [loadStories, loadNearby]);

  // Not signed in → show login prompt
  if (!user) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
        <ScrollView contentContainerStyle={styles.setupScroll} showsVerticalScrollIndicator={false}>
          <View style={styles.setupHero}>
            <View style={[styles.setupIconRing, { borderColor: colors.amber + '30' }]}>
              <View style={[styles.setupIconInner, { backgroundColor: colors.amberDim }]}>
                <AppIcon name="users" size="lg" variant="compact" color={colors.amber} iconSize={40} />
              </View>
            </View>
            <Text style={[styles.setupTitle, { color: colors.text }]}>
              Vaders onder elkaar
            </Text>
            <Text style={[styles.setupSubtitle, { color: colors.text2 }]}>
              Log in om ervaringen te delen, vragen te stellen en overwinningen te vieren met andere vaders.
            </Text>
          </View>

          <View style={{ marginTop: 32, paddingHorizontal: 20, gap: 12 }}>
            <Button
              title="Inloggen"
              onPress={() => router.push('/login' as any)}
              variant="primary"
              size="lg"
            />
            <Button
              title="Account aanmaken"
              onPress={() => router.push('/register' as any)}
              variant="secondary"
              size="lg"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  function renderNearbyBanner() {
    if (nearbyFathers.length === 0) return null;
    return (
      <View style={[styles.nearbyCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <View style={styles.nearbyHeader}>
          <View style={styles.nearbyTitleRow}>
            <View style={[styles.nearbyIconWrap, { backgroundColor: '#667eea18' }]}>
              <InlineIcon name="mapPin" size={14} color="#667eea" />
            </View>
            <Text style={[styles.nearbyTitle, { color: colors.text }]}>In de buurt</Text>
          </View>
          <View style={[styles.nearbyCountBadge, { backgroundColor: '#667eea18' }]}>
            <Text style={[styles.nearbyCountText, { color: '#667eea' }]}>{nearbyFathers.length}</Text>
          </View>
        </View>
        <Pressable onPress={() => router.push('/(tabs)/community/discover')}>
          <Text style={styles.nearbyViewAll}>Bekijk alle →</Text>
        </Pressable>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.nearbyScroll}>
          {nearbyFathers.map((father) => (
            <Pressable
              key={father.id}
              onPress={() => router.push(`/(tabs)/community/profile/${father.user_id}`)}
              style={styles.nearbyItem}
            >
              {father.avatar_url ? (
                <Image source={{ uri: father.avatar_url }} style={styles.nearbyAvatar} />
              ) : (
                <View style={[styles.nearbyAvatarPlaceholder, { backgroundColor: colors.amberDim }]}>
                  <Text style={[styles.nearbyInitials, { color: colors.amber }]}>
                    {father.naam?.slice(0, 2).toUpperCase() || '?'}
                  </Text>
                </View>
              )}
              <Text style={[styles.nearbyName, { color: colors.text }]} numberOfLines={1}>
                {father.naam?.split(' ')[0] || 'Vader'}
              </Text>
              <Text style={[styles.nearbyDist, { color: colors.text3 }]}>
                {father.distance_km != null
                  ? father.distance_km < 1 ? '<1 km' : `${Math.round(father.distance_km)} km`
                  : ''}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    );
  }

  function renderStoryCard({ item }: { item: Story }) {
    const catColor = CATEGORY_COLORS[item.category] ?? colors.amber;
    const catIcon = CATEGORY_ICONS[item.category] ?? 'fileText';
    return (
      <Pressable onPress={() => router.push(`/(tabs)/community/story/${item.id}`)}>
        <View style={[styles.storyCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          {/* Author row */}
          <View style={styles.authorRow}>
            {item.author?.avatar_url ? (
              <Image source={{ uri: item.author.avatar_url }} style={styles.avatar} />
            ) : (
              <View style={[styles.avatarPlaceholder, { backgroundColor: colors.amberDim }]}>
                <Text style={[styles.avatarInitials, { color: colors.amber }]}>
                  {item.author?.naam?.slice(0, 2).toUpperCase() || '?'}
                </Text>
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
            <View style={[styles.categoryPill, { backgroundColor: catColor + '14' }]}>
              <InlineIcon name={catIcon as any} size={12} color={catColor} />
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

          {/* Actions bar */}
          <View style={[styles.actionsBar, { borderTopColor: colors.border }]}>
            <View style={styles.actionItem}>
              <InlineIcon name="heart" size={18} color={colors.text3} />
              <Text style={[styles.actionCount, { color: colors.text3 }]}>{item.likes_count}</Text>
            </View>
            <View style={styles.actionItem}>
              <InlineIcon name="messageCircle" size={18} color={colors.text3} />
              <Text style={[styles.actionCount, { color: colors.text3 }]}>{item.comments_count}</Text>
            </View>
            <View style={{ flex: 1 }} />
            <InlineIcon name="arrowRight" size={16} color={colors.text3} />
          </View>
        </View>
      </Pressable>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={[styles.headerTitle, { color: colors.text }]}>Social</Text>
          {communityProfile?.stad && (
            <View style={styles.locationRow}>
              <InlineIcon name="mapPin" size={12} color={colors.text3} />
              <Text style={[styles.locationText, { color: colors.text3 }]}>{communityProfile.stad}</Text>
            </View>
          )}
        </View>
        <View style={styles.headerActions}>
          <Pressable
            onPress={() => router.push('/(tabs)/community/chat/')}
            style={[styles.headerBtn, { backgroundColor: colors.surface, borderColor: colors.border }]}
          >
            <InlineIcon name="messageCircle" size={20} color={colors.text2} />
          </Pressable>
          <Pressable
            onPress={() => router.push(`/(tabs)/community/profile/${user?.id}`)}
            style={[styles.headerBtn, { backgroundColor: colors.surface, borderColor: colors.border }]}
          >
            <InlineIcon name="user" size={20} color={colors.text2} />
          </Pressable>
        </View>
      </View>

      {/* Category filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterScroll}
        contentContainerStyle={styles.filterContent}
      >
        {FILTER_OPTIONS.map((opt) => {
          const active = filter === opt.key;
          const chipColor = opt.key === 'all' ? colors.amber : (CATEGORY_COLORS[opt.key] ?? colors.amber);
          return (
            <Pressable
              key={opt.key}
              onPress={() => setFilter(opt.key)}
              style={[
                styles.filterChip,
                {
                  backgroundColor: active ? chipColor : colors.surface,
                  borderColor: active ? chipColor : colors.border,
                },
              ]}
            >
              <InlineIcon name={opt.icon as any} size={14} color={active ? '#fff' : colors.text3} />
              <Text style={[styles.filterText, { color: active ? '#fff' : colors.text2 }]}>
                {opt.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.amber} />
        </View>
      ) : (
        <FlatList
          data={filteredStories}
          keyExtractor={(item) => item.id}
          renderItem={renderStoryCard}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor={colors.amber} />
          }
          ListHeaderComponent={renderNearbyBanner}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <View style={[styles.emptyIconWrap, { backgroundColor: colors.amberDim }]}>
                <AppIcon name="fileText" size="lg" variant="compact" color={colors.amber} iconSize={32} />
              </View>
              <Text style={[styles.emptyTitle, { color: colors.text }]}>
                Nog geen verhalen
              </Text>
              <Text style={[styles.emptyDesc, { color: colors.text3 }]}>
                Deel als eerste een tip, ervaring of vraag!
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
        <InlineIcon name="penLine" size={20} color="#fff" />
        <Text style={styles.fabText}>Schrijf</Text>
      </Pressable>

      {/* First-visit welcome modal */}
      <Modal visible={showWelcome} transparent animationType="fade" onRequestClose={dismissWelcome}>
        <Pressable style={styles.welcomeOverlay} onPress={dismissWelcome}>
          <Pressable style={[styles.welcomeCard, { backgroundColor: colors.surface }]} onPress={() => {}}>
            <View style={[styles.welcomeAccent, { backgroundColor: colors.amber }]} />
            <View style={styles.welcomeBody}>
              <View style={[styles.welcomeIconWrap, { backgroundColor: colors.amberDim }]}>
                <AppIcon name="users" size="lg" variant="compact" color={colors.amber} iconSize={36} />
              </View>
              <Text style={[styles.welcomeTitle, { color: colors.text }]}>
                Welkom bij Social!
              </Text>
              <Text style={[styles.welcomeDesc, { color: colors.text2 }]}>
                Hier vind je andere vaders. Deel tips, stel vragen, vier overwinningen en steun elkaar.
              </Text>
              <View style={styles.welcomeFeatures}>
                {[
                  { icon: 'penLine', text: 'Schrijf een verhaal of tip' },
                  { icon: 'mapPin', text: 'Ontdek vaders in de buurt' },
                  { icon: 'messageCircle', text: 'Stuur een persoonlijk bericht' },
                ].map((item, i) => (
                  <View key={i} style={styles.welcomeFeatureRow}>
                    <InlineIcon name={item.icon as any} size={16} color={colors.amber} />
                    <Text style={[styles.welcomeFeatureText, { color: colors.text }]}>{item.text}</Text>
                  </View>
                ))}
              </View>
              <Pressable onPress={dismissWelcome} style={[styles.welcomeBtn, { backgroundColor: colors.amber }]}>
                <Text style={styles.welcomeBtnText}>Aan de slag!</Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 10,
  },
  headerTitle: { fontSize: 28, fontWeight: '800' },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 2 },
  locationText: { fontSize: 13, fontWeight: '500' },
  headerActions: { flexDirection: 'row', gap: 8 },
  headerBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Filters
  filterScroll: { maxHeight: 56, flexGrow: 0 },
  filterContent: {
    paddingHorizontal: 20,
    gap: 8,
    paddingVertical: 8,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1.5,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 9,
  },
  filterText: { fontSize: 14, fontWeight: '700' },

  // List
  listContent: { paddingHorizontal: 16, paddingBottom: 100 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  // Nearby card
  nearbyCard: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
  },
  nearbyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  nearbyTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  nearbyIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nearbyTitle: { fontSize: 15, fontWeight: '700' },
  nearbyCountBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  nearbyCountText: { fontSize: 12, fontWeight: '700' },
  nearbyViewAll: { fontSize: 13, fontWeight: '600', color: '#667eea' },
  nearbyScroll: { gap: 16 },
  nearbyItem: {
    alignItems: 'center',
    width: 64,
  },
  nearbyAvatar: { width: 48, height: 48, borderRadius: 24, marginBottom: 6 },
  nearbyAvatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  nearbyInitials: { fontSize: 16, fontWeight: '700' },
  nearbyName: { fontSize: 12, fontWeight: '600', textAlign: 'center' },
  nearbyDist: { fontSize: 11, marginTop: 2 },

  // Story cards
  storyCard: {
    borderWidth: 1,
    borderRadius: 18,
    marginBottom: 12,
    overflow: 'hidden',
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 16,
    paddingBottom: 0,
  },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: { fontSize: 15, fontWeight: '700' },
  authorName: { fontSize: 15, fontWeight: '700' },
  authorMeta: { fontSize: 12, marginTop: 1 },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  categoryText: { fontSize: 12, fontWeight: '700' },
  storyContent: { fontSize: 15, lineHeight: 22, paddingHorizontal: 16, paddingVertical: 12 },
  storyImage: {
    width: '100%',
    height: 200,
    marginBottom: 0,
  },
  actionsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 16,
  },
  actionItem: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  actionCount: { fontSize: 14, fontWeight: '600' },

  // FAB
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    flexDirection: 'row' as const,
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  fabText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700' as const,
  },

  // Setup / onboarding
  setupScroll: {
    flexGrow: 1,
    paddingBottom: 60,
  },
  setupHero: {
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 32,
    gap: 12,
  },
  setupIconRing: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  setupIconInner: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setupTitle: { fontSize: 28, fontWeight: '800', textAlign: 'center' },
  setupSubtitle: { fontSize: 16, textAlign: 'center', lineHeight: 24, paddingHorizontal: 10 },
  setupFeatures: {
    paddingHorizontal: 20,
    marginTop: 32,
    gap: 10,
  },
  setupFeatureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  setupFeatureIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setupFeatureTitle: { fontSize: 15, fontWeight: '700', marginBottom: 2 },
  setupFeatureDesc: { fontSize: 13, lineHeight: 18 },

  // Empty state
  emptyContainer: {
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    gap: 10,
  },
  emptyIconWrap: {
    width: 64,
    height: 64,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  emptyTitle: { fontSize: 18, fontWeight: '700' },
  emptyDesc: { fontSize: 14, lineHeight: 20, textAlign: 'center' },

  // Welcome modal
  welcomeOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  welcomeCard: {
    width: '100%',
    maxWidth: 340,
    borderRadius: 24,
    overflow: 'hidden',
  },
  welcomeAccent: { height: 6 },
  welcomeBody: {
    padding: 28,
    alignItems: 'center',
    gap: 12,
  },
  welcomeIconWrap: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  welcomeTitle: { fontSize: 24, fontWeight: '800', textAlign: 'center' },
  welcomeDesc: { fontSize: 15, lineHeight: 22, textAlign: 'center' },
  welcomeFeatures: { width: '100%', gap: 10, marginTop: 8 },
  welcomeFeatureRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  welcomeFeatureText: { fontSize: 14, fontWeight: '600' },
  welcomeBtn: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  welcomeBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
