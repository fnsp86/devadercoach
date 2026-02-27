import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { upsertCommunityProfile, uploadAvatar } from '@/lib/supabase';
import { getCurrentLocation, getCurrentCity, DUTCH_CITIES } from '@/lib/location';
import { InlineIcon } from '@/lib/icons';
import Button from '@/components/Button';

export default function EditProfile() {
  const { colors } = useTheme();
  const { user, communityProfile, setCommunityProfile } = useAuth();
  const router = useRouter();

  const [bio, setBio] = useState(communityProfile?.bio ?? '');
  const [stad, setStad] = useState(communityProfile?.stad ?? '');
  const [saving, setSaving] = useState(false);

  async function handlePickAvatar() {
    if (!user) return;
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });
    if (!result.canceled && result.assets[0]) {
      setSaving(true);
      try {
        const avatarUrl = await uploadAvatar(user.id, result.assets[0].uri);
        const updated = await upsertCommunityProfile({
          user_id: user.id,
          avatar_url: avatarUrl,
        });
        setCommunityProfile(updated);
      } catch (err: any) {
        Alert.alert('Fout', err.message ?? 'Kon foto niet uploaden');
      }
      setSaving(false);
    }
  }

  const [gpsCoords, setGpsCoords] = useState<{ latitude: number; longitude: number } | null>(null);

  async function handleUseGPS() {
    const loc = await getCurrentLocation();
    if (loc) {
      setGpsCoords(loc);
      const city = await getCurrentCity();
      if (city) setStad(city);
    } else {
      Alert.alert('Geen locatie', 'GPS is niet beschikbaar.');
    }
  }

  async function handleSave() {
    if (!user) return;
    setSaving(true);
    try {
      const updated = await upsertCommunityProfile({
        user_id: user.id,
        bio: bio.trim(),
        stad,
        ...(gpsCoords ? { latitude: gpsCoords.latitude, longitude: gpsCoords.longitude } : {}),
      });
      setCommunityProfile(updated);
      router.back();
    } catch (err: any) {
      Alert.alert('Fout', err.message ?? 'Kon profiel niet opslaan');
    }
    setSaving(false);
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={[styles.header, { borderColor: colors.border }]}>
          <Pressable onPress={() => router.back()}>
            <Text style={[styles.cancelText, { color: colors.text2 }]}>Annuleer</Text>
          </Pressable>
          <Text style={[styles.headerTitle, { color: colors.text }]}>Profiel bewerken</Text>
          <Button title={saving ? '...' : 'Opslaan'} onPress={handleSave} variant="primary" size="sm" />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          {/* Avatar */}
          <Pressable onPress={handlePickAvatar} style={styles.avatarSection}>
            {communityProfile?.avatar_url ? (
              <View style={styles.avatarContainer}>
                {/* We'd show the image here, but keeping it simple */}
                <View style={[styles.avatarPlaceholder, { backgroundColor: colors.amberDim }]}>
                  <InlineIcon name="user" size={28} color={colors.amber} />
                </View>
              </View>
            ) : (
              <View style={[styles.avatarPlaceholder, { backgroundColor: colors.amberDim }]}>
                <InlineIcon name="user" size={28} color={colors.amber} />
              </View>
            )}
            <Text style={[styles.avatarHint, { color: colors.amber }]}>Wijzig foto</Text>
          </Pressable>

          {/* Bio */}
          <Text style={[styles.label, { color: colors.text }]}>Bio</Text>
          <TextInput
            style={[styles.textArea, { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text }]}
            placeholder="Schrijf iets over jezelf..."
            placeholderTextColor={colors.text3}
            value={bio}
            onChangeText={setBio}
            multiline
            numberOfLines={4}
            maxLength={200}
            textAlignVertical="top"
          />
          <Text style={[styles.charCount, { color: colors.text3 }]}>{bio.length}/200</Text>

          {/* Location */}
          <Text style={[styles.label, { color: colors.text, marginTop: 20 }]}>Stad</Text>
          <View style={styles.locationRow}>
            <TextInput
              style={[styles.input, { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text, flex: 1 }]}
              placeholder="Je stad"
              placeholderTextColor={colors.text3}
              value={stad}
              onChangeText={setStad}
            />
            <Pressable onPress={handleUseGPS} style={[styles.gpsBtn, { backgroundColor: colors.amberDim }]}>
              <InlineIcon name="mapPin" size={18} color={colors.amber} />
            </Pressable>
          </View>
        </ScrollView>
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
  cancelText: { fontSize: 15, fontWeight: '500' },
  headerTitle: { fontSize: 17, fontWeight: '700' },
  scrollContent: { padding: 20 },
  avatarSection: { alignItems: 'center', marginBottom: 24, gap: 8 },
  avatarContainer: {},
  avatarPlaceholder: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarHint: { fontSize: 14, fontWeight: '600' },
  label: { fontSize: 15, fontWeight: '600', marginBottom: 8 },
  textArea: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    minHeight: 100,
  },
  charCount: { fontSize: 12, textAlign: 'right', marginTop: 4 },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },
  locationRow: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  gpsBtn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
