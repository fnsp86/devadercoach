import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { getNearbyFathers, searchFathersByCity, type CommunityProfile } from '@/lib/supabase';
import { getCurrentLocation, DUTCH_CITIES } from '@/lib/location';
import { InlineIcon } from '@/lib/icons';
import Card from '@/components/Card';

export default function NearbyScreen() {
  const { colors } = useTheme();
  const { communityProfile } = useAuth();
  const router = useRouter();

  const [fathers, setFathers] = useState<(CommunityProfile & { distance_km?: number })[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchMode, setSearchMode] = useState<'gps' | 'city'>('gps');
  const [cityQuery, setCityQuery] = useState('');
  const [radius, setRadius] = useState(25);

  useEffect(() => {
    loadNearby();
  }, []);

  async function loadNearby() {
    setLoading(true);
    try {
      if (communityProfile?.latitude && communityProfile?.longitude) {
        const data = await getNearbyFathers(
          communityProfile.latitude,
          communityProfile.longitude,
          radius,
        );
        // Filter out self
        setFathers(data.filter((f) => f.user_id !== communityProfile.user_id));
      } else {
        // Try GPS
        const loc = await getCurrentLocation();
        if (loc) {
          const data = await getNearbyFathers(loc.latitude, loc.longitude, radius);
          setFathers(data.filter((f) => f.user_id !== communityProfile?.user_id));
        }
      }
    } catch {
      // Fall back to empty
    }
    setLoading(false);
  }

  async function searchByCity(city: string) {
    setLoading(true);
    try {
      const data = await searchFathersByCity(city);
      setFathers(data.filter((f) => f.user_id !== communityProfile?.user_id));
    } catch {
      // Silent
    }
    setLoading(false);
  }

  function renderFather({ item }: { item: CommunityProfile & { distance_km?: number } }) {
    return (
      <Pressable onPress={() => router.push(`/(tabs)/community/profile/${item.user_id}`)}>
        <Card style={{ marginBottom: 10 }}>
          <View style={styles.fatherRow}>
            {item.avatar_url ? (
              <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
            ) : (
              <View style={[styles.avatarPlaceholder, { backgroundColor: colors.amberDim }]}>
                <InlineIcon name="user" size={20} color={colors.amber} />
              </View>
            )}
            <View style={{ flex: 1 }}>
              <Text style={[styles.fatherName, { color: colors.text }]}>{item.naam}</Text>
              <Text style={[styles.fatherMeta, { color: colors.text2 }]}>
                {item.stad}
                {item.distance_km != null ? ` · ${item.distance_km.toFixed(1)} km` : ''}
              </Text>
              {item.bio ? (
                <Text style={[styles.fatherBio, { color: colors.text3 }]} numberOfLines={2}>
                  {item.bio}
                </Text>
              ) : null}
            </View>
            <InlineIcon name="arrowRight" size={18} color={colors.text3} />
          </View>
        </Card>
      </Pressable>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <Text style={[styles.title, { color: colors.text }]}>Vaders in de buurt</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Search mode toggle */}
      <View style={styles.modeRow}>
        <Pressable
          onPress={() => { setSearchMode('gps'); loadNearby(); }}
          style={[styles.modeBtn, searchMode === 'gps' && { backgroundColor: colors.amberDim }]}
        >
          <InlineIcon name="mapPin" size={16} color={searchMode === 'gps' ? colors.amber : colors.text3} />
          <Text style={{ color: searchMode === 'gps' ? colors.amber : colors.text3, fontWeight: '600', fontSize: 14 }}>GPS</Text>
        </Pressable>
        <Pressable
          onPress={() => setSearchMode('city')}
          style={[styles.modeBtn, searchMode === 'city' && { backgroundColor: colors.amberDim }]}
        >
          <InlineIcon name="search" size={16} color={searchMode === 'city' ? colors.amber : colors.text3} />
          <Text style={{ color: searchMode === 'city' ? colors.amber : colors.text3, fontWeight: '600', fontSize: 14 }}>Stad</Text>
        </Pressable>
      </View>

      {/* City search */}
      {searchMode === 'city' && (
        <View style={styles.citySearchRow}>
          <TextInput
            style={[styles.cityInput, { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text }]}
            placeholder="Zoek stad..."
            placeholderTextColor={colors.text3}
            value={cityQuery}
            onChangeText={setCityQuery}
            onSubmitEditing={() => searchByCity(cityQuery)}
            returnKeyType="search"
          />
        </View>
      )}

      {/* Radius selector */}
      {searchMode === 'gps' && (
        <View style={styles.radiusRow}>
          {[10, 25, 50].map((r) => (
            <Pressable
              key={r}
              onPress={() => { setRadius(r); }}
              style={[
                styles.radiusChip,
                {
                  backgroundColor: radius === r ? colors.amberDim : colors.surface,
                  borderColor: radius === r ? colors.amber : colors.border,
                },
              ]}
            >
              <Text style={{ color: radius === r ? colors.amber : colors.text2, fontWeight: '600', fontSize: 13 }}>
                {r} km
              </Text>
            </Pressable>
          ))}
        </View>
      )}

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.amber} />
        </View>
      ) : (
        <FlatList
          data={fathers}
          keyExtractor={(item) => item.id}
          renderItem={renderFather}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <InlineIcon name="users" size={40} color={colors.text3} />
              <Text style={[styles.emptyText, { color: colors.text3 }]}>
                Nog geen vaders gevonden in de buurt.{'\n'}Nodig andere vaders uit!
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
  modeRow: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  modeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  citySearchRow: { paddingHorizontal: 20, marginBottom: 12 },
  cityInput: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
  },
  radiusRow: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  radiusChip: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  listContent: { paddingHorizontal: 20, paddingBottom: 40 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  fatherRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 48, height: 48, borderRadius: 24 },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fatherName: { fontSize: 16, fontWeight: '700' },
  fatherMeta: { fontSize: 13, marginTop: 2 },
  fatherBio: { fontSize: 13, marginTop: 4 },
  emptyContainer: { alignItems: 'center', paddingTop: 60, gap: 12 },
  emptyText: { fontSize: 15, fontWeight: '500', textAlign: 'center', lineHeight: 22 },
});
