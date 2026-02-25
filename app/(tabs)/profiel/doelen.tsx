import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { InlineIcon } from '@/lib/icons';
import { DOEL_SKILL_MAP } from '@/lib/task-selector';
import { SKILL_COLORS } from '@/lib/colors';
import Button from '@/components/Button';
import type { AppDoel, Skill } from '@/lib/types';

const ALL_DOELEN: AppDoel[] = [
  'Rustiger reageren',
  'Meer verbinding',
  'Betere grenzen stellen',
  'Mijn kind beter begrijpen',
  'Minder schreeuwen',
  'Meer geduld hebben',
  'Beter luisteren',
  'Herstellen na een ruzie',
  'Mijn kind zelfstandiger maken',
  'Bewuster opvoeden',
  'Mijn eigen patronen doorbreken',
  'Emoties beter begeleiden',
  'Consequenter zijn',
  'Meer quality time',
];

export default function DoelenScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const { profile, saveProfile } = useStore();

  const [selected, setSelected] = useState<AppDoel[]>(profile?.doelen ?? []);

  function toggleDoel(doel: AppDoel) {
    setSelected((prev) => {
      if (prev.includes(doel)) return prev.filter((d) => d !== doel);
      if (prev.length >= 3) return prev;
      return [...prev, doel];
    });
  }

  function handleSave() {
    if (!profile) return;
    saveProfile({
      ...profile,
      doel: selected[0] ?? profile.doel,
      doelen: selected.length > 0 ? selected : undefined,
    });
    router.back();
  }

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      <View style={[s.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.back()} style={s.backBtn}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <Text style={[s.title, { color: colors.text }]}>Mijn Doelen</Text>
        <View style={s.backBtn} />
      </View>

      <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>
        <Text style={[s.intro, { color: colors.text2 }]}>
          Kies 1 tot 3 doelen. Je weektaken worden hierop afgestemd.
        </Text>

        <View style={s.grid}>
          {ALL_DOELEN.map((doel) => {
            const isSelected = selected.includes(doel);
            const isDisabled = !isSelected && selected.length >= 3;
            const skills = DOEL_SKILL_MAP[doel] ?? [];

            return (
              <Pressable
                key={doel}
                onPress={() => toggleDoel(doel)}
                disabled={isDisabled}
                style={[
                  s.doelCard,
                  {
                    backgroundColor: isSelected ? colors.amberDim : colors.surface,
                    borderColor: isSelected ? colors.amber : colors.border,
                    opacity: isDisabled ? 0.4 : 1,
                  },
                ]}
              >
                <Text style={[s.doelText, { color: isSelected ? colors.amber : colors.text }]}>
                  {doel}
                </Text>
                <View style={s.skillsRow}>
                  {skills.slice(0, 3).map((skill: Skill) => (
                    <View
                      key={skill}
                      style={[s.skillChip, { backgroundColor: (SKILL_COLORS[skill] ?? '#667eea') + '18' }]}
                    >
                      <Text style={[s.skillChipText, { color: SKILL_COLORS[skill] ?? '#667eea' }]}>
                        {skill}
                      </Text>
                    </View>
                  ))}
                </View>
              </Pressable>
            );
          })}
        </View>

        <Text style={[s.count, { color: colors.text3 }]}>
          {selected.length}/3 gekozen
        </Text>

        <Button title="Opslaan" onPress={handleSave} size="lg" disabled={selected.length === 0} />
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  backBtn: { width: 44, padding: 4 },
  title: { fontSize: 18, fontWeight: '700' },
  scroll: { padding: 20, paddingBottom: 40 },
  intro: { fontSize: 15, lineHeight: 22, marginBottom: 20 },
  grid: { gap: 10, marginBottom: 16 },
  doelCard: {
    borderWidth: 1.5,
    borderRadius: 14,
    padding: 14,
  },
  doelText: { fontSize: 15, fontWeight: '600', marginBottom: 6 },
  skillsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  skillChip: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  skillChipText: { fontSize: 11, fontWeight: '700' },
  count: { fontSize: 13, fontWeight: '600', textAlign: 'center', marginBottom: 20 },
});
