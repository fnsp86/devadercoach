import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { File as ExpoFile } from 'expo-file-system';
import { Platform } from 'react-native';

// AsyncStorage adapter — SecureStore has a 2048-byte limit which breaks
// Supabase session storage (JWT + refresh token easily exceeds this).
// We keep SecureStore import for one-time migration of existing sessions.
const MIGRATED_KEY = 'vc-secure-store-migrated';

const AsyncStorageAdapter = {
  getItem: async (key: string) => {
    const value = await AsyncStorage.getItem(key);
    if (value) return value;

    // One-time migration: check SecureStore for legacy session data
    if (Platform.OS !== 'web') {
      try {
        const migrated = await AsyncStorage.getItem(MIGRATED_KEY);
        if (!migrated) {
          const legacyValue = await SecureStore.getItemAsync(key);
          if (legacyValue) {
            await AsyncStorage.setItem(key, legacyValue);
            await SecureStore.deleteItemAsync(key).catch(() => {});
            await AsyncStorage.setItem(MIGRATED_KEY, '1');
            return legacyValue;
          }
        }
      } catch {}
    }
    return null;
  },
  setItem: (key: string, value: string) => AsyncStorage.setItem(key, value),
  removeItem: (key: string) => AsyncStorage.removeItem(key),
};

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: Platform.OS !== 'web' ? AsyncStorageAdapter : undefined,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// ─── Community Profile Queries ──────────────────────────────────

export interface CommunityProfile {
  id: string;
  user_id: string;
  naam: string;
  bio: string;
  stad: string;
  latitude: number | null;
  longitude: number | null;
  avatar_url: string | null;
  created_at: string;
  is_admin: boolean;
}

export interface Story {
  id: string;
  author_id: string;
  content: string;
  category: 'tip' | 'ervaring' | 'vraag' | 'overwinning' | 'challenge';
  image_url: string | null;
  skill: string | null;
  challenge_week: string | null;
  likes_count: number;
  comments_count: number;
  created_at: string;
  author?: CommunityProfile;
}

export interface StoryComment {
  id: string;
  story_id: string;
  author_id: string;
  content: string;
  created_at: string;
  author?: CommunityProfile;
}

export interface Conversation {
  id: string;
  participant1_id: string;
  participant2_id: string;
  last_message: string | null;
  last_message_at: string | null;
  created_at: string;
  other_user?: CommunityProfile;
}

export interface Message {
  id: string;
  conversation_id: string;
  sender_id: string;
  content: string;
  created_at: string;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  type: 'stad' | 'thema';
  city: string | null;
  member_count: number;
  last_message: string | null;
  last_message_at: string | null;
  created_at: string;
}

export interface ArenaDuel {
  id: string;
  challenger_id: string;
  opponent_id: string;
  skill: string;
  question_seed: string;
  challenger_score: number | null;
  opponent_score: number | null;
  challenger_time_ms: number | null;
  opponent_time_ms: number | null;
  status: 'pending' | 'completed' | 'expired' | 'declined';
  created_at: string;
  completed_at: string | null;
  challenger?: CommunityProfile;
  opponent?: CommunityProfile;
}

export interface GroupMessage {
  id: string;
  group_id: string;
  sender_id: string;
  content: string;
  created_at: string;
  sender?: CommunityProfile;
}

// ─── Profile queries ────────────────────────────────────────────

export async function getCommunityProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .single();
  if (error) return null;
  return data as CommunityProfile;
}

export async function upsertCommunityProfile(profile: Partial<CommunityProfile> & { user_id: string }) {
  const { data, error } = await supabase
    .from('profiles')
    .upsert(profile, { onConflict: 'user_id' })
    .select()
    .single();
  if (error) throw error;
  return data as CommunityProfile;
}

// ─── Nearby queries ─────────────────────────────────────────────

