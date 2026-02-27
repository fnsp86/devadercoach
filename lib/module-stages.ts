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
  // Gebruik keuze-voorbeeld (examples[1]) als beschikbaar, anders examples[0]
  const primaryExample = examples[1] ?? examples[0];
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

// ── Ontdekkaarten transformatie ──────────────────────────────────────────────

/** Split tekst in zinnen, groepeer in blokken van ~3-5 zinnen */
function splitIntoChunks(text: string, maxSentences: number = 4): string[] {
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text];
  const chunks: string[] = [];
  for (let i = 0; i < sentences.length; i += maxSentences) {
    const chunk = sentences.slice(i, i + maxSentences).join(' ').trim();
    if (chunk.length > 20) chunks.push(chunk);
  }
  return chunks;
}

/** Extraheer verrassende feiten uit tekst (zinnen met getallen, onderzoek, etc.) */
function extractFacts(text: string): string[] {
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [];
  return sentences
    .filter((s) =>
      /\d+\s*(%|procent)/i.test(s) ||
      /\d+\s*(minuten|uur|seconden|jaar|keer|dagen|weken|maanden)/i.test(s) ||
      /(studie|onderzoek|experiment|meta-analyse|onderzoekers|professor|wetenschapper|psycholoog|neuroloog|universiteit|harvard|yale|stanford)/i.test(s) ||
      /(blijkt|toont aan|bewezen|aangetoond|wetenschappelijk|neurologisch|hersenonderzoek|brein|cortisol|oxytocine|amygdala|prefrontale)/i.test(s) ||
      /(kinderen die|vaders die|ouders die|gezinnen waar|uit onderzoek)/i.test(s),
    )
    .map((s) => s.trim())
    .filter((s) => s.length > 30 && s.length < 300);
}

/** Splits toolkit tekst in individuele tips */
function extractTips(text: string): { title: string; body: string }[] {
  const lines = text.split('\n').filter((l) => l.trim().length > 0);
  const tips: { title: string; body: string }[] = [];

  for (const line of lines) {
    // Format: "1. Titel. Uitleg hier." — numbered tip met punt als scheiding
    const numbered = line.match(/^[\d•·]+[.)]\s*(.+?)\.\s+(.+)/);
    if (numbered && numbered[1].length >= 3) {
      tips.push({ title: numbered[1].replace(/\*/g, '').trim(), body: numbered[2].trim() });
      continue;
    }
    // "**Titel**: uitleg" or bold formats
    const bold = line.match(/^\*\*(.+?)\*\*[:\s]*(.+)/);
    if (bold) {
      tips.push({ title: bold[1].trim(), body: bold[2].trim() });
      continue;
    }
    // "Titel — uitleg" or "Titel: uitleg" (met em-dash of dubbelpunt)
    const dashSplit = line.match(/^(.{5,40}?)\s*[—–:]\s+(.{20,})/);
    if (dashSplit) {
      tips.push({ title: dashSplit[1].trim(), body: dashSplit[2].trim() });
      continue;
    }
  }

  // Fallback: split at sentence boundaries into groups
  if (tips.length === 0) {
    const chunks = splitIntoChunks(text, 2);
    for (let i = 0; i < chunks.length && i < 3; i++) {
      tips.push({ title: `Tip ${i + 1}`, body: chunks[i] });
    }
  }

  return tips.slice(0, 4); // Max 4 tips
}

