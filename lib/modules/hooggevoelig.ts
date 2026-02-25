import type { LearningModule, Skill } from "../types";

export const HOOGGEVOELIG_MODULES: LearningModule[] = [
  {
    id: "hg_mod_1",
    skill: "Aanwezigheid" as Skill,
    title: "Alles Komt Harder Binnen — Aanwezig Zijn bij je Hooggevoelige Kind",
    description:
      "Je kind huilt om een label in zijn shirt. Weigert naar een feestje. Klapt dicht na school. Het is geen aanstellerij — het is een zenuwstelsel dat alles dieper verwerkt. Ontdek waarom juist jouw kalmte het verschil maakt.",
    duration: "12-18 min",
    difficulty: "basis" as const,
    order: 1,
    themes: ["hooggevoelig"],
    content: [
      // ── 1. Opening ────────────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Zaterdagmiddag. Verjaardagsfeestje van neef Sem.",
        text: "Je loopt met Mila (6) het huis van je broer binnen. Twintig kinderen, muziek uit een speaker, slingers, taart, geschreeuw. Mila pakt je hand. Stevig.\n\nJe hurkt. 'Het is leuk, ga maar spelen.' Ze schudt haar hoofd. Je voelt de ogen van je broer. Die van je moeder. 'Laat haar toch gewoon meedoen.' Dat 'gewoon' is het woord dat steekt.\n\nEen halfuur later zit Mila onder de kapstok in de gang. Alleen. Jas aan, duimen in haar mond. Je vindt haar daar, stilletjes. Als je haar naam zegt, schrikt ze. Ze huilt niet. Het is erger dan huilen. Ze is weg. Afwezig achter haar eigen ogen.\n\nDie avond thuis is het compleet anders. Ze klapt. Huilen, schreeuwen, de tandenborstel is te hard, het kussen ligt verkeerd, de lamp is te fel, haar broertje ademt te hard. Alles is te veel. Jij staat in de badkamer en denkt: wat is hier in godsnaam aan de hand?\n\nOf misschien herken je het anders. Het is woensdagavond. Je zoon Daan (9) trekt zijn pyjama aan en opeens bevriest hij. 'Het label.' Je kijkt. Een klein wit labeltje in zijn shirt. 'Dat prikt niet, Daan.' Maar voor Daan prikt het wel. Het prikt alsof iemand een naald in zijn nek duwt. En jouw 'dat prikt niet' is voor hem hetzelfde als zeggen dat zijn werkelijkheid niet bestaat.\n\nAls je je in een van deze situaties herkent — of in de stilte erna, als je je afvraagt waarom jouw kind zo anders reageert dan andere kinderen — dan ben je hier op de goede plek. Want er is niets mis met je kind. Er is iets bijzonders aan de hand. En het vraagt iets specifieks van jou als vader: niet harder, niet strenger, niet meer 'loslaten'. Het vraagt je aanwezigheid. Echte, kalme, onvoorwaardelijke aanwezigheid.",
      },
      // ── 2. De wetenschap ──────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Een zenuwstelsel met de gevoeligheid op tien",
        text: "In 1996 publiceerde psycholoog Elaine Aron haar baanbrekende onderzoek naar wat zij 'Sensory Processing Sensitivity' noemde — zintuiglijke verwerkingsgevoeligheid. Haar conclusie: vijftien tot twintig procent van alle kinderen wordt geboren met een zenuwstelsel dat prikkels dieper verwerkt dan gemiddeld. Niet een beetje dieper. Fundamenteel dieper.\n\nDit is geen stoornis. Geen diagnose. Geen label. Het is een temperamentstrek die bij mensen, maar ook bij meer dan honderd andere diersoorten voorkomt. Het is een evolutionair voordeel: deze kinderen merken dingen op die anderen missen. Ze voelen nuances in sfeer, ze zien details, ze verwerken ervaringen grondig. Maar die diepe verwerking heeft een keerzijde: hun systeem raakt sneller vol.\n\nJerome Kagan, de beroemde Harvard-psycholoog die decennialang temperament bij kinderen onderzocht, identificeerde al in de jaren tachtig een groep baby's die hij 'high-reactive' noemde. Deze baby's reageerden op nieuwe prikkels met meer motorische activiteit en meer huilen — niet omdat ze zwak waren, maar omdat hun amygdala, het alarmcentrum in het brein, gevoeliger was afgesteld. Kagan volgde deze kinderen tot in de volwassenheid en ontdekte dat die gevoeligheid stabiel bleef. Ze werden geen andere mensen. Maar de omgeving bepaalde of die gevoeligheid een kracht werd of een kwetsbaarheid.\n\nEn precies daar komt het werk van Michael Pluess in beeld. Pluess ontwikkelde het concept 'vantage sensitivity' — de andere kant van de medaille. Waar onderzoekers zich jarenlang richtten op kwetsbaarheid (gevoelige kinderen hebben het moeilijker in slechte omgevingen), liet Pluess zien dat diezelfde kinderen het juist beter doen in goede omgevingen. Veel beter. Zijn onderzoek naar differentieel ontvankelijkheid laat zien dat hooggevoelige kinderen als orchideeen zijn: in een koud, hard klimaat verwelken ze. Maar in een warm, veilig klimaat bloeien ze op zoals geen ander kind dat kan.\n\nWat betekent dit voor jou als vader? Alles. Jouw rust is de bodem waarin je kind wortelt. Jouw geduld is het water. Jouw aanwezigheid — niet je oplossingen, niet je adviezen, maar je pure er-zijn — is het verschil tussen een kind dat leert dat gevoeligheid een last is en een kind dat leert dat gevoeligheid een kracht is. Je bent niet machteloos. Je bent de belangrijkste factor.",
      },
      // ── 3. Diagram ────────────────────────────────────────────────
      {
        type: "diagram" as const,
        diagramTitle: "De vijf supersintuigen van je hooggevoelige kind",
        diagramData: [
          {
            emoji: "👁️",
            label: "Zicht — alles valt op",
            description:
              "Je kind ziet de rommel op tafel, het vlekje op zijn bord, het gezicht van de juf dat net iets anders stond. Details die anderen missen, zijn voor jouw kind een constante stroom van informatie die verwerkt moet worden.",
          },
          {
            emoji: "👂",
            label: "Geluid — niets blijft ongehoord",
            description:
              "De brommende koelkast, het tikken van de verwarming, de televisie in de andere kamer. Wat voor jou achtergrondgeluid is, is voor je kind een orkest dat nooit stopt met spelen. Vooral na een drukke dag kan elk geluid de druppel zijn.",
          },
          {
            emoji: "💗",
            label: "Emotie — de sfeer voelen",
            description:
              "Je kind voelt spanning tussen jou en je partner voordat er een woord is gezegd. Het vangt stemmingen op als een antenne. Dat maakt het empathisch en zorgzaam, maar ook kwetsbaar: andermans emoties worden de zijne.",
          },
          {
            emoji: "🤚",
            label: "Fysiek — het lichaam liegt niet",
            description:
              "Labels die prikken, sokken die niet goed zitten, de verkeerde stof, temperatuurverschillen. Het is geen aanstellerij: het zenuwstelsel registreert fysieke prikkels intenser. Wat voor jou nauwelijks voelbaar is, kan voor je kind ondraaglijk zijn.",
          },
          {
            emoji: "👥",
            label: "Sociaal — elke interactie telt",
            description:
              "Een opmerking van een klasgenoot die een ander kind vergeet, draagt jouw kind de hele week mee. Groepssituaties kosten enorm veel energie omdat elk sociaal signaal wordt opgepikt en geanalyseerd. Na een feestje of schooldag is de sociale batterij leeg.",
          },
        ],
      },
      // ── 4. Voorbeeld 1: na school ─────────────────────────────────
      {
        type: "example" as const,
        situation:
          "Daan (9) komt thuis uit school. Je vraagt hoe zijn dag was. Hij bromt iets, gooit zijn tas in de hoek en loopt naar zijn kamer. Een halfuur later ontploft hij omdat zijn zusje per ongeluk zijn lego aanraakt. Tranen, schreeuwen, 'IEDEREEN DOET ALLES FOUT!' Je ziet rood en denkt: dit is nergens voor nodig.",
        wrongApproach:
          "DIRECT CORRIGEREN EN RELATIVEREN:\n\nJij: 'Ho, stop. Het is maar lego. Zo praten we niet tegen je zusje. Zeg sorry.'\nDaan schreeuwt harder. Jij, strenger: 'Als je zo doet ga je naar je kamer.'\nDaan: 'IK HEB NIKS GEDAAN!' Deur slaat dicht.\n\nWat is er gebeurd? Daan kwam thuis met een vol systeem. De hele dag geluiden, sociale druk, de juf die ongeduldig was, een conflict op het plein dat niemand zag. Zijn zenuwstelsel zat op barsten. De lego was de druppel. Jouw correctie — hoe logisch ook — was benzine op het vuur. Daan zit nu alleen op zijn kamer met twee boodschappen: mijn gevoelens zijn verkeerd, en papa snapt me niet.",
        rightApproach:
          "EERST RUIMTE, DAN CONTACT:\n\nDaan ontploft over de lego. Jij ziet het. Je ademt. Je zegt tegen zijn zusje: 'Lieverd, ga even naar de keuken, ik kom zo bij je.'\nDan naar Daan, rustig: 'Hé. Ik zie dat het te veel is.'\nStilte. Je gaat zitten. Niet te dichtbij. Je zegt niks.\nNa een minuut, zachter: 'Zware dag?'\nDaan knikt. Zijn schouders zakken.\n'Wil je even rust? Of zal ik hier blijven?'\n'Blijven.'\n\nJij blijft. Vijf minuten. Geen woorden. Geen les. Alleen aanwezigheid. Later, als het gezakt is, zeg je: 'Dat van je zusje — dat lossen we straks even op, oké?' Daan knikt. Geen strijd.",
        explanation:
          "Hooggevoelige kinderen hebben na een drukke dag decompressietijd nodig. Aron noemt dit 'het laten zakken van de prikkelemmers'. Het zenuwstelsel is overbelast en heeft geen ruimte meer om redelijk te reageren. De uitbarsting is geen slechte opvoeding en geen karakterfout — het is een overlopend systeem. Als vader is je eerste taak niet corrigeren maar reguleren: door kalm te blijven verlaag jij het stressniveau in de kamer. Dat is co-regulatie. Jouw zenuwstelsel kalmeert het zijne. De correctie over het zusje komt later, als Daan weer kan denken. En dan landt die ook.",
      },
      // ── 5. Verdieping: de rol van de vader ────────────────────────
      {
        type: "text" as const,
        heading: "Waarom juist vaders hier vaak vastlopen",
        text: "Er is iets dat veel vaders van hooggevoelige kinderen herkennen maar zelden hardop zeggen: een deel van je vindt het moeilijk. Niet het kind. Niet de liefde. Maar de gevoeligheid zelf.\n\nVeel mannen zijn opgegroeid met een onuitgesproken regel: gevoeligheid is zwakte. 'Stel je niet aan.' 'Huilen is voor meiden.' 'Trek je er niks van aan.' Misschien hoorde je het van je eigen vader, misschien van de sportcoach, misschien zei niemand het maar hing het in de lucht. En nu heb je een kind dat alles voelt, alles opmerkt, dat huilt om een label in een shirt of een blik van een klasgenoot — en diep vanbinnen schuurt er iets.\n\nDat schuren is geen slechtheid. Het is je eigen opvoeding die botst met wat je kind nodig heeft. En het is een van de belangrijkste momenten in je vaderschap: de keuze om het anders te doen dan het aan jou is meegegeven.\n\nOnderzoek van Pluess en Belsky laat zien dat de kwaliteit van de ouder-kindrelatie bij hooggevoelige kinderen twee tot drie keer zoveel impact heeft als bij niet-hooggevoelige kinderen. Dat betekent: waar een gemiddeld kind prima gedijt met een 'goed genoeg'-opvoeding, heeft een hooggevoelig kind meer baat bij — maar ook meer last van — hoe jij je als vader opstelt. Je invloed is letterlijk groter.\n\nDit is geen druk. Dit is een kans. Elke keer dat je de neiging onderdrukt om te zeggen 'stel je niet aan' en in plaats daarvan zegt 'ik zie dat dit moeilijk voor je is,' herschrijf je een patroon. Niet alleen voor je kind, maar ook voor jezelf. Je leert je kind dat gevoeligheid geen probleem is. En misschien, tussen de regels door, leer je dat ook over de jongen die je ooit was.\n\nDat vraagt moed. Niet de stoere moed van doordrukken. De stille moed van erbij blijven als het ongemakkelijk wordt. Van je kind laten huilen zonder het te fiksen. Van erkennen dat je niet altijd weet wat je moet doen — en er toch zijn.",
      },
      // ── 6. Voorbeeld 2: het feestje ───────────────────────────────
      {
        type: "example" as const,
        situation:
          "Lotte (7) is uitgenodigd voor het verjaardagsfeestje van haar vriendinnetje. De ochtend van het feestje zegt ze: 'Ik wil niet.' Je hebt al een cadeau gekocht. Haar vriendinnetje verwacht haar. Je partner kijkt je aan: doe jij dit even?",
        wrongApproach:
          "OVERTUIGEN EN DUWEN:\n\nJij: 'Maar je vindt Nina toch leuk? Het wordt hartstikke gezellig.'\nLotte: 'Ik wil niet. Er zijn te veel kinderen.'\nJij: 'Hoe weet je dat nou, je bent er nog niet eens geweest. We gaan gewoon even kijken. Als je het niet leuk vindt, haal ik je op.'\nEenmaal in de auto huilt Lotte. Bij de voordeur klampt ze zich aan je been vast. Jij maakt haar vingers los, geeft haar een duwtje naar binnen. 'Het komt goed, je bent een grote meid.'\n\nDrie uur later haal je een kind op dat niet meer praat. Die avond en de dag erna is ze onhandelbaar. Je hebt haar door een muur van stress heen geduwd waar ze niet doorheen kon.",
        rightApproach:
          "SAMEN EEN PLAN MAKEN:\n\nLotte zegt: 'Ik wil niet.'\nJij: 'Oké. Vertel eens — wat maakt je bang?'\n'Er zijn veel kinderen. En het is zo druk.'\n'Dat snap ik. Druk is moeilijk voor jou. Zullen we kijken wat we kunnen doen?'\n\nJullie maken samen een plan. Lotte gaat een halfuur later, als het rustigste deel van het programma bezig is. Jij brengt haar en blijft in de buurt — niet bij het feest, maar bereikbaar. Jullie spreken een signaal af: als ze haar hand op haar buik legt, weet jij dat het te veel wordt en kom je haar halen.\n\nOp het feest gaat het. Niet makkelijk, maar het gaat. Na anderhalf uur legt ze haar hand op haar buik. Jij bent er binnen twee minuten. In de auto zegt ze: 'Het was best leuk. Maar ik ben moe.'\n\nDat is een overwinning. Niet het voltooien van het feestje — maar het vertrouwen dat ze kon vertrekken wanneer het nodig was.",
        explanation:
          "Een hooggevoelig kind dwingt om te gaan naar een prikkelrijke omgeving leert het kind twee dingen: mijn gevoel telt niet, en de buitenwereld is onveilig. Aron benadrukt het belang van 'gentle exposure' — geleidelijke blootstelling met een veilige basis. Het kind heeft een anker nodig: de zekerheid dat het weg mag als het te veel wordt. Dat anker ben jij. Door samen een plan te maken geef je je kind regie. En regie is het tegengif voor overweldiging. Het kind leert: de wereld is soms te veel, maar ik heb hulp, ik heb een plan, en papa is er.",
      },
      // ── 7. Toolkit ────────────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Je gereedschapskist: omgaan met hooggevoeligheid",
        text: "1. Decompressietijd na school. De eerste dertig tot zestig minuten na school zijn geen moment voor vragen, huiswerk of sociale plannen. Je kind heeft tijd nodig om de prikkels van de dag te laten zakken. Maak er een ritueel van: een rustige plek, een snack, geen vragen. 'Hoe was het op school?' kan om vijf uur. Of het komt vanzelf. De meeste hooggevoelige kinderen gaan praten als de druk eraf is, niet als je erom vraagt.\n\n2. De prikkeltoolkit. Onderzoek samen wat je kind helpt als het te veel wordt. Noise-cancelling koptelefoons voor drukke situaties. Een fidget toy voor momenten van spanning. Een knuffeldier dat mee mag naar nieuwe plekken. Een klein flesje met vertrouwde geur. Dit zijn geen verwennerij — het zijn hulpmiddelen voor een zenuwstelsel dat harder werkt dan gemiddeld. Laat je kind meekiezen. Als het zelf meebeslist, werkt het beter.\n\n3. Herken de overprikkeling voor de uitbarsting. Elk hooggevoelig kind heeft signalen voordat het te veel wordt: rode oren, stil worden, druk worden, friemelen, oogcontact vermijden, snauwen over kleine dingen. Leer de signalen van jouw kind kennen. Als je ze herkent, kun je ingrijpen voordat het escaleert. 'Ik zie dat het veel is. Zullen we even naar buiten?' Dat ene zinnetje voorkomt een halfuur crisis.\n\n4. Het rust-anker thuis. Maak een plek in huis die heilig is. Niet de strafhoek — het tegenovergestelde. Een hoekje met kussens, een zachte lamp, misschien een gewichtsdeken. Een plek waar je kind naartoe kan als de wereld te luid is. Zonder uitleg, zonder toestemming. 'Dit is jouw rustige plek. Altijd.' Het geeft een gevoel van controle in een wereld die overweldigend kan zijn.\n\n5. Pas verwachtingen aan op drukke dagen. Sinterklaas, verjaardagen, vakanties, familiebezoek — hooggevoelige kinderen houden van het idee maar worden overspoeld door de werkelijkheid. Plan pauzes in. Ga eerder weg als het nodig is. Bespreek van tevoren wat er gaat gebeuren. En accepteer dat je kind misschien maar de helft van het feest meemaakt — en dat dat helemaal goed is.\n\n6. Word het voorbeeld. Dit is misschien het belangrijkste: laat zien dat rust zoeken normaal is. 'Papa heeft ook even een rustig momentje nodig.' Als jij laat zien dat het oké is om te voelen en te reguleren, leert je kind dat gevoeligheid geen zwakte is maar iets om goed mee om te gaan. Jij bent het levende bewijs.",
      },
      // ── 8. Oefening ───────────────────────────────────────────────
      {
        type: "exercise" as const,
        title: "Het Stille Half Uur",
        instructions:
          "Deze week ga je elke dag een stil half uur creeren met je kind. Geen schermen, geen huiswerk, geen eisen. Alleen aanwezigheid.\n\n1. Kies een vast moment. Het beste moment is na school of voor het slapengaan — momenten waarop het zenuwstelsel van je kind al op zijn grenzen zit. Houd het elke dag op dezelfde tijd, zodat je kind erop kan rekenen.\n\n2. Laat je kind leiden. Misschien wil het tekenen, misschien lego bouwen, misschien gewoon naast je liggen. Misschien wil het niks en zit het te staren. Dat is goed. Het enige wat jij doet is er zijn. Geen telefoon, geen tv op de achtergrond, geen 'zullen we...'\n\n3. Wees stil. Niet oncomfortabel stil — ontspannen stil. Als je kind praat, luister je. Als het stil is, ben je stil. Je hoeft niks te doen, niks op te lossen, niks te organiseren. Dit gaat over nabijheid zonder druk.\n\n4. Observeer. Let op wat er gebeurt. Wordt je kind rustiger? Begint het na tien minuten opeens te praten? Zoekt het lichamelijk contact? Of heeft het juist ruimte nodig? Elk kind reageert anders. Leer wat jouw kind nodig heeft in de stilte.\n\n5. Sluit bewust af. Na het half uur zeg je: 'Ik vond het fijn om bij je te zijn.' Dat is alles. Geen evaluatie, geen vragen over gevoelens. Gewoon een warme afsluiting.\n\nDoe dit zeven dagen. Schrijf elke avond in een zin op wat je opviel. Na een week kijk je terug: wat is er veranderd?",
        duration: 10,
        tips: [
          "Het kan zijn dat je kind de eerste dagen onrustig of wantrouwig reageert — het is niet gewend aan aanwezigheid zonder agenda. Geef het drie dagen voordat je conclusies trekt.",
          "Als je merkt dat het stil zijn moeilijk is voor jou, is dat waardevolle informatie. Misschien heb jij ook moeite met prikkelvrije ruimte. Dat is niet erg — het is iets om te onderzoeken.",
          "Dit werkt ook als je kind tiener is. Het half uur ziet er dan anders uit — misschien samen in de kamer zitten terwijl je kind muziek luistert — maar het principe is hetzelfde: ik ben hier, zonder voorwaarden.",
        ],
      },
      // ── 9. Reflectie ──────────────────────────────────────────────
      {
        type: "reflection" as const,
        questions: [
          "Wees eerlijk: heb je weleens gedacht of gezegd 'stel je niet aan' of 'het valt toch wel mee' tegen je kind? Wat denk je dat je kind op dat moment voelde — en wat leerde het over zichzelf?",
          "Herken je iets van de hooggevoeligheid van je kind in jezelf? Of juist helemaal niet — en maakt dat het moeilijker om het te begrijpen? Hoe heeft jouw eigen opvoeding je kijk op gevoeligheid gevormd?",
        ],
      },
      // ── 10. Samenvatting ──────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Samenvatting",
        text: "Hooggevoeligheid is geen probleem dat je oplost. Het is een eigenschap die je begrijpt, respecteert en waar je als vader mee leert omgaan. Vijftien tot twintig procent van alle kinderen heeft een zenuwstelsel dat prikkels dieper verwerkt — dat maakt ze opmerkzaam, empathisch en creatief, maar ook sneller overprikkeld.\n\nJouw rol als vader is niet om de wereld stiller te maken. Het is om het anker te zijn waarnaar je kind terugkeert als het te luid wordt. Door aanwezig te zijn — echt aanwezig, kalm, zonder oordeel — geef je je kind de boodschap: jij bent goed zoals je bent. Je gevoeligheid is geen zwakte. En ik ben er.\n\nHet onderzoek van Pluess laat zien dat juist gevoelige kinderen het meest profiteren van een warme, veilige omgeving. Jouw geduld en rust zijn niet zomaar fijn — ze zijn de voedingsbodem waarin je kind leert bloeien. Een stil half uur. Een rustige plek. Een vader die erbij blijft als het moeilijk wordt. Dat is alles. En dat is genoeg.",
      },
    ],
    keyTakeaways: [
      "Hooggevoeligheid is geen stoornis maar een temperamentstrek bij 15-20% van alle kinderen — hun zenuwstelsel verwerkt alles dieper, wat ze zowel kwetsbaarder als ontvankelijker maakt voor jouw invloed",
      "Jouw kalmte is het krachtigste instrument dat je hebt: door zelf rustig te blijven reguleer je het zenuwstelsel van je kind mee (co-regulatie), en dat werkt beter dan elke correctie",
      "Herken overprikkeling voor de uitbarsting, bouw decompressietijd in na school, en creeer een rust-anker thuis — niet als verwennerij maar als noodzaak voor een systeem dat harder werkt dan gemiddeld",
    ],
    research:
      "Aron, E.N. (2002). The Highly Sensitive Child; Aron, E.N. & Aron, A. (1997). Sensory-processing sensitivity and its relation to introversion and emotionality. Journal of Personality and Social Psychology; Pluess, M. & Belsky, J. (2013). Vantage sensitivity: Individual differences in response to positive experiences. Psychological Bulletin; Kagan, J. (1994). Galen's Prophecy: Temperament in Human Nature; Kagan, J. & Snidman, N. (2004). The Long Shadow of Temperament; Boyce, W.T. (2019). The Orchid and the Dandelion: Why Some Children Struggle and How All Can Thrive",
  },
];
