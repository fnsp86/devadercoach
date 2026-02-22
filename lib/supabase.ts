import { createClient } from '@supabase/supabase-js';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

// Secure storage adapter for auth tokens
const ExpoSecureStoreAdapter = {
  getItem: (key: string) => SecureStore.getItemAsync(key),
  setItem: (key: string, value: string) => SecureStore.setItemAsync(key, value),
  removeItem: (key: string) => SecureStore.deleteItemAsync(key),
};

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: Platform.OS !== 'web' ? ExpoSecureStoreAdapter : undefined,
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
}

export interface Story {
  id: string;
  author_id: string;
  content: string;
  category: 'tip' | 'ervaring' | 'vraag' | 'overwinning';
  image_url: string | null;
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
  created_at: string;
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
  nearLat?: number;
  nearLng?: number;
  radiusKm?: number;
}) {
  const limit = opts.limit ?? 20;
  let query = supabase
    .from('stories')
    .select('*, author:profiles!author_id(*)')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (opts.cursor) {
    query = query.lt('created_at', opts.cursor);
  }

  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []) as Story[];
}

export async function createStory(story: {
  author_id: string;
  content: string;
  category: Story['category'];
  image_url?: string;
}) {
  const { data, error } = await supabase
    .from('stories')
    .insert(story)
    .select('*, author:profiles!author_id(*)')
    .single();
  if (error) throw error;
  return data as Story;
}

export async function toggleStoryLike(storyId: string, userId: string) {
  // Check if already liked
  const { data: existing } = await supabase
    .from('story_likes')
    .select('id')
    .eq('story_id', storyId)
    .eq('user_id', userId)
    .single();

  if (existing) {
    await supabase.from('story_likes').delete().eq('id', existing.id);
    return false; // Unliked
  } else {
    await supabase.from('story_likes').insert({ story_id: storyId, user_id: userId });
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
  return data as StoryComment;
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

export async function getOrCreateConversation(userId: string, otherUserId: string) {
  // Check existing
  const { data: existing } = await supabase
    .from('conversations')
    .select('*')
    .or(
      `and(participant1_id.eq.${userId},participant2_id.eq.${otherUserId}),and(participant1_id.eq.${otherUserId},participant2_id.eq.${userId})`
    )
    .single();

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
  await supabase.from('group_members').insert({ group_id: groupId, user_id: userId });
}

export async function leaveGroup(groupId: string, userId: string) {
  await supabase.from('group_members').delete().eq('group_id', groupId).eq('user_id', userId);
}

// ─── Safety ─────────────────────────────────────────────────────

export async function reportContent(report: {
  reporter_id: string;
  reported_user_id: string;
  content_type: 'story' | 'comment' | 'message' | 'profile';
  content_id: string;
  reason: string;
}) {
  await supabase.from('reports').insert(report);
}

export async function blockUser(userId: string, blockedUserId: string) {
  await supabase.from('blocks').insert({ user_id: userId, blocked_user_id: blockedUserId });
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

// ─── Storage helpers ────────────────────────────────────────────

export async function uploadAvatar(userId: string, uri: string) {
  const ext = uri.split('.').pop() ?? 'jpg';
  const path = `${userId}/avatar.${ext}`;

  const response = await fetch(uri);
  const blob = await response.blob();

  const { error } = await supabase.storage.from('avatars').upload(path, blob, {
    upsert: true,
    contentType: `image/${ext}`,
  });
  if (error) throw error;

  const { data } = supabase.storage.from('avatars').getPublicUrl(path);
  return data.publicUrl;
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
