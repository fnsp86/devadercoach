import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@/lib/theme';
import { getLearningModulesForSkill } from '@/lib/learning-modules';
import type { LearningModule, Skill, ThemeTag } from '@/lib/types';
import { useStore } from '@/lib/store';
import { resolveActiveThemes } from '@/lib/theme-resolver';
import ProgressBar from '@/components/ProgressBar';
import { SKILL_COLORS } from '@/lib/colors';
import { AppIcon, InlineIcon } from '@/lib/icons';

const DIFFICULTY_CONFIG: Record<string, { color: string; label: string }> = {
  basis: { color: '#34D399', label: 'Basis' },
  gevorderd: { color: '#FBBF24', label: 'Gevorderd' },
  expert: { color: '#A78BFA', label: 'Expert' },
};

export default function SkillLearningModules() {
  const { colors } = useTheme();
  const router = useRouter();
  const { skill: rawSkill } = useLocalSearchParams<{ skill: string }>();
  const skill = decodeURIComponent(rawSkill || '') as Skill;
  const skillColor = SKILL_COLORS[skill] || colors.amber;

  const { profile } = useStore();
  const activeThemes = useMemo(() => {
    if (!profile) return [] as ThemeTag[];
    return resolveActiveThemes(profile);
  }, [profile]);

  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [modules, setModules] = useState<LearningModule[]>([]);

  const storageKey = `vc-completed-modules-${skill}`;

  // Load modules on mount
  useEffect(() => {
    const mods = getLearningModulesForSkill(skill, activeThemes);
    setModules(mods);
  }, [skill, activeThemes]);

  // Reload completion state whenever this screen comes into focus
  // (e.g. after returning from the module reader)
  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const stored = await AsyncStorage.getItem(storageKey);
          if (stored) {
            setCompletedModules(JSON.parse(stored));
          } else {
            setCompletedModules([]);
          }
        } catch {
          // Ignore read errors
        }
      })();
    }, [storageKey]),
  );

  const isModuleCompleted = useCallback(
    (moduleId: string) => completedModules.includes(moduleId),
    [completedModules],
  );

  const isModuleUnlocked = useCallback(
    (index: number) => {
      if (index === 0) return true;
      // Previous module must be completed
      const prevModule = modules[index - 1];
      return prevModule ? completedModules.includes(prevModule.id) : false;
    },
    [modules, completedModules],
  );

  async function handleModulePress(mod: LearningModule, index: number) {
    if (!isModuleUnlocked(index)) {
      Alert.alert(
        'Module vergrendeld',
        'Voltooi eerst de vorige module om deze te ontgrendelen.',
      );
      return;
    }

    // Navigate to the module reader (works for both completed and uncompleted)
    router.push(
      `/(tabs)/leren/module?skill=${encodeURIComponent(skill)}&moduleId=${mod.id}`,
    );
  }

  const completedCount = completedModules.length;
  const totalCount = modules.length;
  const progress = totalCount > 0 ? completedCount / totalCount : 0;

  if (!skill || modules.length === 0) {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Back link */}
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <InlineIcon name="arrowLeft" size={16} color={colors.amber} />
              <Text style={[styles.backText, { color: colors.amber }]}>
                Leren
              </Text>
            </View>
          </Pressable>

          <View style={styles.emptyContainer}>
            <AppIcon name="construction" size="lg" variant="featured" color={colors.text3} bgColor={colors.surface2} />
            <Text style={[styles.emptyTitle, { color: colors.text }]}>
              Binnenkort beschikbaar
            </Text>
            <Text style={[styles.emptyText, { color: colors.text2 }]}>
              We werken hard aan de leermodules voor {skill || 'deze vaardigheid'}.
              Kom binnenkort terug!
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Back link */}
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <InlineIcon name="arrowLeft" size={16} color={colors.amber} />
            <Text style={[styles.backText, { color: colors.amber }]}>
              Leren
            </Text>
          </View>
        </Pressable>

        {/* Header */}
        <Text style={[styles.title, { color: colors.text }]}>
          {skill} - Leermodules
        </Text>
        <Text style={[styles.subtitle, { color: colors.text2 }]}>
          {totalCount} {totalCount === 1 ? 'module' : 'modules'} beschikbaar
        </Text>

        {/* Progress bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressLabelRow}>
            <Text style={[styles.progressLabel, { color: colors.text2 }]}>
              Voortgang
            </Text>
            <Text style={[styles.progressCount, { color: skillColor }]}>
              {completedCount}/{totalCount}
            </Text>
          </View>
          <ProgressBar progress={progress} color={skillColor} height={8} />
        </View>

        {/* Module list */}
        {modules.map((mod, index) => {
          const completed = isModuleCompleted(mod.id);
          const unlocked = isModuleUnlocked(index);
          const diffConfig = DIFFICULTY_CONFIG[mod.difficulty] || DIFFICULTY_CONFIG.basis;

          return (
            <Pressable
              key={mod.id}
              onPress={() => handleModulePress(mod, index)}
              style={[
                styles.moduleCard,
                {
                  backgroundColor: colors.surface,
                  borderColor: completed
                    ? skillColor
                    : unlocked
                      ? colors.border
                      : colors.border,
                  opacity: unlocked ? 1 : 0.6,
                },
              ]}
            >
              {/* Top row: badges */}
              <View style={styles.moduleBadgeRow}>
                {/* Difficulty badge */}
                <View
                  style={[
                    styles.badge,
                    { backgroundColor: diffConfig.color + '20' },
                  ]}
                >
                  <Text style={[styles.badgeText, { color: diffConfig.color }]}>
                    {diffConfig.label}
                  </Text>
                </View>

                {/* Duration badge */}
                <View
                  style={[
                    styles.badge,
                    { backgroundColor: colors.surface2 },
                  ]}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <InlineIcon name="clock" size={12} color={colors.text2} />
                    <Text style={[styles.badgeText, { color: colors.text2 }]}>
                      {mod.duration}
                    </Text>
                  </View>
                </View>

                {/* Completed badge */}
                {completed && (
                  <View
                    style={[
                      styles.badge,
                      { backgroundColor: '#34D399' + '20' },
                    ]}
                  >
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                      <InlineIcon name="check" size={12} color="#34D399" />
                      <Text style={[styles.badgeText, { color: '#34D399' }]}>
                        Voltooid
                      </Text>
                    </View>
                  </View>
                )}

                {/* Locked indicator */}
                {!unlocked && !completed && (
                  <View
                    style={[
                      styles.badge,
                      { backgroundColor: colors.surface2 },
                    ]}
                  >
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                      <InlineIcon name="lock" size={12} color={colors.text3} />
                      <Text style={[styles.badgeText, { color: colors.text3 }]}>
                        Vergrendeld
                      </Text>
                    </View>
                  </View>
                )}
              </View>

              {/* Module number + title */}
              <Text style={[styles.moduleNumber, { color: skillColor }]}>
                Module {mod.order}
              </Text>
              <Text style={[styles.moduleTitle, { color: colors.text }]}>
                {mod.title}
              </Text>

              {/* Description */}
              <Text
                style={[styles.moduleDescription, { color: colors.text2 }]}
                numberOfLines={3}
              >
                {mod.description}
              </Text>

              {/* Key takeaways preview */}
              {mod.keyTakeaways && mod.keyTakeaways.length > 0 && (
                <View style={styles.takeawaysPreview}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <InlineIcon name="lightbulb" size={13} color={colors.text3} />
                    <Text style={[styles.takeawaysLabel, { color: colors.text3 }]}>
                      {mod.keyTakeaways.length} kernpunten
                    </Text>
                  </View>
                </View>
              )}
            </Pressable>
          );
        })}

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  backButton: {
    marginBottom: 16,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  backText: {
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  progressContainer: {
    marginBottom: 24,
  },
  progressLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  progressCount: {
    fontSize: 14,
    fontWeight: '700',
  },
  moduleCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    marginBottom: 16,
    overflow: 'hidden',
  },
  moduleBadgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  moduleNumber: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  moduleTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 8,
    lineHeight: 24,
  },
  moduleDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  takeawaysPreview: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.06)',
  },
  takeawaysLabel: {
    fontSize: 13,
    fontWeight: '500',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingHorizontal: 32,
  },
  emptyIcon: {
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  bottomSpacer: {
    height: 20,
  },
});
