import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '@/lib/theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'small' | 'highlighted';
}

export default function Card({ children, style, variant = 'default' }: CardProps) {
  const { colors } = useTheme();

  const variantStyles: Record<string, ViewStyle> = {
    default: {
      backgroundColor: colors.surface,
      borderColor: colors.border,
      borderWidth: 1,
      borderRadius: 16,
      padding: 20,
    },
    small: {
      backgroundColor: colors.surface2,
      borderColor: colors.border,
      borderWidth: 1,
      borderRadius: 12,
      padding: 16,
    },
    highlighted: {
      backgroundColor: colors.amberDim,
      borderColor: colors.amber,
      borderWidth: 1,
      borderRadius: 16,
      padding: 20,
    },
  };

  return (
    <View style={[styles.base, variantStyles[variant], style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
});
