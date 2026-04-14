'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  {
    section: 'Foundations',
    items: [
      { href: '/colors', label: 'Colours' },
      { href: '/typography', label: 'Typography' },
      // { href: '/spacing', label: 'Spacing' },
      // { href: '/icons', label: 'Icons' },
    ],
  },
  {
    section: 'Components',
    items: [
      { href: '/components/button',         label: 'Button'          },
      { href: '/components/frequency-badge', label: 'Frequency badge'  },
      { href: '/components/helper-text',     label: 'Helper text'      },
      { href: '/components/status-badge',    label: 'Status badge'     },
      // { href: '/components/tabs', label: 'Tabs' },
      // { href: '/components/text-field', label: 'Text field' },
      // { href: '/components/search-field', label: 'Search field' },
      // { href: '/components/text-area', label: 'Text area' },
      // { href: '/components/checkbox', label: 'Checkbox' },
      // { href: '/components/date-of-birth-field', label: 'Date of birth' },
      // { href: '/components/mobile-number-field', label: 'Mobile number' },
      // { href: '/components/pin-code-field', label: 'PIN code' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] bg-[var(--color-grey-900)] flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex items-center h-[72px] pl-[20px] shrink-0">
        <span className="text-white text-[18px] font-semibold tracking-[0.2px] leading-[24px]">
          Finity Design System
        </span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-[var(--spacing-32)] px-[12px] pb-[var(--spacing-32)] flex-1">
        {NAV.map(({ section, items }) => (
          <div key={section} className="flex flex-col">
            <div className="flex items-center h-[32px] px-[var(--spacing-8)]">
              <span className="text-[12px] font-semibold uppercase tracking-[var(--letter-spacing-wide)] leading-[var(--line-height-small)] text-[var(--color-grey-400)]">
                {section}
              </span>
            </div>
            <div className="flex flex-col">
              {items.map(({ href, label }) => {
                const isActive = href === '/' ? pathname === '/' : pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`
                      flex items-center h-[40px] px-[var(--spacing-8)] rounded-lg
                      text-[14px] tracking-[var(--letter-spacing-wide)] leading-[var(--line-height-compact)]
                      transition-colors duration-100
                      hover:bg-white/5
                      ${isActive
                        ? 'text-[var(--color-coral-400)] font-semibold'
                        : 'text-white font-medium'
                      }
                    `}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

    </aside>
  );
}
