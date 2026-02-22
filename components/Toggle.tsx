import React, { useRef, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native';
import { useTheme } from '@/lib/theme';

interface ToggleProps {
  value: boolean;
  onToggle: (value: boolean) => void;
  label: string;
  description?: string;
}

const TRACK_WIDTH = 48;
const TRACK_HEIGHT = 28;
const THUMB_SIZE = 22;
const THUMB_MARGIN = 3;
const THUMB_TRAVEL = TRACK_WIDTH - THUMB_SIZE - THUMB_MARGIN * 2;

export default function Toggle({ value, onToggle, label, description }: ToggleProps) {
  const { colors } = useTheme();
  const translateX = useRef(new Animated.Value(value ? THUMB_TRAVEL : 0)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: value ? THUMB_TRAVEL : 0,
      useNativeDriver: true,
      friction: 8,
      tension: 60,
    }).start();
  }, [value, translateX]);

  return (
    <Pressable
      onPress={() => onToggle(!value)}
      style={styles.container}
    >
      <View style={styles.labelContainer}>
        <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
        {description && (
          <Text style={[styles.description, { color: colors.text3 }]}>{description}</Text>
        )}
      </View>

      <View
        style={[
          styles.track,
          {
            backgroundColor: value ? colors.green : colors.surface2,
            borderColor: value ? colors.green : colors.border,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              transform: [{ translateX }],
            },
          ]}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  labelContainer: {
    flex: 1,
    marginRight: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
  },
  description: {
    fontSize: 13,
    marginTop: 2,
    lineHeight: 18,
  },
  track: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    borderRadius: TRACK_HEIGHT / 2,
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: THUMB_MARGIN,
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
});
