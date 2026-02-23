import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { getMessages, sendMessage, supabase, getConversationById, getCommunityProfile, type Message, type CommunityProfile } from '@/lib/supabase';
import { InlineIcon } from '@/lib/icons';

function formatTime(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
}

export default function ChatScreen() {
  const { colors } = useTheme();
  const { user } = useAuth();
  const router = useRouter();
  const { id: conversationId } = useLocalSearchParams<{ id: string }>();

  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [otherUser, setOtherUser] = useState<CommunityProfile | null>(null);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    if (!conversationId) return;
    loadMessages();

    // Realtime subscription
    const channel = supabase
      .channel(`messages:${conversationId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          const newMsg = payload.new as Message;
          setMessages((prev) => {
            if (prev.some((m) => m.id === newMsg.id)) return prev;
            return [newMsg, ...prev];
          });
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId]);

  useEffect(() => {
    if (!conversationId || !user) return;
    (async () => {
      const conv = await getConversationById(conversationId);
      if (!conv) return;
      const otherUserId = conv.participant1_id === user.id ? conv.participant2_id : conv.participant1_id;
      const profile = await getCommunityProfile(otherUserId);
      setOtherUser(profile);
    })();
  }, [conversationId, user]);

  async function loadMessages() {
    if (!conversationId) return;
    setLoading(true);
    try {
      const data = await getMessages(conversationId);
      setMessages(data);
    } catch {
      // Silent
    }
    setLoading(false);
  }

  async function handleSend() {
    if (!text.trim() || !user || !conversationId) return;
    const content = text.trim();
    setText('');
    setSending(true);

    try {
      const msg = await sendMessage({
        conversation_id: conversationId,
        sender_id: user.id,
        content,
      });
      setMessages((prev) => {
        if (prev.some((m) => m.id === msg.id)) return prev;
        return [msg, ...prev];
      });
    } catch {
      // Restore text on failure
      setText(content);
    }
    setSending(false);
  }

  function renderMessage({ item }: { item: Message }) {
    const isOwn = item.sender_id === user?.id;
    return (
      <View style={[styles.messageBubble, isOwn ? styles.ownBubble : styles.otherBubble]}>
        <View
          style={[
            styles.bubble,
            {
              backgroundColor: isOwn ? colors.amber : colors.surface,
              borderColor: isOwn ? colors.amber : colors.border,
            },
          ]}
        >
          <Text style={[styles.messageText, { color: isOwn ? '#fff' : colors.text }]}>
            {item.content}
          </Text>
          <Text style={[styles.messageTime, { color: isOwn ? 'rgba(255,255,255,0.7)' : colors.text3 }]}>
            {formatTime(item.created_at)}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={[styles.header, { borderColor: colors.border }]}>
        <Pressable onPress={() => router.back()}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <Pressable
          onPress={() => otherUser && router.push(`/(tabs)/community/profile/${otherUser.user_id}`)}
          style={styles.headerCenter}
        >
          {otherUser?.avatar_url ? (
            <Image source={{ uri: otherUser.avatar_url }} style={styles.headerAvatar} />
          ) : otherUser ? (
            <View style={[styles.headerAvatarPlaceholder, { backgroundColor: colors.amberDim }]}>
              <Text style={{ color: colors.amber, fontSize: 11, fontWeight: '700' }}>
                {otherUser.naam?.slice(0, 2).toUpperCase() || '?'}
              </Text>
            </View>
          ) : null}
          <Text style={[styles.headerTitle, { color: colors.text }]} numberOfLines={1}>
            {otherUser?.naam ?? 'Chat'}
          </Text>
        </Pressable>
        <View style={{ width: 22 }} />
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.amber} />
          </View>
        ) : (
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={renderMessage}
            inverted
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={[styles.emptyText, { color: colors.text3 }]}>
                  Stuur je eerste bericht!
                </Text>
              </View>
            }
          />
        )}

        {/* Input */}
        <View style={[styles.inputRow, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <TextInput
            style={[styles.input, { color: colors.text }]}
            placeholder="Typ een bericht..."
            placeholderTextColor={colors.text3}
            value={text}
            onChangeText={setText}
            multiline
            maxLength={2000}
          />
          <Pressable onPress={handleSend} disabled={sending || !text.trim()}>
            <View style={[styles.sendBtn, { backgroundColor: text.trim() ? colors.amber : colors.surface2 }]}>
              <InlineIcon name="arrowRight" size={18} color={text.trim() ? '#fff' : colors.text3} />
            </View>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
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
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  listContent: { paddingHorizontal: 16, paddingVertical: 12 },
  messageBubble: { marginBottom: 6, maxWidth: '80%' },
  ownBubble: { alignSelf: 'flex-end' },
  otherBubble: { alignSelf: 'flex-start' },
  bubble: {
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  messageText: { fontSize: 15, lineHeight: 21 },
  messageTime: { fontSize: 11, marginTop: 4, textAlign: 'right' },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderTopWidth: 1,
    gap: 8,
  },
  input: { flex: 1, fontSize: 15, maxHeight: 100, paddingVertical: 8 },
  sendBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContainer: { alignItems: 'center', paddingTop: 40 },
  emptyText: { fontSize: 15, fontWeight: '500' },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginLeft: 12,
  },
  headerAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  headerAvatarPlaceholder: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
