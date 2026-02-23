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
import { getNearbyFathers, searchFathersByCity, getOrCreateConversation, upsertCommunityProfile, type CommunityProfile } from '@/lib/supabase';
import { getCurrentLocation, getCurrentCity } from '@/lib/location';
import { InlineIcon } from '@/lib/icons';

const RADIUS_OPTIONS = [5, 10, 25, 50];

type FatherResult = CommunityProfile & { distance_km?: number };

export default function DiscoverFathers() {
  const { colors } = useTheme();
  const { user, communityProfile, setCommunityProfile } = useAuth();
  const router = useRouter();

  const [results, setResults] = useState<FatherResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRadius, setSelectedRadius] = useState(25);
  const [creatingConversation, setCreatingConversation] = useState<string | null>(null);
  const [detectingLocation, setDetectingLocation] = useState(false);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hasLocation = !!(communityProfile?.latitude && communityProfile?.longitude);
  const isSearching = searchQuery.trim().length > 0;

  // Load nearby fathers on mount and when radius changes
  const loadNearby = useCallback(async () => {
    if (!communityProfile?.latitude || !communityProfile?.longitude) return;
    setLoading(true);
    try {
      const data = await getNearbyFathers(
        communityProfile.latitude,
        communityProfile.longitude,
        selectedRadius,
      );
      setResults(data.filter((f) => f.user_id !== user?.id));
    } catch {
      Alert.alert('Fout', 'Kon vaders in de buurt niet laden.');
    }
    setLoading(false);
  }, [communityProfile, selectedRadius, user?.id]);

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
      // Cleared search — return to nearby mode
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

  async function handleStartConversation(otherUserId: string) {
    if (!user) return;
    setCreatingConversation(otherUserId);
    try {
      const conv = await getOrCreateConversation(user.id, otherUserId);
      router.push(`/(tabs)/community/chat/${conv.id}`);
    } catch {
      Alert.alert('Fout', 'Kon gesprek niet starten. Probeer het opnieuw.');
    }
    setCreatingConversation(null);
  }

  async function handleDetectLocation() {
    if (!user) return;
    setDetectingLocation(true);
    try {
      const location = await getCurrentLocation();
      if (!location) {
        Alert.alert('Locatie niet beschikbaar', 'Controleer je locatie-instellingen en probeer het opnieuw.');
        setDetectingLocation(false);
        return;
      }
      const city = await getCurrentCity();
      const updated = await upsertCommunityProfile({
        user_id: user.id,
        naam: communityProfile?.naam ?? '',
        bio: communityProfile?.bio ?? '',
        stad: city ?? communityProfile?.stad ?? '',
        latitude: location.latitude,
        longitude: location.longitude,
      });
      setCommunityProfile(updated);
    } catch {
      Alert.alert('Fout', 'Kon locatie niet opslaan.');
    }
    setDetectingLocation(false);
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
      <Pressable
        onPress={() => router.push(`/(tabs)/community/profile/${item.user_id}`)}
        style={[styles.fatherRow, { borderColor: colors.border }]}
      >
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
          <View style={styles.fatherMeta}>
            {item.stad ? (
              <Text style={[styles.fatherCity, { color: colors.text3 }]} numberOfLines={1}>
                {item.stad}
              </Text>
            ) : null}
          </View>
          {item.bio ? (
            <Text style={[styles.fatherBio, { color: colors.text2 }]} numberOfLines={1}>
              {item.bio}
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
            onPress={(e) => {
              e.stopPropagation?.();
              handleStartConversation(item.user_id);
            }}
            style={[styles.messageBtn, { backgroundColor: '#667eea' }]}
            disabled={creatingConversation === item.user_id}
          >
            {creatingConversation === item.user_id ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.messageBtnText}>Bericht</Text>
            )}
          </Pressable>
        </View>
      </Pressable>
    );
  }

  function renderNoLocation() {
    return (
      <View style={styles.noLocationContainer}>
        <View style={[styles.noLocationCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <InlineIcon name="mapPin" size={32} color={colors.amber} />
          <Text style={[styles.noLocationTitle, { color: colors.text }]}>
            Stel je locatie in om vaders in de buurt te vinden
          </Text>
          <Pressable
            onPress={handleDetectLocation}
            style={[styles.gpsBtn, { backgroundColor: colors.amber }]}
            disabled={detectingLocation}
          >
            {detectingLocation ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <>
                <InlineIcon name="mapPin" size={16} color="#fff" />
                <Text style={styles.gpsBtnText}>Gebruik GPS</Text>
              </>
            )}
          </Pressable>
          <Pressable onPress={() => router.push('/(tabs)/community/setup')}>
            <Text style={[styles.manualLink, { color: colors.amber }]}>Handmatig instellen</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <Text style={[styles.title, { color: colors.text }]}>Ontdek Vaders</Text>
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

      {/* Radius chips — only shown when not searching by city */}
      {!isSearching && hasLocation && (
        <View style={styles.chipsContainer}>
          {RADIUS_OPTIONS.map((radius) => {
            const active = selectedRadius === radius;
            return (
              <Pressable
                key={radius}
                onPress={() => setSelectedRadius(radius)}
                style={[
                  styles.chip,
                  {
                    backgroundColor: active ? '#667eea' : colors.surface,
                    borderColor: active ? '#667eea' : colors.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.chipText,
                    { color: active ? '#fff' : colors.text2 },
                  ]}
                >
                  {radius} km
                </Text>
              </Pressable>
            );
          })}
        </View>
      )}

      {/* No-location prompt */}
      {!hasLocation && !isSearching ? (
        renderNoLocation()
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

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },
  title: { fontSize: 20, fontWeight: '700' },

  // Search
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

  // Radius chips
  chipsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 8,
    paddingBottom: 10,
  },
  chip: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  chipText: { fontSize: 13, fontWeight: '600' },

  // Loading
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  // List
  listContent: { paddingBottom: 40 },

  // Father row
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
  fatherMeta: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  fatherCity: { fontSize: 13 },
  fatherBio: { fontSize: 13, marginTop: 2 },
  fatherActions: { alignItems: 'flex-end', gap: 6 },
  distanceBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  distanceText: { fontSize: 11, fontWeight: '600' },
  messageBtn: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 10,
    minWidth: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageBtnText: { color: '#fff', fontSize: 13, fontWeight: '700' },

  // No-location prompt
  noLocationContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  noLocationCard: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 28,
    alignItems: 'center',
    gap: 14,
  },
  noLocationTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 22,
  },
  gpsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  gpsBtnText: { color: '#fff', fontSize: 15, fontWeight: '700' },
  manualLink: { fontSize: 14, fontWeight: '600', marginTop: 4 },

  // Empty state
  emptyContainer: { alignItems: 'center', paddingTop: 60, gap: 12 },
  emptyText: { fontSize: 15, fontWeight: '500', textAlign: 'center', lineHeight: 22 },
});
