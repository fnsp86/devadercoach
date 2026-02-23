// GAMIFICATION TYPE DEFINITIONS
import type { Skill, AppDoel } from './types';
import { DOEL_SKILL_MAP } from './task-selector';

export interface XPLevel {
  level: number;
  title: string;
  minXP: number;
  maxXP: number;
  rewards: string[];
}

export const XP_LEVELS: XPLevel[] = [
  { level: 1, title: "Beginnende Vader", minXP: 0, maxXP: 100, rewards: ["Alle basismodules beschikbaar"] },
  { level: 2, title: "Bewuste Vader", minXP: 100, maxXP: 250, rewards: ["Vader Wijsheid dagelijkse quotes"] },
  { level: 3, title: "Betrokken Vader", minXP: 250, maxXP: 500, rewards: ["Weekly Challenges ontgrendeld"] },
  { level: 4, title: "Vaardige Vader", minXP: 500, maxXP: 1000, rewards: ["Pro Tips in oefeningen"] },
  { level: 5, title: "Expert Vader", minXP: 1000, maxXP: 2000, rewards: ["Challenge Mode in Arena"] },
  { level: 6, title: "Toegewijde Vader", minXP: 2000, maxXP: 3000, rewards: ["Extra thema kleuren"] },
  { level: 7, title: "Meester Vader", minXP: 3000, maxXP: 4500, rewards: ["+25% XP Bonus actief"] },
  { level: 8, title: "Veteraan Vader", minXP: 4500, maxXP: 6000, rewards: ["Expert Reflectievragen"] },
  { level: 9, title: "Elite Vader", minXP: 6000, maxXP: 8000, rewards: ["Boss Scenario's in Arena"] },
  { level: 10, title: "Legende Vader", minXP: 8000, maxXP: 10000, rewards: ["Vader Profiel deelbaar"] },
  { level: 11, title: "Grootmeester", minXP: 10000, maxXP: 12500, rewards: ["Premium Badge Frames"] },
  { level: 12, title: "Wijze Vader", minXP: 12500, maxXP: 15000, rewards: ["Custom taken plannen"] },
  { level: 13, title: "Inspirator", minXP: 15000, maxXP: 18000, rewards: ["Community functies"] },
  { level: 14, title: "Mentor", minXP: 18000, maxXP: 21000, rewards: ["Prestaties delen"] },
  { level: 15, title: "Champion", minXP: 21000, maxXP: 25000, rewards: ["Gouden badge rand"] },
  { level: 16, title: "Held", minXP: 25000, maxXP: 30000, rewards: ["Legendarische avatars"] },
  { level: 17, title: "Titan", minXP: 30000, maxXP: 36000, rewards: ["Triple XP evenementen"] },
  { level: 18, title: "Feniks", minXP: 36000, maxXP: 43000, rewards: ["Exclusieve uitdagingen"] },
  { level: 19, title: "Orakel", minXP: 43000, maxXP: 50000, rewards: ["Meester van alle skills"] },
  { level: 20, title: "Ultieme Vader", minXP: 50000, maxXP: 999999, rewards: ["Hall of Fame"] },
];

export function getLevelFromXP(xp: number): XPLevel {
  for (let i = XP_LEVELS.length - 1; i >= 0; i--) {
    if (xp >= XP_LEVELS[i].minXP) {
      return XP_LEVELS[i];
    }
  }
  return XP_LEVELS[0];
}

export function getProgressToNextLevel(xp: number): number {
  const currentLevel = getLevelFromXP(xp);
  if (currentLevel.level === 20) return 100; // Max level
  
  const progress = xp - currentLevel.minXP;
  const needed = currentLevel.maxXP - currentLevel.minXP;
  return Math.round((progress / needed) * 100);
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  emoji: string;
  category: "streak" | "skill" | "vader" | "challenge" | "secret" | "arena" | "learn" | "combo" | "explorer" | "daily";
  requirement: {
    type: "streak" | "tasks_completed" | "skill_tasks" | "weekly_challenges" | "special";
    value: number;
    skill?: string;
  };
  rarity: "common" | "rare" | "epic" | "legendary";
}

