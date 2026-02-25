import type { HelpSituation, ThemeTag, Skill } from './types';

// ═══════════════════════════════════════════════════════════════════════
// BONUSKIND & SAMENGESTELD GEZIN (12 situaties)
// ═══════════════════════════════════════════════════════════════════════

export const BONUSKIND_HELP: HelpSituation[] = [
  {
    id: "bonus-peuter-wijst-af",
    ageGroup: "0-3",
    situatie: "Bonuskind (peuter) wijst je af",
    icon: "🚫",
    watSpeeltInKind: "Het kind kent jou nog niet als veilige basis. Peuters zijn biologisch geprogrammeerd om zich aan primaire hechtingsfiguren vast te klampen. Afwijzing is geen persoonlijke keuze, maar een overlevingsmechanisme.",
    watSpeeltInVader: "Pijn en afwijzing raken je diep. Je wilt zo graag een band opbouwen, maar voelt je machteloos. Twijfel of je er wel hoort bij ontstaat snel.",
    psychologie: "Hechting ontstaat door herhaalde, voorspelbare, warme aanwezigheid - niet door te pushen. Een peuter moet jou leren kennen via veiligheid, niet via dwang. Dit kost tijd: weken tot maanden.",
    stappen: [
      "Wees aanwezig zonder iets te eisen. Zit in de buurt, speel naast het kind, zonder contact te forceren.",
      "Volg het tempo van het kind. Als het naar je kijkt, glimlach. Als het wegdraait, laat het.",
      "Doe kleine, voorspelbare dingen: altijd hetzelfde liedje, altijd hetzelfde knuffelbeest meenemen. Rituelen bouwen vertrouwen."
    ],
    voorbeeldzin: "Ik ben hier. Je hoeft niks. Als je wilt komen, ben ik er.",
    valkuil: "Te hard je best doen om het kind voor je te winnen met cadeaus of overdreven enthousiasme - dit voelt voor het kind overweldigend en onveilig.",
    skillLink: "Aanwezigheid",
    themes: ["bonuskind", "samengesteld_gezin"]
  },
  {
    id: "bonus-wisseldag-onrust",
    ageGroup: "0-3",
    situatie: "Wisseldag: peuter onrustig na overgang",
    icon: "🔄",
    watSpeeltInKind: "De wereld verandert letterlijk: ander huis, andere geuren, andere geluiden. Peuters hebben geen tijdsbesef en begrijpen niet waarom alles weer anders is. Dit veroorzaakt stress en desoriëntatie.",
    watSpeeltInVader: "Frustratie dat je kind onrustig is terwijl je net samen bent. Schuldgevoel over de scheiding. Onzekerheid of je kind het wel fijn heeft bij jou.",
    psychologie: "Transities zijn voor jonge kinderen een van de meest stressvolle momenten. Het brein heeft tijd nodig om van de ene veilige context naar de andere te schakelen. Voorspelbaarheid en een landingsritueel helpen enorm.",
    stappen: [
      "Creëer een vast 'aankomstritueel': altijd dezelfde eerste activiteit (bijv. samen boekje lezen, rondje lopen, knuffelen op de bank).",
      "Benoem wat je ziet: 'Je was bij mama, en nu ben je hier. Dat is best veel hè.' Geef woorden aan het gevoel.",
      "Houd de eerste 30 minuten rustig. Geen grote plannen, geen drukke activiteiten. Laat het kind landen."
    ],
    voorbeeldzin: "Welkom thuis, lieverd. Laten we even rustig samen zitten. Er is geen haast.",
    valkuil: "Meteen vragen hoe het bij mama was, of direct een druk programma starten - het kind heeft eerst landing nodig, geen verhoor.",
    skillLink: "Emotiecoaching",
    themes: ["co-ouderschap"]
  },
  {
    id: "bonus-grenzen-peuter",
    ageGroup: "0-3",
    situatie: "Grenzen stellen als bonusvader van peuter",
    icon: "🧱",
    watSpeeltInKind: "Het kind test grenzen als onderdeel van normale ontwikkeling. Bij een bonusvader is er een extra laag: 'wie ben jij om mij te vertellen wat ik moet doen?' Het kind zoekt duidelijkheid over de hiërarchie.",
    watSpeeltInVader: "Onzekerheid over je positie. Ben ik te streng? Mag ik dit wel zeggen? Angst om het kind af te stoten door een grens te stellen.",
    psychologie: "Kinderen hebben grenzen nodig van alle volwassenen in hun omgeving om zich veilig te voelen. Een bonusvader die geen grenzen stelt, voelt voor het kind onvoorspelbaar. Grenzen zijn liefde, mits warm gebracht.",
    stappen: [
      "Bespreek met je partner welke basisregels gelden en stem af. Eenheid is essentieel.",
      "Stel grenzen kort, warm en zonder excuses: 'Bij ons slaan we niet. Ik help je om het anders te doen.'",
      "Als het kind escaleert, schakel je partner in zonder je terug te trekken. Laat zien dat jullie een team zijn."
    ],
    voorbeeldzin: "Dit mag niet, ook niet bij mij. Ik help je. Kom, we doen het samen anders.",
    valkuil: "Alle grenzen overlaten aan de biologische ouder uit angst voor afwijzing - dit ondermijnt je rol en geeft het kind geen duidelijkheid.",
    skillLink: "Grenzen",
    themes: ["bonuskind", "samengesteld_gezin"]
  },
  {
    id: "bonus-niet-mijn-papa",
    ageGroup: "4-7",
    situatie: "'Jij bent mijn papa niet!'",
    icon: "💔",
    watSpeeltInKind: "Het kind voelt loyaliteit naar de biologische vader en ervaart jouw aanwezigheid als bedreiging voor die band. Het is ook een manier om macht te testen en te kijken: blijf je als ik je wegduw?",
    watSpeeltInVader: "Een klap in je gezicht. Alles wat je investeert voelt zinloos. Woede, verdriet en de neiging om je terug te trekken vechten om voorrang.",
    psychologie: "Dit is een loyaliteitsconflict in actie. Het kind houdt niet minder van je - het probeert zijn liefde voor de biologische vader te beschermen. Hoe jij reageert op afwijzing bepaalt of het kind jou als veilig leert zien.",
    stappen: [
      "Haal adem. Neem de zin niet persoonlijk. Zeg rustig: 'Dat klopt, ik ben niet je papa. En ik ben er toch voor je.'",
      "Benoem het gevoel erachter: 'Je mist je papa misschien. Dat snap ik helemaal.'",
      "Laat het moment landen. Trek je niet terug. Ga later iets kleins samen doen - samen laten we zien dat afwijzing de relatie niet breekt."
    ],
    voorbeeldzin: "Je hebt gelijk, ik ben niet je papa. En ik geef wel om je. Dat mag allebei waar zijn.",
    valkuil: "Boos worden, je gekwetst terugtrekken, of gaan bewijzen dat je wél een goede vaderfiguur bent - dit vergroot de druk op het kind.",
    skillLink: "Herstel",
    themes: ["bonuskind"]
  },
  {
    id: "bonus-jaloezie-kinderen",
    ageGroup: "4-7",
    situatie: "Jaloezie tussen eigen kind en bonuskind",
    icon: "⚖️",
    watSpeeltInKind: "Beide kinderen strijden om jouw aandacht en liefde. Het eigen kind voelt zich bedreigd ('papa houdt meer van dat andere kind'). Het bonuskind voelt zich buitenstaander ('ik hoor er niet echt bij').",
    watSpeeltInVader: "Innerlijk verscheurd. Je merkt dat je automatisch je eigen kind voortrekt en voelt je schuldig. Of je overcompenseert richting het bonuskind, waardoor je eigen kind zich tekortgedaan voelt.",
    psychologie: "Eerlijkheid betekent niet gelijkheid. Elk kind heeft andere behoeften. De sleutel is dat elk kind zich gezien voelt in wat het nodig heeft, niet dat alles precies hetzelfde is.",
    stappen: [
      "Plan bewust 1-op-1 tijd met elk kind apart. Zelfs 15 minuten onverdeelde aandacht per dag maakt verschil.",
      "Benoem het verschil zonder het weg te poetsen: 'Jullie situatie is anders, en ik houd van jullie allebei.'",
      "Creëer gedeelde ervaringen die van jullie samen een team maken - samen koken, samen spelen, samen een project."
    ],
    voorbeeldzin: "Ik snap dat het lastig is. Jij bent belangrijk voor mij, en [naam] ook. Er is genoeg plek.",
    valkuil: "Alles precies eerlijk willen verdelen (zelfde speelgoed, zelfde tijd) - dit versterkt de competitie in plaats van verbinding.",
    skillLink: "Verbinding",
    themes: ["samengesteld_gezin"]
  },
  {
    id: "bonus-tegen-elkaar-uitspelen",
    ageGroup: "4-7",
    situatie: "Bonuskind speelt ouders tegen elkaar uit",
    icon: "🎭",
    watSpeeltInKind: "Het kind heeft geleerd dat het macht kan krijgen door volwassenen tegen elkaar uit te spelen. Dit is geen kwaadaardigheid maar een overlevingsstrategie. Het kind zoekt eigenlijk duidelijkheid en veiligheid.",
    watSpeeltInVader: "Irritatie en wantrouwen. Je voelt je gemanipuleerd. Tegelijk twijfel je: misschien klopt het wel wat het kind zegt over de andere ouder?",
    psychologie: "Kinderen in samengestelde gezinnen zijn experts in het vinden van hiaten tussen volwassenen. Dit is niet manipulatie maar adaptatie. De oplossing zit in volwassen afstemming, niet in het kind corrigeren.",
    stappen: [
      "Check altijd bij je partner (en eventueel de ex) voordat je reageert op claims. 'Ik ga dat even checken, moment.'",
      "Maak samen met alle opvoedende volwassenen een korte lijst met basisregels die overal gelden.",
      "Benoem het patroon zonder te beschuldigen: 'Ik merk dat je verschillende dingen vertelt. Wij praten met elkaar, dus dat werkt niet.'"
    ],
    voorbeeldzin: "Ik hoor je. Ik ga het even met mama/papa bespreken zodat we het samen weten.",
    valkuil: "Het kind straffen voor het 'liegen' - het kind doet dit uit onzekerheid, niet uit slechtheid. Straf vergroot de onveiligheid.",
    skillLink: "Grenzen",
    themes: ["co-ouderschap", "samengesteld_gezin"]
  },
  {
    id: "bonus-trekt-zich-terug",
    ageGroup: "8-12",
    situatie: "Bonuskind trekt zich terug bij bezoek",
    icon: "🚪",
    watSpeeltInKind: "Het kind voelt zich niet thuis in jouw huis. Het mist misschien de biologische ouder, voelt zich loyaal aan de andere kant, of vindt het gewoon lastig om twee werelden te hebben. Terugtrekken is bescherming.",
    watSpeeltInVader: "Teleurstelling en frustratie. Je hebt je best gedaan om het gezellig te maken, en het kind zit de hele tijd op z'n kamer. Het voelt als afwijzing.",
    psychologie: "Terugtrekgedrag bij kinderen van 8-12 in samengestelde gezinnen is een veelvoorkomend teken van loyaliteitsconflict of overprikkeling. Dwingen om erbij te zijn versterkt het verzet. Uitnodigen zonder druk opent de deur.",
    stappen: [
      "Respecteer de behoefte aan ruimte. Zeg: 'Je mag op je kamer zijn. Als je wilt, ben ik beneden.'",
      "Bied laagdrempelige contactmomenten: wandeling met de hond, samen boodschappen, een spelletje zonder groepsdruk.",
      "Check in zonder te pushen: klop aan, zeg iets aardigs, en ga weer. Laat zien dat je denkt aan het kind zonder iets te eisen."
    ],
    voorbeeldzin: "Ik ga zo een wandeling maken. Je hoeft niet mee, maar je bent welkom als je wilt.",
    valkuil: "Het kind dwingen om mee te doen aan familieactiviteiten of het persoonlijk opvatten - dit vergroot de afstand.",
    skillLink: "Aanwezigheid",
    themes: ["bonuskind"]
  },
  {
    id: "bonus-loyaliteitsconflict",
    ageGroup: "8-12",
    situatie: "Loyaliteitsconflict: kind voelt zich verdeeld",
    icon: "🫨",
    watSpeeltInKind: "Het kind houdt van beide ouders en voelt dat het door van jou te houden, de biologische vader verraadt. Dit innerlijk conflict veroorzaakt stress, terugtrekgedrag, of juist overal braaf zijn om niemand te kwetsen.",
    watSpeeltInVader: "Machteloosheid. Je ziet het kind lijden maar kunt het probleem niet oplossen. Frustratie richting de ex die (bewust of onbewust) het conflict versterkt.",
    psychologie: "Loyaliteitsconflicten zijn een van de grootste stressbronnen voor kinderen in scheidingssituaties. De oplossing is niet kiezen, maar het kind ontlasten van de keuze. Alle volwassenen moeten uitstralen: je mag van iedereen houden.",
    stappen: [
      "Zeg expliciet: 'Het is oké om je papa te missen als je hier bent. Dat vind ik niet erg.'",
      "Praat nooit negatief over de andere ouder. Zelfs als het moeilijk is - het kind identificeert zich met beide ouders.",
      "Geef het kind ruimte om contact te hebben met de andere ouder als het dat nodig heeft. Bellen met papa/mama is geen afwijzing van jou."
    ],
    voorbeeldzin: "Je mag van je papa houden en van ons hier ook. Daar hoef je niet tussen te kiezen.",
    valkuil: "Het kind subtiel dwingen om te kiezen, of opmerkingen maken als 'bij ons is het toch leuker' - dit versterkt het conflict enorm.",
    skillLink: "Emotiecoaching",
    themes: ["bonuskind", "co-ouderschap"]
  },
  {
    id: "bonus-verschil-regels",
    ageGroup: "8-12",
    situatie: "Verschil in regels tussen twee huizen",
    icon: "📋",
    watSpeeltInKind: "Het kind moet schakelen tussen twee sets regels, verwachtingen en normen. Dit is verwarrend en soms uitputtend. Het kind kan dit ook strategisch inzetten: 'Bij mama mag het wel.'",
    watSpeeltInVader: "Frustratie dat jouw regels ondermijnd worden. Gevoel van onmacht als de ex andere keuzes maakt. De neiging om te gaan bewijzen dat jouw aanpak beter is.",
    psychologie: "Kinderen kunnen prima omgaan met verschillende regels op verschillende plekken - ze doen dat op school vs. thuis ook. De sleutel is dat de regels binnen jouw huis helder, consistent en warm zijn. Je hoeft de andere ouder niet te veranderen.",
    stappen: [
      "Maak je eigen huisregels helder en houd ze simpel. 'Bij ons geldt dit, en dat is oké.'",
      "Ga niet in discussie over wat bij het andere huis mag. 'Ik snap dat het daar anders is. Hier doen wij het zo.'",
      "Focus op de basisregels waar je wél met de ex over kunt afstemmen (bedtijd, schermtijd) en laat de rest los."
    ],
    voorbeeldzin: "Bij mama zijn misschien andere regels. Hier bij ons is de afspraak: [regel]. Dat is niet stom, dat is hoe wij het doen.",
    valkuil: "Eindeloos proberen om dezelfde regels in beide huizen te krijgen - dit leidt tot conflict met de ex en helpt het kind niet.",
    skillLink: "Grenzen",
    themes: ["co-ouderschap"]
  },
  {
    id: "bonus-tiener-negeert",
    ageGroup: "13-18",
    situatie: "Tiener-bonuskind negeert je compleet",
    icon: "🧊",
    watSpeeltInKind: "De tiener combineert normale adolescentie-afstand met weerstand tegen de bonusvader. Negeren is een veilige manier om controle te houden zonder direct conflict. Het kind beschermt zichzelf tegen opnieuw kwetsbaar zijn.",
    watSpeeltInVader: "Diepe frustratie en eenzaamheid. Je woont onder hetzelfde dak maar voelt je onzichtbaar. De neiging om het op te geven groeit.",
    psychologie: "Bij tieners werkt aandringen averechts. De relatie moet je verdienen door respectvolle aanwezigheid, niet door confrontatie. Tieners merken alles, ook al laten ze dat niet zien. Jouw consistente warmte wordt opgeslagen.",
    stappen: [
      "Blijf groeten, blijf aanbieden, blijf vriendelijk - ook als je niks terugkrijgt. Dit is investeren op de lange termijn.",
      "Zoek een gedeelde interesse. Gaming, sport, auto's, muziek - één raakpunt kan de deur openen.",
      "Geef de tiener regie: 'Ik zou het leuk vinden om iets samen te doen. Maar jij kiest wat en wanneer.'"
    ],
    voorbeeldzin: "Hey, ik ga [activiteit]. Geen druk, maar je bent welkom als je zin hebt.",
    valkuil: "De tiener confronteren met het negeergedrag ('Waarom doe je zo?') of dreigen - dit bevestigt dat je onveilig bent.",
    skillLink: "Aanwezigheid",
    themes: ["bonuskind"]
  },
  {
    id: "bonus-conflict-ex-opvoedstijl",
    ageGroup: "13-18",
    situatie: "Conflict met ex over opvoedstijl tiener",
    icon: "🔥",
    watSpeeltInKind: "De tiener voelt de spanning tussen de volwassenen en raakt gestrest. Soms escaleert het eigen gedrag als onbewuste poging om de aandacht af te leiden van het ouderconflict.",
    watSpeeltInVader: "Woede en frustratie richting de ex. Het gevoel dat je geen invloed hebt op belangrijke beslissingen over een kind waar je dagelijks mee leeft. Machteloosheid.",
    psychologie: "Ouderconflict is de grootste voorspeller van problemen bij kinderen na scheiding - niet de scheiding zelf. Jouw zelfregulatie in contact met de ex is de beste investering in het welzijn van de tiener.",
    stappen: [
      "Reguleer jezelf voordat je communiceert met de ex. Schrijf een boos bericht, wacht 24 uur, herschrijf zakelijk.",
      "Communiceer over feiten, niet over gevoel. 'Ik merk dat [gedrag]. Hoe pakken we dit samen aan?' in plaats van 'Jij laat alles gaan.'",
      "Accepteer dat je niet alles kunt controleren. Focus op wat je in je eigen huis kunt doen voor de tiener."
    ],
    voorbeeldzin: "Ik maak me zorgen over [concreet gedrag]. Kunnen we samen kijken wat werkt?",
    valkuil: "Ruzie maken waar de tiener bij is, of de ex zwartmaken - het kind wordt het slagveld en dat is schadelijk.",
    skillLink: "Zelfregulatie",
    themes: ["co-ouderschap"]
  },
  {
    id: "bonus-niet-mee-vakantie",
    ageGroup: "13-18",
    situatie: "Bonuskind wil niet mee op vakantie",
    icon: "🏖️",
    watSpeeltInKind: "De tiener wil bij vrienden zijn, bij de andere ouder, of voelt zich ongemakkelijk in het samengestelde gezin in een onbekende setting. Vakantie betekent 24/7 samen - dat is voor een tiener met loyaliteitsconflict overweldigend.",
    watSpeeltInVader: "Teleurstelling en verdriet. Je had je verheugd op samen tijd. Het voelt als afwijzing van het gezin dat je probeert te bouwen.",
    psychologie: "Tieners in samengestelde gezinnen hebben autonomie nodig om de relatie te laten groeien. Dwingen leidt tot verzet en negatieve associaties. Een tiener die mag kiezen, voelt zich gerespecteerd - en kiest vaker voor verbinding.",
    stappen: [
      "Luister zonder oordeel. 'Ik hoor dat je liever thuisblijft. Vertel eens waarom?' Neem het serieus.",
      "Bied een compromis: meedoen voor een deel van de vakantie, of betrek de tiener bij de planning zodat er iets leuks voor hem/haar in zit.",
      "Als de tiener echt niet wil: accepteer het, maak goede afspraken over thuisblijven, en zeg: 'We missen je, en het is oké.'"
    ],
    voorbeeldzin: "Ik zou het leuk vinden als je meegaat, maar ik respecteer het als je dat niet wilt. Laten we samen kijken wat werkt.",
    valkuil: "De tiener dwingen om mee te gaan 'voor het gezin' - dit creëert wrok en bevestigt dat zijn/haar gevoelens er niet toe doen.",
    skillLink: "Verbinding",
    themes: ["bonuskind", "samengesteld_gezin"]
  },
];

