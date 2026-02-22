import React, { useEffect, useRef } from 'react';
import { View, Animated, Dimensions, StyleSheet } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const PARTICLE_COUNT = 40;
const COLORS = ['#F59E0B', '#34D399', '#667eea', '#A78BFA', '#FB923C', '#EF4444', '#FBBF24', '#22C55E'];

interface ConfettiProps {
  active: boolean;
  intensity?: 'normal' | 'big' | 'epic';
}

interface Particle {
  x: Animated.Value;
  y: Animated.Value;
  rotate: Animated.Value;
  opacity: Animated.Value;
  color: string;
  size: number;
  startX: number;
}

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    x: new Animated.Value(0),
    y: new Animated.Value(0),
    rotate: new Animated.Value(0),
    opacity: new Animated.Value(1),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: 6 + Math.random() * 8,
    startX: Math.random() * SCREEN_WIDTH,
  }));
}

export default function Confetti({ active, intensity = 'normal' }: ConfettiProps) {
  const count = intensity === 'epic' ? 60 : intensity === 'big' ? 40 : 25;
  const particles = useRef<Particle[]>(createParticles(count)).current;

  useEffect(() => {
    if (!active) return;

    // Reset and animate each particle
    particles.forEach((p) => {
      p.x.setValue(0);
      p.y.setValue(0);
      p.rotate.setValue(0);
      p.opacity.setValue(1);
      p.startX = Math.random() * SCREEN_WIDTH;

      const delay = Math.random() * 300;
      const duration = 1200 + Math.random() * 800;
      const spreadX = (Math.random() - 0.5) * SCREEN_WIDTH * 0.8;

      Animated.parallel([
        Animated.timing(p.y, {
          toValue: SCREEN_HEIGHT * 0.7 + Math.random() * SCREEN_HEIGHT * 0.3,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(p.x, {
          toValue: spreadX,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(p.rotate, {
          toValue: 2 + Math.random() * 6,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(p.opacity, {
          toValue: 0,
          duration: duration * 0.4,
          delay: delay + duration * 0.6,
          useNativeDriver: true,
        }),
      ]).start();
    });
  }, [active, particles]);

  if (!active) return null;

  return (
    <View style={styles.container} pointerEvents="none">
      {particles.map((p, i) => {
        const spin = p.rotate.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        });

        return (
          <Animated.View
            key={i}
            style={[
              styles.particle,
              {
                width: p.size,
                height: p.size * 0.6,
                backgroundColor: p.color,
                borderRadius: p.size * 0.15,
                left: p.startX,
                top: -20,
                opacity: p.opacity,
                transform: [
                  { translateX: p.x },
                  { translateY: p.y },
                  { rotate: spin },
                ],
              },
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9999,
    elevation: 9999,
  },
  particle: {
    position: 'absolute',
  },
});
