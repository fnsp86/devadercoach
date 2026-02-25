import type { Skill } from './types';
import { ALL_SKILLS } from './skills';
import { SKILLS } from './skills';

// ── Seeded random ──

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

// ── Challenge templates ──

interface ChallengeTemplate {
  title: (skill: string) => string;
  description: (skill: string, taskCount: number) => string;
  taskCount: number;
}

const TEMPLATES: ChallengeTemplate[] = [
  {
    title: (skill) => `${skill}-week`,
    description: (skill, n) =>
      `Doe ${n} ${skill.toLowerCase()}-taken deze week en deel hoe het ging. Wat leerde je?`,
    taskCount: 3,
  },
  {
    title: (skill) => `Meester in ${skill}`,
    description: (skill, n) =>
      `Rond ${n} taken af in ${skill.toLowerCase()} en deel je mooiste moment met de community.`,
    taskCount: 3,
  },
  {
    title: (skill) => `${skill} in actie`,
    description: (skill, n) =>
      `Pas ${skill.toLowerCase()} ${n}x toe deze week. Deel een concreet voorbeeld van wat je deed.`,
    taskCount: 2,
  },
  {
    title: () => 'Vader Allrounder',
    description: (_skill, n) =>
      `Doe ${n} taken uit minstens 2 verschillende skills. Deel welke skill je het meest verraste.`,
    taskCount: 4,
  },
  {
    title: (skill) => `${skill} doorbraak`,
    description: (skill, _n) =>
      `Focus deze week op ${skill.toLowerCase()}. Doe de bijbehorende module + minstens 2 taken en deel je inzicht.`,
    taskCount: 2,
  },
];

// ── Generator ──

export interface WeeklyCommunityChallenge {
  weekKey: string;
  title: string;
  description: string;
  skill: Skill;
  taskCount: number;
}

/**
 * Generate the weekly community challenge for a given weekKey.
 * Same weekKey = same challenge for all users (seeded).
 */
export function generateWeeklyCommunityChallenge(weekKey: string): WeeklyCommunityChallenge {
  const rng = createRng(`weekly-challenge-${weekKey}`);

  // Pick a random skill
  const skillIndex = Math.floor(rng() * ALL_SKILLS.length);
  const skill = ALL_SKILLS[skillIndex];

  // Pick a random template
  const templateIndex = Math.floor(rng() * TEMPLATES.length);
  const template = TEMPLATES[templateIndex];

  return {
    weekKey,
    title: template.title(skill),
    description: template.description(skill, template.taskCount),
    skill,
    taskCount: template.taskCount,
  };
}
