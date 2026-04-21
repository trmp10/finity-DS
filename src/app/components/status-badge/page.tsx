'use client';

import React, { useState } from 'react';
import { StatusBadge, type StatusBadgeType, Check, Close } from '@finity/design-system';
import { InfoFilled } from '@/components/icons/feedback';
import { Tabs } from '@/components/tabs/Tabs';
import { Section, DemoTable } from '@/app/_components/doc';

const TYPES: StatusBadgeType[] = ['Success', 'Error', 'Warning', 'Pending', 'Inactive', 'Information'];

function GuidelineTable({ rows }: {
  rows: { use: React.ReactNode; avoid: React.ReactNode; note?: string; implemented: 'Yes' | 'No' | 'Review' }[];
}) {
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

const USAGE: Record<StatusBadgeType, string> = {
  Success:     'Indicates a positive, successful, or healthy state, or similar',
  Error:       'Indicates a failed, invalid, or critical state, or similar',
  Warning:     'Indicates a potentially risky or attention-needed state, or similar',
  Pending:     'Indicates a state in progress or awaiting action, or similar',
  Inactive:    'Indicates a disabled or non-active state, or similar',
  Information: 'Indicates a neutral or informational state without urgency, or similar',
};

const COLOR_SPECS: { type: StatusBadgeType; bg: string; accent: string }[] = [
  { type: 'Success',     bg: 'green-100',  accent: 'green-800'  },
  { type: 'Error',       bg: 'red-100',    accent: 'red-800'    },
  { type: 'Warning',     bg: 'coral-100',  accent: 'coral-800'  },
  { type: 'Pending',     bg: 'yellow-100', accent: 'yellow-800' },
  { type: 'Inactive',    bg: 'grey-100',   accent: 'grey-800'   },
  { type: 'Information', bg: 'teal-100',   accent: 'teal-800'   },
];

export default function StatusBadgePage() {
  const [tab, setTab] = useState('overview');

  return (
    <main className="bg-[var(--color-base-white)] min-h-screen">

      {/* ─── Header ───────────────────────────────────────────────── */}
      <div>
        <div className="max-w-[1200px] mx-auto px-[var(--spacing-32)] pt-[var(--spacing-64)] pb-[var(--spacing-64)]">

          <p className="text-[20px] leading-[28px] tracking-[0.3px] mb-[var(--spacing-48)]">
            <span className="font-medium text-[var(--color-text-default)]">Component → </span>
            <span className="font-semibold text-[var(--color-text-default)]">Display</span>
          </p>

          <div className="flex items-start justify-between gap-[var(--spacing-64)] mb-[var(--spacing-40)]">
            <div className="flex flex-col gap-[var(--spacing-16)]">
              <div className="flex items-center gap-[var(--spacing-12)]">
                <h1 className="text-[48px] font-semibold leading-[48px] text-[var(--color-text-default)]">
                  Status badge
                </h1>
                <span className="inline-flex items-center h-[24px] px-[var(--spacing-8)] rounded-[4px] bg-[var(--color-yellow-100)] border border-[var(--color-yellow-800)] text-[14px] font-medium tracking-[0.3px] leading-[20px] text-[var(--color-yellow-800)] whitespace-nowrap">
                  Eng beta
                </span>
              </div>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[520px]">
                A compact, non-interactive component used to display the current state of an item.
              </p>
            </div>

            {/* Metadata */}
            <div className="shrink-0 w-[280px]">
              {[
                { label: 'Created by',     value: 'Vez / Toni' },
                { label: 'Implemented by', value: 'Sam' },
                { label: 'Last updated',   value: '14/04/2026' },
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
            { id: 'reference',  label: 'Reference'  },
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
            {/* Demo preview — realistic table context */}
            <div className="mb-[var(--spacing-96)]">
              <div className="bg-[#FAFAFA] p-[var(--spacing-48)] flex items-center justify-center">
                <div className="w-full max-w-[640px]">
                  {/* Table header */}
                  <div className="grid grid-cols-4 border-b border-[var(--color-grey-200)]">
                    {['Reference', 'Name', 'Processor', 'Status'].map(h => (
                      <div key={h} className="px-[var(--spacing-24)] py-[var(--spacing-12)]">
                        <span className="text-[14px] font-semibold text-[var(--color-grey-700)] tracking-[0.3px]">{h}</span>
                      </div>
                    ))}
                  </div>
                  {/* Table rows */}
                  {[
                    { ref: 'AB/12345678', name: 'Mrs Jadin Floy',  processor: 'Subcontractor', type: 'Inactive'    as StatusBadgeType, label: 'New starter' },
                    { ref: 'CD/87654321', name: 'Mr Ivory Park',   processor: 'PAYE',          type: 'Success'     as StatusBadgeType, label: 'Registered'  },
                  ].map((row, i, arr) => (
                    <div key={row.ref} className={`grid grid-cols-4 items-center${i < arr.length - 1 ? ' border-b border-[var(--color-grey-200)]' : ''}`}>
                      <div className="px-[var(--spacing-24)] py-[var(--spacing-12)]">
                        <span className="text-[14px] font-medium text-[var(--color-grey-900)]">{row.ref}</span>
                      </div>
                      <div className="px-[var(--spacing-24)] py-[var(--spacing-12)]">
                        <span className="text-[14px] font-medium text-[var(--color-grey-900)]">{row.name}</span>
                      </div>
                      <div className="px-[var(--spacing-24)] py-[var(--spacing-12)]">
                        <span className="text-[14px] font-medium text-[var(--color-grey-900)]">{row.processor}</span>
                      </div>
                      <div className="px-[var(--spacing-24)] py-[var(--spacing-12)]">
                        <StatusBadge type={row.type} size="small" label={row.label} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Variants */}
            <Section title="Variants" compact>
              <DemoTable
                rowHeader="Type"
                cols={[
                  { key: 'badge', label: 'Preview', className: 'w-[160px]' },
                  { key: 'usage', label: 'Usage' },
                ]}
                rows={TYPES.map(type => ({
                  label: type,
                  cells: [
                    <StatusBadge key={type} type={type} size="small" />,
                    <span key={`${type}-u`} className="text-[14px] font-medium text-[var(--color-grey-900)]">{USAGE[type]}</span>,
                  ],
                }))}
              />
            </Section>

            {/* Sizes */}
            <Section title="Sizes" compact last>
              <div className="grid grid-cols-2 gap-[var(--spacing-16)]">
                {([
                  { size: 'medium' as const, label: 'Medium', px: '32px' },
                  { size: 'small'  as const, label: 'Small',  px: '24px' },
                ]).map(({ size, label, px }) => (
                  <div key={size}>
                    <div className="flex items-center justify-center bg-[#FAFAFA] rounded-[var(--spacing-12)] h-[240px]">
                      <StatusBadge type="Pending" size={size} />
                    </div>
                    <p className="mt-[var(--spacing-12)] text-[14px] font-medium text-[var(--color-grey-900)]">
                      {label} <span className="font-medium text-[var(--color-text-tertiary)]">{px}</span>
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
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Sizes</h2>
              <GuidelineTable rows={[
                { use: 'Small (24px) in tables and dense layouts',           avoid: 'Using Small as the default in spacious in-page layouts', implemented: 'Yes' },
                { use: 'Medium (32px) in spacious in-page contexts',         avoid: 'Using Medium in tables or dense list layouts',           implemented: 'No' },
              ]} />
            </div>

          </div>
        )}

        {/* ── Reference ── */}
        {tab === 'reference' && (
          <div className="flex flex-col gap-[var(--spacing-48)]">

            {/* Employee Status */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Employee status</h2>
              <div className="w-full">
                <div className="flex gap-[var(--spacing-24)] py-[var(--spacing-12)] px-[var(--spacing-16)] border-b border-[var(--color-grey-300)] bg-[var(--color-grey-100)]">
                  <div className="w-[140px] shrink-0 text-[14px] font-semibold text-[var(--color-grey-900)]">Status</div>
                  <div className="flex-1 text-[14px] font-semibold text-[var(--color-grey-900)]">Description</div>
                </div>
                {[
                  { type: 'Pending'     as StatusBadgeType, label: 'Pending',     description: 'Employee record is awaiting action or verification before becoming active' },
                  { type: 'Warning'     as StatusBadgeType, label: 'New starter', description: 'Employee has recently joined and their starter details are being processed' },
                  { type: 'Success'     as StatusBadgeType, label: 'Active',      description: 'Employee is currently employed and active on the payroll' },
                  { type: 'Inactive'    as StatusBadgeType, label: 'Inactive',    description: 'Employee record exists but is not currently active on the payroll' },
                  { type: 'Error'       as StatusBadgeType, label: 'Error',       description: 'An issue has been detected with the employee record that requires attention' },
                  { type: 'Inactive'    as StatusBadgeType, label: 'Leaver',      description: 'Employee has left the company and is no longer active on the payroll' },
                ].map((row, i, arr) => (
                  <div key={row.label} className={`flex gap-[var(--spacing-24)] items-center py-[var(--spacing-16)] px-[var(--spacing-16)]${i < arr.length - 1 ? ' border-b border-[var(--color-grey-300)]' : ''}`}>
                    <div className="w-[140px] shrink-0">
                      <StatusBadge type={row.type} size="small" label={row.label} />
                    </div>
                    <div className="flex-1 text-[14px] font-medium text-[var(--color-grey-900)]">{row.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RTI */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">RTI</h2>
              <div className="w-full">
                {/* Header */}
                <div className="flex gap-[var(--spacing-24)] py-[var(--spacing-12)] px-[var(--spacing-16)] border-b border-[var(--color-grey-300)] bg-[var(--color-grey-100)]">
                  <div className="w-[140px] shrink-0 text-[14px] font-semibold text-[var(--color-grey-900)]">Status</div>
                  <div className="flex-1 text-[14px] font-semibold text-[var(--color-grey-900)]">Description</div>
                </div>
                {/* Rows */}
                {[
                  { type: 'Information' as StatusBadgeType, label: 'Scheduled', description: 'Waiting to be "sent" through automation or manual submission' },
                  { type: 'Pending'     as StatusBadgeType, label: 'Pending',   description: 'Submission is sent to HMRC and it\'s awaiting a response' },
                  { type: 'Success'     as StatusBadgeType, label: 'Accepted',  description: 'Accepted by HMRC' },
                  { type: 'Error'       as StatusBadgeType, label: 'Rejected',  description: 'Rejected by HMRC' },
                  { type: 'Inactive'    as StatusBadgeType, label: 'Closed',    description: 'More common for EPS, but basically the period has passed (19th of the month) so you cannot send, or edit the submission' },
                ].map((row, i, arr) => (
                  <div key={row.label} className={`flex gap-[var(--spacing-24)] items-center py-[var(--spacing-16)] px-[var(--spacing-16)]${i < arr.length - 1 ? ' border-b border-[var(--color-grey-300)]' : ''}`}>
                    <div className="w-[140px] shrink-0">
                      <StatusBadge type={row.type} size="small" label={row.label} />
                    </div>
                    <div className="flex-1 text-[14px] font-medium text-[var(--color-grey-900)]">{row.description}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ── Specs ── */}
        {tab === 'specs' && (
          <div className="flex flex-col gap-[var(--spacing-16)]">

            {/* Colors */}
            <Section title="Colors" compact>
              <div className="w-full">
                <div className="flex gap-[var(--spacing-24)] py-[var(--spacing-12)] px-[var(--spacing-16)] border-b border-[var(--color-grey-300)] bg-[var(--color-grey-100)]">
                  <div className="w-[140px] shrink-0 text-[14px] font-semibold text-[var(--color-grey-900)]">Preview</div>
                  <div className="w-[160px] shrink-0 text-[14px] font-semibold text-[var(--color-grey-900)]">Background</div>
                  <div className="flex-1 text-[14px] font-semibold text-[var(--color-grey-900)]">Border / Text</div>
                </div>
                {COLOR_SPECS.map((row, i) => (
                  <div key={row.type} className={`flex gap-[var(--spacing-24)] items-center py-[var(--spacing-16)] px-[var(--spacing-16)]${i < COLOR_SPECS.length - 1 ? ' border-b border-[var(--color-grey-300)]' : ''}`}>
                    <div className="w-[140px] shrink-0">
                      <StatusBadge type={row.type} size="small" />
                    </div>
                    <div className="w-[160px] shrink-0 text-[14px] font-medium text-[var(--color-grey-900)]">{row.bg}</div>
                    <div className="flex-1 text-[14px] font-medium text-[var(--color-grey-900)]">{row.accent}</div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Spacing */}
            <Section title="Spacing" compact last>
              <div className="grid grid-cols-2 gap-[var(--spacing-16)]">
                {([
                  { size: 'medium' as const, height: 32, padding: 12, fontSize: '16px', label: 'Registered' },
                  { size: 'small'  as const, height: 24, padding: 8,  fontSize: '14px', label: 'Registered' },
                ]).map(({ size, height, padding, fontSize, label }) => (
                  <div key={size}>
                    <div className="bg-[#FAFAFA] rounded-[var(--spacing-12)] flex flex-col items-center justify-center gap-[var(--spacing-16)] p-[var(--spacing-32)] h-[240px]">
                      <div className="relative mt-[var(--spacing-8)]">
                        {/* Badge + horizontal padding labels */}
                        <div className="flex flex-col" style={{ gap: '3px' }}>
                          <div
                            className="inline-flex items-stretch rounded-[4px] overflow-hidden"
                            style={{ height: `${height}px`, border: '1px solid var(--color-green-800)' }}
                          >
                            <div className="border-r border-dashed border-[var(--color-coral-400)]" style={{ width: `${padding}px`, backgroundColor: '#FDECEA' }} />
                            <div className="flex items-center bg-[var(--color-green-100)]">
                              <span style={{ fontSize }} className="font-medium text-[var(--color-green-800)]">{label}</span>
                            </div>
                            <div className="border-l border-dashed border-[var(--color-coral-400)]" style={{ width: `${padding}px`, backgroundColor: '#FDECEA' }} />
                          </div>
                          {/* Padding labels below */}
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
                        {/* Height annotation */}
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
                    <div className="mt-[var(--spacing-12)] flex flex-col gap-[var(--spacing-4)]">
                      <p className="text-[14px] font-medium text-[var(--color-grey-900)]"><span className="font-semibold">Height:</span> {height}px</p>
                      <p className="text-[14px] font-medium text-[var(--color-grey-900)]"><span className="font-semibold">Padding:</span> {padding}px</p>
                      <p className="text-[14px] font-medium text-[var(--color-grey-900)]"><span className="font-semibold">Font size:</span> {fontSize}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

          </div>
        )}

      </div>
    </main>
  );
}
