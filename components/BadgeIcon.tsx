import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { rarityColors } from '@/lib/colors';

type Rarity = 'common' | 'rare' | 'epic' | 'legendary';

interface BadgeIconProps {
  emoji: string;
  rarity: Rarity;
  size?: 'sm' | 'md' | 'lg';
  locked?: boolean;
}

const SIZES = {
  sm: { outer: 44, inner: 36, emoji: 18, border: 2, glowRadius: 6 },
  md: { outer: 64, inner: 52, emoji: 28, border: 2.5, glowRadius: 10 },
  lg: { outer: 96, inner: 80, emoji: 44, border: 3, glowRadius: 16 },
};

const RARITY_STYLES: Record<Rarity, {
  borderColor: string;
  bgColor: string;
  glowColor: string;
  glowOpacity: number;
}> = {
  common: {
    borderColor: rarityColors.common,
    bgColor: rarityColors.common + '15',
    glowColor: rarityColors.common,
    glowOpacity: 0,
  },
  rare: {
    borderColor: rarityColors.rare,
    bgColor: rarityColors.rare + '18',
    glowColor: rarityColors.rare,
    glowOpacity: 0.2,
  },
  epic: {
    borderColor: rarityColors.epic,
    bgColor: rarityColors.epic + '1A',
    glowColor: rarityColors.epic,
    glowOpacity: 0.3,
  },
  legendary: {
    borderColor: rarityColors.legendary,
    bgColor: rarityColors.legendary + '20',
    glowColor: rarityColors.legendary,
    glowOpacity: 0.4,
  },
};

export default function BadgeIcon({ emoji, rarity, size = 'md', locked = false }: BadgeIconProps) {
  const s = SIZES[size];
  const style = RARITY_STYLES[rarity];
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (rarity === 'epic' || rarity === 'legendary') {
      Animated.loop(
        Animated.sequence([
          Animated.timing(shimmerAnim, { toValue: 1, duration: 1800, useNativeDriver: true }),
          Animated.timing(shimmerAnim, { toValue: 0, duration: 1800, useNativeDriver: true }),
        ]),
      ).start();
    }
  }, [rarity, shimmerAnim]);

  const shimmerOpacity = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [style.glowOpacity * 0.5, style.glowOpacity],
  });

  if (locked) {
    return (
      <View style={[styles.outer, {
        width: s.outer,
        height: s.outer,
        borderRadius: s.outer / 2,
        backgroundColor: 'rgba(92,100,120,0.12)',
        borderWidth: s.border,
        borderColor: 'rgba(92,100,120,0.2)',
      }]}>
        <Text style={[styles.emoji, { fontSize: s.emoji * 0.7 }]}>?</Text>
      </View>
    );
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      {/* Glow layer for epic/legendary */}
      {(rarity === 'epic' || rarity === 'legendary') && (
        <Animated.View
          style={[
            styles.glow,
            {
              width: s.outer + s.glowRadius * 2,
              height: s.outer + s.glowRadius * 2,
              borderRadius: (s.outer + s.glowRadius * 2) / 2,
              backgroundColor: style.glowColor,
              opacity: shimmerOpacity,
            },
          ]}
        />
      )}

      {/* Outer ring */}
      <View style={[styles.outer, {
        width: s.outer,
        height: s.outer,
        borderRadius: s.outer / 2,
        borderWidth: s.border,
        borderColor: style.borderColor,
        backgroundColor: style.bgColor,
        shadowColor: style.glowColor,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: style.glowOpacity,
        shadowRadius: s.glowRadius,
        elevation: rarity === 'legendary' ? 8 : rarity === 'epic' ? 4 : 0,
      }]}>
        {/* Legendary double ring */}
        {rarity === 'legendary' && (
          <View style={[styles.innerRing, {
            width: s.inner + 4,
            height: s.inner + 4,
            borderRadius: (s.inner + 4) / 2,
            borderWidth: 1,
            borderColor: style.borderColor + '60',
          }]} />
        )}

        {/* Emoji */}
        <Text style={[styles.emoji, { fontSize: s.emoji }]}>{emoji}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  glow: {
    position: 'absolute',
  },
  outer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerRing: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    textAlign: 'center',
  },
});
