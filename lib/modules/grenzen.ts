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
      text: "Het is 20:15. Eva (4) staat voor de tiende keer naast je bed. Ze wil water. Een knuffel. Nog een verhaaltje. Jij wilt alleen maar op de bank zitten. Maar diep van binnen weet je: dit gaat niet over water.",
    },
    {
      type: "text" as const,
      heading: "Grenzen = veiligheid, niet straf",
      text: "Hier komt het onverwachte: je kind wil die grens. Echt. Niet bewust — Eva gaat niet denken: 'Ik hoop dat papa nee zegt.' Maar onbewust zoekt ze het. Elke keer dat ze naast je bed staat, stelt ze dezelfde vraag: 'Is het hier veilig? Zijn de regels er nog?'\n\nGrenzen zijn geen muren om je kind op te sluiten. Het zijn hekjes rondom een speeltuin. Binnen die hekjes kan je kind vrij spelen, ontdekken, fouten maken. Zonder die hekjes wordt de wereld te groot. Te onvoorspelbaar. Dan gaat je kind zich vastklampen. Of juist harder duwen. Niet omdat ze stout is — maar omdat ze zoekt waar de rand is.\n\nEva's bedtijdgevecht is geen machtsstrijd. Het is een veiligheidsvraag.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Diana Baumrind ontdekte dat kinderen het best gedijen bij 'autoritatief' opvoeden: warm én stevig. Niet streng (autoritair) en niet alles laten gaan (permissief). Kinderen met duidelijke, warme grenzen hebben meer zelfvertrouwen, betere sociale vaardigheden en minder angst. De containment-theorie bevestigt: kinderen voelen zich veilig als ze weten waar de rand is.",
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
      instructions: "1. Pak je telefoon of een papiertje.\n2. Schrijf drie grenzen op die je morgen wilt handhaven:\n   - Eén rond bedtijd\n   - Eén rond eten\n   - Eén rond schermtijd\n3. Schrijf bij elke grens één zin die je gaat zeggen. Kort. Helder.\n4. Oefen ze hardop — ja, echt hardop. Drie keer elk.\n5. Vertel je partner welke drie grenzen je hebt gekozen.",
      duration: 4,
      tips: [
        "Gebruik dezelfde woorden elke keer. Herhaling is kracht.",
        "Begin met grenzen waarvan je zeker weet dat je ze kunt vasthouden — succes motiveert.",
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
  research: "Baumrind (1991). Parenting Styles; Bion (1962). Containment Theory; Siegel & Bryson (2014). No-Drama Discipline",
  quizQuestions: [
    {
      question: "Eva (4) test elke avond de bedtijdgrens. Na twee weken houdt ze ermee op. Drie weken later begint ze weer. Wat betekent dat?",
      options: [
        { text: "Je aanpak werkte niet — als het echt gewerkt had, was het testen voorgoed gestopt", isCorrect: false },
        { text: "Herhaald testen is een goed teken — ze checkt periodiek of de grens er nog is, dat is gezond", isCorrect: true },
        { text: "Ze is in een nieuwe fase en heeft nu andere grenzen nodig", isCorrect: false },
      ],
      explanation: "Kinderen blijven grenzen periodiek testen, ook als ze die al kennen. Dit is geen teken van falen maar van gezonde ontwikkeling. Ze bevestigen: klopt het nog? Is het hier nog veilig? Dat testen stopt nooit helemaal — en dat hoeft ook niet.",
    },
    {
      question: "Welke uitspraak over opvoedstijlen is ONJUIST?",
      options: [
        { text: "Permissieve ouders zijn warmer dan autoritatieve ouders", isCorrect: true },
        { text: "Autoritaire ouders stellen grenzen maar missen de warmte erbij", isCorrect: false },
        { text: "Autoritatieve ouders combineren duidelijke grenzen met uitleg en verbinding", isCorrect: false },
      ],
      explanation: "Permissieve ouders zijn niet warmer — ze vermijden confrontatie, wat iets anders is dan warmte bieden. Autoritatieve ouders zijn juist het warmst, omdat ze de moeite nemen om grenzen te combineren met verbinding en uitleg. Warmte zonder grenzen is geen warmte, het is vermijding.",
    },
    {
      question: "Je begrijpt precies waarom je dochter (5) boos is over bedtijd. Je legt uitgebreid uit dat je haar gevoel snapt, en praat er twintig minuten over. Ze gaat nog steeds niet naar bed. Wat ging er mis?",
      options: [
        { text: "Je was niet begripvol genoeg — probeer het nog eens met meer empathie", isCorrect: false },
        { text: "Te veel begrip tonen kan de grens ondermijnen — erken kort en houd dan de lijn", isCorrect: true },
        { text: "Kinderen van vijf begrijpen uitleg nog niet — wacht tot ze ouder is", isCorrect: false },
      ],
      explanation: "Eindeloos valideren wordt een nieuwe vorm van uitstel. De kracht zit in kort erkennen ('Ik snap dat je nog wilt spelen') en dan de grens vasthouden zonder verder te onderhandelen. Begrip tonen en stevig zijn moeten in balans zijn — te veel van het eerste ondermijnt het tweede.",
    },
    {
      question: "Een vader zegt streng maar rustig: 'Het is bedtijd. Welterusten.' Een andere vader roept geïrriteerd: 'NU naar bed! Ik meen het!' Beide kinderen gaan naar bed. Wat is het verschil?",
      options: [
        { text: "Geen verschil — het resultaat is hetzelfde, het kind gaat naar bed", isCorrect: false },
        { text: "De eerste vader is te koud — een kind heeft warmte nodig bij een grens", isCorrect: false },
        { text: "De eerste leert het kind dat grenzen veilig zijn, de tweede dat grenzen dreigend zijn", isCorrect: true },
      ],
      explanation: "Een firm 'nee' en een boos 'nee' lijken op elkaar, maar het kind ervaart ze totaal anders. Bij het eerste leert het kind: de wereld is voorspelbaar. Bij het tweede leert het: papa's humeur bepaalt de regels. Het verschil zit niet in de grens maar in de emotionele lading erachter.",
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
      text: "1. De kapotte grammofoon. Kind blijft vragen? Herhaal dezelfde zin. Zelfde woorden, zelfde rustige toon. 'We eten zo. Na het eten.' Geen nieuwe argumenten. Geen discussie.\n\n2. Valideer-dan-houd. Altijd in die volgorde. Eerst: 'Ik snap het.' Dan: 'Maar dit is de regel.' Nooit andersom.\n\n3. Let op je lichaam. Je woorden zeggen 'rustig' maar je kaak staat strak en je stem is hoog? Je kind leest je lijf, niet je woorden. Ontspan je schouders. Lage stem. Dat is het signaal.\n\n4. Tiener-variant. Bij een puber werkt de kapotte grammofoon anders. Tieners hebben uitleg nodig — niet eindeloos, maar eerlijk. 'Ik begrijp dat je tot elf uur wilt. Mijn zorg is veiligheid. Laten we een oplossing zoeken.' Valideren + eerlijke reden + samen zoeken werkt beter dan herhalen.",
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
      question: "Sem (5) vraagt om een koekje. Je valideert: 'Ik snap dat je er een wilt.' Hij huilt harder en schreeuwt: 'Maar ik WIL er een!' Betekent dit dat valideren niet werkt?",
      options: [
        { text: "Ja — bij sommige kinderen werkt valideren averechts en moet je directer zijn", isCorrect: false },
        { text: "Nee — valideren stopt de emotie niet, het maakt de grens verdraagbaar. Het huilen mag er zijn", isCorrect: true },
        { text: "Je hebt niet genoeg gevalideerd — probeer het nog een keer met meer empathie", isCorrect: false },
      ],
      explanation: "Valideren is geen truc om huilen te stoppen. Het doel is dat je kind zich gehoord voelt terwijl de grens blijft staan. Het protest mag er zijn — dat is het verwerkingsproces. Meer valideren toevoegen maakt het juist weer een onderhandeling.",
    },
    {
      question: "Wat is het risico als je bij 'nee zeggen' altijd eerst uitgebreid uitlegt waarom iets niet mag?",
      options: [
        { text: "Er is geen risico — kinderen verdienen altijd een uitleg bij een grens", isCorrect: false },
        { text: "Uitleg kan een nieuw onderhandelingsmoment openen waar je kind tegenargumenten op bedenkt", isCorrect: true },
        { text: "Kinderen luisteren niet naar uitleg, dus het is tijdverspilling maar verder onschadelijk", isCorrect: false },
      ],
      explanation: "Uitleg is waardevol, maar timing is alles. Tijdens het moment zelf kan elke zin een nieuw discussiepunt worden. De kapotte grammofoon (zelfde woorden, zelfde toon) is effectiever in het moment. Uitleg werkt beter op een rustig moment vooraf of achteraf.",
    },
    {
      question: "Je zegt rustig 'nee', maar je 4-jarige begint te gillen in de supermarkt. Andere ouders kijken. Wat is de SLECHTSTE reactie?",
      options: [
        { text: "Rustig bij je kind blijven en de blikken van anderen negeren", isCorrect: false },
        { text: "Toegeven aan het koekje om de situatie snel te beëindigen", isCorrect: true },
        { text: "Je kind optillen en samen naar buiten gaan tot het rustiger is", isCorrect: false },
      ],
      explanation: "Toegeven onder sociale druk leert je kind precies de verkeerde les: als je hard genoeg schreeuwt op de juiste plek, verdwijnt de grens. De andere twee opties zijn allebei verdedigbaar — ze houden de grens intact terwijl je je kind niet in de steek laat.",
    },
    {
      question: "Een vader zegt nooit 'nee' maar biedt altijd alternatieven: 'Geen koekje, maar je mag wel een appel.' Een andere vader zegt soms gewoon 'nee' zonder alternatief. Wie doet het beter?",
      options: [
        { text: "De eerste — een alternatief bieden is altijd beter dan een kaal 'nee'", isCorrect: false },
        { text: "De tweede — kinderen moeten leren omgaan met een 'nee' zonder dat er iets voor terugkomt", isCorrect: false },
        { text: "Beide zijn goed — soms past een alternatief, soms moet een 'nee' gewoon een 'nee' zijn", isCorrect: true },
      ],
      explanation: "Altijd een alternatief bieden kan kinderen leren dat elk 'nee' onderhandelbaar is. Maar een kaal 'nee' zonder enige verbinding kan koud voelen. De kunst is wisselen: soms een alternatief, soms gewoon een warme maar duidelijke grens. Flexibiliteit in aanpak is sterker dan één vaste formule.",
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
      text: "Deci en Ryans zelfdeterminatietheorie laat zien: mensen (ook kinderen) leren het best vanuit intrinsieke motivatie — niet vanuit angst voor straf. Extrinsieke controle (beloning/straf) ondermijnt het eigen verantwoordelijkheidsgevoel. Kinderen die leren via natuurlijke consequenties ontwikkelen beter inzicht in oorzaak en gevolg. Ze doen het goede omdat ze het snappen — niet omdat ze bang zijn.",
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
      question: "Finn (6) slaat zijn broertje. Papa zegt: 'Omdat je sloeg mag je vanavond geen tv kijken.' Dit klinkt als een consequentie, maar het is eigenlijk een straf. Waarom?",
      options: [
        { text: "Omdat er geen logisch verband is tussen slaan en tv-verbod — het is willekeurig opgelegd", isCorrect: true },
        { text: "Omdat de consequentie te mild is — geen tv is niet erg genoeg", isCorrect: false },
        { text: "Omdat het beter is om helemaal geen consequentie te geven en alleen te praten", isCorrect: false },
      ],
      explanation: "Het verschil tussen straf en consequentie zit in de logische link. 'Het spel stopt als je slaat' is logisch — slaan maakt spelen onmogelijk. 'Geen tv na slaan' is willekeurig — het kind begrijpt het verband niet en leert alleen: vermijd papa's straf.",
    },
    {
      question: "Je vraagt Finn (6) na het slaan: 'Wat kun je doen om het goed te maken?' Hij zegt plichtmatig 'sorry' en rent weg. Wat is hier het probleem?",
      options: [
        { text: "Finn is te jong voor herstel — wacht tot hij ouder is", isCorrect: false },
        { text: "De herstelvraag werd te snel gesteld — Finn was nog niet uit de emotionele piek", isCorrect: true },
        { text: "Finn manipuleert je — hij zegt sorry om ervan af te zijn", isCorrect: false },
      ],
      explanation: "Herstel werkt alleen als het denkbrein weer online is. Als een kind nog in de emotionele piek zit, wordt 'sorry' een automatisme om van de situatie af te zijn. Troost eerst het slachtoffer, laat Finn tot rust komen, en stel de herstelvraag pas als hij echt kan nadenken.",
    },
    {
      question: "Welke van deze uitspraken over natuurlijke consequenties is ONJUIST?",
      options: [
        { text: "Natuurlijke consequenties voelen eerlijker voor kinderen omdat ze het verband begrijpen", isCorrect: false },
        { text: "Natuurlijke consequenties werken altijd beter dan straf, in elke situatie", isCorrect: true },
        { text: "Natuurlijke consequenties leren oorzaak-gevolg in plaats van angst voor de ouder", isCorrect: false },
      ],
      explanation: "Natuurlijke consequenties zijn niet altijd toepasbaar. Bij gevaar (kind rent de straat op) is er geen tijd voor een natuurlijk gevolg — dan grijp je direct in. Bij sommige situaties is er simpelweg geen logische consequentie beschikbaar. Het is een krachtig instrument, maar geen wondermiddel voor elke situatie.",
    },
    {
      question: "Papa troost eerst het broertje dat geslagen werd, pas daarna gaat hij naar Finn (6). Waarom is die volgorde belangrijk?",
      options: [
        { text: "Het laat Finn zien dat slaan echte impact heeft op een echt persoon — zonder preek", isCorrect: true },
        { text: "Het is niet belangrijk — beide kinderen verdienen evenveel aandacht", isCorrect: false },
        { text: "Het straft Finn door hem te laten wachten en dat motiveert beter gedrag", isCorrect: false },
      ],
      explanation: "Door eerst het slachtoffer te troosten, ziet Finn de impact van zijn gedrag met eigen ogen. Dat bouwt empathie op een manier die geen woorden kunnen. Het is geen straf — het is informatie. Finn leert: mijn actie deed iemand pijn. Dat inzicht is krachtiger dan elke consequentie.",
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
      instructions: "1. Pak een papiertje. Maak drie kolommen: Rood, Geel, Groen.\n2. Schrijf in elke kolom minstens drie grenzen die in jouw gezin spelen.\n3. Kijk naar de groene kolom: kun je daar morgen iets laten gaan?\n4. Kijk naar de rode kolom: zijn die helder voor je kind? Kent je kind ze?\n5. Bespreek de lijst met je partner — zijn jullie het eens over wat rood, geel en groen is?\n6. Tip: pas de lijst aan per leeftijd. Een 14-jarige heeft andere groene grenzen dan een 5-jarige.",
      duration: 5,
      tips: [
        "Als je twijfelt of iets rood of geel is, kies dan rood. Je kunt later altijd nog versoepelen.",
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
      question: "Je hebt de grenzen-sorter gedaan en besloten dat kleding 'groen' is. Maar je 7-jarige wil in zijn ondergoed naar een verjaardagsfeestje. Wat nu?",
      options: [
        { text: "Groen is groen — consequent blijven en het laten gaan", isCorrect: false },
        { text: "De categorie hangt af van de context — naar de supermarkt in pyjama is groen, in ondergoed naar een feestje kan geel zijn", isCorrect: true },
        { text: "Dit bewijst dat de grenzen-sorter niet werkt in de praktijk", isCorrect: false },
      ],
      explanation: "De grenzen-sorter is geen rigide systeem maar een denkraamwerk. Dezelfde categorie (kleding) kan verschuiven afhankelijk van de context. In ondergoed naar een feestje raakt aan sociale situaties die voor je kind gênant kunnen worden. Flexibel denken binnen het raamwerk is sterker dan blind de regels volgen.",
    },
    {
      question: "Je vecht 's ochtends over tandenpoetsen, ontbijt, aankleden, schoenen en de schooltas. Je bent om 8:00 al uitgeput. Wat is het meest effectieve om te doen?",
      options: [
        { text: "Alle vijf de grenzen steviger handhaven — je kind moet leren dat ochtendregels niet onderhandelbaar zijn", isCorrect: false },
        { text: "Kies de twee die ertoe doen (tandenpoetsen + op tijd vertrekken) en laat de rest deze week gaan", isCorrect: true },
        { text: "Alles loslaten — ochtendstress is het niet waard en lost zichzelf op", isCorrect: false },
      ],
      explanation: "Beslissingsmoeheid treft jou en je kind allebei. Vijf gevechten voor 8:00 betekent dat geen enkele grens meer kracht heeft. Door te kiezen welke twee echt belangrijk zijn, win je die gevechten overtuigend. De rest kun je later weer oppakken als de ochtendrust terug is.",
    },
    {
      question: "Je partner en jij zijn het oneens: jij vindt schermtijd 'geel' (flexibel), je partner vindt het 'rood' (niet onderhandelbaar). Jullie kind speelt de ouders tegen elkaar uit. Wat is het GROOTSTE risico?",
      options: [
        { text: "Je kind leert dat grenzen afhangen van welke ouder je vraagt — dat ondermijnt beide ouders", isCorrect: true },
        { text: "Je kind raakt in de war over wat de echte regels zijn en wordt angstig", isCorrect: false },
        { text: "Je partner voelt zich niet gesteund en de relatie lijdt eronder", isCorrect: false },
      ],
      explanation: "Alle drie de opties klinken plausibel, maar het grootste risico is dat je kind leert 'shoppen' tussen ouders. Dat ondermijnt niet alleen de grens rond schermtijd, maar het vertrouwen in alle grenzen. Een kind dat weet dat het gaten kan vinden, zal die strategie overal inzetten.",
    },
    {
      question: "Je laat al twee weken veel groene gevechten gaan. Je partner zegt: 'Je laat alles maar toe.' Heeft je partner een punt?",
      options: [
        { text: "Nee — je partner begrijpt het concept niet, leg de grenzen-sorter nog eens uit", isCorrect: false },
        { text: "Ja — als het van buitenaf lijkt alsof je alles laat gaan, is je rode en gele handhaving misschien ook verslaapt", isCorrect: true },
        { text: "Ja — het bewust laten gaan van gevechten is eigenlijk gewoon permissief opvoeden", isCorrect: false },
      ],
      explanation: "De feedback van je partner verdient serieuze aandacht. Gevechten bewust loslaten werkt alleen als je rode grenzen tegelijk stevig staan. Als die ook zijn verslaapt, is het geen strategie meer maar vermijding. De grenzen-sorter werkt alleen als alle drie de kleuren actief zijn.",
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
      instructions: "1. Schrijf vanavond drie gezinsregels op een vel papier. Kort. Helder.\n   - Bijvoorbeeld: 'Snoep na het eten.' 'Schermen uit om 19:00.' 'We slaan niet.'\n2. Hang het op de koelkast of een zichtbare plek.\n3. Bespreek het morgenochtend met je kind.\n4. Vraag: 'Ken jij onze afspraken?' Laat ze de regels herhalen.\n5. Laat je kind de regels tekenen of versieren — dan voelen ze als iets van het hele gezin.\n6. Bij een tiener: maak de afspraken samen. 'Welke drie regels vinden wij belangrijk?' Gedeeld eigenaarschap werkt beter dan opgelegde regels.",
      duration: 5,
      tips: [
        "Herzie de regels elke paar weken. Wat werkt, wat niet? Pas aan waar nodig.",
        "Begin met maximaal drie regels. Te veel regels op papier werkt net zo min als te veel regels in je hoofd.",
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
      question: "Maandag zeg je nee tegen snoep. Dinsdag ben je doodmoe en geeft toe. Woensdag zeg je weer nee maar nu boos. Wat leert je kind van dit patroon?",
      options: [
        { text: "Dat papa soms flexibel is, wat gezond is voor de relatie", isCorrect: false },
        { text: "Dat de grens afhangt van papa's humeur — lang genoeg doorgaan loont soms, en boosheid is het signaal om te stoppen", isCorrect: true },
        { text: "Dat snoep soms mag en soms niet, en dat is een normale nuance", isCorrect: false },
      ],
      explanation: "Kinderen lezen patronen feilloos. Ze leren niet 'snoep mag soms' maar 'de grens is een loterij die afhangt van papa's energieniveau.' Het resultaat: meer testen (want soms werkt het) en leren om papa's stemming te lezen in plaats van de regel te respecteren.",
    },
    {
      question: "Je hebt het koelkast-contract ingevoerd. Je kind kent de regels. Maar je partner hanteert andere regels als jij er niet bent. Wat leert je kind?",
      options: [
        { text: "Dat regels contextafhankelijk zijn — bij papa gelden andere regels dan bij mama, en dat is prima", isCorrect: false },
        { text: "Dat het systeem een show is van papa maar geen echte gezinsafspraak", isCorrect: true },
        { text: "Niks — kinderen passen zich makkelijk aan aan verschillende regels per ouder", isCorrect: false },
      ],
      explanation: "Een systeem dat alleen bij één ouder geldt, is geen systeem maar een persoonlijke voorkeur. Kinderen ontdekken razendsnel welke ouder welke regels hanteert en spelen daar strategisch op in. Partner-alignment is geen luxe — het is het fundament waarop het hele systeem staat.",
    },
    {
      question: "Een vader gebruikt de zin 'Wat is de afspraak?' altijd als zijn kind iets vraagt. Het kind antwoordt elke keer correct maar vraagt toch steeds opnieuw. Waarom is dit juist een succes?",
      options: [
        { text: "Het is geen succes — als het kind steeds weer vraagt, werkt de aanpak niet", isCorrect: false },
        { text: "Omdat het testen de manier is waarop kinderen bevestigen dat regels stabiel zijn, en het systeem maakt het hanteren moeiteloos", isCorrect: true },
        { text: "Omdat het kind nog te jong is om de regel te onthouden", isCorrect: false },
      ],
      explanation: "Het kind kent de regel en kan hem benoemen — dat is bewijs dat het systeem werkt. Dat het toch blijft vragen is geen falen maar normale ontwikkeling: kinderen checken periodiek of grenzen er nog zijn. Het systeem maakt die check voor jou moeiteloos in plaats van uitputtend.",
    },
    {
      question: "Je bent om 18:30 zo moe dat je weet: als mijn kind nu iets vraagt dat niet mag, geef ik toe. Wat is de slimste preventieve actie?",
      options: [
        { text: "Jezelf opladen door vijf minuten rust te nemen voor je thuiskomt — preventieve regulatie", isCorrect: false },
        { text: "Een snack eten en je partner waarschuwen dat jij vanavond op een 3 zit", isCorrect: false },
        { text: "Alle drie werken — preventieve regulatie, communicatie met je partner, en eerlijk zijn over je staat zijn allemaal systeemoplossingen", isCorrect: true },
      ],
      explanation: "De vraag testte of je meerdere systeemoplossingen herkent. Consistentie lukt niet op wilskracht alleen. De combinatie van bijtanken (energie), communiceren (partner-alignment) en eerlijkheid (zelfkennis) is het systeem dat je draagt wanneer je tank leeg is.",
    },
  ],
},
];
