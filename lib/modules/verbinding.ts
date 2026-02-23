import type { LearningModule, Skill } from "../types";

export const VERBINDING_MODULES: LearningModule[] = [
{
  id: "vb_mod_1",
  skill: "Verbinding" as Skill,
  title: "Wat Is Jullie Saldo?",
  description: "Je probeert iets leuks te doen, maar je kind wil niks van je weten. Snap hoe de emotionele bankrekening werkt — en waarom je eerst moet storten voor je kunt opnemen.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 1,
  content: [
    {
      type: "text" as const,
      heading: "Hij draait zich om.",
      text: "Je komt thuis. Je wilt even stoeien met Daan (7). Maar hij kijkt niet op van zijn tablet. 'Ga weg papa.' Drie woorden. En ze raken je harder dan je wilt toegeven.\n\nDit gaat niet over de tablet. Dit gaat over jullie saldo.",
    },
    {
      type: "text" as const,
      heading: "De emotionele bankrekening",
      text: "Elke interactie met je kind is een transactie. Een knipoog bij het ontbijt: storting. Samen lachen om iets stoms: storting. Snauwen omdat je moe bent: opname. Weer je telefoon pakken als hij iets vertelt: opname.\n\nAls het saldo laag is, voelt je kind dat. Niet bewust. Niet in woorden. Maar in hun lijf. Ze trekken zich terug. Of ze gaan juist moeilijk doen — want negatieve aandacht is ook aandacht.\n\nDaan wijst je niet af. Daan beschermt zichzelf. Het saldo is te laag voor risico.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Psycholoog John Gottman ontdekte dat stabiele relaties een ratio hebben van 5:1. Vijf positieve interacties voor elke negatieve. Dit geldt voor partners, maar net zo hard voor kinderen. Eén opmerking als 'doe eens normaal' kost vijf stortingen om te herstellen. De rekening liegt niet.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De emotionele bankrekening",
      diagramData: [
        {
          emoji: "💰",
          label: "Stortingen",
          description: "Oogcontact, luisteren, samen lachen, fysieke nabijheid, interesse tonen in hun wereld. Kleine dingen, vaak.",
        },
        {
          emoji: "📉",
          label: "Opnames",
          description: "Snauwen, afwezig zijn, telefoon pakken, corrigeren zonder verbinding, beloftes breken.",
        },
        {
          emoji: "⚖️",
          label: "De 5:1 ratio",
          description: "Vijf positieve interacties voor elke negatieve. Dat is geen theorie — dat is de ondergrens voor vertrouwen.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Daan (7) komt uit school en wil vertellen over een ruzie op het schoolplein. Papa is moe, zit op de bank en scrollt door zijn telefoon.",
      wrongApproach: "AFWEZIGE AUTOMATISCHE PILOOT:\n\nDaan: 'Papa, Sem was gemeen vandaag!'\nPapa, zonder op te kijken: 'Oh. Wat deed hij dan?'\nDaan: 'Hij zei dat ik niet mee mocht doen...'\nPapa: 'Hmm. Morgen is het vast beter.'\nDaan loopt weg.\n\nPapa was er. Maar niet echt. Weer een opname. De rekening merkt het verschil.",
      rightApproach: "TIEN SECONDEN ECHT:\n\nDaan: 'Papa, Sem was gemeen vandaag!'\nPapa legt telefoon met scherm naar beneden. Draait zich naar Daan.\n'Vertel. Wat gebeurde er?'\nDaan vertelt. Papa luistert. Twee minuten.\n'Dat klinkt best klote. Wat deed je toen?'\nDaan glundert: 'Ik ging gewoon met Tijn spelen.'\n\nTien seconden investering. Tien minuten verbinding. Storting.",
      explanation: "Het verschil zit niet in de woorden maar in de telefoon. Eén beweging — scherm naar beneden, lichaam naar je kind — verandert een opname in een storting.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De 10-minuten storting. Elke dag 10 minuten onverdeelde aandacht. Geen telefoon. Geen agenda. Je kind kiest wat jullie doen. Dit is je minimale dagelijkse storting.\n\n2. Micro-stortingen. Een knipoog bij het ontbijt. Even door hun haar. 'Ik zag dat je je best deed.' Kost twee seconden. Telt als storting.\n\n3. De opname-check. Voordat je corrigeert, stel jezelf de vraag: is het saldo hoog genoeg? Nee? Eerst verbinden, dan sturen.\n\n4. Het saldo-gesprek. Vraag vanavond: 'Wat was het leukste van vandaag?' Luister. Echt.",
    },
    {
      type: "exercise" as const,
      title: "De 10-Minuten Storting",
      instructions: "1. Kies vandaag een moment voor 10 minuten onverdeelde aandacht.\n2. Leg je telefoon in een andere kamer — niet op stil, echt weg.\n3. Zeg tegen je kind: 'Ik heb tien minuten. Wat wil jij doen?'\n4. Jij volgt. Stel open vragen: 'Wat moet ik doen?' 'Hoe werkt dit?'\n5. Doe dit zeven dagen achter elkaar.\n6. Bij een tiener (13+): tien minuten naast ze op de bank zonder agenda. Samen muziek luisteren. Samen scrollen. Het gaat niet om de activiteit maar om de nabijheid.",
      duration: 10,
      tips: [
        "Het gaat niet om de activiteit — het gaat om je volledige aanwezigheid. Zelfs samen stilzitten telt.",
        "Als je kind in het begin wantrouwig reageert, is dat normaal. Het saldo moet eerst groeien.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Als je eerlijk kijkt naar de afgelopen week: hoe staat jullie saldo? Meer stortingen of meer opnames?",
        "Wanneer was het laatste moment dat je kind echt blij leek om je te zien? Wat deed je toen anders?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Elke interactie is een storting of opname. Je hebt vijf positieve momenten nodig voor elke negatieve. Start met 10 minuten onverdeelde aandacht per dag. Micro-stortingen kosten seconden maar bouwen vertrouwen. Eerst het saldo checken, dan pas corrigeren.",
    },
  ],
  keyTakeaways: [
    "Elke interactie met je kind is een storting of opname op de emotionele bankrekening — de 5:1 ratio is de ondergrens",
    "10 minuten onverdeelde aandacht per dag is je minimale dagelijkse storting",
    "Check het saldo voordat je corrigeert: eerst verbinden, dan sturen",
  ],
  research: "Gottman (1999). The Seven Principles for Making Marriage Work; Gottman & DeClaire (1997). Raising an Emotionally Intelligent Child",
  quizQuestions: [
    {
      question: "Welke uitspraak over Gottman's 5:1 ratio is ONJUIST?",
      options: [
        { text: "Je moet elke dag precies tellen of je op vijf positieve momenten per negatief zit", isCorrect: true },
        { text: "De ratio beschrijft een patroon over tijd — het gaat om de algemene balans, niet om dagelijks turven", isCorrect: false },
        { text: "Eén negatieve interactie weegt emotioneel zwaarder dan één positieve, vandaar de asymmetrie", isCorrect: false },
      ],
      explanation: "Gottman's ratio is een gemiddeld patroon in stabiele relaties, geen dagelijkse scorekaart. Als je gaat turven maak je van verbinding een prestatie. Het punt is dat negativiteit disproportioneel zwaar weegt, dus je hebt structureel veel meer positieve momenten nodig dan je denkt.",
    },
    {
      question: "Je kind doet iets gevaarlijks — klimt op het aanrecht. Het saldo op de emotionele bankrekening is laag. Wat doe je?",
      options: [
        { text: "Wachten tot je eerst een storting hebt gedaan, dan pas corrigeren", isCorrect: false },
        { text: "Direct corrigeren — veiligheid gaat altijd voor, ook bij een laag saldo", isCorrect: true },
        { text: "Afleiden met iets leuks zodat het kind vanzelf stopt, zonder opname", isCorrect: false },
      ],
      explanation: "Een laag saldo betekent niet dat je nooit mag corrigeren. Bij veiligheidsrisico's grijp je in, punt. De emotionele bankrekening is een leidraad voor alledaagse interacties, geen reden om grenzen uit te stellen als er gevaar dreigt.",
    },
    {
      question: "Je zoon laat je een tekening zien terwijl je kookt. Je zegt 'mooi!' zonder te kijken. Wat is hier aan de hand?",
      options: [
        { text: "Je kind deed een 'bid for connection' — een verzoek om verbinding — en je hebt het gemist", isCorrect: true },
        { text: "Het is prima, kinderen hoeven niet elke keer volle aandacht te krijgen", isCorrect: false },
        { text: "Door 'mooi' te zeggen heb je een micro-storting gedaan, ook zonder oogcontact", isCorrect: false },
      ],
      explanation: "Gottman noemt dit een 'bid for connection': een klein signaal waarmee je kind verbinding zoekt. 'Mooi' zonder te kijken is geen storting maar een gemiste bid. Je kind leert: het heeft geen zin om papa iets te laten zien. Twee seconden oogcontact had het verschil gemaakt.",
    },
    {
      question: "Wat is het risico van het concept 'emotionele bankrekening' als je het te letterlijk neemt?",
      options: [
        { text: "Je gaat stortingen 'strategisch' inzetten om opnames te compenseren, waardoor verbinding een transactie wordt", isCorrect: true },
        { text: "Je gaat te veel positieve dingen doen waardoor je kind verwend raakt", isCorrect: false },
        { text: "Je vergeet dat kinderen ook negatieve ervaringen nodig hebben om weerbaar te worden", isCorrect: false },
      ],
      explanation: "De metafoor helpt om de balans te begrijpen, maar echte verbinding is geen boekhouding. Als je knipogen en schouderklopjes gaat 'inzetten' om straks te mogen corrigeren, voelt je kind dat. Stortingen werken alleen als ze oprecht zijn, niet als valuta voor toekomstige opnames.",
    },
  ],
},
{
  id: "vb_mod_2",
  skill: "Verbinding" as Skill,
  title: "De Geheime Taal",
  description: "Je kind geeft zijn moeder een knuffel. Jou een high five. Ergens is er afstand gekomen. Ontdek hoe fysieke nabijheid, geheime rituelen en jullie eigen taal een band bouwen die niemand anders snapt.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 2,
  content: [
    {
      type: "text" as const,
      heading: "Hij rent niet naar jou.",
      text: "Bas (8) rent de gang in als je thuiskomt. Maar hij rent niet naar jou. Hij rent naar de hond. 'Hé Bas.' 'Hoi.' Dat is het. Eén woord. Hij verdwijnt weer naar boven.\n\nJullie hadden een handdruk. Een geheim gebaar. Hij noemde je 'Papasaurus.' Dat was twee jaar geleden. Nu is het 'hoi.' En het voelt alsof er een muur tussen jullie staat die je niet hebt zien bouwen.",
    },
    {
      type: "text" as const,
      heading: "De onzichtbare draad",
      text: "Elke vader-kindrelatie heeft een eigen taal nodig. Niet Nederlands. Niet woorden. Een taal van lijf, gebaren, geluiden en gedeelde geheimen.\n\nDenk aan de schouderklop die alleen jullie doen. Het gekke loopje naar de auto. De bijnaam die niemand anders mag gebruiken. Het stoeien op de bank op vrijdagavond. De vuistbump bij het afscheid.\n\nDeze dingen lijken klein. Maar ze zijn de draad tussen jullie. Elke geheime handdruk zegt: wij hebben iets dat niemand anders heeft. Elke stoeipartij zegt: bij papa is het veilig om wild te zijn. Elke bijnaam zegt: jij bent bijzonder voor mij op een manier die alleen van ons is.\n\nAls die draad verslapt — door drukte, door afstand, door het leven — voelt een kind dat. Ze trekken zich terug. Niet omdat ze je niet willen. Maar omdat de taal is vergeten. En iemand moet opnieuw beginnen met praten.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Jaak Panksepp, neurowetenschapper en grondlegger van affectieve neuroscience, ontdekte dat fysiek spel — stoeien, ravotten, rondrennen — een apart PLAY-circuit activeert in het brein. Dit circuit is essentieel voor sociale ontwikkeling en emotieregulatie. Kinderen die regelmatig fysiek spelen met hun vader scoren hoger op zelfbeheersing en sociale vaardigheden.\n\nRuth Feldman toonde aan dat fysieke synchronie tussen ouder en kind — samen bewegen, elkaars ritme volgen, aanraken — de afgifte van oxytocine stimuleert bij beiden. Oxytocine is het bindingshormoon: het verlaagt stress, verhoogt vertrouwen en versterkt gehechtheid. Belangrijk: dit werkt via huid-op-huidcontact en gedeelde beweging, niet via woorden.\n\nKort gezegd: stoeien is geen chaos. Het is neurochemie. Elke schouderklop, elke kietelsessie, elke geheime handdruk bouwt letterlijk aan jullie band op biologisch niveau.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De drie lagen van jullie geheime taal",
      diagramData: [
        {
          emoji: "🤝",
          label: "Het lichaam",
          description: "Stoeien, kietelen, schouderklop, high fives, dansen in de keuken. Fysiek contact maakt oxytocine aan — het hormoon dat zegt: wij horen bij elkaar.",
        },
        {
          emoji: "🤫",
          label: "Het geheim",
          description: "Geheime handdrukken, bijnamen, inside jokes, een eigen woord voor iets. Gedeelde geheimen creëren een exclusieve band: dit is alleen van ons.",
        },
        {
          emoji: "🔁",
          label: "Het ritueel",
          description: "De vuistbump bij het hek. Het stoeikwartiertje na het eten. De stomme dans bij het tandenpoetsen. Herhaling maakt het heilig.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Bas (8) is de laatste maanden steeds stiller geworden. Papa en hij praten nauwelijks nog. Er is geen ruzie — er is gewoon niks. Papa besluit het anders aan te pakken.",
      wrongApproach: "MET WOORDEN FORCEREN:\n\nPapa gaat naast Bas zitten. 'Bas, we moeten praten.'\nBas kijkt naar zijn scherm. 'Waarover?'\n'Ik heb het gevoel dat we niet meer zo close zijn.'\nBas haalt zijn schouders op. 'Hoezo?'\n'Ik wil gewoon weer meer doen samen. Meer praten.'\n'Oké.' Bas kijkt weer naar zijn scherm.\n\nPapa probeerde het via taal. Maar de verbinding was al te lang weg voor een gesprek. Praten over verbinding is niet hetzelfde als verbinding maken.",
      rightApproach: "MET HET LICHAAM BEGINNEN:\n\nPapa loopt langs de bank. Geeft Bas terloops een duw tegen zijn schouder. Bas kijkt op. Papa loopt door.\nDe volgende avond: weer een schouderduw. 'Schuif eens op, knakker.'\nBas grijnst. Duwt terug.\nDag drie: Papa gaat naast hem zitten. 'Wie het eerst de trap op is.' Ze rennen. Bas wint.\nDag vijf: Bas duikt op papa's rug als hij binnenkomt. 'Paardje!' Papa draaft de gang door.\nDag zeven: Bas rent de gang in als papa thuiskomt. Niet naar de hond.\n\nGeen gesprek nodig. Het lichaam ging voor.",
      explanation: "Bas was niet boos. Hij was de taal vergeten. Papa begon niet met praten maar met het lichaam: een duw, een race, een stoeipartij. Fysiek contact activeert het PLAY-circuit en maakt oxytocine aan. Die neurochemie herstelt verbinding sneller dan welk gesprek ook. De draad was er nog — hij moest alleen weer aangeraakt worden.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De geheime handdruk. Bedenk samen een handdruk die alleen jullie kennen. Drie stappen, een knal, een geluidje erbij. Gebruik hem bij afscheid, bij het hek, bij het slapen. Het is jullie code voor: wij zijn wij.\n\n2. Het stoei-kwartiertje. Elke dag vijf tot vijftien minuten fysiek spel. Stoeien op de bank. Kussengevecht. Paardje rijden. Kietelen tot de tranen komen. Regel één: het kind bepaalt wanneer het stopt. Altijd.\n\n3. De bijnaam-taal. Geef je kind een naam die alleen jij gebruikt. Laat je kind jou een naam geven. Bonus: bedenk samen een woord voor iets dat alleen jullie begrijpen. 'Pannenkoek' betekent: ik had een rotdag.\n\n4. De schouder-check. Loop langs je kind en raak even hun schouder aan. Elke keer als je langsloopt. Geen woorden nodig. Gewoon: ik ben er. Ik zie je. Na een week merk je dat zij het bij jou gaan doen.",
    },
    {
      type: "exercise" as const,
      title: "Bouw Jullie Geheime Handdruk",
      instructions: "1. Ga vanavond naar je kind.\n2. Zeg: 'Wij hebben iets nodig. Een geheime handdruk. Die alleen wij kennen.'\n3. Bedenk samen drie stappen: een vuistbump, een vingerknip, een klap, een geluid.\n4. Laat je kind het leiden — hoe gekker, hoe beter.\n5. Oefen hem vijf keer achter elkaar.\n6. Gebruik hem morgen bij het afscheid op school of bij het slapengaan.\n7. Doe dit een week lang bij elk afscheidsmoment.\n8. Bij een tiener: een geheime handdruk is misschien 'te kinderachtig.' Vervang het door een vuistbump met een eigen twist, of een code-woord via WhatsApp dat alleen jullie begrijpen.",
      duration: 5,
      tips: [
        "Laat je kind het leiden. Hoe gekker de handdruk, hoe meer het van hen voelt. Jouw taak is meegaan en onthouden.",
        "Voeg elke week een nieuw element toe. De handdruk groeit mee met jullie band. Over een jaar is het een heel ritueel.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Wanneer heb je je kind voor het laatst écht aangeraakt — niet functioneel (jas dicht, haar kammen) maar puur voor de verbinding?",
        "Had jij met je eigen vader iets dat alleen van jullie was? Een grap, een gebaar, een bijnaam? Wat deed dat met jullie band?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Verbinding met je kind bouw je niet alleen met woorden. Fysiek contact — stoeien, kietelen, schouderklop — maakt oxytocine aan en activeert het PLAY-circuit in het brein. Geheime handdrukken, bijnamen en inside jokes creëren een exclusieve band. Samen vormen ze jullie geheime taal: een verbinding die niemand anders snapt. Begin met één aanraking, één gebaar, één geheim. De rest volgt vanzelf.",
    },
  ],
  keyTakeaways: [
    "Fysiek contact — stoeien, kietelen, schouderklop — maakt oxytocine aan en bouwt verbinding op biologisch niveau",
    "Geheime handdrukken, bijnamen en inside jokes creëren een exclusieve band die zegt: dit is alleen van ons",
    "Als de verbinding weg is, begin niet met praten maar met het lichaam — fysiek contact herstelt de draad sneller dan woorden",
  ],
  research: "Panksepp (1998). Affective Neuroscience: The Foundations of Human and Animal Emotions; Feldman (2012). Oxytocin and social affiliation in humans, Hormones and Behavior; Feldman et al. (2010). Touch, synchrony, and oxytocin in parent-infant interactions",
  quizQuestions: [
    {
      question: "Tijdens het stoeien begint je kind (6) steeds wilder te worden en te gillen. Wat is het juiste moment om te stoppen?",
      options: [
        { text: "Zodra het kind zegt dat het wil stoppen — het kind bepaalt altijd de grens", isCorrect: false },
        { text: "Zodra jij merkt dat de opwinding omslaat in verlies van controle — ook als je kind nog 'meer!' roept", isCorrect: true },
        { text: "Niet stoppen — kinderen moeten leren om zelf hun grenzen te reguleren", isCorrect: false },
      ],
      explanation: "Jonge kinderen kunnen soms niet zelf de rem vinden als het PLAY-circuit op volle toeren draait. Een kind dat overprikkel raakt roept nog 'meer!' maar is al voorbij de grens. Als vader ben jij de co-regulator: jij voelt wanneer het opwinding wordt die niet meer leuk is, ook als je kind dat zelf nog niet kan signaleren.",
    },
    {
      question: "Welke uitspraak over fysiek spel en roughhousing is WAAR?",
      options: [
        { text: "Stoeien leert kinderen vooral om agressie te uiten op een veilige manier", isCorrect: false },
        { text: "Het PLAY-circuit dat Panksepp ontdekte is een apart neuraal systeem — niet hetzelfde als het agressie-circuit", isCorrect: true },
        { text: "Fysiek spel is vooral belangrijk voor jongens; meisjes profiteren meer van rustig samen spel", isCorrect: false },
      ],
      explanation: "Panksepps cruciale ontdekking was dat PLAY en agressie twee volledig gescheiden circuits zijn in het brein. Stoeien is geen 'veilige agressie' — het is een ander systeem dat sociale vaardigheden en emotieregulatie traint. Dit geldt voor alle kinderen, ongeacht geslacht.",
    },
    {
      question: "Bas (8) is al weken afstandelijk. Papa besluit elke dag een schouderduw te geven en terloops fysiek contact te maken. Na een week rent Bas weer naar hem toe. Waarom werkte dit beter dan een gesprek?",
      options: [
        { text: "Kinderen van die leeftijd kunnen hun gevoelens nog niet verwoorden", isCorrect: false },
        { text: "Fysiek contact omzeilt het verbale brein en activeert direct het bindingssysteem via oxytocine", isCorrect: true },
        { text: "Bas vond praten gewoon vervelend en had een actievere vader nodig", isCorrect: false },
      ],
      explanation: "Het gaat niet om leeftijd of voorkeur. Ruth Feldman toonde aan dat fysieke synchronie — samen bewegen, aanraken, elkaars ritme volgen — direct oxytocine vrijmaakt bij beiden. Dit bindingshormoon verlaagt stress en herstelt vertrouwen op een niveau dat taal niet kan bereiken. Het lichaam was sneller dan het gesprek.",
    },
    {
      question: "Je hebt een geheime handdruk met je kind, maar je vergeet hem steeds en doet hem slordig. Wat is het effect?",
      options: [
        { text: "Het maakt niet uit — het gaat om het gebaar, niet de perfectie", isCorrect: false },
        { text: "Je kind ervaart het als desinteresse: iets dat 'van jullie' is, is voor jou niet belangrijk genoeg om te onthouden", isCorrect: true },
        { text: "Het is juist leuk — kinderen vinden het grappig als papa het fout doet", isCorrect: false },
      ],
      explanation: "De kracht van een geheim ritueel zit in de exclusiviteit: dit is alleen van ons. Als jij het steeds vergeet, zegt dat tegen je kind: dit is voor mij niet bijzonder genoeg. Het hoeft geen ingewikkelde choreografie te zijn, maar wat je afspreekt moet je ook waarmaken. Betrouwbaarheid in het kleine bouwt vertrouwen in het grote.",
    },
  ],
},
{
  id: "vb_mod_3",
  skill: "Verbinding" as Skill,
  title: "Vechten Dat Verbindt",
  description: "Jullie zijn het oneens. Stemmen gaan omhoog. Je denkt: dit gaat fout. Maar wat als dit precies het moment is waarop jullie band sterker wordt? Ontdek de verrassende kracht van gezond conflict.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 3,
  content: [
    {
      type: "text" as const,
      heading: "De lucht trilt.",
      text: "Zaterdagmiddag. Jesse (14) wil met vrienden naar de stad. Jij had plannen. Samen fietsen, zoals jullie altijd deden. 'Ik ga niet mee papa.' Jij voelt het: teleurstelling, irritatie, iets van afwijzing. 'We hadden dit afgesproken.' 'Nee, jíj had dit afgesproken.' De lucht trilt.\n\nDit voelt als een probleem. Maar dit is geen probleem. Dit is verbinding in de maak.",
    },
    {
      type: "text" as const,
      heading: "De kracht van gezonde wrijving",
      text: "We denken dat verbinding betekent: het eens zijn. Samen lachen. Harmonie. En ja, dat telt. Maar de diepste verbinding ontstaat juist als het schuurt.\n\nWant wat zegt Jesse eigenlijk? 'Ik heb een eigen mening. Ik durf die te uiten. Bij jou. Omdat ik me veilig genoeg voel om het oneens te zijn met mijn vader.'\n\nDat is geen ongehoorzaamheid. Dat is vertrouwen.\n\nHet verschil zit niet in óf jullie botsen. Het verschil zit in hóe. Destructief conflict vernietigt: schreeuwen, kleineren, dreigen, muren optrekken. Constructief conflict bouwt: luisteren, je punt maken, de ander serieus nemen, samen zoeken naar wat werkt.\n\nEen kind dat leert om gezond te botsen met zijn vader, leert iets dat de meeste volwassenen niet kunnen: het oneens zijn zonder de relatie te verliezen.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "John Gottman ontdekte dat het niet de afwezigheid van conflict is die relaties sterk maakt, maar hoe je met conflict omgaat. Zijn onderzoek naar 'repair attempts' — pogingen om tijdens een meningsverschil de verbinding te herstellen — laat zien dat koppels en ouders die midden in een ruzie kunnen de-escaleren, de sterkste banden hebben.\n\nKathy Hirsh-Pasek beschrijft het belang van bidirectionele communicatie: kinderen die leren dat hun stem telt — ook als die stem 'nee' zegt — ontwikkelen sterkere sociale vaardigheden en meer zelfvertrouwen. Conflictonderzoek toont aan dat gezinnen die meningsverschillen openlijk bespreken, kinderen opvoeden die beter zijn in onderhandelen, empathie en probleemoplossing.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Twee soorten conflict",
      diagramData: [
        {
          emoji: "💥",
          label: "Destructief conflict",
          description: "Winnen ten koste van de ander. Schreeuwen, kleineren, straffen, muren. Kind leert: conflict is gevaarlijk. Mond houden is veiliger.",
        },
        {
          emoji: "⚡",
          label: "Constructief conflict",
          description: "Verschil serieus nemen. Luisteren, uitleggen, onderhandelen. Kind leert: ik mag het oneens zijn. Mijn stem telt. We komen er samen uit.",
        },
        {
          emoji: "🌱",
          label: "Wat er groeit",
          description: "Assertiviteit, respect, onderhandelingsvaardigheden. Een kind dat veilig kan botsen met papa, kan later veilig botsen met de wereld.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Jesse (14) wil zaterdagavond tot elf uur bij een vriend blijven. Papa vindt tien uur laat genoeg. Ze zijn het grondig oneens.",
      wrongApproach: "DE MACHTSSTRIJD:\n\nJesse: 'Iedereen mag tot elf uur!'\nPapa: 'Mij boeit niet wat iedereen mag. Tien uur.'\nJesse: 'Dat is belachelijk. Ik ben geen kleuter meer.'\nPapa, harder: 'Ik bepaal de regels hier. Einde discussie.'\nJesse loopt stampend naar boven. Deur dicht.\n\nPapa heeft 'gewonnen.' Maar Jesse heeft geleerd: je mening geven heeft geen zin. Papa luistert toch niet.",
      rightApproach: "HET ECHTE GESPREK:\n\nJesse: 'Iedereen mag tot elf uur!'\nPapa: 'Oké. Vertel me waarom elf uur belangrijk is voor jou.'\nJesse: 'We willen een film kijken en die begint pas om acht uur.'\nPapa: 'Snap ik. Mijn punt: het is donker, ik wil dat je veilig thuiskomt. Hoe lossen we dat op?'\nJesse denkt. 'Je kunt me ophalen om kwart over elf?'\nPapa: 'Deal. Als je om elf uur een berichtje stuurt.'\n\nBeide gehoord. Beide iets ingeleverd. Verbinding versterkt.",
      explanation: "In het eerste scenario wint papa de strijd maar verliest de verbinding. In het tweede botsen ze — echt botsen — maar behandelen ze elkaar als gelijkwaardige gesprekspartners. Jesse leert: ik mag onderhandelen. Mijn vader neemt me serieus. Dat bouwt meer respect dan 'einde discussie' ooit kan.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De onderhandelvraag. Zeg nooit direct 'nee.' Zeg: 'Vertel me waarom dit belangrijk voor je is.' Je hoeft het er niet mee eens te zijn. Maar je kind verdient het om gehoord te worden voordat er een besluit valt.\n\n2. Het eerlijke eigen punt. Deel jouw reden. Niet 'omdat ik het zeg,' maar de echte reden. 'Ik maak me zorgen.' 'Ik vind het belangrijk dat we dit samen doen.' Kinderen respecteren eerlijkheid, zelfs als ze het er niet mee eens zijn.\n\n3. De repair bid. Merk je dat het escaleert? Gottman noemt dit het moment van de repair attempt. 'Wacht even. We gaan allebei harder praten. Ik wil dit goed doen. Opnieuw?' Dat is geen zwakte. Dat is leiderschap.\n\n4. De gedeelde oplossing. Sluit af met: 'Wat werkt voor ons allebei?' Niet jouw oplossing. Niet hun oplossing. Iets van jullie samen. Daarin zit de verbinding.",
    },
    {
      type: "exercise" as const,
      title: "Het Meningsverschil-Experiment",
      instructions: "Bij het volgende meningsverschil met je kind — hoe klein ook — probeer dit: pauzeer voordat je reageert. Stel eerst de vraag: 'Leg eens uit waarom dit voor jou belangrijk is.' Luister. Echt. Deel dan jouw reden. Zoek samen naar iets dat voor jullie allebei werkt. Let achteraf op: hoe voelde het gesprek? Hoe reageerde je kind?",
      duration: 10,
      tips: [
        "Begin met kleine meningsverschillen — wat eten we, welk programma kijken we. Oefen de vaardigheid als de inzet laag is.",
        "Het voelt langzamer dan 'omdat ik het zeg.' Dat klopt. Maar het bouwt iets wat snelle antwoorden niet kunnen: wederzijds respect.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Hoe ging conflict in jouw gezin toen je opgroeide? Mocht je het oneens zijn met je vader? Wat leerde je daarvan?",
        "Wanneer was de laatste keer dat je kind écht tegen je inging? Hoe reageerde je — en hoe had je willen reageren?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Conflict is geen bedreiging voor verbinding — het is een kans. Destructief conflict vernietigt, maar constructief conflict bouwt assertiviteit, respect en onderhandelingsvaardigheden. Luister voordat je oordeelt. Deel je echte reden. De-escaleer als het te heet wordt. Zoek samen naar een oplossing. Een kind dat veilig met jou kan botsen, kan later de wereld aan.",
    },
  ],
  keyTakeaways: [
    "Gezond conflict versterkt de band — een kind dat veilig met jou kan botsen, leert assertiviteit en respect",
    "Het verschil tussen destructief en constructief conflict zit in luisteren, eerlijkheid en samen zoeken naar oplossingen",
    "Repair attempts — midden in een meningsverschil de-escaleren — zijn het kenmerk van de sterkste relaties",
  ],
  research: "Gottman (1999). The Seven Principles for Making Marriage Work — repair attempts; Hirsh-Pasek & Golinkoff (2003). Einstein Never Used Flashcards — bidirectional communication; Laursen & Collins (1994). Interpersonal Conflict During Adolescence",
  quizQuestions: [
    {
      question: "Waarom KAN conflict de vader-kindrelatie versterken?",
      options: [
        { text: "Omdat het kind leert dat het veilig genoeg is om het oneens te zijn — conflict is een bewijs van vertrouwen", isCorrect: true },
        { text: "Omdat kinderen door conflicten leren dat ze niet altijd hun zin krijgen", isCorrect: false },
        { text: "Omdat het de lucht klaart en opgekropte frustraties worden losgelaten", isCorrect: false },
      ],
      explanation: "Het verrassende inzicht is dat een kind dat durft te botsen met zijn vader, daarmee zegt: ik voel me veilig genoeg om eerlijk te zijn. Dat is fundamenteel anders dan 'leren dat je niet altijd je zin krijgt' of 'stoom afblazen'. Het gaat om de impliciete boodschap: onze band kan dit hebben.",
    },
    {
      question: "Jesse (14) en papa hebben net stevig gebotst over uitgaanstijden. Ze zijn er samen uitgekomen. Wat is nu het SLECHTSTE dat papa kan doen?",
      options: [
        { text: "Achteraf zeggen: 'Zie je, als je normaal praat komen we er altijd uit'", isCorrect: true },
        { text: "Er niet meer op terugkomen en gewoon verdergaan met de avond", isCorrect: false },
        { text: "De volgende dag checken of de afspraak nog goed voelt voor Jesse", isCorrect: false },
      ],
      explanation: "Door achteraf te moraliseren ('als je normaal praat') claimt papa de overwinning en maakt hij van een gedeelde oplossing alsnog een les. Dat ondermijnt precies het gevoel van gelijkwaardigheid dat het conflict zo waardevol maakte. Gewoon verdergaan of later inchecken zijn allebei prima — de les zit al in de ervaring.",
    },
    {
      question: "Gottman's 'repair attempt' is cruciaal bij conflict. Welk voorbeeld is GEEN goede repair attempt?",
      options: [
        { text: "'Laten we even pauzeren, dit gaat te snel'", isCorrect: false },
        { text: "'Oké, je hebt gelijk, laat maar' — zodat het conflict stopt", isCorrect: true },
        { text: "'Wacht, ik merk dat ik harder ga praten. Dat wil ik niet. Opnieuw?'", isCorrect: false },
      ],
      explanation: "Toegeven om het conflict te stoppen is geen repair — het is capitulatie. Een echte repair attempt de-escaleert het proces zonder de inhoud te laten vallen. 'Je hebt gelijk, laat maar' leert je kind dat conflict ongemakkelijk is en dat je het zo snel mogelijk moet beëindigen, in plaats van dat je het samen kunt doorwerken.",
    },
    {
      question: "Je dochter (12) is boos en schreeuwt: 'Jij snapt er niks van!' Jij voelt je aangevallen. Wat is hier eigenlijk aan de hand?",
      options: [
        { text: "Ze test je grenzen — je moet laten zien dat schreeuwen niet acceptabel is", isCorrect: false },
        { text: "Ze is emotioneel ontregeld en doet een onhandige 'bid for connection' — ze wil dat je haar begrijpt", isCorrect: true },
        { text: "Ze heeft gelijk en je moet je eigen perspectief loslaten", isCorrect: false },
      ],
      explanation: "Achter 'jij snapt er niks van' zit bijna altijd een wens: ik wil dat je me begrijpt. Het is een bid for connection, verpakt in frustratie. Dat betekent niet dat schreeuwen prima is, maar als je alleen op de vorm reageert mis je de inhoud. Eerst de emotie erkennen ('je voelt je niet begrepen'), dan pas de vorm bespreken.",
    },
  ],
},
{
  id: "vb_mod_4",
  skill: "Verbinding" as Skill,
  title: "Spelen Is Niet Kinderachtig",
  description: "Je zit op de grond. Je kind speelt. Jij verveelt je. Je hand gaat naar je broekzak. Stop. Twintig minuten spel doet meer dan uren opvoeden. Leer waarom.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 4,
  content: [
    {
      type: "text" as const,
      heading: "Je hand gaat naar je broekzak.",
      text: "Mila (5) speelt met haar poppen. Jij zit erbij op de grond. Al tien minuten. De pop moet weer naar de dokter. De dokter zegt weer dezelfde dingen. Je hand glipt naar je telefoon. Even snel checken.\n\nMila kijkt op. Ziet het. Speelt verder. Alleen.",
    },
    {
      type: "text" as const,
      heading: "De taal die je niet spreekt",
      text: "Volwassenen verbinden via praten. Kinderen verbinden via spelen. Spel is hun moedertaal. Als je met je kind speelt — echt speelt, zonder agenda — zeg je in hun taal: 'Jij bent belangrijk. Jouw wereld is interessant. Ik wil er zijn.'\n\nMaar hier is het ding: het moet kindgestuurd zijn. Dat betekent dat je kind bepaalt wat er gebeurt. Jij volgt. Geen regels verbeteren. Geen educatieve draai geven. Geen 'zal ik laten zien hoe het moet?'\n\nTwintig minuten kindgestuurd spel per dag doet meer voor jullie relatie dan uren gestructureerde activiteiten. Niet omdat het spel zo bijzonder is. Maar omdat je kind ervaart: mijn vader volgt mij. Ik mag leiden. Ik ben de moeite waard.\n\nDat gevoel bouw je niet met woorden. Dat bouw je op de grond, met blokken.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Garry Landreth's speltherapie-onderzoek toont aan dat kindgestuurd spel de ouder-kindrelatie significant versterkt. Twintig minuten per dag verlaagt gedragsproblemen en verhoogt zelfvertrouwen. De sleutel: het kind leidt, de ouder volgt. Geen correcties, geen sturing. Pure aandacht in de taal van het kind.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Twee soorten spel",
      diagramData: [
        {
          emoji: "📋",
          label: "Vader-gestuurd",
          description: "'Nee, zo moet het niet. Kijk, ik laat het zien.' Kind leert: ik doe het fout. Papa's manier is beter.",
        },
        {
          emoji: "🎨",
          label: "Kind-gestuurd",
          description: "'Wat moet ik doen? Ooh, zo. En dan?' Kind leert: mijn ideeën tellen. Papa vindt mij interessant.",
        },
        {
          emoji: "⏱️",
          label: "De 20 minuten",
          description: "Twintig minuten kindgestuurd spel per dag. Geen telefoon. Geen agenda. Meer impact dan je denkt.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Mila (5) wil 'dierenarts' spelen. Papa moet de zieke kat zijn. Het is de vierde keer deze week.",
      wrongApproach: "HALF ERBIJ:\n\nPapa zit op de grond. Mila geeft hem een knuffelkat.\n'Miauw,' zegt papa. Zijn ogen gaan naar zijn telefoon op de bank.\nMila: 'Papa, de kat moet een prik!'\n'Hmhm.' Papa pakt zijn telefoon. 'Even snel iets checken.'\nMila: 'Papa!'\n'Ja, sorry. De prik. Ja.'\n\nMila speelt verder. Maar het vonkje is weg. Papa was er niet. Weer niet.",
      rightApproach: "TWINTIG MINUTEN ECHT:\n\nPapa legt zijn telefoon in de keuken. Gaat op de grond zitten.\n'Dokter Mila, wat is er met mijn kat?'\nMila, serieus: 'Hij is heel ziek. Hij heeft koorts.'\n'Oh nee! Wat moet ik doen?'\nMila straalt. Zij weet het. Zij leidt.\n\nTwintig minuten later. Papa's rug doet pijn. Maar Mila grijpt zijn hand bij het eten. 'Papa, je bent de beste kat.'",
      explanation: "Het verschil is niet de activiteit — het is de aanwezigheid. Dezelfde twintig minuten, maar in het ene scenario is papa's hoofd ergens anders. In het andere is hij er volledig. Mila voelt dat verschil in elke vezel.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Het 20-minuten experiment. Eén week lang, elke dag twintig minuten. Telefoon in een andere kamer. Je kind kiest de activiteit. Jij volgt. Na zeven dagen evalueer je wat er veranderd is.\n\n2. Volg het kind. Stel vragen in plaats van antwoorden te geven: 'Wat moet ik doen?' 'Hoe werkt dat in jouw wereld?' 'Wat gebeurt er dan?'\n\n3. Beschrijf wat je ziet. In plaats van beoordelen ('mooi!') beschrijf: 'Je hebt de blokken op kleur gesorteerd.' 'Die tekening heeft heel veel details.' Je kind voelt zich gezien, niet geëvalueerd.\n\n4. Telefoon-vrije zone. Speltijd = geen telefoon. Niet op stil. Niet omgedraaid. In een andere kamer. Je brein kan niet half aanwezig zijn.",
    },
    {
      type: "exercise" as const,
      title: "Het 20-Minuten Experiment",
      instructions: "1. Leg je telefoon in een andere kamer. Niet op stil — echt weg.\n2. Zeg tegen je kind: 'Ik heb twintig minuten. Wat wil jij doen?'\n3. Volg hun leiding. Geen sturing. Geen verbetering.\n4. Stel vragen: 'Wat moet ik doen?' 'Wat gebeurt er dan?'\n5. Beschrijf wat je ziet in plaats van te beoordelen: 'Je hebt de blokken op kleur gesorteerd' in plaats van 'mooi!'\n6. Timer mag — als die maar niet op je telefoon staat.\n7. Bij een oudere kind (10+): spelen verandert van vorm. Samen een game spelen, samen koken, samen klussen. De kern blijft: zij kiezen, jij volgt.",
      duration: 20,
      tips: [
        "Het voelt misschien saai. Dat is normaal — je brein is gewend aan constante stimulatie. Houd vol. Na tien minuten verandert er iets.",
        "Als je kind verrast reageert ('Echt? Wil je echt met mij spelen?'), dan weet je dat dit nodig was.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Wanneer heb je voor het laatst echt gespeeld met je kind — zonder telefoon, zonder agenda, zonder tijdsdruk?",
        "Wat zou je kind zeggen als iemand vroeg: 'Speelt je papa vaak met je?'",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Spelen is de moedertaal van kinderen. Twintig minuten kindgestuurd spel per dag versterkt jullie band meer dan uren gestructureerde activiteiten. Telefoon weg. Kind leidt. Jij volgt en beschrijft wat je ziet. Dat is geen tijdverspilling — dat is de investering.",
    },
  ],
  keyTakeaways: [
    "Spel is de moedertaal van kinderen — twintig minuten kindgestuurd spel doet meer dan uren gestructureerde activiteit",
    "De sleutel is: het kind leidt, jij volgt — geen correcties, geen sturing, pure aandacht",
    "Telefoon in een andere kamer, niet op stil — je brein kan niet half aanwezig zijn",
  ],
  research: "Landreth (2012). Play Therapy: The Art of the Relationship; Bratton et al. (2005). Meta-analysis of play therapy outcomes; Cohen (2001). Playful Parenting",
  quizQuestions: [
    {
      question: "Waarom is kindgestuurd spel effectiever dan een gestructureerde activiteit die papa organiseert?",
      options: [
        { text: "Omdat kinderen meer leren als ze zelf ontdekken zonder sturing van een volwassene", isCorrect: false },
        { text: "Omdat het kind ervaart 'papa vindt mijn wereld interessant genoeg om te volgen' — dat bouwt eigenwaarde", isCorrect: true },
        { text: "Omdat gestructureerde activiteiten altijd druk en stress opleveren voor het kind", isCorrect: false },
      ],
      explanation: "Het gaat niet om leren en ook niet om stress vermijden. De kern van kindgestuurd spel is de boodschap die het kind ontvangt: mijn ideeën zijn de moeite waard, papa volgt mij. Dat gevoel van 'ik mag leiden en iemand kiest ervoor om mee te gaan' bouwt aan eigenwaarde op een manier die geen gestructureerde activiteit kan evenaren.",
    },
    {
      question: "Je speelt al twintig minuten met je dochter (5). Je verveelt je enorm. Welke reactie is het meest eerlijk EN effectief?",
      options: [
        { text: "Doorgaan en je verveling verbergen — kinderen mogen niet merken dat je het saai vindt", isCorrect: false },
        { text: "Stoppen en iets voorstellen dat jullie allebei leuk vinden — geforceerd spel is niet oprecht", isCorrect: false },
        { text: "Doorgaan, maar je verveling accepteren als normaal — je brein is gewend aan constante stimulatie, niet aan kindertempo", isCorrect: true },
      ],
      explanation: "Verveling tijdens kindgestuurd spel is normaal en zegt meer over jouw brein dan over het spel. Je verveelt je omdat je gewend bent aan volwassenentempo en constante prikkels. Maar na tien minuten verschuift er iets: je gaat het ritme van je kind volgen. Dat is precies de oefening. Het verbergen hoeft niet, stoppen ondermijnt het doel.",
    },
    {
      question: "Wat is het RISICO van 'beschrijven wat je ziet' (bijv. 'je hebt de blokken op kleur gesorteerd') in plaats van beoordelen ('mooi!')?",
      options: [
        { text: "Er is geen risico — beschrijvend commentaar is altijd beter dan beoordelend commentaar", isCorrect: false },
        { text: "Te veel commentaar, ook beschrijvend, kan het kind afleiden van hun eigen innerlijke beleving van het spel", isCorrect: true },
        { text: "Kinderen voelen zich onzeker als je niet zegt of iets goed of fout is", isCorrect: false },
      ],
      explanation: "Beschrijven is beter dan beoordelen, maar er is een grens. Als je constant hardop beschrijft wat je kind doet, kan dat hun eigen innerlijke monoloog en flow verstoren. Soms is de krachtigste aanwezigheid stilte: er zijn, kijken, beschikbaar zijn zonder woorden. De kunst is weten wanneer je beschrijft en wanneer je gewoon aanwezig bent.",
    },
    {
      question: "Je zoon (8) wil dat je meespeelt met zijn videogame in plaats van met Lego. Is dat 'echt' kindgestuurd spel?",
      options: [
        { text: "Nee — schermtijd is geen kwaliteitstijd, kindgestuurd spel moet offline zijn", isCorrect: false },
        { text: "Alleen als jij de controller hebt en hij je vertelt wat je moet doen", isCorrect: false },
        { text: "Ja — als hij kiest, jij volgt en je telefoon weg is, doet het medium er niet toe", isCorrect: true },
      ],
      explanation: "De kern van kindgestuurd spel is niet het type activiteit maar de dynamiek: het kind leidt, jij volgt met volle aandacht. Samen een game spelen waarbij hij de expert is en jij de leerling, kan net zo verbindend zijn als Lego. Het gaat om aanwezigheid en het volgen van zijn wereld, in welke vorm die ook komt.",
    },
  ],
},
{
  id: "vb_mod_5",
  skill: "Verbinding" as Skill,
  title: "De Dingen Die Ze Onthouden",
  description: "Je plant uitstapjes. Dure vakanties. Maar je kind onthoudt het dansje in de keuken. Leer waarom rituelen de herinneringen worden die je relatie vormen.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 5,
  content: [
    {
      type: "text" as const,
      heading: "Het was niks bijzonders.",
      text: "Je staat in de keuken. Lucas (9) helpt met afwassen. Er komt een nummer op de radio. Jij begint mee te zingen, veel te hard, veel te vals. Lucas lacht. Jullie dansen met natte handen. Twee minuten.\n\nDat is het moment dat hij onthoudt als hij dertig is.",
    },
    {
      type: "text" as const,
      heading: "Momenten, geen lessen",
      text: "We denken dat opvoeden gaat over de grote dingen. De gesprekken over normen en waarden. De dure vakanties. Het goede schooladvies.\n\nMaar kinderen onthouden andere dingen. Het geluid van je lach. De geur van pannenkoeken op zondag. Dat je altijd even op hun bed kwam zitten voor het slapen. Het gekke stemmetje dat je deed bij het voorlezen.\n\nDit zijn geen toevalligheden. Dit zijn rituelen. Terugkerende momenten die voorspelbaar, veilig en van jullie zijn. Ze hoeven niet groot te zijn. Ze moeten alleen herhaald worden.\n\nRituelen geven kinderen twee dingen: voorspelbaarheid ('dit is altijd zo, dit verandert niet') en identiteit ('dit is wat wij doen, dit is wie wij zijn'). Samen vormen ze het fundament van verbinding.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Onderzoek naar episodisch geheugen laat zien dat kinderen emotioneel geladen, herhaalde momenten het sterkst onthouden. Ritueel-onderzoek toont aan dat gezinsrituelen stress verlagen en gehechtheid versterken. Narratieve identiteit — het verhaal dat je over jezelf vertelt — wordt gebouwd uit deze terugkerende momenten.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Wat kinderen onthouden",
      diagramData: [
        {
          emoji: "💰",
          label: "Wat je denkt dat telt",
          description: "Dure vakanties, cadeaus, uitstapjes, educatieve activiteiten. Kosten veel. Worden vaak vergeten.",
        },
        {
          emoji: "💡",
          label: "Wat echt telt",
          description: "De pannenkoeken op zondag. Het dansje in de keuken. Het verhaaltje voor het slapen. Klein, herhaald, van jullie.",
        },
        {
          emoji: "🔁",
          label: "De kracht van herhaling",
          description: "Eén keer is leuk. Tien keer is een ritueel. Honderd keer is een herinnering voor het leven.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Het is doordeweeks, avond. Lucas (9) zit op de bank. Papa komt naast hem zitten. Er is geen plan.",
      wrongApproach: "HET MOET BIJZONDER ZIJN:\n\nPapa: 'Zullen we dit weekend naar het pretpark?'\nLucas: 'Ja!'\nWeekend komt. Het regent. Lange rij. Lucas is moe. Ruzie over friet.\nMaandag op school: 'Hoe was je weekend?' Lucas: 'Gewoon.'\n\nDe grote plannen worden vage herinneringen. Het was leuk. Maar niet van jullie.",
      rightApproach: "HET MAG GEWOON ZIJN:\n\nPapa gaat naast Lucas zitten. 'Vertel. Top en flop van vandaag.'\nLucas: 'Top: drie keer gescoord bij gym. Flop: ruzie met Jesse.'\nPapa: 'Mijn top: deze chips. Mijn flop: een saaie vergadering.'\nLucas lacht.\n\nDit doen ze elke avond. Vijf minuten. Het is van hen. Lucas vertelt het later aan zijn eigen kinderen.",
      explanation: "Het pretpark kost honderd euro en wordt vergeten. De top-en-flop kost niks en wordt een herinnering. Het verschil: herhaling en emotionele verbinding. Rituelen worden herinneringen niet door hoe bijzonder ze zijn, maar door hoe vaak ze terugkomen.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Start één ritueel. Kies iets kleins dat je elke dag kunt doen. Top-en-flop bij het eten. Een speciaal handgebaar bij het afscheid. Drie minuten voorlezen voor het slapen. Klein. Dagelijks. Van jullie.\n\n2. De micro-traditie. Pannenkoeken op zondag. Vrijdagavond filmavond met popcorn. Zaterdagochtend samen naar de bakker. Wekelijks is genoeg — als het voorspelbaar is.\n\n3. Bescherm het ritueel. Als het eenmaal staat: maak het heilig. Niet 'als we tijd hebben.' Niet 'misschien morgen.' Dit is van jullie. Dit verandert niet.\n\n4. Betrek je kind. Vraag: 'Wat is iets dat wij altijd doen?' Als ze het kunnen benoemen, heb je al een ritueel. Zo niet — begin er vanavond een.",
    },
    {
      type: "exercise" as const,
      title: "Het Eerste Ritueel",
      instructions: "1. Kies vanavond één micro-ritueel. Suggesties:\n   - Top-en-flop bij het eten\n   - Een speciaal geheim handgebaar bij afscheid\n   - Twee minuten samen naar buiten kijken voor bedtijd\n   - Bij een tiener: samen een kop thee om 21:00\n2. Doe het vanavond.\n3. Doe het morgen weer. En overmorgen.\n4. Houd vol: zeven dagen achter elkaar.\n5. Vertel je kind niet dat het een ritueel is. Doe het gewoon. Ze merken het vanzelf als het er een keer niet is.",
      duration: 5,
      tips: [
        "Houd het simpel genoeg om vol te houden als je moe bent. Dat is de test: als je het ook om 21:30 op een donderdag kunt doen, is het goed.",
        "Als je kind meedoet zonder vragen te stellen, is het al aan het landen. Vertrouw het proces.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Wat is jouw sterkste herinnering aan je eigen vader? Grote kans dat het iets kleins en terugkerends was — klopt dat?",
        "Als je kind later één ding over jullie samen zou vertellen, wat wil je dat dat is?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Kinderen onthouden geen lessen maar momenten. Rituelen — kleine, herhaalde, emotioneel geladen momenten — worden de herinneringen die jullie relatie vormen. Start één micro-ritueel vanavond. Bescherm het. Herhaal het. Het hoeft niet bijzonder te zijn. Het moet alleen van jullie zijn.",
    },
  ],
  keyTakeaways: [
    "Kinderen onthouden momenten, geen lessen — de kleine herhaalde dingen worden de sterkste herinneringen",
    "Rituelen geven kinderen voorspelbaarheid en identiteit: 'dit is wat wij doen, dit is wie wij zijn'",
    "Start klein, herhaal dagelijks en bescherm het ritueel — consistentie maakt het waardevol",
  ],
  research: "Fiese (2006). Family Routines and Rituals; Tulving (2002). Episodic Memory research; McAdams (2001). The Psychology of Life Stories; Spagnola & Fiese (2007). Family Rituals and Routines",
  quizQuestions: [
    {
      question: "Wanneer wordt een ritueel een probleem in plaats van een verbinder?",
      options: [
        { text: "Als je kind het niet meer leuk vindt — dan is het tijd voor een nieuw ritueel", isCorrect: false },
        { text: "Als het een verplichting wordt die je afwerkt in plaats van een moment dat je samen beleeft", isCorrect: true },
        { text: "Als het langer dan zes maanden duurt — rituelen moeten regelmatig vernieuwd worden", isCorrect: false },
      ],
      explanation: "Een ritueel dat dertig jaar meegaat kan fantastisch zijn. Eén dat twee weken oud is kan al leeg voelen. De tijdsduur is niet het probleem. Het kantelpunt is wanneer het 'moeten' wordt: je doet het omdat het zo hoort, niet omdat het verbindt. Op dat moment is het geen ritueel meer maar een gewoonte. Het verschil voel je in je lijf.",
    },
    {
      question: "Wat is het verschil tussen 'quality time' en 'performative togetherness'?",
      options: [
        { text: "Quality time is gepland en performative togetherness is spontaan", isCorrect: false },
        { text: "Quality time draait om dure activiteiten, performative togetherness om simpele momenten", isCorrect: false },
        { text: "Bij quality time ben je echt aanwezig; bij performative togetherness vink je 'samen zijn' af zonder er echt te zijn", isCorrect: true },
      ],
      explanation: "Performative togetherness is het moderne vaderschap-gevaar: je bent fysiek aanwezig, doet de 'juiste' activiteiten, maakt misschien zelfs foto's — maar je hoofd is ergens anders. Het ziet er van buiten perfect uit, maar je kind voelt het verschil. Echte quality time kan er slordig uitzien: samen stilzitten, samen vervelen, samen niks doen. Het gaat om aanwezigheid, niet om activiteit.",
    },
    {
      question: "Papa plant elke zondag een uitgebreid ontbijt met pannenkoeken. Het kost hem anderhalf uur. Zijn kinderen vinden het gewoon. Welke analyse klopt het BEST?",
      options: [
        { text: "Hij moet stoppen — als kinderen het niet waarderen is het geen effectief ritueel", isCorrect: false },
        { text: "Dat ze het 'gewoon' vinden is juist het bewijs dat het werkt — voorspelbaarheid voelt als vanzelfsprekendheid", isCorrect: true },
        { text: "Hij moet de kinderen vaker betrekken zodat ze het meer waarderen", isCorrect: false },
      ],
      explanation: "Hier zit de paradox van rituelen: de krachtigste rituelen voelen niet bijzonder — ze voelen als 'zo is het gewoon bij ons.' Dat is precies de identiteitsfunctie. Kinderen zullen het pas als bijzonder herkennen als het er een keer niet is, of als ze volwassen zijn en terugkijken. De vanzelfsprekendheid IS het bewijs van succes.",
    },
    {
      question: "Je tiener (15) wil niet meer mee met het wekelijkse zaterdagse uitje dat jullie al jaren doen. Wat is de meest effectieve reactie?",
      options: [
        { text: "Loslaten en accepteren dat het ritueel zijn tijd heeft gehad — tieners hebben ruimte nodig", isCorrect: false },
        { text: "Vasthouden — juist nu is consistentie belangrijk, ook als hij tegensputert", isCorrect: false },
        { text: "Het ritueel laten evolueren: 'Het hoeft niet hetzelfde te zijn. Wat zou voor jou werken?'", isCorrect: true },
      ],
      explanation: "Beide extremen missen het punt. Volledig loslaten verliest het ritueel. Vasthouden maakt het een verplichting. De middenweg is het ritueel laten meegroeien: de kern (wekelijks samen iets doen) behouden, maar de vorm aanpassen aan wie je kind nu is. Misschien wordt het zaterdagse uitje een vrijdagavond samen koken, of een wandeling met de hond. Het ritueel is niet de activiteit — het is de afspraak.",
    },
  ],
},
];
