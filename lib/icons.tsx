import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Eye, Heart, Waves, Shield, Sprout, RefreshCw, Handshake, Brain,
  CalendarDays, BookOpen, Swords, Lightbulb, Trophy, User,
  Clock, AlertTriangle, MessageCircle, Check, CheckCircle, XCircle,
  Star, FileText, GraduationCap, Construction, Zap, ThumbsUp, ThumbsDown,
  BarChart3, Play, MapPin, Target, Lock, Flame, ArrowLeft, ArrowRight,
  ChevronUp, ChevronDown, ChevronRight, Info, Search, Compass, Sun, Crown,
  EllipsisVertical,
  BookMarked, X, ShoppingCart, BedDouble, UtensilsCrossed, Baby,
  Shirt, Smartphone, Gamepad2, TreePine, Dog, Car, Moon, Users,
  Volume2, Ban, Hand, Bike, Footprints, Snowflake, Mail, PenLine, Trash2, Gift, Copy, type LucideIcon,
} from 'lucide-react-native';

// ─── Icon Registry ──────────────────────────────────────────────
export const ICON_MAP: Record<string, LucideIcon> = {
  // Skills
  eye: Eye,
  heart: Heart,
  waves: Waves,
  shield: Shield,
  sprout: Sprout,
  refreshCw: RefreshCw,
  handshake: Handshake,
  brain: Brain,

  // Navigation
  calendarDays: CalendarDays,
  bookOpen: BookOpen,
  swords: Swords,
  lightbulb: Lightbulb,
  trophy: Trophy,
  user: User,

  // UI Elements
  clock: Clock,
  alertTriangle: AlertTriangle,
  messageCircle: MessageCircle,
  check: Check,
  checkCircle: CheckCircle,
  xCircle: XCircle,
  star: Star,
  fileText: FileText,
  graduationCap: GraduationCap,
  construction: Construction,
  zap: Zap,
  thumbsUp: ThumbsUp,
  thumbsDown: ThumbsDown,
  barChart3: BarChart3,
  play: Play,
  mapPin: MapPin,
  target: Target,
  lock: Lock,
  flame: Flame,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  moreVertical: EllipsisVertical,
  info: Info,
  search: Search,
  compass: Compass,
  sun: Sun,
  crown: Crown,
  bookMarked: BookMarked,
  x: X,

  // Help situations
  shoppingCart: ShoppingCart,
  bedDouble: BedDouble,
  utensilsCrossed: UtensilsCrossed,
  baby: Baby,
  shirt: Shirt,
  smartphone: Smartphone,
  gamepad2: Gamepad2,
  treePine: TreePine,
  dog: Dog,
  car: Car,
  moon: Moon,
  users: Users,
  volume2: Volume2,
  ban: Ban,
  hand: Hand,
  bike: Bike,
  footprints: Footprints,
  snowflake: Snowflake,
  mail: Mail,
  penLine: PenLine,
  trash: Trash2,
  gift: Gift,
  copy: Copy,
};

export type IconName = keyof typeof ICON_MAP;

// ─── Sizes ──────────────────────────────────────────────────────
const SIZES = {
  xs: { icon: 14, container: 26, borderRadius: 8 },
  sm: { icon: 18, container: 34, borderRadius: 10 },
  md: { icon: 22, container: 42, borderRadius: 12 },
  lg: { icon: 28, container: 52, borderRadius: 14 },
} as const;

export type IconSize = keyof typeof SIZES;

// ─── Props ──────────────────────────────────────────────────────
interface AppIconProps {
  /** Icon name from the registry */
  name: IconName;
  /** Size preset */
  size?: IconSize;
  /** 'compact' = icon only, 'featured' = icon + background circle */
  variant?: 'compact' | 'featured';
  /** Icon color - overrides default */
  color?: string;
  /** Background color for 'featured' variant */
  bgColor?: string;
  /** Glow border color (for dark mode accent) */
  glowColor?: string;
  /** Whether to show the active/focused glow */
  active?: boolean;
  /** Custom icon size override (pixels) */
  iconSize?: number;
}

// ─── Component ──────────────────────────────────────────────────
export function AppIcon({
  name,
  size = 'md',
  variant = 'compact',
  color = '#9BA3B8',
  bgColor,
  glowColor,
  active = false,
  iconSize: customIconSize,
}: AppIconProps) {
  const IconComponent = ICON_MAP[name];
  if (!IconComponent) return null;

  const s = SIZES[size];
  const finalIconSize = customIconSize ?? s.icon;

  if (variant === 'compact') {
    return (
      <IconComponent
        size={finalIconSize}
        color={color}
        strokeWidth={1.5}
      />
    );
  }

  // Featured variant: icon inside a styled container
  const bg = bgColor ?? 'rgba(155,163,184,0.1)';
  const showGlow = active && glowColor;

  return (
    <View
      style={[
        styles.container,
        {
          width: s.container,
          height: s.container,
          borderRadius: s.container / 2,
          backgroundColor: bg,
        },
        showGlow && {
          borderWidth: 1,
          borderColor: glowColor + '30',
          shadowColor: glowColor,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.25,
          shadowRadius: 8,
          elevation: 4,
        },
      ]}
    >
      <IconComponent
        size={finalIconSize}
        color={color}
        strokeWidth={1.5}
      />
    </View>
  );
}

