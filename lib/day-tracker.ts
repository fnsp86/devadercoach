// DAY TRACKER - Track which day the user is on
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface DayTracking {
  startDate: string; // ISO date when user started
  currentDay: number; // Day 1, Day 2, etc.
  lastCheckIn: string; // Last time they opened the app
}

export function initializeDayTracking(): DayTracking {
  const today = new Date().toISOString().split('T')[0];
  return {
    startDate: today,
    currentDay: 1,
    lastCheckIn: today
  };
}

export function calculateCurrentDay(tracking: DayTracking): number {
  const start = new Date(tracking.startDate);
  const now = new Date();

  // Calculate days difference
  const diffTime = Math.abs(now.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays + 1; // Day 1 = first day
}

export async function getDayTracking(): Promise<DayTracking> {
  const stored = await AsyncStorage.getItem('vc-day-tracking');
  if (stored) {
    const tracking: DayTracking = JSON.parse(stored);
    tracking.currentDay = calculateCurrentDay(tracking);
    tracking.lastCheckIn = new Date().toISOString().split('T')[0];
    await AsyncStorage.setItem('vc-day-tracking', JSON.stringify(tracking));
    return tracking;
  }

  const newTracking = initializeDayTracking();
  await AsyncStorage.setItem('vc-day-tracking', JSON.stringify(newTracking));
  return newTracking;
}

export async function resetDayTracking() {
  await AsyncStorage.removeItem('vc-day-tracking');
}
