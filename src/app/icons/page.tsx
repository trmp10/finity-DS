import React from 'react';
import { Section, CodeBlock } from '@/app/_components/doc';
import * as Icons from '@finity/design-system';

// ─── Arrow icons ──────────────────────────────────────────────────────────────

const ARROW_ICONS = [
  { name: 'ArrowUp',       component: Icons.ArrowUp       },
  { name: 'ArrowDown',     component: Icons.ArrowDown     },
  { name: 'ArrowLeft',     component: Icons.ArrowLeft     },
  { name: 'ArrowRight',    component: Icons.ArrowRight    },
  { name: 'ArrowUpRight',  component: Icons.ArrowUpRight  },
  { name: 'ChevronUp',     component: Icons.ChevronUp     },
  { name: 'ChevronDown',   component: Icons.ChevronDown   },
  { name: 'ChevronLeft',   component: Icons.ChevronLeft   },
  { name: 'ChevronRight',  component: Icons.ChevronRight  },
  { name: 'CaretUp',       component: Icons.CaretUp       },
  { name: 'CaretDown',     component: Icons.CaretDown     },
  { name: 'CaretLeft',     component: Icons.CaretLeft     },
  { name: 'CaretRight',    component: Icons.CaretRight    },
];

// ─── General icons, grouped by letter ────────────────────────────────────────

