'use client';

import React, { useState } from 'react';
import { TextField } from '@finity/design-system';
import { Check, Close } from '@finity/design-system';
import { Tabs } from '@/components/tabs/Tabs';
import { Section, DemoTable } from '@/app/_components/doc';

const ICON_INFO  = 'https://www.figma.com/api/mcp/asset/4ae80c30-d63e-4933-b59c-c695f78570f4';
const ICON_ERROR = 'https://www.figma.com/api/mcp/asset/6ea5d07b-ac17-4b51-9818-714537eb80f3';

function FigmaIcon({ src, inset = '4.17%' }: { src: string; inset?: string }) {
  return (
    <div className="shrink-0 mt-[2px] relative size-[16px]">
      <div className="absolute" style={{ inset }}>
        <img alt="" className="absolute inset-0 size-full" src={src} />
      </div>
    </div>
  );
}

function HelperRow({ type = 'default', children }: { type?: 'default' | 'error'; children: string }) {
  const icon  = type === 'error' ? ICON_ERROR : ICON_INFO;
  const color = type === 'error' ? '#DC2626'  : '#525252';
  return (
    <div className="flex items-start gap-[var(--spacing-4)]">
      <FigmaIcon src={icon} />
      <span className="text-[14px] font-medium leading-[20px] tracking-[0.3px]" style={{ color }}>{children}</span>
    </div>
  );
}

function formatCurrency(raw: string): string {
  const [integer, decimal] = raw.split('.');
  const formatted = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return decimal !== undefined ? `${formatted}.${decimal}` : formatted;
}

function AmountField() {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/,/g, '');
    if (raw !== '' && !/^\d*\.?\d*$/.test(raw)) return;
    setValue(raw === '' ? '' : formatCurrency(raw));
  };
  return (
    <TextField
      size="medium"
      label="Amount"
      placeholder="0.00"
      prefix="£"
      value={value}
      onChange={handleChange}
      onClear={() => setValue('')}
    />
  );
}

function ErrorStateDemo() {
  const [value, setValue] = useState('Value');
  return (
    <div className="flex flex-col gap-[var(--spacing-4)]">
      <TextField
        size="medium"
        label="Label"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="[&>div:first-of-type]:[box-shadow:0_0_0_2px_var(--color-red-600)] [&>div:first-of-type:hover:not(:focus-within)]:[box-shadow:0_0_0_2px_var(--color-red-600)] [&>div:first-of-type:focus-within]:[box-shadow:0_0_0_3px_var(--color-red-600)]"
      />
      <HelperRow type="error">Error message</HelperRow>
    </div>
  );
}

