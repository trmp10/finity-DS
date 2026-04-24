'use client';

import React, { useState } from 'react';
import { DateOfBirthField, type DateOfBirthValue } from '@finity/design-system';
import { Tabs } from '@/components/tabs/Tabs';
import { Section, DemoTable } from '@/app/_components/doc';

// Static renders for Hover and Focus — avoids real focus/hover in the states table.
function DOBStatic({ state }: { state: 'hover' | 'focus' }) {
  const dayShadow = state === 'hover'
    ? '[box-shadow:0_0_0_2px_var(--color-text-default)]'
    : '[box-shadow:0_0_0_3px_var(--color-text-default)]';
  const otherShadow = '[box-shadow:0_0_0_1px_var(--color-border-default)]';
  const slotBase = 'flex items-center h-[var(--spacing-40)] rounded-[8px] bg-[var(--color-base-white)] px-[var(--spacing-12)]';

  return (
    <div className="flex flex-col gap-[var(--spacing-4)]">
      <span className="text-body-medium text-[var(--color-text-secondary)]">Date of birth</span>
      <div className="flex gap-[var(--spacing-8)] items-start">
        <div className={`${slotBase} w-[56px] ${dayShadow}`}>
          {state === 'focus' ? (
            <span className="inline-block w-px h-[20px] bg-[var(--color-text-default)]" />
          ) : (
            <span className="text-body-regular text-[var(--color-text-tertiary)]">DD</span>
          )}
        </div>
        <div className={`${slotBase} w-[56px] ${otherShadow}`}>
          <span className="text-body-regular text-[var(--color-text-tertiary)]">MM</span>
        </div>
        <div className={`${slotBase} w-[66px] ${otherShadow}`}>
          <span className="text-body-regular text-[var(--color-text-tertiary)]">YYYY</span>
        </div>
      </div>
    </div>
  );
}

const EMPTY: DateOfBirthValue = { day: '', month: '', year: '' };

const STATES: { label: string; description: string; node: React.ReactNode }[] = [
  {
    label: 'Default',
    description: 'Empty and ready for input',
    node: <DateOfBirthField value={EMPTY} onChange={() => {}} />,
  },
  {
    label: 'Hover',
    description: 'Pointer is over a slot but it is not yet focused',
    node: <DOBStatic state="hover" />,
  },
  {
    label: 'Focus',
    description: 'A slot is active and ready for input',
    node: <DOBStatic state="focus" />,
  },
  {
    label: 'Active',
    description: 'Contains user-entered values',
    node: <DateOfBirthField value={{ day: '5', month: '12', year: '1985' }} onChange={() => {}} />,
  },
  {
    label: 'Error',
    description: 'Indicates a validation error, always pair with an error message below',
    node: <DateOfBirthField value={EMPTY} onChange={() => {}} errorMessage="Enter a valid date of birth" />,
  },
  {
    label: 'Disabled',
    description: 'Field is not interactive and cannot be edited',
    node: <DateOfBirthField value={EMPTY} onChange={() => {}} disabled />,
  },
];

export default function DateOfBirthFieldPage() {
  const [tab, setTab] = useState('overview');
  const [liveValue, setLiveValue] = useState<DateOfBirthValue>(EMPTY);

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
                Date of birth field
              </h1>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[520px]">
                A set of multiple inputs (day, month, year) used to capture a complete date.
              </p>
            </div>

            {/* Metadata */}
            <div className="shrink-0 w-[280px]">
              {[
                { label: 'Created by',     value: 'Toni'       },
                { label: 'Implemented by', value: ''           },
                { label: 'Last updated', value: '23/06/2025' },
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
            { id: 'overview',   label: 'Overview'   },
            { id: 'guidelines', label: 'Guidelines' },
            { id: 'specs',      label: 'Specs'      },
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
                <DateOfBirthField
                  value={liveValue}
                  onChange={setLiveValue}
                />
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
