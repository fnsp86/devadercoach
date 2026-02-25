import type { PulseQuestion, Scenario, TrainingItem } from './types';

// ═══════════════════════════════════════════════════════════════════
// LASTIG GEDRAG / ADHD / HOOGGEVOELIG / PRIKKELVERWERKING
// Themed content – alle tekst in het Nederlands
// Sensitief, empowerend, niet-labelen. Scheid het kind van het gedrag.
// ═══════════════════════════════════════════════════════════════════


// ═══════════════════════════════════════════════════════════════════
// SECTIE 1: PULSE QUESTIONS (20 vragen)
// Antwoord index 3 is altijd: "Kind niet gezien vandaag"
// Verdeeld over alle 8 skills
// ═══════════════════════════════════════════════════════════════════

export const GEDRAG_PULSE_QUESTIONS: PulseQuestion[] = [

  // ── AANWEZIGHEID ──────────────────────────────────────────────

  {
    id: 'pulse_gedrag_01',
    skill: 'Aanwezigheid',
    themes: ['adhd', 'prikkelverwerking'],
    vraag: 'Was je vandaag aanwezig bij je kind op een moment dat het druk of chaotisch was?',
    antwoorden: [
      'Ja, ik bleef rustig naast hem/haar zitten',
      'Ik was er, maar merkte dat ik me terugtrok',
      'Ik verliet de situatie omdat het me te veel werd',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen met veel energie of prikkels hebben juist in chaotische momenten een rustige vader nodig. Jouw kalmte is hun anker – niet jouw woorden, maar jouw aanwezigheid reguleert hun zenuwstelsel.',
    bron: 'Porges (2011) – Polyvagal Theory',
  },

  {
    id: 'pulse_gedrag_02',
    skill: 'Aanwezigheid',
    themes: ['hooggevoelig'],
    vraag: 'Heb je vandaag opgemerkt wanneer je kind overprikkeld raakte?',
    antwoorden: [
      'Ja, ik zag de signalen en reageerde op tijd',
      'Ik merkte het pas toen het al escaleerde',
      'Ik heb er niet op gelet',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Hooggevoelige kinderen geven vaak subtiele signalen voordat ze overprikkeld raken: stiller worden, friemelen, wegkijken. Hoe eerder je die opvangt, hoe minder uitbarstingen er komen.',
    bron: 'Aron (2002) – The Highly Sensitive Child',
  },

  // ── EMOTIECOACHING ────────────────────────────────────────────

  {
    id: 'pulse_gedrag_03',
    skill: 'Emotiecoaching',
    themes: ['gedragsproblemen', 'adhd'],
    vraag: 'Heeft je kind vandaag een emotionele uitbarsting gehad? Hoe reageerde je?',
    antwoorden: [
      'Ik benoemde het gevoel achter het gedrag',
      'Ik corrigeerde vooral het gedrag',
      'Ik werd zelf boos of gefrustreerd',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Achter elk lastig gedrag zit een onvervulde behoefte of een emotie die te groot is voor het kind. Als je het gevoel benoemt ("je bent gefrustreerd"), help je het brein de emotie te verwerken.',
    bron: 'Siegel & Bryson (2012) – The Whole-Brain Child',
  },

  {
    id: 'pulse_gedrag_04',
    skill: 'Emotiecoaching',
    themes: ['hooggevoelig', 'prikkelverwerking'],
    vraag: 'Heb je vandaag het verschil gezien tussen je kind dat verdrietig was en je kind dat overprikkeld was?',
    antwoorden: [
      'Ja, ik herkende het verschil en reageerde anders',
      'Ik twijfelde, maar probeerde het wel',
      'Nee, ik reageerde op al het huilen hetzelfde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Verdriet vraagt om troost en nabijheid. Overprikkeling vraagt om rust en minder input. Het onderscheid leren maken is een van de belangrijkste vaardigheden bij gevoelige kinderen.',
    bron: 'Aron (2002) – The Highly Sensitive Child',
  },

  {
    id: 'pulse_gedrag_05',
    skill: 'Emotiecoaching',
    themes: ['prikkelverwerking'],
    vraag: 'Reageerde je kind vandaag heftig op een prikkel die anderen niet opmerkten? Hoe ging je ermee om?',
    antwoorden: [
      'Ik nam het serieus en hielp hem of haar ermee',
      'Ik twijfelde of de reactie overdreven was',
      'Ik bagatelliseerde het: "Zo erg is het toch niet?"',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Sensorische reacties zijn nooit overdreven voor het kind dat ze ervaart. Het zenuwstelsel verwerkt de prikkel simpelweg anders. Erkenning is de eerste stap naar regulatie.',
    bron: 'Porges (2011) – Polyvagal Theory',
  },

  // ── ZELFREGULATIE ─────────────────────────────────────────────

  {
    id: 'pulse_gedrag_06',
    skill: 'Zelfregulatie',
    themes: ['adhd', 'gedragsproblemen'],
    vraag: 'Hoe goed lukte het vandaag om rustig te blijven toen je kind impulsief of wild gedrag vertoonde?',
    antwoorden: [
      'Goed – ik bleef kalm en reageerde bewust',
      'Het lukte deels, ik merkte frustratie maar hield me in',
      'Ik verloor mijn geduld en reageerde te heftig',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Impulsief gedrag van je kind activeert jouw eigen stresssysteem. Je kunt pas co-reguleren als je eerst jezelf reguleert. Een diepe ademhaling maakt al fysiologisch verschil.',
    bron: 'Barkley (2013) – Taking Charge of ADHD',
  },

  {
    id: 'pulse_gedrag_07',
    skill: 'Zelfregulatie',
    themes: ['prikkelverwerking', 'hooggevoelig'],
    vraag: 'Heb je vandaag een moment gehad waarop je merkte dat jij zelf overprikkeld raakte door het gedrag van je kind?',
    antwoorden: [
      'Ja, maar ik nam een korte pauze en herstelde',
      'Ja, ik voelde het maar deed er niets mee',
      'Ja, en het beinvloedde hoe ik reageerde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vaders van kinderen met veel energie of gevoeligheid lopen meer risico op overprikkeling zelf. Jouw eigen prikkeldrempel kennen is geen zwakte maar een voorwaarde om er te kunnen zijn.',
    bron: 'Van der Kolk (2014) – The Body Keeps the Score',
  },

  {
    id: 'pulse_gedrag_08',
    skill: 'Zelfregulatie',
    themes: ['adhd', 'gedragsproblemen'],
    vraag: 'Was er vandaag een moment waarop je bewust koos om NIET te reageren op provocerend gedrag?',
    antwoorden: [
      'Ja, ik liet het even en dat hielp',
      'Ik probeerde het maar greep toch in',
      'Nee, ik reageerde meteen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Niet elke provocatie vraagt om een reactie. Soms is het krachtigste wat je kunt doen: even niets. Dit heet strategisch negeren – je negeert het gedrag, niet het kind.',
    bron: 'Greene (2014) – The Explosive Child',
  },

  // ── GRENZEN ───────────────────────────────────────────────────

  {
    id: 'pulse_gedrag_09',
    skill: 'Grenzen',
    themes: ['adhd', 'gedragsproblemen'],
    vraag: 'Hoe ging het vandaag met grenzen stellen bij je kind?',
    antwoorden: [
      'Ik was duidelijk en warm – het ging goed',
      'Ik stelde grenzen maar voelde me schuldig',
      'Ik vermeed grenzen omdat ik geen conflict wilde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die moeite hebben met impulscontrole hebben juist meer behoefte aan duidelijke, voorspelbare grenzen. Grenzen zijn geen straf maar structuur – ze bieden veiligheid.',
    bron: 'Barkley (2013) – Taking Charge of ADHD',
  },

  {
    id: 'pulse_gedrag_10',
    skill: 'Grenzen',
    themes: ['gedragsproblemen', 'prikkelverwerking'],
    vraag: 'Lukte het vandaag om een grens te herhalen zonder harder of bozer te worden?',
    antwoorden: [
      'Ja, ik herhaalde rustig en consequent',
      'Ik moest het meerdere keren zeggen en werd luider',
      'Ik gaf op en liet het gaan',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Een grens die je kalm herhaalt werkt beter dan eentje die je schreeuwt. Het kind hoort niet je woorden maar voelt je toon. Herhaling zonder escalatie is een teken van kracht.',
    bron: 'Siegel & Bryson (2014) – No-Drama Discipline',
  },

  // ── AUTONOMIE ─────────────────────────────────────────────────

  {
    id: 'pulse_gedrag_11',
    skill: 'Autonomie',
    themes: ['adhd'],
    vraag: 'Heb je je kind vandaag iets zelf laten doen, ook al ging het langzamer of rommeliger?',
    antwoorden: [
      'Ja, ik gaf ruimte en het lukte',
      'Ik probeerde het maar nam het toch over',
      'Nee, ik deed het zelf – ging sneller',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen met concentratieproblemen hebben extra oefentijd nodig voor zelfstandigheid. Elke keer dat je het overneemt, ontneem je een leerkans. Geduld is hier de sleutel.',
    bron: 'Barkley (2013) – Taking Charge of ADHD',
  },

  {
    id: 'pulse_gedrag_12',
    skill: 'Autonomie',
    themes: ['hooggevoelig', 'prikkelverwerking'],
    vraag: 'Heeft je kind vandaag een eigen keuze mogen maken in een lastige situatie?',
    antwoorden: [
      'Ja, ik bood twee opties en het kind koos zelf',
      'Ik wilde het maar nam toch de regie',
      'Nee, ik besliste alles om gedoe te voorkomen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Gevoelige kinderen floreren wanneer ze keuzevrijheid ervaren binnen veilige kaders. Twee opties aanbieden geeft controle zonder overweldiging.',
    bron: 'Aron (2002) – The Highly Sensitive Child',
  },

  // ── HERSTEL ───────────────────────────────────────────────────

  {
    id: 'pulse_gedrag_13',
    skill: 'Herstel',
    themes: ['gedragsproblemen', 'adhd'],
    vraag: 'Was er vandaag een conflict met je kind? Heb je daarna hersteld?',
    antwoorden: [
      'Ja, ik heb sorry gezegd of verbinding gezocht',
      'Er was conflict maar ik wist niet hoe te herstellen',
      'Ik deed alsof er niets was gebeurd',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Herstel na een conflict is belangrijker dan het voorkomen ervan. Een vader die zegt "dat was niet oke van mij" leert zijn kind dat relaties tegen een stootje kunnen en dat fouten hersteld mogen worden.',
    bron: 'Tronick (2007) – The Neurobehavioral and Social-Emotional Development of Infants and Children',
  },

  {
    id: 'pulse_gedrag_14',
    skill: 'Herstel',
    themes: ['adhd', 'gedragsproblemen'],
    vraag: 'Heb je vandaag na een moeilijk moment bewust opnieuw verbinding gemaakt met je kind?',
    antwoorden: [
      'Ja, ik zocht het kind op en we praatten erover',
      'Ik wilde het maar het moment ging voorbij',
      'Nee, ik had er geen energie meer voor',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Bij kinderen met veel conflictmomenten is herstel extra belangrijk. Elk hersteld moment bouwt aan het besef: "Papa blijft er ook als het moeilijk is." Dat is de kern van veilige hechting.',
    bron: 'Siegel & Hartzell (2003) – Parenting from the Inside Out',
  },

  // ── VERBINDING ────────────────────────────────────────────────

  {
    id: 'pulse_gedrag_15',
    skill: 'Verbinding',
    themes: ['adhd', 'hooggevoelig'],
    vraag: 'Heb je vandaag iets positiefs gezien in je kind, los van het gedrag?',
    antwoorden: [
      'Ja, ik zag kwaliteiten die niets met gedrag te maken hadden',
      'Ik moest moeite doen maar het lukte',
      'Eerlijk gezegd zag ik vooral het lastige gedrag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die veel gecorrigeerd worden, vergeten soms wie ze zijn los van hun gedrag. Als jij hun creativiteit, humor of energie benoemt, herinner je hen eraan dat ze meer zijn dan hun moeilijke momenten.',
    bron: 'Perry (2006) – The Boy Who Was Raised as a Dog',
  },

  {
    id: 'pulse_gedrag_16',
    skill: 'Verbinding',
    themes: ['adhd', 'gedragsproblemen'],
    vraag: 'Heb je vandaag bewust de goede momenten van je kind benoemd?',
    antwoorden: [
      'Ja, ik gaf specifiek compliment op goed gedrag',
      'Ik dacht het maar zei het niet hardop',
      'Nee, ik was vooral bezig met corrigeren',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen met druk gedrag krijgen gemiddeld vijf keer zoveel negatieve als positieve opmerkingen per dag. Die balans omkeren is het krachtigste wat je kunt doen voor jullie relatie.',
    bron: 'Barkley (2013) – Taking Charge of ADHD',
  },

  {
    id: 'pulse_gedrag_17',
    skill: 'Verbinding',
    themes: ['prikkelverwerking', 'hooggevoelig'],
    vraag: 'Heb je vandaag op een rustig moment samen iets gedaan met je kind?',
    antwoorden: [
      'Ja, we hadden een fijn kalm moment samen',
      'Even, maar het werd al snel weer druk',
      'Nee, er was geen rust vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Verbinding hoeft niet groots te zijn. Vijf minuten samen rustig een boek lezen of naast elkaar zitten telt. Vooral voor kinderen die snel overprikkeld raken, zijn stille verbindingsmomenten goud waard.',
    bron: 'Porges (2011) – Polyvagal Theory',
  },

  // ── REFLECTIE ─────────────────────────────────────────────────

  {
    id: 'pulse_gedrag_18',
    skill: 'Reflectie',
    themes: ['gedragsproblemen', 'hooggevoelig'],
    vraag: 'Heb je vandaag stilgestaan bij waarom je kind deed wat het deed?',
    antwoorden: [
      'Ja, ik dacht na over wat erachter zat',
      'Even, maar ik liet het los',
      'Nee, ik was vooral bezig met de dag doorkomen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De vraag "wat is er met dit kind aan de hand?" is altijd krachtiger dan "wat mankeert dit kind?" Het eerste opent begrip, het tweede sluit af.',
    bron: 'Greene (2014) – The Explosive Child',
  },

  {
    id: 'pulse_gedrag_19',
    skill: 'Reflectie',
    themes: ['adhd', 'prikkelverwerking'],
    vraag: 'Heb je vandaag nagedacht over welke situaties het lastigst zijn voor je kind?',
    antwoorden: [
      'Ja, ik zag een patroon en kan daar iets mee',
      'Ik merkte iets maar weet niet wat ermee te doen',
      'Nee, elke dag voelt hetzelfde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Lastig gedrag is zelden willekeurig. Het volgt patronen: bepaalde tijden, plekken of overgangen. Als je die patronen herkent, kun je vooruitlopen in plaats van achter de feiten aan rennen.',
    bron: 'Barkley (2013) – Taking Charge of ADHD',
  },

  {
    id: 'pulse_gedrag_20',
    skill: 'Reflectie',
    themes: ['adhd', 'hooggevoelig', 'gedragsproblemen'],
    vraag: 'Als je terugkijkt op vandaag: hoe voel je je als vader van dit kind?',
    antwoorden: [
      'Trots – ik deed mijn best en dat is genoeg',
      'Gemengd – sommige dingen gingen goed, andere niet',
      'Moedeloos – het voelt alsof niets werkt',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vader zijn van een kind dat extra van je vraagt is zwaar. Het feit dat je hierover nadenkt, betekent dat je een betrokken vader bent. Dat is al meer dan veel kinderen krijgen.',
    bron: 'Perry & Szalavitz (2017) – The Boy Who Was Raised as a Dog',
  },
];


// ═══════════════════════════════════════════════════════════════════
// SECTIE 2: TRAINING / ARENA QUIZ (40 vragen, 5 per skill)
// order begint bij 31
// ═══════════════════════════════════════════════════════════════════

export const GEDRAG_TRAINING: TrainingItem[] = [

  // ── AANWEZIGHEID (5 vragen) ───────────────────────────────────

  {
    id: 'gedrag_quiz_aa_1',
    skill: 'Aanwezigheid',
    type: 'quiz',
    difficulty: 'basis',
    order: 31,
    themes: ['adhd', 'prikkelverwerking'],
    question: 'Daan (5) rent door de kamer, gooit kussens, klimt op de bank en kan niet stilzitten. Je hebt al drie keer gezegd dat hij moet stoppen. Wat is de meest effectieve vorm van aanwezigheid?',
    context: 'Kinderen met veel bewegingsdrang zoeken vaak sensorische input. Dit is geen ongehoorzaamheid maar een lichaam dat prikkels nodig heeft.',
    options: [
      { id: 'a', text: 'Nog een keer duidelijk zeggen dat hij moet stoppen en dreigen met een consequentie', isCorrect: false, feedback: 'Herhaling van verbale instructies werkt niet als het lichaam prikkels zoekt. Je escaleert terwijl het kind fysieke regulatie nodig heeft.' },
      { id: 'b', text: 'Naast hem gaan zitten, hem aanraken en samen iets actiefs doen – naar buiten, stoeien, rennen', isCorrect: true, feedback: 'Goed! Je biedt aanwezigheid door mee te bewegen met zijn behoefte. Fysieke activiteit helpt zijn zenuwstelsel te reguleren.' },
      { id: 'c', text: 'Hem naar zijn kamer sturen om tot rust te komen', isCorrect: false, feedback: 'Alleen tot rust komen is moeilijk voor een kind dat prikkels zoekt. Hij heeft co-regulatie nodig, niet isolatie.' },
    ],
    explanation: 'Een kind dat beweegt is niet per se ongehoorzaam – het zenuwstelsel zoekt input om zichzelf te reguleren. Aanwezigheid betekent hier: meebewegen, niet tegenhouden.',
    research: 'Porges (2011) – The Polyvagal Theory; Barkley (2013) – Taking Charge of ADHD',
  },

  {
    id: 'gedrag_quiz_aa_2',
    skill: 'Aanwezigheid',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 32,
    themes: ['hooggevoelig'],
    question: 'Sanne (7) is na school stil en teruggetrokken. Ze geeft korte antwoorden en wil niet spelen. Je wilt er voor haar zijn. Wat werkt het beste?',
    options: [
      { id: 'a', text: 'Doorvragen: "Wat is er? Er is toch iets? Vertel het maar."', isCorrect: false, feedback: 'Doorvragen voelt als druk. Een gevoelig kind dat overprikkeld is heeft geen woorden maar rust nodig.' },
      { id: 'b', text: 'In dezelfde ruimte zijn zonder iets te vragen – gewoon aanwezig', isCorrect: true, feedback: 'Precies. Stille nabijheid geeft haar zenuwstelsel het signaal: je bent veilig, je hoeft niets. Woorden komen later.' },
      { id: 'c', text: 'Haar afleiden met iets leuks om haar uit die stemming te halen', isCorrect: false, feedback: 'Afleiding ontkent wat ze voelt. Ze heeft ruimte nodig om te verwerken, niet meer prikkels.' },
    ],
    explanation: 'Hooggevoelige kinderen verwerken de hele dag indrukken. Na school is hun emmer vol. De krachtigste aanwezigheid is dan: er zijn zonder iets te verwachten.',
    research: 'Aron (2002) – The Highly Sensitive Child',
  },

  {
    id: 'gedrag_quiz_aa_3',
    skill: 'Aanwezigheid',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 33,
    themes: ['adhd', 'gedragsproblemen'],
    question: 'Bram (8) wordt op een feestje steeds wilder en begint andere kinderen te duwen. Andere ouders kijken jou aan. Wat doe je?',
    options: [
      { id: 'a', text: 'Je haalt hem apart, gaat op zijn ooghoogte en zegt kalm: "Ik zie dat het druk is. Laten we even samen iets rustigs doen."', isCorrect: true, feedback: 'Je biedt nabijheid zonder schaamte. Je ziet zijn overprikkeling in plaats van zijn gedrag als probleem.' },
      { id: 'b', text: 'Je roept: "Bram, stop! Je doet weer vervelend!" om te laten zien dat je ingrijpt', isCorrect: false, feedback: 'Publieke correctie vergroot zijn schaamte en activeert zijn stresssysteem. Hij wordt er niet rustiger van, eerder wilder.' },
      { id: 'c', text: 'Je gaat naar huis – het feestje is duidelijk te veel voor hem', isCorrect: false, feedback: 'Soms is weggaan nodig, maar eerst proberen te reguleren is beter. Meteen weggaan kan als straf voelen.' },
    ],
    explanation: 'Drukke omgevingen zijn voor kinderen met concentratieproblemen als een radio op vol volume. Ze hebben je nabijheid nodig als regulerend anker, niet je correctie als extra druk.',
    research: 'Barkley (2013) – Taking Charge of ADHD; Perry (2006) – neurosequentieel model',
  },

  {
    id: 'gedrag_quiz_aa_4',
    skill: 'Aanwezigheid',
    type: 'quiz',
    difficulty: 'expert',
    order: 34,
    themes: ['prikkelverwerking', 'hooggevoelig'],
    question: 'Je kind (4) raakt in paniek van het geluid van de stofzuiger en kruipt weg achter de bank. Je partner zegt: "Stel je niet aan." Wat is de beste reactie?',
    options: [
      { id: 'a', text: 'Je gaat naar je kind toe, erkent de angst en biedt bescherming: "Dat geluid is eng voor je. Ik ben hier."', isCorrect: true, feedback: 'Je valideert de ervaring en biedt veiligheid. Het kind leert: mijn reacties worden serieus genomen, ook als anderen dat niet doen.' },
      { id: 'b', text: 'Je bent het eens met je partner – het kind moet leren dat een stofzuiger niet gevaarlijk is', isCorrect: false, feedback: 'Voor dit zenuwstelsel IS het geluid overweldigend. De sensorische ervaring is niet overdreven maar anders gereguleerd.' },
      { id: 'c', text: 'Je zet de stofzuiger uit en stelt voor om later te zuigen als het kind slaapt', isCorrect: false, feedback: 'De omgeving aanpassen helpt op korte termijn. Maar het kind heeft ook co-regulatie nodig om te leren dat het veilig is bij jou.' },
    ],
    explanation: 'Prikkelgevoeligheid is neurologisch: het zenuwstelsel verwerkt input anders. "Stel je niet aan" is als zeggen tegen iemand met bijziendheid: "Kijk gewoon beter." Jouw rol als vader: erkennen, beschermen, begeleiden.',
    research: 'Aron (2002) – The Highly Sensitive Child; Porges (2011) – Polyvagal Theory',
  },

  {
    id: 'gedrag_quiz_aa_5',
    skill: 'Aanwezigheid',
    type: 'quiz',
    difficulty: 'basis',
    order: 35,
    themes: ['adhd'],
    question: 'Luuk (6) praat aan een stuk door – van het ene onderwerp naar het andere, zonder pauze. Je merkt dat je afhaakt. Wat is de meest aanwezige reactie?',
    options: [
      { id: 'a', text: '"Kun je even stoppen? Papa kan je niet meer volgen."', isCorrect: false, feedback: 'Dit voelt voor je kind als afwijzing van zijn enthousiasme. Hij kan het waarschijnlijk niet helpen – zijn brein werkt zo.' },
      { id: 'b', text: 'Je luistert naar de energie achter de woorden in plaats van naar elk woord, en knikt mee', isCorrect: true, feedback: 'Goed! Je hoeft niet elk woord te volgen. Luisteren naar de emotie en energie is genoeg. Je kind voelt dat je er bent.' },
      { id: 'c', text: 'Je doet alsof je luistert terwijl je iets anders denkt', isCorrect: false, feedback: 'Kinderen voelen schijnluisteren feilloos. Dit ondermijnt hun vertrouwen in jouw beschikbaarheid.' },
    ],
    explanation: 'Kinderen met veel energie in hun hoofd hebben soms een mond die achter hun gedachten aan rent. Ze zoeken geen perfect luisterende vader – ze zoeken er eentje die er echt is.',
    research: 'Barkley (2013) – Taking Charge of ADHD',
  },

  // ── EMOTIECOACHING (5 vragen) ─────────────────────────────────

  {
    id: 'gedrag_quiz_ec_1',
    skill: 'Emotiecoaching',
    type: 'quiz',
    difficulty: 'basis',
    order: 36,
    themes: ['gedragsproblemen'],
    question: 'Emma (5) schopt tegen de tafel en schreeuwt "IK HAAT JE!" omdat ze geen ijsje mag. Wat is de beste eerste reactie?',
    options: [
      { id: 'a', text: '"Zo praat je niet tegen mij! Naar je kamer, nu!"', isCorrect: false, feedback: 'Je reageert op de woorden, niet op de emotie. "Ik haat je" betekent bij een kleuter: "Ik voel iets enorms en weet niet wat ik ermee moet."' },
      { id: 'b', text: '"Je bent heel boos dat je geen ijsje krijgt. Schoppen mag niet, maar boos zijn wel."', isCorrect: true, feedback: 'Perfect. Je scheidt het gevoel van het gedrag. De emotie mag er zijn, het schoppen niet. Dit is de kern van emotiecoaching.' },
      { id: 'c', text: '"Oke dan, je krijgt het ijsje. Maar dit is de laatste keer."', isCorrect: false, feedback: 'Toegeven onder druk leert haar dat schreeuwen en schoppen effectief is. Het patroon wordt sterker.' },
    ],
    explanation: 'De sleutel is het scheiden van emotie en gedrag. "Ik haat je" is geen aanval maar een noodkreet. Erken de emotie, begrens het gedrag – in die volgorde.',
    research: 'Gottman (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'gedrag_quiz_ec_2',
    skill: 'Emotiecoaching',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 37,
    themes: ['adhd', 'gedragsproblemen'],
    question: 'Tim (9) raakt gefrustreerd bij huiswerk. Hij gooit zijn schrift door de kamer en zegt: "Ik ben dom, ik kan niks!" Wat is de beste emotiecoaching?',
    options: [
      { id: 'a', text: '"Je bent helemaal niet dom! Je kunt het wel, je moet gewoon beter je best doen."', isCorrect: false, feedback: 'Goed bedoeld, maar je ontkent zijn ervaring. "Beter je best doen" is precies wat hij niet kan op dit moment – zijn frustratie blokkeert zijn prefrontale cortex.' },
      { id: 'b', text: '"Ik zie dat je gefrustreerd bent. Dit voelt oneerlijk voor je – je probeert het maar het lukt niet. Dat is heel frustrerend."', isCorrect: true, feedback: 'Uitstekend. Je benoemt het gevoel en de achterliggende ervaring. Dit helpt hem om de frustratie te verwerken voordat je naar een oplossing zoekt.' },
      { id: 'c', text: '"We stoppen met huiswerk, het heeft geen zin als je zo boos bent."', isCorrect: false, feedback: 'Stoppen is soms nodig, maar eerst de emotie erkennen. Anders leert hij: als ik boos word, hoef ik niet verder. Bovendien mis je het coachmoment.' },
    ],
    explanation: 'Kinderen met concentratieproblemen ervaren dagelijks faalervaringen. Hun zelfbeeld wordt aangetast. Emotiecoaching hier betekent: zijn frustratie erkennen zodat hij leert dat het gevoel er mag zijn.',
    research: 'Barkley (2013) – Taking Charge of ADHD; Siegel (2012) – The Whole-Brain Child',
  },

  {
    id: 'gedrag_quiz_ec_3',
    skill: 'Emotiecoaching',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 38,
    themes: ['hooggevoelig', 'prikkelverwerking'],
    question: 'Sofie (6) barst in huilen uit als je haar jas niet goed dichtritst. Het lijkt buitenproportioneel. Wat klopt neurologisch?',
    options: [
      { id: 'a', text: 'Ze doet dit om aandacht te krijgen en je moet het negeren zodat het stopt', isCorrect: false, feedback: 'Bij een gevoelig kind is de reactie niet manipulatief maar neurologisch. Haar emmer is vol en de rits was de druppel.' },
      { id: 'b', text: 'Ze is hooggevoelig – dit is de druppel na een volle dag. Haar zenuwstelsel is overbelast en de rits was het breekpunt', isCorrect: true, feedback: 'Juist. Bij hooggevoeligheid is de beker sneller vol. De rits is niet de oorzaak maar de druppel. Erken de overbelasting, niet alleen het moment.' },
      { id: 'c', text: 'Ze is moe en heeft een slechte dag – morgen gaat het beter als ze heeft geslapen', isCorrect: false, feedback: 'Vermoeidheid speelt mee, maar het patroon is groter. Dit kind verwerkt de hele dag meer dan gemiddeld en dat stapelt op.' },
    ],
    explanation: 'Hooggevoelige kinderen nemen meer waar en verwerken dieper. Kleine triggers kunnen grote reacties geven omdat het hele systeem al op scherp staat. De kunst is de overbelasting zien, niet alleen de trigger.',
    research: 'Aron (2002) – The Highly Sensitive Child',
  },

  {
    id: 'gedrag_quiz_ec_4',
    skill: 'Emotiecoaching',
    type: 'quiz',
    difficulty: 'expert',
    order: 39,
    themes: ['adhd', 'gedragsproblemen'],
    question: 'Je zoon (8) heeft op school een andere jongen geduwd. De juf belt je. Als je thuiskomt zegt hij: "Hij begon!" Hoe coach je deze situatie?',
    options: [
      { id: 'a', text: '"Het maakt niet uit wie begon. Jij duwt niet. Punt."', isCorrect: false, feedback: 'De grens is terecht, maar je slaat de emotie over. Hij voelt zich nu onbegrepen en schuldig. Er is geen ruimte om te leren.' },
      { id: 'b', text: '"Vertel eens wat er precies gebeurde. Hoe voelde je je op dat moment?"', isCorrect: true, feedback: 'Goed. Je onderzoekt eerst zijn beleving. Van daaruit kun je de emotie erkennen EN het gedrag bespreken. De volgorde maakt het verschil.' },
      { id: 'c', text: '"Maak je geen zorgen, het was vast niet zo erg."', isCorrect: false, feedback: 'Je bagatelliseert en mist de leerkans. Hij moet leren wat er in hem gebeurde en hoe hij het anders kan aanpakken.' },
    ],
    explanation: 'Kinderen die impulsief reageren, doen dat niet uit boosaardigheid maar omdat hun rem niet snel genoeg werkt. Eerst begrijpen, dan grenzen – zo leert hij zijn eigen patronen herkennen.',
    research: 'Greene (2014) – The Explosive Child; Barkley (2013) – Taking Charge of ADHD',
  },

  {
    id: 'gedrag_quiz_ec_5',
    skill: 'Emotiecoaching',
    type: 'quiz',
    difficulty: 'basis',
    order: 40,
    themes: ['hooggevoelig'],
    question: 'Mila (4) weigert naar een verjaardagsfeestje te gaan. Ze zegt: "Het is te druk." Wat is de beste reactie?',
    options: [
      { id: 'a', text: '"Je moet wel gaan, anders is het vriendinnetje verdrietig."', isCorrect: false, feedback: 'Je legt schuldgevoel op haar schouders. Ze voelt al stress – daar komt nu ook schuld bij. Dat maakt het erger.' },
      { id: 'b', text: '"Je vindt het spannend omdat er veel kinderen zijn. Zullen we samen een plan maken?"', isCorrect: true, feedback: 'Je erkent haar gevoel en biedt regie. Samen een plan maken (bijv. eerst even kijken, jij blijft erbij) geeft haar controle.' },
      { id: 'c', text: '"We gaan gewoon even kijken, als je het niet leuk vindt gaan we weer weg."', isCorrect: false, feedback: 'De intentie is goed, maar je slaat de emotie-erkenning over. Eerst valideren, dan pas een oplossing bieden.' },
    ],
    explanation: 'Gevoelige kinderen die drukte vermijden zijn niet verlegen of lastig – hun zenuwstelsel voorspelt overweldiging. Help ze met een plan, niet met een duw.',
    research: 'Aron (2002) – The Highly Sensitive Child',
  },

  // ── ZELFREGULATIE (5 vragen) ──────────────────────────────────

  {
    id: 'gedrag_quiz_zr_1',
    skill: 'Zelfregulatie',
    type: 'quiz',
    difficulty: 'basis',
    order: 41,
    themes: ['adhd', 'gedragsproblemen'],
    question: 'Je kind (6) heeft voor de derde keer vandaag iets kapotgemaakt. Je voelt woede opkomen. Welke fysiologische techniek werkt het snelst om jezelf te reguleren?',
    options: [
      { id: 'a', text: 'Tien tellen in je hoofd', isCorrect: false, feedback: 'Tellen is cognitief – het gebruikt je prefrontale cortex die onder stress al overbelast is. Het werkt minder dan je denkt.' },
      { id: 'b', text: 'Een lange, langzame uitademing – langer dan je inadming', isCorrect: true, feedback: 'Juist. Een verlengde uitademing activeert de nervus vagus en schakelt je parasympathisch zenuwstelsel in. Dit kalmeert fysiologisch in seconden.' },
      { id: 'c', text: 'De kamer verlaten en pas terugkomen als je gekalmeerd bent', isCorrect: false, feedback: 'Weglopen kan nodig zijn, maar je kind heeft op dat moment juist co-regulatie nodig. Eerst ademhalen, dan kijken of je kunt blijven.' },
    ],
    explanation: 'Je autonome zenuwstelsel reageert sneller op ademhaling dan op gedachten. Een lange uitademing (bijv. 4 seconden in, 7 seconden uit) is de snelste reset die er is.',
    research: 'Porges (2011) – The Polyvagal Theory',
  },

  {
    id: 'gedrag_quiz_zr_2',
    skill: 'Zelfregulatie',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 42,
    themes: ['gedragsproblemen'],
    question: 'Stijn (7) ligt krijsend op de grond in de supermarkt. Mensen kijken. Je voelt schaamte en paniek. Wat gebeurt er in jouw brein?',
    context: 'Schaamte is een van de sterkste triggers voor vaders om vanuit reactie te handelen.',
    options: [
      { id: 'a', text: 'Je prefrontale cortex analyseert de situatie helder en kiest de beste aanpak', isCorrect: false, feedback: 'Onder sociale druk en schaamte gaat jouw PFC ook deels offline. Je schakelt over naar automatische overlevingsreacties.' },
      { id: 'b', text: 'Je amygdala registreert sociale dreiging (de blikken) en activeert fight/flight – je wilt vluchten of hard ingrijpen', isCorrect: true, feedback: 'Juist. Schaamte activeert dezelfde hersengebieden als fysiek gevaar. Dat verklaart waarom je in het openbaar sneller schreeuwt of toegeeft dan thuis.' },
      { id: 'c', text: 'Je brein functioneert normaal maar de situatie is gewoon objectief stressvol', isCorrect: false, feedback: 'De stress is niet alleen situationeel – schaamte kaapt je brein net zo effectief als bij je kind. Herkenning hiervan is stap een.' },
    ],
    explanation: 'Als vader van een kind met heftig gedrag is openbare schaamte een van de zwaarste triggers. Weten dat schaamte jouw brein kaapt helpt je om er bewust mee om te gaan.',
    research: 'Van der Kolk (2014) – The Body Keeps the Score',
  },

  {
    id: 'gedrag_quiz_zr_3',
    skill: 'Zelfregulatie',
    type: 'quiz',
    difficulty: 'expert',
    order: 43,
    themes: ['adhd', 'hooggevoelig'],
    question: 'Je merkt dat je na een intensieve dag met je kind een kort lontje hebt. Je partner maakt een opmerking en je bijt van je af. Wat zegt de wetenschap hierover?',
    options: [
      { id: 'a', text: 'Je partner heeft een punt – je moet beter leren omgaan met stress', isCorrect: false, feedback: 'Dit is een oordeel, geen inzicht. Wat er werkelijk gebeurt is fysiologisch: je regulatiecapaciteit is op.' },
      { id: 'b', text: 'Zelfregulatie is eindig – na een dag vol co-regulatie is je "regulatietank" leeg en ben je vatbaarder voor uitbarstingen', isCorrect: true, feedback: 'Precies. Zelfcontrole put uit dezelfde bron als spierarbeid. Na een dag co-reguleren is je tank op. Dit is normaal, niet zwak.' },
      { id: 'c', text: 'Je moet meer ontspanning inbouwen zodat je beter tegen stress kunt', isCorrect: false, feedback: 'Ontspanning helpt, maar het punt is dieper: herken dat je tank leeg is, communiceer dat, en vraag hulp voor het te laat is.' },
    ],
    explanation: 'Ouders van kinderen die veel co-regulatie nodig hebben, zijn aan het eind van de dag letterlijk uitgeput in hun zelfregulatie. Dit erkennen – naar jezelf en je partner – is geen excuus maar noodzaak.',
    research: 'Van der Kolk (2014) – The Body Keeps the Score',
  },

  {
    id: 'gedrag_quiz_zr_4',
    skill: 'Zelfregulatie',
    type: 'quiz',
    difficulty: 'basis',
    order: 44,
    themes: ['gedragsproblemen', 'prikkelverwerking'],
    question: 'Je kind (5) slaat je tijdens een driftbui. Je eerste impuls is om terug te pakken of hard "AU!" te roepen. Wat is de beste strategie?',
    options: [
      { id: 'a', text: 'Stevig maar rustig zijn handen vasthouden en zeggen: "Ik laat je niet slaan. Ik ben hier."', isCorrect: true, feedback: 'Goed. Je beschermt jezelf, stelt een fysieke grens en biedt tegelijk veiligheid. Kracht en kalmte samen – dat is co-regulatie.' },
      { id: 'b', text: 'Hard "AU!" roepen zodat hij schrikt en stopt', isCorrect: false, feedback: 'Schrikken stopt misschien het gedrag maar vergroot de stress. Zijn zenuwstelsel registreert: papa is ook onveilig geworden.' },
      { id: 'c', text: 'Weglopen zodat hij leert dat slaan betekent dat papa vertrekt', isCorrect: false, feedback: 'Verlating tijdens een piek is het ergste voor een jong zenuwstelsel. Het kind leert: als ik het moeilijkst heb, verdwijnt papa.' },
    ],
    explanation: 'Een kind dat slaat is een kind in nood, niet een kind dat straf verdient. Stevig begrenzen met een warme stem is de moeilijkste maar krachtigste reactie.',
    research: 'Siegel & Bryson (2014) – No-Drama Discipline; Perry (2006) – neurosequentieel model',
  },

  {
    id: 'gedrag_quiz_zr_5',
    skill: 'Zelfregulatie',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 45,
    themes: ['adhd'],
    question: 'Je hebt je kind (8) net voor de vierde keer gevraagd om schoenen aan te doen. Hij reageert niet. Je voelt irritatie groeien. Welk inzicht helpt je om te reguleren?',
    options: [
      { id: 'a', text: 'Hij doet het expres om je te testen – als je nu niet ingrijpt, verlies je gezag', isCorrect: false, feedback: 'Dit is een interpretatie die je woede voedt. De werkelijkheid: zijn werkgeheugen is beperkt en je stem is achtergrondgeluid geworden.' },
      { id: 'b', text: 'Zijn werkgeheugen is beperkt – de instructie is binnen seconden weg, niet uit onwil maar uit neurologische beperking', isCorrect: true, feedback: 'Juist. Bij ADHD is het werkgeheugen korter. Hij hoort je wel, maar de instructie verdwijnt als een post-it in de wind. Herhalen zonder frustratie is de sleutel.' },
      { id: 'c', text: 'Hij is gewoon niet gemotiveerd genoeg – een beloning zou helpen', isCorrect: false, feedback: 'Motivatie helpt soms, maar het kernprobleem is werkgeheugen. Beloningen helpen niet als de instructie al verdwenen is.' },
    ],
    explanation: 'Het werkgeheugen bij ADHD is gemiddeld 30% korter. Je kind vergeet de instructie niet om je te pesten – het brein laat de informatie letterlijk los. Visuele reminders en nabijheid helpen meer dan herhalen.',
    research: 'Barkley (2013) – Taking Charge of ADHD',
  },

  // ── GRENZEN (5 vragen) ────────────────────────────────────────

  {
    id: 'gedrag_quiz_gr_1',
    skill: 'Grenzen',
    type: 'quiz',
    difficulty: 'basis',
    order: 46,
    themes: ['adhd', 'gedragsproblemen'],
    question: 'Max (6) kan nooit stoppen met gamen. Elke keer als de tijd om is, krijgt hij een driftbui. Welke aanpak werkt structureel?',
    options: [
      { id: 'a', text: 'Hem laten gamen tot hij er zelf mee stopt', isCorrect: false, feedback: 'Kinderen met ADHD hebben moeite met zelfregulatie bij beeldschermen. Ze stoppen niet zelf – de dopamine-loop is te sterk.' },
      { id: 'b', text: 'Vooraf een timer zetten, 5 minuten van tevoren waarschuwen, en dan consequent stoppen – elke keer hetzelfde', isCorrect: true, feedback: 'Goed! Voorspelbaarheid vermindert weerstand. De timer maakt jou niet de vijand – de afspraak is de grens, niet papa.' },
      { id: 'c', text: 'Gamen helemaal verbieden om het probleem te voorkomen', isCorrect: false, feedback: 'Totaalverbod creëert machtsstrijd en leert hem niet omgaan met grenzen. Begrenzen is beter dan verbieden.' },
    ],
    explanation: 'Kinderen met aandachtsproblemen hebben externe structuur nodig waar ze zelf nog geen interne structuur hebben. Consistente rituelen rondom moeilijke overgangen zijn effectiever dan willekeurige grenzen.',
    research: 'Barkley (2013) – Taking Charge of ADHD',
  },

  {
    id: 'gedrag_quiz_gr_2',
    skill: 'Grenzen',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 47,
    themes: ['gedragsproblemen'],
    question: 'Noor (5) gooit tijdens het eten haar bord op de grond. Het is de derde keer deze week. Je hebt het al besproken, consequenties gesteld, en toch gebeurt het weer. Wat zegt Ross Greene hierover?',
    options: [
      { id: 'a', text: 'De consequenties zijn niet streng genoeg – ze moet leren dat dit niet kan', isCorrect: false, feedback: 'Meer straf werkt niet als het kind de vaardigheid mist. Strengere consequenties bij een vaardigheidstekort is als harder schreeuwen tegen iemand die je taal niet spreekt.' },
      { id: 'b', text: 'Kinderen doen het goed als ze kunnen – als ze het niet goed doen, missen ze een vaardigheid, geen motivatie', isCorrect: true, feedback: 'Precies Greene\'s kernprincipe. De vraag is niet "hoe straf ik dit gedrag?" maar "welke vaardigheid mist ze om dit anders te doen?"' },
      { id: 'c', text: 'Ze test je grenzen – als je nu toegeeft, wordt het erger', isCorrect: false, feedback: 'De "grenzen testen"-theorie gaat uit van opzet. Greene toont aan dat herhaald ongewenst gedrag wijst op onvermogen, niet op onwil.' },
    ],
    explanation: 'Greene\'s basisprincipe: "Kids do well if they can." Als een kind herhaaldelijk hetzelfde ongewenste gedrag vertoont ondanks consequenties, ontbreekt er een vaardigheid – zoals frustratietolerantie of flexibel denken.',
    research: 'Greene (2014) – The Explosive Child',
  },

  {
    id: 'gedrag_quiz_gr_3',
    skill: 'Grenzen',
    type: 'quiz',
    difficulty: 'expert',
    order: 48,
    themes: ['adhd', 'hooggevoelig'],
    question: 'Je stelt een grens: "We gaan nu weg van de speeltuin." Je kind (7, gevoelig en impulsief) begint te gillen en weigert. Welke volgorde is het meest effectief?',
    options: [
      { id: 'a', text: '1) Waarschuwen dat er een consequentie komt 2) De consequentie uitvoeren 3) Later uitleggen waarom', isCorrect: false, feedback: 'Bij een kind dat al gilt, werken consequenties als brandstof op het vuur. Het zenuwstelsel is offline voor lessen.' },
      { id: 'b', text: '1) Erkennen ("je vindt het jammer") 2) Grens herhalen zonder discussie 3) Fysiek begeleiden indien nodig', isCorrect: true, feedback: 'Perfect. Valideren ontscherpt de weerstand. De grens rustig herhalen toont dat je niet meebuigt. Fysiek begeleiden (hand pakken) is krachtig zonder agressief te zijn.' },
      { id: 'c', text: '1) Toch nog 5 minuten geven 2) Dan opnieuw aankondigen 3) Deze keer echt weggaan', isCorrect: false, feedback: 'Uitstel na protest leert je kind: gillen levert meer tijd op. De grens verliest geloofwaardigheid.' },
    ],
    explanation: 'Grenzen stellen bij gevoelige en impulsieve kinderen vraagt om empathie EN standvastigheid tegelijk. Het is niet of-of, het is en-en: "Ik begrijp je EN we gaan nu."',
    research: 'Siegel & Bryson (2014) – No-Drama Discipline; Greene (2014) – The Explosive Child',
  },

  {
    id: 'gedrag_quiz_gr_4',
    skill: 'Grenzen',
    type: 'quiz',
    difficulty: 'basis',
    order: 49,
    themes: ['prikkelverwerking', 'gedragsproblemen'],
    question: 'Je kind (4) bijt een ander kind op de creche. De leidster vertelt het als je hem ophaalt. Welke reactie past bij zijn ontwikkelingsniveau?',
    options: [
      { id: 'a', text: 'Thuis nog een keer stevig bespreken: "Bijten doet pijn en mag nooit!"', isCorrect: false, feedback: 'Uren na het incident heeft een 4-jarige geen toegang meer tot die ervaring. De les komt niet aan. Bijten bij peuters is vaak sensorisch, niet agressief.' },
      { id: 'b', text: 'Met de leidster bespreken in welke situaties het gebeurt en samen zoeken naar het patroon', isCorrect: true, feedback: 'Goed! Bijten bij kleuters is vaak overprikkeling, frustratie of sensorisch zoekgedrag. Het patroon vinden is de sleutel tot preventie.' },
      { id: 'c', text: 'Hem laten voelen hoe pijn het doet door zachtjes in zijn arm te knijpen', isCorrect: false, feedback: 'Kinderen leren empathie niet door zelf pijn te ervaren maar door co-regulatie en voorbeeldgedrag. Dit leert alleen: grote mensen doen ook pijn.' },
    ],
    explanation: 'Bijten bij jonge kinderen is zelden agressie. Het is vaak een signaal van overprikkeling of frustratie bij een kind dat nog geen woorden heeft voor grote gevoelens. De context onderzoeken werkt beter dan straffen.',
    research: 'Perry (2006) – neurosequentieel model; Barkley (2013) – Taking Charge of ADHD',
  },

  {
    id: 'gedrag_quiz_gr_5',
    skill: 'Grenzen',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 50,
    themes: ['adhd'],
    question: 'Levi (10) onderhandelt over elke regel: bedtijd, schermtijd, huiswerk. Het voelt alsof alles een discussie is. Hoe ga je hier structureel mee om?',
    options: [
      { id: 'a', text: 'Alle regels niet-onderhandelbaar maken zodat er geen ruimte is voor discussie', isCorrect: false, feedback: 'Totale inflexibiliteit creëert machtsstrijd. Kinderen met veel energie in hun hoofd MOETEN leren onderhandelen – maar op het juiste moment.' },
      { id: 'b', text: 'Onderscheid maken tussen vaste regels (niet-onderhandelbaar) en flexibele regels (samen beslissen) en dat helder communiceren', isCorrect: true, feedback: 'Precies. Geef hem inspraak waar het kan (bijv. welke kleren) en wees helder over waar het niet kan (bijv. bedtijd). Dit respecteert zijn behoefte aan autonomie binnen veilige structuur.' },
      { id: 'c', text: 'Elke discussie aangaan zodat hij leert argumenteren', isCorrect: false, feedback: 'Onbegrensd onderhandelen is uitputtend voor jullie beiden en geeft hem niet de structuur die hij nodig heeft.' },
    ],
    explanation: 'Kinderen met ADHD hebben een sterke behoefte aan autonomie maar ook aan structuur. De kunst is: heldere kaders met ruimte erin. Niet alles is onderhandelbaar, maar sommige dingen wel.',
    research: 'Barkley (2013) – Taking Charge of ADHD; Greene (2014) – The Explosive Child',
  },

  // ── AUTONOMIE (5 vragen) ──────────────────────────────────────

  {
    id: 'gedrag_quiz_au_1',
    skill: 'Autonomie',
    type: 'quiz',
    difficulty: 'basis',
    order: 51,
    themes: ['adhd'],
    question: 'Eva (8) vergeet elke ochtend haar tas in te pakken. Je pakt hem elke dag voor haar in. Wat is het effect op lange termijn?',
    options: [
      { id: 'a', text: 'Ze leert dat papa altijd helpt en voelt zich veilig en ondersteund', isCorrect: false, feedback: 'Op korte termijn voelt het helpend, maar je ontneemt haar de kans om de vaardigheid te ontwikkelen. Ze leert: ik kan het niet zelf.' },
      { id: 'b', text: 'Ze ontwikkelt geen eigen executieve vaardigheden en wordt afhankelijk van externe hulp', isCorrect: true, feedback: 'Juist. Kinderen met ADHD hebben extra hulpmiddelen nodig (checklist, visueel schema), niet iemand die het overneemt. Scaffolding: steun die langzaam afbouwt.' },
      { id: 'c', text: 'Het maakt niet uit wie de tas inpakt – het resultaat telt', isCorrect: false, feedback: 'Het resultaat is niet een ingepakte tas maar een kind dat leert zichzelf te organiseren. Het proces is de les.' },
    ],
    explanation: 'Scaffolding is de sleutel: help haar een systeem te bouwen (checklist op de deur, vaste plek voor spullen) en bouw je hulp langzaam af. Zo ontwikkelt ze eigen executieve vaardigheden.',
    research: 'Barkley (2013) – Taking Charge of ADHD',
  },

  {
    id: 'gedrag_quiz_au_2',
    skill: 'Autonomie',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 52,
    themes: ['hooggevoelig', 'prikkelverwerking'],
    question: 'Finn (6) is hooggevoelig en weigert naar zwemles te gaan. Hij is bang voor het lawaai en de echo. Je wilt dat hij leert zwemmen. Hoe balanceer je autonomie en noodzaak?',
    options: [
      { id: 'a', text: 'Hem elke week meenemen en zeggen dat hij eraan went – blootstelling helpt', isCorrect: false, feedback: 'Forceren bij sensorische overweldiging leidt tot trauma, niet tot gewenning. Zijn zenuwstelsel registreert: gevaar, gevaar, gevaar.' },
      { id: 'b', text: 'Samen kleine stappen bedenken: eerst kijken, dan voetjes in het water, dan proberen – op zijn tempo', isCorrect: true, feedback: 'Uitstekend. Graduele exposure met het kind als medebeslisser. Hij behoudt regie en leert: ik kan moeilijke dingen, op mijn manier.' },
      { id: 'c', text: 'Zwemles uitstellen tot hij er zelf om vraagt', isCorrect: false, feedback: 'Eindeloos uitstellen ontneemt hem de kans om te leren dat hij uitdagingen aankan. Wachten op initiatief dat misschien nooit komt.' },
    ],
    explanation: 'Autonomie bij gevoelige kinderen betekent: het kind betrekken bij het plan. Niet forceren, niet vermijden, maar samen een route vinden die haalbaar voelt.',
    research: 'Aron (2002) – The Highly Sensitive Child; Porges (2011) – Polyvagal Theory',
  },

  {
    id: 'gedrag_quiz_au_3',
    skill: 'Autonomie',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 53,
    themes: ['adhd', 'gedragsproblemen'],
    question: 'Je kind (9) heeft moeite met plannen en organiseren. Een werkstuk voor school is over twee weken af. Hij heeft nog niets gedaan. Hoe ondersteun je zonder over te nemen?',
    options: [
      { id: 'a', text: 'Het werkstuk samen maken zodat het op tijd af is', isCorrect: false, feedback: 'Je lost het probleem op maar je kind leert niets over planning. Volgende keer staat hij er weer alleen voor – zonder vaardigheden.' },
      { id: 'b', text: 'Samen het werkstuk in kleine stappen verdelen, elke stap in de agenda zetten, en dagelijks even checken', isCorrect: true, feedback: 'Perfect. Je leert hem plannen door het voor te doen. Kleine stappen maken een groot project behapbaar voor een brein dat moeite heeft met tijdsbesef.' },
      { id: 'c', text: 'Hem laten ervaren wat er gebeurt als hij te laat is – natuurlijke consequenties', isCorrect: false, feedback: 'Bij een kind dat de vaardigheid mist om te plannen, is falen geen leerkans maar een bevestiging van "ik kan het niet". Eerst leren, dan loslaten.' },
    ],
    explanation: 'Kinderen met ADHD hebben een ander tijdsbesef – twee weken voelt als "later" tot het "morgen" is. Externe structuur (agenda, stappen) is het hulpmiddel dat hun brein nog niet zelf kan leveren.',
    research: 'Barkley (2013) – Taking Charge of ADHD',
  },

  {
    id: 'gedrag_quiz_au_4',
    skill: 'Autonomie',
    type: 'quiz',
    difficulty: 'expert',
    order: 54,
    themes: ['hooggevoelig'],
    question: 'Lotte (7) wil alles perfect doen. Als iets niet lukt, stopt ze meteen en zegt: "Ik doe het nooit meer." Hoe stimuleer je haar autonomie zonder haar perfectionisme te voeden?',
    options: [
      { id: 'a', text: '"Je hoeft niet perfect te zijn, gewoon proberen is genoeg."', isCorrect: false, feedback: 'Goed bedoeld, maar voor een perfectionistisch kind klinkt dit als: jouw gevoel klopt niet. De intentie is goed, de landing niet.' },
      { id: 'b', text: '"Je bent teleurgesteld dat het niet lukte zoals je wilde. Wil je het op een andere manier proberen, of eerst even stoppen?"', isCorrect: true, feedback: 'Uitstekend. Je valideert haar frustratie en geeft haar keuze. Ze behoudt regie en leert: stoppen mag, opnieuw proberen ook.' },
      { id: 'c', text: 'Het voor haar afmaken zodat ze ziet hoe het moet', isCorrect: false, feedback: 'Voordoen versterkt haar idee: anderen kunnen het wel, ik niet. Ze heeft eigen succeservaringen nodig, niet die van jou.' },
    ],
    explanation: 'Perfectionisme bij gevoelige kinderen komt vaak voort uit angst om af te vallen. Ze hebben ervaringen nodig dat "goed genoeg" ook goed is – en een vader die dat modelleert.',
    research: 'Aron (2002) – The Highly Sensitive Child',
  },

  {
    id: 'gedrag_quiz_au_5',
    skill: 'Autonomie',
    type: 'quiz',
    difficulty: 'basis',
    order: 55,
    themes: ['adhd', 'prikkelverwerking'],
    question: 'Je kind (5) wil zelf zijn brood smeren maar maakt een enorme troep. Je hebt haast. Wat doe je?',
    options: [
      { id: 'a', text: 'Het brood zelf smeren – er is geen tijd voor troep', isCorrect: false, feedback: 'Begrijpelijk maar je ontneemt een leermoment. Elke keer dat je het overneemt, bevestig je: jij kunt het niet snel genoeg.' },
      { id: 'b', text: 'Hem laten smeren en de troep accepteren – de vaardigheid is belangrijker dan het resultaat', isCorrect: true, feedback: 'Goed! Autonomie ontwikkelt zich door doen, niet door kijken. De troep is tijdelijk, het zelfvertrouwen dat hij opbouwt is blijvend.' },
      { id: 'c', text: 'Samen doen: jij houdt het brood vast, hij smeert', isCorrect: false, feedback: 'Samenwerken is mooi, maar als hij "zelf" wil, respecteer dat dan. Autonomie is: ik kan het, ook als het niet perfect gaat.' },
    ],
    explanation: 'Kinderen die extra moeite hebben met fijne motoriek of concentratie, hebben juist meer oefenkansen nodig, niet minder. Troep opruimen is makkelijker dan zelfvertrouwen herbouwen.',
    research: 'Barkley (2013) – Taking Charge of ADHD',
  },

  // ── HERSTEL (5 vragen) ────────────────────────────────────────

  {
    id: 'gedrag_quiz_he_1',
    skill: 'Herstel',
    type: 'quiz',
    difficulty: 'basis',
    order: 56,
    themes: ['gedragsproblemen', 'adhd'],
    question: 'Je hebt net tegen je kind (6) geschreeuwd omdat hij voor de zoveelste keer niet luisterde. Je voelt je schuldig. Wat is de belangrijkste volgende stap?',
    options: [
      { id: 'a', text: 'Extra lief zijn de rest van de avond om het goed te maken', isCorrect: false, feedback: 'Compensatiegedrag verwarrt je kind. Het leert niet wat er gebeurde of dat fouten hersteld kunnen worden – alleen dat papa soms wisselend is.' },
      { id: 'b', text: 'Naar hem toe gaan en zeggen: "Het was niet oke dat ik schreeuwde. Jij verdient een rustige papa. Sorry."', isCorrect: true, feedback: 'Perfect. Expliciet herstel leert je kind drie dingen: 1) iedereen maakt fouten, 2) fouten kun je herstellen, 3) hij is belangrijk genoeg om sorry tegen te zeggen.' },
      { id: 'c', text: 'Het laten gaan – kinderen vergeten het snel en morgen is een nieuwe dag', isCorrect: false, feedback: 'Kinderen vergeten de woorden misschien, maar hun zenuwstelsel onthoudt het gevoel. Onherstelde breuken stapelen op.' },
    ],
    explanation: 'Herstel is het krachtigste wat een vader kan doen na een misstap. Het modelleert kwetsbaarheid en verantwoordelijkheid – precies de vaardigheden die je je kind wilt leren.',
    research: 'Tronick (2007) – The Neurobehavioral and Social-Emotional Development of Infants and Children',
  },

  {
    id: 'gedrag_quiz_he_2',
    skill: 'Herstel',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 57,
    themes: ['adhd', 'gedragsproblemen'],
    question: 'Na een heftige ruzie met je kind (9) zeg je sorry. Hij zegt: "Het maakt niet uit, je doet het toch weer." Hoe reageer je?',
    options: [
      { id: 'a', text: '"Dat is niet eerlijk, ik probeer het echt."', isCorrect: false, feedback: 'Je wordt defensief. Zijn opmerking is geen aanval maar een eerlijke observatie vanuit pijn. Luister ernaar.' },
      { id: 'b', text: '"Je hebt gelijk dat het vaker is gebeurd. Ik snap dat je me niet gelooft. Ik blijf proberen."', isCorrect: true, feedback: 'Krachtig. Je valideert zijn ervaring zonder jezelf te verdedigen. Je laat zien dat zijn gevoel er mag zijn en dat je verantwoordelijkheid neemt.' },
      { id: 'c', text: '"Oke, dan niet" en weglopen', isCorrect: false, feedback: 'Weglopen na afwijzing is begrijpelijk maar bevestigt zijn angst: herstel is niet echt, papa geeft op als het moeilijk wordt.' },
    ],
    explanation: 'Kinderen die veel conflicten meemaken, worden sceptisch over sorry. Dat is gezonde zelfbescherming. Echt herstel is niet een keer sorry zeggen – het is consistent laten zien dat je verandert.',
    research: 'Siegel & Hartzell (2003) – Parenting from the Inside Out',
  },

  {
    id: 'gedrag_quiz_he_3',
    skill: 'Herstel',
    type: 'quiz',
    difficulty: 'expert',
    order: 58,
    themes: ['hooggevoelig', 'prikkelverwerking'],
    question: 'Je gevoelige kind (5) is nog uren van slag nadat je per ongeluk te hard reageerde op gemorste melk. Waarom duurt het herstel bij dit kind langer?',
    options: [
      { id: 'a', text: 'Hij manipuleert je door langer boos te blijven zodat je je schuldig voelt', isCorrect: false, feedback: 'Kinderen manipuleren niet met emoties – ze verwerken ze. Een gevoelig kind ervaart jouw reactie intenser en heeft langer nodig om te reguleren.' },
      { id: 'b', text: 'Zijn zenuwstelsel verwerkt emotionele prikkels dieper en langer – de schrik zit letterlijk langer in zijn lichaam', isCorrect: true, feedback: 'Juist. Hooggevoeligheid betekent diepere verwerking. Het stresshormoon cortisol blijft langer actief. Dit is fysiologie, geen keuze.' },
      { id: 'c', text: 'Hij is dramatisch aangelegd en moet leren dat het niet zo erg was', isCorrect: false, feedback: '"Dramatisch" is een oordeel over een neurologisch verschil. Voor zijn zenuwstelsel WAS het erg. Dat ontkennen maakt het erger.' },
    ],
    explanation: 'Hooggevoelige kinderen verwerken negatieve ervaringen langer dan gemiddeld gevoelige kinderen. Dit is geen zwakte maar een eigenschap van hun zenuwstelsel. Geduldig nabij blijven is de beste medicijn.',
    research: 'Aron (2002) – The Highly Sensitive Child; Van der Kolk (2014) – The Body Keeps the Score',
  },

  {
    id: 'gedrag_quiz_he_4',
    skill: 'Herstel',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 59,
    themes: ['gedragsproblemen'],
    question: 'Je kind (7) heeft een enorme woedeaanval gehad en dingen kapotgemaakt. Nu het voorbij is, zit hij stil en kijkt naar de grond. Wat is het beste moment voor herstel?',
    options: [
      { id: 'a', text: 'Nu meteen – bespreken wat er fout ging terwijl het vers is', isCorrect: false, feedback: 'Direct na een piek is het zenuwstelsel nog in herstelmodus. Rationeel bespreken werkt pas als de cortisol is gezakt – dat duurt minstens 20-30 minuten.' },
      { id: 'b', text: 'Eerst samen rustig worden (wandeling, water, knuffel) en later – als jullie beiden kalm zijn – terugkomen op wat er gebeurde', isCorrect: true, feedback: 'Precies. Eerst co-reguleren (het lichaam kalmeren), dan pas reflecteren (het brein inschakelen). De volgorde is cruciaal.' },
      { id: 'c', text: 'Morgen pas – een nachtje slapen helpt om het in perspectief te plaatsen', isCorrect: false, feedback: 'Te lang wachten maakt het abstract. Dezelfde dag, na een pauze, is het juiste moment. Het kind kan dan nog verbinding maken met de ervaring.' },
    ],
    explanation: 'Na een emotionele storm heeft het lichaam 20-45 minuten nodig om fysiologisch te herstellen. Pas dan kan het brein terugkijken en leren. Timing is alles bij herstel.',
    research: 'Siegel & Bryson (2012) – The Whole-Brain Child; Perry (2006) – neurosequentieel model',
  },

  {
    id: 'gedrag_quiz_he_5',
    skill: 'Herstel',
    type: 'quiz',
    difficulty: 'basis',
    order: 60,
    themes: ['adhd', 'hooggevoelig'],
    question: 'Je kind (8) en jij hebben ruzie gehad. Je wilt herstellen maar je kind wil niet praten. Wat doe je?',
    options: [
      { id: 'a', text: 'Aandringen: "We moeten hierover praten, het is belangrijk."', isCorrect: false, feedback: 'Aandringen respecteert zijn grens niet. Verplicht praten is geen echt herstel maar gehoorzaamheid.' },
      { id: 'b', text: 'Een briefje schrijven of tekening maken: "Ik vind het jammer van onze ruzie. Ik ben er als je wilt praten."', isCorrect: true, feedback: 'Creatief en respectvol. Je biedt herstel aan zonder druk. Het briefje blijft liggen en je kind kan ernaar teruggaan wanneer hij er klaar voor is.' },
      { id: 'c', text: 'Wachten tot hij zelf komt – het initiatief bij het kind leggen', isCorrect: false, feedback: 'Herstel is de verantwoordelijkheid van de volwassene, niet van het kind. Wachten kan overkomen als onverschilligheid.' },
    ],
    explanation: 'Niet elk kind herstelt door praten. Sommige kinderen hebben een alternatief kanaal nodig: een briefje, samen iets doen, fysieke nabijheid. Vind de taal die bij jouw kind past.',
    research: 'Siegel & Hartzell (2003) – Parenting from the Inside Out',
  },

  // ── VERBINDING (5 vragen) ─────────────────────────────────────

  {
    id: 'gedrag_quiz_ve_1',
    skill: 'Verbinding',
    type: 'quiz',
    difficulty: 'basis',
    order: 61,
    themes: ['adhd', 'gedragsproblemen'],
    question: 'Je kind (7) heeft de hele dag op school te horen gekregen wat hij fout deed. Hij komt chagrijnig thuis. Wat is het belangrijkste dat je kunt doen?',
    options: [
      { id: 'a', text: 'Vragen wat er fout ging en hoe hij het morgen beter kan doen', isCorrect: false, feedback: 'Nog meer focus op wat fout ging is de druppel. Hij heeft het hele dag al gehoord. Hij heeft nu het tegenovergestelde nodig.' },
      { id: 'b', text: 'Iets leuks doen samen, zonder vragen – gewoon genieten van elkaar', isCorrect: true, feedback: 'Precies. Na een dag vol correcties heeft hij verbinding nodig, geen evaluatie. Even samen lachen herstelt wat de hele dag is afgepeld.' },
      { id: 'c', text: 'Hem met rust laten – hij heeft vast even tijd voor zichzelf nodig', isCorrect: false, feedback: 'Soms klopt dit, maar na een dag vol afwijzing is alleen-zijn riskant. Check eerst of hij verbinding nodig heeft.' },
    ],
    explanation: 'Kinderen met druk gedrag ontvangen gemiddeld honderden correcties per schooldag. Thuis is de enige plek waar ze kunnen zijn wie ze zijn. Verbinding zonder agenda is dan de krachtigste interventie.',
    research: 'Barkley (2013) – Taking Charge of ADHD; Perry (2006) – The Boy Who Was Raised as a Dog',
  },

  {
    id: 'gedrag_quiz_ve_2',
    skill: 'Verbinding',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 62,
    themes: ['hooggevoelig'],
    question: 'Iris (6) zegt: "Niemand op school snapt mij." Ze voelt zich anders dan andere kinderen. Hoe versterk je de verbinding?',
    options: [
      { id: 'a', text: '"Dat is niet waar, je hebt toch vriendinnen?"', isCorrect: false, feedback: 'Je ontkent haar ervaring. Zij VOELT zich onbegrepen – of het objectief klopt doet er nu niet toe.' },
      { id: 'b', text: '"Dat klinkt eenzaam. Vertel eens, wat bedoel je met \'snapt\'?"', isCorrect: true, feedback: 'Je valideert haar gevoel en vraagt door. Dit opent het gesprek in plaats van het te sluiten. Ze leert: papa wil me begrijpen.' },
      { id: 'c', text: '"Ik snap jou wel. Ik was als kind ook zo."', isCorrect: false, feedback: 'Goed bedoeld maar maakt het over jou. Ze zoekt nu erkenning voor haar eigen ervaring, niet vergelijking.' },
    ],
    explanation: 'Hooggevoelige kinderen voelen zich vaak anders. Die ervaring ontkennen helpt niet – het verdiept het isolement. Erkennen dat het zwaar is EN laten zien dat jij er bent, is de basis van verbinding.',
    research: 'Aron (2002) – The Highly Sensitive Child',
  },

  {
    id: 'gedrag_quiz_ve_3',
    skill: 'Verbinding',
    type: 'quiz',
    difficulty: 'expert',
    order: 63,
    themes: ['adhd', 'gedragsproblemen'],
    question: 'Je merkt dat je steeds minder plezier hebt in het samen zijn met je kind (8). Het voelt als een eindeloze reeks conflicten. Wat zegt de wetenschap over deze ervaring?',
    options: [
      { id: 'a', text: 'Je bent een slechte vader als je niet geniet van je eigen kind', isCorrect: false, feedback: 'Dit is schaamte, geen waarheid. Ouderschapsstress bij kinderen met veel gedragsproblematiek is extreem hoog – het is logisch dat plezier afneemt.' },
      { id: 'b', text: 'De negatieve interactiecyclus heeft jullie relatie beinvloed – je brein verwacht conflicten en filtert positieve momenten weg', isCorrect: true, feedback: 'Juist. Na herhaalde negatieve interacties ontwikkelt je brein een negativiteitsbias: je ziet sneller wat fout gaat dan wat goed gaat. Dit is omkeerbaar maar vraagt bewuste inspanning.' },
      { id: 'c', text: 'Jullie passen gewoon niet goed bij elkaar qua temperament', isCorrect: false, feedback: 'Temperamentverschillen spelen mee, maar de negatieve cyclus is het probleem, niet de match. Elke vader-kindrelatie kan hersteld worden.' },
    ],
    explanation: 'Herhaalde conflicten creëren een negatieve interactiecyclus. Je brein wordt getraind om te focussen op problemen. Bewust positieve momenten zoeken – hoe klein ook – doorbreekt dit patroon.',
    research: 'Barkley (2013) – Taking Charge of ADHD',
  },

  {
    id: 'gedrag_quiz_ve_4',
    skill: 'Verbinding',
    type: 'quiz',
    difficulty: 'basis',
    order: 64,
    themes: ['prikkelverwerking', 'hooggevoelig'],
    question: 'Je kind (5) zoekt constant fysiek contact: klimt op je, hangt aan je, wil gedragen worden. Soms is het te veel voor jou. Wat speelt er mogelijk?',
    options: [
      { id: 'a', text: 'Hij is te afhankelijk en je moet hem leren om zelfstandiger te zijn', isCorrect: false, feedback: 'Contactzoekend gedrag bij jonge kinderen is geen afhankelijkheid maar regulatiestrategie. Hij gebruikt jouw lichaam om zijn zenuwstelsel te kalmeren.' },
      { id: 'b', text: 'Zijn zenuwstelsel zoekt proprioceptieve input (druk, gewicht) om te reguleren – fysiek contact is zijn manier van kalmeren', isCorrect: true, feedback: 'Juist. Diepe druk activeert het parasympathisch zenuwstelsel. Hij plakt niet aan jou uit onzekerheid maar zoekt sensorische regulatie.' },
      { id: 'c', text: 'Hij heeft een hechtingsprobleem en je moet professionele hulp zoeken', isCorrect: false, feedback: 'Contactzoekend gedrag alleen is geen teken van hechtingsproblemen. Eerst kijken naar sensorische behoeften voor je naar diagnoses springt.' },
    ],
    explanation: 'Kinderen die veel fysiek contact zoeken, reguleren vaak via proprioceptie (druk op het lichaam). Een stevige knuffel, samen stoeien of een verzwaard kussen kan helpen – en jou ontlasten.',
    research: 'Porges (2011) – Polyvagal Theory; Perry (2006) – neurosequentieel model',
  },

  {
    id: 'gedrag_quiz_ve_5',
    skill: 'Verbinding',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 65,
    themes: ['adhd'],
    question: 'Sem (10) zegt: "Alle kinderen in mijn klas kunnen gewoon stilzitten. Waarom ik niet?" Hij kijkt je aan met grote ogen. Hoe reageer je?',
    options: [
      { id: 'a', text: '"Je moet gewoon harder proberen, dan lukt het ook."', isCorrect: false, feedback: 'Hardere inspanning werkt niet bij een neurologisch verschil. Dit versterkt zijn gevoel van falen en onbegrip.' },
      { id: 'b', text: '"Jouw brein werkt op een andere manier. Het is heel goed in sommige dingen en vindt andere dingen lastiger. Dat is niet jouw schuld."', isCorrect: true, feedback: 'Krachtig. Je normaliseert het verschil zonder het te bagatelliseren. Je scheidt wie hij IS van wat hij DOET. Dit beschermt zijn zelfbeeld.' },
      { id: 'c', text: '"Dat komt door je ADHD, daar kun je niets aan doen."', isCorrect: false, feedback: 'Een label als verklaring kan ontlasten maar ook limiteren. Beter: focus op hoe zijn brein werkt in plaats van op de diagnose.' },
    ],
    explanation: 'Kinderen met ADHD vergelijken zich constant met leeftijdgenoten. Het scheiden van het kind en het gedrag ("jouw brein vindt sommige dingen lastiger") beschermt hun identiteit.',
    research: 'Barkley (2013) – Taking Charge of ADHD; Siegel (2012) – The Whole-Brain Child',
  },

  // ── REFLECTIE (5 vragen) ──────────────────────────────────────

  {
    id: 'gedrag_quiz_re_1',
    skill: 'Reflectie',
    type: 'quiz',
    difficulty: 'basis',
    order: 66,
    themes: ['gedragsproblemen'],
    question: 'Je merkt dat je kind (6) altijd rond dezelfde tijd (17:00) het lastigst is. Wat kan hierachter zitten?',
    options: [
      { id: 'a', text: 'Hij test bewust je grenzen op het moment dat je moe bent', isCorrect: false, feedback: 'Een 6-jarige plant geen strategische tests. Het gedrag volgt een patroon dat fysiologisch verklaarbaar is.' },
      { id: 'b', text: 'Zijn bloedsuiker is laag, zijn regulatiecapaciteit is op na een dag vol prikkels, en de overgang van buitenshuis naar thuis is een extra belasting', isCorrect: true, feedback: 'Precies. Het "5-uur-effect": honger + vermoeidheid + prikkeloverload + transitie = explosief mengsel. Vooruitlopen hierop (snack, rust, voorspelbaarheid) helpt enorm.' },
      { id: 'c', text: 'Hij is gewoon moe en moet eerder naar bed', isCorrect: false, feedback: 'Vermoeidheid speelt mee, maar het is complexer. Prikkelverwerking, bloedsuiker en transitiestress werken samen.' },
    ],
    explanation: 'Gedragspatronen herkennen is de eerste stap naar preventie. Als je weet wanneer en waarom het misgaat, kun je vooruitlopen in plaats van achter de feiten aan rennen.',
    research: 'Greene (2014) – The Explosive Child; Barkley (2013) – Taking Charge of ADHD',
  },

  {
    id: 'gedrag_quiz_re_2',
    skill: 'Reflectie',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 67,
    themes: ['adhd', 'hooggevoelig'],
    question: 'Je reageert op je kind met ADHD strenger dan op je andere kind. Je partner wijst je hierop. Wat kan er spelen?',
    options: [
      { id: 'a', text: 'Je partner is te mild en jij compenseert dat met meer strengheid', isCorrect: false, feedback: 'Dit is een afweermechanisme. De vraag gaat over jouw patroon, niet over dat van je partner.' },
      { id: 'b', text: 'Je eigen frustratie en onmacht over het gedrag vertaalt zich in strengheid – het is een copingmechanisme, geen bewuste keuze', isCorrect: true, feedback: 'Juist. Strengheid bij een "lastig" kind is vaak een uiting van machteloosheid. Bewustwording hiervan is de eerste stap naar verandering.' },
      { id: 'c', text: 'Dit kind heeft nu eenmaal meer structuur nodig, dus strengheid is logisch', isCorrect: false, feedback: 'Structuur is niet hetzelfde als strengheid. Structuur is voorspelbaarheid en kaders. Strengheid is hardheid in je toon en aanpak.' },
    ],
    explanation: 'Onderzoek toont dat ouders van kinderen met gedragsproblemen vaker in een negatieve spiraal belanden: meer correctie, minder warmte, meer conflict. Reflectie op dit patroon is de weg naar doorbreking.',
    research: 'Siegel & Hartzell (2003) – Parenting from the Inside Out',
  },

  {
    id: 'gedrag_quiz_re_3',
    skill: 'Reflectie',
    type: 'quiz',
    difficulty: 'expert',
    order: 68,
    themes: ['adhd', 'gedragsproblemen'],
    question: 'Je kind krijgt de diagnose ADHD. Je voelt opluchting en verdriet. Is dat normaal?',
    options: [
      { id: 'a', text: 'Opluchting is logisch, verdriet is overdreven – het is maar een label', isCorrect: false, feedback: 'Een diagnose raakt aan verwachtingen, dromen en zorgen over de toekomst. Verdriet is een gezonde reactie, geen overdrijving.' },
      { id: 'b', text: 'Beide gevoelens zijn normaal – opluchting omdat het gedrag verklaard wordt, verdriet om het besef dat het pad anders zal zijn', isCorrect: true, feedback: 'Precies. Ambivalentie bij een diagnose is gezond. Opluchting: "Het lag niet aan mijn opvoeding." Verdriet: "Zijn weg wordt soms moeilijker." Beide mogen er zijn.' },
      { id: 'c', text: 'Je moet niet te veel bij de diagnose stilstaan en je richten op oplossingen', isCorrect: false, feedback: 'Actie is belangrijk, maar eerst je eigen emoties verwerken. Als jij je gevoelens overslaat, kom je niet tot de rust die je kind nodig heeft.' },
    ],
    explanation: 'Een diagnose is een keerpunt. Het biedt verklaring en richting, maar vraagt ook rouwverwerking: afscheid van het "makkelijke" pad dat je misschien had verwacht. Beide processen verdienen ruimte.',
    research: 'Barkley (2013) – Taking Charge of ADHD',
  },

  {
    id: 'gedrag_quiz_re_4',
    skill: 'Reflectie',
    type: 'quiz',
    difficulty: 'gevorderd',
    order: 69,
    themes: ['hooggevoelig', 'prikkelverwerking'],
    question: 'Je merkt dat je je gevoelige kind (5) vaak beschermt tegen situaties die spannend zijn. Je partner zegt: "Je maakt hem zwak." Wat is een gebalanceerde reflectie?',
    options: [
      { id: 'a', text: 'Je partner heeft gelijk – je moet hem meer loslaten en laten ervaren', isCorrect: false, feedback: 'Loslaten zonder ondersteuning is geen kracht maar verwaarlozing van zijn behoeften. Maar er zit een kern van waarheid in: beschermen kan ook beperken.' },
      { id: 'b', text: 'Bescherming is soms nodig, maar de vraag is: bescherm ik hem of bescherm ik mezelf tegen zijn ongemak?', isCorrect: true, feedback: 'Diepe reflectie. Soms beschermen we ons kind om onze eigen angst te reguleren. Het onderscheid maken is cruciaal: is dit voor hem of voor mij?' },
      { id: 'c', text: 'Jij kent je kind het best – je partner begrijpt zijn gevoeligheid niet', isCorrect: false, feedback: 'Het perspectief van je partner kan waardevol zijn, ook als de formulering onhandig is. Reflectie vraagt openheid, niet positie.' },
    ],
    explanation: 'De grens tussen beschermen en overbeschermen is dun. De reflectievraag is: doe ik dit voor mijn kind of voor mezelf? Bescherming die het kind kleiner houdt, is geen zorg maar angst.',
    research: 'Aron (2002) – The Highly Sensitive Child; Siegel & Hartzell (2003) – Parenting from the Inside Out',
  },

  {
    id: 'gedrag_quiz_re_5',
    skill: 'Reflectie',
    type: 'quiz',
    difficulty: 'basis',
    order: 70,
    themes: ['gedragsproblemen', 'adhd'],
    question: 'Na een zware week met veel gedoe vraagt een vriend: "Hoe gaat het met je kind?" Je merkt dat je alleen over problemen praat. Wat zegt dit?',
    options: [
      { id: 'a', text: 'De problemen zijn gewoon heel groot en het is logisch dat je daarover praat', isCorrect: false, feedback: 'De problemen zijn echt, maar als je alleen daarover praat, versterk je je eigen negativiteitsbias. Je gaat je kind zien als probleem.' },
      { id: 'b', text: 'Je bent gevangen in een probleem-narratief – je ziet je kind door de lens van moeilijk gedrag in plaats van als compleet persoon', isCorrect: true, feedback: 'Juist. Hoe je over je kind praat, vormt hoe je over je kind denkt. Bewust ook de leuke, lieve en grappige dingen benoemen verandert je perspectief.' },
      { id: 'c', text: 'Het is goed om eerlijk te zijn over de uitdagingen – doen alsof het leuk is helpt niemand', isCorrect: false, feedback: 'Eerlijkheid is belangrijk, maar het verhaal dat je vertelt is ook het verhaal dat je gelooft. Balans zoeken is geen ontkenning.' },
    ],
    explanation: 'Hoe je over je kind praat tegen anderen vormt je eigen beeld. Bewust ook positieve verhalen vertellen is geen ontkenning maar herstel van perspectief.',
    research: 'Greene (2014) – The Explosive Child; Perry (2006) – The Boy Who Was Raised as a Dog',
  },
];


// ═══════════════════════════════════════════════════════════════════
// SECTIE 3: SCENARIOS (8 scenarios, 1 per skill)
// Focus op jongere leeftijden (3-5, 6-9) waar diagnose vaak niet mogelijk is
// ═══════════════════════════════════════════════════════════════════

export const GEDRAG_SCENARIOS: Scenario[] = [

  // ── Aanwezigheid ──────────────────────────────────────────────
  {
    id: 's_gedrag_1',
    ageGroups: ['3-5', '6-9'],
    skill: 'Aanwezigheid',
    themes: ['adhd', 'prikkelverwerking'],
    situation: 'Je zoon (5) rent al een halfuur als een gek door het huis. Hij springt van de bank, gooit kussens, klimt op de tafel. Je hebt al drie keer gezegd dat hij moet stoppen. Niets helpt. Je partner kijkt je aan alsof je iets moet doen.',
    prompt: 'Wat doe je?',
    options: [
      { id: 'a', text: 'Je pakt hem stevig vast, zet hem op een stoel en zegt: "Nu is het klaar. Jij blijft hier zitten tot je rustig bent."', feedback: 'Fysiek vastzetten zonder verbinding vergroot zijn stress. Zijn lichaam zoekt beweging – stilzitten is nu het moeilijkste wat je kunt vragen. Hij voelt zich gestraft voor iets wat hij niet kan controleren.', score: 'slecht' },
      { id: 'b', text: 'Je gaat naast hem staan, legt een hand op zijn schouder en zegt: "Jij hebt energie. Kom, we gaan samen naar buiten rennen."', feedback: 'Goed. Je ziet zijn behoefte achter het gedrag en biedt een alternatief. Door mee te bewegen ben je aanwezig zonder te straffen. Je zenuwstelsel reguleert het zijne.', score: 'goed' },
      { id: 'c', text: 'Je laat het gaan en wacht tot hij vanzelf stopt – ingrijpen maakt het alleen maar erger.', feedback: 'Soms is loslaten wijs, maar hier mist je kind sturing. Zonder jouw betrokkenheid escaleert het gedrag en groeit zijn onrust. Aanwezigheid betekent hier: meebewegen, niet negeren.', score: 'matig' },
    ],
  },

  // ── Emotiecoaching ────────────────────────────────────────────
  {
    id: 's_gedrag_2',
    ageGroups: ['3-5', '6-9'],
    skill: 'Emotiecoaching',
    themes: ['gedragsproblemen', 'hooggevoelig'],
    situation: 'Je dochter (6) komt huilend thuis van school. Ze schreeuwt: "Ik wil NOOIT meer naar school! Iedereen is stom!" Ze gooit haar tas in de hoek en stampt naar boven. Je weet dat ze gevoelig is en schooldagen haar veel energie kosten.',
    prompt: 'Wat doe je?',
    options: [
      { id: 'a', text: 'Je volgt haar naar boven en zegt: "Vertel eens wat er is gebeurd. We lossen het samen op."', feedback: 'Je bedoeling is goed maar de timing niet. Ze zit midden in een emotionele storm – haar brein kan nu niet vertellen of oplossen. Eerst kalmeren, dan praten.', score: 'matig' },
      { id: 'b', text: 'Je geeft haar vijf minuten en gaat dan rustig naar haar toe: "Ik zie dat je een rotdag had. Ik ben hier. Je hoeft niets te vertellen."', feedback: 'Precies goed. Je geeft haar lichaam even tijd om te zakken, en biedt dan aanwezigheid zonder druk. Ze leert: mijn gevoelens mogen er zijn en papa blijft erbij, ook als ik boos ben.', score: 'goed' },
      { id: 'c', text: 'Je zegt streng: "We gooien geen tassen. Ga eerst je tas oprapen en dan praten we."', feedback: 'Je focust op het gedrag terwijl zij overloopt van emotie. De tas oprapen kan later – eerst heeft ze erkenning nodig. Regels zijn belangrijk maar niet op het moment dat het huis in brand staat.', score: 'slecht' },
    ],
  },

  // ── Zelfregulatie ─────────────────────────────────────────────
  {
    id: 's_gedrag_3',
    ageGroups: ['3-5', '6-9'],
    skill: 'Zelfregulatie',
    themes: ['adhd', 'gedragsproblemen'],
    situation: 'Het is ochtend en je kind (7) moet naar school. Hij weigert zijn schoenen aan te doen, gooit zijn broodtrommel door de keuken en schreeuwt: "Ik ga NIET!" Je voelt je bloeddruk stijgen. Je bent al te laat voor werk. Je andere kind staat klaar bij de deur.',
    prompt: 'Wat doe je?',
    options: [
      { id: 'a', text: 'Je schreeuwt: "NU schoenen aan! We zijn te laat en ik heb hier geen tijd voor!"', feedback: 'Begrijpelijk maar contraproductief. Jouw stress voegt zich bij de zijne. Twee ontregelde zenuwstelsels maken de situatie erger, niet beter. Hij heeft je kalmte nodig, juist nu.', score: 'slecht' },
      { id: 'b', text: 'Je haalt een keer diep adem, hurkt bij hem neer en zegt rustig: "Het is een moeilijke ochtend. Schoenen aan – ik help je."', feedback: 'Sterk. Je reguleert eerst jezelf (de ademhaling), dan pas je kind. Je erkent kort wat er is zonder te verliezen in de emotie. En je helpt praktisch. Dit is zelfregulatie in actie.', score: 'goed' },
      { id: 'c', text: 'Je zegt tegen je andere kind: "Ga vast naar de auto" en gaat zelf de kamer uit om even te kalmeren.', feedback: 'Even weggaan is beter dan schreeuwen, maar je kind blijft alleen achter in zijn storm. Als je terugkomt, probeer dan eerst contact te maken voor je de ochtend weer oppakt.', score: 'matig' },
    ],
  },

  // ── Grenzen ───────────────────────────────────────────────────
  {
    id: 's_gedrag_4',
    ageGroups: ['3-5', '6-9'],
    skill: 'Grenzen',
    themes: ['gedragsproblemen', 'adhd'],
    situation: 'Je zoon (8) speelt buiten met een vriend. Plotseling hoor je geschreeuw. Je zoon heeft de ander geduwd en staat nu dreigend voor hem. De vriend huilt. Andere ouders kijken toe.',
    prompt: 'Wat doe je?',
    options: [
      { id: 'a', text: 'Je roept hard: "Kom hier! Dat doe je niet! Zeg sorry, NU!"', feedback: 'Publieke vernedering verergert de situatie. Hij voelt schaamte bovenop zijn al geactiveerde stresssysteem. Geforceerd sorry zeggen leert niets over empathie – het leert gehoorzaamheid uit angst.', score: 'slecht' },
      { id: 'b', text: 'Je loopt rustig naar hem toe, gaat op zijn hoogte zitten en zegt: "Stop. Duwen mag niet. Kom even bij mij."', feedback: 'Goed. Je stelt helder de grens zonder te vernederen. Door dichtbij te komen en op zijn hoogte te gaan, creeer je veiligheid. De grens is duidelijk maar de relatie blijft heel.', score: 'goed' },
      { id: 'c', text: 'Je laat de kinderen het zelf oplossen – ze moeten leren omgaan met conflict.', feedback: 'Bij een kind dat fysiek wordt, is ingrijpen noodzakelijk. Zelf laten oplossen werkt bij woordenstrijd, niet bij fysiek geweld. Het andere kind verdient bescherming en jouw kind heeft begeleiding nodig.', score: 'slecht' },
    ],
  },

  // ── Autonomie ─────────────────────────────────────────────────
  {
    id: 's_gedrag_5',
    ageGroups: ['3-5', '6-9'],
    skill: 'Autonomie',
    themes: ['hooggevoelig', 'prikkelverwerking'],
    situation: 'Je dochter (5) weigert haar verjaardagsfeestje te vieren. Ze wil geen kindjes uitnodigen. "Het is te druk en te luid," zegt ze. Ze kijkt bang. Je hebt al cadeautjes gekocht en andere ouders uitgenodigd.',
    prompt: 'Wat doe je?',
    options: [
      { id: 'a', text: 'Je zegt: "Het wordt hartstikke leuk, je zult het zien!" en houdt het feestje zoals gepland.', feedback: 'Je overschrijft haar grens. Ze heeft duidelijk gecommuniceerd wat ze nodig heeft. Doorgaan ondanks haar angst leert haar: mijn gevoelens tellen niet en papa luistert niet.', score: 'slecht' },
      { id: 'b', text: 'Je zegt: "Ik hoor dat je het spannend vindt. Hoe zou jij het willen vieren? Misschien met twee vriendinnetjes en een rustige activiteit?"', feedback: 'Uitstekend. Je erkent haar gevoel, geeft haar regie en biedt een alternatief dat past bij haar zenuwstelsel. Ze leert: ik mag meebeslissen over mijn eigen leven, ook als dat anders is dan normaal.', score: 'goed' },
      { id: 'c', text: 'Je annuleert alles en zegt: "Dan vieren we het niet."', feedback: 'Je beschermt haar maar ontneemt ook de kans om samen een haalbare oplossing te vinden. Helemaal vermijden leert haar: ik kan dit soort dingen niet aan. Aanpassen is beter dan annuleren.', score: 'matig' },
    ],
  },

  // ── Herstel ───────────────────────────────────────────────────
  {
    id: 's_gedrag_6',
    ageGroups: ['3-5', '6-9'],
    skill: 'Herstel',
    themes: ['adhd', 'gedragsproblemen'],
    situation: 'Gisteravond verloor je je geduld. Je kind (7) luisterde niet, je pakte zijn favoriete knuffel af en zei: "Als je niet luistert, pak ik alles af." Hij huilde zich in slaap. Vanmorgen kijkt hij je niet aan bij het ontbijt.',
    prompt: 'Wat doe je?',
    options: [
      { id: 'a', text: 'Je doet alsof er niets is gebeurd en praat gewoon door over de dag. Kinderen vergeten het snel.', feedback: 'Hij is het niet vergeten – zijn lichaam onthoudt het gevoel. Niet bespreken leert hem: als papa iets ergs doet, doen we alsof het niet gebeurd is. De breuk blijft open.', score: 'slecht' },
      { id: 'b', text: 'Je gaat naast hem zitten, geeft de knuffel terug en zegt: "Gisteravond was ik boos en deed ik iets wat niet oke was. Jij verdient een papa die rustig blijft. Sorry."', feedback: 'Krachtig herstel. Je neemt verantwoordelijkheid, je benoemt concreet wat je fout deed, en je laat zien dat de relatie sterker is dan het conflict. Hij leert: fouten kun je herstellen.', score: 'goed' },
      { id: 'c', text: 'Je zegt: "Als jij gisteren gewoon had geluisterd, was dit niet gebeurd."', feedback: 'Je legt de verantwoordelijkheid bij het kind. Hij was degene die huilde in slaap – hij is het slachtoffer van jouw verlies van controle, niet de oorzaak ervan.', score: 'slecht' },
    ],
  },

  // ── Verbinding ────────────────────────────────────────────────
  {
    id: 's_gedrag_7',
    ageGroups: ['3-5', '6-9'],
    skill: 'Verbinding',
    themes: ['adhd', 'hooggevoelig'],
    situation: 'Het is zondagmiddag. Je kind (6) is de hele week op school gecorrigeerd. Je ziet dat hij onrustig is en zichzelf niet kan vermaken. Hij loopt van het ene naar het andere zonder ergens in te landen.',
    prompt: 'Wat doe je?',
    options: [
      { id: 'a', text: 'Je zegt: "Ga eens iets doen. Je hebt genoeg speelgoed." en richt je weer op je eigen bezigheden.', feedback: 'Hij KAN nu niet zelf landen – zijn zenuwstelsel zoekt regulatie. "Ga iets doen" klinkt voor hem als: ik moet het alleen oplossen. Maar hij heeft juist jou nodig als anker.', score: 'slecht' },
      { id: 'b', text: 'Je legt alles neer, pakt zijn hand en zegt: "Kom, wij gaan samen iets doen. Jij mag kiezen."', feedback: 'Perfect. Je biedt verbinding en regie tegelijk. Door hem te laten kiezen geef je autonomie, door erbij te zijn geef je regulatie. Na een week vol correcties is dit precies wat hij nodig heeft.', score: 'goed' },
      { id: 'c', text: 'Je zet een scherm aan zodat hij even tot rust komt – dat werkt altijd.', feedback: 'Schermen bieden kortstondige kalmte maar geen echte regulatie. Na het scherm is de onrust vaak groter. Verbinding met jou reguleert dieper dan een beeldscherm.', score: 'matig' },
    ],
  },

  // ── Reflectie ─────────────────────────────────────────────────
  {
    id: 's_gedrag_8',
    ageGroups: ['3-5', '6-9'],
    skill: 'Reflectie',
    themes: ['gedragsproblemen', 'hooggevoelig', 'prikkelverwerking'],
    situation: 'Je bent op een kinderfeestje. Je kind (5) raakt overprikkeld, begint te gillen en gooit cake op de grond. Een andere vader zegt tegen jou: "Misschien moet je hem wat strenger opvoeden." Je voelt schaamte en woede opkomen.',
    prompt: 'Wat doe je?',
    options: [
      { id: 'a', text: 'Je reageert boos op de andere vader: "Bemoei je er niet mee, je weet niet waar je het over hebt."', feedback: 'Begrijpelijk – de opmerking raakt aan je schaamte. Maar reageren vanuit woede escaleert de situatie en laat je kind zien dat boosheid de oplossing is. Jouw kind heeft je nu nodig, niet de andere vader.', score: 'slecht' },
      { id: 'b', text: 'Je negeert de opmerking, gaat naar je kind, neemt hem apart naar een rustige plek en zegt: "Het was te druk. We gaan even bijkomen."', feedback: 'Sterk. Je kiest voor je kind boven je ego. Door de opmerking te laten gaan en te focussen op wat je kind nodig heeft, model je precies wat je hem wilt leren: kalmte onder druk. Later kun je de emotie verwerken.', score: 'goed' },
      { id: 'c', text: 'Je lacht het weg en zegt: "Ja, hij is een druktemaker, haha." en doet verder niets.', feedback: 'Je bagatelliseert je kind en zijn ervaring. Bovendien bevestig je het beeld dat anderen van hem hebben. Hij heeft nu iemand nodig die hem ziet – niet iemand die hem wegwuift.', score: 'slecht' },
    ],
  },
];
