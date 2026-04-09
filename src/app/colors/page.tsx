'use client';

const colorScales = {
  grey: {
    label: 'Neutral',
    description: 'Greys are neutral colours and make up the backgrounds, text, dividers, and other elements throughout the interface.',
    colors: [
      { shade: '50',  value: '#FAFAFA' },
      { shade: '100', value: '#F5F5F5' },
      { shade: '200', value: '#E5E5E5' },
      { shade: '300', value: '#D4D4D4' },
      { shade: '400', value: '#A3A3A3' },
      { shade: '500', value: '#737373' },
      { shade: '600', value: '#525252' },
      { shade: '700', value: '#404040' },
      { shade: '800', value: '#262626' },
      { shade: '900', value: '#171717' },
    ],
  },
  coral: {
    label: 'Coral',
    accent: { name: 'Finity Coral', value: '#FF885D' },
    colors: [
      { shade: '50',  value: '#FFF4ED' },
      { shade: '100', value: '#FEE6D6' },
      { shade: '200', value: '#FCC8AC' },
      { shade: '300', value: '#FAA277' },
      { shade: '400', value: '#F77445' },
      { shade: '500', value: '#F44C1B' },
      { shade: '600', value: '#E53311' },
      { shade: '700', value: '#BE2310' },
      { shade: '800', value: '#971D15' },
      { shade: '900', value: '#7A1B14' },
    ],
  },
  teal: {
    label: 'Teal',
    accent: { name: 'Finity Teal', value: '#8FBDBE' },
    colors: [
      { shade: '50',  value: '#F4F9F9' },
      { shade: '100', value: '#D9EEEC' },
      { shade: '200', value: '#B3DCDA' },
      { shade: '300', value: '#85C3C2' },
      { shade: '400', value: '#5AA3A4' },
      { shade: '500', value: '#42888A' },
      { shade: '600', value: '#336B6E' },
      { shade: '700', value: '#2C5659' },
      { shade: '800', value: '#274548' },
      { shade: '900', value: '#102023' },
    ],
  },
  red: {
    label: 'Red / Error',
    description: "Red is considered an error colour and is used for 'destructive,' 'error,' or 'negative' states or actions. For example, it can be used as the button colour for deleting an account.",
    colors: [
      { shade: '50',  value: '#FEF2F2' },
      { shade: '100', value: '#FEE2E2' },
      { shade: '200', value: '#FECACA' },
      { shade: '300', value: '#FCA5A5' },
      { shade: '400', value: '#F87171' },
      { shade: '500', value: '#EF4444' },
      { shade: '600', value: '#DC2626' },
      { shade: '700', value: '#B91C1C' },
      { shade: '800', value: '#991B1B' },
      { shade: '900', value: '#7F1D1D' },
    ],
  },
  yellow: {
    label: 'Yellow / Warning',
    description: "Yellow colours can communicate that an action is potentially destructive or \"on-hold\". These colors are commonly used in confirmations to grab the users' attention.",
    colors: [
      { shade: '50',  value: '#FEFCE8' },
      { shade: '100', value: '#FEF9C3' },
      { shade: '200', value: '#FEF08A' },
      { shade: '300', value: '#FDE047' },
      { shade: '400', value: '#FACC15' },
      { shade: '500', value: '#EAB308' },
      { shade: '600', value: '#CA8A04' },
      { shade: '700', value: '#A16207' },
      { shade: '800', value: '#854D0E' },
      { shade: '900', value: '#713F12' },
    ],
  },
  green: {
    label: 'Green / Success',
    description: 'Success colours communicate a positive action, positive trend, or a successful confirmation.',
    colors: [
      { shade: '50',  value: '#F0FDF4' },
      { shade: '100', value: '#DCFCE7' },
      { shade: '200', value: '#BBF7D0' },
      { shade: '300', value: '#86EFAC' },
      { shade: '400', value: '#4ADE80' },
      { shade: '500', value: '#22C55E' },
      { shade: '600', value: '#16A34A' },
      { shade: '700', value: '#15803D' },
      { shade: '800', value: '#166534' },
      { shade: '900', value: '#14532D' },
    ],
  },
};

function ColorSwatch({ shade, value }: { shade: string; value: string }) {
  return (
    <div className="bg-[var(--color-base-white)] flex flex-col gap-[8px] overflow-hidden rounded-[10px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.14)] w-[160px]">
      <div
        className="w-[160px] h-[96px] shrink-0"
        style={{ backgroundColor: value }}
      />
      <div className="flex flex-col gap-[var(--spacing-4)] px-[var(--spacing-8)] w-[160px] h-[64px] justify-center">
        <span className="text-[14px] font-semibold text-[var(--color-text-default)] tracking-[0.3px] leading-[20px]">{shade}</span>
        <span className="text-[14px] font-medium text-[var(--color-text-tertiary)] tracking-[0.3px] leading-[20px]">{value}</span>
      </div>
    </div>
  );
}