export const BADGES: Badge[] = [
  // STREAK BADGES
  { id: "streak_3", name: "Warme Start", description: "3 dagen streak", emoji: "🔥", category: "streak", requirement: { type: "streak", value: 3 }, rarity: "common" },
  { id: "streak_7", name: "Gewoonte Vormer", description: "7 dagen streak", emoji: "⚡", category: "streak", requirement: { type: "streak", value: 7 }, rarity: "common" },
  { id: "streak_14", name: "Twee Weken", description: "14 dagen streak", emoji: "💪", category: "streak", requirement: { type: "streak", value: 14 }, rarity: "rare" },
  { id: "streak_30", name: "Onbreekbaar", description: "30 dagen streak", emoji: "🛡️", category: "streak", requirement: { type: "streak", value: 30 }, rarity: "rare" },
  { id: "streak_60", name: "Doorzetter", description: "60 dagen streak", emoji: "⭐", category: "streak", requirement: { type: "streak", value: 60 }, rarity: "epic" },
  { id: "streak_100", name: "Legende", description: "100 dagen streak", emoji: "👑", category: "streak", requirement: { type: "streak", value: 100 }, rarity: "epic" },
  { id: "streak_365", name: "Titan", description: "365 dagen streak!", emoji: "🏆", category: "streak", requirement: { type: "streak", value: 365 }, rarity: "legendary" },
  
  // SKILL BADGES — per skill: 10 (starter) + 50 (expert)
  { id: "aanw_10", name: "Aandachtig", description: "10 Aanwezigheid taken", emoji: "👁️", category: "skill", requirement: { type: "skill_tasks", value: 10, skill: "Aanwezigheid" }, rarity: "common" },
  { id: "aanw_50", name: "Luisteraar", description: "50 Aanwezigheid taken", emoji: "👂", category: "skill", requirement: { type: "skill_tasks", value: 50, skill: "Aanwezigheid" }, rarity: "rare" },
  { id: "emco_10", name: "Emotie Spotter", description: "10 Emotiecoaching taken", emoji: "💗", category: "skill", requirement: { type: "skill_tasks", value: 10, skill: "Emotiecoaching" }, rarity: "common" },
  { id: "emco_50", name: "Emotie Expert", description: "50 Emotiecoaching taken", emoji: "❤️", category: "skill", requirement: { type: "skill_tasks", value: 50, skill: "Emotiecoaching" }, rarity: "rare" },
  { id: "gren_10", name: "Grensbewaker", description: "10 Grenzen taken", emoji: "🚧", category: "skill", requirement: { type: "skill_tasks", value: 10, skill: "Grenzen" }, rarity: "common" },
  { id: "gren_50", name: "Grens Meester", description: "50 Grenzen taken", emoji: "🛡️", category: "skill", requirement: { type: "skill_tasks", value: 50, skill: "Grenzen" }, rarity: "rare" },
  { id: "zelf_10", name: "Kalme Kracht", description: "10 Zelfregulatie taken", emoji: "🌊", category: "skill", requirement: { type: "skill_tasks", value: 10, skill: "Zelfregulatie" }, rarity: "common" },
  { id: "zelf_50", name: "Zelfmeester", description: "50 Zelfregulatie taken", emoji: "🧘", category: "skill", requirement: { type: "skill_tasks", value: 50, skill: "Zelfregulatie" }, rarity: "rare" },
  { id: "auto_10", name: "Ruimte Maker", description: "10 Autonomie taken", emoji: "🌱", category: "skill", requirement: { type: "skill_tasks", value: 10, skill: "Autonomie" }, rarity: "common" },
  { id: "auto_50", name: "Vrijheid Gever", description: "50 Autonomie taken", emoji: "🦅", category: "skill", requirement: { type: "skill_tasks", value: 50, skill: "Autonomie" }, rarity: "rare" },
  { id: "hers_10", name: "Brugbouwer", description: "10 Herstel taken", emoji: "🌉", category: "skill", requirement: { type: "skill_tasks", value: 10, skill: "Herstel" }, rarity: "common" },
  { id: "hers_50", name: "Herstel Held", description: "50 Herstel taken", emoji: "🔧", category: "skill", requirement: { type: "skill_tasks", value: 50, skill: "Herstel" }, rarity: "rare" },
  { id: "verb_10", name: "Verbinder", description: "10 Verbinding taken", emoji: "🤝", category: "skill", requirement: { type: "skill_tasks", value: 10, skill: "Verbinding" }, rarity: "common" },
  { id: "verb_50", name: "Hartverbinder", description: "50 Verbinding taken", emoji: "🔗", category: "skill", requirement: { type: "skill_tasks", value: 50, skill: "Verbinding" }, rarity: "rare" },
  { id: "refl_10", name: "Spiegel", description: "10 Reflectie taken", emoji: "🪞", category: "skill", requirement: { type: "skill_tasks", value: 10, skill: "Reflectie" }, rarity: "common" },
  { id: "refl_50", name: "Denker", description: "50 Reflectie taken", emoji: "🧠", category: "skill", requirement: { type: "skill_tasks", value: 50, skill: "Reflectie" }, rarity: "rare" },
  
  // VADER BADGES
  { id: "tasks_1", name: "Eerste Taak", description: "Je allereerste taak voltooid", emoji: "🎉", category: "vader", requirement: { type: "tasks_completed", value: 1 }, rarity: "common" },
  { id: "tasks_10", name: "Eerste Stappen", description: "10 taken voltooid", emoji: "👣", category: "vader", requirement: { type: "tasks_completed", value: 10 }, rarity: "common" },
  { id: "tasks_25", name: "Op Weg", description: "25 taken voltooid", emoji: "🚶", category: "vader", requirement: { type: "tasks_completed", value: 25 }, rarity: "common" },
  { id: "tasks_50", name: "Gemotiveerd", description: "50 taken voltooid", emoji: "💫", category: "vader", requirement: { type: "tasks_completed", value: 50 }, rarity: "common" },
  { id: "tasks_100", name: "Super Papa", description: "100 taken voltooid", emoji: "🦸", category: "vader", requirement: { type: "tasks_completed", value: 100 }, rarity: "rare" },
  { id: "tasks_250", name: "Dedicated Dad", description: "250 taken voltooid", emoji: "💎", category: "vader", requirement: { type: "tasks_completed", value: 250 }, rarity: "epic" },
  { id: "tasks_500", name: "Unstoppable", description: "500 taken voltooid", emoji: "🚀", category: "vader", requirement: { type: "tasks_completed", value: 500 }, rarity: "epic" },
  { id: "tasks_1000", name: "Legend", description: "1000 taken voltooid!", emoji: "🌟", category: "vader", requirement: { type: "tasks_completed", value: 1000 }, rarity: "legendary" },
  
  // CHALLENGE BADGES
  { id: "weekly_1", name: "Challenge Accepted", description: "1 weekly challenge", emoji: "✅", category: "challenge", requirement: { type: "weekly_challenges", value: 1 }, rarity: "common" },
  { id: "weekly_5", name: "Challenger", description: "5 weekly challenges", emoji: "⚔️", category: "challenge", requirement: { type: "weekly_challenges", value: 5 }, rarity: "rare" },
  { id: "weekly_10", name: "Overachiever", description: "10 weekly challenges", emoji: "🎯", category: "challenge", requirement: { type: "weekly_challenges", value: 10 }, rarity: "epic" },
  { id: "weekly_50", name: "Champion", description: "50 weekly challenges", emoji: "👑", category: "challenge", requirement: { type: "weekly_challenges", value: 50 }, rarity: "legendary" },
  
  // SECRET BADGES
  { id: "night_owl", name: "Night Owl", description: "Taak na 23:00 voltooid", emoji: "🦉", category: "secret", requirement: { type: "special", value: 1 }, rarity: "rare" },
  { id: "early_bird", name: "Early Bird", description: "Taak voor 07:00 voltooid", emoji: "🐦", category: "secret", requirement: { type: "special", value: 1 }, rarity: "rare" },
  { id: "speed_demon", name: "Speed Demon", description: "5 taken op 1 dag", emoji: "⚡", category: "secret", requirement: { type: "special", value: 1 }, rarity: "epic" },
  { id: "perfectionist", name: "Perfectionist", description: "7 dagen alle taken", emoji: "💯", category: "secret", requirement: { type: "special", value: 1 }, rarity: "legendary" },
  { id: "comeback", name: "Comeback Kid", description: "Terug na 30d afwezig", emoji: "🔄", category: "secret", requirement: { type: "special", value: 1 }, rarity: "epic" },
];

