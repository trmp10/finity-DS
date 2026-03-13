/**
 * Finity Design System - Typography Tokens
 * Based on Figma: https://www.figma.com/design/uzteUi8uwL5ZpnHekxhlKd/Finity-Design
 *
 * Font Family: PP Neue Montreal
 */

export const typography = {
  fontFamily: {
    primary: '"PP Neue Montreal", system-ui, -apple-system, sans-serif',
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
  },

  // Headings
  heading: {
    xl: {
      fontSize: '2rem', // 32px
      lineHeight: '2.5rem', // 40px
      letterSpacing: '0.0125rem', // 0.2px
      fontWeight: 600,
    },
    lg: {
      fontSize: '1.5rem', // 24px
      lineHeight: '2rem', // 32px
      letterSpacing: '0.0125rem', // 0.2px
      fontWeight: 600,
    },
    md: {
      fontSize: '1.25rem', // 20px
      lineHeight: '1.75rem', // 28px
      letterSpacing: '0.0125rem', // 0.2px
      fontWeight: 600,
    },
    sm: {
      fontSize: '1.125rem', // 18px
      lineHeight: '1.5625rem', // 25px
      letterSpacing: '0.0125rem', // 0.2px
      fontWeight: 600,
    },
  },

  // Body
  body: {
    semibold: {
      fontSize: '1rem', // 16px
      lineHeight: '1.375rem', // 22px
      letterSpacing: '0.022rem', // 0.35px
      fontWeight: 600,
    },
    medium: {
      fontSize: '1rem', // 16px
      lineHeight: '1.375rem', // 22px
      letterSpacing: '0.022rem', // 0.35px
      fontWeight: 500,
    },
    regular: {
      fontSize: '1rem', // 16px
      lineHeight: '1.375rem', // 22px
      letterSpacing: '0.022rem', // 0.35px
      fontWeight: 400,
    },
  },

  // Compact
  compact: {
    semibold: {
      fontSize: '0.875rem', // 14px
      lineHeight: '1.25rem', // 20px
      letterSpacing: '0.01875rem', // 0.3px
      fontWeight: 600,
    },
    medium: {
      fontSize: '0.875rem', // 14px
      lineHeight: '1.25rem', // 20px
      letterSpacing: '0.01875rem', // 0.3px
      fontWeight: 500,
    },
  },

  // Small
  small: {
    semibold: {
      fontSize: '0.75rem', // 12px
      lineHeight: '1rem', // 16px
      letterSpacing: '0.01875rem', // 0.3px
      fontWeight: 600,
    },
  },
} as const;

// CSS Variable names for reference
export const cssVariables = {
  fontFamily: {
    primary: '--font-family-primary',
  },
  fontWeight: {
    regular: '--font-weight-regular',
    medium: '--font-weight-medium',
    semibold: '--font-weight-semibold',
  },
  fontSize: {
    headingXl: '--font-size-heading-xl',
    headingLg: '--font-size-heading-lg',
    headingMd: '--font-size-heading-md',
    headingSm: '--font-size-heading-sm',
    body: '--font-size-body',
    compact: '--font-size-compact',
    small: '--font-size-small',
  },
  lineHeight: {
    headingXl: '--line-height-heading-xl',
    headingLg: '--line-height-heading-lg',
    headingMd: '--line-height-heading-md',
    headingSm: '--line-height-heading-sm',
    body: '--line-height-body',
    compact: '--line-height-compact',
    small: '--line-height-small',
  },
  letterSpacing: {
    tight: '--letter-spacing-tight',
    normal: '--letter-spacing-normal',
    wide: '--letter-spacing-wide',
  },
} as const;

// Utility class names
export const textStyles = {
  headingXl: 'text-heading-xl',
  headingLg: 'text-heading-lg',
  headingMd: 'text-heading-md',
  headingSm: 'text-heading-sm',
  bodySemibold: 'text-body-semibold',
  bodyMedium: 'text-body-medium',
  bodyRegular: 'text-body-regular',
  compactSemibold: 'text-compact-semibold',
  compactMedium: 'text-compact-medium',
  smallSemibold: 'text-small-semibold',
} as const;

export type TextStyle = keyof typeof textStyles;
