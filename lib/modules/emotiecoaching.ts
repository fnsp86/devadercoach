import type { LearningModule, Skill } from "../types";

export const EMOTIECOACHING_MODULES: LearningModule[] = [
{
  id: "ec_mod_1",
  skill: "Emotiecoaching" as Skill,
  title: "Waarom Je Kind Niet Naar Je Luistert",
  description: "Ze schreeuwen. Jij praat. Niks komt binnen. Snap wat er in hun brein gebeurt. En waarom logica je vijand is.",
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
      text: "Neurowetenschapper Dan Siegel ontwikkelde het handmodel van het brein. Simpel en briljant: je vuist is je brein, je vingers het denkbrein. Bij stress klappen ze open. Kinderen onder de acht hebben die vingers nog niet stevig. Hun prefrontale cortex is simpelweg nog niet af. Daarom flippen ze sneller dan jij.",
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
      explanation: "Het verschil is niet wat papa zei. Het is wanneer. Eerste aanpak: logica tijdens de piek, tegen een muur praten. Tweede aanpak: wachten tot fase 3, waardoor Levi zelf tot rust en oplossing kwam.",
    },
    {
      type: "example" as const,
      situation: "Noor (4) wordt opgehaald bij de crèche. In de auto begint ze te huilen omdat haar vriendinnetje niet met haar wilde spelen. Ze schreeuwt: 'Niemand vindt mij lief!'",
      wrongApproach: "❌ GERUSTSTELLEN TIJDENS DE PIEK:\n\nPapa: 'Dat is niet waar, iedereen vindt je lief!'\nNoor: 'NIET WAAR!'\nPapa: 'Maar je hebt toch ook Lisa? En Emma?'\nNoor schreeuwt harder en schopt tegen de stoel.\nPapa zucht: 'Doe eens normaal, we zijn bijna thuis.'\n\nElke zin voelde als ontkenning van haar pijn. De storm werd groter.",
      rightApproach: "✅ WACHTEN OP FASE 3:\n\nPapa hoort het geschreeuw. Zet rustige muziek zachter. Rijdt door. Zegt niks.\nNoor huilt drie minuten. Wordt stiller.\nPapa, kalm: 'Dat deed pijn hè. Dat ze niet met je wilde spelen.'\nNoor, zacht: 'Ja... maar morgen misschien wel.'\n\nPapa wachtte de piek af. Noor verwerkte het zelf en vond haar eigen troost.",
      explanation: "In de auto kun je niet hurken of oogcontact maken. Maar je kunt wel de piek herkennen en wachten. Papa's stilte gaf Noor's brein de ruimte om van fase 2 naar fase 3 te gaan. Pas toen haar denkbrein weer online was, kwamen de woorden binnen.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Herken de fase. Opbouw, piek of herstel? Reageer alleen in fase 1 of 3.\n\n2. Wees het anker. Rustige ademhaling, ontspannen schouders, lage stem. Jouw zenuwstelsel kalmeert dat van je kind.\n\n3. Zeg minder. Tijdens de piek: niks. Tijdens herstel: korte zinnen. 'Dat was zwaar.' 'Ik snap het.'\n\n4. Geef het tijd. De storm heeft zijn eigen tijdlijn. Jouw taak is er doorheen te zijn. Niet hem te stoppen.",
    },
    {
      type: "exercise" as const,
      title: "De Fase-Spotter",
      instructions: "1. Vandaag of morgen: als je kind emotioneel wordt, pauzeer.\n2. Stel jezelf één vraag: welke fase is dit? Opbouw, piek, of herstel?\n3. Kijk naar drie signalen: stem (hoog of laag?), lichaam (gespannen of ontspannen?), ademhaling (snel of kalm?).\n4. Doe niks anders. Alleen observeren. Merk het moment op wanneer fase 2 overgaat in fase 3.",
      duration: 3,
      tips: [
        "Merk één keer op wanneer fase 2 overgaat in fase 3. Dat moment van kalmte na de storm",
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
      text: "Bij hevige emotie gaat het denkbrein offline. Je kind kan letterlijk niet luisteren. Elke storm heeft drie fasen: opbouw, piek, herstel. Praten werkt alleen in fase 1 en 3. Jouw rust is het medicijn.",
    },
  ],
  keyTakeaways: [
    "Bij hevige emotie gaat het denkbrein offline. Je kind kan niet luisteren, het is biologie",
    "Elke storm heeft drie fasen: opbouw, piek, herstel. Praten werkt alleen in fase 1 en 3",
    "Jouw rust kalmeert je kind via je lichaam (ademhaling, houding, stem), niet via je woorden",
  ],
  research: "Siegel & Bryson (2011). The Whole-Brain Child; Gottman (1997). Raising an Emotionally Intelligent Child",
  quizQuestions: [
    {
      question: "Je zoon (6) schreeuwt en slaat zijn zusje. Zij huilt. Wat is de juiste volgorde?",
      options: [
        { text: "Eerst je zoon kalmeren door zijn emotie te benoemen, dan pas naar je dochter", isCorrect: false },
        { text: "Eerst de veiligheid: je dochter beschermen en apart zetten, dan pas emotiecoaching", isCorrect: true },
        { text: "Allebei tegelijk troosten zodat niemand zich buitengesloten voelt", isCorrect: false },
      ],
      explanation: "Veiligheid gaat altijd voor emotiecoaching. Zolang iemand geslagen wordt, is er geen ruimte voor benoemen of kalmeren. Eerst de situatie veilig maken, dan pas werken aan emoties. Emotiecoaching is geen vervanging voor grenzen stellen.",
    },
    {
      question: "Welke uitspraak over het 'flipping your lid'-model is ONJUIST?",
      options: [
        { text: "Kinderen onder de acht flippen sneller omdat hun prefrontale cortex nog niet af is", isCorrect: false },
        { text: "Als het denkbrein offline gaat, kan je kind nog steeds logisch nadenken maar kiest het ervoor om dat niet te doen", isCorrect: true },
        { text: "Bij hevige emotie zijn vooral het oerbrein en het emotionele brein actief", isCorrect: false },
      ],
      explanation: "Het denkbrein gaat bij hevige stress letterlijk offline. Het is geen keuze. De prefrontale cortex wordt overschaduwd door de amygdala. Daarom werkt logica tijdens een piek niet: het brein kan die simpelweg niet verwerken.",
    },
    {
      question: "Je kind is midden in fase 2 (piek). Je zegt rustig: 'Ik snap dat je boos bent.' Wat is het GROOTSTE risico?",
      options: [
        { text: "Zelfs kalme woorden zijn extra prikkels voor een overbelast brein en kunnen de piek verlengen", isCorrect: true },
        { text: "Je kind voelt zich niet serieus genomen door zo'n korte zin", isCorrect: false },
        { text: "Je kind leert dat boosheid beloond wordt met aandacht", isCorrect: false },
      ],
      explanation: "Tijdens fase 2 is elk woord. Hoe goed bedoeld ook. Een extra signaal dat het overbelaste brein moet verwerken. Zelfs 'Ik snap je' kan op dat moment te veel zijn. Stilte en lichamelijke nabijheid zijn in de piek krachtiger dan welke woorden dan ook.",
    },
    {
      question: "Je kind is in fase 1 (opbouw): stem wordt hoger, lichaam spant. Wat werkt het best?",
      options: [
        { text: "Niks zeggen en afwachten. Je wilt het niet erger maken", isCorrect: false },
        { text: "Nu kort bijsturen: 'Ik zie dat je boos wordt. Kom, even ademhalen samen.'", isCorrect: true },
        { text: "Alvast waarschuwen voor consequenties zodat je kind leert zichzelf te beheersen", isCorrect: false },
      ],
      explanation: "Fase 1 is het enige venster waarin woorden nog binnenkomen. Afwachten klinkt geduldig, maar je mist dan het moment waarop je invloed hebt. En dreigen met consequenties voegt stress toe, wat de piek juist versnelt.",
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
      text: "Stephen Porges ontdekte met de polyvagaaltheorie dat ons zenuwstelsel drie standen heeft: veilig, gevecht/vlucht, en bevriezing. Kinderen pikken via je stem, gezicht en houding op in welke stand jij zit. Ze synchroniseren automatisch. Jouw kalmte is geen trucje. Het is hun reddingslijn.",
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
      type: "example" as const,
      situation: "Thijs (5) wil na het avondeten nog een ijsje. Papa zegt nee. Thijs gooit zich op de keukenvloer, schreeuwt en slaat met zijn vuisten op de tegels.",
      wrongApproach: "❌ PRATEN EN UITLEGGEN:\n\nPapa: 'Thijs, je hebt al een toetje gehad.'\nThijs schreeuwt harder.\nPapa: 'Als je zo doet krijg je morgen ook niks.'\nThijs: 'JIJ BENT STOM!'\nPapa: 'Naar je kamer. Nu.'\n\nElk woord gooide olie op het vuur. De avond eindigde in tranen en afstand.",
      rightApproach: "✅ STILTE OP DE KEUKENVLOER:\n\nPapa zegt niks. Gaat met zijn rug tegen het keukenkastje zitten. Op de grond. Naast Thijs.\nThijs schreeuwt. Papa ademt. Wacht.\nNa een minuut wordt het zachter. Thijs kruipt tegen papa aan.\nPapa legt een arm om hem heen. Stilte.\nThijs, zacht: 'Ik wilde zo graag...'\nPapa: 'Ja. Snap ik.'\n\nGeen woorden nodig. Papa's lijf zei genoeg.",
      explanation: "Papa ging letterlijk op het niveau van Thijs zitten. Niet boven hem, niet tegenover hem. Naast hem. Zijn rustige ademhaling was het signaal dat het zenuwstelsel van Thijs nodig had om te kalmeren. Co-regulatie in actie.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De STOP-methode. Stop wat je doet. Take a breath (adem). Observe (wat zie je bij je kind?). Proceed (reageer vanuit rust, niet vanuit haast).\n\n2. Zak door je knieën. Op ooghoogte gaan zitten verandert alles. Je wordt kleiner, minder bedreigend, meer verbonden.\n\n3. Tel tot tien in je hoofd. Niet om je boosheid te bedwingen. Maar om je kind tijd te geven. Tien seconden stilte is vaak genoeg.\n\n4. Benoem het later. Na de storm, kort: 'Dat was een lastig moment. Maar we kwamen eruit.' Klaar.",
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
        "Wat is jouw automatische reactie als je kind schreeuwt. Praten, fixen, of boos worden? Waar komt dat vandaan?",
        "Kun je je een moment herinneren dat stilte meer deed dan woorden?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Stilte is geen passiviteit. Het is de krachtigste interventie die je hebt. Je kind leent jouw rust via co-regulatie. De STOP-methode helpt je pauzeren voordat je reageert. Soms is er-zijn genoeg.",
    },
  ],
  keyTakeaways: [
    "Stilte is geen negeren. Het is de krachtigste vorm van co-regulatie die je hebt",
    "Je kind synchroniseert met jouw zenuwstelsel: jouw kalmte is hun reddingslijn",
    "De STOP-methode (Stop, Take a breath, Observe, Proceed) voorkomt escalatie",
  ],
  research: "Porges (2011). The Polyvagal Theory; Siegel & Bryson (2011). The Whole-Brain Child",
  quizQuestions: [
    {
      question: "Je kind krijst al tien minuten. Je blijft stil erbij zitten maar merkt dat je eigen hartslag omhooggaat en je kaak spant. Wat is het risico?",
      options: [
        { text: "Geen risico. Zolang je niks zegt, werkt co-regulatie altijd", isCorrect: false },
        { text: "Je kind pikt jouw spanning op via je lichaam, waardoor co-regulatie juist averechts werkt", isCorrect: true },
        { text: "Je kind raakt gewend aan het krijsen en leert dat het mag", isCorrect: false },
      ],
      explanation: "Co-regulatie werkt via je zenuwstelsel, niet via je stilte alleen. Als je mond dicht is maar je lichaam op rood staat, synchroniseert je kind met die spanning. Daarom is eerst jezelf kalmeren (ademhaling, schouders laten zakken) essentieel voordat je je kind kunt helpen.",
    },
    {
      question: "Mila (4) krijst bij de voordeur en het is 08:17. Je moet om 08:25 weg. Je hurkt rustig, zegt niks, maar na twee minuten is ze nog steeds aan het gillen. Wat nu?",
      options: [
        { text: "Blijven wachten. Co-regulatie heeft zijn eigen tijdlijn en je mag die niet doorbreken", isCorrect: false },
        { text: "De jas alvast in de auto leggen, Mila rustig optillen en zeggen: 'We gaan, je mag je jas in de auto aandoen'", isCorrect: true },
        { text: "Dreigen dat jullie dan niet naar school gaan als ze niet meewerkt", isCorrect: false },
      ],
      explanation: "Stilte is krachtig, maar geen magische oplossing die altijd werkt. Soms moet je als ouder praktisch handelen. Een warme grens ('we gaan, jas kan in de auto') combineert verbinding met leiderschap. Eindeloos wachten kan ook een vorm van vermijding zijn.",
    },
    {
      question: "Welke uitspraak over de STOP-methode klopt NIET?",
      options: [
        { text: "De S staat voor 'Stop wat je doet'. Een bewuste pauze nemen", isCorrect: false },
        { text: "De O staat voor 'Observe'. Observeer wat er bij je kind gebeurt", isCorrect: false },
        { text: "De P staat voor 'Praten'. Want na observeren moet je het probleem bespreken", isCorrect: true },
      ],
      explanation: "De P staat voor 'Proceed'. Reageer vanuit rust, niet vanuit haast. Dat hoeft geen praten te zijn. Soms is de juiste 'proceed' juist stilte, een aanraking, of simpelweg wachten. De STOP-methode gaat over pauzeren voordat je automatisch reageert.",
    },
    {
      question: "Wat gebeurt er in het zenuwstelsel bij de 'rode' stand (bevriezing)?",
      options: [
        { text: "Je kind is eindelijk kalm. Dit is het juiste moment om te praten", isCorrect: false },
        { text: "Je kind vecht of vlucht. Het heeft ruimte nodig om stoom af te blazen", isCorrect: false },
        { text: "Je kind is dichtgeklapt door overbelasting. Het lijkt rustig maar is het niet", isCorrect: true },
      ],
      explanation: "Bevriezing kan op kalmte lijken (stil, lege blik, niet reageren), maar het is het tegenovergestelde: het zenuwstelsel is zo overbelast dat het uitschakelt. Praten heeft hier geen zin. Zachte, fysieke nabijheid. Een hand op de rug, dichtbij zitten. Helpt het systeem langzaam terug naar veilig.",
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
      text: "Er is iets raars met emoties: zodra je ze een naam geeft, worden ze kleiner. Niet weg. Maar hanteerbaar.\n\nAls je tegen Sem zegt: 'Je bent boos. Je wilt dat autootje terug,' dan gebeurt er iets in zijn brein. Het emotionele deel (de amygdala) wordt rustiger. Het denkdeel gaat aan. Alsof je een lichtknopje omdraait.\n\nDit werkt zelfs bij kleuters. Je hoeft geen therapeut te zijn. Drie woorden volstaan. 'Je bent boos.' 'Je bent verdrietig.' 'Je bent teleurgesteld.' Dat is alles.\n\nLet op: labelen is niet bagatelliseren. 'Je bent boos' is iets heel anders dan 'Doe niet zo boos.' De eerste erkent. De tweede ontkent.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "John Gottman ontdekte dat kinderen van ouders die emoties benoemen beter presteren op school en gezondere relaties hebben. Neurowetenschapper Matthew Lieberman toonde aan dat het labelen van een emotie de amygdala met 50% kalmeert. Hij noemde het 'affect labeling'. Woorden als medicijn voor het brein.",
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
      explanation: "Door eerst te labelen voelde elk kind zich begrepen. Het denkbrein ging aan. Sem kon zelf een oplossing bedenken. Papa hoefde niet te scheidsrechteren. Alleen te benoemen.",
    },
    {
      type: "example" as const,
      situation: "Luna (9) komt thuis met een proefwerk: een 4. Ze smijt haar tas in de hoek en schreeuwt: 'School is stom! Ik kan toch niks!'",
      wrongApproach: "❌ METEEN OPLOSSEN:\n\nPapa: 'Een 4? Had je wel geleerd?'\nLuna: 'Hou op!'\nPapa: 'We gaan vanavond extra oefenen. Dan haal je het wel op.'\nLuna rent naar haar kamer en slaat de deur dicht.\n\nPapa ging recht naar de oplossing. Luna voelde zich dom in plaats van gehoord.",
      rightApproach: "✅ EERST LABELEN, DAN RUIMTE:\n\nPapa: 'Je bent teleurgesteld. Je had meer verwacht.'\nLuna, met tranen: 'Ik had echt mijn best gedaan...'\nPapa: 'Ja. En dan is een 4 extra balen.'\nLuna snikt. Papa wacht.\nLuna: 'Denk je dat de juf me wil helpen?'\nPapa: 'Dat denk ik wel. Zullen we het morgen vragen?'\n\nDoor de teleurstelling te benoemen ging Luna nadenken in plaats van dichtslaan.",
      explanation: "Luna zat vol schaamte en frustratie. 'Had je wel geleerd?' versterkte die schaamte. 'Je bent teleurgesteld' gaf het gevoel een naam. Daardoor kon ze zelf nadenken over een volgende stap, in plaats van zich te verstoppen.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De 3-woorden-formule. 'Je bent [emotie].' Dat is het. Niet meer. Begin daar altijd mee voordat je iets anders zegt.\n\n2. Label zonder oordeel. 'Je bent boos' werkt. 'Je hoeft niet zo boos te doen' vernietigt alles. Het verschil is erkennen versus ontkennen.\n\n3. Match de intensiteit. Als je kind schreeuwt, praat dan stevig (niet hard). Fluisteren voelt als negeren. Ga mee in hun energie en breng het dan langzaam omlaag.",
    },
    {
      type: "exercise" as const,
      title: "De Emotie-Namer",
      instructions: "1. Kies drie momenten vandaag waarop je een emotie ziet bij je kind. Blij, gefrustreerd, trots, teleurgesteld.\n2. Benoem de emotie hardop: 'Oh, je bent echt trots op die tekening!' of 'Je baalt hiervan.'\n3. Begin bij positieve emoties. Dat is makkelijker en voelt natuurlijker.\n4. Let op de reactie: corrigeert je kind je? ('Ik ben niet boos, ik ben verdrietig!') Dan werkt het. Ze denken na over hun gevoel.",
      duration: 5,
      tips: [
        "Je hoeft de emotie niet precies goed te raden. Een verkeerde gok lokt vaak het juiste antwoord uit",
        "Probeer het ook bij jezelf: benoem je eigen emotie hardop waar je kind bij is",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Werden jouw emoties als kind benoemd? Of werd er gezegd 'Stel je niet aan'?",
        "Welke emotie bij je kind vind jij het moeilijkst om te benoemen. En waarom?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Een emotie een naam geven kalmeert het brein met 50%. Drie woorden volstaan: 'Je bent boos.' Label zonder oordeel, match de intensiteit, en laat de emotie er zijn. Benoemen is niet fixen. Het is erkennen.",
    },
  ],
  keyTakeaways: [
    "Emoties een naam geven kalmeert de amygdala met 50%. Woorden zijn letterlijk medicijn voor het brein",
    "De 3-woorden-formule ('Je bent boos') erkent zonder te oordelen en activeert het denkbrein",
    "Labelen werkt bij alle emoties. Oefen bij blije momenten zodat het werkt bij moeilijke",
  ],
  research: "Gottman (1997). Raising an Emotionally Intelligent Child; Lieberman et al. (2007). Putting Feelings into Words, Psychological Science",
  quizQuestions: [
    {
      question: "Sem (7) slaat Noor (5) en schreeuwt 'Het is van mij!' Noor huilt. Jij zegt: 'Sem, je bent boos. Je wilt dat autootje terug.' Wat is hier het probleem?",
      options: [
        { text: "Niks. Labelen is altijd de juiste eerste stap bij emoties", isCorrect: false },
        { text: "Je valideert Sem terwijl Noor net geslagen is. Eerst veiligheid en grens, dan labelen", isCorrect: true },
        { text: "Je had de emotie van Noor eerst moeten labelen omdat zij het slachtoffer is", isCorrect: false },
      ],
      explanation: "Labelen is krachtig, maar niet altijd de eerste stap. Als er fysiek geweld is, moet je eerst de grens stellen ('stoppen, we slaan niet') en het slachtoffer veilig maken. Pas daarna is er ruimte om Sems emotie te benoemen. Valideren zonder grens leert kinderen dat hun emotie alles rechtvaardigt.",
    },
    {
      question: "Lieberman toonde aan dat het labelen van een emotie de amygdala kalmeert. Waarom werkt dit?",
      options: [
        { text: "Door de emotie te benoemen activeer je de prefrontale cortex, die de amygdala dempt", isCorrect: true },
        { text: "Het kind voelt zich gehoord en stopt daarom met huilen uit dankbaarheid", isCorrect: false },
        { text: "De woorden leiden het kind af van de oorspronkelijke trigger", isCorrect: false },
      ],
      explanation: "Affect labeling werkt neurologisch: het omzetten van een vaag gevoel naar een woord activeert de prefrontale cortex, die vervolgens de amygdala-activiteit vermindert met tot 50%. Het is geen afleiding of sociale reactie. Het is een breinmechanisme dat ook werkt als je je eigen emoties benoemt.",
    },
    {
      question: "Je dochter (5) huilt en je weet niet goed of ze boos, verdrietig of bang is. Wat doe je?",
      options: [
        { text: "Wachten tot je zeker weet welke emotie het is, anders label je verkeerd en maak je het erger", isCorrect: false },
        { text: "Zeggen: 'Ik zie dat je het moeilijk hebt'. Een veilig label als je de specifieke emotie niet weet", isCorrect: false },
        { text: "Een gok wagen: 'Ben je boos?'. Een verkeerde gok lokt vaak het juiste antwoord uit", isCorrect: true },
      ],
      explanation: "Je hoeft het niet precies goed te hebben. Een verkeerde gok ('Ben je boos?'. 'Nee, ik ben VERDRIETIG!') is eigenlijk ideaal: je kind corrigeert je, en dát activeert hun denkbrein nog sterker dan wanneer jij het goed raadt. Het proces van nadenken over het eigen gevoel is waardevoller dan het juiste etiket.",
    },
    {
      question: "Je kind is verdrietig maar schreeuwt het uit. Je praat zacht en kalm. Waarom kan dit averechts werken?",
      options: [
        { text: "Zacht praten geeft het signaal dat de emotie niet zo erg is. Je kind voelt zich gebagatelliseerd", isCorrect: false },
        { text: "Het contrast tussen jouw fluistertoon en hun schreeuw voelt als niet gehoord worden", isCorrect: true },
        { text: "Kinderen imiteren je toon, dus fluisteren maakt ze juist stiller. Het werkt dus wel", isCorrect: false },
      ],
      explanation: "Als je fluistert terwijl je kind schreeuwt, is de mismatch te groot. Je kind ervaart het alsof je de intensiteit van hun gevoel niet ziet. De techniek is: eerst matchen (stevig maar warm, niet hard), dan langzaam samen omlaag brengen. Zo voelen ze zich eerst erkend, en kalmeren ze mee.",
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
      text: "Tijdens een driftbui leert je kind niks. Het denkbrein is offline. Maar daarna. Als de rust terugkomt. Is er een gouden venster.\n\nIn dit venster kan je kind terugkijken op wat er gebeurde. Met jouw hulp bouwen ze een verhaal. 'Ik was boos. Ik gooide met spullen. Toen werd het rustiger.' Dat verhaal is geen luxe. Het is hoe het brein leert omgaan met emoties.\n\nZonder dat gesprek blijft de driftbui een chaotische ervaring. Met dat gesprek wordt het een les. Je hoeft geen therapeut te zijn. Kort is beter dan lang. Vijf zinnen is genoeg.",
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
          description: "Wacht tot je kind echt rustig is. Klop aan. Ga op ooghoogte zitten. Niet tegenover elkaar. Naast elkaar werkt beter.",
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
      type: "example" as const,
      situation: "Sophie (6) had een meltdown bij oma. Ze wilde niet weg en trapte papa tegen zijn schenen bij de voordeur. In de auto was ze stil. Nu zijn ze thuis.",
      wrongApproach: "❌ STRAFFEN EN DOORGAAN:\n\nPapa: 'Wat jij deed bij oma was echt niet oké. Geen tv vanavond.'\nSophie kijkt naar de grond.\nPapa: 'Trappen mag niet. Dat weet je.'\nSophie gaat naar haar kamer. Ze begrijpt de straf, maar niet haar eigen emotie.\n\nDe ervaring blijft een wolk van schaamte. Geen begrip.",
      rightApproach: "✅ SAMEN TERUGKIJKEN:\n\nPapa gaat naast Sophie op de bank zitten.\n'Hé. Bij oma was het lastig hè.'\nSophie knikt.\nPapa: 'Je wilde niet weg. Je werd boos. En toen trapte je.'\nSophie: 'Ik wilde nog bij oma blijven...'\nPapa: 'Snap ik. Weggaan was balen. Maar trappen doet pijn. Wat zou je volgende keer kunnen doen?'\nSophie: 'Zeggen dat ik nog vijf minuutjes wil?'\nPapa: 'Goed plan. Dat spreken we af.'\n\nGeen straf. Wel een les.",
      explanation: "Sophie begreep nu wat ze voelde (verdriet om weggaan), wat ze deed (trappen), en wat ze volgende keer anders kan doen (vragen om vijf minuutjes). Dat is een compleet verhaal. Straf had alleen het gedrag bestraft, niet het begrip opgebouwd.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Wacht op het juiste moment. Niet te snel. Check: is de ademhaling rustig? Zoekt je kind contact? Dan ben je in het venster.\n\n2. Ga naast ze zitten. Niet tegenover. Naast elkaar voelt als een team. Tegenover voelt als een verhoor.\n\n3. Vertel het verhaal in drie zinnen. 'Je was [emotie]. Je deed [actie]. Toen werd het [uitkomst].' Laat je kind aanvullen en corrigeren.\n\n4. Houd het kort. Vijf minuten max. Eén les per keer. Geen opsomming van alles wat fout ging.",
    },
    {
      type: "exercise" as const,
      title: "Het Mini-Herstelgesprek",
      instructions: "1. Wacht na het eerstvolgende emotionele moment tot je kind echt rustig is (ademhaling kalm, lichaam ontspannen).\n2. Ga naast je kind zitten. Niet tegenover.\n3. Vertel samen het verhaal in drie zinnen: 'Je was [emotie]. Je deed [actie]. Toen werd het [rustiger].'\n4. Eindig met: 'Dat was een lastig moment, maar we kwamen eruit.'\n5. Bij een tiener (12+): houd het nog korter. 'Dat was pittig net. Gaat het?' Laat hen het tempo bepalen.",
      duration: 5,
      tips: [
        "Begin met kleine momenten. Een herstelgesprek na een kleine frustratie is makkelijker dan na een grote driftbui",
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
    "Het echte leren gebeurt NA de driftbui. In het venster waarin het denkbrein weer openstaat",
    "Een herstelgesprek van vijf minuten heeft meer impact dan elke straf of preek",
    "Samen het verhaal vertellen ('je was boos, je deed X, toen werd het rustiger') bouwt emotionele intelligentie",
  ],
  research: "Siegel & Bryson (2011). The Whole-Brain Child; Siegel (2012). The Developing Mind",
  quizQuestions: [
    {
      question: "Daan (8) had een driftbui en sloeg op de bank. Twintig minuten later is hij rustig. Wat is het EERSTE dat je doet in het herstelgesprek?",
      options: [
        { text: "Vragen: 'Waarom sloeg je op de bank? Dat mag niet.'. De grens moet duidelijk zijn", isCorrect: false },
        { text: "Samen het verhaal vertellen: 'Je was boos. Je sloeg op de bank. Toen werd het rustiger.'", isCorrect: true },
        { text: "Zeggen: 'Ik vond het moeilijk om te zien. Hoe voel je je nu?'. Beginnen met je eigen gevoel", isCorrect: false },
      ],
      explanation: "Het herstelgesprek begint met samen het verhaal bouwen, niet met grenzen of jouw gevoelens. Door de ervaring te ordenen (emotie, actie, uitkomst) verbind je het emotionele brein met het denkbrein. De grens ('slaan mag niet') past bij stap 3 (vooruitkijken), niet bij de opening.",
    },
    {
      question: "Wat is het 'window of integration' volgens Dan Siegel?",
      options: [
        { text: "Het moment tijdens de driftbui waarop je kind het meest ontvankelijk is voor troost", isCorrect: false },
        { text: "Het moment na emotionele stress waarin het brein openstaat om de ervaring te verwerken", isCorrect: true },
        { text: "De eerste vijf minuten na thuiskomst, wanneer je kind het meest verbonden is met jou", isCorrect: false },
      ],
      explanation: "Het window of integration opent zich specifiek na een emotionele storm, niet tijdens of op willekeurige momenten. Het brein is dan klaar om de chaotische ervaring te ordenen en er betekenis aan te geven. Zonder dit gesprek blijft de driftbui een onverwerkte, verwarde ervaring.",
    },
    {
      question: "Daan wil niet praten na zijn driftbui. Je zegt: 'Dat is oké, ik ben er als je wilt praten.' Een uur later zoekt hij je op. Maar inmiddels is het bedtijd. Wat doe je?",
      options: [
        { text: "Het gesprek even voeren, ook al is het bedtijd. Hij is er nu klaar voor", isCorrect: true },
        { text: "Zeggen: 'We praten morgen, nu is het te laat'. Routine is ook belangrijk", isCorrect: false },
        { text: "Kort knuffelen en zeggen: 'Fijn dat je kwam. Slaap lekker'. Dat is genoeg", isCorrect: false },
      ],
      explanation: "Als je kind zelf het initiatief neemt om te praten, grijp dat moment. Het venster is open en je kind heeft moed verzameld. Vijf minuten slaaptijd inleveren is een kleine prijs voor een groot leermoment. Uitstellen riskeert dat het venster weer sluit en het moment voorbij is.",
    },
    {
      question: "Je doet een herstelgesprek en Daan zegt: 'Sorry.' Wat is het risico van 'sorry' als eindpunt accepteren?",
      options: [
        { text: "Er is geen risico. Sorry zeggen is precies het doel van een herstelgesprek", isCorrect: false },
        { text: "'Sorry' kan een aangeleerde reflex zijn om het gesprek te stoppen, zonder dat je kind echt begrijpt wat er gebeurde", isCorrect: true },
        { text: "Sorry zeggen is schadelijk omdat het schuldgevoel versterkt bij kinderen", isCorrect: false },
      ],
      explanation: "Veel kinderen leren dat 'sorry' het magische woord is om een ongemakkelijk gesprek te beëindigen. Het herstelgesprek draait niet om sorry, maar om begrijpen: wat voelde je, wat deed je, wat kan je volgende keer anders doen? Een kind dat het verhaal kan vertellen leert meer dan een kind dat sorry zegt.",
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
      text: "Spiegelneuronen. Ontdekt door Rizzolatti. Zorgen ervoor dat kinderen emoties letterlijk 'kopiëren' van hun ouders. Gottman toonde aan dat vaders die hun eigen emoties benoemen kinderen opvoeden met een hogere emotionele intelligentie. Je hoeft het niet perfect te doen. Je hoeft het alleen te laten zien.",
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
      wrongApproach: "ONTKENNEN:\n\nPapa: 'Niks aan de hand, schat. Papa is niet boos.'\nSaar kijkt onzeker. Ze voelt dat het niet klopt.\nDe hele avond is ze aanhangerig en onrustig.\n\nZe voelt de emotie maar hoort dat die er niet is. Verwarrend. En het leert haar: emoties moet je ontkennen.",
      rightApproach: "BENOEMEN EN VOORDOEN:\n\nPapa hurkt: 'Goeie vraag. Papa had een moeilijke dag op werk. Ik ben een beetje moe en chagrijnig. Het ligt niet aan jou.'\nSaar: 'Moet je huilen?'\nPapa glimlacht: 'Nee. Maar ik ga even rustig zitten met een glas water. Dan voel ik me zo beter.'\nSaar: 'Ik haal water voor je!'\n\nSaar leerde drie dingen: emoties mogen er zijn, je kunt ze benoemen, en er is een strategie.",
      explanation: "Papa liet zien dat emoties normaal zijn, dat je ze kunt benoemen, en dat je er iets mee kunt doen. Saar leerde in dertig seconden meer over emotionele intelligentie dan uit welk boekje dan ook.",
    },
    {
      type: "example" as const,
      situation: "Finn (10) ziet dat papa stil is tijdens het eten. Papa heeft net gehoord dat opa ziek is. Finn vraagt: 'Papa, gaat het wel? Je zegt niks.'",
      wrongApproach: "❌ ALLES BINNENHOUDEN:\n\nPapa: 'Ja hoor, gewoon moe. Eet je bord leeg.'\nFinn kijkt onzeker. Prikt in zijn eten.\nDe rest van de avond is ongemakkelijk stil.\nFinn fluistert tegen mama: 'Is papa boos op mij?'\n\nFinn voelde dat er iets was, maar hoorde dat er niks was. Verwarring werd onzekerheid.",
      rightApproach: "✅ EERLIJK OP KINDNIVEAU:\n\nPapa legt zijn vork neer. 'Goed dat je het vraagt. Papa hoorde vandaag dat opa een beetje ziek is. Daar ben ik verdrietig over.'\nFinn: 'Gaat opa dood?'\nPapa: 'Nee, de dokter helpt hem. Maar ik maak me zorgen. Dat mag.'\nFinn: 'Ik maak me ook zorgen.'\nPapa: 'Dat snap ik. Zullen we na het eten samen opa bellen?'\n\nFinn leerde: verdriet mag er zijn, je mag het delen, en je kunt er samen iets mee doen.",
      explanation: "Papa deelde zijn emotie zonder Finn te belasten met volwassen details. Hij benoemde het gevoel, stelde gerust waar nodig, en bood een strategie aan. Finn leerde dat verdriet je niet zwak maakt, maar dat je het kunt delen en er iets mee kunt doen.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Gebruik ik-zinnen. 'Ik ben moe.' 'Ik baal hiervan.' Niet: 'Jij maakt me gek.' Ik-zinnen modelleren eigenaarschap over emoties.\n\n2. Deel op kindniveau. Kort. Simpel. Geen details over werk. 'Papa had een vervelend gesprek. Ik ben een beetje gefrustreerd.' Klaar.\n\n3. Benoem je strategie. 'Ik ga even rustig zitten.' 'Ik heb een rondje nodig.' Zo leert je kind dat emoties iets zijn waar je mee omgaat. Niet iets dat je overkomt.\n\n4. Zeg: 'Het ligt niet aan jou.' Altijd. Kinderen betrekken alles op zichzelf. Die ene zin haalt een enorme last van hun schouders.\n\n5. Tiener-variant. Bij een puber (12+) kun je iets meer delen: 'Mijn baas was onredelijk vandaag, dat frustreert me.' Tieners waarderen eerlijkheid en voelen zich serieus genomen als je ze behandelt als gesprekspartner.",
    },
    {
      type: "exercise" as const,
      title: "De Eerlijke Check-in",
      instructions: "Deel vanavond één emotie met je kind. Het mag klein zijn: 'Ik ben blij dat ik thuis ben' of 'Papa is een beetje moe vandaag.' Benoem de emotie, zeg dat het niet aan hen ligt, en laat eventueel zien wat je ermee doet.",
      duration: 3,
      tips: [
        "Begin met positieve emoties als het spannend voelt. 'Ik ben zo trots op je' telt ook",
        "Let op de reactie van je kind. Ze reageren vaak verrassend empathisch",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Hoe ging jouw vader om met zijn emoties? Wat leerde je daarvan. Bewust of onbewust?",
        "Welke emotie vind jij het moeilijkst om te laten zien aan je kind?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Kinderen leren emoties door naar jou te kijken. Niet door uitleg. Benoem je emoties op kindniveau en laat je strategie zien. Gebruik ik-zinnen en zeg altijd: 'Het ligt niet aan jou.'",
    },
  ],
  keyTakeaways: [
    "Kinderen leren omgaan met emoties door te kijken hoe jij het doet. Jij bent het lesboek",
    "Emoties benoemen op kindniveau ('Papa is moe, het ligt niet aan jou') is krachtiger dan ontkennen",
    "Voordoen hoe je met emoties omgaat (strategie laten zien) is de gouden standaard van emotiecoaching",
  ],
  research: "Gottman (1997). Raising an Emotionally Intelligent Child; Rizzolatti & Craighero (2004). The Mirror-Neuron System, Annual Review of Neuroscience",
  quizQuestions: [
    {
      question: "Je bent woedend op je kind omdat het expres iets kapot heeft gemaakt. Je voelt je boosheid opkomen. Wat is de beste toepassing van emotioneel modelleren?",
      options: [
        { text: "Je boosheid eerlijk tonen en zeggen: 'Ik ben echt boos op je!'. Dat is authentiek", isCorrect: false },
        { text: "Zeggen: 'Ik merk dat ik heel boos word. Ik ga even vijf minuten naar de keuken voordat ik iets zeg.'", isCorrect: true },
        { text: "Je boosheid inslikken en rustig uitleggen waarom het niet mag. Emoties tonen aan kinderen escaleert", isCorrect: false },
      ],
      explanation: "Emotioneel modelleren betekent niet elke emotie ongefilterd uiten, maar laten zien hoe je ermee omgaat. 'Ik ben boos en ik neem even pauze' is de gouden standaard: je erkent de emotie, je laat een strategie zien, en je voorkomt dat je vanuit boosheid reageert. Rauw uiten is geen modelleren. Het is ontladen.",
    },
    {
      question: "Je komt moe thuis en Saar (4) vraagt: 'Papa, waarom kijk je zo boos?' Welk detail vergeten de meeste vaders bij hun antwoord?",
      options: [
        { text: "De emotie benoemen: 'Papa is moe'", isCorrect: false },
        { text: "Expliciet zeggen: 'Het ligt niet aan jou'", isCorrect: true },
        { text: "Een strategie laten zien: 'Ik ga even zitten'", isCorrect: false },
      ],
      explanation: "Alle drie de elementen zijn belangrijk, maar 'het ligt niet aan jou' is wat de meeste ouders vergeten en wat het hardst nodig is. Kinderen denken egocentrisch: als papa boos kijkt, is dat vast mijn schuld. Die ene zin voorkomt een last die je kind anders onzichtbaar meedraagt.",
    },
    {
      question: "Welke uitspraak over emotioneel modelleren is ONJUIST?",
      options: [
        { text: "Hoe meer emoties je deelt met je kind, hoe hoger hun emotionele intelligentie wordt", isCorrect: true },
        { text: "Kinderen kopiëren je omgang met emoties via spiegelneuronen. Automatisch en onbewust", isCorrect: false },
        { text: "Ontkennen ('niks aan de hand') is verwarrender dan eerlijk zijn op kindniveau", isCorrect: false },
      ],
      explanation: "Meer delen is niet altijd beter. Kinderen zijn geen therapeuten. Details over je ruzie met je baas, financiële stress of relatieproblemen horen niet op hun bord. De kunst is selectief delen op kindniveau: de emotie benoemen en een strategie laten zien, zonder het kind te belasten met de volwassen context.",
    },
    {
      question: "Je tiener (14) zegt: 'Je doet alsof alles prima is, maar ik zie toch dat het niet zo is.' Wat werkt hier het best?",
      options: [
        { text: "Volhouden dat het goed gaat. Tieners hoeven zich geen zorgen te maken over jouw problemen", isCorrect: false },
        { text: "Alles eerlijk vertellen, inclusief de details. Tieners waarderen transparantie en voelen zich serieus genomen", isCorrect: false },
        { text: "Erkennen dat het klopt en iets meer context geven dan bij een kleuter: 'Je hebt gelijk. Ik had een lastig gesprek op werk.'", isCorrect: true },
      ],
      explanation: "Tieners doorzien ontkenning en verliezen daardoor vertrouwen in je eerlijkheid. Maar alles vertellen maakt ze parentificatie-kwetsbaar. Ze gaan voor jou zorgen in plaats van andersom. De middenweg is leeftijdsaangepast delen: eerlijk over de emotie, beperkt over de details.",
    },
  ],
},
];