// ═══════════════════════════════════════════════════════════════════════
// ADHD & GEDRAGSPROBLEMEN (12 situaties)
// ═══════════════════════════════════════════════════════════════════════

export const GEDRAG_HELP: HelpSituation[] = [
  {
    id: "adhd-constant-bewegen",
    ageGroup: "0-3",
    situatie: "Kind constant in beweging, kan niet stilzitten",
    icon: "🌪️",
    watSpeeltInKind: "Het zenuwstelsel zoekt voortdurend prikkels om zich te reguleren. Stilzitten voelt voor dit kind als voor jou in een koude douche staan - het lichaam schreeuwt om beweging. Dit is geen ongehoorzaamheid maar neurologie.",
    watSpeeltInVader: "Uitputting. Je kunt even niet meer. Vergelijking met andere kinderen die wél rustig spelen. Twijfel of je iets fout doet.",
    psychologie: "Kinderen met veel bewegingsdrang hebben een hoger basisniveau van fysieke activiteit nodig om hun brein optimaal te laten functioneren. Beweging IS hun regulatie. Onderdrukken van beweging leidt tot meer chaos.",
    stappen: [
      "Bied veilige bewegingsruimte: trampoline, kussenbaan, naar buiten. Laat bewegen een oplossing zijn, niet een probleem.",
      "Plan rustmomenten als 'actieve rust': kneden met klei, water spelen, schommelen. Dit zijn kalmerende prikkels.",
      "Pas je verwachtingen aan. Dit kind gaat niet 20 minuten stilzitten bij een puzzel - en dat hoeft ook niet."
    ],
    voorbeeldzin: "Jij hebt veel energie hè? Kom, we gaan even lekker rennen en dan doen we het rustige samen.",
    valkuil: "Continu zeggen 'zit stil, rustig, stop' - dit ondermijnt het zelfvertrouwen en werkt averechts bij prikkelzoekende kinderen.",
    skillLink: "Aanwezigheid",
    themes: ["adhd", "prikkelverwerking"]
  },
  {
    id: "gedrag-extreme-driftbuien",
    ageGroup: "0-3",
    situatie: "Extreme driftbuien die veel langer duren",
    icon: "🌋",
    watSpeeltInKind: "Het brein wordt volledig overspoeld door emotie. Bij kinderen met gedragsproblemen is de 'rempedaal' (prefrontale cortex) nog minder ontwikkeld. Het kind is letterlijk gevangen in de emotie en kan er niet zelf uit.",
    watSpeeltInVader: "Paniek en machteloosheid. De bui duurt 20, 30, 45 minuten - je eigen zenuwstelsel raakt ontregeld. Angst dat er iets mis is met je kind. Schaamte.",
    psychologie: "Langdurige driftbuien wijzen op een zenuwstelsel dat moeite heeft met terugkeren naar rust. Co-regulatie is de enige uitweg: jouw rust helpt het kind terug. Het kind heeft een extern anker nodig omdat het interne anker nog niet werkt.",
    stappen: [
      "Zorg eerst voor veiligheid. Verwijder gevaarlijke voorwerpen. Til het kind eventueel naar een veilige plek.",
      "Reguleer jezelf. Adem bewust langzaam. Jouw hartslag beïnvloedt die van je kind. Wees het anker, niet de storm.",
      "Blijf dichtbij zonder te praten. Rustige hand op de rug, zacht neuriën, of gewoon stil zitten. Na de bui: kort benoemen, geen preek."
    ],
    voorbeeldzin: "Ik ben hier. Ik ga niet weg. Het gaat voorbij.",
    valkuil: "Proberen de bui te stoppen door te praten, te redeneren, of te dreigen - het brein is offline en kan dit niet verwerken.",
    skillLink: "Zelfregulatie",
    themes: ["gedragsproblemen"]
  },
  {
    id: "adhd-overgangen-nachtmerrie",
    ageGroup: "0-3",
    situatie: "Overgangen en transities zijn een nachtmerrie",
    icon: "⏰",
    watSpeeltInKind: "Het ADHD-brein heeft enorme moeite met schakelen tussen activiteiten. Het kind is gefocust (hyperfocus) of juist volledig niet gefocust - er is weinig tussenin. Elke overgang voelt als een bruuske onderbreking.",
    watSpeeltInVader: "Tijdsdruk en stress. Het moet nu echt. Ongeduld groeit snel omdat het 'gewoon niet lukt' om soepel te schakelen.",
    psychologie: "Executive functies (plannen, schakelen, remmen) zijn bij ADHD vertraagd in ontwikkeling. Dit is niet onwil maar onvermogen. Externe structuur en voorspelbaarheid compenseren wat het brein nog niet zelf kan.",
    stappen: [
      "Waarschuw altijd vooraf: '5 minuten, dan gaan we [volgende].' Gebruik een visuele timer die het kind kan zien.",
      "Maak overgangen fysiek: 'Eerst schoenen, dan jas, dan deur.' Splits in kleine, concrete stappen.",
      "Bouw een vast overgangsritueel: een liedje, een telvorm, een high-five. Rituelen maken het brein klaar voor de switch."
    ],
    voorbeeldzin: "Over vijf minuten gaan we. Ik help je. Eerst schoenen - doe je mee?",
    valkuil: "Plotselinge overgangen zonder waarschuwing, of boos worden als het kind niet meteen schakelt - dit veroorzaakt meltdowns.",
    skillLink: "Grenzen",
    themes: ["adhd"]
  },
  {
    id: "adhd-luistert-niet-10x",
    ageGroup: "4-7",
    situatie: "Kind luistert niet ondanks 10x herhalen (ADHD)",
    icon: "👂",
    watSpeeltInKind: "Het kind hoort je letterlijk niet. Bij ADHD filtert het brein binnenkomende informatie anders - jouw stem wordt net zo verwerkt als achtergrondgeluid. Het kind is niet ongehoorzaam, het ontvangt het signaal niet.",
    watSpeeltInVader: "Groeiende frustratie die escaleert naar schreeuwen. Het gevoel niet serieus genomen te worden. 'Ik word genegeerd in mijn eigen huis.'",
    psychologie: "Bij ADHD is de auditieve verwerking vaak trager en minder efficiënt. Herhaling in volume helpt niet - herhaling in nabijheid en contact wel. Het kind heeft jouw fysieke nabijheid nodig om de boodschap te ontvangen.",
    stappen: [
      "Loop naar het kind toe, maak oogcontact, en raak het zacht aan (hand op schouder). Zeg dan pas je boodschap.",
      "Gebruik korte, concrete zinnen. Niet: 'Kun je alsjeblieft je spullen opruimen en je handen wassen want we gaan zo eten.' Wel: 'Handen wassen. Nu.'",
      "Laat het kind herhalen wat je zei. 'Wat ga je nu doen?' Dit activeert het werkgeheugen."
    ],
    voorbeeldzin: "Hey, ik heb iets voor je. Kijk me even aan. Top. Nu: handen wassen.",
    valkuil: "Vanuit de andere kamer blijven roepen en dan boos worden - het kind kan hier niets aan doen.",
    skillLink: "Grenzen",
    themes: ["adhd"]
  },
  {
    id: "gedrag-agressie-school",
    ageGroup: "4-7",
    situatie: "Agressief gedrag op school, ouders gebeld",
    icon: "🏫",
    watSpeeltInKind: "Het kind is overprikkeld, gefrustreerd, of sociaal afgewezen en heeft geen andere tools om met die gevoelens om te gaan dan fysiek reageren. Agressie is altijd de buitenkant van een onvervulde behoefte.",
    watSpeeltInVader: "Schaamte tegenover school. Angst dat je kind 'dat kind' wordt. Woede richting het kind ('hoe kun je') gemengd met bezorgdheid.",
    psychologie: "Agressief gedrag is een signaal, geen karaktertrek. Achter elke klap zit een gevoel dat het kind niet kon uiten. De taak is niet straffen maar het onderliggende gevoel leren herkennen en anders kanaliseren.",
    stappen: [
      "Reageer thuis niet met een tweede straf. Het kind is al gestraft op school. Zeg: 'Ik hoorde wat er gebeurde. Vertel eens wat er echt aan de hand was.'",
      "Benoem het gevoel achter het gedrag: 'Ik denk dat je je boos/verdrietig/gefrustreerd voelde. Klopt dat?' Help het kind de eigen emotie herkennen.",
      "Oefen samen alternatieven: 'Wat kun je doen als je zo boos wordt? Weglopen? Hulp vragen? Je vuisten ballen zonder te slaan?'"
    ],
    voorbeeldzin: "Slaan mag niet, dat weet je. Maar ik wil begrijpen wat je voelde. Vertel het me.",
    valkuil: "Dubbel straffen (thuis én school) zonder het verhaal te horen - het kind voelt zich onbegrepen en de agressie neemt toe.",
    skillLink: "Emotiecoaching",
    themes: ["gedragsproblemen"]
  },
  {
    id: "adhd-huiswerk-strijd",
    ageGroup: "4-7",
    situatie: "Huiswerk is een dagelijkse strijd (ADHD)",
    icon: "📚",
    watSpeeltInKind: "Het ADHD-brein vindt het extreem moeilijk om te focussen op taken die niet intrinsiek belonend zijn. Huiswerk is alles wat het brein niet wil: saai, abstract, en zonder directe beloning. Het kind ervaart het als fysiek ongemak.",
    watSpeeltInVader: "Frustratie en machteloosheid. Je ziet dat het kind het wel kan, maar niet doet. De dagelijkse strijd vreet aan je geduld en aan de relatie.",
    psychologie: "Bij ADHD is het dopaminesysteem anders. Het brein heeft extra motivatie-prikkels nodig om aan een taak te beginnen. Externe structuur, korte blokken en directe beloning werken beter dan 'gewoon doen'.",
    stappen: [
      "Maak het klein: 5 minuten werken, dan 3 minuten pauze. Timer erbij. Na 3 blokken een grotere beloning.",
      "Maak de omgeving prikkelarm: geen TV, geen broertje/zusje, opgeruimd bureau. Eventueel rustige muziek of noise-cancelling.",
      "Wees de externe structuur: zit erbij, wijs de volgende opgave aan, geef complimenten per kleine stap. Niet: 'doe maar' en weglopen."
    ],
    voorbeeldzin: "We doen 5 minuten samen. Daarna pauze. Je kunt dit. Ik help je.",
    valkuil: "Zeggen 'je moet gewoon even doorwerken' - bij ADHD IS 'even doorwerken' het probleem, niet de oplossing.",
    skillLink: "Autonomie",
    themes: ["adhd"]
  },
  {
    id: "adhd-voelt-zich-anders",
    ageGroup: "8-12",
    situatie: "Kind voelt zich 'anders' dan leeftijdsgenoten",
    icon: "🧩",
    watSpeeltInKind: "Het kind merkt steeds vaker dat het niet past bij de norm: te druk, te gevoelig, te intens, te vergeetachtig. Vergelijking met anderen leidt tot schaamte en een dalend zelfbeeld. 'Er is iets mis met mij.'",
    watSpeeltInVader: "Pijn om je kind te zien worstelen. De wens om het te 'fixen'. Eigen herinneringen aan buitensluiting worden soms geactiveerd.",
    psychologie: "Het zelfbeeld van een kind wordt voor een groot deel gevormd door hoe het gespiegeld wordt door belangrijke volwassenen. Als jij het verschil normaliseert en kracht benoemt, leert het kind zichzelf anders te zien.",
    stappen: [
      "Benoem het verschil als kracht: 'Jouw brein werkt anders. Dat betekent dat je dingen ziet en voelt die anderen missen.'",
      "Deel voorbeelden van succesvolle mensen met ADHD/hooggevoeligheid. Laat zien dat 'anders' niet 'minder' is.",
      "Creëer situaties waarin het kind zijn sterke kanten kan ervaren: sport, creatieve projecten, natuur - plekken waar het brein tot zijn recht komt."
    ],
    voorbeeldzin: "Jij bent niet raar. Jij bent anders. En anders zijn is niet verkeerd - het is bijzonder.",
    valkuil: "Het verschil bagatelliseren ('iedereen is wel een beetje ADHD') of juist problematiseren ('je moet leren normaal te doen').",
    skillLink: "Verbinding",
    themes: ["adhd", "hooggevoelig"]
  },
  {
    id: "adhd-impulsief-sociaal",
    ageGroup: "8-12",
    situatie: "Impulsief gedrag leidt tot sociale problemen",
    icon: "💥",
    watSpeeltInKind: "Het kind reageert sneller dan het kan nadenken. Door de beurt praten, even wachten, subtiele sociale signalen oppikken - het ADHD-brein mist deze stappen. Het kind wil erbij horen maar saboteert zichzelf onbewust.",
    watSpeeltInVader: "Je hart breekt als je kind niet meer wordt uitgenodigd. Frustratie dat je kind 'het maar niet leert'. De neiging om sociale situaties te gaan vermijden.",
    psychologie: "Impulsiviteit bij ADHD is een executieve functie-stoornis, geen karakterfout. Het kind kan de 'rem' niet indrukken voordat de actie al is uitgevoerd. Training in sociale vaardigheden werkt het beste via oefenen, niet via uitleg.",
    stappen: [
      "Bereid sociale situaties voor: 'Straks bij het spelen - probeer eerst te kijken wat de anderen doen voordat je meedoet.'",
      "Oefen thuis met rollenspel. 'Ik ben je vriendje, we spelen een spelletje. Oefenen we even wachten op je beurt?'",
      "Na een incident: bespreek zonder oordeel. 'Wat gebeurde er? Wat voelde je? Wat zou je anders kunnen doen?' Help reflecteren zonder te straffen."
    ],
    voorbeeldzin: "Ik weet dat het snel gaat in je hoofd. We oefenen samen hoe je even kunt pauzeren voordat je reageert.",
    valkuil: "Het kind beschuldigen van opzet ('Je doet het expres') of sociaal isoleren als straf - dit versterkt het probleem.",
    skillLink: "Emotiecoaching",
    themes: ["adhd", "gedragsproblemen"]
  },
  {
    id: "adhd-motivatie-moeilijk",
    ageGroup: "8-12",
    situatie: "Motivatie vinden als alles moeilijk aanvoelt",
    icon: "🔋",
    watSpeeltInKind: "Na jaren worstelen met school, sociaal en thuis is de motivatie-tank leeg. Het kind verwacht te falen en probeert het dus maar niet meer. Vermijding is een bescherming tegen weer een teleurstelling.",
    watSpeeltInVader: "Frustratie over potentieel dat niet benut wordt. 'Ik weet dat je het kunt als je maar wilt.' De neiging om te pushen of te vergelijken met andere kinderen.",
    psychologie: "Motivatie komt niet voor actie - het komt door actie. Bij ADHD is de drempel om te beginnen onnatuurlijk hoog door het dopaminesysteem. Kleine successen bouwen motivatie op. De sleutel is de lat zo laag leggen dat beginnen makkelijk wordt.",
    stappen: [
      "Leg de lat lager dan je denkt. Niet 'maak je kamer schoon' maar 'leg drie dingen op hun plek'. Succes voelt goed en motiveert voor meer.",
      "Vier kleine overwinningen groot. 'Heb je die som af? Geweldig. Dat kostte moeite en je deed het.'",
      "Help het kind ontdekken wat wél energie geeft. Bouw schoolwerk en taken rond interesses en sterke kanten."
    ],
    voorbeeldzin: "Je hoeft het niet perfect te doen. Je hoeft alleen maar te beginnen. En ik begin met je mee.",
    valkuil: "Motiverende speeches houden ('je moet gewoon willen') - bij ADHD is 'willen' niet het probleem, 'kunnen beginnen' wel.",
    skillLink: "Autonomie",
    themes: ["adhd"]
  },
  {
    id: "adhd-tiener-weigert-hulp",
    ageGroup: "13-18",
    situatie: "Tiener weigert medicatie of hulp",
    icon: "🛡️",
    watSpeeltInKind: "De tiener wil normaal zijn en ervaart medicatie of hulp als bewijs dat er iets mis is. Autonomie is het belangrijkste thema in de adolescentie - hulp accepteren voelt als controle verliezen over het eigen leven.",
    watSpeeltInVader: "Angst voor de toekomst. Je ziet je kind worstelen en kunt niets doen. De verleiding om te dwingen of te dreigen is groot.",
    psychologie: "Autonomie is een basisbehoefte. Een tiener die gedwongen wordt tot hulp, ervaart geen hulp maar controle. De relatie moet veilig genoeg zijn om hulp vrijwillig te aanvaarden. Dit betekent: informeren, niet forceren.",
    stappen: [
      "Erken de autonomie: 'Het is jouw lichaam en jouw brein. Ik kan je niet dwingen en dat ga ik ook niet doen.'",
      "Deel informatie zonder oordeel: 'Dit is wat ik weet over hoe het werkt. Wil je het zelf lezen?'",
      "Houd de deur open: 'Als je ooit wilt praten over opties, ik ben er. Geen druk, geen oordeel.' En meen het."
    ],
    voorbeeldzin: "Ik respecteer dat je dit zelf wilt bepalen. Ik maak me wel zorgen. Mogen we er soms over praten?",
    valkuil: "Ultimatums stellen ('als je geen medicatie neemt, dan...') of de mening van het kind niet serieus nemen - dit vernietigt het vertrouwen.",
    skillLink: "Autonomie",
    themes: ["adhd"]
  },
  {
    id: "gedrag-woede-tiener",
    ageGroup: "13-18",
    situatie: "Woede-uitbarstingen bij tiener met gedragsproblemen",
    icon: "🔴",
    watSpeeltInKind: "Onder de woede zit vaak angst, schaamte of verdriet. De tiener heeft nooit geleerd om met intense emoties om te gaan en kent alleen de explosieve route. Het zenuwstelsel schakelt direct naar vecht-modus.",
    watSpeeltInVader: "Angst - fysiek soms ook, als de tiener groter wordt. Eigen woede die geactiveerd wordt. De neiging om terug te schreeuwen of te vluchten. Het gevoel te falen als vader.",
    psychologie: "Woede-uitbarstingen bij tieners met gedragsproblemen zijn vaak het gevolg van een langdurig ongereguleerd zenuwstelsel. De tiener heeft een volwassene nodig die de storm kan doorstaan zonder zelf te ontregelen. Jouw zelfregulatie is het medicijn.",
    stappen: [
      "Veiligheid eerst. Als het fysiek escaleert, maak afstand. 'Ik ga even naar de andere kamer. Niet omdat ik je verlaat, maar omdat ik ons allebei veilig wil houden.'",
      "Tijdens de uitbarsting: minimale woorden, lage stem, open houding. 'Ik ben er. Ik ga niet weg. We lossen dit op als het rustiger is.'",
      "Na de storm: herstelgesprek. 'Wat had je nodig? Wat kunnen we anders doen zodat het niet zo ver hoeft te komen?'"
    ],
    voorbeeldzin: "Ik ga niet tegen je schreeuwen. Ik wacht tot het rustiger is. Dan praten we.",
    valkuil: "Terugschreeuwen of fysiek ingrijpen uit eigen woede - dit escaleert de situatie en beschadigt de relatie langdurig.",
    skillLink: "Zelfregulatie",
    themes: ["gedragsproblemen"]
  },
  {
    id: "adhd-zelfbeeld-tiener",
    ageGroup: "13-18",
    situatie: "Zelfbeeld en zelfvertrouwen bij ADHD-tiener",
    icon: "🪞",
    watSpeeltInKind: "Jaren van falen, corrigeren en 'niet voldoen aan de norm' hebben een negatief zelfverhaal gecreëerd. De tiener denkt: 'Ik ben dom, ik ben lastig, ik kan niks.' Dit beïnvloedt alles: school, vriendschappen, toekomstbeeld.",
    watSpeeltInVader: "Verdriet om het zelfvertrouwen dat je kind mist. Schuldgevoel: had ik het anders moeten aanpakken? De wens om het te repareren met woorden die niet binnenkomen.",
    psychologie: "Zelfbeeld wordt gevormd door duizenden micro-interacties. Elke keer dat je de sterkte ziet in plaats van het tekort, schrijf je een nieuw stukje zelfverhaal. Dit is geen snelle fix maar een dagelijks proces van anders spiegelen.",
    stappen: [
      "Benoem dagelijks iets specifieks dat goed ging. Niet 'goed gedaan' maar 'Ik zag hoe je [concreet ding] deed. Dat vond ik knap.'",
      "Help de tiener zijn/haar eigen sterke kanten te benoemen. 'Waar ben jij goed in? Wat vinden anderen leuk aan jou?' Schrijf het samen op.",
      "Normaliseer fouten in je eigen leven. 'Ik maakte vandaag ook een fout op mijn werk. Dat hoort erbij. Fouten zijn leermomenten, geen bewijzen dat je waardeloos bent.'"
    ],
    voorbeeldzin: "Ik zie jou niet als je ADHD. Ik zie jou als een bijzonder mens dat soms extra uitdagingen heeft. En ik ben trots op je.",
    valkuil: "Alleen complimenten geven over prestaties ('mooi cijfer!') in plaats van over karakter en inspanning - dit versterkt het idee dat je alleen goed genoeg bent als je presteert.",
    skillLink: "Verbinding",
    themes: ["adhd"]
  },
];

