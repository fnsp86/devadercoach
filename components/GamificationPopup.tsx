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
import { rarityColors } from '@/lib/colors';
import { InlineIcon } from '@/lib/icons';
import BadgeIcon from '@/components/BadgeIcon';
import type { Badge } from '@/lib/gamification-types';

const RARITY_COLORS: Record<string, string> = {
  common:    rarityColors.common,
  rare:      rarityColors.rare,
  epic:      rarityColors.epic,
  legendary: rarityColors.legendary,
};

const RARITY_LABELS: Record<string, string> = {
  common:    'Basis',
  rare:      'Zeldzaam',
  epic:      'Episch',
  legendary: 'Legendarisch',
};

export type GamificationEvent =
  | { type: 'levelup'; level: number; title: string }
  | { type: 'badge'; badge: Badge }
  | { type: 'milestone'; emoji: string; title: string; message: string };

interface Props {
  event: GamificationEvent | null;
  onDismiss: () => void;
}

export default function GamificationPopup({ event, onDismiss }: Props) {
  const { colors } = useTheme();

  const scaleAnim  = useRef(new Animated.Value(0.5)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const glowAnim   = useRef(new Animated.Value(0)).current;
  const starAnim   = useRef(new Animated.Value(0)).current;
  const shakeAnim  = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!event) return;

    scaleAnim.setValue(0.5);
    opacityAnim.setValue(0);
    glowAnim.setValue(0.3);
    starAnim.setValue(0);
    shakeAnim.setValue(0);

    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        tension: 90,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 220,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.sequence([
        Animated.timing(shakeAnim, { toValue:  6, duration: 60, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: -6, duration: 60, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue:  4, duration: 60, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: -4, duration: 60, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue:  0, duration: 60, useNativeDriver: true }),
      ]).start();
    });

    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, { toValue: 1,   duration: 900, useNativeDriver: true }),
        Animated.timing(glowAnim, { toValue: 0.2, duration: 900, useNativeDriver: true }),
      ]),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(starAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.timing(starAnim, { toValue: 0, duration: 600, useNativeDriver: true }),
      ]),
    ).start();

    const timer = setTimeout(dismissWithAnimation, 3500);
    return () => clearTimeout(timer);
  }, [event]);

  function dismissWithAnimation() {
    Animated.parallel([
      Animated.timing(scaleAnim,   { toValue: 0.8, duration: 220, useNativeDriver: true }),
      Animated.timing(opacityAnim, { toValue: 0,   duration: 220, useNativeDriver: true }),
    ]).start(() => onDismiss());
  }

  if (!event) return null;

  const isLevelUp = event.type === 'levelup';
  const isMilestone = event.type === 'milestone';
  const accentColor = isLevelUp || isMilestone
    ? colors.amber
    : RARITY_COLORS[(event as { type: 'badge'; badge: Badge }).badge.rarity] ?? RARITY_COLORS.common;

  const glowOpacity = glowAnim.interpolate({ inputRange: [0, 1], outputRange: [0.15, 0.45] });

  return (
    <Modal transparent animationType="none" visible={!!event} onRequestClose={dismissWithAnimation}>
      <Pressable style={styles.overlay} onPress={dismissWithAnimation}>
        <Animated.View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: accentColor,
              transform: [
                { scale: scaleAnim },
                { rotate: shakeAnim.interpolate({ inputRange: [-6, 6], outputRange: ['-6deg', '6deg'] }) },
              ],
              opacity: opacityAnim,
              shadowColor: accentColor,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.55,
              shadowRadius: 28,
              elevation: 20,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.glowRing,
              { borderColor: accentColor, opacity: glowOpacity },
            ]}
          />

          {isLevelUp ? (
            <LevelUpContent
              event={event as { type: 'levelup'; level: number; title: string }}
              colors={colors}
              accentColor={accentColor}
              starAnim={starAnim}
            />
          ) : isMilestone ? (
            <MilestoneContent
              event={event as { type: 'milestone'; emoji: string; title: string; message: string }}
              colors={colors}
              accentColor={accentColor}
              starAnim={starAnim}
            />
          ) : (
            <BadgeContent
              event={event as { type: 'badge'; badge: Badge }}
              colors={colors}
              accentColor={accentColor}
              starAnim={starAnim}
            />
          )}

          <Text style={[styles.dismissHint, { color: colors.text3 }]}>Tik om te sluiten</Text>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

