'use client';

import React, { useState } from 'react';
import { Link, Check, Close, type LinkVariant, type LinkBackground } from '@finity/design-system';
import { InfoFilled } from '@/components/icons/feedback';
import { Tabs } from '@/components/tabs/Tabs';
import { Section, DemoTable } from '@/app/_components/doc';

const VARIANTS: { variant: LinkVariant; label: string; description: string }[] = [
  { variant: 'default', label: 'Default',         description: 'Standard inline link. Use for navigation or links within body copy.' },
  { variant: 'cta',     label: 'Call to action',  description: 'For prominent calls to action' },
  { variant: 'subtle',  label: 'Subtle',          description: 'Use when the link should not compete with surrounding content or for low-priority links' },
];

const STATES = ['Default', 'Hover', 'Focus', 'Visited'] as const;

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

export default function LinkPage() {
  const [tab, setTab] = useState('overview');

  return (
    <main className="bg-[var(--color-base-white)] min-h-screen">

      {/* ─── Header ───────────────────────────────────────────────── */}
      <div>
        <div className="max-w-[1200px] mx-auto px-[var(--spacing-32)] pt-[var(--spacing-64)] pb-[var(--spacing-64)]">

          <p className="text-[20px] leading-[28px] tracking-[0.3px] mb-[var(--spacing-48)]">
            <span className="font-medium text-[var(--color-text-default)]">Component → </span>
            <span className="font-semibold text-[var(--color-text-default)]">Navigation</span>
          </p>

          <div className="flex items-start justify-between gap-[var(--spacing-64)] mb-[var(--spacing-40)]">
            <div className="flex flex-col gap-[var(--spacing-16)]">
              <h1 className="text-[48px] font-semibold leading-[48px] text-[var(--color-text-default)]">
                Link
              </h1>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[520px]">
                A text element used to navigate to another page, section, or resource.
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
                <div className="flex flex-col items-start gap-[var(--spacing-20)]">
                  <Link href="javascript:void(0)" iconAfter>Explore our ecosystem</Link>
                  <Link href="javascript:void(0)">Terms and conditions</Link>
                </div>
              </div>
            </div>

            {/* Variants */}
            <Section title="Variants" compact>
              <DemoTable
                rowHeader="Type"
                cols={[
                  { key: 'preview', label: 'Preview', className: 'w-[200px] pl-[var(--spacing-32)]' },
                  { key: 'usage',   label: 'Usage' },
                ]}
                rows={VARIANTS.map(({ variant, label, description }) => ({
                  label,
                  cells: [
                    <Link key={variant} href="javascript:void(0)" variant={variant} className="!text-[14px]">{label}</Link>,
                    <span key={`${variant}-d`} className="text-[14px] font-medium text-[var(--color-grey-900)]">{description}</span>,
                  ],
                }))}
              />
            </Section>

            {/* With icon */}
            <Section title="With icon" compact>
              <DemoTable
                rowHeader="Type"
                cols={[
                  { key: 'preview', label: 'Preview', className: 'w-[200px] pl-[var(--spacing-32)]' },
                  { key: 'spacer',  label: '',        className: 'flex-1' },
                ]}
                rows={VARIANTS.map(({ variant, label }) => ({
                  label,
                  cells: [
                    <Link key={variant} href="javascript:void(0)" variant={variant} iconAfter className="!text-[14px]">{label}</Link>,
                    <span key="spacer" />,
                  ],
                }))}
              />
            </Section>

            {/* On dark background */}
            <Section title="On dark background" compact>
              <div className="w-full overflow-hidden">
                {/* Header */}
                <div className="flex border-b border-[var(--color-grey-700)] bg-[var(--color-grey-800)]">
                  <div className="w-[120px] shrink-0 py-[var(--spacing-12)] px-[var(--spacing-16)] text-[14px] font-semibold text-[var(--color-grey-300)]">Type</div>
                  <div className="w-[200px] shrink-0 py-[var(--spacing-12)] pr-[var(--spacing-16)] pl-[var(--spacing-32)] text-[14px] font-semibold text-[var(--color-grey-300)]">Preview</div>
                  <div className="flex-1 py-[var(--spacing-12)] px-[var(--spacing-16)] text-[14px] font-semibold text-[var(--color-grey-300)]">Usage</div>
                </div>
                {/* Rows */}
                {VARIANTS.map(({ variant, label, description }, i) => (
                  <div key={variant} className={`flex items-center bg-[var(--color-grey-900)]${i < VARIANTS.length - 1 ? ' border-b border-[var(--color-grey-800)]' : ''}`}>
                    <div className="w-[120px] shrink-0 py-[var(--spacing-20)] px-[var(--spacing-16)] text-[14px] font-medium text-[var(--color-grey-200)]">{label}</div>
                    <div className="w-[200px] shrink-0 py-[var(--spacing-20)] pr-[var(--spacing-16)] pl-[var(--spacing-32)]">
                      <Link href="javascript:void(0)" variant={variant} background="dark" className="!text-[14px]">{label}</Link>
                    </div>
                    <div className="flex-1 py-[var(--spacing-20)] px-[var(--spacing-16)] text-[14px] font-medium text-[var(--color-grey-200)]">{description}</div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Preview — light and dark */}
            <Section title="Preview" compact last>
              <div className="flex gap-[var(--spacing-16)]">
                {/* Light */}
                <div className="flex-1">
                  <div className="bg-[#FAFAFA] rounded-[8px] p-[var(--spacing-48)] flex items-center justify-center min-h-[200px]">
                    <p className="text-[16px] font-normal leading-[26px] text-[var(--color-grey-900)] max-w-[400px]">
                      {'For '}
                      <Link href="https://www.finity.co.uk/back-office/recruitment-payroll-software/" target="_blank" rel="noopener noreferrer">agencies</Link>
                      {', '}
                      <Link href="https://www.finity.co.uk/back-office/umbrella-payroll-software/" target="_blank" rel="noopener noreferrer">umbrellas</Link>
                      {' and '}
                      <Link href="https://finity.co.uk/bureau" target="_blank" rel="noopener noreferrer">bureaus</Link>
                      {' that delight clients and workers with reliable payroll every time. Whether you pay 50 staff or 50,000 workers, do it in seconds \u2013 and earn rewards.'}
                    </p>
                  </div>
                  <p className="text-[14px] font-medium text-[var(--color-grey-900)] mt-[var(--spacing-12)]">Light background</p>
                </div>
                {/* Dark */}
                <div className="flex-1">
                  <div className="bg-[var(--color-grey-900)] rounded-[8px] p-[var(--spacing-48)] flex items-center justify-center min-h-[200px]">
                    <p className="text-[16px] font-normal leading-[26px] text-[var(--color-grey-200)] max-w-[400px]">
                      {'For '}
                      <Link href="https://www.finity.co.uk/back-office/recruitment-payroll-software/" background="dark" target="_blank" rel="noopener noreferrer">agencies</Link>
                      {', '}
                      <Link href="https://www.finity.co.uk/back-office/umbrella-payroll-software/" background="dark" target="_blank" rel="noopener noreferrer">umbrellas</Link>
                      {' and '}
                      <Link href="https://finity.co.uk/bureau" background="dark" target="_blank" rel="noopener noreferrer">bureaus</Link>
                      {' that delight clients and workers with reliable payroll every time. Whether you pay 50 staff or 50,000 workers, do it in seconds \u2013 and earn rewards.'}
                    </p>
                  </div>
                  <p className="text-[14px] font-medium text-[var(--color-grey-900)] mt-[var(--spacing-12)]">Dark background</p>
                </div>
              </div>
            </Section>
          </>
        )}

        {/* ── Guidelines ── */}
        {tab === 'guidelines' && (
          <div className="flex flex-col gap-[var(--spacing-48)]">

            {/* Link text */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Link text</h2>
              <GuidelineTable rows={[
                { use: 'Write descriptive text that explains the destination: "View payroll report"', avoid: 'Generic labels: "click here", "read more", "here", "link"', implemented: 'No' },
                { use: 'Sentence case for all link labels', avoid: 'Title case or all caps', implemented: 'No' },
                { use: 'Keep link text concise, 2 to 5 words where possible', avoid: 'Linking entire sentences or paragraphs', implemented: 'No' },
                { use: 'Match the link text to the page or action it leads to', avoid: 'Misleading labels that do not match the destination', implemented: 'No' },
              ]} />
            </div>

            {/* Navigation target */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Navigation target</h2>
              <GuidelineTable rows={[
                { use: 'Open external links in a new tab', avoid: 'Opening external links in the same tab, losing the user\'s place', implemented: 'No' },
                { use: 'Navigate within the same tab for internal app links', avoid: 'Opening every link in a new tab regardless of destination', implemented: 'No' },
              ]} />
            </div>

            {/* Variant usage */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Variant usage</h2>
              <GuidelineTable rows={[
                { use: 'Use Default for inline navigation within body copy', avoid: 'Using CTA for inline links inside paragraphs', implemented: 'No' },
                { use: 'Use CTA for standalone calls to action outside of body text', avoid: 'Using CTA inside a sentence, it draws too much visual weight', implemented: 'No' },
                { use: 'Use Subtle when the link must not compete with primary content', avoid: 'Overusing Subtle where users may not notice it is a link', implemented: 'No' },
                { use: 'Use the dark background variant when placing links on dark surfaces', avoid: 'Using the light variant on dark backgrounds, it will not pass contrast', implemented: 'No' },
              ]} />
            </div>

            {/* Placement */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Placement</h2>
              <GuidelineTable rows={[
                { use: 'Place inline links naturally within the sentence', avoid: 'Stacking multiple links on consecutive lines inside a paragraph', implemented: 'No' },
                { use: 'Use a standalone CTA link where a button would be too heavy', avoid: 'Replacing primary action buttons with links', implemented: 'No' },
                { use: 'Group related standalone links consistently, left-aligned', avoid: 'Mixing link alignment within the same content block', implemented: 'No' },
              ]} />
            </div>

            {/* Accessibility */}
            <div>
              <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Accessibility</h2>
              <GuidelineTable rows={[
                { use: 'Ensure focus state is always visible when tabbing', avoid: 'Removing the focus ring, keyboard users rely on it', implemented: 'No' },
                { use: 'Use underline to distinguish links from plain text', avoid: 'Relying on colour alone to indicate a link', implemented: 'No' },
              ]} />
            </div>

          </div>
        )}

        {/* ── Specs ── */}
        {tab === 'specs' && (
          <div>

            {/* States table */}
            <h2 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.01em] text-[var(--color-text-default)] mb-[var(--spacing-16)]">States</h2>
            <div className="w-full pointer-events-none">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-grey-100)] border-b border-[var(--color-grey-300)]">
                    <th className="text-left py-[var(--spacing-12)] px-[var(--spacing-16)] w-[140px]">
                      <span className="text-[14px] font-semibold text-[var(--color-text-default)]">Variant</span>
                    </th>
                    {['Default', 'Hover', 'Pressed', 'Focus', 'Visited'].map(s => (
                      <th key={s} className="text-left py-[var(--spacing-12)] px-[var(--spacing-12)]">
                        <span className="text-[14px] font-semibold text-[var(--color-text-default)]">{s}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {([
                    {
                      label: 'Default',
                      states: [
                        { token: 'colour: coral 400',    className: '' },
                        { token: 'colour: coral 300',    className: '!text-[var(--color-coral-300)]' },
                        { token: 'colour: coral 400',    className: '!text-[var(--color-coral-400)]' },
                        { token: 'focus ring: grey 900', className: '!outline-[var(--color-grey-900)]' },
                        { token: 'colour: coral 500',    className: '!text-[var(--color-coral-500)]' },
                      ],
                    },
                    {
                      label: 'Call to action',
                      states: [
                        { token: 'colour: coral 400',    className: '' },
                        { token: 'colour: coral 300',    className: '!text-[var(--color-coral-300)]' },
                        { token: 'colour: coral 400',    className: '!text-[var(--color-coral-400)]' },
                        { token: 'focus ring: grey 900', className: '!outline-[var(--color-grey-900)]' },
                        { token: 'colour: coral 500',    className: '!text-[var(--color-coral-500)]' },
                      ],
                    },
                    {
                      label: 'Subtle - light',
                      states: [
                        { token: 'colour: black',         className: '' },
                        { token: 'colour: grey 500',      className: '!text-[#737373]' },
                        { token: 'colour: black',         className: '' },
                        { token: 'focus ring: grey 900',  className: '!outline-[var(--color-grey-900)]' },
                        { token: 'colour: grey 500',      className: '!text-[var(--color-grey-500)]' },
                      ],
                    },
                    {
                      label: 'Default - dark',
                      dark: true,
                      states: [
                        { token: 'colour: coral 400',    className: '' },
                        { token: 'colour: coral 300',    className: '!text-[var(--color-coral-300)]' },
                        { token: 'colour: coral 400',    className: '!text-[var(--color-coral-400)]' },
                        { token: 'focus ring: coral 400', className: '!outline-[var(--color-coral-400)]' },
                        { token: 'colour: coral 500',    className: '!text-[var(--color-coral-500)]' },
                      ],
                    },
                    {
                      label: 'Subtle - dark',
                      dark: true,
                      states: [
                        { token: 'colour: white',         className: '' },
                        { token: 'colour: grey 400',      className: '!text-[#A3A3A3]' },
                        { token: 'colour: white',         className: '' },
                        { token: 'focus ring: coral 400', className: '!outline-[var(--color-coral-400)]' },
                        { token: 'colour: grey 400',      className: '!text-[var(--color-grey-400)]' },
                      ],
                    },
                  ] as { label: string; dark?: boolean; states: { token: string; className: string }[] }[]).map((row, i, arr) => (
                    <tr key={row.label} className={`${row.dark ? 'bg-[var(--color-grey-900)]' : 'bg-[var(--color-base-white)]'}${i < arr.length - 1 ? ' border-b border-[var(--color-grey-300)]' : ''}`}>
                      <td className="py-[var(--spacing-16)] px-[var(--spacing-16)] align-top">
                        <span className={`text-[14px] font-medium ${row.dark ? 'text-[var(--color-grey-300)]' : 'text-[var(--color-grey-900)]'}`}>{row.label}</span>
                      </td>
                      {row.states.map((state, si) => (
                        <td key={si} className="py-[var(--spacing-16)] px-[var(--spacing-12)] align-top">
                          <div className="flex flex-col items-start gap-[var(--spacing-12)]">
                            <Link
                              href="javascript:void(0)"
                              variant={row.label === 'Call to action' ? 'cta' : row.label.startsWith('Subtle') ? 'subtle' : 'default'}
                              background={row.dark ? 'dark' : 'light'}
                              className={`!text-[14px] ${state.className}`}
                            >
                              Link
                            </Link>
                            <div className="flex flex-col text-[14px] leading-[18px]">
                              {state.token.split(': ').map((line, idx) => (
                                <span key={idx} className={idx === 0 ? `font-semibold ${row.dark ? 'text-[var(--color-grey-400)]' : 'text-[#737373]'}` : `font-medium ${row.dark ? 'text-[var(--color-grey-300)]' : 'text-[#737373]'}`}>
                                  {idx === 0 ? `${line}:` : line}
                                </span>
                              ))}
                            </div>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Typography */}
            <div className="mt-[var(--spacing-64)]">
              <h2 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.01em] text-[var(--color-text-default)] mb-[var(--spacing-16)]">Typography</h2>
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-grey-100)] border-b border-[var(--color-grey-300)]">
                    {['Property', 'Default / Subtle', 'Call to action'].map(h => (
                      <th key={h} className="text-left py-[var(--spacing-12)] px-[var(--spacing-16)]">
                        <span className="text-[14px] font-semibold text-[var(--color-text-default)]">{h}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { property: 'Font weight',      default: 'Medium (500)', cta: 'Semibold (600)' },
                    { property: 'Text decoration',  default: 'Underline', cta: 'Underline' },
                  ].map((row, i, arr) => (
                    <tr key={row.property} className={`bg-[var(--color-base-white)]${i < arr.length - 1 ? ' border-b border-[var(--color-grey-300)]' : ''}`}>
                      <td className="py-[var(--spacing-12)] px-[var(--spacing-16)] text-[14px] font-semibold text-[var(--color-grey-900)]">{row.property}</td>
                      <td className="py-[var(--spacing-12)] px-[var(--spacing-16)] text-[14px] font-medium text-[var(--color-grey-900)]">{row.default}</td>
                      <td className="py-[var(--spacing-12)] px-[var(--spacing-16)] text-[14px] font-medium text-[var(--color-grey-900)]">{row.cta}</td>
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
