import { useEffect, useState, useCallback } from 'react';
import { Tabs } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';
import { AppIcon, type IconName } from '@/lib/icons';
import { getUnreadCount, subscribeToNewMessages } from '@/lib/unread';

function TabIcon({
  icon,
  focused,
  activeColor,
  badge,
}: {
  icon: IconName;
  focused: boolean;
  activeColor: string;
  badge?: number;
}) {
  return (
    <View style={styles.iconContainer}>
      <AppIcon
        name={icon}
        size="sm"
        variant="compact"
        color={focused ? activeColor : '#5C6478'}
      />
      {focused && (
        <View style={[styles.activeIndicator, { backgroundColor: activeColor }]} />
      )}
      {badge != null && badge > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge > 9 ? '9+' : badge}</Text>
        </View>
      )}
    </View>
  );
}

export default function TabLayout() {
  const { colors } = useTheme();
  const { user } = useAuth();
  const insets = useSafeAreaInsets();
  const [unreadCount, setUnreadCount] = useState(0);

  const refreshUnread = useCallback(async () => {
    if (!user) return;
    try {
      const count = await getUnreadCount(user.id);
      setUnreadCount(count);
    } catch {
      // Silent
    }
  }, [user]);

  useEffect(() => {
    refreshUnread();

    // Subscribe to realtime conversation updates
    if (!user) return;
    const unsubscribe = subscribeToNewMessages(user.id, () => {
      refreshUnread();
    });

    // Poll every 30 seconds as fallback
    const interval = setInterval(refreshUnread, 30_000);

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, [user, refreshUnread]);

  return (
    <Tabs
      sceneContainerStyle={{ backgroundColor: colors.surface }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 0,
          borderTopColor: 'transparent',
          height: 48 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 4,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.amber,
        tabBarInactiveTintColor: colors.text3,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          marginTop: 1,
        },
      }}
    >
      <Tabs.Screen
        name="vandaag"
        options={{
          title: 'Week',
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="calendarDays" focused={focused} activeColor={colors.amber} />
          ),
        }}
      />
      <Tabs.Screen
        name="leren"
        options={{
          title: 'Leren',
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="bookOpen" focused={focused} activeColor={colors.amber} />
          ),
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Hulp',
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="lightbulb" focused={focused} activeColor={colors.amber} />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Social',
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon="users"
              focused={focused}
              activeColor={colors.amber}
              badge={unreadCount}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profiel"
        options={{
          title: 'Profiel',
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="user" focused={focused} activeColor={colors.amber} />
          ),
        }}
      />
      {/* Hidden routes - still accessible via deep link/push */}
      <Tabs.Screen name="voortgang" options={{ href: null }} />
      <Tabs.Screen name="training" options={{ href: null }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 28,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -4,
    width: 4,
    height: 4,
    borderRadius: 2,
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -8,
    backgroundColor: '#EF4444',
    borderRadius: 9,
    minWidth: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '800',
    lineHeight: 12,
  },
});