export interface DailyQuest {
  id: string;
  date: string; // YYYY-MM-DD
  description: string;
  target: number;
  progress: number;
  completed: boolean;
  reward: {
    xp: number;
    lootboxKeys: number;
  };
}

export interface WeeklyChallenge {
  id: string;
  weekStart: string; // YYYY-MM-DD (Monday)
  type: "tasks_total" | "expert_tasks" | "skill_specific" | "boss_battle";
  description: string;
  target: number;
  progress: number;
  completed: boolean;
  reward: {
    xp: number;
    badge?: string;
    lootboxKeys: number;
  };
  skill?: string; // For skill-specific challenges
}

export interface GamificationProfile {
  totalXP: number;
  level: number;
  levelTitle: string;
  badges: string[]; // Badge IDs
  lootboxKeys: number;
  secretBadgesUnlocked: string[];

  // Stats
  totalTasksCompleted: number;
  tasksBySkill: Record<string, number>;
  tasksByDoel: Record<string, number>; // Tasks per doel (mapped via skills)
  weeklyChallengesCompleted: number;
  longestStreak: number;
  currentStreak: number;

  // Streak Freeze
  streakFreezes: number; // Available freezes
  lastFreezeReset: string; // YYYY-MM-DD of last weekly freeze reset
  lastActiveDate: string; // YYYY-MM-DD
  streakFrozenToday: boolean; // Whether freeze was used today

  // Special achievements
  nightOwlUnlocked: boolean;
  earlyBirdUnlocked: boolean;
  speedDemonUnlocked: boolean;
  perfectionistUnlocked: boolean;
}

export function createDefaultGamificationProfile(): GamificationProfile {
  const today = new Date().toISOString().split('T')[0];
  return {
    totalXP: 0,
    level: 1,
    levelTitle: "Beginnende Vader",
    badges: [],
    lootboxKeys: 0,
    secretBadgesUnlocked: [],
    totalTasksCompleted: 0,
    tasksBySkill: {
      Aanwezigheid: 0,
      Emotiecoaching: 0,
      Grenzen: 0,
      Zelfregulatie: 0,
      Autonomie: 0,
      Herstel: 0,
      Verbinding: 0,
      Reflectie: 0,
    },
    tasksByDoel: {},
    weeklyChallengesCompleted: 0,
    longestStreak: 0,
    currentStreak: 0,
    streakFreezes: 1,
    lastFreezeReset: today,
    lastActiveDate: today,
    streakFrozenToday: false,
    nightOwlUnlocked: false,
    earlyBirdUnlocked: false,
    speedDemonUnlocked: false,
    perfectionistUnlocked: false,
  };
}

export function checkForNewBadges(profile: GamificationProfile): Badge[] {
  const newBadges: Badge[] = [];
  
  for (const badge of BADGES) {
    // Skip if already unlocked
    if (profile.badges.includes(badge.id)) continue;
    
    let unlocked = false;
    
    switch (badge.requirement.type) {
      case "streak":
        unlocked = profile.currentStreak >= badge.requirement.value;
        break;
      case "tasks_completed":
        unlocked = profile.totalTasksCompleted >= badge.requirement.value;
        break;
      case "skill_tasks":
        if (badge.requirement.skill) {
          unlocked = (profile.tasksBySkill[badge.requirement.skill] || 0) >= badge.requirement.value;
        }
        break;
      case "weekly_challenges":
        unlocked = profile.weeklyChallengesCompleted >= badge.requirement.value;
        break;
      case "special":
        // Handle secret badges separately
        if (badge.id === "night_owl") unlocked = profile.nightOwlUnlocked;
        if (badge.id === "early_bird") unlocked = profile.earlyBirdUnlocked;
        if (badge.id === "speed_demon") unlocked = profile.speedDemonUnlocked;
        if (badge.id === "perfectionist") unlocked = profile.perfectionistUnlocked;
        break;
    }
    
    if (unlocked) {
      newBadges.push(badge);
    }
  }

  return newBadges;
}

