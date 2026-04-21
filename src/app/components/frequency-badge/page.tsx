'use client';

import React, { useState } from 'react';
import { Check, Close } from '@finity/design-system';
import { InfoFilled } from '@/components/icons/feedback';
import { Tabs } from '@/components/tabs/Tabs';
import { Section, DemoTable } from '@/app/_components/doc';

// ─── Types ────────────────────────────────────────────────────────────────────

type FrequencyType = 'Monthly' | 'Weekly' | 'Four-weekly' | 'Fortnightly';

const TYPES: FrequencyType[] = ['Monthly', 'Weekly', 'Four-weekly', 'Fortnightly'];

// ─── Colors ───────────────────────────────────────────────────────────────────

const FREQ_COLORS: Record<FrequencyType, { bg: string; text: string; bgToken: string; textToken: string }> = {
  'Monthly':     { bg: 'var(--color-grey-100)',   text: 'var(--color-grey-800)',   bgToken: 'grey-100',   textToken: 'grey-800'   },
  'Weekly':      { bg: 'var(--color-teal-100)',   text: 'var(--color-teal-800)',   bgToken: 'teal-100',   textToken: 'teal-800'   },
  'Four-weekly': { bg: 'var(--color-coral-100)',  text: 'var(--color-coral-800)',  bgToken: 'coral-100',  textToken: 'coral-800'  },
  'Fortnightly': { bg: 'var(--color-yellow-100)', text: 'var(--color-yellow-800)', bgToken: 'yellow-100', textToken: 'yellow-800' },
};

// ─── Badge component ──────────────────────────────────────────────────────────

function FrequencyBadge({ type, size = 'small' }: { type: FrequencyType; size?: 'medium' | 'small' }) {
  const { bg, text } = FREQ_COLORS[type];
  const cls = size === 'medium'
    ? 'h-[32px] px-[12px] text-[16px] tracking-[0.35px] leading-[22px]'
    : 'h-[24px] px-[8px] text-[14px] tracking-[0.3px] leading-[20px]';
  return (
    <span
      className={`inline-flex items-center rounded-[4px] font-medium whitespace-nowrap ${cls}`}
      style={{ backgroundColor: bg, color: text }}
    >
      {type}
    </span>
  );
}

// ─── Usage ────────────────────────────────────────────────────────────────────

const USAGE: Record<FrequencyType, string> = {
  'Monthly':     'Employee is paid once per calendar month',
  'Weekly':      'Employee is paid once per calendar week',
  'Four-weekly': 'Employee is paid every four weeks, 13 pay periods per year',
  'Fortnightly': 'Employee is paid every two weeks, 26 pay periods per year',
};

