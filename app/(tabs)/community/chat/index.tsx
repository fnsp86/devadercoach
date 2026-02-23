import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { getConversations, getCommunityProfile, type Conversation, type CommunityProfile } from '@/lib/supabase';
import { InlineIcon } from '@/lib/icons';

function timeAgo(dateStr: string | null): string {
  if (!dateStr) return '';
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 60) return 'nu';
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}u`;
  return `${Math.floor(diff / 86400)}d`;
}

export default function ChatList() {
  const { colors } = useTheme();
  const { user } = useAuth();
  const router = useRouter();

  const [conversations, setConversations] = useState<(Conversation & { other_user?: CommunityProfile })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadConversations();
  }, []);

  async function loadConversations() {
    if (!user) return;
    setLoading(true);
    try {
      const data = await getConversations(user.id);
      // Load other user profiles
      const enriched = await Promise.all(
        data.map(async (conv) => {
          const otherUserId = conv.participant1_id === user.id ? conv.participant2_id : conv.participant1_id;
          const otherProfile = await getCommunityProfile(otherUserId);
          return { ...conv, other_user: otherProfile ?? undefined };
        }),
      );
      setConversations(enriched);
    } catch {
      // Silent
    }
    setLoading(false);
  }

  function renderConversation({ item }: { item: Conversation & { other_user?: CommunityProfile } }) {
    return (
      <Pressable
        onPress={() => router.push(`/(tabs)/community/chat/${item.id}`)}
        style={[styles.convRow, { borderColor: colors.border }]}
      >
        {item.other_user?.avatar_url ? (
          <Image source={{ uri: item.other_user.avatar_url }} style={styles.avatar} />
        ) : (
          <View style={[styles.avatarPlaceholder, { backgroundColor: colors.amberDim }]}>
            <InlineIcon name="user" size={20} color={colors.amber} />
          </View>
        )}
        <View style={{ flex: 1 }}>
          <View style={styles.convTitleRow}>
            <Text style={[styles.convName, { color: colors.text }]}>
              {item.other_user?.naam ?? 'Vader'}
            </Text>
            <Text style={[styles.convTime, { color: colors.text3 }]}>
              {timeAgo(item.last_message_at)}
            </Text>
          </View>
          {item.last_message && (
            <Text style={[styles.convPreview, { color: colors.text2 }]} numberOfLines={1}>
              {item.last_message}
            </Text>
          )}
        </View>
      </Pressable>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <Text style={[styles.title, { color: colors.text }]}>Berichten</Text>
        <Pressable onPress={() => router.push('/(tabs)/community/discover')}>
          <InlineIcon name="search" size={22} color={colors.text} />
        </Pressable>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.amber} />
        </View>
      ) : (
        <FlatList
          data={conversations}
          keyExtractor={(item) => item.id}
          renderItem={renderConversation}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            conversations.length > 0 ? (
              <Pressable
                onPress={() => router.push('/(tabs)/community/discover')}
                style={[styles.newChatRow, { borderColor: colors.border }]}
              >
                <View style={[styles.newChatIcon, { backgroundColor: colors.amberDim }]}>
                  <InlineIcon name="search" size={18} color={colors.amber} />
                </View>
                <Text style={[styles.newChatText, { color: colors.amber }]}>Nieuw gesprek starten</Text>
                <InlineIcon name="arrowRight" size={16} color={colors.amber} />
              </Pressable>
            ) : null
          }
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <InlineIcon name="messageCircle" size={40} color={colors.text3} />
              <Text style={[styles.emptyText, { color: colors.text3 }]}>
                Nog geen gesprekken.
              </Text>
              <Pressable
                onPress={() => router.push('/(tabs)/community/discover')}
                style={[styles.discoverBtn, { backgroundColor: colors.amber }]}
              >
                <InlineIcon name="search" size={16} color="#fff" />
                <Text style={styles.discoverBtnText}>Vaders zoeken</Text>
              </Pressable>
            </View>
          }
        />
      )}
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
  title: { fontSize: 20, fontWeight: '700' },
  listContent: { paddingBottom: 40 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  convRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  avatar: { width: 48, height: 48, borderRadius: 24 },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  convTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  convName: { fontSize: 15, fontWeight: '700' },
  convTime: { fontSize: 12 },
  convPreview: { fontSize: 14, marginTop: 2 },
  emptyContainer: { alignItems: 'center', paddingTop: 60, gap: 12 },
  emptyText: { fontSize: 15, fontWeight: '500', textAlign: 'center', lineHeight: 22 },
  newChatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  newChatIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newChatText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
  },
  discoverBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 14,
    marginTop: 16,
  },
  discoverBtnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});
