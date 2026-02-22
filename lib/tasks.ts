import type { DailyTask, Skill } from "./types";

// Rijke task templates met waarom, tips en valkuilen
const RICH_TASKS = {
  Aanwezigheid: [
    {
      title: "Telefoon parkeren",
      desc: "Leg je telefoon uit zicht tijdens {moment}.",
      waarom: "Je brein kan niet multitasken — halve aandacht voelt voor je kind als geen aandacht.",
      tip: "Zet hem in een lade. Uit het zicht = uit je hoofd.",
      vermijd: "Telefoon omgedraaid op tafel — je checkt hem toch.",
      dur: 10
    },
    {
      title: "2-min check-in",
      desc: "Stel 1 open vraag na {moment}. Luister zonder te sturen.",
      waarom: "Kinderen delen meer als je ruimte geeft i.p.v. verhoor-vragen stelt.",
      tip: "Vraag: 'Wat was het beste van je dag?' Wacht dan echt af.",
      vermijd: "'Hoe was school?' — dit krijgt alleen 'goed' als antwoord.",
      dur: 2
    },
    {
      title: "Special time",
      desc: "Geef {time} waarin je kind de baas is. Jij volgt.",
      waarom: "Dit vult het verbindingsreservoir — minder gedoe de rest van de dag.",
      tip: "Zeg: 'Jij bepaalt wat we doen.' Echt alles mag (binnen grenzen).",
      vermijd: "Toch sturen: 'Zullen we dit doen?' — dat is jouw agenda.",
      dur: 10
    },
    {
      title: "Fysiek contact",
      desc: "Geef {moment} bewust fysiek contact zonder agenda.",
      waarom: "Oxytocine (knuffelhormoon) bouwt veiligheid en vermindert stress.",
      tip: "Hand op schouder, knuffel, high five — laat kind kiezen.",
      vermijd: "Contact als manipulatie: 'Eerst knuffel, dan mag je...'",
      dur: 1
    },
  ],
  Emotiecoaching: [
    {
      title: "Emotie labelen",
      desc: "Benoem vandaag {count} gevoelens die je ziet bij je kind.",
      waarom: "Labelen activeert de prefrontale cortex en kalmeert de emotie.",
      tip: "Zeg: 'Je lijkt teleurgesteld' — niet 'Ben je teleurgesteld?'",
      vermijd: "'Je bent niet boos' — dit ontkent wat het kind voelt.",
      dur: 2
    },
    {
      title: "Gevoel vs gedrag",
      desc: "Erken het gevoel eerst, stel daarna pas de grens.",
      waarom: "Gevoelens zijn altijd oké, gedrag soms niet. Dit onderscheid is cruciaal.",
      tip: "'Ik snap dat je boos bent. Slaan mag niet. Kom, we verzinnen iets anders.'",
      vermijd: "Direct naar gedrag: 'Niet slaan!' — gevoel blijft hangen.",
      dur: 2
    },
    {
      title: "Jouw emotie delen",
      desc: "Benoem hardop 1 gevoel dat jij vandaag hebt.",
      waarom: "Dit normaliseert emoties en leert kinderen emotionele taal.",
      tip: "'Ik voel me gefrustreerd omdat...' — simpel en eerlijk.",
      vermijd: "Je kind als therapeut gebruiken: teveel delen overweldigt.",
      dur: 2
    },
    {
      title: "Verdriet ruimte geven",
      desc: "Bij verdriet: zit erbij in stilte. Zeg 1×: 'Ik ben hier.'",
      waarom: "Aanwezigheid troost meer dan woorden — je hoeft niks op te lossen.",
      tip: "Adem rustig, blijf zitten. Je lichaam zegt: 'Dit is veilig.'",
      vermijd: "'Het valt wel mee' of afleiden — dit leert onderdrukken.",
      dur: 5
    },
  ],
  Zelfregulatie: [
    {
      title: "Boosheidscheck",
      desc: "Check {count}× vandaag: hoe boos ben ik op schaal 1-10?",
      waarom: "Bewustzijn is de eerste stap — je kunt pas reguleren wat je ziet.",
      tip: "Bij 7+: neem een pauze vóór je reageert.",
      vermijd: "Doorpraten bij 8+ — dan reageert je reptielenbrein.",
      dur: 1
    },
    {
      title: "Pauze-protocol",
      desc: "Als je spanning voelt: zeg 'ik neem een pauze' en loop weg.",
      waarom: "Modeling van self-care leert je kind meer dan 100 uitleg-sessies.",
      tip: "Zeg het hardop: 'Ik voel me gespannen, ik neem 2 minuten.'",
      vermijd: "Wegstormen zonder te zeggen waarom — dat voelt als straf.",
      dur: 2
    },
    {
      title: "Verwachting bijstellen",
      desc: "Bij irritatie: vraag 'is dit normaal voor deze leeftijd?'",
      waarom: "80% van ouderlijke stress komt van te hoge verwachtingen.",
      tip: "Google snel: 'normaal gedrag [leeftijd] jaar' — vaak opent dit je ogen.",
      vermijd: "Vergelijken met andere kinderen — elk kind is anders.",
      dur: 2
    },
    {
      title: "Honger als trigger",
      desc: "Bij irritatie: check wanneer at je? Eerst eten als het lang is.",
      waarom: "Lage bloedsuiker = kortere lont. HALT: Hungry, Angry, Lonely, Tired.",
      tip: "Snack binnen handbereik. Eten reset je systeem in 10 min.",
      vermijd: "Doormodderen terwijl je uitgehongerd bent — je verliest.",
      dur: 2
    },
  ],
  Grenzen: [
    {
      title: "Grens met empathie",
      desc: "Erken de wens eerst, dan pas de nee.",
      waarom: "'Ja naar het gevoel, nee naar het gedrag' voorkomt machtsstrijd.",
      tip: "'Ik snap dat je nog wil spelen. Het antwoord is nee. Morgen wel.'",
      vermijd: "Direct 'nee' zonder empathie — dit escaleert.",
      dur: 2
    },
    {
      title: "Grens herhalen",
      desc: "Bij weerstand: herhaal exact dezelfde zin, zelfde toon.",
      waarom: "Consistentie leert: deze grens is echt. Variëren = onderhandelen.",
      tip: "Plaat met een deuk: letterlijk dezelfde woorden, 3× if needed.",
      vermijd: "Harder praten of uitleggen blijven — dat is escalatie.",
      dur: 2
    },
    {
      title: "Eerst-dan",
      desc: "Gebruik vandaag {count}× de 'eerst-dan' formule.",
      waarom: "Geeft kinderen controle binnen jouw kader — minder verzet.",
      tip: "'Eerst tanden, dan verhaal.' Simpel, helder, consequent.",
      vermijd: "'Als je tanden poetst, krijg je verhaal' — dat is omkopen.",
      dur: 2
    },
    {
      title: "Grens als zorg",
      desc: "Begin met: 'Ik zeg dit omdat ik om je geef.' Dan pas de grens.",
      waarom: "Dit frame helpt je kind de grens zien als bescherming, niet straf.",
      tip: "Warm + stevig tegelijk. Je stem zacht, je grens hard.",
      vermijd: "Streng zonder context — kind voelt alleen afwijzing.",
      dur: 2
    },
  ],
  Autonomie: [
    {
      title: "Echte keuze geven",
      desc: "Bied {count} keuzes aan die je werkelijk beide accepteert.",
      waarom: "Keuzes binnen kaders geven controle zonder chaos.",
      tip: "'Blauwe of rode shirt?' — beide prima, kind kiest.",
      vermijd: "Schijnkeuzes: 'Wil je nu opruimen?' — nee is geen optie.",
      dur: 2
    },
    {
      title: "Probleem teruggeven",
      desc: "Bij probleem: vraag 'wat heb je al geprobeerd?'",
      waarom: "Dit activeert probleemoplossend denken i.p.v. afhankelijkheid.",
      tip: "Echt wachten op antwoord. Stilte = denktijd.",
      vermijd: "Direct oplossen — je raakt het leermoment kwijt.",
      dur: 5
    },
    {
      title: "Fout laten maken",
      desc: "Laat vandaag 1 kleine fout gebeuren als het niet gevaarlijk is.",
      waarom: "Falen is de beste leraar — beschermen is groei blokkeren.",
      tip: "Jas vergeten? Laat het gebeuren. Eén dag kou leert meer dan 100× zeggen.",
      vermijd: "Redden: 'Ik heb hem toch meegenomen' — dit leert niks.",
      dur: 5
    },
    {
      title: "Compliment op proces",
      desc: "Prijs vandaag inzet/strategie, niet het resultaat.",
      waarom: "Growth mindset: 'Je werd beter' > 'Je bent goed'.",
      tip: "'Je hebt echt volgehouden!' niet 'Wat knap!'",
      vermijd: "Talent prijzen — dit maakt kinderen bang voor falen.",
      dur: 1
    },
  ],
  Herstel: [
    {
      title: "Direct herstel",
      desc: "Na schreeuwen: ga binnen 10 min terug. 'Sorry. Gaat het?'",
      waarom: "Herstel binnen 24u voorkomt schade aan de relatie-basis.",
      tip: "Kort en echt. Geen uitleg, geen 'maar'. Gewoon sorry.",
      vermijd: "Wachten tot je kind komt — jij bent de volwassene.",
      dur: 5
    },
    {
      title: "Excuses in actie",
      desc: "Zeg sorry en benoem wat je anders doet.",
      waarom: "Sorry zonder verandering is een lege belofte.",
      tip: "'Sorry. Volgende keer adem ik eerst. Ik oefen dat nu.'",
      vermijd: "'Sorry maar jij deed ook...' — dat is geen excuus.",
      dur: 5
    },
    {
      title: "Positief afsluiten",
      desc: "Sluit de dag af met 1 positief moment.",
      waarom: "Laatste interactie kleurt de hele dag in het geheugen.",
      tip: "'Fijn dat je er was vandaag. Ik hou van je.' — simpel en warm.",
      vermijd: "Eindigen met kritiek — dit blijft hangen.",
      dur: 2
    },
    {
      title: "Foto's samen bekijken",
      desc: "Haal foto's op van jullie samen. Vertel verhaal.",
      waarom: "Positieve herinneringen herstellen verbinding als een reset-knop.",
      tip: "Geen moraal. Gewoon samen kijken en herinneringen ophalen.",
      vermijd: "'Toen was je nog lief' — nostalgie als kritiek doet pijn.",
      dur: 10
    },
  ],
  Verbinding: [
    {
      title: "Kwetsbaarheid delen",
      desc: "Deel een moment waarop jij ook moeite had als kind.",
      waarom: "'Ik ook' is de krachtigste verbindingszin die bestaat.",
      tip: "'Ik vond dat ook moeilijk toen ik klein was.' — dat opent deuren.",
      vermijd: "Jouw verhaal groter maken dan dat van je kind.",
      dur: 5
    },
    {
      title: "Echt luisteren",
      desc: "Vraag: 'Waar maak je je zorgen over?' en luister 5 min.",
      waarom: "Luisteren zonder fixen bouwt meer vertrouwen dan 100 adviezen.",
      tip: "Herhaal wat je hoort: 'Dus je vindt dat...' — dat is empathie.",
      vermijd: "Direct oplossen: 'Dan moet je gewoon...' — dit sluit af.",
      dur: 5
    },
    {
      title: "Geheime handdruk",
      desc: "Maak een geheim teken (knuffel, high five, woord) alleen voor jullie.",
      waarom: "Rituelen bouwen 'wij-gevoel' — jullie eigen ding.",
      tip: "Gebruik het als signaal: 'Ik zie je' in drukke momenten.",
      vermijd: "Te ingewikkeld — simpel werkt beter.",
      dur: 2
    },
    {
      title: "Samen stilzitten",
      desc: "Zit {time} naast elkaar zonder te praten. Gewoon zijn.",
      waarom: "Verbinding is niet altijd woorden — samen zijn is genoeg.",
      tip: "Bank, bed, buiten. Schouder aan schouder voelt veilig.",
      vermijd: "Gesprek forceren — stilte mag er zijn.",
      dur: 5
    },
  ],
  Reflectie: [
    {
      title: "Trigger documenteren",
      desc: "Noteer: wanneer werd ik geïrriteerd? Wat was de trigger?",
      waarom: "Patronen zien is de eerste stap naar veranderen.",
      tip: "Simpele notitie: tijd + trigger + reactie. Patronen komen vanzelf.",
      vermijd: "Jezelf veroordelen — dit is data, geen falen.",
      dur: 5
    },
    {
      title: "Avond-evaluatie",
      desc: "1 ding dat goed ging, 1 dat anders kon, 1 voornemen voor morgen.",
      waarom: "Reflectie zonder actie is dagdromen — koppel leren aan doen.",
      tip: "Schrijf het op — je brein neemt geschreven woorden serieuzer.",
      vermijd: "Alleen focussen op wat misging — balans is key.",
      dur: 5
    },
    {
      title: "Generatie-vraag",
      desc: "Vraag: 'Hoe zou mijn vader/moeder dit aangepakt hebben?'",
      waarom: "Je herkent patronen die je overnam — vaak onbewust.",
      tip: "Zonder oordeel kijken: wat neem ik over, wat laat ik los?",
      vermijd: "Ouders de schuld geven — dit gaat over jouw keuzes nu.",
      dur: 5
    },
    {
      title: "Beste versie visualiseren",
      desc: "Stel je voor: hoe reageert de vader die je wilt zijn?",
      waarom: "Visualisatie programmeert je brein — je oefent zonder te doen.",
      tip: "Specifiek scenario: bedtijd morgen. Zie jezelf rustig blijven.",
      vermijd: "Perfectie nastreven — 'iets beter' is genoeg.",
      dur: 5
    },
  ],
};

