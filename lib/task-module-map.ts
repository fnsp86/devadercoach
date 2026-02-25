/**
 * Links between interactive tasks and learning modules.
 * Uses skill matching to find related content.
 */
import type { InteractiveTask, LearningModule, Skill, ThemeTag } from './types';
import { getLearningModulesForSkill } from './modules/index';
import { ALL_INTERACTIVE_TASKS } from './interactive-tasks';

/**
 * Vindt een gerelateerde leermodule voor een taak.
 * Geeft de eerste module terug die bij dezelfde skill hoort.
 */
export function getModuleForTask(
  task: InteractiveTask,
  activeThemes: ThemeTag[] = [],
): LearningModule | null {
  const modules = getLearningModulesForSkill(task.skill, activeThemes);
  if (modules.length === 0) return null;

  // Als de taak een expliciete moduleRef heeft, gebruik die
  if (task.moduleRef) {
    const exact = modules.find((m) => m.id === task.moduleRef);
    if (exact) return exact;
  }

  // Anders: geef de eerste module van dezelfde skill
  return modules[0];
}

/**
 * Vindt gerelateerde taken voor een leermodule.
 * Geeft max 3 taken terug die bij dezelfde skill horen.
 */
export function getTasksForModule(
  moduleId: string,
  skill: Skill,
  ageGroups?: string[],
): InteractiveTask[] {
  let pool = ALL_INTERACTIVE_TASKS.filter(
    (t) => t.skill === skill && t.taskType !== 'module',
  );

  // Filter op leeftijdsgroep als beschikbaar
  if (ageGroups && ageGroups.length > 0) {
    const filtered = pool.filter((t) => {
      if (t.ageGroups && t.ageGroups.length > 0) {
        return t.ageGroups.some((ag) => ageGroups.includes(ag));
      }
      if (t.ageGroup) {
        return ageGroups.includes(t.ageGroup);
      }
      return false;
    });
    if (filtered.length >= 3) pool = filtered;
  }

  // Sorteer: taken met expliciete moduleRef match eerst, dan gevarieerde moeilijkheid
  const withRef = pool.filter((t) => t.moduleRef === moduleId);
  const withoutRef = pool.filter((t) => t.moduleRef !== moduleId);

  // Mix moeilijkheidsgraden
  const basis = withoutRef.filter((t) => t.difficulty === 'basis');
  const gevorderd = withoutRef.filter((t) => t.difficulty === 'gevorderd');
  const expert = withoutRef.filter((t) => t.difficulty === 'expert');

  const result = [
    ...withRef,
    ...basis.slice(0, 1),
    ...gevorderd.slice(0, 1),
    ...expert.slice(0, 1),
  ];

  return result.slice(0, 3);
}
