import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase, type Conversation } from './supabase';

const STORAGE_KEY = 'vc-last-read';

type LastReadMap = Record<string, string>; // conversationId -> ISO timestamp

let cache: LastReadMap | null = null;

async function getLastReadMap(): Promise<LastReadMap> {
  if (cache) return cache;
  const stored = await AsyncStorage.getItem(STORAGE_KEY);
  try {
    cache = stored ? JSON.parse(stored) : {};
  } catch {
    cache = {};
  }
  return cache!;
}

/**
 * Mark a conversation as read (stores current timestamp).
 */
export async function markConversationRead(conversationId: string): Promise<void> {
  const map = await getLastReadMap();
  map[conversationId] = new Date().toISOString();
  cache = map;
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

/**
 * Check if a conversation has unread messages.
 */
export function isConversationUnread(
  conversation: Conversation,
  userId: string,
  lastReadMap: LastReadMap,
): boolean {
  if (!conversation.last_message_at) return false;
  const lastRead = lastReadMap[conversation.id];
  if (!lastRead) return true; // never read = unread
  return new Date(conversation.last_message_at) > new Date(lastRead);
}

/**
 * Count unread conversations from a list.
 */
export function countUnread(
  conversations: Conversation[],
  userId: string,
  lastReadMap: LastReadMap,
): number {
  return conversations.filter((c) => isConversationUnread(c, userId, lastReadMap)).length;
}

/**
 * Get total unread count (fetches conversations from Supabase).
 */
export async function getUnreadCount(userId: string): Promise<number> {
  const { data } = await supabase
    .from('conversations')
    .select('id, last_message_at')
    .or(`participant1_id.eq.${userId},participant2_id.eq.${userId}`)
    .not('last_message_at', 'is', null);

  if (!data || data.length === 0) return 0;

  const lastReadMap = await getLastReadMap();
  return data.filter((conv) => {
    const lastRead = lastReadMap[conv.id];
    if (!lastRead) return true;
    return new Date(conv.last_message_at!) > new Date(lastRead);
  }).length;
}

/**
 * Get the last read map (for use in components).
 */
export async function loadLastReadMap(): Promise<LastReadMap> {
  return getLastReadMap();
}

/**
 * Subscribe to new messages via Supabase realtime.
 * Returns an unsubscribe function.
 */
export function subscribeToNewMessages(
  userId: string,
  onNewMessage: (conversationId: string) => void,
): () => void {
  const channel = supabase
    .channel('unread-messages')
    .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: 'conversations',
      },
      (payload) => {
        const conv = payload.new as any;
        // Only notify if this user is a participant
        if (conv.participant1_id === userId || conv.participant2_id === userId) {
          onNewMessage(conv.id);
        }
      },
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}
