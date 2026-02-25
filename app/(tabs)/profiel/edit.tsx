import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { useAuth } from '@/lib/auth';
import { supabase, upsertCommunityProfile, uploadAvatar } from '@/lib/supabase';
import { InlineIcon } from '@/lib/icons';
import Button from '@/components/Button';
import type { AppDoel } from '@/lib/types';

export default function EditProfileScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const { profile, saveProfile } = useStore();
  const { user, communityProfile, setCommunityProfile } = useAuth();

  const [naam, setNaam] = useState(profile?.naam ?? '');
  const [email, setEmail] = useState(profile?.email ?? user?.email ?? '');
  const [avatarUri, setAvatarUri] = useState<string | null>(communityProfile?.avatar_url ?? null);
  const [loading, setLoading] = useState(false);

  const initials = naam ? naam.slice(0, 2).toUpperCase() : '?';

  async function handlePickAvatar() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });
    if (!result.canceled && result.assets[0]) {
      setAvatarUri(result.assets[0].uri);
    }
  }

  async function handleSave() {
    if (!naam.trim()) {
      Alert.alert('Naam vereist', 'Vul je naam in.');
      return;
    }

    // 1. Save local profile immediately
    const base = profile ?? {
      naam: '',
      email: '',
      ageGroup: '6-9' as const,
      doel: 'Gewoon een betere vader zijn' as AppDoel,
      startDate: new Date().toISOString().split('T')[0],
      children: [],
    };
    saveProfile({ ...base, naam: naam.trim(), email: email.trim() });

    // 2. Check if avatar upload is needed (requires loading state)
    const currentAvatarUrl = communityProfile?.avatar_url ?? null;
    const needsAvatarUpload = user && avatarUri && avatarUri !== currentAvatarUrl && !avatarUri.startsWith('http');

    if (needsAvatarUpload) {
      // Avatar upload — stay on screen with loading indicator
      setLoading(true);
      try {
        const uploadPromise = uploadAvatar(user!.id, avatarUri!);
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Upload timeout')), 30000)
        );
        const uploadedUrl = await Promise.race([uploadPromise, timeoutPromise]);
        console.log('[avatar-upload] success, url:', uploadedUrl);

        const updated = await upsertCommunityProfile({
          user_id: user!.id,
          naam: naam.trim(),
          bio: communityProfile?.bio ?? '',
          stad: communityProfile?.stad ?? '',
          latitude: communityProfile?.latitude ?? null,
          longitude: communityProfile?.longitude ?? null,
          avatar_url: uploadedUrl,
        });
        setCommunityProfile(updated);
        setLoading(false);
        router.back();
      } catch (e: any) {
        console.error('[avatar-upload]', e?.message || e);
        setLoading(false);
        Alert.alert('Foto uploaden mislukt', 'Je foto kon niet worden geüpload. Controleer je internetverbinding en probeer het opnieuw.');
      }
      return;
    }

    // 3. No avatar upload — navigate back immediately, sync in background
    router.back();

    if (user) {
      // Email update (fire-and-forget with alert feedback)
      if (email.trim() !== (profile?.email ?? '')) {
        supabase.auth.updateUser({ email: email.trim() }).then(({ error }) => {
          if (error) {
            Alert.alert('E-mail wijzigen', error.message);
          } else {
            Alert.alert('E-mail bevestigen', 'We hebben een bevestigingsmail gestuurd naar je nieuwe e-mailadres.');
          }
        });
      }

      // Community profile sync (fire-and-forget)
      upsertCommunityProfile({
        user_id: user.id,
        naam: naam.trim(),
        bio: communityProfile?.bio ?? '',
        stad: communityProfile?.stad ?? '',
        latitude: communityProfile?.latitude ?? null,
        longitude: communityProfile?.longitude ?? null,
        avatar_url: currentAvatarUrl,
      }).then((updated) => {
        setCommunityProfile(updated);
      }).catch((e: any) => {
        console.error('[profile-upsert]', e?.message || e);
      });
    }
  }

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {/* Header */}
        <View style={[s.header, { borderBottomColor: colors.border }]}>
          <Pressable onPress={() => router.back()} style={s.backBtn}>
            <InlineIcon name="arrowLeft" size={22} color={colors.text} />
          </Pressable>
          <Text style={[s.headerTitle, { color: colors.text }]}>Profiel bewerken</Text>
        </View>

        <ScrollView
          contentContainerStyle={s.body}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Avatar */}
          <View style={s.avatarSection}>
            <Pressable onPress={handlePickAvatar}>
              {avatarUri ? (
                <Image source={{ uri: avatarUri }} style={s.avatar} />
              ) : (
                <View style={[s.avatar, { backgroundColor: colors.amber }]}>
                  <Text style={s.avatarText}>{initials}</Text>
                </View>
              )}
              <View style={[s.editBadge, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                <InlineIcon name="fileText" size={14} color={colors.amber} />
              </View>
            </Pressable>
            <Pressable onPress={handlePickAvatar}>
              <Text style={[s.changePhotoText, { color: colors.amber }]}>Wijzig foto</Text>
            </Pressable>
          </View>

          {/* Name */}
          <Text style={[s.label, { color: colors.text }]}>Naam</Text>
          <TextInput
            style={[s.input, { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text }]}
            value={naam}
            onChangeText={setNaam}
            placeholder="Je naam"
            placeholderTextColor={colors.text3}
            autoCapitalize="words"
          />

          {/* Email */}
          <Text style={[s.label, { color: colors.text, marginTop: 20 }]}>E-mailadres</Text>
          <TextInput
            style={[s.input, { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text }]}
            value={email}
            onChangeText={setEmail}
            placeholder="je@email.nl"
            placeholderTextColor={colors.text3}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
          <Text style={[s.hint, { color: colors.text3 }]}>
            Bij wijziging ontvang je een bevestigingsmail.
          </Text>

          {/* Save */}
          <View style={{ marginTop: 32 }}>
            <Button
              title={loading ? 'Opslaan...' : 'Opslaan'}
              onPress={handleSave}
              variant="primary"
              size="lg"
              disabled={loading}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Loading overlay */}
      {loading && (
        <View style={s.loadingOverlay}>
          <View style={[s.loadingBox, { backgroundColor: colors.surface }]}>
            <ActivityIndicator size="large" color={colors.amber} />
            <Text style={[s.loadingText, { color: colors.text }]}>Profiel opslaan...</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  backBtn: { padding: 4 },
  headerTitle: { fontSize: 22, fontWeight: '800' },
  body: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },
  avatarSection: {
    alignItems: 'center',
    gap: 10,
    marginBottom: 32,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: -4,
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  changePhotoText: {
    fontSize: 14,
    fontWeight: '600',
  },
  label: { fontSize: 15, fontWeight: '600', marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },
  hint: {
    fontSize: 12,
    marginTop: 6,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  loadingBox: {
    borderRadius: 16,
    padding: 28,
    alignItems: 'center',
    gap: 12,
  },
  loadingText: {
    fontSize: 15,
    fontWeight: '600',
  },
});
