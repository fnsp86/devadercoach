import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/lib/theme';
import { AppIcon, type IconName } from '@/lib/icons';

function TabIcon({ icon, focused, activeColor }: { icon: IconName; focused: boolean; activeColor: string }) {
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
    </View>
  );
}

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 0,
          height: 88,
          paddingBottom: 30,
          paddingTop: 10,
          elevation: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.06,
          shadowRadius: 8,
        },
        tabBarActiveTintColor: colors.amber,
        tabBarInactiveTintColor: colors.text3,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 2,
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
          title: 'Help',
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
            <TabIcon icon="users" focused={focused} activeColor={colors.amber} />
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
      <Tabs.Screen name="training" options={{ href: null }} />
      <Tabs.Screen name="voortgang" options={{ href: null }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 32,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -4,
    width: 4,
    height: 4,
    borderRadius: 2,
  },
});
