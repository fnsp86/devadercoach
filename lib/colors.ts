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
    bg: '#FAF8F5',
    surface: '#FFFEFA',
    surface2: '#F3F0EB',
    border: '#DDD8CF',
    border2: '#CEC8BD',
    text: '#1A1612',
    text2: '#5C5347',
    text3: '#7D7568',
    amber: '#E67E22',
    amberLight: '#F39C12',
    amberDim: 'rgba(230,126,34,0.12)',
    amberGlow: 'rgba(230,126,34,0.18)',
    blue: '#4338CA',
    blueDim: 'rgba(67,56,202,0.10)',
    red: '#DC2626',
    redDim: 'rgba(220,38,38,0.10)',
    green: '#15803D',
    greenDim: 'rgba(21,128,61,0.10)',
    yellow: '#D4940A',
    yellowDim: 'rgba(212,148,10,0.12)',
    purple: '#6D28D9',
    purpleDim: 'rgba(109,40,217,0.10)',
    orange: '#E8590C',
    orangeDim: 'rgba(232,89,12,0.12)',
    success: '#15803D',
    successDim: 'rgba(21,128,61,0.10)',
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
  Verbinding: '#667eea',
  Reflectie: '#C084FC',
};