// ═══════════════════════════════════════════════════════════════════════
// HOOGGEVOELIGHEID & PRIKKELVERWERKING (8 situaties)
// ═══════════════════════════════════════════════════════════════════════

export const HOOGGEVOELIG_HELP: HelpSituation[] = [
  {
    id: "hg-overprikkeld-feestje",
    ageGroup: "0-3",
    situatie: "Overprikkeld door feestje of drukke omgeving",
    icon: "🎈",
    watSpeeltInKind: "Het zenuwstelsel van een hooggevoelig kind verwerkt alle prikkels dieper en intenser. Muziek, licht, mensen, geuren - alles komt harder binnen. Het kind raakt overbelast en kan niet meer reguleren.",
    watSpeeltInVader: "Schaamte ('andere kinderen vinden het wel leuk'). Frustratie dat je kind niet gewoon mee kan doen. Onzekerheid: moet ik weggaan of doorzetten?",
    psychologie: "Hooggevoeligheid is een aangeboren temperamentstrek waarbij het zenuwstelsel prikkels dieper verwerkt. Dit is geen stoornis maar een kenmerk. Het kind heeft een lagere prikkeldrempel en bereikt sneller overbelasting. Vroeg ingrijpen voorkomt een volledige meltdown.",
    stappen: [
      "Herken de vroege signalen: glazige blik, friemelen, aan je vastklampen, stiller worden. Dit is het moment om in te grijpen.",
      "Neem het kind mee naar een rustige plek. 'We gaan even pauze nemen.' Geen uitleg nodig, gewoon doen.",
      "Bied sensorische rust: stil hoekje, knuffel, drinken, dimmen van prikkels. Na 10-15 minuten kan het kind vaak weer even meedoen."
    ],
    voorbeeldzin: "Ik zie dat het veel is voor je. We gaan even samen ergens rustig zitten. Goed zo.",
    valkuil: "Doorduwen omdat 'het kind er maar aan moet wennen' - bij hooggevoeligheid wen je niet aan overprikkeling, je raakt verder ontregeld.",
    skillLink: "Zelfregulatie",
    themes: ["hooggevoelig", "prikkelverwerking"]
  },
  {
    id: "hg-kleding-textuur",
    ageGroup: "0-3",
    situatie: "Extreem reageren op kleding of textuur",
    icon: "👕",
    watSpeeltInKind: "Het kind ervaart bepaalde textures als fysiek pijnlijk. Labels, naden, stugge stof - het voelt als schuurpapier op de huid. Dit is niet aanstellen maar een echt sensorisch signaal dat het brein als 'gevaar' interpreteert.",
    watSpeeltInVader: "Onbegrip en frustratie. 'Het is maar een sokje.' Tijdsdruk - je moet weg en je kind weigert alles aan te trekken. Twijfel of het kind je manipuleert.",
    psychologie: "Tactiele overgevoeligheid is een sensorische verwerkingsstijl waarbij het brein aanrakingssignalen intenser verwerkt. Het kind liegt niet en stelt niet aan. Het ervaart letterlijk meer ongemak dan jij bij dezelfde stof.",
    stappen: [
      "Neem de reactie serieus. 'Dat voelt niet fijn voor jou. Ik geloof je.' Dit alleen al verlaagt de stress.",
      "Zoek samen kleding die wél prettig voelt. Knip labels uit, kies zachte stoffen, laat het kind voelen voordat je koopt.",
      "Bouw een 'veilige' garderobe op: een paar outfits waarvan je weet dat ze werken. Leg deze klaar zodat de ochtend soepeler verloopt."
    ],
    voorbeeldzin: "Ik snap dat dit niet lekker voelt op je huid. We zoeken iets dat wél fijn is.",
    valkuil: "Het kind dwingen de kleding aan te houden ('stel je niet aan') - dit veroorzaakt langdurige stress en negatieve associaties met aankleden.",
    skillLink: "Emotiecoaching",
    themes: ["prikkelverwerking"]
  },
  {
    id: "hg-overweldigd-schooldag",
    ageGroup: "4-7",
    situatie: "Hooggevoelig kind overweldigd na schooldag",
    icon: "😶",
    watSpeeltInKind: "Het kind heeft de hele dag alle prikkels diep verwerkt: sociale interacties, geluiden, verwachtingen, emoties van anderen. Na school is de emmer vol. Thuis - de veilige plek - komt alles eruit: huilen, driftbuien, of juist volledig terugtrekken.",
    watSpeeltInVader: "Verwarring: het kind was op school 'braaf' maar thuis ontploft het. Je voelt je het emotionele vuilnisvat. Zorgen of school te veel is.",
    psychologie: "Dit heet 'restraint collapse': het kind houdt zich de hele dag in op school en laat thuis alles los. Dit is een teken van vertrouwen - het kind voelt zich veilig genoeg bij jou om te ontladen. Het is zwaar, maar het is gezond.",
    stappen: [
      "Plan een rustig landingsmoment na school. Geen vragen, geen activiteiten. Stilte, een snack, even liggen. Laat het kind ontladen.",
      "Stel geen vragen over school in het eerste halfuur. Later, tijdens een rustige activiteit, kun je voorzichtig vragen: 'Was er iets moois vandaag?'",
      "Bied sensorische ontlading: warm bad, trampoline, klei, buiten spelen. Help het zenuwstelsel terugkomen naar rust."
    ],
    voorbeeldzin: "Je hebt hard gewerkt vandaag hè? Rustig aan. We doen even niks.",
    valkuil: "Meteen vragen hoe het op school was of huiswerk eisen - het kind is nog niet terug in zijn 'window of tolerance' en kan dit niet aan.",
    skillLink: "Aanwezigheid",
    themes: ["hooggevoelig"]
  },
  {
    id: "hg-weigert-feestjes",
    ageGroup: "4-7",
    situatie: "Weigert naar feestjes of sociale activiteiten",
    icon: "🎉",
    watSpeeltInKind: "Het kind weet uit ervaring dat feestjes overweldigend zijn. De anticipatie-angst is soms erger dan het feestje zelf. Het kind beschermt zichzelf door te weigeren. Dit is geen luiheid maar zelfkennis in wording.",
    watSpeeltInVader: "Zorgen over socialisatie. 'Als het nooit gaat, krijgt het nooit vrienden.' Druk van andere ouders. De neiging om te pushen 'voor het kind zelf'.",
    psychologie: "Hooggevoelige kinderen hebben minder maar diepere sociale contacten nodig. De norm van 'overal meedoen' past niet bij elk kind. Respecteer de grenzen van het kind terwijl je voorzichtig de wereld groter maakt.",
    stappen: [
      "Neem de weigering serieus. 'Je wilt niet. Vertel eens wat je moeilijk vindt eraan?' Luister echt.",
      "Bied aanpassingen: 'We gaan een halfuurtje, en als het te veel wordt haal ik je op.' Of: 'Ik blijf in de buurt.'",
      "Creëer alternatieve sociale momenten die wél passen: één vriendje thuis, rustige activiteit, kleine groepjes. Bouw sociaal vertrouwen op in een veilige dosering."
    ],
    voorbeeldzin: "Je hoeft niet te gaan als je niet wilt. Maar zullen we kijken of er een manier is die wél fijn voelt?",
    valkuil: "Het kind dwingen om te gaan 'want anders wordt het nooit wat' - dit versterkt de angst en beschadigt het vertrouwen.",
    skillLink: "Autonomie",
    themes: ["hooggevoelig", "prikkelverwerking"]
  },
  {
    id: "hg-gepest-gevoeligheid",
    ageGroup: "8-12",
    situatie: "Hooggevoelig kind wordt gepest om gevoeligheid",
    icon: "😢",
    watSpeeltInKind: "Het kind wordt uitgelachen om huilen, om anders reageren, om 'te veel voelen'. Dit raakt de kern van wie het kind is. Het kind begint te geloven dat gevoelig zijn iets is om je voor te schamen.",
    watSpeeltInVader: "Woede richting de pesters. De impuls om het op te lossen. Pijn omdat je kind lijdt om wie het is. Mogelijk eigen ervaring met gepest worden wordt getriggerd.",
    psychologie: "Als een kind gepest wordt om een kernkenmerk (gevoeligheid), is de schade aan het zelfbeeld groot. De belangrijkste beschermfactor is een ouder die het kenmerk bevestigt als kracht. Jouw spiegel overruled die van de pesters.",
    stappen: [
      "Bevestig de gevoeligheid als kracht: 'Dat je zo voelt, dat is bijzonder. Niet iedereen kan dat. Het maakt je sterk, niet zwak.'",
      "Help met concrete strategieën: 'Wat kun je zeggen als ze iets vervelends zeggen? Laten we oefenen.' Rollenspel werkt krachtig.",
      "Schakel school in als het structureel is. Leg uit wat hooggevoeligheid is en wat het kind nodig heeft. Wees de advocaat van je kind."
    ],
    voorbeeldzin: "Dat ze je uitlachen zegt iets over hen, niet over jou. Jouw gevoeligheid is een superkracht. Ik meen het.",
    valkuil: "Zeggen 'trek je er niks van aan' of 'wees een beetje stoerder' - dit bevestigt de boodschap van de pesters: dat gevoelig zijn niet oké is.",
    skillLink: "Verbinding",
    themes: ["hooggevoelig"]
  },
  {
    id: "hg-emoties-na-school",
    ageGroup: "8-12",
    situatie: "Kan emoties niet reguleren na lange schooldag",
    icon: "🫠",
    watSpeeltInKind: "Na uren van indrukken verwerken, sociale interactie en concentratie is het regulatiesysteem uitgeput. Het kind heeft geen emotionele brandstof meer over. Kleine dingen worden enorm: een opmerking, een teleurstelling, een verandering in planning.",
    watSpeeltInVader: "Onmacht en frustratie. Je begrijpt niet waarom je kind 'opeens' ontploft om iets kleins. De neiging om te zeggen: 'dit is toch nergens voor nodig.'",
    psychologie: "Het 'window of tolerance' - de zone waarin je emoties kunt reguleren - is na een volle dag verkleind tot bijna nul. Het kind heeft geen emotioneel tekort maar een energietekort. Eerst opladen, dan pas verwachtingen stellen.",
    stappen: [
      "Herken dat het niet gaat om de directe trigger maar om een vol zenuwstelsel. 'Dit gaat niet over de koek. Je bent op.' Benoem het grotere plaatje.",
      "Bied eerst regulatie: beweging, stilte, natuur, eten. Praten komt later. Het brein heeft brandstof nodig.",
      "Bouw structureel ontladingsmomenten in de middag in. Na school: 30 minuten niets moeten. Dit voorkomt de dagelijkse explosie."
    ],
    voorbeeldzin: "Je hebt een lange dag gehad. Laten we eerst even opladen. De rest komt later.",
    valkuil: "De emotionele uitbarsting bestraffen of corrigeren - het kind kan er op dit moment letterlijk niets aan doen.",
    skillLink: "Zelfregulatie",
    themes: ["hooggevoelig", "prikkelverwerking"]
  },
  {
    id: "hg-tiener-trekt-terug",
    ageGroup: "13-18",
    situatie: "Hooggevoelig tiener trekt zich volledig terug",
    icon: "🏠",
    watSpeeltInKind: "De wereld is intens: sociale media, prestatiedruk, veranderende relaties, identiteitsvragen. De tiener beschermt zichzelf door zich af te sluiten. De kamer is het enige plekje waar de prikkels stoppen.",
    watSpeeltInVader: "Grote zorgen. Is dit normaal terugtrekken of depressie? De drang om in te grijpen. Het gevoel het contact te verliezen met je kind.",
    psychologie: "Terugtrekken is bij hooggevoelige tieners vaak een gezonde coping-strategie die uit de hand loopt. Het wordt problematisch als het kind niets meer doet wat energie geeft. De balans tussen respecteren en uitnodigen is de kern.",
    stappen: [
      "Observeer zonder direct in te grijpen. Eet het kind? Slaapt het? Heeft het nog enig sociaal contact? Zolang de basis intact is, gun het ruimte.",
      "Bied niet-verbale verbinding: een kop thee aan de deur, samen in stilte op de bank, een berichtje. Laat zien dat je er bent zonder te eisen.",
      "Als het aanhoudt (weken): bespreek je zorg eerlijk. 'Ik maak me zorgen omdat ik je niet meer zie. Hoe gaat het echt met je? Ik wil het weten.'"
    ],
    voorbeeldzin: "Ik hoef niet te weten wat er speelt. Maar ik wil dat je weet dat ik er ben. Altijd.",
    valkuil: "De deur eruit trappen met 'je moet eruit, het is niet gezond' - dit verbreekt het laatste stukje veiligheid dat de tiener voelt.",
    skillLink: "Aanwezigheid",
    themes: ["hooggevoelig"]
  },
  {
    id: "hg-prestatieangst",
    ageGroup: "13-18",
    situatie: "Prestatieangst en perfectionisme door gevoeligheid",
    icon: "📊",
    watSpeeltInKind: "De tiener voelt alles dieper - ook falen. Het perfectionisme is een bescherming: als ik alles perfect doe, voorkom ik de pijn van kritiek of teleurstelling. Maar de lat ligt zo hoog dat niets goed genoeg is, met verlamming als gevolg.",
    watSpeeltInVader: "Herkenning - misschien ben je zelf ook zo. Of juist onbegrip: 'je haalt toch goede cijfers?' De wens om druk weg te nemen maar niet weten hoe.",
    psychologie: "Perfectionisme bij hooggevoelige tieners is vaak angstgedreven: de angst om niet goed genoeg te zijn. Het is geen hoge standaard maar een vlucht voor falen. De oplossing is niet 'doe maar gewoon', maar het veilig maken om onperfect te zijn.",
    stappen: [
      "Model imperfectie. Deel je eigen fouten en mislukkingen openlijk. 'Weet je wat ik vandaag verkloot heb? En het wereld draait nog steeds.'",
      "Verschuif de focus van resultaat naar proces. Niet 'wat heb je gehaald?' maar 'Hoe heb je het aangepakt? Wat heb je geleerd?'",
      "Help de tiener het verschil te zien tussen gezonde ambitie en angstgedreven perfectie. 'Wil je dit omdat je het leuk vindt, of omdat je bang bent om te falen?'"
    ],
    voorbeeldzin: "Je hoeft niet perfect te zijn. Niet voor school, niet voor mij, niet voor jezelf. Je bent genoeg zoals je bent.",
    valkuil: "Alleen complimenten geven bij goede prestaties - dit bevestigt het verhaal dat je alleen waardevol bent als je presteert.",
    skillLink: "Reflectie",
    themes: ["hooggevoelig"]
  },
];
