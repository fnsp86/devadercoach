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
      text: "Psycholoog Roy Baumeister ontdekte dat zelfbeheersing een beperkte hulpbron is: 'ego depletion'. Na veel willsinspanning presteer je slechter op de volgende taak. Je prefrontale cortex — het remmencentrum van je brein — raakt letterlijk uitgeput. Glucose, slaap en herstel vullen de tank weer aan.",
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
      instructions: "Stel vandaag een alarm om 17:00. Als het afgaat, geef jezelf een score van 1-10 voor hoeveel energie je nog hebt. Schrijf het op in je telefoon. Doe dit vijf dagen achter elkaar. Na vijf dagen zie je je patroon.",
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
      question: "Het is 18:00 en je kind zeurt over het avondeten. Je merkt dat je wilt schreeuwen. Wat is de meest waarschijnlijke oorzaak?",
      options: [
        { text: "Je kind is expres vervelend om jou te testen", isCorrect: false },
        { text: "Je wilskracht-tank is leeg na een dag vol beslissingen", isCorrect: true },
      ],
      explanation: "Ego depletion: elke beslissing en elke keer dat je je inhield heeft energie gekost. Om 18:00 is er weinig over. Het gaat niet om je kind — het gaat om jouw lege tank.",
    },
    {
      question: "Je tankniveau is een 3 van de 10 als je thuiskomt. Wat werkt het beste?",
      options: [
        { text: "Jezelf dwingen om toch geduldig te zijn — je bent toch een volwassene", isCorrect: false },
        { text: "Vijf minuten alleen nemen om bij te tanken voor je aan het gezin begint", isCorrect: true },
      ],
      explanation: "Bij een lege tank werkt doorzetten niet — je prefrontale cortex is uitgeput. Een korte pauze geeft je brein net genoeg herstel om weer te kunnen reguleren.",
    },
    {
      question: "Tegen je kind zeggen 'Papa is moe, ik heb even vijf minuten nodig' is:",
      options: [
        { text: "Goed voorbeeldgedrag — je leert je kind zelfregulatie door het voor te doen", isCorrect: true },
        { text: "Zwakte tonen — een vader hoort altijd beschikbaar te zijn", isCorrect: false },
      ],
      explanation: "Door je eigen grenzen te benoemen, leer je je kind dat emoties herkennen en reguleren normaal is. Dat is precies de vaardigheid die zij ook nodig hebben.",
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
      text: "Die woede voelt buitenproportioneel. Dat is hij ook. Want die reactie gaat niet over dit glas melk. Die gaat over alles wat daarvoor kwam.\n\nDe file vanmorgen. Die ene opmerking van je baas. Het feit dat je al drie keer hebt opgeruimd vandaag. De was die nog draait. De rekening die je vergeten bent.\n\nElke irritatie die je wegslikte, werd opgestapeld. Daan's melk was gewoon de druppel. Letterlijk.\n\nJe amygdala — het alarmcentrum in je brein — houdt een onzichtbare boekhouding bij. Elke kleine stress telt mee. Tot het alarm afgaat bij iets kleins.",
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
      instructions: "Maak een notitie in je telefoon met de titel 'Triggers'. Na elke boze reactie deze week, schrijf drie dingen op: (1) Wat was de trigger? (2) Hoe groot was mijn reactie op een schaal van 1-10? (3) Wat was er eerder op de dag gebeurd? Na vijf dagen lees je alles terug en zoek je het patroon.",
      duration: 5,
      tips: [
        "Doe het direct na het moment, anders vergeet je de details",
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
      question: "Daan (5) morst melk en jij voelt woede die niet past bij het moment. Wat is er waarschijnlijk aan de hand?",
      options: [
        { text: "Je hebt opgestapelde stress van de dag en de melk is de druppel", isCorrect: true },
        { text: "Daan moet leren om beter op te letten en verdient een strenge reactie", isCorrect: false },
      ],
      explanation: "Als je reactie groter is dan de situatie, is de situatie niet het probleem. Je amygdala reageert op de totale stresslading, niet op het glas melk.",
    },
    {
      question: "Je merkt dat je kaak aanspant en je kortaf antwoordt. Wat betekent dit?",
      options: [
        { text: "Niks — iedereen is weleens kortaf", isCorrect: false },
        { text: "Dit zijn pre-trigger signalen: je stressstapel is bijna vol", isCorrect: true },
      ],
      explanation: "Lichamelijke signalen zoals kaakspanning en korte antwoorden zijn je vijf-seconden-waarschuwing. Herken ze en je kunt handelen voor je ontploft.",
    },
    {
      question: "Wat is het doel van een trigger-dagboek?",
      options: [
        { text: "Patronen ontdekken in je triggers zodat je ze kunt voorkomen", isCorrect: true },
        { text: "Bewijzen verzamelen dat je een slechte vader bent", isCorrect: false },
      ],
      explanation: "Het trigger-dagboek is een onderzoekstool, geen oordeel. Door patronen te zien kun je preventief handelen: de stapel kleiner houden voor hij omvalt.",
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
      instructions: "Oefen de fysiologische zucht nu drie keer. Dubbele inademing door je neus (kort-kort), dan lange uitademing door je mond. Doe dit vanavond nog een keer als je in bed ligt. En morgen: gebruik hem één keer bij een echt moment — niet per se met je kind, kan ook in het verkeer of op werk.",
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
      question: "Sem (7) breekt bewust een regel. Je voelt woede opkomen. Wat is het meest effectieve eerste wat je kunt doen?",
      options: [
        { text: "Dubbele inademing door je neus, lange uitademing door je mond", isCorrect: true },
        { text: "Direct de consequentie uitspreken zodat hij leert dat regels er zijn", isCorrect: false },
      ],
      explanation: "De fysiologische zucht activeert je prefrontale cortex in seconden. Je kunt daarna alsnog een consequentie geven — maar dan bewust in plaats van vanuit woede.",
    },
    {
      question: "Waarom is het belangrijk om de fysiologische zucht te oefenen als je NIET gestrest bent?",
      options: [
        { text: "Zodat het een automatisme wordt en beschikbaar is in een stressmoment", isCorrect: true },
        { text: "Omdat de zucht alleen werkt als je hem minstens 100 keer hebt geoefend", isCorrect: false },
      ],
      explanation: "Onder stress val je terug op gewoontes. Als de zucht een automatisme is, gebruik je hem vanzelf in het moment dat je hem nodig hebt.",
    },
    {
      question: "Viktor Frankl's inzicht 'Tussen prikkel en reactie is er ruimte' betekent:",
      options: [
        { text: "Je kunt altijd kiezen hoe je reageert — ook als de emotie groot is", isCorrect: true },
        { text: "Je moet je emoties onderdrukken en altijd rationeel blijven", isCorrect: false },
      ],
      explanation: "Het gaat niet om emoties onderdrukken. Het gaat om een moment nemen zodat jij kiest wat je doet — niet je amygdala. De emotie mag er zijn. De reactie is je keuze.",
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
      text: "Kristin Neff's onderzoek naar zelfcompassie toont dat vaders die zichzelf vergeven na een fout, sneller en beter herstellen. Schaamte zegt: 'Ik ben slecht.' Schuld zegt: 'Ik deed iets dat niet past bij wie ik wil zijn.' Schuld motiveert herstel. Schaamte verlamt. Het verschil bepaalt of je naar Sophie's kamer gaat of op de bank blijft liggen.",
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
      question: "Je hebt geschreeuwd tegen je kind. Je voelt schaamte. Wat werkt het beste?",
      options: [
        { text: "Naar je kind gaan, benoemen wat je deed, sorry zeggen en vertellen wat je anders gaat doen", isCorrect: true },
        { text: "Wachten tot morgen — dan is iedereen het vergeten en kun je fris beginnen", isCorrect: false },
      ],
      explanation: "Kinderen vergeten het schreeuwen niet. Ze vergeten wel de stilte erna. Het recovery-script — hoe eerder hoe beter — leert je kind dat fouten hersteld worden.",
    },
    {
      question: "Wat is het verschil tussen schaamte en schuld?",
      options: [
        { text: "Schaamte zegt 'ik ben slecht' en verlamt; schuld zegt 'dit past niet bij mij' en motiveert herstel", isCorrect: true },
        { text: "Het is hetzelfde gevoel — schaamte is gewoon een ander woord voor schuld", isCorrect: false },
      ],
      explanation: "Schaamte richt zich op je identiteit en maakt je klein. Schuld richt zich op je gedrag en zet je in beweging. De vertaling van schaamte naar schuld is de sleutel tot herstel.",
    },
    {
      question: "Het recovery-script bevat vier stappen. Welke volgorde is juist?",
      options: [
        { text: "Benoem wat je deed, neem verantwoordelijkheid, erken het effect op je kind, zeg wat je anders gaat doen", isCorrect: true },
        { text: "Leg uit waarom je moe was, zeg dat je kind ook verkeerd deed, beloof dat het nooit meer gebeurt", isCorrect: false },
      ],
      explanation: "Het script draait om verantwoordelijkheid nemen zonder excuses. 'Ik was moe' is een verklaring maar geen rechtvaardiging. En beloven dat het nooit meer gebeurt is onrealistisch — beter: zeggen wat je concreet anders gaat doen.",
    },
  ],
},
{
  id: "zr_mod_5",
  skill: "Zelfregulatie" as Skill,
  title: "Van Overleven Naar Vaderschapen",
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
      text: "1. De identiteitskaart. Schrijf op een kaartje of in je telefoon: 'Ik ben een vader die bewust kiest.' Lees het elke ochtend. Identiteit stuurt gedrag.\n\n2. Eén dagelijkse intentie. Stel elke dag in de auto, voor je naar binnen gaat, één intentie. 'Vanavond kijk ik mijn kind aan als het praat.' Niet meer.\n\n3. De avond-check-in. Drie vragen voor bedtijd: Was er één bewust moment? Hoe voelde dat? Wat is mijn intentie voor morgen?\n\n4. Genoeg is genoeg. Eén bewust moment per avond is al een overwinning. Niet drie, niet vijf. Eén.",
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
      question: "Je merkt dat je elke avond op autopilot staat. Wat is de kleinste effectieve verandering?",
      options: [
        { text: "Eén bewuste intentie stellen voor je naar binnen gaat", isCorrect: true },
        { text: "Een compleet avondschema maken met kwaliteitstijd voor elk kind", isCorrect: false },
      ],
      explanation: "Een compleet schema is onhaalbaar als je moe bent. Eén intentie is klein genoeg om vol te houden en groot genoeg om verschil te maken. Begin klein.",
    },
    {
      question: "Waarom werkt 'ik ben een bewuste vader' beter dan 'ik moet geduldiger zijn'?",
      options: [
        { text: "Identiteitsgebonden gewoontes sturen gedrag van binnenuit — doelen voelen als externe druk", isCorrect: true },
        { text: "Het maakt geen verschil — het zijn allebei goede voornemens", isCorrect: false },
      ],
      explanation: "James Clear toont dat identiteit gedrag stuurt. Als je jezelf ziet als 'een vader die bewust kiest', volgt het gedrag vanzelf. Een doel voelt als iets dat je moet — identiteit is iets dat je bent.",
    },
    {
      question: "De avond-check-in bestaat uit drie vragen. Wat is het doel?",
      options: [
        { text: "Bewust stilstaan bij je dag en een intentie stellen voor morgen", isCorrect: true },
        { text: "Bijhouden hoeveel fouten je hebt gemaakt zodat je jezelf kunt verbeteren", isCorrect: false },
      ],
      explanation: "De check-in is geen rapport maar een moment van bewustzijn: was er een echt moment? Hoe voelde dat? Wat wil ik morgen? Het gaat om groei, niet om perfectie.",
    },
  ],
},
];