// ═══════════════════════════════════════════════════════════════════
// MILESTONES
// ═══════════════════════════════════════════════════════════════════

export interface Milestone {
  tasks: number;
  emoji: string;
  title: string;
  message: string; // Vader-gerichte boodschap
}

export const MILESTONES: Milestone[] = [
  {
    tasks: 5,
    emoji: '\u{1F331}',
    title: 'Eerste stappen',
    message: 'Je bent begonnen. Dat is het moeilijkste deel — en je hebt het gedaan.',
  },
  {
    tasks: 10,
    emoji: '\u{1F44B}',
    title: 'Je maakt verschil',
    message: 'Je maakt al verschil. Je kind voelt het, ook als het dat nog niet kan zeggen.',
  },
  {
    tasks: 25,
    emoji: '\u{1F4AA}',
    title: 'Gewoontevormer',
    message: '25 keer bewust vader zijn. Je bouwt een nieuwe gewoonte op die je kind een leven lang meeneemt.',
  },
  {
    tasks: 50,
    emoji: '\u{2B50}',
    title: 'Halve eeuw',
    message: '50 oefeningen. Dat is niet "een app gebruiken" — dat is investeren in je kind.',
  },
  {
    tasks: 75,
    emoji: '\u{1F48E}',
    title: 'Doorzetter',
    message: 'De meeste mensen stoppen na een paar weken. Jij niet. Dat zegt alles over wat voor vader je bent.',
  },
  {
    tasks: 100,
    emoji: '\u{1F3C6}',
    title: 'Honderd keer aanwezig',
    message: '100 oefeningen. Je bent een voorbeeld voor je kind — en voor andere vaders.',
  },
  {
    tasks: 200,
    emoji: '\u{1F451}',
    title: 'Tweehonderd',
    message: '200 momenten van bewust vaderschap. Je kind groeit op met een vader die zichzelf steeds verbetert.',
  },
  {
    tasks: 500,
    emoji: '\u{1F680}',
    title: 'Legendarisch',
    message: '500 oefeningen. Je hebt laten zien dat goed vaderschap geen toeval is — het is een keuze, elke dag opnieuw.',
  },
];

export function checkMilestone(totalTasks: number): Milestone | null {
  return MILESTONES.find((m) => m.tasks === totalTasks) ?? null;
}

// ═══════════════════════════════════════════════════════════════════
// STREAK FREEZE
// ═══════════════════════════════════════════════════════════════════

function daysBetween(a: string, b: string): number {
  const dateA = new Date(a + 'T00:00:00');
  const dateB = new Date(b + 'T00:00:00');
  return Math.round((dateB.getTime() - dateA.getTime()) / 86400000);
}

function getMondayOfWeek(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(d.setDate(diff));
  return monday.toISOString().split('T')[0];
}

export interface StreakCheckResult {
  newStreak: number;
  freezeUsed: boolean;
  streakLost: boolean;
  compassionateMessage: string | null;
}

/**
 * Check and update streak status when the app is opened.
 * Returns the updated streak info and any messages to show.
 */
export function checkStreakStatus(
  profile: GamificationProfile,
  today: string,
): StreakCheckResult {
  const lastActive = profile.lastActiveDate;
  const gap = daysBetween(lastActive, today);

  // Reset weekly freeze on new week
  const thisMonday = getMondayOfWeek(today);
  let freezes = profile.streakFreezes;
  if (profile.lastFreezeReset !== thisMonday) {
    freezes = Math.max(freezes, 1); // Give at least 1 free freeze per week
  }

  // Same day — no changes
  if (gap <= 0) {
    return { newStreak: profile.currentStreak, freezeUsed: false, streakLost: false, compassionateMessage: null };
  }

  // Consecutive day — streak continues
  if (gap === 1) {
    return { newStreak: profile.currentStreak, freezeUsed: false, streakLost: false, compassionateMessage: null };
  }

  // Missed 1 day (gap === 2) — use freeze if available
  if (gap === 2 && freezes > 0) {
    return {
      newStreak: profile.currentStreak,
      freezeUsed: true,
      streakLost: false,
      compassionateMessage: 'Je hebt gisteren een dagje rust genomen. Dat mag! Je streak is beschermd. \u2744\uFE0F',
    };
  }

  // Streak lost — but with compassionate messaging
  const messages = [
    'Welkom terug! Elke dag is een nieuwe kans om er te zijn voor je kind.',
    'Even niet actief geweest? Geen stress. Het feit dat je nu hier bent zegt genoeg.',
    'Een pauze is geen falen. Je bent er nu weer — dat is wat telt.',
  ];
  const msg = messages[Math.floor(Math.random() * messages.length)];

  return {
    newStreak: 0,
    freezeUsed: false,
    streakLost: true,
    compassionateMessage: msg,
  };
}

// ═══════════════════════════════════════════════════════════════════
// WEEKLY CHALLENGES
// ═══════════════════════════════════════════════════════════════════

export interface GeneratedWeeklyChallenge extends WeeklyChallenge {
  emoji: string;
}

