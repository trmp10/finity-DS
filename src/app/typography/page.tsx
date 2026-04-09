'use client';

import { useState } from 'react';
import { Button } from '@finity/design-system';
import { Tabs } from '@/components/tabs/Tabs';

type TypeRow = {
  token: string;
  size: string;
  lineHeight: string;
  letterSpacing: string;
  weight: string;
  tailwind: string;
  usage: string;
  preview: string;
  style: React.CSSProperties;
};

const HEADINGS: TypeRow[] = [
  {
    token: 'text-heading-xl',
    size: '32px  /  2rem',
    lineHeight: '40px  /  2.5rem',
    letterSpacing: '0.2px  /  0.0125rem',
    weight: 'Semibold',
    tailwind: 'text-3xl font-semibold',
    usage: 'Reserved for higher-level hierarchy',
    preview: 'Heading Extra Large / Semibold',
    style: { fontSize: '2rem', lineHeight: '2.5rem', letterSpacing: '0.0125rem', fontWeight: 600 },
  },
  {
    token: 'text-heading-lg',
    size: '24px  /  1.5rem',
    lineHeight: '32px  /  2rem',
    letterSpacing: '0.2px  /  0.0125rem',
    weight: 'Semibold',
    tailwind: 'text-2xl font-semibold',
    usage: 'Page title / Header',
    preview: 'Heading Large / Semibold',
    style: { fontSize: '1.5rem', lineHeight: '2rem', letterSpacing: '0.0125rem', fontWeight: 600 },
  },
  {
    token: 'text-heading-md',
    size: '20px  /  1.25rem',
    lineHeight: '28px  /  1.75rem',
    letterSpacing: '0.2px  /  0.0125rem',
    weight: 'Semibold',
    tailwind: 'text-xl font-semibold',
    usage: 'Card title · Dialog and modal title · Drawer title',
    preview: 'Heading Medium / Semibold',
    style: { fontSize: '1.25rem', lineHeight: '1.75rem', letterSpacing: '0.0125rem', fontWeight: 600 },
  },
  {
    token: 'text-heading-sm',
    size: '18px  /  1.125rem',
    lineHeight: '25px  /  1.563rem',
    letterSpacing: '0.2px  /  0.0125rem',
    weight: 'Semibold',
    tailwind: 'text-lg font-semibold',
    usage: 'Panel title · Dashboard summaries · Data visualisations',
    preview: 'Heading Small / Semibold',
    style: { fontSize: '1.125rem', lineHeight: '1.5625rem', letterSpacing: '0.0125rem', fontWeight: 600 },
  },
];

const BODY: TypeRow[] = [
  {
    token: 'text-body-semibold',
    size: '16px  /  1rem',
    lineHeight: '22px  /  1.375rem',
    letterSpacing: '0.35px  /  0.0219rem',
    weight: 'Semibold',
    tailwind: 'text-base font-semibold',
    usage: 'Label',
    preview: 'Body / Semibold',
    style: { fontSize: '1rem', lineHeight: '1.375rem', letterSpacing: '0.0219rem', fontWeight: 600 },
  },
  {
    token: 'text-body-medium',
    size: '16px  /  1rem',
    lineHeight: '22px  /  1.375rem',
    letterSpacing: '0.35px  /  0.0219rem',
    weight: 'Medium',
    tailwind: 'text-base font-medium',
    usage: 'Button (Large/Medium) · Link',
    preview: 'Body / Medium',
    style: { fontSize: '1rem', lineHeight: '1.375rem', letterSpacing: '0.0219rem', fontWeight: 500 },
  },
  {
    token: 'text-body-regular',
    size: '16px  /  1rem',
    lineHeight: '22px  /  1.375rem',
    letterSpacing: '0.35px  /  0.0219rem',
    weight: 'Regular',
    tailwind: 'text-base font-regular',
    usage: 'Default font size · Paragraph · Input · Descriptive text',
    preview: 'Body / Regular',
    style: { fontSize: '1rem', lineHeight: '1.375rem', letterSpacing: '0.0219rem', fontWeight: 400 },
  },
];

