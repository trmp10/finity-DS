'use client';

import React, { useState, useRef } from 'react';
import { TextArea } from '@finity/design-system';
import { Tabs } from '@/components/tabs/Tabs';
import { Section, DemoTable } from '@/app/_components/doc';

function ResizeHandle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" fill="white" fillOpacity="0.01" style={{ mixBlendMode: 'multiply' }} />
      <path d="M8.5 11.5L11.5 8.5M4.5 11.5L11.5 4.5" stroke="var(--color-grey-600)" />
    </svg>
  );
}

const INITIAL_NOTE = 'Payroll ensures employees are paid accurately and on time by calculating gross wages, deducting taxes and deductions, and issuing net pay. It manages benefits, tracks hours, and ensures compliance with labor laws. Automated systems help make these processes efficient.';

const MAX_LENGTH = 300;
const MIN_H = 120;
const RESIZE_H = 16;
const THUMB_H = 80;

function TextAreaScrollStatic() {
  return (
    <div className="flex flex-col gap-[var(--spacing-4)] w-full">
      <div className="flex items-center justify-between">
        <span className="text-body-medium text-[var(--color-text-secondary)]">Label</span>
        <span className="text-compact-medium text-[var(--color-text-secondary)]">280/300</span>
      </div>
      <div className="relative rounded-[8px] border border-[var(--color-border-default)] bg-[var(--color-base-white)] overflow-hidden" style={{ height: MIN_H }}>
        <div className="px-[var(--spacing-12)] pt-[var(--spacing-8)] pr-[28px] pb-[var(--spacing-8)] text-body-medium text-[var(--color-text-default)] leading-[22px]">
          {INITIAL_NOTE}
        </div>
        <div className="absolute right-[-1px] top-[-1px] bottom-[-1px] w-[16px] flex flex-col pointer-events-none">
          <div className="relative flex-1">
            <div className="absolute left-1/2 -translate-x-1/2 w-[8px] bg-[var(--color-grey-300)] rounded-[8px]" style={{ top: 4, height: THUMB_H }} />
          </div>
          <div className="h-[16px] w-full flex items-center justify-center">
            <ResizeHandle />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAreaScrollPreview() {
  const [value, setValue] = useState(INITIAL_NOTE);
  const [containerH, setContainerH] = useState(MIN_H);
  const [thumbTop, setThumbTop] = useState(4);
  const ref = useRef<HTMLTextAreaElement>(null);

  const updateThumb = () => {
    const el = ref.current;
    if (!el) return;
    const trackH = el.clientHeight - RESIZE_H;
    const maxScroll = el.scrollHeight - el.clientHeight;
    const ratio = maxScroll > 0 ? el.scrollTop / maxScroll : 0;
    setThumbTop(4 + Math.max(0, ratio * (trackH - THUMB_H)));
  };

  const onResizeMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const startY = e.clientY;
    const startH = containerH;

    const onMouseMove = (ev: MouseEvent) => {
      setContainerH(Math.max(MIN_H, startH + ev.clientY - startY));
      updateThumb();
    };
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div className="flex flex-col gap-[var(--spacing-4)] w-full">
      <div className="flex items-center justify-between">
        <span className="text-body-medium text-[var(--color-text-secondary)]">Note</span>
        <span className="text-compact-medium text-[var(--color-text-secondary)]">{value.length}/{MAX_LENGTH}</span>
      </div>
      <div
        className="relative rounded-[8px] border border-[var(--color-border-default)] bg-[var(--color-base-white)] overflow-hidden"
        style={{ height: containerH }}
      >
        <textarea
          ref={ref}
          value={value}
          maxLength={MAX_LENGTH}
          placeholder="Add a note"
          onChange={(e) => { setValue(e.target.value); updateThumb(); }}
          onScroll={updateThumb}
          className="absolute inset-0 w-full h-full resize-none outline-none overflow-y-auto px-[var(--spacing-12)] pt-[var(--spacing-8)] pr-[28px] pb-[var(--spacing-8)] text-body-medium text-[var(--color-text-default)] placeholder:text-[var(--color-text-tertiary)] placeholder:font-normal bg-transparent [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        />
        {/* Scrollbar + resize strip */}
        <div className="absolute right-[-1px] top-[-1px] bottom-[-1px] w-[16px] flex flex-col pointer-events-none">
          <div className="relative flex-1">
            <div
              className="absolute left-1/2 -translate-x-1/2 w-[8px] bg-[var(--color-grey-300)] rounded-[8px]"
              style={{ top: thumbTop, height: THUMB_H }}
            />
          </div>
          <div
            className="h-[16px] w-full flex items-center justify-center pointer-events-auto cursor-s-resize"
            onMouseDown={onResizeMouseDown}
          >
            <ResizeHandle />
          </div>
        </div>
      </div>
    </div>
  );
}

// Static renders for Hover and Focus — avoids real focus in the states table.
function TextAreaStatic({ state }: { state: 'hover' | 'focus' }) {
  const shadow = state === 'hover'
    ? '[box-shadow:0_0_0_2px_var(--color-text-default)]'
    : '[box-shadow:0_0_0_3px_var(--color-text-default)]';
  return (
    <div className="flex flex-col gap-[var(--spacing-4)] w-full">
      <span className="text-body-medium text-[var(--color-text-secondary)]">Label</span>
      <div className={`w-full min-h-[80px] rounded-[8px] px-[var(--spacing-12)] pt-[var(--spacing-8)] pb-[var(--spacing-8)] bg-[var(--color-base-white)] ${shadow}`}>
        {state === 'focus' ? (
          <span className="inline-block w-px h-[20px] bg-[var(--color-text-default)]" />
        ) : (
          <span className="text-body-regular font-normal text-[var(--color-text-tertiary)]">Placeholder</span>
        )}
      </div>
    </div>
  );
}

const VALUE = 'Payroll handles employee pay, taxes, and deductions to ensure accurate, on-time compensation.';

const STATES: { label: string; description: string; node: React.ReactNode }[] = [
  {
    label: 'Default',
    description: 'Empty and ready for input',
    node: <TextArea label="Label" placeholder="Placeholder" />,
  },
  {
    label: 'Hover',
    description: 'Pointer is over the field but it is not yet focused',
    node: <TextAreaStatic state="hover" />,
  },
  {
    label: 'Focus',
    description: 'Field is active and ready for input',
    node: <TextAreaStatic state="focus" />,
  },
  {
    label: 'Active',
    description: 'Contains a user-entered value',
    node: <TextArea label="Label" defaultValue={VALUE} />,
  },
  {
    label: 'Error',
    description: 'Indicates a validation error, always pair with an error message below',
    node: <TextArea label="Label" defaultValue={VALUE} errorMessage="Enter a valid description" />,
  },
  {
    label: 'Read-only',
    description: 'Displays a value that cannot be edited',
    node: <TextArea label="Label" defaultValue={VALUE} readOnly />,
  },
  {
    label: 'Character counter / Scroll resize',
    description: 'Shows remaining character count and allows vertical resizing',
    node: <TextAreaScrollStatic />,
  },
];

export default function TextAreaPage() {
  const [tab, setTab] = useState('overview');

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
                Text area
              </h1>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[520px]">
                A multi-line input field designed for longer, free-form text entry, like comments, messages, or detailed descriptions.
              </p>
            </div>

            {/* Metadata */}
            <div className="shrink-0 w-[280px]">
              {[
                { label: 'Created by',   value: 'vez' },
                { label: 'Updated by',   value: 'toni' },
                { label: 'Last updated', value: '01/10/2025' },
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
            {/* Interactive demo */}
            <div className="mb-[var(--spacing-80)]">
              <div className="bg-[#FAFAFA] p-[var(--spacing-48)] flex items-center justify-center">
                <div className="w-[380px]">
                  <TextAreaScrollPreview />
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
