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
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/lib/theme';
import { useStore } from '@/lib/store';
import type { Child } from '@/lib/types';
import Button from '@/components/Button';
import Card from '@/components/Card';

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
}

function createEmptyChild(): ChildForm {
  return {
    id: Date.now().toString() + Math.random().toString(36).substring(2, 6),
    name: '',
    age: '',
  };
}

export default function OnboardingChildren() {
  const { colors } = useTheme();
  const { profile, saveProfile } = useStore();
  const router = useRouter();

  const [children, setChildren] = useState<ChildForm[]>(() => {
    if (profile?.children && profile.children.length > 0) {
      return profile.children.map((c) => ({
        id: c.id,
        name: c.name,
        age: String(c.age),
      }));
    }
    return [createEmptyChild()];
  });

  function updateChild(id: string, field: 'name' | 'age', value: string) {
    setChildren((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
    );
  }

  function addChild() {
    setChildren((prev) => [...prev, createEmptyChild()]);
  }

  function removeChild(id: string) {
    setChildren((prev) => prev.filter((c) => c.id !== id));
  }

  function handleContinue() {
    if (!profile) return;

    const validChildren: Child[] = children
      .filter((c) => c.name.trim() && c.age.trim())
      .map((c) => {
        const age = parseInt(c.age, 10);
        return {
          id: c.id,
          name: c.name.trim(),
          age: isNaN(age) ? 0 : age,
          ageGroup: getAgeGroup(isNaN(age) ? 0 : age),
        };
      });

    if (validChildren.length === 0) return;

    saveProfile({
      ...profile,
      children: validChildren,
    });

    router.back();
  }

  function handleSkip() {
    router.back();
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
