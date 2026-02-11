import { HeadingLG } from '@/components/typography';

const colorScales = {
  grey: {
    label: 'Grey / Neutral',
    colors: [
      { shade: '50', value: '#FAFAFA' },
      { shade: '100', value: '#F5F5F5' },
      { shade: '200', value: '#E5E5E5' },
      { shade: '300', value: '#D4D4D4' },
      { shade: '400', value: '#A3A3A3' },
      { shade: '500', value: '#737373' },
      { shade: '600', value: '#525252' },
      { shade: '700', value: '#404040' },
      { shade: '800', value: '#262626' },
      { shade: '900', value: '#171717' },
    ],
  },
  coral: {
    label: 'Coral',
    accent: { name: 'Finity Coral', value: '#FF885D' },
    colors: [
      { shade: '50', value: '#FFF4ED' },
      { shade: '100', value: '#FEE6D6' },
      { shade: '200', value: '#FCC8AC' },
      { shade: '300', value: '#FAA277' },
      { shade: '400', value: '#F77445' },
      { shade: '500', value: '#F44C1B' },
      { shade: '600', value: '#E53311' },
      { shade: '700', value: '#BE2310' },
      { shade: '800', value: '#971D15' },
      { shade: '900', value: '#7A1B14' },
    ],
  },
  teal: {
    label: 'Teal',
    accent: { name: 'Finity Teal', value: '#8FBDBE' },
    colors: [
      { shade: '50', value: '#F4F9F9' },
      { shade: '100', value: '#D9EEEC' },
      { shade: '200', value: '#B3DCDA' },
      { shade: '300', value: '#85C3C2' },
      { shade: '400', value: '#5AA3A4' },
      { shade: '500', value: '#42888A' },
      { shade: '600', value: '#336B6E' },
      { shade: '700', value: '#2C5659' },
      { shade: '800', value: '#274548' },
      { shade: '900', value: '#102023' },
    ],
  },
  red: {
    label: 'Red / Error',
    colors: [
      { shade: '50', value: '#FEF2F2' },
      { shade: '100', value: '#FEE2E2' },
      { shade: '200', value: '#FECACA' },
      { shade: '300', value: '#FCA5A5' },
      { shade: '400', value: '#F87171' },
      { shade: '500', value: '#EF4444' },
      { shade: '600', value: '#DC2626' },
      { shade: '700', value: '#B91C1C' },
      { shade: '800', value: '#991B1B' },
      { shade: '900', value: '#7F1D1D' },
    ],
  },
  yellow: {
    label: 'Yellow / Warning',
    colors: [
      { shade: '50', value: '#FEFCE8' },
      { shade: '100', value: '#FEF9C3' },
      { shade: '200', value: '#FEF08A' },
      { shade: '300', value: '#FDE047' },
      { shade: '400', value: '#FACC15' },
      { shade: '500', value: '#EAB308' },
      { shade: '600', value: '#CA8A04' },
      { shade: '700', value: '#A16207' },
      { shade: '800', value: '#854D0E' },
      { shade: '900', value: '#713F12' },
    ],
  },
  green: {
    label: 'Green / Success',
    colors: [
      { shade: '50', value: '#F0FDF4' },
      { shade: '100', value: '#DCFCE7' },
      { shade: '200', value: '#BBF7D0' },
      { shade: '300', value: '#86EFAC' },
      { shade: '400', value: '#4ADE80' },
      { shade: '500', value: '#22C55E' },
      { shade: '600', value: '#16A34A' },
      { shade: '700', value: '#15803D' },
      { shade: '800', value: '#166534' },
      { shade: '900', value: '#14532D' },
    ],
  },
};

function isDark(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}

