// Dagelijkse wijsheden voor vaders — unlock bij Level 2+
// Getoond op het Vandaag-scherm als inspiratie

export interface VaderWijsheid {
  text: string;
  bron?: string;
}

export const VADER_WIJSHEDEN: VaderWijsheid[] = [
  { text: "Je hoeft geen perfecte vader te zijn. Je hoeft er alleen maar te zijn.", bron: "Winnicott" },
  { text: "Het krachtigste wat je kunt doen als je kind huilt? Niks zeggen. Er zijn." },
  { text: "Kinderen onthouden niet wat je zei. Ze onthouden hoe je ze liet voelen.", bron: "Maya Angelou" },
  { text: "Elke dag is een nieuwe kans om de vader te zijn die je had willen hebben." },
  { text: "Je kind test je niet om je gek te maken. Ze checken of jij stevig genoeg staat." },
  { text: "Schreeuwen is een signaal dat jij even pauze nodig hebt — niet je kind." },
  { text: "Vijf minuten volledige aandacht doet meer dan een hele dag halve aanwezigheid." },
  { text: "De beste opvoedtip? Rustig ademen voordat je reageert." },
  { text: "Je kind leert niet van je woorden. Het leert van je voorbeeld." },
  { text: "Een echte sorry is krachtiger dan nooit fouten maken." },
  { text: "Grenzen stellen is geen straf. Het is je kind vertellen: ik hou je veilig." },
  { text: "Verliezen bij een spelletje is voor een kind hetzelfde als jij je baan verliezen. Neem het serieus." },
  { text: "De kloof tussen de vader die je wilt zijn en de vader die je bent heet groei." },
  { text: "Je hebt geen uren nodig. Je hebt momenten nodig." },
  { text: "Co-regulatie: jouw rust is het medicijn voor je kind." },
  { text: "Stop met fixen. Begin met luisteren." },
  { text: "Het gaat niet over de gemorste melk. Het gaat over wat er in jou leeft." },
  { text: "Spelen met je kind is niet kinderachtig. Het is de taal van verbinding." },
  { text: "Je telefoon neerleggen is de makkelijkste manier om een betere vader te zijn." },
  { text: "Na de storm is het beste moment om te praten. Niet tijdens." },
  { text: "Als je vader dit niet deed, hoef jij het niet te herhalen. Je kunt anders kiezen." },
  { text: "Emoties benoemen kalmeert het brein. Drie woorden: 'Je bent boos.'", bron: "Gottman" },
  { text: "Consistentie gaat niet over nooit buigen. Het gaat over systemen die jouw vermoeidheid overleven." },
  { text: "Laat je kind falen. Falen is de grondstof van zelfvertrouwen." },
  { text: "Straf leert angst. Consequenties leren verantwoordelijkheid." },
  { text: "Het feit dat je deze app opent zegt meer over jou als vader dan je denkt." },
  { text: "Je kind kan meer dan je denkt. Geef ze de ruimte om het te bewijzen." },
  { text: "Kwetsbaarheid is geen zwakte. Het is de snelste weg naar verbinding.", bron: "Brené Brown" },
  { text: "Elke interactie is een storting of opname op de emotionele bankrekening.", bron: "Gottman" },
  { text: "De ochtend na een slechte avond is een kans. Niet een straf." },
  { text: "Je kind herinnert zich over 20 jaar niet je adviezen. Wel je aanwezigheid." },
  { text: "Luisteren zonder oplossing bieden is de moeilijkste en waardevolste vaardigheid." },
  { text: "Je bent niet te moe om een goede vader te zijn. Je bent te moe om perfect te zijn. Dat is oké." },
  { text: "Als je kind 'papa doe het' zegt: wacht. Laat ze het zelf proberen." },
  { text: "Een ritueel van vijf minuten per dag bouwt een leven aan herinneringen." },
  { text: "Fouten maken is menselijk. Herstellen is vaderschap." },
  { text: "Mindfulness is niet mediteren. Het is dit moment opmerken met je kind." },
  { text: "Je hoeft niet alles te weten. Je hoeft er alleen maar te zijn." },
  { text: "De stem van je vader klinkt door totdat je bewust kiest welk deel je bewaart." },
  { text: "Twee woorden die alles veranderen: 'Ik snap het.'" },
  { text: "Je kind wil geen superheld. Het wil een vader die echt is." },
  { text: "Wacht tien seconden. Die tien seconden zijn het verschil tussen reageren en kiezen." },
  { text: "Je bent hier. Je leert. Je groeit. Je kind heeft geluk met jou." },
  { text: "Het denkbrein van je kind is pas af rond hun 25e. Geduld is geen luxe — het is biologie.", bron: "Siegel" },
  { text: "Valideren is niet goedkeuren. 'Ik snap dat je boos bent' betekent niet 'je hebt gelijk'." },
  { text: "De kracht van een vader zit niet in zijn spierballen. Het zit in zijn geduld." },
  { text: "Vandaag is een nieuwe dag om het anders te doen." },
  { text: "Je kind imiteert niet wat je zegt. Het imiteert wie je bent." },
  { text: "Ademhalen. Daar begint alles mee." },
  { text: "Opvoeden is geen sprint. Het is een ultramarathon. Doseer je energie." },
];

/**
 * Geeft de wijsheid van de dag terug, gebaseerd op de datum.
 * Rouleert door alle wijsheden en begint dan opnieuw.
 */
export function getWijsheidVanDeDag(dateStr: string): VaderWijsheid {
  // Simple deterministic seed from date string
  let seed = 0;
  for (let i = 0; i < dateStr.length; i++) {
    seed = ((seed << 5) - seed) + dateStr.charCodeAt(i);
    seed |= 0;
  }
  const index = Math.abs(seed) % VADER_WIJSHEDEN.length;
  return VADER_WIJSHEDEN[index];
}
