import type { TrainingItem, Skill } from './types';
import { getTrainingForSkill } from './training-content';

// ── Seeded random (same as daily-arena.ts) ──

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

// ── Duel Questions ──

export const DUEL_QUESTION_COUNT = 10;

/**
 * Generate duel questions for a specific skill using a seeded random.
 * Same seed = same questions for both players.
 */
export function generateDuelQuestions(skill: Skill, questionSeed: string): TrainingItem[] {
  const rng = createRng(`skill-duel-${questionSeed}`);
  const allItems = getTrainingForSkill(skill);
  const quizItems = allItems.filter((item) => item.type === 'quiz');
  const shuffled = shuffle(quizItems, rng);
  return shuffled.slice(0, DUEL_QUESTION_COUNT);
}

/**
 * Generate a unique seed for a duel (deterministic, based on duel creation time).
 */
export function generateDuelSeed(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

// ── XP ──

export const DUEL_XP = {
  win: 50,
  lose: 15,
  draw: 30,
  perCorrect: 5,
} as const;

export function calculateDuelXP(
  myScore: number,
  opponentScore: number,
): number {
  let xp = myScore * DUEL_XP.perCorrect;
  if (myScore > opponentScore) xp += DUEL_XP.win;
  else if (myScore === opponentScore) xp += DUEL_XP.draw;
  else xp += DUEL_XP.lose;
  return xp;
}
