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

  // ============================================================
  // UITBREIDING: EMOTIECOACHING GEVORDERD & EXPERT (Vragen 31-50)
  // Pubers, secundaire emoties, alexithymie, emotionele invalidatie
  // ============================================================

  {
    id: "ec_31",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "basis",
    order: 31,
    question: "Sem (5) wil het licht aan in zijn slaapkamer omdat hij bang is voor monsters. Je partner zegt: 'Er bestaan geen monsters, ga slapen.' Sem begint te huilen. Wat is de beste reactie vanuit emotiecoaching?",
    options: [
      {
        id: "a",
        text: "Samen met Sem onder het bed kijken en laten zien dat er geen monsters zijn",
        isCorrect: false,
        feedback: "Dit bedoelt goed maar ontkent zijn beleving. Rationeel bewijzen dat monsters niet bestaan werkt niet als zijn amygdala in alarm staat. Zijn angst is echt, ook al is de oorzaak dat niet."
      },
      {
        id: "b",
        text: "'Je bent bang in het donker. Dat is een naar gevoel. Ik blijf even bij je.' (validatie + nabijheid)",
        isCorrect: true,
        feedback: "Perfect! Je valideert de emotie (angst) zonder in te gaan op de inhoud (monsters). Zijn amygdala heeft jouw kalmte nodig, niet een logisch betoog."
      },
      {
        id: "c",
        text: "'Grote jongens zijn niet bang. Je broer slaapt ook gewoon in het donker.'",
        isCorrect: false,
        feedback: "Vergelijken met zijn broer voegt schaamte toe aan angst. Hij leert: mijn gevoel is fout EN ik ben minder dan mijn broer. Dubbele invalidatie."
      },
    ],
    explanation: "Angst in het donker is neurologisch reeel bij jonge kinderen: hun prefrontale cortex kan fantasie en werkelijkheid nog niet volledig scheiden. De angst verdient validatie, ongeacht de oorzaak.",
    research: "Siegel, D. & Bryson, T. (2012). The Whole-Brain Child",
  },

  {
    id: "ec_32",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "basis",
    order: 32,
    question: "Noah (13) is woedend en smijt zijn telefoon op tafel nadat hij een bericht op social media heeft gezien. Hij schreeuwt: 'Laat me met rust!' Wat is de beste eerste reactie?",
    options: [
      {
        id: "a",
        text: "'Prima, dan pak ik je telefoon maar in. Als je zo reageert, ben je er blijkbaar niet klaar voor.'",
        isCorrect: false,
        feedback: "De telefoon afpakken tijdens een emotionele piek voelt als straf en escaleert. Bovendien mis je de kans om de emotie erachter te bereiken."
      },
      {
        id: "b",
        text: "'Ik zie dat je heel erg van slag bent. Ik ga niet weg, maar ik geef je even ruimte. Ik ben in de keuken.'",
        isCorrect: true,
        feedback: "Juist! Bij pubers werkt nabijheid-op-afstand: je erkent de emotie, respecteert zijn behoefte aan ruimte, en biedt beschikbaarheid. Dit is co-regulatie voor tieners."
      },
      {
        id: "c",
        text: "'Wat is er dan? Laat me dat bericht zien, dan lossen we het samen op.'",
        isCorrect: false,
        feedback: "Aandringen op het bericht schendt zijn privacy en voelt als controle. Eerst de emotie erkennen, later - als hij daar klaar voor is - het gesprek voeren."
      },
    ],
    explanation: "Pubers hebben een ander soort co-regulatie nodig dan kleuters: nabijheid-op-afstand. Ze willen weten dat je er bent, maar hebben fysieke en emotionele ruimte nodig om te reguleren.",
    research: "Siegel, D. (2013). Brainstorm: The Power and Purpose of the Teenage Brain",
  },

  {
    id: "ec_33",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "basis",
    order: 33,
    question: "Emma (7) komt thuis van school en is opvallend stil. Ze zegt dat alles goed is, maar eet niet en trekt zich terug op haar kamer. Twee dagen later hoor je van een andere ouder dat ze gepest wordt. Wat had je eerder kunnen doen?",
    options: [
      {
        id: "a",
        text: "Haar direct uitvragen: 'Word je gepest? Je moet het me vertellen, anders kan ik je niet helpen.'",
        isCorrect: false,
        feedback: "Directe vragen over pesten creeren druk. Kinderen die gepest worden schamen zich vaak en ontkrachten het bij directe vragen."
      },
      {
        id: "b",
        text: "Niets - als ze erover wil praten, komt ze vanzelf wel naar je toe als ze er klaar voor is",
        isCorrect: false,
        feedback: "Kinderen die gepest worden verbergen het vaak uit schaamte en angst. Ze komen juist NIET vanzelf. Afwachten is hier geen veilige strategie."
      },
      {
        id: "c",
        text: "De gedragsverandering benoemen zonder te pushen: 'Ik merk dat je stiller bent dan anders. Je hoeft niets te vertellen, maar ik ben er.'",
        isCorrect: true,
        feedback: "Excellent! Je benoemt wat je ZIET (Gottman stap 1), biedt veiligheid zonder druk, en laat de deur open. Dit verlaagt de drempel om later te delen."
      },
    ],
    explanation: "Kinderen die gepest worden verbergen het gemiddeld 3-6 maanden. Schaamte en angst voor escalatie zijn de voornaamste redenen. Een vader die subtiele veranderingen opmerkt en benoemt zonder te pushen biedt de veiligste ingang.",
    research: "Gottman, J. (1997). Raising An Emotionally Intelligent Child",
  },

  {
    id: "ec_34",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 34,
    question: "Lars (14) zwijgt al drie dagen na een ruzie met zijn beste vriend. Hij wil niet praten, eet weinig, en zit alleen op zijn kamer. Je maakt je zorgen. Wat is de meest effectieve benadering voor een vader?",
    options: [
      {
        id: "a",
        text: "Ga naast hem zitten en doe een gedeelde activiteit (gamen, wandelen) zonder te praten over de ruzie",
        isCorrect: true,
        feedback: "Juist! Tienerjongens reguleren vaak beter via schouder-aan-schouder activiteiten dan face-to-face gesprekken. De verbinding komt via de activiteit, het gesprek volgt vanzelf."
      },
      {
        id: "b",
        text: "'We gaan nu praten. Drie dagen zwijgen is niet gezond. Wat is er gebeurd met je vriend?'",
        isCorrect: false,
        feedback: "Afdwingen versterkt het verzet bij tieners. Bovendien: face-to-face praten over gevoelens is voor veel tienerjongens het moeilijkste format."
      },
      {
        id: "c",
        text: "Zijn vriend bellen om te vragen wat er gebeurd is, zodat je de situatie kunt begrijpen",
        isCorrect: false,
        feedback: "Dit schendt zijn autonomie en vertrouwen. Een 14-jarige ervaart dit als verraad. Werk via hem, niet om hem heen."
      },
    ],
    explanation: "Onderzoek toont dat vaders een unieke kracht hebben in schouder-aan-schouder verbinding: samen iets doen (wandelen, gamen, klussen) zonder directe emotionele druk. Bij tieners komt het gesprek vaak pas NA de activiteit.",
    research: "Hughes, D. (2009). Attachment-Focused Parenting",
  },

  {
    id: "ec_35",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 35,
    question: "Mila (3) krijgt een broertje. Sindsdien doet ze dingen die ze al kon: weer in haar broek plassen, niet zelf eten, en ze wil gedragen worden. Haar oma zegt: 'Ze doet dat expres voor de aandacht.' Wat klopt hier niet?",
    options: [
      {
        id: "a",
        text: "Oma heeft gelijk - Mila manipuleert bewust om aandacht te krijgen en je moet grenzen stellen",
        isCorrect: false,
        feedback: "Een 3-jarige manipuleert niet bewust. Regressie (terugvallen in ontwikkeling) is een stressrespons: haar zenuwstelsel zoekt de veiligheid van een eerdere fase."
      },
      {
        id: "b",
        text: "Regressie is een stressrespons: haar zenuwstelsel keert terug naar een eerdere fase om veiligheid te vinden",
        isCorrect: true,
        feedback: "Correct! Regressie na de geboorte van een broertje/zusje is universeel. Haar brein gaat terug naar een fase waarin ze zich veilig en geliefd voelde. Dit is geen keuze maar een overlevingsstrategie."
      },
      {
        id: "c",
        text: "Ze is waarschijnlijk gewoon ziek of oververmoeid door alle veranderingen in het huishouden",
        isCorrect: false,
        feedback: "Het patroon (meerdere regressies tegelijk, gekoppeld aan de geboorte) wijst op emotionele stress, niet op ziekte. Dit is een relationeel signaal."
      },
    ],
    explanation: "Regressie bij de geboorte van een broertje/zusje is een neurologische stressrespons. Het kind zoekt de veiligheid van een eerdere fase. De aanpak: extra nabijheid geven, niet straffen. De regressie verdwijnt als de hechting weer veilig voelt.",
    research: "Schore, A. (2003). Affect Regulation and the Repair of the Self",
  },

  {
    id: "ec_36",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 36,
    question: "Jesse (9) komt huilend thuis: hij is voor de derde keer niet uitgenodigd voor een verjaardagsfeestje. Hij zegt: 'Niemand vindt me leuk.' Jij weet dat het maar een klein groepje is dat hem buitensluit. Hoe reageer je?",
    options: [
      {
        id: "a",
        text: "'Dat is niet waar, Daan en Levi vinden je heel leuk! En vorige week was je nog bij Tim.'",
        isCorrect: false,
        feedback: "Rationeel corrigeren ontkent zijn beleving. Hij VOELT 'niemand vindt me leuk' en dat gevoel verdient eerst erkenning, ook al klopt de interpretatie niet."
      },
      {
        id: "b",
        text: "'Dat doet heel veel pijn, niet uitgenodigd worden. Je voelt je buitengesloten.'",
        isCorrect: true,
        feedback: "Juist! Eerst de emotie valideren (pijn van uitsluiting), dan pas - later, als hij weer in zijn window is - helpen met perspectief. Sociale pijn is neurologisch even intens als fysieke pijn."
      },
      {
        id: "c",
        text: "'Wil je dat ik de ouders bel? Dan vraag ik waarom je niet uitgenodigd bent.'",
        isCorrect: false,
        feedback: "Dit lost niets op voor zijn emotie en kan de situatie verergeren. Bovendien neem je zijn autonomie weg. Eerst zijn pijn erkennen, later SAMEN oplossingen verkennen."
      },
    ],
    explanation: "Sociale uitsluiting activeert dezelfde hersengebieden als fysieke pijn (anterieure cingulate cortex). 'Niemand vindt me leuk' is geen feit maar een emotionele waarheid die validatie verdient voordat je helpt met perspectief.",
    research: "Eisenberger, N. (2012). The pain of social disconnection: examining the shared neural underpinnings of physical and social pain",
  },

  {
    id: "ec_37",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 37,
    question: "Sophie (8) is boos op papa omdat hij weer een schooloptreden heeft gemist door werk. Ze zegt: 'Jij bent er nooit!' en loopt naar haar kamer. Je voelt je schuldig. Wat is de emotiecoach-reactie?",
    options: [
      {
        id: "a",
        text: "'Ik ben er heel vaak WEL! Vorige week was ik er bij gym, en ik haal je elke dag op.'",
        isCorrect: false,
        feedback: "Jezelf verdedigen ontkent haar ervaring. Ze voelt gemis, en dat gevoel is geldig ongeacht de feiten. Verdediging sluit de verbinding af."
      },
      {
        id: "b",
        text: "'Je hebt gelijk, dat spijt me.' Daarna direct een cadeautje kopen om het goed te maken",
        isCorrect: false,
        feedback: "Spijt is goed, maar materieel compenseren leert haar dat emoties afgekocht kunnen worden. Ze heeft je aanwezigheid nodig, niet je portemonnee."
      },
      {
        id: "c",
        text: "'Je mist me en je bent teleurgesteld. Dat snap ik. Het was belangrijk voor je dat ik erbij was.'",
        isCorrect: true,
        feedback: "Excellent! Je valideert haar teleurstelling en gemis zonder jezelf te verdedigen of het goed te maken. Dit is de basis voor herstel: haar emotie mag er zijn."
      },
    ],
    explanation: "Als een kind boos is op papa vanwege afwezigheid, maskeert de boosheid vaak verdriet en gemis. De vader die zijn schuldgevoel kan parkeren en eerst de emotie van het kind erkent, bouwt aan herstel van de verbinding.",
    research: "Hughes, D. (2009). Attachment-Focused Parenting",
  },

  {
    id: "ec_38",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 38,
    question: "Daan (11) heeft zijn hamster verloren. Hij huilt drie dagen lang en wil niet naar school. Je collega zegt: 'Het is maar een hamster, doe niet zo overdreven.' Wat weet jij als emotiecoach-vader?",
    options: [
      {
        id: "a",
        text: "Na een dag is het genoeg geweest - hij moet leren relativeren en weer naar school gaan",
        isCorrect: false,
        feedback: "Rouw kent geen deadline. Voor een 11-jarige kan een hamster de eerste echte ervaring met de dood zijn. Relativeren is voor volwassenen, niet voor kinderen in rouw."
      },
      {
        id: "b",
        text: "Het verlies van een huisdier kan voor een kind even intens zijn als het verlies van een mens",
        isCorrect: true,
        feedback: "Juist! Onderzoek toont dat kinderen rouw om huisdieren even intens beleven als rouw om mensen. De hechtingsband is echt, het verlies is echt, de rouw verdient volledige erkenning."
      },
      {
        id: "c",
        text: "Snel een nieuwe hamster kopen zodat hij weer iets heeft om voor te zorgen en afgeleid is",
        isCorrect: false,
        feedback: "Een vervangend huisdier ontkent het rouwproces. Daan rouwt om DEZE hamster. Vervanging leert hem: verdriet is oplosbaar door iets nieuws."
      },
    ],
    explanation: "Rouw om een huisdier is voor kinderen vaak de eerste confrontatie met de dood. De hechtingsband is neurologisch niet anders dan bij een mens. Valideer de rouw volledig en bied ruimte voor het proces.",
    research: "Gottman, J. (1997). Raising An Emotionally Intelligent Child",
  },

  {
    id: "ec_39",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 39,
    question: "Liam (12) wordt steeds stiller na de scheiding. Bij mama praat hij wel, bij jou nauwelijks. Als je vraagt hoe het gaat zegt hij: 'Gewoon, goed.' Zijn lichaamstaal zegt iets anders. Wat is de meest waarschijnlijke dynamiek?",
    options: [
      {
        id: "a",
        text: "Hij geeft mama de voorkeur en je moet dat accepteren en hem verder met rust laten",
        isCorrect: false,
        feedback: "Dit is geen voorkeur maar bescherming. Kinderen passen hun emotionele expressie aan per ouder. Terugtrekken bij papa is vaak een signaal, geen afwijzing."
      },
      {
        id: "b",
        text: "Hij beschermt jou: hij voelt dat jij het moeilijk hebt en wil je niet belasten met zijn verdriet",
        isCorrect: true,
        feedback: "Correct! Kinderen na scheiding worden vaak 'emotionele bewakers': ze beschermen de ouder die ze als kwetsbaar ervaren. Liam verbergt zijn verdriet om JOU te sparen."
      },
      {
        id: "c",
        text: "Hij is gewoon een puber die niet wil praten, dat heeft niets met de scheiding te maken",
        isCorrect: false,
        feedback: "De timing (na scheiding) en het verschil (wel bij mama, niet bij jou) wijzen op een relatiodynamiek, niet op puberteit. Dit vraagt actieve aandacht."
      },
    ],
    explanation: "Na een scheiding worden kinderen vaak parentificeerd: ze nemen de rol van emotionele verzorger op zich. Ze beschermen de ouder die ze als kwetsbaar inschatten door hun eigen emoties te verbergen. De vader moet zelf veiligheid bieden door zijn eigen regulatie te tonen.",
    research: "Fonagy, P. et al. (2002). Affect Regulation, Mentalization, and the Development of the Self",
  },

  {
    id: "ec_40",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 40,
    question: "Liv (15) heeft een woedeaanval omdat je haar telefoon afpakt na 23:00. Ze schreeuwt: 'Je ruineert mijn leven! Al mijn vrienden mogen wel!' Ze slaat de deur dicht. De volgende ochtend doet ze alsof er niets is gebeurd. Hoe ga je hiermee om?",
    options: [
      {
        id: "a",
        text: "Niets zeggen - ze is erover heen en het oprakelen maakt het alleen maar erger",
        isCorrect: false,
        feedback: "Het niet bespreken leert haar dat intense emoties onbespreekbaar zijn. Bovendien mis je de kans om haar te leren reflecteren op haar emotionele reacties."
      },
      {
        id: "b",
        text: "De telefoonregel nog strenger maken als straf voor haar gedrag van gisteravond",
        isCorrect: false,
        feedback: "Strengere straffen na een emotionele uitbarsting escaleren het machtsconflict. Je verliest verbinding en ze leert niets over regulatie."
      },
      {
        id: "c",
        text: "'Gisteravond was heftig. Ik snap dat je boos was. De regel blijft, en ik wil horen hoe jij het ervaart.'",
        isCorrect: true,
        feedback: "Juist! Je benoemt wat er was (geen vermijding), valideert de emotie (boosheid), houdt de grens (regel blijft), en opent het gesprek (hoe ervaar jij het). Alle stappen in actie."
      },
    ],
    explanation: "Bij pubers is het cruciaal om na een conflict het gesprek aan te gaan - niet tijdens de piek maar de volgende dag. De grens blijft staan, maar de emotie verdient alsnog validatie en reflectie.",
    research: "Siegel, D. (2013). Brainstorm: The Power and Purpose of the Teenage Brain",
  },

  {
    id: "ec_41",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "gevorderd",
    order: 41,
    question: "Max (10) schreeuwt tegen zijn zusje: 'Ik haat je, ga weg!' Je kijkt beter en ziet dat hij eigenlijk trilt en zijn ogen vochtig zijn. Wat observeer je hier vanuit het concept van secundaire emoties?",
    options: [
      {
        id: "a",
        text: "Max is gewoon boos en zijn boosheid is de enige emotie die hier speelt",
        isCorrect: false,
        feedback: "Het trillen en de vochtige ogen wijzen op een onderliggende kwetsbare emotie. Boosheid is hier het schild, niet de kern."
      },
      {
        id: "b",
        text: "De boosheid is een secundaire emotie die verdriet of angst maskeert - het trillen en de tranen verraden de primaire emotie",
        isCorrect: true,
        feedback: "Excellent! De lichamelijke signalen (trillen, vochtige ogen) verraden de primaire emotie: waarschijnlijk verdriet of angst. Boosheid is het schild dat kwetsbaarheid beschermt."
      },
      {
        id: "c",
        text: "Hij huilt van woede - sommige kinderen trillen nu eenmaal als ze boos zijn, dat is normaal",
        isCorrect: false,
        feedback: "Trillen en vochtige ogen passen bij verdriet/angst, niet bij pure woede. Een emotiecoach leert door de boosheid heen te kijken naar de kwetsbaarheid eronder."
      },
    ],
    explanation: "Secundaire emoties zijn beschermende emoties die kwetsbaardere primaire emoties verbergen. Boosheid maskeert vaak verdriet, angst of schaamte. De lichamelijke signalen verraden wat de woorden verbergen. Een emotiecoach reageert op de primaire emotie.",
    research: "Greenberg, L. (2002). Emotion-Focused Therapy",
  },

  {
    id: "ec_42",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "expert",
    order: 42,
    question: "Je merkt bij jezelf als vader dat je moeite hebt om je eigen emoties te benoemen. Als je partner vraagt hoe je je voelt, zeg je altijd 'goed' of 'gewoon'. Je dochter (7) begint hetzelfde patroon te tonen. Wat is hier aan de hand?",
    options: [
      {
        id: "a",
        text: "Dit is alexithymie: moeite met het herkennen en benoemen van eigen emoties, en je modelleert dit onbewust voor je dochter",
        isCorrect: true,
        feedback: "Correct! Alexithymie (letterlijk: 'geen woorden voor emoties') komt bij mannen 2x vaker voor. Kinderen leren emotietaal van hun ouders - als jij geen woorden hebt, leert zij die ook niet."
      },
      {
        id: "b",
        text: "Je bent gewoon een rustig persoon en je dochter erft dat karakter van je via de genen",
        isCorrect: false,
        feedback: "Alexithymie is geen karaktereigenschap maar een aangeleerd patroon, vaak van de eigen opvoeding. Het is geen genetische eigenschap maar een vaardigheid die ontbreekt."
      },
      {
        id: "c",
        text: "Mannen verwerken emoties intern en hoeven ze niet hardop te benoemen om ze goed te reguleren",
        isCorrect: false,
        feedback: "Dit is een mythe. Onderzoek toont dat affect labeling (emoties benoemen) essentieel is voor effectieve regulatie bij iedereen, ongeacht geslacht."
      },
    ],
    explanation: "Alexithymie (moeite met emoties herkennen/benoemen) komt bij 10-15% van de bevolking voor, bij mannen 2x vaker. Het is vaak aangeleerd in een opvoeding waar emoties geen woorden kregen. De oplossing: zelf actief emotietaal ontwikkelen, want je kind leert van jouw voorbeeld.",
    research: "Fonagy, P. et al. (2002). Affect Regulation, Mentalization, and the Development of the Self",
  },

  {
    id: "ec_43",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "expert",
    order: 43,
    question: "Milan (6) is al een uur boos. Eerst was hij gefrustreerd over een puzzel, toen boos op zijn zus die hem uitlachte, toen verdrietig omdat jij zei dat hij moest stoppen met schreeuwen, en nu schopt hij tegen meubels. Dit is een voorbeeld van een emotionele cascade. Wat is de beste interventie?",
    options: [
      {
        id: "a",
        text: "Elke emotie apart benoemen en oplossen: eerst de frustratie, dan de boosheid, dan het verdriet",
        isCorrect: false,
        feedback: "Bij een cascade zijn de individuele emoties niet meer te ontwarren. Teruggaan naar elke aparte emotie is onmogelijk als het systeem in overbelasting is."
      },
      {
        id: "b",
        text: "Het hele systeem kalmeren via co-regulatie: nabijheid, rustige stem, geen woorden - alleen aanwezigheid",
        isCorrect: true,
        feedback: "Juist! Bij een emotionele cascade is het zenuwstelsel overbelast. Geen woorden maar fysiologische co-regulatie: jouw kalmte, hartslag en ademhaling reguleren zijn systeem."
      },
      {
        id: "c",
        text: "Hem naar zijn kamer sturen om af te koelen en daarna alles stap voor stap bespreken met hem",
        isCorrect: false,
        feedback: "Alleen zijn tijdens een cascade is het ergste scenario: zijn systeem is overbelast en hij heeft jouw zenuwstelsel nodig om te reguleren."
      },
    ],
    explanation: "Een emotionele cascade ontstaat wanneer meerdere emoties op elkaar stapelen en het zenuwstelsel overbelasten. De individuele triggers zijn niet meer relevant - het hele systeem moet eerst kalmeren via fysiologische co-regulatie.",
    research: "Schore, A. (2003). Affect Regulation and the Repair of the Self",
  },

  {
    id: "ec_44",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "expert",
    order: 44,
    question: "Je zegt tegen Fenne (9): 'Je hoeft niet bang te zijn voor de schoolpresentatie.' Ze knikt, maar je ziet haar handen trillen. Wat is het probleem met jouw reactie vanuit emotionele invalidatie?",
    options: [
      {
        id: "a",
        text: "Niets - je stelt haar gerust en dat is precies wat ze nodig heeft voor de presentatie",
        isCorrect: false,
        feedback: "'Je hoeft niet bang te zijn' is emotionele invalidatie: je ontkent haar beleving. Haar trillende handen tonen dat haar lichaam het met jou oneens is."
      },
      {
        id: "b",
        text: "Je invalideert haar emotie: je zegt dat ze niet hoeft te voelen wat ze WEL voelt",
        isCorrect: true,
        feedback: "Correct! 'Je hoeft niet bang te zijn' is een subtiele maar krachtige invalidatie. Je vertelt haar dat haar emotie niet klopt. Beter: 'Je bent zenuwachtig. Dat is logisch, het is spannend.'"
      },
      {
        id: "c",
        text: "Je had haar moeten afleiden met iets leuks zodat ze de presentatie zou vergeten",
        isCorrect: false,
        feedback: "Afleiden vermijdt de emotie. Fenne moet leren dat spanning bij presentaties normaal is en dat ze het aankan - niet dat ze het moet negeren."
      },
    ],
    explanation: "Emotionele invalidatie is het ontkennen, minimaliseren of corrigeren van iemands emotionele ervaring. 'Je hoeft niet bang te zijn' is een van de meest voorkomende vormen. Het effect: het kind leert dat eigen gevoelens niet kloppen.",
    research: "Gottman, J. (1997). Raising An Emotionally Intelligent Child",
  },

  {
    id: "ec_45",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "expert",
    order: 45,
    question: "Als vader merk je dat je onbewust de emoties van je kinderen invalideert. Je meest voorkomende zinnen zijn: 'Het valt wel mee', 'Niet huilen', en 'Wees eens flink.' Je herkent dit patroon ook van je eigen vader. Wat is de eerste stap naar verandering?",
    options: [
      {
        id: "a",
        text: "Direct stoppen met alle invaliderende zinnen en ze vervangen door emotiecoaching-zinnen",
        isCorrect: false,
        feedback: "Gedrag veranderen zonder begrip van de oorzaak leidt tot terugval. Eerst moet je begrijpen WAAROM je invalideert, dan pas kun je duurzaam veranderen."
      },
      {
        id: "b",
        text: "Herkennen dat je invalideert omdat JIJ als kind ook geinvalideerd werd - je herhaalt het patroon onbewust",
        isCorrect: true,
        feedback: "Juist! Intergenerationele overdracht: je herhaalt het patroon van je eigen vader. Bewustzijn van de bron is de eerste stap. Pas dan kan je kiezen voor een ander patroon."
      },
      {
        id: "c",
        text: "Het is niet zo erg - generaties voor jou groeiden ook op met deze zinnen en het ging prima met hen",
        isCorrect: false,
        feedback: "Dat het 'ging' zegt niet dat het optimaal was. Jouw eigen moeite met emoties IS het gevolg van deze patronen. Het doorbreken van de cyclus begint bij jou."
      },
    ],
    explanation: "Emotionele invalidatie is vaak intergenerationeel: je herhaalt onbewust hoe je zelf behandeld werd. De meest krachtige verandering begint bij bewustzijn van je eigen emotionele geschiedenis en hoe die doorwerkt in je ouderschap.",
    research: "Fonagy, P. et al. (2002). Affect Regulation, Mentalization, and the Development of the Self",
  },

  {
    id: "ec_46",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "expert",
    order: 46,
    question: "Bram (15) ontdekt dat zijn vriendinnetje het heeft uitgemaakt via een berichtje. Hij sluit zich op in zijn kamer en weigert te eten. Als je vraagt hoe het gaat zegt hij: 'Boeiend, maakt niet uit.' Maar je hoort hem later huilen. Welke emotionele laag moet je als vader bereiken?",
    options: [
      {
        id: "a",
        text: "De onverschilligheid is echt - tieners verwerken relatieverlies snel en oppervlakkig",
        isCorrect: false,
        feedback: "De onverschilligheid is een masker. Het niet eten, opsluiten en huilen verraden de werkelijke impact. Bij tieners is liefdesverdriet neurologisch even intens als bij volwassenen."
      },
      {
        id: "b",
        text: "Onder de onverschilligheid zit boosheid, en daaronder verdriet en afwijzingspijn die hij als man niet durft te tonen",
        isCorrect: true,
        feedback: "Correct! Drie lagen: de buitenkant (onverschilligheid als bescherming), de middenlaag (boosheid), en de kern (verdriet + afwijzingspijn). Als vader model je dat kwetsbaarheid mag."
      },
      {
        id: "c",
        text: "Hij is boos op zijn vriendin en je moet hem helpen die boosheid te uiten zodat hij verder kan",
        isCorrect: false,
        feedback: "Boosheid is slechts de middenlaag. Eronder zit diep verdriet en pijn van afwijzing. Bij alleen de boosheid blijven is de kwetsbaarheid missen."
      },
    ],
    explanation: "Bij tieners zijn emotionele lagen vaak dieper gestapeld: onverschilligheid beschermt boosheid, boosheid beschermt verdriet en afwijzingspijn. Een vader die zelf kwetsbaarheid kan tonen, geeft zijn zoon toestemming om voorbij de boosheid te gaan.",
    research: "Greenberg, L. (2002). Emotion-Focused Therapy",
  },

  {
    id: "ec_47",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "expert",
    order: 47,
    question: "Je dochter Eva (4) valt en schaaft haar knie. Ze huilt hard. Jij voelt NIETS - geen bezorgdheid, geen empathie. Je handelt functioneel (plakken, troosten) maar van binnen is het stil. Dit patroon herken je vaker. Wat is hier aan de hand?",
    options: [
      {
        id: "a",
        text: "Je bent een nuchtere vader en dat is juist goed in noodsituaties - iemand moet kalm blijven",
        isCorrect: false,
        feedback: "Nuchterheid in een crisis is iets anders dan chronisch niets voelen bij de pijn van je kind. Het tweede is een signaal van emotionele afsluiting, niet van kracht."
      },
      {
        id: "b",
        text: "Je dissocieert van empathie: je eigen emotionele systeem sluit af als bescherming tegen de pijn van je kind",
        isCorrect: true,
        feedback: "Correct! Dit is emotionele dissociatie: je brein sluit empathie af als bescherming. Vaak aangeleerd in je eigen kindertijd: als jouw pijn niet gezien werd, leerde je brein om pijn uit te schakelen."
      },
      {
        id: "c",
        text: "Je bent gewoon een beetje moe en hebt even minder emotionele capaciteit vandaag",
        isCorrect: false,
        feedback: "Het patroon ('je herkent dit vaker') wijst op structureel, niet incidenteel. Chronisch niets voelen bij de pijn van je kind is een signaal dat aandacht verdient."
      },
    ],
    explanation: "Emotionele dissociatie bij vaders is vaak een overblijfsel van de eigen opvoeding: als jouw pijn als kind niet erkend werd, leerde je brein om empathie uit te schakelen. Het gevolg: je functioneert, maar je voelt niet. Je kind mist de emotionele resonantie.",
    research: "Schore, A. (2003). Affect Regulation and the Repair of the Self",
  },

  {
    id: "ec_48",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "expert",
    order: 48,
    question: "Hugo (7) wordt al weken gepest. Op een dag zegt hij emotieloos: 'Het maakt me niet meer uit.' Hij speelt alleen, eet normaal, maar heeft een lege blik. Wat herken je als emotiecoach-vader in dit patroon?",
    options: [
      {
        id: "a",
        text: "Hij heeft het verwerkt en kan er nu mee omgaan - hij is veerkrachtig",
        isCorrect: false,
        feedback: "Emotieloosheid is geen veerkracht. Een kind dat 'niets meer voelt' na wekenlang pesten is niet over de pijn heen - hij heeft de pijn afgesloten."
      },
      {
        id: "b",
        text: "Hugo is in dorsal vagaal shutdown gegaan: zijn zenuwstelsel heeft de pijn afgesloten als overlevingsmechanisme",
        isCorrect: true,
        feedback: "Correct! De lege blik en emotieloosheid zijn tekenen van dorsaal vagaal shutdown: het zenuwstelsel sluit af bij chronische dreiging. Dit is geen acceptatie maar overleving. Dit kind heeft dringend hulp nodig."
      },
      {
        id: "c",
        text: "Kinderen vergeten pestgedrag snel - waarschijnlijk is hij gewoon met andere dingen bezig",
        isCorrect: false,
        feedback: "Kinderen vergeten pesten niet. De combinatie van weken pesten + emotieloosheid + lege blik is een alarmsignaal, niet een teken van vergeten."
      },
    ],
    explanation: "Dorsaal vagaal shutdown (Porges) is de meest extreme stressrespons: het zenuwstelsel sluit af wanneer fight-or-flight niet werkt. Bij kinderen die gepest worden uit dit zich als emotionele vlakheid. Dit is een alarmsignaal dat professionele hulp rechtvaardigt.",
    research: "Porges, S. (2011). The Polyvagal Theory",
  },

  {
    id: "ec_49",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "expert",
    order: 49,
    question: "Je merkt dat je bij je zoon (11) andere emoties tolereert dan bij je dochter (8). Je dochter mag huilen, maar als je zoon huilt zeg je: 'Kom op, wees sterk.' Je dochter mag niet boos zijn, maar bij je zoon vind je boosheid normaal. Wat gebeurt hier?",
    options: [
      {
        id: "a",
        text: "Dit is logisch - jongens en meisjes uiten emoties nu eenmaal anders en dat mag je als vader verschillend benaderen",
        isCorrect: false,
        feedback: "Dit is geen biologisch verschil maar gendersocialisatie. Jij bepaalt onbewust welke emoties bij welk geslacht horen. Je dochter leert: boosheid is onvrouwelijk. Je zoon leert: verdriet is onmannelijk."
      },
      {
        id: "b",
        text: "Je past onbewust gender-emotiesocialisatie toe: je leert je kinderen welke emoties bij hun geslacht horen",
        isCorrect: true,
        feedback: "Correct! Onderzoek toont dat vaders de sterkste invloed hebben op gender-emotiesocialisatie. Je leert je zoon dat kwetsbaarheid verboden is en je dochter dat boosheid onacceptabel is. Beide zijn schadelijk."
      },
      {
        id: "c",
        text: "Je bent strenger voor je zoon omdat hij dat later nodig heeft in de maatschappij als man",
        isCorrect: false,
        feedback: "De maatschappij verandert, en emotionele intelligentie is voor mannen minstens even belangrijk als voor vrouwen. Je bereidt hem voor op het verleden, niet op de toekomst."
      },
    ],
    explanation: "Vaders zijn de sterkste bron van gender-emotiesocialisatie. Zonen leren dat verdriet verboden is, dochters dat boosheid onacceptabel is. Bewustzijn van dit patroon is de eerste stap naar gelijke emotionele ruimte voor alle kinderen.",
    research: "Gottman, J., Katz, L. & Hooven, C. (1996). Meta-emotion philosophy",
  },

  {
    id: "ec_50",
    skill: "Emotiecoaching",
    type: "quiz",
    difficulty: "expert",
    order: 50,
    question: "Na een intensieve werkweek merk je dat je emotioneel 'dicht' zit. Je dochter (5) toont je trots een tekening. Je zegt 'mooi' maar voelt niets. Je zoon (9) vertelt opgewonden over zijn voetbalwedstrijd. Je knikt maar bent er niet. Dit is al weken zo. Een vriend zegt: 'Je moet gewoon even ontspannen.' Wat begrijpt hij niet?",
    options: [
      {
        id: "a",
        text: "Dit is inderdaad vermoeidheid - een paar goede nachten slapen en het is weer over",
        isCorrect: false,
        feedback: "Wekenlang niets voelen gaat verder dan vermoeidheid. Je emotionele systeem is in shutdown. Dit herstelt niet met slaap alleen."
      },
      {
        id: "b",
        text: "Je ervaart emotionele uitputting: je vermogen tot empathie en verbinding is opgebruikt, niet je fysieke energie",
        isCorrect: true,
        feedback: "Correct! Emotionele uitputting is niet hetzelfde als fysieke vermoeidheid. Je empathie-systeem (spiegelneuronen, insula, anterieure cingulate cortex) is overbelast. Dit vereist emotioneel herstel, niet alleen rust."
      },
      {
        id: "c",
        text: "Je bent gewoon een introvert type en hebt regelmatig tijd voor jezelf nodig om op te laden",
        isCorrect: false,
        feedback: "Introversie verklaart niet dat je NIETS voelt bij de blijdschap van je kinderen. Dit is emotionele uitputting, niet een persoonlijkheidskenmerk."
      },
    ],
    explanation: "Emotionele uitputting bij vaders is een onderkend fenomeen. Het empathie-systeem raakt overbelast bij chronische stress. Het gevolg: je functioneert maar voelt niet. Je kinderen missen de emotionele resonantie die ze nodig hebben voor hun ontwikkeling.",
    research: "Schore, A. (2003). Affect Regulation and the Repair of the Self",
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

  // ============================================================
  // UITBREIDING: ZELFREGULATIE GEVORDERD & EXPERT (Vragen 31-50)
  // Werkstress, slaap, polyvagaaltheorie, neuroceptie, somatische markers
  // ============================================================

  {
    id: "zr_31",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "basis",
    order: 31,
    question: "Je hebt een zware dag op je werk gehad. Je baas was onredelijk, een deadline is verschoven, en je zit vol frustratie. Je rijdt naar huis en je kinderen (4 en 7) stormen op je af. Je merkt dat je kortaf bent. Wat is de beste eerste actie?",
    context: "De overgang van werk naar thuis is een kritiek moment voor vaders.",
    options: [
      {
        id: "a",
        text: "Direct met je kinderen spelen om je werkstress te vergeten en het van je af te zetten",
        isCorrect: false,
        feedback: "Je werkstress zit nog in je zenuwstelsel. Zonder transitie breng je die stress mee het huis in. Je kinderen voelen jouw gespannenheid, ook als je doet alsof."
      },
      {
        id: "b",
        text: "5 minuten in de auto blijven zitten, 3x langzaam uitademen, en bewust de werkdag loslaten voor je naar binnen gaat",
        isCorrect: true,
        feedback: "Correct! Een overgangsritueel (zelfs 5 minuten) activeert je parasympathisch zenuwstelsel en brengt je terug in je window. Je kinderen verdienen een gereguleerde vader, niet de stress van je baas."
      },
      {
        id: "c",
        text: "Tegen je partner zeggen dat je even niet gestoord wilt worden en een uur op de bank gaan liggen",
        isCorrect: false,
        feedback: "Een uur is te lang en voelt voor je kinderen als afwijzing. Een kort overgangsritueel (5-10 min) is effectiever en realistischer dan je terugtrekken."
      },
    ],
    explanation: "Het overgangsritueel werk-thuis is cruciaal. Onderzoek toont dat vaders die een bewuste transitie inbouwen (ademhaling, kort moment stilte, wandeling) significant minder uitvallen tegen hun kinderen in de avonduren.",
    research: "Kabat-Zinn, J. & Kabat-Zinn, M. (1997). Everyday Blessings: The Inner Work of Mindful Parenting",
  },

  {
    id: "zr_32",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "basis",
    order: 32,
    question: "Je slaapt al twee weken slecht: gemiddeld 5 uur per nacht. Je merkt dat je sneller schreeuwt tegen je kinderen (3 en 8), minder geduld hebt, en je vaker schaamt voor je reacties. Wat is het neurologische verband?",
    options: [
      {
        id: "a",
        text: "Slaapgebrek maakt je amygdala 60% reactiever terwijl je PFC verzwakt - je hebt letterlijk minder regulatiecapaciteit",
        isCorrect: true,
        feedback: "Correct! Slaaponderzoek toont dat een nacht slecht slapen de amygdala-reactiviteit met 60% verhoogt en de PFC-activiteit verlaagt. Na twee weken is je regulatie-systeem ernstig verzwakt."
      },
      {
        id: "b",
        text: "Je bent gewoon moe en hebt een kort lontje - dat is vervelend maar niet neurologisch",
        isCorrect: false,
        feedback: "Het IS neurologisch. Slaapgebrek verandert letterlijk de balans tussen amygdala en PFC. Het is niet 'gewoon moe' maar een meetbare verzwakking van je regulatiesysteem."
      },
      {
        id: "c",
        text: "Slaapgebrek heeft geen echt effect op emoties, alleen op je concentratie en je geheugen overdag",
        isCorrect: false,
        feedback: "Onjuist. Slaap heeft een GROTER effect op emotieregulatie dan op concentratie. De amygdala-PFC balans is het eerste dat verstoord raakt bij slaaptekort."
      },
    ],
    explanation: "Slaap is de meest onderschatte pilaar van zelfregulatie. Een nacht van 5 uur maakt je amygdala 60% reactiever (Walker, 2017). Na twee weken cumulatief slaaptekort functioneert je PFC alsof je licht beschonken bent.",
    research: "Walker, M. (2017). Why We Sleep: Unlocking the Power of Sleep and Dreams",
  },

  {
    id: "zr_33",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "basis",
    order: 33,
    question: "Je dochter (6) morst haar drinken over je schone overhemd net voordat je naar een belangrijk werkgesprek moet. Je merkt dat je kaken op elkaar klemmen en je schouders optrekken. Je herkent dit als lichaamssignalen. Wat is de volgende stap?",
    options: [
      {
        id: "a",
        text: "De signalen negeren en je concentreren op het opruimen van de rommel voor je moet gaan",
        isCorrect: false,
        feedback: "Negeren is gevaarlijk. Je lichaam waarschuwt je dat je sympathisch zenuwstelsel activeert. Negeren verhoogt het risico op een uitbarsting."
      },
      {
        id: "b",
        text: "Bewust je kaak loslaten, schouders laten zakken, en een langzame uitademing doen",
        isCorrect: true,
        feedback: "Correct! Door bewust de fysieke spanning los te laten, stuur je een veiligheidssignaal naar je zenuwstelsel. Kaak loslaten en schouders laten zakken zijn directe ingangen naar je parasympathisch systeem."
      },
      {
        id: "c",
        text: "Tegen je dochter zeggen dat ze beter moet opletten en dat dit echt niet kan nu",
        isCorrect: false,
        feedback: "Een 6-jarige morst - dat hoort erbij. Je frustratie gaat over de timing (werkgesprek), niet over haar. Reageer op je eigen spanning, niet op haar ongelukje."
      },
    ],
    explanation: "Lichaamssignalen zijn je eerste waarschuwingssysteem. De volgende stap na herkenning is fysieke interventie: kaak loslaten, schouders zakken, langzaam uitademen. Dit stuurt een veiligheidssignaal via de nervus vagus naar je brein.",
    research: "Levine, P. (2010). In an Unspoken Voice: How the Body Releases Trauma",
  },

  {
    id: "zr_34",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "basis",
    order: 34,
    question: "Je hebt net ruzie gehad met je partner over de verdeling van huishoudtaken. Je bent nog gefrustreerd als je zoon (5) vraagt of je met hem wilt spelen. Je zegt op scherpe toon: 'Nu even niet!' Hij schrikt en loopt weg. Wat is hier gebeurd?",
    options: [
      {
        id: "a",
        text: "Je zoon moet leren dat papa niet altijd beschikbaar is en dat grenzen stellen normaal is",
        isCorrect: false,
        feedback: "Grenzen stellen is gezond, maar de TOON verraadt dat dit geen grens was maar een uitbarsting. Hij schrikt niet van de boodschap maar van jouw emotie."
      },
      {
        id: "b",
        text: "Relatie-irritatie is doorgelekt naar je kind: je zoon kreeg de emotie die bedoeld was voor je partner",
        isCorrect: true,
        feedback: "Correct! Dit heet emotionele spillover: onverwerkte emotie uit een relatie lekt door naar het kind. Je zoon is niet de oorzaak van je frustratie maar krijgt wel de impact."
      },
      {
        id: "c",
        text: "Het was een kleine reactie en kinderen zijn veerkrachtig genoeg om dit soort dingen snel te vergeten",
        isCorrect: false,
        feedback: "Kinderen zijn gevoeliger voor toon dan voor woorden. Zijn schrikreactie toont dat zijn zenuwstelsel jouw frustratie registreerde als onveiligheid."
      },
    ],
    explanation: "Emotionele spillover (Repetti, 2009): stress en frustratie uit een relatie of werkcontext lekken door naar interacties met kinderen. Kinderen zijn bijzonder gevoelig voor deze ongerichte emotionele lading.",
    research: "Repetti, R. et al. (2009). The Effects of Work Stress on Family Dynamics",
  },

  {
    id: "zr_35",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 35,
    question: "Je deadline op werk is verschoven naar morgen. Thuis moet je zoon (8) geholpen worden met zijn werkstuk. Je dochter (3) is ziek en hangerig. Je partner werkt vanavond. Je merkt dat je steeds kortaffer wordt. Dit is een kruising van werkstress en opvoedstress. Wat is de effectiefste interventie?",
    options: [
      {
        id: "a",
        text: "Alles tegelijk proberen: laptop open, zoon helpen, dochter op schoot - multitasken",
        isCorrect: false,
        feedback: "Multitasken onder stress verlaagt de kwaliteit van alles en verhoogt je cortisol. Je PFC kan niet effectief schakelen tussen drie stressoren tegelijk."
      },
      {
        id: "b",
        text: "Eerlijk tegen jezelf zijn: dit is te veel. Prioriteer en accepteer dat niet alles vanavond perfect gaat",
        isCorrect: true,
        feedback: "Correct! De krachtigste zelfregulatie is soms: erkennen dat je boven je capaciteit zit. Prioriteer (ziek kind eerst), stel bij (werkstuk morgen), en accepteer imperfectie."
      },
      {
        id: "c",
        text: "Je zoon zelfstandig laten werken en je focussen op je deadline - hij is oud genoeg",
        isCorrect: false,
        feedback: "Je zoon voelt de spanning in huis. Hem alleen laten met een werkstuk terwijl papa gestrest is en zijn zus ziek is, is geen veilige situatie voor een 8-jarige."
      },
    ],
    explanation: "De kruising werkstress x opvoedstress is de meest voorkomende trigger voor vaders. De valkuil is: harder proberen. De oplossing is: eerlijk evalueren wat realistisch is, prioriteren, en accepteren dat niet alles vanavond perfect kan.",
    research: "Siegel, D. (2010). Mindsight: The New Science of Personal Transformation",
  },

  {
    id: "zr_36",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 36,
    question: "Je bent bezig je zoon (10) te helpen met wiskunde. Hij snapt het niet en je legt het voor de vierde keer uit. Je merkt dat je stem luider wordt, je ademhaling oppervlakkig is, en je handen bewegen sneller. Je vrouw zegt: 'Je schreeuwt.' Jij denkt: 'Ik schreeuw helemaal niet.' Wat is hier aan de hand?",
    options: [
      {
        id: "a",
        text: "Je vrouw overdrijft - je praat gewoon stevig maar het is geen schreeuwen",
        isCorrect: false,
        feedback: "Wanneer je eigen waarneming afwijkt van de feedback van anderen, is dat een signaal dat je buiten je window zit. In hyperarousal ervaar je je eigen volume niet accuraat."
      },
      {
        id: "b",
        text: "Je bent in hyperarousal en merkt je eigen escalatie niet op - je zenuwstelsel is al buiten je window",
        isCorrect: true,
        feedback: "Correct! In hyperarousal verlies je het vermogen om je eigen toestand accuraat in te schatten. Je denkt dat je normaal praat, terwijl je lichaam en stem al in stressmode zijn."
      },
      {
        id: "c",
        text: "Je hebt gewoon een luide stem en dat is niet hetzelfde als schreeuwen tegen je kind",
        isCorrect: false,
        feedback: "De oppervlakkige ademhaling, snellere handbewegingen en toenemend volume zijn samen een duidelijk patroon: je sympathisch zenuwstelsel is geactiveerd."
      },
    ],
    explanation: "Een kenmerk van hyperarousal is dat je je eigen toestand niet accuraat waarneemt. Je ervaart jezelf als redelijk terwijl je omgeving escalatie ziet. Feedback van je partner is dan een spiegel die je eigen waarneming corrigeert.",
    research: "Siegel, D. (1999). The Developing Mind",
  },

  {
    id: "zr_37",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 37,
    question: "Je merkt dat je al schreeuwt voordat je het doorhebt. Het begint met je dochter (7) die treuzelt met aankleden, en voor je het weet sta je te schreeuwen: 'SCHIET NOU OP!' Je schrikt van jezelf. Dit gebeurt steeds vaker. Wat is het kernprobleem?",
    options: [
      {
        id: "a",
        text: "Je mist het venster tussen trigger en reactie: je amygdala hijack gaat sneller dan je bewustzijn",
        isCorrect: true,
        feedback: "Correct! Het venster tussen trigger (treuzelen) en reactie (schreeuwen) is te klein geworden. Je amygdala reageert in milliseconden, je PFC komt te laat. De oplossing: het venster vergroten door fysieke ankers."
      },
      {
        id: "b",
        text: "Je dochter treuzelt bewust om je te testen en je moet strengere consequenties instellen",
        isCorrect: false,
        feedback: "Een 7-jarige die treuzelt is normaal ontwikkelingsgedrag. Het probleem is niet haar tempo maar jouw reactie-snelheid. De vraag is: waarom schiet jij zo snel in alarm?"
      },
      {
        id: "c",
        text: "Je hebt gewoon een opvliegend karakter en dat kun je niet echt veranderen als volwassene",
        isCorrect: false,
        feedback: "Reactiepatronen zijn niet vastgelegd. Het venster tussen trigger en reactie is trainbaar. Met dagelijkse oefening kun je het venster vergroten van milliseconden naar seconden."
      },
    ],
    explanation: "Het venster tussen trigger en reactie is de sleutel tot zelfregulatie. Bij chronische stress wordt dit venster steeds kleiner. Fysieke ankers (hand op je hart, voeten op de grond) helpen het venster te vergroten door je PFC een fractie eerder te activeren.",
    research: "Goleman, D. (2005). Emotional Intelligence: Why It Can Matter More Than IQ",
  },

  {
    id: "zr_38",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 38,
    question: "Je komt thuis van een stressvolle dag. Je partner zegt iets over de afwas. Normaal vind je dit prima, maar nu voel je een golf van irritatie. Je wilt iets scherps terugzeggen. Je zoon (6) zit aan tafel en kijkt naar jullie. Wat is de meest regulerende keuze?",
    options: [
      {
        id: "a",
        text: "'Ik merk dat ik geirriteerd ben en dat het niet over de afwas gaat. Ik neem even een moment.'",
        isCorrect: true,
        feedback: "Excellent! Je labelt je eigen emotie (affect labeling werkt ook bij volwassenen), identificeert de echte bron (niet de afwas), en modelleert zelfregulatie voor je zoon."
      },
      {
        id: "b",
        text: "De irritatie inslikken en gewoon de afwas doen om het conflict te voorkomen waar je zoon bij zit",
        isCorrect: false,
        feedback: "Inslikken is onderdrukking, niet regulatie. Bovendien voelt je zoon de spanning ook als je niets zegt. Suppressie lekt via non-verbale signalen."
      },
      {
        id: "c",
        text: "Zeggen wat je denkt - eerlijkheid is belangrijk en je zoon moet leren dat ouders ook emoties hebben",
        isCorrect: false,
        feedback: "Ongefiltered ventileren is geen eerlijkheid maar disregulatie. Je zoon leert dan: als je moe bent mag je uitvallen. Er is een verschil tussen emoties tonen en emoties dumpen."
      },
    ],
    explanation: "Zelfregulatie modelleren is een van de krachtigste vormen van opvoeding. Als je zoon ziet dat je je irritatie herkent, benoemt, en er bewust mee omgaat, leert hij meer dan van honderd uitleggen over emoties.",
    research: "Siegel, D. & Bryson, T. (2014). No-Drama Discipline",
  },

  {
    id: "zr_39",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 39,
    question: "Je hebt al drie nachten slecht geslapen door je dochter (1) die doorkomt. Overdag op je werk functioneer je prima, maar zodra je thuiskomt en je zoon (5) begint te zeuren, merk je dat je geduld op NUL staat. Waarom is de drempel thuis lager dan op je werk?",
    options: [
      {
        id: "a",
        text: "Je bent professioneler op je werk en thuis laat je jezelf meer gaan omdat het veilig voelt",
        isCorrect: false,
        feedback: "Het gaat niet om professionaliteit maar om regulatiecapaciteit. Op werk gebruik je je beperkte PFC-reserves voor werk. Thuis is de tank leeg."
      },
      {
        id: "b",
        text: "Je PFC-capaciteit is eindig: op werk gebruik je je reserves op, thuis is er niets meer over voor regulatie",
        isCorrect: true,
        feedback: "Correct! Zelfregulatie put uit een eindige bron (ego depletion). Op werk verbruik je je PFC-reserves voor concentratie en sociale interactie. Thuis is de tank leeg en springt je amygdala in het gat."
      },
      {
        id: "c",
        text: "Je kinderen zijn gewoon vervelender dan je collega's en dat maakt het moeilijker thuis",
        isCorrect: false,
        feedback: "Het gaat niet om het gedrag van je kinderen maar om jouw restcapaciteit. Dezelfde situatie die je om 10:00 aankan, is om 18:00 onhoudbaar door lege reserves."
      },
    ],
    explanation: "Ego depletion (Baumeister): zelfregulatie put uit een eindige bron van mentale energie. Na een werkdag is deze bron grotendeels opgebruikt. Slaapgebrek verergert dit exponentieel. De oplossing: bewuste herstelmomenten inbouwen voor de overgang naar thuis.",
    research: "Baumeister, R. et al. (2007). The Strength Model of Self-Regulation. Current Directions in Psychological Science",
  },

  {
    id: "zr_40",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 40,
    question: "Je zoon (8) schopt tegen de muur. Je voelt je vuisten ballen. Je merkt het, opent bewust je handen, en legt ze plat op je bovenbenen. Je hartslag daalt merkbaar. Waarom werkt dit?",
    options: [
      {
        id: "a",
        text: "Het is puur afleiding - je denkt aan je handen in plaats van aan het schoppen tegen de muur",
        isCorrect: false,
        feedback: "Dit is geen afleiding maar fysiologie. Het openen van gebalde vuisten stuurt een direct signaal naar je zenuwstelsel: geen gevaar, geen gevecht nodig."
      },
      {
        id: "b",
        text: "Je stuurt via je spieren een veiligheidssignaal naar je zenuwstelsel: open handen = geen gevaar",
        isCorrect: true,
        feedback: "Correct! Je lichaam en brein communiceren in twee richtingen. Gebalde vuisten = gevaarsignaal (sympathisch). Open handen = veiligheidssignaal (parasympathisch). Je kunt je zenuwstelsel reguleren via je spieren."
      },
      {
        id: "c",
        text: "Het werkt niet echt - je voelt je misschien even beter maar de woede komt zo weer terug",
        isCorrect: false,
        feedback: "Het werkt wel degelijk. Bottom-up regulatie (lichaam naar brein) is soms effectiever dan top-down (denken). Je lichaam stuurt direct een parasympathisch signaal."
      },
    ],
    explanation: "Bottom-up regulatie: je kunt je zenuwstelsel beinvloeden via je lichaam. Gebalde vuisten signaleren gevaar, open handen signaleren veiligheid. Dit is de bidirectionele verbinding tussen lichaam en brein die de polyvagaaltheorie beschrijft.",
    research: "Porges, S. (2011). The Polyvagal Theory",
  },

  {
    id: "zr_41",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 41,
    question: "Je dochter (4) heeft al 20 minuten een driftbui. Je hebt alles geprobeerd: valideren, nabijheid, ademhalen. Je merkt dat je ZELF trilt, je ogen prikken, en je een brok in je keel hebt. Je bent niet boos maar overweldigd. Wat is de beste actie?",
    options: [
      {
        id: "a",
        text: "Doorgaan met reguleren - als je nu stopt, leer je haar dat driftbuien werken om papa weg te krijgen",
        isCorrect: false,
        feedback: "Doorgaan buiten je eigen window is schadelijker dan even weggaan. Je kunt niet co-reguleren als je eigen systeem overbelast is. Jouw disregulatie verergert haar driftbui."
      },
      {
        id: "b",
        text: "Eerlijk zeggen: 'Papa is ook even overweldigd. Ik ga even naar de gang en kom zo terug.'",
        isCorrect: true,
        feedback: "Excellent! Dit is zelfregulatie op het hoogste niveau: je eigen grens herkennen, eerlijk communiceren, en zorgen dat je weer kunt reguleren voor je terugkomt. Dit modelleert ook zelfregulatie voor haar."
      },
      {
        id: "c",
        text: "Je partner roepen om het over te nemen en naar een andere kamer gaan zonder iets te zeggen",
        isCorrect: false,
        feedback: "Partner inschakelen is prima, maar zonder iets te zeggen voelt het voor je dochter als verlating. Een kort zinnetje ('papa komt zo terug') maakt het verschil."
      },
    ],
    explanation: "Je eigen grens herkennen en communiceren is geen zwakte maar meesterschap. Een vader die zegt 'ik ben even overweldigd' modelleert exact wat hij zijn kind wil leren: emoties herkennen, benoemen, en er verantwoordelijk mee omgaan.",
    research: "Dana, D. (2018). The Polyvagal Theory in Therapy",
  },

  {
    id: "zr_42",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 42,
    question: "Volgens de polyvagaaltheorie van Stephen Porges heeft het autonome zenuwstelsel drie toestanden: ventrale vagus (veilig/sociaal), sympathisch (fight/flight), en dorsale vagus (shutdown). Je dochter (7) vraagt of je met haar wilt tekenen. Je zit op de bank en voelt je leeg, afwezig, niet boos - gewoon niets. Je kunt jezelf er niet toe zetten om op te staan. In welke toestand zit je en wat is de weg terug?",
    options: [
      {
        id: "a",
        text: "Je bent lui en moet jezelf dwingen - zelfregulatie is een kwestie van wilskracht en discipline",
        isCorrect: false,
        feedback: "Dit is geen luiheid maar neurologie. Dorsale vagus shutdown is een toestand van het zenuwstelsel, niet een karakterfout. Wilskracht helpt niet tegen shutdown."
      },
      {
        id: "b",
        text: "Je zit in dorsale vagus (shutdown). De weg terug gaat via het lichaam: eerst sympathisch activeren (bewegen), dan pas ventrale vagus (verbinding) zoeken",
        isCorrect: true,
        feedback: "Correct! Vanuit shutdown kun je niet direct naar veilig/sociaal springen. Je moet eerst via sympathische activatie (bewegen, koud water, stretchen) terug klimmen op de polyvagale ladder."
      },
      {
        id: "c",
        text: "Je bent in sympathische modus (fight/flight) en moet kalmeren door stil te zitten en te ademen",
        isCorrect: false,
        feedback: "Nee. Sympathisch = hoge energie (spanning, woede, angst). Jij ervaart het tegenovergestelde: leegte en niets voelen. Dit is dorsale vagus, niet sympathisch."
      },
    ],
    explanation: "De polyvagale ladder: ventrale vagus (veilig, verbonden) -> sympathisch (fight/flight) -> dorsale vagus (shutdown). Belangrijk: je kunt niet van shutdown direct naar veilig springen. Je moet eerst omhoog via sympathische activatie (bewegen) en dan pas naar ventrale vagus (verbinding).",
    research: "Dana, D. (2018). The Polyvagal Theory in Therapy",
  },

  {
    id: "zr_43",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 43,
    question: "Je loopt een kamer in waar je kinderen (5 en 9) aan het ruzieen zijn. Voordat je bewust kunt nadenken, voel je je lichaam verstijven en je hartslag stijgen. Je hebt nog niets gezien of gehoord dat gevaarlijk is, maar je zenuwstelsel reageert al. Dit fenomeen heet neuroceptie. Wat is het?",
    options: [
      {
        id: "a",
        text: "Het is gewoon een gewoonte - je reageert zo omdat je het al zo vaak hebt meegemaakt met hun ruzies",
        isCorrect: false,
        feedback: "Het gaat verder dan gewoonte. Neuroceptie is een autonoom, onbewust proces van je zenuwstelsel dat gevaar detecteert VOORDAT je bewust waarneemt. Het is sneller dan denken."
      },
      {
        id: "b",
        text: "Neuroceptie is de onbewuste gevaarsdetectie van je zenuwstelsel - het scant de omgeving en reageert VOORDAT je bewust waarneemt",
        isCorrect: true,
        feedback: "Correct! Neuroceptie (Porges) is de continue, onbewuste scanning van je zenuwstelsel op signalen van veiligheid of gevaar. Het reageert in milliseconden, ver voor je bewuste waarneming."
      },
      {
        id: "c",
        text: "Je hebt last van angstklachten en zou naar een therapeut moeten gaan voor behandeling",
        isCorrect: false,
        feedback: "Neuroceptie is geen stoornis maar een universeel neurologisch proces. Iedereen heeft het. Het probleem ontstaat als je neuroceptie te gevoelig is afgesteld door chronische stress."
      },
    ],
    explanation: "Neuroceptie (Porges, 2004): het onbewuste scanningsproces van je autonome zenuwstelsel. Het detecteert gevaar of veiligheid via geluiden, gezichtsuitdrukkingen, lichaamshoudingen en stemtoon - allemaal ONDER de drempel van bewust waarnemen. Bij chronische stress wordt neuroceptie overgevoelig.",
    research: "Porges, S. (2004). Neuroception: A Subconscious System for Detecting Threats and Safety. Zero to Three, 24(5)",
  },

  {
    id: "zr_44",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 44,
    question: "Je staat in de keuken en hoort je zoon (4) vallen en huilen in de woonkamer. VOORDAT je bewust besluit iets te doen, ben je al onderweg naar hem toe. Je hart bonst, je spieren zijn gespannen. Twee seconden later zie je dat hij alleen zijn torentje heeft omgegooid - hij is niet gewond. Maar je lichaam is nog in alarm. Wat is er neurologisch gebeurd?",
    options: [
      {
        id: "a",
        text: "Je neuroceptie detecteerde een gevaarsignaal (huilen na val) en activeerde je sympathisch zenuwstelsel voordat je PFC de situatie kon beoordelen",
        isCorrect: true,
        feedback: "Correct! Je neuroceptie reageerde op het geluid van vallen + huilen als gevaarsignaal. Je sympathisch systeem activeerde in milliseconden. De PFC-beoordeling (niet gewond) kwam seconden later. Dit is adaptief - behalve als het te vaak en te intens gebeurt."
      },
      {
        id: "b",
        text: "Je maakte je gewoon zorgen als ouder - dit is een heel normale ouderlijke reactie en niet neurologisch",
        isCorrect: false,
        feedback: "Het IS een normale ouderlijke reactie, maar het IS ook neurologisch. De snelheid (je was al onderweg voor je nadacht) toont dat je neuroceptie je bewuste brein omzeilde."
      },
      {
        id: "c",
        text: "Je amygdala reageerde op het huilen alsof het een gevaarlijke situatie betrof uit je eigen verleden",
        isCorrect: false,
        feedback: "Dit hoeft geen trigger uit het verleden te zijn. Neuroceptie is een universeel beschermingsmechanisme dat bij alle ouders actief is. Het wordt problematisch als de respons disproportioneel is."
      },
    ],
    explanation: "Neuroceptie is adaptief: het beschermt je kind door sneller te reageren dan bewust denken. Het wordt problematisch bij chronische stress, wanneer het systeem overgevoelig wordt en alles als gevaar interpreteert - ook onschuldige situaties.",
    research: "Porges, S. (2011). The Polyvagal Theory",
  },

  {
    id: "zr_45",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 45,
    question: "Je dochter (3) huilt en strekt haar armpjes naar je uit. Je tilt haar op en merkt iets bijzonders: JOUW hartslag daalt ook. Je voelde je gestrest, maar het vasthouden van je kind kalmeert je. Hoe verklaart de wetenschap dit?",
    options: [
      {
        id: "a",
        text: "Het is een placebo-effect: je denkt dat je kalmer wordt omdat je weet dat je een goede vader bent",
        isCorrect: false,
        feedback: "Dit is geen placebo maar meetbare fysiologie. Oxytocine-afgifte bij fysiek contact activeert het parasympathisch zenuwstelsel bij BEIDE partijen."
      },
      {
        id: "b",
        text: "Co-regulatie is tweerichtingsverkeer: niet alleen jij reguleert haar, maar zij reguleert ook jou via fysiek contact en oxytocine",
        isCorrect: true,
        feedback: "Correct! Co-regulatie is bidirectioneel. Fysiek contact triggert oxytocine-afgifte bij vader en kind. Jouw kind is niet alleen ontvanger maar ook bron van regulatie. Dit is de biologische basis van het vader-kind bond."
      },
      {
        id: "c",
        text: "Je wordt kalmer omdat het huilen stopt zodra je haar optilt, en stilte is rustgevend voor je",
        isCorrect: false,
        feedback: "Vaak huilt een kind nog even door na optillen. Toch daalt je hartslag al. Het is het fysieke contact, niet de stilte, dat je systeem reguleert."
      },
    ],
    explanation: "Co-regulatie is bidirectioneel: ouder reguleert kind EN kind reguleert ouder. Fysiek contact triggert oxytocine bij beide. Dit verklaart waarom vaders zich vaak beter voelen NA het troosten van hun kind. Je kind is ook jouw regulatiebron.",
    research: "Porges, S. (2011). The Polyvagal Theory; Feldman, R. (2012). Oxytocin and social affiliation in humans. Hormones and Behavior",
  },

  {
    id: "zr_46",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 46,
    question: "Antonio Damasio beschrijft het concept van somatische markers: lichamelijke signalen die je helpen beslissingen te nemen. Je staat op het punt om tegen je zoon (11) te schreeuwen over zijn slechte rapport. Je voelt een knoop in je maag. Wat zegt de somatische marker theorie over deze knoop?",
    options: [
      {
        id: "a",
        text: "De knoop is een teken dat je maag van streek is door de stress - het is een puur fysiek fenomeen",
        isCorrect: false,
        feedback: "De knoop is niet 'puur fysiek'. Somatische markers zijn lichamelijke signalen die emotionele informatie dragen. Je lichaam waarschuwt je dat schreeuwen niet de juiste keuze is."
      },
      {
        id: "b",
        text: "Je lichaam stuurt een waarschuwingssignaal op basis van eerdere ervaringen: 'dit pad leidt tot spijt'",
        isCorrect: true,
        feedback: "Correct! Somatische markers zijn lichamelijke echo's van eerdere ervaringen. De knoop in je maag is je lichaam dat zegt: 'de vorige keer dat je schreeuwde, voelde je spijt.' Het is een waarschuwingssysteem dat sneller werkt dan rationeel denken."
      },
      {
        id: "c",
        text: "Je bent gespannen en de knoop is een bijeffect van de adrenaline in je systeem",
        isCorrect: false,
        feedback: "Adrenaline veroorzaakt andere signalen (hartslag, trillen). Een knoop in je maag is specifieker: het is een somatische marker die een eerdere emotionele ervaring signaleert."
      },
    ],
    explanation: "Somatische markers (Damasio, 1994): lichamelijke signalen die onbewust emotionele informatie dragen op basis van eerdere ervaringen. Ze helpen je sneller en beter beslissen dan puur rationeel denken. Leer je somatische markers te herkennen als vader.",
    research: "Damasio, A. (1994). Descartes\' Error: Emotion, Reason, and the Human Brain",
  },

  {
    id: "zr_47",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 47,
    question: "Je hebt net geschreeuwd tegen je dochter (6) en je voelt intense schaamte. Je maag keert om, je wilt je verstoppen. Volgens Damasio is deze lichamelijke schaamte-reactie een somatische marker. Hoe kun je deze marker gebruiken voor betere zelfregulatie?",
    options: [
      {
        id: "a",
        text: "De schaamte zo snel mogelijk wegdrukken zodat je kunt functioneren en niet stil blijft staan bij wat er is gebeurd",
        isCorrect: false,
        feedback: "Schaamte wegdrukken verwijdert het leersignaal. De somatische marker is juist waardevol: het is je lichaam dat je helpt om de volgende keer anders te kiezen."
      },
      {
        id: "b",
        text: "De schaamte bewust voelen en opslaan als toekomstig waarschuwingssignaal: de volgende keer dat je wilt schreeuwen, zal je lichaam je eerder waarschuwen",
        isCorrect: true,
        feedback: "Correct! Door de schaamte bewust te voelen (niet te analyseren maar te ervaren), sla je een somatische marker op. De volgende keer dat je op het punt staat te schreeuwen, zal je lichaam dit signaal eerder sturen."
      },
      {
        id: "c",
        text: "Een lijst maken van alle keren dat je geschreeuwd hebt zodat je het rationeel kunt voorkomen",
        isCorrect: false,
        feedback: "Lijstjes maken is cognitief (PFC). Somatische markers werken juist ONDER het bewustzijn en zijn sneller dan rationele analyse. Voel de schaamte, analyseer het niet."
      },
    ],
    explanation: "Somatische markers worden versterkt door bewuste aandacht. Als je de schaamte na schreeuwen VOELT (zonder te analyseren), slaat je lichaam dit op als toekomstig waarschuwingssignaal. De volgende keer zal de knoop in je maag eerder komen - VOOR je schreeuwt.",
    research: "Damasio, A. (1994). Descartes\' Error: Emotion, Reason, and the Human Brain",
  },

  {
    id: "zr_48",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 48,
    question: "Je merkt dat je in stressvolle opvoedsituaties twee patronen hebt: soms explodeer je (schreeuwen, dreigen), soms sluit je af (weglopen, niets voelen, tv aanzetten). Polyvagaal gezien schiet je wisselend in twee toestanden. Wat is de overeenkomst?",
    options: [
      {
        id: "a",
        text: "Je bent inconsistent als ouder en je kinderen weten nooit wat ze kunnen verwachten van je",
        isCorrect: false,
        feedback: "Het is niet inconsistentie maar twee kanten van dezelfde medaille: beide zijn uit-je-window reacties. Exploderen = hyperarousal, afsluiten = hypoarousal. Geen van beide is bewust gekozen."
      },
      {
        id: "b",
        text: "Beide patronen zijn het verlaten van je window of tolerance: exploderen is hyperarousal (sympathisch), afsluiten is hypoarousal (dorsaal vagaal). Je ventrale vagus is te zwak om je in het midden te houden",
        isCorrect: true,
        feedback: "Correct! Exploderen (sympathisch) en afsluiten (dorsaal vagaal) zijn twee kanten van hetzelfde probleem: een te smalle window en een te zwakke ventrale vagus. De oplossing is dezelfde: vagale tonus versterken."
      },
      {
        id: "c",
        text: "Het exploderen is het echte probleem - het afsluiten is minder schadelijk voor je kinderen",
        isCorrect: false,
        feedback: "Afsluiten is even schadelijk als exploderen. Een vader die er emotioneel niet is, is voor een kind even beangstigend als een vader die schreeuwt. Beide patronen verdienen aandacht."
      },
    ],
    explanation: "Hyperarousal (exploderen) en hypoarousal (afsluiten) zijn twee zijden van dezelfde medaille: onvoldoende ventrale vagale capaciteit. De ventrale vagus is de 'rem' die je in het midden houdt. Training van vagale tonus (ademhaling, fysiek contact, zingen) helpt bij BEIDE patronen.",
    research: "Dana, D. (2018). The Polyvagal Theory in Therapy; Porges, S. (2011). The Polyvagal Theory",
  },

  {
    id: "zr_49",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 49,
    question: "Je dochter (8) is boos en schreeuwt naar je. In plaats van te reageren, VOEL je bewust je voeten op de grond, je handen op je bovenbenen, en je adem in je buik. Je merkt dat je kalmer wordt. Van der Kolk noemt dit 'bottom-up regulatie'. Waarom werkt dit beter dan jezelf vertellen: 'Blijf kalm, het is maar een kind'?",
    options: [
      {
        id: "a",
        text: "Bottom-up (lichaam naar brein) omzeilt de amygdala via directe sensorische input, top-down (denken) vereist een PFC die al offline is",
        isCorrect: true,
        feedback: "Correct! Tijdens stress is je PFC verzwakt. Top-down instructies ('blijf kalm') vereisen precies het systeem dat offline is. Bottom-up (voeten voelen, ademhaling) werkt via het zenuwstelsel en omzeilt de falende PFC."
      },
      {
        id: "b",
        text: "Het maakt geen verschil - beide methoden zijn even effectief bij het kalmeren van je zenuwstelsel",
        isCorrect: false,
        feedback: "Onjuist. Onderzoek toont dat bottom-up regulatie significant effectiever is tijdens acute stress dan cognitieve strategieen. Je PFC is te verzwakt voor top-down instructies."
      },
      {
        id: "c",
        text: "Bottom-up werkt alleen bij lichamelijke stress, niet bij emotionele stress van je kind",
        isCorrect: false,
        feedback: "Emotionele stress IS lichamelijke stress. Elke emotie heeft een lichamelijke component. Bottom-up regulatie werkt bij alle vormen van stress."
      },
    ],
    explanation: "Bottom-up regulatie (Van der Kolk): het lichaam als ingang voor het zenuwstelsel. Tijdens stress is de PFC offline, waardoor cognitieve strategieen falen. Sensorische input (voeten voelen, ademhaling, temperatuur) bereikt het zenuwstelsel direct en herstelt regulatie van onderaf.",
    research: "Van der Kolk, B. (2014). The Body Keeps the Score",
  },

  {
    id: "zr_50",
    skill: "Zelfregulatie",
    type: "quiz",
    difficulty: "expert",
    order: 50,
    question: "Na maanden oefenen met zelfregulatie merk je iets bijzonders: als je zoon (7) een driftbui heeft, kun je nu NAAST je eigen activatie ook ZIJN activatie voelen. Je voelt zijn spanning in je eigen lichaam maar wordt er niet door meegesleurd. Wat heb je ontwikkeld?",
    options: [
      {
        id: "a",
        text: "Je bent overgevoelig geworden voor de emoties van je kind en dat is eigenlijk niet gezond voor jezelf",
        isCorrect: false,
        feedback: "Dit is geen overgevoeligheid maar een vaardigheid. Het verschil: overgevoeligheid sleurt je mee, regulatie-vaardigheid laat je voelen ZONDER meegesleurd te worden."
      },
      {
        id: "b",
        text: "Je hebt je window of tolerance verbreed: je kunt de activatie van je kind containen (vasthouden) zonder er zelf in mee te gaan",
        isCorrect: true,
        feedback: "Correct! Dit is het hoogste niveau van co-regulatie: containment. Je window is breed genoeg om jouw activatie EN die van je kind te bevatten. Je voelt het maar wordt er niet door overgenomen. Dit is de kern van emotioneel vaderschap."
      },
      {
        id: "c",
        text: "Je hebt geleerd om je emoties beter te onderdrukken zodat ze niet meer invloed hebben op je",
        isCorrect: false,
        feedback: "Je onderdrukt niet - je VOELT de activatie. Het verschil is dat je window breed genoeg is om het te bevatten. Onderdrukking zou betekenen dat je niets voelt."
      },
    ],
    explanation: "Containment (Bion/Winnicott): het vermogen om de emotionele activatie van een ander te voelen en vast te houden zonder erin mee te gaan. Dit vereist een brede window of tolerance en een sterke ventrale vagale tonus. Het is de kern van co-regulatie en de ultieme vaardigheid van een emotioneel beschikbare vader.",
    research: "Fonagy, P. et al. (2002). Affect Regulation, Mentalization, and the Development of the Self; Porges, S. (2011). The Polyvagal Theory",
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

  {
    id: "aa_31",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "basis",
    order: 31,
    question: "Daan (7) is aan het spelen in de woonkamer. Zijn vader zit op de bank en scrollt door sociale media op zijn telefoon. Daan zegt drie keer 'Papa, kijk!' voordat zijn vader opkijkt en zegt 'Ja, knap hoor' zonder te zien wat Daan deed. Wat is hier het grootste probleem?",
    options: [
      {
        id: "a",
        text: "Daan moet leren geduld te hebben en niet steeds aandacht te vragen.",
        isCorrect: false,
        feedback: "Kinderen van deze leeftijd hebben juist bevestiging nodig van hun ouders. Het is een fundamentele behoefte om gezien te worden. Daan vraagt niet te veel; hij vraagt precies wat hij nodig heeft.",
      },
      {
        id: "b",
        text: "De vader is fysiek aanwezig maar mentaal afwezig, waardoor Daan zich niet echt gezien voelt.",
        isCorrect: true,
        feedback: "Precies. Fysieke aanwezigheid zonder mentale betrokkenheid wordt ook wel 'technoference' genoemd. Kinderen merken feilloos wanneer een ouder er niet echt bij is. Dit ondermijnt hun gevoel van eigenwaarde en veilige hechting.",
      },
      {
        id: "c",
        text: "Er is geen probleem; ouders mogen ook even ontspannen terwijl kinderen spelen.",
        isCorrect: false,
        feedback: "Hoewel ouders zeker rustmomenten nodig hebben, gaat het hier om een patroon waarbij de vader structureel niet reageert op Daans bids for connection. Het herhaalde negeren van contactpogingen schaadt de relatie op termijn.",
      },
    ],
    explanation: "Onderzoek naar 'technoference' — de interferentie van technologie in ouder-kindinteracties — toont aan dat smartphone-gebruik van ouders samenhangt met minder responsief ouderschap en meer gedragsproblemen bij kinderen. Kinderen interpreteren het niet-reageren als een signaal dat ze niet belangrijk genoeg zijn.",
    research: "McDaniel & Radesky (2018) - Technoference: Parent distraction with technology and associations with child behavior problems",
  },
  {
    id: "aa_32",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "basis",
    order: 32,
    question: "Pieter is vader van Sanne (4). Na een lange werkdag komt hij thuis en Sanne wil samen puzzelen. Pieter vindt puzzelen saai maar gaat toch zitten. Wat is de beste manier om hiermee om te gaan?",
    options: [
      {
        id: "a",
        text: "Naast Sanne zitten en puzzelen terwijl hij in gedachten zijn e-mails doorneemt — hij is er tenminste bij.",
        isCorrect: false,
        feedback: "Alleen fysiek aanwezig zijn is niet genoeg. Kinderen voelen haarscherp aan wanneer een ouder mentaal ergens anders is. Dit soort halfslachtige aanwezigheid kan zelfs frustrerender zijn dan eerlijk zeggen dat je even tijd nodig hebt.",
      },
      {
        id: "b",
        text: "Eerlijk tegen Sanne zeggen dat puzzelen niet zijn favoriete bezigheid is en een andere activiteit voorstellen.",
        isCorrect: false,
        feedback: "Hoewel eerlijkheid belangrijk is, gaat het bij aanwezigheid juist om het volgen van het kind. Door altijd je eigen voorkeur te kiezen, mis je de kans om te laten zien dat Sannes interesses ertoe doen. Het kind voelt zich dan niet gehoord in wat zij belangrijk vindt.",
      },
      {
        id: "c",
        text: "Bewust zijn eigen verveling parkeren en zich richten op Sannes beleving: haar plezier, haar strategie, haar trots.",
        isCorrect: true,
        feedback: "Dit is de kern van aanwezigheid: niet de activiteit hoeft boeiend te zijn, maar de connectie met je kind. Door je te verdiepen in hoe Sanne de puzzel ervaart, verschuift je focus van de taak naar de relatie. Dit is waar echte kwaliteitstijd ontstaat.",
      },
    ],
    explanation: "Kwaliteitstijd gaat niet over spectaculaire activiteiten, maar over de kwaliteit van aandacht tijdens alledaagse momenten. Onderzoek toont aan dat kinderen het meest profiteren van ouders die 'child-led play' praktiseren: het kind bepaalt de activiteit en de ouder volgt met oprechte aandacht.",
    research: "Ginsburg (2007) - The importance of play in promoting healthy child development and maintaining strong parent-child bonds",
  },
  {
    id: "aa_33",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 33,
    question: "Mark werkt vier dagen thuis en merkt dat zijn zoon Luuk (9) steeds zijn werkkamer binnenloopt om iets te vertellen. Mark raakt gefrustreerd omdat hij zich niet kan concentreren. Wat is de meest effectieve aanpak?",
    options: [
      {
        id: "a",
        text: "Een duidelijk systeem afspreken: als het rode licht brandt mag Luuk niet storen, maar bij het groene licht is papa beschikbaar — en dan ook écht beschikbaar.",
        isCorrect: true,
        feedback: "Dit combineert duidelijke grenzen met betrouwbare beschikbaarheid. Het rode/groene licht geeft Luuk voorspelbaarheid en leert hem wachten, terwijl de groene momenten hem verzekeren dat papa er straks echt voor hem is. De sleutel is dat je tijdens 'groen' ook volledig aanwezig bent.",
      },
      {
        id: "b",
        text: "Luuk uitleggen dat thuiswerken hetzelfde is als op kantoor zijn en dat hij papa niet mag storen tot het werk klaar is.",
        isCorrect: false,
        feedback: "Voor een kind van 9 is het onnatuurlijk dat papa er wel is maar niet beschikbaar. Dit creëert een verwarrende situatie: fysiek dichtbij maar emotioneel onbereikbaar. Zonder geplande contactmomenten zal Luuks behoefte aan verbinding alleen maar toenemen.",
      },
      {
        id: "c",
        text: "De werkkamerdeur altijd open laten zodat Luuk weet dat hij welkom is — grenzen stellen is niet nodig bij een goede band.",
        isCorrect: false,
        feedback: "Hoewel openheid mooi klinkt, is dit niet realistisch als je geconcentreerd moet werken. Zonder grenzen raakt Mark steeds meer gefrustreerd, wat uiteindelijk de kwaliteit van alle interacties aantast. Kinderen hebben juist baat bij voorspelbare structuur.",
      },
    ],
    explanation: "Bij thuiswerken is het cruciaal om de grens tussen werk en gezin expliciet en voorspelbaar te maken. Onderzoek laat zien dat niet de hoeveelheid beschikbare tijd bepalend is, maar de voorspelbaarheid en kwaliteit ervan. Kinderen die weten wanneer hun ouder beschikbaar is, ervaren minder stress dan kinderen die continu moeten 'testen' of hun ouder er is.",
    research: "Milkie, Nomaguchi & Denny (2015) - Does the amount of time mothers spend with children or adolescents matter?",
  },
  {
    id: "aa_34",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 34,
    question: "Rob komt thuis van werk en zijn hoofd zit vol met een conflict met een collega. Zijn dochter Eva (6) rent enthousiast op hem af om te vertellen over haar schooldag. Rob merkt dat hij 'ja' en 'oh' zegt zonder echt te luisteren. Wat zou Rob het beste kunnen doen?",
    options: [
      {
        id: "a",
        text: "Gewoon doorluisteren — Eva merkt het verschil toch niet en het gaat vanzelf over.",
        isCorrect: false,
        feedback: "Kinderen zijn verrassend goed in het oppikken van emotionele signalen. Eva voelt aan gezichtsuitdrukkingen, stemtoon en lichaamshouding dat haar vader er niet echt bij is. Dit herhaalde patroon leert haar dat haar verhalen niet de moeite waard zijn.",
      },
      {
        id: "b",
        text: "Eerlijk zeggen: 'Eva, ik wil heel graag naar je luisteren, maar papa heeft even 10 minuten nodig om tot rust te komen. Daarna ben ik er helemaal voor jou.'",
        isCorrect: true,
        feedback: "Dit is een krachtige combinatie van eerlijkheid, zelfregulatie en betrouwbaarheid. Rob modelleert hoe je voor je eigen behoeften opkomt zonder de ander af te wijzen. Cruciaal is dat hij zijn belofte nakomt en na 10 minuten écht aanwezig is voor Eva.",
      },
      {
        id: "c",
        text: "Zijn eigen zorgen wegduwen en zich forceren om aandachtig te luisteren — als vader moet je altijd beschikbaar zijn.",
        isCorrect: false,
        feedback: "Hoewel de intentie goed is, is geforceerde aandacht niet duurzaam en vaak ook niet overtuigend. Bovendien leert Rob zijn dochter hiermee impliciet dat je eigen gevoelens er niet toe doen. Een kort transitiemoment nemen is gezonder voor beiden.",
      },
    ],
    explanation: "De overgang van werk naar thuis is een kritiek moment voor vaders. Onderzoek toont aan dat 'spillover' van werkstress naar het gezin de kwaliteit van ouder-kindinteracties significant vermindert. Een bewuste transitieritueel — zelfs kort — helpt vaders om mentaal om te schakelen en verhoogt de kwaliteit van de daaropvolgende interactie.",
    research: "Repetti & Wang (2017) - Effects of job stress on family relationships: A daily diary study",
  },
  {
    id: "aa_35",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 35,
    question: "Thomas heeft twee kinderen: Bram (10) en Noor (3). Als hij met Noor speelt, wil Bram ook aandacht. Als hij Bram helpt met huiswerk, klimt Noor op zijn schoot. Thomas voelt zich constant verscheurd. Wat is de beste strategie?",
    options: [
      {
        id: "a",
        text: "Altijd prioriteit geven aan de jongste, want die heeft de meeste aandacht nodig op basis van ontwikkeling.",
        isCorrect: false,
        feedback: "Hoewel jongere kinderen intensievere verzorging nodig hebben, voelt Bram zich dan structureel op de tweede plek. Oudere kinderen die zich genegeerd voelen, kunnen gedragsproblemen ontwikkelen of zich terugtrekken. Beide kinderen verdienen momenten van onverdeelde aandacht.",
      },
      {
        id: "b",
        text: "Vaste één-op-één momenten inplannen met elk kind, zodat beide kinderen weten dat ze exclusieve papa-tijd krijgen.",
        isCorrect: true,
        feedback: "Dit is de meest effectieve strategie. Door voorspelbare één-op-één tijd in te bouwen, weten beide kinderen dat hun moment komt. Dit vermindert de competitie om aandacht en geeft elk kind de ervaring volledig gezien te worden. Zelfs 15 minuten per dag per kind maakt een groot verschil.",
      },
      {
        id: "c",
        text: "Zoveel mogelijk samen doen met alle drie, zodat niemand zich buitengesloten voelt.",
        isCorrect: false,
        feedback: "Gezamenlijke activiteiten zijn waardevol, maar vervangen niet de behoefte aan individuele aandacht. Tijdens groepsactiviteiten krijgt vaak het meest veeleisende kind de aandacht, terwijl het stillere kind leert zich onzichtbaar te maken. Beide kinderen hebben ook exclusieve momenten nodig.",
      },
    ],
    explanation: "Onderzoek naar gezinnen met meerdere kinderen toont aan dat 'differential parenting' — het verschil in aandacht tussen broers en zussen — een sterkere voorspeller is van aanpassingsproblemen dan de absolute hoeveelheid aandacht. Kinderen vergelijken voortdurend. Voorspelbare één-op-één tijd vermindert rivalisatie en versterkt de individuele hechtingsrelatie.",
    research: "Jenkins, Rasbash & O'Connor (2003) - The role of the shared family context in differential parenting",
  },
  {
    id: "aa_36",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 36,
    question: "Jeroen is weekendvader na een scheiding. Hij heeft zijn dochter Fleur (8) elk weekend. Hij probeert elk weekend spectaculair te maken: pretparken, bioscoop, uit eten. Fleur lijkt dit leuk te vinden, maar Jeroen voelt dat er iets mist. Wat zou Jeroen moeten overwegen?",
    options: [
      {
        id: "a",
        text: "Nog meer activiteiten plannen, want kinderen na een scheiding hebben extra positieve ervaringen nodig om het gemis te compenseren.",
        isCorrect: false,
        feedback: "Dit zogenaamde 'Disneyland-dad' patroon voelt voor het kind uiteindelijk onnatuurlijk. Fleur mist niet spektakel maar alledaagsheid: samen boodschappen doen, op de bank lezen, even niks doen. De continue stroom van activiteiten kan zelfs een manier zijn om ongemakkelijke gevoelens te vermijden.",
      },
      {
        id: "b",
        text: "Meer alledaagse momenten inbouwen — samen koken, een wandeling, gewoon thuis zijn — zodat Fleur ook de 'gewone' papa ervaart.",
        isCorrect: true,
        feedback: "Juist in de alledaagse momenten ontstaat echte verbinding. Fleur heeft behoefte aan een vader die er gewoon ís, niet een entertainmentmanager. Samen stilzitten, een boek lezen of boodschappen doen creëert ruimte voor spontane gesprekken en een gevoel van normaliteit dat na een scheiding extra waardevol is.",
      },
      {
        id: "c",
        text: "Fleur laten kiezen wat ze elk weekend wil doen, zodat zij het gevoel heeft controle te hebben.",
        isCorrect: false,
        feedback: "Hoewel keuzes geven goed is, legt dit te veel verantwoordelijkheid bij een kind van 8. Kinderen na een scheiding worstelen soms al met loyaliteitsgevoelens; ook nog verantwoordelijk zijn voor het 'succes' van het weekend is een extra last. Fleur heeft een vader nodig die de regie neemt en rust biedt.",
      },
    ],
    explanation: "Na een scheiding vervallen veel niet-inwonende vaders in het 'Disneyland dad' patroon: elk bezoek moet bijzonder zijn. Onderzoek toont echter aan dat kinderen meer baat hebben bij 'routine involvement' — deelname aan alledaagse activiteiten zoals huiswerk, maaltijden en bedtijdrituelen — dan bij recreatieve activiteiten alleen. De kwaliteit van de alledaagse betrokkenheid voorspelt het welzijn van het kind beter.",
    research: "Amato & Gilbreth (1999) - Nonresident fathers and children's well-being: A meta-analysis",
  },
  {
    id: "aa_37",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 37,
    question: "Lars is vader van Tim (14), die steeds vaker op zijn kamer zit en korte antwoorden geeft. Lars mist de tijd dat Tim nog graag samen dingen deed. Als Lars vraagt 'Hoe was je dag?', zegt Tim altijd 'Goed.' Hoe kan Lars het beste aanwezig blijven?",
    options: [
      {
        id: "a",
        text: "Tim zijn ruimte geven en wachten tot Tim zelf komt — je kunt een tiener niet dwingen.",
        isCorrect: false,
        feedback: "Hoewel ruimte geven belangrijk is, kan volledig terugtrekken door de vader worden ervaren als onverschilligheid. Tieners die lijken af te wijzen, testen tegelijkertijd of hun ouders er nog steeds voor hen zijn. Helemaal loslaten bevestigt hun angst dat ze er alleen voor staan.",
      },
      {
        id: "b",
        text: "Aandringen op gesprekken en gezamenlijke activiteiten — structuur is juist nu belangrijk.",
        isCorrect: false,
        feedback: "Aandringen werkt bij tieners vaak averechts en versterkt het verzet. Tim heeft de autonomie nodig om zelf te bepalen wanneer hij contact zoekt. Dwang ondermijnt precies het vertrouwen dat je probeert op te bouwen.",
      },
      {
        id: "c",
        text: "Beschikbaar blijven zonder te pushen: aanwezig zijn in gedeelde ruimtes, korte contactmomenten creëren (autorit, samen eten) en interesse tonen in Tims wereld.",
        isCorrect: true,
        feedback: "Dit is de kunst van aanwezigheid bij tieners: een balans tussen beschikbaarheid en respect voor autonomie. Korte, laagdrempelige contactmomenten — naast elkaar in de auto, samen een snack pakken — zijn vaak effectiever dan face-to-face gesprekken. Tim moet voelen dat de deur altijd open staat, zonder dat hij erdoorheen geduwd wordt.",
      },
    ],
    explanation: "Tijdens de puberteit verschuift de hechtingsrelatie: tieners zoeken meer autonomie maar hebben tegelijkertijd de veilige basis van hun ouders nog steeds nodig. Onderzoek toont aan dat 'shoulder-to-shoulder' activiteiten (naast elkaar iets doen) voor tieners beter werken dan 'face-to-face' gesprekken. Vaders die beschikbaar blijven zonder te pushen, behouden de beste relatie met hun pubers.",
    research: "Steinberg & Silk (2002) - Parenting adolescents. In: Bornstein (Ed.), Handbook of Parenting",
  },
  {
    id: "aa_38",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 38,
    question: "Wouter neemt zijn zoon Jesse (5) mee naar de speeltuin. Terwijl Jesse speelt, haalt Wouter zijn telefoon tevoorschijn om 'even snel' werkmails te checken. Als hij opkijkt, staat Jesse boven aan de glijbaan en roept: 'Papa, heb je gezien hoe hoog ik was?' Wouter heeft het niet gezien. Wat toont onderzoek aan over dit soort momenten?",
    options: [
      {
        id: "a",
        text: "Eén gemist moment maakt niet uit; het gaat om het totaalplaatje van de opvoeding.",
        isCorrect: false,
        feedback: "Hoewel één moment inderdaad niet allesbepalend is, tonen studies aan dat deze zogenaamde 'bids for connection' cruciale micro-momenten zijn. Als een kind herhaaldelijk ervaart dat zijn pogingen tot contact worden genegeerd, leert het om minder te vragen — en dat ondermijnt de hechting op termijn.",
      },
      {
        id: "b",
        text: "Dit soort herhaalde gemiste 'bids for connection' tast op termijn het vertrouwen van het kind in de beschikbaarheid van de ouder aan.",
        isCorrect: true,
        feedback: "Precies. John Gottman's onderzoek naar 'bids for connection' laat zien dat het herhaaldelijk negeren van contactpogingen — zelfs kleine — leidt tot emotionele distantie. Jesse leert dat zijn enthousiasme niet de moeite waard is om te delen. Het consistent beantwoorden van bids is een van de sterkste voorspellers van relatiekwaliteit.",
      },
      {
        id: "c",
        text: "Kinderen in de speeltuin moeten juist leren zelfstandig te spelen zonder constante bevestiging van een ouder.",
        isCorrect: false,
        feedback: "Er is een verschil tussen een kind dat tevreden zelfstandig speelt en een kind dat actief contact zoekt en genegeerd wordt. Jesse vraagt niet om constante aandacht; hij deelt een trots moment. Het niet beantwoorden van zulke specifieke contactpogingen is wezenlijk anders dan een kind ruimte geven om zelf te spelen.",
      },
    ],
    explanation: "Gottman's onderzoek naar 'bids for connection' toont aan dat de manier waarop partners en ouders reageren op kleine contactpogingen bepalend is voor de relatiekwaliteit. Er zijn drie reacties mogelijk: 'turning toward' (positief reageren), 'turning away' (negeren) en 'turning against' (afwijzen). Smartphone-gebruik verhoogt het 'turning away' gedrag bij ouders significant.",
    research: "Gottman & DeClaire (2001) - The Relationship Cure; Radesky et al. (2014) - Patterns of mobile device use by caregivers and children during meals in fast food restaurants",
  },
  {
    id: "aa_39",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 39,
    question: "Rick is vader van tweeling Sem en Lotte (7). Sem is druk en vraagt veel aandacht, terwijl Lotte stil en zelfstandig is. Rick merkt aan het eind van de dag dat hij nauwelijks met Lotte heeft gesproken. Waarom is dit problematisch?",
    options: [
      {
        id: "a",
        text: "Het is niet problematisch; Lotte is blijkbaar zelfredzaam en heeft minder aandacht nodig dan Sem.",
        isCorrect: false,
        feedback: "Dit is een veelvoorkomende valkuil. Stille, 'makkelijke' kinderen hebben niet minder behoefte aan aandacht — ze uiten die behoefte alleen anders. Lotte kan geleerd hebben dat ze aandacht niet 'verdient' tenzij ze luidruchtig is, of ze trekt zich terug omdat ze het gevecht om aandacht al heeft opgegeven.",
      },
      {
        id: "b",
        text: "Lotte kan een patroon ontwikkelen waarin ze leert dat haar behoeften onzichtbaar zijn, wat haar hechtingsstijl en zelfbeeld beïnvloedt.",
        isCorrect: true,
        feedback: "Dit is precies het risico. Kinderen die structureel minder aandacht krijgen omdat ze 'makkelijk' zijn, ontwikkelen vaak een vermijdende hechtingsstijl: ze leren hun behoeften te onderdrukken. Lotte's stilte is geen teken van tevredenheid maar mogelijk van aanpassing. Rick moet bewust momenten creëren om met Lotte te verbinden.",
      },
      {
        id: "c",
        text: "Het enige probleem is dat Rick beter grenzen moet stellen aan Sems gedrag, dan komt er vanzelf ruimte voor Lotte.",
        isCorrect: false,
        feedback: "Hoewel grenzen aan Sems gedrag helpen, lost dit het onderliggende probleem niet op. Zelfs als Sem minder aandacht vraagt, zal Lotte niet automatisch meer gaan vragen. Rick moet actief naar Lotte toestappen. Stille kinderen hebben proactieve aandacht nodig, niet alleen ruimte die overblijft.",
      },
    ],
    explanation: "Onderzoek naar 'differential parenting' laat zien dat het stille of makkelijke kind in een gezin systematisch minder aandacht ontvangt, wat geassocieerd is met internaliserende problemen zoals angst en depressie. Deze kinderen ontwikkelen wat onderzoekers een 'compulsive self-reliance' noemen — een schijnbare zelfredzaamheid die eigenlijk een hechtingsstrategie is.",
    research: "Bowlby (1980) - Attachment and Loss; Dunn & Plomin (1990) - Separate Lives: Why Siblings Are So Different",
  },
  {
    id: "aa_40",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "gevorderd",
    order: 40,
    question: "Erik neemt elke zaterdag zijn zoon Max (11) mee naar voetbaltraining. Tijdens de training zit Erik langs de lijn op zijn laptop te werken. Na afloop vraagt Max nooit meer of papa heeft gekeken. Wat zegt dit over de situatie?",
    options: [
      {
        id: "a",
        text: "Max is volwassen genoeg om te begrijpen dat papa moet werken; hij vindt het niet erg.",
        isCorrect: false,
        feedback: "Dat Max niet meer vraagt, betekent niet dat het hem niet raakt. Kinderen die stoppen met vragen, hebben vaak geleerd dat vragen zinloos is. Dit is een teken van 'learned helplessness' in de relatie — Max heeft zich aangepast aan de emotionele onbeschikbaarheid van zijn vader.",
      },
      {
        id: "b",
        text: "Max is gestopt met vragen omdat hij geleerd heeft dat zijn vader toch niet kijkt — hij heeft zijn verwachtingen bijgesteld.",
        isCorrect: true,
        feedback: "Dit is een belangrijk signaal. Wanneer een kind stopt met het zoeken van contact, is dat zelden een teken van tevredenheid. Max heeft zijn 'internal working model' aangepast: papa is er wel maar kijkt niet, dus ik vraag niet meer. Dit patroon kan zich later doorzetten in andere relaties waarin Max leert zijn behoeften te onderdrukken.",
      },
      {
        id: "c",
        text: "Erik doet het juist goed: hij brengt Max en haalt hem op, dat is voldoende betrokkenheid.",
        isCorrect: false,
        feedback: "Logistieke betrokkenheid — brengen en halen — is belangrijk maar niet hetzelfde als emotionele aanwezigheid. Max ervaart dat papa chauffeur is, niet toeschouwer van zijn leven. Het verschil tussen 'ik breng je' en 'ik kijk naar je' is voor een kind het verschil tussen service en liefde.",
      },
    ],
    explanation: "In de hechtingstheorie wordt beschreven hoe kinderen hun 'internal working model' aanpassen op basis van de responsiviteit van hun ouders. Wanneer bids for connection herhaaldelijk worden genegeerd, stopt het kind met vragen — niet omdat de behoefte verdwijnt, maar omdat het kind leert dat de ouder onbereikbaar is. Dit is een risicofactor voor een onveilige hechtingsstijl.",
    research: "Bretherton & Munholland (2008) - Internal working models in attachment relationships: Elaborating a central construct in attachment theory",
  },
  {
    id: "aa_41",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 41,
    question: "Bas is vader van Mila (2). Tijdens het spelen pakt Mila een blokje en kijkt met grote ogen naar Bas. Bas spiegelt haar gezichtsuitdrukking, pakt ook een blokje en zegt met dezelfde intonatie: 'Ooh, een blokje!' Mila lacht en pakt het volgende blokje. Welk psychologisch concept beschrijft deze interactie het beste?",
    options: [
      {
        id: "a",
        text: "Operante conditionering: Bas bekrachtigt Mila's gedrag door positief te reageren.",
        isCorrect: false,
        feedback: "Hoewel bekrachtiging een rol speelt, mist deze verklaring de essentie van wat hier gebeurt. Het gaat niet om het aanleren van gedrag, maar om een diepere emotionele afstemming. Bas reageert niet alleen op het gedrag maar op de emotionele ervaring van Mila, en dat is fundamenteel anders dan conditionering.",
      },
      {
        id: "b",
        text: "Affect attunement: Bas stemt zich af op Mila's innerlijke beleving en spiegelt deze via een ander kanaal terug.",
        isCorrect: true,
        feedback: "Precies. Daniel Stern beschreef affect attunement als het proces waarbij de ouder de innerlijke gevoelstoestand van het kind 'vangt' en via een ander kanaal (stem, gezicht, beweging) teruggeeft. Dit gaat verder dan imitatie: het communiceert 'ik voel wat jij voelt.' Dit is de basis voor intersubjectiviteit en het gevoel begrepen te worden.",
      },
      {
        id: "c",
        text: "Scaffolding: Bas ondersteunt Mila's leerproces door haar spel te begeleiden.",
        isCorrect: false,
        feedback: "Scaffolding (Vygotsky) gaat over het ondersteunen van cognitieve ontwikkeling door hulp te bieden net boven het niveau van het kind. Hier is echter geen sprake van een leertaak. Wat Bas doet is emotioneel, niet cognitief: hij deelt in Mila's beleving. Het onderscheid is belangrijk omdat affect attunement de hechtingsrelatie voedt, niet het leervermogen.",
      },
    ],
    explanation: "Affect attunement, beschreven door Daniel Stern, is het proces waarbij een ouder de emotionele toestand van het kind waarneemt en deze via een cross-modale match teruggeeft. Het verschilt van imitatie doordat het de innerlijke beleving spiegelt, niet het uiterlijke gedrag. Dit proces is fundamenteel voor de ontwikkeling van intersubjectiviteit — het vermogen om innerlijke toestanden te delen met anderen.",
    research: "Stern (1985) - The Interpersonal World of the Infant: A View from Psychoanalysis and Developmental Psychology",
  },
  {
    id: "aa_42",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 42,
    question: "Vincent leest over 'emotionele beschikbaarheid' als concept in de opvoeding. Hij wil weten wat dit precies inhoudt. Welke omschrijving klopt volgens het Emotional Availability (EA) model?",
    options: [
      {
        id: "a",
        text: "Emotionele beschikbaarheid betekent dat de ouder altijd beschikbaar is wanneer het kind een emotionele behoefte heeft, 24 uur per dag.",
        isCorrect: false,
        feedback: "Dit is een veelvoorkomend misverstand. Het EA-model gaat niet over constante beschikbaarheid maar over de kwaliteit van de emotionele afstemming. Het omvat vier ouderdimensies (sensitiviteit, structurering, non-intrusiviteit en non-hostiliteit) en twee kinddimensies (responsiviteit en betrokkenheid). Het is een dyadisch concept, geen eenzijdige eis aan de ouder.",
      },
      {
        id: "b",
        text: "Emotionele beschikbaarheid is een dyadisch concept met zes dimensies dat beschrijft hoe ouder en kind wederzijds emotioneel op elkaar zijn afgestemd.",
        isCorrect: true,
        feedback: "Correct. Het EA-model van Biringen onderscheidt vier ouderdimensies (sensitiviteit, structurering, non-intrusiviteit en non-hostiliteit) en twee kinddimensies (responsiviteit naar en betrokkenheid van de ouder). Het cruciale inzicht is dat emotionele beschikbaarheid geen eigenschap is van de ouder alleen, maar van de relatie.",
      },
      {
        id: "c",
        text: "Emotionele beschikbaarheid is hetzelfde als veilige hechting, maar dan gemeten vanuit het perspectief van de ouder in plaats van het kind.",
        isCorrect: false,
        feedback: "Hoewel EA en hechting gerelateerd zijn, zijn het verschillende constructen. Hechting beschrijft het interne werkmodel van het kind over relaties; EA beschrijft de observeerbare kwaliteit van de ouder-kindinteractie in het hier en nu. EA is een betere voorspeller van dagelijkse interactiekwaliteit, terwijl hechting meer zegt over langetermijnpatronen.",
      },
    ],
    explanation: "Het Emotional Availability (EA) model van Zeynep Biringen biedt een wetenschappelijk kader voor het meten van de emotionele kwaliteit van ouder-kindinteracties. In tegenstelling tot hechtingsmetingen, die zich richten op het interne werkmodel van het kind, meet EA de observeerbare emotionele afstemming in de dyadische interactie. Het model wordt wereldwijd gebruikt in onderzoek en klinische praktijk.",
    research: "Biringen (2000) - Emotional availability: Conceptualization and research findings",
  },
  {
    id: "aa_43",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 43,
    question: "Arjan leest een artikel over 'mindful parenting' en vraagt zich af hoe dit verschilt van gewoon een goede ouder zijn. Wat is het onderscheidende kenmerk van mindful parenting volgens het wetenschappelijke model?",
    options: [
      {
        id: "a",
        text: "Mindful parenting betekent nooit boos worden op je kind en altijd kalm blijven.",
        isCorrect: false,
        feedback: "Dit is een misvatting. Mindful parenting gaat niet over het onderdrukken van emoties, maar over het bewust waarnemen ervan zonder er automatisch naar te handelen. Een mindful ouder mag boos worden — het verschil is dat hij de boosheid opmerkt, even pauzeert en dan bewust kiest hoe hij reageert, in plaats van reactief uit te halen.",
      },
      {
        id: "b",
        text: "Mindful parenting is specifiek gericht op het met volle aandacht luisteren naar je kind, vergelijkbaar met actief luisteren in therapie.",
        isCorrect: false,
        feedback: "Actief luisteren is slechts één aspect. Het wetenschappelijke model van mindful parenting omvat vijf dimensies: luisteren met volle aandacht, niet-oordelende acceptatie van jezelf en je kind, emotioneel bewustzijn van jezelf en je kind, zelfregulatie in de opvoeding, en compassie voor jezelf en je kind. Het is dus veel breder dan luisteren alleen.",
      },
      {
        id: "c",
        text: "Mindful parenting combineert bewuste, niet-oordelende aandacht voor het kind met emotioneel zelfbewustzijn en zelfregulatie van de ouder in het hier-en-nu van de interactie.",
        isCorrect: true,
        feedback: "Precies. Het model van Duncan, Coatsworth en Greenberg beschrijft mindful parenting als een integratie van mindfulness-principes in de ouder-kindrelatie. De kern is het bewust aanwezig zijn in de interactie, waarbij de ouder zowel de eigen emoties als die van het kind waarneemt zonder automatisch te reageren. Dit creëert ruimte voor bewust gekozen, responsief ouderschap.",
      },
    ],
    explanation: "Mindful parenting is wetenschappelijk gedefinieerd als het toepassen van mindfulness-vaardigheden in de context van ouderschap. Het model omvat vijf dimensies: luisteren met volle aandacht, niet-oordelende acceptatie, emotioneel bewustzijn, zelfregulatie en compassie. Onderzoek toont aan dat mindful parenting samenhangt met minder opvoedstress, minder overreactief opvoeden en betere ouder-kindrelaties.",
    research: "Duncan, Coatsworth & Greenberg (2009) - A model of mindful parenting: Implications for parent-child relationships and prevention research",
  },
  {
    id: "aa_44",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 44,
    question: "Henk probeert meer aanwezig te zijn voor zijn zoon Koen (8), maar merkt dat hij steeds in een 'fix-it modus' schiet: als Koen verdrietig is, wil Henk het meteen oplossen. Een therapeut noemt dit het verschil tussen 'being mode' en 'doing mode.' Wat houdt dit in?",
    options: [
      {
        id: "a",
        text: "'Being mode' betekent passief zijn en niets doen wanneer je kind een probleem heeft — gewoon erbij zitten.",
        isCorrect: false,
        feedback: "Being mode is niet passief of laks. Het is een actieve staat van open, ontvankelijke aandacht. In being mode ben je volledig present bij de ervaring van je kind zonder die te willen veranderen. Dit vereist vaak meer inspanning dan 'doing mode', omdat je je eigen ongemak bij het verdriet van je kind moet kunnen verdragen.",
      },
      {
        id: "b",
        text: "'Being mode' is het vermogen om aanwezig te zijn bij de emotionele ervaring van het kind zonder direct te willen handelen, waardoor het kind zich eerst gehoord voelt voordat er naar oplossingen wordt gezocht.",
        isCorrect: true,
        feedback: "Correct. In 'being mode' richt Henk zich op het valideren van Koens ervaring: 'Ik zie dat je verdrietig bent.' Dit geeft Koen de ruimte om zijn emotie te voelen en te verwerken. Pas daarna, als Koen zich gehoord voelt, is er ruimte voor 'doing mode' — het samen zoeken naar oplossingen. De volgorde is cruciaal: eerst verbinden, dan oplossen.",
      },
      {
        id: "c",
        text: "'Being mode' en 'doing mode' zijn gelijkwaardig en moeten in balans worden ingezet — het gaat om de juiste mix.",
        isCorrect: false,
        feedback: "Hoewel beide modi hun plaats hebben, is het punt dat veel vaders te snel naar 'doing mode' springen ten koste van 'being mode.' Het probleem is niet dat oplossen slecht is, maar dat het voortijdig oplossen het kind het signaal geeft dat zijn emoties ongewenst zijn en zo snel mogelijk weg moeten. De being mode moet voorafgaan aan doing mode.",
      },
    ],
    explanation: "Het onderscheid tussen 'being mode' en 'doing mode' komt uit de mindfulness-traditie en is toegepast op ouderschap door onderzoekers van mindful parenting. In 'doing mode' is de ouder gericht op het verkleinen van de discrepantie tussen hoe het is en hoe het zou moeten zijn. In 'being mode' is de ouder gericht op het volledig ervaren van het huidige moment. Voor vaders, die vaker gesocialiseerd zijn in een probleemoplossende rol, is het aanleren van being mode extra relevant.",
    research: "Segal, Williams & Teasdale (2013) - Mindfulness-Based Cognitive Therapy for Depression; Kabat-Zinn & Kabat-Zinn (1997) - Everyday Blessings: The Inner Work of Mindful Parenting",
  },
  {
    id: "aa_45",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 45,
    question: "Geert is vader van Rosa (1,5). Rosa kruipt naar een onbekende hond in het park. Ze kijkt achterom naar Geert met een onzekere blik. Geert glimlacht geruststellend en knikt. Rosa kruipt verder naar de hond. Welk ontwikkelingspsychologisch fenomeen beschrijft Rosa's gedrag?",
    options: [
      {
        id: "a",
        text: "Separatieangst: Rosa is bang om bij papa weg te gaan en zoekt bevestiging om haar angst te verminderen.",
        isCorrect: false,
        feedback: "Bij separatieangst zou Rosa juist terugkomen naar papa, niet verdergaan. Wat hier gebeurt is subtieler: Rosa gebruikt Geerts gezichtsuitdrukking als informatiebron om een ambigue situatie te evalueren. Ze gaat juist wél verder, maar pas nadat ze Geerts reactie heeft 'gelezen'. Dit is een actief informatiezoekend gedrag.",
      },
      {
        id: "b",
        text: "Social referencing: Rosa gebruikt de emotionele expressie van haar vader als informatiebron om een onzekere situatie te beoordelen.",
        isCorrect: true,
        feedback: "Precies. Social referencing is het fenomeen waarbij jonge kinderen in ambigue situaties naar hun hechtingsfiguur kijken om emotionele informatie te verkrijgen. Geerts glimlach communiceert: 'Het is veilig.' Dit werkt alleen als Rosa erop vertrouwt dat Geerts signalen betrouwbaar zijn — een teken van veilige hechting. De fysieke aanwezigheid van de vader is hierbij essentieel.",
      },
      {
        id: "c",
        text: "Imitatiegedrag: Rosa imiteert Geerts kalmte en past haar eigen gedrag daarop aan.",
        isCorrect: false,
        feedback: "Bij imitatie zou Rosa Geerts gedrag nadoen. Hier doet Rosa echter iets anders: ze zoekt actief informatie op in Geerts gezichtsexpressie om haar eigen beoordeling van de situatie te vormen. Het is geen gedragskopiëren maar emotionele informatieverwerking. Dit onderscheid is belangrijk voor het begrijpen van hoe aanwezigheid van de vader het verkenningsgedrag van het kind stuurt.",
      },
    ],
    explanation: "Social referencing is een belangrijk ontwikkelingsmijlpaal die rond 8-10 maanden verschijnt. Het kind gebruikt de emotionele expressie van de ouder als 'kompas' in onzekere situaties. Dit fenomeen illustreert waarom fysieke en emotionele aanwezigheid van de ouder essentieel is: het kind kan alleen exploreren als het een betrouwbare emotionele gids in de buurt heeft. De ouder functioneert als 'veilige basis' vanuit hechtingstheoretisch perspectief.",
    research: "Sorce, Emde, Campos & Klinnert (1985) - Maternal emotional signaling: Its effect on the visual cliff behavior of 1-year-olds",
  },
  {
    id: "aa_46",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 46,
    question: "Stefan leest over Stephen Porges' polyvagaaltheorie en het concept 'neuroceptie.' Hoe is dit relevant voor het aanwezig zijn als vader?",
    options: [
      {
        id: "a",
        text: "Neuroceptie is het bewuste proces waarmee kinderen inschatten of hun ouder te vertrouwen is, gebaseerd op eerdere ervaringen.",
        isCorrect: false,
        feedback: "Neuroceptie is juist niet bewust — dat is het cruciale punt. Het is een onbewust, automatisch detectiesysteem dat voortdurend de omgeving scant op veiligheid of gevaar. Kinderen evalueren niet bewust of papa te vertrouwen is; hun zenuwstelsel doet dit automatisch op basis van subtiele signalen zoals gezichtsexpressie, stemtoon en lichaamsspanning.",
      },
      {
        id: "b",
        text: "Neuroceptie is het onbewuste vermogen van het zenuwstelsel om veiligheid of gevaar te detecteren, waarbij de vader via zijn stem, gezicht en lichaamstaal onbewust het gevoel van veiligheid bij zijn kind activeert.",
        isCorrect: true,
        feedback: "Precies. Porges beschrijft hoe het autonome zenuwstelsel voortdurend en onbewust de omgeving scant. Een vaders rustige stem, open gezichtsuitdrukking en ontspannen houding activeren het 'social engagement system' van het kind, waardoor het zich veilig voelt en kan exploreren en leren. Omgekeerd detecteert het kind onbewust spanning, afwezigheid of irritatie bij de vader.",
      },
      {
        id: "c",
        text: "Neuroceptie verklaart waarom vaders minder belangrijk zijn dan moeders voor het veiligheidsgevoel van kinderen, omdat moeders biologisch beter afgestemd zijn.",
        isCorrect: false,
        feedback: "Dit is onjuist. Neuroceptie maakt geen onderscheid tussen ouders op basis van geslacht. Het systeem reageert op proximale cues: stemkwaliteit, gezichtsexpressie, lichaamstaal. Vaders die deze signalen consistent bieden, activeren hetzelfde veiligheidssysteem als moeders. Onderzoek toont aan dat vaders een unieke en onvervangbare rol spelen in het veiligheidsgevoel van kinderen.",
      },
    ],
    explanation: "De polyvagaaltheorie van Porges beschrijft hoe het autonome zenuwstelsel drie hiërarchisch georganiseerde circuits heeft: het ventrale vagale systeem (sociaal engagement), het sympathische systeem (vecht-of-vlucht) en het dorsale vagale systeem (freeze). Neuroceptie — het onbewust scannen op veiligheid — bepaalt welk circuit actief is. Voor vaders betekent dit dat hun fysieke aanwezigheid en emotionele staat direct invloed hebben op het neurologische veiligheidsgevoel van hun kind.",
    research: "Porges (2011) - The Polyvagal Theory: Neurophysiological Foundations of Emotions, Attachment, Communication, and Self-Regulation",
  },
  {
    id: "aa_47",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 47,
    question: "Michiel is gescheiden en ziet zijn kinderen Tessa (12) en Stijn (9) om het weekend. Hij merkt dat Tessa afstandelijk doet na elke overdracht en pas op zaterdagmiddag ontdooit. Stijn daarentegen plakt direct aan Michiel. Vanuit hechtingstheorie, wat is hier waarschijnlijk aan de hand?",
    options: [
      {
        id: "a",
        text: "Tessa is boos op Michiel vanwege de scheiding en straft hem door afstand te houden; Stijn is de vergevingsgezindere van de twee.",
        isCorrect: false,
        feedback: "Deze interpretatie legt verantwoordelijkheid bij de kinderen en mist de hechtingsdynamiek. Tessa straft niet bewust; haar gedrag is een hechtingsstrategie. Ze beschermt zichzelf tegen de pijn van herhaald afscheid. En Stijns 'plakken' is ook niet per se vergevingsgezindheid — het kan juist een uiting zijn van onzekerheid over de beschikbaarheid van papa.",
      },
      {
        id: "b",
        text: "Beide kinderen tonen hechtingsgedrag passend bij hun ontwikkeling: Tessa's afstandelijkheid is een deactiverende strategie om het verdriet van wisselende contexten te hanteren, en Stijns aanklampen is een hyperactiverende strategie.",
        isCorrect: true,
        feedback: "Correct. In hechtingstheoretische termen gebruikt Tessa een deactiverende strategie (afstand houden om kwetsbaarheid te vermijden) terwijl Stijn een hyperactiverende strategie gebruikt (nabijheid zoeken om zekerheid te krijgen). Beide zijn adaptieve reacties op de onvoorspelbaarheid van wisselend verblijf. Michiel kan helpen door geduldig en consistent te zijn: Tessa de ruimte geven om te ontdooien, en Stijn geruststellen dat papa er is.",
      },
      {
        id: "c",
        text: "Het verschil komt puur door leeftijd: tieners zijn nu eenmaal afstandelijker dan jongere kinderen.",
        isCorrect: false,
        feedback: "Hoewel leeftijd een rol speelt, verklaart het niet het specifieke patroon van afstandelijkheid na élke overdracht gevolgd door ontdooien. Dit wisselende patroon wijst op een hechtingsdynamiek: Tessa moet elke keer opnieuw de veiligheid van de relatie 'testen' voordat ze zich kan openstellen. Een tiener die écht onverschillig is, zou niet ontdooien.",
      },
    ],
    explanation: "Na een scheiding ontwikkelen kinderen vaak uitgesproken hechtingsstrategieën om met de wisselende beschikbaarheid van ouders om te gaan. Deactiverende strategieën (afstand, zelfstandigheid) en hyperactiverende strategieën (aanklampen, ongerustheid) zijn beide aanpassingen aan de onzekerheid. Voor de weekendvader is het essentieel om geduldig en voorspelbaar te zijn, zodat kinderen niet elke keer opnieuw hoeven te testen of de relatie veilig is.",
    research: "Cassidy & Kobak (1988) - Avoidance and its relation to other defensive processes; Solomon & George (1999) - The development of attachment in separated and divorced families",
  },
  {
    id: "aa_48",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 48,
    question: "Peter leest over intersubjectiviteit in de ouder-kindrelatie. Hij begrijpt het concept niet helemaal. Welke omschrijving is het meest accuraat?",
    options: [
      {
        id: "a",
        text: "Intersubjectiviteit is het vermogen van de ouder om de gedachten van het kind te lezen en daarop te anticiperen.",
        isCorrect: false,
        feedback: "Dit beschrijft eerder 'mind-reading' of mentaliseren. Intersubjectiviteit gaat verder: het is geen eenrichtingsproces van de ouder naar het kind, maar een wederzijds gedeelde ervaring. Het gaat niet om het lezen van andermans gedachten, maar om het creëren van een gedeeld bewustzijn — een 'wij-ervaring' waarin beide partijen voelen dat ze dezelfde werkelijkheid delen.",
      },
      {
        id: "b",
        text: "Intersubjectiviteit is de gedeelde mentale ruimte tussen ouder en kind waarin beide partners elkaars intenties, aandacht en emoties wederzijds herkennen en delen — het fundament van menselijke verbinding.",
        isCorrect: true,
        feedback: "Precies. Trevarthen beschreef intersubjectiviteit als het aangeboren vermogen om mentale toestanden te delen met anderen. In de ouder-kindrelatie manifesteert dit zich als 'protoconversaties': wederzijdse uitwisselingen van blikken, geluiden en gebaren waarin beide partners op elkaars intenties reageren. Dit vereist echte aanwezigheid — je kunt intersubjectiviteit niet faken terwijl je met je gedachten elders bent.",
      },
      {
        id: "c",
        text: "Intersubjectiviteit betekent dat ouder en kind altijd op dezelfde golflengte moeten zitten voor een gezonde ontwikkeling.",
        isCorrect: false,
        feedback: "Altijd op dezelfde golflengte zitten is onmogelijk en ook niet nodig. Tronick's 'mutual regulation model' laat zien dat ouder-kindparen slechts 30% van de tijd in synchrone interactie zijn. Het cruciale is niet permanente afstemming maar het vermogen om na een misafstemming weer naar elkaar toe te bewegen — het 'rupture and repair' proces.",
      },
    ],
    explanation: "Intersubjectiviteit, een concept van Trevarthen, beschrijft het fundamenteel menselijke vermogen om subjectieve ervaringen te delen met anderen. Al vanaf de geboorte zijn baby's in staat tot primaire intersubjectiviteit: het delen van emotionele toestanden via gezichtsexpressie, vocalisatie en timing. Rond 9 maanden ontstaat secundaire intersubjectiviteit: het delen van aandacht voor objecten en gebeurtenissen. Dit vormt de basis voor taal, empathie en sociale cognitie.",
    research: "Trevarthen (1979) - Communication and cooperation in early infancy: A description of primary intersubjectivity; Tronick (2007) - The Neurobehavioral and Social-Emotional Development of Infants and Children",
  },
  {
    id: "aa_49",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 49,
    question: "Jan werkt veel over en voelt zich schuldig dat hij doordeweeks zijn kinderen Levi (6) en Fenna (4) nauwelijks ziet. Hij compenseert dit in het weekend met intensieve kwaliteitstijd. Zijn partner zegt dat het niet genoeg is. Wat zegt onderzoek over het debat 'kwaliteit versus kwantiteit' van oudertijd?",
    options: [
      {
        id: "a",
        text: "Kwaliteit is altijd belangrijker dan kwantiteit: een uur volledig aanwezige tijd is meer waard dan vier uur halfslachtige tijd.",
        isCorrect: false,
        feedback: "Hoewel kwaliteit essentieel is, is dit een oversimplificatie. Onderzoek toont aan dat spontane, onverwachte momenten van verbinding — die alleen ontstaan als je er gewoon bent — minstens zo waardevol zijn als geplande kwaliteitstijd. Bovendien hebben jonge kinderen een doorlopende behoefte aan beschikbaarheid die niet in weekendblokken te compenseren is.",
      },
      {
        id: "b",
        text: "Kwantiteit is het belangrijkst: hoe meer uren een vader met zijn kinderen doorbrengt, hoe beter de uitkomsten.",
        isCorrect: false,
        feedback: "Puur meer uren is ook niet het antwoord. Onderzoek van Milkie et al. toont aan dat het absolute aantal uren moedertijd nauwelijks voorspelt hoe het met kinderen gaat. Wat wél telt is 'engaged time' — tijd waarin de ouder actief betrokken is. Veel uren fysiek aanwezig maar mentaal afwezig heeft weinig positief effect.",
      },
      {
        id: "c",
        text: "Het is een schijntegenstelling: kinderen hebben zowel regelmatige beschikbaarheid (kwantiteit) nodig als betrokken interacties (kwaliteit), en de ene kan de andere niet volledig compenseren.",
        isCorrect: true,
        feedback: "Dit is wat het onderzoek laat zien. Kwaliteitstijd in het weekend kan de doordeweekse afwezigheid niet volledig compenseren, omdat jonge kinderen een dagelijkse behoefte hebben aan de veilige basis van hun hechtingsfiguren. Tegelijkertijd is puur aanwezig zijn zonder betrokkenheid ook onvoldoende. De optimale situatie combineert regelmatige beschikbaarheid met momenten van diepe verbinding.",
      },
    ],
    explanation: "Het kwaliteit-versus-kwantiteit debat is genuanceerder dan vaak wordt voorgesteld. Onderzoek toont aan dat voor jonge kinderen (0-6 jaar) de frequentie van contact met ouders belangrijker is dan voor oudere kinderen, vanwege hun hechtingsbehoeften. Voor adolescenten is kwaliteit relatief belangrijker. Cruciaal is het concept 'engaged time': de tijd waarin een ouder actief en betrokken aanwezig is, voorspelt kinduitkomsten het beste.",
    research: "Huston & Rosenkrantz Aronson (2005) - Mothers' time with infant and time in employment as predictors of mother-child relationships and children's early development; Milkie, Nomaguchi & Denny (2015)",
  },
  {
    id: "aa_50",
    skill: "Aanwezigheid",
    type: "quiz",
    difficulty: "expert",
    order: 50,
    question: "Dennis is vader van Jayden (13) die net is begonnen met puberen. Jayden zegt steeds vaker 'Laat me met rust' en trekt zich terug op zijn kamer. Dennis herinnert zich het concept 'veilige basis' uit de hechtingstheorie en vraagt zich af hoe dit verandert in de adolescentie. Wat is juist?",
    options: [
      {
        id: "a",
        text: "De behoefte aan een veilige basis verdwijnt in de adolescentie; tieners verschuiven hun hechting volledig naar leeftijdsgenoten.",
        isCorrect: false,
        feedback: "Dit is een veel voorkomende misvatting. Hoewel leeftijdsgenoten steeds belangrijker worden, blijven ouders de primaire hechtingsfiguren tot ver in de adolescentie. Onderzoek toont aan dat de hechtingsrelatie met ouders niet verdwijnt maar transformeert. Tieners die zich veilig gehecht voelen aan hun ouders, zijn juist beter in staat om gezonde relaties met leeftijdsgenoten op te bouwen.",
      },
      {
        id: "b",
        text: "De veilige basis blijft essentieel maar verandert van vorm: de vader verschuift van fysieke nabijheid naar psychologische beschikbaarheid — er zijn als het nodig is, ruimte geven als het kan.",
        isCorrect: true,
        feedback: "Precies. In de adolescentie transformeert de hechtingsrelatie: het kind heeft minder behoefte aan fysieke nabijheid maar des te meer aan psychologische beschikbaarheid. De vader wordt als het ware een 'helikopterlandingsplatform': Jayden vliegt steeds verder weg om de wereld te verkennen, maar moet weten dat hij altijd veilig kan landen. Dennis' uitdaging is er te zijn zonder op te dringen.",
      },
      {
        id: "c",
        text: "Dennis moet juist nu extra fysiek aanwezig zijn en grenzen stellen, want tieners die afstand nemen zijn een teken van een zwakke hechtingsrelatie.",
        isCorrect: false,
        feedback: "Afstand nemen hoort bij de gezonde ontwikkeling van autonomie in de puberteit en is geen teken van een zwakke hechting. Juist het tegenovergestelde: tieners die zich veilig gehecht voelen, durven meer autonomie te nemen. Overmatige controle en fysieke nabijheid afdwingen kan het natuurlijke individuatieproces belemmeren en de relatie onder druk zetten.",
      },
    ],
    explanation: "De hechtingstheorie beschrijft hoe de balans tussen nabijheid zoeken en exploratie verschuift over de levensloop. In de adolescentie verschuift deze balans dramatisch richting exploratie en autonomie. Allen en Land beschrijven hoe de 'veilige basis' functie van ouders transformeert van fysieke beschikbaarheid naar psychologische beschikbaarheid. Vaders die deze transitie succesvol navigeren, handhaven een sterke band terwijl ze ruimte bieden voor groeiende autonomie.",
    research: "Allen & Land (1999) - Attachment in adolescence. In: Cassidy & Shaver (Eds.), Handbook of Attachment; Kobak, Rosenthal, Zajac & Madsen (2007) - Adolescent attachment hierarchies",
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

  {
    id: "gr_31",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "basis",
    order: 31,
    question:
      "Sem (5) roept aan tafel: 'Maar mama zegt dat ik wél een toetje mag!' Jij hebt net gezegd dat hij eerst zijn bord leeg moet eten. Wat doe je?",
    options: [
      {
        id: "a",
        text: "Je zegt: 'Mama is hier niet de baas, ik bepaal wat er gebeurt.'",
        isCorrect: false,
        feedback:
          "Door mama's autoriteit te ondermijnen creëer je een machtsstrijd tussen ouders. Kinderen voelen zich onveilig als ouders elkaars gezag afbreken. Het is beter om eenheid te tonen en het later samen te bespreken.",
      },
      {
        id: "b",
        text: "Je zegt: 'Bij papa gelden papa's regels, bij mama gelden mama's regels. Hier eet je eerst je bord leeg.'",
        isCorrect: false,
        feedback:
          "Hoewel je je grens handhaaft, bevestig je hiermee dat er twee verschillende regelsystemen zijn. Dit geeft kinderen ruimte om ouders tegen elkaar uit te spelen. Consistentie tussen ouders is belangrijk voor het gevoel van veiligheid.",
      },
      {
        id: "c",
        text: "Je zegt: 'Dat kan best, maar de afspraak bij ons thuis is: eerst je bord leeg, dan een toetje. Ik bespreek het later even met mama.'",
        isCorrect: true,
        feedback:
          "Uitstekend. Je handhaaft je grens zonder mama af te vallen en belooft afstemming. Onderzoek laat zien dat consistentie tussen ouders cruciaal is voor effectieve grensstelling. Door later af te stemmen voorkom je dat je kind ouders tegen elkaar uitspeelt.",
      },
    ],
    explanation:
      "Wanneer een kind zich beroept op de andere ouder, is het belangrijk om je eigen grens te handhaven zonder de andere ouder te ondermijnen. Consistentie tussen opvoeders is een van de sterkste voorspellers van positief kindergedrag. Het gesprek over afstemming voer je altijd buiten het zicht van het kind.",
    research:
      "Teubert & Pinquart (2010) toonden in een meta-analyse aan dat co-ouderschap en consistentie tussen ouders significant samenhangen met minder externaliserende gedragsproblemen bij kinderen.",
  },
  {
    id: "gr_32",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 32,
    question:
      "Daan (8) heeft ADHD en is helemaal opgegaan in het bouwen met LEGO. Het is bedtijd, maar hij kan absoluut niet stoppen. Hij wordt boos en gooit met blokjes als je zegt dat het tijd is. Wat is de beste aanpak?",
    options: [
      {
        id: "a",
        text: "Je laat hem nog even doorbouwen — hij is zo lekker geconcentreerd, dat komt bij ADHD niet vaak voor.",
        isCorrect: false,
        feedback:
          "Hoewel het verleidelijk is om hyperfocus te respecteren, leert het kind hierdoor niet om met overgangen om te gaan. Kinderen met ADHD hebben juist extra behoefte aan voorspelbare structuur en grenzen. Uitzonderingen maken het de volgende keer alleen maar moeilijker.",
      },
      {
        id: "b",
        text: "Je pakt de LEGO af en zegt dat hij nu meteen naar bed moet, anders mag hij morgen helemaal niet bouwen.",
        isCorrect: false,
        feedback:
          "Abrupt afbreken van een activiteit is voor een kind met ADHD extra moeilijk door problemen met emotieregulatie en taakwisseling. Dreigen met het wegnemen van de activiteit verhoogt de spanning en maakt de overgang alleen maar heftiger.",
      },
      {
        id: "c",
        text: "Je geeft een waarschuwing van 5 minuten, zet een visuele timer, en zegt: 'Je mag morgen verder bouwen, ik laat je bouwwerk staan.'",
        isCorrect: true,
        feedback:
          "Goed. Een vooraankondiging met een visuele timer helpt kinderen met ADHD bij de overgang. Door te garanderen dat het bouwwerk blijft staan verlaag je de weerstand. Structuur en voorspelbaarheid zijn essentieel bij ADHD, maar altijd met warmte en begrip voor de moeite die het kost.",
      },
    ],
    explanation:
      "Kinderen met ADHD hebben moeite met executieve functies zoals taakwisseling en impulsbeheersing. Visuele timers en vooraankondigingen helpen hen om zich voor te bereiden op een overgang. De grens blijft staan, maar de manier waarop je die communiceert houdt rekening met de neurologische realiteit van het kind.",
    research:
      "Sonuga-Barke et al. (2013) benadrukken in hun meta-analyse dat gedragsinterventies met voorspelbare structuur en visuele ondersteuning effectief zijn bij kinderen met ADHD.",
  },
  {
    id: "gr_33",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 33,
    question:
      "Emma (4) krijgt een enorme driftbui in de supermarkt omdat ze snoep wil. Ze schreeuwt, huilt en gaat op de grond liggen. Andere klanten kijken afkeurend. Wat doe je?",
    options: [
      {
        id: "a",
        text: "Je koopt snel het snoepje om de situatie te beëindigen — thuis stel je de grens wel.",
        isCorrect: false,
        feedback:
          "Door toe te geven onder druk leer je Emma dat driftbuien werken als strategie om haar zin te krijgen. Dit versterkt het gedrag (intermittente bekrachtiging). De sociale druk is begrijpelijk, maar toegeven maakt het probleem op lange termijn groter.",
      },
      {
        id: "b",
        text: "Je gaat op ooghoogte, benoemt haar gevoel ('je bent boos omdat je snoep wilt') en herhaalt rustig de grens: 'We kopen vandaag geen snoep.'",
        isCorrect: true,
        feedback:
          "Precies goed. Door eerst het gevoel te erkennen voelt Emma zich gezien, en door de grens rustig te herhalen blijf je consequent. Het maakt niet uit wat omstanders denken — jij bent de ouder die weet wat je kind nodig heeft. Emotiecoaching en grensstelling gaan hand in hand.",
      },
      {
        id: "c",
        text: "Je zegt streng: 'Stop met dat gedrag, je maakt jezelf belachelijk. Grote meisjes doen niet zo.'",
        isCorrect: false,
        feedback:
          "Schaamte als middel om gedrag te stoppen is schadelijk voor de emotionele ontwikkeling. Een kind van 4 kan haar emoties nog niet reguleren — ze heeft jouw hulp daarbij nodig, geen afkeuring. Bovendien leer je haar dat emoties tonen slecht is, wat latere emotionele problemen kan veroorzaken.",
      },
    ],
    explanation:
      "Driftbuien horen bij de normale ontwikkeling van jonge kinderen. De prefrontale cortex, verantwoordelijk voor emotieregulatie, is nog volop in ontwikkeling. Door het gevoel te benoemen (emotiecoaching) en de grens rustig te handhaven, help je het kind om te leren omgaan met frustratie zonder het ongewenste gedrag te bekrachtigen.",
    research:
      "Gottman et al. (1997) toonden aan dat emotiecoaching — het erkennen en benoemen van emoties — leidt tot betere emotieregulatie en minder gedragsproblemen bij kinderen.",
  },
  {
    id: "gr_34",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 34,
    question:
      "In de opvoedkunde onderscheidt Diana Baumrind drie opvoedstijlen. Welk kenmerk hoort bij de autoritatieve (gezaghebbende) stijl als het gaat om grenzen stellen?",
    options: [
      {
        id: "a",
        text: "Hoge eisen met weinig warmte: regels worden strikt gehandhaafd, het kind moet gehoorzamen zonder uitleg.",
        isCorrect: false,
        feedback:
          "Dit beschrijft de autoritaire opvoedstijl. Hierbij staan gehoorzaamheid en discipline centraal, maar ontbreekt de warme relatie. Kinderen van autoritaire ouders leren wel regels te volgen, maar ontwikkelen minder zelfstandigheid en hebben vaker een lagere zelfwaardering.",
      },
      {
        id: "b",
        text: "Hoge eisen met veel warmte: duidelijke grenzen worden gesteld én uitgelegd, met ruimte voor de mening van het kind.",
        isCorrect: true,
        feedback:
          "Correct. De autoritatieve stijl combineert structuur met responsiviteit. Grenzen zijn duidelijk, maar ouders leggen uit waarom regels bestaan en luisteren naar het perspectief van het kind. Onderzoek toont consistent aan dat deze stijl de beste uitkomsten geeft op vrijwel alle ontwikkelingsdomeinen.",
      },
      {
        id: "c",
        text: "Weinig eisen met veel warmte: het kind bepaalt grotendeels zelf de regels, de ouder is vooral een vriend.",
        isCorrect: false,
        feedback:
          "Dit beschrijft de permissieve opvoedstijl. Hoewel er warmte is, ontbreken duidelijke grenzen. Kinderen van permissieve ouders hebben vaker moeite met zelfregulatie en het accepteren van grenzen in andere contexten, zoals op school.",
      },
    ],
    explanation:
      "Baumrind's model onderscheidt autoritair (hoge eisen, lage warmte), autoritatief (hoge eisen, hoge warmte) en permissief (lage eisen, hoge warmte). Maccoby & Martin voegden later de verwaarlozende stijl toe (lage eisen, lage warmte). De autoritatieve stijl wordt in decennia van onderzoek consequent geassocieerd met de beste ontwikkelingsuitkomsten.",
    research:
      "Baumrind (1991) publiceerde haar invloedrijke werk over opvoedstijlen, later uitgebreid door Maccoby & Martin (1983). Meta-analyses van Pinquart (2017) bevestigen het voordeel van de autoritatieve stijl.",
  },
  {
    id: "gr_35",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 35,
    question:
      "Thijs (10) mag tot 20:00 uur op zijn tablet. Om 20:00 uur zegt hij: 'Nog vijf minuutjes, ik ben bijna klaar met mijn level!' Dit herhaalt zich elke avond. Wat is de meest effectieve aanpak?",
    options: [
      {
        id: "a",
        text: "Je stelt vooraf een automatische timer in op de tablet die het scherm uitschakelt om 20:00 uur, en bespreekt dit van tevoren met Thijs.",
        isCorrect: true,
        feedback:
          "Slim. Door de grens te externaliseren (de tablet stopt automatisch) vermijd je de dagelijkse onderhandeling. Vooraf bespreken zorgt ervoor dat Thijs weet wat hij kan verwachten. Technologische hulpmiddelen ondersteunen ouders bij het consequent handhaven van schermtijdgrenzen.",
      },
      {
        id: "b",
        text: "Je geeft elke keer vijf minuten extra — het is maar een klein beetje en het voorkomt ruzie.",
        isCorrect: false,
        feedback:
          "Elke keer vijf minuten erbij lijkt onschuldig, maar het ondermijnt je grens structureel. Thijs leert dat onderhandelen loont, waardoor de grens op termijn volledig vervalt. Bovendien toont onderzoek aan dat juist het laatste halfuur schermtijd voor het slapen de slaapkwaliteit het meest beïnvloedt.",
      },
      {
        id: "c",
        text: "Je pakt de tablet zonder waarschuwing af om 20:00 uur — een afspraak is een afspraak.",
        isCorrect: false,
        feedback:
          "Hoewel consequent, mist deze aanpak de voorspelbaarheid die kinderen nodig hebben. Een waarschuwing van 10 en 5 minuten van tevoren helpt het kind om zich mentaal voor te bereiden op het stoppen. Abrupt afpakken leidt tot meer weerstand en frustratie.",
      },
    ],
    explanation:
      "Schermtijdgrenzen zijn effectiever wanneer ze voorspelbaar en geëxternaliseerd zijn. Door technologische middelen te gebruiken wordt de ouder niet de 'vijand' en hoeft er niet elke avond onderhandeld te worden. Het vooraf bespreken van de regel vergroot de acceptatie en het gevoel van autonomie bij het kind.",
    research:
      "Przybylski & Weinstein (2017) onderzochten de relatie tussen schermtijd en welzijn bij kinderen. Nathanson (2015) toonde aan dat actieve mediatie (regels bespreken) effectiever is dan restrictieve mediatie (alleen verbieden).",
  },
  {
    id: "gr_36",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 36,
    question:
      "Milan (13) is bij papa (na de scheiding) en weigert om 21:00 uur naar bed te gaan: 'Bij mama mag ik tot 22:00 uur opblijven, jouw regels slaan nergens op.' Wat is de beste reactie vanuit een co-ouderschapsperspectief?",
    options: [
      {
        id: "a",
        text: "Je belt mama erbij zodat Milan hoort dat de regels bij allebei hetzelfde moeten zijn.",
        isCorrect: false,
        feedback:
          "Hoewel afstemming belangrijk is, is het midden in het conflict bellen met de andere ouder niet het juiste moment. Het geeft Milan de boodschap dat je je eigen grens niet kunt handhaven zonder bevestiging. Afstemming doe je op een rustig moment, zonder het kind erbij.",
      },
      {
        id: "b",
        text: "Je erkent dat het verwarrend kan zijn, legt uit dat je als vader je eigen afwegingen maakt, en houdt de bedtijd op 21:00 uur. Later stem je af met zijn moeder.",
        isCorrect: true,
        feedback:
          "Goed. Je toont begrip voor zijn frustratie zonder je grens los te laten. Na een scheiding mogen er kleine verschillen zijn tussen huizen, maar de grens die je stelt moet je kunnen uitleggen en handhaven. Door later af te stemmen met moeder werk je aan meer consistentie zonder Milan te betrekken in volwassen overleg.",
      },
      {
        id: "c",
        text: "Je past je bedtijd aan naar 22:00 uur zodat Milan niet het gevoel heeft dat papa strenger is dan mama.",
        isCorrect: false,
        feedback:
          "Door je grens aan te passen aan de regels van het andere huis verlies je je eigen ouderschappelijke autoriteit. Bovendien is het belangrijk dat grenzen gebaseerd zijn op wat jij als vader goed acht voor je kind, niet op angst om als de 'strenge ouder' gezien te worden. Kinderen kunnen prima omgaan met kleine verschillen tussen huizen.",
      },
    ],
    explanation:
      "Na een scheiding is perfect gelijke regels in beide huizen niet altijd haalbaar of noodzakelijk. Kinderen zijn veerkrachtig en kunnen omgaan met verschillende contexten, mits de regels binnen elk huis consistent zijn. Wat wél essentieel is: respect tonen voor de andere ouder, je grens rustig handhaven, en afstemming zoeken buiten het zicht van het kind.",
    research:
      "Amato (2010) vond in zijn longitudinale onderzoek dat de kwaliteit van co-ouderschap na scheiding een sterkere voorspeller is van het welzijn van kinderen dan de mate van overlap in regels tussen beide huizen.",
  },
  {
    id: "gr_37",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "basis",
    order: 37,
    question:
      "Lotte (3) weigert haar jas aan te trekken terwijl het buiten koud is. Ze schreeuwt 'nee!' en rent weg. Wat is het beste om te doen?",
    options: [
      {
        id: "a",
        text: "Je biedt een beperkte keuze: 'Wil je de rode jas of de blauwe jas aan?'",
        isCorrect: true,
        feedback:
          "Uitstekend. Door een beperkte keuze te bieden geef je Lotte het gevoel van autonomie binnen jouw grens. De jas gaat aan — dat staat niet ter discussie — maar zij mag kiezen welke. Dit sluit aan bij de ontwikkelingsbehoefte van driejarigen aan zelfstandigheid.",
      },
      {
        id: "b",
        text: "Je laat haar zonder jas naar buiten gaan zodat ze zelf merkt dat het koud is.",
        isCorrect: false,
        feedback:
          "Bij een driejarige is het nog niet gepast om volledig op natuurlijke consequenties te vertrouwen als het om gezondheid gaat. Een jong kind kan de consequenties niet goed overzien en jij bent als ouder verantwoordelijk voor haar welzijn. Autonomie geven is goed, maar binnen veilige grenzen.",
      },
      {
        id: "c",
        text: "Je trekt haar de jas met kracht aan, want het is niet onderhandelbaar.",
        isCorrect: false,
        feedback:
          "Fysiek dwingen leidt tot machtsstrijd en beschadigt het vertrouwen. Hoewel de grens terecht is (jas aan bij koud weer), is de manier waarop je die handhaaft minstens zo belangrijk. Er zijn effectievere manieren die minder weerstand oproepen en de relatie intact houden.",
      },
    ],
    explanation:
      "Peuters en kleuters zitten in de autonomiefase en zeggen vaak 'nee' om hun onafhankelijkheid te testen. Door een beperkte keuze aan te bieden (welke jas, niet óf een jas) respecteer je hun behoefte aan autonomie terwijl je de grens handhaaft. Dit vermindert machtsstrijd en vergroot de medewerking.",
    research:
      "Erikson (1963) beschreef de autonomie-versus-schaamtefase bij peuters. Kohn (2005) benadrukt het belang van keuzevrijheid binnen grenzen voor het bevorderen van intrinsieke motivatie en samenwerking.",
  },
  {
    id: "gr_38",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 38,
    question:
      "Volgens Martin Hoffman zijn er drie disciplinestrategieën die ouders gebruiken. Welke strategie is het meest effectief voor het ontwikkelen van het moreel besef van een kind?",
    options: [
      {
        id: "a",
        text: "Machtuitoefening: fysieke straffen, privileges afnemen en dreigen met consequenties om gehoorzaamheid af te dwingen.",
        isCorrect: false,
        feedback:
          "Machtuitoefening kan op korte termijn effectief zijn voor gedragsverandering, maar bevordert geen interne morele motivatie. Het kind gehoorzaamt uit angst voor straf, niet uit begrip van waarom het gedrag verkeerd is. Dit leidt tot minder internalisatie van normen en waarden.",
      },
      {
        id: "b",
        text: "Liefde-intrekking: emotionele afkeuring tonen, het kind negeren of zeggen dat je teleurgesteld bent als drukmiddel.",
        isCorrect: false,
        feedback:
          "Liefde-intrekking genereert angst en onzekerheid over de ouder-kindrelatie. Hoewel het kind zijn gedrag kan aanpassen, doet het dit vanuit angst om liefde te verliezen, niet vanuit moreel inzicht. Dit kan leiden tot een onveilige hechting en overmatig schuldgevoel.",
      },
      {
        id: "c",
        text: "Inductie: uitleggen wat het effect van het gedrag is op anderen, empathie stimuleren en het kind helpen begrijpen waarom een grens bestaat.",
        isCorrect: true,
        feedback:
          "Correct. Inductie is volgens Hoffman het meest effectief omdat het kind leert begrijpen waarom regels bestaan vanuit het perspectief van anderen. Door empathie te stimuleren ontwikkelt het kind een interne morele motivatie die ook werkt wanneer de ouder niet aanwezig is.",
      },
    ],
    explanation:
      "Hoffman onderscheidt machtuitoefening, liefde-intrekking en inductie als disciplinestrategieën. Inductie — het uitleggen van de impact van gedrag op anderen — bevordert de ontwikkeling van empathie en moreel redeneren. Het kind internaliseert de waarden achter de regels, in plaats van alleen te gehoorzamen uit angst voor straf of verlies van liefde.",
    research:
      "Hoffman (2000) beschrijft in 'Empathy and Moral Development' uitgebreid hoe inductie leidt tot internalisatie van morele normen. Krevans & Gibbs (1996) bevestigden empirisch dat inductie samenhangt met meer empathie en prosociaal gedrag.",
  },
  {
    id: "gr_39",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 39,
    question:
      "Noah (6) saboteert elke avond het bedtijdritueel: hij wil nóg een verhaaltje, nóg een glas water, nóg een knuffel. Het duurt elke avond een uur voordat hij slaapt. Wat werkt het beste?",
    options: [
      {
        id: "a",
        text: "Je maakt vooraf een visueel schema met alle stappen (tanden poetsen, verhaaltje, knuffel, licht uit) en houdt je daar consequent aan.",
        isCorrect: true,
        feedback:
          "Heel goed. Een visueel schema maakt het ritueel voorspelbaar en eindig. Noah weet precies wat er komt en wat het 'eindpunt' is. Door het schema samen te maken geef je hem inspraak, waardoor hij zich eigenaar voelt van de routine. Consequent handhaven is de sleutel.",
      },
      {
        id: "b",
        text: "Je geeft toe aan alle extra verzoeken — hij heeft kennelijk behoefte aan meer aandacht en nabijheid.",
        isCorrect: false,
        feedback:
          "Hoewel de behoefte aan aandacht reëel kan zijn, leert eindeloos toegeven het kind dat uitstelgedrag wordt beloond. De oplossing is om voldoende kwaliteitstijd in het ritueel te bouwen, maar met een duidelijk einde. Grenzen aan het ritueel zijn juist geruststellend omdat ze voorspelbaarheid bieden.",
      },
      {
        id: "c",
        text: "Je kapt het ritueel volledig af: 'Omdat je elke avond zeurt, krijg je geen verhaaltje meer.'",
        isCorrect: false,
        feedback:
          "Het volledig afnemen van het bedtijdritueel is een disproportionele reactie en straffen van een basisbehoefte (nabijheid voor het slapen). Het bedtijdritueel is juist belangrijk voor de hechting en het gevoel van veiligheid. De oplossing zit in het structureren, niet in het elimineren.",
      },
    ],
    explanation:
      "Bedtijdroutines zijn een van de meest effectieve interventies voor het verbeteren van slaap bij kinderen. Een voorspelbaar, gestructureerd ritueel verlaagt de cortisol en helpt het kind om tot rust te komen. De sleutel is een duidelijk begin en einde, met voldoende warmte maar zonder eindeloze onderhandeling.",
    research:
      "Mindell et al. (2006) vonden in een grote studie dat een consistente bedtijdroutine significant samenhangt met betere slaapkwaliteit en minder bedtijdverzet bij kinderen.",
  },
  {
    id: "gr_40",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 40,
    question:
      "Sophie (15) wil naar een feest waar alcohol aanwezig zal zijn. Ze zegt: 'Alle anderen mogen wel, ik ben de enige die niet mag.' Wat is de meest effectieve grensstellende reactie?",
    options: [
      {
        id: "a",
        text: "Je verbiedt het feest categorisch: 'Geen sprake van. Zolang je onder mijn dak woont, bepaal ik de regels.'",
        isCorrect: false,
        feedback:
          "Een categorisch verbod zonder dialoog werkt bij tieners vaak averechts. Het vergroot de kans op stiekem gedrag en ondermijnt de vertrouwensrelatie. Tieners hebben behoefte aan toenemende autonomie; een puur autoritaire aanpak past niet bij deze ontwikkelingsfase.",
      },
      {
        id: "b",
        text: "Je gaat in gesprek: je luistert naar haar argumenten, deelt je zorgen over alcohol, en zoekt samen naar voorwaarden waaronder ze kan gaan (bijv. ophaaltijd, niet drinken, altijd bellen als het niet goed voelt).",
        isCorrect: true,
        feedback:
          "Uitstekend. Dit is de autoritatieve aanpak voor tieners: luisteren, je zorgen delen, en samen tot afspraken komen. Je houdt de grens (geen alcohol) maar biedt autonomie in de uitvoering. Onderzoek toont aan dat tieners met ouders die grenzen combineren met uitleg en dialoog minder risicovol gedrag vertonen.",
      },
      {
        id: "c",
        text: "Je laat haar gaan zonder voorwaarden — ze moet leren van haar eigen fouten en je wilt de relatie niet beschadigen.",
        isCorrect: false,
        feedback:
          "Volledige vrijheid bij een 15-jarige in een situatie met alcohol is permissief en risicovol. Tieners overschatten hun eigen weerstand tegen groepsdruk. Als vader heb je de verantwoordelijkheid om kaders te bieden, ook als dat onpopulair is. De relatie beschadig je niet door grenzen te stellen, maar door ze te stellen zonder respect.",
      },
    ],
    explanation:
      "Bij tieners verschuift grensstelling van 'bepalen' naar 'onderhandelen binnen kaders'. De autoritatieve ouder stelt duidelijke grenzen maar betrekt de tiener in het gesprek. Dit bevordert de ontwikkeling van autonomie en zelfregulatie, terwijl de ouder beschermende grenzen handhaaft. De dialoog zelf is al een oefening in moreel redeneren.",
    research:
      "Van der Vorst et al. (2006) toonden aan dat strenge maar communicatieve alcoholregels van ouders samenhangen met minder alcoholgebruik bij adolescenten. Soenens et al. (2007) vonden dat psychologische controle (autoritair) meer probleemgedrag voorspelt dan gedragscontrole met warmte (autoritatief).",
  },
  {
    id: "gr_41",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 41,
    question:
      "Jayden (7) heeft ADHD en grijpt impulsief het speelgoed van zijn zusje af. Hij doet het niet met kwade bedoelingen, maar kan zijn impuls niet beheersen. Hoe stel je hier een grens?",
    options: [
      {
        id: "a",
        text: "Je zegt: 'Dat mag niet. Ga maar 10 minuten op je kamer nadenken over wat je hebt gedaan.'",
        isCorrect: false,
        feedback:
          "Een time-out als straf is bij ADHD-kinderen minder effectief omdat het probleem niet voortkomt uit bewust verkeerd gedrag, maar uit een impulscontrolestoornis. Het kind wéét vaak wel dat het niet mag, maar kan het in het moment niet tegenhouden. Nadenken op de kamer lost dat neurologische probleem niet op.",
      },
      {
        id: "b",
        text: "Je stopt het gedrag direct, benoemt wat je ziet ('je pakte het speelgoed af'), helpt hem het terug te geven, en oefent samen een alternatief ('volgende keer kun je vragen of je mag ruilen').",
        isCorrect: true,
        feedback:
          "Precies. Bij ADHD is directe, korte correctie het meest effectief: stop het gedrag, benoem het concreet, en bied een alternatief. Door samen te oefenen bouw je nieuwe neurale paden op. De grens is duidelijk (afpakken mag niet), maar je biedt het kind een haalbaar alternatief dat rekening houdt met zijn beperking.",
      },
      {
        id: "c",
        text: "Je laat het gaan omdat hij er niets aan kan doen — ADHD betekent dat hij dit soort dingen nu eenmaal doet.",
        isCorrect: false,
        feedback:
          "ADHD verklaart het gedrag, maar verontschuldigt het niet. Kinderen met ADHD hebben juist meer oefening nodig in het leren van alternatief gedrag, niet minder grenzen. Door het te laten gaan onthoud je hem de kans om te leren én geef je zijn zusje de boodschap dat haar grenzen er niet toe doen.",
      },
    ],
    explanation:
      "Bij kinderen met ADHD is grensstelling anders maar niet afwezig. De grens blijft hetzelfde als bij andere kinderen (afpakken mag niet), maar de manier van corrigeren houdt rekening met de impulsiviteit. Directe, korte correcties met een concreet alternatief zijn effectiever dan uitgestelde consequenties of lange toespraken.",
    research:
      "Barkley (2013) benadrukt in zijn werk over ADHD-management dat kinderen met ADHD baat hebben bij directe, korte feedback en het aanleren van concrete alternatieve gedragingen, in plaats van strafgebaseerde benaderingen.",
  },
  {
    id: "gr_42",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 42,
    question:
      "Lucas (12) test consequent grenzen na de scheiding van zijn ouders. Bij mama is hij een 'modelkind', maar bij papa vertoont hij grensoverschrijdend gedrag. Wat is de meest waarschijnlijke verklaring én de beste aanpak?",
    options: [
      {
        id: "a",
        text: "Lucas voelt zich onveilig bij papa en test of de grenzen stevig genoeg zijn om hem te beschermen. De aanpak: extra consequent zijn met warme, voorspelbare grenzen.",
        isCorrect: true,
        feedback:
          "Goed inzicht. Kinderen testen grenzen het meest bij de ouder waar ze zich het minst zeker voelen over de structuur. Na een scheiding kan de ouder-kindrelatie fragiel zijn. Door extra consequent én warm te zijn, bewijs je dat je grens stevig genoeg is om veiligheid te bieden. Het gedrag is geen teken van disrespect maar van onzekerheid.",
      },
      {
        id: "b",
        text: "Lucas manipuleert papa omdat hij weet dat papa schuldgevoel heeft over de scheiding. De aanpak: strenger zijn dan mama om te laten zien dat je ook gezag hebt.",
        isCorrect: false,
        feedback:
          "Het gedrag als manipulatie bestempelen doet tekort aan de emotionele realiteit van het kind. Lucas is 12 en worstelt met de scheiding. Strenger zijn dan mama creëert een competitie die het kind alleen maar meer belast. De aanpak moet gericht zijn op veiligheid bieden, niet op het bewijzen van gezag.",
      },
      {
        id: "c",
        text: "Lucas heeft een hekel aan papa's regels en gedraagt zich daarom moeilijk. De aanpak: de regels versoepelen tot mama's niveau zodat Lucas zich prettiger voelt.",
        isCorrect: false,
        feedback:
          "Het versoepelen van regels lijkt conflicten op te lossen maar vergroot de onveiligheid. Kinderen die grenzen testen, zoeken niet minder regels maar meer structuur. Door toe te geven bevestig je de angst van het kind dat jouw kaders niet stevig genoeg zijn. Dit kan het probleemgedrag juist verergeren.",
      },
    ],
    explanation:
      "Na een scheiding testen kinderen vaak meer grenzen bij de ouder over wie ze meer onzekerheid voelen. Dit is geen teken van disrespect of manipulatie, maar een gehechtheidsstrategie: het kind wil weten of deze ouder stevig genoeg is om veiligheid te bieden. Consequente, warme grenzen zijn het antwoord op deze onzekerheid.",
    research:
      "Hetherington (1993) vond in haar longitudinale studie naar scheiding dat kinderen meer grensoverschrijdend gedrag vertonen bij de ouder met minder consistente grensstelling, als test van de veiligheid van de relatie.",
  },
  {
    id: "gr_43",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 43,
    question:
      "Bram (9) wil na schooltijd altijd meteen snoepen. Je hebt afgesproken dat er één snoepmoment per dag is, na het avondeten. Bram smeekt, huilt en zegt: 'Jij bent de gemeinste papa van de wereld!' Hoe reageer je?",
    options: [
      {
        id: "a",
        text: "Je zegt: 'Ik begrijp dat je er nu zin in hebt, en ik snap dat het moeilijk is om te wachten. Na het eten mag je iets lekkers uitkiezen.'",
        isCorrect: true,
        feedback:
          "Goed. Je erkent zijn gevoel zonder de grens te verschuiven. Door vooruit te wijzen naar het snoepmoment na het eten geef je hem iets om naar uit te kijken. Je laat je niet provoceren door de emotionele uitbarsting en blijft rustig en verbonden. Dit leert Bram dat grenzen standhouden ook als hij boos wordt.",
      },
      {
        id: "b",
        text: "Je zegt: 'Als je zo doet, krijg je helemaal geen snoep meer vandaag.'",
        isCorrect: false,
        feedback:
          "Door het snoepmoment na het eten ook af te nemen, straf je het uiten van frustratie in plaats van het oorspronkelijke gedrag te adresseren. Bovendien escaleer je de situatie: Bram heeft nu niets meer te verliezen. De oorspronkelijke grens (snoepen na het eten) was helder genoeg — daar hoeft geen extra straf bij.",
      },
      {
        id: "c",
        text: "Je geeft hem een klein snoepje om de lieve vrede te bewaren — het is maar één snoepje.",
        isCorrect: false,
        feedback:
          "Door toe te geven na huilen en smeekbeden leert Bram dat emotionele druk werkt. Dit is intermittente bekrachtiging: het meest hardnekkige bekrachtigingspatroon dat er bestaat. De volgende keer zal hij langer en harder huilen, omdat het eerder heeft gewerkt.",
      },
    ],
    explanation:
      "Grenzen rond eten en snoepen zijn een dagelijks thema in veel gezinnen. De sleutel is het combineren van empathie (het gevoel erkennen) met consistentie (de grens handhaven). Kinderen leren uitstel van behoeftebevrediging — een cruciale vaardigheid — alleen als ouders consequent hun grenzen handhaven, ook onder emotionele druk.",
    research:
      "Mischel et al. (2011) toonden met de beroemde marshmallow-test aan dat het vermogen tot uitstel van behoeftebevrediging samenhangt met betere uitkomsten op vele levensgebieden. Ouderlijke consistentie bij het handhaven van regels rondom eten draagt bij aan de ontwikkeling van deze vaardigheid (Kidd et al., 2013).",
  },
  {
    id: "gr_44",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 44,
    question:
      "Welke vorm van consequentie is het meest leerzaam voor kinderen volgens de theorie over natuurlijke en logische consequenties?",
    options: [
      {
        id: "a",
        text: "Een natuurlijke consequentie: het kind ervaart het directe gevolg van zijn gedrag zonder ouderlijke inmenging (bijv. geen jas aan = het koud hebben).",
        isCorrect: true,
        feedback:
          "Correct. Natuurlijke consequenties zijn het meest leerzaam omdat het kind een direct verband ervaart tussen zijn eigen gedrag en het gevolg, zonder dat de ouder als 'straffer' optreedt. Het kind leert van de werkelijkheid zelf. Dit bevordert interne motivatie en verantwoordelijkheidsgevoel. Uiteraard geldt dit alleen wanneer de natuurlijke consequentie veilig is.",
      },
      {
        id: "b",
        text: "Een door de ouder opgelegde straf die zo streng is dat het kind het gedrag nooit meer herhaalt.",
        isCorrect: false,
        feedback:
          "Strenge straffen leiden vaak tot vermijdingsgedrag en angst, maar niet tot moreel inzicht. Het kind leert niet waarom het gedrag onwenselijk is, alleen dat het gepakt worden pijnlijk is. Bovendien is er een afnemend effect: steeds strengere straffen zijn nodig om hetzelfde effect te bereiken.",
      },
      {
        id: "c",
        text: "Een logische consequentie die geen verband houdt met het gedrag maar wel indruk maakt, zoals geen schermtijd na slaan.",
        isCorrect: false,
        feedback:
          "Een logische consequentie moet wél logisch verband houden met het gedrag om effectief te zijn. 'Geen schermtijd na slaan' heeft geen logisch verband en voelt als een willekeurige straf. Een echte logische consequentie bij slaan zou zijn: 'Als je slaat, stoppen we het spel' — het verband is direct en begrijpelijk.",
      },
    ],
    explanation:
      "Natuurlijke consequenties laten kinderen leren van de realiteit zelf: geen jas aan = koud, speelgoed niet opruimen = kwijtraken. De ouder hoeft niet te straffen; de werkelijkheid doet het werk. Logische consequenties — door de ouder opgelegde gevolgen die logisch verband houden met het gedrag — zijn het op één na meest effectief. Beide zijn superieur aan willekeurige straffen.",
    research:
      "Dreikurs & Grey (1968) introduceerden het onderscheid tussen natuurlijke en logische consequenties. Grolnick (2003) benadrukt dat consequenties die kinderen helpen het verband te zien tussen gedrag en gevolg, de internalisatie van normen bevorderen.",
  },
  {
    id: "gr_45",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 45,
    question:
      "Finn (16) komt om 01:00 uur thuis terwijl de afspraak 23:00 uur was. Hij ruikt niet naar alcohol en zegt dat hij de tijd vergat bij een vriend. Hoe ga je hiermee om?",
    options: [
      {
        id: "a",
        text: "Je bespreekt het de volgende ochtend als je allebei uitgerust bent: je benoemt je zorgen, vraagt wat er gebeurde, en bedenkt samen een consequentie.",
        isCorrect: true,
        feedback:
          "Goed. Om 01:00 uur 's nachts is geen geschikt moment voor een opvoedgesprek — emoties lopen hoog op en niemand denkt helder. Door het de volgende ochtend te bespreken model je emotieregulatie. Samen een consequentie bedenken past bij de autoritatieve aanpak voor tieners en vergroot de kans dat de afspraak voortaan wordt nagekomen.",
      },
      {
        id: "b",
        text: "Je zegt meteen: 'De komende twee weken mag je niet meer weg 's avonds.'",
        isCorrect: false,
        feedback:
          "Een impulsieve straf midden in de nacht is vaak disproportioneel en voelt voor de tiener als een machtsvertoon. Twee weken huisarrest voor één keer te laat komen staat niet in verhouding en vergroot de kans op stiekem gedrag. Bovendien mis je de kans om te begrijpen wat er werkelijk aan de hand was.",
      },
      {
        id: "c",
        text: "Je zegt niets — hij is veilig thuis en het was maar twee uur later. Je wilt niet overdrijven.",
        isCorrect: false,
        feedback:
          "Twee uur te laat thuiskomen zonder bericht is een serieuze grensoverschrijding, ook bij een 16-jarige. Er niet op reageren geeft de boodschap dat afspraken vrijblijvend zijn. Bovendien weet je niet waar hij was of wat er gebeurd is. Grenzen stellen bij tieners is moeilijker maar minstens zo belangrijk.",
      },
    ],
    explanation:
      "Bij tieners die grenzen overschrijden is timing van het gesprek cruciaal. Midden in de nacht of in de hitte van het moment is het risico op escalatie groot. Een rustig gesprek de volgende dag, waarin je je zorgen deelt, luistert naar het verhaal, en samen een passende consequentie bepaalt, is effectiever en respectvoller.",
    research:
      "Steinberg (2001) beschrijft dat effectief ouderschap van adolescenten warmte combineert met monitoring en het stellen van consequenties via dialoog. Kerr & Stattin (2000) vonden dat kennisdeling door de tiener zelf (en niet alleen controle door ouders) de beste voorspeller is van minder risicogedrag.",
  },
  {
    id: "gr_46",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "gevorderd",
    order: 46,
    question:
      "Noor (5) heeft de hele dag niet goed gegeten en weigert nu haar avondeten. Ze wil alleen een boterham met hagelslag. Jij wilt dat ze de warme maaltijd eet. Wat doe je?",
    options: [
      {
        id: "a",
        text: "Je dwingt haar om minstens drie happen te nemen van de warme maaltijd voordat ze iets anders mag.",
        isCorrect: false,
        feedback:
          "Dwingen om te eten kan leiden tot een negatieve associatie met eten en in het ergste geval bijdragen aan eetproblemen later. Onderzoek toont aan dat dwangmatig voeden de intrinsieke eetregulatie van kinderen verstoort. De grens moet gaan over wat er aangeboden wordt, niet over hoeveel er gegeten moet worden.",
      },
      {
        id: "b",
        text: "Je biedt de warme maaltijd aan en zegt: 'Dit is wat we eten vanavond. Je hoeft niet alles op te eten, maar ik maak geen apart eten. Als je niet wilt, kun je wachten tot het ontbijt.'",
        isCorrect: true,
        feedback:
          "Goed. Je stelt een duidelijke grens (geen apart eten) zonder te dwingen. De verantwoordelijkheidsverdeling is helder: jij bepaalt wat er op tafel komt, Noor bepaalt hoeveel ze eet. Één avond minder eten is niet schadelijk en leert het kind dat de maaltijd is wat het is. Dit voorkomt dat het kind elke avond een alternatief eist.",
      },
      {
        id: "c",
        text: "Je maakt de boterham met hagelslag — eten is eten, en tenminste krijgt ze dan iets binnen.",
        isCorrect: false,
        feedback:
          "Door een alternatief te bieden telkens als het kind het eten weigert, leer je haar dat weigeren beloond wordt met iets lekkerders. Dit patroon escaleert: morgen is het ook hagelslag, en overmorgen ook. De grens om geen apart eten te maken is belangrijk voor een gezonde eetcultuur in het gezin.",
      },
    ],
    explanation:
      "De 'verantwoordelijkheidsverdeling bij eten' (Satter-model) stelt dat ouders verantwoordelijk zijn voor het wat, wanneer en waar van eten, en kinderen voor het hoeveel en of ze eten. Door niet te dwingen maar ook geen alternatieven te bieden, respecteer je de autonomie van het kind binnen duidelijke grenzen.",
    research:
      "Satter (2007) ontwikkelde het 'Division of Responsibility'-model dat breed wordt toegepast in de voedingswetenschap. Galloway et al. (2006) vonden dat dwang bij eten leidt tot minder voedselinname en meer weerstand op lange termijn.",
  },
  {
    id: "gr_47",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 47,
    question:
      "Na het stellen van een grens voelt vader Ahmed zich schuldig. Zijn dochter Yasmin (8) huilde en zei: 'Jij bent gemeen, ik wil naar mama!' Ahmed twijfelt nu of hij te streng was. Wat is het belangrijkste inzicht over schuldgevoel bij grensstelling?",
    options: [
      {
        id: "a",
        text: "Schuldgevoel is een teken dat je te streng was. Als je kind huilt, moet je je grens heroverwegen en soepeler worden.",
        isCorrect: false,
        feedback:
          "Huilen en boosheid zijn normale reacties van kinderen op grenzen — het betekent niet automatisch dat de grens verkeerd was. Als ouders elke grens heroverwegen bij tranen, leren kinderen dat emotionele druk grenzen verplaatst. Het is belangrijk om onderscheid te maken tussen een grens die te streng is en een kind dat het moeilijk vindt.",
      },
      {
        id: "b",
        text: "Schuldgevoel bij grenzen stellen is normaal en hoort bij betrokken ouderschap. Het is een signaal dat je om je kind geeft, niet dat je grens verkeerd was.",
        isCorrect: true,
        feedback:
          "Precies. Schuldgevoel is een bijproduct van empathisch ouderschap: je voelt het verdriet van je kind en dat doet pijn. Maar het feit dat een grens verdriet veroorzaakt, maakt de grens niet verkeerd. Je kunt je kind vasthouden in zijn verdriet terwijl je de grens handhaaft. Dat is liefdevol grenzen stellen.",
      },
      {
        id: "c",
        text: "Een goede vader voelt geen schuldgevoel bij het stellen van grenzen. Je moet leren om je emoties uit te schakelen bij opvoedingsbeslissingen.",
        isCorrect: false,
        feedback:
          "Emoties uitschakelen is niet realistisch en niet wenselijk. Vaders die hun emoties onderdrukken lopen meer risico op burn-out en modellen emotionele vermijding aan hun kinderen. Het gaat niet om het uitschakelen van schuldgevoel, maar om het leren verdragen ervan terwijl je toch handelt in het belang van je kind.",
      },
    ],
    explanation:
      "Veel vaders ervaren schuldgevoel bij het stellen van grenzen, zeker als het kind intens reageert. Dit schuldgevoel is een teken van empathie en betrokkenheid, niet van fout ouderschap. De uitdaging is om het schuldgevoel te erkennen zonder het als leidraad te gebruiken voor je opvoedingsbesluiten. Een grens die goed is voor je kind kan tijdelijk verdriet veroorzaken.",
    research:
      "Rotkirch & Janhunen (2010) beschrijven 'parental guilt' als een universeel fenomeen dat samenhangt met de intensiteit van ouderlijke investering. Leach (2015) toont aan dat vaders die schuldgevoel ervaren bij grenzen maar deze toch handhaven, consistent betere opvoedingsuitkomsten laten zien.",
  },
  {
    id: "gr_48",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "basis",
    order: 48,
    question:
      "Stijn (4) slaat jou in het gezicht als hij boos is. Wat is de juiste eerste reactie?",
    options: [
      {
        id: "a",
        text: "Je pakt zijn hand stevig vast en zegt kalm: 'Stoppen. Slaan mag niet. Slaan doet pijn.' Je houdt hem vast tot hij kalmeert.",
        isCorrect: true,
        feedback:
          "Goed. Bij fysiek grensoverschrijdend gedrag is de eerste stap altijd: het gedrag direct stoppen. Door kort en duidelijk te benoemen wat er niet mag en waarom (het doet pijn), stel je een heldere grens. Het vasthouden biedt fysieke begrenzing die een 4-jarige nodig heeft wanneer hij zichzelf niet kan reguleren.",
      },
      {
        id: "b",
        text: "Je negeert het slaan en loopt weg — aandacht geven bekrachtigt het gedrag alleen maar.",
        isCorrect: false,
        feedback:
          "Fysiek geweld kun je niet negeren. Bij een 4-jarige die slaat is actief ingrijpen nodig: het kind kan zijn impulsen nog niet beheersen en heeft jouw hulp nodig om te stoppen. Weglopen laat het kind alleen met een emotie die hij niet aankan en geeft de boodschap dat slaan geen consequenties heeft.",
      },
      {
        id: "c",
        text: "Je slaat zachtjes terug zodat hij voelt hoe het is — dan leert hij het snelst.",
        isCorrect: false,
        feedback:
          "Terugslaan — hoe zacht ook — leert het kind dat slaan een acceptabele reactie is op boosheid. Je modelleert precies het gedrag dat je wilt afleren. Bovendien is het voor een jong kind beangstigend om door een volwassene geslagen te worden, hoe licht ook. Dit beschadigt het vertrouwen en de hechting.",
      },
    ],
    explanation:
      "Bij fysiek grensoverschrijdend gedrag van jonge kinderen is direct ingrijpen essentieel. De drie stappen zijn: (1) stop het gedrag fysiek, (2) benoem de grens kort en duidelijk, (3) help het kind met de onderliggende emotie. Een 4-jarige heeft nog onvoldoende ontwikkelde prefrontale cortex om zijn impulsen zelf te beheersen.",
    research:
      "Gershoff & Grogan-Kaylor (2016) toonden in een meta-analyse aan dat fysieke straf consequent samenhangt met meer agressie bij kinderen. Patterson (1982) beschreef hoe coercieve interacties (geweld beantwoorden met geweld) escaleren in een vicieuze cirkel.",
  },
  {
    id: "gr_49",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 49,
    question:
      "Tim (14) wil een later bedtijd en argumenteert logisch: 'Ik ben de enige in mijn klas die om 21:30 naar bed moet. Ik heb gelezen dat tieners later inslapen door hun biologische klok. Waarom luister je niet naar de wetenschap?' Hoe reageer je als vader het meest effectief?",
    options: [
      {
        id: "a",
        text: "Je erkent zijn argument ('je hebt gelijk over de biologische klok'), onderzoekt samen de feiten, en past de bedtijd aan naar een compromis met duidelijke voorwaarden (bijv. 22:00 uur op schooldagen, als hij 's ochtends goed functioneert).",
        isCorrect: true,
        feedback:
          "Uitstekend. Tim gebruikt logisch redeneren — een teken van cognitieve ontwikkeling dat je wilt aanmoedigen. Door zijn argument serieus te nemen model je dat redelijke argumenten grenzen kunnen beïnvloeden, wat anders is dan emotionele druk. Het compromis met voorwaarden is autoritatief: je past de grens aan op basis van goede argumenten, niet op basis van druk.",
      },
      {
        id: "b",
        text: "Je zegt: 'Ik ben je vader, niet je studiegenoot. De bedtijd blijft 21:30, discussie gesloten.'",
        isCorrect: false,
        feedback:
          "Door het gesprek te weigeren leer je Tim dat logisch argumenteren zinloos is en dat macht het enige is wat telt. Dit is een gemiste kans om zijn cognitieve ontwikkeling te stimuleren en om een grens aan te passen die mogelijk inderdaad verouderd is. Tieners die ervaren dat redelijk overleg werkt, vertonen minder stiekem gedrag.",
      },
      {
        id: "c",
        text: "Je geeft volledig toe: hij heeft gelijk, de wetenschap is duidelijk, hij mag voortaan zelf bepalen wanneer hij naar bed gaat.",
        isCorrect: false,
        feedback:
          "Hoewel Tims argument wetenschappelijke grond heeft, is volledig loslaten van de grens te veel autonomie voor een 14-jarige. Tieners hebben nog steeds structuur nodig, ook al verschuift de biologische klok. De oplossing is aanpassen met voorwaarden, niet volledig loslaten. Zelfregulatie van slaap is een vaardigheid die geleidelijk ontwikkeld wordt.",
      },
    ],
    explanation:
      "Tieners ontwikkelen formeel-operationeel denken en kunnen logisch argumenteren. Dit is een kracht die je als ouder wilt stimuleren, niet onderdrukken. De autoritatieve ouder onderscheidt zich door bereid te zijn grenzen aan te passen wanneer het kind goede argumenten heeft, terwijl een autoritaire ouder vasthoudt aan regels ongeacht de argumentatie. Dit betekent niet dat alle grenzen verschuifbaar zijn, maar dat het kind leert dat redelijkheid werkt.",
    research:
      "Crowley et al. (2007) vonden dat tieners wier ouders openstaan voor redelijke argumentatie meer vertrouwen hebben in de ouder-kindrelatie. Carskadon (2011) bevestigt dat de circadiane klok van adolescenten verschuift naar latere slaap-waaktijden, wat implicaties heeft voor bedtijdregels.",
  },
  {
    id: "gr_50",
    skill: "Grenzen",
    type: "quiz",
    difficulty: "expert",
    order: 50,
    question:
      "Mila (6) heeft een vriendinnetje te spelen en ze worden steeds wilder. Het vriendinnetje begint op de bank te springen. Mila kijkt naar jou en doet mee. Hoe stel je een grens aan een kind dat niet van jou is?",
    options: [
      {
        id: "a",
        text: "Je zegt alleen tegen Mila: 'Mila, wij springen niet op de bank.' Je hoopt dat het vriendinnetje het oppikt.",
        isCorrect: false,
        feedback:
          "Dit is inconsequent: je stelt de grens alleen aan je eigen kind terwijl het andere kind mag doorgaan. Mila ervaart dit als oneerlijk en de grens is onhoudbaar zolang het vriendinnetje doorgaat. Als de kinderen in jouw huis spelen, ben jij verantwoordelijk voor de regels — voor alle kinderen die er zijn.",
      },
      {
        id: "b",
        text: "Je laat het gaan — het is niet jouw kind en je wilt het vriendinnetje niet op haar gemak stellen.",
        isCorrect: false,
        feedback:
          "Door niets te zeggen geef je Mila de boodschap dat regels niet gelden als er visite is. Bovendien ben je als toezichthouder verantwoordelijk voor de veiligheid van alle kinderen in je huis. Het vriendinnetje verwacht zelfs dat er grenzen zijn — het biedt veiligheid in een onbekende omgeving.",
      },
      {
        id: "c",
        text: "Je zegt vriendelijk tegen beide meisjes: 'In ons huis springen we niet op de bank. Willen jullie buiten springen? Of op de kussens op de grond?'",
        isCorrect: true,
        feedback:
          "Precies goed. Je stelt de grens voor alle kinderen ('in ons huis'), wat eerlijk is en duidelijkheid schept. Door een alternatief te bieden (buiten springen of op kussens) bied je de energie een uitweg. De toon is vriendelijk maar duidelijk — ook naar andermans kind mag je een grens stellen als ze in jouw huis zijn.",
      },
    ],
    explanation:
      "Grenzen stellen aan andermans kinderen voelt ongemakkelijk maar is noodzakelijk. In jouw huis gelden jouw regels, voor alle kinderen. Door het als huisregel te formuleren ('in ons huis...') maak je het onpersoonlijk en eerlijk. Een alternatief bieden voorkomt dat het voelt als alleen maar verbieden en houdt het spel leuk.",
    research:
      "Ladd & Pettit (2002) beschrijven hoe ouderlijke supervisie en grensstelling tijdens speelafspraken bijdragen aan de sociale ontwikkeling van kinderen. Kinderen leren door grenzen in verschillende contexten dat regels per omgeving kunnen verschillen, wat flexibiliteit en sociaal begrip bevordert.",
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
  // MODULE 6: AUTONOMIE VERDIEPING — LOSLATEN, GRENZEN & MOTIVATIE (Vragen 31-50)
  {
    id: "au_31", skill: "Autonomie", type: "quiz", difficulty: "basis", order: 31,
    question: "Sem (4) heeft zijn eerste dag op de basisschool. Bij het afscheid klampt hij zich aan je been vast en huilt. Je voelt je verscheurd. Wat bevordert zijn autonomie het meest?",
    context: "Loslaten bij overgangsmomenten is een van de moeilijkste taken voor vaders.",
    options: [
      { id: "a", text: "Stevig afscheid nemen, een knuffel geven en vertrouwen uitspreken: 'Juf Marieke past goed op je. Papa komt je om 15:00 weer halen.'", isCorrect: true, feedback: "Correct! Een kort, warm en voorspelbaar afscheid biedt veiligheid. Je benoemt wie er voor hem is en wanneer jij terugkomt. Dit bouwt vertrouwen op." },
      { id: "b", text: "Stiekem wegsluipen als hij even afgeleid is door de juf", isCorrect: false, feedback: "Nee. Stiekem weggaan ondermijnt zijn vertrouwen fundamenteel. Hij leert: papa kan zomaar verdwijnen. Dit vergroot de separatieangst." },
      { id: "c", text: "Nog een halfuur blijven tot hij helemaal gekalmeerd is", isCorrect: false, feedback: "Nee. Lang blijven communiceert: 'het is hier niet veilig zonder mij.' Je verlengt de onzekerheid in plaats van hem te helpen de overgang te maken." },
    ],
    explanation: "Bij overgangsmomenten is een voorspelbaar ritueel het krachtigst: knuffel, benoemen wie er is, benoemen wanneer je terugkomt, en dan gaan. Het kind leert: papa gaat weg EN papa komt terug. Beide zijn essentieel.",
    research: "Bowlby, J. (1988). A Secure Base: Parent-Child Attachment and Healthy Human Development",
  },
  {
    id: "au_32", skill: "Autonomie", type: "quiz", difficulty: "basis", order: 32,
    question: "Mila (8) wil voor het eerst logeren bij haar vriendinnetje. Je vindt het spannend, ze heeft het nog nooit gedaan. Wat is de autonomie-benadering?",
    options: [
      { id: "a", text: "Nee zeggen, ze is er nog niet klaar voor want ze heeft het nog nooit gedaan", isCorrect: false, feedback: "Nee. Ze kan er niet klaar voor worden zonder het te DOEN. Nieuwe ervaringen vereisen een eerste keer." },
      { id: "b", text: "Samen voorbereiden: wat neem je mee, wat doe je als je heimwee hebt, en je mag altijd bellen", isCorrect: true, feedback: "Correct! Scaffolding bij een nieuwe ervaring: samen voorbereiden, een noodplan maken, en vertrouwen uitspreken. Dit geeft haar tools EN moed." },
      { id: "c", text: "Haar laten gaan zonder voorbereiding, ze moet leren het zelf uit te zoeken", isCorrect: false, feedback: "Nee. Zonder voorbereiding gooi je haar in het diepe. Een eerste logeerpartij verdient begeleiding vooraf." },
    ],
    explanation: "Eerste ervaringen (logeren, alleen reizen, zelfstandig iets kopen) zijn oefenmomenten voor autonomie. De sleutel: bereid samen voor, geef een vangnet, en laat dan los.",
    research: "Vygotsky, L.S. (1978). Mind in Society: The Development of Higher Psychological Processes",
  },
  {
    id: "au_33", skill: "Autonomie", type: "quiz", difficulty: "basis", order: 33,
    question: "Daan (10) wil zelf naar school fietsen, 1,5 km door de wijk. Je vindt het te gevaarlijk vanwege het verkeer. Hoe ga je hiermee om?",
    options: [
      { id: "a", text: "Nee zeggen tot hij naar de middelbare school gaat, dan is hij ouder en sterker", isCorrect: false, feedback: "Nee. Op 10 jaar kan een kind leren fietsen in het verkeer met begeleiding. Wachten tot de middelbare school betekent dat hij dan zonder oefening in drukker verkeer fietst." },
      { id: "b", text: "Hem direct laten gaan, hij moet het een keer leren", isCorrect: false, feedback: "Nee. Zonder voorbereiding is dit boven zijn niveau. Je onderschat de risico's niet, maar je kunt ze samen verkennen." },
      { id: "c", text: "Eerst samen de route fietsen, gevaarlijke punten bespreken, en hem daarna alleen laten gaan", isCorrect: true, feedback: "Correct! Klassieke scaffolding: eerst samen doen, dan begeleid loslaten. Je leert hem verkeersinzicht op de specifieke route en bouwt vertrouwen op." },
    ],
    explanation: "Het verschil tussen beschermen en beperken: beschermen is het kind voorbereiden op het risico. Beperken is het risico vermijden door het kind tegen te houden. Samen de route oefenen is beschermen; verbieden is beperken.",
    research: "Skenazy, L. (2009). Free-Range Kids. Jossey-Bass",
  },
  {
    id: "au_34", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 34,
    question: "Emma (13) wil haar haar felroze verven. Je vindt het verschrikkelijk en je maakt je zorgen over reacties van school. Wat is het autonomie-principe?",
    context: "Uiterlijke zelfexpressie is een belangrijk domein voor identiteitsontwikkeling bij tieners.",
    options: [
      { id: "a", text: "Het verbieden, je bent nog steeds de ouder en bepaalt hoe ze eruitziet", isCorrect: false, feedback: "Nee. Op 13 jaar is uiterlijk een belangrijk domein voor identiteitsontwikkeling. Verbieden creëert verzet en ondermijnt autonomie bij een onschuldige keuze." },
      { id: "b", text: "Toestaan maar je zorgen over school bespreken zonder haar keuze te blokkeren", isCorrect: true, feedback: "Correct! Je deelt je perspectief (zorgen over school) en respecteert haar keuze. 'Ik maak me zorgen over de schoolregels. Heb je dat gecheckt? Als het mag, is het jouw haar.'" },
      { id: "c", text: "Voorstellen om samen een compromis te zoeken, misschien een subtielere kleur", isCorrect: false, feedback: "Nee. Een compromis over HAAR haar stuurt haar richting jouw voorkeur. Als er geen veiligheidsrisico is, is het haar domein." },
    ],
    explanation: "Haarkleur, piercings en kledingkeuze zijn onschuldige domeinen voor zelfexpressie. Het autonomie-principe: als het veilig en omkeerbaar is, is het een kans om eigenaarschap te oefenen, niet om controle uit te oefenen.",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  {
    id: "au_35", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 35,
    question: "Luuk (11) weigert zijn huiswerk te maken. Hij zegt: 'Ik doe het later wel, ik bepaal zelf wanneer.' Je wilt ingrijpen. Wat is de balans tussen autonomie en structuur?",
    options: [
      { id: "a", text: "Hem dwingen nu te beginnen, uitstelgedrag moet je doorbreken", isCorrect: false, feedback: "Nee. Dwang ondermijnt zijn intrinsieke motivatie en creëert een machtsstrijd. Je wint misschien vandaag, maar verliest zijn eigenaarschap." },
      { id: "b", text: "Hem volledig laten beslissen, het is zijn huiswerk en zijn verantwoordelijkheid", isCorrect: false, feedback: "Nee. Op 11 jaar heeft hij nog structuur nodig bij planning. Volledige vrijheid bij executieve functies die nog in ontwikkeling zijn, is geen autonomie maar verwaarlozing." },
      { id: "c", text: "De grens houden (huiswerk moet af) maar hem laten kiezen wanneer en hoe", isCorrect: true, feedback: "Correct! 'Het huiswerk moet vanavond af. Wil je na het eten of voor bedtijd? En wil je aan de keukentafel of op je kamer?' De WAT-grens staat, het WANNEER en HOE kiest hij." },
    ],
    explanation: "Autonomie binnen structuur: het WAT (huiswerk maken) is niet onderhandelbaar. Het WANNEER, WAAR en HOE wel. Dit respecteert zijn behoefte aan controle zonder de verantwoordelijkheid los te laten.",
    research: "Grolnick, W.S. (2003). The Psychology of Parental Control: How Well-Meant Parenting Backfires",
  },
  {
    id: "au_36", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 36,
    question: "Sophie (14) is bevriend met een meisje dat jij een slechte invloed vindt. Ze rookt, spijbelt soms en is brutaal tegen volwassenen. Je wilt de vriendschap verbieden. Wat zegt onderzoek?",
    options: [
      { id: "a", text: "De vriendschap verbieden, als ouder moet je je kind beschermen tegen slechte invloeden", isCorrect: false, feedback: "Nee. Het verbieden van vriendschappen bij tieners werkt averechts: het maakt de verboden vriend juist aantrekkelijker (Romeo-en-Julia-effect) en drijft je dochter ondergronds." },
      { id: "b", text: "Niets zeggen, tieners kiezen zelf hun vrienden en dat is belangrijk", isCorrect: false, feedback: "Nee. Je mag je zorgen bespreken. Niets zeggen is geen autonomie-ondersteuning maar onverschilligheid." },
      { id: "c", text: "Je zorgen open bespreken zonder de vriendschap te verbieden, en je huis openstellen zodat je zicht houdt", isCorrect: true, feedback: "Correct! 'Ik maak me zorgen over het roken en spijbelen. Ik vertrouw jou, en ik wil je vriendin graag leren kennen. Nodig haar eens uit.' Je houdt zicht en respecteert haar keuze." },
    ],
    explanation: "Vriendschappen verbieden werkt bij tieners bijna nooit. Beter: open communicatie, je huis als veilige plek aanbieden, en vertrouwen in je kind uitspreken. Je monitort zonder te controleren.",
    research: "Soenens, B. & Vansteenkiste, M. (2010). A Theoretical Upgrade of the Concept of Parental Psychological Control. Developmental Review",
  },
  {
    id: "au_37", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 37,
    question: "Jesse (9) wil stoppen met voetbal. Hij doet het al drie jaar en jij hebt veel geld en tijd geïnvesteerd. Je bent teleurgesteld. Hoe ga je hiermee om?",
    options: [
      { id: "a", text: "Hem het seizoen laten afmaken en daarna opnieuw evalueren", isCorrect: false, feedback: "Het seizoen afmaken kan een redelijke afspraak zijn, maar de kern is: WIENS behoefte staat centraal? Als hij echt ongelukkig is, is doordrukken schadelijk." },
      { id: "b", text: "Zijn motivatie serieus onderzoeken en je eigen teleurstelling scheiden van zijn wens", isCorrect: true, feedback: "Correct! Vraag: 'Wat vind je er niet meer leuk aan? Is er iets veranderd?' En reflecteer eerlijk: is mijn teleurstelling over HEM of over MIJN investering?" },
      { id: "c", text: "Hem laten stoppen zonder er verder over te praten, het is zijn keuze", isCorrect: false, feedback: "Nee. Direct stoppen zonder het te verkennen mist een leerkans. Samen onderzoeken WAAROM hij wil stoppen bouwt zelfinzicht op." },
    ],
    explanation: "Wanneer je kind een hobby wil stoppen waar jij in geïnvesteerd hebt, is eerlijke zelfreflectie essentieel. De vraag is niet 'hoe bescherm ik mijn investering?' maar 'wiens droom volgt mijn kind — de zijne of de mijne?'",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  {
    id: "au_38", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 38,
    question: "Je merkt dat je elke ochtend Noor (8) haar rugtas controleert, haar brood smeert, haar jas klaarlegt, en haar herinnert aan haar gymspullen. Ze doet zelf bijna niets. Welk patroon herken je?",
    context: "Helicopter-ouderschap: overmatige betrokkenheid die de autonomie van het kind ondermijnt.",
    options: [
      { id: "a", text: "Dit is normaal ouderschap, een 8-jarige kan dit nog niet zelf doen", isCorrect: false, feedback: "Nee. Een 8-jarige KAN haar eigen rugtas inpakken, brood smeren en gymspullen onthouden — als ze het mag oefenen. Jij hebt haar die kans ontnomen." },
      { id: "b", text: "Helicopter-vaderschap: je doet te veel en zij leert te weinig", isCorrect: true, feedback: "Correct! Als jij alles regelt, leert zij: mijn inspanning is niet nodig, papa doet het wel. Dit is aangeleerde afhankelijkheid. Begin met een taak overdragen en bouw op." },
      { id: "c", text: "Je bent gewoon een betrokken vader die goed voor zijn kind zorgt", isCorrect: false, feedback: "Betrokkenheid is prachtig, maar er is een grens. Betrokkenheid die VERVANGT wat het kind zelf kan, wordt beperkend in plaats van ondersteunend." },
    ],
    explanation: "Helicopter-ouderschap ontstaat uit liefde maar heeft het effect van controle. De test: doe ik dit omdat mijn kind het NIET kan, of omdat ik het sneller of beter kan? Als het antwoord het tweede is, laat je kind het doen.",
    research: "Grolnick, W.S. (2003). The Psychology of Parental Control: How Well-Meant Parenting Backfires",
  },
  {
    id: "au_39", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 39,
    question: "Olivier (15) wil een neuspiercing. Je vindt het niks. Hij zegt: 'Het is mijn lichaam.' Je partner zegt: 'Laat hem.' Je twijfelt. Wat is het kader?",
    options: [
      { id: "a", text: "Nee, op 15 jaar beslis jij nog over permanente lichaamsingrepen", isCorrect: false, feedback: "Een piercing is niet permanent — het gaatje groeit dicht. Op 15 jaar is lichaamsautonomie een belangrijk ontwikkelingsdomein. De vraag is: is het veilig en omkeerbaar?" },
      { id: "b", text: "Ja, maar stel voorwaarden: professionele studio, goede nazorg", isCorrect: true, feedback: "Correct! Het is veilig en omkeerbaar. Door voorwaarden te stellen (professionele studio, hygiëne, nazorgplan) combineer je autonomie met verantwoordelijkheid. Je zegt: ik respecteer je keuze en ik help je het veilig te doen." },
      { id: "c", text: "Hem laten doen wat hij wil zonder je mening te geven", isCorrect: false, feedback: "Je mag je mening geven. 'Ik zou het zelf niet doen, maar het is jouw lichaam' is eerlijk en respectvol. Mening geven is niet hetzelfde als controleren." },
    ],
    explanation: "Bij lichaamsautonomie van tieners is de toets: (1) Is het veilig? (2) Is het omkeerbaar? (3) Kan ik voorwaarden stellen die het veiliger maken? Als alle drie ja: geef ruimte met kaders.",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  {
    id: "au_40", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 40,
    question: "Vera (12) wil niet meer mee op de jaarlijkse familievakantie. Ze wil liever naar een zomerkamp met vriendinnen. Je bent gekwetst. Wat is het autonomie-perspectief?",
    options: [
      { id: "a", text: "Ze moet mee, de familievakantie is belangrijk voor de gezinsband", isCorrect: false, feedback: "Nee. Een geforceerde vakantie bouwt geen band maar wrok. Op 12 jaar groeit de behoefte aan eigen sociale ervaringen buiten het gezin." },
      { id: "b", text: "Haar keuze respecteren en samen zoeken naar een oplossing die beide behoeften dient", isCorrect: true, feedback: "Correct! Misschien een kortere familievakantie plus zomerkamp? Of een familieweekend en kamp? De kunst is: haar behoefte serieus nemen zonder de gezinsband op te geven." },
      { id: "c", text: "Haar laten gaan zonder er verder iets over te zeggen", isCorrect: false, feedback: "Nee. Je mag je teleurstelling benoemen: 'Ik vind het jammer, ik geniet van vakantie met jou.' Eerlijkheid over je gevoel is geen manipulatie als je haar keuze respecteert." },
    ],
    explanation: "Op 12 jaar begint de verschuiving van gezin naar peers. Dit is geen afwijzing van jou maar een gezonde ontwikkelingsstap. De uitdaging: je eigen teleurstelling scheiden van haar ontwikkelingsbehoefte.",
    research: "Erikson, E. (1968). Identity: Youth and Crisis. Norton",
  },
  {
    id: "au_41", skill: "Autonomie", type: "quiz", difficulty: "gevorderd", order: 41,
    question: "Max (7) mag van jou nooit alleen in de tuin spelen, nooit zelf een boterham smeren, en nooit zelf naar de buren lopen. Je partner zegt: 'Je controleert te veel.' Wat is het effect op Max volgens Grolnick?",
    options: [
      { id: "a", text: "Hij voelt zich veilig en beschermd door jouw betrokkenheid", isCorrect: false, feedback: "Nee. Overcontrole voelt niet als veiligheid maar als wantrouwen. Het kind ervaart: papa denkt dat ik het niet kan. Dit ondermijnt competentie." },
      { id: "b", text: "Hij leert minder snel dan leeftijdsgenoten en wordt afhankelijker", isCorrect: true, feedback: "Correct! Grolnick toont: overcontrolerende ouders creëren kinderen die minder zelfstandig, minder veerkrachtig en angstiger zijn dan kinderen met autonomie-ondersteuning." },
      { id: "c", text: "Het maakt niet zoveel uit, elk kind ontwikkelt zich in zijn eigen tempo", isCorrect: false, feedback: "Nee. Het tempo wordt hier niet bepaald door Max maar door jouw controle. Je remt actief zijn ontwikkeling af." },
    ],
    explanation: "Grolnick onderscheidt autonomie-ondersteuning van controle. Overcontrole ondermijnt alle drie de basisbehoeften: autonomie (geen keuzes), competentie (geen oefenkansen) en verbinding (relatie gebaseerd op controle, niet vertrouwen).",
    research: "Grolnick, W.S. (2003). The Psychology of Parental Control: How Well-Meant Parenting Backfires",
  },
  {
    id: "au_42", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 42,
    question: "Liam (10) bouwt een boomhut in de tuin. Het ontwerp is wankel en je ziet dat het gaat mislukken. Je wilt ingrijpen en het even goed doen. Wat is het verschil tussen scaffolding en micromanagement?",
    context: "Scaffolding = tijdelijke steun die je afbouwt. Micromanagement = permanente controle die autonomie ondermijnt.",
    options: [
      { id: "a", text: "Scaffolding: een gerichte vraag stellen ('Hoe maak je het stevig?') en hem laten ontdekken", isCorrect: true, feedback: "Correct! Scaffolding is een vraag of hint die ZIJN denken activeert. 'Wat gebeurt er als je erop gaat staan? Hoe zou je het steviger kunnen maken?' Hij blijft eigenaar." },
      { id: "b", text: "Scaffolding: het ontwerp samen hertekenen zodat het wel stevig wordt", isCorrect: false, feedback: "Nee. Samen hertekenen is overnemen vermomd als samenwerken. Het resultaat wordt van JOU, niet van hem. Dit is micromanagement met een vriendelijk gezicht." },
      { id: "c", text: "Hem laten falen, de boomhut stort in en dan leert hij er het meest van", isCorrect: false, feedback: "Falen KAN leerzaam zijn, maar als het gaat om veiligheid (instortende constructie) is een gerichte vraag beter dan afwachten." },
    ],
    explanation: "Scaffolding activeert het denken van het kind. Micromanagement vervangt het denken van het kind. De test: na jouw interventie, wie is dan de eigenaar van de oplossing — hij of jij?",
    research: "Vygotsky, L.S. (1978). Mind in Society: The Development of Higher Psychological Processes",
  },
  {
    id: "au_43", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 43,
    question: "Floor (11) is al twee weken bezig met een werkstuk over dieren. Ze kan het niet en wil opgeven. Je weet dat ze het KAN als ze het anders aanpakt. Welk concept van Vygotsky is hier relevant?",
    context: "Vygotsky onderscheidt drie zones: wat een kind zelf kan, wat het met hulp kan, en wat het nog niet kan.",
    options: [
      { id: "a", text: "Ze zit boven haar Zone van Naaste Ontwikkeling en de taak is te moeilijk", isCorrect: false, feedback: "Je zegt zelf dat ze het KAN als ze het anders aanpakt. Dat betekent dat ze IN de ZPD zit — ze heeft een strategische hint nodig, geen verlaging van de lat." },
      { id: "b", text: "Ze zit in de Zone van Naaste Ontwikkeling en heeft precies genoeg steun nodig om de stap te maken", isCorrect: true, feedback: "Correct! De ZPD is precies dit: wat ze nog niet ZELF kan maar WEL met de juiste ondersteuning. Jouw rol: niet het werkstuk overnemen, maar de juiste vraag stellen die haar denken activeert." },
      { id: "c", text: "Ze zit onder haar niveau en heeft het probleem dat ze niet gemotiveerd genoeg is", isCorrect: false, feedback: "Nee. Twee weken worstelen toont juist motivatie. Het probleem is niet inzet maar strategie. Ze heeft een hint nodig, geen peptalk." },
    ],
    explanation: "De Zone van Naaste Ontwikkeling is het gebied waar leren plaatsvindt: te makkelijk = verveling, te moeilijk = frustratie, precies ertussenin = groei. Jouw taak: identificeer waar ze vastloopt en bied precies genoeg steun.",
    research: "Vygotsky, L.S. (1978). Mind in Society: The Development of Higher Psychological Processes",
  },
  {
    id: "au_44", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 44,
    question: "Tim (13) maakt zijn huiswerk alleen als jij ernaast zit. Zodra je wegloopt, stopt hij. Je hebt het gevoel dat jij zijn motivatie bent. Wat is het verschil tussen intrinsieke en extrinsieke motivatie volgens Deci & Ryan?",
    options: [
      { id: "a", text: "Intrinsieke motivatie: Tim doet het uit eigen interesse. Extrinsieke: hij doet het omdat jij erbij zit. Tim zit vast in extrinsieke motivatie.", isCorrect: true, feedback: "Correct! Jouw aanwezigheid is de extrinsieke prikkel. Zonder jou stopt de motivatie. Het doel: geleidelijk je aanwezigheid afbouwen en zijn intrinsieke motivatie opbouwen via autonomie en competentie-ervaring." },
      { id: "b", text: "Het maakt niet uit welke motivatie, zolang het huiswerk maar afkomt", isCorrect: false, feedback: "Nee. Extrinsieke motivatie werkt op korte termijn maar ondermijnt het leren op lange termijn. Als jij er niet meer bent (middelbare school), valt zijn motivatie weg." },
      { id: "c", text: "Hij is gewoon lui en heeft meer discipline nodig van jouw kant", isCorrect: false, feedback: "Nee. Lui is een label, geen verklaring. Hij mist autonomie (eigen keuze) en competentie-ervaring (het gevoel dat hij het zelf kan). Dat is een motivatieprobleem, geen karakterprobleem." },
    ],
    explanation: "Deci & Ryan: intrinsieke motivatie groeit wanneer drie basisbehoeften vervuld zijn: autonomie (ik kies zelf), competentie (ik kan het), en verbinding (het doet ertoe). Als je altijd ernaast zit, neem je de autonomie weg.",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  {
    id: "au_45", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 45,
    question: "Je moedigt Koen (12) aan met: 'Als je een 8 haalt voor je toets, krijg je een nieuw spelletje.' Hij haalt een 8. Wat is het langetermijneffect van deze aanpak volgens Self-Determination Theory?",
    options: [
      { id: "a", text: "Positief: hij leert dat hard werken wordt beloond en dat motiveert hem", isCorrect: false, feedback: "Nee. Op korte termijn werkt het, maar je verschuift zijn motivatie van LEREN naar BELONING. De volgende keer vraagt hij: wat krijg ik ervoor?" },
      { id: "b", text: "Neutraal: het maakt niet uit, zolang hij maar leert en goede cijfers haalt", isCorrect: false, feedback: "Nee. Het ondermijnt zijn intrinsieke motivatie. Onderzoek toont: kinderen die beloond worden voor taken die ze al leuk vonden, vinden die taken minder leuk na het wegvallen van de beloning." },
      { id: "c", text: "Schadelijk: je ondermijnt zijn intrinsieke motivatie door een extrinsieke beloning te koppelen aan leren", isCorrect: true, feedback: "Correct! Dit is het overjustification effect: externe beloningen verminderen intrinsieke motivatie. Leren wordt een middel voor het spelletje in plaats van een doel op zich." },
    ],
    explanation: "Het overjustification effect (Deci & Ryan): wanneer je een externe beloning koppelt aan een activiteit, verschuift de motivatie van intern naar extern. Het kind stopt met leren als de beloning wegvalt.",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  {
    id: "au_46", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 46,
    question: "Je merkt dat je Nora (14) subtiel manipuleert: als ze niet doet wat je wilt, trek je je liefde in. Je bent overal koel tot ze bijdraait. Wat is dit volgens Barber?",
    context: "Barber onderscheidt psychologische controle van gedragscontrole. Het eerste is schadelijk, het tweede kan nodig zijn.",
    options: [
      { id: "a", text: "Gedragscontrole: je stelt grenzen aan haar gedrag en dat is normaal", isCorrect: false, feedback: "Nee. Gedragscontrole gaat over regels en structuur (thuiskomsttijd, huiswerk). Wat jij doet is emotionele manipulatie — je gebruikt de relatie als drukmiddel." },
      { id: "b", text: "Psychologische controle: je manipuleert via liefdesintrekking en schuldgevoel", isCorrect: true, feedback: "Correct! Barber definieert psychologische controle als het manipuleren van de emotionele band: liefdesintrekking, schuldgevoelens opwekken, en emotionele koelheid als straf. Dit is diep schadelijk voor haar zelfbeeld." },
      { id: "c", text: "Een normale opvoedstrategie, kinderen moeten leren dat hun gedrag consequenties heeft", isCorrect: false, feedback: "Nee. Consequenties gaan over GEDRAG, niet over de RELATIE. Je mag vanavond niet gamen is een gedragsconsequentie. Koel zijn tot ze bijdraait is emotionele manipulatie." },
    ],
    explanation: "Barber's cruciale onderscheid: gedragscontrole (regels over gedrag) kan gezond zijn. Psychologische controle (manipulatie via de relatie) is altijd schadelijk. Het verschil: corrigeer je het GEDRAG of manipuleer je het KIND?",
    research: "Barber, B.K. (1996). Parental Psychological Control: Revisiting a Neglected Construct. Child Development",
  },
  {
    id: "au_47", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 47,
    question: "Anna (10) zegt: 'Papa, jij controleert alles. Ik mag nooit iets zelf beslissen.' Je eerste reactie is verdedigen: 'Dat is niet waar, vorige week mocht je zelf kiezen wat we aten!' Wat is de volwassen reactie?",
    options: [
      { id: "a", text: "Verdedigen met voorbeelden: laten zien dat ze wel degelijk keuzes krijgt", isCorrect: false, feedback: "Nee. Verdedigen mist het punt. Ze deelt een GEVOEL, geen juridisch betoog. Het gaat er niet om of het objectief klopt, maar dat zij het zo ERVAART." },
      { id: "b", text: "Haar feedback serieus nemen en samen onderzoeken waar ze meer ruimte kan krijgen", isCorrect: true, feedback: "Correct! 'Dank je dat je dit durft te zeggen. Op welke momenten voel je dat het meest? Waar zou je meer ruimte willen?' Je neemt haar ervaring serieus en maakt haar medeverantwoordelijk voor de oplossing." },
      { id: "c", text: "Uitleggen dat je het doet uit liefde en dat ze het later zal begrijpen", isCorrect: false, feedback: "Nee. 'Je begrijpt het later' is een van de meest autonomie-ondermijnende zinnen. Het ontkent haar huidige ervaring en plaatst jouw perspectief boven het hare." },
    ],
    explanation: "Als je kind je confronteert met overcontrole, is dat een cadeau: ze vertrouwt je genoeg om eerlijk te zijn. De valkuil: verdedigen. De kracht: luisteren, erkennen, en samen verbeteren.",
    research: "Grolnick, W.S. (2003). The Psychology of Parental Control: How Well-Meant Parenting Backfires",
  },
  {
    id: "au_48", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 48,
    question: "Jasper (8) heeft een wiskundetoets. Je hebt hem de avond ervoor gedwongen om twee uur te oefenen. Hij haalt een 9. De volgende toets zonder jouw dwang: een 5. Wat is er aan de hand?",
    options: [
      { id: "a", text: "Hij heeft jouw druk nodig om te presteren, dus moet je blijven duwen", isCorrect: false, feedback: "Nee. Dit bewijst juist het probleem: zonder jouw druk verdwijnt zijn inspanning. Je bent zijn externe motor geworden in plaats van dat hij een interne motor heeft ontwikkeld." },
      { id: "b", text: "De 9 was zijn verdienste, de 5 is pech, het fluctueert gewoon", isCorrect: false, feedback: "Nee. Het patroon (hoog met jouw druk, laag zonder) wijst op afhankelijkheid van extrinsieke motivatie, niet op toeval." },
      { id: "c", text: "Je hebt extrinsieke motivatie gecreëerd die verdwijnt zodra de externe druk wegvalt", isCorrect: true, feedback: "Correct! Dwang creëert prestatie op korte termijn maar ondermijnt eigenaarschap op lange termijn. Het doel: hem helpen zijn eigen motivatie te vinden, niet jouw druk te internaliseren." },
    ],
    explanation: "Het verschil tussen gecontroleerde motivatie (dwang, druk, beloning) en autonome motivatie (eigen keuze, interesse, waarde) is meetbaar in resultaten. Gecontroleerde motivatie levert piekprestaties maar geen duurzaam leren.",
    research: "Deci, E.L. & Ryan, R.M. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation",
  },
  {
    id: "au_49", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 49,
    question: "Eva (15) zegt dat ze niet meer naar pianoles wil. Ze speelt al acht jaar en is heel goed. Jij hebt duizenden euro's geïnvesteerd en droomt stiekem van het conservatorium. Wat is psychologische controle in deze situatie?",
    options: [
      { id: "a", text: "Zeggen: 'Ik heb hier zoveel in gestoken, je kunt nu niet zomaar stoppen.'", isCorrect: true, feedback: "Dit is psychologische controle: schuldgevoel opwekken via jouw investering. Haar keuze wordt gegijzeld door jouw verwachtingen. De piano is van HAAR, niet van jou." },
      { id: "b", text: "Haar laten stoppen zonder er verder een woord aan vuil te maken", isCorrect: false, feedback: "Nee. Een gesprek over haar motivatie is waardevol. Maar het verschil is: verken je haar wens of probeer je haar te overtuigen?" },
      { id: "c", text: "Samen evalueren wat ze mist en of er een aanpassing mogelijk is", isCorrect: false, feedback: "Dit is de op-een-na beste optie en kan goed zijn, maar het risico is dat samen evalueren een verkapte manier wordt om haar te overtuigen. Let op wiens behoefte centraal staat." },
    ],
    explanation: "Barber waarschuwt: psychologische controle is vaak onzichtbaar voor de ouder zelf. Schuldgevoel opwekken, teleurstelling tonen als drukmiddel, of de relatie koel maken zijn allemaal vormen van emotionele manipulatie.",
    research: "Barber, B.K. (1996). Parental Psychological Control: Revisiting a Neglected Construct. Child Development",
  },
  {
    id: "au_50", skill: "Autonomie", type: "quiz", difficulty: "expert", order: 50,
    question: "Je bent vader van drie kinderen: Sanne (6), Bas (10) en Lotte (15). Alle drie vragen om meer vrijheid. Hoe verschilt autonomie-ondersteuning per leeftijd volgens de ontwikkelingspsychologie?",
    options: [
      { id: "a", text: "Hetzelfde principe: laat alle drie zoveel mogelijk zelf beslissen", isCorrect: false, feedback: "Nee. Autonomie is niet zoveel mogelijk vrijheid maar passende vrijheid bij het ontwikkelingsniveau. De mate van keuzevrijheid groeit mee met de capaciteit." },
      { id: "b", text: "Sanne: keuze uit 2-3 opties. Bas: eigen planning met kaders. Lotte: eigen beslissingen met je als klankbord.", isCorrect: true, feedback: "Correct! Autonomie schaalt mee: 6j = beperkte keuzes binnen jouw kader, 10j = eigen verantwoordelijkheid met structuur, 15j = eigen beslissingen met jou als adviseur. De richting is altijd: meer vrijheid, minder controle." },
      { id: "c", text: "Alleen Lotte is oud genoeg voor echte autonomie, de anderen zijn te jong", isCorrect: false, feedback: "Nee. Zelfs een 6-jarige heeft autonomie nodig — op haar niveau. Een kleuter die mag kiezen tussen twee truien ervaart net zoveel eigenaarschap als een 15-jarige die zelf haar vakantie plant." },
    ],
    explanation: "Autonomie is geen aan-uitknop maar een dimmer die je geleidelijk opschuift. De kunst is om op elke leeftijd precies genoeg vrijheid te bieden: niet zo weinig dat het kind passief wordt, niet zo veel dat het overweldigd raakt.",
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
  // MODULE 6: HERSTEL VERDIEPING — MISLUKKEN, TIMING & VERDIEPING (Vragen 31-50)
  {
    id: "hr_31", skill: "Herstel", type: "quiz", difficulty: "basis", order: 31,
    question: "Je hebt tegen Levi (6) geschreeuwd toen hij per ongeluk sap over je laptop morste. Hij kromp ineen en rende naar zijn kamer. Een uur later zeg je sorry. Hij zegt: 'Oké' maar blijft op afstand. Wat betekent dit?",
    context: "Kinderen kunnen een sorry accepteren en toch nog tijd nodig hebben om zich veilig te voelen.",
    options: [
      { id: "a", text: "Hij heeft je vergeven, het is opgelost en je kunt verder", isCorrect: false, feedback: "Nee. 'Oké' bij een 6-jarige is vaak gehoorzaamheid, niet vergeving. Zijn lichaamstaal (afstand houden) vertelt het echte verhaal." },
      { id: "b", text: "Hij is boos en straft je door afstand te houden", isCorrect: false, feedback: "Nee. Een 6-jarige straft niet bewust. Zijn afstand is een beschermingsreactie: zijn zenuwstelsel is nog geactiveerd. Hij heeft tijd en nabijheid nodig, niet woorden." },
      { id: "c", text: "Zijn woorden zeggen oké maar zijn lichaam zegt: ik heb meer tijd nodig om me veilig te voelen", isCorrect: true, feedback: "Correct! Herstel is niet klaar als het woord sorry gezegd is. Het is klaar als het kind zich weer VEILIG voelt. Dat kan uren of zelfs een dag duren. Bied nabijheid zonder te forceren." },
    ],
    explanation: "Sorry zeggen is stap 1. Maar het kind heeft daarna vaak nog een niet-verbale herstelfase nodig: samen op de bank zitten, een spelletje doen, een knuffel als hij er klaar voor is. Woorden starten herstel; nabijheid voltooit het.",
    research: "Siegel, D. & Bryson, T. (2020). The Power of Showing Up",
  },
  {
    id: "hr_32", skill: "Herstel", type: "quiz", difficulty: "basis", order: 32,
    question: "Je hebt een schreeuwpartij gehad met Roos (5). Je was zo boos dat je met de deur sloeg. Zij is nu heel stil en tekent in een hoekje. Ze schrikt als je binnenkomt. Wat is de eerste prioriteit?",
    options: [
      { id: "a", text: "Uitleggen waarom je boos was zodat ze begrijpt wat er gebeurde", isCorrect: false, feedback: "Nee. Haar brein zit nog in de alarmstand. Uitleg bereikt haar nu niet. Eerst moet ze zich fysiek veilig voelen." },
      { id: "b", text: "Haar veiligheidsgevoel herstellen: kalmte uitstralen, op haar niveau gaan zitten, en wachten", isCorrect: true, feedback: "Correct! Als een kind schrikt van jouw boosheid, is het zenuwstelsel in fight-flight-freeze. De eerste stap is niet praten maar KALMTE bieden: zachte stem, open houding, geduld. Pas als ze ontspant, kun je praten." },
      { id: "c", text: "Haar even met rust laten, ze heeft ruimte nodig om tot zichzelf te komen", isCorrect: false, feedback: "Ruimte kan nodig zijn bij oudere kinderen, maar een 5-jarige die bang is geworden heeft juist de nabijheid van een kalme ouder nodig om te reguleren." },
    ],
    explanation: "Na een angstaanjagend moment is het zenuwstelsel van het kind geactiveerd. Je kunt pas herstellen als het kind gereguleerd is. Stap 1: kalmte bieden via je eigen lichaamstaal. Stap 2: verbinding. Stap 3: woorden.",
    research: "Siegel, D. & Bryson, T. (2012). The Whole-Brain Child",
  },
  {
    id: "hr_33", skill: "Herstel", type: "quiz", difficulty: "basis", order: 33,
    question: "Je zegt tegen Bram (8): 'Het spijt me dat ik schreeuwde. Maar jij luisterde ook niet, dus ik had geen keus.' Is dit effectief herstel?",
    options: [
      { id: "a", text: "Ja, je bent eerlijk over wat er gebeurde en waarom", isCorrect: false, feedback: "Nee. Je verschuift de verantwoordelijkheid naar hem. 'Maar jij...' maakt het kind medeschuldig aan JOUW gedrag." },
      { id: "b", text: "Deels, de sorry is goed maar het excuus maakt het ongedaan", isCorrect: false, feedback: "Niet deels. De sorry wordt volledig tenietgedaan door het excuus. Het kind hoort: het was eigenlijk jouw schuld." },
      { id: "c", text: "Nee, sorry zeggen met een excuus is geen verantwoordelijkheid nemen", isCorrect: true, feedback: "Correct! Zuiver herstel bevat geen 'maar', geen 'alleen omdat', geen 'jij deed ook'. Beter: 'Het spijt me dat ik schreeuwde. Dat had ik niet moeten doen, ook al luisterde je niet.' PUNT." },
    ],
    explanation: "De meest voorkomende herstel-valkuil: sorry-maar. Het woordje 'maar' wist de sorry en legt de schuld bij het kind. Effectief herstel: neem verantwoordelijkheid voor JOUW actie, los van wat het kind deed.",
    research: "Gottman, J. (2011). Raising An Emotionally Intelligent Child",
  },
  {
    id: "hr_34", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 34,
    question: "Je hebt Mees (10) oneerlijk behandeld: je beloofde naar zijn voetbalwedstrijd te komen maar vergat het. Hij is diep teleurgesteld. Je zegt sorry, maar hij antwoordt: 'Je zegt altijd sorry maar je doet het toch weer.' Wat nu?",
    options: [
      { id: "a", text: "Verdedigen: 'Dat is niet eerlijk, ik ben bijna altijd bij je wedstrijden!'", isCorrect: false, feedback: "Nee. Verdedigen invalideert zijn ervaring. Hij deelt pijn, geen statistieken. Jouw track record doet er nu even niet toe." },
      { id: "b", text: "Erkennen dat woorden niet meer genoeg zijn en een concreet plan maken", isCorrect: true, feedback: "Correct! 'Je hebt gelijk dat sorry niet genoeg is. Ik ga het in mijn agenda zetten met een alarm. En als er toch iets tussenkomt, bel ik je VOOR de wedstrijd, niet erna.' Actie vervangt woorden." },
      { id: "c", text: "Het even laten rusten, hij is nu te boos om te luisteren", isCorrect: false, feedback: "Nee. Hij IS aan het communiceren — heel direct zelfs. Dit is geen moment om weg te lopen maar om te luisteren en actie te beloven." },
    ],
    explanation: "Wanneer sorry zijn waarde verliest door herhaling, verschuift het zwaartepunt naar CONCREET ANDERS DOEN. Het kind heeft geen woorden meer nodig maar bewijs. Maak een specifiek, controleerbaar plan.",
    research: "Gottman, J. (2011). Raising An Emotionally Intelligent Child",
  },
  {
    id: "hr_35", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 35,
    question: "Fleur (12) praat al vier dagen niet met je na een conflict over haar telefoongebruik. Je hebt twee keer geprobeerd het gesprek te openen, beide keren wees ze je af. Je voelt je machteloos. Wat doe je?",
    options: [
      { id: "a", text: "Een ultimatum stellen: 'Als je niet praat, neem ik je telefoon af.'", isCorrect: false, feedback: "Nee. Een ultimatum escaleert de machtsstrijd. Ze zwijgt uit pijn, niet uit manipulatie. Straf maakt de breuk groter." },
      { id: "b", text: "Ophouden met proberen, ze komt vanzelf wel als ze er klaar voor is", isCorrect: false, feedback: "Nee. Stoppen met proberen communiceert: ik geef je op. Verschuif van directe naar indirecte toenadering." },
      { id: "c", text: "Overschakelen op indirecte toenadering: een briefje, haar lievelingseten, of een zij-aan-zij activiteit aanbieden", isCorrect: true, feedback: "Correct! Als directe pogingen mislukken, probeer indirect. Een briefje onder haar deur: 'Ik wil het graag goedmaken. Ik ben er als je klaar bent.' Of haar lievelingseten koken. Gebaren spreken als woorden falen." },
    ],
    explanation: "Herstelpogingen mislukken soms. Dat betekent niet dat je stopt maar dat je van KANAAL wisselt. Van face-to-face naar zij-aan-zij. Van praten naar doen. Van woorden naar gebaren. Volharding zonder druk is de sleutel.",
    research: "Gottman, J. (2011). The Science of Trust: Emotional Attunement for Couples",
  },
  {
    id: "hr_36", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 36,
    question: "Lars (7) heeft iets stuk gemaakt. Jij werd boos en stuurde hem naar zijn kamer. Nu wil je herstellen. Je klopt aan, maar hij schreeuwt: 'Ga weg! Ik haat je!' Hoe reageer je?",
    options: [
      { id: "a", text: "Weggaan en hem straffen voor het zeggen van 'ik haat je'", isCorrect: false, feedback: "Nee. 'Ik haat je' is geen aanval maar een uiting van pijn en machteloosheid. Straffen voor emotie-uiting maakt de breuk groter." },
      { id: "b", text: "Forceren: de deur openen en zeggen dat jullie nu gaan praten", isCorrect: false, feedback: "Nee. Forceren bij een geactiveerd kind escaleert gegarandeerd. Zijn zenuwstelsel is in verdediging — hij kan nu niet luisteren." },
      { id: "c", text: "Kalm zeggen dat je er bent en later terugkomt, zonder boosheid over zijn woorden", isCorrect: true, feedback: "Correct! 'Ik hoor dat je boos bent. Dat mag. Ik kom straks terug, ik geef niet op.' Je erkent zijn emotie, geeft ruimte, en belooft terugkeer. Dit bouwt veiligheid op, zelfs in het conflict." },
    ],
    explanation: "Wanneer een kind je afwijst tijdens een herstelpoging, is dat geen mislukking maar informatie: hij is nog niet gereguleerd. Erken, geef ruimte, en kom terug. De kracht zit in het TERUGKOMEN, niet in het eerste moment.",
    research: "Hughes, D. (2009). Attachment-Focused Parenting. Norton",
  },
  {
    id: "hr_37", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 37,
    question: "Je bent zes weken op zakenreis geweest. Bij thuiskomst is Sanne (5) afstandelijk en wil niet bij je op schoot. Ze kiest steeds voor mama. Je voelt je afgewezen. Wat is er aan de hand?",
    options: [
      { id: "a", text: "Ze is je vergeten en de band is beschadigd, je moet opnieuw beginnen", isCorrect: false, feedback: "Nee. Ze is je niet vergeten. Ze STRAFT je ook niet bewust. Haar afstandelijkheid is een hechtingsreactie op het gemis." },
      { id: "b", text: "Haar gedrag is een hechtingsreactie: ze beschermt zichzelf tegen opnieuw verlaten worden", isCorrect: true, feedback: "Correct! Afstand houden na langdurige afwezigheid is een beschermingsmechanisme: als ik dichtbij kom en je gaat weer weg, doet het nog meer pijn. De oplossing: geduldig, voorspelbaar aanwezig zijn zonder te forceren." },
      { id: "c", text: "Normaal, kinderen van 5 zijn grillig en morgen wil ze weer bij je zijn", isCorrect: false, feedback: "Het kan morgen beter zijn, maar het patroon verdient aandacht. Grillig minimaliseert wat een serieuze hechtingsreactie kan zijn." },
    ],
    explanation: "Na langdurige afwezigheid doorlopen kinderen vaak een fase van afstandelijkheid of boosheid voordat ze opnieuw verbinden. Dit is geen straf maar bescherming. De sleutel: wees voorspelbaar aanwezig, forceer geen nabijheid, en laat het kind het tempo bepalen.",
    research: "Bowlby, J. (1988). A Secure Base: Parent-Child Attachment and Healthy Human Development",
  },
  {
    id: "hr_38", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 38,
    question: "Je hebt tegen Iris (9) gelogen over waarom je niet naar haar schooloptreden kon komen. De echte reden was dat je het vergeten was. Ze komt erachter. Hoe herstel je een leugen?",
    options: [
      { id: "a", text: "Volhouden bij je verhaal, de waarheid is te pijnlijk en beschamend", isCorrect: false, feedback: "Nee. Als ze de waarheid al kent, maakt vasthouden aan de leugen de breuk dieper. Nu is er een dubbele breuk: het vergeten EN het liegen." },
      { id: "b", text: "De waarheid vertellen, uitleggen waarom je loog, en beide breuken herstellen", isCorrect: true, feedback: "Correct! 'Ik heb gelogen en dat had ik niet moeten doen. De waarheid is dat ik het vergeten was. Dat is pijnlijk voor jou en ik schaam me ervoor. Je verdient eerlijkheid.' Dubbel herstel: de leugen EN het vergeten." },
      { id: "c", text: "Sorry zeggen voor het vergeten maar de leugen niet benoemen", isCorrect: false, feedback: "Nee. De leugen is een aparte breuk die apart hersteld moet worden. Alleen het vergeten herstellen laat de leugen onbenoemd — en die vreet aan het vertrouwen." },
    ],
    explanation: "Een leugen is een dubbele breuk: de oorspronkelijke fout plus het bedrog. Beide verdienen apart herstel. De eerlijkheid over de leugen is vaak pijnlijker maar essentieel voor het vertrouwen.",
    research: "Siegel, D. & Bryson, T. (2020). The Power of Showing Up",
  },
  {
    id: "hr_39", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 39,
    question: "Na de scheiding ziet je Stijn (8) alleen in het weekend. Hij is vaak stil en teruggetrokken op vrijdagavond. Zondagmiddag begint hij net los te komen en moet hij weer weg. Hoe herstel je na langdurige afwezigheid?",
    options: [
      { id: "a", text: "Elk weekend volproppen met leuke activiteiten zodat hij zich vermaakt", isCorrect: false, feedback: "Nee. Pretparkvaderschap compenseert niet voor gemiste verbinding. Kinderen hebben geen entertainment nodig maar AANWEZIGHEID." },
      { id: "b", text: "Een voorspelbaar ritueel creëren: elke vrijdag hetzelfde welkomstmoment, elke zondag hetzelfde afscheidsritueel", isCorrect: true, feedback: "Correct! Voorspelbaarheid is de sleutel bij wisselend contact. Een vast ritueel (samen koken op vrijdag, een wandeling op zondag) biedt structuur en verlaagt de drempel om opnieuw te verbinden." },
      { id: "c", text: "Accepteren dat de band minder hecht wordt, dat hoort bij een scheiding", isCorrect: false, feedback: "Nee. De band hoeft niet minder hecht te worden. Kwaliteit van contact is belangrijker dan kwantiteit. Maar het vraagt bewuste inspanning." },
    ],
    explanation: "Na scheiding of langdurige afwezigheid is voorspelbaarheid het krachtigste instrument. Kinderen voelen zich veilig in RITME: dezelfde momenten, dezelfde rituelen, hetzelfde gevoel van thuiskomen.",
    research: "Siegel, D. & Bryson, T. (2020). The Power of Showing Up",
  },
  {
    id: "hr_40", skill: "Herstel", type: "quiz", difficulty: "gevorderd", order: 40,
    question: "Je hebt Thijs (11) uitgescholden in een moment van frustratie. Woorden die je niet terug kunt nemen. Je schrikt van jezelf. Wanneer is het juiste moment om te herstellen?",
    context: "Timing van herstel is cruciaal: te snel escaleert, te laat communiceert onverschilligheid.",
    options: [
      { id: "a", text: "Meteen, terwijl jullie allebei nog emotioneel zijn", isCorrect: false, feedback: "Nee. Als jullie allebei nog geactiveerd zijn, wordt je sorry een nieuwe breuk. Je brein is nog in de stressreactie en je woorden komen niet authentiek over." },
      { id: "b", text: "Over een paar dagen, als het allemaal is overgewaaid", isCorrect: false, feedback: "Nee. Dagen wachten communiceert: het was niet zo erg, of erger: ik heb er geen spijt van. Te lang wachten laat de breuk verharden." },
      { id: "c", text: "Zodra jullie allebei gereguleerd zijn, vaak binnen een paar uur of de volgende ochtend", isCorrect: true, feedback: "Correct! De sweet spot: na de emotionele piek, maar voor het verharden. Vaak is dat dezelfde avond of de volgende ochtend. Je benoemt: ik was nog te boos om goed te praten. Nu ben ik kalm en wil ik het herstellen." },
    ],
    explanation: "Timing van herstel: te snel = emoties zijn nog te hoog, te laat = breuk verhardt. De gouden regel: herstel zodra je eigen zenuwstelsel gereguleerd is. Check bij jezelf: kan ik nu kalm en oprecht praten? Zo ja: nu. Zo nee: wacht.",
    research: "Siegel, D. & Bryson, T. (2012). The Whole-Brain Child",
  },
  {
    id: "hr_41", skill: "Herstel", type: "quiz", difficulty: "expert", order: 41,
    question: "Tronick beschrijft de rupture-repair cyclus als de motor van veilige hechting. Wat betekent dit concreet voor het dagelijks leven als vader?",
    context: "De rupture-repair cyclus (Tronick): afstemming — verstoring — herstel — nieuwe afstemming.",
    options: [
      { id: "a", text: "Je moet breuken voorkomen door altijd afgestemd te zijn op je kind", isCorrect: false, feedback: "Nee. Perfecte afstemming is onmogelijk EN onwenselijk. Tronick toont: het is juist de CYCLUS van breuk en herstel die het kind leert dat relaties betrouwbaar zijn." },
      { id: "b", text: "Elke breuk die je herstelt bouwt bij je kind het vertrouwen op dat relaties conflicten overleven", isCorrect: true, feedback: "Correct! De rupture-repair cyclus leert het kind: (1) verbinding kan verbreken, (2) dat is niet het einde, (3) mensen komen terug en repareren het. Dit wordt het basismodel voor alle toekomstige relaties." },
      { id: "c", text: "Hoe meer breuken hoe beter, want elk herstel versterkt de band", isCorrect: false, feedback: "Nee. Het gaat niet om kwantiteit van breuken maar om de kwaliteit van herstel. Veel breuken zonder herstel is schadelijk. Breuken MET herstel bouwen veerkracht op." },
    ],
    explanation: "Tronick ontdekte dat het niet de breuk is die schade doet, maar het UITBLIJVEN van herstel. Een herstelde breuk is krachtiger dan een breuk die nooit plaatsvond, omdat het kind leert: deze relatie is sterker dan dit conflict.",
    research: "Tronick, E. (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children",
  },
  {
    id: "hr_42", skill: "Herstel", type: "quiz", difficulty: "expert", order: 42,
    question: "Gottman beschrijft drie reacties op een emotioneel bod van je kind: je kunt je omkeren (turn toward), wegdraaien (turn away), of je keren tegen (turn against). Jelle (7) komt enthousiast naar je toe met een tekening. Je zit op je telefoon. Je zegt: 'Niet nu.' Wat is dit?",
    options: [
      { id: "a", text: "Turn away: je draait weg van zijn emotionele bod", isCorrect: true, feedback: "Correct! 'Niet nu' is turn away: je negeert of stelt zijn bid uit. Het is niet vijandig (turn against) maar het kind registreert: mijn enthousiasme doet er niet toe. Herhaald turn-away erodeert de verbinding." },
      { id: "b", text: "Turn against: je keert je actief tegen zijn bod", isCorrect: false, feedback: "Nee. Turn against zou zijn: 'Hou op me lastig te vallen met die tekeningen!' Dat is actief afwijzend. 'Niet nu' is passief afwijzend — turn away." },
      { id: "c", text: "Neutraal: je kunt niet altijd beschikbaar zijn en dat is normaal", isCorrect: false, feedback: "Het klopt dat je niet altijd beschikbaar kunt zijn. Maar het PATROON telt. Incidenteel is het menselijk. Structureel is het turn away als patroon en erodeert de verbinding." },
    ],
    explanation: "Gottmans bid-concept: kinderen doen voortdurend emotionele biedingen (een tekening laten zien, iets vertellen, knuffelen). Elke keer dat je je omdraait (turn toward) maak je een storting op de emotionele bankrekening. Elke keer dat je wegdraait (turn away) doe je een opname.",
    research: "Gottman, J. (2011). The Science of Trust: Emotional Attunement for Couples",
  },
  {
    id: "hr_43", skill: "Herstel", type: "quiz", difficulty: "expert", order: 43,
    question: "Je herstelt ALTIJD direct na een breuk — binnen vijf minuten zeg je sorry. Toch voelt je kind zich niet veiliger. Wat kan er aan de hand zijn?",
    options: [
      { id: "a", text: "Je kind is gewoon moeilijk en waardeert je inspanning niet", isCorrect: false, feedback: "Nee. Als het kind zich niet veiliger voelt ondanks je excuses, is het probleem niet het kind maar de KWALITEIT of TIMING van je herstel." },
      { id: "b", text: "Te snel herstellen kan een manier zijn om je eigen ongemak te verminderen in plaats van het kind te helpen", isCorrect: true, feedback: "Correct! Als je altijd binnen vijf minuten sorry zegt, herstel je mogelijk JOUW schuldgevoel, niet ZIJN pijn. Het kind merkt: papa zegt sorry om er zelf vanaf te zijn, niet om mij te helpen. Echt herstel vraagt timing: eerst het kind laten voelen, dan herstellen." },
      { id: "c", text: "Je moet vaker herstellen, misschien twee of drie keer per breuk", isCorrect: false, feedback: "Nee. Meer herhaling van hetzelfde ineffectieve patroon helpt niet. Het probleem zit in de kwaliteit, niet de kwantiteit." },
    ],
    explanation: "Te snel herstellen is een veelvoorkomende valkuil. Het kind heeft tijd nodig om zijn emotie te voelen. Als jij direct sorry zegt, communiceer je onbedoeld: stop met voelen, het is al goed. Geef het kind de ruimte om de pijn te ervaren voordat je herstelt.",
    research: "Tronick, E. (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children",
  },
  {
    id: "hr_44", skill: "Herstel", type: "quiz", difficulty: "expert", order: 44,
    question: "Winnicott stelde dat de 'good enough' vader niet perfect hoeft te zijn. Hoe vertaalt dit zich naar het concept van herstel?",
    context: "Winnicott: perfecte afstemming is niet alleen onmogelijk maar ook onwenselijk.",
    options: [
      { id: "a", text: "Je hoeft niet te herstellen want good enough betekent dat kleine fouten er niet toe doen", isCorrect: false, feedback: "Nee. Good enough betekent niet dat fouten er niet toe doen, maar dat HERSTEL belangrijker is dan PERFECTIE. Je hoeft niet foutloos te zijn als je wel herstelt." },
      { id: "b", text: "De imperfectie van de ouder PLUS het herstel leert het kind dat de wereld niet perfect is en dat dat oké is", isCorrect: true, feedback: "Correct! Winnicott: het kind heeft een IMPERFECTE ouder nodig die HERSTELT. Alleen zo leert het: de wereld is niet perfect, mensen maken fouten, EN relaties zijn sterk genoeg om dat te overleven." },
      { id: "c", text: "Good enough betekent dat je niet meer dan de helft van de tijd goed hoeft te zijn", isCorrect: false, feedback: "Het gaat niet om percentages maar om het PATROON: breuk + herstel = groei. Good enough is geen ondergrens maar een uitnodiging om los te laten van perfectionisme." },
    ],
    explanation: "Winnicotts inzicht: een perfect afgestemde ouder ontneemt het kind de kans om te leren omgaan met frustratie en imperfectie. De good enough ouder laat het kind ervaren: mensen falen, en dan herstellen ze. Dat is het krachtigste relatiemodel.",
    research: "Winnicott, D.W. (1971). Playing and Reality. Tavistock Publications",
  },
  {
    id: "hr_45", skill: "Herstel", type: "quiz", difficulty: "expert", order: 45,
    question: "Noor (13) weigert al twee weken met je te praten na een groot conflict over haar schoolresultaten. Je hebt meerdere keren sorry gezegd, briefjes geschreven, en haar lievelingseten gemaakt. Niets werkt. Wat is de volgende stap?",
    options: [
      { id: "a", text: "Stoppen met proberen, je hebt genoeg gedaan en de bal ligt nu bij haar", isCorrect: false, feedback: "Nee. Stoppen communiceert: ik geef je op als het moeilijk wordt. Blijf de deur openhouden, maar verander je aanpak." },
      { id: "b", text: "Een derde inschakelen: je partner, een ander gezinslid, of een professional", isCorrect: true, feedback: "Correct! Als directe herstelkanalen geblokkeerd zijn, kan een derde een brug slaan. Je partner kan checken hoe het gaat, een vertrouwde oom of tante kan bemiddelen, of een gezinstherapeut kan helpen het gesprek te openen." },
      { id: "c", text: "Een ultimatum stellen: we moeten dit oplossen, zo kan het niet verder", isCorrect: false, feedback: "Nee. Een ultimatum is druk, geen herstel. Het communiceert: MIJN ongemak met de situatie is belangrijker dan jouw verwerkingsproces." },
    ],
    explanation: "Soms is de breuk te groot voor directe herstelkanalen. Dan is het inschakelen van een derde geen zwakte maar wijsheid. Een neutrale derde kan ruimte creëren die jij op dit moment niet kunt bieden.",
    research: "Hughes, D. (2009). Attachment-Focused Parenting. Norton",
  },
  {
    id: "hr_46", skill: "Herstel", type: "quiz", difficulty: "expert", order: 46,
    question: "Je hebt je dochter Lotte (10) openlijk bekritiseerd waar haar vriendinnetjes bij waren. Ze is vernederd. Het is nu twee dagen later. Je wilt herstellen. Op welke plek herstel je?",
    options: [
      { id: "a", text: "In dezelfde setting: waar haar vriendinnetjes bij zijn, zodat zij zien dat je sorry zegt", isCorrect: false, feedback: "Nee. Publiek sorry zeggen kan opnieuw vernederen — nu staat ze voor de tweede keer in de spotlight. Publieke breuken verdienen een ander soort herstel." },
      { id: "b", text: "Prive, tussen jullie tweeen, in een veilige setting zonder publiek", isCorrect: true, feedback: "Correct! Herstel van een publieke vernedering hoort in een veilige, privesetting. Daarnaast: erken expliciet het publieke karakter: ik had dat nooit mogen zeggen waar je vriendinnen bij waren. Dat maakte het extra pijnlijk." },
      { id: "c", text: "Via een berichtje of briefje, dat is minder confronterend voor haar", isCorrect: false, feedback: "Een briefje kan een startpunt zijn, maar bij een publieke vernedering is face-to-face herstel krachtiger. Ze moet je oprechtheid ZIEN en VOELEN." },
    ],
    explanation: "De regel bij publieke breuken: erken het publieke karakter apart. Ik zei iets lelijks EN ik deed het waar je vriendinnen bij waren. Het tweede maakt het extra pijnlijk en verdient apart erkenning.",
    research: "Siegel, D. & Bryson, T. (2020). The Power of Showing Up",
  },
  {
    id: "hr_47", skill: "Herstel", type: "quiz", difficulty: "expert", order: 47,
    question: "Na een hersteld conflict met je zoon Pepijn (9) merk je dat jullie band juist dieper voelt dan ervoor. Hij zegt later: 'Papa, ik vind het fijn dat je sorry zei.' Wat is er gebeurd?",
    options: [
      { id: "a", text: "Toeval, de band voelt nu goed maar dat heeft niets met het conflict te maken", isCorrect: false, feedback: "Nee. Dit is geen toeval maar precies wat Tronick beschrijft: een herstelde breuk creëert een sterkere verbinding dan er was voor de breuk." },
      { id: "b", text: "De herstelde breuk heeft de relatie verdiept doordat hij ervoer: deze band is sterker dan dit conflict", isCorrect: true, feedback: "Correct! Tronick noemt dit moving through rupture to repair: na een herstelde breuk ervaart het kind een diepere veiligheid. Het leert: papa maakt fouten EN papa herstelt ze. Die combinatie creëert vertrouwen dat dieper gaat dan foutloos ouderschap." },
      { id: "c", text: "Hij is opgelucht dat het voorbij is, het voelt nu goed maar het effect is tijdelijk", isCorrect: false, feedback: "Nee. Het effect is niet tijdelijk maar cumulatief. Elke herstelde breuk bouwt aan zijn intern werkmodel: relaties zijn veilig, ook als het moeilijk wordt." },
    ],
    explanation: "Paradoxaal genoeg kan een herstelde breuk de relatie STERKER maken dan ervoor. Het kind leert iets dat het niet kan leren van een foutloze ouder: conflicten zijn tijdelijk, liefde is blijvend, en kwetsbaarheid is veilig.",
    research: "Tronick, E. (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children",
  },
  {
    id: "hr_48", skill: "Herstel", type: "quiz", difficulty: "expert", order: 48,
    question: "Siegel beschrijft het concept van mindsight: het vermogen om je eigen innerlijke toestand te observeren. Hoe helpt dit bij herstel?",
    context: "Mindsight = het vermogen om je eigen gedachten, gevoelens en patronen te observeren zonder erdoor meegesleurd te worden.",
    options: [
      { id: "a", text: "Mindsight helpt je de emoties van je kind beter te lezen en sneller te reageren", isCorrect: false, feedback: "Dat is empathie, niet mindsight. Mindsight is naar BINNEN gericht: je eigen triggers, patronen en reacties observeren." },
      { id: "b", text: "Mindsight helpt je herkennen WANNEER je een breuk maakt en WAAROM, zodat je eerder kunt herstellen en patronen kunt doorbreken", isCorrect: true, feedback: "Correct! Als je kunt observeren: ik merk dat ik geïrriteerd word omdat dit me aan mijn eigen vader herinnert — dan kun je KIEZEN hoe je reageert in plaats van automatisch te reageren. Dit voorkomt breuken en verbetert herstel." },
      { id: "c", text: "Mindsight is alleen relevant voor therapeuten, niet voor dagelijks ouderschap", isCorrect: false, feedback: "Nee. Siegel betoogt dat mindsight de kern is van reflectief ouderschap. Het is het verschil tussen reageren en KIEZEN hoe je reageert." },
    ],
    explanation: "Mindsight is het vermogen om te pauzeren tussen trigger en reactie. In die pauze zit de keuze: reageer ik automatisch (schreeuwen, afsnauwen) of kies ik bewust (kalmeren, herstellen)? Hoe sterker je mindsight, hoe minder breuken en hoe sneller je herstelt.",
    research: "Siegel, D. (2010). Mindsight: The New Science of Personal Transformation",
  },
  {
    id: "hr_49", skill: "Herstel", type: "quiz", difficulty: "expert", order: 49,
    question: "Je realiseert je dat je dezelfde fout maakt als je eigen vader: je wordt koel en afstandelijk als je boos bent. Je wilt het anders doen maar valt steeds terug. Wat zegt onderzoek over intergenerationele patronen en herstel?",
    options: [
      { id: "a", text: "Als je vader het deed, zit het in je genen en kun je er weinig aan veranderen", isCorrect: false, feedback: "Nee. Opvoedpatronen zijn grotendeels AANGELEERD, niet genetisch. Wat aangeleerd is, kan ook AFGELEERD worden — maar het vraagt bewuste inspanning." },
      { id: "b", text: "Door je eigen opvoedgeschiedenis te reflecteren en te verwerken, doorbreek je het patroon voor je kinderen", isCorrect: true, feedback: "Correct! Siegel toont: ouders die hun eigen hechtingsgeschiedenis hebben verwerkt en begrepen (niet per se gehad) zijn de beste voorspellers van veilige hechting bij hun kinderen. Reflectie doorbreekt de cyclus." },
      { id: "c", text: "Je moet gewoon het tegenovergestelde doen van je vader en dan komt het goed", isCorrect: false, feedback: "Nee. Het tegenovergestelde is ook een reactie op het patroon, niet een vrije keuze. Overcompensatie (nooit boos zijn omdat je vader altijd boos was) creëert een ander probleem." },
    ],
    explanation: "Het krachtigste inzicht uit hechtingsonderzoek: niet je opvoedgeschiedenis bepaalt hoe je opvoedt, maar hoe je die geschiedenis VERWERKT hebt. Vaders die reflecteren op hun eigen jeugd — ook als die moeilijk was — doorbreken het patroon voor hun kinderen.",
    research: "Siegel, D. & Hartzell, M. (2003). Parenting from the Inside Out",
  },
  {
    id: "hr_50", skill: "Herstel", type: "quiz", difficulty: "expert", order: 50,
    question: "Een vader in een vadergroep zegt: 'Ik vind herstel zwak. Een echte man hoeft geen sorry te zeggen. Mijn vader deed het ook nooit.' Wat zegt onderzoek over deze overtuiging?",
    options: [
      { id: "a", text: "Hij heeft een punt, te veel sorry zeggen ondermijnt je autoriteit als vader", isCorrect: false, feedback: "Nee. Autoriteit gebaseerd op onkwetsbaarheid is fragiel. Kinderen van ouders die nooit herstellen, ontwikkelen onveilige hechting en leren: fouten maak je niet — of als je ze maakt, doe je er niets mee." },
      { id: "b", text: "Deze overtuiging is zelf een onherstelde breuk uit zijn eigen jeugd die hij doorgeeft aan zijn kinderen", isCorrect: true, feedback: "Correct! Zijn vader herstelde nooit, en hij draagt dat model nu door. Het patroon doorbreken begint met herkennen: mijn vader deed het niet, en dat deed mij pijn. Ik kies het anders te doen." },
      { id: "c", text: "Herstel past niet bij elke opvoedstijl, het is een keuze", isCorrect: false, feedback: "Nee. Herstel is geen stijlkeuze maar een basisbehoefte van de relatie. Alle kinderen, in alle culturen, hebben behoefte aan herstel na breuken." },
    ],
    explanation: "De overtuiging dat sorry zwak is, is zelf een product van onherstelde breuken. Deze vader leerde als kind: fouten erkennen mag niet. Door die overtuiging te herkennen als een patroon — niet als waarheid — kan hij de cyclus doorbreken voor zijn eigen kinderen.",
    research: "Gottman, J. (2011). Raising An Emotionally Intelligent Child; Siegel, D. & Hartzell, M. (2003). Parenting from the Inside Out",
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

  {
    id: "vb_31",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "basis",
    order: 31,
    question:
      "Je dochter Sanne (7) vraagt elke avond of je haar een verhaaltje wilt voorlezen. Je bent vaak moe na het werk. Wat is het beste om te doen?",
    options: [
      {
        id: "a",
        text: "Sla het af en toe over als je moe bent — ze begrijpt dat wel.",
        isCorrect: false,
        feedback:
          "Voorleesrituelen zijn krachtige verbindingsmomenten. Door het regelmatig over te slaan geef je onbewust het signaal dat jullie tijd samen niet prioriteit heeft. Kinderen interpreteren dit persoonlijk, niet rationeel.",
      },
      {
        id: "b",
        text: "Houd het ritueel in stand, ook al lees je soms maar één pagina — de voorspelbaarheid telt.",
        isCorrect: true,
        feedback:
          "Precies goed. Rituelen hoeven niet lang te zijn, maar wel betrouwbaar. De voorspelbaarheid van het ritueel geeft Sanne een gevoel van veiligheid en verbondenheid. Zelfs een kort momentje samen is waardevoller dan helemaal niets.",
      },
      {
        id: "c",
        text: "Vervang het voorlezen door een luisterboek zodat ze zelfstandiger wordt.",
        isCorrect: false,
        feedback:
          "Een luisterboek mist het cruciale element van samen-zijn. Het gaat Sanne niet alleen om het verhaal, maar om de fysieke nabijheid, jouw stem en de onverdeelde aandacht. Het ritueel ís de verbinding.",
      },
    ],
    explanation:
      "Rituelen vormen de ruggengraat van emotionele verbinding in gezinnen. Onderzoek laat zien dat voorspelbare, herhaalde gezinsrituelen bijdragen aan een veilige gehechtheid en emotionele stabiliteit bij kinderen. Het is de regelmaat die telt, niet de duur.",
    research:
      "Fiese, B. H. (2006). Family Routines and Rituals. Yale University Press.",
  },
  {
    id: "vb_32",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 32,
    question:
      "Je zoon Daan (10) heeft ADHD en kan moeilijk stilzitten. Je wilt meer quality time met hem, maar rustige activiteiten lukken niet. Wat werkt het beste?",
    options: [
      {
        id: "a",
        text: "Kies activiteiten met beweging en korte afwisseling, zoals samen fietsen of een balsport.",
        isCorrect: true,
        feedback:
          "Goed inzicht. Kinderen met ADHD verbinden juist sterk tijdens fysieke, actieve bezigheden. Beweging helpt bij de dopamineregulatie en maakt het makkelijker om tegelijk te praten en samen te zijn. Je past je aan bij zijn behoeften zonder de verbinding op te geven.",
      },
      {
        id: "b",
        text: "Oefen met hem om langer stil te zitten, want hij moet dat toch leren.",
        isCorrect: false,
        feedback:
          "Hoewel zelfregulatie belangrijk is, is quality time niet het juiste moment om vaardigheden te trainen. Als je verbindingsmomenten gebruikt als oefenmomenten, voelt Daan druk in plaats van plezier. Verbinding ontstaat juist als je aansluit bij wie hij is.",
      },
      {
        id: "c",
        text: "Plan quality time pas als zijn medicatie goed werkt, zodat het voor jullie beiden ontspannen is.",
        isCorrect: false,
        feedback:
          "Wachten op het 'perfecte moment' kan ertoe leiden dat verbinding steeds wordt uitgesteld. Daan heeft juist nú jouw aanwezigheid nodig. Door activiteiten te kiezen die bij zijn energie passen, hoef je niet te wachten op medicatie-effecten.",
      },
    ],
    explanation:
      "Bij kinderen met ADHD is het essentieel om verbindingsactiviteiten af te stemmen op hun neurologische profiel. Bewegingsrijke activiteiten verlagen de drempel voor positieve interactie en verminderen gedragsproblemen tijdens samen-zijn.",
    research:
      "Chronis-Tuscano, A., et al. (2008). Parent-child interaction therapy with ADHD. Cognitive and Behavioral Practice, 15(3), 302-312.",
  },
  {
    id: "vb_33",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 33,
    question:
      "Je dochter Eva (14) trekt zich terug als je haar een knuffel wilt geven. Vroeger was ze heel aanhankelijk. Hoe ga je hier het beste mee om?",
    options: [
      {
        id: "a",
        text: "Stop helemaal met fysiek contact — ze is een tiener en heeft ruimte nodig.",
        isCorrect: false,
        feedback:
          "Hoewel tieners meer autonomie willen, betekent dit niet dat ze geen fysieke affectie meer nodig hebben. Volledig stoppen kan overkomen als afwijzing. Het gaat om het vinden van vormen die bij haar levensfase passen.",
      },
      {
        id: "b",
        text: "Blijf haar gewoon knuffelen — ze went er wel weer aan.",
        isCorrect: false,
        feedback:
          "Fysiek contact forceren bij een tiener die grenzen aangeeft, ondermijnt haar autonomie en kan de relatie beschadigen. Respecteer haar grenzen, anders leert ze dat haar 'nee' niet telt — ook niet bij anderen.",
      },
      {
        id: "c",
        text: "Respecteer haar grens, maar bied alternatieve vormen van affectie aan, zoals een high-five, schouderklop of samen op de bank zitten.",
        isCorrect: true,
        feedback:
          "Dit is de juiste balans. Je respecteert Eva's groeiende autonomie terwijl je de deur openhoudt voor fysiek contact in vormen die voor haar comfortabel zijn. Tieners hebben nog steeds fysieke nabijheid nodig, maar willen er meer controle over hebben.",
      },
    ],
    explanation:
      "Tijdens de adolescentie verandert de behoefte aan fysieke affectie, maar verdwijnt deze niet. Vaders die flexibel omgaan met de veranderende behoeften van hun tienerdochters behouden een sterkere emotionele band dan vaders die ofwel forceren ofwel volledig stoppen.",
    research:
      "Nielsen, L. (2012). Father-Daughter Relationships: Contemporary Research and Issues. Routledge.",
  },
  {
    id: "vb_34",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 34,
    question:
      "Volgens de gehechtheidstheorie van Bowlby ontwikkelen kinderen 'internal working models'. Je zoon Jasper (5) zegt: 'Papa, jij gaat toch ook weer weg?' na jouw zakenreis van twee weken. Wat zegt dit over zijn internal working model?",
    options: [
      {
        id: "a",
        text: "Jasper test je uit en probeert aandacht te krijgen — dit is manipulatief gedrag.",
        isCorrect: false,
        feedback:
          "Dit is een veelvoorkomende misvatting. Jonge kinderen manipuleren niet bewust. Jaspers uitspraak is een directe uiting van zijn internal working model: zijn mentale voorstelling van de beschikbaarheid van zijn hechtingsfiguur. Hij uit angst, geen manipulatie.",
      },
      {
        id: "b",
        text: "Jaspers verwachting dat je weer weggaat wijst op een onzeker internal working model over jouw beschikbaarheid — hij heeft herhaalde bevestiging nodig dat je terugkomt en blijft.",
        isCorrect: true,
        feedback:
          "Precies. Jaspers internal working model — zijn innerlijke representatie van de relatie met jou — bevat onzekerheid over jouw beschikbaarheid. Door herhaald betrouwbaar gedrag, voorspelbaarheid en emotionele beschikbaarheid kun je dit model geleidelijk bijstellen naar meer veiligheid.",
      },
      {
        id: "c",
        text: "Dit is normaal gedrag na een reis en je hoeft er niets mee te doen — het gaat vanzelf over.",
        isCorrect: false,
        feedback:
          "Hoewel enige onzekerheid na afwezigheid normaal is, verdient Jaspers uitspraak actieve aandacht. Internal working models worden gevormd door herhaalde ervaringen. Als je zijn onzekerheid niet adresseert, kan het patroon zich versterken en zijn verwachting bevestigen.",
      },
    ],
    explanation:
      "Internal working models (Bowlby, 1969) zijn mentale representaties die kinderen opbouwen over de betrouwbaarheid van hun hechtingsfiguren. Deze modellen sturen verwachtingen over relaties en zijn relatief stabiel, maar kunnen bijgesteld worden door consistente, sensitieve zorg.",
    research:
      "Bowlby, J. (1969). Attachment and Loss: Vol. 1. Attachment. Basic Books.",
  },
  {
    id: "vb_35",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 35,
    question:
      "Je hebt drie kinderen: Lotte (11), Tim (8) en baby Fem (1). Lotte klaagt dat je 'nooit meer tijd voor haar hebt'. Hoe versterk je de verbinding met Lotte zonder de anderen tekort te doen?",
    options: [
      {
        id: "a",
        text: "Leg Lotte uit dat een baby nu eenmaal meer aandacht nodig heeft en dat zij als oudste geduld moet hebben.",
        isCorrect: false,
        feedback:
          "Hoewel dit feitelijk klopt, invalideert het Lottes gevoelens. Ze voelt zich al tekortgedaan — uitleggen dat het 'logisch' is, versterkt haar gevoel van onbelangrijkheid. Oudste kinderen hebben juist bevestiging nodig dat ze nog steeds speciaal zijn.",
      },
      {
        id: "b",
        text: "Plan vaste één-op-één momenten met Lotte in, hoe kort ook, en laat haar kiezen wat jullie samen doen.",
        isCorrect: true,
        feedback:
          "Uitstekend. Individuele aandacht is essentieel bij meerdere kinderen. Door Lotte te laten kiezen, geef je haar autonomie en het signaal dat zij als persoon gezien wordt. Zelfs 15 minuten exclusieve aandacht per week kan een groot verschil maken voor haar gevoel van verbondenheid.",
      },
      {
        id: "c",
        text: "Betrek Lotte meer bij de zorg voor de baby, zodat ze zich nuttig voelt en jullie samen bezig zijn.",
        isCorrect: false,
        feedback:
          "Dit kan af en toe leuk zijn, maar het is geen vervanging voor echte één-op-één tijd. Lotte wil gezien worden als Lotte, niet alleen als 'grote zus'. Als haar individuele tijd altijd in het teken staat van de baby, bevestig je juist het patroon waar ze over klaagt.",
      },
    ],
    explanation:
      "In gezinnen met meerdere kinderen is individuele aandacht een van de sterkste voorspellers van de kwaliteit van de ouder-kindrelatie. Kinderen die regelmatig exclusieve tijd met een ouder hebben, rapporteren meer emotionele veiligheid en minder rivaliteitsgevoelens.",
    research:
      "Faber, A. & Mazlish, E. (2012). Siblings Without Rivalry. W.W. Norton & Company.",
  },
  {
    id: "vb_36",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 36,
    question:
      "Gottman beschrijft het concept van 'bids for connection'. Je zoon Mees (9) zegt terloops: 'Papa, kijk, een helikopter!' terwijl jij de krant leest. Wat is het meest verbindende antwoord?",
    options: [
      {
        id: "a",
        text: "'Hmm, cool' zeggen zonder op te kijken — je laat merken dat je hem hoort.",
        isCorrect: false,
        feedback:
          "Dit is wat Gottman een 'turning away' noemt, vermomd als 'turning toward'. Je reageert verbaal, maar zonder echte aandacht. Mees merkt dat verschil feilloos. Herhaalde oppervlakkige reacties op bids eroderen de emotionele bankrekening geleidelijk.",
      },
      {
        id: "b",
        text: "De krant wegleggen, naar de helikopter kijken en er even op ingaan: 'Wow, die vliegt laag! Waar zou die naartoe gaan?'",
        isCorrect: true,
        feedback:
          "Dit is een volledige 'turn toward'. Je legt je activiteit neer, deelt zijn ervaring en bouwt erop voort. Gottmans onderzoek toont dat koppels en gezinnen die consistent 'turn toward' bids reageren, significant sterkere relaties opbouwen. Het gaat om de cumulatie van kleine momenten.",
      },
      {
        id: "c",
        text: "'Straks even kijken, ik lees net iets belangrijks' — je geeft aan dat je hem zo aandacht geeft.",
        isCorrect: false,
        feedback:
          "Dit is een 'turning away' met een belofte. Het probleem is dat het 'straks' er zelden van komt, en de helikopter is dan allang weg. Bids zijn tijdgevoelig — het moment van verbinding is nú. Een gemiste bid is een gemiste kans voor de emotionele bankrekening.",
      },
    ],
    explanation:
      "Gottman ontdekte dat de manier waarop partners en ouders reageren op kleine 'bids for connection' — pogingen tot contact — bepalend is voor de relatiekwaliteit. Consistent 'turning toward' (met aandacht reageren) bouwt vertrouwen op; 'turning away' (negeren) breekt het af.",
    research:
      "Gottman, J. M. & DeClaire, J. (2001). The Relationship Cure. Harmony Books.",
  },
  {
    id: "vb_37",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 37,
    question:
      "Je introvert zoon Bram (12) praat weinig over zijn dag en trekt zich na school het liefst terug op zijn kamer. Je maakt je zorgen over jullie verbinding. Wat is de beste aanpak?",
    options: [
      {
        id: "a",
        text: "Respecteer zijn behoefte aan alleen-tijd en creëer laagdrempelige momenten van nabijheid, zoals samen in stilte een puzzel maken of naast elkaar zitten.",
        isCorrect: true,
        feedback:
          "Precies goed. Introverte kinderen ervaren verbinding anders — zij voelen zich juist verbonden door gedeelde stilte en parallel bezig zijn. Door naast hem aanwezig te zijn zonder gespreksdruk, bied je verbinding op zijn voorwaarden. De connectie zit in de nabijheid, niet in de woorden.",
      },
      {
        id: "b",
        text: "Stel elke dag gerichte vragen over school, vrienden en gevoelens om het gesprek op gang te brengen.",
        isCorrect: false,
        feedback:
          "Voor introverte kinderen voelen directe vragen vaak als een verhoor. Hoe meer je vraagt, hoe meer Bram dichtgaat. Introverten delen eerder spontaan als er geen druk is. Verbinding afdwingen via gesprek werkt averechts bij dit temperament.",
      },
      {
        id: "c",
        text: "Stimuleer hem om vaker met vriendjes af te spreken zodat hij socialer wordt — daarna praat hij misschien ook meer thuis.",
        isCorrect: false,
        feedback:
          "Introversie is geen probleem dat opgelost moet worden. Door Bram te pushen socialer te zijn, geef je het signaal dat wie hij is niet goed genoeg is. Acceptatie van zijn temperament is de basis voor verbinding. Bovendien gaat het hier om jullie relatie, niet om zijn sociale leven.",
      },
    ],
    explanation:
      "Introverte kinderen hebben een ander optimum van sociale stimulatie. Zij ervaren verbinding vooral door gedeelde activiteiten met weinig gespreksdruk. Vaders die zich aanpassen aan het temperament van hun kind bouwen sterkere relaties op dan vaders die het kind proberen te veranderen.",
    research:
      "Cain, S. (2012). Quiet: The Power of Introverts in a World That Can't Stop Talking. Crown Publishing.",
  },
  {
    id: "vb_38",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 38,
    question:
      "Peter Fonagy beschrijft 'mentaliseren' als het vermogen om gedrag te begrijpen in termen van onderliggende gevoelens en intenties. Je dochter Noor (6) schopt boos tegen de tafel na het avondeten. Welke reactie getuigt van het beste mentaliseren?",
    options: [
      {
        id: "a",
        text: "'Niet schoppen tegen de tafel, Noor. Dat mag niet.' — je stelt een duidelijke grens.",
        isCorrect: false,
        feedback:
          "Een grens stellen is belangrijk, maar deze reactie blijft aan de oppervlakte van het gedrag zonder te mentaliseren over wat eronder zit. Fonagy benadrukt dat gedragscorrectie zonder mentaliseren de verbinding mist — het kind voelt zich niet begrepen.",
      },
      {
        id: "b",
        text: "'Ik zie dat je ergens boos of gefrustreerd over bent. Wil je me laten zien wat er aan de hand is?' — je probeert het gevoel achter het gedrag te begrijpen.",
        isCorrect: true,
        feedback:
          "Dit is mentaliseren in actie. Je kijkt voorbij het gedrag (schoppen) naar de mogelijke innerlijke ervaring (boosheid, frustratie). Door dit hardop te doen, help je Noor ook haar eigen innerlijke wereld te leren begrijpen. Dit versterkt zowel de verbinding als haar zelfinzicht.",
      },
      {
        id: "c",
        text: "'Als je boos bent, mag je op een kussen slaan, niet tegen de tafel.' — je biedt een alternatief.",
        isCorrect: false,
        feedback:
          "Een alternatief bieden is een goede gedragsstrategie, maar het is nog geen mentaliseren. Je gaat ervan uit dat Noor boos is zonder dit te checken, en je richt je op het kanaliseren van gedrag in plaats van het begrijpen van haar innerlijke ervaring. Mentaliseren vraagt eerst om nieuwsgierigheid.",
      },
    ],
    explanation:
      "Mentaliseren (Fonagy et al., 2002) is het vermogen om je eigen gedrag en dat van anderen te interpreteren in termen van mentale toestanden: gevoelens, gedachten, wensen en intenties. Ouders die goed mentaliseren bevorderen veilige gehechtheid doordat het kind zich gezien en begrepen voelt.",
    research:
      "Fonagy, P., Gergely, G., Jurist, E., & Target, M. (2002). Affect Regulation, Mentalization, and the Development of the Self. Other Press.",
  },
  {
    id: "vb_39",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "basis",
    order: 39,
    question:
      "Je zoon Luuk (4) wil altijd dat mama hem naar bed brengt en duwt jou weg als je het probeert. Wat is de beste manier om toch verbinding met Luuk op te bouwen rond bedtijd?",
    options: [
      {
        id: "a",
        text: "Geef het op en laat mama het doen — forceer het niet.",
        isCorrect: false,
        feedback:
          "Hoewel forceren inderdaad niet werkt, is helemaal opgeven ook niet de oplossing. Als je je terugtrekt, bevestig je Luuks beeld dat papa niet bij bedtijd hoort. Geleidelijke betrokkenheid, zonder dwang, is effectiever voor de langere termijn.",
      },
      {
        id: "b",
        text: "Begin met een klein onderdeel van het bedtijdritueel (bijv. tandenpoetsen of verhaaltje kiezen) en bouw langzaam op.",
        isCorrect: true,
        feedback:
          "Slim aangepakt. Door klein te beginnen verlaag je de weerstand en creëer je positieve associaties. Als Luuk gewend raakt aan jouw rol in één onderdeel, kun je geleidelijk uitbreiden. Dit respecteert zijn voorkeur terwijl je toch investeert in de verbinding.",
      },
      {
        id: "c",
        text: "Maak er een strikt schema van: de ene avond mama, de andere avond papa — consequent zijn is belangrijk.",
        isCorrect: false,
        feedback:
          "Een rigide schema negeert Luuks emotionele behoeften en kan leiden tot nachtelijk protest en stress. Kinderen van vier hebben nog niet het cognitieve vermogen om een abstract schema te accepteren als hun gehechtheidssysteem geactiveerd is. Geleidelijkheid werkt beter dan structuur.",
      },
    ],
    explanation:
      "Jonge kinderen hebben vaak een voorkeur voor één ouder bij specifieke verzorgingsmomenten. Dit is normaal en geen afwijzing. Vaders die geleidelijk en geduldig hun betrokkenheid opbouwen, zonder te forceren, ontwikkelen uiteindelijk een even sterke band.",
    research:
      "Lamb, M. E. (2010). The Role of the Father in Child Development (5th ed.). Wiley.",
  },
  {
    id: "vb_40",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 40,
    question:
      "Het concept 'verdiende gehechtheid' (earned security) beschrijft volwassenen die ondanks een onveilige jeugd toch een veilige gehechtheidsstijl hebben ontwikkeld. Jij had zelf een afstandelijke vader. Wat is het belangrijkste om de cyclus te doorbreken?",
    options: [
      {
        id: "a",
        text: "Doe gewoon het tegenovergestelde van je eigen vader — als hij afstandelijk was, wees jij dan extra warm.",
        isCorrect: false,
        feedback:
          "Overcompensatie zonder reflectie kan leiden tot een andere vorm van onveiligheid, zoals verstrikkende nabijheid. Het tegenovergestelde van 'fout' is niet automatisch 'goed'. Zonder begrip van je eigen patronen kun je onbewust toch problematische dynamieken herhalen.",
      },
      {
        id: "b",
        text: "Ontwikkel een coherent narratief over je eigen jeugd door reflectie of therapie — begrip van je eigen gehechtheidsgeschiedenis is de sleutel.",
        isCorrect: true,
        feedback:
          "Dit is precies wat onderzoek naar verdiende gehechtheid laat zien. Het gaat niet om wát je hebt meegemaakt, maar om hoe goed je het hebt verwerkt. Een coherent, geïntegreerd verhaal over je eigen jeugd — inclusief de pijnlijke delen — voorspelt veilige gehechtheid bij je eigen kinderen.",
      },
      {
        id: "c",
        text: "Focus op het heden en kijk niet teveel terug — je verleden hoeft je ouderschap niet te beïnvloeden.",
        isCorrect: false,
        feedback:
          "Helaas werkt het niet zo. Onderzoek toont consistent aan dat onverwerkte gehechtheidservaringen onbewust doorwerken in je ouderschap. Juist het vermijden van reflectie houdt de intergenerationele overdracht in stand. Bewustwording is de eerste stap naar verandering.",
      },
    ],
    explanation:
      "Onderzoek met het Adult Attachment Interview (Main & Goldwyn) toont aan dat niet de aard van jeugdervaringen, maar de coherentie waarmee volwassenen erover vertellen, de beste voorspeller is van gehechtheidsveiligheid bij hun kinderen. Verdiende gehechtheid is mogelijk door reflectie en integratie.",
    research:
      "Main, M., & Goldwyn, R. (1998). Adult Attachment Scoring and Classification Systems. Unpublished manuscript, UC Berkeley. Zie ook: Roisman, G. I., et al. (2002). Earned-secure attachment in retrospect. Child Development, 73(4), 1204-1219.",
  },
  {
    id: "vb_41",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 41,
    question:
      "Na je scheiding zie je je dochter Fleur (8) om het weekend. Bij het afscheid op zondag klampt ze zich aan je vast en huilt ze. Hoe ga je hier het beste mee om?",
    options: [
      {
        id: "a",
        text: "Maak het afscheid kort en zakelijk om het voor haar niet moeilijker te maken.",
        isCorrect: false,
        feedback:
          "Een afgekapt afscheid kan voor Fleur voelen als afwijzing op het moment dat ze jou het hardst nodig heeft. Ze heeft juist behoefte aan erkenning van haar verdriet en de zekerheid dat jij er emotioneel bij bent, ook als je fysiek weggaat.",
      },
      {
        id: "b",
        text: "Erken haar verdriet, geef haar de tijd, en creëer een voorspelbaar afscheidsritueel dat jullie samen bedenken.",
        isCorrect: true,
        feedback:
          "Uitstekend. Door haar verdriet te erkennen ('Ik snap dat je het moeilijk vindt, ik vind het ook jammer') en een ritueel te maken (bijv. een speciaal gebaar of een briefje voor volgende keer), geef je Fleur houvast. Het ritueel maakt de overgang voorspelbaar en draaglijk.",
      },
      {
        id: "c",
        text: "Bel haar moeder om te bespreken dat Fleur misschien vaker bij jou moet zijn, want dit wijst op een probleem.",
        isCorrect: false,
        feedback:
          "Afscheidsverdriet is normaal en wijst niet per se op een probleem met de regeling. Het hoort bij de verwerking van de scheiding. De oplossing ligt niet in logistiek, maar in hoe je met het emotionele moment omgaat. Fleur heeft jouw emotionele beschikbaarheid nodig bij het afscheid.",
      },
    ],
    explanation:
      "Kinderen in scheidingssituaties hebben baat bij voorspelbare routines en ouders die hun emoties erkennen zonder die te willen 'fixen'. Afscheidsrituelen bieden structuur en emotionele veiligheid in een situatie die inherent onzeker voelt.",
    research:
      "Emery, R. E. (2011). Renegotiating Family Relationships: Divorce, Child Custody, and Mediation (2nd ed.). Guilford Press.",
  },
  {
    id: "vb_42",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 42,
    question:
      "Colwyn Trevarthen beschrijft 'intersubjectiviteit' als het gedeelde bewustzijn tussen ouder en kind. Je speelt met je baby Sem (8 maanden) en hij brabbelt enthousiast terwijl hij naar je kijkt. Wat bevordert de intersubjectiviteit het meest?",
    options: [
      {
        id: "a",
        text: "Brabbel terug in hetzelfde ritme en dezelfde toonhoogte, en volg zijn blik en gebaren — creëer een 'gesprek' zonder woorden.",
        isCorrect: true,
        feedback:
          "Precies wat Trevarthen bedoelt met primaire intersubjectiviteit. Door Sems ritme, toon en timing te spiegelen, ontstaat een gedeeld affectief veld — een 'protoconversatie'. Dit is de oervorm van menselijke verbinding en legt de basis voor alle latere sociale en emotionele ontwikkeling.",
      },
      {
        id: "b",
        text: "Gebruik echte woorden en zinnen, want zo leert hij sneller taal.",
        isCorrect: false,
        feedback:
          "Taalstimulatie is waardevol, maar op dit moment gaat het niet om taal. Het gaat om afstemming — het delen van een emotionele ervaring. Door over te schakelen naar 'les geven' mis je het intersubjectieve moment. Sem zoekt gedeeld plezier, geen instructie.",
      },
      {
        id: "c",
        text: "Pak een speeltje erbij om de interactie interessanter te maken.",
        isCorrect: false,
        feedback:
          "Een speeltje introduceert een derde element dat de directe face-to-face interactie doorbreekt. Trevarthen benadrukt dat primaire intersubjectiviteit juist draait om de dyadische uitwisseling zonder objecten. Het speeltje is niet nodig — jij bent de 'speeltje' waar Sem op dit moment voor kiest.",
      },
    ],
    explanation:
      "Trevarthens theorie van primaire intersubjectiviteit beschrijft hoe baby's al vanaf de geboorte gericht zijn op emotionele afstemming met hun verzorgers. Deze vroege 'protoconversaties' — gekenmerkt door gedeeld ritme, affect en timing — vormen de basis voor gehechtheid en sociaal begrip.",
    research:
      "Trevarthen, C. (1979). Communication and cooperation in early infancy: A description of primary intersubjectivity. In M. Bullowa (Ed.), Before Speech. Cambridge University Press.",
  },
  {
    id: "vb_43",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 43,
    question:
      "Je zoon Thijs (13) is de laatste weken opstandig: hij reageert kortaf, slaat deuren dicht en zegt dat jouw regels 'belachelijk' zijn. Je voelt de verbinding afbrokkelen. Wat is de beste eerste stap?",
    options: [
      {
        id: "a",
        text: "Houd streng vast aan de regels — als je nu toegeeft, verlies je je autoriteit.",
        isCorrect: false,
        feedback:
          "Alleen focussen op regels zonder de relatie te onderhouden is als bouwen op drijfzand. Thijs' opstandigheid is deels normaal (autonomieontwikkeling) en deels een signaal. Als de verbinding ontbreekt, worden regels onwerkbaar. Verbinding is de voorwaarde voor effectieve begeleiding.",
      },
      {
        id: "b",
        text: "Zoek een rustig moment om naast hem te gaan zitten en oprecht te vragen wat hem dwars zit, zonder meteen te corrigeren of adviseren.",
        isCorrect: true,
        feedback:
          "Goed. De sleutel is: verbinding vóór correctie. Door in een kalm moment te luisteren zonder oordeel, laat je Thijs merken dat je hem als persoon ziet, niet alleen zijn gedrag. Dit maakt hem ontvankelijker voor jouw grenzen. Relatie is het kanaal waardoor opvoeding werkt.",
      },
      {
        id: "c",
        text: "Geef hem meer ruimte en vrijheid — zijn opstandigheid betekent dat je te streng bent.",
        isCorrect: false,
        feedback:
          "Grenzen loslaten uit angst de relatie te verliezen is een valkuil. Tieners hebben juist structuur nodig, maar dan wel binnen een warme relatie. Thijs' opstandigheid is niet per se een teken van te veel regels — het kan ook een roep om verbinding zijn.",
      },
    ],
    explanation:
      "De relatie tussen ouder en puber is de context waarbinnen opvoeding plaatsvindt. Onderzoek toont dat 'connection before correction' — eerst verbinden, dan begrenzen — effectiever is dan puur autoritair of puur permissief opvoeden, juist in de puberteit.",
    research:
      "Steinberg, L. (2001). We know some things: Parent-adolescent relationships in retrospect and prospect. Journal of Research on Adolescence, 11(1), 1-19.",
  },
  {
    id: "vb_44",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 44,
    question:
      "Je dochter Sophie (9) is prikkelgevoelig: drukke omgevingen, harde geluiden en onverwachte veranderingen maken haar overstuur. Jullie verbindingsmomenten verlopen daardoor vaak moeizaam. Wat kun je het beste doen?",
    options: [
      {
        id: "a",
        text: "Plan verbindingsmomenten in een rustige, voorspelbare omgeving en stem activiteiten af op haar sensorische behoeften.",
        isCorrect: true,
        feedback:
          "Uitstekend. Voor prikkelgevoelige kinderen is de omgeving een cruciale factor voor de kwaliteit van de interactie. Door bewust te kiezen voor rust (wandeling in de natuur, samen tekenen in een stille kamer) creëer je de voorwaarden waaronder Sophie zich kan openstellen voor verbinding.",
      },
      {
        id: "b",
        text: "Neem haar geleidelijk mee naar drukkere omgevingen om haar te helpen wennen — vermijden maakt het erger.",
        isCorrect: false,
        feedback:
          "Quality time is niet het juiste moment voor desensitisatie. Als Sophie in overlevingsstand staat door prikkeloverload, is er geen ruimte voor verbinding. Wennen aan prikkels is een apart proces dat begeleiding verdient, maar niet ten koste van jullie verbindingsmomenten.",
      },
      {
        id: "c",
        text: "Verbinding ontstaat vooral via praten — de omgeving maakt niet zoveel uit als jullie maar in gesprek zijn.",
        isCorrect: false,
        feedback:
          "Voor prikkelgevoelige kinderen maakt de omgeving juist álles uit. Als Sophies zenuwstelsel overprikkeld is, kan ze niet nadenken, laat staan verbinden. Het brein geeft dan prioriteit aan zelfbescherming, niet aan relatie. De juiste omgeving is een voorwaarde, geen detail.",
      },
    ],
    explanation:
      "Prikkelgevoelige kinderen (ook wel 'hoogsensitief' genoemd) hebben een lager prikkeldrempelniveau. In een afgestemde omgeving floreren zij juist extra, wat Belsky de 'differential susceptibility' noemt: ze zijn gevoeliger voor zowel negatieve als positieve omgevingsinvloeden.",
    research:
      "Aron, E. N., Aron, A., & Jagiellowicz, J. (2012). Sensory processing sensitivity: A review in the light of the evolution of biological responsivity. Personality and Social Psychology Review, 16(3), 262-282.",
  },
  {
    id: "vb_45",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 45,
    question:
      "Gottman spreekt over de 'emotionele bankrekening' in relaties. Je hebt een drukke werkperiode gehad van drie maanden waarin je weinig thuis was. Je zoon Stijn (11) lijkt afstandelijk. Wat is de meest effectieve manier om de emotionele bankrekening weer aan te vullen?",
    options: [
      {
        id: "a",
        text: "Plan een groot, speciaal uitje (pretpark, voetbalwedstrijd) om de verloren tijd goed te maken.",
        isCorrect: false,
        feedback:
          "Een groot uitje is leuk, maar het is als een enkele grote storting op een langdurig negatief saldo. Gottman benadrukt dat de bankrekening gevuld wordt door frequente kleine positieve interacties, niet door incidentele grote gebaren. Eén pretparkbezoek weegt niet op tegen maanden van afwezigheid.",
      },
      {
        id: "b",
        text: "Focus op veel kleine, dagelijkse momenten van aandacht: samen ontbijten, even vragen hoe zijn dag was, een grapje maken, naast hem zitten.",
        isCorrect: true,
        feedback:
          "Precies. De emotionele bankrekening wordt gevuld door de accumulatie van kleine positieve interacties — Gottman noemt dit 'small things often'. Elke glimlach, elk moment van aandacht, elke 'turn toward' is een kleine storting. Het is de frequentie die telt, niet de grootte.",
      },
      {
        id: "c",
        text: "Praat met Stijn over je werkdruk en leg uit waarom je er niet was — begrip schept verbinding.",
        isCorrect: false,
        feedback:
          "Uitleg en context geven is nuttig, maar het vult de bankrekening niet. Stijn begrijpt misschien rationeel waarom je er niet was, maar zijn emotionele ervaring van gemis wordt niet opgelost door een verklaring. Hij heeft herhaalde positieve ervaringen nodig, niet alleen woorden.",
      },
    ],
    explanation:
      "Gottmans concept van de emotionele bankrekening beschrijft hoe relaties een positief 'saldo' nodig hebben om stress en conflict te kunnen absorberen. De rekening wordt gevuld door frequente kleine positieve interacties en geleegd door negativiteit, kritiek of afwezigheid.",
    research:
      "Gottman, J. M. (1999). The Seven Principles for Making Marriage Work. Harmony Books. Zie ook: Gottman, J. M. (2011). Raising an Emotionally Intelligent Child. Simon & Schuster.",
  },
  {
    id: "vb_46",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "basis",
    order: 46,
    question:
      "Je zoon Max (6) en jij zijn samen aan het knutselen. Max plakt alles scheef en gebruikt 'verkeerde' kleuren. Jij ziet hoe het mooier kan. Wat doe je?",
    options: [
      {
        id: "a",
        text: "Laat hem lekker zijn gang gaan en geniet van het samen bezig zijn — het proces is belangrijker dan het resultaat.",
        isCorrect: true,
        feedback:
          "Precies goed. Bij verbinding door samen dingen te doen gaat het om de gedeelde ervaring, niet om het eindproduct. Als je gaat corrigeren, verschuift het moment van 'samen plezier maken' naar 'les krijgen'. Max voelt je goedkeuring en plezier — dát is de verbinding.",
      },
      {
        id: "b",
        text: "Laat voorzichtig zien hoe het netter kan — zo leert hij er ook nog wat van.",
        isCorrect: false,
        feedback:
          "De verleiding om te 'helpen' is groot, maar het ondermijnt twee dingen: Max' gevoel van autonomie en het verbindingsmoment. Quality time wordt quality teaching, en dat is iets heel anders. Er zijn genoeg andere momenten om vaardigheden te oefenen.",
      },
      {
        id: "c",
        text: "Maak zelf een mooi voorbeeld dat hij kan navolgen — kinderen leren door imitatie.",
        isCorrect: false,
        feedback:
          "Een 'perfect' voorbeeld kan Max het gevoel geven dat zijn eigen creatie niet goed genoeg is. Het creëert een vergelijking die niet nodig is. Dit moment gaat niet over leren of presteren — het gaat over samen zijn en plezier hebben. Jouw enthousiasme over zijn werk is waardevoller dan een voorbeeld.",
      },
    ],
    explanation:
      "Spel en creatieve activiteiten zijn krachtige verbindingsmomenten wanneer ouders het kind de leiding laten. Onderzoek naar 'child-led play' toont dat kinderen zich meer verbonden voelen wanneer de ouder volgt in plaats van stuurt, en wanneer plezier voorrang krijgt boven prestatie.",
    research:
      "Cohen, L. J. (2001). Playful Parenting. Ballantine Books.",
  },
  {
    id: "vb_47",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 47,
    question:
      "Ainsworth onderscheidde drie gehechtheidsstijlen bij kinderen in de Strange Situation. Je dochter Isa (3) reageert nauwelijks als je haar naar de crèche brengt en nauwelijks als je haar ophaalt — ze lijkt onverschillig. Welk gehechtheidspatroon past hierbij en wat heeft ze van jou nodig?",
    options: [
      {
        id: "a",
        text: "Dit is vermijdende gehechtheid — Isa heeft geleerd haar hechtingsbehoeften te onderdrukken. Ze heeft consistente emotionele beschikbaarheid nodig, ook als ze die niet lijkt te vragen.",
        isCorrect: true,
        feedback:
          "Precies. Vermijdend gehechte kinderen lijken zelfstandig, maar hun stressreactie (cortisol) is net zo hoog als bij huilende kinderen. Ze hebben geleerd dat uiten van behoefte niet werkt. Isa heeft een vader nodig die actief toenadering zoekt, ook als zij dat niet doet, en die haar subtiele signalen leert lezen.",
      },
      {
        id: "b",
        text: "Dit is veilige gehechtheid — Isa is gewoon een zelfverzekerd kind dat goed om kan gaan met afscheid.",
        isCorrect: false,
        feedback:
          "Bij veilige gehechtheid zou Isa wél enige reactie tonen: lichte stress bij afscheid en blij bij hereniging. Volledige onverschilligheid is juist een teken van vermijdende gehechtheid. Het kind heeft geleerd dat emoties tonen geen reactie oplevert en onderdrukt ze daarom.",
      },
      {
        id: "c",
        text: "Dit is angstig-ambivalente gehechtheid — Isa weet niet goed hoe ze moet reageren. Ze heeft meer voorspelbaarheid nodig.",
        isCorrect: false,
        feedback:
          "Angstig-ambivalent gehechte kinderen reageren juist heel sterk: extreem verdriet bij afscheid en moeilijk te troosten bij hereniging. Isa's gedrag — weinig reactie in beide situaties — past bij het vermijdende patroon, niet het ambivalente. De twee patronen vragen om verschillende ouderlijke reacties.",
      },
    ],
    explanation:
      "Ainsworths Strange Situation Procedure (1978) onderscheidt veilige, vermijdende en ambivalente gehechtheid. Vermijdend gehechte kinderen minimaliseren hun hechtingsgedrag als aanpassing aan onbeschikbare zorg. Fysiologisch zijn ze wél gestrest, maar ze tonen het niet.",
    research:
      "Ainsworth, M. D. S., Blehar, M. C., Waters, E., & Wall, S. (1978). Patterns of Attachment: A Psychological Study of the Strange Situation. Erlbaum.",
  },
  {
    id: "vb_48",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 48,
    question:
      "Je komt terug van een zakenreis van tien dagen. Je zoon Ruben (7) is blij je te zien, maar gedraagt zich de eerste dagen extra druk en 'lastig'. Hoe interpreteer je dit het beste?",
    options: [
      {
        id: "a",
        text: "Ruben is verwend door zijn moeder in jouw afwezigheid — hij moet weer wennen aan jouw regels.",
        isCorrect: false,
        feedback:
          "Deze interpretatie wijst de schuld toe aan de andere ouder en mist de kern. Rubens gedrag is geen gevolg van 'verwennerij', maar een stressreactie op de scheiding en hereniging. Het gaat om zijn gehechtheidssysteem dat opnieuw moet kalibreren, niet om discipline.",
      },
      {
        id: "b",
        text: "Dit is herenigingsgedrag: Ruben 'test' de verbinding door grenszoekend gedrag — hij heeft extra nabijheid en geduld nodig om weer veilig te landen.",
        isCorrect: true,
        feedback:
          "Precies. Na afwezigheid van een hechtingsfiguur tonen kinderen vaak tijdelijk meer grenszoekend of claimend gedrag. Dit is geen ondeugendheid maar een manier om de relatie te 'testen': ben je er echt? Reageer je nog op mij? Extra warmte en geduld helpen Ruben sneller te herstellen.",
      },
      {
        id: "c",
        text: "Ruben heeft gewoon veel energie na de reis — geef hem de ruimte om uit te razen en het gaat vanzelf over.",
        isCorrect: false,
        feedback:
          "Als je zijn gedrag afdoet als 'gewoon energie', mis je de emotionele laag. Rubens drukke gedrag is een signaal, geen toevalligheid. Door het te negeren, loop je het risico dat de onzekerheid die hij voelt niet wordt geadresseerd en het herenigingsproces langer duurt.",
      },
    ],
    explanation:
      "Herenigingsgedrag na afwezigheid van een hechtingsfiguur is goed gedocumenteerd in de gehechtheidsliteratuur. Kinderen reageren op de stresservaring van scheiding door na hereniging extra nabijheid te zoeken, soms in de vorm van 'lastig' of claimend gedrag.",
    research:
      "Bowlby, J. (1973). Attachment and Loss: Vol. 2. Separation: Anxiety and Anger. Basic Books.",
  },
  {
    id: "vb_49",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "gevorderd",
    order: 49,
    question:
      "Je speelt met je zoon Daniël (5) en doet expres alsof je heel dom bent bij een spelletje. Daniël ligt dubbel van het lachen. Je vrouw zegt dat je zijn gezag voor je ondermijnt. Wat klopt er?",
    options: [
      {
        id: "a",
        text: "Je vrouw heeft gelijk — als vader moet je respect uitstralen en niet de clown uithangen.",
        isCorrect: false,
        feedback:
          "Dit is een veelgehoorde maar onjuiste opvatting. Vaderlijk gezag komt niet voort uit ernst en afstand, maar uit de relatie. Een vader die kan spelen en lachen met zijn kind bouwt juist méér invloed op, niet minder. Humor versterkt de band die gezag mogelijk maakt.",
      },
      {
        id: "b",
        text: "Humor en 'dom doen' versterken de verbinding — gedeeld lachen is een van de krachtigste vormen van emotionele afstemming.",
        isCorrect: true,
        feedback:
          "Precies. Gedeelde humor, vooral fysieke humor en rolwisseling (de ouder is 'dom', het kind is 'slim'), is enorm verbindend. Het kind ervaart controle en plezier, en de gedeelde lach activeert dezelfde neurologische circuits als fysieke affectie. Dit ondermijnt gezag niet, het bouwt het op.",
      },
      {
        id: "c",
        text: "Het mag af en toe, maar je moet wel een balans houden tussen gek doen en serieus zijn.",
        isCorrect: false,
        feedback:
          "Dit klinkt redelijk maar mist het punt. Speelmomenten zijn per definitie anders dan serieuze momenten — kinderen begrijpen dat verschil uitstekend. Je hoeft tijdens het spelen niet 'serieus' te zijn om later serieus genomen te worden. Gedeeld plezier is geen luxe maar een basisbehoefte.",
      },
    ],
    explanation:
      "Speels ouderschap ('playful parenting') is een evidence-based benadering die laat zien dat humor, fysiek spel en rolwisseling de ouder-kindverbinding versterken. Kinderen die veel positief, speels contact met hun vader hebben, tonen meer prosociaal gedrag en betere emotieregulatie.",
    research:
      "Cohen, L. J. (2001). Playful Parenting. Ballantine Books. Zie ook: StGeorge, J., & Freeman, E. (2017). Measurement of father-child rough-and-tumble play. Infant and Child Development, 26(6).",
  },
  {
    id: "vb_50",
    skill: "Verbinding",
    type: "quiz",
    difficulty: "expert",
    order: 50,
    question:
      "Je dochter Vera (15) heeft je verteld dat ze gepest wordt op school. Je wilt helpen, maar Vera zegt: 'Je snapt er toch niks van.' Volgens Fonagy's mentaliseringstheorie, wat is de beste reactie?",
    options: [
      {
        id: "a",
        text: "'Je hebt gelijk, ik weet niet precies hoe het voor je voelt. Maar ik wil het graag proberen te begrijpen als je me de kans geeft.' — je erkent de grens van je eigen begrip.",
        isCorrect: true,
        feedback:
          "Dit is mentaliseren op zijn best: je erkent dat je niet automatisch weet wat de ander voelt, en toont nieuwsgierigheid zonder te claimen dat je het 'snapt'. Fonagy noemt dit de 'not-knowing stance' — juist het erkennen dat je het niet weet, opent de deur voor echte verbinding. Vera voelt zich serieus genomen.",
      },
      {
        id: "b",
        text: "'Ik ben ook gepest als kind, dus ik snap het beter dan je denkt.' — je toont empathie via je eigen ervaring.",
        isCorrect: false,
        feedback:
          "Hoewel goedbedoeld, is dit pseudo-mentaliseren: je projecteert je eigen ervaring op Vera's situatie. Haar pestervaring is niet jouw pestervaring. Door te claimen dat je het 'snapt', sluit je het gesprek juist af. Vera voelt zich niet gehoord, maar overruled door jouw verhaal.",
      },
      {
        id: "c",
        text: "'Natuurlijk snap ik het — ik ben je vader en ik ken je het beste.' — je benadrukt de sterkte van jullie band.",
        isCorrect: false,
        feedback:
          "Dit is wat Fonagy 'psychic equivalence' noemt: de aanname dat jouw perspectief de realiteit is. Een tiener die zegt dat je het niet snapt, vertelt je iets belangrijks over haar ervaring. Door dit weg te wuiven met een beroep op je ouderrol, bevestig je precies haar punt: je luistert niet echt.",
      },
    ],
    explanation:
      "Fonagy's mentaliseringstheorie benadrukt dat effectieve verbinding niet gaat om 'weten' wat de ander voelt, maar om een nieuwsgierige, niet-wetende houding (not-knowing stance). Juist het erkennen dat je de ander niet volledig kunt kennen, creëert ruimte voor werkelijke emotionele uitwisseling.",
    research:
      "Fonagy, P. & Allison, E. (2014). The role of mentalizing and epistemic trust in the therapeutic relationship. Psychotherapy, 51(3), 372-380.",
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


  {
    id: "rf_31",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "basis",
    order: 31,
    question:
      "Jan (38) merkt dat hij elke avond na het slapengaan van zijn dochter Evi (5) terugdenkt aan wat er beter had gekund. Hij voelt zich vaak schuldig. Wat is de beste eerste stap?",
    options: [
      {
        id: "a",
        text: "Probeer die gedachten te stoppen en afleiden met je telefoon.",
        isCorrect: false,
        feedback:
          "Vermijding van reflectie helpt niet op de lange termijn. De schuldgevoelens verdwijnen niet door ze weg te duwen — ze komen vaak sterker terug. Het is beter om ze een plek te geven.",
      },
      {
        id: "b",
        text: "Schrijf kort op wat goed ging én wat je anders zou willen doen, zonder jezelf te veroordelen.",
        isCorrect: true,
        feedback:
          "Dit is gebalanceerde reflectie: je erkent zowel het positieve als het verbeterpunt. Door het op te schrijven maak je het concreet en hanteerbaar. Zonder zelfveroordeling wordt het een leermoment in plaats van een bron van schaamte.",
      },
      {
        id: "c",
        text: "Bespreek elke avond uitgebreid met je partner wat je fout deed.",
        isCorrect: false,
        feedback:
          "Hoewel praten met je partner waardevol kan zijn, creëert een dagelijks 'foutenrapport' een negatief patroon. Het risico is dat je jezelf alleen door een lens van tekortkomingen bekijkt, wat je zelfvertrouwen als vader ondermijnt.",
      },
    ],
    explanation:
      "Gebalanceerde zelfreflectie — waarbij je zowel successen als groeipunten erkent — is effectiever dan eenzijdige zelfkritiek. Onderzoek laat zien dat vaders die met zelfcompassie reflecteren, meer veerkracht tonen en betere ouder-kindrelaties ontwikkelen.",
    research:
      "Neff, K.D. & Faso, D.J. (2015). Self-compassion and well-being in parents of children with autism. Mindfulness, 6(4), 938-947.",
  },
  {
    id: "rf_32",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "basis",
    order: 32,
    question:
      "Pieter (34) wil beginnen met een dagelijks reflectiemoment over zijn vaderschap. Hij heeft weinig tijd. Wat is de meest haalbare aanpak?",
    options: [
      {
        id: "a",
        text: "Elke avond 5 minuten drie korte vragen beantwoorden in een notitieboekje: wat ging goed, wat was lastig, wat wil ik morgen proberen.",
        isCorrect: true,
        feedback:
          "Kort en gestructureerd journalen verlaagt de drempel enorm. Drie gerichte vragen geven richting zonder overweldigend te zijn. Onderzoek toont aan dat zelfs korte dagelijkse reflectiemomenten significant bijdragen aan persoonlijke groei in ouderschap.",
      },
      {
        id: "b",
        text: "Wacht tot het weekend en schrijf dan een uitgebreide samenvatting van de hele week.",
        isCorrect: false,
        feedback:
          "Na een week ben je veel details vergeten en worden herinneringen gekleurd door recentere ervaringen. Dagelijkse korte reflectie is effectiever dan wekelijkse lange sessies, omdat je dichter bij de ervaring reflecteert.",
      },
      {
        id: "c",
        text: "Gebruik een app die je hele dag trackt en uitgebreide analyses maakt.",
        isCorrect: false,
        feedback:
          "Te veel technologie en data kunnen reflectie juist in de weg staan. Het risico is dat je gaat 'meten' in plaats van 'voelen'. Echte reflectie vraagt om persoonlijke verwoording, niet om algoritmische analyses.",
      },
    ],
    explanation:
      "Effectief reflecteren hoeft niet tijdrovend te zijn. Kort, dagelijks en gestructureerd journalen is bewezen effectief. De sleutel is consistentie en balans tussen positieve en uitdagende ervaringen.",
    research:
      "Pennebaker, J.W. & Smyth, J.M. (2016). Opening Up by Writing It Down: How Expressive Writing Improves Health and Eases Emotional Pain. Guilford Press.",
  },
  {
    id: "rf_33",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 33,
    question:
      "Wouter (41) betrapt zichzelf erop dat hij tegen zijn zoon Daan (8) schreeuwt als die niet luistert — precies zoals zijn eigen vader deed. Wouter voelt zich er rot over. Wat is de beste reflectieve aanpak?",
    options: [
      {
        id: "a",
        text: "Erken het patroon, onderzoek welke gevoelens het schreeuwen triggeren, en bedenk bewust een alternatieve reactie voor de volgende keer.",
        isCorrect: true,
        feedback:
          "Dit is bewuste patroononderbreking: je herkent het generatiepatroon, onderzoekt de onderliggende emotie (frustratie, machteloosheid) en maakt een concreet plan. Dit doorbreekt de automatische piloot en geeft je keuzevrijheid.",
      },
      {
        id: "b",
        text: "Neem je voor om nooit meer te schreeuwen — je wordt absoluut niet zoals je vader.",
        isCorrect: false,
        feedback:
          "Hoewel de intentie goed is, werken absolute voornemens zelden. Ze creëren een onrealistisch ideaalbeeld waardoor je bij de eerste terugval extra hard voor jezelf bent. Verandering is een geleidelijk proces dat zelfcompassie vraagt.",
      },
      {
        id: "c",
        text: "Het is normaal om te schreeuwen, alle vaders doen het. Maak je er niet te druk om.",
        isCorrect: false,
        feedback:
          "Normaliseren kan een vorm van vermijding zijn. Het feit dat Wouter het patroon herkent, is juist waardevol. De pijn die hij voelt is een signaal dat hij het anders wil — dat negeren zou een gemiste kans voor groei zijn.",
      },
    ],
    explanation:
      "Generatiepatronen doorbreken begint met bewuste herkenning. Onderzoek naar intergenerationele transmissie toont dat het herkennen en begrijpen van patronen uit je eigen opvoeding de eerste stap is om ze te veranderen, mits dit met zelfcompassie gebeurt.",
    research:
      "Van IJzendoorn, M.H. (1995). Adult attachment representations, parental responsiveness, and infant attachment: A meta-analysis on the predictive validity of the Adult Attachment Interview. Psychological Bulletin, 117(3), 387-403.",
  },
  {
    id: "rf_34",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 34,
    question:
      "Bas (36) merkt dat zijn innerlijke stem vaak zegt: 'Je bent niet goed genoeg als vader.' Na een drukke werkdag voelt hij zich schuldig als hij te moe is om met zijn kinderen Lotte (6) en Sem (3) te spelen. Hoe kan Bas het beste omgaan met deze innerlijke criticus?",
    options: [
      {
        id: "a",
        text: "De innerlijke criticus negeren en gewoon doorgaan — het zijn maar gedachten.",
        isCorrect: false,
        feedback:
          "Gedachten negeren werkt zelden. De innerlijke criticus wordt vaak juist luider als je hem probeert weg te duwen. Erkenning is een eerste stap: de stem is er, maar je hoeft hem niet te geloven.",
      },
      {
        id: "b",
        text: "De criticus herkennen en dan bewust je innerlijke coach activeren: 'Ik doe mijn best en dat is genoeg voor vandaag.'",
        isCorrect: true,
        feedback:
          "Door de criticus te herkennen zonder erin mee te gaan, en vervolgens een compassievolle tegenstem te activeren, doorbreek je het patroon van zelfkritiek. Dit is geen positief denken, maar zelfcompassie: erkennen dat vaderschap moeilijk is én dat je je best doet.",
      },
      {
        id: "c",
        text: "Harder werken aan het vaderschap zodat de innerlijke criticus gelijk krijgt dat het beter moet.",
        isCorrect: false,
        feedback:
          "Dit voedt de perfectionismecyclus: hoe meer je doet, hoe meer de criticus vindt dat het beter moet. Perfectionisme in ouderschap leidt tot uitputting en verminderd plezier in de relatie met je kinderen.",
      },
    ],
    explanation:
      "De innerlijke criticus is vaak een geïnternaliseerde stem uit het verleden. Zelfcompassie — het herkennen van lijden, het besef van gedeelde menselijkheid, en mindfulness — is een krachtig tegengif. Vaders met meer zelfcompassie ervaren minder opvoedstress.",
    research:
      "Gilbert, P. (2009). The Compassionate Mind: A New Approach to Life's Challenges. Constable & Robinson.",
  },
  {
    id: "rf_35",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 35,
    question:
      "Mark (39) schrijft elke avond in een dagboek over zijn vaderschap. Hij merkt dat hij steeds dezelfde frustraties opschrijft over zijn dochter Sophie (7) die niet luistert. Het journalen voelt niet meer productief. Wat kan Mark beter doen?",
    options: [
      {
        id: "a",
        text: "Stoppen met journalen — het werkt duidelijk niet als het steeds hetzelfde is.",
        isCorrect: false,
        feedback:
          "Het probleem is niet het journalen zelf, maar de manier waarop Mark het doet. Stoppen betekent een waardevolle reflectietool opgeven. Het aanpassen van de methode is effectiever dan helemaal stoppen.",
      },
      {
        id: "b",
        text: "Andere vragen stellen in zijn dagboek: 'Wat had Sophie nodig op dat moment?' en 'Welk gevoel zat er bij mij onder de frustratie?'",
        isCorrect: true,
        feedback:
          "Door de vragen te veranderen, verschuift Mark van oppervlakkige klachten naar diepere reflectie. De vraag 'wat had Sophie nodig?' stimuleert mentaliseren, terwijl 'welk gevoel zat eronder?' helpt bij emotioneel zelfbewustzijn. Dit maakt journalen weer een groeimiddel.",
      },
      {
        id: "c",
        text: "Alleen positieve dingen opschrijven om het dagboek leuker te maken.",
        isCorrect: false,
        feedback:
          "Eenzijdig positief journalen mist de kern van reflectie: het eerlijk onderzoeken van moeilijke momenten. De frustratie weglaten is vermijding. De uitdaging is juist om op een andere, diepere manier naar die frustratie te kijken.",
      },
    ],
    explanation:
      "Effectief reflectief journalen gaat verder dan het opschrijven van gebeurtenissen. Door mentaliserende vragen te stellen — over de innerlijke wereld van jezelf en je kind — wordt journalen een instrument voor diepere zelfinzicht en empathische groei.",
    research:
      "Fonagy, P. & Target, M. (1997). Attachment and reflective function: Their role in self-organization. Development and Psychopathology, 9(4), 679-700.",
  },
  {
    id: "rf_36",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 36,
    question:
      "Thomas (43) merkt dat hij altijd gespannen raakt als zijn zoon Luuk (10) huilt. Zijn kaak klemt, zijn schouders trekken omhoog en hij wil meteen zeggen: 'Stel je niet aan.' Hij herkent dit van zijn eigen vader. Wat is de meest reflectieve reactie?",
    options: [
      {
        id: "a",
        text: "Even pauzeren, de spanning in zijn lichaam opmerken, en bewust kiezen om Luuk te troosten in plaats van af te kappen.",
        isCorrect: true,
        feedback:
          "Dit combineert lichaamsbewustzijn met bewuste patroononderbreking. Door de lichamelijke trigger (klemmen, spannen) te herkennen als signaal, creëert Thomas een moment van keuze. Het lichaam geeft eerder informatie dan het hoofd — die informatie benutten is krachtig.",
      },
      {
        id: "b",
        text: "Tegen zichzelf zeggen dat huilen normaal is en het gewoon toelaten zonder er iets mee te doen.",
        isCorrect: false,
        feedback:
          "Rationeel weten dat huilen normaal is, is een begin, maar het negeert de lichamelijke spanning die Thomas voelt. Zonder aandacht voor zijn eigen fysieke reactie zal de automatische respons blijven opspelen. Het lichaam heeft zijn eigen geheugen.",
      },
      {
        id: "c",
        text: "De kamer verlaten als Luuk huilt om te voorkomen dat hij iets verkeerds zegt.",
        isCorrect: false,
        feedback:
          "Weggaan beschermt wellicht tegen een negatieve reactie, maar het laat Luuk alleen op een kwetsbaar moment. Bovendien leert Thomas niet om met zijn eigen trigger om te gaan. Vermijding doorbreekt het patroon niet — bewust erbij blijven wel.",
      },
    ],
    explanation:
      "Ons lichaam draagt herinneringen aan eerdere ervaringen. Lichamelijke triggers bij het ouderschap wijzen vaak op onverwerkte patronen uit de eigen jeugd. Door lichaamssignalen te herkennen en te gebruiken als 'pauzeknop' kan een vader bewuster reageren.",
    research:
      "Van der Kolk, B.A. (2014). The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma. Viking Press.",
  },
  {
    id: "rf_37",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 37,
    question:
      "Erik (37) worstelt met de vraag wie hij is als vader. Hij wil niet zijn zoals zijn eigen afwezige vader, maar weet niet goed wat voor vader hij wél wil zijn. Wat helpt Erik het meest bij het ontwikkelen van zijn vader-identiteit?",
    options: [
      {
        id: "a",
        text: "Precies het tegenovergestelde doen van wat zijn vader deed.",
        isCorrect: false,
        feedback:
          "Reactief opvoeden — het tegenovergestelde doen — is nog steeds bepaald door je eigen vader. Je definieert jezelf in oppositie in plaats van vanuit eigen waarden. Dit kan leiden tot overcompensatie, zoals overbeschermend worden omdat je eigen vader afwezig was.",
      },
      {
        id: "b",
        text: "Actief onderzoeken welke waarden hij belangrijk vindt als vader, los van wat zijn eigen vader wel of niet deed.",
        isCorrect: true,
        feedback:
          "Door bewust na te denken over eigen waarden — wat vind ík belangrijk in de relatie met mijn kinderen? — bouwt Erik een vader-identiteit die niet reactief is maar authentiek. Dit vraagt om reflectie voorbij het verhaal van zijn eigen vader.",
      },
      {
        id: "c",
        text: "Zich spiegelen aan andere vaders in zijn omgeving en hun aanpak kopiëren.",
        isCorrect: false,
        feedback:
          "Inspiratie opdoen bij andere vaders is prima, maar klakkeloos kopiëren leidt tot een onecht vaderschap. Wat werkt voor een andere vader en zijn kinderen, past niet automatisch bij Erik en zijn gezin. Vader-identiteit moet van binnenuit komen.",
      },
    ],
    explanation:
      "Een gezonde vader-identiteit ontstaat niet door oppositie tegen of imitatie van anderen, maar door bewuste exploratie van eigen waarden en overtuigingen. Dit proces van identiteitsvorming is vergelijkbaar met wat Erikson beschrijft als 'generativiteit'.",
    research:
      "Palkovitz, R. (2002). Involved Fathering and Men's Adult Development: Provisional Balances. Lawrence Erlbaum Associates.",
  },
  {
    id: "rf_38",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 38,
    question:
      "Arjan (40) maakte gisteren een fout: hij beloofde zijn dochter Noor (9) om naar haar schooloptreden te komen, maar vergat het door een werkmeeting. Noor was verdrietig. Arjan voelt immens schuldgevoel. Hoe gaat hij hier het beste reflectief mee om?",
    options: [
      {
        id: "a",
        text: "Zichzelf vergeven, de fout erkennen richting Noor, en concreet bedenken hoe hij dit in de toekomst voorkomt.",
        isCorrect: true,
        feedback:
          "Dit is de drieslag van constructief omgaan met vaderlijke fouten: zelfcompassie (vergeven), verantwoordelijkheid (erkennen), en groei (plan maken). De fout wordt zo een leermoment in plaats van een bron van chronisch schuldgevoel.",
      },
      {
        id: "b",
        text: "Het goedmaken met een groot cadeau voor Noor zodat ze het vergeet.",
        isCorrect: false,
        feedback:
          "Materieel compenseren leert Noor dat emoties afgekocht kunnen worden. Het mist de kern: Noor voelde zich niet gezien. Wat ze nodig heeft is erkenning van haar teleurstelling en de zekerheid dat ze belangrijk is voor haar vader.",
      },
      {
        id: "c",
        text: "Accepteren dat hij nu eenmaal een drukke baan heeft en dat Noor dat moet leren begrijpen.",
        isCorrect: false,
        feedback:
          "Dit legt de verantwoordelijkheid bij een kind van 9. Noor kan en hoeft niet te begrijpen waarom werk soms voorgaat. Rationaliseren beschermt Arjan tegen schuldgevoel, maar het mist de kans om te herstellen en te groeien als vader.",
      },
    ],
    explanation:
      "Fouten maken is onvermijdelijk in ouderschap. Wat telt is het herstel: erkennen, verantwoordelijkheid nemen en concrete stappen zetten. Onderzoek toont dat 'repair' na een breuk in de relatie juist de hechtingsband kan versterken.",
    research:
      "Tronick, E. (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children. W.W. Norton & Company.",
  },
  {
    id: "rf_39",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 39,
    question:
      "Vincent (35) merkt dat hij zich als vader constant vergelijkt met andere vaders op het schoolplein. Hij voelt zich dan onzeker en denkt: 'Zij doen het veel beter.' Welke reflectieve strategie helpt Vincent het meest?",
    options: [
      {
        id: "a",
        text: "Niet meer naar het schoolplein gaan om de vergelijking te vermijden.",
        isCorrect: false,
        feedback:
          "Vermijding lost het onderliggende probleem niet op. De vergelijkingsdrang zal zich verplaatsen naar andere situaties. Bovendien mist Vincent waardevolle contacten met andere ouders die juist steunend kunnen zijn.",
      },
      {
        id: "b",
        text: "Onderzoeken waar de behoefte aan vergelijking vandaan komt en welke eigen maatstaf voor 'goed vaderschap' hij hanteert.",
        isCorrect: true,
        feedback:
          "Door te reflecteren op de bron van de vergelijking — vaak een geïnternaliseerd ideaalbeeld of perfectionisme — kan Vincent bewuster worden van zijn eigen maatstaven. Zijn die realistisch? Van wie komen ze? Dit inzicht bevrijdt hem van externe validatie.",
      },
      {
        id: "c",
        text: "Zichzelf voorhouden dat hij het wél goed doet en de anderen vast ook fouten maken.",
        isCorrect: false,
        feedback:
          "Dit is een cognitieve truc die tijdelijk helpt maar de onderliggende onzekerheid niet adresseert. Bovendien wordt vergelijken nu omgedraaid: anderen naar beneden halen om jezelf beter te voelen is geen duurzame strategie voor zelfvertrouwen.",
      },
    ],
    explanation:
      "Sociale vergelijking bij vaders hangt vaak samen met onduidelijke eigen maatstaven voor vaderschap. Door te reflecteren op waar je ideaalbeeld vandaan komt en of het realistisch is, kun je je eigen authentieke vaderschapsstijl ontwikkelen zonder afhankelijk te zijn van externe bevestiging.",
    research:
      "Festinger, L. (1954). A theory of social comparison processes. Human Relations, 7(2), 117-140; Ammari, T. & Schoenebeck, S. (2015). Understanding and supporting fathers and fatherhood on social media sites. CHI 2015.",
  },
  {
    id: "rf_40",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "gevorderd",
    order: 40,
    question:
      "Henk (44) heeft drie kinderen: Bram (12), Iris (9) en Fenna (5). Hij merkt dat hij Bram strenger behandelt dan de meisjes. Na reflectie beseft hij dat zijn eigen vader ook strenger was tegen jongens: 'Jongens moeten sterk zijn.' Wat is de beste volgende stap?",
    options: [
      {
        id: "a",
        text: "Vanaf nu Bram precies hetzelfde behandelen als Iris en Fenna om eerlijk te zijn.",
        isCorrect: false,
        feedback:
          "Elk kind is anders en heeft andere behoeften — gelijk behandelen is niet hetzelfde als eerlijk behandelen. Het gaat er niet om alle drie identiek te benaderen, maar om te onderzoeken of de strengheid naar Bram voortkomt uit Brams behoefte of uit Henks eigen patroon.",
      },
      {
        id: "b",
        text: "Bewust onderzoeken hoe de overtuiging 'jongens moeten sterk zijn' zijn opvoeding beïnvloedt en hierover in gesprek gaan met Bram.",
        isCorrect: true,
        feedback:
          "Dit combineert zelfreflectie met actie. Door de onbewuste overtuiging bewust te maken, kan Henk kiezen of hij die wil behouden. Het gesprek met Bram erkennt diens ervaring en opent de deur naar een eerlijkere relatie. Dit is generatiepatroon doorbreken in de praktijk.",
      },
      {
        id: "c",
        text: "Het is logisch: jongens hebben nu eenmaal meer structuur nodig dan meisjes.",
        isCorrect: false,
        feedback:
          "Dit rationaliseert een generatiepatroon als biologisch feit. Onderzoek toont dat genderverschillen in opvoedbehoeften veel kleiner zijn dan vaak gedacht. De strengheid zegt meer over Henks eigen opvoeding dan over wat Bram nodig heeft.",
      },
    ],
    explanation:
      "Onbewuste genderpatronen in opvoeding worden vaak intergenerationeel doorgegeven. Door deze patronen bewust te maken en te bevragen, kunnen vaders kiezen welke overtuigingen ze willen behouden en welke ze willen loslaten.",
    research:
      "Pleck, J.H. (2010). Paternal involvement: Revised conceptualization and theoretical linkages with child outcomes. In M.E. Lamb (Ed.), The Role of the Father in Child Development (5th ed.). Wiley.",
  },
  {
    id: "rf_41",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 41,
    question:
      "David (42) merkt dat hij tijdens conflicten met zijn zoon Thijs (11) moeite heeft om tegelijkertijd zijn eigen emoties te reguleren én te begrijpen wat Thijs voelt. In termen van reflective functioning (Fonagy), wat beschrijft dit het beste?",
    options: [
      {
        id: "a",
        text: "David heeft een laag niveau van reflective functioning: hij kan onder stress onvoldoende mentaliseren over zichzelf én over Thijs.",
        isCorrect: true,
        feedback:
          "Reflective functioning omvat het vermogen om mentale toestanden bij jezelf en anderen te herkennen en te begrijpen. Onder stress daalt dit vermogen vaak. David's ervaring is typisch: in rustige momenten kan hij mentaliseren, maar bij conflict valt hij terug op automatische reacties. Dit is een aangrijpingspunt voor groei.",
      },
      {
        id: "b",
        text: "David heeft een persoonlijkheidsstoornis die professionele behandeling vereist.",
        isCorrect: false,
        feedback:
          "Moeite met mentaliseren onder stress is een universeel menselijk fenomeen, geen stoornis. Bijna alle ouders ervaren momenten waarop ze hun reflectief vermogen verliezen. Het herkennen ervan is juist een teken van gezonde zelfreflectie.",
      },
      {
        id: "c",
        text: "Dit is normaal en onveranderlijk — emotieregulatie en empathie kunnen niet tegelijk actief zijn.",
        isCorrect: false,
        feedback:
          "Hoewel het waar is dat stress het lastiger maakt, is het niet onveranderlijk. Reflective functioning kan ontwikkeld worden door bewuste oefening, therapie of coaching. Fonagy's onderzoek toont dat mentaliseren een vaardigheid is die verbeterd kan worden.",
      },
    ],
    explanation:
      "Reflective functioning — het vermogen om gedrag te begrijpen in termen van onderliggende mentale toestanden — is centraal in Fonagy's werk. Het is zowel een kenmerk van veilige hechting als een vaardigheid die ontwikkeld kan worden, ook op latere leeftijd.",
    research:
      "Fonagy, P., Gergely, G., Jurist, E.L. & Target, M. (2002). Affect Regulation, Mentalization, and the Development of the Self. Other Press.",
  },
  {
    id: "rf_42",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 42,
    question:
      "Michiel (45) had een emotioneel afwezige vader, maar heeft door jarenlange reflectie en therapie een warme band met zijn eigen kinderen opgebouwd. In gehechtheidstheorie noemen we dit:",
    options: [
      {
        id: "a",
        text: "Vermijdende gehechtheid die gecompenseerd wordt door bewust ander gedrag.",
        isCorrect: false,
        feedback:
          "Compensatie impliceert dat het onderliggende patroon onveranderd is en slechts bedekt wordt door ander gedrag. Bij Michiel is er iets fundamentelers veranderd: zijn interne werkmodel is bijgewerkt door reflectie. Dit is meer dan gedragsverandering — het is een transformatie van zijn hechtingsrepresentatie.",
      },
      {
        id: "b",
        text: "'Earned secure attachment' — een verworven veilige gehechtheid door coherente reflectie op moeilijke jeugdervaringen.",
        isCorrect: true,
        feedback:
          "Earned secure attachment is een kernbegrip uit Main's werk met het Adult Attachment Interview. Mensen die onveilig gehecht waren maar door reflectie een coherent verhaal over hun jeugd hebben ontwikkeld, functioneren even goed als ouder als mensen die altijd veilig gehecht waren. Dit is hoopgevend: je verleden bepaalt niet je toekomst.",
      },
      {
        id: "c",
        text: "Gedesorganiseerde gehechtheid die gereorganiseerd is tot een veilig patroon.",
        isCorrect: false,
        feedback:
          "Hoewel reorganisatie mogelijk is, beschrijft 'gedesorganiseerd' een specifiek hechtingspatroon dat gekenmerkt wordt door angst voor de hechtingsfiguur. De term 'earned secure' is de juiste classificatie voor Michiels ervaring van reflectieve verwerking.",
      },
    ],
    explanation:
      "Mary Main introduceerde het concept 'earned secure attachment' op basis van het Adult Attachment Interview. Volwassenen die ondanks moeilijke jeugdervaringen een coherent, reflectief verhaal over hun verleden hebben ontwikkeld, bieden hun kinderen evenveel veiligheid als altijd-veilig gehechte ouders.",
    research:
      "Main, M., Kaplan, N. & Cassidy, J. (1985). Security in infancy, childhood, and adulthood: A move to the level of representation. Monographs of the Society for Research in Child Development, 50(1-2), 66-104.",
  },
  {
    id: "rf_43",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 43,
    question:
      "Rob (38) kan in zijn reflectiedagboek zijn jeugdervaringen beschrijven, maar zijn verhaal is gefragmenteerd: sommige periodes ontbreken, emoties passen niet bij de feiten, en hij idealiseert zijn moeder terwijl hij ernstige verwaarlozing beschrijft. In termen van narrative coherence (Main), wat suggereert dit?",
    options: [
      {
        id: "a",
        text: "Rob heeft een goede reflectieve houding omdat hij überhaupt over zijn jeugd kan schrijven.",
        isCorrect: false,
        feedback:
          "Het vermogen om te schrijven is niet hetzelfde als narratieve coherentie. Main benadrukt dat het gaat om de kwaliteit van het verhaal: zijn de feiten en emoties congruent? Zijn er geen opvallende gaten of tegenstrijdigheden? Bij Rob is dat niet het geval.",
      },
      {
        id: "b",
        text: "Rob's narratief mist coherentie — de discrepantie tussen idealisering en feitelijke verwaarlozing wijst op onverwerkte ervaringen die zijn ouderschap onbewust kunnen beïnvloeden.",
        isCorrect: true,
        feedback:
          "Dit is precies wat Main beschrijft: een incoherent narratief kenmerkt zich door tegenstrijdigheden (idealisering + verwaarlozing), lacunes en emotie-feit incongruentie. Dit wijst op onveilige gehechtheidsrepresentaties die zonder verwerking het ouderschap beïnvloeden via onbewuste kanalen.",
      },
      {
        id: "c",
        text: "Het is normaal dat herinneringen aan de kindertijd fragmentarisch zijn — dit zegt niets over zijn huidige ouderschap.",
        isCorrect: false,
        feedback:
          "Enige fragmentatie is normaal, maar het patroon dat Rob toont — idealisering die tegenstrijdig is met beschreven feiten — is een specifiek kenmerk van onverwerkte gehechtheidservaringen. Onderzoek toont consistent dat narratieve coherentie van ouders voorspellend is voor de gehechtheidskwaliteit van hun kinderen.",
      },
    ],
    explanation:
      "Narrative coherence — de mate waarin iemand een samenhangend, consistent en reflectief verhaal over de eigen jeugd kan vertellen — is een kernmaat in het Adult Attachment Interview. Het is een van de sterkste voorspellers van de gehechtheidskwaliteit van de volgende generatie.",
    research:
      "Hesse, E. (2008). The Adult Attachment Interview: Protocol, method of analysis, and empirical studies. In J. Cassidy & P.R. Shaver (Eds.), Handbook of Attachment: Theory, Research, and Clinical Applications (2nd ed.). Guilford Press.",
  },
  {
    id: "rf_44",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 44,
    question:
      "Stefan (40) merkt dat hij steeds ongemakkelijk wordt als zijn dochter Lisa (4) heel aanhankelijk is. Hij weet niet precies waarom — hij denkt niet bewust aan zijn eigen jeugd, maar zijn lichaam trekt zich terug. Vanuit het concept 'implicit relational knowing' (Stern), wat gebeurt hier?",
    options: [
      {
        id: "a",
        text: "Stefan heeft een bewuste hekel aan fysiek contact die hij moet overwinnen.",
        isCorrect: false,
        feedback:
          "Het gaat juist niet om een bewuste hekel. Stefan weet niet waarom hij zo reageert. Implicit relational knowing opereert buiten het bewustzijn — het is procedurele kennis over hoe relaties 'werken' die in de vroege kindertijd is opgedaan en niet in woorden gevat is.",
      },
      {
        id: "b",
        text: "Stefans lichaam reageert vanuit onbewuste, procedurele kennis over intimiteit die in zijn vroege relaties is gevormd — dit is niet-symbolische, belichaamde hechtingskennis.",
        isCorrect: true,
        feedback:
          "Precies. Stern's 'implicit relational knowing' beschrijft kennis over relaties die preverbal is — opgedaan vóór het talig geheugen. Stefans lichaam 'weet' iets over nabijheid dat zijn hoofd niet kan verwoorden. Deze belichaamde kennis stuurt zijn reacties zonder dat hij begrijpt waarom.",
      },
      {
        id: "c",
        text: "Stefan is introvert en heeft simpelweg minder behoefte aan fysiek contact.",
        isCorrect: false,
        feedback:
          "Introversie verklaart niet het specifieke ongemak bij aanhankelijkheid van zijn dochter. Het feit dat zijn lichaam zich terugtrekt zonder bewuste reden, wijst op een dieper patroon. Persoonlijkheidskenmerken en relatiepatronen uit de vroege kindertijd zijn verschillende fenomenen.",
      },
    ],
    explanation:
      "Daniel Stern beschreef 'implicit relational knowing' als de niet-bewuste, procedurele kennis over hoe je in relaties functioneert. Deze kennis is gevormd in de vroegste interacties en opereert buiten het declaratieve geheugen. In het ouderschap worden deze impliciete patronen vaak geactiveerd.",
    research:
      "Stern, D.N. (1998). The process of therapeutic change involving implicit knowledge: Some implications of developmental observations for adult psychotherapy. Infant Mental Health Journal, 19(3), 300-308.",
  },
  {
    id: "rf_45",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 45,
    question:
      "Koen (46) reflecteert op zijn vaderschap en beseft dat hij altijd een vaag gevoel van onbehagen heeft rond intimiteit met zijn kinderen Tim (8) en Eva (6) — een gevoel dat hij niet kan benoemen maar dat er altijd is. Christopher Bollas zou dit beschrijven als:",
    options: [
      {
        id: "a",
        text: "Een bewust onderdrukt trauma dat Koen weigert te erkennen.",
        isCorrect: false,
        feedback:
          "Onderdrukking impliceert dat Koen bewust iets wegduwt. Bollas' 'unthought known' gaat over kennis die nooit bewust is geweest — het is geen verdringing maar iets dat nooit in gedachten is geformuleerd. Het verschil is cruciaal: je kunt niet bewust onderdrukken wat je nooit bewust hebt geweten.",
      },
      {
        id: "b",
        text: "Het 'unthought known' — ervaringen die Koen op lichamelijk en emotioneel niveau 'weet' maar die nooit in bewuste gedachten zijn omgezet.",
        isCorrect: true,
        feedback:
          "Het 'unthought known' beschrijft precies dit: kennis die in het lichaam en de emoties leeft maar nooit is gedacht. Het is de neerslag van vroege ervaringen die het bewustzijn nooit hebben bereikt maar wel het gedrag en gevoel sturen. Reflectie kan helpen om dit ongedachte kenbare geleidelijk bewust te maken.",
      },
      {
        id: "c",
        text: "Een normale angst die alle vaders hebben rond fysiek contact met kinderen.",
        isCorrect: false,
        feedback:
          "Het normaliseren als 'iets dat alle vaders hebben' mist de persoonlijke betekenis van Koens ervaring. Hoewel sommige culturele factoren meespelen, beschrijft Koen een specifiek patroon van onbenoembaar onbehagen dat wijst op diepere, persoonlijke wortels.",
      },
    ],
    explanation:
      "Christopher Bollas' concept 'the unthought known' verwijst naar ervaringen die nooit bewust verwerkt zijn maar wel het gevoel en gedrag sturen. In het ouderschap worden deze ongedachte kennis-patronen vaak geactiveerd door de intimiteit met eigen kinderen.",
    research:
      "Bollas, C. (1987). The Shadow of the Object: Psychoanalysis of the Unthought Known. Columbia University Press.",
  },
  {
    id: "rf_46",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 46,
    question:
      "Willem (39) merkt dat hij in zijn opvoeding sterk reageert op de emoties van zijn gezin: als zijn vrouw gestrest is, wordt hij gestrest; als zijn zoon Jelle (7) boos is, wordt hij boos. Vanuit Bowens theorie over 'differentiation of self', wat betekent dit voor Willems reflectie?",
    options: [
      {
        id: "a",
        text: "Willem moet leren om emotioneel afstand te nemen van zijn gezin en zijn eigen pad te bewandelen.",
        isCorrect: false,
        feedback:
          "Differentiatie is niet hetzelfde als emotionele afstand of onthechting. Bowen benadrukt dat het gaat om het vermogen om verbonden te blijven én tegelijkertijd een eigen 'zelf' te behouden. Emotionele cut-off is juist een teken van lage differentiatie.",
      },
      {
        id: "b",
        text: "Willem heeft een lage differentiatie van zelf: hij kan moeilijk onderscheid maken tussen eigen emoties en die van anderen, wat zijn reflectief vermogen ondermijnt.",
        isCorrect: true,
        feedback:
          "Bij lage differentiatie versmelt je emotioneel met je omgeving. Voor reflectie is dit problematisch: je kunt pas goed nadenken over je eigen reacties als je weet welke emoties van jou zijn en welke je 'overneemt'. Bowen zag dit als een intergenerationeel patroon dat bewust doorbroken kan worden.",
      },
      {
        id: "c",
        text: "Dit toont juist hoge empathie en is een kracht als vader.",
        isCorrect: false,
        feedback:
          "Er is een belangrijk verschil tussen empathie (de ander begrijpen) en emotionele fusie (de emotie van de ander overnemen). Empathie vereist juist enige differentiatie: je voelt mee maar behoudt je eigen perspectief. Willem verliest zijn eigen perspectief, wat zijn vermogen om te helpen ondermijnt.",
      },
    ],
    explanation:
      "Murray Bowens concept 'differentiation of self' beschrijft het vermogen om emotioneel verbonden te zijn met anderen terwijl je een eigen, stabiel zelf behoudt. Lage differentiatie leidt tot emotionele reactiviteit en wordt intergenerationeel doorgegeven. Het verhogen van differentiatie is een centraal doel in reflectief ouderschap.",
    research:
      "Bowen, M. (1978). Family Therapy in Clinical Practice. Jason Aronson; Skowron, E.A. & Dendy, A.K. (2004). Differentiation of self and attachment in adulthood. Contemporary Family Therapy, 26(3), 337-357.",
  },
  {
    id: "rf_47",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 47,
    question:
      "Frank (43) merkt dat hij niet alleen nadenkt over wát hij doet als vader, maar ook over hóe hij nadenkt over zijn vaderschap. Hij vraagt zich af: 'Reflecteer ik op de juiste manier? Zijn mijn aannames over opvoeding wel kloppend?' Dit is een voorbeeld van:",
    options: [
      {
        id: "a",
        text: "Overanalyse die leidt tot besluiteloosheid — Frank moet stoppen met nadenken en meer doen.",
        isCorrect: false,
        feedback:
          "Hoewel overanalyse mogelijk is, beschrijft Frank hier geen verlamming maar een hoger niveau van denken. Het bevragen van je eigen denkpatronen is een teken van cognitieve rijpheid, niet van disfunctioneel piekeren. Het onderscheid zit in de kwaliteit: metacognitie is constructief, piekeren is circulair.",
      },
      {
        id: "b",
        text: "Metacognitie — het denken over het eigen denken — een hogere vorm van reflectie die essentieel is voor diepgaande persoonlijke groei als ouder.",
        isCorrect: true,
        feedback:
          "Metacognitie is het vermogen om je eigen cognitieve processen te observeren en evalueren. In ouderschap betekent dit: niet alleen reflecteren op wat je doet, maar ook op hoe je reflecteert, welke aannames je maakt en welke blinde vlekken je hebt. Dit is een kenmerk van expert-niveau reflectie.",
      },
      {
        id: "c",
        text: "Filosofisch gepieker zonder praktische waarde voor het dagelijks ouderschap.",
        isCorrect: false,
        feedback:
          "Metacognitie heeft juist grote praktische waarde. Ouders die hun eigen denken kunnen bevragen, zijn flexibeler in hun opvoeding. Ze passen hun aanpak sneller aan als iets niet werkt, omdat ze niet gevangen zitten in onbevraagde aannames.",
      },
    ],
    explanation:
      "Metacognitie — het vermogen om te reflecteren op het eigen denkproces — is een hoger-orde reflectieve vaardigheid. In opvoeding stelt metacognitie ouders in staat om niet alleen hun gedrag maar ook hun onderliggende aannames en denkpatronen te onderzoeken en bij te stellen.",
    research:
      "Flavell, J.H. (1979). Metacognition and cognitive monitoring: A new area of cognitive-developmental inquiry. American Psychologist, 34(10), 906-911; Luyten, P. et al. (2017). The Parental Reflective Functioning Questionnaire. Assessment, 24(8), 1010-1028.",
  },
  {
    id: "rf_48",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 48,
    question:
      "Marco (41) leest over intergenerationele transmissie van hechtingspatronen. Hij vraagt zich af: 'Als mijn vader onveilig gehecht was, en ik daardoor ook, geef ik dat dan automatisch door aan mijn kinderen Sara (5) en Ruben (3)?' Wat zegt het onderzoek?",
    options: [
      {
        id: "a",
        text: "Ja, hechtingspatronen worden automatisch doorgegeven van generatie op generatie zonder dat je er iets aan kunt veranderen.",
        isCorrect: false,
        feedback:
          "Dit is een deterministische misvatting. Hoewel er een significante intergenerationele overdracht is, is deze niet absoluut. De 'transmission gap' — het feit dat de overdracht niet perfect is — wijst juist op mogelijkheden voor verandering, vooral via reflectief vermogen.",
      },
      {
        id: "b",
        text: "Nee, er is een significante maar niet absolute overdracht. Het reflectief vermogen van de ouder is de belangrijkste moderator — bewuste reflectie kan de keten doorbreken.",
        isCorrect: true,
        feedback:
          "Dit is het hoopgevende antwoord uit het onderzoek. De intergenerationele overdracht is reëel maar niet deterministisch. Fonagy en anderen hebben aangetoond dat reflective functioning (mentaliserend vermogen) de belangrijkste factor is die bepaalt of een ouder het patroon doorgeeft of doorbreekt.",
      },
      {
        id: "c",
        text: "Hechtingspatronen worden niet intergenerationeel overgedragen — elk kind ontwikkelt een eigen, uniek hechtingspatroon onafhankelijk van de ouder.",
        isCorrect: false,
        feedback:
          "Dit ontkent de robuuste bevindingen uit decennia gehechtheidsonderzoek. De meta-analyse van Van IJzendoorn (1995) toont een significante overeenkomst van ongeveer 75% tussen de gehechtheidsclassificatie van ouder en kind. Er is wel degelijk transmissie, maar geen determinisme.",
      },
    ],
    explanation:
      "Intergenerationele transmissie van hechtingspatronen is een van de meest gerepliceerde bevindingen in de ontwikkelingspsychologie. Echter, de transmissie is niet absoluut. Reflective functioning is geïdentificeerd als de cruciale factor die bepaalt of onveilige patronen worden doorgegeven of doorbroken.",
    research:
      "Van IJzendoorn, M.H. (1995). Adult attachment representations, parental responsiveness, and infant attachment: A meta-analysis on the predictive validity of the Adult Attachment Interview. Psychological Bulletin, 117(3), 387-403; Fonagy, P. et al. (1991). The capacity for understanding mental states. Infant Mental Health Journal, 12(3), 201-218.",
  },
  {
    id: "rf_49",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 49,
    question:
      "Jeroen (37) merkt dat hij in zijn reflecties steeds zoekt naar één verklaring voor zijn gedrag als vader: 'Ik schreeuw omdat mijn vader schreeuwde.' Zijn therapeut suggereert dat de werkelijkheid complexer is. Vanuit het concept van mentaliseren, wat is hier het probleem?",
    options: [
      {
        id: "a",
        text: "Jeroen mentaliseert in een 'teleologische modus' — hij reduceert complex gedrag tot simpele, lineaire oorzaak-gevolgrelaties en mist de rijkdom van mentale toestanden.",
        isCorrect: true,
        feedback:
          "In de teleologische modus wordt gedrag alleen begrepen in termen van zichtbare, concrete oorzaken. Jeroen mist zo de laag van emoties, behoeften, conflicten en contextuele factoren die zijn gedrag beïnvloeden. Rijker mentaliseren zou betekenen: 'Ik schreeuw als ik me machteloos voel, moe ben, en herinnerd word aan mijn eigen kindertijd.'",
      },
      {
        id: "b",
        text: "Jeroen doet het uitstekend — het herkennen van generatiepatronen is het hoogste niveau van reflectie.",
        isCorrect: false,
        feedback:
          "Het herkennen van generatiepatronen is waardevol maar niet het eindpunt. Wanneer het een enkelvoudige, rigide verklaring wordt, beperkt het juist het reflectief vermogen. Diepere reflectie omvat meerdere perspectieven, tegenstrijdige gevoelens en contextuele nuance.",
      },
      {
        id: "c",
        text: "Het maakt niet uit hoe je het verklaart — het gaat erom dat je stopt met schreeuwen.",
        isCorrect: false,
        feedback:
          "Gedragsverandering zonder begrip is fragiel. Als Jeroen niet begrijpt welke complexe mix van factoren zijn schreeuwen voedt, zal hij bij voldoende stress terugvallen. Bovendien is het begrijpen van de complexiteit een vorm van zelfcompassie: het erkent dat gedrag zelden één simpele oorzaak heeft.",
      },
    ],
    explanation:
      "Fonagy onderscheidt verschillende modi van mentaliseren. De teleologische modus reduceert gedrag tot simpele oorzaak-gevolg. Rijker mentaliseren omvat het herkennen van meerdere, soms tegenstrijdige mentale toestanden die gedrag beïnvloeden. Dit is essentieel voor genuanceerde zelfreflectie.",
    research:
      "Bateman, A.W. & Fonagy, P. (2016). Mentalization-Based Treatment for Personality Disorders: A Practical Guide. Oxford University Press.",
  },
  {
    id: "rf_50",
    skill: "Reflectie",
    type: "quiz",
    difficulty: "expert",
    order: 50,
    question:
      "Dennis (44) heeft na twee jaar intensieve reflectie en therapie een moment van inzicht: hij begrijpt nu dat zijn neiging om alles voor zijn kinderen Sven (10) en Mila (7) te controleren voortkomt uit zijn eigen angst om verlaten te worden — een angst die hij als kind nooit mocht voelen. Dit inzicht verandert niet alleen zijn begrip maar ook zijn lichaam voelt anders. Wat beschrijft dit moment het beste?",
    options: [
      {
        id: "a",
        text: "Een cognitief inzicht dat Dennis intellectueel begrijpt maar dat geen echte verandering teweegbrengt.",
        isCorrect: false,
        feedback:
          "Dennis beschrijft juist méér dan cognitief inzicht: zijn lichaam verandert mee. Dit wijst op een diepere integratie. Puur cognitieve inzichten ('ik weet dat ik controlerend ben') veranderen zelden gedrag. Wanneer het lichaam mee resoneert, is er sprake van een diepere transformatie.",
      },
      {
        id: "b",
        text: "Een moment van integratie waarin bewuste reflectie, emotionele verwerking en lichamelijke ervaring samenkomen — kenmerkend voor diepe verandering in reflective functioning en earned security.",
        isCorrect: true,
        feedback:
          "Dit beschrijft het moment waarop inzicht werkelijk transformerend wordt: het hoofd, het hart en het lichaam zijn geïntegreerd. In gehechtheidsonderzoek wordt dit gezien als de kern van 'earned secure attachment' — niet alleen weten wat er was, maar het voelen en integreren. Dit is het resultaat van langdurige, moedige reflectie.",
      },
      {
        id: "c",
        text: "Een emotionele catharsis die tijdelijk is en waarvan de effecten snel zullen verdwijnen.",
        isCorrect: false,
        feedback:
          "Catharsis is een tijdelijke emotionele ontlading. Wat Dennis beschrijft is anders: het is het resultaat van twee jaar werk en omvat een structurele verandering in begrip én beleving. Waar catharsis vervliegt, beklijft geïntegreerd inzicht omdat het geworteld is in diepgaande reflectieve verwerking.",
      },
    ],
    explanation:
      "Diepe persoonlijke verandering in ouderschap vereist meer dan cognitief inzicht alleen. Wanneer bewustzijn, emotie en lichaamservaring integreren, ontstaat wat Siegel 'interpersonal neurobiology' noemt: een transformatie die zich op alle niveaus manifesteert. Dit is het doel van reflectief ouderschap op expert-niveau.",
    research:
      "Siegel, D.J. (2012). The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are (2nd ed.). Guilford Press; Main, M. & Goldwyn, R. (1998). Adult Attachment Scoring and Classification Systems. Unpublished manuscript, University of California at Berkeley.",
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
