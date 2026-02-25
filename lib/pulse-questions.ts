import type { PulseQuestion } from './types';

// 365 Vader Pulse check-in vragen – ~46 per skill
// Antwoord 3 (index 3) is altijd: "Kind niet gezien vandaag"
// Antwoorden zijn observatiegericht, niet emotie-georiënteerd

export const PULSE_QUESTIONS: PulseQuestion[] = [

  // ── AANWEZIGHEID (46 vragen) ────────────────────────────────────

  {
    id: 'pulse_aanw_01',
    skill: 'Aanwezigheid',
    vraag: 'Had je telefoon vandaag invloed op hoe aanwezig je was bij je kind?',
    antwoorden: [
      'Nee, telefoon weg – was er echt',
      'Af en toe gecheckt, maar grotendeels aanwezig',
      'Telefoon trok me vaker weg dan ik wilde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Ouders die hun telefoon in een andere kamer leggen zijn aantoonbaar responsiever – ook als ze hem niet gebruiken. De aanwezigheid van het apparaat alleen al trekt aandacht.',
    bron: 'Ward et al. (2017) – Brain Drain',
  },

  {
    id: 'pulse_aanw_02',
    skill: 'Aanwezigheid',
    vraag: 'Was er een moment vandaag waarop je kind jou aankeek en jij terugkeek?',
    antwoorden: [
      'Ja, meerdere keren bewust oogcontact',
      'Eén moment dat ik me herinner',
      'Ik denk het niet – was met andere dingen bezig',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Oogcontact activeert het sociale brein van je kind. Drie seconden echte blik zegt meer dan tien minuten halfaanwezig zijn.',
    bron: 'Stern (1985) – The Interpersonal World of the Infant',
  },

  {
    id: 'pulse_aanw_03',
    skill: 'Aanwezigheid',
    vraag: 'Heb je je kind vandaag ergens mee bezig gezien zonder dat je iets zei of deed?',
    antwoorden: [
      'Ja, ik keek gewoon toe en genoot',
      'Even, maar ik mengde me er snel in',
      'Nee, ik was zelf bezig',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Stil toekijken zonder ingrijpen – "sportive watching" – geeft kinderen het gevoel dat ze gezien worden zonder beoordeeld te worden. Een krachtige vorm van aanwezigheid.',
    bron: 'Panksepp (1998) – Affective Neuroscience',
  },

  {
    id: 'pulse_aanw_04',
    skill: 'Aanwezigheid',
    vraag: 'Hoe lang was je langste ononderbroken moment met je kind vandaag?',
    antwoorden: [
      'Meer dan 20 minuten volledig aanwezig',
      'Zo\'n 5-10 minuten',
      'Nauwelijks – steeds iets tussendoor',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kwaliteit van aanwezigheid telt meer dan duur. Maar kinderen hebben minstens één aaneengesloten moment per dag nodig om zich echt verbonden te voelen.',
    bron: 'Bowlby (1988) – A Secure Base',
  },

  {
    id: 'pulse_aanw_05',
    skill: 'Aanwezigheid',
    vraag: 'Was je vandaag fysiek bij je kind maar innerlijk ergens anders?',
    antwoorden: [
      'Nee, was er ook met mijn hoofd',
      'Even, maar ik merkte het en stuurde bij',
      'Ja, mijn gedachten waren elders',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen voelen het verschil tussen lichamelijke en mentale aanwezigheid. Een vader die er "bij" is maar wegdroomt, wordt door het kind ervaren als afwezig.',
    bron: 'Siegel & Hartzell (2003) – Parenting from the Inside Out',
  },

  {
    id: 'pulse_aanw_06',
    skill: 'Aanwezigheid',
    vraag: 'Heeft je kind vandaag iets aan jou gevraagd dat je verraste?',
    antwoorden: [
      'Ja, en ik was er volledig voor',
      'Ja, maar ik was afgeleid',
      'Niet dat ik me kan herinneren',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De vragen van kinderen zijn invitaties tot verbinding. Elk gemist moment van echt luisteren is een kleine gemiste kans op hechting.',
    bron: 'Gottman & DeClaire (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_aanw_07',
    skill: 'Aanwezigheid',
    vraag: 'Heb je je kind vandaag ergens voor zien kiezen of beslissen?',
    antwoorden: [
      'Ja, en ik liet het volledig aan hem/haar',
      'Ja, maar ik stuurde toch bij',
      'Ik denk dat ik het gemist heb',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Aanwezig zijn betekent ook getuige zijn van de autonomie van je kind. Niet elk moment van je kind vraagt jouw inbreng.',
    bron: 'Deci & Ryan (2000) – Self-Determination Theory',
  },

  {
    id: 'pulse_aanw_08',
    skill: 'Aanwezigheid',
    vraag: 'Wanneer je kind vandaag iets zei, luisterde je dan om te begrijpen of om te antwoorden?',
    antwoorden: [
      'Om te begrijpen – ik liet het landen',
      'Beetje van beide',
      'Eerlijk gezegd vooral om te reageren',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De meeste mensen luisteren om te antwoorden, niet om te begrijpen. Kinderen voelen dat verschil direct. Echte luisteraars laten een stilte vallen voor ze reageren.',
    bron: 'Covey (1989) – The 7 Habits of Highly Effective People',
  },

  {
    id: 'pulse_aanw_09',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag met je kind op de grond gezeten om samen te spelen?',
    antwoorden: [
      'Ja, ik ben naast mijn kind gaan zitten en heb meegespeeld op zijn/haar niveau',
      'Ik heb even meegespeeld maar werd al snel afgeleid',
      'Ik heb vanaf de bank toegekeken terwijl mijn kind speelde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer een vader letterlijk op het niveau van het kind gaat zitten, ervaart het kind gelijkwaardigheid en nabijheid. Dit versterkt de hechtingsband doordat het kind zich gezien voelt in zijn eigen wereld.',
    bron: 'Stern, D. (1985) – The Interpersonal World of the Infant',
  },

  {
    id: 'pulse_aanw_10',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag gemerkt wanneer je kind van activiteit wisselde?',
    antwoorden: [
      'Ja, ik heb de overgangen bewust opgemerkt en benoemd',
      'Ik merkte het bij één of twee overgangen',
      'Ik realiseerde me pas achteraf dat mijn kind iets anders was gaan doen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Aandacht voor de overgangen in het spel van een kind laat zien dat een ouder de innerlijke wereld van het kind volgt. Dit bevordert het mentaliserend vermogen van zowel vader als kind.',
    bron: 'Fonagy, P. (2002) – Affect Regulation, Mentalization, and the Development of the Self',
  },

  {
    id: 'pulse_aanw_11',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag een maaltijd samen met je kind gegeten zonder scherm erbij?',
    antwoorden: [
      'Ja, we hebben samen gegeten en gepraat zonder enig scherm',
      'We aten samen maar er stond een scherm aan op de achtergrond',
      'We aten in dezelfde ruimte maar ieder deed zijn eigen ding',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Gezamenlijke maaltijden zonder afleiding zijn een van de sterkste voorspellers van welzijn bij kinderen. Het ritueel van samen eten creëert een voorspelbare, veilige structuur.',
    bron: 'Fiese, B.H. (2006) – Family Routines and Rituals',
  },

  {
    id: 'pulse_aanw_12',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag het tempo van je kind gevolgd in plaats van je eigen tempo op te leggen?',
    antwoorden: [
      'Ja, ik heb bewust het tempo van mijn kind aangehouden',
      'Ik probeerde het maar viel soms terug in mijn eigen ritme',
      'Ik merkte dat ik mijn kind vooral aanstuurde in mijn tempo',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen hebben een trager verwerkingstempo dan volwassenen. Wanneer een vader zich aanpast aan het ritme van het kind, ervaart het kind autonomie en voelt het zich gerespecteerd.',
    bron: 'Winnicott, D.W. (1971) – Playing and Reality',
  },

  {
    id: 'pulse_aanw_13',
    skill: 'Aanwezigheid',
    vraag: 'Was je vandaag aanwezig bij een moment waarop je kind iets voor het eerst deed of probeerde?',
    antwoorden: [
      'Ja, ik was erbij en heb het moment samen met mijn kind beleefd',
      'Ik hoorde er achteraf over van mijn kind of partner',
      'Ik weet niet of mijn kind vandaag iets nieuws heeft geprobeerd',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het getuige zijn van eerste ervaringen versterkt het gevoel van gedeelde beleving. Een kind dat ziet dat papa er op belangrijke momenten is, ontwikkelt een veilig werkmodel van beschikbaarheid.',
    bron: 'Bowlby, J. (1988) – A Secure Base: Parent-Child Attachment and Healthy Human Development',
  },

  {
    id: 'pulse_aanw_14',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag met je kind gewandeld of buiten tijd doorgebracht?',
    antwoorden: [
      'Ja, we zijn samen naar buiten geweest en ik was met mijn aandacht bij mijn kind',
      'We waren buiten maar ik was grotendeels met andere dingen bezig',
      'We zijn vandaag niet samen buiten geweest',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Samen buiten zijn verlaagt het cortisolniveau bij zowel vader als kind. De natuur biedt een prikkelarme omgeving die diepere verbinding mogelijk maakt.',
    bron: 'Kabat-Zinn, M. & Kabat-Zinn, J. (1997) – Everyday Blessings: The Inner Work of Mindful Parenting',
  },

  {
    id: 'pulse_aanw_15',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag je kind fysiek aangeraakt op een liefdevolle manier (knuffel, aai, hand vasthouden)?',
    antwoorden: [
      'Ja, er waren meerdere momenten van bewuste, liefdevolle aanraking',
      'Er was kort fysiek contact, bijvoorbeeld bij begroeting',
      'Er is vandaag geen bewust fysiek contact geweest',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Liefdevolle aanraking activeert het oxytocinesysteem en het ventrale vagale systeem, waardoor het kind zich veilig en verbonden voelt. Vaders die regelmatig knuffelen bevorderen de emotionele regulatie van hun kind.',
    bron: 'Porges, S. (2011) – The Polyvagal Theory: Neurophysiological Foundations of Emotions, Attachment, Communication, and Self-Regulation',
  },

  {
    id: 'pulse_aanw_16',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag je kind geholpen met een taak zonder het over te nemen?',
    antwoorden: [
      'Ja, ik heb naast mijn kind gezeten en alleen geholpen waar nodig',
      'Ik begon met helpen maar nam het uiteindelijk grotendeels over',
      'Ik heb de taak voor mijn kind gedaan omdat het sneller moest',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer een vader ondersteunt zonder over te nemen, werkt hij binnen de zone van naaste ontwikkeling. Het kind leert dat het competent is en dat papa vertrouwen heeft in zijn kunnen.',
    bron: 'Vygotsky, L. (1978) – Mind in Society: The Development of Higher Psychological Processes',
  },

  {
    id: 'pulse_aanw_17',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag een ritueel of vaste gewoonte met je kind gedeeld (voorlezen, tandenpoetsen, instapritueel)?',
    antwoorden: [
      'Ja, ik was er bewust bij en het voelde als een verbindend moment',
      'Het ritueel vond plaats maar ik deed het op de automatische piloot',
      'Het ritueel is vandaag overgeslagen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Rituelen creëren voorspelbaarheid en veiligheid. Een kind dat weet dat papa elke avond voorleest, bouwt een intern model op van een betrouwbare hechtingsfiguur.',
    bron: 'Sroufe, L.A. (1996) – Emotional Development: The Organization of Emotional Life in the Early Years',
  },

  {
    id: 'pulse_aanw_18',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag gemerkt hoe je kind keek toen je thuiskwam of de kamer binnenkwam?',
    antwoorden: [
      'Ja, ik heb bewust opgelet hoe mijn kind reageerde en daar op ingespeeld',
      'Ik merkte de reactie wel maar ging snel door met mijn eigen bezigheden',
      'Ik heb er niet op gelet hoe mijn kind reageerde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De herenigingsreactie van een kind is een directe indicator van de hechtingskwaliteit. Een vader die dit moment bewust beleeft, kan de emotionele toestand van zijn kind beter aflezen.',
    bron: 'Ainsworth, M. (1978) – Patterns of Attachment: A Psychological Study of the Strange Situation',
  },

  {
    id: 'pulse_aanw_19',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag stilte gedeeld met je kind — samen zijn zonder dat er gepraat hoefde te worden?',
    antwoorden: [
      'Ja, we hadden een rustig moment van samen zijn zonder woorden',
      'Er was een kort stil moment maar ik vulde het al snel op',
      'Alle momenten samen waren gevuld met praten of activiteit',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De capaciteit om samen stil te zijn zonder ongemak is een teken van veilige hechting. Het kind leert dat nabijheid niet altijd prestatie of communicatie vereist.',
    bron: 'Winnicott, D.W. (1958) – The Capacity to Be Alone',
  },

  {
    id: 'pulse_aanw_20',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag opgemerkt welk speelgoed of welke activiteit je kind het langst boeide?',
    antwoorden: [
      'Ja, ik zag precies waar mijn kind in opging en heb dat gerespecteerd',
      'Ik merkte het wel op maar onderbrak het voor iets anders',
      'Ik heb niet opgelet waarmee mijn kind het meest bezig was',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer een kind in een flow-toestand verkeert, is het volledig betrokken bij de activiteit. Een vader die dit herkent en beschermt, ondersteunt de intrinsieke motivatie van zijn kind.',
    bron: 'Csikszentmihalyi, M. (1990) – Flow: The Psychology of Optimal Experience',
  },

  {
    id: 'pulse_aanw_21',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag bewust je werkdag losgelaten voordat je tijd met je kind doorbracht?',
    antwoorden: [
      'Ja, ik heb een bewust overgangsmoment genomen om mijn hoofd leeg te maken',
      'Ik probeerde het maar merkte dat werkgedachten bleven terugkomen',
      'Ik ging direct van werk naar ouderschap zonder overgang',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Een bewuste overgang tussen werk en gezin helpt de prefrontale cortex omschakelen van taakgericht naar relatiegericht functioneren. Dit vergroot de kwaliteit van aanwezigheid.',
    bron: 'Siegel, D. (2010) – Mindsight: The New Science of Personal Transformation',
  },

  {
    id: 'pulse_aanw_22',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag het verhaal van je kind aangehoord over iets dat op school of bij vriendjes gebeurde?',
    antwoorden: [
      'Ja, ik heb het volledige verhaal gehoord en doorgevraagd',
      'Mijn kind begon te vertellen maar ik was afgeleid',
      'Mijn kind heeft vandaag niets verteld of ik heb er niet naar gevraagd',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer een vader het narratief van zijn kind faciliteert, helpt hij het kind ervaringen te integreren in een coherent levensverhaal. Dit bevordert de ontwikkeling van het autobiografisch geheugen.',
    bron: 'Siegel, D. & Bryson, T. (2011) – The Whole-Brain Child',
  },

  {
    id: 'pulse_aanw_23',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag samen met je kind gelachen om iets grappigs?',
    antwoorden: [
      'Ja, we hebben samen hartelijk gelachen',
      'Mijn kind lachte en ik glimlachte mee',
      'Er was vandaag geen moment van samen lachen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Gedeeld lachen activeert het sociale betrokkenheidssysteem en synchroniseert de fysiologische toestanden van vader en kind. Het is een krachtige vorm van co-regulatie.',
    bron: 'Porges, S. (2017) – The Pocket Guide to the Polyvagal Theory',
  },

  {
    id: 'pulse_aanw_24',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag bewust je kind laten uitpraten zonder te onderbreken?',
    antwoorden: [
      'Ja, ik heb gewacht tot mijn kind klaar was met praten voordat ik reageerde',
      'Ik onderbrak een paar keer maar corrigeerde mezelf',
      'Ik merkte achteraf dat ik mijn kind regelmatig onderbrak',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Een kind dat ervaart dat het mag uitpraten, ontwikkelt vertrouwen in de waarde van zijn eigen gedachten. Dit is de basis voor een veilige communicatiestijl in latere relaties.',
    bron: 'Hughes, D. (2009) – Attachment-Focused Parenting',
  },

  {
    id: 'pulse_aanw_25',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag opgemerkt hoe je kind zich bewoog — rustig, druk, gespannen, ontspannen?',
    antwoorden: [
      'Ja, ik merkte de lichamelijke toestand van mijn kind op en stemde mijn energie erop af',
      'Ik merkte het wel op maar deed er niets mee',
      'Ik heb niet bewust gelet op hoe mijn kind zich lichamelijk gedroeg',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het lichaam van een kind geeft voortdurend informatie over zijn emotionele toestand. Een vader die lichamelijke signalen leest, kan sneller inspelen op onderliggende behoeften.',
    bron: 'Van der Kolk, B. (2014) – The Body Keeps the Score',
  },

  {
    id: 'pulse_aanw_26',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag een moment gehad waarin je volledig opging in een activiteit samen met je kind?',
    antwoorden: [
      'Ja, ik verloor even het besef van tijd terwijl we samen bezig waren',
      'Er waren korte momenten van gedeelde focus maar ze duurden niet lang',
      'Ik was wel aanwezig maar ging nergens echt in op',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Gedeelde flow-ervaringen tussen ouder en kind zijn momenten van diepe afstemming. De neurale synchronisatie die hierbij optreedt versterkt de hechtingsrelatie op biologisch niveau.',
    bron: 'Csikszentmihalyi, M. (1997) – Finding Flow: The Psychology of Engagement with Everyday Life',
  },

  {
    id: 'pulse_aanw_27',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag opgemerkt wat je kind tekende, bouwde of maakte?',
    antwoorden: [
      'Ja, ik heb het bekeken en er met interesse naar gevraagd',
      'Ik zag het terloops maar ging er niet op in',
      'Ik weet niet of mijn kind vandaag iets heeft gemaakt',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Creatieve uitingen zijn een venster op de binnenwereld van een kind. Wanneer een vader oprechte belangstelling toont, voelt het kind dat zijn innerlijke beleving ertoe doet.',
    bron: 'Stern, D. (1995) – The Motherhood Constellation: A Unified View of Parent-Infant Psychotherapy',
  },

  {
    id: 'pulse_aanw_28',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag je kind naar bed gebracht en er echt bij stilgestaan?',
    antwoorden: [
      'Ja, ik heb rustig de tijd genomen en het inslapritueel bewust beleefd',
      'Ik heb mijn kind naar bed gebracht maar was met mijn hoofd al bij de avond',
      'Iemand anders heeft mijn kind naar bed gebracht',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het inslapritueel is het laatste contactmoment van de dag. Een veilig, rustig afscheid voor de nacht reguleert het stresssysteem van het kind en bevordert de slaapkwaliteit.',
    bron: 'Schore, A. (2001) – Affect Regulation and the Origin of the Self',
  },

  {
    id: 'pulse_aanw_29',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag gemerkt dat je kind naar jou keek om te checken of je er was (social referencing)?',
    antwoorden: [
      'Ja, ik zag dat mijn kind naar me keek en heb bewust teruggeknikt of geglimlacht',
      'Ik denk dat het gebeurde maar ik weet het niet zeker',
      'Ik heb er niet op gelet of mijn kind naar me keek',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Social referencing — het kind dat naar de ouder kijkt voor bevestiging — is een fundamenteel hechtingsgedrag. Een responsieve reactie van de vader geeft het kind het signaal dat de wereld veilig is.',
    bron: 'Bowlby, J. (1969) – Attachment and Loss, Vol. 1: Attachment',
  },

  {
    id: 'pulse_aanw_30',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag iets samen met je kind gedaan wat jíj leuk vindt en gedeeld waarom?',
    antwoorden: [
      'Ja, ik heb mijn kind meegenomen in een eigen interesse en mijn enthousiasme gedeeld',
      'Ik deed iets voor mezelf en mijn kind was erbij maar ik legde weinig uit',
      'Ik heb vandaag niets van mijn eigen interesses met mijn kind gedeeld',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer een vader zijn eigen passies deelt, leert het kind dat volwassenen ook innerlijk leven hebben. Dit bevordert het mentaliserend vermogen en biedt een model voor intrinsieke motivatie.',
    bron: 'Fonagy, P. & Target, M. (1997) – Attachment and Reflective Function',
  },

  {
    id: 'pulse_aanw_31',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag je kind begroet met volle aandacht toen jullie elkaar voor het eerst zagen?',
    antwoorden: [
      'Ja, ik ben gestopt met wat ik deed en heb mijn kind bewust verwelkomd',
      'Ik begroette mijn kind maar was tegelijk met iets anders bezig',
      'Ik was er wel maar heb mijn kind niet echt begroet',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het eerste contactmoment van de dag zet de toon voor de hele relatie die dag. Een warme, onverdeelde begroeting activeert het beloningssysteem van het kind en versterkt het gevoel van welkom zijn.',
    bron: 'Hughes, D. & Baylin, J. (2012) – Brain-Based Parenting',
  },

  {
    id: 'pulse_aanw_32',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag een conflict of ruzie tussen kinderen zien ontstaan en was je er bij?',
    antwoorden: [
      'Ja, ik was er bij, observeerde eerst en hielp toen het nodig was',
      'Ik greep direct in zonder eerst te observeren wat er speelde',
      'Er was een conflict maar ik merkte het pas achteraf',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Aanwezigheid bij conflicten biedt kinderen een veilige basis van waaruit ze leren onderhandelen. Een vader die eerst observeert en dan pas begeleidt, geeft het kind ruimte om zelf oplossingen te verkennen.',
    bron: 'Gottman, J. (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_aanw_33',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag de stemming van je kind herkend nog voordat het iets zei?',
    antwoorden: [
      'Ja, ik merkte aan houding of gezichtsuitdrukking hoe mijn kind zich voelde',
      'Ik had een vermoeden maar checkte het niet',
      'Ik merkte de stemming pas toen mijn kind het zelf aangaf',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het vermogen om non-verbale signalen te lezen voordat het kind ze verwoordt, is een teken van afgestemd ouderschap. Dit geeft het kind de ervaring werkelijk gekend te worden.',
    bron: 'Trevarthen, C. (1998) – The Concept and Foundations of Infant Intersubjectivity',
  },

  {
    id: 'pulse_aanw_34',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag samen met je kind ergens op gewacht (in de auto, bij de dokter, in een rij)?',
    antwoorden: [
      'Ja, en ik heb de wachttijd benut om samen te praten of te spelen',
      'We wachtten samen maar ik zat op mijn telefoon',
      'Er was geen wachtmoment vandaag of ik was er niet bij',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Juist alledaagse tussenmomenten bieden kansen voor ongedwongen contact. Kinderen onthouden niet de grote uitjes maar de kleine momenten van verbinding in het dagelijks leven.',
    bron: 'Kabat-Zinn, M. & Kabat-Zinn, J. (1997) – Everyday Blessings: The Inner Work of Mindful Parenting',
  },

  {
    id: 'pulse_aanw_35',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag je kind gadegeslagen terwijl het met andere kinderen speelde?',
    antwoorden: [
      'Ja, ik heb bewust gekeken hoe mijn kind omgaat met andere kinderen',
      'Ik was in de buurt maar lette niet echt op de interacties',
      'Mijn kind speelde met anderen maar ik was er niet bij',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Door het sociale spel van je kind te observeren, leer je hoe het zich verhoudt tot leeftijdsgenoten. Dit geeft waardevolle informatie over de sociale ontwikkeling en eventuele ondersteuningsbehoefte.',
    bron: 'Sroufe, L.A. (2005) – The Development of the Person',
  },

  {
    id: 'pulse_aanw_36',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag samen met je kind iets klaargemaakt in de keuken?',
    antwoorden: [
      'Ja, we hebben samen gekookt of gebakken en ik betrok mijn kind erbij',
      'Mijn kind was in de keuken maar ik deed het meeste zelf',
      'Ik heb vandaag niet samen met mijn kind in de keuken gestaan',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Samen koken biedt een rijke sensorische ervaring en is een natuurlijke vorm van scaffolding. Het kind leert vaardigheden terwijl de gezamenlijke activiteit de hechtingsrelatie versterkt.',
    bron: 'Vygotsky, L. (1978) – Mind in Society: The Development of Higher Psychological Processes',
  },

  {
    id: 'pulse_aanw_37',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag samen met je kind naar muziek geluisterd of samen gezongen?',
    antwoorden: [
      'Ja, we hebben bewust samen geluisterd of gezongen en ervan genoten',
      'Er stond muziek op maar we deelden het moment niet echt',
      'Er was vandaag geen muziekmoment samen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Muziek synchroniseert de hartslag en ademhaling van mensen die samen luisteren. Bij vader en kind versterkt dit de fysiologische co-regulatie en creëert het een gedeelde emotionele ervaring.',
    bron: 'Trevarthen, C. (1999) – Musicality and the Intrinsic Motive Pulse',
  },

  {
    id: 'pulse_aanw_38',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag iets gezien waar je kind moeite mee had, zonder meteen in te grijpen?',
    antwoorden: [
      'Ja, ik zag de worsteling en gaf mijn kind de ruimte om het zelf op te lossen',
      'Ik zag het maar greep vrij snel in om te helpen',
      'Ik merkte niet dat mijn kind ergens moeite mee had',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het verdragen van de worsteling van je kind zonder direct in te grijpen bevordert de frustratietolerantie. Het kind leert dat het competent is en dat papa vertrouwen heeft in zijn vermogen.',
    bron: 'Winnicott, D.W. (1965) – The Maturational Processes and the Facilitating Environment',
  },

  {
    id: 'pulse_aanw_39',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag opgemerkt wanneer je kind moe werd?',
    antwoorden: [
      'Ja, ik merkte de tekenen van vermoeidheid en heb het ritme aangepast',
      'Ik merkte het pas toen mijn kind het zelf zei of ging huilen',
      'Ik heb er niet op gelet of mijn kind moe was',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het herkennen van vermoeidheidssignalen voordat een kind overprikkeld raakt, voorkomt veel conflicten. Een vader die dit leest, fungeert als externe regulator van het stresssysteem van het kind.',
    bron: 'Schore, A. (2003) – Affect Dysregulation and Disorders of the Self',
  },

  {
    id: 'pulse_aanw_40',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag gemerkt dat je kind hulp vroeg — met woorden of met gedrag?',
    antwoorden: [
      'Ja, ik heb het hulpverzoek opgemerkt en er direct op gereageerd',
      'Ik merkte het maar was te druk om direct te reageren',
      'Ik weet niet zeker of mijn kind vandaag om hulp vroeg',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Niet alle hulpvragen zijn verbaal — veel jonge kinderen communiceren hun behoeften via gedrag. Een vader die ook non-verbale verzoeken herkent, bouwt een veilige hechtingsrelatie op.',
    bron: 'Bowlby, J. (1973) – Attachment and Loss, Vol. 2: Separation',
  },

  {
    id: 'pulse_aanw_41',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag met je kind gesproken over wat het morgen gaat doen?',
    antwoorden: [
      'Ja, we hebben samen vooruitgekeken en mijn kind was er enthousiast over',
      'Ik noemde kort wat er morgen op het programma stond',
      'We hebben het niet over morgen gehad',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Samen vooruitkijken helpt het kind een tijdsbesef te ontwikkelen en verlaagt anticipatie-angst. Het geeft ook het signaal dat de vader betrokken is bij het leven van het kind buiten het huidige moment.',
    bron: 'Siegel, D. (2012) – The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are',
  },

  {
    id: 'pulse_aanw_42',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag je kind zien spelen met fantasie of doen-alsof?',
    antwoorden: [
      'Ja, ik heb het fantasiespel gezien en er misschien zelfs aan meegedaan',
      'Ik zag het kort maar ging verder met mijn eigen bezigheden',
      'Ik weet niet of mijn kind vandaag fantasiespel had',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Fantasiespel is cruciaal voor de ontwikkeling van het mentaliserend vermogen. Wanneer een vader dit spel waarneemt of er in meegaat, ondersteunt hij het vermogen van zijn kind om zich in te leven in anderen.',
    bron: 'Fonagy, P. (2002) – Affect Regulation, Mentalization, and the Development of the Self',
  },

  {
    id: 'pulse_aanw_43',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag samen met je kind naar iets gekeken — een dier, een vliegtuig, de wolken?',
    antwoorden: [
      'Ja, we deelden een moment van gezamenlijke aandacht voor iets in onze omgeving',
      'Mijn kind wees iets aan maar ik keek niet echt mee',
      'Er was geen gedeeld kijkmoment vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Joint attention — samen ergens naar kijken — is een van de vroegste vormen van sociale verbinding. Het vormt de basis voor gedeelde betekenisgeving en taalverwerving.',
    bron: 'Stern, D. (1985) – The Interpersonal World of the Infant',
  },

  {
    id: 'pulse_aanw_44',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag bewust een moment voor jezelf genomen zodat je daarna meer aanwezig kon zijn voor je kind?',
    antwoorden: [
      'Ja, ik nam een pauze en merkte dat ik daarna beter aanwezig was',
      'Ik had een pauze nodig maar nam die niet, waardoor ik minder aanwezig was',
      'Ik stond er niet bij stil dat ik een pauze nodig had',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Zelfzorg is geen luxe maar een voorwaarde voor aanwezigheid. Een vader die zijn eigen behoeften herkent en honoreert, heeft meer regulatiecapaciteit beschikbaar voor zijn kind.',
    bron: 'Hughes, D. & Baylin, J. (2012) – Brain-Based Parenting',
  },

  {
    id: 'pulse_aanw_45',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag iets nieuws geleerd over je kind — een voorkeur, gedachte of eigenschap die je nog niet kende?',
    antwoorden: [
      'Ja, ik ontdekte iets nieuws over wie mijn kind is',
      'Ik had het gevoel dat er iets was maar kon het niet benoemen',
      'Ik heb vandaag niets nieuws ontdekt over mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Een kind is voortdurend in ontwikkeling. De vader die elke dag openstaat om zijn kind opnieuw te leren kennen, voorkomt dat hij reageert op een verouderd beeld in plaats van het werkelijke kind.',
    bron: 'Stern, D. (2004) – The Present Moment in Psychotherapy and Everyday Life',
  },

  {
    id: 'pulse_aanw_46',
    skill: 'Aanwezigheid',
    vraag: 'Heb je vandaag gemerkt hoe je kind afscheid nam toen jullie uit elkaar gingen?',
    antwoorden: [
      'Ja, ik heb bewust afscheid genomen en aandacht gegeven aan hoe mijn kind reageerde',
      'Het afscheid ging snel en ik lette er niet echt op',
      'Ik ben weggegaan zonder echt afscheid te nemen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het afscheidsmoment is net zo belangrijk als de hereniging. Een voorspelbaar, warm afscheid geeft het kind vertrouwen dat de vader terugkomt en dat de verbinding blijft bestaan, ook op afstand.',
    bron: 'Bowlby, J. (1973) – Attachment and Loss, Vol. 2: Separation',
  },

  // ── EMOTIECOACHING (46 vragen) ──────────────────────────────────

  {
    id: 'pulse_emot_01',
    skill: 'Emotiecoaching',
    vraag: 'Heeft je kind vandaag een sterke emotie getoond?',
    antwoorden: [
      'Ja, en ik heb de emotie benoemd',
      'Ja, maar ik heb het genegeerd of opgelost',
      'Niet echt – rustige dag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het benoemen van een emotie ("je bent boos") halveert de activiteit van de amygdala. Dat ene woord kalmeert sneller dan elke redenering.',
    bron: 'Lieberman et al. (2007) – Putting Feelings into Words',
  },

  {
    id: 'pulse_emot_02',
    skill: 'Emotiecoaching',
    vraag: 'Was er een moment vandaag dat je kind verdrietig was?',
    antwoorden: [
      'Ja, ik zat er naast zonder het op te lossen',
      'Ja, ik heb geprobeerd het snel weg te nemen',
      'Niet vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De reflex om verdriet weg te halen is begrijpelijk maar contraproductief. Kinderen die leren dat verdriet mag zijn, ontwikkelen meer emotionele veerkracht.',
    bron: 'Gottman (1997) – The Heart of Parenting',
  },

  {
    id: 'pulse_emot_03',
    skill: 'Emotiecoaching',
    vraag: 'Hoe reageerde jij vandaag op de boosheid van je kind?',
    antwoorden: [
      'Rustig en begripvol – ik bleef bij mezelf',
      'Ik probeerde het, maar escaleerde licht mee',
      'Ik werd zelf ook boos of liep weg',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vaders die bij boosheid van het kind rustig blijven, reguleren actief het zenuwstelsel van het kind mee. Jouw kalmte is biologisch besmettelijk.',
    bron: 'Porges (2011) – The Polyvagal Theory',
  },

  {
    id: 'pulse_emot_04',
    skill: 'Emotiecoaching',
    vraag: 'Heb je je kind vandaag gevraagd hoe het zich voelde?',
    antwoorden: [
      'Ja, en we hadden een echt gesprek erover',
      'Ja, maar het bleef oppervlakkig',
      'Nee, dat is er niet van gekomen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die dagelijks gevraagd worden naar hun gevoel, bouwen een rijkere emotionele woordenschat op – en dat beschermt hen later tegen angst en depressie.',
    bron: 'Fivush et al. (2003) – Family Narratives and Emotion',
  },

  {
    id: 'pulse_emot_05',
    skill: 'Emotiecoaching',
    vraag: 'Was er een moment dat jij jouw eigen emotie liet zien aan je kind?',
    antwoorden: [
      'Ja, passend en eerlijk',
      'Niet bewust, maar misschien onbewust',
      'Nee, ik hield alles binnen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vaders die hun eigen emoties passend laten zien, modelleren emotionele openheid. Kinderen leren dat gevoel hebben oké is – van jou.',
    bron: 'Eisenberg et al. (1998) – Parental Emotion-Related Socialization',
  },

  {
    id: 'pulse_emot_06',
    skill: 'Emotiecoaching',
    vraag: 'Heeft je kind vandaag iets gedaan uit angst of onzekerheid?',
    antwoorden: [
      'Ja, en ik heb de angst erkend',
      'Ja, maar ik zei dat het niet nodig was',
      'Niet dat ik zag',
      'Kind niet gezien vandaag',
    ],
    inzicht: '"Wees maar niet bang" werkt niet – het ontkent de ervaring van je kind. "Ik snap dat je het spannend vindt" maakt de angst dragelijk.',
    bron: 'Siegel (2010) – Mindsight',
  },

  {
    id: 'pulse_emot_07',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag een emotie van je kind kunnen verbinden aan een oorzaak?',
    antwoorden: [
      'Ja, ik snapte wat er achter zat',
      'Ik had een vermoeden maar wist het niet zeker',
      'Nee, het gedrag was voor mij onduidelijk',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Mentaliseren – nadenken over de binnenkant van je kind – is de krachtigste vaardigheid voor goed ouderschap. Het gaat niet om altijd gelijk hebben, maar om proberen te begrijpen.',
    bron: 'Fonagy et al. (2002) – Affect Regulation, Mentalization',
  },

  {
    id: 'pulse_emot_08',
    skill: 'Emotiecoaching',
    vraag: 'Was er een moment dat je kind blij was om iets kleins?',
    antwoorden: [
      'Ja, en ik deelde die blijdschap mee',
      'Ja, maar ik was er niet echt bij',
      'Niet dat ik opmerkte',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Positieve emoties delen – "kapitaliseren" – versterkt de band meer dan troosten bij negatieve emoties. Vreugde samen beleven is even belangrijk als samen verdriet dragen.',
    bron: 'Gable et al. (2004) – What Do You Do When Things Go Right?',
  },

  {
    id: 'pulse_emot_09',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag een emotie van je kind gevalideerd in plaats van gebagatelliseerd?',
    antwoorden: [
      'Ja, ik erkende de emotie zonder te zeggen dat het niet zo erg was',
      'Ik begon met erkennen maar zei uiteindelijk toch dat het wel meeviel',
      'Ik zei iets als "stel je niet aan" of "het is niet zo erg"',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Emotionele validatie leert een kind dat zijn gevoelens reëel en belangrijk zijn. Bagatelliseren leidt ertoe dat het kind leert zijn eigen emotionele ervaringen te wantrouwen.',
    bron: 'Gottman, J. (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_emot_10',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag je kind geholpen om een emotie een naam te geven die het zelf nog niet kon benoemen?',
    antwoorden: [
      'Ja, ik hielp het woord te vinden: "Zou je je misschien teleurgesteld voelen?"',
      'Ik probeerde het maar mijn kind ging er niet op in',
      'Ik merkte dat mijn kind een emotie had maar hielp niet met benoemen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het helpen benoemen van emoties — affect labeling — vermindert de activiteit in de amygdala en vergroot de activiteit in de prefrontale cortex. Letterlijk: een naam geven aan een gevoel maakt het draaglijker.',
    bron: 'Siegel, D. & Bryson, T. (2011) – The Whole-Brain Child',
  },

  {
    id: 'pulse_emot_11',
    skill: 'Emotiecoaching',
    vraag: 'Heeft je kind vandaag frustratie getoond en hoe heb je daarop gereageerd?',
    antwoorden: [
      'Ik benoemde de frustratie en bleef rustig naast mijn kind tot het zakte',
      'Ik probeerde de frustratie snel op te lossen zodat het ophield',
      'Ik werd zelf geïrriteerd door de frustratie van mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Frustratie is een groeikans wanneer het begeleid wordt. Een vader die de frustratie kan verdragen zonder op te lossen, leert het kind dat ongemakkelijke gevoelens tijdelijk en hanteerbaar zijn.',
    bron: 'Winnicott, D.W. (1971) – Playing and Reality',
  },

  {
    id: 'pulse_emot_12',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag gemerkt dat je kind een emotie probeerde te verbergen?',
    antwoorden: [
      'Ja, ik merkte het en gaf voorzichtig ruimte: "Ik zie dat er iets is"',
      'Ik had het vermoeden maar besloot er niet op in te gaan',
      'Ik heb niet opgemerkt dat mijn kind iets verborg',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die hun emoties verbergen doen dit vaak omdat ze geleerd hebben dat bepaalde gevoelens niet welkom zijn. Een vader die dit patroon doorbreekt door zachtjes te benoemen wat hij ziet, herstelt de emotionele veiligheid.',
    bron: 'Schore, A. (2003) – Affect Dysregulation and Disorders of the Self',
  },

  {
    id: 'pulse_emot_13',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag je kind geholpen de overgang te maken van een intense emotie naar kalmte?',
    antwoorden: [
      'Ja, ik hielp mijn kind stap voor stap terug te keren naar een rustige toestand',
      'Ik probeerde het maar mijn kind had meer tijd nodig dan ik gaf',
      'Ik wachtte tot de emotie vanzelf overging zonder actief te begeleiden',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Co-regulatie — het proces waarbij de vader als extern regulatiesysteem fungeert — is de voorloper van zelfregulatie. Het kind leert kalmte door de kalmte van de vader te internaliseren.',
    bron: 'Schore, A. (2001) – Affect Regulation and the Origin of the Self',
  },

  {
    id: 'pulse_emot_14',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag tegen je kind gezegd dat het oké is om een bepaald gevoel te hebben?',
    antwoorden: [
      'Ja, ik zei expliciet dat alle gevoelens welkom zijn',
      'Ik erkende het gevoel maar gaf ook snel een oplossing',
      'Ik ging voorbij aan het gevoel en richtte me op het gedrag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het onderscheid maken tussen gevoelens (altijd oké) en gedrag (soms niet oké) is de kern van emotiecoaching. Dit leert het kind dat het niet hoeft te handelen vanuit elke emotie, maar de emotie zelf altijd mag bestaan.',
    bron: 'Gottman, J. (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_emot_15',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag je eigen frustratie of stress opgemerkt terwijl je bij je kind was?',
    antwoorden: [
      'Ja, ik merkte mijn eigen spanning en reguleerde mezelf bewust voordat ik reageerde',
      'Ik merkte het maar reageerde toch vanuit mijn spanning',
      'Ik stond er niet bij stil hoe ik me voelde op dat moment',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het vermogen van een vader om zijn eigen emotionele toestand waar te nemen is de eerste stap naar bewust ouderschap. Kinderen voelen de emotionele toestand van hun ouder direct aan via neuroceptie.',
    bron: 'Porges, S. (2011) – The Polyvagal Theory',
  },

  {
    id: 'pulse_emot_16',
    skill: 'Emotiecoaching',
    vraag: 'Heeft je kind vandaag jaloezie getoond (op een broertje/zusje, vriendje of situatie)?',
    antwoorden: [
      'Ja, ik benoemde de jaloezie en hielp mijn kind begrijpen wat eronder zat',
      'Ik merkte het maar zei dat het nergens voor nodig was',
      'Ik heb vandaag geen jaloezie opgemerkt bij mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Jaloezie bij kinderen is vaak een uiting van de angst om verbinding te verliezen. Een vader die de onderliggende behoefte herkent, kan het kind helpen zonder het gevoel af te keuren.',
    bron: 'Panksepp, J. (1998) – Affective Neuroscience: The Foundations of Human and Animal Emotions',
  },

  {
    id: 'pulse_emot_17',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag na een conflict met je kind de verbinding hersteld?',
    antwoorden: [
      'Ja, ik heb na het conflict bewust toenadering gezocht en de verbinding hersteld',
      'Ik wilde het goed maken maar wist niet goed hoe',
      'Het conflict bleef onopgelost hangen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De kwaliteit van hechting wordt niet bepaald door de afwezigheid van breuken, maar door het vermogen ze te herstellen. Elke geslaagde repair versterkt het vertrouwen van het kind dat relaties bestand zijn tegen conflict.',
    bron: 'Tronick, E. (2007) – The Neurobehavioral and Social-Emotional Development of Infants and Children',
  },

  {
    id: 'pulse_emot_18',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag gemerkt dat je kind trots was op zichzelf?',
    antwoorden: [
      'Ja, ik zag de trots en bevestigde het specifiek: "Je hebt hard gewerkt"',
      'Ik zei "goed zo" zonder echt te benoemen waarover mijn kind trots was',
      'Ik heb niet opgemerkt of mijn kind trots was',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Trots is een complexe emotie die pas ontstaat wanneer een kind zijn eigen inspanning kan evalueren. Een vader die de specifieke inspanning benoemt in plaats van algemeen te prijzen, versterkt het interne referentiekader van het kind.',
    bron: 'Sroufe, L.A. (1996) – Emotional Development: The Organization of Emotional Life in the Early Years',
  },

  {
    id: 'pulse_emot_19',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag je kind horen zuchten, kreunen of geluiden maken die een emotie uitdrukten?',
    antwoorden: [
      'Ja, ik hoorde het en vroeg er rustig naar: "Dat klonk als een diepe zucht"',
      'Ik hoorde het maar ging er niet op in',
      'Ik heb er niet op gelet',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Niet-verbale emotionele uitingen zoals zuchten zijn prosodie-signalen die verwerkt worden door het ventrale vagale systeem. Een vader die hierop reageert, laat zien dat hij ook de ongesproken communicatie van zijn kind hoort.',
    bron: 'Porges, S. (2017) – The Pocket Guide to the Polyvagal Theory',
  },

  {
    id: 'pulse_emot_20',
    skill: 'Emotiecoaching',
    vraag: 'Was je kind vandaag opgewonden of enthousiast over iets en heb je die energie beantwoord?',
    antwoorden: [
      'Ja, ik matchte het enthousiasme en deelde de opwinding',
      'Ik reageerde positief maar minder enthousiast dan mijn kind',
      'Ik temperde het enthousiasme of gaf er weinig aandacht aan',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het matchen van positief affect — meegaan in de vreugde van het kind — is net zo belangrijk als troost bij verdriet. Dit leert het kind dat positieve emoties veilig gedeeld en vergroot mogen worden.',
    bron: 'Stern, D. (1985) – The Interpersonal World of the Infant',
  },

  {
    id: 'pulse_emot_21',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag een moment gehad waarin je excuses aanbood aan je kind voor iets dat je deed?',
    antwoorden: [
      'Ja, ik bood oprecht mijn excuses aan en benoemde wat ik anders had willen doen',
      'Ik voelde dat excuses op hun plaats waren maar zei het niet hardop',
      'Er was geen moment waarop ik excuses nodig vond',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Een vader die excuses aanbiedt modelleert emotionele verantwoordelijkheid. Het kind leert dat fouten maken menselijk is en dat het herstellen van een fout sterker is dan het ontkennen ervan.',
    bron: 'Hughes, D. (2009) – Attachment-Focused Parenting',
  },

  {
    id: 'pulse_emot_22',
    skill: 'Emotiecoaching',
    vraag: 'Heeft je kind vandaag iets verteld over een sociale situatie die lastig was (pesten, buitensluiting, oneerlijkheid)?',
    antwoorden: [
      'Ja, ik luisterde eerst, valideerde het gevoel en hielp pas daarna met perspectief',
      'Ik gaf meteen advies over hoe het op te lossen',
      'Mijn kind vertelde het niet of ik heb er niet naar gevraagd',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Bij sociale pijn activeert het brein dezelfde gebieden als bij fysieke pijn. Een vader die eerst de pijn erkent voordat hij oplossingen biedt, helpt het stresssysteem van het kind te reguleren.',
    bron: 'Van der Kolk, B. (2014) – The Body Keeps the Score',
  },

  {
    id: 'pulse_emot_23',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag je kind gevraagd hoe een personage in een boek of film zich voelde?',
    antwoorden: [
      'Ja, we bespraken samen de emoties van een personage',
      'Het kwam niet op bij me om ernaar te vragen',
      'We hebben vandaag niet samen gelezen of gekeken',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het praten over emoties van fictieve personages is een veilige manier om het mentaliserend vermogen te oefenen. Het kind leert perspectieven innemen zonder de druk van een eigen emotie.',
    bron: 'Fonagy, P. (2002) – Affect Regulation, Mentalization, and the Development of the Self',
  },

  {
    id: 'pulse_emot_24',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag gemerkt dat je kind met zijn lichaam een emotie uitte (schoppen, stampen, kruipen naar je toe)?',
    antwoorden: [
      'Ja, ik vertaalde het lichamelijke naar een emotie: "Je lichaam vertelt me dat je boos bent"',
      'Ik zag het gedrag maar reageerde alleen op het gedrag, niet op de emotie',
      'Ik heb het niet opgemerkt',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Jonge kinderen uiten emoties primair via het lichaam. Het vertalen van lichamelijke uitingen naar emotionele taal helpt het kind de verbinding te maken tussen lichaam en gevoel.',
    bron: 'Van der Kolk, B. (2014) – The Body Keeps the Score',
  },

  {
    id: 'pulse_emot_25',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag een grens gesteld terwijl je tegelijkertijd begrip toonde voor de emotie van je kind?',
    antwoorden: [
      'Ja, ik hield de grens vast maar erkende het gevoel: "Ik snap dat je teleurgesteld bent, én het is bedtijd"',
      'Ik stelde de grens maar zonder de emotie erbij te erkennen',
      'Ik gaf toe aan de emotie en liet de grens los',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Grenzen stellen en emoties valideren zijn geen tegengestelden. Een kind dat een grens ervaart mét erkenning van zijn gevoel, leert dat structuur en empathie samen kunnen bestaan.',
    bron: 'Gottman, J. (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_emot_26',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag je kind geholpen om te begrijpen waarom een ander kind boos of verdrietig was?',
    antwoorden: [
      'Ja, ik hielp mijn kind het perspectief van het andere kind in te nemen',
      'Ik noemde het kort maar ging er niet diep op in',
      'De situatie deed zich niet voor of ik heb het niet besproken',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het bespreken van emoties van anderen helpt het kind empathie te ontwikkelen. Empathie is geen aangeboren eigenschap maar een vaardigheid die groeit door herhaalde oefening in perspectief nemen.',
    bron: 'Siegel, D. (2012) – The Developing Mind',
  },

  {
    id: 'pulse_emot_27',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag met je kind gesproken over een moment waarop jij als kind een vergelijkbaar gevoel had?',
    antwoorden: [
      'Ja, ik deelde een persoonlijke herinnering die paste bij wat mijn kind voelde',
      'Ik dacht eraan maar besloot het niet te delen',
      'Het kwam niet in me op om mijn eigen ervaring te delen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer een vader zijn eigen kindherinneringen deelt, normaliseert hij de emotie van het kind en bouwt hij aan intergenerationele verbinding. Het kind voelt zich minder alleen in zijn ervaring.',
    bron: 'Siegel, D. & Hartzell, M. (2003) – Parenting from the Inside Out',
  },

  {
    id: 'pulse_emot_28',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag gemerkt dat je kind een driftbui of meltdown had?',
    antwoorden: [
      'Ja, ik bleef kalm, bood nabijheid en wachtte tot de storm voorbijging',
      'Ik probeerde kalm te blijven maar werd uiteindelijk zelf luid',
      'Ik stuurde mijn kind weg om alleen tot rust te komen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Tijdens een meltdown is het stresssysteem van het kind overbelast en heeft het geen toegang tot de hogere hersenfuncties. De nabijheid van een gereguleerde vader is op dat moment de enige weg terug naar kalmte.',
    bron: 'Perry, B. (2006) – The Boy Who Was Raised as a Dog',
  },

  {
    id: 'pulse_emot_29',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag met je kind teruggekeken op een lastig moment eerder op de dag?',
    antwoorden: [
      'Ja, we bespraken samen wat er gebeurde en wat mijn kind voelde',
      'Ik verwees ernaar maar we gingen er niet diep op in',
      'We hebben het lastige moment niet meer besproken',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het achteraf bespreken van emotionele ervaringen helpt het kind een coherent narratief op te bouwen. Dit integreert linker- en rechterhersenhelft en bevordert emotionele verwerking.',
    bron: 'Siegel, D. & Bryson, T. (2011) – The Whole-Brain Child',
  },

  {
    id: 'pulse_emot_30',
    skill: 'Emotiecoaching',
    vraag: 'Heeft je kind vandaag schaamte getoond (blik afwenden, klein maken, rood worden)?',
    antwoorden: [
      'Ja, ik zag de schaamte en reageerde met warmte en normalisatie',
      'Ik merkte het maar wist niet goed hoe te reageren',
      'Ik heb vandaag geen schaamte opgemerkt bij mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Schaamte is een van de meest toxische emoties wanneer het onbegeleid blijft. Een vader die schaamte herkent en met warmte antwoordt, voorkomt dat het kind een negatief zelfbeeld internaliseert.',
    bron: 'Schore, A. (2003) – Affect Dysregulation and Disorders of the Self',
  },

  {
    id: 'pulse_emot_31',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag een emotie van je kind gespiegeld met je gezichtsuitdrukking?',
    antwoorden: [
      'Ja, ik liet op mijn gezicht zien dat ik begreep wat mijn kind voelde',
      'Ik probeerde begripvol te kijken maar bleef redelijk neutraal',
      'Ik reageerde verbaal maar mijn gezicht drukte weinig uit',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Affectieve spiegeling — het weergeven van de emotie van het kind op het gezicht van de ouder — is de primaire manier waarop jonge kinderen hun eigen innerlijke toestand leren herkennen.',
    bron: 'Fonagy, P. & Target, M. (1997) – Attachment and Reflective Function',
  },

  {
    id: 'pulse_emot_32',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag samen met je kind diep ademgehaald om tot rust te komen?',
    antwoorden: [
      'Ja, we deden samen een ademhalingsoefening om te kalmeren',
      'Ik stelde het voor maar mijn kind deed niet mee',
      'Ik heb vandaag geen ademhalingsoefening gedaan met mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Bewuste ademhaling activeert het parasympathische zenuwstelsel en verlaagt de hartslag. Wanneer vader en kind dit samen doen, synchroniseren hun fysiologische systemen en versterkt de co-regulatie.',
    bron: 'Kabat-Zinn, J. (1994) – Wherever You Go, There You Are',
  },

  {
    id: 'pulse_emot_33',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag je kind horen zeggen "het is niet eerlijk" en hoe reageerde je?',
    antwoorden: [
      'Ik erkende het gevoel van onrechtvaardigheid en besprak wat er eerlijk aan zou zijn',
      'Ik legde uit waarom het wel eerlijk was',
      'Ik zei dat het leven niet altijd eerlijk is',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het gevoel van onrechtvaardigheid is bij kinderen verbonden aan een diep verlangen naar gelijkwaardigheid. Een vader die dit serieus neemt, helpt het kind moreel redeneren te ontwikkelen.',
    bron: 'Panksepp, J. (1998) – Affective Neuroscience: The Foundations of Human and Animal Emotions',
  },

  {
    id: 'pulse_emot_34',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag opgemerkt dat je kind zichzelf troostte (duim, knuffel, terugtrekken)?',
    antwoorden: [
      'Ja, ik zag het zelftroostende gedrag en bood zachtjes nabijheid aan',
      'Ik merkte het op maar liet het met rust',
      'Ik heb niet opgemerkt dat mijn kind zichzelf troostte',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Zelftroostend gedrag is een vroege vorm van zelfregulatie. Wanneer een vader dit herkent en zijn nabijheid toevoegt, leert het kind dat het zowel op zichzelf als op anderen kan steunen.',
    bron: 'Sroufe, L.A. (1996) – Emotional Development: The Organization of Emotional Life in the Early Years',
  },

  {
    id: 'pulse_emot_35',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag een emotionele uitbarsting van je kind niet persoonlijk opgevat?',
    antwoorden: [
      'Ja, ik begreep dat het gedrag niet tegen mij gericht was maar een uiting van overprikkeling',
      'Ik wist het rationeel maar voelde me toch aangevallen',
      'Ik nam het persoonlijk en reageerde defensief',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer een vader de emotionele uitbarsting van zijn kind kan zien als communicatie in plaats van als aanval, blijft zijn eigen stresssysteem gereguleerd en kan hij beschikbaar blijven als veilige basis.',
    bron: 'Hughes, D. & Baylin, J. (2012) – Brain-Based Parenting',
  },

  {
    id: 'pulse_emot_36',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag je kind gevraagd waar in zijn lichaam het een gevoel voelde?',
    antwoorden: [
      'Ja, ik vroeg "Waar voel je dat?" en mijn kind kon het aanwijzen',
      'Ik vroeg het maar mijn kind begreep de vraag niet helemaal',
      'Ik heb er niet aan gedacht om naar het lichaam te vragen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De verbinding tussen emotie en lichaam — interoceptie — is een vaardigheid die aangeleerd moet worden. Een vader die helpt het gevoel te lokaliseren in het lichaam, bevordert het lichaams- en emotioneel bewustzijn.',
    bron: 'Van der Kolk, B. (2014) – The Body Keeps the Score',
  },

  {
    id: 'pulse_emot_37',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag je kind geholpen om twee tegenstrijdige gevoelens tegelijk te herkennen?',
    antwoorden: [
      'Ja, ik benoemde dat je twee dingen tegelijk kunt voelen: "Je bent boos én verdrietig"',
      'Ik richtte me op het meest zichtbare gevoel en noemde het andere niet',
      'Ik merkte niet dat er meerdere gevoelens speelden',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Ambivalentie — het tegelijk ervaren van tegenstrijdige emoties — is een normaal maar verwarrend fenomeen voor kinderen. Een vader die dit benoemt, helpt het kind een complexer emotioneel vocabulaire te ontwikkelen.',
    bron: 'Stern, D. (1985) – The Interpersonal World of the Infant',
  },

  {
    id: 'pulse_emot_38',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag je kind gewaarschuwd voor een overgang of verandering die misschien lastig zou zijn?',
    antwoorden: [
      'Ja, ik bereidde mijn kind voor: "Over vijf minuten gaan we weg, dat kan even lastig zijn"',
      'Ik waarschuwde voor de overgang maar niet voor het gevoel dat erbij kon horen',
      'Ik verraste mijn kind met een plotselinge verandering',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Voorspelbaarheid verlaagt de stress bij overgangen. Wanneer een vader niet alleen de verandering aankondigt maar ook het bijbehorende gevoel benoemt, leert het kind anticiperen op zijn eigen emotionele reacties.',
    bron: 'Perry, B. (2006) – The Boy Who Was Raised as a Dog',
  },

  {
    id: 'pulse_emot_39',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag met zachte stem gesproken toen je kind overstuur was?',
    antwoorden: [
      'Ja, ik verlaagde bewust mijn stemvolume en tempo',
      'Ik probeerde zacht te praten maar werd gaandeweg luider',
      'Ik sprak op normaal of verhoogd volume',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De prosodie van de stem — toon, volume en ritme — wordt door het autonome zenuwstelsel van het kind sneller verwerkt dan de inhoud van de woorden. Een lage, rustige stem activeert het veiligheidssysteem.',
    bron: 'Porges, S. (2011) – The Polyvagal Theory',
  },

  {
    id: 'pulse_emot_40',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag het verschil benoemd tussen wat je kind voelt en wat het doet?',
    antwoorden: [
      'Ja, ik zei bijvoorbeeld: "Je mag boos zijn, maar slaan mag niet"',
      'Ik corrigeerde het gedrag zonder het gevoel te benoemen',
      'Ik liet het gedrag gaan om het gevoel niet te verstoren',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het scheiden van emotie en gedrag is een fundamenteel principe van emotiecoaching. Het kind leert dat gevoelens geen gevolgen hebben, maar dat het wel kan kiezen hoe het ermee omgaat.',
    bron: 'Gottman, J. (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_emot_41',
    skill: 'Emotiecoaching',
    vraag: 'Heeft je kind vandaag empathie getoond voor iemand anders?',
    antwoorden: [
      'Ja, ik zag het en benoemde het expliciet: "Wat lief dat je dat deed, je zag dat hij verdrietig was"',
      'Ik merkte het op maar benoemde het niet',
      'Ik heb vandaag geen empathisch gedrag opgemerkt',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer een vader empathisch gedrag benoemt en bevestigt, versterkt hij het neurale pad dat empathie als belonend ervaart. Het kind leert dat zorgzaamheid gezien en gewaardeerd wordt.',
    bron: 'Panksepp, J. (1998) – Affective Neuroscience: The Foundations of Human and Animal Emotions',
  },

  {
    id: 'pulse_emot_42',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag gemerkt dat je kind een emotionele reactie had op iets onverwachts?',
    antwoorden: [
      'Ja, ik hielp mijn kind de onverwachte ervaring te verwerken door erover te praten',
      'Ik zag de reactie maar ging snel door naar de orde van de dag',
      'Ik merkte het niet op of er was niets onverwachts',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Onverwachte gebeurtenissen activeren de amygdala sterker dan voorspelbare. Een vader die het kind helpt de verrassing te verwoorden, helpt de prefrontale cortex de controle terug te nemen over de stressrespons.',
    bron: 'Siegel, D. (2010) – Mindsight: The New Science of Personal Transformation',
  },

  {
    id: 'pulse_emot_43',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag een emotie bij jezelf hardop benoemd waar je kind bij was?',
    antwoorden: [
      'Ja, ik zei bijvoorbeeld: "Papa is een beetje gespannen, dat heeft niets met jou te maken"',
      'Ik voelde een emotie maar hield die voor mezelf',
      'Ik was me niet bewust van mijn eigen emoties op dat moment',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer een vader zijn eigen emoties hardop benoemt, modelleert hij emotioneel bewustzijn. Het kind leert dat emoties bespreekbaar zijn en dat ook volwassenen gevoelens hebben die ze reguleren.',
    bron: 'Siegel, D. & Hartzell, M. (2003) – Parenting from the Inside Out',
  },

  {
    id: 'pulse_emot_44',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag met je kind gesproken over wat het kan doen als het zich niet goed voelt?',
    antwoorden: [
      'Ja, we bespraken samen strategieën: "Wat helpt jou als je je zo voelt?"',
      'Ik gaf een oplossing maar vroeg niet naar de ideeën van mijn kind',
      'We hebben het niet over coping-strategieën gehad',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Een kind dat leert om zelf strategieën te bedenken voor emotionele momenten, bouwt aan zelfregulatie. De rol van de vader verschuift daarbij van regulator naar coach — van doen naar samen bedenken.',
    bron: 'Gottman, J. (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_emot_45',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag gemerkt dat je kind zich verveelde en hoe reageerde je?',
    antwoorden: [
      'Ja, ik liet de verveling even bestaan en zag dat mijn kind uiteindelijk zelf iets vond',
      'Ik bood meteen een activiteit aan om de verveling op te lossen',
      'Ik merkte niet dat mijn kind zich verveelde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Verveling is een emotionele toestand die creativiteit kan aanwakkeren wanneer het verdragen wordt. Een vader die de neiging weerstaat om verveling direct op te lossen, geeft het kind ruimte om interne motivatie te ontwikkelen.',
    bron: 'Winnicott, D.W. (1958) – The Capacity to Be Alone',
  },

  {
    id: 'pulse_emot_46',
    skill: 'Emotiecoaching',
    vraag: 'Heb je vandaag je kind laten weten dat je van hem/haar houdt ongeacht het gedrag van die dag?',
    antwoorden: [
      'Ja, ik maakte duidelijk dat mijn liefde niet afhangt van goed gedrag',
      'Ik uitte mijn liefde maar koppelde het aan goed gedrag: "Wat was je lief vandaag"',
      'Ik heb vandaag niet expliciet mijn liefde uitgesproken',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Onvoorwaardelijke liefde — liefde die niet afhankelijk is van prestatie of gedrag — is de basis van veilige hechting. Een kind dat weet dat het geliefd is ook na een moeilijke dag, ontwikkelt een stabiel en positief zelfbeeld.',
    bron: 'Bowlby, J. (1988) – A Secure Base: Parent-Child Attachment and Healthy Human Development',
  },

  // ── ZELFREGULATIE (46 vragen) ───────────────────────────────────

  {
    id: 'pulse_zelf_01',
    skill: 'Zelfregulatie',
    vraag: 'Was er een moment vandaag dat jij je moest inhouden in de interactie met je kind?',
    antwoorden: [
      'Ja, en dat lukte – ik bleef kalm',
      'Ja, maar gedeeltelijk – ik reageerde toch te snel',
      'Nee, maar niet omdat het makkelijk was',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Zelfregulatie is een spier. Elke keer dat je je inhoudt, versterk je de prefrontale cortex – letterlijk. Het wordt makkelijker door te oefenen.',
    bron: 'Baumeister & Tierney (2011) – Willpower',
  },

  {
    id: 'pulse_zelf_02',
    skill: 'Zelfregulatie',
    vraag: 'Op welk moment vandaag was jouw stressniveau het hoogst tijdens interactie met je kind?',
    antwoorden: [
      'Nauwelijks stress – rustige dag',
      'Even gespannen maar het zakte snel',
      'Hoog – ik voelde het in mijn lichaam',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Stress in het lichaam herkennen vóór je reageert is de kern van zelfregulatie. Je kunt niet denken vanuit een geactiveerd stresssysteem – je moet eerst fysiek kalmeren.',
    bron: 'van der Kolk (2014) – The Body Keeps the Score',
  },

  {
    id: 'pulse_zelf_03',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag een pauze genomen als je merkte dat je grens naderde?',
    antwoorden: [
      'Ja, ik stapte even weg en keerde rustig terug',
      'Nee, ik duwde door maar bleef redelijk',
      'Nee, ik escaleerde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Even weglopen is geen falen – het is een geavanceerde vaardigheid. Je kunt niet goed reageren als je zenuwstelsel in de rode zone zit.',
    bron: 'Gottman (1994) – Why Marriages Succeed or Fail',
  },

  {
    id: 'pulse_zelf_04',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag iets gezegd wat je liever niet had gezegd?',
    antwoorden: [
      'Nee – mijn woorden kwamen vanuit rust',
      'Eén ding dat ik liever anders had gezegd',
      'Ja, meerdere keren',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Woorden die gezegd zijn, kunnen niet worden teruggenomen – maar hun schade kan worden hersteld. Herstel na een misstap is minstens even belangrijk als de misstap voorkomen.',
    bron: 'Siegel & Bryson (2011) – The Whole-Brain Child',
  },

  {
    id: 'pulse_zelf_05',
    skill: 'Zelfregulatie',
    vraag: 'Hoe goed sliep jij afgelopen nacht – en merkte je dat vandaag in je geduld?',
    antwoorden: [
      'Goed geslapen, geduld was op peil',
      'Matig geslapen, maar ik compenseerde bewust',
      'Slecht geslapen – mijn geduld was er niet',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Slaaptekort verlaagt de activiteit van de prefrontale cortex met 30%. Je zelfregulatie hangt letterlijk af van je nachtrust. Dat is geen excuus – het is biologie.',
    bron: 'Walker (2017) – Why We Sleep',
  },

  {
    id: 'pulse_zelf_06',
    skill: 'Zelfregulatie',
    vraag: 'Was er vandaag een moment dat je kind jou triggerde op iets uit je eigen verleden?',
    antwoorden: [
      'Ja, en ik herkende het op tijd',
      'Misschien – ik realiseer het me nu pas',
      'Nee, niets getriggerd',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Triggers vanuit het verleden zijn de gevaarlijkste momenten in opvoeding. Ze zorgen ervoor dat je reageert op je eigen pijn in plaats van op je kind.',
    bron: 'Siegel & Hartzell (2003) – Parenting from the Inside Out',
  },

  {
    id: 'pulse_zelf_07',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag bewust iets gedaan om je eigen stressniveau te verlagen?',
    antwoorden: [
      'Ja – bewogen, rustig geademd of pauze genomen',
      'Nee, maar ik had het niet nodig',
      'Nee, en ik had het wel nodig',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vaders die dagelijks iets doen aan stressregulatie zijn gemiddeld responsiever voor hun kinderen. Zelfzorg is geen luxe – het is een opvoedkeuze.',
    bron: 'Mikolajczak & Roskam (2018) – A Theoretical and Clinical Framework for Parental Burnout',
  },

  {
    id: 'pulse_zelf_08',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag gemerkt dat je stem luider werd dan nodig?',
    antwoorden: [
      'Ja, en ik heb mijn stemvolume bewust aangepast',
      'Ik merkte het achteraf pas',
      'Mijn stem werd meerdere keren luid zonder dat ik bijstuurde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Stemvolume is een directe indicator van emotionele activatie. Kinderen zijn bijzonder gevoelig voor prosodie en interpreteren een luide stem als dreiging, waardoor hun eigen stresssysteem activeert.',
    bron: 'Porges (2011) – The Polyvagal Theory: Neurophysiological Foundations of Emotions, Attachment, Communication, and Self-Regulation',
  },

  {
    id: 'pulse_zelf_09',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag een moment gehad waarop je je eigen frustratie kon benoemen tegenover je kind?',
    antwoorden: [
      'Ja, ik heb rustig benoemd wat ik voelde zonder verwijt',
      'Ik voelde frustratie maar hield het voor mezelf',
      'Mijn frustratie uitte zich zonder dat ik het benoemde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het benoemen van emoties (affect labeling) vermindert de activatie van de amygdala. Wanneer een vader dit hardop doet, leert het kind tegelijkertijd emotioneel vocabulaire.',
    bron: 'Lieberman et al. (2007) – Putting Feelings into Words: Affect Labeling Disrupts Amygdala Activity',
  },

  {
    id: 'pulse_zelf_10',
    skill: 'Zelfregulatie',
    vraag: 'Hoe ging je om met een onverwachte verandering in jullie planning vandaag?',
    antwoorden: [
      'Ik paste me flexibel aan en betrok mijn kind erin',
      'Ik vond het lastig maar hield me in',
      'Ik reageerde geïrriteerd op de verandering',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Cognitieve flexibiliteit — het vermogen om je aan te passen aan veranderende omstandigheden — is een kerncomponent van executief functioneren en wordt door kinderen gemodelleerd via observatie van ouders.',
    bron: 'Mischel (2014) – The Marshmallow Test: Why Self-Control Is the Engine of Success',
  },

  {
    id: 'pulse_zelf_11',
    skill: 'Zelfregulatie',
    vraag: 'Was er een moment dat je kind niet luisterde en je merkte dat je spanning opliep?',
    antwoorden: [
      'Ja, en ik heb de spanning bewust laten zakken voor ik reageerde',
      'Ik merkte de spanning maar reageerde toch meteen',
      'Ik reageerde impulsief zonder de spanning op te merken',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Tussen stimulus en respons zit een ruimte. Hoe meer een ouder die ruimte benut, hoe beter het kind leert dat emoties hanteerbaar zijn in plaats van overweldigend.',
    bron: 'Siegel & Bryson (2012) – The Whole-Brain Child: 12 Revolutionary Strategies to Nurture Your Child\'s Developing Mind',
  },

  {
    id: 'pulse_zelf_12',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag bewust even gewacht voordat je een beslissing nam over je kind?',
    antwoorden: [
      'Ja, ik nam even de tijd en maakte een weloverwogen keuze',
      'Ik twijfelde maar besliste toch snel',
      'Ik nam beslissingen automatisch zonder erbij stil te staan',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Impulscontrole bij ouders hangt samen met betere uitkomsten voor kinderen. Het vermogen om een respons uit te stellen activeert de prefrontale cortex en voorkomt reacties vanuit het limbisch systeem.',
    bron: 'Baumeister & Tierney (2011) – Willpower: Rediscovering the Greatest Human Strength',
  },

  {
    id: 'pulse_zelf_13',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag iets voor jezelf gedaan dat je hielp om rustig te blijven als vader?',
    antwoorden: [
      'Ja, ik heb bewust een moment voor mezelf genomen',
      'Ik had het nodig maar kwam er niet aan toe',
      'Ik heb niet stilgestaan bij mijn eigen behoeften',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Zelfzorg is geen luxe maar een voorwaarde voor effectief ouderschap. Onderzoek toont dat ouders die voor hun eigen welzijn zorgen, meer emotionele beschikbaarheid tonen voor hun kinderen.',
    bron: 'Neff (2011) – Self-Compassion: The Proven Power of Being Kind to Yourself',
  },

  {
    id: 'pulse_zelf_14',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag fysieke signalen van stress opgemerkt tijdens het ouderschap (gespannen kaak, snellere hartslag)?',
    antwoorden: [
      'Ja, ik merkte het en deed iets om te ontspannen',
      'Ik merkte het maar deed er niets mee',
      'Ik was me niet bewust van lichamelijke spanning',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Lichaamsbewustzijn (interoceptie) is de basis van emotieregulatie. Vaders die fysieke stresssignalen herkennen, kunnen eerder ingrijpen voordat ze over hun grens gaan.',
    bron: 'Van der Kolk (2014) – The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma',
  },

  {
    id: 'pulse_zelf_15',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag een conflict met je kind kunnen de-escaleren?',
    antwoorden: [
      'Ja, ik bracht rust in de situatie en we losten het samen op',
      'Ik probeerde het maar het escaleerde toch even',
      'Het conflict liep op zonder dat ik het kon kalmeren',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De-escalatie vereist dat de ouder eerst zichzelf reguleert voordat het kind gereguleerd kan worden. Dit principe van co-regulatie is fundamenteel in de gehechtheidstheorie.',
    bron: 'Gottman & DeClaire (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_zelf_16',
    skill: 'Zelfregulatie',
    vraag: 'Was je vandaag in staat om rustig te blijven toen je kind huilde of schreeuwde?',
    antwoorden: [
      'Ja, ik bleef kalm en bood troost aan',
      'Ik bleef uiterlijk kalm maar voelde me van binnen overweldigd',
      'Ik werd zelf geprikkeld door het huilen of schreeuwen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het huilen van een kind activeert het alarmsysteem in het brein van de ouder. Vaders die hierbij hun eigen arousal kunnen reguleren, bieden een veilige haven en versterken de gehechtheidsband.',
    bron: 'Porges (2011) – The Polyvagal Theory: Neurophysiological Foundations of Emotions, Attachment, Communication, and Self-Regulation',
  },

  {
    id: 'pulse_zelf_17',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag bewust ademgehaald om jezelf te kalmeren in een lastige situatie met je kind?',
    antwoorden: [
      'Ja, ik gebruikte mijn ademhaling als anker om rustig te blijven',
      'Ik dacht eraan maar deed het niet bewust',
      'Nee, ik reageerde zonder stil te staan bij mijn ademhaling',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Bewuste ademhaling activeert het parasympathische zenuwstelsel en verlaagt de cortisolniveaus. Dit is een van de snelste manieren om vanuit een reactieve staat naar een responsieve staat te gaan.',
    bron: 'Kabat-Zinn (1990) – Full Catastrophe Living: Using the Wisdom of Your Body and Mind to Face Stress, Pain, and Illness',
  },

  {
    id: 'pulse_zelf_18',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag je telefoon weggelegd om volledig aanwezig te zijn bij je kind?',
    antwoorden: [
      'Ja, ik heb bewust mijn telefoon weggelegd en was er helemaal',
      'Ik probeerde het maar pakte mijn telefoon toch regelmatig',
      'Ik was veel op mijn telefoon terwijl mijn kind aandacht vroeg',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Technoference — de onderbreking van ouder-kindinteracties door technologie — is geassocieerd met meer gedragsproblemen bij kinderen en een verminderd gevoel van verbondenheid.',
    bron: 'McDaniel & Radesky (2018) – Technoference: Parent Distraction With Technology and Associations With Child Behavior Problems',
  },

  {
    id: 'pulse_zelf_19',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag geduld kunnen opbrengen toen je kind iets langzaam deed (aankleden, eten, opruimen)?',
    antwoorden: [
      'Ja, ik gaf mijn kind de tijd en begeleidde rustig',
      'Ik probeerde geduldig te zijn maar nam het uiteindelijk toch over',
      'Ik werd ongeduldig en haastte mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen hebben een ander tijdbesef dan volwassenen. Wanneer ouders het tempo van het kind respecteren, versterken zij het gevoel van autonomie en competentie — basisbehoeften volgens de zelfdeterminatietheorie.',
    bron: 'Deci & Ryan (2000) – The "What" and "Why" of Goal Pursuits: Human Needs and the Self-Determination of Behavior',
  },

  {
    id: 'pulse_zelf_20',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag een negatieve gedachte over je kind of je ouderschap kunnen bijstellen?',
    antwoorden: [
      'Ja, ik ving de gedachte op en herformuleerde die bewust',
      'Ik had negatieve gedachten maar liet ze passeren zonder actie',
      'Negatieve gedachten bepaalden mijn reactie richting mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Cognitieve herwaardering — het herinterpreteren van een situatie — is een van de meest effectieve emotieregulatiestrategieën en vermindert zowel de emotionele beleving als de fysiologische stressrespons.',
    bron: 'Gross (2002) – Emotion Regulation: Affective, Cognitive, and Social Consequences',
  },

  {
    id: 'pulse_zelf_21',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag de situatie vanuit het perspectief van je kind kunnen bekijken voordat je reageerde?',
    antwoorden: [
      'Ja, ik probeerde eerst te begrijpen wat mijn kind ervoer',
      'Ik dacht er achteraf pas over na',
      'Ik reageerde vanuit mijn eigen perspectief zonder stil te staan bij dat van mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Perspectiefname vermindert reactieve agressie en vergroot empathisch ouderschap. Het activeert de mediale prefrontale cortex, die betrokken is bij mentalisatie en theorie van de geest.',
    bron: 'Siegel (2012) – The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are',
  },

  {
    id: 'pulse_zelf_22',
    skill: 'Zelfregulatie',
    vraag: 'Hoe ging je vandaag om met herhaaldelijke verzoeken of gezeur van je kind?',
    antwoorden: [
      'Ik bleef rustig, bevestigde wat mijn kind wilde en gaf duidelijkheid',
      'Ik hield me redelijk in maar merkte groeiende irritatie',
      'Ik reageerde uiteindelijk geprikkeld of boos',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Herhaaldelijk gedrag van kinderen is vaak een teken van een onvervulde behoefte. Wanneer ouders het onderliggende signaal herkennen in plaats van op het oppervlaktegedrag te reageren, neemt het zeurgedrag af.',
    bron: 'Greene (2014) – The Explosive Child: A New Approach for Understanding and Parenting Easily Frustrated, Chronically Inflexible Children',
  },

  {
    id: 'pulse_zelf_23',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag een moment gehad dat je je schaamde over je reactie naar je kind?',
    antwoorden: [
      'Ja, maar ik heb het hersteld door erover te praten met mijn kind',
      'Ik voelde schaamte maar liet het onbesproken',
      'Ik voelde schaamte en dat maakte de rest van de dag lastiger',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Schaamte bij ouders leidt tot vermijdingsgedrag, terwijl schuld kan leiden tot herstelgedrag. Het onderscheid tussen schaamte ("ik ben slecht") en schuld ("ik deed iets verkeerds") bepaalt of een vader repareert of zich terugtrekt.',
    bron: 'Brown (2012) – Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
  },

  {
    id: 'pulse_zelf_24',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag je eigen vermoeidheid herkend en daar rekening mee gehouden in je ouderschap?',
    antwoorden: [
      'Ja, ik paste mijn verwachtingen aan omdat ik moe was',
      'Ik merkte mijn vermoeidheid maar ging op dezelfde voet door',
      'Mijn vermoeidheid leidde tot kortere lontjes zonder dat ik het door had',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vermoeidheid put de zelfregulatie-reserves uit. Het ego-depletion model laat zien dat wilskracht een beperkte bron is die hersteld moet worden, met name via slaap en bewuste pauzes.',
    bron: 'Baumeister & Tierney (2011) – Willpower: Rediscovering the Greatest Human Strength',
  },

  {
    id: 'pulse_zelf_25',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag voor het slapengaan een positief moment met je kind gecreëerd?',
    antwoorden: [
      'Ja, we hadden een warm en rustig moment samen',
      'Ik probeerde het maar de avondroutine was hectisch',
      'De avond eindigde gespannen of chaotisch',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het laatste contactmoment van de dag heeft een disproportioneel groot effect op het gevoel van veiligheid bij het kind. Een warm bedtijdritueel verlaagt het cortisol en bevordert een veilige gehechtheid.',
    bron: 'Gottman & DeClaire (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_zelf_26',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag bewust gekozen om een strijd met je kind te laten gaan?',
    antwoorden: [
      'Ja, ik koos bewust welke strijd de moeite waard was',
      'Ik twijfelde maar ging toch in discussie',
      'Ik ging in op elke strijd zonder te kiezen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Selectieve aandacht voor gedrag is een cruciale ouderlijke vaardigheid. Niet elk ongewenst gedrag vraagt om correctie; soms is negeren effectiever dan reageren en voorkomt het een escalatiecyclus.',
    bron: 'Kazdin (2008) – The Kazdin Method for Parenting the Defiant Child',
  },

  {
    id: 'pulse_zelf_27',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag gemerkt dat honger of dorst je humeur als vader beïnvloedde?',
    antwoorden: [
      'Ja, ik herkende het en at of dronk iets voor ik verder ging',
      'Ik merkte het achteraf maar paste niets aan in het moment',
      'Ik was prikkelbaar zonder de link met honger of dorst te leggen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Glucosetekort vermindert het vermogen tot zelfcontrole. Onderzoek toont aan dat lage bloedsuikerspiegels samenhangen met meer impulsief en agressief gedrag, ook bij ouders.',
    bron: 'Baumeister & Tierney (2011) – Willpower: Rediscovering the Greatest Human Strength',
  },

  {
    id: 'pulse_zelf_28',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag een opmerking van je partner of co-ouder over je ouderschap kunnen ontvangen zonder defensief te worden?',
    antwoorden: [
      'Ja, ik luisterde open en nam het mee',
      'Ik voelde me aangevallen maar hield me in',
      'Ik reageerde defensief of afwijzend',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Defensieve reacties zijn vaak een teken van een geactiveerd dreigingssysteem. Het vermogen om feedback te ontvangen zonder in verdediging te schieten is een teken van emotionele volwassenheid en versterkt de co-ouderrelatie.',
    bron: 'Gottman (1999) – The Seven Principles for Making Marriage Work',
  },

  {
    id: 'pulse_zelf_29',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag een moment gehad waarop je automatisch reageerde en pas daarna nadacht?',
    antwoorden: [
      'Nee, ik heb steeds eerst nagedacht voor ik reageerde',
      'Eén keer reageerde ik automatisch maar ik corrigeerde mezelf snel',
      'Ik reageerde meerdere keren automatisch zonder reflectie',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Automatische reactiepatronen worden aangestuurd door het impliciete geheugen. Mindfulness vergroot de kloof tussen trigger en reactie, waardoor ouders bewuster kunnen kiezen hoe zij reageren.',
    bron: 'Kabat-Zinn & Kabat-Zinn (1997) – Everyday Blessings: The Inner Work of Mindful Parenting',
  },

  {
    id: 'pulse_zelf_30',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag je kind ruimte gegeven om een eigen oplossing te bedenken in plaats van het zelf op te lossen?',
    antwoorden: [
      'Ja, ik wachtte geduldig en liet mijn kind zelf nadenken',
      'Ik gaf hints maar nam het uiteindelijk toch over',
      'Ik loste het meteen zelf op zonder mijn kind de kans te geven',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het onderdrukken van de impuls om direct in te grijpen bevordert de probleemoplossende vaardigheden van het kind. Dit noodzaakt zelfregulatie bij de vader: de drang om te helpen moet worden uitgesteld.',
    bron: 'Mischel (2014) – The Marshmallow Test: Why Self-Control Is the Engine of Success',
  },

  {
    id: 'pulse_zelf_31',
    skill: 'Zelfregulatie',
    vraag: 'Was er vandaag een moment dat je twee dingen tegelijk moest doen (werk/huishouden) terwijl je kind aandacht vroeg?',
    antwoorden: [
      'Ja, ik stopte even met mijn taak en gaf mijn kind eerst aandacht',
      'Ik probeerde beide tegelijk en dat ging redelijk',
      'Ik reageerde geïrriteerd omdat ik werd onderbroken',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Multitasking verlaagt het vermogen tot emotieregulatie. De prefrontale cortex kan niet tegelijkertijd een taak uitvoeren en sociaal-emotioneel afstemmen op een kind.',
    bron: 'Ochsner & Gross (2005) – The Cognitive Control of Emotion',
  },

  {
    id: 'pulse_zelf_32',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag humor kunnen gebruiken om een gespannen moment met je kind te doorbreken?',
    antwoorden: [
      'Ja, humor hielp om de spanning te verlagen en verbinding te maken',
      'Ik probeerde het maar mijn kind was er niet ontvankelijk voor',
      'Er was geen ruimte voor humor; de spanning bleef',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Humor activeert het beloningssysteem en verlaagt cortisol. Speelse interacties tussen vader en kind versterken de hechtingsrelatie en leren het kind dat spanningsvolle situaties oplosbaar zijn.',
    bron: 'Siegel & Bryson (2012) – The Whole-Brain Child: 12 Revolutionary Strategies to Nurture Your Child\'s Developing Mind',
  },

  {
    id: 'pulse_zelf_33',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag gemerkt dat je je eigen normen te streng toepaste op je kind?',
    antwoorden: [
      'Ja, ik herkende het en paste mijn verwachtingen aan het niveau van mijn kind aan',
      'Ik twijfelde of mijn verwachtingen realistisch waren',
      'Ik eiste iets van mijn kind dat eigenlijk te veel gevraagd was',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Ontwikkelingspsychologisch passende verwachtingen zijn cruciaal. Wanneer ouders eisen stellen die het ontwikkelingsniveau van het kind overstijgen, ontstaan onnodige conflicten en beschadigt dit het zelfbeeld van het kind.',
    bron: 'Erikson (1950) – Childhood and Society',
  },

  {
    id: 'pulse_zelf_34',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag een moment gehad waarop je bewust de ruimte verliet om jezelf te reguleren?',
    antwoorden: [
      'Ja, ik legde kort uit dat ik even weg moest en kwam rustig terug',
      'Ik wilde weglopen maar bleef en worstelde met mijn emoties',
      'Ik verliet de ruimte abrupt zonder uitleg',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Tijdelijk de situatie verlaten is een legitieme en effectieve regulatiestrategie, mits het kind niet in onzekerheid achterblijft. Het geeft het autonome zenuwstelsel de kans om terug te keren naar de window of tolerance.',
    bron: 'Siegel (1999) – The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are',
  },

  {
    id: 'pulse_zelf_35',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag gemerkt dat je sneller geïrriteerd raakte dan normaal?',
    antwoorden: [
      'Ja, ik herkende het patroon en paste mijn gedrag bewust aan',
      'Ik merkte het maar kon er niet veel aan veranderen',
      'Ik was prikkelbaar en dat beïnvloedde mijn interacties met mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Verhoogde prikkelbaarheid is vaak een teken van een overbelast zenuwstelsel. Herkenning van dit patroon is de eerste stap naar regulatie — zonder bewustzijn is bijsturing onmogelijk.',
    bron: 'McGonigal (2012) – The Willpower Instinct: How Self-Control Works, Why It Matters, and What You Can Do to Get More of It',
  },

  {
    id: 'pulse_zelf_36',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag een emotionele reactie bij je kind kunnen begeleiden zonder zelf meegesleurd te worden?',
    antwoorden: [
      'Ja, ik bleef geaard en hielp mijn kind door de emotie heen',
      'Ik begon stabiel maar voelde me gaandeweg ook emotioneel',
      'De emotie van mijn kind trok me mee en ik verloor mijn kalmte',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Emotionele besmetting is een neurobiologisch proces: spiegelneuronen zorgen ervoor dat we de emoties van anderen letterlijk meevoelen. Bewuste zelfregulatie is nodig om als emotioneel anker te functioneren.',
    bron: 'Siegel & Bryson (2012) – The Whole-Brain Child: 12 Revolutionary Strategies to Nurture Your Child\'s Developing Mind',
  },

  {
    id: 'pulse_zelf_37',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag bewust stilte of kalmte opgezocht als tegenwicht voor de drukte van het gezinsleven?',
    antwoorden: [
      'Ja, ik heb bewust een moment van stilte ingebouwd',
      'Ik had het nodig maar vond geen geschikt moment',
      'De dag was constant druk zonder enig moment van rust',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Sensorische overbelasting vermindert het vermogen tot emotieregulatie. Korte momenten van stilte helpen het zenuwstelsel om te herstellen en de prefrontale cortex om weer optimaal te functioneren.',
    bron: 'Kabat-Zinn (1990) – Full Catastrophe Living: Using the Wisdom of Your Body and Mind to Face Stress, Pain, and Illness',
  },

  {
    id: 'pulse_zelf_38',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag een moment gehad waarop je merkte dat je in een machtsstrijd met je kind belandde?',
    antwoorden: [
      'Ja, ik herkende het en stapte er bewust uit',
      'Ik merkte het maar bleef toch doorgaan',
      'Ik zat er middenin zonder het door te hebben',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Machtsstrijd activeren bij zowel ouder als kind het sympathische zenuwstelsel. Het herkennen en doorbreken van dit patroon vereist dat de ouder de regie neemt over de eigen fysiologische staat.',
    bron: 'Gordon (1970) – Parent Effectiveness Training: The Proven Program for Raising Responsible Children',
  },

  {
    id: 'pulse_zelf_39',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag je kind eerlijk verteld dat je even geduld nodig had?',
    antwoorden: [
      'Ja, ik communiceerde dit helder en mijn kind begreep het',
      'Ik dacht eraan maar deed het niet',
      'Ik verwachtte dat mijn kind het zelf zou aanvoelen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Transparante communicatie over eigen grenzen modelleert zelfregulatie voor kinderen. Het leert hen dat emoties tijdelijk zijn en dat het vragen om ruimte een gezonde strategie is.',
    bron: 'Gottman & DeClaire (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_zelf_40',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag een moment gehad waarop je kind je verraste met gedrag waar je trots op was?',
    antwoorden: [
      'Ja, en ik heb dat specifiek benoemd en gevierd',
      'Ja, maar ik heb het niet expliciet benoemd',
      'Ik was te druk om positief gedrag op te merken',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het opmerken en benoemen van positief gedrag vereist dat de vader uit de automatische piloot stapt. Positieve bekrachtiging is effectiever dan straf en versterkt het gewenste gedrag significant.',
    bron: 'Kazdin (2008) – The Kazdin Method for Parenting the Defiant Child',
  },

  {
    id: 'pulse_zelf_41',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag je eigen perfectionisme losgelaten in een situatie met je kind?',
    antwoorden: [
      'Ja, ik accepteerde dat het niet perfect hoefde te zijn',
      'Ik worstelde ermee maar liet het uiteindelijk los',
      'Mijn perfectionisme bepaalde hoe ik reageerde op mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Perfectionisme bij ouders is geassocieerd met hogere niveaus van ouderlijke stress en kritisch gedrag. Zelfcompassie — de bereidheid om eigen onvolmaaktheid te aanvaarden — is een beschermende factor.',
    bron: 'Neff (2011) – Self-Compassion: The Proven Power of Being Kind to Yourself',
  },

  {
    id: 'pulse_zelf_42',
    skill: 'Zelfregulatie',
    vraag: 'Was er vandaag een moment dat je werkstress meenam naar de interactie met je kind?',
    antwoorden: [
      'Ik heb bewust een overgang gemaakt tussen werk en gezin',
      'Ik merkte dat werkstress meespeelde maar kon het deels loslaten',
      'Werkstress beïnvloedde hoe ik met mijn kind omging',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het spillover-effect van werkstress op ouderschap is goed gedocumenteerd. Een bewust transitieritueel tussen werk en gezin helpt de vader om mentaal over te schakelen en emotioneel beschikbaar te zijn.',
    bron: 'Repetti & Wood (1997) – Effects of Daily Stress at Work on Mothers\' Interactions With Preschoolers',
  },

  {
    id: 'pulse_zelf_43',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag je kind geobserveerd zonder meteen te willen corrigeren of sturen?',
    antwoorden: [
      'Ja, ik keek rustig toe en genoot van wat mijn kind deed',
      'Ik probeerde het maar greep toch in',
      'Ik stuurde of corrigeerde mijn kind bijna automatisch',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Observeren zonder oordeel is een mindfulness-vaardigheid die de vader helpt om niet elk moment tot een leermoment te maken. Kinderen hebben vrij spel nodig zonder voortdurende sturing.',
    bron: 'Kabat-Zinn & Kabat-Zinn (1997) – Everyday Blessings: The Inner Work of Mindful Parenting',
  },

  {
    id: 'pulse_zelf_44',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag gemerkt dat je vergeleek hoe jouw kind zich gedraagt met andere kinderen?',
    antwoorden: [
      'Ik betrapte mezelf erop en liet de vergelijking bewust los',
      'Ik vergeleek en voelde ongemak maar deed er niets mee',
      'De vergelijking beïnvloedde hoe ik naar mijn kind keek of reageerde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Sociale vergelijking activeert evaluatieve processen die de onvoorwaardelijke acceptatie van het kind ondermijnen. Elk kind ontwikkelt zich in een eigen tempo en langs een eigen pad.',
    bron: 'Erikson (1950) – Childhood and Society',
  },

  {
    id: 'pulse_zelf_45',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag na een lastig moment met je kind even gereflecteerd op wat er gebeurde?',
    antwoorden: [
      'Ja, ik nam even de tijd om na te denken over wat er speelde en wat ik kon leren',
      'Ik dacht er vluchtig over na',
      'Ik ging meteen door naar de volgende activiteit zonder reflectie',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Reflectief functioneren — het vermogen om na te denken over eigen en andermans mentale toestanden — is een van de sterkste voorspellers van veilige gehechtheid bij kinderen.',
    bron: 'Fonagy et al. (2002) – Affect Regulation, Mentalization, and the Development of the Self',
  },

  {
    id: 'pulse_zelf_46',
    skill: 'Zelfregulatie',
    vraag: 'Heb je vandaag lichaamsbeweging of fysieke activiteit gebruikt om spanning kwijt te raken?',
    antwoorden: [
      'Ja, ik heb bewust bewogen en merkte dat het mijn geduld ten goede kwam',
      'Ik had het willen doen maar kwam er niet aan toe',
      'Ik heb niet bewogen en merkte dat spanning zich ophoopte',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Lichaamsbeweging verhoogt de productie van BDNF (brain-derived neurotrophic factor) en verbetert de werking van de prefrontale cortex, waardoor zelfregulatie effectiever verloopt.',
    bron: 'McGonigal (2012) – The Willpower Instinct: How Self-Control Works, Why It Matters, and What You Can Do to Get More of It',
  },

  // ── GRENZEN (46 vragen) ─────────────────────────────────────────

  {
    id: 'pulse_gren_01',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag nee gezegd tegen je kind?',
    antwoorden: [
      'Ja, rustig en duidelijk',
      'Ja, maar ik verantwoordde het te lang',
      'Nee – of het werd geen nee',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Een nee zonder lange uitleg is krachtiger dan een nee met tien redenen. Kinderen testen grenzen – ze zoeken de grens, niet het debat.',
    bron: 'Leman (2005) – Have a New Kid by Friday',
  },

  {
    id: 'pulse_gren_02',
    skill: 'Grenzen',
    vraag: 'Was er een moment vandaag dat je een grens stelde die je daarna ook hield?',
    antwoorden: [
      'Ja, gezegd én gedaan',
      'Gezegd, maar na aandringen toch toegegeven',
      'Geen grens gesteld vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Consistentie is de kern van grenzen stellen. Kinderen die weten dat een nee echt nee is, proberen minder te onderhandelen – en voelen zich veiliger.',
    bron: 'Baumrind (1991) – The Influence of Parenting Style',
  },

  {
    id: 'pulse_gren_03',
    skill: 'Grenzen',
    vraag: 'Heeft je kind vandaag een grens geprobeerd te overschrijden?',
    antwoorden: [
      'Ja, en ik bleef kalm en consistent',
      'Ja, en ik reageerde inconsistent',
      'Niet echt – rustige dag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Grenzen testen is de taak van kinderen – het bewijst dat ze gezond ontwikkelen. De taak van de vader is om rustig en consistent te reageren, niet geïrriteerd.',
    bron: 'Erikson (1950) – Childhood and Society',
  },

  {
    id: 'pulse_gren_04',
    skill: 'Grenzen',
    vraag: 'Was er een grens die je stelde vanuit frustratie in plaats van bewuste keuze?',
    antwoorden: [
      'Nee – mijn grenzen kwamen van binnen, niet van stress',
      'Eén moment dat reactief was',
      'Ja, ik reageerde meer vanuit irritatie',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Grenzen gesteld vanuit frustratie zijn grillig en verwarrend voor kinderen. Grenzen gesteld vanuit waarden zijn consistent en veilig.',
    bron: 'Greene (2014) – The Explosive Child',
  },

  {
    id: 'pulse_gren_05',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag je eigen grens bewaakt – wat jij nodig hebt als vader?',
    antwoorden: [
      'Ja, ik paste op mijn eigen grenzen',
      'Ik probeerde het maar gaf te veel',
      'Nee, ik gaf meer dan ik had',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Grenzen stellen voor jezelf is geen egoïsme – het is voorwaarde voor duurzaam vaderschap. Een vader zonder eigen grenzen raakt uitgeput en reageert dan slechter.',
    bron: 'Brown (2010) – The Gifts of Imperfection',
  },

  {
    id: 'pulse_gren_06',
    skill: 'Grenzen',
    vraag: 'Was er vandaag een moment dat je kind een grens accepteerde zonder groot conflict?',
    antwoorden: [
      'Ja, en ik erkende dat dat goed ging',
      'Ja, maar ik stond er niet bij stil',
      'Nee, elke grens was een gevecht',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Erken momenten waarop grenzen goed gaan – dat is net zo leerzaam als de momenten dat ze niet gaan. Positieve bekrachtiging van grensacceptatie werkt.',
    bron: 'Skinner (1953) – Science and Human Behavior',
  },

  {
    id: 'pulse_gren_07',
    skill: 'Grenzen',
    vraag: 'Stelde je vandaag een grens met warmte – of klonk het als een bevel?',
    antwoorden: [
      'Met warmte – stevig maar vriendelijk',
      'Zakelijk – duidelijk maar koel',
      'Als bevel – harder dan nodig',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De toon van een grens bepaalt hoe het ontvangen wordt. "Dit doen we niet" met warmte wordt beter geaccepteerd dan hetzelfde gezegd met harde stem.',
    bron: 'Gordon (1970) – Parent Effectiveness Training',
  },

  {
    id: 'pulse_gren_08',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een grens gesteld die je kind niet leuk vond, maar die je toch volhield?',
    antwoorden: [
      'Ja, ik hield vol met kalmte en uitleg',
      'Ik hield vol maar voelde me schuldig',
      'Ik gaf toe aan het protest van mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Consistente grenzen bieden kinderen voorspelbaarheid, wat essentieel is voor emotionele veiligheid. Een grens die steeds verschuift, creëert meer onzekerheid dan geen grens.',
    bron: 'Baumrind (1991) – The Influence of Parenting Style on Adolescent Competence and Substance Use',
  },

  {
    id: 'pulse_gren_09',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een grens uitgelegd aan je kind op een manier die bij zijn of haar leeftijd paste?',
    antwoorden: [
      'Ja, ik gebruikte taal en voorbeelden die mijn kind begreep',
      'Ik legde het uit maar merkte dat mijn kind het niet helemaal vatte',
      'Ik gaf een bevel zonder uitleg',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Inductief redeneren — het uitleggen van de reden achter een regel — bevordert de morele ontwikkeling van het kind. Kinderen die begrijpen waarom een grens er is, internaliseren deze sneller.',
    bron: 'Hoffman (2000) – Empathy and Moral Development: Implications for Caring and Justice',
  },

  {
    id: 'pulse_gren_10',
    skill: 'Grenzen',
    vraag: 'Was er vandaag een moment dat je kind een grens testte door te onderhandelen of te zeuren?',
    antwoorden: [
      'Ja, ik erkende het verzoek maar hield de grens helder',
      'Ik ging in onderhandeling en paste de grens gedeeltelijk aan',
      'Ik gaf uiteindelijk toe om rust te krijgen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het testen van grenzen is een gezond teken van autonomie-ontwikkeling bij kinderen. De reactie van de ouder bepaalt of het kind leert dat grenzen betrouwbaar en veilig zijn.',
    bron: 'Erikson (1950) – Childhood and Society',
  },

  {
    id: 'pulse_gren_11',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag vooraf een verwachting of afspraak duidelijk gemaakt aan je kind?',
    antwoorden: [
      'Ja, ik bereidde mijn kind voor op wat er ging gebeuren en wat ik verwachtte',
      'Ik noemde het kort maar niet heel duidelijk',
      'Ik verwachtte dat mijn kind het zelf zou weten',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Proactief grenzen stellen — voordat een situatie escaleert — is effectiever dan reactief ingrijpen. Kinderen functioneren beter als zij weten wat er van hen verwacht wordt.',
    bron: 'Greene (2014) – The Explosive Child: A New Approach for Understanding and Parenting Easily Frustrated, Chronically Inflexible Children',
  },

  {
    id: 'pulse_gren_12',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een consequentie laten volgen nadat je kind een afspraak niet nakwam?',
    antwoorden: [
      'Ja, de consequentie was logisch, voorspelbaar en rustig gebracht',
      'Ik kondigde een consequentie aan maar voerde die niet helemaal door',
      'Er was geen consequentie; ik liet het gaan',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Logische consequenties — die direct verband houden met het gedrag — zijn effectiever dan willekeurige straffen. Ze helpen kinderen het verband te leggen tussen hun keuzes en de gevolgen.',
    bron: 'Gordon (1970) – Parent Effectiveness Training: The Proven Program for Raising Responsible Children',
  },

  {
    id: 'pulse_gren_13',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een duidelijke grens gesteld rond schermtijd?',
    antwoorden: [
      'Ja, ik hanteerde een heldere afspraak en hield me eraan',
      'Er was een afspraak maar ik was flexibeler dan gepland',
      'De schermtijd liep uit de hand zonder duidelijke grens',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen missen de prefrontale rijpheid om zelf hun schermtijd te reguleren. Duidelijke en consistente grenzen rond media helpen het kind om zelfregulatie te ontwikkelen in een omgeving vol digitale prikkels.',
    bron: 'Mischel (2014) – The Marshmallow Test: Why Self-Control Is the Engine of Success',
  },

  {
    id: 'pulse_gren_14',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een grens gesteld die verschilde van wat je partner of co-ouder zou doen?',
    antwoorden: [
      'Ja, en we hebben dit onderling afgestemd zonder het kind ertussen te zetten',
      'Er was een verschil maar we bespraken het niet',
      'Het verschil leidde tot verwarring bij mijn kind of spanning tussen ons',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Inconsistentie tussen opvoeders ondermijnt de effectiviteit van grenzen. Kinderen leren snel welke ouder soepeler is, wat tot manipulatief gedrag kan leiden en de ouderalliantie verzwakt.',
    bron: 'Gottman (1999) – The Seven Principles for Making Marriage Work',
  },

  {
    id: 'pulse_gren_15',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag je kind een keuze gegeven binnen de grenzen die je stelde?',
    antwoorden: [
      'Ja, ik gaf twee of drie opties binnen een duidelijk kader',
      'Ik probeerde het maar het werd toch een open onderhandeling',
      'Ik gaf geen keuze en bepaalde alles zelf',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Beperkte keuzes bieden het kind een gevoel van autonomie binnen een veilige structuur. Dit combineert de behoefte aan grenzen met de ontwikkelingsbehoefte aan zelfstandigheid.',
    bron: 'Baumrind (1991) – The Influence of Parenting Style on Adolescent Competence and Substance Use',
  },

  {
    id: 'pulse_gren_16',
    skill: 'Grenzen',
    vraag: 'Was er vandaag een situatie waarin je kind fysiek over een grens ging (duwen, slaan, gooien)?',
    antwoorden: [
      'Ja, ik stopte het gedrag rustig en begeleidde mijn kind naar een alternatief',
      'Ik greep in maar was zelf ook geagiteerd',
      'Ik reageerde heftig of wist niet hoe ik moest reageren',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Fysiek grensoverschrijdend gedrag bij kinderen is vaak een uiting van overweldiging. De vader die kalm het gedrag stopt en het onderliggende gevoel benoemt, leert het kind dat emoties er mogen zijn maar bepaald gedrag niet.',
    bron: 'Siegel & Bryson (2012) – The Whole-Brain Child: 12 Revolutionary Strategies to Nurture Your Child\'s Developing Mind',
  },

  {
    id: 'pulse_gren_17',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een grens hersteld nadat je hem eerder had laten vieren?',
    antwoorden: [
      'Ja, ik benoemde eerlijk dat ik de grens opnieuw wilde hanteren',
      'Ik probeerde het maar mijn kind verwees naar de eerdere uitzondering',
      'Ik liet de grens opnieuw gaan om conflict te vermijden',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het herstellen van een grens vereist kwetsbaarheid: de vader moet erkennen dat hij eerder inconsequent was. Dit modelleert eerlijkheid en leert het kind dat fouten hersteld kunnen worden.',
    bron: 'Brown (2012) – Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
  },

  {
    id: 'pulse_gren_18',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag de veiligheid van je kind als reden voor een grens duidelijk benoemd?',
    antwoorden: [
      'Ja, ik legde uit dat de grens er was om mijn kind te beschermen',
      'Ik stelde de grens maar legde de reden niet uit',
      'Ik miste een moment om een veiligheidsgrens te stellen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Veiligheidsgrenzen zijn niet onderhandelbaar en vormen de basis van autoriteit. Wanneer een kind begrijpt dat een grens er is om bescherming te bieden, ervaart het de ouder als betrouwbaar in plaats van beperkend.',
    bron: 'Gordon (1970) – Parent Effectiveness Training: The Proven Program for Raising Responsible Children',
  },

  {
    id: 'pulse_gren_19',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag rekening gehouden met de emotionele toestand van je kind bij het stellen van een grens?',
    antwoorden: [
      'Ja, ik wachtte tot mijn kind ontvankelijk was of paste mijn timing aan',
      'Ik stelde de grens maar het timing was niet ideaal',
      'Ik stelde de grens terwijl mijn kind al overweldigd was',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Een kind dat emotioneel ontregeld is, kan geen informatie verwerken of regels opnemen. Eerst verbinden, dan corrigeren is een basisprincipe van effectieve grensenstelling.',
    bron: 'Siegel & Bryson (2014) – No-Drama Discipline: The Whole-Brain Way to Calm the Chaos and Nurture Your Child\'s Developing Mind',
  },

  {
    id: 'pulse_gren_20',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een grens gesteld rond eetgedrag (snoepen, groenten, tafelmanieren)?',
    antwoorden: [
      'Ja, ik was duidelijk en rustig over de eetafspraak',
      'Er was een grens maar ik handhaafde die niet helemaal',
      'Eetmomenten verliepen chaotisch zonder heldere grenzen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Autoritatieve grenzen rond voeding — duidelijk maar niet dwingend — zijn geassocieerd met gezondere eetpatronen bij kinderen. Druk uitoefenen om te eten werkt averechts en vergroot voedselweigering.',
    bron: 'Baumrind (1991) – The Influence of Parenting Style on Adolescent Competence and Substance Use',
  },

  {
    id: 'pulse_gren_21',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een grens moeten herhalen die je al vaker hebt gesteld?',
    antwoorden: [
      'Ja, ik herhaalde rustig en bleef consistent',
      'Ik herhaalde de grens maar met hoorbare frustratie',
      'Ik gaf het op omdat herhalen zinloos leek',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Herhaling is een normaal onderdeel van het leerproces bij kinderen. Grenzen moeten gemiddeld tientallen keren herhaald worden voordat ze geïnternaliseerd zijn — dit is neurobiologisch bepaald, niet onwil.',
    bron: 'Siegel (2012) – The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are',
  },

  {
    id: 'pulse_gren_22',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag gemerkt dat je een grens stelde die eigenlijk meer over jouw behoefte dan over die van je kind ging?',
    antwoorden: [
      'Ja, ik herkende het en was eerlijk daarover',
      'Ik twijfelde of de grens voor mij of mijn kind was',
      'Ik presenteerde mijn eigen behoefte als een regel voor mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Transparantie over wiens behoefte een grens dient, vergroot het vertrouwen. Een vader die zegt "ik heb nu rust nodig" in plaats van "jij moet stil zijn" modelleert eerlijke communicatie.',
    bron: 'Gordon (1970) – Parent Effectiveness Training: The Proven Program for Raising Responsible Children',
  },

  {
    id: 'pulse_gren_23',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een moment gehad waarop je je afvroeg of je te streng of te soepel was?',
    antwoorden: [
      'Ja, en ik heb er bewust over nagedacht en een middenweg gekozen',
      'Ik twijfelde maar veranderde niets',
      'Ik was extreem streng of extreem soepel zonder reflectie',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De balans tussen warmte en structuur is het kenmerk van autoritative opvoeding — de stijl die consistent geassocieerd wordt met de beste uitkomsten voor kinderen op sociaal, emotioneel en cognitief vlak.',
    bron: 'Baumrind (1991) – The Influence of Parenting Style on Adolescent Competence and Substance Use',
  },

  {
    id: 'pulse_gren_24',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een grens gesteld rond bedtijd en de avondroutine?',
    antwoorden: [
      'Ja, de bedtijdroutine verliep met heldere afspraken en rust',
      'Er waren afspraken maar het duurde langer dan gepland',
      'De bedtijd was een gevecht zonder duidelijke structuur',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Een voorspelbare bedtijdroutine verlaagt het cortisolniveau bij kinderen en bevordert de slaapkwaliteit. Consistente grenzen rond slaaptijden ondersteunen de biologische klok en emotionele regulatie.',
    bron: 'Mindell et al. (2006) – A Nightly Bedtime Routine: Impact on Sleep in Young Children and Maternal Mood',
  },

  {
    id: 'pulse_gren_25',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag kunnen voorkomen dat een kleine overtreding uitgroeide tot een groot conflict?',
    antwoorden: [
      'Ja, ik pakte het vroeg en rustig aan',
      'Ik merkte het te laat en het liep enigszins uit de hand',
      'Een kleine kwestie werd een groot conflict',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vroege interventie bij gedrag dat escaleert is effectiever dan wachten tot een grens hard overschreden is. Dit vereist dat de vader alert is op subtiele signalen van toenemende spanning.',
    bron: 'Greene (2014) – The Explosive Child: A New Approach for Understanding and Parenting Easily Frustrated, Chronically Inflexible Children',
  },

  {
    id: 'pulse_gren_26',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag je kind geholpen om een eigen grens aan te geven (naar jou, een broer/zus of ander kind)?',
    antwoorden: [
      'Ja, ik moedigde mijn kind aan om voor zichzelf op te komen',
      'Ik zag de kans maar greep niet in',
      'Ik bepaalde zelf hoe de situatie moest verlopen zonder mijn kind erbij te betrekken',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die leren hun eigen grenzen aan te geven, ontwikkelen een sterker gevoel van persoonlijke agency. De vader als coach — in plaats van als scheidsrechter — bevordert de zelfstandigheid van het kind.',
    bron: 'Erikson (1950) – Childhood and Society',
  },

  {
    id: 'pulse_gren_27',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een grens gesteld terwijl er andere volwassenen bij waren (visite, school, openbaar)?',
    antwoorden: [
      'Ja, ik bleef consistent ongeacht wie er bij was',
      'Ik stelde de grens maar voelde me ongemakkelijk door de blikken',
      'Ik liet de grens vieren om een scène te voorkomen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Sociale druk kan ouders verleiden om grenzen aan te passen aan het publiek. Consistentie tussen privé- en publieke situaties is cruciaal: kinderen toetsen of grenzen contextafhankelijk zijn.',
    bron: 'Tangney et al. (2004) – High Self-Control Predicts Good Adjustment, Less Pathology, Better Grades, and Interpersonal Success',
  },

  {
    id: 'pulse_gren_28',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een grens gesteld rond hoe je kind met jou sprak (toon, woordkeuze)?',
    antwoorden: [
      'Ja, ik benoemde rustig wat ik wel en niet accepteer in communicatie',
      'Ik merkte het op maar liet het gaan',
      'Ik reageerde op dezelfde manier terug (schreeuwen, sarcasme)',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Grenzen stellen rond communicatie leert kinderen dat alle gevoelens welkom zijn maar niet alle uitingen. Dit onderscheid — emotie valideren, gedrag begrenzen — is de kern van emotiecoaching.',
    bron: 'Gottman & DeClaire (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_gren_29',
    skill: 'Grenzen',
    vraag: 'Was er vandaag een moment dat je kind een grens respecteerde zonder protest?',
    antwoorden: [
      'Ja, en ik heb dat expliciet erkend en gewaardeerd',
      'Ja, maar ik zei er niets over',
      'Nee, grenzen leidden vandaag steeds tot protest',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het benoemen van momenten waarop een kind een grens accepteert, versterkt dit gedrag via positieve bekrachtiging. Kinderen die erkenning krijgen voor hun samenwerking, werken vaker mee.',
    bron: 'Kazdin (2008) – The Kazdin Method for Parenting the Defiant Child',
  },

  {
    id: 'pulse_gren_30',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een grens moeten stellen die je zelf als kind niet mocht of kreeg?',
    antwoorden: [
      'Ja, ik was me bewust van het verschil en handelde naar eigen waarden',
      'Ik merkte dat mijn eigen opvoeding meespeelde maar wist niet goed hoe ermee om te gaan',
      'Ik kopieerde onbewust patronen uit mijn eigen opvoeding',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Intergenerationele overdracht van opvoedingspatronen is een sterk fenomeen. Bewustzijn van de eigen opvoedingsgeschiedenis stelt vaders in staat om bewuste keuzes te maken in plaats van automatische patronen te herhalen.',
    bron: 'Siegel & Hartzell (2003) – Parenting from the Inside Out: How a Deeper Self-Understanding Can Help You Raise Children Who Thrive',
  },

  {
    id: 'pulse_gren_31',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een moment gehad waarop je kind boos werd over een grens en je dat kon verdragen?',
    antwoorden: [
      'Ja, ik hield de grens vast en liet de boosheid er zijn',
      'Ik hield de grens maar had moeite met de boosheid van mijn kind',
      'De boosheid was zo intens dat ik de grens losliet',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het verdragen van de negatieve emoties van een kind zonder de grens te laten vallen is een vorm van emotionele moed. Het leert het kind dat frustratie hanteerbaar is en niet leidt tot het verliezen van de relatie.',
    bron: 'Brown (2012) – Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
  },

  {
    id: 'pulse_gren_32',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag samen met je kind een afspraak of regel gemaakt?',
    antwoorden: [
      'Ja, we bedachten samen een afspraak waar we allebei achter stonden',
      'Ik betrok mijn kind erbij maar nam uiteindelijk zelf de beslissing',
      'Ik legde de regel op zonder inspraak',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Participatieve besluitvorming vergroot de intrinsieke motivatie van het kind om zich aan afspraken te houden. Kinderen die meedenken over regels voelen meer eigenaarschap en verantwoordelijkheid.',
    bron: 'Gordon (1970) – Parent Effectiveness Training: The Proven Program for Raising Responsible Children',
  },

  {
    id: 'pulse_gren_33',
    skill: 'Grenzen',
    vraag: 'Was er vandaag een situatie tussen je kinderen onderling waar je moest ingrijpen met een grens?',
    antwoorden: [
      'Ja, ik greep eerlijk in en hielp beide kinderen',
      'Ik greep in maar koos onbewust een kant',
      'Ik liet het te lang doorgaan of reageerde te heftig',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Bij conflicten tussen broers en zussen is het belangrijk dat de vader als bemiddelaar optreedt zonder partij te kiezen. Favoritisme — zelfs onbewust — beschadigt de onderlinge relatie en het zelfbeeld van het buitengesloten kind.',
    bron: 'Faber & Mazlish (2012) – Siblings Without Rivalry: How to Help Your Children Live Together So You Can Live Too',
  },

  {
    id: 'pulse_gren_34',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een grens gesteld zonder te dreigen met straf?',
    antwoorden: [
      'Ja, ik stelde de grens helder zonder dreigementen',
      'Ik begon rustig maar dreigde uiteindelijk toch',
      'Ik gebruikte dreigementen als eerste strategie',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Dreigementen activeren het angstsysteem van het kind en ondermijnen de intrinsieke motivatie. Grenzen die gebaseerd zijn op begrip en verbinding zijn effectiever op de lange termijn dan grenzen gebaseerd op angst.',
    bron: 'Siegel & Bryson (2014) – No-Drama Discipline: The Whole-Brain Way to Calm the Chaos and Nurture Your Child\'s Developing Mind',
  },

  {
    id: 'pulse_gren_35',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag duidelijk gemaakt wat je kind wél mocht doen nadat je iets verbood?',
    antwoorden: [
      'Ja, ik gaf een helder alternatief bij het nee',
      'Ik zei nee maar bood geen alternatief aan',
      'Ik zei alleen nee zonder verdere richting',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Een verbod zonder alternatief laat het kind zonder richting. Door te benoemen wat wél kan, helpt de vader het kind om gewenst gedrag te leren in plaats van alleen te weten wat niet mag.',
    bron: 'Kazdin (2008) – The Kazdin Method for Parenting the Defiant Child',
  },

  {
    id: 'pulse_gren_36',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een uitzondering gemaakt op een vaste regel? Zo ja, heb je dat uitgelegd?',
    antwoorden: [
      'Ja, ik maakte een bewuste uitzondering en legde uit waarom',
      'Ik maakte een uitzondering maar legde het niet goed uit',
      'Ik week af van regels zonder het te benoemen of uit te leggen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Flexibiliteit binnen structuur is een kenmerk van autoritative opvoeding. Uitzonderingen mogen, mits ze bewust zijn en uitgelegd worden — zo leert het kind dat regels er zijn om redenen, niet als willekeur.',
    bron: 'Baumrind (1991) – The Influence of Parenting Style on Adolescent Competence and Substance Use',
  },

  {
    id: 'pulse_gren_37',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een grens gesteld rond hoe je kind omging met spullen (van zichzelf, van anderen, van jou)?',
    antwoorden: [
      'Ja, ik begeleidde mijn kind rustig in hoe we met spullen omgaan',
      'Ik zei er iets van maar zonder echt door te pakken',
      'Ik reageerde boos toen mijn kind iets kapotmaakte of niet netjes behandelde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Grenzen rond bezittingen leren kinderen respect en verantwoordelijkheid. De manier waarop een vader dit begeleidt — met uitleg of met straf — bepaalt of het kind intrinsieke of extrinsieke motivatie ontwikkelt.',
    bron: 'Deci & Ryan (2000) – The "What" and "Why" of Goal Pursuits: Human Needs and the Self-Determination of Behavior',
  },

  {
    id: 'pulse_gren_38',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag je kind gevraagd om iets te stoppen en daarna gecontroleerd of het daadwerkelijk stopte?',
    antwoorden: [
      'Ja, ik volgde op en bevestigde dat mijn kind luisterde',
      'Ik vroeg het maar controleerde niet of het gebeurde',
      'Ik zei het meerdere keren zonder te controleren of op te volgen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Follow-through is essentieel voor de geloofwaardigheid van grenzen. Wanneer een vader vraagt om iets te stoppen maar niet controleert, leert het kind dat instructies optioneel zijn.',
    bron: 'Patterson (1982) – Coercive Family Process: A Social Learning Approach',
  },

  {
    id: 'pulse_gren_39',
    skill: 'Grenzen',
    vraag: 'Was er vandaag een moment dat je je kind moest begrenzen terwijl je zelf ook moe of overweldigd was?',
    antwoorden: [
      'Ja, ik bleef bewust en stelde de grens met geduld ondanks mijn eigen vermoeidheid',
      'Ik stelde de grens maar mijn vermoeidheid was merkbaar',
      'Mijn eigen overweldiging maakte me te streng of te laks',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De eigen emotionele en fysieke toestand van de ouder is de belangrijkste voorspeller van de kwaliteit van grenzen stellen. Zelfzorg is daarom geen egoïsme maar een investering in beter ouderschap.',
    bron: 'Van der Kolk (2014) – The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma',
  },

  {
    id: 'pulse_gren_40',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een natuurlijk gevolg laten plaatsvinden in plaats van zelf in te grijpen?',
    antwoorden: [
      'Ja, ik liet mijn kind het gevolg ervaren en besprak het daarna',
      'Ik overwoog het maar greep toch preventief in',
      'Ik behoedde mijn kind voor elk ongemak',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Natuurlijke gevolgen — mits veilig — zijn krachtige leermomenten. Een kind dat zijn jas vergeet en het koud heeft, leert effectiever dan een kind dat tien keer wordt herinnerd. Dit vereist dat de vader ongemak bij het kind kan verdragen.',
    bron: 'Dreikurs & Soltz (1964) – Children: The Challenge',
  },

  {
    id: 'pulse_gren_41',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een grens gesteld met lichaamstaal in plaats van alleen met woorden?',
    antwoorden: [
      'Ja, ik ging op ooghoogte, maakte oogcontact en sprak rustig',
      'Ik zei het verbaal maar mijn lichaamstaal ondersteunde het niet',
      'Ik riep de grens vanuit een andere kamer of terwijl ik iets anders deed',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Non-verbale communicatie maakt meer dan 70% uit van de boodschap. Een grens die ondersteund wordt door kalmte, nabijheid en oogcontact is veel effectiever dan woorden alleen.',
    bron: 'Gottman & DeClaire (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_gren_42',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag je kind de ruimte gegeven om een emotie te uiten over een grens zonder die grens te veranderen?',
    antwoorden: [
      'Ja, ik liet de emotie toe en hield de grens tegelijkertijd vast',
      'Ik vond het lastig om de emotie te verdragen en twijfelde over de grens',
      'Ik ontkende de emotie ("stel je niet aan") of gaf toe aan het verdriet',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De combinatie van empathie en begrenzing is het kenmerk van autoritative opvoeding. Het kind leert dat het gehoord wordt én dat grenzen stabiel zijn — beide zijn nodig voor emotionele veiligheid.',
    bron: 'Siegel & Bryson (2014) – No-Drama Discipline: The Whole-Brain Way to Calm the Chaos and Nurture Your Child\'s Developing Mind',
  },

  {
    id: 'pulse_gren_43',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag nagedacht over welke grenzen echt belangrijk zijn en welke je kunt loslaten?',
    antwoorden: [
      'Ja, ik maakte bewust onderscheid tussen essentiële en minder belangrijke grenzen',
      'Ik dacht erover na maar bleef bij al mijn regels',
      'Ik handhaafde alles even streng zonder prioriteit te stellen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Te veel grenzen putten zowel de ouder als het kind uit. Effectieve vaders kiezen bewust welke grenzen ononderhandelbaar zijn (veiligheid, respect) en waar ruimte is voor flexibiliteit.',
    bron: 'Greene (2014) – The Explosive Child: A New Approach for Understanding and Parenting Easily Frustrated, Chronically Inflexible Children',
  },

  {
    id: 'pulse_gren_44',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag je kind complimenteerd nadat het zich aan een lastige afspraak hield?',
    antwoorden: [
      'Ja, ik benoemde specifiek wat mijn kind goed deed',
      'Ik dacht eraan maar zei het niet',
      'Ik nam het voor lief dat mijn kind zich aan de afspraak hield',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Specifieke positieve feedback ("je hebt goed gewacht tot het jouw beurt was") is effectiever dan algemene complimenten ("braaf"). Het versterkt het precieze gedrag dat je wilt zien en vergroot het zelfvertrouwen.',
    bron: 'Kazdin (2008) – The Kazdin Method for Parenting the Defiant Child',
  },

  {
    id: 'pulse_gren_45',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een conflict met je kind kunnen afsluiten op een manier waar jullie allebei vrede mee hadden?',
    antwoorden: [
      'Ja, we sloten het af met begrip en verbinding',
      'Het conflict stopte maar bleef onuitgesproken hangen',
      'Het conflict bleef onopgelost of eindigde met boosheid',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het vermogen om een conflict te repareren is belangrijker dan het vermijden van conflicten. Kinderen die leren dat na een ruzie weer verbinding komt, ontwikkelen een fundamenteel vertrouwen in relaties.',
    bron: 'Gottman (1999) – The Seven Principles for Making Marriage Work',
  },

  {
    id: 'pulse_gren_46',
    skill: 'Grenzen',
    vraag: 'Heb je vandaag een grens gesteld die je kind hielp om verantwoordelijkheid te nemen voor eigen taken (opruimen, huiswerk, klaarmaken)?',
    antwoorden: [
      'Ja, ik begeleidde mijn kind om het zelf te doen met duidelijke verwachtingen',
      'Ik vroeg het maar nam het uiteindelijk toch over',
      'Ik deed het voor mijn kind zonder het een eigen taak te laten',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Grenzen die verantwoordelijkheid bevorderen, ondersteunen de autonomie-ontwikkeling. Een kind dat leert om eigen taken uit te voeren binnen een structuur van heldere verwachtingen, bouwt aan zelfredzaamheid en zelfvertrouwen.',
    bron: 'Erikson (1950) – Childhood and Society',
  },

  // ── AUTONOMIE (45 vragen) ───────────────────────────────────────

  {
    id: 'pulse_auto_01',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag iets zelf geprobeerd dat jij normaal zou overnemen?',
    antwoorden: [
      'Ja, en ik liet het toe – ook al duurde het langer',
      'Ja, maar ik greep toch in',
      'Niet van toepassing vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Ingrijpen als het kind iets zelf kan is de meest voorkomende autonomiekillers. Kinderen leren sneller van hun eigen pogingen dan van het goede voorbeeld van de vader.',
    bron: 'Deci & Ryan (2000) – Self-Determination Theory',
  },

  {
    id: 'pulse_auto_02',
    skill: 'Autonomie',
    vraag: 'Heb je je kind vandaag laten kiezen – ook als jij iets anders had gewild?',
    antwoorden: [
      'Ja, ik liet de keuze bij hem/haar',
      'Ik gaf een keuze maar stuurde wel',
      'Nee, ik maakte de keuze voor hem/haar',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die dagelijks betekenisvolle keuzes maken, ontwikkelen betere besluitvormingsvaardigheden én meer zelfvertrouwen – zelfs als de keuze "fout" is.',
    bron: 'Deci (1995) – Why We Do What We Do',
  },

  {
    id: 'pulse_auto_03',
    skill: 'Autonomie',
    vraag: 'Heb je je kind vandaag ergens voor zien falen – en hoe reageerde je?',
    antwoorden: [
      'Zag het, zei niets – liet het leren',
      'Zag het, gaf een tip maar loste het niet op',
      'Zag het en sprong meteen in om te helpen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Falen is de primaire leerschool van kinderen. Een vader die te snel ingrijpt, steelt het leermoment. Tenzij er gevaar is, is de beste actie: wachten.',
    bron: 'Dweck (2006) – Mindset',
  },

  {
    id: 'pulse_auto_04',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag een mening geuit die je niet deelde?',
    antwoorden: [
      'Ja, en ik respecteerde die mening',
      'Ja, maar ik probeerde het te corrigeren',
      'Niet vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die merken dat hun mening serieus genomen wordt, ook als die anders is, durven later hun eigen stem te gebruiken. Dat is de basis van zelfstandigheid.',
    bron: 'Soenens & Vansteenkiste (2010) – A Theoretical Upgrade of Parenting',
  },

  {
    id: 'pulse_auto_05',
    skill: 'Autonomie',
    vraag: 'Was er vandaag een moment dat je kind iets alleen wilde doen?',
    antwoorden: [
      'Ja, en ik gaf dat ruimte',
      'Ja, maar ik bleef toch dichtbij',
      'Niet vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De behoefte aan "alleen" is gezond, ook bij jonge kinderen. Ruimte geven om alleen te zijn is een teken van respect voor de eigen wereld van je kind.',
    bron: 'Winnicott (1965) – The Capacity to Be Alone',
  },

  {
    id: 'pulse_auto_06',
    skill: 'Autonomie',
    vraag: 'Heb je je kind vandaag ergens complimenten gegeven voor de inspanning, niet het resultaat?',
    antwoorden: [
      'Ja – "goed geprobeerd" of "doorzetter" ipv "slim"',
      'Compliment gegeven maar meer resultaatgericht',
      'Niet complimentgegeven vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die geprezen worden voor inspanning ontwikkelen een groeimindset. Kinderen die geprezen worden voor talent, vermijden moeilijke taken om te falen.',
    bron: 'Mueller & Dweck (1998) – Praise for Intelligence',
  },

  {
    id: 'pulse_auto_07',
    skill: 'Autonomie',
    vraag: 'Heb je je kind vandaag laten weten dat je in hem/haar gelooft?',
    antwoorden: [
      'Ja, expliciet gezegd of getoond',
      'Impliciet misschien, niet direct',
      'Nee',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het Pygmalion-effect toont: hoe meer een vader gelooft in zijn kind, hoe meer het kind in zichzelf gelooft. Je verwachting is zelfvervullend.',
    bron: 'Rosenthal & Jacobson (1968) – Pygmalion in the Classroom',
  },

  {
    id: 'pulse_auto_08',
    skill: 'Autonomie',
    vraag: 'Was er vandaag iets dat je kind goed deed zonder jouw hulp?',
    antwoorden: [
      'Ja, en ik heb het gezien en erkend',
      'Ja, maar ik heb het niet benoemd',
      'Niet dat ik zag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Zelfstandige prestaties benoemen is krachtiger dan helpen. "Je deed dat zelf" is een van de meest opbouwende zinnen die een vader kan zeggen.',
    bron: 'Bandura (1997) – Self-Efficacy: The Exercise of Control',
  },

  {
    id: 'pulse_auto_09',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf bepaald in welke volgorde het zijn taken deed?',
    antwoorden: [
      'Ja, ik liet mijn kind zelf de volgorde kiezen',
      'Ik stuurde een beetje bij, maar gaf wel ruimte',
      'Ik bepaalde de volgorde voor mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer kinderen controle ervaren over de structuur van hun activiteiten, groeit hun gevoel van autonome motivatie. Dit versterkt de intrinsieke drive om taken af te ronden.',
    bron: 'Deci & Ryan (2000) – The "What" and "Why" of Goal Pursuits: Human Needs and the Self-Determination of Behavior',
  },

  {
    id: 'pulse_auto_10',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag een probleem opgelost zonder dat jij een oplossing aanreikte?',
    antwoorden: [
      'Ja, ik liet mijn kind zelf een oplossing bedenken',
      'Ik gaf een hint, maar liet mijn kind het zelf uitwerken',
      'Ik gaf vrij snel de oplossing',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die zelf problemen leren oplossen ontwikkelen een sterker gevoel van self-efficacy. Dit geloof in eigen kunnen is een van de krachtigste voorspellers van veerkracht.',
    bron: 'Bandura (1997) – Self-Efficacy: The Exercise of Control',
  },

  {
    id: 'pulse_auto_11',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag je kind de tijd gegeven om zelf na te denken voordat je hielp?',
    antwoorden: [
      'Ja, ik wachtte geduldig tot mijn kind zelf nadacht',
      'Ik wachtte even, maar sprong er toen toch in',
      'Ik gaf vrij snel het antwoord of de hulp',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wachttijd bieden na een vraag of uitdaging geeft kinderen de kans om eigen denkprocessen te activeren. Dit bevordert dieper leren en zelfstandig redeneren.',
    bron: 'Vansteenkiste & Soenens (2015) – How to Foster Self-Determined Motivation in Parenting',
  },

  {
    id: 'pulse_auto_12',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf zijn kleding uitgekozen?',
    antwoorden: [
      'Ja, mijn kind koos volledig zelf wat het aantrok',
      'Ik gaf een paar opties waaruit mijn kind kon kiezen',
      'Ik koos de kleding voor mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Dagelijkse keuzes zoals kleding lijken klein, maar bieden kinderen oefenmomenten in autonomie. Het versterkt hun gevoel van eigenaarschap over het eigen lichaam en leven.',
    bron: 'Kohn (2005) – Unconditional Parenting: Moving from Rewards and Punishments to Love and Reason',
  },

  {
    id: 'pulse_auto_13',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag een uitleg gegeven waarom een regel bestaat, in plaats van alleen te zeggen "omdat ik het zeg"?',
    antwoorden: [
      'Ja, ik legde duidelijk uit waarom de regel er is',
      'Ik gaf een korte uitleg, maar niet heel uitgebreid',
      'Ik verwees vooral naar mijn autoriteit als ouder',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Uitleg geven bij regels wordt "autonomie-ondersteunende structuur" genoemd. Kinderen internaliseren regels beter wanneer ze het achterliggende waarom begrijpen.',
    bron: 'Soenens & Vansteenkiste (2010) – A Theoretical Upgrade of the Concept of Parental Psychological Control',
  },

  {
    id: 'pulse_auto_14',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf aangegeven wanneer het klaar was met een activiteit?',
    antwoorden: [
      'Ja, mijn kind bepaalde zelf wanneer het stopte',
      'We onderhandelden samen over het moment van stoppen',
      'Ik bepaalde wanneer de activiteit voorbij was',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer kinderen leren hun eigen verzadigingspunt te herkennen bij activiteiten, ontwikkelen ze zelfregulatie. Dit is een kernvaardigheid voor levenslange autonomie.',
    bron: 'Ryan & Deci (2017) – Self-Determination Theory: Basic Psychological Needs in Motivation, Development, and Wellness',
  },

  {
    id: 'pulse_auto_15',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag het perspectief van je kind erkend, ook al was je het er niet mee eens?',
    antwoorden: [
      'Ja, ik benoemde dat ik begreep hoe mijn kind het zag',
      'Ik luisterde wel, maar gaf vooral mijn eigen visie',
      'Ik ging vrij snel voorbij aan het perspectief van mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Perspectief erkennen is niet hetzelfde als toegeven. Kinderen van wie het perspectief erkend wordt, voelen zich gehoord en zijn daardoor eerder bereid om mee te werken.',
    bron: 'Soenens, Vansteenkiste et al. (2007) – Conceptualizing Parental Autonomy Support',
  },

  {
    id: 'pulse_auto_16',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf bepaald hoe het een creatieve opdracht of tekening aanpakte?',
    antwoorden: [
      'Ja, mijn kind had volledige creatieve vrijheid',
      'Ik gaf wat sturing maar liet ruimte voor eigen invulling',
      'Ik stuurde vrij sterk hoe het eruit moest zien',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Creatieve autonomie stimuleert divergent denken. Kinderen die vrij mogen creëren zonder beoordelingscriteria van buitenaf, tonen meer intrinsieke motivatie en originaliteit.',
    bron: 'Amabile (1996) – Creativity in Context: Update to the Social Psychology of Creativity',
  },

  {
    id: 'pulse_auto_17',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag je kind een taak in het huishouden laten doen op zijn eigen manier?',
    antwoorden: [
      'Ja, ook al deed mijn kind het anders dan ik het zou doen',
      'Ik liet enige ruimte maar corrigeerde hier en daar',
      'Ik liet zien hoe het moest en verwachtte dat mijn kind dat volgde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer vaders accepteren dat een taak "goed genoeg" is in plaats van perfect, leren kinderen dat hun bijdrage waardevol is. Dit bevordert hun bereidheid om verantwoordelijkheid te nemen.',
    bron: 'Kohn (2005) – Unconditional Parenting: Moving from Rewards and Punishments to Love and Reason',
  },

  {
    id: 'pulse_auto_18',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf gekozen met wie het speelde of omging?',
    antwoorden: [
      'Ja, mijn kind koos zelf zijn speelgenoten',
      'Ik stuurde een beetje bij in de keuze',
      'Ik bepaalde met wie mijn kind omging',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het zelf kiezen van sociale contacten helpt kinderen om sociale competentie te ontwikkelen. Ze leren zo hun eigen voorkeuren en grenzen in relaties te herkennen.',
    bron: 'Deci & Ryan (2000) – The "What" and "Why" of Goal Pursuits: Human Needs and the Self-Determination of Behavior',
  },

  {
    id: 'pulse_auto_19',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag vermeden om je kind te waarschuwen voor iets dat het zelf kon ontdekken?',
    antwoorden: [
      'Ja, ik liet mijn kind zelf ervaren wat er zou gebeuren',
      'Ik gaf één waarschuwing maar liet het daarna los',
      'Ik waarschuwde meerdere keren om mijn kind te beschermen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Overmatige waarschuwingen kunnen een kind het signaal geven dat de wereld gevaarlijk is en dat het die niet aankan. Natuurlijke consequenties zijn vaak de krachtigste leermeesters.',
    bron: 'Soenens & Vansteenkiste (2010) – A Theoretical Upgrade of the Concept of Parental Psychological Control',
  },

  {
    id: 'pulse_auto_20',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf een conflict met een broer, zus of vriendje proberen op te lossen?',
    antwoorden: [
      'Ja, ik bleef op de achtergrond en liet mijn kind het zelf uitzoeken',
      'Ik begeleidde het gesprek maar liet mijn kind het woord doen',
      'Ik loste het conflict grotendeels zelf op',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die oefenen met het zelf oplossen van conflicten ontwikkelen betere onderhandelingsvaardigheden en empathie. De rol van de vader als coach in plaats van scheidsrechter is hierbij essentieel.',
    bron: 'Gottman (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_auto_21',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag een verzoek van je kind geweigerd en daarbij uitgelegd waarom?',
    antwoorden: [
      'Ja, ik zei nee en gaf een heldere, respectvolle uitleg',
      'Ik zei nee met een korte reden, zonder echt in gesprek te gaan',
      'Ik zei nee zonder uitleg, of gaf toe om gedoe te vermijden',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Grenzen stellen met uitleg is geen beperking van autonomie maar autonomie-ondersteunende structuur. Het kind leert dat grenzen een reden hebben en niet willekeurig zijn.',
    bron: 'Vansteenkiste & Soenens (2015) – How to Foster Self-Determined Motivation in Parenting',
  },

  {
    id: 'pulse_auto_22',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf bepaald hoeveel het at of wanneer het genoeg had?',
    antwoorden: [
      'Ja, mijn kind bepaalde zelf wanneer het vol zat',
      'Ik moedigde aan om nog wat te eten maar dwong niet',
      'Ik drong aan dat mijn kind zijn bord leeg moest eten',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die hun eigen honger- en verzadigingssignalen leren herkennen ontwikkelen een gezondere relatie met eten. Dwang rond eten kan deze interne signalen verstoren.',
    bron: 'Satter (2000) – Child of Mine: Feeding with Love and Good Sense',
  },

  {
    id: 'pulse_auto_23',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag je kind laten experimenteren met een nieuwe aanpak, ook al wist je dat het niet de meest efficiënte manier was?',
    antwoorden: [
      'Ja, ik liet mijn kind een eigen aanpak uitproberen',
      'Ik liet het even proberen maar stuurde daarna bij',
      'Ik liet meteen zien hoe het beter kon',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het proces van experimenteren is voor de ontwikkeling van een kind waardevoller dan het eindresultaat. Kinderen die mogen experimenteren ontwikkelen een groeimindset en leren dat fouten bij het leerproces horen.',
    bron: 'Dweck (2006) – Mindset: The New Psychology of Success',
  },

  {
    id: 'pulse_auto_24',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf de inhoud van zijn rugzak, tas of spullen gecontroleerd?',
    antwoorden: [
      'Ja, mijn kind deed het helemaal zelf',
      'Ik herinnerde mijn kind eraan, maar het deed het zelf',
      'Ik controleerde of pakte de spullen voor mijn kind in',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Dagelijkse verantwoordelijkheden zoals het inpakken van een eigen tas bevorderen executieve functies en zelfredzaamheid. De vader die dit loslaat geeft een krachtig signaal van vertrouwen.',
    bron: 'Bandura (1997) – Self-Efficacy: The Exercise of Control',
  },

  {
    id: 'pulse_auto_25',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag je kind gevraagd wat het zelf wilde in plaats van voor het kind te beslissen?',
    antwoorden: [
      'Ja, ik vroeg actief naar de wens van mijn kind',
      'Ik gaf opties maar vroeg niet echt naar de eigen voorkeur',
      'Ik nam de beslissing zonder te vragen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het stellen van open vragen over wensen en voorkeuren helpt kinderen hun innerlijke stem te ontwikkelen. Dit is een fundamenteel aspect van identiteitsontwikkeling.',
    bron: 'Ryan & Deci (2017) – Self-Determination Theory: Basic Psychological Needs in Motivation, Development, and Wellness',
  },

  {
    id: 'pulse_auto_26',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf een moment van rust of pauze genomen wanneer het dat nodig had?',
    antwoorden: [
      'Ja, mijn kind gaf zelf aan dat het even wilde stoppen en ik respecteerde dat',
      'Ik merkte dat mijn kind moe was en stelde een pauze voor',
      'Ik stimuleerde mijn kind om door te gaan ondanks vermoeidheid',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die leren hun eigen energieniveau te monitoren en te reguleren, ontwikkelen betere zelfregulatie. Dit beschermt tegen overbelasting en burnout op latere leeftijd.',
    bron: 'Deci & Ryan (2000) – The "What" and "Why" of Goal Pursuits: Human Needs and the Self-Determination of Behavior',
  },

  {
    id: 'pulse_auto_27',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag een belofte of beloning gebruikt om je kind te motiveren?',
    antwoorden: [
      'Nee, ik vertrouwde op de intrinsieke motivatie van mijn kind',
      'Ik gebruikte een kleine aanmoediging maar geen echte beloning',
      'Ja, ik beloofde iets als mijn kind deed wat ik vroeg',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Externe beloningen kunnen intrinsieke motivatie ondermijnen. Dit wordt het "overjustification effect" genoemd: kinderen gaan een activiteit alleen nog doen voor de beloning, niet omdat ze het willen.',
    bron: 'Deci, Koestner & Ryan (1999) – A Meta-Analytic Review of Experiments Examining the Effects of Extrinsic Rewards on Intrinsic Motivation',
  },

  {
    id: 'pulse_auto_28',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf gekozen welk boek het wilde lezen of voorgelezen krijgen?',
    antwoorden: [
      'Ja, mijn kind koos helemaal zelf een boek',
      'Ik gaf een selectie waaruit mijn kind kon kiezen',
      'Ik koos het boek voor mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Keuzevrijheid bij lezen verhoogt de leesmotivatie en het leesplezier. Kinderen die hun eigen boeken kiezen lezen vaker en met meer betrokkenheid.',
    bron: 'Kohn (2005) – Unconditional Parenting: Moving from Rewards and Punishments to Love and Reason',
  },

  {
    id: 'pulse_auto_29',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag het tempo van je kind gevolgd in plaats van aan te dringen op tempo?',
    antwoorden: [
      'Ja, ik paste me aan het tempo van mijn kind aan',
      'Ik volgde grotendeels het tempo maar drong soms aan',
      'Ik drong regelmatig aan om op te schieten',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen hebben een ander tijdsbesef dan volwassenen. Wanneer vaders het tempo van het kind respecteren, voelt het kind zich gezien en ontwikkelt het een beter gevoel voor eigen ritme.',
    bron: 'Winnicott (1965) – The Maturational Processes and the Facilitating Environment',
  },

  {
    id: 'pulse_auto_30',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf een risico-inschatting gemaakt bij het spelen (klimmen, rennen, springen)?',
    antwoorden: [
      'Ja, ik liet mijn kind zelf inschatten wat het aandurfde',
      'Ik stond erbij en gaf kleine aanwijzingen',
      'Ik greep in voordat mijn kind het zelf kon inschatten',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Risicovolle spelen helpt kinderen om hun eigen grenzen te leren kennen. Vaders spelen hierin een unieke rol: zij stimuleren vaker grensverleggend spel dan moeders.',
    bron: 'Paquette (2004) – Theorizing the Father-Child Activation Relationship',
  },

  {
    id: 'pulse_auto_31',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag vermeden om iets over te doen wat je kind al had gedaan (zoals opruimen, aankleden)?',
    antwoorden: [
      'Ja, ik liet het resultaat van mijn kind staan zoals het was',
      'Ik paste iets kleins aan zonder dat mijn kind het zag',
      'Ik deed het over omdat het niet goed genoeg was',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer een ouder het werk van het kind overdoet, communiceert dit impliciet: "jij kunt het niet goed genoeg." Dit ondermijnt het gevoel van competentie dat nodig is voor autonome motivatie.',
    bron: 'Soenens & Vansteenkiste (2010) – A Theoretical Upgrade of the Concept of Parental Psychological Control',
  },

  {
    id: 'pulse_auto_32',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf een afspraak of belofte nagekomen zonder herinnering?',
    antwoorden: [
      'Ja, mijn kind deed het uit zichzelf en ik benoemde dat',
      'Mijn kind had één herinnering nodig',
      'Ik moest meerdere keren herinneren of het uiteindelijk zelf doen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Internalisatie van verantwoordelijkheid ontstaat wanneer kinderen ervaren dat afspraken van henzelf zijn, niet opgelegd. Erkenning van zelfstandig nagekomen beloftes versterkt dit proces.',
    bron: 'Ryan & Deci (2017) – Self-Determination Theory: Basic Psychological Needs in Motivation, Development, and Wellness',
  },

  {
    id: 'pulse_auto_33',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag je kind laten meebeslissen over een gezinsactiviteit of uitje?',
    antwoorden: [
      'Ja, mijn kind had een gelijkwaardige stem in de beslissing',
      'Ik vroeg input maar nam uiteindelijk zelf de beslissing',
      'Ik besliste zelf wat we gingen doen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die mogen meedenken over gezinsbeslissingen voelen zich een volwaardig lid van het gezin. Dit bevordert hun gevoel van verbondenheid én autonomie tegelijk.',
    bron: 'Vansteenkiste & Soenens (2015) – How to Foster Self-Determined Motivation in Parenting',
  },

  {
    id: 'pulse_auto_34',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf bepaald wanneer het met huiswerk of een taak begon?',
    antwoorden: [
      'Ja, mijn kind koos zelf het moment en ik vertrouwde daarop',
      'Ik gaf een tijdsvenster waarbinnen mijn kind kon kiezen',
      'Ik bepaalde precies wanneer mijn kind moest beginnen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het zelf plannen van taken bevordert executieve functies en tijdsmanagement. Kinderen die hierin oefenen zijn beter voorbereid op de eisen van latere schooljaren.',
    bron: 'Dweck (2006) – Mindset: The New Psychology of Success',
  },

  {
    id: 'pulse_auto_35',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag de gevoelens van je kind benoemd zonder te zeggen wat het moest voelen?',
    antwoorden: [
      'Ja, ik benoemde wat ik zag zonder te sturen ("ik zie dat je boos bent")',
      'Ik benoemde het gevoel maar gaf ook meteen advies',
      'Ik zei iets als "je hoeft niet boos te zijn" of "stel je niet aan"',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Emotiecoaching zonder sturing respecteert de emotionele autonomie van het kind. Kinderen leren zo dat alle gevoelens welkom zijn, wat de emotieregulatie ten goede komt.',
    bron: 'Gottman (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_auto_36',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag nee gezegd tegen jou, en hoe reageerde je?',
    antwoorden: [
      'Mijn kind zei nee en ik nam dat serieus en ging in gesprek',
      'Mijn kind zei nee en ik luisterde, maar hield vast aan mijn besluit met uitleg',
      'Mijn kind zei nee en ik negeerde dat of werd streng',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Een kind dat nee durft te zeggen tegen een ouder heeft geleerd dat het veilig is om grenzen aan te geven. Deze vaardigheid beschermt kinderen later tegen groepsdruk en grensoverschrijdend gedrag.',
    bron: 'Hughes (2009) – Attachment-Focused Parenting',
  },

  {
    id: 'pulse_auto_37',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag je kind zelf laten onderhandelen over iets (bedtijd, schermtijd, speeltijd)?',
    antwoorden: [
      'Ja, we onderhandelden en kwamen samen tot een afspraak',
      'Ik luisterde naar het voorstel maar besliste uiteindelijk zelf',
      'Er was geen ruimte voor onderhandeling',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Onderhandelen leert kinderen argumenteren, compromissen sluiten en respectvol voor zichzelf opkomen. Het is een oefening in democratisch samenleven binnen het gezin.',
    bron: 'Kohn (2005) – Unconditional Parenting: Moving from Rewards and Punishments to Love and Reason',
  },

  {
    id: 'pulse_auto_38',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf een doel gesteld voor iets waar het mee bezig was?',
    antwoorden: [
      'Ja, mijn kind formuleerde zelf een doel',
      'Ik hielp mijn kind bij het formuleren van een doel',
      'Ik stelde het doel voor mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Zelf gekozen doelen leiden tot hogere betrokkenheid en doorzettingsvermogen dan opgelegde doelen. Het proces van doelen stellen is op zich al een waardevolle autonome handeling.',
    bron: 'Deci & Ryan (2000) – The "What" and "Why" of Goal Pursuits: Human Needs and the Self-Determination of Behavior',
  },

  {
    id: 'pulse_auto_39',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag je kind toestemming gevraagd voordat je iets van hem of haar aanraakte, pakte of verplaatste?',
    antwoorden: [
      'Ja, ik vroeg toestemming en respecteerde het antwoord',
      'Soms wel, soms niet',
      'Nee, ik deed het gewoon zonder te vragen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Toestemming vragen voor lichamelijk contact leert kinderen dat hun lichaam van hen is. Dit is fundamenteel voor de ontwikkeling van lichamelijke autonomie en gezonde grenzen.',
    bron: 'Siegel & Bryson (2011) – The Whole-Brain Child',
  },

  {
    id: 'pulse_auto_40',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf een fout ontdekt en gecorrigeerd zonder dat jij het aanwees?',
    antwoorden: [
      'Ja, mijn kind zag zelf de fout en paste het aan',
      'Ik gaf een subtiele hint waardoor mijn kind het zelf ontdekte',
      'Ik wees de fout direct aan',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Zelfcorrectie is een hogere vorm van leren dan correctie door een ander. Het versterkt het metacognitief bewustzijn: het vermogen om het eigen denken en handelen te monitoren.',
    bron: 'Dweck (2006) – Mindset: The New Psychology of Success',
  },

  {
    id: 'pulse_auto_41',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag weerstand gevoeld om je kind iets te laten doen en toch losgelaten?',
    antwoorden: [
      'Ja, ik voelde weerstand maar liet mijn kind toch gaan',
      'Ik liet gedeeltelijk los maar bleef erbij',
      'Ik gaf toe aan mijn weerstand en greep in',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het loslaten als vader vraagt moed en vertrouwen. Onderzoek laat zien dat vaders die bewust oefenen met loslaten kinderen grootbrengen met meer zelfvertrouwen en veerkracht.',
    bron: 'Bandura (1997) – Self-Efficacy: The Exercise of Control',
  },

  {
    id: 'pulse_auto_42',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf gekozen hoe het een verjaardagscadeau, kaart of verrassing maakte?',
    antwoorden: [
      'Ja, mijn kind bedacht en maakte het helemaal zelf',
      'Ik gaf suggesties maar liet de uitvoering aan mijn kind over',
      'Ik stuurde het proces grotendeels',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer kinderen zelf mogen bedenken hoe ze iets voor een ander maken, oefenen ze autonomie in een sociale context. Dit verbindt eigenaarschap met empathie en generositeit.',
    bron: 'Ryan & Deci (2017) – Self-Determination Theory: Basic Psychological Needs in Motivation, Development, and Wellness',
  },

  {
    id: 'pulse_auto_43',
    skill: 'Autonomie',
    vraag: 'Heb je vandaag vermeden om te vergelijken met andere kinderen ("kijk hoe goed zij dat doet")?',
    antwoorden: [
      'Ja, ik richtte me volledig op mijn eigen kind zonder vergelijking',
      'Ik maakte een vergelijking maar corrigeerde mezelf',
      'Ik vergeleek mijn kind met een ander kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Sociale vergelijking ondermijnt zowel autonomie als competentie. Kinderen gaan zich richten op externe maatstaven in plaats van eigen groei, wat de intrinsieke motivatie aantast.',
    bron: 'Soenens & Vansteenkiste (2010) – A Theoretical Upgrade of the Concept of Parental Psychological Control',
  },

  {
    id: 'pulse_auto_44',
    skill: 'Autonomie',
    vraag: 'Heeft je kind vandaag zelf hulp gevraagd wanneer het ergens niet uitkwam?',
    antwoorden: [
      'Ja, mijn kind vroeg zelf om hulp en ik gaf alleen wat nodig was',
      'Mijn kind worstelde en ik bood hulp aan voordat het vroeg',
      'Ik zag dat mijn kind vastliep en nam het over',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Zelf leren om hulp te vragen is een autonome vaardigheid. Het kind maakt een bewuste keuze om ondersteuning te zoeken, wat verschilt van hulp die ongevraagd wordt opgelegd.',
    bron: 'Vansteenkiste & Soenens (2015) – How to Foster Self-Determined Motivation in Parenting',
  },

  {
    id: 'pulse_auto_45',
    skill: 'Autonomie',
    vraag: 'Heb je je kind vandaag laten meebeslissen over een gezinsregel of afspraak?',
    antwoorden: [
      'Ja, we maakten samen een nieuwe afspraak of pasten er een aan',
      'Ik vroeg de mening van mijn kind maar besliste zelf',
      'Ik stelde de regel vast zonder overleg',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Gezinsregels die samen zijn opgesteld worden beter nageleefd. Kinderen ervaren deze als eerlijk en eigen, wat de internalisatie bevordert en de noodzaak voor externe controle vermindert.',
    bron: 'Kohn (2005) – Unconditional Parenting: Moving from Rewards and Punishments to Love and Reason',
  },

  // ── HERSTEL (45 vragen) ─────────────────────────────────────────

  {
    id: 'pulse_hers_01',
    skill: 'Herstel',
    vraag: 'Was er vandaag een moment van conflict of spanning tussen jou en je kind?',
    antwoorden: [
      'Ja, en we hebben het hersteld',
      'Ja, en het hangt nog in de lucht',
      'Nee – geen conflict vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Elk conflict is een kans. Niet het conflict zelf bepaalt de kwaliteit van de band – maar hoe je het herstelt.',
    bron: 'Tronick (2007) – The Neurobehavioral and Social-Emotional Development of Infants',
  },

  {
    id: 'pulse_hers_02',
    skill: 'Herstel',
    vraag: 'Heb je vandaag je excuses aangeboden aan je kind?',
    antwoorden: [
      'Ja, oprecht en concreet',
      'Ik wilde het maar deed het niet',
      'Geen reden voor vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Een vader die sorry zegt, leert zijn kind twee dingen tegelijk: verantwoordelijkheid nemen én dat relaties repareerbaar zijn.',
    bron: 'Siegel & Bryson (2011) – The Whole-Brain Child',
  },

  {
    id: 'pulse_hers_03',
    skill: 'Herstel',
    vraag: 'Was er iets onafgerond tussen jou en je kind aan het einde van vandaag?',
    antwoorden: [
      'Nee – alles was afgerond of besproken',
      'Eén ding nog open maar dat komt morgen',
      'Ja, en ik weet niet hoe ik het moet aanpakken',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Niet opgelost conflict gaat mee het bed in – voor jullie allebei. Kleine herstelgebaren voor het slapengaan (aanraking, warme blik, "welterusten") volstaan.',
    bron: 'Gottman (1994) – Why Marriages Succeed or Fail',
  },

  {
    id: 'pulse_hers_04',
    skill: 'Herstel',
    vraag: 'Hoe snel herstelde jij vandaag na een moeilijk moment met je kind?',
    antwoorden: [
      'Snel – ik was er snel weer boven',
      'Het duurde even maar ik keerde terug',
      'Ik draag het nog mee',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Veerkracht is niet het vermijden van moeilijke momenten – maar hoe snel je terugkeert. Dat herstelritme is overdraagbaar op je kind.',
    bron: 'Bonanno (2004) – Loss, Trauma, and Human Resilience',
  },

  {
    id: 'pulse_hers_05',
    skill: 'Herstel',
    vraag: 'Was er vandaag iets wat jij fout deed als vader dat je bewust hebt hersteld?',
    antwoorden: [
      'Ja, ik heb het erkend en goedgemaakt',
      'Ja, maar ik heb het laten gaan',
      'Niets fout gedaan dat ik zie – of niets om van te herstellen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Bewust herstellen is een van de krachtigste dingen die een vader kan doen. Het maakt de relatie niet zwakker – maar sterker dan voor de fout.',
    bron: 'Johnson (2008) – Hold Me Tight',
  },

  {
    id: 'pulse_hers_06',
    skill: 'Herstel',
    vraag: 'Hoe ga jij om met schuldgevoel na een moment van te hard reageren?',
    antwoorden: [
      'Ik erken het, herstel en ga verder',
      'Ik blijf het mezelf verwijten',
      'Ik negeer het – even door',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Zelfkritiek na een fout vermindert je herstelvermogen. Zelfcompassie – "ik doe mijn best" – vergroot het. Je kunt niet goed herstellen vanuit schaamte.',
    bron: 'Neff (2011) – Self-Compassion',
  },

  {
    id: 'pulse_hers_07',
    skill: 'Herstel',
    vraag: 'Heeft je kind vandaag een fout gemaakt en hoe reageerde jij?',
    antwoorden: [
      'Ik gaf ruimte, benadrukte leren boven straffen',
      'Ik reageerde, maar mild',
      'Ik reageerde harder dan ik had gewild',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Hoe jij reageert op de fouten van je kind bepaalt of het je de volgende keer eerlijk vertelt. Veiligheid na een fout is waardevoller dan de correctie zelf.',
    bron: 'Kohn (2005) – Unconditional Parenting',
  },

  {
    id: 'pulse_hers_08',
    skill: 'Herstel',
    vraag: 'Heb je vandaag na een meningsverschil met je kind als eerste contact gezocht?',
    antwoorden: [
      'Ja, ik nam als eerste het initiatief om contact te herstellen',
      'We kwamen na een tijdje vanzelf weer bij elkaar',
      'Ik wachtte tot mijn kind naar mij toe kwam',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer de vader als eerste toenadering zoekt na een conflict, leert het kind dat relaties belangrijker zijn dan gelijk hebben. Dit modelleert emotionele moed en kwetsbaarheid.',
    bron: 'Siegel & Bryson (2014) – No-Drama Discipline',
  },

  {
    id: 'pulse_hers_09',
    skill: 'Herstel',
    vraag: 'Heeft je kind vandaag gemerkt dat je een fout toegaf?',
    antwoorden: [
      'Ja, ik benoemde hardop dat ik een fout had gemaakt',
      'Ik corrigeerde mezelf stilzwijgend zonder het expliciet te benoemen',
      'Ik gaf mijn fout niet toe',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die hun ouders fouten zien toegeven leren dat fouten menselijk zijn en geen bedreiging vormen voor hun waardigheid. Dit verlaagt de angst om zelf fouten te maken.',
    bron: 'Dweck (2006) – Mindset: The New Psychology of Success',
  },

  {
    id: 'pulse_hers_10',
    skill: 'Herstel',
    vraag: 'Heb je vandaag na een stressvolle situatie bewust even stilgestaan bij hoe het ging?',
    antwoorden: [
      'Ja, ik nam een moment om te reflecteren op wat er gebeurde',
      'Ik dacht er kort over na maar liet het snel los',
      'Ik ging meteen door naar de volgende activiteit',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Bewuste reflectie na stress activeert de prefrontale cortex en helpt bij het verwerken van emoties. Vaders die reflecteren reageren de volgende keer vaak rustiger in vergelijkbare situaties.',
    bron: 'Siegel (2012) – The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are',
  },

  {
    id: 'pulse_hers_11',
    skill: 'Herstel',
    vraag: 'Heb je vandaag je kind lichamelijk gerustgesteld na een moeilijk moment (knuffel, hand op schouder)?',
    antwoorden: [
      'Ja, ik bood fysiek troost aan en mijn kind accepteerde dat',
      'Ik probeerde het maar mijn kind was er nog niet aan toe',
      'Ik deed het niet, ik gebruikte alleen woorden of niets',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Fysieke nabijheid na stress verlaagt het cortisol bij zowel ouder als kind. Een knuffel van een vader werkt als een co-regulatiemechanisme dat het zenuwstelsel van het kind helpt kalmeren.',
    bron: 'Tronick (2007) – The Neurobehavioral and Social-Emotional Development of Infants and Children',
  },

  {
    id: 'pulse_hers_12',
    skill: 'Herstel',
    vraag: 'Is er vandaag een moment geweest waarop je merkte dat de sfeer weer goed was na spanning?',
    antwoorden: [
      'Ja, ik merkte bewust dat de verbinding hersteld was',
      'Het leek beter maar ik was er niet helemaal zeker van',
      'De spanning bleef de rest van de dag hangen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het herkennen van het moment waarop herstel plaatsvindt is een vaardigheid op zich. Vaders die dit signaal bewust opmerken, versterken de positieve afsluiting van een conflict.',
    bron: 'Gottman (1999) – The Seven Principles for Making Marriage Work',
  },

  {
    id: 'pulse_hers_13',
    skill: 'Herstel',
    vraag: 'Heb je vandaag een eerder gemaakte belofte aan je kind alsnog ingelost?',
    antwoorden: [
      'Ja, ik kwam terug op iets dat ik eerder had beloofd en maakte het waar',
      'Ik herinnerde me de belofte maar moest het uitstellen',
      'Ik vergat de belofte of liet het liggen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het nakomen van beloftes is een krachtige vorm van relationeel herstel. Kinderen bouwen veilige hechting op wanneer de vader betrouwbaar en voorspelbaar is in zijn toezeggingen.',
    bron: 'Hughes (2009) – Attachment-Focused Parenting',
  },

  {
    id: 'pulse_hers_14',
    skill: 'Herstel',
    vraag: 'Heb je vandaag bewust je stem verlaagd toen je merkte dat je luider werd tegen je kind?',
    antwoorden: [
      'Ja, ik merkte het en bracht bewust mijn stem omlaag',
      'Ik merkte het maar het lukte niet helemaal om zachter te praten',
      'Ik bleef luid of merkte het niet op',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Stemregulatie is een directe vorm van zelfregulatie. Wanneer een vader bewust zijn volume verlaagt, daalt ook de fysiologische stress bij het kind. Dit is co-regulatie in actie.',
    bron: 'Porges (2011) – The Polyvagal Theory: Neurophysiological Foundations of Emotions, Attachment, Communication, and Self-Regulation',
  },

  {
    id: 'pulse_hers_15',
    skill: 'Herstel',
    vraag: 'Heb je je kind vandaag verteld dat je van hem of haar houdt, ook al was het een lastige dag?',
    antwoorden: [
      'Ja, ik sprak mijn liefde uit, juist omdat het moeilijk was',
      'Ik was liefdevol in mijn daden maar sprak het niet uit',
      'Het voelde niet als het juiste moment om dat te zeggen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Onvoorwaardelijke liefde uitspreken na een moeilijke dag leert kinderen dat de relatie niet afhankelijk is van gedrag. Dit onderscheid is fundamenteel voor veilige hechting.',
    bron: 'Kohn (2005) – Unconditional Parenting: Moving from Rewards and Punishments to Love and Reason',
  },

  {
    id: 'pulse_hers_16',
    skill: 'Herstel',
    vraag: 'Heb je vandaag tegen je kind gezegd dat iets jouw fout was en niet die van het kind?',
    antwoorden: [
      'Ja, ik nam duidelijk de verantwoordelijkheid op me',
      'Ik erkende mijn aandeel maar benoemde ook dat van mijn kind',
      'Ik legde de verantwoordelijkheid bij mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer een vader expliciet verantwoordelijkheid neemt, bevrijdt dit het kind van onterecht schuldgevoel. Kinderen neigen ertoe conflicten aan zichzelf toe te schrijven; de vader kan dit corrigeren.',
    bron: 'Siegel & Bryson (2011) – The Whole-Brain Child',
  },

  {
    id: 'pulse_hers_17',
    skill: 'Herstel',
    vraag: 'Heb je vandaag een onderbroken spelmoment of activiteit met je kind later weer opgepakt?',
    antwoorden: [
      'Ja, ik kwam erop terug en we maakten het samen af',
      'Ik stelde voor om het later te doen maar het kwam er niet van',
      'Het onderbroken moment werd niet meer opgepakt',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het hervatten van onderbroken momenten laat zien dat de vader waarde hecht aan de gedeelde ervaring. Voor kinderen voelt dit als: "papa onthoudt wat belangrijk voor mij is."',
    bron: 'Tronick (2007) – The Neurobehavioral and Social-Emotional Development of Infants and Children',
  },

  {
    id: 'pulse_hers_18',
    skill: 'Herstel',
    vraag: 'Heb je vandaag jezelf vergeven voor een moment waarop je niet de vader was die je wilde zijn?',
    antwoorden: [
      'Ja, ik was mild voor mezelf en leerde ervan',
      'Ik probeerde het los te laten maar bleef er mee zitten',
      'Ik was streng voor mezelf en bleef me schuldig voelen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Zelfcompassie bij ouders leidt tot beter ouderschap. Vaders die zichzelf vergeven na fouten herstellen sneller en reageren de volgende keer met meer geduld.',
    bron: 'Neff (2011) – Self-Compassion: The Proven Power of Being Kind to Yourself',
  },

  {
    id: 'pulse_hers_19',
    skill: 'Herstel',
    vraag: 'Heb je vandaag gemerkt dat je kind je testte na een eerder conflict, en hoe reageerde je?',
    antwoorden: [
      'Ja, ik herkende het testgedrag en reageerde rustig en consistent',
      'Ik merkte het maar reageerde niet altijd even geduldig',
      'Ik voelde me geprovoceerd en reageerde geïrriteerd',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Testgedrag na conflict is een teken dat het kind wil weten of de relatie veilig is. Het is geen provocatie maar een hechtingsbehoefte. Een rustige reactie bevestigt de veiligheid.',
    bron: 'Hughes (2009) – Attachment-Focused Parenting',
  },

  {
    id: 'pulse_hers_20',
    skill: 'Herstel',
    vraag: 'Heb je vandaag een moment van frustratie gehad en daar achteraf met je kind over gepraat?',
    antwoorden: [
      'Ja, ik legde uit waarom ik gefrustreerd was op een kindvriendelijke manier',
      'Ik benoemde dat ik moe of gestrest was maar ging er niet diep op in',
      'Ik praatte er niet over met mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Emotionele transparantie van de vader helpt kinderen begrijpen dat emoties geen mysterie zijn. Het normaliseren van frustratie en het benoemen ervan leert kinderen emotionele geletterdheid.',
    bron: 'Gottman (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_hers_21',
    skill: 'Herstel',
    vraag: 'Heb je vandaag iets hersteld in de relatie met je partner waar je kind getuige van was?',
    antwoorden: [
      'Ja, mijn kind zag dat wij het weer goed maakten',
      'We losten het op buiten het zicht van het kind',
      'De spanning met mijn partner bleef onopgelost waar mijn kind bij was',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die zien dat hun ouders conflicten oplossen, leren dat meningsverschillen normaal zijn en dat herstel mogelijk is. Dit verlaagt hun angst bij conflicten in eigen relaties.',
    bron: 'Gottman (1999) – The Seven Principles for Making Marriage Work',
  },

  {
    id: 'pulse_hers_22',
    skill: 'Herstel',
    vraag: 'Heb je vandaag na een drukke of afwezige periode bewust quality time gemaakt met je kind?',
    antwoorden: [
      'Ja, ik plande bewust een moment van onverdeelde aandacht',
      'Ik was erbij maar niet volledig aanwezig',
      'Het lukte niet om echt quality time te maken',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Na periodes van afwezigheid of drukte is bewuste aanwezigheid een vorm van relationeel herstel. Kwaliteit van contact compenseert deels voor kwantiteit van tijd.',
    bron: 'Siegel & Bryson (2014) – No-Drama Discipline',
  },

  {
    id: 'pulse_hers_23',
    skill: 'Herstel',
    vraag: 'Heb je vandaag je telefoon weggelegd om je kind volledige aandacht te geven na een moment van disconnectie?',
    antwoorden: [
      'Ja, ik legde bewust mijn telefoon weg en was er helemaal',
      'Ik probeerde aandacht te geven maar keek tussendoor op mijn telefoon',
      'Ik had mijn telefoon bij me en was daar vaak mee bezig',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Technoference – de verstoring van ouder-kindinteractie door technologie – vermindert de kwaliteit van de relatie. Het bewust wegleggen van de telefoon is een krachtig herstelsignaal.',
    bron: 'McDaniel & Radesky (2018) – Technoference: Longitudinal Associations Between Parent Technology Use and Child Behavior Problems',
  },

  {
    id: 'pulse_hers_24',
    skill: 'Herstel',
    vraag: 'Heeft je kind vandaag iets gezegd waaruit bleek dat het een eerder moment nog niet had verwerkt?',
    antwoorden: [
      'Ja, ik luisterde aandachtig en gaf ruimte om het alsnog te verwerken',
      'Ik merkte het op maar wist niet goed hoe te reageren',
      'Ik ging er niet op in of merkte het niet op',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen verwerken gebeurtenissen op hun eigen tempo. Wanneer ze terugkomen op een eerder moment, is dat een uitnodiging tot herstel. De vader die hierop ingaat verdiept de veilige hechting.',
    bron: 'Tronick (2007) – The Neurobehavioral and Social-Emotional Development of Infants and Children',
  },

  {
    id: 'pulse_hers_25',
    skill: 'Herstel',
    vraag: 'Heb je vandaag een negatief patroon doorbroken dat je vaker herhaalt met je kind?',
    antwoorden: [
      'Ja, ik herkende het patroon en koos bewust voor een andere reactie',
      'Ik herkende het patroon maar viel er toch gedeeltelijk in',
      'Ik reageerde op de automatische piloot zoals altijd',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het doorbreken van herhalingspatronen is een van de moeilijkste vormen van herstel. Het vraagt zelfbewustzijn en moed. Elke keer dat een vader een patroon doorbreekt, creëert hij een nieuw neuraal pad.',
    bron: 'Siegel (2012) – The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are',
  },

  {
    id: 'pulse_hers_26',
    skill: 'Herstel',
    vraag: 'Heb je vandaag bewust iets aardigs gedaan voor je kind nadat je eerder kortaf was?',
    antwoorden: [
      'Ja, ik deed iets kleins en liefdevols als hersteldaad',
      'Ik was weer normaal maar deed niets extra',
      'Ik bleef de rest van de dag wat kortaf of afstandelijk',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kleine herstellende handelingen – een glaasje water brengen, even samen zitten – zijn krachtige relatiereparaties. Ze hoeven niet groot te zijn om het kind te laten voelen dat de verbinding er weer is.',
    bron: 'Johnson (2008) – Hold Me Tight: Seven Conversations for a Lifetime of Love',
  },

  {
    id: 'pulse_hers_27',
    skill: 'Herstel',
    vraag: 'Heb je vandaag humor gebruikt om de sfeer te herstellen na spanning?',
    antwoorden: [
      'Ja, ik gebruikte humor en het brak de spanning op een positieve manier',
      'Ik probeerde het luchtig te houden maar het landde niet helemaal',
      'Er was geen ruimte voor humor of ik dacht er niet aan',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Gepaste humor na spanning is een effectief herstelmechanisme. Het verlaagt fysiologische stress en herinnert beide partijen eraan dat de relatie groter is dan het conflict.',
    bron: 'Bonanno (2004) – Loss, Trauma, and Human Resilience',
  },

  {
    id: 'pulse_hers_28',
    skill: 'Herstel',
    vraag: 'Heb je vandaag je kind bedankt voor iets, nadat je eerder kritiek had gegeven?',
    antwoorden: [
      'Ja, ik bedankte mijn kind bewust om de balans te herstellen',
      'Ik gaf een compliment maar niet direct gerelateerd aan de kritiek',
      'Ik gaf vooral kritiek vandaag en weinig waardering',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De ratio tussen positieve en negatieve interacties bepaalt de kwaliteit van de relatie. Onderzoek toont dat minimaal vijf positieve interacties nodig zijn voor elke negatieve om de relatie gezond te houden.',
    bron: 'Gottman (1999) – The Seven Principles for Making Marriage Work',
  },

  {
    id: 'pulse_hers_29',
    skill: 'Herstel',
    vraag: 'Heb je vandaag aan je kind gevraagd hoe het zich voelde na iets vervelends dat eerder gebeurde?',
    antwoorden: [
      'Ja, ik vroeg expliciet hoe mijn kind zich voelde en luisterde',
      'Ik checkte kort in maar ging er niet diep op in',
      'Ik vroeg er niet naar',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Actief terugkomen op een eerder moeilijk moment is een vorm van emotionele afstemming. Het laat het kind weten dat de vader onthouden heeft wat er gebeurde en dat het ertoe doet.',
    bron: 'Hughes (2009) – Attachment-Focused Parenting',
  },

  {
    id: 'pulse_hers_30',
    skill: 'Herstel',
    vraag: 'Heb je vandaag opgemerkt dat je kind afstandelijk was en actie ondernomen om de verbinding te herstellen?',
    antwoorden: [
      'Ja, ik merkte de afstand en zocht toenadering op een respectvolle manier',
      'Ik merkte het op maar wist niet goed wat te doen',
      'Ik merkte het niet op of liet het liggen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Afstandelijk gedrag bij kinderen is vaak een signaal van een onvervulde behoefte. De vader die dit herkent als uitnodiging in plaats van afwijzing, opent de deur voor herstel.',
    bron: 'Johnson (2008) – Hold Me Tight: Seven Conversations for a Lifetime of Love',
  },

  {
    id: 'pulse_hers_31',
    skill: 'Herstel',
    vraag: 'Heb je vandaag een bedtijdritueel gebruikt om de dag positief af te sluiten, ook als het een lastige dag was?',
    antwoorden: [
      'Ja, we sloten de dag warm en verbonden af',
      'We hadden een kort ritueel maar ik was moe en minder aanwezig',
      'De dag eindigde zonder bewuste afsluiting',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het bedtijdmoment is de laatste emotionele indruk van de dag. Een warm ritueel herstelt de verbinding na moeilijke momenten en zorgt ervoor dat het kind met een veilig gevoel in slaap valt.',
    bron: 'Siegel & Bryson (2011) – The Whole-Brain Child',
  },

  {
    id: 'pulse_hers_32',
    skill: 'Herstel',
    vraag: 'Heb je vandaag een grens overschreden bij je kind en dat later erkend?',
    antwoorden: [
      'Ja, ik besefte dat ik te ver ging en besprak dat met mijn kind',
      'Ik besefte het maar benoemde het niet hardop',
      'Ik stond niet stil bij of ik een grens overschreed',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het erkennen van grenzen die je hebt overschreden als ouder is essentieel voor het herstellend vermogen van de relatie. Het kind leert dat zelfs de machtigste persoon in zijn leven eerlijk en kwetsbaar kan zijn.',
    bron: 'Neff (2011) – Self-Compassion: The Proven Power of Being Kind to Yourself',
  },

  {
    id: 'pulse_hers_33',
    skill: 'Herstel',
    vraag: 'Heb je vandaag gemerkt dat je kind verdrietig was en ben je erbij gaan zitten?',
    antwoorden: [
      'Ja, ik ging erbij zitten zonder meteen iets te willen oplossen',
      'Ik probeerde het verdriet snel op te lossen of af te leiden',
      'Ik liet mijn kind alleen met het verdriet',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Bij verdriet is aanwezigheid vaak belangrijker dan oplossingen. Het concept "holding space" – er simpelweg zijn – is een van de krachtigste vormen van co-regulatie die een vader kan bieden.',
    bron: 'Winnicott (1965) – The Maturational Processes and the Facilitating Environment',
  },

  {
    id: 'pulse_hers_34',
    skill: 'Herstel',
    vraag: 'Heb je vandaag een moment gehad waarop je even weg moest om tot rust te komen, en ben je daarna teruggekomen?',
    antwoorden: [
      'Ja, ik nam bewust een pauze en kwam daarna rustig terug',
      'Ik had afstand nodig maar communiceerde dat niet duidelijk',
      'Ik bleef in de situatie terwijl ik eigenlijk even weg had moeten gaan',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het nemen van een bewuste time-out als ouder is een teken van kracht, niet van zwakte. Het modelleert voor het kind dat het oké is om even afstand te nemen om te reguleren.',
    bron: 'Bonanno (2004) – Loss, Trauma, and Human Resilience',
  },

  {
    id: 'pulse_hers_35',
    skill: 'Herstel',
    vraag: 'Heeft je kind vandaag spijt getoond en heb je dat op een warme manier ontvangen?',
    antwoorden: [
      'Ja, ik ontving de spijt van mijn kind warm en zonder verwijt',
      'Ik accepteerde het maar voegde er een les aan toe',
      'Ik reageerde met "dat had je eerder moeten bedenken" of iets dergelijks',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Hoe een ouder spijt ontvangt bepaalt of het kind in de toekomst spijt durft te tonen. Een warme ontvangst bekrachtigt de moed die het kind toonde door kwetsbaar te zijn.',
    bron: 'Gottman (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_hers_36',
    skill: 'Herstel',
    vraag: 'Heb je vandaag iets gedaan om de vertrouwensband met je kind te versterken na een periode van veel regels of correcties?',
    antwoorden: [
      'Ja, ik investeerde bewust in plezier en verbinding',
      'Ik deed iets leuks maar niet bewust als tegenwicht',
      'Het bleef een dag met veel sturing en weinig verbinding',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Na periodes van veel sturing en correctie raakt de "emotionele bankrekening" van de relatie in het rood. Bewust investeren in positieve momenten vult deze weer aan.',
    bron: 'Gottman (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_hers_37',
    skill: 'Herstel',
    vraag: 'Heb je vandaag met een ander volwassene gesproken over een moment waarop je worstelde als vader?',
    antwoorden: [
      'Ja, ik deelde mijn worsteling met iemand en dat hielp me',
      'Ik dacht erover na maar deelde het niet',
      'Ik hield het voor mezelf en ging door',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Sociale steun is een van de belangrijkste voorspellers van veerkracht bij ouders. Vaders die hun worstelingen delen, herstellen sneller en voelen zich minder geïsoleerd in hun ouderrol.',
    bron: 'Bonanno (2004) – Loss, Trauma, and Human Resilience',
  },

  {
    id: 'pulse_hers_38',
    skill: 'Herstel',
    vraag: 'Heb je vandaag je kind laten zien dat je ook verdrietig of teleurgesteld kunt zijn?',
    antwoorden: [
      'Ja, ik toonde mijn emotie op een manier die passend was bij de leeftijd',
      'Ik liet iets merken maar hield het vooral voor me',
      'Ik verborg mijn emoties volledig voor mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Gepaste emotionele openheid van de vader normaliseert het hebben van moeilijke gevoelens. Kinderen leren zo dat kracht en kwetsbaarheid samengaan, niet tegenover elkaar staan.',
    bron: 'Siegel (2012) – The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are',
  },

  {
    id: 'pulse_hers_39',
    skill: 'Herstel',
    vraag: 'Heb je vandaag met je kind teruggeblikt op een eerder conflict en samen besproken wat jullie anders konden doen?',
    antwoorden: [
      'Ja, we bespraken het samen en trokken er allebei lering uit',
      'Ik benoemde wat ik anders had willen doen, maar vroeg niet naar mijn kind',
      'We hebben er niet meer over gesproken',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Samen terugblikken op conflicten bouwt een gedeeld narratief op. Dit "co-narratief" helpt kinderen om moeilijke ervaringen te integreren en er betekenis aan te geven.',
    bron: 'Siegel & Bryson (2011) – The Whole-Brain Child',
  },

  {
    id: 'pulse_hers_40',
    skill: 'Herstel',
    vraag: 'Heb je vandaag gemerkt dat stress van buitenaf (werk, verkeer, geld) je reactie op je kind beïnvloedde?',
    antwoorden: [
      'Ja, ik herkende het en scheidde de stress van mijn interactie met mijn kind',
      'Ik merkte het maar kon het niet helemaal loskoppelen',
      'Mijn externe stress lekte door in hoe ik reageerde op mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Stress-spillover – het overslaan van spanning van het ene levensdomein naar het andere – is een veelvoorkomend fenomeen. Het herkennen ervan is de eerste stap om het te doorbreken.',
    bron: 'Repetti, Wang & Saxbe (2009) – Bringing It All Back Home: How Outside Stressors Shape Families\' Everyday Lives',
  },

  {
    id: 'pulse_hers_41',
    skill: 'Herstel',
    vraag: 'Heb je vandaag een eerder gezegd "nee" heroverwogen en je kind laten weten dat je van gedachten bent veranderd?',
    antwoorden: [
      'Ja, ik heroverweeg mijn besluit en legde uit waarom ik van gedachten veranderde',
      'Ik twijfelde maar hield vast aan mijn oorspronkelijke besluit',
      'Ik overwoog het niet opnieuw',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Van gedachten veranderen als ouder is geen zwakte maar flexibiliteit. Het laat kinderen zien dat volwassenen bereid zijn om te reflecteren en niet vasthouden aan een standpunt uit trots.',
    bron: 'Kohn (2005) – Unconditional Parenting: Moving from Rewards and Punishments to Love and Reason',
  },

  {
    id: 'pulse_hers_42',
    skill: 'Herstel',
    vraag: 'Heb je vandaag een moment gehad waarop je je schaamde voor je reactie als vader?',
    antwoorden: [
      'Ja, en ik gebruikte die schaamte als motivatie om het goed te maken',
      'Ja, maar ik wist niet goed hoe ik ermee om moest gaan',
      'Ja, en ik duwde het gevoel weg',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Schaamte bij ouders kan verlammend werken als het onverwerkt blijft. Zelfcompassie transformeert schaamte in een leermoment: niet "ik ben een slechte vader" maar "ik had een slecht moment."',
    bron: 'Neff (2011) – Self-Compassion: The Proven Power of Being Kind to Yourself',
  },

  {
    id: 'pulse_hers_43',
    skill: 'Herstel',
    vraag: 'Heb je vandaag iets gedaan om jezelf op te laden zodat je weer een betere vader kon zijn?',
    antwoorden: [
      'Ja, ik nam bewust tijd voor zelfzorg (bewegen, rust, hobby)',
      'Ik deed iets kleins voor mezelf maar het was niet genoeg',
      'Ik gaf al mijn energie weg en hield niets over voor mezelf',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Zelfzorg voor vaders is geen luxe maar een voorwaarde voor duurzaam goed ouderschap. Een vader die voor zichzelf zorgt, heeft meer emotionele reserves om te investeren in de relatie met zijn kind.',
    bron: 'Neff (2011) – Self-Compassion: The Proven Power of Being Kind to Yourself',
  },

  {
    id: 'pulse_hers_44',
    skill: 'Herstel',
    vraag: 'Heb je vandaag aan je kind laten merken dat jullie relatie sterker is geworden door een moeilijk moment heen?',
    antwoorden: [
      'Ja, ik benoemde dat we er samen doorheen zijn gekomen',
      'Ik voelde het maar sprak het niet uit',
      'Ik stond er niet bij stil',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het expliciet benoemen van groei na moeilijkheden heet "benefit finding." Het helpt kinderen om een veerkrachtig levensverhaal te ontwikkelen waarin tegenslagen ook bronnen van kracht zijn.',
    bron: 'Bonanno (2004) – Loss, Trauma, and Human Resilience',
  },

  {
    id: 'pulse_hers_45',
    skill: 'Herstel',
    vraag: 'Heb je vandaag de dag afgesloten met het gevoel dat je het morgen opnieuw mag proberen?',
    antwoorden: [
      'Ja, ik voelde rust en hoop over morgen',
      'Ik probeerde positief te zijn maar voelde twijfel',
      'Ik eindigde de dag met een zwaar gevoel over mijn vaderschap',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De "good enough father" hoeft niet perfect te zijn. Elke nieuwe dag biedt een kans op herstel. Onderzoek toont dat kinderen niet lijden onder incidentele fouten, maar onder het uitblijven van herstel.',
    bron: 'Winnicott (1953) – Transitional Objects and Transitional Phenomena',
  },

  // ── VERBINDING (46 vragen) ──────────────────────────────────────

  {
    id: 'pulse_verb_01',
    skill: 'Verbinding',
    vraag: 'Was er vandaag een moment van echt contact – jij en je kind, zonder afleiding?',
    antwoorden: [
      'Ja, een duidelijk verbindingsmoment',
      'Kort, maar even',
      'Nee – we waren wel samen maar niet echt verbonden',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Verbinding hoeft niet lang te zijn. Vijf minuten vol aanwezigheid vult de "verbindingstank" van je kind meer dan een uur halverwege aanwezig zijn.',
    bron: 'Bowlby (1969) – Attachment and Loss',
  },

  {
    id: 'pulse_verb_02',
    skill: 'Verbinding',
    vraag: 'Heb je je kind vandaag aangeraakt – knuffel, hand op schouder, aai over hoofd?',
    antwoorden: [
      'Ja, meerdere momenten van aanraking',
      'Eén keer kort',
      'Niet echt vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Fysiek contact stimuleert oxytocine bij zowel vader als kind. Regelmatige positieve aanraking is een van de meest directe vormen van verbinding die er bestaat.',
    bron: 'Field (2010) – Touch for Socioemotional and Physical Well-Being',
  },

  {
    id: 'pulse_verb_03',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag gelachen met je kind?',
    antwoorden: [
      'Ja – we hadden een echt lachmoment',
      'Lichte glimlach, niets groots',
      'Niet echt',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Lachen is sociaal lijm. Gedeeld plezier bouwt de band sneller op dan elk serieus gesprek. Vaders die spelen en lachen hebben gemiddeld hechtere relaties met hun kinderen.',
    bron: 'Panksepp (2007) – Can PLAY Diminish ADHD?',
  },

  {
    id: 'pulse_verb_04',
    skill: 'Verbinding',
    vraag: 'Weet jij wat jouw kind vandaag bezighield?',
    antwoorden: [
      'Ja, ik weet wat er in hem/haar speelde',
      'Globaal – niet in detail',
      'Niet echt',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vaders die weten wat er leeft bij hun kind – hun vrienden, angsten, passies – worden als veiliger en betrokken ervaren. Kennis van het innerlijk leven is verbinding.',
    bron: 'Gottman (1997) – The Heart of Parenting',
  },

  {
    id: 'pulse_verb_05',
    skill: 'Verbinding',
    vraag: 'Heeft je kind vandaag iets met jou gedeeld dat het anders misschien niet had gezegd?',
    antwoorden: [
      'Ja – het deelde iets persoonlijks',
      'Misschien – een klein dingetje',
      'Niet echt',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen delen alleen wat kwetsbaar is als ze zich veilig voelen. Als je kind iets persoonlijks deelt, is dat een direct teken van verbinding en veiligheid.',
    bron: 'Ainsworth (1978) – Patterns of Attachment',
  },

  {
    id: 'pulse_verb_06',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag iets gedaan wat jouw kind zelf leuk vindt – ook al is het niet jouw ding?',
    antwoorden: [
      'Ja, ik deed mee in zijn/haar wereld',
      'Kort even, maar niet echt',
      'Nee, we deden iets van mij',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De sterkste verbinding ontstaat als jij afdaalt in de wereld van je kind – zijn spel, zijn muziek, zijn interesses. Dat zegt: "jij telt voor mij."',
    bron: 'Paquette (2004) – Theorizing the Father-Child Relationship',
  },

  {
    id: 'pulse_verb_07',
    skill: 'Verbinding',
    vraag: 'Was er een moment vandaag dat je kind jou zocht?',
    antwoorden: [
      'Ja, en ik was er voor hem/haar',
      'Ja, maar ik was op dat moment niet beschikbaar',
      'Niet dat ik zag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Als een kind zijn vader zoekt, test het de veilige basis. Een vader die er is op die momenten, bouwt het fundament van veilige hechting.',
    bron: 'Ainsworth et al. (1978) – Patterns of Attachment',
  },

  {
    id: 'pulse_verb_08',
    skill: 'Verbinding',
    vraag: 'Hoe zou je de sfeer tussen jou en je kind vandaag omschrijven?',
    antwoorden: [
      'Warm en verbonden',
      'Neutraal – gewoon een doordeweekse dag',
      'Gespannen of afstandelijk',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De dagelijkse basissfeer bepaalt de kleur van de vader-kindrelatie over jaren. Neutrale dagen zijn oké – maar streef naar meer warme dan koele dagen per week.',
    bron: 'Gottman (1994) – Why Marriages Succeed or Fail',
  },

  {
    id: 'pulse_verb_09',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag oogcontact gemaakt met je kind tijdens een gesprek?',
    antwoorden: [
      'Ja, ik heb bewust oogcontact gemaakt en was volledig aanwezig',
      'Kort oogcontact, maar ik was ook met andere dingen bezig',
      'Niet bewust oogcontact gezocht',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Oogcontact activeert het sociale brein en stimuleert de afgifte van oxytocine, wat de hechtingsband tussen vader en kind versterkt.',
    bron: 'Schore (2001) – Effects of a Secure Attachment Relationship on Right Brain Development, Affect Regulation, and Infant Mental Health',
  },

  {
    id: 'pulse_verb_10',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag naar je kind geluisterd zonder direct advies te geven?',
    antwoorden: [
      'Ja, ik heb geduldig geluisterd en ruimte gegeven om uit te praten',
      'Ik heb geluisterd, maar tussendoor ook oplossingen aangedragen',
      'Ik merkte dat ik vooral aan het sturen was in het gesprek',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer vaders actief luisteren zonder te oordelen, ervaart het kind emotionele validatie, wat bijdraagt aan een veilige hechting en emotionele zelfregulatie.',
    bron: 'Gottman (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_verb_11',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag samen met je kind iets gegeten aan tafel?',
    antwoorden: [
      'Ja, we hebben rustig samen gegeten en gepraat',
      'We hebben samen gegeten, maar er was weinig interactie',
      'We hebben niet samen gegeten',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Gezamenlijke maaltijden zijn een van de sterkste voorspellers van emotioneel welzijn bij kinderen. Ze bieden een dagelijks ritueel van verbondenheid en voorspelbaarheid.',
    bron: 'Larson & Richards (1994) – Divergent Realities: The Emotional Lives of Mothers, Fathers, and Adolescents',
  },

  {
    id: 'pulse_verb_12',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag fysiek met je kind gespeeld of gestoefd?',
    antwoorden: [
      'Ja, we hebben samen lichamelijk actief gespeeld',
      'Kort even gestoefd of gespeeld',
      'Nee, er was geen fysiek spel vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Stoeiend spel met vader helpt kinderen om grenzen te leren herkennen, emoties te reguleren en vertrouwen in het eigen lichaam te ontwikkelen.',
    bron: 'Paquette (2004) – Theorizing the Father-Child Activation Relationship',
  },

  {
    id: 'pulse_verb_13',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag je kind geholpen met iets waar het moeite mee had?',
    antwoorden: [
      'Ja, ik heb geduldig geholpen en het kind laten proberen',
      'Ik heb geholpen, maar het meeste zelf overgenomen',
      'Ik heb niet gemerkt dat mijn kind ergens hulp bij nodig had',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vaders die hulp bieden binnen de zone van naaste ontwikkeling – net genoeg ondersteuning zonder over te nemen – bevorderen zelfstandigheid en probleemoplossend vermogen.',
    bron: 'Fonagy (2002) – Affect Regulation, Mentalization, and the Development of the Self',
  },

  {
    id: 'pulse_verb_14',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag je kind een compliment gegeven over iets specifieks?',
    antwoorden: [
      'Ja, ik heb concreet benoemd wat ik goed vond',
      'Ik heb iets algemeens gezegd zoals "goed gedaan"',
      'Ik heb geen compliment gegeven vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Specifieke positieve feedback van vaders versterkt het gevoel van competentie bij kinderen. Procesgerichte complimenten zijn effectiever dan resultaatgerichte lof.',
    bron: 'Seligman (2011) – Flourish: A Visionary New Understanding of Happiness and Well-being',
  },

  {
    id: 'pulse_verb_15',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag een vast ritueel of gewoonte met je kind gedaan (bijv. voorlezen, samen wandelen)?',
    antwoorden: [
      'Ja, we hebben ons vaste ritueel gedaan en er bewust van genoten',
      'We hebben het gedaan, maar vrij vluchtig',
      'Het ritueel is er vandaag niet van gekomen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Terugkerende rituelen geven kinderen een gevoel van veiligheid en voorspelbaarheid. Ze vormen ankers in de dag die de hechtingsrelatie verstevigen.',
    bron: 'Bowlby (1988) – A Secure Base: Parent-Child Attachment and Healthy Human Development',
  },

  {
    id: 'pulse_verb_16',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag gemerkt hoe je kind zich voelde zonder dat het dat hoefde te zeggen?',
    antwoorden: [
      'Ja, ik heb de emotie opgemerkt en er iets mee gedaan',
      'Ik had een vermoeden maar heb het niet uitgesproken',
      'Ik heb niet bewust op de emoties van mijn kind gelet',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het vermogen om de innerlijke toestand van je kind te lezen zonder woorden heet mentaliseren. Dit is een kernvaardigheid voor sensitief vaderschap.',
    bron: 'Fonagy & Target (1997) – Attachment and Reflective Function: Their Role in Self-Organization',
  },

  {
    id: 'pulse_verb_17',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag je kind voorgelezen of samen een verhaal verteld?',
    antwoorden: [
      'Ja, we hebben samen gelezen of een verhaal gedeeld',
      'Kort iets voorgelezen zonder veel interactie',
      'We hebben vandaag niet samen gelezen of verteld',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Voorlezen door vaders heeft een uniek effect op de taalvaardigheid van kinderen. Vaders gebruiken vaak complexere woorden en stellen meer uitdagende vragen dan moeders.',
    bron: 'Duursma (2014) – The Effects of Fathers\' and Mothers\' Reading to Their Children on Language Outcomes',
  },

  {
    id: 'pulse_verb_18',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag je kind uitgelegd waarom je een bepaalde beslissing nam?',
    antwoorden: [
      'Ja, ik heb mijn redenering uitgelegd op een manier die bij de leeftijd past',
      'Ik heb het kort toegelicht maar niet echt uitgelegd',
      'Ik heb een beslissing genomen zonder uitleg te geven',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Inductief redeneren – uitleggen waarom regels bestaan – helpt kinderen moreel redeneren te ontwikkelen en bevordert internalisatie van normen.',
    bron: 'Hoffman (2000) – Empathy and Moral Development: Implications for Caring and Justice',
  },

  {
    id: 'pulse_verb_19',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag een overgang begeleid (bijv. van spelen naar eten, van wakker worden naar aankleden)?',
    antwoorden: [
      'Ja, ik heb het kind rustig voorbereid en begeleid',
      'De overgang ging moeizaam maar ik heb mijn best gedaan',
      'Overgangen liepen vandaag stroef en ik werd ongeduldig',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Overgangsmomenten zijn stressgevoelig voor kinderen. Een vader die deze momenten rustig begeleidt, helpt het kind om zijn stressresponssysteem te reguleren.',
    bron: 'Perry (2006) – The Boy Who Was Raised as a Dog',
  },

  {
    id: 'pulse_verb_20',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag samen met je kind buiten iets gedaan?',
    antwoorden: [
      'Ja, we zijn samen naar buiten geweest en hebben iets ondernomen',
      'Kort buiten geweest maar niet echt samen bezig',
      'We zijn vandaag niet samen buiten geweest',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Gedeelde buitenactiviteiten stimuleren de vader-kindband op een unieke manier. De natuurlijke omgeving verlaagt cortisol en bevordert ontspannen interactie.',
    bron: 'Paquette (2004) – Theorizing the Father-Child Activation Relationship',
  },

  {
    id: 'pulse_verb_21',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag op de grond of op het niveau van je kind gezeten tijdens het spelen?',
    antwoorden: [
      'Ja, ik ben op hun niveau gaan zitten en heb meegespeeld',
      'Ik was in de buurt maar speelde niet echt mee',
      'Ik heb vooral vanaf een afstand toegekeken',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Letterlijk op het niveau van je kind gaan zitten vermindert de machtsongelijkheid en nodigt uit tot gelijkwaardiger contact, wat de kwaliteit van het spel verhoogt.',
    bron: 'Hughes (2009) – Attachment-Focused Parenting',
  },

  {
    id: 'pulse_verb_22',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag je kind begroet of verwelkomd op een warme manier?',
    antwoorden: [
      'Ja, ik heb mijn kind bewust en warm begroet',
      'Ik heb gedag gezegd maar het was vluchtig',
      'Ik heb niet bewust aandacht besteed aan de begroeting',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het herenigingsmoment na een scheiding (school, werk) is een kritisch hechtingsmoment. Een warme begroeting bevestigt de veilige basis voor het kind.',
    bron: 'Ainsworth (1978) – Patterns of Attachment: A Psychological Study of the Strange Situation',
  },

  {
    id: 'pulse_verb_23',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag met je kind gepraat over iets uit jouw eigen dag?',
    antwoorden: [
      'Ja, ik heb iets persoonlijks gedeeld dat paste bij het moment',
      'Ik heb kort iets verteld maar niet uitgeweid',
      'Ik heb niets over mijn eigen dag verteld',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer vaders op gepaste wijze delen uit hun eigen leven, leren kinderen wederkerigheid in relaties en krijgen ze een rijker beeld van hun vader als persoon.',
    bron: 'McAdams (2006) – The Redemptive Self: Stories Americans Live By',
  },

  {
    id: 'pulse_verb_24',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag je kind laten meebeslissen over iets (bijv. wat eten, welk spelletje)?',
    antwoorden: [
      'Ja, ik heb mijn kind actief betrokken bij een keuze',
      'Ik heb opties gegeven maar uiteindelijk zelf beslist',
      'Er was geen ruimte voor meebeslissen vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die ervaren dat hun stem ertoe doet, ontwikkelen een sterker gevoel van autonomie en zelfvertrouwen. Dit begint met kleine dagelijkse keuzemomenten.',
    bron: 'Sroufe (2005) – The Development of the Person: The Minnesota Study of Risk and Adaptation from Birth to Adulthood',
  },

  {
    id: 'pulse_verb_25',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag geduldig gewacht toen je kind iets probeerde uit te leggen?',
    antwoorden: [
      'Ja, ik heb de tijd genomen en niet onderbroken',
      'Ik heb geluisterd maar werd op een gegeven moment ongeduldig',
      'Ik heb het kind onderbroken of afgekapt',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Geduldig wachten terwijl een kind formuleert is een vorm van emotionele beschikbaarheid. Het leert kinderen dat hun gedachten de moeite waard zijn om gehoord te worden.',
    bron: 'Biringen (2000) – Emotional Availability: Conceptualization and Research Findings',
  },

  {
    id: 'pulse_verb_26',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag samen met je kind iets nieuws geprobeerd of ontdekt?',
    antwoorden: [
      'Ja, we hebben samen iets nieuws verkend',
      'We hebben iets bekends gedaan maar met een kleine variatie',
      'Er was geen ruimte voor iets nieuws vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vaders spelen een bijzondere rol als "poort naar de wereld". Door samen nieuwe ervaringen op te doen, stimuleren vaders exploratief gedrag en veerkracht.',
    bron: 'Paquette (2004) – Theorizing the Father-Child Activation Relationship',
  },

  {
    id: 'pulse_verb_27',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag je kind getroost toen het verdrietig, gefrustreerd of boos was?',
    antwoorden: [
      'Ja, ik was er en heb het kind rustig opgevangen',
      'Ik heb het geprobeerd maar vond het lastig om rustig te blijven',
      'Ik heb de emotie niet opgemerkt of genegeerd',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Co-regulatie door een vader helpt het stressresponssysteem van kinderen rijpen. Een kalme, aanwezige vader fungeert als extern regulatiemechanisme.',
    bron: 'Schore (2003) – Affect Regulation and the Repair of the Self',
  },

  {
    id: 'pulse_verb_28',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag je kind aangemoedigd om iets zelf te doen?',
    antwoorden: [
      'Ja, ik heb vertrouwen getoond en op de achtergrond gestaan',
      'Ik heb aangemoedigd maar toch snel ingegrepen',
      'Ik heb het zelf gedaan omdat het sneller ging',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vaders die hun kind uitdagen om zelf te proberen, binnen een veilige context, bevorderen wat Paquette de "activatierelatie" noemt: vertrouwen om de wereld te verkennen.',
    bron: 'Paquette (2004) – Theorizing the Father-Child Activation Relationship',
  },

  {
    id: 'pulse_verb_29',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag bewust je telefoon weggelegd toen je kind je aandacht vroeg?',
    antwoorden: [
      'Ja, ik heb mijn telefoon direct weggelegd en aandacht gegeven',
      'Ik heb het afgemaakt waar ik mee bezig was en daarna aandacht gegeven',
      'Ik heb mijn telefoon niet weggelegd',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Onderzoek naar "technoference" toont aan dat ouderlijk smartphonegebruik de kwaliteit van interactie meetbaar vermindert en tot meer probleemgedrag bij kinderen leidt.',
    bron: 'McDaniel & Radesky (2018) – Technoference: Longitudinal Associations Between Parent Technology Use and Child Behavior Problems',
  },

  {
    id: 'pulse_verb_30',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag een conflict met je kind op een rustige manier opgelost?',
    antwoorden: [
      'Ja, we hebben het samen uitgepraat en een oplossing gevonden',
      'Het conflict is gesust maar niet echt opgelost',
      'Het conflict is geëscaleerd of onopgelost gebleven',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het constructief oplossen van conflicten leert kinderen dat relaties bestand zijn tegen meningsverschillen. Dit versterkt het vertrouwen in de hechtingsrelatie.',
    bron: 'Gottman (2011) – The Science of Trust: Emotional Attunement for Couples',
  },

  {
    id: 'pulse_verb_31',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag interesse getoond in de vriendschappen van je kind?',
    antwoorden: [
      'Ja, ik heb oprecht gevraagd en doorgevraagd over vrienden',
      'Ik heb er kort naar gevraagd',
      'Ik heb niet naar vriendschappen gevraagd',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Betrokkenheid van vaders bij de sociale wereld van het kind voorspelt betere sociale vaardigheden en minder eenzaamheid bij kinderen op latere leeftijd.',
    bron: 'Parke (2002) – Fathers and Families, in Handbook of Parenting',
  },

  {
    id: 'pulse_verb_32',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag samen met je kind muziek geluisterd, gezongen of gedanst?',
    antwoorden: [
      'Ja, we hebben samen van muziek genoten',
      'Er stond muziek op maar we deelden het moment niet echt',
      'Er was geen muziekmoment vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Gezamenlijke muzikale ervaringen synchroniseren de hartslag en ademhaling van ouder en kind, wat een diep gevoel van verbondenheid creëert.',
    bron: 'Panksepp (1998) – Affective Neuroscience: The Foundations of Human and Animal Emotions',
  },

  {
    id: 'pulse_verb_33',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag afscheid genomen van je kind op een bewuste manier?',
    antwoorden: [
      'Ja, ik heb rustig en liefdevol afscheid genomen',
      'Het was een gehaast afscheid',
      'Ik ben weggegaan zonder echt afscheid te nemen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Bewust afscheid nemen is een hechtingsritueel dat het kind helpt de scheiding te verwerken. Het bevestigt dat de ouder terugkomt en het kind belangrijk is.',
    bron: 'Bowlby (1973) – Attachment and Loss, Vol. 2: Separation',
  },

  {
    id: 'pulse_verb_34',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag gelet op de lichaamstaal van je kind?',
    antwoorden: [
      'Ja, ik heb bewust op non-verbale signalen gelet en erop gereageerd',
      'Ik heb iets opgemerkt maar er niet direct op gereageerd',
      'Ik heb niet op lichaamstaal gelet',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen communiceren een groot deel van hun emoties non-verbaal. Vaders die lichaamstaal lezen, reageren sensitiever en versterken de hechtingsband.',
    bron: 'Schore (2001) – Effects of a Secure Attachment Relationship on Right Brain Development, Affect Regulation, and Infant Mental Health',
  },

  {
    id: 'pulse_verb_35',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag je kind geholpen bij het benoemen van een emotie?',
    antwoorden: [
      'Ja, ik heb de emotie benoemd en er ruimte voor gemaakt',
      'Ik heb de emotie benoemd maar snel geprobeerd op te lossen',
      'Ik heb de emotie niet benoemd',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Emotiecoaching – het benoemen en valideren van gevoelens – helpt kinderen hun emoties beter te begrijpen en te reguleren. Dit verlaagt fysiologische stressreacties.',
    bron: 'Gottman (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_verb_36',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag samen met je kind ergens om moeten lachen (niet om je kind, maar mét je kind)?',
    antwoorden: [
      'Ja, we hebben samen gelachen om iets grappigs',
      'Er was een kort luchtig moment',
      'Er was geen gezamenlijk lachmoment',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Gedeelde humor tussen vader en kind is een krachtig verbindingsmechanisme. Lachen activeert het beloningssysteem en verankert positieve herinneringen aan de relatie.',
    bron: 'Panksepp (1998) – Affective Neuroscience: The Foundations of Human and Animal Emotions',
  },

  {
    id: 'pulse_verb_37',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag samen met je kind een klusje of taak gedaan?',
    antwoorden: [
      'Ja, we hebben samengewerkt en ik heb het als leuk moment benut',
      'We hebben samen iets gedaan maar ik gaf vooral instructies',
      'We hebben niet samengewerkt aan een taak',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Samenwerken aan alledaagse taken leert kinderen verantwoordelijkheid en geeft hen het gevoel een waardevolle bijdrage te leveren aan het gezin.',
    bron: 'Larson & Richards (1994) – Divergent Realities: The Emotional Lives of Mothers, Fathers, and Adolescents',
  },

  {
    id: 'pulse_verb_38',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag het spel of de activiteit van je kind gevolgd in plaats van gestuurd?',
    antwoorden: [
      'Ja, ik heb het kind de leiding laten nemen',
      'Ik heb deels gevolgd maar ook bijgestuurd',
      'Ik heb de activiteit grotendeels bepaald',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Child-led play versterkt het gevoel van autonomie en competentie. Wanneer een vader het kind laat leiden, ervaart het kind dat zijn ideeën waardevol zijn.',
    bron: 'Hughes (2009) – Attachment-Focused Parenting',
  },

  {
    id: 'pulse_verb_39',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag even alleen tijd doorgebracht met je kind, zonder andere gezinsleden?',
    antwoorden: [
      'Ja, we hadden bewust een-op-eentijd',
      'Kort even met zijn tweeën maar niet bewust gepland',
      'Nee, er was geen moment alleen met mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Exclusieve vader-kindtijd geeft het kind onverdeelde aandacht en ruimte om zich vrijer te uiten. Dit verdiept de unieke vader-kindrelatie.',
    bron: 'Lamb (2010) – The Role of the Father in Child Development',
  },

  {
    id: 'pulse_verb_40',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag je kind bedankt voor iets?',
    antwoorden: [
      'Ja, ik heb oprecht bedankt en uitgelegd waarvoor',
      'Ik heb vluchtig "dankjewel" gezegd',
      'Ik heb mijn kind niet bedankt vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer ouders hun kind bedanken, modelleren ze dankbaarheid en laten ze zien dat de bijdrage van het kind gezien en gewaardeerd wordt.',
    bron: 'Seligman (2011) – Flourish: A Visionary New Understanding of Happiness and Well-being',
  },

  {
    id: 'pulse_verb_41',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag je kind laten merken dat je aan hem of haar dacht toen je er niet was (bijv. berichtje, tekening meegenomen)?',
    antwoorden: [
      'Ja, ik heb laten merken dat ik aan mijn kind dacht',
      'Ik heb eraan gedacht maar het niet laten merken',
      'Ik heb er niet bij stilgestaan',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kleine signalen van "ik denk aan je" versterken het interne werkmodel van het kind: de overtuiging dat het de moeite waard is om aan te denken, ook als papa er niet is.',
    bron: 'Bowlby (1988) – A Secure Base: Parent-Child Attachment and Healthy Human Development',
  },

  {
    id: 'pulse_verb_42',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag je kind een vraag gesteld uit oprechte nieuwsgierigheid?',
    antwoorden: [
      'Ja, ik heb een open vraag gesteld omdat ik het écht wilde weten',
      'Ik heb vragen gesteld maar vooral gesloten of controlerende',
      'Ik heb geen vragen gesteld aan mijn kind',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Oprechte nieuwsgierigheid van een vader communiceert aan het kind: jij bent interessant en jouw perspectief doet ertoe. Dit versterkt het zelfbeeld.',
    bron: 'Fonagy (2002) – Affect Regulation, Mentalization, and the Development of the Self',
  },

  {
    id: 'pulse_verb_43',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag een moment gehad waarin je kind en jij stilte deelden zonder dat het ongemakkelijk was?',
    antwoorden: [
      'Ja, we waren comfortabel stil samen',
      'Er was stilte maar ik voelde druk om iets te zeggen',
      'Er was geen moment van gedeelde stilte',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Comfortabele stilte is een teken van veilige hechting. Het kind ervaart dat de aanwezigheid van vader op zichzelf al voldoende is, zonder woorden.',
    bron: 'Ainsworth (1978) – Patterns of Attachment: A Psychological Study of the Strange Situation',
  },

  {
    id: 'pulse_verb_44',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag naar een creatie, prestatie of verhaal van je kind gekeken met volle aandacht?',
    antwoorden: [
      'Ja, ik heb aandachtig gekeken en specifiek gereageerd',
      'Ik heb gekeken maar was niet helemaal bij de les',
      'Ik heb niet de tijd genomen om te kijken',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het "gleam in the father\'s eye" – de zichtbare trots en aandacht – is een van de krachtigste bronnen van zelfwaardering voor een kind.',
    bron: 'Kohut (1971) – The Analysis of the Self',
  },

  {
    id: 'pulse_verb_45',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag je kind geholpen met de voorbereiding op morgen (bijv. kleding klaarleggen, tas inpakken)?',
    antwoorden: [
      'Ja, we hebben samen de volgende dag voorbereid',
      'Ik heb het aangestipt maar het meeste werk lag bij het kind of partner',
      'Ik heb hier geen aandacht aan besteed',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Samen de dag voorbereiden is een vorm van co-regulatie die het kind helpt om structuur en overzicht te ervaren, wat stress de volgende ochtend vermindert.',
    bron: 'Perry (2006) – The Boy Who Was Raised as a Dog',
  },

  {
    id: 'pulse_verb_46',
    skill: 'Verbinding',
    vraag: 'Heb je vandaag je kind welterusten gewenst op een persoonlijke manier?',
    antwoorden: [
      'Ja, ik heb bewust en liefdevol welterusten gezegd of gebracht',
      'Ik heb welterusten geroepen vanuit een andere kamer',
      'Ik heb mijn kind niet welterusten gewenst',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het slaapgaanritueel is het laatste hechtingsmoment van de dag. Een warm welterusten geeft het kind een gevoel van veiligheid om met vertrouwen de nacht in te gaan.',
    bron: 'Bowlby (1988) – A Secure Base: Parent-Child Attachment and Healthy Human Development',
  },

  // ── REFLECTIE (45 vragen) ───────────────────────────────────────

  {
    id: 'pulse_refl_01',
    skill: 'Reflectie',
    vraag: 'Wat is het eerste dat je denkt als je terugkijkt op jouw vaderschap van vandaag?',
    antwoorden: [
      'Tevredenheid – ik deed wat ik kon',
      'Gemengd – goed en minder goed',
      'Spijt – ik had het beter kunnen doen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De eerste gedachte bij terugkijken op de dag onthult veel over jouw innerlijke standaard als vader. Noch te streng, noch te laks – zoek de middenweg.',
    bron: 'Neff (2011) – Self-Compassion',
  },

  {
    id: 'pulse_refl_02',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag iets gedaan als vader dat je trots maakt?',
    antwoorden: [
      'Ja – één moment dat ik kon erkennen',
      'Klein dingetje misschien',
      'Niet echt vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Trots erkennen over eigen gedrag is geen arrogantie – het is zelfkennis. Vaders die hun krachten kennen, kunnen ze bewust inzetten.',
    bron: 'Seligman (2011) – Flourish',
  },

  {
    id: 'pulse_refl_03',
    skill: 'Reflectie',
    vraag: 'Was er vandaag een patroon in je vaderschap dat je herkende van vroeger – van jouw eigen vader?',
    antwoorden: [
      'Ja – iets goeds dat ik door geef',
      'Ja – iets wat ik liever niet herhaal',
      'Niet vandaag bewust herkend',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Intergenerationele patronen zijn krachtig maar niet onontkoombaar. Ze herkennen is de eerste stap naar bewust vaderschap.',
    bron: 'Van IJzendoorn (1995) – Adult Attachment Representations',
  },

  {
    id: 'pulse_refl_04',
    skill: 'Reflectie',
    vraag: 'Heeft jouw stemming vandaag het klimaat thuis beïnvloed?',
    antwoorden: [
      'Positief – ik bracht goede energie',
      'Neutraal – niet opvallend',
      'Negatief – mijn humeur sloeg over',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vaders reguleren het emotionele klimaat thuis meer dan ze zich realiseren. Kinderen zijn extreem gevoelig voor de gemoedstoestand van hun vader.',
    bron: 'Repetti (1994) – Short-Term and Long-Term Processes Linking Job Stressors',
  },

  {
    id: 'pulse_refl_05',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag iets van je kind geleerd?',
    antwoorden: [
      'Ja – een inzicht dat ik meeneem',
      'Misschien iets kleins',
      'Niet bewust',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vaders die zich bewust zijn dat ze van hun kinderen leren, zijn opener, flexibeler en groeien sneller als ouder.',
    bron: 'Larson & Richards (1994) – Divergent Realities',
  },

  {
    id: 'pulse_refl_06',
    skill: 'Reflectie',
    vraag: 'Was er vandaag een moment waarop je realiseerde: zo wil ik als vader zijn?',
    antwoorden: [
      'Ja – één helder moment van "dit klopt"',
      'Kort gevoel, maar niet sterk',
      'Niet vandaag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Momenten waarop vaderschap voelt zoals het hoort te voelen, zijn ankerpunten. Herinner ze – ze geven richting in moeilijke perioden.',
    bron: 'McAdams (2001) – The Psychology of Life Stories',
  },

  {
    id: 'pulse_refl_07',
    skill: 'Reflectie',
    vraag: 'Als je kind jou vandaag zou omschrijven aan een vriend – wat zou het dan zeggen?',
    antwoorden: [
      'Iets positiefs – aanwezig, grappig, lief',
      'Neutraal – gewoon papa',
      'Misschien iets moeilijks – druk, kortaf',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Je kind ervaart jou anders dan jij jezelf ervaart. Probeer soms door hun ogen te kijken – dat is de meest krachtige reflectievorm.',
    bron: 'Fonagy et al. (2002) – Affect Regulation, Mentalization, and the Development of the Self',
  },

  {
    id: 'pulse_refl_08',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag een moment gehad waarop je wilde reageren maar je bewust inhield?',
    antwoorden: [
      'Ja, ik heb me ingehouden en daarna bewust gekozen hoe ik reageerde',
      'Ik heb me proberen in te houden maar het lukte maar half',
      'Ik heb gereageerd zonder erbij na te denken',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het vermogen om een impuls te pauzeren en bewust te kiezen is een kernaspect van emotionele zelfregulatie. Dit modelleert zelfbeheersing voor je kind.',
    bron: 'Siegel & Bryson (2012) – The Whole-Brain Child',
  },

  {
    id: 'pulse_refl_09',
    skill: 'Reflectie',
    vraag: 'Als je terugkijkt op vandaag, wat zou je kind zeggen over hoeveel ruimte het kreeg om zichzelf te zijn?',
    antwoorden: [
      'Mijn kind voelde zich vrij om zichzelf te zijn',
      'Er was enige ruimte maar ook momenten van beperking',
      'Mijn kind moest zich vooral aanpassen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen die ervaren dat ze zichzelf mogen zijn in de nabijheid van hun vader, ontwikkelen een authentieker zelfgevoel en meer psychologische veerkracht.',
    bron: 'Winnicott (1965) – The Maturational Processes and the Facilitating Environment',
  },

  {
    id: 'pulse_refl_10',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag iets gedaan als vader waarvan je weet dat je eigen vader het niet deed?',
    antwoorden: [
      'Ja, ik heb bewust een andere keuze gemaakt dan mijn vader zou maken',
      'Ik heb erover nagedacht maar het was lastig om anders te handelen',
      'Ik heb niet stilgestaan bij het verschil met mijn eigen vader',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het bewust doorbreken van intergenerationele patronen is een van de krachtigste vormen van vaderlijke groei. Het vereist reflectie en moed om anders te kiezen.',
    bron: 'van IJzendoorn (1995) – Adult Attachment Representations, Parental Responsiveness, and Infant Attachment',
  },

  {
    id: 'pulse_refl_11',
    skill: 'Reflectie',
    vraag: 'Hoe zou je de balans tussen structuur en warmte in je vaderschap vandaag omschrijven?',
    antwoorden: [
      'Goed in balans: duidelijke grenzen met warmte en begrip',
      'Doorgeslagen naar één kant: te streng of te toegeeflijk',
      'Ik heb niet bewust op deze balans gelet',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Autoritatief opvoeden – de combinatie van warmte en structuur – leidt tot de beste uitkomsten op vrijwel alle ontwikkelingsdomeinen van kinderen.',
    bron: 'Baumrind (1991) – The Influence of Parenting Style on Adolescent Competence and Substance Use',
  },

  {
    id: 'pulse_refl_12',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag een excuus aangeboden aan je kind voor iets dat je fout deed?',
    antwoorden: [
      'Ja, ik heb sorry gezegd en uitgelegd wat ik anders had willen doen',
      'Ik wist dat het nodig was maar heb het niet gedaan',
      'Er was niets waarvoor ik excuus hoefde te maken',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Wanneer een vader zijn fouten erkent, leert het kind dat relaties herstelbaar zijn. Dit "rupture and repair"-proces is fundamenteel voor veilige hechting.',
    bron: 'Schore (2003) – Affect Regulation and the Repair of the Self',
  },

  {
    id: 'pulse_refl_13',
    skill: 'Reflectie',
    vraag: 'Hoe tevreden ben je over het geduld dat je vandaag hebt opgebracht?',
    antwoorden: [
      'Ik ben tevreden: ik bleef rustig ook als het lastig was',
      'Wisselend: soms geduldig, soms niet',
      'Ik was vandaag minder geduldig dan ik zou willen',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Geduld is geen vast persoonlijkheidskenmerk maar een vaardigheid die groeit door bewuste oefening. Zelfcompassie bij ongeduld voorkomt een negatieve spiraal.',
    bron: 'Neff (2011) – Self-Compassion: The Proven Power of Being Kind to Yourself',
  },

  {
    id: 'pulse_refl_14',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag een moment gehad waarop je je overweldigd voelde als vader?',
    antwoorden: [
      'Ja, maar ik heb het kunnen herkennen en ruimte genomen',
      'Ja, en het heeft mijn reactie naar mijn kind beïnvloed',
      'Nee, vandaag voelde ik me niet overweldigd',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het herkennen van overweldiging is de eerste stap naar betere zelfregulatie. Vaders die hun stresssignalen kennen, kunnen eerder ingrijpen voordat ze ontploffen.',
    bron: 'Perry (2006) – The Boy Who Was Raised as a Dog',
  },

  {
    id: 'pulse_refl_15',
    skill: 'Reflectie',
    vraag: 'Welk gevoel overheerst als je terugdenkt aan je interactie met je kind vandaag?',
    antwoorden: [
      'Warmte en verbondenheid',
      'Gemengde gevoelens: mooie en minder mooie momenten',
      'Frustratie, afstand of spijt',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het dominante gevoel dat overblijft na interactie weerspiegelt de emotionele kwaliteit van het contact. Dit gevoel is een betrouwbaar kompas voor je vaderschap.',
    bron: 'Gottman (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_refl_16',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag bewust stilgestaan bij wat je kind nodig had, los van wat je kind vroeg?',
    antwoorden: [
      'Ja, ik heb de onderliggende behoefte proberen te zien',
      'Ik heb vooral gereageerd op het directe verzoek',
      'Ik heb hier niet bij stilgestaan',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Achter elk gedrag van een kind ligt een behoefte. Vaders die voorbij het gedrag kijken naar de onderliggende behoefte, reageren sensitiever en effectiever.',
    bron: 'Fonagy & Target (1997) – Attachment and Reflective Function: Their Role in Self-Organization',
  },

  {
    id: 'pulse_refl_17',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag iets gedaan voor jezelf waardoor je een betere vader kon zijn?',
    antwoorden: [
      'Ja, ik heb bewust tijd genomen voor iets dat mij oplaadt',
      'Ik had het nodig maar heb het niet gedaan',
      'Ik heb er niet bij stilgestaan dat ik dat nodig had',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Zelfzorg is geen egoïsme maar een voorwaarde voor sensitief ouderschap. Een vader die zijn eigen batterij oplaadt, heeft meer te geven aan zijn kind.',
    bron: 'Neff (2011) – Self-Compassion: The Proven Power of Being Kind to Yourself',
  },

  {
    id: 'pulse_refl_18',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag nagedacht over wat voor soort herinnering je aan het maken bent voor je kind?',
    antwoorden: [
      'Ja, ik heb me afgevraagd hoe mijn kind deze dag later zal herinneren',
      'Het schoot even door mijn hoofd',
      'Ik heb hier niet bij stilgestaan',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen onthouden niet elk moment maar wel het emotionele klimaat. De optelsom van dagelijkse micro-interacties vormt het herinneringsbeeld van een vader.',
    bron: 'McAdams (2006) – The Redemptive Self: Stories Americans Live By',
  },

  {
    id: 'pulse_refl_19',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag het gedrag van je kind kunnen zien als communicatie in plaats van als probleem?',
    antwoorden: [
      'Ja, ik zag het gedrag als signaal en reageerde met begrip',
      'Soms wel, soms nam ik het gedrag te persoonlijk',
      'Ik heb vooral gereageerd op het lastige gedrag zelf',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Alle gedrag is communicatie. Wanneer een vader dit perspectief hanteert, verschuift de reactie van correctie naar connectie, wat effectiever is.',
    bron: 'Hughes (2009) – Attachment-Focused Parenting',
  },

  {
    id: 'pulse_refl_20',
    skill: 'Reflectie',
    vraag: 'Is er vandaag een moment geweest waarop je merkte dat je je kind aan het vergelijken was met een ander kind?',
    antwoorden: [
      'Ik heb het bewust vermeden en mijn kind als uniek gezien',
      'Ik betrapte mezelf op een vergelijking maar heb het losgelaten',
      'Ik heb mijn kind vergeleken en dat beïnvloedde mijn reactie',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vergelijking ondermijnt het onvoorwaardelijke karakter van de ouder-kindrelatie. Elk kind heeft een uniek ontwikkelingspad dat waardering verdient.',
    bron: 'Sroufe (2005) – The Development of the Person: The Minnesota Study of Risk and Adaptation from Birth to Adulthood',
  },

  {
    id: 'pulse_refl_21',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag ervaren dat je verwachtingen van je kind realistisch waren voor zijn of haar leeftijd?',
    antwoorden: [
      'Ja, ik heb bewust rekening gehouden met de leeftijd en het ontwikkelingsniveau',
      'Ik merkte achteraf dat ik soms te veel of te weinig verwachtte',
      'Ik heb niet nagedacht over of mijn verwachtingen passend waren',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Onrealistische verwachtingen zijn een veelvoorkomende bron van ouderfrustratie. Kennis van kindontwikkeling helpt vaders om hun verwachtingen af te stemmen.',
    bron: 'Perry (2006) – The Boy Who Was Raised as a Dog',
  },

  {
    id: 'pulse_refl_22',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag met je partner of een vertrouwenspersoon gepraat over je vaderschap?',
    antwoorden: [
      'Ja, ik heb openlijk gedeeld hoe het als vader ging',
      'Ik heb iets kort aangestipt',
      'Nee, ik heb met niemand over mijn vaderschap gepraat',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vaders die reflecteren in gesprek met anderen ontwikkelen een rijker narratief over hun ouderschap. Dit doorbreekt isolatie en bevordert groei.',
    bron: 'McAdams (2006) – The Redemptive Self: Stories Americans Live By',
  },

  {
    id: 'pulse_refl_23',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag opgemerkt dat je stem of toon invloed had op het gedrag van je kind?',
    antwoorden: [
      'Ja, ik merkte dat een rustige toon mijn kind kalmeerde',
      'Ik merkte dat mijn toon soms te scherp was',
      'Ik heb niet op mijn toon gelet',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De prosodie van de vaderstem – toonhoogte, volume en ritme – wordt door kinderen als emotioneel signaal verwerkt nog voordat de inhoud doordringt.',
    bron: 'Schore (2003) – Affect Regulation and the Repair of the Self',
  },

  {
    id: 'pulse_refl_24',
    skill: 'Reflectie',
    vraag: 'Had je vandaag een moment waarop je trots was op het geduld dat je opbracht in een lastige situatie?',
    antwoorden: [
      'Ja, ik heb in een moeilijk moment rustig en bewust gehandeld',
      'Het was lastig maar ik heb het uiteindelijk redelijk gedaan',
      'Ik verloor mijn geduld in een lastige situatie',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het erkennen van eigen succesmomenten versterkt het gevoel van competentie als vader. Positieve zelfreflectie is een motor voor duurzame gedragsverandering.',
    bron: 'Bandura (1997) – Self-Efficacy: The Exercise of Control',
  },

  {
    id: 'pulse_refl_25',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag bewust je eigen behoeften uitgesteld ten gunste van je kind?',
    antwoorden: [
      'Ja, en ik deed dat met een goed gevoel',
      'Ja, maar het kostte me moeite en ik voelde weerstand',
      'Ik heb mijn eigen behoeften vandaag laten prevaleren',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Ouderlijk altruïsme is gezond zolang het niet structureel ten koste gaat van het eigen welzijn. De balans hiertussen is een belangrijk reflectiepunt.',
    bron: 'Neff (2011) – Self-Compassion: The Proven Power of Being Kind to Yourself',
  },

  {
    id: 'pulse_refl_26',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag een grens gesteld waar je achteraf tevreden mee bent?',
    antwoorden: [
      'Ja, ik heb een duidelijke en liefdevolle grens gesteld',
      'Ik heb een grens gesteld maar het voelde niet goed',
      'Ik heb geen grenzen gesteld of juist te veel',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Grenzen stellen vanuit verbinding in plaats van vanuit macht geeft kinderen veiligheid. Een grens is pas effectief als het kind de relatie erachter voelt.',
    bron: 'Gottman (1997) – Raising an Emotionally Intelligent Child',
  },

  {
    id: 'pulse_refl_27',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag gemerkt dat stress van buitenaf (werk, financiën, relatie) doorwerkte in je vaderschap?',
    antwoorden: [
      'Ik was me bewust van de stress maar heb het gescheiden weten te houden',
      'De stress sijpelde deels door in mijn interactie met mijn kind',
      'Externe stress bepaalde hoe ik vandaag was als vader',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Werkstress is een van de grootste verstoorders van vaderbetrokkenheid. Bewustzijn van het "spillover-effect" is de eerste stap om het te begrenzen.',
    bron: 'Larson & Richards (1994) – Divergent Realities: The Emotional Lives of Mothers, Fathers, and Adolescents',
  },

  {
    id: 'pulse_refl_28',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag nagedacht over wat je wilt dat je kind over tien jaar herinnert van deze periode?',
    antwoorden: [
      'Ja, ik heb hier bewust bij stilgestaan en het beïnvloedde mijn keuzes',
      'Het schoot even door mijn hoofd maar ik deed er niets mee',
      'Ik heb hier niet bij stilgestaan',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Langetermijnreflectie helpt vaders om dagelijkse keuzes in perspectief te plaatsen. Het verschuift de focus van het urgente naar het belangrijke.',
    bron: 'McAdams (2006) – The Redemptive Self: Stories Americans Live By',
  },

  {
    id: 'pulse_refl_29',
    skill: 'Reflectie',
    vraag: 'Was er vandaag een moment waarop je voelde dat je "genoeg" was als vader, zonder iets extra te hoeven doen?',
    antwoorden: [
      'Ja, ik voelde dat mijn aanwezigheid op zichzelf waardevol was',
      'Ik twijfelde of ik wel genoeg deed',
      'Ik had het gevoel tekort te schieten',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het concept "good enough parenting" van Winnicott stelt dat perfectie niet nodig is. Een vader die er "gewoon" is, biedt al een enorm fundament.',
    bron: 'Winnicott (1971) – Playing and Reality',
  },

  {
    id: 'pulse_refl_30',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag bewust een moment van rust gecreëerd in een chaotische situatie met je kind?',
    antwoorden: [
      'Ja, ik heb het tempo verlaagd en rust gebracht',
      'Ik heb het geprobeerd maar de chaos won',
      'Ik werd meegezogen in de chaos',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Een vader die in staat is om als "anker" te fungeren in chaotische momenten, reguleert het stresssysteem van het hele gezin via sociale referencing.',
    bron: 'Schore (2001) – Effects of a Secure Attachment Relationship on Right Brain Development, Affect Regulation, and Infant Mental Health',
  },

  {
    id: 'pulse_refl_31',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag iets gezien in het gedrag van je kind dat je aan jezelf deed denken?',
    antwoorden: [
      'Ja, en ik heb er met mildheid naar gekeken',
      'Ja, maar het riep ongemak op',
      'Ik heb dit niet opgemerkt',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Kinderen zijn een spiegel voor onverwerkte aspecten van onszelf. Wat ons triggert in ons kind, zegt vaak meer over ons dan over het kind.',
    bron: 'Fonagy (2002) – Affect Regulation, Mentalization, and the Development of the Self',
  },

  {
    id: 'pulse_refl_32',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag nagedacht over hoe je als vader omgaat met onzekerheid of niet-weten?',
    antwoorden: [
      'Ja, ik heb onzekerheid geaccepteerd en hoefde niet alles te weten',
      'Ik voelde onzekerheid maar probeerde het te verbergen',
      'Ik heb hier niet bij stilgestaan',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vaders die hun onzekerheid durven tonen, leren kinderen dat niet-weten normaal is. Dit bevordert een growth mindset en vermindert faalangst.',
    bron: 'Dweck (2006) – Mindset: The New Psychology of Success',
  },

  {
    id: 'pulse_refl_33',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag opgemerkt hoe je lichaam reageerde in een spannend moment met je kind?',
    antwoorden: [
      'Ja, ik merkte lichamelijke spanning en gebruikte dat als signaal',
      'Ik merkte iets maar deed er niets mee',
      'Ik heb niet op mijn lichaamssignalen gelet',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Lichaamsbewustzijn (interoceptie) is een belangrijke voorspeller van emotionele intelligentie. Vaders die hun lichamelijke signalen herkennen, reguleren beter.',
    bron: 'Siegel (2012) – The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are',
  },

  {
    id: 'pulse_refl_34',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag het gevoel gehad dat je automatisch reageerde op je kind, als op de "automatische piloot"?',
    antwoorden: [
      'Nee, ik was bewust aanwezig in mijn reacties',
      'Soms wel, maar ik corrigeerde mezelf',
      'Ja, ik reageerde vooral uit gewoonte zonder na te denken',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Automatische reactiepatronen zijn vaak overgeleverd uit de eigen opvoeding. Bewustwording is de eerste stap naar het doorbreken van ongewenste automatismen.',
    bron: 'van IJzendoorn (1995) – Adult Attachment Representations, Parental Responsiveness, and Infant Attachment',
  },

  {
    id: 'pulse_refl_35',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag nagedacht over welke waarde je je kind hebt willen meegeven?',
    antwoorden: [
      'Ja, ik heb bewust een waarde voorgeleefd in mijn gedrag',
      'Ik heb erover nagedacht maar niet bewust gehandeld',
      'Ik heb hier niet bij stilgestaan',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Waarden worden niet overgedragen door woorden maar door voorbeeldgedrag. Kinderen internaliseren wat ze hun vader zien doen, niet wat hij zegt te vinden.',
    bron: 'Bandura (1977) – Social Learning Theory',
  },

  {
    id: 'pulse_refl_36',
    skill: 'Reflectie',
    vraag: 'Is er vandaag iets geweest waarvan je wenste dat je het anders had aangepakt?',
    antwoorden: [
      'Ja, en ik weet wat ik de volgende keer anders wil doen',
      'Ja, maar ik weet niet goed hoe ik het anders zou aanpakken',
      'Ik heb hier niet over nagedacht',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Constructief terugreflecteren zonder zelfverwijt is een vaardigheid. Het onderscheid tussen schuld (destructief) en verantwoordelijkheid (constructief) is cruciaal.',
    bron: 'Neff (2011) – Self-Compassion: The Proven Power of Being Kind to Yourself',
  },

  {
    id: 'pulse_refl_37',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag het gevoel gehad dat de tijd met je kind te snel ging?',
    antwoorden: [
      'Ja, ik heb bewust genoten en probeerde het moment vast te houden',
      'De tijd vloog voorbij maar ik was er niet bewust mee bezig',
      'Ik heb de tijd met mijn kind niet als bijzonder ervaren',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Mindful aanwezig zijn bij vluchtige momenten versterkt zowel de band als de herinnering. Bewust genieten is een vaardigheid die je kunt trainen.',
    bron: 'Kabat-Zinn & Kabat-Zinn (1997) – Everyday Blessings: The Inner Work of Mindful Parenting',
  },

  {
    id: 'pulse_refl_38',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag het verschil gemerkt tussen aanwezig zijn en beschikbaar zijn voor je kind?',
    antwoorden: [
      'Ja, ik was zowel fysiek als mentaal beschikbaar',
      'Ik was er wel maar merkte dat ik mentaal afwezig was',
      'Ik heb dit verschil niet opgemerkt',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Fysieke aanwezigheid zonder emotionele beschikbaarheid wordt door kinderen als afwijzing ervaren. Kwaliteit van aanwezigheid weegt zwaarder dan kwantiteit.',
    bron: 'Biringen (2000) – Emotional Availability: Conceptualization and Research Findings',
  },

  {
    id: 'pulse_refl_39',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag nagedacht over hoe je je kind helpt om te gaan met tegenslag?',
    antwoorden: [
      'Ja, ik heb bewust gekozen hoe ik mijn kind begeleidde bij tegenslag',
      'Ik heb erover nagedacht maar was onzeker over de juiste aanpak',
      'Ik heb hier niet bij stilgestaan',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Vaders spelen een unieke rol in het ontwikkelen van veerkracht bij kinderen. Door tegenslag te begeleiden in plaats van te voorkomen, leren kinderen coping.',
    bron: 'Paquette (2004) – Theorizing the Father-Child Activation Relationship',
  },

  {
    id: 'pulse_refl_40',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag een moment gehad waarin je bewust koos voor verbinding in plaats van correctie?',
    antwoorden: [
      'Ja, ik koos voor contact maken voordat ik corrigeerde',
      'Ik wilde verbinden maar schoot toch in correctiemodus',
      'Ik heb vooral gecorrigeerd wanneer dat nodig leek',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het principe "connect before you correct" is neurobiologisch onderbouwd: een kind dat zich verbonden voelt, staat open voor begeleiding. Correctie zonder verbinding leidt tot weerstand.',
    bron: 'Siegel & Bryson (2012) – The Whole-Brain Child',
  },

  {
    id: 'pulse_refl_41',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag stilgestaan bij je eigen energieniveau en hoe dat je vaderschap beïnvloedde?',
    antwoorden: [
      'Ja, ik heb mijn energie bewust gemanaged om er voor mijn kind te zijn',
      'Ik merkte dat ik moe was maar deed niets anders',
      'Mijn lage energie bepaalde onbewust hoe ik reageerde',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Chronische vermoeidheid ondermijnt het vermogen tot sensitief ouderschap. Bewust energiemanagement is een ondergewaardeerd aspect van goed vaderschap.',
    bron: 'Larson & Richards (1994) – Divergent Realities: The Emotional Lives of Mothers, Fathers, and Adolescents',
  },

  {
    id: 'pulse_refl_42',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag een kans gemist om dichterbij je kind te komen die je nu wel ziet?',
    antwoorden: [
      'Nee, ik heb de meeste kansen benut',
      'Ja, ik zie nu een moment dat ik had kunnen pakken',
      'Ik weet het niet, ik heb er niet bewust op gelet',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Gemiste verbindingsmomenten herkennen is een teken van groeiend bewustzijn, niet van falen. Deze reflectie vergroot de kans dat je het volgende moment wél pakt.',
    bron: 'Gottman (2011) – The Science of Trust: Emotional Attunement for Couples',
  },

  {
    id: 'pulse_refl_43',
    skill: 'Reflectie',
    vraag: 'Als je vandaag zou moeten scoren op een schaal van 1 tot 10 als vader, welk cijfer geef je jezelf?',
    antwoorden: [
      'Een 7 of hoger: ik ben tevreden over hoe het ging',
      'Een 5 of 6: het was oké maar er is ruimte voor verbetering',
      'Lager dan een 5: het was een lastige dag',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Zelfbeoordeling stimuleert zelfreflectie, maar de score zelf is minder belangrijk dan de onderbouwing. Wat ligt achter het cijfer? Dat is het echte inzicht.',
    bron: 'Bandura (1997) – Self-Efficacy: The Exercise of Control',
  },

  {
    id: 'pulse_refl_44',
    skill: 'Reflectie',
    vraag: 'Heb je vandaag gemerkt dat je iets van een vorig reflectiemoment in praktijk hebt gebracht?',
    antwoorden: [
      'Ja, ik heb bewust een eerder inzicht toegepast',
      'Ik dacht eraan maar het lukte niet helemaal',
      'Ik heb niet teruggedacht aan eerdere reflecties',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'De brug tussen reflectie en gedragsverandering is de kern van persoonlijke groei. Het bewust toepassen van inzichten verankert ze als nieuwe gewoonten.',
    bron: 'Kolb (1984) – Experiential Learning: Experience as the Source of Learning and Development',
  },

  {
    id: 'pulse_refl_45',
    skill: 'Reflectie',
    vraag: 'Als je kind je over twintig jaar zou beschrijven als vader, wat hoop je dan dat het woord is dat het meest opvalt?',
    antwoorden: [
      'Ik weet welk woord ik wil en heb er vandaag naar geleefd',
      'Ik heb een beeld maar mijn gedrag sluit er nog niet helemaal op aan',
      'Ik heb hier niet over nagedacht',
      'Kind niet gezien vandaag',
    ],
    inzicht: 'Het formuleren van een gewenste vaderidentiteit geeft richting aan dagelijkse keuzes. Narratieve identiteit – het verhaal dat we over onszelf vertellen – stuurt ons gedrag.',
    bron: 'McAdams (2006) – The Redemptive Self: Stories Americans Live By',
  },

];
