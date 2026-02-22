import React, { useRef } from 'react';
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native';
import { useTheme } from '@/lib/theme';
import { InlineIcon } from '@/lib/icons';
import SkillBadge from './SkillBadge';

interface Task {
  id: string;
  title: string;
  subtitle: string;
  skill: string;
  done: boolean;
}

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onExpand: (id: string) => void;
}

export default function TaskCard({ task, onToggle, onExpand }: TaskCardProps) {
  const { colors } = useTheme();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const checkScaleAnim = useRef(new Animated.Value(task.done ? 1 : 0)).current;

  const handleToggle = () => {
    if (task.done) return;

    Animated.sequence([
      Animated.spring(checkScaleAnim, {
        toValue: 1.2,
        useNativeDriver: true,
        friction: 4,
      }),
      Animated.spring(checkScaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        friction: 6,
      }),
    ]).start();

    onToggle(task.id);
  };

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        onPress={() => onExpand(task.id)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[
          styles.card,
          {
            backgroundColor: task.done ? colors.surface2 : colors.surface,
            borderColor: colors.border,
            opacity: task.done ? 0.6 : 1,
          },
        ]}
      >
        <View style={styles.content}>
          {/* Checkbox */}
          <Pressable onPress={handleToggle} hitSlop={8}>
            <Animated.View
              style={[
                styles.checkbox,
                {
                  borderColor: task.done ? colors.green : colors.border2,
                  backgroundColor: task.done ? colors.green : 'transparent',
                  transform: [{ scale: task.done ? checkScaleAnim : 1 }],
                },
              ]}
            >
              {task.done && (
                <InlineIcon name="check" size={16} color="#FFFFFF" />
              )}
            </Animated.View>
          </Pressable>

          {/* Text Content */}
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.title,
                {
                  color: task.done ? colors.text3 : colors.text,
                  textDecorationLine: task.done ? 'line-through' : 'none',
                },
              ]}
              numberOfLines={2}
            >
              {task.title}
            </Text>
            <Text
              style={[styles.subtitle, { color: colors.text3 }]}
              numberOfLines={2}
            >
              {task.subtitle}
            </Text>
            <View style={styles.badgeRow}>
              <SkillBadge skill={task.skill} size="sm" />
              {task.done && (
                <View style={styles.completedRow}>
                  <InlineIcon name="check" size={13} color={colors.green} />
                  <Text style={[styles.completedLabel, { color: colors.green }]}>
                    Voltooid
                  </Text>
                </View>
              )}
            </View>
          </View>

          {/* Expand indicator */}
          <View style={styles.expandIcon}>
            <InlineIcon name="arrowRight" size={16} color={colors.text3} />
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
    lineHeight: 21,
  },
  subtitle: {
    fontSize: 13,
    marginBottom: 8,
    lineHeight: 19,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
  completedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  completedLabel: {
    fontSize: 13,
    fontWeight: '700',
  },
  expandIcon: {
    marginTop: 4,
    paddingLeft: 4,
  },
});
