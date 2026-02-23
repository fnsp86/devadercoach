import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Modal,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { ALL_BADGES, type Badge } from '@/lib/gamification-types';
import { InlineIcon } from '@/lib/icons';
import BadgeIcon from '@/components/BadgeIcon';
import { rarityColors } from '@/lib/colors';
import type { IconName } from '@/lib/icons';

const BADGE_CATEGORIES = [
  { key: 'streak', label: 'Streak', icon: 'flame' as IconName },
  { key: 'skill', label: 'Skill', icon: 'target' as IconName },
  { key: 'vader', label: 'Vader', icon: 'user' as IconName },
  { key: 'arena', label: 'Arena', icon: 'swords' as IconName },
  { key: 'learn', label: 'Leren', icon: 'bookMarked' as IconName },
  { key: 'combo', label: 'Combo', icon: 'zap' as IconName },
  { key: 'explorer', label: 'Ontdekking', icon: 'compass' as IconName },
  { key: 'daily', label: 'Dagelijks', icon: 'sun' as IconName },
  { key: 'challenge', label: 'Challenge', icon: 'swords' as IconName },
  { key: 'secret', label: 'Geheim', icon: 'lock' as IconName },
] as const;

const RARITY_LABELS: Record<string, string> = {
  common: 'Gewoon',
  rare: 'Zeldzaam',
  epic: 'Episch',
  legendary: 'Legendarisch',
};

