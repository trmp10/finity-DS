import { type ReactNode, type ElementType } from 'react';
import { textStyles, type TextStyle } from '@/tokens/typography';

type TextVariant = TextStyle;

interface TextProps {
  variant: TextVariant;
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

const defaultElements: Record<TextVariant, ElementType> = {
  headingXl: 'h1',
  headingLg: 'h2',
  headingMd: 'h3',
  headingSm: 'h4',
  bodySemibold: 'p',
  bodyMedium: 'p',
  bodyRegular: 'p',
  compactSemibold: 'span',
  compactMedium: 'span',
  smallSemibold: 'span',
};

export function Text({ variant, as, children, className = '' }: TextProps) {
  const Component = as || defaultElements[variant];
  const baseClass = textStyles[variant];

  return (
    <Component className={`${baseClass} ${className}`.trim()}>
      {children}
    </Component>
  );
}

// Convenience components for headings
export function HeadingXL({ children, className, as }: Omit<TextProps, 'variant'>) {
  return <Text variant="headingXl" as={as} className={className}>{children}</Text>;
}

export function HeadingLG({ children, className, as }: Omit<TextProps, 'variant'>) {
  return <Text variant="headingLg" as={as} className={className}>{children}</Text>;
}

export function HeadingMD({ children, className, as }: Omit<TextProps, 'variant'>) {
  return <Text variant="headingMd" as={as} className={className}>{children}</Text>;
}

export function HeadingSM({ children, className, as }: Omit<TextProps, 'variant'>) {
  return <Text variant="headingSm" as={as} className={className}>{children}</Text>;
}

// Convenience components for body text
export function BodySemibold({ children, className, as }: Omit<TextProps, 'variant'>) {
  return <Text variant="bodySemibold" as={as} className={className}>{children}</Text>;
}

export function BodyMedium({ children, className, as }: Omit<TextProps, 'variant'>) {
  return <Text variant="bodyMedium" as={as} className={className}>{children}</Text>;
}

export function Body({ children, className, as }: Omit<TextProps, 'variant'>) {
  return <Text variant="bodyRegular" as={as} className={className}>{children}</Text>;
}

// Convenience components for compact text
export function CompactSemibold({ children, className, as }: Omit<TextProps, 'variant'>) {
  return <Text variant="compactSemibold" as={as} className={className}>{children}</Text>;
}

export function CompactMedium({ children, className, as }: Omit<TextProps, 'variant'>) {
  return <Text variant="compactMedium" as={as} className={className}>{children}</Text>;
}

// Convenience component for small text
export function SmallSemibold({ children, className, as }: Omit<TextProps, 'variant'>) {
  return <Text variant="smallSemibold" as={as} className={className}>{children}</Text>;
}
