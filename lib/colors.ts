export const colors = {
  dark: {
    bg: '#111318',
    surface: '#1A1F2B',
    surface2: '#222838',
    border: '#2A3040',
    border2: '#363D50',
    text: '#F0F2F8',
    text2: '#9BA3B8',
    text3: '#5C6478',
    amber: '#F59E0B',
    amberLight: '#FCD34D',
    amberDim: 'rgba(245,158,11,0.13)',
    amberGlow: 'rgba(245,158,11,0.25)',
    blue: '#667eea',
    blueDim: 'rgba(102,126,234,0.13)',
    red: '#EF4444',
    redDim: 'rgba(239,68,68,0.13)',
    green: '#34D399',
    greenDim: 'rgba(52,211,153,0.13)',
    yellow: '#FBBF24',
    yellowDim: 'rgba(251,191,36,0.13)',
    purple: '#A78BFA',
    purpleDim: 'rgba(167,139,250,0.13)',
    orange: '#FB923C',
    orangeDim: 'rgba(251,146,60,0.13)',
    success: '#22C55E',
    successDim: 'rgba(34,197,94,0.13)',
  },
  light: {
    bg: '#F8F9FB',
    surface: '#FFFFFF',
    surface2: '#F0F1F4',
    border: '#E5E7EB',
    border2: '#D1D5DB',
    text: '#1A1F2B',
    text2: '#6B7280',
    text3: '#9CA3AF',
    amber: '#D97706',
    amberLight: '#F59E0B',
    amberDim: 'rgba(217,119,6,0.1)',
    amberGlow: 'rgba(217,119,6,0.15)',
    blue: '#4F6ADB',
    blueDim: 'rgba(79,106,219,0.1)',
    red: '#DC2626',
    redDim: 'rgba(220,38,38,0.1)',
    green: '#16A34A',
    greenDim: 'rgba(22,163,74,0.1)',
    yellow: '#CA8A04',
    yellowDim: 'rgba(202,138,4,0.1)',
    purple: '#7C3AED',
    purpleDim: 'rgba(124,58,237,0.1)',
    orange: '#EA580C',
    orangeDim: 'rgba(234,88,12,0.1)',
    success: '#16A34A',
    successDim: 'rgba(22,163,74,0.1)',
  },
};

// Premium rarity kleuren (voor badges)
export const rarityColors = {
  common:    '#8B95A6',   // subtiel blauw-grijs
  rare:      '#4A90D9',   // helder blauw
  epic:      '#9B59B6',   // rijk paars
  legendary: '#E8A020',   // warm goud
};

// Skill colors mapping (theme key references)
export const skillColors: Record<string, { main: string; dim: string }> = {
  Aanwezigheid: { main: 'blue', dim: 'blueDim' },
  Emotiecoaching: { main: 'red', dim: 'redDim' },
  Zelfregulatie: { main: 'green', dim: 'greenDim' },
  Grenzen: { main: 'yellow', dim: 'yellowDim' },
  Autonomie: { main: 'purple', dim: 'purpleDim' },
  Herstel: { main: 'orange', dim: 'orangeDim' },
  Verbinding: { main: 'blue', dim: 'blueDim' },
  Reflectie: { main: 'purple', dim: 'purpleDim' },
};

// Direct hex skill colors (for use outside theme context)
export const SKILL_COLORS: Record<string, string> = {
  Aanwezigheid: '#667eea',
  Emotiecoaching: '#EF4444',
  Zelfregulatie: '#34D399',
  Grenzen: '#FBBF24',
  Autonomie: '#A78BFA',
  Herstel: '#FB923C',
  Verbinding: '#60A5FA',
  Reflectie: '#C084FC',
};
