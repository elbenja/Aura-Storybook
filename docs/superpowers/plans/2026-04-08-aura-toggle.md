# Aura Toggle Replacement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the shared toggle primitive with an Aura-styled version that preserves the current API surface and keeps toggle-group compatibility intact.

**Architecture:** Keep the implementation anchored to the existing Radix `TogglePrimitive.Root`, but swap the variant class system to Aura geometry, spacing, and semantic tokens. Add one focused unit-style test for the compatibility alias and rendered class behavior, and add a dedicated Storybook story so the replacement is reviewable in isolation.

**Tech Stack:** React 19, TypeScript, Radix UI, class-variance-authority, Storybook 10, Bun/Vitest-compatible test file, Tailwind CSS v4

---

### Task 1: Add the failing compatibility test

**Files:**
- Create: `src/components/ui/toggle.test.tsx`
- Test: `src/components/ui/toggle.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Toggle, toggleVariants } from "./toggle";

describe("Aura Toggle", () => {
  it("maps the default size alias to Aura md classes", () => {
    const className = toggleVariants({ size: "default", variant: "default" });

    expect(className).toContain("h-11");
    expect(className).toContain("px-3");
  });

  it("renders outline toggles with border styling", () => {
    const markup = renderToStaticMarkup(
      <Toggle variant="outline" aria-label="Outline toggle" />
    );

    expect(markup).toContain("border");
    expect(markup).toContain("data-slot=\"toggle\"");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test src/components/ui/toggle.test.tsx`
Expected: FAIL because the current toggle classes do not match the Aura alias expectations.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/toggle.test.tsx
git commit -m "test: add aura toggle compatibility coverage"
```

### Task 2: Replace the toggle implementation with the Aura styling system

**Files:**
- Modify: `src/components/ui/toggle.tsx`
- Modify: `src/components/ui/toggle-group.tsx`
- Test: `src/components/ui/toggle.test.tsx`

- [ ] **Step 1: Implement Aura toggle variants**

Update `src/components/ui/toggle.tsx` so the `toggleVariants` map preserves the same exports but resolves to Aura styling. The implementation should:

```tsx
const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] font-medium outline-none transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "...",
        outline: "...",
      },
      size: {
        sm: "...",
        default: "...", // Aura md alias
        lg: "...",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

The Aura classes should express:
- `sm` as the 40px height family
- `default` as the 44px height family
- `lg` as the 48px height family
- default and outline visual treatments linked to existing semantic tokens
- on/pressed styles through `data-[state=on]`
- hover styling via existing semantic variables

- [ ] **Step 2: Preserve the Radix-backed component interface**

Keep the public component shape:

```tsx
function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```

- [ ] **Step 3: Update toggle-group compatibility**

Adjust `src/components/ui/toggle-group.tsx` only as needed so grouped toggles still inherit:
- the updated size classes
- the updated variant classes
- reasonable grouped border behavior in outline mode

If no functional changes are required beyond the new variant output, keep the file minimal.

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test src/components/ui/toggle.test.tsx`
Expected: PASS with 2 passing tests.

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/toggle.tsx src/components/ui/toggle-group.tsx src/components/ui/toggle.test.tsx
git commit -m "feat: replace toggle with aura styling"
```

### Task 3: Add Storybook coverage for the new toggle

**Files:**
- Create: `src/stories/primitives/Toggle.stories.tsx`
- Test: `src/components/ui/toggle.test.tsx`

- [ ] **Step 1: Create the story file**

Add a dedicated primitive story with:

```tsx
const meta: Meta<typeof Toggle> = {
  title: "Primitives/Toggle",
  component: Toggle,
  parameters: {
    controls: { expanded: true },
  },
};
```

Include stories or render blocks that demonstrate:
- default variant
- outline variant
- `sm`, `default`, `lg`
- with-text examples using `Plant02Icon`
- icon-only examples
- disabled examples

- [ ] **Step 2: Keep the examples aligned with the Aura design**

Use existing tokens and existing icon exports, for example:

```tsx
<Toggle aria-label="Toggle italic">
  <HugeiconsIcon icon={Plant02Icon} size={16} />
  Italic
</Toggle>
```

And icon-only:

```tsx
<Toggle aria-label="Toggle plant">
  <HugeiconsIcon icon={Plant02Icon} size={16} />
</Toggle>
```

- [ ] **Step 3: Verify the focused test still passes**

Run: `bun test src/components/ui/toggle.test.tsx`
Expected: PASS with 2 passing tests.

- [ ] **Step 4: Commit**

```bash
git add src/stories/primitives/Toggle.stories.tsx
git commit -m "feat: add storybook coverage for aura toggle"
```

### Task 4: Verify the touched files

**Files:**
- Modify: none
- Test: `src/components/ui/toggle.test.tsx`

- [ ] **Step 1: Run the focused test**

Run: `bun test src/components/ui/toggle.test.tsx`
Expected: PASS with 2 passing tests.

- [ ] **Step 2: Run focused linting**

Run: `npx eslint src/components/ui/toggle.tsx src/components/ui/toggle-group.tsx src/components/ui/toggle.test.tsx src/stories/primitives/Toggle.stories.tsx`
Expected: exit code 0.

- [ ] **Step 3: Review the diff**

Run: `git diff -- src/components/ui/toggle.tsx src/components/ui/toggle-group.tsx src/components/ui/toggle.test.tsx src/stories/primitives/Toggle.stories.tsx docs/superpowers/plans/2026-04-08-aura-toggle.md`
Expected: only the Aura toggle implementation, the focused test, the new story, and the plan file.
