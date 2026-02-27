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
import { scheduleDailyQuoteNotifications, scheduleTaskReminderNotifications } from '@/lib/notifications';

function RootLayoutContent() {
  const { colors, isDark } = useTheme();
  const { pendingPasswordReset } = useAuth();
  const router = useRouter();
  const responseListener = useRef<EventSubscription | null>(null);

  useEffect(() => {
    // Handle tap on notification → navigate to relevant screen
    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      const data = response.notification.request.content.data;
      if (data?.type === 'daily_quote' || data?.type === 'task_reminder') {
        router.push('/(tabs)/vandaag' as any);
      } else if (data?.type === 'duel' && data?.duelId) {
        router.push('/(tabs)/training/duels' as any);
      } else if (data?.conversationId) {
        router.push(`/(tabs)/community/chat/${data.conversationId}` as any);
      }
    });

    // Schedule notifications if enabled
    (async () => {
      try {
        const stored = await AsyncStorage.getItem('vc-notifications');
        const settings = stored ? JSON.parse(stored) : { dagelijksQuote: true, taakReminder: true };
        if (settings.dagelijksQuote !== false) {
          await scheduleDailyQuoteNotifications();
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
                await scheduleTaskReminderNotifications(incomplete);
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
