import { HeadingLG, HeadingSM } from '@/components/typography';
import { Button } from '@/components/button';
import { Add, ChevronRight, Download, Settings } from '@/components/icons';

export default function ButtonPage() {
  return (
    <main className="min-h-screen p-8 md:p-16 max-w-6xl mx-auto">
      {/* Navigation */}
      <nav className="mb-8 flex gap-4 flex-wrap">
        <a href="/" className="text-compact-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-default)] pb-1">
          Typography
        </a>
        <a href="/colors" className="text-compact-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-default)] pb-1">
          Colours
        </a>
        <a href="/spacing" className="text-compact-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-default)] pb-1">
          Spacing
        </a>
        <a href="/icons" className="text-compact-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-default)] pb-1">
          Icons
        </a>
        <a href="/components/button" className="text-compact-semibold text-[var(--color-coral-500)] border-b-2 border-[var(--color-coral-500)] pb-1">
          Button
        </a>
      </nav>

      {/* Header */}
      <header className="mb-16">
        <p className="text-compact-medium text-[var(--color-text-tertiary)] mb-2">
          Component &rarr; Action
        </p>
        <h1 className="text-[3rem] font-semibold leading-tight mb-4">
          Button
        </h1>
        <p className="text-[1.5rem] font-medium text-[var(--color-text-secondary)] leading-relaxed">
          Buttons trigger actions or navigate users to another page. They come in multiple styles to guide users and emphasize key actions in a flow.
        </p>
      </header>

      {/* Example */}
      <section className="mb-16 p-12 bg-[var(--color-bg-subtle)] rounded-xl flex items-center justify-center gap-4">
        <Button variant="secondary">Add employee</Button>
        <Button variant="primary">Process payroll</Button>
      </section>

      {/* Variants */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Variants</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-8">

          {/* Primary */}
          <div>
            <HeadingSM className="mb-4">Primary</HeadingSM>
            <p className="text-body-medium text-[var(--color-text-secondary)] mb-4">
              Use for the main action on a page or in a form.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Button</Button>
              <Button variant="primary" iconLeft={<Add size={18} />}>Button</Button>
              <Button variant="primary" iconRight={<ChevronRight size={18} />}>Button</Button>
              <Button variant="primary" iconOnly><Settings size={18} /></Button>
            </div>
          </div>

          {/* Secondary */}
          <div>
            <HeadingSM className="mb-4">Secondary</HeadingSM>
            <p className="text-body-medium text-[var(--color-text-secondary)] mb-4">
              Use for secondary actions that complement the primary action.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="secondary">Button</Button>
              <Button variant="secondary" iconLeft={<Add size={18} />}>Button</Button>
              <Button variant="secondary" iconRight={<ChevronRight size={18} />}>Button</Button>
              <Button variant="secondary" iconOnly><Settings size={18} /></Button>
            </div>
          </div>

          {/* Tertiary */}
          <div>
            <HeadingSM className="mb-4">Tertiary</HeadingSM>
            <p className="text-body-medium text-[var(--color-text-secondary)] mb-4">
              Use for less prominent actions or when space is limited.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="tertiary">Button</Button>
              <Button variant="tertiary" iconLeft={<Add size={18} />}>Button</Button>
              <Button variant="tertiary" iconRight={<ChevronRight size={18} />}>Button</Button>
              <Button variant="tertiary" iconOnly><Settings size={18} /></Button>
            </div>
          </div>

          {/* Emphasis */}
          <div>
            <HeadingSM className="mb-4">Emphasis</HeadingSM>
            <p className="text-body-medium text-[var(--color-text-secondary)] mb-4">
              Use to draw attention to important actions.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="emphasis">Button</Button>
              <Button variant="emphasis" iconLeft={<Add size={18} />}>Button</Button>
              <Button variant="emphasis" iconRight={<ChevronRight size={18} />}>Button</Button>
              <Button variant="emphasis" iconOnly><Settings size={18} /></Button>
            </div>
          </div>

          {/* Danger */}
          <div>
            <HeadingSM className="mb-4">Danger</HeadingSM>
            <p className="text-body-medium text-[var(--color-text-secondary)] mb-4">
              Use for destructive actions like delete or remove.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="danger">Button</Button>
              <Button variant="danger" iconLeft={<Add size={18} />}>Button</Button>
              <Button variant="danger" iconRight={<ChevronRight size={18} />}>Button</Button>
              <Button variant="danger" iconOnly><Settings size={18} /></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Sizes</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-8">
          <div className="flex flex-wrap items-end gap-6">
            <div className="flex flex-col items-center gap-2">
              <Button variant="primary" size="large">Button</Button>
              <span className="text-compact-medium text-[var(--color-text-tertiary)]">Large (48px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button variant="primary" size="medium">Button</Button>
              <span className="text-compact-medium text-[var(--color-text-tertiary)]">Medium (40px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button variant="primary" size="small">Button</Button>
              <span className="text-compact-medium text-[var(--color-text-tertiary)]">Small (32px)</span>
            </div>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="mb-16">
        <HeadingLG className="mb-6">States</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-[var(--color-border-subtle)]">
                  <th className="text-compact-semibold py-3 pr-8">Variant</th>
                  <th className="text-compact-semibold py-3 pr-8">Default</th>
                  <th className="text-compact-semibold py-3 pr-8">Loading</th>
                  <th className="text-compact-semibold py-3">Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border-subtle)]">
                  <td className="text-compact-medium py-4 pr-8">Primary</td>
                  <td className="py-4 pr-8"><Button variant="primary">Button</Button></td>
                  <td className="py-4 pr-8"><Button variant="primary" loading>Button</Button></td>
                  <td className="py-4"><Button variant="primary" disabled>Button</Button></td>
                </tr>
                <tr className="border-b border-[var(--color-border-subtle)]">
                  <td className="text-compact-medium py-4 pr-8">Secondary</td>
                  <td className="py-4 pr-8"><Button variant="secondary">Button</Button></td>
                  <td className="py-4 pr-8"><Button variant="secondary" loading>Button</Button></td>
                  <td className="py-4"><Button variant="secondary" disabled>Button</Button></td>
                </tr>
                <tr className="border-b border-[var(--color-border-subtle)]">
                  <td className="text-compact-medium py-4 pr-8">Emphasis</td>
                  <td className="py-4 pr-8"><Button variant="emphasis">Button</Button></td>
                  <td className="py-4 pr-8"><Button variant="emphasis" loading>Button</Button></td>
                  <td className="py-4"><Button variant="emphasis" disabled>Button</Button></td>
                </tr>
                <tr>
                  <td className="text-compact-medium py-4 pr-8">Danger</td>
                  <td className="py-4 pr-8"><Button variant="danger">Button</Button></td>
                  <td className="py-4 pr-8"><Button variant="danger" loading>Button</Button></td>
                  <td className="py-4"><Button variant="danger" disabled>Button</Button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* With Icons */}
      <section className="mb-16">
        <HeadingLG className="mb-6">With Icons</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-6">
          <div>
            <p className="text-compact-semibold mb-3">Icon Left</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" iconLeft={<Download size={18} />}>Download</Button>
              <Button variant="secondary" iconLeft={<Add size={18} />}>Add item</Button>
              <Button variant="tertiary" iconLeft={<Settings size={18} />}>Settings</Button>
            </div>
          </div>
          <div>
            <p className="text-compact-semibold mb-3">Icon Right</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" iconRight={<ChevronRight size={18} />}>Continue</Button>
              <Button variant="secondary" iconRight={<ChevronRight size={18} />}>Next step</Button>
              <Button variant="tertiary" iconRight={<ChevronRight size={18} />}>Learn more</Button>
            </div>
          </div>
          <div>
            <p className="text-compact-semibold mb-3">Icon Only</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" iconOnly><Add size={18} /></Button>
              <Button variant="secondary" iconOnly><Settings size={18} /></Button>
              <Button variant="tertiary" iconOnly><Download size={18} /></Button>
              <Button variant="emphasis" iconOnly><Add size={18} /></Button>
              <Button variant="danger" iconOnly><Add size={18} /></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <HeadingLG className="mb-6">Usage</HeadingLG>
        <div className="border-t-4 border-[var(--foreground)] pt-8 space-y-6">
          <div className="p-6 bg-[var(--color-bg-muted)] rounded-lg">
            <code className="text-compact-medium block mb-4">
              {`// Import and use`}
            </code>
            <pre className="text-compact-medium text-[var(--color-text-secondary)] overflow-x-auto">
{`import { Button } from '@/components/button';
import { Add, ChevronRight } from '@/components/icons';

// Basic usage
<Button>Click me</Button>

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="emphasis">Emphasis</Button>
<Button variant="danger">Danger</Button>

// Sizes
<Button size="large">Large</Button>
<Button size="medium">Medium</Button>
<Button size="small">Small</Button>

// With icons
<Button iconLeft={<Add size={18} />}>Add item</Button>
<Button iconRight={<ChevronRight size={18} />}>Continue</Button>
<Button iconOnly><Add size={18} /></Button>

// States
<Button loading>Loading</Button>
<Button disabled>Disabled</Button>`}
            </pre>
          </div>
        </div>
      </section>
    </main>
  );
}
