import type { Skill, SkillProgress } from "./types";

export interface SkillLevel {
  level: 1 | 2 | 3;
  title: string;
  description: string;
  xpRequired: number;
}

export const SKILL_LEVELS: Record<Skill, SkillLevel[]> = {
  Aanwezigheid: [
    { level: 1, title: "Basis aanwezigheid", description: "Je leert bewust aanwezig te zijn zonder schermen en afleidingen.", xpRequired: 0 },
    { level: 2, title: "Actief luisteren", description: "Je ontwikkelt dieper luisteren en verbinding via check-ins.", xpRequired: 10 },
    { level: 3, title: "Kwalitatieve tijd", description: "Je creëert rituelen en momenten van echte verbinding.", xpRequired: 25 },
  ],
  Emotiecoaching: [
    { level: 1, title: "Emoties herkennen", description: "Je leert gevoelens bij je kind te benoemen en erkennen.", xpRequired: 0 },
    { level: 2, title: "Emoties reguleren", description: "Je helpt je kind gevoelens te begrijpen en ermee om te gaan.", xpRequired: 10 },
    { level: 3, title: "Emotionele intelligentie", description: "Je bouwt diepgaand emotioneel begrip en zelfregulatie.", xpRequired: 25 },
  ],
  Zelfregulatie: [
    { level: 1, title: "Triggers herkennen", description: "Je wordt bewust van je eigen triggers en patronen.", xpRequired: 0 },
    { level: 2, title: "Pauze nemen", description: "Je ontwikkelt technieken om te de-escaleren in het moment.", xpRequired: 10 },
    { level: 3, title: "Proactieve rust", description: "Je voorkomt escalatie door goede zelfzorg en vooruitplanning.", xpRequired: 25 },
  ],
  Grenzen: [
    { level: 1, title: "Duidelijke grenzen", description: "Je leert grenzen stellen op een heldere, rustige manier.", xpRequired: 0 },
    { level: 2, title: "Consistente grenzen", description: "Je handhaaft grenzen consequent, ook onder druk.", xpRequired: 10 },
    { level: 3, title: "Warme grenzen", description: "Je combineert stevigheid met empathie en verbinding.", xpRequired: 25 },
  ],
  Autonomie: [
    { level: 1, title: "Keuzes geven", description: "Je biedt je kind echte keuzes binnen veilige kaders.", xpRequired: 0 },
    { level: 2, title: "Verantwoordelijkheid", description: "Je geeft taken en laat je kind eigenaarschap ontwikkelen.", xpRequired: 10 },
    { level: 3, title: "Zelfstandigheid", description: "Je vertrouwt je kind in grotere beslissingen en loslaten.", xpRequired: 25 },
  ],
  Herstel: [
    { level: 1, title: "Excuses maken", description: "Je erkent fouten en biedt herstel aan na conflicten.", xpRequired: 0 },
    { level: 2, title: "Actief herstellen", description: "Je zet excuses om in concrete gedragsverandering.", xpRequired: 10 },
    { level: 3, title: "Preventief herstel", description: "Je bouwt aan een positieve basis die moeilijke momenten opvangt.", xpRequired: 25 },
  ],
  Verbinding: [
    { level: 1, title: "Echt zien", description: "Je leert je kind echt te zien: wie hij/zij is, niet wie jij wilt dat het is.", xpRequired: 0 },
    { level: 2, title: "Kwetsbaar delen", description: "Je deelt eigen gevoelens en herinneringen om diepere band te bouwen.", xpRequired: 10 },
    { level: 3, title: "Veilige haven", description: "Je bent de persoon bij wie je kind altijd terechtkan, zonder oordeel.", xpRequired: 25 },
  ],
  Reflectie: [
    { level: 1, title: "Patronen herkennen", description: "Je ziet welke situaties jou triggeren en waarom.", xpRequired: 0 },
    { level: 2, title: "Bewust reageren", description: "Je kiest je reactie i.p.v. automatisch te reageren uit oud pijn.", xpRequired: 10 },
    { level: 3, title: "Generatie-brekers", description: "Je doorbreekt patronen uit je eigen jeugd en creëert nieuw gedrag.", xpRequired: 25 },
  ],
};

export function getCurrentLevel(xp: number): 1 | 2 | 3 {
  if (xp >= 25) return 3;
  if (xp >= 10) return 2;
  return 1;
}

export function getNextLevelXP(currentLevel: 1 | 2 | 3): number | null {
  if (currentLevel === 1) return 10;
  if (currentLevel === 2) return 25;
  return null; // Max level
}

export function getProgressToNextLevel(xp: number): { current: number; target: number | null; percentage: number } {
  const level = getCurrentLevel(xp);
  const target = getNextLevelXP(level);
  
  if (target === null) {
    return { current: xp, target: null, percentage: 100 };
  }
  
  const previousThreshold = level === 1 ? 0 : level === 2 ? 10 : 25;
  const current = xp - previousThreshold;
  const range = target - previousThreshold;
  const percentage = Math.min(100, Math.round((current / range) * 100));
  
  return { current: xp, target, percentage };
}
