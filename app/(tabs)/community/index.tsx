import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
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
  TextInput,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { useStore } from '@/lib/store';
import {
  getStories,
  getNearbyFathers,
  upsertCommunityProfile,
  toggleStoryLike,
  getUserLikedStoryIds,
  getChallengeStories,
  getGroups,
  type Story,
  type CommunityProfile,
  type Group,
} from '@/lib/supabase';
import { InlineIcon, AppIcon, getSkillIcon } from '@/lib/icons';
import { SKILL_COLORS } from '@/lib/colors';
import { getWeekKey } from '@/lib/week-selector';
import { generateWeeklyCommunityChallenge } from '@/lib/weekly-community-challenge';
import Button from '@/components/Button';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

type ViewMode = 'feed' | 'groepen';
type CategoryFilter = 'all' | 'tip' | 'ervaring' | 'vraag' | 'overwinning' | 'challenge';
type SortMode = 'newest' | 'popular';

const FILTER_OPTIONS: { key: CategoryFilter; label: string; icon: string }[] = [
  { key: 'all', label: 'Alles', icon: 'layers' },
  { key: 'tip', label: 'Tips', icon: 'lightbulb' },
  { key: 'ervaring', label: 'Ervaringen', icon: 'heart' },
  { key: 'vraag', label: 'Vragen', icon: 'helpCircle' },
  { key: 'overwinning', label: 'Wins', icon: 'trophy' },
  { key: 'challenge', label: 'Challenge', icon: 'target' },
];

const CATEGORY_LABELS: Record<string, string> = {
  tip: 'Tip',
  ervaring: 'Ervaring',
  vraag: 'Vraag',
  overwinning: 'Win',
  challenge: 'Challenge',
};

const CATEGORY_COLORS: Record<string, string> = {
  tip: '#667eea',
  ervaring: '#34D399',
  vraag: '#F59E0B',
  overwinning: '#A78BFA',
  challenge: '#EF4444',
};

const CATEGORY_ICONS: Record<string, string> = {
  tip: 'lightbulb',
  ervaring: 'heart',
  vraag: 'helpCircle',
  overwinning: 'trophy',
  challenge: 'target',
};

