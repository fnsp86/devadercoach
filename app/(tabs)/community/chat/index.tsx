import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  Image,
  Alert,
  Animated,
  PanResponder,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { getConversations, getCommunityProfile, getBlockedUsers, deleteConversation, type Conversation, type CommunityProfile } from '@/lib/supabase';
import { loadLastReadMap, isConversationUnread, markConversationRead } from '@/lib/unread';
import { InlineIcon } from '@/lib/icons';
import * as Haptics from 'expo-haptics';

function timeAgo(dateStr: string | null): string {
  if (!dateStr) return '';
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 60) return 'nu';
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}u`;
  return `${Math.floor(diff / 86400)}d`;
}

type EnrichedConversation = Conversation & { other_user?: CommunityProfile; unread?: boolean };

const DELETE_THRESHOLD = -80;

function SwipeableRow({
  children,
  onDelete,
}: {
  children: React.ReactNode;
  onDelete: () => void;
}) {
  const translateX = useRef(new Animated.Value(0)).current;
  const hasFiredHaptic = useRef(false);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 10 && Math.abs(gestureState.dx) > Math.abs(gestureState.dy),
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < 0) {
          translateX.setValue(gestureState.dx);
          if (gestureState.dx < DELETE_THRESHOLD && !hasFiredHaptic.current) {
            hasFiredHaptic.current = true;
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          }
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        hasFiredHaptic.current = false;
        if (gestureState.dx < DELETE_THRESHOLD) {
          // Snap to reveal delete button
          Animated.spring(translateX, {
            toValue: DELETE_THRESHOLD,
            useNativeDriver: true,
            tension: 100,
            friction: 10,
          }).start();
        } else {
          // Snap back
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
            tension: 100,
            friction: 10,
          }).start();
        }
      },
    }),
  ).current;

  function handleDeletePress() {
    Animated.timing(translateX, {
      toValue: -500,
      duration: 200,
      useNativeDriver: true,
    }).start(() => onDelete());
  }

  function close() {
    Animated.spring(translateX, {
      toValue: 0,
      useNativeDriver: true,
      tension: 100,
      friction: 10,
    }).start();
  }

  return (
    <View style={styles.swipeContainer}>
      {/* Delete button behind the row */}
      <Pressable onPress={handleDeletePress} style={styles.deleteAction}>
        <InlineIcon name="trash" size={20} color="#fff" />
        <Text style={styles.deleteText}>Wis</Text>
      </Pressable>
      {/* Foreground row */}
      <Animated.View
        style={{ transform: [{ translateX }] }}
        {...panResponder.panHandlers}
      >
        <Pressable onPress={close} style={{ width: '100%' }}>
          {children}
        </Pressable>
      </Animated.View>
    </View>
  );
}

export default function ChatList() {
  const { colors } = useTheme();
  const { user } = useAuth();
  const router = useRouter();

  const [conversations, setConversations] = useState<EnrichedConversation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadConversations();
  }, []);

  async function loadConversations() {
    if (!user) return;
    setLoading(true);
    try {
      const [data, blockedIds, lastReadMap] = await Promise.all([
        getConversations(user.id),
        getBlockedUsers(user.id),
        loadLastReadMap(),
      ]);
      const blockedSet = new Set(blockedIds);

      // Filter out blocked users and enrich with profiles + unread status
      const filtered = data.filter((conv) => {
        const otherUserId = conv.participant1_id === user.id ? conv.participant2_id : conv.participant1_id;
        return !blockedSet.has(otherUserId);
      });

      const enriched: EnrichedConversation[] = await Promise.all(
        filtered.map(async (conv) => {
          const otherUserId = conv.participant1_id === user.id ? conv.participant2_id : conv.participant1_id;
          const otherProfile = await getCommunityProfile(otherUserId);
          const unread = isConversationUnread(conv, user.id, lastReadMap);
          return { ...conv, other_user: otherProfile ?? undefined, unread };
        }),
      );
      setConversations(enriched);
    } catch {
      // Silent
    }
    setLoading(false);
  }

  function handleOpenConversation(item: EnrichedConversation) {
    // Mark as read immediately for instant UI feedback
    markConversationRead(item.id);
    setConversations((prev) =>
      prev.map((c) => (c.id === item.id ? { ...c, unread: false } : c)),
    );
    router.push(`/(tabs)/community/chat/${item.id}`);
  }

  function handleDeleteConversation(item: EnrichedConversation) {
    Alert.alert(
      'Gesprek verwijderen',
      `Weet je zeker dat je het gesprek met ${item.other_user?.naam ?? 'deze vader'} wilt verwijderen? Alle berichten worden gewist.`,
      [
        { text: 'Annuleer', style: 'cancel' },
        {
          text: 'Verwijder',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteConversation(item.id);
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              setConversations((prev) => prev.filter((c) => c.id !== item.id));
            } catch {
              Alert.alert('Fout', 'Kon gesprek niet verwijderen. Probeer het opnieuw.');
            }
          },
        },
      ],
    );
  }

  function renderConversation({ item }: { item: EnrichedConversation }) {
    return (
      <SwipeableRow onDelete={() => handleDeleteConversation(item)}>
        <Pressable
          onPress={() => handleOpenConversation(item)}
          style={({ pressed }) => [
            styles.convRow,
            { borderColor: colors.border, backgroundColor: colors.bg, opacity: pressed ? 0.7 : 1 },
          ]}
        >
          <View>
            {item.other_user?.avatar_url ? (
              <Image source={{ uri: item.other_user.avatar_url }} style={styles.avatar} />
            ) : (
              <View style={[styles.avatarPlaceholder, { backgroundColor: colors.amberDim }]}>
                <InlineIcon name="user" size={20} color={colors.amber} />
              </View>
            )}
            {item.unread && <View style={styles.unreadDot} />}
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.convTitleRow}>
              <Text
                style={[
                  styles.convName,
                  { color: colors.text, fontWeight: item.unread ? '800' : '700' },
                ]}
              >
                {item.other_user?.naam ?? 'Vader'}
              </Text>
              <Text
                style={[
                  styles.convTime,
                  { color: item.unread ? colors.amber : colors.text3 },
                ]}
              >
                {timeAgo(item.last_message_at)}
              </Text>
            </View>
            {item.other_user?.stad ? (
              <Text style={[styles.convCity, { color: colors.text3 }]} numberOfLines={1}>
                {item.other_user.stad}
              </Text>
            ) : null}
            {item.last_message && (
              <Text
                style={[
                  styles.convPreview,
                  {
                    color: item.unread ? colors.text : colors.text2,
                    fontWeight: item.unread ? '600' : '400',
                  },
                ]}
                numberOfLines={1}
              >
                {item.last_message}
              </Text>
            )}
          </View>
          <InlineIcon name="chevronRight" size={16} color={colors.text3} />
        </Pressable>
      </SwipeableRow>
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
          removeClippedSubviews
          maxToRenderPerBatch={10}
          windowSize={5}
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
  swipeContainer: {
    overflow: 'hidden',
  },
  deleteAction: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 80,
    backgroundColor: '#EF4444',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  deleteText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
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
  unreadDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#EF4444',
    borderWidth: 2,
    borderColor: '#fff',
  },
  convTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  convName: { fontSize: 15 },
  convTime: { fontSize: 12 },
  convCity: { fontSize: 12, marginTop: 1 },
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