const WEEKLY_TEMPLATES: Omit<GeneratedWeeklyChallenge, 'id' | 'weekStart' | 'progress' | 'completed'>[] = [
  {
    type: 'tasks_total',
    description: 'Voltooi 10 taken deze week',
    target: 10,
    reward: { xp: 50, lootboxKeys: 1 },
    emoji: '\u{1F3AF}',
  },
  {
    type: 'tasks_total',
    description: 'Voltooi 15 taken deze week',
    target: 15,
    reward: { xp: 75, lootboxKeys: 1 },
    emoji: '\u{1F4AA}',
  },
  {
    type: 'expert_tasks',
    description: 'Voltooi 3 expert-taken',
    target: 3,
    reward: { xp: 60, lootboxKeys: 1 },
    emoji: '\u{1F9E0}',
  },
  {
    type: 'expert_tasks',
    description: 'Voltooi 5 expert-taken',
    target: 5,
    reward: { xp: 100, lootboxKeys: 2 },
    emoji: '\u{1F680}',
  },
  {
    type: 'skill_specific',
    description: 'Doe 5 Aanwezigheid taken',
    target: 5,
    reward: { xp: 40, lootboxKeys: 1 },
    skill: 'Aanwezigheid',
    emoji: '\u{1F442}',
  },
  {
    type: 'skill_specific',
    description: 'Doe 5 Emotiecoaching taken',
    target: 5,
    reward: { xp: 40, lootboxKeys: 1 },
    skill: 'Emotiecoaching',
    emoji: '\u{2764}\uFE0F',
  },
  {
    type: 'skill_specific',
    description: 'Doe 5 Zelfregulatie taken',
    target: 5,
    reward: { xp: 40, lootboxKeys: 1 },
    skill: 'Zelfregulatie',
    emoji: '\u{1F9D8}',
  },
  {
    type: 'skill_specific',
    description: 'Doe 5 Grenzen taken',
    target: 5,
    reward: { xp: 40, lootboxKeys: 1 },
    skill: 'Grenzen',
    emoji: '\u{1F6D1}',
  },
  {
    type: 'skill_specific',
    description: 'Doe 5 Verbinding taken',
    target: 5,
    reward: { xp: 40, lootboxKeys: 1 },
    skill: 'Verbinding',
    emoji: '\u{1F91D}',
  },
  {
    type: 'skill_specific',
    description: 'Doe 3 taken uit 3 verschillende skills',
    target: 3,
    reward: { xp: 50, lootboxKeys: 1 },
    emoji: '\u{1F308}',
  },
];

/**
 * Generate 3 weekly challenges for the current week.
 * Uses seeded random based on week start date + user doelen.
 */
export function generateWeeklyChallenges(
  weekStart: string,
  doelen?: AppDoel[],
): GeneratedWeeklyChallenge[] {
  // Simple seeded random
  let seed = 0;
  for (let i = 0; i < weekStart.length; i++) {
    seed = ((seed << 5) - seed) + weekStart.charCodeAt(i);
    seed |= 0;
  }
  seed = Math.abs(seed) || 1;
  const rng = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  // Build candidate pool — prioritize skill-specific challenges matching doelen
  let candidates = [...WEEKLY_TEMPLATES];

  // If doelen are set, prioritize matching skill challenges
  if (doelen && doelen.length > 0) {
    const relevantSkills = new Set<string>();
    for (const doel of doelen) {
      const mapped = DOEL_SKILL_MAP[doel];
      if (mapped) mapped.forEach((s) => relevantSkills.add(s));
    }

    // Sort: matching skill_specific first
    candidates.sort((a, b) => {
      const aMatch = a.skill && relevantSkills.has(a.skill) ? 0 : 1;
      const bMatch = b.skill && relevantSkills.has(b.skill) ? 0 : 1;
      return aMatch - bMatch;
    });
  }

  // Shuffle with seeded random
  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }

  // Pick 3, ensuring variety (max 1 skill_specific, 1 tasks_total, 1 expert_tasks)
  const selected: GeneratedWeeklyChallenge[] = [];
  const usedTypes = new Set<string>();

  for (const template of candidates) {
    if (selected.length >= 3) break;
    // Allow max 2 of same type
    const typeCount = selected.filter((s) => s.type === template.type).length;
    if (typeCount >= 2) continue;

    selected.push({
      ...template,
      id: `wc_${weekStart}_${selected.length}`,
      weekStart,
      progress: 0,
      completed: false,
    });
    usedTypes.add(template.type);
  }

  return selected;
}

// ═══════════════════════════════════════════════════════════════════
// VARIABLE DAILY QUESTS
// ═══════════════════════════════════════════════════════════════════

export type DailyQuestType = 'tasks_count' | 'expert_task' | 'multi_skill' | 'early_bird';

export interface VariableDailyQuest {
  type: DailyQuestType;
  description: string;
  emoji: string;
  target: number;
  bonusXP: number; // Extra XP on top of task XP
}

const DAILY_QUEST_TEMPLATES: VariableDailyQuest[] = [
  { type: 'tasks_count', description: 'Voltooi 3 taken vandaag', emoji: '\u{1F3AF}', target: 3, bonusXP: 15 },
  { type: 'tasks_count', description: 'Voltooi 4 taken vandaag', emoji: '\u{1F525}', target: 4, bonusXP: 25 },
  { type: 'expert_task', description: 'Doe vandaag 1 expert-taak', emoji: '\u{1F9E0}', target: 1, bonusXP: 20 },
  { type: 'multi_skill', description: 'Doe taken van 2 verschillende skills', emoji: '\u{1F308}', target: 2, bonusXP: 15 },
  { type: 'early_bird', description: 'Voltooi een taak voor 10 uur', emoji: '\u{1F305}', target: 1, bonusXP: 10 },
];

