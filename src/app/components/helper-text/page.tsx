'use client';

import React, { useState } from 'react';
import { type HelperTextType, Check, Close } from '@finity/design-system';
import { InfoFilled } from '@/components/icons/feedback';
import { Tabs } from '@/components/tabs/Tabs';
import { Section, DemoTable } from '@/app/_components/doc';

const ICON_INFO    = 'https://www.figma.com/api/mcp/asset/4ae80c30-d63e-4933-b59c-c695f78570f4';
const ICON_ERROR   = 'https://www.figma.com/api/mcp/asset/6ea5d07b-ac17-4b51-9818-714537eb80f3';
const ICON_SUCCESS = 'https://www.figma.com/api/mcp/asset/7f2dc17c-2416-418e-935f-9af2bee4b816';
const ICON_WARNING = 'https://www.figma.com/api/mcp/asset/7dd676c8-33be-4e38-9aa4-a9edc7cc2763';

// Insets match Figma exactly: info/error/success use 4.17%, warning has asymmetric inset
const ICON_INSET: Record<HelperTextType, string> = {
  default: '4.17%',
  error:   '4.17%',
  success: '4.17%',
  warning: '12.5% 5.1% 8.36% 5.13%',
};

function FigmaIcon({ src, inset }: { src: string; inset: string }) {
  return (
    <div className="shrink-0 mt-[2px] relative size-[16px]">
      <div className="absolute" style={{ inset }}>
        <img alt="" className="absolute inset-0 size-full" src={src} />
      </div>
    </div>
  );
}

const TYPE_LABEL: Record<HelperTextType, string> = {
  default: 'Neutral',
  error:   'Negative',
  success: 'Positive',
  warning: 'Warning',
};

const USAGE: Record<HelperTextType, string> = {
  default: 'Hints, instructions, or supplementary context for a field',
  error:   'Validation errors or input that cannot be accepted',
  success: 'Confirmation that an input or action is valid',
  warning: 'Non-blocking caution that does not prevent submission',
};

const VARIANT_SPECS: { type: HelperTextType; icon: string; hex: string; color: string }[] = [
  { type: 'default', icon: ICON_INFO,    hex: '#525252', color: 'grey-600'   },
  { type: 'error',   icon: ICON_ERROR,   hex: '#DC2626', color: 'red-600'    },
  { type: 'success', icon: ICON_SUCCESS, hex: '#16A34A', color: 'green-600'  },
  { type: 'warning', icon: ICON_WARNING, hex: '#CA8A04', color: 'yellow-600' },
];

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

