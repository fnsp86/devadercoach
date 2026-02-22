// DAGTAKEN PER LEEFTIJD - MET KIND'S STEM
// Elk leeftijd heeft eigen herkenbare situaties

export interface DailyTask {
  id: string;
  childVoice: string;
  task: string;
  skill: string;
  points: number;
  difficulty: "basis" | "gevorderd" | "expert";
}

export const DAILY_TASKS_BY_AGE: Record<string, DailyTask[]> = {
  "0-2": [
    {
      id: "toddler_1",
      childVoice: "Papa, waar ben je? Ik huil!",
      task: "Reageer binnen 2 minuten op huilen - geen telefoon checken eerst",
      skill: "Aanwezigheid",
      points: 10,
      difficulty: "basis",
    },
    {
      id: "toddler_2", 
      childVoice: "Papa kijk! Kijk dan! KIJK!",
      task: "Stop wat je doet, maak oogcontact, reageer op wat je kind laat zien",
      skill: "Aanwezigheid",
      points: 10,
      difficulty: "basis",
    },
    {
      id: "toddler_3",
      childVoice: "NEEEE! Wil niet! *schreeuwt*",
      task: "Ga op ooghoogte zitten, blijf rustig, wacht tot de storm passeert",
      skill: "Emotiecoaching",
      points: 15,
      difficulty: "gevorderd",
    },
    {
      id: "toddler_4",
      childVoice: "*gooit eten op de grond*",
      task: "Adem 3x diep, blijf kalm, stel grens zonder te schreeuwen",
      skill: "Zelfregulatie",
      points: 15,
      difficulty: "gevorderd",
    },
  ],

  "3-5": [
    {
      id: "preschool_1",
      childVoice: "Papa, zit je alweer op je telefoon?",
      task: "Leg telefoon weg voor 20 minuten, geef kind volledige aandacht",
      skill: "Aanwezigheid",
      points: 10,
      difficulty: "basis",
    },
    {
      id: "preschool_2",
      childVoice: "Ik ben BOOS! Jij bent STOM!",
      task: "Benoem de emotie: 'Je bent boos.' Blijf rustig, wacht tot het passeert",
      skill: "Emotiecoaching",
      points: 15,
      difficulty: "gevorderd",
    },
    {
      id: "preschool_3",
      childVoice: "Nog 5 minuutjes! PLEASE! Nog één aflevering!",
      task: "Zeg nee zonder uitleg te geven, gebruik 'gebroken plaat' techniek",
      skill: "Grenzen",
      points: 15,
      difficulty: "gevorderd",
    },
    {
      id: "preschool_4",
      childVoice: "Papa, wil je met mij spelen?",
      task: "Zeg ja en speel 15 minuten single-task (geen telefoon, geen afleiding)",
      skill: "Aanwezigheid",
      points: 20,
      difficulty: "expert",
    },
    {
      id: "preschool_5",
      childVoice: "Het lukt niet! Ik kan het niet!",
      task: "Bied geen oplossing, zeg: 'Het is moeilijk. Wil je het blijven proberen?'",
      skill: "Autonomie",
      points: 15,
      difficulty: "gevorderd",
    },
  ],

  "6-8": [
    {
      id: "primary_1",
      childVoice: "Je luistert nooit naar me!",
      task: "Stop direct wat je doet, draai je om, maak oogcontact: 'Ik luister nu.'",
      skill: "Aanwezigheid",
      points: 10,
      difficulty: "basis",
    },
    {
      id: "primary_2",
      childVoice: "Iedereen heeft het behalve ik! Het is NIET eerlijk!",
      task: "Benoem primaire emotie onder boosheid: 'Dat voelt als uitsluiting?'",
      skill: "Emotiecoaching",
      points: 20,
      difficulty: "expert",
    },
    {
      id: "primary_3",
      childVoice: "Maar WHY niet?! Geef me één goede reden!",
      task: "Herhaal grens zonder nieuwe redenen: 'Het antwoord is nee.'",
      skill: "Grenzen",
      points: 15,
      difficulty: "gevorderd",
    },
    {
      id: "primary_4",
      childVoice: "Huiswerk is STOM! Ik snap het toch niet!",
      task: "Vraag: 'Wil je dat ik help of wil je het zelf proberen?' - laat kind kiezen",
      skill: "Autonomie",
      points: 15,
      difficulty: "gevorderd",
    },
    {
      id: "primary_5",
      childVoice: "*komt boos thuis, gooit tas in hoek*",
      task: "Benoem wat je ziet zonder te vragen: 'Je tas ligt in de hoek. Harde dag?'",
      skill: "Emotiecoaching",
      points: 15,
      difficulty: "gevorderd",
    },
    {
      id: "primary_6",
      childVoice: "Papa, mogen we gamen samen?",
      task: "Zeg ja, game 20 min samen, GEEN telefoon checken tijdens spelen",
      skill: "Aanwezigheid",
      points: 20,
      difficulty: "expert",
    },
  ],

  "9-12": [
    {
      id: "tween_1",
      childVoice: "Je zit alweer te werken... vergeet het maar.",
      task: "Stop werk binnen 5 min, zeg: 'Je hebt gelijk. Ik stop nu. Wat wilde je?'",
      skill: "Aanwezigheid",
      points: 15,
      difficulty: "gevorderd",
    },
    {
      id: "tween_2",
      childVoice: "Laat me met rust! Ik wil er niet over praten!",
      task: "Respecteer dit, zeg: 'Oké. Ik ben er als je wilt praten.' En loop weg.",
      skill: "Autonomie",
      points: 15,
      difficulty: "gevorderd",
    },
    {
      id: "tween_3",
      childVoice: "Dat meen je niet! ALLE anderen mogen wel!",
      task: "Blijf bij je nee, zeg: 'Ik begrijp dat je boos bent. Antwoord blijft nee.'",
      skill: "Grenzen",
      points: 20,
      difficulty: "expert",
    },
    {
      id: "tween_4",
      childVoice: "Niemand snapt me. School is waardeloos. Alles is kut.",
      task: "Zeg niks. Ga zitten. Wacht 2 minuten. Dan: 'Wil je vertellen of wil je ruimte?'",
      skill: "Emotiecoaching",
      points: 20,
      difficulty: "expert",
    },
    {
      id: "tween_5",
      childVoice: "Kan je me brengen? En ophalen? En...?",
      task: "Vraag: 'Wat kan je zelf regelen? Wat heb je echt nodig?' - stimuleer zelfstandigheid",
      skill: "Autonomie",
      points: 15,
      difficulty: "gevorderd",
    },
  ],

  "13+": [
    {
      id: "teen_1",
      childVoice: "*rolt met ogen* 'Whatever, papa.'",
      task: "Negeer de toon, focus op content: 'Ik hoor je niet uit. Wat wilde je zeggen?'",
      skill: "Zelfregulatie",
      points: 20,
      difficulty: "expert",
    },
    {
      id: "teen_2",
      childVoice: "Je begrijpt er niks van! Je bent ZO oud!",
      task: "Blijf rustig: 'Misschien niet. Leg uit zodat ik het snap.' - geen defensief",
      skill: "Zelfregulatie",
      points: 20,
      difficulty: "expert",
    },
    {
      id: "teen_3",
      childVoice: "*hele avond op kamer, komt niet naar beneden*",
      task: "Klop, breng eten/drinken, zeg: 'Hier. Geen vragen.' - geef ruimte",
      skill: "Aanwezigheid",
      points: 15,
      difficulty: "gevorderd",
    },
    {
      id: "teen_4",
      childVoice: "Iedereen mag tot 12 uur! Jullie zijn zo STRENG!",
      task: "Herhaal grens, leg uit WAAROM (veiligheid), maar geef geen toe",
      skill: "Grenzen",
      points: 20,
      difficulty: "expert",
    },
    {
      id: "teen_5",
      childVoice: "Ik red het zelf wel. Hoef jullie hulp niet.",
      task: "Respecteer dit: 'Goed. Laat weten als je iets nodig hebt.' - geen pushen",
      skill: "Autonomie",
      points: 15,
      difficulty: "gevorderd",
    },
    {
      id: "teen_6",
      childVoice: "*komt 2 uur te laat thuis*",
      task: "Wacht tot morgen, rustig gesprek over consequentie - niet 's nachts straffen",
      skill: "Grenzen",
      points: 25,
      difficulty: "expert",
    },
  ],
};

// Helper function to get tasks for child's age
export function getTasksForAge(ageGroup: string) {
  return DAILY_TASKS_BY_AGE[ageGroup as keyof typeof DAILY_TASKS_BY_AGE] || [];
}

// Helper to determine age group from age
export function getAgeGroup(age: number): string {
  if (age <= 2) return "0-2";
  if (age <= 5) return "3-5";
  if (age <= 8) return "6-8";
  if (age <= 12) return "9-12";
  return "13+";
}

// Get all tasks for multiple children (deduplicated)
export function getAllTasksForChildren(children: Array<{ageGroup: string}>): DailyTask[] {
  const allTasks: DailyTask[] = [];
  const seenIds = new Set<string>();
  
  children.forEach(child => {
    const tasks = getTasksForAge(child.ageGroup);
    tasks.forEach(task => {
      if (!seenIds.has(task.id)) {
        seenIds.add(task.id);
        allTasks.push(task);
      }
    });
  });
  
  return allTasks;
}
