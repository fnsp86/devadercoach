import type { LearningModule, Skill } from "../types";

export const REFLECTIE_MODULES: LearningModule[] = [
{
  id: "re_mod_1",
  skill: "Reflectie" as Skill,
  title: "De Stem Van Je Vader",
  description: "Je opent je mond en hoort je eigen vader eruit komen. Dat moment van schrik. Snap waar het vandaan komt. En kies wat je wilt houden.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 1,
  content: [
    {
      type: "text" as const,
      heading: "Je kent dat moment.",
      text: "Je zoon laat iets vallen. Je opent je mond. En de stem die eruit komt is niet van jou. Het is die van je vader. Exact dezelfde toon. Dezelfde woorden. Je schrikt ervan.\n\nDat moment is geen falen. Het is het begin van bewustwording.",
    },
    {
      type: "text" as const,
      heading: "Je ouderschap draait op automatische piloot",
      text: "Het meeste van wat je als vader doet, heb je niet geleerd uit boeken. Je hebt het gekopieerd. Van je eigen vader, of juist als tegendraadse reactie op hem.\n\nJe brein heeft duizenden interacties met je ouders opgeslagen als 'zo doe je dat.' Dat is impliciet geheugen. Patronen die je volgt zonder erbij na te denken. Als je moe bent, als de druk oploopt, schakelt je brein naar die automatische stand.\n\nDat betekent: je ouderschap met de stem van je vader. Totdat je bewust anders kiest. Die keuze begint met kijken. Eerlijk kijken. Wat heb je meegekregen? Wat wil je houden? En wat mag stoppen bij jou?",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Onderzoek naar intergenerationele transmissie laat zien dat hechtingspatronen van ouder op kind worden doorgegeven. Tenzij je ze bewust herkent. Fonagy noemt dit 'mentaliseren': nadenken over je eigen denken. Vaders die hun eigen opvoeding verwerken, doorbreken het patroon in 60-70% van de gevallen.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Drie lagen van je vaderschap",
      diagramData: [
        {
          emoji: "👴",
          label: "Laag 1: Geërfd",
          description: "Alles wat je automatisch overneemt van je eigen vader. Toon, regels, reacties. Vaak onbewust.",
        },
        {
          emoji: "🔄",
          label: "Laag 2: Reactief",
          description: "Alles wat je bewust ANDERS doet dan je vader. Soms goed, soms doorgeslagen naar het andere uiterste.",
        },
        {
          emoji: "🧭",
          label: "Laag 3: Gekozen",
          description: "Alles wat je bewust kiest. Niet omdat je vader het deed, niet als reactie. Maar omdat het bij jóu past.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Sem (7) laat per ongeluk een glas kapot vallen. Papa voelt de woede opkomen. Precies zoals zijn eigen vader boos werd bij fouten.",
      wrongApproach: "OP AUTOMATISCHE PILOOT:\n\nPapa: 'Kun je niet uitkijken?! Hoe vaak moet ik dat nog zeggen!'\nSem krimpt ineen. Stilte.\n\nDe stem van zijn vader. Dezelfde woorden. Sem leert: fouten maken = straf. Papa voelt zich daarna schuldig. Net als toen.",
      rightApproach: "BEWUSTE KEUZE:\n\nPapa voelt de woede. Herkent de stem. Ademt. Denkt: dit is niet mijn stem, dit is die van mijn vader.\n\nPapa: 'Oeps, scherven. Kom, niet op blote voeten. We ruimen het samen op.'\nSem: 'Sorry papa.' Papa: 'Geeft niks. Dingen breken soms.'\n\nSem leert: fouten mogen. Papa leert: ik ben niet mijn vader.",
      explanation: "Het verschil is het moment tussen trigger en reactie. In de eerste aanpak speelt het oude patroon zich af. In de tweede herkent papa de stem, pauzeert, en kiest zijn eigen reactie. Dat is reflectie in actie.",
    },
    {
      type: "example" as const,
      situation: "Noor (10) komt thuis met een onvoldoende voor haar rekentoets. Papa voelt meteen de neiging om te reageren zoals zijn vader deed: prestaties afstraffen.",
      wrongApproach: "❌ De oude reflex:\n\nPapa: 'Een onvoldoende? Heb je wel geleerd? Zo ga je het nooit redden.'\nNoor slaat dicht. Gaat naar haar kamer. Deur dicht.\nPapa hoort zichzelf en denkt: dit is precies wat mijn vader zei toen ik een slecht cijfer had. Exact dezelfde woorden.",
      rightApproach: "✅ Het patroon doorbreken:\n\nPapa voelt de teleurstelling. Herkent het patroon: mijn vader maakte van cijfers een oordeel over wie ik was.\n\nPapa: 'Oké, een onvoldoende. Dat is balen. Vond je het zelf ook moeilijk?'\nNoor: 'Ja, ik snapte de breuken niet.'\nPapa: 'Zullen we er vanavond samen naar kijken?'\n\nNoor leert: een fout is iets om op te lossen, niet iets om je voor te schamen.",
      explanation: "Papa's vader koppelde prestaties aan eigenwaarde. Die stem zit diep. Door het patroon te herkennen kiest papa een andere weg: het cijfer bespreken zonder het kind te veroordelen. Noor voelt steun in plaats van afwijzing.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De twee-lijsten oefening. Pak een papiertje. Linkerkant: wat wil ik bewaren van mijn vader? Rechterkant: wat stopt bij mij? Wees specifiek. Niet 'hij was streng' maar 'hij schreeuwde als ik iets liet vallen.'\n\n2. Herken de stem. Als je merkt dat je reageert en het voelt als je vader. Pauzeer. Eén seconde is genoeg. Dat is geen zwakte, dat is kracht.\n\n3. Kies één ding. Je hoeft niet alles tegelijk te veranderen. Kies één patroon dat je wilt doorbreken. Begin daar.\n\n4. Vergeef jezelf de keren dat de oude stem wint. Die gaat nog vaak komen. Het gaat om de richting, niet om perfectie.",
    },
    {
      type: "exercise" as const,
      title: "De Twee-Lijsten",
      instructions: "1. Pak je telefoon of een papiertje.\n2. Maak twee kolommen: 'Houden' en 'Stoppen'.\n3. Links. Houden: schrijf drie dingen op die je vader deed die je wilt voortzetten.\n4. Rechts. Stoppen: schrijf drie dingen op die bij jou stoppen.\n5. Wees specifiek. Niet 'hij was streng' maar 'hij schreeuwde als ik iets liet vallen.'\n6. Wees eerlijk. Niemand leest dit behalve jij.",
      duration: 5,
      tips: [
        "Het mag ook iets kleins zijn. Hoe hij je instopte, hoe hij reageerde op tranen, hoe hij 'sorry' zei (of niet)",
        "Als je niets kunt bedenken voor 'houden', is dat ook informatie. Schrijf dan op wat je had gewild.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Beschrijf een recent moment waarop je bewust anders reageerde dan je eerste impuls. Wat maakte het verschil?",
        "Als je zoon of dochter later terugdenkt aan jou als vader. Welk gevoel wil je dat ze dan hebben?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Je draagt de stem van je vader in je. Dat is normaal. Hechtingspatronen worden doorgegeven. Maar bewustwording doorbreekt het patroon. Maak twee lijsten: houden en stoppen. Je hoeft niet de perfecte vader te zijn. Je moet de bewuste vader zijn.",
    },
  ],
  keyTakeaways: [
    "Je ouderschap draait op automatische piloot totdat je bewust je eigen patronen herkent",
    "Intergenerationele patronen kun je doorbreken door ze eerst eerlijk te bekijken",
    "De twee-lijsten oefening (houden vs stoppen) maakt je keuzes concreet en bewust",
  ],
  research: "Fonagy et al. (2002). Affect Regulation, Mentalization, and the Development of the Self; Van IJzendoorn (1995). Adult Attachment Representations and Intergenerational Transmission",
  quizQuestions: [
    {
      question: "Een vader zegt: 'Ik word nooit zoals mijn vader.' Waarom kan dit voornemen averechts werken?",
      options: [
        { text: "Omdat hij dan zijn vader volledig buitensluit en geen positieve dingen overneemt", isCorrect: false },
        { text: "Omdat zijn vader dan alsnog de maatstaf is. Hij reageert reactief in plaats van bewust te kiezen", isCorrect: true },
        { text: "Omdat het onmogelijk is om anders te zijn dan je vader door de sterke genetische invloed", isCorrect: false },
      ],
      explanation: "'Nooit zoals mijn vader' klinkt als bevrijding, maar het is een reactieve positie: je vader bepaalt nog steeds je kompas. Echte vrijheid is kiezen vanuit je eigen waarden, niet als spiegelbeeld van iemand anders.",
    },
    {
      question: "Welke uitspraak over intergenerationele overdracht is ONJUIST?",
      options: [
        { text: "Hechtingspatronen worden automatisch doorgegeven, tenzij je ze bewust herkent", isCorrect: false },
        { text: "Als je je eigen opvoeding verwerkt, doorbreek je het patroon in de meerderheid van de gevallen", isCorrect: false },
        { text: "Patronen uit je opvoeding zitten in je expliciet geheugen en kun je dus makkelijk herkennen", isCorrect: true },
      ],
      explanation: "Het tegenovergestelde is waar: opvoedingspatronen zitten in je impliciet geheugen. Ze spelen automatisch af zonder dat je het doorhebt. Juist omdat ze onbewust zijn, vergt het actieve reflectie om ze te herkennen.",
    },
    {
      question: "Scenario: je bent uitgerust, je hebt een goede dag gehad, en je kind morst. Je reageert rustig. Wat zegt dit over je patronen?",
      options: [
        { text: "Je hebt het patroon doorbroken. Het probleem is opgelost", isCorrect: false },
        { text: "Je automatische patronen zijn er nog steeds, maar je had genoeg reserves om bewust te kiezen", isCorrect: true },
        { text: "Dit bewijst dat de patronen van je vader geen echte invloed op je hebben", isCorrect: false },
      ],
      explanation: "Onder gunstige omstandigheden is bewust reageren relatief makkelijk. De echte test komt als je moe, gestrest of overprikkeld bent. Dan schakelt je brein terug naar de automatische stand. Patronen doorbreken is een doorlopend proces, geen eenmalige overwinning.",
    },
    {
      question: "Fonagy's concept van 'mentaliseren' betekent in de context van vaderschap:",
      options: [
        { text: "Nadenken over de gedachten en gevoelens achter je eigen en andermans gedrag", isCorrect: true },
        { text: "Je negatieve gedachten vervangen door positieve gedachten over het ouderschap", isCorrect: false },
        { text: "Bewust kiezen om emoties niet te tonen aan je kinderen zodat zij niet belast worden", isCorrect: false },
      ],
      explanation: "Mentaliseren is niet positief denken of emoties verbergen. Het is de vaardigheid om te begrijpen dat gedrag. Van jezelf en van je kind. Voortkomt uit onderliggende gedachten en gevoelens. Die vaardigheid maakt het verschil tussen automatisch reageren en bewust kiezen.",
    },
  ],
},
{
  id: "re_mod_2",
  skill: "Reflectie" as Skill,
  title: "De Verhalen Die Je Jezelf Vertelt",
  description: "Je denkt: ik ben een slechte vader. Maar is dat waar. Of is het een verhaal? Ontdek hoe je innerlijke narratief je vaderschap saboteert.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 2,
  content: [
    {
      type: "text" as const,
      heading: "Je kent die stem.",
      text: "Het is woensdag. Je haalde je dochter te laat op van zwemles. Tien minuten. Ze stond te wachten bij de deur. Ze zei er niks over. Maar jij? Jij schrijft er meteen een heel verhaal bij.\n\n'Ik ben altijd te laat. Ik krijg niks voor elkaar. Andere vaders regelen dit gewoon. Ik ben een slechte vader.'\n\nTien minuten te laat. En in je hoofd is het al een heel vonnis.",
    },
    {
      type: "text" as const,
      heading: "Je brein vertelt je verhalen. En je gelooft ze allemaal",
      text: "Je hebt een innerlijke verteller. Die draait de hele dag door. En die verteller is geen journalist. Het is een rampenscenario-schrijver.\n\nEén foutje wordt 'ik faal altijd.' Eén moeilijke avond wordt 'ik kan dit niet.' Je ziet de keer dat je ongeduldig was, maar mist de tien keer dat je rustig bleef. Je scrollt door Instagram en ziet vaders die alles perfect lijken te doen. En je vergelijkt hun highlight reel met jouw behind-the-scenes.\n\nDit zijn geen feiten. Dit zijn denkfouten. Je brein filtert, overdrijft en generaliseert. Niet omdat je gek bent. Maar omdat menselijke breinen zo werken. We zijn geprogrammeerd om te focussen op wat misgaat. Dat hield onze voorouders in leven. Maar het maakt jou kapot als vader.\n\nHet verhaal dat je jezelf vertelt over wie je bent als vader? Dat is niet de waarheid. Het is een eerste versie. En eerste versies kun je herschrijven.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Psychiater Aaron Beck ontdekte dat mensen systematische denkfouten maken. Cognitieve vertekeningen. Catastroferen (het ergste aannemen), selectief filteren (alleen het negatieve zien), en overgeneraliseren ('altijd', 'nooit') zijn de meest voorkomende. Psycholoog Dan McAdams toonde aan dat je identiteit grotendeels bestaat uit het verhaal dat je over jezelf vertelt. Je 'narrative identity'. En Roy Baumeister bewees het negativiteitsbias: negatieve ervaringen wegen drie tot vijf keer zwaarder dan positieve. Je brein is geen objectieve waarnemer. Het is een verteller met een voorkeur voor drama.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Drie denkfouten van vaders",
      diagramData: [
        {
          emoji: "🔎",
          label: "1. Selectief filteren",
          description: "Je ziet alleen wat misgaat. De keer dat je schreeuwde telt. De twintig keer dat je rustig bleef? Onzichtbaar.",
        },
        {
          emoji: "🌋",
          label: "2. Catastroferen",
          description: "Van één incident naar het ergste scenario. 'Te laat ophalen' wordt 'mijn kind voelt zich verwaarloosd' wordt 'ik ben een slechte vader.'",
        },
        {
          emoji: "⚖️",
          label: "3. Oneerlijk vergelijken",
          description: "Je vergelijkt je slechtste momenten met de beste momenten van andere vaders. Instagram-vaders versus jouw echte leven. Dat is geen wedstrijd. Dat is zelfkwelling.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Het is zaterdagochtend. Tim (8) had een voetbalwedstrijd. Papa moest werken en miste de wedstrijd. Tim scoorde zijn eerste doelpunt. Mama stuurde een foto. Papa zit op kantoor en de gedachten beginnen.",
      wrongApproach: "HET RAMPVERHAAL:\n\nPapa's hoofd: 'Ik mis alles. Ik ben er nooit. Tim gaat dit onthouden. Zijn vader was er niet bij het belangrijkste moment. Andere vaders staan langs de lijn. Ik zit hier achter mijn laptop. Ik lijk op mijn eigen vader. Dit gaat fout.'\n\nPapa komt thuis. Overcompenseert. Koopt een cadeautje. Stelt te veel vragen. Tim voelt de spanning. Het voelt raar.",
      rightApproach: "HET VERHAAL HERSCHRIJVEN:\n\nPapa merkt de gedachten op. Herkent het patroon: catastroferen, vergelijken, generaliseren.\n\nPapa tegen zichzelf: 'Ik miste één wedstrijd. Niet alle wedstrijden. Vorige week was ik er wél. En Tim heeft twee ouders. Hij was niet alleen.'\n\nPapa belt Tim: 'Hé kampioen! Ik hoorde dat je gescoord hebt. Vertel! Hoe was het?'\nTim, enthousiast: 'Papa het was ZO vet, ik schoot hem in de kruising!'\n\nPapa luistert. Echt. Geen schuldgevoel, geen overcompensatie. Gewoon verbinding.",
      explanation: "In het eerste scenario schrijft papa een rampverhaal op basis van één gemist moment. Hij generaliseert ('ik ben er nooit'), catastrofeert ('dit gaat fout'), en vergelijkt ('andere vaders wel'). In het tweede scenario herkent hij de denkfout, corrigeert het verhaal naar de feiten, en kiest verbinding boven schuldgevoel.",
    },
    {
      type: "example" as const,
      situation: "Jasmijn (5) huilt bij de schoolpoort als papa haar afzet. De juf zegt: 'Het gaat na twee minuten alweer goed.' Maar papa rijdt naar werk en de gedachten beginnen te draaien.",
      wrongApproach: "❌ De schuldspiraal:\n\nPapa's hoofd: 'Ze huilde. Ze wil niet bij mij weg omdat ze weet dat ik er te weinig ben. Andere kinderen huilen niet. Het is mijn schuld. Ik werk te veel. Ik ben een afwezige vader.'\n\nPapa kan zich de hele ochtend niet concentreren. Komt thuis en overcompenseert met snoep en extra tv-tijd. Jasmijn snapt niet waar het vandaan komt.",
      rightApproach: "✅ De feiten-check:\n\nPapa merkt de gedachten op. Stopt. Vraagt: wat zijn de feiten?\n\nFeit: Jasmijn huilde twee minuten. De juf zei dat het daarna goed ging.\nFeit: veel vijfjarigen huilen bij het afscheid. Dat is normaal.\nFeit: gisteren zwaaide ze vrolijk.\n\nPapa appt de juf: 'Hoe gaat het nu?' Juf: 'Ze is aan het knutselen en lacht.' Papa ademt uit. Het rampverhaal was geen feit. Het was een film.",
      explanation: "Papa filterde selectief: alleen de tranen. Hij catastrofeerde: van twee minuten huilen naar 'ik ben afwezig.' En hij generaliseerde: 'andere kinderen huilen niet.' Door de feiten te checken ziet hij het echte beeld. Twee minuten verdriet, daarna een vrolijk kind.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De feiten-check. Als je jezelf betrapt op 'ik ben een slechte vader'. Stop. Vraag: wat zijn de feiten? Niet de interpretatie. Niet het gevoel. De feiten. Je miste één wedstrijd. Dat is het feit. De rest is verhaal.\n\n2. De tegenbewijzen-lijst. Schrijf drie momenten op van deze week waarop je er wél was. Waarop het wél goed ging. Ze zijn er. Je ziet ze alleen niet als je brein in de dramastand staat.\n\n3. De Instagram-regel. Als je je na het scrollen slechter voelt als vader: leg je telefoon neer. Je vergelijkt een geregisseerd plaatje met je echte leven. Dat is geen informatie. Dat is vergif.\n\n4. Het woord 'altijd' vervangen. Elke keer dat je denkt 'ik doe altijd...' of 'ik ben nooit...'. Vervang het door 'deze keer.' 'Deze keer was ik te laat.' Dat is eerlijk. 'Ik ben altijd te laat' is een leugen die je jezelf vertelt.",
    },
    {
      type: "exercise" as const,
      title: "Het Verhaal Herschrijven",
      instructions: "1. Denk aan een recent moment waarop je dacht 'ik ben een slechte vader.'\n2. Schrijf het feit op. Eén zin, geen interpretatie. ('Ik was te laat bij het ophalen.')\n3. Schrijf het rampverhaal op dat je brein ervan maakte. Alles. ('Ik ben er nooit. Mijn kind voelt zich verwaarloosd.')\n4. Zoek drie tegenbewijzen. Momenten van deze week waarop je er wél was.\n5. Herschrijf het verhaal. Eerlijk, maar compleet. ('Ik was één keer te laat. Drie andere keren was ik op tijd.')\n6. Lees het herschreven verhaal hardop voor. Merk het verschil.",
      duration: 5,
      tips: [
        "Het verschil tussen feiten en verhalen herkennen is een vaardigheid. Het wordt makkelijker met oefening",
        "Vraag je partner of een vriend om drie dingen die je goed doet als vader. Soms hebben anderen een eerlijker beeld dan jijzelf",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Welk terugkerend verhaal vertel je jezelf over wie je bent als vader? En als je eerlijk bent. Klopt dat verhaal?",
        "Van wie heb je geleerd om zo streng over jezelf te oordelen? Waar komt die innerlijke criticus vandaan?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Je brein vertelt je verhalen over wie je bent als vader. Die verhalen zitten vol denkfouten: selectief filteren, catastroferen, oneerlijk vergelijken. Het zijn geen feiten. Het zijn eerste versies. Check de feiten, zoek tegenbewijzen, vervang 'altijd' door 'deze keer.' Je bent niet het verhaal dat je innerlijke criticus vertelt. Je bent de vader die elke dag weer opdaagt.",
    },
  ],
  keyTakeaways: [
    "Je innerlijke narratief als vader zit vol denkfouten. Catastroferen, selectief filteren en oneerlijk vergelijken",
    "Negatieve ervaringen wegen drie tot vijf keer zwaarder dan positieve. Je brein geeft je een vertekend beeld",
    "Door feiten te scheiden van verhalen en 'altijd' te vervangen door 'deze keer' herschrijf je je zelfbeeld",
  ],
  research: "Beck (1976). Cognitive Therapy and the Emotional Disorders; McAdams (2001). The Psychology of Life Stories; Baumeister et al. (2001). Bad Is Stronger Than Good (Negativity Bias)",
  quizQuestions: [
    {
      question: "Wat is het verschil tussen zelfreflectie en rumineren (piekeren)?",
      options: [
        { text: "Zelfreflectie stelt open vragen en leidt tot inzicht; rumineren draait in cirkels rond hetzelfde negatieve punt", isCorrect: true },
        { text: "Zelfreflectie doe je overdag en rumineren doe je 's nachts. Het verschil is timing", isCorrect: false },
        { text: "Zelfreflectie is altijd positief en rumineren altijd negatief. Het verschil is de emotie", isCorrect: false },
      ],
      explanation: "Het cruciale verschil is richting: reflectie beweegt vooruit ('wat kan ik hiervan leren?') terwijl ruminatie blijft cirkelen ('waarom ben ik zo?'). Reflectie kan pijnlijk zijn maar levert inzicht op. Ruminatie voelt als nadenken maar produceert alleen meer schuldgevoel.",
    },
    {
      question: "Volgens Dan McAdams bepaalt je 'narrative identity' wie je bent. Welk risico schuilt hierin voor vaders?",
      options: [
        { text: "Als je jezelf het verhaal vertelt dat je een slechte vader bent, ga je onbewust gedrag vertonen dat het verhaal bevestigt", isCorrect: true },
        { text: "Je narratieve identiteit is vastgelegd in je jeugd en kan als volwassene niet meer worden aangepast", isCorrect: false },
        { text: "Narratieve identiteit werkt alleen bij vrouwen. Mannen vormen hun identiteit door handelingen, niet door verhalen", isCorrect: false },
      ],
      explanation: "Verhalen zijn zelfvervullend: het verhaal 'ik ben een slechte vader' filtert bewijs dat het bevestigt en negeert bewijs dat het tegenspreekt. Het goede nieuws is dat je het verhaal kunt herschrijven. Maar je moet het eerst herkennen als verhaal, niet als feit.",
    },
    {
      question: "Een vader denkt na een moeilijke dag: 'Dit gaat nooit meer goed komen met mijn zoon.' Welke denkfout(en) maakt hij?",
      options: [
        { text: "Alleen catastroferen. Hij blaast het op tot een ramp", isCorrect: false },
        { text: "Catastroferen én overgeneraliseren. Hij maakt van één dag een permanent vonnis", isCorrect: true },
        { text: "Selectief filteren. Hij ziet alleen de negatieve dag en niet de positieve dagen", isCorrect: false },
      ],
      explanation: "Hier zijn twee denkfouten tegelijk actief: het woord 'nooit' is overgeneralisatie (van één dag naar altijd) en 'nooit meer goed komen' is catastroferen (het ergste aannemen). Denkfouten treden vaak in clusters op, wat ze zo overtuigend maakt.",
    },
    {
      question: "Onderzoek naar negativiteitsbias laat zien dat negatieve ervaringen 3-5x zwaarder wegen. Wat is een ONBEDOELD gevolg van dit feit voor vaders?",
      options: [
        { text: "Vaders moeten vijf keer zoveel positieve momenten creëren om het goed te maken", isCorrect: false },
        { text: "Een vader die 9 van de 10 keer geduldig is, voelt zich toch een ongeduldig persoon door die ene keer", isCorrect: true },
        { text: "Kinderen onthouden alleen de negatieve momenten, dus positieve momenten zijn verspilde moeite", isCorrect: false },
      ],
      explanation: "Het negativiteitsbias vertekent je zelfbeeld: die ene keer dat je schreeuwde overschaduwt de tien keer dat je rustig bleef. Je bent geen objectieve waarnemer van je eigen vaderschap. Daarom is bewust tegenbewijzen zoeken geen zelfbedrog, maar een correctie op een biologisch scheef beeld.",
    },
  ],
},
{
  id: "re_mod_3",
  skill: "Reflectie" as Skill,
  title: "De Vader Die Je Had Willen Zijn",
  description: "Het is 22:00. De kinderen slapen. En jij denkt: ik had het beter moeten doen. Die kloof tussen wens en werkelijkheid? Dat is geen falen.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 3,
  content: [
    {
      type: "text" as const,
      heading: "De kinderen slapen. Jij niet.",
      text: "Het is stil in huis. De kinderen slapen eindelijk. En dan komt het. Die film in je hoofd. Hoe je vanmiddag schreeuwde. Hoe je te weinig geduld had. Hoe je de vader die je wilde zijn weer niet was.\n\nDat geluid in je hoofd? Dat is geen waarheid. Dat is een patroon.",
    },
    {
      type: "text" as const,
      heading: "De kloof is geen falen. Het is bewijs dat je het probeert",
      text: "Er is een versie van jou in je hoofd. De vader die altijd rustig is. Die nooit schreeuwt. Die altijd tijd heeft. Die elke avond voorleest en elke ochtend pannenkoeken bakt.\n\nDie vader bestaat niet. Niet bij jou, niet bij wie dan ook.\n\nDe kloof tussen wie je wilt zijn en wie je bent. Die voelt als falen. Maar het is het tegenovergestelde. Alleen vaders die het belangrijk vinden, voelen die kloof. Vaders die het niet boeit? Die liggen allang te slapen.\n\nDat je hier bent, om 22:00, en nadenkt over hoe je het beter kunt doen? Dat is niet falen. Dat is groei. De kloof is het bewijs dat je waarden hebt. En waarden zijn je kompas. Niet je zweep.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Kristin Neff onderscheidt drie componenten van zelf-compassie: vriendelijkheid naar jezelf, erkenning dat iedereen worstelt (common humanity), en mindfulness in plaats van over-identificatie. Onderzoek toont dat zelf-compassie bij ouders leidt tot minder burn-out en betere relaties met kinderen.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Drie stappen van zelf-compassie",
      diagramData: [
        {
          emoji: "🤚",
          label: "1. Erken het",
          description: "Dit doet pijn. Ik had het anders gewild. Niet wegduwen, niet uitvergroten. Gewoon: dit is moeilijk.",
        },
        {
          emoji: "🌍",
          label: "2. Je bent niet alleen",
          description: "Miljoenen vaders liggen nu ook wakker en denken hetzelfde. Dit hoort bij het vaderschap. Jij bent niet de enige.",
        },
        {
          emoji: "💬",
          label: "3. Spreek jezelf toe als een vriend",
          description: "Wat zou je tegen je beste vriend zeggen? Zeg dat nu tegen jezelf. Niet 'het maakt niet uit'. Maar 'je doet je best.'",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Het is avond. Milan (3) sliep niet, schreeuwde een uur. Papa verloor zijn geduld en zei hard: 'GA NU SLAPEN!' Nu ligt Milan te slapen en papa op de bank. Vol schuldgevoel.",
      wrongApproach: "DE INNERLIJKE CRITICUS:\n\nPapa tegen zichzelf: 'Wat een slechte vader ben ik. Schreeuwen tegen een driejarige. Mijn vader had gelijk. Ik kan er niks van. Morgen doe ik het perfect.'\n\nResultaat: schaamtespiraal, slaapgebrek, morgen nóg korter lontje. Het perfectie-voornemen maakt het erger.",
      rightApproach: "ZELF-COMPASSIE:\n\nPapa tegen zichzelf: 'Dat was niet hoe ik het wilde. Dat doet pijn. Maar ik ben moe, Milan was ook moe, en dit is moeilijk. Elke vader kent dit moment. Morgen maak ik het goed met Milan. Nu mag ik uitrusten.'\n\nResultaat: rust, realistisch plan, morgen een vader die niet leeg begint.",
      explanation: "De innerlijke criticus belooft verbetering maar levert uitputting. Zelf-compassie is geen excuus. Het is erkennen dat het moeilijk was, dat je menselijk bent, en dat morgen een nieuwe dag is. Vaders die zichzelf vergeven hebben meer geduld over.",
    },
    {
      type: "example" as const,
      situation: "Daan (9) vraagt of papa meekomt naar de open dag op school. Papa had het beloofd maar moet op het laatste moment overwerken. Hij belt om af te zeggen. Daan zegt: 'Geeft niet hoor.' Maar zijn stem klinkt vlak.",
      wrongApproach: "❌ De schaamtespiraal:\n\nPapa hangt op. Denkt: 'Ik ben net als mijn vader. Die was er ook nooit bij. Ik beloof dingen en maak ze niet waar. Ik ga dit goedmaken. Ik neem volgende week vrij en dan doe ik álles met hem.'\n\nHet voornemen is te groot. Het lukt niet. Papa voelt zich nog slechter. Daan merkt dat papa gespannen is en trekt zich terug.",
      rightApproach: "✅ Eerlijk en mild:\n\nPapa hangt op. Voelt de pijn. Denkt: 'Dit is klote. Ik wilde erbij zijn. Maar ik ben niet de enige vader die weleens iets mist. Dit is één keer, niet altijd.'\n\nPapa stuurt Daan een voicebericht: 'Hé kerel, ik baal er echt van. Vertel me vanavond alles? Dan wil ik alles horen.'\n\nDie avond luistert papa echt. Geen overcompensatie. Gewoon: er zijn.",
      explanation: "De schaamtespiraal drijft papa naar onrealistische beloftes die weer niet lukken. Zelf-compassie laat hem de pijn erkennen zonder erin te verdrinken. Hij maakt het goed op een realistische manier: niet door het perfecte plan, maar door vanavond echt te luisteren.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De avond check-in. Drie vragen voor het slapen: Wat ging goed vandaag? Waar liep het vast? Wat wil ik morgen anders? Begin altijd met wat goed ging.\n\n2. De zelf-compassie brief. Schrijf een kort briefje aan jezelf alsof je het schrijft aan een vriend die worstelt. 'Hé man, ik zie dat je je best doet. Het is pittig. Je bent er elke dag.'\n\n3. Eén woord. Als de criticus begint, kies één woord: 'genoeg.' Je bent genoeg. Niet perfect. Genoeg.\n\n4. Het 3-op-1 principe. Voor elke keer dat het misging, benoem drie momenten dat het wél goed ging. Ze zijn er altijd. Je ziet ze alleen niet als de criticus schreeuwt.",
    },
    {
      type: "exercise" as const,
      title: "De Zelf-Compassie Brief",
      instructions: "1. Open je notities of pak een papiertje.\n2. Schrijf een kort bericht aan jezelf. Alsof je schrijft aan je beste vriend.\n3. Begin met: 'Hé man, ik zie dat je...'\n4. Vertel hem dat je ziet hoe hard hij zijn best doet.\n5. Vertel hem dat het moeilijk is. En dat dat normaal is.\n6. Vertel hem dat hij er elke dag is. Dat dat genoeg is.\n7. Bewaar het bericht. Lees het terug op een moeilijke avond.",
      duration: 4,
      tips: [
        "Als het moeilijk is om aardig tegen jezelf te zijn. Stel je voor dat een goede vriend dit tegen jou zegt",
        "Bewaar het bericht. Lees het terug op een moeilijke avond",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Hoe spreek je tegen jezelf na een moeilijk moment met je kind? Zou je zo tegen je beste vriend praten?",
        "Wat als de kloof tussen de vader die je wilt zijn en de vader die je bent niet je vijand is. Maar je brandstof?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "De kloof tussen wie je wilt zijn en wie je bent is geen falen. Het is bewijs dat je waarden hebt. Zelf-compassie is geen excuus maar brandstof: erken het, weet dat je niet alleen bent, en spreek jezelf toe als een vriend. Je bent genoeg.",
    },
  ],
  keyTakeaways: [
    "De kloof tussen de vader die je wilt zijn en wie je bent is bewijs van groei, niet van falen",
    "Zelf-compassie heeft drie stappen: erken het, weet dat je niet alleen bent, spreek jezelf toe als vriend",
    "Vaders die zichzelf vergeven hebben meer geduld. De innerlijke criticus put je uit",
  ],
  research: "Neff (2011). Self-Compassion: The Proven Power of Being Kind to Yourself; Moreira et al. (2018). Self-Compassion and Parenting",
  quizQuestions: [
    {
      question: "Wat is het subtiele verschil tussen zelf-compassie en zelf-toegeeflijkheid?",
      options: [
        { text: "Zelf-compassie erkent pijn én neemt verantwoordelijkheid; zelf-toegeeflijkheid vermijdt de pijn en verandert niets", isCorrect: true },
        { text: "Er is geen echt verschil. Zelf-compassie is gewoon een nettere term voor jezelf laten gaan", isCorrect: false },
        { text: "Zelf-compassie is voor kleine fouten; bij grotere fouten is streng zijn effectiever", isCorrect: false },
      ],
      explanation: "Het cruciale verschil zit in eerlijkheid: zelf-compassie zegt 'dit deed pijn en ik wil het anders doen', zelf-toegeeflijkheid zegt 'het maakt niet uit.' De eerste is moediger en leidt tot verandering, de tweede vermijdt confrontatie met jezelf.",
    },
    {
      question: "De paradox van perfectie in het vaderschap: waarom leidt het streven naar perfectie vaak tot sléchter ouderschap?",
      options: [
        { text: "Omdat perfecte vaders hun kinderen onder druk zetten om ook perfect te zijn", isCorrect: false },
        { text: "Omdat het onhaalbare ideaal leidt tot schaamtespiralen die je geduld en energie uitputten", isCorrect: true },
        { text: "Omdat kinderen perfectie saai vinden en liever een spontane vader hebben", isCorrect: false },
      ],
      explanation: "Het perfectie-streven is een val: het onhaalbare ideaal genereert schaamte, schaamte put je uit, uitputting maakt je kort aangebonden, en dat genereert meer schaamte. Het is een neerwaartse spiraal die je probeert op te lossen met precies datgene wat hem veroorzaakt.",
    },
    {
      question: "Kristin Neff noemt 'common humanity' als onderdeel van zelf-compassie. Welke uitspraak past hier NIET bij?",
      options: [
        { text: "'Miljoenen vaders liggen nu ook wakker met dit gevoel'", isCorrect: false },
        { text: "'Andere vaders hebben het vast makkelijker dan ik'", isCorrect: true },
        { text: "'Worstelen met het ouderschap is universeel menselijk'", isCorrect: false },
      ],
      explanation: "Common humanity is het besef dat lijden universeel is. Je bent niet de enige die worstelt. De uitspraak 'anderen hebben het makkelijker' is juist het tegenovergestelde: het isoleert je en maakt je strijd uniek en eenzaam. Dat versterkt schaamte in plaats van het te verzachten.",
    },
    {
      question: "Scenario: een vader schreeuwt tegen zijn kind, voelt zich vreselijk, en besluit zichzelf te 'straffen' door de rest van de avond extra streng voor zichzelf te zijn. Wat is het probleem?",
      options: [
        { text: "Hij zou zichzelf juist moeten belonen om de negatieve associatie te doorbreken", isCorrect: false },
        { text: "Zelfbestraffing herstelt de relatie met het kind niet. Alleen terugkomen en sorry zeggen doet dat", isCorrect: true },
        { text: "Er is geen probleem. Berouw tonen door zelfbestraffing is een gezonde reactie", isCorrect: false },
      ],
      explanation: "Zelfbestraffing voelt productief maar richt zich op de verkeerde relatie: je 'herstelt' iets met jezelf in plaats van met je kind. Het kind heeft geen vader nodig die zichzelf martelt. Het heeft een vader nodig die terugkomt, sorry zegt, en contact maakt.",
    },
  ],
},
{
  id: "re_mod_4",
  skill: "Reflectie" as Skill,
  title: "Je Kind Is Je Spiegel",
  description: "Je kind doet moeilijk. Maar kijk eens goed. Misschien spiegelt het precies wat er in jou leeft. Stress, spanning, onrust. Kinderen voelen alles.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 4,
  content: [
    {
      type: "text" as const,
      heading: "Hij deed het weer.",
      text: "Finn (4) is onhandelbaar. Driftbuien. Niet luisteren. Alles is nee. Je denkt: wat is er met hem?\n\nMaar de echte vraag is: wat is er met jou? Want gisteren had je ruzie met je partner. En de hele week zit je vast in een project op werk dat niet opschiet. Je slaapt slecht. Je kaak staat strak.\n\nFinn voelt dat. Hij heeft er geen woorden voor. Maar zijn lijf pikt het op. En zijn gedrag schreeuwt wat jij niet uitspreekt.",
    },
    {
      type: "text" as const,
      heading: "Je kind is een emotionele antenne",
      text: "Kinderen zijn geen passieve ontvangers. Ze zijn scanners. Ze lezen je lichaamstaal, je stemtoon, de spanning in je schouders, de stilte tussen jou en je partner. Ze voelen spanning die jij denkt te verbergen.\n\nDit heet emotionele besmetting. Jouw stress wordt hun stress. Niet omdat je het uitspreekt. Juist omdat je het niet doet. Onuitgesproken spanning is voor kinderen het moeilijkst. Ze voelen dat er iets is, maar niemand benoemt het. Dus dragen ze het in hun lijf. En het komt eruit als gedrag.\n\nDat klagerige kind. Dat kind dat niet wil slapen. Dat kind dat opeens weer in je bed kruipt. Vaak is dat geen fase. Het is een spiegel. Ze laten je zien wat jij niet ziet bij jezelf.\n\nDat is confronterend. En het is een uitnodiging. Want als jij verandert, verandert je kind mee. Niet door aan je kind te sleutelen. Maar door naar jezelf te kijken.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Onderzoek naar emotionele besmetting toont dat kinderen de cortisolniveaus van hun ouders overnemen. Letterlijk. Als jij gestrest bent, stijgt het stresshormoon bij je kind mee. Gottman's onderzoek naar 'spillover' bewijst dat spanning tussen partners direct doorwerkt in de ouder-kindrelatie: na een ruzie zijn ouders minder responsief en kinderen meer ontregeld. Dan Siegel beschrijft dit als interpersoonlijke neurobiologie: breinen reguleren elkaar. Jouw zenuwstelsel is het voorbeeld waar het zenuwstelsel van je kind op leunt.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De spiegelketen",
      diagramData: [
        {
          emoji: "😤",
          label: "1. Jouw innerlijke staat",
          description: "Stress, ruzie, werkdruk, onverwerkte spanning. Je denkt dat je het verbergt. Je lichaam verraadt je.",
        },
        {
          emoji: "📡",
          label: "2. De overdracht",
          description: "Je kind scant je non-stop. Stemtoon, spierspanning, gezichtsuitdrukking. Spiegelneuronen kopiëren je staat.",
        },
        {
          emoji: "🌪️",
          label: "3. Het spiegelgedrag",
          description: "Driftbuien, niet slapen, kleverig, opstandig. Je kind toont wat jij niet uitspreekt. Het gedrag is de boodschap.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Thomas (5) wil al drie nachten niet slapen. Huilt, roept, komt steeds uit bed. Papa en mama snappen er niks van. Er is niks veranderd. Maar papa heeft de afgelopen twee weken extreme werkdruk en komt elke avond gestrest thuis. En afgelopen weekend was er een flinke ruzie tussen de ouders, waar Thomas bij was.",
      wrongApproach: "HET PROBLEEM ZOEKEN BIJ HET KIND:\n\nPapa: 'Thomas, er is niks aan de hand. Ga slapen. Nu.'\nThomas huilt harder. Papa wordt gefrustreerd.\nPapa tegen mama: 'Zullen we strengere regels invoeren? Hij manipuleert ons.'\n\nMeer druk, meer straf. Thomas slaapt nog slechter. Papa snapt niet waarom. Het kind is het probleem. Toch?",
      rightApproach: "IN DE SPIEGEL KIJKEN:\n\nPapa merkt het patroon op: Thomas doet dit sinds de ruzie. Sinds de werkstress.\n\nPapa gaat naast Thomas' bed zitten. 'Hé kerel. Papa en mama hadden ruzie laatst. Dat was niet fijn hè? Maar dat ging niet over jou. En papa is de laatste tijd een beetje druk in zijn hoofd. Maar het komt goed.'\n\nThomas zucht diep. Kruipt tegen papa aan. Slaapt binnen tien minuten.\n\nHet kind had geen strengere regels nodig. Het had een vader nodig die eerlijk was over zijn eigen spanning.",
      explanation: "Thomas reageerde niet op een slaapprobleem. Hij reageerde op de onuitgesproken spanning in huis. Kinderen kunnen pas ontspannen als hun ouders ontspannen. Of op zijn minst eerlijk zijn over hun spanning. Papa hoefde niet perfect te zijn. Hij moest alleen erkennen: dit gaat niet over Thomas. Dit gaat over mij.",
    },
    {
      type: "example" as const,
      situation: "Sophie (8) is de laatste weken prikkelbaar en maakt ruzie met haar broertje. Papa is al twee maanden bezig met een reorganisatie op werk. Hij checkt 's avonds voortdurend zijn mail en is stil aan tafel.",
      wrongApproach: "❌ Het gedrag corrigeren:\n\nPapa: 'Sophie, stop met dat geruzie. Ga naar je kamer als je zo doet.'\nSophie stampvoet naar boven. Het geruzie wordt erger.\nPapa tegen mama: 'Wat is er toch met haar? Zullen we haar telefoon afpakken?'\n\nMeer straffen, meer conflicten. Sophie wordt stiller. Maar niet rustiger.",
      rightApproach: "✅ Eerst naar jezelf kijken:\n\nPapa stopt. Denkt: wanneer begon dit? Twee weken geleden. Wanneer begon mijn werkstress? Twee maanden geleden. Wanneer ben ik gestopt met echt aanwezig zijn aan tafel?\n\nPapa legt zijn telefoon in de keukenla. Gaat naast Sophie zitten. 'Hé Soof. Papa is de laatste tijd veel in zijn hoofd hè? Dat is niet leuk voor jou. Zullen we iets leuks doen samen? Jij kiest.'\n\nSophie kijkt verrast. 'Spelletje?' Die avond geen ruzie.",
      explanation: "Sophies prikkelbare gedrag was geen gedragsprobleem. Het was een reactie op papa's emotionele afwezigheid. Hij was er fysiek maar niet mentaal. Door zijn telefoon weg te leggen en er echt te zijn, verdween de spanning. Het gedrag was de boodschap: ik mis je, papa.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. De spiegel-check. Als je kind lastig gedrag vertoont, stel jezelf eerst de vraag: hoe voel ik me? Hoe is de sfeer thuis? Is er spanning tussen mij en mijn partner? Vaak zit het antwoord niet bij je kind maar bij jou.\n\n2. Benoem wat er is. Kinderen kunnen spanning aan als het benoemd wordt. 'Papa is een beetje gestrest van werk. Dat merk je misschien. Het ligt niet aan jou.' Die drie zinnen doen wonderen.\n\n3. Reguleer jezelf eerst. In het vliegtuig zet je eerst je eigen masker op. Hetzelfde geldt hier. Ga even naar buiten, adem, beweeg. Jouw kalmte is de kalmte van je kind.\n\n4. De emotionele thermometer. Geef jezelf elke avond een cijfer van 1-10 voor je stressniveau. Doe hetzelfde voor het gedrag van je kind. Na twee weken zie je de correlatie. Die is er bijna altijd.",
    },
    {
      type: "exercise" as const,
      title: "De Spiegel-Check",
      instructions: "Denk aan het laatste moment dat je kind 'moeilijk' deed. Sluit je ogen. Spoel terug. Niet naar je kind. Naar jezelf. Hoe voelde jij je die dag? Was er stress op werk? Spanning met je partner? Sliep je slecht? Schrijf op: 1) Het gedrag van mijn kind. 2) Hoe ik me die dag voelde. 3) Wat er speelde in ons gezin. Zie je een verband?",
      duration: 5,
      tips: [
        "Dit is geen schuldvraag. Het is een eerlijke blik. Jij bent niet de oorzaak van alles. Maar je bent wel een grote factor in de emotionele sfeer thuis",
        "Als je het verband niet direct ziet, houd het twee weken bij. Het patroon wordt zichtbaar",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Als je eerlijk kijkt naar de moeilijkste momenten met je kind. Wat speelde er op dat moment bij jou? Stress, vermoeidheid, spanning met je partner?",
        "Wat zou er veranderen in het gedrag van je kind als jij de komende week bewust je eigen spanning zou reguleren?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Je kind is je spiegel. Hun gedrag reflecteert vaak jouw innerlijke staat. Stress, spanning, onuitgesproken conflicten. Kinderen nemen je cortisol over, lezen je lichaamstaal, en voelen wat je niet zegt. De oplossing zit niet in je kind corrigeren maar in jezelf reguleren. Benoem wat er speelt, kalmeer jezelf eerst, en kijk eerlijk in de spiegel. Als jij verandert, verandert je kind mee.",
    },
  ],
  keyTakeaways: [
    "Kinderen zijn emotionele antennes. Ze spiegelen jouw stress, spanning en onuitgesproken conflicten in hun gedrag",
    "De oplossing voor moeilijk gedrag zit vaak niet bij het kind maar bij het reguleren van je eigen emotionele staat",
    "Benoemen wat er speelt ('papa is gestrest, het ligt niet aan jou') geeft kinderen rust en veiligheid",
  ],
  research: "Gottman & Declaire (1997). The Heart of Parenting: Raising an Emotionally Intelligent Child (spillover effect); Siegel (2012). The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are; Hatfield, Cacioppo & Rapson (1994). Emotional Contagion. Studies in Emotion and Social Interaction",
  quizQuestions: [
    {
      question: "Welke uitspraak over spiegelneuronen en emotionele besmetting in gezinnen is ONJUIST?",
      options: [
        { text: "Als een vader zijn stress bewust verbergt achter een glimlach, pikken kinderen de onderliggende spanning toch op", isCorrect: false },
        { text: "Emotionele besmetting werkt alleen van ouder naar kind, niet andersom", isCorrect: true },
        { text: "Kinderen nemen letterlijk het stresshormoon cortisol van hun ouders over", isCorrect: false },
      ],
      explanation: "Emotionele besmetting werkt twee kanten op. Kinderen beïnvloeden ook de emotionele staat van hun ouders. Een huilend kind verhoogt het cortisol bij de vader. Dit maakt het extra belangrijk om je eigen regulatie op orde te hebben, anders ontstaat een opwaartse stressspiraal.",
    },
    {
      question: "Scenario: je kind is al weken lastig. Je partner zegt: 'Hij doet het expres.' Jij vermoedt dat het een spiegel is van spanning thuis. Wie heeft gelijk?",
      options: [
        { text: "Je partner. Kinderen van 4+ kunnen bewust grenzen testen en dat moet gecorrigeerd worden", isCorrect: false },
        { text: "Jij. Maar het gevaar is dat je alle gedragsproblemen op jezelf projecteert en reële grenzen vergeet", isCorrect: true },
        { text: "Jullie allebei niet. Gedrag van kinderen is grotendeels temperament en genetisch bepaald", isCorrect: false },
      ],
      explanation: "De spiegel-hypothese is krachtig maar niet allesverklarend. Soms IS er spanning die het kind oppikt, én soms heeft een kind structuur nodig. Het risico van de spiegel-blik is dat je alles op jezelf betrekt en vergeet dat kinderen ook eigen behoeften en grenzen hebben.",
    },
    {
      question: "Gottmans onderzoek naar 'spillover' laat zien dat partnerconflict doorwerkt in de ouder-kindrelatie. Wat is het meest verrassende mechanisme?",
      options: [
        { text: "Ouders compenseren na ruzie door extra lief te zijn voor hun kinderen", isCorrect: false },
        { text: "Kinderen kiezen partij en raken verstrikt in het conflict van de ouders", isCorrect: false },
        { text: "Na een partnerconflict zijn ouders onbewust minder responsief. Ze missen signalen die ze normaal wél oppikken", isCorrect: true },
      ],
      explanation: "Het subtielste effect is niet schreeuwen of ruzie waar kinderen bij zijn. Het is dat je na een conflict mentaal nog bezig bent met de ruzie, waardoor je de signalen van je kind mist. Je bent er fysiek, maar emotioneel afwezig. Kinderen voelen dat verschil feilloos.",
    },
    {
      question: "Een vader zegt: 'Ik ga voortaan altijd mijn stress benoemen tegen mijn kind, zodat hij weet wat er speelt.' Wat is het risico van deze aanpak?",
      options: [
        { text: "Er is geen risico. Transparantie is altijd beter dan verbergen", isCorrect: false },
        { text: "Kinderen worden angstig als ze te veel details horen. Benoem de emotie, niet het volledige volwassenenprobleem", isCorrect: true },
        { text: "Kinderen onder de 8 begrijpen stress niet, dus het heeft geen zin om het te benoemen", isCorrect: false },
      ],
      explanation: "Er is een belangrijk verschil tussen 'papa is een beetje gespannen vandaag, het ligt niet aan jou' en 'papa maakt zich grote zorgen over geld en weet niet of we het huis kunnen houden.' Het eerste geeft houvast, het tweede belast. Kinderen hebben erkenning nodig, geen volwassenenzorgen.",
    },
  ],
},
{
  id: "re_mod_5",
  skill: "Reflectie" as Skill,
  title: "Wat Je Kind Echt Nodig Heeft",
  description: "Niet de perfecte vader. Niet de vader uit het boekje. Maar een vader die blijft opdagen. Elke dag opnieuw. Ook na de fouten.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 5,
  content: [
    {
      type: "text" as const,
      heading: "Je bent niet perfect. Gelukkig maar.",
      text: "Je hebt geschreeuwd. Je hebt momenten gemist. Je hebt dingen gezegd die je terug wilde nemen. Je hebt avonden op de bank gezeten met het gevoel dat je tekortschoot.\n\nEn toch ben je hier. Om 22:00. Nog steeds aan het proberen. Dat is het hele punt.",
    },
    {
      type: "text" as const,
      heading: "Je kind heeft geen perfecte vader nodig. Maar eentje die blijft opdagen",
      text: "De kinderpsycholoog Winnicott bedacht de term 'good enough parent.' Niet perfect. Goed genoeg.\n\nDat klinkt als een troostprijs. Maar het is het tegenovergestelde. Perfecte ouders bestaan niet. En als ze zouden bestaan, zouden ze hun kinderen tekortdoen. Want een kind dat nooit ziet dat zijn vader fouten maakt, leert niet hoe je met fouten omgaat.\n\nJe kind heeft niet nodig dat je het altijd goed doet. Je kind heeft nodig dat je terugkomt als het fout gaat. Dat je sorry zegt. Dat je het opnieuw probeert.\n\nDat je morgen weer opstaat en weer die vader bent. Niet de perfecte. De aanwezige. De eerlijke. De vader die zegt: 'Ik deed het niet goed. Maar ik ben er nog steeds.'\n\nDat is geen falen. Dat is precies wat veilige hechting bouwt.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Winnicott toonde aan dat kinderen baat hebben bij 'goed genoeg' ouderschap: betrouwbare aanwezigheid met ruimte voor fouten. Hechtingsonderzoek bevestigt dat veilige hechting niet draait om perfectie maar om responsiviteit. Dat je terugkeert na een breuk. Repair is het fundament.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Wat veilige hechting echt bouwt",
      diagramData: [
        {
          emoji: "💔",
          label: "1. Breuk",
          description: "Je schreeuwt, je bent ongeduldig, je mist een moment. Het gaat fout. Dit is onvermijdelijk en menselijk.",
        },
        {
          emoji: "🔧",
          label: "2. Herstel",
          description: "Je komt terug. Je zegt sorry. Je maakt contact. Dit is waar de echte magie zit. Niet in perfectie.",
        },
        {
          emoji: "🏗️",
          label: "3. Vertrouwen",
          description: "Je kind leert: papa maakt fouten, maar papa komt altijd terug. Dat is veiligheid. Dat is hechting.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Het is zondagavond. Een lange week. Nora (6) vraagt of papa wil voorlezen. Papa is uitgeput en zegt kortaf: 'Niet nu.' Nora loopt stil naar haar kamer.",
      wrongApproach: "DE PERFECTIE-VAL:\n\nPapa voelt zich schuldig. Denkt: ik moet nu gaan voorlezen, anders ben ik een slechte vader. Sleept zichzelf naar haar kamer. Leest voor met een geïrriteerde stem. Nora voelt het.\n\nOf: papa doet niks. Schuift het schuldgevoel weg. Morgen beter. Maar morgen vergeet hij het.",
      rightApproach: "GOED GENOEG:\n\nPapa zit even. Ademt. Loopt dan naar Nora's kamer.\n\nPapa: 'Hé Noor. Sorry dat ik zo kort deed. Papa is moe. Maar weet je wat? Ik ga even naast je liggen. Vertel jij mij een verhaal?'\nNora, glimlachend: 'Er was een keer een draak die ook moe was...'\n\nNiet perfect. Maar echt. Aanwezig. Goed genoeg.",
      explanation: "De perfectie-val is dubbel: of je dwingt jezelf tot iets dat niet echt voelt, of je doet niks uit schaamte. De derde weg is eerlijkheid: ik ben moe, maar ik ben er. Dat is wat Nora onthoudt. Niet het perfecte verhaal. Maar de vader die terugkwam.",
    },
    {
      type: "example" as const,
      situation: "Thijs (4) gooit zijn bord eten op de grond na een drukke dag. Papa schreeuwt: 'WAAROM DOE JE DAT?!' Thijs begint te huilen. Papa beent de keuken uit.",
      wrongApproach: "❌ Vermijden of overcompenseren:\n\nPapa gaat op de bank zitten. Denkt: laat maar. Het is al gebeurd. Straks vergeet hij het.\nOf: papa rent terug met een koekje. 'Sorry sorry, hier, niet huilen.'\n\nIn beide gevallen geen echt contact. Thijs leert: als het fout gaat, verdwijnt papa. Of papa koopt het af.",
      rightApproach: "✅ Terugkomen en herstellen:\n\nPapa ademt even in de gang. Loopt terug. Gaat op zijn hurken.\n\nPapa: 'Hé Thijs. Papa schreeuwde. Dat was niet oké. Ik was boos, maar zo had ik het niet moeten zeggen. Sorry.'\nThijs snottert: 'Ik wou het niet laten vallen.'\nPapa: 'Dat weet ik. Kom, we ruimen het samen op.'\n\nGeen koekje. Geen show. Gewoon: terugkomen, sorry zeggen, doorgaan.",
      explanation: "Het gaat niet om de schreeuw. Het gaat om wat erna komt. Papa hoeft niet perfect te zijn. Maar hij moet terugkomen. Dat is de breuk-herstelcyclus die veilige hechting bouwt. Thijs leert: papa maakt fouten, maar papa komt altijd terug.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Brief aan je kind. Schrijf een kort briefje aan je kind. Niet om te geven. Voor jezelf. Schrijf op waarom je dit allemaal doet. Wat je voor ze wilt. Wie je voor ze wilt zijn. Bewaar het voor een moeilijke dag.\n\n2. De vier pijlers. Na vijf modules reflectie, onthoud vier dingen: herken je patronen (module 1-2), wees mild voor jezelf (module 3), kijk in de spiegel (module 4), en blijf opdagen (module 5).\n\n3. Het ochtend-voornemen. Elke ochtend één zin: 'Vandaag hoef ik niet perfect te zijn. Vandaag ben ik er.' Meer niet.\n\n4. Het consolidatie-moment. Je hebt vijf modules doorlopen. Dat is niet niks. Kijk terug: wat heeft je geraakt? Wat neem je mee? Schrijf één ding op dat je anders gaat doen.",
    },
    {
      type: "exercise" as const,
      title: "De Brief Aan Je Kind",
      instructions: "1. Pak je telefoon of een papiertje.\n2. Begin met 'Lieve [naam van je kind]...'\n3. Schrijf op waarom je een goede vader wilt zijn.\n4. Schrijf op wat je ze wilt meegeven voor later.\n5. Schrijf op hoe je wilt dat ze zich voelen als ze terugdenken aan hun kindertijd.\n6. Vijf zinnen is genoeg. Het hoeft niet mooi te zijn. Eerlijk is genoeg.\n7. Bewaar het. Lees het terug als je twijfelt of het genoeg is.",
      duration: 5,
      tips: [
        "Begin met 'Lieve [naam]...'. Het wordt vanzelf echt als je hun naam schrijft",
        "Het hoeft niet mooi te zijn. Eerlijk is genoeg. Net als je vaderschap",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Na alles wat je hebt geleerd over jezelf in deze modules. Wat is het belangrijkste inzicht dat je meeneemt?",
        "Als je kind over twintig jaar terugdenkt aan jou als vader. Welk gevoel wil je dat dan oproept?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Je kind heeft geen perfecte vader nodig. Ze hebben een vader nodig die terugkomt na fouten, die sorry zegt, die blijft opdagen. Veilige hechting bouwt niet op perfectie maar op herstel. Je bent hier. Je probeert het. Dat is goed genoeg. Dat is alles.",
    },
  ],
  keyTakeaways: [
    "Goed genoeg ouderschap is geen troostprijs. Het is precies wat kinderen nodig hebben",
    "Veilige hechting bouwt op de cyclus van breuk en herstel, niet op perfectie",
    "De krachtigste vader is niet de perfecte maar degene die blijft opdagen na fouten",
  ],
  research: "Winnicott (1953). Transitional Objects and Transitional Phenomena; Tronick (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children (Repair Cycle)",
  quizQuestions: [
    {
      question: "Winnicott spreekt over de 'good enough parent.' Welke interpretatie is FOUT?",
      options: [
        { text: "'Good enough' betekent dat je kind baat heeft bij het zien hoe jij met fouten omgaat", isCorrect: false },
        { text: "'Good enough' betekent dat het niet uitmaakt hoe vaak je fouten maakt, als je maar van je kind houdt", isCorrect: true },
        { text: "'Good enough' betekent betrouwbare aanwezigheid met ruimte voor herstel na breuken", isCorrect: false },
      ],
      explanation: "'Good enough' is geen vrijbrief. Het gaat niet om 'fouten maken maakt niet uit' maar om 'fouten zijn onvermijdelijk, en de kwaliteit van je ouderschap zit in hoe je herstelt.' Liefde zonder herstelgedrag is niet genoeg. Het kind moet ervaren dat de relatie sterker is dan de breuk.",
    },
    {
      question: "Een vader zegt nooit sorry tegen zijn kind omdat hij bang is dat het zijn autoriteit ondermijnt. Wat laat onderzoek naar de breuk-herstelcyclus hierover zien?",
      options: [
        { text: "Hij heeft een punt. Kinderen onder de 6 begrijpen sorry niet en het werkt verwarrend", isCorrect: false },
        { text: "Sorry zeggen modelleert verantwoordelijkheid nemen en versterkt het vertrouwen juist", isCorrect: true },
        { text: "Het hangt af van de cultuur. In sommige culturen is sorry zeggen als ouder inderdaad schadelijk", isCorrect: false },
      ],
      explanation: "Herstel na een breuk is wat veilige hechting bouwt. Door sorry te zeggen leert je kind twee dingen: fouten mogen, en je kunt ze rechtzetten. Dat bouwt meer autoriteit op dan onkwetsbaarheid, omdat het laat zien dat je sterk genoeg bent om eerlijk te zijn.",
    },
    {
      question: "Waarom kan het schadelijk zijn als een vader probeert het 'tegenovergestelde' te zijn van zijn eigen vader?",
      options: [
        { text: "Omdat het tegenovergestelde van een fout ook een fout kan zijn. Een vader die nooit grenzen stelt omdat zijn vader te streng was, ontzegt zijn kind structuur", isCorrect: true },
        { text: "Omdat kinderen juist behoefte hebben aan traditionele vaderfiguren die lijken op eerdere generaties", isCorrect: false },
        { text: "Omdat je genetisch bepaald bent om op je vader te lijken en verzet daartegen stress veroorzaakt", isCorrect: false },
      ],
      explanation: "Het tegenovergestelde van een uiterste is een ander uiterste, niet het midden. Een vader die nooit streng is omdat zijn vader te streng was, reageert nog steeds vanuit zijn vader. Alleen als spiegelbeeld. Het kind krijgt niet wat het nodig heeft, maar wat de vader nodig had als kind.",
    },
    {
      question: "Na vijf modules reflectie: welke volgorde beschrijft het meest realistische groeipad?",
      options: [
        { text: "Patronen herkennen, altijd bewust reageren, en nooit meer terugvallen in oud gedrag", isCorrect: false },
        { text: "Patronen herkennen, vaker bewust kiezen, terugvallen vergeven, en blijven opdagen", isCorrect: true },
        { text: "Eerst je verleden volledig verwerken, dan pas beginnen met bewust opvoeden", isCorrect: false },
      ],
      explanation: "Groei is geen lineair pad naar perfectie. Je zult terugvallen. Juist op de moeilijke momenten. De kracht zit niet in het voorkomen van terugval maar in hoe snel je het herkent, jezelf vergeeft, en opnieuw kiest. Volledig verwerken is een illusie; bewust leven met je patronen is het doel.",
    },
  ],
},
];
