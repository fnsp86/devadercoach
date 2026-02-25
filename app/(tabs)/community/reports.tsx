import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { getReports, updateReportStatus, type Report } from '@/lib/supabase';
import { InlineIcon } from '@/lib/icons';
import Button from '@/components/Button';

const TYPE_LABELS: Record<string, string> = {
  story: 'Verhaal',
  comment: 'Reactie',
  message: 'Bericht',
  profile: 'Profiel',
};

function timeAgo(dateStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 60) return 'zojuist';
  if (diff < 3600) return `${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} uur`;
  return `${Math.floor(diff / 86400)} dag${Math.floor(diff / 86400) > 1 ? 'en' : ''}`;
}

export default function ReportsScreen() {
  const { colors } = useTheme();
  const { isAdmin } = useAuth();
  const router = useRouter();
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAdmin) {
      router.back();
      return;
    }
    loadReports();
  }, [isAdmin]);

  async function loadReports() {
    setLoading(true);
    try {
      const data = await getReports('open');
      setReports(data);
    } catch {}
    setLoading(false);
  }

  async function handleResolve(reportId: string) {
    try {
      await updateReportStatus(reportId, 'resolved');
      setReports((prev) => prev.filter((r) => r.id !== reportId));
    } catch {
      Alert.alert('Fout', 'Kon rapportage niet bijwerken.');
    }
  }

  async function handleDismiss(reportId: string) {
    try {
      await updateReportStatus(reportId, 'dismissed');
      setReports((prev) => prev.filter((r) => r.id !== reportId));
    } catch {
      Alert.alert('Fout', 'Kon rapportage niet bijwerken.');
    }
  }

  function handleView(report: Report) {
    if (report.content_type === 'story') {
      router.push(`/(tabs)/community/story/${report.content_id}`);
    } else if (report.content_type === 'profile') {
      router.push(`/(tabs)/community/profile/${report.content_id}`);
    }
  }

  function renderReport({ item }: { item: Report }) {
    return (
      <View style={[s.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <View style={s.cardHeader}>
          <View style={[s.typeBadge, { backgroundColor: colors.redDim }]}>
            <Text style={[s.typeBadgeText, { color: colors.red }]}>
              {TYPE_LABELS[item.content_type] ?? item.content_type}
            </Text>
          </View>
          <Text style={[s.time, { color: colors.text3 }]}>{timeAgo(item.created_at)}</Text>
        </View>

        <Text style={[s.reason, { color: colors.text }]}>{item.reason}</Text>

        <View style={s.actions}>
          {(item.content_type === 'story' || item.content_type === 'profile') && (
            <Pressable
              onPress={() => handleView(item)}
              style={[s.actionBtn, { backgroundColor: colors.amberDim, borderColor: colors.amber + '40' }]}
            >
              <InlineIcon name="eye" size={14} color={colors.amber} />
              <Text style={[s.actionText, { color: colors.amber }]}>Bekijk</Text>
            </Pressable>
          )}
          <Pressable
            onPress={() => handleResolve(item.id)}
            style={[s.actionBtn, { backgroundColor: colors.greenDim ?? colors.surface2, borderColor: (colors.green ?? '#22c55e') + '40' }]}
          >
            <InlineIcon name="check" size={14} color={colors.green ?? '#22c55e'} />
            <Text style={[s.actionText, { color: colors.green ?? '#22c55e' }]}>Afgehandeld</Text>
          </Pressable>
          <Pressable
            onPress={() => handleDismiss(item.id)}
            style={[s.actionBtn, { backgroundColor: colors.surface2, borderColor: colors.border }]}
          >
            <InlineIcon name="x" size={14} color={colors.text3} />
            <Text style={[s.actionText, { color: colors.text3 }]}>Negeren</Text>
          </Pressable>
        </View>
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
          <Text style={[s.title, { color: colors.text }]}>Rapportages</Text>
          <Text style={[s.subtitle, { color: colors.text3 }]}>
            {reports.length} {reports.length === 1 ? 'open melding' : 'open meldingen'}
          </Text>
        </View>
      </View>

      {loading ? (
        <View style={s.center}>
          <ActivityIndicator size="large" color={colors.amber} />
        </View>
      ) : reports.length === 0 ? (
        <View style={s.center}>
          <InlineIcon name="shield" size={48} color={colors.text3} />
          <Text style={[s.emptyTitle, { color: colors.text }]}>Geen open meldingen</Text>
          <Text style={[s.emptyText, { color: colors.text3 }]}>
            Er zijn momenteel geen rapportages die aandacht nodig hebben.
          </Text>
        </View>
      ) : (
        <FlatList
          data={reports}
          keyExtractor={(item) => item.id}
          renderItem={renderReport}
          contentContainerStyle={s.list}
          showsVerticalScrollIndicator={false}
        />
      )}
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

  list: { padding: 16, gap: 12, paddingBottom: 40 },

  card: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  typeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  typeBadgeText: { fontSize: 11, fontWeight: '700' },
  time: { fontSize: 12, fontWeight: '500' },
  reason: { fontSize: 15, lineHeight: 22, marginBottom: 14 },

  actions: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  actionText: { fontSize: 12, fontWeight: '600' },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    padding: 40,
  },
  emptyTitle: { fontSize: 18, fontWeight: '700' },
  emptyText: { fontSize: 15, fontWeight: '500', textAlign: 'center', lineHeight: 22 },
});
