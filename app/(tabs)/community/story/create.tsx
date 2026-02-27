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
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { createStory, type Story } from '@/lib/supabase';
import Button from '@/components/Button';

type Category = Story['category'];

const CATEGORIES: { value: Category; label: string; color: string }[] = [
  { value: 'tip', label: 'Tip', color: '#667eea' },
  { value: 'ervaring', label: 'Ervaring', color: '#34D399' },
  { value: 'vraag', label: 'Vraag', color: '#F59E0B' },
  { value: 'overwinning', label: 'Overwinning', color: '#A78BFA' },
  { value: 'challenge', label: 'Challenge', color: '#EF4444' },
];

export default function CreateStory() {
  const { colors } = useTheme();
  const { user } = useAuth();
  const router = useRouter();
  const { prefill, prefillCategory, prefillSkill, challengeWeek, returnTo } = useLocalSearchParams<{ prefill?: string; prefillCategory?: string; prefillSkill?: string; challengeWeek?: string; returnTo?: string }>();

  const [content, setContent] = useState(prefill ?? '');
  const [category, setCategory] = useState<Category>((prefillCategory as Category) ?? 'ervaring');
  const [posting, setPosting] = useState(false);

  async function handlePost() {
    if (!content.trim() || !user) return;
    setPosting(true);

    try {
      await createStory({
        author_id: user.id,
        content: content.trim(),
        category,
        ...(prefillSkill ? { skill: prefillSkill } : {}),
        ...(challengeWeek ? { challenge_week: challengeWeek } : {}),
      });
      // If we came from another tab (e.g. help page with prefill),
      // navigate to community feed so the tab doesn't keep showing create
      if (prefill) {
        router.replace('/(tabs)/community');
      } else {
        router.back();
      }
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
          <Pressable onPress={() => returnTo ? router.navigate(returnTo as any) : router.back()}>
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
});
