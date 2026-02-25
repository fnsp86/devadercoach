// Selecteert 7 taken per week op basis van kinderen + skills + weeknummer
import type { InteractiveTask, AgeGroup, Skill, LearningModule, ThemeTag } from './types';


// Seeded random voor consistente wekelijkse selectie
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function weekSeed(weekKey: string, salt: number = 0): number {
  let hash = salt;
  for (let i = 0; i < weekKey.length; i++) {
    hash = ((hash << 5) - hash) + weekKey.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) || 1;
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export interface WeekTaskSelection {
  weekKey: string; // YYYY-MM-DD van maandag van die week
  tasks: InteractiveTask[];
  // 2x basis, 3x gevorderd, 2x expert
}

/**
 * Geeft de weekKey (maandag YYYY-MM-DD) voor een gegeven datum.
 */
export function getWeekKey(date: Date = new Date()): string {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/**
 * Berekent het weeknummer (1-gebaseerd, vanaf startDate van de vader)
 * zodat elke week een unieke set taken geeft, ook na ronde 1.
 */
export function getWeekNumber(weekKey: string, startDate: string): number {
  // Round startDate down to the Monday of its week, so the week counter
  // advances exactly every Monday regardless of which weekday startDate falls on.
  const start = new Date(startDate);
  const startDay = start.getDay(); // 0=Sun, 1=Mon, ...
  const startDiff = startDay === 0 ? -6 : 1 - startDay;
  const startMonday = new Date(start);
  startMonday.setDate(start.getDate() + startDiff);
  startMonday.setHours(0, 0, 0, 0);

  const week = new Date(weekKey);
  week.setHours(0, 0, 0, 0);

  const diffMs = week.getTime() - startMonday.getTime();
  const diffWeeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));
  return Math.max(1, diffWeeks + 1);
}

/**
 * Selecteert 7 taken voor de week op basis van:
 * - Leeftijdsgroepen van de kinderen
 * - Geselecteerde skills
 * - weekKey (zodat dezelfde week altijd dezelfde taken geeft)
 * - Weeknummer (progressie over rondes)
 *
 * Moeilijkheidsverdeling: 2x basis, 3x gevorderd, 2x expert
 * Skills worden zo goed mogelijk gespreid (max 2 taken per skill per week)
 */
export function selectWeekTasks(
  allTasks: InteractiveTask[],
  ageGroups: AgeGroup[],
  skills: Skill[],
  weekKey: string,
  weekNumber: number,
): WeekTaskSelection {
  const rng = seededRandom(weekSeed(weekKey, weekNumber));

  // Filter op leeftijdsgroep – ondersteunt beide formaten (ageGroups array of ageGroup string)
  const ageFiltered = allTasks.filter((t) => {
    if (t.ageGroups && t.ageGroups.length > 0) {
      return t.ageGroups.some((ag) => ageGroups.includes(ag));
    }
    if (t.ageGroup) {
      return ageGroups.includes(t.ageGroup);
    }
    return false;
  });

  if (ageFiltered.length === 0) return { weekKey, tasks: [] };

  // Splits in primary (geselecteerde skills) en secondary
  const primaryPool = ageFiltered.filter((t) => skills.includes(t.skill));
  const secondaryPool = ageFiltered.filter((t) => !skills.includes(t.skill));

  // Splits per moeilijkheid
  function byDifficulty(pool: InteractiveTask[]) {
    return {
      basis: shuffle(pool.filter((t) => t.difficulty === 'basis'), rng),
      gevorderd: shuffle(pool.filter((t) => t.difficulty === 'gevorderd'), rng),
      expert: shuffle(pool.filter((t) => t.difficulty === 'expert'), rng),
    };
  }

  const primary = byDifficulty(primaryPool);
  const secondary = byDifficulty(secondaryPool);

  // Target: 2 basis, 3 gevorderd, 2 expert
  // Eerst uit primary, aanvullen met secondary
  function pick(
    primaryArr: InteractiveTask[],
    secondaryArr: InteractiveTask[],
    count: number,
    used: Set<string>,
  ): InteractiveTask[] {
    const result: InteractiveTask[] = [];
    const skillCount: Record<string, number> = {};

    for (const task of [...primaryArr, ...secondaryArr]) {
      if (result.length >= count) break;
      if (used.has(task.id)) continue;
      // Max 2 taken per skill per week
      const sc = skillCount[task.skill] ?? 0;
      if (sc >= 2) continue;
      result.push(task);
      used.add(task.id);
      skillCount[task.skill] = sc + 1;
    }
    return result;
  }

  const used = new Set<string>();
  const basis = pick([...primary.basis, ...secondary.basis], [], 2, used);
  const gevorderd = pick([...primary.gevorderd, ...secondary.gevorderd], [], 3, used);
  const expert = pick([...primary.expert, ...secondary.expert], [], 2, used);

  // Als we tekort komen (te weinig taken), vul aan zonder skill-limiet
  const allShuffled = shuffle(ageFiltered, rng);
  const allPicked = [...basis, ...gevorderd, ...expert];
  while (allPicked.length < 7) {
    const next = allShuffled.find((t) => !used.has(t.id));
    if (!next) break;
    allPicked.push(next);
    used.add(next.id);
  }

  // Volgorde: 2 basis vooraan, dan 3 gevorderd, dan 2 expert
  const ordered = [
    ...basis,
    ...gevorderd,
    ...expert,
    ...allPicked.slice(basis.length + gevorderd.length + expert.length),
  ].slice(0, 7);

  return { weekKey, tasks: ordered };
}