export async function getNearbyFathers(lat: number, lng: number, radiusKm: number = 25) {
  // Uses PostGIS ST_DWithin via RPC
  const { data, error } = await supabase
    .rpc('get_nearby_profiles', {
      user_lat: lat,
      user_lng: lng,
      radius_km: radiusKm,
    });
  if (error) throw error;
  return (data ?? []) as (CommunityProfile & { distance_km: number })[];
}

export async function searchFathersByCity(city: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .ilike('stad', `%${city}%`)
    .order('created_at', { ascending: false })
    .limit(50);
  if (error) throw error;
  return (data ?? []) as CommunityProfile[];
}

// ─── Story queries ──────────────────────────────────────────────

export async function getStories(opts: {
  cursor?: string;
  limit?: number;
  category?: Story['category'];
  nearLat?: number;
  nearLng?: number;
  radiusKm?: number;
}) {
  const limit = opts.limit ?? 20;
  let query = supabase
    .from('stories')
    .select('*, author:profiles!author_id(*), story_likes(count), story_comments(count)')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (opts.category) {
    query = query.eq('category', opts.category);
  }

  if (opts.cursor) {
    query = query.lt('created_at', opts.cursor);
  }

  const { data, error } = await query;
  if (error) throw error;
  // Use real counts from relationship tables (more reliable than denormalized columns)
  return (data ?? []).map((s: any) => ({
    ...s,
    likes_count: s.story_likes?.[0]?.count ?? s.likes_count ?? 0,
    comments_count: s.story_comments?.[0]?.count ?? s.comments_count ?? 0,
  })) as Story[];
}

export async function getUserLikedStoryIds(userId: string, storyIds: string[]): Promise<string[]> {
  if (storyIds.length === 0) return [];
  const { data } = await supabase
    .from('story_likes')
    .select('story_id')
    .eq('user_id', userId)
    .in('story_id', storyIds);
  return (data ?? []).map((d: any) => d.story_id);
}

export async function createStory(story: {
  author_id: string;
  content: string;
  category: Story['category'];
  image_url?: string;
  skill?: string;
  challenge_week?: string;
}) {
  const { data, error } = await supabase
    .from('stories')
    .insert(story)
    .select('*, author:profiles!author_id(*)')
    .single();
  if (error) throw error;
  return data as Story;
}

export async function getChallengeStories(weekKey: string, limit: number = 20): Promise<Story[]> {
  const { data, error } = await supabase
    .from('stories')
    .select('*, author:profiles!author_id(*), story_likes(count), story_comments(count)')
    .eq('challenge_week', weekKey)
    .order('likes_count', { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data ?? []).map((s: any) => ({
    ...s,
    likes_count: s.story_likes?.[0]?.count ?? s.likes_count ?? 0,
    comments_count: s.story_comments?.[0]?.count ?? s.comments_count ?? 0,
  })) as Story[];
}

export async function toggleStoryLike(storyId: string, userId: string) {
  // Check if already liked (maybeSingle avoids error when no row exists)
  const { data: existing } = await supabase
    .from('story_likes')
    .select('id')
    .eq('story_id', storyId)
    .eq('user_id', userId)
    .maybeSingle();

  if (existing) {
    await supabase.from('story_likes').delete().eq('id', existing.id);
    // Best-effort update denormalized count (may fail due to RLS, but real counts are fetched via embedded resources)
    try {
      const { data: story } = await supabase.from('stories').select('likes_count').eq('id', storyId).single();
      if (story) {
        await supabase.from('stories').update({ likes_count: Math.max(0, (story.likes_count ?? 0) - 1) }).eq('id', storyId);
      }
    } catch { /* count update is best-effort */ }
    return false; // Unliked
  } else {
    const { error: insertErr } = await supabase.from('story_likes').insert({ story_id: storyId, user_id: userId });
    if (insertErr) {
      console.warn('[toggleStoryLike] Insert failed:', insertErr.message);
      return false;
    }
    // Best-effort update denormalized count
    try {
      const { data: story } = await supabase.from('stories').select('likes_count').eq('id', storyId).single();
      if (story) {
        await supabase.from('stories').update({ likes_count: (story.likes_count ?? 0) + 1 }).eq('id', storyId);
      }
    } catch { /* count update is best-effort */ }
    return true; // Liked
  }
}

export async function getStoryComments(storyId: string) {
  const { data, error } = await supabase
    .from('story_comments')
    .select('*, author:profiles!author_id(*)')
    .eq('story_id', storyId)
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []) as StoryComment[];
}

