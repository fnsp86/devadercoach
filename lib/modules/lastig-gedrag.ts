import type { LearningModule, Skill } from "../types";

export const LASTIG_GEDRAG_MODULES: LearningModule[] = [
  {
    id: "gedrag_mod_1",
    skill: "Emotiecoaching" as Skill,
    title: "Je Kind Is Niet Lastig — Het Heeft Het Lastig",
    description:
      "Hij kan niet stilzitten. Ze flipt bij huiswerk. De school belt weer. Snap wat er écht gebeurt in het brein van je kind — en waarom straf het alleen erger maakt.",
    duration: "12-18 min",
    difficulty: "basis" as const,
    order: 1,
    themes: ["gedragsproblemen"],
    content: [
      // ── 1. Opening ──────────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Dinsdag, 17:45. Het huiswerk.",
        text: "Jens (8) zit aan de keukentafel. Althans, hij zou zitten. Hij wipt op zijn stoel, kauwt op zijn potlood, kijkt uit het raam. Zijn schrift is leeg. Je hebt het nu drie keer gezegd: 'Jens, concentreer je.'\n\nDe vierde keer zeg je het harder. Jens gooit zijn potlood door de keuken. 'IK KAN HET NIET!' Tranen. Woede. Jij voelt de frustratie in je borst branden.\n\nDe school heeft gebeld. Zijn juf zegt dat hij niet luistert. Andere ouders kijken je aan bij het ophalen. En 's avonds in bed denk je: wat doe ik fout?\n\nNiks. Je doet niks fout. En Jens ook niet. Maar er is iets aan de hand in zijn hoofd dat je moet begrijpen voordat iets anders gaat werken. Daar gaat deze module over: niet over labels. Niet over diagnoses. Maar over wat er écht gebeurt als je kind gedrag laat zien dat niemand begrijpt — inclusief je kind zelf.",
      },
      // ── 2. De wetenschap ────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Een brein dat anders werkt",
        text: "Stel je het brein voor als een bedrijf. Vooraan zit de directeur: de prefrontale cortex. Die plant, remt impulsen af, houdt focus vast en regelt emoties. Bij de meeste volwassenen draait die directeur op volle kracht. Bij kinderen is hij nog in opleiding. Bij kinderen met ADHD-kenmerken, hooggevoeligheid of prikkelverwerking-uitdagingen is die directeur chronisch overbelast.\n\nRussell Barkley, de wereldautoriteit op ADHD, zegt het zo: ADHD is geen probleem van niet-willen, maar van niet-kunnen. Het gaat om executieve functies — het vermogen om te plannen, impulsen te remmen, je aandacht te sturen en je emoties te reguleren. Die functies zijn bij sommige kinderen twee tot drie jaar achter op leeftijdgenoten.\n\nBij hooggevoelige kinderen — beschreven door Elaine Aron — speelt iets anders. Hun brein verwerkt alles dieper. Elk geluid, elke blik, elke verandering in sfeer komt harder binnen. Dat is geen zwakte. Sterker: het maakt ze empathisch, creatief en opmerkzaam. Maar in een drukke klas, op een luid feestje of na een lange schooldag is hun systeem overbelast. En een overbelast systeem reageert met vechten, vluchten of bevriezen.\n\nDan is er de stress-gedrag-loop. Kind raakt overprikkeld → kind laat 'lastig' gedrag zien → ouder reageert met straf of frustratie → kind raakt meer gestrest → gedrag wordt erger → ouder wordt strenger → en zo draait de spiraal door. Straf werkt niet bij deze kinderen. Niet omdat ze het niet verdienen, maar omdat hun brein de verbinding tussen straf en gedrag niet snel genoeg legt. Ze zitten op hun kamer en voelen alleen: ik ben stom. Papa is boos. Ik kan niks goed.\n\nRoss Greene, auteur van The Explosive Child, vat het samen in één zin die alles verandert: 'Kinderen doen het goed als ze het kúnnen.' Niet als ze het willen. Als ze het kunnen. Als je kind zich niet gedraagt, is dat geen onwil. Het is een ontbrekende vaardigheid. En vaardigheden bouw je niet met straf. Die bouw je met begrip, structuur en geduld.",
      },
      // ── 3. Diagram ──────────────────────────────────────────────
      {
        type: "diagram" as const,
        diagramTitle: "Wat jij ziet vs. wat er vanbinnen gebeurt",
        diagramData: [
          {
            emoji: "😡",
            label: "Jij ziet: woede en agressie",
            description:
              "Hij schreeuwt, slaat, gooit dingen. Wat er vanbinnen speelt: overweldiging. Zijn emmer is vol. Hij heeft geen woorden meer voor wat hij voelt. De uitbarsting is het noodsignaal, niet het probleem.",
          },
          {
            emoji: "🙅",
            label: "Jij ziet: opstandigheid en weigering",
            description:
              "Ze doet niet wat je vraagt. Zegt 'nee' op alles. Wat er vanbinnen speelt: angst om te falen. Het kind weet niet hoe het moet beginnen of is bang het niet goed te doen. Weigeren voelt veiliger dan falen.",
          },
          {
            emoji: "🏃",
            label: "Jij ziet: hyperactiviteit en niet stilzitten",
            description:
              "Hij wipt, rent, klimt, kan geen seconde stil zijn. Wat er vanbinnen speelt: onderstimulatie. Zijn brein zoekt prikkels om alert te blijven. Bewegen ís zijn manier van concentreren. Stilzitten kost hem meer energie dan rennen.",
          },
          {
            emoji: "😶",
            label: "Jij ziet: dichtklappen en terugtrekken",
            description:
              "Ze reageert niet meer. Staart voor zich uit. Trekt zich terug. Wat er vanbinnen speelt: overbelasting. Het systeem is op rood gegaan en heeft zichzelf uitgeschakeld. Dit is geen onverschilligheid — het is een beschermingsmechanisme.",
          },
          {
            emoji: "😭",
            label: "Jij ziet: overdreven emotionele reacties",
            description:
              "Hij huilt om iets kleins. Totale meltdown over een kapot koekje. Wat er vanbinnen speelt: de emmer was al bijna vol. Dat koekje was de laatste druppel. De reactie gaat niet over het koekje — het gaat over alles wat daaraan voorafging.",
          },
        ],
      },
      // ── 4. Voorbeeld 1 ──────────────────────────────────────────
      {
        type: "example" as const,
        situation:
          "Jens (8) moet zijn huiswerk maken. Na vijf minuten is hij gefrustreerd. Hij kan de sommen niet en begint te huilen. Dan schopt hij zijn stoel om en schreeuwt: 'Ik ben dom! Ik kan dit niet!'",
        wrongApproach:
          "STRAF EN DRUK:\n\nPapa: 'Jens, ga zitten. Nu.'\nJens huilt harder.\nPapa: 'Als je zo doet, mag je vanavond niet op je iPad.'\nJens: 'Mij maakt het niet uit!'\nPapa: 'Naar je kamer. Nu. En je komt pas terug als je normaal kunt doen.'\n\nJens zit op zijn kamer. Huilt. Denkt: ik ben stom. Papa is boos. Huiswerk is nog steeds niet af. De volgende dag bij huiswerk: dezelfde meltdown. Erger, zelfs. Want nu is er ook angst bij gekomen.",
        rightApproach:
          "BEGRIJPEN EN BEGELEIDEN:\n\nPapa ziet de frustratie opbouwen. Gaat naast Jens zitten.\nPapa, rustig: 'Hé. Dit is echt moeilijk, hè.'\nJens, huilend: 'Ik snap er niks van!'\nPapa: 'Ik snap dat je baalt. Even pauze. Twee minuten. We lopen even naar de tuin en dan kijken we er samen naar.'\n\nZe staan twee minuten buiten. Jens ademt. Ze gaan terug.\nPapa: 'Oké, welke som is het moeilijkst? We beginnen met die.'\nJens wijst. Papa helpt hem de eerste stap zetten. Jens maakt de rest zelf.\n\nWat Jens leerde: ik mag hulp vragen. Even stoppen mag. Papa snapt het.",
        explanation:
          "Het verschil zit niet in strengheid versus toegeeflijkheid. Het zit in het begrijpen wat er achter het gedrag zit. Jens kon het niet — zijn executieve functies waren overbelast. Straf loste niks op. De bewegingspauze liet zijn zenuwstelsel resetten. De hulp bij de eerste stap omzeilde het probleem van niet-kunnen-beginnen. Dit is wat Ross Greene bedoelt met 'Plan B': samen naar een oplossing zoeken in plaats van je wil opleggen.",
      },
      // ── 5. Structuur en routine ─────────────────────────────────
      {
        type: "text" as const,
        heading: "Structuur is geen straf — het is een reddingslijn",
        text: "Hier is iets dat tegenstrijdig klinkt: kinderen die 'lastig' gedrag vertonen, hebben niet minder regels nodig. Ze hebben méér structuur nodig. Maar dan het goede soort.\n\nDenk er zo over: als jouw brein moeite heeft met plannen, vooruitdenken en impulsen remmen, dan is een onvoorspelbare dag een nachtmerrie. Je weet niet wat er komt. Je kunt je niet voorbereiden. Elke overgang voelt als een klap. Van eten naar huiswerk. Van spelen naar opruimen. Van thuis naar school.\n\nDaarom werken vaste routines zo goed bij deze kinderen. Niet omdat ze robots moeten worden, maar omdat voorspelbaarheid rust geeft aan een overbelast brein. Daniel Siegel en Tina Payne Bryson beschrijven dit als het verschil tussen chaos en rigiditeit — je zoekt het midden: een flexibele maar heldere structuur.\n\nWat werkt:\n\n• Vaste volgorde, niet vaste tijden. 'Na eten doen we huiswerk, dan mag je spelen' is beter dan 'Om kwart over vijf ga je huiswerk maken.' De volgorde geeft houvast. Het kind weet wat er komt.\n\n• Waarschuw bij overgangen. 'Over vijf minuten gaan we eten.' 'Nog twee minuten, dan ruimen we op.' Geef hun brein tijd om te schakelen. Plotselinge overgangen veroorzaken de meeste meltdowns.\n\n• Maak het zichtbaar. Een planbord, een dagschema op de koelkast, een timer. Deze kinderen denken in beelden, niet in abstracte regels. Als ze het kunnen zien, kunnen ze het vasthouden.\n\n• Minder keuzes, niet meer. 'Wil je je rode trui of je blauwe trui?' in plaats van 'Wat wil je aan?' Twee opties in plaats van tien. Keuzestress is een van de grootste triggers voor meltdowns bij kinderen met prikkelverwerkings-uitdagingen.\n\n• Erken dat het extra moeite kost. Jouw kind moet harder werken voor dingen die andere kinderen vanzelf lijken te doen. Dat is niet zielig — dat is een feit. En het verdient erkenning in plaats van frustratie.",
      },
      // ── 6. Voorbeeld 2 ──────────────────────────────────────────
      {
        type: "example" as const,
        situation:
          "Luca (7) is op een verjaardagsfeestje. Twintig kinderen, harde muziek, knallende ballonnen. Na een uur begint hij wild te rennen, kinderen te duwen en te schreeuwen. Andere ouders kijken. Jij schaamt je.",
        wrongApproach:
          "SCHAAMTE-GESTUURDE REACTIE:\n\nPapa, sist: 'Luca, stop! Doe normaal!'\nLuca rent door.\nPapa pakt hem stevig vast: 'Als je zo doet gaan we naar huis.'\nLuca, schreeuwend: 'NEE! Ik wil BLIJVEN!'\nPapa, boos, fluisterend: 'Dan gedraag je je. Nu.'\nLuca begint te huilen. De hele auto naar huis is stilte. Luca snikt op de achterbank.\n\nVoor Luca was dit de boodschap: iets is mis met mij. Ik kan niet eens normaal doen op een feestje. Papa schaamt zich voor mij.",
        rightApproach:
          "PRIKKELMANAGEMENT:\n\nPapa ziet de signalen: Luca's stem wordt hoger, zijn bewegingen wilder. Papa weet: dit is overprikkeling.\n\nPapa, rustig: 'Hé Luc, ga je even mee? Ik heb een geheime missie voor ons.'\nZe lopen naar buiten. Achtertuin. Stil.\nPapa: 'Pfoe, druk hè daarbinnen.'\nLuca ademt. Kijkt om zich heen. Wordt rustiger.\nPapa: 'Even opladen. Wil je een paar minuten hier blijven of zullen we een balletje trappen?'\nLuca: 'Balletje trappen.'\nVijf minuten later gaan ze terug naar binnen. Luca doet de rest van het feestje mee. Rustiger.\n\nWat papa deed: hij haalde Luca uit de prikkelstorm zonder straf, zonder schaamte. Luca leerde: als het te veel wordt, mag ik pauze nemen. Dat is slim, niet zwak.",
        explanation:
          "Luca was niet 'stout'. Zijn zenuwstelsel was overbelast door geluid, drukte en prikkels. Het wilde rennen en duwen was zijn brein dat probeerde om te gaan met een situatie die te veel was. Papa deed drie dingen goed: hij herkende de overprikkeling, hij bood een uitweg zonder straf of schaamte, en hij gaf Luca's systeem tijd om te resetten. Elaine Aron beschrijft dit als de kern van opvoeden bij hooggevoeligheid: niet beschermen tegen de wereld, maar leren omgaan met prikkels door het kind te helpen reguleren.",
      },
      // ── 7. Toolkit ──────────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Je gereedschapskist: vijf technieken die écht werken",
        text: "1. De STOP-techniek (voor jou)\nVoordat je reageert op 'lastig' gedrag: Stop. Adem. Observeer. Kies dan pas je reactie. Die vijf seconden pauze zijn het verschil tussen reageren vanuit frustratie en reageren vanuit begrip. Je kind triggert je. Dat is normaal. Maar jouw reactie bepaalt of de spiraal omhoog of omlaag gaat.\n\n2. Bewegingspauzes\nKinderen met ADHD-kenmerken of prikkelverwerkings-uitdagingen hebben meer beweging nodig dan gemiddeld. Niet als straf. Als medicijn. Plan bewegingsmomenten in: voor huiswerk tien minuten rennen. Tussen twee taken door springoefeningen. 's Ochtends een ronde om het blok. Barkley noemt beweging 'de meest onderschatte interventie bij ADHD.' Het kalmeert het zenuwstelsel en verbetert de focus.\n\n3. Visuele schema's\nHang een dagschema op waar je kind het kan zien. Gebruik pictogrammen voor jongere kinderen, korte tekst voor oudere. Maak er samen een. Het schema wordt hun externe directeur — het helpt hun brein met plannen en vooruitkijken. Tip: een 'klaar'-vakje om af te vinken geeft een dopamine-boost. En dopamine is precies wat bij ADHD-kenmerken lager is.\n\n4. De rustige plek (calm-down corner)\nGeen strafhoek. Een plek in huis waar je kind naartoe kan als het te veel wordt. Met een kussen, een knuffeldier, misschien een stressbal. Het kind kiest er zelf voor. Jij zegt: 'Ik zie dat het veel is. Wil je even naar je rustige plek?' Dit leert zelfregulatie: ik merk dat het te veel is en ik doe er iets mee. Dat is een vaardigheid voor het leven.\n\n5. De sportverslaggever-techniek\nBeschrijf wat je ziet, zonder oordeel. 'Ik zie dat je boos bent. Je gooit met je speelgoed. Je ademhaling is snel.' Alsof je een sportverslaggever bent die verslag doet. Dit doet drie dingen: het laat je kind weten dat je het ziet, het activeert hun denkbrein (ze moeten verwerken wat jij zegt), en het helpt ze verbinding maken tussen hun gevoel en hun gedrag. Greene beschrijft dit als de basis van collaboratief probleemoplossen: eerst laten merken dat je begrijpt wat er aan de hand is.",
      },
      // ── 8. Oefening ─────────────────────────────────────────────
      {
        type: "exercise" as const,
        title: "De Signalen-Spotter",
        instructions:
          "Deze week ga je de signalen van overbelasting bij je kind herkennen vóórdat de meltdown komt. Elke dag:\n\n1. Kies één moment waarop je kind vaak 'lastig' gedrag vertoont (huiswerk, eten, bedtijd, overgangen).\n\n2. Observeer de vijf minuten ervoor. Wat zie je? Wordt de stem hoger? Wordt het lichaam onrustiger? Raakt je kind sneller gefrustreerd? Trekt het zich terug?\n\n3. Noteer wat je ziet. Gewoon in je telefoon, een paar woorden. 'Dinsdag 17:30 — voor huiswerk — wipte op stoel, kauwde op pen, zuchtte drie keer.'\n\n4. Probeer bij één van die momenten te interveniëren vóór de meltdown. Bied een bewegingspauze aan, verklein de taak, of benoem wat je ziet: 'Ik zie dat dit zwaar is. Zullen we even pauzeren?'\n\n5. Merk het verschil. Wat gebeurt er als je ingrijpt bij de signalen in plaats van bij de uitbarsting?",
        duration: 10,
        tips: [
          "Begin met observeren, niet met ingrijpen. De eerste drie dagen mag je alleen kijken en noteren",
          "De signalen zijn voor elk kind anders. Sommige kinderen worden stil voor een meltdown, andere worden juist drukker",
          "Betrek je kind erbij: 'Hoe voelt het voor jou als het te veel wordt? Wat merk je in je lichaam?'",
          "Als je de meltdown niet kon voorkomen: niet erg. Je hebt nu informatie voor de volgende keer",
        ],
      },
      // ── 9. Reflectie ────────────────────────────────────────────
      {
        type: "reflection" as const,
        questions: [
          "Als je eerlijk bent: welk 'lastig' gedrag van je kind triggert jou het meest? Wat maakt dat het zo moeilijk is — je gevoel van falen als vader, de blikken van anderen, de angst dat het niet goed komt? En hoe reageert je kind op jóuw frustratie?",
          "Denk terug aan een moment waarop je kind gedrag vertoonde dat je niet begreep. Als je nu weet dat achter woede vaak overweldiging zit, achter weigering angst, en achter hyperactiviteit onderstimulatie — wat was er misschien écht aan de hand?",
        ],
      },
      // ── 10. Samenvatting ────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Onthoud dit",
        text: "Je kind geeft je geen moeilijke tijd. Je kind hééft een moeilijke tijd.\n\nDat is het verschil dat alles verandert. Achter elke uitbarsting zit een brein dat overbelast is. Achter elke weigering zit een kind dat niet weet hoe het moet beginnen. Achter elk wild gedrag zit een zenuwstelsel dat zoekt naar balans.\n\nJouw kind is niet het probleem. Het gedrag is een signaal. En jij bent niet de agent die het signaal moet stoppen — jij bent de gids die helpt uitzoeken wat het signaal betekent.\n\nDat vraagt iets moeilijks van je. Het vraagt dat je voorbij het gedrag kijkt. Dat je je eigen frustratie parkeert. Dat je structuur biedt in plaats van straf. Dat je beweging inzet als medicijn. Dat je begrijpt dat jouw kind harder moet werken voor dingen die andere kinderen vanzelf lijken te doen.\n\nEn het vraagt dat je onthoudt: kinderen doen het goed als ze het kunnen. Als het niet lukt, ontbreekt er een vaardigheid — geen motivatie. Jouw taak is niet straffen wat ze niet kunnen. Jouw taak is helpen bouwen wat er nog niet is.\n\nDat maakt je geen slappe vader. Dat maakt je de vader die je kind nodig heeft.",
      },
    ],
    keyTakeaways: [
      "Je kind geeft je geen moeilijke tijd — het heeft een moeilijke tijd. Gedrag is een signaal, geen keuze",
      "Kinderen doen het goed als ze het kunnen (Greene). Ontbrekende vaardigheden bouw je met begrip en structuur, niet met straf",
      "Herken de signalen vóór de meltdown: stem, lichaam, ademhaling. Vroeg interveniëren voorkomt escalatie",
      "Beweging, visuele schema's en een rustige plek zijn bewezen effectiever dan straffen bij ADHD-kenmerken en hooggevoeligheid",
    ],
    research:
      "Barkley (2013). Taking Charge of ADHD; Aron (2002). The Highly Sensitive Child; Greene (2014). The Explosive Child; Siegel & Bryson (2012). The Whole-Brain Child",
  },
];
