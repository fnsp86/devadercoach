import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { useAuth } from '@/lib/auth';
import type { Child, ChildRelatie, ChildAandachtspunt, AppDoel } from '@/lib/types';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { InlineIcon } from '@/lib/icons';

const AANDACHTSPUNT_OPTIONS: { value: ChildAandachtspunt; label: string }[] = [
  { value: 'adhd', label: 'ADHD / druk gedrag' },
  { value: 'gedragsproblemen', label: 'Gedragsproblemen' },
  { value: 'hooggevoelig', label: 'Hooggevoelig' },
  { value: 'prikkelverwerking', label: 'Prikkelgevoelig' },
];

function getAgeGroup(age: number): string {
  if (age <= 2) return '0-2';
  if (age <= 5) return '3-5';
  if (age <= 9) return '6-9';
  if (age <= 12) return '10-12';
  return '13-16';
}

interface ChildForm {
  id: string;
  name: string;
  age: string;
  relatie: ChildRelatie;
  aandachtspunten: ChildAandachtspunt[];
}

function createEmptyChild(): ChildForm {
  return {
    id: Date.now().toString() + Math.random().toString(36).substring(2, 6),
    name: '',
    age: '',
    relatie: 'eigen_kind',
    aandachtspunten: [],
  };
}

