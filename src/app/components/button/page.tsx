'use client';

import React, { useState } from 'react';
import { Button, type ButtonVariant } from '@finity/design-system';
import { Add, Check, Close, Delete } from '@finity/design-system';
import { InfoFilled } from '@/components/icons/feedback';
import { Tabs } from '@/components/tabs/Tabs';
import { Section, DemoTable } from '@/app/_components/doc';

const VARIANTS = [
  { id: 'primary',   label: 'Primary' },
  { id: 'secondary', label: 'Secondary' },
  { id: 'tertiary',  label: 'Tertiary' },
  { id: 'emphasis',  label: 'Emphasis' },
  { id: 'danger',    label: 'Danger' },
] as const;

function GuidelineTable({ rows }: { rows: { use: React.ReactNode; avoid: React.ReactNode; implemented: 'Yes' | 'No' | 'Review'; note?: string }[] }) {
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
          <div className="flex-1">
            <div className="text-[14px] font-medium text-[var(--color-grey-900)] leading-[20px] text-pretty">{row.avoid}</div>
            {row.note && <p className="mt-[var(--spacing-4)] text-[14px] font-medium text-[var(--color-grey-700)] leading-[20px] text-pretty">{row.note}</p>}
          </div>
          <div className="w-[120px] shrink-0">
            {row.implemented === 'Yes'
              ? <Check size={16} color="#16A34A" strokeWidth={2.5} />
              : row.implemented === 'Review'
              ? <div className="flex items-center gap-[var(--spacing-4)]"><InfoFilled size={16} color="#D97706" /><span className="text-[13px] font-medium text-[#D97706]">Need review</span></div>
              : <Close size={16} color="#DC2626" />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ButtonPage() {
  const [tab, setTab] = useState('overview');

  return (
    <main className="bg-[var(--color-base-white)] min-h-screen">

      {/* ─── Header ───────────────────────────────────────────────── */}
      <div>
        <div className="max-w-[1200px] mx-auto px-[var(--spacing-32)] pt-[var(--spacing-64)] pb-[var(--spacing-64)]">

          {/* Category label */}
          <p className="text-[20px] leading-[28px] tracking-[0.3px] mb-[var(--spacing-48)]">
            <span className="font-medium text-[var(--color-text-secondary)]">Component → </span>
            <span className="font-semibold text-[var(--color-text-default)]">Action</span>
          </p>

          {/* Title + metadata row */}
          <div className="flex items-start justify-between gap-[var(--spacing-64)] mb-[var(--spacing-40)]">
            <div className="flex flex-col gap-[var(--spacing-16)]">
              <div className="flex items-center gap-[var(--spacing-12)]">
                <h1 className="text-[48px] font-semibold leading-[48px] text-[var(--color-text-default)]">
                  Button
                </h1>
                <span className="inline-flex items-center h-[24px] px-[var(--spacing-8)] rounded-[4px] bg-[var(--color-yellow-100)] border border-[var(--color-yellow-800)] text-[14px] font-medium tracking-[0.3px] leading-[20px] text-[var(--color-yellow-800)] whitespace-nowrap">
                  Eng beta
                </span>
              </div>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[520px]">
                Buttons trigger actions or navigate users to another page. They come in multiple styles to communicate intent and guide users through a flow.
              </p>
            </div>

            {/* Metadata */}
            <div className="shrink-0 w-[280px]">
              {[
                { label: 'Created by',     value: 'Toni' },
                { label: 'Implemented by', value: 'Sam' },
                { label: 'Last updated',   value: '13/04/2026' },
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
            { id: 'overview',    label: 'Overview' },
            { id: 'guidelines',  label: 'Guidelines' },
            { id: 'specs',       label: 'Specs' },
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
            {/* Preview */}
            <div className="mb-[var(--spacing-96)]">
              <div className="bg-[#FAFAFA] p-[var(--spacing-48)] flex items-center justify-center gap-[var(--spacing-8)]">
                <Button variant="secondary" size="medium">Add employee</Button>
                <Button variant="primary" size="medium">Process payroll</Button>
              </div>
            </div>

            {/* Variants */}
            <Section title="Variants" compact>
              <DemoTable
                rowHeader="Type"
                cols={[
                  { key: 'variant',    label: 'Preview',        className: 'w-[140px]' },
                  { key: 'emphasis',   label: 'Emphasis',       className: 'w-[100px]' },
                  { key: 'perContext', label: '# per context',  className: 'w-[120px]' },
                  { key: 'usage',      label: 'Usage' },
                ]}
                rows={[
                  { label: 'Primary',   cells: [<Button key="p"   variant="primary"   size="medium">Button</Button>, <span key="pe"   className="text-[14px] font-medium text-[var(--color-grey-900)]">High</span>,   <span key="ppc"  className="text-[14px] font-medium text-[var(--color-grey-900)]">1</span>,      <span key="pu"   className="text-[14px] font-medium text-[var(--color-grey-900)]"><span className="font-semibold">The most important action</span> moves a flow forward, completes a task, or confirms a decision</span>] },
                  { label: 'Secondary', cells: [<Button key="s"   variant="secondary" size="medium">Button</Button>, <span key="se"   className="text-[14px] font-medium text-[var(--color-grey-900)]">Medium</span>, <span key="spc"  className="text-[14px] font-medium text-[var(--color-grey-900)]">Many</span>,  <span key="su"   className="text-[14px] font-medium text-[var(--color-grey-900)]"><span className="font-semibold">Supporting actions</span> that sit alongside content or a primary button</span>] },
                  { label: 'Tertiary',  cells: [<Button key="t"   variant="tertiary"  size="medium">Button</Button>, <span key="te"   className="text-[14px] font-medium text-[var(--color-grey-900)]">Low</span>,    <span key="tpc"  className="text-[14px] font-medium text-[var(--color-grey-900)]">A few</span>, <span key="tu"   className="text-[14px] font-medium text-[var(--color-grey-900)]"><span className="font-semibold">Dismissive actions</span> that give users a way out, such as cancelling, going back, or skipping a step</span>] },
                  { label: 'Icon only', cells: [<Button key="io"  variant="tertiary"  size="medium" iconOnly><Add size={18} /></Button>, <span key="ioe"  className="text-[14px] font-medium text-[var(--color-grey-900)]">Low</span>, <span key="iopc" className="text-[14px] font-medium text-[var(--color-grey-900)]">A few</span>, <span key="iou"  className="text-[14px] font-medium text-[var(--color-grey-900)]">Well-understood, space-constrained actions (e.g. close, add)</span>] },
                ]}
              />
            </Section>

            {/* Danger */}
            <Section title="Danger" compact>
              <DemoTable
                rowHeader="Type"
                cols={[
                  { key: 'variant',    label: 'Preview',        className: 'w-[140px]' },
                  { key: 'emphasis',   label: 'Emphasis',       className: 'w-[100px]' },
                  { key: 'perContext', label: '# per context',  className: 'w-[120px]' },
                  { key: 'usage',      label: 'Usage' },
                ]}
                rows={[
                  { label: 'Primary',   cells: [<Button key="d"  variant="danger"   size="medium">Button</Button>,                                                                          <span key="de"  className="text-[14px] font-medium text-[var(--color-grey-900)]">High</span>,   <span key="dpc"  className="text-[14px] font-medium text-[var(--color-grey-900)]">1</span>,    <span key="du"  className="text-[14px] font-medium text-[var(--color-grey-900)]">Destructive or irreversible actions such as delete or remove</span>] },
                  { label: 'Tertiary',  cells: [<Button key="dt" variant="tertiary" size="medium" className="!text-[var(--color-red-600)]">Button</Button>,                                <span key="dte" className="text-[14px] font-medium text-[var(--color-grey-900)]">Medium</span>, <span key="dtpc" className="text-[14px] font-medium text-[var(--color-grey-900)]">1</span>,    <span key="dtu" className="text-[14px] font-medium text-[var(--color-grey-900)]">A lower-emphasis destructive action where a filled button would be too heavy</span>] },
                  { label: 'Icon only', cells: [<Button key="di" variant="tertiary" size="medium" iconOnly className="!text-[var(--color-red-600)]"><Delete size={18} /></Button>,         <span key="die" className="text-[14px] font-medium text-[var(--color-grey-900)]">Low</span>,    <span key="dipc" className="text-[14px] font-medium text-[var(--color-grey-900)]">Many</span>, <span key="diu" className="text-[14px] font-medium text-[var(--color-grey-900)]">A space-constrained destructive action, mostly used for tables</span>] },
                ]}
              />
            </Section>

            {/* Others */}
            <div className="mb-[var(--spacing-80)]">
              <DemoTable
                rowHeader="Type"
                cols={[
                  { key: 'variant',    label: 'Preview',        className: 'w-[140px]' },
                  { key: 'emphasis',   label: 'Emphasis',       className: 'w-[100px]' },
                  { key: 'perContext', label: '# per context',  className: 'w-[120px]' },
                  { key: 'usage',      label: 'Usage' },
                ]}
                rows={[
                  { label: 'Emphasis', cells: [<Button key="e"   variant="emphasis" size="medium">Button</Button>,   <span key="ee"   className="text-[14px] font-medium text-[var(--color-grey-900)]">High</span>, <span key="epc"  className="text-[14px] font-medium text-[var(--color-grey-900)]">1</span>, <span key="eu"   className="text-[14px] font-medium text-[var(--color-grey-900)]">Can be used for branded or promotional CTAs, onboarding flows, and marketing surfaces</span>] },
                  { label: 'Disabled', cells: [<Button key="dis" variant="primary"  size="medium" disabled>Button</Button>, <span key="dise" className="text-[14px] font-medium text-[var(--color-grey-900)]">–</span>, <span key="dispc" className="text-[14px] font-medium text-[var(--color-grey-900)]">–</span>, <span key="disu" className="text-[14px] font-medium text-[var(--color-grey-900)]">When an action exists but prerequisites have not been met</span>] },
                  { label: 'Loading',  cells: [<Button key="ld"  variant="primary"  size="medium" loading>Button</Button>,  <span key="lde"  className="text-[14px] font-medium text-[var(--color-grey-900)]">–</span>, <span key="ldpc" className="text-[14px] font-medium text-[var(--color-grey-900)]">–</span>, <span key="ldu"  className="text-[14px] font-medium text-[var(--color-grey-900)]">Indicates an action is in progress. The button is non-interactive until complete.</span>] },
                ]}
              />
            </div>

            {/* Sizes */}
            <Section title="Sizes" compact last>
              <div className="grid grid-cols-3 gap-[var(--spacing-16)]">
                {([['large', '48px'], ['medium', '40px'], ['small', '32px']] as const).map(([size, px]) => (
                  <div key={size}>
                    <div className="flex items-center justify-center bg-[#FAFAFA] rounded-[var(--spacing-12)] h-[240px] pointer-events-none">
                      <Button variant="primary" size={size}>{size.charAt(0).toUpperCase() + size.slice(1)}</Button>
                    </div>
                    <p className="mt-[var(--spacing-12)] text-[14px] font-medium text-[var(--color-grey-900)]">{size.charAt(0).toUpperCase() + size.slice(1)} <span className="font-medium text-[var(--color-text-tertiary)]">{px}</span></p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Note */}
            <div className="mt-[var(--spacing-48)] flex items-center gap-[var(--spacing-8)] p-[var(--spacing-12)] rounded-[var(--spacing-8)] bg-[var(--color-grey-50)] border border-[var(--color-grey-200)]">
              <InfoFilled size={16} color="var(--color-yellow-600)" />
              <p className="text-[14px] font-medium text-[var(--color-text-default)]">Note: need to add button with icons</p>
            </div>
          </>
        )}

        {/* ── Guidelines ── */}
        {tab === 'guidelines' && (
          <div className="flex flex-col gap-[var(--spacing-48)]">

            {/* Labels */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">
                Labels
              </h2>
              <GuidelineTable rows={[
                { use: 'Start with an action verb: "Save changes", "Add employee"', avoid: 'Vague labels like "OK", "Yes", "Click here"', implemented: 'No' },
                { use: 'Sentence case for all labels', avoid: 'Title case or all caps', implemented: 'Yes' },
                { use: '1 to 3 words where possible', avoid: 'Full sentences or labels over 5 words', implemented: 'No' },
                { use: 'Match the label to the outcome: "Delete employee", not "Confirm"', avoid: 'Generic confirmations that don\'t describe the action', implemented: 'No' },
              ]} />
            </div>

            {/* Hierarchy */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">
                Hierarchy
              </h2>
              <GuidelineTable rows={[
                { use: 'One primary button per view or section', avoid: 'Multiple primary buttons competing for attention', implemented: 'No' },
                { use: 'Primary → Secondary → Tertiary in order of visual weight', avoid: 'Mixing weights without a clear hierarchy', implemented: 'No' },
                { use: 'Primary action on the right in button groups', avoid: 'Primary on the left', note: 'Exception: mobile full-width stacked layouts.', implemented: 'No' },
              ]} />
            </div>

            {/* Icon buttons */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">
                Icon buttons
              </h2>
              <GuidelineTable rows={[
                { use: 'Use universally understood icons (close, add, search)', avoid: 'Ambiguous icons users may not recognise', implemented: 'No' },
                { use: 'Always pair with a tooltip', avoid: 'Icon-only buttons with no accessible label', implemented: 'No' },
              ]} />
            </div>

            {/* Disabled state */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">
                Disabled state
              </h2>
              <GuidelineTable rows={[
                { use: 'Use sparingly, only when prerequisites are unmet', avoid: 'Using disabled as a default or hiding actions entirely', implemented: 'No' },
                { use: 'Always explain why via tooltip or helper text', avoid: 'Leaving the user no way to unblock the action', implemented: 'No' },
                { use: 'Show a not-allowed cursor', avoid: 'Default cursor with no feedback', implemented: 'No' },
              ]} />
            </div>

            {/* Loading state */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">
                Loading state
              </h2>
              <GuidelineTable rows={[
                { use: 'Show a spinner to indicate an action is in progress', avoid: 'Leaving the button in its default state while processing', implemented: 'No' },
                { use: 'Show a not-allowed cursor while loading', avoid: 'Default cursor, giving no feedback that the button is non-interactive', implemented: 'No' },
                { use: 'Keep the button non-interactive until complete', avoid: 'Allowing repeated clicks during processing', implemented: 'No' },
              ]} />
            </div>

            {/* Danger actions */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">
                Danger actions
              </h2>
              <GuidelineTable rows={[
                { use: 'Require a confirmation step before destructive actions', avoid: 'Executing irreversible actions on a single click', implemented: 'No' },
                { use: 'Use danger only for genuinely destructive actions', avoid: 'Danger styling for warnings or non-destructive actions', implemented: 'No' },
              ]} />
            </div>

            {/* Sizes */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">
                Sizes
              </h2>
              <GuidelineTable rows={[
                { use: 'Medium for most UI contexts', avoid: 'Defaulting to large or small when medium fits', implemented: 'No' },
                { use: 'Small for low-priority actions or space-constrained layouts', avoid: 'Small as the default, reducing legibility and tap targets', implemented: 'No' },
                { use: 'Large for CTAs on marketing or onboarding surfaces', avoid: 'Large in dense layouts where it draws too much weight', implemented: 'No' },
              ]} />
            </div>

            {/* Spacing */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">
                Spacing
              </h2>
              <GuidelineTable rows={[
                { use: '8px gap between buttons inline', avoid: 'Inconsistent gaps that break visual grouping', implemented: 'No' },
                { use: '8px gap between buttons stacked', avoid: 'Collapsing spacing between stacked buttons', implemented: 'No' },
                { use: 'Width fits the label', avoid: 'Stretching buttons to fill the container', implemented: 'Review' },
              ]} />
            </div>

            {/* Placement */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">
                Placement
              </h2>
              <GuidelineTable rows={[
                { use: 'Secondary left, primary right', avoid: 'Primary on the left, disrupting reading order', implemented: 'Review' },
                { use: 'Right-align button groups in dialogs and forms', avoid: 'Left-aligning in confirmation contexts', implemented: 'Review' },
                { use: 'Primary on top in full-width stacked mobile layouts', avoid: 'Primary below the fold in stacked views', implemented: 'Review' },
                { use: 'Danger on the right, cancel on the left for destructive confirmations', avoid: 'Danger on the left where it may be triggered accidentally', implemented: 'Review' },
              ]} />
            </div>

          </div>
        )}

        {/* ── Specs ── */}
        {tab === 'specs' && (
          <div>
            <h2 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.01em] text-[var(--color-text-default)] mb-[var(--spacing-16)]">States</h2>
            <div className="w-full pointer-events-none [&_*]:[animation-play-state:paused]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-grey-100)] border-b border-[var(--color-grey-300)]">
                    <th className="text-left py-[var(--spacing-12)] px-[var(--spacing-16)] w-[120px]">
                      <span className="text-[14px] font-semibold text-[var(--color-text-default)]">Variant</span>
                    </th>
                    {['Default', 'Hover', 'Active', 'Focus', 'Loading'].map(s => (
                      <th key={s} className="text-left py-[var(--spacing-12)] px-[var(--spacing-12)]">
                        <span className="text-[14px] font-semibold text-[var(--color-text-default)]">{s}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {([
                    {
                      label:   'Primary',
                      variant: 'primary' as ButtonVariant,
                      states: [
                        { label: 'default', className: '',                                                                              token: 'background: grey 800'   },
                        { label: 'hover',   className: '!bg-[var(--color-base-black)]',                                                 token: 'background: black' },
                        { label: 'active',  className: '!bg-[var(--color-grey-800)]',                                                  token: 'background: grey 800'   },
                        { label: 'focus',   className: '!ring-[3px] !ring-[var(--color-grey-800)] !ring-offset-2 !outline-none !border-transparent', token: 'focus ring: grey 800' },
                        { label: 'loading', className: '!bg-[var(--color-grey-400)]',                                                  token: 'background: grey 400'   },
                      ],
                    },
                    {
                      label:   'Secondary',
                      variant: 'secondary' as ButtonVariant,
                      states: [
                        { label: 'default', className: '',                                                                              token: 'background: white / grey 400' },
                        { label: 'hover',   className: '!bg-[var(--color-grey-100)]',                                                   token: 'background: grey 100'         },
                        { label: 'active',  className: '!bg-[var(--color-grey-200)]',                                                  token: 'background: grey 200'         },
                        { label: 'focus',   className: '!ring-[3px] !ring-[var(--color-grey-800)] !ring-offset-2 !outline-none !border-white', token: 'focus ring: grey 800' },
                        { label: 'loading', className: '',                                                                              token: 'background: white'            },
                      ],
                    },
                    {
                      label:   'Tertiary',
                      variant: 'tertiary' as ButtonVariant,
                      states: [
                        { label: 'default', className: '',                                                                              token: 'background: transparent' },
                        { label: 'hover',   className: '!bg-[var(--color-grey-100)]',                                                   token: 'background: grey 100'    },
                        { label: 'active',  className: '!bg-[var(--color-grey-200)]',                                                  token: 'background: grey 200'    },
                        { label: 'focus',   className: '!ring-[3px] !ring-[var(--color-grey-800)] !ring-offset-2 !outline-none !border-transparent', token: 'focus ring: grey 800' },
                        { label: 'loading', className: '',                                                                              token: 'background: transparent' },
                      ],
                    },
                    {
                      label:   'Danger',
                      variant: 'danger' as ButtonVariant,
                      states: [
                        { label: 'default', className: '!bg-[var(--color-red-600)]',                                                   token: 'background: red 600' },
                        { label: 'hover',   className: '!bg-[var(--color-red-700)]',                                                    token: 'background: red 700' },
                        { label: 'active',  className: '!bg-[var(--color-red-600)]',                                                    token: 'background: red 600' },
                        { label: 'focus',   className: '!ring-[3px] !ring-[var(--color-grey-800)] !ring-offset-2 !outline-none !border-transparent', token: 'focus ring: grey 800' },
                        { label: 'loading', className: '!bg-[var(--color-red-400)]',                                                    token: 'background: red 400'  },
                      ],
                    },
                    {
                      label:   'Emphasis',
                      variant: 'emphasis' as ButtonVariant,
                      states: [
                        { label: 'default', className: '!bg-[var(--color-coral-400)]',                                                  token: 'background: coral 400' },
                        { label: 'hover',   className: '!bg-[var(--color-coral-500)]',                                                  token: 'background: coral 500' },
                        { label: 'active',  className: '!bg-[var(--color-coral-400)]',                                                  token: 'background: coral 400' },
                        { label: 'focus',   className: '!ring-[3px] !ring-[var(--color-grey-800)] !ring-offset-2 !outline-none !border-transparent', token: 'focus ring: grey 800' },
                        { label: 'loading', className: '!bg-[var(--color-coral-300)]',                                                  token: 'background: coral 300' },
                      ],
                    },
                    {
                      label:   'Disabled',
                      variant: 'primary' as ButtonVariant,
                      states: [
                        { label: 'disabled', className: '', token: 'background: grey 200|text: grey 400' },
                        { label: 'empty',    className: '', token: '' },
                        { label: 'empty',    className: '', token: '' },
                        { label: 'empty',    className: '', token: '' },
                        { label: 'empty',    className: '', token: '' },
                      ],
                    },
                  ]).map((row, i, arr) => (
                    <tr key={row.label} className={`bg-[var(--color-base-white)]${i < arr.length - 1 ? ' border-b border-[var(--color-grey-300)]' : ''}`}>
                      <td className="py-[var(--spacing-16)] px-[var(--spacing-12)] align-top">
                        <span className="text-[14px] font-medium text-[var(--color-grey-900)]">{row.label}</span>
                      </td>
                      {row.states.map((state, si) => (
                        <td key={`${state.label}-${si}`} className="py-[var(--spacing-16)] px-[var(--spacing-12)] align-top">
                          {state.label !== 'empty' && (
                            <div className="flex flex-col items-start gap-[var(--spacing-16)]">
                              {state.label === 'disabled' ? (
                                <Button variant={row.variant} size="medium" disabled>Button</Button>
                              ) : state.label === 'loading' ? (
                                <Button variant={row.variant} size="medium" loading className={state.className}>Button</Button>
                              ) : (
                                <Button variant={row.variant} size="medium" className={state.className}>Button</Button>
                              )}
                              {state.token && (
                                <div className="flex flex-col text-[14px] font-medium text-[var(--color-text-tertiary)] leading-[18px]">
                                  {state.token.split('|').map((pair, pi) => (
                    <React.Fragment key={pi}>
                      {pair.trim().split(': ').map((line, idx) => (
                        <span key={idx} className={`${pi > 0 && idx === 0 ? 'mt-[var(--spacing-8)]' : ''} ${idx === 0 ? 'font-semibold text-[var(--color-grey-500)]' : 'text-[var(--color-grey-500)]'}`}>{idx === 0 ? `${line}:` : line}</span>
                      ))}
                    </React.Fragment>
                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Spacing specs */}
            <div className="mt-[var(--spacing-64)]">
              <h2 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.01em] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Spacing</h2>
              <div className="grid grid-cols-3 gap-[var(--spacing-16)]">
                {([
                  { name: 'Large',  height: 48, padding: 20, fontSize: '16px', lineHeight: '24px' },
                  { name: 'Medium', height: 40, padding: 16, fontSize: '16px', lineHeight: '24px' },
                  { name: 'Small',  height: 32, padding: 10, fontSize: '14px', lineHeight: '20px' },
                ] as const).map(({ name, height, padding, fontSize, lineHeight }) => {
                  return (
                    <div key={name}>
                      {/* Card */}
                      <div className="bg-[#FAFAFA] rounded-[var(--spacing-12)] flex flex-col items-center justify-center gap-[var(--spacing-16)] p-[var(--spacing-32)] h-[240px]">
                        {/* Diagram */}
                        <div className="relative mt-[var(--spacing-8)]">
                          {/* Button + horizontal labels — centered in card */}
                          <div className="flex flex-col" style={{ gap: '3px' }}>
                            <div
                              className="inline-flex items-stretch rounded-full border border-[var(--color-grey-400)] overflow-hidden"
                              style={{ height: `${height}px` }}
                            >
                              <div className="border-r border-dashed border-[var(--color-coral-400)]" style={{ width: `${padding}px`, backgroundColor: '#FDECEA' }} />
                              <div className="flex items-center bg-[var(--color-base-white)]">
                                <span style={{ fontSize }} className="font-medium text-[var(--color-grey-900)]">{name}</span>
                              </div>
                              <div className="border-l border-dashed border-[var(--color-coral-400)]" style={{ width: `${padding}px`, backgroundColor: '#FDECEA' }} />
                            </div>
                            {/* Horizontal labels */}
                            <div className="flex w-full">
                              <div className="flex justify-center" style={{ width: `${padding}px` }}>
                                <span className="text-[11px] font-medium text-[var(--color-coral-500)]">{padding}</span>
                              </div>
                              <div className="flex-1" />
                              <div className="flex justify-center" style={{ width: `${padding}px` }}>
                                <span className="text-[11px] font-medium text-[var(--color-coral-500)]">{padding}</span>
                              </div>
                            </div>
                          </div>
                          {/* Height annotation — absolute so it doesn't shift the button */}
                          <div className="absolute top-0 left-full ml-[var(--spacing-8)] flex items-center gap-[4px]" style={{ height: `${height}px` }}>
                            <div className="flex flex-col items-center h-full">
                              <div className="w-[6px] h-[1px] bg-[var(--color-coral-400)]" />
                              <div className="w-[1px] flex-1 bg-[var(--color-coral-400)]" />
                              <div className="w-[6px] h-[1px] bg-[var(--color-coral-400)]" />
                            </div>
                            <span className="text-[11px] font-medium text-[var(--color-coral-500)]">{height}</span>
                          </div>
                        </div>
                      </div>
                      {/* Label below card */}
                      <div className="mt-[var(--spacing-12)] flex flex-col gap-[var(--spacing-4)]">
                        <p className="text-[14px] font-medium text-[var(--color-grey-900)]"><span className="font-semibold">Height:</span> {height}px</p>
                        <p className="text-[14px] font-medium text-[var(--color-grey-900)]"><span className="font-semibold">Padding:</span> {padding}px</p>
                        <p className="text-[14px] font-medium text-[var(--color-grey-900)]"><span className="font-semibold">Font size:</span> {fontSize}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

      </div>

    </main>
  );
}
