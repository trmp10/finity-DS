/**
 * Finity Design System - Color Tokens
 * Based on Figma: https://www.figma.com/design/uzteUi8uwL5ZpnHekxhlKd/Finity-Design
 */

export const colors = {
  // Base Colors
  base: {
    black: '#000000',
    white: '#FFFFFF',
  },

  // Neutral / Grey Scale
  grey: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },

  // Accent - Coral
  coral: {
    50: '#FFF4ED',
    100: '#FEE6D6',
    200: '#FCC8AC',
    300: '#FAA277',
    400: '#F77445',
    500: '#F44C1B',
    600: '#E53311',
    700: '#BE2310',
    800: '#971D15',
    900: '#7A1B14',
    finity: '#FF885D', // Finity Coral - brand accent
  },

  // Accent - Teal
  teal: {
    50: '#F4F9F9',
    100: '#D9EEEC',
    200: '#B3DCDA',
    300: '#85C3C2',
    400: '#5AA3A4',
    500: '#42888A',
    600: '#336B6E',
    700: '#2C5659',
    800: '#274548',
    900: '#102023',
    finity: '#8FBDBE', // Finity Teal - brand accent
  },

  // Semantic - Red (Error)
  red: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },

  // Semantic - Yellow (Warning)
  yellow: {
    50: '#FEFCE8',
    100: '#FEF9C3',
    200: '#FEF08A',
    300: '#FDE047',
    400: '#FACC15',
    500: '#EAB308',
    600: '#CA8A04',
    700: '#A16207',
    800: '#854D0E',
    900: '#713F12',
  },

  // Semantic - Green (Success)
  green: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
  },
} as const;

// Semantic color aliases
export const semantic = {
  error: colors.red,
  warning: colors.yellow,
  success: colors.green,
} as const;

// Text colors
export const textColors = {
  default: colors.grey[900],    // #171717
  secondary: colors.grey[700],  // #404040
  tertiary: colors.grey[500],   // #737373
  disabled: colors.grey[400],   // #A3A3A3
  contrast: colors.base.white,  // #FFFFFF
} as const;

// Background colors
export const backgroundColors = {
  default: colors.base.white,   // #FFFFFF
  subtle: colors.grey[50],      // #FAFAFA
  muted: colors.grey[100],      // #F5F5F5
  neutral: colors.grey[200],    // #E5E5E5
  inverse: colors.base.black,   // #000000
} as const;

// Border colors
export const borderColors = {
  subtle: colors.grey[300],     // #D4D4D4
  default: colors.grey[400],    // #A3A3A3
  strong: colors.grey[500],     // #737373
} as const;

// CSS Variable names for reference
export const cssColorVariables = {
  base: {
    black: '--color-base-black',
    white: '--color-base-white',
  },
  grey: {
    50: '--color-grey-50',
    100: '--color-grey-100',
    200: '--color-grey-200',
    300: '--color-grey-300',
    400: '--color-grey-400',
    500: '--color-grey-500',
    600: '--color-grey-600',
    700: '--color-grey-700',
    800: '--color-grey-800',
    900: '--color-grey-900',
  },
  coral: {
    50: '--color-coral-50',
    100: '--color-coral-100',
    200: '--color-coral-200',
    300: '--color-coral-300',
    400: '--color-coral-400',
    500: '--color-coral-500',
    600: '--color-coral-600',
    700: '--color-coral-700',
    800: '--color-coral-800',
    900: '--color-coral-900',
    finity: '--color-coral-finity',
  },
  teal: {
    50: '--color-teal-50',
    100: '--color-teal-100',
    200: '--color-teal-200',
    300: '--color-teal-300',
    400: '--color-teal-400',
    500: '--color-teal-500',
    600: '--color-teal-600',
    700: '--color-teal-700',
    800: '--color-teal-800',
    900: '--color-teal-900',
    finity: '--color-teal-finity',
  },
  red: {
    50: '--color-red-50',
    100: '--color-red-100',
    200: '--color-red-200',
    300: '--color-red-300',
    400: '--color-red-400',
    500: '--color-red-500',
    600: '--color-red-600',
    700: '--color-red-700',
    800: '--color-red-800',
    900: '--color-red-900',
  },
  yellow: {
    50: '--color-yellow-50',
    100: '--color-yellow-100',
    200: '--color-yellow-200',
    300: '--color-yellow-300',
    400: '--color-yellow-400',
    500: '--color-yellow-500',
    600: '--color-yellow-600',
    700: '--color-yellow-700',
    800: '--color-yellow-800',
    900: '--color-yellow-900',
  },
  green: {
    50: '--color-green-50',
    100: '--color-green-100',
    200: '--color-green-200',
    300: '--color-green-300',
    400: '--color-green-400',
    500: '--color-green-500',
    600: '--color-green-600',
    700: '--color-green-700',
    800: '--color-green-800',
    900: '--color-green-900',
  },
} as const;
