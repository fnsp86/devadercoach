import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import {
  getCommunityProfile,
  getOrCreateConversation,
  blockUser,
  reportContent,
  getStories,
  type CommunityProfile,
  type Story,
} from '@/lib/supabase';
import { InlineIcon } from '@/lib/icons';
import Button from '@/components/Button';
import Card from '@/components/Card';

function timeAgo(dateStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}u`;
  return `${Math.floor(diff / 86400)}d`;
}

export default function ProfileView() {
  const { colors } = useTheme();
  const { user } = useAuth();
  const router = useRouter();
  const { id: profileUserId } = useLocalSearchParams<{ id: string }>();

  const [profile, setProfile] = useState<CommunityProfile | null>(null);
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  const isOwnProfile = profileUserId === user?.id;

  useEffect(() => {
    loadProfile();
  }, [profileUserId]);

  async function loadProfile() {
    if (!profileUserId) return;
    setLoading(true);
    const p = await getCommunityProfile(profileUserId);
    setProfile(p);

    // Load their stories
    try {
      const data = await getStories({ limit: 10 });
      setStories(data.filter((s) => s.author_id === profileUserId));
    } catch {
      // Silent
    }
    setLoading(false);
  }

  async function handleMessage() {
    if (!user || !profileUserId) return;
    try {
      const conv = await getOrCreateConversation(user.id, profileUserId);
      router.push(`/(tabs)/community/chat/${conv.id}`);
    } catch (err: any) {
      Alert.alert('Fout', err.message ?? 'Kon gesprek niet starten');
    }
  }

  function handleBlock() {
    if (!user || !profileUserId) return;
    Alert.alert('Blokkeer', 'Wil je deze gebruiker blokkeren? Je ziet hun berichten en verhalen niet meer.', [
      { text: 'Annuleer', style: 'cancel' },
      {
        text: 'Blokkeer',
        style: 'destructive',
        onPress: async () => {
          await blockUser(user.id, profileUserId);
          Alert.alert('Geblokkeerd', 'Je ziet deze gebruiker niet meer.');
          router.back();
        },
      },
    ]);
  }

  function handleReport() {
    if (!user || !profileUserId) return;
    Alert.alert('Rapporteer', 'Wil je dit profiel rapporteren?', [
      { text: 'Annuleer', style: 'cancel' },
      {
        text: 'Rapporteer',
        style: 'destructive',
        onPress: async () => {
          await reportContent({
            reporter_id: user.id,
            reported_user_id: profileUserId,
            content_type: 'profile',
            content_id: profileUserId,
            reason: 'Ongewenst profiel',
          });
          Alert.alert('Bedankt', 'Je rapportage is ontvangen.');
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

  if (!profile) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: colors.text2 }}>Profiel niet gevonden</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        {!isOwnProfile && (
          <Pressable onPress={handleReport}>
            <InlineIcon name="alertTriangle" size={20} color={colors.text3} />
          </Pressable>
        )}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Profile card */}
        <View style={styles.profileSection}>
          {profile.avatar_url ? (
            <Image source={{ uri: profile.avatar_url }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatarPlaceholder, { backgroundColor: colors.amberDim }]}>
              <InlineIcon name="user" size={32} color={colors.amber} />
            </View>
          )}
          <Text style={[styles.name, { color: colors.text }]}>{profile.naam}</Text>
          {profile.stad ? (
            <View style={styles.locationRow}>
              <InlineIcon name="mapPin" size={14} color={colors.text3} />
              <Text style={[styles.locationText, { color: colors.text3 }]}>{profile.stad}</Text>
            </View>
          ) : null}
          {profile.bio ? (
            <Text style={[styles.bio, { color: colors.text2 }]}>{profile.bio}</Text>
          ) : null}
        </View>

        {/* Actions */}
        {!isOwnProfile && (
          <View style={styles.actionRow}>
            <View style={{ flex: 1 }}>
              <Button
                title="Stuur bericht"
                onPress={handleMessage}
                variant="primary"
                size="md"
              />
            </View>
            <Pressable
              onPress={handleBlock}
              style={[styles.blockBtn, { backgroundColor: colors.redDim }]}
            >
              <InlineIcon name="ban" size={18} color={colors.red} />
            </Pressable>
          </View>
        )}

        {isOwnProfile && (
          <Button
            title="Profiel bewerken"
            onPress={() => router.push('/(tabs)/community/profile/edit')}
            variant="secondary"
            size="md"
          />
        )}

        {/* Stories */}
        {stories.length > 0 && (
          <View style={styles.storiesSection}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Verhalen ({stories.length})
            </Text>
            {stories.map((story) => (
              <Pressable
                key={story.id}
                onPress={() => router.push(`/(tabs)/community/story/${story.id}`)}
              >
                <Card style={{ marginBottom: 8 }}>
                  <Text style={[styles.storyPreview, { color: colors.text }]} numberOfLines={3}>
                    {story.content}
                  </Text>
                  <View style={styles.storyMeta}>
                    <Text style={[styles.storyMetaText, { color: colors.text3 }]}>
                      {timeAgo(story.created_at)} · {story.likes_count} likes · {story.comments_count} reacties
                    </Text>
                  </View>
                </Card>
              </Pressable>
            ))}
          </View>
        )}
      </ScrollView>
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
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40 },
  profileSection: { alignItems: 'center', marginTop: 16, marginBottom: 24 },
  avatar: { width: 80, height: 80, borderRadius: 40 },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: { fontSize: 24, fontWeight: '800', marginTop: 12 },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 },
  locationText: { fontSize: 14, fontWeight: '500' },
  bio: { fontSize: 15, lineHeight: 22, textAlign: 'center', marginTop: 8 },
  actionRow: { flexDirection: 'row', gap: 10, marginBottom: 24, alignItems: 'center' },
  blockBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storiesSection: { marginTop: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  storyPreview: { fontSize: 14, lineHeight: 20 },
  storyMeta: { marginTop: 6 },
  storyMetaText: { fontSize: 12 },
});
