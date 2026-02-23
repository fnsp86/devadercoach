import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import { InlineIcon } from '@/lib/icons';
import BadgeIcon from '@/components/BadgeIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { useAuth } from '@/lib/auth';
import { deleteOwnAccount } from '@/lib/supabase';
import Card from '@/components/Card';
import Toggle from '@/components/Toggle';
import Button from '@/components/Button';
import { getLevelFromXP, getProgressToNextLevel, ALL_BADGES } from '@/lib/gamification-types';
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

const XP_WEEK_BONUS = 50;

export default function ProfielScreen() {
  const { colors, isDark, toggleTheme } = useTheme();
  const { profile, clearAll, weekTaskCompletions, unlockedBadges, badgeUnlockDates, pulseCheckIns } = useStore();
  const { signOut, user, communityProfile } = useAuth();
  const router = useRouter();

  // Echte taken (excl. wekelijkse reflectievragen) voor teller
  // Reflectievragen hebben IDs als refl_2026-02-23_0 (met datum)
  // Reflectie-skill taken hebben IDs als refl_02_5 (zonder datum)
  const taskCompletions = useMemo(
    () => weekTaskCompletions.filter((c) => !/^refl_\d{4}-/.test(c.taskId)),
    [weekTaskCompletions],
  );

  const totalXP = weekTaskCompletions.reduce((sum, c) => sum + c.points, 0) + (() => {
    const perWeek: Record<string, number> = {};
    weekTaskCompletions.forEach((c) => { perWeek[c.weekKey] = (perWeek[c.weekKey] || 0) + 1; });
    return Object.values(perWeek).filter((n) => n >= 7).length;
  })() * XP_WEEK_BONUS;

  const currentLevel = getLevelFromXP(totalXP);
  const levelProgress = getProgressToNextLevel(totalXP);
  const initials = profile?.naam ? profile.naam.slice(0, 2).toUpperCase() : '?';

  const completedWeeks = useMemo(() => {
    const perWeek: Record<string, number> = {};
    weekTaskCompletions.forEach((c) => { perWeek[c.weekKey] = (perWeek[c.weekKey] || 0) + 1; });
    return Object.values(perWeek).filter((n) => n >= 7).length;
  }, [weekTaskCompletions]);

  const currentStreak = useMemo(() => {
    const sortedDates = [...new Set(pulseCheckIns.map((c) => c.date))].sort();
    const todayStr = new Date().toISOString().split('T')[0];
    let streak = 0;
    for (let i = sortedDates.length - 1; i >= 0; i--) {
      const date = sortedDates[i];
      const diffFromToday = (new Date(todayStr).getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24);
      if (i === sortedDates.length - 1) {
        if (diffFromToday <= 1) streak = 1;
        else break;
      } else {
        const prev = sortedDates[i];
        const next = sortedDates[i + 1];
        const diff = (new Date(next).getTime() - new Date(prev).getTime()) / (1000 * 60 * 60 * 24);
        if (diff === 1) streak++;
        else break;
      }
    }
    return streak;
  }, [pulseCheckIns]);

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
            clearAll();
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
        {/* Avatar + Level header — tap to edit */}
        <Pressable
          onPress={() => router.push('/(tabs)/profiel/edit' as any)}
          style={styles.profileHeader}
        >
          {communityProfile?.avatar_url ? (
            <Image source={{ uri: communityProfile.avatar_url }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatar, { backgroundColor: colors.amber }]}>
              <Text style={styles.avatarText}>{initials}</Text>
            </View>
          )}
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
          <InlineIcon name="arrowRight" size={16} color={colors.text3} />
        </Pressable>

        {/* Score overview */}
        <Card style={{ marginTop: 16 }}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Score</Text>

          {/* XP progress bar */}
          <View style={[styles.xpBarTrack, { backgroundColor: colors.border }]}>
            <View
              style={[
                styles.xpBarFill,
                { width: `${levelProgress}%`, backgroundColor: colors.amber },
              ]}
            />
          </View>
          <Text style={[styles.xpBarLabel, { color: colors.text3 }]}>
            {totalXP - currentLevel.minXP} / {currentLevel.maxXP - currentLevel.minXP} XP naar Lv.{currentLevel.level + 1}
          </Text>

          {/* Stats row */}
          <View style={styles.statsRow}>
            <Pressable
              style={[styles.statBox, { backgroundColor: colors.surface2 }]}
              onPress={() => router.push('/(tabs)/profiel/taken' as any)}
            >
              <InlineIcon name="checkCircle" size={20} color={colors.amber} />
              <Text style={[styles.statValue, { color: colors.text }]}>{taskCompletions.length}</Text>
              <Text style={[styles.statLabel, { color: colors.text3 }]}>Taken</Text>
            </Pressable>
            <Pressable
              style={[styles.statBox, { backgroundColor: colors.surface2 }]}
              onPress={() => router.push('/(tabs)/profiel/streaks' as any)}
            >
              <InlineIcon name="flame" size={20} color="#F97316" />
              <Text style={[styles.statValue, { color: colors.text }]}>{currentStreak}</Text>
              <Text style={[styles.statLabel, { color: colors.text3 }]}>Streak</Text>
            </Pressable>
            <Pressable
              style={[styles.statBox, { backgroundColor: colors.amberDim }]}
              onPress={() => router.push('/(tabs)/profiel/weken' as any)}
            >
              <InlineIcon name="calendarDays" size={20} color={colors.amber} />
              <Text style={[styles.statValue, { color: colors.amber }]}>{completedWeeks}</Text>
              <Text style={[styles.statLabel, { color: colors.amber }]}>Weken af</Text>
            </Pressable>
          </View>
        </Card>

        {/* Badges */}
        <Card style={{ marginTop: 16 }}>
          <View style={styles.cardHeaderRow}>
            <Text style={[styles.sectionTitle, { color: colors.text, marginBottom: 0 }]}>Badges</Text>
            <Pressable
              onPress={() => router.push('/(tabs)/profiel/badges' as any)}
              style={[styles.manageButton, { backgroundColor: colors.amberDim }]}
            >
              <Text style={[styles.manageButtonText, { color: colors.amber }]}>
                {unlockedBadges.length > 0 ? `Alle ${unlockedBadges.length} →` : 'Bekijk alle →'}
              </Text>
            </Pressable>
          </View>
          {unlockedBadges.length > 0 ? (
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
                    <Pressable
                      key={badgeId}
                      onPress={() => router.push('/(tabs)/profiel/badges' as any)}
                      style={[styles.badgeShowcaseItem, { backgroundColor: rColor + '15', borderColor: rColor + '40' }]}
                    >
                      <BadgeIcon emoji={badge.emoji} rarity={badge.rarity as 'common' | 'rare' | 'epic' | 'legendary'} size="sm" />
                      <Text style={[styles.badgeShowcaseName, { color: colors.text }]} numberOfLines={1}>
                        {badge.name}
                      </Text>
                    </Pressable>
                  );
                })}
            </View>
          ) : (
            <Text style={[styles.emptyText, { color: colors.text3 }]}>
              Voltooi taken en check-ins om badges te verdienen.
            </Text>
          )}
        </Card>

        {/* Reflecties */}
        <Card style={{ marginTop: 16 }}>
          <View style={styles.cardHeaderRow}>
            <Text style={[styles.sectionTitle, { color: colors.text, marginBottom: 0 }]}>Mijn Reflecties</Text>
            <Pressable
              onPress={() => router.push('/(tabs)/profiel/reflecties' as any)}
              style={[styles.manageButton, { backgroundColor: colors.amberDim }]}
            >
              <Text style={[styles.manageButtonText, { color: colors.amber }]}>Bekijk alle →</Text>
            </Pressable>
          </View>
          <Text style={[styles.emptyText, { color: colors.text3 }]}>
            Je reflectie-notities uit leermodules vind je hier terug.
          </Text>
        </Card>

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
            <Text style={[styles.infoValue, { color: colors.text }]}>{profile?.email || user?.email || '—'}</Text>
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

        {/* Logout */}
        <Card style={{ marginTop: 16 }}>
          <Pressable
            onPress={() => {
              Alert.alert('Uitloggen', 'Weet je het zeker? Je voortgang blijft bewaard.', [
                { text: 'Annuleren', style: 'cancel' },
                {
                  text: 'Uitloggen',
                  onPress: async () => {
                    await signOut();
                    router.replace('/');
                  },
                },
              ]);
            }}
            style={styles.logoutRow}
          >
            <InlineIcon name="arrowLeft" size={18} color={colors.text2} />
            <Text style={[styles.logoutText, { color: colors.text2 }]}>Uitloggen</Text>
          </Pressable>
        </Card>

        {/* Legal */}
        <Card style={{ marginTop: 16 }}>
          <Pressable
            onPress={() => router.push('/(tabs)/profiel/legal')}
            style={styles.logoutRow}
          >
            <InlineIcon name="shield" size={18} color={colors.text2} />
            <Text style={[styles.logoutText, { color: colors.text2 }]}>Privacyverklaring & Voorwaarden</Text>
            <View style={{ flex: 1 }} />
            <InlineIcon name="arrowRight" size={16} color={colors.text3} />
          </Pressable>
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
            Lokale data wissen (profiel, voortgang, badges). Je account blijft bestaan.
          </Text>
          <View style={styles.dangerButtonContainer}>
            <Button title="Lokale data wissen" onPress={handleReset} variant="secondary" size="md" />
          </View>

          <View style={[styles.divider, { backgroundColor: colors.red + '30', marginVertical: 16 }]} />

          <Text style={[styles.dangerDescription, { color: colors.text2 }]}>
            Account permanent verwijderen. Alle data (lokaal + server) wordt gewist. Dit kan niet ongedaan worden.
          </Text>
          <View style={styles.dangerButtonContainer}>
            <Button
              title="Account verwijderen"
              onPress={() => {
                Alert.alert(
                  'Account verwijderen?',
                  'Al je gegevens worden permanent gewist: profiel, voortgang, badges, community berichten en je account.',
                  [
                    { text: 'Annuleren', style: 'cancel' },
                    {
                      text: 'Verwijderen',
                      style: 'destructive',
                      onPress: () => {
                        Alert.alert(
                          'Weet je het heel zeker?',
                          'Dit kan NIET ongedaan worden.',
                          [
                            { text: 'Annuleren', style: 'cancel' },
                            {
                              text: 'Ja, verwijder alles',
                              style: 'destructive',
                              onPress: async () => {
                                try {
                                  await deleteOwnAccount();
                                } catch {
                                  // Continue with local cleanup even if server fails
                                }
                                await signOut();
                                clearAll();
                                Alert.alert(
                                  'Account verwijderd',
                                  'Je account en alle gegevens zijn permanent verwijderd.',
                                );
                                router.replace('/');
                              },
                            },
                          ],
                        );
                      },
                    },
                  ],
                );
              }}
              variant="secondary"
              size="md"
            />
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

  profileHeader: { flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 8 },
  avatar: { width: 56, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#000', fontSize: 20, fontWeight: '800' },
  profileHeaderText: { flex: 1 },
  profileName: { fontSize: 22, fontWeight: '800', marginBottom: 4 },
  levelRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  levelBadge: { fontSize: 13, fontWeight: '700' },
  xpCount: { fontSize: 13, fontWeight: '600' },

  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 12 },

  // XP bar
  xpBarTrack: { height: 8, borderRadius: 4, overflow: 'hidden', marginBottom: 6 },
  xpBarFill: { height: '100%', borderRadius: 4 },
  xpBarLabel: { fontSize: 12, fontWeight: '500', marginBottom: 16 },

  // Stats row
  statsRow: { flexDirection: 'row', gap: 10 },
  statBox: {
    flex: 1,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    gap: 4,
  },
  statValue: { fontSize: 22, fontWeight: '800' },
  statLabel: { fontSize: 12, fontWeight: '600' },

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

  notifSubtitle: { fontSize: 13, marginBottom: 16, marginTop: -4, lineHeight: 18 },
  notifInfo: { marginTop: 12, borderWidth: 1, borderRadius: 10, padding: 12 },
  notifInfoText: { fontSize: 12, lineHeight: 17 },

  badgeShowcase: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 4 },
  badgeShowcaseItem: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  badgeShowcaseName: { fontSize: 13, fontWeight: '600' },

  logoutRow: { flexDirection: 'row' as const, alignItems: 'center' as const, gap: 10, paddingVertical: 4 },
  logoutText: { fontSize: 16, fontWeight: '600' as const },

  dangerDescription: { fontSize: 14, lineHeight: 20, marginBottom: 16, marginTop: -4 },
  dangerButtonContainer: { alignSelf: 'flex-start' as const },
  bottomSpacer: { height: 20 },
});
