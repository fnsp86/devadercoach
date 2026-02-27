import type { LearningModule, Skill } from "../types";

export const ADHD_MODULES: LearningModule[] = [
  {
    id: "adhd_mod_1",
    skill: "Zelfregulatie" as Skill,
    title: "Zijn Motor Staat Op Rood. Zelfregulatie bij ADHD",
    description:
      "Hij kan niet stoppen, niet starten, niet overschakelen. Niet omdat hij niet wil. Maar omdat zijn brein anders werkt. Ontdek hoe je als vader je kind met ADHD helpt om zichzelf te reguleren, zonder te schreeuwen en zonder straf.",
    duration: "12-18 min",
    difficulty: "basis" as const,
    order: 1,
    themes: ["adhd"],
    content: [
      // ── 1. Opening ────────────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Woensdagmiddag, 16:30. De overstap.",
        text: "Milan (9) zit op de bank. iPad. Minecraft. Hij is er helemaal in. Ogen gefocust, lichaam ontspannen, mond een beetje open. Hij is in de zone. Dat is het goede nieuws.\n\nHet slechte nieuws: het is 16:30, hij moet over vijf minuten aan zijn huiswerk, en jij hebt het nu drie keer gezegd. De eerste keer vriendelijk: 'Milan, nog vijf minuutjes, dan huiswerk.' Geen reactie. De tweede keer iets luider: 'Milan. iPad uit. Huiswerk.' Een vaag 'ja ja' zonder zijn ogen van het scherm te halen. De derde keer sta je naast hem. 'Milan. Nu.'\n\nDan pak je de iPad. En dan ontploft het. Milan schreeuwt. Hij gooit een kussen. Hij huilt. 'JE BENT GEMEEN! IK WAS NOG BEZIG!' Vijf minuten later zit hij aan tafel. Rood aangelopen, snikkend, potlood in zijn hand. Maar er komt niks op papier. Het huiswerk wordt een slagveld. Weer.\n\nJe partner kijkt je aan vanuit de keuken. Die blik ken je. Die blik die zegt: waarom moet het altijd zo? En jij denkt: waarom kan hij niet gewoon luisteren?\n\nDat is de vraag die deze module gaat beantwoorden. Niet door Milan de schuld te geven. Niet door jou de schuld te geven. Maar door te begrijpen wat er in zijn hoofd gebeurt als jij zegt 'stop met het ene en begin met het andere'. En waarom dat voor zijn brein voelt alsof je vraagt om een berg te verplaatsen.",
      },
      // ── 2. De wetenschap ──────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Het ADHD-brein: een ander besturingssysteem",
        text: "ADHD wordt vaak begrepen als 'niet kunnen opletten.' Maar dat klopt niet. Edward Hallowell, psychiater en zelf ADHD'er, zegt het het scherpst: 'ADHD is geen aandachtsstoornis. Het is een stoornis in zelfregulatie.' Je kind kan zich uren focussen op iets dat het brein fascineert. Games, LEGO, tekenen. Maar zodra de taak minder stimulerend is, valt de focus weg alsof iemand de stekker eruit trekt.\n\nRussell Barkley, de meest geciteerde ADHD-onderzoeker ter wereld, legt uit waarom. ADHD is een stoornis van de executieve functies. Dat zijn de hersenprocessen die je helpen om te plannen, impulsen te remmen, van taak te wisselen, emoties te reguleren en beloningen uit te stellen. Die functies zitten in de prefrontale cortex. Het voorste deel van het brein. Bij kinderen met ADHD loopt de ontwikkeling van dat gebied gemiddeld twee tot drie jaar achter op leeftijdgenoten.\n\nStel je voor dat Milans leeftijdgenoten een brein hebben met een volwassen verkeersleider in de toren. Die verkeersleider zegt: 'Stop met dit, start met dat, wacht even, houd vol.' Bij Milan zit er een stagiair in die toren. Die stagiair doet zijn best, maar mist ervaring, wordt snel overweldigd en raakt in paniek bij te veel vliegtuigen tegelijk.\n\nThomas Brown, klinisch psycholoog aan Yale, voegt hier een cruciaal inzicht aan toe. Hij beschrijft zes clusters van executieve functies die bij ADHD zijn aangetast: activatie (aan een taak beginnen), focus (aandacht vasthouden), effort (moeite volhouden), emotie (frustratie verdragen), geheugen (informatie vasthouden) en actie (tempo reguleren). Bij Milan werken al deze zes clusters anders. Niet kapot. Anders.\n\nEn dan is er de dopamine. Het ADHD-brein produceert minder dopamine en verwerkt het minder efficiënt. Dopamine is de stof die zegt: 'Dit is de moeite waard, houd vol, het komt goed.' Bij een kind zonder ADHD geeft het vooruitzicht op een goed cijfer genoeg dopamine om door saai huiswerk heen te komen. Bij Milan niet. Zijn brein heeft onmiddellijke, tastbare, sterke prikkels nodig om dezelfde motivatie op te wekken. Daarom kan hij uren gamen maar geen vijf minuten rekenen. Het gaat niet om wilskracht. Het gaat om neurochemie.\n\nDit is misschien het belangrijkste dat je als vader kunt begrijpen: je kind kiest hier niet voor. Milan wil wel luisteren. Hij wil wel overschakelen. Hij wil wel zijn huiswerk maken. Maar zijn brein werkt met een ander besturingssysteem. En als jij het standaard besturingssysteem blijft verwachten, zul je allebei gefrustreerd raken.",
      },
      // ── 3. Diagram ────────────────────────────────────────────────
      {
        type: "diagram" as const,
        diagramTitle: "Wat jij ziet vs. wat het ADHD-brein doet",
        diagramData: [
          {
            emoji: "🔇",
            label: "Jij ziet: hij luistert niet",
            description:
              "Je hebt het drie keer gezegd en hij reageert niet. Wat zijn brein doet: hyperfocussen. Het ADHD-brein dat iets boeiends gevonden heeft, sluit alle andere input af. Het is geen onwil. Het is een brein dat vastzit in een tunnel en jouw stem niet doorlaat.",
          },
          {
            emoji: "💥",
            label: "Jij ziet: hij flipt bij een overstap",
            description:
              "Van iPad naar huiswerk, van spelen naar eten, van binnen naar buiten. Elke overgang eindigt in drama. Wat zijn brein doet: crashen bij het wisselen. De prefrontale cortex moet bij elke overstap een heel nieuw plan laden. Bij ADHD duurt dat langer en kost het enorm veel energie. Het is alsof je een oude computer vraagt om tien programma's tegelijk te openen.",
          },
          {
            emoji: "🎢",
            label: "Jij ziet: extreme emoties uit het niets",
            description:
              "Het ene moment lacht hij, het volgende schreeuwt hij. Kleine tegenslagen voelen als rampen. Wat zijn brein doet: emoties niet filteren. De emotieregulatie is onderdeel van de executieve functies. Het ADHD-brein voelt alles op volle sterkte, zonder de dimmer die andere breinen wel hebben.",
          },
          {
            emoji: "⏳",
            label: "Jij ziet: hij kan niet wachten",
            description:
              "Hij onderbreekt, grijpt, duwt, wil alles nu. Wat zijn brein doet: de toekomst niet voelen. ADHD-breinen ervaren tijd anders. 'Over tien minuten' voelt als 'nooit'. De beloning moet nu komen, anders bestaat die niet. Barkley noemt dit 'tijdblindheid'. Een van de kernproblemen van ADHD.",
          },
          {
            emoji: "🔋",
            label: "Jij ziet: hij is lui of ongemotiveerd",
            description:
              "Hij begint niet, of stopt halverwege, of 'vergeet' wat hij moest doen. Wat zijn brein doet: geen dopamine produceren voor deze taak. Het beloningssysteem springt niet aan. Zonder dopamine kan het brein niet starten. Het is geen luiheid. Het is een motor zonder brandstof.",
          },
        ],
      },
      // ── 4. Voorbeeld 1: het huiswerk-gevecht ──────────────────────
      {
        type: "example" as const,
        situation:
          "Milan (9) moet rekenen maken. Twintig sommen. Hij zit al tien minuten aan tafel en heeft er nul gemaakt. Hij tekent in de kantlijn, wiebelt op zijn stoel, staat drie keer op om water te halen. Jij staat in de deuropening en voelt je geduld weglopen.",
        wrongApproach:
          "DRUK OPVOEREN:\n\nJij loopt naar de tafel. 'Milan. Twintig sommen. Het is niet zo moeilijk. Gewoon beginnen.'\nMilan kijkt naar het papier. Zijn ogen worden groot. Twintig sommen. Dat voelt als tweehonderd.\n'Ik kan het niet.'\n'Je kunt het wel. Je hebt het vorige week nog gedaan. Begin nou gewoon.'\nMilan pakt zijn potlood. Maakt een halve som. Stopt. Kauwt op het potlood.\n'Milan!'\nTranen. Het potlood vliegt door de kamer. De avond is verpest.\n\nWat hier misging: jij gaf een berg. Milans brein kan geen berg aan. Hij kan een steen aan. Maar hij moet die steen eerst kunnen zien.",
        rightApproach:
          "MICRO-STAPPEN EN NABIJHEID:\n\nJij loopt naar de tafel. Niet met een zucht, maar met een stoel. Je gaat naast Milan zitten.\n'Oké. Twintig sommen. Dat is veel. Weet je wat? We doen er vijf. Alleen de eerste vijf. Daar beginnen we mee.'\nJe legt je vinger naast som 1.\n'Deze. Alleen deze. Wat denk je?'\nMilan kijkt. Het is er maar een. Die kan hij aan.\n'Negen?' 'Klopt. Volgende.'\n\nNa vijf sommen: 'Top. Wil je even pauze? Twee minuten bewegen, dan doen we de volgende vijf.'\nMilan springt van zijn stoel, rent een rondje door de gang, komt terug. De volgende vijf gaan sneller.\n\nJij was zijn body double. Iemand die naast hem zit en het brein helpt starten. En je brak de berg af in stenen die hij kon tillen.",
        explanation:
          "Barkley legt uit dat het ADHD-brein niet kan werken met uitgestelde beloningen. 'Maak twintig sommen en dan ben je klaar' is een beloning die te ver weg ligt. Het brein produceert er geen dopamine voor. Door de taak op te splitsen in blokken van vijf, met een directe beloning ertussen (bewegingspauze), maak je de beloning nabij. En door ernaast te zitten fungeer je als body double: een fysieke aanwezigheid die het brein helpt om te activeren. Onderzoek laat zien dat de simpele aanwezigheid van een ander persoon bij ADHD'ers de taakinitiatie significant verbetert. Niet door te helpen, niet door te controleren. Alleen door er te zijn.",
      },
      {
        type: "example" as const,
        situation:
          "Thijs (7) speelt buiten met de buurkinderen. Je roept hem voor het eten. Hij reageert niet. Je roept nog twee keer. Uiteindelijk komt hij binnen, maar weigert aan tafel te gaan zitten. Hij rent door de keuken, pakt dingen van het aanrecht, praat over van alles tegelijk en stoot bijna een pan om. Je partner zucht. Jij voelt de bekende frustratie opkomen.",
        wrongApproach:
          "❌ METEEN EISEN STELLEN:\n\nPapa: 'Thijs, zitten. Nu. Het eten staat klaar.'\nThijs rent nog een rondje. 'Maar ik moet je iets vertellen! En Bram zei—'\nPapa pakt hem bij zijn schouders: 'Je gaat NU zitten en je mond houden.'\nThijs ploft op zijn stoel. Wiebelt. Praat door. Morst.\nPapa slaat met zijn hand op tafel: 'WAT ZEI IK?!'\nStilte. Thijs' ogen worden groot. Het eten verloopt in spanning.\n\nWat Thijs leerde: van buiten naar binnen gaan is straf. Papa wordt boos als ik nog vol energie zit. Eten is een gevecht.",
        rightApproach:
          "✅ DE OVERGANGSSLUIS:\n\nPapa weet: Thijs kan niet van 100 naar 0. Zijn brein heeft een sluis nodig.\nTien minuten voor het eten loopt papa naar buiten. 'Thijs! Nog tien minuten, dan gaan we eten.'\nVijf minuten later: 'Nog vijf. Begin af te ronden.'\nAls Thijs binnenkomt, zegt papa: 'Eerst even ontladen. Spring vijf keer zo hoog als je kan.'\nThijs springt. Lacht. Na vijf sprongen: 'Oké, handen wassen en dan aan tafel.'\nThijs gaat zitten. Nog een beetje wiebelig. Maar hij kan eten.\n\nWat papa deed: hij gaf drie waarschuwingen en bouwde een fysieke overgang in. Het brein van Thijs kreeg tijd en beweging om te schakelen.",
        explanation:
          "Het ADHD-brein heeft grote moeite met taakwisseling. Van buitenspelen naar stilzitten aan tafel is neurologisch een enorme sprong. Barkley beschrijft dit als een tekort in 'set-shifting': het vermogen om van de ene mentale modus naar de andere over te schakelen. Door vooraf te waarschuwen en een fysieke overgangsstap in te bouwen (de sprongen), geef je het brein de tijd en de input die het nodig heeft om te landen. De overgangssluis vervangt het conflict niet door slappigheid, maar door een slim tussenstapje dat escalatie voorkomt.",
      },
      // ── 5. Deep-dive: het beloningssysteem begrijpen ──────────────
      {
        type: "text" as const,
        heading: "Waarom 'als je je best doet, krijg je vrijdag een beloning' niet werkt",
        text: "Een van de meest frustrerende dingen voor vaders van kinderen met ADHD is het beloningssysteem. Je probeert het goed te doen. Je maakt een stickerkaart. 'Vijf stickers en je mag naar de bioscoop.' De eerste dag gaat het goed. De tweede dag vergeet hij de stickers. De derde dag is de kaart verdwenen. En jij denkt: hij vindt het gewoon niet belangrijk genoeg.\n\nMaar dat is niet wat er gebeurt. Het probleem is de afstand tussen de actie en de beloning. Barkley noemt dit de 'temporal gradient of reinforcement.' Hoe verder een beloning in de toekomst ligt, hoe minder kracht die heeft voor het ADHD-brein. Voor een kind zonder ADHD werkt 'vrijdag naar de bioscoop' als motivatie op maandag. Voor een kind met ADHD bestaat vrijdag op maandag niet. Letterlijk. Het brein kan het niet voelen.\n\nDit heeft enorme gevolgen voor hoe je opvoedt. Het betekent dat je hele beloningssysteem moet verschuiven van later naar nu. Niet: 'Als je deze week je huiswerk goed doet, mag je zaterdag naar het zwembad.' Maar: 'Als je deze vijf sommen maakt, mag je daarna tien minuten op de trampoline.' De beloning moet zichtbaar, tastbaar en dichtbij zijn.\n\nHet betekent ook dat straffen voor gedrag dat uren geleden plaatsvond, zinloos is. 'Je hebt vanmiddag op school niet geluisterd, dus vanavond geen televisie.' Milans brein kan die twee dingen niet meer aan elkaar koppelen. Hij voelt alleen: ik ben stom en papa is boos. De les die je wilde leren, komt niet aan.\n\nDit voelt contra-intuïtief. Je bent opgegroeid met het idee dat kinderen moeten leren wachten. Dat uitstel van beloning een teken van volwassenheid is. En dat klopt ook. Voor breinen die dat kunnen. Milans brein kan dat nog niet. Niet omdat hij verwend is. Niet omdat je het verkeerd hebt gedaan. Maar omdat de bedrading anders is. En jouw taak als vader is niet om die bedrading te forceren, maar om er omheen te bouwen.\n\nEdward Hallowell zegt het mooi: 'De beste aanpak bij ADHD is de omgeving aanpassen aan het brein, niet het brein dwingen zich aan te passen aan de omgeving.' Dat is geen zwakte. Dat is slim opvoeden.",
      },
      // ── 6. Voorbeeld 2: de ochtendchaos ───────────────────────────
      {
        type: "example" as const,
        situation:
          "Het is 07:45. Over een kwartier moet Milan op school zijn. Hij staat in zijn onderbroek in de badkamer en staart naar zijn tandenborstel. Zijn brood staat onaangeroerd op tafel. Zijn tas is niet ingepakt. Je hebt al vier keer geroepen. Je partner is al vertrokken. En jij voelt de klok tikken.",
        wrongApproach:
          "SCHREEUWEN EN OVERNEMEN:\n\n'MILAN! We moeten NU weg!'\nJe stampt naar boven, trekt een shirt uit de kast, gooit het naar hem.\n'Aankleden. Tanden poetsen. Brood eten. Tas inpakken. NU.'\nMilan bevriest. Vier opdrachten tegelijk. Zijn brein crasht.\nHij begint te huilen. Jij kleedt hem aan, propt het brood in zijn tas, sleurt hem naar de auto. In de auto is het stil. Die stilte die zwaarder weegt dan geschreeuw.\n\nMilan leert: ochtenden zijn stressvol. Papa wordt boos. Ik kan het niet.\nJij leert: weer gefaald. Weer geschreeuwd.",
        rightApproach:
          "HET VISUELE OCHTENDSPOOR:\n\nJe hangt een strook op de badkamerspiegel. Vier pictogrammen, van boven naar beneden: tandenborstel, shirt, brood, rugtas. Elke ochtend hoef je maar een ding te zeggen: 'Milan, kijk naar je spoor.'\n\nMilan kijkt. Stap 1: tanden poetsen. Dat kan hij. Hij hoeft niet vier dingen tegelijk te onthouden. Alleen het plaatje dat voor hem hangt.\nNa het poetsen schuift hij een magneetje naar beneden. Kleine beloning: voortgang die hij kan zien.\nStap 2: aankleden. Het shirt ligt al klaar. Dat heb je gisteravond samen uitgekozen.\n\nHet kost twee weken om dit in te slijten. De eerste dagen moet je erbij staan. Maar langzaam neemt het spoor het over. Niet omdat Milan ineens beter is geworden. Maar omdat je zijn omgeving hebt aangepast aan zijn brein.\n\nEn op de momenten dat het toch misgaat. Want die blijven komen. Zeg je: 'Waar sta je op je spoor?' In plaats van vier commando's die zijn brein laten crashen.",
        explanation:
          "Het ADHD-brein heeft enorme moeite met wat Barkley 'non-verbal working memory' noemt: het vasthouden van een mentale to-do-lijst. Waar een kind zonder ADHD vier stappen kan onthouden en uitvoeren, verliest het ADHD-brein stap twee zodra het aan stap een begint. Een visueel spoor. Pictogrammen, een checklist, een whiteboard. Werkt als extern werkgeheugen. Het brein hoeft niet meer alles vast te houden, want de informatie hangt aan de muur. Dit is geen kruk. Dit is een brug. En die brug werken de meeste ADHD-experts aan: de omgeving slim inrichten zodat het brein kan doen wat het wel kan.",
      },
      // ── 7. Toolkit ────────────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Je gereedschapskist: vijf strategieën die werken bij ADHD",
        text: "1. De visuele timer. Koop een Time Timer of gebruik een app met een rode schijf die kleiner wordt. Het ADHD-brein kan abstracte tijd niet voelen, maar het kan een rode cirkel zien krimpen. Zet de timer op vijf of tien minuten voor taken. 'Als het rood op is, mag je stoppen.' Zichtbare tijd is voelbare tijd. Gebruik de timer ook voor overgangen: 'De timer staat op drie minuten. Als hij afgaat, gaat de iPad uit.' Het kind ziet het komen. Het is niet meer jij die het afpakt. Het is de timer.\n\n2. Body doubling. Ga naast je kind zitten als het iets moet doen dat het brein niet uit zichzelf opstart. Je hoeft niks te doen. Je hoeft er alleen maar te zijn. Lees een boek, doe je administratie, drink koffie. Het ADHD-brein activeert beter in de aanwezigheid van een ander. Dit is wetenschappelijk onderbouwd en het is een van de simpelste dingen die je als vader kunt doen. Je hoeft niet te helpen. Je hoeft alleen te zitten.\n\n3. Bewegingspauzes. Na elke tien tot vijftien minuten concentratie: twee minuten bewegen. Springen, rennen, dansen, hangen aan een rekstok. Beweging verhoogt de dopamine- en noradrenalineproductie in het brein. Precies de stoffen die het ADHD-brein tekort komt. John Ratey, neurowetenschapper en auteur van Spark, noemt beweging 'de beste medicatie die we hebben.' Plan beweging niet als beloning maar als onderdeel van het proces.\n\n4. Micro-stappen. Breek elke taak op in de kleinst mogelijke eenheden. Niet 'maak je huiswerk' maar 'pak je schrift.' Niet 'ruim je kamer op' maar 'leg de drie boeken op je bureau.' Het ADHD-brein raakt overweldigd door grote taken. Het kan niet inschatten hoe lang iets duurt, waar te beginnen of hoe het eruitziet als het af is. Door het op te breken in micro-stappen geef je het brein een startpunt. En starten is het moeilijkste.\n\n5. Beloningsnabijheid. Verschuif alle beloningen naar het nu. Geen stickerkaarten voor de hele week. Geen 'als je een goed rapport hebt.' Directe, kleine, tastbare beloningen na korte inspanningen. 'Vijf sommen klaar? High five en twee minuten trampoline.' Het ADHD-brein leert niet van uitgestelde consequenties. Het leert van wat er nu gebeurt. Bouw daar je hele systeem omheen.",
      },
      // ── 8. Oefening ───────────────────────────────────────────────
      {
        type: "exercise" as const,
        title: "Het Timer-Experiment",
        instructions:
          "Deze week ga je de visuele timer introduceren bij een vast moment dat altijd stressvol is. Kies het moment dat het vaakst escaleert: de overgang van scherm naar huiswerk, de ochtendvoorbereiding, of het naar bed gaan.\n\n1. Dag 1: Koop of download een visuele timer (Time Timer app, of een fysieke timer met een rode schijf). Laat hem aan je kind zien op een rustig moment. Leg uit: 'Dit is onze nieuwe helper. Als het rood kleiner wordt, kun je zien hoeveel tijd er nog is.'\n\n2. Dag 2-3: Gebruik de timer bij het gekozen moment. Stel hem in op een korte tijd (5-10 minuten). Geef een waarschuwing: 'De timer gaat zo aan. Als het rood op is, gaan we overschakelen.' Start de timer. Laat je kind het zelf zien. Grijp niet in tenzij het echt nodig is.\n\n3. Dag 4-5: Voeg body doubling toe. Ga naast je kind zitten tijdens het moeilijke moment. Timer aan, jij erbij. Niet helpen, niet corrigeren. Alleen aanwezig zijn. Merk op wat er verandert.\n\n4. Dag 6-7: Evalueer. Wat ging beter? Wat was nog moeilijk? Moet de tijd korter of langer? Pas aan. Dit is geen test die je kunt falen. Dit is een experiment. Je bent aan het uitvinden wat werkt voor dit specifieke kind.\n\nSchrijf elke avond kort op: wat werkte, wat niet, hoe voelde het voor jou, hoe reageerde je kind.",
        duration: 10,
        tips: [
          "De eerste keer dat je de timer gebruikt, kan je kind er juist gestrest van raken. Dat is normaal. Het brein moet wennen aan dit nieuwe systeem. Geef het drie tot vijf dagen voordat je conclusies trekt.",
          "Gebruik de timer niet als dreigement ('als de timer afgaat en je bent niet klaar, dan...'). De timer is een hulpmiddel, geen straf. Het doel is voorspelbaarheid, niet druk.",
          "Als de timer niet werkt bij dit moment, probeer een ander moment. Elk ADHD-kind is anders. Het gaat om het principe: maak tijd zichtbaar en breek overgangen op in stappen.",
        ],
      },
      // ── 9. Reflectie ──────────────────────────────────────────────
      {
        type: "reflection" as const,
        questions: [
          "Als je eerlijk bent: hoe vaak denk je 'hij kan het wel, hij wil gewoon niet'? Wat verandert er als je dat omdraait naar 'hij wil wel, maar zijn brein laat het nu niet toe'? Wat doet dat met je frustratie?",
          "Welk dagelijks moment met je kind escaleert het vaakst. En wat zou er veranderen als je dat moment niet ziet als een gedragsprobleem, maar als een moment waarop zijn brein hulp nodig heeft die het nog niet krijgt?",
        ],
      },
      // ── 10. Samenvatting ──────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Samenvatting",
        text: "ADHD is geen kwestie van niet willen, maar van niet kunnen. Het brein van je kind werkt met een ander besturingssysteem: minder dopamine, een tragere prefrontale cortex, executieve functies die twee tot drie jaar achter lopen. Dat betekent dat standaardopvoeding. Praten, waarschuwen, straffen, belonen op afstand. Bij dit kind niet werkt. Niet omdat je het fout doet, maar omdat het systeem niet past.\n\nJouw rol als vader is niet om het brein te repareren. Het is om de omgeving aan te passen. Visuele timers die tijd zichtbaar maken. Body doubling die het brein helpt starten. Bewegingspauzes die dopamine aanvullen. Micro-stappen die de berg afbreken in stenen. Beloningen die nu komen, niet over een week.\n\nEn boven alles: begrip. Elke keer dat je denkt 'hij kan het wel, hij wil niet', draai het om. 'Hij wil wel, maar hij kan het nu niet.' Dat ene zinnetje verandert alles. Het verandert je frustratie in compassie. Het verandert je aanpak van straffen naar helpen. En het verandert de relatie met je kind van slagveld naar team.\n\nJe bent niet de politieagent van zijn brein. Je bent de gids die de weg plaveidt zodat zijn brein kan doen wat het wel kan. En dat is meer dan genoeg.",
      },
    ],
    keyTakeaways: [
      "ADHD is geen aandachtsprobleem maar een zelfregulatie-probleem: het brein werkt met minder dopamine en een tragere prefrontale cortex, waardoor je kind niet kiest voor lastig gedrag maar er neurologisch toe gedwongen wordt",
      "Verschuif beloningen van later naar nu en breek taken op in micro-stappen: het ADHD-brein kan de toekomst niet voelen, dus 'vrijdag naar de bioscoop' werkt niet als motivatie op maandag",
      "Pas de omgeving aan, niet het kind: visuele timers, body doubling, bewegingspauzes en zichtbare structuur zijn geen krukken maar bruggen die het brein helpen te doen wat het wel kan",
    ],
    research:
      "Barkley (2015). Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment; Brown (2013). A New Understanding of ADHD in Children and Adults: Executive Function Impairments; Hallowell & Ratey (2011). Driven to Distraction: Recognizing and Coping with Attention Deficit Disorder; Ratey (2008). Spark: The Revolutionary New Science of Exercise and the Brain; Barkley (2012). Executive Functions: What They Are, How They Work, and Why They Evolved",
  },
];
