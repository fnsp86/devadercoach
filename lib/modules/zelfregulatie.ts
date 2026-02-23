import type { LearningModule, Skill } from "../types";

export const ZELFREGULATIE_MODULES: LearningModule[] = [
{
  id: "zr_mod_1",
  skill: "Zelfregulatie" as Skill,
  title: "Waarom Je Zo Moe Bent",
  description: "Het is zes uur. Lange dag gehad. Je kind zeurt. En jij ontploft. Niet omdat je een slechte vader bent — maar omdat je tank leeg is.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 1,
  content: [
    {
      type: "text" as const,
      text: "Het is 18:00. Je hebt acht uur beslissingen genomen, deadlines gehaald, vriendelijk gelachen naar collega's. Thuis staat Emma (4) te huilen omdat haar koekje gebroken is. En jij schreeuwt.",
    },
    {
      type: "text" as const,
      heading: "Wilskracht is geen karakter. Het is een tank.",
      text: "Elk besluit dat je neemt kost energie. Elke keer dat je je inhoudt ook. Niet schreeuwen in een vergadering. Geduldig zijn in het verkeer. Rustig blijven bij een lastige mail. Tegen de tijd dat je thuiskomt, is je tank op.\n\nDat gebroken koekje is niet het probleem. Het probleem is dat je al honderd keer je zelfbeheersing hebt gebruikt vandaag. Er is niks meer over voor Emma.\n\nZelfregulatie is geen oneindig karakter. Het is een spier die uitgeput raakt. En 's avonds is die spier op.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Psycholoog Roy Baumeister ontdekte dat zelfbeheersing een beperkte hulpbron is: 'ego depletion'. Na veel wilsinspanning presteer je slechter op de volgende taak. Je prefrontale cortex — het remmencentrum van je brein — raakt letterlijk uitgeput. Glucose, slaap en herstel vullen de tank weer aan.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Je wilskracht-tank door de dag",
      diagramData: [
        {
          emoji: "🔋",
          label: "Ochtend: volle tank",
          description: "Je staat op met reserves. Geduld voelt makkelijk. Je kunt nadenken voor je reageert.",
        },
        {
          emoji: "🪫",
          label: "Einde werkdag: halfleeg",
          description: "Beslissingen, sociale interacties en werk hebben je tank leeggezogen. Je hebt minder reserves over.",
        },
        {
          emoji: "🚨",
          label: "18:00+: rode zone",
          description: "Kinderen, huishouden, emoties — maar geen brandstof meer. Hier ontplof je over gebroken koekjes.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Het is 18:15. Emma (4) wil haar schoenen niet aan. Je hebt al drie keer rustig gevraagd. Ze gooit haar schoen door de gang.",
      wrongApproach: "OP KARAKTER VERTROUWEN:\n\nPapa: 'EMMA! Schoenen aan! NU!'\nEmma schrikt. Huilt.\nPapa: 'Waarom luister je nooit?!'\n\nGeen slechte vader. Lege tank. Maar Emma weet dat niet — zij voelt alleen de schreeuw.",
      rightApproach: "TANKCHECK VOOR JE REAGEERT:\n\nPapa ziet de schoen vliegen. Denkt: 'Mijn tank is leeg.' Zegt tegen Emma: 'Wacht even.' Loopt naar de keuken. Drinkt een glas water. Drie ademhalingen.\n\nKomt terug: 'Oké, die schoen is ver gevlogen. Zullen we kijken wie hem het eerst vindt?'\n\nEmma lacht. Schoen aan in twee minuten.",
      explanation: "Het verschil is niet meer geduld. Het verschil is dat papa zijn lege tank herkende en even pauzeerde. Zelfregulatie begint met weten hoeveel er nog in de tank zit.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De tankcheck. Doe het elke dag om 17:00. Stel jezelf de vraag: 'Hoeveel heb ik nog over op een schaal van 1-10?' Onder de 4? Pas je verwachtingen aan.\n\n2. Preventieve regulatie. Eet iets voor je thuiskomt. Zet vijf minuten muziek op in de auto. Geef je brein een mini-reset.\n\n3. Energiemanagement. Plan de zwaarste opvoedmomenten (huiswerk, tandenpoetsen) niet op je slechtste moment. Verschuif wat kan.\n\n4. Vertel het. Zeg tegen je kind: 'Papa is moe. Ik heb even vijf minuten nodig.' Dat is geen zwakte. Dat is voorbeeldgedrag.",
    },
    {
      type: "exercise" as const,
      title: "De 17:00 Tankcheck",
      instructions: "1. Stel nu een alarm op je telefoon om 17:00.\n2. Als het afgaat: geef jezelf een score van 1-10 voor hoeveel energie je nog hebt.\n3. Schrijf het op in je telefoon (notities of een simpel lijstje).\n4. Doe dit vijf dagen achter elkaar.\n5. Na vijf dagen: lees je scores terug. Zie je het patroon? Welke dagen scoor je laag?\n6. Plan iets om bij te tanken op je laagste dagen.",
      duration: 3,
      tips: [
        "Onder de 4? Plan iets om bij te tanken voor je thuiskomt — vijf minuten in de auto met ogen dicht telt ook",
        "Deel je score met je partner zodat zij weet wat ze kan verwachten",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Op welk moment van de dag merk je dat je geduld opraakt? Is er een patroon?",
        "Wat doe jij om bij te tanken — en is dat genoeg?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Zelfregulatie is geen kwestie van karakter maar van energie. Je wilskracht raakt op door de dag heen. Herken je tankniveau, plan preventief en geef jezelf toestemming om even te pauzeren. De beste vaders weten wanneer ze op zijn.",
    },
  ],
  keyTakeaways: [
    "Wilskracht is een beperkte hulpbron die opraakt — 's avonds is je tank bijna leeg",
    "Herken je tankniveau voor je reageert: de dagelijkse tankcheck om 17:00 voorkomt uitbarstingen",
    "Preventieve regulatie (eten, rust, mini-pauze) werkt beter dan achteraf spijt hebben",
  ],
  research: "Baumeister et al. (1998). Ego depletion: Is the active self a limited resource?; Muraven & Baumeister (2000). Self-regulation and depletion of limited resources.",
  quizQuestions: [
    {
      question: "Je hebt een rustige werkdag gehad maar thuis ontplof je toch over iets kleins. Welke verklaring klopt het MINST?",
      options: [
        { text: "Een 'rustige' werkdag kost alsnog honderden micro-beslissingen die je tank leegtrekken", isCorrect: false },
        { text: "Je had minder ego depletion dan normaal, dus dit wijst op een dieper emotioneel probleem", isCorrect: true },
        { text: "Ook sociale interacties en je inhouden bij kleine irritaties kosten wilskracht", isCorrect: false },
      ],
      explanation: "Ego depletion gaat niet alleen over zware dagen. Elke beslissing, elke keer je inhouden en elk sociaal moment kost energie — ook op 'rustige' dagen. Een uitbarsting na zo'n dag hoeft geen teken van een dieper probleem te zijn.",
    },
    {
      question: "Je tankniveau is een 3 van de 10. Je kind wil dat je helpt met een lastig bouwwerk. Wat doe je?",
      options: [
        { text: "Vijf minuten alleen nemen om bij te tanken, dan pas helpen", isCorrect: true },
        { text: "Direct helpen — je kind afwijzen is schadelijker dan moe zijn", isCorrect: false },
        { text: "Jezelf dwingen om geduldig te zijn — als je het maar hard genoeg probeert lukt het", isCorrect: false },
      ],
      explanation: "Met een tank op 3 werkt doorzetten niet — je prefrontale cortex is uitgeput en de kans op een uitbarsting is groot. Even bijtanken is geen afwijzing maar een investering: vijf minuten pauze levert een halfuur geduldig vaderschap op.",
    },
    {
      question: "Wat is het risico als je elke avond je partner de zware opvoedtaken laat overnemen?",
      options: [
        { text: "Er is geen risico — taakverdeling op basis van energie is de beste strategie", isCorrect: false },
        { text: "Je bouwt afhankelijkheid op en traint je eigen regulatiecapaciteit niet", isCorrect: true },
        { text: "Je kind raakt gehecht aan alleen de partner en verliest de band met jou", isCorrect: false },
      ],
      explanation: "Verdelen is tijdelijk prima, maar structurele afhankelijkheid betekent dat je nooit leert je eigen tank te managen. Bovendien schept het spanning bij je partner. Preventieve regulatie — eten, rust, mini-resets — maakt je zelfstandiger.",
    },
    {
      question: "Waarom werkt een simpel glas water en drie ademhalingen als je tank bijna leeg is?",
      options: [
        { text: "Het is een placebo-effect — het water en de ademhaling doen fysiologisch niks", isCorrect: false },
        { text: "Glucose uit het water voedt de prefrontale cortex en de ademhaling activeert het parasympathisch zenuwstelsel", isCorrect: true },
        { text: "Het werkt eigenlijk niet — je moet minstens 20 minuten rust nemen voor echt herstel", isCorrect: false },
      ],
      explanation: "Je prefrontale cortex verbruikt glucose als brandstof, en diepe ademhaling schakelt je zenuwstelsel van fight-or-flight naar rust. Het is geen volledige reset, maar genoeg om de ergste ontregeling te doorbreken en weer bewust te kiezen.",
    },
  ],
},
{
  id: "zr_mod_2",
  skill: "Zelfregulatie" as Skill,
  title: "Waarom Gemorste Melk Je Laat Ontploffen",
  description: "Het glas melk valt om. En jij ontploft alsof het huis afbrandt. Dat gaat niet over de melk. Leer wat er echt aan de hand is.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 2,
  content: [
    {
      type: "text" as const,
      text: "Daan (5) morst zijn melk. Over tafel, over zijn broek, op de grond. En jij — rustige, redelijke vader — schreeuwt alsof hij de auto in de sloot heeft gereden. Over een glas melk.",
    },
    {
      type: "text" as const,
      heading: "Het gaat nooit over de melk",
      text: "Die woede voelt buitenproportioneel. Dat is hij ook. Want die reactie gaat niet over dit glas melk. Die gaat over alles wat daarvoor kwam.\n\nDe file vanmorgen. Die ene opmerking van je baas. Het feit dat je al drie keer hebt opgeruimd vandaag. De was die nog draait. De rekening die je vergeten bent.\n\nElke irritatie die je wegslikte, werd opgestapeld. Daans melk was gewoon de druppel. Letterlijk.\n\nJe amygdala — het alarmcentrum in je brein — houdt een onzichtbare boekhouding bij. Elke kleine stress telt mee. Tot het alarm afgaat bij iets kleins.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Bij stress neemt de amygdala het over van de prefrontale cortex — een 'amygdala hijack'. Onderzoek toont dat opgestapelde microstressors cumulatief werken. Je reageert niet op de trigger zelf, maar op de totale stresslading. Trigger mapping — het in kaart brengen van je triggers — is de eerste stap naar controle.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De onzichtbare stapeling",
      diagramData: [
        {
          emoji: "📦",
          label: "De stapel",
          description: "Elke irritatie, elke ingehouden frustratie wordt een blokje op de stapel. Je merkt het niet bewust — maar je brein telt alles mee.",
        },
        {
          emoji: "💥",
          label: "De druppel",
          description: "Een klein ding — gemorste melk, een sok op de grond — duwt de stapel om. De reactie past niet bij de trigger. Dat is het signaal.",
        },
        {
          emoji: "🔍",
          label: "De echte bron",
          description: "Onder de melk zit de werkdag. Onder de werkdag zit misschien slaapgebrek. Of het gevoel dat je alles alleen doet. Kijk dieper.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Daan (5) morst melk over tafel. Het is de derde keer deze week. Je voelt woede opkomen die niet past bij het moment.",
      wrongApproach: "REAGEREN OP DE TRIGGER:\n\nPapa: 'DAAN! Hoe vaak moet ik zeggen dat je moet opletten?!'\nDaan schrikt. Huilt.\nPapa: 'Elke keer hetzelfde! Ik ben het zo zat!'\n\nPapa reageert op de melk. Maar de woede gaat over alles van vandaag. Daan begrijpt niet waarom papa zo boos is over iets kleins.",
      rightApproach: "DE ECHTE BRON HERKENNEN:\n\nPapa voelt de woede opkomen. Denkt: 'Dit past niet bij een glas melk. Wat zit hieronder?'\nZegt: 'Oeps, dat kan gebeuren. Pak even een doekje?'\n\nNa het opruimen, in stilte: 'Ik was al gefrustreerd van werk. En die melk was de druppel. Dit ging niet over Daan.'\n\nDie avond schrijft papa drie dingen op die hem dwars zaten. De melk staat er niet bij.",
      explanation: "Als je reactie niet past bij de situatie, is de situatie niet het probleem. Door de echte bron te herkennen, bescherm je je kind tegen emoties die niet van hen zijn.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Het trigger-dagboek. Schrijf na elke uitbarsting op: wat was de trigger? Hoe groot was mijn reactie (1-10)? Wat was er eerder op de dag gebeurd? Na een week zie je patronen.\n\n2. De proportiecheck. Vraag jezelf: past mijn reactie bij wat er net gebeurde? Nee? Dan gaat het niet hierover.\n\n3. Pre-trigger signalen. Leer je eigen waarschuwingen kennen: kaakspanning, snellere ademhaling, korte antwoorden. Dit zijn je vijf-seconden-waarschuwingen.\n\n4. Emotionele boekhouding. Check twee keer per dag: wat zit er op mijn stapel? Benoem het. Dat alleen al haalt de druk eraf.",
    },
    {
      type: "exercise" as const,
      title: "Het Trigger-Dagboek",
      instructions: "1. Open je telefoon. Maak een notitie met de titel 'Triggers'.\n2. Na elke boze reactie deze week, schrijf drie dingen op:\n   - Wat was de trigger?\n   - Hoe groot was mijn reactie? (schaal 1-10)\n   - Wat was er eerder op de dag gebeurd?\n3. Doe het direct na het moment — anders vergeet je de details.\n4. Na vijf dagen: lees alles terug.\n5. Zoek het patroon. Zelfde tijdstip? Zelfde type situatie? Altijd na een lange werkdag?\n6. Dat patroon is je trigger-map.",
      duration: 5,
      tips: [
        "Gebruik steekwoorden als je weinig tijd hebt — drie woorden zijn genoeg om het later terug te halen",
        "Oordeel niet over jezelf — je bent een onderzoeker, geen verdachte",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Wanneer was de laatste keer dat je buitenproportioneel reageerde? Wat zat er onder die reactie?",
        "Welke terugkerende situaties triggeren je het meest — en wat hebben ze gemeen?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Je reageert niet op de melk maar op alles wat eraan voorafging. Je brein stapelt stress onzichtbaar op tot de druppel valt. Leer je triggers kennen met een trigger-dagboek. Als je reactie niet past bij het moment, kijk dieper.",
    },
  ],
  keyTakeaways: [
    "Een buitenproportionele reactie is een signaal — het gaat niet over de trigger maar over de stapeling eronder",
    "Je amygdala houdt een onzichtbare boekhouding bij van alle stress — tot het alarm afgaat bij iets kleins",
    "Een trigger-dagboek helpt je patronen herkennen zodat je voorkomt in plaats van achteraf repareert",
  ],
  research: "Goleman (1995). Emotional Intelligence; Sapolsky (2004). Why Zebras Don't Get Ulcers; LeDoux (1996). The Emotional Brain.",
  quizQuestions: [
    {
      question: "Je trigger-dagboek laat zien dat je altijd op dinsdag ontploft. Wat is de beste volgende stap?",
      options: [
        { text: "Op dinsdag extra je best doen om kalm te blijven", isCorrect: false },
        { text: "Onderzoeken wat er op dinsdag anders is — vergadering, slaaptekort, alleen koken?", isCorrect: true },
        { text: "Op dinsdag de opvoedtaken aan je partner overdragen", isCorrect: false },
      ],
      explanation: "Harder je best doen werkt niet als je tank leeg is, en overdragen is een pleister. Het trigger-dagboek is een onderzoekstool: het patroon vertelt je waar de echte stressor zit. Pas als je die kent, kun je structureel iets veranderen.",
    },
    {
      question: "Welke aanpak van triggers is het MINST effectief op lange termijn?",
      options: [
        { text: "Triggers in kaart brengen en de onderliggende stressoren aanpakken", isCorrect: false },
        { text: "Alle bekende triggers zoveel mogelijk vermijden", isCorrect: true },
        { text: "Pre-trigger signalen leren herkennen zodat je eerder kunt ingrijpen", isCorrect: false },
      ],
      explanation: "Trigger-vermijding lijkt logisch maar maakt je wereld steeds kleiner. Je kind gaat altijd melk morsen. De kracht zit in begrijpen waarom de trigger je raakt en de onderliggende stressstapel verkleinen, niet in het ontwijken van normale situaties.",
    },
    {
      question: "Je bent boos op Daan om de gemorste melk. Je doet een proportiecheck en je reactie is een 8 op een trigger van 2. Wat gebeurt er in je brein?",
      options: [
        { text: "Je amygdala reageert op de totale stresslading van de dag, niet op de melk zelf", isCorrect: true },
        { text: "Je hebt een probleem met woede-regulatie dat professionele hulp vereist", isCorrect: false },
        { text: "Je prefrontale cortex versterkt het signaal van je amygdala omdat je moe bent", isCorrect: false },
      ],
      explanation: "Dit is een klassieke amygdala hijack: je alarmcentrum reageert op de cumulatieve stresslading, niet op de feitelijke trigger. Je prefrontale cortex is juist uitgeschakeld, niet aan het versterken. Dit overkomt vrijwel elke ouder en is geen teken van een stoornis.",
    },
    {
      question: "Wat is het belangrijkste voordeel van je pre-trigger signalen kennen (kaakspanning, snellere ademhaling)?",
      options: [
        { text: "Je kunt de uitbarsting voorkomen door in te grijpen voor de amygdala het overneemt", isCorrect: true },
        { text: "Je kunt de situatie verlaten zodat je kind je woede niet ziet", isCorrect: false },
        { text: "Je kunt jezelf trainen om die lichamelijke signalen niet meer te voelen", isCorrect: false },
      ],
      explanation: "Pre-trigger signalen zijn je vijf-seconden-waarschuwing: het moment waarop je prefrontale cortex nog online is. Weglopen kan soms helpen, maar het doel is ingrijpen, niet vluchten. En de signalen uitschakelen is onmogelijk en onwenselijk — ze zijn je ingebouwde alarmsysteem.",
    },
  ],
},
{
  id: "zr_mod_3",
  skill: "Zelfregulatie" as Skill,
  title: "De Tien Seconden Tussen Trigger en Reactie",
  description: "Sem breekt de regel. Weer. Je voelt de woede. Maar tussen die trigger en je reactie zit ruimte. Die ruimte is alles.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 3,
  content: [
    {
      type: "text" as const,
      text: "Sem (7) weet dat hij niet op de bank mag springen. Je hebt het al tien keer gezegd. Hij kijkt je aan. Springt. En iets in jou ontploft.",
    },
    {
      type: "text" as const,
      heading: "De ruimte die alles verandert",
      text: "Tussen wat er gebeurt en hoe jij reageert, zit een moment. Tien seconden, misschien minder. Maar in die seconden zit je hele vrijheid als vader.\n\nDe meeste vaders reageren in minder dan een seconde. Automatisch. Woede-schreeuw-spijt. Steeds dezelfde cyclus.\n\nMaar die cyclus is niet onvermijdelijk. Er zit een gat tussen de trigger en de reactie. Je hebt het alleen nooit opgemerkt omdat het zo snel gaat.\n\nJe hoeft geen ander mens te worden. Je hoeft alleen dat gat te leren vinden. Tien seconden. Dat is genoeg om te kiezen.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Viktor Frankl schreef: 'Tussen prikkel en reactie is er ruimte. In die ruimte ligt je vrijheid.' Neurowetenschapper Andrew Huberman toonde aan dat een 'fysiologische zucht' — dubbele inademing door de neus, lange uitademing door de mond — je zenuwstelsel binnen seconden kalmeert. Dit activeert de prefrontale cortex en geeft je weer keuzevrijheid.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Wat er in tien seconden gebeurt",
      diagramData: [
        {
          emoji: "⚡",
          label: "Seconde 0-2: De trigger",
          description: "Sem springt op de bank. Je amygdala vuurt. Woede, frustratie, 'hij doet het weer'. Automatische reactie wil eruit.",
        },
        {
          emoji: "🫁",
          label: "Seconde 3-6: De zucht",
          description: "Dubbele inademing door je neus. Lange uitademing door je mond. Je hartslag daalt. Prefrontale cortex gaat aan.",
        },
        {
          emoji: "🧠",
          label: "Seconde 7-10: De keuze",
          description: "Je kunt weer nadenken. Je kiest wat je zegt. Niet perfect — maar bewust. Dat maakt het verschil.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Sem (7) springt op de bank. Voor de elfde keer. Hij kijkt je recht aan terwijl hij het doet. Je voelt je gezicht warm worden.",
      wrongApproach: "REAGEREN IN SECONDE NUL:\n\nPapa: 'SEM! VAN DIE BANK AF! HOEVEEL KEER MOET IK HET NOG ZEGGEN?!'\nSem springt van schrik. Huilt.\nPapa voelt direct spijt. Weer geschreeuwd. Weer datzelfde patroon.\n\nDe automatische reactie wint. Elke keer.",
      rightApproach: "TIEN SECONDEN NEMEN:\n\nPapa ziet Sem springen. Voelt de woede. Denkt: 'Tien seconden.'\nDubbele inademing. Lange uitademing.\n\nRustig: 'Sem, van de bank af. Je kent de regel.'\nSem: 'Maar het is leuk!'\nPapa: 'Dat snap ik. Maar de regel is duidelijk. Als je wilt springen, doe het buiten.'\n\nGeen geschreeuw. Duidelijke grens. Sem luistert.",
      explanation: "Papa voelde dezelfde woede. Het verschil: hij gaf zichzelf tien seconden. De fysiologische zucht bracht zijn prefrontale cortex terug online. Hij kon een grens stellen zonder te schreeuwen.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De fysiologische zucht. Dubbele inademing door je neus (kort-kort). Lange uitademing door je mond. Eén keer is genoeg. Werkt binnen vijf seconden.\n\n2. Achteruit tellen. Tel van tien naar nul. Niet hardop — in je hoofd. Geeft je brein iets om mee bezig te zijn terwijl de amygdala afkoelt.\n\n3. Fysieke reset. Verander iets aan je houding. Ga zitten als je staat. Doe je handen open als je ze balt. Je lichaam stuurt je brein.",
    },
    {
      type: "exercise" as const,
      title: "De Fysiologische Zucht Oefenen",
      instructions: "1. Oefen nu: dubbele inademing door je neus (kort-kort), dan lange uitademing door je mond.\n2. Doe het drie keer achter elkaar. Merk op hoe je lichaam reageert.\n3. Vanavond in bed: doe het nog drie keer. Het wordt een gewoonte.\n4. Morgen: gebruik hem één keer bij een echt moment.\n5. Het hoeft niet met je kind — in het verkeer of op werk telt ook.\n6. Dagelijks doel: één bewust moment per dag waarop je pauzeert voor je reageert.",
      duration: 3,
      tips: [
        "De uitademing is het belangrijkste — maak hem twee keer zo lang als de inademing",
        "Oefen hem als je NIET gestrest bent, dan is hij beschikbaar als je hem nodig hebt",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Wanneer was de laatste keer dat je reageerde in seconde nul — en hoe voelde dat achteraf?",
        "In welke terugkerende situatie met je kind zou die tien seconden het meeste verschil maken?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Tussen trigger en reactie zit ruimte — tien seconden is genoeg. De fysiologische zucht kalmeert je zenuwstelsel direct. Je hoeft niet te veranderen wie je bent. Je hoeft alleen te leren pauzeren voor je reageert.",
    },
  ],
  keyTakeaways: [
    "Tussen prikkel en reactie zit altijd ruimte — die ruimte is je vrijheid als vader",
    "De fysiologische zucht (dubbel inademen, lang uitademen) kalmeert je zenuwstelsel binnen vijf seconden",
    "Oefen de pauze als je NIET gestrest bent, zodat hij beschikbaar is als je hem nodig hebt",
  ],
  research: "Frankl (1946). Man's Search for Meaning; Huberman Lab (2021). Tools for Managing Stress & Anxiety; Balban et al. (2023). Brief structured respiration practices enhance mood.",
  quizQuestions: [
    {
      question: "Neurowetenschapper Jill Bolte Taylor beschreef de '90 seconden-regel'. Wat houdt die in?",
      options: [
        { text: "Een emotionele reactie in je lichaam duurt chemisch maximaal 90 seconden — daarna kies je zelf of je het gevoel in stand houdt", isCorrect: true },
        { text: "Je moet altijd 90 seconden wachten voor je reageert op je kind, anders is het per definitie een impulsreactie", isCorrect: false },
        { text: "Na 90 seconden vergeet je brein de trigger en kun je niet meer boos worden over hetzelfde voorval", isCorrect: false },
      ],
      explanation: "De chemische cascade van een emotie (cortisol, adrenaline) spoelt in ongeveer 90 seconden door je lichaam. Alles daarna is je eigen denken dat de emotie voedt. Dit betekent niet dat je 90 seconden moet wachten, maar dat de lichamelijke piek korter is dan je denkt.",
    },
    {
      question: "Waarom faalt 'tot 10 tellen' soms als regulatiestrategie?",
      options: [
        { text: "Het is een cognitieve strategie, maar bij hoge stress is je prefrontale cortex offline — je hebt eerst een fysiologische ingreep nodig", isCorrect: true },
        { text: "Tien seconden is te kort — je hebt minstens 30 seconden nodig om te kalmeren", isCorrect: false },
        { text: "Het werkt alleen bij kinderen, niet bij volwassenen met een volgroeid brein", isCorrect: false },
      ],
      explanation: "Bij een amygdala hijack is je denkbrein letterlijk uitgeschakeld. Tellen is een cognitieve taak die je prefrontale cortex nodig heeft. De fysiologische zucht werkt via je zenuwstelsel en omzeilt dat probleem — die brengt je prefrontale cortex weer online zodat cognitieve strategieen daarna wél werken.",
    },
    {
      question: "Sem kijkt je recht aan terwijl hij op de bank springt. Je denkt: 'Hij daagt me uit.' Wat is het risico van die gedachte?",
      options: [
        { text: "Je interpreteert gedrag als intentie, waardoor je emotionele reactie escaleert en je minder ruimte hebt om te kiezen", isCorrect: true },
        { text: "De gedachte is waarschijnlijk correct — kinderen van 7 testen bewust grenzen en je moet daar stevig op reageren", isCorrect: false },
        { text: "Er is geen risico — het herkennen van uitdagend gedrag helpt je een passende consequentie te kiezen", isCorrect: false },
      ],
      explanation: "De interpretatie 'hij daagt me uit' is een cognitieve versterker die je woede opschroeft. Kinderen testen grenzen, maar niet uit minachting — uit ontwikkelingsbehoefte. Zodra je intentie toeschrijft, wordt het persoonlijk en verlies je de ruimte tussen trigger en reactie.",
    },
    {
      question: "Wat is het verschil tussen fysiologische en cognitieve regulatie?",
      options: [
        { text: "Fysiologisch werkt via het lichaam (ademhaling, houding) en is snel inzetbaar; cognitief werkt via denken (herevalueren, perspectief nemen) en vereist een functionerende prefrontale cortex", isCorrect: true },
        { text: "Fysiologische regulatie is voor het lichaam en cognitieve voor de geest — je hebt altijd allebei tegelijk nodig", isCorrect: false },
        { text: "Cognitieve regulatie is altijd effectiever omdat je de oorzaak aanpakt in plaats van het symptoom", isCorrect: false },
      ],
      explanation: "Bij hoge stress is fysiologische regulatie (ademhaling, houding veranderen) je enige optie omdat je denkbrein offline is. Cognitieve strategieen zoals herkaderen zijn krachtig maar werken alleen als je prefrontale cortex actief is. De volgorde is cruciaal: eerst lichaam, dan hoofd.",
    },
  ],
},
{
  id: "zr_mod_4",
  skill: "Zelfregulatie" as Skill,
  title: "Het Uur Na Het Schreeuwen",
  description: "Je hebt geschreeuwd. Het is gebeurd. Je voelt schaamte. Maar wat je nu doet, telt meer dan het feit dat je schreeuwde.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 4,
  content: [
    {
      type: "text" as const,
      text: "Het is 20:30. Sophie (6) ligt in bed. Een uur geleden heb je geschreeuwd. Hard. Ze keek je aan met grote ogen. Nu lig jij op de bank en voel je je de slechtste vader ter wereld.",
    },
    {
      type: "text" as const,
      heading: "Wat je nu doet telt meer",
      text: "Je hebt geschreeuwd. Dat is een feit. En ja, dat is niet oké. Maar hier is wat de meeste vaders niet weten: het moment na de fout is belangrijker dan de fout zelf.\n\nKinderen vergeven het schreeuwen. Wat ze niet vergeven is de stilte erna. De vader die doet alsof er niks is gebeurd. Of die de rest van de avond boos blijft om zijn eigen schaamte.\n\nJe kind heeft niet een perfecte vader nodig. Ze heeft een vader nodig die laat zien hoe je herstelt na een fout. Dat is wat ze echt van je leert.\n\nDe schaamte die je nu voelt? Die is een signaal dat je een goede vader bent. Maar als je erin blijft hangen, kom je niet tot actie. En actie is wat Sophie nu nodig heeft.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Kristin Neffs onderzoek naar zelfcompassie toont dat vaders die zichzelf vergeven na een fout, sneller en beter herstellen. Schaamte zegt: 'Ik ben slecht.' Schuld zegt: 'Ik deed iets dat niet past bij wie ik wil zijn.' Schuld motiveert herstel. Schaamte verlamt. Het verschil bepaalt of je naar Sophie's kamer gaat of op de bank blijft liggen.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Schaamte vs. schuld",
      diagramData: [
        {
          emoji: "🕳️",
          label: "Schaamte: 'Ik ben slecht'",
          description: "Je trekt je terug. Vermijdt je kind. Doet alsof er niks is gebeurd. Of compenseert met cadeaus. Niks wordt hersteld.",
        },
        {
          emoji: "🔧",
          label: "Schuld: 'Dit past niet bij mij'",
          description: "Je erkent wat er gebeurde. Je gaat naar je kind. Je zegt sorry. Je laat zien dat fouten hersteld kunnen worden.",
        },
        {
          emoji: "💪",
          label: "Herstel: 'Dit is wat ik nu doe'",
          description: "Je kind leert: papa maakt fouten, maar hij komt terug. Dat is veiligheid. Niet perfectie — maar betrouwbaar herstel.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Je hebt geschreeuwd tegen Sophie (6) omdat ze niet wilde luisteren. Ze zit stil op haar kamer. Jij voelt schaamte en het liefst zou je het hele moment vergeten.",
      wrongApproach: "IN SCHAAMTE BLIJVEN:\n\nPapa blijft op de bank. Denkt: 'Morgen is ze het vergeten.'\nOf gaat naar boven met een koekje: 'Hier. Sorry hè.'\n\nSophie leert: als papa boos is, verdwijnt hij. Of: boosheid wordt afgekocht. Geen van beide helpt.",
      rightApproach: "HET RECOVERY-SCRIPT:\n\nPapa wacht tot hij zelf rustig is. Gaat naar Sophie's kamer. Knielt.\n\n'Sophie, ik heb geschreeuwd. Dat was niet oké. Jij deed niks fout waardoor ik zo boos moest worden. Ik was moe en ik reageerde het op jou af. Dat had ik anders moeten doen. Sorry.'\n\nSophie: 'Ik schrok ervan.'\nPapa: 'Dat snap ik. Ik ga mijn best doen om het anders te doen. En als het weer gebeurt, mag je het tegen me zeggen.'\n\nSophie leert: fouten horen erbij. Maar herstellen ook.",
      explanation: "Het recovery-script heeft vier stappen: (1) benoem wat je deed, (2) neem verantwoordelijkheid, (3) erken het effect op je kind, (4) vertel wat je anders gaat doen. Geen excuses, geen 'maar'. Dat is echte kracht.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Het recovery-script. Vier stappen: benoem wat je deed, neem verantwoordelijkheid, erken het effect, zeg wat je anders gaat doen. Oefen het hardop zodat je het paraat hebt.\n\n2. Schaamte-naar-schuld. Als je denkt 'ik ben een slechte vader', vertaal naar: 'ik deed iets dat niet past bij de vader die ik wil zijn.' Die ene zin verandert alles.\n\n3. Zelf-reparatie. Behandel jezelf zoals je een vriend zou behandelen die dit meemaakt. Wat zou je tegen hem zeggen? Zeg dat nu tegen jezelf.",
    },
    {
      type: "exercise" as const,
      title: "Het Recovery-Script Schrijven",
      instructions: "Denk aan de laatste keer dat je te hard reageerde. Schrijf nu je recovery-script op: (1) Wat deed ik? (2) Waarom was dat niet oké? (3) Wat was het effect op mijn kind? (4) Wat ga ik anders doen? Lees het hardop voor. Als je kind nog wakker is: overweeg om vanavond nog even langs te gaan.",
      duration: 5,
      tips: [
        "Je hoeft niet te wachten tot het perfect is — een onvolmaakt sorry is beter dan geen sorry",
        "Het gaat niet om de woorden maar om de intentie: je kind voelt of je het meent",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Hoe ga jij normaal om met het gevoel na een uitbarsting — trek je je terug of ga je naar je kind?",
        "Wat zou je tegen een vriend zeggen die zichzelf een slechte vader noemt na het schreeuwen?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Het moment na het schreeuwen is belangrijker dan het schreeuwen zelf. Schaamte verlamt, schuld motiveert herstel. Gebruik het recovery-script: benoem, neem verantwoordelijkheid, erken het effect, zeg wat je anders doet. Je kind heeft geen perfecte vader nodig — maar eentje die terugkomt.",
    },
  ],
  keyTakeaways: [
    "Wat je doet na het schreeuwen telt meer dan het feit dat je schreeuwde — herstel is de echte les",
    "Schaamte ('ik ben slecht') verlamt; schuld ('dit past niet bij mij') motiveert actie en herstel",
    "Het recovery-script (benoem, verantwoordelijkheid, effect, anders doen) leert je kind dat fouten hersteld worden",
  ],
  research: "Neff (2011). Self-Compassion: The Proven Power of Being Kind to Yourself; Siegel & Bryson (2020). The Power of Showing Up.",
  quizQuestions: [
    {
      question: "Na het schreeuwen voel je je schuldig. Je wilt het goedmaken met een cadeautje. Waarom is dat problematisch?",
      options: [
        { text: "Een cadeau koopt de emotie af zonder het effect te erkennen — je kind leert dat spullen boosheid oplossen", isCorrect: true },
        { text: "Er is niks mis mee — een klein gebaar laat zien dat je om je kind geeft", isCorrect: false },
        { text: "Je moet eerst minstens een uur wachten voordat je contact maakt, anders is de emotie nog te rauw", isCorrect: false },
      ],
      explanation: "Compenseren met cadeaus leert je kind een ongezond patroon: woede wordt afgekocht. Het recovery-script — benoemen, verantwoordelijkheid nemen, effect erkennen — is minder comfortabel maar leert je kind dat fouten hersteld worden door eerlijkheid, niet door spullen.",
    },
    {
      question: "Je hebt geschreeuwd. Je denkt: 'Ik ben een slechte vader.' Wat gebeurt er als je in die gedachte blijft hangen?",
      options: [
        { text: "Het motiveert je om het beter te doen — schaamte is een krachtige drijfveer voor verandering", isCorrect: false },
        { text: "Schaamte verlamt: je trekt je terug, vermijdt je kind, en het herstelmoment gaat verloren", isCorrect: true },
        { text: "Het is een gezonde realiteitscheck — soms moet je accepteren dat je gefaald hebt", isCorrect: false },
      ],
      explanation: "Schaamte richt zich op je identiteit ('ik BEN slecht') en maakt je klein. Schuld richt zich op gedrag ('ik DEED iets dat niet past bij mij') en zet je in beweging. Het verschil is niet semantisch — het bepaalt of je naar je kind gaat of op de bank blijft liggen.",
    },
    {
      question: "Sophie zegt na je excuses: 'Het geeft niet, papa.' Wat is de beste reactie?",
      options: [
        { text: "Doorvragen: 'Weet je het zeker? Je mag best boos zijn.' — druk haar om haar emoties te tonen", isCorrect: false },
        { text: "Accepteer het en ga verder — als ze zegt dat het oké is, moet je dat respecteren", isCorrect: false },
        { text: "Erken haar woorden maar bevestig de impact: 'Lief dat je dat zegt. Maar het was niet oké en ik ga het anders doen.'", isCorrect: true },
      ],
      explanation: "Kinderen zeggen vaak 'het geeft niet' om spanning weg te nemen of om jou te pleasen. Doorvragen legt druk, negeren valideert de minimalisering. De middenweg: haar woorden serieus nemen en tegelijk de impact erkennen zonder er een verhoor van te maken.",
    },
    {
      question: "Je gebruikt het recovery-script nu drie keer per week. Is dat een goed teken?",
      options: [
        { text: "Ja — het laat zien dat je goed bent in herstellen en dat is het belangrijkste", isCorrect: false },
        { text: "Nee — frequent herstellen is goed, maar het wijst erop dat je pre-trigger strategieen niet werken en je eerder in de keten moet ingrijpen", isCorrect: true },
        { text: "Nee — als je zo vaak schreeuwt heb je professionele hulp nodig", isCorrect: false },
      ],
      explanation: "Het recovery-script is een post-trigger strategie: essentieel maar niet de oplossing. Als je het vaak nodig hebt, is dat een signaal om eerder in te grijpen — bij de tankcheck, de pre-trigger signalen of de fysiologische zucht. Herstel is waardevol, maar voorkomen is beter.",
    },
  ],
},
{
  id: "zr_mod_5",
  skill: "Zelfregulatie" as Skill,
  title: "Van Overleven Naar Vaderschap",
  description: "Elke avond hetzelfde: autopilot aan, overleven tot bedtijd. Het kan anders. Van reactief naar bewust. Eén keuze per dag.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 5,
  content: [
    {
      type: "text" as const,
      text: "Het is 21:00. De kinderen liggen in bed. Je zit op de bank en denkt: wat heb ik eigenlijk gedaan vanavond? Eten gemaakt, ruzie opgelost, tandenpoetsen overleefd. Maar echt aanwezig? Nee.",
    },
    {
      type: "text" as const,
      heading: "Autopilot is geen vaderschap",
      text: "De meeste avonden staan op automatisch. Binnenkomen. Eten. Chaos. Bedtijd. Herhalen. Je reageert op wat er komt — maar je kiest niks bewust.\n\nDat is overlevingsmodus. En het is begrijpelijk. Je bent moe. Er is altijd meer te doen dan tijd. Dus schakelt je brein over op automatisch.\n\nMaar hier is het probleem: op autopilot maak je geen herinneringen. Niet voor jou en niet voor je kind. Lucas (8) gaat zich niet herinneren dat je de vaatwasser inruimde. Hij gaat zich herinneren hoe je keek toen hij je iets vertelde.\n\nJe hoeft niet elke avond een superheld te zijn. Je hoeft maar één moment per avond bewust te kiezen. Dat is genoeg om van overleven naar vaderschap te gaan.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Onderzoek naar 'default mode' versus 'intentional mode' laat zien dat ons brein standaard op autopilot staat — efficiënt maar onbewust. Door één bewuste intentie te stellen activeer je de prefrontale cortex en schakel je naar intentional mode. James Clear toont dat identiteitsgebonden gewoontes krachtiger zijn dan doelgebonden: 'ik ben een bewuste vader' werkt beter dan 'ik moet geduldiger zijn'.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Twee modi van vaderschap",
      diagramData: [
        {
          emoji: "🤖",
          label: "Overlevingsmodus",
          description: "Reageren op wat komt. Geen keuzes, alleen reacties. Efficiënt maar leeg. Je bent er wel, maar niet echt.",
        },
        {
          emoji: "🎯",
          label: "Intentionele modus",
          description: "Eén bewuste keuze per avond. Niet meer. Niet alles hoeft perfect — maar één moment is echt. Dat maakt het verschil.",
        },
        {
          emoji: "🪪",
          label: "Identiteitskaart",
          description: "Niet: 'ik moet geduldiger zijn.' Maar: 'ik ben een vader die bewust kiest.' Die ene verschuiving verandert je gedrag van binnenuit.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Het is 17:55. Je rijdt naar huis. Over vijf minuten begin je aan het avondprogramma met Lucas (8) en Noor (5). Je voelt de bekende automatische piloot aankomen.",
      wrongApproach: "OP AUTOPILOT NAAR BINNEN:\n\nPapa komt binnen. Jas uit. 'Wat eten we?' Telefoon op tafel. Koken. 'Lucas, huiswerk!' 'Noor, niet rennen!' Bedtijd. Bank. Herhalen.\n\nNiks fout gegaan. Maar ook niks bijzonders. Morgen dezelfde film. Lucas en Noor herinneren zich: papa was er. Maar niet echt.",
      rightApproach: "EEN INTENTIE STELLEN:\n\nPapa zit in de auto. Denkt: 'Vanavond wil ik één ding bewust doen. Ik ga Lucas in zijn ogen kijken als hij iets vertelt.'\n\nBinnen. Zelfde chaos. Maar als Lucas vertelt over school, legt papa zijn telefoon neer. Kijkt hem aan. Luistert echt. Dertig seconden.\n\nLucas praat door. Stralend. Die dertig seconden worden het moment van de avond.\n\nDe rest? Gewoon overleven. Maar dat ene moment was echt.",
      explanation: "Je hoeft niet de hele avond bewust te zijn — dat is onmogelijk. Eén intentie, één moment, dertig seconden echt. Dat is het verschil tussen overleven en vaderschap.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De identiteitskaart. Schrijf op een kaartje of in je telefoon: 'Ik ben een vader die bewust kiest.' Lees het elke ochtend. Identiteit stuurt gedrag.\n\n2. Eén dagelijkse intentie. Stel elke dag in de auto, voor je naar binnen gaat, één intentie. 'Vanavond kijk ik mijn kind aan als het praat.' Niet meer.\n\n3. De avond-check-in. Drie vragen voor bedtijd: Was er één bewust moment? Hoe voelde dat? Wat is mijn intentie voor morgen?\n\n4. Genoeg is genoeg. Eén bewust moment per avond is al een overwinning. Niet drie, niet vijf. Eén.\n\n5. Dagelijkse praktijk. Plak je intentie aan je stuur, je spiegel, of je voordeurbel. Maak het fysiek zichtbaar. Je brein heeft triggers nodig om uit de automatische piloot te komen. Een post-it op de voordeur met 'Eén moment echt' kan het verschil maken.",
    },
    {
      type: "exercise" as const,
      title: "De Autopilot-Doorbreker",
      instructions: "Stel morgen, voor je naar binnen gaat, één intentie voor de avond. Maak het klein en concreet: 'Ik ga mijn kind in de ogen kijken als het iets vertelt.' Of: 'Ik ga even naast mijn kind zitten zonder telefoon.' Doe het. Schrijf voor bedtijd op hoe het voelde.",
      duration: 4,
      tips: [
        "Gebruik het moment in de auto of bij de voordeur als trigger voor je intentie",
        "Begin met één avond. Als dat lukt, doe het morgen weer. Bouw langzaam op.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Hoeveel van je avonden staan op autopilot? En wat kost dat je — als vader, als mens?",
        "Als je kind over tien jaar terugkijkt, welk moment van gisteren zou het zich herinneren?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Autopilot is overleven, niet vaderschap. Eén bewuste intentie per avond is genoeg. Gebruik de identiteitskaart ('ik ben een bewuste vader') en stel elke dag voor je thuiskomt één concreet voornemen. Je hoeft niet perfect te zijn. Je hoeft maar één moment echt te zijn.",
    },
  ],
  keyTakeaways: [
    "Overlevingsmodus is efficiënt maar leeg — je bent er wel maar niet echt aanwezig voor je kind",
    "Eén bewuste intentie per avond is genoeg om van reactief overleven naar bewust vaderschap te gaan",
    "Identiteitsgebonden gewoontes ('ik ben een bewuste vader') zijn krachtiger dan doelen ('ik moet geduldiger zijn')",
  ],
  research: "Clear (2018). Atomic Habits; Raichle (2015). The Brain's Default Mode Network; Kabat-Zinn & Kabat-Zinn (1997). Everyday Blessings: The Inner Work of Mindful Parenting.",
  quizQuestions: [
    {
      question: "Je probeert een negatieve gedachte te onderdrukken: 'Ik mag niet boos worden.' Wat gebeurt er volgens de paradox van suppressie?",
      options: [
        { text: "De gedachte verdwijnt na een paar minuten als je volhoudt", isCorrect: false },
        { text: "De gedachte komt juist vaker en sterker terug — actief onderdrukken werkt averechts", isCorrect: true },
        { text: "Het werkt, maar alleen als je tegelijk een alternatieve gedachte formuleert", isCorrect: false },
      ],
      explanation: "Wegner's 'ironic process theory' laat zien dat actief proberen iets niet te denken een monitorproces activeert dat juist naar die gedachte zoekt. Accepteren dat de boosheid er is ('ik ben boos en dat mag') werkt beter dan onderdrukken. De emotie mag er zijn — het gedrag is je keuze.",
    },
    {
      question: "Wat is het verschil tussen een pre-trigger en een post-trigger strategie?",
      options: [
        { text: "Pre-trigger verlaagt de kans op ontregeling (tankcheck, slaap, eten); post-trigger beperkt de schade nadat je al bent ontregeld (recovery-script, herstel)", isCorrect: true },
        { text: "Pre-trigger is voor lichte stress en post-trigger is voor zware stress", isCorrect: false },
        { text: "Pre-trigger strategieen werken preventief en zijn altijd effectiever dan post-trigger strategieen", isCorrect: false },
      ],
      explanation: "Pre-trigger strategieen (tankcheck, preventieve regulatie, energiemanagement) verkleinen de kans dat je ontregelt. Post-trigger strategieen (fysiologische zucht, recovery-script) beperken de schade als het toch gebeurt. Je hebt beide nodig — pre-trigger is niet 'beter', het zit eerder in de keten.",
    },
    {
      question: "Je stelt elke avond een intentie maar het lukt je bijna nooit om die uit te voeren. Wat is de meest waarschijnlijke oorzaak?",
      options: [
        { text: "Je intentie is te groot of te vaag — 'een betere vader zijn' werkt niet, 'Lucas aankijken als hij praat' wel", isCorrect: true },
        { text: "Je bent niet gemotiveerd genoeg — je moet het belang van bewust vaderschap dieper voelen", isCorrect: false },
        { text: "Intenties stellen werkt niet voor jouw persoonlijkheid — probeer een andere methode", isCorrect: false },
      ],
      explanation: "Gedragswetenschap laat zien dat vaag geformuleerde intenties zelden tot actie leiden. 'Ik ga bewuster zijn' activeert geen specifiek gedrag. 'Ik leg mijn telefoon neer als Lucas over school vertelt' is concreet, klein en haalbaar. De intentie moet zo specifiek zijn dat je brein precies weet wanneer en hoe.",
    },
    {
      question: "Na een week bewust oefenen merk je dat je vaker ontploft dan voorheen. Hoe kan dat?",
      options: [
        { text: "Je bewustzijn is verhoogd — je merkt nu uitbarstingen op die je eerder op autopilot niet registreerde", isCorrect: true },
        { text: "De oefeningen werken niet en je moet stoppen voordat het erger wordt", isCorrect: false },
        { text: "Je stelt te hoge eisen aan jezelf waardoor de druk om perfect te zijn juist meer stress veroorzaakt", isCorrect: false },
      ],
      explanation: "Dit is een bekend paradoxaal effect bij bewustwording: je gedrag is waarschijnlijk niet verslechterd, maar je detectiesysteem is verbeterd. Op autopilot registreer je je eigen uitbarstingen nauwelijks. Het gevoel dat het erger wordt is vaak juist een teken van vooruitgang — je ziet nu wat er altijd al was.",
    },
  ],
},
];
