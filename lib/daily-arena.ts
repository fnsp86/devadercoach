import type { TrainingItem, Skill } from './types';
import { ALL_SKILLS } from './skills';
import { getTrainingForSkill } from './training-content';

// ── Seeded random (same pattern as generateWeeklyChallenges) ──

function createRng(seed: string) {
  let s = 0;
  for (let i = 0; i < seed.length; i++) {
    s = ((s << 5) - s) + seed.charCodeAt(i);
    s |= 0;
  }
  s = Math.abs(s) || 1;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Daily Questions ──

const DAILY_QUESTION_COUNT = 5;

/**
 * Generate the 5 daily arena questions for a given date.
 * Same date = same questions for all users (seeded by date string).
 * Questions are drawn from all 8 skills, quiz-type only.
 */
export function generateDailyQuestions(dateStr: string): TrainingItem[] {
  const rng = createRng(`daily-arena-${dateStr}`);

  // Collect all quiz-type questions from all skills
  const allQuestions: TrainingItem[] = [];
  for (const skill of ALL_SKILLS) {
    const items = getTrainingForSkill(skill);
    allQuestions.push(...items.filter((item) => item.type === 'quiz'));
  }

  // Shuffle and pick 5, ensuring at least 3 different skills
  const shuffled = shuffle(allQuestions, rng);

  const picked: TrainingItem[] = [];
  const usedSkills = new Set<Skill>();

  // First pass: pick from different skills
  for (const q of shuffled) {
    if (picked.length >= DAILY_QUESTION_COUNT) break;
    if (!usedSkills.has(q.skill) && usedSkills.size < 3) {
      picked.push(q);
      usedSkills.add(q.skill);
    }
  }

  // Second pass: fill remaining slots
  for (const q of shuffled) {
    if (picked.length >= DAILY_QUESTION_COUNT) break;
    if (!picked.includes(q)) {
      picked.push(q);
      usedSkills.add(q.skill);
    }
  }

  return picked;
}

/**
 * Get today's date string (YYYY-MM-DD) for consistent daily seeding.
 */
export function getTodayDateStr(): string {
  return new Date().toISOString().split('T')[0];
}

// ── XP calculation for timed daily arena ──

export const DAILY_ARENA_XP = {
  correct_fast: 30,    // Within 5 seconds
  correct_medium: 25,  // Within 10 seconds
  correct_slow: 20,    // Within 15 seconds
  correct_last: 15,    // Within 20 seconds
  incorrect: 5,
  timeout: 0,
} as const;

export const TIMER_SECONDS = 20;

/**
 * Calculate XP for a single daily arena answer.
 */
export function calculateDailyXP(isCorrect: boolean, timeMs: number): number {
  if (!isCorrect) return DAILY_ARENA_XP.incorrect;
  const seconds = timeMs / 1000;
  if (seconds <= 5) return DAILY_ARENA_XP.correct_fast;
  if (seconds <= 10) return DAILY_ARENA_XP.correct_medium;
  if (seconds <= 15) return DAILY_ARENA_XP.correct_slow;
  return DAILY_ARENA_XP.correct_last;
}