const COMPACT: TypeRow[] = [
  {
    token: 'text-compact-semibold',
    size: '14px  /  0.875rem',
    lineHeight: '20px  /  1.25rem',
    letterSpacing: '0.3px  /  0.01875rem',
    weight: 'Semibold',
    tailwind: 'text-sm font-semibold',
    usage: 'Table header · Tab label (Active) · Sidebar label (Active)',
    preview: 'Compact / Semibold',
    style: { fontSize: '0.875rem', lineHeight: '1.25rem', letterSpacing: '0.01875rem', fontWeight: 600 },
  },
  {
    token: 'text-compact-medium',
    size: '14px  /  0.875rem',
    lineHeight: '20px  /  1.25rem',
    letterSpacing: '0.3px  /  0.01875rem',
    weight: 'Medium',
    tailwind: 'text-sm font-medium',
    usage: 'Table data · Tab label (Default) · Sidebar (Default) · Button text (Small) · Helper text',
    preview: 'Compact / Medium',
    style: { fontSize: '0.875rem', lineHeight: '1.25rem', letterSpacing: '0.01875rem', fontWeight: 500 },
  },
];

const SMALL: TypeRow[] = [
  {
    token: 'text-small-semibold',
    size: '12px  /  0.75rem',
    lineHeight: '16px  /  1rem',
    letterSpacing: '0.3px  /  0.01875rem',
    weight: 'Semibold',
    tailwind: 'text-xs font-semibold',
    usage: 'Sidebar category (Capitalised)',
    preview: 'Small / Semibold',
    style: { fontSize: '0.75rem', lineHeight: '1rem', letterSpacing: '0.01875rem', fontWeight: 600, textTransform: 'uppercase' },
  },
];

const ALL_ROWS = [
  { category: 'Headings', rows: HEADINGS },
  { category: 'Body', rows: BODY },
  { category: 'Compact', rows: COMPACT },
  { category: 'Small', rows: SMALL },
];