const VARIATIONS = {
  moment: ["het eten", "na school", "voor het slapen", "na werk", "bij thuiskomst"],
  time: ["10 minuten", "5 minuten", "een kwartier"],
  count: ["2", "3", "minimaal 1"],
};

function fillTemplate(template: string): string {
  let result = template;
  Object.entries(VARIATIONS).forEach(([key, options]) => {
    const regex = new RegExp(`\\{${key}\\}`, 'g');
    const randomOption = options[Math.floor(Math.random() * options.length)];
    result = result.replace(regex, randomOption);
  });
  return result;
}

// Genereer 4 taken per dag (was 3)
export function generateYearTasks(): DailyTask[] {
  const tasks: DailyTask[] = [];
  const skills: Skill[] = ["Aanwezigheid", "Emotiecoaching", "Zelfregulatie", "Grenzen", "Autonomie", "Herstel", "Verbinding", "Reflectie"];
  
  let taskId = 1;
  
  for (let day = 1; day <= 364; day++) {
    // 4 taken per dag van verschillende skills
    const daySkills = [
      skills[(day * 2) % skills.length],
      skills[(day * 3 + 1) % skills.length],
      skills[(day * 5 + 2) % skills.length],
      skills[(day * 7 + 3) % skills.length], // 4e taak
    ];
    
    daySkills.forEach((skill, taskIndex) => {
      const templates = RICH_TASKS[skill];
      const templateIndex = (day + taskIndex) % templates.length;
      const template = templates[templateIndex];
      
      tasks.push({
        id: `t${taskId}`,
        day,
        title: template.title,
        description: fillTemplate(template.desc),
        skill,
        durationMin: template.dur,
        waarom: template.waarom,
        skillTip: template.tip,
        vermijd: template.vermijd,
      });
      
      taskId++;
    });
  }
  
  return tasks;
}

export const DAILY_TASKS: DailyTask[] = generateYearTasks();

export function getTasksForDay(dayNumber: number): DailyTask[] {
  return DAILY_TASKS.filter(t => t.day === dayNumber);
}

export function getCurrentDayNumber(startDateISO: string): number {
  const start = new Date(startDateISO);
  const today = new Date();
  start.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  const diff = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(1, diff + 1);
}
