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
  getGroupMessages, sendGroupMessage, getGroupById, getGroupMembers,
  leaveGroup, supabase,
  type GroupMessage, type Group, type CommunityProfile,
} from '@/lib/supabase';
import { InlineIcon } from '@/lib/icons';
import * as Haptics from 'expo-haptics';

function formatTime(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
}

export default function GroupChatScreen() {
  const { colors } = useTheme();
  const { user } = useAuth();
  const router = useRouter();
  const { id: groupId } = useLocalSearchParams<{ id: string }>();

  const [messages, setMessages] = useState<GroupMessage[]>([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [group, setGroup] = useState<Group | null>(null);
  const [members, setMembers] = useState<CommunityProfile[]>([]);
  const flatListRef = useRef<FlatList>(null);
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const loadMessages = useCallback(async () => {
    if (!groupId) return;
    try {
      const data = await getGroupMessages(groupId);
      setMessages(data);
    } catch {
      // Silent
    }
  }, [groupId]);

  useEffect(() => {
    if (!groupId) return;
    setLoading(true);

    Promise.all([
      loadMessages(),
      getGroupById(groupId).then(setGroup),
      getGroupMembers(groupId).then(setMembers),
    ]).finally(() => setLoading(false));

    // Realtime subscription with fallback polling
    const channel = supabase
      .channel(`group_messages:${groupId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'group_messages',
          filter: `group_id=eq.${groupId}`,
        },
        (payload) => {
          const newMsg = payload.new as GroupMessage;
          // We don't have sender info from realtime, reload to get it
          loadMessages();
        },
      )
      .subscribe((status) => {
        if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
          if (!pollingRef.current) {
            pollingRef.current = setInterval(loadMessages, 5000);
          }
        } else if (status === 'SUBSCRIBED') {
          if (pollingRef.current) {
            clearInterval(pollingRef.current);
            pollingRef.current = null;
          }
        }
      });

    // Don't start polling unconditionally — only use fallback polling from subscribe() callback

    return () => {
      supabase.removeChannel(channel);
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
    };
  }, [groupId, loadMessages]);

  async function handleSend() {
    if (!text.trim() || !user || !groupId) return;
    const content = text.trim();
    setText('');
    setSending(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    try {
      const msg = await sendGroupMessage(groupId, user.id, content);
      setMessages((prev) => {
        if (prev.some((m) => m.id === msg.id)) return prev;
        return [msg, ...prev];
      });
    } catch {
      setText(content);
    }
    setSending(false);
  }

  function handleMenuPress() {
    if (!group || !user) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    Alert.alert(group.name, `${members.length} leden`, [
      {
        text: `Leden bekijken (${members.length})`,
        onPress: () => {
          const memberNames = members.map((m) => m.naam).join('\n• ');
          Alert.alert('Groepsleden', `• ${memberNames}`);
        },
      },
      {
        text: 'Verlaat groep',
        style: 'destructive',
        onPress: () => {
          Alert.alert(
            'Groep verlaten',
            `Weet je zeker dat je "${group.name}" wilt verlaten?`,
            [
              { text: 'Annuleer', style: 'cancel' },
              {
                text: 'Verlaat',
                style: 'destructive',
                onPress: async () => {
                  try {
                    await leaveGroup(groupId!, user.id);
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                    router.back();
                  } catch {
                    Alert.alert('Fout', 'Kon groep niet verlaten.');
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

  function renderMessage({ item }: { item: GroupMessage }) {
    const isOwn = item.sender_id === user?.id;
    const sender = item.sender;
    return (
      <View style={[styles.messageBubble, isOwn ? styles.ownBubble : styles.otherBubble]}>
        {!isOwn && sender && (
          <Pressable onPress={() => router.push(`/(tabs)/community/profile/${sender.user_id}`)}>
            <Text style={[styles.senderName, { color: colors.amber }]}>{sender.naam}</Text>
          </Pressable>
        )}
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

  const typeLabel = group?.type === 'stad' ? '📍 ' + (group.city ?? '') : '🏷️ Themagroep';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={[styles.header, { borderColor: colors.border }]}>
        <Pressable onPress={() => router.back()} hitSlop={8}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <View style={styles.headerCenter}>
          <View style={[styles.headerIconWrap, { backgroundColor: colors.amberDim }]}>
            <InlineIcon name="users" size={16} color={colors.amber} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.headerTitle, { color: colors.text }]} numberOfLines={1}>
              {group?.name ?? 'Groep'}
            </Text>
            <Text style={[styles.headerSubtitle, { color: colors.text3 }]} numberOfLines={1}>
              {typeLabel} · {members.length} leden
            </Text>
          </View>
        </View>
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
                <Text style={{ fontSize: 36, marginBottom: 12 }}>👋</Text>
                <Text style={[styles.emptyTitle, { color: colors.text }]}>
                  Welkom in {group?.name ?? 'de groep'}!
                </Text>
                <Text style={[styles.emptyText, { color: colors.text3 }]}>
                  Start het gesprek met een berichtje.
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
  headerIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
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
  senderName: { fontSize: 12, fontWeight: '700', marginBottom: 2, marginLeft: 4 },
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
  emptyTitle: { fontSize: 17, fontWeight: '700', marginBottom: 4 },
  emptyText: { fontSize: 15, fontWeight: '500' },
});