/**
 * Get today's daily quest variant, using seeded random on date.
 */
export function getDailyQuestForDate(dateStr: string): VariableDailyQuest {
  let seed = 0;
  for (let i = 0; i < dateStr.length; i++) {
    seed = ((seed << 5) - seed) + dateStr.charCodeAt(i);
    seed |= 0;
  }
  const index = Math.abs(seed) % DAILY_QUEST_TEMPLATES.length;
  return DAILY_QUEST_TEMPLATES[index];
}

// ═══════════════════════════════════════════════════════════════════
// FIRST-OF-DAY BONUS
// ═══════════════════════════════════════════════════════════════════

export const FIRST_TASK_BONUS_XP = 5;

/**
 * Welkomstberichten bij het openen van de app
 */
export const WELCOME_MESSAGES = [
  'Goedemorgen! Klaar om er weer te zijn voor je kind?',
  'Welkom terug. Elke dag is een kans om te groeien.',
  'Fijn dat je er bent. Je kind heeft geluk met jou.',
  'Nieuwe dag, nieuwe mogelijkheden als vader.',
  'Hey! Laten we vandaag weer het verschil maken.',
];

// ═══════════════════════════════════════════════════════════════════
// SKILL MASTERY
// ═══════════════════════════════════════════════════════════════════

export const SKILL_MASTERY_BONUS_XP = 100;

export const SKILL_MASTERY_BADGES: Badge[] = [
  { id: "master_emotiecoaching", name: "Emotie Meester", description: "Alle Emotiecoaching modules voltooid", emoji: "❤️", category: "skill", requirement: { type: "special", value: 1 }, rarity: "epic" },
  { id: "master_aanwezigheid", name: "Aanwezigheid Meester", description: "Alle Aanwezigheid modules voltooid", emoji: "👁️", category: "skill", requirement: { type: "special", value: 1 }, rarity: "epic" },
  { id: "master_zelfregulatie", name: "Zelfregulatie Meester", description: "Alle Zelfregulatie modules voltooid", emoji: "🧘", category: "skill", requirement: { type: "special", value: 1 }, rarity: "epic" },
  { id: "master_grenzen", name: "Grenzen Meester", description: "Alle Grenzen modules voltooid", emoji: "🛑", category: "skill", requirement: { type: "special", value: 1 }, rarity: "epic" },
  { id: "master_autonomie", name: "Autonomie Meester", description: "Alle Autonomie modules voltooid", emoji: "🚀", category: "skill", requirement: { type: "special", value: 1 }, rarity: "epic" },
  { id: "master_herstel", name: "Herstel Meester", description: "Alle Herstel modules voltooid", emoji: "🔧", category: "skill", requirement: { type: "special", value: 1 }, rarity: "epic" },
  { id: "master_verbinding", name: "Verbinding Meester", description: "Alle Verbinding modules voltooid", emoji: "🔗", category: "skill", requirement: { type: "special", value: 1 }, rarity: "epic" },
  { id: "master_reflectie", name: "Reflectie Meester", description: "Alle Reflectie modules voltooid", emoji: "🪞", category: "skill", requirement: { type: "special", value: 1 }, rarity: "epic" },
];

// ═══════════════════════════════════════════════════════════════════
// QUIZ GAMIFICATION
// ═══════════════════════════════════════════════════════════════════

export const QUIZ_XP = {
  correct_basis: 15,
  correct_gevorderd: 20,
  correct_expert: 25,
  incorrect: 5,
  completion_bonus: 50,      // >80% score
  perfect_bonus: 100,        // 100% score
} as const;

export const QUIZ_BADGES: Badge[] = [
  { id: "quiz_first", name: "Eerste Quiz", description: "Je eerste quiz voltooid", emoji: "🎯", category: "skill", requirement: { type: "special", value: 1 }, rarity: "common" },
  { id: "quiz_perfect", name: "Perfectionist", description: "100% score op een quiz", emoji: "💯", category: "skill", requirement: { type: "special", value: 1 }, rarity: "epic" },
  { id: "quiz_all_skills", name: "Alleskunner", description: "Quiz van alle 8 skills voltooid", emoji: "🌟", category: "skill", requirement: { type: "special", value: 1 }, rarity: "legendary" },
  { id: "quiz_streak_10", name: "10 Op Rij", description: "10 quizvragen achter elkaar goed", emoji: "🔥", category: "skill", requirement: { type: "special", value: 1 }, rarity: "rare" },
];

// ═══════════════════════════════════════════════════════════════════
// XP COMBO MULTIPLIER
// ═══════════════════════════════════════════════════════════════════

export interface ComboTier {
  days: number;
  multiplier: number;
  label: string;
}

export const COMBO_TIERS: ComboTier[] = [
  { days: 1, multiplier: 1.0, label: '1×' },
  { days: 2, multiplier: 1.25, label: '1.25×' },
  { days: 3, multiplier: 1.5, label: '1.5×' },
  { days: 5, multiplier: 2.0, label: '2×' },
];

