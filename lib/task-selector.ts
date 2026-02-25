// Selecteert dagelijks 4-5 interactieve taken op basis van kinderen + skills + doelen
import type { InteractiveTask, AgeGroup, Skill, AppDoel, ThemeTag } from './types';

/**
 * Mapping van doelen naar gerelateerde skills.
 * Wordt gebruikt om taken te prioriteren op basis van de gekozen doelen.
 */
export const DOEL_SKILL_MAP: Record<AppDoel, Skill[]> = {
  'Rustiger reageren': ['Zelfregulatie'],
  'Minder schreeuwen': ['Zelfregulatie'],
  'Meer geduld hebben': ['Zelfregulatie', 'Aanwezigheid'],
  'Meer verbinding': ['Verbinding', 'Aanwezigheid'],
  'Meer quality time': ['Verbinding', 'Aanwezigheid'],
  'Beter luisteren': ['Aanwezigheid', 'Emotiecoaching'],
  'Betere grenzen stellen': ['Grenzen'],
  'Consequenter zijn': ['Grenzen'],
  'Mijn kind beter begrijpen': ['Emotiecoaching'],
  'Emoties beter begeleiden': ['Emotiecoaching'],
  'Mijn kind zelfstandiger maken': ['Autonomie'],
  'Herstellen na een ruzie': ['Herstel'],
  'Bewuster opvoeden': ['Reflectie'],
  'Mijn eigen patronen doorbreken': ['Reflectie'],
  'Gewoon een betere vader zijn': ['Aanwezigheid', 'Emotiecoaching', 'Zelfregulatie', 'Grenzen', 'Autonomie', 'Herstel', 'Verbinding', 'Reflectie'],
};

/**
 * Geeft de unieke skills terug die bij de gekozen doelen horen.
 */
export function doelenToSkills(doelen: AppDoel[]): Skill[] {
  const skills = new Set<Skill>();
  for (const doel of doelen) {
    const mapped = DOEL_SKILL_MAP[doel];
    if (mapped) mapped.forEach((s) => skills.add(s));
  }
  return Array.from(skills);
}

// Seeded random voor consistente dagelijkse selectie
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function dateSeed(dateStr: string): number {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) || 1;
}

// Shuffle array met seeded random
function shuffle<T>(arr: T[], rng: () => number): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export interface DailyTaskSelection {
  date: string;
  tasks: InteractiveTask[];
}

/**
 * Selecteert 5 taken voor vandaag op basis van:
 * - Leeftijdsgroepen van de kinderen
 * - Geselecteerde skills (uit onboarding)
 * - Datum (zodat dezelfde dag altijd dezelfde taken geeft)
 * - Variatie over skills
 */
export function selectDailyTasks(
  allTasks: InteractiveTask[],
  ageGroups: AgeGroup[],
  skills: Skill[],
  dateStr: string, // YYYY-MM-DD
  count: number = 5,
  activeThemes: ThemeTag[] = [],
): InteractiveTask[] {
  const rng = seededRandom(dateSeed(dateStr));

  // Filter taken op leeftijdsgroep
  const ageFiltered = allTasks.filter(
    (t) => (t.ageGroups ?? (t.ageGroup ? [t.ageGroup] : [])).some((ag) => ageGroups.includes(ag))
  );

  if (ageFiltered.length === 0) return [];

  // ── Theme boost: reserveer 1 slot voor themed taak ──
  const themedPicked: InteractiveTask[] = [];
  const themedUsed = new Set<string>();

  if (activeThemes.length > 0) {
    const themedPool = shuffle(
      ageFiltered.filter((t) => t.themes?.some((tag) => activeThemes.includes(tag))),
      rng,
    );
    if (themedPool.length > 0) {
      themedPicked.push(themedPool[0]);
      themedUsed.add(themedPool[0].id);
    }
  }

  const normalTarget = count - themedPicked.length;
  const normalPool = ageFiltered.filter((t) => !themedUsed.has(t.id));

  // Prioriteer geselecteerde skills, maar mix ook andere erin
  const primaryTasks = normalPool.filter((t) => skills.includes(t.skill));
  const secondaryTasks = normalPool.filter((t) => !skills.includes(t.skill));

  // Shuffle both pools
  const shuffledPrimary = shuffle(primaryTasks, rng);
  const shuffledSecondary = shuffle(secondaryTasks, rng);

  // Selecteer: 70% uit primaire skills, 30% uit andere
  const primaryCount = Math.min(Math.ceil(normalTarget * 0.7), shuffledPrimary.length);
  const secondaryCount = Math.min(normalTarget - primaryCount, shuffledSecondary.length);

  const selected: InteractiveTask[] = [];
  const usedSkills = new Set<string>();

  // Voeg primaire taken toe met skill-variatie
  for (const task of shuffledPrimary) {
    if (selected.length >= primaryCount) break;
    if (usedSkills.size < skills.length && usedSkills.has(task.skill)) continue;
    selected.push(task);
    usedSkills.add(task.skill);
  }

  // Vul primaire aan als nodig
  for (const task of shuffledPrimary) {
    if (selected.length >= primaryCount) break;
    if (selected.includes(task)) continue;
    selected.push(task);
  }

  // Voeg secundaire taken toe
  for (const task of shuffledSecondary) {
    if (selected.length >= primaryCount + secondaryCount) break;
    selected.push(task);
  }

  // Als we nog niet genoeg hebben, vul aan
  const remaining = shuffle(normalPool, rng);
  for (const task of remaining) {
    if (selected.length >= normalTarget) break;
    if (selected.includes(task)) continue;
    selected.push(task);
  }

  // Combineer themed + normal, sorteer op moeilijkheid
  const finalTasks = [...themedPicked, ...selected].slice(0, count);
  const difficultyOrder = { basis: 0, gevorderd: 1, expert: 2 };
  finalTasks.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);

  return finalTasks;
}

/**
 * Bereken leeftijdsgroep vanuit leeftijd
 */
export function ageToGroup(age: number): AgeGroup {
  if (age <= 2) return '0-2';
  if (age <= 5) return '3-5';
  if (age <= 9) return '6-9';
  if (age <= 12) return '10-12';
  return '13-16';
}
