import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { InlineIcon } from '@/lib/icons';
import { SKILL_COLORS } from '@/lib/colors';
import Button from '@/components/Button';
import JournalEntryModal from '@/components/JournalEntryModal';
import type { JournalEntry, JournalMood } from '@/lib/types';

const MOOD_EMOJI: Record<JournalMood, string> = {
  goed: '😊',
  'oké': '😐',
  moeilijk: '😓',
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' });
}

export default function DagboekScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const { journalEntries } = useStore();
  const [modalVisible, setModalVisible] = useState(false);

  const sorted = useMemo(
    () => [...journalEntries].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    [journalEntries],
  );

  function renderEntry({ item }: { item: JournalEntry }) {
    const skillColor = item.skill ? (SKILL_COLORS[item.skill] ?? '#667eea') : null;
    return (
      <View style={[s.entryCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <View style={s.entryHeader}>
          <Text style={[s.entryDate, { color: colors.text3 }]}>{formatDate(item.date)}</Text>
          {item.mood && <Text style={s.moodEmoji}>{MOOD_EMOJI[item.mood]}</Text>}
        </View>
        <Text style={[s.entryText, { color: colors.text }]}>{item.text}</Text>
        {item.skill && skillColor && (
          <View style={[s.skillChip, { backgroundColor: skillColor + '18' }]}>
            <Text style={[s.skillChipText, { color: skillColor }]}>{item.skill}</Text>
          </View>
        )}
      </View>
    );
  }

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      <View style={[s.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.back()} style={s.backBtn}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={[s.title, { color: colors.text }]}>Vader Dagboek</Text>
          <Text style={[s.subtitle, { color: colors.text3 }]}>
            {journalEntries.length} {journalEntries.length === 1 ? 'notitie' : 'notities'}
          </Text>
        </View>
      </View>

      {/* Schrijf-knop */}
      <View style={s.writeRow}>
        <Button
          title="Win van de dag schrijven"
          onPress={() => setModalVisible(true)}
          variant="primary"
          size="md"
          icon={<InlineIcon name="penLine" size={18} color="#1A1F2B" />}
        />
      </View>

      {sorted.length === 0 ? (
        <View style={s.empty}>
          <InlineIcon name="fileText" size={48} color={colors.text3} />
          <Text style={[s.emptyTitle, { color: colors.text }]}>Nog geen notities</Text>
          <Text style={[s.emptyText, { color: colors.text3 }]}>
            Wat ging er vandaag goed als vader? Schrijf het op en verdien 5 XP.
          </Text>
        </View>
      ) : (
        <FlatList
          data={sorted}
          keyExtractor={(item) => item.id}
          renderItem={renderEntry}
          contentContainerStyle={s.list}
          showsVerticalScrollIndicator={false}
        />
      )}

      <JournalEntryModal visible={modalVisible} onClose={() => setModalVisible(false)} />
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
  title: { fontSize: 22, fontWeight: '800' },
  subtitle: { fontSize: 13, fontWeight: '500', marginTop: 2 },
  writeRow: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 8 },

  list: { padding: 16, gap: 12, paddingBottom: 40 },

  entryCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  entryDate: { fontSize: 12, fontWeight: '600', textTransform: 'capitalize' },
  moodEmoji: { fontSize: 18 },
  entryText: { fontSize: 15, lineHeight: 22 },
  skillChip: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginTop: 10,
  },
  skillChipText: { fontSize: 11, fontWeight: '700' },

  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    padding: 40,
  },
  emptyTitle: { fontSize: 18, fontWeight: '700' },
  emptyText: { fontSize: 15, fontWeight: '500', textAlign: 'center', lineHeight: 22 },
});
