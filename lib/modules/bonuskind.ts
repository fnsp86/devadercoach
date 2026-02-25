import type { LearningModule, Skill } from "../types";

export const BONUSKIND_MODULES: LearningModule[] = [
  {
    id: "bonus_mod_1",
    skill: "Verbinding" as Skill,
    title: "Jij Mag Er Zijn — Als Bonusvader",
    description:
      "Je doet je best, maar soms voel je je een buitenstaander in je eigen huis. Ontdek hoe vertrouwen groeit met een bonuskind — en waarom geduld je grootste kracht is.",
    duration: "12-18 min",
    difficulty: "basis" as const,
    order: 1,
    themes: ["bonuskind", "samengesteld_gezin"],
    content: [
      // ── 1. Opening ────────────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Het voelt alsof je op een feest bent waar je niet bent uitgenodigd.",
        text: "Woensdagavond. Je zit aan tafel met je partner en haar zoon Jayden (8). Je hebt gekookt. Pasta, zijn lievelingseten — dat heb je onthouden. Jayden prikt in zijn bord. 'Mama maakt het anders.' Stilte. Je partner kijkt je aan, half verontschuldigend. Jij glimlacht. Maar van binnen krimpt iets.\n\nLater op de avond, als je Jayden welterusten wilt zeggen, draait hij zich om. 'Ik wil dat mama het doet.' De deur gaat dicht. Jij staat op de gang. Alleen.\n\nAls je dit herkent, dan weet je hoe het voelt. Die mengeling van willen, proberen en toch niet genoeg zijn. De onzekerheid: doe ik het goed? Mag ik überhaupt iets vinden? Ben ik hier welkom?\n\nJe bent niet de enige. En wat je voelt klopt. Bonusvader worden is een van de moeilijkste rollen in het ouderschap — juist omdat niemand je een handleiding geeft. Dit is die handleiding.",
      },
      // ── 2. De wetenschap ──────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Wat de wetenschap weet over samengestelde gezinnen",
        text: "Patricia Papernow, een van de belangrijkste onderzoekers op het gebied van stiefgezinnen, beschrijft in haar Stepfamily Cycle dat een samengesteld gezin gemiddeld vier tot zeven jaar nodig heeft om echt samen te groeien. Vier tot zeven jaar. Dat is geen falen — dat is normaal.\n\nHaar model laat zien dat elk samengesteld gezin drie grote fases doorloopt. Eerst de fantasiefase: alles voelt nieuw en hoopvol, je denkt dat liefde genoeg is. Dan de immersie: de realiteit dringt door, loyaliteitsconflicten ontstaan, het kind trekt zich terug of verzet zich. En pas daarna begint de actie: je vindt je plek, niet als vervanger van de biologische vader, maar als een eigen figuur in het leven van dit kind.\n\nJames Bray volgde in zijn Developmental Issues-onderzoek meer dan tweehonderd stiefgezinnen gedurende negen jaar. Zijn belangrijkste conclusie: stiefvaders die in het begin bewust een stapje terug doen — die eerst investeren in de relatie met het kind vóórdat ze een opvoedende rol aannemen — bouwen op de lange termijn de sterkste banden.\n\nMarvis Hetherington bevestigde dit in haar dertigjarig onderzoek: kinderen in samengestelde gezinnen hebben niet minder kans op een goede ontwikkeling, maar het vraagt om een ander tempo. De stiefouder die geduld heeft en de relatie voorrang geeft boven regels, scoort het beste op welzijn van het kind.\n\nKort gezegd: je hoeft niet meteen vader te zijn. Je moet eerst mens zijn. Iemand die er is, die betrouwbaar is, die niet wegloopt als het moeilijk wordt. De rest komt.",
      },
      // ── 3. Diagram: fases van bonding ─────────────────────────────
      {
        type: "diagram" as const,
        diagramTitle: "De drie fases van bonuskind-bonding",
        diagramData: [
          {
            emoji: "🌅",
            label: "De hoop (maand 0-6)",
            description:
              "Alles voelt veelbelovend. Je doet je best, het kind is beleefd, je denkt: dit gaat lukken. Maar de echte relatie is nog niet begonnen — jullie zijn nog gasten voor elkaar.",
          },
          {
            emoji: "🌊",
            label: "De realiteit (maand 6-24)",
            description:
              "Het kind trekt zich terug, test grenzen, of zegt dingen die pijn doen. Loyaliteitsconflicten duiken op. Jij voelt je buitengesloten. Dit is de moeilijkste fase — én de belangrijkste. Hier wordt vertrouwen geboren.",
          },
          {
            emoji: "🌱",
            label: "De groei (jaar 2-5+)",
            description:
              "Langzaam ontstaat er iets eigens. Geen kopie van de band met de biologische vader, maar iets van jullie. Eigen grappen, eigen rituelen, eigen momenten. Dit is de beloning van geduld.",
          },
        ],
      },
      // ── 4. Voorbeeld 1: loyaliteitsconflict ──────────────────────
      {
        type: "example" as const,
        situation:
          "Jayden (8) en jij zijn aan het voetballen in de tuin. Het gaat goed, hij lacht. Dan ineens, uit het niets: 'Jij bent mijn echte vader niet.' Hij kijkt je aan. Uitdagend. En bang tegelijk.",
        wrongApproach:
          "GEKWETST REAGEREN:\n\nJij voelt een steek. Je legt de bal neer.\n'Oké. Als je zo doet, dan spelen we niet meer.'\nJe loopt naar binnen. Jayden blijft alleen in de tuin staan.\n\nWat Jayden leert: als ik eerlijk ben over wat ik voel, loopt hij weg. Net als ik dacht.\n\nOf erger — je reageert defensief: 'Ik doe alles voor je en zo praat je tegen me?' Nu leert Jayden: mijn gevoelens zijn een probleem. Ik kan beter mijn mond houden.",
        rightApproach:
          "HET VERDRAGEN EN ERKENNEN:\n\nJij voelt de steek. Je ademt. Je legt de bal niet neer.\n'Dat klopt. Ik ben niet je echte vader.'\nStilte. Jayden kijkt je aan, verrast.\n'Ik ben Jayden's bonusvader. En ik vind het heel leuk om met je te voetballen.'\nJe schiet de bal naar hem. Hij vangt hem.\n'Jij bent.'\n\nHet spel gaat verder. Maar er is iets verschoven. Jayden testte en jij bent gebleven. Dat is alles wat hij nodig had.",
        explanation:
          "Wanneer een kind zegt 'jij bent mijn vader niet,' is dat bijna nooit een aanval. Het is een loyaliteitstest. Het kind voelt zich verscheurd tussen de liefde voor de biologische vader en de groeiende band met jou. Door het te bevestigen in plaats van te ontkennen — 'dat klopt, ik ben niet je vader' — neem je de druk weg. Je laat zien: je hoeft niet te kiezen. Er is plek voor allebei. Papernow noemt dit 'holding the middle ground': de ruimte vasthouden zonder te trekken.",
      },
      // ── 5. Co-ouderschap en twee huishoudens ─────────────────────
      {
        type: "text" as const,
        heading: "Twee huizen, één kind",
        text: "Een van de lastigste aspecten van bonusvader zijn is de onzichtbare derde aan tafel: de biologische vader. Misschien is hij betrokken en aanwezig, misschien afwezig, misschien conflictueus. Hoe dan ook — hij is er. In de verhalen van het kind, in de regels van het andere huis, in de weekenden dat je stiefkind er niet is.\n\nGanong en Coleman, die decennialang samengestelde gezinnen bestudeerden, ontdekten dat de houding van de stiefvader ten opzichte van de biologische vader een van de sterkste voorspellers is voor het welzijn van het kind. Kort gezegd: als jij respectvol praat over de biologische vader — ook als je het moeilijk vindt — voelt het kind zich veilig bij jou.\n\nDat betekent niet dat je het overal mee eens hoeft te zijn. Het betekent dat je nooit de andere ouder afkraakt waar het kind bij is. Nooit. Ook niet subtiel. Kinderen voelen het. En ze kiezen niet — ze splijten. Ze verliezen een stuk van zichzelf elke keer dat ze het gevoel hebben dat ze partij moeten kiezen.\n\nPraktisch betekent dit:\n\n1. Praat neutraal of positief over de biologische vader waar het kind bij is. 'Bij papa doen jullie dat anders? Leuk.' Geen oordeel, geen zucht, geen oogrol.\n\n2. Laat het kind vertellen over het andere huis zonder te verhoren. 'Hoe was het bij papa?' is genoeg. Niet doorvragen met een agenda.\n\n3. Accepteer dat de regels in twee huizen anders zijn. Dat is verwarrend voor een kind, maar niet schadelijk — zolang het kind niet het gevoel heeft dat het ene huis 'goed' is en het andere 'fout.'\n\n4. Bespreek frustraties over de andere ouder met je partner, niet met het kind. Het kind is geen boodschapper, geen bondgenoot, geen scheidsrechter.",
      },
      // ── 6. Voorbeeld 2: discipline als bonusvader ────────────────
      {
        type: "example" as const,
        situation:
          "Emma (10) gooit haar jas op de grond, laat haar bord op tafel staan en loopt zonder iets te zeggen naar boven. Je partner is er niet. Jij zit alleen met de rommel — en de vraag: mag ik hier iets van zeggen?",
        wrongApproach:
          "DIRECT CORRIGEREN ALS OUDER:\n\nJij roept naar boven: 'Emma! Kom terug en ruim je bord op. Zo gaan we hier niet met spullen om.'\nEmma, vanuit haar kamer: 'Jij hebt niks over mij te zeggen!'\nJij, harder: 'Zolang je in dit huis woont, gelden er regels.'\nDeur slaat dicht.\n\nJij had gelijk over de rommel. Maar je hebt het gevecht aangegaan op een terrein waar je nog geen gezag hebt. Emma voelt het als een inbreuk: wie ben jij om mij de les te lezen?",
        rightApproach:
          "DE ZACHTE GRENS:\n\nJij ziet de rommel. Je ademt. Je loopt naar boven en klopt.\n'Hé Emma. Ik ga zo de keuken opruimen. Zou je je bord nog even mee naar beneden willen nemen?'\nEmma kijkt op. 'Uh... ja, zo.'\nVijf minuten later staat ze in de keuken. Ze pakt haar bord. Geen strijd.\n\nJij hebt dezelfde boodschap gegeven — ruim je spullen op — maar als verzoek in plaats van bevel. Je hebt de grens gesteld zonder de relatie te beschadigen.",
        explanation:
          "Bray's onderzoek is hier glashelder: stiefouders die in de eerste twee jaar strenge discipline toepassen, ondervinden meer weerstand en bouwen minder verbinding. Dat betekent niet dat je alles moet accepteren. Het betekent dat je grenzen stelt via je partner — zij is de primaire opvoeder — en dat jij je eigen gezag langzaam opbouwt via de relatie. Een verzoek in plaats van een bevel. Een vraag in plaats van een eis. Dezelfde boodschap, totaal andere uitkomst.",
      },
      // ── 7. Toolkit ────────────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Je toolkit als bonusvader",
        text: "1. Denk in jaren, niet in weken. Papernow zegt: vier tot zeven jaar. Dat is je horizon. Elke week dat je er bent, betrouwbaar en geduldig, is een week die telt. Niet omdat het kind het zegt. Maar omdat het kind het voelt. Laat het tempo los.\n\n2. Bouw eerst de relatie, dan de rol. Wees eerst een veilige volwassene: iemand die luistert, die er is, die niet wegloopt. Discipline en regels komen later — als het kind jou heeft toegelaten. Niet eerder. Probeer de eerste zes tot twaalf maanden vooral leuk en betrouwbaar te zijn.\n\n3. Praat nooit negatief over de biologische vader. Nooit. Ook niet als het kind het zelf doet. 'Ik hoor dat je boos bent op je vader. Dat mag.' Punt. Jij bent het veilige midden, niet de scheidsrechter.\n\n4. Maak iets dat alleen van jullie is. Eén ding. Een ritueel, een activiteit, een grap. Iets waar de biologische vader geen deel van is. Niet als vervanging, maar als aanvulling. 'Dit is van ons.' Dat is het begin van een eigen band.\n\n5. Zoek steun. Praat met je partner over hoe het voelt. Praat met andere bonusvaders. Lees. Dit is een van de moeilijkste rollen in het ouderschap en je hoeft het niet alleen uit te zoeken. Het feit dat je dit leest, betekent al dat je de goede kant op gaat.",
      },
      // ── 8. Oefening ──────────────────────────────────────────────
      {
        type: "exercise" as const,
        title: "De Bonusband-Week",
        instructions:
          "Deze week ga je bewust werken aan de band met je bonuskind. Niet door iets groots te doen, maar door vijf kleine dingen.\n\n1. Dag 1-2: Observeer. Let op waar je bonuskind blij van wordt. Wat kijkt het naar, waar praat het over, wat doet het uit zichzelf? Schrijf drie dingen op.\n\n2. Dag 3: Sluit aan. Doe iets met één van die drie dingen. Kijkt het kind graag naar voetbal? Ga erbij zitten en stel een vraag: 'Wie is die speler?' Speelt het Minecraft? 'Mag ik zien wat je hebt gebouwd?' Geen overname. Aansluiting.\n\n3. Dag 4: Bied iets aan zonder verwachting. 'Ik ga naar de bakker, ga je mee?' Als het antwoord nee is: 'Prima. Volgende keer.' Geen teleurstelling tonen.\n\n4. Dag 5-6: Herhaal het aansluiten. Hetzelfde onderwerp, of een nieuw. Kort. Vrijblijvend. Aanwezig.\n\n5. Dag 7: Reflectie. Schrijf op: wat merkte je? Wat was moeilijk? Wat voelde goed? Deel het eventueel met je partner.",
        duration: 15,
        tips: [
          "Het kan zijn dat je bonuskind niet reageert, of afwijzend reageert. Dat is normaal en zegt niets over jou. Het zegt iets over het tempo. Blijf aanbieden. Zonder druk.",
          "Vertel je partner wat je aan het doen bent. Niet om credit te krijgen, maar zodat zij kan ondersteunen. Bonusvaderschap werkt het beste als team.",
        ],
      },
      // ── 9. Reflectie ──────────────────────────────────────────────
      {
        type: "reflection" as const,
        questions: [
          "Wat verwacht je — eerlijk — van de band met je bonuskind? Is die verwachting realistisch als je bedenkt dat vertrouwen jaren nodig heeft?",
          "Op welke momenten voel je je het meest buitengesloten? Wat zou je nodig hebben — van je partner, van jezelf — om die momenten beter te verdragen?",
        ],
      },
      // ── 10. Samenvatting ──────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Samenvatting",
        text: "Bonusvader worden is geen sprint maar een jarenlange wandeling. Vertrouwen groeit niet door harder te proberen, maar door er steeds weer te zijn — geduldig, betrouwbaar, zonder te forceren. Bouw eerst de relatie, dan de rol. Geef het kind ruimte om loyaal te zijn aan de biologische vader. En vergeet niet: het feit dat je dit leest, dat je twijfelt, dat je beter wilt doen — dat maakt je al een goede bonusvader. Jij mag er zijn.",
      },
    ],
    keyTakeaways: [
      "Een samengesteld gezin heeft gemiddeld vier tot zeven jaar nodig om echt samen te groeien — geduld is geen zwakte maar je belangrijkste vaardigheid",
      "Bouw eerst de relatie, dan de opvoedrol: wees betrouwbaar en leuk voordat je grenzen gaat stellen",
      "Praat nooit negatief over de biologische vader — je bonuskind heeft ruimte nodig om van iedereen te houden zonder te hoeven kiezen",
    ],
    research:
      "Papernow (2013). Surviving and Thriving in Stepfamily Relationships; Bray (1999). Stepfamilies: Love, Marriage, and Parenting in the First Decade; Hetherington & Kelly (2002). For Better or For Worse: Divorce Reconsidered; Ganong & Coleman (2017). Stepfamily Relationships: Development, Dynamics, and Interventions",
  },
];
