import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Badge } from './gamification-types';
import type { GamificationEvent } from '../components/GamificationPopup';

// ── Badge → Discount mapping (must match website) ──

export const REWARD_BADGES: Record<string, { percentOff: number; label: string }> = {
  streak_7:      { percentOff: 5,  label: '7 dagen streak' },
  combo_triple:  { percentOff: 5,  label: 'Triple Threat' },
  streak_30:     { percentOff: 10, label: '30 dagen streak' },
  tasks_100:     { percentOff: 10, label: '100 taken voltooid' },
  arena_perfect: { percentOff: 15, label: 'Perfecte quiz score' },
  streak_100:    { percentOff: 15, label: '100 dagen streak' },
  learn_all:     { percentOff: 20, label: 'Alle 40 modules voltooid' },
  streak_365:    { percentOff: 25, label: '365 dagen streak' },
};

export function isRewardBadge(badgeId: string): boolean {
  return badgeId in REWARD_BADGES;
}

// ── Storage keys ──

const STORAGE_KEY = 'vc-discount-codes';
const PENDING_KEY = 'vc-pending-rewards';

// ── Types ──

export interface EarnedDiscountCode {
  badgeId: string;
  code: string;
  percentOff: number;
  expiresAt: string;
  claimedAt: string;
}

interface PendingReward {
  badgeId: string;
  email: string;
  addedAt: string;
}

// ── API ──

const WEBSITE_URL = process.env.EXPO_PUBLIC_WEBSITE_URL || 'https://devadercoach.nl';
// Note: This secret is bundled into the app JS. The server-side endpoint
// also validates the badge+email combo to prevent abuse, so exposure risk is limited
// to someone generating discount codes for badges they haven't earned.
const BADGE_SECRET = process.env.EXPO_PUBLIC_BADGE_REWARD_SECRET || '';

/**
 * Claim a discount code for a badge achievement.
 * Calls the website API, stores the code locally.
 * Returns the code if successful, null otherwise.
 */
export async function claimBadgeReward(
  badgeId: string,
  email: string,
): Promise<EarnedDiscountCode | null> {
  if (!BADGE_SECRET) {
    console.warn('[badge-rewards] No BADGE_REWARD_SECRET configured');
    await addPendingReward(badgeId, email);
    return null;
  }

  try {
    const res = await fetch(`${WEBSITE_URL}/api/discount/badge-reward`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ badgeId, email, appSecret: BADGE_SECRET }),
    });

    if (!res.ok) {
      console.warn('[badge-rewards] API error:', res.status);
      await addPendingReward(badgeId, email);
      return null;
    }

    const data = await res.json();

    const earned: EarnedDiscountCode = {
      badgeId,
      code: data.code,
      percentOff: data.percentOff,
      expiresAt: data.expiresAt,
      claimedAt: new Date().toISOString(),
    };

    await saveEarnedCode(earned);
    await removePendingReward(badgeId);

    return earned;
  } catch (e) {
    console.warn('[badge-rewards] Network error:', e);
    await addPendingReward(badgeId, email);
    return null;
  }
}

// ── Storage helpers ──

async function saveEarnedCode(code: EarnedDiscountCode): Promise<void> {
  const existing = await getEarnedDiscountCodes();
  // Don't add duplicates
  if (existing.some((c) => c.badgeId === code.badgeId)) return;
  existing.push(code);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

export async function getEarnedDiscountCodes(): Promise<EarnedDiscountCode[]> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// ── Pending rewards (retry mechanism) ──

async function addPendingReward(badgeId: string, email: string): Promise<void> {
  const pending = await getPendingRewards();
  if (pending.some((p) => p.badgeId === badgeId)) return;
  pending.push({ badgeId, email, addedAt: new Date().toISOString() });
  await AsyncStorage.setItem(PENDING_KEY, JSON.stringify(pending));
}

async function removePendingReward(badgeId: string): Promise<void> {
  const pending = await getPendingRewards();
  const filtered = pending.filter((p) => p.badgeId !== badgeId);
  await AsyncStorage.setItem(PENDING_KEY, JSON.stringify(filtered));
}

async function getPendingRewards(): Promise<PendingReward[]> {
  try {
    const raw = await AsyncStorage.getItem(PENDING_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Retry claiming any pending rewards.
 * Call this on app open or periodically.
 */
export async function retryPendingRewards(): Promise<EarnedDiscountCode[]> {
  const pending = await getPendingRewards();
  if (pending.length === 0) return [];

  const claimed: EarnedDiscountCode[] = [];
  for (const p of pending) {
    const result = await claimBadgeReward(p.badgeId, p.email);
    if (result) claimed.push(result);
  }
  return claimed;
}

/**
 * Process newly unlocked badges for reward eligibility.
 * For the first reward badge found, claims the code and returns a discount GamificationEvent.
 * For non-reward badges, returns a regular badge event.
 * Returns null if no badges were unlocked.
 */
export async function processBadgeRewards(
  newBadges: Badge[],
  email: string | undefined,
): Promise<GamificationEvent | null> {
  if (newBadges.length === 0) return null;

  // Check the first badge - is it a reward badge?
  const firstBadge = newBadges[0];

  if (email && isRewardBadge(firstBadge.id)) {
    // Try to claim the discount code
    const earned = await claimBadgeReward(firstBadge.id, email);
    if (earned) {
      return {
        type: 'discount',
        badge: firstBadge,
        code: earned.code,
        percentOff: earned.percentOff,
      };
    }
  }

  // Default: show badge popup
  return { type: 'badge', badge: firstBadge };
}