/**
 * Selecteert 7 interactieve taken per week.
 * Leermodules zitten niet meer in weektaken — die hebben een eigen tab.
 *
 * @param completedTaskIds - IDs van eerder voltooide taken die uitgesloten
 *   worden. Als de pool daardoor te klein wordt (<7), worden de oudste
 *   completions weer toegelaten (fallback).
 */
export function selectMixedWeekTasks(
  allTasks: InteractiveTask[],
  ageGroups: AgeGroup[],
  skills: Skill[],
  weekKey: string,
  weekNumber: number,
  completedTaskIds: string[] = [],
  activeThemes: ThemeTag[] = [],
  doelSkills: Skill[] = [],
  recommendedSkill?: Skill,
): WeekTaskSelection {
  const rng = seededRandom(weekSeed(weekKey, weekNumber));

  // Filter interactieve taken op leeftijdsgroep
  const ageFiltered = allTasks.filter((t) => {
    if (t.taskType === 'module') return false; // skip module-stubs
    if (t.ageGroups && t.ageGroups.length > 0) {
      return t.ageGroups.some((ag) => ageGroups.includes(ag));
    }
    if (t.ageGroup) {
      return ageGroups.includes(t.ageGroup);
    }
    return false;
  });

  // Sluit voltooide taken uit, tenzij pool te klein wordt
  const completedSet = new Set(completedTaskIds);
  let pool = ageFiltered.filter((t) => !completedSet.has(t.id));

  // Fallback: recycle pas als alles op is (niet eerder)
  if (pool.length === 0) {
    pool = ageFiltered;
  }

  // ── Theme boost: reserveer 2 slots voor themed taken ──
  const themedPicked: InteractiveTask[] = [];
  const themedUsed = new Set<string>();

  if (activeThemes.length > 0) {
    const themedPool = shuffle(
      pool.filter((t) => t.themes?.some((tag) => activeThemes.includes(tag))),
      rng,
    );
    for (const t of themedPool) {
      if (themedPicked.length >= 2) break;
      themedPicked.push(t);
      themedUsed.add(t.id);
    }
  }

  // ── Doel boost: reserveer 2 slots voor taken die bij de doelen passen ──
  const doelPicked: InteractiveTask[] = [];
  const doelUsed = new Set<string>();

  if (doelSkills.length > 0) {
    const doelPool = shuffle(
      pool.filter((t) => doelSkills.includes(t.skill) && !themedUsed.has(t.id)),
      rng,
    );
    for (const t of doelPool) {
      if (doelPicked.length >= 2) break;
      doelPicked.push(t);
      doelUsed.add(t.id);
    }
  }

  // ── Recommendation boost: reserveer 1 slot voor de aanbevolen skill ──
  const recPicked: InteractiveTask[] = [];
  const recUsed = new Set<string>();

  if (recommendedSkill) {
    const recPool = shuffle(
      pool.filter((t) => t.skill === recommendedSkill && !themedUsed.has(t.id) && !doelUsed.has(t.id)),
      rng,
    );
    if (recPool.length > 0) {
      recPicked.push(recPool[0]);
      recUsed.add(recPool[0].id);
    }
  }

  // Verwijder themed + doel + rec picks uit de normale pool
  const reservedUsed = new Set([...themedUsed, ...doelUsed, ...recUsed]);
  const normalPool = pool.filter((t) => !reservedUsed.has(t.id));
  const normalTarget = 7 - themedPicked.length - doelPicked.length - recPicked.length;

  // Split in primary en secondary per moeilijkheid
  const primaryPool = normalPool.filter((t) => skills.includes(t.skill));
  const secondaryPool = normalPool.filter((t) => !skills.includes(t.skill));

  function byDifficulty(p: InteractiveTask[]) {
    return {
      basis: shuffle(p.filter((t) => t.difficulty === 'basis'), rng),
      gevorderd: shuffle(p.filter((t) => t.difficulty === 'gevorderd'), rng),
      expert: shuffle(p.filter((t) => t.difficulty === 'expert'), rng),
    };
  }

  const primary = byDifficulty(primaryPool);
  const secondary = byDifficulty(secondaryPool);

  function pick(
    primaryArr: InteractiveTask[],
    secondaryArr: InteractiveTask[],
    count: number,
    used: Set<string>,
  ): InteractiveTask[] {
    const result: InteractiveTask[] = [];
    const skillCount: Record<string, number> = {};
    for (const task of [...primaryArr, ...secondaryArr]) {
      if (result.length >= count) break;
      if (used.has(task.id)) continue;
      const sc = skillCount[task.skill] ?? 0;
      if (sc >= 2) continue;
      result.push(task);
      used.add(task.id);
      skillCount[task.skill] = sc + 1;
    }
    return result;
  }

  const used = new Set<string>([...themedUsed, ...doelUsed, ...recUsed]);
  // Verdeel normal slots: ~30% basis, ~40% gevorderd, ~30% expert
  const basisCount = Math.round(normalTarget * 0.3);
  const expertCount = Math.round(normalTarget * 0.3);
  const gevorderdCount = normalTarget - basisCount - expertCount;

  const basis = pick([...primary.basis, ...secondary.basis], [], basisCount, used);
  const gevorderd = pick([...primary.gevorderd, ...secondary.gevorderd], [], gevorderdCount, used);
  const expert = pick([...primary.expert, ...secondary.expert], [], expertCount, used);

  const allShuffled = shuffle(normalPool, rng);
  const normalPicked = [...basis, ...gevorderd, ...expert];
  while (normalPicked.length < normalTarget) {
    const next = allShuffled.find((t) => !used.has(t.id));
    if (!next) break;
    normalPicked.push(next);
    used.add(next.id);
  }

  // Combineer: themed + doel + rec + normal taken verspreid door de lijst
  const finalTasks = [...themedPicked, ...doelPicked, ...recPicked, ...normalPicked].slice(0, 7);
  return { weekKey, tasks: shuffle(finalTasks, rng) };
}

