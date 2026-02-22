// Transformeert een LearningModule in interactieve Stage[] voor de "Vader Missies" ervaring
import type {
  LearningModule,
  Stage,
  ModuleStages,
  InsightCard,
  ScenarioChoice,
  QuizQuestion,
} from './types';

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Haal een opvallend feit/statistiek uit de tekst als highlight (volledige zin) */
function extractHighlight(text: string): string | undefined {
  const pctMatch = text.match(/[^.!?]*\d+[.,]?\d*\s*(%|procent)[^.!?]*[.!?]/i);
  if (pctMatch) return pctMatch[0].trim();

  const numMatch = text.match(
    /[^.!?]*\d+\s*(minuten|uur|seconden|slagen|jaar|keer|dagen|weken|spm|bpm)[^.!?]*[.!?]/i,
  );
  if (numMatch) return numMatch[0].trim();

  const researchMatch = text.match(
    /[^.!?]*(studie|onderzoek|experiment|meta-analyse)[^.!?]*[.!?]/i,
  );
  if (researchMatch) return researchMatch[0].trim();

  return undefined;
}

/** Haal de aanpak-titel op uit de eerste regel: "❌ TITEL:" → "Titel" */
function extractApproachTitle(approach: string): string {
  // Match: emoji + titel tot aan de dubbelpunt op de eerste regel
  const titleMatch = approach.match(/^[❌✅]\s*(.+?):\s*$/m);
  if (titleMatch) {
    // Converteer "ALLE CAPS TITEL" naar "Alle caps titel"
    const raw = titleMatch[1].trim();
    if (raw === raw.toUpperCase() && raw.length > 3) {
      return raw.charAt(0) + raw.slice(1).toLowerCase();
    }
    return raw;
  }
  // Fallback: eerste regel na emoji
  const firstLine = approach.replace(/^[❌✅]\s*/, '').split('\n')[0]?.trim();
  return firstLine?.slice(0, 60) || 'Aanpak';
}

/** Inverteer een kernpunt om een geloofwaardig maar fout alternatief te maken */
function invertTakeaway(text: string): string {
  const swaps: [RegExp, string][] = [
    [/\bbelangrijker\b/i, 'minder belangrijk'],
    [/\bwaardevoller\b/i, 'minder waardevol'],
    [/\bschadelijker\b/i, 'minder schadelijk'],
    [/\beffectiever\b/i, 'minder effectief'],
    [/\bkrachtiger\b/i, 'minder krachtig'],
    [/\bbeter\b/i, 'minder goed'],
    [/\bmeer\b/i, 'minder'],
    [/\bminder\b/i, 'meer'],
    [/\bwel\b/i, 'niet'],
    [/\bniet\b/i, 'wel'],
    [/\bgeen\b/i, 'veel'],
    [/\bhelpt\b/i, 'helpt niet bij'],
    [/\bvoorkomt\b/i, 'vergroot'],
    [/\bvermindert\b/i, 'versterkt'],
    [/\bversterkt\b/i, 'vermindert'],
    [/\bnodig\b/i, 'niet nodig'],
    [/\bessentieel\b/i, 'overbodig'],
    [/\bkan\b/i, 'kan niet'],
    [/\baltijd\b/i, 'zelden'],
    [/\bnooit\b/i, 'altijd'],
  ];

  for (const [pattern, replacement] of swaps) {
    if (pattern.test(text)) {
      return text.replace(pattern, replacement);
    }
  }
  // Fallback: neem het tegenovergestelde
  const clean = text.replace(/^[-•]\s*/, '');
  return `Het is niet zo dat ${clean.charAt(0).toLowerCase()}${clean.slice(1)}`;
}

// ── Hoofdfunctie ─────────────────────────────────────────────────────────────