// ─── Guideline table ──────────────────────────────────────────────────────────

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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FrequencyBadgePage() {
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
                  Frequency badge
                </h1>
                <span className="inline-flex items-center h-[24px] px-[var(--spacing-8)] rounded-[4px] bg-[var(--color-yellow-100)] border border-[var(--color-yellow-800)] text-[14px] font-medium tracking-[0.3px] leading-[20px] text-[var(--color-yellow-800)] whitespace-nowrap">
                  Eng beta
                </span>
              </div>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[520px]">
                Payroll frequency defines how often employees are paid and the regular cycle for processing wages based on business needs.
              </p>
            </div>

            {/* Metadata */}
            <div className="shrink-0 w-[280px]">
              {[
                { label: 'Created by',     value: 'Toni' },
                { label: 'Implemented by', value: 'Sam'  },
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

        {/* ── Overview ── */}
        {tab === 'overview' && (
          <>
            {/* Demo preview — payroll table context */}
            <div className="mb-[var(--spacing-96)]">
              <div className="bg-[#FAFAFA] p-[var(--spacing-48)] flex items-center justify-center">
                <div className="w-full max-w-[640px]">
                  {/* Table header */}
                  <div className="grid grid-cols-4 border-b border-[var(--color-grey-200)]">
                    {['Tax period', 'Start date', 'End date', 'Frequency'].map(h => (
                      <div key={h} className="px-[var(--spacing-24)] py-[var(--spacing-12)]">
                        <span className="text-[14px] font-semibold text-[var(--color-grey-700)] tracking-[0.3px]">{h}</span>
                      </div>
                    ))}
                  </div>
                  {/* Table rows */}
                  {[
                    { period: '11', start: '06/02/2026', end: '05/03/2026', freq: 'Monthly'     as FrequencyType },
                    { period: '22', start: '25/01/2026', end: '07/02/2026', freq: 'Fortnightly' as FrequencyType },
                  ].map((row, i, arr) => (
                    <div key={row.period} className={`grid grid-cols-4 items-center${i < arr.length - 1 ? ' border-b border-[var(--color-grey-200)]' : ''}`}>
                      <div className="px-[var(--spacing-24)] py-[var(--spacing-12)]">
                        <span className="text-[14px] font-medium text-[var(--color-grey-900)]">{row.period}</span>
                      </div>
                      <div className="px-[var(--spacing-24)] py-[var(--spacing-12)]">
                        <span className="text-[14px] font-medium text-[var(--color-grey-900)]">{row.start}</span>
                      </div>
                      <div className="px-[var(--spacing-24)] py-[var(--spacing-12)]">
                        <span className="text-[14px] font-medium text-[var(--color-grey-900)]">{row.end}</span>
                      </div>
                      <div className="px-[var(--spacing-24)] py-[var(--spacing-12)]">
                        <FrequencyBadge type={row.freq} size="small" />
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
                  { key: 'badge', label: 'Preview', className: 'w-[180px]' },
                  { key: 'usage', label: 'Usage' },
                ]}
                rows={TYPES.map(type => ({
                  label: type,
                  cells: [
                    <FrequencyBadge key={type} type={type} size="small" />,
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
                      <FrequencyBadge type="Weekly" size={size} />
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
                { use: 'Small (24px) in tables and dense layouts',    avoid: 'Using Small as the default in spacious in-page layouts', implemented: 'No' },
                { use: 'Medium (32px) in spacious in-page contexts',  avoid: 'Using Medium in tables or dense list layouts',           implemented: 'No' },
              ]} />
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
                  <div className="w-[160px] shrink-0 text-[14px] font-semibold text-[var(--color-grey-900)]">Preview</div>
                  <div className="w-[160px] shrink-0 text-[14px] font-semibold text-[var(--color-grey-900)]">Background</div>
                  <div className="flex-1 text-[14px] font-semibold text-[var(--color-grey-900)]">Text</div>
                </div>
                {TYPES.map((type, i) => (
                  <div key={type} className={`flex gap-[var(--spacing-24)] items-center py-[var(--spacing-16)] px-[var(--spacing-16)]${i < TYPES.length - 1 ? ' border-b border-[var(--color-grey-300)]' : ''}`}>
                    <div className="w-[160px] shrink-0">
                      <FrequencyBadge type={type} size="small" />
                    </div>
                    <div className="w-[160px] shrink-0 text-[14px] font-medium text-[var(--color-grey-900)]">{FREQ_COLORS[type].bgToken}</div>
                    <div className="flex-1 text-[14px] font-medium text-[var(--color-grey-900)]">{FREQ_COLORS[type].textToken}</div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Spacing */}
            <Section title="Spacing" compact last>
              <div className="grid grid-cols-2 gap-[var(--spacing-16)]">
                {([
                  { size: 'medium' as const, height: 32, padding: 12, fontSize: '16px' },
                  { size: 'small'  as const, height: 24, padding: 8,  fontSize: '14px' },
                ]).map(({ size, height, padding, fontSize }) => (
                  <div key={size}>
                    <div className="bg-[#FAFAFA] rounded-[var(--spacing-12)] flex flex-col items-center justify-center gap-[var(--spacing-16)] p-[var(--spacing-32)] h-[240px]">
                      <div className="relative mt-[var(--spacing-8)]">
                        {/* Badge + horizontal padding labels */}
                        <div className="flex flex-col" style={{ gap: '3px' }}>
                          <div
                            className="inline-flex items-stretch rounded-[4px] overflow-hidden"
                            style={{ height: `${height}px`, backgroundColor: 'var(--color-yellow-100)' }}
                          >
                            <div className="border-r border-dashed border-[var(--color-coral-400)]" style={{ width: `${padding}px`, backgroundColor: 'rgba(253, 236, 234, 0.75)' }} />
                            <div className="flex items-center">
                              <span style={{ fontSize }} className="font-medium text-[var(--color-yellow-800)]">Fortnightly</span>
                            </div>
                            <div className="border-l border-dashed border-[var(--color-coral-400)]" style={{ width: `${padding}px`, backgroundColor: 'rgba(253, 236, 234, 0.75)' }} />
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
