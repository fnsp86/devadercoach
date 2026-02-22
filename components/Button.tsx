import React, { useRef } from 'react';
import { Pressable, Text, StyleSheet, Animated, ViewStyle, TextStyle } from 'react-native';
import { useTheme } from '@/lib/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: React.ReactNode;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon,
}: ButtonProps) {
  const { colors } = useTheme();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const sizeStyles: Record<string, { container: ViewStyle; text: TextStyle }> = {
    sm: {
      container: { paddingVertical: 10, paddingHorizontal: 16 },
      text: { fontSize: 13 },
    },
    md: {
      container: { paddingVertical: 14, paddingHorizontal: 20 },
      text: { fontSize: 15 },
    },
    lg: {
      container: { paddingVertical: 18, paddingHorizontal: 28 },
      text: { fontSize: 17 },
    },
  };

  const variantStyles: Record<string, { container: ViewStyle; text: TextStyle }> = {
    primary: {
      container: {
        backgroundColor: colors.amber,
      },
      text: {
        color: '#1A1F2B',
        fontWeight: '700',
      },
    },
    secondary: {
      container: {
        backgroundColor: colors.surface2,
        borderWidth: 1,
        borderColor: colors.border,
      },
      text: {
        color: colors.text,
        fontWeight: '600',
      },
    },
    ghost: {
      container: {
        backgroundColor: 'transparent',
      },
      text: {
        color: colors.amber,
        fontWeight: '600',
      },
    },
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        style={[
          styles.base,
          sizeStyles[size].container,
          variantStyles[variant].container,
          disabled && styles.disabled,
        ]}
      >
        {icon && <>{icon}</>}
        <Text
          style={[
            styles.text,
            sizeStyles[size].text,
            variantStyles[variant].text,
            disabled && styles.disabledText,
          ]}
        >
          {title}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    gap: 8,
  },
  text: {
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.7,
  },
});