export function getComboMultiplier(consecutiveDays: number): ComboTier {
  for (let i = COMBO_TIERS.length - 1; i >= 0; i--) {
    if (consecutiveDays >= COMBO_TIERS[i].days) {
      return COMBO_TIERS[i];
    }
  }
  return COMBO_TIERS[0];
}

// ═══════════════════════════════════════════════════════════════════
// SKILL MASTERY TIERS (CROWN SYSTEM)
// ═══════════════════════════════════════════════════════════════════

export type SkillMasteryTier = 'none' | 'bronze' | 'silver' | 'gold';

export interface MasteryTierInfo {
  tier: SkillMasteryTier;
  label: string;
  emoji: string;
  color: string;
}

export const MASTERY_TIER_INFO: Record<SkillMasteryTier, MasteryTierInfo> = {
  none:   { tier: 'none',   label: '',       emoji: '',   color: '#666' },
  bronze: { tier: 'bronze', label: 'Brons',  emoji: '🥉', color: '#CD7F32' },
  silver: { tier: 'silver', label: 'Zilver', emoji: '🥈', color: '#C0C0C0' },
  gold:   { tier: 'gold',   label: 'Goud',   emoji: '🥇', color: '#FFD700' },
};

export function getSkillMasteryTier(
  completedModules: number,
  totalModules: number,
  avgQuizPercent: number,
): SkillMasteryTier {
  if (completedModules < totalModules) return 'none';
  if (avgQuizPercent >= 100) return 'gold';
  if (avgQuizPercent >= 80) return 'silver';
  return 'bronze';
}

// ═══════════════════════════════════════════════════════════════════
// MODULE MILESTONES
// ═══════════════════════════════════════════════════════════════════

export interface ModuleMilestone {
  modules: number;
  emoji: string;
  title: string;
  message: string;
}

export const MODULE_MILESTONES: ModuleMilestone[] = [
  { modules: 5,  emoji: '📖', title: 'Eerste Skill Voltooid',  message: 'Je hebt je eerste volledige skill afgerond! Dat is een serieuze stap.' },
  { modules: 10, emoji: '📚', title: 'Dubbele Cijfers',        message: '10 modules! Je bent een kwart van de weg. Je kind merkt het verschil.' },
  { modules: 20, emoji: '🎓', title: 'Halverwege',             message: 'De helft van alle modules voltooid. Je groeit als vader — meetbaar.' },
  { modules: 40, emoji: '👑', title: 'Meester Vader',          message: 'ALLE 40 modules voltooid. Legendarisch. Je kind heeft de beste vader.' },
];

export function checkModuleMilestone(totalModulesCompleted: number): ModuleMilestone | null {
  return MODULE_MILESTONES.find((m) => m.modules === totalModulesCompleted) ?? null;
}

export const ARENA_BADGES: Badge[] = [
  { id: "arena_first", name: "Arena Debutant", description: "Eerste arena quiz voltooid", emoji: "🏟️", category: "arena", requirement: { type: "special", value: 1 }, rarity: "common" },
  { id: "arena_3_skills", name: "Veelzijdig", description: "Quizzes van 3 skills voltooid", emoji: "🎨", category: "arena", requirement: { type: "special", value: 3 }, rarity: "rare" },
  { id: "arena_all_skills", name: "Meester van Alles", description: "Quizzes van alle 8 skills", emoji: "🌟", category: "arena", requirement: { type: "special", value: 8 }, rarity: "legendary" },
  { id: "arena_perfect", name: "Foutloos", description: "100% score op een arena quiz", emoji: "💯", category: "arena", requirement: { type: "special", value: 1 }, rarity: "epic" },
  { id: "arena_streak_5", name: "Op Dreef", description: "5 correct achter elkaar", emoji: "⚡", category: "arena", requirement: { type: "special", value: 5 }, rarity: "rare" },
  { id: "arena_streak_10", name: "Onverslaanbaar", description: "10 correct achter elkaar", emoji: "🔥", category: "arena", requirement: { type: "special", value: 10 }, rarity: "epic" },
  { id: "arena_total_50", name: "Quiz Veteraan", description: "50 arena vragen beantwoord", emoji: "📝", category: "arena", requirement: { type: "special", value: 50 }, rarity: "rare" },
  { id: "arena_total_200", name: "Quiz Kampioen", description: "200 arena vragen beantwoord", emoji: "👑", category: "arena", requirement: { type: "special", value: 200 }, rarity: "epic" },
];

export const LEARN_BADGES: Badge[] = [
  { id: "learn_first", name: "Eerste Les", description: "Eerste leermodule voltooid", emoji: "📖", category: "learn", requirement: { type: "special", value: 1 }, rarity: "common" },
  { id: "learn_5", name: "Leergierig", description: "5 leermodules voltooid", emoji: "📚", category: "learn", requirement: { type: "special", value: 5 }, rarity: "rare" },
  { id: "learn_10", name: "Kennismaker", description: "10 leermodules voltooid", emoji: "🎓", category: "learn", requirement: { type: "special", value: 10 }, rarity: "rare" },
  { id: "learn_20", name: "Wijze Vader", description: "20 leermodules voltooid", emoji: "🧠", category: "learn", requirement: { type: "special", value: 20 }, rarity: "epic" },
  { id: "learn_all", name: "Encyclopedie", description: "Alle 40 leermodules voltooid", emoji: "🏆", category: "learn", requirement: { type: "special", value: 40 }, rarity: "legendary" },
];