const CATEGORY_LABELS: Record<string, string> = {
  streak: 'Streak',
  skill: 'Skill',
  vader: 'Vader',
  arena: 'Arena',
  learn: 'Leren',
  combo: 'Combo',
  explorer: 'Ontdekking',
  daily: 'Dagelijks',
  challenge: 'Challenge',
  secret: 'Geheim',
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BadgesScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const { unlockedBadges, badgeUnlockDates } = useStore();

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);

  const filteredBadges = useMemo(() => {
    return activeCategory
      ? ALL_BADGES.filter((b) => b.category === activeCategory)
      : ALL_BADGES;
  }, [activeCategory]);

  const unlockedSet = new Set(unlockedBadges);
  const unlockedCount = unlockedBadges.length;

  // Split into unlocked and locked
  const unlockedList = filteredBadges.filter((b) => unlockedSet.has(b.id));
  const lockedList = filteredBadges.filter((b) => !unlockedSet.has(b.id));

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={[s.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.back()} style={s.backBtn}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={[s.title, { color: colors.text }]}>Badges</Text>
          <Text style={[s.subtitle, { color: colors.text3 }]}>{unlockedCount} / {ALL_BADGES.length} behaald</Text>
        </View>
      </View>

      {/* Category filter chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={s.filterScroll}
        contentContainerStyle={s.filterContent}
      >
        <Pressable
          onPress={() => setActiveCategory(null)}
          style={[
            s.chip,
            {
              backgroundColor: !activeCategory ? colors.amber : colors.surface,
              borderColor: !activeCategory ? colors.amber : colors.border,
            },
          ]}
        >
          <Text style={[s.chipText, { color: !activeCategory ? '#fff' : colors.text2 }]}>
            Alles
          </Text>
        </Pressable>
        {BADGE_CATEGORIES.map((cat) => {
          const catBadges = ALL_BADGES.filter((b) => b.category === cat.key);
          const catUnlocked = catBadges.filter((b) => unlockedSet.has(b.id)).length;
          const active = activeCategory === cat.key;
          return (
            <Pressable
              key={cat.key}
              onPress={() => setActiveCategory(active ? null : cat.key)}
              style={[
                s.chip,
                {
                  backgroundColor: active ? colors.amber : colors.surface,
                  borderColor: active ? colors.amber : colors.border,
                },
              ]}
            >
              <InlineIcon name={cat.icon} size={14} color={active ? '#fff' : colors.text3} />
              <Text style={[s.chipText, { color: active ? '#fff' : colors.text2 }]}>
                {cat.label}
              </Text>
              {catUnlocked > 0 && (
                <View style={[s.chipCount, { backgroundColor: active ? 'rgba(255,255,255,0.3)' : colors.amberDim }]}>
                  <Text style={[s.chipCountText, { color: active ? '#fff' : colors.amber }]}>{catUnlocked}</Text>
                </View>
              )}
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Badge list */}
      <ScrollView contentContainerStyle={s.listContent} showsVerticalScrollIndicator={false}>
        {/* Unlocked section */}
        {unlockedList.length > 0 && (
          <>
            <View style={s.sectionHeader}>
              <InlineIcon name="trophy" size={16} color={colors.amber} />
              <Text style={[s.sectionTitle, { color: colors.text }]}>
                Behaald ({unlockedList.length})
              </Text>
            </View>
            {unlockedList.map((badge) => {
              const rColor = rarityColors[badge.rarity as keyof typeof rarityColors] || rarityColors.common;
              const unlockDate = badgeUnlockDates[badge.id];
              return (
                <Pressable
                  key={badge.id}
                  onPress={() => setSelectedBadge(badge)}
                  style={[s.badgeRow, {
                    backgroundColor: colors.surface,
                    borderColor: rColor + '25',
                    shadowColor: rColor,
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: badge.rarity === 'legendary' ? 0.15 : badge.rarity === 'epic' ? 0.1 : 0,
                    shadowRadius: 8,
                  }]}
                >
                  <View style={[s.badgeAccent, { backgroundColor: rColor }]} />
                  <BadgeIcon emoji={badge.emoji} rarity={badge.rarity as 'common' | 'rare' | 'epic' | 'legendary'} size="md" />
                  <View style={s.badgeInfo}>
                    <Text style={[s.badgeName, { color: colors.text }]} numberOfLines={1}>
                      {badge.name}
                    </Text>
                    <Text style={[s.badgeDesc, { color: colors.text3 }]} numberOfLines={2}>
                      {badge.description}
                    </Text>
                  </View>
                  <View style={s.badgeRight}>
                    <View style={[s.rarityPill, { backgroundColor: rColor + '15' }]}>
                      <Text style={[s.rarityText, { color: rColor }]}>
                        {RARITY_LABELS[badge.rarity] || badge.rarity}
                      </Text>
                    </View>
                    {unlockDate && (
                      <Text style={[s.dateText, { color: colors.text3 }]}>
                        {new Date(unlockDate).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' })}
                      </Text>
                    )}
                  </View>
                </Pressable>
              );
            })}
          </>
        )}

        {/* Locked section */}
        {lockedList.length > 0 && (
          <>
            <View style={[s.sectionHeader, { marginTop: unlockedList.length > 0 ? 24 : 0 }]}>
              <InlineIcon name="lock" size={16} color={colors.text3} />
              <Text style={[s.sectionTitle, { color: colors.text3 }]}>
                Nog te behalen ({lockedList.length})
              </Text>
            </View>
            {lockedList.map((badge) => {
              const rColor = rarityColors[badge.rarity as keyof typeof rarityColors] || rarityColors.common;
              return (
                <View
                  key={badge.id}
                  style={[s.badgeRow, s.lockedRow, { backgroundColor: colors.surface, borderColor: colors.border }]}
                >
                  <View style={[s.badgeAccent, { backgroundColor: colors.border }]} />
                  <BadgeIcon emoji={badge.emoji} rarity={badge.rarity as 'common' | 'rare' | 'epic' | 'legendary'} size="md" locked />
                  <View style={s.badgeInfo}>
                    <Text style={[s.badgeName, { color: colors.text3 }]} numberOfLines={1}>
                      {badge.name}
                    </Text>
                    <Text style={[s.badgeDesc, { color: colors.text3 }]} numberOfLines={2}>
                      {badge.description}
                    </Text>
                  </View>
                  <View style={[s.rarityPill, { backgroundColor: rColor + '10' }]}>
                    <Text style={[s.rarityText, { color: rColor + '80' }]}>
                      {RARITY_LABELS[badge.rarity] || badge.rarity}
                    </Text>
                  </View>
                </View>
              );
            })}
          </>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* Badge detail modal */}
      <Modal visible={!!selectedBadge} transparent animationType="fade" onRequestClose={() => setSelectedBadge(null)}>
        <Pressable style={s.modalOverlay} onPress={() => setSelectedBadge(null)}>
          <Pressable style={[s.modalCard, { backgroundColor: colors.surface }]} onPress={() => {}}>
            {selectedBadge && (() => {
              const rColor = rarityColors[selectedBadge.rarity as keyof typeof rarityColors] || rarityColors.common;
              const unlockDate = badgeUnlockDates[selectedBadge.id];
              const isUnlocked = unlockedSet.has(selectedBadge.id);
              return (
                <>
                  <View style={[s.modalRarityBar, { backgroundColor: rColor }]} />
                  <Pressable onPress={() => setSelectedBadge(null)} style={s.modalClose}>
                    <InlineIcon name="x" size={20} color={colors.text3} />
                  </Pressable>
                  <View style={s.modalBody}>
                    <View style={[s.modalIconBg, { backgroundColor: rColor + '0A' }]}>
                      <BadgeIcon
                        emoji={selectedBadge.emoji}
                        rarity={selectedBadge.rarity as 'common' | 'rare' | 'epic' | 'legendary'}
                        size="lg"
                      />
                    </View>
                    <Text style={[s.modalName, { color: colors.text }]}>{selectedBadge.name}</Text>
                    <Text style={[s.modalDesc, { color: colors.text2 }]}>{selectedBadge.description}</Text>
                    <View style={s.modalTagRow}>
                      <View style={[s.modalTag, { backgroundColor: rColor + '14', borderWidth: 1, borderColor: rColor + '25' }]}>
                        <View style={[s.modalRarityDot, { backgroundColor: rColor }]} />
                        <Text style={[s.modalTagText, { color: rColor }]}>
                          {RARITY_LABELS[selectedBadge.rarity] || selectedBadge.rarity}
                        </Text>
                      </View>
                      <View style={[s.modalTag, { backgroundColor: colors.surface2 }]}>
                        <Text style={[s.modalTagText, { color: colors.text2 }]}>
                          {CATEGORY_LABELS[selectedBadge.category] || selectedBadge.category}
                        </Text>
                      </View>
                    </View>
                    {unlockDate && (
                      <View style={[s.modalDateRow, { backgroundColor: colors.surface2 }]}>
                        <InlineIcon name="checkCircle" size={14} color="#22C55E" />
                        <Text style={[s.modalDate, { color: colors.text2 }]}>
                          Behaald op {formatDate(unlockDate)}
                        </Text>
                      </View>
                    )}
                  </View>
                </>
              );
            })()}
          </Pressable>
        </Pressable>
      </Modal>
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

  filterScroll: { maxHeight: 60, flexGrow: 0 },
  filterContent: { paddingHorizontal: 16, paddingVertical: 12, gap: 8 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    height: 36,
  },
  chipText: { fontSize: 14, fontWeight: '700' },
  chipCount: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  chipCountText: { fontSize: 11, fontWeight: '800' },

  // List
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  sectionTitle: { fontSize: 16, fontWeight: '700' },

  // Badge row (list item)
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 10,
    overflow: 'hidden',
    gap: 14,
    paddingRight: 14,
    paddingVertical: 14,
  },
  lockedRow: {
    opacity: 0.5,
  },
  badgeAccent: {
    width: 4,
    alignSelf: 'stretch',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    marginRight: 0,
  },
  badgeInfo: {
    flex: 1,
    gap: 4,
  },
  badgeName: { fontSize: 16, fontWeight: '700', lineHeight: 21 },
  badgeDesc: { fontSize: 13, lineHeight: 18 },
  badgeRight: {
    alignItems: 'flex-end',
    gap: 6,
  },
  dateText: { fontSize: 11, fontWeight: '500' },
  rarityPill: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  rarityText: { fontSize: 11, fontWeight: '700' },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 28,
  },
  modalCard: {
    width: '100%',
    maxWidth: 340,
    borderRadius: 24,
    overflow: 'hidden',
  },
  modalRarityBar: { height: 4 },
  modalClose: {
    position: 'absolute',
    top: 14,
    right: 14,
    zIndex: 1,
    padding: 4,
  },
  modalBody: {
    padding: 28,
    paddingTop: 20,
    alignItems: 'center',
    gap: 10,
  },
  modalIconBg: {
    borderRadius: 60,
    padding: 16,
    marginBottom: 4,
  },
  modalName: { fontSize: 24, fontWeight: '800', textAlign: 'center', marginTop: 2 },
  modalDesc: { fontSize: 15, lineHeight: 23, textAlign: 'center' },
  modalTagRow: { flexDirection: 'row', gap: 8, marginTop: 10 },
  modalTag: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10 },
  modalTagText: { fontSize: 13, fontWeight: '700' },
  modalRarityDot: { width: 7, height: 7, borderRadius: 4 },
  modalDateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 8,
  },
  modalDate: { fontSize: 13, fontWeight: '600' },
});
