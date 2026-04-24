'use client';

import React, { useState } from 'react';
import { Select, type SelectOption } from '@finity/design-system';
import { Tabs } from '@/components/tabs/Tabs';
import { Section, DemoTable } from '@/app/_components/doc';

const PAYMENT_OPTIONS: SelectOption[] = [
  { value: 'trustpay',     label: 'TrustPay' },
  { value: 'novapayments', label: 'NovaPayments' },
  { value: 'payvia',       label: 'Payvia' },
  { value: 'paynex',       label: 'PayNex' },
  { value: 'omnitrust',    label: 'OmniTrust Payment Processing Corporation' },
  { value: 'transglobal',  label: 'TransGlobal Financial Network' },
  { value: 'paysolutions',  label: 'Payment Solutions Inc.' },
  { value: 'aurora',       label: 'Aurora Digital Systems' },
];

const PROCESSOR_OPTIONS: SelectOption[] = [
  { value: 'all',           label: 'All' },
  { value: 'subcontractor', label: 'Subcontractor' },
  { value: 'paye',          label: 'PAYE' },
  { value: 'umbrella',      label: 'Umbrella' },
  { value: 'hybrid',        label: 'Hybrid' },
];

// Static trigger for Hover and Focus states (medium size)
function SelectStatic({ state }: { state: 'hover' | 'focus' }) {
  const shadow = state === 'hover'
    ? '[box-shadow:0_0_0_1px_var(--color-grey-400)]'
    : '[box-shadow:0_0_0_3px_var(--color-grey-900)]';
  const bg = 'bg-[var(--color-grey-100)]';
  return (
    <div className="flex flex-col gap-[var(--spacing-4)]">
      <span className="text-body-medium text-[var(--color-text-secondary)]">Label</span>
      <div className={`flex items-center h-[var(--spacing-40)] w-full rounded-[8px] ${bg} ${shadow}`}>
        <span className="flex-1 px-[var(--spacing-12)] text-body-regular text-[var(--color-text-tertiary)] truncate">
          Select an option
        </span>
        <span className="flex items-center justify-center w-[var(--spacing-40)] h-[var(--spacing-40)]">
          <svg width="24" height="24" viewBox="0 0 20 20" fill="var(--color-text-default)" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.5L10 12.5L15 7.5H5Z" />
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
    node: <Select size="medium" label="Label" options={PAYMENT_OPTIONS} />,
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
      <div className="relative" style={{ height: 300 }}>
        <div className="absolute inset-0 flex flex-col gap-[var(--spacing-4)] pointer-events-none">
          <span className="text-body-medium text-[var(--color-text-secondary)]">Label</span>
          <div className="flex items-center h-[var(--spacing-40)] w-full rounded-[8px] bg-[var(--color-grey-200)] [box-shadow:0_0_0_1px_var(--color-grey-400)]">
            <span className="flex-1 px-[var(--spacing-12)] text-body-medium text-[var(--color-text-default)] truncate">All</span>
            <span className="flex items-center justify-center w-[var(--spacing-40)] h-[var(--spacing-40)]">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="var(--color-text-default)" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 12.5L10 7.5L5 12.5L15 12.5Z" />
              </svg>
            </span>
          </div>
          <div className="rounded-[8px] border border-[var(--color-grey-200)] overflow-hidden shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_2px_4px_rgba(0,0,0,0.06)] bg-[var(--color-base-white)]">
            {PROCESSOR_OPTIONS.map(o => (
              <div key={o.value} className="flex items-center gap-[var(--spacing-8)] pl-[var(--spacing-12)] pr-[var(--spacing-12)] py-[var(--spacing-12)] text-body-medium text-[var(--color-text-default)]">
                {o.value === 'all' ? (
                  <svg className="shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="var(--color-text-default)" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 13.475L4.025 10L2.958 11.058L7.5 15.6L17.5 5.6L16.442 4.542L7.5 13.475Z" />
                  </svg>
                ) : (
                  <span className="shrink-0 w-[20px] h-[20px]" />
                )}
                <span className="flex-1 min-w-0 truncate">{o.label}</span>
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
    node: <Select size="medium" label="Label" options={PROCESSOR_OPTIONS} value="all" onChange={() => {}} />,
  },
  {
    label: 'Error',
    description: 'Indicates a validation error, always pair with an error message',
    node: <Select size="medium" label="Label" options={PAYMENT_OPTIONS} errorMessage="This field is required" />,
  },
];

export default function SelectPage() {
  const [tab, setTab] = useState('overview');
  const [single, setSingle] = useState('all');

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
                { label: 'Created by',     value: 'Toni'       },
                { label: 'Implemented by', value: ''           },
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
              <div className="bg-[#FAFAFA] p-[var(--spacing-48)] flex items-start justify-center">
                <div className="w-[180px]">
                  <Select
                    size="medium"
                    label="Processor"
                    placeholder="Select processor"
                    options={PROCESSOR_OPTIONS}
                    value={single}
                    onChange={setSingle}
                  />
                </div>
              </div>
            </div>

            {/* States */}
            <Section title="States" compact last>
              <DemoTable
                rowHeader="State"
                cols={[
                  { key: 'preview',     label: 'Preview',     className: 'w-[220px]' },
                  { key: 'description', label: 'Description' },
                ]}
                rows={STATES.map(({ label, description, node }) => ({
                  label,
                  cells: [
                    <div key={label} className="pointer-events-none w-[180px]">{node}</div>,
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
