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
      text: "1. Merk de breuk op. Dat schuldgevoel? Gebruik het. Het is je signaal dat er iets te herstellen valt.\n\n2. Wacht niet te lang. Herstel binnen het uur is krachtiger dan herstel de volgende dag. Hoe eerder, hoe beter.\n\n3. Ga naar je kind toe. Fysiek. Kniel. Maak oogcontact op hun hoogte. Dat alleen al zegt: jij bent belangrijk genoeg om naar toe te komen.\n\n4. Benoem wat jij fout deed. Niet: 'sorry dat je boos werd.' Maar: 'sorry dat ik schreeuwde.' Eigenaarschap. Punt.",
    },
    {
      type: "exercise" as const,
      title: "Je eerste bewuste herstelmoment",
      instructions: "Denk aan het laatste moment dat je te hard reageerde op je kind. Misschien vandaag, misschien gisteren. Ga vanavond of morgenochtend naar je kind toe. Zeg drie zinnen: 1) Wat er gebeurde ('Ik schreeuwde tegen je'). 2) Dat het niet oké was ('Dat was niet fijn voor jou'). 3) Dat het niet hun schuld was ('Jij deed niks verkeerd'). Dat is het. Geen uitleg, geen les. Drie zinnen.",
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
  research: "Tronick (2007). The Neurobehavioral and Social-Emotional Development of Infants and Children; Winnicott (1953). Transitional Objects and Transitional Phenomena",
  quizQuestions: [
    {
      question: "Onderzoek toont dat 70% van ouder-kind interacties misafstemming bevat. Wat betekent dat?",
      options: [
        { text: "De meeste ouders falen en moeten harder hun best doen", isCorrect: false },
        { text: "Misafstemming is normaal — het gaat om wat je erna doet", isCorrect: true },
      ],
      explanation: "Misafstemming is biologisch normaal. Het patroon van breken en herstellen is precies hoe veilige hechting ontstaat.",
    },
    {
      question: "Na een schreeuwmoment is het een uur stil in huis. Wat werkt het best?",
      options: [
        { text: "Wachten tot je kind zelf komt en dan samen iets leuks doen", isCorrect: false },
        { text: "Naar je kind toe gaan en benoemen wat jij fout deed", isCorrect: true },
      ],
      explanation: "Jij bent de volwassene. Herstel begint bij jou. Ga naar je kind toe, benoem jouw fout, en maak verbinding.",
    },
    {
      question: "Wat bedoelde Winnicott met de 'good enough parent'?",
      options: [
        { text: "Een ouder die fouten maakt maar altijd herstelt", isCorrect: true },
        { text: "Een ouder die net genoeg doet om het kind te laten overleven", isCorrect: false },
      ],
      explanation: "Good enough betekent niet 'minimaal'. Het betekent: imperfect maar herstellend. Dat patroon bouwt veerkracht bij je kind.",
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
      instructions: "Denk aan een recent moment waarop je te scherp reageerde op je kind. Schrijf nu (ja, echt schrijven — op je telefoon is prima) de vijf stappen uit alsof je ze uitspreekt: 1) Wat deed ik? 2) Wat was het effect op mijn kind? 3) Wiens schuld was het? 4) Wat doe ik volgende keer anders? 5) Stop. Geen voorwaarden. Lees het hardop voor. Zeg het morgen echt tegen je kind.",
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
      question: "Papa zegt: 'Sorry, maar als jij had geluisterd was dit niet gebeurd.' Wat is dit?",
      options: [
        { text: "Een goed begin dat nog aangevuld kan worden", isCorrect: false },
        { text: "Een nep-sorry die de schuld bij het kind legt", isCorrect: true },
      ],
      explanation: "Het woord 'maar' verschuift de verantwoordelijkheid naar het kind. Een echte sorry bevat geen voorwaarden of beschuldigingen.",
    },
    {
      question: "Wat is het krachtigste element van een effectief excuus volgens onderzoek?",
      options: [
        { text: "Verantwoordelijkheid nemen voor je eigen gedrag", isCorrect: true },
        { text: "Uitleggen waarom je deed wat je deed", isCorrect: false },
      ],
      explanation: "Uitleg wordt vaak ervaren als excuus. Verantwoordelijkheid nemen — zonder 'maar' — is wat vertrouwen herstelt.",
    },
    {
      question: "Na je sorry zeg je: 'Maar jij moet ook beter luisteren.' Wat doet dit?",
      options: [
        { text: "Het maakt het eerlijk voor beide kanten", isCorrect: false },
        { text: "Het ondermijnt je hele excuus en verplaatst de schuld", isCorrect: true },
      ],
      explanation: "Stap 5 is: vraag niks terug. Een echte sorry is eenrichtingsverkeer. Feedback op je kind's gedrag is een apart gesprek, op een ander moment.",
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
      question: "Waarom is de ochtend na een conflict zo'n belangrijk moment?",
      options: [
        { text: "Omdat je kind 's ochtends beter kan nadenken en praten", isCorrect: false },
        { text: "Omdat de eerste interactie kleurt hoe het conflict wordt opgeslagen in het geheugen", isCorrect: true },
      ],
      explanation: "Het brein verwerkt 's nachts emotionele ervaringen. De eerste ochtendinteractie bepaalt of het conflict wordt opgeslagen als 'onveilig' of 'hersteld'.",
    },
    {
      question: "Je kind is stil aan het ontbijt na een slechte avond. Wat doe je eerst?",
      options: [
        { text: "Fysiek contact maken — hand op schouder, knuffel, dichtbij zitten", isCorrect: true },
        { text: "Vragen hoe het gaat en of ze erover willen praten", isCorrect: false },
      ],
      explanation: "Het zenuwstelsel kalmeert sneller via aanraking dan via woorden. Fysiek contact is het eerste signaal van veiligheid.",
    },
    {
      question: "Je wilt herstellen maar je kind draait weg. Wat doe je?",
      options: [
        { text: "Aandringen en het gesprek toch voeren zodat het opgelost is", isCorrect: false },
        { text: "Ruimte geven maar dichtbij blijven en later nog een keer proberen", isCorrect: true },
      ],
      explanation: "Wegdraaien is een signaal: nog niet klaar. Dwing het niet. Blijf beschikbaar. Herstel werkt op het tempo van je kind, niet op dat van jou.",
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
      instructions: "Pak je telefoon. Open je notities. Schrijf drie momenten op van de afgelopen week waarop je te heftig reageerde. Schrijf bij elk moment: 1) Hoe laat was het? 2) Hoe moe/gestrest was ik? (schaal 1-10) 3) Wat deed mijn kind? 4) Wat voelde ik in mijn lichaam vlak ervoor? Zoek het patroon. Er is er altijd een. Dat patroon is je trigger-map.",
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
      question: "Waarom werkt de belofte 'ik ga nooit meer schreeuwen' meestal niet?",
      options: [
        { text: "Omdat schreeuwen een gewoonte-loop is die niet met wilskracht stopt", isCorrect: true },
        { text: "Omdat vaders niet genoeg discipline hebben om zich aan beloftes te houden", isCorrect: false },
      ],
      explanation: "Gewoonte-loops zijn neurologisch verankerd. Wilskracht raakt op. Een systeem (trigger herkennen → ander gedrag) doorbreekt de loop structureel.",
    },
    {
      question: "Na het schreeuwen voel je je schuldig. Wat helpt het meest om het patroon te doorbreken?",
      options: [
        { text: "Analyseren wat er gebeurde: hoe laat, hoe moe, wat was de trigger", isCorrect: true },
        { text: "Jezelf stevig toespreken dat het echt de laatste keer moet zijn", isCorrect: false },
      ],
      explanation: "Zelfkritiek vreet energie en houdt de cyclus in stand. Data verzamelen over je triggers geeft concrete handvatten om het systeem te veranderen.",
    },
    {
      question: "Wat is een als-dan plan?",
      options: [
        { text: "Een concreet plan: 'als ik mijn trigger voel, dan doe ik een vooraf bepaalde actie'", isCorrect: true },
        { text: "Een afspraak met je kind over wat zij anders moeten doen", isCorrect: false },
      ],
      explanation: "Een als-dan plan koppelt je lichaamssignaal aan een concreet alternatief gedrag. Het vervangt de automatische reactie door een bewuste route.",
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
      text: "1. Het feilbaarheid-experiment. Deel deze week één eigen fout met je kind. Iets kleins. 'Ik vergat de was op te hangen.' 'Ik was ongeduldig bij de kassa.' Laat zien hoe je ermee omging.\n\n2. Normaliseer 'oeps'. Maak 'oeps' een gewoon woord in huis. Jij zegt het. Je kind zegt het. Oeps = ik maakte een fout, ik ga het fixen. Geen drama.\n\n3. Vier de poging, niet het resultaat. 'Ik zag dat je het probeerde, ook al lukte het niet.' Dat ene zinnetje bouwt meer lef dan honderd keer 'knap!'\n\n4. Laat je kind jou helpen herstellen. 'Ik weet niet goed hoe ik dit moet oplossen. Heb jij een idee?' Dat geeft ze agency én laat zien dat vragen om hulp sterk is.",
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
      question: "Je kind zegt: 'Ik kan het niet, ik ben dom.' Wat werkt het beste?",
      options: [
        { text: "Een eigen fout delen en laten zien hoe je ermee omging", isCorrect: true },
        { text: "Zeggen dat ze slim zijn en het heus wel kunnen", isCorrect: false },
      ],
      explanation: "Kinderen geloven wat ze zien, niet wat ze horen. Een peptalk zonder bewijs komt niet aan. Een vader die zijn eigen fout deelt, geeft concreet bewijs dat fouten overleefbaar zijn.",
    },
    {
      question: "Wat is psychologische veiligheid?",
      options: [
        { text: "Het gevoel dat je fouten mag maken zonder afwijzing", isCorrect: true },
        { text: "Het gevoel dat er nooit iets mis kan gaan", isCorrect: false },
      ],
      explanation: "Psychologische veiligheid betekent niet dat er geen fouten zijn — het betekent dat fouten bespreekbaar zijn. Dat is de basis voor lef, creativiteit en veerkracht.",
    },
    {
      question: "Waarom werkt 'vier de poging, niet het resultaat' beter dan 'knap!'?",
      options: [
        { text: "Omdat het de moeite beloont, niet het talent — dat bouwt doorzettingsvermogen", isCorrect: true },
        { text: "Omdat kinderen niet van complimenten houden", isCorrect: false },
      ],
      explanation: "Als je alleen resultaat beloont, leert je kind: alleen slagen telt. Als je de poging beloont, leert je kind: proberen is waardevol — ook als het mislukt.",
    },
  ],
},
];
