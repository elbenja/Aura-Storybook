# Aura Toggle Replacement — Design Spec

**Date:** 2026-04-08
**Status:** Approved

---

## Overview

Replace the existing shared `Toggle` primitive with an Aura-styled version based on the Figma component set at node `2605:11937`. The replacement should preserve the current import path and exported API shape (`Toggle` and `toggleVariants`) while updating the visuals and sizing to match Aura's design system more closely.

The implementation should keep compatibility with the current codebase by treating `size="default"` as an alias for Aura `md`.

---

## Goals

- Replace the current generic shadcn-style toggle appearance with the Aura design
- Keep `src/components/ui/toggle.tsx` as the canonical import path
- Preserve compatibility for existing consumers of `Toggle` and `toggleVariants`
- Keep `toggle-group.tsx` working with the updated toggle variants
- Link styling to the existing internal token system instead of hardcoding raw Figma values

---

## Figma Source

Primary reference:

- File: `Aura - Toolkit Design`
- Node: `2605:11937`

The Figma node represents a matrix of toggle variants across:

- Variant: `Default`, `Outline`
- Size: `sm`, `md`, `lg`
- Content: icon-only and with-text
- Status: default and disabled
- Visual states: default, hover, pressed

The implementation should reflect these visual outcomes, but hover and pressed should remain interaction states, not public API props.

---

## Section 1: Component Boundary

Replace the implementation in `src/components/ui/toggle.tsx` while preserving:

- `export { Toggle, toggleVariants }`
- Radix Toggle root behavior
- compatibility with `toggle-group.tsx`

The component should remain a Radix-backed toggle primitive rather than a Storybook-only showcase component.

### Public API

Supported variants:

- `default`
- `outline`

Supported sizes:

- `sm`
- `default` → compatibility alias for Aura `md`
- `lg`

Internally, `default` should resolve to the Aura `md` geometry and spacing.

---

## Section 2: Visual Design

The new toggle should use Aura styling characteristics derived from the Figma component:

- tighter radius
- more deliberate neutral surfaces
- stronger distinction between rest, hover, and pressed
- cleaner border treatment for outline mode
- medium-weight typography
- explicit icon-only and with-text spacing behavior

### Size mapping

- `sm` → 40px height family
- `default` / Aura `md` → 44px height family
- `lg` → 48px height family

### Layout behavior

- icon-only toggles should remain square or near-square based on size
- text toggles should use content-based width with fixed height
- spacing between icon and label should reflect the Figma proportions

---

## Section 3: Token Linking

Do not hardcode the raw Figma variable values into the component. Instead, map the Aura styling to the project's existing internal CSS variable system where semantics align.

Use the current semantic tokens for:

- background surfaces
- foreground text/icon color
- borders
- muted hover surfaces
- selected/pressed surfaces
- disabled opacity handling

If a direct one-to-one semantic match is not available, prefer a minimal extension of the existing style logic rather than introducing a parallel token system.

---

## Section 4: Toggle Group Compatibility

Update `src/components/ui/toggle-group.tsx` as needed so it continues to compose correctly with the new `toggleVariants` output.

Requirements:

- `ToggleGroupItem` must inherit the updated size and variant classes
- existing grouped border and spacing logic should still work
- grouped outline toggles should not visually double up borders in an obvious way

---

## Section 5: Storybook Coverage

Add or update Storybook coverage for the toggle so the Aura replacement is reviewable in isolation.

Story coverage should show:

- default variant
- outline variant
- all supported sizes
- with-text examples
- icon-only examples
- disabled examples

Hover and pressed may be demonstrated visually in Storybook, but they should not become explicit product props on the component.

---

## Section 6: Verification

Before considering the work complete:

1. Verify `Toggle` renders with Aura visual styling across supported sizes and variants.
2. Verify `size="default"` still works as a compatibility alias.
3. Verify `toggle-group.tsx` still composes correctly with the updated variant classes.
4. Add and run a focused test for variant and size compatibility behavior.
5. Run focused linting on the touched files.

---

## Files Expected To Change

| File | Change |
|---|---|
| `docs/superpowers/specs/2026-04-08-aura-toggle-design.md` | New design spec |
| `src/components/ui/toggle.tsx` | Replace with Aura-styled implementation |
| `src/components/ui/toggle-group.tsx` | Compatibility updates if needed |
| `src/stories/primitives/Toggle.stories.tsx` or equivalent | Add/update Storybook coverage |
| test file near toggle implementation or stories | Focused regression coverage |

---

## Out Of Scope

- Creating a separate Aura-only toggle component path
- Adding visual state props like `hover` or `pressed` to the production API
- Reworking unrelated primitives
- Building the full Figma showcase matrix one-to-one in product code