export default function OnboardingChildren() {
  const { colors } = useTheme();
  const { profile, saveProfile } = useStore();
  const { user } = useAuth();
  const router = useRouter();
  const { setup } = useLocalSearchParams<{ setup?: string }>();
  const isSetup = setup === 'true';

  const [children, setChildren] = useState<ChildForm[]>(() => {
    if (profile?.children && profile.children.length > 0) {
      return profile.children.map((c) => ({
        id: c.id,
        name: c.name,
        age: String(c.age),
        relatie: c.relatie ?? 'eigen_kind',
        aandachtspunten: c.aandachtspunten ?? [],
      }));
    }
    return [createEmptyChild()];
  });

  function updateChild(id: string, field: 'name' | 'age', value: string) {
    setChildren((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
    );
  }

  function toggleRelatie(id: string) {
    setChildren((prev) => prev.map((c) =>
      c.id === id ? { ...c, relatie: c.relatie === 'eigen_kind' ? 'bonuskind' : 'eigen_kind' } : c
    ));
  }

  function toggleAandachtspunt(id: string, ap: ChildAandachtspunt) {
    setChildren((prev) => prev.map((c) => {
      if (c.id !== id) return c;
      const has = c.aandachtspunten.includes(ap);
      return { ...c, aandachtspunten: has ? c.aandachtspunten.filter((a) => a !== ap) : [...c.aandachtspunten, ap] };
    }));
  }

  function addChild() {
    setChildren((prev) => [...prev, createEmptyChild()]);
  }

  function removeChild(id: string) {
    setChildren((prev) => prev.filter((c) => c.id !== id));
  }

  function handleContinue() {
    const validChildren: Child[] = children
      .filter((c) => c.name.trim() && c.age.trim())
      .map((c) => {
        const age = parseInt(c.age, 10);
        return {
          id: c.id,
          name: c.name.trim(),
          age: isNaN(age) ? 0 : age,
          ageGroup: getAgeGroup(isNaN(age) ? 0 : age),
          relatie: c.relatie,
          aandachtspunten: c.aandachtspunten.length > 0 ? c.aandachtspunten : undefined,
        };
      });

    if (validChildren.length === 0) return;

    // Maak een nieuw profiel aan als het ontbreekt (bijv. na lokale data wissen)
    const base = profile ?? {
      naam: user?.email?.split('@')[0] || '',
      email: user?.email || '',
      ageGroup: getAgeGroup(validChildren[0].age) as any,
      doel: 'Gewoon een betere vader zijn' as AppDoel,
      startDate: new Date().toISOString().split('T')[0],
    };

    saveProfile({
      ...base,
      children: validChildren,
    });

    // Check of er themed content beschikbaar is
    const allAps = new Set(validChildren.flatMap((c) => c.aandachtspunten ?? []));
    const hasBonuskind = validChildren.some((c) => c.relatie === 'bonuskind');

    if (allAps.size > 0 || hasBonuskind) {
      const extras: string[] = [];
      if (allAps.has('adhd')) extras.push('ADHD bij Zelfregulatie');
      if (allAps.has('gedragsproblemen')) extras.push('Gedragsproblemen bij Emotiecoaching');
      if (allAps.has('hooggevoelig')) extras.push('Hooggevoeligheid bij Aanwezigheid');
      if (allAps.has('prikkelverwerking')) extras.push('Prikkelverwerking bij Grenzen');
      if (hasBonuskind) extras.push('Bonusvaderschap bij Verbinding');
      Alert.alert(
        'Extra modules toegevoegd!',
        `We hebben leermodules en oefeningen op maat toegevoegd:\n\n${extras.map((e) => '• ' + e).join('\n')}\n\nKijk bij Leren om ze te ontdekken.`,
        [{ text: 'Top!', onPress: () => isSetup ? router.replace('/onboarding/doelen') : router.back() }],
      );
      return;
    }

    if (isSetup) {
      router.replace('/onboarding/doelen');
    } else {
      router.back();
    }
  }

  function handleSkip() {
    if (isSetup) {
      // Create minimal profile if needed so doelen page can work
      if (!profile) {
        saveProfile({
          naam: user?.email?.split('@')[0] || '',
          email: user?.email || '',
          ageGroup: '6-9' as any,
          doel: 'Gewoon een betere vader zijn' as AppDoel,
          startDate: new Date().toISOString().split('T')[0],
          children: [],
        });
      }
      router.replace('/onboarding/doelen');
    } else {
      router.back();
    }
  }

  const hasValidChild = children.some(
    (c) => c.name.trim() && c.age.trim() && !isNaN(parseInt(c.age, 10)),
  );

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={[styles.backText, { color: colors.amber }]}>{'← Terug'}</Text>
        </Pressable>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Kinderen</Text>
        <View style={styles.backButton} />
      </View>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={[styles.title, { color: colors.text }]}>
          Over je kinderen
        </Text>
        <Text style={[styles.subtitle, { color: colors.text2 }]}>
          Voeg je kinderen toe zodat we de oefeningen kunnen afstemmen op hun
          leeftijd.
        </Text>

        {children.map((child, index) => (
          <Card key={child.id} style={{ marginBottom: 16 }}>
            <View style={styles.cardHeader}>
              <Text style={[styles.cardTitle, { color: colors.text }]}>
                Kind {index + 1}
              </Text>
              {children.length > 1 && (
                <Pressable
                  onPress={() => removeChild(child.id)}
                  style={[
                    styles.removeButton,
                    { backgroundColor: colors.redDim },
                  ]}
                >
                  <Text style={[styles.removeText, { color: colors.red }]}>
                    ✕
                  </Text>
                </Pressable>
              )}
            </View>

            <Text style={[styles.inputLabel, { color: colors.text2 }]}>
              Naam
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.surface2,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              value={child.name}
              onChangeText={(val) => updateChild(child.id, 'name', val)}
              placeholder="Naam van je kind"
              placeholderTextColor={colors.text3}
            />

            <Text style={[styles.inputLabel, { color: colors.text2 }]}>
              Leeftijd
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.surface2,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              value={child.age}
              onChangeText={(val) => updateChild(child.id, 'age', val)}
              placeholder="Leeftijd in jaren"
              placeholderTextColor={colors.text3}
              keyboardType="numeric"
              maxLength={2}
              returnKeyType="done"
              onSubmitEditing={() => Keyboard.dismiss()}
            />

            {child.age.trim() && !isNaN(parseInt(child.age, 10)) && (
              <View
                style={[
                  styles.ageGroupTag,
                  { backgroundColor: colors.amberDim },
                ]}
              >
                <Text style={[styles.ageGroupText, { color: colors.amber }]}>
                  Leeftijdsgroep: {getAgeGroup(parseInt(child.age, 10))} jaar
                </Text>
              </View>
            )}

            {/* Relatie toggle */}
            <Text style={[styles.inputLabel, { color: colors.text3, fontSize: 13, marginTop: 14 }]}>Relatie (optioneel)</Text>
            <View style={styles.relatieRow}>
              {(['eigen_kind', 'bonuskind'] as const).map((rel) => (
                <Pressable
                  key={rel}
                  onPress={() => toggleRelatie(child.id)}
                  style={[styles.relatiePill, {
                    backgroundColor: child.relatie === rel ? colors.amberDim : colors.surface2,
                    borderColor: child.relatie === rel ? colors.amber + '40' : colors.border,
                  }]}
                >
                  <InlineIcon name={rel === 'eigen_kind' ? 'heart' : 'users'} size={14} color={child.relatie === rel ? colors.amber : colors.text3} />
                  <Text style={[styles.relatiePillText, { color: child.relatie === rel ? colors.amber : colors.text3 }]}>
                    {rel === 'eigen_kind' ? 'Mijn kind' : 'Bonuskind'}
                  </Text>
                </Pressable>
              ))}
            </View>

            {/* Aandachtspunten */}
            <Text style={[styles.inputLabel, { color: colors.text3, fontSize: 13, marginTop: 14 }]}>Extra aandachtspunten (optioneel)</Text>
            <View style={styles.aandachtspuntenGrid}>
              {AANDACHTSPUNT_OPTIONS.map((opt) => {
                const selected = child.aandachtspunten.includes(opt.value);
                return (
                  <Pressable
                    key={opt.value}
                    onPress={() => toggleAandachtspunt(child.id, opt.value)}
                    style={[styles.apPill, {
                      backgroundColor: selected ? colors.amberDim : colors.surface2,
                      borderColor: selected ? colors.amber + '40' : colors.border,
                    }]}
                  >
                    <Text style={[styles.apPillText, { color: selected ? colors.amber : colors.text3 }]}>
                      {opt.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* Inline hints per geselecteerde optie */}
            {child.relatie === 'bonuskind' && (
              <View style={[styles.themeHint, { backgroundColor: colors.amberDim }]}>
                <Text style={[styles.themeHintText, { color: colors.amber }]}>+ Extra module bij Verbinding</Text>
              </View>
            )}
            {child.aandachtspunten.length > 0 && (
              <View style={[styles.themeHint, { backgroundColor: colors.amberDim }]}>
                {child.aandachtspunten.map((ap) => {
                  const skillMap: Record<string, string> = {
                    adhd: 'Zelfregulatie',
                    gedragsproblemen: 'Emotiecoaching',
                    hooggevoelig: 'Aanwezigheid',
                    prikkelverwerking: 'Grenzen',
                  };
                  return (
                    <Text key={ap} style={[styles.themeHintText, { color: colors.amber }]}>
                      + Extra module bij {skillMap[ap]}
                    </Text>
                  );
                })}
              </View>
            )}
          </Card>
        ))}

        <Pressable
          onPress={addChild}
          style={[
            styles.addButton,
            {
              borderColor: colors.border,
              backgroundColor: colors.surface,
            },
          ]}
        >
          <Text style={[styles.addButtonText, { color: colors.amber }]}>
            + Nog een kind toevoegen
          </Text>
        </Pressable>

        <View style={styles.bottomButtons}>
          <Button
            title="Opslaan"
            onPress={handleContinue}
            disabled={!hasValidChild}
            size="lg"
          />
          <View style={styles.skipSpacer} />
          <Button
            title="Overslaan"
            onPress={handleSkip}
            variant="ghost"
            size="md"
          />
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  backButton: { width: 80, paddingVertical: 4 },
  backText: { fontSize: 16, fontWeight: '600' },
  headerTitle: { fontSize: 17, fontWeight: '700' },
  scroll: { flex: 1 },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 24,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
  },
  removeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeText: {
    fontSize: 16,
    fontWeight: '700',
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 12,
  },
  ageGroupTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 4,
  },
  ageGroupText: {
    fontSize: 13,
    fontWeight: '600',
  },
  relatieRow: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  relatiePill: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, paddingVertical: 10, borderRadius: 10, borderWidth: 1 },
  relatiePillText: { fontSize: 13, fontWeight: '600' },
  aandachtspuntenGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 4 },
  apPill: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10, borderWidth: 1 },
  apPillText: { fontSize: 12, fontWeight: '600' },
  themeHint: { marginTop: 8, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8 },
  themeHintText: { fontSize: 12, fontWeight: '600', lineHeight: 18 },
  addButton: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 32,
  },
  addButtonText: {
    fontSize: 15,
    fontWeight: '600',
  },
  bottomButtons: {
    gap: 8,
  },
  skipSpacer: {
    height: 4,
  },
});
