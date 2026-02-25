import type { TrainingItem, Skill, QuestionDifficulty } from './types';
import { ALL_SKILLS } from './skills';
import { getTrainingForSkill } from './training-content';

/**
 * Get all quiz questions across all skills, grouped by difficulty.
 */
function getAllQuizQuestions(): TrainingItem[] {
  const all: TrainingItem[] = [];
  for (const skill of ALL_SKILLS) {
    const items = getTrainingForSkill(skill);
    all.push(...items.filter((item) => item.type === 'quiz'));
  }
  return all;
}

/**
 * Determine difficulty tier based on current streak.
 * 0-4: basis, 5-14: gevorderd, 15+: expert
 */
export function getDifficultyForStreak(streak: number): QuestionDifficulty {
  if (streak < 5) return 'basis';
  if (streak < 15) return 'gevorderd';
  return 'expert';
}

/**
 * Pick a random quiz question that hasn't been answered yet.
 * Prefers questions matching the target difficulty, but falls back to any.
 */
export function getQuickFireQuestion(
  answeredIds: Set<string>,
  streak: number,
): TrainingItem | null {
  const all = getAllQuizQuestions();
  const targetDifficulty = getDifficultyForStreak(streak);

  // Filter out already answered
  const available = all.filter((q) => !answeredIds.has(q.id));
  if (available.length === 0) return null;

  // Prefer target difficulty
  const preferred = available.filter((q) => q.difficulty === targetDifficulty);
  const pool = preferred.length > 0 ? preferred : available;

  // Random pick
  const idx = Math.floor(Math.random() * pool.length);
  return pool[idx];
}

/**
 * XP for quickfire: 10 per correct answer + streak bonus every 5.
 */
export function calculateQuickFireXP(streak: number): number {
  const base = 10;
  const streakBonus = streak > 0 && streak % 5 === 0 ? 15 : 0;
  return base + streakBonus;
}

export const QUICKFIRE_START_LIVES = 3;
export const QUICKFIRE_MAX_LIVES = 5;
export const QUICKFIRE_BONUS_EVERY = 5; // Bonus life every N correct in a row
