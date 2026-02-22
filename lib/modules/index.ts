import type { LearningModule, Skill } from "../types";

export { EMOTIECOACHING_MODULES } from "./emotiecoaching";
export { AANWEZIGHEID_MODULES } from "./aanwezigheid";
export { ZELFREGULATIE_MODULES } from "./zelfregulatie";
export { GRENZEN_MODULES } from "./grenzen";
export { AUTONOMIE_MODULES } from "./autonomie";
export { HERSTEL_MODULES } from "./herstel";
export { VERBINDING_MODULES } from "./verbinding";
export { REFLECTIE_MODULES } from "./reflectie";

import { EMOTIECOACHING_MODULES } from "./emotiecoaching";
import { AANWEZIGHEID_MODULES } from "./aanwezigheid";
import { ZELFREGULATIE_MODULES } from "./zelfregulatie";
import { GRENZEN_MODULES } from "./grenzen";
import { AUTONOMIE_MODULES } from "./autonomie";
import { HERSTEL_MODULES } from "./herstel";
import { VERBINDING_MODULES } from "./verbinding";
import { REFLECTIE_MODULES } from "./reflectie";

export function getLearningModulesForSkill(skill: Skill): LearningModule[] {
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
  return map[skill] || [];
}

export function getAllModulesCount(): Record<Skill, number> {
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
      acc[skill] = getLearningModulesForSkill(skill).length;
      return acc;
    },
    {} as Record<Skill, number>,
  );
}
