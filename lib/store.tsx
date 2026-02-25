import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {
  OnboardingState,
  Completion,
  UserProfile,
  TaskCompletion,
  WeekPlan,
  SkillProgress,
  CompletionStatus,
  ScenarioCompletion,
  TrainingProgress,
  AgeGroup,
  Skill,
  PulseCheckIn,
  PulseStats,
  StageProgress,
  ReflectionNote,
  TaskOutcome,
  JournalEntry,
} from './types';
import { challenges } from './challenges';
import { getCurrentLevel } from './training';
import type { ArenaStats } from './badge-checker';
import { DEFAULT_ARENA_STATS } from './badge-checker';
import { useAuth } from './auth';

// -- Per-user backup (used by logout/delete handlers) ----------------------
export async function saveStoreForUser(userId: string) {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    const vcKeys = (allKeys as string[]).filter(
      (k) => k.startsWith('vc-') && !k.startsWith('vc-userdata-') && k !== 'vc-current-user-id',
    );
    const pairs = await AsyncStorage.multiGet(vcKeys);
    const blob: Record<string, string> = {};
    pairs.forEach(([key, value]) => {
      if (value) blob[key] = value;
    });
    await AsyncStorage.setItem(`vc-userdata-${userId}`, JSON.stringify(blob));
  } catch (e) {
    console.error('[store] saveStoreForUser error:', e);
  }
}