export function transformModuleToStages(mod: LearningModule): ModuleStages {
  // Categoriseer content
  const textSections = mod.content.filter((c) => c.type === 'text');
  const examples = mod.content.filter((c) => c.type === 'example');
  const diagrams = mod.content.filter((c) => c.type === 'diagram');
  const reflections = mod.content.filter(
    (c) => c.type === 'reflection' || c.type === 'questions',
  );
  const exercises = mod.content.filter((c) => c.type === 'exercise');

  // Split tekst-secties in logische groepen
  const learningTexts = textSections.filter(
    (s) => s.text && !s.heading?.toLowerCase().includes('toolkit') && !s.heading?.includes('Samenvatting'),
  );
  const toolkitTexts = textSections.filter(
    (s) => s.text && s.heading?.toLowerCase().includes('toolkit'),
  );
  const summaryTexts = textSections.filter(
    (s) => s.text && s.heading?.includes('Samenvatting'),
  );

  const stages: Stage[] = [];
  let stageIdx = 0;

  // ── 1. INZICHTEN — hook, kern-inzicht, wetenschap + diagram ───
  const insightCards: InsightCard[] = [];

  for (const section of learningTexts) {
    if (!section.text) continue;
    insightCards.push({
      title: section.heading ?? `Inzicht ${insightCards.length + 1}`,
      body: section.text.trim(),
      highlight: extractHighlight(section.text),
    });
  }

  // Diagram items als kaarten
  for (const diagram of diagrams) {
    if (!diagram.diagramData) continue;
    for (const item of diagram.diagramData) {
      insightCards.push({
        title: item.label,
        body: item.description,
        emoji: item.emoji,
      });
    }
  }

  if (insightCards.length > 0) {
    stages.push({
      id: `${mod.id}_s${stageIdx}`,
      type: 'insight_cards',
      xpReward: 5,
      stageLabel: 'INZICHTEN',
      cards: insightCards,
    });
    stageIdx++;
  }

  // ── 2. SCENARIO ────────────────────────────────────────────────
  const primaryExample = examples[0];
  if (primaryExample?.situation && primaryExample.wrongApproach && primaryExample.rightApproach) {
    const hash = mod.id.split('').reduce((s, c) => s + c.charCodeAt(0), 0);
    const wrongFirst = hash % 2 === 0;

    const wrongChoice: ScenarioChoice = {
      id: `${mod.id}_wrong`,
      text: extractApproachTitle(primaryExample.wrongApproach),
      isCorrect: false,
      fullText: primaryExample.wrongApproach,
    };
    const rightChoice: ScenarioChoice = {
      id: `${mod.id}_right`,
      text: extractApproachTitle(primaryExample.rightApproach),
      isCorrect: true,
      fullText: primaryExample.rightApproach,
    };

    stages.push({
      id: `${mod.id}_s${stageIdx}`,
      type: 'scenario',
      xpReward: 15,
      stageLabel: 'SCENARIO',
      situation: primaryExample.situation,
      choices: wrongFirst ? [wrongChoice, rightChoice] : [rightChoice, wrongChoice],
      explanation: primaryExample.explanation ?? undefined,
    });
    stageIdx++;
  }

  // ── 3. JE TOOLKIT — praktische tips (na scenario) ─────────────
  if (toolkitTexts.length > 0) {
    const toolkitCards: InsightCard[] = toolkitTexts.map((section) => ({
      title: mod.title,
      body: section.text!.trim(),
      highlight: extractHighlight(section.text!),
    }));

    stages.push({
      id: `${mod.id}_s${stageIdx}`,
      type: 'insight_cards',
      xpReward: 5,
      stageLabel: 'JE TOOLKIT',
      cards: toolkitCards,
    });
    stageIdx++;
  }

  // ── 4. QUIZ ────────────────────────────────────────────────────
  const quizQuestions: QuizQuestion[] = [];

  if (mod.quizQuestions && mod.quizQuestions.length > 0) {
    for (let qi = 0; qi < mod.quizQuestions.length; qi++) {
      const q = mod.quizQuestions[qi];
      quizQuestions.push({
        question: q.question,
        options: q.options.map((o, oi) => ({
          id: `q${qi}_${String.fromCharCode(97 + oi)}`,
          text: o.text,
          isCorrect: o.isCorrect,
        })),
        explanation: q.explanation,
      });
    }
  } else {
    const hash = mod.id.split('').reduce((s, c) => s + c.charCodeAt(0), 0);

    if (mod.keyTakeaways.length >= 2) {
      const correctFirst = hash % 2 === 0;
      const opts = [
        { id: 'q1_a', text: mod.keyTakeaways[0], isCorrect: true },
        { id: 'q1_b', text: invertTakeaway(mod.keyTakeaways[1]), isCorrect: false },
      ];
      quizQuestions.push({
        question: 'Welk inzicht klopt volgens deze module?',
        options: correctFirst ? opts : [opts[1], opts[0]],
        explanation: mod.keyTakeaways[0],
      });
    }

    if (mod.keyTakeaways.length >= 4) {
      const correctFirst = (hash + 1) % 2 === 0;
      const opts = [
        { id: 'q2_a', text: mod.keyTakeaways[2], isCorrect: true },
        { id: 'q2_b', text: invertTakeaway(mod.keyTakeaways[3]), isCorrect: false },
      ];
      quizQuestions.push({
        question: 'Welk advies past bij de principes van deze module?',
        options: correctFirst ? opts : [opts[1], opts[0]],
        explanation: mod.keyTakeaways[2],
      });
    } else if (mod.keyTakeaways.length >= 3) {
      const correctFirst = (hash + 1) % 2 === 0;
      const opts = [
        { id: 'q2_a', text: mod.keyTakeaways[2], isCorrect: true },
        { id: 'q2_b', text: invertTakeaway(mod.keyTakeaways[0]), isCorrect: false },
      ];
      quizQuestions.push({
        question: 'Welk advies past bij de principes van deze module?',
        options: correctFirst ? opts : [opts[1], opts[0]],
        explanation: mod.keyTakeaways[2],
      });
    }
  }

  if (quizQuestions.length > 0) {
    stages.push({
      id: `${mod.id}_s${stageIdx}`,
      type: 'quiz',
      xpReward: 10,
      stageLabel: 'QUIZ',
      questions: quizQuestions,
    });
    stageIdx++;
  }

  // ── 5. MISSIE — volledige instructies ──────────────────────────
  const exercise = exercises[0];
  if (exercise) {
    stages.push({
      id: `${mod.id}_s${stageIdx}`,
      type: 'mission',
      xpReward: 20,
      stageLabel: 'MISSIE',
      missionTitle: exercise.title ?? 'Jouw missie deze week',
      missionInstructions: exercise.instructions ?? undefined,
      missionDuration: exercise.duration,
      missionTips: exercise.tips,
    });
    stageIdx++;
  }

  // ── 6. REFLECTIE + samenvatting ────────────────────────────────
  const reflectionSection = reflections[0];
  if (reflectionSection?.questions && reflectionSection.questions.length > 0) {
    const sorted = [...reflectionSection.questions].sort((a, b) => {
      const aPersonal = /\bjij\b|\bje\b|\bjouw\b/i.test(a) ? 1 : 0;
      const bPersonal = /\bjij\b|\bje\b|\bjouw\b/i.test(b) ? 1 : 0;
      if (aPersonal !== bPersonal) return bPersonal - aPersonal;
      return b.length - a.length;
    });

    // Samenvatting als afsluitkaart bij reflectie
    const summary = summaryTexts[0];
    const summaryCard = summary?.text
      ? { title: 'In het kort', body: summary.text.trim() }
      : undefined;

    stages.push({
      id: `${mod.id}_s${stageIdx}`,
      type: 'reflection',
      xpReward: 10,
      stageLabel: 'REFLECTIE',
      reflectionQuestion: sorted[0],
      allQuestions: reflectionSection.questions,
      summaryCard,
    });
    stageIdx++;
  }

  const totalXP = stages.reduce((sum, s) => sum + s.xpReward, 0);

  return {
    moduleId: mod.id,
    skill: mod.skill,
    title: mod.title,
    description: mod.description,
    stages,
    totalXP,
    keyTakeaways: mod.keyTakeaways,
    research: mod.research,
  };
}
