import type { UserProfile, ThemeTag } from './types';

/**
 * Berekent actieve ThemeTags op basis van het gebruikersprofiel.
 * Wordt gebruikt door selectie-algoritmes om themed content te boosten.
 */
export function resolveActiveThemes(profile: UserProfile): ThemeTag[] {
  const themes = new Set<ThemeTag>();

  // Gezinssituatie
  if (profile.gezinssituatie === 'samengesteld_gezin') {
    themes.add('samengesteld_gezin');
  }
  if (profile.gezinssituatie === 'co-ouderschap') {
    themes.add('co-ouderschap');
  }

  // Kinderen
  for (const child of profile.children ?? []) {
    if (child.relatie === 'bonuskind') {
      themes.add('bonuskind');
      themes.add('samengesteld_gezin');
    }
    for (const ap of child.aandachtspunten ?? []) {
      themes.add(ap);
    }
  }

  return Array.from(themes);
}
