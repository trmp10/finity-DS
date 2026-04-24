'use client';

import React, { useState } from 'react';
import { Checkbox, Link } from '@finity/design-system';
import { Check, Close } from '@finity/design-system';
import { Tabs } from '@/components/tabs/Tabs';
import { Section, DemoTable } from '@/app/_components/doc';

const STATES: { label: string; props: React.ComponentProps<typeof Checkbox> }[] = [
  { label: 'Default',       props: { tabIndex: -1 } },
  { label: 'Hover',         props: { tabIndex: -1, className: '[&>div]:border-2 [&>div]:border-[var(--color-grey-900)]' } },
  { label: 'Focus',         props: { tabIndex: -1, className: '[&>div]:outline [&>div]:outline-[3px] [&>div]:outline-offset-[2px] [&>div]:outline-[var(--color-text-default)]' } },
  { label: 'Active',        props: { tabIndex: -1, checked: true, onChange: () => {} } },
  { label: 'Error',         props: { tabIndex: -1, error: true } },
  { label: 'Indeterminate', props: { tabIndex: -1, indeterminate: true } },
  { label: 'Disabled',      props: { tabIndex: -1, disabled: true } },
];

function GuidelineTable({ rows }: { rows: { use: React.ReactNode; avoid: React.ReactNode; implemented: 'Yes' | 'No' | 'Review' }[] }) {
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
            {row.implemented === 'Yes'
              ? <Check size={16} color="#16A34A" strokeWidth={2.5} />
              : <Close size={16} color="#DC2626" />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CheckboxPage() {
  const [tab, setTab] = useState('overview');
  const [updates,  setUpdates]  = useState(true);
  const [products, setProducts] = useState(true);
  const [promos,   setPromos]   = useState(false);
  const [agreed,   setAgreed]   = useState(false);

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
                Checkbox
              </h1>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[520px]">
                Checkboxes allow the user to select one or more items from a set.
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

        {tab === 'overview' && (
          <>
            {/* Demo preview */}
            <div className="mb-[var(--spacing-96)]">
              <div className="bg-[#FAFAFA] p-[var(--spacing-48)] flex items-center justify-center">
                <div className="flex flex-col gap-[var(--spacing-8)] w-[320px]">
                  <p className="text-[16px] font-medium text-[var(--color-text-secondary)] mb-[var(--spacing-4)]">
                    Select the newsletters you'd like to receive:
                  </p>
                  <Checkbox label="Company updates and announcements" checked={updates} onChange={(e) => setUpdates(e.target.checked)} />
                  <Checkbox label="Product news and feature releases" checked={products} onChange={(e) => setProducts(e.target.checked)} />
                  <Checkbox label="Promotions and special offers" checked={promos} onChange={(e) => setPromos(e.target.checked)} />
                </div>
              </div>
            </div>

            {/* States */}
            <Section title="States" compact>
              <DemoTable
                rowHeader="State"
                cols={[
                  { key: 'preview',      label: 'Preview',      className: 'w-[200px] pl-[var(--spacing-32)]' },
                  { key: 'description', label: 'Description' },
                ]}
                rows={STATES.map(({ label, props }) => ({
                  label,
                  cells: [
                    <div key={label} className="pointer-events-none"><Checkbox label={<span className="text-[14px] font-medium text-[var(--color-grey-900)]">Label</span>} {...props} /></div>,
                    <span key={`${label}-d`} className="text-[14px] font-medium text-[var(--color-grey-900)]">
                      {label === 'Default'       && 'Unchecked and ready for interaction'}
                      {label === 'Hover'         && 'Cursor is over the checkbox'}
                      {label === 'Focus'         && 'Focused via keyboard navigation'}
                      {label === 'Active'        && 'Item is selected'}
                      {label === 'Error'         && 'Indicates a validation error, always pair with a HelperText error message'}
                      {label === 'Indeterminate' && 'Some but not all child items are selected'}
                      {label === 'Disabled'      && 'Not interactive, greyed out to communicate unavailability'}
                    </span>,
                  ],
                }))}
              />
            </Section>

            {/* Rich label */}
            <Section title="Rich label" compact>
              <div className="bg-[#FAFAFA] p-[var(--spacing-48)] flex items-center justify-center pointer-events-none">
                <Checkbox
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  label={
                    <span className="text-[16px] leading-[22px] tracking-[0.35px] font-normal text-[var(--color-grey-900)] whitespace-nowrap">
                      {'I agree to the '}
                      <Link href="javascript:void(0)">Terms and Conditions</Link>
                      {' and '}
                      <Link href="javascript:void(0)">Privacy Policy</Link>
                    </span>
                  }
                />
              </div>
            </Section>

            {/* Multi-line label */}
            <Section title="Multi-line label" compact last>
              <div className="bg-[#FAFAFA] p-[var(--spacing-48)] flex items-center justify-center pointer-events-none">
                <div className="max-w-[500px]">
                  <Checkbox
                    label={
                      <span className="text-[16px] leading-[24px] font-normal text-[var(--color-grey-900)]">
                        I agree to receive company updates, promotional content, and product information via email. I understand that I can unsubscribe or change my preferences at any time through my account settings or by using the unsubscribe link in any email.
                      </span>
                    }
                  />
                </div>
              </div>
            </Section>
          </>
        )}

        {/* ── Guidelines ── */}
        {tab === 'guidelines' && (
          <div className="flex flex-col gap-[var(--spacing-48)]">

            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Label</h2>
              <GuidelineTable rows={[
                { use: 'Keep labels concise and scannable', avoid: 'Long descriptive sentences as the primary label', implemented: 'No' },
                { use: 'Align the checkbox to the top when the label spans multiple lines', avoid: 'Centring the checkbox vertically on multi-line labels', implemented: 'No' },
              ]} />
            </div>

            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Selection behaviour</h2>
              <GuidelineTable rows={[
                { use: 'Use for multi-select options or standalone binary choices, like accepting terms and conditions', avoid: 'Using checkboxes as radio buttons where only one option in a group can be selected', implemented: 'No' },
                { use: 'Use the indeterminate state to represent a partially selected group', avoid: 'Leaving parent checkboxes blank when some children are selected', implemented: 'No' },
                { use: 'Pre-select options only when they represent the recommended or most common choice', avoid: 'Pre-selecting all options by default', implemented: 'No' },
              ]} />
            </div>

            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Validation</h2>
              <GuidelineTable rows={[
                { use: 'Use the error state with a HelperText message below to explain what went wrong', avoid: 'Relying on the red border alone to communicate the error', implemented: 'No' },
                { use: 'Validate on form submission, not on every interaction', avoid: 'Showing errors before the user has finished interacting', implemented: 'No' },
              ]} />
            </div>

            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Accessibility</h2>
              <GuidelineTable rows={[
                { use: 'Always associate a label with every checkbox', avoid: 'Rendering a checkbox without any label or aria-label', implemented: 'No' },
                { use: 'Ensure focus ring is always visible when navigating by keyboard', avoid: 'Removing or hiding the focus outline', implemented: 'No' },
                { use: 'Use a not-allowed cursor on disabled checkboxes to communicate unavailability', avoid: 'Using a default cursor on disabled states, which may confuse users', implemented: 'No' },
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
                    {['Preview', 'Box', 'Border', 'Focus ring', 'Label'].map(h => (
                      <th key={h} className="text-left py-[var(--spacing-12)] px-[var(--spacing-12)]">
                        <span className="text-[14px] font-semibold text-[var(--color-text-default)]">{h}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {([
                    { label: 'Default',       preview: <Checkbox tabIndex={-1} label={<span className="text-[14px] font-medium text-[var(--color-grey-900)]">Label</span>} />,                            box: 'white',      border: 'grey 400 / 1px',  ring: '',                                    labelCol: 'grey 900' },
                    { label: 'Hover',         preview: <Checkbox label={<span className="text-[14px] font-medium text-[var(--color-grey-900)]">Label</span>} className="[&>div]:border-2 [&>div]:border-[var(--color-grey-900)]" />, box: 'white', border: 'grey 900 / 2px', ring: '', labelCol: 'grey 900' },
                    { label: 'Focus',         preview: <Checkbox label={<span className="text-[14px] font-medium text-[var(--color-grey-900)]">Label</span>} className="[&>div]:outline [&>div]:outline-[3px] [&>div]:outline-offset-[2px] [&>div]:outline-[var(--color-text-default)]" />, box: 'white', border: 'grey 400 / 1px', ring: 'grey 900 / 3px border weight / 6px radius', labelCol: 'grey 900' },
                    { label: 'Active',        preview: <Checkbox label={<span className="text-[14px] font-medium text-[var(--color-grey-900)]">Label</span>} checked onChange={() => {}} />, box: 'coral 400',  border: '',                 ring: '',                                    labelCol: 'grey 900' },
                    { label: 'Indeterminate', preview: <Checkbox label={<span className="text-[14px] font-medium text-[var(--color-grey-900)]">Label</span>} indeterminate />,               box: 'coral 400',  border: '',                 ring: '',                                    labelCol: 'grey 900' },
                    { label: 'Error',         preview: <Checkbox label={<span className="text-[14px] font-medium text-[var(--color-grey-900)]">Label</span>} error />,                      box: 'white',      border: 'red 600 / 2px',    ring: '',                                    labelCol: 'grey 900' },
                    { label: 'Disabled',      preview: <Checkbox label={<span className="text-[14px] font-medium text-[var(--color-grey-900)]">Label</span>} disabled />,                   box: 'grey 200',   border: 'grey 400 / 1px',   ring: '',                                    labelCol: 'grey 900' },
                  ]).map((row, i, arr) => (
                    <tr key={row.label} className={`bg-[var(--color-base-white)]${i < arr.length - 1 ? ' border-b border-[var(--color-grey-300)]' : ''}`}>
                      <td className="py-[var(--spacing-16)] px-[var(--spacing-16)]">
                        <span className="text-[14px] font-medium text-[var(--color-grey-900)]">{row.label}</span>
                      </td>
                      <td className="py-[var(--spacing-16)] px-[var(--spacing-12)]">{row.preview}</td>
                      {[row.box, row.border, row.ring, row.labelCol].map((val, ci) => (
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