function TypeGroup({ title, rows }: { title: string; rows: TypeRow[] }) {
  return (
    <section className="mb-[56px]">
      <h2 className="text-[2.125rem] font-semibold leading-[40px] tracking-[0.29px] text-[var(--color-text-default)]">
        {title}
      </h2>
      <div className="border-t-[4px] border-[var(--color-grey-300)] mt-[8px] mb-[16px]" />
      <div>
        {rows.map((row, i) => (
          <div
            key={row.token}
            className={`flex items-start gap-[var(--spacing-80)] pt-[var(--spacing-40)] pb-[var(--spacing-40)]${i < rows.length - 1 ? ' border-b border-[var(--color-grey-300)]' : ''}`}
          >
            {/* Token + Specs grouped together with tighter gap */}
            <div className="flex items-start gap-[var(--spacing-64)] shrink-0">
              {/* Token badge */}
              <div className="w-[160px] shrink-0 pt-[2px]">
                <span className="inline-flex items-center px-[var(--spacing-8)] py-[var(--spacing-4)] rounded-md bg-[var(--color-grey-100)] text-[12px] font-mono text-[var(--color-text-secondary)] whitespace-nowrap">
                  {row.tailwind}
                </span>
              </div>

              {/* Specs */}
              <div className="flex gap-[var(--spacing-16)]">
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[14px] font-semibold leading-[25px] text-[var(--color-text-default)] whitespace-nowrap">Font size</span>
                  <span className="text-[14px] font-semibold leading-[25px] text-[var(--color-text-default)] whitespace-nowrap">Line height</span>
                  <span className="text-[14px] font-semibold leading-[25px] text-[var(--color-text-default)] whitespace-nowrap">Letter spacing</span>
                  <span className="text-[14px] font-semibold leading-[25px] text-[var(--color-text-default)] whitespace-nowrap">Weight</span>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[14px] font-medium leading-[25px] text-[var(--color-text-default)] whitespace-nowrap">{row.size}</span>
                  <span className="text-[14px] font-medium leading-[25px] text-[var(--color-text-default)] whitespace-nowrap">{row.lineHeight}</span>
                  <span className="text-[14px] font-medium leading-[25px] text-[var(--color-text-default)] whitespace-nowrap">{row.letterSpacing}</span>
                  <span className="text-[14px] font-medium leading-[25px] text-[var(--color-text-default)] whitespace-nowrap">{row.weight}</span>
                </div>
              </div>
            </div>

            {/* Preview — stays at its original position via flex-1 */}
            <div className="flex-1 text-[var(--color-text-default)]" style={row.style}>
              {row.preview}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MappingTable() {
  return (
    <div className="w-full">
      {/* Header row */}
      <div className="flex gap-[var(--spacing-48)] py-[var(--spacing-12)] px-[var(--spacing-8)] border-b border-[var(--color-grey-300)] bg-[var(--color-grey-100)]">
        <div className="w-[100px] shrink-0 text-[14px] font-semibold text-[var(--color-text-default)]">Category</div>
        <div className="w-[48px] shrink-0 text-[14px] font-semibold text-[var(--color-text-default)]">PX</div>
        <div className="w-[56px] shrink-0 text-[14px] font-semibold text-[var(--color-text-default)]">Rem</div>
        <div className="w-[175px] shrink-0 text-[14px] font-semibold text-[var(--color-text-default)]">Tailwind / Figma token</div>
        <div className="w-[100px] shrink-0 text-[14px] font-semibold text-[var(--color-text-default)]">Weight</div>
        <div className="flex-1 text-[14px] font-semibold text-[var(--color-text-default)]">Usage</div>
      </div>
      {/* Data rows */}
      {ALL_ROWS.flatMap(({ category, rows }) =>
        rows.map((row, i) => (
          <div key={row.token} className="flex gap-[var(--spacing-48)] items-start py-[var(--spacing-16)] px-[var(--spacing-8)] border-b border-[var(--color-grey-300)]">
            <div className="w-[100px] shrink-0 text-[14px] font-semibold text-[var(--color-text-default)]">
              {i === 0 ? category : ''}
            </div>
            <div className="w-[48px] shrink-0 text-[14px] text-[var(--color-text-default)]">
              {row.size.split('  /  ')[0].replace(/(\d+)(px)/, '$1 $2')}
            </div>
            <div className="w-[56px] shrink-0 text-[14px] text-[var(--color-text-default)]">
              {row.size.split('  /  ')[1].replace(/([0-9.]+)(rem)/, '$1 $2')}
            </div>
            <div className="w-[175px] shrink-0">
              <span className="inline-flex items-center px-[var(--spacing-8)] py-[var(--spacing-4)] rounded-md bg-[var(--color-grey-100)] text-[12px] font-mono text-[var(--color-text-secondary)] whitespace-nowrap">
                {row.tailwind}
              </span>
            </div>
            <div className="w-[100px] shrink-0 text-[14px] text-[var(--color-text-default)]">
              {row.weight} / {row.weight === 'Semibold' ? '600' : row.weight === 'Medium' ? '500' : '400'}
            </div>
            <ul className="flex-1 list-disc list-inside text-[14px] text-[var(--color-text-secondary)] leading-[1.5] space-y-[var(--spacing-4)]">
              {row.usage.split(' · ').map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default function TypographyPage() {
  const [tab, setTab] = useState('overview');

  return (
    <main className="bg-[var(--color-base-white)] min-h-screen">

      {/* ─── Header (grey-50 background) ──────────────────────── */}
      <div className="bg-[var(--color-bg-subtle)]">
        <div className="max-w-[1200px] mx-auto px-[var(--spacing-32)] pt-[var(--spacing-64)] pb-[var(--spacing-64)]">

          {/* Foundation label */}
          <p className="text-[20px] font-semibold leading-[28px] tracking-[0.3px] text-[var(--color-text-default)] mb-[var(--spacing-48)]">
            Foundation
          </p>

          {/* Title + metadata row */}
          <div className="flex items-start justify-between gap-[var(--spacing-64)] mb-[var(--spacing-40)]">
            <div className="flex flex-col gap-[var(--spacing-16)]">
              <h1 className="text-[48px] font-semibold leading-[48px] text-[var(--color-text-default)]">
                Typography
              </h1>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[680px]">
                Our typography is flexible and modular, with a focus on legibility and accessibility.
              </p>
            </div>

            {/* Metadata — no box, just row dividers */}
            <div className="shrink-0 w-[280px]">
              {[
                { label: 'Created by', value: 'Toni' },
                { label: 'Implemented by', value: 'Sam' },
                { label: 'Last updated', value: '08/04/2026' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`flex gap-[var(--spacing-24)] items-center px-[var(--spacing-12)] py-[var(--spacing-8)]${i > 0 ? ' border-t border-[var(--color-grey-300)]' : ''}`}
                >
                  <span className="text-[14px] font-semibold text-[var(--color-text-secondary)] tracking-[0.3px] w-[120px] shrink-0 leading-[20px]">
                    {item.label}
                  </span>
                  <span className="text-[14px] font-medium text-[var(--color-text-secondary)] tracking-[0.3px] leading-[20px]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Font family */}
          <div className="flex flex-col gap-[4px] mt-[32px]">
            <p className="text-[16px] font-medium leading-[24px] tracking-[0.2px] text-[var(--color-text-tertiary)]">
              Font family
            </p>
            <div className="text-[40px] font-semibold leading-[48px] tracking-[-0.02em] text-[var(--color-text-default)]">
              PP Neue Montreal
            </div>
          </div>

          {/* Download button */}
          <div className="mt-[var(--spacing-24)]">
            <Button
              variant="primary"
              size="large"
              onClick={() => window.open('https://awsmtech.atlassian.net/wiki/spaces/FH/pages/1071710214/Fonts+Download', '_blank')}
            >
              Download font
            </Button>
          </div>

        </div>
      </div>

      {/* ─── Tabs ─────────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-[var(--spacing-32)] pt-[var(--spacing-32)] flex items-end">
        <Tabs
          items={[
            { id: 'overview', label: 'Overview' },
            { id: 'mapping', label: 'Mapping' },
            { id: 'guidelines', label: 'Guidelines' },
          ]}
          value={tab}
          onChange={setTab}
        />
        <div className="flex-1 border-b border-[var(--color-border-subtle)]" />
      </div>

      {/* ─── Tab content ──────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-[var(--spacing-32)] py-[var(--spacing-64)]">
        {tab === 'overview' && (
          <>
            <TypeGroup title="Headings" rows={HEADINGS} />
            <TypeGroup title="Body" rows={BODY} />
            <TypeGroup title="Compact" rows={COMPACT} />
            <TypeGroup title="Small" rows={SMALL} />
          </>
        )}
        {tab === 'mapping' && <MappingTable />}
        {tab === 'guidelines' && (
          <div className="flex flex-col gap-[var(--spacing-48)]">

            {/* Sentence case */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-4)]">
                Sentence case
              </h2>
              <p className="text-[16px] text-[var(--color-text-secondary)] leading-[24px] max-w-[680px]">
                Always use sentence case for UI text. Capitalise only the first word of a sentence and proper nouns. Avoid title case except for proper names or brand-specific terms.
              </p>
              <div className="mt-[var(--spacing-24)] flex gap-[var(--spacing-24)]">
                <div className="flex-1 bg-[var(--color-grey-50,#fafafa)] border border-[var(--color-border-subtle)] rounded-[10px] px-[var(--spacing-24)] py-[var(--spacing-16)]">
                  <p className="text-[16px] font-semibold text-[#16A34A] mb-[var(--spacing-8)]">Do</p>
                  <p className="text-[16px] text-[var(--color-text-default)] leading-[24px]">Save your changes</p>
                  <p className="text-[16px] text-[var(--color-text-default)] leading-[24px]">Add a new item</p>
                </div>
                <div className="flex-1 bg-[var(--color-grey-50,#fafafa)] border border-[var(--color-border-subtle)] rounded-[10px] px-[var(--spacing-24)] py-[var(--spacing-16)]">
                  <p className="text-[16px] font-semibold text-[#DC2626] mb-[var(--spacing-8)]">Don't</p>
                  <p className="text-[16px] text-[var(--color-text-default)] leading-[24px]">Save Your Changes</p>
                  <p className="text-[16px] text-[var(--color-text-default)] leading-[24px]">Add A New Item</p>
                </div>
              </div>
            </div>

            {/* Ellipsis */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-4)]">
                Truncation guide
              </h2>
            </div>

          </div>
        )}
      </div>

    </main>
  );
}