// ─── Inline helper for replacing emoji in Text ──────────────────
// Use this for small inline icons within text (like ✓ or ⏱)
interface InlineIconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export function InlineIcon({ name, size = 16, color = '#9BA3B8' }: InlineIconProps) {
  const IconComponent = ICON_MAP[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} color={color} strokeWidth={1.5} />;
}

// ─── Skill icon helper ──────────────────────────────────────────
const SKILL_ICONS: Record<string, IconName> = {
  Aanwezigheid: 'eye',
  Emotiecoaching: 'heart',
  Zelfregulatie: 'waves',
  Grenzen: 'shield',
  Autonomie: 'sprout',
  Herstel: 'refreshCw',
  Verbinding: 'handshake',
  Reflectie: 'brain',
};

export function getSkillIcon(skill: string): IconName {
  return SKILL_ICONS[skill] ?? 'star';
}

// ─── Emoji → Icon mapping (for data fields that still use emoji) ─
const EMOJI_TO_ICON: Record<string, IconName> = {
  '🛒': 'shoppingCart', '🛏️': 'bedDouble', '🍽️': 'utensilsCrossed',
  '👶': 'baby', '👕': 'shirt', '🧸': 'heart', '😠': 'alertTriangle',
  '😱': 'alertTriangle', '👤': 'user', '🤱': 'baby', '🚽': 'sprout',
  '💥': 'zap', '🌅': 'sun', '😢': 'heart', '✋': 'hand',
  '⚠️': 'alertTriangle', '🚫': 'ban', '🚗': 'car', '🔊': 'volume2',
  '👥': 'users', '🍕': 'utensilsCrossed', '💇': 'user', '🎪': 'star',
  '👂': 'eye', '😤': 'alertTriangle', '👫': 'users', '📱': 'smartphone',
  '📝': 'fileText', '🏆': 'trophy', '😰': 'alertTriangle', '🏫': 'graduationCap',
  '⚖️': 'shield', '🤥': 'alertTriangle', '🧹': 'refreshCw', '👊': 'zap',
  '🏃': 'footprints', '🛍️': 'shoppingCart', '🤔': 'brain', '📚': 'bookOpen',
  '🚿': 'sprout', '🎮': 'gamepad2', '😡': 'alertTriangle', '😔': 'heart',
  '👋': 'hand', '🙉': 'alertTriangle', '🍔': 'utensilsCrossed',
  '🚶': 'footprints', '🌪️': 'waves', '🌙': 'moon', '💰': 'star',
  '🪞': 'brain', '🧠': 'brain', '😴': 'moon', '🚧': 'construction',
  '🤦': 'alertTriangle', '🤐': 'messageCircle', '🌃': 'moon',
  '💔': 'heart', '🍺': 'alertTriangle', '💸': 'star', '🎓': 'graduationCap',
  '🛑': 'shield', '🔒': 'lock', '❌': 'x', '🚪': 'arrowRight',
  '🔥': 'flame', '⚡': 'zap', '💪': 'zap', '🛡️': 'shield',
  '⭐': 'star', '👑': 'crown', '🏅': 'trophy', '🎯': 'target',
  '✅': 'checkCircle', '⚔️': 'swords', '🦉': 'moon', '🐦': 'sun',
  '💯': 'star', '🔄': 'refreshCw', '🦸': 'star', '🚀': 'sprout',
  '🌟': 'star', '💎': 'star', '💫': 'star', '❤️': 'heart',
  '🦅': 'sprout', '🤝': 'handshake', '👣': 'footprints',
  '📖': 'bookOpen', '📅': 'calendarDays', '🧭': 'compass',
  '🔱': 'zap', '🔐': 'lock', '🥪': 'utensilsCrossed',
  '🏊': 'waves', '🧘': 'waves', '📋': 'fileText',
  '🔧': 'refreshCw', '🔗': 'handshake', '👁️': 'eye',
  '📭': 'fileText', '🏗️': 'construction', '🎉': 'star',
  'ℹ️': 'info', '🏟️': 'swords', '🔍': 'search',
  '📊': 'barChart3', '💡': 'lightbulb', '💬': 'messageCircle',
};

export function emojiToIcon(emoji: string): IconName {
  return EMOJI_TO_ICON[emoji] ?? 'star';
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
