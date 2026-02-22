export type AgeGroup = "0-2" | "3-5" | "6-9" | "10-12" | "13-16";

export type HelpAgeGroup = "0-3" | "4-7" | "8-12" | "13-18";

export interface HelpSituation {
  id: string;
  ageGroup: HelpAgeGroup;
  situatie: string;
  icon: string;
  watSpeeltInKind: string;
  watSpeeltInVader: string;
  psychologie: string;
  stappen: [string, string, string];
  voorbeeldzin: string;
  valkuil: string;
  skillLink: Skill;
}

export type Skill =
  | "Aanwezigheid"
  | "Emotiecoaching"
  | "Zelfregulatie"
  | "Grenzen"
  | "Autonomie"
  | "Herstel"
  | "Verbinding"
  | "Reflectie";

export type AppDoel =
  | "Rustiger reageren"
  | "Meer verbinding"
  | "Betere grenzen stellen"
  | "Mijn kind beter begrijpen"
  | "Gewoon een betere vader zijn"
  | "Minder schreeuwen"
  | "Meer geduld hebben"
  | "Beter luisteren"
  | "Herstellen na een ruzie"
  | "Mijn kind zelfstandiger maken"
  | "Bewuster opvoeden"
  | "Mijn eigen patronen doorbreken"
  | "Emoties beter begeleiden"
  | "Consequenter zijn"
  | "Meer quality time";

export interface Child {
  id: string;
  name: string;
  age: number;
  ageGroup: string; // "0-2", "3-5", "6-8", "9-12", "13+"
}

export interface DailyTaskCompletion {
  taskId: string;
  completedAt: string;
  points: number;
}

export interface UserProfile {
  naam: string;
  email: string;
  vaderLeeftijd?: number; // Optioneel voor backwards compatibility
  ageGroup: AgeGroup;
  doel: AppDoel; // Legacy: primary goal
  doelen?: AppDoel[]; // NIEUW: meerdere doelen
  startDate: string; // ISO date YYYY-MM-DD
  children?: Child[]; // NIEUW
  totalPoints?: number; // NIEUW
  currentStreak?: number; // NIEUW
  longestStreak?: number; // NIEUW
}

export interface Challenge {
  id: string;
  title: string;
  skill: Skill;
  ageGroups: AgeGroup[];
  durationMin: 2 | 5 | 10;
  goal: string;
  why: string;
  steps: string[];
  say: string;
  avoid: string;
}

export interface Completion {
  challengeId: string;
  skill: Skill;
  dateISO: string;
}

export interface OnboardingState {
  ageGroup: AgeGroup;
  skill: Skill; // Primary skill
  skills?: Skill[]; // Multiple skills (optional)
}

export type QuestionDifficulty = "basis" | "gevorderd" | "expert";

export type TrainingItemType = "quiz" | "oefening";

export interface QuizOption {
  id: string; // "a", "b", "c"
  text: string;
  isCorrect: boolean;
  feedback: string; // Waarom juist/onjuist
}

export interface TrainingItem {
  id: string; // "ec_1", "ec_2", etc.
  skill: Skill;
  type: TrainingItemType;
  difficulty: QuestionDifficulty;
  order: number; // 1-25
  
  // Voor quiz
  question?: string;
  context?: string; // Optionele uitleg vooraf
  options?: QuizOption[];
  explanation?: string; // Diepere uitleg na antwoord
  
  // Voor oefening
  exercise?: string;
  instructions?: string;
  duration?: number; // Minuten
  
  // Meta
  research?: string; // Bron (Gottman, Siegel, etc)
}

export interface TrainingProgress {
  skill: Skill;
  completedItems: string[]; // IDs van voltooide items
  correctAnswers: number;
  totalAttempts: number;
  lastItemId: string | null; // Waar gestopt
  completedAt?: string; // ISO date als helemaal af
  xpEarned: number;
}

export type LearningContentType = "video" | "text" | "example" | "diagram" | "questions" | "reflection" | "exercise";

export interface LearningContent {
  type: LearningContentType;
  
  // Voor video
  youtubeId?: string;
  videoTitle?: string;
  videoDuration?: string;
  
  // Voor text
  text?: string;
  heading?: string;
  
  // Voor example
  situation?: string;
  wrongApproach?: string;
  rightApproach?: string;
  explanation?: string;
  
  // Voor diagram
  diagramTitle?: string;
  diagramData?: {
    label: string;
    description: string;
    emoji: string;
  }[];
  
  // Voor questions/reflection
  questions?: string[];
  
  // Voor exercise
  title?: string;
  instructions?: string;
  duration?: number;
  tips?: string[];
}

export interface ModuleQuizQuestion {
  question: string;
  options: { text: string; isCorrect: boolean }[];
  explanation: string;
}

export interface LearningModule {
  id: string;
  skill: Skill;
  title: string;
  description: string;
  duration: string; // "15-20 min"
  difficulty: QuestionDifficulty;
  order: number;
  content: LearningContent[];
  keyTakeaways: string[];
  research?: string;
  quizQuestions?: ModuleQuizQuestion[];
}

export interface LearningModuleProgress {
  moduleId: string;
  skill: Skill;
  completed: boolean;
  completedAt?: string;
}

