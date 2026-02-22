import type { LearningModule, Skill } from "../types";

export const REFLECTIE_MODULES: LearningModule[] = [
{
  id: "re_mod_1",
  skill: "Reflectie" as Skill,
  title: "De Stem Van Je Vader",
  description: "Je opent je mond en hoort je eigen vader eruit komen. Dat moment van schrik. Snap waar het vandaan komt — en kies wat je wilt houden.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 1,
  content: [
    {
      type: "text" as const,
      heading: "Je kent dat moment.",
      text: "Je zoon laat iets vallen. Je opent je mond. En de stem die eruit komt is niet van jou. Het is die van je vader. Exact dezelfde toon. Dezelfde woorden. Je schrikt ervan.\n\nDat moment is geen falen. Het is het begin van bewustwording.",
    },
    {
      type: "text" as const,
      heading: "Je ouderschap draait op automatische piloot",
      text: "Het meeste van wat je als vader doet, heb je niet geleerd uit boeken. Je hebt het gekopieerd. Van je eigen vader, of juist als tegendraadse reactie op hem.\n\nJe brein heeft duizenden interacties met je ouders opgeslagen als 'zo doe je dat.' Dat is impliciet geheugen — patronen die je volgt zonder erbij na te denken. Als je moe bent, als de druk oploopt, schakelt je brein naar die automatische stand.\n\nDat betekent: je ouderschap met de stem van je vader. Totdat je bewust anders kiest. Die keuze begint met kijken. Eerlijk kijken. Wat heb je meegekregen? Wat wil je houden? En wat mag stoppen bij jou?",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Onderzoek naar intergenerationele transmissie laat zien dat hechtingspatronen van ouder op kind worden doorgegeven — tenzij je ze bewust herkent. Fonagy noemt dit 'mentaliseren': nadenken over je eigen denken. Vaders die hun eigen opvoeding verwerken, doorbreken het patroon in 60-70% van de gevallen.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Drie lagen van je vaderschap",
      diagramData: [
        {
          emoji: "👴",
          label: "Laag 1: Geërfd",
          description: "Alles wat je automatisch overneemt van je eigen vader. Toon, regels, reacties. Vaak onbewust.",
        },
        {
          emoji: "🔄",
          label: "Laag 2: Reactief",
          description: "Alles wat je bewust ANDERS doet dan je vader. Soms goed, soms doorgeslagen naar het andere uiterste.",
        },
        {
          emoji: "🧭",
          label: "Laag 3: Gekozen",
          description: "Alles wat je bewust kiest. Niet omdat je vader het deed, niet als reactie — maar omdat het bij jóu past.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Sem (7) laat per ongeluk een glas kapot vallen. Papa voelt de woede opkomen — precies zoals zijn eigen vader boos werd bij fouten.",
      wrongApproach: "OP AUTOMATISCHE PILOOT:\n\nPapa: 'Kun je niet uitkijken?! Hoe vaak moet ik dat nog zeggen!'\nSem krimpt ineen. Stilte.\n\nDe stem van zijn vader. Dezelfde woorden. Sem leert: fouten maken = straf. Papa voelt zich daarna schuldig. Net als toen.",
      rightApproach: "BEWUSTE KEUZE:\n\nPapa voelt de woede. Herkent de stem. Ademt. Denkt: dit is niet mijn stem, dit is die van mijn vader.\n\nPapa: 'Oeps, scherven. Kom, niet op blote voeten. We ruimen het samen op.'\nSem: 'Sorry papa.' Papa: 'Geeft niks. Dingen breken soms.'\n\nSem leert: fouten mogen. Papa leert: ik ben niet mijn vader.",
      explanation: "Het verschil is het moment tussen trigger en reactie. In de eerste aanpak speelt het oude patroon zich af. In de tweede herkent papa de stem, pauzeert, en kiest zijn eigen reactie. Dat is reflectie in actie.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De twee-lijsten oefening. Pak een papiertje. Linkerkant: wat wil ik bewaren van mijn vader? Rechterkant: wat stopt bij mij? Wees specifiek. Niet 'hij was streng' maar 'hij schreeuwde als ik iets liet vallen.'\n\n2. Herken de stem. Als je merkt dat je reageert en het voelt als je vader — pauzeer. Eén seconde is genoeg. Dat is geen zwakte, dat is kracht.\n\n3. Kies één ding. Je hoeft niet alles tegelijk te veranderen. Kies één patroon dat je wilt doorbreken. Begin daar.\n\n4. Vergeef jezelf de keren dat de oude stem wint. Die gaat nog vaak komen. Het gaat om de richting, niet om perfectie.",
    },
    {
      type: "exercise" as const,
      title: "De Twee-Lijsten",
      instructions: "Pak je telefoon of een papiertje. Maak twee kolommen. Links: 'Houden' — schrijf drie dingen op die je vader deed die je wilt voortzetten. Rechts: 'Stoppen' — schrijf drie dingen op die bij jou stoppen. Wees eerlijk. Niemand leest dit behalve jij.",
      duration: 5,
      tips: [
        "Het mag ook iets kleins zijn — hoe hij je instopte, hoe hij reageerde op tranen, hoe hij 'sorry' zei (of niet)",
        "Als je niets kunt bedenken voor 'houden', is dat ook informatie. Schrijf dan op wat je had gewild.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "In welke momenten herken je de stem van je eigen vader het sterkst? Wat triggert het?",
        "Als je zoon of dochter later terugdenkt aan jou als vader — welk gevoel wil je dat ze dan hebben?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Je draagt de stem van je vader in je. Dat is normaal — hechtingspatronen worden doorgegeven. Maar bewustwording doorbreekt het patroon. Maak twee lijsten: houden en stoppen. Je hoeft niet de perfecte vader te zijn. Je moet de bewuste vader zijn.",
    },
  ],
  keyTakeaways: [
    "Je ouderschap draait op automatische piloot totdat je bewust je eigen patronen herkent",
    "Intergenerationele patronen kun je doorbreken door ze eerst eerlijk te bekijken",
    "De twee-lijsten oefening (houden vs stoppen) maakt je keuzes concreet en bewust",
  ],
  research: "Fonagy et al. (2002). Affect Regulation, Mentalization, and the Development of the Self; Van IJzendoorn (1995). Adult Attachment Representations and Intergenerational Transmission",
  quizQuestions: [
    {
      question: "Je merkt dat je exact reageert zoals je eigen vader deed toen je klein was. Wat betekent dit?",
      options: [
        { text: "Je bent een slechte vader die zijn eigen fouten herhaalt", isCorrect: false },
        { text: "Je impliciet geheugen speelt automatische patronen af — herkenning is de eerste stap", isCorrect: true },
      ],
      explanation: "Dit is geen falen maar biologie. Je brein heeft duizenden interacties opgeslagen. Dat je het herkent, betekent dat je het kunt veranderen.",
    },
    {
      question: "Wat is de krachtigste manier om generatiepatronen te doorbreken?",
      options: [
        { text: "Alles precies andersom doen dan je vader deed", isCorrect: false },
        { text: "Bewust kiezen wat je wilt houden en wat stopt bij jou", isCorrect: true },
      ],
      explanation: "Het tegenovergestelde doen is nog steeds reactief — je vader bepaalt dan alsnog je keuzes. Bewust kiezen vanuit je eigen waarden is de derde laag: gekozen vaderschap.",
    },
    {
      question: "Wanneer valt je brein het snelst terug op automatische patronen van je opvoeding?",
      options: [
        { text: "Als je uitgerust en ontspannen bent", isCorrect: false },
        { text: "Als je moe, gestrest of overprikkeld bent", isCorrect: true },
      ],
      explanation: "Onder stress schakelt je brein naar automatische patronen. Juist dan komt de stem van je vader terug. Daarom is zelfzorg geen luxe — het is preventie.",
    },
  ],
},
{
  id: "re_mod_2",
  skill: "Reflectie" as Skill,
  title: "De Verhalen Die Je Jezelf Vertelt",
  description: "Je denkt: ik ben een slechte vader. Maar is dat waar — of is het een verhaal? Ontdek hoe je innerlijke narratief je vaderschap saboteert.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 2,
  content: [
    {
      type: "text" as const,
      heading: "Je kent die stem.",
      text: "Het is woensdag. Je haalde je dochter te laat op van zwemles. Tien minuten. Ze stond te wachten bij de deur. Ze zei er niks over. Maar jij? Jij schrijft er meteen een heel verhaal bij.\n\n'Ik ben altijd te laat. Ik krijg niks voor elkaar. Andere vaders regelen dit gewoon. Ik ben een slechte vader.'\n\nTien minuten te laat. En in je hoofd is het al een heel vonnis.",
    },
    {
      type: "text" as const,
      heading: "Je brein vertelt je verhalen — en je gelooft ze allemaal",
      text: "Je hebt een innerlijke verteller. Die draait de hele dag door. En die verteller is geen journalist — het is een rampenscenario-schrijver.\n\nEén foutje wordt 'ik faal altijd.' Eén moeilijke avond wordt 'ik kan dit niet.' Je ziet de keer dat je ongeduldig was, maar mist de tien keer dat je rustig bleef. Je scrollt door Instagram en ziet vaders die alles perfect lijken te doen. En je vergelijkt hun highlight reel met jouw behind-the-scenes.\n\nDit zijn geen feiten. Dit zijn denkfouten. Je brein filtert, overdrijft en generaliseert. Niet omdat je gek bent — maar omdat menselijke breinen zo werken. We zijn geprogrammeerd om te focussen op wat misgaat. Dat hield onze voorouders in leven. Maar het maakt jou kapot als vader.\n\nHet verhaal dat je jezelf vertelt over wie je bent als vader? Dat is niet de waarheid. Het is een eerste versie. En eerste versies kun je herschrijven.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Psychiater Aaron Beck ontdekte dat mensen systematische denkfouten maken — cognitieve vertekeningen. Catastroferen (het ergste aannemen), selectief filteren (alleen het negatieve zien), en overgeneraliseren ('altijd', 'nooit') zijn de meest voorkomende. Psycholoog Dan McAdams toonde aan dat je identiteit grotendeels bestaat uit het verhaal dat je over jezelf vertelt — je 'narrative identity'. En Roy Baumeister bewees het negativiteitsbias: negatieve ervaringen wegen drie tot vijf keer zwaarder dan positieve. Je brein is geen objectieve waarnemer. Het is een verteller met een voorkeur voor drama.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Drie denkfouten van vaders",
      diagramData: [
        {
          emoji: "🔎",
          label: "1. Selectief filteren",
          description: "Je ziet alleen wat misgaat. De keer dat je schreeuwde telt. De twintig keer dat je rustig bleef? Onzichtbaar.",
        },
        {
          emoji: "🌋",
          label: "2. Catastroferen",
          description: "Van één incident naar het ergste scenario. 'Te laat ophalen' wordt 'mijn kind voelt zich verwaarloosd' wordt 'ik ben een slechte vader.'",
        },
        {
          emoji: "⚖️",
          label: "3. Oneerlijk vergelijken",
          description: "Je vergelijkt je slechtste momenten met de beste momenten van andere vaders. Instagram-vaders versus jouw echte leven. Dat is geen wedstrijd — dat is zelfkwelling.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Het is zaterdagochtend. Tim (8) had een voetbalwedstrijd. Papa moest werken en miste de wedstrijd. Tim scoorde zijn eerste doelpunt. Mama stuurde een foto. Papa zit op kantoor en de gedachten beginnen.",
      wrongApproach: "HET RAMPVERHAAL:\n\nPapa's hoofd: 'Ik mis alles. Ik ben er nooit. Tim gaat dit onthouden — zijn vader was er niet bij het belangrijkste moment. Andere vaders staan langs de lijn. Ik zit hier achter mijn laptop. Ik lijk op mijn eigen vader. Dit gaat fout.'\n\nPapa komt thuis. Overcompenseert. Koopt een cadeautje. Stelt te veel vragen. Tim voelt de spanning. Het voelt raar.",
      rightApproach: "HET VERHAAL HERSCHRIJVEN:\n\nPapa merkt de gedachten op. Herkent het patroon: catastroferen, vergelijken, generaliseren.\n\nPapa tegen zichzelf: 'Ik miste één wedstrijd. Niet alle wedstrijden. Vorige week was ik er wél. En Tim heeft twee ouders — hij was niet alleen.'\n\nPapa belt Tim: 'Hé kampioen! Ik hoorde dat je gescoord hebt. Vertel! Hoe was het?'\nTim, enthousiast: 'Papa het was ZO vet, ik schoot hem in de kruising!'\n\nPapa luistert. Echt. Geen schuldgevoel, geen overcompensatie. Gewoon verbinding.",
      explanation: "In het eerste scenario schrijft papa een rampverhaal op basis van één gemist moment. Hij generaliseert ('ik ben er nooit'), catastrofeert ('dit gaat fout'), en vergelijkt ('andere vaders wel'). In het tweede scenario herkent hij de denkfout, corrigeert het verhaal naar de feiten, en kiest verbinding boven schuldgevoel.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De feiten-check. Als je jezelf betrapt op 'ik ben een slechte vader' — stop. Vraag: wat zijn de feiten? Niet de interpretatie. Niet het gevoel. De feiten. Je miste één wedstrijd. Dat is het feit. De rest is verhaal.\n\n2. De tegenbewijzen-lijst. Schrijf drie momenten op van deze week waarop je er wél was. Waarop het wél goed ging. Ze zijn er — je ziet ze alleen niet als je brein in de dramastand staat.\n\n3. De Instagram-regel. Als je je na het scrollen slechter voelt als vader: leg je telefoon neer. Je vergelijkt een geregisseerd plaatje met je echte leven. Dat is geen informatie — dat is vergif.\n\n4. Het woord 'altijd' vervangen. Elke keer dat je denkt 'ik doe altijd...' of 'ik ben nooit...' — vervang het door 'deze keer.' 'Deze keer was ik te laat.' Dat is eerlijk. 'Ik ben altijd te laat' is een leugen die je jezelf vertelt.",
    },
    {
      type: "exercise" as const,
      title: "Het Verhaal Herschrijven",
      instructions: "Denk aan een recent moment waarop je dacht 'ik ben een slechte vader' of iets vergelijkbaars. Schrijf op: 1) Wat gebeurde er feitelijk? Eén zin, geen interpretatie. 2) Welk verhaal maakte je ervan? Schrijf de hele ramp-gedachte op. 3) Wat zijn drie tegenbewijzen — momenten waarop je het wél goed deed? 4) Herschrijf het verhaal. Eerlijk, maar compleet.",
      duration: 5,
      tips: [
        "Het verschil tussen feiten en verhalen herkennen is een vaardigheid. Het wordt makkelijker met oefening",
        "Vraag je partner of een vriend om drie dingen die je goed doet als vader. Soms hebben anderen een eerlijker beeld dan jijzelf",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Welk terugkerend verhaal vertel je jezelf over wie je bent als vader? En als je eerlijk bent — klopt dat verhaal?",
        "Van wie heb je geleerd om zo streng over jezelf te oordelen? Waar komt die innerlijke criticus vandaan?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Je brein vertelt je verhalen over wie je bent als vader. Die verhalen zitten vol denkfouten: selectief filteren, catastroferen, oneerlijk vergelijken. Het zijn geen feiten — het zijn eerste versies. Check de feiten, zoek tegenbewijzen, vervang 'altijd' door 'deze keer.' Je bent niet het verhaal dat je innerlijke criticus vertelt. Je bent de vader die elke dag weer opdaagt.",
    },
  ],
  keyTakeaways: [
    "Je innerlijke narratief als vader zit vol denkfouten — catastroferen, selectief filteren en oneerlijk vergelijken",
    "Negatieve ervaringen wegen drie tot vijf keer zwaarder dan positieve — je brein geeft je een vertekend beeld",
    "Door feiten te scheiden van verhalen en 'altijd' te vervangen door 'deze keer' herschrijf je je zelfbeeld",
  ],
  research: "Beck (1976). Cognitive Therapy and the Emotional Disorders; McAdams (2001). The Psychology of Life Stories; Baumeister et al. (2001). Bad Is Stronger Than Good (Negativity Bias)",
  quizQuestions: [
    {
      question: "Je miste het schooloptreden van je zoon en denkt: 'Ik ben er nooit.' Wat is hier aan de hand?",
      options: [
        { text: "Je trekt een eerlijke conclusie op basis van een patroon", isCorrect: false },
        { text: "Je overgeneraliseert — van één gemist moment maak je een altijd-verhaal", isCorrect: true },
      ],
      explanation: "Het woord 'nooit' is een signaal van overgeneralisatie. Je miste één moment. Dat is het feit. 'Ik ben er nooit' is het verhaal dat je brein ervan maakt — en dat verhaal klopt niet.",
    },
    {
      question: "Je scrollt door social media en ziet vaders die alles perfect lijken te doen. Je voelt je waardeloos. Wat klopt er niet?",
      options: [
        { text: "Je vergelijkt hun highlight reel met jouw behind-the-scenes — dat is geen eerlijke vergelijking", isCorrect: true },
        { text: "Die andere vaders zijn gewoon beter — je moet harder je best doen", isCorrect: false },
      ],
      explanation: "Social media toont geregisseerde momenten. Jij vergelijkt dat met je echte, rommelige leven. Dat is geen informatie over jouw kwaliteit als vader — dat is een oneerlijke vergelijking die je zelfbeeld ondermijnt.",
    },
    {
      question: "Je had een moeilijke avond met de kinderen. Je brein zegt: 'Ik kan dit niet.' Wat is de beste reactie?",
      options: [
        { text: "Accepteren dat je het inderdaad niet kunt en hulp zoeken", isCorrect: false },
        { text: "De feiten checken en drie tegenbewijzen zoeken — momenten waarop het wél lukte", isCorrect: true },
      ],
      explanation: "Je brein filtert selectief: het toont alleen de moeilijke avond en mist alle keren dat het wél ging. Tegenbewijzen zoeken is geen zelfbedrog — het is het complete plaatje zien in plaats van alleen het negatieve.",
    },
  ],
},
{
  id: "re_mod_3",
  skill: "Reflectie" as Skill,
  title: "De Vader Die Je Had Willen Zijn",
  description: "Het is 22:00. De kinderen slapen. En jij denkt: ik had het beter moeten doen. Die kloof tussen wens en werkelijkheid? Dat is geen falen.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 3,
  content: [
    {
      type: "text" as const,
      heading: "De kinderen slapen. Jij niet.",
      text: "Het is stil in huis. De kinderen slapen eindelijk. En dan komt het. Die film in je hoofd. Hoe je vanmiddag schreeuwde. Hoe je te weinig geduld had. Hoe je de vader die je wilde zijn weer niet was.\n\nDat geluid in je hoofd? Dat is geen waarheid. Dat is een patroon.",
    },
    {
      type: "text" as const,
      heading: "De kloof is geen falen — het is bewijs dat je het probeert",
      text: "Er is een versie van jou in je hoofd. De vader die altijd rustig is. Die nooit schreeuwt. Die altijd tijd heeft. Die elke avond voorleest en elke ochtend pannenkoeken bakt.\n\nDie vader bestaat niet. Niet bij jou, niet bij wie dan ook.\n\nDe kloof tussen wie je wilt zijn en wie je bent — die voelt als falen. Maar het is het tegenovergestelde. Alleen vaders die het belangrijk vinden, voelen die kloof. Vaders die het niet boeit? Die liggen allang te slapen.\n\nDat je hier bent, om 22:00, en nadenkt over hoe je het beter kunt doen? Dat is niet falen. Dat is groei. De kloof is het bewijs dat je waarden hebt. En waarden zijn je kompas — niet je zweep.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Kristin Neff onderscheidt drie componenten van zelf-compassie: vriendelijkheid naar jezelf, erkenning dat iedereen worstelt (common humanity), en mindfulness in plaats van over-identificatie. Onderzoek toont dat zelf-compassie bij ouders leidt tot minder burn-out en betere relaties met kinderen.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Drie stappen van zelf-compassie",
      diagramData: [
        {
          emoji: "🤚",
          label: "1. Erken het",
          description: "Dit doet pijn. Ik had het anders gewild. Niet wegduwen, niet uitvergroten. Gewoon: dit is moeilijk.",
        },
        {
          emoji: "🌍",
          label: "2. Je bent niet alleen",
          description: "Miljoenen vaders liggen nu ook wakker en denken hetzelfde. Dit hoort bij het vaderschap. Jij bent niet de enige.",
        },
        {
          emoji: "💬",
          label: "3. Spreek jezelf toe als een vriend",
          description: "Wat zou je tegen je beste vriend zeggen? Zeg dat nu tegen jezelf. Niet 'het maakt niet uit' — maar 'je doet je best.'",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Het is avond. Milan (3) sliep niet, schreeuwde een uur. Papa verloor zijn geduld en zei hard: 'GA NU SLAPEN!' Nu ligt Milan te slapen en papa op de bank. Vol schuldgevoel.",
      wrongApproach: "DE INNERLIJKE CRITICUS:\n\nPapa tegen zichzelf: 'Wat een slechte vader ben ik. Schreeuwen tegen een driejarige. Mijn vader had gelijk — ik kan er niks van. Morgen doe ik het perfect.'\n\nResultaat: schaamtespiraal, slaapgebrek, morgen nóg korter lontje. Het perfectie-voornemen maakt het erger.",
      rightApproach: "ZELF-COMPASSIE:\n\nPapa tegen zichzelf: 'Dat was niet hoe ik het wilde. Dat doet pijn. Maar ik ben moe, Milan was ook moe, en dit is moeilijk. Elke vader kent dit moment. Morgen maak ik het goed met Milan. Nu mag ik uitrusten.'\n\nResultaat: rust, realistisch plan, morgen een vader die niet leeg begint.",
      explanation: "De innerlijke criticus belooft verbetering maar levert uitputting. Zelf-compassie is geen excuus — het is erkennen dat het moeilijk was, dat je menselijk bent, en dat morgen een nieuwe dag is. Vaders die zichzelf vergeven hebben meer geduld over.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De avond check-in. Drie vragen voor het slapen: Wat ging goed vandaag? Waar liep het vast? Wat wil ik morgen anders? Begin altijd met wat goed ging.\n\n2. De zelf-compassie brief. Schrijf een kort briefje aan jezelf alsof je het schrijft aan een vriend die worstelt. 'Hé man, ik zie dat je je best doet. Het is pittig. Je bent er elke dag.'\n\n3. Eén woord. Als de criticus begint, kies één woord: 'genoeg.' Je bent genoeg. Niet perfect. Genoeg.\n\n4. Het 3-op-1 principe. Voor elke keer dat het misging, benoem drie momenten dat het wél goed ging. Ze zijn er altijd — je ziet ze alleen niet als de criticus schreeuwt.",
    },
    {
      type: "exercise" as const,
      title: "De Zelf-Compassie Brief",
      instructions: "Schrijf een kort bericht aan jezelf — in je notities of op papier. Schrijf het alsof je schrijft aan je beste vriend die hetzelfde meemaakt. Vertel hem dat je ziet hoe hard hij zijn best doet. Dat het moeilijk is. Dat hij er elke dag is voor zijn kinderen. Dat dat genoeg is.",
      duration: 4,
      tips: [
        "Als het moeilijk is om aardig tegen jezelf te zijn — stel je voor dat een goede vriend dit tegen jou zegt",
        "Bewaar het bericht. Lees het terug op een moeilijke avond",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Hoe spreek je tegen jezelf na een moeilijk moment met je kind? Zou je zo tegen je beste vriend praten?",
        "Wat als de kloof tussen de vader die je wilt zijn en de vader die je bent niet je vijand is — maar je brandstof?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "De kloof tussen wie je wilt zijn en wie je bent is geen falen — het is bewijs dat je waarden hebt. Zelf-compassie is geen excuus maar brandstof: erken het, weet dat je niet alleen bent, en spreek jezelf toe als een vriend. Je bent genoeg.",
    },
  ],
  keyTakeaways: [
    "De kloof tussen de vader die je wilt zijn en wie je bent is bewijs van groei, niet van falen",
    "Zelf-compassie heeft drie stappen: erken het, weet dat je niet alleen bent, spreek jezelf toe als vriend",
    "Vaders die zichzelf vergeven hebben meer geduld — de innerlijke criticus put je uit",
  ],
  research: "Neff (2011). Self-Compassion: The Proven Power of Being Kind to Yourself; Moreira et al. (2018). Self-Compassion and Parenting",
  quizQuestions: [
    {
      question: "Na een moeilijke avond denk je: 'Ik ben een slechte vader.' Wat helpt het meest?",
      options: [
        { text: "Jezelf toespreken zoals je je beste vriend zou toespreken", isCorrect: true },
        { text: "Jezelf beloven dat je het morgen perfect doet", isCorrect: false },
      ],
      explanation: "Perfectie-beloftes leiden tot meer druk en kortere lontjes. Zelf-compassie geeft rust en ruimte om morgen realistisch beter te doen.",
    },
    {
      question: "Waarom voelen goede vaders zich vaak slechte vaders?",
      options: [
        { text: "Omdat ze daadwerkelijk tekortschieten als ouder", isCorrect: false },
        { text: "Omdat ze hoge waarden hebben — alleen wie het belangrijk vindt voelt de kloof", isCorrect: true },
      ],
      explanation: "De kloof tussen wens en werkelijkheid voelen alleen vaders die het belangrijk vinden. Dat schuldgevoel is paradoxaal bewijs dat je een betrokken vader bent.",
    },
    {
      question: "Wat is het verschil tussen zelf-compassie en een excuus maken?",
      options: [
        { text: "Zelf-compassie zegt 'het maakt niet uit' en gaat verder", isCorrect: false },
        { text: "Zelf-compassie erkent de pijn en kiest bewust voor morgen anders", isCorrect: true },
      ],
      explanation: "Zelf-compassie is niet 'het geeft niet' — het is 'dit doet pijn, ik ben menselijk, en morgen probeer ik het opnieuw.' Het neemt verantwoordelijkheid zonder zelfvernietiging.",
    },
  ],
},
{
  id: "re_mod_4",
  skill: "Reflectie" as Skill,
  title: "Je Kind Is Je Spiegel",
  description: "Je kind doet moeilijk. Maar kijk eens goed. Misschien spiegelt het precies wat er in jou leeft. Stress, spanning, onrust — kinderen voelen alles.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 4,
  content: [
    {
      type: "text" as const,
      heading: "Hij deed het weer.",
      text: "Fijn (4) is onhandelbaar. Driftbuien. Niet luisteren. Alles is nee. Je denkt: wat is er met hem?\n\nMaar de echte vraag is: wat is er met jou? Want gisteren had je ruzie met je partner. En de hele week zit je vast in een project op werk dat niet opschiet. Je slaapt slecht. Je kaak staat strak.\n\nFijn voelt dat. Hij heeft er geen woorden voor. Maar zijn lijf pikt het op. En zijn gedrag schreeuwt wat jij niet uitspreekt.",
    },
    {
      type: "text" as const,
      heading: "Je kind is een emotionele antenne",
      text: "Kinderen zijn geen passieve ontvangers. Ze zijn scanners. Ze lezen je lichaamstaal, je stemtoon, de spanning in je schouders, de stilte tussen jou en je partner. Ze voelen spanning die jij denkt te verbergen.\n\nDit heet emotionele besmetting. Jouw stress wordt hun stress. Niet omdat je het uitspreekt — juist omdat je het niet doet. Onuitgesproken spanning is voor kinderen het moeilijkst. Ze voelen dat er iets is, maar niemand benoemt het. Dus dragen ze het in hun lijf. En het komt eruit als gedrag.\n\nDat klagerige kind. Dat kind dat niet wil slapen. Dat kind dat opeens weer in je bed kruipt. Vaak is dat geen fase. Het is een spiegel. Ze laten je zien wat jij niet ziet bij jezelf.\n\nDat is confronterend. En het is een uitnodiging. Want als jij verandert, verandert je kind mee. Niet door aan je kind te sleutelen. Maar door naar jezelf te kijken.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Onderzoek naar emotionele besmetting toont dat kinderen de cortisolniveaus van hun ouders overnemen — letterlijk. Als jij gestrest bent, stijgt het stresshormoon bij je kind mee. Gottman's onderzoek naar 'spillover' bewijst dat spanning tussen partners direct doorwerkt in de ouder-kindrelatie: na een ruzie zijn ouders minder responsief en kinderen meer ontregeld. Dan Siegel beschrijft dit als interpersoonlijke neurobiologie: breinen reguleren elkaar. Jouw zenuwstelsel is het voorbeeld waar het zenuwstelsel van je kind op leunt.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De spiegelketen",
      diagramData: [
        {
          emoji: "😤",
          label: "1. Jouw innerlijke staat",
          description: "Stress, ruzie, werkdruk, onverwerkte spanning. Je denkt dat je het verbergt. Je lichaam verraadt je.",
        },
        {
          emoji: "📡",
          label: "2. De overdracht",
          description: "Je kind scant je non-stop. Stemtoon, spierspanning, gezichtsuitdrukking. Spiegelneuronen kopiëren je staat.",
        },
        {
          emoji: "🌪️",
          label: "3. Het spiegelgedrag",
          description: "Driftbuien, niet slapen, kleverig, opstandig. Je kind toont wat jij niet uitspreekt. Het gedrag is de boodschap.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Thomas (5) wil al drie nachten niet slapen. Huilt, roept, komt steeds uit bed. Papa en mama snappen er niks van — er is niks veranderd. Maar papa heeft de afgelopen twee weken extreme werkdruk en komt elke avond gestrest thuis. En afgelopen weekend was er een flinke ruzie tussen de ouders, waar Thomas bij was.",
      wrongApproach: "HET PROBLEEM ZOEKEN BIJ HET KIND:\n\nPapa: 'Thomas, er is niks aan de hand. Ga slapen. Nu.'\nThomas huilt harder. Papa wordt gefrustreerd.\nPapa tegen mama: 'Zullen we strengere regels invoeren? Hij manipuleert ons.'\n\nMeer druk, meer straf. Thomas slaapt nog slechter. Papa snapt niet waarom. Het kind is het probleem — toch?",
      rightApproach: "IN DE SPIEGEL KIJKEN:\n\nPapa merkt het patroon op: Thomas doet dit sinds de ruzie. Sinds de werkstress.\n\nPapa gaat naast Thomas' bed zitten. 'Hé kerel. Papa en mama hadden ruzie laatst. Dat was niet fijn hè? Maar dat ging niet over jou. En papa is de laatste tijd een beetje druk in zijn hoofd. Maar het komt goed.'\n\nThomas zucht diep. Kruipt tegen papa aan. Slaapt binnen tien minuten.\n\nHet kind had geen strengere regels nodig. Het had een vader nodig die eerlijk was over zijn eigen spanning.",
      explanation: "Thomas reageerde niet op een slaapprobleem. Hij reageerde op de onuitgesproken spanning in huis. Kinderen kunnen pas ontspannen als hun ouders ontspannen — of op zijn minst eerlijk zijn over hun spanning. Papa hoefde niet perfect te zijn. Hij moest alleen erkennen: dit gaat niet over Thomas. Dit gaat over mij.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De spiegel-check. Als je kind lastig gedrag vertoont, stel jezelf eerst de vraag: hoe voel ik me? Hoe is de sfeer thuis? Is er spanning tussen mij en mijn partner? Vaak zit het antwoord niet bij je kind maar bij jou.\n\n2. Benoem wat er is. Kinderen kunnen spanning aan als het benoemd wordt. 'Papa is een beetje gestrest van werk. Dat merk je misschien. Het ligt niet aan jou.' Die drie zinnen doen wonderen.\n\n3. Reguleer jezelf eerst. In het vliegtuig zet je eerst je eigen masker op. Hetzelfde geldt hier. Ga even naar buiten, adem, beweeg. Jouw kalmte is de kalmte van je kind.\n\n4. De emotionele thermometer. Geef jezelf elke avond een cijfer van 1-10 voor je stressniveau. Doe hetzelfde voor het gedrag van je kind. Na twee weken zie je de correlatie. Die is er bijna altijd.",
    },
    {
      type: "exercise" as const,
      title: "De Spiegel-Check",
      instructions: "Denk aan het laatste moment dat je kind 'moeilijk' deed. Sluit je ogen. Spoel terug. Niet naar je kind — naar jezelf. Hoe voelde jij je die dag? Was er stress op werk? Spanning met je partner? Sliep je slecht? Schrijf op: 1) Het gedrag van mijn kind. 2) Hoe ik me die dag voelde. 3) Wat er speelde in ons gezin. Zie je een verband?",
      duration: 5,
      tips: [
        "Dit is geen schuldvraag. Het is een eerlijke blik. Jij bent niet de oorzaak van alles — maar je bent wel een grote factor in de emotionele sfeer thuis",
        "Als je het verband niet direct ziet, houd het twee weken bij. Het patroon wordt zichtbaar",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Als je eerlijk kijkt naar de moeilijkste momenten met je kind — wat speelde er op dat moment bij jou? Stress, vermoeidheid, spanning met je partner?",
        "Wat zou er veranderen in het gedrag van je kind als jij de komende week bewust je eigen spanning zou reguleren?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Je kind is je spiegel. Hun gedrag reflecteert vaak jouw innerlijke staat — stress, spanning, onuitgesproken conflicten. Kinderen nemen je cortisol over, lezen je lichaamstaal, en voelen wat je niet zegt. De oplossing zit niet in je kind corrigeren maar in jezelf reguleren. Benoem wat er speelt, kalmeer jezelf eerst, en kijk eerlijk in de spiegel. Als jij verandert, verandert je kind mee.",
    },
  ],
  keyTakeaways: [
    "Kinderen zijn emotionele antennes — ze spiegelen jouw stress, spanning en onuitgesproken conflicten in hun gedrag",
    "De oplossing voor moeilijk gedrag zit vaak niet bij het kind maar bij het reguleren van je eigen emotionele staat",
    "Benoemen wat er speelt ('papa is gestrest, het ligt niet aan jou') geeft kinderen rust en veiligheid",
  ],
  research: "Gottman & Declaire (1997). The Heart of Parenting: Raising an Emotionally Intelligent Child (spillover effect); Siegel (2012). The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are; Hatfield, Cacioppo & Rapson (1994). Emotional Contagion — Studies in Emotion and Social Interaction",
  quizQuestions: [
    {
      question: "Je kind (4) heeft al dagen driftbuien. Wat is een goede eerste stap?",
      options: [
        { text: "Strengere regels en consequenties instellen zodat hij weet wie de baas is", isCorrect: false },
        { text: "Jezelf afvragen: hoe voel ik me? Is er spanning thuis die mijn kind oppikt?", isCorrect: true },
      ],
      explanation: "Moeilijk gedrag bij jonge kinderen is vaak een spiegel van de emotionele sfeer thuis. De spiegel-check — eerst naar jezelf kijken — geeft je informatie die strengere regels niet geven.",
    },
    {
      question: "Hoe nemen kinderen de stress van hun ouders over?",
      options: [
        { text: "Alleen als je tegen ze schreeuwt of ze direct met je stress confronteert", isCorrect: false },
        { text: "Via lichaamstaal, stemtoon en cortisoloverdracht — ook als je denkt het te verbergen", isCorrect: true },
      ],
      explanation: "Onderzoek toont dat kinderen letterlijk het stresshormoon cortisol van hun ouders overnemen. Spiegelneuronen kopiëren je emotionele staat, ook als je denkt dat je het goed verbergt.",
    },
    {
      question: "Je had ruzie met je partner en je kind doet daarna moeilijk. Wat helpt het meest?",
      options: [
        { text: "Benoemen wat er is: 'Papa en mama hadden een meningsverschil. Het ligt niet aan jou.'", isCorrect: true },
        { text: "Doen alsof er niks aan de hand is zodat je kind er niet mee belast wordt", isCorrect: false },
      ],
      explanation: "Onuitgesproken spanning is voor kinderen het moeilijkst — ze voelen dat er iets is maar niemand benoemt het. Eerlijk benoemen geeft ze houvast en ontlast ze van het gevoel dat het aan hen ligt.",
    },
  ],
},
{
  id: "re_mod_5",
  skill: "Reflectie" as Skill,
  title: "Wat Je Kind Echt Nodig Heeft",
  description: "Niet de perfecte vader. Niet de vader uit het boekje. Maar een vader die blijft opdagen. Elke dag opnieuw. Ook na de fouten.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 5,
  content: [
    {
      type: "text" as const,
      heading: "Je bent niet perfect. Gelukkig maar.",
      text: "Je hebt geschreeuwd. Je hebt momenten gemist. Je hebt dingen gezegd die je terug wilde nemen. Je hebt avonden op de bank gezeten met het gevoel dat je tekortschoot.\n\nEn toch ben je hier. Om 22:00. Nog steeds aan het proberen. Dat is het hele punt.",
    },
    {
      type: "text" as const,
      heading: "Je kind heeft geen perfecte vader nodig — maar eentje die blijft opdagen",
      text: "De kinderpsycholoog Winnicott bedacht de term 'good enough parent.' Niet perfect. Goed genoeg.\n\nDat klinkt als een troostprijs. Maar het is het tegenovergestelde. Perfecte ouders bestaan niet. En als ze zouden bestaan, zouden ze hun kinderen tekortdoen. Want een kind dat nooit ziet dat zijn vader fouten maakt, leert niet hoe je met fouten omgaat.\n\nJe kind heeft niet nodig dat je het altijd goed doet. Je kind heeft nodig dat je terugkomt als het fout gaat. Dat je sorry zegt. Dat je het opnieuw probeert.\n\nDat je morgen weer opstaat en weer die vader bent. Niet de perfecte. De aanwezige. De eerlijke. De vader die zegt: 'Ik deed het niet goed. Maar ik ben er nog steeds.'\n\nDat is geen falen. Dat is precies wat veilige hechting bouwt.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Winnicott toonde aan dat kinderen baat hebben bij 'goed genoeg' ouderschap: betrouwbare aanwezigheid met ruimte voor fouten. Hechtingsonderzoek bevestigt dat veilige hechting niet draait om perfectie maar om responsiviteit — dat je terugkeert na een breuk. Repair is het fundament.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Wat veilige hechting echt bouwt",
      diagramData: [
        {
          emoji: "💔",
          label: "1. Breuk",
          description: "Je schreeuwt, je bent ongeduldig, je mist een moment. Het gaat fout. Dit is onvermijdelijk en menselijk.",
        },
        {
          emoji: "🔧",
          label: "2. Herstel",
          description: "Je komt terug. Je zegt sorry. Je maakt contact. Dit is waar de echte magie zit — niet in perfectie.",
        },
        {
          emoji: "🏗️",
          label: "3. Vertrouwen",
          description: "Je kind leert: papa maakt fouten, maar papa komt altijd terug. Dat is veiligheid. Dat is hechting.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Het is zondagavond. Een lange week. Nora (6) vraagt of papa wil voorlezen. Papa is uitgeput en zegt kortaf: 'Niet nu.' Nora loopt stil naar haar kamer.",
      wrongApproach: "DE PERFECTIE-VAL:\n\nPapa voelt zich schuldig. Denkt: ik moet nu gaan voorlezen, anders ben ik een slechte vader. Sleept zichzelf naar haar kamer. Leest voor met een geïrriteerde stem. Nora voelt het.\n\nOf: papa doet niks. Schuift het schuldgevoel weg. Morgen beter. Maar morgen vergeet hij het.",
      rightApproach: "GOED GENOEG:\n\nPapa zit even. Ademt. Loopt dan naar Nora's kamer.\n\nPapa: 'Hé Noor. Sorry dat ik zo kort deed. Papa is moe. Maar weet je wat? Ik ga even naast je liggen. Vertel jij mij een verhaal?'\nNora, glimlachend: 'Er was een keer een draak die ook moe was...'\n\nNiet perfect. Maar echt. Aanwezig. Goed genoeg.",
      explanation: "De perfectie-val is dubbel: of je dwingt jezelf tot iets dat niet echt voelt, of je doet niks uit schaamte. De derde weg is eerlijkheid: ik ben moe, maar ik ben er. Dat is wat Nora onthoudt. Niet het perfecte verhaal — maar de vader die terugkwam.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Brief aan je kind. Schrijf een kort briefje aan je kind. Niet om te geven — voor jezelf. Schrijf op waarom je dit allemaal doet. Wat je voor ze wilt. Wie je voor ze wilt zijn. Bewaar het voor een moeilijke dag.\n\n2. De drie pijlers. Na vijf modules reflectie, onthoud drie dingen: herken je patronen (module 1-2), wees mild voor jezelf (module 3), en wees aanwezig (module 4). Vandaag kiezen we de vierde pijler: blijf opdagen.\n\n3. Het ochtend-voornemen. Elke ochtend één zin: 'Vandaag hoef ik niet perfect te zijn. Vandaag ben ik er.' Meer niet.\n\n4. Het consolidatie-moment. Je hebt vijf modules doorlopen. Dat is niet niks. Kijk terug: wat heeft je geraakt? Wat neem je mee? Schrijf één ding op dat je anders gaat doen.",
    },
    {
      type: "exercise" as const,
      title: "De Brief Aan Je Kind",
      instructions: "Schrijf een kort briefje aan je kind. Het hoeft niet lang — vijf zinnen is genoeg. Schrijf op waarom je een goede vader wilt zijn. Wat je ze wilt meegeven. Hoe je wilt dat ze zich voelen als ze terugdenken aan hun kindertijd. Dit briefje is voor jou. Bewaar het. Lees het terug als je twijfelt of het genoeg is.",
      duration: 5,
      tips: [
        "Begin met 'Lieve [naam]...' — het wordt vanzelf echt als je hun naam schrijft",
        "Het hoeft niet mooi te zijn. Eerlijk is genoeg. Net als je vaderschap",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Na alles wat je hebt geleerd over jezelf in deze modules — wat is het belangrijkste inzicht dat je meeneemt?",
        "Als je kind over twintig jaar terugdenkt aan jou als vader — welk gevoel wil je dat dan oproept?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Je kind heeft geen perfecte vader nodig. Ze hebben een vader nodig die terugkomt na fouten, die sorry zegt, die blijft opdagen. Veilige hechting bouwt niet op perfectie maar op herstel. Je bent hier. Je probeert het. Dat is goed genoeg. Dat is alles.",
    },
  ],
  keyTakeaways: [
    "Goed genoeg ouderschap is geen troostprijs — het is precies wat kinderen nodig hebben",
    "Veilige hechting bouwt op de cyclus van breuk en herstel, niet op perfectie",
    "De krachtigste vader is niet de perfecte maar degene die blijft opdagen na fouten",
  ],
  research: "Winnicott (1953). Transitional Objects and Transitional Phenomena; Tronick (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children (Repair Cycle)",
  quizQuestions: [
    {
      question: "Waarom is een 'perfecte' vader eigenlijk niet goed voor een kind?",
      options: [
        { text: "Omdat een kind dat nooit fouten ziet, niet leert hoe je met fouten omgaat", isCorrect: true },
        { text: "Omdat perfectie saai is en kinderen uitdaging nodig hebben", isCorrect: false },
      ],
      explanation: "Kinderen leren omgaan met fouten door te zien hoe hun ouders fouten maken én herstellen. De cyclus breuk-herstel bouwt veerkracht en veilige hechting.",
    },
    {
      question: "Je hebt tegen je kind geschreeuwd en voelt je schuldig. Wat bouwt de meeste veiligheid?",
      options: [
        { text: "Het goedmaken met een cadeau of uitje zodat ze het vergeten", isCorrect: false },
        { text: "Terugkomen, sorry zeggen, en uitleggen dat je het anders had gewild", isCorrect: true },
      ],
      explanation: "Herstel — niet compensatie — bouwt veilige hechting. Je kind leert: papa maakt fouten maar papa komt terug. Dat is betrouwbaarder dan perfectie.",
    },
    {
      question: "Wat is de kern van 'good enough' ouderschap volgens Winnicott?",
      options: [
        { text: "Betrouwbare aanwezigheid met ruimte voor fouten en herstel", isCorrect: true },
        { text: "Zo min mogelijk fouten maken en je best doen om perfect te zijn", isCorrect: false },
      ],
      explanation: "Winnicott liet zien dat kinderen niet foutloos ouderschap nodig hebben, maar betrouwbaar ouderschap — de zekerheid dat de ouder er is, ook na een breuk.",
    },
  ],
},
];
