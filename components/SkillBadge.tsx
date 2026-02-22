import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/lib/theme';
import { skillColors } from '@/lib/colors';

interface SkillBadgeProps {
  skill: string;
  size?: 'sm' | 'md';
}

export default function SkillBadge({ skill, size = 'sm' }: SkillBadgeProps) {
  const { colors } = useTheme();

  const colorKeys = skillColors[skill] ?? { main: 'blue', dim: 'blueDim' };
  const mainColor = colors[colorKeys.main as keyof typeof colors] as string;
  const dimColor = colors[colorKeys.dim as keyof typeof colors] as string;

  const isSmall = size === 'sm';

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: dimColor,
          paddingVertical: isSmall ? 4 : 6,
          paddingHorizontal: isSmall ? 8 : 12,
          borderRadius: isSmall ? 6 : 8,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: mainColor,
            fontSize: isSmall ? 11 : 13,
          },
        ]}
      >
        {skill}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
  },
  text: {
    fontWeight: '600',
  },
});
