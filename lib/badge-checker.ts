import { ALL_BADGES } from './gamification-types';
import type { Badge } from './gamification-types';
import type { Skill } from './types';

export interface BadgeCheckContext {
  source: 'quiz' | 'module' | 'task' | 'app_open' | 'daily_duel' | 'quickfire' | 'skill_duel';
  skill?: Skill;
  quizStreak?: number;
  quizCompleted?: boolean;
  isReread?: boolean;
  todayActivities?: string[]; // ['module', 'task', 'pulse', 'quiz']
  dailyArenaStreak?: number;
  dailyArenaCorrect?: number;
  quickFireScore?: number;
  duelScore?: number;
  duelWon?: boolean;
  totalDuelsPlayed?: number;
  totalDuelsWon?: number;
}

export interface ArenaStats {
  totalQuestionsAnswered: number;
  totalQuizzesCompleted: number;
  skillsQuizzed: string[];
  bestStreak: number;
  perfectQuizzes: number;
}

export const DEFAULT_ARENA_STATS: ArenaStats = {
  totalQuestionsAnswered: 0,
  totalQuizzesCompleted: 0,
  skillsQuizzed: [],
  bestStreak: 0,
  perfectQuizzes: 0,
};

export interface BadgeStoreSlice {
  unlockedBadges: string[];
  unlockBadge: (id: string) => boolean;
  weekTaskCompletions: { taskId: string; weekKey: string; completedAt: string; points: number }[];
  consecutiveActiveDays: number;
  arenaStats: ArenaStats;
  trainingProgress: Record<string, { completedItems: string[]; correctAnswers: number; totalAttempts: number }>;
}

export function checkAndUnlockBadges(
  store: BadgeStoreSlice,
  context: BadgeCheckContext,
  completedModuleCount?: number,
): Badge[] {
  const newlyUnlocked: Badge[] = [];

  for (const badge of ALL_BADGES) {
    if (store.unlockedBadges.includes(badge.id)) continue;

    let unlocked = false;

    switch (badge.requirement.type) {
      case 'streak':
        unlocked = store.consecutiveActiveDays >= badge.requirement.value;
        break;

      case 'tasks_completed':
        unlocked = store.weekTaskCompletions.length >= badge.requirement.value;
        break;

      case 'skill_tasks':
        if (badge.requirement.skill) {
          // We don't have per-skill task counts easily, skip for now
          // These are checked in voortgang.tsx with full task mapping
        }
        break;

      case 'weekly_challenges': {
        const tasksPerWeek: Record<string, number> = {};
        store.weekTaskCompletions.forEach((c) => {
          tasksPerWeek[c.weekKey] = (tasksPerWeek[c.weekKey] || 0) + 1;
        });
        const completedWeeks = Object.values(tasksPerWeek).filter((n) => n >= 7).length;
        unlocked = completedWeeks >= badge.requirement.value;
        break;
      }

      case 'special':
        unlocked = checkSpecialBadge(badge, store, context, completedModuleCount);
        break;
    }

    if (unlocked && store.unlockBadge(badge.id)) {
      newlyUnlocked.push(badge);
    }
  }

  return newlyUnlocked;
}