// -- AsyncStorage helpers ---------------------------------------------------
async function load<T>(key: string): Promise<T | null> {
  try {
    const raw = await AsyncStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function save<T>(key: string, value: T): void {
  AsyncStorage.setItem(key, JSON.stringify(value)).catch(() => {});
}

function remove(key: string): void {
  AsyncStorage.removeItem(key).catch(() => {});
}

// -- Daily pick -------------------------------------------------------------
const MAX_SWAPS = 2;

function getTodayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getWeekKey(): string {
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(d.setDate(diff));
  return `${monday.getFullYear()}-${String(monday.getMonth() + 1).padStart(2, '0')}-${String(monday.getDate()).padStart(2, '0')}`;
}

function pickId(ageGroup: AgeGroup, skill: Skill, excludeId?: string): string | undefined {
  let pool = challenges.filter(
    (c) => c.skill === skill && c.ageGroups.includes(ageGroup) && c.id !== excludeId,
  );
  if (!pool.length) pool = challenges.filter((c) => c.skill === skill && c.ageGroups.includes(ageGroup));
  if (!pool.length) return undefined;
  return pool[Math.floor(Math.random() * pool.length)].id;
}

// -- Keys -------------------------------------------------------------------
const KEYS = {
  PROFILE: 'vc-profile',
  ONBOARDING: 'vc-onboarding',
  COMPLETIONS: 'vc-completions',
  TASKS: 'vc-tasks',
  WEEK_PLAN: 'vc-weekplan',
  SKILL_XP: 'vc-skill-xp',
  SCENARIO_COMPLETIONS: 'vc-scenario-completions',
  TRAINING_PROGRESS: 'vc-training-progress',
  WEEK_TASK_COMPLETIONS: 'vc-week-task-completions', // { taskId, weekKey, completedAt }[]
  PULSE_CHECKINS: 'vc-pulse-checkins',              // PulseCheckIn[]
  STAGE_PROGRESS: 'vc-stage-progress',              // Record<string, StageProgress>
  COMBO_STATE: 'vc-combo-state',                    // { consecutiveDays, lastActiveDate }
  UNLOCKED_BADGES: 'vc-unlocked-badges',            // string[]
  BADGE_UNLOCK_DATES: 'vc-badge-unlock-dates',      // Record<string, string>
  ARENA_STATS: 'vc-arena-stats',                    // ArenaStats
  REFLECTION_NOTES: 'vc-reflection-notes',          // ReflectionNote[]
  HELP_FAVORITES: 'vc-help-favorites',              // string[]
  HELP_HISTORY: 'vc-help-history',                  // string[] (laatste 10 bekeken)
  HELP_FEEDBACK: 'vc-help-feedback',                // Record<string, 'up' | 'down'>
  TASK_OUTCOMES: 'vc-task-outcomes',                // TaskOutcome[]
  WEEKLY_RECAPS_SEEN: 'vc-weekly-recaps-seen',     // string[] (weekKeys)
  JOURNAL_ENTRIES: 'vc-journal-entries',            // JournalEntry[]
} as const;

// -- Week task completion type ----------------------------------------------
export interface WeekTaskCompletion {
  taskId: string;
  weekKey: string;   // YYYY-MM-DD van de maandag van die week
  completedAt: string; // ISO timestamp
  points: number;
}

// -- Store context ----------------------------------------------------------
interface StoreState {
  hydrated: boolean;
  profile: UserProfile | null;
  onboarding: OnboardingState | null;
  completions: Completion[];
  taskCompletions: TaskCompletion[];
  weekPlan: WeekPlan | null;
  skillXP: Record<Skill, SkillProgress>;
  weekCount: number;
  scenarioCompletions: ScenarioCompletion[];
  trainingProgress: Record<Skill, TrainingProgress>;

  // Weektaken
  weekTaskCompletions: WeekTaskCompletion[];
  completeWeekTask: (taskId: string, weekKey: string, points: number) => void;
  undoWeekTask: (taskId: string, weekKey: string) => void;
  isWeekTaskDone: (taskId: string, weekKey: string) => boolean;
  getWeekTasksDone: (weekKey: string) => WeekTaskCompletion[];

  // Stage progress (Vader Missies)
  stageProgress: Record<string, StageProgress>;
  completeStage: (moduleId: string, stageId: string, xpEarned: number, skill: Skill, totalStages: number) => void;
  getStageProgress: (moduleId: string) => StageProgress | null;
  awardBonusXP: (amount: number, skill: Skill) => void;

  // Combo tracking
  consecutiveActiveDays: number;
  lastActiveDate: string;
  recordActiveDay: () => void;

  // Badge tracking
  unlockedBadges: string[];
  badgeUnlockDates: Record<string, string>;
  unlockBadge: (badgeId: string) => boolean;

  // Arena stats
  arenaStats: ArenaStats;
  updateArenaStats: (update: Partial<ArenaStats>) => void;

  // Pulse check-in
  pulseCheckIns: PulseCheckIn[];
  addPulseCheckIn: (checkIn: PulseCheckIn) => void;
  getTodayPulse: () => PulseCheckIn | undefined;
  getPulseStats: () => PulseStats;

  // Reflection notes
  reflectionNotes: ReflectionNote[];
  addReflectionNote: (note: ReflectionNote) => void;
  getReflectionNotesForModule: (moduleId: string) => ReflectionNote[];
  getReflectionNotesForSkill: (skill: string) => ReflectionNote[];

  // Task outcomes ("Hoe ging het?")
  taskOutcomes: TaskOutcome[];
  addTaskOutcome: (outcome: TaskOutcome) => void;
  getTaskOutcome: (taskId: string, weekKey: string) => TaskOutcome | undefined;
  getOutcomesForWeek: (weekKey: string) => TaskOutcome[];

  // Journal (Vader Dagboek)
  journalEntries: JournalEntry[];
  addJournalEntry: (entry: JournalEntry) => void;
  getJournalEntriesForDate: (date: string) => JournalEntry[];

  // Weekly recaps seen
  weeklyRecapsSeen: string[];
  markRecapSeen: (weekKey: string) => void;
  isRecapSeen: (weekKey: string) => boolean;

  // Help favorites
  helpFavorites: string[];
  toggleHelpFavorite: (situationId: string) => void;
  isHelpFavorite: (situationId: string) => boolean;

  // Help history & feedback
  helpHistory: string[];
  addHelpHistory: (situationId: string) => void;
  helpFeedback: Record<string, 'up' | 'down'>;
  setHelpFeedback: (situationId: string, feedback: 'up' | 'down') => void;

  saveProfile: (p: UserProfile) => void;
  saveOnboarding: (o: OnboardingState) => void;
  addCompletion: (c: {
    challengeId: string;
    skill: Skill;
    dateISO: string;
    status?: CompletionStatus;
  }) => void;
  toggleTask: (taskId: string) => void;
  isTaskDone: (taskId: string) => boolean;
  getTodayChallengeFromPlan: () => string | undefined;
  swapTodayChallenge: () => void;
  startWeekPlan: (skill: Skill) => void;
  addScenarioCompletion: (completion: ScenarioCompletion) => void;

  getTrainingProgress: (skill: Skill) => TrainingProgress;
  markTrainingItemComplete: (skill: Skill, itemId: string, isCorrect?: boolean) => void;
  resetTraining: (skill: Skill) => void;

  saveForUser: (userId: string) => Promise<void>;
  restoreUserData: (userId: string) => Promise<{ hasProfile: boolean }>;
  clearAll: () => Promise<void>;
}

const StoreContext = createContext<StoreState | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [onboarding, setOnboarding] = useState<OnboardingState | null>(null);
  const [completions, setCompletions] = useState<Completion[]>([]);
  const [taskCompletions, setTaskCompletions] = useState<TaskCompletion[]>([]);
  const [weekPlan, setWeekPlan] = useState<WeekPlan | null>(null);
  const [skillXP, setSkillXP] = useState<Record<Skill, SkillProgress>>(
    {} as Record<Skill, SkillProgress>,
  );
  const [scenarioCompletions, setScenarioCompletions] = useState<ScenarioCompletion[]>([]);
  const [trainingProgress, setTrainingProgress] = useState<Record<Skill, TrainingProgress>>(
    {} as Record<Skill, TrainingProgress>,
  );
  const [weekTaskCompletions, setWeekTaskCompletions] = useState<WeekTaskCompletion[]>([]);
  const [pulseCheckIns, setPulseCheckIns] = useState<PulseCheckIn[]>([]);
  const [stageProgress, setStageProgress] = useState<Record<string, StageProgress>>({});
  const [consecutiveActiveDays, setConsecutiveActiveDays] = useState(0);
  const [lastActiveDate, setLastActiveDate] = useState('');
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  const [badgeUnlockDates, setBadgeUnlockDates] = useState<Record<string, string>>({});
  const [arenaStats, setArenaStats] = useState<ArenaStats>(DEFAULT_ARENA_STATS);
  const [reflectionNotes, setReflectionNotes] = useState<ReflectionNote[]>([]);
  const [helpFavorites, setHelpFavorites] = useState<string[]>([]);
  const [helpHistory, setHelpHistory] = useState<string[]>([]);
  const [helpFeedback, setHelpFeedback] = useState<Record<string, 'up' | 'down'>>({});
  const [taskOutcomes, setTaskOutcomes] = useState<TaskOutcome[]>([]);
  const [weeklyRecapsSeen, setWeeklyRecapsSeen] = useState<string[]>([]);
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);

  // -- Per-user data isolation ------------------------------------------------
  const { user, loading: authLoading } = useAuth();
  const lastRestoredUserRef = useRef<string | null | undefined>(undefined);

  // Reusable: read all data from generic AsyncStorage keys into state
  async function hydrateFromStorage() {
    const [
      storedProfile,
      storedOnboarding,
      storedCompletions,
      storedTasks,
      storedWeekPlan,
      storedSkillXP,
      storedScenarioCompletions,
      storedTrainingProgress,
      storedWeekTaskCompletions,
      storedPulseCheckIns,
      storedStageProgress,
      storedComboState,
      storedUnlockedBadges,
      storedBadgeUnlockDates,
      storedArenaStats,
      storedReflectionNotes,
      storedHelpFavorites,
      storedHelpHistory,
      storedHelpFeedback,
      storedTaskOutcomes,
      storedWeeklyRecapsSeen,
      storedJournalEntries,
    ] = await Promise.all([
      load<UserProfile>(KEYS.PROFILE),
      load<OnboardingState>(KEYS.ONBOARDING),
      load<Completion[]>(KEYS.COMPLETIONS),
      load<TaskCompletion[]>(KEYS.TASKS),
      load<WeekPlan>(KEYS.WEEK_PLAN),
      load<Record<Skill, SkillProgress>>(KEYS.SKILL_XP),
      load<ScenarioCompletion[]>(KEYS.SCENARIO_COMPLETIONS),
      load<Record<Skill, TrainingProgress>>(KEYS.TRAINING_PROGRESS),
      load<WeekTaskCompletion[]>(KEYS.WEEK_TASK_COMPLETIONS),
      load<PulseCheckIn[]>(KEYS.PULSE_CHECKINS),
      load<Record<string, StageProgress>>(KEYS.STAGE_PROGRESS),
      load<{ consecutiveDays: number; lastActiveDate: string }>(KEYS.COMBO_STATE),
      load<string[]>(KEYS.UNLOCKED_BADGES),
      load<Record<string, string>>(KEYS.BADGE_UNLOCK_DATES),
      load<ArenaStats>(KEYS.ARENA_STATS),
      load<ReflectionNote[]>(KEYS.REFLECTION_NOTES),
      load<string[]>(KEYS.HELP_FAVORITES),
      load<string[]>(KEYS.HELP_HISTORY),
      load<Record<string, 'up' | 'down'>>(KEYS.HELP_FEEDBACK),
      load<TaskOutcome[]>(KEYS.TASK_OUTCOMES),
      load<string[]>(KEYS.WEEKLY_RECAPS_SEEN),
      load<JournalEntry[]>(KEYS.JOURNAL_ENTRIES),
    ]);

    setProfile(storedProfile);
    setOnboarding(storedOnboarding);
    setCompletions(storedCompletions || []);
    setTaskCompletions(storedTasks || []);
    setWeekPlan(storedWeekPlan);
    setSkillXP(storedSkillXP || ({} as Record<Skill, SkillProgress>));
    setScenarioCompletions(storedScenarioCompletions || []);
    setTrainingProgress(storedTrainingProgress || ({} as Record<Skill, TrainingProgress>));
    setWeekTaskCompletions(storedWeekTaskCompletions || []);
    setPulseCheckIns(storedPulseCheckIns || []);
    setStageProgress(storedStageProgress || {});
    if (storedComboState) {
      setConsecutiveActiveDays(storedComboState.consecutiveDays);
      setLastActiveDate(storedComboState.lastActiveDate);
    } else {
      setConsecutiveActiveDays(0);
      setLastActiveDate('');
    }
    setUnlockedBadges(storedUnlockedBadges || []);
    setBadgeUnlockDates(storedBadgeUnlockDates || {});
    setArenaStats(storedArenaStats || DEFAULT_ARENA_STATS);
    setReflectionNotes(storedReflectionNotes || []);
    setHelpFavorites(storedHelpFavorites || []);
    setHelpHistory(storedHelpHistory || []);
    setHelpFeedback(storedHelpFeedback || {});
    setTaskOutcomes(storedTaskOutcomes || []);
    setWeeklyRecapsSeen(storedWeeklyRecapsSeen || []);
    setJournalEntries(storedJournalEntries || []);
  }

  // Hydrate all state from AsyncStorage on mount
  useEffect(() => {
    hydrateFromStorage().then(() => setHydrated(true));
  }, []);

  // Save current in-memory state as backup for given user
  async function saveForUserFn(userId: string): Promise<void> {
    try {
      const blob: Record<string, string> = {};

      // Serialize all store state directly from memory (not from AsyncStorage)
      if (profile) blob[KEYS.PROFILE] = JSON.stringify(profile);
      if (onboarding) blob[KEYS.ONBOARDING] = JSON.stringify(onboarding);
      if (completions.length > 0) blob[KEYS.COMPLETIONS] = JSON.stringify(completions);
      if (taskCompletions.length > 0) blob[KEYS.TASKS] = JSON.stringify(taskCompletions);
      if (weekPlan) blob[KEYS.WEEK_PLAN] = JSON.stringify(weekPlan);
      if (Object.keys(skillXP).length > 0) blob[KEYS.SKILL_XP] = JSON.stringify(skillXP);
      if (scenarioCompletions.length > 0) blob[KEYS.SCENARIO_COMPLETIONS] = JSON.stringify(scenarioCompletions);
      if (Object.keys(trainingProgress).length > 0) blob[KEYS.TRAINING_PROGRESS] = JSON.stringify(trainingProgress);
      if (weekTaskCompletions.length > 0) blob[KEYS.WEEK_TASK_COMPLETIONS] = JSON.stringify(weekTaskCompletions);
      if (pulseCheckIns.length > 0) blob[KEYS.PULSE_CHECKINS] = JSON.stringify(pulseCheckIns);
      if (Object.keys(stageProgress).length > 0) blob[KEYS.STAGE_PROGRESS] = JSON.stringify(stageProgress);
      if (consecutiveActiveDays > 0 || lastActiveDate) {
        blob[KEYS.COMBO_STATE] = JSON.stringify({ consecutiveDays: consecutiveActiveDays, lastActiveDate });
      }
      if (unlockedBadges.length > 0) blob[KEYS.UNLOCKED_BADGES] = JSON.stringify(unlockedBadges);
      if (Object.keys(badgeUnlockDates).length > 0) blob[KEYS.BADGE_UNLOCK_DATES] = JSON.stringify(badgeUnlockDates);
      blob[KEYS.ARENA_STATS] = JSON.stringify(arenaStats);
      if (reflectionNotes.length > 0) blob[KEYS.REFLECTION_NOTES] = JSON.stringify(reflectionNotes);
      if (helpFavorites.length > 0) blob[KEYS.HELP_FAVORITES] = JSON.stringify(helpFavorites);
      if (helpHistory.length > 0) blob[KEYS.HELP_HISTORY] = JSON.stringify(helpHistory);
      if (Object.keys(helpFeedback).length > 0) blob[KEYS.HELP_FEEDBACK] = JSON.stringify(helpFeedback);
      if (taskOutcomes.length > 0) blob[KEYS.TASK_OUTCOMES] = JSON.stringify(taskOutcomes);
      if (weeklyRecapsSeen.length > 0) blob[KEYS.WEEKLY_RECAPS_SEEN] = JSON.stringify(weeklyRecapsSeen);
      if (journalEntries.length > 0) blob[KEYS.JOURNAL_ENTRIES] = JSON.stringify(journalEntries);

      // Also grab non-store keys from AsyncStorage (gamification, notifications, etc.)
      const allAsyncKeys = await AsyncStorage.getAllKeys();
      const storeKeySet = new Set(Object.values(KEYS) as string[]);
      const extraKeys = (allAsyncKeys as string[]).filter(
        (k) => k.startsWith('vc-') && !k.startsWith('vc-userdata-') &&
          k !== 'vc-current-user-id' && !storeKeySet.has(k),
      );
      if (extraKeys.length > 0) {
        const extraPairs = await AsyncStorage.multiGet(extraKeys);
        extraPairs.forEach(([key, value]) => {
          if (value) blob[key] = value;
        });
      }

      console.log('[store] saveForUser', userId, '→', Object.keys(blob).length, 'keys, has profile:', !!blob[KEYS.PROFILE]);
      await AsyncStorage.setItem(`vc-userdata-${userId}`, JSON.stringify(blob));
    } catch (e) {
      console.error('[store] saveForUser error:', e);
    }
  }

  // Explicit user-data restore: called from login handler BEFORE navigating.
  // This ensures data swap is complete before the UI changes.
  async function restoreUserDataFn(userId: string): Promise<{ hasProfile: boolean }> {
    // Set ref IMMEDIATELY to prevent the fallback useEffect from racing us.
    // Without this, the effect can start its own swap while we're mid-await.
    lastRestoredUserRef.current = userId;

    const marker = await AsyncStorage.getItem('vc-current-user-id');
    console.log('[store] restoreUserData:', userId.slice(0, 8), 'marker:', marker?.slice(0, 8) ?? 'null');

    if (marker === userId) {
      // Data already belongs to this user — no swap needed
      console.log('[store] restoreUserData: marker matches');
      const profileData = await load<UserProfile>(KEYS.PROFILE);
      return { hasProfile: !!profileData };
    }

    if (!marker) {
      // No marker — check if there's a backup for this user (e.g., after local data reset)
      console.log('[store] restoreUserData: no marker, checking backup');
      await AsyncStorage.setItem('vc-current-user-id', userId);
      const raw = await AsyncStorage.getItem(`vc-userdata-${userId}`);
      if (raw) {
        const blob: Record<string, string> = JSON.parse(raw);
        const entries = Object.entries(blob);
        console.log('[store] restoreUserData: found backup with', entries.length, 'keys');
        if (entries.length > 0) {
          await AsyncStorage.multiSet(entries);
        }
        await hydrateFromStorage();
      }
      const profileData = await load<UserProfile>(KEYS.PROFILE);
      return { hasProfile: !!profileData };
    }

    // marker !== userId — different user! Save old, restore new.
    console.log('[store] restoreUserData: swapping from', marker.slice(0, 8), 'to', userId.slice(0, 8));

    // 1. Save current in-memory state for the old user
    await saveForUserFn(marker);

    // 2. Clear regular keys (keep backups + marker)
    const allKeys = await AsyncStorage.getAllKeys();
    const toClear = (allKeys as string[]).filter(
      (k) =>
        k.startsWith('vc-') &&
        !k.startsWith('vc-userdata-') &&
        k !== 'vc-current-user-id' &&
        k !== 'vc-secure-store-migrated',
    );
    if (toClear.length > 0) {
      await AsyncStorage.multiRemove(toClear);
    }

    // 3. Restore backup for new user
    const raw = await AsyncStorage.getItem(`vc-userdata-${userId}`);
    const blob: Record<string, string> = raw ? JSON.parse(raw) : {};
    const entries = Object.entries(blob);
    console.log('[store] restoreUserData: restored', entries.length, 'keys');
    if (entries.length > 0) {
      await AsyncStorage.multiSet(entries);
    }

    // 4. Update marker + re-hydrate
    await AsyncStorage.setItem('vc-current-user-id', userId);
    await hydrateFromStorage();

    const profileData = await load<UserProfile>(KEYS.PROFILE);
    return { hasProfile: !!profileData };
  }

  // Per-user data isolation: fallback for app startup when a session already exists.
  // Login-time swaps are handled explicitly by restoreUserData above.
  useEffect(() => {
    if (!hydrated || authLoading) return;

    const uid = user?.id ?? null;

    // Skip if already handled this user (or null)
    if (lastRestoredUserRef.current === uid) return;
    lastRestoredUserRef.current = uid;

    if (!uid) return; // Logged out, nothing to do

    (async () => {
      try {
        const marker = await AsyncStorage.getItem('vc-current-user-id');
        console.log('[store] restore: uid=', uid.slice(0, 8), 'marker=', marker?.slice(0, 8) ?? 'null');

        if (marker === uid) {
          console.log('[store] restore: marker matches, data is correct');
          return;
        }

        if (!marker) {
          // No marker — check if there's a backup (e.g., after local data reset)
          console.log('[store] restore: no marker, checking backup for user');
          await AsyncStorage.setItem('vc-current-user-id', uid);
          const raw = await AsyncStorage.getItem(`vc-userdata-${uid}`);
          if (raw) {
            const blob: Record<string, string> = JSON.parse(raw);
            const entries = Object.entries(blob);
            console.log('[store] restore: found backup with', entries.length, 'keys');
            if (entries.length > 0) {
              await AsyncStorage.multiSet(entries);
            }
            await hydrateFromStorage();
          }
          return;
        }

        // marker !== uid → Different user! Save old user's data, restore new user's.
        console.log('[store] restore: different user, swapping data');

        // 1. Save current data as backup for the old user (safety net)
        const existingBackup = await AsyncStorage.getItem(`vc-userdata-${marker}`);
        if (!existingBackup) {
          // No backup from logout handler → save from AsyncStorage as fallback
          const allKeys = await AsyncStorage.getAllKeys();
          const vcKeys = (allKeys as string[]).filter(
            (k) => k.startsWith('vc-') && !k.startsWith('vc-userdata-') &&
              k !== 'vc-current-user-id' && k !== 'vc-secure-store-migrated',
          );
          if (vcKeys.length > 0) {
            const pairs = await AsyncStorage.multiGet(vcKeys);
            const blob: Record<string, string> = {};
            pairs.forEach(([key, value]) => { if (value) blob[key] = value; });
            if (Object.keys(blob).length > 0) {
              await AsyncStorage.setItem(`vc-userdata-${marker}`, JSON.stringify(blob));
              console.log('[store] restore: saved', Object.keys(blob).length, 'keys for old user (fallback)');
            }
          }
        }

        // 2. Clear current data
        const allKeys = await AsyncStorage.getAllKeys();
        const toClear = (allKeys as string[]).filter(
          (k) =>
            k.startsWith('vc-') &&
            !k.startsWith('vc-userdata-') &&
            k !== 'vc-secure-store-migrated' &&
            k !== 'vc-current-user-id',
        );
        if (toClear.length > 0) {
          await AsyncStorage.multiRemove(toClear);
        }

        // 3. Restore backup for new user
        const raw = await AsyncStorage.getItem(`vc-userdata-${uid}`);
        const blob: Record<string, string> = raw ? JSON.parse(raw) : {};
        const entries = Object.entries(blob);
        console.log('[store] restore: backup for new user has', entries.length, 'keys');

        if (entries.length > 0) {
          await AsyncStorage.multiSet(entries);
        }

        // 4. Update marker and re-hydrate
        await AsyncStorage.setItem('vc-current-user-id', uid);
        await hydrateFromStorage();
      } catch (e) {
        console.error('[store] restore for user error:', e);
      }
    })();
  }, [hydrated, authLoading, user?.id]);

  function saveProfileFn(p: UserProfile) {
    setProfile(p);
    save(KEYS.PROFILE, p);
  }

  function saveOnboardingFn(o: OnboardingState) {
    setOnboarding(o);
    save(KEYS.ONBOARDING, o);
  }

  function addCompletionFn(c: {
    challengeId: string;
    skill: Skill;
    dateISO: string;
    status?: CompletionStatus;
  }) {
    const newComp: Completion = { ...c };
    const updated = [...completions, newComp];
    setCompletions(updated);
    save(KEYS.COMPLETIONS, updated);

    const xpGain = c.status === 'Gelukt' ? 2 : c.status === 'Deels' ? 1 : 0;
    const current = skillXP[c.skill] || { xp: 0, level: 1, lastUpdated: '' };
    const newXP = current.xp + xpGain;
    const newLevel = getCurrentLevel(newXP);
    const updatedXP = {
      ...skillXP,
      [c.skill]: { xp: newXP, level: newLevel, lastUpdated: new Date().toISOString() },
    };
    setSkillXP(updatedXP);
    save(KEYS.SKILL_XP, updatedXP);
  }

  function toggleTaskFn(taskId: string) {
    const existing = taskCompletions.find((t) => t.taskId === taskId);
    let updated: TaskCompletion[];
    if (existing) {
      updated = taskCompletions.filter((t) => t.taskId !== taskId);
    } else {
      updated = [...taskCompletions, { taskId, dateISO: new Date().toISOString() }];
    }
    setTaskCompletions(updated);
    save(KEYS.TASKS, updated);
  }

  function isTaskDoneFn(taskId: string): boolean {
    return taskCompletions.some((t) => t.taskId === taskId);
  }

  function getTodayChallengeFromPlanFn(): string | undefined {
    if (!weekPlan) return undefined;
    const today = getTodayKey();
    const match = weekPlan.days.find((d) => d.date === today);
    return match?.challengeId;
  }

  function swapTodayChallengeFn() {
    if (!weekPlan || !profile || !onboarding) return;
    const today = getTodayKey();
    const dayIndex = weekPlan.days.findIndex((d) => d.date === today);
    if (dayIndex === -1) return;

    const currentId = weekPlan.days[dayIndex].challengeId;
    const newId = pickId(profile.ageGroup, weekPlan.skill, currentId);
    if (!newId) return;

    const updatedDays = [...weekPlan.days];
    updatedDays[dayIndex] = { ...updatedDays[dayIndex], challengeId: newId };
    const updatedPlan = { ...weekPlan, days: updatedDays };
    setWeekPlan(updatedPlan);
    save(KEYS.WEEK_PLAN, updatedPlan);
  }

  function startWeekPlanFn(skill: Skill) {
    if (!profile) return;
    const weekKey = getWeekKey();
    const days: WeekPlan['days'] = [];
    const startDate = new Date(weekKey);

    for (let i = 0; i < 5; i++) {
      const d = new Date(startDate);
      d.setDate(d.getDate() + i);
      const dateKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const cId = pickId(profile.ageGroup, skill);
      if (cId) days.push({ date: dateKey, challengeId: cId });
    }

    const scenarioDate = new Date(startDate);
    scenarioDate.setDate(scenarioDate.getDate() + 4);
    const scenarioKey = `${scenarioDate.getFullYear()}-${String(scenarioDate.getMonth() + 1).padStart(2, '0')}-${String(scenarioDate.getDate()).padStart(2, '0')}`;

    const plan: WeekPlan = { skill, weekKey, days, scenarioDay: scenarioKey };
    setWeekPlan(plan);
    save(KEYS.WEEK_PLAN, plan);
  }

  function addScenarioCompletionFn(completion: ScenarioCompletion) {
    const updated = [...scenarioCompletions, completion];
    setScenarioCompletions(updated);
    save(KEYS.SCENARIO_COMPLETIONS, updated);
  }

  function getTrainingProgressFn(skill: Skill): TrainingProgress {
    return (
      trainingProgress[skill] || {
        skill,
        completedItems: [],
        correctAnswers: 0,
        totalAttempts: 0,
        lastItemId: null,
        xpEarned: 0,
      }
    );
  }

  function markTrainingItemCompleteFn(skill: Skill, itemId: string, isCorrect?: boolean) {
    const current = getTrainingProgressFn(skill);

    if (current.completedItems.includes(itemId)) return; // Already done

    const updated: TrainingProgress = {
      ...current,
      completedItems: [...current.completedItems, itemId],
      correctAnswers: current.correctAnswers + (isCorrect ? 1 : 0),
      totalAttempts: current.totalAttempts + (isCorrect !== undefined ? 1 : 0),
      lastItemId: itemId,
    };

    const allProgress = { ...trainingProgress, [skill]: updated };
    setTrainingProgress(allProgress);
    save(KEYS.TRAINING_PROGRESS, allProgress);
  }

  function resetTrainingFn(skill: Skill) {
    const allProgress = { ...trainingProgress };
    delete allProgress[skill];
    setTrainingProgress(allProgress);
    save(KEYS.TRAINING_PROGRESS, allProgress);
  }

  // -- Weektaken ------------------------------------------------------------
  function completeWeekTaskFn(taskId: string, weekKey: string, points: number) {
    setWeekTaskCompletions((prev) => {
      if (prev.some((c) => c.taskId === taskId && c.weekKey === weekKey)) return prev;
      const updated = [...prev, { taskId, weekKey, completedAt: new Date().toISOString(), points }];
      save(KEYS.WEEK_TASK_COMPLETIONS, updated);
      return updated;
    });
  }

  function undoWeekTaskFn(taskId: string, weekKey: string) {
    setWeekTaskCompletions((prev) => {
      const updated = prev.filter((c) => !(c.taskId === taskId && c.weekKey === weekKey));
      save(KEYS.WEEK_TASK_COMPLETIONS, updated);
      return updated;
    });
  }

  function isWeekTaskDoneFn(taskId: string, weekKey: string): boolean {
    return weekTaskCompletions.some((c) => c.taskId === taskId && c.weekKey === weekKey);
  }

  function getWeekTasksDoneFn(weekKey: string): WeekTaskCompletion[] {
    return weekTaskCompletions.filter((c) => c.weekKey === weekKey);
  }

  // -- Pulse check-in -------------------------------------------------------
  function addPulseCheckInFn(checkIn: PulseCheckIn) {
    // Één check-in per dag
    const updated = [
      ...pulseCheckIns.filter((c) => c.date !== checkIn.date),
      checkIn,
    ];
    setPulseCheckIns(updated);
    save(KEYS.PULSE_CHECKINS, updated);
  }

  function getTodayPulseFn(): PulseCheckIn | undefined {
    return pulseCheckIns.find((c) => c.date === getTodayKey());
  }

  function getPulseStatsFn(): PulseStats {
    const total = pulseCheckIns.length;
    const perSkill: Partial<Record<Skill, number>> = {};

    // We kunnen de skill niet opslaan in PulseCheckIn zonder de vraag te kennen,
    // maar we berekenen streak op basis van datums
    const sortedDates = [...new Set(pulseCheckIns.map((c) => c.date))].sort();

    let currentStreak = 0;
    let longestStreak = 0;
    let streak = 0;
    const today = getTodayKey();

    for (let i = sortedDates.length - 1; i >= 0; i--) {
      const date = sortedDates[i];
      const prev = sortedDates[i - 1];
      const diffDays = prev
        ? (new Date(date).getTime() - new Date(prev).getTime()) / (1000 * 60 * 60 * 24)
        : null;

      if (i === sortedDates.length - 1) {
        // Start streak alleen als laatste check-in vandaag of gisteren was
        const diffFromToday = (new Date(today).getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24);
        if (diffFromToday <= 1) {
          streak = 1;
          currentStreak = 1;
        }
      } else if (diffDays === 1) {
        streak++;
        if (currentStreak > 0) currentStreak = streak;
      } else {
        if (streak > longestStreak) longestStreak = streak;
        streak = 1;
        currentStreak = 0;
      }
    }
    if (streak > longestStreak) longestStreak = streak;

    return {
      totalCheckIns: total,
      currentStreak,
      longestStreak,
      perSkill,
      lastCheckIn: sortedDates[sortedDates.length - 1],
    };
  }

  // -- Reflection notes -------------------------------------------------------
  function addReflectionNoteFn(note: ReflectionNote) {
    setReflectionNotes((prev) => {
      const updated = [...prev, note];
      save(KEYS.REFLECTION_NOTES, updated);
      return updated;
    });
  }

  function getReflectionNotesForModuleFn(moduleId: string): ReflectionNote[] {
    return reflectionNotes.filter((n) => n.moduleId === moduleId);
  }

  function getReflectionNotesForSkillFn(skill: string): ReflectionNote[] {
    return reflectionNotes.filter((n) => n.skill === skill);
  }

  // -- Help favorites --------------------------------------------------------
  function toggleHelpFavoriteFn(situationId: string) {
    setHelpFavorites((prev) => {
      const updated = prev.includes(situationId)
        ? prev.filter((id) => id !== situationId)
        : [...prev, situationId];
      save(KEYS.HELP_FAVORITES, updated);
      return updated;
    });
  }

  function isHelpFavoriteFn(situationId: string): boolean {
    return helpFavorites.includes(situationId);
  }

  // -- Help history & feedback ------------------------------------------------
  function addHelpHistoryFn(situationId: string) {
    setHelpHistory((prev) => {
      const filtered = prev.filter((id) => id !== situationId);
      const updated = [situationId, ...filtered].slice(0, 10);
      save(KEYS.HELP_HISTORY, updated);
      return updated;
    });
  }

  function setHelpFeedbackFn(situationId: string, feedback: 'up' | 'down') {
    setHelpFeedback((prev) => {
      const updated = { ...prev, [situationId]: feedback };
      save(KEYS.HELP_FEEDBACK, updated);
      return updated;
    });
  }

  // -- Task outcomes ("Hoe ging het?") ----------------------------------------
  function addTaskOutcomeFn(outcome: TaskOutcome) {
    setTaskOutcomes((prev) => {
      const isNew = !prev.some(
        (o) => o.taskId === outcome.taskId && o.weekKey === outcome.weekKey,
      );
      // Vervang bestaande outcome voor dezelfde taak+week
      const filtered = prev.filter(
        (o) => !(o.taskId === outcome.taskId && o.weekKey === outcome.weekKey),
      );
      const updated = [...filtered, outcome];
      save(KEYS.TASK_OUTCOMES, updated);

      // +2 XP voor eerlijkheid (alleen bij eerste keer)
      if (isNew && outcome.skill) {
        setSkillXP((prevXP) => {
          const current = prevXP[outcome.skill!] || { xp: 0, level: 1, lastUpdated: '' };
          const newXP = current.xp + 2;
          const newLevel = getCurrentLevel(newXP);
          const updatedXP = {
            ...prevXP,
            [outcome.skill!]: { xp: newXP, level: newLevel, lastUpdated: new Date().toISOString() },
          };
          save(KEYS.SKILL_XP, updatedXP);
          return updatedXP;
        });
      }

      return updated;
    });
  }

  function getTaskOutcomeFn(taskId: string, weekKey: string): TaskOutcome | undefined {
    return taskOutcomes.find((o) => o.taskId === taskId && o.weekKey === weekKey);
  }

  function getOutcomesForWeekFn(weekKey: string): TaskOutcome[] {
    return taskOutcomes.filter((o) => o.weekKey === weekKey);
  }

  // -- Weekly recap seen tracking ----------------------------------------
  function markRecapSeenFn(weekKey: string) {
    setWeeklyRecapsSeen((prev) => {
      if (prev.includes(weekKey)) return prev;
      const updated = [...prev, weekKey];
      save(KEYS.WEEKLY_RECAPS_SEEN, updated);
      return updated;
    });
  }

  function isRecapSeenFn(weekKey: string): boolean {
    return weeklyRecapsSeen.includes(weekKey);
  }

  // -- Journal (Vader Dagboek) ----------------------------------------
  function addJournalEntryFn(entry: JournalEntry) {
    setJournalEntries((prev) => {
      const updated = [...prev, entry];
      save(KEYS.JOURNAL_ENTRIES, updated);
      // +5 XP voor dagboek entry
      if (entry.skill) {
        setSkillXP((prevXP) => {
          const current = prevXP[entry.skill!] || { xp: 0, level: 1, lastUpdated: '' };
          const newXP = current.xp + 5;
          const newLevel = getCurrentLevel(newXP);
          const updatedXP = { ...prevXP, [entry.skill!]: { xp: newXP, level: newLevel, lastUpdated: new Date().toISOString() } };
          save(KEYS.SKILL_XP, updatedXP);
          return updatedXP;
        });
      }
      return updated;
    });
  }

  function getJournalEntriesForDateFn(date: string): JournalEntry[] {
    return journalEntries.filter((e) => e.date === date);
  }

  // -- Stage progress (Vader Missies) ----------------------------------------
  function completeStageFn(moduleId: string, stageId: string, xpEarned: number, skill: Skill, totalStages: number) {
    setStageProgress((prev) => {
      const current = prev[moduleId] ?? {
        moduleId,
        completedStageIds: [],
        currentStageIndex: 0,
        quizCorrect: 0,
        quizTotal: 0,
        startedAt: new Date().toISOString(),
      };
      if (current.completedStageIds.includes(stageId)) return prev;
      const newCompletedIds = [...current.completedStageIds, stageId];
      const isModuleComplete = newCompletedIds.length >= totalStages;
      const updated = {
        ...prev,
        [moduleId]: {
          ...current,
          completedStageIds: newCompletedIds,
          currentStageIndex: newCompletedIds.length,
          ...(isModuleComplete ? { completedAt: new Date().toISOString() } : {}),
        },
      };
      save(KEYS.STAGE_PROGRESS, updated);
      return updated;
    });

    // Add XP to skill (functional setState to avoid stale closure)
    setSkillXP((prev) => {
      const currentXP = prev[skill] || { xp: 0, level: 1, lastUpdated: '' };
      const newXP = currentXP.xp + xpEarned;
      const newLevel = getCurrentLevel(newXP);
      const updatedXP = {
        ...prev,
        [skill]: { xp: newXP, level: newLevel, lastUpdated: new Date().toISOString() },
      };
      save(KEYS.SKILL_XP, updatedXP);
      return updatedXP;
    });
  }

  function getStageProgressFn(moduleId: string): StageProgress | null {
    return stageProgress[moduleId] ?? null;
  }

  function recordActiveDayFn() {
    const today = getTodayKey();
    if (today === lastActiveDate) return; // Already recorded today

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

    const newDays = lastActiveDate === yesterdayKey ? consecutiveActiveDays + 1 : 1;
    setConsecutiveActiveDays(newDays);
    setLastActiveDate(today);
    save(KEYS.COMBO_STATE, { consecutiveDays: newDays, lastActiveDate: today });
  }

  // -- Badge tracking -------------------------------------------------------
  function unlockBadgeFn(badgeId: string): boolean {
    if (unlockedBadges.includes(badgeId)) return false;
    const now = new Date().toISOString();
    const updatedBadges = [...unlockedBadges, badgeId];
    const updatedDates = { ...badgeUnlockDates, [badgeId]: now };
    setUnlockedBadges(updatedBadges);
    setBadgeUnlockDates(updatedDates);
    save(KEYS.UNLOCKED_BADGES, updatedBadges);
    save(KEYS.BADGE_UNLOCK_DATES, updatedDates);
    return true;
  }

  function updateArenaStatsFn(update: Partial<ArenaStats>) {
    setArenaStats((prev) => {
      const updated = { ...prev, ...update };
      // Merge skillsQuizzed arrays without duplicates
      if (update.skillsQuizzed) {
        updated.skillsQuizzed = [...new Set([...prev.skillsQuizzed, ...update.skillsQuizzed])];
      }
      save(KEYS.ARENA_STATS, updated);
      return updated;
    });
  }

  function awardBonusXPFn(amount: number, skill: Skill) {
    setSkillXP((prev) => {
      const current = prev[skill] || { xp: 0, level: 1, lastUpdated: '' };
      const newXP = current.xp + amount;
      const newLevel = getCurrentLevel(newXP);
      const updatedXP = {
        ...prev,
        [skill]: { xp: newXP, level: newLevel, lastUpdated: new Date().toISOString() },
      };
      save(KEYS.SKILL_XP, updatedXP);
      return updatedXP;
    });
  }

  async function clearAllFn(): Promise<void> {
    // Reset in-memory state immediately
    setProfile(null);
    setOnboarding(null);
    setCompletions([]);
    setTaskCompletions([]);
    setWeekPlan(null);
    setSkillXP({} as Record<Skill, SkillProgress>);
    setScenarioCompletions([]);
    setTrainingProgress({} as Record<Skill, TrainingProgress>);
    setWeekTaskCompletions([]);
    setPulseCheckIns([]);
    setStageProgress({});
    setConsecutiveActiveDays(0);
    setLastActiveDate('');
    setUnlockedBadges([]);
    setBadgeUnlockDates({});
    setArenaStats(DEFAULT_ARENA_STATS);
    setReflectionNotes([]);
    setHelpFavorites([]);
    setHelpHistory([]);
    setHelpFeedback({});
    setTaskOutcomes([]);
    setWeeklyRecapsSeen([]);
    setJournalEntries([]);

    // Await all AsyncStorage removals (prevents race with restore effect)
    const skills = ['Aanwezigheid', 'Emotiecoaching', 'Zelfregulatie', 'Grenzen', 'Autonomie', 'Herstel', 'Verbinding', 'Reflectie'];
    const keysToRemove = [
      ...Object.values(KEYS),
      'vc-gamification',
      'vc-notifications',
      'vc-week-tasks-cache',
      ...skills.map((s) => `vc-completed-modules-${s}`),
    ];
    await AsyncStorage.multiRemove(keysToRemove).catch(() => {});
  }

  // Count number of unique days this week with completed tasks
  const weekCount = (() => {
    const now = new Date();
    const currentDay = now.getDay();
    const diff = now.getDate() - currentDay + (currentDay === 0 ? -6 : 1);
    const monday = new Date(now.getFullYear(), now.getMonth(), diff);
    monday.setHours(0, 0, 0, 0);
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    sunday.setHours(23, 59, 59, 999);

    const uniqueDays = new Set<string>();
    taskCompletions.forEach((tc) => {
      if (!tc?.dateISO) return;
      const taskDate = new Date(tc.dateISO);
      if (taskDate >= monday && taskDate <= sunday) {
        uniqueDays.add(tc.dateISO.split('T')[0]);
      }
    });

    return uniqueDays.size;
  })();

  const value: StoreState = {
    hydrated,
    profile,
    onboarding,
    completions,
    taskCompletions,
    weekPlan,
    skillXP,
    weekCount,
    scenarioCompletions,
    trainingProgress,
    weekTaskCompletions,
    completeWeekTask: completeWeekTaskFn,
    undoWeekTask: undoWeekTaskFn,
    isWeekTaskDone: isWeekTaskDoneFn,
    getWeekTasksDone: getWeekTasksDoneFn,
    stageProgress,
    completeStage: completeStageFn,
    getStageProgress: getStageProgressFn,
    awardBonusXP: awardBonusXPFn,
    consecutiveActiveDays,
    lastActiveDate,
    recordActiveDay: recordActiveDayFn,
    unlockedBadges,
    badgeUnlockDates,
    unlockBadge: unlockBadgeFn,
    arenaStats,
    updateArenaStats: updateArenaStatsFn,
    pulseCheckIns,
    addPulseCheckIn: addPulseCheckInFn,
    getTodayPulse: getTodayPulseFn,
    getPulseStats: getPulseStatsFn,
    reflectionNotes,
    addReflectionNote: addReflectionNoteFn,
    getReflectionNotesForModule: getReflectionNotesForModuleFn,
    getReflectionNotesForSkill: getReflectionNotesForSkillFn,
    helpFavorites,
    toggleHelpFavorite: toggleHelpFavoriteFn,
    isHelpFavorite: isHelpFavoriteFn,
    helpHistory,
    addHelpHistory: addHelpHistoryFn,
    helpFeedback,
    setHelpFeedback: setHelpFeedbackFn,
    taskOutcomes,
    addTaskOutcome: addTaskOutcomeFn,
    getTaskOutcome: getTaskOutcomeFn,
    getOutcomesForWeek: getOutcomesForWeekFn,
    journalEntries,
    addJournalEntry: addJournalEntryFn,
    getJournalEntriesForDate: getJournalEntriesForDateFn,
    weeklyRecapsSeen,
    markRecapSeen: markRecapSeenFn,
    isRecapSeen: isRecapSeenFn,
    saveProfile: saveProfileFn,
    saveOnboarding: saveOnboardingFn,
    addCompletion: addCompletionFn,
    toggleTask: toggleTaskFn,
    isTaskDone: isTaskDoneFn,
    getTodayChallengeFromPlan: getTodayChallengeFromPlanFn,
    swapTodayChallenge: swapTodayChallengeFn,
    startWeekPlan: startWeekPlanFn,
    addScenarioCompletion: addScenarioCompletionFn,
    getTrainingProgress: getTrainingProgressFn,
    markTrainingItemComplete: markTrainingItemCompleteFn,
    resetTraining: resetTrainingFn,
    saveForUser: saveForUserFn,
    restoreUserData: restoreUserDataFn,
    clearAll: clearAllFn,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}