function ColorScale({
  scale,
}: {
  scale: {
    label: string;
    description?: string;
    accent?: { name: string; value: string };
    colors: { shade: string; value: string }[];
  };
}) {
  return (
    <div className="mb-[var(--spacing-48)]">
      <h3 className="text-[16px] font-semibold text-[var(--color-text-default)] leading-[22px] mb-[var(--spacing-4)]">{scale.label}</h3>
      {scale.description && (
        <p className="text-[16px] text-[var(--color-text-secondary)] mb-[var(--spacing-16)] leading-[24px] max-w-[864px]">
          {scale.description}
        </p>
      )}
      <div className="grid grid-cols-5 gap-x-[var(--spacing-16)] gap-y-[20px] w-fit mt-[20px]">
        {scale.colors.map((color) => (
          <ColorSwatch key={color.shade} shade={color.shade} value={color.value} />
        ))}
      </div>
      {scale.accent && (
        <div className="mt-[var(--spacing-16)]">
          <div className="bg-[var(--color-base-white)] flex flex-col gap-[8px] overflow-hidden rounded-[10px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.14)] w-[160px]">
            <div
              className="w-[160px] h-[96px] shrink-0"
              style={{ backgroundColor: scale.accent.value }}
            />
            <div className="flex flex-col gap-[var(--spacing-4)] px-[var(--spacing-8)] w-[160px] h-[64px] justify-center">
              <span className="text-[14px] font-semibold text-[var(--color-text-default)] tracking-[0.3px] leading-[20px]">{scale.accent.name}</span>
              <span className="text-[14px] font-medium text-[var(--color-text-tertiary)] tracking-[0.3px] leading-[20px]">{scale.accent.value}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ColourGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-[56px]">
      <h2 className="text-[20px] font-semibold leading-[28px] tracking-[0.2px] text-[var(--color-text-default)]">
        {title}
      </h2>
      {children}
    </section>
  );
}

import React, { useState } from 'react';
import { Tabs } from '@/components/tabs/Tabs';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'mapping', label: 'Mapping' },
];

const MAPPING_SECTIONS = [
  {
    section: 'color / text',
    label: 'Typography',
    nameHeader: 'Name',
    valueHeader: 'Value',
    usageHeader: 'Usage',
    rows: [
      { name: 'default',        value: 'grey 900',   hex: '#171717', usage: 'Header • Title • Value' },
      { name: 'secondary',      value: 'grey 700',   hex: '#404040', usage: 'Description • Label'      },
      { name: 'tertiary',       value: 'grey 500',   hex: '#737373', usage: 'Additional info' },
      { name: 'sidebar',        value: 'grey 400',   hex: '#A3A3A3', usage: 'Menu header'     },
      { name: 'contrast',    value: 'white',      hex: '#FFFFFF', usage: ''                 },
    ],
  },
  {
    section: 'color / text / link',
    label: 'Link',
    nameHeader: 'Name',
    valueHeader: 'Value',
    rows: [
      { name: 'default', value: 'coral 400', hex: '#F77445' },
      { name: 'hover',   value: 'coral 300', hex: '#FAA277' },
      { name: 'visited', value: 'coral 500', hex: '#F44C1B' },
    ],
  },
  {
    section: 'color / background / feedback',
    label: 'Feedback',
    nameHeader: 'Name',
    valueHeader: 'Background',
    borderHeader: 'Border',
    rows: [
      { name: 'info',    value: 'grey 600',   hex: '#525252', border: null,      borderHex: null      },
      { name: 'error',   value: 'red 600',    hex: '#DC2626', border: 'red 600',    borderHex: '#DC2626' },
      { name: 'success', value: 'green 600',  hex: '#16A34A', border: 'green 600',  borderHex: '#16A34A' },
      { name: 'warning', value: 'yellow 600', hex: '#CA8A04', border: 'yellow 600', borderHex: '#CA8A04' },
    ],
  },
  {
    section: 'color / icon',
    label: 'Icon',
    nameHeader: 'Name',
    valueHeader: 'Value',
    usageHeader: 'Usage',
    rows: [
      { name: 'default',  value: 'grey 900',   hex: '#171717', usage: ''     },
      { name: 'subtle',   value: 'grey 600',   hex: '#525252', usage: ''     },
      { name: 'sidebar',  value: 'grey 400',   hex: '#A3A3A3', usage: 'Icon' },
      { name: 'light',    value: 'grey 300',   hex: '#D4D4D4', usage: ''     },
      { name: 'contrast', value: 'white',      hex: '#FFFFFF', usage: ''     },
      { name: 'error',    value: 'red 600',    hex: '#DC2626', usage: ''     },
      { name: 'success',  value: 'green 600',  hex: '#16A34A', usage: ''     },
      { name: 'warning',  value: 'yellow 600', hex: '#CA8A04', usage: ''     },
      { name: 'active',   value: 'coral 400',  hex: '#F77445', usage: ''     },
    ],
  },
];