const GENERAL_GROUPS: { letter: string; icons: { name: string; component: React.ComponentType<Icons.IconProps> }[] }[] = [
  {
    letter: 'A',
    icons: [
      { name: 'Add',        component: Icons.Add        },
      { name: 'AddSquare',  component: Icons.AddSquare  },
    ],
  },
  {
    letter: 'B',
    icons: [
      { name: 'Bank',      component: Icons.Bank      },
      { name: 'Book',      component: Icons.Book      },
      { name: 'Building',  component: Icons.Building  },
    ],
  },
  {
    letter: 'C',
    icons: [
      { name: 'Calculator',      component: Icons.Calculator      },
      { name: 'Calendar',        component: Icons.Calendar        },
      { name: 'CalendarCheck',   component: Icons.CalendarCheck   },
      { name: 'Camera',          component: Icons.Camera          },
      { name: 'Card',            component: Icons.Card            },
      { name: 'CardCheck',       component: Icons.CardCheck       },
      { name: 'CardDetails',     component: Icons.CardDetails     },
      { name: 'CardFilled',      component: Icons.CardFilled      },
      { name: 'Chart',           component: Icons.Chart           },
      { name: 'Chart2',          component: Icons.Chart2          },
      { name: 'Chat',            component: Icons.Chat            },
      { name: 'Check',           component: Icons.Check           },
      { name: 'CheckCircle',     component: Icons.CheckCircle     },
      { name: 'CheckSquare',     component: Icons.CheckSquare     },
      { name: 'Checklist',       component: Icons.Checklist       },
      { name: 'Clock',           component: Icons.Clock           },
      { name: 'ClockAdd',        component: Icons.ClockAdd        },
      { name: 'ClockBackward',   component: Icons.ClockBackward   },
      { name: 'ClockFilled',     component: Icons.ClockFilled     },
      { name: 'Close',           component: Icons.Close           },
      { name: 'Coins',           component: Icons.Coins           },
      { name: 'Collapse',        component: Icons.Collapse        },
      { name: 'ColumnHorizontal',component: Icons.ColumnHorizontal},
      { name: 'Convert',         component: Icons.Convert         },
    ],
  },
  {
    letter: 'D',
    icons: [
      { name: 'Data',      component: Icons.Data      },
      { name: 'Delete',    component: Icons.Delete    },
      { name: 'Download',  component: Icons.Download  },
    ],
  },
  {
    letter: 'E',
    icons: [
      { name: 'Edit',               component: Icons.Edit               },
      { name: 'Extract',            component: Icons.Extract            },
      { name: 'Exclamation',        component: Icons.Exclamation        },
      { name: 'ExclamationFilled',  component: Icons.ExclamationFilled  },
    ],
  },
  {
    letter: 'F',
    icons: [
      { name: 'File',         component: Icons.File         },
      { name: 'File2',        component: Icons.File2        },
      { name: 'FileCheck',    component: Icons.FileCheck    },
      { name: 'FileMultiple', component: Icons.FileMultiple },
      { name: 'FileSearch',   component: Icons.FileSearch   },
      { name: 'Filter',       component: Icons.Filter       },
      { name: 'Flag',         component: Icons.Flag         },
      { name: 'FolderOpen',   component: Icons.FolderOpen   },
      { name: 'Freeze',       component: Icons.Freeze       },
    ],
  },
  {
    letter: 'G',
    icons: [
      { name: 'Globe',  component: Icons.Globe  },
      { name: 'Grid',   component: Icons.Grid   },
    ],
  },
  {
    letter: 'H',
    icons: [
      { name: 'HamburgerRight',  component: Icons.HamburgerRight  },
      { name: 'Help',            component: Icons.Help            },
      { name: 'Hide',            component: Icons.Hide            },
      { name: 'Home',            component: Icons.Home            },
      { name: 'HomeFilled',      component: Icons.HomeFilled      },
    ],
  },
  {
    letter: 'I',
    icons: [
      { name: 'Info',  component: Icons.Info  },
    ],
  },
  {
    letter: 'L',
    icons: [
      { name: 'Label',        component: Icons.Label        },
      { name: 'Laptop',       component: Icons.Laptop       },
      { name: 'ListNumbers',  component: Icons.ListNumbers  },
      { name: 'Lock',         component: Icons.Lock         },
    ],
  },
  {
    letter: 'M',
    icons: [
      { name: 'Mail',          component: Icons.Mail          },
      { name: 'Menu',          component: Icons.Menu          },
      { name: 'Money1',        component: Icons.Money1        },
      { name: 'Money2',        component: Icons.Money2        },
      { name: 'Money3',        component: Icons.Money3        },
      { name: 'Notification',  component: Icons.Notification  },
    ],
  },
  {
    letter: 'P',
    icons: [
      { name: 'PieChart',  component: Icons.PieChart  },
      { name: 'Pin',       component: Icons.Pin       },
      { name: 'Pound',     component: Icons.Pound     },
    ],
  },
  {
    letter: 'R',
    icons: [
      { name: 'Receipt',  component: Icons.Receipt  },
      { name: 'Retry',    component: Icons.Retry    },
    ],
  },
  {
    letter: 'S',
    icons: [
      { name: 'Screen',          component: Icons.Screen          },
      { name: 'Search',          component: Icons.Search          },
      { name: 'SecuredFile',     component: Icons.SecuredFile     },
      { name: 'Security',        component: Icons.Security        },
      { name: 'Settings',        component: Icons.Settings        },
      { name: 'SettingsFilled',  component: Icons.SettingsFilled  },
      { name: 'Show',            component: Icons.Show            },
      { name: 'SignOut',         component: Icons.SignOut         },
      { name: 'Sort',            component: Icons.Sort            },
      { name: 'Star',            component: Icons.Star            },
      { name: 'StarFilled',      component: Icons.StarFilled      },
      { name: 'Sync',            component: Icons.Sync            },
    ],
  },
  {
    letter: 'U',
    icons: [
      { name: 'Unfreeze',    component: Icons.Unfreeze    },
      { name: 'Upload',      component: Icons.Upload      },
      { name: 'User',        component: Icons.User        },
      { name: 'UserAdd',     component: Icons.UserAdd     },
      { name: 'UserCheck',   component: Icons.UserCheck   },
      { name: 'UserSquare',  component: Icons.UserSquare  },
      { name: 'Users',       component: Icons.Users       },
      { name: 'UsersFilled', component: Icons.UsersFilled },
    ],
  },
  {
    letter: 'W',
    icons: [
      { name: 'Wallet',   component: Icons.Wallet   },
      { name: 'Warning',  component: Icons.Warning  },
    ],
  },
];

// ─── Feedback icons ───────────────────────────────────────────────────────────

const FEEDBACK_ICONS = [
  { name: 'ErrorFilled',    component: Icons.ErrorFilled    },
  { name: 'InfoFilled',     component: Icons.InfoFilled     },
  { name: 'SuccessFilled',  component: Icons.SuccessFilled  },
  { name: 'WarningFilled',  component: Icons.WarningFilled  },
  { name: 'CloseFilled',    component: Icons.CloseFilled    },
];

// ─── Components ──────────────────────────────────────────────────────────────

