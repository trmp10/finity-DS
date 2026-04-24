'use client';

import React, { useState } from 'react';
import { ComboBox, type ComboBoxOption, Scrollbar } from '@finity/design-system';
import { Tabs } from '@/components/tabs/Tabs';
import { Section, DemoTable } from '@/app/_components/doc';

const PAYMENT_OPTIONS: ComboBoxOption[] = [
  { value: 'adyen',        label: 'Adyen' },
  { value: 'afterpay',     label: 'Afterpay' },
  { value: 'airwallex',    label: 'Airwallex' },
  { value: 'amazon_pay',   label: 'Amazon Pay' },
  { value: 'antom',        label: 'Antom' },
  { value: 'apple_pay',    label: 'Apple Pay' },
  { value: 'authorize',    label: 'Authorize.Net' },
  { value: 'apexx',        label: 'Apexx Global' },
  { value: 'acquired',     label: 'Acquired.com' },
  { value: 'mantara',      label: 'Mantara Workforce Management Ltd' },
  { value: 'marlowe',      label: 'Marlowe Financial' },
  { value: 'matrix',       label: 'Matrix Global Solutions' },
  { value: 'maxtonpay',    label: 'MaxtonPay' },
  { value: 'mastercard',   label: 'Mastercard' },
  { value: 'paypal',       label: 'PayPal' },
  { value: 'payone',       label: 'Payone' },
  { value: 'payoneer',     label: 'Payoneer' },
  { value: 'stripe',       label: 'Stripe' },
  { value: 'stax',         label: 'Stax' },
  { value: 'square',       label: 'Square' },
  { value: 'spreedly',     label: 'Spreedly' },
];

// Static render for Hover / Focus states — medium size
function ComboBoxStatic({ state }: { state: 'hover' | 'focus' }) {
  const shadow = state === 'hover'
    ? '[box-shadow:0_0_0_2px_var(--color-text-default)]'
    : '[box-shadow:0_0_0_3px_var(--color-text-default)]';
  const buttonBg = 'bg-[var(--color-base-white)]';

  return (
    <div className="flex flex-col gap-[var(--spacing-4)]">
      <span className="text-body-medium text-[var(--color-text-secondary)]">Label</span>
      <div className={`flex items-center h-[var(--spacing-40)] w-full rounded-[8px] bg-[var(--color-base-white)] overflow-hidden ${shadow}`}>
        <span className="flex-1 px-[var(--spacing-12)] text-body-medium text-[var(--color-text-tertiary)] font-normal truncate">
          Type here...
        </span>
        <div className={`flex items-center justify-center shrink-0 h-full w-[var(--spacing-40)] border-l border-[var(--color-border-default)] ${buttonBg}`}>
          <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            {state === 'focus'
              ? <path d="M15 12.5L10 7.5L5 12.5L15 12.5Z" fill="var(--color-text-default)" stroke="none" />
              : <path d="M5 7.5L10 12.5L15 7.5H5Z" fill="var(--color-text-default)" stroke="none" />
            }
          </svg>
        </div>
      </div>
    </div>
  );
}

const STATES: { label: string; description: string; node: React.ReactNode }[] = [
  {
    label: 'Default',
    description: 'Empty and ready for input or selection',
    node: <ComboBox label="Label" options={PAYMENT_OPTIONS} />,
  },
  {
    label: 'Hover',
    description: 'Pointer is over the field but it is not yet focused',
    node: <ComboBoxStatic state="hover" />,
  },
  {
    label: 'Focus',
    description: 'Field is focused and the dropdown is open',
    node: <ComboBoxStatic state="focus" />,
  },
  {
    label: 'Open',
    description: 'Dropdown is expanded showing available options',
    node: (
      <div className="relative" style={{ height: 300 }}>
        <div className="absolute inset-0 flex flex-col gap-[var(--spacing-4)] pointer-events-none">
          <span className="text-body-medium text-[var(--color-text-secondary)]">Label</span>
          <div className="flex items-center h-[var(--spacing-40)] w-full rounded-[8px] bg-[var(--color-base-white)] overflow-hidden [box-shadow:0_0_0_3px_var(--color-text-default)]">
            <span className="flex-1 px-[var(--spacing-12)] text-body-medium text-[var(--color-text-tertiary)] font-normal truncate">
              Type here...
            </span>
            <div className="flex items-center justify-center shrink-0 h-full w-[var(--spacing-40)] border-l border-[var(--color-border-default)] bg-[var(--color-base-white)]">
              <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 12.5L10 7.5L5 12.5L15 12.5Z" fill="var(--color-text-default)" stroke="none" />
              </svg>
            </div>
          </div>
          <div className="rounded-[8px] border border-[var(--color-grey-200)] overflow-hidden shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_2px_4px_rgba(0,0,0,0.06)]">
            <Scrollbar maxHeight={200} className="bg-[var(--color-base-white)]">
              {PAYMENT_OPTIONS.slice(0, 5).map(o => (
                <div key={o.value} className="flex items-center px-[var(--spacing-12)] py-[var(--spacing-12)] text-body-medium text-[var(--color-text-default)]">
                  <span className="flex-1 min-w-0 truncate">{o.label}</span>
                </div>
              ))}
            </Scrollbar>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Active',
    description: 'A value has been selected',
    node: <ComboBox label="Label" options={PAYMENT_OPTIONS} value="adyen" onChange={() => {}} />,
  },
];

export default function ComboBoxPage() {
  const [tab, setTab] = useState('overview');
  const [value, setValue] = useState('');

  return (
    <main className="bg-[var(--color-base-white)] min-h-screen">

      {/* Header */}
      <div>
        <div className="max-w-[1200px] mx-auto px-[var(--spacing-32)] pt-[var(--spacing-64)] pb-[var(--spacing-64)]">

          <p className="text-[20px] leading-[28px] tracking-[0.3px] mb-[var(--spacing-48)]">
            <span className="font-medium text-[var(--color-text-default)]">Component → </span>
            <span className="font-semibold text-[var(--color-text-default)]">Form</span>
          </p>

          <div className="flex items-start justify-between gap-[var(--spacing-64)] mb-[var(--spacing-40)]">
            <div className="flex flex-col gap-[var(--spacing-16)]">
              <h1 className="text-[48px] font-semibold leading-[48px] text-[var(--color-text-default)]">
                ComboBox
              </h1>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[520px]">
                The combobox combines a text field with a select menu, allowing users to filter and choose an option from a list or enter their own value.
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

      {/* Tabs */}
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

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-[var(--spacing-32)] py-[var(--spacing-64)]">

        {tab === 'overview' && (
          <>
            {/* Interactive demo */}
            <div className="mb-[var(--spacing-80)]">
              <div className="bg-[#FAFAFA] p-[var(--spacing-48)] flex items-start justify-center">
                <div className="w-[280px]">
                  <ComboBox
                    label="Payment company"
                    placeholder="Select payment company"
                    options={PAYMENT_OPTIONS}
                    value={value}
                    onChange={setValue}
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