export default function ColorsPage() {
  return (
    <main className="min-h-screen p-8 md:p-16 max-w-6xl mx-auto">
      {/* Navigation */}
      <nav className="mb-8 flex gap-4 flex-wrap">
        <a href="/" className="text-compact-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-default)] pb-1">
          Typography
        </a>
        <a href="/colors" className="text-compact-semibold text-[var(--color-coral-500)] border-b-2 border-[var(--color-coral-500)] pb-1">
          Colours
        </a>
        <a href="/spacing" className="text-compact-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-default)] pb-1">
          Spacing
        </a>
        <a href="/icons" className="text-compact-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-default)] pb-1">
          Icons
        </a>
        <a href="/components/button" className="text-compact-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-default)] pb-1">
          Button
        </a>
      </nav>

      {/* Header */}
      <header className="mb-16">
        <p className="text-compact-medium text-[var(--color-text-tertiary)] mb-2">
          Foundation
        </p>
        <h1 className="text-[3rem] font-semibold leading-tight mb-4">
          Colours
        </h1>
        <p className="text-[1.5rem] font-medium text-[var(--color-text-secondary)] leading-relaxed">
          Bringing the result of headline stories and groups, we use a defined color palette
          throughout our interfaces.
        </p>
      </header>

      {/* Base Colors */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Primary colours</HeadingLG>
        <p className="text-body-medium text-[var(--color-text-secondary)] mb-8">
          These are the main colours within the style guide that make up the majority of the UI designs.
        </p>
        <div className="border-t-4 border-[var(--foreground)] pt-8">
          <h3 className="text-heading-sm mb-4">Base colour</h3>
          <div className="flex gap-6 mb-8">
            <div className="flex flex-col">
              <div
                className="rounded-lg border border-[var(--color-border-subtle)]"
                style={{ backgroundColor: '#000000', width: '96px', height: '64px' }}
              />
              <span className="text-compact-medium mt-2">Black</span>
              <span className="text-small-semibold text-[var(--color-text-tertiary)]">#000000</span>
            </div>
            <div className="flex flex-col">
              <div
                className="rounded-lg border border-[var(--color-border-subtle)]"
                style={{ backgroundColor: '#FFFFFF', width: '96px', height: '64px' }}
              />
              <span className="text-compact-medium mt-2">White</span>
              <span className="text-small-semibold text-[var(--color-text-tertiary)]">#FFFFFF</span>
            </div>
          </div>

          <h3 className="text-heading-sm mb-4">Neutral</h3>
          <p className="text-body-medium text-[var(--color-text-secondary)] mb-4">
            Greys are neutral colours and make up the backgrounds, text, dividers, and other elements.
          </p>
          <ColorScale name="grey" scale={colorScales.grey} />
        </div>
      </section>

      {/* Accent Colors */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Accent colours</HeadingLG>
        <p className="text-body-medium text-[var(--color-text-secondary)] mb-8">
          Accent colours are used to complement the primary colours within the UI, primarily for buttons, links, and accenting surfaces.
        </p>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-12">
          <ColorScale name="coral" scale={colorScales.coral} />
          <ColorScale name="teal" scale={colorScales.teal} />
        </div>
      </section>

      {/* Semantic Colors */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Semantic colours</HeadingLG>
        <p className="text-body-medium text-[var(--color-text-secondary)] mb-8">
          Semantic colours can be used to communicate various statuses across the UI.
        </p>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-12">
          <div>
            <h3 className="text-heading-sm mb-2">Red / Error</h3>
            <p className="text-compact-medium text-[var(--color-text-secondary)] mb-4">
              Red represents an error state and is used for destructive, invalid, or negative scenarios.
            </p>
            <ColorScale name="red" scale={colorScales.red} />
          </div>
          <div>
            <h3 className="text-heading-sm mb-2">Yellow / Warning</h3>
            <p className="text-compact-medium text-[var(--color-text-secondary)] mb-4">
              Yellow is used to represent situations that are potentially destructive or that need attention.
            </p>
            <ColorScale name="yellow" scale={colorScales.yellow} />
          </div>
          <div>
            <h3 className="text-heading-sm mb-2">Green / Success</h3>
            <p className="text-compact-medium text-[var(--color-text-secondary)] mb-4">
              Applies when there is a positive action, current state, or successful confirmation.
            </p>
            <ColorScale name="green" scale={colorScales.green} />
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Usage</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-6">
          <div className="p-6 bg-[var(--color-bg-muted)] rounded-lg">
            <code className="text-compact-medium block mb-4">
              {`// Using CSS variables`}
            </code>
            <pre className="text-compact-medium text-[var(--color-text-secondary)] overflow-x-auto">
{`/* Direct color values */
background-color: var(--color-coral-500);
color: var(--color-grey-900);
border-color: var(--color-border-subtle);

/* Semantic aliases */
background-color: var(--color-bg-subtle);
color: var(--color-text-secondary);
border-color: var(--color-error);`}
            </pre>
          </div>

          <div className="p-6 bg-[var(--color-bg-muted)] rounded-lg">
            <code className="text-compact-medium block mb-4">
              {`// Using Tailwind classes`}
            </code>
            <pre className="text-compact-medium text-[var(--color-text-secondary)] overflow-x-auto">
{`<div className="bg-coral-500 text-grey-50">
  Coral button
</div>

<span className="text-teal-600">
  Teal link
</span>

<div className="border border-red-500 bg-red-50">
  Error message
</div>`}
            </pre>
          </div>
        </div>
      </section>

    </main>
  );
}

function ColorScale({
  name,
  scale
}: {
  name: string;
  scale: {
    label: string;
    accent?: { name: string; value: string };
    colors: { shade: string; value: string }[]
  }
}) {
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {scale.colors.map((color) => (
          <div key={color.shade} className="flex flex-col items-center">
            <div
              className="rounded-lg border border-[var(--color-border-subtle)] flex items-end justify-center pb-2"
              style={{
                backgroundColor: color.value,
                width: '72px',
                height: '72px',
              }}
            >
              <span
                className="text-xs font-medium"
                style={{ color: isDark(color.value) ? '#fff' : '#171717' }}
              >
                {color.shade}
              </span>
            </div>
            <span className="text-[11px] text-[var(--color-text-tertiary)] mt-1.5">
              {color.value}
            </span>
          </div>
        ))}
      </div>
      {scale.accent && (
        <div className="mt-6 flex items-center gap-4">
          <div
            className="rounded-lg border border-[var(--color-border-subtle)]"
            style={{
              backgroundColor: scale.accent.value,
              width: '72px',
              height: '72px',
            }}
          />
          <div>
            <span className="text-compact-semibold block">{scale.accent.name}</span>
            <span className="text-small-semibold text-[var(--color-text-tertiary)]">
              {scale.accent.value}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