export interface LearningModuleProgress {
  moduleId: string;
  skill: Skill;
  completed: boolean;
  completedAt?: string;
}

export interface DailyTask {
  id: string;
  day: number;
  title: string;
  description: string;
  skill: Skill;
  durationMin: number;
  waarom?: string; // Waarom werkt dit?
  skillTip?: string; // Pro tip
  vermijd?: string; // Wat niet te doen
}

// ── Nieuwe interactieve taken ──────────────────────────────────
export interface InteractiveTask {
  id: string;
  title: string;
  skill: Skill;
  description: string;
  difficulty: QuestionDifficulty;

  // Taaktype: 'interactive' (oefening) of 'module' (leermodule als weekstaak)
  taskType?: 'interactive' | 'module';
  // Alleen bij taskType === 'module':
  moduleId?: string;
  moduleDuration?: string; // bijv. "18-22 min"

  // XP – ronde 1 gebruikt 'points', ronde 2 gebruikt 'xpReward'
  points?: number;
  xpReward?: number;

  // Duur – ronde 1 gebruikt 'duration' (string), ronde 2 gebruikt 'durationMin' (number)
  duration?: string;
  durationMin?: number;

  // Leeftijd – ronde 1 gebruikt 'ageGroups' (array), ronde 2 gebruikt 'ageGroup' (string)
  ageGroups?: AgeGroup[];
  ageGroup?: AgeGroup;

  // Ronde 2 formaat (stap-voor-stap)
  instructions?: string[];
  reflection?: string;
  scienceNote?: string;

  // Ronde 1 formaat (uitklap-content)
  psychologie?: string;
  skillTip?: string;
  vermijd?: string;
  leerdoel?: string;
  bron?: string;
  moduleRef?: string;
}

export interface TaskCompletion {
  taskId: string;
  dateISO: string;
}

// ── Training & Learning ───────────────────────────────────────
export type CompletionStatus = "Gelukt" | "Deels" | "Niet";

export interface WeekPlan {
  weekKey: string; // YYYY-MM-DD van maandag
  skill: Skill;
  days: { date: string; challengeId: string }[]; // ma-vr
  scenarioDay: string; // vrijdag datum
}

export interface SkillProgress {
  xp: number;
  level: 1 | 2 | 3;
  lastUpdated: string;
}

export interface ScenarioOption {
  id: string;
  text: string;
  feedback: string;
  score: "goed" | "matig" | "slecht";
}

export interface Scenario {
  id: string;
  ageGroups: AgeGroup[];
  skill: Skill;
  situation: string;
  prompt: string;
  options: ScenarioOption[];
}

export interface ScenarioCompletion {
  scenarioId: string;
  optionId: string;
  score: "goed" | "matig" | "slecht";
  dateISO: string;
  skill: Skill;
}

// ── Vader Pulse check-in ──────────────────────────────────────
export interface PulseQuestion {
  id: string;
  skill: Skill;
  vraag: string;
  antwoorden: [string, string, string, string]; // Altijd 4 opties
  inzicht: string;  // Micro-leermoment na het antwoorden
  bron: string;     // Wetenschappelijke bron (kort)
}

export interface PulseCheckIn {
  date: string;       // YYYY-MM-DD
  questionId: string;
  antwoordIndex: number; // 0-3
  notitie?: string;   // Optionele vrije tekst
}

export interface PulseStats {
  totalCheckIns: number;
  currentStreak: number;
  longestStreak: number;
  perSkill: Partial<Record<Skill, number>>; // Aantal check-ins per skill
  lastCheckIn?: string; // YYYY-MM-DD
}

// ── Interactieve Leer-Etappes (Vader Missies) ──────────────────
export type StageType =
  | "insight_cards"
  | "scenario"
  | "quiz"
  | "video"
  | "mission"
  | "reflection";

export interface InsightCard {
  title: string;
  body: string;
  highlight?: string;
  emoji?: string;
  isSamenvatting?: boolean;
}

export interface ScenarioChoice {
  id: string;
  text: string;
  isCorrect: boolean;
  fullText: string;
}

export interface QuizQuestion {
  question: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  explanation: string;
}

export interface Stage {
  id: string;
  type: StageType;
  xpReward: number;
  stageLabel?: string;
  // insight_cards
  cards?: InsightCard[];
  // scenario
  situation?: string;
  choices?: ScenarioChoice[];
  explanation?: string;
  // quiz
  questions?: QuizQuestion[];
  // video
  youtubeId?: string;
  videoTitle?: string;
  videoDuration?: string;
  videoContext?: string;
  keyTakeaway?: string;
  // mission
  missionTitle?: string;
  missionInstructions?: string;
  missionDuration?: number;
  missionTips?: string[];
  // reflection
  reflectionQuestion?: string;
  allQuestions?: string[];
  summaryCard?: { title: string; body: string };
}

export interface ModuleStages {
  moduleId: string;
  skill: Skill;
  title: string;
  description: string;
  stages: Stage[];
  totalXP: number;
  keyTakeaways: string[];
  research?: string;
}

export interface StageProgress {
  moduleId: string;
  completedStageIds: string[];
  currentStageIndex: number;
  quizCorrect: number;
  quizTotal: number;
  startedAt?: string;
  completedAt?: string;
}