const STATES: { label: string; description: string; node: React.ReactNode }[] = [
  { label: 'Default',     description: 'Empty and ready for input',                                                                    node: <TextField tabIndex={-1} size="medium" label="Label" placeholder="Placeholder" /> },
  { label: 'Filled',      description: 'Contains a user-entered value',                                                                node: <TextField tabIndex={-1} size="medium" label="Label" defaultValue="Value" /> },
  { label: 'Error',       description: 'Indicates a validation error, always pair with an error message below the field',              node: <ErrorStateDemo /> },
  { label: 'Read-only',   description: 'Value is displayed but cannot be edited by the user',                                          node: <TextField tabIndex={-1} size="medium" label="Label" defaultValue="Value" readOnly /> },
  { label: 'Disabled',    description: 'Not interactive, greyed out to communicate unavailability',                                    node: <TextField tabIndex={-1} size="medium" label="Label" placeholder="Placeholder" disabled /> },
  { label: 'Helper text', description: 'Additional guidance shown below the field to support the user',                                node: <div className="flex flex-col gap-[var(--spacing-4)]"><TextField tabIndex={-1} size="medium" label="Label" placeholder="Placeholder" /><HelperRow>Optional helper text</HelperRow></div> },
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

function formatNI(value: string): string {
  const clean = value.replace(/\s/g, '').toUpperCase().slice(0, 9);
  let result = '';
  for (let i = 0; i < clean.length; i++) {
    if (i === 2 || i === 4 || i === 6 || i === 8) result += ' ';
    result += clean[i];
  }
  return result;
}

export default function TextFieldPage() {
  const [tab, setTab] = useState('overview');
  const [email,   setEmail]   = useState('user@finity.co.uk');
  const [ni,      setNi]      = useState('');
  const [bankRef, setBankRef] = useState('');

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
                Text field
              </h1>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[520px]">
                A single-line input field designed for capturing concise, short-form textual data.
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
                <div className="flex flex-col gap-[var(--spacing-16)] w-[320px]">
                  <TextField
                    size="medium"
                    label="Email address"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    size="medium"
                    label="NI number"
                    value={ni}
                    onChange={(e) => setNi(formatNI(e.target.value))}
                  />
                  <TextField
                    size="medium"
                    label="Bank reference (Optional)"
                    value={bankRef}
                    onChange={(e) => setBankRef(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* States */}
            <Section title="States" compact>
              <DemoTable
                rowHeader="State"
                cols={[
                  { key: 'preview',     label: 'Preview',     className: 'w-[280px]' },
                  { key: 'description', label: 'Description' },
                ]}
                rows={STATES.map(({ label, description, node }) => ({
                  label,
                  cells: [
                    <div key={label}>{node}</div>,
                    <span key={`${label}-d`} className="text-[14px] font-medium text-[var(--color-grey-900)]">{description}</span>,
                  ],
                }))}
              />
            </Section>

            {/* Prefix and Suffix */}
            <Section title="Prefix and suffix" compact>
              <div className="flex gap-[var(--spacing-16)]">
                {([
                  { label: 'Prefix', field: <AmountField /> },
                  { label: 'Suffix', field: <TextField size="medium" label="Percentage" placeholder="0" suffix="%" /> },
                ]).map(({ label, field }) => (
                  <div key={label} className="flex-1">
                    <div className="bg-[#FAFAFA] rounded-lg h-[160px] flex items-center justify-center">
                      <div className="w-[240px]">{field}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Sizes */}
            <Section title="Sizes" compact last>
              <div className="flex gap-[var(--spacing-16)]">
                {([
                  { label: 'Large', px: '48px', size: 'large' as const },
                  { label: 'Medium', px: '40px', size: 'medium' as const },
                ] as const).map(({ label, px, size }) => (
                  <div key={size} className="flex-1 flex flex-col gap-[var(--spacing-8)]">
                    <div className="bg-[#FAFAFA] rounded-lg h-[160px] flex items-center justify-center">
                      <div className="w-[240px]">
                        <TextField label="Label" placeholder="Placeholder" size={size} />
                      </div>
                    </div>
                    <p className="text-[14px] leading-[20px]">
                      <span className="font-semibold text-[var(--color-text-default)]">{label}</span>
                      <span className="font-medium text-[var(--color-text-tertiary)]"> {px}</span>
                    </p>
                  </div>
                ))}
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
                { use: 'Use for short, single-line text input such as names, emails, or reference numbers', avoid: 'Using a text field when a multi-line response is expected — use a TextArea instead', implemented: 'No' },
                { use: 'Always provide a label so users understand what to enter', avoid: 'Relying on placeholder text alone as a label — it disappears on input', implemented: 'No' },
              ]} />
            </div>

            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Label</h2>
              <GuidelineTable rows={[
                { use: 'Keep labels short and descriptive', avoid: 'Long sentences or questions as a field label', implemented: 'No' },
                { use: 'Use sentence case for all labels', avoid: 'Title case or all caps labels', implemented: 'No' },
                { use: 'Indicate optional fields with "(Optional)" in the label', avoid: 'Marking required fields with an asterisk without explanation', implemented: 'No' },
              ]} />
            </div>

            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Validation</h2>
              <GuidelineTable rows={[
                { use: 'Use the error state with a HelperText error message below to explain what went wrong', avoid: 'Relying on the red border alone to communicate the error', implemented: 'No' },
                { use: 'Validate on form submission, not on every keystroke', avoid: 'Showing errors before the user has finished typing', implemented: 'No' },
                { use: 'Use helper text to set expectations before an error occurs', avoid: 'Only showing guidance after the user has already made a mistake', implemented: 'No' },
              ]} />
            </div>

            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Prefix and suffix</h2>
              <GuidelineTable rows={[
                { use: 'Use a prefix or suffix to provide essential context for the value (e.g. £ for currency, % for percentage)', avoid: 'Using prefix or suffix for decorative purposes only', implemented: 'No' },
                { use: 'Keep prefix and suffix text short — a single symbol or short unit', avoid: 'Long words or phrases in the prefix or suffix slot', implemented: 'No' },
              ]} />
            </div>

            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Accessibility</h2>
              <GuidelineTable rows={[
                { use: 'Always associate a label with every text field using htmlFor or a wrapping label', avoid: 'Rendering a text field without any label or aria-label', implemented: 'No' },
                { use: 'Ensure focus ring is always visible when navigating by keyboard', avoid: 'Removing or hiding the focus outline', implemented: 'No' },
                { use: 'Use a not-allowed cursor on disabled text fields to communicate unavailability', avoid: 'Using a default cursor on disabled states, which may confuse users', implemented: 'No' },
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
                    {['Preview', 'Background', 'Border', 'Label', 'Placeholder'].map(h => (
                      <th key={h} className="text-left py-[var(--spacing-12)] px-[var(--spacing-12)]">
                        <span className="text-[14px] font-semibold text-[var(--color-text-default)]">{h}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {([
                    { label: 'Default',   preview: <TextField tabIndex={-1} size="medium" label="Label" placeholder="Placeholder" />,                                                                                             bg: 'white',     border: 'grey 400 / 1px',  labelCol: 'grey 700', placeholder: 'grey 500' },
                    { label: 'Hover',     preview: <TextField tabIndex={-1} size="medium" label="Label" placeholder="Placeholder" className="[&>div:first-of-type]:[box-shadow:0_0_0_2px_var(--color-text-default)]" />,         bg: 'white',     border: 'grey 900 / 2px',  labelCol: 'grey 700', placeholder: 'grey 500' },
                    { label: 'Focus',     preview: <TextField tabIndex={-1} size="medium" label="Label" defaultValue="Value" className="[&>div:first-of-type]:[box-shadow:0_0_0_3px_var(--color-text-default)]" />,              bg: 'white',     border: 'grey 900 / 3px',  labelCol: 'grey 700', placeholder: '' },
                    { label: 'Active',    preview: <TextField tabIndex={-1} size="medium" label="Label" defaultValue="Value" />,                                                                                                  bg: 'white',     border: 'grey 400 / 1px',  labelCol: 'grey 700', placeholder: '' },
                    { label: 'Error',     preview: <div className="flex flex-col gap-[var(--spacing-4)]"><TextField tabIndex={-1} size="medium" label="Label" defaultValue="Value" className="[&>div:first-of-type]:[box-shadow:0_0_0_2px_var(--color-red-600)]" /><HelperRow type="error">Error message</HelperRow></div>, bg: 'white',     border: 'red 600 / 2px',   labelCol: 'grey 700', placeholder: '' },
                    { label: 'Read-only', preview: <TextField tabIndex={-1} size="medium" label="Label" defaultValue="Value" readOnly />,                                                                                         bg: 'grey 100',  border: 'grey 300 / 1px',  labelCol: 'grey 700', placeholder: '' },
                    { label: 'Disabled',  preview: <TextField tabIndex={-1} size="medium" label="Label" placeholder="Placeholder" disabled />,                                                                                    bg: 'grey 200',  border: '—',               labelCol: 'grey 700', placeholder: 'grey 500' },
                    { label: 'Prefix',    preview: <TextField tabIndex={-1} size="medium" label="Label" placeholder="0.00" prefix="£" />,                                                                                        bg: 'white',     border: 'grey 400 / 1px',  labelCol: 'grey 700', placeholder: 'grey 500' },
                    { label: 'Suffix',    preview: <TextField tabIndex={-1} size="medium" label="Label" placeholder="0" suffix="%" />,                                                                                           bg: 'white',     border: 'grey 400 / 1px',  labelCol: 'grey 700', placeholder: 'grey 500' },
                  ]).map((row, i, arr) => (
                    <tr key={row.label} className={`bg-[var(--color-base-white)]${i < arr.length - 1 ? ' border-b border-[var(--color-grey-300)]' : ''}`}>
                      <td className="py-[var(--spacing-16)] px-[var(--spacing-16)]">
                        <span className="text-[14px] font-medium text-[var(--color-grey-900)]">{row.label}</span>
                      </td>
                      <td className="py-[var(--spacing-16)] px-[var(--spacing-12)] w-[260px]">
                        <div className="pointer-events-none">{row.preview}</div>
                      </td>
                      {[row.bg, row.border, row.labelCol, row.placeholder].map((val, ci) => (
                        <td key={ci} className="py-[var(--spacing-16)] px-[var(--spacing-12)]">
                          {val && val !== '—' ? (
                            <div className="flex flex-col text-[14px] leading-[18px]">
                              <span className="font-semibold text-[#737373]">{['background:', 'border:', 'label:', 'placeholder:'][ci]}</span>
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