/**
 * Bereken leeftijdsgroep vanuit leeftijd (zelfde als in task-selector)
 */
export function ageToGroup(age: number): AgeGroup {
  if (age <= 2) return '0-2';
  if (age <= 5) return '3-5';
  if (age <= 9) return '6-9';
  if (age <= 12) return '10-12';
  return '13-16';
}

// ─────────────────────────────────────────────────────────────────────────────
// Wekelijkse reflectievragen
// ─────────────────────────────────────────────────────────────────────────────

import { getLearningModulesForSkill } from './learning-modules';

export interface WeeklyReflection {
  id: string;              // "refl_{weekKey}_{index}"
  question: string;
  skill: Skill;
  sourceModuleTitle: string;
  xpReward: number;        // 10 XP per stuk
}

/**
 * Selecteert 2 reflectievragen per week uit alle leermodules.
 * Prioriteert vragen uit de geselecteerde skills.
 * Seeded random voor consistente wekelijkse selectie.
 */
export function getWeeklyReflections(
  skills: Skill[],
  weekKey: string,
): WeeklyReflection[] {
  // Verzamel alle reflectievragen uit alle modules van geselecteerde skills
  const allQuestions: { question: string; skill: Skill; moduleTitle: string }[] = [];

  for (const sk of skills) {
    const modules = getLearningModulesForSkill(sk);
    for (const mod of modules) {
      const reflection = mod.content.find((c) => c.type === 'reflection');
      if (reflection?.questions) {
        for (const q of reflection.questions) {
          allQuestions.push({ question: q, skill: sk, moduleTitle: mod.title });
        }
      }
    }
  }

  if (allQuestions.length === 0) return [];

  // Seeded random selectie voor consistentie per week
  const rng = seededRandom(weekSeed(weekKey, 77));
  const shuffled = shuffle(allQuestions, rng);
  const picked = shuffled.slice(0, 2);

  return picked.map((q, i) => ({
    id: `refl_${weekKey}_${i}`,
    question: q.question,
    skill: q.skill,
    sourceModuleTitle: q.moduleTitle,
    xpReward: 10,
  }));
}
