import type { Scenario, ThemeTag } from "./types";
import { BONUSKIND_SCENARIOS } from "./themed-content-bonuskind";
import { GEDRAG_SCENARIOS } from "./themed-content-gedrag";

export const SCENARIOS: Scenario[] = [
  // ── Aanwezigheid ──────────────────────────────────────────────
  {
    id: "s1",
    ageGroups: ["3-5", "6-9"],
    skill: "Aanwezigheid",
    situation: "Je kind vertelt enthousiast over zijn dag terwijl jij net thuiskomt van werk en moe bent.",
    prompt: "Wat doe je?",
    options: [
      { id: "a", text: "Ik zeg: 'Vertel straks maar, papa is nu moe.'", feedback: "Je eigen behoefte is duidelijk, maar je kind voelt zich niet gehoord. Dit moment is belangrijk voor verbinding.", score: "slecht" },
      { id: "b", text: "Ik luister half terwijl ik mijn telefoon check.", feedback: "Je kind merkt dat je er niet echt bij bent. Kinderen hebben een radar voor halve aandacht.", score: "slecht" },
      { id: "c", text: "Ik zeg: 'Geef me 5 minuten, dan ben ik er helemaal voor jou.'", feedback: "Goed! Je erkent je behoefte én maakt een concrete afspraak. Je kind weet nu waar het aan toe is.", score: "goed" },
      { id: "d", text: "Ik ga zitten, leg mijn telefoon weg en luister.", feedback: "Perfect! Ondanks je vermoeidheid kies je voor volle aanwezigheid. Dit bouwt vertrouwen.", score: "goed" },
    ],
  },
  {
    id: "s2",
    ageGroups: ["10-12", "13-16"],
    skill: "Aanwezigheid",
    situation: "Je tiener zit stil op de bank. Je vraagt hoe het gaat en krijgt 'prima' als antwoord.",
    prompt: "Wat doe je?",
    options: [
      { id: "a", text: "Ik blijf doorvragen tot ik een echt antwoord krijg.", feedback: "Doorvragen voelt als verhoor. Dit sluit tieners juist af.", score: "slecht" },
      { id: "b", text: "Ik accepteer 'prima' en loop door.", feedback: "Soms is dit ok, maar je mist kans op verbinding. Je kind test of je echt beschikbaar bent.", score: "matig" },
      { id: "c", text: "Ik ga naast hem/haar zitten en zeg: 'Ik ben er als je wil praten. Geen druk.'", feedback: "Goed! Je biedt aanwezigheid zonder druk. Tieners komen vaak later terug als de ruimte veilig is.", score: "goed" },
      { id: "d", text: "Ik zeg: 'Echt? Je ziet er niet prima uit.'", feedback: "Dit klinkt als beschuldiging. Je kind voelt zich niet gezien maar gecorrigeerd.", score: "slecht" },
    ],
  },
  
  // ── Emotiecoaching ────────────────────────────────────────────
  {
    id: "s3",
    ageGroups: ["3-5", "6-9"],
    skill: "Emotiecoaching",
    situation: "Je kind huilt omdat een toren die het bouwde omviel.",
    prompt: "Wat zeg je?",
    options: [
      { id: "a", text: "'Het is maar een toren, we bouwen een nieuwe.'", feedback: "Je bagatelliseert het gevoel. Voor je kind is dit echt verdriet.", score: "slecht" },
      { id: "b", text: "'Niet huilen, het is niet erg.'", feedback: "Je ontkent het gevoel. Dit leert je kind dat verdriet niet mag.", score: "slecht" },
      { id: "c", text: "'Ik zie dat je verdrietig bent. Je had er hard aan gewerkt.'", feedback: "Perfect! Je erkent zowel het gevoel als de oorzaak. Dit is emotiecoaching.", score: "goed" },
      { id: "d", text: "'Kom, we gaan iets leuks doen.'", feedback: "Afleiding lijkt aardig, maar je kind leert niet omgaan met teleurstelling.", score: "matig" },
    ],
  },
  {
    id: "s4",
    ageGroups: ["6-9", "10-12"],
    skill: "Emotiecoaching",
    situation: "Je kind is boos omdat een vriend niet kwam opdagen voor een afspraak.",
    prompt: "Hoe coach je deze emotie?",
    options: [
      { id: "a", text: "'Hij is gewoon geen goede vriend, zoek een ander.'", feedback: "Je lost op i.p.v. te coachen. Je kind leert niet omgaan met boosheid.", score: "slecht" },
      { id: "b", text: "'Je bent boos en teleurgesteld. Dat zijn zware gevoelens.'", feedback: "Goed! Je benoemt én normaliseert. Dit helpt je kind de emotie te herkennen.", score: "goed" },
      { id: "c", text: "'Dat is niet erg, volgende keer beter.'", feedback: "Je bagatelliseert. Het gevoel is wel erg voor je kind.", score: "slecht" },
      { id: "d", text: "'Wat voel je nu precies? Boosheid, verdriet, of iets anders?'", feedback: "Perfect! Je helpt je kind nuance te ontdekken in gevoelens. Dit is emotionele intelligentie.", score: "goed" },
    ],
  },
  
  // ── Zelfregulatie ─────────────────────────────────────────────
  {
    id: "s5",
    ageGroups: ["0-2", "3-5", "6-9"],
    skill: "Zelfregulatie",
    situation: "Je kind blijft zeuren om snoep. Je voelt irritatie opkomen.",
    prompt: "Wat doe je?",
    options: [
      { id: "a", text: "Ik zeg steeds harder 'NEE!'", feedback: "Je escaleert mee. Dit leert je kind dat harder = meer kans op succes.", score: "slecht" },
      { id: "b", text: "Ik geef toe om van het gezeur af te zijn.", feedback: "Korte termijn oplossing, maar je leert je kind dat zeuren werkt.", score: "slecht" },
      { id: "c", text: "Ik zeg rustig: 'Ik merk dat ik geïrriteerd raak. Ik neem een korte pauze.'", feedback: "Goed! Je modelleert zelfregulatie en voorkomt escalatie. Dit leert je kind hoe je met irritatie omgaat.", score: "goed" },
      { id: "d", text: "Ik herhaal exact hetzelfde ('Nee') zonder harder te praten.", feedback: "Perfect! Consistentie zonder escalatie. Je blijft rustig en duidelijk.", score: "goed" },
    ],
  },
  {
    id: "s6",
    ageGroups: ["10-12", "13-16"],
    skill: "Zelfregulatie",
    situation: "Je tiener antwoordt kortaf en geïrriteerd. Je voelt woede opkomen.",
    prompt: "Wat doe je?",
    options: [
      { id: "a", text: "Ik zeg: 'Praat normaal tegen mij!'", feedback: "Je escaleert. Tieners voelen dit als aanval en sluiten verder af.", score: "slecht" },
      { id: "b", text: "Ik adem 3x diep en zeg: 'Ik merk dat we allebei prikkelbaar zijn. Ik kom zo terug.'", feedback: "Perfect! Je reguleert jezelf én benoemt wat er gebeurt. Dit modelleert zelfcontrole.", score: "goed" },
      { id: "c", text: "Ik negeer het en loop weg.", feedback: "Je voorkomt escalatie, maar lost niets op. Later terugkomen is beter.", score: "matig" },
      { id: "d", text: "Ik zeg sarcastisch: 'Fijn dat je zo aardig doet.'", feedback: "Sarcasme is passief-agressief en ondermijnt vertrouwen. Nooit een goede keuze.", score: "slecht" },
    ],
  },
  
  // ── Grenzen ───────────────────────────────────────────────────
  {
    id: "s7",
    ageGroups: ["3-5", "6-9"],
    skill: "Grenzen",
    situation: "Je kind wil nog 10 minuten langer opblijven. Bedtijd is al geweest.",
    prompt: "Hoe stel je de grens?",
    options: [
      { id: "a", text: "'Nee. Naar bed. Nu.'", feedback: "Duidelijk maar hard. Je kind voelt geen empathie.", score: "matig" },
      { id: "b", text: "'Oké, nog 10 minuten dan.'", feedback: "Je laat de grens vallen. Dit leert je kind dat grenzen onderhandelbaar zijn.", score: "slecht" },
      { id: "c", text: "'Ik snap dat je nog wil spelen. Het antwoord is nee. Morgen mag je langer op.'", feedback: "Goed! Empathie + grens + alternatief. Dit is warm begrenzen.", score: "goed" },
      { id: "d", text: "'Als je nu gaat, mag je morgen langer op.'", feedback: "Perfect! Je erkent de wens én biedt een concrete deal. Je kind leert: grenzen zijn niet straf.", score: "goed" },
    ],
  },
  {
    id: "s8",
    ageGroups: ["6-9", "10-12", "13-16"],
    skill: "Grenzen",
    situation: "Je kind overtreedt een afgesproken schermtijdregel.",
    prompt: "Wat doe je?",
    options: [
      { id: "a", text: "Ik zeg: 'Je weet de regel. Scherm nu uit.'", feedback: "Duidelijk en consequent. Dit werkt, maar je mist kans op begrip.", score: "matig" },
      { id: "b", text: "Ik laat het deze keer gaan.", feedback: "Inconsistentie ondermijnt alle grenzen. Dit werkt niet op lange termijn.", score: "slecht" },
      { id: "c", text: "'De regel is: X. Jij deed Y. De consequentie is: scherm uit + morgen 10 min minder.'", feedback: "Goed! Helder, voorspelbaar en eerlijk. Dit is logische consequentie.", score: "goed" },
      { id: "d", text: "'Ik zie dat je de tijd vergat. Volgende keer zet je een timer. Nu uit.'", feedback: "Perfect! Je geeft het voordeel van de twijfel + biedt een hulpmiddel voor volgende keer.", score: "goed" },
    ],
  },
  
  // ── Autonomie ─────────────────────────────────────────────────
  {
    id: "s9",
    ageGroups: ["6-9", "10-12"],
    skill: "Autonomie",
    situation: "Je kind heeft een probleem met een vriend en vraagt wat te doen.",
    prompt: "Hoe geef je autonomie?",
    options: [
      { id: "a", text: "'Je moet dit doen: ga naar hem toe en zeg...'", feedback: "Je lost op. Je kind leert niet zelf denken.", score: "slecht" },
      { id: "b", text: "'Dat is jouw probleem, los het zelf op.'", feedback: "Te veel loslaten. Je kind voelt zich alleen.", score: "slecht" },
      { id: "c", text: "'Wat heb je zelf al geprobeerd? Welke oplossingen zie jij?'", feedback: "Perfect! Je coacht i.p.v. op te lossen. Dit bouwt probleemoplossend vermogen.", score: "goed" },
      { id: "d", text: "'Wat zou jij doen als ik er niet was?'", feedback: "Goed! Je zet je kind in de driver's seat. Dit versterkt zelfvertrouwen.", score: "goed" },
    ],
  },
  {
    id: "s10",
    ageGroups: ["10-12", "13-16"],
    skill: "Autonomie",
    situation: "Je tiener kiest kleding die jij niet mooi vindt.",
    prompt: "Wat zeg je?",
    options: [
      { id: "a", text: "'Dat trek je niet aan. Kies iets anders.'", feedback: "Je ondermijnt autonomie. Kleding is een veilig gebied om te laten kiezen.", score: "slecht" },
      { id: "b", text: "'Oké, jouw keuze.'", feedback: "Perfect! Je respecteert autonomie. Kleding is niet de heuvel om op te sterven.", score: "goed" },
      { id: "c", text: "'Weet je het zeker? Andere kinderen dragen dit niet.'", feedback: "Je ondermijnt subtiel. Dit voelt als kritiek.", score: "slecht" },
      { id: "d", text: "(Ik zeg niets)", feedback: "Goed! Stilte is soms de beste respons. Je kind voelt vertrouwen.", score: "goed" },
    ],
  },
  
  // ── Herstel ───────────────────────────────────────────────────
  {
    id: "s11",
    ageGroups: ["3-5", "6-9", "10-12"],
    skill: "Herstel",
    situation: "Je schreeuwde vanmorgen tegen je kind. Nu is het rustig.",
    prompt: "Hoe herstel je?",
    options: [
      { id: "a", text: "Ik doe alsof er niks gebeurd is.", feedback: "Je mist de kans op herstel. Onbesproken schade stapelt zich op.", score: "slecht" },
      { id: "b", text: "'Sorry dat ik schreeuwde. Ik was moe.'", feedback: "Je erkent, maar verklaart. 'Ik was moe' klinkt als excuus.", score: "matig" },
      { id: "c", text: "'Ik schreeuwde vanmorgen. Dat was niet oké. Sorry.'", feedback: "Perfect! Kort, duidelijk, geen excuses. Dit is eerlijk herstel.", score: "goed" },
      { id: "d", text: "'Sorry. Volgende keer adem ik eerst. Gaat het nu?'", feedback: "Perfect! Sorry + concrete gedragsverandering + check-in. Dit is actief herstel.", score: "goed" },
    ],
  },
  {
    id: "s12",
    ageGroups: ["6-9", "10-12", "13-16"],
    skill: "Herstel",
    situation: "Na een groot conflict voelt de sfeer nog gespannen.",
    prompt: "Hoe herstel je de relatie?",
    options: [
      { id: "a", text: "Ik wacht tot mijn kind naar mij toekomt.", feedback: "Als volwassene ben jij verantwoordelijk voor herstel. Wachten werkt niet.", score: "slecht" },
      { id: "b", text: "Ik doe iets leuks samen zonder het conflict te benoemen.", feedback: "Leuk doen helpt, maar zonder erkenning blijft de schade. Doe beide.", score: "matig" },
      { id: "c", text: "'Dat was een grote ruzie. Ik wil het herstellen. Mag ik beginnen?'", feedback: "Perfect! Je neemt verantwoordelijkheid + vraagt toestemming. Dit opent de deur.", score: "goed" },
      { id: "d", text: "'We hadden allebei een moeilijk moment. Laten we iets leuks doen.'", feedback: "Goed! Je normaliseert conflict + biedt verbinding. Dit werkt.", score: "goed" },
    ],
  },
];

export function getScenariosForSkill(skill: string, ageGroup?: string, activeThemes: ThemeTag[] = []): Scenario[] {
  // Combineer basis-scenario's met themed scenario's als themes actief zijn
  const allScenarios = activeThemes.length > 0
    ? [...SCENARIOS, ...BONUSKIND_SCENARIOS.filter((s) => s.themes?.some((t) => activeThemes.includes(t))), ...GEDRAG_SCENARIOS.filter((s) => s.themes?.some((t) => activeThemes.includes(t)))]
    : SCENARIOS;

  return allScenarios.filter(s => {
    const skillMatch = s.skill === skill;
    const ageMatch = !ageGroup || s.ageGroups.includes(ageGroup as any);
    return skillMatch && ageMatch;
  });
}

export function getRandomScenario(skill: string, ageGroup?: string, activeThemes: ThemeTag[] = []): Scenario | null {
  const pool = getScenariosForSkill(skill, ageGroup, activeThemes);
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}
