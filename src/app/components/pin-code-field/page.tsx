'use client';

import React, { useState } from 'react';
import { PinCodeField } from '@finity/design-system';
import { Tabs } from '@/components/tabs/Tabs';
import { Section, DemoTable } from '@/app/_components/doc';

// Individual slot used to render static PIN states without real focus behaviour.
function PinSlot({
  digit,
  state,
  showCursor,
  size = 'large',
}: {
  digit?: string;
  state: 'default' | 'hover' | 'focus' | 'error' | 'readonly';
  showCursor?: boolean;
  size?: 'large' | 'medium';
}) {
  const dimension = size === 'large' ? 'w-[56px] h-[56px]' : 'w-[48px] h-[48px]';
  const style = {
    default:  'bg-[var(--color-base-white)] [box-shadow:0_0_0_1px_var(--color-border-default)]',
    hover:    'bg-[var(--color-base-white)] [box-shadow:0_0_0_2px_var(--color-text-default)]',
    focus:    'bg-[var(--color-base-white)] [box-shadow:0_0_0_3px_var(--color-text-default)]',
    error:    'bg-[var(--color-base-white)] [box-shadow:0_0_0_2px_var(--color-red-600)]',
    readonly: 'bg-[var(--color-grey-100)] [box-shadow:0_0_0_1px_var(--color-border-subtle)]',
  }[state];

  return (
    <div className={`${dimension} rounded-[8px] flex items-center justify-center ${style}`}>
      {digit && (
        <span className="font-semibold text-size-heading-md text-[var(--color-text-default)]">{digit}</span>
      )}
      {!digit && showCursor && (
        <span className="inline-block w-[2px] h-[24px] bg-[var(--color-text-default)]" />
      )}
    </div>
  );
}

// Renders a row of 6 PIN slots with a divider between slot 3 and 4.
function PinRow({ slots }: { slots: React.ReactNode[] }) {
  const withDivider = [
    ...slots.slice(0, 3),
    <div key="div" className="w-[8px] h-0 border-t border-[var(--color-border-default)] self-center" />,
    ...slots.slice(3),
  ];
  return (
    <div className="flex items-center gap-[var(--spacing-8)]">
      {withDivider}
    </div>
  );
}

const STATES: { label: string; description: string; node: React.ReactNode }[] = [
  {
    label: 'Default',
    description: 'Empty slots, ready for input',
    node: (
      <PinRow slots={[0,1,2,3,4,5].map(i => <PinSlot key={i} state="default" />)} />
    ),
  },
  {
    label: 'Hover',
    description: 'Pointer is over a slot but it is not yet focused',
    node: (
      <PinRow slots={[0,1,2,3,4,5].map(i => <PinSlot key={i} state={i === 0 ? 'hover' : 'default'} />)} />
    ),
  },
  {
    label: 'Focus',
    description: 'Slot is active and ready for input',
    node: (
      <PinRow slots={[0,1,2,3,4,5].map(i => <PinSlot key={i} state={i === 0 ? 'focus' : 'default'} showCursor={i === 0} />)} />
    ),
  },
  {
    label: 'Typing',
    description: 'User is entering digits',
    node: (
      <PinRow slots={[
        <PinSlot key={0} state="default" digit="1" />,
        <PinSlot key={1} state="default" digit="2" />,
        <PinSlot key={2} state="default" digit="3" />,
        <PinSlot key={3} state="focus" showCursor />,
        <PinSlot key={4} state="default" />,
        <PinSlot key={5} state="default" />,
      ]} />
    ),
  },
  {
    label: 'Active',
    description: 'All slots filled with a valid code',
    node: (
      <PinRow slots={['1','2','3','4','5','6'].map((d, i) => <PinSlot key={i} state="default" digit={d} />)} />
    ),
  },
  {
    label: 'Read-only',
    description: 'Displays a value that cannot be edited',
    node: (
      <PinRow slots={['1','2','3','4','5','6'].map((d, i) => <PinSlot key={i} state="readonly" digit={d} />)} />
    ),
  },
  {
    label: 'Error',
    description: 'Indicates a validation error, always pair with an error message below',
    node: (
      <PinCodeField value="12356" onChange={() => {}} errorMessage="Enter a valid code" />
    ),
  },
];

export default function PinCodeFieldPage() {
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
                PIN code field
              </h1>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[520px]">
                A set of inputs used to enter a short numeric code, typically for authentication or security.
              </p>
            </div>

            {/* Metadata */}
            <div className="shrink-0 w-[280px]">
              {[
                { label: 'Created by',     value: 'Toni' },
                { label: 'Implemented by', value: '' },
                { label: 'Last updated',   value: '23/06/2025' },
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
                <PinCodeField
                  length={6}
                  value={liveValue}
                  onChange={setLiveValue}
                />
              </div>
            </div>

            {/* States */}
            <Section title="States" compact>
              <DemoTable
                rowHeader="State"
                cols={[
                  { key: 'preview',     label: 'Preview',     className: 'w-[400px]' },
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

            {/* Sizes */}
            <Section title="Sizes" compact last>
              <div className="grid grid-cols-2 gap-[var(--spacing-24)]">
                {([
                  { label: 'Large', px: '56px', size: 'large' as const },
                  { label: 'Medium', px: '48px', size: 'medium' as const },
                ] as const).map(({ label, px, size }) => (
                  <div key={label}>
                    <div className="bg-[#FAFAFA] p-[var(--spacing-48)] flex items-center justify-center rounded-[8px]">
                      <div className="pointer-events-none">
                        <PinCodeField length={6} size={size} value="" onChange={() => {}} />
                      </div>
                    </div>
                    <p className="mt-[var(--spacing-12)] text-[14px] text-[var(--color-text-default)]">
                      <span className="font-semibold">{label}</span>
                      <span className="font-medium text-[var(--color-text-secondary)]"> {px}</span>
                    </p>
                  </div>
                ))}
              </div>
            </Section>
          </>
        )}

      </div>
    </main>
  );
}
