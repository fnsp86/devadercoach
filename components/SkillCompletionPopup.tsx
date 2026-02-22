import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Pressable,
  Modal,
} from 'react-native';
import { useTheme } from '@/lib/theme';
import Confetti from '@/components/Confetti';
import { AppIcon, InlineIcon, getSkillIcon } from '@/lib/icons';
import { SKILL_MASTERY_BADGES } from '@/lib/gamification-types';
import type { Skill } from '@/lib/types';

interface SkillCompletionProps {
  visible: boolean;
  skill: Skill;
  skillEmoji: string;
  skillColor: string;
  moduleTitles: string[];
  totalSkillXP: number;
  bonusXP: number;
  onDismiss: () => void;
}

export default function SkillCompletionPopup({
  visible,
  skill,
  skillEmoji,
  skillColor,
  moduleTitles,
  totalSkillXP,
  bonusXP,
  onDismiss,
}: SkillCompletionProps) {
  const { colors } = useTheme();
  const masteryBadge = SKILL_MASTERY_BADGES.find(b => b.id === `master_${skill.toLowerCase()}`);

  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const glowAnim = useRef(new Animated.Value(0)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!visible) return;

    scaleAnim.setValue(0.5);
    opacityAnim.setValue(0);
    glowAnim.setValue(0.3);
    shakeAnim.setValue(0);

    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        tension: 80,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.sequence([
        Animated.timing(shakeAnim, { toValue: 6, duration: 60, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: -6, duration: 60, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 4, duration: 60, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: -4, duration: 60, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 0, duration: 60, useNativeDriver: true }),
      ]).start();
    });

    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, { toValue: 1, duration: 900, useNativeDriver: true }),
        Animated.timing(glowAnim, { toValue: 0.2, duration: 900, useNativeDriver: true }),
      ]),
    ).start();
  }, [visible]);

  function dismiss() {
    Animated.parallel([
      Animated.timing(scaleAnim, { toValue: 0.8, duration: 220, useNativeDriver: true }),
      Animated.timing(opacityAnim, { toValue: 0, duration: 220, useNativeDriver: true }),
    ]).start(() => onDismiss());
  }

  if (!visible) return null;

  const glowOpacity = glowAnim.interpolate({ inputRange: [0, 1], outputRange: [0.15, 0.5] });
  const skillIconName = getSkillIcon(skill);

  return (
    <Modal transparent animationType="none" visible={visible} onRequestClose={dismiss}>
      <Confetti active={visible} intensity="epic" />
      <Pressable style={styles.overlay} onPress={dismiss}>
        <Animated.View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: skillColor,
              transform: [
                { scale: scaleAnim },
                { rotate: shakeAnim.interpolate({ inputRange: [-6, 6], outputRange: ['-6deg', '6deg'] }) },
              ],
              opacity: opacityAnim,
              shadowColor: skillColor,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.6,
              shadowRadius: 32,
              elevation: 24,
            },
          ]}
        >
          <Animated.View
            style={[styles.glowRing, { borderColor: skillColor, opacity: glowOpacity }]}
          />

          <Text style={[styles.eventLabel, { color: skillColor }]}>SKILL VOLTOOID!</Text>

          <View style={[styles.iconCircle, { backgroundColor: skillColor + '20', borderColor: skillColor }]}>
            <AppIcon name={skillIconName} size="lg" variant="compact" color={skillColor} />
          </View>

          <Text style={[styles.skillName, { color: colors.text }]}>{skill}</Text>

          <View style={styles.moduleList}>
            {moduleTitles.map((title, i) => (
              <View key={i} style={styles.moduleRow}>
                <InlineIcon name="checkCircle" size={14} color={colors.green} />
                <Text style={[styles.moduleTitle, { color: colors.text2 }]} numberOfLines={1}>
                  {title}
                </Text>
              </View>
            ))}
          </View>

          <View style={[styles.xpCard, { backgroundColor: '#F59E0B18', borderColor: '#F59E0B40' }]}>
            <Text style={styles.xpValue}>+{totalSkillXP + bonusXP} XP</Text>
            <Text style={[styles.xpDetail, { color: colors.text3 }]}>
              {totalSkillXP} modules + {bonusXP} mastery bonus
            </Text>
          </View>

          <View style={[styles.masteryBadge, { backgroundColor: skillColor + '15' }]}>
            <Text style={styles.masteryEmoji}>{masteryBadge?.emoji ?? '🥉'}</Text>
            <Text style={[styles.masteryText, { color: skillColor }]}>{masteryBadge?.name ?? 'Mastery'} behaald!</Text>
          </View>

          <Text style={[styles.motivation, { color: colors.text2 }]}>
            Je hebt een solide basis gelegd in {skill}. Ga door met oefenen om Zilver en Goud te bereiken!
          </Text>

          <Pressable style={[styles.button, { backgroundColor: skillColor }]} onPress={dismiss}>
            <Text style={styles.buttonText}>Verder</Text>
          </Pressable>

          <Text style={[styles.dismissHint, { color: colors.text3 }]}>Tik ergens om te sluiten</Text>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 340,
    borderRadius: 24,
    borderWidth: 2,
    padding: 28,
    alignItems: 'center',
    overflow: 'hidden',
  },
  glowRing: {
    position: 'absolute',
    top: -40,
    left: -40,
    right: -40,
    bottom: -40,
    borderRadius: 64,
    borderWidth: 3,
  },
  eventLabel: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 3,
    marginBottom: 16,
    textTransform: 'uppercase',
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  skillName: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 16,
  },
  moduleList: {
    width: '100%',
    marginBottom: 16,
    gap: 6,
  },
  moduleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  moduleTitle: {
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
  },
  xpCard: {
    width: '100%',
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  xpValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#F59E0B',
  },
  xpDetail: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  masteryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 12,
  },
  masteryEmoji: {
    fontSize: 20,
  },
  masteryText: {
    fontSize: 14,
    fontWeight: '700',
  },
  motivation: {
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    borderRadius: 14,
    paddingHorizontal: 32,
    paddingVertical: 14,
    marginBottom: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  dismissHint: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
});
