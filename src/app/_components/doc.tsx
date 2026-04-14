import React from 'react';

export function Section({
  title,
  description,
  children,
  last = false,
  compact = false,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  last?: boolean;
  compact?: boolean;
}) {
  return (
    <section className={last ? '' : 'mb-[var(--spacing-80)]'}>
      <div className={compact ? 'mb-[var(--spacing-16)]' : 'mb-[var(--spacing-32)]'}>
        <h2 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.01em] text-[var(--color-text-default)]">
          {title}
        </h2>
        {description && (
          <p className="mt-[var(--spacing-8)] text-[var(--color-text-secondary)] leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

export function DemoTable({
  cols,
  rows,
  rowHeader,
}: {
  cols: { key: string; label: React.ReactNode; sub?: string; className?: string; valign?: 'middle' | 'top'; center?: boolean }[];
  rows: { label: string; cells: React.ReactNode[]; groupLabel?: string }[];
  rowHeader?: string;
}) {
  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr className="bg-[var(--color-grey-100)] border-b border-[var(--color-grey-300)]">
            <th className="text-left py-[var(--spacing-12)] px-[var(--spacing-16)] w-[120px]">
              {rowHeader && <span className="text-[14px] font-semibold text-[var(--color-text-default)]">{rowHeader}</span>}
            </th>
            {cols.map(c => (
              <th key={c.key} className={`text-left py-[var(--spacing-12)] px-[var(--spacing-16)]${c.className ? ` ${c.className}` : ''}`}>
                <span className="text-[14px] font-semibold text-[var(--color-text-default)]">{c.label}</span>
                {c.sub && <span className="ml-[6px] text-[14px] font-normal text-[var(--color-text-tertiary)]">{c.sub}</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <React.Fragment key={row.label}>
              {row.groupLabel && (
                <tr className="bg-[var(--color-grey-50)] border-b border-[var(--color-grey-300)]">
                  <td colSpan={cols.length + 1} className="py-[var(--spacing-8)] px-[var(--spacing-16)]">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">{row.groupLabel}</span>
                  </td>
                </tr>
              )}
              <tr className={`bg-[var(--color-base-white)]${i < rows.length - 1 ? ' border-b border-[var(--color-grey-300)]' : ''}`}>
                <td className="py-[var(--spacing-20)] px-[var(--spacing-16)] align-middle">
                  <span className="text-[14px] font-medium text-[var(--color-grey-900)]">{row.label}</span>
                </td>
                {row.cells.map((cell, j) => (
                  <td key={j} className={`py-[var(--spacing-20)] px-[var(--spacing-16)] ${cols[j]?.valign === 'top' ? 'align-top' : 'align-middle'}${cols[j]?.className ? ` ${cols[j].className}` : ''}`}>
                    {cols[j]?.center ? <div className="flex justify-center">{cell}</div> : cell}
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CodeBlock({ children }: { children: string }) {
  return (
    <div className="rounded-xl bg-[var(--color-grey-900)] p-[var(--spacing-32)] overflow-x-auto">
      <pre className="text-[13px] text-[var(--color-grey-300)] leading-[1.7] font-mono whitespace-pre">
        {children}
      </pre>
    </div>
  );
}
