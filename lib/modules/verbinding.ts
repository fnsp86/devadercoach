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
      instructions: "Kies vandaag een moment voor 10 minuten onverdeelde aandacht. Telefoon weg, in een andere kamer. Laat je kind kiezen wat jullie doen. Jij volgt. Stel open vragen: 'Wat moet ik doen?' 'Hoe werkt dit?' Doe dit zeven dagen achter elkaar en kijk wat er verandert.",
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
        "Wanneer was het laatste moment dat je kind je echt blij leek te zien? Wat deed je toen anders?",
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
      question: "Daan (7) zegt 'ga weg papa' als je wilt stoeien. Wat zegt dit waarschijnlijk?",
      options: [
        { text: "Het saldo op de emotionele bankrekening is te laag voor risico", isCorrect: true },
        { text: "Hij vindt stoeien niet meer leuk op die leeftijd", isCorrect: false },
      ],
      explanation: "Als het saldo laag is, beschermt een kind zichzelf door afstand te nemen. Het is geen afwijzing — het is een signaal dat er meer stortingen nodig zijn.",
    },
    {
      question: "Wat is de verhouding positief-negatief die Gottman vond voor stabiele relaties?",
      options: [
        { text: "5 positieve interacties voor elke 1 negatieve", isCorrect: true },
        { text: "2 positieve interacties voor elke 1 negatieve", isCorrect: false },
      ],
      explanation: "De 5:1 ratio is de ondergrens. Eén negatieve interactie weegt vijf keer zwaarder. Daarom zijn micro-stortingen zo belangrijk — ze bouwen buffer.",
    },
    {
      question: "Je wilt je kind corrigeren maar het saldo is laag. Wat doe je eerst?",
      options: [
        { text: "Toch corrigeren — grenzen zijn grenzen", isCorrect: false },
        { text: "Eerst even verbinden, dan pas bijsturen", isCorrect: true },
      ],
      explanation: "Correctie op een laag saldo voelt als aanval. Eerst kort verbinden (oogcontact, even aanraken, benoemen wat je ziet) maakt dat je boodschap aankomt.",
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
      instructions: "Ga vanavond naar je kind en zeg: 'Wij hebben iets nodig. Een geheime handdruk. Die alleen wij kennen.' Bedenk samen drie stappen: een vuistbump, een vingerknip, een klap, een geluid — wat jullie willen. Oefen hem vijf keer. Gebruik hem morgen bij het afscheid op school of bij het slapengaan. Doe dit een week lang bij elk afscheidsmoment.",
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
      question: "Je kind is de laatste weken afstandelijk. Jullie praten nauwelijks. Wat is de effectiefste eerste stap?",
      options: [
        { text: "Een gesprek starten: 'Ik merk dat we minder close zijn'", isCorrect: false },
        { text: "Fysiek beginnen: een schouderduw, een stoeipartij, een race naar de trap", isCorrect: true },
      ],
      explanation: "Als de verbinding lang weg is, voelt een gesprek als druk. Fysiek contact activeert het PLAY-circuit en maakt oxytocine aan. Het lichaam herstelt de verbinding sneller dan woorden.",
    },
    {
      question: "Waarom is stoeien met je kind meer dan 'gewoon spelen'?",
      options: [
        { text: "Het activeert het PLAY-circuit in het brein en stimuleert oxytocine — het bouwt letterlijk aan de band", isCorrect: true },
        { text: "Het leert kinderen om te gaan met fysieke grenzen en conflicten", isCorrect: false },
      ],
      explanation: "Panksepp ontdekte dat fysiek spel een apart neuraal circuit activeert dat essentieel is voor sociale ontwikkeling. Feldman toonde aan dat fysieke synchronie oxytocine vrijmaakt bij beide partijen. Stoeien is neurochemie.",
    },
    {
      question: "Wat maakt een geheime handdruk of bijnaam zo krachtig voor de vader-kindrelatie?",
      options: [
        { text: "Het houdt kinderen vermaakt en bezig", isCorrect: false },
        { text: "Het creëert exclusiviteit — 'dit is alleen van ons' versterkt de unieke band", isCorrect: true },
      ],
      explanation: "Gedeelde geheimen en rituelen bouwen een exclusieve verbinding. Elke keer dat jullie de handdruk doen of de bijnaam gebruiken, bevestigen jullie: wij hebben iets dat niemand anders heeft. Dat is de kern van gehechtheid.",
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
      text: "Conflict is geen bedreiging voor verbinding — het is een kans. Destructief conflict vernietigt, maar constructief conflict bouwt assertiviteit, respect en onderhandelingsvaardigheden. Luister voordat je oordeelt. Deel je echte reden. De-escaleer als het te heet wordt. Zoek samen naar een oplossing. Een kind dat veilig met jou kan botsen, leert de wereld aan.",
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
      question: "Je tiener zegt: 'Dat vind ik oneerlijk!' over een regel. Wat is de beste eerste reactie?",
      options: [
        { text: "'Vertel me waarom je dat vindt' — eerst luisteren, dan reageren", isCorrect: true },
        { text: "'Regels zijn regels' — je moet consequent zijn als ouder", isCorrect: false },
      ],
      explanation: "Luisteren is geen toegeven. Door eerst te vragen waarom je kind iets oneerlijk vindt, neem je hen serieus als gesprekspartner. Dat bouwt meer respect dan 'regels zijn regels' — en je kunt daarna nog steeds je grens stellen.",
    },
    {
      question: "Wat ontdekte Gottman over conflict in sterke relaties?",
      options: [
        { text: "Niet de afwezigheid van conflict maakt relaties sterk, maar hoe je ermee omgaat", isCorrect: true },
        { text: "Sterke relaties hebben minder dan twee conflicten per week", isCorrect: false },
      ],
      explanation: "Gottman vond dat de sterkste relaties niet conflictvrij zijn. Het geheim is de 'repair attempt': het vermogen om midden in een ruzie te de-escaleren en de verbinding te zoeken.",
    },
    {
      question: "Jesse (14) en papa zijn het grondig oneens. Het wordt luider. Wat doet de meeste schade?",
      options: [
        { text: "Pauzeren en zeggen: 'We gaan allebei harder praten. Even opnieuw?'", isCorrect: false },
        { text: "Afsluiten met: 'Ik bepaal hier de regels. Einde discussie.'", isCorrect: true },
      ],
      explanation: "'Einde discussie' beëindigt het gesprek maar ook het vertrouwen. Je kind leert: mijn mening telt niet. De pauze is moediger — en leert je kind dat je midden in conflict kunt kiezen voor verbinding.",
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
      instructions: "Vanavond of morgen: leg je telefoon in een andere kamer. Zeg tegen je kind: 'Ik heb twintig minuten. Wat wil jij doen?' En dan volg je. Geen sturing. Geen verbetering. Stel vragen. Beschrijf wat je ziet. Volg hun leiding. Timer mag — als die maar niet op je telefoon staat.",
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
      question: "Je kind wil al drie dagen hetzelfde spel spelen. Je verveelt je. Wat doe je?",
      options: [
        { text: "Meegaan — herhaling is hoe kinderen leren en verwerken", isCorrect: true },
        { text: "Een nieuw spel voorstellen dat leuker is voor jullie allebei", isCorrect: false },
      ],
      explanation: "Herhaling is de taal van verwerking en meesterschap bij kinderen. Door mee te gaan zeg je: jouw behoefte is belangrijk. Door te sturen zeg je: mijn verveling telt meer.",
    },
    {
      question: "Wat maakt kindgestuurd spel effectiever dan vader-gestuurd spel?",
      options: [
        { text: "Het kind ervaart: mijn ideeën tellen en papa volgt mij", isCorrect: true },
        { text: "Kinderen leren meer als ze zelf de regels bepalen", isCorrect: false },
      ],
      explanation: "Het gaat niet om leren maar om verbinding. Kindgestuurd spel geeft je kind het gevoel van leiderschap en waarde — 'mijn wereld is interessant genoeg voor papa.'",
    },
    {
      question: "Je telefoon ligt naast je tijdens het spelen, op stil. Is dat goed genoeg?",
      options: [
        { text: "Ja, als hij op stil staat word je niet gestoord", isCorrect: false },
        { text: "Nee, je brein blijft checken — telefoon hoort in een andere kamer", isCorrect: true },
      ],
      explanation: "Onderzoek toont aan dat alleen al de aanwezigheid van een telefoon je aandacht vermindert, zelfs als hij uit staat. In een andere kamer is de enige echte oplossing.",
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
      wrongApproach: "HET MUST WORDEN BIJZONDER:\n\nPapa: 'Zullen we dit weekend naar het pretpark?'\nLucas: 'Ja!'\nWeekend komt. Het regent. Lange rij. Lucas is moe. Ruzie over friet.\nMaandag op school: 'Hoe was je weekend?' Lucas: 'Gewoon.'\n\nDe grote plannen worden vage herinneringen. Het was leuk. Maar niet van jullie.",
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
      instructions: "Kies vanavond één micro-ritueel en doe het. Suggesties: top-en-flop bij het eten, een speciaal geheim handgebaar als jullie afscheid nemen, twee minuten samen naar buiten kijken voor bedtijd. Het maakt niet uit wat. Het maakt uit dat je het morgen weer doet. En overmorgen. Doe het zeven dagen achter elkaar.",
      duration: 5,
      tips: [
        "Houd het simpel genoeg om vol te houden als je moe bent. Dat is de test: als je het ook om 21:30 op een donderdag kunt doen, is het goed.",
        "Vertel je kind niet dat het een ritueel is. Doe het gewoon. Ze merken het vanzelf als het er een keer niet is.",
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
      question: "Wat onthouden kinderen het sterkst als ze volwassen zijn?",
      options: [
        { text: "Emotioneel geladen, herhaalde momenten zoals rituelen", isCorrect: true },
        { text: "Bijzondere eenmalige ervaringen zoals vakanties", isCorrect: false },
      ],
      explanation: "Episodisch geheugen werkt via emotie en herhaling. Een dagelijks ritueel van vijf minuten bouwt sterkere herinneringen dan een eenmalige dure vakantie.",
    },
    {
      question: "Je hebt een nieuw bedtijdritueel gestart, maar vanavond ben je te moe. Wat doe je?",
      options: [
        { text: "Het toch doen, al is het maar de korte versie — consistentie maakt het ritueel", isCorrect: true },
        { text: "Vanavond overslaan en morgen weer oppakken — één keer maakt niet uit", isCorrect: false },
      ],
      explanation: "De kracht van rituelen zit in de voorspelbaarheid. Eén keer overslaan is niet het einde, maar het consistent volhouden — ook als je moe bent — is wat het waardevol maakt.",
    },
    {
      question: "Wat geeft een ritueel aan een kind?",
      options: [
        { text: "Structuur zodat ze beter leren plannen", isCorrect: false },
        { text: "Voorspelbaarheid en identiteit: 'dit is van ons'", isCorrect: true },
      ],
      explanation: "Rituelen gaan niet over structuur of planning. Ze bouwen twee dingen: het gevoel van veiligheid ('dit verandert niet') en het gevoel van erbij horen ('dit is wie wij zijn').",
    },
  ],
},
];
