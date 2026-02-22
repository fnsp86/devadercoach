import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useTheme } from '@/lib/theme';

interface ProgressBarProps {
  progress: number; // 0-1
  color?: string;
  height?: number;
  showLabel?: boolean;
}

export default function ProgressBar({
  progress,
  color,
  height = 8,
  showLabel = false,
}: ProgressBarProps) {
  const { colors } = useTheme();
  const fillColor = color ?? colors.amber;
  const clampedProgress = Math.min(1, Math.max(0, progress));
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: clampedProgress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [clampedProgress, animatedWidth]);

  return (
    <View style={styles.container}>
      {showLabel && (
        <Text style={[styles.label, { color: colors.text2 }]}>
          {Math.round(clampedProgress * 100)}%
        </Text>
      )}
      <View
        style={[
          styles.track,
          {
            height,
            borderRadius: height / 2,
            backgroundColor: colors.surface2,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.fill,
            {
              height,
              borderRadius: height / 2,
              backgroundColor: fillColor,
              width: animatedWidth.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'right',
  },
  track: {
    width: '100%',
    overflow: 'hidden',
  },
  fill: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
