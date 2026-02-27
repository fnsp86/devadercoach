import type { LearningModule, Skill } from "../types";

export const AANWEZIGHEID_MODULES: LearningModule[] = [
{
  id: "aa_mod_1",
  skill: "Aanwezigheid" as Skill,
  title: "Je Bent Er Wel. Maar Ben Je Er Echt?",
  description: "Saar laat haar tekening zien. Je knikt. Maar je ogen zitten op je scherm. Ze voelt het. En het doet meer dan je denkt.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 1,
  content: [
    {
      type: "text" as const,
      heading: "Je zit naast haar. Maar je bent er niet.",
      text: "Saar (5) rent naar je toe met een tekening. 'Papa, kijk!' Je knikt. 'Mooi, schat.' Maar je duim scrollt door. Ze loopt weg. Zonder iets te zeggen.\n\nDat stille weglopen? Dat is erger dan schreeuwen.",
    },
    {
      type: "text" as const,
      heading: "Aanwezig zijn is geen locatie",
      text: "Je kunt de hele avond op de bank zitten naast je kind en toch compleet afwezig zijn. Aanwezigheid is geen fysiek gegeven. Het is een mentale keuze.\n\nKinderen hebben een zesde zintuig voor aandacht. Ze voelen het verschil tussen een vader die kijkt en een vader die ziet. Die eerste checkt een vakje af. Die tweede maakt verbinding.\n\nHet gekke is: halfslachtig aanwezig zijn is vaak schadelijker dan eerlijk afwezig zijn. Een kind dat weet dat papa aan het werk is, kan dat plaatsen. Een kind dat voelt dat papa er half is? Dat leert: ik ben niet interessant genoeg.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Psycholoog Ed Tronick deed het beroemde 'Still Face Experiment'. Een moeder speelt normaal met haar baby. Dan stopt ze met reageren. Zelfde gezicht, maar blanco. Binnen seconden raakt de baby in paniek. Tronick bewees: emotionele onbereikbaarheid is voor kinderen net zo stressvol als fysieke afwezigheid.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Drie niveaus van aanwezigheid",
      diagramData: [
        {
          emoji: "👻",
          label: "Spook-aanwezig",
          description: "Je bent in de kamer maar in je hoofd ergens anders. Telefoon, werk, zorgen. Je kind praat maar je hoort ruis.",
        },
        {
          emoji: "🤖",
          label: "Robot-aanwezig",
          description: "Je knikt, je zegt 'hmm'. Automatische piloot. Je lichaam doet mee, maar je hart is uit.",
        },
        {
          emoji: "🔥",
          label: "Echt aanwezig",
          description: "Oogcontact. Nieuwsgierigheid. Je voelt wat zij voelt. Je kind merkt: papa is er helemaal.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Saar (5) heeft op school een vlinder getekend. Ze rent naar papa die op de bank zit met zijn telefoon. 'Papa! Kijk! Een vlinder!' Papa kijkt half op.",
      wrongApproach: "HALF KIJKEN, HALF SCROLLEN:\n\nPapa kijkt 1 seconde op.\n'Mooi schat. Goed gedaan.'\nOgen gaan terug naar scherm.\nSaar: 'Maar papa, kijk dan! Ze heeft rode vleugels!'\nPapa: 'Ja, heel mooi. Ga maar even spelen.'\nSaar loopt weg. Stopt de tekening in de prullenbak.\n\nPapa zei de 'juiste' woorden. Maar Saar voelde: hij heeft het niet gezien.",
      rightApproach: "TELEFOON WEG, OGEN OPEN:\n\nPapa legt telefoon face-down op tafel.\nDraait zich naar Saar. 'Laat eens zien!'\nPakt de tekening met twee handen.\n'Rode vleugels! Waarom rood?'\nSaar, trots: 'Omdat rode vlinders het snelst zijn.'\nPapa: 'Dat wist ik niet. Wat een gave vlinder.'\nSaar plakt de tekening op de koelkast.\n\nZelfde vader. Zelfde kind. Tien seconden verschil. Compleet andere boodschap.",
      explanation: "Het verschil was niet de tijd. Het waren tien seconden. Het verschil was de kwaliteit van die seconden. Saar voelde in het eerste geval: ik ben minder belangrijk dan dat scherm. In het tweede geval: papa vindt mij interessant.",
    },
    {
      type: "example" as const,
      situation: "Finn (7) bouwt op zondagochtend een Lego-kasteel op de keukentafel. Papa zit ernaast met zijn laptop, bezig met een werkmail. 'Papa, kijk, er komt een ophaalbrug!' Papa kijkt niet op.",
      wrongApproach: "❌ OP AUTOMATISCHE PILOOT:\n\nPapa, ogen op scherm: 'Gaaf, jongen.'\nFinn: 'Maar wil je zien hoe hij opengaat?'\nPapa: 'Zo meteen, even dit afmaken.'\nTien minuten later klapt Finn de doos dicht.\nPapa: 'Hé, was je al klaar?'\nFinn: 'Maakt niet uit.'\n\nPapa was erbij. Maar Finn bouwde alleen.",
      rightApproach: "✅ LAPTOP DICHT, HANDEN VRIJ:\n\nPapa klapt zijn laptop dicht.\n'Een ophaalbrug? Laat zien.'\nFinn laat trots het mechanisme zien.\nPapa: 'Hoe heb je dat bedacht?'\nFinn straalt: 'Ik heb het zelf uitgevonden!'\nPapa: 'Dat is echt knap. Mag ik de ridders erdoor laten lopen?'\nZe spelen vijf minuten samen.\n\nVijf minuten. Maar Finn voelde: papa vindt mijn wereld belangrijk.",
      explanation: "Finn vroeg niet om een uur spelen. Hij vroeg om gezien te worden in iets waar hij trots op was. De eerste papa miste dat moment door 'zo meteen' te zeggen. De tweede papa koos ervoor om vijf minuten écht te kijken. Dat is het verschil tussen aanwezig zijn en er alleen maar zitten.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De 3-minuten scan. Voordat je de kamer inloopt waar je kind is: stop. Adem drie keer. Laat je werkdag los. Loop dan pas naar binnen.\n\n2. Telefoon face-down ritueel. Als je thuiskomt: telefoon ondersteboven op een vaste plek. Niet in je broekzak. Uit zicht = uit gedachten.\n\n3. De oogcontact-check. Stel jezelf drie keer per avond de vraag: wanneer heb ik mijn kind voor het laatst echt in de ogen gekeken? Geen snelle blik. Echt gekeken.",
    },
    {
      type: "exercise" as const,
      title: "De Aanwezigheids-Reset",
      instructions: "1. Vanavond: wacht tot je kind iets tegen je zegt.\n2. Leg alles uit je handen. Telefoon, afstandsbediening, alles.\n3. Draai je hele lichaam naar je kind.\n4. Maak oogcontact. Kijk echt.\n5. Luister tot je kind klaar is met praten. Reageer pas daarna.\n6. Eén keer vanavond. Dat is alles. Merk het verschil op.",
      duration: 3,
      tips: [
        "Let op het gezicht van je kind als je je volle aandacht geeft. Je zult het verschil zien",
        "Voel je eigen weerstand als je je telefoon weglegt. Dat is normaal. Doe het toch.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Hoeveel van je avonden met je kind ben je echt aanwezig. En hoeveel ben je 'spook-aanwezig'?",
        "Wat zou je kind zeggen als iemand vraagt: 'Is papa er als je thuiskomt?'",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Fysiek aanwezig zijn zonder mentaal aanwezig te zijn is voor kinderen verwarrender dan eerlijke afwezigheid. Kinderen voelen het verschil tussen kijken en zien. Eén moment van echte aandacht doet meer dan een uur op de automatische piloot.",
    },
  ],
  keyTakeaways: [
    "Half aanwezig zijn is voor kinderen schadelijker dan eerlijk afwezig zijn. Ze voelen het verschil",
    "Aanwezigheid is geen locatie maar een keuze: oogcontact, nieuwsgierigheid, je kind echt zien",
    "Kleine rituelen zoals telefoon face-down en een 3-minuten scan maken het verschil tussen spook-papa en echte papa",
  ],
  research: "Tronick (1978). Still Face Experiment; Radesky et al. (2014). Patterns of mobile device use by caregivers and children during meals",
  quizQuestions: [
    {
      question: "Wat is het meest verwarrende voor een kind?",
      options: [
        { text: "Een ouder die eerlijk zegt: 'Ik moet nog even werken, over tien minuten ben ik er voor je'", isCorrect: false },
        { text: "Een ouder die naast je zit, knikt en 'hmm' zegt, maar mentaal ergens anders is", isCorrect: true },
        { text: "Een ouder die fysiek afwezig is maar later belt om te vragen hoe de dag was", isCorrect: false },
      ],
      explanation: "Halfslachtige aanwezigheid is schadelijker dan eerlijke afwezigheid. Een kind dat weet dat papa werkt, kan dat plaatsen. Een kind dat voelt dat papa er 'half' is, leert: ik ben niet interessant genoeg. Dat ondermijnt het zelfbeeld.",
    },
    {
      question: "Welke uitspraak over het Still Face Experiment is ONJUIST?",
      options: [
        { text: "Baby's raakten al binnen seconden in paniek toen de moeder stopte met reageren", isCorrect: false },
        { text: "Het experiment bewees dat kinderen emotionele onbereikbaarheid net zo stressvol vinden als fysieke afwezigheid", isCorrect: false },
        { text: "De baby's herstelden niet na het experiment, zelfs niet als de moeder weer normaal reageerde", isCorrect: true },
      ],
      explanation: "In werkelijkheid herstelden de baby's wél toen de moeder weer responsief werd. Dat is juist het hoopvolle van het onderzoek. Het toont aan dat korte breuken in verbinding hersteld kunnen worden. Maar de snelheid waarmee stress optrad, bewees hoe gevoelig kinderen zijn voor emotionele onbereikbaarheid.",
    },
    {
      question: "Je 'multitaskt': je speelt met je kind en checkt tussendoor je mail. Wat gebeurt er in je brein?",
      options: [
        { text: "Je brein verdeelt zijn aandacht efficiënt over beide taken", isCorrect: false },
        { text: "Je brein wisselt razendsnel tussen taken, en bij elke wissel verlies je verbinding", isCorrect: true },
        { text: "Je brein geeft automatisch voorrang aan de sociale interactie met je kind", isCorrect: false },
      ],
      explanation: "Neurowetenschappelijk onderzoek toont aan dat echte multitasking niet bestaat. Je brein schakelt snel heen en weer, en bij elke wissel is er een 'attention residue'. Een restje aandacht dat achterblijft bij de vorige taak. Je kind voelt die micro-onderbrekingen feilloos.",
    },
    {
      question: "Wat gebeurt er als je kind herhaaldelijk ervaart dat je maar half luistert?",
      options: [
        { text: "Je kind gaat harder schreeuwen en meer aandacht eisen", isCorrect: false },
        { text: "Je kind past zich aan en leert zichzelf te vermaken", isCorrect: false },
        { text: "Je kind stopt geleidelijk met dingen delen. Niet boos, gewoon stil", isCorrect: true },
      ],
      explanation: "De gevaarlijkste reactie is niet protest maar berusting. Kinderen die leren dat hun verhalen niet 'landen', stoppen met vertellen. Dat stille terugtrekken is lastiger te herkennen dan boosheid, maar het signaleert een diepere breuk in de verbinding.",
    },
  ],
},
{
  id: "aa_mod_2",
  skill: "Aanwezigheid" as Skill,
  title: "Luisteren Zonder Te Fixen",
  description: "Daan vertelt over een ruzie op school. Jij hebt meteen drie oplossingen. Maar hij wilde er niet één. Hij wilde dat je luisterde.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 2,
  content: [
    {
      type: "text" as const,
      heading: "Hij praat. Jij fixt. Hij stopt met praten.",
      text: "Daan (8) komt thuis. Stille blik. 'Sem wil niet meer naast me zitten.' Jij denkt: makkelijk. 'Ga morgen gewoon naast iemand anders zitten.' Daan klapt dicht. Gaat naar zijn kamer.\n\nJe had de perfecte oplossing. Maar hij vroeg er niet om.",
    },
    {
      type: "text" as const,
      heading: "Luisteren is geen wachten tot jij mag praten",
      text: "Vaders zijn fixers. We horen een probleem en ons brein schakelt meteen naar oplossingstand. Dat is op je werk handig. Bij je kind is het een ramp.\n\nWant als Daan zegt 'Sem wil niet meer naast me zitten', dan zegt hij eigenlijk: 'Ik voel me alleen. Ik voel me afgewezen. Is er iets mis met mij?' Daar past geen oplossing op. Daar past erkenning op.\n\nEcht luisteren is niet passief. Het is actief ontvangen. Je mond houden terwijl je brein schreeuwt om een oplossing. Dat is moeilijker dan praten. Maar het is precies wat je kind nodig heeft.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "John Gottman ontdekte twee soorten ouders: emotion dismissers (die emoties wegwuiven) en emotion coaches (die emoties begeleiden). Kinderen van emotion coaches zijn beter in vriendschappen, schoolprestaties en zelfregulatie. De sleutel? Carl Rogers' 'actief luisteren': herhalen, valideren, doorvragen. In die volgorde.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De drie stappen van echt luisteren",
      diagramData: [
        {
          emoji: "🪞",
          label: "Herhaal",
          description: "Zeg terug wat je hoort. 'Dus Sem wil niet meer naast je zitten.' Geen oordeel. Geen advies. Alleen spiegelen.",
        },
        {
          emoji: "💛",
          label: "Valideer",
          description: "Erken het gevoel. 'Dat klinkt eenzaam.' Je hoeft het niet op te lossen. Alleen te zien.",
        },
        {
          emoji: "🔑",
          label: "Vraag door",
          description: "Stel één open vraag. 'Hoe voelde dat?' Niet 'waarom'. Dat voelt als verhoor. 'Hoe' of 'wat' werkt beter.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Daan (8) komt thuis van school. Normaal rent hij naar buiten. Nu ploft hij op de bank. 'Sem wil niet meer naast me zitten. Hij zit nu naast Lars.'",
      wrongApproach: "DIRECT FIXEN:\n\nPapa: 'Ga morgen gewoon naast Tim zitten.'\nDaan: 'Dat wil ik niet.'\nPapa: 'Dan moet je aan de juf vragen of ze de plekken wisselt.'\nDaan: 'Laat maar.'\nPapa: 'Je moet er niet zo moeilijk over doen.'\nDaan gaat naar zijn kamer. Deur dicht.\n\nDrie oplossingen. Nul verbinding. Daan voelde: papa begrijpt het niet.",
      rightApproach: "LUISTEREN VOOR FIXEN:\n\nPapa gaat naast hem zitten. Stil.\nDaan: 'Sem zit nu naast Lars.'\nPapa: 'Dus Sem is van plek veranderd. Dat is balen.'\nDaan: 'Ja. We deden altijd alles samen.'\nPapa: 'Klinkt alsof je hem mist.'\nDaan, zacht: 'Ja.'\nStilte.\nDaan: 'Misschien kan ik morgen vragen waarom.'\n\nPapa gaf nul oplossingen. Daan vond er zelf één.",
      explanation: "In het eerste gesprek gaf papa drie adviezen. Daan voelde zich niet gehoord en klapte dicht. In het tweede gesprek spiegelde papa alleen en gaf ruimte. Daan voelde zich gezien en kwam zelf tot actie.",
    },
    {
      type: "example" as const,
      situation: "Noor (11) komt na hockeytraining de auto in. Ze gooit haar tas op de achterbank en staart uit het raam. 'De coach zette me op de bank. De hele tweede helft.'",
      wrongApproach: "❌ METEEN OPLOSSEN:\n\nPapa: 'Dan moet je volgende keer harder trainen.'\nNoor: 'Ik train al hard.'\nPapa: 'Misschien moet ik even met de coach praten.'\nNoor: 'Nee! Doe dat niet!'\nPapa: 'Je moet het niet persoonlijk nemen.'\nNoor zet haar oortjes in. Gesprek voorbij.\n\nDrie oplossingen aangeboden. Noor voelde: papa luistert niet, hij wil het wegmaken.",
      rightApproach: "✅ EERST VOELEN, DAN PRATEN:\n\nPapa rijdt. Zegt niks. Wacht.\nNoor: 'De hele tweede helft, papa.'\nPapa: 'De hele helft op de bank. Dat is klote.'\nNoor: 'Ja. En Lisa mocht wél spelen. Die is niet eens beter.'\nPapa: 'Dat voelt oneerlijk.'\nStilte.\nNoor: 'Ik ga vrijdag gewoon extra hard spelen. Dan kan hij niet om me heen.'\n\nPapa gaf geen advies. Noor vond haar eigen vechtlust.",
      explanation: "Noor had geen coach-advies nodig van haar vader. Ze had iemand nodig die begreep hoe het voelde. Door te spiegelen ('dat is klote') en te valideren ('dat voelt oneerlijk') gaf papa haar de ruimte om zelf door de frustratie heen te komen. De oplossing kwam van háár, en daardoor geloofde ze er ook in.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De 3-zinnen oefening. Bij elk gesprek met je kind: begin met drie zinnen zonder advies. Herhaal. Valideer. Vraag door. Pas daarna mag je fixen. Als ze erom vragen.\n\n2. De 10-seconden regel. Als je kind iets vertelt: wacht 10 seconden voordat je reageert. Tel in je hoofd. Vaak vult je kind de stilte zelf.\n\n3. Vervang 'waarom' door 'hoe'. 'Waarom ben je boos?' voelt als verhoor. 'Hoe voelt dat?' opent een deur.\n\n4. Check jezelf. Merk je dat je in je hoofd al een oplossing formuleert? Stop. Terug naar luisteren.",
    },
    {
      type: "exercise" as const,
      title: "De Fix-Stopper",
      instructions: "1. Vanavond: wacht tot je kind iets vertelt over school, vrienden of hun dag.\n2. Stap 1. Herhaal: 'Dus [wat je kind zei].' Geen oordeel, geen advies.\n3. Stap 2. Valideer: 'Dat klinkt [emotie].' Eén zin.\n4. Stap 3. Vraag door: 'Hoe voelde dat?' of 'Wat deed je toen?' Eén open vraag.\n5. Geef geen enkel advies. Zelfs niet als je handen jeuken.\n6. Bij een tiener (12+): dezelfde drie stappen, maar geef extra ruimte voor stilte. Tieners hebben soms tien seconden nodig voor ze verder praten. Wacht.",
      duration: 5,
      tips: [
        "Je zult merken dat je handen jeuken om te fixen. Dat is normaal. Adem door en luister verder.",
        "Als je kind zelf een oplossing bedenkt, heb je het goed gedaan.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Wanneer was de laatste keer dat je kind iets vertelde en jij meteen een oplossing gaf. Hoe reageerde je kind?",
        "Wat zou er veranderen als je kind weet dat het bij jou veilig is om te voelen zonder dat het 'opgelost' moet worden?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Luisteren is niet wachten tot je mag praten. Het is actief ontvangen zonder te fixen. Gebruik de drie stappen: herhaal, valideer, vraag door. Kinderen die zich gehoord voelen, vinden vaak zelf de oplossing.",
    },
  ],
  keyTakeaways: [
    "Luisteren is niet wachten tot je mag praten. Het is actief ontvangen zonder direct te fixen",
    "De drie stappen: herhaal wat je hoort, valideer het gevoel, stel één open vraag",
    "Kinderen die zich gehoord voelen komen vaker zelf met een oplossing dan kinderen die advies krijgen",
  ],
  research: "Gottman (1997). Raising an Emotionally Intelligent Child; Rogers (1951). Client-Centered Therapy; Faber & Mazlish (1980). How to Talk So Kids Will Listen",
  quizQuestions: [
    {
      question: "Je zoon vertelt dat zijn vriend niet meer naast hem wil zitten. Jij herhaalt: 'Dus hij wil niet meer naast je zitten.' Waarom werkt dat?",
      options: [
        { text: "Het geeft je tijd om een goede oplossing te bedenken", isCorrect: false },
        { text: "Het laat je kind merken dat het gehoord is, waardoor het veilig voelt om verder te praten", isCorrect: true },
        { text: "Het laat je kind inzien dat het probleem eigenlijk meevalt", isCorrect: false },
      ],
      explanation: "Herhalen is geen trucje om tijd te rekken. Het spiegelt het kind en bevestigt: ik heb je gehoord. Dat gevoel van gezien worden opent de deur voor meer. Het kind voelt ruimte om dieper te gaan in plaats van dicht te klappen.",
    },
    {
      question: "Gottman onderscheidt 'emotion dismissers' en 'emotion coaches'. Welk risico lopen kinderen van emotion coaches?",
      options: [
        { text: "Ze worden te afhankelijk van hun ouders om emoties te verwerken", isCorrect: false },
        { text: "Er is geen significant risico. Ze scoren beter op vrijwel alle sociaal-emotionele maten", isCorrect: true },
        { text: "Ze worden overgevoelig en kunnen minder goed tegen tegenslag", isCorrect: false },
      ],
      explanation: "Contra-intuïtief misschien, maar kinderen van emotion coaches worden niet 'zachter'. Ze ontwikkelen juist betere zelfregulatie, sterkere vriendschappen en betere schoolprestaties. Emoties erkennen maakt kinderen weerbaarder, niet kwetsbaarder.",
    },
    {
      question: "Je dochter (10) vertelt dat ze gepest wordt. Je wilt direct de school bellen. Wat is het risico?",
      options: [
        { text: "Ze voelt zich niet gehoord en stopt de volgende keer met vertellen", isCorrect: true },
        { text: "Er is geen risico. Bij pesten moet je altijd meteen handelen", isCorrect: false },
        { text: "Ze leert dat ze problemen niet zelf kan oplossen", isCorrect: false },
      ],
      explanation: "Direct handelen voelt als de juiste vaderreflex, maar je slaat de eerste cruciale stap over: luisteren. Als je kind voelt dat vertellen meteen leidt tot actie die zij niet heeft gevraagd, leert ze: het is onveilig om te delen. Luister eerst, handel daarna. En vraag of ze wil dat je iets doet.",
    },
    {
      question: "Je kind vertelt iets en valt stil. Jij wacht 10 seconden zonder iets te zeggen. Wat gebeurt er meestal?",
      options: [
        { text: "Het kind raakt ongemakkelijk en sluit af", isCorrect: false },
        { text: "Het kind vult de stilte zelf en gaat dieper dan het eerste verhaal", isCorrect: true },
        { text: "Er verandert niets. Kinderen hebben woorden nodig om door te praten", isCorrect: false },
      ],
      explanation: "Stilte is geen leegte maar ruimte. Kinderen (en volwassenen) vullen stilte vrijwel altijd zelf in. Het tweede wat ze zeggen is vaak echter en kwetsbaarder dan het eerste. De 10-seconden regel voelt onwennig, maar het is een van de krachtigste luistertools die er is.",
    },
  ],
},
{
  id: "aa_mod_3",
  skill: "Aanwezigheid" as Skill,
  title: "De Telefoon Op Tafel",
  description: "Het eten is warm. Mila vertelt over haar dag. Dan buzzt je telefoon. Je ogen schieten naar het scherm. En Mila stopt midden in haar zin.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 3,
  content: [
    {
      type: "text" as const,
      heading: "Eén buzz. En je bent weg.",
      text: "Mila (4) vertelt over de vlinder die ze in de tuin zag. Halverwege haar verhaal buzzt je telefoon. Je ogen schieten opzij. Even maar. Twee seconden. Als je terugkijkt is Mila stil.\n\n'Laat maar papa.' Ze prikt in haar eten. Het moment is voorbij.",
    },
    {
      type: "text" as const,
      heading: "Je telefoon is de grootste vijand van verbinding",
      text: "Het probleem is niet dat je je telefoon gebruikt. Het probleem is dat je telefoon altijd aanwezig is. Op tafel. In je broekzak. Buzzing. Knipperend. Je brein weet dat hij er is, zelfs als je hem niet aanraakt.\n\nLinda Stone noemt dit 'Continuous Partial Attention': je bent nooit helemaal ergens, omdat een deel van je hersenen altijd wacht op de volgende notificatie. Je denkt dat je multitaskt. Je brein wisselt alleen heel snel. En bij elke wissel verlies je verbinding.\n\nVoor je kind voelt het alsof ze concurreren met een onzichtbare rivaal. En die rivaal wint. Altijd.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Onderzoekers noemen het 'phubbing': phone + snubbing. Studies van Baylor University tonen aan dat phubbing bij kinderen leidt tot meer gedragsproblemen en minder emotionele verbinding. Eén onderzoek vond dat 72% van de kinderen aangeeft te moeten concurreren met de telefoon van hun ouder.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Wat je telefoon doet met verbinding",
      diagramData: [
        {
          emoji: "📱",
          label: "De buzz",
          description: "Eén notificatie breekt je aandacht. Je brein heeft 23 minuten nodig om volledig terug te focussen. Je kind heeft die 23 minuten niet.",
        },
        {
          emoji: "👀",
          label: "De blik",
          description: "Zelfs als je je telefoon niet aanraakt: je ogen schieten ernaar. Je kind ziet die micro-blik. En vertaalt: ik ben minder belangrijk.",
        },
        {
          emoji: "🧱",
          label: "De muur",
          description: "Na genoeg van die momenten stopt je kind met proberen. Niet boos. Niet verdrietig. Gewoon stil. Dat is het gevaarlijkste stadium.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Dinsdag, 18:00. Het gezin zit aan tafel. Mila (4) vertelt over de vlinder in de schooltuin. Papa's telefoon ligt naast zijn bord. Een WhatsApp-notificatie van een collega.",
      wrongApproach: "EVEN SNEL CHECKEN:\n\nPapa pakt de telefoon. 'Even kijken, schat.'\nTypt snel een antwoord.\nMila wacht.\nPapa: 'Oké, wat zei je?'\nMila: 'Niks. Maakt niet uit.'\nPapa: 'Jawel, vertel!'\nMila: 'Nee.'\n\nDertig seconden telefoon. Het hele verhaal weg. En een kind dat leert: ik moet wachten tot het scherm klaar is.",
      rightApproach: "DE TELEFOON IS ER NIET:\n\nDe telefoon ligt in de keukenla. Niet op tafel. Niet in zicht.\nMila: 'Papa! Er was een vlinder! Met gele stippen!'\nPapa: 'Gele stippen? Hoe groot was-ie?'\nMila spreidt haar armen. 'ZO groot!'\nPapa lacht. Mila straalt.\n\nGeen concurrentie. Geen onderbreking. Mila had papa helemaal.",
      explanation: "Het verschil was niet wilskracht. Het verschil was de plek van de telefoon. Uit zicht is uit gedachten. De eerste papa moest kiezen tussen scherm en kind. De tweede papa had die keuze al gemaakt.",
    },
    {
      type: "example" as const,
      situation: "Zaterdagmiddag in het park. Thijs (3) is voor het eerst aan het klimmen op het grote klimrek. Hij kijkt steeds naar papa op het bankje. Papa heeft zijn telefoon in zijn hand en scrolt door Instagram.",
      wrongApproach: "❌ FILMEN IN PLAATS VAN KIJKEN:\n\nThijs: 'Papa! Papa, kijk!'\nPapa kijkt op. Pakt meteen zijn telefoon om te filmen.\nThijs klimt verder. Kijkt naar de camera, niet naar papa.\nPapa: 'Goed zo!' Bekijkt het filmpje terug.\nThijs hangt bovenaan. 'Papa, ik ben helemaal boven!'\nPapa is het filmpje aan het delen.\n\nThijs' grootste moment. Papa zag het door een schermpje van 6 inch.",
      rightApproach: "✅ OGEN IN PLAATS VAN LENS:\n\nPapa stopt zijn telefoon in zijn jaszak. Rits dicht.\nLoopt naar het klimrek.\nThijs kijkt naar beneden. 'Kijk papa! Ik ben hoog!'\nPapa kijkt omhoog. Ogen wijd. 'Jij bent hartstikke hoog! Hoe voelt dat?'\nThijs: 'Een beetje eng. Maar ook stoer!'\nPapa: 'Dat IS stoer. Ik zie je.'\nThijs klimt nog een trede hoger.\n\nGeen foto. Maar Thijs zal dit moment onthouden. Want papa keek echt.",
      explanation: "We filmen onze kinderen vaker dan we naar ze kijken. Thijs had geen Instagram-post nodig. Hij had ogen nodig die hem zagen. De telefoon in de jaszak met de rits dicht was geen groot gebaar. Maar het gaf Thijs een vader die er was in plaats van een vader die documenteerde.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Het Sacred 3 experiment. Kies drie vaste telefoonvrije momenten per dag: ontbijt, het eerste kwartier na thuiskomst, en het avondeten. Telefoon in een la. Niet in je zak.\n\n2. De parkeerplaats. Kies een vaste fysieke plek voor je telefoon als je thuis bent. Een la, een mandje, een plank. Altijd dezelfde plek. Maak er een ritueel van.\n\n3. Notificatie-dieet. Zet alle niet-essentiële meldingen uit. Geen social media push. Geen nieuws-alerts. Alleen bellen en berichten van je partner. De rest kan wachten.",
    },
    {
      type: "exercise" as const,
      title: "De Sacred 3 Start",
      instructions: "Vanavond: leg je telefoon in een la of op een vaste parkeerplaats voordat je aan tafel gaat. Niet in je zak. Niet ondersteboven op tafel. Echt weg. Doe dit voor de hele maaltijd. Kijk wat er anders is aan het gesprek.",
      duration: 5,
      tips: [
        "Vertel je gezin wat je doet en waarom. Het maakt je accountable en je kind voelt zich gewaardeerd",
        "Merk op hoe vaak je hand automatisch naar je broekzak gaat. Dat toont hoe sterk de gewoonte is.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Als je eerlijk bent: hoeveel keer per avond check je je telefoon terwijl je bij je kinderen bent?",
        "Wat zou er veranderen in je gezin als je elke avond drie telefoonvrije momenten had?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Je telefoon hoeft niet in je hand te zijn om verbinding te breken. Zijn aanwezigheid is genoeg. Kinderen concurreren met een scherm dat altijd wint. Drie telefoonvrije momenten per dag veranderen de dynamiek van je hele gezin.",
    },
  ],
  keyTakeaways: [
    "Je telefoon hoeft niet in je hand te zijn om verbinding te breken. Alleen zijn aanwezigheid fragmenteert je aandacht",
    "72% van kinderen voelt dat ze concurreren met de telefoon van hun ouder. En de telefoon wint",
    "Drie vaste telefoonvrije momenten per dag (Sacred 3) creëren ruimte voor echte verbinding",
  ],
  research: "Stone (2009). Continuous Partial Attention; Roberts & David (2016). My life has become a major distraction from my cell phone (Baylor University phubbing research); Radesky et al. (2014). Patterns of mobile device use",
  quizQuestions: [
    {
      question: "Je telefoon ligt ondersteboven op tafel. Je raakt hem niet aan. Is dat goed genoeg?",
      options: [
        { text: "Ja, zolang je hem niet aanraakt maakt de locatie niet uit", isCorrect: false },
        { text: "Beter dan in je hand, maar je brein reserveert nog steeds aandacht voor mogelijke notificaties", isCorrect: true },
        { text: "Nee, je moet je telefoon helemaal uitzetten, anders heeft het geen zin", isCorrect: false },
      ],
      explanation: "Linda Stone's 'Continuous Partial Attention' werkt zelfs als je de telefoon niet aanraakt. Zolang je brein weet dat het apparaat er is, houdt het een deel van je aandacht in reserve. Uit zicht leggen (in een la) is effectiever dan ondersteboven op tafel, maar je hoeft hem niet uit te zetten. Weg is genoeg.",
    },
    {
      question: "Na een telefoon-onderbreking heb je brein gemiddeld hoeveel tijd nodig om volledig terug te focussen?",
      options: [
        { text: "Ongeveer 2 minuten. Kort genoeg om geen grote impact te hebben", isCorrect: false },
        { text: "Ongeveer 23 minuten. Veel langer dan de meeste mensen denken", isCorrect: true },
        { text: "Het hangt volledig af van de persoon. Er is geen gemiddelde", isCorrect: false },
      ],
      explanation: "Onderzoek van UC Irvine toont aan dat het gemiddeld 23 minuten duurt om na een onderbreking volledig terug te focussen. Bij een maaltijd van 20 minuten betekent één blik op je telefoon dat je de rest van het eten nooit meer volledig aanwezig bent. Dat maakt elke 'even snel checken' veel duurder dan het lijkt.",
    },
    {
      question: "72% van de kinderen zegt te concurreren met de telefoon van hun ouder. Wat is het langetermijneffect?",
      options: [
        { text: "Kinderen ontwikkelen meer zelfstandigheid doordat ze minder afhankelijk zijn van ouderlijke aandacht", isCorrect: false },
        { text: "Kinderen vertonen meer gedragsproblemen en ervaren minder emotionele verbinding", isCorrect: true },
        { text: "Kinderen gaan zelf ook meer schermtijd gebruiken als compensatie", isCorrect: false },
      ],
      explanation: "Het Baylor University-onderzoek naar phubbing laat zien dat het niet alleen een vervelend gevoel is. Het leidt tot meetbare effecten op gedrag en gehechtheid. Kinderen die structureel concurreren met een scherm, internaliseren de boodschap 'ik ben niet belangrijk genoeg' en dat uit zich in meer onrust en minder vertrouwen in de relatie.",
    },
    {
      question: "Wat is het grootste obstakel bij het invoeren van telefoonvrije momenten?",
      options: [
        { text: "Praktische noodzaak. Je moet bereikbaar zijn voor werk of noodgevallen", isCorrect: false },
        { text: "Gewoontevorming. Je hand gaat automatisch naar je broekzak, zelfs als je het niet wilt", isCorrect: true },
        { text: "Weerstand van je partner of gezinsleden die het overdreven vinden", isCorrect: false },
      ],
      explanation: "De meeste mensen overschatten hoe vaak ze echt bereikbaar moeten zijn en onderschatten hoe diep de gewoonte zit. Het automatische grijpen naar je telefoon is een geconditioneerde reflex, geen bewuste keuze. Daarom werkt omgevingsontwerp (telefoon in een la) beter dan wilskracht. Je ontneemt de reflex zijn doel.",
    },
  ],
},
{
  id: "aa_mod_4",
  skill: "Aanwezigheid" as Skill,
  title: "Aanwezig Zijn Als Het Chaos Is",
  description: "Twee kinderen schreeuwen. Het eten brandt aan. Je wilt vluchten. Maar juist nu. In de chaos. Maakt aanwezig zijn het verschil.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 4,
  content: [
    {
      type: "text" as const,
      heading: "Alles ontploft. Wat nu?",
      text: "Levi (6) en Saar (5) vechten om een auto. Saar gilt. Levi duwt. In de keuken piept de oven. Je telefoon gaat. Je partner roept iets vanuit de gang.\n\nJe brein zegt: vlucht. Maar je kinderen hebben je nu het hardst nodig.",
    },
    {
      type: "text" as const,
      heading: "Chaos is de echte test van aanwezigheid",
      text: "Aanwezig zijn als het rustig is, is makkelijk. Samen een boek lezen op de bank. Een puzzel maken. Dat kan iedereen.\n\nMaar aanwezig zijn als alles tegelijk schreeuwt? Dat is waar het echte vaderschap zit. Niet omdat je de chaos oplost. Maar omdat je er middenin staat en niet wegloopt.\n\nAls jij kalm blijft te midden van de storm, leren je kinderen iets cruciaals: het kan gek zijn, het kan moeilijk zijn, maar het is veilig. Papa is er. Dat gevoel van veiligheid in chaos. Dat dragen ze hun hele leven mee.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Daniel Siegel beschrijft het 'Window of Tolerance': de zone waarin je stress kunt opvangen zonder te exploderen of te bevriezen. Bij chaos schuif je naar de rand. De truc is niet om stress te vermijden maar om je venster te verbreden. Grounding-technieken helpen je in die zone te blijven, zelfs als alles om je heen ontspoort.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Drie reacties op chaos",
      diagramData: [
        {
          emoji: "🌋",
          label: "Exploderen",
          description: "Je schreeuwt mee. 'STOP! ALLEBEI! NU!' De chaos verdubbelt. Je kinderen zien een vader die ook de controle verliest.",
        },
        {
          emoji: "🧊",
          label: "Bevriezen",
          description: "Je trekt je terug. Loop naar een andere kamer. Scrollt op je telefoon. Fysiek weg, emotioneel dicht. Je kinderen voelen: papa kan dit niet aan.",
        },
        {
          emoji: "⚓",
          label: "Ankeren",
          description: "Je voelt de grond onder je voeten. Je ademt. Je stem daalt. Je bent het anker in de storm. Je kinderen voelen: het is oké.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Woensdagavond, 17:45. Levi (6) en Saar (5) schreeuwen allebei. Levi wil de iPad, Saar heeft hem. De aardappels koken over. Papa staat ertussen.",
      wrongApproach: "MEE-EXPLODEREN:\n\nPapa: 'NU IS HET GENOEG!'\nGrist de iPad uit Saars handen.\n'NIEMAND krijgt de iPad! Naar jullie kamers!'\nSaar huilt. Levi schopt tegen de bank.\nPapa beent naar de keuken.\nMompelt: 'Ik kan dit niet.'\n\nDrie mensen in fight-mode. Nul verbinding. Nul oplossing.",
      rightApproach: "HET ANKER ZIJN:\n\nPapa voelt de chaos. Zijn lijf spant.\nHij stopt. Voelt zijn voeten op de grond.\nAdemt uit. Lang. Bewust.\nZacht, laag: 'Ik zie dat jullie allebei de iPad willen.'\nGaat op hun hoogte zitten.\n'Saar, jij had hem. Levi, jij wilt hem. Lastig.'\nLevi: 'Ze heeft hem al een uur!'\nPapa: 'Dat voelt niet eerlijk. Laten we de timer zetten.'\n\nPapa loste het niet perfect op. Maar hij bleef. Dat is het punt.",
      explanation: "Het verschil is niet dat de tweede papa een betere oplossing had. De timer is niets bijzonders. Het verschil is dat hij bleef staan in de chaos. Dat hij zijn eigen zenuwstelsel kalmeerde voordat hij reageerde. Zijn kinderen voelden: papa kan dit aan.",
    },
    {
      type: "example" as const,
      situation: "Zondagochtend. Luna (3) heeft haar beker melk over de bank gegooid. Ze schrikt en begint te huilen. Tegelijk komt Sem (9) schreeuwend de trap af omdat hij zijn voetbalshirt niet kan vinden. Papa staat in zijn onderbroek en heeft nog geen koffie gehad.",
      wrongApproach: "❌ KORTSLUITING:\n\nPapa: 'Luna! Waarom zit je met melk op de bank?!'\nLuna huilt harder.\nSem: 'PAPA! Mijn shirt!'\nPapa: 'Zoek zelf! Ik sta hier met melk overal!'\nSem: 'Maar de wedstrijd begint over een uur!'\nPapa smijt een handdoek op de bank.\n'Kan er hier NIEMAND iets zelf?!'\n\nDrie mensen in paniek. Nul oplossingen. Iedereen voelt zich alleen.",
      rightApproach: "✅ EERST ADEMEN, DAN BEWEGEN:\n\nPapa ziet de melk. Voelt de irritatie opkomen.\nAdemt uit. Langzaam.\nGaat op zijn hurken bij Luna. 'Hé. Geeft niks. Kan gebeuren.'\nLuna snikt nog, maar kijkt op.\nPapa: 'Wil jij de handdoek pakken uit de keuken? Dan ruimen we samen op.'\nLuna knikt. Loopt naar de keuken.\nPapa roept naar boven: 'Sem, ik kom zo. We vinden je shirt.'\n\nNiemand schreeuwt. Allebei de kinderen voelen: papa heeft het onder controle.",
      explanation: "Papa had alle reden om te ontploffen. Geen koffie, melk op de bank, een schreeuwend kind op de trap. Maar door eerst te ademen en dan rustig te reageren, loste hij niet één maar twee problemen op. Luna leerde: fouten zijn niet erg. Sem leerde: papa komt, ook als het druk is.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De 60-seconden grounding. Voel je voeten op de grond. Adem in voor 4 tellen, uit voor 6. Doe dit 60 seconden voordat je reageert op chaos. Het voelt lang. Het is het waard.\n\n2. Je ankerzin. Kies één zin die je tegen jezelf zegt in de chaos. 'Ik kan dit aan.' 'Dit gaat voorbij.' 'Ze hebben me nu nodig.' Herhaal hem in je hoofd als het losbarst.\n\n3. Laag en langzaam. Hoe harder zij schreeuwen, hoe zachter jij praat. Hoe sneller zij bewegen, hoe langzamer jij beweegt. Je zenuwstelsel is besmettelijk. In beide richtingen.",
    },
    {
      type: "exercise" as const,
      title: "Het Anker Oefenen",
      instructions: "1. Kies nu je ankerzin. Schrijf hem op: 'Ik kan dit aan.' of 'Dit gaat voorbij.' of 'Ze hebben me nu nodig.'\n2. Vanavond: als er chaos komt. Ruzie, geschreeuw, gemorst eten. Stop.\n3. Voel je voeten op de grond. Letterlijk. Druk ze in de vloer.\n4. Adem één keer bewust uit. Lang. Door je mond.\n5. Zeg je ankerzin in je hoofd.\n6. Reageer dan pas. Eén moment is genoeg.",
      duration: 3,
      tips: [
        "Kies nu je ankerzin. Schrijf hem op een post-it en plak hem op de koelkast.",
        "Het gaat niet om perfect reageren. Het gaat om niet direct mee-exploderen.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Wat is jouw automatische reactie op chaos thuis. Exploderen, bevriezen, of wegloop je?",
        "Wat zou er veranderen als je kinderen jou in de chaos zien als het anker in plaats van als nog een storm?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Aanwezig zijn in chaos is moeilijker dan aanwezig zijn in rust. Maar het is ook veel waardevoller. Je hoeft de chaos niet op te lossen, alleen te blijven staan. Met grounding, een ankerzin en lage stem ben jij het anker waar je kinderen zich aan vasthouden.",
    },
  ],
  keyTakeaways: [
    "Aanwezig blijven in chaos is de echte test. Niet aanwezig zijn als het rustig is",
    "Je hoeft chaos niet op te lossen, je hoeft alleen te blijven staan. Dat gevoel van veiligheid dragen kinderen hun hele leven mee",
    "Grounding (voeten op de grond, bewust ademhalen) en een ankerzin houden je in je Window of Tolerance",
  ],
  research: "Siegel (2012). The Developing Mind; Siegel & Bryson (2014). No-Drama Discipline; Porges (2011). Polyvagal Theory",
  quizQuestions: [
    {
      question: "Je kinderen schreeuwen. Jij voelt je hartslag stijgen. Wat is de EERSTE stap?",
      options: [
        { text: "Naar je kinderen toe gaan en op hun hoogte zakken", isCorrect: false },
        { text: "Hardop benoemen: 'Ik zie dat jullie allebei boos zijn'", isCorrect: false },
        { text: "Je eigen zenuwstelsel reguleren. Voeten op de grond, bewust uitademen", isCorrect: true },
      ],
      explanation: "Naar je kinderen gaan of hun emotie benoemen zijn prima stappen, maar pas nadat jij jezelf hebt gereguleerd. Als jij nog in fight-mode zit, ben je geen anker maar een extra bron van chaos. De vliegtuigregel geldt: eerst je eigen zuurstofmasker, dan dat van je kind.",
    },
    {
      question: "Siegel beschrijft het 'Window of Tolerance'. Wat gebeurt er als je buiten dat venster raakt?",
      options: [
        { text: "Je schakelt over op instinct: je explodeert (fight/flight) of bevriest (shutdown)", isCorrect: true },
        { text: "Je wordt juist scherper en effectiever onder druk. Stress maakt je alerter", isCorrect: false },
        { text: "Je valt automatisch terug op aangeleerd oudergedrag uit je eigen opvoeding", isCorrect: false },
      ],
      explanation: "Buiten je Window of Tolerance verlies je toegang tot je 'denkende brein' (prefrontale cortex) en nemen primitievere hersengebieden het over. Je reageert dan vanuit overleving, niet vanuit wijsheid. Grounding-technieken helpen je het venster te verbreden en erin te blijven.",
    },
    {
      question: "Welke reactie op chaos is het MOEILIJKST te herkennen als problematisch?",
      options: [
        { text: "Exploderen. Schreeuwen en dreigen", isCorrect: false },
        { text: "Bevriezen. Je terugtrekken, weglopen, of op je telefoon gaan", isCorrect: true },
        { text: "Ankeren. Kalm blijven en de situatie benoemen", isCorrect: false },
      ],
      explanation: "Exploderen is luid en zichtbaar. Iedereen (inclusief jijzelf) merkt dat het misgaat. Bevriezen is subtieler: je loopt weg, pakt je telefoon, of 'laat het maar even'. Het voelt als rust bewaren, maar je kinderen lezen het als: papa kan dit niet aan. Dat ondermijnt hun gevoel van veiligheid net zo sterk als schreeuwen.",
    },
    {
      question: "Je ankerzin is 'ik kan dit aan', maar je gelooft het niet op dat moment. Wat klopt?",
      options: [
        { text: "De zin heeft geen effect als je hem niet gelooft. Kies dan een realistischere zin", isCorrect: false },
        { text: "Het werkt toch. De zin activeert je prefrontale cortex, ongeacht of je het gelooft", isCorrect: true },
        { text: "Het maakt niet uit welke zin je kiest. Elke afleiding werkt even goed", isCorrect: false },
      ],
      explanation: "Een ankerzin werkt neurofysiologisch, niet op basis van overtuiging. Door bewust een zin te herhalen, activeer je je prefrontale cortex en geef je je brein iets concreets om mee bezig te zijn terwijl de amygdala afkoelt. De inhoud van de zin doet er wel degelijk toe. Een zin die resoneert werkt beter dan een willekeurige afleiding.",
    },
  ],
},
{
  id: "aa_mod_5",
  skill: "Aanwezigheid" as Skill,
  title: "Vijf Minuten Die Meer Doen Dan Een Hele Dag",
  description: "Je hebt geen tijd. Lange dagen. Thuiskomen als de kinderen bijna in bed liggen. Maar vijf minuten echte aandacht? Dat is genoeg. Meer dan genoeg.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 5,
  content: [
    {
      type: "text" as const,
      heading: "Geen tijd. Toch genoeg.",
      text: "Het is 19:40. Je rijdt de oprit op. Twaalf uur gewerkt. Mila (4) ligt over een kwartier in bed. Je denkt: weer een dag gemist.\n\nMaar vijf minuten volledige aandacht doen meer dan een hele middag half aanwezig zijn. En die vijf minuten heb je wel.",
    },
    {
      type: "text" as const,
      heading: "Kwaliteit verslaat kwantiteit. Altijd.",
      text: "Er hangt een hardnekkig schuldgevoel rond werkende vaders. Ik ben er niet genoeg. Ik mis te veel. De waarheid is genuanceerder dan dat.\n\nOnderzoek laat keer op keer zien: het gaat niet om de uren die je met je kind doorbrengt. Het gaat om de kwaliteit van de momenten. Vijf minuten waarin je kind jou helemaal heeft. Oogcontact, aandacht, speelsheid. Wegen zwaarder dan drie uur op de bank terwijl je op je telefoon zit.\n\nHet zijn de micro-momenten die tellen. Een knuffel bij de deur. Een gek gezicht bij het ontbijt. Drie minuten luisteren naar een verhaal over school. Dat zijn de momenten die je kind onthoudt. Niet de uren.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Attachment-onderzoek (Bowlby, Ainsworth) laat zien dat veilige hechting niet afhangt van hoeveelheid tijd maar van responsiviteit: reageert papa als ik hem nodig heb? Eén onderzoek in het Journal of Marriage and Family (2015) vond dat de totale hoeveelheid tijd die ouders met kinderen doorbrengen nauwelijks invloed heeft op uitkomsten. Wat wél telt: betrokken, aandachtige momenten.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De 3-3-3 methode",
      diagramData: [
        {
          emoji: "🌅",
          label: "3 minuten ochtend",
          description: "Voordat de dag begint: knuffel, oogcontact, 'Ik kijk uit naar vanavond.' Dat draagt je kind de hele dag mee.",
        },
        {
          emoji: "🏠",
          label: "3 minuten thuiskomst",
          description: "De eerste 3 minuten als je thuiskomt: telefoon weg, op hun hoogte, volle aandacht. Niet eerst je tas uitpakken. Eerst je kind.",
        },
        {
          emoji: "🌙",
          label: "3 minuten bedtijd",
          description: "Drie minuten op de bedrand. Wat was het leukste vandaag? Eén vraag. Eén moment. Dat is het laatste wat ze voelen voor de slaap.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Donderdag. Papa werkt tot 19:30. Thuiskomen om 19:45. Daan (8) gaat om 20:15 naar bed. Dertig minuten. Papa denkt: dat is te weinig om er iets mee te doen.",
      wrongApproach: "SCHULDGEVOEL VERLAMMING:\n\nPapa komt binnen. Zucht.\n'Sorry Daan, weer laat.'\nPakt zijn telefoon. Checkt mail.\n'Had je een leuke dag?'\nDaan: 'Gaat wel.'\nPapa kijkt op het scherm. 'Mooi.'\nDaan gaat tanden poetsen.\nPapa op de bank. Denkt: morgen beter.\n\nDertig minuten. Nul verbinding. Het schuldgevoel wordt een zelfvervullende voorspelling.",
      rightApproach: "VIJF MINUTEN VOLGAS:\n\nPapa komt binnen. Telefoon in de la.\nLoopt naar Daan. 'Hé. Ik ben er.'\nGaat op de grond zitten.\n'Wat was het mafste dat er vandaag gebeurde?'\nDaan, grijnzend: 'Jesse liet een boer in de stilte-oefening.'\nPapa lacht. Daan lacht.\nVijf minuten. Geen scherm. Geen afleiding.\n\nDaan gaat naar bed met een grijns. Papa ook.",
      explanation: "Papa had in beide scenario's dertig minuten. In het eerste geval liet schuldgevoel hem verlammen en was hij er fysiek maar niet mentaal. In het tweede geval koos hij voor vijf minuten volledig. Dat was genoeg. Meer dan genoeg.",
    },
    {
      type: "example" as const,
      situation: "Vrijdagochtend, 07:15. Sophie (6) zit aan het ontbijt. Papa moet om 07:30 de deur uit voor een vroege vergadering. Hij schenkt snel koffie in en pakt zijn tas.",
      wrongApproach: "❌ OCHTEND OP DE AUTOMATISCHE PILOOT:\n\nPapa loopt langs de tafel. 'Dag schat, tot vanavond!'\nSophie: 'Papa, kijk, ik heb mijn boterham zelf gesmeerd.'\nPapa, bij de deur: 'Goed zo! Luister naar mama hè.'\nDeur dicht.\nSophie kijkt naar haar boterham. Neemt een hap. Alleen.\n\nVijftien seconden. Maar Sophie begon haar dag met: papa had haast.",
      rightApproach: "✅ DRIE MINUTEN AAN TAFEL:\n\nPapa zet zijn tas neer. Gaat zitten. Koffie in zijn hand.\n'Hé Soof. Laat je boterham eens zien.'\nSophie, trots: 'Met hagelslag. En ik heb niet gemorst!'\nPapa: 'Netjes. Hoog vijf.'\nZe kletsen over haar dag. Twee minuten.\nPapa: 'Ik moet gaan. Ik kijk uit naar vanavond.'\nKnuffel. Deur dicht.\n\nDrie minuten. Maar Sophie begon haar dag met: papa zag me.",
      explanation: "Het verschil tussen de twee ochtenden was drie minuten. Papa kwam in beide gevallen op tijd op zijn werk. Maar Sophie begon haar dag anders. In het eerste geval met het beeld van een rug die wegloopt. In het tweede geval met een knuffel en een vader die even ging zitten. Die drie minuten kleurden haar hele dag.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De 3-3-3 start. Drie minuten ochtend, drie minuten thuiskomst, drie minuten bedtijd. Negen minuten per dag. Dat is het. Maak het een ritueel, geen prestatie.\n\n2. De eerste-drie-minuten regel. Als je thuiskomt: de eerste drie minuten zijn voor je kind. Niet voor je tas. Niet voor de post. Niet voor je partner (die begrijpt het). Eerst je kind.\n\n3. Eén vraag per avond. Niet 'hoe was je dag?' (antwoord: goed). Wel: 'Wat was het gekste dat er vandaag gebeurde?' of 'Met wie heb je gelachen?' Specifieke vragen krijgen echte antwoorden. Bij een tiener (13+): 'Wat was het irritantste vandaag?' of 'Waar heb je je aan geërgerd?' Tieners openen sneller via frustratie dan via positiviteit.\n\n4. Laat het schuldgevoel los. Je bent geen slechte vader omdat je werkt. Je bent een goede vader als je de tijd die je hebt, echt gebruikt.",
    },
    {
      type: "exercise" as const,
      title: "De 3-3-3 Start",
      instructions: "Morgenochtend: neem drie minuten voordat je vertrekt. Ga op ooghoogte van je kind. Kijk ze aan. Zeg: 'Ik kijk uit naar vanavond.' Knuffel. En vanavond bij thuiskomst: telefoon in de la, drie minuten volle aandacht. Dat is alles voor vandaag.",
      duration: 4,
      tips: [
        "Zet een herinnering op je telefoon voor de ochtend. Tot het een gewoonte wordt",
        "Als je kind al slaapt als je thuiskomt: ga even bij het bed staan. Leg je hand op hun rug. Dat telt ook.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Hoeveel van je beschikbare tijd met je kind besteed je echt aan je kind. En hoeveel aan schuldgevoel over te weinig tijd?",
        "Wat zijn de drie momenten van de dag waarin jij je kind helemaal kunt hebben, al is het maar een paar minuten?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Vijf minuten volledige aandacht wegen zwaarder dan uren halve aanwezigheid. Gebruik de 3-3-3 methode: drie minuten ochtend, drie minuten thuiskomst, drie minuten bedtijd. Het gaat niet om hoeveel tijd je hebt, maar om wat je doet met de tijd die je hebt.",
    },
  ],
  keyTakeaways: [
    "Vijf minuten volledige aandacht doen meer dan uren halve aanwezigheid. Kwaliteit verslaat kwantiteit",
    "De 3-3-3 methode (3 min ochtend, 3 min thuiskomst, 3 min bedtijd) geeft je kind negen gouden minuten per dag",
    "Laat het schuldgevoel over te weinig tijd los. Het verlamt je en maakt de tijd die je hebt waardeloos",
  ],
  research: "Bowlby (1969). Attachment and Loss; Milkie et al. (2015). Does the Amount of Time Mothers Spend With Children Matter? Journal of Marriage and Family; Ainsworth (1978). Patterns of Attachment",
  quizQuestions: [
    {
      question: "Het Journal of Marriage and Family (2015) onderzocht de relatie tussen tijd en uitkomsten bij kinderen. Welke conclusie is JUIST?",
      options: [
        { text: "Meer uren samen leidt tot significant betere uitkomsten. Kwantiteit telt het meest", isCorrect: false },
        { text: "De totale hoeveelheid tijd had nauwelijks invloed. Responsiviteit en aandachtige momenten wél", isCorrect: true },
        { text: "Zowel kwantiteit als kwaliteit doen er niet toe. Het gaat puur om genetische factoren", isCorrect: false },
      ],
      explanation: "Dit onderzoek was baanbrekend omdat het het schuldgevoel van werkende ouders nuanceerde. Niet de uren tellen, maar de kwaliteit van de momenten. Eén responsief moment. Waarin je kind voelt dat je echt reageert op wat het nodig heeft. Weegt zwaarder dan uren passief in dezelfde ruimte zijn.",
    },
    {
      question: "Je komt om 19:45 thuis, je kind gaat om 20:15 naar bed. Je voelt je schuldig over de weinige tijd. Wat is het risico van dat schuldgevoel?",
      options: [
        { text: "Schuldgevoel motiveert je om de beschikbare tijd beter te benutten", isCorrect: false },
        { text: "Schuldgevoel verlamt: je bent zo bezig met 'te weinig' dat je de tijd die je hebt ook niet echt gebruikt", isCorrect: true },
        { text: "Schuldgevoel is gezond. Het houdt je scherp op je prioriteiten", isCorrect: false },
      ],
      explanation: "Schuldgevoel over afwezigheid wordt een self-fulfilling prophecy. Je voelt je rot, pakt je telefoon als verdoving, en bent vervolgens ook mentaal afwezig in de dertig minuten die je wél hebt. De oplossing is niet meer tijd, maar het loslaten van de schuld en de beschikbare minuten echt vullen.",
    },
    {
      question: "De 3-3-3 methode kost negen minuten per dag. Waarom is dat effectief terwijl het zo weinig tijd is?",
      options: [
        { text: "Het gaat om de strategische timing: ochtend, thuiskomst en bedtijd zijn ankermomenten die de hele dag kleuren", isCorrect: true },
        { text: "Negen minuten is eigenlijk te weinig. Het is beter dan niets, maar meer is altijd beter", isCorrect: false },
        { text: "Kinderen hebben een kort geheugen en onthouden alleen de laatste interactie van de dag", isCorrect: false },
      ],
      explanation: "De kracht zit in de timing, niet in de duur. Het ochtendmoment geeft je kind iets om de dag mee te beginnen, de thuiskomst bevestigt 'papa kiest voor mij', en het bedtijdmoment is het laatste gevoel voor de slaap. Deze drie ankerpunten structureren de hele beleving van de dag.",
    },
    {
      question: "Je kind slaapt al als je thuiskomt. Je gaat even bij het bed staan en legt je hand op zijn rug. Wat is het effect?",
      options: [
        { text: "Geen meetbaar effect. Het kind is niet bewust, dus het telt niet als verbinding", isCorrect: false },
        { text: "Puur symbolisch. Het helpt alleen jou als ouder, niet je kind", isCorrect: false },
        { text: "Het kind registreert aanraking ook in de slaap, en het ritueel houdt jouw verbinding actief", isCorrect: true },
      ],
      explanation: "Kinderen verwerken aanraking ook tijdens slaap. Het zenuwstelsel registreert veiligheid via de huid. Maar het effect is tweezijdig: het ritueel houdt ook jouw betrokkenheid levend. Ouders die het bed-moment overslaan, verliezen geleidelijk de gewoonte van verbinding. Het gaat niet alleen om wat je kind voelt, maar om wie jij als vader blijft.",
    },
  ],
},
];
