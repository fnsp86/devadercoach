import { useEffect, useRef } from 'react';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useTheme } from '@/lib/theme';
import { StoreProvider } from '@/lib/store';
import { AuthProvider, useAuth } from '@/lib/auth';
import { View } from 'react-native';
import * as Notifications from 'expo-notifications';
import type { EventSubscription } from 'expo-modules-core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { registerForPushNotifications, scheduleDailyQuoteNotifications, scheduleTaskReminderNotifications, scheduleReengagementNotifications } from '@/lib/notifications';

function RootLayoutContent() {
  const { colors, isDark } = useTheme();
  const { pendingPasswordReset } = useAuth();
  const router = useRouter();
  const responseListener = useRef<EventSubscription | null>(null);

  useEffect(() => {
    // Handle tap on notification → navigate to relevant screen
    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      const data = response.notification.request.content.data;
      if (data?.type === 'daily_quote' || data?.type === 'task_reminder' || data?.type === 'reengagement') {
        router.navigate('/(tabs)/vandaag' as any);
      } else if (data?.type === 'duel' && data?.duelId) {
        // Use navigate instead of push to prevent interrupting active training screens
        router.navigate('/(tabs)/training/duels' as any);
      } else if (data?.conversationId) {
        router.navigate(`/(tabs)/community/chat/${data.conversationId}` as any);
      }
    });

    // Ensure notification permissions and schedule if enabled
    (async () => {
      try {
        // Request permissions first - required on iOS before scheduling
        await registerForPushNotifications();

        // Re-engagement notificaties: worden bij elke app-open opnieuw gepland
        // zodat de timer reset. Actieve gebruikers krijgen ze nooit te zien.
        await scheduleReengagementNotifications();

        const stored = await AsyncStorage.getItem('vc-notifications');
        const settings = stored ? JSON.parse(stored) : { dagelijksQuote: true, taakReminder: true };
        if (settings.dagelijksQuote !== false) {
          await scheduleDailyQuoteNotifications(settings.quoteHour || 8);
        }
        // Schedule task reminders based on incomplete tasks
        if (settings.taakReminder !== false) {
          try {
            const cacheStr = await AsyncStorage.getItem('vc-week-tasks-cache');
            const completionsStr = await AsyncStorage.getItem('vc-week-task-completions');
            if (cacheStr) {
              const cache = JSON.parse(cacheStr);
              const completions = completionsStr ? JSON.parse(completionsStr) : [];
              const completedIds = new Set(
                completions
                  .filter((c: any) => c.weekKey === cache.weekKey)
                  .map((c: any) => c.taskId),
              );
              const incomplete = (cache.taskIds as string[]).filter((id: string) => !completedIds.has(id)).length;
              if (incomplete > 0) {
                await scheduleTaskReminderNotifications(incomplete, settings.reminderHour || 18);
              }
            }
          } catch {}
        }
      } catch {}
    })();

    return () => {
      responseListener.current?.remove();
    };
  }, []);

  // Redirect to reset-password screen when a recovery deep link is opened
  useEffect(() => {
    if (pendingPasswordReset) {
      router.replace('/reset-password');
    }
  }, [pendingPasswordReset]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.bg } }} />
    </View>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <StoreProvider>
          <RootLayoutContent />
        </StoreProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
