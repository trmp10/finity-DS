'use client';

import React, { useState } from 'react';
import { MobileNumberField } from '@finity/design-system';
import { Tabs } from '@/components/tabs/Tabs';
import { Section, DemoTable } from '@/app/_components/doc';

// Docs-only visual preview that shows a blinking cursor element.
// Used for Focus and Typing states where the cursor must be visible
// in the static states table without relying on DOM focus.
function FieldWithCursor({ value = '' }: { value?: string }) {
  return (
    <div className="flex flex-col gap-[var(--spacing-4)] w-full">
      <span className="text-body-medium text-[var(--color-text-secondary)]">
        Mobile number
      </span>
      <div className="flex items-center overflow-hidden rounded-[8px] h-[var(--spacing-48)] bg-[var(--color-base-white)] [box-shadow:0_0_0_3px_var(--color-text-default)]">
        <div className="flex items-center justify-center shrink-0 h-full px-[var(--spacing-12)] border-r border-[var(--color-border-default)] bg-[var(--color-grey-100)]">
          <span className="text-body-medium text-[var(--color-text-secondary)] w-[var(--spacing-32)] text-center">
            +44
          </span>
        </div>
        <div className="flex items-center flex-1 h-full px-[var(--spacing-12)] gap-[var(--spacing-2)]">
          {value && (
            <span className="text-body-medium text-[var(--color-text-default)]">{value}</span>
          )}
          <span className="inline-block w-px h-[20px] bg-[var(--color-text-default)]" />
        </div>
      </div>
    </div>
  );
}

// [&>div:first-of-type] targets the input container (FieldLabel renders <label>, not <div>)
const STATES: { label: string; description: string; node: React.ReactNode }[] = [
  {
    label: 'Default',
    description: 'Empty and ready for input',
    node: <MobileNumberField placeholder="07123 456789" />,
  },
  {
    label: 'Hover',
    description: 'Pointer is over the field but it is not yet focused',
    node: <MobileNumberField placeholder="07123 456789" className="[&>div:first-of-type]:[box-shadow:0_0_0_2px_var(--color-text-default)]" />,
  },
  {
    label: 'Focus',
    description: 'Field is active and ready for input',
    node: <FieldWithCursor />,
  },
  {
    label: 'Typing',
    description: 'User is actively entering a number',
    node: <FieldWithCursor value="07123 456789" />,
  },
  {
    label: 'Active',
    description: 'Contains a user-entered value',
    node: <MobileNumberField defaultValue="07123 456789" />,
  },
  {
    label: 'Error',
    description: 'Indicates a validation error, always pair with an error message below',
    node: <MobileNumberField defaultValue="07123 456789" errorMessage="Enter a valid UK mobile number" />,
  },
];

export default function MobileNumberFieldPage() {
  const [tab, setTab] = useState('overview');
  const [liveValue, setLiveValue] = useState('');

  return (
    <main className="bg-[var(--color-base-white)] min-h-screen">

      {/* ─── Header ───────────────────────────────────────────────── */}
      <div>
        <div className="max-w-[1200px] mx-auto px-[var(--spacing-32)] pt-[var(--spacing-64)] pb-[var(--spacing-64)]">

          <p className="text-[20px] leading-[28px] tracking-[0.3px] mb-[var(--spacing-48)]">
            <span className="font-medium text-[var(--color-text-default)]">Component → </span>
            <span className="font-semibold text-[var(--color-text-default)]">Form</span>
          </p>

          <div className="flex items-start justify-between gap-[var(--spacing-64)] mb-[var(--spacing-40)]">
            <div className="flex flex-col gap-[var(--spacing-16)]">
              <h1 className="text-[48px] font-semibold leading-[48px] text-[var(--color-text-default)]">
                Mobile number field
              </h1>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[520px]">
                A single numeric-only input for capturing phone numbers, typically formatted for mobile use.
              </p>
            </div>

            {/* Metadata */}
            <div className="shrink-0 w-[280px]">
              {[
                { label: 'Created by',     value: 'Toni' },
                { label: 'Implemented by', value: '' },
                { label: 'Last updated',   value: '07/01/2026' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`flex gap-[var(--spacing-24)] items-center px-[var(--spacing-12)] py-[var(--spacing-8)]${i > 0 ? ' border-t border-[var(--color-grey-300)]' : ''}`}
                >
                  <span className="text-[14px] font-semibold text-[var(--color-text-secondary)] tracking-[0.3px] w-[120px] shrink-0 leading-[20px]">
                    {item.label}
                  </span>
                  <span className="text-[14px] font-medium text-[var(--color-grey-900)] tracking-[0.3px] leading-[20px]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ─── Tabs ─────────────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-[var(--spacing-32)] pt-[var(--spacing-32)] flex items-end">
        <Tabs
          items={[
            { id: 'overview',   label: 'Overview' },
            { id: 'guidelines', label: 'Guidelines' },
            { id: 'specs',      label: 'Specs' },
          ]}
          value={tab}
          onChange={setTab}
        />
        <div className="flex-1 border-b border-[var(--color-border-subtle)]" />
      </div>

      {/* ─── Content ──────────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-[var(--spacing-32)] py-[var(--spacing-64)]">

        {tab === 'overview' && (
          <>
            {/* Interactive demo */}
            <div className="mb-[var(--spacing-80)]">
              <div className="bg-[#FAFAFA] p-[var(--spacing-48)] flex items-center justify-center">
                <div className="w-[320px]">
                  <MobileNumberField
                    placeholder="07123 456789"
                    value={liveValue}
                    onChange={(e) => setLiveValue(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* States */}
            <Section title="States" compact last>
              <DemoTable
                rowHeader="State"
                cols={[
                  { key: 'preview',     label: 'Preview',     className: 'w-[320px]' },
                  { key: 'description', label: 'Description' },
                ]}
                rows={STATES.map(({ label, description, node }) => ({
                  label,
                  cells: [
                    <div key={label} className="pointer-events-none">{node}</div>,
                    <span key={`${label}-d`} className="text-[14px] font-medium text-[var(--color-grey-900)]">{description}</span>,
                  ],
                }))}
              />
            </Section>
          </>
        )}

      </div>
    </main>
  );
}
