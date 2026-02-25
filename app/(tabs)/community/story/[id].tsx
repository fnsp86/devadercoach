import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import {
  supabase,
  toggleStoryLike,
  getStoryComments,
  addStoryComment,
  deleteStory,
  deleteStoryComment,
  reportContent,
  type Story,
  type StoryComment,
} from '@/lib/supabase';
import { InlineIcon } from '@/lib/icons';

const CATEGORY_LABELS: Record<string, string> = {
  tip: 'Tip',
  ervaring: 'Ervaring',
  vraag: 'Vraag',
  overwinning: 'Overwinning',
};

function timeAgo(dateStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 60) return 'zojuist';
  if (diff < 3600) return `${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} uur`;
  return `${Math.floor(diff / 86400)} dag${Math.floor(diff / 86400) > 1 ? 'en' : ''}`;
}

export default function StoryDetail() {
  const { colors } = useTheme();
  const { user, isAdmin } = useAuth();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const [story, setStory] = useState<Story | null>(null);
  const [comments, setComments] = useState<StoryComment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    loadStory();
  }, [id]);

  async function loadStory() {
    if (!id) return;
    setLoading(true);

    const { data } = await supabase
      .from('stories')
      .select('*, author:profiles!author_id(*)')
      .eq('id', id)
      .single();

    if (data) {
      setStory(data as Story);
      setLikesCount(data.likes_count);
    }

    const commentsData = await getStoryComments(id);
    setComments(commentsData);

    // Check if user liked
    if (user) {
      const { data: likeData } = await supabase
        .from('story_likes')
        .select('id')
        .eq('story_id', id)
        .eq('user_id', user.id)
        .single();
      setLiked(!!likeData);
    }

    setLoading(false);
  }

  async function handleLike() {
    if (!user || !id) return;
    const wasLiked = liked;
    setLiked(!liked);
    setLikesCount((c) => wasLiked ? c - 1 : c + 1);
    await toggleStoryLike(id, user.id);
  }

  async function handleComment() {
    if (!user || !id || !newComment.trim()) return;
    setPosting(true);
    try {
      const comment = await addStoryComment({
        story_id: id,
        author_id: user.id,
        content: newComment.trim(),
      });
      setComments((prev) => [...prev, comment]);
      setNewComment('');
    } catch {
      Alert.alert('Fout', 'Kon reactie niet plaatsen');
    }
    setPosting(false);
  }

  async function handleReport() {
    if (!user || !story) return;
    Alert.alert('Rapporteer', 'Wil je dit verhaal rapporteren?', [
      { text: 'Annuleer', style: 'cancel' },
      {
        text: 'Rapporteer',
        style: 'destructive',
        onPress: async () => {
          await reportContent({
            reporter_id: user.id,
            reported_user_id: story.author_id,
            content_type: 'story',
            content_id: story.id,
            reason: 'Ongewenste inhoud',
          });
          Alert.alert('Bedankt', 'Je rapportage is ontvangen.');
        },
      },
    ]);
  }

  const isOwner = user?.id === story?.author_id;

  async function handleDeleteStory() {
    if (!story) return;
    Alert.alert('Verwijderen', 'Weet je zeker dat je dit verhaal wilt verwijderen?', [
      { text: 'Annuleer', style: 'cancel' },
      {
        text: 'Verwijderen',
        style: 'destructive',
        onPress: async () => {
          try {
            await deleteStory(story.id);
            router.replace('/(tabs)/community');
          } catch {
            Alert.alert('Fout', 'Kon verhaal niet verwijderen.');
          }
        },
      },
    ]);
  }

  async function handleDeleteComment(commentId: string) {
    Alert.alert('Verwijderen', 'Weet je zeker dat je deze reactie wilt verwijderen?', [
      { text: 'Annuleer', style: 'cancel' },
      {
        text: 'Verwijderen',
        style: 'destructive',
        onPress: async () => {
          try {
            await deleteStoryComment(commentId);
            setComments((prev) => prev.filter((c) => c.id !== commentId));
          } catch {
            Alert.alert('Fout', 'Kon reactie niet verwijderen.');
          }
        },
      },
    ]);
  }

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
        <ActivityIndicator size="large" color={colors.amber} style={{ flex: 1 }} />
      </SafeAreaView>
    );
  }

  if (!story) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: colors.text2 }}>Verhaal niet gevonden</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header */}
        <View style={[styles.header, { borderColor: colors.border }]}>
          <Pressable onPress={() => router.back()}>
            <InlineIcon name="arrowLeft" size={22} color={colors.text} />
          </Pressable>
          <Text style={[styles.headerTitle, { color: colors.text }]}>Verhaal</Text>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            {(isOwner || isAdmin) && (
              <Pressable onPress={handleDeleteStory}>
                <InlineIcon name="trash" size={20} color={colors.red} />
              </Pressable>
            )}
            {!isOwner && !isAdmin && (
              <Pressable onPress={handleReport}>
                <InlineIcon name="alertTriangle" size={20} color={colors.text3} />
              </Pressable>
            )}
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Author */}
          <Pressable
            onPress={() => router.push(`/(tabs)/community/profile/${story.author_id}`)}
            style={styles.authorRow}
          >
            {story.author?.avatar_url ? (
              <Image source={{ uri: story.author.avatar_url }} style={styles.avatar} />
            ) : (
              <View style={[styles.avatarPlaceholder, { backgroundColor: colors.amberDim }]}>
                <InlineIcon name="user" size={18} color={colors.amber} />
              </View>
            )}
            <View>
              <Text style={[styles.authorName, { color: colors.text }]}>{story.author?.naam ?? 'Vader'}</Text>
              <Text style={[styles.authorMeta, { color: colors.text3 }]}>
                {story.author?.stad ? `${story.author.stad} · ` : ''}{timeAgo(story.created_at)}
              </Text>
            </View>
          </Pressable>

          {/* Category */}
          <View style={[styles.categoryBadge, { backgroundColor: colors.amberDim }]}>
            <Text style={[styles.categoryText, { color: colors.amber }]}>{CATEGORY_LABELS[story.category]}</Text>
          </View>

          {/* Content */}
          <Text style={[styles.content, { color: colors.text }]}>{story.content}</Text>

          {/* Like button */}
          <View style={[styles.actionsRow, { borderColor: colors.border }]}>
            <Pressable onPress={handleLike} style={styles.actionBtn}>
              <InlineIcon name="heart" size={20} color={liked ? colors.red : colors.text3} />
              <Text style={[styles.actionBtnText, { color: liked ? colors.red : colors.text3 }]}>{likesCount}</Text>
            </Pressable>
            <View style={styles.actionBtn}>
              <InlineIcon name="messageCircle" size={20} color={colors.text3} />
              <Text style={[styles.actionBtnText, { color: colors.text3 }]}>{comments.length}</Text>
            </View>
          </View>

          {/* Comments */}
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Reacties ({comments.length})
          </Text>

          {comments.map((comment) => (
            <View key={comment.id} style={[styles.commentCard, { borderColor: colors.border }]}>
              <View style={styles.commentHeader}>
                <Text style={[styles.commentAuthor, { color: colors.text }]}>{comment.author?.naam ?? 'Vader'}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <Text style={[styles.commentTime, { color: colors.text3 }]}>{timeAgo(comment.created_at)}</Text>
                  {(comment.author_id === user?.id || isAdmin) && (
                    <Pressable onPress={() => handleDeleteComment(comment.id)} hitSlop={8}>
                      <InlineIcon name="trash" size={14} color={colors.text3} />
                    </Pressable>
                  )}
                </View>
              </View>
              <Text style={[styles.commentContent, { color: colors.text2 }]}>{comment.content}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Comment input */}
        <View style={[styles.commentInputRow, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <TextInput
            style={[styles.commentInput, { color: colors.text }]}
            placeholder="Schrijf een reactie..."
            placeholderTextColor={colors.text3}
            value={newComment}
            onChangeText={setNewComment}
            maxLength={500}
          />
          <Pressable onPress={handleComment} disabled={posting || !newComment.trim()}>
            <InlineIcon name="arrowRight" size={22} color={newComment.trim() ? colors.amber : colors.text3} />
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
  scrollContent: { padding: 20, paddingBottom: 100 },
  authorRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
  avatar: { width: 44, height: 44, borderRadius: 22 },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authorName: { fontSize: 16, fontWeight: '700' },
  authorMeta: { fontSize: 13 },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 12,
  },
  categoryText: { fontSize: 13, fontWeight: '600' },
  content: { fontSize: 16, lineHeight: 26, marginBottom: 12 },
  actionsRow: {
    flexDirection: 'row',
    gap: 24,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  actionBtn: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  actionBtnText: { fontSize: 15, fontWeight: '600' },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 12 },
  commentCard: { borderBottomWidth: 1, paddingVertical: 12 },
  commentHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  commentAuthor: { fontSize: 14, fontWeight: '600' },
  commentTime: { fontSize: 12 },
  commentContent: { fontSize: 14, lineHeight: 20 },
  commentInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    gap: 12,
  },
  commentInput: { flex: 1, fontSize: 15, paddingVertical: 8 },
});
