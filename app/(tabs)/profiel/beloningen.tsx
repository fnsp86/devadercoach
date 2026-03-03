import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { InlineIcon } from '@/lib/icons';
import BadgeIcon from '@/components/BadgeIcon';
import Card from '@/components/Card';
import { ALL_BADGES, type Badge } from '@/lib/gamification-types';
import { rarityColors } from '@/lib/colors';
import {
  REWARD_BADGES,
  getEarnedDiscountCodes,
  type EarnedDiscountCode,
} from '@/lib/badge-rewards';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function isExpired(expiresAt: string): boolean {
  return new Date(expiresAt) < new Date();
}

export default function BeloningenScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const { unlockedBadges } = useStore();
  const [earnedCodes, setEarnedCodes] = useState<EarnedDiscountCode[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    getEarnedDiscountCodes().then(setEarnedCodes);
  }, []);

  const handleCopy = useCallback(async (code: string, badgeId: string) => {
    // Use Alert to show the code since we don't have clipboard
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setCopiedId(badgeId);
    setTimeout(() => setCopiedId(null), 2000);

    // Show alert with code for manual copying
    Alert.alert(
      'Kortingscode',
      `${code}\n\nKopieer deze code en gebruik hem op devadercoach.nl/cursussen`,
      [{ text: 'OK' }],
    );
  }, []);

  // Build reward badges list with earned status
  const rewardBadgeIds = Object.keys(REWARD_BADGES);
  const unlockedSet = new Set(unlockedBadges);

  const earnedBadges: { badge: Badge; code: EarnedDiscountCode }[] = [];
  const lockedBadges: { badge: Badge; percentOff: number }[] = [];

  for (const badgeId of rewardBadgeIds) {
    const badge = ALL_BADGES.find((b) => b.id === badgeId);
    if (!badge) continue;

    const code = earnedCodes.find((c) => c.badgeId === badgeId);
    if (code) {
      earnedBadges.push({ badge, code });
    } else {
      lockedBadges.push({ badge, percentOff: REWARD_BADGES[badgeId].percentOff });
    }
  }

  // Sort earned by percentOff descending (best deals first)
  earnedBadges.sort((a, b) => b.code.percentOff - a.code.percentOff);
  // Sort locked by percentOff ascending (easiest to get first)
  lockedBadges.sort((a, b) => a.percentOff - b.percentOff);

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={[s.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.back()} hitSlop={12} style={s.backBtn}>
          <InlineIcon name="arrowLeft" size={20} color={colors.text} />
        </Pressable>
        <Text style={[s.headerTitle, { color: colors.text }]}>Beloningen</Text>
        <View style={{ width: 32 }} />
      </View>

      <ScrollView
        style={s.scroll}
        contentContainerStyle={s.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Intro */}
        <View style={[s.introBox, { backgroundColor: colors.amberDim, borderColor: colors.amber + '30' }]}>
          <InlineIcon name="gift" size={20} color={colors.amber} />
          <Text style={[s.introText, { color: colors.text2 }]}>
            Verdien kortingscodes door badges te behalen in de app. Gebruik ze op devadercoach.nl voor korting op cursussen.
          </Text>
        </View>

        {/* Earned codes */}
        {earnedBadges.length > 0 && (
          <Card style={{ marginTop: 16 }}>
            <Text style={[s.sectionTitle, { color: colors.text }]}>
              Verdiende Codes ({earnedBadges.length})
            </Text>

            {earnedBadges.map(({ badge, code }, i) => {
              const expired = isExpired(code.expiresAt);
              const rColor = rarityColors[badge.rarity as keyof typeof rarityColors] || rarityColors.common;
              const isCopied = copiedId === badge.id;

              return (
                <View key={badge.id}>
                  {i > 0 && <View style={[s.divider, { backgroundColor: colors.border }]} />}
                  <View style={s.codeRow}>
                    <View style={s.codeLeft}>
                      <View style={s.codeBadgeRow}>
                        <BadgeIcon
                          emoji={badge.emoji}
                          rarity={badge.rarity as 'common' | 'rare' | 'epic' | 'legendary'}
                          size="sm"
                        />
                        <View style={{ flex: 1 }}>
                          <Text style={[s.codeBadgeName, { color: colors.text }]}>
                            {badge.name}
                          </Text>
                          <Text style={[s.codePercentage, { color: rColor }]}>
                            {code.percentOff}% korting
                          </Text>
                        </View>
                      </View>

                      {/* Code display */}
                      <Pressable
                        onPress={() => !expired && handleCopy(code.code, badge.id)}
                        style={[
                          s.codeBox,
                          {
                            backgroundColor: expired ? colors.surface2 : colors.amberDim,
                            borderColor: expired ? colors.border : colors.amber + '40',
                          },
                        ]}
                        disabled={expired}
                      >
                        <Text
                          style={[
                            s.codeText,
                            { color: expired ? colors.text3 : colors.amber },
                          ]}
                        >
                          {code.code}
                        </Text>
                        {!expired && (
                          <View style={[s.copyBtn, { backgroundColor: colors.amber + '20' }]}>
                            <InlineIcon
                              name={isCopied ? 'check' : 'copy'}
                              size={14}
                              color={colors.amber}
                            />
                          </View>
                        )}
                      </Pressable>

                      {/* Status */}
                      <Text style={[s.codeStatus, { color: expired ? colors.red : colors.text3 }]}>
                        {expired
                          ? 'Verlopen'
                          : `Geldig tot ${formatDate(code.expiresAt)}`}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}

            <View style={[s.websiteHint, { backgroundColor: colors.surface2 }]}>
              <InlineIcon name="info" size={12} color={colors.text3} />
              <Text style={[s.websiteHintText, { color: colors.text3 }]}>
                Alleen geldig op losse cursussen op devadercoach.nl
              </Text>
            </View>
          </Card>
        )}

        {/* Empty state for earned */}
        {earnedBadges.length === 0 && (
          <Card style={{ marginTop: 16 }}>
            <View style={s.emptyState}>
              <View style={[s.emptyIcon, { backgroundColor: colors.amber + '15' }]}>
                <InlineIcon name="gift" size={28} color={colors.amber} />
              </View>
              <Text style={[s.emptyTitle, { color: colors.text }]}>
                Nog geen kortingscodes
              </Text>
              <Text style={[s.emptySubtitle, { color: colors.text3 }]}>
                Verdien badges om kortingscodes te ontgrendelen voor cursussen op de website.
              </Text>
            </View>
          </Card>
        )}

        {/* Locked / upcoming rewards */}
        {lockedBadges.length > 0 && (
          <Card style={{ marginTop: 16 }}>
            <Text style={[s.sectionTitle, { color: colors.text }]}>
              Nog te Verdienen
            </Text>

            {lockedBadges.map(({ badge, percentOff }, i) => {
              const rColor = rarityColors[badge.rarity as keyof typeof rarityColors] || rarityColors.common;
              const isUnlocked = unlockedSet.has(badge.id);

              return (
                <View key={badge.id}>
                  {i > 0 && <View style={[s.divider, { backgroundColor: colors.border }]} />}
                  <View style={[s.lockedRow, { opacity: isUnlocked ? 1 : 0.6 }]}>
                    <BadgeIcon
                      emoji={isUnlocked ? badge.emoji : '🔒'}
                      rarity={badge.rarity as 'common' | 'rare' | 'epic' | 'legendary'}
                      size="sm"
                    />
                    <View style={{ flex: 1 }}>
                      <Text style={[s.lockedName, { color: colors.text }]}>
                        {badge.name}
                      </Text>
                      <Text style={[s.lockedDesc, { color: colors.text3 }]}>
                        {badge.description}
                      </Text>
                    </View>
                    <View style={[s.percentBadge, { backgroundColor: rColor + '18' }]}>
                      <Text style={[s.percentText, { color: rColor }]}>
                        {percentOff}%
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </Card>
        )}

        <View style={{ height: 40 }} />
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
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 18, fontWeight: '700' },
  scroll: { flex: 1 },
  scrollContent: { padding: 20 },

  introBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  introText: { fontSize: 13, lineHeight: 19, flex: 1 },

  sectionTitle: { fontSize: 17, fontWeight: '700', marginBottom: 14 },
  divider: { height: 1, marginVertical: 12 },

  codeRow: { flexDirection: 'row' },
  codeLeft: { flex: 1 },
  codeBadgeRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  codeBadgeName: { fontSize: 15, fontWeight: '700' },
  codePercentage: { fontSize: 13, fontWeight: '600' },

  codeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  codeText: { fontSize: 16, fontWeight: '800', letterSpacing: 1.5 },
  copyBtn: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },

  codeStatus: { fontSize: 12, fontWeight: '500', marginTop: 6 },

  websiteHint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    padding: 10,
    borderRadius: 8,
    marginTop: 14,
  },
  websiteHintText: { fontSize: 11, flex: 1 },

  emptyState: { alignItems: 'center', paddingVertical: 24, gap: 8 },
  emptyIcon: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  emptyTitle: { fontSize: 17, fontWeight: '700' },
  emptySubtitle: { fontSize: 14, textAlign: 'center', lineHeight: 20, paddingHorizontal: 8 },

  lockedRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  lockedName: { fontSize: 14, fontWeight: '600' },
  lockedDesc: { fontSize: 12, marginTop: 1 },
  percentBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  percentText: { fontSize: 14, fontWeight: '800' },
});
