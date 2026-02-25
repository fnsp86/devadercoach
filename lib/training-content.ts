import type { TrainingItem, Skill, ThemeTag } from "./types";
import { BONUSKIND_TRAINING } from "./themed-content-bonuskind";
import { GEDRAG_TRAINING } from "./themed-content-gedrag";

// EMOTIECOACHING TRAINING - 30 Scenario-Based Questions
// Gebaseerd op de 5 leermodules
// Geen oefeningen (die zitten al in de modules)

export const EMOTIECOACHING_TRAINING: TrainingItem[] = [

  // ============================================================
  // MODULE 1: HET BREIN TIJDENS EEN DRIFTBUI (Vragen 1-6)
  // PFC offline, amygdala, co-regulatie
  // ============================================================

  {
    id: "ec_1",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "basis",
    order: 1,
    question: "Casper (4) smijt zijn bord van tafel omdat hij geen toetje krijgt. Hij gilt en stampt. Je zegt: 'Doe normaal, het is maar een toetje.' Wat gebeurt er in zijn brein?",
    context: "Tijdens een emotionele piek is de prefrontale cortex (PFC) offline.",
    options: [
      {
        id: "a",
        text: "Hij snapt je punt wel en kalmeert vanzelf omdat je heel duidelijk en consequent bent geweest",
        isCorrect: false,
        feedback: "Nee. Zijn PFC is offline door de emotionele piek. Rationele uitleg komt niet aan - het versterkt juist zijn frustratie."
      },
      {
        id: "b",
        text: "Hij leert hiervan dat dit gedrag absoluut niet mag en hij zal dat de volgende keer onthouden",
        isCorrect: false,
        feedback: "Nee. Leren vereist een actieve PFC. Tijdens een driftbui slaat het brein geen lessen op - alleen de stresservaring."
      },
      {
        id: "c",
        text: "Zijn amygdala heeft de regie, rationele woorden bereiken hem nu niet",
        isCorrect: true,
        feedback: "Correct. De amygdala stuurt fight-or-flight aan. Pas als deze kalmeert (door co-regulatie) kan de PFC weer online komen."
      },
    ],
    explanation: "Bij hoge emotionele arousal verschuift de bloedstroom van de PFC naar de amygdala. Het kind zit in overlevingsmodus en kan geen rationele informatie verwerken.",
    research: "Siegel, D. & Bryson, T. (2012). The Whole-Brain Child",
  },

  {
    id: "ec_2",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "basis",
    order: 2,
    question: "Fleur (6) is razend omdat ze niet naar het park mag. Ze schopt tegen de deur en huilt. Wat is de BESTE eerste stap?",
    options: [
      {
        id: "a",
        text: "\'Je bent teleurgesteld. Schoppen mag niet.\''Je bent teleurgesteld. Schoppen mag niet.' (emotie erkennen + grens)",
        isCorrect: true,
        feedback: "Perfect! Je geeft haar emotie een plek EN stelt een heldere grens over het gedrag. De emotie mag er zijn, het schoppen niet."
      },
      {
        id: "b",
        text: "\'Ga maar naar je kamer tot je gekalmeerd bent!\''Ga maar naar je kamer tot je gekalmeerd bent!'",
        isCorrect: false,
        feedback: "Time-out tijdens een piek voelt als afwijzing. Haar amygdala registreert: gevaar + alleen = meer stress, niet minder."
      },
      {
        id: "c",
        text: "\'Vooruit dan, we gaan wel even naar het park.\''Vooruit dan, we gaan wel even naar het park'",
        isCorrect: false,
        feedback: "Toegeven onder druk leert haar dat schoppen en huilen effectief is. De grens verdwijnt en het patroon versterkt."
      },
    ],
    explanation: "De gouden combinatie: valideer de emotie ('je bent teleurgesteld') en stel tegelijk de grens ('schoppen mag niet'). Dit biedt veiligheid zonder toe te geven.",
    research: "Gottman, J. (1997). Raising An Emotionally Intelligent Child",
  },

  {
    id: "ec_3",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 3,
    question: "Pepijn (10) barst in tranen uit omdat hij de laatste is die gekozen wordt bij gym. Je zegt: 'Ach joh, volgende keer word je eerder gekozen.' Waarom is dit problematisch?",
    options: [
      {
        id: "a",
        text: "Je bagatelliseert pijn die neurologisch even intens is als fysieke pijn",
        isCorrect: true,
        feedback: "Juist. fMRI-onderzoek toont dat sociale afwijzing dezelfde hersengebieden activeert als lichamelijke pijn. Zijn pijn is echt en verdient erkenning."
      },
      {
        id: "b",
        text: "Je bent te optimistisch en geeft hem daarmee een onrealistisch beeld van de situatie",
        isCorrect: false,
        feedback: "Het punt is niet realisme, maar dat je zijn ervaring minimaliseert. Zijn brein registreert echte pijn die je niet erkent."
      },
      {
        id: "c",
        text: "Je geeft een belofte die je niet kunt waarmaken en dat ondermijnt zijn vertrouwen",
        isCorrect: false,
        feedback: "De kern is niet de belofte maar het overslaan van validatie. Eerst moet zijn pijn gezien worden, dan pas toekomstperspectief."
      },
    ],
    explanation: "Sociale uitsluiting activeert de anterieure cingulate cortex - hetzelfde gebied als fysieke pijn. 'Het stelt niets voor' zeggen tegen een kind in sociale pijn is als zeggen 'die gebroken arm stelt niets voor'.",
    research: "Eisenberger, N. (2012). The pain of social disconnection",
  },

  {
    id: "ec_4",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 4,
    question: "Amber (3) heeft een woedeaanval in de supermarkt. Een voorbijganger zegt: 'Dat kind heeft gewoon een tik nodig.' Wat klopt er neurologisch NIET aan die bewering?",
    options: [
      {
        id: "a",
        text: "Een tik werkt misschien even, maar alleen als je het heel consequent en iedere keer doet",
        isCorrect: false,
        feedback: "Nee. Fysieke straf onderdrukt gedrag door angst, niet door begrip. Het brein leert: gevaar, niet regulatie."
      },
      {
        id: "b",
        text: "Een tik is bij een peuter niet hard genoeg om werkelijk indruk te maken of effect te hebben",
        isCorrect: false,
        feedback: "Het gaat niet om 'hard genoeg'. Elke vorm van fysieke straf vergroot de stress-respons en schaadt het vertrouwen."
      },
      {
        id: "c",
        text: "Een tik activeert de amygdala nog meer en verlengt de driftbui in plaats van te stoppen",
        isCorrect: true,
        feedback: "Juist! Pijn = gevaar-signaal voor het brein. De amygdala gaat in overdrive en de driftbui escaleert of het kind bevriest van angst."
      },
    ],
    explanation: "Fysieke straf tijdens een emotionele piek activeert de amygdala verder (meer cortisol, meer stress). Het kind stopt misschien uit angst, maar leert geen regulatie.",
    research: "Perry, B. (2006). The Boy Who Was Raised as a Dog",
  },

  {
    id: "ec_5",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 5,
    question: "Thijs (8) is woedend omdat zijn bouwwerk kapot is gevallen. Hij gooit speelgoed en schreeuwt. Welke neurologische volgorde werkt het best?",
    options: [
      {
        id: "a",
        text: "1) Uitleggen dat gooien niet mag 2) Samen alles opruimen 3) Proberen een nieuw bouwwerk te maken",
        isCorrect: false,
        feedback: "Je begint rationeel (PFC nodig) terwijl zijn PFC offline is. De uitleg komt niet aan en hij voelt zich niet gehoord."
      },
      {
        id: "b",
        text: "1) Nabijheid + emotie erkennen 2) Grens op gedrag 3) Later samen oplossing zoeken",
        isCorrect: true,
        feedback: "Perfect! Eerst veiligheid (co-regulatie) zodat de amygdala kalmeert, dan grens (PFC komt online), dan pas oplossen."
      },
      {
        id: "c",
        text: "1) Het speelgoed afpakken als straf 2) Wachten tot hij zelf stopt met huilen 3) Dan pas praten",
        isCorrect: false,
        feedback: "Speelgoed afpakken voelt als straf en escaleert de situatie. Het kind heeft eerst emotionele veiligheid nodig."
      },
    ],
    explanation: "De neurologische volgorde: 1) Amygdala kalmeren (nabijheid, validatie) 2) PFC activeren (grens stellen) 3) Hoger denken (oplossing zoeken, pas als PFC online is).",
    research: "Porges, S. (2011). The Polyvagal Theory",
  },

  {
    id: "ec_6",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "expert",
    order: 6,
    question: "Roos (5) heeft een intense driftbui gehad. Na 8 minuten is ze stil. Je begint direct een gesprek over haar gedrag. Ze barst opnieuw in huilen uit. Wat is er gebeurd?",
    options: [
      {
        id: "a",
        text: "De cortisol was nog niet afgebroken (duurt 20-45 min) - je was te vroeg",
        isCorrect: true,
        feedback: "Precies! Cortisol heeft 20-45 minuten nodig om af te breken. Na 8 minuten is het brein nog in stress-modus, ook al lijkt ze kalm."
      },
      {
        id: "b",
        text: "Ze was nog niet klaar met haar emotie, de stilte was geen teken van regulatie maar van uitputting",
        isCorrect: false,
        feedback: "Deels waar, maar specifieker: cortisol was nog volop actief. De stilte was uitputting, niet regulatie."
      },
      {
        id: "c",
        text: "Ze huilde opnieuw omdat ze zich erg schaamde voor haar eerdere driftbui en het gedrag dat ze toonde",
        isCorrect: false,
        feedback: "Nee. De tweede huilbui is een neurologische reactie: haar stress-systeem was nog actief en je gesprek was een nieuwe trigger."
      },
    ],
    explanation: "Cortisol (stresshormoon) heeft een halfwaardetijd van 60-90 minuten. De PFC heeft minimaal 20-45 minuten nodig om weer volledig online te komen na een piek.",
    research: "Perry, B. (2006). The Boy Who Was Raised as a Dog",
  },

  // ============================================================
  // MODULE 2: EMOTIES BENOEMEN - AFFECT LABELING (Vragen 7-12)
  // Affect labeling, emotiewoordenschat
  // ============================================================

  {
    id: "ec_7",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "basis",
    order: 7,
    question: "Lotte (5) huilt na een ruzie met haar vriendinnetje. Welke reactie helpt haar brein het meest?",
    options: [
      {
        id: "a",
        text: "\'Wat is er precies gebeurd? Vertel me alles.\''Wat is er precies gebeurd?' (open vraag)",
        isCorrect: false,
        feedback: "Een open vraag vereist rationeel nadenken. Tijdens emotionele overstroom is de PFC te beperkt voor complexe uitleg."
      },
      {
        id: "b",
        text: "\'Je voelt je gekwetst, dat snap ik heel goed.\''Je voelt je gekwetst.' (vaststelling)",
        isCorrect: true,
        feedback: "Juist! Een vaststelling geeft validatie zonder cognitieve druk. Haar PFC wordt geactiveerd door het emotiewoord, waardoor de amygdala kalmeert."
      },
      {
        id: "c",
        text: "\'Niet huilen, jullie zijn morgen weer vriendinnen.\''Niet huilen, jullie zijn morgen weer vriendinnetjes.' (geruststellen)",
        isCorrect: false,
        feedback: "Geruststellen slaat haar emotie over. Ze hoort: 'Je gevoel is niet belangrijk.' Eerst erkennen, dan perspectief."
      },
    ],
    explanation: "Affect labeling ('name it to tame it'): een emotie benoemen als vaststelling activeert de linker prefrontale cortex en remt de amygdala. Geen vraag, geen uitleg - gewoon benoemen.",
    research: "Lieberman, M. (2007). Putting Feelings Into Words",
  },

  {
    id: "ec_8",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 8,
    question: "Stijn (7) verliest bij een bordspel en veegt alle stukken van tafel. Je zegt: 'Je bent boos.' Welk label had effectiever geweest?",
    options: [
      {
        id: "a",
        text: "\'Je bent een slechte verliezer, dit doen we niet meer samen.\''Je bent een slechte verliezer.' (gedragslabel)",
        isCorrect: false,
        feedback: "Dit is een oordeel over zijn karakter, geen emotielabel. Het activeert schaamte in plaats van regulatie."
      },
      {
        id: "b",
        text: "\'Je bent een beetje geprikkeld, ga maar even wat anders doen.\''Je bent een beetje geprikkeld.' (vaag label)",
        isCorrect: false,
        feedback: "'Geprikkeld' is te vaag en minimaliseert de intensiteit. Specifieke woorden zoals 'gefrustreerd' en 'beschaamd' werken krachtiger."
      },
      {
        id: "c",
        text: "\'Je voelt je gefrustreerd en misschien ook beschaamd.\''Je voelt je gefrustreerd en misschien ook een beetje beschaamd.' (gelaagd label)",
        isCorrect: true,
        feedback: "Excellent! Meerdere, specifieke emotiewoorden activeren de PFC sterker dan een enkel generiek woord. Emotionele granulariteit helpt beter reguleren."
      },
    ],
    explanation: "Emotionele granulariteit: hoe specifieker en gelaagder het label, hoe meer PFC-activatie. 'Gefrustreerd en beschaamd' geeft meer houvast dan alleen 'boos'.",
    research: "Barrett, L. F. (2017). How Emotions Are Made",
  },

  {
    id: "ec_9",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "basis",
    order: 9,
    question: "Wat is het neurologische effect van het benoemen van een emotie bij een kind?",
    options: [
      {
        id: "a",
        text: "Het leidt het kind af van de situatie waardoor het even de emotie helemaal vergeet",
        isCorrect: false,
        feedback: "Nee. Affect labeling is geen afleidingstechniek. Het werkt via een specifiek neurologisch pad: taal activeert de PFC."
      },
      {
        id: "b",
        text: "De prefrontale cortex wordt actief en dempt de amygdala-activiteit",
        isCorrect: true,
        feedback: "Precies! fMRI-studies tonen: het benoemen van een emotie vermindert amygdala-activiteit met tot 50% en verhoogt PFC-activiteit."
      },
      {
        id: "c",
        text: "Het maakt het kind bewust van zijn emotie zodat hij zich ervoor gaat schamen",
        isCorrect: false,
        feedback: "Nee. Labelen is valideren, niet beschamen. Het zegt: 'deze emotie is OK en heeft een naam'. Dat geeft controle."
      },
    ],
    explanation: "Affect labeling is neurologisch bewezen: taal over emoties activeert de ventrolaterale PFC, die via neurale verbindingen de amygdala remt. Dit is 'name it to tame it'.",
    research: "Lieberman, M. et al. (2007). Putting Feelings Into Words (fMRI study)",
  },

  {
    id: "ec_10",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 10,
    question: "Iris (8) is boos dat ze niet mag logeren. Je zegt: 'Je bent boos.' Ze roept: 'IK BEN NIET BOOS!' Hoe reageer je?",
    options: [
      {
        id: "a",
        text: "\'Je bent wel boos, ik zie het heus wel aan je hoor!\''Je bent wel boos, ik zie het aan je!' (doorzetten)",
        isCorrect: false,
        feedback: "Dit wordt een machtsstrijd. Doorzetten met een label dat wordt afgewezen creëert verzet en escaleert."
      },
      {
        id: "b",
        text: "\'Je vindt het oneerlijk en teleurstellend dat het niet mag.\''Je vindt het oneerlijk en teleurstellend dat het niet mag.' (ander label, meer nuance)",
        isCorrect: true,
        feedback: "Goed! 'Boos' triggert soms verzet. Specifiekere emotiewoorden ('oneerlijk', 'teleurstellend') worden makkelijker geaccepteerd."
      },
      {
        id: "c",
        text: "\'OK, je bent niet boos. Ga maar lekker iets anders spelen.\''OK, je bent niet boos. Ga maar lekker spelen.' (laten gaan)",
        isCorrect: false,
        feedback: "Je geeft het labelen op. Ze heeft nog steeds validatie nodig, maar met andere woorden. Probeer specifieker."
      },
    ],
    explanation: "Bij verzet tegen een emotielabel: wissel naar specifiekere woorden. 'Teleurgesteld/oneerlijk/gefrustreerd' triggeren minder afweer dan het generieke 'boos'.",
    research: "Gottman, J. (1997). Raising An Emotionally Intelligent Child",
  },

  {
    id: "ec_11",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "expert",
    order: 11,
    question: "Onderzoek naar emotionele granulariteit toont dat kinderen met een rijke emotiewoordenschat significant beter reguleren. Hoeveel emotiewoorden is het streefdoel?",
    options: [
      {
        id: "a",
        text: "5-8 basisemoties zijn voldoende (blij, boos, bang, verdrietig, vies, verbaasd)",
        isCorrect: false,
        feedback: "Te weinig. Met alleen basiswoorden mist het kind nuance. 'Teleurgesteld' voelt anders dan 'woedend', maar beide zijn 'boos' met dit beperkte vocabulaire."
      },
      {
        id: "b",
        text: "Zoveel mogelijk emotiewoorden, want bij woordenschat is meer altijd beter",
        isCorrect: false,
        feedback: "Niet perse. Het gaat om functionele granulariteit: 30-40 goed begrepen woorden is effectiever dan 100 woorden die oppervlakkig gekend zijn."
      },
      {
        id: "c",
        text: "30+ woorden verdeeld over verschillende emotiefamilies",
        isCorrect: true,
        feedback: "Juist! Kinderen met 30+ emotiewoorden tonen betere regulatie, minder angst en depressie, en sterkere sociale vaardigheden."
      },
    ],
    explanation: "Emotional granularity: een woordenschat van 30+ emotiewoorden correleert met betere emotieregulatie. Het brein heeft specifieke taal nodig om emoties te differentiëren en reguleren.",
    research: "Barrett, L. F. (2017). How Emotions Are Made",
  },

  {
    id: "ec_12",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 12,
    question: "Boris (6) is overstuur na school maar kan niet vertellen wat er is. Welke aanpak past bij affect labeling?",
    options: [
      {
        id: "a",
        text: "\'Ik zie dat je van slag bent. Je hoeft niets te zeggen.\''Ik zie dat je van slag bent. Je hoeft niets te zeggen. Ik ben hier.' (labelen + geen druk)",
        isCorrect: true,
        feedback: "Perfect! Je benoemt wat je ziet (affect label), biedt veiligheid, en geeft geen cognitieve druk. Woorden komen vanzelf als de PFC terugkomt."
      },
      {
        id: "b",
        text: "\'Vertel nou gewoon wat er is, dan kan ik je helpen.\''Vertel nou wat er is, dan kan ik je helpen.' (aandringen)",
        isCorrect: false,
        feedback: "Aandringen creëert cognitieve druk terwijl zijn PFC al beperkt werkt. Dit verhoogt frustratie en afstand."
      },
      {
        id: "c",
        text: "\'Was het die ene jongen weer? Of was het de juf?\''Was het die ene jongen weer? Of de juf?' (gesloten vragen)",
        isCorrect: false,
        feedback: "Gesloten vragen voelen als een verhoor. Ze vereisen PFC-activiteit die er nu niet is en leiden af van de emotie."
      },
    ],
    explanation: "Als een kind niet kan vertellen wat er is: label wat je ZIET ('je bent van slag'), bied aanwezigheid, en wacht. Druk om te praten vertraagt het herstel.",
    research: "Siegel, D. (2010). Mindsight",
  },

  // ============================================================
  // MODULE 3: DE 5 STAPPEN VAN EMOTIECOACHING - GOTTMAN (Vragen 13-18)
  // ============================================================

  {
    id: "ec_13",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "basis",
    order: 13,
    question: "Gottmans 5 stappen van emotiecoaching beginnen met 'de emotie opmerken'. Vera (4) speelt stil in een hoek na de geboorte van haar broertje. Wat doe je?",
    options: [
      {
        id: "a",
        text: "Je herkent verdriet of onzekerheid en gaat bij haar zitten",
        isCorrect: true,
        feedback: "Juist! Stap 1 (emotie opmerken) geldt ook voor stille, internaliserende emoties. Niet alleen driftbuien verdienen aandacht."
      },
      {
        id: "b",
        text: "Niets - ze speelt rustig, dus er lijkt helemaal niets aan de hand",
        isCorrect: false,
        feedback: "Nee. Stil terugtrekken kan een signaal zijn van verdriet of onzekerheid. Stap 1 is: de emotie OPMERKEN, ook stille emoties."
      },
      {
        id: "c",
        text: "Je vraagt haar direct of ze het leuk vindt een grote zus te zijn",
        isCorrect: false,
        feedback: "Te snel naar stap 5 (oplossen). Eerst moet je de emotie opmerken (stap 1) en erkennen (stap 2). Ga bij haar zitten."
      },
    ],
    explanation: "Gottman stap 1: de emotie van je kind opmerken. Dit vereist afstemming op subtiele signalen. Stille emoties (terugtrekken, verlies van energie) zijn even belangrijk als luide.",
    research: "Gottman, J. (1997). Raising An Emotionally Intelligent Child",
  },

  {
    id: "ec_14",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 14,
    question: "Joep (7) is boos omdat zijn vriendje niet meer met hem wil spelen. Volgens Gottmans stap 3 (luisteren en valideren) - welke reactie is het beste?",
    options: [
      {
        id: "a",
        text: "\'Ga dan gewoon met iemand anders spelen, er zijn genoeg kinderen.\''Ga dan met iemand anders spelen.' (direct oplossen)",
        isCorrect: false,
        feedback: "Te snel. Oplossen is stap 5. Zonder eerst te luisteren en valideren (stap 3) voelt een oplossing als afwijzing van zijn pijn."
      },
      {
        id: "b",
        text: "\'Waarom wil hij niet meer met je spelen? Heb jij soms iets gedaan?\''Waarom wil hij niet meer met je spelen? Heb je iets gedaan?' (onderzoeken)",
        isCorrect: false,
        feedback: "'Heb je iets gedaan?' legt de schuld bij hem. Stap 3 is luisteren en valideren, niet ondervragen of oorzaken zoeken."
      },
      {
        id: "c",
        text: "\'Dat is echt vervelend. Vertel me er meer over.\''Dat is echt vervelend. Vertel me er meer over.' (validatie + uitnodiging)",
        isCorrect: true,
        feedback: "Perfect! Stap 3 = luisteren met empathie en de emotie valideren. Je erkent zijn pijn zonder te oordelen en nodigt hem uit meer te delen."
      },
    ],
    explanation: "Gottman stap 3 (luisteren en valideren): toon empathie, spiegel de emotie, en geef ruimte om te vertellen. Niet oordelen, niet oplossen - gewoon er zijn.",
    research: "Gottman, J. (1997). Raising An Emotionally Intelligent Child",
  },

  {
    id: "ec_15",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "basis",
    order: 15,
    question: "Wat is de juiste volgorde van Gottmans 5 stappen van emotiecoaching?",
    options: [
      {
        id: "a",
        text: "1) Grenzen stellen 2) Emotie opmerken 3) Oplossing bieden 4) Benoemen 5) Valideren",
        isCorrect: false,
        feedback: "Nee. Grenzen stellen als eerste stap blokkeert het proces. Zonder emotionele veiligheid komen grenzen niet aan."
      },
      {
        id: "b",
        text: "1) Emotie benoemen 2) Grenzen stellen 3) Oplossing zoeken 4) Luisteren 5) Verbinden",
        isCorrect: false,
        feedback: "Nee. Direct benoemen en grenzen stellen zonder eerst verbinding te maken en te luisteren mist de basis van veiligheid."
      },
      {
        id: "c",
        text: "1) Opmerken 2) Verbinden 3) Luisteren/valideren 4) Benoemen 5) Grenzen/oplossingen",
        isCorrect: true,
        feedback: "Juist! Deze volgorde is cruciaal. Elke stap bouwt voort op de vorige. Stappen overslaan of verwisselen maakt de aanpak minder effectief."
      },
    ],
    explanation: "Gottmans 5 stappen: 1) Opmerken 2) Verbinden 3) Luisteren/valideren 4) Benoemen 5) Grenzen + oplossingen. De volgorde waarborgt emotionele veiligheid voor het kind.",
    research: "Gottman, J. (1997). Raising An Emotionally Intelligent Child",
  },

  {
    id: "ec_16",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 16,
    question: "Nienke (9) is woedend omdat ze huisarrest krijgt. Je hebt stap 1-4 doorlopen (opmerken, verbinden, luisteren, benoemen). Bij stap 5 zeg je: 'Je bent boos, en je hebt huisarrest. Hoe kun je het anders aanpakken als je zo boos bent?' Ze haalt haar schouders op. Wat is hier aan de hand?",
    options: [
      {
        id: "a",
        text: "Ze is ongehoorzaam en wil gewoon niet meewerken met je aanpak of je goed bedoelde suggesties",
        isCorrect: false,
        feedback: "Nee. 'Schouders ophalen' bij stap 5 betekent vaak: de emotie is nog niet volledig gereguleerd. Ga terug naar stap 3."
      },
      {
        id: "b",
        text: "Stap 3 en 4 waren nog niet volledig afgerond - ze is nog niet klaar voor oplossingen",
        isCorrect: true,
        feedback: "Precies! Als stap 5 blokkeert, zijn eerdere stappen niet voldoende doorlopen. Ga terug naar luisteren en valideren."
      },
      {
        id: "c",
        text: "Stap 5 werkt niet bij oudere kinderen want die zijn te eigenwijs voor deze specifieke aanpak",
        isCorrect: false,
        feedback: "Stap 5 werkt bij alle leeftijden, maar alleen als stap 1-4 grondig doorlopen zijn. Bij blokkade: terug naar eerdere stappen."
      },
    ],
    explanation: "De 5 stappen zijn sequentieel. Als een latere stap niet werkt, is een eerdere stap niet volledig afgerond. Ga terug, neem meer tijd voor luisteren en valideren.",
    research: "Gottman, J. (1997). Raising An Emotionally Intelligent Child",
  },

  {
    id: "ec_17",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "expert",
    order: 17,
    question: "Wout (5) slaat zijn zusje. Je doorloopt Gottmans stappen: je merkt zijn woede op (stap 1), gaat op ooghoogte zitten (stap 2), luistert (stap 3), zegt 'Je bent boos op Merel' (stap 4). Bij stap 5 - wat is de BESTE aanpak?",
    options: [
      {
        id: "a",
        text: "\'Slaan mag niet. Wat kun je WEL doen als je boos bent?\''Slaan mag niet. Wat kun je WEL doen als je zo boos bent?' (grens + kind laten meedenken)",
        isCorrect: true,
        feedback: "Excellent! Stap 5 combineert een heldere grens met het kind zelf laten meedenken over alternatieven. Dit bouwt probleemoplossend vermogen."
      },
      {
        id: "b",
        text: "\'Je mag nooit meer slaan, heb je dat goed begrepen?\''Je mag nooit meer slaan, begrepen?' (dreigement)",
        isCorrect: false,
        feedback: "'Nooit meer' is onrealistisch en een dreigement. Stap 5 is: grenzen stellen EN samen alternatieven zoeken."
      },
      {
        id: "c",
        text: "\'Ik snap dat je boos bent, maar dit is echt niet OK.\''Ik snap dat je boos bent, maar dit is niet OK.' (stoppen na grens)",
        isCorrect: false,
        feedback: "De grens is goed, maar stap 5 is niet compleet zonder samen alternatieven te verkennen. Het kind heeft nieuwe vaardigheden nodig."
      },
    ],
    explanation: "Stap 5 = twee delen: 1) Heldere grens op gedrag ('slaan mag niet') 2) Samen alternatieven zoeken ('wat kun je WEL doen?'). Beide zijn nodig voor leereffect.",
    research: "Gottman, J. (1997). Raising An Emotionally Intelligent Child",
  },

  {
    id: "ec_18",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "expert",
    order: 18,
    question: "Onderzoek van Gottman toont dat kinderen van emotion-coaching ouders significant beter presteren op meerdere ontwikkelingsgebieden. Welk effect is het STERKST aangetoond?",
    options: [
      {
        id: "a",
        text: "Hogere IQ-scores op school en betere resultaten bij toetsen en examens",
        isCorrect: false,
        feedback: "Er is enige correlatie met schoolprestaties, maar het sterkste effect ligt op sociaal-emotioneel gebied, niet op IQ."
      },
      {
        id: "b",
        text: "Minder driftbuien door betere discipline en consequenter gedrag thuis",
        isCorrect: false,
        feedback: "Emotiecoaching is geen disciplinetechniek. Het effect is breder: betere regulatie, sociale vaardigheden en mentale gezondheid."
      },
      {
        id: "c",
        text: "Betere emotieregulatie, sterkere sociale vaardigheden, minder gedragsproblemen",
        isCorrect: true,
        feedback: "Juist! Gottmans longitudinaal onderzoek toont: kinderen van emotion-coaching ouders reguleren beter, hebben meer vrienden, en tonen minder externaliserende problemen."
      },
    ],
    explanation: "Gottmans meta-emotion onderzoek toont: de manier waarop ouders reageren op emoties voorspelt emotieregulatie, sociale competentie en gedragsproblemen van het kind.",
    research: "Gottman, J., Katz, L. & Hooven, C. (1996). Meta-emotion philosophy",
  },

  // ============================================================
  // MODULE 4: MOEILIJKE EMOTIES (Vragen 19-24)
  // Woede, angst, verdriet, jaloezie
  // ============================================================

  {
    id: "ec_19",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "basis",
    order: 19,
    question: "Guus (6) is woedend op zijn vader omdat die vergat hem op te halen van school. Hij schopt en schreeuwt. Wat zit er waarschijnlijk ONDER de woede?",
    options: [
      {
        id: "a",
        text: "Alleen woede - hij is gewoon heel erg boos en dat is de hele emotie die hij nu voelt",
        isCorrect: false,
        feedback: "Nee. Woede is bijna altijd een secundaire emotie die een kwetsbaardere primaire emotie beschermt. Kijk altijd dieper."
      },
      {
        id: "b",
        text: "Angst (ben ik vergeten?) en verdriet (teleurstelling)",
        isCorrect: true,
        feedback: "Juist! Woede bij kinderen maskeert bijna altijd kwetsbaardere emoties. Hier: angst om vergeten te worden + verdriet om de teleurstelling."
      },
      {
        id: "c",
        text: "Hij wil zijn vader bewust straffen door een zo groot mogelijke scene te maken op school",
        isCorrect: false,
        feedback: "Nee. Een 6-jarige maakt geen bewuste keuze om te straffen. Zijn zenuwstelsel reageert op angst en pijn met de enige verdediging die hij kent: woede."
      },
    ],
    explanation: "Woede is bijna altijd een secundaire (beschermende) emotie. De primaire emotie eronder is kwetsbaarder: angst, verdriet, schaamte, machteloosheid of uitsluiting.",
    research: "Greenberg, L. (2002). Emotion-Focused Therapy",
  },

  {
    id: "ec_20",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 20,
    question: "Jasmijn (8) is doodsbang voor honden. Elke keer als ze er een ziet, bevriest ze en huilt. Haar opa zegt: 'Stel je niet aan, die hond doet niets.' Wat is het effect van deze reactie?",
    options: [
      {
        id: "a",
        text: "Ze leert dat honden niet gevaarlijk zijn en haar angst verdwijnt vanzelf geleidelijk door gewenning",
        isCorrect: false,
        feedback: "Nee. Rationele uitleg ('die hond doet niets') bereikt de amygdala niet. Angst verdwijnt door geleidelijke blootstelling MET emotionele veiligheid."
      },
      {
        id: "b",
        text: "De angst wordt erger omdat haar emotie niet gevalideerd wordt en ze leert dat haar gevoelens niet kloppen",
        isCorrect: true,
        feedback: "Precies. Angst ontkennen versterkt de angst. Ze leert: 'Mijn gevoelens zijn fout' + 'Ik kan volwassenen niet vertrouwen met mijn emoties'."
      },
      {
        id: "c",
        text: "Ze went er op den duur aan en stopt uiteindelijk helemaal met reageren op de honden in de buurt",
        isCorrect: false,
        feedback: "Ze stopt misschien met uiten (onderdrukking), maar de angst blijft en kan zelfs verergeren. Onderdrukken is niet reguleren."
      },
    ],
    explanation: "Angst ontkennen ('stel je niet aan') leert het kind dat gevoelens fout zijn. Effectief: valideren ('je bent bang') + geleidelijke blootstelling met steun van een veilig persoon.",
    research: "Siegel, D. & Bryson, T. (2014). No-Drama Discipline",
  },

  {
    id: "ec_21",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "basis",
    order: 21,
    question: "Merel (5) huilt onbedaarlijk omdat haar goudvis is gestorven. Wat is de beste reactie?",
    options: [
      {
        id: "a",
        text: "\'Je mist Bubbles heel erg. Het is verdrietig als iemand er niet meer is.\''Je mist Bubbles heel erg. Het is verdrietig als iemand waar je van houdt er niet meer is.' (validatie van het verlies)",
        isCorrect: true,
        feedback: "Perfect! Je erkent het specifieke verlies en valideert de grootte van haar verdriet. Verdriet mag er zijn, ook om een goudvis."
      },
      {
        id: "b",
        text: "\'We kopen morgen gewoon een nieuwe goudvis, dan is het weer goed toch?\''We kopen morgen een nieuwe!' (snel oplossen)",
        isCorrect: false,
        feedback: "Dit ontkent haar verdriet. Ze rouwt om DEZE vis. Een nieuwe vis vervangt haar band niet en zegt: 'je verdriet is onnodig'."
      },
      {
        id: "c",
        text: "\'Het was maar een vis hoor. Niet zo huilen, dat hoeft helemaal niet.\''Het was maar een vis. Niet zo huilen.' (minimaliseren)",
        isCorrect: false,
        feedback: "Voor haar is dit een echt verlies. Minimaliseren leert haar dat verdriet niet mag en dat haar gevoelens overdreven zijn."
      },
    ],
    explanation: "Bij verdriet: valideer de grootte van het verlies VANUIT HET KIND. Wat voor jou klein is, kan voor een 5-jarige het grootste verlies van haar leven zijn.",
    research: "Gottman, J. (1997). Raising An Emotionally Intelligent Child",
  },

  {
    id: "ec_22",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 22,
    question: "Ruben (4) duwt zijn pasgeboren zusje weg en zegt: 'Stuur haar terug!' Wat is de primaire emotie?",
    options: [
      {
        id: "a",
        text: "Hij is een agressief kind dat niet goed kan delen met anderen in zijn omgeving",
        isCorrect: false,
        feedback: "Nee. Dit is geen agressie maar een angstrespons. Zijn hele wereld is veranderd en hij vreest zijn plek te verliezen."
      },
      {
        id: "b",
        text: "Verveling - hij vindt de baby niet interessant genoeg en wil liever zelf spelen",
        isCorrect: false,
        feedback: "Dit gaat veel dieper dan verveling. 'Stuur haar terug' is een noodkreet: 'Ik ben bang mijn plek te verliezen'."
      },
      {
        id: "c",
        text: "Jaloezie en angst: verlies van aandacht en positie in het gezin'Ben ik nog steeds geliefd? Is er nog plek voor mij?'",
        isCorrect: true,
        feedback: "Juist! Jaloezie bij een nieuw broertje/zusje maskeert existentiële angst: 'Houd je nog van mij? Word ik vervangen?'"
      },
    ],
    explanation: "Jaloezie bij een nieuw broertje/zusje is universeel en maskeert bestaansangst. Het kind vreest: word ik nog gezien? Ben ik nog geliefd? Is er nog plek voor mij?",
    research: "Greenberg, L. (2002). Emotion-Focused Therapy",
  },

  {
    id: "ec_23",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "expert",
    order: 23,
    question: "Sanne (10) heeft al weken buikpijn voor school, maar artsen vinden niets. Ze wordt steeds bozer thuis. Wat is de meest waarschijnlijke verklaring vanuit emotiecoaching?",
    options: [
      {
        id: "a",
        text: "Ze doet alsof ze buikpijn heeft om zo niet naar school te hoeven gaan iedere ochtend",
        isCorrect: false,
        feedback: "Nee. Somatische klachten bij kinderen zijn ECHT - het lichaam maakt de pijn die de emotie niet in woorden kan uitdrukken."
      },
      {
        id: "b",
        text: "Onbenoemde angst die zich somatisch uit; boosheid is een secundaire emotie",
        isCorrect: true,
        feedback: "Excellent! Onbenoemde emoties zoeken een lichamelijke uitweg (somatisering). De buikpijn IS de angst. De boosheid beschermt de kwetsbaarheid."
      },
      {
        id: "c",
        text: "Ze heeft een gevoelige maag van de spanning en is daardoor extra humeurig en prikkelbaar",
        isCorrect: false,
        feedback: "De artsen vinden niets. Dit patroon (lichamelijke klacht + boosheid + school-context) wijst sterk op onverwerkte emotie."
      },
    ],
    explanation: "Onbenoemde emoties worden somatisch: buikpijn, hoofdpijn, misselijkheid. Het lichaam 'spreekt' wat het kind niet in woorden kan zeggen. Boosheid thuis beschermt de kwetsbaarheid.",
    research: "Greenberg, L. & Paivio, S. (1997). Working with Emotions in Psychotherapy",
  },

  {
    id: "ec_24",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 24,
    question: "Timo (7) roept 'Ik wou dat je DOOD was!' na een grens. Je voelt je gekwetst. Wat is de beste reactie vanuit emotiecoaching?",
    options: [
      {
        id: "a",
        text: "\'Dat is heel lelijk! Ga onmiddellijk naar je kamer, nu meteen!\''Dat is heel lelijk! Ga naar je kamer!' (straf)",
        isCorrect: false,
        feedback: "Straf tijdens de piek escaleert. Bovendien mis je de kans om de primaire emotie te bereiken die achter deze uitspraak zit."
      },
      {
        id: "b",
        text: "\'Je bent ZO boos op me. En misschien ook verdrietig.\''Je bent ZO boos op me. En misschien ook verdrietig dat het niet mag.' (erken beide lagen)",
        isCorrect: true,
        feedback: "Juist! 'Ik wou dat je dood was' = extreme uiting van machteloosheid en verdriet. Erken de boosheid EN de pijn eronder."
      },
      {
        id: "c",
        text: "\'Dat meen je helemaal niet. Kom, we vergeten het gewoon.\''Dat meen je niet. Kom, we vergeten het.' (negeren)",
        isCorrect: false,
        feedback: "Hij meent de emotie wel, alleen niet letterlijk de woorden. Negeren leert hem dat intense emoties te gevaarlijk zijn om te uiten."
      },
    ],
    explanation: "Extreme uitspraken ('ik haat je', 'ik wou dat je dood was') zijn noodkreten. Primair: machteloosheid, verdriet, angst. Het kind test: 'Blijf je van me houden, ook als ik dit zeg?'",
    research: "Siegel, D. & Bryson, T. (2014). No-Drama Discipline",
  },

  // ============================================================
  // MODULE 5: VADER ALS EMOTIECOACH IN DE PRAKTIJK (Vragen 25-30)
  // ============================================================

  {
    id: "ec_25",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "basis",
    order: 25,
    question: "Onderzoek toont dat vaders die emotiecoaching toepassen een uniek effect hebben. Wat is dit specifieke vader-effect?",
    options: [
      {
        id: "a",
        text: "Emotiecoachende vaders hebben een sterker effect op regulatie, vooral bij externaliserende problemen",
        isCorrect: true,
        feedback: "Juist! Onderzoek toont dat vaders die emoties valideren een disproportioneel groot effect hebben, mogelijk omdat het minder verwacht wordt en daardoor extra krachtig is."
      },
      {
        id: "b",
        text: "Vaders zijn van nature beter in emotiecoaching dan moeders door hun mannelijke communicatiestijl",
        isCorrect: false,
        feedback: "Nee. Vaders zijn niet per se beter, maar hun emotiecoaching heeft een verrassend sterk effect, juist omdat emotionele afstemming van vaders zeldzamer is."
      },
      {
        id: "c",
        text: "Vaders hoeven alleen maar fysiek aanwezig te zijn bij hun kinderen - het effect is dan automatisch",
        isCorrect: false,
        feedback: "Nee. Alleen aanwezigheid is niet genoeg. Het effect komt door actieve emotiecoaching: opmerken, valideren, benoemen."
      },
    ],
    explanation: "Vaders die emotiecoachen hebben een uniek sterk effect op emotieregulatie, sociale competentie en minder gedragsproblemen bij kinderen. Dit 'vader-effect' is aanvullend op het moeder-effect.",
    research: "Gottman, J., Katz, L. & Hooven, C. (1996). Meta-emotion philosophy",
  },

  {
    id: "ec_26",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 26,
    question: "Femke (6) huilt bij het afscheid als je naar je werk gaat. Je partner zegt: 'Ga gewoon snel, dan is het voorbij.' Een emotiecoach-vader doet het anders. Hoe?",
    options: [
      {
        id: "a",
        text: "\'Je vindt het moeilijk als papa weggaat. Ik kom vanavond terug, dan spelen we samen.\''Je vindt het moeilijk als papa weggaat. Dat snap ik. Ik kom vanavond terug en dan gaan we samen spelen.' (validatie + voorspelbaarheid)",
        isCorrect: true,
        feedback: "Perfect! Je valideert haar verdriet (stap 3-4), geeft een grens (je gaat toch) EN biedt houvast (wanneer je terugkomt). Alle 5 stappen in actie."
      },
      {
        id: "b",
        text: "Je blijft thuis wachten tot ze helemaal stopt met huilen en dan ga je alsnog naar je werk",
        isCorrect: false,
        feedback: "Dit versterkt het patroon en leert haar dat huilen jou kan vasthouden. Een grens (je gaat naar werk) kan samengaan met emotiecoaching."
      },
      {
        id: "c",
        text: "Je sluipt stilletjes weg als ze even niet kijkt zodat je de hele vervelende scene vermijdt",
        isCorrect: false,
        feedback: "Wegsluipen verergert de scheidingsangst. Ze leert: papa kan zomaar verdwijnen. Dit vergroot de onveiligheid."
      },
    ],
    explanation: "Emotiecoaching en grenzen gaan samen. Valideer de emotie (verdriet bij afscheid is normaal), houd de grens (je gaat naar werk), en bied voorspelbaarheid (wanneer kom je terug).",
    research: "Gottman, J. (1997). Raising An Emotionally Intelligent Child",
  },

  {
    id: "ec_27",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "basis",
    order: 27,
    question: "Je merkt dat je als vader moeite hebt met de tranen van je kind. Je eerste impuls is altijd: oplossen of afleiden. Wat zegt de wetenschap over deze 'fix-it' neiging?",
    options: [
      {
        id: "a",
        text: "Dit komt door een aangeboren tekort aan empathie en dat kun je niet veranderen als volwassene",
        isCorrect: false,
        feedback: "Het is geen empathietekort maar een aangeleerd patroon. Emotiecoaching is een vaardigheid die elke vader kan leren."
      },
      {
        id: "b",
        text: "Dit is prima - vaders horen oplossers te zijn, dat is precies hun natuurlijke rol in het gezin",
        isCorrect: false,
        feedback: "Oplossen heeft een plek (stap 5), maar pas NA verbinding en validatie. Direct oplossen slaat de emotie over."
      },
      {
        id: "c",
        text: "Dit is een veelvoorkomend patroon bij vaders dat overwonnen moet worden voor emotiecoaching",
        isCorrect: true,
        feedback: "Juist! De 'fix-it' reflex is herkenbaar en begrijpelijk, maar blokkeert stap 2-4 van emotiecoaching. Eerst verbinden, dan pas oplossen."
      },
    ],
    explanation: "Veel vaders herkennen de 'fix-it' reflex: ongemak bij emoties van hun kind leidt tot snel willen oplossen of afleiden. Bewustwording is de eerste stap naar verandering.",
    research: "Gottman, J. (1997). Raising An Emotionally Intelligent Child",
  },

  {
    id: "ec_28",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 28,
    question: "Pepijn (9) komt huilend thuis na gepest te zijn. Je voelt woede opkomen richting de pesters. Wat doe je EERST als emotiecoach-vader?",
    options: [
      {
        id: "a",
        text: "Direct vragen wie de pesters waren en meteen de school bellen om actie te ondernemen",
        isCorrect: false,
        feedback: "Actie ondernemen kan later. Nu heeft hij een gereguleerde vader nodig die zijn pijn erkent, niet een boze vader die in actie schiet."
      },
      {
        id: "b",
        text: "Je eigen woede reguleren VOORDAT je reageert op je zoon",
        isCorrect: true,
        feedback: "Precies! Jouw ongereguleerde woede wordt door zijn zenuwstelsel opgepikt. Hij heeft jouw kalmte nodig, niet jouw woede. Eerst zelf reguleren."
      },
      {
        id: "c",
        text: "Hem direct leren hoe hij zichzelf de volgende keer fysiek moet verdedigen op school",
        isCorrect: false,
        feedback: "Dit is stap 5 (oplossingen), maar je slaat stap 1-4 over. Bovendien: hij heeft nu emotionele steun nodig, geen actieplan."
      },
    ],
    explanation: "De krachtigste eerste stap is jouw eigen regulatie. Jouw woede op de pesters is begrijpelijk, maar je zoon heeft nu een kalme, veilige vader nodig. Actie kan later.",
    research: "Porges, S. (2011). The Polyvagal Theory",
  },

  {
    id: "ec_29",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "expert",
    order: 29,
    question: "Je merkt dat je dochter Vera (8) haar emoties steeds meer voor je verbergt. Ze zegt altijd 'het gaat wel' en trekt zich terug. Wat is de meest waarschijnlijke oorzaak vanuit emotiecoaching-perspectief?",
    options: [
      {
        id: "a",
        text: "Ze is introvert en verwerkt haar emoties nu eenmaal veel beter alleen dan met anderen erbij",
        isCorrect: false,
        feedback: "Ook introverte kinderen hebben co-regulatie nodig. Consequent terugtrekken wijst op geleerd vermijdingsgedrag, niet op persoonlijkheidsstijl."
      },
      {
        id: "b",
        text: "Ze wordt steeds onafhankelijker en dit is een teken van gezonde zelfregulatie op haar leeftijd",
        isCorrect: false,
        feedback: "Nee. Op 8-jarige leeftijd is emotioneel terugtrekken geen zelfregulatie maar onderdrukking. Gezonde regulatie betekent emoties KUNNEN delen."
      },
      {
        id: "c",
        text: "Ze heeft geleerd dat emoties tot ongemak leiden bij jou en verbergt ze om de relatie te beschermen",
        isCorrect: true,
        feedback: "Juist. Kinderen die leren dat emoties ongewenst zijn (door te snel oplossen, bagatelliseren of negeren) stoppen met delen. Dit is een alarmsignaal."
      },
    ],
    explanation: "Wanneer een kind stopt met het delen van emoties, is dit vaak een signaal dat het kind geleerd heeft dat emoties onveilig zijn in de relatie. Dit vraagt om reflectie op je eigen reactiepatronen.",
    research: "Gottman, J., Katz, L. & Hooven, C. (1996). Meta-emotion philosophy",
  },

  {
    id: "ec_30",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "expert",
    order: 30,
    question: "Je bent vader van Stijn (6) en Lotte (4). Tijdens het avondeten slaat Stijn zijn zus. Lotte huilt. Stijn is boos. Jij voelt frustratie. Drie zenuwstelsels zijn in alarm. Hoe pas je emotiecoaching toe in deze chaos?",
    options: [
      {
        id: "a",
        text: "Eerst jezelf 3 seconden reguleren, dan beide kinderen kort erkennen'Slaan mag niet' (grens). Lotte kort troosten. Stijn: 'Jij bent ook boos.' Beiden zien.",
        isCorrect: true,
        feedback: "Excellent! Stap 0: zelf reguleren. Dan: grens op gedrag, beide kinderen kort valideren. Later (fase 4) met elk kind apart in gesprek."
      },
      {
        id: "b",
        text: "Stijn direct naar zijn kamer sturen, Lotte troosten, en later pas met Stijn praten",
        isCorrect: false,
        feedback: "Stijn wegsturen zonder validatie voelt als afwijzing. Hij heeft OOK een emotie die gezien moet worden. Beide kinderen hebben je nodig."
      },
      {
        id: "c",
        text: "Beiden even negeren tot ze vanzelf kalmeren en dan gewoon het eten weer voortzetten",
        isCorrect: false,
        feedback: "Negeren is het tegenovergestelde van emotiecoaching. Beide kinderen hebben nu co-regulatie nodig van een gereguleerde volwassene."
      },
    ],
    explanation: "In de praktijk is emotiecoaching rommelig en imperfect. De basis blijft: 1) Jezelf eerst reguleren 2) Grens op onveilig gedrag 3) Beide kinderen kort valideren 4) Later verdiepen.",
    research: "Siegel, D. & Bryson, T. (2012). The Whole-Brain Child",
  },

];

// Export the rest (Aanwezigheid, etc) unchanged from original file

// Placeholder arrays voor andere skills
export const ZELFREGULATIE_TRAINING: TrainingItem[] = [

  // ============================================================
  // MODULE 1: TRIGGERS HERKENNEN (Vragen 1-6)
  // Amygdala hijack, lichaamssignalen, window of tolerance
  // ============================================================

  {
    id: "zr_1",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "basis",
    order: 1,
    question: "Fleur (6) gooit per ongeluk verf over je laptop. Je springt op en schreeuwt keihard. Twee seconden later denk je: waarom reageer ik zo heftig? Wat is er neurologisch gebeurd?",
    context: "Soms neemt je emotionele brein het over voordat je kunt nadenken.",
    options: [
      {
        id: "a",
        text: "Je had gewoon een heel slechte dag en daardoor had je bijzonder weinig geduld over",
        isCorrect: false,
        feedback: "Het gaat niet om geduld. Je amygdala kaapte letterlijk je prefrontale cortex - een amygdala hijack. Binnen 12 milliseconden was je emotionele brein de baas.",
      },
      {
        id: "b",
        text: "Je amygdala nam je prefrontale cortex over - een hijack die sneller gaat dan denken",
        isCorrect: true,
        feedback: "Correct. Een amygdala hijack verloopt in 12 milliseconden, veel sneller dan je PFC kan reageren. Je schreeuwde voordat je uberhaupt kon nadenken.",
      },
      {
        id: "c",
        text: "Fleur had gewoon veel beter moeten opletten, dus je heftige reactie was volkomen terecht",
        isCorrect: false,
        feedback: "Een 6-jarige morst dingen - dat hoort erbij. De vraag is niet of het vervelend is, maar waarom jouw reactie zo disproportioneel was. Dat wijst op een amygdala hijack.",
      },
    ],
    explanation: "De amygdala hijack (term van Daniel Goleman) beschrijft het moment waarop je emotionele brein de controle overneemt. De amygdala detecteert 'gevaar' en bypassed de PFC volledig. Je reageert voordat je kunt denken.",
    research: "Goleman, D. (2005). Emotional Intelligence: Why It Can Matter More Than IQ",
  },

  {
    id: "zr_2",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "basis",
    order: 2,
    question: "Je staat in de keuken en Casper (4) gilt al 10 minuten omdat hij geen koekje mag. Je merkt: je kaken klemmen op elkaar, je schouders zitten bij je oren, en je ademt heel oppervlakkig. Wat betekenen deze signalen?",
    options: [
      {
        id: "a",
        text: "Dat je gespannen bent maar dat het vanzelf weer overgaat zodra Casper eindelijk stopt met gillen",
        isCorrect: false,
        feedback: "Wachten tot het vanzelf overgaat is riskant. Deze signalen zijn je early warning system: je fight-or-flight systeem is al geactiveerd.",
      },
      {
        id: "b",
        text: "Je lichaam waarschuwt je: je sympathisch zenuwstelsel activeert, je nadert je tolerantiegrens",
        isCorrect: true,
        feedback: "Correct. Gespannen kaak, opgetrokken schouders en oppervlakkige ademhaling zijn klassieke fight-or-flight signalen. Je lichaam waarschuwt je VOORDAT je explodeert.",
      },
      {
        id: "c",
        text: "Je hebt waarschijnlijk een medisch probleem met je spieren en moet binnenkort naar de huisarts",
        isCorrect: false,
        feedback: "Dit zijn stressreacties, geen medische klachten. Je autonome zenuwstelsel schakelt naar fight-or-flight. Leer deze signalen herkennen als je interne alarm.",
      },
    ],
    explanation: "Je lichaam reageert eerder dan je bewuste brein. Lichaamssignalen zoals gespannen kaak, opgetrokken schouders, oppervlakkige ademhaling en een verhoogde hartslag zijn tekenen dat je sympathisch zenuwstelsel activeert. Dit is je eerste waarschuwing dat je je window of tolerance nadert.",
    research: "Levine, P. (2010). In an Unspoken Voice: How the Body Releases Trauma",
  },

  {
    id: "zr_3",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 3,
    question: "Pepijn (8) laat steeds zijn natte handdoek op de grond liggen. Je hebt het al tien keer gezegd. Vandaag zie je de handdoek weer en je voelt een golf van woede die totaal niet past bij een natte handdoek. Wat is de beste verklaring?",
    options: [
      {
        id: "a",
        text: "\'Niet gehoord worden\' is de echte trigger, niet de handdoek zelf'Niet gehoord worden' is waarschijnlijk een diepe trigger die raakt aan een onvervulde behoefte - de handdoek is slechts de aanleiding, niet de oorzaak",
        isCorrect: true,
        feedback: "Correct. Als een situatie disproportionele woede oproept, is het een trigger. De handdoek staat symbool voor 'niet gerespecteerd worden' of 'niet gehoord worden' - vaak een echo uit je eigen verleden.",
      },
      {
        id: "b",
        text: "Pepijn doet dit bewust en expres om je te provoceren, je woede is logisch",
        isCorrect: false,
        feedback: "Een 8-jarige vergeet dingen - dat is normaal voor zijn ontwikkeling. De disproportionele woede zegt meer over jouw trigger dan over zijn gedrag.",
      },
      {
        id: "c",
        text: "Je bent gewoon heel erg moe en hebt vandaag een kort lontje, meer niet",
        isCorrect: false,
        feedback: "Vermoeidheid speelt altijd mee, maar de INTENSITEIT van je reactie op iets kleins wijst op een trigger. Een trigger raakt aan iets diepers dan dagelijkse vermoeidheid.",
      },
    ],
    explanation: "Een trigger is een situatie die een disproportionele emotionele reactie oproept. Het verschil tussen irritatie en een trigger: irritatie past bij de situatie, een trigger is veel intenser. Triggers raken vaak aan onvervulde behoeften uit je eigen kindertijd.",
    research: "Van der Kolk, B. (2014). The Body Keeps the Score",
  },

  {
    id: "zr_4",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 4,
    question: "Roos (11) zegt: 'Laat maar, jij snapt het toch niet.' Je voelt alsof ze je in je maag stompt. Je eigen vader zei vroeger altijd: 'Jij begrijpt er ook niets van.' Waarom raakt dit je zoveel harder dan een gewone opmerking?",
    options: [
      {
        id: "a",
        text: "Je amygdala reageert op twee lagen: de opmerking EN oude pijn van je eigen vader",
        isCorrect: true,
        feedback: "Correct. Je amygdala herkent het patroon uit je kindertijd en activeert de oude pijn bovenop de huidige situatie. Je reageert niet alleen op Roos, maar ook op de echo van je eigen vader.",
      },
      {
        id: "b",
        text: "Omdat Roos heel erg onbeleefd is en je dat als ouder absoluut niet moet accepteren",
        isCorrect: false,
        feedback: "De onbeleefdheid verklaart niet de INTENSITEIT van je reactie. De steek in je maag wijst erop dat hier meer speelt dan een brutale opmerking.",
      },
      {
        id: "c",
        text: "Je bent te overgevoelig en moet leren om zulke opmerkingen gewoon naast je neer te leggen",
        isCorrect: false,
        feedback: "Dit is geen overgevoeligheid maar een neurologische realiteit. Je amygdala koppelt huidige situaties aan oude pijn. Bewustzijn van deze koppeling is de eerste stap, niet het wegdrukken ervan.",
      },
    ],
    explanation: "Triggers zijn vaak echo's van onvervulde behoeften uit je eigen opvoeding. De amygdala slaat emotionele herinneringen op en reageert automatisch wanneer een huidige situatie op het oude patroon lijkt. Bewustzijn van deze bron vermindert de kracht van de trigger.",
    research: "Tsabary, S. (2010). The Conscious Parent",
  },

  {
    id: "zr_5",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 5,
    question: "Je merkt dat je window of tolerance de laatste maanden steeds smaller wordt. Kleine dingen (Guus (3) die traag eet, Ayla (7) die zanikt) brengen je direct buiten je tolerantievenster. Je kinderen worden voorzichtiger om je heen. Wat is de meest effectieve eerste stap?",
    context: "De window of tolerance is de zone waarbinnen je effectief kunt functioneren zonder in hyperarousal of hypoarousal te schieten.",
    options: [
      {
        id: "a",
        text: "Je kinderen duidelijker grenzen geven zodat ze veel minder triggerende dingen doen in het dagelijks leven",
        isCorrect: false,
        feedback: "Je kunt kinderen niet aanpassen aan jouw smalle window. Bovendien: kinderen die op eieren lopen rond hun vader ontwikkelen angst en onveilige hechting.",
      },
      {
        id: "b",
        text: "Meer discipline bij jezelf toepassen - als je een stuk strenger voor jezelf bent, dan hou je het beter vol",
        isCorrect: false,
        feedback: "Meer discipline met een smal window is als harder trappen op een lekke band. Je moet eerst begrijpen WAAROM je window smal is, niet harder proberen.",
      },
      {
        id: "c",
        text: "Herkennen dat een smal window een symptoom is en je triggers systematisch in kaart brengen",
        isCorrect: true,
        feedback: "Correct. Een smal window is een SYMPTOOM. Door je triggers systematisch te inventariseren (situatie, lichaamssignaal, intensiteit) ontdek je patronen. Dat bewustzijn is de eerste stap naar verbreding.",
      },
    ],
    explanation: "De window of tolerance (Dan Siegel) is de zone waarbinnen je effectief kunt reguleren. Een smal window betekent dat je snel in hyperarousal (woede, paniek) of hypoarousal (afsluiten, leegte) schiet. De eerste stap is altijd: bewustzijn van je triggers en patronen.",
    research: "Siegel, D. (1999). The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are",
  },

  {
    id: "zr_6",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 6,
    question: "Iedere keer als Thijs (9) boos wordt en deuren dichtslaat, voel je een overweldigende drang om hard in te grijpen. Je hart bonst, je ziet rood. In je eigen jeugd werd boosheid thuis niet getolereerd en bestraft met stilzwijgen. Wat moet je begrijpen over deze dynamiek?",
    options: [
      {
        id: "a",
        text: "Thijs moet leren dat driftbuien absoluut niet acceptabel zijn - je harde reactie is opvoedkundig noodzakelijk",
        isCorrect: false,
        feedback: "Grenzen stellen is belangrijk, maar je overweldigende fysieke reactie (hart bonst, rood zien) gaat verder dan opvoeden. Dit is een trigger-reactie, geen bewuste opvoedkeuze.",
      },
      {
        id: "b",
        text: "Je moet je eigen jeugd helemaal loslaten - het verleden heeft geen enkele invloed meer op het heden als ouder",
        isCorrect: false,
        feedback: "Het verleden heeft juist enorme invloed. De amygdala slaat emotionele herinneringen op zonder vervaldatum. Alleen bewustzijn van de koppeling vermindert de automatische reactie.",
      },
      {
        id: "c",
        text: "Je amygdala leerde als kind: boosheid = gevaar. Nu triggert Thijs diezelfde reactie' boosheid diezelfde alarm-respons, waardoor je vanuit angst reageert in plaats van vanuit wijsheid",
        isCorrect: true,
        feedback: "Correct. Je brein conditioneerde als kind: boosheid uiten = gevaar (straf/stilzwijgen). Nu detecteert je amygdala Thijs' boosheid als bedreiging en activeert fight-or-flight. Je straft vanuit je eigen oude angst.",
      },
    ],
    explanation: "Geconditioneerde trigger-responsen: je brein leerde als kind dat bepaalde emoties gevaarlijk zijn. Die conditionering blijft actief in de amygdala. Als je kind dezelfde emotie toont, reageert jouw brein alsof je zelf weer in gevaar bent. Bewustzijn doorbreekt de automatische cyclus.",
    research: "Van der Kolk, B. (2014). The Body Keeps the Score",
  },

  // ============================================================
  // MODULE 2: DE 90-SECONDEN REGEL (Vragen 7-12)
  // Emotiegolven, STOP-methode, reactie vs respons, 6-seconden pauze
  // ============================================================

  {
    id: "zr_7",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "basis",
    order: 7,
    question: "Je zoon (6) slaat zijn zusje (3). Je voelt woede opkomen. Volgens de 90-seconden regel, hoe lang duurt de chemische emotiegolf in je lichaam?",
    context: "Dr. Jill Bolte Taylor ontdekte dat een emotie een chemische golf is met een vaste duur.",
    options: [
      {
        id: "a",
        text: "5 minuten - emoties duren altijd lang en hebben veel tijd nodig om af te zakken",
        isCorrect: false,
        feedback: "Nee. De chemische golf duurt slechts 90 seconden. Als de emotie langer duurt, heractiveer je de golf door je eigen gedachten.",
      },
      {
        id: "b",
        text: "90 seconden - daarna kies je of je de emotie opnieuw activeert",
        isCorrect: true,
        feedback: "Correct. De chemische golf (adrenaline, cortisol) spoelt in 90 seconden door je systeem. Daarna is het je eigen denken dat de emotie in stand houdt.",
      },
      {
        id: "c",
        text: "30 seconden - emoties zijn heel kort en je kunt ze snel laten passeren als je wilt",
        isCorrect: false,
        feedback: "Te kort. De volledige chemische cascade (adrenaline + cortisol) heeft 90 seconden nodig om door je systeem te spoelen.",
      },
    ],
    explanation: "De 90-seconden regel: een emotie is een chemische reactie die 90 seconden duurt. Als je na 90 seconden nog boos bent, is het je eigen denken dat de chemie herstart. Dit is het verschil tussen reactie en respons.",
    research: "Bolte Taylor, J. (2009). My Stroke of Insight",
  },

  {
    id: "zr_8",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "basis",
    order: 8,
    question: "Je dochter (8) liegt tegen je over haar huiswerk. Je voelt je bloeddruk stijgen. Je gebruikt de STOP-methode. Wat is de juiste volgorde?",
    options: [
      {
        id: "a",
        text: "Sit - Talk - Open up - Plan (ga zitten, praat, stel je open, maak een plan)",
        isCorrect: false,
        feedback: "Nee. STOP staat voor: Stop, Take a breath, Observe, Proceed. Het gaat om een fysieke pauze, niet om een gesprek.",
      },
      {
        id: "b",
        text: "Scream - Think - Overreact - Panic (schreeuw, denk, overdrijf, raak in paniek)",
        isCorrect: false,
        feedback: "Dit is precies wat er gebeurt zonder de STOP-methode. De STOP-methode voorkomt automatische reacties.",
      },
      {
        id: "c",
        text: "Stop - Take a breath - Observe - Proceed (stop, adem, observeer, ga verder)",
        isCorrect: true,
        feedback: "Correct. Stop (pauzeer), Take a breath (adem), Observe (observeer wat er in je lichaam gebeurt), Proceed (kies bewust je reactie).",
      },
    ],
    explanation: "De STOP-methode creëert een pauze tussen trigger en reactie. In die pauze kan je PFC weer online komen. Zonder pauze reageert je amygdala automatisch (fight-or-flight).",
    research: "Kabat-Zinn, J. (2003). Mindfulness-Based Interventions in Context. Clinical Psychology: Science and Practice",
  },

  {
    id: "zr_9",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 9,
    question: "Je zoon (10) zegt: 'Jij bent de slechtste vader ooit!' Je voelt een steek in je borst. Je wilt terug schreeuwen. Wat is het verschil tussen je REACTIE en je RESPONS?",
    options: [
      {
        id: "a",
        text: "Reactie = automatisch vanuit amygdala. Respons = bewust vanuit PFC na een pauze",
        isCorrect: true,
        feedback: "Correct. Reactie is amygdala-gestuurd en automatisch. Respons is PFC-gestuurd en bewust. De 6-seconden pauze geeft je PFC tijd om online te komen.",
      },
      {
        id: "b",
        text: "Er is eigenlijk geen verschil tussen de twee - beide zijn emotionele reacties op dezelfde prikkel",
        isCorrect: false,
        feedback: "Er is een cruciaal verschil. Reactie = onbewust/automatisch. Respons = bewust/gekozen. Dit verschil bepaalt of je escaleert of de-escaleert.",
      },
      {
        id: "c",
        text: "Reactie is beter want die is authentiek en eerlijk, respons is nep en aangeleerd gedrag",
        isCorrect: false,
        feedback: "Nee. Bewust reageren is niet nep - het is emotionele volwassenheid. Je eerste impuls is vaak je amygdala, niet je wijsheid.",
      },
    ],
    explanation: "Reactie = amygdala (automatisch, snel, vaak escalerend). Respons = PFC (bewust, langzamer, de-escalerend). De 6-seconden pauze is genoeg voor de PFC om de amygdala te reguleren.",
    research: "Goleman, D. (2005). Emotional Intelligence: Why It Can Matter More Than IQ",
  },

  {
    id: "zr_10",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 10,
    question: "Je dochter (4) gooit haar bord eten op de grond. Je voelt woede opkomen. Je telt in stilte tot 6. Waarom precies 6 seconden?",
    options: [
      {
        id: "a",
        text: "6 seconden is de tijd die je PFC nodig heeft om de amygdala te reguleren",
        isCorrect: true,
        feedback: "Correct. Neurowetenschappelijk onderzoek toont dat 6 seconden de minimale tijd is voor de PFC om een amygdala-hijack te onderbreken.",
      },
      {
        id: "b",
        text: "6 is een willekeurig getal - het gaat puur om de afleiding die het tellen je geeft",
        isCorrect: false,
        feedback: "Nee. 6 seconden is niet willekeurig. Het is de neurobiologische tijd die je PFC nodig heeft om de amygdala-respons te moduleren.",
      },
      {
        id: "c",
        text: "Na 6 seconden is de emotie helemaal volledig verdwenen en voel je niets meer",
        isCorrect: false,
        feedback: "De emotie verdwijnt niet na 6 seconden. Maar de PFC komt genoeg online om je een KEUZE te geven in je reactie.",
      },
    ],
    explanation: "De 6-seconden pauze is een evidence-based techniek. In 6 seconden kan de PFC de amygdala-respons beginnen te moduleren. Je voelt nog steeds de emotie, maar je hebt nu een keuze.",
    research: "Freedman, J. (2007). At the Heart of Leadership: How to Get Results with Emotional Intelligence",
  },

  {
    id: "zr_11",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 11,
    question: "Na een conflict met je zoon (12) merk je dat je 10 minuten later NOG STEEDS boos bent. Volgens de 90-seconden regel is de chemische golf al voorbij. Wat houdt je boosheid in stand?",
    options: [
      {
        id: "a",
        text: "De oorspronkelijke chemische golf van het conflict is eigenlijk nog steeds bezig in je lichaam",
        isCorrect: false,
        feedback: "Nee. Na 90 seconden is de oorspronkelijke chemische golf uitgewerkt. Wat overblijft is zelfgegenereerd.",
      },
      {
        id: "b",
        text: "Je gedachten heractiveren de chemische golf telkens opnieuw'denkt' jezelf boos",
        isCorrect: true,
        feedback: "Correct. Na 90 sec herstart je eigen denken ('Hij heeft altijd geen respect!') de chemische cascade. Je loopt in een gedachte-emotie-loop.",
      },
      {
        id: "c",
        text: "Sommige emoties duren nu eenmaal veel langer dan 90 seconden, dat is heel normaal en menselijk",
        isCorrect: false,
        feedback: "De chemische golf duurt altijd ~90 sec. Langere emoties worden in stand gehouden door herhaalde gedachten die de golf telkens opnieuw triggeren.",
      },
    ],
    explanation: "De gedachte-emotie-loop: een gedachte triggert een emotie, die een gedachte triggert, die weer een emotie triggert. Mindfulness doorbreekt deze loop door de gedachte te observeren zonder erin mee te gaan.",
    research: "Bolte Taylor, J. (2009). My Stroke of Insight",
  },

  {
    id: "zr_12",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 12,
    question: "Je peuter (2) heeft de hele ochtend gehuild. Je staat op het punt om te schreeuwen. Je doet de STOP-methode maar bij 'Observe' merk je: je vuisten zijn gebald, je kaak is gespannen, je hartslag is hoog. Wat doe je bij 'Proceed'?",
    options: [
      {
        id: "a",
        text: "De situatie verlaten - je lichaam vertelt je dat je buiten je window bent",
        isCorrect: true,
        feedback: "Correct. Je lichaamssignalen tonen dat je buiten je window of tolerance bent. Proceed = veilige keuze. Hier: even weglopen (als het veilig is) en reguleren.",
      },
      {
        id: "b",
        text: "Toch doorgaan en je emotie onderdrukken want jij bent hier de volwassene en moet sterk zijn",
        isCorrect: false,
        feedback: "Nee. Onderdrukken buiten je window of tolerance leidt tot explosie of implosie. Even weglopen is verantwoordelijk, niet zwak.",
      },
      {
        id: "c",
        text: "Je frustratie hardop uitspreken naar je peuter zodat je het gevoel tenminste even kwijt bent",
        isCorrect: false,
        feedback: "Een 2-jarige kan jouw frustratie niet dragen. Dit is emotionele ontlading op je kind. Reguleer eerst jezelf.",
      },
    ],
    explanation: "De 'Proceed' stap is niet altijd 'ga door met de situatie'. Soms is de wijste Proceed: vertrek de situatie. Je lichaamssignalen zijn je kompas. Buiten je window = eerst reguleren.",
    research: "Siegel, D. (2010). Mindsight: The New Science of Personal Transformation",
  },

  // ============================================================
  // MODULE 3: JOUW TRIGGER LANDKAART (Vragen 13-18)
  // Triggers herkennen, lichaamssignalen, window of tolerance
  // ============================================================

  {
    id: "zr_13",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "basis",
    order: 13,
    question: "Je zoon (7) luistert niet als je iets vraagt. Hij negeert je compleet. Je merkt dat dit je VEEL bozer maakt dan andere dingen die hij doet. Wat zegt dit over jou?",
    context: "Een trigger is een situatie die een disproportionele emotionele reactie oproept.",
    options: [
      {
        id: "a",
        text: "\'Genegeerd worden\' raakt een diepere laag bij jou, niet de handdoek'Genegeerd worden' is waarschijnlijk een trigger die raakt aan een onvervulde behoefte uit je eigen verleden",
        isCorrect: true,
        feedback: "Correct. Als een situatie je disproportioneel raakt, is het vaak een echo van je eigen kindertijd. Misschien werd jij ook genegeerd.",
      },
      {
        id: "b",
        text: "Niets bijzonders - elk kind dat consequent niet luistert is gewoon heel erg irritant",
        isCorrect: false,
        feedback: "Het gaat niet om de irritatie zelf, maar om de INTENSITEIT. Een disproportionele reactie wijst op een trigger - een onvervulde behoefte uit je eigen verleden.",
      },
      {
        id: "c",
        text: "Je zoon doet dit heel bewust en expres om jou te provoceren en je grenzen te testen",
        isCorrect: false,
        feedback: "Een 7-jarige die niet luistert is meestal afgeleid of verdiept, niet provocerend. De intensiteit van jouw reactie zegt meer over jou dan over hem.",
      },
    ],
    explanation: "Een trigger = een situatie die een disproportionele reactie oproept. Het verschil tussen irritatie en trigger: irritatie past bij de situatie, een trigger is veel intenser dan de situatie rechtvaardigt.",
    research: "Van der Kolk, B. (2014). The Body Keeps the Score",
  },

  {
    id: "zr_14",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "basis",
    order: 14,
    question: "Je dochter (5) heeft een driftbui in de supermarkt. Je merkt: je kaak spant, je vuisten ballen, je hartslag gaat omhoog. Wat zijn dit voor signalen?",
    options: [
      {
        id: "a",
        text: "Normale reacties die iedereen heeft en die je gewoon moet negeren tot ze weggaan",
        isCorrect: false,
        feedback: "Negeren is gevaarlijk. Deze signalen zijn je early warning system. Als je ze negeert, escaleer je zonder het te merken.",
      },
      {
        id: "b",
        text: "Lichaamssignalen dat je fight-or-flight systeem activeert - je early warning",
        isCorrect: true,
        feedback: "Correct. Je lichaam reageert EERDER dan je bewuste brein. Kaak, vuisten, hartslag = sympathisch zenuwstelsel activeert. Dit zijn je eerste waarschuwingen.",
      },
      {
        id: "c",
        text: "Tekenen dat je waarschijnlijk ziek aan het worden bent en even moet gaan zitten",
        isCorrect: false,
        feedback: "Nee. Dit zijn stressreacties, geen ziektesymptomen. Je lichaam bereidt zich voor op 'gevecht of vlucht'.",
      },
    ],
    explanation: "Je lichaam is je eerste alarmsysteem. Lichaamssignalen (gespannen kaak, gebalde vuisten, verhoogde hartslag, oppervlakkige ademhaling) verschijnen VOOR je bewust boos bent. Leer ze herkennen.",
    research: "Levine, P. (2010). In an Unspoken Voice: How the Body Releases Trauma",
  },

  {
    id: "zr_15",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 15,
    question: "Je zoon (9) schreeuwt: 'Ik haat je!' Je voelt een steek in je borst en je wilt hem straffen. Later besef je dat je eigen vader nooit zei dat hij van je hield. Wat is hier de verbinding?",
    options: [
      {
        id: "a",
        text: "Er is geen verbinding - je zoon is gewoon onbeleefd en heeft discipline nodig van je",
        isCorrect: false,
        feedback: "De intensiteit van je reactie (steek in je borst, willen straffen) wijst op meer dan onbeleefdheid. Dit raakt aan een oud pijnpunt.",
      },
      {
        id: "b",
        text: "Je trigger raakt aan iets uit je eigen verleden dat nog niet verwerkt is'ik haat je') activeert een onvervulde behoefte uit je kindertijd - het gemis van liefde van je eigen vader",
        isCorrect: true,
        feedback: "Correct. De woorden van je zoon activeren een oud pijnpunt. Je reageert niet alleen op je zoon, maar ook op het kind in jezelf dat nooit liefde hoorde.",
      },
      {
        id: "c",
        text: "Je moet je zoon leren dat hij op een andere manier moet praten tegen zijn vader'ik haat je' nooit acceptabel is",
        isCorrect: false,
        feedback: "Grenzen stellen op taalgebruik kan, maar dat lost je trigger niet op. De intensiteit van je reactie vraagt om zelfreflectie, niet alleen om opvoeding.",
      },
    ],
    explanation: "Triggers zijn vaak echo's van onvervulde behoeften uit je eigen kindertijd. Als je zoon 'ik haat je' zegt, reageert je amygdala op twee lagen: het huidige moment én de oude pijn. Bewustzijn van de bron vermindert de kracht van de trigger.",
    research: "Tsabary, S. (2010). The Conscious Parent",
  },

  {
    id: "zr_16",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 16,
    question: "Je bent in een rustig gesprek met je dochter (11) over haar schoolresultaten. Ze zegt: 'Het boeit me niet.' Plotseling ben je razend. Je schreeuwt dingen die je niet meent. Wat is er neurologisch gebeurd?",
    options: [
      {
        id: "a",
        text: "Je dochter provoceerde je heel bewust en doelbewust met die specifieke opmerking over school",
        isCorrect: false,
        feedback: "Een 11-jarige die zegt 'het boeit me niet' test grenzen, maar jouw razernij is disproportioneel. Het probleem zit in jouw trigger, niet in haar woorden.",
      },
      {
        id: "b",
        text: "Je had gewoon toevallig een slecht moment en dat overkomt nu eenmaal iedereen wel eens als ouder",
        isCorrect: false,
        feedback: "Het is niet 'gewoon een slecht moment'. De snelheid en intensiteit van de omslag wijzen op een amygdala-hijack, getriggerd door een gevoelig punt.",
      },
      {
        id: "c",
        text: "Je hebt een amygdala-hijack ervaren: je emotionele brein nam je rationele brein over",
        isCorrect: true,
        feedback: "Correct. Een amygdala-hijack: de amygdala neemt de PFC over in milliseconden. Je bent buiten je window of tolerance geschoten door een trigger.",
      },
    ],
    explanation: "Een amygdala-hijack gebeurt in 12 milliseconden - sneller dan je PFC kan reageren. De trigger ('het boeit me niet') raakte waarschijnlijk aan een oud pijnpunt (niet gezien worden, onbelangrijk zijn).",
    research: "Goleman, D. (2005). Emotional Intelligence: Why It Can Matter More Than IQ",
  },

  {
    id: "zr_17",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 17,
    question: "Je merkt dat je window of tolerance heel smal is: kleine dingen (speelgoed op de grond, gemorste melk) brengen je direct buiten je tolerantievenster. Je kinderen (4 en 7) lopen op eieren. Wat is de EERSTE stap?",
    context: "De window of tolerance is de zone waarbinnen je effectief kunt functioneren.",
    options: [
      {
        id: "a",
        text: "Je kinderen leren om veel stiller te zijn en voortaan een stuk minder rommel te maken in huis",
        isCorrect: false,
        feedback: "Je kunt kinderen niet aanpassen aan jouw smalle window. Het probleem is jouw window, niet hun gedrag. Kinderen die op eieren lopen ontwikkelen angst.",
      },
      {
        id: "b",
        text: "Erkennen dat je window smal is en je 4 pilaren checken: welke is verzwakt?",
        isCorrect: true,
        feedback: "Correct. Een smal window is een SYMPTOOM. De oorzaak zit in verzwakte pilaren. Check systematisch: slaap, voeding, beweging, verbinding. Begin met de zwakste.",
      },
      {
        id: "c",
        text: "Meer discipline toepassen bij jezelf - als je strenger bent voor jezelf heb je minder last ervan",
        isCorrect: false,
        feedback: "Meer discipline met een smal window = meer explosies. Je moet eerst je eigen window verbreden, dan pas opvoeden vanuit rust.",
      },
    ],
    explanation: "De window of tolerance (Dan Siegel) is de zone waarbinnen je effectief kunt reguleren. Een smalle window = snel in hyperarousal (woede) of hypoarousal (afkoppelen). De 4 pilaren verbreden je window.",
    research: "Siegel, D. (1999). The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are",
  },

  {
    id: "zr_18",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 18,
    question: "Een vader zegt: 'Elke keer als mijn zoon (8) huilt, word ik razend. Ik weet dat het niet normaal is.' In zijn eigen opvoeding werd huilen bestraft met 'Mannen huilen niet.' Wat moet hij begrijpen?",
    options: [
      {
        id: "a",
        text: "Zijn trigger is een geconditioneerde reactie uit zijn kindertijd - zijn brein koppelde huilen aan gevaar",
        isCorrect: true,
        feedback: "Correct. Zijn brein leerde als kind: huilen = gevaar (straf). Nu triggert het huilen van zijn zoon diezelfde angstrespons, die zich uit als woede.",
      },
      {
        id: "b",
        text: "Hij moet gewoon accepteren dat huilen heel normaal is bij kinderen en zijn irritatie wegslikken als vader",
        isCorrect: false,
        feedback: "Cognitief weten dat huilen normaal is, is niet genoeg. Zijn amygdala reageert op basis van zijn eigen conditionering. Hij heeft diepere verwerking nodig.",
      },
      {
        id: "c",
        text: "Sommige vaders zijn nu eenmaal een stuk minder comfortabel met emoties dan moeders - dat is gewoon oké",
        isCorrect: false,
        feedback: "Dit normaliseert een probleem. Zijn woede bij huilen is geen 'mannending' maar een trauma-respons die zijn relatie met zijn zoon schaadt.",
      },
    ],
    explanation: "Triggers zijn vaak geconditioneerde responsen. Het brein leert: stimulus (huilen) = gevaar (straf van eigen vader). Nu reageert de amygdala automatisch op het huilen van zijn zoon. Bewustwording is de eerste stap naar verandering.",
    research: "Van der Kolk, B. (2014). The Body Keeps the Score",
  },

  // ============================================================
  // MODULE 4: VADER BURNOUT (Vragen 19-24)
  // 7 signalen, cortisol chronisch, burnout vs stress, micro-momenten
  // ============================================================

  {
    id: "zr_19",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "basis",
    order: 19,
    question: "Een vader van twee kinderen (3 en 6) werkt fulltime en doet veel in het huishouden. Hij voelt zich leeg, heeft nergens meer zin in, en functioneert op automatische piloot. Is dit stress of burnout?",
    context: "Stress en burnout worden vaak verward, maar zijn fundamenteel verschillend.",
    options: [
      {
        id: "a",
        text: "Stress - hij moet gewoon even vakantie nemen en daarna is het weer helemaal in orde",
        isCorrect: false,
        feedback: "Bij stress voel je TOO VEEL (te veel druk, te veel emotie). Bij burnout voel je TOO WEINIG (leeg, geen motivatie). Dit klinkt als burnout.",
      },
      {
        id: "b",
        text: "Geen van beide - dit is heel normaal voor alle vaders met jonge kinderen in deze fase",
        isCorrect: false,
        feedback: "Nee. Leegte, geen motivatie, en automatische piloot zijn niet 'normaal'. Dit zijn signalen van emotionele uitputting die aandacht nodig hebben.",
      },
      {
        id: "c",
        text: "Burnout - bij stress voel je te veel, bij burnout voel je niets meer",
        isCorrect: true,
        feedback: "Correct. Stress = hyperactivatie (te veel). Burnout = uitputting (te weinig). Automatische piloot en leegte zijn kenmerkend voor burnout, niet voor stress.",
      },
    ],
    explanation: "Stress = teveel druk maar nog energie om te reageren. Burnout = de energie is op. Bij stress ben je een overvolle beker, bij burnout een lege. De aanpak verschilt: stress = minder doen, burnout = langzaam weer opbouwen.",
    research: "Maslach, C. & Leiter, M. (2016). Burnout. In Stress: Concepts, Cognition, Emotion, and Behavior",
  },

  {
    id: "zr_20",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 20,
    question: "Welk van deze is GEEN signaal van vader-burnout?",
    options: [
      {
        id: "a",
        text: "Je voelt je schuldig dat je soms liever op je werk bent dan thuis bij je eigen kinderen",
        isCorrect: false,
        feedback: "Dit IS een burnout-signaal: emotionele afstand. Als thuis aanvoelt als 'werk' en werk als 'pauze', is dat een waarschuwing.",
      },
      {
        id: "b",
        text: "Je reageert emotioneel afgevlakt op je kinderen - je voelt geen vreugde meer bij leuke dingen",
        isCorrect: false,
        feedback: "Dit IS een kernkenmerk van burnout: emotionele afvlakking (depersonalisatie). Je voelt niets meer bij momenten die je vroeger blij maakten.",
      },
      {
        id: "c",
        text: "Je bent enthousiast over een nieuw project op werk en hebt even minder tijd voor thuis",
        isCorrect: true,
        feedback: "Correct. Enthousiasme over iets nieuws is GEEN burnout-signaal. Burnout kenmerkt zich door leegte en afwezigheid van motivatie, niet door enthousiasme.",
      },
    ],
    explanation: "De 7 signalen van vader-burnout: 1) emotionele uitputting, 2) afstandelijkheid, 3) prikkelbaar zonder reden, 4) fysieke klachten, 5) schuldgevoel, 6) automatische piloot, 7) verlies van plezier in ouderschap.",
    research: "Roskam, I. et al. (2018). Exhausted Parents: Development and Preliminary Validation of the Parental Burnout Inventory. Frontiers in Psychology",
  },

  {
    id: "zr_21",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 21,
    question: "Een vader in burnout heeft chronisch verhoogd cortisol. Wat betekent dit voor zijn opvoeding?",
    options: [
      {
        id: "a",
        text: "Zijn PFC functioneert slechter - minder geduld, minder empathie, sneller impulsief",
        isCorrect: true,
        feedback: "Correct. Chronisch cortisol vermindert PFC-volume en -functie. Dit betekent letterlijk minder capaciteit voor geduld, empathie en impulse control.",
      },
      {
        id: "b",
        text: "Niets bijzonders - cortisol is een heel normaal hormoon dat iedereen in zijn lichaam heeft",
        isCorrect: false,
        feedback: "Cortisol is normaal bij acute stress. Maar CHRONISCH verhoogd cortisol beschadigt de hippocampus en PFC, waardoor regulatie structureel verzwakt.",
      },
      {
        id: "c",
        text: "Hij heeft juist meer energie door het cortisol, maar voelt zich daardoor wel erg onrustig",
        isCorrect: false,
        feedback: "Bij acute stress geeft cortisol energie. Bij chronisch verhoogd cortisol raakt het systeem uitgeput. Het resultaat is uitputting, niet energie.",
      },
    ],
    explanation: "Chronisch verhoogd cortisol is neurotoxisch: het beschadigt de hippocampus (geheugen) en PFC (regulatie). Een vader in burnout heeft letterlijk een minder functionerend brein voor opvoeding. Herstel is noodzakelijk.",
    research: "McEwen, B. (2007). Physiology and neurobiology of stress and adaptation. Physiological Reviews, 87(3)",
  },

  {
    id: "zr_22",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 22,
    question: "Je herkent 5 van de 7 burnout-signalen bij jezelf. Je kinderen zijn 2 en 5. Je partner zegt: 'Neem een weekje vrij, dan ben je weer de oude.' Klopt dit?",
    options: [
      {
        id: "a",
        text: "Nee. Burnout vereist structurele verandering in de 4 pilaren en eventueel professionele hulp",
        isCorrect: true,
        feedback: "Correct. Burnout = structurele uitputting. Een week vrij is als een pleister op een breuk. Je hebt systematische pilaar-herstel nodig en mogelijk professionele ondersteuning.",
      },
      {
        id: "b",
        text: "Ja, een week goed uitrusten lost burnout helemaal op en daarna ben je er weer helemaal klaar voor",
        isCorrect: false,
        feedback: "Nee. Burnout herstelt niet met een weekje vrij. Het verschil met stress: stress herstelt met rust, burnout vereist structurele verandering.",
      },
      {
        id: "c",
        text: "Nee, maar hij moet gewoon veel harder zijn best doen als vader en zich er overheen zetten als man",
        isCorrect: false,
        feedback: "Burnout los je niet op door harder proberen. Dat is de oorzaak, niet de oplossing. Minder doen en beter herstellen is de weg.",
      },
    ],
    explanation: "Burnout ≠ vermoeidheid. Burnout = systemische uitputting op emotioneel, fysiek en mentaal vlak. Herstel vereist: structurele verandering in pilaren, grenzen stellen aan verantwoordelijkheden, en vaak professionele begeleiding.",
    research: "Mikolajczak, M. & Roskam, I. (2018). A Theoretical and Clinical Framework for Parental Burnout. Frontiers in Psychology",
  },

  {
    id: "zr_23",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 23,
    question: "Een vader in burnout wil herstellen maar heeft 'geen tijd'. Zijn kinderen zijn 1 en 4. Wat is de meest effectieve eerste stap?",
    options: [
      {
        id: "a",
        text: "Een uitgebreid en ambitieus herstelplan maken met dagelijks sport, wekelijkse therapie en sociale activiteiten",
        isCorrect: false,
        feedback: "Een uitgebreid plan voelt bij burnout als NOG een taak. Micro-momenten zijn de ingang: klein beginnen, geen ambitieus plan.",
      },
      {
        id: "b",
        text: "Micro-momenten van herstel inbouwen: 2 min ademhaling, 5 min buiten, 1 koffie in stilte",
        isCorrect: true,
        feedback: "Correct. Bij burnout is de sleutel: klein beginnen. Micro-momenten (2-5 min) zijn haalbaar en doorbreken de cortisol-cyclus. Stapelen werkt beter dan een groot plan.",
      },
      {
        id: "c",
        text: "Wachten tot het vanzelf overgaat - met kinderen wordt het altijd makkelijker naarmate ze een stuk ouder worden",
        isCorrect: false,
        feedback: "Burnout gaat niet vanzelf over. Zonder interventie verergert het. Wachten is geen strategie bij chronisch verhoogd cortisol.",
      },
    ],
    explanation: "Micro-momenten van herstel: korte momenten (2-5 min) die je parasympathisch zenuwstelsel activeren. Bij burnout is de energie er niet voor grote veranderingen. Klein beginnen creëert momentum voor grotere stappen.",
    research: "Fredrickson, B. (2009). Positivity: Top-Notch Research Reveals the 3-to-1 Ratio That Will Change Your Life",
  },

  {
    id: "zr_24",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 24,
    question: "Een vader zegt: 'Ik voel me schuldig als ik iets voor MEZELF doe. Mijn kinderen (3 en 7) hebben me nodig.' Wat is de valkuil van dit denken bij vader-burnout?",
    options: [
      {
        id: "a",
        text: "Hij heeft helemaal gelijk - als vader moet je jezelf volledig opofferen voor je kinderen, dat is je plicht",
        isCorrect: false,
        feedback: "Zelfopoffering leidt tot burnout, en een vader in burnout is een slechtere ouder. Zelfzorg is geen egoïsme maar een voorwaarde voor goede opvoeding.",
      },
      {
        id: "b",
        text: "Hij moet de schuld negeren en gewoon doen wat hij zelf wil zonder zich daar druk over te maken als vader",
        isCorrect: false,
        feedback: "Het schuldgevoel negeren werkt niet - het komt terug. Beter: erkennen dat zelfzorg JUIST voor je kinderen is. Reframe van egoïsme naar verantwoordelijkheid.",
      },
      {
        id: "c",
        text: "Zelfzorg is geen egoisme maar een voorwaarde: een lege batterij kan een kind niet opladen",
        isCorrect: true,
        feedback: "Correct. Je kunt niet geven wat je niet hebt. Zelfzorg is een investering in je kinderen. Een vader met volle batterij is een betere vader.",
      },
    ],
    explanation: "De schuldvalkuil: vaders voelen zich schuldig over zelfzorg. Maar zelfzorg is geen luxe - het is het fundament van goede opvoeding. Een vader met herstelde pilaren is aanweziger, geduldiger en empathischer.",
    research: "Roskam, I. et al. (2018). Exhausted Parents. Frontiers in Psychology",
  },

  // ============================================================
  // MODULE 5: STRESSBESTENDIGHEID BOUWEN (Vragen 25-30)
  // Window of tolerance verbreden, vagus nerve, polyvagal theorie
  // ============================================================

  {
    id: "zr_25",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "basis",
    order: 25,
    question: "Je wilt je window of tolerance verbreden zodat je beter om kunt gaan met het dagelijks chaos van je kinderen (2 en 5). Welke aanpak werkt het best?",
    context: "De window of tolerance kan actief vergroot worden.",
    options: [
      {
        id: "a",
        text: "Vermijd alle stressvolle situaties in je leven zodat je als ouder nooit meer getriggerd kunt worden",
        isCorrect: false,
        feedback: "Vermijden maakt je window SMALLER, niet groter. Je brein leert: stress = gevaar = vermijden. Je wordt gevoeliger, niet sterker.",
      },
      {
        id: "b",
        text: "Geleidelijke blootstelling aan kleine stressoren met goede herstelmomenten ertussen",
        isCorrect: true,
        feedback: "Correct. Net als een vaccin: kleine doses stress + herstel = sterkere veerkracht. Dit heet stress-inoculatie. Je window wordt geleidelijk breder.",
      },
      {
        id: "c",
        text: "Jezelf blootstellen aan extreme stress zodat je heel snel leert omgaan met werkelijk alles wat komt",
        isCorrect: false,
        feedback: "Extreme stress buiten je window = trauma, niet groei. De sleutel is GELEIDELIJK, met herstel tussendoor.",
      },
    ],
    explanation: "Stress-inoculatie: geleidelijke, gedoseerde blootstelling aan stressoren, gevolgd door adequate herstel. Net als spiertraining: te weinig = geen groei, te veel = blessure. De sweet spot is net buiten je comfortzone.",
    research: "Meichenbaum, D. (2007). Stress Inoculation Training. In Principles and Practice of Stress Management",
  },

  {
    id: "zr_26",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "basis",
    order: 26,
    question: "Je dochter (6) heeft weer een driftbui. Je voelt stress opkomen maar je doet bewust 3 langzame uitademingen. Je merkt dat je kalmer wordt. Welk systeem activeer je?",
    options: [
      {
        id: "a",
        text: "De nervus vagus - het parasympathisch zenuwstelsel",
        isCorrect: true,
        feedback: "Correct. Langzame uitademing stimuleert de nervus vagus, die het parasympathisch zenuwstelsel activeert. Dit remt het fight-or-flight systeem en brengt je terug in je window.",
      },
      {
        id: "b",
        text: "Het sympathisch zenuwstelsel, ook wel je fight-or-flight systeem genoemd",
        isCorrect: false,
        feedback: "Nee. Het sympathisch systeem is juist het stress-systeem. Langzame uitademing activeert het TEGENOVERGESTELDE systeem.",
      },
      {
        id: "c",
        text: "Je afleiding-systeem - je denkt even bewust aan iets heel anders dan de situatie",
        isCorrect: false,
        feedback: "Dit is geen afleiding maar fysiologie. Langzame ademhaling activeert letterlijk je nervus vagus en parasympathisch zenuwstelsel.",
      },
    ],
    explanation: "De nervus vagus is de langste hersenzenuw en verbindt je brein met je organen. Langzame uitademing (langer dan inademing) stimuleert de vagus, wat hartslag verlaagt en kalmte induceert. Dit is de rem op je stressreactie.",
    research: "Porges, S. (2011). The Polyvagal Theory: Neurophysiological Foundations of Emotions",
  },

  {
    id: "zr_27",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 27,
    question: "Volgens de polyvagale theorie van Stephen Porges heeft ons zenuwstelsel 3 toestanden. Je zoon (4) wil spelen maar jij zit op de bank en voelt niets - geen energie, geen motivatie, geen emotie. In welke toestand zit je?",
    options: [
      {
        id: "a",
        text: "Ventral vagaal (veilig en sociaal verbonden met de mensen om je heen)",
        isCorrect: false,
        feedback: "Nee. Ventral vagaal = je voelt je veilig, verbonden, aanwezig. Dan zou je WILLEN spelen. Je beschrijft het tegenovergestelde.",
      },
      {
        id: "b",
        text: "Sympathisch (fight-or-flight, klaar om te vechten of te vluchten)",
        isCorrect: false,
        feedback: "Nee. Sympathisch = hoog in je energie, gespannen, alert. Je beschrijft juist een GEBREK aan energie - geen spanning.",
      },
      {
        id: "c",
        text: "Dorsaal vagaal (shutdown/freeze) - je zenuwstelsel schakelt af",
        isCorrect: true,
        feedback: "Correct. Dorsaal vagaal = shutdown. Je zenuwstelsel schakelt af als bescherming tegen overweldiging. Je voelt niets, hebt geen energie, bent 'er niet'.",
      },
    ],
    explanation: "De polyvagale ladder: 1) Ventral vagaal (veilig, sociaal), 2) Sympathisch (fight-or-flight), 3) Dorsaal vagaal (shutdown). Bij vader-burnout zit je vaak in dorsaal vagaal - niet boos, maar leeg.",
    research: "Porges, S. (2011). The Polyvagal Theory: Neurophysiological Foundations of Emotions",
  },

  {
    id: "zr_28",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 28,
    question: "Je hebt een stressvolle werkdag gehad. Je komt thuis en je kinderen (3 en 7) stormen op je af. Je wilt je nervus vagus snel activeren voordat je in de chaos stapt. Welke techniek werkt het snelst?",
    options: [
      {
        id: "a",
        text: "Een uur lang mediteren in stilte voordat je met je kinderen gaat praten of spelen",
        isCorrect: false,
        feedback: "Meditatie werkt, maar duurt lang. Met 2 kinderen die op je wachten heb je iets nodig dat in seconden werkt. Koud water op je gezicht is sneller.",
      },
      {
        id: "b",
        text: "Koud water op je gezicht - de duikreflex stimuleert direct de nervus vagus",
        isCorrect: true,
        feedback: "Correct. De duikreflex (koud water op gezicht) is de snelste vagus-stimulatie: hartslag daalt binnen seconden. Even koud water in je gezicht voor je de deur opent.",
      },
      {
        id: "c",
        text: "Een biertje drinken om te ontspannen en je hoofd een beetje leeg te maken na het werk",
        isCorrect: false,
        feedback: "Alcohol onderdrukt je stress tijdelijk maar verhoogt cortisol op langere termijn. Het is geen echte regulatie maar een verdoving.",
      },
    ],
    explanation: "Snelle vagus-stimulatie technieken: 1) Koud water op gezicht (duikreflex, werkt in seconden), 2) Hummen/zingen (vibratie stimuleert vagus), 3) Langzame uitademing (4 tellen in, 6 tellen uit). Bouw een 'overgangsritueel' tussen werk en thuis.",
    research: "Porges, S. (2017). The Pocket Guide to the Polyvagal Theory",
  },

  {
    id: "zr_29",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 29,
    question: "Je oefent al 3 weken dagelijks met ademhalingsoefeningen (4-7-8 methode). Je merkt dat je minder snel reageert op je dochter (5) haar driftbuien. Wat is er neurologisch veranderd?",
    options: [
      {
        id: "a",
        text: "Niets neurologisch - je hebt gewoon meer geduld ontwikkeld door dagelijks te oefenen met je ademhaling",
        isCorrect: false,
        feedback: "Het is meer dan 'geduld'. Regelmatige vagus-stimulatie verhoogt je vagale tonus structureel. Dit is een meetbare neurologische verandering.",
      },
      {
        id: "b",
        text: "Je amygdala is kleiner geworden door de ademhaling en reageert daardoor minder heftig op driftbuien",
        isCorrect: false,
        feedback: "Ademhaling verandert niet direct de amygdala-grootte. Wat verandert is je vagale tonus: het vermogen van je parasympathisch systeem om je sympathisch systeem te reguleren.",
      },
      {
        id: "c",
        text: "Je vagale tonus is verhoogd - je zenuwstelsel herstelt sneller, je window is breder",
        isCorrect: true,
        feedback: "Correct. Regelmatige ademhalingsoefeningen verhogen je vagale tonus (meetbaar via HRV). Een hogere vagale tonus = sneller herstellen van stress = breder window.",
      },
    ],
    explanation: "Vagale tonus (gemeten via Heart Rate Variability) is de 'fitness' van je zenuwstelsel. Hoge vagale tonus = beter reguleren, sneller herstellen, breder window. Dagelijkse ademhaling is training voor je zenuwstelsel.",
    research: "Porges, S. (2011). The Polyvagal Theory; Lehrer, P. & Gevirtz, R. (2014). Heart Rate Variability Biofeedback. Frontiers in Psychology",
  },

  {
    id: "zr_30",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 30,
    question: "Je zoon (9) zegt iets wat je diep raakt. Je voelt de trigger, je lichaam reageert (verhoogde hartslag, spanning). Maar in plaats van te exploderen, pauzeer je, ademt je uit, en zegt rustig: 'Dat doet pijn. Ik neem even een momentje.' Welk niveau van zelfregulatie laat je zien?",
    options: [
      {
        id: "a",
        text: "Basis-niveau: je onderdrukt je emotie en doet alsof er niets aan de hand is met je",
        isCorrect: false,
        feedback: "Dit is geen onderdrukking. Je VOELT de emotie, BENOEMT hem ('dat doet pijn'), en KIEST bewust een respons. Dat is het tegenovergestelde van onderdrukking.",
      },
      {
        id: "b",
        text: "Gevorderd niveau: je vermijdt het conflict door het gesprek bewust een andere richting op te sturen",
        isCorrect: false,
        feedback: "Je vermijdt niet - je zegt eerlijk 'dat doet pijn' en neemt bewust een pauze. Dit is engagement, geen vermijding.",
      },
      {
        id: "c",
        text: "Expert-niveau: je voelt de trigger, observeert je lichaam, en kiest bewust een respons",
        isCorrect: true,
        feedback: "Correct. Dit is de volledige keten: trigger herkennen → lichaam observeren → emotie benoemen → bewust kiezen → modelleren voor je kind. Dit is meesterschap in zelfregulatie.",
      },
    ],
    explanation: "De volledige zelfregulatie-keten: 1) Trigger herkennen, 2) Lichaamssignalen observeren, 3) Emotie benoemen (labelen verlaagt amygdala-activiteit), 4) Bewuste respons kiezen, 5) Modelleren voor je kind. Dit is waar alle modules samenkomen.",
    research: "Siegel, D. (2010). Mindsight; Lieberman, M. et al. (2007). Putting Feelings into Words. Psychological Science, 18(5)",
  },

];
export const AANWEZIGHEID_TRAINING: TrainingItem[] = [

  // ============================================================
  // MODULE 1: DE WETENSCHAP VAN AANWEZIG ZIJN (Vragen 1-6)
  // Kwaliteitstijd vs kwantiteit, still-face experiment
  // ============================================================

  {
    id: "aa_1",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "basis",
    order: 1,
    question: "Roos (4) bouwt een toren van blokken. Haar vader zit naast haar maar scrolt door Instagram. Ze kijkt steeds naar hem. Uiteindelijk gooit ze de toren om en schreeuwt. Wat is er aan de hand?",
    options: [
      {
        id: "a",
        text: "Ze raakt gefrustreerd omdat de blokken steeds omvallen en de toren niet mooi lukt",
        isCorrect: false,
        feedback: "Nee. Ze bouwde prima. Het omgooien is een bid for attention: negatieve aandacht is beter dan geen aandacht. Ze voelde zijn mentale afwezigheid."
      },
      {
        id: "b",
        text: "Papa is fysiek aanwezig maar mentaal afwezig; ze escaleert om echte aandacht",
        isCorrect: true,
        feedback: "Correct! Kinderen voelen het verschil tussen fysieke en mentale aanwezigheid. Escalerend gedrag is vaak een poging om echte verbinding af te dwingen."
      },
      {
        id: "c",
        text: "Ze is oververmoeid en heeft eigenlijk een slaapje nodig op dit moment van de dag",
        isCorrect: false,
        feedback: "Nee. De timing is veelzeggend: ze escaleert pas nadat herhaald oogcontact zoeken mislukt. Dit is een klassiek patroon bij mentale afwezigheid van de ouder."
      },
    ],
    explanation: "Kinderen detecteren mentale afwezigheid binnen 200ms via neuroceptie. Wanneer subtiele signalen (oogcontact zoeken) falen, escaleren ze naar gedrag dat onmogelijk te negeren is. Dit is geen 'stout zijn' maar een overlevingsstrategie.",
    research: "Tronick, E. (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children",
  },

  {
    id: "aa_2",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "basis",
    order: 2,
    question: "Onderzoek toont: in het still-face experiment raken baby's al na enkele seconden gestrest als een ouder plotseling stopt met reageren. Welk principe over aanwezigheid illustreert dit het sterkst?",
    options: [
      {
        id: "a",
        text: "Baby\'s raken alleen van slag als de ouder echt boos kijkt, niet bij een neutraal gezicht's hebben constante stimulatie nodig om zich te ontwikkelen",
        isCorrect: false,
        feedback: "Nee. Het gaat niet om stimulatie maar om responsiviteit. Baby's hebben geen entertainment nodig, maar een ouder die reageert op hun signalen."
      },
      {
        id: "b",
        text: "Ouders mogen nooit een neutraal gezicht trekken, dat is schadelijk voor de hechting van het kind",
        isCorrect: false,
        feedback: "Te letterlijk. Het gaat niet om gezichtsuitdrukking maar om emotionele beschikbaarheid. Een rustig gezicht met responsiviteit is prima; een glimlach zonder verbinding niet."
      },
      {
        id: "c",
        text: "Emotionele beschikbaarheid is een biologische basisbehoefte, geen luxe",
        isCorrect: true,
        feedback: "Juist! Het still-face experiment toont dat responsieve aanwezigheid geen extra's is maar een basisbehoefte. Onderbreking ervan veroorzaakt direct meetbare stress (verhoogd cortisol)."
      },
    ],
    explanation: "Het still-face experiment (Tronick, 1978) bewijst dat emotionele beschikbaarheid een biologische basisbehoefte is. Baby's monitoren continu of hun hechtingsfiguur emotioneel bereikbaar is. Onderbreking = directe stressrespons.",
    research: "Tronick, E. (1978). The Infant's Response to Entrapment between Contradictory Messages in Face-to-Face Interaction",
  },

  {
    id: "aa_3",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 3,
    question: "Guus speelt elke zaterdag 4 uur met zijn zoon Pepijn (6): samen naar het park, ijsje halen, voetballen. Maar Guus denkt constant aan werk en checkt tussendoor zijn mail. Zijn collega Thijs heeft maar 45 minuten per dag, maar is dan 100% gefocust op zijn dochter Fleur (5). Wie bouwt sterker aan de hechtingsrelatie?",
    options: [
      {
        id: "a",
        text: "Thijs - 45 min volledige aanwezigheid bouwt meer hechting dan 4 uur afwezigheid",
        isCorrect: true,
        feedback: "Correct! Als TPN (Task-Positive Network) actief is, ontstaat echte verbinding: oxytocine, oogcontact, afstemming. DMN (autopilot) blokkeert dit, ongeacht hoeveel tijd je doorbrengt."
      },
      {
        id: "b",
        text: "Guus - 4 uur is veel meer dan 45 minuten, kwantiteit wint altijd van kwaliteit",
        isCorrect: false,
        feedback: "Nee. Pepijn ervaart 4 uur 'er-maar-niet-er'. Onderzoek toont: kinderen onthouden momenten van echte verbinding, niet de klok."
      },
      {
        id: "c",
        text: "Geen verschil - beide kinderen voelen zich even geliefd door hun vader thuis",
        isCorrect: false,
        feedback: "Nee. Pepijn voelt herhaaldelijk dat hij niet belangrijk genoeg is om papa's volle aandacht te krijgen. Fleur ervaart dagelijks: 'Ik ben het waard om gezien te worden.'"
      },
    ],
    explanation: "Kwaliteitstijd = TPN-activatie (mentaal aanwezig, gefocust op het kind). Kwantiteitstijd met DMN (autopilot, afwezig) creëert geen verbinding. 45 min echte aandacht > 4 uur half aanwezig.",
    research: "Siegel, D. (1999). The Developing Mind",
  },

  {
    id: "aa_4",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "basis",
    order: 4,
    question: "Amber (3) laat trots haar tekening zien. Haar vader kijkt op van zijn boek, maakt oogcontact, glimlacht en zegt: 'Wauw, vertel eens wat je getekend hebt!' Dit duurt 90 seconden. Wat is het effect?",
    options: [
      {
        id: "a",
        text: "Minimaal effect - negentig seconden echt kijken is veel te kort om echte impact te hebben",
        isCorrect: false,
        feedback: "Nee. Korte momenten van volledige aandacht zijn krachtiger dan lange periodes van gedeelde aandacht. 90 seconden TPN = echte verbinding."
      },
      {
        id: "b",
        text: "Ze voelt zich gezien - dit korte moment van volledige aandacht bouwt hechting",
        isCorrect: true,
        feedback: "Juist! De 2-minute rule: zelfs 90 seconden volledige aandacht (oogcontact + interesse + responsiviteit) creëert een moment van echte verbinding dat hechting versterkt."
      },
      {
        id: "c",
        text: "Ze leert dat ze steeds aandacht moet vragen door telkens dingen te laten zien aan papa",
        isCorrect: false,
        feedback: "Nee. Dit is geen aangeleerd trucje maar een natuurlijke behoefte. Kinderen delen hun wereld met hun hechtingsfiguur. Responsieve reactie bevestigt: 'Jij bent belangrijk.'"
      },
    ],
    explanation: "De 2-minute rule: korte momenten van 100% aanwezigheid (TPN actief, oogcontact, responsiviteit) hebben meer impact dan lange periodes van gedeelde ruimte zonder echte aandacht.",
    research: "Kabat-Zinn, M. & J. (1997). Everyday Blessings: Mindful Parenting",
  },

  {
    id: "aa_5",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 5,
    question: "Casper merkt dat hij elke avond met zijn kinderen is, maar achteraf nauwelijks kan herinneren wat ze vertelden. Hij functioneert op 'autopilot'. Wat gebeurt er neurologisch?",
    options: [
      {
        id: "a",
        text: "Zijn geheugen wordt gewoon slechter door de dagelijkse vermoeidheid, dat is heel normaal voor ouders",
        isCorrect: false,
        feedback: "Nee. Het probleem is niet geheugen maar aandacht. Zijn DMN (Default Mode Network) is actief: hij is mentaal elders, niet moe."
      },
      {
        id: "b",
        text: "Zijn DMN (autopilot) is dominant, waardoor verbinding en geheugenvorming uitblijven",
        isCorrect: true,
        feedback: "Correct! DMN = autopilot, piekeren, plannen. TPN = bewuste aanwezigheid. Zonder TPN-activatie is er geen echte interactie en geen geheugenvorming van verbindingsmomenten."
      },
      {
        id: "c",
        text: "De avonduren zijn simpelweg niet geschikt voor quality time met kinderen; kies de ochtend",
        isCorrect: false,
        feedback: "Nee. Het tijdstip is niet het probleem. De switch van DMN naar TPN kan op elk moment. Het vraagt bewuste keuze, niet een ander tijdstip."
      },
    ],
    explanation: "DMN (Default Mode Network) en TPN (Task-Positive Network) zijn antagonistisch: als DMN actief is, is TPN uit. Autopilot-ouderschap = DMN = geen echte verbinding. De switch naar TPN vraagt bewuste inspanning.",
    research: "Raichle, M. (2001). A default mode of brain function",
  },

  {
    id: "aa_6",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 6,
    question: "Lotte (7) vertelt haar vader over een ruzie met haar vriendin. Vader knikt en zegt 'hmm' terwijl hij mentaal zijn to-do lijst doorloopt. Later vraagt Lotte aan mama: 'Vindt papa mij niet leuk?' Welk neurologisch mechanisme verklaart haar conclusie?",
    options: [
      {
        id: "a",
        text: "Haar neuroceptie detecteert de mismatch tussen woorden en lichaamstaal'hmm') en zijn zenuwstelsel (afwezig). Herhaalde mismatch wordt geïnterpreteerd als 'ik ben niet belangrijk genoeg'",
        isCorrect: true,
        feedback: "Exact! Neuroceptie leest micro-expressies, spierspanning, oogbewegingen en ademhaling. Chronische mismatch (woorden zeggen 'ja', lichaam zegt 'nee') ondermijnt het gevoel van eigenwaarde."
      },
      {
        id: "b",
        text: "Kinderen zijn overgevoelig en interpreteren veel te snel alles negatief",
        isCorrect: false,
        feedback: "Nee. Haar detectie is juist uiterst accuraat. Neuroceptie is een evolutionair overlevingsmechanisme dat micro-signalen leest die volwassenen bewust missen."
      },
      {
        id: "c",
        text: "Ze test of mama haar wel leuk vindt door papa bij het gesprek te halen",
        isCorrect: false,
        feedback: "Nee. Ze zoekt geen bevestiging bij mama over zichzelf. Ze probeert te begrijpen waarom papa's signalen niet kloppen. Dit is geen manipulatie maar verwarring."
      },
    ],
    explanation: "Neuroceptie (Porges) detecteert veiligheid via het autonome zenuwstelsel, niet via bewust denken. Kinderen lezen micro-signalen nauwkeuriger dan volwassenen. Chronische mismatch (woorden vs energie) leidt tot onveilige hechting.",
    research: "Porges, S. (2004). Neuroception: A Subconscious System for Detecting Threats and Safety",
  },

  // ============================================================
  // MODULE 2: SMARTPHONE EN AANDACHT (Vragen 7-12)
  // Phubbing, continuous partial attention
  // ============================================================

  {
    id: "aa_7",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "basis",
    order: 7,
    question: "Boris zit aan tafel met zijn zoon Stijn (5). Zijn telefoon ligt naast zijn bord. Elke keer als er een notificatie binkt, glijden Boris' ogen naar het scherm - ook al pakt hij de telefoon niet op. Wat ervaart Stijn?",
    options: [
      {
        id: "a",
        text: "Niets aan de hand - papa pakt de telefoon niet echt op, dus hij is voldoende aanwezig bij Stijn",
        isCorrect: false,
        feedback: "Nee. Zelfs de oogbeweging naar het scherm wordt gedetecteerd. Elke blik weg = micro-onderbreking van de verbinding. Stijn voelt de herhaalde 'afhaakmomentjes'."
      },
      {
        id: "b",
        text: "Hij leert dat telefoons een normaal onderdeel zijn bij het eten, dat is niet per se problematisch",
        isCorrect: false,
        feedback: "Dat leert hij ook, maar het directe effect is belangrijker: hij ervaart dat hij moet concurreren met het scherm om papa's aandacht. Dit ondermijnt verbinding."
      },
      {
        id: "c",
        text: "Elke blik naar de telefoon is een micro-still-face: Stijn voelt herhaalde onderbrekingen",
        isCorrect: true,
        feedback: "Juist! Onderzoek toont: de loutere aanwezigheid van een smartphone op tafel vermindert al de kwaliteit van gesprekken. Elke notificatie + oogbeweging = mini-onderbreking van verbinding."
      },
    ],
    explanation: "Brain Drain effect (Ward, 2017): de loutere aanwezigheid van een smartphone - zelfs uitgeschakeld - vermindert cognitieve capaciteit en kwaliteit van interacties. Elke notificatie versterkt dit effect.",
    research: "Ward, A. et al. (2017). Brain Drain: The Mere Presence of One's Own Smartphone Reduces Available Cognitive Capacity",
  },

  {
    id: "aa_8",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 8,
    question: "Nienke (8) probeert haar vader iets te vertellen over school. Hij zegt 'wacht even' en typt een WhatsApp af. Dit duurt 40 seconden. Na het versturen zegt hij: 'Zo, vertel!' Maar Nienke zegt: 'Laat maar.' Wat is er gebeurd?",
    options: [
      {
        id: "a",
        text: "Het spontane moment van verbinding is verbroken door phubbing (phone snubbing)'mijn verhaal is minder belangrijk dan dat scherm'",
        isCorrect: true,
        feedback: "Correct! Phubbing = phone + snubbing. Kinderen delen spontaan vanuit een emotionele impuls. 'Wacht even' doodt die impuls. Na 40 seconden is het moment weg en het gevoel van afwijzing gebleven."
      },
      {
        id: "b",
        text: "Ze is gewoon ongeduldig als kind - veertig seconden wachten is echt niet zo lang",
        isCorrect: false,
        feedback: "Nee. Het gaat niet om de 40 seconden maar om de boodschap: 'Dit bericht is nu belangrijker dan jij.' Het moment van spontaan delen is voorbij."
      },
      {
        id: "c",
        text: "Ze was simpelweg vergeten wat ze wilde zeggen, dat gebeurt vaker bij kinderen",
        isCorrect: false,
        feedback: "Nee. 'Laat maar' is geen vergeetachtigheid maar terugtrekking. Ze beschermt zichzelf tegen opnieuw afgewezen worden. Dit is een emotionele reactie, geen cognitieve."
      },
    ],
    explanation: "Phubbing (phone snubbing) ondermijnt verbinding niet door de tijdsduur maar door de boodschap: 'Dit scherm gaat voor.' Kinderen leren hun spontane deelmomenten in te slikken als phubbing herhaald voorkomt.",
    research: "Radesky, J. et al. (2014). Patterns of Mobile Device Use by Caregivers and Children During Meals in Fast Food Restaurants",
  },

  {
    id: "aa_9",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "basis",
    order: 9,
    question: "Onderzoek toont dat ouders die hun smartphone gebruiken tijdens interacties met hun kind 40% minder responsief zijn en 2.7x vaker een harde toon aanslaan. Wanneer slaan ze die harde toon aan?",
    options: [
      {
        id: "a",
        text: "Vooral als het kind stout is en de ouder bewust boos op het kind reageert vanwege gedrag",
        isCorrect: false,
        feedback: "Nee. De harde toon komt wanneer het kind de schermtijd onderbreekt. Het kind zoekt verbinding, de ouder ervaart dit als storing."
      },
      {
        id: "b",
        text: "Aan het einde van een lange dag als ze moe zijn en minder geduld hebben met het kind",
        isCorrect: false,
        feedback: "Nee. Het effect is direct gekoppeld aan smartphone-gebruik: de irritatie komt specifiek wanneer het kind de schermfocus doorbreekt."
      },
      {
        id: "c",
        text: "Als het kind de schermtijd onderbreekt - de ouder reageert geirriteerd op de storing",
        isCorrect: true,
        feedback: "Juist! Het kind dat aandacht vraagt wordt ervaren als 'storing' van het scherm. De ouder reageert met irritatie op een normaal verbindingsverzoek. Het kind leert: aandacht vragen = straf."
      },
    ],
    explanation: "Smartphone creëert een paradox: het kind dat verbinding zoekt (normale behoefte) wordt bestraft met irritatie omdat het de schermtijd 'verstoort'. Het kind leert: mijn behoefte aan aandacht is lastig.",
    research: "Radesky, J. et al. (2014). Patterns of Mobile Device Use by Caregivers and Children During Meals",
  },

  {
    id: "aa_10",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 10,
    question: "Vera's vader werkt thuis en heeft zijn laptop en telefoon altijd bij zich. Hij zegt: 'Ik kan prima multitasken - ik luister naar Vera terwijl ik mail beantwoord.' Wat zegt de neurowetenschap hierover?",
    options: [
      {
        id: "a",
        text: "Sommige mensen kunnen inderdaad prima multitasken, dat hangt sterk van de persoon en het moment af",
        isCorrect: false,
        feedback: "Nee. Multitasken is een mythe voor taken die aandacht vragen. Het brein switcht snel heen en weer (task-switching), maar kan niet twee aandachtstaken tegelijk verwerken."
      },
      {
        id: "b",
        text: "Het is prima zolang hij regelmatig oogcontact maakt en af en toe actief luistert naar het kind",
        isCorrect: false,
        feedback: "Nee. Af en toe oogcontact tijdens task-switching is niet hetzelfde als aanwezigheid. Het brein heeft 23 minuten nodig om na een switch weer diep gefocust te raken."
      },
      {
        id: "c",
        text: "Multitasken bestaat niet - het brein doet task-switching, elke switch kost herstel voor aandacht",
        isCorrect: true,
        feedback: "Correct! Continuous partial attention = niemand krijgt je volle aandacht. Vera krijgt de 'restjes' tussen task-switches. Ze voelt dit als: 'Papa is er wel maar ook niet.'"
      },
    ],
    explanation: "Continuous partial attention (Linda Stone): door constant te switchen tussen scherm en kind krijgt niemand echte aandacht. Elke task-switch kost 23 minuten recovery (Gloria Mark, UC Irvine). Het kind krijgt nooit volledige TPN-activatie.",
    research: "Mark, G. et al. (2008). The cost of interrupted work: more speed and stress",
  },

  {
    id: "aa_11",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 11,
    question: "Ruben heeft phone parking ingevoerd: telefoon in de la tijdens eten en bedtijdritueel. Na 2 weken merkt hij dat hij onrustig wordt zonder telefoon - hij checkt reflexmatig zijn broekzak. Wat verklaart dit neurologisch?",
    options: [
      {
        id: "a",
        text: "Zijn brein ervaart dopamine-onthouding; notificaties waren variabele beloningen",
        isCorrect: true,
        feedback: "Exact! Variable ratio reinforcement: je weet nooit wanneer de volgende 'interessante' notificatie komt. Dit is het meest verslavende beloningspatroon. Zijn onrust is letterlijk ontwenning."
      },
      {
        id: "b",
        text: "Hij is simpelweg gewend aan zijn telefoon en dit went vanzelf na een paar weken",
        isCorrect: false,
        feedback: "Te oppervlakkig. Het gaat niet om gewoonte maar om neurochemie. Smartphone-notificaties activeren hetzelfde dopaminesysteem als gokken."
      },
      {
        id: "c",
        text: "Hij maakt zich zorgen dat hij iets belangrijks mist, dat is gewone FOMO-angst",
        isCorrect: false,
        feedback: "FOMO is een symptoom, niet de oorzaak. De onderliggende neurologie is dopamine-afhankelijkheid door variabele beloning. FOMO is hoe het voelt, dopamine-onthouding is wat er gebeurt."
      },
    ],
    explanation: "Smartphones gebruiken variable ratio reinforcement (het meest verslavende beloningsschema). Elke notificatie = potentiële dopamine-hit. Phone parking doorbreekt deze cyclus maar veroorzaakt eerst ontwenningsverschijnselen.",
    research: "Alter, A. (2017). Irresistible: The Rise of Addictive Technology",
  },

  {
    id: "aa_12",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 12,
    question: "Merel (10) zegt tegen haar vader: 'Papa, je bent altijd op je telefoon.' Vader schrikt - hij dacht dat het meeviel. Onderzoek toont dat ouders gemiddeld 73% van hun tijd met kinderen op een scherm zitten. Waarom schatten ouders hun schermgebruik zo verkeerd in?",
    options: [
      {
        id: "a",
        text: "Kinderen overdrijven altijd enorm - het is vast veel minder dan die 73% die ze noemen",
        isCorrect: false,
        feedback: "Nee. Objectieve metingen bevestigen de cijfers. Kinderen zijn vaak nauwkeuriger in hun inschatting dan ouders. Zij ervaren elke seconde afwezigheid."
      },
      {
        id: "b",
        text: "Smartphone activeert de autopilot - je bent je niet bewust van eigen gebruik'2 minuten checken' maar duurt feitelijk 15 minuten",
        isCorrect: true,
        feedback: "Juist! Smartphone = DMN-activatie = verminderd zelfbewustzijn. Je verliest letterlijk het besef van tijd. Wat voelt als '2 minuten scrollen' is objectief gemeten veel langer. Het kind ervaart elke seconde."
      },
      {
        id: "c",
        text: "Ouders liegen er bewust over omdat ze zich diep van binnen schamen over hun schermtijd",
        isCorrect: false,
        feedback: "Nee. De meeste ouders zijn oprecht verbaasd als ze hun werkelijke schermtijd zien. Het gaat om verminderd zelfbewustzijn, niet om liegen."
      },
    ],
    explanation: "Smartphone activeert DMN waardoor tijdsbesef en zelfbewustzijn verminderen. Ouders onderschatten hun gebruik structureel met 50-100%. Het kind ervaart elke seconde - hun perceptie is vaak nauwkeuriger dan die van de ouder.",
    research: "Radesky, J. et al. (2014). Patterns of Mobile Device Use by Caregivers and Children",
  },

  // ============================================================
  // MODULE 3: LEEFTIJDSSPECIFIEKE AANWEZIGHEID (Vragen 13-18)
  // Baby, peuter, kleuter, schoolkind, tiener
  // ============================================================

  {
    id: "aa_13",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "basis",
    order: 13,
    question: "Joep heeft een baby van 6 maanden. Zijn moeder zegt: 'Die baby snapt er toch nog niets van, het maakt niet uit of je erbij bent of niet.' Wat klopt er niet aan deze uitspraak?",
    options: [
      {
        id: "a",
        text: "Baby\'s registreren aanwezigheid al vanaf de geboorte via neuroceptie's zijn juist extreem gevoelig voor aanwezigheid: hun brein ontwikkelt 1 miljoen neurale verbindingen per seconde en responsieve interactie stuurt die ontwikkeling",
        isCorrect: true,
        feedback: "Correct! Het babybrein maakt 1 miljoen synaptische verbindingen per seconde. Responsieve aanwezigheid (serve and return) bepaalt welke verbindingen versterkt worden. Dit is de meest kritieke periode."
      },
      {
        id: "b",
        text: "Oma heeft gelijk - baby\'s snappen nog niets van aanwezigheid of afwezigheid's hebben vooral fysieke verzorging nodig, niet mentale aanwezigheid",
        isCorrect: false,
        feedback: "Nee. Baby's zijn juist het MEEST gevoelig voor emotionele aanwezigheid. Hun brein ontwikkelt zich het snelst in het eerste levensjaar en responsiviteit is daarbij cruciaal."
      },
      {
        id: "c",
        text: "Het maakt pas echt uit vanaf de peuterleeftijd als kinderen gaan praten",
        isCorrect: false,
        feedback: "Nee. Hechting begint bij de geboorte, niet bij de eerste woordjes. Baby's communiceren via huilen, lachen, oogcontact. Aanwezigheid bij deze signalen is essentieel."
      },
    ],
    explanation: "Baby's (0-1 jaar): serve and return interactie (baby geeft signaal, ouder reageert) is de basis van breinontwikkeling. 1 miljoen synaptische verbindingen per seconde worden gevormd door responsieve aanwezigheid.",
    research: "Shonkoff, J. & Phillips, D. (2000). From Neurons to Neighborhoods: The Science of Early Childhood Development",
  },

  {
    id: "aa_14",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 14,
    question: "Sanne heeft een peuter van 2.5 jaar (Wout) die constant 'kijk papa, kijk!' roept. Na de 30e keer voelt Sanne zich uitgeput. Waarom doet Wout dit en wat is de beste respons?",
    options: [
      {
        id: "a",
        text: "Wout is verwend en moet leren om helemaal zelfstandig te spelen",
        isCorrect: false,
        feedback: "Nee. 'Kijk papa!' is geen verwend gedrag maar een ontwikkelingsbehoefte. Peuters bouwen hun zelfbeeld op door te zien dat hun acties effect hebben op hun hechtingsfiguur."
      },
      {
        id: "b",
        text: "Je moet elke keer heel uitgebreid reageren, anders voelt hij zich afgewezen",
        isCorrect: false,
        feedback: "Nee. Peuters hebben frequentie nodig, niet duur. 2 seconden echte aandacht (oogcontact + 'wauw!') werkt beter dan 30 seconden halfhartige aandacht."
      },
      {
        id: "c",
        text: "Elk \'kijk\'-moment is een bid for attention; kort erkennen volstaat'kijk!' is een bid for connection: Wout bouwt zijn zelfbeeld door papa's responsieve reactie. Korte, echte reacties (2 sec oogcontact + bevestiging) zijn genoeg",
        isCorrect: true,
        feedback: "Juist! Peuters (2-3 jaar) hebben frequente, korte bevestiging nodig. Elke 'kijk!' = check: 'Zie je mij? Ben ik belangrijk?' 2 seconden echte aandacht per keer is voldoende."
      },
    ],
    explanation: "Peuters (2-3 jaar): hoge frequentie, korte duur. 'Kijk papa!' = bid for connection. Responsieve, korte reacties (2 sec oogcontact + bevestiging) bouwen zelfbeeld en veilige hechting.",
    research: "Bowlby, J. (1988). A Secure Base: Parent-Child Attachment and Healthy Human Development",
  },

  {
    id: "aa_15",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "basis",
    order: 15,
    question: "Timo speelt met zijn dochter Iris (4, kleuter) in de tuin. Iris wil dat papa de hele tijd meespeelt in haar fantasiespel ('Jij bent de draak!'). Wat is leeftijdsspecifiek de beste aanpak?",
    options: [
      {
        id: "a",
        text: "Het spel sturen naar iets educatiefs en er een waardevol leermoment van maken voor haar ontwikkeling",
        isCorrect: false,
        feedback: "Nee. Bij kleuters is de kracht juist dat JIJ volgt en ZIJ leidt. Sturen naar educatief = jouw agenda, niet haar behoefte. Child-led play is zelf al enorm leerzaam."
      },
      {
        id: "b",
        text: "Meespelen en haar de leiding laten nemen - child-led play is de krachtigste aanwezigheid",
        isCorrect: true,
        feedback: "Correct! Kleuters (3-5 jaar) leren het meest van child-led play: het kind bepaalt het spel, de ouder volgt. Dit bouwt creativiteit, zelfvertrouwen en verbinding tegelijk."
      },
      {
        id: "c",
        text: "Even meespelen en dan zelfstandig laten spelen - kleuters moeten ook leren om alleen te kunnen zijn",
        isCorrect: false,
        feedback: "Zelfstandig spelen is belangrijk, maar de vraag gaat over de momenten dat je WEL samen speelt. Dan is volledig meegaan in haar wereld de krachtigste vorm van aanwezigheid."
      },
    ],
    explanation: "Kleuters (3-5 jaar): child-led play is de gouden standaard. Het kind leidt, de ouder volgt. Dit communiceert: 'Jouw wereld is belangrijk, jouw ideeën tellen.' 15-20 minuten per dag is al krachtig.",
    research: "Landreth, G. (2012). Play Therapy: The Art of the Relationship",
  },

  {
    id: "aa_16",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 16,
    question: "Koen heeft een zoon (Milan, 9) die na school weinig vertelt. Koen vraagt: 'Hoe was school?' Milan: 'Goed.' Einde gesprek. Wat moet Koen weten over aanwezigheid bij schoolkinderen?",
    options: [
      {
        id: "a",
        text: "Milan is gewoon introvert van aard - sommige kinderen praten nu eenmaal niet zo graag over school",
        isCorrect: false,
        feedback: "Mogelijk, maar het patroon 'Hoe was school? - Goed.' is universeel bij schoolkinderen. Het probleem is niet het kind maar de vraagstelling en de timing."
      },
      {
        id: "b",
        text: "Schoolkinderen delen niet op commando maar tijdens gezamenlijke activiteiten naast elkaar",
        isCorrect: true,
        feedback: "Juist! Schoolkinderen (6-12 jaar) delen side-by-side, niet face-to-face. Tijdens samen fietsen, koken of autorijden komen de verhalen vanzelf. Aanwezigheid = beschikbaar zijn, niet uitvragen."
      },
      {
        id: "c",
        text: "Je moet veel specifiekere vragen stellen in plaats van open vragen, dan komt het gesprek vanzelf'Wat was het leukste vandaag?'",
        isCorrect: false,
        feedback: "Betere vragen helpen, maar de kern is de setting. Schoolkinderen openen zich tijdens gezamenlijke activiteiten, niet tijdens directe ondervraging."
      },
    ],
    explanation: "Schoolkinderen (6-12 jaar): side-by-side aanwezigheid werkt beter dan face-to-face. Samen bezig zijn (koken, wandelen, rijden) creëert de veiligheid waarin ze spontaan delen. Beschikbaar zijn > uitvragen.",
    research: "Neufeld, G. & Maté, G. (2004). Hold On to Your Kids: Why Parents Need to Matter More Than Peers",
  },

  {
    id: "aa_17",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 17,
    question: "Femke (14) trekt zich steeds meer terug op haar kamer. Haar vader Wout voelt zich afgewezen en denkt: 'Ze heeft me niet meer nodig.' Wat mist hij over aanwezigheid bij tieners?",
    options: [
      {
        id: "a",
        text: "Tieners willen paradoxale aanwezigheid: beschikbaar maar niet opdringerig",
        isCorrect: true,
        feedback: "Exact! De tienerparadox: ze duwen je weg maar willen weten dat je er bent. Aanwezigheid bij tieners = lighthouse parenting: je staat er, je schijnt je licht, maar je loopt niet achter ze aan."
      },
      {
        id: "b",
        text: "Tieners hebben inderdaad veel minder aanwezigheid nodig - het hoort gewoon bij de ontwikkelingsfase",
        isCorrect: false,
        feedback: "Half waar: tieners hebben minder ZICHTBARE aanwezigheid nodig, maar evenveel BESCHIKBARE aanwezigheid. Het verschil is cruciaal."
      },
      {
        id: "c",
        text: "Je moet harder je best doen om contact te houden en verplichte quality time in te plannen samen",
        isCorrect: false,
        feedback: "Verplichte quality time werkt averechts bij tieners. Ze hebben autonomie nodig. De kunst is: beschikbaar zijn wanneer ZIJ kiezen om te komen, zonder te forceren."
      },
    ],
    explanation: "Tieners (12-18 jaar): lighthouse parenting = je bent de vuurtoren. Beschikbaar, zichtbaar, stabiel - maar je loopt niet achter ze aan. Ze testen onafhankelijkheid maar checken voortdurend of de veilige basis er nog is.",
    research: "Steinberg, L. (2001). We Know Some Things: Parent-Adolescent Relationships in Retrospect and Prospect",
  },

  {
    id: "aa_18",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "basis",
    order: 18,
    question: "Daphne (11) zit op de grens van schoolkind en tiener. Ze wil soms knuffelen op de bank, en 5 minuten later 'laat me met rust!' Haar vader is verward. Wat is er aan de hand?",
    options: [
      {
        id: "a",
        text: "Ze manipuleert hem bewust - ze moet gewoon kiezen: wel of geen aandacht van haar vader willen",
        isCorrect: false,
        feedback: "Nee. Dit is geen manipulatie maar een ontwikkelingsfase. Pre-pubers schakelen tussen kind-behoefte (nabijheid) en tiener-behoefte (autonomie). Dit is gezond."
      },
      {
        id: "b",
        text: "Ze wisselt tussen nabijheid en autonomie; beide behoeften zijn echt en geldig",
        isCorrect: true,
        feedback: "Juist! Pre-pubers (10-12 jaar) pendelen tussen kind en tiener. De ene minuut willen ze op schoot, de volgende minuut afstand. Aanwezigheid = flexibel meebewegen zonder het persoonlijk te nemen."
      },
      {
        id: "c",
        text: "Ze is eigenlijk te oud voor knuffelen op de bank - hij moet haar meer ruimte geven om te groeien",
        isCorrect: false,
        feedback: "Nee. Fysiek contact blijft belangrijk op elke leeftijd. Het punt is dat ZIJ bepaalt wanneer, niet de ouder. Beschikbaar zijn voor beide behoeften is de skill."
      },
    ],
    explanation: "Pre-pubers pendelen tussen kind-modus (nabijheid zoeken) en tiener-modus (autonomie claimen). Aanwezigheid in deze fase = flexibel schakelen zonder oordeel. Accepteer beide behoeften als echt.",
    research: "Steinberg, L. (2014). Age of Opportunity: Lessons from the New Science of Adolescence",
  },

  // ============================================================
  // MODULE 4: AANWEZIG ZIJN ALS HET CHAOS IS (Vragen 19-24)
  // Window of Tolerance, grounding, co-regulatie, ankeren in de storm
  // ============================================================

  {
    id: "aa_19",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "basis",
    order: 19,
    question: "Casper (5) en zijn zusje Noor (3) gillen allebei om dezelfde knuffel. De soep kookt over op het fornuis. Je voelt je hartslag stijgen. Wat is de meest effectieve eerste stap?",
    options: [
      {
        id: "a",
        text: "Eerst je eigen zenuwstelsel reguleren: voeten op de grond, uitademen, dan reageren",
        isCorrect: true,
        feedback: "Juist! In chaos is je eigen regulatie stap één. Je kunt pas co-reguleren als jij zelf binnen je Window of Tolerance bent. Eén bewuste ademhaling is genoeg om van reactie naar respons te schakelen."
      },
      {
        id: "b",
        text: "De knuffel afpakken zodat niemand hem heeft - dat is de meest eerlijke oplossing",
        isCorrect: false,
        feedback: "Nee. Dit voegt een derde ontregeld zenuwstelsel toe aan de situatie. Het lost het conflict niet op en het verbreekt de verbinding met beide kinderen."
      },
      {
        id: "c",
        text: "Eerst de soep van het vuur redden - praktische problemen gaan altijd voor emoties",
        isCorrect: false,
        feedback: "Nee. Soep is vervangbaar, het moment met je kinderen niet. Bovendien: als jij in paniek naar de keuken rent, voelen je kinderen: papa kan dit niet aan."
      },
    ],
    explanation: "Daniel Siegel's Window of Tolerance: in chaos schuif je naar de rand van je venster. De truc is niet de chaos oplossen maar eerst jezelf reguleren. Pas vanuit kalmte kun je co-reguleren met je kinderen.",
    research: "Siegel, D. (2012). The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are",
  },

  {
    id: "aa_20",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "basis",
    order: 20,
    question: "Pien (7) heeft een meltdown over haar huiswerk. Ze gooit haar schrift door de kamer en schreeuwt: 'Ik kan niks!' Haar vader merkt dat hij ook geïrriteerd raakt. Wat beschrijft Siegel's Window of Tolerance in deze situatie?",
    options: [
      {
        id: "a",
        text: "Binnen zijn Window of Tolerance kan hij bewust kiezen hoe hij reageert",
        isCorrect: true,
        feedback: "Correct! Het Window of Tolerance is de zone waarin je stress voelt maar nog kunt nadenken. Buiten die zone neem je het over: fight (schreeuwen), flight (weglopen) of freeze (dichtslan)."
      },
      {
        id: "b",
        text: "De vader moet zijn irritatie onderdrukken en gewoon doen alsof hij kalm is",
        isCorrect: false,
        feedback: "Nee. Onderdrukken is niet reguleren. Kinderen voelen het verschil tussen nep-kalmte en echte kalmte. Bovendien bouwt onderdrukte irritatie op en barst later alsnog uit."
      },
      {
        id: "c",
        text: "De vader moet de kamer verlaten en wachten tot Pien zelf is gekalmeerd",
        isCorrect: false,
        feedback: "Nee. Weglopen voelt voor Pien als verlating, juist in haar meest kwetsbare moment. Ze heeft een gereguleerd zenuwstelsel naast zich nodig, niet afwezigheid."
      },
    ],
    explanation: "Het Window of Tolerance (Siegel) is de zone waarin je stress kunt opvangen zonder naar fight/flight/freeze te gaan. Grounding-technieken houden je in die zone zodat je kunt co-reguleren met je kind.",
    research: "Siegel, D. & Bryson, T. (2014). No-Drama Discipline",
  },

  {
    id: "aa_21",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 21,
    question: "Stijn (4) heeft net zijn broertje Luuk (2) geduwd, die nu huilt. Stijn kijkt uitdagend. Je voelt woede opkomen. Je herinnert je het principe: 'hoe harder zij schreeuwen, hoe zachter jij praat.' Waarom werkt dit neurologisch?",
    options: [
      {
        id: "a",
        text: "Kinderen worden heel nieuwsgierig naar je zachte stem en stoppen daarom vanzelf met schreeuwen",
        isCorrect: false,
        feedback: "Nee. Het gaat niet om nieuwsgierigheid maar om co-regulatie. Jouw zenuwstelsel 'besmet' dat van je kind via spiegelneuronen en je vagale toon."
      },
      {
        id: "b",
        text: "Zacht praten toont autoriteit - kinderen respecteren een vader die niet hoeft te schreeuwen thuis",
        isCorrect: false,
        feedback: "Nee. Het gaat niet om autoriteit of respect maar om neurobiologie. Jouw rustige stem activeert het ventrale vagale systeem van je kind, wat hen helpt uit fight-mode te komen."
      },
      {
        id: "c",
        text: "Jouw gereguleerde zenuwstelsel werkt als co-regulator: het kind neemt jouw kalmte over",
        isCorrect: true,
        feedback: "Juist! Porges' polyvagale theorie: je stem, gezichtsuitdrukking en lichaamshouding zenden veiligheidssignalen naar het zenuwstelsel van je kind. Dit heet neuroceptie — onbewuste veiligheidsdetectie."
      },
    ],
    explanation: "Porges' polyvagale theorie: een rustige, lage stem activeert het 'social engagement system' van het kind via de nervus vagus. Je zenuwstelsel is letterlijk besmettelijk — in beide richtingen.",
    research: "Porges, S. (2011). The Polyvagal Theory: Neurophysiological Foundations of Emotions, Attachment, Communication, and Self-Regulation",
  },

  {
    id: "aa_22",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 22,
    question: "Iris (6) krijgt een woedeaanval in de supermarkt. Mensen kijken. Je schaamt je. Je automatische reactie is: 'Als je nu niet stopt, gaan we weg.' Waarom werkt een dreigement in dit moment niet?",
    options: [
      {
        id: "a",
        text: "Iris is nog te jong om een dreigement echt goed te begrijpen en serieus te nemen",
        isCorrect: false,
        feedback: "Nee. Ze begrijpt de woorden prima. Maar haar prefrontale cortex is offline — haar amygdala heeft het overgenomen. Logica bereikt haar nu niet."
      },
      {
        id: "b",
        text: "Iris reageert op jouw stress; door zelf te kalmeren kalmeer je haar ook' prefrontale cortex is offline door de emotionele overstroming. Ze kan niet rationeel nadenken. Dreigen activeert meer stress, niet minder",
        isCorrect: true,
        feedback: "Correct! Tijdens een meltdown is het 'denkbrein' (PFC) uitgeschakeld. Een dreigement verhoogt de dreiging en versterkt de amygdala-respons. Eerst reguleren, dan pas communiceren."
      },
      {
        id: "c",
        text: "Je moet consequent zijn - als je dreigt, moet je het ook altijd doen anders verlies je het",
        isCorrect: false,
        feedback: "Nee. Consequenties zijn voor rustige momenten. Midden in een meltdown is het brein niet in staat om oorzaak-gevolg te verwerken. Focus op co-regulatie, niet op correctie."
      },
    ],
    explanation: "Tijdens een meltdown is de prefrontale cortex 'offline'. Dreigen, straffen en redeneren bereiken het kind niet. Eerst co-reguleren (nabijheid, lage stem, veiligheid) zodat het denkbrein weer online komt.",
    research: "Siegel, D. & Bryson, T. (2012). The Whole-Brain Child",
  },

  {
    id: "aa_23",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 23,
    context: "Ankeren is een grounding-techniek: je kiest vooraf een zin die je in chaotische momenten tegen jezelf zegt om in je Window of Tolerance te blijven.",
    question: "Wout (3) en Merel (5) maken allebei ruzie, het eten brandt aan, en je telefoon gaat. Je voelt je adem versnellen. Je zegt intern je ankerzin: 'Ze hebben me nu nodig.' Wat doet die ankerzin neurologisch?",
    options: [
      {
        id: "a",
        text: "Het is puur een placebo-effect - het werkt alleen maar omdat je er sterk in gelooft",
        isCorrect: false,
        feedback: "Nee. Het is geen placebo maar een werkzaam mechanisme. Het activeren van taal (Broca's area) schakelt de prefrontale cortex bij, wat de amygdala-respons tempert."
      },
      {
        id: "b",
        text: "Het leidt je alleen maar af van de chaos zodat je even niet hoeft na te denken erover",
        isCorrect: false,
        feedback: "Nee. Het is geen afleiding maar actieve regulatie. De ankerzin brengt je terug naar bewust handelen in plaats van automatisch reageren."
      },
      {
        id: "c",
        text: "De ankerzin activeert je taalcentrum (PFC), wat de amygdala-hijack remt",
        isCorrect: true,
        feedback: "Juist! Taal is een PFC-functie. Door bewust een zin te formuleren, schakel je je denkbrein weer in. Dit remt de automatische stress-respons en geeft je de keuze hoe je reageert."
      },
    ],
    explanation: "Een ankerzin is geen mantra maar een neurobiologisch instrument: taalactivatie recruteert de PFC, wat de amygdala's automatische fight/flight-respons tempert. Dit heet cognitieve herstructurering.",
    research: "Lieberman, M. D. (2007). Putting Feelings into Words: Affect Labeling as Implicit Emotion Regulation",
  },

  {
    id: "aa_24",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 24,
    question: "Timo (8) schreeuwt dat hij je haat nadat je zijn schermtijd hebt beëindigd. Je voelt de neiging om terug te snauwen of weg te lopen. In termen van het drieledige reactiepatroon op chaos: welke reactie is het meest schadelijk voor de hechtingsrelatie op lange termijn?",
    options: [
      {
        id: "a",
        text: "Exploderen - terug schreeuwen en je woede uiten naar het kind toe'Dan ga je maar naar je kamer!')",
        isCorrect: false,
        feedback: "Schadelijk, maar niet het meest schadelijk. Bij explosies voelt het kind tenminste nog een emotionele reactie — er is contact, al is het negatief. Dit is te herstellen."
      },
      {
        id: "b",
        text: "Weglopen - de kamer verlaten zonder uitleg en het kind alleen laten",
        isCorrect: false,
        feedback: "Schadelijk omdat het verlating communiceert, maar fysiek weglopen is duidelijker dan emotioneel dichtslan. Het kind weet tenminste wat er gebeurt. Emotionele bevriezing is verwarrender en daarom schadelijker."
      },
      {
        id: "c",
        text: "Bevriezen - emotioneel dichtslaan, je afsluiten, niets zeggen",
        isCorrect: true,
        feedback: "Correct. Emotionele afsluiting is het meest schadelijk omdat het kind geen enkel signaal meer krijgt. Het voelt als emotioneel verlaten worden — vergelijkbaar met het still-face experiment. Het kind leert: mijn emoties zijn zo erg dat papa verdwijnt."
      },
    ],
    explanation: "Van de drie stress-reacties (fight, flight, freeze) is freeze het meest schadelijk voor hechting. Tronick's onderzoek toont: emotionele onbereikbaarheid is stressvoller dan boosheid. Bij boosheid is er nog contact; bij bevriezing is het kind volledig alleen.",
    research: "Tronick, E. (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children; Porges, S. (2011). The Polyvagal Theory",
  },

  // ============================================================
  // MODULE 5: MICRO-MOMENTEN VAN VERBINDING (Vragen 25-30)
  // Smartphone, Still Face, quality > quantity, phone parking
  // ============================================================

  {
    id: "aa_25",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "basis",
    order: 25,
    question: "Smartphone statistiek: ouders zitten gemiddeld 73% van restaurant-tijd op hun scherm. Wat is de impact op het kind?",
    options: [
      { 
        id: "a", 
        text: "Het kind leert zelfstandig zijn en zichzelf te vermaken in sociale situaties", 
        isCorrect: false, 
        feedback: "Nee. Kind leert: 'Ik ben minder belangrijk dan dat ding.' Dit ondermijnt attachment, het ontwikkelt geen zelfstandigheid." 
      },
      { 
        id: "b", 
        text: "40% minder responsief, 2.7x meer harde toon, verhoogde cortisol bij kind", 
        isCorrect: true, 
        feedback: "Juist! Smartphone = verminerde aandacht, meer irritatie bij onderbreking, verhoogde stress bij kind. 'Phubbing' (phone snubbing) = meetbare impact." 
      },
      { 
        id: "c", 
        text: "Geen echte impact op het kind - zolang je er fysiek bent telt je aanwezigheid", 
        isCorrect: false, 
        feedback: "Nee. Fysiek aanwezig ≠ mentaal aanwezig. Smartphone = DMN actief, TPN uit. Kind voelt afwezigheid en dit verhoogt stress." 
      },
    ],
    explanation: "Smartphone-onderzoek (Radesky, 2014): 73% van tijd op scherm, 40% minder responsief, 2.7x meer harshe toon. Impact: verhoogde cortisol, minder exploratie, meer aandacht-zoekend gedrag.",
    research: "Radesky, J. (2014). Patterns of mobile device use by caregivers",
  },

  {
    id: "aa_26",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 26,
    question: "Waarom is smartphone zo verslavend (neurologisch)?",
    options: [
      { 
        id: "a", 
        text: "Het activeert DMN (autopilot) en het beloningssysteem via dopamine", 
        isCorrect: true, 
        feedback: "Juist! Smartphone = dubbele hit: DMN (geen effort) + dopamine (beloning). Elke notificatie = dopamine-shot. Dit is neurologisch verslavend." 
      },
      { 
        id: "b", 
        text: "We zijn gewend aan constant bereikbaar zijn in de moderne maatschappij", 
        isCorrect: false, 
        feedback: "Sociaal waar, maar neurologisch: dopamine bij notificaties maakt het verslavend. Het gaat niet om gewoonte maar om neurochemie." 
      },
      { 
        id: "c", 
        text: "Het helpt ons multitasken en efficienter functioneren in het dagelijks", 
        isCorrect: false, 
        feedback: "Nee. Multitasken = mythe. Smartphone tijdens kind = task-switching, niet multitasking. Elke switch kost 23 min recovery time voor diepe aandacht." 
      },
    ],
    explanation: "Smartphone = DMN-activatie + dopamine bij notificaties = verslavend. Elke onderbreking = 23 min recovery voor diepe aandacht (Gloria Mark, UC Irvine). Kind moet 'concurreren' met scherm.",
    research: "Mark, G. (2008). The cost of interrupted work",
  },

  {
    id: "aa_27",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "basis",
    order: 27,
    question: "De Phone Parking regel: wanneer en waarom?",
    options: [
      { 
        id: "a", 
        text: "Nooit toepassen - je moet altijd bereikbaar blijven voor mogelijke noodgevallen met je kinderen", 
        isCorrect: false, 
        feedback: "Noodgevallen zijn zeldzaam. Phone in andere kamer = nog steeds bereikbaar (je hoort het). Maar: niet bij je = geen constante DMN-activatie." 
      },
      { 
        id: "b", 
        text: "Alleen als je kind er expliciet om vraagt - anders is het een veel te strenge maatregel voor jezelf", 
        isCorrect: false, 
        feedback: "Nee. Kind vraagt niet om phone parking, maar heeft het WEL nodig. Smartphone = constant DMN-trigger. Phone parking = cadeau aan jezelf en je kind." 
      },
      { 
        id: "c", 
        text: "Thuis = phone in lader, quality time = phone weg, bedtime = phone beneden", 
        isCorrect: true, 
        feedback: "Perfect! Phone parking = fysieke afstand creëren. Smartphone bij je = DMN-trigger. Weg van je = TPN mogelijk. Simpele regel, grote impact." 
      },
    ],
    explanation: "Phone Parking: Thuis = lader, Quality time = andere kamer, Bedtime = beneden. Smartphone bij je = constant DMN-trigger + dopamine-verlangen. Fysieke afstand = vrijheid.",
    research: "Ward, A. (2017). Brain Drain: Mere Presence of Smartphone Reduces Cognitive Capacity",
  },

  {
    id: "aa_28",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 28,
    question: "Micro-momenten van verbinding: 2 min morning check-in + 5 min after-school + 10 min bedtime = 17 min. Waarom is dit krachtiger dan 2 uur 'samen zijn' op de bank?",
    options: [
      { 
        id: "a", 
        text: "Zeventien minuten is simpelweg realistischer voor heel drukke ouders met volle agenda\'s", 
        isCorrect: false, 
        feedback: "Wel waar, maar neurologisch: TPN (aanwezigheid) creëert verbinding, DMN (afwezigheid) niet. Het gaat niet om realisme maar om kwaliteit van verbinding." 
      },
      { 
        id: "b", 
        text: "17 min volledig aanwezig weegt zwaarder dan 2 uur afwezig; kinderen onthouden verbinding", 
        isCorrect: true, 
        feedback: "Perfect! Quality > quantity. 17 min echte verbinding (TPN) > 2 uur fysieke nabijheid (DMN). Hersenen onthouden emotionele momenten, niet tijdsduur." 
      },
      { 
        id: "c", 
        text: "Kinderen hebben sowieso een korte aandachtsspanne en kunnen niet langer dan dat focussen", 
        isCorrect: false, 
        feedback: "Nee. Het gaat niet om hun aandachtsspanne maar om kwaliteit van JOUW aanwezigheid. TPN (aanwezig) = verbinding. DMN (afwezig) = geen verbinding." 
      },
    ],
    explanation: "Micro-momenten (TPN = aanwezig) > marathon-sessies (DMN = afwezig). Hersenen onthouden emotionele verbinding, niet tijdsduur. Quality beats quantity, altijd.",
    research: "Kabat-Zinn, M. & J. (1997). Everyday Blessings: Mindful Parenting",
  },

  {
    id: "aa_29",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 29,
    question: "Het Still Face experiment wordt ook wel de 'smartphone experiment' genoemd. Waarom?",
    options: [
      { 
        id: "a", 
        text: "Smartphones maken gezichten strak en uitdrukkingsloos door het blauwe licht van het scherm", 
        isCorrect: false, 
        feedback: "Nee. De link is: ouder op phone = emotioneel afwezig = still face-effect. Kind ervaart afwezigheid en dit triggert stress, net als in het experiment." 
      },
      { 
        id: "b", 
        text: "Kinderen gebruiken zelf te veel smartphone en kijken net als bij still face naar een scherm", 
        isCorrect: false, 
        feedback: "Nee. Het gaat niet om het kind's smartphone gebruik maar om JOUW smartphone tijdens interacties met je kind. Jij op phone = still face voor hen." 
      },
      { 
        id: "c", 
        text: "Smartphone = modern still face. Kind ervaart afwezigheid en raakt dagelijks gestrest", 
        isCorrect: true, 
        feedback: "Exact! Ouder op smartphone = still face herhaling. Kind detecteert afwezigheid → probeert contact → raakt gefrustreerd → leert 'ik ben minder belangrijk'. Chronisch = attachment-impact." 
      },
    ],
    explanation: "Ouder op smartphone = modern still face experiment. Verschil: Still Face = 3 min, smartphone = herhaald dagelijks. Chronische afwezigheid = chronische stress = attachment-impact.",
    research: "Radesky, J. (2014). Patterns of mobile device use by caregivers",
  },

  {
    id: "aa_30",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "basis",
    order: 30,
    question: "Wat is de kerngedachte van micro-momenten van verbinding?",
    options: [
      { 
        id: "a", 
        text: "Geen perfecte ouder nodig, maar een aanwezige. Micro-momenten bouwen hechting", 
        isCorrect: true, 
        feedback: "Perfect! Niet perfectie, maar aanwezigheid. Niet uren, maar momenten. Je kind meet liefde in aandacht, niet in tijd. Phone down, eyes up, heart open." 
      },
      { 
        id: "b", 
        text: "Je moet als ouder altijd honderd procent beschikbaar zijn voor je kind thuis", 
        isCorrect: false, 
        feedback: "Onmogelijk en niet nodig. Micro-momenten = kort maar krachtig. 2-minute rule: korte momenten van volledige aandacht > uren van gedeelde ruimte." 
      },
      { 
        id: "c", 
        text: "Hoe meer tijd je samen doorbrengt met je kind, hoe beter de band uiteindelijk", 
        isCorrect: false, 
        feedback: "Nee. Quality > quantity. 10 min 100% aanwezig > 2 uur half aanwezig. Kinderen onthouden momenten van verbinding, niet hoeveelheid tijd." 
      },
    ],
    explanation: "Je kind meet liefde in aandacht. Micro-momenten van echte aanwezigheid (TPN) bouwen het fundament van veilige hechting. Phone down, eyes up, heart open.",
    research: "Siegel, D. (2012). The Developing Mind",
  },

];
export const GRENZEN_TRAINING: TrainingItem[] = [

  // ============================================================
  // MODULE 1: JE KIND WIL GRENZEN (Vragen 1-6)
  // Baumrind's 4 stijlen, 3 functies, grenzen = externe PFC
  // ============================================================

  {
    id: "gr_1",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "basis",
    order: 1,
    question: "Je zoon (4) wil voor de derde keer een koekje. Je zegt 'nee' en hij begint te huilen. Je voelt je schuldig. Waarom willen kinderen eigenlijk grenzen?",
    context: "Grenzen voelen voor ouders vaak als straf, maar voor kinderen zijn ze iets heel anders.",
    options: [
      {
        id: "a",
        text: "Kinderen willen helemaal geen grenzen - ze willen alleen vrijheid en altijd hun zin krijgen",
        isCorrect: false,
        feedback: "Nee. Kinderen TESTEN grenzen, maar dat betekent niet dat ze geen grenzen WILLEN. Een kind zonder grenzen voelt zich onveilig, zoals een auto zonder remmen.",
      },
      {
        id: "b",
        text: "Grenzen zijn eigenlijk alleen nodig voor heel drukke of moeilijke kinderen, niet voor iedereen",
        isCorrect: false,
        feedback: "Alle kinderen hebben grenzen nodig, niet alleen 'drukke' kinderen. Grenzen zijn als een steiger: ze geven houvast tijdens de ontwikkeling.",
      },
      {
        id: "c",
        text: "Grenzen geven veiligheid, structuur en emotionele rust; kinderen voelen zich veiliger met grenzen",
        isCorrect: true,
        feedback: "Correct. Grenzen hebben 3 functies: fysieke veiligheid (niet op straat rennen), structuur (voorspelbaarheid), en emotionele veiligheid (iemand is in control). Kinderen zoeken deze veiligheid.",
      },
    ],
    explanation: "De 3 functies van grenzen: 1) Fysieke veiligheid (bescherming), 2) Structuur (voorspelbaarheid creëert rust), 3) Emotionele veiligheid (iemand is in control, ik hoef het niet zelf te regelen). Kinderen testen grenzen om te checken of ze er zijn.",
    research: "Baumrind, D. (1991). The Influence of Parenting Style on Adolescent Competence and Substance Use. Journal of Early Adolescence, 11(1)",
  },

  {
    id: "gr_2",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "basis",
    order: 2,
    question: "Diana Baumrind beschreef 4 opvoedstijlen. Je buurman zegt tegen zijn dochter (6): 'Omdat ik het zeg! Geen discussie!' Welke stijl is dit?",
    options: [
      {
        id: "a",
        text: "Autoritatief - een goede balans tussen streng zijn en warmte tonen",
        isCorrect: false,
        feedback: "Nee. Autoritatief combineert warmte MET uitleg. 'Omdat ik het zeg' mist de warmte en uitleg-component.",
      },
      {
        id: "b",
        text: "Permissief - veel warmte geven maar heel weinig grenzen handhaven",
        isCorrect: false,
        feedback: "Nee. Permissief zou zijn: 'Oké schat, doe maar wat je wilt.' Dit is het tegenovergestelde: veel controle, weinig warmte.",
      },
      {
        id: "c",
        text: "Autoritair - hoge eisen stellen maar weinig warmte en uitleg geven",
        isCorrect: true,
        feedback: "Correct. Autoritair = hoge eisen + weinig warmte + geen uitleg. Het kind gehoorzaamt uit angst, niet uit begrip. Dit leidt tot ofwel rebels gedrag ofwel overaangepastheid.",
      },
    ],
    explanation: "Baumrind's 4 stijlen: 1) Autoritatief (warm + grenzen = gouden standaard), 2) Autoritair (streng + koud), 3) Permissief (warm + geen grenzen), 4) Verwaarlozend (koud + geen grenzen). Autoritatief leidt tot de beste uitkomsten.",
    research: "Baumrind, D. (1991). The Influence of Parenting Style on Adolescent Competence and Substance Use",
  },

  {
    id: "gr_3",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "basis",
    order: 3,
    question: "Je dochter (3) rent naar de straat. Je grijpt haar vast en zegt stellig: 'Stop! De straat is gevaarlijk.' Ze huilt. Welke functie van grenzen vervul je hier?",
    options: [
      {
        id: "a",
        text: "Emotionele veiligheid - ze voelt zich gehoord en begrepen in haar gevoelens",
        isCorrect: false,
        feedback: "In dit moment gaat het niet om emotionele veiligheid maar om haar fysieke bescherming. Later kun je de emotie valideren.",
      },
      {
        id: "b",
        text: "Fysieke veiligheid - de eerste en meest basale functie van grenzen",
        isCorrect: true,
        feedback: "Correct. Fysieke veiligheid is de meest basale grensfunctie. Bij direct gevaar is er geen ruimte voor uitleg of validatie. Eerst veiligheid, dan emotie.",
      },
      {
        id: "c",
        text: "Structuur bieden - ze leert hiermee de regels van veilig buiten spelen",
        isCorrect: false,
        feedback: "Structuur gaat over voorspelbaarheid en routine. Dit is acuut: haar fysieke veiligheid staat op het spel. Structuur komt later.",
      },
    ],
    explanation: "Bij de 3 functies geldt een hiërarchie: 1) Fysieke veiligheid (altijd eerste prioriteit, geen discussie), 2) Structuur (voorspelbaarheid), 3) Emotionele veiligheid. Bij direct gevaar gaat veiligheid voor warmte.",
    research: "Perry, B. (2006). The Boy Who Was Raised as a Dog",
  },

  {
    id: "gr_4",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 4,
    question: "De prefrontale cortex (PFC) van je zoon (5) is nog lang niet volgroeid. Pas rond zijn 25e is deze volledig ontwikkeld. Wat betekent dit voor grenzen stellen?",
    options: [
      {
        id: "a",
        text: "Je hoeft eigenlijk geen grenzen te stellen want zijn brein kan ze op die leeftijd toch niet verwerken",
        isCorrect: false,
        feedback: "Juist het tegenovergestelde! Omdat zijn PFC onrijp is, heeft hij JOUW grenzen nodig als vervanging. Grenzen zijn zijn externe PFC.",
      },
      {
        id: "b",
        text: "Je moet extra streng zijn zodat zijn prefrontale cortex sneller groeit en zich beter ontwikkelt ermee",
        isCorrect: false,
        feedback: "Strengheid versnelt de PFC-rijping niet. Warme, consistente grenzen (autoritatief) bieden de veiligheid waarin het brein optimaal kan ontwikkelen.",
      },
      {
        id: "c",
        text: "Jouw grenzen fungeren als zijn externe PFC - jij levert de regulatie die hij nog niet zelf kan",
        isCorrect: true,
        feedback: "Correct. Grenzen = externe PFC. Jij levert de impulscontrole, planning, en consequentie-inschatting die zijn onrijpe brein nog niet zelf kan. Geleidelijk internalisert hij dit.",
      },
    ],
    explanation: "Grenzen als externe PFC: de PFC (impulscontrole, planning, gevolgen inschatten) rijpt pas rond 25 jaar. Tot die tijd zijn JOUW grenzen de vervanging. Geleidelijk neemt het kind dit over (internalisatie). Dit is coregulatie op gedragsniveau.",
    research: "Siegel, D. (2013). Brainstorm: The Power and Purpose of the Teenage Brain",
  },

  {
    id: "gr_5",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 5,
    question: "Je bent opgegroeid met een autoritaire vader ('Omdat ik het zeg!'). Nu wil je het anders doen. Je dochter (6) weigert op te ruimen. Wat doet een autoritatieve vader?",
    options: [
      {
        id: "a",
        text: "\'Je ruimt nu je spullen op, anders mag je vanavond niet naar de TV kijken!'Je ruimt nu op, anders geen TV!' (dreigen zonder warmte)",
        isCorrect: false,
        feedback: "Dit is autoritair - de stijl van je eigen vader. Hoge eis, geen warmte, geen uitleg. Je herhaalt het patroon.",
      },
      {
        id: "b",
        text: "\'We ruimen om 6 uur op. Wil je beginnen met de blokken of de puzzels?'We ruimen om 6 uur op. Wil je beginnen met de blokken of de puzzels?' (warm + grens + keuze)",
        isCorrect: true,
        feedback: "Correct. Autoritatief: de grens staat (opruimen), maar er is warmte (samen), uitleg (wanneer), en autonomie (keuze in volgorde). Firm but fair.",
      },
      {
        id: "c",
        text: "\'Oke, laat maar zitten dan, ik ruim het zelf wel op als jij het niet doet.'Oké, laat maar, ik ruim het wel op.' (geen grens, alleen warmte)",
        isCorrect: false,
        feedback: "Dit is permissief - warmte maar geen grens. Je dochter leert: als ik weiger, doet papa het wel.",
      },
    ],
    explanation: "Autoritatief = de gouden standaard. Het combineert: 1) Duidelijke grenzen (het MOET), 2) Warmte (ik ben er voor je), 3) Uitleg (waarom), 4) Autonomie (keuzes binnen de grens). Dit leidt tot de beste ontwikkelingsuitkomsten.",
    research: "Baumrind, D. (1991). The Influence of Parenting Style on Adolescent Competence and Substance Use",
  },

  {
    id: "gr_6",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 6,
    question: "Onderzoek toont dat kinderen die opgroeien ZONDER duidelijke grenzen vaker angst- en gedragsproblemen ontwikkelen. Wat is de neurologische verklaring?",
    options: [
      {
        id: "a",
        text: "Zonder externe PFC (grenzen) moet het kinderbrein zelf alle beslissingen nemen, wat stress geeft",
        isCorrect: true,
        feedback: "Correct. Zonder grenzen draait het kind 'overuren' op een onrijpe PFC. Dit veroorzaakt chronische cortisol-verhoging, angst, en paradoxaal genoeg: meer gedragsproblemen.",
      },
      {
        id: "b",
        text: "Zonder grenzen is er geen straf, dus kinderen leren helemaal geen consequenties van hun acties aan",
        isCorrect: false,
        feedback: "Het gaat niet om straf. Het gaat om de neurologische behoefte aan voorspelbaarheid. Zonder grenzen is de wereld onvoorspelbaar = chronische stress.",
      },
      {
        id: "c",
        text: "Kinderen zonder grenzen worden verwend en precies dat verwende gedrag veroorzaakt alle problemen",
        isCorrect: false,
        feedback: "'Verwend' is een moreel oordeel, geen neurologische verklaring. De kern is: zonder externe PFC moet het kinderbrein zelf reguleren, waar het nog niet rijp voor is.",
      },
    ],
    explanation: "Grenzen = veiligheid = lagere cortisol = betere breinontwikkeling. Geen grenzen = onvoorspelbaarheid = hogere cortisol = chronische stress = angst en gedragsproblemen. Het brein ontwikkelt zich optimaal in veiligheid, en grenzen creëren veiligheid.",
    research: "Perry, B. (2006). The Boy Who Was Raised as a Dog; Shonkoff, J. (2012). The Lifelong Effects of Early Childhood Adversity. Pediatrics, 129(1)",
  },

  // ============================================================
  // MODULE 2: DE GEBROKEN GRAMMOFOON (Vragen 7-12)
  // Herhalen zonder escaleren, KISS, geen discussie tijdens grens
  // ============================================================

  {
    id: "gr_7",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "basis",
    order: 7,
    question: "Je zoon (5) wil nog een aflevering kijken. Je hebt gezegd: 'Na dit programma gaat de TV uit.' Hij vraagt: 'Nog eentje? Pleeeease?' Wat is de Gebroken Grammofoon techniek?",
    context: "De Gebroken Grammofoon is een kerntechniek voor grenzen vasthouden zonder te escaleren.",
    options: [
      {
        id: "a",
        text: "Je legt uitgebreid uit waarom veel TV slecht is voor zijn ogen en zijn brein",
        isCorrect: false,
        feedback: "Te veel uitleg tijdens een grens nodigt uit tot discussie. Een 5-jarige gaat niet zeggen: 'Oh, je hebt gelijk over mijn neurale ontwikkeling.' Kort en simpel.",
      },
      {
        id: "b",
        text: "Je herhaalt je boodschap rustig en kort, zonder nieuwe argumenten'De TV gaat uit na dit programma.'",
        isCorrect: true,
        feedback: "Correct. De Gebroken Grammofoon: herhaal dezelfde korte boodschap, warm maar stellig, zonder in discussie te gaan. Elke keer dezelfde zin.",
      },
      {
        id: "c",
        text: "Je schreeuwt het luider zodat hij eindelijk goed begrijpt dat je het meent",
        isCorrect: false,
        feedback: "Volume verhogen = escaleren. De Gebroken Grammofoon is juist het TEGENOVERGESTELDE: dezelfde volume, dezelfde toon, dezelfde woorden. Rust is kracht.",
      },
    ],
    explanation: "De Gebroken Grammofoon: 1) Korte boodschap, 2) Warm maar stellig, 3) Herhalen zonder variatie, 4) Geen nieuwe argumenten. Het kind leert: deze grens staat, onderhandelen heeft geen zin. Consistentie is de boodschap.",
    research: "Patterson, G. (2002). The Early Development of Coercive Family Process. In Antisocial Behavior in Children and Adolescents",
  },

  {
    id: "gr_8",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "basis",
    order: 8,
    question: "Je dochter (8) wil naar een vriendinnetje maar het is een schoolavond. Ze geeft 5 argumenten waarom het WEL kan. Je merkt dat je in een discussie wordt gezogen. Wat is de KISS-methode?",
    options: [
      {
        id: "a",
        text: "Keep It Short & Simple - boodschap van maximaal 1-2 zinnen, geen argumenten",
        isCorrect: true,
        feedback: "Correct. KISS = Keep It Short & Simple. 'Het is een schoolavond. Je gaat morgen.' Punt. Elk extra argument is een opening voor haar om terug te debatteren.",
      },
      {
        id: "b",
        text: "Kiss her on the forehead to show you love her while you are saying no to her",
        isCorrect: false,
        feedback: "Fysieke affectie bij een grens kan helpen, maar KISS staat voor Keep It Short & Simple. Het gaat om de lengte van je boodschap.",
      },
      {
        id: "c",
        text: "Kind Informeren over Serieuze Situaties - uitgebreid en duidelijk uitleggen",
        isCorrect: false,
        feedback: "Nee. KISS = Keep It Short & Simple. Juist MINDER uitleg, niet meer. Elk extra woord is een aanval oppervlak voor discussie.",
      },
    ],
    explanation: "KISS bij grenzen: hoe KORTER je boodschap, hoe DUIDELIJKER de grens. Lange uitleg = onderhandeling uitnodigen. Kort = helder. 'Het is een schoolavond.' is krachtiger dan 5 zinnen uitleg.",
    research: "Phelan, T. (2010). 1-2-3 Magic: Effective Discipline for Children 2-12",
  },

  {
    id: "gr_9",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 9,
    question: "Je zoon (6) schreeuwt: 'Dat is niet eerlijk! Mam laat het WEL!' als je zegt dat hij niet buiten mag spelen in het donker. Je voelt de drang om uit te leggen waarom het gevaarlijk is. Waarom is uitleg NU niet effectief?",
    options: [
      {
        id: "a",
        text: "Zijn emotionele brein is actief - uitleg bereikt de PFC niet en wordt munitie voor discussie",
        isCorrect: true,
        feedback: "Correct. Tijdens de confrontatie is de PFC offline. Uitleg wordt niet verwerkt maar omgebouwd tot tegenargumenten. Grens nu, uitleg later.",
      },
      {
        id: "b",
        text: "Uitleg is altijd effectief bij kinderen - ze verdienen immers een goede reden van hun ouders",
        isCorrect: false,
        feedback: "Uitleg is waardevol, maar niet TIJDENS de grens-confrontatie. Op dit moment is hij in fight-modus. Uitleg werkt pas als de emotie gezakt is.",
      },
      {
        id: "c",
        text: "Je moet nooit uitleg geven aan kinderen over grenzen - ze moeten gewoon luisteren en gehoorzamen",
        isCorrect: false,
        feedback: "Uitleg is cruciaal bij autoritatief opvoeden. Maar de TIMING is essentieel: niet tijdens de confrontatie, wel daarna als het kind rustig is.",
      },
    ],
    explanation: "Timing van uitleg: TIJDENS de confrontatie = brandstof voor discussie. NA de confrontatie (als de emotie gezakt is) = leermoment. De Gebroken Grammofoon nu, uitleg bij het slapengaan. Warm + kort + herhalen.",
    research: "Siegel, D. & Bryson, T. (2014). No-Drama Discipline",
  },

  {
    id: "gr_10",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 10,
    question: "Je dochter (7) vraagt voor de 4e keer of ze snoep mag. Je hebt 3x 'nee' gezegd. Bij de 4e keer geef je toe: 'Oké, maar alleen dit keer!' Wat heeft ze zojuist geleerd?",
    options: [
      {
        id: "a",
        text: "Dat papa lief is en soms flexibel kan zijn als je maar lang genoeg blijft vragen",
        isCorrect: false,
        feedback: "Ze heeft niet geleerd dat je lief bent. Ze heeft geleerd dat 4x zeuren = ja. Dit heet intermittent reinforcement en is de krachtigste vorm van bekrachtiging.",
      },
      {
        id: "b",
        text: "Niets bijzonders - een keer toegeven maakt op de lange termijn echt niet zo veel uit",
        isCorrect: false,
        feedback: "Eén keer toegeven na meerdere keer 'nee' is precies intermittent reinforcement. Het leert haar dat de grens niet vast staat als ze maar lang genoeg volhoudt.",
      },
      {
        id: "c",
        text: "Dat volhouden werkt - lang genoeg zeuren zorgt dat papa toch toegeeft",
        isCorrect: true,
        feedback: "Correct. Intermittent reinforcement: onvoorspelbaar toegeven versterkt gedrag MEER dan altijd toegeven. Ze leert: 'Misschien werkt het deze keer.' Dit is hetzelfde principe als gokverslaving.",
      },
    ],
    explanation: "Intermittent reinforcement is de krachtigste bekrachtiging die bestaat (zie: gokautomaten). Onvoorspelbaar toegeven na 'nee' leert het kind: er is altijd een kans. De oplossing: als je 'nee' zegt, blijf bij 'nee'.",
    research: "Skinner, B.F. (1957). Schedules of Reinforcement; Patterson, G. (2002). Coercive Family Process",
  },

  {
    id: "gr_11",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 11,
    question: "Je zoon (10) is een meester-onderhandelaar. Hij gebruikt logica, emotie, en vergelijking ('Andere vaders laten het wel toe!'). Je voelt je wankelen. Wat is de meest effectieve strategie?",
    options: [
      {
        id: "a",
        text: "Zijn argumenten weerleggen met nog betere en sterkere tegenargumenten",
        isCorrect: false,
        feedback: "Je gaat nooit een argumentatie-wedstrijd winnen met een gemotiveerd kind. Elk tegenargument is een nieuw startpunt voor discussie.",
      },
      {
        id: "b",
        text: "Erkennen en de Gebroken Grammofoon toepassen: rustig herhalen'Ik snap dat je het niet leuk vindt. Het antwoord is nee.' Herhalen zonder in te gaan op argumenten",
        isCorrect: true,
        feedback: "Correct. Erken zijn frustratie (warmte) maar ga niet in op de argumenten (grens). 'Ik hoor je. Het antwoord is nee.' Steeds opnieuw, zonder variatie.",
      },
      {
        id: "c",
        text: "Boos worden zodat hij eindelijk stopt met al dat argumenteren telkens",
        isCorrect: false,
        feedback: "Boos worden leert hem dat emotionele druk werkt - dan gaat hij voortaan emotionele druk gebruiken. De Gebroken Grammofoon is krachtiger dan boosheid.",
      },
    ],
    explanation: "Bij een meester-onderhandelaar: 1) Erken de emotie ('Ik snap het'), 2) Stel de grens kort ('Het antwoord is nee'), 3) Herhaal exact dezelfde zin. Niet ingaan op argumenten. Elke reactie op een argument = voeding voor meer argumenten.",
    research: "Phelan, T. (2010). 1-2-3 Magic; Siegel, D. & Bryson, T. (2014). No-Drama Discipline",
  },

  {
    id: "gr_12",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 12,
    question: "Na een grens-confrontatie met je dochter (9) is ze boos naar haar kamer gegaan. 30 minuten later komt ze rustig terug. Je wilt het bespreken. Wat is de beste volgorde?",
    options: [
      {
        id: "a",
        text: "Eerst verbinden met haar gevoel, dan pas uitleggen waarom de grens er was'Dat was lastig hè'), dan kort uitleggen ('De grens was er omdat...'), dan vooruit kijken ('Volgende keer...')",
        isCorrect: true,
        feedback: "Correct. Volgorde: 1) Verbinding (relatie herstellen), 2) Korte uitleg (leermoment), 3) Vooruit kijken (volgende keer). Verbinding VOOR instructie.",
      },
      {
        id: "b",
        text: "Direct uitleggen waarom de grens heel belangrijk was voor haar veiligheid",
        isCorrect: false,
        feedback: "Begin niet met uitleg. Begin met verbinding. Eerst de relatie herstellen, dan pas het leermoment.",
      },
      {
        id: "c",
        text: "Niets zeggen - de grens was al duidelijk genoeg, herhaling is niet nodig",
        isCorrect: false,
        feedback: "Het nabespreken is juist het leermoment. Tijdens de confrontatie kon ze niet leren (PFC offline). Nu haar PFC online is, KAN ze het verwerken.",
      },
    ],
    explanation: "Het nabespreken is waar het echte leren gebeurt. Tijdens de confrontatie: PFC offline, geen leermoment. Na de confrontatie (30+ min): PFC online, verbinding herstellen, dan uitleggen. Dit is het autoritatieve verschil met autoritair.",
    research: "Siegel, D. & Bryson, T. (2014). No-Drama Discipline",
  },

  // ============================================================
  // MODULE 3: EMOTIONELE GRENZEN (Vragen 13-18)
  // Emotionele veiligheid, parentificatie, emotionele beschikbaarheid
  // ============================================================

  {
    id: "gr_13",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "basis",
    order: 13,
    question: "Na een ruzie met je partner ga je naar je zoon (8) en zegt: 'Mama is zo moeilijk soms. Jij begrijpt me tenminste.' Je zoon luistert aandachtig. Wat doe je hier?",
    context: "Emotionele grenzen beschermen kinderen tegen emotionele lasten die niet bij hun leeftijd passen.",
    options: [
      {
        id: "a",
        text: "Je schendt een emotionele grens - je belast je kind met volwassen zorgen",
        isCorrect: true,
        feedback: "Correct. Parentificatie: het kind wordt de emotionele verzorger van de ouder. Dit is een omgekeerde rolverdeling die het kind schaadt. Jouw relatieproblemen zijn niet zijn last.",
      },
      {
        id: "b",
        text: "Je bouwt een goede band door open en eerlijk te zijn over je gevoelens thuis",
        isCorrect: false,
        feedback: "Dit is geen openheid maar parentificatie. Je maakt je zoon verantwoordelijk voor JOUW emotionele welzijn. Hij wordt je therapeut in plaats van je kind.",
      },
      {
        id: "c",
        text: "Dit is oke zolang je het niet te vaak doet en er niet te diep op ingaat ermee",
        isCorrect: false,
        feedback: "Eén keer is al te veel. Je creëert een dynamiek waarin je zoon zich verantwoordelijk voelt voor jouw gevoelens. Dit is een zware last voor een 8-jarige.",
      },
    ],
    explanation: "Parentificatie: het kind neemt de emotionele ouderrol over. Het kind leert: mijn gevoelens zijn minder belangrijk dan die van papa. Dit leidt tot angst, schuldgevoel, en later: moeite met eigen grenzen.",
    research: "Boszormenyi-Nagy, I. & Spark, G. (1973). Invisible Loyalties; Earley, L. & Cushway, D. (2002). The Parentified Child. Clinical Child Psychology and Psychiatry",
  },

  {
    id: "gr_14",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "basis",
    order: 14,
    question: "Je dochter (6) vraagt: 'Papa, waarom was je boos op mama?' Je was inderdaad boos maar wilt eerlijk zijn. Wat is een goede emotionele grens?",
    options: [
      {
        id: "a",
        text: "\'Nergens over schat, er was helemaal niets aan de hand, maak je geen zorgen.'Nergens over schat, er was niets aan de hand.' (ontkennen)",
        isCorrect: false,
        feedback: "Ontkennen verwarrt haar: ze ZAG dat je boos was. Als je zegt dat er niets is, leert ze haar eigen waarneming niet te vertrouwen.",
      },
      {
        id: "b",
        text: "\'Mama deed iets wat papa niet leuk vond en nu ben ik best wel boos op haar.'Mama deed iets wat papa niet leuk vond en nu ben ik boos op haar.'",
        isCorrect: false,
        feedback: "Dit trekt je dochter in het conflict. Ze voelt zich gedwongen om kant te kiezen. Bescherm haar tegen volwassen dynamiek.",
      },
      {
        id: "c",
        text: "\'Mama en papa waren het ergens niet over eens. Dat hoort erbij. Het komt goed.'Mama en papa waren het ergens niet over eens. Dat hoort erbij. Het komt goed.' (kort, eerlijk, zonder details)",
        isCorrect: true,
        feedback: "Correct. Eerlijk maar leeftijdsgeschikt. Je erkent wat ze heeft gezien (ze is niet gek), geeft geruststelling (het komt goed), maar deelt geen volwassen details.",
      },
    ],
    explanation: "Emotionele grenzen bij partnerconflict: 1) Erken wat het kind heeft gezien (hun waarneming klopt), 2) Geef geruststelling (het komt goed), 3) Deel geen volwassen details. Eerlijk maar beschermd.",
    research: "Gottman, J. & Silver, N. (1999). The Seven Principles for Making Marriage Work",
  },

  {
    id: "gr_15",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 15,
    question: "Je zoon (11) merkt dat je gestrest bent. Hij begint het huishouden te doen, maakt eten voor zijn zusje (7), en zegt: 'Ga maar zitten papa, ik doe het wel.' Je bent trots. Maar wat is het risico?",
    options: [
      {
        id: "a",
        text: "Hij parentificeert - hij neemt de ouderrol over ten koste van zijn kindertijd",
        isCorrect: true,
        feedback: "Correct. Instrumentele parentificatie: het kind neemt praktische taken over die niet bij zijn leeftijd horen. Hij offert zijn kindertijd op om voor jou te zorgen. Dit schaadt zijn ontwikkeling.",
      },
      {
        id: "b",
        text: "Er is geen enkel risico hier - hij is gewoon een heel zorgzaam en lief kind thuis",
        isCorrect: false,
        feedback: "Incidenteel helpen is prima. Maar structureel de ouderrol overnemen als je vader gestrest is = parentificatie. Hij leert: ik moet voor papa zorgen.",
      },
      {
        id: "c",
        text: "Dit is goed voor zijn ontwikkeling - hij leert op deze manier verantwoordelijkheid",
        isCorrect: false,
        feedback: "Verantwoordelijkheid leren is leeftijdsgeschikt en vrijwillig. Een 11-jarige die structureel voor het gezin zorgt omdat papa het niet aankan is geen verantwoordelijkheid - het is een last.",
      },
    ],
    explanation: "Er zijn 2 vormen van parentificatie: 1) Emotioneel (kind als vertrouweling), 2) Instrumenteel (kind neemt praktische taken over). Beide zijn schadelijk als ze structureel zijn en voortkomen uit een omgekeerde behoefte (ouder HEEFT het kind nodig).",
    research: "Jurkovic, G. (1997). Lost Childhoods: The Plight of the Parentified Child",
  },

  {
    id: "gr_16",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 16,
    question: "Wat is het verschil tussen een fysieke grens en een emotionele grens?",
    options: [
      {
        id: "a",
        text: "Er is geen echt verschil tussen die twee - een grens is gewoon altijd een grens",
        isCorrect: false,
        feedback: "Er is een groot verschil. Fysieke grenzen beschermen tegen fysiek gevaar. Emotionele grenzen beschermen tegen emotionele overbelasting. Beide zijn essentieel.",
      },
      {
        id: "b",
        text: "Fysiek = beschermt tegen gevaar; emotioneel = beschermt gevoelswereld'niet op straat'). Emotionele grens = beschermt tegen emotionele overbelasting ('mijn zorgen zijn niet jouw zorgen')",
        isCorrect: true,
        feedback: "Correct. Fysieke grenzen zijn zichtbaar en concreet. Emotionele grenzen zijn onzichtbaar maar even cruciaal. Veel vaders vergeten de emotionele grenzen.",
      },
      {
        id: "c",
        text: "Fysieke grenzen zijn altijd veel belangrijker dan emotionele grenzen bij kinderen",
        isCorrect: false,
        feedback: "Beide zijn essentieel. Emotionele grenzen zijn zelfs moeilijker omdat ze onzichtbaar zijn. Een kind kan fysiek veilig zijn maar emotioneel overbelast.",
      },
    ],
    explanation: "Fysieke grenzen: zichtbaar, concreet, makkelijker te handhaven. Emotionele grenzen: onzichtbaar, subtiel, vaak onbewust geschonden. Voorbeelden emotionele grenzen: geen volwassen zorgen delen, kind niet als vertrouweling gebruiken, niet je emoties op kind projecteren.",
    research: "Minuchin, S. (1974). Families and Family Therapy",
  },

  {
    id: "gr_17",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 17,
    question: "Een vader is recent gescheiden. Hij vertelt zijn dochter (9) over zijn eenzaamheid en vraagt: 'Vind je het goed als je dit weekend bij mij blijft in plaats van bij mama?' Het kind voelt druk. Wat zijn de lagen van grensoverschrijding?",
    options: [
      {
        id: "a",
        text: "Er is maar een probleem: hij manipuleert het kind bewust om bij hem te willen blijven wonen",
        isCorrect: false,
        feedback: "Het is dieper dan manipulatie. Er zijn meerdere lagen: emotionele parentificatie + loyaliteitsconflict + schuldgevoel als wapen. Dit is een complexe grensoverschrijding.",
      },
      {
        id: "b",
        text: "Het is heel begrijpelijk - gescheiden vaders zijn eenzaam en kinderen moeten dat kunnen begrijpen",
        isCorrect: false,
        feedback: "Zijn eenzaamheid is reëel en begrijpelijk. Maar een 9-jarige is niet de juiste persoon om dit mee te delen. Zijn emotionele behoeften moeten door volwassenen worden opgevangen.",
      },
      {
        id: "c",
        text: "Drie lagen: parentificatie, loyaliteitsconflict, en haar verantwoordelijk maken voor zijn welzijn",
        isCorrect: true,
        feedback: "Correct. Laag 1: parentificatie (kind draagt zijn emotie). Laag 2: loyaliteitsconflict (kind moet kiezen). Laag 3: verantwoordelijkheid verschuiven (kind 'moet' hem redden). Drie emotionele grenzen geschonden.",
      },
    ],
    explanation: "Gescheiden vaders lopen extra risico op emotionele grensoverschrijding door eenzaamheid. Cruciale regels: 1) Kind niet gebruiken als emotionele steun, 2) Kind niet in loyaliteitsconflict plaatsen, 3) Kind niet verantwoordelijk maken voor jouw welzijn.",
    research: "Boszormenyi-Nagy, I. (1973). Invisible Loyalties; Wallerstein, J. (2000). The Unexpected Legacy of Divorce",
  },

  {
    id: "gr_18",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 18,
    question: "Je dochter (10) zegt: 'Papa, ik maak me zorgen over jou. Je ziet er moe uit.' Wat is de emotioneel gezonde reactie?",
    options: [
      {
        id: "a",
        text: "\'Lief dat je dat zegt. Ik ben een beetje moe, maar dat is iets voor grote mensen.'Lief dat je dat zegt. Ik ben een beetje moe, maar dat is iets voor grote mensen. Papa zorgt voor zichzelf.' (eerlijk + grens + geruststelling)",
        isCorrect: true,
        feedback: "Correct. Je valideert haar zorgzaamheid, bent eerlijk over je toestand, stelt een emotionele grens (dit is van mij), en geeft geruststelling (ik kan dit aan). Alle elementen aanwezig.",
      },
      {
        id: "b",
        text: "\'Maak je geen zorgen schat, er is helemaal niets aan de hand, het gaat goed met me.'Maak je geen zorgen schat, er is niets.' (ontkennen)",
        isCorrect: false,
        feedback: "Ontkennen invalidateert haar waarneming. Ze ZIET dat je moe bent. Eerlijkheid met een grens is beter dan ontkenning.",
      },
      {
        id: "c",
        text: "\'Ja schat, het is zwaar op werk en thuis. Zullen we samen een film kijken vanavond?'Ja schat, het is zwaar op werk en thuis. Zullen we samen een film kijken zodat papa zich beter voelt?'",
        isCorrect: false,
        feedback: "Dit maakt haar verantwoordelijk voor jouw welzijn ('zodat papa zich beter voelt'). Ze leert: ik moet papa opvrolijken. Dat is haar taak niet.",
      },
    ],
    explanation: "Wanneer je kind zich zorgen maakt over jou: 1) Valideer ('Lief dat je dat zegt'), 2) Wees eerlijk maar kort ('Ik ben moe'), 3) Stel de grens ('Dit is van mij'), 4) Geef geruststelling ('Ik zorg voor mezelf'). De boodschap: jij hoeft niet voor mij te zorgen.",
    research: "Tsabary, S. (2010). The Conscious Parent; Minuchin, S. (1974). Families and Family Therapy",
  },

  // ============================================================
  // MODULE 4: FLEXIBELE VS RIGIDE GRENZEN (Vragen 19-24)
  // Wanneer buigen, prioriteitenmatrix, context, autonomie vs veiligheid
  // ============================================================

  {
    id: "gr_19",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "basis",
    order: 19,
    question: "Je zoon (7) mag normaal geen snoep voor het eten. Maar het is zijn verjaardag en oma heeft taart meegenomen. Mag je de grens buigen?",
    context: "Niet alle grenzen zijn gelijk. Sommige grenzen zijn hard, andere zijn flexibel.",
    options: [
      {
        id: "a",
        text: "Nee absoluut niet, een grens is een grens. Als je nu buigt respecteert hij nooit meer je grenzen",
        isCorrect: false,
        feedback: "Dit is rigide denken. Verjaardag + oma = speciale context. Flexibel zijn bij LAGE-prioriteit grenzen toont wijsheid, niet zwakte.",
      },
      {
        id: "b",
        text: "Ja, dit is een lage-prioriteit grens; bij speciale gelegenheden mag je buigen",
        isCorrect: true,
        feedback: "Correct. 'Geen snoep voor het eten' is een preferentie-grens, geen veiligheidsgrens. Flexibiliteit bij lage-prioriteit grenzen leert je kind: papa is redelijk en context-gevoelig.",
      },
      {
        id: "c",
        text: "Je moet het eerst met je partner bespreken voordat je samen een grens gaat aanpassen thuis",
        isCorrect: false,
        feedback: "Bij een duidelijke lage-prioriteit situatie (verjaardag + taart) is overleg niet nodig. Je kunt zelf inschatten dat dit een buig-moment is.",
      },
    ],
    explanation: "De prioriteitenmatrix: 1) Harde grenzen (veiligheid) = nooit buigen, 2) Belangrijke grenzen (structuur) = zelden buigen, 3) Zachte grenzen (preferentie) = context-afhankelijk buigen. Weten WANNEER je buigt toont meer kracht dan altijd rigide zijn.",
    research: "Siegel, D. & Bryson, T. (2014). No-Drama Discipline",
  },

  {
    id: "gr_20",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 20,
    question: "Je dochter (5) wil zonder fietshelm fietsen omdat haar vriendinnetjes dat ook doen. Ze huilt en smeekt. Mag je hier buigen?",
    options: [
      {
        id: "a",
        text: "Ja, ze moet zelf leren omgaan met risico en bovendien doen alle andere kinderen het ook zonder",
        isCorrect: false,
        feedback: "Nee. Fietshelm = fysieke veiligheid = harde grens. Peer pressure is geen reden om een veiligheidsgrens te versoepelen. Nooit buigen bij veiligheid.",
      },
      {
        id: "b",
        text: "Misschien wel - maar alleen als ze plechtig belooft heel voorzichtig te zijn op de fiets vandaag",
        isCorrect: false,
        feedback: "Een 5-jarige kan 'voorzichtig' niet consistent uitvoeren. Veiligheidsgrenzen staan los van beloftes. Helm = harde grens.",
      },
      {
        id: "c",
        text: "Nee, dit is een harde grens voor fysieke veiligheid. Veiligheidsgrenzen buig je nooit",
        isCorrect: true,
        feedback: "Correct. In de prioriteitenmatrix is fysieke veiligheid ALTIJD een harde grens. Geen uitzonderingen. 'Ik snap dat je het niet leuk vindt. Helm op, of we fietsen niet.'",
      },
    ],
    explanation: "De prioriteitenmatrix in actie: veiligheid = ALTIJD hard. De test is simpel: kan mijn kind ernstig gewond raken? Ja = harde grens. Nee = overweeg de context. Fietshelm, autogordel, niet met vreemden meegaan = harde grenzen.",
    research: "Baumrind, D. (1991). The Influence of Parenting Style; Perry, B. (2006). The Boy Who Was Raised as a Dog",
  },

  {
    id: "gr_21",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 21,
    question: "Je zoon (12) wil tot 22:00 opblijven op een vrijdagavond. Zijn normale bedtijd is 20:30. Hij argumenteert: 'Ik ben geen baby meer!' Welke overweging is het belangrijkst?",
    options: [
      {
        id: "a",
        text: "Zijn leeftijd en context maken dit redelijk; autonomie geven binnen veilige kaders",
        isCorrect: true,
        feedback: "Correct. Dit is een structuur-grens (niet veiligheid) op een speciale dag (vrijdag). Op 12 jaar groeit de autonomie-behoefte. Buigen is hier passend en bevordert zijn ontwikkeling.",
      },
      {
        id: "b",
        text: "Regels zijn nu eenmaal regels - 20:30 is 20:30, ook op een vrijdagavond, geen uitzonderingen",
        isCorrect: false,
        feedback: "Dit is rigide. Een 12-jarige heeft een ander ritme dan een 8-jarige. Context-insensitief vasthouden aan regels ondermijnt je autoriteit op termijn.",
      },
      {
        id: "c",
        text: "Hij mag helemaal zelf beslissen wanneer hij naar bed gaat - hij is oud genoeg op zijn twaalfde",
        isCorrect: false,
        feedback: "Volledige vrijheid op 12 jaar is te vroeg. De PFC is nog niet rijp genoeg voor consistente zelfregulatie. Autonomie BINNEN kaders is de sleutel.",
      },
    ],
    explanation: "Flexibele grenzen passen zich aan op: 1) Leeftijd (meer autonomie bij ouder worden), 2) Context (doordeweeks vs weekend), 3) Bewezen verantwoordelijkheid. Rigide grenzen bij een 12-jarige creëren rebellie. Flexibele grenzen creëren vertrouwen.",
    research: "Steinberg, L. (2001). We Know Some Things: Parent-Adolescent Relationships. Journal of Research on Adolescence, 11(1)",
  },

  {
    id: "gr_22",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 22,
    question: "Je dochter (14) wil naar een feest waar geen ouders aanwezig zijn. Je vindt het onverantwoord. Zij zegt: 'Je vertrouwt me niet!' Hoe navigeer je de spanning tussen autonomie en veiligheid?",
    options: [
      {
        id: "a",
        text: "Verbieden zonder enige uitleg geven - jij bent de ouder, jij alleen beslist over dit soort zaken",
        isCorrect: false,
        feedback: "Bij een 14-jarige werkt autoritair niet meer. Ze heeft uitleg nodig EN een gevoel van autonomie. Alleen verbieden creëert weerstand en stiekem gedrag.",
      },
      {
        id: "b",
        text: "Erkennen dat je haar vertrouwt maar de situatie onveilig is; samen een compromis zoeken",
        isCorrect: true,
        feedback: "Correct. Onderscheid maken tussen vertrouwen in HAAR en de SITUATIE. Een compromis biedt autonomie (ze gaat) binnen veiligheid (jij haalt op). Dit is autoritatief bij een tiener.",
      },
      {
        id: "c",
        text: "Haar gewoon laten gaan naar dat feest - ze moet uiteindelijk van haar eigen fouten leren in het leven",
        isCorrect: false,
        feedback: "Bij potentieel onveilige situaties (geen toezicht) is 'leren van fouten' geen optie. Sommige fouten zijn te risicovol. Jij bent nog steeds haar externe PFC.",
      },
    ],
    explanation: "Bij tieners verschuift de balans van controle naar invloed. De kunst: 1) Vertrouwen in het KIND benoemen ('Ik vertrouw jou'), 2) De SITUATIE beoordelen ('Geen toezicht = risico'), 3) Samen zoeken naar oplossingen (autonomie + veiligheid).",
    research: "Steinberg, L. (2001). We Know Some Things; Siegel, D. (2013). Brainstorm: The Power and Purpose of the Teenage Brain",
  },

  {
    id: "gr_23",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 23,
    question: "Je peuter (3) wil zelf zijn schoenen aantrekken maar het duurt 10 minuten en jullie zijn al laat. Je wilt het overnemen. Wat is de beste aanpak?",
    options: [
      {
        id: "a",
        text: "Hem laten proberen maar eerder beginnen met vertrekken; autonomie faciliteren",
        isCorrect: true,
        feedback: "Correct. De oplossing is PREVENTIEF: eerder beginnen zodat er tijd is voor zijn autonomie. Zijn behoefte om zelf te doen is ontwikkelingsnoodzaak, niet koppigheid.",
      },
      {
        id: "b",
        text: "Schoenen zelf aandoen - je bent al laat en efficientie gaat nu even voor autonomie",
        isCorrect: false,
        feedback: "Dit ondermijnt zijn autonomie-ontwikkeling. Op 3 jaar is 'zelf doen' essentieel. De oplossing zit in planning, niet in overnemen.",
      },
      {
        id: "c",
        text: "Hem dwingen om sneller te zijn - hij moet namelijk leren dat haast soms nodig is",
        isCorrect: false,
        feedback: "Een 3-jarige kan niet sneller zijn onder druk. Zijn motoriek is in ontwikkeling. Haast creëert stress en frustratie, geen snelheid.",
      },
    ],
    explanation: "Autonomie vs veiligheid/structuur: soms moet je de context aanpassen in plaats van de grens. Hier: niet de autonomie wegnemen, maar de omstandigheden aanpassen (eerder beginnen). Dit is flexibel grenzen stellen.",
    research: "Erikson, E. (1950). Childhood and Society (Autonomie vs schaamte en twijfel, leeftijd 1-3)",
  },

  {
    id: "gr_24",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 24,
    question: "Je zoon (8) heeft ADHD. De standaard huisregels (stilzitten bij het eten, 30 min huiswerk maken) zijn voor hem bijna onmogelijk. Hoe pas je je grenzen aan?",
    options: [
      {
        id: "a",
        text: "Dezelfde regels gewoon strikt handhaven - anders leert hij nooit echte discipline aan op termijn",
        isCorrect: false,
        feedback: "Rigide regels bij ADHD = chronisch falen = beschadigd zelfbeeld. Zijn brein werkt anders. De regels moeten aangepast, niet hij.",
      },
      {
        id: "b",
        text: "Grenzen aanpassen aan zijn mogelijkheden: dezelfde waarden, andere invulling",
        isCorrect: true,
        feedback: "Correct. Flexibele grenzen = dezelfde waarden (respect, leren) maar andere invulling (10 min blokken i.p.v. 30 min). Je past de VORM aan, niet de FUNCTIE.",
      },
      {
        id: "c",
        text: "Alle regels volledig laten vallen want hij kan er met zijn ADHD echt helemaal niets aan doen",
        isCorrect: false,
        feedback: "Geen grenzen is ook schadelijk. Hij heeft AANGEPASTE grenzen nodig, niet GEEN grenzen. Structuur is juist extra belangrijk bij ADHD.",
      },
    ],
    explanation: "Bij neurodiversiteit: de grens-WAARDE blijft (respect, veiligheid, leren), maar de grens-VORM past zich aan. Dit is het verschil tussen rigide grenzen (vorm vasthouden) en flexibele grenzen (functie vasthouden).",
    research: "Barkley, R. (2013). Taking Charge of ADHD; Greene, R. (2014). The Explosive Child",
  },

  // ============================================================
  // MODULE 5: GRENZEN ALS TEAM (Vragen 25-30)
  // Co-parenting, united front, reparatie na inconsistentie
  // ============================================================

  {
    id: "gr_25",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "basis",
    order: 25,
    question: "Je hebt tegen je dochter (6) gezegd dat ze geen tablet mag. Ze gaat naar mama en vraagt het daar. Mama zegt: 'Vooruit, even dan.' Wat leert je dochter hiervan?",
    context: "Co-parenting consistentie is een van de grootste uitdagingen voor ouders.",
    options: [
      {
        id: "a",
        text: "Niets bijzonders aan de hand - kinderen vragen altijd aan de andere ouder als ze nee krijgen",
        isCorrect: false,
        feedback: "Ze leert wel degelijk iets: dat de grenzen niet vaststaan en dat ze ouders tegen elkaar kan uitspelen. Dit ondermijnt beide ouders.",
      },
      {
        id: "b",
        text: "Ze leert dat mama veel aardiger en makkelijker is dan papa wanneer ze iets wil hebben thuis",
        isCorrect: false,
        feedback: "Het gaat niet om wie 'aardiger' is. Ze leert een strategische vaardigheid: als de ene ouder nee zegt, probeer de andere. Dit is schadelijk voor alle drie.",
      },
      {
        id: "c",
        text: "Ze leert dat papa\'s grenzen te omzeilen zijn door mama te vragen; dit ondermijnt je gezag's grenzen niet tellen en dat ze door 'shoppen' bij mama alsnog haar zin krijgt",
        isCorrect: true,
        feedback: "Correct. Parent-shopping: het kind leert welke ouder de 'makkelijke' is. Dit ondermijnt jouw autoriteit en creëert verwarring over welke grenzen echt gelden.",
      },
    ],
    explanation: "Parent-shopping: kinderen leren snel welke ouder bij welk onderwerp de 'zwakste' is. Inconsistentie tussen ouders ondermijnt grenzen structureel. De oplossing: united front. 'Heeft papa al geantwoord? Dan geldt dat.'",
    research: "Gottman, J. & DeClaire, J. (1998). Raising An Emotionally Intelligent Child; Minuchin, S. (1974). Families and Family Therapy",
  },

  {
    id: "gr_26",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "basis",
    order: 26,
    question: "Je partner en jij hebben verschillende ideeën over bedtijden. Jij vindt 19:30 goed voor je zoon (5), je partner vindt 20:00 prima. Hoe los je dit op?",
    options: [
      {
        id: "a",
        text: "Ieder hanteert zijn eigen tijd - als papa brengt hij om 19:30 en als mama om 20:00 naar bed",
        isCorrect: false,
        feedback: "Twee verschillende bedtijden verwarren het kind. Hij weet niet wat de 'echte' bedtijd is en zal altijd de latere proberen af te dwingen.",
      },
      {
        id: "b",
        text: "De strijd aangaan en volhouden - wie het hardst volhoudt wint uiteindelijk deze discussie thuis",
        isCorrect: false,
        feedback: "Een machtsstrijd tussen ouders is schadelijk voor de relatie en het kind. Compromis en teamwerk zijn de sleutel.",
      },
      {
        id: "c",
        text: "Samen een bedtijd afspreken als compromis en dit consistent hanteren als united front",
        isCorrect: true,
        feedback: "Correct. United front: bespreek het ZONDER het kind erbij, maak een gezamenlijk besluit, en handhaaf het SAMEN. Het kind ziet: mijn ouders zijn een team.",
      },
    ],
    explanation: "United front regels: 1) Bespreek meningsverschillen ZONDER kinderen erbij, 2) Maak een gezamenlijk besluit (compromis), 3) Communiceer het als team ('We hebben besloten'), 4) Steun elkaar in handhaving.",
    research: "Gottman, J. & Silver, N. (1999). The Seven Principles for Making Marriage Work",
  },

  {
    id: "gr_27",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 27,
    question: "Tijdens het eten zegt je partner tegen je dochter (8): 'Je hoeft je bord niet leeg te eten.' Jij had net gezegd dat ze WEL haar bord moest leegeten. Je dochter kijkt verward van de een naar de ander. Wat doe je NU?",
    options: [
      {
        id: "a",
        text: "Je partner direct corrigeren waar je dochter bij zit zodat zij ziet dat jij het niet eens bent'Nee, ze eet haar bord leeg!'",
        isCorrect: false,
        feedback: "Elkaar tegenspreken waar het kind bij zit ondermijnt beide ouders. Dit escaleert tot een machtsstrijd met je dochter als getuige.",
      },
      {
        id: "b",
        text: "Nu partner volgen voor united front; later samen bespreken en een gezamenlijke regel afspreken",
        isCorrect: true,
        feedback: "Correct. In het moment: united front bewaren (partner volgen of neutraal blijven). Later: samen bespreken. Het kind mag niet zien dat ouders het oneens zijn over grenzen.",
      },
      {
        id: "c",
        text: "Je dochter zelf laten kiezen welke regel ze wil volgen zodat ze leert om zelf te beslissen thuis'Wil je je bord leegeten of niet?'",
        isCorrect: false,
        feedback: "Het kind laten kiezen tussen twee ouders is het probleem verplaatsen. Zij moet niet de scheidsrechter zijn in een ouder-meningsverschil.",
      },
    ],
    explanation: "Gouden regel bij co-parenting: nooit elkaars grenzen ondermijnen waar het kind bij zit. In het moment: de grens van de andere ouder steunen. NA het moment: samen bespreken en een gezamenlijke lijn afspreken.",
    research: "Minuchin, S. (1974). Families and Family Therapy; Gottman, J. (1999). The Seven Principles",
  },

  {
    id: "gr_28",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 28,
    question: "Je merkt dat je en je partner consequent VERSCHILLENDE grenzen hanteren. Jij bent streng over schermtijd, zij is streng over opruimen. Maar jullie ondermijnen elkaars grenzen. Wat is het effect op je zoon (7)?",
    options: [
      {
        id: "a",
        text: "Het is juist goed dat kinderen twee verschillende perspectieven meekrijgen van hun ouders thuis",
        isCorrect: false,
        feedback: "Twee perspectieven is prima bij meningen. Maar inconsistente GRENZEN creëren verwarring en onzekerheid. Het kind weet niet wat er geldt.",
      },
      {
        id: "b",
        text: "Verwarring en onzekerheid: bij verschillende grenzen weet het kind niet wat geldt'echte' regels zijn. Dit verhoogt angst",
        isCorrect: true,
        feedback: "Correct. Inconsistentie tussen ouders = onvoorspelbaarheid = verhoogde cortisol bij het kind. Het kind voelt zich onveilig omdat de grenzen niet vast staan.",
      },
      {
        id: "c",
        text: "Het kind leert op deze manier flexibel te zijn en zich aan te passen aan verschillende mensen",
        isCorrect: false,
        feedback: "Aanpassen aan inconsistente ouders is niet flexibiliteit maar hyperwaakzaamheid. Het kind scant constant: welke regels gelden nu? Dit is stressvol, niet leerzaam.",
      },
    ],
    explanation: "Inconsistentie tussen ouders activeert het stress-systeem van het kind: onvoorspelbaarheid = onveiligheid. De oplossing: een grens-top tussen ouders. Bespreek de top-5 grenzen en maak gezamenlijke afspraken.",
    research: "Cummings, E. & Davies, P. (2010). Marital Conflict and Children: An Emotional Security Perspective",
  },

  {
    id: "gr_29",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 29,
    question: "Je was het niet eens met je partner over een grens. In een emotioneel moment zei je tegen je dochter (9): 'Papa vindt dat je WEL mag, maar mama zegt nee. Sorry schat.' Je partner is boos. Wat is er misgegaan en hoe repareer je dit?",
    options: [
      {
        id: "a",
        text: "Je hebt het united front gebroken. Repareer: excuses aan partner, samen naar dochter'Papa en mama zijn het samen eens geworden over...'",
        isCorrect: true,
        feedback: "Correct. De schade repareren: 1) Erken naar je partner dat je het front hebt gebroken, 2) Maak samen een nieuwe afspraak, 3) Ga SAMEN naar je dochter en communiceer de gezamenlijke grens.",
      },
      {
        id: "b",
        text: "Niets is misgegaan want je was gewoon eerlijk en open tegen je dochter over je mening",
        isCorrect: false,
        feedback: "Eerlijkheid is belangrijk, maar je hebt je partner ondermijnd EN je dochter in een loyaliteitsconflict geplaatst. Ze moet nu kiezen tussen papa en mama.",
      },
      {
        id: "c",
        text: "Je partner heeft ongelijk - als de grens echt onredelijk is mag je dat gewoon zeggen",
        isCorrect: false,
        feedback: "Of de grens redelijk is, bespreek je ZONDER het kind. Je dochter in de strijd betrekken is altijd schadelijk, ongeacht wie gelijk heeft.",
      },
    ],
    explanation: "Na een co-parenting breuk: 1) Repareer de partnerrelatie (excuses, erken de fout), 2) Maak een gezamenlijk besluit, 3) Ga SAMEN naar het kind en communiceer als team. Het kind ziet: ouders maken fouten, maar repareren samen. Dit is modellering.",
    research: "Gottman, J. (1999). The Seven Principles for Making Marriage Work; Minuchin, S. (1974). Families and Family Therapy",
  },

  {
    id: "gr_30",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 30,
    question: "Je bent gescheiden. Je ex-partner hanteert totaal andere regels bij haar thuis: later naar bed, meer schermtijd, geen groente hoeven eten. Je zoon (8) zegt: 'Bij mama mag alles!' Hoe ga je hiermee om?",
    options: [
      {
        id: "a",
        text: "Je regels aanpassen aan die van je ex zodat het helemaal consistent is voor je zoon thuis",
        isCorrect: false,
        feedback: "Je hoeft je eigen waarden niet op te geven. Kinderen kunnen leren dat er bij papa andere regels gelden dan bij mama, mits je het goed uitlegt.",
      },
      {
        id: "b",
        text: "Je ex bekritiseren tegenover je zoon en uitleggen dat haar regels helemaal niet goed zijn'Mama's regels zijn niet goed voor je'",
        isCorrect: false,
        feedback: "Nooit de andere ouder afvallen. Dit plaatst je zoon in een loyaliteitsconflict en schaadt hem meer dan de inconsistente regels.",
      },
      {
        id: "c",
        text: "Jouw regels rustig vasthouden en uitleggen dat bij papa andere afspraken gelden'Bij papa gelden papa's regels. Ik begrijp dat het anders is bij mama.' Niet vergelijken of bekritiseren",
        isCorrect: true,
        feedback: "Correct. Na scheiding: 1) Hou je eigen waarden vast, 2) Bekritiseer de andere ouder NOOIT, 3) Leg uit dat verschillende huizen verschillende regels kunnen hebben. Kinderen leren hiermee omgaan.",
      },
    ],
    explanation: "Bij gescheiden co-parenting: volledige consistentie is vaak onmogelijk. Wat WEL kan: 1) Jouw eigen grenzen consistent handhaven, 2) De andere ouder niet afvallen, 3) Uitleggen: 'Bij papa gelden papa's regels.' Kinderen passen zich aan als de grenzen BINNEN elk huis consistent zijn.",
    research: "Wallerstein, J. (2000). The Unexpected Legacy of Divorce; Emery, R. (2004). The Truth About Children and Divorce",
  },

];
export const AUTONOMIE_TRAINING: TrainingItem[] = [
  // MODULE 1: SCAFFOLDING & LOSLATEN (Vragen 1-6)
  {
    id: "au_1", skill: "Autonomie", type: "quiz", difficulty: "basis", order: 1,
    question: "Bram (7) probeert zelf een ei te bakken voor het ontbijt. Het gaat langzaam en hij morst eierschaal in de pan. Je staat achter hem. Wat doe je?",
    context: "Self-Determination Theory: autonomie, competentie en verbinding zijn de drie basisbehoeften.",
    options: [
      { id: "a", text: "Je laat hem doorgaan en moedigt rustig aan'Ik zie dat er schaal in zit. Hoe zou je die eruit kunnen halen?'", isCorrect: true, feedback: "Correct! Je benoemt het probleem neutraal en activeert zijn probleemoplossend denken. Hij blijft eigenaar van de taak." },
      { id: "b", text: "Je pakt de pan over en bakt het ei snel zelf af", isCorrect: false, feedback: "Nee. Je bedoeling is goed, maar je ondermijnt zijn competentiegevoel. Hij leert: 'als het niet perfect gaat, neemt papa het over.'" },
      { id: "c", text: "Je zegt dat hij te jong is om eieren te mogen bakken", isCorrect: false, feedback: "Nee. Een 7-jarige KAN een ei bakken met begeleiding. Door het uit te stellen ondermijn je zijn intrinsieke motivatie om te leren." },
    ],
    explanation: "Deci & Ryan's Self-Determination Theory: competentie is een basisbehoefte. De sleutelvraag is niet 'kan mijn kind dit perfect?' maar 'kan mijn kind dit LEREN als ik het ruimte geef?' Hulp bieden is goed; overnemen is schadelijk.",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  {
    id: "au_2", skill: "Autonomie", type: "quiz", difficulty: "basis", order: 2,
    question: "Fleur (5) probeert haar veters te strikken. Na drie mislukte pogingen kijkt ze gefrustreerd maar heeft niet om hulp gevraagd. Wat is de beste reactie?",
    options: [
      { id: "a", text: "Je bukt en strikt haar veters snel even voor haar", isCorrect: false, feedback: "Nee. Ze heeft niet om hulp gevraagd. Door direct op te lossen ontneem je haar de kans om het zelf te ontdekken. Frustratie is onderdeel van leren." },
      { id: "b", text: "Je vraagt wat ze al geprobeerd heeft'Ik zie dat het lastig is. Wat heb je al geprobeerd?'", isCorrect: true, feedback: "Perfect! Je valideert haar frustratie en activeert haar denken. Ze blijft eigenaar van het proces." },
      { id: "c", text: "Je geeft haar schoenen met klittenband als alternatief", isCorrect: false, feedback: "Nee. Je verwijdert de uitdaging in plaats van haar te helpen die aan te gaan. Ze mist een leerkans." },
    ],
    explanation: "'Wat heb je al geprobeerd?' is een krachtige vraag die eigenaarschap bij het kind houdt. Het verschuift de rol van vader-als-oplosser naar vader-als-coach.",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  {
    id: "au_3", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 3,
    question: "Stijn (9) wil zelf met de trein naar zijn opa, twee haltes verderop. Je vindt het spannend maar de route is eenvoudig. Hoe pas je scaffolding toe?",
    options: [
      { id: "a", text: "Je oefent samen de route en bespreekt wat-als situaties's, en laat hem dan alleen gaan", isCorrect: true, feedback: "Perfect scaffolding! Samen oefenen, stap voor stap steun afbouwen, en dan loslaten. Dit is de Zone van Naaste Ontwikkeling in actie." },
      { id: "b", text: "Je zegt nee, een 9-jarige hoort niet alleen in de trein", isCorrect: false, feedback: "Nee. Dit is je eigen angst projecteren. In veel landen reizen kinderen van deze leeftijd zelfstandig. De vraag is: kun je hem erop voorbereiden?" },
      { id: "c", text: "Je laat hem direct alleen gaan, hij moet het zelf leren", isCorrect: false, feedback: "Nee. Zonder voorbereiding is dit boven zijn ZPD. Scaffolding betekent: eerst ondersteunen, dan geleidelijk loslaten." },
    ],
    explanation: "Vygotsky's scaffolding: bied precies genoeg steun om het kind naar het volgende niveau te brengen, en bouw die steun af zodra het kind het zelf kan. Te veel steun remt; te weinig steun overweldigt.",
    research: "Vygotsky, L.S. (1978). Mind in Society: The Development of Higher Psychological Processes",
  },
  {
    id: "au_4", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 4,
    question: "Lotte (11) is al maanden verantwoordelijk voor het voeren van de hond. De laatste weken vergeet ze het steeds. Je voert de hond stilletjes zelf. Welk patroon ontstaat er?",
    options: [
      { id: "a", text: "Je toont teamwerk, gezinsleden springen voor elkaar in bij taken", isCorrect: false, feedback: "Nee. Er is een verschil tussen incidenteel helpen en structureel overnemen. Je ondermijnt haar verantwoordelijkheid." },
      { id: "b", text: "Aangeleerde hulpeloosheid: vergeten heeft geen gevolgen", isCorrect: true, feedback: "Correct. Als je consequent taken overneemt, leert het kind: mijn inspanning maakt niet uit. Dit generaliseert naar school, sport en later werk." },
      { id: "c", text: "Misschien is deze taak te veel voor haar en moet je haar ontlasten", isCorrect: false, feedback: "Nee. Een 11-jarige kan een hond voeren. Het probleem is niet capaciteit maar het ontbreken van consequenties bij vergeten." },
    ],
    explanation: "Aangeleerde hulpeloosheid (Seligman): wanneer inspanning geen verschil maakt in de uitkomst, stopt een kind met proberen. Beter: laat de natuurlijke consequentie werken (hongerige hond die bij haar zeurt) of bespreek de verantwoordelijkheid expliciet.",
    research: "Seligman, M. (1972). Learned Helplessness. Annual Review of Medicine",
  },
  {
    id: "au_5", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 5,
    question: "Jelle (8) mag thuis nergens over meebeslissen: niet over het eten, niet over weekendplannen, niet over de inrichting van zijn kamer. Welke basisbehoefte uit de Self-Determination Theory wordt het sterkst ondermijnd?",
    context: "SDT: autonomie, competentie en verbinding zijn de drie psychologische basisbehoeften.",
    options: [
      { id: "a", text: "Competentie — hij leert niet dat hij dingen kan bereiken", isCorrect: false, feedback: "Deels, maar het kernprobleem is anders. Hij heeft misschien best de vaardigheden, maar hij MAG ze niet inzetten." },
      { id: "b", text: "Verbinding — hij voelt zich buitengesloten door het gezin", isCorrect: false, feedback: "De vader is wel betrokken, maar op een controlerende manier. Het kernprobleem is het ontbreken van keuzevrijheid, niet van relatie." },
      { id: "c", text: "Autonomie — geen invloed op zijn eigen leven", isCorrect: true, feedback: "Correct. Autonomie = het gevoel dat je keuzes kunt maken die ertoe doen. Zonder enige inspraak voelt een kind zich machteloos en afhankelijk." },
    ],
    explanation: "SDT onderscheidt drie basisbehoeften. Bij totale controle door de ouder wordt autonomie het hardst geraakt. Kinderen die nooit mogen kiezen, ontwikkelen ofwel passiviteit (geleerd hulpeloosheid) ofwel heftig verzet.",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  {
    id: "au_6", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 6,
    question: "Roos (6) maakt elke ochtend zelf haar broodtrommel klaar. Ze stopt er vier koekjes in en geen fruit. Wat is de autonomie-bevorderende aanpak?",
    options: [
      { id: "a", text: "Haar broodtrommel stiekem ompakken als ze even niet kijkt", isCorrect: false, feedback: "Nee. Dit is manipulatief en ondermijnt haar vertrouwen. Ze leert: mijn keuzes worden niet gerespecteerd." },
      { id: "b", text: "Samen afspraken maken over wat erin mag'broodtrommelregel' maken: minimaal een stuk fruit en een boterham, en de rest mag ze zelf kiezen", isCorrect: true, feedback: "Correct! Keuze binnen kaders: de gezondheidsgrens staat vast, maar zij kiest WAT en HOE daarbinnen. Dit combineert structuur met autonomie." },
      { id: "c", text: "Haar laten gaan, ze leert vanzelf dat alleen koekjes niet genoeg zijn", isCorrect: false, feedback: "Nee. Een 6-jarige heeft nog kaders nodig bij voeding. Volledige vrijheid zonder structuur is geen autonomie maar verwaarlozing." },
    ],
    explanation: "Keuze binnen kaders is de kern van autonomie-ondersteuning. Je biedt een gezond raamwerk en laat het kind daarbinnen kiezen. Het kind leert zelf beslissen binnen redelijke grenzen.",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  // MODULE 2: LEEFTIJDSGERICHTE VRIJHEID (Vragen 7-12)
  {
    id: "au_7", skill: "Autonomie", type: "quiz", difficulty: "basis", order: 7,
    question: "Casper (4) wil zijn eigen ontbijt kiezen. Hij pakt chips uit de kast. Hoe geef je hem autonomie zonder de grens los te laten?",
    context: "Scaffolding: ondersteuning bieden op het niveau van het kind, niet daarboven of daaronder.",
    options: [
      { id: "a", text: "Twee gezonde opties aanbieden en hem laten kiezen'Wil je cornflakes of havermout? Jij mag kiezen.'", isCorrect: true, feedback: "Correct! Keuze-illusie: het resultaat (gezond ontbijt) staat vast, maar hij ervaart keuzevrijheid. Twee opties is genoeg voor een 4-jarige." },
      { id: "b", text: "Chips is belachelijk bij ontbijt, hij krijgt boterhammen'Chips bij het ontbijt? Dat is belachelijk. Hier, je krijgt boterhammen.'", isCorrect: false, feedback: "Nee. Je ondermijnt zijn initiatief en beschaamt hem. De grens is prima, maar de manier is afbrekend." },
      { id: "c", text: "Hem de chips laten eten, hij leert vanzelf dat het niet voldoet", isCorrect: false, feedback: "Nee. Een 4-jarige heeft nog structuur nodig bij voedselkeuzes. Volledige vrijheid is hier niet leeftijdsgeschikt." },
    ],
    explanation: "Leeftijdsgerichte autonomie: op 4 jaar werk je met beperkte keuzes (2-3 opties) die jij vooraf selecteert. Het kind ervaart keuzevrijheid zonder overweldigd te worden.",
    research: "Vygotsky, L.S. (1978). Mind in Society: The Development of Higher Psychological Processes",
  },
  {
    id: "au_8", skill: "Autonomie", type: "quiz", difficulty: "basis", order: 8,
    question: "Lars (10) heeft een spreekbeurt over twee weken. Hij doet niets. Je wilt ingrijpen. Wat bevordert zijn autonomie het meest?",
    options: [
      { id: "a", text: "Je vraagt hem hoe hij het wil aanpakken en wanneer'Hoe wil je dit aanpakken? Wanneer ga je beginnen?' en laat hem de consequentie ervaren als hij niets doet", isCorrect: true, feedback: "Correct! Op 10 jaar is planning een ontwikkelingstaak. Door hem te laten nadenken over zijn aanpak en de consequentie te laten komen, bouw je eigenaarschap." },
      { id: "b", text: "Je maakt samen een planningsschema en helpt met inhoud", isCorrect: false, feedback: "Het planningsschema samen maken kan nuttig zijn, maar helpen met de inhoud maakt jou mede-eigenaar. Scaffolding = helpen plannen, niet uitvoeren." },
      { id: "c", text: "Je doet niets, het is volledig zijn verantwoordelijkheid", isCorrect: false, feedback: "Helemaal niets doen mist je coachrol. Een korte vraag ('Hoe ga je dit aanpakken?') is scaffolding zonder overnemen." },
    ],
    explanation: "Op 10 jaar verschuift je rol van regisseur naar coach. Help met het PROCES (hoe pak je het aan?) niet met de INHOUD (wat zet je erin?). De natuurlijke consequentie van uitstelgedrag is de krachtigste leraar.",
    research: "Vygotsky, L.S. (1978). Mind in Society: The Development of Higher Psychological Processes",
  },
  {
    id: "au_9", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 9,
    question: "Iris (7) wil leren koken. Ze kan al roeren en groenten wassen, maar snijden met een mes vindt je eng. Wat is scaffolding volgens Vygotsky's ZPD?",
    options: [
      { id: "a", text: "Wachten tot ze ouder is, een mes is te gevaarlijk voor haar leeftijd", isCorrect: false, feedback: "Nee. Dit houdt haar ONDER de ZPD. Met begeleiding kan een 7-jarige leren snijden met een kindveilig mes." },
      { id: "b", text: "Beginnen met een botermesje, daarna opbouwen naar moeilijker", isCorrect: true, feedback: "Perfect scaffolding! Je bouwt de vaardigheid stap voor stap op, steeds in de ZPD, en vermindert je steun naarmate ze vaardiger wordt." },
      { id: "c", text: "Haar een scherp mes geven en zeggen dat ze voorzichtig moet zijn'Je kan het, gewoon proberen!'", isCorrect: false, feedback: "Nee. Dit is BOVEN de ZPD — te veel risico zonder begeleiding. Scaffolding betekent: precies genoeg steun bieden." },
    ],
    explanation: "De Zone van Naaste Ontwikkeling = wat een kind nog niet ZELF kan maar WEL met hulp. Scaffolding = tijdelijke ondersteuning die je afbouwt. De kunst is precies in die zone te blijven: niet te makkelijk, niet te moeilijk.",
    research: "Vygotsky, L.S. (1978). Mind in Society: The Development of Higher Psychological Processes",
  },
  {
    id: "au_10", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 10,
    question: "Pepijn (13) wil zelf zijn geld beheren. Hij krijgt zakgeld maar geeft het altijd binnen twee dagen uit. Je wilt blijven controleren. Wat klopt?",
    options: [
      { id: "a", text: "Laat hem experimenteren en coach hem op budget", isCorrect: true, feedback: "Correct! Op 13 jaar: laat hem blut zijn na twee dagen. Die ervaring leert meer dan jouw controle. Je rol: coach op budget, niet bewaker van de portemonnee." },
      { id: "b", text: "Je beheert zijn geld tot hij volwassen is, hij kan er niet mee omgaan", isCorrect: false, feedback: "Nee. Hij leert nooit omgaan met geld als hij het nooit mag beheren. Financiele autonomie moet geoefend worden." },
      { id: "c", text: "Stop met zakgeld geven tot hij er verantwoord mee leert omgaan", isCorrect: false, feedback: "Nee. Het wegnemen van de oefenkans maakt het probleem erger. Hij leert juist door het te DOEN en de consequenties te ervaren." },
    ],
    explanation: "Geldbeheer per leeftijd: 8j = klein bedrag met begeleiding, 13j = eigen budget met coaching, 16j = grotere bedragen met toenemende zelfstandigheid. Elke fase heeft passende autonomie en bijbehorende consequenties.",
    research: "Vygotsky, L.S. (1978). Mind in Society: The Development of Higher Psychological Processes",
  },
  {
    id: "au_11", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 11,
    question: "Fenna (12) wil haar kamer helemaal zelf inrichten: posters, kleurenkeuze, indeling. Het resultaat is volgens jou lelijk. Wat is het verschil tussen beschermen en beperken?",
    options: [
      { id: "a", text: "Ze mag het aanpassen als het eerst jouw goedkeuring krijgt als ouder", isCorrect: false, feedback: "Nee. Je maakt haar autonomie voorwaardelijk aan jouw smaak. Haar kamer is HAAR domein — een veilige oefenruimte voor eigenaarschap." },
      { id: "b", text: "Je helpt haar met Pinterest om samen iets moois uit te zoeken voor haar'moois' te vinden", isCorrect: false, feedback: "Nee. Dit stuurt haar subtiel richting jouw smaak. Laat haar eigen smaak ontwikkelen, ook als die verschilt van de jouwe." },
      { id: "c", text: "Haar kamer is haar domein, een oefenruimte voor eigen smaak", isCorrect: true, feedback: "Correct! Op 12 jaar is kamerdecoratie een perfecte autonomie-oefening. Er is geen veiligheidsrisico, dus het is beperken vermomd als betrokkenheid." },
    ],
    explanation: "Beschermen = reeel risico managen. Beperken = je eigen voorkeuren projecteren op je kind. Bij onschuldige keuzes (kleding, kamerinrichting, kapsel) is het bijna altijd beperken, niet beschermen.",
    research: "Skenazy, L. (2009). Free-Range Kids. Jossey-Bass",
  },
  {
    id: "au_12", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 12,
    question: "Ruben (15) wil alleen met de trein naar een festival in een andere stad, 100 km verderop. Je kent de plek niet. Wat zegt onderzoek over autonomie op deze leeftijd?",
    options: [
      { id: "a", text: "Zelfstandig reizen past bij 15 jaar, maak samen een plan", isCorrect: true, feedback: "Correct! Tieners hebben autonomie nodig voor identiteitsontwikkeling. Samen plannen (bereikbaarheid, noodplan, thuiskomsttijd) is scaffolding op tienerniveau." },
      { id: "b", text: "15 is te jong voor een festival zonder ouders erbij aanwezig'nee' is terecht", isCorrect: false, feedback: "Niet per se. Op 15 jaar is toenemende zelfstandigheid een ontwikkelingsbehoefte. Een reflexmatig 'nee' is vaak angstgestuurd, niet risicogestuurd." },
      { id: "c", text: "Laat hem gaan zonder voorwaarden, op 15 moet je vertrouwen geven", isCorrect: false, feedback: "Nee. Volledig loslaten zonder kader is geen autonomie maar onverschilligheid. Ook tieners hebben nog scaffolding nodig." },
    ],
    explanation: "Erikson: tieners hebben autonomie nodig voor identiteitsontwikkeling. Het doel verschuift van 'beschermen tegen de wereld' naar 'voorbereiden op de wereld'. Samen plannen = respect + veiligheid.",
    research: "Erikson, E. (1968). Identity: Youth and Crisis. Norton",
  },
  // MODULE 3: GROWTH MINDSET VIA FALEN (Vragen 13-18)
  {
    id: "au_13", skill: "Autonomie", type: "quiz", difficulty: "basis", order: 13,
    question: "Thijs (7) wint een tekenwedstrijd op school. Je zegt trots: 'Jij bent echt een kunstenaar!' Wat is het risico volgens Carol Dweck?",
    context: "Growth mindset vs fixed mindset: hoe je prijst bepaalt hoe je kind denkt over leren.",
    options: [
      { id: "a", text: "Geen risico, complimenten zijn altijd goed voor het zelfvertrouwen van kinderen", isCorrect: false, feedback: "Nee. Complimenten op TALENT ('kunstenaar') creeren een fixed mindset. Hij gaat moeilijke tekeningen vermijden om zijn label niet te verliezen." },
      { id: "b", text: "Hij wordt overmoedig en stopt daarna helemaal met oefenen op tekenen", isCorrect: false, feedback: "Dat kan, maar het kernprobleem is dieper: hij ontwikkelt een fixed mindset waarin falen bedreigend voelt." },
      { id: "c", text: "Hij ontwikkelt een fixed mindset en vermijdt uitdagingen'kunstenaar' te verliezen", isCorrect: true, feedback: "Correct! Als je identiteit gekoppeld is aan talent en je faalt, verlies je je identiteit. Kinderen die op eigenschap worden geprezen, kiezen veilige taken." },
    ],
    explanation: "Dweck's onderzoek: kinderen die op talent worden geprezen vermijden risico's. Kinderen die op inzet worden geprezen ('Je hebt zo lang aan die schaduw gewerkt!') zoeken juist uitdaging op.",
    research: "Dweck, C. (2006). Mindset: The New Psychology of Success",
  },
  {
    id: "au_14", skill: "Autonomie", type: "quiz", difficulty: "basis", order: 14,
    question: "Merel (5) bouwt een zandkasteel. Het stort steeds in bij de toren. Ze wil stoppen. Welke reactie bevordert een growth mindset?",
    options: [
      { id: "a", text: "Vragen wat er gebeurt en natter zand voorstellen'De toren zakt steeds in! Wat denk je dat er gebeurt? Misschien met natter zand?'", isCorrect: true, feedback: "Perfect! Je normaliseert het instorten (neutraal benoemen), stelt een denkprikkel, en laat haar experimenteren. Falen wordt onderzoek, niet frustratie." },
      { id: "b", text: "De toren even zelf maken en laten zien hoe het moet'Zal papa de toren even maken? Kijk, zo moet het.'", isCorrect: false, feedback: "Nee. Je redt haar van de frustratie en zij leert: 'als het mislukt, doet papa het.' Ze mist de kans om zelf een oplossing te vinden." },
      { id: "c", text: "Aanmoedigen om niet op te geven en nog een keer te proberen'Niet opgeven hoor! Probeer het nog een keer!'", isCorrect: false, feedback: "Nee. 'Doorzetten' zonder richting is zinloos. Ze heeft een STRATEGIE nodig, niet een motivatiespreuk." },
    ],
    explanation: "Growth mindset coaching: (1) normaliseer het falen, (2) activeer nieuwsgierigheid, (3) bied een strategische hint. Het doel is niet doorzetten maar ONTDEKKEN.",
    research: "Dweck, C. (2006). Mindset: The New Psychology of Success",
  },
  {
    id: "au_15", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 15,
    question: "Wouter (10) speelt in een toneelstuk op school en vergeet halverwege zijn tekst. Na afloop huilt hij backstage. Welke reactie combineert validatie met growth mindset?",
    options: [
      { id: "a", text: "Zeggen dat niemand het gemerkt heeft en hij het goed deed ondanks alles'Niet huilen, niemand heeft het gemerkt. Je deed het hartstikke goed!'", isCorrect: false, feedback: "Nee. 'Niet huilen' invalideert zijn emotie. En 'niemand merkte het' ontkent zijn ervaring — hij merkte het WEL." },
      { id: "b", text: "Zeggen dat hij zijn tekst vaker moet oefenen voor de volgende keer echt'Volgende keer oefenen we je tekst vaker, dan gebeurt dit niet meer'", isCorrect: false, feedback: "Nee. Je springt over zijn emotie heen naar een oplossing en impliceert dat het niet had mogen gebeuren." },
      { id: "c", text: "Zijn gevoel erkennen en vragen hoe hij improviseerde'Dat voelt heel vervelend. Ik zag dat je bleef staan en iets improviseerde — hoe deed je dat op dat moment?'", isCorrect: true, feedback: "Excellent! Eerst validatie ('voelt vervelend'), dan focus op zijn REACTIE op de fout, niet op de fout zelf. Je benoemt zijn veerkracht." },
    ],
    explanation: "Eerst voelen, dan leren: valideer de emotie en richt de aandacht op het PROCES. 'Hoe deed je dat op dat moment?' benoemt iets specifieks dat HIJ deed en richt de blik op veerkracht.",
    research: "Dweck, C. (2006). Mindset: The New Psychology of Success",
  },
  {
    id: "au_16", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 16,
    question: "Lieke (8) weigert mee te doen aan de schoolzwemwedstrijd. Ze is een goede zwemster maar zegt: 'Ik wil niet als ik niet kan winnen.' Waar wijst dit gedrag op?",
    options: [
      { id: "a", text: "Ze heeft geleerd dat resultaat bepaalt of iets waard is'goed' is — falen is zo bedreigend dat ze het vermijdt", isCorrect: true, feedback: "Correct! Dit is een fixed mindset in actie: haar zelfbeeld is gekoppeld aan winnen. Falen bedreigt haar identiteit, dus ze vermijdt het risico." },
      { id: "b", text: "Ze is van nature een perfectionist, dat is een karaktereigenschap", isCorrect: false, feedback: "Perfectionisme bij kinderen is zelden aangeboren. Het is aangeleerd door hoe de omgeving reageert op succes en falen." },
      { id: "c", text: "Ze heeft gewoon geen zin, alle kinderen hebben dat wel eens soms", isCorrect: false, feedback: "Het patroon ('alleen als ik win') wijst op iets diepers dan geen zin. Dit is faalangst vermomd als desinteresse." },
    ],
    explanation: "Faalangst ontstaat niet door te veel falen, maar door te WEINIG mogen falen. Kinderen die altijd geslaagd zijn (of gered werden van falen) ervaren falen als catastrofaal.",
    research: "Dweck, C. (2006). Mindset: The New Psychology of Success",
  },
  {
    id: "au_17", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 17,
    question: "Niels (12) heeft zijn eerste onvoldoende op Engels. Hij zegt: 'Ik heb gewoon geen talenknobbel.' Wat is de beste growth mindset-interventie?",
    options: [
      { id: "a", text: "Zeggen dat hij heel slim is en alles kan als hij maar echt wil'Onzin, je bent heel slim! Je kunt alles als je wilt!'", isCorrect: false, feedback: "Nee. Dit vervangt het ene label ('geen talenknobbel') door een ander ('heel slim'). Beide zijn fixed mindset — gebaseerd op vaste eigenschap." },
      { id: "b", text: "Zeggen: je begrijpt het NOG niet, waar liep het vast?'Je begrijpt het NOG niet. Welke stukken begreep je WEL en waar liep het vast? Laten we dat bekijken.'", isCorrect: true, feedback: "Perfect! Het woord 'NOG' is transformerend. Van 'ik kan het niet' naar 'ik kan het nog niet'. Daarna samen de specifieke blokkade identificeren." },
      { id: "c", text: "Zeggen dat niet iedereen goed is in talen, hij is beter in exacte vakken'Niet iedereen is goed in talen. Jij bent beter in exacte vakken.'", isCorrect: false, feedback: "Nee. Dit bevestigt de fixed mindset: 'je bent niet goed in talen en dat verandert niet.' Het sluit de deur naar groei." },
    ],
    explanation: "Het woord 'NOG' is het krachtigste woord in growth mindset. Het impliceert: dit is tijdelijk, je bent in ontwikkeling. Daarna concreet maken: WAT lukte wel, WAAR liep het vast?",
    research: "Dweck, C. (2006). Mindset: The New Psychology of Success",
  },
  {
    id: "au_18", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 18,
    question: "Hidde (9) doet mee aan een schaaktoernooi en verliest zijn eerste vier partijen. Hij is ontroostbaar. Je zegt: 'Het geeft niet, je bent pas 9.' Wat is het probleem?",
    options: [
      { id: "a", text: "Niets mis mee, je relativeert op een gezonde en nuchtere manier", isCorrect: false, feedback: "Nee. 'Het geeft niet' wuift zijn emotie weg. 'Je bent pas 9' impliceert dat leeftijd zijn ervaring ongeldig maakt." },
      { id: "b", text: "Je bagatelliseert zijn teleurstelling, beter: eerst valideren", isCorrect: true, feedback: "Correct! Beter: 'Vier keer verliezen voelt zwaar. Ik zag dat je bij de derde partij een andere opening probeerde — vertel, wat ontdekte je?' Validatie + procesgerichte focus." },
      { id: "c", text: "Je had beter niets kunnen zeggen en hem gewoon even met rust laten", isCorrect: false, feedback: "Zwijgen is beter dan bagatelliseren, maar actieve validatie + procesgerichte vraag is het krachtigst." },
    ],
    explanation: "Laat het kind de teleurstelling VOELEN (validatie), en richt dan de blik op wat het kind kan LEREN (proces). Het doel is niet het verdriet wegpoetsen maar er iets waardevols mee doen.",
    research: "Dweck, C. (2006). Mindset: The New Psychology of Success",
  },
  // MODULE 4: AUTONOMIE ONDER DRUK (Vragen 19-24)
  {
    id: "au_19", skill: "Autonomie", type: "quiz", difficulty: "basis", order: 19,
    question: "Guus (3) weigert in zijn autostoel te gaan zitten. Je zegt: 'Je gaat erin!' Hij schreeuwt: 'Nee!' Jullie staan al 5 minuten bij de auto. Hoe doorbreek je dit?",
    context: "Power struggles: een machtsstrijd waarin niemand wint.",
    options: [
      { id: "a", text: "Hem er met kracht inzetten want veiligheid is niet onderhandelbaar", isCorrect: false, feedback: "De grens (autostoel) is terecht, maar de methode (kracht) escaleert de machtsstrijd en beschadigt het vertrouwen." },
      { id: "b", text: "Even wachten tot hij gekalmeerd is, dan lukt het vast wel vanzelf", isCorrect: false, feedback: "Soms werkt wachten, maar zonder keuze-aanbod kan het eindeloos duren. Keuze bieden geeft richting aan de oplossing." },
      { id: "c", text: "De grens houden maar keuzes bieden: zelf klimmen of optillen?'Je gaat in de autostoel. Wil je zelf klimmen of zal papa je optillen? En welk liedje zetten we aan?'", isCorrect: true, feedback: "Correct! De grens staat vast (autostoel), maar je biedt autonomie BINNEN die grens: hoe erin, en welke muziek. Dit doorbreekt de machtsstrijd." },
    ],
    explanation: "Keuze-illusie: het kind kiest BINNEN jouw niet-onderhandelbare grens. 'Zelf klimmen of papa tilt?' geeft een gevoel van controle terwijl het resultaat vaststaat.",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  {
    id: "au_20", skill: "Autonomie", type: "quiz", difficulty: "basis", order: 20,
    question: "Bente (6) weigert haar kamer op te ruimen. Je dreigt: 'Als je niet opruimt, geen televisie vanavond!' Wat doet dit met haar autonomie?",
    options: [
      { id: "a", text: "Je ondermijnt haar intrinsieke motivatie door angst voor straf", isCorrect: true, feedback: "Correct! Dreigen met niet-gerelateerde straffen creëert extrinsieke motivatie. Beter: 'Wil je beginnen met de boeken of de knuffels?'" },
      { id: "b", text: "Het werkt, ze ruimt op en leert dat er consequenties zijn aan gedrag", isCorrect: false, feedback: "Nee. Dit is een DREIGING met een niet-gerelateerde straf. Ze ruimt misschien op uit angst, niet uit eigenaarschap." },
      { id: "c", text: "Prima zolang je de consequentie ook daadwerkelijk altijd uitvoert", isCorrect: false, feedback: "Nee. Consistentie in dreigen is niet de oplossing. Het probleem is het dreigen zelf: het ondermijnt eigenaarschap." },
    ],
    explanation: "Dreigen creëert gehoorzaamheid uit angst, niet uit intrinsieke motivatie. Beter: bied keuzevrijheid BINNEN de grens en gebruik natuurlijke consequenties (geen opgeruimde kamer = je vindt je spullen niet terug).",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  {
    id: "au_21", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 21,
    question: "Sven (8) moet zijn tanden poetsen voor bedtijd maar wil eerst zijn boek uitlezen. Hij protesteert luid. Hoe geef je autonomie zonder de grens te verliezen?",
    options: [
      { id: "a", text: "Hem zijn boek laten uitlezen en daarna laten poetsen vanavond'Vooruit, lees maar uit, dan poets je daarna' — je wilt geen ruzie voor bedtijd", isCorrect: false, feedback: "Nee. Dit leert hem: protesteren verschuift de grens. Morgen protesteert hij weer, en overmorgen ook." },
      { id: "b", text: "Dreigen dat hij morgen niet meer mag lezen als hij nu niet poetst'Als je nu niet poetst, lees je morgen niet' — consequentie stellen", isCorrect: false, feedback: "Nee. Een niet-gerelateerde dreiging ondermijnt autonomie en vergiftigt het ritueel van lezen voor het slapen." },
      { id: "c", text: "Grens houden op poetsen maar hem laten kiezen wanneer'Je moet voor bedtijd poetsen. Wil je nu poetsen en dan nog 5 minuten lezen, of eerst het hoofdstuk afmaken en dan meteen poetsen? Jij kiest.'", isCorrect: true, feedback: "Perfect! De grens (poetsen voor bedtijd) staat vast. Hij kiest de VOLGORDE. Dit is eigenaarschap binnen een kader." },
    ],
    explanation: "Autonomie onder druk: het kind kiest WANNEER en in welke VOLGORDE, maar het WAT staat vast. Dit verschil tussen eigenaarschap en gehoorzaamheid is fundamenteel voor intrinsieke motivatie.",
    research: "Koestner, R. et al. (1984). Setting Limits on Children's Behavior. Journal of Personality",
  },
  {
    id: "au_22", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 22,
    question: "Yara (11) heeft afgesproken dat ze elke dag om 17:00 begint met huiswerk. Het is 17:30 en ze zit nog op haar kamer te tekenen. Jullie hebben dit samen afgesproken. Wat doe je?",
    options: [
      { id: "a", text: "Je herinnert haar eraan en gaat erbij zitten zodat ze direct begint", isCorrect: false, feedback: "Nee. Je hebt samen een afspraak gemaakt. Door haar eraan te herinneren en erbij te zitten ondermijn je het systeem: 'papa bewaakt mijn afspraken.'" },
      { id: "b", text: "Je verschuift de afspraak naar 18:00, misschien was 17:00 te vroeg", isCorrect: false, feedback: "Nee. Eenzijdig aanpassen ondermijnt het hele systeem. Als ze de tijd wil wijzigen, bespreek het samen — maar niet als vluchtroute." },
      { id: "c", text: "De natuurlijke consequentie laten komen en achteraf bespreken", isCorrect: true, feedback: "Correct! Ze heeft eigenaarschap over de afspraak. Nu mag ze ook eigenaar zijn van de consequentie. Achteraf evalueren: 'Hoe ging het? Wil je de afspraak aanpassen?'" },
    ],
    explanation: "Eigenaarschap = ook eigenaar zijn van consequenties. Maak samen afspraken, geef tools (klok, timer), en laat het kind de gevolgen ervaren. Evalueer achteraf SAMEN: werkt de afspraak nog?",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  {
    id: "au_23", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 23,
    question: "Ties (12) wil zijn haar laten verven in een opvallende kleur. Je vindt het niks. Wat zegt Self-Determination Theory over deze situatie?",
    options: [
      { id: "a", text: "Op 12 jaar is dit niet gepast, jij bepaalt nog hoe hij eruitziet", isCorrect: false, feedback: "Nee. Op 12 jaar is uiterlijk een belangrijk domein voor identiteitsontwikkeling. Haarkleur is een onschuldige expressie van autonomie." },
      { id: "b", text: "Zelfexpressie respecteren bevordert autonomie op deze leeftijd", isCorrect: true, feedback: "Correct! Autonomie-ondersteuning = het perspectief van het kind serieus nemen, ook bij keuzes die niet de jouwe zouden zijn. Haarkleur is onschuldig en omkeerbaar." },
      { id: "c", text: "Hem laten doen wat hij wil zonder er verder iets van te zeggen", isCorrect: false, feedback: "Je mag je mening delen, zolang je de uiteindelijke keuze bij hem laat. 'Ik zou het zelf niet kiezen, maar het is jouw haar' is autonomie-ondersteuning met eerlijkheid." },
    ],
    explanation: "SDT: autonomie-ondersteuning = het perspectief erkennen, uitleg geven bij grenzen, en keuzevrijheid bieden waar het veilig kan. Bij onschuldige keuzes (haar, kleding, muziek) is het bijna altijd veilig.",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  {
    id: "au_24", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 24,
    question: "Rens (7) wil absoluut niet naar de tandarts. Hij is panisch. Je vindt tandartsbezoek essentieel. Hoe combineer je een noodzakelijke grens met autonomie?",
    options: [
      { id: "a", text: "Grens houden maar autonomie bieden: hij kiest wanneer en hoe", isCorrect: true, feedback: "Perfect! Niet-onderhandelbaar WAT + autonomie in HOE. Erken zijn angst, bied keuzes (welke dag, mag hij muziek mee), en geef uitleg waarom het moet." },
      { id: "b", text: "Stoppen met de tandarts als hij zo bang is, je forceert het niet", isCorrect: false, feedback: "Nee. Gezondheid is niet-onderhandelbaar. Autonomie betekent niet dat een 7-jarige medische beslissingen neemt." },
      { id: "c", text: "Zeggen dat hij naar de tandarts moet, geen discussie, punt uit'Je MOET naar de tandarts, punt.' Sommige dingen zijn niet onderhandelbaar", isCorrect: false, feedback: "De grens (tandarts) is terecht, maar 'punt' ondermijnt zijn autonomie en negeert zijn angst volledig." },
    ],
    explanation: "Bij niet-onderhandelbare grenzen (gezondheid, veiligheid) blijft de grens staan. Maar je kunt altijd autonomie bieden BINNEN die grens: timing, manier, en het serieus nemen van gevoelens.",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  // MODULE 5: KINDEREN KUNNEN MEER DAN JE DENKT (Vragen 25-30)
  {
    id: "au_25", skill: "Autonomie", type: "quiz", difficulty: "basis", order: 25,
    question: "Twan (6) wil helpen met het avondeten. Je denkt: hij is te klein, het wordt een chaos. Wat toont onderzoek over wat kinderen aankunnen?",
    context: "Kinderen kunnen vaak meer dan ouders denken. Onderschatting is de grootste rem op autonomie.",
    options: [
      { id: "a", text: "Je hebt gelijk, laat hem aan tafel wachten tot het eten klaar is", isCorrect: false, feedback: "Nee. Door hem buiten te sluiten ondermijn je zijn competentiegevoel. Een 6-jarige KAN groenten wassen, roeren, tafel dekken." },
      { id: "b", text: "Kinderen worden onderschat, geef taken op zijn niveau", isCorrect: true, feedback: "Correct! Onderzoek toont dat ouders de capaciteiten van kinderen stelselmatig onderschatten. 'Te jong' is vaak 'te ongemakkelijk voor de ouder'." },
      { id: "c", text: "Hij mag helpen als hij wat ouder is en het allemaal veiliger kan", isCorrect: false, feedback: "Nee. Met leeftijdsgeschikte taken (wassen, roeren, tellen) kan een 6-jarige veilig meehelpen. Wachten ontneemt hem oefenkansen." },
    ],
    explanation: "De grootste rem op autonomie is niet het kind maar de ouder. 'Te jong', 'te gevaarlijk', 'te rommelig' zijn vaak reflecties van ons eigen ongemak, niet van het kind zijn capaciteit.",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  {
    id: "au_26", skill: "Autonomie", type: "quiz", difficulty: "basis", order: 26,
    question: "Pip (9) wil zelf naar de supermarkt om het brood te halen. De winkel is 200 meter verderop. Je buurvrouw vindt het 'onverantwoord'. Hoe ga je hiermee om?",
    options: [
      { id: "a", text: "Je luistert naar je buurvrouw, andere ouders weten het meestal beter", isCorrect: false, feedback: "Nee. Sociale druk van andere ouders is een van de grootste belemmeringen voor gezonde autonomie. Jij kent je kind en je buurt." },
      { id: "b", text: "Je beoordeelt afstand, veiligheid en zijn capaciteit zelf", isCorrect: true, feedback: "Correct! Autonomie-beslissingen baseer je op feiten (afstand, veiligheid, capaciteit kind), niet op de angst van anderen. 200 meter in een veilige buurt is leeftijdsgeschikt." },
      { id: "c", text: "Je gaat stiekem op afstand mee om hem toch in de gaten te houden", isCorrect: false, feedback: "Nee. Stiekem volgen ondermijnt het vertrouwen als hij erachter komt, en het geeft hem een vals gevoel van zelfstandigheid." },
    ],
    explanation: "Sociale druk is een grote vijand van leeftijdsgeschikte autonomie. De vraag is niet 'wat vinden andere ouders?' maar 'is het risico proportioneel voor dit kind in deze situatie?'",
    research: "Skenazy, L. (2009). Free-Range Kids. Jossey-Bass",
  },
  {
    id: "au_27", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 27,
    question: "Julia (11) wil zelf kiezen welke middelbare school ze bezoekt. Ze heeft een voorkeur die verschilt van de jouwe. Hoe ga je hiermee om?",
    options: [
      { id: "a", text: "Jij beslist als ouder, je hebt meer levenservaring en overzicht", isCorrect: false, feedback: "Nee. Op 11 jaar is schoolkeuze een kans voor autonomie. Jouw ervaring is waardevol als INPUT, niet als BESLUIT." },
      { id: "b", text: "Haar volledig laten beslissen want het is uiteindelijk haar toekomst", isCorrect: false, feedback: "Nee. Volledige vrijheid bij een complexe beslissing is overweldigend voor een 11-jarige. Samen kiezen is de middenweg." },
      { id: "c", text: "Samen informatie verzamelen en haar mening serieus meewegen", isCorrect: true, feedback: "Correct! Het samen verkennen is het proces. Haar voorkeur serieus nemen is autonomie-ondersteuning. Het hoeft geen 100% haar keuze te zijn, maar wel 100% serieus genomen." },
    ],
    explanation: "Bij grote beslissingen verschuift de rol van ouder: niet dictator (ik beslis), niet afzijdig (jij beslist), maar coach (we verkennen samen en ik neem je perspectief serieus). Dit bouwt beslissingsvaardigheid op.",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  {
    id: "au_28", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 28,
    question: "Evi (13) wil met haar eigen geld een dure jas kopen die jij lelijk vindt. Ze heeft er maanden voor gespaard. Je aarzelt. Wat is het autonomie-principe?",
    options: [
      { id: "a", text: "Het is haar geld maar jij hebt als ouder het laatste woord erin", isCorrect: false, feedback: "Nee. Vetorecht op een onschuldige aankoop ondermijnt het hele concept van 'eigen geld'. Als je haar spaargeld beheert, is het niet echt van haar." },
      { id: "b", text: "Samen iets uitzoeken wat jullie allebei mooi vinden als compromis", isCorrect: false, feedback: "Nee. Dit stuurt haar subtiel richting jouw smaak. Het is HAAR geld en HAAR keuze. Dat respecteren is autonomie." },
      { id: "c", text: "Haar geld, haar keuze, ook als je het er niet mee eens bent", isCorrect: true, feedback: "Correct! Als het haar geld is en de aankoop is onschuldig, dan is het haar keuze. Misschien heeft ze spijt — en dat is een waardevolle les." },
    ],
    explanation: "Financiele autonomie: als je je kind leert sparen en dan hun keuze overrulet, ondermijn je alles wat je hebt opgebouwd. De les van een 'slechte' aankoop is waardevoller dan jouw controle.",
    research: "Vygotsky, L.S. (1978). Mind in Society: The Development of Higher Psychological Processes",
  },
  {
    id: "au_29", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 29,
    question: "Tessa (14) heeft zelf onderzocht dat ze veganistisch wil eten. Ze heeft recepten opgezocht en een weekmenu gemaakt. Jij vindt het onzin en maakt je zorgen om haar gezondheid. Wat is de SDT-benadering?",
    options: [
      { id: "a", text: "Je verbiedt het, een 14-jarige kan zo\'n dieet niet goed volhouden'n gezondheidsbelissing niet nemen", isCorrect: false, feedback: "Nee. Ze heeft initiatief en verantwoordelijkheid getoond (onderzoek, recepten, weekmenu). Dit is juist het tegenovergestelde van impulsief — dit is doordacht." },
      { id: "b", text: "Haar plan serieus nemen en samen gezondheid monitoren", isCorrect: true, feedback: "Correct! Ze toont competentie (onderzoek), autonomie (eigen keuze) EN ze betrekt jou (weekmenu delen). Actieve ondersteuning + gezondheidscheck is de SDT-benadering." },
      { id: "c", text: "Je laat haar begaan zonder bemoeienis want het is haar eigen lichaam", isCorrect: false, feedback: "Nee. Op 14 jaar heeft ze nog begeleidende steun nodig bij voedingskeuzes. Actieve ondersteuning is anders dan totale vrijheid." },
    ],
    explanation: "SDT: autonomie-ondersteuning = het perspectief serieus nemen, rationale bieden voor zorgen, en SAMENWERKEN aan een oplossing. Haar initiatief waarderen EN je zorgen bespreken is de beste combinatie.",
    research: "Soenens, B. & Vansteenkiste, M. (2010). A Theoretical Upgrade of the Concept of Parental Psychological Control. Developmental Review",
  },
  {
    id: "au_30", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 30,
    question: "Lynn (16) wil in de zomervakantie drie weken alleen door Europa reizen met een interrailpas. Ze heeft het grondig gepland. Je bent trots maar ook bang. Wat is leeftijdsgeschikte autonomie?",
    options: [
      { id: "a", text: "Te gevaarlijk, ze mag pas alleen reizen als ze minstens 18 jaar is", isCorrect: false, feedback: "Nee. Op 16 jaar is ze over twee jaar volwassen. Als je haar nu niet laat oefenen met zelfstandigheid, hoe bereidt ze zich dan voor?" },
      { id: "b", text: "Volledige vrijheid geven want ze is bijna volwassen op die leeftijd", isCorrect: false, feedback: "Nee. Zelfs op 16 is er een begeleidende rol: veiligheidsnet, noodplannen, bereikbaarheid. Vertrouwen met kaders, niet zonder kaders." },
      { id: "c", text: "Haar plan serieus nemen en samen veiligheidsafspraken maken", isCorrect: true, feedback: "Correct! Op 16 jaar: haar planning beloont je met je vertrouwen. Samen veiligheidsafspraken maken is scaffolding op zijn hoogste niveau — voorbereiding op volledige zelfstandigheid." },
    ],
    explanation: "Autonomie groeit mee met leeftijd: 6j = zelf boodschap halen, 12j = alleen naar een stad fietsen, 16j = zelfstandig reizen met afspraken. Op elke leeftijd: vertrouwen tonen + minimale maar duidelijke kaders.",
    research: "Soenens, B. & Vansteenkiste, M. (2010). A Theoretical Upgrade of the Concept of Parental Psychological Control. Developmental Review",
  },
];
export const HERSTEL_TRAINING: TrainingItem[] = [
  // MODULE 1: BREUKEN ZIJN NORMAAL (Vragen 1-6)
  {
    id: "hr_1", skill: "Herstel", type: "quiz", difficulty: "basis", order: 1,
    question: "Je hebt Casper (7) afgesnauwd toen hij per ongeluk verf op de bank morste. Hij trekt zich terug en speelt stil in een hoek. Je denkt: 'Straks is hij het vergeten.' Klopt dit?",
    context: "Ed Tronick's onderzoek toont: kinderen registreren elke breuk in de verbinding, ook de kleine.",
    options: [
      { id: "a", text: "Ja, kinderen zijn veerkrachtig en vergeten dit soort momenten snel", isCorrect: false, feedback: "Nee. Hij vergeet het INCIDENT misschien, maar het GEVOEL (onveiligheid, afwijzing) wordt opgeslagen in het impliciete geheugen." },
      { id: "b", text: "Het hangt ervan af hoe erg je snauwd, een kleine opmerking doet geen kwaad", isCorrect: false, feedback: "Nee. Het gaat niet om de ernst maar om het HERSTEL. Zelfs kleine breuken tellen als ze onhersteld blijven." },
      { id: "c", text: "Nee, hij registreert de breuk en wacht op herstel van jouw kant", isCorrect: true, feedback: "Correct. Zijn terugtrekking is geen 'vergeten' maar een beschermingsreactie. Hij test: is papa er nog voor mij na dit moment?" },
    ],
    explanation: "Tronick's onderzoek: slechts 30% van ouder-kind interacties verloopt soepel. Het verschil tussen veilige en onveilige hechting zit niet in het vermijden van breuken maar in het HERSTELLEN ervan.",
    research: "Tronick, E. (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children",
  },
  {
    id: "hr_2", skill: "Herstel", type: "quiz", difficulty: "basis", order: 2,
    question: "Onderzoek toont dat 70% van ouder-kind interacties 'mismatch' is — niet soepel verloopt. Wat betekent dit voor jou als vader?",
    options: [
      { id: "a", text: "Breuken zijn normaal, het HERSTEL maakt het verschil", isCorrect: true, feedback: "Correct! De rupture-repair cyclus IS de motor van veilige hechting. Kinderen leren: relaties overleven conflicten." },
      { id: "b", text: "Je bent een slechte vader als het zo vaak misgaat thuis", isCorrect: false, feedback: "Nee! 70% mismatch is de NORM, zelfs bij de allerbeste ouders. Dit is geen falen maar biologie." },
      { id: "c", text: "Je moet harder werken om die 70% naar beneden te brengen", isCorrect: false, feedback: "Nee. Investeer je energie in HERSTEL, niet in het onmogelijke doel van perfecte afstemming." },
    ],
    explanation: "De rupture-repair cyclus leert kinderen: conflicten zijn tijdelijk, relaties zijn sterker dan fouten, en mensen komen terug. Dit is de kern van veilige hechting.",
    research: "Tronick, E. (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children",
  },
  {
    id: "hr_3", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 3,
    question: "Wouter (5) heeft een tekening voor je gemaakt. Je was afgeleid en zei: 'Leg maar neer, ik kijk straks.' Dat 'straks' kwam nooit. Twee dagen later verscheurt hij een tekening die hij voor je maakte. Wat is het verband?",
    options: [
      { id: "a", text: "Er is geen verband, hij is gewoon boos over iets heel anders vandaag", isCorrect: false, feedback: "Nee. Kinderen uiten onherstelde breuken vaak indirect. Het verscheuren is een uiting van de pijn van het genegeerd worden." },
      { id: "b", text: "Hij is teleurgesteld in zijn eigen tekening, het heeft niets met jou te maken", isCorrect: false, feedback: "Nee. De timing en het patroon wijzen op de onherstelde breuk. Hij veroordeelt zijn eigen werk omdat hij voelde dat het niet gewaardeerd werd." },
      { id: "c", text: "De onherstelde breuk stapelt op, zijn gedrag is een signaal", isCorrect: true, feedback: "Correct. Onherstelde breuken slaan op als gevoelens van 'ik ben niet belangrijk genoeg'. Hij uit dit indirect." },
    ],
    explanation: "Onherstelde breuken stapelen op in het impliciete geheugen. Kinderen uiten ze indirect: teruggetrokkenheid, boosheid op ogenschijnlijk kleine dingen, of zelfafwijzing.",
    research: "Bowlby, J. (1988). A Secure Base: Parent-Child Attachment and Healthy Human Development",
  },
  {
    id: "hr_4", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 4,
    question: "Je hebt Iris (10) uitgelachen om een fout antwoord tijdens het helpen met huiswerk. Ze wordt rood en zwijgt. Het is nu een dag later. Wat is het effect als je dit niet herstelt?",
    options: [
      { id: "a", text: "Ze vergeet het snel genoeg, het was maar een klein lachje tussendoor", isCorrect: false, feedback: "Nee. Uitgelachen worden door een hechtingsfiguur raakt het zelfbeeld diep. Het gevoel (schaamte) wordt opgeslagen, ook als het incident vervaagt." },
      { id: "b", text: "Het maakt niet uit zolang je verder maar een goede vader bent voor haar", isCorrect: false, feedback: "Nee. 'Verder goed zijn' compenseert niet voor specifieke onherstelde breuken. Ze onthouden het gat, niet het gemiddelde." },
      { id: "c", text: "Onherstelde breuken vormen haar verwachting van relaties", isCorrect: true, feedback: "Correct. Elke onherstelde breuk bouwt aan het intern werkmodel: 'in relaties word je gekwetst en dan gebeurt er niets.' Dit draagt ze mee." },
    ],
    explanation: "Onherstelde breuken vormen het intern werkmodel van relaties: 'als iemand me pijn doet, komt er geen erkenning.' Dit beinvloedt alle toekomstige relaties.",
    research: "Bowlby, J. (1988). A Secure Base: Parent-Child Attachment and Healthy Human Development",
  },
  {
    id: "hr_5", skill: "Herstel", type: "quiz", difficulty: "expert", order: 5,
    question: "Een vader zegt: 'Bij ons thuis is het altijd harmonieus. We hebben nooit conflicten met de kinderen.' Wat zegt hechtingsonderzoek over dit gezin?",
    options: [
      { id: "a", text: "Waarschuwingssignaal: het kind onderdrukt mogelijk emoties", isCorrect: true, feedback: "Correct. 'Nooit conflict' is alarmerend. Het kind mist de cruciale ervaring dat conflicten HERSTELD kunnen worden." },
      { id: "b", text: "Dit is het ideaal, geen breuken betekent optimale hechting", isCorrect: false, feedback: "Nee. Afwezigheid van zichtbaar conflict kan betekenen dat het kind geleerd heeft dat negatieve emoties niet veilig zijn." },
      { id: "c", text: "Sommige gezinnen zijn nu eenmaal harmonieuzer dan andere", isCorrect: false, feedback: "Minder conflict kan, maar 'nooit' is onrealistisch en wijst op onderdrukking. Gezonde relaties HEBBEN breuken." },
    ],
    explanation: "De rupture-repair cyclus is NODIG voor veilige hechting. Een kind dat nooit conflict ervaart, leert nooit dat relaties tegen een stoot kunnen. Dat is geen harmonie maar vermijding.",
    research: "Tronick, E. (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children",
  },
  {
    id: "hr_6", skill: "Herstel", type: "quiz", difficulty: "expert", order: 6,
    question: "Je hebt Pepijn (4) ruw bij zijn arm gepakt toen hij de straat op wilde rennen. Hij schrok en huilde. Je partner zegt: 'Zeg sorry.' Je denkt: 'Maar ik beschermde hem!' Wie heeft er een punt?",
    options: [
      { id: "a", text: "Allebei: bescherming was nodig EN de schrik verdient erkenning'Ik pakte je stevig omdat ik bang was dat je op de weg zou komen. Dat was eng he?'", isCorrect: true, feedback: "Correct! Je kunt de actie verantwoorden EN het effect erkennen. 'Ik moest je tegenhouden. Ik zag dat je schrok. Gaat het?' Dit is herstel zonder schuld." },
      { id: "b", text: "Jij hebt gelijk, je beschermde hem en hoeft geen sorry te zeggen", isCorrect: false, feedback: "De actie (bescherming) was nodig. Maar het EFFECT (schrik, pijn) verdient erkenning. Je kunt allebei waar maken." },
      { id: "c", text: "Je partner heeft gelijk, je had hem veel zachter moeten tegenhouden", isCorrect: false, feedback: "In een noodsituatie reageer je reflexmatig. De vraag is niet of je anders had moeten handelen maar of je het effect erkent." },
    ],
    explanation: "Herstel geldt ook bij noodzakelijke acties. De intentie was bescherming, maar het effect was schrik. Beide erkennen is volwassen: 'Ik moest dit doen EN ik zie dat het je liet schrikken.'",
    research: "Gottman, J. (2011). Raising An Emotionally Intelligent Child",
  },
  // MODULE 2: DE 5-STAPS VERONTSCHULDIGING (Vragen 7-12)
  {
    id: "hr_7", skill: "Herstel", type: "quiz", difficulty: "basis", order: 7,
    question: "Je hebt Fleur (9) onterecht de schuld gegeven van een gebroken vaas (het was de kat). Wat is de allereerste stap van effectief herstel?",
    context: "De 5 stappen: (1) Erken de breuk, (2) Neem verantwoordelijkheid, (3) Toon oprechte spijt, (4) Vraag wat nodig is, (5) Verander concreet gedrag.",
    options: [
      { id: "a", text: "Een cadeau kopen om het hele incident goed te maken", isCorrect: false, feedback: "Nee. Zonder eerst de fout te erkennen voelt een cadeau als afkopen, niet als herstel." },
      { id: "b", text: "Erkennen dat je een fout hebt gemaakt tegenover haar'Ik heb je onterecht de schuld gegeven'", isCorrect: true, feedback: "Correct! Stap 1: ERKEN de breuk expliciet. Zonder erkenning is geen enkel vervolg geloofwaardig." },
      { id: "c", text: "Uitleggen dat het er sterk op leek alsof zij het had gedaan", isCorrect: false, feedback: "Nee. Uitleggen is verdedigen, niet herstellen. De reden WAAROM je het fout had, is nu niet relevant." },
    ],
    explanation: "De eerste stap is altijd erkenning. Zonder 'ik zag het fout' of 'ik heb je onrecht aangedaan' is alles wat daarna komt hol.",
    research: "Siegel, D. & Bryson, T. (2020). The Power of Showing Up",
  },
  {
    id: "hr_8", skill: "Herstel", type: "quiz", difficulty: "basis", order: 8,
    question: "Je zegt tegen Stijn (8): 'Sorry dat je je gekwetst voelt.' Is dit effectief herstel?",
    options: [
      { id: "a", text: "Nee, dit is een schijnexcuus zonder eigen verantwoordelijkheid", isCorrect: true, feedback: "Correct! Echt herstel: 'Het spijt me dat IK tegen je schreeuwde.' Niet: 'sorry dat jij je rot voelt.' Het verschil is cruciaal." },
      { id: "b", text: "Ja, je erkent zijn gevoel en je zegt sorry, dat is goed genoeg", isCorrect: false, feedback: "Nee. 'Sorry dat JIJ je gekwetst voelt' legt de verantwoordelijkheid bij HEM. Het ontwijkt wat JIJ deed." },
      { id: "c", text: "Het is in ieder geval beter dan helemaal niets erover zeggen", isCorrect: false, feedback: "Nauwelijks. Een schijnexcuus kan zelfs schadelijker zijn dan stilte, want het kind voelt de onoprechtheid." },
    ],
    explanation: "Verantwoordelijkheid nemen = benoemen wat JIJ deed. 'Sorry dat ik schreeuwde' vs 'sorry dat je je rot voelt.' Het eerste is herstel, het tweede is ontwijking.",
    research: "Siegel, D. & Bryson, T. (2020). The Power of Showing Up",
  },
  {
    id: "hr_9", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 9,
    question: "Je hebt Roos (11) gekleineerd waar haar broertje bij was. Je zegt: 'Sorry, maar je provoceerde me ook.' Wat is er mis met deze zin?",
    options: [
      { id: "a", text: "Niets mis mee, je legt uit waarom het gebeurde en dat is eerlijk", isCorrect: false, feedback: "Nee. 'Sorry MAAR...' is geen sorry. Het woordje 'maar' wist alles wat ervoor kwam." },
      { id: "b", text: "Het excuus mist: de context veranderen herstelt de breuk niet'maar' verschuift de schuld naar haar — effectief herstel bevat geen 'maar', geen 'alleen omdat', geen 'jij deed ook'", isCorrect: true, feedback: "Correct! Zuiver herstel: 'Ik heb je gekleineerd waar je broertje bij was. Dat was fout van mij.' Punt. De reden is een apart gesprek." },
      { id: "c", text: "Het is goed genoeg, ze begrijpt vast wel dat je er spijt van hebt", isCorrect: false, feedback: "Nee. Ze leert: 'als papa me kleineert, is het deels mijn schuld.' Dit is schadelijk voor haar zelfbeeld." },
    ],
    explanation: "De 'maar' in een verontschuldiging is gif. Het verandert 'ik neem verantwoordelijkheid' in 'ik geef jou de schuld'. Zuiver herstel heeft geen bijzin nodig.",
    research: "Gottman, J. (2011). Raising An Emotionally Intelligent Child",
  },
  {
    id: "hr_10", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 10,
    question: "Je hebt Lars (13) gecorrigeerd waar zijn teamgenoten bij waren na een verloren wedstrijd. Je weet dat je fout zat. Welke stap van herstel vinden de meeste vaders het moeilijkst?",
    options: [
      { id: "a", text: "Oprechte spijt tonen, kwetsbaarheid voelt oncomfortabel", isCorrect: true, feedback: "Correct! 'Het doet me pijn dat ik je zo te schande maakte' is krachtiger dan 'dat was fout'. Het eerste toont GEVOEL, het tweede is rationeel." },
      { id: "b", text: "Erkennen dat er een breuk was, vaders zien het vaak niet eens", isCorrect: false, feedback: "Dit komt voor, maar in dit geval WEET je dat je fout zat. De erkenning is er al." },
      { id: "c", text: "Concreet gedrag veranderen, vaders vergeten vaak de opvolging", isCorrect: false, feedback: "Opvolging is belangrijk, maar het echte struikelblok is kwetsbaarheid: oprechte emotie tonen in het herstelgesprek." },
    ],
    explanation: "Oprechte spijt (stap 3) is voor veel vaders het moeilijkst. 'Ik voel me rot over wat ik deed' is krachtiger dan 'ik had dat niet moeten doen.' Het eerste is emotie, het tweede is analyse.",
    research: "Siegel, D. & Bryson, T. (2020). The Power of Showing Up",
  },
  {
    id: "hr_11", skill: "Herstel", type: "quiz", difficulty: "expert", order: 11,
    question: "Je hebt Bram (5) bang gemaakt door keihard tegen de muur te slaan uit frustratie. Hij kromp ineen. Wat is een passende laatste stap van herstel (concreet anders doen)?",
    options: [
      { id: "a", text: "Een speelgoed kopen als compensatie voor wat er gebeurd is", isCorrect: false, feedback: "Nee. Materieel compenseren is afkopen. Het verandert niets aan het patroon." },
      { id: "b", text: "Samen een plan maken voor als papa weer boos wordt'Als papa boos wordt, gaat papa even naar buiten lopen. En als ik het toch niet goed doe, mag jij het me vertellen.'", isCorrect: true, feedback: "Correct! Concreet anders doen: een nieuw gedragsplan PLUS zijn stem erin betrekken. Hij wordt deel van de oplossing." },
      { id: "c", text: "Beloven dat het nooit meer zal gebeuren en het daarbij laten", isCorrect: false, feedback: "Nee. Eerlijker: 'Ik ga mijn best doen het anders te doen. Als het toch gebeurt, zal ik het altijd herstellen.' Realisme > loze belofte." },
    ],
    explanation: "De laatste stap is niet compenseren maar VERANDEREN: (1) concreet nieuw gedrag benoemen, (2) het kind een stem geven in de oplossing, (3) realistisch zijn over terugval.",
    research: "Siegel, D. & Bryson, T. (2020). The Power of Showing Up",
  },
  {
    id: "hr_12", skill: "Herstel", type: "quiz", difficulty: "expert", order: 12,
    question: "Je hebt de hele week 's avonds op je laptop gewerkt en je kinderen genegeerd. Het was niet een incident maar een PATROON. Hoe herstel je een patroon anders dan een enkel incident?",
    options: [
      { id: "a", text: "Het patroon expliciet benoemen en erkennen naar je kind'Papa was deze week elke avond op zijn laptop. Dat was niet jullie schuld. Ik ga het anders doen: laptop dicht na 20:00.'", isCorrect: true, feedback: "Correct! Bij patronen benoem je het PATROON, neem je verantwoordelijkheid, ontkracht je zelfbeschuldiging bij het kind, en noem je een concrete verandering." },
      { id: "b", text: "Zaterdag een groot uitje plannen om het goed te maken met hem", isCorrect: false, feedback: "Nee. Een uitje zonder het patroon te benoemen is compensatie, niet herstel. Ze onthouden het negeren, niet het uitje." },
      { id: "c", text: "Het laten gaan, volgende week gewoon beter je best doen is genoeg", isCorrect: false, feedback: "Nee. Kinderen geven zichzelf de schuld van jouw afwezigheid: 'Papa wil niet bij me zijn.' Dat moet je expliciet ontkrachten." },
    ],
    explanation: "Bij patronen is het cruciaal om (1) het patroon te benoemen, niet elk incident apart, (2) expliciet te zeggen dat het NIET hun schuld is, en (3) concreet te benoemen wat je gaat veranderen.",
    research: "Siegel, D. & Bryson, T. (2020). The Power of Showing Up",
  },
  // MODULE 3: TIMING EN VERGEVING (Vragen 13-18)
  {
    id: "hr_13", skill: "Herstel", type: "quiz", difficulty: "basis", order: 13,
    question: "Je hebt sorry gezegd tegen Jelle (9). Hij zegt: 'Ik geloof je niet.' Je voelt je gekwetst. Wat is de volwassen reactie?",
    options: [
      { id: "a", text: "Zeggen: ik ga het laten zien door mijn gedrag voortaan'Ik begrijp dat je me niet gelooft. Ik ga het laten zien door mijn gedrag.' — vergeving is zijn keuze, niet jouw recht", isCorrect: true, feedback: "Correct! Herstel is jouw verantwoordelijkheid. Vergeving is zijn proces. Als woorden niet meer genoeg zijn, moeten daden het overnemen." },
      { id: "b", text: "Zeggen: ik heb toch sorry gezegd, wat wil je dan nog meer?'Ik heb toch sorry gezegd? Wat wil je nog meer?' — je voelt je oneerlijk behandeld", isCorrect: false, feedback: "Nee. Sorry zeggen geeft je geen RECHT op vergeving. Zijn wantrouwen is feedback, niet ondankbaarheid." },
      { id: "c", text: "Het gesprek stoppen want hij is nog niet klaar om te vergeven", isCorrect: false, feedback: "Stoppen kan, maar zonder de boodschap 'ik ga het laten zien' laat je hem zonder hoop." },
    ],
    explanation: "Herstel en vergeving zijn twee verschillende processen. Herstel is jouw taak (onvoorwaardelijk). Vergeving is zijn keuze (op zijn tempo). Die twee door elkaar halen creert druk en onveiligheid.",
    research: "Gottman, J. (2011). Raising An Emotionally Intelligent Child",
  },
  {
    id: "hr_14", skill: "Herstel", type: "quiz", difficulty: "basis", order: 14,
    question: "Je hebt net een flinke woordenwisseling gehad met Merel (11). Jullie zijn allebei nog boos. Je wilt meteen herstellen. Is dit het juiste moment?",
    options: [
      { id: "a", text: "Ja, hoe sneller je herstelt hoe beter het uitpakt voor jullie allebei", isCorrect: false, feedback: "Nee. Als jullie emoties nog hoog zijn, wordt je herstelpoging een nieuwe breuk. Je brein is nog in fight-modus." },
      { id: "b", text: "Het maakt eigenlijk niet zoveel uit wanneer je het precies herstelt", isCorrect: false, feedback: "Timing maakt veel uit. Te snel = nieuwe breuk. Te laat = kind voelt zich vergeten. De sweet spot: wanneer beide partijen kalm zijn." },
      { id: "c", text: "Nee, eerst moeten jullie allebei gereguleerd en kalm zijn'ochtend-erna-venster' is vaak ideaal", isCorrect: true, feedback: "Correct! Herstel werkt pas als beide breinen uit de stressreactie zijn. De ochtend erna biedt vaak een natuurlijk venster: een nieuwe dag, lagere emotie." },
    ],
    explanation: "Het 'ochtend-erna-venster': de nacht geeft het brein tijd om te reguleren. De ochtend biedt een frisse start voor herstel. Te snel herstellen (tijdens de piek) escaleert; te lang wachten (dagen) communiceert onverschilligheid.",
    research: "Siegel, D. & Bryson, T. (2012). The Whole-Brain Child",
  },
  {
    id: "hr_15", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 15,
    question: "Thijs (8) zegt na jouw derde sorry in een maand: 'Je zegt altijd sorry maar je verandert nooit.' Hij heeft gelijk. Wat is de enige reactie die nu nog werkt?",
    options: [
      { id: "a", text: "'Dat is oneerlijk, ik probeer echt mijn best!' (verdedigen)", isCorrect: false, feedback: "Nee. Hij houdt je een eerlijke spiegel voor. Verdedigen bevestigt zijn punt: woorden zonder daden." },
      { id: "b", text: "'Je hebt gelijk. Sorry zeggen is niet meer genoeg. Dit is wat ik concreet ga veranderen: [specifieke actie]. En ik vraag jou om me eraan te herinneren als ik het vergeet.'", isCorrect: true, feedback: "Correct! Als woorden hun waarde verliezen, moet actie het overnemen. En door hem een rol te geven ('herinner me eraan') geef je hem macht terug." },
      { id: "c", text: "Het gesprek stoppen — hij is boos en luistert niet", isCorrect: false, feedback: "Nee. Hij luistert juist heel goed. Dit is een cruciaal moment: actie of geloofwaardigheidsverlies." },
    ],
    explanation: "Wanneer sorry een terugkerend patroon wordt, verliest het woord zijn waarde. Dan verschuift het zwaartepunt naar de 5e stap: concreet gedrag veranderen. Woorden worden vervangen door daden.",
    research: "Gottman, J. (2011). Raising An Emotionally Intelligent Child",
  },
  {
    id: "hr_16", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 16,
    question: "Fenna (4) duwt haar broertje van de glijbaan. Je zegt streng: 'Zeg sorry!' Ze mompelt 'sorry' zonder oogcontact. Is dit herstel?",
    options: [
      { id: "a", text: "Ja, ze leert dat je sorry moet zeggen als je iemand pijn hebt gedaan", isCorrect: false, feedback: "Nee. Ze leert dat 'sorry' een toverwoord is dat het probleem laat verdwijnen. Geen empathie, geen begrip." },
      { id: "b", text: "Het is een begin, oprechtheid komt vanzelf wel met de jaren erbij", isCorrect: false, feedback: "Nee. Afgedwongen sorry zonder begrip leert NIET dat oprechtheid later komt. Het leert dat het woord genoeg is." },
      { id: "c", text: "Nee, help haar eerst begrijpen wat haar broertje voelt", isCorrect: true, feedback: "Correct! 'Kijk, je broertje huilt. Hoe denk je dat hij zich voelt? Wat zou je kunnen doen om hem te helpen?' Dit bouwt empathie op in plaats van een leeg ritueel." },
    ],
    explanation: "Afgedwongen sorry is contraproductief: het leert kinderen dat een woord volstaat zonder begrip of empathie. Beter: begeleid het kind naar empathie en laat het zelf een herstelactie bedenken.",
    research: "Gottman, J. (2011). Raising An Emotionally Intelligent Child",
  },
  {
    id: "hr_17", skill: "Herstel", type: "quiz", difficulty: "expert", order: 17,
    question: "Lotte (12) confronteert je: 'Papa, je vergelijkt me altijd met Bente. Dat doet pijn.' Je was je er niet van bewust. Wat is de volwassen reactie?",
    options: [
      { id: "a", text: "Ontkennen: dat doe ik helemaal niet, dat is onzin van jou'Dat doe ik helemaal niet!' (ontkennen)", isCorrect: false, feedback: "Nee. Ontkennen invalideert haar ervaring. Ze heeft moed nodig gehad om dit te zeggen — dat verdient erkenning." },
      { id: "b", text: "Erkennen dat het je pijn doet en dat je erop gaat letten'Ik was me daar niet van bewust, en het doet me pijn dat ik je pijn deed. Dank je dat je het durfde te zeggen. Ik ga erop letten.'", isCorrect: true, feedback: "Excellent! Je erkent je onbewustheid, toont spijt over het effect, waardeert haar moed, en belooft actie. Alle stappen in een." },
      { id: "c", text: "Uitleggen dat je het niet zo bedoelt, je bent trots op allebei'Ik bedoel het niet zo — ik ben trots op jullie allebei'", isCorrect: false, feedback: "Nee. Dit ontkent haar ervaring. Het gaat niet om je intentie maar om het EFFECT op haar. Ze voelt zich vergeleken, ongeacht je bedoeling." },
    ],
    explanation: "Wanneer je kind je confronteert met onbewust gedrag is dat een teken van veiligheid in de relatie. Ze vertrouwt je genoeg om eerlijk te zijn. Die eerlijkheid belonen met openheid versterkt de relatie.",
    research: "Siegel, D. & Bryson, T. (2020). The Power of Showing Up",
  },
  {
    id: "hr_18", skill: "Herstel", type: "quiz", difficulty: "expert", order: 18,
    question: "Niels (10) zegt: 'Papa, als je boos bent praat je net als opa.' Het raakt je. Hij bedoelt het niet kwaad. Wat is het herstelprincipe?",
    options: [
      { id: "a", text: "Impact boven intentie: het effect verdient erkenning", isCorrect: true, feedback: "Correct! Hij geeft je een spiegel. Het effect van jouw boosheid op hem is reeel, ongeacht je intentie. Erkennen + reflecteren + anders doen." },
      { id: "b", text: "Er is geen echte breuk, hij maakt alleen maar een observatie", isCorrect: false, feedback: "Er is wel degelijk een breuk: jouw boze communicatie doet hem pijn, en hij koppelt het aan een patroon dat hij herkent." },
      { id: "c", text: "Hij moet leren dat vergelijken met opa eigenlijk onbeleefd is", isCorrect: false, feedback: "Nee. Zijn eerlijkheid bestraffen sluit de communicatie af. Hij deelt iets belangrijks — dat verdient een open reactie." },
    ],
    explanation: "'Impact boven intentie': je hoeft het niet expres te doen om het effect te erkennen. Herstel geldt voor bewuste EN onbewuste pijn. De moed van je kind om het te benoemen is een geschenk.",
    research: "Gottman, J. (2011). Raising An Emotionally Intelligent Child",
  },
  // MODULE 4: SYSTEEMHERSTEL (Vragen 19-24)
  {
    id: "hr_19", skill: "Herstel", type: "quiz", difficulty: "basis", order: 19,
    question: "Je hebt ruzie gehad met Yara (15) over haar kledingkeuze. Ze heeft zich op haar kamer opgesloten en schreeuwt: 'Laat me met rust!' Wat doe je?",
    context: "Tieners hebben meer tijd en ruimte nodig voor herstel dan jongere kinderen.",
    options: [
      { id: "a", text: "Aankloppen en het gesprek forceren zodat je het kunt oplossen", isCorrect: false, feedback: "Nee. Forceren bij een tiener escaleert gegarandeerd. Haar 'laat me met rust' is een grens, geen uitnodiging." },
      { id: "b", text: "Een berichtje sturen via WhatsApp om toch contact te maken", isCorrect: false, feedback: "Ze heeft nu ruimte nodig, niet nog een prikkel vanuit jou. Wacht tot zij het initiatief neemt, of probeer het de volgende dag." },
      { id: "c", text: "Haar ruimte respecteren en zeggen dat je er bent als ze wil'Oke, ik respecteer je ruimte. Ik ben in de keuken als je wilt praten. Vandaag, morgen, wanneer je klaar bent.' En daadwerkelijk weggaan", isCorrect: true, feedback: "Correct! Respecteer haar ruimte, toon beschikbaarheid zonder druk, en wacht. Geduld is bij tieners de sleutel." },
    ],
    explanation: "Tieners hebben autonomie nodig, ook in hun herstelproces. 'Ik ben er als je klaar bent' communiceert: ik geef niet op, maar ik respecteer je tempo.",
    research: "Steinberg, L. (2014). Age of Opportunity: Lessons from the New Science of Adolescence",
  },
  {
    id: "hr_20", skill: "Herstel", type: "quiz", difficulty: "basis", order: 20,
    question: "Ruben (14) praat al drie dagen niet met je na een conflict over zijn schoolresultaten. Je voelt je machteloos. Wat is indirect herstel?",
    options: [
      { id: "a", text: "Indirect toenadering: lievelingsgerecht of een kort briefje", isCorrect: true, feedback: "Correct! Indirecte gebaren zeggen: 'de deur staat open, ik geef je niet op.' Tieners reageren beter op zij-aan-zij toenadering dan face-to-face confrontatie." },
      { id: "b", text: "Wachten tot hij naar jou toekomt, hij moet het zelf leren oplossen", isCorrect: false, feedback: "Nee. Herstel is JOUW verantwoordelijkheid als ouder, ongeacht zijn leeftijd. Wachten communiceert onverschilligheid." },
      { id: "c", text: "Hem direct aanspreken en zeggen dat dit zo niet langer verder kan'Dit gedrag is kinderachtig, we moeten praten'", isCorrect: false, feedback: "Nee. Dit is beschamend en escaleert. Zijn stilte is een verwerkingsmechanisme, geen manipulatie." },
    ],
    explanation: "Indirect herstel bij tieners: briefjes, lievelingseten, een autorit aanbieden. Zij-aan-zij contact (naast elkaar, niet tegenover elkaar) verlaagt de drempel voor een tiener om weer in gesprek te gaan.",
    research: "Steinberg, L. (2014). Age of Opportunity: Lessons from the New Science of Adolescence",
  },
  {
    id: "hr_21", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 21,
    question: "Evi (14) liegt steeds vaker, komt afspraken niet na, en reageert vijandig als je er iets van zegt. Vanuit hechtingstheorie: wat communiceert dit gedrag?",
    options: [
      { id: "a", text: "Puberaal verzet, dit is normaal en gaat vanzelf weer over met de tijd", isCorrect: false, feedback: "Het is deels normaal, maar het patroon (liegen + afspraken breken + vijandigheid) is meer dan standaard puberverzet." },
      { id: "b", text: "Een hechtingstest: ze checkt of jij blijft ondanks haar gedrag'Blijf je van me houden als ik op mijn slechtst ben? Geef je me op?'", isCorrect: true, feedback: "Correct! Grenzen testen is een onbewuste hechting-check. Hoe meer ze duwt, hoe harder ze hoopt dat je niet wijkt. Het antwoord: 'Ik geef je niet op.'" },
      { id: "c", text: "Manipulatief gedrag dat je als ouder stevig en hard moet aanpakken", isCorrect: false, feedback: "Nee. 'Manipulatie' als frame mist de onderliggende behoefte: veiligheid en bevestiging dat de relatie overeind blijft." },
    ],
    explanation: "Tieners die grenzen testen stellen onbewust de vraag: 'Ben ik nog veilig bij jou, zelfs op mijn ergst?' Het antwoord is niet toegeven (grenzen laten vallen) maar ook niet afwijzen (relatie verbreken). Het is: grenzen houden EN verbinding bewaren.",
    research: "Bowlby, J. (1988). A Secure Base: Parent-Child Attachment and Healthy Human Development",
  },
  {
    id: "hr_22", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 22,
    question: "Je merkt dat je elke ochtend hetzelfde conflict hebt met Guus (7): hij treuzelt, jij wordt ongeduldig, je snauwd, hij huilt, jullie komen te laat. Dit is een terugkerende cyclus. Hoe doorbreek je een systeem?",
    options: [
      { id: "a", text: "Harder worden met duidelijke consequenties als hij weer treuzelt", isCorrect: false, feedback: "Nee. Harder worden versterkt de cyclus: meer druk = meer stress = meer treuzelen. Je escaleert het patroon." },
      { id: "b", text: "Accepteren dat ochtenden nu eenmaal chaotisch zijn met kleine kinderen", isCorrect: false, feedback: "Nee. Acceptatie van chaos is geen oplossing als het patroon dagelijks leidt tot breuken. Het systeem moet veranderen." },
      { id: "c", text: "Het systeem veranderen: eerder wekken en minder haast creeren", isCorrect: true, feedback: "Correct! Terugkerende cycli doorbreek je door het SYSTEEM te veranderen, niet door harder op het kind te drukken. Jouw stress is de trigger — verander de omstandigheden." },
    ],
    explanation: "Systeemherstel: als dezelfde breuk steeds terugkeert, is het probleem niet het incident maar het SYSTEEM. Verandering begint niet bij het kind maar bij de omstandigheden die de trigger creeren.",
    research: "Siegel, D. & Bryson, T. (2020). The Power of Showing Up",
  },
  {
    id: "hr_23", skill: "Herstel", type: "quiz", difficulty: "expert", order: 23,
    question: "Tessa (16) vertelt je dat ze al weken slecht slaapt door stress maar het niet durfde te vertellen. Je vraagt: 'Waarom niet?' Ze zegt: 'Je hebt het altijd zo druk.' Is dit een moment voor HAAR of JOUW herstel?",
    options: [
      { id: "a", text: "Haar probleem, ze had het gewoon veel eerder moeten vertellen", isCorrect: false, feedback: "Nee. Dat ze het niet durfde is feedback over de relatie. Ze ervaart jou als te druk om haar zorgen te dragen." },
      { id: "b", text: "Jouw herstel: haar zwijgen is feedback over de relatie", isCorrect: true, feedback: "Correct! De vraag is niet 'waarom zei je niets?' maar 'wat kan ik veranderen zodat je je veilig genoeg voelt om dit te delen?'" },
      { id: "c", text: "Geen van beiden, tieners houden nu eenmaal dingen voor zich", isCorrect: false, feedback: "Deels normaal, maar weken slecht slapen verzwijgen wijst op een drempel in de relatie. Het normaliseren mist een kans." },
    ],
    explanation: "Als je tiener belangrijke dingen verbergt, stel jezelf de vraag: 'Heb ik een klimaat gecreeerd waarin kwetsbaarheid veilig is?' Haar zwijgen is een spiegel, geen verwijt.",
    research: "Steinberg, L. (2014). Age of Opportunity: Lessons from the New Science of Adolescence",
  },
  {
    id: "hr_24", skill: "Herstel", type: "quiz", difficulty: "expert", order: 24,
    question: "Hidde (15) schreeuwt tijdens een ruzie: 'Jij begrijpt er niks van! Ik wou dat ik een andere vader had!' Je voelt een steek in je hart. Hoe verwerk je dit?",
    options: [
      { id: "a", text: "Hem direct confronteren met het effect van zijn harde woorden op jou", isCorrect: false, feedback: "Begrijpelijk, maar in het heetst van de strijd is dit zinloos. En in het herstelgesprek staat eerst HET KIND centraal." },
      { id: "b", text: "Het negeren, tieners zeggen dit soort dingen niet echt serieus toch", isCorrect: false, feedback: "De woorden raken je WEL. Dat ontkennen helpt niet. Verwerk het, maar niet met je kind als therapeut." },
      { id: "c", text: "Eerst herstellen, later in een kalm moment je grens benoemen'Die woorden raakten me.' Jouw pijn verwerk je met een volwassene, niet met je kind", isCorrect: true, feedback: "Correct! Eerst herstellen (jouw verantwoordelijkheid). Later je grens benoemen (niet als ruilmiddel). Jouw pijn bespreek je met je partner of een vriend, niet met je tiener." },
    ],
    explanation: "Je mag gekwetst zijn door je tiener. Maar het herstelgesprek is niet het moment voor jouw pijn. Eerst herstellen, later je grens benoemen. Jouw emotionele verwerking doe je met volwassenen.",
    research: "Siegel, D. & Bryson, T. (2020). The Power of Showing Up",
  },
  // MODULE 5: KWETSBAARHEID ALS KRACHT (Vragen 25-30)
  {
    id: "hr_25", skill: "Herstel", type: "quiz", difficulty: "basis", order: 25,
    question: "Julia (7) is de laatste weken agressiever tegen haar broertje. Ze bijt, duwt en schopt. Dit is nieuw gedrag. Wat kan dit signaleren?",
    context: "Stress-signalen bij kinderen zijn vaak indirect: plotselinge gedragsveranderingen.",
    options: [
      { id: "a", text: "Ze is jaloers op haar broertje en moet leren om beter te delen met hem", isCorrect: false, feedback: "Nee. Plotse agressie is meestal een stress-signaal, geen karaktereigenschap. Er is iets veranderd." },
      { id: "b", text: "Onverwerkte spanning of een onherstelde breuk in het gezin", isCorrect: true, feedback: "Correct! Kinderen 'lekken' stress via gedrag. Plotse veranderingen zijn signalen: iets is anders en ze kunnen het niet verwoorden." },
      { id: "c", text: "Een fase, veel kinderen zijn agressief rond de leeftijd van 7 jaar oud", isCorrect: false, feedback: "De plotse verandering is de sleutel. Een 'fase' verklaart geleidelijke ontwikkeling, niet abrupte gedragsverandering." },
    ],
    explanation: "Jonge kinderen communiceren stress via gedrag, niet via woorden. Plotselinge agressie, terugtrekking, regressie (terugvallen in jonger gedrag) of aanhankelijkheid zijn signalen die vragen: wat is er veranderd?",
    research: "Bowlby, J. (1988). A Secure Base: Parent-Child Attachment and Healthy Human Development",
  },
  {
    id: "hr_26", skill: "Herstel", type: "quiz", difficulty: "basis", order: 26,
    question: "Je hebt een zware dag op het werk gehad. Je komt thuis en merkt dat je kort lontje heeft. Je weet dat je vanavond makkelijk gaat uitvallen. Wat is preventief herstel?",
    options: [
      { id: "a", text: "Transparant zijn: zeggen dat je een zware dag had'Papa heeft een moeilijke dag gehad en is moe. Het ligt niet aan jullie. Ik heb even rust nodig en dan kom ik bij jullie.'", isCorrect: true, feedback: "Correct! Transparantie voorkomt dat kinderen jouw stemming op zichzelf betrekken. Je modelleert: emoties benoemen, verantwoordelijkheid nemen, en zelfzorg." },
      { id: "b", text: "Doorbijten en hopen dat het vanavond nog wel meevalt", isCorrect: false, feedback: "Nee. 'Doorbijten' bij een al overbelast systeem leidt voorspelbaar tot breuken. Bewustzijn is de eerste stap." },
      { id: "c", text: "Afstand nemen en de kinderen aan je partner overlaten", isCorrect: false, feedback: "Een korte pauze is prima, maar zonder uitleg voelen kinderen afwijzing. Het verschil: 'papa heeft rust nodig' vs stilletjes verdwijnen." },
    ],
    explanation: "Preventief herstel = breuken voorkomen door je eigen staat te herkennen en te communiceren. 'Papa is moe' is krachtiger dan een niet-verklaarde snauwd die later hersteld moet worden.",
    research: "Siegel, D. & Hartzell, M. (2003). Parenting from the Inside Out",
  },
  {
    id: "hr_27", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 27,
    question: "Je hebt Pip (6) een hele week nauwelijks gezien door een projectdeadline op werk. Zaterdag wil je het goedmaken. Wat werkt het best?",
    options: [
      { id: "a", text: "Een dag naar het pretpark gaan om de week te compenseren met iets groots", isCorrect: false, feedback: "Nee. Kinderen meten verbinding in DAGELIJKSE micro-momenten, niet in grote events. Een pretpark is een storting, niet een oplossing." },
      { id: "b", text: "Uitleggen dat papa hard moest werken deze week voor het hele gezin", isCorrect: false, feedback: "Nee. Een 6-jarige begrijpt geen werkeisen. Hij heeft VERBINDING nodig, geen verklaring." },
      { id: "c", text: "15 minuten 100% aanwezig: telefoon weg, volle aandacht", isCorrect: true, feedback: "Correct! Kwaliteit boven kwantiteit. 15 minuten echte aanwezigheid vult meer dan 3 uur half-aanwezig in een pretpark." },
    ],
    explanation: "Micro-momenten van echte aanwezigheid zijn de krachtigste 'stortingen' op de emotionele spaarrekening. Kort maar echt slaat meer op dan lang maar afgeleid.",
    research: "Siegel, D. (2012). The Developing Mind",
  },
  {
    id: "hr_28", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 28,
    question: "Een vader vraagt: 'Wat is het krachtigste dat ik kan doen als ik merk dat ik dezelfde fout steeds herhaal — bijvoorbeeld schreeuwen bij huiswerkstress?' Wat zegt onderzoek over het doorbreken van herhalende breuken?",
    options: [
      { id: "a", text: "Meer wilskracht opbrengen en gewoon stoppen met schreeuwen voortaan", isCorrect: false, feedback: "Nee. 'Meer wilskracht' negeert de trigger. Je moet het systeem veranderen, niet harder proberen binnen een kapot systeem." },
      { id: "b", text: "De trigger identificeren en het systeem veranderen", isCorrect: true, feedback: "Correct! Herhalende breuken doorbreek je door de trigger te veranderen, niet door harder je best te doen. Als huiswerk om 18:00 altijd escaleert, probeer 16:00." },
      { id: "c", text: "Accepteren dat schreeuwen erbij hoort en steeds weer opnieuw herstellen", isCorrect: false, feedback: "Nee. Steeds herstellen zonder het patroon te veranderen maakt sorry waardeloos. Op een gegeven moment zegt je kind: 'Je doet het toch weer.'" },
    ],
    explanation: "Systeemdenken: als dezelfde breuk steeds terugkeert, is het probleem niet jouw karakter maar het systeem (timing, omstandigheden, triggers). Verander het systeem en het gedrag verandert mee.",
    research: "Siegel, D. & Bryson, T. (2020). The Power of Showing Up",
  },
  {
    id: "hr_29", skill: "Herstel", type: "quiz", difficulty: "expert", order: 29,
    question: "Je merkt dat je je kinderen de laatste weken meer als last ervaart dan als vreugde. Je bent prikkelbaar, afwezig en cynisch. Wat is de eerlijkste vorm van preventief herstel?",
    options: [
      { id: "a", text: "Doorbijten, prikkelbaar zijn hoort er gewoon bij als ouder van jonge kinderen", isCorrect: false, feedback: "Nee. Chronische prikkelbaarheid en cynisme zijn burn-out signalen. 'Doorbijten' maakt het erger voor jou EN je kinderen." },
      { id: "b", text: "Je eigen nood herkennen en actie ondernemen: praat erover", isCorrect: true, feedback: "Correct! Preventief herstel op het hoogste niveau: je eigen grenzen herkennen en hulp zoeken. Dit is geen zwakte maar de ultieme verantwoordelijkheid als vader." },
      { id: "c", text: "Meer leuke dingen doen met je kinderen, dat brengt de vreugde vast wel terug", isCorrect: false, feedback: "Nee. Als je al leeg bent, voegt 'meer doen' alleen meer druk toe. Eerst jezelf vullen, dan pas geven." },
    ],
    explanation: "De krachtigste vorm van preventief herstel is je eigen staat herkennen. 'Ik kan nu niet geven wat mijn kinderen nodig hebben' is geen falen maar bewustzijn. Hulp zoeken is de volwassen stap.",
    research: "Siegel, D. & Hartzell, M. (2003). Parenting from the Inside Out",
  },
  {
    id: "hr_30", skill: "Herstel", type: "quiz", difficulty: "expert", order: 30,
    question: "Een vader vertelt in een vadergroep: 'Ik heb mijn dochter (8) gisteren voor het eerst echt kwetsbaar gezegd dat het me spijt. Ik zei dat ik me schaande voor hoe ik reageerde. Ze keek me aan en zei: 'Bedankt papa.' Ik huilde.' Wat modelleert deze vader?",
    options: [
      { id: "a", text: "Zwakte, kinderen hoeven niet te zien dat hun vader huilt waar zij bij zijn", isCorrect: false, feedback: "Nee. Dit is een verouderde opvatting. Een vader die kwetsbaarheid toont modelleert emotionele volwassenheid." },
      { id: "b", text: "Dat vaders het moeilijk hebben en dat zij zich nu schuldig hoeft te voelen", isCorrect: false, feedback: "Nee. Ze voelt geen schuld maar verbinding. 'Bedankt papa' toont dat ze zich gezien voelt, niet belast." },
      { id: "c", text: "Kracht: kwetsbaarheid toont dat fouten hersteld mogen worden", isCorrect: true, feedback: "Correct! Hij modelleert alles wat telt: fouten erkennen is sterk, emoties tonen is moedig, en relaties zijn het waard om te herstellen. Zijn dochter draagt dit model mee naar al haar toekomstige relaties." },
    ],
    explanation: "Kwetsbaarheid als vader is geen zwakte maar de hoogste vorm van kracht. Je modelleert: fouten maken mag, verantwoordelijkheid nemen is volwassen, en relaties overleven imperfectie. Dit is de kern van herstel.",
    research: "Gottman, J. (2011). Raising An Emotionally Intelligent Child; Tronick, E. (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children",
  },
];
export const VERBINDING_TRAINING: TrainingItem[] = [

  // ============================================================
  // MODULE 1: EMOTIONELE BANKREKENING (Vragen 1-6)
  // Gottman's emotionele bankrekening, stortingen vs opnames, 5:1 ratio
  // ============================================================

  {
    id: "vb_1",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "basis",
    order: 1,
    question: "Bente (4) laat je trots haar blokkentorentje zien. Jij zegt 'knap hoor' terwijl je op je laptop blijft kijken. Ze trekt aan je arm en zegt: 'Nee papa, KIJKEN.' Wat is het verschil tussen jouw eerste en haar gewenste reactie, vanuit de emotionele bankrekening?",
    options: [
      {
        id: "a",
        text: "Jouw reactie was een minimale storting; volle aandacht en oogcontact zijn echte stortingen",
        isCorrect: true,
        feedback: "Precies. Gottman's emotionele bankrekening vereist dat stortingen echt zijn: met aandacht, aanwezigheid en oogcontact. Halfslachtige reacties tellen nauwelijks mee.",
      },
      {
        id: "b",
        text: "Er is geen verschil — je gaf een compliment, dat is een prima storting op de bankrekening",
        isCorrect: false,
        feedback: "Een compliment zonder aandacht is als een lege envelop. Het woord is er, maar de storting op de emotionele bankrekening ontbreekt. Bente voelt dat verschil haarscherp.",
      },
      {
        id: "c",
        text: "Ze vertoont aandachtvragend gedrag en je moet hier duidelijke grenzen aan gaan stellen",
        isCorrect: false,
        feedback: "Bente doet precies wat gezonde kinderen doen: verbinding zoeken. Dat wegzetten als 'aandachtvragend' miskent haar fundamentele behoefte aan gezien worden.",
      },
    ],
    explanation: "De emotionele bankrekening (Gottman) werkt met echte stortingen: momenten van volledige aandacht, oogcontact en oprechte interesse. Een 'knap hoor' zonder erbij te zijn, is als een cheque zonder dekking — het kind voelt het verschil onmiddellijk.",
    research: "Gottman, J. (2001). The Relationship Cure",
  },

  {
    id: "vb_2",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "basis",
    order: 2,
    question: "Lars (7) heeft drie keer achter elkaar te horen gekregen: 'Niet rennen binnen!', 'Ruim je spullen op!' en 'Hou op met dat lawaai!' Vanuit Gottman's 5:1 ratio — hoeveel positieve interacties zijn er minimaal nodig om dit te balanceren?",
    options: [
      {
        id: "a",
        text: "Drie — voor elke correctie is minimaal één positieve interactie nodig om te balanceren",
        isCorrect: false,
        feedback: "Een 1:1 ratio is niet genoeg. Negatieve interacties wegen veel zwaarder dan positieve. Het saldo zou zo alsnog negatief blijven.",
      },
      {
        id: "b",
        text: "Eén groot positief moment, zoals samen naar het park gaan, compenseert alles al voldoende",
        isCorrect: false,
        feedback: "Eén grote activiteit weegt niet op tegen meerdere negatieve interacties. Het gaat om frequentie van kleine stortingen, niet om incidentele grote gebaren.",
      },
      {
        id: "c",
        text: "Vijftien — elke negatieve interactie vereist vijf positieve om het saldo te herstellen",
        isCorrect: true,
        feedback: "Correct. Drie correcties × vijf = vijftien positieve interacties nodig. Dit laat zien hoe snel het saldo daalt bij opeenvolgende correcties. Spreid correcties en vul tussendoor aan.",
      },
    ],
    explanation: "Gottman's 5:1 ratio betekent dat elke negatieve interactie vijf positieve vereist. Bij drie correcties achter elkaar heb je dus vijftien stortingen nodig. Dit verklaart waarom dagen vol corrigeren de relatie zo snel uithollen — zelfs als elke correctie terecht is.",
    research: "Gottman, J. (1999). The Seven Principles for Making Marriage Work",
  },

  {
    id: "vb_3",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 3,
    question: "Pien (6) heeft de hele middag rustig gespeeld. Jij hebt haar in die tijd geen enkele keer aangesproken — geen correcties, maar ook geen aandacht. Je denkt: 'Vandaag ging het lekker, geen enkel conflict.' Wat zegt de emotionele bankrekening over deze middag?",
    options: [
      {
        id: "a",
        text: "Positief — geen opnames betekent dat het saldo van de emotionele bankrekening gelijk bleef",
        isCorrect: false,
        feedback: "Geen opnames is niet hetzelfde als stortingen. Een rekening waar niets op gestort wordt, groeit niet. Het saldo staat stil of daalt langzaam.",
      },
      {
        id: "b",
        text: "Het saldo daalde — geen conflict is niet hetzelfde als verbinding, de rekening leegt vanzelf",
        isCorrect: true,
        feedback: "Precies. De emotionele bankrekening heeft actieve stortingen nodig: aandacht, een glimlach, even samen lachen. Afwezigheid van conflict is geen aanwezigheid van verbinding.",
      },
      {
        id: "c",
        text: "Neutraal — als er geen interactie plaatsvindt, dan verandert er helemaal niets aan het saldo",
        isCorrect: false,
        feedback: "Het saldo staat nooit stil. Zonder stortingen interpreteert het kind de stilte als desinteresse. Elke gemiste kans om te verbinden is een kleine opname.",
      },
    ],
    explanation: "Een veelgemaakte fout: denken dat geen conflict = goede relatie. De emotionele bankrekening vereist actieve stortingen. Een middag zonder enige positieve interactie is een middag waarin het saldo langzaam daalt. Verbinding vraagt initiatief, niet alleen afwezigheid van negativiteit.",
    research: "Gottman, J. (2001). The Relationship Cure",
  },

  {
    id: "vb_4",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 4,
    question: "Teun (9) maakt zijn huiswerk aan de keukentafel. Je loopt langs en zegt: 'Goed bezig!' Twee minuten later loopt je partner langs, gaat even naast hem zitten, wijst naar zijn werk en vraagt: 'Hoe heb je dat uitgerekend?' Welke reactie is een grotere storting op de emotionele bankrekening, en waarom?",
    options: [
      {
        id: "a",
        text: "Die van je partner — ze toonde specifieke interesse en ging op zijn niveau zitten",
        isCorrect: true,
        feedback: "Correct. Stortingen hebben verschillende waarden. Fysieke nabijheid + specifieke interesse + op ooghoogte gaan is een veel grotere storting dan een voorbijlopend compliment. Kwaliteit verslaat kwantiteit.",
      },
      {
        id: "b",
        text: "Beiden zijn even groot — het is allebei een vorm van positieve aandacht voor Teun",
        isCorrect: false,
        feedback: "Niet alle stortingen zijn gelijk. De diepte van de interactie bepaalt de waarde. Een vluchtig compliment en oprechte betrokkenheid zijn fundamenteel anders.",
      },
      {
        id: "c",
        text: "Die van jou — een kort compliment is efficiënter en je kunt er meer geven per dag",
        isCorrect: false,
        feedback: "Efficiëntie is geen maatstaf voor emotionele verbinding. Tien vluchtige complimenten wegen niet op tegen één moment van echte aandacht.",
      },
    ],
    explanation: "Niet alle stortingen op de emotionele bankrekening zijn gelijk. Een storting met fysieke nabijheid, oogcontact, specifieke interesse en tijd weegt zwaarder dan een vluchtige opmerking. Kwaliteitsstortingen bouwen een steviger saldo op.",
    research: "Gottman, J. (2001). The Relationship Cure; Pleck, J. (2010). Paternal Involvement",
  },

  {
    id: "vb_5",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 5,
    question: "Roos (8) maakt per ongeluk een glas melk om over haar huiswerk. Je reageert met: 'Kun je niet uitkijken?!' Zij bevriest en haar ogen worden groot. Later die avond probeer je het goed te maken met een ijsje en samen tv kijken. Vanuit de emotionele bankrekening — wat is het probleem met deze 'reparatiestrategie'?",
    options: [
      {
        id: "a",
        text: "Er is geen probleem — je hebt de opname al gecompenseerd met twee positieve stortingen erna",
        isCorrect: false,
        feedback: "Twee stortingen compenseren één opname niet bij de 5:1 ratio. Bovendien wegen stortingen die als 'goedmaken' voelen minder zwaar dan spontane stortingen.",
      },
      {
        id: "b",
        text: "Het ijsje werkt als cadeaustorting en compenseert de eerdere opname volledig en afdoende",
        isCorrect: false,
        feedback: "Materiële compensatie raakt niet aan de emotionele kern. Roos' lichaam onthoudt de schrik; een ijsje wist dat niet uit. Ze heeft erkenning nodig, geen beloning.",
      },
      {
        id: "c",
        text: "De opname weegt zwaarder dan twee oppervlakkige stortingen; echte reparatie vraagt erkenning",
        isCorrect: true,
        feedback: "Precies. Een emotionele opname door angst of schaamte is diep en vereist gerichte reparatie: 'Ik schrok en reageerde te fel. Dat was niet eerlijk. Jij schrok vast ook.' Pas daarna hebben andere stortingen weer volle waarde.",
      },
    ],
    explanation: "Niet alle opnames zijn gelijk, en niet alle stortingen repareren even goed. Een schrikreactie activeert het stresssysteem en vereist gerichte reparatie: erkenning, excuus, en herstel van veiligheid. Materiële compensatie of afleiding omzeilt het probleem zonder het op te lossen.",
    research: "Gottman, J. (2011). The Science of Trust; Tronick, E. (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children",
  },

  {
    id: "vb_6",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 6,
    question: "Guus (5) is de afgelopen week elke ochtend lastig bij het aankleden: treuzelend, boos, niet meewerken. Jij hebt elke ochtend gecorrigeerd en aangedrongen. Vanmiddag zeg je iets aardigs en hij reageert schouderophalend. Wat vertelt de emotionele bankrekening je over deze situatie?",
    options: [
      {
        id: "a",
        text: "Het saldo staat zo diep in het rood dat incidentele stortingen niet meer landen",
        isCorrect: true,
        feedback: "Correct. Bij een chronisch negatief saldo gaat het kind in 'beschermingsmodus': het vertrouwt positieve signalen niet meer. Je moet het saldo structureel opbouwen met consistente dagelijkse stortingen voordat correcties weer worden verdragen.",
      },
      {
        id: "b",
        text: "Guus is een lastig kind dat niet goed reageert op jouw positieve aandacht geven",
        isCorrect: false,
        feedback: "Het gaat niet om zijn karakter. Na een week van overwegend negatieve interacties is het saldo zo laag dat losse stortingen niet meer landen. Het kind beschermt zichzelf.",
      },
      {
        id: "c",
        text: "Je moet de ochtendcorrecties volledig stoppen en hem zijn eigen gang laten gaan",
        isCorrect: false,
        feedback: "Grenzen zijn nodig, maar het huidige patroon werkt niet. De oplossing is niet geen grenzen, maar veel meer stortingen tussendoor zodat het saldo weer positief wordt.",
      },
    ],
    explanation: "Wanneer het emotioneel saldo chronisch negatief is, ontstaat er een 'negative sentiment override': het kind interpreteert zelfs neutrale of positieve signalen negatief. Herstel vereist een langere periode van consistent meer stortingen dan opnames — geen incidenteel gebaar, maar een structurele verschuiving.",
    research: "Gottman, J. (1999). The Seven Principles for Making Marriage Work; Gottman, J. (2011). The Science of Trust",
  },

  // ============================================================
  // MODULE 2: SPELEN ALS VERBINDING (Vragen 7-12)
  // Floor time, kind-geleide interactie, spelend verbinden
  // ============================================================

  {
    id: "vb_7",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "basis",
    order: 7,
    question: "Jasmijn (4) speelt met poppen op de grond. Ze laat twee poppen met elkaar praten. Jij gaat erbij zitten en zegt: 'Zal ik laten zien hoe je een mooi huis kunt bouwen voor de poppen?' Wat is het probleem vanuit floor time?",
    options: [
      {
        id: "a",
        text: "Er is geen probleem — je biedt gewoon een leuk spelidee aan om het spel leuker te maken",
        isCorrect: false,
        feedback: "Vanuit floor time neem je het spel over door je eigen agenda in te brengen. Je vervangt haar verhaal door jouw plan. Dat verbreekt de verbinding in plaats van het te versterken.",
      },
      {
        id: "b",
        text: "Je stuurt haar spel — floor time vraagt dat je haar volgt, niet leidt of overneemt",
        isCorrect: true,
        feedback: "Precies. Floor time (Greenspan) betekent dat het kind de regisseur is. Jij volgt haar verhaal: 'Wat zeggen de poppen tegen elkaar?' Door aan te sluiten bij haar spel voelt ze zich gezien en begrepen.",
      },
      {
        id: "c",
        text: "Je moet haar helemaal met rust laten als ze speelt, niet erbij gaan zitten eigenlijk",
        isCorrect: false,
        feedback: "Floor time gaat juist over erbij zijn en meedoen — maar op háár voorwaarden. Niet afzijdig blijven, maar aansluiten zonder over te nemen.",
      },
    ],
    explanation: "Floor time (Greenspan) is een methode waarbij de ouder letterlijk op de vloer gaat en het kind de leiding geeft in het spel. De vader volgt, sluit aan en breidt voorzichtig uit — zonder te sturen. Dit communiceert: 'Jouw wereld is interessant en ik wil erin meedoen.'",
    research: "Greenspan, S. & Wieder, S. (2006). Engaging Autism: Using the Floortime Approach",
  },

  {
    id: "vb_8",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "basis",
    order: 8,
    question: "Pepijn (5) wil een ridderspel spelen. Hij wijst jou aan als draak. Na twee minuten denk je: 'Dit is saai, ik ga er iets leukers van maken' en je begint grapjes te maken en het spel te veranderen. Waarom is dit een gemiste kans?",
    options: [
      {
        id: "a",
        text: "Omdat grapjes niet passen bij een ridderspel — het past niet bij het thema van het spel",
        isCorrect: false,
        feedback: "Het gaat niet om de grapjes an sich, maar om het feit dat je zijn spelwereld niet serieus neemt. Je vervangt zijn beleving door die van jou.",
      },
      {
        id: "b",
        text: "Omdat een 5-jarige nog te jong is om met spontane veranderingen in het spel om te gaan",
        isCorrect: false,
        feedback: "Het gaat niet om zijn leeftijd of flexibiliteit. Het gaat erom dat jij zijn leiderschap in het spel respecteert — dat is de kern van kind-geleide interactie.",
      },
      {
        id: "c",
        text: "Omdat kind-geleide interactie vraagt dat jij zijn spel serieus neemt en zijn script volgt",
        isCorrect: true,
        feedback: "Correct. In kind-geleide interactie is het spel van het kind heilig. Als Pepijn zegt dat jij de draak bent, dan ben jij de draak. Door zijn script te volgen zeg je: 'Jouw verbeelding doet ertoe.' Dat is een diepe storting.",
      },
    ],
    explanation: "Bij kind-geleide interactie (PCIT, Eyberg) volgt de ouder het spel van het kind. Veel vaders vinden het lastig om een passieve rol te accepteren in het spel. Maar juist door het kind de regie te geven, bouw je verbinding: 'Ik neem jou serieus.'",
    research: "Eyberg, S. (1988). Parent-Child Interaction Therapy. Child & Family Behavior Therapy",
  },

  {
    id: "vb_9",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 9,
    question: "Amber (6) speelt doktertje en zegt: 'Jij bent ziek, papa. Ga liggen.' Je ligt op de bank en zij 'onderzoekt' je met een speelgoedstethoscoop. Na een minuut wil je opstaan. Wat gebeurt er neurologisch bij Amber tijdens dit spel, en waarom is jouw volharding belangrijk?",
    options: [
      {
        id: "a",
        text: "Haar spiegelneuronen zijn actief — ze oefent empathie en jouw meespelen versterkt dat",
        isCorrect: true,
        feedback: "Correct. Tijdens rollenspel zijn de prefrontale cortex (planning, perspectief nemen) en spiegelneuronen (empathie) actief. Dat jij meespeelt maakt het extra krachtig: ze oefent zorgen voor de belangrijkste persoon in haar leven.",
      },
      {
        id: "b",
        text: "Er gebeurt weinig — het is maar fantasiespel zonder enige diepere betekenis voor haar",
        isCorrect: false,
        feedback: "Fantasiespel is een van de krachtigste vormen van hersenontwikkeling. Amber oefent empathie, probleemoplossing en sociale rollen. Het is allesbehalve 'maar' spel.",
      },
      {
        id: "c",
        text: "Ze leert vooral motorische vaardigheden door het spelen met de stethoscoop en spullen",
        isCorrect: false,
        feedback: "De motoriek is bijzaak. De kern is sociaal-emotioneel: rollenspel met een ouder bouwt empathie, verbinding en een intern model van zorgrelaties.",
      },
    ],
    explanation: "Rollenspel activeert de prefrontale cortex en spiegelneuronen — de neurale basis voor empathie. Als een vader meespeelt in het fantasiespel van zijn kind, worden deze circuits extra sterk geactiveerd. Het kind ervaart: papa neemt mijn wereld serieus, EN oefent tegelijk cruciale sociale vaardigheden.",
    research: "Greenspan, S. & Wieder, S. (2006). Engaging Autism: Using the Floortime Approach; Pellis, S. & Pellis, V. (2009). The Playful Brain",
  },

  {
    id: "vb_10",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 10,
    question: "Thijs (3) stapelt blokken en ze vallen steeds om. Hij begint te huilen. Jij pakt de blokken en bouwt snel een stabiele toren voor hem. 'Kijk, zo moet het!' Wat is het probleem vanuit het perspectief van spelend verbinden?",
    options: [
      {
        id: "a",
        text: "Je ging naar het oplossen in plaats van het afstemmen op zijn frustratie en gevoel'fix-modus' in plaats van eerst te verbinden met zijn frustratie. Erkennen ('Bah, hij valt steeds om, hè?') en dan samen proberen had verbinding én leren opgeleverd",
        isCorrect: true,
        feedback: "Precies. De vaderreflex om te 'fixen' is sterk, maar mist de verbindingskans. Eerst aansluiten bij het gevoel, dan samen zoeken naar een oplossing. Zo wordt het spel een gedeelde ervaring in plaats van een les.",
      },
      {
        id: "b",
        text: "Er is geen probleem — je hebt hem geholpen en nu kan hij gewoon weer verder spelen",
        isCorrect: false,
        feedback: "Je loste zijn probleem op, maar miste de kans om te verbinden over zijn frustratie. Bovendien nam je zijn leerervaring weg door het voor hem te doen.",
      },
      {
        id: "c",
        text: "Je had hem moeten laten huilen zodat hij leert omgaan met zijn eigen frustraties",
        isCorrect: false,
        feedback: "Een 3-jarige kan frustratie nog niet zelf reguleren. Hij heeft co-regulatie nodig. Maar co-regulatie is niet hetzelfde als het probleem overnemen — het is samen door de frustratie heen gaan.",
      },
    ],
    explanation: "Veel vaders schieten in 'fix-modus' bij kinderspel: het probleem oplossen in plaats van het proces delen. Floor time vraagt het tegenovergestelde: sluit aan bij het gevoel, valideer de frustratie, en bied dan samen een volgende stap aan. Het proces IS de verbinding.",
    research: "Greenspan, S. & Wieder, S. (2006). Engaging Autism: Using the Floortime Approach",
  },

  {
    id: "vb_11",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 11,
    question: "Fleur (5) en jij spelen al tien minuten 'winkeltje'. Ze herhaalt steeds hetzelfde patroon: jij koopt iets, zij scant het, jij betaalt. Jij wordt ongeduldig en denkt: dit schiet niet op, er zit geen ontwikkeling in. Wat mis je?",
    options: [
      {
        id: "a",
        text: "Je hebt gelijk — het spel moet complexer worden door nieuwe elementen erbij toe te voegen",
        isCorrect: false,
        feedback: "Herhaling in kinderspel is niet stilstand. Door het spel te veranderen volg je jouw behoefte aan vooruitgang, niet haar behoefte aan veilige herhaling.",
      },
      {
        id: "b",
        text: "Je moet het spel stoppen als het niet meer leuk is — kinderen voelen het als je doet alsof",
        isCorrect: false,
        feedback: "Kinderen voelen inderdaad onechtheid, maar de oplossing is niet stoppen. Het is je perspectief verschuiven: het doel is niet jouw plezier maar de verbinding. Probeer haar gezicht te zien bij elke herhaling — daar zit de vreugde.",
      },
      {
        id: "c",
        text: "De herhaling is het doel — het geeft haar veiligheid en jouw volhouden is verbindend",
        isCorrect: true,
        feedback: "Correct. Kinderen herhalen patronen niet uit gebrek aan creativiteit, maar omdat herhaling veiligheid en meesterschapsgevoel biedt. Dat jij dit volhoudt zonder ongeduld communiceert: 'Ik blijf bij je, op jouw tempo.' Dat is pure verbinding.",
      },
    ],
    explanation: "Herhalend spel is een van de lastigste dingen voor vaders om vol te houden. Maar voor kinderen is herhaling een fundamentele behoefte: het biedt veiligheid, voorspelbaarheid en een gevoel van controle. Een vader die geduldig meespeelt in het herhalende patroon, geeft een van de diepste vormen van acceptatie.",
    research: "Greenspan, S. & Wieder, S. (2006). Engaging Autism: Using the Floortime Approach; Pellis, S. & Pellis, V. (2009). The Playful Brain",
  },

  {
    id: "vb_12",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 12,
    question: "Casper (7) wil stoeigevechten. Het begint leuk, maar op een gegeven moment wordt hij wilder, gaat harder slaan en luistert niet als jij 'stop' zegt. Je wordt gefrustreerd. Wat vertelt dit moment over de verbindingsfunctie van stoeisspel?",
    options: [
      {
        id: "a",
        text: "Stoeisspel leidt altijd tot escalatie bij kinderen — je kunt het beter helemaal vermijden",
        isCorrect: false,
        feedback: "Stoeien is juist essentieel voor de vader-kindrelatie. Het probleem zit niet in het stoeien zelf, maar in het missen van het omslagpunt waar opwinding regulatie overstijgt.",
      },
      {
        id: "b",
        text: "Casper mist co-regulatie: hij heeft jou nodig om zijn opwinding te helpen reguleren nu's escalatie toont dat zijn opwindingssysteem voorbij het regulatiepunt is gegaan. Stoeien is waardevol voor verbinding, maar vereist dat jij het tempo bewaakt en kalmeert vóór het omslagpunt",
        isCorrect: true,
        feedback: "Precies. Stoeisspel (rough-and-tumble play) is een van de krachtigste verbindingsvormen tussen vader en kind. Maar het vereist dat de vader de 'arousal curve' bewaakt: opvoeren, aflezen, en kalmeren vóór het escaleert. Jij bent de thermostaat.",
      },
      {
        id: "c",
        text: "Casper is agressief en moet eerst leren zijn impulsen te beheersen voor je weer gaat stoeien",
        isCorrect: false,
        feedback: "Op 7 jaar is het prefrontale cortex nog in ontwikkeling — het is jouw taak als vader om de regulatie te bieden die hij nog niet zelf kan. Het is geen agressieprobleem maar een co-regulatiemoment.",
      },
    ],
    explanation: "Rough-and-tumble play is uniek aan de vaderrol en biedt enorme verbindingskansen. Maar het vereist dat de vader de 'arousal thermostaat' is: opwinding opbouwen, het kind aflezen, en op tijd terugschakelen. Dit leert het kind emotieregulatie via het lichaam — een vaardigheid die nergens anders zo effectief geoefend wordt.",
    research: "Pellis, S. & Pellis, V. (2009). The Playful Brain; Paquette, D. (2004). Theorizing the Father-Child Activation Relationship",
  },

  // ============================================================
  // MODULE 3: COMMUNICATIE DIE VERBINDT (Vragen 13-18)
  // Actief luisteren, valideren, open vragen
  // ============================================================

  {
    id: "vb_13",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "basis",
    order: 13,
    question: "Nienke (8) komt huilend thuis: 'Ik had ruzie met mijn vriendin, ze is gemeen!' Jij antwoordt: 'Wat is er precies gebeurd? Heb jij misschien ook iets gedaan?' Waarom is dit geen actief luisteren?",
    options: [
      {
        id: "a",
        text: "Je slaat de emotie over en gaat direct naar de feiten; luisteren begint bij het gevoel'Wat verdrietig. Dat doet pijn als je vriendin gemeen doet'",
        isCorrect: true,
        feedback: "Correct. Actief luisteren heeft een volgorde: eerst het gevoel erkennen, dan pas het verhaal verkennen. Door meteen naar feiten te springen, voelt Nienke zich niet gehoord maar verhoord.",
      },
      {
        id: "b",
        text: "Het is wél actief luisteren — je stelt immers vragen om het hele verhaal te begrijpen",
        isCorrect: false,
        feedback: "Je stelt vragen, maar de verkeerde soort op het verkeerde moment. Je gaat naar analyse terwijl ze emotionele steun nodig heeft. Ze voelt zich niet gehoord maar ondervraagd.",
      },
      {
        id: "c",
        text: "Omdat je als ouder nu eenmaal eerst de feiten nodig hebt voordat je kunt gaan helpen'misschien ook iets gedaan' zegt en dat klinkt beschuldigend",
        isCorrect: false,
        feedback: "De beschuldigende ondertoon is inderdaad problematisch, maar het fundamentele probleem is breder: je mist de hele eerste stap van actief luisteren — het valideren van het gevoel.",
      },
    ],
    explanation: "Actief luisteren volgt drie stappen: 1) Erken het gevoel ('Wat naar voor je'), 2) Reflecteer terug ('Je bent boos en verdrietig'), 3) Verken verder ('Wil je me vertellen wat er gebeurde?'). Veel vaders springen direct naar stap 3 of naar oplossingen, en missen stap 1 en 2 — precies de stappen die verbinding bouwen.",
    research: "Gordon, T. (2000). Parent Effectiveness Training (P.E.T.); Faber, A. & Mazlish, E. (2012). How to Talk So Kids Will Listen",
  },

  {
    id: "vb_14",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "basis",
    order: 14,
    question: "Stijn (6) zegt: 'Ik vind school stom.' Welke reactie is een voorbeeld van valideren?",
    options: [
      {
        id: "a",
        text: "\'School is niet stom, je leert er heel veel!\' — zijn gevoel wordt hiermee ontkend'School is niet stom, je leert er heel veel!'",
        isCorrect: false,
        feedback: "Dit ontkent zijn beleving. Je corrigeert zijn gevoel in plaats van het te erkennen. Zijn ervaring is dat school stom voelt — dat is voor hem op dit moment waar.",
      },
      {
        id: "b",
        text: "\'Hmm, het klinkt alsof je geen leuke dag had. Wat maakte het stom vandaag?\''Hmm, het klinkt alsof je geen leuke dag had. Wat maakte het stom vandaag?'",
        isCorrect: true,
        feedback: "Correct. Je erkent zijn gevoel zonder het goed of fout te keuren, en je nodigt uit om meer te vertellen. Valideren = het gevoel erkennen als begrijpelijk, ook als je het er niet mee eens bent.",
      },
      {
        id: "c",
        text: "\'Als je school stom vindt, hoef je niet meer te gaan\' — dat is sarcastisch reageren'Als je school stom vindt, dan hoef je niet meer te gaan'",
        isCorrect: false,
        feedback: "Dit is geen valideren maar sarcastisch meegaan. Valideren erkent het gevoel serieus zonder de realiteit te ontkennen of te overdrijven.",
      },
    ],
    explanation: "Valideren betekent: het gevoel van je kind erkennen als begrijpelijk, zonder het te corrigeren, te bagatelliseren of te overdrijven. Het is niet hetzelfde als het eens zijn. Je kunt vinden dat school belangrijk is EN tegelijk erkennen dat hij het vandaag stom vond.",
    research: "Linehan, M. (1993). Cognitive-Behavioral Treatment of Borderline Personality Disorder; Gottman, J. (1997). Raising an Emotionally Intelligent Child",
  },

  {
    id: "vb_15",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 15,
    question: "Vera (10) vertelt je dat ze een slechte toets heeft gemaakt. Je wilt haar helpen en zegt: 'Volgende keer moet je eerder beginnen met leren.' Ze sluit zich af. Wat ging er mis in de communicatie?",
    options: [
      {
        id: "a",
        text: "Je advies was niet goed — je had haar een betere leerstrategie moeten aanbieden als hulp",
        isCorrect: false,
        feedback: "Het probleem is niet de kwaliteit van je advies maar de timing. Een ongevraagd advies op een kwetsbaar moment sluit de verbinding af in plaats van het te openen.",
      },
      {
        id: "b",
        text: "Je gaf ongevraagd advies terwijl ze erkenning nodig had; ze deelde een gevoel, geen probleem",
        isCorrect: true,
        feedback: "Precies. Vera zocht verbinding, niet een oplossing. Door meteen advies te geven, communiceer je impliciet: 'Het is jouw schuld en hier is hoe je het fixt.' Eerst valideren: 'Baal je? Dat snap ik.' Dan wachten of ze zelf om hulp vraagt.",
      },
      {
        id: "c",
        text: "Je had strenger moeten reageren zodat ze de consequentie van slecht leren echt gaat voelen",
        isCorrect: false,
        feedback: "Vera voelt de consequentie al — ze heeft een slechte toets en voelt zich rot. Strengheid stapelt schaamte op schaamte en sluit de communicatie definitief af.",
      },
    ],
    explanation: "De 'adviesreflex' is een van de grootste communicatieblokkers bij vaders. Als je kind iets deelt, is de eerste behoefte erkenning, niet advies. Ongevraagd advies communiceert: 'Je hebt het verkeerd gedaan.' Validatie communiceert: 'Ik snap hoe je je voelt.' Pas bij validatie blijft de deur open.",
    research: "Faber, A. & Mazlish, E. (2012). How to Talk So Kids Will Listen; Gordon, T. (2000). Parent Effectiveness Training",
  },

  {
    id: "vb_16",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 16,
    question: "Lars (9) vertelt je over een ruzie op het schoolplein. Je wilt meer begrijpen. Welke vraag opent het gesprek het meest?",
    options: [
      {
        id: "a",
        text: "\'Hoe was dat voor jou? Wat voelde je toen op dat moment precies?\''Hoe was dat voor jou? Wat voelde je op dat moment?' (hoe/wat-vraag gericht op beleving)",
        isCorrect: true,
        feedback: "Correct. Open vragen gericht op beleving ('hoe voelde dat', 'wat dacht je') openen het gesprek zonder te oordelen. Ze nodigen het kind uit om zijn innerlijke wereld te delen in plaats van zich te verdedigen.",
      },
      {
        id: "b",
        text: "\'Waarom deed je dat? Wat was jouw reden om dat zo aan te pakken?\''Waarom deed je dat?' (waarom-vraag)",
        isCorrect: false,
        feedback: "'Waarom' klinkt als een beschuldiging en dwingt tot rationalisatie. Een 9-jarige weet vaak niet waarom hij iets deed — de vraag creëert druk in plaats van openheid.",
      },
      {
        id: "c",
        text: "\'Was het jouw schuld of die van de ander? Wie begon er eigenlijk?\''Was het jouw schuld of die van de ander?' (gesloten keuzevraag)",
        isCorrect: false,
        feedback: "Een schuld-vraag dwingt tot kiezen en verdedigen. Het sluit nuance uit en maakt het gesprek een verhoor in plaats van een verkenning.",
      },
    ],
    explanation: "Open vragen beginnen met 'hoe', 'wat', 'vertel me meer'. Ze nodigen uit tot vertellen zonder te sturen. 'Waarom'-vragen voelen als verhoor en activeren verdediging. 'Hoe voelde dat?' activeert het emotionele brein en opent verbinding.",
    research: "Gordon, T. (2000). Parent Effectiveness Training (P.E.T.); Faber, A. & Mazlish, E. (2012). How to Talk So Kids Will Listen",
  },

  {
    id: "vb_17",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 17,
    question: "Bente (11) vertelt je voor het eerst over een jongen die ze leuk vindt. Je voelt ongemak en je eerste impuls is een grapje maken of het onderwerp te veranderen. Wat is de impact van jouw reactie op de communicatie op lange termijn?",
    options: [
      {
        id: "a",
        text: "Een grapje maakt het luchtiger en laat zien dat je er heel ontspannen mee omgaat als ouder",
        isCorrect: false,
        feedback: "Voor jou voelt het als luchtigheid, maar Bente leest het als: 'Papa neemt mijn gevoelens niet serieus.' Ze zal dit soort dingen niet meer delen.",
      },
      {
        id: "b",
        text: "Dit is een testmoment: luister je nu zonder oordeel, dan leert ze dat ze haar gevoelsleven kan delen",
        isCorrect: true,
        feedback: "Precies. Dit zijn 'gateway-momenten': de eerste keer dat een kind iets kwetsbaars deelt. Jouw reactie bepaalt of dit kanaal open blijft. Luister, toon interesse, stel een open vraag: 'Vertel, hoe is hij?' Dit bouwt de basis voor alle gesprekken die nog komen.",
      },
      {
        id: "c",
        text: "Op 11 jaar hoef je dit soort dingen nog helemaal niet zo serieus te nemen — ze is nog te jong",
        isCorrect: false,
        feedback: "Of je het serieus vindt of niet, voor haar is het bloedsereus. Je oordeel over de leeftijdstoepasselijkheid is irrelevant — haar beleving is wat telt voor de verbinding.",
      },
    ],
    explanation: "Gateway-momenten zijn de eerste keren dat een kind kwetsbare onderwerpen aansnijdt: verliefdheid, angst, twijfel, seksualiteit. De reactie van de vader op dat eerste moment bepaalt of het kind dit kanaal open houdt. Neutraal luisteren, oprechte interesse tonen en niet-oordelen zijn cruciaal — zelfs als je van binnen ongemak voelt.",
    research: "Siegel, D. & Bryson, T. (2014). No-Drama Discipline; Gordon, T. (2000). Parent Effectiveness Training",
  },

  {
    id: "vb_18",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 18,
    question: "Teun (8) zegt: 'Pien mag altijd langer opblijven en jij vindt haar leuker dan mij.' Je weet dat dit niet klopt — Pien (5) heeft een ander bedtijdritueel. Je eerste reactie is: 'Dat is niet waar, ik hou evenveel van jullie.' Waarom is dit geen effectieve communicatie?",
    options: [
      {
        id: "a",
        text: "Je ontkent zijn beleving door te corrigeren; eerst valideren is effectiever'Het voelt niet eerlijk, hè? Je voelt je soms minder gezien?') en dan samen verkennen wat hij nodig heeft",
        isCorrect: true,
        feedback: "Correct. Teun's gevoel erkennen is niet hetzelfde als het ermee eens zijn. 'Dat is niet waar' sluit het gesprek; 'Dat voelt niet eerlijk' opent het. Pas als hij zich gehoord voelt, kun je uitleggen waarom de bedtijden anders zijn.",
      },
      {
        id: "b",
        text: "Het is wél effectief — je stelt hem gerust door hem de waarheid te vertellen",
        isCorrect: false,
        feedback: "Feitelijke correctie raakt niet aan wat Teun voelt. Hij zoekt geen informatie maar erkenning. Zijn gevoel — zich minder gezien voelen — is echt, ook al klopt de conclusie niet.",
      },
      {
        id: "c",
        text: "Je moet de bedtijden gelijktrekken zodat hij geen reden heeft om te klagen",
        isCorrect: false,
        feedback: "Het gelijktrekken van regels lost het onderliggende gevoel niet op. Teun wil niet dezelfde bedtijd — hij wil weten dat hij evenveel waard is. Dat los je niet op met logistiek maar met verbinding.",
      },
    ],
    explanation: "Wanneer kinderen ongelijkheid benoemen, communiceren ze een gevoel, geen feit. 'Je vindt haar leuker' betekent: 'Ik voel me soms minder gezien.' De effectieve reactie valideert het gevoel eerst, en biedt dan perspectief. Correctie zonder validatie escaleert; validatie zonder correctie kan ook — het gevoel is vaak genoeg.",
    research: "Faber, A. & Mazlish, E. (2012). How to Talk So Kids Will Listen; Siegel, D. & Bryson, T. (2011). The Whole-Brain Child",
  },

  // ============================================================
  // MODULE 4: VERBINDING IN CONFLICTEN (Vragen 19-24)
  // Bid for connection, turning toward, verbinding herstellen na conflict
  // ============================================================

  {
    id: "vb_19",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "basis",
    order: 19,
    question: "Guus (6) schopt boos tegen de keukenkast omdat hij geen koekje mag. Jij wordt ook boos en zegt: 'Niet schoppen! Naar je kamer!' Achteraf merk je dat jullie de rest van de avond afstandelijk zijn. Vanuit Gottman's theorie over verbinding in conflicten — wat is er gebeurd?",
    options: [
      {
        id: "a",
        text: "Je hebt correct een grens gesteld — het schoppen moet direct worden gestopt door jou",
        isCorrect: false,
        feedback: "De grens was terecht, maar je miste de bid erachter. Guus' boosheid was óók een poging om verbinding te maken — hij kon zijn frustratie niet anders uiten. Straf zonder verbinding vergroot de afstand.",
      },
      {
        id: "b",
        text: "Je had hem het koekje moeten geven om het conflict te voorkomen en de rust te bewaren",
        isCorrect: false,
        feedback: "Grenzen opgeven voorkomt conflict maar ondermijnt veiligheid. Het gaat niet om het koekje, maar om hoe je de grens stelt terwijl je verbonden blijft.",
      },
      {
        id: "c",
        text: "Je hebt de grens gesteld vanuit boosheid in plaats van kalmte; dat ondermijnt de boodschap'turn against' gereageerd op een bid for connection die vermomd was als boos gedrag. Het schoppen was een onhandige poging om zijn frustratie te delen",
        isCorrect: true,
        feedback: "Precies. Achter lastig gedrag zit vaak een bid for connection. Guus had hulp nodig bij zijn frustratie. Effectiever: 'Je bent boos dat je geen koekje mag. Ik snap dat. Schoppen mag niet — maar je mag wel boos zijn.' Grens EN verbinding.",
      },
    ],
    explanation: "Gottman toont dat bids for connection niet altijd positief zijn. Boosheid, huilen en zelfs lastig gedrag kunnen verkapte bids zijn: 'Help me met wat ik voel.' De kunst is de bid te herkennen achter het gedrag en te reageren met 'turn toward': het gevoel erkennen terwijl je de grens op het gedrag houdt.",
    research: "Gottman, J. (2001). The Relationship Cure; Gottman, J. (1997). Raising an Emotionally Intelligent Child",
  },

  {
    id: "vb_20",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "basis",
    order: 20,
    question: "Jasmijn (7) zit aan tafel te eten en begint opeens te friemelen en te wiebelen. Je zegt geïrriteerd: 'Zit stil en eet door.' Ze wordt stiller en eet niet meer. Later blijkt dat een vriendin op school haar had uitgelachen. Welk patroon herken je achteraf?",
    options: [
      {
        id: "a",
        text: "Ze was gewoon onrustig omdat ze op dat moment te veel energie had om stil te zitten",
        isCorrect: false,
        feedback: "Het onrustige gedrag was een uiting van innerlijke spanning, geen overtollige energie. Kinderen communiceren stress vaak via hun lichaam als ze het niet in woorden kunnen vatten.",
      },
      {
        id: "b",
        text: "Haar onrust was een signaal van stress; door te corrigeren in plaats van af te stemmen mis je dat",
        isCorrect: true,
        feedback: "Correct. Niet alle bids zijn verbaal. Lichamelijke onrust, friemelen, stil worden — het zijn vaak signalen dat er iets speelt. Door afstemming ('Ik zie dat je onrustig bent, gaat het goed?') had je de bid herkend en verbinding gemaakt.",
      },
      {
        id: "c",
        text: "Je kon niet weten wat er was — kinderen moeten zelf leren zeggen wat er met hen aan de hand is",
        isCorrect: false,
        feedback: "Een 7-jarige heeft die vaardigheid nog niet volledig. Het is jouw taak als vader om non-verbale signalen te leren lezen. Wachten tot ze het zelf zegt, is wachten op iets waartoe ze nog niet in staat is.",
      },
    ],
    explanation: "Gottman benadrukt dat bids for connection vaak non-verbaal en subtiel zijn, vooral bij kinderen. Lichamelijke onrust, veranderd eetpatroon, terugtrekking — het zijn allemaal mogelijke bids. Vaders die leren deze signalen te 'lezen' en er op af te stemmen, vangen problemen vroeg en bouwen diepe verbinding.",
    research: "Gottman, J. (2001). The Relationship Cure; Gottman, J. & DeClaire, J. (2001). The Relationship Cure",
  },

  {
    id: "vb_21",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 21,
    question: "Pepijn (9) en jij hebben ruzie gehad over zijn schermtijd. Je hebt geschreeuwd en hij is huilend naar boven gerend. Een uur later is hij stil. Vanuit 'turning toward' — wat is de effectiefste manier om de verbinding te herstellen?",
    options: [
      {
        id: "a",
        text: "Wachten tot hij zelf naar beneden komt — hij heeft nu even de ruimte nodig om bij te komen",
        isCorrect: false,
        feedback: "Ruimte geven klinkt respectvol, maar het risico is dat Pepijn jouw afstand interpreteert als bevestiging dat je niet om hem geeft. Na een breuk is het aan de ouder om de eerste stap te zetten.",
      },
      {
        id: "b",
        text: "De volgende dag iets leuks samen doen en er dan niet meer over praten, gewoon verder gaan",
        isCorrect: false,
        feedback: "Iets leuks doen zonder het conflict te bespreken is vermijding, geen reparatie. Het onverwerkte conflict blijft als onzichtbare opname op de emotionele bankrekening staan.",
      },
      {
        id: "c",
        text: "Naar hem toe gaan, erkennen dat je te hard reageerde, en het gesprek samen weer heropenen'Ik schreeuwde en dat was niet oké. Het spijt me. Ik was gefrustreerd, maar zo had ik het niet moeten zeggen'",
        isCorrect: true,
        feedback: "Precies. Na een breuk in de verbinding is 'turning toward' actief herstellen: naar het kind toe gaan, je aandeel erkennen, en de relatie herstellen. Dit modelleert ook dat conflicten gerepareerd kunnen worden — een cruciale levensvaardigheid.",
      },
    ],
    explanation: "Gottman's 'turning toward' na conflict betekent actief de breuk repareren. Dit vereist: 1) naar het kind toe gaan (niet wachten), 2) je eigen aandeel erkennen, 3) het gevoel van het kind valideren, 4) samen verder kijken. Dit leert het kind: relaties kunnen breken EN hersteld worden.",
    research: "Gottman, J. (2011). The Science of Trust; Tronick, E. (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children",
  },

  {
    id: "vb_22",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 22,
    question: "Roos (5) en Thijs (8) ruziën over een speelgoedauto. Thijs pakt hem af en Roos huilt. Jij zegt tegen Thijs: 'Geef terug, zij is kleiner!' Thijs loopt boos weg. Hoe had je verbinding kunnen houden met beide kinderen?",
    options: [
      {
        id: "a",
        text: "Eerst beide gevoelens erkennen voordat je een oplossing zoekt voor het conflict'Roos, je bent verdrietig. Thijs, jij wilt ook graag spelen') en dan samen naar een oplossing zoeken, zodat geen van beiden zich afgewezen voelt",
        isCorrect: true,
        feedback: "Correct. Verbinding in conflicten met meerdere kinderen vereist dat je beide partijen ziet en valideert. Door partij te kiezen voor de jongste, maak je een opname bij de oudste. Beide gevoelens erkennen is 'turning toward' voor allebei.",
      },
      {
        id: "b",
        text: "Door het speelgoed af te pakken en te zeggen dat niemand ermee mag spelen vandaag",
        isCorrect: false,
        feedback: "Dit lost niets op en beschadigt het saldo met beide kinderen. Je straft zonder te verbinden en de onderliggende behoeften worden niet gezien.",
      },
      {
        id: "c",
        text: "Thijs de schuld geven omdat hij ouder is en dus beter zou moeten weten dan zijn zus",
        isCorrect: false,
        feedback: "Altijd het oudere kind de schuld geven ondermijnt de verbinding structureel. Thijs leert: bij papa trek ik altijd aan het kortste eind. Dit vergroot rivaliteit in plaats van verbinding.",
      },
    ],
    explanation: "Bij conflicten tussen kinderen is het verleidelijk om partij te kiezen. Maar vanuit verbindingsoogpunt moet je 'turning toward' toepassen voor beide kinderen: beide gevoelens valideren, het conflict als gedeeld probleem framen, en samen zoeken naar een oplossing. Zo voelen beide kinderen zich gezien.",
    research: "Faber, A. & Mazlish, E. (1987). Siblings Without Rivalry; Gottman, J. (2001). The Relationship Cure",
  },

  {
    id: "vb_23",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 23,
    question: "Amber (10) is al drie dagen boos op je omdat je haar zwemwedstrijd hebt gemist vanwege werk. Je hebt al twee keer sorry gezegd, maar ze blijft afstandelijk. Vanuit het concept van 'bids for connection' en 'turning toward' — wat is er aan de hand?",
    options: [
      {
        id: "a",
        text: "Ze manipuleert je met haar boosheid om je als ouder schuldig te laten voelen over je keuze",
        isCorrect: false,
        feedback: "Een 10-jarige die teleurgesteld is, manipuleert niet. Ze verwerkt een emotionele opname die groter is dan je denkt. Haar boosheid is een herhaalde bid: 'Begrijp je wel hoe belangrijk dit voor me was?'",
      },
      {
        id: "b",
        text: "Je moet het goedmaken met een extra speciaal uitje of een cadeau om het weer goed te maken",
        isCorrect: false,
        feedback: "Materiële compensatie omzeilt het emotionele proces. Amber wil niet iets krijgen — ze wil voelen dat je begrijpt wat het voor haar betekende.",
      },
      {
        id: "c",
        text: "Ze heeft emotionele erkenning nodig: dat je voelt wat zij voelde toen je er niet was",
        isCorrect: true,
        feedback: "Precies. 'Sorry' is cognitief, maar Amber heeft emotionele afstemming nodig. 'Turning toward' betekent hier: 'Ik stel me voor dat je daar stond, naar de tribune keek en mij niet zag. Dat moet zo teleurstellend zijn geweest.' Pas als ze voelt dat je het begrijpt, kan ze loslaten.",
      },
    ],
    explanation: "Wanneer een kind herhaaldelijk boos blijft na een excuus, is het excuus waarschijnlijk te cognitief geweest. Het kind zoekt geen feitelijke erkenning ('ik weet dat je boos bent') maar emotionele resonantie ('ik voel wat jij voelde'). Dit vraagt empathische verbeelding: je verplaatsen in het moment van het kind.",
    research: "Gottman, J. (2001). The Relationship Cure; Siegel, D. & Bryson, T. (2011). The Whole-Brain Child",
  },

  {
    id: "vb_24",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 24,
    question: "Casper (12) heeft gelogen over zijn huiswerk. Als je het ontdekt, word je boos. Casper zegt: 'Ik durfde het niet te zeggen want je wordt altijd boos.' Dit raakt je. Vanuit verbinding in conflicten — wat is de diepere boodschap en hoe reageer je?",
    options: [
      {
        id: "a",
        text: "Hij probeert de schuld om te draaien en jou van je stuk te brengen zodat hij niet gestraft wordt",
        isCorrect: false,
        feedback: "Het is verleidelijk om dit als manipulatie te zien, maar Casper geeft je cruciale informatie over jullie communicatiepatroon. Hij voelt zich niet veilig genoeg om eerlijk te zijn. Dat is een signaal, geen strategie.",
      },
      {
        id: "b",
        text: "Casper geeft een eerlijke bid for connection: hij wil veiligheid voelen ondanks zijn fout'Ik wil eerlijk zijn, maar onze interacties voelen niet veilig genoeg.' De gepaste reactie is eerst deze bid te erkennen en dan samen te kijken hoe jullie communicatie veiliger kan worden",
        isCorrect: true,
        feedback: "Correct. Dit is een van de moeilijkste vormen van 'turning toward': je kind geeft feedback over jouw gedrag, en jouw taak is dit te ontvangen in plaats van te verdedigen. 'Dank je dat je dat zegt. Ik wil dat je eerlijk durft te zijn. Laten we samen kijken hoe dat kan.'",
      },
      {
        id: "c",
        text: "Eerst de leugen bestraffen met consequenties, dan later het gesprek over veiligheid gaan voeren",
        isCorrect: false,
        feedback: "Door nu te straffen bevestig je precies wat hij zegt: 'Als ik eerlijk ben, word ik gestraft.' De leugen moet besproken worden, maar de veiligheid van de relatie gaat voor.",
      },
    ],
    explanation: "Wanneer een kind zegt 'ik durf het niet te zeggen omdat je boos wordt', is dat een bid for connection van het hoogste niveau: het kind riskeert kwetsbaarheid om de relatie te verbeteren. 'Turning toward' vereist hier dat de vader zijn eigen aandeel erkent zonder zich te verdedigen. Dit is moeilijk maar bouwt het diepste vertrouwen.",
    research: "Gottman, J. (2011). The Science of Trust; Gordon, T. (2000). Parent Effectiveness Training",
  },

  // ============================================================
  // MODULE 5: VADER-KINDRELATIE VERDIEPEN (Vragen 25-30)
  // Rituelen, quality time, gedeelde interesses
  // ============================================================

  {
    id: "vb_25",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "basis",
    order: 25,
    question: "Fleur (7) en jij hebben elk weekend samen een ritueel: zondagochtend fietsen naar de bakker en een croissantje eten. Op een zondag zegt je partner: 'Kan Fleur niet mee boodschappen doen? Ik heb hulp nodig.' Wat is het risico als je het ritueel opgeeft?",
    options: [
      {
        id: "a",
        text: "Geen risico — het is maar een croissantje, dat haal je volgende week gewoon weer in",
        isCorrect: false,
        feedback: "Voor jou is het een croissantje, voor Fleur is het een ankerpunt in haar week: voorspelbaar, exclusief, van jullie samen. Het opheffen raakt haar dieper dan je denkt.",
      },
      {
        id: "b",
        text: "Je kunt het compenseren door op een ander moment in de week samen te gaan fietsen dan",
        isCorrect: false,
        feedback: "Flexibiliteit is soms nodig, maar de kracht van een ritueel zit in de vaste tijd, plek en vorm. Verschuiven verdunt de betekenis. Beter: het ritueel beschermen en een andere oplossing zoeken voor de boodschappen.",
      },
      {
        id: "c",
        text: "Het ritueel is een betrouwbare storting; afzeggen ondermijnt het vertrouwen en de band",
        isCorrect: true,
        feedback: "Correct. Rituelen krijgen hun kracht door betrouwbaarheid. Eenmalig missen is menselijk, maar een patroon van afzeggen doet het ritueel zijn functie verliezen als veilig ankerpunt. Bescherm de rituelen die je hebt.",
      },
    ],
    explanation: "Vader-kindrituelen zijn 'heilige momenten' die hun kracht ontlenen aan voorspelbaarheid en exclusiviteit. Het gaat niet om de activiteit (fietsen, bakker) maar om de betrouwbaarheid: 'Elke zondag is van ons.' Bescherm deze rituelen actief — ze zijn de pilaren van de verbinding.",
    research: "Fiese, B. (2006). Family Routines and Rituals. Yale University Press; Pleck, J. (2010). Paternal Involvement",
  },

  {
    id: "vb_26",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "basis",
    order: 26,
    question: "Stijn (10) is helemaal in de ban van dinosaurussen. Jij hebt daar nul interesse in. Hij praat er constant over en wil dat je naar zijn dinosaurusboeken kijkt. Wat is de meest verbindende aanpak?",
    options: [
      {
        id: "a",
        text: "Eerlijk zeggen dat je dinosaurussen saai vindt — kinderen waarderen eerlijkheid van hun ouders",
        isCorrect: false,
        feedback: "Eerlijkheid is belangrijk, maar 'ik vind jouw passie saai' is niet eerlijkheid — het is afwijzing. Je hoeft dinosaurussen niet leuk te vinden, maar je kunt zijn enthousiasme wél omarmen.",
      },
      {
        id: "b",
        text: "Een compromis sluiten: als hij naar jouw voetbalwedstrijd kijkt, kijk jij naar zijn dinosaurussen",
        isCorrect: false,
        feedback: "Een ruilhandel maakt verbinding transactioneel. Het gaat niet om eerlijk verdelen maar om onvoorwaardelijke interesse in zijn wereld. Hij is 10 — het is niet zijn taak om in jouw interesses te investeren.",
      },
      {
        id: "c",
        text: "Interesse tonen in zijn passie, niet om de dino\'s maar om hem — via zijn interesse leer je hem kennen'Welke is de coolste en waarom?'",
        isCorrect: true,
        feedback: "Precies. Quality time via gedeelde interesses betekent niet dat je de interesse zelf moet delen — je deelt het enthousiasme van je kind. 'Vertel me alles' communiceert: 'Jij bent interessant voor mij.' Dat is de diepste vorm van verbinding.",
      },
    ],
    explanation: "Gedeelde interesses hoeven niet wederzijds te zijn. De kracht zit erin dat de vader zich verdiept in de wereld van het kind, niet andersom. Door vragen te stellen over zijn passie, communiceert de vader: 'Jij bent het waard om te leren kennen.' Dit bouwt een relatie die ver voorbij dinosaurussen reikt.",
    research: "Lamb, M. (2010). The Role of the Father in Child Development; Pleck, J. (2010). Paternal Involvement",
  },

  {
    id: "vb_27",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 27,
    question: "Nienke (11) stelt voor om samen te koken. Jij vindt dat leuk en begint het recept te leiden: 'Eerst snijd jij de uien, dan doe ik de rest.' Nienke haakt na tien minuten af. Wat ging er mis in termen van quality time?",
    options: [
      {
        id: "a",
        text: "Je maakte van quality time een taak; echte quality time is samen ontdekken, haar laten leiden",
        isCorrect: true,
        feedback: "Correct. Quality time wordt vernietigd door taakgerichtheid. Het doel is niet een goed gerecht maar een gedeelde ervaring. Laat haar kiezen wat jullie maken, samen rommelen, samen lachen als het mislukt. Het proces is het product.",
      },
      {
        id: "b",
        text: "Ze heeft gewoon een kort concentratievermogen en is daardoor snel verveeld bij dit soort dingen",
        isCorrect: false,
        feedback: "Nienke stelde zelf voor om samen te koken — motivatie was er. Ze haakte af omdat het 'samen' veranderde in een taakgerichte instructie. Ze wilde verbinding, niet een opdracht.",
      },
      {
        id: "c",
        text: "Koken is eigenlijk geen geschikte activiteit voor quality time met kinderen van deze leeftijd",
        isCorrect: false,
        feedback: "Koken is juist een uitstekende quality time-activiteit — maar alleen als het een gedeelde, gelijkwaardige ervaring is, niet een ouder-geeft-instructies-setting.",
      },
    ],
    explanation: "Veel vaders saboteren quality time onbewust door in 'manager-modus' te schieten: instructies geven, efficiëntie nastreven, het resultaat controleren. Maar quality time gaat over samen ZIJN, niet samen PRESTEREN. De kwaliteit zit in de gelijkwaardigheid van het moment, niet in het eindresultaat.",
    research: "Pleck, J. (2010). Paternal Involvement; Lamb, M. (2010). The Role of the Father in Child Development",
  },

  {
    id: "vb_28",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 28,
    question: "Lars (8) en jij hebben een traditie: elke woensdagmiddag samen naar het voetbalveldje. Lars wordt nu 9 en zegt: 'Ik vind voetbal eigenlijk niet meer zo leuk. Kan ik ook thuisblijven?' Je voelt teleurstelling. Hoe verdiep je de relatie?",
    options: [
      {
        id: "a",
        text: "Uitleggen hoe belangrijk dit ritueel voor jullie is en hem overtuigen om gewoon door te gaan",
        isCorrect: false,
        feedback: "Door vast te houden aan de vorm (voetbal) verlies je de inhoud (verbinding). Als het ritueel alleen voor jou werkt, is het geen gedeeld ritueel meer maar een verplichting.",
      },
      {
        id: "b",
        text: "Zijn veranderende interesse respecteren en samen een nieuw passend ritueel creëren'Wat zouden we wél samen kunnen doen op woensdag?' Zo evolueert het ritueel mee met hem",
        isCorrect: true,
        feedback: "Precies. De kern van het ritueel (woensdagmiddag samen) is waardevol; de vorm (voetbal) mag veranderen. Door hem mede-eigenaar te maken van het nieuwe ritueel, verdiep je de relatie: je laat zien dat het om HEM gaat, niet om voetbal.",
      },
      {
        id: "c",
        text: "Het ritueel helemaal stoppen en afwachten of er vanzelf iets nieuws ontstaat tussen jullie",
        isCorrect: false,
        feedback: "Passief wachten riskeert dat het moment verdampt. Rituelen vereisen intentionaliteit. Actief samen een nieuw ritueel vormgeven behoudt de structuur en vernieuwt de inhoud.",
      },
    ],
    explanation: "Rituelen moeten meegroeien met het kind. De kern (vast moment, samen, exclusief) blijft; de vorm past zich aan. Een vader die dit begrijpt, houdt niet vast aan zijn eigen voorkeur maar volgt de ontwikkeling van zijn kind. Dit communiceert: 'Ik ben geïnteresseerd in wie je wordt, niet alleen in wie je was.'",
    research: "Fiese, B. (2006). Family Routines and Rituals. Yale University Press",
  },

  {
    id: "vb_29",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 29,
    question: "Pien (12) trekt zich steeds meer terug in haar eigen wereld: telefoon, vriendinnen, eigen kamer. Jij voelt de verbinding afnemen en mist hoe het vroeger was. Je probeert 'quality time' te forceren door filmavonden te organiseren, maar ze reageert lauw. Wat is de diepere dynamiek?",
    options: [
      {
        id: "a",
        text: "Dit is normaal pubergedrag — je moet gewoon accepteren dat ze je niet meer zo nodig heeft als vroeger",
        isCorrect: false,
        feedback: "Pubers hebben hun vader nog steeds hard nodig, maar op een andere manier. Accepteren dat de verbinding verdwijnt is opgeven; de uitdaging is een nieuwe vorm van verbinding vinden die past bij haar leeftijd.",
      },
      {
        id: "b",
        text: "Je moet duidelijke regels stellen over haar schermtijd zodat er weer ruimte komt voor familietijd samen",
        isCorrect: false,
        feedback: "Regels over schermtijd kunnen nuttig zijn, maar ze creëren geen verbinding — ze creëren beschikbare tijd. Wat je met die tijd doet, bepaalt of er verbinding ontstaat. Zonder aansluiting bij haar wereld blijft geforceerde familietijd hol.",
      },
      {
        id: "c",
        text: "Quality time met een 12-jarige vraagt aansluiting bij haar wereld: haar muziek, vrienden, op haar tempo",
        isCorrect: true,
        feedback: "Precies. De vader moet zijn verbindingsstrategie updaten. Een 12-jarige wil geen geprogrammeerde filmavond, maar een vader die af en toe naast haar op de bank zit, vraagt naar haar favoriete TikTokker, of mee wil luisteren naar haar muziek. Beschikbaarheid zonder druk is de sleutel.",
      },
    ],
    explanation: "De vader-kindrelatie moet zich in de puberteit opnieuw uitvinden. Vaders die vasthouden aan verbindingsvormen uit de kindertijd, ervaren afwijzing. De sleutel is 'volgen zonder te duwen': interesse tonen in haar wereld, beschikbaar zijn zonder te claimen, en kleine momenten van verbinding herkennen in plaats van grote te forceren.",
    research: "Steinberg, L. (2001). We Know Some Things: Adolescent-Parent Relationships in Retrospect and Prospect. Journal of Research on Adolescence; Lamb, M. (2010). The Role of the Father in Child Development",
  },

  {
    id: "vb_30",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 30,
    question: "Vera (9) vraagt je op een stille avond: 'Papa, wat was jij voor kind toen je klein was?' Je aarzelt — je jeugd was niet altijd makkelijk. Hoe verdiept dit moment de vader-kindrelatie?",
    options: [
      {
        id: "a",
        text: "Je moet eerlijk alles vertellen — kinderen hebben recht op de volledige waarheid over jouw verleden",
        isCorrect: false,
        feedback: "Volledige eerlijkheid zonder filter is niet leeftijdsadequaat. Een 9-jarige hoeft niet alles te weten. Maar een gefilterd, eerlijk antwoord is krachtig.",
      },
      {
        id: "b",
        text: "Door iets persoonlijks te delen maak je de relatie wederkerig; Vera leert dat papa ook een mens is",
        isCorrect: true,
        feedback: "Precies. Zelfopenbaring die past bij de leeftijd van het kind is een van de krachtigste verbindingsmiddelen. 'Ik was soms ook bang op school' maakt je menselijk. Het verschuift de relatie van hiërarchie naar verbinding. Vera voelt zich waardig genoeg om jouw echte verhaal te horen.",
      },
      {
        id: "c",
        text: "Je moet het onderwerp afkappen — je verleden is niet relevant voor haar opvoeding of voor haar leven",
        isCorrect: false,
        feedback: "Je verleden is juist zeer relevant. Vera probeert jou als heel mens te leren kennen. Door af te kappen, communiceer je: er zijn delen van mij die jij niet mag kennen. Dat creëert afstand.",
      },
    ],
    explanation: "Leeftijdspassende zelfopenbaring verdiept de vader-kindrelatie doordat het kind de vader als heel mens leert kennen. Dit creëert wederkerigheid: niet alleen het kind deelt, ook de vader deelt. Onderzoek toont dat kinderen van ouders die gepast delen over hun eigen ervaringen, een diepere hechtingsrelatie ontwikkelen en zelf ook opener communiceren.",
    research: "Fivush, R. et al. (2006). Elaborating on Elaborations: Maternal Reminiscing Style and Children's Socioemotional Outcomes. Child Development; Lamb, M. (2010). The Role of the Father in Child Development",
  },

];

export const REFLECTIE_TRAINING: TrainingItem[] = [

  // ============================================================
  // MODULE 1: DE STEM VAN JE VADER (Vragen 1-6)
  // Generatiepatronen, 3 paden, ACE
  // ============================================================

  {
    id: "rf_1",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "basis",
    order: 1,
    question: "Je zoon (6) morst zijn melk. Je hoort jezelf zeggen: 'Kun je nooit eens opletten?!' Direct daarna schrik je — dat zei jouw vader ook altijd. Wat gebeurt hier?",
    context: "Onderzoek toont dat 70% van opvoedgedrag onbewust wordt overgenomen van de eigen opvoeding.",
    options: [
      {
        id: "a",
        text: "Een onbewust generatiepatroon — je herhaalt automatisch wat je zelf hebt gehoord",
        isCorrect: true,
        feedback: "Correct! 70% van opvoedgedrag is onbewust aangeleerd. In stressmomenten vallen we terug op 'de stem van onze vader'. Bewustzijn is stap 1 naar verandering.",
      },
      {
        id: "b",
        text: "Je bent een slechte vader die zijn kind afkraakt en niet goed reageert op fouten",
        isCorrect: false,
        feedback: "Nee. Het feit dat je schrikt van je eigen woorden toont bewustzijn. Dit is geen slechtheid maar een onbewust patroon dat geactiveerd wordt.",
      },
      {
        id: "c",
        text: "Het is gewoon een heel normale reactie op gemorste melk, iedereen zou dit zeggen",
        isCorrect: false,
        feedback: "Het is normaal in de zin dat veel ouders het doen, maar het is niet neutraal. 'Kun je nooit eens opletten?' beschadigt het zelfbeeld. Er zijn betere reacties.",
      },
    ],
    explanation: "Generatiepatronen werken als 'emotionele reflexen': in stress activeert het brein de snelste, meest ingesleten route — en dat zijn de patronen uit je eigen jeugd. Bewustzijn ('ik hoor mijn vader') is het begin van doorbreken.",
    research: "Siegel, D. & Hartzell, M. (2003). Parenting from the Inside Out",
  },

  {
    id: "rf_2",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 2,
    question: "Een vader groeide op met een strenge, afstandelijke vader. Nu hij zelf vader is, zijn er 3 mogelijke paden. Welk pad is het meest constructief?",
    options: [
      {
        id: "a",
        text: "Herhalen: net zo streng zijn als zijn vader was, omdat hij er ook goed is uitgekomen'Ik ben er ook goed uitgekomen')",
        isCorrect: false,
        feedback: "Herhalen is het onbewuste pad. 'Ik ben er ook goed uitgekomen' is vaak rationalisatie van pijn die je niet wilt voelen.",
      },
      {
        id: "b",
        text: "Bewust kiezen: reflecteren op wat je wilt behouden en wat je wilt veranderen",
        isCorrect: true,
        feedback: "Correct! Het derde pad: bewust kiezen. Niet blind herhalen, niet blind overcorrigeren, maar reflecteren en intentioneel kiezen welke vader je wilt zijn.",
      },
      {
        id: "c",
        text: "Overcorrigeren: het tegenovergestelde doen en nooit enige grenzen durven stellen",
        isCorrect: false,
        feedback: "Overcorrigeren klinkt beter maar creëert nieuwe problemen. Een vader die nooit grenzen stelt uit angst voor zijn eigen vader, geeft zijn kind ook geen veiligheid.",
      },
    ],
    explanation: "De 3 paden bij generatiepatronen: 1) Herhalen (onbewust kopiëren) 2) Overcorrigeren (tegenovergestelde doen) 3) Bewust kiezen (reflecteren en intentioneel handelen). Pad 3 vereist de meeste moed maar levert de beste resultaten.",
    research: "Siegel, D. & Hartzell, M. (2003). Parenting from the Inside Out",
  },

  {
    id: "rf_3",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "basis",
    order: 3,
    question: "Wat toont onderzoek over hoeveel procent van ons opvoedgedrag onbewust wordt overgenomen van onze eigen ouders?",
    options: [
      {
        id: "a",
        text: "Ongeveer 20% — de meeste ouders vinden uiteindelijk hun eigen stijl",
        isCorrect: false,
        feedback: "Veel te laag. De invloed van onze eigen opvoeding is veel groter dan we denken, vooral in stressmomenten.",
      },
      {
        id: "b",
        text: "100% — je kunt er helemaal niets aan veranderen, het ligt vast",
        isCorrect: false,
        feedback: "Gelukkig niet. Hoewel de invloed groot is, kun je patronen doorbreken door bewustzijn en actieve reflectie. Neuroplasticiteit maakt verandering mogelijk.",
      },
      {
        id: "c",
        text: "Ongeveer 70% — het meeste gedrag is onbewust van hen aangeleerd",
        isCorrect: true,
        feedback: "Correct! Ongeveer 70% van opvoedgedrag is onbewust overgenomen. Dit is geen veroordeling maar een oproep tot bewustzijn. Wat je niet bewust maakt, herhaalt zich.",
      },
    ],
    explanation: "De 70% is geen lot maar een startpunt. Neuroplasticiteit betekent: je brein kan nieuwe patronen aanleggen op elke leeftijd. Maar je moet eerst weten wát je herhaalt, voordat je het kunt veranderen.",
    research: "Siegel, D. & Hartzell, M. (2003). Parenting from the Inside Out",
  },

  {
    id: "rf_4",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 4,
    question: "Je dochter (9) huilt omdat ze een slechte toets heeft. Je merkt dat je innerlijk verhardend reageert: 'Niet zo aanstellen, het is maar een cijfer.' Later realiseer je dat jouw vader precies zo reageerde op jouw teleurstellingen. Wat is de meest effectieve volgende stap?",
    options: [
      {
        id: "a",
        text: "Het patroon benoemen zonder oordeel en dan bewust een andere keuze maken'Ik merk dat ik verhardde, net als mijn vader deed. Ik wil het anders doen.' En dan alsnog verbinden met je dochter",
        isCorrect: true,
        feedback: "Perfect! Bewust waarnemen zonder oordeel, het patroon herkennen, en dan een nieuwe keuze maken. Dit is het doorbreken van de cyclus in real-time.",
      },
      {
        id: "b",
        text: "Jezelf verwijten dat je precies hetzelfde doet als je eigen vader altijd deed",
        isCorrect: false,
        feedback: "Zelfverwijt houdt het patroon in stand. Schuldgevoel leidt tot vermijding, niet tot verandering.",
      },
      {
        id: "c",
        text: "Niets doen — je vader had wellicht gelijk, het was maar een enkel schoolcijfer",
        isCorrect: false,
        feedback: "Dit is rationalisatie: je vaders stem overnemen als waarheid. Haar verdriet is echt, ongeacht of jij het 'logisch' vindt.",
      },
    ],
    explanation: "Het doorbreken van generatiepatronen heeft 3 stappen: 1) Herkennen ('Ik doe wat mijn vader deed') 2) Pauzeren (niet direct reageren) 3) Kiezen ('Ik wil het anders doen'). Elke keer dat je dit doet, legt je brein een nieuw neuraal pad aan.",
    research: "Siegel, D. & Hartzell, M. (2003). Parenting from the Inside Out",
  },

  {
    id: "rf_5",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 5,
    question: "Het ACE-onderzoek (Adverse Childhood Experiences) van Felitti toont dat negatieve jeugdervaringen cumulatief effect hebben. Een vader met een ACE-score van 4+ heeft een significant verhoogd risico op welk opvoedpatroon?",
    options: [
      {
        id: "a",
        text: "Hij zal per definitie een slechte vader zijn die zijn kinderen niet goed kan opvoeden",
        isCorrect: false,
        feedback: "Absoluut niet. Een hoge ACE-score is een risicofactor, geen veroordeling. Bewustzijn en verwerking kunnen het risico drastisch verlagen.",
      },
      {
        id: "b",
        text: "Emotionele reactiviteit onder stress — sneller schreeuwen of emotioneel afsluiten",
        isCorrect: true,
        feedback: "Correct. Een hoge ACE-score betekent dat het stresssysteem gevoeliger is afgesteld. Onder druk is de kans groter op reactieve patronen. Maar: bewustzijn + therapie kunnen dit doorbreken.",
      },
      {
        id: "c",
        text: "Hij zal zijn kinderen verwennen om te compenseren voor wat hij zelf heeft doorgemaakt",
        isCorrect: false,
        feedback: "Overcompensatie komt voor, maar het kernrisico is reactiviteit: het stresssysteem is gevoeliger afgesteld door vroege ervaringen.",
      },
    ],
    explanation: "Het ACE-onderzoek (Felitti, 1998) toont: hoe meer negatieve jeugdervaringen, hoe gevoeliger het stresssysteem. Dit is geen veroordeling maar een uitnodiging: als je weet dat je stresssysteem gevoelig is, kun je er bewust mee omgaan.",
    research: "Felitti, V. et al. (1998). Relationship of Childhood Abuse to Many of the Leading Causes of Death in Adults. American Journal of Preventive Medicine",
  },

  {
    id: "rf_6",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "basis",
    order: 6,
    question: "Je zoon (4) wil op schoot en knuffelen. Je merkt dat je je daar ongemakkelijk bij voelt — in jouw gezin werd niet geknuffeld. Wat is er aan de hand?",
    options: [
      {
        id: "a",
        text: "Wat je niet hebt ontvangen voelt onnatuurlijk om te geven — maar je kunt het aanleren",
        isCorrect: true,
        feedback: "Correct! Fysieke warmte die je niet hebt ervaren voelt als 'vreemde taal'. Maar neuroplasticiteit werkt: hoe vaker je knuffelt, hoe natuurlijker het wordt. Begin klein.",
      },
      {
        id: "b",
        text: "Je houdt niet genoeg van je zoon en dat uit zich in het vermijden van lichamelijk contact",
        isCorrect: false,
        feedback: "Dit gaat niet over liefde. Je houdt van hem, maar fysieke affectie is niet aangeleerd. Wat je niet hebt ervaren, voelt onnatuurlijk — maar je kunt het leren.",
      },
      {
        id: "c",
        text: "Mannen zijn van nature niet knuffelig, dat is biologisch bepaald en daar doe je niets aan",
        isCorrect: false,
        feedback: "Mythe. Vaders produceren oxytocine bij fysiek contact met hun kind, net als moeders. Het is aangeleerd gedrag, niet biologie.",
      },
    ],
    explanation: "Onze 'comfort zone' in opvoeding wordt bepaald door wat we zelf hebben ervaren. Wat je niet hebt ontvangen (knuffels, lof, emotionele openheid) voelt ongemakkelijk om te geven. Dit is normaal — en veranderbaar.",
    research: "Lamb, M. (2010). The Role of the Father in Child Development (5th ed.)",
  },

  // ============================================================
  // MODULE 2: JE INNERLIJKE CRITICUS (Vragen 7-12)
  // IFS-model, innerlijke stemmen, zelfcompassie
  // ============================================================

  {
    id: "rf_7",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 7,
    question: "Na een avond waarin je tegen je dochter (7) hebt geschreeuwd, lig je in bed. Een stem in je hoofd zegt: 'Je bent een waardeloze vader. Je kinderen verdienen beter.' Wat is dit vanuit het IFS-model?",
    options: [
      {
        id: "a",
        text: "De waarheid — je bent inderdaad gewoon een slechte vader en dat blijkt nu weer eens",
        isCorrect: false,
        feedback: "Dit is een gedachte, niet de waarheid. Het feit dat je er wakker van ligt, toont dat je een betrokken vader bent. Slechte vaders liggen hier niet van wakker.",
      },
      {
        id: "b",
        text: "Een rationele analyse van je kwaliteiten als ouder, gebaseerd op de feiten van vandaag",
        isCorrect: false,
        feedback: "Niets rationeels aan 'waardeloos'. Dit is een emotionele reactie, geen analyse. De criticus spreekt in absoluten ('nooit', 'altijd', 'waardeloos').",
      },
      {
        id: "c",
        text: "De innerlijke criticus — een beschermend deel dat je wil motiveren door je klein te maken",
        isCorrect: true,
        feedback: "Correct! In IFS is de criticus een 'beschermer' die je probeert te motiveren door schaamte. Paradoxaal: hoe harder de criticus, hoe slechter je functioneert als vader.",
      },
    ],
    explanation: "Het IFS-model (Schwartz) ziet de psyche als een systeem van 'delen'. De criticus is een beschermer die via schaamte probeert te voorkomen dat je het opnieuw fout doet. Maar schaamte verlamt — het maakt je juist een slechtere vader. Zelfcompassie werkt beter.",
    research: "Schwartz, R. (1995). Internal Family Systems Therapy. Guilford Press",
  },

  {
    id: "rf_8",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "basis",
    order: 8,
    question: "Wat is het verschil tussen een gedachte en de waarheid?",
    context: "De innerlijke criticus spreekt alsof zijn oordelen feiten zijn.",
    options: [
      {
        id: "a",
        text: "Er is geen verschil — als je het denkt, dan is het ook gewoon waar",
        isCorrect: false,
        feedback: "Gedachten zijn geen feiten. Je brein produceert duizenden gedachten per dag, de meeste zijn automatisch en onnauwkeurig.",
      },
      {
        id: "b",
        text: "Een gedachte is een mentale gebeurtenis, geen feit dat vaststaat'Ik ben een slechte vader' is een gedachte, geen waarheid",
        isCorrect: true,
        feedback: "Correct! Gedachten zijn mentale events, geen feiten. Je kunt een gedachte observeren zonder erin te geloven. Dit is de kern van cognitieve defusie.",
      },
      {
        id: "c",
        text: "Gedachten zijn altijd onwaar en moet je het beste gewoon negeren",
        isCorrect: false,
        feedback: "Niet alle gedachten zijn onwaar, maar ze zijn ook niet allemaal waar. De vaardigheid is: gedachten observeren en toetsen, niet blind geloven of negeren.",
      },
    ],
    explanation: "Cognitieve defusie (ACT-therapie): het vermogen om afstand te nemen van je gedachten. Niet 'ik BEN een slechte vader' maar 'ik HEB de gedachte dat ik een slechte vader ben.' Dit kleine verschil verandert alles.",
    research: "Hayes, S. (2005). Get Out of Your Mind and Into Your Life. New Harbinger",
  },

  {
    id: "rf_9",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 9,
    question: "In het IFS-model heeft ieder mens naast een criticus ook een 'gewonde kind'-deel. Een vader die als kind vaak werd gekleineerd, merkt dat hij uitbarst als zijn zoon (8) hem 'dom' noemt. Wat wordt hier geactiveerd?",
    options: [
      {
        id: "a",
        text: "Terechte boosheid — een kind mag zijn vader niet dom noemen, dat is respectloos gedrag",
        isCorrect: false,
        feedback: "Het gedrag van het kind mag je begrenzen, maar de intensiteit van je reactie (uitbarsting) wijst op een diepere trigger dan het huidige moment.",
      },
      {
        id: "b",
        text: "Een gezonde vader-reactie op disrespect: je stelt een duidelijke grens en dat hoort zo",
        isCorrect: false,
        feedback: "Een grens stellen op 'dom' is gezond. Maar een uitbarsting is disproportioneel en wijst op een oude wond die geraakt wordt.",
      },
      {
        id: "c",
        text: "Het gewonde kind-deel: de pijn van vroeger wordt opnieuw geactiveerd door zijn opmerking",
        isCorrect: true,
        feedback: "Correct! Als je reactie groter is dan de situatie rechtvaardigt, wordt een 'exile' (gewond deel) geactiveerd. Je reageert niet op je zoon van 8, maar op de pijn van je eigen jeugd.",
      },
    ],
    explanation: "IFS onderscheidt 'exiles' (gewonde delen die pijn dragen) en 'protectors' (delen die de pijn proberen te voorkomen). Als je zoon 'dom' zegt, wordt het exile geactiveerd, en springt de protector (woede) in actie. De woede beschermt de oude pijn.",
    research: "Schwartz, R. (1995). Internal Family Systems Therapy. Guilford Press",
  },

  {
    id: "rf_10",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 10,
    question: "Een vader merkt dat hij twee innerlijke stemmen heeft: één die zegt 'Wees strenger, anders wordt hij een watje' en één die zegt 'Wees zachter, je beschadigt hem'. Hij voelt zich verlamd. Wat is de IFS-benadering?",
    options: [
      {
        id: "a",
        text: "Eén van de twee stemmen heeft gelijk — je moet kiezen welke de juiste is voor jou",
        isCorrect: false,
        feedback: "Beide stemmen zijn 'delen' met een positieve intentie. Ze kiezen werkt niet — ze integreren wel.",
      },
      {
        id: "b",
        text: "De stemmen negeren en gewoon puur op je eigen intuïtie en buikgevoel gaan vertrouwen",
        isCorrect: false,
        feedback: "Negeren werkt niet — onderdrukte delen worden luider. De kunst is luisteren zonder je te identificeren met één stem.",
      },
      {
        id: "c",
        text: "Beide stemmen erkennen als beschermende delen en vanuit je kern bewust gaan kiezen'Self' een derde weg kiezen",
        isCorrect: true,
        feedback: "Correct! In IFS is de 'Self' de kern die beide delen kan horen zonder erdoor overgenomen te worden. Vanuit Self kun je strengheid EN zachtheid integreren.",
      },
    ],
    explanation: "Het IFS-model: de 'Self' is je kernwezen — kalm, nieuwsgierig, compassievol. Delen (criticus, beschermer, gewond kind) zijn geen vijanden maar beschermers met goede intenties. Vanuit Self kun je alle delen horen en bewust kiezen.",
    research: "Schwartz, R. (1995). Internal Family Systems Therapy. Guilford Press",
  },

  {
    id: "rf_11",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "basis",
    order: 11,
    question: "Je hebt een rotdag gehad als vader: geschreeuwd, ongeduldig geweest, tv aangezet om rust te krijgen. Wat helpt het meest om hiervan te herstellen?",
    options: [
      {
        id: "a",
        text: "Jezelf straffen met schuldgevoel: je verdient het om je slecht te voelen over vandaag'Ik verdien het niet om vader te zijn'",
        isCorrect: false,
        feedback: "Schuldgevoel verlamt. Het maakt je morgen geen betere vader — het maakt je een vermoeide vader met schuldgevoel.",
      },
      {
        id: "b",
        text: "Zelfcompassie: erkennen dat het zwaar was en morgen een nieuwe kans grijpen als vader'Dit was een moeilijke dag. Ik ben niet perfect en dat hoeft ook niet. Morgen probeer ik het opnieuw'",
        isCorrect: true,
        feedback: "Correct! Zelfcompassie is geen excuus maar brandstof. Onderzoek toont: ouders met zelfcompassie herstellen sneller en herhalen fouten minder.",
      },
      {
        id: "c",
        text: "Vergeten en doorgaan — morgen is een nieuwe dag en wat voorbij is, is voorbij voor nu",
        isCorrect: false,
        feedback: "Vergeten = niet reflecteren. Zelfcompassie + reflectie: erken de dag, leer ervan, ga verder zonder zelfveroordeling.",
      },
    ],
    explanation: "Kristin Neff's 3 componenten van zelfcompassie: 1) Mindfulness (erkennen dat het moeilijk was) 2) Common humanity (alle ouders hebben dit) 3) Self-kindness (jezelf behandelen zoals je een vriend zou behandelen).",
    research: "Neff, K. (2011). Self-Compassion: The Proven Power of Being Kind to Yourself",
  },

  {
    id: "rf_12",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 12,
    question: "Een vader zegt: 'Zelfcompassie is een excuus om niet beter te worden. Ik moet streng voor mezelf zijn, anders verander ik niet.' Wat toont het onderzoek?",
    options: [
      {
        id: "a",
        text: "Hij heeft gelijk — zelfkritiek motiveert tot verbetering en houdt je scherp als vader",
        isCorrect: false,
        feedback: "Zelfkritiek motiveert kortstondig maar leidt tot burnout, vermijding en schaamtecycli. Het is de minst effectieve motivator.",
      },
      {
        id: "b",
        text: "Zelfcompassie leidt tot meer verandering — het geeft moed om fouten te erkennen",
        isCorrect: true,
        feedback: "Correct! Neff's onderzoek toont: zelfcompassie correleert met meer motivatie, minder uitstelgedrag, en sneller herstel na fouten. Strengheid verlamt, compassie activeert.",
      },
      {
        id: "c",
        text: "Zelfcompassie en zelfkritiek zijn even effectief, het is puur een persoonlijke keuze",
        isCorrect: false,
        feedback: "Niet even effectief. Zelfcompassie is bewezen effectiever voor duurzame gedragsverandering. Zelfkritiek werkt alleen op korte termijn.",
      },
    ],
    explanation: "Het paradoxale: zelfcompassie maakt je een BETERE vader dan zelfkritiek. Waarom? Omdat je fouten kunt erkennen zonder te verdrinken in schaamte. En alleen erkende fouten kun je veranderen.",
    research: "Neff, K. & Germer, C. (2018). The Mindful Self-Compassion Workbook",
  },

  // ============================================================
  // MODULE 3: VADER-IDENTITEIT (Vragen 13-18)
  // Identiteitsshift, rollen, waarden-kompas
  // ============================================================

  {
    id: "rf_13",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "basis",
    order: 13,
    question: "Een man wordt vader. Zijn hele leven verandert: minder slaap, minder vrijheid, meer verantwoordelijkheid. Hij voelt zich 'verdwalen' in het vaderschap. Wat is er aan de hand?",
    options: [
      {
        id: "a",
        text: "Hij is niet geschikt als vader en zou het eigenlijk niet moeten zijn, gezien hoe hij zich voelt",
        isCorrect: false,
        feedback: "Dit gevoel is bijna universeel. Identiteitsverandering hoort bij de transitie naar vaderschap. Het is normaal en tijdelijk.",
      },
      {
        id: "b",
        text: "Hij heeft een postnatale depressie en moet direct naar een psycholoog voor professionele hulp",
        isCorrect: false,
        feedback: "Postnatale depressie bij vaders bestaat en is serieus, maar identiteitsverlies alleen is niet per definitie depressie. Het is een normale transitie.",
      },
      {
        id: "c",
        text: "Een identiteitsshift: zijn oude identiteit botst met zijn nieuwe rol en dat voelt als verlies",
        isCorrect: true,
        feedback: "Correct! Vaderschap is een identiteitscrisis (in positieve zin). Je oude zelf moet ruimte maken voor een nieuw zelf. Dit proces heet 'matrescence' voor moeders — voor vaders is het net zo reëel.",
      },
    ],
    explanation: "De transitie naar vaderschap is een van de grootste identiteitsshifts in een mannenleven. Onderzoek toont: 1 op 10 vaders ervaart een postnatale depressie. Maar zelfs zonder depressie is de identiteitsshift ingrijpend en verdient erkenning.",
    research: "Paulson, J. & Bazemore, S. (2010). Prenatal and Postpartum Depression in Fathers. JAMA",
  },

  {
    id: "rf_14",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 14,
    question: "Een vader zegt: 'Ik ben de kostwinner, dat is mijn bijdrage.' Hij werkt hard maar is weinig emotioneel betrokken. Welke vaderrol mist hij?",
    options: [
      {
        id: "a",
        text: "Niets — financieel zorgen is de belangrijkste vadertaak en hij doet dat al heel goed",
        isCorrect: false,
        feedback: "Financieel zorgen is waardevol maar niet genoeg. Kinderen hebben emotionele aanwezigheid nodig, niet alleen materiële zekerheid.",
      },
      {
        id: "b",
        text: "De rol van verzorger en emotionele coach — vaderschap is meer dan financieel zorgen",
        isCorrect: true,
        feedback: "Correct! Vaderschap kent meerdere rollen: kostwinner, beschermer, maar ook verzorger, emotionele coach, en speelkameraad. Financiële zorg is belangrijk maar niet voldoende voor hechting.",
      },
      {
        id: "c",
        text: "De rol van disciplineerder — hij moet naast werken ook thuis duidelijke grenzen stellen",
        isCorrect: false,
        feedback: "Grenzen zijn belangrijk, maar de missende rol is emotionele betrokkenheid. Hij hoeft geen politieagent te worden maar een emotioneel aanwezige vader.",
      },
    ],
    explanation: "Lamb's vaderrollen: 1) Kostwinner 2) Beschermer 3) Disciplineerder 4) Verzorger 5) Emotionele coach 6) Speelkameraad. Traditioneel focusten vaders op 1-3. Modern vaderschap vereist ook 4-6.",
    research: "Lamb, M. (2010). The Role of the Father in Child Development (5th ed.)",
  },

  {
    id: "rf_15",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 15,
    question: "Een vader van drie kinderen (3, 6, 9) voelt zich constant tekortschieten. Hij vergelijkt zich met 'Instagram-vaders' en voelt schuld. Wat is het verschil tussen 'wie je bent' en 'wat je doet'?",
    options: [
      {
        id: "a",
        text: "Wie je bent is stabiel; wat je doet varieert — een slechte dag maakt je geen slechte vader",
        isCorrect: true,
        feedback: "Correct! Je kern (liefdevol, betrokken willen zijn) verandert niet door een slechte dag. Gedrag fluctueert; identiteit is dieper. Je bent niet je slechtste momenten.",
      },
      {
        id: "b",
        text: "Er is geen verschil — je bent simpelweg wat je doet, daar kun je niet omheen als vader",
        isCorrect: false,
        feedback: "Dit is een destructieve overtuiging. Als je alleen bent wat je doet, dan is elke slechte dag een bewijs dat je een slechte vader bent. Identiteit ≠ gedrag.",
      },
      {
        id: "c",
        text: "Wat je doet is het enige dat telt — goede intenties zijn niets waard zonder goede acties",
        isCorrect: false,
        feedback: "Intenties zonder actie zijn onvoldoende, maar intenties zijn het kompas. Een vader die WILT veranderen is fundamenteel anders dan een vader die het niet kan schelen.",
      },
    ],
    explanation: "Het waarden-kompas: je waarden (liefde, betrokkenheid, geduld) zijn je richting. Je gedrag is hoe dicht je die dag bij je richting komt. Sommige dagen wijk je af. Maar het kompas wijst nog steeds dezelfde kant op.",
    research: "Hayes, S. (2005). Get Out of Your Mind and Into Your Life. New Harbinger",
  },

  {
    id: "rf_16",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "basis",
    order: 16,
    question: "Een vader vraagt zich af: 'Welke vader wil ik zijn?' Welke methode helpt het meest om dit te beantwoorden?",
    options: [
      {
        id: "a",
        text: "Jezelf afvragen: welke vader wil ik zijn en welke waarden wil ik overdragen?'Wat wil ik dat mijn kind over 20 jaar over mij zegt?' en van daaruit terugwerken naar vandaag",
        isCorrect: true,
        feedback: "Correct! De 'toekomstbrief' oefening: je kind is 25 en beschrijft jou als vader. Wat wil je dat ze zegt? Dit onthult je kernwaarden als vader.",
      },
      {
        id: "b",
        text: "Kijken naar andere vaders in je omgeving en kopiëren wat zij goed lijken te doen",
        isCorrect: false,
        feedback: "Kopiëren leidt tot een onecht vaderschap. Wat werkt voor een andere vader werkt niet per se voor jou. Je moet je eigen waarden ontdekken.",
      },
      {
        id: "c",
        text: "Opvoedboeken lezen en de regels daaruit zo precies mogelijk opvolgen thuis",
        isCorrect: false,
        feedback: "Boeken geven kennis, maar niet jouw identiteit. De vraag is niet 'wat moet een vader doen' maar 'welke vader wil IK zijn, vanuit MIJN waarden.'",
      },
    ],
    explanation: "Vader-identiteit begint bij waarden, niet bij regels. De 'toekomstbrief' werkt omdat het je dwingt voorbij het dagelijkse te kijken. Het gaat niet om de perfecte vader zijn maar om een intentionele vader zijn.",
    research: "Doherty, W. (2000). The Intentional Family: Simple Rituals to Strengthen Family Ties",
  },

  {
    id: "rf_17",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 17,
    question: "Een vader van een dochter (5) zegt: 'Ik weet niet hoe ik met meisjes moet omgaan. Met een zoon had ik het makkelijker gevonden.' Welke aanname zit hierachter?",
    options: [
      {
        id: "a",
        text: "Een terechte aanname — vaders zijn biologisch beter afgestemd op zonen dan op dochters",
        isCorrect: false,
        feedback: "Mythe. Onderzoek toont dat vaders net zo sterk kunnen hechten aan dochters als aan zonen. Het verschil is aangeleerd, niet biologisch.",
      },
      {
        id: "b",
        text: "Hij moet zich aanpassen aan meisjes-activiteiten: poppen en prinsessen en dat soort dingen",
        isCorrect: false,
        feedback: "Het gaat niet om typische 'meisjes-activiteiten' maar om verbinding. Wat jullie samen doen is minder belangrijk dan HOE jullie het doen.",
      },
      {
        id: "c",
        text: "De aanname dat vaderschap bepaalde activiteiten vereist klopt niet — verbinding is neutraal",
        isCorrect: true,
        feedback: "Correct! Hij verwart vaderrollen met specifieke activiteiten. Een vader die met zijn dochter tekent, kookt of praat bouwt net zoveel hechting als een vader die voetbalt met zijn zoon.",
      },
    ],
    explanation: "Vader-identiteit hoeft niet genderspecifiek te zijn. De kern is verbinding, niet activiteit. Een vader die echt aanwezig is bij tekenen bouwt meer hechting dan een vader die afwezig voetbalt. Het gaat om HOE, niet WAT.",
    research: "Lamb, M. (2010). The Role of the Father in Child Development (5th ed.)",
  },

  {
    id: "rf_18",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 18,
    question: "Een vader heeft altijd zijn werk als kern-identiteit gehad. Na de geboorte van zijn zoon (nu 2) voelt hij een innerlijk conflict: werk geeft status en zekerheid, maar vaderschap geeft betekenis. Hij voelt zich verscheurd. Wat is het onderliggende thema?",
    options: [
      {
        id: "a",
        text: "Identiteitsexpansie: hij hoeft niet te kiezen maar kan zijn identiteit uitbreiden",
        isCorrect: true,
        feedback: "Correct! Vaderschap vereist geen amputatie van je oude identiteit maar een expansie. Je bent niet minder professional door vader te zijn — je bent meer.",
      },
      {
        id: "b",
        text: "Hij moet kiezen: carrière of vaderschap — beide tegelijk gaat nu eenmaal niet goed",
        isCorrect: false,
        feedback: "Het is geen of/of keuze. De vraag is: hoe integreer je beide identiteiten? Veel vaders worstelen met dit en-en in plaats van of-of.",
      },
      {
        id: "c",
        text: "Hij is egoïstisch omdat hij aan zijn carrière denkt terwijl hij vader is geworden",
        isCorrect: false,
        feedback: "Niet egoïstisch. Een vader die zingeving haalt uit werk kan dat combineren met betrokken vaderschap. Het één sluit het ander niet uit.",
      },
    ],
    explanation: "De identiteitsexpansie bij vaderschap: je wordt niet minder van wie je was, je wordt meer. De uitdaging is integratie: hoe kun je een betrokken vader EN een gedreven professional zijn? Dit vereist bewuste keuzes over prioriteiten.",
    research: "Palkovitz, R. (2002). Involved Fathering and Men's Adult Development. Lawrence Erlbaum",
  },

  // ============================================================
  // MODULE 4: EMOTIONELE ERFENIS (Vragen 19-24)
  // Transgenerationele overdracht, epigenetica, doorbreken cyclus
  // ============================================================

  {
    id: "rf_19",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 19,
    question: "Onderzoek naar transgenerationele overdracht toont iets verbazingwekkends: de stress van je GROOTVADER kan je opvoedstijl beïnvloeden, zelfs als je hem nooit hebt gekend. Hoe werkt dit?",
    options: [
      {
        id: "a",
        text: "Via verhalen die worden doorverteld in de familie, van generatie op generatie lang",
        isCorrect: false,
        feedback: "Verhalen spelen een rol, maar het mechanisme is dieper. Stress verandert letterlijk de genexpressie die wordt doorgegeven.",
      },
      {
        id: "b",
        text: "Dit is wetenschappelijk niet bewezen, het is een mythe zonder enige onderbouwing",
        isCorrect: false,
        feedback: "Het is wel degelijk bewezen. Onderzoek bij nakomelingen van Holocaustoverlevenden en hongersnoodslachtoffers toont epigenetische veranderingen tot 3 generaties later.",
      },
      {
        id: "c",
        text: "Via epigenetica: extreme stress verandert genexpressie en dat wordt doorgegeven",
        isCorrect: true,
        feedback: "Correct! Epigenetisch onderzoek toont: trauma verandert de 'aan/uit-schakelaars' van genen (methylering). Deze veranderingen worden doorgegeven via sperma en eicel.",
      },
    ],
    explanation: "Epigenetica: je DNA verandert niet, maar de 'leeswijze' van je DNA wel. Extreme stress (oorlog, honger, mishandeling) verandert methyleringspatronen. Deze worden doorgegeven. Je draagt letterlijk de stress van je voorouders mee.",
    research: "Yehuda, R. et al. (2016). Holocaust Exposure Induced Intergenerational Effects on FKBP5 Methylation. Biological Psychiatry",
  },

  {
    id: "rf_20",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 20,
    question: "Een vader ontdekt dat zijn overgrootvader in de oorlog heeft gevochten, zijn grootvader alcoholist was, en zijn vader emotioneel afwezig. Hij ziet het patroon: onverwerkt trauma wordt doorgegeven. Wat is het krachtigste dat hij kan doen?",
    options: [
      {
        id: "a",
        text: "De familie-geschiedenis vergeten en alleen maar naar de toekomst vooruit kijken",
        isCorrect: false,
        feedback: "Vergeten is geen verwerken. Wat je niet bewust maakt, geef je onbewust door. Vooruit kijken kan pas na achteruit kijken.",
      },
      {
        id: "b",
        text: "Zijn kinderen beschermen door nooit over het verleden te praten met hen thuis",
        isCorrect: false,
        feedback: "Zwijgen beschermt niet. Kinderen voelen de spanning en vullen de leegte met eigen angsten. Leeftijdsgeschikte openheid is gezonder dan stilte.",
      },
      {
        id: "c",
        text: "De cyclus doorbreken door zijn eigen onverwerkte pijn te gaan verwerken nu'transitiegeneratie'",
        isCorrect: true,
        feedback: "Correct! De transitiegeneratie: de vader die zegt 'het stopt bij mij'. Door eigen verwerking verander je niet alleen je eigen opvoeding maar ook de epigenetische overdracht aan je kinderen.",
      },
    ],
    explanation: "De 'transitiegeneratie' is het krachtigste concept in transgenerationeel trauma: één vader die bewust kiest om de cyclus te doorbreken. Dit vereist: 1) Het patroon herkennen 2) Eigen pijn verwerken 3) Bewust anders opvoeden.",
    research: "Van der Kolk, B. (2014). The Body Keeps the Score. Viking",
  },

  {
    id: "rf_21",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "basis",
    order: 21,
    question: "Een vader (35) huilde nooit als kind — zijn vader zei altijd: 'Mannen huilen niet.' Nu ziet hij dat zijn zoon (6) ook zijn tranen inhoudt bij verdriet. Wat gebeurt hier?",
    options: [
      {
        id: "a",
        text: "Het patroon herhaalt zich: zijn zoon leert emoties te onderdrukken, net als hij'mannen huilen niet' wordt onbewust doorgegeven — het kind kopieert de emotionele regels van zijn vader",
        isCorrect: true,
        feedback: "Correct! Kinderen leren emotionele regels door observatie, niet door woorden. Als papa nooit huilt, leert het kind: huilen = niet oké. Het patroon gaat door.",
      },
      {
        id: "b",
        text: "Zijn zoon is stoer, dat is goed — niet alle jongens hoeven te huilen om gezond te zijn",
        isCorrect: false,
        feedback: "Emoties inhouden is niet stoer maar schadelijk. Onderdrukte emoties leiden tot stress, agressie of depressie later in het leven.",
      },
      {
        id: "c",
        text: "Sommige jongens huilen gewoon minder, dat is biologisch bepaald en niet aangeleerd",
        isCorrect: false,
        feedback: "Babylongetjes huilen net zoveel als meisjes. Het verschil ontstaat door socialisatie: jongens leren al jong dat emoties tonen 'zwak' is.",
      },
    ],
    explanation: "Emotionele erfenis: je geeft niet alleen je DNA door maar ook je emotionele regels. 'Mannen huilen niet' is een onuitgesproken familieregel die generaties meegaat — totdat iemand hem bewust doorbreekt.",
    research: "Levant, R. (1998). Desperately Seeking Language: Understanding, Assessing, and Treating Normative Male Alexithymia",
  },

  {
    id: "rf_22",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 22,
    question: "Een vader beseft dat hij onverwerkt verlies draagt: zijn ouders scheidden toen hij 8 was en daar is nooit over gepraat. Nu hij vader is, merkt hij dat hij extreem angstig wordt bij elk conflict met zijn partner. Wat is het verband?",
    options: [
      {
        id: "a",
        text: "Er is geen verband — hij is gewoon van nature een angstig persoon, dat is karakter",
        isCorrect: false,
        feedback: "De timing en trigger wijzen op een verband. Conflictsituaties activeren de onverwerkte angst uit zijn jeugd: 'Als er conflict is, valt het gezin uit elkaar.'",
      },
      {
        id: "b",
        text: "Onverwerkt verlies creëert een hypergevoelig alarmsysteem: conflict activeert de pijn",
        isCorrect: true,
        feedback: "Correct! Onverwerkt verlies zet het alarmsysteem op scherp. Conflict → onbewuste associatie met scheiding → paniek. Dit is geen zwakte maar een onverwerkte wond.",
      },
      {
        id: "c",
        text: "Hij moet leren om conflicten in zijn relatie te vermijden zodat de angst niet opkomt",
        isCorrect: false,
        feedback: "Vermijden versterkt de angst. Het antwoord is verwerking: de oude pijn verwerken zodat huidig conflict niet meer de oude wond activeert.",
      },
    ],
    explanation: "Onverwerkt verlies werkt als een sensitiserend filter: het kleurt huidige ervaringen met oude angst. Het brein maakt geen onderscheid tussen 'oud' en 'nieuw' gevaar. Verwerking (therapie, reflectie) deconditioneert het alarmsysteem.",
    research: "Main, M. & Hesse, E. (1990). Parents' Unresolved Traumatic Experiences. In: Attachment in the Preschool Years",
  },

  {
    id: "rf_23",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 23,
    question: "Onderzoek van Main & Hesse toont dat de beste voorspeller voor de hechtingsstijl van een kind NIET is wat de ouder heeft meegemaakt, maar iets anders. Wat?",
    options: [
      {
        id: "a",
        text: "Hoe coherent de ouder over zijn eigen jeugd kan vertellen — verwerking telt",
        isCorrect: true,
        feedback: "Correct! Het Adult Attachment Interview toont: ouders die coherent over hun jeugd praten (ook als die moeilijk was) hebben vaker veilig gehechte kinderen. Verwerking > ervaring.",
      },
      {
        id: "b",
        text: "Hoeveel geld het gezin heeft — financiële zekerheid is de belangrijkste factor",
        isCorrect: false,
        feedback: "Sociaaleconomische status speelt een rol maar is niet de beste voorspeller. Het gaat om psychologische verwerking.",
      },
      {
        id: "c",
        text: "Of de ouder zelf veilig gehecht was als kind — de stijl wordt één op één gekopieerd",
        isCorrect: false,
        feedback: "Eigen hechtingsstijl speelt mee, maar is veranderbaar. De sleutel is verwerking: kun je je verhaal vertellen met begrip en samenhang?",
      },
    ],
    explanation: "Het revolutionaire inzicht van Main & Hesse: niet WAT je hebt meegemaakt bepaalt hoe je ouder bent, maar hoe je het hebt VERWERKT. Een vader met een moeilijke jeugd die deze heeft verwerkt, kan een uitstekende vader zijn.",
    research: "Main, M. & Hesse, E. (1990). Parents' Unresolved Traumatic Experiences. In: Greenberg, Cicchetti & Cummings (Eds.), Attachment in the Preschool Years",
  },

  {
    id: "rf_24",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 24,
    question: "Een vader zegt: 'Mijn vader sloeg me en ik ben er goed uitgekomen. Een klap nooit iemand kwaad gedaan.' Welk psychologisch mechanisme is hier actief?",
    options: [
      {
        id: "a",
        text: "Rationalisatie: het is te pijnlijk om toe te geven dat je ouder je pijn deed",
        isCorrect: true,
        feedback: "Correct! Rationalisatie beschermt tegen de pijn van erkenning: 'Als het niet erg was, hoef ik er niet om te rouwen.' Het is een beschermingsmechanisme, geen objectieve analyse.",
      },
      {
        id: "b",
        text: "Hij heeft gelijk — hij is er inderdaad goed uitgekomen en dat bewijst het al",
        isCorrect: false,
        feedback: "Het feit dat hij fysieke straf normaliseert, suggereert dat de impact dieper zit dan hij beseft. 'Ik ben er goed uitgekomen' is vaak een onbewuste verdediging.",
      },
      {
        id: "c",
        text: "Misschien heeft hij gelijk — niet elke klap is per definitie schadelijk geweest",
        isCorrect: false,
        feedback: "Meta-analyses zijn duidelijk: fysieke straf correleert met agressie, angst en depressie bij kinderen. Er is geen 'veilige dosis'.",
      },
    ],
    explanation: "Rationalisatie is een bescherming tegen onverwerkte pijn. 'Ik ben er goed uitgekomen' betekent vaak: 'Ik wil niet voelen hoe pijnlijk het was.' Het doorbreken van de cyclus begint bij het toelaten van die pijn.",
    research: "Gershoff, E. (2002). Corporal Punishment by Parents and Associated Child Behaviors. Psychological Bulletin",
  },

  // ============================================================
  // MODULE 5: BEWUST VADERSCHAP (Vragen 25-30)
  // Mindful parenting, zelfcompassie, groei-mindset, reflectie als praktijk
  // ============================================================

  {
    id: "rf_25",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "basis",
    order: 25,
    question: "Wat betekent 'mindful parenting' in de praktijk?",
    options: [
      {
        id: "a",
        text: "Elke dag mediteren voordat je je kinderen ziet, zodat je kalm en bewust bent als ouder",
        isCorrect: false,
        feedback: "Meditatie kan helpen maar is niet de kern. Mindful parenting gaat om aanwezigheid IN de interactie, niet alleen ervoor.",
      },
      {
        id: "b",
        text: "Met volle aandacht en zonder automatische piloot aanwezig zijn bij je kind",
        isCorrect: true,
        feedback: "Correct! Mindful parenting = de automatische piloot uitschakelen. Even pauzeren tussen trigger en reactie. Waarnemen wat je kind doet EN wat het bij jou oproept.",
      },
      {
        id: "c",
        text: "Nooit boos worden op je kinderen — altijd kalm en beheerst reageren in alle situaties",
        isCorrect: false,
        feedback: "Mindfulness is niet emotieloos zijn. Je mag boos worden. Het gaat erom dat je je boosheid OPMERKT voordat je erop reageert.",
      },
    ],
    explanation: "Mindful parenting (Bögels & Restifo): 1) Volle aandacht bij je kind 2) Niet-oordelend waarnemen 3) Emotioneel bewustzijn (van jezelf en je kind) 4) Zelfregulatie in de ouder-kindrelatie.",
    research: "Bögels, S. & Restifo, K. (2014). Mindful Parenting. Springer",
  },

  {
    id: "rf_26",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 26,
    question: "Een vader probeert bewuster op te voeden. Na twee weken 'faalt' hij: hij schreeuwt weer tegen zijn dochter (8). Hij denkt: 'Zie je, het werkt niet. Ik verander nooit.' Welke mindset herken je?",
    options: [
      {
        id: "a",
        text: "Gezond zelfinzicht — hij kent zijn beperkingen en is daar realistisch over als vader",
        isCorrect: false,
        feedback: "Eén terugval na twee weken is geen beperking maar normaal. Gedragsverandering verloopt via vallen en opstaan, niet via een rechte lijn.",
      },
      {
        id: "b",
        text: "Realisme — sommige mensen veranderen gewoon niet, dat is nu eenmaal hoe het werkt",
        isCorrect: false,
        feedback: "Dit is geen realisme maar defaitisme. Neuroplasticiteit bewijst: het brein verandert op elke leeftijd. Verandering is langzaam maar reëel.",
      },
      {
        id: "c",
        text: "Fixed mindset — hij ziet één terugval als bewijs dat verandering onmogelijk is",
        isCorrect: true,
        feedback: "Correct! Fixed mindset: 'Ik ben wie ik ben, ik kan niet veranderen.' Growth mindset zou zijn: 'Ik ben teruggevallen, maar dat hoort bij het leerproces.'",
      },
    ],
    explanation: "Dweck's growth mindset toegepast op ouderschap: fouten zijn geen bewijs van falen maar onderdeel van het leerproces. De vraag is niet 'waarom viel ik terug?' maar 'wat kan ik leren van deze terugval?'",
    research: "Dweck, C. (2006). Mindset: The New Psychology of Success. Random House",
  },

  {
    id: "rf_27",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "basis",
    order: 27,
    question: "Kristin Neff beschrijft 3 componenten van zelfcompassie. Welke combinatie is correct?",
    options: [
      {
        id: "a",
        text: "Zelfmedelijden, vergelijking met andere ouders, en voortdurende strenge zelfkritiek",
        isCorrect: false,
        feedback: "Dit is het tegenovergestelde van zelfcompassie. Zelfmedelijden is niet hetzelfde als zelfcompassie — het eerste isoleert, het tweede verbindt.",
      },
      {
        id: "b",
        text: "Mindfulness, common humanity (je bent niet de enige), en self-kindness",
        isCorrect: true,
        feedback: "Correct! 1) Mindfulness: 'Dit is moeilijk' 2) Common humanity: 'Alle ouders worstelen hiermee' 3) Self-kindness: 'Ik verdien dezelfde vriendelijkheid die ik mijn kind geef.'",
      },
      {
        id: "c",
        text: "Positief denken, je fouten vergeten, en altijd optimistisch blijven als ouder",
        isCorrect: false,
        feedback: "Zelfcompassie is geen toxic positivity. Het erkent de pijn ('dit is moeilijk') in plaats van het weg te positief-denken.",
      },
    ],
    explanation: "Zelfcompassie voor vaders: 1) 'Ja, ik heb geschreeuwd, dat was niet goed' (mindfulness) 2) 'Veel vaders worstelen hiermee' (common humanity) 3) 'Ik ga morgen opnieuw proberen' (self-kindness).",
    research: "Neff, K. (2011). Self-Compassion: The Proven Power of Being Kind to Yourself",
  },

  {
    id: "rf_28",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 28,
    question: "Een vader wil reflectie als dagelijkse praktijk invoeren. Wat is het meest haalbare en effectieve moment?",
    options: [
      {
        id: "a",
        text: "Een uur per week journaling op zondag — dan heb je de meeste rust en overzicht",
        isCorrect: false,
        feedback: "Beter dan niets, maar te weinig frequent. Dagelijkse korte reflectie is effectiever dan wekelijkse lange sessies.",
      },
      {
        id: "b",
        text: "Alleen reflecteren na een moeilijk moment — dan is het vers en voelt het relevant",
        isCorrect: false,
        feedback: "Reflecteren na moeilijke momenten is waardevol, maar alleen reactief. Dagelijkse reflectie bouwt het vermogen op om moeilijke momenten te VOORKOMEN.",
      },
      {
        id: "c",
        text: "Elke avond 2 minuten: wat ging goed vandaag en wat wil ik morgen anders doen?'Wat ging goed? Wat zou ik anders doen? Hoe voelde mijn kind zich vandaag?'",
        isCorrect: true,
        feedback: "Correct! Micro-reflectie: kort, dagelijks, concreet. 3 vragen, 2 minuten. Dit bouwt het reflexieve vermogen op zonder overweldigend te zijn.",
      },
    ],
    explanation: "Reflectie als dagelijkse praktijk: 3 vragen voor het slapengaan. 1) Wat ging goed? (positieve bekrachtiging) 2) Wat zou ik anders doen? (leren zonder oordeel) 3) Hoe voelde mijn kind zich? (empathie-training).",
    research: "Siegel, D. & Hartzell, M. (2003). Parenting from the Inside Out",
  },

  {
    id: "rf_29",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 29,
    question: "Het concept van de 'good enough' vader (Winnicott) stelt dat perfectie niet alleen onhaalbaar maar zelfs SCHADELIJK is. Waarom?",
    options: [
      {
        id: "a",
        text: "Omdat perfecte vaders geen tijd overhouden voor zichzelf en daardoor opbranden uiteindelijk",
        isCorrect: false,
        feedback: "Zelfzorg is belangrijk, maar dat is niet de kern van Winnicott's argument. Het gaat om wat het kind leert.",
      },
      {
        id: "b",
        text: "Omdat een kind dat nooit frustratie ervaart, niet leert omgaan met de imperfecte wereld's fouten zijn leermomenten",
        isCorrect: true,
        feedback: "Correct! Winnicott's inzicht: een kind heeft kleine, draagbare frustraties nodig om veerkracht te ontwikkelen. Een 'perfecte' vader ontneemt het kind die leerkansen.",
      },
      {
        id: "c",
        text: "Omdat perfectie saai is voor het kind — kinderen hebben juist afwisseling en verrassing nodig",
        isCorrect: false,
        feedback: "Het gaat dieper dan verveling. Het gaat om de ontwikkeling van frustratietolerantie en zelfstandigheid.",
      },
    ],
    explanation: "Winnicott's 'good enough' moeder/vader: het kind heeft een ouder nodig die MEESTAL beschikbaar is, maar niet ALTIJD. De kleine 'falen' (te laat, even ongeduldig, niet meteen reageren) leren het kind: de wereld is niet perfect, en dat is oké.",
    research: "Winnicott, D.W. (1953). Transitional Objects and Transitional Phenomena. International Journal of Psycho-Analysis",
  },

  {
    id: "rf_30",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "basis",
    order: 30,
    question: "Na het lezen over generatiepatronen, innerlijke criticus en emotionele erfenis voelt een vader zich overweldigd. Hij denkt: 'Er is zoveel mis met me, ik kan dit nooit fixen.' Wat is de kernboodschap van bewust vaderschap?",
    options: [
      {
        id: "a",
        text: "Je hoeft niet perfect te zijn — bewustzijn is al de helft van de verandering",
        isCorrect: true,
        feedback: "Correct! Bewust vaderschap is geen eindbestemming maar een dagelijks proces. Elke keer dat je een patroon herkent en anders kiest, verander je de toekomst van je kind.",
      },
      {
        id: "b",
        text: "Je moet al je trauma\'s eerst verwerken voor je een goede vader kunt zijn thuis's verwerken voordat je een goede vader kunt zijn",
        isCorrect: false,
        feedback: "Dit is een perfectionistische valkuil. Je hoeft niet 'klaar' te zijn om een goede vader te zijn. Bewust worden is al genoeg om de cyclus te doorbreken.",
      },
      {
        id: "c",
        text: "Zelfkennis is overgewaardeerd — gewoon je best doen als vader is meer dan genoeg",
        isCorrect: false,
        feedback: "'Je best doen' zonder bewustzijn herhaalt onbewuste patronen. Bewustzijn + je best doen = de combinatie die werkt.",
      },
    ],
    explanation: "De reis van bewust vaderschap eindigt niet. Het is geen checklist maar een levenshouding: elke dag opnieuw kiezen welke vader je wilt zijn. Niet perfect, wel bewust. Niet foutloos, wel lerend. Dat is genoeg.",
    research: "Kabat-Zinn, J. & Kabat-Zinn, M. (1997). Everyday Blessings: The Inner Work of Mindful Parenting",
  },

];

// Master getter
export function getTrainingForSkill(skill: Skill, activeThemes: ThemeTag[] = []): TrainingItem[] {
  const map: Record<Skill, TrainingItem[]> = {
    "Emotiecoaching": EMOTIECOACHING_TRAINING,
    "Zelfregulatie": ZELFREGULATIE_TRAINING,
    "Aanwezigheid": AANWEZIGHEID_TRAINING,
    "Grenzen": GRENZEN_TRAINING,
    "Autonomie": AUTONOMIE_TRAINING,
    "Herstel": HERSTEL_TRAINING,
    "Verbinding": VERBINDING_TRAINING,
    "Reflectie": REFLECTIE_TRAINING,
  };
  const base = map[skill] || [];

  // Voeg themed training items toe als themes actief zijn
  if (activeThemes.length > 0) {
    const allThemed = [...BONUSKIND_TRAINING, ...GEDRAG_TRAINING];
    const matching = allThemed.filter(
      (t) => t.skill === skill && t.themes?.some((tag) => activeThemes.includes(tag))
    );
    return [...base, ...matching].sort((a, b) => a.order - b.order);
  }

  // CRITICAL: Always sort by order to ensure correct sequence
  return base.sort((a, b) => a.order - b.order);
}