const EMPTY_STATES: Record<CategoryFilter, { icon: string; title: string; desc: string }> = {
  all: { icon: 'fileText', title: 'Nog geen verhalen', desc: 'Deel als eerste een tip, ervaring of vraag!' },
  tip: { icon: 'lightbulb', title: 'Nog geen tips', desc: 'Ken je een handige vadertip? Deel hem!' },
  ervaring: { icon: 'heart', title: 'Nog geen ervaringen', desc: 'Deel een mooie of leerzame ervaring als vader.' },
  vraag: { icon: 'helpCircle', title: 'Nog geen vragen', desc: 'Stel een vraag aan de community!' },
  overwinning: { icon: 'trophy', title: 'Nog geen overwinningen', desc: 'Vier je eerste vaderoverwinning hier!' },
  challenge: { icon: 'target', title: 'Nog geen challenge verhalen', desc: 'Doe mee aan de weekchallenge en deel je ervaring!' },
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
  const { user, communityProfile, setCommunityProfile, isAdmin } = useAuth();
  const { profile } = useStore();
  const router = useRouter();

  // View mode
  const [viewMode, setViewMode] = useState<ViewMode>('feed');
  const [myGroups, setMyGroups] = useState<Group[]>([]);
  const [groupsLoading, setGroupsLoading] = useState(false);

  // Core state
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [sortMode, setSortMode] = useState<SortMode>('newest');
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [nearbyFathers, setNearbyFathers] = useState<(CommunityProfile & { distance_km: number })[]>([]);
  const [showWelcome, setShowWelcome] = useState(false);
  const [challengeStories, setChallengeStories] = useState<Story[]>([]);

  // Weekly challenge
  const weekKey = useMemo(() => getWeekKey(), []);
  const challenge = useMemo(() => generateWeeklyCommunityChallenge(weekKey), [weekKey]);

  // Pagination
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  // Search
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Likes
  const [likedStoryIds, setLikedStoryIds] = useState<Set<string>>(new Set());
  const [likeDelta, setLikeDelta] = useState<Record<string, number>>({});

  // Check for first visit + auto-create community profile if missing
  useEffect(() => {
    if (!user) return;
    (async () => {
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
      const seen = await AsyncStorage.getItem('vc-social-welcome-seen');
      if (!seen) setShowWelcome(true);
    })();
  }, [user, communityProfile]);

  const dismissWelcome = useCallback(async () => {
    setShowWelcome(false);
    await AsyncStorage.setItem('vc-social-welcome-seen', '1');
  }, []);

  const loadStories = useCallback(async (cat?: CategoryFilter, isBackground = false) => {
    const category = cat ?? filter;
    try {
      const data = await getStories({
        limit: 20,
        category: category === 'all' ? undefined : category,
      });
      setStories(data);
      setCursor(data.length > 0 ? data[data.length - 1].created_at : null);
      setHasMore(data.length === 20);
      if (!isBackground) setLikeDelta({});
      // Load liked state
      if (user && data.length > 0) {
        const ids = data.map((s) => s.id);
        const liked = await getUserLikedStoryIds(user.id, ids);
        setLikedStoryIds(new Set(liked));
      }
    } catch {
      // Silent fail
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [filter, user]);

  const loadMore = useCallback(async () => {
    if (!hasMore || loadingMore || !cursor) return;
    setLoadingMore(true);
    try {
      const cat = filter === 'all' ? undefined : filter;
      const data = await getStories({ limit: 20, cursor, category: cat });
      setStories((prev) => [...prev, ...data]);
      setCursor(data.length > 0 ? data[data.length - 1].created_at : null);
      setHasMore(data.length === 20);
      if (user && data.length > 0) {
        const ids = data.map((s) => s.id);
        const liked = await getUserLikedStoryIds(user.id, ids);
        setLikedStoryIds((prev) => {
          const next = new Set(prev);
          liked.forEach((id) => next.add(id));
          return next;
        });
      }
    } catch { /* silent */ }
    setLoadingMore(false);
  }, [hasMore, loadingMore, cursor, filter, user]);

  const loadNearby = useCallback(async () => {
    if (!communityProfile?.latitude || !communityProfile?.longitude) return;
    try {
      const data = await getNearbyFathers(communityProfile.latitude, communityProfile.longitude, 25);
      setNearbyFathers(data.filter((f) => f.user_id !== communityProfile.user_id).slice(0, 8));
    } catch {
      // Silent fail
    }
  }, [communityProfile]);

  const loadChallengeStories = useCallback(async () => {
    try {
      const data = await getChallengeStories(weekKey, 5);
      setChallengeStories(data);
    } catch { /* silent */ }
  }, [weekKey]);

  const loadMyGroups = useCallback(async () => {
    if (!user) return;
    setGroupsLoading(true);
    try {
      const groups = await getGroups(user.id);
      setMyGroups(groups);
    } catch { /* silent */ }
    setGroupsLoading(false);
  }, [user]);

  // Sorted + filtered stories
  const sortedAndFiltered = useMemo(() => {
    let result = stories;
    // Text search (client-side)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) => s.content.toLowerCase().includes(q) || s.author?.naam?.toLowerCase().includes(q),
      );
    }
    if (sortMode === 'popular') {
      result = [...result].sort((a, b) => b.likes_count - a.likes_count);
    }
    return result;
  }, [stories, sortMode, searchQuery]);

  // Category counts (from loaded stories, for badges)
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: stories.length };
    stories.forEach((s) => {
      counts[s.category] = (counts[s.category] ?? 0) + 1;
    });
    return counts;
  }, [stories]);

  const hasLoadedOnce = useRef(false);

  useFocusEffect(
    useCallback(() => {
      if (hasLoadedOnce.current) {
        // Already have data — refresh silently in background (no spinner)
        loadStories(undefined, true);
      } else {
        // First load — show spinner
        hasLoadedOnce.current = true;
        loadStories();
      }
      loadNearby();
      loadChallengeStories();
      loadMyGroups();
    }, [loadStories, loadNearby, loadChallengeStories, loadMyGroups])
  );

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    loadStories();
    loadNearby();
    loadChallengeStories();
    loadMyGroups();
  }, [loadStories, loadNearby, loadChallengeStories, loadMyGroups]);

  function handleFilterChange(key: CategoryFilter) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setFilter(key);
    setStories([]);
    setLoading(true);
    loadStories(key);
  }

  function handleFeedLike(storyId: string) {
    if (!user) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const wasLiked = likedStoryIds.has(storyId);
    setLikedStoryIds((prev) => {
      const next = new Set(prev);
      wasLiked ? next.delete(storyId) : next.add(storyId);
      return next;
    });
    setLikeDelta((prev) => ({
      ...prev,
      [storyId]: (prev[storyId] ?? 0) + (wasLiked ? -1 : 1),
    }));
    toggleStoryLike(storyId, user.id); // fire and forget
  }

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
            <Text style={[styles.setupTitle, { color: colors.text }]}>Vaders onder elkaar</Text>
            <Text style={[styles.setupSubtitle, { color: colors.text2 }]}>
              Log in om ervaringen te delen, vragen te stellen en overwinningen te vieren met andere vaders.
            </Text>
          </View>
          <View style={{ marginTop: 32, paddingHorizontal: 20, gap: 12 }}>
            <Button title="Inloggen" onPress={() => router.push('/login' as any)} variant="primary" size="lg" />
            <Button title="Account aanmaken" onPress={() => router.push('/register' as any)} variant="secondary" size="lg" />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  function renderChallengeBanner() {
    const skillColor = SKILL_COLORS[challenge.skill as keyof typeof SKILL_COLORS] ?? '#EF4444';
    return (
      <View style={[styles.challengeCard, { backgroundColor: skillColor + '10', borderColor: skillColor + '30' }]}>
        <View style={styles.challengeHeader}>
          <View style={[styles.challengeIconWrap, { backgroundColor: skillColor + '20' }]}>
            <InlineIcon name="target" size={18} color={skillColor} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.challengeLabel, { color: skillColor }]}>WEEKCHALLENGE</Text>
            <Text style={[styles.challengeTitle, { color: colors.text }]}>{challenge.title}</Text>
          </View>
        </View>
        <Text style={[styles.challengeDesc, { color: colors.text2 }]}>{challenge.description}</Text>
        {challengeStories.length > 0 && (
          <View style={styles.challengeStats}>
            <InlineIcon name="users" size={14} color={colors.text3} />
            <Text style={[styles.challengeStatsText, { color: colors.text3 }]}>
              {challengeStories.length} {challengeStories.length === 1 ? 'vader' : 'vaders'} doen mee
            </Text>
          </View>
        )}
        <Pressable
          onPress={() => {
            router.push({
              pathname: '/(tabs)/community/story/create',
              params: {
                prefillCategory: 'challenge',
                prefillSkill: challenge.skill,
                challengeWeek: weekKey,
              },
            } as any);
          }}
          style={[styles.challengeBtn, { backgroundColor: skillColor }]}
        >
          <InlineIcon name="penLine" size={14} color="#fff" />
          <Text style={styles.challengeBtnText}>Deel je ervaring</Text>
        </Pressable>
      </View>
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
          <Pressable onPress={() => router.push('/(tabs)/community/discover')}>
            <Text style={styles.nearbyViewAll}>Bekijk alle →</Text>
          </Pressable>
        </View>
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
                  ? father.distance_km < 1
                    ? '<1 km'
                    : `${Math.round(father.distance_km)} km`
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
    const isLiked = likedStoryIds.has(item.id);
    const displayLikes = item.likes_count + (likeDelta[item.id] ?? 0);

    return (
      <Pressable
        onPress={() => router.push(`/(tabs)/community/story/${item.id}`)}
        style={({ pressed }) => [{ opacity: pressed ? 0.95 : 1, transform: [{ scale: pressed ? 0.985 : 1 }] }]}
      >
        <View style={[styles.storyCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          {/* Category accent stripe */}
          <View style={[styles.categoryAccent, { backgroundColor: catColor }]} />
          <View style={styles.storyCardInner}>
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
                  {item.author?.stad ? `${item.author.stad} · ` : ''}
                  {timeAgo(item.created_at)}
                </Text>
              </View>
              <View style={[styles.categoryPill, { backgroundColor: catColor + '18', borderColor: catColor + '30' }]}>
                <InlineIcon name={catIcon as any} size={11} color={catColor} />
                <Text style={[styles.categoryText, { color: catColor }]}>
                  {CATEGORY_LABELS[item.category]}
                </Text>
              </View>
              {item.skill && (() => {
                const sc = SKILL_COLORS[item.skill as keyof typeof SKILL_COLORS] ?? '#667eea';
                return (
                  <View style={[styles.skillPill, { backgroundColor: sc + '18' }]}>
                    <InlineIcon name={getSkillIcon(item.skill as any)} size={11} color={sc} />
                    <Text style={[styles.skillPillText, { color: sc }]}>{item.skill}</Text>
                  </View>
                );
              })()}
            </View>

            {/* Content */}
            <Text style={[styles.storyContent, { color: colors.text }]} numberOfLines={4}>
              {item.content}
            </Text>

            {/* Actions bar */}
            <View style={[styles.actionsBar, { borderTopColor: colors.border }]}>
              <Pressable
                onPress={(e) => {
                  e.stopPropagation?.();
                  handleFeedLike(item.id);
                }}
                style={styles.actionItem}
                hitSlop={8}
              >
                <InlineIcon name="heart" size={17} color={isLiked ? colors.red : colors.text3} />
                <Text style={[styles.actionCount, { color: isLiked ? colors.red : colors.text3 }]}>
                  {displayLikes}
                </Text>
              </Pressable>
              <View style={styles.actionItem}>
                <InlineIcon name="messageCircle" size={17} color={colors.text3} />
                <Text style={[styles.actionCount, { color: colors.text3 }]}>{item.comments_count}</Text>
              </View>
              <View style={{ flex: 1 }} />
              <InlineIcon name="arrowRight" size={14} color={colors.text3} />
            </View>
          </View>
        </View>
      </Pressable>
    );
  }

  function renderEmptyState() {
    const empty = EMPTY_STATES[filter];
    const catColor = filter === 'all' ? colors.amber : (CATEGORY_COLORS[filter] ?? colors.amber);
    return (
      <View style={styles.emptyContainer}>
        <View style={[styles.emptyIconWrap, { backgroundColor: catColor + '15' }]}>
          <AppIcon name={empty.icon as any} size="lg" variant="compact" color={catColor} iconSize={32} />
        </View>
        <Text style={[styles.emptyTitle, { color: colors.text }]}>{empty.title}</Text>
        <Text style={[styles.emptyDesc, { color: colors.text3 }]}>{empty.desc}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.headerTitle, { color: colors.text }]}>Social</Text>
          {communityProfile?.stad && (
            <View style={styles.locationRow}>
              <InlineIcon name="mapPin" size={12} color={colors.text3} />
              <Text style={[styles.locationText, { color: colors.text3 }]}>{communityProfile.stad}</Text>
            </View>
          )}
        </View>
        <View style={styles.headerActions}>
          {isAdmin && (
            <Pressable
              onPress={() => router.push('/(tabs)/community/reports')}
              style={[styles.headerBtn, { backgroundColor: colors.surface, borderColor: colors.border }]}
            >
              <InlineIcon name="shield" size={20} color={colors.red} />
            </Pressable>
          )}
          <Pressable
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              setSearchVisible((v) => !v);
              if (searchVisible) setSearchQuery('');
            }}
            style={[styles.headerBtn, { backgroundColor: colors.surface, borderColor: colors.border }]}
          >
            <InlineIcon name={searchVisible ? 'x' : 'search'} size={20} color={colors.text2} />
          </Pressable>
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

      {/* Feed / Groepen tab bar */}
      <View style={[styles.viewToggleRow, { borderBottomColor: colors.border }]}>
        {(['feed', 'groepen'] as const).map((mode) => {
          const active = viewMode === mode;
          return (
            <Pressable
              key={mode}
              onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                setViewMode(mode);
              }}
              style={[
                styles.viewToggleTab,
                active && { borderBottomColor: colors.amber, borderBottomWidth: 2 },
              ]}
            >
              <InlineIcon
                name={mode === 'feed' ? 'fileText' : 'users'}
                size={15}
                color={active ? colors.amber : colors.text3}
              />
              <Text style={[styles.viewToggleTabText, { color: active ? colors.amber : colors.text3 }]}>
                {mode === 'feed' ? 'Feed' : 'Groepen'}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {viewMode === 'feed' ? (
        <>
          {/* Search bar */}
          {searchVisible && (
            <View style={styles.searchContainer}>
              <View style={[styles.searchBar, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                <InlineIcon name="search" size={16} color={colors.text3} />
                <TextInput
                  style={[styles.searchInput, { color: colors.text }]}
                  placeholder="Zoek in verhalen..."
                  placeholderTextColor={colors.text3}
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  autoFocus
                  returnKeyType="search"
                />
                {searchQuery.length > 0 && (
                  <Pressable onPress={() => setSearchQuery('')}>
                    <InlineIcon name="x" size={16} color={colors.text3} />
                  </Pressable>
                )}
              </View>
            </View>
          )}

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
              const count = categoryCounts[opt.key] ?? 0;
              return (
                <Pressable
                  key={opt.key}
                  onPress={() => handleFilterChange(opt.key)}
                  style={[
                    styles.filterChip,
                    {
                      backgroundColor: active ? chipColor : colors.surface,
                      borderColor: active ? chipColor : colors.text2,
                    },
                  ]}
                >
                  <InlineIcon name={opt.icon as any} size={15} color={active ? '#fff' : colors.text} />
                  <Text style={[styles.filterText, { color: active ? '#fff' : colors.text }]}>
                    {opt.label}
                  </Text>
                  {count > 0 && (
                    <View
                      style={[
                        styles.filterCountBadge,
                        { backgroundColor: active ? 'rgba(255,255,255,0.25)' : colors.surface2 },
                      ]}
                    >
                      <Text style={[styles.filterCountText, { color: active ? '#fff' : colors.text3 }]}>
                        {count}
                      </Text>
                    </View>
                  )}
                </Pressable>
              );
            })}
          </ScrollView>

          {/* Sort toggle */}
          <View style={[styles.sortRow, { borderBottomColor: colors.border }]}>
            <View style={[styles.sortToggle, { backgroundColor: colors.surface }]}>
              {(['newest', 'popular'] as const).map((mode) => {
                const active = sortMode === mode;
                return (
                  <Pressable
                    key={mode}
                    onPress={() => {
                      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                      setSortMode(mode);
                    }}
                    style={[styles.sortOption, active && { backgroundColor: colors.surface2 }]}
                  >
                    <InlineIcon
                      name={mode === 'newest' ? 'clock' : 'flame'}
                      size={13}
                      color={active ? colors.text : colors.text3}
                    />
                    <Text style={[styles.sortOptionText, { color: active ? colors.text : colors.text3 }]}>
                      {mode === 'newest' ? 'Nieuwste' : 'Populair'}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
            <View style={{ flex: 1 }} />
            <Text style={[styles.resultCount, { color: colors.text3 }]}>
              {sortedAndFiltered.length} {sortedAndFiltered.length === 1 ? 'post' : 'posts'}
            </Text>
          </View>

          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={colors.amber} />
            </View>
          ) : (
            <FlatList
              data={sortedAndFiltered}
              keyExtractor={(item) => item.id}
              renderItem={renderStoryCard}
              contentContainerStyle={styles.listContent}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor={colors.amber} />
              }
              ListHeaderComponent={() => <>{renderChallengeBanner()}{renderNearbyBanner()}</>}
              ListEmptyComponent={renderEmptyState}
              onEndReached={loadMore}
              onEndReachedThreshold={0.5}
              removeClippedSubviews
              maxToRenderPerBatch={10}
              windowSize={5}
              initialNumToRender={10}
              ListFooterComponent={
                loadingMore ? (
                  <View style={{ paddingVertical: 20 }}>
                    <ActivityIndicator size="small" color={colors.amber} />
                  </View>
                ) : null
              }
            />
          )}

        </>
      ) : (
        /* ── Groepen view ── */
        <View style={{ flex: 1 }}>
          {groupsLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={colors.amber} />
            </View>
          ) : myGroups.length > 0 ? (
            <FlatList
              data={myGroups}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContent}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor={colors.amber} />
              }
              ListHeaderComponent={
                <Pressable
                  onPress={() => router.push('/(tabs)/community/group/')}
                  style={[styles.discoverGroupsBtn, { backgroundColor: colors.amberDim, borderColor: colors.amber + '30' }]}
                >
                  <InlineIcon name="search" size={16} color={colors.amber} />
                  <Text style={[styles.discoverGroupsBtnText, { color: colors.amber }]}>Ontdek meer groepen</Text>
                </Pressable>
              }
              renderItem={({ item }) => {
                const icon = item.type === 'stad' ? '📍' : '🏷️';
                return (
                  <Pressable
                    onPress={() => router.push(`/(tabs)/community/group/${item.id}`)}
                    style={[styles.groupCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
                  >
                    <View style={[styles.groupIcon, { backgroundColor: colors.amberDim }]}>
                      <Text style={{ fontSize: 20 }}>{icon}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={[styles.groupName, { color: colors.text }]} numberOfLines={1}>
                        {item.name}
                      </Text>
                      <Text style={[styles.groupSub, { color: colors.text3 }]} numberOfLines={1}>
                        {item.member_count} leden{item.last_message ? ` · ${item.last_message}` : ''}
                      </Text>
                    </View>
                    <InlineIcon name="arrowRight" size={16} color={colors.text3} />
                  </Pressable>
                );
              }}
            />
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={{ fontSize: 36, marginBottom: 12 }}>👥</Text>
              <Text style={[styles.emptyTitle, { color: colors.text }]}>Nog geen groepen</Text>
              <Text style={[styles.emptyDesc, { color: colors.text3 }]}>
                Word lid van een groep om met andere vaders te chatten.
              </Text>
              <Pressable
                onPress={() => router.push('/(tabs)/community/group/')}
                style={[styles.fab, { backgroundColor: colors.amber, position: 'relative', marginTop: 20 }]}
              >
                <InlineIcon name="search" size={18} color="#fff" />
                <Text style={styles.fabText}>Ontdek groepen</Text>
              </Pressable>
            </View>
          )}
        </View>
      )}

      {/* FAB (feed only) */}
      {viewMode === 'feed' && (
        <Pressable
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            router.push('/(tabs)/community/story/create');
          }}
          style={[styles.fab, { backgroundColor: colors.amber }]}
        >
          <InlineIcon name="penLine" size={20} color="#fff" />
          <Text style={styles.fabText}>Schrijf</Text>
        </Pressable>
      )}

      {/* First-visit welcome modal */}
      <Modal visible={showWelcome} transparent animationType="fade" onRequestClose={dismissWelcome}>
        <Pressable style={styles.welcomeOverlay} onPress={dismissWelcome}>
          <Pressable style={[styles.welcomeCard, { backgroundColor: colors.surface }]} onPress={() => {}}>
            <View style={[styles.welcomeAccent, { backgroundColor: colors.amber }]} />
            <View style={styles.welcomeBody}>
              <View style={[styles.welcomeIconWrap, { backgroundColor: colors.amberDim }]}>
                <AppIcon name="users" size="lg" variant="compact" color={colors.amber} iconSize={36} />
              </View>
              <Text style={[styles.welcomeTitle, { color: colors.text }]}>Welkom bij Social!</Text>
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

  // Search
  searchContainer: { paddingHorizontal: 20, paddingBottom: 8 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    gap: 8,
  },
  searchInput: { flex: 1, fontSize: 14, paddingVertical: 10 },

  // Filters
  filterScroll: { flexGrow: 0, flexShrink: 0, zIndex: 1 },
  filterContent: { paddingHorizontal: 20, gap: 8, paddingVertical: 8 },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1.5,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  filterText: { fontSize: 13, fontWeight: '700' },
  filterCountBadge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  filterCountText: { fontSize: 11, fontWeight: '700' },

  // Sort
  sortRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  sortToggle: { flexDirection: 'row', borderRadius: 10, padding: 3 },
  sortOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  sortOptionText: { fontSize: 13, fontWeight: '600' },
  resultCount: { fontSize: 12, fontWeight: '500' },

  // List
  listContent: { paddingHorizontal: 16, paddingBottom: 100 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  // Nearby card
  nearbyCard: { borderWidth: 1, borderRadius: 16, padding: 16, marginBottom: 12 },
  nearbyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  nearbyTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  nearbyIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nearbyTitle: { fontSize: 15, fontWeight: '700' },
  nearbyViewAll: { fontSize: 13, fontWeight: '600', color: '#667eea' },
  nearbyScroll: { gap: 16 },
  nearbyItem: { alignItems: 'center', width: 64 },
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
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  categoryAccent: { width: 4 },
  storyCardInner: { flex: 1 },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 0,
  },
  avatar: { width: 36, height: 36, borderRadius: 18 },
  avatarPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: { fontSize: 13, fontWeight: '700' },
  authorName: { fontSize: 14, fontWeight: '700' },
  authorMeta: { fontSize: 11, marginTop: 1 },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
  },
  categoryText: { fontSize: 11, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.3 },
  skillPill: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  skillPillText: { fontSize: 11, fontWeight: '700' },
  storyContent: { fontSize: 14, lineHeight: 21, paddingHorizontal: 14, paddingTop: 8, paddingBottom: 10 },
  actionsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 16,
  },
  actionItem: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  actionCount: { fontSize: 13, fontWeight: '600' },

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
  fabText: { color: '#fff', fontSize: 15, fontWeight: '700' as const },

  // Setup / onboarding
  setupScroll: { flexGrow: 1, paddingBottom: 60 },
  setupHero: { alignItems: 'center', paddingTop: 60, paddingHorizontal: 32, gap: 12 },
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

  // Empty state
  emptyContainer: { alignItems: 'center', paddingTop: 60, paddingHorizontal: 20, gap: 10 },
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
  welcomeCard: { width: '100%', maxWidth: 340, borderRadius: 24, overflow: 'hidden' },
  welcomeAccent: { height: 6 },
  welcomeBody: { padding: 28, alignItems: 'center', gap: 12 },
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

  // Challenge banner
  challengeCard: { borderWidth: 1, borderRadius: 16, padding: 16, marginBottom: 12, gap: 10 },
  challengeHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  challengeIconWrap: { width: 36, height: 36, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  challengeLabel: { fontSize: 11, fontWeight: '800', letterSpacing: 0.5 },
  challengeTitle: { fontSize: 16, fontWeight: '700', marginTop: 2 },
  challengeDesc: { fontSize: 14, lineHeight: 20 },
  challengeStats: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  challengeStatsText: { fontSize: 13, fontWeight: '600' },
  challengeBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 12, borderRadius: 12, marginTop: 4 },
  challengeBtnText: { color: '#fff', fontSize: 14, fontWeight: '700' },

  // View toggle (Feed / Groepen) — tab bar style
  viewToggleRow: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
  },
  viewToggleTab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  viewToggleTabText: { fontSize: 14, fontWeight: '700' },

  // Groups in community view
  groupCard: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 14, padding: 14, marginBottom: 10, gap: 12 },
  groupIcon: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  groupName: { fontSize: 15, fontWeight: '700' },
  groupSub: { fontSize: 13, marginTop: 2 },
  discoverGroupsBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, borderWidth: 1, borderRadius: 12, paddingVertical: 14, marginBottom: 16 },
  discoverGroupsBtnText: { fontSize: 14, fontWeight: '700' },
});
