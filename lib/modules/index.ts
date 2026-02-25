import type { LearningModule, Skill, ThemeTag } from "../types";

export { EMOTIECOACHING_MODULES } from "./emotiecoaching";
export { AANWEZIGHEID_MODULES } from "./aanwezigheid";
export { ZELFREGULATIE_MODULES } from "./zelfregulatie";
export { GRENZEN_MODULES } from "./grenzen";
export { AUTONOMIE_MODULES } from "./autonomie";
export { HERSTEL_MODULES } from "./herstel";
export { VERBINDING_MODULES } from "./verbinding";
export { REFLECTIE_MODULES } from "./reflectie";
export { BONUSKIND_MODULES } from "./bonuskind";
export { LASTIG_GEDRAG_MODULES } from "./lastig-gedrag";
export { ADHD_MODULES } from "./adhd";
export { HOOGGEVOELIG_MODULES } from "./hooggevoelig";
export { PRIKKELVERWERKING_MODULES } from "./prikkelverwerking";

import { EMOTIECOACHING_MODULES } from "./emotiecoaching";
import { AANWEZIGHEID_MODULES } from "./aanwezigheid";
import { ZELFREGULATIE_MODULES } from "./zelfregulatie";
import { GRENZEN_MODULES } from "./grenzen";
import { AUTONOMIE_MODULES } from "./autonomie";
import { HERSTEL_MODULES } from "./herstel";
import { VERBINDING_MODULES } from "./verbinding";
import { REFLECTIE_MODULES } from "./reflectie";
import { BONUSKIND_MODULES } from "./bonuskind";
import { LASTIG_GEDRAG_MODULES } from "./lastig-gedrag";
import { ADHD_MODULES } from "./adhd";
import { HOOGGEVOELIG_MODULES } from "./hooggevoelig";
import { PRIKKELVERWERKING_MODULES } from "./prikkelverwerking";

export function getLearningModulesForSkill(skill: Skill, activeThemes: ThemeTag[] = []): LearningModule[] {
  const map: Record<Skill, LearningModule[]> = {
    Emotiecoaching: EMOTIECOACHING_MODULES,
    Zelfregulatie: ZELFREGULATIE_MODULES,
    Aanwezigheid: AANWEZIGHEID_MODULES,
    Grenzen: GRENZEN_MODULES,
    Autonomie: AUTONOMIE_MODULES,
    Herstel: HERSTEL_MODULES,
    Verbinding: VERBINDING_MODULES,
    Reflectie: REFLECTIE_MODULES,
  };
  const base = map[skill] || [];

  // Voeg themed modules toe als de gebruiker actieve thema's heeft
  if (activeThemes.length > 0) {
    const allThemed = [...BONUSKIND_MODULES, ...LASTIG_GEDRAG_MODULES, ...ADHD_MODULES, ...HOOGGEVOELIG_MODULES, ...PRIKKELVERWERKING_MODULES];
    const matching = allThemed.filter(
      (m) => m.skill === skill && m.themes?.some((t) => activeThemes.includes(t))
    );
    return [...base, ...matching];
  }

  return base;
}

export function getAllModulesCount(activeThemes: ThemeTag[] = []): Record<Skill, number> {
  const skills: Skill[] = [
    "Emotiecoaching",
    "Zelfregulatie",
    "Aanwezigheid",
    "Grenzen",
    "Autonomie",
    "Herstel",
    "Verbinding",
    "Reflectie",
  ];
  return skills.reduce(
    (acc, skill) => {
      acc[skill] = getLearningModulesForSkill(skill, activeThemes).length;
      return acc;
    },
    {} as Record<Skill, number>,
  );
}
