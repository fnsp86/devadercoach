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
import { InlineIcon } from '@/lib/icons';
import { PRIVACY_POLICY, TERMS_OF_SERVICE, COMMUNITY_GUIDELINES, LEGAL_LAST_UPDATED } from '@/lib/legal';

type Section = 'privacy' | 'terms' | 'community';

const SECTIONS: { key: Section; title: string; icon: string }[] = [
  { key: 'privacy', title: 'Privacyverklaring', icon: 'shield' },
  { key: 'terms', title: 'Algemene Voorwaarden', icon: 'fileText' },
  { key: 'community', title: 'Communityrichtlijnen', icon: 'users' },
];

const SECTION_CONTENT: Record<Section, string> = {
  privacy: PRIVACY_POLICY,
  terms: TERMS_OF_SERVICE,
  community: COMMUNITY_GUIDELINES,
};

export default function LegalScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  if (activeSection) {
    return (
      <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
        <View style={[s.header, { borderBottomColor: colors.border }]}>
          <Pressable onPress={() => setActiveSection(null)} style={s.backBtn}>
            <InlineIcon name="arrowLeft" size={22} color={colors.text} />
          </Pressable>
          <Text style={[s.title, { color: colors.text }]}>
            {SECTIONS.find((sec) => sec.key === activeSection)?.title}
          </Text>
        </View>
        <ScrollView contentContainerStyle={s.contentScroll} showsVerticalScrollIndicator={false}>
          <Text style={[s.legalText, { color: colors.text2 }]}>
            {SECTION_CONTENT[activeSection]}
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[s.safe, { backgroundColor: colors.bg }]}>
      <View style={[s.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.back()} style={s.backBtn}>
          <InlineIcon name="arrowLeft" size={22} color={colors.text} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={[s.title, { color: colors.text }]}>Juridisch</Text>
          <Text style={[s.subtitle, { color: colors.text3 }]}>Laatst bijgewerkt: {LEGAL_LAST_UPDATED}</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={s.list} showsVerticalScrollIndicator={false}>
        {SECTIONS.map((sec) => (
          <Pressable
            key={sec.key}
            onPress={() => setActiveSection(sec.key)}
            style={[s.sectionCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
          >
            <View style={[s.sectionIcon, { backgroundColor: colors.amberDim }]}>
              <InlineIcon name={sec.icon as any} size={20} color={colors.amber} />
            </View>
            <Text style={[s.sectionTitle, { color: colors.text }]}>{sec.title}</Text>
            <InlineIcon name="arrowRight" size={18} color={colors.text3} />
          </Pressable>
        ))}

        <View style={s.contactSection}>
          <Text style={[s.contactTitle, { color: colors.text }]}>Vragen?</Text>
          <Text style={[s.contactText, { color: colors.text2 }]}>
            Neem contact op via privacy@devadercoach.nl voor vragen over je gegevens of info@devadercoach.nl voor overige vragen.
          </Text>
        </View>
      </ScrollView>
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

  list: { padding: 16, gap: 10 },
  sectionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  sectionIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: { flex: 1, fontSize: 16, fontWeight: '700' },

  contactSection: { marginTop: 20, paddingHorizontal: 4, gap: 6 },
  contactTitle: { fontSize: 16, fontWeight: '700' },
  contactText: { fontSize: 14, lineHeight: 20 },

  contentScroll: { padding: 20, paddingBottom: 40 },
  legalText: { fontSize: 14, lineHeight: 22 },
});
