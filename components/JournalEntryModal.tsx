import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { InlineIcon } from '@/lib/icons';
import { SKILL_COLORS } from '@/lib/colors';
import { ALL_SKILLS } from '@/lib/skills';
import Button from '@/components/Button';
import type { Skill, JournalMood } from '@/lib/types';

const MOODS: { value: JournalMood; label: string; emoji: string }[] = [
  { value: 'goed', label: 'Goed', emoji: '😊' },
  { value: 'oké', label: 'Oké', emoji: '😐' },
  { value: 'moeilijk', label: 'Moeilijk', emoji: '😓' },
];

interface JournalEntryModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function JournalEntryModal({ visible, onClose }: JournalEntryModalProps) {
  const { colors } = useTheme();
  const { addJournalEntry } = useStore();
  const [text, setText] = useState('');
  const [mood, setMood] = useState<JournalMood | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  function handleSave() {
    if (!text.trim()) return;
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    addJournalEntry({
      id: `journal_${Date.now()}`,
      date,
      text: text.trim(),
      mood: mood ?? undefined,
      skill: skill ?? undefined,
      createdAt: now.toISOString(),
    });
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setText('');
    setMood(null);
    setSkill(null);
    onClose();
  }

  function handleClose() {
    setText('');
    setMood(null);
    setSkill(null);
    onClose();
  }

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={handleClose}>
      <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={s.safe}>
          <ScrollView contentContainerStyle={s.scroll} keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag">
            {/* Header */}
            <View style={[s.header, { borderBottomColor: colors.border }]}>
              <Pressable onPress={handleClose} style={s.backBtn}>
                <InlineIcon name="arrowLeft" size={22} color={colors.text} />
              </Pressable>
              <Text style={[s.title, { color: colors.text }]}>Win van de dag</Text>
              <View style={s.backBtn} />
            </View>

            {/* Prompt */}
            <Text style={[s.prompt, { color: colors.text2 }]}>
              Wat ging er goed vandaag als vader?
            </Text>

            {/* Text input */}
            <TextInput
              style={[s.input, { color: colors.text, backgroundColor: colors.surface, borderColor: colors.border }]}
              placeholder="Ik heb vandaag..."
              placeholderTextColor={colors.text3}
              value={text}
              onChangeText={setText}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              autoFocus
            />

            {/* Mood selector */}
            <Text style={[s.label, { color: colors.text }]}>Hoe voelde je je?</Text>
            <View style={s.moodRow}>
              {MOODS.map((m) => {
                const isSelected = mood === m.value;
                return (
                  <Pressable
                    key={m.value}
                    onPress={() => { Keyboard.dismiss(); setMood(isSelected ? null : m.value); }}
                    style={[
                      s.moodChip,
                      {
                        backgroundColor: isSelected ? colors.amberDim : colors.surface,
                        borderColor: isSelected ? colors.amber : colors.border,
                      },
                    ]}
                  >
                    <Text style={s.moodEmoji}>{m.emoji}</Text>
                    <Text style={[s.moodLabel, { color: isSelected ? colors.amber : colors.text2 }]}>{m.label}</Text>
                  </Pressable>
                );
              })}
            </View>

            {/* Skill tag (optional) */}
            <Text style={[s.label, { color: colors.text }]}>Gerelateerde skill (optioneel)</Text>
            <View style={s.skillsRow}>
              {ALL_SKILLS.map((sk) => {
                const isSelected = skill === sk;
                const color = SKILL_COLORS[sk] ?? '#667eea';
                return (
                  <Pressable
                    key={sk}
                    onPress={() => { Keyboard.dismiss(); setSkill(isSelected ? null : sk); }}
                    style={[
                      s.skillChip,
                      {
                        backgroundColor: isSelected ? color + '22' : colors.surface,
                        borderColor: isSelected ? color : colors.border,
                      },
                    ]}
                  >
                    <Text style={[s.skillChipText, { color: isSelected ? color : colors.text3 }]}>{sk}</Text>
                  </Pressable>
                );
              })}
            </View>

            {/* XP hint */}
            <Text style={[s.xpHint, { color: colors.text3 }]}>+5 XP · Terug te vinden in je Vader Dagboek (profiel)</Text>

            <Button title="Opslaan" onPress={handleSave} size="lg" disabled={!text.trim()} />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { padding: 20, paddingBottom: 40 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
  },
  backBtn: { width: 44, padding: 4 },
  title: { fontSize: 18, fontWeight: '700' },
  prompt: { fontSize: 16, fontWeight: '600', lineHeight: 22, marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    lineHeight: 22,
    minHeight: 120,
    marginBottom: 20,
  },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 10 },
  moodRow: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  moodChip: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1.5,
  },
  moodEmoji: { fontSize: 18 },
  moodLabel: { fontSize: 13, fontWeight: '600' },
  skillsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 20 },
  skillChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  skillChipText: { fontSize: 12, fontWeight: '700' },
  xpHint: { fontSize: 12, fontWeight: '600', textAlign: 'center', marginBottom: 16 },
});