export async function addStoryComment(comment: {
  story_id: string;
  author_id: string;
  content: string;
}) {
  const { data, error } = await supabase
    .from('story_comments')
    .insert(comment)
    .select('*, author:profiles!author_id(*)')
    .single();
  if (error) throw error;
  // Increment comments_count on the story
  const { data: story } = await supabase
    .from('stories')
    .select('comments_count')
    .eq('id', comment.story_id)
    .single();
  if (story) {
    await supabase
      .from('stories')
      .update({ comments_count: (story.comments_count ?? 0) + 1 })
      .eq('id', comment.story_id);
  }
  return data as StoryComment;
}

export async function deleteStory(storyId: string) {
  const { error } = await supabase.from('stories').delete().eq('id', storyId);
  if (error) throw error;
}

export async function deleteStoryComment(commentId: string, storyId?: string) {
  const { error } = await supabase.from('story_comments').delete().eq('id', commentId);
  if (error) throw error;
  // Decrement comments_count on the story
  if (storyId) {
    try {
      const { data: story } = await supabase
        .from('stories')
        .select('comments_count')
        .eq('id', storyId)
        .single();
      if (story) {
        await supabase
          .from('stories')
          .update({ comments_count: Math.max(0, (story.comments_count ?? 0) - 1) })
          .eq('id', storyId);
      }
    } catch { /* count update is best-effort */ }
  }
}

// ─── Chat queries ───────────────────────────────────────────────

export async function getConversations(userId: string) {
  const { data, error } = await supabase
    .from('conversations')
    .select('*')
    .or(`participant1_id.eq.${userId},participant2_id.eq.${userId}`)
    .order('last_message_at', { ascending: false, nullsFirst: false });
  if (error) throw error;
  return (data ?? []) as Conversation[];
}

export async function getConversationById(conversationId: string) {
  const { data, error } = await supabase
    .from('conversations')
    .select('*')
    .eq('id', conversationId)
    .single();
  if (error) return null;
  return data as Conversation;
}

export async function getOrCreateConversation(userId: string, otherUserId: string) {
  // Check existing
  const { data: existing } = await supabase
    .from('conversations')
    .select('*')
    .or(
      `and(participant1_id.eq.${userId},participant2_id.eq.${otherUserId}),and(participant1_id.eq.${otherUserId},participant2_id.eq.${userId})`
    )
    .maybeSingle();

  if (existing) return existing as Conversation;

  const { data, error } = await supabase
    .from('conversations')
    .insert({ participant1_id: userId, participant2_id: otherUserId })
    .select()
    .single();
  if (error) throw error;
  return data as Conversation;
}

export async function getMessages(conversationId: string, cursor?: string) {
  let query = supabase
    .from('messages')
    .select('*')
    .eq('conversation_id', conversationId)
    .order('created_at', { ascending: false })
    .limit(50);

  if (cursor) {
    query = query.lt('created_at', cursor);
  }

  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []) as Message[];
}

export async function sendMessage(msg: {
  conversation_id: string;
  sender_id: string;
  content: string;
}) {
  const { data, error } = await supabase
    .from('messages')
    .insert(msg)
    .select()
    .single();
  if (error) throw error;

  // Update conversation last message
  await supabase
    .from('conversations')
    .update({ last_message: msg.content, last_message_at: new Date().toISOString() })
    .eq('id', msg.conversation_id);

  return data as Message;
}

