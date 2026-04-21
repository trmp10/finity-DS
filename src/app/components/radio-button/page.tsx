'use client';

import React, { useState } from 'react';
import { RadioButton, RadioGroup } from '@finity/design-system';
import { Check, Close } from '@finity/design-system';
import { Tabs } from '@/components/tabs/Tabs';
import { Section, DemoTable } from '@/app/_components/doc';

const STATES: { label: string; props: React.ComponentProps<typeof RadioButton> }[] = [
  { label: 'Default',  props: { tabIndex: -1 } },
  { label: 'Hover',    props: { tabIndex: -1, className: '[&>div]:border-2 [&>div]:border-[var(--color-grey-900)]' } },
  { label: 'Focus',    props: { tabIndex: -1, className: '[&>div]:outline [&>div]:outline-[3px] [&>div]:outline-offset-[2px] [&>div]:outline-[var(--color-text-default)]' } },
  { label: 'Active',   props: { tabIndex: -1, checked: true, onChange: () => {} } },
  { label: 'Error',    props: { tabIndex: -1, error: true } },
  { label: 'Disabled', props: { tabIndex: -1, disabled: true } },
];

function GuidelineTable({ rows }: { rows: { use: React.ReactNode; avoid: React.ReactNode; implemented: 'No' | 'Review' }[] }) {
  return (
    <div className="w-full">
      <div className="flex gap-[var(--spacing-16)] py-[var(--spacing-12)] px-[var(--spacing-8)] border-b border-[var(--color-grey-300)] bg-[var(--color-grey-100)]">
        <div className="flex-1 flex items-center gap-[var(--spacing-4)] text-[14px] font-semibold text-[#16A34A]">
          <Check size={16} color="#16A34A" strokeWidth={2.5} />
          Use
        </div>
        <div className="flex-1 flex items-center gap-[var(--spacing-4)] text-[14px] font-semibold text-[#DC2626]">
          <Close size={16} color="#DC2626" />
          Avoid
        </div>
        <div className="w-[120px] shrink-0 text-[14px] font-semibold text-[var(--color-text-default)]">Implemented</div>
      </div>
      {rows.map((row, i) => (
        <div key={i} className={`flex gap-[var(--spacing-16)] py-[var(--spacing-16)] px-[var(--spacing-8)]${i < rows.length - 1 ? ' border-b border-[var(--color-grey-300)]' : ''}`}>
          <div className="flex-1 text-[14px] font-medium text-[var(--color-grey-900)] leading-[20px] text-pretty">{row.use}</div>
          <div className="flex-1 text-[14px] font-medium text-[var(--color-grey-900)] leading-[20px] text-pretty">{row.avoid}</div>
          <div className="w-[120px] shrink-0">
            {row.implemented === 'Review'
              ? <span className="text-[14px] font-medium text-[var(--color-yellow-600)]">Review</span>
              : <Close size={16} color="#DC2626" />
            }
          </div>
        </div>
      ))}
    </div>
  );
}

