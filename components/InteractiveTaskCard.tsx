import React, { useRef, useState, useCallback } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { useTheme } from '@/lib/theme';
import SkillBadge from '@/components/SkillBadge';
import { InlineIcon, type IconName } from '@/lib/icons';
import type { InteractiveTask } from '@/lib/types';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface InteractiveTaskCardProps {
  task: InteractiveTask;
  completed: boolean;
  onComplete: (task: InteractiveTask) => void;
  colors: Record<string, string>;
}

interface ExpandableSectionProps {
  icon: IconName;
  iconColor: string;
  label: string;
  content?: string;
  borderColor: string;
  textColor: string;
  dimColor: string;
}

function ExpandableSection({
  icon,
  iconColor,
  label,
  content,
  borderColor,
  dimColor,
  textColor,
}: ExpandableSectionProps) {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen((prev) => !prev);
  }, []);

  if (!content) return null;

  return (
    <Pressable onPress={toggle}>
      <View
        style={[
          styles.expandableSection,
          { borderLeftColor: borderColor, backgroundColor: dimColor },
        ]}
      >
        <View style={styles.expandableHeader}>
          <View style={styles.expandableLabelRow}>
            <InlineIcon name={icon} size={14} color={iconColor} />
            <Text style={[styles.expandableLabel, { color: textColor }]}>
              {label}
            </Text>
          </View>
          <View style={styles.chevronCircle}>
            <InlineIcon name={open ? 'chevronUp' : 'chevronDown'} size={14} color={textColor} />
          </View>
        </View>
        {open && (
          <Text style={[styles.expandableContent, { color: textColor }]}>
            {content}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

export default function InteractiveTaskCard({
  task,
  completed,
  onComplete,
  colors,
}: InteractiveTaskCardProps) {
  const { colors: themeColors } = useTheme();
  const c = { ...themeColors, ...colors };

  const [expanded, setExpanded] = useState(false);

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const checkScaleAnim = useRef(new Animated.Value(completed ? 1 : 0)).current;
  const chevronRotate = useRef(new Animated.Value(0)).current;

  const toggleExpanded = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((prev) => {
      const next = !prev;
      Animated.spring(chevronRotate, {
        toValue: next ? 1 : 0,
        useNativeDriver: true,
        friction: 8,
      }).start();
      return next;
    });
  }, [chevronRotate]);

  const handleComplete = useCallback(() => {
    if (completed) return;

    Animated.sequence([
      Animated.spring(checkScaleAnim, {
        toValue: 1.3,
        useNativeDriver: true,
        friction: 4,
      }),
      Animated.spring(checkScaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        friction: 6,
      }),
    ]).start();

    onComplete(task);
  }, [completed, checkScaleAnim, onComplete, task]);

  const handlePressIn = useCallback(() => {
    Animated.spring(scaleAnim, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  const handlePressOut = useCallback(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  const chevronSpin = chevronRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        onPress={toggleExpanded}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[
          styles.card,
          {
            backgroundColor: c.surface,
            borderColor: c.border,
            opacity: completed ? 0.6 : 1,
          },
        ]}
      >
        {/* ── Collapsed header ──────────────────────────────── */}
        <View style={styles.header}>
          {/* Checkbox */}
          <Pressable onPress={handleComplete} hitSlop={8}>
            <Animated.View
              style={[
                styles.checkbox,
                {
                  borderColor: completed ? c.green : c.border2,
                  backgroundColor: completed ? c.green : 'transparent',
                  transform: [{ scale: completed ? checkScaleAnim : 1 }],
                },
              ]}
            >
              {completed && (
                <InlineIcon name="check" size={16} color="#FFFFFF" />
              )}
            </Animated.View>
          </Pressable>

          {/* Title & badges */}
          <View style={styles.titleContainer}>
            <Text
              style={[
                styles.title,
                {
                  color: completed ? c.text3 : c.text,
                  textDecorationLine: completed ? 'line-through' : 'none',
                },
              ]}
              numberOfLines={2}
            >
              {task.title}
            </Text>

            <View style={styles.badgeRow}>
              <SkillBadge skill={task.skill} size="sm" />

              <View style={[styles.metaBadge, { backgroundColor: c.surface2 }]}>
                <View style={styles.metaBadgeContent}>
                  <InlineIcon name="clock" size={10} color={c.text2} />
                  <Text style={[styles.metaBadgeText, { color: c.text2 }]}>
                    {task.duration}
                  </Text>
                </View>
              </View>

              <View style={[styles.metaBadge, { backgroundColor: c.amberDim }]}>
                <Text style={[styles.metaBadgeText, { color: c.amber }]}>
                  +{task.points} XP
                </Text>
              </View>
            </View>
          </View>

          {/* Chevron */}
          <Animated.View
            style={[styles.chevronCircleLg, { backgroundColor: c.surface2, transform: [{ rotate: chevronSpin }] }]}
          >
            <InlineIcon name="chevronDown" size={16} color={c.text2} />
          </Animated.View>
        </View>

        {/* ── Expanded content ──────────────────────────────── */}
        {expanded && (
          <View style={styles.expandedContent}>
            {/* Description */}
            <Text style={[styles.description, { color: c.text2 }]}>
              {task.description}
            </Text>

            {/* Expandable sections */}
            <View style={styles.sections}>
              <ExpandableSection
                icon="lightbulb"
                iconColor={c.blue}
                label="Waarom dit werkt"
                content={task.psychologie}
                borderColor={c.blue}
                dimColor={c.blueDim}
                textColor={c.text}
              />

              <ExpandableSection
                icon="zap"
                iconColor={c.amber}
                label="Skill tip"
                content={task.skillTip}
                borderColor={c.amber}
                dimColor={c.amberDim}
                textColor={c.text}
              />

              <ExpandableSection
                icon="alertTriangle"
                iconColor={c.red}
                label="Vermijd"
                content={task.vermijd}
                borderColor={c.red}
                dimColor={c.redDim}
                textColor={c.text}
              />

              <ExpandableSection
                icon="target"
                iconColor={c.green}
                label="Leerdoel"
                content={task.leerdoel}
                borderColor={c.green}
                dimColor={c.greenDim}
                textColor={c.text}
              />
            </View>

            {/* Source */}
            {task.bron ? (
              <Text style={[styles.bron, { color: c.text3 }]}>
                Bron: {task.bron}
              </Text>
            ) : null}

            {/* Complete button */}
            <Pressable
              onPress={handleComplete}
              disabled={completed}
              style={[
                styles.completeButton,
                {
                  backgroundColor: completed ? c.surface2 : c.amber,
                  opacity: completed ? 0.5 : 1,
                },
              ]}
            >
              <View style={styles.completeButtonContent}>
                {completed && <InlineIcon name="check" size={16} color={c.text3} />}
                <Text
                  style={[
                    styles.completeButtonText,
                    { color: completed ? c.text3 : '#1A1F2B' },
                  ]}
                >
                  {completed ? 'Voltooid' : 'Voltooid'}
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    overflow: 'hidden',
  },
  header: {
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
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 6,
    lineHeight: 21,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  metaBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  metaBadgeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaBadgeText: {
    fontSize: 11,
    fontWeight: '600',
  },
  chevronCircleLg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chevronCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandedContent: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.06)',
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
  },
  sections: {
    gap: 10,
  },
  expandableSection: {
    borderLeftWidth: 3,
    borderRadius: 10,
    padding: 12,
  },
  expandableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expandableLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  expandableLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  expandableContent: {
    fontSize: 13,
    lineHeight: 20,
    marginTop: 8,
  },
  bron: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 14,
  },
  completeButton: {
    marginTop: 18,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  completeButtonText: {
    fontSize: 15,
    fontWeight: '700',
  },
});