// ─── Groups ─────────────────────────────────────────────────────

export async function getGroups(userId?: string) {
  if (userId) {
    // Get groups where user is a member
    const { data, error } = await supabase
      .from('group_members')
      .select('group:groups(*)')
      .eq('user_id', userId);
    if (error) throw error;
    return (data ?? []).map((d: any) => d.group) as Group[];
  }

  const { data, error } = await supabase
    .from('groups')
    .select('*')
    .order('member_count', { ascending: false });
  if (error) throw error;
  return (data ?? []) as Group[];
}

export async function joinGroup(groupId: string, userId: string) {
  const { error } = await supabase.from('group_members').insert({ group_id: groupId, user_id: userId });
  if (error) throw error;
}

export async function leaveGroup(groupId: string, userId: string) {
  await supabase.from('group_members').delete().eq('group_id', groupId).eq('user_id', userId);
}

export async function getGroupById(groupId: string): Promise<Group | null> {
  const { data, error } = await supabase
    .from('groups')
    .select('*')
    .eq('id', groupId)
    .single();
  if (error) return null;
  return data as Group;
}

export async function getGroupMembers(groupId: string): Promise<CommunityProfile[]> {
  const { data, error } = await supabase
    .from('group_members')
    .select('user_id')
    .eq('group_id', groupId);
  if (error) throw error;
  if (!data || data.length === 0) return [];

  const userIds = data.map((d: any) => d.user_id);
  const { data: profiles } = await supabase
    .from('profiles')
    .select('*')
    .in('user_id', userIds);
  return (profiles ?? []) as CommunityProfile[];
}

export async function getGroupMessages(
  groupId: string,
  cursor?: string,
  limit = 50,
): Promise<GroupMessage[]> {
  let query = supabase
    .from('group_messages')
    .select('*')
    .eq('group_id', groupId)
    .order('created_at', { ascending: false })
    .limit(limit);
  if (cursor) {
    query = query.lt('created_at', cursor);
  }
  const { data, error } = await query;
  if (error) throw error;
  if (!data || data.length === 0) return [];

  // Fetch sender profiles
  const senderIds = [...new Set(data.map((m: any) => m.sender_id))];
  const { data: profiles } = await supabase
    .from('profiles')
    .select('*')
    .in('user_id', senderIds);
  const profileMap = new Map((profiles ?? []).map((p: any) => [p.user_id, p]));

  return data.map((m: any) => ({
    ...m,
    sender: profileMap.get(m.sender_id) ?? null,
  })) as GroupMessage[];
}

export async function sendGroupMessage(
  groupId: string,
  senderId: string,
  content: string,
): Promise<GroupMessage> {
  const { data, error } = await supabase
    .from('group_messages')
    .insert({ group_id: groupId, sender_id: senderId, content })
    .select()
    .single();
  if (error) throw error;

  // Update group's last message
  await supabase
    .from('groups')
    .update({ last_message: content, last_message_at: new Date().toISOString() })
    .eq('id', groupId);

  return data as GroupMessage;
}

export async function discoverGroups(userId: string): Promise<{ myGroups: Group[]; otherGroups: Group[] }> {
  const [myGroups, allGroups] = await Promise.all([
    getGroups(userId),
    getGroups(),
  ]);
  const myGroupIds = new Set(myGroups.map((g) => g.id));
  const otherGroups = allGroups.filter((g) => !myGroupIds.has(g.id));
  return { myGroups, otherGroups };
}

// ─── Arena Duels ────────────────────────────────────────────────

export async function createDuel(
  challengerId: string,
  opponentId: string,
  skill: string,
  questionSeed: string,
): Promise<ArenaDuel> {
  const { data, error } = await supabase
    .from('arena_duels')
    .insert({
      challenger_id: challengerId,
      opponent_id: opponentId,
      skill,
      question_seed: questionSeed,
      status: 'pending',
    })
    .select()
    .single();
  if (error) throw error;
  return data as ArenaDuel;
}

