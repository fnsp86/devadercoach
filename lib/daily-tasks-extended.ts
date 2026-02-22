// EXTENDED DAILY TASKS - 200+ EXTRA TASKS
// To be merged with daily-tasks.ts

import { type DailyTask } from "./daily-tasks";

// Helper function to create task
const createTask = (
  id: string,
  ageGroup: string,
  childVoice: string,
  task: string,
  skill: string,
  points: number,
  difficulty: "basis" | "gevorderd" | "expert"
): DailyTask => ({
  id,
  childVoice,
  task,
  skill,
  points,
  difficulty
});

export const EXTENDED_TASKS_0_2: DailyTask[] = [
  // 0-2 JAAR - 30 extra tasks
  createTask("peat_21", "0-2", "Papa! Papa! PAPA!", "Reageer binnen 5 sec, maak oogcontact, zeg 'Ja?'", "Aanwezigheid", 10, "basis"),
  createTask("peat_22", "0-2", "*wijst naar iets*", "Volg de vinger, benoem wat je kind ziet", "Aanwezigheid", 10, "basis"),
  createTask("peat_23", "0-2", "*valt, begint te huilen*", "Ga rustig naar toe, check eerst of het erg is", "Emotiecoaching", 15, "gevorderd"),
  createTask("peat_24", "0-2", "Nee nee nee!", "Accepteer het 'nee', bied alternatief aan", "Autonomie", 15, "gevorderd"),
  createTask("peat_25", "0-2", "*klimt overal op*", "Laat klimmen maar blijf in de buurt, geen 'pas op!'", "Autonomie", 15, "gevorderd"),
  
  // Papa perspectief
  createTask("peat_26", "0-2", "Je kind plakt de hele dag aan je", "Accepteer dit, geef 10 min volle aandacht zonder afleiding", "Aanwezigheid", 20, "expert"),
  createTask("peat_27", "0-2", "5e luier in 2 uur", "Blijf rustig, maak er spelletje van, zing liedje", "Zelfregulatie", 15, "gevorderd"),
  createTask("peat_28", "0-2", "Kind huilt tijdens eten", "Stop met voeren, wacht, probeer opnieuw", "Emotiecoaching", 15, "gevorderd"),
  createTask("peat_29", "0-2", "Nacht wakker worden", "Rustige stem, geen licht aan, terug naar bed", "Zelfregulatie", 20, "expert"),
  createTask("peat_30", "0-2", "Kind slaat naar je gezicht", "Pak hand rustig, zeg 'Au', leg uit zonder boosheid", "Grenzen", 20, "expert"),
  
  // Situaties
  createTask("peat_31", "0-2", "Autorit met huilen", "Stop veilig, check wat nodig is, niet doorrijden boos", "Emotiecoaching", 15, "gevorderd"),
  createTask("peat_32", "0-2", "Winkel wagen verzet", "Laat kind helpen duwen (veilig), geef controle", "Autonomie", 10, "basis"),
  createTask("peat_33", "0-2", "Slapen weigeren", "Vast ritueel blijven volgen, rustige stem, geduld", "Grenzen", 15, "gevorderd"),
  createTask("peat_34", "0-2", "Spelen met eten", "Laat ontdekken 5 min, dan rustig stoppen", "Autonomie", 15, "gevorderd"),
  createTask("peat_35", "0-2", "Knuffel tijd", "10 min knuffelen zonder telefoon/gedachten", "Aanwezigheid", 20, "expert"),
  
  // Extra variaties
  createTask("peat_36", "0-2", "*rent weg*", "Rustig halen, uitleg waarom gevaarlijk, geen boosheid", "Grenzen", 15, "gevorderd"),
  createTask("peat_37", "0-2", "Speelgoed gooien", "Pak rustig op, zeg 'niet gooien', herhaal", "Grenzen", 15, "gevorderd"),
  createTask("peat_38", "0-2", "*boos op ander kind*", "Ga tussen, benoem beide gevoelens, geen kant kiezen", "Emotiecoaching", 20, "expert"),
  createTask("peat_39", "0-2", "Tandenpoetsen verzet", "Maak spelletje, zing, laat kind eerst jouw tanden poetsen", "Autonomie", 15, "gevorderd"),
  createTask("peat_40", "0-2", "*moe signaal*", "Herken signaal vroeg, begin rust routine direct", "Emotiecoaching", 15, "gevorderd"),
  
  createTask("peat_41", "0-2", "Boek! Nog een!", "Lees 3 boeken, telefoon weg, met stemmetjes", "Aanwezigheid", 15, "gevorderd"),
  createTask("peat_42", "0-2", "*deelt niet*", "Benoem 'jij wilt dit vasthouden', geen forceren", "Emotiecoaching", 15, "gevorderd"),
  createTask("peat_43", "0-2", "Baden verzet", "Speelgoed in bad, zelf ook nat worden, fun maken", "Autonomie", 15, "gevorderd"),
  createTask("peat_44", "0-2", "*verdrietig zonder reden*", "Oppakken, troosten, niet vragen waarom", "Emotiecoaching", 15, "gevorderd"),
  createTask("peat_45", "0-2", "Mama mama mama", "Zeg 'Mama komt zo, papa is er nu', blijf rustig", "Zelfregulatie", 15, "gevorderd"),
  
  createTask("peat_46", "0-2", "*hoofd bonken*", "Stop zonder schreeuwen, afleiden, alternatief geven", "Zelfregulatie", 20, "expert"),
  createTask("peat_47", "0-2", "Aankleden verzet", "Keuze geven (rood of blauw?), laten helpen", "Autonomie", 10, "basis"),
  createTask("peat_48", "0-2", "*alles aanwijzen*", "Benoem alles wat kind aanwijst, maak er spel van", "Aanwezigheid", 10, "basis"),
  createTask("peat_49", "0-2", "Speeltuin angst", "Blijf dichtbij, moedig aan maar forceer niet", "Emotiecoaching", 15, "gevorderd"),
  createTask("peat_50", "0-2", "*eerste stapjes*", "Vier elk stapje, blijf geduldig bij vallen", "Aanwezigheid", 10, "basis"),
];

