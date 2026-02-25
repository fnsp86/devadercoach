import type { LearningModule, Skill } from "../types";

export const PRIKKELVERWERKING_MODULES: LearningModule[] = [
  {
    id: "prikkel_mod_1",
    skill: "Grenzen" as Skill,
    title: "Te Veel, Te Hard, Te Snel — Grenzen Stellen voor een Prikkelgevoelig Kind",
    description:
      "Je kind flipt in de supermarkt, weigert kleren, houdt zijn handen op zijn oren. Het is geen ongehoorzaamheid — het is een zenuwstelsel dat overbelast raakt. Leer grenzen stellen die beschermen in plaats van controleren.",
    duration: "12-18 min",
    difficulty: "basis" as const,
    order: 1,
    themes: ["prikkelverwerking"],
    content: [
      // ── 1. Opening ──────────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Zaterdagochtend. De supermarkt.",
        text: "Het begon al bij de ingang. De automatische deuren, het felle tl-licht, de piepende kassa's, het geroezemoes van tientallen mensen. Sam (6) pakte jouw hand steviger vast. Je voelde het, maar je dacht: het gaat wel.\n\nBij de groenteafdeling begon het. Sam trok aan je mouw. 'Papa, ik wil weg.' Je zei: 'Nog even, we zijn bijna klaar.' Dat was niet waar — je had nog een half lijstje. Bij de zuivelafdeling stond hij stil. Handen op zijn oren. Ogen dicht. Je voelde de irritatie opkomen. We zijn in een supermarkt, niet op een slagveld.\n\nBij de kassa klapte hij dicht. Ging op de grond zitten. Begon te huilen. Mensen keken. Een oudere mevrouw zei: 'Dat kind heeft gewoon een stevige hand nodig.' Je voelde schaamte. Woede. En ergens diep vanbinnen: onmacht. Want je wist dat een stevige hand hier niks zou oplossen.\n\nOf misschien herken je het anders. Elke ochtend hetzelfde gevecht: de sokken kriebelen. Het label in het shirt prikt. De nieuwe schoenen 'doen pijn' — maar je hebt ze net gekocht en er is niks mis mee. Je staat om kwart over zeven al te onderhandelen over een broek. En je denkt: waarom kan mijn kind niet gewoon kleren dragen zoals ieder ander kind?\n\nDat 'gewoon' is precies het woord dat je in de weg zit. Want voor Sam is er niks gewoons aan die supermarkt. En voor je kind is er niks gewoons aan dat label. Hun zenuwstelsel verwerkt de wereld anders. Niet fout. Niet overdreven. Anders. En als je dat eenmaal begrijpt, verandert alles — vooral de manier waarop jij grenzen stelt.",
      },
      // ── 2. De wetenschap ────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Waarom het zenuwstelsel de baas is",
        text: "In de jaren zeventig deed de Amerikaanse ergotherapeut A. Jean Ayres baanbrekend onderzoek naar hoe het brein zintuiglijke informatie verwerkt. Haar sensorische integratietheorie legt uit dat ons zenuwstelsel constant bezig is met het ontvangen, ordenen en interpreteren van prikkels — geluid, aanraking, licht, beweging, zwaartekracht, zelfs de positie van je lichaam in de ruimte. Bij de meeste mensen gaat dat automatisch. Bij kinderen met prikkelverwerking-uitdagingen werkt dat systeem anders. Het brein ontvangt dezelfde informatie, maar verwerkt het te sterk, te zwak of te ongeorganiseerd.\n\nLucy Jane Miller, een leerling van Ayres en oprichtster van de STAR Institute, bracht dit verder. Zij definieerde Sensory Processing Disorder als een patroon waarbij het zenuwstelsel sensorische signalen niet adequaat omzet in passend gedrag. Belangrijk: dit is neurologisch, niet gedragsmatig. Het kind kiest er niet voor om te flippen in de supermarkt. Het zenuwstelsel doet dat.\n\nWinnie Dunn, professor aan de University of Missouri, ontwikkelde het meest gebruikte model om te begrijpen hoe dit eruitziet in de praktijk. Zij beschreef vier sensorische profielen:\n\nDe vermijder heeft een laag prikkeldrempel en trekt zich actief terug. Dit is het kind dat zijn handen op zijn oren houdt, weigert bepaalde kleding te dragen, of niet naar verjaardagsfeestjes wil. Het zenuwstelsel raakt te snel vol.\n\nDe sensor heeft ook een lage prikkeldrempel, maar reageert passief. Dit kind merkt alles op — elk geluid, elke geur, elke verandering — maar zegt er niet altijd iets over. Het raakt sneller vermoeid, prikkelbaar of overweldigd zonder dat je precies weet waarom.\n\nDe zoeker heeft een hoge prikkeldrempel en zoekt actief naar meer input. Dit is het kind dat overal tegenaan botst, van het klimrek springt, alles aanraakt, hard praat. Niet druk uit ongehoorzaamheid — maar omdat het zenuwstelsel meer input nodig heeft om te functioneren.\n\nDe toeschouwer heeft ook een hoge prikkeldrempel maar reageert passief. Dit kind mist prikkels. Het merkt niet dat je iets zegt, reageert traag, lijkt in een eigen wereld te leven. Niet ongehoorzaam. Niet ongeinteresseerd. Het signaal komt simpelweg niet goed door.\n\nDit is cruciaal om te begrijpen als vader: het gedrag dat je ziet — de weigering, de meltdown, het wilde rennen, het niet-reageren — is niet het probleem. Het is het symptoom van een zenuwstelsel dat de wereld anders ervaart. En de grenzen die je stelt moeten dat zenuwstelsel beschermen, niet overschrijven.",
      },
      // ── 3. Diagram ──────────────────────────────────────────────
      {
        type: "diagram" as const,
        diagramTitle: "De vier sensorische profielen (Winnie Dunn)",
        diagramData: [
          {
            emoji: "🙉",
            label: "De Vermijder",
            description:
              "Lage prikkeldrempel, actief. Trekt zich terug, houdt handen op oren, weigert bepaalde kleren of eten. Heeft grenzen nodig die beschermen tegen te veel prikkels.",
          },
          {
            emoji: "🔍",
            label: "De Sensor",
            description:
              "Lage prikkeldrempel, passief. Merkt alles op, raakt sneller moe en prikkelbaar. Heeft grenzen nodig rond rusttijd en overgangs-momenten.",
          },
          {
            emoji: "🚀",
            label: "De Zoeker",
            description:
              "Hoge prikkeldrempel, actief. Botst overal tegenaan, springt, klimt, praat hard. Heeft grenzen nodig die veiligheid bieden en tegelijk voldoende input geven.",
          },
          {
            emoji: "🌫️",
            label: "De Toeschouwer",
            description:
              "Hoge prikkeldrempel, passief. Mist signalen, reageert traag, lijkt in eigen wereld. Heeft grenzen nodig die activeren en structuur bieden zonder te overweldigen.",
          },
        ],
      },
      // ── 4. Voorbeeld 1 ──────────────────────────────────────────
      {
        type: "example" as const,
        situation:
          "Mila (5) weigert de nieuwe schoenen aan te doen. Het is de derde ochtend op rij. Ze schreeuwt, trekt ze uit, gooit ze door de gang. Je hebt ze net gekocht. Er is niks mis mee. Je staat al tien minuten te onderhandelen en je moet naar je werk.",
        wrongApproach:
          "DE GRENS ALS CONTROLE:\n\nPapa, gefrustreerd: 'Mila, die schoenen gaan aan. Nu. We zijn al laat.'\nMila huilt: 'Ze doen pijn!'\nPapa: 'Er is niks mis met die schoenen. Ieder kind draagt schoenen. Doe ze aan.'\nMila schopt en gilt. Papa duwt de schoenen aan haar voeten. Mila huilt de hele weg naar school.\n\nWat Mila leerde: mijn gevoel doet er niet toe. Papa snapt het niet. Ik moet lijden en stil zijn. De volgende ochtend: zelfde gevecht. Erger. Want nu zit er angst bij.",
        rightApproach:
          "DE GRENS ALS BESCHERMING:\n\nPapa ziet de paniek. Denkt: dit gaat niet over ongehoorzaamheid. Dit is haar zenuwstelsel.\n\nPapa, rustig: 'Die schoenen voelen niet fijn voor jou, he.'\nMila, huilend: 'Ze prikken!'\nPapa: 'Ik geloof je. We gaan het oplossen. Vandaag trek je je oude schoenen aan. Vanavond kijken we samen wat er aan de hand is.'\nMila kalmeert. Trekt haar oude schoenen aan. Naar school op tijd.\n\n's Avonds bekijkt papa de schoenen. De naden aan de binnenkant zijn ruw. Hij koopt naadloze sokken en laat Mila de schoenen thuis oefenen, tien minuten per dag, zonder druk.\n\nWat Mila leerde: papa gelooft me. Mijn gevoel telt. Er komt een oplossing.",
        explanation:
          "Beide vaders stelden een grens — Mila moest naar school. Maar de eerste vader stelde de grens op de schoenen (jij draagt wat ik koop). De tweede vader stelde de grens op het doel (je gaat naar school) en was flexibel in de route erheen. Bij tactiele gevoeligheid is de naadbinnenkant van een schoen niet 'niks' — het voelt als schuurpapier op de huid. De tweede vader begreep: bescherming van het zenuwstelsel en grenzen stellen zijn geen tegenpolen. Ze versterken elkaar.",
      },
      // ── 5. Verdieping ──────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Grenzen die beschermen in plaats van overschrijven",
        text: "Hier zit de kern van deze module, en het is misschien het belangrijkste dat je vandaag leest: bij een kind met prikkelverwerking-uitdagingen is de functie van een grens anders dan je denkt.\n\nBij de meeste kinderen stel je grenzen om gedrag te sturen. Niet slaan. Niet schreeuwen. Op tijd naar bed. Die grenzen leren je kind omgaan met de wereld.\n\nBij een prikkelgevoelig kind stel je grenzen om het zenuwstelsel te beschermen. Dat klinkt abstract, dus laten we het concreet maken.\n\nEen grens die het zenuwstelsel beschermt kan er zo uitzien: je gaat naar een verjaardagsfeestje, maar jullie spreken af dat je na een uur samen even naar buiten gaat. Dat is geen toegeven. Dat is een grens die zegt: we gaan, maar we doen het op een manier die jouw brein aankan.\n\nOf: je kind draagt een koptelefoon in drukke situaties. Dat is geen aanstellerij. Dat is een hulpmiddel, net als een bril voor iemand die slecht ziet.\n\nOf: voor het zwemles ga je thuis eerst de zwemkleding aandoen en weer uittrekken, zodat de tactiele overgang niet nieuw is. Dat is voorbereiding, geen verwenning.\n\nHet verschil met gewone grenzen is dit: je bewaart dezelfde structuur — we gaan naar het feestje, je gaat naar school, je doet mee met gym — maar je past de route aan. Niet het doel. De route. Je beschermt het zenuwstelsel zodat je kind kan meedoen, in plaats van te eisen dat het meedoet en dan pas te reageren als het misgaat.\n\nDit vraagt een omslag in je denken als vader. Want je bent misschien opgegroeid met het idee dat een kind zich moet aanpassen aan de wereld. En dat klopt ook — uiteindelijk. Maar eerst moet de wereld een beetje aangepast worden aan het kind, zodat het kind kan leren. Een plant groeit niet harder als je eraan trekt. Die groeit als je de juiste grond, het juiste licht en de juiste hoeveelheid water geeft.\n\nEn dan de moeilijke vraag: wanneer is het prikkelverwerking en wanneer is het gewoon niet willen? Eerlijk antwoord: soms weet je het niet. Maar er zijn aanwijzingen. Prikkelgerelateerd gedrag is consistent — het gaat altijd over dezelfde triggers (bepaalde geluiden, texturen, situaties). Het is fysiek zichtbaar — handen op oren, lichaam dat verstijft, pupillen die groter worden. En het kind vindt het zelf ook niet leuk. Een kind dat 'niet wil' is ontspannen en onderhandelend. Een kind dat 'niet kan' is gespannen, overweldigd of in paniek. Als je dat verschil leert zien, weet je wanneer je moet vasthouden en wanneer je moet beschermen.",
      },
      // ── 6. Voorbeeld 2 ──────────────────────────────────────────
      {
        type: "example" as const,
        situation:
          "Daan (7) botst de hele dag tegen meubels, springt van de bank, stompt zijn broertje 'voor de grap', praat keihard en kan niet stilzitten bij het eten. Je hebt al drie keer gezegd: 'Doe eens rustig.' Het helpt niet.",
        wrongApproach:
          "GRENZEN OP HET GEDRAG:\n\nPapa: 'Daan, SIT STIL. Nu.' Daan zit vijf seconden stil. Begint te wiebelen. Stoot zijn glas om.\nPapa: 'Wat zei ik nou?! Naar je kamer!'\nDaan stampt naar boven. Springt op zijn bed. Bonkt tegen de muur.\nPapa denkt: hij luistert gewoon niet.\n\nWat er werkelijk gebeurde: Daans zenuwstelsel is onderstimuleerd. Het zoekt input — beweging, druk, impact. 'Stil zitten' is voor Daan wat 'niet ademen' is voor jou. Hij kan het even, maar het kost al zijn energie. En op zijn kamer zoekt hij alsnog de input die hij nodig heeft.",
        rightApproach:
          "GRENZEN OP DE BEHOEFTE:\n\nPapa herkent het patroon: Daan is een zoeker. Zijn lijf heeft input nodig.\n\nVoor het eten: 'Daan, we gaan vijf minuten stoepen. Jij rent naar de lantaarnpaal en terug, zo hard als je kan. Drie keer.'\nDaan rent. Komt hijgend terug. Gaat aan tafel zitten. Rustiger.\n\nAan tafel: Daan zit op een wigkussen dat beweging toelaat. Hij mag een stressbal vasthouden. De grens is helder: 'Je blijft aan tafel. Je eet je bord leeg. Maar je mag bewegen op je kussen.'\n\nDaan houdt het vol. Niet perfect. Maar wel twintig minuten. Vorige week was het vijf.\n\nWat papa deed: hij gaf Daans zenuwstelsel wat het nodig had voordat hij de grens stelde. De grens bleef staan. Maar de route ernaartoe was aangepast.",
        explanation:
          "Daan is een sensorisch zoeker — zijn zenuwstelsel heeft meer input nodig dan gemiddeld. 'Stil zitten' zonder voorafgaande beweging is als een volle blaas negeren: het lukt even, maar het kost alle aandacht. Door voor het eten intense beweging aan te bieden en tijdens het eten sensorische hulpmiddelen te gebruiken (wigkussen, stressbal), gaf papa het zenuwstelsel wat het nodig had. De grens — aan tafel blijven, je bord eten — bleef staan. Maar het kind kon hem nu volhouden. Dat is het verschil: niet de grens verlagen, maar het kind in staat stellen de grens te halen.",
      },
      // ── 7. Toolkit ─────────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Je gereedschapskist: grenzen stellen met prikkelwijsheid",
        text: "1. Het Prikkel-Paspoort\nMaak een kort document — het mag op je telefoon — waarin je beschrijft wat voor jouw kind werkt en wat niet. Welke prikkels zijn moeilijk? Welke helpen? Wat zijn de signalen dat het te veel wordt? Deel dit met school, oppas, grootouders, sportclub. Iedereen die met je kind werkt heeft die informatie nodig. Het is geen label. Het is een gebruiksaanwijzing. Zoals een bril-recept geen label is voor iemand die slecht ziet.\n\n2. De Sensorische Dieet-Aanpak\nDit is een term van Jean Ayres: een 'sensorisch dieet' is een geplande set van sensorische activiteiten verspreid over de dag die het zenuwstelsel in balans houden. Voor een zoeker: spring, ren, draag zware tassen, duw tegen een muur, gebruik een gewichtsdeken. Voor een vermijder: creeer stiltemomenten, gebruik oordopjes of een koptelefoon, verminder visuele drukte in de slaapkamer, was kleding eerst zacht. Het idee is preventie: als het zenuwstelsel in balans is, kan je kind meer aan. Dan worden grenzen haalbaar in plaats van onmogelijk.\n\n3. Waarschuwen voor Prikkelsituaties\nGa je naar een drukke plek? Vertel je kind van tevoren wat het kan verwachten. 'We gaan naar de supermarkt. Het is er licht en druk. We zijn er een kwartier. Als het te veel wordt, gaan we even naar buiten.' Dit is geen verwenning. Dit is je kind de kans geven om zich voor te bereiden. Een zenuwstelsel dat weet wat er komt, kan er beter mee omgaan.\n\n4. Kledingstrategieen\nKnip labels eruit. Koop naadloze sokken. Laat je kind kleding kiezen die goed voelt. Was nieuwe kleding een paar keer voor het eerste dragen. Dwing nooit kleding af die fysiek onverdraaglijk voelt voor je kind. De grens is: je draagt kleding naar school. De route is: kleding die jouw zenuwstelsel aankan.\n\n5. De Prikkel-Thermometer\nLeer je kind een taal voor hoe vol het zenuwstelsel zit. Gebruik een schaal van 1-5, of kleuren: groen (oké), geel (het wordt veel), rood (te veel). Hang het op. Oefen ermee. 'Hoe zit je nu? Groen? Geel?' Als je kind kan benoemen dat het op geel zit, kunnen jullie samen ingrijpen voordat rood komt. Dat is zelfregulatie in de maak.\n\n6. Gewichtsdekens en Druk-Input\nDiepe druk kalmeert het zenuwstelsel. Dat is wetenschap, geen hype. Een gewichtsdeken bij het slapen. Een stevig knuffelmoment. Een rugzak met een boek erin. Druk op de schouders. Dit activeert het proprioceptieve systeem en helpt het brein tot rust komen. Voor zoekers en vermijders kan dit het verschil maken tussen een avond vol meltdowns en een avond die werkt.",
      },
      // ── 8. Oefening ─────────────────────────────────────────────
      {
        type: "exercise" as const,
        title: "Het Prikkel-Dagboek",
        instructions:
          "Deze week ga je het zenuwstelsel van je kind leren kennen door te observeren en te noteren. Dit is geen test en geen diagnose — het is informatie verzamelen.\n\n1. Neem elke dag vijf minuten om te noteren:\n   - Wanneer was het lastig? (tijdstip, situatie)\n   - Welke prikkels waren er? (geluid, licht, aanraking, drukte, geur, beweging)\n   - Wat deed je kind? (handen op oren, terugtrekken, wild worden, huilen, verstijven)\n   - Wat hielp? (rust, beweging, knuffel, koptelefoon, naar buiten gaan)\n\n2. Na drie dagen: bekijk je notities. Zie je een patroon? Zijn het steeds dezelfde prikkels? Dezelfde momenten van de dag? Dezelfde reacties?\n\n3. Na vijf dagen: schrijf een mini prikkel-paspoort. Drie regels:\n   - 'Mijn kind heeft moeite met: [invullen]'\n   - 'Wat helpt: [invullen]'\n   - 'Signalen dat het te veel wordt: [invullen]'\n\n4. Bespreek het met je partner. En als je kind oud genoeg is (6+): bespreek het met je kind. 'Ik merk dat drukke plekken moeilijk zijn voor je. Klopt dat? Wat zou helpen?'\n\n5. Deel het mini-paspoort met school of opvang als je dat wilt.",
        duration: 10,
        tips: [
          "Noteer zonder oordeel. Niet 'hij deed weer moeilijk over sokken' maar 'hij reageerde op de textuur van de sokken'",
          "Betrek je kind erbij als het oud genoeg is. Kinderen zijn vaak de beste experts over hun eigen zenuwstelsel",
          "Let ook op wat goed gaat. Wanneer is je kind ontspannen? Wat voor prikkels zijn er op dat moment? Dat vertelt je net zoveel als de moeilijke momenten",
          "Als je een duidelijk patroon ziet dat het dagelijks functioneren belemmert, bespreek het met de huisarts of een kinderfysiotherapeut met specialisatie in sensorische integratie",
        ],
      },
      // ── 9. Reflectie ────────────────────────────────────────────
      {
        type: "reflection" as const,
        questions: [
          "Wees eerlijk: als je kind voor de zoveelste keer weigert om die schoenen aan te doen of flipt in de supermarkt, wat voel jij dan? Schaamte? Frustratie? Het gevoel dat je kind 'gewoon overdrijft'? En wat zou er veranderen als je echt gelooft dat het zenuwstelsel van je kind de wereld anders ervaart dan het jouwe — dat het niet overdrijft, maar dat het daadwerkelijk meer voelt?",
          "Kijk naar de grenzen die je nu stelt rond lastige sensorische momenten (kleding, eten, drukke situaties). Zijn die grenzen gericht op het controleren van gedrag ('doe gewoon normaal') of op het beschermen van het zenuwstelsel ('hoe kan ik je helpen zodat je dit aankan')? Wat zou er veranderen als je elke grens door die tweede lens bekijkt?",
        ],
      },
      // ── 10. Samenvatting ────────────────────────────────────────
      {
        type: "text" as const,
        heading: "Samenvatting",
        text: "Prikkelverwerking is neurologisch, niet gedragsmatig. Je kind kiest er niet voor om te flippen bij harde geluiden, ruwe stoffen of drukke ruimtes. Het zenuwstelsel verwerkt de wereld anders — te sterk, te zwak, of te ongeorganiseerd. De vier sensorische profielen van Winnie Dunn (vermijder, sensor, zoeker, toeschouwer) helpen je begrijpen wat je kind nodig heeft.\n\nGrenzen stellen bij een prikkelgevoelig kind vraagt een andere aanpak: niet het doel veranderen, maar de route. Je kind gaat naar school, naar het feestje, naar de supermarkt — maar met aanpassingen die het zenuwstelsel beschermen. Koptelefoon, naadloze sokken, bewegingspauzes, waarschuwingen vooraf. Dat is geen verwenning. Dat is wijsheid.\n\nJe gereedschap: het prikkel-paspoort, het sensorisch dieet, de prikkel-thermometer, kledingstrategieen en gewichtsdekens. En bovenal: observeren, noteren, patronen herkennen. Je kind is de beste bron van informatie over wat het zenuwstelsel nodig heeft.\n\nDe kernvraag bij elke grens is niet meer 'hoe zorg ik dat mijn kind luistert' maar 'hoe zorg ik dat mijn kind dit aankan.' Dat maakt je geen slappe vader. Dat maakt je een vader die begrijpt dat echte grenzen niet gaan over gehoorzaamheid — maar over veiligheid. En een beschermd zenuwstelsel is het veiligste fundament dat je je kind kunt geven.",
      },
    ],
    keyTakeaways: [
      "Prikkelverwerking is neurologisch, niet gedragsmatig — je kind kiest niet voor meltdowns, het zenuwstelsel raakt overbelast of onderstimuleerd",
      "Grenzen bij prikkelgevoelige kinderen beschermen het zenuwstelsel: zelfde doel, aangepaste route (koptelefoon, bewegingspauzes, kledingkeuze)",
      "Ken het profiel van je kind (vermijder, sensor, zoeker, toeschouwer) en stem je grenzen daarop af",
      "Het prikkel-paspoort en sensorisch dieet zijn je belangrijkste gereedschap: preventie werkt beter dan reactie",
    ],
    research:
      "Ayres (1972). Sensory Integration and Learning Disorders; Miller et al. (2007). Sensory Processing Disorder; Dunn (1997). The Sensory Profile; Dunn (2014). Sensory Profile 2 Manual; Schaaf & Mailloux (2015). Clinician's Guide for Implementing Ayres Sensory Integration",
  },
];
