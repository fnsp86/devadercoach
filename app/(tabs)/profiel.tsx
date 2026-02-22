import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import { InlineIcon } from '@/lib/icons';
import BadgeIcon from '@/components/BadgeIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Toggle from '@/components/Toggle';
import Button from '@/components/Button';
import { getLevelFromXP, ALL_BADGES } from '@/lib/gamification-types';
import { rarityColors } from '@/lib/colors';

const NOTIFICATIONS_KEY = 'vc-notifications';

interface NotificationSettings {
  taakReminder: boolean;
  pulseReminder: boolean;
  lerenReminder: boolean;
  quizReminder: boolean;
  weekCompleteReminder: boolean;
  streakReminder: boolean;
}

const DEFAULT_NOTIFICATIONS: NotificationSettings = {
  taakReminder: true,
  pulseReminder: true,
  lerenReminder: true,
  quizReminder: true,
  weekCompleteReminder: true,
  streakReminder: true,
};

export default function ProfielScreen() {
  const { colors, isDark, toggleTheme } = useTheme();
  const { profile, clearAll, weekTaskCompletions, unlockedBadges, badgeUnlockDates } = useStore();
  const router = useRouter();

  // Compute total XP and level
  const totalXP = weekTaskCompletions.reduce((sum, c) => sum + c.points, 0);
  const currentLevel = getLevelFromXP(totalXP);
  const initials = profile?.naam ? profile.naam.slice(0, 2).toUpperCase() : '?';

  const [notifications, setNotifications] = useState<NotificationSettings>(DEFAULT_NOTIFICATIONS);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(NOTIFICATIONS_KEY);
        if (stored) setNotifications(JSON.parse(stored));
      } catch {}
    })();
  }, []);

  const updateNotification = useCallback((key: keyof NotificationSettings, value: boolean) => {
    setNotifications((prev) => {
      const updated = { ...prev, [key]: value };
      AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(updated)).catch(() => {});
      return updated;
    });
  }, []);

  function handleReset() {
    Alert.alert(
      'Alle data wissen?',
      'Dit verwijdert je profiel, voortgang, badges en instellingen. Dit kan niet ongedaan worden.',
      [
        { text: 'Annuleren', style: 'cancel' },
        {
          text: 'Wis alles',
          style: 'destructive',
          onPress: () => {
            clearAll(); // clearAll now also removes vc-gamification and vc-notifications
            router.replace('/');
          },
        },
      ],
    );
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar + Level header */}
        <View style={styles.profileHeader}>
          <View style={[styles.avatar, { backgroundColor: colors.amber }]}>
            <Text style={styles.avatarText}>{initials}</Text>
          </View>
          <View style={styles.profileHeaderText}>
            <Text style={[styles.profileName, { color: colors.text }]}>
              {profile?.naam || 'Profiel'}
            </Text>
            <View style={styles.levelRow}>
              <Text style={[styles.levelBadge, { color: colors.amber }]}>
                Lv.{currentLevel.level} · {currentLevel.title}
              </Text>
              <Text style={[styles.xpCount, { color: colors.text3 }]}>
                {totalXP} XP
              </Text>
            </View>
          </View>
        </View>

        {/* Recent Badges */}
        {unlockedBadges.length > 0 && (
          <Card style={{ marginTop: 20 }}>
            <View style={styles.cardHeaderRow}>
              <Text style={[styles.sectionTitle, { color: colors.text, marginBottom: 0 }]}>Badges</Text>
              <Pressable
                onPress={() => router.push('/(tabs)/voortgang' as any)}
                style={[styles.manageButton, { backgroundColor: colors.amberDim }]}
              >
                <Text style={[styles.manageButtonText, { color: colors.amber }]}>Alle {unlockedBadges.length} →</Text>
              </Pressable>
            </View>
            <View style={styles.badgeShowcase}>
              {unlockedBadges
                .slice()
                .sort((a, b) => (badgeUnlockDates[b] || '').localeCompare(badgeUnlockDates[a] || ''))
                .slice(0, 6)
                .map((badgeId) => {
                  const badge = ALL_BADGES.find((b) => b.id === badgeId);
                  if (!badge) return null;
                  const rColor = rarityColors[badge.rarity as keyof typeof rarityColors] || rarityColors.common;
                  return (
                    <View key={badgeId} style={[styles.badgeShowcaseItem, { backgroundColor: rColor + '15', borderColor: rColor + '40' }]}>
                      <BadgeIcon emoji={badge.emoji} rarity={badge.rarity as 'common' | 'rare' | 'epic' | 'legendary'} size="sm" />
                      <Text style={[styles.badgeShowcaseName, { color: colors.text }]} numberOfLines={1}>
                        {badge.name}
                      </Text>
                    </View>
                  );
                })}
            </View>
          </Card>
        )}

        {/* Account */}
        <Card style={{ marginTop: 16 }}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Account</Text>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: colors.text3 }]}>Naam</Text>
            <Text style={[styles.infoValue, { color: colors.text }]}>{profile?.naam || '—'}</Text>
          </View>
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: colors.text3 }]}>Email</Text>
            <Text style={[styles.infoValue, { color: colors.text }]}>{profile?.email || '—'}</Text>
          </View>
        </Card>

        {/* Children */}
        <Card style={{ marginTop: 16 }}>
          <View style={styles.cardHeaderRow}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Kinderen</Text>
            <Pressable
              onPress={() => router.push('/onboarding/children')}
              style={[styles.manageButton, { backgroundColor: colors.amberDim }]}
            >
              <Text style={[styles.manageButtonText, { color: colors.amber }]}>Beheren</Text>
            </Pressable>
          </View>
          {profile?.children && profile.children.length > 0 ? (
            profile.children.map((child, index) => (
              <View key={child.id}>
                {index > 0 && <View style={[styles.divider, { backgroundColor: colors.border }]} />}
                <View style={styles.childRow}>
                  <Text style={[styles.childName, { color: colors.text }]}>{child.name}</Text>
                  <Text style={[styles.childAge, { color: colors.text2 }]}>
                    {child.age} jaar · {child.ageGroup}
                  </Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={[styles.emptyText, { color: colors.text3 }]}>
              Nog geen kinderen toegevoegd
            </Text>
          )}
        </Card>

        {/* Notifications */}
        <Card style={{ marginTop: 16 }}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Meldingen</Text>
          <Text style={[styles.notifSubtitle, { color: colors.text3 }]}>
            Ontvang meldingen als je de app niet gebruikt, zodat je op koers blijft.
          </Text>

          <Toggle
            label="Taak herinnering"
            description="Herinnering als je deze week nog geen taak hebt gedaan"
            value={notifications.taakReminder}
            onToggle={(val) => updateNotification('taakReminder', val)}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <Toggle
            label="Vader Pulse reminder"
            description="Dagelijkse herinnering voor je 20-seconden check-in"
            value={notifications.pulseReminder}
            onToggle={(val) => updateNotification('pulseReminder', val)}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <Toggle
            label="Leermodule reminder"
            description="Melding als je al 3+ dagen niet verder bent gegaan met een module"
            value={notifications.lerenReminder}
            onToggle={(val) => updateNotification('lerenReminder', val)}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <Toggle
            label="Quiz herinnering"
            description="Wekelijks een reminder om je quiz-skills te testen"
            value={notifications.quizReminder}
            onToggle={(val) => updateNotification('quizReminder', val)}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <Toggle
            label="Week voortgang"
            description="Halverwege de week een reminder als je nog taken open hebt"
            value={notifications.weekCompleteReminder}
            onToggle={(val) => updateNotification('weekCompleteReminder', val)}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <Toggle
            label="Streak bescherming"
            description="Melding als je streak dreigt af te lopen"
            value={notifications.streakReminder}
            onToggle={(val) => updateNotification('streakReminder', val)}
          />

          <View style={[styles.notifInfo, { backgroundColor: colors.surface2, borderColor: colors.border }]}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 6 }}>
              <View style={{ marginTop: 2 }}>
                <InlineIcon name="info" size={12} color={colors.text3} />
              </View>
              <Text style={[styles.notifInfoText, { color: colors.text3, flex: 1 }]}>
                Meldingen werken alleen als je toestemming hebt gegeven in je telefooninstellingen.
              </Text>
            </View>
          </View>
        </Card>

        {/* Appearance */}
        <Card style={{ marginTop: 16 }}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Weergave</Text>
          <Toggle
            label={isDark ? 'Donker thema' : 'Licht thema'}
            description="Wissel tussen licht en donker"
            value={isDark}
            onToggle={toggleTheme}
          />
        </Card>

        {/* Danger Zone */}
        <Card
          style={{
            marginTop: 16,
            borderColor: colors.red,
            backgroundColor: colors.redDim,
          }}
        >
          <Text style={[styles.sectionTitle, { color: colors.red }]}>Gevarenzone</Text>
          <Text style={[styles.dangerDescription, { color: colors.text2 }]}>
            Verwijdert je profiel, voortgang, badges en alle instellingen.
            Dit kan niet ongedaan worden.
          </Text>
          <View style={styles.dangerButtonContainer}>
            <Button title="Alles wissen" onPress={handleReset} variant="secondary" size="md" />
          </View>
        </Card>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 40 },

  // Profile header
  profileHeader: { flexDirection: 'row' as const, alignItems: 'center' as const, gap: 16, marginBottom: 8 },
  avatar: { width: 56, height: 56, borderRadius: 28, alignItems: 'center' as const, justifyContent: 'center' as const },
  avatarText: { color: '#000', fontSize: 20, fontWeight: '800' as const },
  profileHeaderText: { flex: 1 },
  profileName: { fontSize: 22, fontWeight: '800' as const, marginBottom: 4 },
  levelRow: { flexDirection: 'row' as const, alignItems: 'center' as const, gap: 8 },
  levelBadge: { fontSize: 13, fontWeight: '700' as const },
  xpCount: { fontSize: 13, fontWeight: '600' as const },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  infoLabel: { fontSize: 14, fontWeight: '500' },
  infoValue: { fontSize: 15, fontWeight: '600' },
  divider: { height: 1, marginVertical: 8 },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  manageButton: { paddingHorizontal: 14, paddingVertical: 7, borderRadius: 8 },
  manageButtonText: { fontSize: 13, fontWeight: '600' },
  childRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  childName: { fontSize: 15, fontWeight: '600' },
  childAge: { fontSize: 14 },
  emptyText: { fontSize: 14, fontStyle: 'italic' },

  // Notifications
  notifSubtitle: { fontSize: 13, marginBottom: 16, marginTop: -4, lineHeight: 18 },
  notifInfo: {
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
  },
  notifInfoText: { fontSize: 12, lineHeight: 17 },

  // Badge showcase
  badgeShowcase: { flexDirection: 'row' as const, flexWrap: 'wrap' as const, gap: 8, marginTop: 12 },
  badgeShowcaseItem: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    gap: 6,
  },
  badgeShowcaseEmoji: { fontSize: 18 },
  badgeShowcaseName: { fontSize: 13, fontWeight: '600' as const },

  dangerDescription: { fontSize: 14, lineHeight: 20, marginBottom: 16, marginTop: -4 },
  dangerButtonContainer: { alignSelf: 'flex-start' },
  bottomSpacer: { height: 20 },
});
