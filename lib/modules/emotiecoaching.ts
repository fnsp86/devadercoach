import type { LearningModule, Skill } from "../types";

export const EMOTIECOACHING_MODULES: LearningModule[] = [
{
  id: "ec_mod_1",
  skill: "Emotiecoaching" as Skill,
  title: "Waarom Je Kind Niet Naar Je Luistert",
  description: "Ze schreeuwen. Jij praat. Niks komt binnen. Snap wat er in hun brein gebeurt — en waarom logica je vijand is.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 1,
  content: [
    {
      type: "text" as const,
      heading: "Je praat. Ze horen niks.",
      text: "Je kind schreeuwt. Tranen. Snot. Jij zegt: 'Luister even, het is niet zo erg.' Maar niks komt binnen. Alsof er een muur staat.\n\nDat is geen onwil. Dat is biologie. Er is iets aan de hand in hun hoofd waardoor je woorden letterlijk niet aankomen.",
    },
    {
      type: "text" as const,
      heading: "Het deksel dat openklapt",
      text: "Stel je een vuist voor. Je pols is het oerbrein (overleven). Je duim is het emotionele brein (angst, woede). Je vingers eroverheen zijn het denkbrein (logica, taal, zelfcontrole).\n\nBij hevige emotie klappen die vingers open. Het denkbrein gaat offline. Weg logica. Weg taal. Alleen emotie en overleven zijn actief. Dit heet 'flipping your lid'.\n\nBij kinderen onder de acht is dat denkbrein sowieso nog in ontwikkeling. Ze hebben minder reserves dan jij. Die muur tussen jou en je kind? Dat is geen keuze. Dat is biologie.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Neurowetenschapper Dan Siegel ontwikkelde het handmodel van het brein. Simpel en briljant: je vuist is je brein, je vingers het denkbrein. Bij stress klappen ze open. Kinderen onder de acht hebben die vingers nog niet stevig — hun prefrontale cortex is simpelweg nog niet af. Daarom flippen ze sneller dan jij.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De drie fasen van een emotionele storm",
      diagramData: [
        {
          emoji: "🌡️",
          label: "Fase 1: Opbouw",
          description: "Stem wordt hoger, lichaam spant. Klein venster om bij te sturen. Meestal mis je dit moment.",
        },
        {
          emoji: "🌊",
          label: "Fase 2: Piek",
          description: "Denkbrein offline. Praten = extra dreiging. Alleen jouw rustige aanwezigheid helpt.",
        },
        {
          emoji: "🌤️",
          label: "Fase 3: Herstel",
          description: "Ademhaling vertraagt. Denkbrein komt terug. NU pas kun je praten. Korte zinnen. Geen preek.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Levi (6) verliest bij een bordspel. Veegt alle stukken van tafel. Schreeuwt: 'Stom spel! Het is niet eerlijk!'",
      wrongApproach: "LOGICA TIJDENS DE PIEK:\n\nPapa: 'Levi! Niet doen! Raap die stukken op!'\nLevi huilt harder.\nPapa: 'Het is maar een spelletje. Je kunt niet altijd winnen.'\nLevi rent naar zijn kamer.\n\nLogica in fase 2. Elke zin voelt als extra dreiging. Resultaat: escalatie en afstand.",
      rightApproach: "AANWEZIGHEID TIJDENS DE PIEK:\n\nPapa ziet de stukken vliegen. Ademt. Zegt niks. Gaat op de grond zitten.\n\nLevi huilt. Papa wacht. Twee minuten.\n\nLevi, zacht: 'Ik wilde zo graag winnen...'\nPapa: 'Ja. Verliezen is balen.'\nLevi: 'Nog een keer?'\n\nPapa wachtte de piek af. Levi kwam zelf met de oplossing.",
      explanation: "Het verschil is niet wat papa zei — het is wanneer. Eerste aanpak: logica tijdens de piek, tegen een muur praten. Tweede aanpak: wachten tot fase 3, waardoor Levi zelf tot rust en oplossing kwam.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Herken de fase. Opbouw, piek of herstel? Reageer alleen in fase 1 of 3.\n\n2. Wees het anker. Rustige ademhaling, ontspannen schouders, lage stem. Jouw zenuwstelsel kalmeert dat van je kind.\n\n3. Zeg minder. Tijdens de piek: niks. Tijdens herstel: korte zinnen. 'Dat was zwaar.' 'Ik snap het.'\n\n4. Geef het tijd. De storm heeft zijn eigen tijdlijn. Jouw taak is er doorheen te zijn — niet hem te stoppen.",
    },
    {
      type: "exercise" as const,
      title: "De Fase-Spotter",
      instructions: "Vandaag of morgen: als je kind emotioneel wordt, stel jezelf één vraag: welke fase is dit? Opbouw, piek, of herstel? Kijk naar stem, lichaam en ademhaling. Doe niks anders — alleen observeren.",
      duration: 3,
      tips: [
        "Merk één keer op wanneer fase 2 overgaat in fase 3 — dat moment van kalmte na de storm",
        "Kijk ook naar jezelf: in welke fase zit jij?",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Wanneer was de laatste keer dat je probeerde te praten tijdens een emotionele piek bij je kind? Wat gebeurde er?",
        "Hoe voel jij je van binnen als je kind een driftbui heeft?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Bij hevige emotie gaat het denkbrein offline — je kind kan letterlijk niet luisteren. Elke storm heeft drie fasen: opbouw, piek, herstel. Praten werkt alleen in fase 1 en 3. Jouw rust is het medicijn.",
    },
  ],
  keyTakeaways: [
    "Bij hevige emotie gaat het denkbrein offline — je kind kan niet luisteren, het is biologie",
    "Elke storm heeft drie fasen: opbouw, piek, herstel — praten werkt alleen in fase 1 en 3",
    "Co-regulatie werkt via jouw lichaam (ademhaling, houding, stem), niet via je woorden",
  ],
  research: "Siegel & Bryson (2011). The Whole-Brain Child; Gottman (1997). Raising an Emotionally Intelligent Child",
  quizQuestions: [
    {
      question: "Je kind schreeuwt en huilt (fase 2). Je zegt: 'Luister even, het is niet zo erg.' Wat gebeurt er?",
      options: [
        { text: "Ze horen je wel maar kiezen ervoor niet te luisteren", isCorrect: false },
        { text: "Het denkbrein is offline — je woorden komen niet aan", isCorrect: true },
      ],
      explanation: "Tijdens fase 2 is de prefrontale cortex offline. Je woorden worden letterlijk niet verwerkt. Het is geen onwil — het is biologie.",
    },
    {
      question: "Je dochter (5) huilt omdat haar toren is omgevallen. Wat werkt het best?",
      options: [
        { text: "Direct een nieuwe toren bouwen zodat ze stopt met huilen", isCorrect: false },
        { text: "Naast haar gaan zitten, rustig ademhalen en er zijn", isCorrect: true },
      ],
      explanation: "Co-regulatie via jouw rustige aanwezigheid helpt haar zenuwstelsel kalmeren. Fixen kan pas als het denkbrein weer online is.",
    },
    {
      question: "Wanneer kun je het beste praten na een driftbui?",
      options: [
        { text: "Direct als het huilen stopt", isCorrect: false },
        { text: "Als de ademhaling rustiger wordt en het lichaam ontspant", isCorrect: true },
      ],
      explanation: "Fase 3 is het moment: het denkbrein komt terug online. Let op ademhaling en lichaamstaal als signaal.",
    },
  ],
},
{
  id: "ec_mod_2",
  skill: "Emotiecoaching" as Skill,
  title: "De Kracht van Niks Zeggen",
  description: "Je wilt helpen. Je wilt fixen. Maar soms is je stilte het krachtigste wat je hebt. Leer waarom niks zeggen alles verandert.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 2,
  content: [
    {
      type: "text" as const,
      heading: "De ochtend die ontspoort.",
      text: "Mila (4) wil haar jas niet aan. Je hebt acht minuten. Ze krijst. Jij voelt de druk. Je hele lijf zegt: zeg iets, fix dit, we moeten NU weg.\n\nMaar wat als het beste wat je kunt doen... niks is?",
    },
    {
      type: "text" as const,
      heading: "Stilte is geen passiviteit",
      text: "Hier zit de paradox: hoe harder je probeert je kind te kalmeren met woorden, hoe meer input hun overbelaste brein moet verwerken. Elke zin is een extra signaal. En hun systeem staat al op rood.\n\nStilte IS de interventie. Niet wegkijken. Niet negeren. Maar aanwezig zijn zonder te praten. Je kind voelt jouw energie. Als jij rustig bent, zeg je met je hele lijf: 'Het is veilig hier. Ik ben er.'\n\nDit heet co-regulatie. Je kind kan zichzelf nog niet reguleren. Ze lenen jouw rust. Letterlijk. Hun zenuwstelsel stemt af op dat van jou. Als jij kalm bent, kalmeren zij. Als jij gestrest bent, escaleren zij.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Stephen Porges ontdekte met de polyvagaaltheorie dat ons zenuwstelsel drie standen heeft: veilig, gevecht/vlucht, en bevriezing. Kinderen pikken via je stem, gezicht en houding op in welke stand jij zit. Ze synchroniseren automatisch. Jouw kalmte is geen trucje — het is hun reddingslijn.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De drie standen van het zenuwstelsel",
      diagramData: [
        {
          emoji: "💚",
          label: "Groen: Veilig & verbonden",
          description: "Rustige ademhaling, oogcontact, open houding. Hier kan je kind leren, praten en voelen. Dit is waar je naartoe wilt.",
        },
        {
          emoji: "🟠",
          label: "Oranje: Gevecht of vlucht",
          description: "Hart bonkt, spieren spannen. Schreeuwen, wegrennen, slaan. Je kind is hier als het over de rooie gaat. Praten werkt hier niet.",
        },
        {
          emoji: "🔴",
          label: "Rood: Bevriezing",
          description: "Dichtklappen, lege blik, niet reageren. Soms lijkt het op kalmte, maar het is overbelasting. Zachte nabijheid helpt hier.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Mila (4) staat bij de voordeur. Jas op de grond. Ze schreeuwt: 'NEE! Ik wil die jas NIET aan!' Het is 08:17. Je moet om 08:25 weg.",
      wrongApproach: "PRATEN ONDER DRUK:\n\nPapa: 'Mila, doe je jas aan. We zijn laat.'\nMila schreeuwt harder.\nPapa: 'Als je je jas niet aandoet gaan we niet naar opa.'\nMila gooit zich op de grond.\nPapa trekt de jas aan. Mila huilt de hele autorit.\n\nMeer woorden = meer druk = meer escalatie.",
      rightApproach: "STILTE EN NABIJHEID:\n\nPapa zet zijn tas neer. Hurkt. Zegt niks.\nAdemt rustig. Kijkt Mila aan.\nMila huilt. Dertig seconden. Wordt stiller.\nPapa, zacht: 'Lastige ochtend hè.'\nMila knikt. Pakt haar jas.\n\nTotale tijd: anderhalve minuut. Korter dan de ruzie.",
      explanation: "De stilte gaf Mila's zenuwstelsel ruimte om te kalmeren. Papa's rust was het signaal: het is veilig. Geen woorden nodig. Het kostte uiteindelijk minder tijd dan de strijd.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De STOP-methode. Stop wat je doet. Take a breath (adem). Observe (wat zie je bij je kind?). Proceed (reageer vanuit rust, niet vanuit haast).\n\n2. Zak door je knieën. Op ooghoogte gaan zitten verandert alles. Je wordt kleiner, minder bedreigend, meer verbonden.\n\n3. Tel tot tien in je hoofd. Niet om je boosheid te bedwingen — maar om je kind tijd te geven. Tien seconden stilte is vaak genoeg.\n\n4. Benoem het later. Na de storm, kort: 'Dat was een lastig moment. Maar we kwamen eruit.' Klaar.",
    },
    {
      type: "exercise" as const,
      title: "De Stille Minuut",
      instructions: "Bij het eerstvolgende emotionele moment van je kind: zeg 60 seconden niks. Adem rustig. Ga op ooghoogte zitten. Observeer wat er gebeurt als jij stopt met praten.",
      duration: 3,
      tips: [
        "Het voelt onwennig. Dat is normaal. Je lichaam wil fixen. Laat het",
        "Let op het kantelpunt: het moment dat je kind rustiger wordt zonder dat jij iets zei",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Wat is jouw automatische reactie als je kind schreeuwt — praten, fixen, of boos worden? Waar komt dat vandaan?",
        "Kun je je een moment herinneren dat stilte meer deed dan woorden?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Stilte is geen passiviteit — het is de krachtigste interventie die je hebt. Je kind leent jouw rust via co-regulatie. De STOP-methode helpt je pauzeren voordat je reageert. Soms is er-zijn genoeg.",
    },
  ],
  keyTakeaways: [
    "Stilte is geen negeren — het is de krachtigste vorm van co-regulatie die je hebt",
    "Je kind synchroniseert met jouw zenuwstelsel: jouw kalmte is hun reddingslijn",
    "De STOP-methode (Stop, Take a breath, Observe, Proceed) voorkomt escalatie",
  ],
  research: "Porges (2011). The Polyvagal Theory; Siegel & Bryson (2011). The Whole-Brain Child",
  quizQuestions: [
    {
      question: "Mila (4) krijst bij de voordeur. Je hebt haast. Wat werkt het snelst?",
      options: [
        { text: "Rustig hurken, niks zeggen, en haar zenuwstelsel laten kalmeren via jouw rust", isCorrect: true },
        { text: "Duidelijk uitleggen waarom ze haar jas aan moet doen", isCorrect: false },
      ],
      explanation: "Co-regulatie via stilte en nabijheid werkt sneller dan woorden. Uitleg voegt extra prikkels toe aan een overbelast systeem.",
    },
    {
      question: "Wat bedoelen we met co-regulatie?",
      options: [
        { text: "Je kind leert zichzelf kalmeren door jouw instructies op te volgen", isCorrect: false },
        { text: "Het zenuwstelsel van je kind stemt automatisch af op dat van jou", isCorrect: true },
      ],
      explanation: "Co-regulatie is geen bewust proces. Het zenuwstelsel van je kind synchroniseert automatisch met jouw ademhaling, stemtoon en houding.",
    },
    {
      question: "Waar staat de O in de STOP-methode voor?",
      options: [
        { text: "Observe — kijk wat er bij je kind gebeurt", isCorrect: true },
        { text: "Oplossen — zoek een snelle oplossing", isCorrect: false },
      ],
      explanation: "Observe: kijk naar je kind zonder direct te reageren. Wat zie je aan het lichaam, de ademhaling, de ogen? Dat vertelt je welke fase het is.",
    },
  ],
},
{
  id: "ec_mod_3",
  skill: "Emotiecoaching" as Skill,
  title: "Drie Woorden Die Alles Veranderen",
  description: "Je bent boos. Drie woorden. Simpel. Maar ze doen iets magisch in het brein van je kind. Leer de kracht van emoties een naam geven.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 3,
  content: [
    {
      type: "text" as const,
      heading: "De ruzie om het rode autootje.",
      text: "Sem (7) grist het autootje uit de handen van Noor (5). Noor gilt. Sem schreeuwt: 'Het is van mij!' Jij staat ertussen. Twee huilende kinderen. En jij hebt geen idee waar je moet beginnen.",
    },
    {
      type: "text" as const,
      heading: "Een naam geven kalmeert",
      text: "Er is iets raars met emoties: zodra je ze een naam geeft, worden ze kleiner. Niet weg. Maar hanteerbaar.\n\nAls je tegen Sem zegt: 'Je bent boos — je wilt dat autootje terug,' dan gebeurt er iets in zijn brein. Het emotionele deel (de amygdala) wordt rustiger. Het denkdeel gaat aan. Alsof je een lichtknopje omdraait.\n\nDit werkt zelfs bij kleuters. Je hoeft geen therapeut te zijn. Drie woorden volstaan. 'Je bent boos.' 'Je bent verdrietig.' 'Je bent teleurgesteld.' Dat is alles.\n\nLet op: labelen is niet bagatelliseren. 'Je bent boos' is iets heel anders dan 'Doe niet zo boos.' De eerste erkent. De tweede ontkent.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "John Gottman ontdekte dat kinderen van ouders die emoties benoemen beter presteren op school en gezondere relaties hebben. Neurowetenschapper Matthew Lieberman toonde aan dat het labelen van een emotie de amygdala met 50% kalmeert. Hij noemde het 'affect labeling' — woorden als medicijn voor het brein.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De drie stappen van emotie-labelen",
      diagramData: [
        {
          emoji: "👀",
          label: "Stap 1: Zie het",
          description: "Kijk naar lichaam en gezicht. Gebalde vuisten? Tranen? Dat vertelt je meer dan woorden. Benoem wat je ziet, niet wat je denkt.",
        },
        {
          emoji: "🏷️",
          label: "Stap 2: Benoem het",
          description: "Kort en simpel. 'Je bent boos.' 'Dat is verdrietig.' Match de intensiteit: fluister niet als je kind schreeuwt. Ga mee in de energie.",
        },
        {
          emoji: "🤲",
          label: "Stap 3: Laat het er zijn",
          description: "Niet fixen. Niet afleiding bieden. De emotie mag er zijn. 'Ja, dit is balen.' Punt. Wacht. Geef ruimte.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Sem (7) en Noor (5) vechten om een rood autootje. Sem heeft het afgepakt. Noor huilt. Sem schreeuwt dat het van hem is.",
      wrongApproach: "METEEN OPLOSSEN:\n\nPapa: 'Sem, geef dat autootje terug! Nu!'\nSem: 'Maar het is van MIJ!'\nPapa: 'Jullie moeten leren delen.'\nNoor huilt harder. Sem gooit het autootje door de kamer.\n\nNiemand voelt zich gehoord. Iedereen is boos.",
      rightApproach: "EERST LABELEN, DAN STUREN:\n\nPapa tegen Noor: 'Jij bent verdrietig. Hij pakte het af.'\nNoor knikt snikkend.\nPapa tegen Sem: 'En jij bent boos. Je wilt dat autootje.'\nSem: 'Ja! Het is van mij!'\nPapa: 'Jullie willen allebei hetzelfde ding. Dat is lastig.'\nStilte. Sem: '...Ze mag hem zo hebben.'\n\nBeide kinderen voelden zich gezien. De oplossing kwam vanzelf.",
      explanation: "Door eerst te labelen voelde elk kind zich begrepen. Het denkbrein ging aan. Sem kon zelf een oplossing bedenken. Papa hoefde niet te scheidsrechteren — alleen te benoemen.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De 3-woorden-formule. 'Je bent [emotie].' Dat is het. Niet meer. Begin daar altijd mee voordat je iets anders zegt.\n\n2. Label zonder oordeel. 'Je bent boos' werkt. 'Je hoeft niet zo boos te doen' vernietigt alles. Het verschil is erkennen versus ontkennen.\n\n3. Match de intensiteit. Als je kind schreeuwt, praat dan stevig (niet hard). Fluisteren voelt als negeren. Ga mee in hun energie en breng het dan langzaam omlaag.",
    },
    {
      type: "exercise" as const,
      title: "De Emotie-Namer",
      instructions: "Benoem vandaag drie emoties bij je kind. Gewoon hardop. Bij blije momenten ook: 'Oh, je bent echt trots op die tekening!' Het hoeft niet alleen bij driftbuien. Oefen als het makkelijk is, zodat het werkt als het moeilijk is.",
      duration: 5,
      tips: [
        "Begin bij positieve emoties — dat is makkelijker en voelt natuurlijker",
        "Als je kind je corrigeert ('Ik ben niet boos, ik ben verdrietig!') dan werkt het. Ze denken na over hun gevoel",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Werden jouw emoties als kind benoemd? Of werd er gezegd 'Stel je niet aan'?",
        "Welke emotie bij je kind vind jij het moeilijkst om te benoemen — en waarom?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Een emotie een naam geven kalmeert het brein met 50%. Drie woorden volstaan: 'Je bent boos.' Label zonder oordeel, match de intensiteit, en laat de emotie er zijn. Benoemen is niet fixen — het is erkennen.",
    },
  ],
  keyTakeaways: [
    "Emoties een naam geven kalmeert de amygdala met 50% — woorden zijn letterlijk medicijn voor het brein",
    "De 3-woorden-formule ('Je bent boos') erkent zonder te oordelen en activeert het denkbrein",
    "Labelen werkt bij alle emoties — oefen bij blije momenten zodat het werkt bij moeilijke",
  ],
  research: "Gottman (1997). Raising an Emotionally Intelligent Child; Lieberman et al. (2007). Putting Feelings into Words, Psychological Science",
  quizQuestions: [
    {
      question: "Sem (7) schreeuwt 'Het is niet eerlijk!' en is woedend. Wat zeg je eerst?",
      options: [
        { text: "'Je bent boos. Dit voelt niet eerlijk voor jou.'", isCorrect: true },
        { text: "'Het leven is niet altijd eerlijk. Daar moet je aan wennen.'", isCorrect: false },
      ],
      explanation: "Eerst labelen: 'Je bent boos.' Dit kalmeert de amygdala en opent het denkbrein. Logica en levenswijsheid komen later — of helemaal niet.",
    },
    {
      question: "Wat is het verschil tussen 'Je bent boos' en 'Doe niet zo boos'?",
      options: [
        { text: "De eerste erkent de emotie, de tweede ontkent hem", isCorrect: true },
        { text: "Er is geen verschil, ze communiceren allebei dat je het ziet", isCorrect: false },
      ],
      explanation: "'Je bent boos' erkent en kalmeert. 'Doe niet zo boos' zegt: jouw gevoel is fout. Dat voelt als afwijzing en escaleert.",
    },
    {
      question: "Je kind is verdrietig maar schreeuwt het uit. Hoe stem je je toon af?",
      options: [
        { text: "Je praat zacht en rustig om het contrast te bieden", isCorrect: false },
        { text: "Je matcht de intensiteit — stevig maar warm — en brengt het langzaam omlaag", isCorrect: true },
      ],
      explanation: "Als je fluistert terwijl je kind schreeuwt, voelen ze zich niet gehoord. Match eerst de energie, dan breng je het samen omlaag.",
    },
  ],
},
{
  id: "ec_mod_4",
  skill: "Emotiecoaching" as Skill,
  title: "Na de Storm",
  description: "De driftbui is voorbij. Iedereen ademt weer. En nu? Dit is het moment waarop je kind écht leert. Als jij het goed aanpakt.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 4,
  content: [
    {
      type: "text" as const,
      heading: "De stilte na de klap.",
      text: "Daan (8) heeft net tien minuten geschreeuwd op zijn kamer. Deur dicht. Jij stond in de gang. Nu is het stil. Je hoort hem snuffen. Wat doe je nu?\n\nDe meeste vaders denken: het is voorbij. Laten we doorgaan. Maar dit moment? Dit is waar het echte werk begint.",
    },
    {
      type: "text" as const,
      heading: "Leren gebeurt na de storm",
      text: "Tijdens een driftbui leert je kind niks. Het denkbrein is offline. Maar daarna — als de rust terugkomt — is er een gouden venster.\n\nIn dit venster kan je kind terugkijken op wat er gebeurde. Met jouw hulp bouwen ze een verhaal. 'Ik was boos. Ik gooide met spullen. Toen werd het rustiger.' Dat verhaal is geen luxe. Het is hoe het brein leert omgaan met emoties.\n\nZonder dat gesprek blijft de driftbui een chaotische ervaring. Met dat gesprek wordt het een les. Je hoeft geen therapeut te zijn. Kort is beter dan lang. Vijf zinnen is genoeg.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Dan Siegel noemt dit het 'window of integration': het moment na emotionele stress waarin het brein openstaat om de ervaring te verwerken. Door samen een verhaal te bouwen verbind je het emotionele brein met het denkbrein. Zo leert je kind zichzelf steeds beter begrijpen en reguleren.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Het herstelgesprek in drie stappen",
      diagramData: [
        {
          emoji: "🚪",
          label: "Stap 1: Kom binnen",
          description: "Wacht tot je kind echt rustig is. Klop aan. Ga op ooghoogte zitten. Niet tegenover elkaar — naast elkaar werkt beter.",
        },
        {
          emoji: "📖",
          label: "Stap 2: Vertel het verhaal samen",
          description: "'Wat gebeurde er?' Laat je kind vertellen. Vul aan waar nodig. Geen oordeel. 'Je was boos. Je gooide met je kussen. Toen werd het rustiger.'",
        },
        {
          emoji: "🤝",
          label: "Stap 3: Kijk vooruit",
          description: "Kort. Eén vraag: 'Wat zouden we volgende keer kunnen doen?' Geen preek. Eén idee samen bedenken is genoeg.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Daan (8) had een enorme driftbui omdat hij niet op zijn iPad mocht. Hij schreeuwde, sloeg op de bank en rende naar zijn kamer. Nu, twintig minuten later, is het stil.",
      wrongApproach: "DOEN ALSOF ER NIKS GEBEURD IS:\n\nPapa doet de deur open: 'Kom je eten?'\nDaan komt naar beneden. Niemand zegt iets.\nDe avond voelt ongemakkelijk.\nDaan gaat naar bed met een knoop in zijn maag.\n\nDe driftbui wordt een onverwerkte ervaring. Volgende keer: zelfde explosie.",
      rightApproach: "HET HERSTELGESPREK:\n\nPapa klopt aan. Gaat naast Daan op bed zitten.\n'Hé. Dat was heftig hè.'\nDaan: 'Ik wilde gewoon op mijn iPad...'\nPapa: 'Ja. Je was echt boos. Je sloeg op de bank en rende hierheen.'\nDaan: 'Sorry...'\nPapa: 'Boos worden mag. Slaan niet. Wat zouden we volgende keer kunnen doen?'\nDaan: 'Misschien... even naar buiten gaan?'\nPapa: 'Goed plan.'\n\nVijf minuten. Een verhaal. Een plan. Klaar.",
      explanation: "Papa hielp Daan zijn ervaring ordenen in een verhaal. Geen straf, geen preek. Door samen terug te kijken leerde Daan: ik was boos, dit deed ik, volgende keer kan ik iets anders proberen. Dat is emotionele groei.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Wacht op het juiste moment. Niet te snel. Check: is de ademhaling rustig? Zoekt je kind contact? Dan ben je in het venster.\n\n2. Ga naast ze zitten. Niet tegenover. Naast elkaar voelt als een team. Tegenover voelt als een verhoor.\n\n3. Vertel het verhaal in drie zinnen. 'Je was [emotie]. Je deed [actie]. Toen werd het [uitkomst].' Laat je kind aanvullen en corrigeren.\n\n4. Houd het kort. Vijf minuten max. Eén les per keer. Geen opsomming van alles wat fout ging.",
    },
    {
      type: "exercise" as const,
      title: "Het Mini-Herstelgesprek",
      instructions: "Na het eerstvolgende emotionele moment (hoe klein ook): ga naast je kind zitten en vertel samen het verhaal in drie zinnen. 'Je was [emotie]. Je deed [actie]. Toen werd het [rustiger].' Eindig met: 'Dat was een lastig moment, maar we kwamen eruit.'",
      duration: 5,
      tips: [
        "Begin met kleine momenten — een herstelgesprek na een kleine frustratie is makkelijker dan na een grote driftbui",
        "Als je kind niet wil praten: dat is oké. Zeg alleen 'Ik ben hier als je wilt praten' en loop weg",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Had iemand na jouw driftbuien als kind een herstelgesprek met je? Wat had dat uitgemaakt?",
        "Wat vind jij moeilijker: er zijn tijdens de storm, of het gesprek erna starten?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Het echte leren gebeurt na de driftbui, in het 'window of integration'. Een kort herstelgesprek (drie zinnen) helpt je kind de ervaring ordenen. Ga naast ze zitten, bouw samen het verhaal, en kijk kort vooruit.",
    },
  ],
  keyTakeaways: [
    "Het echte leren gebeurt NA de driftbui — in het venster waarin het denkbrein weer openstaat",
    "Een herstelgesprek van vijf minuten heeft meer impact dan elke straf of preek",
    "Samen het verhaal vertellen ('je was boos, je deed X, toen werd het rustiger') bouwt emotionele intelligentie",
  ],
  research: "Siegel & Bryson (2011). The Whole-Brain Child; Siegel (2012). The Developing Mind",
  quizQuestions: [
    {
      question: "De driftbui van Daan (8) is voorbij. Het is stil. Wat is de beste volgende stap?",
      options: [
        { text: "Even wachten en dan naast hem gaan zitten voor een kort herstelgesprek", isCorrect: true },
        { text: "Doorgaan met de avond en er niet meer over beginnen", isCorrect: false },
      ],
      explanation: "Na de storm opent het 'window of integration'. Dit is het moment waarop je kind kan leren van de ervaring — maar alleen met jouw hulp.",
    },
    {
      question: "Hoe begin je een herstelgesprek het best?",
      options: [
        { text: "Tegenover je kind gaan zitten en vragen waarom ze zo boos werden", isCorrect: false },
        { text: "Naast je kind gaan zitten en samen het verhaal vertellen: wat er gebeurde", isCorrect: true },
      ],
      explanation: "Naast elkaar voelt als een team. 'Waarom' klinkt als een verhoor. Samen het verhaal vertellen bouwt begrip zonder druk.",
    },
    {
      question: "Hoe lang moet een herstelgesprek duren?",
      options: [
        { text: "Maximaal vijf minuten met één les — kort en krachtig", isCorrect: true },
        { text: "Zo lang als nodig om alles goed te bespreken en afspraken te maken", isCorrect: false },
      ],
      explanation: "Kort is krachtiger. Eén les per keer. Een lang gesprek voelt als een preek en je kind haakt af. Vijf minuten, drie zinnen, klaar.",
    },
  ],
},
{
  id: "ec_mod_5",
  skill: "Emotiecoaching" as Skill,
  title: "De Vader Die Voelt",
  description: "Je kind vraagt: 'Papa, waarom kijk je zo boos?' Dit is geen lastig moment. Dit is een kans. Leer waarom jouw emoties tonen de beste les is.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 5,
  content: [
    {
      type: "text" as const,
      heading: "Papa, waarom kijk je zo?",
      text: "Je had een rotdag op werk. Thuiskomen. Saar (4) rent op je af. Kijkt je aan en vraagt: 'Papa, waarom kijk je zo boos?'\n\nJe eerste impuls: 'Niks aan de hand, schat.' Maar zij ziet het. Kinderen zien alles. En wat je nu doet, leert haar meer dan je denkt.",
    },
    {
      type: "text" as const,
      heading: "Jij bent het lesboek",
      text: "Kinderen leren emoties niet uit boekjes. Ze leren door te kijken. Naar jou.\n\nAls jij nooit laat zien dat je boos, verdrietig of gefrustreerd bent, leert je kind: die emoties mogen niet. Die moet je verstoppen. En dat is precies het tegenovergestelde van wat je wilt.\n\nEmotioneel modelleren heet dat. Simpel gezegd: als jij laat zien hoe je met emoties omgaat, leert je kind het vanzelf.\n\nDit betekent niet dat je je frustraties dumpt op je kind. Het betekent dat je op kindniveau deelt wat er is. 'Papa is een beetje moe en chagrijnig. Dat gaat over. Het ligt niet aan jou.' Dat is alles.\n\nDie laatste zin is cruciaal. Kinderen denken standaard dat alles aan hen ligt. Benoem dat het niet zo is.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Spiegelneuronen — ontdekt door Rizzolatti — zorgen ervoor dat kinderen emoties letterlijk 'kopiëren' van hun ouders. Gottman toonde aan dat vaders die hun eigen emoties benoemen kinderen opvoeden met een hogere emotionele intelligentie. Je hoeft het niet perfect te doen. Je hoeft het alleen te laten zien.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Drie niveaus van emotioneel modelleren",
      diagramData: [
        {
          emoji: "🙈",
          label: "Niveau 1: Verstoppen",
          description: "'Niks aan de hand.' Je kind voelt wel dat er iets is. Verwarrend signaal. Ze leren: emoties moet je verbergen. Dit is wat de meesten van ons geleerd hebben.",
        },
        {
          emoji: "🫣",
          label: "Niveau 2: Benoemen",
          description: "'Papa is moe en een beetje chagrijnig.' Eerlijk, kort, op kindniveau. Je kind leert: emoties zijn normaal en mogen er zijn. Dit is de sweet spot.",
        },
        {
          emoji: "💪",
          label: "Niveau 3: Voordoen",
          description: "'Papa is gefrustreerd. Ik ga even vijf minuten naar buiten.' Je kind ziet hoe je met emoties omgaat. Ze leren een strategie. Dit is de gouden standaard.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Je komt thuis na een stressvolle dag. Je collega was onredelijk. Je kaak is gespannen. Saar (4) rent naar je toe en vraagt: 'Papa, waarom kijk je zo boos?'",
      wrongApproach: "ONTKENNEN:\n\nPapa: 'Niks aan de hand schat. Papa is niet boos.'\nSaar kijkt onzeker. Ze voelt dat het niet klopt.\nDe hele avond is ze aanhangerig en onrustig.\n\nZe voelt de emotie maar hoort dat die er niet is. Verwarrend. En het leert haar: emoties moet je ontkennen.",
      rightApproach: "BENOEMEN EN VOORDOEN:\n\nPapa hurkt: 'Goeie vraag. Papa had een moeilijke dag op werk. Ik ben een beetje moe en chagrijnig. Het ligt niet aan jou.'\nSaar: 'Moet je huilen?'\nPapa glimlacht: 'Nee. Maar ik ga even rustig zitten met een glas water. Dan voel ik me zo beter.'\nSaar: 'Ik haal water voor je!'\n\nSaar leerde drie dingen: emoties mogen er zijn, je kunt ze benoemen, en er is een strategie.",
      explanation: "Papa liet zien dat emoties normaal zijn, dat je ze kunt benoemen, en dat je er iets mee kunt doen. Saar leerde in dertig seconden meer over emotionele intelligentie dan uit welk boekje dan ook.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Gebruik ik-zinnen. 'Ik ben moe.' 'Ik baal hiervan.' Niet: 'Jij maakt me gek.' Ik-zinnen modelleren eigenaarschap over emoties.\n\n2. Deel op kindniveau. Kort. Simpel. Geen details over werk. 'Papa had een vervelend gesprek. Ik ben een beetje gefrustreerd.' Klaar.\n\n3. Benoem je strategie. 'Ik ga even rustig zitten.' 'Ik heb een rondje nodig.' Zo leert je kind dat emoties iets zijn waar je mee omgaat — niet iets dat je overkomt.\n\n4. Zeg: 'Het ligt niet aan jou.' Altijd. Kinderen betrekken alles op zichzelf. Die ene zin haalt een enorme last van hun schouders.",
    },
    {
      type: "exercise" as const,
      title: "De Eerlijke Check-in",
      instructions: "Deel vanavond één emotie met je kind. Het mag klein zijn: 'Ik ben blij dat ik thuis ben' of 'Papa is een beetje moe vandaag.' Benoem de emotie, zeg dat het niet aan hen ligt, en laat eventueel zien wat je ermee doet.",
      duration: 3,
      tips: [
        "Begin met positieve emoties als het spannend voelt — 'Ik ben zo trots op je' telt ook",
        "Let op de reactie van je kind. Ze reageren vaak verrassend empathisch",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Hoe ging jouw vader om met zijn emoties? Wat leerde je daarvan — bewust of onbewust?",
        "Welke emotie vind jij het moeilijkst om te laten zien aan je kind?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Kinderen leren emoties door naar jou te kijken — niet door uitleg. Benoem je emoties op kindniveau en laat je strategie zien. Gebruik ik-zinnen en zeg altijd: 'Het ligt niet aan jou.'",
    },
  ],
  keyTakeaways: [
    "Kinderen leren omgaan met emoties door te kijken hoe jij het doet — jij bent het lesboek",
    "Emoties benoemen op kindniveau ('Papa is moe, het ligt niet aan jou') is krachtiger dan ontkennen",
    "Voordoen hoe je met emoties omgaat (strategie laten zien) is de gouden standaard van emotiecoaching",
  ],
  research: "Gottman (1997). Raising an Emotionally Intelligent Child; Rizzolatti & Craighero (2004). The Mirror-Neuron System, Annual Review of Neuroscience",
  quizQuestions: [
    {
      question: "Je kind vraagt: 'Papa, ben je boos?' Je bent inderdaad gefrustreerd. Wat doe je?",
      options: [
        { text: "'Ja, papa is een beetje gefrustreerd door werk. Het ligt niet aan jou. Ik ga even rustig zitten.'", isCorrect: true },
        { text: "'Nee hoor, alles is prima!' zodat je kind zich geen zorgen maakt", isCorrect: false },
      ],
      explanation: "Ontkennen is verwarrend: je kind voelt de emotie maar hoort dat die er niet is. Eerlijk benoemen op kindniveau leert ze dat emoties normaal zijn.",
    },
    {
      question: "Waarom is 'Het ligt niet aan jou' zo belangrijk?",
      options: [
        { text: "Kinderen betrekken standaard alles op zichzelf — die zin haalt die last weg", isCorrect: true },
        { text: "Het is een beleefdheidsfrase die kinderen geruststelt", isCorrect: false },
      ],
      explanation: "Jonge kinderen denken egocentrisch: als papa boos is, is dat vast mijn schuld. Expliciet zeggen dat het niet aan hen ligt voorkomt onterechte schuldgevoelens.",
    },
    {
      question: "Wat is emotioneel modelleren?",
      options: [
        { text: "Je kind uitleggen welke emoties er bestaan met plaatjes en voorbeelden", isCorrect: false },
        { text: "Laten zien hoe jij met je eigen emoties omgaat, zodat je kind het kan kopiëren", isCorrect: true },
      ],
      explanation: "Kinderen leren niet door uitleg maar door observatie. Als jij laat zien hoe je met boosheid, frustratie of verdriet omgaat, kopiëren ze dat via spiegelneuronen.",
    },
  ],
},
];
