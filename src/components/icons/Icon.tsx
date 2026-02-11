import { type SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const defaultIconProps: IconProps = {
  size: 24,
  color: 'currentColor',
};

export function createIcon(
  path: React.ReactNode,
  displayName: string
) {
  const Icon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
    ...props
  }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {path}
    </svg>
  );

  Icon.displayName = displayName;
  return Icon;
}
