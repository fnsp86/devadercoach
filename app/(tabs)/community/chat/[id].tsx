import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import {
  getMessages, sendMessage, supabase, getConversationById,
  getCommunityProfile, blockUser, reportContent,
  type Message, type CommunityProfile,
} from '@/lib/supabase';
import { InlineIcon } from '@/lib/icons';
import * as Haptics from 'expo-haptics';

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
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const loadMessages = useCallback(async () => {
    if (!conversationId) return;
    try {
      const data = await getMessages(conversationId);
      setMessages(data);
    } catch {
      // Silent
    }
  }, [conversationId]);

  useEffect(() => {
    if (!conversationId) return;
    setLoading(true);
    loadMessages().finally(() => setLoading(false));

    // Realtime subscription with fallback polling
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
      .subscribe((status) => {
        if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
          // Realtime failed — ensure polling is running
          if (!pollingRef.current) {
            pollingRef.current = setInterval(loadMessages, 5000);
          }
        } else if (status === 'SUBSCRIBED') {
          // Realtime working — stop polling
          if (pollingRef.current) {
            clearInterval(pollingRef.current);
            pollingRef.current = null;
          }
        }
      });

    // Start polling as safety net — Realtime may silently fail
    pollingRef.current = setInterval(loadMessages, 5000);

    return () => {
      supabase.removeChannel(channel);
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
    };
  }, [conversationId, loadMessages]);

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

  async function handleSend() {
    if (!text.trim() || !user || !conversationId) return;
    const content = text.trim();
    setText('');
    setSending(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

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

  function handleMenuPress() {
    if (!otherUser || !user) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    Alert.alert(otherUser.naam, undefined, [
      {
        text: 'Bekijk profiel',
        onPress: () => router.push(`/(tabs)/community/profile/${otherUser.user_id}`),
      },
      {
        text: 'Blokkeer gebruiker',
        style: 'destructive',
        onPress: () => {
          Alert.alert(
            'Blokkeer gebruiker',
            `Weet je zeker dat je ${otherUser.naam} wilt blokkeren? Je ontvangt geen berichten meer van deze persoon.`,
            [
              { text: 'Annuleer', style: 'cancel' },
              {
                text: 'Blokkeer',
                style: 'destructive',
                onPress: async () => {
                  try {
                    await blockUser(user.id, otherUser.user_id);
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                    Alert.alert('Geblokkeerd', `${otherUser.naam} is geblokkeerd.`);
                    router.back();
                  } catch {
                    Alert.alert('Fout', 'Kon gebruiker niet blokkeren. Probeer het opnieuw.');
                  }
                },
              },
            ],
          );
        },
      },
      {
        text: 'Meld misbruik',
        onPress: () => {
          Alert.alert(
            'Meld misbruik',
            'Wil je dit gesprek melden wegens ongepast gedrag?',
            [
              { text: 'Annuleer', style: 'cancel' },
              {
                text: 'Meld',
                style: 'destructive',
                onPress: async () => {
                  try {
                    await reportContent({
                      reporter_id: user.id,
                      reported_user_id: otherUser.user_id,
                      content_type: 'message',
                      content_id: conversationId!,
                      reason: 'Gemeld door gebruiker via chat',
                    });
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                    Alert.alert('Gemeld', 'Bedankt voor je melding. We bekijken dit zo snel mogelijk.');
                  } catch {
                    Alert.alert('Fout', 'Kon melding niet versturen. Probeer het opnieuw.');
                  }
                },
              },
            ],
          );
        },
      },
      { text: 'Annuleer', style: 'cancel' },
    ]);
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
        <Pressable onPress={() => router.back()} hitSlop={8}>
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
          <View>
            <Text style={[styles.headerTitle, { color: colors.text }]} numberOfLines={1}>
              {otherUser?.naam ?? 'Chat'}
            </Text>
            {otherUser?.stad ? (
              <Text style={[styles.headerSubtitle, { color: colors.text3 }]} numberOfLines={1}>
                {otherUser.stad}
              </Text>
            ) : null}
          </View>
        </Pressable>
        <Pressable onPress={handleMenuPress} hitSlop={8} style={styles.menuBtn}>
          <InlineIcon name="moreVertical" size={20} color={colors.text2} />
        </Pressable>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    gap: 4,
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginLeft: 8,
  },
  headerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  headerAvatarPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: { fontSize: 16, fontWeight: '700' },
  headerSubtitle: { fontSize: 12, fontWeight: '500', marginTop: 1 },
  menuBtn: { padding: 4 },
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
});