export const EXTENDED_TASKS_3_5: DailyTask[] = [
  // 3-5 JAAR - 50 extra tasks
  createTask("kltr_21", "3-5", "Ik wil zelf!", "Zeg 'Oké, probeer eerst', geef 5 min", "Autonomie", 15, "gevorderd"),
  createTask("kltr_22", "3-5", "Die is van MIJ!", "Benoem 'jij wilt dit houden', stel timer", "Grenzen", 15, "gevorderd"),
  createTask("kltr_23", "3-5", "Papa, spelen?", "Zeg ja binnen 10 sec, 20 min single-task", "Aanwezigheid", 20, "expert"),
  createTask("kltr_24", "3-5", "*driftbui in auto*", "Stop veilig, wacht uit, zeg niks", "Emotiecoaching", 20, "expert"),
  createTask("kltr_25", "3-5", "Waarom? WAAROM?!", "Beantwoord geduldig 3x, dan 'omdat het zo is'", "Zelfregulatie", 15, "gevorderd"),
  
  createTask("kltr_26", "3-5", "Ik haat jou!", "Blijf rustig: 'Je bent boos op me'", "Emotiecoaching", 20, "expert"),
  createTask("kltr_27", "3-5", "*slaat broertje*", "Stop actie, benoem beide gevoelens", "Grenzen", 20, "expert"),
  createTask("kltr_28", "3-5", "Mag ik snoep?", "Nee, herhaal bij zeuren, geen uitleg telkens", "Grenzen", 15, "gevorderd"),
  createTask("kltr_29", "3-5", "*angst voor monster*", "Serieus nemen, samen kijken, nachtlampje", "Emotiecoaching", 15, "gevorderd"),
  createTask("kltr_30", "3-5", "Jij speelt het fout!", "Accepteer hun regels, laat kind de baas zijn", "Autonomie", 15, "gevorderd"),
  
  createTask("kltr_31", "3-5", "Niet naar bed!", "Vast ritueel, keuze (1 of 2 verhalen?)", "Grenzen", 15, "gevorderd"),
  createTask("kltr_32", "3-5", "*huilt om kleine val*", "Oppakken, troosten zonder 'het is niks'", "Emotiecoaching", 15, "gevorderd"),
  createTask("kltr_33", "3-5", "Kijk! Kijk! KIJK!", "Stop binnen 5 sec, echt kijken, enthousiast reageren", "Aanwezigheid", 10, "basis"),
  createTask("kltr_34", "3-5", "*speelt te wild*", "Waarschuw 1x, dan time-out zonder boosheid", "Grenzen", 15, "gevorderd"),
  createTask("kltr_35", "3-5", "Mama doet het beter", "Accepteer: 'Ja mama is goed daarin'", "Zelfregulatie", 15, "gevorderd"),
  
  createTask("kltr_36", "3-5", "*liegt over iets*", "Blijf kalm, zeg 'ik denk dat het anders ging'", "Grenzen", 15, "gevorderd"),
  createTask("kltr_37", "3-5", "Ik ben bang", "Ga op ooghoogte, vraag waar bang voor", "Emotiecoaching", 15, "gevorderd"),
  createTask("kltr_38", "3-5", "*potty training ongeluk*", "Geen drama, zeg 'oeps', verschonen rustig", "Emotiecoaching", 15, "gevorderd"),
  createTask("kltr_39", "3-5", "Nog één keer!", "Zeg wat komt daarna, blijf bij nee", "Grenzen", 15, "gevorderd"),
  createTask("kltr_40", "3-5", "*deelt speelgoed niet*", "Benoem 'moeilijk om te delen', forceer niet", "Emotiecoaching", 15, "gevorderd"),
  
  createTask("kltr_41", "3-5", "Papa, ben je boos?", "Eerlijk zijn: 'Ja een beetje, maar niet op jou'", "Emotiecoaching", 20, "expert"),
  createTask("kltr_42", "3-5", "*wil niet eten*", "Laat staan, geen dwang, komt vanzelf terug", "Autonomie", 15, "gevorderd"),
  createTask("kltr_43", "3-5", "Mag [vriendje] komen?", "Check eerst, dan antwoord, betrek kind in plan", "Autonomie", 10, "basis"),
  createTask("kltr_44", "3-5", "*teveel energie*", "20 min fysiek spelen, rennen in tuin", "Aanwezigheid", 15, "gevorderd"),
  createTask("kltr_45", "3-5", "Ik ben moe", "Rust moment, samen op bank, boek lezen", "Emotiecoaching", 15, "gevorderd"),
  
  createTask("kltr_46", "3-5", "*wil zelf aankleden*", "Tijd geven, helpen alleen als gevraagd", "Autonomie", 15, "gevorderd"),
  createTask("kltr_47", "3-5", "Waarom moet ik delen?", "Uitleg geven, begrip tonen, blijven stimuleren", "Emotiecoaching", 15, "gevorderd"),
  createTask("kltr_48", "3-5", "*bang voor hond*", "Beschermen, uitleg, niet forceren", "Emotiecoaching", 15, "gevorderd"),
  createTask("kltr_49", "3-5", "Jij bent niet lief!", "Rustig: 'Ik hoor dat je boos bent'", "Emotiecoaching", 15, "gevorderd"),
  createTask("kltr_50", "3-5", "*eerste schooldag*", "Extra aandacht, vragen stellen, luisteren", "Aanwezigheid", 20, "expert"),
  
  // Papa perspectief
  createTask("kltr_51", "3-5", "Je bent moe na werk", "15 min bewust spelen voor je relaxt", "Aanwezigheid", 20, "expert"),
  createTask("kltr_52", "3-5", "Kind zeurt al 10 min", "Adem 3x diep, herhaal grens rustig", "Zelfregulatie", 20, "expert"),
  createTask("kltr_53", "3-5", "Je wilt even alleen zijn", "Zeg eerlijk: '5 minuten papa-tijd', kom terug", "Grenzen", 15, "gevorderd"),
  createTask("kltr_54", "3-5", "Partner kritisch op je aanpak", "Luisteren, niet defensief, later bespreken", "Zelfregulatie", 20, "expert"),
  createTask("kltr_55", "3-5", "Kind kiest altijd mama", "Accepteren, blijven aanbieden, geen dwang", "Emotiecoaching", 20, "expert"),
  
  // Situaties
  createTask("kltr_56", "3-5", "Restaurant gedrag", "Spelletjes meenemen, kleine porties, vroeg gaan", "Grenzen", 15, "gevorderd"),
  createTask("kltr_57", "3-5", "Familie bezoek chaos", "Van tevoren grenzen uitleggen, consistent zijn", "Grenzen", 15, "gevorderd"),
  createTask("kltr_58", "3-5", "Verjaardags party", "Blijf in buurt, observeer, alleen helpen als nodig", "Autonomie", 15, "gevorderd"),
  createTask("kltr_59", "3-5", "Ochtend chaos", "Visuele planning, keuzes geven, tijd inbouwen", "Autonomie", 15, "gevorderd"),
  createTask("kltr_60", "3-5", "Avond routine", "Vast patroon, rustige activiteiten, quality time", "Aanwezigheid", 20, "expert"),
  
  createTask("kltr_61", "3-5", "Supermarkt gedrag", "Van tevoren 1 ding kiezen afspreken, blijven bij nee", "Grenzen", 15, "gevorderd"),
  createTask("kltr_62", "3-5", "Screen time einde", "5 min waarschuwing, timer, alternatief aanbieden", "Grenzen", 15, "gevorderd"),
  createTask("kltr_63", "3-5", "Ziek zijn", "Extra knuffels, geduld, tijd nemen", "Aanwezigheid", 15, "gevorderd"),
  createTask("kltr_64", "3-5", "Nieuw broertje/zusje", "Extra 1-op-1 tijd, jaloezie accepteren", "Emotiecoaching", 20, "expert"),
  createTask("kltr_65", "3-5", "Weekend trip", "Rust momenten inplannen, flexibel zijn", "Autonomie", 15, "gevorderd"),
  
  createTask("kltr_66", "3-5", "Kapper angst", "Vooraf uitleg, meegaan, troosten niet forceren", "Emotiecoaching", 15, "gevorderd"),
  createTask("kltr_67", "3-5", "Dokter bezoek", "Eerlijk zijn over pijn, troosten, belonen achteraf", "Emotiecoaching", 15, "gevorderd"),
  createTask("kltr_68", "3-5", "Speelafspraak ruzie", "Tussen gaan, beide kanten horen, niet oordelen", "Emotiecoaching", 20, "expert"),
  createTask("kltr_69", "3-5", "Opruimen weigeren", "Samen doen, spelletje, vast tijdstip", "Autonomie", 15, "gevorderd"),
  createTask("kltr_70", "3-5", "Papa tijd samen", "1 uur per week iets leuks, kind mag kiezen wat", "Aanwezigheid", 25, "expert"),
];

// More tasks will be added in next file - this is 70 tasks so far
// Continuing with 6-8 year, 9-12 year, and 13+ year groups...

