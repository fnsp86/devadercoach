import type { LearningModule, Skill } from "../types";

export const AUTONOMIE_MODULES: LearningModule[] = [
{
  id: "au_mod_1",
  skill: "Autonomie" as Skill,
  title: "Stop Met Helpen",
  description: "Je kind worstelt. Jij grijpt in. Maar elke keer dat je te snel helpt, steel je een leermoment. Ontdek de kracht van je handen in je zakken.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 1,
  content: [
    {
      type: "text" as const,
      heading: "Ze worstelt. Jij grijpt in.",
      text: "Nora (5) zit op de gang. Schoenen voor haar neus. Ze trekt aan de klittenband, verkeerde voet. Jij ziet het. Drie seconden later zit jij op je knieën en doe je het voor haar. Klaar. Snel. Opgelost.\n\nMaar wat heeft ze net geleerd? Dat papa het beter kan.",
    },
    {
      type: "text" as const,
      heading: "Het gestolen leermoment",
      text: "Elke keer dat je te snel helpt, steel je een leermoment. Dat klinkt hard. Maar het is waar.\n\nJe kind zit midden in iets moeilijks. Haar brein werkt op volle toeren. Neuronen vuren. Ze probeert, faalt, probeert opnieuw. Dat is leren. Dat ongemak dat jij ziet? Dat is groei die aan het gebeuren is.\n\nEn dan kom jij. Met je grote handige vaderhanden. Je lost het op. De frustratie stopt. Maar het leerproces ook.\n\nDe kunst is niet niks doen. De kunst is weten wanneer je wacht. En wanneer je net genoeg hulp geeft zodat zij het zelf kan.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Vygotsky beschreef de 'zone van naaste ontwikkeling': het gebied tussen wat je kind alleen kan en wat ze met een beetje hulp kan. Dáár zit de groei. Te veel hulp? Je kind leert niks. Te weinig? Frustratie en opgeven. De juiste hulp op het juiste moment heet scaffolding — als een steiger die je weghaalt zodra de muur staat.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De drie zones van leren",
      diagramData: [
        {
          emoji: "🟢",
          label: "Comfortzone",
          description: "Dit kan ze al. Hier is geen hulp nodig. Laat haar dit zelf doen — ook als het langzamer gaat dan jij wilt.",
        },
        {
          emoji: "🟡",
          label: "Zone van naaste ontwikkeling",
          description: "Dit kan ze bijna. Met een hint, een vraag of een klein duwtje lukt het. Hier zit de groei. Hier wil je zijn.",
        },
        {
          emoji: "🔴",
          label: "Frustratiezone",
          description: "Dit is te moeilijk. Hier helpen hints niet. Hier mag je ingrijpen — maar door de taak kleiner te maken, niet door het over te nemen.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Nora (5) probeert haar schoenen aan te doen. Ze heeft de verkeerde voet, trekt aan de klittenband, het lukt niet. Ze zucht. Je ziet haar frustratie groeien.",
      wrongApproach: "TE SNEL HELPEN:\n\nPapa ziet Nora worstelen. Na drie seconden: 'Kom, ik doe het wel even.'\nPapa doet de schoenen aan. Klaar in tien seconden.\nNora rent naar buiten.\n\nProbleem opgelost. Maar Nora heeft geleerd: als het moeilijk is, doet papa het.",
      rightApproach: "WACHTEN EN SCAFFOLDEN:\n\nPapa ziet Nora worstelen. Handen in zijn zakken. Wacht tien seconden.\nNora: 'Het lukt niet!'\nPapa: 'Hmm. Welke voet zit die schoen nu op?'\nNora kijkt. Wisselt. Trekt. Klittenband vast.\nNora: 'Hé! Het lukt!'\n\nZelfde schoen. Maar nu is het háár overwinning.",
      explanation: "Het verschil is tien seconden wachten en één vraag stellen. Papa nam het niet over — hij gaf net genoeg richting zodat Nora het zelf kon ontdekken. Dat is scaffolding.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Handen in je zakken. Letterlijk. Als je kind worstelt, stop je handen in je zakken. Het voorkomt dat je automatisch ingrijpt.\n\n2. Wacht tien seconden. Tel in je hoofd. Tien seconden voelen lang als je kind worstelt. Maar die tien seconden zijn het verschil tussen overnemen en leren.\n\n3. Vraag: 'Wat is je plan?' In plaats van te helpen, vraag wat zij wil proberen. Je geeft haar de regie terug zonder haar alleen te laten.\n\n4. Geef hints, geen oplossingen. 'Welke voet zou het kunnen zijn?' werkt beter dan 'Andere voet!'",
    },
    {
      type: "exercise" as const,
      title: "De Tien-Seconden-Regel",
      instructions: "1. Kies vandaag of morgen één moment waarop je kind iets probeert dat lastig is — schoenen, rits, puzzel, huiswerk.\n2. Stop je handen letterlijk in je zakken.\n3. Tel in je hoofd tot tien. Tien seconden voelen lang. Houd vol.\n4. Stel maximaal één vraag: 'Wat is je plan?' of 'Wat zou je kunnen proberen?'\n5. Kijk wat er gebeurt — en voel je eigen ongemak. Dat ongemak is het teken dat je het goed doet.",
      duration: 3,
      tips: [
        "Het voelt ongemakkelijk om te wachten. Dat is normaal. Dat ongemak is het teken dat je het goed doet.",
        "Als het echt niet lukt na twee pogingen, maak de taak kleiner: 'Zal ik de eerste stap doen, en jij de rest?'",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Bij welke dagelijkse dingen grijp je automatisch in terwijl je kind het waarschijnlijk zelf zou kunnen?",
        "Hoe voelt het voor jou als je je kind ziet worstelen? Wat wil je het liefst doen — en waarom?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Te snel helpen steelt leermomenten. De zone van naaste ontwikkeling is waar groei zit — net buiten comfort, niet in frustratie. Handen in je zakken, tien seconden wachten, en stel een vraag in plaats van het over te nemen.",
    },
  ],
  keyTakeaways: [
    "Elke keer dat je te snel helpt, steel je een leermoment — wacht tien seconden",
    "De zone van naaste ontwikkeling is waar groei zit: net moeilijk genoeg, met net genoeg steun",
    "Scaffolding = hints en vragen geven, niet overnemen — zodat het hun overwinning wordt",
  ],
  research: "Vygotsky (1978). Mind in Society; Wood, Bruner & Ross (1976). The role of tutoring in problem solving",
  quizQuestions: [
    {
      question: "Nora (5) worstelt met haar rits. Wat is de beste eerste stap?",
      options: [
        { text: "De rits voor haar dichtdoen zodat jullie op tijd zijn", isCorrect: false },
        { text: "Tien seconden wachten en dan vragen: 'Wat is je plan?'", isCorrect: true },
      ],
      explanation: "Door te wachten en een vraag te stellen geef je haar de kans om het zelf op te lossen. Dat is scaffolding: net genoeg steun zonder het over te nemen.",
    },
    {
      question: "Wat is de 'zone van naaste ontwikkeling'?",
      options: [
        { text: "Het gebied waar je kind het alleen kan zonder hulp", isCorrect: false },
        { text: "Het gebied waar je kind het bijna kan — met een beetje hulp lukt het", isCorrect: true },
      ],
      explanation: "De zone van naaste ontwikkeling is precies tussen 'kan ik al' en 'te moeilijk'. Hier zit de echte groei. Jouw taak is net genoeg hulp geven — niet meer, niet minder.",
    },
    {
      question: "Je kind raakt gefrustreerd bij een puzzel. Wat doe je?",
      options: [
        { text: "Het juiste stukje aanwijzen zodat de frustratie stopt", isCorrect: false },
        { text: "De taak kleiner maken: 'Kijk eens naar de kleur van dit hoekje'", isCorrect: true },
      ],
      explanation: "Een hint over de kleur maakt de taak kleiner zonder het antwoord te geven. Je kind lost het nog steeds zelf op. Dat gevoel van 'ik kan het!' bouw je niet door het voor ze te doen.",
    },
    {
      question: "Je kind (5) raakt gefrustreerd en begint te huilen bij het aantrekken van haar jas. Ze is in de frustratiezone. Wat doe je?",
      options: [
        { text: "De taak kleiner maken: 'Zal ik de rits starten? Dan trek jij hem omhoog'", isCorrect: true },
        { text: "Haar laten huilen — ze moet leren omgaan met frustratie", isCorrect: false },
      ],
      explanation: "In de frustratiezone is de taak te moeilijk voor hints alleen. Door de taak kleiner te maken breng je haar terug naar de zone van naaste ontwikkeling — waar groei zit.",
    },
  ],
},
{
  id: "au_mod_2",
  skill: "Autonomie" as Skill,
  title: "Laat Ze Kiezen",
  description: "Elke ochtend dezelfde strijd: 'Ik wil dit niet aan!' Ontdek hoe twee simpele keuzes de machtsstrijd stoppen en motivatie opbouwen.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 2,
  content: [
    {
      type: "text" as const,
      heading: "Weer die ochtendstrijd.",
      text: "Saar (4) staat in haar ondergoed. Jij houdt een broek omhoog. 'Deze aan.' Saar: 'Nee!' Jij: 'Saar, we moeten gaan.' Saar: 'NEE!' En zo begint weer een ochtend die eindigt in tranen. Van haar. Of van jou.",
    },
    {
      type: "text" as const,
      heading: "Keuzes zijn brandstof",
      text: "Kinderen willen maar één ding: een beetje controle over hun eigen leven. Dat is geen lastig gedrag. Dat is een basisbehoefte.\n\nElke keer dat je alles voor ze beslist — wat ze aantrekken, wat ze eten, wanneer ze stoppen — duw je tegen die behoefte in. En dan krijg je verzet. Logisch.\n\nDe oplossing is simpel. Niet alles loslaten. Maar binnen jouw grenzen ruimte maken voor hun keuze. Twee opties. Allebei oké voor jou. Maar voor je kind voelt het als: ik mag kiezen. Ik heb iets te zeggen.\n\nDie kleine keuze doet iets groots. Het verandert 'ik moet' in 'ik wil'. En een kind dat wil, hoef je niet te pushen.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Deci en Ryan ontdekten met hun zelfdeterminatietheorie dat mensen drie basisbehoeften hebben: autonomie, competentie en verbondenheid. Autonomie — het gevoel dat je invloed hebt op je eigen leven — is de sterkste motor van intrinsieke motivatie. Kinderen die keuzes krijgen, werken harder, zijn minder opstandig en voelen zich competenter.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Van machtsstrijd naar samenwerking",
      diagramData: [
        {
          emoji: "💥",
          label: "Bevel: 'Doe dit aan'",
          description: "Nul autonomie. Kind voelt zich gecontroleerd. Resultaat: verzet, tranen, strijd. Elke ochtend opnieuw.",
        },
        {
          emoji: "🤝",
          label: "Keuze: 'Rode of blauwe broek?'",
          description: "Grenzen staan. Kind voelt regie. Resultaat: samenwerking. Minder strijd, sneller aangekleed.",
        },
        {
          emoji: "🚀",
          label: "Eigenaarschap: 'Wat wil jij aan?'",
          description: "Volledige autonomie binnen kader. Kind voelt zich competent en vertrouwd. Werkt bij oudere kinderen.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Saar (4) moet zich aankleden voor school. Het is 7:45. Jullie moeten om 8:00 de deur uit. Ze staat in haar ondergoed en weigert alles wat je aanreikt.",
      wrongApproach: "BEVEL EN STRIJD:\n\nPapa: 'Saar, doe deze broek aan.'\nSaar: 'Nee! Ik wil mijn prinsessenjurk!'\nPapa: 'Het is winter. Doe die broek aan.'\nSaar: schreeuwt.\nPapa trekt de broek aan terwijl Saar huilt.\n\nKlaar. Maar de dag begint met tranen en frustratie. Voor allebei.",
      rightApproach: "KEUZE BINNEN GRENZEN:\n\nPapa legt twee broeken op bed. 'Saar, welke wil jij: de rode of de blauwe?'\nSaar: 'De rode!'\nPapa: 'Goeie keuze. Doe jij hem zelf aan of zal ik helpen?'\nSaar trekt de rode broek aan.\n\nZelfde tijdstip. Maar Saar had regie. Geen strijd nodig.",
      explanation: "Papa bepaalde nog steeds de grenzen — het moest een broek zijn, geen prinsessenjurk in de winter. Maar binnen die grenzen had Saar een echte keuze. Dat veranderde het van een bevel in een uitnodiging.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De twee-keuzes-techniek. Bied twee opties die allebei voor jou oké zijn. 'Eerst tanden poetsen of eerst pyjama aan?' Het maakt jou niet uit. Maar voor je kind is het een wereld van verschil.\n\n2. Keuze binnen grenzen. Jij bepaalt het kader, zij kiezen daarbinnen. 'We eten groente. Wil je broccoli of wortels?' De grens staat. De keuze is echt.\n\n3. De vals-dilemma-techniek. Als je kind 'nee' zegt op alles: 'Wil je je jas aandoen of wil je hem dragen naar de auto?' Beide opties leiden naar hetzelfde doel.",
    },
    {
      type: "exercise" as const,
      title: "De Twee-Keuzes-Dag",
      instructions: "1. Kies drie momenten vandaag waarop je normaal een bevel geeft.\n2. Vervang elk bevel door een keuze tussen twee opties:\n   - Ontbijt: 'Boterham of cracker?'\n   - Aankleden: 'Rood of blauw shirt?'\n   - Avond: 'Eerst tanden poetsen of eerst boek lezen?'\n3. Let op wat er verandert: minder strijd? Sneller klaar? Beter humeur?\n4. Bij een tiener (12+): geef grotere keuzes. 'Huiswerk voor of na het eten?' 'Zelf koken vanavond of helpen met afwassen?'",
      duration: 5,
      tips: [
        "Houd het simpel: maximaal twee opties. Drie of meer is te veel voor jonge kinderen en leidt tot keuzestress.",
        "Als ze iets kiezen dat niet kan: 'Die is in de was. Maar je mag kiezen: deze of deze.'",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Op welke momenten voel je de meeste weerstand van je kind? Zou een keuze daar kunnen helpen?",
        "Hoe vaak per dag beslis jij alles voor je kind — en hoe zou het voelen als iemand dat bij jou deed?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Kinderen hebben autonomie nodig als brandstof voor motivatie. Keuzes geven binnen grenzen stopt machtsstrijd en bouwt eigenaarschap. Twee opties is genoeg. Jij bepaalt het kader, zij kiezen daarbinnen. 'Ik moet' wordt 'ik wil'.",
    },
  ],
  keyTakeaways: [
    "Autonomie is een basisbehoefte — kinderen die keuzes krijgen zijn gemotiveerder en minder opstandig",
    "Twee opties binnen jouw grenzen: jij bepaalt het kader, je kind kiest daarbinnen",
    "De vals-dilemma-techniek werkt als alles 'nee' is: beide opties leiden naar hetzelfde doel",
  ],
  research: "Deci & Ryan (2000). Self-Determination Theory; Iyengar & Lepper (2000). When choice is demotivating",
  quizQuestions: [
    {
      question: "Saar (4) weigert haar jas aan te doen. Wat werkt het best?",
      options: [
        { text: "'Doe je jas aan, we gaan nu' — duidelijk en snel", isCorrect: false },
        { text: "'Wil je je jas hier aandoen of bij de auto?' — keuze binnen grenzen", isCorrect: true },
      ],
      explanation: "Beide opties leiden naar hetzelfde doel (jas aan) maar geven je kind het gevoel van regie. Dat vermindert weerstand omdat de autonomiebehoefte wordt vervuld.",
    },
    {
      question: "Waarom werken keuzes beter dan bevelen bij jonge kinderen?",
      options: [
        { text: "Omdat kinderen altijd hun zin moeten krijgen", isCorrect: false },
        { text: "Omdat autonomie een basisbehoefte is die motivatie en samenwerking stimuleert", isCorrect: true },
      ],
      explanation: "Volgens de zelfdeterminatietheorie is autonomie een basisbehoefte. Keuzes vervullen die behoefte. Het gaat niet om hun zin krijgen — het gaat om het gevoel dat ze invloed hebben.",
    },
    {
      question: "Hoeveel keuzes bied je een vierjarige het best aan?",
      options: [
        { text: "Twee opties — meer leidt tot keuzestress", isCorrect: true },
        { text: "Vier of vijf opties — hoe meer keuze, hoe beter", isCorrect: false },
      ],
      explanation: "Jonge kinderen raken overweldigd door te veel opties. Twee keuzes is genoeg om autonomie te voelen zonder keuzestress te veroorzaken.",
    },
    {
      question: "Je tiener (13) wil zelf bepalen wanneer hij zijn huiswerk maakt. Hoe geef je autonomie binnen grenzen?",
      options: [
        { text: "'Het moet af voor het eten. Wanneer je het doet is aan jou.' — kader plus keuzevrijheid", isCorrect: true },
        { text: "'Doe het nu, dan is het maar klaar.' — structuur is belangrijk op die leeftijd", isCorrect: false },
      ],
      explanation: "Tieners hebben nog meer behoefte aan autonomie dan kleuters. Het kader staat (voor het eten af), maar de timing is hun keuze. Dat voorkomt machtsstrijd en bouwt eigenaarschap.",
    },
  ],
},
{
  id: "au_mod_3",
  skill: "Autonomie" as Skill,
  title: "Laat Het Fout Gaan",
  description: "Die toren gaat vallen. Jij ziet het. Maar falen is geen probleem — het is de grondstof van groei. Leer waarom je soms moet toekijken.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 3,
  content: [
    {
      type: "text" as const,
      heading: "Die toren gaat vallen.",
      text: "Daan (7) bouwt een toren van blokken. Hoog. Te hoog. Jij ziet het wiebelen. Je vingers jeuken. Je wilt zeggen: 'Niet zo hoog, hij valt om.' Maar die toren is nog niet gevallen. En Daan leert nu meer dan jij denkt.",
    },
    {
      type: "text" as const,
      heading: "Falen is grondstof",
      text: "Wij vaders willen onze kinderen beschermen tegen teleurstelling. Logisch. Maar elke keer dat je een mislukking voorkomt, voorkom je ook het leermoment dat erin zit.\n\nDaans toren valt om. Wat gebeurt er? Misschien tranen. Misschien frustratie. Maar dan: hij kijkt. Hij denkt na. Waarom viel hij? Te hoog? Te smal onderaan? Hij bouwt opnieuw. Anders. Beter.\n\nDat is geen falen. Dat is het leerproces in actie. Zijn brein maakt verbindingen die alleen ontstaan door te zien dat dingen fout gaan.\n\nJouw taak is niet de val voorkomen. Jouw taak is er zijn als het valt. En dan niet te zeggen 'zie je wel' maar: 'Wat ga je anders doen?'",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Carol Dweck toonde aan dat kinderen die leren dat fouten bij het proces horen — een 'growth mindset' — meer doorzetten, hogere prestaties leveren en minder faalangst ontwikkelen. Productief falen is een bewezen leerstrategie: kinderen die eerst zelf worstelen onthouden oplossingen beter dan kinderen die direct het antwoord krijgen.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Twee reacties op falen",
      diagramData: [
        {
          emoji: "🛡️",
          label: "Beschermen tegen falen",
          description: "Je voorkomt de val. Kind leert: fouten zijn eng. Resultaat: faalangst, minder proberen, afhankelijkheid van papa.",
        },
        {
          emoji: "🔄",
          label: "Begeleiden door falen",
          description: "Je laat de val toe. Kind leert: fouten zijn informatie. Resultaat: veerkracht, doorzettingsvermogen, 'ik kan het opnieuw proberen'.",
        },
        {
          emoji: "💬",
          label: "De taal maakt het verschil",
          description: "Niet: 'Goed gedaan!' (uitkomst). Wel: 'Je hebt hard gewerkt' (proces). De woorden die je kiest bepalen hoe je kind over fouten denkt.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Daan (7) bouwt een hoge toren van blokken. Je ziet dat hij wiebelt en waarschijnlijk gaat vallen. Daan legt het volgende blok erop.",
      wrongApproach: "FALEN VOORKOMEN:\n\nPapa: 'Daan, niet zo hoog! Hij valt om!'\nDaan stopt. Kijkt teleurgesteld.\nPapa: 'Hier, als je hem breder maakt onderin...'\nPapa herbouwt de basis.\n\nDe toren staat. Maar het is papa's toren. En Daan heeft geleerd: ik kan het niet zonder hulp.",
      rightApproach: "FALEN BEGELEIDEN:\n\nPapa ziet de toren wiebelen. Zegt niks. Wacht.\nDe toren valt. Daan: 'Nee!'\nPapa: 'Balen. Wat denk je dat er gebeurde?'\nDaan: 'Hij was te hoog...'\nPapa: 'Hmm. Wat zou je anders kunnen doen?'\nDaan begint opnieuw. Bredere basis dit keer.\n\nDaan heeft nu iets geleerd over constructie dat geen uitleg hem had kunnen geven.",
      explanation: "Door de val toe te laten en daarna procesgerichte vragen te stellen, transformeerde papa een mislukking in een leermoment. Daan ontdekte zelf het probleem en de oplossing — dat beklijft veel beter dan een instructie van buitenaf.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Eén ding per dag laten mislukken. Kies bewust één moment waarop je niet ingrijpt. De melk die morst. De tekening die mislukt. De toren die valt. Laat het gebeuren.\n\n2. Procestaal, niet uitkomsttaal. Niet: 'Wat mooi!' Wel: 'Je hebt lang doorgewerkt.' Niet: 'Slim!' Wel: 'Je hebt een slimme manier bedacht.' Focus op de inspanning, niet het resultaat.\n\n3. De magische vraag na falen. 'Wat ga je anders proberen?' Geen oordeel. Geen oplossing. Alleen een uitnodiging om na te denken.\n\n4. Normaliseer fouten. 'Papa maakt ook fouten. Vandaag nog. Weet je wat ik deed?' Laat zien dat falen bij het leven hoort.\n\n5. Tiener-variant. Bij een puber (13+) worden de stakes groter: een slecht proefwerk, een mislukte auditie, een afwijzing. Dezelfde principes gelden — maar met meer ruimte. Niet: 'Volgende keer beter.' Wel: 'Balen. Wat heb je ervan geleerd?' Tieners willen serieus genomen worden, niet getroost als een kleuter.",
    },
    {
      type: "exercise" as const,
      title: "De Laat-Het-Vallen Oefening",
      instructions: "Kies vandaag één moment waarop je normaal zou ingrijpen om een fout te voorkomen. Laat het gebeuren. Als het misgaat, stel één vraag: 'Wat denk je dat er gebeurde?' of 'Wat zou je anders doen?' Kijk hoe je kind reageert. Schrijf vanavond op wat je zag.",
      duration: 4,
      tips: [
        "Begin klein en veilig. Morsen, omvallen, verkeerd tekenen — geen situaties waar echt gevaar bij komt kijken.",
        "Let op je eigen reactie: voel je de neiging om te fixen? Dat is normaal. Adem. Wacht.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Welke fouten van je kind probeer je het vaakst te voorkomen? Wat zou er echt gebeuren als je het liet gaan?",
        "Hoe werd er in jouw opvoeding omgegaan met fouten maken? Herken je dat patroon bij jezelf?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Falen is geen probleem maar grondstof voor groei. Kinderen met een growth mindset zien fouten als informatie, niet als bewijs dat ze het niet kunnen. Gebruik procestaal, laat dingen misgaan en stel daarna de magische vraag: 'Wat ga je anders proberen?'",
    },
  ],
  keyTakeaways: [
    "Falen voorkomen voorkomt ook het leermoment — laat dingen misgaan in een veilige context",
    "Growth mindset: kinderen die leren dat fouten erbij horen, zetten meer door en hebben minder faalangst",
    "Gebruik procestaal ('je hebt hard gewerkt') in plaats van uitkomsttaal ('wat knap!')",
  ],
  research: "Dweck (2006). Mindset: The New Psychology of Success; Kapur (2008). Productive Failure",
  quizQuestions: [
    {
      question: "Daan (7) bouwt een toren die gaat vallen. Wat is de beste reactie?",
      options: [
        { text: "Waarschuwen dat hij niet zo hoog moet bouwen", isCorrect: false },
        { text: "Laten vallen en daarna vragen: 'Wat denk je dat er gebeurde?'", isCorrect: true },
      ],
      explanation: "Door de val toe te laten en een procesgerichte vraag te stellen, maak je van een mislukking een leermoment. Daan ontdekt zelf wat er misging — dat beklijft beter dan jouw waarschuwing.",
    },
    {
      question: "Je kind maakt een mooie tekening. Wat zeg je?",
      options: [
        { text: "'Je hebt lang doorgewerkt aan die kleuren' — procestaal", isCorrect: true },
        { text: "'Wat mooi! Je bent echt een kunstenaar!' — compliment op talent", isCorrect: false },
      ],
      explanation: "Procestaal ('je hebt hard gewerkt') bouwt een growth mindset. Complimenten op talent ('je bent slim/creatief') creëren angst om die status te verliezen, waardoor kinderen minder risico's durven nemen.",
    },
    {
      question: "Wat is 'productief falen'?",
      options: [
        { text: "Kinderen expres laten mislukken zodat ze leren dat het leven hard is", isCorrect: false },
        { text: "Kinderen eerst zelf laten worstelen zodat ze oplossingen beter onthouden", isCorrect: true },
      ],
      explanation: "Productief falen betekent dat kinderen eerst zelf proberen voordat ze hulp krijgen. Het worstelen activeert hun brein op een manier die de oplossing beter laat beklijven.",
    },
    {
      question: "Je dochter (9) heeft een proefwerk slecht gemaakt. Ze is verdrietig. Wat zeg je?",
      options: [
        { text: "'Balen. Wat denk je dat je volgende keer anders kunt doen?' — procesgerichte vraag", isCorrect: true },
        { text: "'Niet erg, je bent gewoon slim — volgende keer beter!' — geruststelling op talent", isCorrect: false },
      ],
      explanation: "Geruststelling op talent bouwt faalangst: als ik slim ben maar toch faal, is er iets erg mis. Een procesgerichte vraag normaliseert de tegenslag en richt de blik op wat ze zelf kan veranderen.",
    },
  ],
},
{
  id: "au_mod_4",
  skill: "Autonomie" as Skill,
  title: "Van 'Papa Doe Het' Naar 'Ik Kan Het Zelf'",
  description: "Je kind zegt 'papa doe het!' bij alles. Hoe bouw je steun af zonder je kind te laten vallen? De scaffolding-ladder helpt.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 4,
  content: [
    {
      type: "text" as const,
      heading: "'Papa doe het!' Weer.",
      text: "Je kind kan het. Je weet dat ze het kan. Maar daar zit ze. Armen over elkaar. 'Papa doe het!' En jij? Jij doet het. Weer. Want het is sneller. Makkelijker. En je hebt geen zin in de strijd van vanavond half negen.",
    },
    {
      type: "text" as const,
      heading: "Steun afbouwen, niet overnemen",
      text: "Scaffolding is niet alleen hulp geven. Het is hulp afbouwen. Denk aan een steiger rond een gebouw: je zet hem neer terwijl je bouwt, en haalt hem weg als het gebouw zelf staat.\n\nHet probleem is dat wij vaders vaak blijven stutten. We helpen bij dingen die ons kind allang zelf kan. Niet omdat zij het niet kunnen, maar omdat wij het niet loslaten.\n\n'Papa doe het' is soms echt 'ik kan het niet.' Maar vaker is het 'het is makkelijker als jij het doet.' En elke keer dat je toegeeft, bevestig je: je hebt gelijk, je kunt het niet zonder mij.\n\nDe scaffolding-ladder werkt andersom. Je begint met veel hulp en bouwt stap voor stap af. Totdat je kind het zelf doet — en weet dat ze het zelf kan.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Albert Bandura bewees dat self-efficacy — het geloof dat je iets kunt — de belangrijkste voorspeller is van succes. Kinderen bouwen self-efficacy op door dingen zelf te doen en te slagen. Niet doordat jij ze vertelt dat ze het kunnen, maar doordat ze het ervaren. De geleidelijke overdracht van verantwoordelijkheid is een bewezen methode om dit stap voor stap op te bouwen.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De scaffolding-ladder (van veel naar weinig hulp)",
      diagramData: [
        {
          emoji: "1️⃣",
          label: "Samen doen",
          description: "Jij doet het voor, kind kijkt mee. 'Kijk, zo doe ik het.' Alleen bij echt nieuwe taken. Zo kort mogelijk.",
        },
        {
          emoji: "2️⃣",
          label: "Samen proberen",
          description: "Kind doet het, jij helpt waar nodig. 'Probeer jij, ik help als het lastig wordt.' Jij bent de vangnet-persoon.",
        },
        {
          emoji: "3️⃣",
          label: "Zelf doen",
          description: "Kind doet het alleen. Jij bent in de buurt maar grijpt niet in. 'Jij kunt dit.' Vier de poging, niet alleen het resultaat.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Emma (6) kan al haar brood smeren maar zegt elke ochtend: 'Papa doe het!' Je weet dat ze het kan. Maar het is ochtend, je bent moe, en het gaat sneller als jij het doet.",
      wrongApproach: "ELKE KEER OVERNEMEN:\n\nEmma: 'Papa doe het!'\nPapa smeert het brood. Elke ochtend.\nEmma leert: als ik vraag, doet papa het.\n\nNa drie maanden smeert Emma nog steeds geen eigen brood. Haar zelfvertrouwen bij nieuwe taken: laag. Want waarom proberen als papa het toch doet?",
      rightApproach: "SCAFFOLDING AFBOUWEN:\n\nMaandag — Papa: 'Ik doe het mes, jij smeert.'\nWoensdag — Papa: 'Jij mag het helemaal. Ik sta hier als je hulp nodig hebt.'\nVrijdag — Emma smeert haar eigen brood. Papa zit aan tafel.\nEmma, trots: 'Kijk papa! Helemaal zelf!'\n\nZelfde week. Maar nu weet Emma: ik kan dit.",
      explanation: "Papa bouwde de hulp in drie stappen af. Van samen doen naar zelf doen in één week. Het geheim is niet het loslaten zelf — het is de geleidelijkheid. Elke stap gaf Emma net genoeg vertrouwen voor de volgende.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Eén nieuwe taak per week. Kies één ding dat je nu voor je kind doet terwijl ze het waarschijnlijk zelf kan. Schoenen aantrekken. Beker pakken. Brood smeren. Bouw het deze week af.\n\n2. De scaffolding-ladder. Stap 1: samen doen. Stap 2: kind doet het, jij vangt op. Stap 3: kind doet het zelf. Eén stap per keer is genoeg.\n\n3. Vier pogingen, niet alleen successen. 'Je hebt het geprobeerd!' is krachtiger dan 'goed gedaan!' Het normaliseert de worsteling.\n\n4. De ik-geloof-in-jou-zin. Bij 'papa doe het': 'Ik weet dat je dit kunt. Probeer het eerst zelf. Ik ben hier.'",
    },
    {
      type: "exercise" as const,
      title: "De Eén-Taak-Overdracht",
      instructions: "Kies één taak die je nu altijd voor je kind doet maar die ze waarschijnlijk (bijna) zelf kan. Brood smeren, jas aandoen, speelgoed opruimen. Gebruik de scaffolding-ladder: doe het vandaag samen, morgen laat je kind het proberen met jou als vangnet. Overmorgen: helemaal zelf. Schrijf op welke taak je koos en hoe het ging.",
      duration: 5,
      tips: [
        "Begin met iets waarvan je zeker weet dat het kan lukken. Succes in het begin bouwt vertrouwen voor moeilijkere taken.",
        "'Papa doe het' mag je beantwoorden met: 'Ik help je met het begin, en dan doe jij de rest.' Dat is stap 2 op de ladder.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Welke dingen doe je nog voor je kind die ze eigenlijk al zelf zou kunnen? Waarom doe je ze nog?",
        "Hoe voelt het als je kind zegt 'ik kan het zelf'? Trots? Of een beetje overbodig?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Self-efficacy groeit door zelf doen, niet door horen dat je het kunt. Gebruik de scaffolding-ladder: samen doen, samen proberen, zelf doen. Bouw elke week één taak af. Vier de poging, niet alleen het resultaat. 'Papa doe het' wordt 'ik kan het zelf.'",
    },
  ],
  keyTakeaways: [
    "Self-efficacy — het geloof 'ik kan dit' — groeit alleen door het zelf te doen en te ervaren",
    "De scaffolding-ladder: samen doen, samen proberen, zelf doen — bouw hulp geleidelijk af",
    "Vier pogingen, niet alleen successen — dat normaliseert worsteling en bouwt doorzettingsvermogen",
  ],
  research: "Bandura (1997). Self-Efficacy: The Exercise of Control; Fisher & Frey (2013). Gradual Release of Responsibility",
  quizQuestions: [
    {
      question: "Emma (6) zegt 'papa doe het!' bij haar brood smeren. Ze kan het al. Wat doe je?",
      options: [
        { text: "Snel haar brood smeren want het is ochtend en je hebt geen tijd", isCorrect: false },
        { text: "'Ik doe het mes, jij smeert' — samen doen als tussenstap", isCorrect: true },
      ],
      explanation: "Door de taak te delen geef je Emma een tussenstap op de scaffolding-ladder. Ze doet het makkelijke deel zelf en bouwt zo vertrouwen op voor de volgende stap: helemaal zelf.",
    },
    {
      question: "Wat is self-efficacy?",
      options: [
        { text: "Het geloof dat je iets kunt — opgebouwd door het zelf te doen en te ervaren", isCorrect: true },
        { text: "Het vermogen om alles alleen te doen zonder hulp van anderen", isCorrect: false },
      ],
      explanation: "Self-efficacy is het geloof in je eigen kunnen. Het groeit niet doordat iemand zegt 'je kunt het' maar doordat je het zelf doet en merkt: hé, het lukt. Daarom is het zo belangrijk om stap voor stap los te laten.",
    },
    {
      question: "Je kind probeert iets en het mislukt. Wat zeg je?",
      options: [
        { text: "'Goed geprobeerd! Wat zou je anders kunnen doen?' — de poging vieren", isCorrect: true },
        { text: "'Geeft niet, ik doe het wel even voor je' — frustratie voorkomen", isCorrect: false },
      ],
      explanation: "Door de poging te vieren en een vraag te stellen, leer je je kind dat worsteling normaal is. Overnemen leert: ik kan het niet. Vieren leert: proberen is al waardevol.",
    },
    {
      question: "Je kind kan al drie weken zelf haar brood smeren, maar zegt vandaag weer 'papa doe het.' Wat is er aan de hand?",
      options: [
        { text: "Waarschijnlijk is ze moe of heeft ze een slechte dag — bied stap 2 aan: 'Ik help met het begin'", isCorrect: true },
        { text: "Ze is lui geworden — je moet stevig zijn en zeggen dat ze het zelf moet doen", isCorrect: false },
      ],
      explanation: "Terugval is normaal. Op moeilijke dagen hebben kinderen meer steun nodig. Dat is geen achteruitgang maar menselijk. Bied een tussenstap aan en bouw morgen weer af.",
    },
  ],
},
{
  id: "au_mod_5",
  skill: "Autonomie" as Skill,
  title: "Je Kind Kan Meer Dan Je Denkt",
  description: "Je hangt boven je kind dat brood smeert. Maar hun capabele zone is groter dan jouw comfortzone. Tijd voor een vertrouwenssprong.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 5,
  content: [
    {
      type: "text" as const,
      heading: "Je staat er weer boven.",
      text: "Je kind (6) smeert brood. Jij staat erachter. 'Niet zo veel boter. Nee, meer naar de rand. Voorzichtig met dat mes.' Je kind smeert brood. Maar jij bestuurt elke beweging. Dat is geen zelfstandigheid. Dat is afstandsbediening.",
    },
    {
      type: "text" as const,
      heading: "Hun zone is groter dan de jouwe",
      text: "Hier is een ongemakkelijke waarheid: je onderschat je kind. Niet omdat je een slechte vader bent. Maar omdat jouw comfortzone kleiner is dan hun capabele zone.\n\nJij ziet gevaar waar zij avontuur zien. Jij ziet rommel waar zij experimenteren. Jij ziet een mes waar zij brood smeren.\n\nKinderen kunnen meer dan wij denken. Een driejarige kan een tafel dekken. Een vijfjarige kan een eenvoudige maaltijd helpen bereiden. Een zevenjarige kan haar eigen rugzak inpakken voor school.\n\nMaar ze krijgen de kans niet. Want wij staan erboven. Controleren. Corrigeren. Beschermen tegen dingen die niet gevaarlijk zijn — alleen maar rommelig.\n\nDe vertrouwenssprong is niet je kind loslaten. Het is jezelf loslaten. Jouw angst voor imperfectie opzij zetten en zeggen: 'Jij kunt dit. En als het niet perfect is, is dat oké.'",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Onderzoek naar ontwikkelingsmijlpalen toont dat kinderen fysiek en cognitief tot meer in staat zijn dan ouders verwachten. Overbescherming — ook wel 'helikopterouderschap' — leidt tot minder zelfvertrouwen, meer angst en slechtere probleemoplossingsvaardigheden. Kinderen die leeftijdsgerichte verantwoordelijkheden krijgen, ontwikkelen sneller competentie en zelfstandigheid.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De vertrouwenskloof",
      diagramData: [
        {
          emoji: "👶",
          label: "Wat jij denkt dat ze kan",
          description: "Je denkt: te jong, te onhandig, te gevaarlijk. Je beeld is gebaseerd op wie ze was, niet op wie ze nu is. Kinderen groeien sneller dan jouw beeld bijhoudt.",
        },
        {
          emoji: "🦸",
          label: "Wat ze echt kan",
          description: "Ze kan meer dan je denkt. Tafel dekken, brood smeren, kleren uitzoeken, rugzak inpakken. Het wordt misschien niet perfect. Maar het wordt van haar.",
        },
        {
          emoji: "🌉",
          label: "De brug: vertrouwen geven",
          description: "De kloof dicht je niet door te praten maar door te doen. Geef haar één taak. Stap achteruit. Accepteer imperfectie. Dat is de vertrouwenssprong.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Mila (6) wil zelf haar brood smeren met pindakaas. Papa staat ernaast en ziet haar het mes scheef vasthouden en veel te veel pindakaas op het brood scheppen.",
      wrongApproach: "OVERBESCHERMING:\n\nPapa: 'Niet zo, schat. Hier, geef maar.'\nPapa neemt het mes over. Smeert perfect brood.\nPapa: 'Zo moet het. Kijk, mooi hè?'\nMila kijkt. Eet papa's brood.\n\nPerfect brood. Maar Mila heeft geleerd: ik doe het verkeerd. Papa doet het beter.",
      rightApproach: "VERTROUWEN GEVEN:\n\nPapa ziet de berg pindakaas. Ademt. Zegt niks over het mes.\nMila smeert. Het brood scheurt een beetje. Pindakaas overal.\nMila, breed lachend: 'Kijk papa! Zelf gemaakt!'\nPapa: 'Helemaal zelf. Hoe smaakt het?'\nMila: 'Lekker!'\n\nImperfect brood. Perfect leermoment. En Mila straalt.",
      explanation: "Het brood was niet mooi. Maar dat was niet het punt. Het punt was dat Mila het zelf deed en trots was op het resultaat. Papa's taak was niet perfect brood — het was een kind dat gelooft dat ze het kan.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De vertrouwenssprong. Kies één ding dat je altijd voor je kind doet. Geef het uit handen. Helemaal. Accepteer dat het rommelig, langzaam of imperfect gaat. Dat is het punt.\n\n2. De capability audit. Loop in je hoofd een gewone dag door. Bij hoeveel dingen sta je erboven terwijl je kind het eigenlijk al kan? Schrijf er drie op. Dat zijn je kandidaten.\n\n3. Leeftijdsverantwoordelijkheden. 3 jaar: bestek op tafel leggen. 5 jaar: eigen kleren uitzoeken. 7 jaar: rugzak inpakken. 9 jaar: eenvoudig ontbijt maken. 11 jaar: eigen was draaien. 13 jaar: zelf naar afspraken fietsen. 15 jaar: eigen budget voor kleding beheren. Verschuif je verwachtingen mee met hun groei.\n\n4. Laat imperfectie staan. Het scheef gesmeerde brood. De verkeerd gevouwen handdoek. De tiener die zijn kamer 'anders' inricht. Laat het. Corrigeren zegt: het was niet goed genoeg. Laten staan zegt: jouw best is goed genoeg.",
    },
    {
      type: "exercise" as const,
      title: "De Capability Audit",
      instructions: "Loop een gewone dag door in je hoofd: ochtend, school, avondeten, bedtijd. Schrijf drie dingen op die je voor je kind doet maar die ze waarschijnlijk zelf zou kunnen. Kies er morgen één uit. Geef het helemaal uit handen. Geen instructies, geen correcties. Kijk wat er gebeurt. Schrijf op hoe het ging — en hoe het voor jou voelde.",
      duration: 5,
      tips: [
        "Het gaat niet om perfectie. Scheef brood, verkeerd gevouwen handdoeken — dat is bewijs dat je kind het probeert, niet dat het faalt.",
        "Let op je eigen neiging om te corrigeren. Dat is jouw comfortzone die spreekt, niet het belang van je kind.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Op welke momenten sta jij boven je kind terwijl het eigenlijk niet nodig is? Wat drijft dat — angst, ongeduld, gewoonte?",
        "Wat zou er veranderen als je je kind één week lang dingen zelf liet doen — ook als het niet perfect ging?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Je onderschat je kind. Hun capabele zone is groter dan jouw comfortzone. Doe de capability audit, geef leeftijdsgerichte verantwoordelijkheden en accepteer imperfectie. De vertrouwenssprong is niet je kind loslaten — het is jezelf loslaten.",
    },
  ],
  keyTakeaways: [
    "Je onderschat je kind — hun capabele zone is groter dan jouw comfortzone toelaat",
    "Overbescherming leidt tot minder zelfvertrouwen en meer angst — stap achteruit en geef vertrouwen",
    "Accepteer imperfectie: scheef brood corrigeren zegt 'niet goed genoeg', laten staan zegt 'jij kunt dit'",
  ],
  research: "Schiffrin et al. (2014). Helping or Hovering? The Effects of Helicopter Parenting; Baumrind (1966). Authoritative Parenting",
  quizQuestions: [
    {
      question: "Mila (6) smeert zelf brood. Het is rommelig en scheef. Wat doe je?",
      options: [
        { text: "Laten staan en zeggen: 'Helemaal zelf gemaakt!' — imperfectie accepteren", isCorrect: true },
        { text: "Het mes overnemen en laten zien hoe het netjes moet — voordoen", isCorrect: false },
      ],
      explanation: "Imperfectie accepteren zegt tegen je kind: jouw poging is goed genoeg. Overnemen zegt: je doet het verkeerd. Het scheef brood is het bewijs van leren, niet van falen.",
    },
    {
      question: "Wat is de 'vertrouwenskloof'?",
      options: [
        { text: "Het verschil tussen wat jij denkt dat je kind kan en wat ze echt kan", isCorrect: true },
        { text: "Het verschil tussen wat je kind wil en wat jij wilt", isCorrect: false },
      ],
      explanation: "De vertrouwenskloof ontstaat doordat jouw beeld van je kind achterblijft bij haar ontwikkeling. Zij groeit sneller dan jouw verwachtingen bijhouden. Daarom onderschat je haar.",
    },
    {
      question: "Wat is het risico van 'helikopterouderschap'?",
      options: [
        { text: "Kinderen worden verwend en willen altijd hun zin", isCorrect: false },
        { text: "Kinderen ontwikkelen minder zelfvertrouwen en meer angst", isCorrect: true },
      ],
      explanation: "Onderzoek toont dat overbescherming leidt tot minder zelfvertrouwen, meer angst en slechtere probleemoplossingsvaardigheden. Kinderen leren: ik kan het niet zonder hulp. Dat is het tegenovergestelde van autonomie.",
    },
    {
      question: "Je zoon (8) wil zelf naar de bakker op de hoek lopen. Je vindt het spannend. Wat is de vertrouwenssprong?",
      options: [
        { text: "Samen de route oefenen, dan hem alleen laten gaan — jouw angst is niet zijn beperking", isCorrect: true },
        { text: "Wachten tot hij tien is — acht is te jong om alleen naar buiten te gaan", isCorrect: false },
      ],
      explanation: "De vertrouwenskloof: jij schat het gevaar hoger in dan het is. Door samen te oefenen en dan los te laten, geef je hem een ervaring van competentie die geen woorden kunnen vervangen.",
    },
  ],
},
];
