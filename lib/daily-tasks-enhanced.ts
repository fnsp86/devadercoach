// ENHANCED DAILY TASKS - Met educatie en psychologie uitleg

export interface EnhancedDailyTask {
  id: string;
  childVoice: string;
  task: string;
  skill: string;
  points: number;
  difficulty: "basis" | "gevorderd" | "expert";
  
  // NIEUWE VELDEN - Educatie!
  waarom: string;        // Waarom werkt dit? (psychologie/onderzoek)
  valkuil: string;       // Wat NIET te doen
  voorbeeld?: string;    // Concrete voorbeeld dialoog (optioneel)
}

// Update bestaande taken met educatie
export const ENHANCED_TASKS_6_8: EnhancedDailyTask[] = [
  {
    id: "primary_1",
    childVoice: "Je luistert nooit naar me!",
    task: "Stop direct wat je doet, draai je om, maak oogcontact: 'Ik luister nu'",
    skill: "Aanwezigheid",
    points: 10,
    difficulty: "basis",
    waarom: "Kinderen van 6-8 ontwikkelen hun gevoel van eigenwaarde door gezien te worden. Het Attachment Theory (Bowlby) toont aan dat aanwezige ouders = veilige kinderen. Je kind leert: 'Ik ben belangrijk genoeg om papa's aandacht te krijgen.'",
    valkuil: "NIET zeggen: 'Ik luister toch?!' terwijl je op je telefoon kijkt. Non-verbale signalen zijn sterker dan woorden. Kind voelt dat je er niet bent.",
    voorbeeld: "Kind: 'Je luistert nooit!' → [Leg telefoon weg, draai je om, oogcontact] → 'Je hebt gelijk. Ik luister nu. Wat wilde je zeggen?'"
  },
  {
    id: "primary_2",
    childVoice: "Iedereen heeft het behalve ik! Het is NIET eerlijk!",
    task: "Benoem de primaire emotie onder de boosheid: 'Dat voelt als uitsluiting, hè?' Wacht 30 sec voor je meer zegt",
    skill: "Emotiecoaching",
    points: 20,
    difficulty: "expert",
    waarom: "Boosheid is vaak secundaire emotie. Primaire emoties (verdriet, angst, schaamte) liggen eronder. Emotiecoaching (Gottman) werkt alleen als je de ECHTE emotie benoemt. Kind leert: 'Papa begrijpt wat ik voel.'",
    valkuil: "NIET rationaliseren: 'Dat is niet waar, jij hebt ook...' Dit invalideert hun ervaring. Ze voelen zich dan niet gehoord en escaleren.",
    voorbeeld: "Kind: 'Iedereen heeft het!' → 'Dat voelt als uitsluiting.' [30 sec wachten] → Kind kalmeert vaak automatisch."
  },
  {
    id: "primary_3",
    childVoice: "Maar WHY niet?! Geef me één goede reden!",
    task: "Herhaal je grens zonder nieuwe redenen te geven: 'Het antwoord is nee.' Gebruik gebroken plaat techniek",
    skill: "Grenzen",
    points: 15,
    difficulty: "gevorderd",
    waarom: "Kinderen testen grenzen om te zien of ze stabiel zijn. Elke nieuwe reden = nieuwe openingszet voor discussie. Stabiele grenzen (geen uitleg na uitleg) = veiligheid. Limits zorgen voor structuur (Siegel).",
    valkuil: "NIET steeds nieuwe redenen geven. 'Omdat het slecht voor je is, omdat het duur is, omdat...' → Kind leert dat zeuren loont en grenzen verschuiven.",
    voorbeeld: "Kind: 'Waarom niet?!' → 'Het antwoord is nee.' → 'Maar WHY?!' → 'Het antwoord blijft nee.' [Herhaal rustig]"
  },
  {
    id: "primary_4",
    childVoice: "Huiswerk is STOM! Ik snap het toch niet!",
    task: "Vraag: 'Wil je dat ik help of wil je het zelf nog proberen?' Laat kind kiezen",
    skill: "Autonomie",
    points: 15,
    difficulty: "gevorderd",
    waarom: "Autonomie (Self-Determination Theory, Deci & Ryan) is cruciale ontwikkelingsbehoefte. Keuzes geven = competentie gevoel. Kind leert: 'Ik heb controle en papa vertrouwt me.'",
    valkuil: "NIET direct ingrijpen: 'Laat maar, ik doe het wel.' Dit ondermijnt competentie. Kind leert: 'Ik kan het niet, papa moet me redden.'",
    voorbeeld: "Kind: 'Ik snap het niet!' → 'Wil je hulp of eerst zelf proberen?' → Kind kiest → Respecteer keuze."
  },
  {
    id: "primary_5",
    childVoice: "*komt boos thuis van school, gooit tas in de hoek*",
    task: "Benoem wat je ziet zonder te vragen: 'Je tas ligt in de hoek. Zware dag gehad?'",
    skill: "Emotiecoaching",
    points: 15,
    difficulty: "gevorderd",
    waarom: "Direct vragen ('Wat is er?!') voelt als verhoor. Observatie + ruimte = veiligheid om te delen. Spiegelneuronen maken dat kind zich gezien voelt zonder druk.",
    valkuil: "NIET bombarderen met vragen: 'Wat is er? Waarom boos? Wat gebeurde?' Kind sluit zich dan verder af. Te veel druk = terugtrekken.",
    voorbeeld: "*tas valt* → [Rustig] 'Je tas ligt daar. Zware dag?' → [Wacht] → Kind vertelt vaak vanzelf."
  },
  {
    id: "primary_6",
    childVoice: "Papa, mogen we samen gamen?",
    task: "Zeg ja, game 20 minuten samen, GEEN telefoon checken tijdens spelen",
    skill: "Aanwezigheid",
    points: 20,
    difficulty: "expert",
    waarom: "Quality time betekent single-task attention. Multi-tasking (telefoon + kind) = half aanwezig = kind voelt zich niet waardevol. Volledige aandacht = oxytocine = hechting.",
    valkuil: "NIET half aanwezig zijn: telefoon naast je, werk in je hoofd. Kinderen VOELEN wanneer je er mentaal niet bent. Dit beschadigt vertrouwen.",
    voorbeeld: "Kind: 'Gamen?' → 'Ja! 20 minuten!' [Telefoon weg, 100% focus] → Kind voelt: 'Papa kiest voor mij.'"
  }
];

// Functie om oude taken te converteren naar enhanced versie
export function enhanceTask(oldTask: any): EnhancedDailyTask {
  return {
    ...oldTask,
    waarom: "Deze taak helpt je kind zich gezien en gehoord te voelen, wat essentieel is voor hun emotionele ontwikkeling.",
    valkuil: "Vermijd defensief reageren of het gevoel van je kind minimaliseren.",
    voorbeeld: undefined
  };
}