export async function submitDuelScore(
  duelId: string,
  userId: string,
  score: number,
  timeMs: number,
): Promise<ArenaDuel> {
  // Determine if user is challenger or opponent
  const { data: duel, error: fetchError } = await supabase
    .from('arena_duels')
    .select('*')
    .eq('id', duelId)
    .single();
  if (fetchError) throw fetchError;

  const isChallenger = duel.challenger_id === userId;
  const scoreField = isChallenger ? 'challenger_score' : 'opponent_score';
  const timeField = isChallenger ? 'challenger_time_ms' : 'opponent_time_ms';

  const update: Record<string, any> = {
    [scoreField]: score,
    [timeField]: timeMs,
  };

  // If both scores are now present, mark as completed
  const otherScore = isChallenger ? duel.opponent_score : duel.challenger_score;
  if (otherScore !== null) {
    update.status = 'completed';
    update.completed_at = new Date().toISOString();
  }

  const { data, error } = await supabase
    .from('arena_duels')
    .update(update)
    .eq('id', duelId)
    .select()
    .single();
  if (error) throw error;
  return data as ArenaDuel;
}

export async function getPendingDuels(userId: string): Promise<ArenaDuel[]> {
  const { data, error } = await supabase
    .from('arena_duels')
    .select('*')
    .eq('status', 'pending')
    .or(`challenger_id.eq.${userId},opponent_id.eq.${userId}`)
    .order('created_at', { ascending: false });
  if (error) throw error;
  if (!data || data.length === 0) return [];

  // Fetch profiles
  const userIds = [...new Set(data.flatMap((d: any) => [d.challenger_id, d.opponent_id]))];
  const { data: profiles } = await supabase
    .from('profiles')
    .select('*')
    .in('user_id', userIds);
  const profileMap = new Map((profiles ?? []).map((p: any) => [p.user_id, p]));

  return data.map((d: any) => ({
    ...d,
    challenger: profileMap.get(d.challenger_id) ?? null,
    opponent: profileMap.get(d.opponent_id) ?? null,
  })) as ArenaDuel[];
}

export async function getDuelHistory(userId: string, limit = 20): Promise<ArenaDuel[]> {
  const { data, error } = await supabase
    .from('arena_duels')
    .select('*')
    .or(`challenger_id.eq.${userId},opponent_id.eq.${userId}`)
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) throw error;
  if (!data || data.length === 0) return [];

  const userIds = [...new Set(data.flatMap((d: any) => [d.challenger_id, d.opponent_id]))];
  const { data: profiles } = await supabase
    .from('profiles')
    .select('*')
    .in('user_id', userIds);
  const profileMap = new Map((profiles ?? []).map((p: any) => [p.user_id, p]));

  return data.map((d: any) => ({
    ...d,
    challenger: profileMap.get(d.challenger_id) ?? null,
    opponent: profileMap.get(d.opponent_id) ?? null,
  })) as ArenaDuel[];
}

export async function declineDuel(duelId: string, userId?: string): Promise<void> {
  // Get duel info before declining
  const { data: duel } = await supabase
    .from('arena_duels')
    .select('challenger_id, opponent_id, skill')
    .eq('id', duelId)
    .maybeSingle();

  const { error } = await supabase
    .from('arena_duels')
    .update({ status: 'declined' })
    .eq('id', duelId);
  if (error) throw error;

  // Notify challenger via DM (triggers push notification)
  if (duel && userId) {
    const challengerId = duel.challenger_id;
    if (challengerId !== userId) {
      try {
        const conv = await getOrCreateConversation(userId, challengerId);
        await sendMessage({
          conversation_id: conv.id,
          sender_id: userId,
          content: `⚔️ Ik heb het ${duel.skill} duel geweigerd. Daag me gerust opnieuw uit!`,
        });
      } catch { /* DM is optional */ }
    }
  }
}