export default function RadioButtonPage() {
  const [tab, setTab] = useState('overview');
  const [frequency, setFrequency] = useState('weekly');
  const [plan, setPlan] = useState('fps');

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
                Radio group
              </h1>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[520px]">
                The Radio group allows the user to select one option from a set.
              </p>
            </div>

            {/* Metadata */}
            <div className="shrink-0 w-[280px]">
              {[
                { label: 'Created by',     value: 'Toni' },
                { label: 'Implemented by', value: '' },
                { label: 'Last updated',   value: '15/04/2026' },
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

        {/* ── Overview ── */}
        {tab === 'overview' && (
          <>
            {/* Interactive demo */}
            <div className="mb-[var(--spacing-80)]">
              <div className="bg-[#FAFAFA] p-[var(--spacing-48)] flex items-center justify-center">
                <div className="flex flex-col gap-[var(--spacing-8)]">
                  <p className="text-[16px] font-medium text-[var(--color-text-secondary)] mb-[var(--spacing-4)]">
                    Select payment frequency
                  </p>
                  <RadioGroup
                    name="frequency"
                    value={frequency}
                    onChange={setFrequency}
                    items={[
                      { value: 'weekly',      label: <span className="text-[16px] leading-[20px] font-medium text-[var(--color-grey-900)]">Weekly</span> },
                      { value: 'fortnightly', label: <span className="text-[16px] leading-[20px] font-medium text-[var(--color-grey-900)]">Fortnightly</span> },
                      { value: 'monthly',     label: <span className="text-[16px] leading-[20px] font-medium text-[var(--color-grey-900)]">Monthly</span> },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* States */}
            <Section title="States" compact>
              <div className="w-full">
              <DemoTable
                rowHeader="State"
                cols={[
                  { key: 'preview',     label: 'Preview',     className: 'w-[200px] pl-[var(--spacing-32)]' },
                  { key: 'description', label: 'Description' },
                ]}
                rows={STATES.map(({ label, props }) => ({
                  label,
                  cells: [
                    <div key={label} className="pointer-events-none"><RadioButton label={<span className="text-[14px] font-medium text-[var(--color-grey-900)]">Label</span>} {...props} /></div>,
                    <span key={`${label}-d`} className="text-[14px] font-medium text-[var(--color-grey-900)]">
                      {label === 'Default'  && 'Unselected and ready for interaction'}
                      {label === 'Hover'    && 'Cursor is over the radio button'}
                      {label === 'Focus'    && 'Focused via keyboard navigation'}
                      {label === 'Active'   && 'Option is selected'}
                      {label === 'Error'    && 'Indicates a validation error, always pair with a HelperText error message'}
                      {label === 'Disabled' && 'Not interactive, greyed out to communicate unavailability'}
                    </span>,
                  ],
                }))}
              />
              </div>
            </Section>

            {/* Horizontal layout */}
            <Section title="Horizontal layout" description="Radio groups may be arranged vertically or horizontally depending on the context and available space. When possible, use a vertical layout to support easier scanning and readability. A horizontal layout may be used when the number of options is small and labels are short." compact last>
              <div className="bg-[#FAFAFA] p-[var(--spacing-48)] flex items-center justify-center">
                <RadioGroup
                  name="plan"
                  value={plan}
                  onChange={setPlan}
                  orientation="horizontal"
                  items={[
                    { value: 'fps',  label: <span className="text-[16px] leading-[20px] font-medium text-[var(--color-grey-900)]">FPS</span> },
                    { value: 'eps',  label: <span className="text-[16px] leading-[20px] font-medium text-[var(--color-grey-900)]">EPS</span> },
                    { value: 'cisr', label: <span className="text-[16px] leading-[20px] font-medium text-[var(--color-grey-900)]">CISr</span> },
                  ]}
                />
              </div>
            </Section>
          </>
        )}

        {/* ── Guidelines ── */}
        {tab === 'guidelines' && (
          <div className="flex flex-col gap-[var(--spacing-48)]">

            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Usage</h2>
              <GuidelineTable rows={[
                { use: 'Use when only one option can be selected from a set', avoid: 'Using radio buttons when multiple selections are allowed — use checkboxes instead', implemented: 'No' },
                { use: 'Always provide at least two options in a radio group', avoid: 'Using a single radio button in isolation', implemented: 'No' },
                { use: 'Pre-select a sensible default when one exists', avoid: 'Leaving all options unselected when a clear default applies', implemented: 'No' },
              ]} />
            </div>

            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Label</h2>
              <GuidelineTable rows={[
                { use: 'Use sentence case for all radio labels', avoid: 'Title case or all caps labels', implemented: 'No' },
                { use: 'Keep labels concise and scannable', avoid: 'Long descriptive sentences as the primary label', implemented: 'No' },
              ]} />
            </div>

            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Layout</h2>
              <GuidelineTable rows={[
                { use: 'Use a vertical layout to support easier scanning and readability', avoid: 'Horizontal layouts when labels are long or options exceed three', implemented: 'No' },
                { use: 'Use a horizontal layout when options are few and labels are short', avoid: 'Mixing vertical and horizontal groups on the same form', implemented: 'No' },
              ]} />
            </div>

            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Accessibility</h2>
              <GuidelineTable rows={[
                { use: 'Always wrap radio buttons in a RadioGroup with a group label', avoid: 'Rendering standalone radio buttons without a group label', implemented: 'No' },
                { use: 'Ensure focus ring is always visible when navigating by keyboard', avoid: 'Removing or hiding the focus outline', implemented: 'No' },
                { use: 'Use a not-allowed cursor on disabled radio buttons to communicate unavailability', avoid: 'Using a default cursor on disabled states, which may confuse users', implemented: 'No' },
              ]} />
            </div>

          </div>
        )}

        {/* ── Specs ── */}
        {tab === 'specs' && (
          <div>
            <div className="w-full">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-grey-100)] border-b border-[var(--color-grey-300)]">
                    <th className="text-left py-[var(--spacing-12)] px-[var(--spacing-16)] w-[160px]">
                      <span className="text-[14px] font-semibold text-[var(--color-text-default)]">State</span>
                    </th>
                    {['Preview', 'Circle', 'Border', 'Focus ring', 'Label'].map(h => (
                      <th key={h} className="text-left py-[var(--spacing-12)] px-[var(--spacing-12)]">
                        <span className="text-[14px] font-semibold text-[var(--color-text-default)]">{h}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {([
                    { label: 'Default',  preview: <RadioButton tabIndex={-1} label={<span className="text-[14px] font-medium text-[var(--color-grey-900)]">Label</span>} />,                            circle: 'white',     border: 'grey 400 / 1px',  ring: '',                                            labelCol: 'grey 900' },
                    { label: 'Hover',    preview: <RadioButton tabIndex={-1} label={<span className="text-[14px] font-medium text-[var(--color-grey-900)]">Label</span>} className="[&>div]:border-2 [&>div]:border-[var(--color-grey-900)]" />, circle: 'white', border: 'grey 900 / 2px', ring: '', labelCol: 'grey 900' },
                    { label: 'Focus',    preview: <RadioButton tabIndex={-1} label={<span className="text-[14px] font-medium text-[var(--color-grey-900)]">Label</span>} className="[&>div]:outline [&>div]:outline-[3px] [&>div]:outline-offset-[2px] [&>div]:outline-[var(--color-text-default)]" />, circle: 'white', border: 'grey 400 / 1px', ring: 'grey 900 / 3px border weight / 6px radius', labelCol: 'grey 900' },
                    { label: 'Active',   preview: <RadioButton tabIndex={-1} label={<span className="text-[14px] font-medium text-[var(--color-grey-900)]">Label</span>} checked onChange={() => {}} />, circle: 'coral 400', border: '',                 ring: '',                                            labelCol: 'grey 900' },
                    { label: 'Error',    preview: <RadioButton tabIndex={-1} label={<span className="text-[14px] font-medium text-[var(--color-grey-900)]">Label</span>} error />,                      circle: 'white',     border: 'red 600 / 2px',   ring: '',                                            labelCol: 'grey 900' },
                    { label: 'Disabled', preview: <RadioButton tabIndex={-1} label={<span className="text-[14px] font-medium text-[var(--color-grey-900)]">Label</span>} disabled />,                   circle: 'grey 400',  border: 'grey 400 / 1px',  ring: '',                                            labelCol: 'grey 900' },
                  ]).map((row, i, arr) => (
                    <tr key={row.label} className={`bg-[var(--color-base-white)]${i < arr.length - 1 ? ' border-b border-[var(--color-grey-300)]' : ''}`}>
                      <td className="py-[var(--spacing-16)] px-[var(--spacing-16)]">
                        <span className="text-[14px] font-medium text-[var(--color-grey-900)]">{row.label}</span>
                      </td>
                      <td className="py-[var(--spacing-16)] px-[var(--spacing-12)]">{row.preview}</td>
                      {[row.circle, row.border, row.ring, row.labelCol].map((val, ci) => (
                        <td key={ci} className="py-[var(--spacing-16)] px-[var(--spacing-12)]">
                          {val ? (
                            <div className="flex flex-col text-[14px] leading-[18px]">
                              <span className="font-semibold text-[#737373]">{['background:', 'border:', 'focus ring:', 'text:'][ci]}</span>
                              <span className="font-medium text-[#737373]">{val}</span>
                            </div>
                          ) : (
                            <span className="text-[14px] text-[var(--color-grey-500)]">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
