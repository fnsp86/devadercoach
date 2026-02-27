import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { supabase } from './supabase';
import { getWijsheidVanDeDag } from './vader-wijsheid';

// Configure how notifications appear when app is in foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function registerForPushNotifications(): Promise<string | null> {
  // Push notifications only work on physical devices
  if (!Device.isDevice) {
    console.log('[notifications] Not a physical device — skipping push registration');
    return null;
  }

  // Check / request permissions
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    console.log('[notifications] Permission not granted');
    return null;
  }

  // Android notification channels
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('chat', {
      name: 'Berichten',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
    });
    await Notifications.setNotificationChannelAsync('duels', {
      name: 'Duels',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
    });
    await Notifications.setNotificationChannelAsync('daily-quote', {
      name: 'Dagelijkse Wijsheid',
      importance: Notifications.AndroidImportance.DEFAULT,
    });
    await Notifications.setNotificationChannelAsync('task-reminders', {
      name: 'Taak Herinneringen',
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }

  // Get Expo push token
  const projectId = Constants.expoConfig?.extra?.eas?.projectId;
  if (!projectId) {
    console.log('[notifications] No EAS project ID found — push tokens require a production build');
    return null;
  }

  const { data: token } = await Notifications.getExpoPushTokenAsync({ projectId });

  console.log('[notifications] Push token:', token);
  return token;
}

export async function savePushToken(userId: string, token: string) {
  const { error } = await supabase
    .from('profiles')
    .update({ push_token: token })
    .eq('user_id', userId);

  if (error) {
    console.error('[notifications] Failed to save push token:', error.message);
  }
}

export async function registerAndSaveToken(userId: string) {
  try {
    const token = await registerForPushNotifications();
    if (token) {
      await savePushToken(userId, token);
    }
  } catch (e: any) {
    console.error('[notifications] Registration failed:', e?.message || e);
  }
}

// ── Dagelijkse Quote Notificaties ────────────────────────────────────────────

const QUOTE_NOTIFICATION_ID_PREFIX = 'daily-quote-';

/** Plan dagelijkse quote-notificaties voor de komende 7 dagen */
export async function scheduleDailyQuoteNotifications() {
  // Cancel bestaande quote-notificaties
  await cancelDailyQuoteNotifications();

  const now = new Date();

  for (let dayOffset = 1; dayOffset <= 7; dayOffset++) {
    const date = new Date(now);
    date.setDate(date.getDate() + dayOffset);
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    const wijsheid = getWijsheidVanDeDag(dateStr);

    // Trigger om 08:00 lokale tijd
    const trigger = new Date(date);
    trigger.setHours(8, 0, 0, 0);

    // Sla over als trigger in het verleden ligt
    if (trigger.getTime() <= now.getTime()) continue;

    await Notifications.scheduleNotificationAsync({
      identifier: `${QUOTE_NOTIFICATION_ID_PREFIX}${dateStr}`,
      content: {
        title: 'Vader Wijsheid',
        body: wijsheid.text,
        subtitle: wijsheid.bron ? `— ${wijsheid.bron}` : undefined,
        data: { type: 'daily_quote' },
        ...(Platform.OS === 'android' && { channelId: 'daily-quote' }),
      },
      trigger: { type: Notifications.SchedulableTriggerInputTypes.DATE, date: trigger },
    });
  }

  console.log('[notifications] Scheduled 7 daily quote notifications');
}

/** Cancel alle geplande quote-notificaties */
export async function cancelDailyQuoteNotifications() {
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  for (const n of scheduled) {
    if (n.identifier.startsWith(QUOTE_NOTIFICATION_ID_PREFIX)) {
      await Notifications.cancelScheduledNotificationAsync(n.identifier);
    }
  }
}

// ── Taak Reminder Notificaties ──────────────────────────────────────────────

const TASK_REMINDER_ID_PREFIX = 'task-reminder-';

/** Plan dagelijkse taak-herinneringen voor de komende 7 dagen */
export async function scheduleTaskReminderNotifications(incompleteTasks: number) {
  await cancelTaskReminderNotifications();
  if (incompleteTasks <= 0) return;

  const now = new Date();

  for (let dayOffset = 0; dayOffset <= 6; dayOffset++) {
    const date = new Date(now);
    date.setDate(date.getDate() + dayOffset);
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

    // Trigger om 18:00 lokale tijd
    const trigger = new Date(date);
    trigger.setHours(18, 0, 0, 0);

    if (trigger.getTime() <= now.getTime()) continue;

    await Notifications.scheduleNotificationAsync({
      identifier: `${TASK_REMINDER_ID_PREFIX}${dateStr}`,
      content: {
        title: 'Weektaak wacht op je',
        body: incompleteTasks === 1
          ? 'Je hebt nog 1 taak open deze week. Pak hem vandaag!'
          : `Je hebt nog ${incompleteTasks} taken open deze week. Welke pak je vandaag?`,
        data: { type: 'task_reminder' },
        ...(Platform.OS === 'android' && { channelId: 'task-reminders' }),
      },
      trigger: { type: Notifications.SchedulableTriggerInputTypes.DATE, date: trigger },
    });
  }

  console.log(`[notifications] Scheduled task reminders (${incompleteTasks} incomplete)`);
}

/** Cancel alle geplande taak-herinneringen */
export async function cancelTaskReminderNotifications() {
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  for (const n of scheduled) {
    if (n.identifier.startsWith(TASK_REMINDER_ID_PREFIX)) {
      await Notifications.cancelScheduledNotificationAsync(n.identifier);
    }
  }
}
