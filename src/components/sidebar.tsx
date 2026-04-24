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
      { href: '/components/button',               label: 'Button'          },
      { href: '/components/checkbox',             label: 'Checkbox'        },
      { href: '/components/combobox',             label: 'ComboBox'        },
      { href: '/components/date-of-birth-field', label: 'Date of birth'   },
      { href: '/components/frequency-badge',      label: 'Frequency badge' },
      { href: '/components/helper-text',          label: 'Helper text'     },
      { href: '/components/link',                 label: 'Link'            },
      { href: '/components/mobile-number-field',  label: 'Mobile number'   },
      { href: '/components/pin-code-field',       label: 'PIN code'        },
      { href: '/components/radio-button',         label: 'Radio group'     },
      { href: '/components/search-field',         label: 'Search field'    },
      { href: '/components/select',               label: 'Select'          },
      { href: '/components/status-badge',           label: 'Status badge'    },
      { href: '/components/text-area',             label: 'Text area'       },
      { href: '/components/text-field',            label: 'Text field'      },
      // { href: '/components/tabs', label: 'Tabs' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] bg-[var(--color-grey-900)] flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex items-center h-[72px] pl-[20px] shrink-0">
        <span className="text-white text-size-heading-sm font-semibold">
          Finity Design System
        </span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-[var(--spacing-32)] px-[12px] pb-[var(--spacing-32)] flex-1">
        {NAV.map(({ section, items }) => (
          <div key={section} className="flex flex-col">
            <div className="flex items-center h-[32px] px-[var(--spacing-8)]">
              <span className="text-size-small font-semibold uppercase text-[var(--color-grey-400)]">
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
                      text-size-compact
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
