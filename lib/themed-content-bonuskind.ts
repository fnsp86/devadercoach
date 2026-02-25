import type { PulseQuestion, TrainingItem, Scenario } from './types';

// ════════════════════════════════════════════════════════════════
// BONUSKIND / SAMENGESTELD GEZIN / CO-OUDERSCHAP
// Themed content – alle tekst in het Nederlands
// Sensitief, empowerend, niet-stigmatiserend
// ════════════════════════════════════════════════════════════════

// ── 20 Pulse Questions (Vader Pulse check-in) ───────────────────
// Antwoord index 3 is altijd: "Kind niet gezien vandaag"
// ~2-3 vragen per skill, verdeeld over alle 8 skills

export const BONUSKIND_PULSE_QUESTIONS: PulseQuestion[] = [

  // ── AANWEZIGHEID (3) ──────────────────────────────────────────

  {
    id: 'pulse_bonus_01',
    skill: 'Aanwezigheid',
    vraag: 'Was je vandaag bewust aanwezig voor je bonuskind, ook al voelde het misschien anders dan bij je eigen kind?',
    antwoorden: [
      'Ja, ik was er volledig – zonder verschil te maken',
      'Ik probeerde het, maar merkte dat ik me wat terughield',
      'Ik had weinig contact met mijn bonuskind vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Bonuskinderen voelen subtiele verschillen in aandacht scherp aan. Bewuste aanwezigheid – ook kleine momenten – bouwt vertrouwen op, stap voor stap. Dit hoeft niet perfect te zijn.',
    bron: 'Papernow (2013) – Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'pulse_bonus_02',
    skill: 'Aanwezigheid',
    vraag: 'Had de wissel tussen twee huizen vandaag invloed op hoe aanwezig je kon zijn?',
    antwoorden: [
      'Nee, ik was snel weer gefocust op mijn kind',
      'Even wennen, maar daarna ging het goed',
      'De overgang kostte veel energie, bij ons allebei',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die wisselen tussen twee huizen hebben gemiddeld 30-60 minuten nodig om te "landen". Geef die overgangsruimte zonder het persoonlijk op te vatten.',
    bron: 'Emery (2012) – Two Homes, One Childhood',
    themes: ['co-ouderschap', 'samengesteld_gezin'],
  },
  {
    id: 'pulse_bonus_03',
    skill: 'Aanwezigheid',
    vraag: 'Voelde je je vandaag onderdeel van het gezin, of meer een buitenstaander?',
    antwoorden: [
      'Ik voelde me er helemaal bij horen',
      'Wisselend – sommige momenten wel, andere niet',
      'Meer buitenstaander dan ik zou willen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het duurt gemiddeld vijf tot zeven jaar voordat een samengesteld gezin zich als een eenheid voelt. Dat je soms twijfelt, is normaal – het zegt niets over je waarde als bonusouder.',
    bron: 'Papernow (2013) – Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ── EMOTIECOACHING (3) ────────────────────────────────────────

  {
    id: 'pulse_bonus_04',
    skill: 'Emotiecoaching',
    vraag: 'Heeft je bonuskind vandaag een lastige emotie geuit? Hoe reageerde je?',
    antwoorden: [
      'Ik benoemde het gevoel en gaf ruimte',
      'Ik merkte het, maar wist niet goed hoe te reageren',
      'Ik liet het aan de biologische ouder over',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het is oké om emotiecoaching soms aan de bio-ouder te laten, maar als jij af en toe ook instapt, groeit het vertrouwen. Begin klein: benoem simpelweg wat je ziet.',
    bron: 'Gottman (1997) – Raising An Emotionally Intelligent Child',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'pulse_bonus_05',
    skill: 'Emotiecoaching',
    vraag: 'Merkte je vandaag dat je bonuskind een gevoel verborg, misschien uit loyaliteit aan de andere ouder?',
    antwoorden: [
      'Ja, en ik gaf aan dat alle gevoelens oké zijn',
      'Ik vermoedde het, maar zei er niets over',
      'Nee, niets bijzonders opgemerkt',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen in samengestelde gezinnen verbergen soms blijdschap of verdriet uit loyaliteit. Door te zeggen "je mag hier alles voelen" geef je impliciet toestemming.',
    bron: 'Papernow (2013) – Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'co-ouderschap'],
  },
  {
    id: 'pulse_bonus_06',
    skill: 'Emotiecoaching',
    vraag: 'Heeft je bonuskind vandaag iets verteld over de andere ouder? Hoe ging je daarmee om?',
    antwoorden: [
      'Ik luisterde neutraal en gaf ruimte',
      'Ik vond het lastig maar hield me in',
      'Ik reageerde negatief of veranderde van onderwerp',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer een bonuskind over de andere ouder praat, test het onbewust of jij dat aankan. Neutraal en open luisteren is het grootste geschenk dat je kunt geven.',
    bron: 'Bray & Kelly (1998) – Stepfamilies',
    themes: ['bonuskind', 'co-ouderschap'],
  },

  // ── ZELFREGULATIE (2) ─────────────────────────────────────────

  {
    id: 'pulse_bonus_07',
    skill: 'Zelfregulatie',
    vraag: 'Voelde je vandaag frustratie of afwijzing door het gedrag van je bonuskind?',
    antwoorden: [
      'Nee, het ging vandaag goed',
      'Even, maar ik kon mezelf reguleren',
      'Ja, het raakte me behoorlijk',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Afwijzing door een bonuskind activeert oerreacties in je brein. Het is bijna nooit een persoonlijke aanval – het is een loyaliteitsreflex. Herkennen is de eerste stap naar regulatie.',
    bron: 'Papernow (2013) – Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'pulse_bonus_08',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag een moment gehad waarin je je wilde verdedigen tegenover je bonuskind, maar dat niet deed?',
    antwoorden: [
      'Ja, ik hield me in en bleef kalm',
      'Het lukte deels, maar ik merkte spanning',
      'Nee, ik reageerde feller dan ik wilde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Als bonusouder word je vaker emotioneel uitgedaagd dan je verwacht. De pauze tussen trigger en reactie is je krachtigste gereedschap.',
    bron: 'Siegel & Bryson (2012) – The Whole-Brain Child',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ── GRENZEN (3) ───────────────────────────────────────────────

  {
    id: 'pulse_bonus_09',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een grens gesteld bij je bonuskind? Hoe voelde dat?',
    antwoorden: [
      'Ja, helder en rustig – voelde goed',
      'Ja, maar het voelde ongemakkelijk',
      'Nee, ik liet het aan mijn partner over',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Grenzen stellen als bonusouder voelt vaak ongemakkelijk. Begin met huisregels die voor iedereen gelden ("in dit huis ruimen we samen op"), niet met persoonlijke correcties.',
    bron: 'Papernow (2013) – Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'pulse_bonus_10',
    skill: 'Grenzen',
    vraag: 'Was er vandaag een situatie waarin de regels bij jullie thuis verschilden van die bij de andere ouder?',
    antwoorden: [
      'Ja, maar we hebben dat rustig uitgelegd',
      'Ja, en het gaf wat wrijving',
      'Ja, het kind speelde de regels tegen elkaar uit',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Verschillende regels in twee huishoudens is normaal en niet schadelijk. Kinderen kunnen prima met twee sets regels omgaan, mits ze in elk huis consistent worden toegepast.',
    bron: 'Bray & Kelly (1998) – Stepfamilies',
    themes: ['co-ouderschap', 'samengesteld_gezin'],
  },
  {
    id: 'pulse_bonus_11',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag met je partner afgestemd over een grens of afspraak voor je bonuskind?',
    antwoorden: [
      'Ja, we stonden op één lijn',
      'We hebben het besproken, maar waren het niet helemaal eens',
      'Nee, we spreken daar zelden over',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'In samengestelde gezinnen is afstemming tussen partners cruciaal. Het kind voelt het onmiddellijk als jullie niet op één lijn zitten. Overleg liefst zonder het kind erbij.',
    bron: 'Papernow (2013) – Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ── AUTONOMIE (2) ─────────────────────────────────────────────

  {
    id: 'pulse_bonus_12',
    skill: 'Autonomie',
    vraag: 'Heb je je bonuskind vandaag ruimte gegeven om zelf te kiezen?',
    antwoorden: [
      'Ja, ik bood opties en liet het kind kiezen',
      'Deels, maar ik stuurde toch een beetje',
      'Nee, ik bepaalde wat er gebeurde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Bonuskinderen hebben vaak het gevoel weinig controle te hebben over hun leven. Kleine keuzes geven – wat eten we, welk spelletje – herstelt hun gevoel van autonomie.',
    bron: 'Deci & Ryan (2000) – Self-Determination Theory',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'pulse_bonus_13',
    skill: 'Autonomie',
    vraag: 'Heeft je bonuskind vandaag aangegeven iets zelf te willen doen? Hoe reageerde je?',
    antwoorden: [
      'Ik moedigde het aan en liet los',
      'Ik liet het toe, maar keek steeds mee',
      'Ik nam het toch over',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer een bonuskind zelfstandigheid claimt, is dat ook een teken van veiligheid. Het durft "nee" te zeggen omdat het voelt dat de relatie het houdt.',
    bron: 'Papernow (2013) – Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ── HERSTEL (2) ───────────────────────────────────────────────

  {
    id: 'pulse_bonus_14',
    skill: 'Herstel',
    vraag: 'Was er vandaag een ongemakkelijk of pijnlijk moment tussen jou en je bonuskind?',
    antwoorden: [
      'Ja, maar ik heb het hersteld of benoemd',
      'Ja, en het bleef onuitgesproken hangen',
      'Nee, het ging goed vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Herstel na een breuk is in bonusrelaties extra belangrijk. Het kind denkt snel: "Zie je wel, hij geeft niet echt om me." Een klein gebaar van herstel weerlegt dat krachtig.',
    bron: 'Tronick (2007) – The Neurobehavioral and Social-Emotional Development of Infants and Children',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'pulse_bonus_15',
    skill: 'Herstel',
    vraag: 'Heb je vandaag iets gezegd of gedaan richting je bonuskind waar je spijt van hebt?',
    antwoorden: [
      'Ja, en ik heb sorry gezegd',
      'Ja, maar ik heb het nog niet hersteld',
      'Nee, niets om te herstellen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Sorry zeggen als bonusouder is extra krachtig. Het laat zien dat je de relatie serieus neemt en kwetsbaar durft te zijn, ook al ben je niet de biologische ouder.',
    bron: 'Papernow (2013) – Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ── VERBINDING (3) ────────────────────────────────────────────

  {
    id: 'pulse_bonus_16',
    skill: 'Verbinding',
    vraag: 'Had je vandaag een moment met je bonuskind dat als "echt" voelde?',
    antwoorden: [
      'Ja, een warm moment samen',
      'Een klein momentje, maar het was er',
      'Niet echt, voelde wat afstandelijk',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Bonding met een bonuskind gaat in kleine stapjes. Eén gedeeld lachmoment per dag is waardevoller dan een gepland uitje. Zoek het in het gewone.',
    bron: 'Papernow (2013) – Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'pulse_bonus_17',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag iets gedaan met je bonuskind dat alleen van jullie twee is – een eigen ritueel of gewoonte?',
    antwoorden: [
      'Ja, we hadden een eigen momentje',
      'Niet bewust, maar er was wel contact',
      'Nee, het voelde alsof we langs elkaar heen leefden',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Gedeelde rituelen – een grapje, een handdruk, een vaste activiteit – bouwen een unieke band op die los staat van de bio-ouder. Dit is jullie eigen relatie.',
    bron: 'Bray & Kelly (1998) – Stepfamilies',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'pulse_bonus_18',
    skill: 'Verbinding',
    vraag: 'Voelde je je vandaag verbonden met het hele gezin, inclusief je bonuskind?',
    antwoorden: [
      'Ja, het voelde als één geheel',
      'Met sommigen wel, met het bonuskind minder',
      'Ik voelde me eerder een buitenstaander',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Verbinding in een samengesteld gezin is zelden lineair. Het gaat met pieken en dalen. Dat je er bewust over nadenkt, is al een teken van betrokkenheid.',
    bron: 'Papernow (2013) – Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ── REFLECTIE (2) ─────────────────────────────────────────────

  {
    id: 'pulse_bonus_19',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag nagedacht over hoe je eigen opvoeding jouw rol als bonusouder beïnvloedt?',
    antwoorden: [
      'Ja, ik zag een patroon en stuurde bij',
      'Even, maar ik kwam er niet echt uit',
      'Nee, daar stond ik niet bij stil',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Jouw eigen hechtingservaring bepaalt mede hoe je omgaat met afwijzing door een bonuskind. Reflectie op je eigen patronen is de sleutel tot groei.',
    bron: 'Siegel & Hartzell (2003) – Parenting from the Inside Out',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'pulse_bonus_20',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag bewust stilgestaan bij wat wél goed ging in je relatie met je bonuskind?',
    antwoorden: [
      'Ja, ik zag vooruitgang en voelde trots',
      'Ik dacht er even over na, maar vergat het snel',
      'Nee, ik focuste meer op wat niet lukte',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Bonusouders focussen vaak op wat misgaat. Bewust stilstaan bij kleine successen versterkt je motivatie en je veerkracht in de relatie.',
    bron: 'Seligman (2011) – Flourish',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
];

// ── 40 Quiz/Training Questions (Vader Arena) ────────────────────
// 5 per skill, mix van basis/gevorderd/expert
// IDs: bonus_tr_1 t/m bonus_tr_40

export const BONUSKIND_TRAINING: TrainingItem[] = [

  // ════════════════════════════════════════════════════════════════
  // AANWEZIGHEID (5 vragen)
  // ════════════════════════════════════════════════════════════════

  {
    id: 'bonus_tr_1',
    skill: 'Aanwezigheid',
    type: 'quiz',
    difficulty: 'basis',
    order: 1,
    question: 'Lotte (7) is je bonusdochter. Ze is net aangekomen na een week bij haar moeder. Ze zit stil op de bank en reageert kort op je vragen. Wat doe je?',
    context: 'Na een wissel hebben kinderen tijd nodig om te "landen" in het andere huis.',
    options: [
      {
        id: 'a',
        text: 'Je gaat naast haar zitten zonder iets te zeggen, zodat ze je aanwezigheid voelt',
        isCorrect: true,
        feedback: 'Goed. Stille aanwezigheid na een wissel geeft het kind ruimte om te landen. Je bent er zonder druk uit te oefenen.',
      },
      {
        id: 'b',
        text: 'Je organiseert snel iets leuks om haar op te vrolijken',
        isCorrect: false,
        feedback: 'Afleiding bedoelt het goed, maar het negeert haar behoefte aan overgangsruimte. Eerst landen, dan pas actie.',
      },
      {
        id: 'c',
        text: 'Je geeft haar ruimte door naar een andere kamer te gaan en te wachten tot zij naar je toekomt',
        isCorrect: false,
        feedback: 'Fysiek afstand nemen kan aanvoelen als desinteresse. Beter: wees nabij zonder druk.',
      },
    ],
    explanation: 'Kinderen die wisselen tussen huizen ervaren een overgangsperiode. Stille nabijheid – er zijn zonder iets te verwachten – helpt het zenuwstelsel te reguleren.',
    research: 'Emery, R. (2012). Two Homes, One Childhood',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_2',
    skill: 'Aanwezigheid',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 2,
    question: 'Je zoon Daan (10) is net terug van zijn moeder. Hij vertelt enthousiast over een uitje dat hij daar had. Je merkt dat je een steek van jaloezie voelt. Wat doe je?',
    context: 'Co-ouderschap vraagt dat je je eigen gevoelens kunt parkeren om aanwezig te zijn voor je kind.',
    options: [
      {
        id: 'a',
        text: '"Wat gaaf! Vertel, wat was het leukste?" – je parkeert je gevoel en luistert echt',
        isCorrect: true,
        feedback: 'Uitstekend. Je scheidt je eigen emotie van de behoefte van je kind. Hij mag blij zijn over het andere huis zonder schuldgevoel.',
      },
      {
        id: 'b',
        text: '"Oh, leuk. Wij gaan dit weekend ook iets leuks doen" – je stuurt naar je eigen plan',
        isCorrect: false,
        feedback: 'Je maakt het onbewust een competitie. Het kind voelt dat je niet echt luistert maar al bezig bent met "beter" zijn.',
      },
      {
        id: 'c',
        text: '"Hmm, was het echt zo leuk?" – je reageert gereserveerd',
        isCorrect: false,
        feedback: 'Je jaloezie lekt door. Het kind leert: ik kan niet vrijuit vertellen over mama. Dat creëert loyaliteitsstress.',
      },
    ],
    explanation: 'Een kind moet vrij kunnen vertellen over beide huizen. Jouw vermogen om je eigen gevoelens te parkeren bepaalt hoeveel ruimte het kind ervaart.',
    research: 'Emery, R. (2012). Two Homes, One Childhood',
    themes: ['co-ouderschap', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_3',
    skill: 'Aanwezigheid',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 3,
    question: 'Je bonusdochter (13) sluit zich op in haar kamer als ze bij jullie is. Je partner maakt zich zorgen. Wat doe je?',
    context: 'Terugtrekgedrag bij tieners in samengestelde gezinnen kan meerdere oorzaken hebben.',
    options: [
      {
        id: 'a',
        text: 'Je klopt aan en zegt: "Ik merk dat je veel op je kamer bent. Ik ben beneden als je zin hebt in gezelschap."',
        isCorrect: true,
        feedback: 'Goed. Je signaleert zonder te pushen. De deur staat open, letterlijk en figuurlijk. Beschikbaar zijn zonder druk.',
      },
      {
        id: 'b',
        text: 'Je stelt een regel in: maximaal een uur op de kamer na schooltijd',
        isCorrect: false,
        feedback: 'Dit voelt als straf en bevestigt het idee dat jouw huis geen veilige plek is. Een tiener heeft ruimte nodig.',
      },
      {
        id: 'c',
        text: 'Je bespreekt het met je partner en vraagt of zij het gesprek aangaat',
        isCorrect: false,
        feedback: 'Begrijpelijk, maar als je altijd delegeert bouw je geen eigen relatie op. Probeer ook zelf laagdrempelig contact te maken.',
      },
    ],
    explanation: 'Tieners in samengestelde gezinnen trekken zich soms terug uit loyaliteitsconflict of onzekerheid. Beschikbaar zijn zonder pushen is de sleutel.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_4',
    skill: 'Aanwezigheid',
    type: 'quiz',
    difficulty: 'expert',
    order: 4,
    question: 'Je merkt dat je automatisch meer aandacht geeft aan je eigen kind dan aan je bonuskind. Wat is de beste aanpak?',
    context: 'Het is biologisch normaal om meer afgestemd te zijn op je eigen kind. Herkennen is de eerste stap.',
    options: [
      {
        id: 'a',
        text: 'Je herkent het patroon en zoekt bewust een klein, oprecht moment met je bonuskind',
        isCorrect: true,
        feedback: 'Perfect. Bewustwording zonder zelfveroordeling, gevolgd door een kleine actie. Dat is groei.',
      },
      {
        id: 'b',
        text: 'Je forceert gelijke aandacht voor beide kinderen en negeert je gevoel',
        isCorrect: false,
        feedback: 'Forceren werkt averechts. Kinderen voelen onechtheid. Erken het verschil bij jezelf en zoek kleine, oprechte momenten.',
      },
      {
        id: 'c',
        text: 'Je accepteert dat dit nu eenmaal zo is – een bonuskind is geen eigen kind',
        isCorrect: false,
        feedback: 'Eerlijk, maar het bonuskind voelt het verschil. Kleine bewuste momenten maken over tijd een groot verschil.',
      },
    ],
    explanation: 'Bonusouders zijn van nature minder afgestemd op bonuskinderen. Dat is geen falen maar biologie. Bewuste micro-momenten van aandacht overbrugt het verschil.',
    research: 'Hetherington & Kelly (2002) – For Better or For Worse: Divorce Reconsidered',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_5',
    skill: 'Aanwezigheid',
    type: 'quiz',
    difficulty: 'expert',
    order: 5,
    question: 'Je bonuszoon (15) zegt: "Je hoeft niet te doen alsof je om me geeft." Je voelt je gekwetst. Wat is de beste reactie?',
    context: 'Tieners in samengestelde gezinnen testen de echtheid van de relatie door provocatie.',
    options: [
      {
        id: 'a',
        text: '"Dat doet pijn om te horen. Maar ik doe niet alsof. Ik ben hier, ook als het lastig is."',
        isCorrect: true,
        feedback: 'Sterk. Je bent kwetsbaar, eerlijk en je blijft. Precies wat het kind onbewust nodig heeft: iemand die niet wegloopt.',
      },
      {
        id: 'b',
        text: '"Na alles wat ik voor je doe, zeg je dit?"',
        isCorrect: false,
        feedback: 'Begrijpelijk, maar dit maakt het over jou. Het kind voelt schuld in plaats van veiligheid.',
      },
      {
        id: 'c',
        text: 'Je zegt niets en loopt weg',
        isCorrect: false,
        feedback: 'Weglopen bevestigt het vermoeden van het kind: hij geeft niet echt om me. Blijf, ook als het pijn doet.',
      },
    ],
    explanation: 'Provocatie door bonuskinderen is vaak een loyaliteitstest. Ze willen weten: blijf je ook als ik je afwijs? Je aanwezigheid op dat moment is het antwoord.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ════════════════════════════════════════════════════════════════
  // EMOTIECOACHING (5 vragen)
  // ════════════════════════════════════════════════════════════════

  {
    id: 'bonus_tr_6',
    skill: 'Emotiecoaching',
    type: 'quiz',
    difficulty: 'basis',
    order: 6,
    question: 'Je bonusdochter (6) huilt na een telefoontje met haar moeder. Ze zegt: "Ik wil naar mama." Wat doe je?',
    context: 'Heimwee naar de andere ouder is normaal en geen afwijzing van jou.',
    options: [
      {
        id: 'a',
        text: '"Je mist mama. Dat snap ik. Het is oké om haar te missen."',
        isCorrect: true,
        feedback: 'Perfect. Je benoemt de emotie, normaliseert het en geeft ruimte. Het kind hoeft niet te kiezen.',
      },
      {
        id: 'b',
        text: '"Maar je bent nu hier, we gaan iets leuks doen!"',
        isCorrect: false,
        feedback: 'Afleiding ontkent het gevoel. Het kind leert: missen mag hier niet. Dat versterkt het loyaliteitsconflict.',
      },
      {
        id: 'c',
        text: '"Je ziet mama toch zaterdag weer?"',
        isCorrect: false,
        feedback: 'Rationeel klopt dit, maar een kind van 6 voelt in het nu. Logica troost niet bij heimwee.',
      },
    ],
    explanation: 'Kinderen mogen hun andere ouder missen, ook bij jou thuis. Door dat te benoemen en toe te staan, maak je jouw huis veiliger, niet minder.',
    research: 'Gottman, J. (1997). Raising An Emotionally Intelligent Child',
    themes: ['bonuskind', 'co-ouderschap'],
  },
  {
    id: 'bonus_tr_7',
    skill: 'Emotiecoaching',
    type: 'quiz',
    difficulty: 'basis',
    order: 7,
    question: 'Je bonuszoon (8) is boos na school. Bij navraag blijkt dat een klasgenoot zei: "Jij hebt geen echte vader." Wat doe je?',
    context: 'Kinderen in samengestelde gezinnen worden soms geconfronteerd met pijnlijke opmerkingen.',
    options: [
      {
        id: 'a',
        text: '"Dat was een gemene opmerking. Ik snap dat je boos bent. Wil je erover praten?"',
        isCorrect: true,
        feedback: 'Goed. Je valideert zijn emotie, benoemt wat er gebeurde en biedt ruimte. Je maakt het niet over jezelf.',
      },
      {
        id: 'b',
        text: '"Dat is onzin, je hebt toch mij?"',
        isCorrect: false,
        feedback: 'Goed bedoeld, maar je maakt het over jouw rol. Het kind heeft eerst ruimte nodig voor zijn boosheid.',
      },
      {
        id: 'c',
        text: '"Trek je er niets van aan, die jongen weet niet waar hij het over heeft"',
        isCorrect: false,
        feedback: 'Je bagatelliseert. Voor het kind was dit pijnlijk. Eerst het gevoel erkennen, dan pas relativeren.',
      },
    ],
    explanation: 'Kinderen in samengestelde gezinnen krijgen soms pijnlijke opmerkingen van leeftijdsgenoten. Valideer eerst de emotie, los dan pas op.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_8',
    skill: 'Emotiecoaching',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 8,
    question: 'Je bonusdochter (11) lijkt blij na een weekend bij haar vader, maar doet ineens afstandelijk tegen jou. Wat begrijp je hiervan?',
    context: 'Loyaliteitsconflicten uiten zich vaak in onverklaarbaar gedrag na de overgang.',
    options: [
      {
        id: 'a',
        text: 'Ze zit in een loyaliteitsconflict: blij zijn bij vader voelt als verraad aan jouw huishouden',
        isCorrect: true,
        feedback: 'Precies. Kinderen schakelen soms over naar afstand om hun loyaliteit aan de andere ouder te bewaren. Dit is geen afwijzing van jou.',
      },
      {
        id: 'b',
        text: 'Ze vindt het bij haar vader leuker en straft jou daarvoor',
        isCorrect: false,
        feedback: '"Straffen" is te sterk. Ze reguleert loyaliteitsspanning – dat is iets anders dan bewuste straf.',
      },
      {
        id: 'c',
        text: 'Ze heeft gewoon een slechte dag en het heeft niets met de situatie te maken',
        isCorrect: false,
        feedback: 'Kan, maar het patroon na overgangen wijst op loyaliteitsspanning. Het herkennen zonder het persoonlijk te nemen helpt.',
      },
    ],
    explanation: 'Loyaliteitsconflicten zijn de grootste stressbron voor kinderen in samengestelde gezinnen. Herken het patroon en reageer met begrip, niet met gekwetstheid.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'co-ouderschap', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_9',
    skill: 'Emotiecoaching',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 9,
    question: 'Je bonuszoon (9) zegt: "Ik wou dat papa en mama weer bij elkaar waren." Je partner (zijn moeder) zit erbij. Wat doe je?',
    context: 'De herenigingsfantasie is normaal bij kinderen van gescheiden ouders, ook jaren na de scheiding.',
    options: [
      {
        id: 'a',
        text: '"Dat snap ik. Je houdt van papa en mama allebei. Dat mag."',
        isCorrect: true,
        feedback: 'Sterk. Je benoemt zijn verlangen zonder het te corrigeren. Je maakt ruimte voor zijn gevoel zonder je bedreigd te voelen.',
      },
      {
        id: 'b',
        text: 'Je zwijgt en laat je partner het woord doen',
        isCorrect: false,
        feedback: 'Begrijpelijk, maar je trekt je terug uit een moment waar je erbij kunt zijn. Je hoeft niet op te lossen, wel aanwezig te zijn.',
      },
      {
        id: 'c',
        text: '"Maar mama en ik zijn nu toch gelukkig samen?"',
        isCorrect: false,
        feedback: 'Dit maakt zijn gevoel kleiner en plaatst jouw relatie boven zijn verlangen. Het kind voelt zich niet gehoord.',
      },
    ],
    explanation: 'De herenigingsfantasie kan jaren duren. Het is geen afwijzing van jou. Door het te erkennen, help je het kind zijn verdriet te verwerken.',
    research: 'Hetherington & Kelly (2002). For Better or For Worse: Divorce Reconsidered',
    themes: ['bonuskind', 'co-ouderschap', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_10',
    skill: 'Emotiecoaching',
    type: 'quiz',
    difficulty: 'expert',
    order: 10,
    question: 'Je bonusdochter (14) zegt koeltjes: "Je probeert altijd aardig te doen, maar je bent gewoon de vriend van mijn moeder." Wat doe je?',
    context: 'Tieners zijn meesters in het raken van de juiste snaar. Dit gaat over identiteit en loyaliteit.',
    options: [
      {
        id: 'a',
        text: '"Ik ben inderdaad niet je vader. Maar ik ben wel iemand die om je geeft. Dat verandert niet."',
        isCorrect: true,
        feedback: 'Uitstekend. Je erkent de realiteit, bevestigt je positie zonder te claimen, en blijft stabiel. Emotioneel volwassen reageren.',
      },
      {
        id: 'b',
        text: '"Na vijf jaar samen wonen ben ik toch meer dan dat?"',
        isCorrect: false,
        feedback: 'Je verdedigt je positie. Het kind wil niet dat je claimt, het wil weten dat je kunt incasseren zonder weg te lopen.',
      },
      {
        id: 'c',
        text: 'Je zegt niets en slikt je reactie in',
        isCorrect: false,
        feedback: 'Inslikken beschermt je op korte termijn, maar het kind leert dat het jou kan kapotmaken met woorden. Een kalm antwoord toont veerkracht.',
      },
    ],
    explanation: 'De rol van bonusouder heeft geen script. Door eerlijk te zijn over wat je wel bent zonder te claimen wat je niet bent, bouw je een authentieke relatie.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ════════════════════════════════════════════════════════════════
  // ZELFREGULATIE (5 vragen)
  // ════════════════════════════════════════════════════════════════

  {
    id: 'bonus_tr_11',
    skill: 'Zelfregulatie',
    type: 'quiz',
    difficulty: 'basis',
    order: 11,
    question: 'Je bonuszoon (8) zegt "jij bent mijn vader niet" tijdens een ruzie over opruimen. Je voelt een steek. Wat doe je?',
    context: 'Loyaliteitsconflicten zijn normaal in samengestelde gezinnen. Het kind test de relatie.',
    options: [
      {
        id: 'a',
        text: '"Dat klopt, maar ik geef wel om je en in dit huis ruimen we samen op."',
        isCorrect: true,
        feedback: 'Perfect. Je erkent de realiteit, bevestigt je betrokkenheid en houdt de grens overeind. Drie dingen in één zin.',
      },
      {
        id: 'b',
        text: '"Zolang je hier woont, luister je naar mij."',
        isCorrect: false,
        feedback: 'Dit bevestigt zijn angst dat je zijn echte vader probeert te vervangen. Autoriteit claimen zonder relatie werkt averechts.',
      },
      {
        id: 'c',
        text: 'Je loopt boos weg en laat je partner het oplossen',
        isCorrect: false,
        feedback: 'Begrijpelijk, maar het kind test of je blijft. Weglopen bevestigt het idee: hij geeft niet echt om me.',
      },
    ],
    explanation: '"Jij bent mijn vader niet" is zelden een feitelijke opmerking. Het is een loyaliteitsuitlating. Erken de waarheid erin, houd je grens en blijf.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_12',
    skill: 'Zelfregulatie',
    type: 'quiz',
    difficulty: 'basis',
    order: 12,
    question: 'Je hoort dat je bonusdochter (10) tegen een vriendinnetje zegt: "Mijn stiefvader is stom." Je staat in de gang. Wat doe je?',
    context: 'Kinderen verwerken hun gevoelens over de gezinssituatie ook via gesprekken met leeftijdsgenoten.',
    options: [
      {
        id: 'a',
        text: 'Je ademt diep in, erkent bij jezelf dat het pijn doet, en laat het gaan',
        isCorrect: true,
        feedback: 'Sterk. Je reguleert je eigen pijn en begrijpt dat kinderen zo hun gevoelens verwerken. Je kunt het later rustig bespreken.',
      },
      {
        id: 'b',
        text: 'Je stormt de kamer in en zegt: "Dat is niet aardig!"',
        isCorrect: false,
        feedback: 'Je overvalt haar en beschaamt haar voor haar vriendin. Dit beschadigt het vertrouwen ernstig.',
      },
      {
        id: 'c',
        text: 'Je vertelt het meteen aan je partner',
        isCorrect: false,
        feedback: 'Dit creëert een driehoek. Het kind voelt zich verraden als mama het ter sprake brengt. Reguleer eerst, bespreek later rechtstreeks.',
      },
    ],
    explanation: 'Kinderen in samengestelde gezinnen gebruiken leeftijdsgenoten om gevoelens te verwerken. "Stom" betekent vaak "ingewikkeld." Reguleer je eigen pijn voordat je reageert.',
    research: 'Siegel, D. & Bryson, T. (2012). The Whole-Brain Child',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_13',
    skill: 'Zelfregulatie',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 13,
    question: 'De biologische vader ondermijnt jouw afspraken. Je bonuszoon (11) zegt: "Bij papa mag het wel." Je voelt woede opkomen. Wat doe je eerst?',
    context: 'Verschillende regels in twee huizen is een van de grootste stressbronnen voor bonusouders.',
    options: [
      {
        id: 'a',
        text: 'Je haalt diep adem en zegt: "Bij ons gelden onze afspraken. Ik snap dat dat lastig is."',
        isCorrect: true,
        feedback: 'Goed. Je reguleert je woede, houdt je grens en erkent de lastige positie van het kind. Geen negatief woord over de andere ouder.',
      },
      {
        id: 'b',
        text: '"Papa heeft daar niets over te zeggen als je hier bent."',
        isCorrect: false,
        feedback: 'Dit zet het kind klem tussen twee ouders. Het voelt als een aanval op papa en versterkt het loyaliteitsconflict.',
      },
      {
        id: 'c',
        text: '"Dan ga je toch lekker naar papa?"',
        isCorrect: false,
        feedback: 'Sarcastisch en kwetsend. Het kind voelt zich afgewezen. Jouw frustratie richt zich op de verkeerde persoon.',
      },
    ],
    explanation: 'Als regels verschillen tussen huizen, is het kind de boodschapper, niet de oorzaak. Reguleer je woede richting de situatie, niet richting het kind.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'co-ouderschap', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_14',
    skill: 'Zelfregulatie',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 14,
    question: 'Je bonusdochter (12) geeft je een vaderdagcadeau. Je ziet dat er "voor papa" op staat, niet jouw naam. Je voelt teleurstelling. Hoe ga je hiermee om?',
    context: 'Symbolen zoals "papa" of "vader" raken aan identiteit en erkenning.',
    options: [
      {
        id: 'a',
        text: 'Je bedankt haar hartelijk en waardeert het gebaar, ongeacht het label',
        isCorrect: true,
        feedback: 'Sterk. Je scheidt het gebaar (ze dacht aan jou) van het label (ze noemt je geen papa). Het gebaar is wat telt.',
      },
      {
        id: 'b',
        text: '"Maar ik ben toch geen papa?"',
        isCorrect: false,
        feedback: 'Dit creëert verwarring en ongemak. Het kind deed iets liefs en voelt zich nu dom.',
      },
      {
        id: 'c',
        text: 'Je bent teleurgesteld en laat dat merken',
        isCorrect: false,
        feedback: 'Jouw teleurstelling is begrijpelijk, maar het kind draagt daar niet de verantwoordelijkheid voor. Verwerk het met je partner.',
      },
    ],
    explanation: 'Labels zijn beladen in samengestelde gezinnen. Focus op het gedrag (het kind dacht aan jou) in plaats van op de titel. De relatie is meer dan een woord.',
    research: 'Bray, J. & Kelly, J. (1998). Stepfamilies',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_15',
    skill: 'Zelfregulatie',
    type: 'quiz',
    difficulty: 'expert',
    order: 15,
    question: 'Je partner vergelijkt jouw opvoedstijl ongunstig met die van haar ex: "Hij zou dit anders aanpakken." Je voelt je onderuit gehaald. Hoe reguleer je dit?',
    context: 'Vergelijkingen met de ex-partner zijn een veelvoorkomende trigger in samengestelde gezinnen.',
    options: [
      {
        id: 'a',
        text: '"Dat doet pijn. Ik wil er graag over praten, maar niet nu, niet waar het kind bij is."',
        isCorrect: true,
        feedback: 'Uitstekend. Je benoemt je gevoel, stelt een grens en beschermt het kind tegen volwassenenconflict. Drie regulatievaardigheden tegelijk.',
      },
      {
        id: 'b',
        text: '"Misschien moet hij het dan maar doen."',
        isCorrect: false,
        feedback: 'Begrijpelijk als reactie, maar dit escaleert. Het kind is getuige. Jouw pijn is reëel, maar dit is niet het moment.',
      },
      {
        id: 'c',
        text: 'Je slikt het in en doet alsof het je niet raakt',
        isCorrect: false,
        feedback: 'Inslikken leidt tot ophoping en uiteindelijk een grotere uitbarsting. Benoem het, maar kies het juiste moment.',
      },
    ],
    explanation: 'Vergelijkingen met de ex zijn een van de pijnlijkste triggers voor bonusouders. Regulatie betekent hier: je gevoel benoemen zonder te escaleren, en het gesprek op een veilig moment voeren.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'co-ouderschap', 'samengesteld_gezin'],
  },

  // ════════════════════════════════════════════════════════════════
  // GRENZEN (5 vragen)
  // ════════════════════════════════════════════════════════════════

  {
    id: 'bonus_tr_16',
    skill: 'Grenzen',
    type: 'quiz',
    difficulty: 'basis',
    order: 16,
    question: 'Je bonusdochter (7) weigert haar bord af te ruimen en zegt: "Jij bent de baas niet." Je partner is er niet. Wat doe je?',
    context: 'Grenzen stellen als bonusouder zonder de bio-ouder erbij is een veelvoorkomende uitdaging.',
    options: [
      {
        id: 'a',
        text: '"In dit huis ruimt iedereen zijn eigen bord af, dat is onze afspraak."',
        isCorrect: true,
        feedback: 'Goed. Je verwijst naar een gezamenlijke huisregel, niet naar jouw autoriteit. Het gaat om de afspraak, niet om de persoon.',
      },
      {
        id: 'b',
        text: '"Als mama het zegt, moet je het ook doen als ik het zeg."',
        isCorrect: false,
        feedback: 'Je leent autoriteit van de bio-ouder. Dit ondermijnt je eigen positie en maakt je afhankelijk van je partner.',
      },
      {
        id: 'c',
        text: 'Je ruimt het zelf op om conflict te vermijden',
        isCorrect: false,
        feedback: 'Begrijpelijk, maar dit leert het kind dat grenzen onderhandelbaar zijn als het genoeg weerstand biedt.',
      },
    ],
    explanation: 'Als bonusouder werk je het best met huisregels ("in dit huis...") in plaats van persoonlijke autoriteit. De regel is de baas, niet jij.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_17',
    skill: 'Grenzen',
    type: 'quiz',
    difficulty: 'basis',
    order: 17,
    question: 'Je bonuszoon (9) speelt de regels tegen elkaar uit: "Bij papa mag ik tot 9 uur opblijven." Jullie bedtijd is 8 uur. Wat zeg je?',
    context: 'Kinderen in twee huishoudens ontdekken snel de verschillen en gebruiken die strategisch.',
    options: [
      {
        id: 'a',
        text: '"Bij papa gelden papa\'s regels. Hier gelden onze regels. Bedtijd is om 8 uur."',
        isCorrect: true,
        feedback: 'Helder en neutraal. Je respecteert het andere huishouden en houdt je eigen grens. Geen competitie, geen oordeel.',
      },
      {
        id: 'b',
        text: '"Papa verwent je, hier zijn we strenger."',
        isCorrect: false,
        feedback: 'Je oordeelt over de andere ouder. Het kind voelt loyaliteitsdruk en leert dat er een "goed" en "fout" huis is.',
      },
      {
        id: 'c',
        text: '"Oké, dan mag je vanavond ook tot 9 uur."',
        isCorrect: false,
        feedback: 'Je laat je grens varen door de vergelijking. Het kind leert dat manipulatie via het andere huis werkt.',
      },
    ],
    explanation: 'Twee huizen, twee sets regels is normaal en niet schadelijk. Kinderen kunnen dit prima aan, mits elke set consequent wordt toegepast.',
    research: 'Bray, J. & Kelly, J. (1998). Stepfamilies',
    themes: ['co-ouderschap', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_18',
    skill: 'Grenzen',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 18,
    question: 'Je partner vindt dat je strenger bent voor haar kind dan voor je eigen kind. Ze heeft een punt. Hoe ga je hiermee om?',
    context: 'Ongelijke behandeling van eigen en bonuskinderen is een van de meest gevoelige thema\'s.',
    options: [
      {
        id: 'a',
        text: 'Je erkent het, bedankt haar voor de feedback en bespreekt hoe jullie dit samen aanpakken',
        isCorrect: true,
        feedback: 'Sterk. Erkennen zonder verdediging is moeilijk maar essentieel. Samen werken aan gelijkere behandeling beschermt het bonuskind.',
      },
      {
        id: 'b',
        text: '"Mijn kind luistert gewoon beter, dat is het verschil."',
        isCorrect: false,
        feedback: 'Je vergelijkt de kinderen en wijst het bonuskind indirect af. Dit raakt je partner en het kind diep.',
      },
      {
        id: 'c',
        text: '"Ik behandel ze precies hetzelfde."',
        isCorrect: false,
        feedback: 'Als je partner het opmerkt, is het waarschijnlijk waar. Ontkenning blokkeert groei en beschadigt het vertrouwen.',
      },
    ],
    explanation: 'Ongelijke behandeling is vaak onbewust. Het erkennen is geen falen maar zelfinzicht. Werk samen met je partner aan een gedeelde aanpak.',
    research: 'Hetherington & Kelly (2002). For Better or For Worse: Divorce Reconsidered',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_19',
    skill: 'Grenzen',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 19,
    question: 'Je bonusdochter (13) wil een piercing. Haar biologische vader is voor, jij en je partner zijn tegen. Wat is jouw rol?',
    context: 'Beslissingen over het lichaam van een bonuskind liggen primair bij de biologische ouders.',
    options: [
      {
        id: 'a',
        text: 'Je deelt je mening met je partner, maar erkent dat de eindbeslissing bij de bio-ouders ligt',
        isCorrect: true,
        feedback: 'Correct. Je mag een mening hebben, maar de eindbeslissing ligt bij de bio-ouders. Jouw rol is ondersteunend.',
      },
      {
        id: 'b',
        text: '"Zolang je in dit huis woont, geen piercing."',
        isCorrect: false,
        feedback: 'Je overschrijdt je rol. Dit leidt tot verzet en ondermijnt je positie.',
      },
      {
        id: 'c',
        text: '"Vraag maar aan je ouders, ik bemoei me er niet mee."',
        isCorrect: false,
        feedback: 'Je trekt je helemaal terug. Je partner waardeert het als je meedenkt. Betrokkenheid is niet hetzelfde als beslissingsmacht.',
      },
    ],
    explanation: 'Grenzen als bonusouder betekent ook de grens van je eigen rol kennen. Je mag meedenken, maar de eindregie over grote beslissingen ligt bij de bio-ouders.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'co-ouderschap', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_20',
    skill: 'Grenzen',
    type: 'quiz',
    difficulty: 'expert',
    order: 20,
    question: 'Je bonuszoon (15) rookt stiekem. Je ruikt het als hij binnenkomt. Je partner weet het niet. Wat doe je?',
    context: 'Geheimen in samengestelde gezinnen creëren driehoeken. Transparantie beschermt iedereen.',
    options: [
      {
        id: 'a',
        text: 'Je spreekt hem rustig aan: "Ik ruik dat je gerookt hebt. Ik maak me zorgen. Ik wil dit ook met mama bespreken."',
        isCorrect: true,
        feedback: 'Sterk. Je stelt de grens, toont zorg en bent transparant. Geen geheimen, maar je geeft hem de kans om het te weten.',
      },
      {
        id: 'b',
        text: 'Je zegt niets en vertelt het meteen aan je partner',
        isCorrect: false,
        feedback: 'Je omzeilt het kind en creëert een driehoek. Hij voelt zich verraden. Spreek eerst hem aan.',
      },
      {
        id: 'c',
        text: 'Je houdt het voor je en hoopt dat het overgaat',
        isCorrect: false,
        feedback: 'Geheimen bewaren ondermijnt je relatie met zowel het kind als je partner. Zorg gaat boven comfort.',
      },
    ],
    explanation: 'Als bonusouder mag je grenzen stellen bij gezondheid en veiligheid. De sleutel is transparantie: geen geheimen, maar ook niet achter de rug om.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ════════════════════════════════════════════════════════════════
  // AUTONOMIE (5 vragen)
  // ════════════════════════════════════════════════════════════════

  {
    id: 'bonus_tr_21',
    skill: 'Autonomie',
    type: 'quiz',
    difficulty: 'basis',
    order: 21,
    question: 'Je bonusdochter (8) wil zelf kiezen wat ze aantrekt naar een familiefeest bij jouw familie. Ze kiest iets dat jij niet gepast vindt. Wat doe je?',
    context: 'Autonomie ondersteunen bij een bonuskind is extra belangrijk: het kind heeft al weinig controle over de gezinssituatie.',
    options: [
      {
        id: 'a',
        text: '"Leuke keuze! Als je het er fijn in voelt, is het goed."',
        isCorrect: true,
        feedback: 'Perfect. Je geeft haar controle over iets kleins. Dit bouwt vertrouwen en gevoel van autonomie in een spannende situatie.',
      },
      {
        id: 'b',
        text: '"Trek maar iets netter aan, het is een feest."',
        isCorrect: false,
        feedback: 'Je corrigeert haar keuze in een situatie waar ze al onzeker kan zijn. Dit kan voelen als: ik ben niet goed genoeg voor jouw familie.',
      },
      {
        id: 'c',
        text: 'Je vraagt je partner om het te regelen',
        isCorrect: false,
        feedback: 'Delegeren is makkelijk, maar je mist een kans om de relatie te versterken. Het zijn juist deze kleine momenten die tellen.',
      },
    ],
    explanation: 'Bonuskinderen hebben extra behoefte aan autonomie omdat ze weinig controle hebben over de grote beslissingen in hun leven.',
    research: 'Deci, E. & Ryan, R. (2000). Self-Determination Theory',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_22',
    skill: 'Autonomie',
    type: 'quiz',
    difficulty: 'basis',
    order: 22,
    question: 'Je bonuszoon (6) wil niet mee naar een uitstapje met jouw ouders. Hij wil thuisblijven bij mama. Wat doe je?',
    context: 'Kinderen in samengestelde gezinnen worden vaak meegenomen in sociale situaties zonder inspraak.',
    options: [
      {
        id: 'a',
        text: '"Ik snap het. Wil je thuisblijven of is er iets waardoor het leuker wordt?"',
        isCorrect: true,
        feedback: 'Goed. Je respecteert zijn keuze en biedt een opening. Dwang leidt tot weerstand, vrijheid leidt tot vertrouwen.',
      },
      {
        id: 'b',
        text: '"Je gaat gewoon mee, opa en oma verwachten je."',
        isCorrect: false,
        feedback: 'Je forceert een sociale situatie. Het kind voelt zich een rekwisiet in jouw familieleven.',
      },
      {
        id: 'c',
        text: '"Als je niet meegaat, krijg je geen ijsje."',
        isCorrect: false,
        feedback: 'Omkopen ondermijnt autonomie en vertrouwen. Het kind gaat misschien mee, maar de relatie lijdt.',
      },
    ],
    explanation: 'Bonuskinderen moeten in hun eigen tempo integreren in de familie van de bonusouder. Dwang vertraagt dit proces, vrijheid versnelt het.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_23',
    skill: 'Autonomie',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 23,
    question: 'Je bonusdochter (11) wil je niet "papa" noemen, maar ook niet bij je voornaam. Ze weet niet hoe ze je moet noemen. Wat doe je?',
    context: 'De naam waarmee een bonuskind je aanspreekt raakt aan identiteit.',
    options: [
      {
        id: 'a',
        text: '"Noem me maar wat goed voelt. We zoeken het samen uit, geen druk."',
        isCorrect: true,
        feedback: 'Perfect. Je geeft haar de regie over iets dat over haar identiteit gaat. Dit is autonomie op een diep niveau.',
      },
      {
        id: 'b',
        text: '"Je mag me gewoon bij mijn voornaam noemen, dat is prima."',
        isCorrect: false,
        feedback: 'Goed bedoeld, maar je neemt de keuze over. Het gaat erom dat zij het bepaalt, niet dat jij het makkelijk maakt.',
      },
      {
        id: 'c',
        text: '"Je mag me papa noemen als je wilt, dat vind ik leuk."',
        isCorrect: false,
        feedback: 'Dit legt druk op het kind. Als ze haar biologische vader "papa" noemt, kan dit voelen als verraad.',
      },
    ],
    explanation: 'Hoe een bonuskind je noemt, moet volledig aan het kind zijn. Sommige kinderen bedenken een eigen naam. Dat eigen initiatief is het mooiste teken van verbinding.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_24',
    skill: 'Autonomie',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 24,
    question: 'Je bonuszoon (14) wil niet meer om het weekend komen. Hij wil zelf bepalen wanneer. Hoe reageer je?',
    context: 'Tieners in samengestelde gezinnen willen meer controle over het wisselschema.',
    options: [
      {
        id: 'a',
        text: 'Je luistert serieus en zoekt samen met het kind en je partner naar een flexibeler schema',
        isCorrect: true,
        feedback: 'Goed. Je neemt zijn autonomiebehoefte serieus zonder de structuur helemaal los te laten. Samen zoeken is de sleutel.',
      },
      {
        id: 'b',
        text: '"De afspraak is om het weekend, daar houden we ons aan."',
        isCorrect: false,
        feedback: 'Rigiditeit duwt tieners weg. Hij voelt zich niet gehoord en zal met meer weerstand komen.',
      },
      {
        id: 'c',
        text: '"Doe maar wat je wilt, je komt maar als het uitkomt."',
        isCorrect: false,
        feedback: 'Dit klinkt als opgeven. Het kind hoort: het maakt je niet uit of ik kom. Betrokkenheid combineren met flexibiliteit is de kunst.',
      },
    ],
    explanation: 'Tieners hebben ontwikkelingsmatig meer autonomiebehoefte. In samengestelde gezinnen is dit extra sterk omdat het wisselschema als opgelegd voelt.',
    research: 'Hetherington & Kelly (2002). For Better or For Worse',
    themes: ['bonuskind', 'co-ouderschap', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_25',
    skill: 'Autonomie',
    type: 'quiz',
    difficulty: 'expert',
    order: 25,
    question: 'Je bonusdochter (16) wil op haar kamer eten als jullie gasten hebben. Je partner vindt dat onacceptabel. Het kind kijkt naar jou. Wat doe je?',
    context: 'Als bonusouder sta je soms tussen je partner en het bonuskind in.',
    options: [
      {
        id: 'a',
        text: '"Ik snap dat het veel is met al die mensen. Wat als je het voorgerecht mee-eet en dan naar boven gaat?"',
        isCorrect: true,
        feedback: 'Uitstekend. Je erkent haar gevoel, biedt een compromis en toont aan beide kanten dat je luistert.',
      },
      {
        id: 'b',
        text: '"Mama heeft gelijk, bij ons eten we samen."',
        isCorrect: false,
        feedback: 'Je kiest kant zonder het kind te horen. Dit bevestigt haar gevoel dat ze geen stem heeft in dit gezin.',
      },
      {
        id: 'c',
        text: '"Laat haar toch, het is haar keuze."',
        isCorrect: false,
        feedback: 'Je ondermijnt je partner publiekelijk. Dit creëert een wig. Bespreek het samen, presenteer een gezamenlijk standpunt.',
      },
    ],
    explanation: 'De bonusouder staat vaak in een bemiddelaarsrol. Een compromis dat beide partijen respecteert is moeilijk maar waardevol.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ════════════════════════════════════════════════════════════════
  // HERSTEL (5 vragen)
  // ════════════════════════════════════════════════════════════════

  {
    id: 'bonus_tr_26',
    skill: 'Herstel',
    type: 'quiz',
    difficulty: 'basis',
    order: 26,
    question: 'Je hebt gisteren je bonuszoon (7) te streng aangesproken over rommel. Je partner zei dat je overdreef. Het kind is nu onzeker bij jou. Wat doe je?',
    context: 'Herstelmomenten zijn in bonusrelaties extra beladen, omdat het kind al onzeker kan zijn over jouw betrokkenheid.',
    options: [
      {
        id: 'a',
        text: '"Ik was gisteren te streng. Dat was niet eerlijk. Sorry."',
        isCorrect: true,
        feedback: 'Perfect. Kort, eerlijk, zonder excuses of uitleg. Het kind hoort: jij doet ertoe, en ik maak ook fouten.',
      },
      {
        id: 'b',
        text: 'Je doet extra aardig vandaag zonder het te benoemen',
        isCorrect: false,
        feedback: 'Extra aardig zijn is geen herstel. Het kind weet niet waarom je anders doet en vertrouwt het niet.',
      },
      {
        id: 'c',
        text: 'Je wacht tot het overwaait',
        isCorrect: false,
        feedback: 'Bij bonuskinderen waait het niet vanzelf over. Elke onherstelde breuk bevestigt: hij geeft niet echt om mij.',
      },
    ],
    explanation: 'Herstel is bij bonuskinderen urgenter dan bij eigen kinderen. De relatie is fragiel en elke breuk die onhersteld blijft, telt dubbel.',
    research: 'Tronick, E. (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_27',
    skill: 'Herstel',
    type: 'quiz',
    difficulty: 'basis',
    order: 27,
    question: 'Je bonusdochter (9) rende huilend naar haar kamer nadat je haar verbood om op de iPad te spelen. Ze schreeuwde: "Ik haat je!" Een uur later is ze stil. Wat doe je?',
    context: '"Ik haat je" van een bonuskind raakt anders dan van een eigen kind.',
    options: [
      {
        id: 'a',
        text: 'Je klopt op haar deur: "Ik weet dat je boos was. De iPad-regel blijft, maar ik wil het graag goedmaken."',
        isCorrect: true,
        feedback: 'Goed. Je scheidt de grens (iPad) van de relatie (goedmaken). Het kind leert: grenzen en liefde bestaan naast elkaar.',
      },
      {
        id: 'b',
        text: 'Je wacht tot zij naar jou toekomt',
        isCorrect: false,
        feedback: 'Bij bonuskinderen werkt dit niet. Het kind denkt: het maakt hem niet uit. Neem het initiatief.',
      },
      {
        id: 'c',
        text: '"Als je sorry zegt voor wat je zei, is het goed."',
        isCorrect: false,
        feedback: 'Je eist excuses voordat je herstelt. Herstel is niet transactioneel. Jij neemt het initiatief, ongeacht wat zij zei.',
      },
    ],
    explanation: 'Bij bonuskinderen moet de volwassene bijna altijd het initiatief nemen tot herstel. Het kind durft het niet, uit angst voor nog meer afwijzing.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_28',
    skill: 'Herstel',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 28,
    question: 'Je maakte bij het avondeten een grap over je bonuszoon (12). Iedereen lachte, behalve hij. Later merk je dat hij gekwetst is. Wat doe je?',
    context: 'Humor kan in samengestelde gezinnen anders landen omdat het bonuskind de relatie anders interpreteert.',
    options: [
      {
        id: 'a',
        text: '"Ik maakte een grap die niet grappig was voor jou. Dat was stom van me. Sorry."',
        isCorrect: true,
        feedback: 'Precies. Je bagatelliseert niet ("het was maar een grapje") maar erkent de impact. Het kind voelt zich serieus genomen.',
      },
      {
        id: 'b',
        text: '"Het was maar een grapje, niet zo serieus."',
        isCorrect: false,
        feedback: 'Je ontkent zijn ervaring. Bij een bonuskind kan een grap voelen als: ik hoor er niet bij, ze lachen me uit.',
      },
      {
        id: 'c',
        text: 'Je denkt: hij is te gevoelig, het gaat wel over',
        isCorrect: false,
        feedback: 'Wat voor jou een kleinigheid is, kan voor het kind een bevestiging zijn van buitenstaanderschap. Neem het serieus.',
      },
    ],
    explanation: 'Bonuskinderen interpreteren humor anders als de relatie nog onzeker is. Herstel toont dat je hun perspectief respecteert.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_29',
    skill: 'Herstel',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 29,
    question: 'Je bonusdochter (10) hoorde je tegen je partner zeggen: "Het is moeilijk met haar erbij." Ze deed alsof ze het niet hoorde, maar trekt zich terug. Wat doe je?',
    context: 'Kinderen horen meer dan je denkt. Een opgevangen opmerking kan diep snijden.',
    options: [
      {
        id: 'a',
        text: 'Je zoekt haar op en zegt: "Ik denk dat je iets hoorde. Dat was niet eerlijk. Ik vind het soms lastig, maar jij maakt het niet moeilijk. Jij bent welkom."',
        isCorrect: true,
        feedback: 'Moedig en eerlijk. Je ontkent niet wat je zei, maar herstelt de boodschap. Het kind hoort: ik ben niet het probleem.',
      },
      {
        id: 'b',
        text: 'Je doet alsof er niets gebeurd is en hoopt dat ze het vergeet',
        isCorrect: false,
        feedback: 'Ze vergeet het niet. Dit soort opmerkingen etsen zich in. Onhersteld wordt het een kernovertuiging: ik ben een last.',
      },
      {
        id: 'c',
        text: 'Je zegt tegen je partner: "Ze heeft het gehoord, praat jij met haar."',
        isCorrect: false,
        feedback: 'Jij zei het, jij herstelt het. Delegeren bevestigt het idee dat je de relatie niet serieus neemt.',
      },
    ],
    explanation: 'Kinderen die horen dat ze "moeilijk" zijn, internaliseren dat als: ik ben het probleem. Snel en eerlijk herstellen is cruciaal.',
    research: 'Hetherington & Kelly (2002). For Better or For Worse: Divorce Reconsidered',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_30',
    skill: 'Herstel',
    type: 'quiz',
    difficulty: 'expert',
    order: 30,
    question: 'Je relatie met je bonuszoon (14) is al maanden stroef. Er is geen specifiek incident, maar de afstand groeit. Wat is de beste aanpak?',
    context: 'Soms is herstel niet één moment maar een proces.',
    options: [
      {
        id: 'a',
        text: 'Je zoekt kleine, laagdrempelige contactmomenten: een lift aanbieden, vragen naar zijn game, samen een snack pakken',
        isCorrect: true,
        feedback: 'Precies goed. Herstel bij tieners werkt via micro-momenten, niet via grote gesprekken. Geduld en consistentie zijn de sleutel.',
      },
      {
        id: 'b',
        text: 'Je plant een serieus gesprek: "We moeten praten over hoe het gaat tussen ons."',
        isCorrect: false,
        feedback: 'Te zwaar voor een tiener. Herstel gebeurt in de marge: samen iets doen, niet aan tafel zitten.',
      },
      {
        id: 'c',
        text: 'Je accepteert dat het zo is en richt je op je eigen kinderen',
        isCorrect: false,
        feedback: 'Opgeven bevestigt zijn overtuiging dat je niet echt om hem geeft. Het is moeilijk, maar elke poging telt.',
      },
    ],
    explanation: 'Herstel met tieners werkt via "zijlijncontact": samen iets doen zonder oogcontact of diep gesprek. De relatie groeit in de luwte.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ════════════════════════════════════════════════════════════════
  // VERBINDING (5 vragen)
  // ════════════════════════════════════════════════════════════════

  {
    id: 'bonus_tr_31',
    skill: 'Verbinding',
    type: 'quiz',
    difficulty: 'basis',
    order: 31,
    question: 'Je bonusdochter (5) vraagt voor het eerst of je haar wilt voorlezen. Wat doe je?',
    context: 'Een bonuskind dat initiatief neemt tot contact is een doorbraak.',
    options: [
      {
        id: 'a',
        text: 'Je zegt meteen ja, laat alles uit je handen vallen en geeft haar je volle aandacht',
        isCorrect: true,
        feedback: 'Perfect. Dit is een gouden moment. Het kind steekt zijn nek uit. Alles laten vallen toont: jij bent belangrijk voor mij.',
      },
      {
        id: 'b',
        text: '"Straks even, ik ben nu bezig."',
        isCorrect: false,
        feedback: 'Normaal gesproken prima, maar deze eerste keer is te kostbaar om uit te stellen. Het kind waagt een sprong – vang het op.',
      },
      {
        id: 'c',
        text: '"Vraag maar aan mama, zij leest altijd voor."',
        isCorrect: false,
        feedback: 'Je wijst het kind af en stuurt het terug naar de bio-ouder. Het kind leert: bij hem moet ik niet zijn voor nabijheid.',
      },
    ],
    explanation: 'Wanneer een bonuskind voor het eerst contact initieert, is dat een doorbraakmoment. Grijp het. Deze momenten bepalen het traject van de relatie.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_32',
    skill: 'Verbinding',
    type: 'quiz',
    difficulty: 'basis',
    order: 32,
    question: 'Je wilt een traditie opbouwen met je bonuszoon (9). Je partner stelt voor om elke zondag samen te fietsen. Het kind trekt een gezicht. Wat doe je?',
    context: 'Nieuwe tradities opleggen werkt averechts. Ze moeten organisch groeien.',
    options: [
      {
        id: 'a',
        text: '"Geen zin in fietsen? Wat zou jij leuk vinden om samen te doen?"',
        isCorrect: true,
        feedback: 'Goed. Je geeft het kind inspraak. Een traditie die het kind mee heeft gekozen, heeft veel meer kans van slagen.',
      },
      {
        id: 'b',
        text: '"We proberen het gewoon een paar weken."',
        isCorrect: false,
        feedback: 'Geforceerde kwaliteitstijd voelt als verplichting, niet als verbinding. Het kind koppelt het aan dwang.',
      },
      {
        id: 'c',
        text: 'Je laat het idee helemaal varen',
        isCorrect: false,
        feedback: 'Te snel opgeven. Het idee hoeft niet weg, alleen de uitvoering moet aansluiten bij het kind.',
      },
    ],
    explanation: 'Gezamenlijke tradities zijn de lijm van samengestelde gezinnen. Maar ze werken alleen als het kind er zelf iets in te kiezen heeft.',
    research: 'Bray, J. & Kelly, J. (1998). Stepfamilies',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_33',
    skill: 'Verbinding',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 33,
    question: 'Je eigen dochter (8) en je bonusdochter (9) maken ruzie. Je eigen kind zegt: "Zij hoort hier niet!" Wat doe je?',
    context: 'Rivaliteit tussen eigen kinderen en bonuskinderen raakt aan de kern van het samengestelde gezin.',
    options: [
      {
        id: 'a',
        text: 'Je gaat op hun niveau zitten: "Jullie horen allebei hier. Ik snap dat het soms lastig is."',
        isCorrect: true,
        feedback: 'Sterk. Je kiest geen kant, valideert het gevoel en bevestigt dat iedereen erbij hoort.',
      },
      {
        id: 'b',
        text: 'Je corrigeert je eigen kind: "Zo praat je niet!"',
        isCorrect: false,
        feedback: 'Begrijpelijk, maar je eigen kind voelt zich ook bedreigd. Correctie zonder validatie maakt het erger.',
      },
      {
        id: 'c',
        text: 'Je troost het bonuskind en stuurt je eigen kind naar haar kamer',
        isCorrect: false,
        feedback: 'Je kiest kant. Je eigen kind voelt zich afgewezen ten gunste van het bonuskind. Dit verdiept de rivaliteit.',
      },
    ],
    explanation: 'In samengestelde gezinnen voelen alle kinderen zich soms bedreigd. De kunst is om niemand te kiezen en iedereen te bevestigen in hun plek.',
    research: 'Hetherington & Kelly (2002). For Better or For Worse',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_34',
    skill: 'Verbinding',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 34,
    question: 'Je bonuszoon (11) doet voor het eerst mee met een familiespel. Halverwege verliest hij en wil stoppen. Je merkt dat het niet over het spel gaat. Wat doe je?',
    context: 'Meedoen en verliezen in een groep waar je je buitenstaander voelt, is extra beladen.',
    options: [
      {
        id: 'a',
        text: '"Verliezen is balen. Wil je even pauze of liever stoppen? Allebei is oké."',
        isCorrect: true,
        feedback: 'Perfect. Je benoemt het gevoel, biedt opties en legt geen druk. Het kind voelt: ik mag kwetsbaar zijn in dit gezin.',
      },
      {
        id: 'b',
        text: '"Het is maar een spelletje, doe gewoon mee!"',
        isCorrect: false,
        feedback: 'Je bagatelliseert. Het gaat niet om het spel maar om erbij horen. Druk versterkt het gevoel van buitenstaanderschap.',
      },
      {
        id: 'c',
        text: 'Je laat hem gaan zonder er iets over te zeggen',
        isCorrect: false,
        feedback: 'Je mist de kans om verbinding te maken op een kwetsbaar moment. Een kleine check-in kan het verschil maken.',
      },
    ],
    explanation: 'Verliezen in een groep waar je je niet veilig voelt, activeert schaamte. Door ruimte te bieden zonder druk, maak je het gezin veiliger.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_35',
    skill: 'Verbinding',
    type: 'quiz',
    difficulty: 'expert',
    order: 35,
    question: 'Na drie jaar samen wonen zegt je bonusdochter (13) voor het eerst spontaan "ik hou van je" bij het slapengaan. Je bent ontroerd. Wat doe je?',
    context: 'Doorbraakmomenten zijn zeldzaam en kostbaar in bonusrelaties.',
    options: [
      {
        id: 'a',
        text: 'Je zegt warm: "Ik hou ook van jou." Niet meer, niet minder.',
        isCorrect: true,
        feedback: 'Perfect. Ontvang het geschenk zonder het groter te maken. Warm, rustig, wederkerig. Dit is verbinding.',
      },
      {
        id: 'b',
        text: '"Echt? Dat meen je niet! Wat fijn!"',
        isCorrect: false,
        feedback: 'Je overdadigheid maakt het ongemakkelijk. Het kind trekt zich terug als de reactie te groot is.',
      },
      {
        id: 'c',
        text: 'Je vertelt het meteen enthousiast aan je partner',
        isCorrect: false,
        feedback: 'Begrijpelijk, maar dit is een moment tussen jullie twee. Door het meteen te delen maak je het publiek.',
      },
    ],
    explanation: 'Doorbraakmomenten in bonusrelaties vragen om kalmte, niet om euforie. Wederkerigheid zonder overdadigheid is de sleutel.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ════════════════════════════════════════════════════════════════
  // REFLECTIE (5 vragen)
  // ════════════════════════════════════════════════════════════════

  {
    id: 'bonus_tr_36',
    skill: 'Reflectie',
    type: 'quiz',
    difficulty: 'basis',
    order: 36,
    question: 'Je merkt dat je je bonuskind soms vermijdt als het lastig gedrag vertoont. Waarom is reflectie hierop belangrijk?',
    context: 'Vermijding is een veelvoorkomend patroon bij bonusouders.',
    options: [
      {
        id: 'a',
        text: 'Omdat vermijding het signaal geeft dat je er alleen bent als het makkelijk is – het kind leert: liefde is voorwaardelijk',
        isCorrect: true,
        feedback: 'Precies. Reflectie op je vermijdingspatroon helpt je om bewust te kiezen voor aanwezigheid, ook als het moeilijk is.',
      },
      {
        id: 'b',
        text: 'Omdat je als bonusouder altijd beschikbaar moet zijn',
        isCorrect: false,
        feedback: 'Altijd beschikbaar is niet realistisch. Het gaat erom dat je bewust kiest, niet dat je jezelf uitput.',
      },
      {
        id: 'c',
        text: 'Omdat je partner anders boos wordt',
        isCorrect: false,
        feedback: 'Reflectie gaat over zelfinzicht, niet over conflictvermijding met je partner. De motivatie moet intrinsiek zijn.',
      },
    ],
    explanation: 'Vermijding bij bonusouders is begrijpelijk maar schadelijk op lange termijn. Reflectie helpt het patroon te doorbreken zonder zelfveroordeling.',
    research: 'Siegel, D. & Hartzell, M. (2003). Parenting from the Inside Out',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_37',
    skill: 'Reflectie',
    type: 'quiz',
    difficulty: 'basis',
    order: 37,
    question: 'Je vader was afwezig in je eigen jeugd. Je merkt dat je overcompenseert bij je bonuskind door "de perfecte vader" te willen zijn. Wat is het risico?',
    context: 'Onverwerkte eigen hechtingservaringen beïnvloeden je rol als bonusouder.',
    options: [
      {
        id: 'a',
        text: 'Je dringt je op en respecteert het tempo van het kind niet – overcompensatie is ook niet-afstemmen',
        isCorrect: true,
        feedback: 'Precies. Te veel willen kan net zo overweldigend zijn als te weinig doen. Het kind bepaalt het tempo, niet jouw onverwerkte behoefte.',
      },
      {
        id: 'b',
        text: 'Er is geen risico – meer betrokkenheid is altijd beter',
        isCorrect: false,
        feedback: 'Meer is niet altijd beter. Een bonuskind dat overspoeld wordt met aandacht die het niet vraagt, trekt zich juist terug.',
      },
      {
        id: 'c',
        text: 'Het risico is dat je eigen kinderen jaloers worden',
        isCorrect: false,
        feedback: 'Dat kan spelen, maar het hoofdrisico zit in het niet-afstemmen op wat het bonuskind nodig heeft versus wat jij wilt geven.',
      },
    ],
    explanation: 'Reflectie op je eigen hechtingsgeschiedenis is essentieel als bonusouder. Je onverwerkte behoeften kunnen het contact verstoren.',
    research: 'Siegel, D. & Hartzell, M. (2003). Parenting from the Inside Out',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_38',
    skill: 'Reflectie',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 38,
    question: 'Je partner zegt: "Je doet niet genoeg moeite met mijn kind." Je eerste reactie is woede. Wat vertelt die woede je als je erop reflecteert?',
    context: 'Sterke emotionele reacties op feedback bevatten vaak informatie over onderliggende behoeften.',
    options: [
      {
        id: 'a',
        text: 'Waarschijnlijk dat je je onzeker voelt in je rol en dat de feedback raakt aan je angst om te falen',
        isCorrect: true,
        feedback: 'Goed inzicht. Woede is vaak een secundaire emotie die pijn of angst bedekt. Reflectie helpt de onderliggende behoefte te zien.',
      },
      {
        id: 'b',
        text: 'Dat je partner oneerlijk is en je goede intenties niet ziet',
        isCorrect: false,
        feedback: 'Dat kan, maar dit is een oordeel, geen reflectie. De vraag is niet of je partner gelijk heeft, maar wat jouw reactie je leert.',
      },
      {
        id: 'c',
        text: 'Niets bijzonders – het is een logische reactie op een onterechte opmerking',
        isCorrect: false,
        feedback: 'Elke sterke emotie bevat informatie. Reflectie betekent niet dat je partner gelijk heeft, maar dat je nieuwsgierig bent naar je eigen reactie.',
      },
    ],
    explanation: 'Reflectie op je emotionele reacties als bonusouder is geen luxe maar een noodzaak. Het helpt je te reageren vanuit inzicht, niet vanuit pijn.',
    research: 'Siegel, D. & Hartzell, M. (2003). Parenting from the Inside Out',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_39',
    skill: 'Reflectie',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 39,
    question: 'Je realiseert je dat je na een jaar als bonusouder nog steeds het gevoel hebt "op bezoek te zijn" in je eigen huis. Welke reflectievraag helpt het meest?',
    context: 'Het gevoel van thuishoren ontwikkelt zich langzaam in samengestelde gezinnen.',
    options: [
      {
        id: 'a',
        text: '"Wat heb ik nodig om me meer thuis te voelen, en hoe kan ik dat bespreekbaar maken?"',
        isCorrect: true,
        feedback: 'Sterk. Je richt de reflectie op je eigen behoefte en op actie. Constructief in plaats van rumineren.',
      },
      {
        id: 'b',
        text: '"Waarom accepteert het bonuskind me niet?"',
        isCorrect: false,
        feedback: 'Deze vraag legt de verantwoordelijkheid bij het kind. Reflectie werkt beter als je begint bij jezelf.',
      },
      {
        id: 'c',
        text: '"Had ik dit gezin wel moeten vormen?"',
        isCorrect: false,
        feedback: 'Twijfel is menselijk, maar deze vraag leidt tot ruminatie, niet tot groei. Richt je op het nu.',
      },
    ],
    explanation: 'Effectieve reflectie richt zich op behoeften en mogelijkheden, niet op schuld of twijfel. "Wat heb ik nodig?" opent deuren die "Waarom lukt het niet?" sluit.',
    research: 'Papernow, P. (2013). Surviving and Thriving in Stepfamily Relationships',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
  {
    id: 'bonus_tr_40',
    skill: 'Reflectie',
    type: 'quiz',
    difficulty: 'expert',
    order: 40,
    question: 'Je bonusdochter (15) zegt dat ze liever bij haar vader wil wonen. Je merkt dat je dit persoonlijk opvat, ook al weet je rationeel dat het niet over jou gaat. Welk patroon herken je?',
    context: 'Zelfreflectie helpt om persoonlijke triggers te onderscheiden van de situatie.',
    options: [
      {
        id: 'a',
        text: 'Afwijzing raakt een oude wond. Het bonuskind activeert een patroon dat al bestond voor deze relatie',
        isCorrect: true,
        feedback: 'Uitstekend zelfinzicht. Door je trigger te herkennen als iets van jou, kun je er anders mee omgaan.',
      },
      {
        id: 'b',
        text: 'Je concludeert dat je gefaald hebt als bonusouder',
        isCorrect: false,
        feedback: 'Dit is een conclusie, geen reflectie. De wens van het kind zegt niets over jouw waarde.',
      },
      {
        id: 'c',
        text: 'Ze is gewoon een ondankbare tiener',
        isCorrect: false,
        feedback: 'Labelen beschermt je ego maar blokkeert inzicht. De vraag is niet wat zij is, maar wat haar keuze bij jou triggert.',
      },
    ],
    explanation: 'Reflectie als bonusouder betekent onderscheiden wat van jou is (oude wonden) en wat van het kind (loyaliteit, ontwikkeling). Dat onderscheid is bevrijdend.',
    research: 'Siegel, D. & Hartzell, M. (2003). Parenting from the Inside Out',
    themes: ['bonuskind', 'samengesteld_gezin'],
  },
];

// ── 8 Scenarios (1 per skill, 4 opties per scenario) ────────────
// IDs: sc_bonus_1 t/m sc_bonus_8

export const BONUSKIND_SCENARIOS: Scenario[] = [

  // ── Aanwezigheid ──────────────────────────────────────────────
  {
    id: 'sc_bonus_1',
    ageGroups: ['6-9', '10-12'],
    skill: 'Aanwezigheid',
    situation: 'Je bonusdochter (9) komt op vrijdagmiddag bij jullie na een week bij haar moeder. Ze loopt langzaam naar haar kamer en doet de deur dicht. Een uur later is ze nog steeds boven.',
    prompt: 'Wat doe je?',
    options: [
      {
        id: 'a',
        text: 'Je stormt naar boven en vraagt wat er aan de hand is',
        feedback: 'Te veel druk na een overgang. Het kind heeft eerst ruimte nodig om te landen. Dit voelt als een verhoor.',
        score: 'slecht',
      },
      {
        id: 'b',
        text: 'Je roept van beneden: "Kom je zo eten? We hebben je lievelingsgerecht gemaakt!"',
        feedback: 'Goedbedoeld, maar het mist haar emotionele toestand. Ze heeft geen eten nodig, ze heeft ruimte nodig om te landen.',
        score: 'matig',
      },
      {
        id: 'c',
        text: 'Je laat haar met rust – als ze iets nodig heeft, komt ze wel',
        feedback: 'Je respecteert haar ruimte, maar ze mist het signaal dat je beschikbaar bent. Een kleine uitnodiging maakt verschil.',
        score: 'matig',
      },
      {
        id: 'd',
        text: 'Je klopt zacht aan en zegt: "Hey, fijn dat je er bent. Ik ben beneden als je zin hebt."',
        feedback: 'Precies goed. Je laat merken dat je haar ziet zonder druk uit te oefenen. Aanwezigheid aanbieden zonder opdringen.',
        score: 'goed',
      },
    ],
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ── Emotiecoaching ────────────────────────────────────────────
  {
    id: 'sc_bonus_2',
    ageGroups: ['6-9', '10-12', '13-16'],
    skill: 'Emotiecoaching',
    situation: 'Je bonuszoon (11) heeft op school een tekening gemaakt met het thema "mijn gezin". Hij tekende alleen zijn moeder, vader en zichzelf – niet jou of de andere kinderen. Je partner is gekwetst als ze het ziet. Het kind kijkt gespannen.',
    prompt: 'Hoe reageer je?',
    options: [
      {
        id: 'a',
        text: '"Mooie tekening. Ik zie je mama en papa. Wil je er iets over vertellen?"',
        feedback: 'Uitstekend. Je erkent zijn tekening zonder oordeel en opent de deur voor gesprek. Zijn beleving mag er zijn.',
        score: 'goed',
      },
      {
        id: 'b',
        text: '"Maar wij horen er toch ook bij? Wij zijn ook je gezin."',
        feedback: 'Je corrigeert zijn beleving. Het kind voelt dat zijn gevoel fout is. Dat versterkt het loyaliteitsconflict.',
        score: 'slecht',
      },
      {
        id: 'c',
        text: 'Je zegt niets maar je partner ziet dat je gekwetst bent',
        feedback: 'Jouw gekwetstheid is begrijpelijk, maar het kind voelt de spanning. Het leert: mijn gevoel veroorzaakt problemen.',
        score: 'matig',
      },
      {
        id: 'd',
        text: '"Ik zie dat je erover nadacht. Er zijn veel mensen die om je geven, hè?"',
        feedback: 'Goed. Je verbreedt het perspectief zonder zijn tekening te corrigeren. Subtiel en respectvol.',
        score: 'goed',
      },
    ],
    themes: ['bonuskind', 'co-ouderschap'],
  },

  // ── Zelfregulatie ─────────────────────────────────────────────
  {
    id: 'sc_bonus_3',
    ageGroups: ['10-12', '13-16'],
    skill: 'Zelfregulatie',
    situation: 'Je bonuszoon (13) schreeuwt tijdens een ruzie over zijn telefoon: "Jij bent mijn vader niet! Je hebt niks over mij te zeggen!" Je voelt woede en pijn opkomen. Je partner is niet thuis.',
    prompt: 'Wat doe je?',
    options: [
      {
        id: 'a',
        text: '"Zolang je onder mijn dak woont, doe je wat ik zeg!"',
        feedback: 'Je escaleert en bevestigt zijn angst dat je zijn vader probeert te vervangen. Dit vergroot de afstand.',
        score: 'slecht',
      },
      {
        id: 'b',
        text: 'Je loopt boos weg en slaat de deur dicht',
        feedback: 'Je verliest je zelfregulatie. Het kind ziet dat het je kan breken met woorden. Dit geeft onveiligheid.',
        score: 'slecht',
      },
      {
        id: 'c',
        text: 'Je ademt diep in: "Ik merk dat dit heftig is. Ik neem even pauze, dan praten we verder."',
        feedback: 'Goed. Je modelleert zelfregulatie onder druk. Het kind ziet een volwassene die niet terugslaat maar ook niet weggaat.',
        score: 'goed',
      },
      {
        id: 'd',
        text: '"Dat klopt, ik ben je vader niet. Maar ik geef om je en ik blijf hier. We praten straks verder."',
        feedback: 'Sterk. Je erkent de waarheid, bevestigt je betrokkenheid en stelt een grens. Drie vaardigheden in drie zinnen.',
        score: 'goed',
      },
    ],
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ── Grenzen ───────────────────────────────────────────────────
  {
    id: 'sc_bonus_4',
    ageGroups: ['6-9', '10-12'],
    skill: 'Grenzen',
    situation: 'Je bonusdochter (9) weigert haar huiswerk te maken en zegt: "Bij papa hoef ik dat niet." Je partner is nog niet thuis van werk.',
    prompt: 'Wat doe je?',
    options: [
      {
        id: 'a',
        text: '"Dan bel ik papa even om te vragen of dat klopt."',
        feedback: 'Je dreigt en creëert een driehoek. Het kind voelt zich in de val. De bio-ouder wordt een scheidsrechter.',
        score: 'slecht',
      },
      {
        id: 'b',
        text: '"Oké, dan doe je het maar niet."',
        feedback: 'Je geeft de grens op onder druk. Het kind leert dat verwijzen naar de andere ouder een effectieve strategie is.',
        score: 'slecht',
      },
      {
        id: 'c',
        text: '"Hier zijn onze afspraken. Huiswerk hoort daarbij. Ik help je als je wilt."',
        feedback: 'Goed. Je verwijst naar de huisregel en biedt hulp aan in plaats van dwang.',
        score: 'goed',
      },
      {
        id: 'd',
        text: '"Ik snap dat het bij papa anders is. Hier werken we zo. Wat heb je nodig om te beginnen?"',
        feedback: 'Sterk. Je respecteert het andere huishouden, houdt je grens en biedt ondersteuning. Drie dingen tegelijk.',
        score: 'goed',
      },
    ],
    themes: ['bonuskind', 'co-ouderschap', 'samengesteld_gezin'],
  },

  // ── Autonomie ─────────────────────────────────────────────────
  {
    id: 'sc_bonus_5',
    ageGroups: ['13-16'],
    skill: 'Autonomie',
    situation: 'Je bonuszoon (15) wil niet meer mee op jullie gezinsvakantie. Hij zegt: "Jullie zijn niet mijn gezin." Je partner is verdrietig en kijkt naar jou.',
    prompt: 'Wat doe je?',
    options: [
      {
        id: 'a',
        text: '"Je gaat gewoon mee, we hebben het al geboekt."',
        feedback: 'Dwang bij een tiener leidt tot meer verzet. Een geforceerde vakantie wordt voor niemand leuk.',
        score: 'slecht',
      },
      {
        id: 'b',
        text: '"Prima, dan ga je maar naar je vader die week."',
        feedback: 'Reactief en afwijzend. Het kind hoort: als je niet meedoet, hoef je er niet bij.',
        score: 'slecht',
      },
      {
        id: 'c',
        text: '"Dat is naar om te horen. Je hoort er wel bij, maar je hoeft niet mee als je dat niet wilt."',
        feedback: 'Goed. Je valideert zijn autonomiebehoefte en bevestigt zijn plek. Het kind mag kiezen zonder afgewezen te worden.',
        score: 'goed',
      },
      {
        id: 'd',
        text: '"Wat zou de vakantie leuker maken voor jou? Mogen er dingen anders?"',
        feedback: 'Sterk. Je neemt zijn bezwaar serieus en zoekt samen naar een oplossing. Misschien is het probleem niet de vakantie maar het gebrek aan inspraak.',
        score: 'goed',
      },
    ],
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ── Herstel ───────────────────────────────────────────────────
  {
    id: 'sc_bonus_6',
    ageGroups: ['6-9', '10-12'],
    skill: 'Herstel',
    situation: 'Je bonusdochter (8) hoorde je gisteravond tegen je partner zeggen: "Soms wou ik dat het makkelijker was, zonder haar erbij." Vandaag is ze stil en kijkt je niet aan.',
    prompt: 'Wat doe je?',
    options: [
      {
        id: 'a',
        text: 'Je doet alsof er niets aan de hand is en gaat door met je dag',
        feedback: 'Het kind draagt nu de pijn van jouw woorden. Niet herstellen bevestigt haar ergste angst: ik ben een last.',
        score: 'slecht',
      },
      {
        id: 'b',
        text: 'Je zegt tegen je partner: "Praat jij even met haar, ze doet raar."',
        feedback: 'Jij zei het, jij herstelt het. Delegeren verergert de schade en bevestigt dat je de relatie niet serieus neemt.',
        score: 'slecht',
      },
      {
        id: 'c',
        text: 'Je zoekt een rustig moment en zegt: "Ik zei iets stoms gisteravond. Het ging niet over jou. Ik had een zware dag. Sorry."',
        feedback: 'Goed. Je neemt verantwoordelijkheid en biedt context zonder het goed te praten. Het kind voelt: hij ziet me en het spijt hem.',
        score: 'goed',
      },
      {
        id: 'd',
        text: '"Ik denk dat je iets hoorde gisteravond. Wat ik zei was niet eerlijk. Ik vind het soms moeilijk, maar dat is niet jouw schuld. Jij hoort hier."',
        feedback: 'Moedig en eerlijk. Je ontkent niet, je geeft context en je herstelt de boodschap. Het kind hoort: ik ben niet het probleem.',
        score: 'goed',
      },
    ],
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ── Verbinding ────────────────────────────────────────────────
  {
    id: 'sc_bonus_7',
    ageGroups: ['3-5', '6-9'],
    skill: 'Verbinding',
    situation: 'Je bonuszoon (5) geeft je spontaan een knuffel bij het slapengaan. Het is de eerste keer in een jaar. Je partner staat erbij en glimlacht.',
    prompt: 'Wat doe je?',
    options: [
      {
        id: 'a',
        text: 'Je tilt hem op en zegt: "Eindelijk! Daar heb ik lang op gewacht!"',
        feedback: 'Je overdadigheid maakt het zwaar. Het kind schrikt van de intensiteit en leert: als ik iets geef, wordt het te groot.',
        score: 'matig',
      },
      {
        id: 'b',
        text: 'Je bent zo verrast dat je verstijft en niets doet',
        feedback: 'Begrijpelijk, maar het kind voelt de aarzeling. Probeer in het moment te blijven en terug te geven wat het kind geeft.',
        score: 'matig',
      },
      {
        id: 'c',
        text: 'Je beantwoordt de knuffel warm en rustig: "Slaap lekker, fijn dat je er bent."',
        feedback: 'Perfect. Je ontvangt het geschenk zonder het groter te maken. Warm, rustig, wederkerig. Dit is verbinding.',
        score: 'goed',
      },
      {
        id: 'd',
        text: 'Je knuffelt terug en fluistert: "Fijn dat je er bent."',
        feedback: 'Warm en passend. Drie woorden die bevestigen dat hij welkom is. Geen overdaad, alleen aanwezigheid.',
        score: 'goed',
      },
    ],
    themes: ['bonuskind', 'samengesteld_gezin'],
  },

  // ── Reflectie ─────────────────────────────────────────────────
  {
    id: 'sc_bonus_8',
    ageGroups: ['6-9', '10-12', '13-16'],
    skill: 'Reflectie',
    situation: 'Je ligt \'s avonds in bed en denkt terug aan de dag. Je zoon (10) vertelde enthousiast over een uitje met je ex en haar nieuwe partner. Je merkte dat je stijf werd en kort reageerde. Je zoon keek teleurgesteld weg.',
    prompt: 'Welke reflectie neem je mee naar morgen?',
    options: [
      {
        id: 'a',
        text: '"Mijn pijn over de scheiding lekte door naar mijn kind. Morgen zeg ik: \'Vertel nog eens over dat uitje – ik luisterde gisteren niet goed.\'"',
        feedback: 'Krachtige reflectie. Je herkent het patroon, neemt verantwoordelijkheid en formuleert een concreet herstelplan.',
        score: 'goed',
      },
      {
        id: 'b',
        text: '"Het is logisch dat ik dat lastig vind. Ik hoef niet perfect te zijn."',
        feedback: 'Zelfcompassie is belangrijk, maar zonder een plan voor morgen verandert er niets. Reflectie is pas compleet met een volgende stap.',
        score: 'matig',
      },
      {
        id: 'c',
        text: '"Mijn zoon moet leren dat hij niet alles bij mij kan vertellen over mama."',
        feedback: 'Dit legt de verantwoordelijkheid bij je kind. Hij moet vrij kunnen praten over beide ouders. Jouw taak: je eigen gevoelens reguleren.',
        score: 'slecht',
      },
      {
        id: 'd',
        text: '"Ik schrijf op wat ik voelde en bespreek het morgen met een vriend, zodat ik het niet meer op mijn kind projecteer."',
        feedback: 'Sterk. Je zoekt steun buiten het gezin en beschermt je kind tegen jouw pijn. Dat is volwassen reflectie.',
        score: 'goed',
      },
    ],
    themes: ['co-ouderschap', 'samengesteld_gezin'],
  },
];
