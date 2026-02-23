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
      text: "Psycholoog Ed Tronick deed het beroemde 'Still Face Experiment'. Een moeder speelt normaal met haar baby. Dan stopt ze met reageren — zelfde gezicht, maar blanco. Binnen seconden raakt de baby in paniek. Tronick bewees: emotionele onbereikbaarheid is voor kinderen net zo stressvol als fysieke afwezigheid.",
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
      explanation: "Het verschil was niet de tijd — het waren tien seconden. Het verschil was de kwaliteit van die seconden. Saar voelde in het eerste geval: ik ben minder belangrijk dan dat scherm. In het tweede geval: papa vindt mij interessant.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De 3-minuten scan. Voordat je de kamer inloopt waar je kind is: stop. Adem drie keer. Laat je werkdag los. Loop dan pas naar binnen.\n\n2. Telefoon face-down ritueel. Als je thuiskomt: telefoon ondersteboven op een vaste plek. Niet in je broekzak. Uit zicht = uit gedachten.\n\n3. De oogcontact-check. Stel jezelf drie keer per avond de vraag: wanneer heb ik mijn kind voor het laatst echt in de ogen gekeken? Geen snelle blik. Echt gekeken.",
    },
    {
      type: "exercise" as const,
      title: "De Aanwezigheids-Reset",
      instructions: "1. Vanavond: wacht tot je kind iets tegen je zegt.\n2. Leg alles uit je handen — telefoon, afstandsbediening, alles.\n3. Draai je hele lichaam naar je kind.\n4. Maak oogcontact. Kijk echt.\n5. Luister tot je kind klaar is met praten. Reageer pas daarna.\n6. Eén keer vanavond. Dat is alles. Merk het verschil op.",
      duration: 3,
      tips: [
        "Let op het gezicht van je kind als je je volle aandacht geeft — je zult het verschil zien",
        "Voel je eigen weerstand als je je telefoon weglegt. Dat is normaal. Doe het toch.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Hoeveel van je avonden met je kind ben je echt aanwezig — en hoeveel ben je 'spook-aanwezig'?",
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
    "Half aanwezig zijn is voor kinderen schadelijker dan eerlijk afwezig zijn — ze voelen het verschil",
    "Aanwezigheid is geen locatie maar een keuze: oogcontact, nieuwsgierigheid, je kind echt zien",
    "Kleine rituelen zoals telefoon face-down en een 3-minuten scan maken het verschil tussen spook-papa en echte papa",
  ],
  research: "Tronick (1978). Still Face Experiment; Radesky et al. (2014). Patterns of mobile device use by caregivers and children during meals",
  quizQuestions: [
    {
      question: "Je zit naast je kind op de bank. Je telefoon is in je hand. Je kind praat. Je knikt af en toe. Wat ervaart je kind?",
      options: [
        { text: "Papa is er en luistert — hij knikt toch?", isCorrect: false },
        { text: "Papa is er maar niet echt — ik ben niet belangrijk genoeg", isCorrect: true },
      ],
      explanation: "Kinderen lezen niet je woorden maar je aandacht. Knikken zonder oogcontact voelt als afwijzing, niet als bevestiging.",
    },
    {
      question: "Wat toonde het Still Face Experiment van Tronick aan?",
      options: [
        { text: "Kinderen raken in paniek bij emotionele onbereikbaarheid — het is net zo stressvol als afwezigheid", isCorrect: true },
        { text: "Kinderen passen zich snel aan en vinden het niet erg als een ouder even niet reageert", isCorrect: false },
      ],
      explanation: "Baby's reageerden binnen seconden met stress op een blanco gezicht. Emotionele onbereikbaarheid activeert hun alarmsysteem.",
    },
    {
      question: "Wat is de effectiefste manier om aanwezig te zijn als je kind iets vertelt?",
      options: [
        { text: "Alles uit je handen leggen, je lichaam draaien en oogcontact maken", isCorrect: true },
        { text: "Zeggen dat je luistert terwijl je doorwerkt — multitasken kan prima", isCorrect: false },
      ],
      explanation: "Je lichaam laat zien wat je mond beweert. Oogcontact en lichaamshouding zijn de taal die kinderen het best lezen.",
    },
    {
      question: "Je bent moe na werk en je kind wil spelen. Wat is eerlijker?",
      options: [
        { text: "'Ik heb vijf minuten. Die zijn helemaal voor jou.' — eerlijk en volledig aanwezig", isCorrect: true },
        { text: "Meedoen maar ondertussen je mail checken — je bent er tenminste", isCorrect: false },
      ],
      explanation: "Vijf minuten volledige aandacht is waardevoller dan een uur halve aanwezigheid. Je kind voelt het verschil. Eerlijkheid over je grenzen is beter dan nep-aanwezigheid.",
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
      text: "John Gottman ontdekte twee soorten ouders: emotion dismissers (die emoties wegwuiven) en emotion coaches (die emoties begeleiden). Kinderen van emotion coaches zijn beter in vriendschappen, schoolprestaties en zelfregulatie. De sleutel? Carl Rogers' 'actief luisteren': herhalen, valideren, doorvragen — in die volgorde.",
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
          description: "Stel één open vraag. 'Hoe voelde dat?' Niet 'waarom' — dat voelt als verhoor. 'Hoe' of 'wat' werkt beter.",
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
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De 3-zinnen oefening. Bij elk gesprek met je kind: begin met drie zinnen zonder advies. Herhaal. Valideer. Vraag door. Pas daarna mag je fixen — als ze erom vragen.\n\n2. De 10-seconden regel. Als je kind iets vertelt: wacht 10 seconden voordat je reageert. Tel in je hoofd. Vaak vult je kind de stilte zelf.\n\n3. Vervang 'waarom' door 'hoe'. 'Waarom ben je boos?' voelt als verhoor. 'Hoe voelt dat?' opent een deur.\n\n4. Check jezelf. Merk je dat je in je hoofd al een oplossing formuleert? Stop. Terug naar luisteren.",
    },
    {
      type: "exercise" as const,
      title: "De Fix-Stopper",
      instructions: "1. Vanavond: wacht tot je kind iets vertelt over school, vrienden of hun dag.\n2. Stap 1 — Herhaal: 'Dus [wat je kind zei].' Geen oordeel, geen advies.\n3. Stap 2 — Valideer: 'Dat klinkt [emotie].' Eén zin.\n4. Stap 3 — Vraag door: 'Hoe voelde dat?' of 'Wat deed je toen?' Eén open vraag.\n5. Geef geen enkel advies. Zelfs niet als je handen jeuken.\n6. Bij een tiener (12+): dezelfde drie stappen, maar geef extra ruimte voor stilte. Tieners hebben soms tien seconden nodig voor ze verder praten. Wacht.",
      duration: 5,
      tips: [
        "Je zult merken dat je handen jeuken om te fixen. Dat is normaal. Adem door en luister verder.",
        "Als je kind zelf een oplossing bedenkt, heb je het goed gedaan.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Wanneer was de laatste keer dat je kind iets vertelde en jij meteen een oplossing gaf — hoe reageerde je kind?",
        "Wat zou er veranderen als je kind weet dat het bij jou veilig is om te voelen zonder dat het 'opgelost' moet worden?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Luisteren is niet wachten tot je mag praten — het is actief ontvangen zonder te fixen. Gebruik de drie stappen: herhaal, valideer, vraag door. Kinderen die zich gehoord voelen, vinden vaak zelf de oplossing.",
    },
  ],
  keyTakeaways: [
    "Luisteren is niet wachten tot je mag praten — het is actief ontvangen zonder direct te fixen",
    "De drie stappen: herhaal wat je hoort, valideer het gevoel, stel één open vraag",
    "Kinderen die zich gehoord voelen komen vaker zelf met een oplossing dan kinderen die advies krijgen",
  ],
  research: "Gottman (1997). Raising an Emotionally Intelligent Child; Rogers (1951). Client-Centered Therapy; Faber & Mazlish (1980). How to Talk So Kids Will Listen",
  quizQuestions: [
    {
      question: "Je zoon vertelt dat zijn vriend niet meer met hem wil spelen. Wat is de beste eerste reactie?",
      options: [
        { text: "Herhalen wat je hoort: 'Dus hij wil niet meer met je spelen. Dat is balen.'", isCorrect: true },
        { text: "Meteen een oplossing geven: 'Ga dan met iemand anders spelen.'", isCorrect: false },
      ],
      explanation: "Herhalen laat zien dat je luistert en geeft je kind ruimte om verder te praten. Een oplossing sluit het gesprek af voordat het gevoel is erkend.",
    },
    {
      question: "Waarom werkt 'Hoe voelt dat?' beter dan 'Waarom ben je boos?'",
      options: [
        { text: "'Waarom' voelt als een verhoor en zet kinderen in de verdediging", isCorrect: true },
        { text: "'Hoe' is makkelijker te begrijpen voor jonge kinderen", isCorrect: false },
      ],
      explanation: "'Waarom'-vragen activeren het denkbrein en voelen als een verhoor. 'Hoe'-vragen nodigen uit om te voelen en delen zonder zich te hoeven verantwoorden.",
    },
    {
      question: "Wat ontdekte John Gottman over ouders die emoties van kinderen begeleiden in plaats van wegwuiven?",
      options: [
        { text: "Die kinderen werden te gevoelig en konden minder goed tegen tegenslag", isCorrect: false },
        { text: "Die kinderen scoorden beter op vriendschappen, school en zelfregulatie", isCorrect: true },
      ],
      explanation: "Emotion coaching leert kinderen dat gevoelens normaal zijn en hanteerbaar. Dat geeft ze een voorsprong in sociaal, emotioneel en cognitief functioneren.",
    },
    {
      question: "Je dochter (10) vertelt dat ze gepest wordt. Je wilt het direct oplossen. Wat doe je eerst?",
      options: [
        { text: "Herhalen wat je hoort en haar gevoel erkennen — 'Dat klinkt heel vervelend'", isCorrect: true },
        { text: "Direct de school bellen om het op te lossen — dit is te serieus om alleen te luisteren", isCorrect: false },
      ],
      explanation: "Zelfs bij serieuze situaties is de eerste stap altijd: luisteren en erkennen. Je kind moet zich eerst gehoord voelen. Actie kan daarna — en is dan ook effectiever.",
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
        "Vertel je gezin wat je doet en waarom — het maakt je accountable en je kind voelt zich gewaardeerd",
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
      text: "Je telefoon hoeft niet in je hand te zijn om verbinding te breken — zijn aanwezigheid is genoeg. Kinderen concurreren met een scherm dat altijd wint. Drie telefoonvrije momenten per dag veranderen de dynamiek van je hele gezin.",
    },
  ],
  keyTakeaways: [
    "Je telefoon hoeft niet in je hand te zijn om verbinding te breken — alleen zijn aanwezigheid fragmenteert je aandacht",
    "72% van kinderen voelt dat ze concurreren met de telefoon van hun ouder — en de telefoon wint",
    "Drie vaste telefoonvrije momenten per dag (Sacred 3) creëren ruimte voor echte verbinding",
  ],
  research: "Stone (2009). Continuous Partial Attention; Roberts & David (2016). My life has become a major distraction from my cell phone (Baylor University phubbing research); Radesky et al. (2014). Patterns of mobile device use",
  quizQuestions: [
    {
      question: "Je telefoon ligt op tafel tijdens het eten. Je raakt hem niet aan. Wat is het effect?",
      options: [
        { text: "Geen effect — je gebruikt hem toch niet", isCorrect: false },
        { text: "Je brein blijft deels alert op notificaties, waardoor je nooit volledig aanwezig bent", isCorrect: true },
      ],
      explanation: "Continuous Partial Attention betekent dat je brein altijd een deel van de aandacht reserveert voor mogelijke notificaties, zelfs als je de telefoon niet aanraakt.",
    },
    {
      question: "Je dochter stopt midden in een verhaal als je even op je telefoon kijkt. Wat leert ze hiervan?",
      options: [
        { text: "Ze leert dat ze moet wachten tot papa klaar is — dat is geduld oefenen", isCorrect: false },
        { text: "Ze leert dat haar verhaal minder belangrijk is dan het scherm", isCorrect: true },
      ],
      explanation: "Kinderen interpreteren aandacht als waarde. Als het scherm wint van hun verhaal, trekken ze de conclusie: ik ben niet interessant genoeg.",
    },
    {
      question: "Wat is de effectiefste manier om telefoonafleiding te voorkomen?",
      options: [
        { text: "De telefoon fysiek uit zicht leggen — in een la of op een vaste plek", isCorrect: true },
        { text: "De telefoon ondersteboven op tafel leggen en jezelf voornemen niet te kijken", isCorrect: false },
      ],
      explanation: "Wilskracht is eindig. Omgevingsontwerp werkt beter: als de telefoon er niet is, hoef je niet te kiezen. De keuze is al gemaakt.",
    },
    {
      question: "Je hebt de Sacred 3 ingevoerd. Je partner vindt het overdreven. Wat is het beste argument?",
      options: [
        { text: "Laat je partner een week meekijken: hoe anders zijn de gesprekken aan tafel zonder telefoon?", isCorrect: true },
        { text: "Je partner heeft gelijk — het is niet nodig om je telefoon helemaal weg te leggen", isCorrect: false },
      ],
      explanation: "Het verschil is merkbaar. Gezinnen die telefoonvrije momenten invoeren rapporteren meer en diepere gesprekken. Laten zien werkt beter dan overtuigen.",
    },
  ],
},
{
  id: "aa_mod_4",
  skill: "Aanwezigheid" as Skill,
  title: "Aanwezig Zijn Als Het Chaos Is",
  description: "Twee kinderen schreeuwen. Het eten brandt aan. Je wilt vluchten. Maar juist nu — in de chaos — maakt aanwezig zijn het verschil.",
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
      text: "Aanwezig zijn als het rustig is, is makkelijk. Samen een boek lezen op de bank. Een puzzel maken. Dat kan iedereen.\n\nMaar aanwezig zijn als alles tegelijk schreeuwt? Dat is waar het echte vaderschap zit. Niet omdat je de chaos oplost. Maar omdat je er middenin staat en niet wegloopt.\n\nAls jij kalm blijft te midden van de storm, leren je kinderen iets cruciaals: het kan gek zijn, het kan moeilijk zijn, maar het is veilig. Papa is er. Dat gevoel van veiligheid in chaos — dat dragen ze hun hele leven mee.",
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
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De 60-seconden grounding. Voel je voeten op de grond. Adem in voor 4 tellen, uit voor 6. Doe dit 60 seconden voordat je reageert op chaos. Het voelt lang. Het is het waard.\n\n2. Je ankerzin. Kies één zin die je tegen jezelf zegt in de chaos. 'Ik kan dit aan.' 'Dit gaat voorbij.' 'Ze hebben me nu nodig.' Herhaal hem in je hoofd als het losbarst.\n\n3. Laag en langzaam. Hoe harder zij schreeuwen, hoe zachter jij praat. Hoe sneller zij bewegen, hoe langzamer jij beweegt. Je zenuwstelsel is besmettelijk — in beide richtingen.",
    },
    {
      type: "exercise" as const,
      title: "Het Anker Oefenen",
      instructions: "1. Kies nu je ankerzin. Schrijf hem op: 'Ik kan dit aan.' of 'Dit gaat voorbij.' of 'Ze hebben me nu nodig.'\n2. Vanavond: als er chaos komt — ruzie, geschreeuw, gemorst eten — stop.\n3. Voel je voeten op de grond. Letterlijk. Druk ze in de vloer.\n4. Adem één keer bewust uit. Lang. Door je mond.\n5. Zeg je ankerzin in je hoofd.\n6. Reageer dan pas. Eén moment is genoeg.",
      duration: 3,
      tips: [
        "Kies nu je ankerzin. Schrijf hem op een post-it en plak hem op de koelkast.",
        "Het gaat niet om perfect reageren. Het gaat om niet direct mee-exploderen.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Wat is jouw automatische reactie op chaos thuis — exploderen, bevriezen, of wegloop je?",
        "Wat zou er veranderen als je kinderen jou in de chaos zien als het anker in plaats van als nog een storm?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Aanwezig zijn in chaos is moeilijker dan aanwezig zijn in rust — maar het is ook veel waardevoller. Je hoeft de chaos niet op te lossen, alleen te blijven staan. Met grounding, een ankerzin en lage stem ben jij het anker waar je kinderen zich aan vasthouden.",
    },
  ],
  keyTakeaways: [
    "Aanwezig blijven in chaos is de echte test — niet aanwezig zijn als het rustig is",
    "Je hoeft chaos niet op te lossen, je hoeft alleen te blijven staan. Dat gevoel van veiligheid dragen kinderen hun hele leven mee",
    "Grounding (voeten op de grond, bewust ademhalen) en een ankerzin houden je in je Window of Tolerance",
  ],
  research: "Siegel (2012). The Developing Mind; Siegel & Bryson (2014). No-Drama Discipline; Porges (2011). Polyvagal Theory",
  quizQuestions: [
    {
      question: "Je twee kinderen schreeuwen tegelijk. Jij schreeuwt: 'STOP ALLEBEI!' Wat gebeurt er?",
      options: [
        { text: "De chaos verdubbelt — je voegt een derde zenuwstelsel in fight-mode toe", isCorrect: true },
        { text: "Ze stoppen meteen omdat je autoriteit toont", isCorrect: false },
      ],
      explanation: "Schreeuwen activeert meer stress bij iedereen. Je voegt je eigen ontregelde zenuwstelsel toe aan de chaos in plaats van het te kalmeren.",
    },
    {
      question: "Wat is het doel van 'grounding' in een chaotisch moment?",
      options: [
        { text: "Jezelf in je Window of Tolerance houden zodat je kunt reageren in plaats van exploderen", isCorrect: true },
        { text: "De chaos uitzitten tot iedereen vanzelf kalmeert", isCorrect: false },
      ],
      explanation: "Grounding houdt je in de zone waarin je nog kunt nadenken en bewust reageren. Het is geen passief wachten maar actief je zenuwstelsel reguleren.",
    },
    {
      question: "Hoe werkt het principe 'hoe harder zij schreeuwen, hoe zachter jij praat'?",
      options: [
        { text: "Je kinderen moeten moeite doen om je te horen en stoppen daarom met schreeuwen", isCorrect: false },
        { text: "Je rustige zenuwstelsel is besmettelijk — jouw kalmte helpt hun zenuwstelsel reguleren", isCorrect: true },
      ],
      explanation: "Co-regulatie werkt via spiegelneuronen. Jouw rustige stem en ontspannen lichaam vertellen het zenuwstelsel van je kind: het is veilig. Je kunt kalmeren.",
    },
    {
      question: "Je ankerzin is 'ik kan dit aan.' Maar midden in de chaos geloof je het niet. Werkt het dan nog?",
      options: [
        { text: "Ja — de zin activeert een bewust pad in je brein, ongeacht of je het op dat moment gelooft", isCorrect: true },
        { text: "Nee — als je het niet gelooft heeft de zin geen effect en kun je beter iets anders proberen", isCorrect: false },
      ],
      explanation: "Een ankerzin werkt niet op geloof maar op herhaling. Het activeert je prefrontale cortex en geeft je brein iets om mee bezig te zijn terwijl de amygdala afkoelt.",
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
      text: "Er hangt een hardnekkig schuldgevoel rond werkende vaders. Ik ben er niet genoeg. Ik mis te veel. De waarheid is genuanceerder dan dat.\n\nOnderzoek laat keer op keer zien: het gaat niet om de uren die je met je kind doorbrengt. Het gaat om de kwaliteit van de momenten. Vijf minuten waarin je kind jou helemaal heeft — oogcontact, aandacht, speelsheid — wegen zwaarder dan drie uur op de bank terwijl je op je telefoon zit.\n\nHet zijn de micro-momenten die tellen. Een knuffel bij de deur. Een gek gezicht bij het ontbijt. Drie minuten luisteren naar een verhaal over school. Dat zijn de momenten die je kind onthoudt. Niet de uren.",
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
        "Zet een herinnering op je telefoon voor de ochtend — tot het een gewoonte wordt",
        "Als je kind al slaapt als je thuiskomt: ga even bij het bed staan. Leg je hand op hun rug. Dat telt ook.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Hoeveel van je beschikbare tijd met je kind besteed je echt aan je kind — en hoeveel aan schuldgevoel over te weinig tijd?",
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
    "Vijf minuten volledige aandacht doen meer dan uren halve aanwezigheid — kwaliteit verslaat kwantiteit",
    "De 3-3-3 methode (3 min ochtend, 3 min thuiskomst, 3 min bedtijd) geeft je kind negen gouden minuten per dag",
    "Laat het schuldgevoel over te weinig tijd los — het verlamt je en maakt de tijd die je hebt waardeloos",
  ],
  research: "Bowlby (1969). Attachment and Loss; Milkie et al. (2015). Does the Amount of Time Mothers Spend With Children Matter? Journal of Marriage and Family; Ainsworth (1978). Patterns of Attachment",
  quizQuestions: [
    {
      question: "Wat vond het onderzoek in Journal of Marriage and Family (2015) over tijd met kinderen?",
      options: [
        { text: "De totale hoeveelheid tijd had nauwelijks invloed — betrokken, aandachtige momenten wél", isCorrect: true },
        { text: "Hoe meer uren samen, hoe beter de uitkomsten voor kinderen", isCorrect: false },
      ],
      explanation: "Het onderzoek vond dat de kwantiteit tijd vrijwel niet uitmaakt. Wat wél telt is de kwaliteit: responsieve, aandachtige momenten van echte verbinding.",
    },
    {
      question: "Je komt laat thuis. Je kind gaat over 20 minuten naar bed. Wat werkt het best?",
      options: [
        { text: "Eerst je jas uittrekken, mail checken en dan naar je kind — je hebt even rust nodig", isCorrect: false },
        { text: "Telefoon in de la, de eerste drie minuten direct naar je kind — de rest kan wachten", isCorrect: true },
      ],
      explanation: "De eerste drie minuten na thuiskomst zetten de toon. Je kind ziet: papa kiest voor mij. Die boodschap is krachtiger dan een uur samen op de bank.",
    },
    {
      question: "Waarom werkt 'Wat was het gekste dat er vandaag gebeurde?' beter dan 'Hoe was je dag?'",
      options: [
        { text: "Specifieke vragen openen een verhaal — 'hoe was je dag?' levert altijd 'goed' op", isCorrect: true },
        { text: "Kinderen houden van gekke vragen omdat het grappig is", isCorrect: false },
      ],
      explanation: "Open maar specifieke vragen activeren het geheugen en nodigen uit tot vertellen. 'Hoe was je dag?' is te breed en te makkelijk af te kappen met 'goed'.",
    },
    {
      question: "Je kind slaapt al als je thuiskomt van werk. Is de 3-3-3 methode dan nutteloos?",
      options: [
        { text: "Nee — ga even bij het bed staan, hand op hun rug, en gebruik de ochtend voor de andere twee momenten", isCorrect: true },
        { text: "Ja — als je kind slaapt kun je niks meer doen, focus op het weekend", isCorrect: false },
      ],
      explanation: "Verbinding stopt niet bij wakker zijn. Even bij het bed staan telt. En de drie minuten ochtend zijn dan extra belangrijk — die draagt je kind de hele dag mee.",
    },
  ],
},
];
