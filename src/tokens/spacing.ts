/**
 * Finity Design System - Spacing Tokens
 * Based on Figma: https://www.figma.com/design/uzteUi8uwL5ZpnHekxhlKd/Finity-Design
 */

export const spacing = {
  0: '0px',
  2: '2px',      // 0.125rem
  4: '4px',      // 0.25rem
  8: '8px',      // 0.5rem
  12: '12px',    // 0.75rem
  16: '16px',    // 1rem
  20: '20px',    // 1.25rem
  24: '24px',    // 1.5rem
  32: '32px',    // 2rem
  40: '40px',    // 2.5rem
  48: '48px',    // 3rem
  56: '56px',    // 3.5rem
  64: '64px',    // 4rem
  80: '80px',    // 5rem
  96: '96px',    // 6rem
  128: '128px',  // 8rem
  160: '160px',  // 10rem
  208: '208px',  // 13rem
} as const;

// Spacing in rem units
export const spacingRem = {
  0: '0',
  2: '0.125rem',
  4: '0.25rem',
  8: '0.5rem',
  12: '0.75rem',
  16: '1rem',
  20: '1.25rem',
  24: '1.5rem',
  32: '2rem',
  40: '2.5rem',
  48: '3rem',
  56: '3.5rem',
  64: '4rem',
  80: '5rem',
  96: '6rem',
  128: '8rem',
  160: '10rem',
  208: '13rem',
} as const;

// CSS Variable names for reference
export const cssSpacingVariables = {
  0: '--spacing-0',
  2: '--spacing-2',
  4: '--spacing-4',
  8: '--spacing-8',
  12: '--spacing-12',
  16: '--spacing-16',
  20: '--spacing-20',
  24: '--spacing-24',
  32: '--spacing-32',
  40: '--spacing-40',
  48: '--spacing-48',
  56: '--spacing-56',
  64: '--spacing-64',
  80: '--spacing-80',
  96: '--spacing-96',
  128: '--spacing-128',
  160: '--spacing-160',
  208: '--spacing-208',
} as const;

export type SpacingKey = keyof typeof spacing;