export async function cancelDuel(duelId: string): Promise<void> {
  await supabase
    .from('arena_duels')
    .update({ status: 'expired' })
    .eq('id', duelId);
}

// ─── Safety ─────────────────────────────────────────────────────

export async function reportContent(report: {
  reporter_id: string;
  reported_user_id: string;
  content_type: 'story' | 'comment' | 'message' | 'profile';
  content_id: string;
  reason: string;
}) {
  const { error } = await supabase.from('reports').insert(report);
  if (error) throw error;
}

export async function blockUser(userId: string, blockedUserId: string) {
  const { error } = await supabase.from('blocks').insert({ user_id: userId, blocked_user_id: blockedUserId });
  if (error) throw error;
}

export async function unblockUser(userId: string, blockedUserId: string) {
  await supabase.from('blocks').delete().eq('user_id', userId).eq('blocked_user_id', blockedUserId);
}

export async function getBlockedUsers(userId: string) {
  const { data } = await supabase
    .from('blocks')
    .select('blocked_user_id')
    .eq('user_id', userId);
  return (data ?? []).map((d: any) => d.blocked_user_id as string);
}

// ─── Account deletion ──────────────────────────────────────────

export async function deleteOwnAccount() {
  const { error } = await supabase.rpc('delete_own_account');
  if (error) throw error;
}

// ─── Admin / Moderation ────────────────────────────────────────

export interface Report {
  id: string;
  reporter_id: string;
  reported_user_id: string;
  content_type: 'story' | 'comment' | 'message' | 'profile';
  content_id: string;
  reason: string;
  status: 'open' | 'resolved' | 'dismissed';
  created_at: string;
}

export async function getReports(status = 'open') {
  const { data, error } = await supabase
    .from('reports')
    .select('*')
    .eq('status', status)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return (data ?? []) as Report[];
}

export async function updateReportStatus(reportId: string, status: 'resolved' | 'dismissed') {
  const { error } = await supabase.from('reports').update({ status }).eq('id', reportId);
  if (error) throw error;
}

export async function sendAccountDeletionEmail(email: string, name: string) {
  try {
    console.log('[deletion-email] Invoking edge function for:', email);
    console.log('[deletion-email] Supabase URL:', supabaseUrl);
    const { data, error } = await supabase.functions.invoke('send-deletion-email', {
      body: { email, name },
    });
    console.log('[deletion-email] Response data:', JSON.stringify(data));
    console.log('[deletion-email] Response error:', JSON.stringify(error));
    if (error) {
      console.error('[deletion-email] Error:', error.message, error);
    } else {
      console.log('[deletion-email] Success:', data);
    }
  } catch (e: any) {
    console.error('[deletion-email] Exception:', e?.message || e);
  }
}

// ─── Daily Arena ────────────────────────────────────────────────

export interface DailyArenaScore {
  id: string;
  user_id: string;
  date: string;
  score: number;
  time_ms: number;
  correct_count: number;
  created_at: string;
  profile?: CommunityProfile;
}

export async function submitDailyArenaScore(
  userId: string,
  date: string,
  score: number,
  timeMs: number,
  correctCount: number,
) {
  const { error } = await supabase
    .from('daily_arena_scores')
    .upsert(
      { user_id: userId, date, score, time_ms: timeMs, correct_count: correctCount },
      { onConflict: 'user_id,date' },
    );
  if (error) throw error;
}

export async function getDailyArenaLeaderboard(
  date: string,
  limit = 20,
): Promise<DailyArenaScore[]> {
  // Step 1: get scores
  const { data: scores, error } = await supabase
    .from('daily_arena_scores')
    .select('*')
    .eq('date', date)
    .order('score', { ascending: false })
    .order('time_ms', { ascending: true })
    .limit(limit);
  if (error) throw error;
  if (!scores || scores.length === 0) return [];

  // Step 2: get profiles for those users
  const userIds = scores.map((s: any) => s.user_id);
  const { data: profiles } = await supabase
    .from('profiles')
    .select('user_id, naam, avatar_url, stad')
    .in('user_id', userIds);

  const profileMap = new Map((profiles ?? []).map((p: any) => [p.user_id, p]));

  return scores.map((s: any) => ({
    ...s,
    profile: profileMap.get(s.user_id) ?? null,
  })) as DailyArenaScore[];
}