export function transformModuleToDiscoveryCards(mod: LearningModule): ModuleStages {
  const textSections = mod.content.filter((c) => c.type === 'text');
  const examples = mod.content.filter((c) => c.type === 'example');
  const diagrams = mod.content.filter((c) => c.type === 'diagram');
  const reflections = mod.content.filter((c) => c.type === 'reflection' || c.type === 'questions');
  const exercises = mod.content.filter((c) => c.type === 'exercise');

  const learningTexts = textSections.filter(
    (s) => s.text && !s.heading?.toLowerCase().includes('toolkit') && !s.heading?.includes('Samenvatting'),
  );
  const toolkitTexts = textSections.filter(
    (s) => s.text && s.heading?.toLowerCase().includes('toolkit'),
  );

  const stages: Stage[] = [];
  // Counters per type for semantic IDs
  const typeCount: Record<string, number> = {};
  function stageId(type: string): string {
    const n = typeCount[type] ?? 0;
    typeCount[type] = n + 1;
    return n === 0 ? `${mod.id}_${type}` : `${mod.id}_${type}_${n}`;
  }

  // ── 1. HERKEN — relatable opening ──
  const example = examples[0];
  if (example?.situation) {
    stages.push({
      id: stageId('herken'),
      type: 'herken',
      xpReward: 0,
      stageLabel: 'HERKEN DIT?',
      herkenText: example.situation,
    });
  }

  // ── 2-5. INZICHT kaarten — leerstof in volle stukken ──
  const allFacts: string[] = [];
  let inzichtCount = 0;

  for (const section of learningTexts) {
    if (!section.text) continue;

    // Extract facts for wist-je-dat later
    allFacts.push(...extractFacts(section.text));

    // Split long text into chunks of ~6 sentences (voller kaarten)
    const chunks = splitIntoChunks(section.text, 6);

    for (const chunk of chunks) {
      if (inzichtCount >= 4) break; // Max 4 inzicht cards (voller per kaart)

      const highlight = extractHighlight(chunk);
      // If chunk is really long, split into main + readMore
      const sentences = chunk.match(/[^.!?]+[.!?]+/g) ?? [chunk];
      let mainText = chunk;
      let readMore: string | undefined;

      if (sentences.length > 6) {
        mainText = sentences.slice(0, 6).join(' ').trim();
        readMore = sentences.slice(6).join(' ').trim();
      }

      stages.push({
        id: stageId('inzicht'),
        type: 'inzicht',
        xpReward: 3,
        stageLabel: section.heading ?? 'INZICHT',
        cards: [{
          title: section.heading ?? `Inzicht`,
          body: mainText,
          highlight,
        }],
        readMoreText: readMore,
      });
      inzichtCount++;
    }
  }

  // ── 6. WIST-JE-DAT — verrassende feiten (altijd 2) ──
  // Ook feiten uit toolkit-tekst halen
  for (const toolkit of toolkitTexts) {
    if (toolkit.text) allFacts.push(...extractFacts(toolkit.text));
  }

  const uniqueFacts = [...new Set(allFacts)];
  const researchSources = mod.research?.split(';').map((s) => s.trim()) ?? [];

  // Fallback: als niet genoeg feiten, gebruik keyTakeaways en research
  if (uniqueFacts.length < 2) {
    for (const takeaway of mod.keyTakeaways) {
      if (uniqueFacts.length >= 2) break;
      const clean = takeaway.trim();
      if (clean.length > 30 && clean.length < 300 && !uniqueFacts.includes(clean)) {
        uniqueFacts.push(clean);
      }
    }
  }
  if (uniqueFacts.length < 2 && mod.research) {
    // Gebruik research-referenties als feit
    for (const ref of researchSources) {
      if (uniqueFacts.length >= 2) break;
      if (ref.length > 15 && !uniqueFacts.includes(ref)) {
        uniqueFacts.push(ref);
      }
    }
  }

  {
    const facts = uniqueFacts.slice(0, 2).map((text, i) => ({
      text,
      source: researchSources[i] ?? researchSources[0],
    }));
    stages.push({
      id: stageId('wist_je_dat'),
      type: 'wist_je_dat',
      xpReward: 5,
      stageLabel: 'WIST JE DAT...',
      factText: facts[0]?.text ?? '',
      factSource: researchSources[0],
      facts,
    });
  }

  // ── 7. DIAGRAM — visueel model ──
  const diagram = diagrams[0];
  if (diagram?.diagramData && diagram.diagramData.length > 0) {
    stages.push({
      id: stageId('diagram'),
      type: 'diagram',
      xpReward: 3,
      stageLabel: diagram.diagramTitle ?? 'ZO WERKT HET',
      diagramIntro: diagram.diagramTitle ?? undefined,
      diagramItems: diagram.diagramData.map((d) => ({
        emoji: d.emoji,
        label: d.label,
        description: d.description,
      })),
    });
  }

  // ── 8. KEUZE-MOMENT — interactief scenario ──
  // Gebruik een apart keuze-voorbeeld als beschikbaar (examples[1]), anders fallback naar examples[0]
  const keuzeExample = examples[1] ?? example;
  if (keuzeExample?.wrongApproach && keuzeExample?.rightApproach) {
    const hash = mod.id.split('').reduce((s, c) => s + c.charCodeAt(0), 0);
    const wrongFirst = hash % 2 === 0;

    const wrongChoice: ScenarioChoice = {
      id: `${mod.id}_wrong`,
      text: extractApproachTitle(keuzeExample.wrongApproach),
      isCorrect: false,
      fullText: keuzeExample.wrongApproach,
    };
    const rightChoice: ScenarioChoice = {
      id: `${mod.id}_right`,
      text: extractApproachTitle(keuzeExample.rightApproach),
      isCorrect: true,
      fullText: keuzeExample.rightApproach,
    };

    stages.push({
      id: stageId('keuze'),
      type: 'keuze',
      xpReward: 10,
      stageLabel: 'WAT ZOU JIJ DOEN?',
      situation: keuzeExample.situation,
      choices: wrongFirst ? [wrongChoice, rightChoice] : [rightChoice, wrongChoice],
      explanation: keuzeExample.explanation ?? undefined,
    });
  }

  // ── 9. Extra INZICHT na keuze — waarom de goede aanpak werkt ──
  if (example?.explanation && example.explanation.length > 40) {
    stages.push({
      id: stageId('inzicht'),
      type: 'inzicht',
      xpReward: 3,
      stageLabel: 'WAAROM DIT WERKT',
      cards: [{
        title: 'Waarom dit werkt',
        body: example.explanation,
        highlight: extractHighlight(example.explanation),
      }],
    });
  }

  // ── 10-12. STRATEGIE kaarten — 1 tip per kaart ──
  const allTips: { title: string; body: string }[] = [];
  for (const toolkit of toolkitTexts) {
    if (!toolkit.text) continue;
    allTips.push(...extractTips(toolkit.text));
  }

  // Fallback: use keyTakeaways as strategies if no toolkit text
  if (allTips.length === 0 && mod.keyTakeaways.length > 0) {
    for (const takeaway of mod.keyTakeaways) {
      const parts = takeaway.split(/[.:]/).filter((p) => p.trim().length > 10);
      if (parts.length >= 2) {
        allTips.push({ title: parts[0].trim(), body: parts.slice(1).join('. ').trim() });
      } else {
        allTips.push({ title: 'Strategie', body: takeaway });
      }
    }
  }

  for (let i = 0; i < Math.min(allTips.length, 3); i++) {
    stages.push({
      id: stageId('strategie'),
      type: 'strategie',
      xpReward: 3,
      stageLabel: `STRATEGIE ${i + 1}`,
      strategieTitle: allTips[i].title,
      strategieText: allTips[i].body,
    });
  }

  // ── 13. UITDAGING — praktische missie ──
  const exercise = exercises[0];
  if (exercise) {
    stages.push({
      id: stageId('uitdaging'),
      type: 'uitdaging',
      xpReward: 10,
      stageLabel: 'UITDAGING',
      missionTitle: exercise.title ?? 'Jouw uitdaging',
      missionInstructions: exercise.instructions ?? undefined,
      missionDuration: exercise.duration,
      missionTips: exercise.tips,
    });
  }

  // ── 15. SPIEGEL — reflectie ──
  const reflection = reflections[0];
  if (reflection?.questions && reflection.questions.length > 0) {
    stages.push({
      id: stageId('spiegel'),
      type: 'spiegel',
      xpReward: 5,
      stageLabel: 'EVEN STILSTAAN',
      reflectionQuestion: reflection.questions[0],
      allQuestions: reflection.questions,
      spiegelContext: 'Neem even de tijd. Er is geen goed of fout antwoord.',
    });
  }

  // ── 16. SAMENVATTING — key takeaways ──
  stages.push({
    id: stageId('samenvatting'),
    type: 'samenvatting',
    xpReward: 5,
    stageLabel: 'ONTHOUD DIT',
    takeaways: mod.keyTakeaways,
    researchRef: mod.research,
  });

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

/**
 * Migreer oude index-gebaseerde stage IDs naar nieuwe semantische IDs.
 * Oude formaten: moduleId_d0/_d1 (discovery) of moduleId_s0/_s1 (legacy stages)
 * Nieuwe IDs: moduleId_herken, moduleId_inzicht, moduleId_inzicht_1, ...
 */
export function migrateStageIds(
  completedStageIds: string[],
  currentStages: Stage[],
  moduleId: string,
): string[] {
  if (completedStageIds.length === 0) return completedStageIds;

  // Check of er oude IDs tussen zitten (formaat: moduleId_d0 of moduleId_s0)
  const prefixD = `${moduleId}_d`;
  const prefixS = `${moduleId}_s`;
  const isOldId = (id: string) => {
    if (id.startsWith(prefixD)) return /^\d+$/.test(id.slice(prefixD.length));
    if (id.startsWith(prefixS)) return /^\d+$/.test(id.slice(prefixS.length));
    return false;
  };

  const hasOldIds = completedStageIds.some(isOldId);
  if (!hasOldIds) return completedStageIds;

  // Map oude index-gebaseerde IDs naar nieuwe semantische IDs
  return completedStageIds.map((id) => {
    let numPart: string | null = null;
    if (id.startsWith(prefixD)) numPart = id.slice(prefixD.length);
    else if (id.startsWith(prefixS)) numPart = id.slice(prefixS.length);

    if (numPart && /^\d+$/.test(numPart)) {
      const index = parseInt(numPart, 10);
      if (index < currentStages.length) {
        return currentStages[index].id;
      }
    }
    return id;
  });
}
