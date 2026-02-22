import type { LearningModule, Skill } from "../types";

export const GRENZEN_MODULES: LearningModule[] = [
{
  id: "gr_mod_1",
  skill: "Grenzen" as Skill,
  title: "Je Kind Wil Grenzen (Echt Waar)",
  description: "Je denkt dat grenzen je kind ongelukkig maken. Maar zonder grenzen voelt je kind zich onveilig. Ontdek waarom limieten eigenlijk liefde zijn.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 1,
  content: [
    {
      type: "text" as const,
      heading: "Het is weer zover.",
      text: "Het is 20:15. Eva (4) staat voor de tiende keer naast je bed. Ze wil water. Een knuffel. Nog een verhaaltje. Jij wilt alleen maar op de bank zitten. Maar diep vanbinnen weet je: dit gaat niet over water.",
    },
    {
      type: "text" as const,
      heading: "Grenzen = veiligheid, niet straf",
      text: "Hier komt het onverwachte: je kind wil die grens. Echt. Niet bewust — Eva gaat niet denken: 'Ik hoop dat papa nee zegt.' Maar onbewust zoekt ze het. Elke keer dat ze naast je bed staat, stelt ze dezelfde vraag: 'Is het hier veilig? Zijn de regels er nog?'\n\nGrenzen zijn geen muren om je kind op te sluiten. Het zijn hekjes rondom een speeltuin. Binnen die hekjes kan je kind vrij spelen, ontdekken, fouten maken. Zonder die hekjes wordt de wereld te groot. Te onvoorspelbaar. Dan gaat je kind zich vastklampen. Of juist harder duwen. Niet omdat ze stout is — maar omdat ze zoekt waar de rand is.\n\nEva's bedtijdgevecht is geen machtsstrijd. Het is een veiligheidsvraag.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Diana Baumrind ontdekte dat kinderen het best gedijen bij 'autoritatief' opvoeden: warm én stevig. Niet streng (autoritair) en niet alles laten gaan (permissief). Kinderen met duidelijke, warme grenzen hebben meer zelfvertrouwen, betere sociale vaardigheden en minder angst. De containment theory bevestigt: kinderen voelen zich veilig als ze weten waar de rand is.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Drie functies van grenzen",
      diagramData: [
        {
          emoji: "🛡️",
          label: "Veiligheid",
          description: "Grenzen zeggen: 'Ik bescherm je.' Je kind hoeft niet zelf uit te zoeken wat gevaarlijk is. Dat doe jij.",
        },
        {
          emoji: "🧱",
          label: "Structuur",
          description: "Grenzen maken de wereld voorspelbaar. Als het altijd anders is, raakt je kind de weg kwijt.",
        },
        {
          emoji: "🌱",
          label: "Leren",
          description: "Grenzen leren je kind omgaan met frustratie, wachten en teleurstelling. Nu oefenen = later sterker.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Eva (4) staat voor de tiende keer naast het bed. 'Papa, ik kan niet slapen. Nog één verhaaltje?'",
      wrongApproach: "GEEN GRENS:\n\nPapa zucht. 'Vooruit dan, maar dan is het echt de laatste keer.' Leest nog een verhaal. Eva komt 10 minuten later weer. Papa: 'Nu echt! Laatste keer!' Leest weer voor.\n\nEva leert: als ik lang genoeg duw, verschuift de grens. Ze voelt zich niet veilig — want de rand is er niet.",
      rightApproach: "WARME GRENS:\n\nPapa: 'Ik snap dat je nog niet wilt slapen. Het was een leuke dag.' Knuffel. 'Maar het is bedtijd. Slaap lekker.' Brengt Eva terug naar bed. Zegt niks meer. Doet het nog twee keer, rustig, zonder discussie.\n\nEva huilt even. Maar ze weet: de rand is er. Papa is er. Het is veilig.",
      explanation: "Het verschil: de eerste papa verschuift de grens elke keer. Eva blijft zoeken. De tweede papa is warm maar duidelijk. Eva protesteert — maar vindt rust. Stevig en warm tegelijk.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Herken de vraag achter het gedrag. Als je kind een grens test, vraagt het: 'Is het hier veilig?' Niet: 'Hoe ver kan ik gaan?'\n\n2. Stel de grens vóór het moment. Bedenk vanavond: wat is de bedtijdregel? Zeg het hardop tegen je kind. 'Na twee verhaaltjes is het licht uit.' Geen verrassing.\n\n3. Houd vol zonder hard te worden. Je hoeft niet te schreeuwen. Je hoeft alleen consistent te zijn. Terugbrengen. Rustig. Zonder discussie. Herhaal als een gps: 'Het is bedtijd.'\n\n4. Verwacht protest. Dat is normaal. Protest betekent niet dat je fout zit. Het betekent dat je kind de grens heeft gevonden.",
    },
    {
      type: "exercise" as const,
      title: "De Drie-Grenzen Check",
      instructions: "Pak je telefoon. Schrijf drie grenzen op die je morgen wilt handhaven. Eén rond bedtijd, één rond eten, één rond schermtijd. Schrijf bij elke grens één zin die je gaat zeggen. Kort. Helder. Oefen ze hardop.",
      duration: 4,
      tips: [
        "Gebruik dezelfde woorden elke keer. Herhaling is kracht.",
        "Vertel je partner welke drie grenzen je hebt gekozen zodat jullie op één lijn zitten.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Bij welke grens geef je het vaakst toe? Wat maakt dat moment zo lastig voor jou?",
        "Hoe werden grenzen gesteld toen jij klein was? Wil je dat herhalen of juist anders doen?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Grenzen zijn geen straf maar veiligheid. Je kind test limieten om te checken of de wereld voorspelbaar is. Autoritatief opvoeden — warm én stevig — geeft de beste resultaten. Stel grenzen vooraf, houd ze vast en verwacht protest. Dat protest is normaal.",
    },
  ],
  keyTakeaways: [
    "Grenzen zijn geen straf maar veiligheid — je kind zoekt de rand om zich veilig te voelen",
    "Autoritatief opvoeden (warm én stevig) geeft kinderen meer zelfvertrouwen en minder angst",
    "Protest op een grens betekent niet dat je fout zit — het betekent dat je kind de grens heeft gevonden",
  ],
  research: "Baumrind (1991). Parenting Styles; Winnicott (1965). Containment Theory; Siegel & Bryson (2014). No-Drama Discipline",
  quizQuestions: [
    {
      question: "Eva (4) staat voor de vijfde keer naast je bed. Wat 'vraagt' ze eigenlijk?",
      options: [
        { text: "Ze test of de grens er nog is — dat voelt veilig", isCorrect: true },
        { text: "Ze probeert de baas te zijn en controle te krijgen", isCorrect: false },
      ],
      explanation: "Kinderen testen grenzen niet om macht uit te oefenen. Ze zoeken veiligheid: 'Is de rand er nog? Zijn de regels betrouwbaar?' Dat is een basisneed, geen machtsspel.",
    },
    {
      question: "Wat is het verschil tussen autoritair en autoritatief opvoeden?",
      options: [
        { text: "Autoritair is streng zonder warmte, autoritatief is stevig én warm", isCorrect: true },
        { text: "Ze betekenen hetzelfde, alleen de spelling is anders", isCorrect: false },
      ],
      explanation: "Autoritair = streng, weinig warmte ('Omdat ik het zeg!'). Autoritatief = duidelijke grenzen met uitleg en verbinding. Het verschil zit in de warmte, niet in de grens.",
    },
    {
      question: "Je kind protesteert hevig als je een grens stelt. Wat betekent dat?",
      options: [
        { text: "Je grens is te streng en je moet bijstellen", isCorrect: false },
        { text: "Protest is normaal — je kind heeft de grens gevonden en leert ermee omgaan", isCorrect: true },
      ],
      explanation: "Protest hoort erbij. Je kind leert omgaan met frustratie en teleurstelling. Als je bij elk protest de grens verschuift, leert je kind: harder duwen = grens verdwijnt.",
    },
  ],
},
{
  id: "gr_mod_2",
  skill: "Grenzen" as Skill,
  title: "Nee Zeggen Zonder Oorlog",
  description: "Nee zeggen voelt als een gevecht. Maar het hoeft geen oorlog te zijn. Leer grenzen stellen met verbinding — stevig én warm tegelijk.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 2,
  content: [
    {
      type: "text" as const,
      heading: "De snoeppot-oorlog.",
      text: "Het is 17:30. Sem (5) wil een koekje. Jij zegt nee. Sem huilt. Schreeuwt. Gaat op de grond liggen. Jij twijfelt. Is dit het waard? Het is maar een koekje.",
    },
    {
      type: "text" as const,
      heading: "Stevig én warm — dat kan",
      text: "De meeste vaders kennen twee standen: toegeven of hard worden. Toegeven voelt zwak. Hard worden voelt rot. Dus wissel je af: de ene dag toegeeflijk, de andere dag boos. En je kind raakt de weg kwijt.\n\nMaar er is een derde optie. Je kunt nee zeggen zonder te schreeuwen. Je kunt stevig zijn zonder koud te worden. Het geheim: erken eerst het gevoel, houd dan de grens.\n\n'Ik snap dat je een koekje wilt. Het ruikt ook lekker. Maar we eten zo. Na het eten mag je er eentje.'\n\nJe kind hoeft het niet leuk te vinden. Jij hoeft niet gemeen te zijn. Die twee dingen kunnen naast elkaar bestaan. Dat is de kern: verbinding en grens zijn geen tegenpolen. Ze zijn een team.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Onderzoek naar opvoedstijlen laat steeds hetzelfde zien: autoritatief opvoeden (warm + stevig) scoort beter dan autoritair (alleen stevig) of permissief (alleen warm). Kinderen die warme grenzen ervaren leren beter hun emoties te reguleren. Ze voelen de verbinding én de structuur. Koude grenzen leren gehoorzaamheid uit angst — warme grenzen leren zelfregulatie.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De drie stappen van een warme grens",
      diagramData: [
        {
          emoji: "💛",
          label: "Stap 1: Valideer",
          description: "Erken het gevoel. 'Ik snap dat je dit wilt.' Je kind voelt zich gehoord. Dat haalt de angel eruit.",
        },
        {
          emoji: "🧭",
          label: "Stap 2: Houd de grens",
          description: "Kort en helder. Geen lange uitleg. 'Maar we eten zo.' Geen maar-sorry-misschien.",
        },
        {
          emoji: "🔁",
          label: "Stap 3: Herhaal",
          description: "Kind duwt door? Zelfde woorden, zelfde toon. De kapotte grammofoon. Geen discussie, geen escalatie.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Sem (5) wil een koekje net voor het eten. Je zegt nee. Sem begint te huilen en zegt: 'Je bent een gemene papa!'",
      wrongApproach: "KOUDE GRENS:\n\nPapa, boos: 'Nee is nee! Hou op met dat gezeik! Naar je kamer!'\nSem huilt harder. Rent weg. Eten is verpest.\n\nDe grens stond. Maar de verbinding is kapot. Sem leert: mijn gevoelens doen er niet toe. Papa wordt boos als ik iets wil.",
      rightApproach: "WARME GRENS:\n\nPapa, rustig: 'Je wilt heel graag een koekje. Snap ik. Ze zijn ook lekker.'\nSem: 'Maar ik wil NU!'\nPapa: 'Ik weet het. Maar we gaan zo eten. Na het eten mag je er eentje uitkiezen.'\nSem huilt nog even. Papa blijft rustig. Legt hand op zijn rug.\n\nDe grens stond. En Sem voelde: papa ziet me.",
      explanation: "Zelfde grens. Ander resultaat. Het verschil zit niet in het nee — maar in wat eromheen zit. Valideren haalt de lading eruit. De grens blijft staan. En je relatie ook.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De kapotte grammofoon. Kind blijft vragen? Herhaal dezelfde zin. Zelfde woorden, zelfde rustige toon. 'We eten zo. Na het eten.' Geen nieuwe argumenten. Geen discussie.\n\n2. Valideer-dan-houd. Altijd in die volgorde. Eerst: 'Ik snap het.' Dan: 'Maar dit is de regel.' Nooit andersom.\n\n3. Let op je lichaam. Je woorden zeggen 'rustig' maar je kaak staat strak en je stem is hoog? Je kind leest je lijf, niet je woorden. Ontspan je schouders. Lage stem. Dat is het signaal.",
    },
    {
      type: "exercise" as const,
      title: "Nee-Zin Oefenen",
      instructions: "Bedenk een situatie waarin je morgen waarschijnlijk nee moet zeggen. Formuleer nu je zin: eerst valideren, dan de grens. Zeg hem drie keer hardop. Dezelfde woorden. Dezelfde toon. Merk hoe het voelt als je het uitspreekt zonder boosheid.",
      duration: 3,
      tips: [
        "Probeer je zin in maximaal twee korte zinnen te houden — kinderen luisteren niet naar alinea's",
        "Oefen voor de spiegel en kijk naar je gezichtsuitdrukking — is die warm of streng?",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Wanneer merk je dat je van 'rustig nee' naar 'boos nee' schakelt? Wat is het kantelpunt?",
        "Hoe reageerde jouw vader als je iets wilde wat niet mocht? Herken je dat patroon bij jezelf?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Nee zeggen hoeft geen oorlog te zijn. Valideer eerst het gevoel, houd dan de grens. Gebruik de kapotte grammofoon: zelfde woorden, zelfde toon, geen discussie. Let op je lichaamstaal — je kind leest je lijf. Stevig en warm zijn is geen tegenstrijdigheid.",
    },
  ],
  keyTakeaways: [
    "Stevig en warm zijn geen tegenpolen — je kunt nee zeggen met verbinding",
    "Valideer eerst het gevoel ('ik snap het'), houd dan de grens — altijd in die volgorde",
    "De kapotte grammofoon werkt: zelfde woorden, zelfde rustige toon, geen discussie",
  ],
  research: "Baumrind (1991). Parenting Styles; Gottman (1997). Emotion Coaching; Ginott (1965). Between Parent and Child",
  quizQuestions: [
    {
      question: "Sem (5) huilt omdat hij geen koekje mag. Wat doe je eerst?",
      options: [
        { text: "Zijn gevoel erkennen: 'Ik snap dat je er een wilt'", isCorrect: true },
        { text: "Direct de grens herhalen: 'Nee is nee'", isCorrect: false },
      ],
      explanation: "Eerst valideren, dan de grens. Als je kind zich gehoord voelt, kan het beter omgaan met het nee. Andersom voelt het als een aanval.",
    },
    {
      question: "Je kind vraagt voor de vierde keer om iets dat niet mag. Wat werkt het best?",
      options: [
        { text: "Elke keer een nieuw argument geven waarom het niet mag", isCorrect: false },
        { text: "Dezelfde zin rustig herhalen — de kapotte grammofoon", isCorrect: true },
      ],
      explanation: "Nieuwe argumenten openen nieuwe discussies. De kapotte grammofoon sluit de discussie: zelfde woorden, zelfde toon. Geen opening voor onderhandeling.",
    },
    {
      question: "Je zegt 'rustig' nee maar je kaak staat strak en je stem is hoog. Wat pikt je kind op?",
      options: [
        { text: "Je woorden — kinderen luisteren naar wat je zegt", isCorrect: false },
        { text: "Je lichaamstaal — kinderen lezen je lijf, niet je woorden", isCorrect: true },
      ],
      explanation: "Kinderen zijn experts in non-verbale communicatie. Als je lichaam spanning uitstraalt, voelt je kind dreiging — ook al zijn je woorden rustig.",
    },
  ],
},
{
  id: "gr_mod_3",
  skill: "Grenzen" as Skill,
  title: "Straf Werkt Niet (Dit Wel)",
  description: "Straf stopt gedrag tijdelijk maar leert niks. Ontdek hoe natuurlijke consequenties je kind wél verantwoordelijkheid leren — zonder schreeuwen.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 3,
  content: [
    {
      type: "text" as const,
      heading: "De klap en de stilte erna.",
      text: "Finn (6) slaat zijn broertje. Hard. Je voelt de boosheid opkomen. Je wilt straffen. Naar zijn kamer. Geen tv. Iets pakken. Maar werkt dat eigenlijk?",
    },
    {
      type: "text" as const,
      heading: "Straf leert angst, niet gedrag",
      text: "Straf stopt het gedrag. Tijdelijk. Maar het leert je kind niet waarom iets fout was. Het leert: 'Als papa het ziet, krijg ik straf. Dus ik moet het stiekem doen.'\n\nNatuurlijke consequenties werken anders. Ze laten je kind de link voelen tussen gedrag en gevolg. Niet als straf van buitenaf — maar als logisch resultaat van wat ze deden.\n\nFinn slaat zijn broertje? Het spel stopt. Niet als straf. Maar omdat: 'Als je slaat, wil je broertje niet meer spelen.' Dat is de waarheid. Dat is het logische gevolg.\n\nHet verschil is subtiel maar enorm. Straf zegt: 'Jij bent fout.' Een consequentie zegt: 'Dit is wat er gebeurt als je dit doet.' De eerste beschadigt de relatie. De tweede leert verantwoordelijkheid.\n\nEn dan: herstel. Niet als straf. Als kans. 'Wat kun je doen om het goed te maken met je broertje?' Dat leert Finn meer dan een uur op zijn kamer.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Deci en Ryan's zelfdeterminatietheorie laat zien: mensen (ook kinderen) leren het best vanuit intrinsieke motivatie — niet vanuit angst voor straf. Extrinsieke controle (beloning/straf) ondermijnt het eigen verantwoordelijkheidsgevoel. Kinderen die leren via natuurlijke consequenties ontwikkelen beter inzicht in oorzaak en gevolg. Ze doen het goede omdat ze het snappen — niet omdat ze bang zijn.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Straf vs. consequentie vs. herstel",
      diagramData: [
        {
          emoji: "🚫",
          label: "Straf",
          description: "Van buitenaf opgelegd. Geen logische link met gedrag. Leert angst en stiekem doen. 'Naar je kamer!' na slaan.",
        },
        {
          emoji: "🔗",
          label: "Consequentie",
          description: "Logisch gevolg van gedrag. Kind ervaart de link zelf. 'Je broertje wil nu even niet spelen.' Leert oorzaak-gevolg.",
        },
        {
          emoji: "🤝",
          label: "Herstel",
          description: "Kind maakt het goed. Tekening, sorry, samen opruimen. Leert verantwoordelijkheid en empathie. Versterkt de relatie.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Finn (6) slaat zijn broertje Luuk (4) omdat Luuk zijn lego-toren omgooide.",
      wrongApproach: "STRAF:\n\nPapa: 'Finn! We slaan niet! Naar je kamer! Geen tv vanavond!'\nFinn stampt naar boven. Huilt. Is boos op papa. Is boos op Luuk.\n\nWat leerde Finn? Papa wordt boos als ik sla. Volgende keer stiekem doen. Nul empathie voor Luuk. Nul probleemoplossing.",
      rightApproach: "CONSEQUENTIE + HERSTEL:\n\nPapa gaat naar Luuk. Troost hem eerst. Dan naar Finn.\nPapa: 'Je was boos omdat Luuk je toren omgooide. Snap ik. Maar je hebt hem pijn gedaan. Kijk — hij huilt.'\nFinn kijkt.\nPapa: 'Het spelen stopt even. Wat denk je dat je kunt doen zodat Luuk zich weer oké voelt?'\nFinn, zacht: 'Sorry zeggen?'\nPapa: 'Goed idee. En misschien samen de toren opnieuw bouwen?'",
      explanation: "Finn leerde drie dingen: slaan heeft gevolgen (spel stopt), zijn broertje heeft gevoelens (empathie), en hij kan het goedmaken (herstel). Meer dan straf ooit zou leren.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Herontwerp je consequenties. Vraag je af: is dit een logisch gevolg van het gedrag? Of is het een willekeurige straf? 'Geen tv na slaan' is willekeurig. 'Het spel stopt na slaan' is logisch.\n\n2. Maak de gedrag-impact link zichtbaar. 'Kijk, je broertje huilt.' Niet als schuldgevoel — maar als informatie. Je kind leert: mijn acties hebben effect op anderen.\n\n3. Bied herstel aan. Altijd. 'Wat kun je doen om het goed te maken?' Geef je kind de kans om verantwoordelijkheid te nemen. Dat is krachtiger dan elke straf.\n\n4. Troost het 'slachtoffer' eerst. Dat laat ook de 'dader' zien wat de impact was. Zonder preek.",
    },
    {
      type: "exercise" as const,
      title: "De Consequentie-Vertaler",
      instructions: "Denk aan de laatste keer dat je je kind strafte. Schrijf de straf op. Vertaal hem nu naar een logische consequentie. Wat is het natuurlijke gevolg van dat gedrag? En bedenk een herstelvraag die je had kunnen stellen: 'Wat kun je doen om het goed te maken?'",
      duration: 5,
      tips: [
        "De beste consequenties voelen eerlijk voor je kind — ze snappen het verband tussen gedrag en gevolg",
        "Herstel hoeft niet perfect te zijn. Een tekening, een knuffel of samen opruimen telt ook",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Welke straffen gebruik je het vaakst? Zijn ze logisch verbonden aan het gedrag — of willekeurig?",
        "Hoe zou het voelen om je kind de kans te geven het goed te maken in plaats van te straffen?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Straf stopt gedrag tijdelijk maar leert angst, niet verantwoordelijkheid. Natuurlijke consequenties laten je kind de link voelen tussen gedrag en gevolg. Herstel is krachtiger dan straf: 'Wat kun je doen om het goed te maken?' leert empathie en verantwoordelijkheid.",
    },
  ],
  keyTakeaways: [
    "Straf leert angst en stiekem doen — natuurlijke consequenties leren oorzaak en gevolg",
    "Een goede consequentie is logisch verbonden aan het gedrag, niet willekeurig opgelegd",
    "Herstel ('Wat kun je doen om het goed te maken?') leert meer dan elke straf",
  ],
  research: "Deci & Ryan (2000). Self-Determination Theory; Dreikurs & Soltz (1964). Children: The Challenge; Siegel & Bryson (2014). No-Drama Discipline",
  quizQuestions: [
    {
      question: "Finn (6) slaat zijn broertje. Je stuurt hem naar zijn kamer. Wat leert hij?",
      options: [
        { text: "Dat slaan pijn doet bij een ander en waarom het niet mag", isCorrect: false },
        { text: "Dat hij niet moet slaan als papa kijkt — verder niks", isCorrect: true },
      ],
      explanation: "Straf zonder logische link leert alleen: vermijd straf. Finn leert niks over empathie of de impact van zijn gedrag. Hij leert het stiekem te doen.",
    },
    {
      question: "Wat is het verschil tussen een straf en een natuurlijke consequentie?",
      options: [
        { text: "Een consequentie is het logische gevolg van het gedrag, een straf is willekeurig opgelegd", isCorrect: true },
        { text: "Er is geen verschil — het zijn allebei manieren om gedrag te stoppen", isCorrect: false },
      ],
      explanation: "Een straf komt van buitenaf zonder logische link ('geen tv na slaan'). Een consequentie is het natuurlijke gevolg ('het spel stopt als je slaat'). Het kind begrijpt het verband.",
    },
    {
      question: "Na een conflict vraag je: 'Wat kun je doen om het goed te maken?' Wat leer je je kind?",
      options: [
        { text: "Dat het altijd sorry moet zeggen, ook als het dat niet meent", isCorrect: false },
        { text: "Verantwoordelijkheid nemen en empathie — het leert herstellen", isCorrect: true },
      ],
      explanation: "Herstel is geen afgedwongen sorry. Het is je kind de ruimte geven om zelf na te denken over de impact en een oplossing te bedenken. Dat leert empathie en verantwoordelijkheid.",
    },
  ],
},
{
  id: "gr_mod_4",
  skill: "Grenzen" as Skill,
  title: "Niet Alles Is Een Gevecht",
  description: "Je vecht over schoenen, groente, bedtijden en YouTube. Maar niet elke heuvel is het waard om op te sterven. Leer je gevechten kiezen.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 4,
  content: [
    {
      type: "text" as const,
      heading: "Twaalf gevechten voor het ontbijt.",
      text: "Het is 7:45. Je hebt al gevochten over tandenpoetsen, de verkeerde sokken, geen jas aan, en waarom cornflakes 'niet die goede' zijn. Je bent uitgeput. En de dag is nog niet eens begonnen.",
    },
    {
      type: "text" as const,
      heading: "Niet elke heuvel is het waard",
      text: "Hier is een ongemakkelijke waarheid: als alles een grens is, is niks een grens. Als je overal op reageert — de sokken, het eten, de jas, het volume, de houding — dan verliest je kind het overzicht. En jij je energie.\n\nDe kunst is kiezen. Welke grenzen zijn niet onderhandelbaar? Welke zijn belangrijk maar flexibel? En welke kun je laten gaan?\n\nDie verkeerde sokken? Laat gaan. Die jas? Belangrijk als het vriest, flexibel als het 15 graden is. Veiligheid? Altijd. Zonder discussie.\n\nAls je minder gevechten voert, winnen de gevechten die ertoe doen aan kracht. Je kind leert: als papa dit zegt, meent hij het. Want hij zegt het niet overal over.\n\nSpaar je energie. Gebruik hem waar het telt.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Onderzoek naar beslissingsmoeheid laat zien: elke keuze kost mentale energie. Dat geldt voor jou én je kind. Te veel grenzen leidt tot uitputting, frustratie en inconsequent gedrag. Een hiërarchie van grenzen — veiligheid eerst, dan waarden, dan voorkeuren — helpt ouders hun energie te richten op wat echt belangrijk is.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De grenzen-sorter",
      diagramData: [
        {
          emoji: "🔴",
          label: "Niet onderhandelbaar (veiligheid)",
          description: "Gordel om. Niet op straat rennen. Niet slaan. Hier is nee altijd nee. Geen uitzonderingen. Geen discussie.",
        },
        {
          emoji: "🟡",
          label: "Belangrijk maar flexibel",
          description: "Bedtijden, groente eten, schermtijd. De regels staan, maar er is ruimte voor overleg. 'Vanavond mag je 10 minuten langer.'",
        },
        {
          emoji: "🟢",
          label: "Laat gaan",
          description: "Verkeerde sokken. Rare outfit. Boterham zonder korst. Kies je gevecht niet hier. Spaar je energie.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Zaterdagochtend. Noah (7) wil in zijn pyjama naar de supermarkt. Met twee verschillende sokken. En een cape.",
      wrongApproach: "OVERAL EEN GEVECHT:\n\nPapa: 'Je kunt niet in je pyjama naar de winkel! Trek normale kleren aan!'\nNoah: 'Waarom niet?'\nPapa: 'Omdat het niet normaal is!'\nNoah weigert. Discussie. Schreeuwen. Tranen. Papa is moe en ze zijn nog niet eens de deur uit.\n\nResultaat: papa verspilde zijn energie aan een gevecht dat er niet toe doet.",
      rightApproach: "GEVECHT KIEZEN:\n\nPapa kijkt naar Noah in zijn pyjama-cape-outfit. Denkt: is dit veiligheid? Nee. Is dit belangrijk? Meh. Laat gaan.\n\nPapa, glimlachend: 'Stoere cape. Gordel om in de auto.'\n\nNoah straalt. Papa heeft energie over voor de grenzen die er wél toe doen. Bij het avondeten zegt papa rustig en overtuigend: 'Eerst drie happen groente, dan toetje.'",
      explanation: "Papa koos zijn gevecht. De cape: laat gaan. De gordel en het eten: niet onderhandelbaar. Door niet overal op te reageren, had hij de rust en energie om de grenzen die ertoe doen stevig vast te houden.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Maak je grenzen-lijst. Verdeel je grenzen in drie categorieën: rood (niet onderhandelbaar), geel (belangrijk, soms flexibel), groen (laat gaan). Schrijf ze op.\n\n2. De twee-seconden-check. Voor je reageert: 'Is dit rood, geel of groen?' Als het groen is, laat het gaan. Als het geel is, overleg. Alleen bij rood: direct en stevig.\n\n3. Geef autonomie bij groen. Laat je kind kiezen waar het kan. Welke sokken, welk brood, welke route naar school. Dat vermindert machtsstrijd bij de rode grenzen.\n\n4. Minder is meer. Hoe minder grenzen je stelt, hoe meer gewicht elke grens heeft. Drie duidelijke regels werken beter dan twintig vage.",
    },
    {
      type: "exercise" as const,
      title: "De Grenzen-Sorter",
      instructions: "Pak een papiertje. Maak drie kolommen: Rood, Geel, Groen. Schrijf in elke kolom minstens drie grenzen die in jouw gezin spelen. Kijk naar de groene kolom: kun je daar morgen iets laten gaan? Kijk naar de rode kolom: zijn die helder voor je kind?",
      duration: 5,
      tips: [
        "Bespreek je lijst met je partner — zijn jullie het eens over wat rood, geel en groen is?",
        "Hang de rode regels op de koelkast. Kort. 'In dit huis slaan we niet. Gordel altijd om.'",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Welke gevechten voer je elke dag die eigenlijk 'groen' zijn? Wat zou er gebeuren als je ze loslaat?",
        "Heb je het gevoel dat je faalt als je iets laat gaan? Waar komt dat gevoel vandaan?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Als alles een grens is, is niks een grens. Sorteer je grenzen: rood (veiligheid, altijd), geel (belangrijk, soms flexibel), groen (laat gaan). Minder gevechten = meer kracht bij de gevechten die ertoe doen. Geef autonomie waar het kan.",
    },
  ],
  keyTakeaways: [
    "Als alles een gevecht is, verliest elke grens zijn kracht — kies waar je energie naartoe gaat",
    "Sorteer grenzen in rood (veiligheid), geel (belangrijk/flexibel) en groen (laat gaan)",
    "Minder grenzen stellen maakt de grenzen die je wél stelt sterker en geloofwaardiger",
  ],
  research: "Baumeister et al. (1998). Decision Fatigue; Baumrind (1991). Parenting Styles; Deci & Ryan (2000). Autonomy and Self-Determination",
  quizQuestions: [
    {
      question: "Noah (7) wil in zijn pyjama naar de supermarkt. Wat doe je?",
      options: [
        { text: "Laat gaan — dit is een groen gevecht, spaar je energie", isCorrect: true },
        { text: "Niet toestaan — kinderen moeten leren wat gepast is", isCorrect: false },
      ],
      explanation: "Kleding naar de supermarkt is geen veiligheidskwestie. Door dit gevecht te laten gaan, houd je energie over voor de grenzen die er echt toe doen.",
    },
    {
      question: "Je stelt elke dag twintig grenzen. Je kind luistert steeds minder. Waarom?",
      options: [
        { text: "Je kind wordt brutaler en heeft meer discipline nodig", isCorrect: false },
        { text: "Te veel grenzen leiden tot beslissingsmoeheid — elke grens verliest kracht", isCorrect: true },
      ],
      explanation: "Beslissingsmoeheid geldt voor jou én je kind. Hoe meer grenzen je stelt, hoe minder gewicht elke grens heeft. Minder is meer.",
    },
    {
      question: "Wat hoort bij 'rood' in de grenzen-sorter?",
      options: [
        { text: "Veiligheid: gordel om, niet slaan, niet de straat op rennen", isCorrect: true },
        { text: "Kleding, eten en hoeveel verhaaltjes voor het slapen", isCorrect: false },
      ],
      explanation: "Rood is voor veiligheid: niet onderhandelbaar, geen uitzonderingen. Kleding en verhaaltjes zijn geel of groen — belangrijk, maar er is ruimte voor flexibiliteit.",
    },
  ],
},
{
  id: "gr_mod_5",
  skill: "Grenzen" as Skill,
  title: "Consistent Zijn Als Je Doodmoe Bent",
  description: "Maandag: 'geen snoep voor het eten.' Dinsdag: 'vooruit dan maar.' Je kind raakt de weg kwijt. Leer consistent zijn zonder wilskracht — via systemen.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 5,
  content: [
    {
      type: "text" as const,
      heading: "De dinsdag-versie van jou.",
      text: "Maandag stel je de grens. 'Geen snoep voor het eten.' Stevig. Helder. Dinsdag ben je kapot. Lang gewerkt. Kort lontje. Sem (5) vraagt om snoep. 'Vooruit dan maar.' En je weet het: je hebt net alles van gisteren ongedaan gemaakt.",
    },
    {
      type: "text" as const,
      heading: "Consistentie via systemen, niet wilskracht",
      text: "Hier is het probleem: je probeert consistent te zijn op wilskracht. En wilskracht is een eindige bron. Na een lange werkdag, een slecht slapende baby, of een ruzie met je partner — is er niks meer over. En dan buig je.\n\nDe oplossing is niet: harder je best doen. De oplossing is: beslissingen weghalen. Systemen bouwen die voor je werken als je moe bent.\n\nEen systeem is een regel die vooraf besloten is. Niet elke dag opnieuw. 'Snoep mag na het eten' is niet iets wat je bedenkt als Sem voor je staat. Het is iets wat jullie als gezin hebben afgesproken. Het staat vast. Het hangt op de koelkast. Sem kent het.\n\nAls Sem vraagt, hoef je niet na te denken. Je hoeft niet sterk te zijn. Je wijst naar de koelkast. 'Wat is de regel?' Sem weet het. Jij hoefde geen energie te gebruiken.\n\nConsistentie is geen karaktereigenschap. Het is een systeem.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Onderzoek laat zien dat kinderen inconsistente grenzen verwarrend en stressvol vinden. Het verhoogt onzekerheid en grenszoekend gedrag. Regels die automatisch zijn (vastgelegd, vooraf besloten) kosten minder mentale energie dan regels die op het moment bedacht worden. Partner-alignment verdubbelt het effect: als beide ouders dezelfde grens hanteren, leert het kind sneller.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Van wilskracht naar systeem",
      diagramData: [
        {
          emoji: "🧠",
          label: "Wilskracht-grens",
          description: "Elke keer opnieuw beslissen. Kost energie. Resultaat: maandag stevig, dinsdag moe, woensdag toegegeven.",
        },
        {
          emoji: "⚙️",
          label: "Systeem-grens",
          description: "Vooraf besloten. Op papier. Bekend bij iedereen. Kost geen energie op het moment zelf.",
        },
        {
          emoji: "👥",
          label: "Partner-alignment",
          description: "Beide ouders zelfde regels. Kind kan niet 'shoppen' tussen ouders. Verdubbelt de consistentie.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Dinsdag, 17:45. Je bent moe. Sem (5) wil snoep voor het eten. 'Mag ik een koekje, papa? Alsjeblieft?'",
      wrongApproach: "WILSKRACHT-AFHANKELIJK:\n\nMaandag-papa (uitgerust): 'Nee, Sem, na het eten.'\nDinsdag-papa (kapot): '...vooruit dan maar. Eentje dan.'\nWoensdag-papa (schuldgevoel): 'Nee! Ik zei toch nee?!' Boos.\n\nSem leert: als papa moe is, kan ik het krijgen. Als papa boos is, niet vragen. De grens is een loterij.",
      rightApproach: "SYSTEEM-GRENS:\n\nEr hangt een vel op de koelkast: 'Onze afspraken.' Eén ervan: 'Snoep mag na het eten.'\n\nSem vraagt. Papa, moe maar rustig: 'Wat is de afspraak?'\nSem: '...na het eten.'\nPapa: 'Precies. Na het eten mag je kiezen.'\n\nPapa hoefde niet sterk te zijn. Het systeem deed het werk.",
      explanation: "Het verschil: de eerste papa moet elke dag opnieuw beslissen. De tweede papa heeft de beslissing al genomen. Op een rustig moment. Het systeem draagt de grens — niet zijn wilskracht.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Van beslissing naar systeem. Neem je drie belangrijkste grenzen. Schrijf ze op. Hang ze op. Bespreek ze met je kind. Nu zijn het geen dagelijkse beslissingen meer — het zijn afspraken.\n\n2. Vooraf besliste regels. Bedenk op zondagavond: wat zijn de regels voor deze week? Schrijf ze op vóór de situaties zich voordoen. Moe-jij hoeft niet na te denken.\n\n3. Partner-alignment. Bespreek met je partner: waar staan we samen in? Het hoeft niet perfect — maar de grote lijnen moeten gelijk zijn. Kinderen zijn experts in het vinden van gaten.\n\n4. De terugval-zin. Als je twijfelt, heb één standaardzin: 'Wat is de afspraak?' Die zin werkt altijd. Ook als je moe bent.",
    },
    {
      type: "exercise" as const,
      title: "Het Koelkast-Contract",
      instructions: "Schrijf vanavond drie gezinsregels op een vel papier. Kort. Helder. 'Snoep na het eten.' 'Schermen uit om 19:00.' 'We slaan niet.' Hang het op de koelkast. Bespreek het morgenochtend met je kind. Vraag: 'Ken jij onze afspraken?'",
      duration: 5,
      tips: [
        "Laat je kind de regels tekenen of versieren — dan voelen ze als iets van het hele gezin",
        "Begin met maximaal drie regels. Te veel regels op papier werkt net zo min als te veel regels in je hoofd",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Op welk moment van de dag geef je het vaakst toe aan een grens? Wat maakt dat moment zo lastig?",
        "Staan jij en je partner op één lijn bij de belangrijkste grenzen? Waar zitten de verschillen?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Consistentie lukt niet op wilskracht — die raakt op. Bouw systemen: regels vooraf beslissen, opschrijven en ophangen. Gebruik 'Wat is de afspraak?' als je moe bent. Zorg voor partner-alignment. Het systeem draagt de grens zodat jij dat niet hoeft te doen.",
    },
  ],
  keyTakeaways: [
    "Consistentie is geen karaktereigenschap maar een systeem — beslissingen vooraf nemen kost minder energie",
    "Schrijf je belangrijkste regels op en hang ze op — moe-jij hoeft dan niet meer na te denken",
    "Partner-alignment verdubbelt het effect: als beide ouders dezelfde grens hanteren, leert je kind sneller",
  ],
  research: "Baumeister & Tierney (2011). Willpower; Patterson (2002). Coercive Family Process; Baumrind (1991). Parenting Styles",
  quizQuestions: [
    {
      question: "Maandag zeg je nee tegen snoep. Dinsdag geef je toe. Wat leert je kind?",
      options: [
        { text: "Dat de grens een loterij is — lang genoeg doorgaan loont soms", isCorrect: true },
        { text: "Dat papa soms flexibel is en dat is gezond voor de relatie", isCorrect: false },
      ],
      explanation: "Inconsistentie leert je kind: als ik lang genoeg doorga, verschuift de grens misschien. Dat versterkt grenszoekend gedrag. Flexibiliteit is goed — maar alleen als het bewust en voorspelbaar is.",
    },
    {
      question: "Je bent doodmoe en je kind vraagt iets dat niet mag. Wat werkt het best?",
      options: [
        { text: "Diep ademhalen en op wilskracht de grens vasthouden", isCorrect: false },
        { text: "Terugvallen op het systeem: 'Wat is de afspraak?'", isCorrect: true },
      ],
      explanation: "Wilskracht raakt op. Een systeem niet. Als de regel vooraf besloten is en je kind hem kent, hoef je alleen te verwijzen. Geen energie nodig.",
    },
    {
      question: "Waarom is partner-alignment belangrijk bij grenzen?",
      options: [
        { text: "Kinderen vinden gaten tussen ouders — als mama en papa verschillen, wordt het een loterij", isCorrect: true },
        { text: "Het maakt niet uit — kinderen snappen dat ouders verschillende regels hebben", isCorrect: false },
      ],
      explanation: "Kinderen zijn experts in het 'shoppen' tussen ouders. Als papa nee zegt en mama ja, leert je kind: vraag het aan de ander. Dat ondermijnt beide grenzen.",
    },
  ],
},
];