function LevelUpContent({
  event,
  colors,
  accentColor,
  starAnim,
}: {
  event: { type: 'levelup'; level: number; title: string };
  colors: any;
  accentColor: string;
  starAnim: Animated.Value;
}) {
  const starScale = starAnim.interpolate({ inputRange: [0, 1], outputRange: [0.8, 1.25] });
  const starScale2 = starAnim.interpolate({ inputRange: [0, 1], outputRange: [1.1, 0.85] });

  return (
    <View style={styles.content}>
      <View style={styles.starsRow}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Animated.View
            key={i}
            style={{
              transform: [{ scale: i % 2 === 0 ? starScale : starScale2 }],
              opacity: starAnim,
            }}
          >
            <InlineIcon name={i % 2 === 0 ? 'zap' : 'star'} size={20} color={accentColor} />
          </Animated.View>
        ))}
      </View>

      <Text style={[styles.eventLabel, { color: accentColor }]}>LEVEL UP!</Text>

      <View style={[styles.levelBadge, {
        backgroundColor: accentColor + '1A',
        borderColor: accentColor,
        shadowColor: accentColor,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 12,
      }]}>
        <Text style={[styles.levelNumber, { color: accentColor }]}>{event.level}</Text>
        <Text style={[styles.levelWord, { color: accentColor }]}>LVL</Text>
      </View>

      <Text style={[styles.levelTitle, { color: colors.text }]}>{event.title}</Text>
      <Text style={[styles.eventSubtitle, { color: colors.text2 }]}>
        Je bent gegroeid als vader. Blijf zo doorgaan!
      </Text>
    </View>
  );
}

function BadgeContent({
  event,
  colors,
  accentColor,
  starAnim,
}: {
  event: { type: 'badge'; badge: Badge };
  colors: any;
  accentColor: string;
  starAnim: Animated.Value;
}) {
  const { badge } = event;
  const rarityLabel = RARITY_LABELS[badge.rarity] ?? badge.rarity;
  const sparkleOpacity = starAnim.interpolate({ inputRange: [0, 1], outputRange: [0.4, 1] });

  return (
    <View style={styles.content}>
      <View style={[styles.nieuwBadge, { backgroundColor: accentColor }]}>
        <Text style={styles.nieuwText}>NIEUW</Text>
      </View>

      <Text style={[styles.eventLabel, { color: accentColor }]}>BADGE UNLOCKED!</Text>

      <BadgeIcon emoji={badge.emoji} rarity={badge.rarity} size="lg" />

      <View style={styles.sparkleRow}>
        {[0, 1, 2].map((i) => (
          <Animated.View key={i} style={{ opacity: sparkleOpacity }}>
            <InlineIcon name={i === 1 ? 'star' : 'zap'} size={16} color={accentColor} />
          </Animated.View>
        ))}
      </View>

      <View style={[styles.rarityPill, { backgroundColor: accentColor + '25' }]}>
        <Text style={[styles.rarityText, { color: accentColor }]}>
          {rarityLabel.toUpperCase()}
        </Text>
      </View>

      <Text style={[styles.badgeName, { color: colors.text }]}>{badge.name}</Text>
      <Text style={[styles.eventSubtitle, { color: colors.text2 }]}>{badge.description}</Text>
    </View>
  );
}

function MilestoneContent({
  event,
  colors,
  accentColor,
  starAnim,
}: {
  event: { type: 'milestone'; emoji: string; title: string; message: string };
  colors: any;
  accentColor: string;
  starAnim: Animated.Value;
}) {
  const sparkleOpacity = starAnim.interpolate({ inputRange: [0, 1], outputRange: [0.4, 1] });

  return (
    <View style={styles.content}>
      <Text style={[styles.eventLabel, { color: accentColor }]}>MIJLPAAL!</Text>

      <View style={[styles.milestoneCircle, {
        backgroundColor: accentColor + '1A',
        borderColor: accentColor,
        shadowColor: accentColor,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 12,
      }]}>
        <InlineIcon name="trophy" size={44} color={accentColor} />
      </View>

      <View style={styles.sparkleRow}>
        {[0, 1, 2].map((i) => (
          <Animated.View key={i} style={{ opacity: sparkleOpacity }}>
            <InlineIcon name={i === 1 ? 'star' : 'zap'} size={16} color={accentColor} />
          </Animated.View>
        ))}
      </View>

      <Text style={[styles.badgeName, { color: colors.text }]}>{event.title}</Text>
      <Text style={[styles.eventSubtitle, { color: colors.text2 }]}>{event.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.72)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  card: {
    width: '100%',
    maxWidth: 340,
    borderRadius: 28,
    borderWidth: 2,
    padding: 32,
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  glowRing: {
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    borderRadius: 38,
    borderWidth: 10,
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  starsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  eventLabel: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  levelBadge: {
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  levelNumber: {
    fontSize: 46,
    fontWeight: '900',
    lineHeight: 50,
  },
  levelWord: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2.5,
    marginTop: -4,
  },
  levelTitle: {
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
  },
  milestoneCircle: {
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  rarityPill: {
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 14,
  },
  rarityText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.8,
  },
  badgeName: {
    fontSize: 21,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
  },
  nieuwBadge: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: 14,
  },
  nieuwText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
  },
  sparkleRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
    marginTop: 8,
  },
  eventSubtitle: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 8,
  },
  dismissHint: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 20,
    opacity: 0.55,
  },
});