export default function HelperTextPage() {
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
                  Helper text
                </h1>
                <span className="inline-flex items-center h-[24px] px-[var(--spacing-8)] rounded-[4px] bg-[var(--color-yellow-100)] border border-[var(--color-yellow-800)] text-[14px] font-medium tracking-[0.3px] leading-[20px] text-[var(--color-yellow-800)] whitespace-nowrap">
                  Eng beta
                </span>
              </div>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[520px]">
                Helper text provides brief guidance or context below a field to help users understand what information is needed or how it will be used.
              </p>
            </div>

            {/* Metadata */}
            <div className="shrink-0 w-[280px]">
              {[
                { label: 'Created by',     value: 'Toni' },
                { label: 'Implemented by', value: 'Sam' },
                { label: 'Last updated',   value: '07/10/2025' },
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
            {/* Demo preview — in-context */}
            <div className="mb-[var(--spacing-96)]">
              <div className="bg-[#FAFAFA] p-[var(--spacing-48)] flex flex-col items-center justify-center gap-[var(--spacing-24)]">

                {/* Mock field with error */}
                <div className="w-full max-w-[450px] flex flex-col gap-[var(--spacing-4)]">
                  <span className="text-[16px] font-medium text-[var(--color-text-secondary)] tracking-[0.35px] leading-[22px]">
                    Email address
                  </span>
                  <div className="h-[48px] rounded-[8px]" style={{ border: '3px solid var(--color-red-600)', backgroundColor: 'white' }} />
                  <div className="flex items-start gap-[var(--spacing-4)]">
                    <FigmaIcon src={ICON_ERROR} inset={ICON_INSET.error} />
                    <span className="text-[14px] font-medium leading-[20px] tracking-[0.3px] text-[#DC2626]">
                      This field is required
                    </span>
                  </div>
                </div>

                {/* Standalone default helper text */}
                <div className="w-full max-w-[450px] flex items-start gap-[var(--spacing-4)]">
                  <FigmaIcon src={ICON_INFO} inset={ICON_INSET.default} />
                  <span className="text-[14px] font-medium leading-[20px] tracking-[0.3px] text-[#525252]">
                    This setting controls whether the employee appears in reports
                  </span>
                </div>

              </div>
            </div>

            {/* Variants */}
            <Section title="Variants" compact last>
              <DemoTable
                rowHeader=""
                cols={[
                  { key: 'type',  label: 'Type',  className: 'w-[180px]' },
                  { key: 'usage', label: 'Usage' },
                ]}
                rows={VARIANT_SPECS.map(({ type, icon, hex }) => ({
                  label: TYPE_LABEL[type],
                  cells: [
                    <div key={type} className="flex items-start gap-[var(--spacing-4)]">
                      <FigmaIcon src={icon} inset={ICON_INSET[type]} />
                      <span className="text-[14px] font-medium leading-[20px] tracking-[0.3px]" style={{ color: hex }}>
                        Helper text
                      </span>
                    </div>,
                    <span key={`${type}-u`} className="text-[14px] font-medium text-[var(--color-grey-900)]">{USAGE[type]}</span>,
                  ],
                }))}
              />
            </Section>
          </>
        )}

        {/* ── Guidelines ── */}
        {tab === 'guidelines' && (
          <div className="flex flex-col gap-[var(--spacing-48)]">

            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Punctuation</h2>
              <GuidelineTable rows={[
                { use: 'No period for single-sentence helper text',         avoid: 'Period at the end of a single-sentence message',          implemented: 'No' },
                { use: 'Period for multi-sentence helper text',             avoid: 'Omitting periods in multi-sentence helper text',          implemented: 'No' },
              ]} />
            </div>

            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Placement</h2>
              <GuidelineTable rows={[
                { use: 'Place helper text directly below the associated field',   avoid: 'Placing helper text above or far from the field it relates to', implemented: 'No' },
                { use: 'Show only one helper text instance per field at a time',   avoid: 'Stacking multiple helper text types on the same field',          implemented: 'No' },
              ]} />
            </div>

          </div>
        )}

        {/* ── Specs ── */}
        {tab === 'specs' && (
          <div className="flex flex-col gap-[var(--spacing-16)]">

            <Section title="Colors" compact last>
              <div className="w-full">
                <div className="flex gap-[var(--spacing-24)] py-[var(--spacing-12)] px-[var(--spacing-16)] border-b border-[var(--color-grey-300)] bg-[var(--color-grey-100)]">
                  <div className="w-[200px] shrink-0 text-[14px] font-semibold text-[var(--color-grey-900)]">Preview</div>
                  <div className="flex-1 text-[14px] font-semibold text-[var(--color-grey-900)]">Icon / Text colour</div>
                </div>
                {VARIANT_SPECS.map((row, i) => (
                  <div key={row.type} className={`flex gap-[var(--spacing-24)] items-center py-[var(--spacing-16)] px-[var(--spacing-16)]${i < VARIANT_SPECS.length - 1 ? ' border-b border-[var(--color-grey-300)]' : ''}`}>
                    <div className="w-[200px] shrink-0 flex items-start gap-[var(--spacing-4)]">
                      <FigmaIcon src={row.icon} inset={ICON_INSET[row.type]} />
                      <span className="text-[14px] font-medium leading-[20px] tracking-[0.3px]" style={{ color: row.hex }}>
                        Helper text
                      </span>
                    </div>
                    <div className="flex-1 text-[14px] font-medium text-[var(--color-grey-900)]">{row.color}</div>
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
