import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { supabase } from './supabase';
import { getWijsheidVanDeDag } from './vader-wijsheid';

// Configure how notifications appear when app is in foreground
// Duel notifications don't show as banner to prevent interrupting active training
Notifications.setNotificationHandler({
  handleNotification: async (notification) => {
    const data = notification.request.content.data;
    const isDuel = data?.type === 'duel';
    return {
      shouldShowAlert: !isDuel,
      shouldShowBanner: !isDuel,
      shouldShowList: true,
      shouldPlaySound: !isDuel,
      shouldSetBadge: false,
    };
  },
});

export async function registerForPushNotifications(): Promise<string | null> {
  // Push notifications only work on physical devices
  if (!Device.isDevice) {
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
    return null;
  }

  const { data: token } = await Notifications.getExpoPushTokenAsync({ projectId });

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
const SCHEDULE_DAYS = 14;

/** Plan dagelijkse quote-notificaties voor de komende 14 dagen */
export async function scheduleDailyQuoteNotifications(hour = 8) {
  // Cancel bestaande quote-notificaties
  await cancelDailyQuoteNotifications();

  const now = new Date();

  for (let dayOffset = 1; dayOffset <= SCHEDULE_DAYS; dayOffset++) {
    const date = new Date(now);
    date.setDate(date.getDate() + dayOffset);
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    const wijsheid = getWijsheidVanDeDag(dateStr);

    // Trigger op gekozen uur lokale tijd
    const trigger = new Date(date);
    trigger.setHours(hour, 0, 0, 0);

    // Sla over als trigger in het verleden ligt
    if (trigger.getTime() <= now.getTime()) continue;

    await Notifications.scheduleNotificationAsync({
      identifier: `${QUOTE_NOTIFICATION_ID_PREFIX}${dateStr}`,
      content: {
        title: 'Vader Wijsheid',
        body: wijsheid.text,
        subtitle: wijsheid.bron ? `- ${wijsheid.bron}` : undefined,
        data: { type: 'daily_quote' },
        ...(Platform.OS === 'android' && { channelId: 'daily-quote' }),
      },
      trigger: { type: Notifications.SchedulableTriggerInputTypes.DATE, date: trigger },
    });
  }

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

/** Plan dagelijkse taak-herinneringen voor de komende 14 dagen */
export async function scheduleTaskReminderNotifications(incompleteTasks: number, hour = 18) {
  await cancelTaskReminderNotifications();
  if (incompleteTasks <= 0) return;

  const now = new Date();

  for (let dayOffset = 0; dayOffset <= SCHEDULE_DAYS - 1; dayOffset++) {
    const date = new Date(now);
    date.setDate(date.getDate() + dayOffset);
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

    // Trigger op gekozen uur lokale tijd
    const trigger = new Date(date);
    trigger.setHours(hour, 0, 0, 0);

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

// ── Re-engagement Notificaties ──────────────────────────────────────────────

const REENGAGEMENT_ID_PREFIX = 'reengagement-';

const REENGAGEMENT_MESSAGES = [
  { day: 3, title: 'We missen je!', body: 'Drie dagen zonder oefening. Vijf minuten is genoeg om in vorm te blijven als vader.' },
  { day: 5, title: 'Kleine stappen tellen', body: 'Je streak is weg, maar je groei niet. Open de app en pak de draad weer op.' },
  { day: 7, title: 'Je kinderen verdienen de beste versie van jou', body: 'Een week zonder training. Kom terug en begin opnieuw - dat is pas kracht.' },
  { day: 14, title: 'Nog steeds hier voor je', body: 'Het maakt niet uit hoe lang je weg was. Wat telt is dat je terugkomt.' },
];

/**
 * Plan re-engagement notificaties.
 * Wordt gecanceld en opnieuw gepland bij elke app-open,
 * zodat actieve gebruikers ze nooit zien.
 */
export async function scheduleReengagementNotifications() {
  await cancelReengagementNotifications();

  const now = new Date();

  for (const msg of REENGAGEMENT_MESSAGES) {
    const trigger = new Date(now);
    trigger.setDate(trigger.getDate() + msg.day);
    trigger.setHours(10, 0, 0, 0);

    await Notifications.scheduleNotificationAsync({
      identifier: `${REENGAGEMENT_ID_PREFIX}${msg.day}`,
      content: {
        title: msg.title,
        body: msg.body,
        data: { type: 'reengagement' },
        ...(Platform.OS === 'android' && { channelId: 'task-reminders' }),
      },
      trigger: { type: Notifications.SchedulableTriggerInputTypes.DATE, date: trigger },
    });
  }
}

/** Cancel alle re-engagement notificaties */
export async function cancelReengagementNotifications() {
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  for (const n of scheduled) {
    if (n.identifier.startsWith(REENGAGEMENT_ID_PREFIX)) {
      await Notifications.cancelScheduledNotificationAsync(n.identifier);
    }
  }
}
