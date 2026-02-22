import type { Skill } from "./types";
import type { IconName } from "./icons";

export interface SkillInfo {
  label: Skill;
  omschrijving: string;
  microTip: string;
  emoji: string;
  icon: IconName;
}

export const SKILLS: Record<Skill, SkillInfo> = {
  Aanwezigheid: {
    label: "Aanwezigheid",
    omschrijving: "Echt aanwezig zijn: zonder afleiding, met volle aandacht.",
    microTip: "Even 2 minuten écht aanwezig zijn doet meer dan een uur half aanwezig zijn.",
    emoji: "👁️",
    icon: "eye",
  },
  Emotiecoaching: {
    label: "Emotiecoaching",
    omschrijving: "Gevoelens herkennen, benoemen en begeleiden — bij je kind én jezelf.",
    microTip: "Labelen kalmeert. Zeg gewoon wat je ziet: 'je bent boos.'",
    emoji: "❤️",
    icon: "heart",
  },
  Zelfregulatie: {
    label: "Zelfregulatie",
    omschrijving: "Kalm blijven onder druk en bewust reageren in plaats van reageren.",
    microTip: "Jouw rust is besmettelijk. Eén adem voor je reageert verandert de hele sfeer.",
    emoji: "🧘",
    icon: "waves",
  },
  Grenzen: {
    label: "Grenzen",
    omschrijving: "Duidelijke kaders stellen op een warme, consistente manier.",
    microTip: "Kort + warm + herhalen. Geen discussie, wel verbinding.",
    emoji: "🛑",
    icon: "shield",
  },
  Autonomie: {
    label: "Autonomie",
    omschrijving: "Je kind laten groeien door zelf te doen, kiezen en leren van fouten.",
    microTip: "Vraag 'wat is je plan?' — dat ene zinnetje bouwt meer dan een uur uitleggen.",
    emoji: "🚀",
    icon: "sprout",
  },
  Herstel: {
    label: "Herstel",
    omschrijving: "Na een conflict de relatie herstellen en verbinding terugbrengen.",
    microTip: "Sorry zeggen als vader is geen zwakte — het is het sterkste wat je kunt doen.",
    emoji: "🔧",
    icon: "refreshCw",
  },
  Verbinding: {
    label: "Verbinding",
    omschrijving: "Diepere emotionele band opbouwen door kwetsbaar en open te zijn.",
    microTip: "Deel je eigen gevoelens. 'Ik vond het ook moeilijk toen ik klein was' opent deuren.",
    emoji: "🔗",
    icon: "handshake",
  },
  Reflectie: {
    label: "Reflectie",
    omschrijving: "Bewust worden van je patronen, triggers en groei als vader.",
    microTip: "Een vraag aan jezelf: 'Wat triggert mij hier écht?' verandert alles.",
    emoji: "🪞",
    icon: "brain",
  },
};

export const SKILL_LIST = Object.values(SKILLS);

export const ALL_SKILLS: Skill[] = Object.keys(SKILLS) as Skill[];