export const COMBO_BADGES: Badge[] = [
  { id: "combo_triple", name: "Triple Threat", description: "Module + taak + pulse op 1 dag", emoji: "🔱", category: "combo", requirement: { type: "special", value: 1 }, rarity: "rare" },
  { id: "combo_full_day", name: "Volledige Dag", description: "Module + taak + pulse + quiz op 1 dag", emoji: "💫", category: "combo", requirement: { type: "special", value: 1 }, rarity: "epic" },
  { id: "combo_week", name: "Perfecte Week", description: "7 dagen achtereen een triple combo", emoji: "🌟", category: "combo", requirement: { type: "special", value: 7 }, rarity: "legendary" },
];

export const EXPLORER_BADGES: Badge[] = [
  { id: "explore_all_skills", name: "Ontdekker", description: "Module van elke skill bekeken", emoji: "🧭", category: "explorer", requirement: { type: "special", value: 8 }, rarity: "rare" },
  { id: "explore_reread", name: "Herhaler", description: "Een module opnieuw gelezen", emoji: "🔄", category: "explorer", requirement: { type: "special", value: 1 }, rarity: "common" },
  { id: "explore_all_types", name: "Alleslezer", description: "Alle stage types doorlopen", emoji: "📖", category: "explorer", requirement: { type: "special", value: 6 }, rarity: "rare" },
];

export const DAILY_BADGES: Badge[] = [
  { id: "daily_first", name: "Dagstart", description: "Eerste daily challenge voltooid", emoji: "🌅", category: "daily", requirement: { type: "special", value: 1 }, rarity: "common" },
  { id: "daily_7", name: "Weekkracht", description: "7 daily challenges voltooid", emoji: "📅", category: "daily", requirement: { type: "special", value: 7 }, rarity: "common" },
  { id: "daily_30", name: "Maandmeester", description: "30 daily challenges voltooid", emoji: "🗓️", category: "daily", requirement: { type: "special", value: 30 }, rarity: "rare" },
  { id: "daily_100", name: "Routinier", description: "100 daily challenges voltooid", emoji: "⚡", category: "daily", requirement: { type: "special", value: 100 }, rarity: "epic" },
];

export const PULSE_BADGES: Badge[] = [
  { id: "pulse_first", name: "Eerste Reflectie", description: "Eerste Vader Pulse check-in", emoji: "💭", category: "daily", requirement: { type: "special", value: 1 }, rarity: "common" },
  { id: "pulse_7", name: "Week Bewust", description: "7 Pulse check-ins", emoji: "🧠", category: "daily", requirement: { type: "special", value: 7 }, rarity: "common" },
  { id: "pulse_30", name: "Maand Bewust", description: "30 Pulse check-ins", emoji: "🌙", category: "daily", requirement: { type: "special", value: 30 }, rarity: "rare" },
  { id: "pulse_100", name: "Zelfkenner", description: "100 Pulse check-ins", emoji: "🔮", category: "daily", requirement: { type: "special", value: 100 }, rarity: "epic" },
  { id: "pulse_365", name: "Dagboek Vader", description: "365 Pulse check-ins", emoji: "📔", category: "daily", requirement: { type: "special", value: 365 }, rarity: "legendary" },
];

export const REFLECTION_NOTE_BADGES: Badge[] = [
  { id: "note_first", name: "Eerste Notitie", description: "Je eerste reflectie-notitie geschreven", emoji: "✏️", category: "learn", requirement: { type: "special", value: 1 }, rarity: "common" },
  { id: "note_10", name: "Schrijver", description: "10 reflectie-notities", emoji: "📝", category: "learn", requirement: { type: "special", value: 10 }, rarity: "rare" },
  { id: "note_25", name: "Dagboekschrijver", description: "25 reflectie-notities", emoji: "📓", category: "learn", requirement: { type: "special", value: 25 }, rarity: "epic" },
  { id: "note_50", name: "Chroniqueur", description: "50 reflectie-notities", emoji: "📖", category: "learn", requirement: { type: "special", value: 50 }, rarity: "legendary" },
];

export const EXTRA_SECRET_BADGES: Badge[] = [
  { id: "weekend_warrior", name: "Weekendstrijder", description: "Taak op zaterdag en zondag", emoji: "⚔️", category: "secret", requirement: { type: "special", value: 1 }, rarity: "rare" },
  { id: "lunchbreak", name: "Lunchpauze", description: "Taak tussen 12:00 en 13:00", emoji: "🥪", category: "secret", requirement: { type: "special", value: 1 }, rarity: "rare" },
  { id: "module_marathon", name: "Marathon Man", description: "3 modules op 1 dag voltooid", emoji: "🏃", category: "secret", requirement: { type: "special", value: 1 }, rarity: "epic" },
  { id: "all_5_one_week", name: "Diepgang", description: "Alle 5 modules van 1 skill in 1 week", emoji: "🏊", category: "secret", requirement: { type: "special", value: 1 }, rarity: "epic" },
];

export const ALL_BADGES: Badge[] = [
  ...BADGES,
  ...SKILL_MASTERY_BADGES,
  ...QUIZ_BADGES,
  ...ARENA_BADGES,
  ...LEARN_BADGES,
  ...PULSE_BADGES,
  ...REFLECTION_NOTE_BADGES,
  ...COMBO_BADGES,
  ...EXPLORER_BADGES,
  ...DAILY_BADGES,
  ...EXTRA_SECRET_BADGES,
];