function IconCell({ name, component: IconComponent }: { name: string; component: React.ComponentType<Icons.IconProps> }) {
  return (
    <div className="flex flex-col items-center gap-[var(--spacing-8)] p-[var(--spacing-12)] rounded-[8px] hover:bg-[var(--color-grey-100)] transition-colors">
      <IconComponent size={24} />
      <span className="text-[11px] font-medium text-[var(--color-text-tertiary)] text-center leading-tight break-all w-full text-center">
        {name}
      </span>
    </div>
  );
}

function IconGrid({ icons }: { icons: { name: string; component: React.ComponentType<Icons.IconProps> }[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-[var(--spacing-4)]">
      {icons.map(({ name, component }) => (
        <IconCell key={name} name={name} component={component} />
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IconsPage() {
  return (
    <main className="bg-[var(--color-base-white)] min-h-screen">

      {/* ─── Header ───────────────────────────────────────────────── */}
      <div className="bg-[var(--color-bg-subtle)]">
        <div className="max-w-[1200px] mx-auto px-[var(--spacing-32)] pt-[var(--spacing-64)] pb-[var(--spacing-64)]">

          <p className="text-[20px] font-semibold leading-[28px] tracking-[0.3px] text-[var(--color-text-default)] mb-[var(--spacing-48)]">
            Foundation
          </p>

          <div className="flex items-start justify-between gap-[var(--spacing-64)] mb-[var(--spacing-40)]">
            <div className="flex flex-col gap-[var(--spacing-16)]">
              <h1 className="text-[48px] font-semibold leading-[48px] text-[var(--color-text-default)]">
                Icons
              </h1>
              <p className="text-[16px] font-medium leading-[24px] text-[var(--color-text-secondary)] max-w-[520px]">
                Visual symbols designed to quickly convey actions, concepts, and categories, making it easier for users to understand and navigate an interface.
              </p>
            </div>

            <div className="shrink-0 w-[280px]">
              {[
                { label: 'Created by',     value: 'Toni' },
                { label: 'Implemented by', value: '' },
                { label: 'Last updated', value: '24/10/2025' },
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

      {/* ─── Content ──────────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-[var(--spacing-32)] py-[var(--spacing-64)]">

        {/* Arrows */}
        <Section
          title="Arrows"
          description="Used to indicate direction, navigation, or progression. They appear in buttons, dropdowns, pagination, and other navigational elements to guide user flow."
        >
          <IconGrid icons={ARROW_ICONS} />
        </Section>

        {/* General */}
        <Section
          title="General"
          description="Widely used across platforms to visually represent general functions and menu options."
        >
          <div className="flex flex-col gap-[var(--spacing-32)]">
            {GENERAL_GROUPS.map(({ letter, icons }) => (
              <div key={letter} className="flex gap-[var(--spacing-24)]">
                <div className="w-[24px] shrink-0 pt-[var(--spacing-12)]">
                  <span className="text-[13px] font-semibold text-[var(--color-text-tertiary)] uppercase">
                    {letter}
                  </span>
                </div>
                <div className="flex-1">
                  <IconGrid icons={icons} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Feedback */}
        <Section
          title="Feedback / helper"
          description="These icons indicate action status or system response. They are consistently used in alerts, helper text, and notifications for clarity."
        >
          <IconGrid icons={FEEDBACK_ICONS} />
        </Section>

        {/* Sizes */}
        <Section title="Sizes" description="Icons can be rendered at different sizes using the size prop.">
          <div className="flex items-end gap-[var(--spacing-32)]">
            {[16, 20, 24, 32, 40, 48].map((size) => (
              <div key={size} className="flex flex-col items-center gap-[var(--spacing-12)]">
                <Icons.Home size={size} />
                <span className="text-[11px] font-medium text-[var(--color-text-tertiary)]">{size}px</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Usage */}
        <Section title="Usage" last>
          <CodeBlock>{`import { Home, Search, ChevronRight, ErrorFilled } from '@finity/design-system';

// Default size (24px), inherits currentColor
<Home />

// Custom size
<Search size={20} />

// Custom colour
<ChevronRight color="var(--color-coral-500)" />

// Feedback icons have semantic colours by default
<ErrorFilled />    // Red
<SuccessFilled />  // Green
<WarningFilled />  // Yellow
<InfoFilled />     // Grey`}</CodeBlock>
        </Section>

      </div>
    </main>
  );
}
