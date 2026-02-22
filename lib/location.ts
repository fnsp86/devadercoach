import * as Location from 'expo-location';

// ─── Permission ─────────────────────────────────────────────────

export async function requestLocationPermission(): Promise<boolean> {
  const { status } = await Location.requestForegroundPermissionsAsync();
  return status === 'granted';
}

// ─── Current location ───────────────────────────────────────────

export async function getCurrentLocation(): Promise<{ latitude: number; longitude: number } | null> {
  const granted = await requestLocationPermission();
  if (!granted) return null;

  const location = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Balanced,
  });

  return {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };
}

export async function getCurrentCity(): Promise<string | null> {
  const location = await getCurrentLocation();
  if (!location) return null;

  const [result] = await Location.reverseGeocodeAsync(location);
  return result?.city ?? result?.subregion ?? null;
}

// ─── Distance ───────────────────────────────────────────────────

export function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number {
  const R = 6371; // Earth radius in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

// ─── Dutch cities ───────────────────────────────────────────────

export const DUTCH_CITIES = [
  'Amsterdam',
  'Rotterdam',
  'Den Haag',
  'Utrecht',
  'Eindhoven',
  'Groningen',
  'Tilburg',
  'Almere',
  'Breda',
  'Nijmegen',
  'Apeldoorn',
  'Arnhem',
  'Haarlem',
  'Enschede',
  'Amersfoort',
  'Zaanstad',
  'Haarlemmermeer',
  'Den Bosch',
  'Zoetermeer',
  'Zwolle',
  'Leiden',
  'Maastricht',
  'Dordrecht',
  'Ede',
  'Leeuwarden',
  'Alphen aan den Rijn',
  'Alkmaar',
  'Emmen',
  'Delft',
  'Deventer',
  'Venlo',
  'Sittard-Geleen',
  'Helmond',
  'Oss',
  'Hilversum',
  'Heerlen',
  'Purmerend',
  'Schiedam',
  'Vlaardingen',
  'Amstelveen',
  'Leidschendam-Voorburg',
  'Gouda',
  'Roosendaal',
  'Hoorn',
  'Velsen',
  'Bergen op Zoom',
  'Capelle aan den IJssel',
  'Kampen',
  'Woerden',
  'Zeist',
] as const;

export type DutchCity = (typeof DUTCH_CITIES)[number];

// Approximate coordinates for major cities (for initial nearby search when no GPS)
export const CITY_COORDS: Record<string, { lat: number; lng: number }> = {
  Amsterdam: { lat: 52.3676, lng: 4.9041 },
  Rotterdam: { lat: 51.9244, lng: 4.4777 },
  'Den Haag': { lat: 52.0705, lng: 4.3007 },
  Utrecht: { lat: 52.0907, lng: 5.1214 },
  Eindhoven: { lat: 51.4416, lng: 5.4697 },
  Groningen: { lat: 53.2194, lng: 6.5665 },
  Tilburg: { lat: 51.5555, lng: 5.0913 },
  Almere: { lat: 52.3508, lng: 5.2647 },
  Breda: { lat: 51.5719, lng: 4.7683 },
  Nijmegen: { lat: 51.8126, lng: 5.8372 },
  Arnhem: { lat: 51.9851, lng: 5.8987 },
  Haarlem: { lat: 52.3874, lng: 4.6462 },
  Enschede: { lat: 52.2215, lng: 6.8937 },
  Amersfoort: { lat: 52.1561, lng: 5.3878 },
  'Den Bosch': { lat: 51.6978, lng: 5.3037 },
  Zwolle: { lat: 52.5168, lng: 6.0830 },
  Leiden: { lat: 52.1601, lng: 4.4970 },
  Maastricht: { lat: 50.8514, lng: 5.6910 },
  Dordrecht: { lat: 51.8133, lng: 4.6901 },
  Leeuwarden: { lat: 53.2012, lng: 5.7999 },
  Alkmaar: { lat: 52.6324, lng: 4.7534 },
  Delft: { lat: 52.0116, lng: 4.3571 },
  Deventer: { lat: 52.2554, lng: 6.1600 },
  Venlo: { lat: 51.3704, lng: 6.1724 },
  Hilversum: { lat: 52.2292, lng: 5.1669 },
  Gouda: { lat: 52.0115, lng: 4.7104 },
};
