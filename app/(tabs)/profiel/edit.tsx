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

export default function EditProfileScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const { profile, saveProfile } = useStore();
  const { user, communityProfile, setCommunityProfile } = useAuth();

  const [naam, setNaam] = useState(profile?.naam ?? '');
  const [email, setEmail] = useState(profile?.email ?? '');
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

    setLoading(true);
    let shouldGoBack = true;

    try {
      // Update local profile
      if (profile) {
        saveProfile({ ...profile, naam: naam.trim(), email: email.trim() });
      }

      // Update email in Supabase if changed and user is logged in
      if (user && email.trim() !== (profile?.email ?? '')) {
        const { error } = await supabase.auth.updateUser({ email: email.trim() });
        if (error) {
          Alert.alert('E-mail wijzigen', error.message);
        } else {
          Alert.alert('E-mail bevestigen', 'We hebben een bevestigingsmail gestuurd naar je nieuwe e-mailadres.');
        }
      }

      // Update community profile if user is logged in
      if (user) {
        let uploadedAvatarUrl = communityProfile?.avatar_url ?? null;

        // Upload new avatar if changed (local URI, not an existing URL)
        if (avatarUri && avatarUri !== uploadedAvatarUrl && !avatarUri.startsWith('http')) {
          try {
            uploadedAvatarUrl = await uploadAvatar(user.id, avatarUri);
            console.log('[avatar-upload] success, url:', uploadedAvatarUrl);
          } catch (e: any) {
            console.error('[avatar-upload]', e?.message || e);
            shouldGoBack = false;
            Alert.alert('Foto uploaden mislukt', 'Je foto kon niet worden geüpload. Controleer je internetverbinding en probeer het opnieuw.');
            return;
          }
        }

        try {
          console.log('[profile-upsert] saving avatar_url:', uploadedAvatarUrl);
          const updated = await upsertCommunityProfile({
            user_id: user.id,
            naam: naam.trim(),
            bio: communityProfile?.bio ?? '',
            stad: communityProfile?.stad ?? '',
            latitude: communityProfile?.latitude ?? null,
            longitude: communityProfile?.longitude ?? null,
            avatar_url: uploadedAvatarUrl,
          });
          console.log('[profile-upsert] saved, avatar_url in response:', updated.avatar_url);
          setCommunityProfile(updated);
        } catch (e: any) {
          console.error('[profile-upsert]', e?.message || e);
        }
      }
    } finally {
      setLoading(false);
      if (shouldGoBack) router.back();
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
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
});
