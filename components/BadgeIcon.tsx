import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { rarityColors } from '@/lib/colors';
import { emojiToIcon, ICON_MAP } from '@/lib/icons';

type Rarity = 'common' | 'rare' | 'epic' | 'legendary';

interface BadgeIconProps {
  emoji: string;
  rarity: Rarity;
  size?: 'sm' | 'md' | 'lg';
  locked?: boolean;
}

const SIZES = {
  sm: { outer: 44, inner: 36, icon: 18, border: 2, glowRadius: 6, ring: 1 },
  md: { outer: 64, inner: 52, icon: 26, border: 2.5, glowRadius: 12, ring: 1.5 },
  lg: { outer: 96, inner: 80, icon: 40, border: 3, glowRadius: 18, ring: 2 },
};

const RARITY_STYLES: Record<Rarity, {
  borderColor: string;
  bgColor: string;
  iconColor: string;
  glowColor: string;
  glowOpacity: number;
}> = {
  common: {
    borderColor: rarityColors.common,
    bgColor: rarityColors.common + '12',
    iconColor: rarityColors.common,
    glowColor: rarityColors.common,
    glowOpacity: 0,
  },
  rare: {
    borderColor: rarityColors.rare,
    bgColor: rarityColors.rare + '14',
    iconColor: rarityColors.rare,
    glowColor: rarityColors.rare,
    glowOpacity: 0.2,
  },
  epic: {
    borderColor: rarityColors.epic,
    bgColor: rarityColors.epic + '16',
    iconColor: rarityColors.epic,
    glowColor: rarityColors.epic,
    glowOpacity: 0.3,
  },
  legendary: {
    borderColor: rarityColors.legendary,
    bgColor: rarityColors.legendary + '1A',
    iconColor: rarityColors.legendary,
    glowColor: rarityColors.legendary,
    glowOpacity: 0.4,
  },
};

export default function BadgeIcon({ emoji, rarity, size = 'md', locked = false }: BadgeIconProps) {
  const s = SIZES[size];
  const style = RARITY_STYLES[rarity];
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if ((rarity === 'epic' || rarity === 'legendary') && !locked) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(shimmerAnim, { toValue: 1, duration: 2200, useNativeDriver: true }),
          Animated.timing(shimmerAnim, { toValue: 0, duration: 2200, useNativeDriver: true }),
        ]),
      ).start();
    }
  }, [rarity, locked, shimmerAnim]);

  const shimmerOpacity = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [style.glowOpacity * 0.4, style.glowOpacity],
  });

  // Resolve icon
  const iconName = emojiToIcon(emoji);
  const IconComponent = ICON_MAP[iconName];

  if (locked) {
    const LockIcon = ICON_MAP['lock'];
    return (
      <View style={[styles.outer, {
        width: s.outer,
        height: s.outer,
        borderRadius: s.outer / 2,
        backgroundColor: 'rgba(92,100,120,0.08)',
        borderWidth: s.border,
        borderColor: 'rgba(92,100,120,0.15)',
      }]}>
        {LockIcon && <LockIcon size={s.icon * 0.55} color="rgba(92,100,120,0.35)" strokeWidth={1.5} />}
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
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: rarity === 'legendary' ? 0.4 : rarity === 'epic' ? 0.25 : style.glowOpacity,
        shadowRadius: s.glowRadius,
        elevation: rarity === 'legendary' ? 8 : rarity === 'epic' ? 4 : 0,
      }]}>
        {/* Legendary inner ring */}
        {rarity === 'legendary' && (
          <View style={[styles.innerRing, {
            width: s.inner + 4,
            height: s.inner + 4,
            borderRadius: (s.inner + 4) / 2,
            borderWidth: s.ring,
            borderColor: style.borderColor + '50',
          }]} />
        )}

        {/* Epic inner ring (subtle) */}
        {rarity === 'epic' && (
          <View style={[styles.innerRing, {
            width: s.inner + 2,
            height: s.inner + 2,
            borderRadius: (s.inner + 2) / 2,
            borderWidth: s.ring * 0.8,
            borderColor: style.borderColor + '30',
          }]} />
        )}

        {/* Icon */}
        {IconComponent && (
          <IconComponent
            size={s.icon}
            color={style.iconColor}
            strokeWidth={1.5}
          />
        )}
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
});
