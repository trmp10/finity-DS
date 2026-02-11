import { createIcon } from './Icon';

// Arrow icons
export const ArrowUp = createIcon(
  <path d="M12 19V5M5 12l7-7 7 7" />,
  'ArrowUp'
);

export const ArrowDown = createIcon(
  <path d="M12 5v14M5 12l7 7 7-7" />,
  'ArrowDown'
);

export const ArrowLeft = createIcon(
  <path d="M19 12H5M12 5l-7 7 7 7" />,
  'ArrowLeft'
);

export const ArrowRight = createIcon(
  <path d="M5 12h14M12 5l7 7-7 7" />,
  'ArrowRight'
);

export const ArrowUpRight = createIcon(
  <path d="M7 17L17 7M7 7h10v10" />,
  'ArrowUpRight'
);

// Chevron icons
export const ChevronUp = createIcon(
  <path d="M18 15l-6-6-6 6" />,
  'ChevronUp'
);

export const ChevronDown = createIcon(
  <path d="M6 9l6 6 6-6" />,
  'ChevronDown'
);

export const ChevronLeft = createIcon(
  <path d="M15 18l-6-6 6-6" />,
  'ChevronLeft'
);

export const ChevronRight = createIcon(
  <path d="M9 18l6-6-6-6" />,
  'ChevronRight'
);

// Caret icons (filled triangles)
export const CaretUp = createIcon(
  <path d="M12 8l-6 6h12l-6-6z" fill="currentColor" stroke="none" />,
  'CaretUp'
);

export const CaretDown = createIcon(
  <path d="M12 16l-6-6h12l-6 6z" fill="currentColor" stroke="none" />,
  'CaretDown'
);

export const CaretLeft = createIcon(
  <path d="M8 12l6-6v12l-6-6z" fill="currentColor" stroke="none" />,
  'CaretLeft'
);

export const CaretRight = createIcon(
  <path d="M16 12l-6-6v12l6-6z" fill="currentColor" stroke="none" />,
  'CaretRight'
);
