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
      text: "Vygotsky beschreef de 'zone van naaste ontwikkeling': het gebied tussen wat je kind alleen kan en wat ze met een beetje hulp kan. Dáár zit de groei. Te veel hulp? Je kind leert niks. Te weinig? Frustratie en opgeven. De juiste hulp op het juiste moment heet scaffolding. Als een steiger die je weghaalt zodra de muur staat.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De drie zones van leren",
      diagramData: [
        {
          emoji: "🟢",
          label: "Comfortzone",
          description: "Dit kan ze al. Hier is geen hulp nodig. Laat haar dit zelf doen. Ook als het langzamer gaat dan jij wilt.",
        },
        {
          emoji: "🟡",
          label: "Zone van naaste ontwikkeling",
          description: "Dit kan ze bijna. Met een hint, een vraag of een klein duwtje lukt het. Hier zit de groei. Hier wil je zijn.",
        },
        {
          emoji: "🔴",
          label: "Frustratiezone",
          description: "Dit is te moeilijk. Hier helpen hints niet. Hier mag je ingrijpen. Maar door de taak kleiner te maken, niet door het over te nemen.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Nora (5) probeert haar schoenen aan te doen. Ze heeft de verkeerde voet, trekt aan de klittenband, het lukt niet. Ze zucht. Je ziet haar frustratie groeien.",
      wrongApproach: "TE SNEL HELPEN:\n\nPapa ziet Nora worstelen. Na drie seconden: 'Kom, ik doe het wel even.'\nPapa doet de schoenen aan. Klaar in tien seconden.\nNora rent naar buiten.\n\nProbleem opgelost. Maar Nora heeft geleerd: als het moeilijk is, doet papa het.",
      rightApproach: "WACHTEN EN SCAFFOLDEN:\n\nPapa ziet Nora worstelen. Handen in zijn zakken. Wacht tien seconden.\nNora: 'Het lukt niet!'\nPapa: 'Hmm. Welke voet zit die schoen nu op?'\nNora kijkt. Wisselt. Trekt. Klittenband vast.\nNora: 'Hé! Het lukt!'\n\nZelfde schoen. Maar nu is het háár overwinning.",
      explanation: "Het verschil is tien seconden wachten en één vraag stellen. Papa nam het niet over. Hij gaf net genoeg richting zodat Nora het zelf kon ontdekken. Dat is scaffolding.",
    },
    {
      type: "example" as const,
      situation: "Finn (8) maakt een werkstuk over dieren. Hij zoekt al tien minuten hoe je 'krokodil' schrijft. Hij heeft het woordenboek erbij maar snapt de alfabetische volgorde nog niet helemaal.",
      wrongApproach: "❌ VOORZEGGEN:\n\nPapa kijkt over Finns schouder.\nPapa: 'K-R-O-K-O-D-I-L. Hier, ik spel het wel even.'\nFinn schrijft het over.\nPapa: 'Zo, klaar. Volgende woord?'\n\nFinn heeft het woord, maar niet geleerd hoe hij het zelf kan vinden.",
      rightApproach: "✅ RICHTING GEVEN:\n\nPapa: 'Hmm, krokodil. Met welke letter begint dat?'\nFinn: 'Een K.'\nPapa: 'Oké. En waar zit de K in het woordenboek, meer vooraan of achteraan?'\nFinn bladert. Vindt de K. Zoekt verder.\nFinn: 'Gevonden! K-R-O-K-O-D-I-L!'\nPapa: 'Netjes. Nu kun je elk woord vinden.'",
      explanation: "Papa gaf geen antwoord maar een zoekstrategie. Finn leerde niet alleen hoe je 'krokodil' schrijft, maar hoe je een woordenboek gebruikt. Eén vraag op het juiste moment opende een vaardigheid die hij bij elk volgend woord kan inzetten.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Handen in je zakken. Letterlijk. Als je kind worstelt, stop je handen in je zakken. Het voorkomt dat je automatisch ingrijpt.\n\n2. Wacht tien seconden. Tel in je hoofd. Tien seconden voelen lang als je kind worstelt. Maar die tien seconden zijn het verschil tussen overnemen en leren.\n\n3. Vraag: 'Wat is je plan?' In plaats van te helpen, vraag wat zij wil proberen. Je geeft haar de regie terug zonder haar alleen te laten.\n\n4. Geef hints, geen oplossingen. 'Welke voet zou het kunnen zijn?' werkt beter dan 'Andere voet!'",
    },
    {
      type: "exercise" as const,
      title: "De Tien-Seconden-Regel",
      instructions: "1. Kies vandaag of morgen één moment waarop je kind iets probeert dat lastig is. Schoenen, rits, puzzel, huiswerk.\n2. Stop je handen letterlijk in je zakken.\n3. Tel in je hoofd tot tien. Tien seconden voelen lang. Houd vol.\n4. Stel maximaal één vraag: 'Wat is je plan?' of 'Wat zou je kunnen proberen?'\n5. Kijk wat er gebeurt. En voel je eigen ongemak. Dat ongemak is het teken dat je het goed doet.",
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
        "Hoe voelt het voor jou als je je kind ziet worstelen? Wat wil je het liefst doen. En waarom?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Te snel helpen steelt leermomenten. De zone van naaste ontwikkeling is waar groei zit. Net buiten comfort, niet in frustratie. Handen in je zakken, tien seconden wachten, en stel een vraag in plaats van het over te nemen.",
    },
  ],
  keyTakeaways: [
    "Elke keer dat je te snel helpt, steel je een leermoment. Wacht tien seconden",
    "De zone van naaste ontwikkeling is waar groei zit: net moeilijk genoeg, met net genoeg steun",
    "Scaffolding = hints en vragen geven, niet overnemen. Zodat het hun overwinning wordt",
  ],
  research: "Vygotsky (1978). Mind in Society; Wood, Bruner & Ross (1976). The role of tutoring in problem solving",
  quizQuestions: [
    {
      question: "Nora (5) vraagt of je haar rits dichtdoet. Ze heeft het nog nooit zelf geprobeerd. Wat is de beste reactie?",
      options: [
        { text: "Tien seconden wachten en vragen: 'Wat is je plan?'", isCorrect: false },
        { text: "De rits starten en haar de rest laten doen. Scaffolding op maat", isCorrect: true },
        { text: "Zeggen: 'Probeer het zelf, ik geloof in je!' en afwachten", isCorrect: false },
      ],
      explanation: "Als een kind iets nog nooit heeft geprobeerd, zit ze niet in de zone van naaste ontwikkeling maar erbuiten. 'Probeer het zelf' zonder enige steun leidt tot frustratie, niet tot groei. Scaffolding betekent: het moeilijkste deel overnemen zodat zij het haalbare deel zelf doet.",
    },
    {
      question: "Welke uitspraak over de zone van naaste ontwikkeling is ONJUIST?",
      options: [
        { text: "In deze zone kan een kind het bijna zelf, met een beetje hulp lukt het", isCorrect: false },
        { text: "Hoe langer een kind in deze zone worstelt, hoe meer het leert", isCorrect: true },
        { text: "De zone verschuift naarmate een kind vaardigheden opbouwt", isCorrect: false },
      ],
      explanation: "Langer worstelen is niet automatisch beter. Als de worsteling te lang duurt, verschuift een kind van de leerzone naar de frustratiezone, waar het leervermogen juist afneemt. De kunst is op het juiste moment net genoeg steun te bieden, niet om de worsteling te maximaliseren.",
    },
    {
      question: "Je dochter (8) maakt een werkstuk en vraagt om hulp bij de inleiding. Ze schrijft normaal prima maar vindt beginnen lastig. Wat doe je?",
      options: [
        { text: "Samen de eerste zin bedenken, daarna laat je haar verder gaan", isCorrect: true },
        { text: "Handen in je zakken en tien seconden wachten. Ze moet het zelf ontdekken", isCorrect: false },
        { text: "De hele inleiding voorzeggen zodat ze de rest zelf kan afmaken", isCorrect: false },
      ],
      explanation: "Niet elk 'help me' is gewoonte. Soms is het een gerichte vraag over een echt knelpunt. Een kind dat normaal prima schrijft maar bij de start vastloopt, heeft baat bij een klein duwtje op precies dat punt. Altijd weigeren te helpen is geen autonomieondersteuning maar verwaarlozing.",
    },
    {
      question: "Waarom werkt 'handen in je zakken' niet in elke situatie?",
      options: [
        { text: "Omdat sommige taken echt buiten de zone van naaste ontwikkeling liggen en hulp dan noodzakelijk is", isCorrect: true },
        { text: "Omdat kinderen onder de vier nog niet genoeg zelfcontrole hebben om te leren van worsteling", isCorrect: false },
        { text: "Omdat de methode alleen werkt bij fysieke taken, niet bij cognitieve", isCorrect: false },
      ],
      explanation: "Scaffolding gaat niet over altijd afwachten. Als een taak echt te ver buiten de capaciteiten van je kind ligt, leidt wachten alleen maar tot machteloosheid. Je moet inschatten of je kind in de leerzone zit (hints helpen) of in de frustratiezone (de taak moet kleiner worden of je moet actiever helpen).",
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
      text: "Kinderen willen maar één ding: een beetje controle over hun eigen leven. Dat is geen lastig gedrag. Dat is een basisbehoefte.\n\nElke keer dat je alles voor ze beslist. Wat ze aantrekken, wat ze eten, wanneer ze stoppen. Duw je tegen die behoefte in. En dan krijg je verzet. Logisch.\n\nDe oplossing is simpel. Niet alles loslaten. Maar binnen jouw grenzen ruimte maken voor hun keuze. Twee opties. Allebei oké voor jou. Maar voor je kind voelt het als: ik mag kiezen. Ik heb iets te zeggen.\n\nDie kleine keuze doet iets groots. Het verandert 'ik moet' in 'ik wil'. En een kind dat wil, hoef je niet te pushen.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Deci en Ryan ontdekten met hun zelfdeterminatietheorie dat mensen drie basisbehoeften hebben: autonomie, competentie en verbondenheid. Autonomie. Het gevoel dat je invloed hebt op je eigen leven. Is de sterkste motor van intrinsieke motivatie. Kinderen die keuzes krijgen, werken harder, zijn minder opstandig en voelen zich competenter.",
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
      explanation: "Papa bepaalde nog steeds de grenzen. Het moest een broek zijn, geen prinsessenjurk in de winter. Maar binnen die grenzen had Saar een echte keuze. Dat veranderde het van een bevel in een uitnodiging.",
    },
    {
      type: "example" as const,
      situation: "Thijs (9) moet na het avondeten zijn huiswerk maken. Hij hangt op de bank en weigert te beginnen. Elke avond hetzelfde gevecht.",
      wrongApproach: "❌ DWINGEN:\n\nPapa: 'Thijs, nu huiswerk. Aan tafel.'\nThijs: 'Straks...'\nPapa: 'Nee, nu. Ik tel tot drie.'\nThijs sloft naar de tafel. Staart naar zijn schrift.\nPapa staat erachter: 'Beginnen!'\n\nHuiswerk wordt een straf. Thijs leert: leren is iets dat je wordt opgedrongen.",
      rightApproach: "✅ REGIE GEVEN:\n\nPapa: 'Thijs, je hebt huiswerk vanavond. Wil je het nu doen of na het toetje?'\nThijs: 'Na het toetje.'\nPapa: 'Prima. En waar wil je zitten, aan de keukentafel of op je kamer?'\nThijs: 'Op mijn kamer.'\nThijs gaat na het toetje uit zichzelf naar boven.\n\nZelfde huiswerk. Maar Thijs koos wanneer en waar. Geen strijd nodig.",
      explanation: "Het huiswerk was niet optioneel. Maar het wanneer en het waar wel. Die twee keuzes gaven Thijs genoeg gevoel van regie om mee te werken in plaats van te vechten. De grens stond, de autonomie zat in de details.",
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
        "Hoe vaak per dag beslis jij alles voor je kind. En hoe zou het voelen als iemand dat bij jou deed?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Kinderen hebben autonomie nodig als brandstof voor motivatie. Keuzes geven binnen grenzen stopt machtsstrijd en bouwt eigenaarschap. Twee opties is genoeg. Jij bepaalt het kader, zij kiezen daarbinnen. 'Ik moet' wordt 'ik wil'.",
    },
  ],
  keyTakeaways: [
    "Autonomie is een basisbehoefte. Kinderen die keuzes krijgen zijn gemotiveerder en minder opstandig",
    "Twee opties binnen jouw grenzen: jij bepaalt het kader, je kind kiest daarbinnen",
    "De vals-dilemma-techniek werkt als alles 'nee' is: beide opties leiden naar hetzelfde doel",
  ],
  research: "Deci & Ryan (2000). Self-Determination Theory; Iyengar & Lepper (2000). When choice is demotivating",
  quizQuestions: [
    {
      question: "Je kind (4) weigert steeds groente te eten. Je biedt de keuze: 'Wil je broccoli of wortels?' Ze zegt: 'Nee! Ik wil chips!' Wat nu?",
      options: [
        { text: "Toch chips geven. Het gaat om haar gevoel van regie, niet om de inhoud", isCorrect: false },
        { text: "De keuze herhalen: 'Chips is geen optie. Broccoli of wortels?'. Het kader staat", isCorrect: true },
        { text: "Helemaal geen keuze meer geven en broccoli op haar bord leggen. Ze misbruikt de vrijheid", isCorrect: false },
      ],
      explanation: "Autonomie binnen grenzen betekent dat jij het kader bepaalt en je kind daarbinnen kiest. Toegeven op het kader ondermijnt je rol als ouder. Maar de keuze intrekken leert haar dat vragen om inspraak zinloos is. Rustig herhalen is de middenweg.",
    },
    {
      question: "Welke situatie is een voorbeeld van de vals-dilemma-techniek?",
      options: [
        { text: "'Wil je je tanden poetsen of zal ik het doen?'. Want beide opties leiden tot schone tanden", isCorrect: false },
        { text: "'Wil je lopend of op de fiets naar school?'. Want het kind kiest hoe, niet of", isCorrect: true },
        { text: "'Wil je nu slapen of over tien minuten?'. Want het kind krijgt uitstel", isCorrect: false },
      ],
      explanation: "Het vals dilemma werkt doordat beide opties naar hetzelfde doel leiden, maar het kind echt verschil ervaart in de keuze. 'Lopend of fiets' voelt als een echte keuze. 'Zal ik het doen of jij' is eerder dreiging dan autonomie, en 'nu of tien minuten' is uitstel geven, geen vals dilemma.",
    },
    {
      question: "Volgens onderzoek van Iyengar & Lepper kan te veel keuzevrijheid averechts werken. Wanneer is dat risico het grootst?",
      options: [
        { text: "Bij tieners. Zij overschatten hun eigen beslissingsvermogen", isCorrect: false },
        { text: "Bij peuters en kleuters. Zij raken overweldigd door meer dan twee opties", isCorrect: true },
        { text: "Bij schoolkinderen. Zij kiezen altijd de makkelijkste optie als er te veel keuze is", isCorrect: false },
      ],
      explanation: "De 'paradox of choice' treft jonge kinderen het sterkst omdat hun werkgeheugen en beslissingsvermogen nog in ontwikkeling zijn. Twee opties geven het gevoel van controle zonder cognitieve overbelasting. Tieners kunnen juist meer opties aan en hebben die ook nodig.",
    },
    {
      question: "Je zoon (12) wil zelf bepalen of hij naar het verjaardagsfeest van een klasgenoot gaat. Je vindt dat hij moet gaan. Wat is de beste aanpak?",
      options: [
        { text: "Hem laten kiezen. Op die leeftijd moet je sociale beslissingen respecteren", isCorrect: true },
        { text: "Zeggen dat hij moet gaan. Sommige sociale verplichtingen zijn niet optioneel", isCorrect: false },
        { text: "Een keuze binnen grenzen: 'Je gaat, maar je mag zelf weten hoe lang je blijft'", isCorrect: false },
      ],
      explanation: "Bij een twaalfjarige zijn sociale beslissingen een belangrijk oefenterrein voor autonomie. Verplicht sturen ondermijnt zijn groeiende behoefte aan zelfbeschikking. 'Keuze binnen grenzen' klinkt redelijk maar is hier een verkapte verplichting. Hij voelt dat hij geen echte keuze heeft.",
    },
  ],
},
{
  id: "au_mod_3",
  skill: "Autonomie" as Skill,
  title: "Laat Het Fout Gaan",
  description: "Die toren gaat vallen. Jij ziet het. Maar falen is geen probleem. Het is de grondstof van groei. Leer waarom je soms moet toekijken.",
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
      text: "Carol Dweck toonde aan dat kinderen die leren dat fouten bij het proces horen. Een 'growth mindset'. Meer doorzetten, hogere prestaties leveren en minder faalangst ontwikkelen. Productief falen is een bewezen leerstrategie: kinderen die eerst zelf worstelen onthouden oplossingen beter dan kinderen die direct het antwoord krijgen.",
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
      explanation: "Door de val toe te laten en daarna procesgerichte vragen te stellen, transformeerde papa een mislukking in een leermoment. Daan ontdekte zelf het probleem en de oplossing. Dat beklijft veel beter dan een instructie van buitenaf.",
    },
    {
      type: "example" as const,
      situation: "Sophie (10) heeft morgen een spreekbeurt. Ze oefent in de woonkamer. Papa hoort dat ze haar tekst voorleest in plaats van vertelt, en dat de volgorde rommelig is. Het gaat waarschijnlijk niet goed zo.",
      wrongApproach: "❌ REDDEN:\n\nPapa: 'Sophie, zo gaat het niet. Kom, we schrijven het opnieuw.'\nPapa herschrijft de spreekbeurt. Betere structuur, betere zinnen.\nSophie leest papa's versie voor op school. Een 7.\n\nMooi cijfer. Maar Sophie heeft geleerd: als het spannend wordt, fixt papa het.",
      rightApproach: "✅ LATEN STRUIKELEN:\n\nPapa luistert. Zegt na afloop: 'Goed dat je oefent.'\nSophie houdt de spreekbeurt. Het gaat matig. Een 5.\nThuis. Sophie: 'Het ging niet zo goed...'\nPapa: 'Wat ging er mis denk je?'\nSophie: 'Ik las te veel voor. En het zat niet goed in mijn hoofd.'\nPapa: 'Wat zou je de volgende keer anders doen?'\n\nDie 5 leerde haar meer dan papa's 7 ooit had gedaan.",
      explanation: "Papa zag het aankomen en greep niet in. De teleurstelling was echt, maar ook de les. Sophie analyseerde zelf wat er misging en had een plan voor de volgende keer. Dat is productief falen: de ervaring wordt pas leerzaam door de reflectie achteraf.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Eén ding per dag laten mislukken. Kies bewust één moment waarop je niet ingrijpt. De melk die morst. De tekening die mislukt. De toren die valt. Laat het gebeuren.\n\n2. Procestaal, niet uitkomsttaal. Niet: 'Wat mooi!' Wel: 'Je hebt lang doorgewerkt.' Niet: 'Slim!' Wel: 'Je hebt een slimme manier bedacht.' Focus op de inspanning, niet het resultaat.\n\n3. De magische vraag na falen. 'Wat ga je anders proberen?' Geen oordeel. Geen oplossing. Alleen een uitnodiging om na te denken.\n\n4. Normaliseer fouten. 'Papa maakt ook fouten. Vandaag nog. Weet je wat ik deed?' Laat zien dat falen bij het leven hoort.\n\n5. Tiener-variant. Bij een puber (13+) worden de stakes groter: een slecht proefwerk, een mislukte auditie, een afwijzing. Dezelfde principes gelden. Maar met meer ruimte. Niet: 'Volgende keer beter.' Wel: 'Balen. Wat heb je ervan geleerd?' Tieners willen serieus genomen worden, niet getroost als een kleuter.",
    },
    {
      type: "exercise" as const,
      title: "De Laat-Het-Vallen Oefening",
      instructions: "Kies vandaag één moment waarop je normaal zou ingrijpen om een fout te voorkomen. Laat het gebeuren. Als het misgaat, stel één vraag: 'Wat denk je dat er gebeurde?' of 'Wat zou je anders doen?' Kijk hoe je kind reageert. Schrijf vanavond op wat je zag.",
      duration: 4,
      tips: [
        "Begin klein en veilig. Morsen, omvallen, verkeerd tekenen. Geen situaties waar echt gevaar bij komt kijken.",
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
    "Falen voorkomen voorkomt ook het leermoment. Laat dingen misgaan in een veilige context",
    "Growth mindset: kinderen die leren dat fouten erbij horen, zetten meer door en hebben minder faalangst",
    "Gebruik procestaal ('je hebt hard gewerkt') in plaats van uitkomsttaal ('wat knap!')",
  ],
  research: "Dweck (2006). Mindset: The New Psychology of Success; Kapur (2008). Productive Failure",
  quizQuestions: [
    {
      question: "Je kind (8) heeft twee uur aan een tekening gewerkt. Het resultaat is objectief slordig. Ze heeft weinig moeite gedaan, vooral zitten kletsen. Ze laat het trots zien. Wat zeg je?",
      options: [
        { text: "'Je hebt er lang aan gewerkt!'. Procestaal is altijd goed", isCorrect: false },
        { text: "'Vertel eens, wat vind je er zelf van?'. Eerst haar eigen oordeel horen", isCorrect: true },
        { text: "'Mooi! Ga zo door!'. Positief blijven bouwt zelfvertrouwen", isCorrect: false },
      ],
      explanation: "Procestaal werkt alleen als het eerlijk is. Zeggen 'je hebt er lang aan gewerkt' terwijl ze heeft zitten kletsen is onoprecht. Kinderen prikken daardoorheen. Door te vragen wat zij ervan vindt, geef je haar de kans om zelf te reflecteren zonder dat jij oordeelt of vals complimenteert.",
    },
    {
      question: "Welke uitspraak over een growth mindset is ONJUIST?",
      options: [
        { text: "Kinderen met een growth mindset zien fouten als nuttige informatie", isCorrect: false },
        { text: "Je bouwt een growth mindset door altijd te zeggen dat je kind hard heeft gewerkt", isCorrect: true },
        { text: "Een growth mindset helpt kinderen om na tegenslagen door te zetten", isCorrect: false },
      ],
      explanation: "Dweck waarschuwt zelf voor 'vals procesprijs': als je altijd zegt 'je hebt hard gewerkt'. Ook wanneer een kind dat niet heeft gedaan. Wordt het een hol cliche. Kinderen merken dat het oneerlijk is en verliezen vertrouwen in je feedback. Growth mindset vereist eerlijke, specifieke terugkoppeling op het daadwerkelijke proces.",
    },
    {
      question: "Je zoon (11) heeft een slecht cijfer voor wiskunde. Hij zegt: 'Ik ben gewoon dom in wiskunde.' Wat is de meest effectieve reactie?",
      options: [
        { text: "'Je bent helemaal niet dom! Je bent juist heel slim!'. Zijn zelfbeeld herstellen", isCorrect: false },
        { text: "'Balen. Laten we samen kijken welke sommen fout gingen en waarom'. Concreet analyseren", isCorrect: true },
        { text: "'Fouten horen erbij! Volgende keer beter!'. Het normaliseren en doorgaan", isCorrect: false },
      ],
      explanation: "'Je bent slim' versterkt juist een fixed mindset. Als hij dan weer faalt, klopt zijn wereldbeeld niet meer. 'Volgende keer beter' is te vaag om iets van te leren. Concreet samen kijken wat er misging geeft hem handvatten en laat zien dat fouten informatie bevatten, niet oordelen.",
    },
    {
      question: "Wanneer is falen NIET productief?",
      options: [
        { text: "Als het kind niet begrijpt waarom het misging en niemand helpt dat te duiden", isCorrect: true },
        { text: "Als het kind gefrustreerd raakt en even huilt voordat het opnieuw probeert", isCorrect: false },
        { text: "Als het kind dezelfde fout twee keer achter elkaar maakt", isCorrect: false },
      ],
      explanation: "Frustratie en herhaling zijn normaal onderdeel van leren. Maar falen zonder begrip is niet productief. Het wordt pas leerzaam wanneer iemand helpt om de ervaring te duiden. Daarom is de vraag 'wat denk je dat er gebeurde?' zo belangrijk: zonder reflectie is falen gewoon falen.",
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
      text: "Scaffolding is niet alleen hulp geven. Het is hulp afbouwen. Denk aan een steiger rond een gebouw: je zet hem neer terwijl je bouwt, en haalt hem weg als het gebouw zelf staat.\n\nHet probleem is dat wij vaders vaak blijven stutten. We helpen bij dingen die ons kind allang zelf kan. Niet omdat zij het niet kunnen, maar omdat wij het niet loslaten.\n\n'Papa doe het' is soms echt 'ik kan het niet.' Maar vaker is het 'het is makkelijker als jij het doet.' En elke keer dat je toegeeft, bevestig je: je hebt gelijk, je kunt het niet zonder mij.\n\nDe scaffolding-ladder werkt andersom. Je begint met veel hulp en bouwt stap voor stap af. Totdat je kind het zelf doet. En weet dat ze het zelf kan.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Albert Bandura bewees dat self-efficacy. Het geloof dat je iets kunt. De belangrijkste voorspeller is van succes. Kinderen bouwen self-efficacy op door dingen zelf te doen en te slagen. Niet doordat jij ze vertelt dat ze het kunnen, maar doordat ze het ervaren. De geleidelijke overdracht van verantwoordelijkheid is een bewezen methode om dit stap voor stap op te bouwen.",
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
      rightApproach: "SCAFFOLDING AFBOUWEN:\n\nMaandag. Papa: 'Ik doe het mes, jij smeert.'\nWoensdag. Papa: 'Jij mag het helemaal. Ik sta hier als je hulp nodig hebt.'\nVrijdag. Emma smeert haar eigen brood. Papa zit aan tafel.\nEmma, trots: 'Kijk papa! Helemaal zelf!'\n\nZelfde week. Maar nu weet Emma: ik kan dit.",
      explanation: "Papa bouwde de hulp in drie stappen af. Van samen doen naar zelf doen in één week. Het geheim is niet het loslaten zelf. Het is de geleidelijkheid. Elke stap gaf Emma net genoeg vertrouwen voor de volgende.",
    },
    {
      type: "example" as const,
      situation: "Sem (4) wil elke avond dat papa zijn tanden poetst. Hij kan het motorisch al, maar houdt zijn mond dicht zodra papa de tandenborstel geeft en zegt: 'Jij doen, papa!'",
      wrongApproach: "❌ BLIJVEN OVERNEMEN:\n\nSem klempt zijn lippen op elkaar.\nPapa zucht. Pakt de tandenborstel. Poetst Sems tanden.\nElke avond hetzelfde ritueel.\n\nSem is inmiddels bijna vijf en heeft nog nooit zelf gepoetst. Niet omdat hij het niet kan, maar omdat hij weet dat papa het toch doet.",
      rightApproach: "✅ STAP VOOR STAP LOSLATEN:\n\nPapa: 'Weet je wat, jij poetst de onderkant, ik doe de bovenkant.'\nSem poetst enthousiast de onderkant.\nVolgende avond: 'Jij doet onder en boven. Ik doe de kiezen.'\nWeek later: Sem poetst alles zelf. Papa kijkt even mee.\nSem: 'Papa, ik kan het al!'",
      explanation: "Papa deelde de taak op in steeds kleinere stukjes hulp. Sem ervoer elke avond een beetje meer succes. De overgang was zo geleidelijk dat het geen strijd werd maar een avontuur. Dat is de scaffolding-ladder in actie: van samen doen naar zelf doen.",
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
    "Self-efficacy. Het geloof 'ik kan dit'. Groeit alleen door het zelf te doen en te ervaren",
    "De scaffolding-ladder: samen doen, samen proberen, zelf doen. Bouw hulp geleidelijk af",
    "Vier pogingen, niet alleen successen. Dat normaliseert worsteling en bouwt doorzettingsvermogen",
  ],
  research: "Bandura (1997). Self-Efficacy: The Exercise of Control; Fisher & Frey (2013). Gradual Release of Responsibility",
  quizQuestions: [
    {
      question: "Emma (6) zegt al weken elke ochtend 'papa doe het!' bij haar brood smeren. Ze kan het bewezen zelf. Gisteren bood je stap 2 aan ('ik help met het begin'). Ze weigerde en bleef vragen. Wat is de volgende stap?",
      options: [
        { text: "Vriendelijk maar duidelijk: 'Ik weet dat je dit kunt. Ik leg het mes klaar, jij begint'. En even wachten", isCorrect: true },
        { text: "Toch haar brood smeren. De relatie is belangrijker dan de les", isCorrect: false },
        { text: "Haar laten wachten tot ze honger heeft en het zelf doet. Natuurlijke consequenties", isCorrect: false },
      ],
      explanation: "Bij een kind dat bewezen kan wat het weigert, is steeds toegeven geen autonomieondersteuning maar een patroon bevestigen. Tegelijk is honger als drukmiddel te hard en beschadigt het de relatie. De middenweg: het verwachtingsniveau vasthouden, maar warm en met steun erbij blijven.",
    },
    {
      question: "Wat is het verschil tussen autonomie ondersteunen en je kind verwaarlozen?",
      options: [
        { text: "Bij autonomie laat je het kind alles zelf uitzoeken; bij verwaarlozing ben je er niet", isCorrect: false },
        { text: "Bij autonomie ben je beschikbaar en bied je steun op maat; bij verwaarlozing ontbreekt die beschikbaarheid", isCorrect: true },
        { text: "Bij autonomie geef je keuzes; bij verwaarlozing geef je bevelen", isCorrect: false },
      ],
      explanation: "Het cruciale verschil is beschikbaarheid. Autonomieondersteuning betekent bewust aanwezig zijn en steun bieden wanneer nodig, maar de regie bij het kind laten. Verwaarlozing is afwezigheid. Een kind dat 'het zelf moet uitzoeken' zonder beschikbare ouder voelt zich niet autonoom maar alleen gelaten.",
    },
    {
      question: "Je dochter (4) probeert voor het eerst zelf haar veters te strikken. Na twee pogingen begint ze te huilen en vraagt om hulp. Wat doe je?",
      options: [
        { text: "Helpen. Veters strikken op die leeftijd is motorisch te moeilijk voor de meeste kinderen", isCorrect: true },
        { text: "Aanmoedigen en vragen: 'Wat is je plan?'. Ze moet leren doorzetten", isCorrect: false },
        { text: "Het voordoen en daarna haar het opnieuw laten proberen. Scaffolding", isCorrect: false },
      ],
      explanation: "Veters strikken vereist fijne motoriek die de meeste kinderen pas rond 5-6 jaar ontwikkelen. Dit valt buiten de zone van naaste ontwikkeling voor een vierjarige. Aandringen op zelf proberen bij een taak die motorisch nog niet haalbaar is, leidt niet tot groei maar tot geleerde hulpeloosheid.",
    },
    {
      question: "Bandura stelde dat self-efficacy groeit door zelf te ervaren dat iets lukt. Maar wat is het risico als je een kind alleen maar makkelijke taken geeft om succeservaringen op te bouwen?",
      options: [
        { text: "Het kind wordt overmoedig en overschat zichzelf bij moeilijke taken", isCorrect: false },
        { text: "Het kind leert niet om te gaan met tegenslag en ontwikkelt broze zelfzekerheid", isCorrect: true },
        { text: "Makkelijke taken bouwen geen self-efficacy op. Het kind voelt zich ondergewaardeerd", isCorrect: false },
      ],
      explanation: "Self-efficacy die alleen gebouwd is op makkelijke successen is fragiel. Het kind heeft geen ervaring met worstelen en toch slagen. Bij de eerste echte tegenslag stort het vertrouwen in. Echte self-efficacy ontstaat door gekalibreerde uitdagingen: taken die moeilijk genoeg zijn dat succes betekenisvol voelt.",
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
      text: "Hier is een ongemakkelijke waarheid: je onderschat je kind. Niet omdat je een slechte vader bent. Maar omdat jouw comfortzone kleiner is dan hun capabele zone.\n\nJij ziet gevaar waar zij avontuur zien. Jij ziet rommel waar zij experimenteren. Jij ziet een mes waar zij brood smeren.\n\nKinderen kunnen meer dan wij denken. Een driejarige kan een tafel dekken. Een vijfjarige kan een eenvoudige maaltijd helpen bereiden. Een zevenjarige kan haar eigen rugzak inpakken voor school.\n\nMaar ze krijgen de kans niet. Want wij staan erboven. Controleren. Corrigeren. Beschermen tegen dingen die niet gevaarlijk zijn. Alleen maar rommelig.\n\nDe vertrouwenssprong is niet je kind loslaten. Het is jezelf loslaten. Jouw angst voor imperfectie opzij zetten en zeggen: 'Jij kunt dit. En als het niet perfect is, is dat oké.'",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Onderzoek naar ontwikkelingsmijlpalen toont dat kinderen fysiek en cognitief tot meer in staat zijn dan ouders verwachten. Overbescherming. Ook wel 'helikopterouderschap'. Leidt tot minder zelfvertrouwen, meer angst en slechtere probleemoplossingsvaardigheden. Kinderen die leeftijdsgerichte verantwoordelijkheden krijgen, ontwikkelen sneller competentie en zelfstandigheid.",
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
      explanation: "Het brood was niet mooi. Maar dat was niet het punt. Het punt was dat Mila het zelf deed en trots was op het resultaat. Papa's taak was niet perfect brood. Het was een kind dat gelooft dat ze het kan.",
    },
    {
      type: "example" as const,
      situation: "Luna (11) wil zelf met de trein naar haar vriendin twee stations verderop. Papa vindt haar te jong en heeft het tot nu toe altijd met de auto gebracht.",
      wrongApproach: "❌ BLIJVEN BRENGEN:\n\nLuna: 'Papa, ik wil zelf met de trein.'\nPapa: 'Nee schat, dat is te gevaarlijk. Ik breng je wel.'\nLuna: 'Maar Jara mag het wel!'\nPapa: 'Wij doen het zo. Stap in de auto.'\n\nLuna stapt in. Maar denkt: papa vertrouwt me niet. Misschien kan ik het ook echt niet.",
      rightApproach: "✅ VERTROUWEN MET VOORBEREIDING:\n\nPapa: 'Goed plan. Laten we het voorbereiden.'\nZaterdag: samen met de trein. Papa laat Luna de kaartjes kopen en het perron zoeken.\nWoensdag: Luna gaat alleen. Papa appt bij vertrek en aankomst.\nLuna stuurt een foto vanaf het perron: 'Ben er! Was makkelijk!'\n\nLuna kan meer dan papa dacht. Ze had alleen de kans nodig.",
      explanation: "Papa's eerste reactie was nee. Maar hij realiseerde zich dat zijn angst niet Luna's beperking was. Door het samen voor te bereiden en daarna los te laten, gaf hij haar een succeservaring die haar zelfvertrouwen een enorme boost gaf. De vertrouwenssprong was voor papa net zo groot als voor Luna.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De vertrouwenssprong. Kies één ding dat je altijd voor je kind doet. Geef het uit handen. Helemaal. Accepteer dat het rommelig, langzaam of imperfect gaat. Dat is het punt.\n\n2. De capability audit. Loop in je hoofd een gewone dag door. Bij hoeveel dingen sta je erboven terwijl je kind het eigenlijk al kan? Schrijf er drie op. Dat zijn je kandidaten.\n\n3. Leeftijdsverantwoordelijkheden. 3 jaar: bestek op tafel leggen. 5 jaar: eigen kleren uitzoeken. 7 jaar: rugzak inpakken. 9 jaar: eenvoudig ontbijt maken. 11 jaar: eigen was draaien. 13 jaar: zelf naar afspraken fietsen. 15 jaar: eigen budget voor kleding beheren. Verschuif je verwachtingen mee met hun groei.\n\n4. Laat imperfectie staan. Het scheef gesmeerde brood. De verkeerd gevouwen handdoek. De tiener die zijn kamer 'anders' inricht. Laat het. Corrigeren zegt: het was niet goed genoeg. Laten staan zegt: jouw best is goed genoeg.",
    },
    {
      type: "exercise" as const,
      title: "De Capability Audit",
      instructions: "Loop een gewone dag door in je hoofd: ochtend, school, avondeten, bedtijd. Schrijf drie dingen op die je voor je kind doet maar die ze waarschijnlijk zelf zou kunnen. Kies er morgen één uit. Geef het helemaal uit handen. Geen instructies, geen correcties. Kijk wat er gebeurt. Schrijf op hoe het ging. En hoe het voor jou voelde.",
      duration: 5,
      tips: [
        "Het gaat niet om perfectie. Scheef brood, verkeerd gevouwen handdoeken. Dat is bewijs dat je kind het probeert, niet dat het faalt.",
        "Let op je eigen neiging om te corrigeren. Dat is jouw comfortzone die spreekt, niet het belang van je kind.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Op welke momenten sta jij boven je kind terwijl het eigenlijk niet nodig is? Wat drijft dat. Angst, ongeduld, gewoonte?",
        "Wat zou er veranderen als je je kind één week lang dingen zelf liet doen. Ook als het niet perfect ging?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Je onderschat je kind. Hun capabele zone is groter dan jouw comfortzone. Doe de capability audit, geef leeftijdsgerichte verantwoordelijkheden en accepteer imperfectie. De vertrouwenssprong is niet je kind loslaten. Het is jezelf loslaten.",
    },
  ],
  keyTakeaways: [
    "Je onderschat je kind. Hun capabele zone is groter dan jouw comfortzone toelaat",
    "Overbescherming leidt tot minder zelfvertrouwen en meer angst. Stap achteruit en geef vertrouwen",
    "Accepteer imperfectie: scheef brood corrigeren zegt 'niet goed genoeg', laten staan zegt 'jij kunt dit'",
  ],
  research: "Schiffrin et al. (2014). Helping or Hovering? The Effects of Helicopter Parenting; Baumrind (1966). Authoritative Parenting",
  quizQuestions: [
    {
      question: "Een vader geeft zijn dochter (9) totale vrijheid: ze mag zelf weten wanneer ze naar bed gaat, wat ze eet, en of ze haar huiswerk maakt. Hij noemt dit 'autonomie geven'. Wat is het probleem?",
      options: [
        { text: "Niets. Op die leeftijd kunnen kinderen prima zelf deze beslissingen nemen", isCorrect: false },
        { text: "Autonomie zonder kader is geen autonomie maar permissiviteit. Kinderen hebben grenzen nodig om zich veilig te voelen", isCorrect: true },
        { text: "Hij moet minder keuzes geven, niet meer. Negen is te jong voor zulke beslissingen", isCorrect: false },
      ],
      explanation: "Autonomie is niet hetzelfde als alles mogen. Kinderen voelen zich juist onveilig zonder kader. Onderzoek van Baumrind laat zien dat autoritatief ouderschap (warmte plus grenzen) de beste uitkomsten geeft. Een kind dat alles zelf mag beslissen ervaart dat niet als vrijheid maar als: niemand let op mij.",
    },
    {
      question: "Je dochter (7) wil elke dag zelf kiezen wat ze aantrekt. Vandaag kiest ze een zomerjurk bij 5 graden. Wat doe je?",
      options: [
        { text: "Haar de jurk laten aandoen. Ze voelt zelf wel dat het koud is en leert ervan", isCorrect: false },
        { text: "Zeggen dat het niet kan en een warme broek klaarzetten. Gezondheid gaat voor", isCorrect: false },
        { text: "Uitleggen dat het koud is en vragen of ze een maillot of legging eronder wil. Keuze binnen grenzen", isCorrect: true },
      ],
      explanation: "Puur laten ervaren klinkt leerzaam, maar een ziek kind is geen succesvol leermoment. Tegelijk: de keuze volledig afpakken ondermijnt haar autonomie over haar kleding. De middenweg respecteert haar keuze en beschermt haar gezondheid. Zonder machtsstrijd.",
    },
    {
      question: "Op het spectrum van helikopterouder tot afwezige ouder, waar zit de 'sweet spot' voor autonomie-ontwikkeling?",
      options: [
        { text: "Precies in het midden. Niet te veel en niet te weinig bemoeienis", isCorrect: false },
        { text: "De positie verschuift: dichter bij betrokken voor jonge kinderen, geleidelijk naar meer afstand bij oudere kinderen", isCorrect: true },
        { text: "Zo dicht mogelijk bij de afwezige kant. Kinderen leren het meest door het zelf uit te zoeken", isCorrect: false },
      ],
      explanation: "Er is geen vaste 'sweet spot'. Een driejarige heeft veel meer begeleiding nodig dan een dertienjarige. De kunst is om je positie mee te laten schuiven met de ontwikkeling van je kind. Wat helikoptergedrag is bij een twaalfjarige, kan adequate zorg zijn bij een vierjarige.",
    },
    {
      question: "Je zoon (12) komt thuis met een onvoldoende. Hij zegt: 'Maakt me niet uit.' Je vermoedt dat het hem wel raakt. Wat is de meest effectieve reactie?",
      options: [
        { text: "'Ik merk dat je zegt dat het je niet uitmaakt, maar ik denk dat het best balen is'. Benoemen wat je ziet", isCorrect: false },
        { text: "Er niet op ingaan en later die avond terloops vragen hoe school was. Ruimte geven om zelf terug te komen", isCorrect: true },
        { text: "Meteen vragen wat er misging en een plan maken voor het volgende proefwerk. Proactief helpen", isCorrect: false },
      ],
      explanation: "Twaalfjarigen die zeggen 'maakt me niet uit' hebben vaak tijd nodig om hun emoties te verwerken. Direct doorvragen of benoemen voelt als confrontatie. Een plan maken voelt als controle. Door ruimte te geven en later terloops de deur open te zetten, respecteer je zijn autonomie en geef je hem de kans om er zelf mee te komen.",
    },
  ],
},
];