function MappingTable() {
  return (
    <div className="w-full flex flex-col gap-[var(--spacing-48)]">
      {MAPPING_SECTIONS.map((group) => (
        <div key={group.section}>
          {'label' in group && (
            <p className="text-[16px] font-semibold text-[var(--color-text-default)] leading-[22px] mb-[var(--spacing-8)]">{group.label}</p>
          )}
          {/* Section header */}
          <div className="flex gap-[var(--spacing-24)] py-[var(--spacing-12)] px-[var(--spacing-8)] border-b border-[var(--color-grey-300)] bg-[var(--color-grey-100)] rounded-t-md">
            <div className="w-[160px] shrink-0 text-[14px] font-semibold text-[var(--color-text-default)]">{group.nameHeader}</div>
            <div className="w-[200px] shrink-0 text-[14px] font-semibold text-[var(--color-text-default)]">{'valueHeader' in group ? group.valueHeader : 'Value'}</div>
            {'borderHeader' in group && (
              <div className="w-[200px] shrink-0 text-[14px] font-semibold text-[var(--color-text-default)]">{group.borderHeader}</div>
            )}
            {'usageHeader' in group && (
              <div className="flex-1 text-[14px] font-semibold text-[var(--color-text-default)]">{group.usageHeader}</div>
            )}
          </div>
          {/* Rows */}
          {group.rows.map((row) => (
            <div key={row.name} className="flex gap-[var(--spacing-24)] items-start py-[var(--spacing-16)] px-[var(--spacing-8)] border-b border-[var(--color-grey-300)]">
              <div className="w-[160px] shrink-0 text-[14px] font-semibold text-[var(--color-text-default)]">{row.name}</div>
              <div className="w-[200px] shrink-0 flex items-center gap-[var(--spacing-8)]">
                <div
                  className="w-[20px] h-[20px] rounded-[4px] border border-[var(--color-border-subtle)] shrink-0"
                  style={{ backgroundColor: row.hex }}
                />
                <span className="text-[14px] text-[var(--color-text-secondary)]">{row.value}</span>
              </div>
              {'usage' in row && (
                <div className="flex-1">
                  {row.usage ? (
                    row.usage.includes(' • ') ? (
                      <ul className="list-disc list-inside space-y-[2px]">
                        {row.usage.split(' • ').map((item) => (
                          <li key={item} className="text-[14px] text-[var(--color-text-secondary)]">{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-[14px] text-[var(--color-text-secondary)]">{row.usage}</span>
                    )
                  ) : (
                    <span className="text-[14px] text-[var(--color-text-tertiary)]">—</span>
                  )}
                </div>
              )}
              {'border' in row && (
                <div className="w-[200px] shrink-0 flex items-center gap-[var(--spacing-8)]">
                  {row.border && row.borderHex ? (
                    <>
                      <div
                        className="w-[20px] h-[20px] rounded-[4px] border border-[var(--color-border-subtle)] shrink-0"
                        style={{ backgroundColor: row.borderHex }}
                      />
                      <span className="text-[14px] text-[var(--color-text-secondary)]">{row.border}</span>
                    </>
                  ) : (
                    <span className="text-[14px] text-[var(--color-text-tertiary)]">—</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function ColorsPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <main className="bg-[var(--color-base-white)] min-h-screen">

      {/* ─── Header ───────────────────────────────────────────────── */}
      <div className="bg-[var(--color-bg-subtle)]">
        <div className="max-w-[1200px] mx-auto px-[var(--spacing-32)] pt-[var(--spacing-64)] pb-[var(--spacing-64)]">

          {/* Foundation label */}
          <p className="text-[20px] font-semibold leading-[28px] tracking-[0.3px] text-[var(--color-text-default)] mb-[var(--spacing-48)]">
            Foundation
          </p>

          {/* Title + metadata row */}
          <div className="flex items-start justify-between gap-[var(--spacing-64)] mb-[var(--spacing-40)]">
            <div className="flex flex-col gap-[var(--spacing-16)]">
              <div className="flex items-center gap-[var(--spacing-12)]">
                <h1 className="text-[48px] font-semibold leading-[48px] text-[var(--color-text-default)]">
                  Colours
                </h1>
                <span className="inline-flex items-center h-[24px] px-[var(--spacing-8)] rounded-[4px] bg-[var(--color-yellow-100)] border border-[var(--color-yellow-800)] text-[14px] font-medium tracking-[0.3px] leading-[20px] text-[var(--color-yellow-800)] whitespace-nowrap">
                  ENG BETA
                </span>
              </div>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[680px]">
                A defined colour palette brings consistency across all Finity products, from backgrounds and text to interactive elements and semantic states.
              </p>
            </div>

            {/* Metadata */}
            <div className="shrink-0 w-[280px]">
              {[
                { label: 'Created by',      value: 'Toni / Mika' },
                { label: 'Implemented by',  value: 'Monk' },
                { label: 'Last updated',    value: '08/04/2026' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`flex gap-[var(--spacing-24)] items-center px-[var(--spacing-12)] py-[var(--spacing-8)]${i > 0 ? ' border-t border-[var(--color-grey-300)]' : ''}`}
                >
                  <span className="text-[14px] font-semibold text-[var(--color-text-secondary)] tracking-[0.3px] w-[120px] shrink-0 leading-[20px]">
                    {item.label}
                  </span>
                  <span className="text-[14px] font-medium text-[var(--color-text-secondary)] tracking-[0.3px] leading-[20px]">
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
        <Tabs items={TABS} value={activeTab} onChange={setActiveTab} />
        <div className="flex-1 border-b border-[var(--color-border-subtle)]" />
      </div>

      {/* ─── Content ──────────────────────────────────────────────── */}
      {activeTab === 'overview' && (
      <div className="max-w-[1200px] mx-auto px-[var(--spacing-32)] py-[var(--spacing-64)]">

        <ColourGroup title="Primary colours">
          <p className="text-[16px] text-[var(--color-text-secondary)] leading-[24px] mt-[var(--spacing-4)] mb-[var(--spacing-16)] max-w-[864px]">
            The main colours that make up the majority of UI designs, applied to backgrounds, buttons, icons, and dividers.
          </p>
          <div className="mt-[var(--spacing-32)] mb-[var(--spacing-32)]">
            <h3 className="text-[16px] font-semibold text-[var(--color-text-default)] leading-[22px] mb-[var(--spacing-4)]">Base colour</h3>
            <p className="text-[16px] text-[var(--color-text-secondary)] leading-[24px] mb-[var(--spacing-16)] max-w-[864px]">
              Black and white are the brand's primary colours and serve as the main colour for most of the interfaces. They are applied consistently across all interactive elements, such as buttons, inputs, and various other components.
            </p>
            <div className="flex gap-[var(--spacing-16)] mt-[20px]">
              {[
                { label: 'Black', value: '#000000' },
                { label: 'White', value: '#FFFFFF' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-[var(--color-base-white)] flex flex-col gap-[8px] overflow-hidden rounded-[10px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.14)] w-[160px]">
                  <div
                    className="w-[160px] h-[96px] shrink-0"
                    style={{ backgroundColor: value }}
                  />
                  <div className="flex flex-col gap-[var(--spacing-4)] px-[var(--spacing-8)] w-[160px] h-[64px] justify-center">
                    <span className="text-[14px] font-semibold text-[var(--color-text-default)] tracking-[0.3px] leading-[20px]">{label}</span>
                    <span className="text-[14px] font-medium text-[var(--color-text-tertiary)] tracking-[0.3px] leading-[20px]">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-[52px]">
            <ColorScale scale={colorScales.grey} />
          </div>
        </ColourGroup>

        <hr className="border-t border-[var(--color-border-subtle)] mb-[var(--spacing-48)]" />

        <ColourGroup title="Accent colours">
          <p className="text-[16px] text-[var(--color-text-secondary)] leading-[24px] mt-[var(--spacing-4)] mb-[var(--spacing-32)] max-w-[864px]">
            Accent colours are used to complement the primary colors within the UI, primarily for interactive states, links, and secondary buttons. These colors should be applied sparingly or as accents alongside the primary colors.
          </p>
          <ColorScale scale={colorScales.coral} />
          <ColorScale scale={colorScales.teal} />
        </ColourGroup>

        <hr className="border-t border-[var(--color-border-subtle)] mb-[var(--spacing-48)]" />

        <ColourGroup title="Semantic colours">
          <div className="mb-[var(--spacing-32)]" />
          <ColorScale scale={colorScales.red} />
          <ColorScale scale={colorScales.yellow} />
          <ColorScale scale={colorScales.green} />
        </ColourGroup>

      </div>
      )}

      {activeTab === 'mapping' && (
        <div className="max-w-[1200px] mx-auto px-[var(--spacing-32)] py-[var(--spacing-64)]">
          <MappingTable />
        </div>
      )}
    </main>
  );
}
