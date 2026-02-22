import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  Image,
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
import { createStory, uploadStoryImage, type Story } from '@/lib/supabase';
import { InlineIcon } from '@/lib/icons';
import Button from '@/components/Button';

type Category = Story['category'];

const CATEGORIES: { value: Category; label: string; color: string }[] = [
  { value: 'tip', label: 'Tip', color: '#667eea' },
  { value: 'ervaring', label: 'Ervaring', color: '#34D399' },
  { value: 'vraag', label: 'Vraag', color: '#F59E0B' },
  { value: 'overwinning', label: 'Overwinning', color: '#A78BFA' },
];

export default function CreateStory() {
  const { colors } = useTheme();
  const { user } = useAuth();
  const router = useRouter();

  const [content, setContent] = useState('');
  const [category, setCategory] = useState<Category>('ervaring');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [posting, setPosting] = useState(false);

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });
    if (!result.canceled && result.assets[0]) {
      setImageUri(result.assets[0].uri);
    }
  }

  async function handlePost() {
    if (!content.trim() || !user) return;
    setPosting(true);

    try {
      let image_url: string | undefined;
      if (imageUri) {
        image_url = await uploadStoryImage(user.id, imageUri);
      }

      await createStory({
        author_id: user.id,
        content: content.trim(),
        category,
        image_url,
      });
      router.back();
    } catch (err: any) {
      Alert.alert('Fout', err.message ?? 'Kon verhaal niet plaatsen');
    }
    setPosting(false);
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
            <Text style={[styles.cancelText, { color: colors.text2 }]}>Annuleer</Text>
          </Pressable>
          <Text style={[styles.headerTitle, { color: colors.text }]}>Nieuw verhaal</Text>
          <Button
            title={posting ? '...' : 'Delen'}
            onPress={handlePost}
            variant="primary"
            size="sm"
          />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Category picker */}
          <View style={styles.categoryRow}>
            {CATEGORIES.map((cat) => (
              <Pressable
                key={cat.value}
                onPress={() => setCategory(cat.value)}
                style={[
                  styles.categoryChip,
                  {
                    backgroundColor: category === cat.value ? cat.color + '20' : colors.surface,
                    borderColor: category === cat.value ? cat.color : colors.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.categoryChipText,
                    { color: category === cat.value ? cat.color : colors.text2 },
                  ]}
                >
                  {cat.label}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Content */}
          <TextInput
            style={[styles.textArea, { color: colors.text }]}
            placeholder="Deel je verhaal, tip of vraag..."
            placeholderTextColor={colors.text3}
            value={content}
            onChangeText={setContent}
            multiline
            maxLength={1000}
            autoFocus
            textAlignVertical="top"
          />
          <Text style={[styles.charCount, { color: colors.text3 }]}>{content.length}/1000</Text>

          {/* Image */}
          {imageUri ? (
            <View style={styles.imagePreviewContainer}>
              <Image source={{ uri: imageUri }} style={styles.imagePreview} />
              <Pressable onPress={() => setImageUri(null)} style={[styles.removeImageBtn, { backgroundColor: colors.redDim }]}>
                <InlineIcon name="x" size={16} color={colors.red} />
              </Pressable>
            </View>
          ) : (
            <Pressable
              onPress={pickImage}
              style={[styles.addImageBtn, { borderColor: colors.border, backgroundColor: colors.surface }]}
            >
              <InlineIcon name="mapPin" size={20} color={colors.text3} />
              <Text style={[styles.addImageText, { color: colors.text3 }]}>Foto toevoegen</Text>
            </Pressable>
          )}
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
  categoryRow: { flexDirection: 'row', gap: 8, marginBottom: 16, flexWrap: 'wrap' },
  categoryChip: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  categoryChipText: { fontSize: 14, fontWeight: '600' },
  textArea: {
    fontSize: 16,
    lineHeight: 24,
    minHeight: 150,
  },
  charCount: { fontSize: 12, textAlign: 'right', marginTop: 4, marginBottom: 16 },
  imagePreviewContainer: { position: 'relative', marginTop: 8 },
  imagePreview: { width: '100%', height: 200, borderRadius: 12 },
  removeImageBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addImageBtn: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 12,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  addImageText: { fontSize: 15, fontWeight: '500' },
});
