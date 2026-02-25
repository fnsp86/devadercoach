import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import {
  getNearbyFathers,
  searchFathersByCity,
  getOrCreateConversation,
  createDuel,
  sendMessage,
  type CommunityProfile,
} from '@/lib/supabase';
import { ALL_SKILLS } from '@/lib/skills';
import { generateDuelSeed } from '@/lib/duel-arena';
import { InlineIcon } from '@/lib/icons';

type FatherResult = CommunityProfile & { distance_km?: number };

export default function PickOpponentScreen() {
  const { colors } = useTheme();
  const { user, communityProfile } = useAuth();
  const router = useRouter();

  const [results, setResults] = useState<FatherResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [challengingUser, setChallengingUser] = useState<string | null>(null);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hasLocation = !!(communityProfile?.latitude && communityProfile?.longitude);
  const isSearching = searchQuery.trim().length > 0;

  // Load nearby fathers on mount
  const loadNearby = useCallback(async () => {
    if (!communityProfile?.latitude || !communityProfile?.longitude) return;
    setLoading(true);
    try {
      const data = await getNearbyFathers(
        communityProfile.latitude,
        communityProfile.longitude,
        25,
      );
      setResults(data.filter((f) => f.user_id !== user?.id));
    } catch {
      Alert.alert('Fout', 'Kon vaders in de buurt niet laden.');
    }
    setLoading(false);
  }, [communityProfile, user?.id]);

  useEffect(() => {
    if (hasLocation && !isSearching) {
      loadNearby();
    }
  }, [hasLocation, isSearching, loadNearby]);

  // Debounced city search
  function handleSearchChange(text: string) {
    setSearchQuery(text);
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (text.trim().length === 0) {
      if (hasLocation) loadNearby();
      else setResults([]);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const data = await searchFathersByCity(text.trim());
        setResults(data.filter((f) => f.user_id !== user?.id));
      } catch {
        Alert.alert('Fout', 'Zoeken mislukt. Probeer het opnieuw.');
      }
      setLoading(false);
    }, 400);
  }

  function clearSearch() {
    setSearchQuery('');
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (hasLocation) loadNearby();
    else setResults([]);
  }

  function handleChallenge(opponent: FatherResult) {
    if (!user) return;
    const skillButtons = ALL_SKILLS.slice(0, 4).map((skill) => ({
      text: skill,
      onPress: async () => {
        setChallengingUser(opponent.user_id);
        try {
          const seed = generateDuelSeed();
          const duel = await createDuel(user.id, opponent.user_id, skill, seed);
          // Send DM notification
          try {
            const conv = await getOrCreateConversation(user.id, opponent.user_id);
            await sendMessage({
              conversation_id: conv.id,
              sender_id: user.id,
              content: `⚔️ Ik daag je uit voor een Skill Duel in ${skill}! Open je Arena om te spelen.`,
            });
          } catch { /* DM is optional */ }
          router.replace(
            `/(tabs)/training/duel?duelId=${duel.id}&skill=${encodeURIComponent(skill)}&seed=${seed}&opponentName=${encodeURIComponent(opponent.naam)}`,
          );
        } catch (err: any) {
          Alert.alert('Fout', err.message ?? 'Kon duel niet aanmaken');
        }
        setChallengingUser(null);
      },
    }));
    Alert.alert(
      `Daag ${opponent.naam?.split(' ')[0] ?? 'vader'} uit`,
      'Kies een skill voor het duel:',
      [...skillButtons, { text: 'Annuleer', style: 'cancel' as const, onPress: () => {} }],
    );
  }

  function formatDistance(km?: number): string {
    if (km == null) return '';
    if (km < 1) return '< 1 km';
    return `${Math.round(km)} km`;
  }

  function renderFatherRow({ item }: { item: FatherResult }) {
    const initials = item.naam?.slice(0, 2).toUpperCase() || '?';
    const distanceLabel = formatDistance(item.distance_km);

    return (
      <View style={[styles.fatherRow, { borderColor: colors.border }]}>
        {item.avatar_url ? (
          <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
        ) : (
          <View style={[styles.avatarPlaceholder, { backgroundColor: colors.amberDim }]}>
            <Text style={[styles.avatarInitials, { color: colors.amber }]}>{initials}</Text>
          </View>
        )}

        <View style={styles.fatherInfo}>
          <Text style={[styles.fatherName, { color: colors.text }]} numberOfLines={1}>
            {item.naam || 'Vader'}
          </Text>
          {item.stad ? (
            <Text style={[styles.fatherCity, { color: colors.text3 }]} numberOfLines={1}>
              {item.stad}
            </Text>
          ) : null}
        </View>

        <View style={styles.fatherActions}>
          {distanceLabel ? (
            <View style={[styles.distanceBadge, { backgroundColor: colors.surface2 }]}>
              <Text style={[styles.distanceText, { color: colors.text3 }]}>{distanceLabel}</Text>
            </View>
          ) : null}
          <Pressable
            onPress={() => handleChallenge(item)}
            style={[styles.challengeBtn, { backgroundColor: colors.amber }]}
            disabled={challengingUser === item.user_id}
          >
            {challengingUser === item.user_id ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <Text style={styles.challengeBtnText}>Daag uit</Text>
            )}
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.navigate('/(tabs)/training/duels')}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <Text style={[styles.title, { color: colors.text }]}>Kies een tegenstander</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <View
          style={[
            styles.searchBar,
            { backgroundColor: colors.surface, borderColor: colors.border },
          ]}
        >
          <InlineIcon name="search" size={18} color={colors.text3} />
          <TextInput
            style={[styles.searchInput, { color: colors.text }]}
            placeholder="Zoek op stad..."
            placeholderTextColor={colors.text3}
            value={searchQuery}
            onChangeText={handleSearchChange}
            returnKeyType="search"
            autoCapitalize="words"
            autoCorrect={false}
          />
          {searchQuery.length > 0 && (
            <Pressable onPress={clearSearch}>
              <InlineIcon name="x" size={18} color={colors.text3} />
            </Pressable>
          )}
        </View>
      </View>

      {/* Content */}
      {!hasLocation && !isSearching ? (
        <View style={styles.emptyContainer}>
          <InlineIcon name="mapPin" size={40} color={colors.text3} />
          <Text style={[styles.emptyText, { color: colors.text3 }]}>
            Stel je locatie in via je profiel om vaders in de buurt te vinden, of zoek op stad.
          </Text>
        </View>
      ) : loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.amber} />
        </View>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.user_id}
          renderItem={renderFatherRow}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <InlineIcon name="search" size={40} color={colors.text3} />
              <Text style={[styles.emptyText, { color: colors.text3 }]}>
                Geen vaders gevonden in de buurt
              </Text>
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
  searchContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 12,
  },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  listContent: { paddingBottom: 40 },
  fatherRow: {
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
  avatarInitials: { fontSize: 16, fontWeight: '700' },
  fatherInfo: { flex: 1, gap: 2 },
  fatherName: { fontSize: 15, fontWeight: '700' },
  fatherCity: { fontSize: 13 },
  fatherActions: { alignItems: 'flex-end', gap: 6 },
  distanceBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  distanceText: { fontSize: 11, fontWeight: '600' },
  challengeBtn: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 10,
    minWidth: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  challengeBtnText: { color: '#000', fontSize: 13, fontWeight: '700' },
  emptyContainer: { alignItems: 'center', paddingTop: 60, gap: 12, paddingHorizontal: 40 },
  emptyText: { fontSize: 15, fontWeight: '500', textAlign: 'center', lineHeight: 22 },
});
