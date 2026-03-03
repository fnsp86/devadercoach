import type { Skill, HelpAgeGroup, HelpSituation, ThemeTag } from "./types";
import { BONUSKIND_HELP, GEDRAG_HELP, HOOGGEVOELIG_HELP } from './help-themed';

export const HELP_SITUATIONS: HelpSituation[] = [
  // ═══════════════════════════════════════════════════════════════
  // 0-3 JAAR (25 situaties)
  // ═══════════════════════════════════════════════════════════════
  
  {
    id: "peuter-driftbui-supermarkt",
    ageGroup: "0-3",
    situatie: "Driftbui in supermarkt",
    icon: "🛒",
    watSpeeltInKind: "Enorme overprikkeling (licht, geluid, mensen), te veel keuzes, en beperkte zelfregulatie. De prefrontale cortex is nauwelijks ontwikkeld. Kind kan letterlijk niet reguleren.",
    watSpeeltInVader: "Schaamte en machteloosheid. Angst voor oordeel van anderen. Eigen stress wordt geactiveerd door sociale druk.",
    psychologie: "Co-regulatie is de enige optie bij peuters. Straffen werkt niet - het brein is niet ontwikkeld genoeg om de link te maken. Jouw rust is hun rust.",
    stappen: [
      "Rustig blijven, niet proberen te reddeneren. Til kind op of ga op kniehoogte.",
      "Zeg kort: 'Je bent overweldigd. We gaan naar buiten/rustig plekje.'",
      "Bescherm tegen gevaar, maar laat emotie zijn. Geen uitleg nu, later kort benoemen."
    ],
    voorbeeldzin: "Wow, dat is veel gevoel. Mama/papa is hier. Je bent veilig.",
    valkuil: "Proberen te redeneren of moreel lesje geven tijdens de bui - het werkt niet en escaleert.",
    skillLink: "Emotiecoaching"
  },

  {
    id: "peuter-niet-naar-bed",
    ageGroup: "0-3",
    situatie: "Niet naar bed willen",
    icon: "🛏️",
    watSpeeltInKind: "Scheidingsangst (verlaten worden), geen besef van tijd, FOMO (angst om iets te missen). Dag/nacht ritme nog niet volledig ontwikkeld.",
    watSpeeltInVader: "Vermoeidheid en wanhoop. Behoefte aan eigen tijd. Frustratie dat ritme verstoord wordt.",
    psychologie: "Consistentie is essentieel. Circadiaans ritme wordt gevormd door voorspelbare rituelen. Zekerheid creëert veiligheid.",
    stappen: [
      "Vast ritueel: zelfde volgorde, zelfde tijd (±15 min). Dim licht, rustige activiteit.",
      "Bij protest: rustig herhalen 'Het is slaaptijd'. Terug naar bed, geen gesprek.",
      "Extra knuffel/lied, maar daarna consequent. Blijf rustig ook bij herhaling."
    ],
    voorbeeldzin: "Ik weet dat je niet wilt slapen. Het is slap tijd. Morgen spelen we weer.",
    valkuil: "Elke avond nieuwe ritueel proberen of toegeven uit vermoeidheid - inconsistency verlengt het.",
    skillLink: "Grenzen"
  },

  {
    id: "peuter-eten-weigeren",
    ageGroup: "0-3",
    situatie: "Eten weigeren",
    icon: "🍽️",
    watSpeeltInKind: "Autonomie ontdekken ('ik' vs 'jij'). Textuur gevoeligheid. Geen honger of te moe. Autonomie oefenen door 'nee' zeggen.",
    watSpeeltInVader: "Zorgen over voeding/gezondheid. Frustratie (ik heb dit gemaakt!). Machteloosheid.",
    psychologie: "Verdeling van verantwoordelijkheid: jij bepaalt WAT en WANNEER, kind bepaalt HOEVEEL. Dwingen creëert negatieve eetassociatie.",
    stappen: [
      "Bied aan zonder druk. 'Dit is er. Je hoeft niet als je niet wilt.'",
      "Blijf zelf rustig eten. Model gedrag maar forceer niet.",
      "Na 20-30 min opruimen zonder drama. Volgende maaltijd komt."
    ],
    voorbeeldzin: "Ik zie dat je niet wilt eten. Dat mag. Zo dadelijk ruim ik op.",
    valkuil: "Smeken, dwingen, of alternatief aanbieden - creëert machtsstrijd en bevestigt dat weigeren werkt.",
    skillLink: "Autonomie"
  },

  {
    id: "peuter-luier-verzet",
    ageGroup: "0-3",
    situatie: "Verzet bij luier verschonen",
    icon: "👶",
    watSpeeltInKind: "Onderbreking van spel (waarom stoppen als het leuk is?). Geen begrip van hygiëne. Ongemak van liggen.",
    watSpeeltInVader: "Frustratie (dit MOET nu). Tijdsdruk. Soms walging van luier.",
    psychologie: "Autonomie en controle zijn grote thema's bij peuters. Keuze geven binnen grenzen helpt.",
    stappen: [
      "Aankondiging: 'Over 2 minuten gaan we luier verschonen.' Timer kan helpen.",
      "Keuze: 'Wil je staand of liggend? Deze of die luier?'",
      "Bij verzet: rustig volhouden. Afleiden met liedje/speeltje tijdens."
    ],
    voorbeeldzin: "Ik weet dat je wilt spelen. Eerst schone luier, dan weer spelen.",
    valkuil: "Fysiek forceren zonder warming-up of keuze - veroorzaakt verzet en huilen.",
    skillLink: "Autonomie"
  },

  {
    id: "peuter-kleding-gevecht",
    ageGroup: "0-3",
    situatie: "Kleding aantrekken verzet",
    icon: "👕",
    watSpeeltInKind: "'Ik kan het zelf!' drang vs nog niet kunnen. Textuur van kleding. Controle willen.",
    watSpeeltInVader: "Tijdsdruk (we moeten weg!). Frustratie dat simpele taak zo moeilijk is.",
    psychologie: "Autonomie vs competentie clash. Kind wil zelf maar kan nog niet. Geforceerde hulp ondermijnt zelfbeeld.",
    stappen: [
      "Start ruim op tijd (15 min extra). Elimineer tijdsdruk.",
      "Keuze: 'Deze trui of die?' Laat kind proberen zelf te doen.",
      "Help alleen als gevraagd of na poging. 'Zal ik helpen met dit moeilijke stuk?'"
    ],
    voorbeeldzin: "Jij wilt het zelf! Probeer maar. Als het niet lukt, help ik.",
    valkuil: "Uit frustratie overnemen - kind voelt faal en verlies van controle.",
    skillLink: "Autonomie"
  },

  {
    id: "peuter-niet-delen",
    ageGroup: "0-3",
    situatie: "Speelgoed niet willen delen",
    icon: "🧸",
    watSpeeltInKind: "Geen mentaliserend vermogen (kan zich niet inleven). Object permanentie leren: als iemand het pakt = het is weg = paniek.",
    watSpeeltInVader: "Schaamte ('mijn kind is egoïstisch'). Druk om sociaal acceptabel gedrag.",
    psychologie: "Delen is een hoogontwikkelde sociale vaardigheid die rond 4-5j ontstaat. Bij peuters is 'bezit' absolute realiteit.",
    stappen: [
      "Valideer: 'Je speelt hiermee. Dat mag.'",
      "Niet forceren delen. Wel modelleren: 'Kijk, ik geef jou dit.'",
      "Oudere kinderen kunnen wachten - timer gebruiken voor beurten."
    ],
    voorbeeldzin: "Dit is jouw speeltje nu. Jij bepaalt wanneer ander mag.",
    valkuil: "Forceren delen 'om sociaal te leren' - werkt averechts en creëert angst om spullen te verliezen.",
    skillLink: "Emotiecoaching"
  },

  {
    id: "peuter-bijten-slaan",
    ageGroup: "0-3",
    situatie: "Bijten of slaan andere kinderen",
    icon: "😠",
    watSpeeltInKind: "Beperkte taal, dus fysiek uiten van frustratie/grenzen. Oorzaak-gevolg nog niet snappen. Impulscontrole = zero.",
    watSpeeltInVader: "Schaamte en paniek ('Is mijn kind agressief?'). Angst voor oordeel andere ouders.",
    psychologie: "Dit is normaal ontwikkelingsgedrag, geen karakter. Impulscontrole komt pas later. Consequent ingrijpen zonder drama.",
    stappen: [
      "Direct maar kalm stoppen: neem fysiek mee. 'Bijten doet pijn. Niet doen.'",
      "Troost ander kind eerst. Model empathie.",
      "Kort time-out (1-2 min), daarna terug. Leer woorden: 'Zeg: stop!'"
    ],
    voorbeeldzin: "Bijten doet pijn. Als je boos bent, zeg: 'Stop!' of kom naar mij.",
    valkuil: "Terugbijten 'om te laten voelen' - traumatiserend en leert geweld.",
    skillLink: "Grenzen"
  },

  {
    id: "peuter-nachtmerries",
    ageGroup: "0-3",
    situatie: "Schreeuwend wakker worden",
    icon: "😱",
    watSpeeltInKind: "Nachtmerries of nachtangst. Overgang slaapcyclus. Kan droom niet van realiteit onderscheiden.",
    watSpeeltInVader: "Schrik en bezorgdheid. Vermoeidheid (weer wakker!). Machteloosheid.",
    psychologie: "Nachtangst vs nachtmerrie: bij nachtangst (1-4j) is kind niet echt wakker, troost werkt niet. Bij nachtmerrie wel.",
    stappen: [
      "Ga direct. Check of kind wakker is of nog slaapt (nachtangst).",
      "Als wakker: geruststelling. 'Je bent veilig. Het was een droom.'",
      "Blijf tot rustig. Nachtlampje kan helpen. Consistent reageren."
    ],
    voorbeeldzin: "Ik ben er. Je bent veilig. Het was maar een droom.",
    valkuil: "Bij nachtangst proberen wakker te maken - verleng de episode.",
    skillLink: "Aanwezigheid"
  },

  {
    id: "peuter-vreemden-angst",
    ageGroup: "0-3",
    situatie: "Bang voor vreemden",
    icon: "👤",
    watSpeeltInKind: "Vreemdelingangst (8-14 maanden) is gezonde ontwikkelingsfase. Gehechtheid met jou is gevormd, nieuwe mensen = onzeker.",
    watSpeeltInVader: "Gêne bij familie ('Hij is altijd zo verlegen!'). Frustratie dat kind niet sociaal is.",
    psychologie: "Dit is een gezonde gehechtheidsfase. Forceren ondermijnt veiligheid. Kind bepaalt tempo van contact.",
    stappen: [
      "Valideer angst: 'Nieuwe mensen zijn spannend. Dat mag.'",
      "Blijf veilige basis. Laat kind op eigen tempo warm worden.",
      "Vraag anderen afstand te houden. Geen forceren ('Geef oma een kus!')."
    ],
    voorbeeldzin: "Je kent deze meneer nog niet. Dat is spannend. Blijf maar bij mij.",
    valkuil: "Forceren contact 'om sociaal te worden' - verergert angst en schaadt vertrouwen.",
    skillLink: "Aanwezigheid"
  },

  {
    id: "peuter-klampgedrag",
    ageGroup: "0-3",
    situatie: "Vastklampen aan ouder",
    icon: "🤱",
    watSpeeltInKind: "Separatieangst. Onzekerheid over terugkomen van ouder (object permanentie nog ontwikkelend). Veilige basis nodig.",
    watSpeeltInVader: "Guilty en vermoeid. Wens voor zelfstandiger kind. Mogelijk ook gewaardeerd voelen.",
    psychologie: "Veilige gehechtheid creëer je door CONSISTENTE beschikbaarheid, niet door afstand forceren. Veiligheid eerst, zelfstandigheid volgt.",
    stappen: [
      "Accepteer behoefte. 'Je wilt bij mij zijn. Dat is oké.'",
      "Korte separaties oefenen met voorspelling: 'Mama komt terug na...'",
      "Consequent terugkomen! Dit bouwt vertrouwen dat je terugkomt."
    ],
    voorbeeldzin: "Je wilt bij mij zijn. Ik ga nergens heen. Ik ben hier.",
    valkuil: "Stiekem wegsluipen 'om huilen te voorkomen' - veroorzaakt juist meer angst en wantrouwen.",
    skillLink: "Verbinding"
  },

  {
    id: "peuter-potje-verzet",
    ageGroup: "0-3",
    situatie: "Potjestraining verzet",
    icon: "🚽",
    watSpeeltInKind: "Controle over eigen lijf ontdekken. Geen urgentiebesef ontwikkeld. Angst voor toilet (groot, geluid).",
    watSpeeltInVader: "Sociale druk ('Andere kinderen kunnen het al!'). Vermoeidheid van verschonen. Deadline angst (school).",
    psychologie: "Bereidheid is fysiologisch EN emotioneel. Forceren vertraagt proces en creëert negatieve associatie met toilet.",
    stappen: [
      "Check bereidheid: kan kind 2 uur droog blijven? Toont interesse?",
      "Laat kind leiden. Positieve association: boek lezen op potje, stickers.",
      "Bij ongeluk: rustig verschonen zonder blame. 'Volgende keer op potje proberen.'"
    ],
    voorbeeldzin: "Wil je het potje proberen? Als het lukt, top! Als niet, proberen we later.",
    valkuil: "Straffen of shamen bij ongeluk - creëert angst en vertraging.",
    skillLink: "Autonomie"
  },

  {
    id: "peuter-frustatie-uitbarsting",
    ageGroup: "0-3",
    situatie: "Driftbui bij frustratie (niet kunnen)",
    icon: "💥",
    watSpeeltInKind: "Enorme kloof tussen willen en kunnen. Geen woorden om frustratie te uiten. Overprikkeling van mislukking.",
    watSpeeltInVader: "Impuls om te helpen of op te lossen. Frustratie ('Waarom zo dramatisch?').",
    psychologie: "Frustratie tolerance is trainbaar maar kost jaren. Te snel helpen = gemiste leerkans. Teveel frustratie = overload.",
    stappen: [
      "Valideer: 'Dat is moeilijk! Je wilt het zo graag!'",
      "Vraag: 'Wil je zelf blijven proberen of wil je dat ik help?'",
      "Bij overload: pauze. 'We proberen straks weer.'"
    ],
    voorbeeldzin: "Ik zie dat dit lastig is. Wil je hulp of wil je het zelf?",
    valkuil: "Direct overnemen - kind leert niet volhouden. Of teveel laten worstelen - overload.",
    skillLink: "Zelfregulatie"
  },

  {
    id: "peuter-tafelbij-verzet",
    ageGroup: "0-3",
    situatie: "Niet willen zitten bij eten",
    icon: "🍽️",
    watSpeeltInKind: "Energieniveau van peuter vs stilzitten = conflict. Geen honger. Spel is interessanter.",
    watSpeeltInVader: "Zorgen over voeding. Frustratie ('We eten samen!'). Tijdsdruk.",
    psychologie: "Peuters hebben korte attention span. Gezamenlijke maaltijd is sociaal ideaal maar niet altijd haalbaar.",
    stappen: [
      "Realistisch: 10-15 min zitten is max voor peuter.",
      "Betrekken bij voorbereiden. Zelf uitscheppen geeft ownership.",
      "Als klaar: 'Je mag gaan' (zonder dessert als niet gegeten). Geen drama."
    ],
    voorbeeldzin: "Je hebt genoeg gegeten. Je mag spelen. Tafel blijft nog even staan.",
    valkuil: "Dwingen blijven zitten - machtsstrijd en negatieve eetassociatie.",
    skillLink: "Grenzen"
  },

  {
    id: "peuter-vroeg-wakker",
    ageGroup: "0-3",
    situatie: "Te vroeg wakker worden",
    icon: "🌅",
    watSpeeltInKind: "Biologische klok nog niet gereguleerd. Daglicht wekt op. Honger. Gewoonte.",
    watSpeeltInVader: "Chronische vermoeidheid. Frustratie (kan niet uitslapen). Impact op partnerschap.",
    psychologie: "Circadiaans ritme wordt beïnvloed door licht, routine en consistentie. Graduele shift mogelijk.",
    stappen: [
      "Verduisterende gordijnen. Geen schermen 2u voor bed.",
      "'Slaapclock' die aangeeft wanneer mag opstaan (7:00 bijvoorbeeld).",
      "Consistent niet uit bed halen voor die tijd. Rustig spelen in bed mag."
    ],
    voorbeeldzin: "Het is nog niet ochtend. Klokje is nog niet groen. Nog even rustig in bed.",
    valkuil: "Inconsistent reageren - soms wel ophalen soms niet. Verward het patroon.",
    skillLink: "Grenzen"
  },

  {
    id: "peuter-wegbrengen-huilen",
    ageGroup: "0-3",
    situatie: "Huilen bij wegbrengen opvang",
    icon: "😢",
    watSpeeltInKind: "Separatieangst. Onzekerheid over terugkomen. Nieuwe omgeving = stress ook al is het bekend.",
    watSpeeltInVader: "Schuldgevoel en verdriet. Twijfel (doe ik het wel goed?). Haast (moet naar werk).",
    psychologie: "Korte afscheid is beter dan lange. Consistent ritueel creëert voorspelbaarheid. Meeste kinderen kalmeren binnen 5 min na vertrek.",
    stappen: [
      "Kort afscheid ritueel: knuffel, zoen, 'tot straks!'",
      "Niet terugkomen! Weggaan ook als kind huilt.",
      "Vertrouwen in opvang. Vraag hoe lang kind huilde (meestal kort)."
    ],
    voorbeeldzin: "Ik ga werken. Juf [naam] past op je. Ik kom je ophalen na... Tot straks!",
    valkuil: "Te lang blijven of terugkomen bij huilen - verlengt en bevestigt angst.",
    skillLink: "Verbinding"
  },

  {
    id: "peuter-alles-zelf",
    ageGroup: "0-3",
    situatie: "Alles zelf willen doen",
    icon: "✋",
    watSpeeltInKind: "Autonomie ontwikkeling. 'Ik' ontdekking. Wilskracht testen. Competentie oefenen.",
    watSpeeltInVader: "Tijdsdruk (dit duurt te lang!). Frustratie (ik kan het sneller). Bezorgdheid bij gevaar.",
    psychologie: "Kritische fase voor zelfvertrouwen. Te veel overnemen = learned helplessness. Laat proberen binnen veilige grenzen.",
    stappen: [
      "Tijd inplannen. Elimineer haast waar mogelijk.",
      "Zeg 'Probeer maar!' bij veilige taken. Sta erbij bij risicovolle.",
      "Vier pogingen, niet alleen resultaat. 'Je hebt hard geprobeerd!'"
    ],
    voorbeeldzin: "Jij wilt het zelf! Ga je gang. Ik kijk hoe je het doet.",
    valkuil: "Overnemen uit tijdsdruk - ondermijnt zelfvertrouwen en creëert afhankelijkheid.",
    skillLink: "Autonomie"
  },

  {
    id: "peuter-gevaar-pakken",
    ageGroup: "0-3",
    situatie: "Gevaarlijke dingen pakken/aanraken",
    icon: "⚠️",
    watSpeeltInKind: "Geen gevaarsbegrip. Nieuwsgierigheid is dominant. Oorzaak-gevolg niet snappen.",
    watSpeeltInVader: "Angst en stress. Constante alertheid = uitputting. Frustratie dat kind 'niet leert'.",
    psychologie: "Gevaarsbegrip ontwikkelt rond 3-4j. Voor die tijd: elimineer gevaar fysiek, niet via instructie. Child-proof your home.",
    stappen: [
      "Fysiek wegNEMEN wat gevaarlijk is. Huis peuter-proof maken.",
      "Korte uitleg: 'Heet! Au!' maar verwacht geen begrip.",
      "Herhaling is normaal. Supervisie blijft nodig."
    ],
    voorbeeldzin: "Dit is gevaarlijk. Niet aanraken. Kom, we kijken naar dit!",
    valkuil: "Boos worden alsof kind opzettelijk gevaarlijk doet - het is ontwikkelingsfase.",
    skillLink: "Grenzen"
  },

  {
    id: "peuter-nee-negeren",
    ageGroup: "0-3",
    situatie: "Luistert niet naar 'nee'",
    icon: "🚫",
    watSpeeltInKind: "Impulscontrole niet ontwikkeld. 'Nee' triggert soms juist interesse. Geen consequentiebesef.",
    watSpeeltInVader: "Frustratie ('Waarom luistert hij niet?!'). Machteloosheid. Twijfel aan opvoeding.",
    psychologie: "Pre-frontaal cortex ontwikkelt tot 25j. Bij peuter is impulscontrole minimaal. Fysieke interventie > verbale instructie.",
    stappen: [
      "Zeg 'nee' + fysiek redirecten. Woorden + actie samen.",
      "Alternatief bieden: 'Niet dat, wel dit.'",
      "Consistent blijven. Herhaling = normaal. Verwacht geen lange termijn geheugen."
    ],
    voorbeeldzin: "Nee, niet aanraken. Kijk, DIT mag je wel!",
    valkuil: "Alleen 'nee' roepen zonder actie - kind leert dat woorden geen consequenties hebben.",
    skillLink: "Grenzen"
  },

  {
    id: "peuter-auto-onrust",
    ageGroup: "0-3",
    situatie: "Onrustig in auto/buggy",
    icon: "🚗",
    watSpeeltInKind: "Bewegingsbehoefte vs vastzitten = conflict. Geen geduld. Verveling.",
    watSpeeltInVader: "Stress (rijden + kind sussen). Vermoeidheid. Schaamte bij openbaar vervoer.",
    psychologie: "Beperkte frustratie tolerance. Afleiden werkt beter dan redeneren. Voorbereiding helpt.",
    stappen: [
      "Voorbereiden: 'We gaan in de auto. Dan krijg je...[speeltje/muziek]'",
      "Afleiden tijdens: liedjes, spelletjes ('Ik zie ik zie'), snacks.",
      "Pauzes inplannen bij lange ritten. Beweging = nodig."
    ],
    voorbeeldzin: "Ik weet dat je niet stil wilt zitten. Nog 5 minuten, dan zijn we er.",
    valkuil: "Schermen gebruiken als standaard - creëert afhankelijkheid en overprikkeling.",
    skillLink: "Zelfregulatie"
  },

  {
    id: "peuter-harde-geluiden",
    ageGroup: "0-3",
    situatie: "Bang voor harde geluiden",
    icon: "🔊",
    watSpeeltInKind: "Auditieve overgevoeligheid is normaal. Schrikreactie nog niet gereguleerd. Kan angst niet contextualiseren.",
    watSpeeltInVader: "Bezorgdheid (is er iets mis?). Frustratie bij dagelijkse geluiden (stofzuiger). Handelingsverlegenheid.",
    psychologie: "Sensory processing ontwikkelt. Exposure met veiligheid helpt. Valideren zonder vermijden.",
    stappen: [
      "Valideer: 'Dat is hard. Dat schrikt.'",
      "Beschermen maar niet vermijden. Oren dichtHOUDEN samen tijdens geluid.",
      "Graduele exposure: eerst op afstand, dan dichterbij. Jouw rust helpt."
    ],
    voorbeeldzin: "De stofzuiger is hard. Spannend! Kom bij mij, dan doen we het samen.",
    valkuil: "Compleet vermijden van geluiden - bevestigt angst en beperkt leven.",
    skillLink: "Emotiecoaching"
  },

  {
    id: "peuter-bezoek-klampen",
    ageGroup: "0-3",
    situatie: "Klampgedrag bij bezoek",
    icon: "👥",
    watSpeeltInKind: "Nieuwe mensen = onzekerheid. Veilige basis (jij) nodig. Social referencing: kind checkt of jij signaleert veiligheid.",
    watSpeeltInVader: "Gêne ('Hij doet normaal nooit zo!'). Druk om sociaal kind te tonen. Moeite met gastvrij zijn.",
    psychologie: "Dit is gezond gehechtheidsgedrag. Jouw acceptatie creëert veiligheid om later te verkennen.",
    stappen: [
      "Accepteer: 'Je vindt dit spannend. Blijf maar bij mij.'",
      "Laat kind tempo bepalen. Geen forceren contact.",
      "Leg uit aan bezoek: 'Hij heeft even tijd nodig.'"
    ],
    voorbeeldzin: "Nieuwe mensen zijn spannend. Blijf maar lekker bij mij tot je klaar bent.",
    valkuil: "Shamen ('Doe niet zo raar!') of forceren contact - ondermijnt veiligheid.",
    skillLink: "Aanwezigheid"
  },

  {
    id: "peuter-eten-gooien",
    ageGroup: "0-3",
    situatie: "Gooien met eten",
    icon: "🍕",
    watSpeeltInKind: "Oorzaak-gevolg experiment (wat gebeurt er?). Geen tafelmanieren concept. Speelsheid vs eet serieus.",
    watSpeeltInVader: "Frustratie en walging. Verspilling. Schaamte (wat denken anderen?).",
    psychologie: "Dit is exploratie, geen provocatie. Grenzen stellen zonder boosheid. Consequent blijven.",
    stappen: [
      "Stop direct: 'Eten blijft op tafel. Gooien = klaar met eten.'",
      "Eén waarschuwing, dan consequent: eten weg, uit stoel.",
      "Rustig opruimen samen. Geen groot drama."
    ],
    voorbeeldzin: "Eten is om te eten, niet om te gooien. Als je gooit, ben je klaar.",
    valkuil: "Lachen of inconsistent reageren - kind leert dat gooien aandacht/reactie oplevert.",
    skillLink: "Grenzen"
  },

  {
    id: "peuter-verzorging-verzet",
    ageGroup: "0-3",
    situatie: "Niet stilzitten bij verzorging (haar, tanden)",
    icon: "💇",
    watSpeeltInKind: "Beweging is basisimpuls. Stilzitten = onmogelijk. Soms textuur gevoeligheid of angst.",
    watSpeeltInVader: "Tijdsdruk (moet gebeuren!). Frustratie. Soms angst dat kind gekwetst wordt.",
    psychologie: "Bodily autonomy is belangrijk maar hygiëne ook. Combineer met keuze en afleiden.",
    stappen: [
      "Keuze geven: 'Wil jij of ik?' Bij verzet: rustig volhouden.",
      "Afleiden: liedje, spiegel, video tijdens (bij tandarts).",
      "Kort houden. Beloning na (sticker, verhaal)."
    ],
    voorbeeldzin: "Tanden poetsen moet. Daarna mag jij kiezen: dit boek of dat?",
    valkuil: "Overslaan 'omdat het zo moeilijk is' - creëert hygiëne problemen en leert dat verzet werkt.",
    skillLink: "Grenzen"
  },

  {
    id: "peuter-jaloezie-baby",
    ageGroup: "0-3",
    situatie: "Jaloezie op nieuwe baby",
    icon: "👶",
    watSpeeltInKind: "Aandacht halvering = existentiële dreiging. Geen begrip dat liefde niet deelbaar is maar vermenigvuldigt.",
    watSpeeltInVader: "Schuldgevoel (ik doe oudste tekort). Vermoeidheid (twee kinderen!). Verdriet om verlies 'onze tijd'.",
    psychologie: "Regressie is normaal en gezond (terug naar baby gedrag). Aandacht geven aan regressie helpt het sneller voorbij gaan.",
    stappen: [
      "Betrek bij baby: 'Jij helpt mij!' Geef taken.",
      "One-on-one tijd DAILY. Al is het 10 min. Quality time.",
      "Valideer jaloezie: 'Je mist onze tijd. Ik mis het ook. We vinden nieuwe momenten.'"
    ],
    voorbeeldzin: "Je bent mijn grote! Jij helpt mij met baby. Jij bent onvervangbaar.",
    valkuil: "Verwachten dat oudste 'groot' is omdat baby er is - te veel druk en bevestigt jaloezie.",
    skillLink: "Verbinding"
  },

  {
    id: "peuter-overprikkeld",
    ageGroup: "0-3",
    situatie: "Overstimulatie en overprikkeling",
    icon: "🎪",
    watSpeeltInKind: "Zintuiglijke overload. Nervous system kan niet reguleren. Te veel input = meltdown.",
    watSpeeltInVader: "Bezorgdheid (waarom kan hij dit niet aan?). Frustratie tijdens uitjes. Handelingsverlegenheid.",
    psychologie: "Sensory processing is nog ontwikkelend. Peuters hebben minder filter voor stimuli. Overload is fysiologisch.",
    stappen: [
      "Herken signalen vroeg: friemelen, huilen, wegkijken, agressie.",
      "Actie: rustige ruimte, minder licht/geluid, slow down.",
      "Preventie: plan rust na prikkels. Beperk aantal activiteiten."
    ],
    voorbeeldzin: "Ik zie dat het te veel is. We gaan naar rustig plekje. Diep ademen samen.",
    valkuil: "Doorduwen 'omdat we er toch zijn' - veroorzaakt complete meltdown en negatieve associatie.",
    skillLink: "Zelfregulatie"
  },

  // ═══════════════════════════════════════════════════════════════
  // 4-7 JAAR (25 situaties)  
  // ═══════════════════════════════════════════════════════════════

  {
    id: "kind-niet-luisteren",
    ageGroup: "4-7",
    situatie: "Kind luistert niet naar instructies",
    icon: "👂",
    watSpeeltInKind: "Aandacht is beperkt. Geen prioritering: spel = belangrijk, opruimen = niet. Uitvoerende functies nog in ontwikkeling.",
    watSpeeltInVader: "Frustratie en machteloosheid. Gevoel van gebrek aan respect. Twijfel aan autoriteit.",
    psychologie: "Kinderen horen gemiddeld 7x 'nee' voordat ze handelen. Niet per se opzet maar beperkte werkgeheugen en impulscontrole.",
    stappen: [
      "Oogcontact + naam: 'Max, kijk naar mij.' Wacht tot kind kijkt.",
      "Eén instructie tegelijk. 'Pak je schoenen.' Wacht af.",
      "Bij negeren: fysieke begeleiding. Samen doen. Consequent blijven."
    ],
    voorbeeldzin: "Ik zie dat je speelt. Over 5 minuten gaan we eten. Timer gaat af.",
    valkuil: "Roepen vanuit andere kamer of meerdere instructies tegelijk - werkt niet.",
    skillLink: "Grenzen"
  },

  {
    id: "kind-driftbui-frustratie",
    ageGroup: "4-7",
    situatie: "Driftbui wanneer iets niet lukt",
    icon: "😤",
    watSpeeltInKind: "Hoge interne standaard maar beperkte vaardigheid. Frustratie tolerance laag. Emotie overmant logica.",
    watSpeeltInVader: "Impuls om op te lossen of te bagatelliseren. Frustratie ('Waarom zo dramatisch?').",
    psychologie: "Growth mindset wordt gevormd door hoe we met mislukking omgaan. Validatie > oplossing.",
    stappen: [
      "Valideer eerst: 'Dit is echt moeilijk! Ik zie hoe gefrustreerd je bent.'",
      "Niet direct oplossen. Vraag: 'Wil je hulp of anders proberen?'",
      "Vier pogingen: 'Je hebt echt je best gedaan!' (proces, niet resultaat)"
    ],
    voorbeeldzin: "Wow, dit is lastig. Je wilt het zo graag kunnen! Zal ik helpen of wil je zelf?",
    valkuil: "Direct oplossen of zeggen 'Het is niet erg' - ontkent emotie en vermindert leerkans.",
    skillLink: "Emotiecoaching"
  },

  {
    id: "kind-broertje-ruzie",
    ageGroup: "4-7",
    situatie: "Ruzie met broertje/zusje",
    icon: "👫",
    watSpeeltInKind: "Territorialiteit, jaloezie, eerlijkheid ('Het is niet eerlijk!'). Beperkte conflict skills.",
    watSpeeltInVader: "Vermoeidheid (altijd ruzie!). Schuldgevoel (geef ik te weinig aandacht?). Irritatie.",
    psychologie: "Sibling rivalry is normaal en leerrijk. Te snel ingrijpen = gemiste kans voor conflict skills.",
    stappen: [
      "Bij klein conflict: observe, grijp niet direct in. Laat oplossen.",
      "Bij escalatie: scheiden. 'Jullie zijn beide boos. Even apart.'",
      "Later samen: 'Wat gebeurde? Wat kun je anders?' Medieer, los niet op."
    ],
    voorbeeldzin: "Ik hoor dat jullie ruzie hebben. Kunnen jullie het oplossen of wil je hulp?",
    valkuil: "Altijd partij kiezen of schuld zoeken - creëert rivaliteit en afhankelijkheid.",
    skillLink: "Zelfregulatie"
  },


  {
    id: "kind-bedtijd-strijd",
    ageGroup: "4-7",
    situatie: "Niet naar bed willen",
    icon: "🛏️",
    watSpeeltInKind: "FOMO. Nog niet moe door schermen/activiteit. Autonomie testen ('Waarom moet IK al?').",
    watSpeeltInVader: "Vermoeidheid en wens voor eigen tijd. Frustratie (dit duurt te lang!). Stress om volgende dag.",
    psychologie: "Slaapdrive vs wake drive. Consistent ritueel en timing is key. Discussie = activerende energie = later slapen.",
    stappen: [
      "Vast ritueel, zelfde tijd (±15 min). Dim licht 1u voor bed.",
      "Keuze binnen ritueel: 'Welk boek? Welke pyjama?'",
      "Bij protest: kalm herhalen 'Het is bedtijd.' Eén keer terug brengen, dan consequent."
    ],
    voorbeeldzin: "Ik weet dat je niet wilt slapen. Je lijf heeft slaap nodig. Welk boek lezen we?",
    valkuil: "Iedere avond onderhandelen - creëert inconsistency en laat bed tijdstip.",
    skillLink: "Grenzen"
  },

  {
    id: "kind-schermtijd-conflict",
    ageGroup: "4-7",
    situatie: "Schermtijd discussies",
    icon: "📱",
    watSpeeltInKind: "Dopaminepiek van schermen = verslavend. Geen tijdsbesef. Switch off is moeilijk (overgang).",
    watSpeeltInVader: "Schuldgevoel (geef ik te veel?). Moeheid (makkelijke bezighouding). Frustratie bij uitzetten.",
    psychologie: "Screens zijn ontworpen om addictief te zijn. Boundaries zijn jouw taak, niet kind's verantwoordelijkheid.",
    stappen: [
      "Duidelijk vooraf: 'Je mag 30 min. Timer gaat af bij 25 min (warning).'",
      "Bij timer: rustig maar stellig. 'Tijd is om. We zetten uit.'",
      "Accepteer boosheid maar blijf bij grens. Alternatief bieden helpt overstap."
    ],
    voorbeeldzin: "Ik weet dat je door wilt. Tijd is om. Tablet gaat uit. Wat ga je nu doen?",
    valkuil: "'Nog 5 minuutjes' onderhandelen - leert dat klagen werkt en verlengt schermtijd.",
    skillLink: "Grenzen"
  },

  {
    id: "kind-huiswerk-weigeren",
    ageGroup: "4-7",
    situatie: "Huiswerk weigeren (oefenen)",
    icon: "📝",
    watSpeeltInKind: "Moeheid na schooldag. Autonomie ('Ik wil niet!'). Mogelijk angst voor falen of moeilijkheid.",
    watSpeeltInVader: "Bezorgdheid (komt hij bij?). Frustratie (het moet gewoon!). Tijdsdruk.",
    psychologie: "Dwingen creëert negatieve associatie met leren. Intrinsieke motivatie ontwikkelen duurt tijd.",
    stappen: [
      "Timing: na rustmoment, voor spel. Niet direct na school.",
      "Samen beginnen: 'Ik zit bij je. Laat zien wat je moet doen.'",
      "Bij weigeren: consequentie. 'Huiswerk eerst, dan spelen.' Consistent blijven."
    ],
    voorbeeldzin: "Ik snap dat je niet wilt. Het moet wel. Zullen we samen beginnen?",
    valkuil: "Overnemen of te veel helpen - kind leert afhankelijkheid en verliest ownership.",
    skillLink: "Autonomie"
  },

  {
    id: "kind-eten-weigeren-47",
    ageGroup: "4-7",
    situatie: "Niet eten wat er is",
    icon: "🍽️",
    watSpeeltInKind: "Autonomie uiten via eten. Textuur/smaak issues. Geen honger. Controle behoefte.",
    watSpeeltInVader: "Zorgen over voeding. Frustratie (ik heb dit gemaakt!). Machteloosheid.",
    psychologie: "Verdeling van verantwoordelijkheid: jij WAT en WANNEER, kind HOEVEEL. Dwingen = averechts.",
    stappen: [
      "Bied aan zonder druk. 'Dit is er.'",
      "Regel: iets nieuws minimaal 10x proberen voordat 'niet lekker' geldig is.",
      "Na 30 min opruimen. Geen alternatief. Volgende maaltijd komt."
    ],
    voorbeeldzin: "Dit is het eten. Je hoeft niet op maar proberen wel. Eén hapje?",
    valkuil: "Alternatief maken of smeken - leert dat weigeren werkt en creëert korte orde kok.",
    skillLink: "Grenzen"
  },

  {
    id: "kind-verliezen-teleurstelling",
    ageGroup: "4-7",
    situatie: "Boosheid bij verliezen (spel)",
    icon: "🏆",
    watSpeeltInKind: "Ego development: winnen = ik ben goed. Competitie drang vs frustratie tolerance = laag.",
    watSpeeltInVader: "Impuls om te laten winnen. Gêne bij andere kinderen. 'Leer verliezen!' drang.",
    psychologie: "Sportsmanship is sociale skill die leeftijd 7-8 ontwikkelt. Validatie helpt meer dan les.",
    stappen: [
      "Valideer: 'Verliezen is rot. Dat snap ik.'",
      "Niet laten winnen (dan leert hij niet copen). Wel voorbereiden: 'We spelen. Iemand wint, iemand verliest.'",
      "Model: als jij verliest, toon hoe je daarmee omgaat."
    ],
    voorbeeldzin: "Jij wilde winnen! Dat snap ik. Verliezen is lastig. Volgende keer win je misschien.",
    valkuil: "Altijd laten winnen - kind leert niet omgaan met teleurstelling en realiteit.",
    skillLink: "Emotiecoaching"
  },

  {
    id: "kind-bang-alleen-slapen",
    ageGroup: "4-7",
    situatie: "Bang om alleen te slapen",
    icon: "😰",
    watSpeeltInKind: "Imaginatie ontwikkeling = ook monsters/angsten. Scheidingsangst. Nachtelijke kwetsbaarheid.",
    watSpeeltInVader: "Bezorgdheid (is er iets mis?). Vermoeidheid (weer niet slapen!). Twijfel (blijven liggen of niet?).",
    psychologie: "Angst is real voor kind. Bagatelliseren helpt niet. Graduele zelfstandigheid binnen veiligheid.",
    stappen: [
      "Valideer: 'Je bent bang. Dat is rot.' Negeer angst niet.",
      "Ritueel: check onder bed, nachtlampje, deur op kier.",
      "Start bij bed, gradueel meer afstand. 'Ik ben vlakbij. Je bent veilig.'"
    ],
    voorbeeldzin: "Er zijn geen monsters, maar ik snap dat je bang bent. Kijk: licht aan, deur open. Ik ben hier.",
    valkuil: "Elke nacht in bed van kind kruipen - lost direct probleem maar creëert afhankelijkheid.",
    skillLink: "Aanwezigheid"
  },

  {
    id: "kind-school-weigeren",
    ageGroup: "4-7",
    situatie: "Niet naar school willen",
    icon: "🏫",
    watSpeeltInKind: "Scheidingsangst, angst voor pesten, faalangst, of gewoon meer fun thuis.",
    watSpeeltInVader: "Bezorgdheid (wat speelt er?). Stress (werk!). Twijfel (forceren of thuishouden?).",
    psychologie: "School refusal kan verschillende oorzaken hebben. Exploreer WAAROM zonder toegeven.",
    stappen: [
      "Exploreer: 'Wat maakt school moeilijk?' Luister echt.",
      "Valideer gevoel maar blijf bij consequentie: 'Je vindt het moeilijk. Je gaat wel.'",
      "Bij aanhouden: contact school. Onderzoek of er issue is (pesten, leerproblemen)."
    ],
    voorbeeldzin: "Ik hoor dat je niet wilt. Vertel: wat maakt het moeilijk? School is wel verplicht.",
    valkuil: "Direct thuishouden zonder exploreren - mist mogelijk serieus probleem en leert vermijden.",
    skillLink: "Verbinding"
  },

  {
    id: "kind-vriendjes-conflict",
    ageGroup: "4-7",
    situatie: "Problemen met vriendjes",
    icon: "👥",
    watSpeeltInKind: "Sociale navigatie is complex. Beperkte conflict skills. Emoties zijn intens ('Hij is NIET meer mijn vriend!').",
    watSpeeltInVader: "Verdriet om kind's pijn. Impuls om in te grijpen. Bezorgdheid over sociaal welbevinden.",
    psychologie: "Sociale skills leren door ervaring. Te snel rescuen = gemiste leerkans. Valideer + coach.",
    stappen: [
      "Luister actief. Valideer: 'Dat is rot. Vertel.'",
      "Coach: 'Wat zou je kunnen doen? Wat denk je dat helpt?'",
      "Alleen ingrijpen bij pesten of fysiek. Rest = coachen en monitoren."
    ],
    voorbeeldzin: "Dat klinkt moeilijk. Heb je een idee wat je zou kunnen proberen?",
    valkuil: "Direct ingrijpen bij andere ouders/kind - kind leert niet zelf problemen oplossen.",
    skillLink: "Zelfregulatie"
  },

  {
    id: "kind-niet-eerlijk",
    ageGroup: "4-7",
    situatie: "Klagen dat het niet eerlijk is",
    icon: "⚖️",
    watSpeeltInKind: "Rechtvaardigheid ontwikkeling. Egocentrisme: mijn perspectief = de waarheid. Geen nuance nog.",
    watSpeeltInVader: "Vermoeidheid (altijd klagen!). Frustratie. Impuls om uitleg te geven of gelijk te geven.",
    psychologie: "'Fair' = not always equal. Life lesson. Iedere keer uitleggen is exhausting en meestal ineffectief.",
    stappen: [
      "Kort erkennen: 'Je vindt het niet eerlijk.'",
      "Geen lange uitleg. 'Iedereen krijgt wat hij nodig heeft.'",
      "Redirect: 'Wat ga je nu doen?' Stop klager-energie."
    ],
    voorbeeldzin: "Ik hoor je. Soms is het niet eerlijk. Zo is het nu.",
    valkuil: "Lange uitleg waarom het WEL eerlijk is - creëert discussie en leert argumenteren.",
    skillLink: "Grenzen"
  },

  {
    id: "kind-liegen-47",
    ageGroup: "4-7",
    situatie: "Liegen over kleine dingen",
    icon: "🤥",
    watSpeeltInKind: "Fantasie vs realiteit grens is vaag. Wens-denken. Angst voor straf. Geen ontwikkeld moreel kompas.",
    watSpeeltInVader: "Bezorgdheid (wordt dit patroon?). Boosheid ('Waarom liegt hij?'). Handelingsverlegenheid.",
    psychologie: "Onderscheid tussen fantasie en intentionele leugen. Straffen leugen leert beter liegen, niet eerlijkheid.",
    stappen: [
      "Geen vraag als je antwoord weet. 'Ik zie chocola op je mond.'",
      "Bij leugen: rustig corrigeren. 'Dat is niet waar. Vertel de waarheid.'",
      "Beloon eerlijkheid. 'Dank dat je eerlijk bent. Consequentie voor gedrag, niet voor waarheid.'"
    ],
    voorbeeldzin: "Ik weet dat je bang bent voor straf. Als je eerlijk bent, waarderen we dat.",
    valkuil: "Hard straffen voor liegen - kind leert beter liegen om straf te ontwijken.",
    skillLink: "Verbinding"
  },

  {
    id: "kind-opruimen-weigeren",
    ageGroup: "4-7",
    situatie: "Spullen niet opruimen",
    icon: "🧹",
    watSpeeltInKind: "Geen waarde zien in opruimen. Geen intrinsieke motivatie voor orde. Saaie taak vs leuk spel.",
    watSpeeltInVader: "Frustratie (waarom luistert hij niet?). Vermoeidheid. Vaak zelf maar doen.",
    psychologie: "Natural consequence werkt beter dan battle. Maken het hun probleem, niet jouw probleem.",
    stappen: [
      "Duidelijke instructie: 'Over 10 min opruimen.' Timer.",
      "Samen beginnen kan helpen. 'Jij blokken, ik auto's.'",
      "Consequentie: niet opgeruimd = in doos, niet beschikbaar morgen."
    ],
    voorbeeldzin: "Opruimen is jouw taak. Als het niet gebeurt, gaat het in deze doos voor 1 dag.",
    valkuil: "Zelf opruimen als kind weigert - leert dat weigeren werkt en jij het oplost.",
    skillLink: "Autonomie"
  },

  {
    id: "kind-agressie-slaan",
    ageGroup: "4-7",
    situatie: "Agressief gedrag (slaan, schoppen)",
    icon: "👊",
    watSpeeltInKind: "Frustratie + beperkte impulscontrole + beperkte verbale skills = fysiek uiten. Oorzaak-gevolg nog leren.",
    watSpeeltInVader: "Schrik en boosheid. Schaamte ('Wat voor opvoeding?'). Angst (wordt dit patroon?).",
    psychologie: "Agressie is communicatie van overwhelm. Straf zonder begeleiding werkt niet. Leer alternatieven.",
    stappen: [
      "Direct stoppen. Kalm maar streng: 'Stop. Slaan doet pijn.'",
      "Time-out (1 min per levensjaar). Geen lange preek.",
      "Later: 'Als je boos bent, wat kun je anders doen? Woorden? Naar mij toe?'"
    ],
    voorbeeldzin: "Slaan mag niet. Ik zie dat je boos bent. Gebruik woorden of kom naar mij.",
    valkuil: "Terugslaan of schreeuwen - modelleert exact het gedrag dat je wilt stoppen.",
    skillLink: "Emotiecoaching"
  },

  {
    id: "kind-druk-onrustig",
    ageGroup: "4-7",
    situatie: "Te druk en onrustig gedrag",
    icon: "🏃",
    watSpeeltInKind: "Energie level hoog. Mogelijk ondergestimuleerd (te weinig bewegen). Mogelijk ADHD.",
    watSpeeltInVader: "Vermoeidheid van constante supervisie. Bezorgdheid (is dit normaal?). Frustratie.",
    psychologie: "Kinderen NEED beweging. Minimaal 2u per dag actieve beweging. Teveel zitten = teveel energie binnen.",
    stappen: [
      "Check: beweegt kind genoeg? Buiten spelen, rennen, klimmen = NEED.",
      "Structuur: voorspelbaar schema met bewegingsmomenten.",
      "Bij binnen onrust: 'Ik zie energie. Buiten rennen of kussen stapelen?'"
    ],
    voorbeeldzin: "Ik zie dat je veel energie hebt! Laten we naar buiten gaan om te rennen.",
    valkuil: "Straffen voor druk gedrag - energie moet ergens heen. Bied uitlaat.",
    skillLink: "Zelfregulatie"
  },

  {
    id: "kind-zeuren-kopen",
    ageGroup: "4-7",
    situatie: "Zeuren om iets te kopen",
    icon: "🛍️",
    watSpeeltInKind: "Impulscontrole laag. Marketing werkt (bright colors!). Geen geld concept. Wil = moet hebben = nu.",
    watSpeeltInVader: "Gêne in winkel. Vermoeidheid. Soms schuld (ik gun het hem niet).",
    psychologie: "Wisselende beloning: 1x toegeven = kind leert doorzetten want soms werkt het. Consistentie is essentieel.",
    stappen: [
      "Vooraf duidelijk: 'We gaan boodschappen. We kopen geen speelgoed.'",
      "Bij zeuren: kort 'Nee. We hadden afgesproken.' Niet meer reageren.",
      "Consistent blijven. Elke keer toegeven = zeuren wordt effectieve strategie."
    ],
    voorbeeldzin: "Ik snap dat je dat wilt. We kopen het niet. Klaar.",
    valkuil: "Soms toegeven 'om rust te hebben' - leert dat volhouden werkt en maakt volgende keer erger.",
    skillLink: "Grenzen"
  },

  {
    id: "kind-niet-kiezen",
    ageGroup: "4-7",
    situatie: "Kan niet kiezen en raakt gefrustreerd",
    icon: "🤔",
    watSpeeltInKind: "Te veel opties = overload. Angst verkeerde keuze. Wil beide. Beperkte besluitvorming capacity.",
    watSpeeltInVader: "Ongeduld. Frustratie ('Gewoon kiezen!'). Tijdsdruk.",
    psychologie: "Decision fatigue is real. Te veel keuze is verlammend. Beperk opties helpt.",
    stappen: [
      "Beperk keuzes: 'Deze of die?' (max 2-3 opties).",
      "Time limit: 'Je hebt tot 10 tellen. Dan kies ik.'",
      "Bij blijven strugglen: volg door. 'Tijd is om. Ik kies: deze.'"
    ],
    voorbeeldzin: "Deze trui of die trui? Je hebt tot 10 tellen om te kiezen.",
    valkuil: "Blijven wachten of steeds meer opties geven - verergert overload.",
    skillLink: "Autonomie"
  },

  {
    id: "kind-boos-wakker",
    ageGroup: "4-7",
    situatie: "Boos of chagrijnig wakker worden",
    icon: "😠",
    watSpeeltInKind: "Slaap cycle. Mogelijk niet uitgerust. Honger (low blood sugar). Overgang slapen-wakker is moeilijk.",
    watSpeeltInVader: "Eigen moeheid maakt geduld laag. Frustratie ('Weer zo'n start!').",
    psychologie: "Some kids are not morning people. Accepteren + ruimte geven werkt beter dan forceren vrolijkheid.",
    stappen: [
      "Accepteer humeur. 'Je bent chagrijnig. Oké.'",
      "Geef ruimte. Niet te veel praten/vragen.",
      "Eten + drinken helpt vaak. Daarna gradual wakker worden."
    ],
    voorbeeldzin: "Goedemorgen. Ik zie dat je nog niet vrolijk bent. Dat mag. Hier is ontbijt.",
    valkuil: "Pushen om vrolijk te zijn of straffen voor humeur - kan niet anders en maakt erger.",
    skillLink: "Aanwezigheid"
  },

  {
    id: "kind-perfectionisme-angst",
    ageGroup: "4-7",
    situatie: "Perfectionisme en faalangst",
    icon: "📚",
    watSpeeltInKind: "Interne standaard hoog. Angst om fout te maken = angst om 'slecht' te zijn. Fixed mindset ('Ik ben dom als ik faal').",
    watSpeeltInVader: "Bezorgdheid. Impuls om gerust te stellen ('Je bent goed genoeg!'). Herkenning van eigen perfectionisme?",
    psychologie: "Growth mindset: fouten = leren. Fixed mindset: fouten = bewijs van falen. Jouw reactie op falen vormt dit.",
    stappen: [
      "Vier effort, niet resultaat: 'Je hebt hard gewerkt!'",
      "Model je eigen fouten: 'Oeps, ik deed dit fout. Laat ik proberen...'",
      "Bij falen: 'Wat leerde je hiervan? Wat probeer je volgende keer?'"
    ],
    voorbeeldzin: "Iedereen maakt fouten. Zo leren we. Vertel, wat probeerde je?",
    valkuil: "Alleen resultaat belonen ('Je bent zo slim!') - leert fixed mindset.",
    skillLink: "Zelfregulatie"
  },

  {
    id: "kind-niet-douchen",
    ageGroup: "4-7",
    situatie: "Verzet tegen douchen/wassen",
    icon: "🚿",
    watSpeeltInKind: "Onderbreking van spel. Watertemperatuur/zeep sensatie ongemakkelijk. Geen inzicht in hygiëne noodzaak.",
    watSpeeltInVader: "Frustratie (dit MOET!). Tijd druk. Soms walging van viezigheid.",
    psychologie: "Maak het fun en geef autonomie binnen de grens. Hygiëne is non-negotiable maar HOW kan flexibel.",
    stappen: [
      "Voorspelbaarheid: vast moment in routine.",
      "Keuze: 'Bad of douche? Speeltje mee?' Autonomie binnen grens.",
      "Bij verzet: rustig volhouden. 'Het moet. Daarna lezen we.'"
    ],
    voorbeeldzin: "Douchen moet. Wil je speelgoed mee of muziek aan?",
    valkuil: "Overslaan 'want te moeilijk' - creëert hygiëne probleem en leert dat verzet werkt.",
    skillLink: "Grenzen"
  },

  {
    id: "kind-controle-dwang",
    ageGroup: "4-7",
    situatie: "Wil alles controleren en bepalen",
    icon: "🎮",
    watSpeeltInKind: "Ontwikkelend gevoel van agency. Angst voor onvoorspelbaarheid. Mogelijk compensatie voor onzekerheid.",
    watSpeeltInVader: "Frustratie ('Ik ben de ouder!'). Machteloosheid. Bezorgdheid (wordt dit patroon?).",
    psychologie: "Controle behoefte komt vaak van angst. Keuze binnen grenzen helpt. Maar jij bent de adult.",
    stappen: [
      "Geef autonomie waar kan: 'Welke boek? Deze trui of die?'",
      "Maar: ouder bepaalt de kaders. 'We gaan. Jij kiest: nu lopen of gedragen.'",
      "Bij machtsstrijd: calm + consequent. 'Ik bepaal dit. Volgende keer mag jij kiezen...'"
    ],
    voorbeeldzin: "Ik snap dat je wilt bepalen. Dit keer bepaal ik. Volgende keer mag jij.",
    valkuil: "Altijd toegeven om conflict te vermijden - versterkt controle behoefte en angst.",
    skillLink: "Grenzen"
  },

  {
    id: "kind-schelden-schreeuwen",
    ageGroup: "4-7",
    situatie: "Schelden en schreeuwen naar jou",
    icon: "😡",
    watSpeeltInKind: "Beperkte emotie regulatie + woede + beperkte vocabulaire = grote woorden. Test grenzen en reactie.",
    watSpeeltInVader: "Gekwetstheid en boosheid. Schrik ('Waar heeft hij dit?'). Impuls om te straffen.",
    psychologie: "Niet persoonlijk nemen. Dit is dysregulation. Grens stellen zonder escaleren.",
    stappen: [
      "Rustig blijven (model regulatie). 'Die woorden gebruiken we niet.'",
      "Time-out kort. 'Als je rustig bent, praten we.'",
      "Later: 'Je was boos. Dat mag. Schelden mag niet. Wat kun je anders zeggen?'"
    ],
    voorbeeldzin: "Je bent boos. Dat snap ik. Die woorden mag je niet gebruiken. Zeg: 'Ik ben boos!'",
    valkuil: "Schreeuwen terug of fysiek straffen - modelleert exact wat je wilt stoppen.",
    skillLink: "Emotiecoaching"
  },

  {
    id: "kind-somber-terugtrekken",
    ageGroup: "4-7",
    situatie: "Somber of teruggetrokken gedrag",
    icon: "😔",
    watSpeeltInKind: "Mogelijk sociale problemen. Mogelijk overprikkeling. Verwerken van emoties. Mogelijk beginstadium depressie (zeldzaam maar mogelijk).",
    watSpeeltInVader: "Bezorgdheid en verdriet. Handelingsverlegenheid (wat moet ik doen?). Angst dat iets ergs speelt.",
    psychologie: "Aanhoudende (>2 weken) somberheid = professional help. Maar ook: kinderen hebben off-days. Observeer patroon.",
    stappen: [
      "Observeer: patroon of incident? Eet/slaapt normaal? Speelt nog?",
      "Bied aan: 'Ik zie dat je stil bent. Wil je praten of samen iets doen?'",
      "Bij aanhouden: professional help. School psycholoog of huisarts."
    ],
    voorbeeldzin: "Ik zie dat je een beetje verdrietig lijkt. Wil je erover praten? Of gewoon knuffel?",
    valkuil: "Negeren ('Het gaat vanzelf over') - mist mogelijk serieus probleem.",
    skillLink: "Verbinding"
  },

  {
    id: "kind-aandacht-vragen",
    ageGroup: "4-7",
    situatie: "Constant aandacht vragen",
    icon: "👋",
    watSpeeltInKind: "Behoefte aan verbinding. Mogelijk te weinig quality time. Mogelijk onzekerheid. Aandacht = liefde in kind brein.",
    watSpeeltInVader: "Vermoeidheid ('Kan ik 5 minuten?!'). Frustratie. Soms schuldgevoel (geef ik te weinig?).",
    psychologie: "Fill the tank: consistente quality time reduceert constant vragen. Lege tank = meer vragen.",
    stappen: [
      "Plan dagelijkse 1-on-1 time. Al is het 15 min. Quality > quantity.",
      "Tijdens die tijd: FULL attention. Telefoon weg.",
      "Bij vragen buiten die tijd: 'Nu niet. Straks samen.' Volg door!"
    ],
    voorbeeldzin: "Ik zie je. Over 10 minuten hebben we samen tijd. Dan ben ik helemaal van jou.",
    valkuil: "Alleen aandacht geven bij vragen - leert dat vragen/zeuren werkt.",
    skillLink: "Verbinding"
  },


  // ═══════════════════════════════════════════════════════════════
  // 8-12 JAAR (25 situaties)
  // ═══════════════════════════════════════════════════════════════

  {
    id: "kind-niet-luisteren-812",
    ageGroup: "8-12",
    situatie: "Negeren en niet luisteren",
    icon: "🙉",
    watSpeeltInKind: "Autonomie development. Test boundaries. Mogelijk echt niet gehoord (focus op spel/scherm). Begint eigen mening te vormen.",
    watSpeeltInVader: "Gevoel van gebrek aan respect. Frustratie. Machteloosheid ('Ik ben de ouder!').",
    psychologie: "Pre-teen autonomie. Natural development. Consequenties werken beter dan herhalen. Respecteer hun groeiende autonomie binnen grenzen.",
    stappen: [
      "Eén keer zeggen, niet herhalen. Fysiek erbij gaan staan.",
      "Consequentie vooraf duidelijk: 'Als je over 5 min niet..., dan...'",
      "Consistent volgen door. Geen lege dreigingen."
    ],
    voorbeeldzin: "Ik zeg dit één keer. Als het niet gebeurt, is de consequentie... Begrijp je dat?",
    valkuil: "Blijven herhalen zonder consequentie - leert dat woorden niet tellen.",
    skillLink: "Grenzen"
  },

  {
    id: "kind-huiswerk-uitstel",
    ageGroup: "8-12",
    situatie: "Huiswerk uitstellen en vergeten",
    icon: "📝",
    watSpeeltInKind: "Beperkte planning skills. Geen urgentie besef. Avoidance (moeilijk/saai). Executieve functie nog ontwikkelend.",
    watSpeeltInVader: "Bezorgdheid over cijfers/toekomst. Frustratie ('Dit is jouw verantwoordelijkheid!'). Impuls om over te nemen.",
    psychologie: "Natural consequences zijn de beste leraar. Teveel helpen = learned helplessness. Stapsgewijs verantwoordelijkheid overdragen.",
    stappen: [
      "Maak het hun probleem: 'Wanneer ga jij huiswerk maken?' (niet 'Je MOET nu').",
      "Bij vergeten: natuurlijke consequentie (cijfer, nablijven). Niet rescuen.",
      "Structuur bieden (schema) maar zíj voeren uit."
    ],
    voorbeeldzin: "Huiswerk is jouw verantwoordelijkheid. Als je het vergeet, is dat jouw consequentie. Hoe ga je eraan denken?",
    valkuil: "Blijven achter ze aan zitten - neemt verantwoordelijkheid over en werkt niet op lange termijn.",
    skillLink: "Autonomie"
  },

  {
    id: "kind-scherm-verslaving",
    ageGroup: "8-12",
    situatie: "Schermtijd grenzen overschrijden",
    icon: "📱",
    watSpeeltInKind: "Dopamineverslaving. Sociale druk (vrienden zitten erop). FOMO. Beperkte zelfcontrole bij beloningen.",
    watSpeeltInVader: "Schuldgevoel (geef ik teveel toe?). Moeheid van constante strijd. Zorgen over impact.",
    psychologie: "Screens zijn engineered to be addictive. Het is NIET willpower probleem bij kind. Jij moet de boundary zijn.",
    stappen: [
      "Duidelijke regels vooraf. 'Max 2u per dag, niet voor bed.'",
      "Tech oplossingen: screen time limits, apps blocken na tijd.",
      "Consequentie: overtreding = dag zonder. Consistent!"
    ],
    voorbeeldzin: "De regel is 2 uur. Tijd is om. Device gaat naar mij. Morgen probeer je het anders.",
    valkuil: "Onderhandelen elke keer - leert dat klagen werkt en ondermijnt grens.",
    skillLink: "Grenzen"
  },

  {
    id: "kind-broerzus-ruzie-812",
    ageGroup: "8-12",
    situatie: "Constante ruzie tussen broer/zus",
    icon: "👫",
    watSpeeltInKind: "Territorialiteit, jaloezie, machtsstrijd. Oefenen van conflict skills (onbewust). Verveling.",
    watSpeeltInVader: "Vermoeidheid ('ALTIJD ruzie!'). Irritatie. Handelingsverlegenheid (ingrijpen of niet?).",
    psychologie: "Sibling rivalry = normal. Teveel ingrijpen = geen conflict resolution skills. Laat oplossen unless fysiek/pesten.",
    stappen: [
      "Bij minor conflict: niet ingrijpen. Laat zelf oplossen.",
      "Bij escalatie naar fysiek: scheiden. 'Jullie lost dit niet op. Apart.'",
      "Later samen: mediëren. 'Wat gebeurde? Wat kan anders?' Niet oordelen wie 'fout' was."
    ],
    voorbeeldzin: "Ik hoor dat jullie ruzie hebben. Als jullie het niet kunnen oplossen, ga ik het oplossen (= beide consequentie).",
    valkuil: "Altijd beslissen wie gelijk heeft - creëert afhankelijkheid en meer conflict.",
    skillLink: "Zelfregulatie"
  },

  {
    id: "kind-gepest-worden",
    ageGroup: "8-12",
    situatie: "Gepest worden op school",
    icon: "😢",
    watSpeeltInKind: "Pijn, verwarring ('Waarom ik?'), schaamte, angst. Mogelijk internaliseren ('Er is iets mis met mij').",
    watSpeeltInVader: "Intense verdriet voor kind. Woede naar pesters. Machteloosheid. Beschermingsdrang.",
    psychologie: "Pesten = serious. Ingrijpen IS nodig. Balans tussen empowerment (kind leert coping) en protection (jij pakt structuur aan).",
    stappen: [
      "Geloof kind. Valideer: 'Dat is verschrikkelijk. Dank dat je het vertelt.'",
      "Samen plan: 'Wat wil je dat er gebeurt?' Betrek kind in beslissingen.",
      "Escaleer naar school. Document alles. Dit is HUN verantwoordelijkheid te stoppen."
    ],
    voorbeeldzin: "Dit is niet oké. Jij verdient het niet. We gaan dit samen aanpakken. Ik sta achter je.",
    valkuil: "Bagatelliseren ('Negeer ze gewoon') - laat kind alleen en verergert vaak.",
    skillLink: "Verbinding"
  },

  {
    id: "kind-faalangst-toetsen",
    ageGroup: "8-12",
    situatie: "Faalangst bij toetsen",
    icon: "📚",
    watSpeeltInKind: "Performance anxiety. Fixed mindset ('Als ik faal = ik ben dom'). Perfectionisme. Mogelijk hoge verwachtingen (van zelf of omgeving).",
    watSpeeltInVader: "Bezorgdheid. Impuls om gerust te stellen. Mogelijk herkenning eigen faalangst.",
    psychologie: "Growth mindset cultiveren: proces > resultaat. Druk verlagen, niet verhogen. Falen normaliseren.",
    stappen: [
      "Focus op effort: 'Je hebt hard geleerd. Daar ben ik trots op.'",
      "Normaliseer: 'Iedereen faalt soms. Wat leer je ervan?'",
      "Check verwachtingen: stel je zelf te hoge eisen? Communiceer: cijfer ≠ waarde."
    ],
    voorbeeldzin: "Een cijfer zegt niks over wie je bent. Ik hou van je of je een 10 of een 4 haalt.",
    valkuil: "Druk opvoeren ('Je MOET wel goed scoren!') - verergert angst en performance.",
    skillLink: "Emotiecoaching"
  },

  {
    id: "kind-vrienden-drama",
    ageGroup: "8-12",
    situatie: "Vrienden drama en uitsluitingen",
    icon: "👥",
    watSpeeltInKind: "Sociale hiërarchie ontwikkelt. In/out groepen. Loyaliteit shifts. Eerste hartpijn van afwijzing.",
    watSpeeltInVader: "Verdriet om kind's pijn. Impuls om te fixen. Bezorgdheid (heeft mijn kind wel vrienden?).",
    psychologie: "Social navigation is complex leerproces. Niet fixable door ouder. Wel: valideren + coachen + monitoren.",
    stappen: [
      "Luister zonder direct oplossen. 'Vertel. Hoe voel je je daarbij?'",
      "Coach: 'Wat zou je kunnen doen? Wat denk je dat helpt?'",
      "Monitor: is dit patroon (altijd buitengesloten) of incident? Patroon = mogelijk professionele hulp."
    ],
    voorbeeldzin: "Dat klinkt rot. Afgewezen worden doet pijn. Wat denk je dat jij zou kunnen proberen?",
    valkuil: "Direct andere ouders/kinderen bellen - kind voelt zich gered ipv empowered.",
    skillLink: "Zelfregulatie"
  },

  {
    id: "kind-sport-weigeren",
    ageGroup: "8-12",
    situatie: "Niet willen sporten of bewegen",
    icon: "🏃",
    watSpeeltInKind: "Mogelijk negatieve sport ervaring (gepest, faalervaringen). Schermen aantrekkelijker. Geen intrinsieke motivatie gevonden.",
    watSpeeltInVader: "Bezorgdheid over gezondheid. Frustratie ('Elke week hetzelfde!). Mogelijk projectie eigen sport waarde.",
    psychologie: "Forceren creëert negatieve associatie. Exploratie + plezier > prestatie. Beweeg MET kind, niet commando.",
    stappen: [
      "Exploreer: 'WELKE beweging vind je leuk?' (niet alleen teamsport). Wandelen, dansen, skateboarden?",
      "Model: beweeg zelf. Samen dingen doen.",
      "Bij absolute weigeren: consequentie. 'OK, geen sport. Maar schermtijd gaat ook naar beneden (verveel je)'"
    ],
    voorbeeldzin: "Sport moet niet, bewegen wel. Wat voor beweging zou jij leuk vinden om te proberen?",
    valkuil: "Inschrijven voor sport en dwingen te gaan - creëert diepe haat voor beweging.",
    skillLink: "Autonomie"
  },

  {
    id: "kind-ongezond-eten",
    ageGroup: "8-12",
    situatie: "Alleen ongezond willen eten",
    icon: "🍔",
    watSpeeltInKind: "Sugar/fat/salt = biologisch aantrekkelijk. Marketing werkt. Groepsdruk. Geen lange termijn denken over gezondheid.",
    watSpeeltInVader: "Zorgen over gezondheid. Frustratie (waarom luistert hij niet?). Machtsstrijd.",
    psychologie: "Jij bepaalt WAT in huis komt. Zij bepalen HOEVEEL ze eten. Model gezond gedrag > preken.",
    stappen: [
      "Huis: grotendeels gezond. Treat = ok maar niet basis.",
      "Model: eet zelf gezond. Geen 'regels voor jou, niet voor mij'.",
      "Bij zeuren: 'Dit is het eten. Neem wat je wilt.' No short order cook."
    ],
    voorbeeldzin: "Ik koop gezonde dingen. Jij kiest wat je eet van wat er is. Geen alternatief.",
    valkuil: "Apart eten maken of hele gezin aanpassen - maakt machtsstrijd en special treatment.",
    skillLink: "Grenzen"
  },

  {
    id: "kind-puber-afstand",
    ageGroup: "8-12",
    situatie: "Begint afstand te nemen (pre-puber)",
    icon: "🚶",
    watSpeeltInKind: "Autonomie development. Peers worden belangrijker. Schaamte voor ouders (normaal). Identiteit vorming begint.",
    watSpeeltInVader: "Verdriet (ik mis mijn kind). Gekwetstheid. Verwarring (wat doe ik fout?).",
    psychologie: "Dit is HEALTHY development. Niet persoonlijk nemen. Beschikbaar blijven zonder opdringen.",
    stappen: [
      "Accepteer: 'Ik zie dat je meer eigen tijd wilt. Dat hoort bij ouder worden.'",
      "Blijf beschikbaar: 'Als je wilt praten, ik ben er.'",
      "Vind nieuwe connectie manieren: minder knuffels, meer naast elkaar activiteiten."
    ],
    voorbeeldzin: "Ik merk dat je liever tijd alleen doorbrengt. Dat snap ik. Mijn deur staat altijd open.",
    valkuil: "Forceren van knuffels/tijd samen - creëert meer afstand en weerstand.",
    skillLink: "Verbinding"
  },

  {
    id: "kind-liegen-prestaties",
    ageGroup: "8-12",
    situatie: "Liegen over prestaties/cijfers",
    icon: "🤥",
    watSpeeltInKind: "Angst voor teleurstelling (van jou). Schaamte over falen. Druk (ervaren of echt) om goed te presteren.",
    watSpeeltInVader: "Gekwetstheid ('Waarom liegt hij tegen MIJ?'). Bezorgdheid (wordt dit patroon?). Boosheid.",
    psychologie: "Leugen is symptoom, niet het probleem. Vraag: WHY liegt hij? Teveel druk? Angst voor reactie? Adresseer onderliggende issue.",
    stappen: [
      "Confronteer kalm: 'Ik weet dat dit niet klopt. Vertel de waarheid.'",
      "Exploreer: 'Waarom vond je het moeilijk om eerlijk te zijn?' Listen!",
      "Check eigen rol: stel ik te hoge eisen? Reageer ik te hard op falen?"
    ],
    voorbeeldzin: "Ik waardeer eerlijkheid meer dan perfectie. Vertel de waarheid, ook als het moeilijk is.",
    valkuil: "Hard straffen zonder exploreren WAAROM - mist de root cause en leert beter liegen.",
    skillLink: "Verbinding"
  },

  {
    id: "kind-kamer-chaos",
    ageGroup: "8-12",
    situatie: "Kamer is complete chaos",
    icon: "🌪️",
    watSpeeltInKind: "Geen waarde voor orde. Uitvoerende functies (organisatie) nog ontwikkelend. Andere prioriteiten (spelen/schermen).",
    watSpeeltInVader: "Frustratie en walging. Impuls om zelf op te ruimen. Bezorgdheid (wordt dit levenslang?).",
    psychologie: "Hun kamer = hun domein. Natural consequences werken beter dan battle. Teach organizational skills, don't just demand.",
    stappen: [
      "Grens: deur dicht = jouw probleem. Maar gedeelde ruimtes moeten netjes.",
      "Bij te extreem (health hazard): 'Dit moet opgeruimd. Wil je hulp?'",
      "Teach systems: 'Waar kunnen kleren? Waar kan vuilnis?' Help structuur maken."
    ],
    voorbeeldzin: "Jouw kamer, jouw keuze. Maar als je iets niet kan vinden, help ik niet zoeken.",
    valkuil: "Zelf constant opruimen - neemt verantwoordelijkheid weg en leert niets.",
    skillLink: "Autonomie"
  },

  {
    id: "kind-huishouden-weigeren",
    ageGroup: "8-12",
    situatie: "Niet helpen in huis",
    icon: "🧹",
    watSpeeltInKind: "Geen intrinsieke motivatie. Besef van 'waarom nodig' ontbreekt. Andere dingen leuker.",
    watSpeeltInVader: "Frustratie ('Ik ben geen maid!'). Vermoeidheid van alles zelf doen. Rechtvaardigheid ('Zij moeten ook!').",
    psychologie: "Contribution = onderdeel zijn van gezin. Niet koppelen aan zakgeld (dan wordt het transactie). Verwachting stellen + consistent.",
    stappen: [
      "Duidelijke taken: 'Jouw taak is tafel dekken, afval buiten.'",
      "Consequentie bij niet doen: geen privileges tot taak gedaan.",
      "Niet meteen zelf doen - dan leren ze dat uitstel werkt."
    ],
    voorbeeldzin: "Iedereen draagt bij in dit huis. Dit is jouw taak. Als het niet gebeurt, geen [privilege].",
    valkuil: "Zeuren en uiteindelijk zelf doen - leert dat uitstel werkt.",
    skillLink: "Grenzen"
  },

  {
    id: "kind-laat-bed-812",
    ageGroup: "8-12",
    situatie: "Te laat naar bed blijven",
    icon: "🌙",
    watSpeeltInKind: "Geen directe consequentie voelen. Schermen houden wakker. Autonomie ('Ik bepaal zelf!'). FOMO.",
    watSpeeltInVader: "Bezorgdheid over slaap/ontwikkeling. Vermoeidheid (wil zelf ook naar bed). Frustratie.",
    psychologie: "Sleep debt accumuleert. Teens NEED 9-11h. Natural consequences (moeheid) + boundaries.",
    stappen: [
      "Duidelijke tijd: '21:00 in bed, licht uit 21:30.' Non-negotiable.",
      "Devices uit kamer 30 min voor bed. Laadstation beneden.",
      "Natural consequence: moe zijn is hun probleem. Niet rescuen (later slapen weekend)."
    ],
    voorbeeldzin: "Bedtijd is 21:00. Moe zijn morgen is jouw consequentie. Devices gaan naar beneden.",
    valkuil: "Laten bepalen eigen bedtijd - meeste kinderen kiezen te laat en bouwen slaapdeprivatie op.",
    skillLink: "Grenzen"
  },

  {
    id: "kind-gamen-conflict",
    ageGroup: "8-12",
    situatie: "Gamen discussies en grenzen",
    icon: "🎮",
    watSpeeltInKind: "Game is designed voor dopamine. Social aspect (spelen met vrienden). Competitie drang. Moeilijk te stoppen mid-game.",
    watSpeeltInVader: "Zorgen over verslaving. Frustratie bij uitzetten. Onzekerheid (hoeveel is ok?).",
    psychologie: "Games zijn addictive by design. Absolute grenzen + begrip voor hun ervaring. Involvement is key.",
    stappen: [
      "Duidelijke grenzen: max uur per dag, niet voor huiswerk.",
      "Warning system: '15 min, maak je game af.'",
      "Interesse tonen: 'Wat speel je? Leg uit!' Creates connection."
    ],
    voorbeeldzin: "Ik snap dat je graag speelt. Regel is max 2u. Over 15 min gaat hij uit. Rond je game af.",
    valkuil: "Direct uitzetten zonder warning - creëert woede (ze verliezen progress/laten team down).",
    skillLink: "Grenzen"
  },

  {
    id: "kind-geld-zakgeld",
    ageGroup: "8-12",
    situatie: "Geld problemen en zakgeld",
    icon: "💰",
    watSpeeltInKind: "Geen concept langetermijn. Impulsaankopen. Groepsdruk (vrienden hebben X). Geen verdien/waarde connectie.",
    watSpeeltInVader: "Zorgen over financiële toekomst. Frustratie ('Waarom leert hij niet sparen?'). Impuls om te rescuen.",
    psychologie: "Financial literacy is learned. Laat fouten maken met kleine bedragen NU, zodat ze leren voor grote bedragen LATER.",
    stappen: [
      "Vast zakgeld (niet koppelen aan taken - dat is basiscontributie).",
      "Hun keuze hoe te spenderen. Niet rescuen bij 'op is op'.",
      "Teach budgeting: 'Dit kost X. Je hebt Y. Genoeg? Sparen?'"
    ],
    voorbeeldzin: "Je zakgeld is X per week. Hoe je het spendeert is jouw keuze. Op = op tot volgende week.",
    valkuil: "Extra geven als het op is - leert dat budgetteren niet nodig is.",
    skillLink: "Autonomie"
  },

  {
    id: "kind-social-media-obsessie",
    ageGroup: "8-12",
    situatie: "Social media obsessie (TikTok, Instagram)",
    icon: "📱",
    watSpeeltInKind: "FOMO. Social validation (likes). Dopamine. Groepsdruk (iedereen zit erop). Algoritme ontworpen voor verslaving.",
    watSpeeltInVader: "Bezorgdheid over content. Zorgen over zelfbeeld. Frustratie met constant gedoe.",
    psychologie: "Social media is ontworpen om betrokkenheid te maximaliseren = addiction. Het pre-tienerbrein kan dit niet zelf reguleren. Jij moet de grens zijn.",
    stappen: [
      "Monitoring: weet wat ze doen. Volg accounts. Check content.",
      "Grenzen: tijd limit (1u per dag?). Niet tijdens eten/huiswerk/bed.",
      "Praat over algoritmes, filters, unrealiteit. Media literacy."
    ],
    voorbeeldzin: "Social media mag, maar met grenzen. Max 1u. Ik monitor wat je ziet. Devices uit bij eten.",
    valkuil: "Geen monitoring 'want privacy' - ze zijn te jong voor ongelimiteerde online access.",
    skillLink: "Grenzen"
  },

  {
    id: "kind-zelfbeeld-problemen",
    ageGroup: "8-12",
    situatie: "Zelfbeeld en uiterlijk problemen",
    icon: "🪞",
    watSpeeltInKind: "Sociale vergelijking start. Media invloed (unrealistische body standards). Puberteit start (lichaam verandert). Peer comments.",
    watSpeeltInVader: "Verdriet om kind's onzekerheid. Woede naar cultuur/media. Handelingsverlegenheid (wat zeg ik?).",
    psychologie: "Body image issues starten vroeg. Jouw comments over eigen lichaam EN hun lichaam vormen hun self-image. Model self-acceptance.",
    stappen: [
      "NEVER comment op hun uiterlijk (gewicht, acne, etc). Focus op wat lichaam KAN.",
      "Model: praat positief over eigen lichaam. 'Mijn lijf is sterk!'",
      "Bij negatieve self-talk: valideer + reframe. 'Je vindt X lelijk. Ik zie Y (sterk/gezond/groeien).'"
    ],
    voorbeeldzin: "Iedereen heeft insecurities. Jouw lichaam is perfect zoals het is. Het groeit en verandert.",
    valkuil: "Zeggen 'Je bent mooi!' bij elke insecurity - leert dat uiterlijk = belangrijk voor jouw liefde.",
    skillLink: "Verbinding"
  },

  {
    id: "kind-concentratie-problemen",
    ageGroup: "8-12",
    situatie: "Concentratieproblemen bij school",
    icon: "🧠",
    watSpeeltInKind: "Mogelijk ADHD. Mogelijk slaaptekort. Mogelijk emotionele stress. Mogelijk ondergestimuleerd/verveeld.",
    watSpeeltInVader: "Bezorgdheid (is er iets mis?). Frustratie bij huiswerk. Onzekerheid (professional help?).",
    psychologie: "Meerdere oorzaken mogelijk. Observeer patroon. Is het ALTIJD of situationeel? Check basics: slaap, voeding, beweging, stress.",
    stappen: [
      "Basics check: slaapt genoeg? Beweegt genoeg? Gezond eten? Emotionele stress?",
      "Bij aanhouden: contact school. Observeren in verschillende contexten.",
      "Mogelijk assessment (ADHD, leerstoornissen). Professional help bij twijfel."
    ],
    voorbeeldzin: "Ik zie dat focussen moeilijk is. Laten we samen uitzoeken waarom. Misschien kan school helpen.",
    valkuil: "Straffen voor niet kunnen concentreren - als het neurologisch is, werkt dit niet en schaadt self-esteem.",
    skillLink: "Zelfregulatie"
  },

  {
    id: "kind-motivatie-verlies",
    ageGroup: "8-12",
    situatie: "Motivatie verlies voor alles",
    icon: "😴",
    watSpeeltInKind: "Mogelijk depressie (zeldzaam maar mogelijk). Mogelijk burn-out (te veel activiteiten). Mogelijk geen intrinsieke motivatie gevonden. Ontwikkelingsfase.",
    watSpeeltInVader: "Bezorgdheid en verdriet. Handelingsverlegenheid (push of loslaten?). Angst dat iets mis is.",
    psychologie: "Onderscheid: phase vs problem. Als het alles raakt EN langdurig (>2 weken), zoek professionele hulp. Anders: exploration.",
    stappen: [
      "Exploreer: 'Wat maakt dingen niet leuk meer?' Luister zonder oordeel.",
      "Check: depressie symptomen? Slaap/eet normaal? Sociaal nog contact?",
      "Bij twijfel: professionele hulp. Huisarts of schoolpsycholoog."
    ],
    voorbeeldzin: "Ik zie dat je nergens meer zin in hebt. Vertel, wat is er aan de hand?",
    valkuil: "Pushen zonder exploreren - mist mogelijk onderliggende depressie of burn-out.",
    skillLink: "Verbinding"
  },

  {
    id: "kind-angstig-bezorgd",
    ageGroup: "8-12",
    situatie: "Angstig en bezorgd gedrag",
    icon: "😰",
    watSpeeltInKind: "Toenemende awareness van wereld (nieuws, gevaren). Sociale angst ontwikkelt. Mogelijk genetische aanleg. Overload van informatie.",
    watSpeeltInVader: "Bezorgdheid (komt dit van mij?). Impuls om gerust te stellen. Verdriet om kind's zorgen.",
    psychologie: "Anxiety is meest voorkomende mental health issue bij kinderen. Valideren > bagatelliseren. Teach coping, don't eliminate fear.",
    stappen: [
      "Valideer: 'Je voelt je ongerust. Dat is rot.'",
      "Niet geruststellen met 'Het komt goed' - vaak niet geloofwaardig. Wel: 'We gaan dit samen aanpakken.'",
      "Teach coping: breathing, grounding. Exposure (gradueel), niet avoidance."
    ],
    voorbeeldzin: "Ik zie dat je je zorgen maakt. Angst is rot. Laten we samen kijken hoe je hiermee om kan gaan.",
    valkuil: "Vermijden van angstige situaties - bevestigt angst en maakt het groter.",
    skillLink: "Emotiecoaching"
  },

  {
    id: "kind-boos-thuiskomen",
    ageGroup: "8-12",
    situatie: "Boos en chagrijnig thuiskomen van school",
    icon: "😠",
    watSpeeltInKind: "Masking hele dag op school (sociaal, academisch). Thuis = veilig om te ontladen. Energie depleted. Mogelijk incident op school.",
    watSpeeltInVader: "Gekwetstheid ('Waarom tegen MIJ?'). Frustratie. Impuls om te corrigeren of vragen te stellen.",
    psychologie: "'After school restraint collapse': kinderen houden zich in op school, ontladen thuis omdat thuis veilig is. Dit is compliment, geen probleem.",
    stappen: [
      "Accepteer humeur. 'Welkom thuis.' Niet direct vragen hoe dag was.",
      "Geef ruimte. Snack + rust. 30-60 min decompression.",
      "Later: 'Hoe was je dag?' Maar accept als ze niet willen praten."
    ],
    voorbeeldzin: "Hey. Ik zie dat je moe bent. Hier is snack. Even rustig?",
    valkuil: "Direct vragen 'HOE WAS JE DAG?!' - overload als ze al overprikkeld zijn.",
    skillLink: "Aanwezigheid"
  },

  {
    id: "kind-grenzen-negeren",
    ageGroup: "8-12",
    situatie: "Geen respect voor grenzen",
    icon: "🚧",
    watSpeeltInKind: "Autonomie development. Testen van grenzen is natuurlijk. Kijken wat ze weg kunnen komen. Peers modeling grenzeloos gedrag.",
    watSpeeltInVader: "Frustratie en gevoel van machteloosheid. 'Respecteer mij!' gevoel. Twijfel aan autoriteit.",
    psychologie: "Grenzen testen = healthy development. Jouw respons bepaalt of ze blijven testen of leren accepteren. Consistency is alles.",
    stappen: [
      "Duidelijke grens vooraf: 'De regel is...'",
      "Bij overtreding: consequentie. Direct, kort, consistent.",
      "Geen lange discussies. 'Regel is regel. Consequentie volgt.'"
    ],
    voorbeeldzin: "De regel was duidelijk. Je hebt gekozen om deze te breken. Dit is de consequentie.",
    valkuil: "Lange discussies of inconsistent toepassen - leert dat grenzen negotiable zijn.",
    skillLink: "Grenzen"
  },

  {
    id: "kind-vergeetachtig-slordig",
    ageGroup: "8-12",
    situatie: "Vergeetachtig en slordig",
    icon: "🤦",
    watSpeeltInKind: "Uitvoerende functies nog ontwikkelend. Working memory beperkt. Prioriteiten anders (spel > spullen). Mogelijk ADHD.",
    watSpeeltInVader: "Frustratie ('Hoevaak moet ik dit zeggen?!'). Vermoeidheid van constant achter ze aan. Bezorgdheid.",
    psychologie: "Executieve functies ontwikkelen tot in twintigers. Externe structuur helpen tot internal ontwikkelt. Teach systems.",
    stappen: [
      "Externe structuur: checklists, visual reminders, alarms.",
      "Natural consequences: vergeten zwemspullen = niet zwemmen. Niet rescuen.",
      "Teach: 'Waar leg je schooltas altijd? Check je lijstje?'"
    ],
    voorbeeldzin: "Je vergeet vaak spullen. Dat is frustrerend. Laten we een systeem maken: checklist bij deur?",
    valkuil: "Constant rescuen (spullen brengen) - neemt consequentie weg en leert niks.",
    skillLink: "Zelfregulatie"
  },

  {
    id: "kind-niet-praten-gevoelens",
    ageGroup: "8-12",
    situatie: "Wil niet praten over gevoelens",
    icon: "🤐",
    watSpeeltInKind: "Geen vocabulaire voor emoties. Mogelijk schaamte. Mannelijke socialisatie ('niet janken'). Autonomie ('Mijn zaken').",
    watSpeeltInVader: "Bezorgdheid (wat speelt er?). Handelingsverlegenheid (hoe krijg ik hem aan praten?). Eigen discomfort met emoties?",
    psychologie: "Forceren praten werkt niet. Creëer veiligheid, wees beschikbaar, model zelf emotional openness. Praten komt.",
    stappen: [
      "Niet forceren. 'Je hoeft niet te praten. Ik ben er als je wilt.'",
      "Naast elkaar activiteiten (wandelen, gamen samen) - makkelijker praten dan face-to-face.",
      "Model ZELF: 'Ik voelde me vandaag... Heb jij dat ook?'"
    ],
    voorbeeldzin: "Ik zie dat er iets is. Je hoeft niet te praten. Maar als je wilt, ik luister. Geen oordeel.",
    valkuil: "Pushen en vragen stellen - creëert verdere afstand en afschermen.",
    skillLink: "Verbinding"
  },

  // ═══════════════════════════════════════════════════════════════
  // 13-18 JAAR (25 situaties)
  // ═══════════════════════════════════════════════════════════════
  
  {
    id: "tiener-geen-communicatie",
    ageGroup: "13-18",
    situatie: "Geen communicatie meer",
    icon: "🚫",
    watSpeeltInKind: "Individuatieproces - afstand nemen van ouders is passend bij de ontwikkelingsfase. Autonomie zoeken. Privacybehoefte. Leeftijdsgenoten worden belangrijker.",
    watSpeeltInVader: "Verdriet om verlies van nabijheid. Onzekerheid ('doe ik iets fout?'). Frustratie. Gevoel van buitensluitig.",
    psychologie: "Separatie is gezond en nodig. Jouw taak: beschikbaar blijven zonder te pushen. Veilige haven, niet gevangenis.",
    stappen: [
      "Accepteer nieuwe fase. 'Ik merk dat je meer afstand neemt. Dat hoort bij je leeftijd.'",
      "Blijf beschikbaar zonder pushen. Zijdelingse momenten (auto, voor TV, wandelen).",
      "Interesseer je zonder te verhoren. 'Hoe was je dag?' - accepteer kort antwoord."
    ],
    voorbeeldzin: "Ik merk dat je liever op je kamer bent. Dat is oké. Ik ben er als je wilt praten.",
    valkuil: "Geforceerde 'quality time' of verhoren - pusht verder weg en creëert weerstand.",
    skillLink: "Verbinding"
  },

  {
    id: "tiener-schermtijd-verslaving",
    ageGroup: "13-18",
    situatie: "Schermtijd verslaving",
    icon: "📱",
    watSpeeltInKind: "Dopaminepieken van social media/gaming. FOMO. Sociale verbinding via scherm. Ontwikkelende impulscontrole. Escapisme van stress.",
    watSpeeltInVader: "Bezorgdheid over gezondheid/school. Machteloosheid ('Hoe stop ik dit?'). Conflict tussen grenzen en autonomie.",
    psychologie: "Het tienerbrein is extra gevoelig voor beloningen en minder voor langetermijnconsequenties. Externe grenzen zijn nodig terwijl zelfregulatie zich ontwikkelt.",
    stappen: [
      "Gezamenlijke afspraken: 'Laten we samen kijken wat gezond is.' Betrek de tiener.",
      "Praktische grenzen: telefoon uit kamer 's nachts, geen schermen tijdens eten, wifitijd.",
      "Focus op waarom: 'Ik zie dat je moe bent, school achteruitgaat. Bezorgd om jou.'"
    ],
    voorbeeldzin: "Ik maak me zorgen. Je bent constant op je telefoon, schoolwerk lijdt. Laten we afspraken maken die werken voor ons beiden.",
    valkuil: "Telefoon afpakken zonder gesprek - creëert extreme weerstand en stiekem gedrag.",
    skillLink: "Grenzen"
  },

  {
    id: "tiener-huiswerk-boycot",
    ageGroup: "13-18",
    situatie: "Huiswerk boycotten",
    icon: "📚",
    watSpeeltInKind: "Problemen met uitvoerende functies. Overweldiging. Faalangst ('Als ik niet probeer, kan ik niet falen'). Gebrek aan intrinsieke motivatie. Depressie?",
    watSpeeltInVader: "Angst voor toekomst. Frustratie ('je gooit je kansen weg!'). Machteloosheid. Spanning tussen helpen en overname.",
    psychologie: "Straf werkt niet bij tieners - creëert oppositie. Begrijp het onderliggende probleem: is het luiheid of worsteling? Dat maakt veel verschil.",
    stappen: [
      "Exploreer zonder oordeel: 'Ik zie je huiswerk niet doen. Wat maakt het moeilijk?'",
      "Differentieer: is het organisatie? Begrip? Motivatie? Verschillende oplossingen.",
      "Natuurlijke consequenties: slechte cijfers zijn het gevolg. Hulp aanbieden, niet overnemen."
    ],
    voorbeeldzin: "Je cijfers gaan achteruit. Ik wil begrijpen wat er speelt. Vind je het moeilijk, saai, of iets anders?",
    valkuil: "Straffen of preken over toekomst - verhoogt weerstand en helpt niet met het daadwerkelijke probleem.",
    skillLink: "Autonomie"
  },

  {
    id: "tiener-uitgaan-grenzen",
    ageGroup: "13-18",
    situatie: "Uitgaan en grenzen testen",
    icon: "🌃",
    watSpeeltInKind: "Groepsdruk. Behoefte aan acceptatie. Risico nemen (tienerbrein zoekt risico). Autonomie. FOMO. Experimenteren met identiteit.",
    watSpeeltInVader: "Angst voor gevaar (drank, drugs, seks, verkeer). Spanning tussen vrijheid geven en beschermen. Eigen jeugdherinneringen als trigger.",
    psychologie: "Gecontroleerd risico nemen is passend bij de ontwikkelingsfase. Totale controle = rebellie. Geleidelijke vrijheid met vangnet.",
    stappen: [
      "Duidelijke afspraken vooraf: tijd thuis, waar, met wie, tussendoor even melden. Betrek de tiener bij de beslissing.",
      "Vangnet: 'Bel me altijd, zonder vragen, als je me nodig hebt.' Taxigeld meegeven.",
      "Consequenties bij breken afspraak: verlies van privilege, niet oordeel over kind."
    ],
    voorbeeldzin: "Ik vertrouw je. EN ik maak me zorgen. Daarom afspraken: thuis om 24:00, locatie delen, nuchter thuiskomen.",
    valkuil: "Te strak of te los - beide escaleren. Te strak = rebellie/stiekem gedrag. Te los = onveilig.",
    skillLink: "Grenzen"
  },

  {
    id: "tiener-vrienden-zorgwekkend",
    ageGroup: "13-18",
    situatie: "Vriendengroep zorgwekkend",
    icon: "👥",
    watSpeeltInKind: "Identiteitsvorming via leeftijdsgenoten. Behoefte om erbij te horen (overweldigend sterk). Experimenteren met 'wie ben ik'. Afstand van ouders = naar leeftijdsgenoten.",
    watSpeeltInVader: "Angst dat verkeerde invloed schade doet. Machteloosheid (kan vrienden niet kiezen). Conflict tussen waardering kind en zorgen.",
    psychologie: "Verbieden van vrienden = meestal tegenovergestelde effect. Beter: waarden versterken, open deur houden, vrienden beter leren kennen.",
    stappen: [
      "Spreek zorgen uit zonder oordeel: 'Ik merk dat je tijd doorbrengt met [naam]. Vertel eens over hem/haar?'",
      "Vrienden uitnodigen bij jou thuis - observeren, leren kennen, relatie opbouwen.",
      "Versterken waarden zonder te verbieden: 'In onze familie...' niet 'Jouw vrienden zijn...'"
    ],
    voorbeeldzin: "Ik zie dat [naam] belangrijk voor je is. Ik maak me wel zorgen om [specifiek gedrag]. Kunnen we praten?",
    valkuil: "Verbieden van vriendschap - creëert stiekem gedrag, beschadigt vertrouwen, en vaak sterker hechten aan vriend.",
    skillLink: "Verbinding"
  },

  {
    id: "tiener-slecht-humeur-constant",
    ageGroup: "13-18",
    situatie: "Slecht humeur constant",
    icon: "😤",
    watSpeeltInKind: "Hormonen, slaaptekort, stress (school/sociaal), ontwikkelende emotieregulatie, mogelijk depressie/angst. Overweldiging.",
    watSpeeltInVader: "Op eieren lopen. Irritatie. Verdriet ('Wat is er met mijn kind?'). Hulpeloosheid.",
    psychologie: "Het tienerbrein ondergaat massieve herstructurering. Emoties zijn intensiever, regulatie zwakker. Tijdelijk maar zware fase.",
    stappen: [
      "Niet persoonlijk nemen. Dit is hersenontwikkeling, niet afwijzing van jou.",
      "Kies je gevechten: als het niemand schaadt, laat het gaan. Focus op het essentiële.",
      "Informeer zonder te pushen: 'Ik merk dat het zwaar is. Wil niet pushen maar ben er als je wilt praten.'"
    ],
    voorbeeldzin: "Ik zie dat je het moeilijk hebt. Dat is oké. Ik blijf van je houden, ook als je chagrijnig bent.",
    valkuil: "'Waarom ben je zo?' vragen of kritisch reageren - escaleert conflict en verergert humeur.",
    skillLink: "Emotiecoaching"
  },

  {
    id: "tiener-liegen-locatie",
    ageGroup: "13-18",
    situatie: "Liegen over waar ze zijn",
    icon: "🤥",
    watSpeeltInKind: "Autonomie willen + angst voor grenzen/consequenties. Niet per se slechte intentie maar vermijding van 'nee'. Groepsdruk.",
    watSpeeltInVader: "Vertrouwen geschonden. Angst ('Als ze hierover liegen, wat nog meer?'). Conflict tussen autonomie en veiligheid.",
    psychologie: "Liegen is vaak een symptoom: te strenge regels → liegen om vrijheid te krijgen. Pak de oorzaak aan (regels te streng?) niet alleen het symptoom.",
    stappen: [
      "Consequentie voor liegen: 'Liegen breekt vertrouwen. Consequentie: [verlies privilege].'",
      "Verken waarom: 'Waarom voelde je dat je moest liegen? Zijn de regels oneerlijk?'",
      "Herstel vertrouwen geleidelijk: 'Vertrouwen is geschonden maar kan hersteld worden. Door eerlijkheid, check-ins, consequent gedrag.'"
    ],
    voorbeeldzin: "Je hebt gelogen over waar je was. Dat is niet oké. Laten we praten: waarom voelde je dat nodig?",
    valkuil: "Zware straf zonder gesprek - adresseert niet waarom er gelogen werd. Kan escaleren.",
    skillLink: "Herstel"
  },

  {
    id: "tiener-relatie-drama",
    ageGroup: "13-18",
    situatie: "Relatie drama",
    icon: "💔",
    watSpeeltInKind: "Eerste ervaringen met liefde en pijn. Emoties zijn overweldigend (eerste liefdesverdriet voelt als einde van de wereld). Hormonen versterken alles.",
    watSpeeltInVader: "Neiging om te minimaliseren ('Je bent 15, je vindt wel een ander'). Handelingsverlegenheid. Beschermen willen tegen pijn.",
    psychologie: "Voor hen is dit echt, intens, significant. Valideer de pijn zonder te minimaliseren. Eerste liefdesverdriet vormt toekomstige relaties.",
    stappen: [
      "Valideer: 'Ik zie dat dit echt pijn doet. Het is oké om verdrietig te zijn.'",
      "Aanwezig zijn: niet proberen op te lossen, gewoon er zijn. 'Wil je praten of wil je rust?'",
      "Geen 'ik zei het toch' of 'je vindt wel een ander' - ontzettend invaliderend."
    ],
    voorbeeldzin: "Dit is zwaar voor je. Liefdesverdriet doet pijn, ook al ben je jong. Ik ben er voor je.",
    valkuil: "Minimaliseren ('Je bent 15, dit is niet echt liefde') - invalideert hun ervaring compleet.",
    skillLink: "Emotiecoaching"
  },

  {
    id: "tiener-experimenteren-substances",
    ageGroup: "13-18",
    situatie: "Experimenteren met alcohol/drugs",
    icon: "🍺",
    watSpeeltInKind: "Risico nemen, groepsdruk, nieuwsgierigheid, ontsnapping (stress/angst), rebellie, brein zoekt nieuwe prikkels en onderschat risico.",
    watSpeeltInVader: "Paniek. Angst voor verslaving. Eigen geschiedenis? Conflict tussen realistische aanpak en nultolerantie.",
    psychologie: "Alleen onthouding prediken werkt niet goed. Schadebeperking + open communicatie werkt beter. Ze zullen experimenteren - begeleid veilig.",
    stappen: [
      "Open gesprek zonder oordeel: 'Vertel me wat je hebt geprobeerd. Ik beloof niet meteen boos te worden.'",
      "Informeer over risico's zonder te prediken: hersenen ontwikkelen tot 25, impact op school/sport.",
      "Duidelijke grenzen: 'Ik kan experimenteren niet stoppen maar WEL regels stellen: niet rijden, bel me als je vastzit, weet wat je neemt.'"
    ],
    voorbeeldzin: "Ik ben niet blij hiermee EN ik begrijp de nieuwsgierigheid. Laten we eerlijk praten over veilig versus onveilig.",
    valkuil: "Extreme straf zonder gesprek - duwt het ondergronds en snijdt communicatie volledig af.",
    skillLink: "Verbinding"
  },

  {
    id: "tiener-geen-respect-regels",
    ageGroup: "13-18",
    situatie: "Geen respect voor regels",
    icon: "🚧",
    watSpeeltInKind: "Autonomie zoeken. Grenzen testen (passend bij de ontwikkelingsfase). Rebellie tegen waargenomen onrechtvaardig gezag. Impulsiviteit.",
    watSpeeltInVader: "Gevoel van gebrek aan respect. Frustratie. Autoriteit ondermijnd. Angst dat het uit de hand loopt zonder grenzen.",
    psychologie: "Autoritair = rebellie. Permissief = chaos. Autoritatief (stevig + warm) = beste uitkomsten. Regels + uitleg + respect.",
    stappen: [
      "Leg uit waarom regels bestaan: niet 'omdat ik het zeg' maar een rationele reden.",
      "Enige onderhandeling: 'Wat vind jij eerlijk?' Betrek bij beslissingen waar mogelijk.",
      "Duidelijke consequenties, consequent: 'Dit is de regel. Als je die breekt, dan [consequentie].'"
    ],
    voorbeeldzin: "Regels zijn er om je te beschermen, niet om je te controleren. Laten we samen kijken welke eerlijk zijn.",
    valkuil: "Dictatoriale aanpak zonder uitleg - maximaliseert rebellie en vernietigt de relatie.",
    skillLink: "Grenzen"
  },

  {
    id: "tiener-financieel-onverantwoordelijk",
    ageGroup: "13-18",
    situatie: "Financieel onverantwoordelijk",
    icon: "💸",
    watSpeeltInKind: "Uitvoerende functies voor budgetteren nog niet ontwikkeld. Impulsiviteit. Consumptiedruk van leeftijdsgenoten. Geen besef van de waarde van geld (altijd alles beschikbaar?).",
    watSpeeltInVader: "Frustratie ('Geld groeit niet op bomen!'). Bezorgdheid over toekomstige financiële onafhankelijkheid.",
    psychologie: "Omgaan met geld is een aangeleerde vaardigheid, niet aangeboren. Laat natuurlijke consequenties van te veel uitgeven ervaren binnen een veilig kader.",
    stappen: [
      "Vast budget: 'Dit is jouw geld voor deze maand. Als het op is, is het op. Geen extra.'",
      "Laat ze fouten maken: alles uitgegeven in week 1? Jammer, geen geld rest van de maand.",
      "Leer budgetteren: apps, envelopmethode. 'Eerst de basis, dan leuke dingen.'"
    ],
    voorbeeldzin: "Geld is op deze maand? Dat is jammer. Volgende maand kun je anders budgetteren. Geen extra geld.",
    valkuil: "Constant redden - neemt natuurlijke consequenties weg en leert 'papa/mama lost het op'.",
    skillLink: "Autonomie"
  },

  {
    id: "tiener-studiekeuze-stress",
    ageGroup: "13-18",
    situatie: "Studiekeuze stress",
    icon: "🎓",
    watSpeeltInKind: "Overweldiging (te veel opties). Angst om verkeerde keuze. Externe druk (ouders/leeftijdsgenoten/maatschappij). Identiteit nog in vorming ('wie ben ik?').",
    watSpeeltInVader: "Eigen ambities projecteren? Angst dat ze verkeerde keuze maken. Spanning tussen begeleiden en controleren.",
    psychologie: "Hun leven, hun keuze. Jouw taak: ondersteunen, niet sturen. De meeste mensen wisselen meerdere keren van studie/carrière - er is geen ene perfecte keuze.",
    stappen: [
      "Ontdek interesses: 'Wat doe je waarin je de tijd vergeet?' Niet 'Wat wil je worden?'",
      "Realiteitscheck: open dagen, praten met studenten, stages.",
      "Geruststellen: 'Er is geen verkeerde keuze. Je kunt altijd switchen. Ontdekken is onderdeel van het proces.'"
    ],
    voorbeeldzin: "Ik zie dat je gestrest bent over je studiekeuze. Weet dat er geen perfecte keuze is. We puzzelen dit samen uit.",
    valkuil: "Pushen naar specifieke richting ('Dokter worden!') - het is HUN leven, niet het jouwe.",
    skillLink: "Autonomie"
  },

  {
    id: "tiener-examen-angst",
    ageGroup: "13-18",
    situatie: "Examen angst",
    icon: "📝",
    watSpeeltInKind: "Faalangst. Perfectionisme. Hoge druk. Angst om ouders teleur te stellen. Blokkade tijdens toets (blackout).",
    watSpeeltInVader: "Bezorgdheid. Handelingsverlegenheid (hoe help ik?). Mogelijk eigen schoolstress projectie.",
    psychologie: "Druk van ouders kan angst verergeren. De boodschap 'Ik hou van je ongeacht cijfers' is cruciaal voor welzijn.",
    stappen: [
      "Maak het expliciet: 'Cijfers zijn belangrijk maar niet belangrijker dan jou. Ik hou van je bij een 5 evenveel als bij een 10.'",
      "Praktische hulpmiddelen: studietechnieken, ademhalingsoefeningen, realistische planning.",
      "Herkaderen van falen: 'Een slecht cijfer = informatie, niet bewijs van falen. Wat kunnen we hiervan leren?'"
    ],
    voorbeeldzin: "Ik zie dat je gestrest bent. Weet dat één examen je toekomst niet bepaalt. Wat heb je nodig om je beter te voelen?",
    valkuil: "Extra druk toevoegen ('Je MOET goed scoren!') - verergert angst en paradoxaal genoeg ook de prestatie.",
    skillLink: "Emotiecoaching"
  },

  {
    id: "tiener-social-media-negativiteit",
    ageGroup: "13-18",
    situatie: "Social media negativiteit",
    icon: "📱",
    watSpeeltInKind: "Vergelijkingsvalkuil, cyberpesten, FOMO, onrealistische normen, validatiezoeken through likes. Dopamineverslaving.",
    watSpeeltInVader: "Machteloosheid (hoe bescherm ik?). Bezorgdheid over zelfbeeld. Conflict tussen ban social media en realiteit.",
    psychologie: "De geest van social media is uit de fles. Volledig verbieden kan niet. Beter: mediawijsheid, zelfbewustzijn, grenzen.",
    stappen: [
      "Bespreek de vergelijkingsvalkuil: 'Mensen delen hoogtepunten, niet de werkelijkheid. Wat je ziet ≠ het hele verhaal.'",
      "Let op impact op welzijn: 'Hoe voel je je na het scrollen? Energieker of leeggelopen?'",
      "Schermtijdgrenzen: geen telefoon 's nachts, apps die limiteren, techvrije momenten."
    ],
    voorbeeldzin: "Social media kan zwaar zijn. Het toont niet de hele waarheid. Hoe voel jij je erover?",
    valkuil: "Volledig verbod - onrealistisch en leidt tot sociaal isolement. Ze zullen toch toegang vinden.",
    skillLink: "Zelfregulatie"
  },

  {
    id: "tiener-zelfbeeld-uiterlijk",
    ageGroup: "13-18",
    situatie: "Zelfbeeld en uiterlijk obsessie",
    icon: "🪞",
    watSpeeltInKind: "Body changes (puberteit), comparison met peers/media, identiteitsvorming. Extern validatiezoeken. Mogelijk lichaamsdysmorfie.",
    watSpeeltInVader: "Bezorgdheid over eating disorder. Verdriet dat ze zichzelf niet zien zoals jij ze ziet. Handelingsverlegenheid.",
    psychologie: "Uiterlijk is extreem belangrijk in de adolescentie (identiteitsvorming). Valideer gevoelens, richt de aandacht op de hele persoon, geef het goede voorbeeld met een gezonde relatie tot je eigen lichaam.",
    stappen: [
      "Valideer zonder te fixen: 'Ik hoor dat je onzeker bent over [aspect]. Dat klinkt zwaar.'",
      "Focus op functie boven vorm: 'Je lichaam is sterk, gezond, capabel' in plaats van 'Je bent mooi'.",
      "Let op JOUW taalgebruik: geen opmerkingen over je eigen lichaam of dat van anderen. Wees het voorbeeld van acceptatie."
    ],
    voorbeeldzin: "Ik zie dat je worstelt met hoe je eruitziet. Je bent zoveel meer dan je uiterlijk. Maar ik hoor dat dit moeilijk is.",
    valkuil: "'Je bent perfect!' - invalideert hun ervaring. Of: 'Dat valt wel mee' - dismissive.",
    skillLink: "Emotiecoaching"
  },

  {
    id: "tiener-somberheid-depressie",
    ageGroup: "13-18",
    situatie: "Somberheid/depressieve signalen",
    icon: "😔",
    watSpeeltInKind: "Klinische depressie, situationele depressie (verbroken relatie, stress), identiteitscrisis, hormonale veranderingen, sociale isolatie, mogelijk trauma.",
    watSpeeltInVader: "Angst. Machteloosheid ('Hoe help ik?'). Mogelijk ontkenning ('Het gaat wel over'). Stigma rondom mentale gezondheid.",
    psychologie: "Depressie bij tieners is ECHT en SERIEUS. Niet 'een fase'. Professionele hulp is vaak nodig. Jouw steun is cruciaal maar alleen niet genoeg.",
    stappen: [
      "Erken: 'Ik zie dat je het zwaar hebt. Dit is meer dan normaal tienerchagrijn. Ik maak me zorgen.'",
      "Stel professionele hulp voor: 'Laten we met iemand praten die hierin gespecialiseerd is. Therapeut, schoolcounselor.'",
      "Blijf verbinding maken zonder te pushen. Kleine momenten tellen. Lichaamsbeweging helpt (endorfine)."
    ],
    voorbeeldzin: "Ik zie dat je echt worstelt. Dit gaat voorbij normale ups en downs. Ik wil je helpen - laten we professionele ondersteuning zoeken.",
    valkuil: "'Trek je er maar overheen' of 'Anderen hebben het zwaarder' - extremely invalidating en gevaarlijk.",
    skillLink: "Emotiecoaching"
  },

  {
    id: "tiener-agressief-intimiderend",
    ageGroup: "13-18",
    situatie: "Agressief of intimiderend gedrag",
    icon: "😡",
    watSpeeltInKind: "Problemen met woederegulatie. Mogelijk trauma. Aangeleerd gedrag (voorgeleefd?). Hormonen. Machteloosheid → controle via intimidatie.",
    watSpeeltInVader: "Angst (fysiek bang?). Faalgevoel ('Waar ging het mis?'). Eigen getriggerd trauma.",
    psychologie: "Agressie is meestal een symptoom, niet het probleem zelf. Wat zit eronder? Angst, pijn, machteloosheid? Pak de oorzaak aan.",
    stappen: [
      "Veiligheid eerst: 'Ik voel me niet veilig als je [gedrag]. We praten later.'",
      "Als het rustig is, verken: 'Wat gebeurde er voor je boos werd? Wat had je nodig?'",
      "Duidelijke consequenties: 'Agressie is niet oké. Consequentie is [X]. En: we zoeken hulp - therapie.'"
    ],
    voorbeeldzin: "Jouw woede is begrijpelijk. Hoe je het uit = niet oké. Laten we betere manieren vinden.",
    valkuil: "Tegenagressie of een schreeuwpartij - escaleert en laat precies het gedrag zien dat je wilt stoppen.",
    skillLink: "Grenzen"
  },

  {
    id: "tiener-volledig-terugtrekken",
    ageGroup: "13-18",
    situatie: "Volledig terugtrekken",
    icon: "🚪",
    watSpeeltInKind: "Depressie, sociale angst, trauma, overwhelm, identity crisis, conflict avoidance, gaming/internet addiction.",
    watSpeeltInVader: "Bezorgdheid (wat gebeurt er?). Afwijzing gevoel. Machteloosheid. Angst voor escalatie.",
    psychologie: "Volledig terugtrekken is een alarmsignaal - niet normaal tienergedrag. Professionele beoordeling is nodig. Wacht niet.",
    stappen: [
      "Spreek zorgen uit zonder beschuldiging: 'Ik merk dat je veel alleen bent. Ik maak me zorgen. Wat is er aan de hand?'",
      "Niet forceren maar blijven proberen: 'Je hoeft niet te praten, maar ik blijf het proberen. Omdat ik om je geef.'",
      "Zoek professionele hulp: therapeut, schoolcounselor. Dit overstijgt normaal ouderschap."
    ],
    voorbeeldzin: "Ik zie dat je je afsluit. Dat baart me zorgen. Ik ga niet weg maar ik wil je helpen. Laten we hulp zoeken.",
    valkuil: "'Doe de deur open!' of force interactie - pusht verder weg. But also: niet accepteren als 'phase'.",
    skillLink: "Verbinding"
  },

  {
    id: "tiener-niet-thuis-eten",
    ageGroup: "13-18",
    situatie: "Niet meer thuis eten",
    icon: "🍽️",
    watSpeeltInKind: "Autonomie (eten met vrienden), druk schema (sport, activiteiten), sociale ongemakkelijkheid (eten met familie = ongemakkelijk), mogelijk eetstoornis.",
    watSpeeltInVader: "Verdriet om verlies van gezinsmoment. Bezorgdheid over voeding. Afwijzingsgevoel.",
    psychologie: "Soms afwezig is normaal (druk schema), maar compleet vermijden kan een signaal zijn. Balans tussen autonomie respecteren en gezinsverbinding.",
    stappen: [
      "Eén verplichte gezinsmaaltijd per week: 'Zondagavond eten we samen. Staat vast. Rest van de week flexibel.'",
      "Vraag waarom: 'Ik mis je bij het eten. Wat maakt het moeilijk?' Echt luisteren.",
      "Bij vermoeden van eetstoornis: direct professionele hulp. Niet wachten."
    ],
    voorbeeldzin: "Ik mis je bij het eten. Ik begrijp dat je het druk hebt, maar één moment per week samen is belangrijk voor mij.",
    valkuil: "Dwingen om elke dag mee te eten - creëert verzet. Of volledig accepteren - verlies van belangrijk verbindingsmoment.",
    skillLink: "Verbinding"
  },

  {
    id: "tiener-dag-nacht-ritme",
    ageGroup: "13-18",
    situatie: "Dag-nacht ritme verstoord",
    icon: "🌙",
    watSpeeltInKind: "Biological shift (circadiaans ritme verplaatst later in puberteit). Gaming/screen. Stress/anxiety (slaap uitstel). School start te vroeg.",
    watSpeeltInVader: "Frustratie ('Lui!') zonder begrip biology. Bezorgdheid over gezondheid/school performance.",
    psychologie: "De slaap-waakcyclus van tieners verschuift van nature 2 uur later. School begint vaak biologisch te vroeg. Maar grenzen zijn nog steeds nodig.",
    stappen: [
      "Educate over biologie: 'Jouw brein werkt anders dan volwassene. Je wordt later moe.'",
      "Practical boundaries: geen screens 1u voor bed, consistent wake tijd weekends (max 2u verschil weekdag).",
      "Natural consequences: moe zijn = jouw probleem. Niet je wakker maken 5x."
    ],
    voorbeeldzin: "Ik begrijp dat je natuurlijk later moe wordt. We hebben nog wel school. Laten we realistic slaaproutine maken.",
    valkuil: "Labelen als 'lui' - het is biological. Maar ook: geen grenzen = chronisch slaaptekort.",
    skillLink: "Zelfregulatie"
  },

  {
    id: "tiener-risicogedrag",
    ageGroup: "13-18",
    situatie: "Risicogedrag",
    icon: "🛑",
    watSpeeltInKind: "Spanning zoeken (brein zoekt dit), consequenties onderschatten (prefrontale cortex nog niet volledig ontwikkeld), groepsdruk, gevoel van onkwetsbaarheid.",
    watSpeeltInVader: "Paniek. Angst voor permanente schade. Conflict tussen vrijheid en bescherming. Eigen jeugdherinneringen.",
    psychologie: "Je kunt niet alle risico's wegnemen (en dat moet je ook niet - het is een leerervaring). Maar je kunt het ombuigen naar veiliger risico: sport, avontuur, uitdagingen.",
    stappen: [
      "Kies je gevechten: onderscheid tussen riskant (leerkans) en gevaarlijk (directe schade).",
      "Bied alternatieven: 'Wil je adrenaline? Laten we skydiven/klimmen/racen in een begeleide setting.'",
      "Duidelijke consequenties bij gevaarlijk gedrag + leg uit waarom: 'Dit risico is te groot vanwege [permanente schade].'"
    ],
    voorbeeldzin: "Ik begrijp de behoefte aan spanning. Laten we manieren vinden die veiliger zijn maar nog steeds leuk.",
    valkuil: "Volledige lockdown - creëert stiekem gedrag. Of: 'Ja maar ik deed dit ook' - dat is geen argument.",
    skillLink: "Autonomie"
  },

  {
    id: "tiener-zorg-toekomst-angst",
    ageGroup: "13-18",
    situatie: "Overweldigende toekomst angst",
    icon: "😰",
    watSpeeltInKind: "Existentiële angst (klimaat, economie, oorlog). Prestatiedruk. Onzekere toekomst. Identiteit nog onduidelijk ('Wie word ik?'). Doomscrolling op social media.",
    watSpeeltInVader: "Eigen angst getriggerd. Handelingsverlegenheid (kan de toekomst niet fixen). Geruststelling willen geven maar niets kunnen beloven.",
    psychologie: "Deze generatie heeft unieke stressbronnen. Erkenning is cruciaal - 'Dit is echt, niet overdreven.' Focus op wat ze WEL kunnen beïnvloeden.",
    stappen: [
      "Valideer: 'Deze zorgen zijn terecht. De wereld is complex. Het is oké om bezorgd te zijn.'",
      "Herricht de focus: 'We kunnen niet alles fixen. Wat KUN je wél doen? Activisme, studie, vaardigheden.'",
      "Beperk doomscrolling: 'Nieuws is belangrijk maar niet 24/7. Gun jezelf pauze.'"
    ],
    voorbeeldzin: "De wereld voelt overweldigend. Jouw zorgen zijn reëel. Laten we focussen op wat je WEL kunt beïnvloeden.",
    valkuil: "'Maak je niet druk' of 'Het komt goed' - invalideert echte zorgen en voelt afwijzend.",
    skillLink: "Emotiecoaching"
  },

  {
    id: "tiener-privacy-conflict",
    ageGroup: "13-18",
    situatie: "Conflict over privacy",
    icon: "🔒",
    watSpeeltInKind: "Bij de leeftijd passende behoefte aan autonomie. Identiteitsvorming (ruimte nodig om te ontdekken). Loskomen van ouders. 'Mijn leven' gevoel.",
    watSpeeltInVader: "Spanning tussen vertrouwen en beschermen. 'Recht om te weten' gevoel. Bezorgdheid over wat ze verbergen.",
    psychologie: "Enige privacy is gezond en nodig. Volledige ondoorzichtigheid is problematisch. Zoek balans: privacy met verantwoordelijkheid.",
    stappen: [
      "Maak onderscheid: privégedachten/dagboek = van hen. Veiligheidszaken (waar ze zijn) = gedeelde informatie.",
      "Verdiende privacy: 'Als je vertrouwen bewijst, krijg je meer privacy. Als je liegt, vermindert de privacy.'",
      "Niet door kamer snuffelen tenzij er veiligheidszorgen zijn. 'Ik vertrouw je tot ik reden heb om dat niet te doen.'"
    ],
    voorbeeldzin: "Je hebt recht op privacy én ik moet je beschermen. Laten we grenzen vinden die voor ons beiden werken.",
    valkuil: "Constant snuffelen door telefoon/kamer - vernietigt vertrouwen volledig en leert ze slimmer te verbergen.",
    skillLink: "Autonomie"
  },

  {
    id: "tiener-geen-hulp-accepteren",
    ageGroup: "13-18",
    situatie: "Geen hulp accepteren",
    icon: "❌",
    watSpeeltInKind: "Schaamte ('Zwak zijn'). Autonomie ('Ik kan dit zelf'). Trots. Ontkenning van het probleem. Stigma rondom hulp vragen.",
    watSpeeltInVader: "Frustratie (ziet probleem, kind niet). Machteloosheid (kan niet forceren). Bezorgdheid dat de situatie escaleert.",
    psychologie: "Je kunt hulp niet afdwingen bij een tiener - werkt meestal averechts. Creëer een omgeving waar hulp vragen kracht is, niet zwakte.",
    stappen: [
      "Hulp als kracht presenteren: 'De slimste mensen vragen hulp. Niet zwakte maar wijsheid.'",
      "Verlaag de drempel: niet alleen 'therapie' maar ook mentor, coach, bijles. Maak het minder groot.",
      "Geef zelf het voorbeeld: 'Ik vraag ook hulp als ik ergens tegenaan loop. Bijvoorbeeld: [deel iets].'"
    ],
    voorbeeldzin: "Ik zie dat je worstelt. Hulp vragen = niet zwak maar dapper. Kunnen we samen kijken naar opties?",
    valkuil: "Forceren of ultimatums - creëert verzet. 'Je MOET naar therapie!' werkt niet bij tieners.",
    skillLink: "Verbinding"
  },

  {
    id: "tiener-verantwoordelijkheid-ontwijken",
    ageGroup: "13-18",
    situatie: "Verantwoordelijkheid ontwijken",
    icon: "🏃",
    watSpeeltInKind: "Uitvoerende functies in ontwikkeling. Excuses maken (gezichtsbehoud). Geen ervaring met consequenties (ouders redden altijd?). Overweldiging (te veel).",
    watSpeeltInVader: "Frustratie ('Neem verantwoordelijkheid!'). Bezorgdheid over toekomst ('Wordt dit een patroon?'). Verleiding om te redden.",
    psychologie: "Verantwoordelijkheid wordt geleerd door het ervaren van natuurlijke consequenties. Redden = leren voorkomen. Strenge liefde is nodig.",
    stappen: [
      "Stop met redden: project vergeten? Slecht cijfer. Ontbijt gemist? Honger. Was niet gedaan? Geen schone kleren.",
      "Duidelijke verwachtingen + natuurlijke consequenties: 'Dit is jouw verantwoordelijkheid. Als het niet gedaan wordt, dan [consequentie].'",
      "Nabespreken: 'Wat heb je geleerd? Wat doe je volgende keer anders?'"
    ],
    voorbeeldzin: "Je vergat je huiswerk. Dat is jouw verantwoordelijkheid. Ik red je niet. Wat ga je doen?",
    valkuil: "Constant redden met 'één keer nog' - neemt elke leerkans weg. Creëert aangeleerde hulpeloosheid.",
    skillLink: "Autonomie"
  }

];

/**
 * Geeft alle help situaties inclusief themed content als die actief zijn.
 */
export function getHelpSituations(activeThemes: ThemeTag[] = []): HelpSituation[] {
  if (activeThemes.length === 0) return HELP_SITUATIONS;
  const themed = [...BONUSKIND_HELP, ...GEDRAG_HELP, ...HOOGGEVOELIG_HELP]
    .filter(s => s.themes?.some(t => activeThemes.includes(t)));
  return [...HELP_SITUATIONS, ...themed];
}