export async function getWeeklyArenaLeaderboard(
  weekStartDate: string,
  weekEndDate: string,
  limit = 20,
) {
  // Step 1: get all scores for the week
  const { data, error } = await supabase
    .from('daily_arena_scores')
    .select('user_id, score, time_ms, correct_count')
    .gte('date', weekStartDate)
    .lte('date', weekEndDate)
    .order('score', { ascending: false });
  if (error) throw error;
  if (!data || data.length === 0) return [];

  // Step 2: get profiles for those users
  const uniqueUserIds = [...new Set(data.map((r: any) => r.user_id))];
  const { data: profiles } = await supabase
    .from('profiles')
    .select('user_id, naam, avatar_url, stad')
    .in('user_id', uniqueUserIds);
  const profileMap = new Map((profiles ?? []).map((p: any) => [p.user_id, p]));

  // Group by user and sum scores
  const byUser = new Map<string, { totalScore: number; totalTime: number; totalCorrect: number; days: number; profile: any }>();
  for (const row of data) {
    const existing = byUser.get(row.user_id);
    if (existing) {
      existing.totalScore += row.score;
      existing.totalTime += row.time_ms;
      existing.totalCorrect += row.correct_count;
      existing.days += 1;
    } else {
      byUser.set(row.user_id, {
        totalScore: row.score,
        totalTime: row.time_ms,
        totalCorrect: row.correct_count,
        days: 1,
        profile: profileMap.get(row.user_id) ?? null,
      });
    }
  }

  return [...byUser.entries()]
    .sort((a, b) => b[1].totalScore - a[1].totalScore)
    .slice(0, limit)
    .map(([userId, stats]) => ({
      user_id: userId,
      totalScore: stats.totalScore,
      totalTime: stats.totalTime,
      totalCorrect: stats.totalCorrect,
      days: stats.days,
      profile: stats.profile,
    }));
}

export async function getUserDailyArenaScore(
  userId: string,
  date: string,
): Promise<DailyArenaScore | null> {
  const { data, error } = await supabase
    .from('daily_arena_scores')
    .select('*')
    .eq('user_id', userId)
    .eq('date', date)
    .maybeSingle();
  if (error) throw error;
  return data as DailyArenaScore | null;
}

// ─── Storage helpers ────────────────────────────────────────────

export async function uploadAvatar(userId: string, uri: string) {
  const ext = uri.split('.').pop() ?? 'jpg';
  const path = `${userId}/avatar.${ext}`;

  // Use expo-file-system File class (implements Blob) for reliable RN uploads
  const file = new ExpoFile(uri);
  const arrayBuffer = await file.arrayBuffer();

  const { error } = await supabase.storage.from('avatars').upload(path, arrayBuffer, {
    upsert: true,
    contentType: `image/${ext}`,
  });
  if (error) throw error;

  const { data } = supabase.storage.from('avatars').getPublicUrl(path);
  console.log('[avatar] public url:', data.publicUrl);
  return data.publicUrl + '?t=' + Date.now();
}

export async function uploadStoryImage(userId: string, uri: string) {
  const ext = uri.split('.').pop() ?? 'jpg';
  const path = `${userId}/${Date.now()}.${ext}`;

  const response = await fetch(uri);
  const blob = await response.blob();

  const { error } = await supabase.storage.from('story-images').upload(path, blob, {
    contentType: `image/${ext}`,
  });
  if (error) throw error;

  const { data } = supabase.storage.from('story-images').getPublicUrl(path);
  return data.publicUrl;
}
