'use client';

import React, { useState } from 'react';
import { Select, type SelectOption } from '@finity/design-system';
import { Tabs } from '@/components/tabs/Tabs';
import { Section, DemoTable } from '@/app/_components/doc';

const PAYMENT_OPTIONS: SelectOption[] = [
  { value: 'trustpay', label: 'TrustPay' },
  { value: 'novapayments', label: 'NovaPayments' },
  { value: 'payvia', label: 'Payvia' },
  { value: 'paynex', label: 'PayNex' },
];

const COLOUR_OPTIONS: SelectOption[] = [
  { value: 'red',    label: 'Red' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'orange', label: 'Orange' },
  { value: 'blue',   label: 'Blue' },
];

// Static trigger renders for Hover and Focus states
function SelectStatic({ state }: { state: 'hover' | 'focus' }) {
  const shadow = state === 'hover'
    ? '[box-shadow:0_0_0_1px_var(--color-border-subtle)]'
    : '[box-shadow:0_0_0_3px_var(--color-text-default)]';
  const bg = state === 'hover' ? 'bg-[var(--color-grey-100)]' : 'bg-[var(--color-base-white)]';
  return (
    <div className="flex flex-col gap-[var(--spacing-4)]">
      <span className="text-body-medium text-[var(--color-text-secondary)]">Label</span>
      <div className={`flex items-center h-[var(--spacing-48)] w-full rounded-[8px] ${bg} ${shadow}`}>
        <span className="flex-1 px-[var(--spacing-12)] text-body-regular text-[var(--color-text-tertiary)] truncate">
          Select an option
        </span>
        <span className="flex items-center justify-center w-[var(--spacing-48)] h-[var(--spacing-48)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-default)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 16l-6-6h12l-6 6z" fill="currentColor" stroke="none" />
          </svg>
        </span>
      </div>
    </div>
  );
}

const STATES: { label: string; description: string; node: React.ReactNode }[] = [
  {
    label: 'Default',
    description: 'Empty and ready for selection',
    node: <Select label="Label" options={PAYMENT_OPTIONS} />,
  },
  {
    label: 'Hover',
    description: 'Pointer is over the field but it is not yet focused',
    node: <SelectStatic state="hover" />,
  },
  {
    label: 'Focus',
    description: 'Field is focused and ready for interaction',
    node: <SelectStatic state="focus" />,
  },
  {
    label: 'Open',
    description: 'Dropdown is expanded showing available options',
    node: (
      <div className="relative" style={{ height: 230 }}>
        <Select label="Label" options={PAYMENT_OPTIONS} />
        {/* Static open state */}
        <div className="absolute inset-0 flex flex-col gap-[var(--spacing-4)] pointer-events-none">
          <span className="text-body-medium text-[var(--color-text-secondary)]">Label</span>
          <div className="flex items-center h-[var(--spacing-48)] w-full rounded-[8px] bg-[var(--color-base-white)] [box-shadow:0_0_0_3px_var(--color-text-default)]">
            <span className="flex-1 px-[var(--spacing-12)] text-body-regular text-[var(--color-text-tertiary)] truncate">Select an option</span>
            <span className="flex items-center justify-center w-[var(--spacing-48)] h-[var(--spacing-48)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-default)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8l-6 6h12l-6-6z" fill="currentColor" stroke="none" />
              </svg>
            </span>
          </div>
          <div className="rounded-[8px] border border-[var(--color-grey-200)] overflow-hidden shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_2px_4px_rgba(0,0,0,0.06)]">
            {PAYMENT_OPTIONS.map(o => (
              <div key={o.value} className="py-[var(--spacing-12)] pl-[44px] pr-[var(--spacing-16)] text-body-medium text-[var(--color-text-default)] bg-[var(--color-base-white)]">
                {o.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Active',
    description: 'A value has been selected',
    node: <Select label="Label" options={PAYMENT_OPTIONS} value="trustpay" onChange={() => {}} />,
  },
  {
    label: 'Read-only',
    description: 'Displays a value that cannot be changed',
    node: <Select label="Label" options={PAYMENT_OPTIONS} value="trustpay" readOnly />,
  },
  {
    label: 'Disabled',
    description: 'Field is not interactive and cannot be changed',
    node: <Select label="Label" options={PAYMENT_OPTIONS} disabled />,
  },
  {
    label: 'Error',
    description: 'Indicates a validation error, always pair with an error message',
    node: <Select label="Label" options={PAYMENT_OPTIONS} errorMessage="Please select a valid option" />,
  },
];

export default function SelectPage() {
  const [tab, setTab] = useState('overview');
  const [single, setSingle] = useState('');
  const [multi, setMulti] = useState<string[]>([]);

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
                Select
              </h1>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[520px]">
                A dropdown field for selecting one or more options from a predefined list.
              </p>
            </div>

            <div className="shrink-0 w-[280px]">
              {[
                { label: 'Created by',   value: 'toni'       },
                { label: 'Updated by',   value: 'toni'       },
                { label: 'Last updated', value: '11/11/2025' },
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
            {/* Interactive demos */}
            <div className="mb-[var(--spacing-80)]">
              <div className="bg-[#FAFAFA] p-[var(--spacing-48)] flex items-start justify-center gap-[var(--spacing-48)]">
                <div className="w-[280px]">
                  <Select
                    label="Payment company"
                    placeholder="Select payment company"
                    options={PAYMENT_OPTIONS}
                    value={single}
                    onChange={v => setSingle(v as string)}
                  />
                </div>
                <div className="w-[280px]">
                  <Select
                    label="Colours"
                    placeholder="e.g. red"
                    options={COLOUR_OPTIONS}
                    value={multi}
                    onChange={v => setMulti(v as string[])}
                    multiple
                    helperText="Select a colour for this item"
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
