import type { LearningModule, Skill } from "../types";

export const HERSTEL_MODULES: LearningModule[] = [
{
  id: "he_mod_1",
  skill: "Herstel" as Skill,
  title: "Elke Relatie Gaat Stuk",
  description: "Je schreeuwde. Het werd stil. Nu voel je je rot. Goed nieuws: het gaat niet om perfectie. Het gaat om wat je hierna doet.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 1,
  content: [
    {
      type: "text" as const,
      heading: "Het is weer gebeurd.",
      text: "Levi (6) morste melk over zijn huiswerk. Je schreeuwde. Harder dan je bedoelde. Nu zit hij stil aan tafel en kijkt niet meer naar je.\n\nDat moment ken je. Die stilte. Dat schuldgevoel. En die stem in je hoofd: ik ben een slechte vader.",
    },
    {
      type: "text" as const,
      heading: "Kapot is niet het probleem",
      text: "Hier komt het goede nieuws. Elke relatie gaat stuk. Elke dag. Meerdere keren per dag.\n\nOnderzoek laat zien dat 70% van alle interacties tussen ouder en kind een misafstemming bevat. Zeventig procent. Je leest dat goed.\n\nHet verschil tussen een veilige en onveilige hechting? Niet het aantal keren dat het misgaat. Maar het aantal keren dat je het herstelt.\n\nDe kinderpsycholoog Winnicott noemde het de 'good enough parent'. Niet perfect. Goed genoeg. En goed genoeg betekent: stuk, herstel, stuk, herstel. Op repeat.\n\nDat patroon — breken en repareren — is precies hoe je kind leert dat relaties veilig zijn. Niet omdat ze nooit beschadigen. Maar omdat ze hersteld kunnen worden.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Edward Tronick's Still Face Experiment toonde aan dat baby's al in hun eerste jaar herstel verwachten na stress. Het breken van contact is niet het probleem — het uitblijven van herstel wel. Kinderen die regelmatig herstel ervaren ontwikkelen sterkere emotieregulatie en veerkracht. Winnicott bevestigde: perfecte ouders bestaan niet, maar 'good enough' ouders bouwen veilige hechting.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "De herstelcyclus",
      diagramData: [
        {
          emoji: "💥",
          label: "1. Breuk",
          description: "Misafstemming. Schreeuwen, negeren, ongeduld. Normaal. Gebeurt 70% van de tijd.",
        },
        {
          emoji: "🪞",
          label: "2. Bewustwording",
          description: "Je merkt het. Schuldgevoel, spanning, stilte. Dit is het scharnierpunt. Hier begint herstel.",
        },
        {
          emoji: "🤝",
          label: "3. Herstel",
          description: "Teruggaan. Sorry zeggen. Verbinding herstellen. Elke keer sterker dan ervoor.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Levi (6) morste melk over zijn huiswerk. Papa schreeuwde: 'Kun je niet uitkijken?!' Levi verstijfde. Nu is het stil in huis.",
      wrongApproach: "DOEN ALSOF HET NIET GEBEURDE:\n\nPapa voelt zich rot. Maar zegt niks. Een uur later: 'Hé Levi, zullen we een spelletje doen?'\nLevi doet mee maar is afstandelijk.\nPapa denkt: zie je, het is weer goed.\n\nHet is niet goed. Levi leerde: als papa boos wordt, doen we alsof het niet gebeurde. Zijn gevoel telt niet.",
      rightApproach: "TERUGGAAN EN HERSTELLEN:\n\nPapa gaat naar Levi's kamer. Knielt. Oogcontact.\n'Levi, ik schreeuwde net tegen je. Dat was niet oké. Het was maar melk. Jij deed niks verkeerd. Het spijt me.'\nLevi: '...ik schrok.'\nPapa: 'Dat snap ik. Dat was niet fijn. Sorry.'\n\nLevi leert: papa maakt fouten. Maar papa komt terug. Ik ben veilig.",
      explanation: "Negeren voelt makkelijker, maar het kind leert dat zijn gevoelens er niet toe doen. Teruggaan en benoemen is moeilijker — en precies wat veilige hechting bouwt.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Merk de breuk op. Dat schuldgevoel? Gebruik het. Het is je signaal dat er iets te herstellen valt.\n\n2. Wacht niet te lang. Herstel binnen het uur is krachtiger dan herstel de volgende dag. Hoe eerder, hoe beter.\n\n3. Ga naar je kind toe. Fysiek. Kniel. Maak oogcontact op hun hoogte. Dat alleen al zegt: jij bent belangrijk genoeg om naartoe te komen.\n\n4. Benoem wat jij fout deed. Niet: 'sorry dat je boos werd.' Maar: 'sorry dat ik schreeuwde.' Eigenaarschap. Punt.",
    },
    {
      type: "exercise" as const,
      title: "Je eerste bewuste herstelmoment",
      instructions: "1. Denk aan het laatste moment dat je te hard reageerde op je kind.\n2. Ga vanavond of morgenochtend naar je kind toe. Kniel op hun hoogte.\n3. Zeg drie zinnen:\n   - Wat er gebeurde: 'Ik schreeuwde tegen je.'\n   - Dat het niet oké was: 'Dat was niet fijn voor jou.'\n   - Dat het niet hun schuld was: 'Jij deed niks verkeerd.'\n4. Dat is het. Geen uitleg, geen les. Drie zinnen.\n5. Bij een tiener (12+): dezelfde drie zinnen, maar geef ze daarna ruimte. 'Je hoeft nu niks te zeggen.' Tieners verwerken herstel op hun eigen tempo.",
      duration: 5,
      tips: [
        "Het voelt ongemakkelijk. Dat is normaal. Ongemak is het bewijs dat je iets nieuws doet.",
        "Als je kind jong is (onder 4): een knuffel en 'sorry van papa' is genoeg. Woorden hoeven niet perfect.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Hoe ging jouw vader om met momenten dat hij te ver ging? Werd er hersteld, of deed iedereen alsof het niet gebeurd was?",
        "Wat houdt je tegen om als eerste naar je kind toe te gaan na een conflict?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "70% van ouder-kind interacties bevat misafstemming. Dat is normaal. Het verschil maakt herstel. Ga terug, benoem wat jij fout deed, en maak verbinding. Niet perfect zijn — maar altijd terugkomen. Dat bouwt veilige hechting.",
    },
  ],
  keyTakeaways: [
    "70% van ouder-kind interacties bevat misafstemming — dat is normaal en niet het probleem",
    "Het verschil tussen veilige en onveilige hechting is niet perfectie maar herstel",
    "Ga altijd terug naar je kind, benoem wat jij fout deed, en herstel de verbinding",
  ],
  research: "Tronick (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children; Winnicott (1957). The Child and the Family: First Relationships",
  quizQuestions: [
    {
      question: "Winnicott's 'good enough parent' streeft bewust naar imperfectie. Waarom is dat geen excuus om je er makkelijk van af te maken?",
      options: [
        { text: "Omdat 'good enough' juist harder werken is: je moet elke breuk actief herstellen in plaats van breuken te voorkomen", isCorrect: true },
        { text: "Omdat kinderen niet doorhebben of je je best doet of niet, zolang je maar sorry zegt", isCorrect: false },
        { text: "Omdat perfectie onhaalbaar is, en 'good enough' het best haalbare alternatief is als je het druk hebt", isCorrect: false },
      ],
      explanation: "'Good enough' is niet het makkelijke alternatief voor perfectie. Het vereist een actief patroon van bewustwording en herstel na elke breuk. Dat kost meer moeite dan het vermijden van conflict, maar het is wél wat veilige hechting bouwt.",
    },
    {
      question: "Welke uitspraak over de 70%-misafstemming is NIET waar?",
      options: [
        { text: "Misafstemming is biologisch normaal en komt bij alle ouder-kindrelaties voor", isCorrect: false },
        { text: "70% misafstemming betekent dat de meeste ouders baat zouden hebben bij professionele hulp", isCorrect: true },
        { text: "Het patroon van breken en herstellen bouwt veerkracht bij kinderen", isCorrect: false },
      ],
      explanation: "70% misafstemming is de norm bij álle ouder-kindrelaties, ook gezonde. Het is geen teken van falen maar een biologisch gegeven. De sleutel zit niet in het verlagen van dat percentage, maar in het consequent herstellen van die momenten.",
    },
    {
      question: "Je herstelt al drie keer deze week na een uitbarsting. Je partner zegt: 'Je gebruikt herstel als excuus om te blijven schreeuwen.' Wat klopt er?",
      options: [
        { text: "Je partner heeft gelijk — je moet eerst stoppen met schreeuwen voordat herstel zin heeft", isCorrect: false },
        { text: "Je partner zit ernaast — herstel is altijd goed, ongeacht hoe vaak je het nodig hebt", isCorrect: false },
        { text: "Er zit een kern van waarheid in, maar de oplossing is herstel combineren met werk aan je triggers, niet stoppen met herstellen", isCorrect: true },
      ],
      explanation: "Herstel is geen vrijbrief, maar het stopzetten ervan beschermt je kind niet. De juiste aanpak is tweesporig: blijf herstellen (dat beschermt de relatie nu) én werk structureel aan je triggers (dat vermindert de breuken). Het één vervangt het ander niet.",
    },
    {
      question: "Na een schreeuwmoment ga je naar je kind (5) toe. Je kind zegt: 'Ga weg!' en duwt je hand weg. Wat is de beste reactie?",
      options: [
        { text: "Zeg rustig 'Ik begrijp dat je boos bent. Ik blijf in de buurt.' en geef fysieke ruimte zonder de kamer te verlaten", isCorrect: true },
        { text: "Geef je kind volledige ruimte door de kamer te verlaten en later terug te komen als het rustig is", isCorrect: false },
        { text: "Blijf zitten en leg uit waarom je sorry wilt zeggen, zodat je kind begrijpt dat je goede bedoelingen hebt", isCorrect: false },
      ],
      explanation: "Een kind dat je wegduwt na een breuk test of je echt blijft. Helemaal weggaan bevestigt de onveiligheid. Blijven uitleggen respecteert de grens niet. De middenweg — ruimte geven maar beschikbaar blijven — laat zien: ik respecteer je gevoel én ik laat je niet alleen.",
    },
  ],
},
{
  id: "he_mod_2",
  skill: "Herstel" as Skill,
  title: "Hoe Je Echt Sorry Zegt",
  description: "Sorry zeggen klinkt simpel. Maar 'sorry, maar jij begon' is geen sorry. Leer de vijf stappen van een excuus dat echt aankomt.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 2,
  content: [
    {
      type: "text" as const,
      heading: "Sorry, maar...",
      text: "Je zei het weer. 'Sorry hoor, maar als jij gewoon had geluisterd...' Je dochter keek je aan. Niet overtuigd. Terecht.\n\nDe meeste vaders zeggen wel sorry. Maar het zijn nep-sorry's. En kinderen voelen dat feilloos.",
    },
    {
      type: "text" as const,
      heading: "Een echte sorry heeft vijf stappen",
      text: "De meeste vaders gebruiken er één: het woord 'sorry'. En dan stoppen ze. Of erger: ze voegen 'maar' toe. Waarmee de hele sorry verdampt.\n\nEen echt excuus is een vaardigheid. Het heeft vijf stappen:\n\n1. Benoem wat je deed. Concreet. 'Ik schreeuwde tegen je bij het avondeten.'\n2. Erken de impact. 'Dat was eng voor je.' Niet: 'dat was niet mijn bedoeling.'\n3. Neem verantwoordelijkheid. 'Dat was mijn fout. Niet de jouwe.'\n4. Zeg wat je anders wilt doen. 'Volgende keer loop ik even weg om rustig te worden.'\n5. Vraag niks terug. Geen 'maar jij moet ook...' Geen voorwaarden. Klaar.\n\nDat voelt kwetsbaar. Dat ís kwetsbaar. En precies daarom werkt het.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Onderzoek naar effectieve excuses toont dat verantwoordelijkheid nemen het krachtigste element is. Excuses zonder eigenaarschap ('sorry dat je je zo voelt') verergeren het conflict. Herstelgesprekken waarin de volwassene concreet benoemt wat hij fout deed, versterken het vertrouwen en de emotionele veiligheid van het kind significant.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Nep-sorry vs. echte sorry",
      diagramData: [
        {
          emoji: "🚫",
          label: "Nep-sorry",
          description: "'Sorry hoor, maar jij begon.' Verschuift de schuld. Kind voelt: mijn gevoel telt niet.",
        },
        {
          emoji: "😐",
          label: "Halve sorry",
          description: "'Sorry dat je je zo voelt.' Erkent het gevoel niet echt. Kind voelt: papa snapt het niet.",
        },
        {
          emoji: "✅",
          label: "Echte sorry",
          description: "'Ik schreeuwde. Dat was niet oké. Jouw fout was het niet.' Kind voelt: ik ben veilig.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Emma (7) treuzelde met aankleden. Papa verloor zijn geduld en riep: 'Doe het nou gewoon! Elke ochtend hetzelfde!' Emma huilde. Papa wil sorry zeggen.",
      wrongApproach: "DE NON-SORRY:\n\nPapa: 'Sorry hè, maar als jij nou gewoon op tijd was begonnen had ik niet hoeven schreeuwen.'\nEmma kijkt naar de grond.\nPapa: 'Oké? Zijn we weer vrienden?'\nEmma knikt. Maar ze is niet oké.\n\nDit is geen sorry. Dit is een beschuldiging verpakt als excuus. Emma leerde: mijn gevoel is minder belangrijk dan papa's ongeduld.",
      rightApproach: "DE VIJF-STAPPEN SORRY:\n\nPapa gaat op zijn hurken. Oogcontact.\n'Emma, ik riep vanmorgen hard tegen je.' (1: benoem)\n'Dat was niet fijn. Je schrok ervan.' (2: impact)\n'Dat was mijn schuld. Jij deed niks verkeerd — aankleden duurt soms lang, dat is normaal.' (3: verantwoordelijkheid)\n'Volgende keer ga ik even diep ademhalen als ik merk dat ik ongeduldig word.' (4: anders)\nStilte. Knuffel als Emma dat wil. (5: vraag niks terug)\n\nEmma leerde: papa's fouten zijn niet mijn schuld. En sorry is veilig.",
      explanation: "De non-sorry verplaatst de schuld naar het kind. De echte sorry neemt eigenaarschap. Het verschil: Emma voelt zich veilig genoeg om fouten te mogen maken.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Check op 'maar'. Als er een 'maar' in je sorry zit, begin opnieuw. 'Maar' wist alles wat ervoor kwam.\n\n2. Gebruik het 5-stappenscript. Benoem, erken impact, neem verantwoordelijkheid, zeg wat je anders doet, vraag niks terug. In die volgorde.\n\n3. Oefen hardop. Het klinkt gek, maar oefen je sorry onder de douche of in de auto. De eerste keer voelt onwennig. De tiende keer is het een gewoonte.\n\n4. Timing telt. Sorry zeggen als je zelf nog geïrriteerd bent werkt niet. Kalmeer eerst. Dan pas herstellen.",
    },
    {
      type: "exercise" as const,
      title: "Het oefenscript",
      instructions: "1. Denk aan een recent moment waarop je te scherp reageerde.\n2. Pak je telefoon en schrijf de vijf stappen uit:\n   - Stap 1: Wat deed ik? ('Ik riep hard tegen je.')\n   - Stap 2: Wat was het effect? ('Je schrok ervan.')\n   - Stap 3: Wiens schuld was het? ('Dat was mijn fout, niet de jouwe.')\n   - Stap 4: Wat doe ik anders? ('Volgende keer loop ik even weg om rustig te worden.')\n   - Stap 5: Stop. Geen voorwaarden. Geen 'maar'.\n3. Lees het hardop voor. Ja, echt hardop.\n4. Zeg het morgen tegen je kind.",
      duration: 5,
      tips: [
        "Het voelt overdreven om dit uit te schrijven. Doe het toch. Je brein onthoudt het beter als je het opschrijft.",
        "Begin met een klein moment. Je hoeft niet je grootste fout te pakken. Een snauwtje is genoeg om mee te oefenen.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Heb je ooit een echte, onvoorwaardelijke sorry gekregen van je eigen vader? Hoe voelde dat?",
        "Wat is het moeilijkste aan sorry zeggen zonder 'maar'?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Een echte sorry heeft vijf stappen: benoem je gedrag, erken de impact, neem verantwoordelijkheid, zeg wat je anders doet, en vraag niks terug. Geen 'maar'. Geen voorwaarden. Dat voelt kwetsbaar — en precies daarom bouwt het vertrouwen.",
    },
  ],
  keyTakeaways: [
    "Een echt excuus heeft vijf stappen — de meeste vaders gebruiken er maar één",
    "Het woord 'maar' in een sorry wist alles wat ervoor kwam",
    "Verantwoordelijkheid nemen zonder voorwaarden is het krachtigste element van herstel",
  ],
  research: "Lewicki et al. (2016). An Exploration of the Structure of Effective Apologies; Schumann & Dweck (2014). Who Accepts Responsibility for Their Transgressions?",
  quizQuestions: [
    {
      question: "Je zegt drie keer per week sorry tegen je kind na een uitbarsting. Je kind begint je sorry's te negeren. Wat is hier waarschijnlijk aan de hand?",
      options: [
        { text: "Je kind is gewoon koppig en heeft meer tijd nodig om sorry's te accepteren", isCorrect: false },
        { text: "Je sorry's zijn hol geworden omdat stap 4 (gedrag veranderen) steeds ontbreekt — woorden zonder verandering verliezen betekenis", isCorrect: true },
        { text: "Je moet stoppen met sorry zeggen en in plaats daarvan je kind laten zien dat je van ze houdt via cadeaus en aandacht", isCorrect: false },
      ],
      explanation: "Een excuus zonder gedragsverandering wordt een ritueel. Stap 4 ('wat ik anders ga doen') is cruciaal omdat het de sorry onderscheidt van een lege herhaling. Als je kind sorry's negeert, is dat vaak een teken dat je woorden en daden niet meer overeenkomen.",
    },
    {
      question: "Papa zegt: 'Sorry dat je je zo voelde.' Waarom is dit problematischer dan het lijkt?",
      options: [
        { text: "Het erkent de emotie van het kind, maar verschuift subtiel de verantwoordelijkheid naar het kind alsof hun gevoel het probleem is", isCorrect: true },
        { text: "Het is eigenlijk prima — het toont empathie en dat is het belangrijkste bij een excuus", isCorrect: false },
        { text: "Het is te vaag — papa moet specifieker benoemen welk gevoel het kind had", isCorrect: false },
      ],
      explanation: "'Sorry dat je je zo voelde' klinkt empathisch maar bevat geen eigenaarschap. Het impliceert: het probleem is jouw gevoel, niet mijn gedrag. Onderzoek toont dat juist dit soort 'bijna-sorry's' vertrouwen meer schaden dan helemaal geen excuus, omdat het kind de mismatch voelt maar niet kan benoemen.",
    },
    {
      question: "Je kind (9) zegt na je vijf-stappen-sorry: 'Maakt niet uit, het is al goed.' Maar je ziet dat het niet goed is. Wat is de beste reactie?",
      options: [
        { text: "Accepteer het — als je kind zegt dat het goed is, moet je dat respecteren en niet doordrukken", isCorrect: false },
        { text: "Zeg: 'Ik hoor dat je zegt dat het goed is. Maar als het toch nog niet oké voelt, mag je dat ook zeggen. Ik ga nergens heen.'", isCorrect: true },
        { text: "Vraag door: 'Weet je het zeker? Je ziet er niet oké uit.' zodat je kind leert eerlijk te zijn over gevoelens", isCorrect: false },
      ],
      explanation: "'Maakt niet uit' is vaak een beschermingsreactie: het kind sluit af om de spanning te vermijden. Doorvragen voelt als druk. De middenweg is de deur open laten zonder erdoorheen te duwen. Je geeft je kind toestemming om later alsnog terug te komen.",
    },
    {
      question: "Welke van deze situaties vraagt NIET om een vijf-stappen-sorry?",
      options: [
        { text: "Je snauwde je kind af omdat je gestrest was van werk", isCorrect: false },
        { text: "Je handhaafde een afgesproken bedtijd en je kind huilde van teleurstelling", isCorrect: true },
        { text: "Je vergat de schoolopvoering van je kind en kwam niet opdagen", isCorrect: false },
      ],
      explanation: "Een grens handhaven is geen breuk — ook al is je kind verdrietig. Sorry zeggen voor een consequente afspraak ondermijnt je gezag en leert je kind dat elke negatieve emotie betekent dat iemand iets fout deed. Empathie tonen ('ik snap dat je baalt') is iets anders dan je excuseren.",
    },
  ],
},
{
  id: "he_mod_3",
  skill: "Herstel" as Skill,
  title: "De Ochtend Na",
  description: "Gisteravond ging het mis. Nu is het ochtend. Het voelt raar. Wat zeg je? Wanneer? En waarom is dit moment zo belangrijk?",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 3,
  content: [
    {
      type: "text" as const,
      heading: "Het is 7 uur. Het voelt nog steeds raar.",
      text: "Gisteravond was er ruzie. Je was moe, je kind was moe, het escaleerde. Nu is het ochtend. Je smeert boterhammen en je kind is stil. Jullie lopen op eieren.\n\nDit moment — deze ongemakkelijke ochtend — is een van de krachtigste vensters voor herstel die je hebt.",
    },
    {
      type: "text" as const,
      heading: "Waarom de ochtend erna telt",
      text: "Na een conflict gaat je kind slapen met stress in zijn lijf. Cortisol. Spanning. Onzekerheid: is papa nog boos? Houdt hij nog van me?\n\nDie nacht verwerkt het brein de gebeurtenissen van de dag. Emotioneel geheugen wordt opgeslagen. En de eerste interactie de volgende ochtend? Die kleurt het hele geheugen van gisteravond.\n\nAls je die ochtend doet alsof er niks is gebeurd, slaat het brein op: conflict = onopgelost. Onveilig.\n\nAls je die ochtend herstelt, slaat het brein op: conflict = tijdelijk. Papa komt terug. Veilig.\n\nDe timing is cruciaal. Niet te laat. Liefst in de eerste vijf minuten dat jullie samen zijn. Vóór de dagelijkse chaos begint.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Cortisol — het stresshormoon — bereikt 's ochtends zijn piek. Na een stressvolle avond is dat niveau hoger dan normaal. Onderzoek naar emotioneel geheugen laat zien dat de eerste ervaring na slaap het sterkst kleurt hoe een gebeurtenis wordt opgeslagen. Vroeg herstel vermindert de kans op chronische stresspatronen bij kinderen.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Het ochtend-na venster",
      diagramData: [
        {
          emoji: "🌙",
          label: "Avond: stress opgeslagen",
          description: "Je kind slaapt met cortisol en onzekerheid. Het brein verwerkt: was ik veilig?",
        },
        {
          emoji: "🌅",
          label: "Ochtend: venster open",
          description: "Eerste 5 minuten samen. Het brein zoekt een signaal: is het weer oké? Dit is je kans.",
        },
        {
          emoji: "☀️",
          label: "Na herstel: geheugen herschreven",
          description: "Conflict wordt opgeslagen als: het ging mis, maar papa kwam terug. Veilig.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Gisteravond was er ruzie over schermtijd. Papa pakte de tablet af en schreeuwde. Sem (9) rende huilend naar zijn kamer. Nu is het ochtend. Sem zit stil aan de ontbijttafel.",
      wrongApproach: "OP EIEREN LOPEN:\n\nPapa voelt de spanning. Zegt extra vrolijk: 'Goedemorgen! Lekker geslapen? Wil je chocopasta?'\nSem mompelt iets. Beiden doen alsof gisteravond niet bestond.\nDe rest van de dag voelt vreemd. Afstand.\n\nDoor het te negeren leert Sem: boosheid is iets waar we niet over praten. Mijn gevoelens parkeer ik.",
      rightApproach: "FYSIEK EERST, WOORDEN DAARNA:\n\nPapa loopt naar Sem. Legt een hand op zijn schouder. Sems lichaam ontspant een fractie.\n'Hé. Gisteravond was niet leuk. Ik pakte je tablet af en ik schreeuwde. Dat was niet oké van mij.'\nStilte.\nSem: '...ik was ook boos.'\nPapa: 'Dat mag. Laten we het er vanavond over hebben. Nu eerst ontbijt.'\n\nFysiek contact eerst — het zenuwstelsel kalmeert sneller via aanraking dan via woorden. Dan kort benoemen. Niet alles uitpraten — dat komt later.",
      explanation: "De ochtend is niet het moment voor een lang gesprek. Het is het moment voor een signaal: ik ben er nog. We zijn oké. Fysiek contact (hand, knuffel, schouderklopje) werkt sneller dan woorden.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Fysiek voor woorden. Een hand op de schouder, een knuffel, naast ze zitten. Het lichaam herstelt sneller dan het hoofd. Begin daar.\n\n2. Het ochtend-na script: drie zinnen. 'Gisteravond ging het niet goed.' 'Dat was niet fijn.' 'Ik ben er.' Klaar. Kort. Geen preek.\n\n3. Beloof geen lang gesprek. Zeg: 'Laten we het er vanavond rustig over hebben.' De ochtend is voor het signaal, niet voor de analyse.\n\n4. Lees het lichaam. Als je kind wegdraait: geef ruimte maar blijf dichtbij. Als je kind dichterbij komt: omarm. Volg hun tempo.",
    },
    {
      type: "exercise" as const,
      title: "Het ochtend-signaal",
      instructions: "De volgende keer dat een avond niet lekker liep — en die avond komt, gegarandeerd — doe het volgende. Sta 's ochtends vijf minuten eerder op. Wees de eerste die contact maakt. Loop naar je kind. Raak ze aan (schouder, hoofd, knuffel). Zeg maximaal drie korte zinnen. Kijk wat er gebeurt met hun lichaam. Let op: ontspannen de schouders? Komt er oogcontact?",
      duration: 3,
      tips: [
        "Als je kind nog klein is (onder 5): een knuffel en 'papa vindt je lief' is alles wat nodig is",
        "Het voelt misschien alsof je kind er al overheen is. Dat lijkt zo. Maar het lichaam onthoudt. Herstel altijd.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Hoe zagen de ochtenden na conflict eruit in jouw eigen jeugd? Werd er gepraat of werd er gezwegen?",
        "Wat maakt het moeilijk om als eerste toenadering te zoeken?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "De ochtend na een conflict is een kritiek herstelvenster. Je kind slaapt met stress — de eerste interactie kleurt hoe het geheugen wordt opgeslagen. Fysiek contact eerst, dan korte woorden. Niet alles uitpraten. Alleen het signaal: ik ben er nog.",
    },
  ],
  keyTakeaways: [
    "De ochtend na een conflict is het krachtigste venster voor herstel — gebruik de eerste vijf minuten",
    "Fysiek contact (knuffel, hand op schouder) kalmeert het zenuwstelsel sneller dan woorden",
    "De ochtend is voor het signaal, niet voor het gesprek — kort, warm, en benoem wat er was",
  ],
  research: "Van der Kolk (2014). The Body Keeps the Score; Walker (2017). Why We Sleep — over geheugenconsolidatie en emotie",
  quizQuestions: [
    {
      question: "Je wilt 's ochtends herstellen, maar je merkt dat je zelf nog geïrriteerd bent over gisteravond. Wat is het risico als je tóch nu herstelt?",
      options: [
        { text: "Je irritatie lekt door in je toon en woorden, waardoor het herstel als een verwijt aanvoelt in plaats van als veiligheid", isCorrect: true },
        { text: "Er is geen risico — het gaat om de timing, en hoe eerder hoe beter, ook als je zelf nog boos bent", isCorrect: false },
        { text: "Je kind merkt je irritatie niet als je de juiste woorden gebruikt, dus de inhoud is belangrijker dan je stemming", isCorrect: false },
      ],
      explanation: "Kinderen lezen lichaamstaal en toon accurater dan woorden. Een 'sorry' met onderliggende irritatie voelt onveilig. Eerst vijf minuten zelf kalmeren (ademhaling, even alleen) is geen uitstel maar voorwaarde voor echt herstel. De eerste vijf minuten samen zijn het venster — niet de eerste vijf minuten van de dag.",
    },
    {
      question: "Welke van deze uitspraken over de timing van herstel is NIET juist?",
      options: [
        { text: "De eerste interactie na het slapen kleurt hoe het conflict wordt opgeslagen in het geheugen", isCorrect: false },
        { text: "Als je de ochtend mist, is het zinloos om later op de dag nog te herstellen — het geheugenvenster is dan gesloten", isCorrect: true },
        { text: "Cortisol is 's ochtends verhoogd na een stressvolle avond, wat het brein extra ontvankelijk maakt voor signalen van veiligheid of onveiligheid", isCorrect: false },
      ],
      explanation: "Het ochtendvenster is het krachtigst, maar niet het enige moment. Herstel later op de dag is altijd beter dan geen herstel. Het brein blijft ontvankelijk voor correctie van emotionele herinneringen, zij het met afnemend effect. De ochtend is ideaal, niet verplicht.",
    },
    {
      question: "Je kind (10) doet 's ochtends alsof er niks is gebeurd en praat vrolijk over school. Wat is de meest waarschijnlijke verklaring?",
      options: [
        { text: "Je kind is er echt overheen — kinderen verwerken sneller dan volwassenen en hebben minder last van conflicten", isCorrect: false },
        { text: "Je kind vermijdt de spanning en neemt de rol aan van 'degene die het gezin stabiel houdt' door te doen alsof alles normaal is", isCorrect: true },
        { text: "Je kind wacht af of jij het onderwerp aansnijdt en interpreteert je stilte als signaal dat het niet besproken hoeft te worden", isCorrect: false },
      ],
      explanation: "Vrolijk doen na conflict is bij kinderen vaak een copingstrategie, geen teken van verwerking. Vooral kinderen die geleerd hebben dat spanning in huis hun verantwoordelijkheid is, nemen een 'alles-is-oké' rol aan. Optie drie bevat ook waarheid, maar de kern is dat de vrolijkheid zelf het signaal is dat er iets onverwerkt is.",
    },
    {
      question: "Je hebt gisteravond al hersteld en sorry gezegd. De volgende ochtend is je kind toch stil. Moet je het opnieuw benoemen?",
      options: [
        { text: "Nee — je hebt al hersteld, en opnieuw beginnen ondermijnt je eerdere sorry en maakt het groter dan het is", isCorrect: false },
        { text: "Ja, volledig — doorloop alle vijf de stappen opnieuw zodat het deze keer echt landt", isCorrect: false },
        { text: "Kort en warm, zonder het hele gesprek over te doen: 'Hé, ik denk nog aan gisteravond. Hoe voel je je nu?'", isCorrect: true },
      ],
      explanation: "Het gaat niet om het excuus herhalen maar om het signaal vernieuwen. Emotioneel geheugen wordt 's nachts opnieuw verwerkt, dus je kind kan 's ochtends opnieuw onzekerheid voelen. Een kort 'check-in' moment — zonder de hele sorry opnieuw — laat zien dat je het niet vergeten bent en dat het kind gezien wordt.",
    },
  ],
},
{
  id: "he_mod_4",
  skill: "Herstel" as Skill,
  title: "Stoppen Met Jezelf Beloven Dat Het Niet Meer Gebeurt",
  description: "Je belooft jezelf elke keer: nooit meer schreeuwen. En elke keer breek je die belofte. Tijd voor een andere aanpak.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 4,
  content: [
    {
      type: "text" as const,
      heading: "De belofte die je elke week breekt.",
      text: "Vanavond was het weer raak. Je schreeuwde. Tegen je kind. Over iets stoms. En nu, in de stilte daarna, denk je weer: dit was de laatste keer. Nooit meer.\n\nTot volgende week dinsdag. Want die belofte? Die werkt niet. En dat is niet omdat je zwak bent.",
    },
    {
      type: "text" as const,
      heading: "Waarom beloftes falen",
      text: "Je brein werkt met gewoonte-loops. Trigger, gedrag, beloning. Dat is geen keuze — dat is bedrading.\n\nAls je moe bent (trigger), je kind voor de derde keer niet luistert (trigger), en je schreeuwt (gedrag) — dan voelt dat even als opluchting (beloning). Je brein slaat op: dit werkt.\n\nEen belofte om 'nooit meer te schreeuwen' is als een belofte om nooit meer te niezen. Je bestrijdt een automatisme met wilskracht. Dat is de verkeerde strijd.\n\nWat wél werkt: triggers leren herkennen. Niet het schreeuwen bestrijden — maar het moment ervoor zien aankomen.\n\nKristin Neff's onderzoek naar zelfcompassie laat zien dat vaders die zichzelf veroordelen na een uitbarsting méér schreeuwen, niet minder. Schuldgevoel vreet energie. Zelfcompassie geeft ruimte om te veranderen.\n\nJe bent geen slecht mens. Je hebt een slecht systeem. En systemen kun je veranderen.",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Gewoonte-loops (trigger → gedrag → beloning) zijn neurologisch verankerd en weerstaan wilskracht. Onderzoek van Neff toont dat zelfcompassie effectiever is dan zelfkritiek bij gedragsverandering. Vaders die hun triggers leren identificeren en alternatief gedrag inbouwen, verminderen impulsieve reacties met 40% binnen acht weken.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Van belofte naar systeem",
      diagramData: [
        {
          emoji: "🔁",
          label: "De loop herkennen",
          description: "Trigger (moe + kind luistert niet) → Gedrag (schreeuwen) → Beloning (opluchting). Herken jouw specifieke loop.",
        },
        {
          emoji: "🔍",
          label: "De trigger vangen",
          description: "Het moment tussen trigger en schreeuwen is 3-6 seconden. Leer dat moment herkennen: spanning in je kaak, warme oren, snellere ademhaling.",
        },
        {
          emoji: "🔄",
          label: "Het gedrag vervangen",
          description: "Bouw een nieuw pad: als ik mijn kaak voel spannen, loop ik naar de gang en tel tot tien. Systeem verslaat belofte.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Bas (8) weigert voor de vierde keer zijn schoenen aan te doen. Papa voelt de irritatie stijgen. Vorige week brak hij zijn belofte om niet meer te schreeuwen.",
      wrongApproach: "DE BELOFTE-CYCLUS:\n\nPapa voelt de spanning. Denkt: ik heb beloofd niet meer te schreeuwen.\nHoudt zich in. Houdt zich in. Houdt zich in.\nBas blijft treuzelen.\nPapa ontploft: 'DOE NOU DIE SCHOENEN AAN!'\nDaarna: schuldgevoel. Belofte. 'Dit was de laatste keer.'\nVolgende week: exact hetzelfde.\n\nWilskracht is eindig. Elke keer dat je je inhoudt kost het meer. Tot het op is.",
      rightApproach: "HET SYSTEEM:\n\nPapa voelt spanning in zijn kaak. Herkent het: dit is mijn trigger-signaal.\nZegt tegen Bas: 'Ik kom zo terug.' Loopt naar de gang. Tien tellen. Drie ademhalingen.\nKomt terug. Rustiger. 'Bas, we moeten over twee minuten weg. Ik help je met je schoenen.'\n\nPapa beloofde niet om nooit meer boos te worden. Papa bouwde een systeem: kaak spannen → gang → ademhalen. Dat is herhaalbaar.",
      explanation: "De belofte-cyclus is een val: inhouden, ontploffen, schuldgevoel, nieuwe belofte. Het systeem doorbreekt de cyclus: trigger herkennen, fysiek afstand nemen, terugkomen. Geen wilskracht nodig — alleen een plan.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Bouw een trigger-map. Schrijf op: wanneer schreeuw ik? Meestal is het een combinatie: moe + haast + kind luistert niet. Ken je patroon.\n\n2. Vind je lichaamssignaal. Kaak? Schouders? Warme oren? Snellere ademhaling? Dat signaal is je early warning system. Drie seconden voorsprong.\n\n3. Maak een als-dan plan. 'Als ik mijn kaak voel spannen, dan loop ik naar een andere kamer en tel ik tot tien.' Concreet. Simpel. Herhaalbaar.\n\n4. Vervang schuld door data. Niet: 'ik ben een slechte vader.' Maar: 'ik schreeuwde om 18:30, ik was moe, Bas luisterde niet. Wat kan ik veranderen aan die situatie?'",
    },
    {
      type: "exercise" as const,
      title: "Jouw trigger-map",
      instructions: "1. Pak je telefoon. Open je notities.\n2. Schrijf drie momenten op van de afgelopen week waarop je te heftig reageerde.\n3. Schrijf bij elk moment vier dingen:\n   - Hoe laat was het?\n   - Hoe moe/gestrest was ik? (schaal 1-10)\n   - Wat deed mijn kind?\n   - Wat voelde ik in mijn lichaam vlak ervoor?\n4. Zoek het patroon. Er is er altijd een.\n5. Maak een als-dan plan: 'Als ik [lichaamssignaal] voel om [tijdstip], dan [actie].'\n6. Dat patroon is je trigger-map. Die map is je wapen.",
      duration: 5,
      tips: [
        "De meeste vaders schreeuwen tussen 17:30 en 19:30. Moe, hongerig, haast. Als dat jouw tijdvak is: plan daar iets voor.",
        "Wees eerlijk. Dit is voor jou alleen. Niemand leest het. Hoe eerlijker, hoe nuttiger.",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Welke beloftes maak je steeds opnieuw aan jezelf? Wat zou er veranderen als je die belofte vervangt door een systeem?",
        "Wat zeg je tegen jezelf als je weer schreeuwt? Is die stem behulpzaam — of maakt hij het erger?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Beloftes om nooit meer te schreeuwen falen omdat ze wilskracht gebruiken tegen automatismen. Wat werkt: triggers herkennen via je lichaamssignalen, een als-dan plan bouwen, en schuld vervangen door data. Systemen verslaan beloftes.",
    },
  ],
  keyTakeaways: [
    "Beloftes om 'nooit meer te schreeuwen' falen omdat je vecht tegen neurologische gewoonte-loops",
    "Leer je lichaamssignaal herkennen — dat geeft je drie tot zes seconden voorsprong op het schreeuwen",
    "Vervang beloftes door systemen: als-dan plannen die herhaalbaar zijn zonder wilskracht",
  ],
  research: "Neff (2011). Self-Compassion: The Proven Power of Being Kind to Yourself; Duhigg (2012). The Power of Habit — gewoonte-loops en gedragsverandering",
  quizQuestions: [
    {
      question: "Een als-dan plan ('als ik X voel, dan doe ik Y') werkt beter dan een voornemen ('ik ga niet meer schreeuwen'). Waarom?",
      options: [
        { text: "Omdat een als-dan plan een nieuwe neurologische route aanlegt die de automatische reactie overneemt, zonder dat je wilskracht nodig hebt", isCorrect: true },
        { text: "Omdat een als-dan plan concreter is en je het beter onthoudt doordat je het hebt opgeschreven", isCorrect: false },
        { text: "Omdat een als-dan plan rekening houdt met het feit dat je soms faalt, terwijl een voornemen uitgaat van perfectie", isCorrect: false },
      ],
      explanation: "Het gaat niet om onthouden of faalruimte. Een als-dan plan werkt omdat het een trigger koppelt aan een alternatieve route in je brein. Na voldoende herhaling wordt die route automatisch, net zoals de oude gewoonte-loop automatisch was. Je vervangt bedrading met betere bedrading.",
    },
    {
      question: "Na een uitbarsting voel je je schuldig en denkt: 'Ik ben een verschrikkelijke vader.' Onderzoek van Neff toont dat dit schuldgevoel een verrassend effect heeft. Welk?",
      options: [
        { text: "Het motiveert je om het de volgende keer beter te doen, omdat de pijn van schuld een krachtige drijfveer is", isCorrect: false },
        { text: "Het vergroot de kans op een volgende uitbarsting, omdat zelfkritiek energie vreet die je nodig hebt voor zelfregulatie", isCorrect: true },
        { text: "Het heeft weinig effect — schuldgevoel verdwijnt vanzelf en je gedrag wordt bepaald door je gewoonte-loops, niet door je emoties erna", isCorrect: false },
      ],
      explanation: "Dit is contra-intuïtief: schuldgevoel voelt als een rem, maar werkt als een gaspedaal. Zelfveroordeling activeert je stresssysteem en put je zelfregulatie-reserves uit. Zelfcompassie ('ik maakte een fout, ik ben geen fout') geeft je brein juist de ruimte om te leren en te veranderen.",
    },
    {
      question: "Je hebt een als-dan plan: 'als ik spanning in mijn kaak voel, loop ik naar de gang.' Maar je kind volgt je naar de gang en blijft doorgaan. Wat nu?",
      options: [
        { text: "Je plan faalt — je moet een nieuw als-dan plan maken voor situaties waarin weglopen niet kan", isCorrect: false },
        { text: "Vertel je kind: 'Papa heeft even een pauze nodig. Ik kom over twee minuten terug.' en sluit de deur", isCorrect: false },
        { text: "Pas je systeem aan met een backup-stap: 'Als weglopen niet kan, dan handen op de aanrecht, ogen dicht, vijf keer inademen'", isCorrect: true },
      ],
      explanation: "Een als-dan plan is geen eenmalig recept maar een systeem dat je itereert. De eerste versie zal niet elke situatie dekken. Een backup-stap voor wanneer je primaire plan onmogelijk is, maakt je systeem robuust. De deur sluiten voor je kind voelt als afwijzing en is dus geen goed alternatief.",
    },
    {
      question: "Je trigger-map toont: elke dag 18:00-19:00, moe, hongerig, kinderen druk na school. Een vriend zegt: 'Gewoon eerder eten en het probleem is opgelost.' Wat klopt er?",
      options: [
        { text: "Hij heeft gelijk — situatiecontrole (de omstandigheden veranderen) is effectiever dan zelfcontrole", isCorrect: false },
        { text: "De beste aanpak combineert situatiecontrole (eerder eten, snack, rustmoment) met een als-dan plan voor wanneer de situatie tóch escaleert", isCorrect: true },
        { text: "Situatie veranderen is symptoombestrijding — je moet leren om met stress om te gaan in plaats van stress te vermijden", isCorrect: false },
      ],
      explanation: "Situatiecontrole is krachtig maar niet waterdicht: je kunt niet elke avond perfect choreograferen. En stresstolerantie opbouwen klinkt stoer maar negeert dat je reserves eindig zijn. De combinatie is de sleutel: verander wat je kunt aan de situatie, en heb een plan voor wanneer het toch misgaat.",
    },
  ],
},
{
  id: "he_mod_5",
  skill: "Herstel" as Skill,
  title: "Je Kind Leren Dat Fouten Oké Zijn",
  description: "Als jij herstel voordoet, leer je je kind iets krachtigs: fouten zijn overleefbaar. En dat begint bij jouw kwetsbaarheid.",
  duration: "8-10 min",
  difficulty: "basis" as const,
  order: 5,
  content: [
    {
      type: "text" as const,
      heading: "Ze durft het niet meer te proberen.",
      text: "Noor (8) zit boven een tekenblad. Ze tekent een paard. Het wordt niet perfect. Ze grist het papier van tafel, propt het samen. 'Ik kan het toch niet.'\n\nJe herkent het. Want ergens — misschien van jou — heeft ze geleerd dat fouten niet oké zijn.",
    },
    {
      type: "text" as const,
      heading: "Jij bent het leerboek",
      text: "Kinderen leren niet van wat je zegt. Ze leren van wat je doet. En als jij nooit je fouten laat zien — als je altijd sterk en foutloos lijkt — leert je kind: fouten horen niet bij sterke mensen.\n\nOmgekeerd: als jij laat zien dat je fouten maakt, dat je ervan baalt, en dat je herstelt? Dan leert je kind dat fouten overleefbaar zijn. Normaal. Onderdeel van het leven.\n\nBrené Brown noemt dit 'kwetsbaarheid modelleren'. Het is geen zwakte — het is de moedigste vorm van ouderschap. Want het betekent dat je je kind laat zien wie je echt bent. Inclusief de rommel.\n\nPsychologische veiligheid — het gevoel dat je fouten mag maken zonder afwijzing — is de nummer één voorspeller van veerkracht bij kinderen. En die veiligheid begint niet bij regels. Die begint bij een vader die zegt: 'Ik deed het ook fout vandaag. En dat is oké.'",
    },
    {
      type: "text" as const,
      heading: "De wetenschap",
      text: "Brené Brown's onderzoek toont dat kwetsbaarheid tonen door ouders een directe voorspeller is van emotionele veerkracht bij kinderen. Amy Edmondson's werk over psychologische veiligheid bevestigt: omgevingen waar fouten bespreekbaar zijn, produceren meer lef en creativiteit. Kinderen van ouders die hun eigen fouten benoemen, scoren hoger op frustratietolerantie.",
    },
    {
      type: "diagram" as const,
      diagramTitle: "Wat je kind leert van jouw fouten",
      diagramData: [
        {
          emoji: "🎭",
          label: "Foutloze vader",
          description: "Kind leert: papa maakt geen fouten. Dus fouten horen niet bij sterke mensen. Ik verberg de mijne.",
        },
        {
          emoji: "💔",
          label: "Feilbare vader zonder herstel",
          description: "Kind leert: papa maakt fouten maar doet er niks mee. Fouten zijn pijnlijk en blijvend.",
        },
        {
          emoji: "💪",
          label: "Feilbare vader mét herstel",
          description: "Kind leert: papa maakt fouten, herstelt, en gaat door. Fouten zijn overleefbaar. Ik durf het ook.",
        },
      ],
    },
    {
      type: "example" as const,
      situation: "Noor (8) weigert haar wiskundeoefeningen te maken. 'Ik snap het toch niet. Ik ben dom.' Ze duwt haar schrift weg.",
      wrongApproach: "DE PEPTALK:\n\nPapa: 'Je bent niet dom! Je bent superslim! Je kunt het wel!'\nNoor rolt met haar ogen. Ze gelooft het niet.\nPapa: 'Gewoon proberen. Fouten mag.'\nNoor: 'Jij maakt nooit fouten.'\nStilte.\n\nPapa zegt dat fouten mogen, maar laat het nooit zien. Noor ziet de mismatch. Ze gelooft wat ze ziet, niet wat ze hoort.",
      rightApproach: "FEILBAARHEID DELEN:\n\nPapa gaat naast Noor zitten.\n'Weet je wat mij vandaag gebeurde op werk? Ik stuurde een mail naar de verkeerde persoon. Best gênant.'\nNoor kijkt op. 'Echt?'\n'Ja. Ik baalde. Maar ik heb sorry gezegd en het opgelost. Het was niet leuk, maar het was ook niet het einde van de wereld.'\nStilte.\nNoor pakt haar potlood. 'Kan je me helpen met die eerste som?'\n\nPapa liet zien: fouten overkomen mij ook. En ik overleef ze. Noor durft weer.",
      explanation: "Peptalk ('je bent slim!') mist als je kind bewijs nodig heeft. Het krachtigste bewijs? Een vader die zijn eigen fouten deelt. Niet om medelijden te krijgen — maar om te laten zien: falen hoort bij leven.",
    },
    {
      type: "text" as const,
      heading: "Je toolkit",
      text: "1. Het feilbaarheid-experiment. Deel deze week één eigen fout met je kind. Iets kleins. 'Ik vergat de was op te hangen.' 'Ik was ongeduldig bij de kassa.' Laat zien hoe je ermee omging.\n\n2. Normaliseer 'oeps'. Maak 'oeps' een gewoon woord in huis. Jij zegt het. Je kind zegt het. Oeps = ik maakte een fout, ik ga het fixen. Geen drama.\n\n3. Vier de poging, niet het resultaat. 'Ik zag dat je het probeerde, ook al lukte het niet.' Dat ene zinnetje bouwt meer lef dan honderd keer 'knap!'\n\n4. Laat je kind jou helpen herstellen. 'Ik weet niet goed hoe ik dit moet oplossen. Heb jij een idee?' Dat geeft ze agency én laat zien dat vragen om hulp sterk is.\n\n5. Tiener-variant. Pubers (13+) vinden 'oeps' kinderachtig — en terecht. Gebruik hun taal: 'Ik heb het verknald vandaag op werk.' of 'Ik had dat anders moeten aanpakken.' Hoe eerlijker en volwassener je deelt, hoe meer een tiener zich opent over eigen fouten.",
    },
    {
      type: "exercise" as const,
      title: "Het feilbaarheid-experiment",
      instructions: "Vanavond of morgen aan tafel: vertel je kind over een fout die je deze week maakte. Het hoeft niet groot te zijn — iets vergeten, iets stoms gezegd, ergens te laat gekomen. Vertel drie dingen: 1) Wat er gebeurde. 2) Hoe je je voelde. 3) Wat je ermee deed. Let op de reactie van je kind. Vaak beginnen ze daarna zelf ook te vertellen over hun dag.",
      duration: 5,
      tips: [
        "Kies iets kleins en herkenbaars. Het hoeft geen diepe bekentenis te zijn. Gewoon menselijk.",
        "Als je kind vraagt 'waarom vertel je dit?', wees eerlijk: 'Omdat ik wil dat je weet dat iedereen fouten maakt. Ook papa.'",
      ],
    },
    {
      type: "reflection" as const,
      questions: [
        "Wanneer heb je voor het laatst een fout van jezelf gedeeld met je kind? Wat hield je tegen — of wat maakte het makkelijk?",
        "Welke boodschap over fouten heb je meegekregen van je eigen ouders? Wil je die doorgeven?",
      ],
    },
    {
      type: "text" as const,
      heading: "Samenvatting",
      text: "Kinderen leren van wat je doet, niet van wat je zegt. Als jij je fouten deelt en herstelt, leert je kind dat fouten overleefbaar zijn. Deel één fout per week. Vier de poging, niet het resultaat. Kwetsbaarheid is geen zwakte — het is de basis van psychologische veiligheid.",
    },
  ],
  keyTakeaways: [
    "Kinderen leren niet van wat je zegt maar van wat je voordoet — deel je eigen fouten",
    "Psychologische veiligheid (fouten mogen maken) is de nummer één voorspeller van veerkracht",
    "Een vader die herstelt na fouten leert zijn kind: falen is overleefbaar en normaal",
  ],
  research: "Brown (2012). Daring Greatly; Edmondson (1999). Psychological Safety and Learning Behavior in Work Teams; Dweck (2006). Mindset — growth mindset bij kinderen",
  quizQuestions: [
    {
      question: "Je deelt aan tafel dat je een fout maakte op werk. Je kind (7) reageert bezorgd: 'Word je dan ontslagen, papa?' Wat ging er mis?",
      options: [
        { text: "Je koos een te zware fout om te delen — kwetsbaarheid modelleren werkt alleen met lichte, alledaagse fouten die je kind kan relativeren", isCorrect: true },
        { text: "Er ging niks mis — dit is een natuurlijke reactie en je kunt het gebruiken om uit te leggen dat fouten op werk normaal zijn", isCorrect: false },
        { text: "Je kind is te jong voor dit soort gesprekken — wacht tot ze 10+ zijn voordat je werkfouten deelt", isCorrect: false },
      ],
      explanation: "Kwetsbaarheid modelleren is niet hetzelfde als je kind belasten met volwassenenproblematiek. Het doel is dat je kind ziet dat fouten overleefbaar zijn, niet dat ze zich zorgen gaan maken over de consequenties. Kies fouten die voor een kind herkenbaar en onschuldig zijn: iets vergeten, iets morsen, te laat komen.",
    },
    {
      question: "Welke uitspraak over 'de poging vieren' bevat een valkuil?",
      options: [
        { text: "'Wat goed dat je het geprobeerd hebt!' bij elke poging, ongeacht of het kind zich echt heeft ingespannen", isCorrect: true },
        { text: "'Ik zag dat je het moeilijk vond en toch bent doorgegaan' nadat je kind gefrustreerd was maar volhield", isCorrect: false },
        { text: "'Het resultaat doet er niet toe, de moeite die je erin stopte wel' wanneer je kind teleurgesteld is over een cijfer", isCorrect: false },
      ],
      explanation: "Automatisch elke poging prijzen kan net zo hol worden als elke keer 'knap!' zeggen. Kinderen merken wanneer lof niet overeenkomt met hun inzet. Als je kind amper moeite deed en je zegt toch 'goed geprobeerd!', leert het dat oppervlakkige pogingen genoeg zijn. Specifieke, eerlijke erkenning van echte inspanning is wat werkt.",
    },
    {
      question: "Je tiener (14) zegt: 'Hou op met die fouten delen aan tafel, het is zielig.' Wat is de beste interpretatie?",
      options: [
        { text: "Je tiener manipuleert je om een grens te stellen tegen emotioneel kwetsbare gesprekken", isCorrect: false },
        { text: "Je aanpak is te kinderlijk voor een tiener — pas je taal en diepte aan hun ontwikkelingsniveau aan", isCorrect: true },
        { text: "Je tiener vindt kwetsbaarheid ongemakkelijk, en dat is juist het teken dat het goed is om door te gaan", isCorrect: false },
      ],
      explanation: "Pubers hebben een fijn ontwikkelde radar voor 'pedagogisch gedoe'. Als je kwetsbaarheid aanvoelt als een les, werkt het averechts. Tieners hebben behoefte aan gelijkwaardiger gesprekken. Deel je fouten terloops, in hun taal, zonder de moraal erbij. 'Ik heb het verknald vandaag' tussen neus en lippen is krachtiger dan een opgezet tafelgesprek.",
    },
    {
      question: "Een vader die altijd sterk en foutloos lijkt, beschermt zijn kind daarmee. Waarom is dit schadelijker dan het lijkt?",
      options: [
        { text: "Het kind leert dat liefde voorwaardelijk is: papa houdt van mij omdat ik geen fouten maak, net zoals hij", isCorrect: false },
        { text: "Het kind ontwikkelt een onhaalbare standaard voor zichzelf en leert fouten verbergen in plaats van herstellen", isCorrect: true },
        { text: "Het kind verliest respect voor de vader zodra het ontdekt dat hij wel degelijk fouten maakt", isCorrect: false },
      ],
      explanation: "Alle drie de opties bevatten een kern van waarheid, maar het kernmechanisme is de onhaalbare standaard. Een kind dat nooit ziet dat competente mensen fouten maken, concludeert dat fouten een teken van incompetentie zijn. Het resultaat: perfectionisme, faalangst, en het verbergen van fouten in plaats van ervan leren. Dat is precies het tegenovergestelde van veerkracht.",
    },
  ],
},
];
