import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useFocusEffect } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { InlineIcon } from '@/lib/icons';
import { SKILL_COLORS } from '@/lib/colors';
import { calculateDuelXP } from '@/lib/duel-arena';
import {
  getPendingDuels,
  getDuelHistory,
  declineDuel,
  cancelDuel,
  type ArenaDuel,
} from '@/lib/supabase';

type Tab = 'open' | 'history';

export default function DuelsScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const { user } = useAuth();

  const [pendingDuels, setPendingDuels] = useState<ArenaDuel[]>([]);
  const [history, setHistory] = useState<ArenaDuel[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<Tab>('open');

  // ── Helpers ──

  function getOpponent(duel: ArenaDuel) {
    if (duel.challenger_id === user?.id) return duel.opponent;
    return duel.challenger;
  }

  function getOpponentName(duel: ArenaDuel): string {
    const opponent = getOpponent(duel);
    return opponent?.naam || 'Tegenstander';
  }

  function getOpponentAvatar(duel: ArenaDuel): string | null {
    const opponent = getOpponent(duel);
    return opponent?.avatar_url ?? null;
  }

  function isMyTurn(duel: ArenaDuel): boolean {
    if (!user) return false;
    if (duel.opponent_id === user.id && duel.opponent_score === null) return true;
    if (duel.challenger_id === user.id && duel.challenger_score === null) return true;
    return false;
  }

  function getMyScore(duel: ArenaDuel): number | null {
    if (!user) return null;
    return duel.challenger_id === user.id ? duel.challenger_score : duel.opponent_score;
  }

  function getTheirScore(duel: ArenaDuel): number | null {
    if (!user) return null;
    return duel.challenger_id === user.id ? duel.opponent_score : duel.challenger_score;
  }

  function getResult(duel: ArenaDuel): 'won' | 'lost' | 'draw' {
    const my = getMyScore(duel);
    const their = getTheirScore(duel);
    if (my === null || their === null) return 'draw';
    if (my > their) return 'won';
    if (my < their) return 'lost';
    return 'draw';
  }

  // ── Data Loading ──

  const loadData = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const [pending, hist] = await Promise.all([
        getPendingDuels(user.id),
        getDuelHistory(user.id),
      ]);
      setPendingDuels(pending);
      // History = only completed/expired/declined duels
      setHistory(hist.filter((d) => d.status !== 'pending'));
    } catch (e) {
      console.warn('[duels] Error loading:', e);
    }
    setLoading(false);
  }, [user]);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [loadData]),
  );

  // ── Derived lists ──

  const waitingForMe = pendingDuels.filter((d) => isMyTurn(d));
  const waitingForThem = pendingDuels.filter((d) => !isMyTurn(d));
  const openCount = pendingDuels.length;

  // ── Actions ──

  function handlePlayDuel(duel: ArenaDuel) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const opponentName = getOpponentName(duel);
    router.push(
      `/(tabs)/training/duel?duelId=${duel.id}&skill=${encodeURIComponent(duel.skill)}&seed=${encodeURIComponent(duel.question_seed)}&opponentName=${encodeURIComponent(opponentName)}`,
    );
  }

  function handleDeclineDuel(duel: ArenaDuel) {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    Alert.alert(
      'Duel weigeren',
      `Weet je zeker dat je het duel met ${getOpponentName(duel)} wilt weigeren?`,
      [
        { text: 'Terug', style: 'cancel' },
        {
          text: 'Weigeren',
          style: 'destructive',
          onPress: async () => {
            try {
              await declineDuel(duel.id, user?.id);
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              loadData();
            } catch (e) {
              console.warn('[duels] Error declining:', e);
            }
          },
        },
      ],
    );
  }

  function handleCancelDuel(duel: ArenaDuel) {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    Alert.alert(
      'Duel annuleren',
      `Wil je het duel met ${getOpponentName(duel)} annuleren?`,
      [
        { text: 'Terug', style: 'cancel' },
        {
          text: 'Annuleren',
          style: 'destructive',
          onPress: async () => {
            try {
              await cancelDuel(duel.id);
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              loadData();
            } catch (e) {
              console.warn('[duels] Error cancelling:', e);
            }
          },
        },
      ],
    );
  }

  // ── Skill Badge ──

  function SkillBadge({ skill }: { skill: string }) {
    const skillColor = SKILL_COLORS[skill] || colors.amber;
    return (
      <View style={[s.skillBadge, { backgroundColor: skillColor + '20', borderColor: skillColor + '40' }]}>
        <Text style={[s.skillBadgeText, { color: skillColor }]}>{skill}</Text>
      </View>
    );
  }

  // ── Avatar ──

  function Avatar({ duel }: { duel: ArenaDuel }) {
    const avatar = getOpponentAvatar(duel);
    const name = getOpponentName(duel);
    if (avatar) {
      return <Image source={{ uri: avatar }} style={s.avatar} />;
    }
    return (
      <View style={[s.avatarPlaceholder, { backgroundColor: colors.surface2 }]}>
        <Text style={[s.avatarInitials, { color: colors.text3 }]}>
          {name.slice(0, 2).toUpperCase()}
        </Text>
      </View>
    );
  }

  // ── Result Indicator ──

  function ResultIndicator({ result }: { result: 'won' | 'lost' | 'draw' }) {
    if (result === 'won') {
      return (
        <View style={[s.resultBadge, { backgroundColor: colors.greenDim }]}>
          <InlineIcon name="check" size={14} color={colors.green} />
          <Text style={[s.resultText, { color: colors.green }]}>Gewonnen</Text>
        </View>
      );
    }
    if (result === 'lost') {
      return (
        <View style={[s.resultBadge, { backgroundColor: colors.redDim }]}>
          <InlineIcon name="x" size={14} color={colors.red} />
          <Text style={[s.resultText, { color: colors.red }]}>Verloren</Text>
        </View>
      );
    }
    return (
      <View style={[s.resultBadge, { backgroundColor: colors.yellowDim }]}>
        <Text style={[s.resultText, { color: colors.yellow }]}>=  Gelijk</Text>
      </View>
    );
  }

  // ── Render: My Turn Card ──

  function renderMyTurnCard(duel: ArenaDuel) {
    const skillColor = SKILL_COLORS[duel.skill] || colors.amber;
    return (
      <View
        key={duel.id}
        style={[s.card, { backgroundColor: colors.surface, borderColor: skillColor + '40' }]}
      >
        <View style={s.cardRow}>
          <Avatar duel={duel} />
          <View style={s.cardInfo}>
            <Text style={[s.cardName, { color: colors.text }]} numberOfLines={1}>
              {getOpponentName(duel)}
            </Text>
            <SkillBadge skill={duel.skill} />
          </View>
        </View>
        <View style={s.cardActions}>
          <Pressable
            onPress={() => handlePlayDuel(duel)}
            style={[s.playButton, { backgroundColor: skillColor }]}
          >
            <InlineIcon name="play" size={14} color="#fff" />
            <Text style={s.playButtonText}>Speel nu</Text>
          </Pressable>
          <Pressable
            onPress={() => handleDeclineDuel(duel)}
            style={[s.declineButton, { borderColor: colors.red + '50' }]}
          >
            <Text style={[s.declineButtonText, { color: colors.red }]}>Weiger</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  // ── Render: Waiting Card ──

  function renderWaitingCard(duel: ArenaDuel) {
    const myScore = getMyScore(duel);
    return (
      <View
        key={duel.id}
        style={[s.card, { backgroundColor: colors.surface, borderColor: colors.border }]}
      >
        <View style={s.cardRow}>
          <Avatar duel={duel} />
          <View style={s.cardInfo}>
            <Text style={[s.cardName, { color: colors.text }]} numberOfLines={1}>
              {getOpponentName(duel)}
            </Text>
            <SkillBadge skill={duel.skill} />
          </View>
        </View>
        <View style={s.waitingRow}>
          {myScore !== null && (
            <Text style={[s.myScoreText, { color: colors.text2 }]}>
              Je score: {myScore}/10
            </Text>
          )}
          <View style={s.waitingBottom}>
            <View style={s.waitingIndicator}>
              <ActivityIndicator size="small" color={colors.text3} />
              <Text style={[s.waitingText, { color: colors.text3 }]}>
                Wacht op {getOpponentName(duel)}
              </Text>
            </View>
            <Pressable
              onPress={() => handleCancelDuel(duel)}
              style={[s.cancelButton, { borderColor: colors.red + '50' }]}
            >
              <Text style={[s.cancelButtonText, { color: colors.red }]}>Annuleer</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

  // ── Render: History Card ──

  function renderHistoryItem({ item: duel }: { item: ArenaDuel }) {
    const result = getResult(duel);
    const myScore = getMyScore(duel);
    const theirScore = getTheirScore(duel);
    const xp = myScore !== null && theirScore !== null ? calculateDuelXP(myScore, theirScore) : 0;
    const skillColor = SKILL_COLORS[duel.skill] || colors.amber;
    const dateStr = duel.completed_at
      ? new Date(duel.completed_at).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' })
      : new Date(duel.created_at).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' });

    const statusLabel =
      duel.status === 'declined' ? 'Geweigerd' :
      duel.status === 'expired' ? 'Verlopen' :
      null;

    return (
      <View style={[s.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <View style={s.cardRow}>
          <Avatar duel={duel} />
          <View style={s.cardInfo}>
            <Text style={[s.cardName, { color: colors.text }]} numberOfLines={1}>
              {getOpponentName(duel)}
            </Text>
            <View style={s.historyMeta}>
              <SkillBadge skill={duel.skill} />
              <Text style={[s.dateText, { color: colors.text3 }]}>{dateStr}</Text>
            </View>
          </View>
        </View>

        {duel.status === 'completed' ? (
          <View style={s.historyBottom}>
            <View style={s.scoresRow}>
              <Text style={[s.scoreLabel, { color: colors.text2 }]}>Jij</Text>
              <Text style={[s.scoreValue, { color: result === 'won' ? colors.green : result === 'lost' ? colors.red : colors.yellow }]}>
                {myScore}
              </Text>
              <Text style={[s.scoreSeparator, { color: colors.text3 }]}>-</Text>
              <Text style={[s.scoreValue, { color: colors.text2 }]}>{theirScore}</Text>
              <Text style={[s.scoreLabel, { color: colors.text2 }]}>{getOpponentName(duel).split(' ')[0]}</Text>
            </View>
            <View style={s.historyRight}>
              <ResultIndicator result={result} />
              {xp > 0 && (
                <Text style={[s.xpText, { color: colors.amber }]}>+{xp} XP</Text>
              )}
            </View>
          </View>
        ) : statusLabel ? (
          <View style={s.historyBottom}>
            <Text style={[s.statusLabel, { color: colors.text3 }]}>{statusLabel}</Text>
          </View>
        ) : null}
      </View>
    );
  }

  // ── Open Tab Content ──

  function renderOpenTab() {
    if (pendingDuels.length === 0) {
      return (
        <View style={s.emptyContainer}>
          <InlineIcon name="swords" size={40} color={colors.text3} />
          <Text style={[s.emptyTitle, { color: colors.text }]}>Geen open duels</Text>
          <Text style={[s.emptyText, { color: colors.text3 }]}>
            Ga naar een vaderprofiel in de community en daag hem uit voor een duel!
          </Text>
          <Pressable
            onPress={() => router.push('/(tabs)/training/pick-opponent')}
            style={[s.challengeBtn, { backgroundColor: colors.amber }]}
          >
            <InlineIcon name="users" size={16} color="#000" />
            <Text style={s.challengeBtnText}>Zoek een tegenstander</Text>
          </Pressable>
        </View>
      );
    }

    return (
      <ScrollView
        style={s.openScroll}
        contentContainerStyle={s.openScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Section: Jouw beurt */}
        {waitingForMe.length > 0 && (
          <View style={s.section}>
            <View style={s.sectionHeader}>
              <InlineIcon name="zap" size={16} color={colors.amber} />
              <Text style={[s.sectionTitle, { color: colors.text }]}>
                Jouw beurt ({waitingForMe.length})
              </Text>
            </View>
            {waitingForMe.map(renderMyTurnCard)}
          </View>
        )}

        {/* Section: Wacht op tegenstander */}
        {waitingForThem.length > 0 && (
          <View style={s.section}>
            <View style={s.sectionHeader}>
              <InlineIcon name="clock" size={16} color={colors.text3} />
              <Text style={[s.sectionTitle, { color: colors.text }]}>
                Wacht op tegenstander ({waitingForThem.length})
              </Text>
            </View>
            {waitingForThem.map(renderWaitingCard)}
          </View>
        )}
      </ScrollView>
    );
  }

  // ── History Tab Content ──

  function renderHistoryTab() {
    if (history.length === 0) {
      return (
        <View style={s.emptyContainer}>
          <InlineIcon name="bookOpen" size={40} color={colors.text3} />
          <Text style={[s.emptyTitle, { color: colors.text }]}>Geen duel geschiedenis</Text>
          <Text style={[s.emptyText, { color: colors.text3 }]}>
            Voltooide duels verschijnen hier met je scores en resultaten.
          </Text>
        </View>
      );
    }

    return (
      <FlatList
        data={history}
        renderItem={renderHistoryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={s.listContent}
        showsVerticalScrollIndicator={false}
      />
    );
  }

  // ── Main Render ──

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={[s.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.navigate('/(tabs)/leren')} style={s.headerBtn}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <Text style={[s.headerTitle, { color: colors.text }]}>Skill Duels</Text>
        <Pressable
          onPress={() => router.push('/(tabs)/training/pick-opponent')}
          style={s.headerBtn}
        >
          <InlineIcon name="userPlus" size={20} color={colors.amber} />
        </Pressable>
      </View>

      {/* Tab Toggle */}
      <View style={[s.tabBar, { backgroundColor: colors.surface }]}>
        <Pressable
          onPress={() => setTab('open')}
          style={[s.tab, tab === 'open' && { backgroundColor: colors.amber }]}
        >
          <Text style={[s.tabText, { color: tab === 'open' ? '#000' : colors.text2 }]}>
            Open{openCount > 0 ? ` (${openCount})` : ''}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setTab('history')}
          style={[s.tab, tab === 'history' && { backgroundColor: colors.amber }]}
        >
          <Text style={[s.tabText, { color: tab === 'history' ? '#000' : colors.text2 }]}>
            Geschiedenis
          </Text>
        </Pressable>
      </View>

      {/* Content */}
      {loading ? (
        <View style={s.loadingContainer}>
          <ActivityIndicator size="large" color={colors.amber} />
        </View>
      ) : tab === 'open' ? (
        renderOpenTab()
      ) : (
        renderHistoryTab()
      )}
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1 },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  headerBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { flex: 1, fontSize: 20, fontWeight: '800', textAlign: 'center' },

  // Tabs
  tabBar: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 12,
    padding: 3,
    gap: 3,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  tabText: { fontSize: 14, fontWeight: '700' },

  // Loading
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  // Open tab
  openScroll: { flex: 1 },
  openScrollContent: { padding: 20, paddingBottom: 40 },

  // Sections
  section: { marginBottom: 24 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 16, fontWeight: '700' },

  // Cards
  card: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardInfo: {
    flex: 1,
    gap: 6,
  },
  cardName: {
    fontSize: 15,
    fontWeight: '700',
  },

  // Avatar
  avatar: { width: 40, height: 40, borderRadius: 20 },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: { fontSize: 14, fontWeight: '700' },

  // Skill badge
  skillBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
  },
  skillBadgeText: { fontSize: 12, fontWeight: '700' },

  // Card actions (my turn)
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 12,
  },
  playButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    borderRadius: 10,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800',
  },
  declineButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  declineButtonText: {
    fontSize: 13,
    fontWeight: '700',
  },

  // Waiting card
  waitingRow: {
    marginTop: 10,
    gap: 6,
  },
  myScoreText: {
    fontSize: 14,
    fontWeight: '700',
  },
  waitingBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  waitingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  waitingText: {
    fontSize: 13,
    fontWeight: '600',
  },
  cancelButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  cancelButtonText: {
    fontSize: 12,
    fontWeight: '700',
  },

  // History card
  historyMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '500',
  },
  historyBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  scoresRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  scoreLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  scoreValue: {
    fontSize: 18,
    fontWeight: '800',
  },
  scoreSeparator: {
    fontSize: 14,
    fontWeight: '600',
  },
  historyRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  resultBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  resultText: {
    fontSize: 12,
    fontWeight: '700',
  },
  xpText: {
    fontSize: 13,
    fontWeight: '800',
  },
  statusLabel: {
    fontSize: 13,
    fontWeight: '600',
    fontStyle: 'italic',
  },

  // Empty states
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingHorizontal: 40,
    gap: 12,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 20,
  },
  challengeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 12,
  },
  challengeBtnText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '700',
  },

  // FlatList
  listContent: {
    padding: 20,
    paddingBottom: 40,
  },
});
