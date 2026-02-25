/**
 * Persoonlijke skill-aanbevelingen op basis van doelen, outcomes,
 * pulse data, module voortgang en taakcompletions.
 */
import type { Skill, AppDoel, TaskOutcome, PulseCheckIn } from './types';
import type { WeekTaskCompletion } from './store';
import type { StageProgress } from './types';
import { ALL_INTERACTIVE_TASKS } from './interactive-tasks';
import { ALL_SKILLS } from './skills';
import { DOEL_SKILL_MAP } from './task-selector';
import { getLearningModulesForSkill } from './modules/index';

export interface SkillRecommendation {
  skill: Skill;
  score: number;
  reason: string; // korte uitleg waarom deze skill aanbevolen wordt
}

/**
 * Berekent een geprioriteerde lijst van skill-aanbevelingen.
 * Hoogste score = meest aanbevolen.
 */
export function getSkillRecommendations({
  doelen = [],
  taskOutcomes = [],
  weekTaskCompletions = [],
  pulseCheckIns = [],
  stageProgress = {},
}: {
  doelen?: AppDoel[];
  taskOutcomes?: TaskOutcome[];
  weekTaskCompletions?: WeekTaskCompletion[];
  pulseCheckIns?: PulseCheckIn[];
  stageProgress?: Record<string, StageProgress>;
}): SkillRecommendation[] {
  // Build task→skill lookup
  const taskSkillMap: Record<string, Skill> = {};
  ALL_INTERACTIVE_TASKS.forEach((t) => { taskSkillMap[t.id] = t.skill; });

  const scores: Record<Skill, number> = {} as Record<Skill, number>;
  const reasons: Record<Skill, string[]> = {} as Record<Skill, string[]>;
  ALL_SKILLS.forEach((sk) => { scores[sk] = 0; reasons[sk] = []; });

  // ── 1. Doel-alignment (gewicht 3x) ──
  if (doelen.length > 0) {
    const doelSkillCounts: Record<Skill, number> = {} as Record<Skill, number>;
    ALL_SKILLS.forEach((sk) => { doelSkillCounts[sk] = 0; });
    for (const doel of doelen) {
      const mapped = DOEL_SKILL_MAP[doel];
      if (mapped) {
        // Skills die bij meerdere doelen horen krijgen een hogere score
        for (const sk of mapped) {
          doelSkillCounts[sk] = (doelSkillCounts[sk] ?? 0) + 1;
        }
      }
    }
    for (const sk of ALL_SKILLS) {
      if (doelSkillCounts[sk] > 0) {
        scores[sk] += doelSkillCounts[sk] * 3;
        reasons[sk].push('past bij je doelen');
      }
    }
  }

  // ── 2. Onderverkende skills (gewicht 2x) ──
  // Skills met minder taken completions krijgen een boost
  const completionsBySkill: Record<Skill, number> = {} as Record<Skill, number>;
  ALL_SKILLS.forEach((sk) => { completionsBySkill[sk] = 0; });
  for (const c of weekTaskCompletions) {
    const skill = taskSkillMap[c.taskId];
    if (skill) completionsBySkill[skill]++;
  }
  const totalCompletions = weekTaskCompletions.length;
  if (totalCompletions > 0) {
    const avgPerSkill = totalCompletions / ALL_SKILLS.length;
    for (const sk of ALL_SKILLS) {
      const deficit = Math.max(0, avgPerSkill - completionsBySkill[sk]);
      if (deficit > 0) {
        // Normaliseer: hoe groter het deficit t.o.v. gemiddelde, hoe meer boost
        const boost = Math.min(deficit / Math.max(avgPerSkill, 1), 1) * 2;
        scores[sk] += boost;
        if (completionsBySkill[sk] === 0) {
          reasons[sk].push('nog niet geoefend');
        } else {
          reasons[sk].push('minder geoefend');
        }
      }
    }
  }

  // ── 3. Recente outcomes (gewicht 2x) ──
  // Skills met slechte recente outcomes krijgen een boost
  // Kijk naar de laatste 4 weken aan outcomes
  const recentOutcomes = taskOutcomes.slice(-30); // laatste ~30 outcomes
  const outcomeBySkill: Record<Skill, { total: number; struggles: number }> = {} as any;
  ALL_SKILLS.forEach((sk) => { outcomeBySkill[sk] = { total: 0, struggles: 0 }; });
  for (const o of recentOutcomes) {
    const skill = o.skill ?? taskSkillMap[o.taskId];
    if (skill) {
      outcomeBySkill[skill].total++;
      if (o.outcome === 'Deels' || o.outcome === 'Niet') {
        outcomeBySkill[skill].struggles++;
      }
    }
  }
  for (const sk of ALL_SKILLS) {
    const { total, struggles } = outcomeBySkill[sk];
    if (total > 0 && struggles > 0) {
      const struggleRatio = struggles / total;
      scores[sk] += struggleRatio * 2;
      if (struggleRatio >= 0.5) {
        reasons[sk].push('hier kun je nog groeien');
      }
    }
  }

  // ── 4. Module gaps (gewicht 1.5x) ──
  // Skills waar geen enkele module volledig is afgerond
  const completedModuleSkills = new Set<Skill>();
  for (const [moduleId, progress] of Object.entries(stageProgress)) {
    if (progress.completedAt) {
      // Module is volledig afgerond — zoek de skill
      for (const sk of ALL_SKILLS) {
        const modules = getLearningModulesForSkill(sk);
        if (modules.some((m) => m.id === moduleId)) {
          completedModuleSkills.add(sk);
          break;
        }
      }
    }
  }
  for (const sk of ALL_SKILLS) {
    if (!completedModuleSkills.has(sk)) {
      scores[sk] += 1.5;
      // Alleen als er geen andere sterkere reden is
      if (reasons[sk].length === 0) {
        reasons[sk].push('verdiep je met een module');
      }
    }
  }

  // ── 5. Pulse correlatie (gewicht 1x) ──
  // Skills gekoppeld aan pulse check-ins met lage scores (antwoordIndex 0 of 1)
  const recentPulse = pulseCheckIns.slice(-14); // laatste 2 weken
  // Pulse vragen zijn gekoppeld aan skills via PULSE_QUESTIONS, maar we hebben
  // alleen questionId. Simplified: tel lage scores als generiek signaal.
  const lowPulseCount = recentPulse.filter((p) => p.antwoordIndex <= 1).length;
  if (recentPulse.length > 0 && lowPulseCount > 0) {
    const lowRatio = lowPulseCount / recentPulse.length;
    // Boost skills met meeste struggles van outcomes (overlap)
    for (const sk of ALL_SKILLS) {
      const { total, struggles } = outcomeBySkill[sk];
      if (total > 0 && struggles > 0) {
        scores[sk] += lowRatio * 1;
      }
    }
    // Als er geen outcome data is, boost de doel-skills
    if (recentOutcomes.length === 0 && doelen.length > 0) {
      for (const doel of doelen) {
        const mapped = DOEL_SKILL_MAP[doel];
        if (mapped) {
          for (const sk of mapped) {
            scores[sk] += lowRatio * 1;
          }
        }
      }
    }
  }

  // ── Sorteer en geef top aanbevelingen terug ──
  const recommendations: SkillRecommendation[] = ALL_SKILLS
    .map((sk) => ({
      skill: sk,
      score: Math.round(scores[sk] * 10) / 10,
      reason: reasons[sk].length > 0 ? reasons[sk][0] : 'alle skills zijn belangrijk',
    }))
    .sort((a, b) => b.score - a.score);

  return recommendations;
}

/**
 * Geeft de top-N aanbevolen skills terug.
 */
export function getTopRecommendedSkills(
  params: Parameters<typeof getSkillRecommendations>[0],
  n: number = 2,
): SkillRecommendation[] {
  const all = getSkillRecommendations(params);
  // Filter skills met score > 0
  const meaningful = all.filter((r) => r.score > 0);
  return meaningful.length > 0 ? meaningful.slice(0, n) : all.slice(0, n);
}