function checkSpecialBadge(
  badge: Badge,
  store: BadgeStoreSlice,
  context: BadgeCheckContext,
  completedModuleCount?: number,
): boolean {
  const { arenaStats } = store;

  switch (badge.id) {
    // Secret badges
    case 'night_owl': {
      if (context.source === 'app_open') return false;
      const hour = new Date().getHours();
      return hour >= 23 || hour < 4;
    }
    case 'early_bird': {
      if (context.source === 'app_open') return false;
      const hour = new Date().getHours();
      return hour >= 4 && hour < 7;
    }
    case 'speed_demon': {
      const today = new Date().toISOString().split('T')[0];
      const todayCount = store.weekTaskCompletions.filter((c) => c.completedAt.startsWith(today)).length;
      return todayCount >= 5;
    }
    case 'perfectionist':
      return store.consecutiveActiveDays >= 7;
    case 'comeback':
      return false; // Requires gap detection, handled separately

    // Quiz badges (old)
    case 'quiz_first':
      return arenaStats.totalQuizzesCompleted >= 1;
    case 'quiz_perfect':
      return arenaStats.perfectQuizzes >= 1;
    case 'quiz_all_skills':
      return arenaStats.skillsQuizzed.length >= 8;
    case 'quiz_streak_10':
      return (context.quizStreak ?? 0) >= 10 || arenaStats.bestStreak >= 10;

    // Arena badges (new)
    case 'arena_first':
      return arenaStats.totalQuizzesCompleted >= 1;
    case 'arena_3_skills':
      return arenaStats.skillsQuizzed.length >= 3;
    case 'arena_all_skills':
      return arenaStats.skillsQuizzed.length >= 8;
    case 'arena_perfect':
      return arenaStats.perfectQuizzes >= 1;
    case 'arena_streak_5':
      return (context.quizStreak ?? 0) >= 5 || arenaStats.bestStreak >= 5;
    case 'arena_streak_10':
      return (context.quizStreak ?? 0) >= 10 || arenaStats.bestStreak >= 10;
    case 'arena_total_50':
      return arenaStats.totalQuestionsAnswered >= 50;
    case 'arena_total_200':
      return arenaStats.totalQuestionsAnswered >= 200;

    // Daily duel badges
    case 'daily_duel_3':
      return (context.dailyArenaStreak ?? 0) >= 3;
    case 'daily_duel_7':
      return (context.dailyArenaStreak ?? 0) >= 7;
    case 'daily_duel_30':
      return (context.dailyArenaStreak ?? 0) >= 30;
    case 'daily_duel_perfect':
      return context.source === 'daily_duel' && (context.dailyArenaCorrect ?? 0) >= 5;

    // Quickfire badges
    case 'quickfire_10':
      return (context.quickFireScore ?? 0) >= 10;
    case 'quickfire_25':
      return (context.quickFireScore ?? 0) >= 25;
    case 'quickfire_50':
      return (context.quickFireScore ?? 0) >= 50;

    // Skill Duel badges
    case 'duel_first':
      return context.source === 'skill_duel' && (context.totalDuelsPlayed ?? 0) >= 1;
    case 'duel_5':
      return context.source === 'skill_duel' && (context.totalDuelsPlayed ?? 0) >= 5;
    case 'duel_win_3':
      return context.source === 'skill_duel' && (context.totalDuelsWon ?? 0) >= 3;
    case 'duel_perfect':
      return context.source === 'skill_duel' && (context.duelScore ?? 0) >= 10;

    // Learn badges (new)
    case 'learn_first':
      return (completedModuleCount ?? 0) >= 1;
    case 'learn_5':
      return (completedModuleCount ?? 0) >= 5;
    case 'learn_10':
      return (completedModuleCount ?? 0) >= 10;
    case 'learn_20':
      return (completedModuleCount ?? 0) >= 20;
    case 'learn_all':
      return (completedModuleCount ?? 0) >= 40;

    // Combo badges
    case 'combo_triple': {
      const acts = context.todayActivities ?? [];
      return acts.includes('module') && acts.includes('task') && acts.includes('pulse');
    }
    case 'combo_full_day': {
      const acts = context.todayActivities ?? [];
      return acts.includes('module') && acts.includes('task') && acts.includes('pulse') && acts.includes('quiz');
    }
    case 'combo_week':
      return store.consecutiveActiveDays >= 7; // Simplified: 7-day streak serves as proxy for combo week

    // Explorer badges
    case 'explore_reread':
      return context.isReread === true;
    case 'explore_all_skills': {
      // Check if user has started a module in each of the 8 skills
      // This is approximated via stageProgress keys
      return false; // Checked via module.tsx with full skill data
    }
    case 'explore_all_types':
      return false; // Checked via module.tsx with stage type data

    // Daily badges
    case 'daily_first':
    case 'daily_7':
    case 'daily_30':
    case 'daily_100':
      // Daily badges are tracked via dailyChallengesCompleted counter in store
      return false; // Checked via vandaag.tsx with daily quest completion data

    // Extra secret badges
    case 'weekend_warrior': {
      const day = new Date().getDay();
      return (day === 0 || day === 6) && context.source !== 'app_open';
    }
    case 'lunchbreak': {
      const h = new Date().getHours();
      return h >= 12 && h < 13 && context.source !== 'app_open';
    }
    case 'module_marathon': {
      if (context.source !== 'module') return false;
      const today = new Date().toISOString().split('T')[0];
      // Count modules completed today from weekTaskCompletions (modules log as tasks too)
      const modulesToday = store.weekTaskCompletions.filter(
        (c) => c.completedAt.startsWith(today) && c.taskId.includes('_mod_'),
      ).length;
      return modulesToday >= 3;
    }
    case 'all_5_one_week':
      return false; // Requires weekly module tracking, checked in module.tsx

    // Skill mastery badges
    default:
      if (badge.id.startsWith('master_')) {
        // Mastery badges are checked via module.tsx directly
        return false;
      }
      return false;
  }
}
