import React, { useState, useEffect } from 'react';
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
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { supabase, type Group } from '@/lib/supabase';
import { InlineIcon } from '@/lib/icons';

interface GroupMessage {
  id: string;
  group_id: string;
  sender_id: string;
  content: string;
  created_at: string;
  sender_name?: string;
}

function formatTime(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
}

export default function GroupDetail() {
  const { colors } = useTheme();
  const { user } = useAuth();
  const router = useRouter();
  const { id: groupId } = useLocalSearchParams<{ id: string }>();

  const [group, setGroup] = useState<Group | null>(null);
  const [messages, setMessages] = useState<GroupMessage[]>([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!groupId) return;
    loadGroup();

    // Realtime
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
  }, [groupId]);

  async function loadGroup() {
    if (!groupId) return;

    const { data: groupData } = await supabase
      .from('groups')
      .select('*')
      .eq('id', groupId)
      .single();
    if (groupData) setGroup(groupData as Group);

    const { data: msgs } = await supabase
      .from('group_messages')
      .select('*')
      .eq('group_id', groupId)
      .order('created_at', { ascending: false })
      .limit(50);
    setMessages((msgs ?? []) as GroupMessage[]);
    setLoading(false);
  }

  async function handleSend() {
    if (!text.trim() || !user || !groupId) return;
    const content = text.trim();
    setText('');

    await supabase.from('group_messages').insert({
      group_id: groupId,
      sender_id: user.id,
      content,
    });
  }

  function renderMessage({ item }: { item: GroupMessage }) {
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
      <View style={[styles.header, { borderColor: colors.border }]}>
        <Pressable onPress={() => router.back()}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <Text style={[styles.headerTitle, { color: colors.text }]} numberOfLines={1}>
          {group?.name ?? 'Groep'}
        </Text>
        <View style={{ width: 22 }} />
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.amber} />
          </View>
        ) : (
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={renderMessage}
            inverted
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
        )}

        <View style={[styles.inputRow, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <TextInput
            style={[styles.input, { color: colors.text }]}
            placeholder="Bericht aan groep..."
            placeholderTextColor={colors.text3}
            value={text}
            onChangeText={setText}
            multiline
            maxLength={2000}
          />
          <Pressable onPress={handleSend} disabled={!text.trim()}>
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
  headerTitle: { fontSize: 17, fontWeight: '700', flex: 1, textAlign: 'center' },
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
});
