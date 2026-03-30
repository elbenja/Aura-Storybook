# Logo Branding Foundations Page — Design Spec

**Date:** 2026-03-30
**Status:** Approved

---

## Overview

Add a new Storybook foundations page at `Foundations/Logo Branding` that documents Aura's core brand marks in an educational, recommendation-led format. The page should use the Figma brand icon and wordmark as the visual source of truth, then show practical guidance for how to use them through four sections: brand assets, recommended sizes, clear space, and background treatments.

This page is not intended to be a full brand manual. It should be lightweight, visual, and useful for design-to-code handoff inside the existing Storybook foundations area.

---

## Figma Sources

The page uses these Figma nodes as canonical references:

| Purpose | Figma node |
|---|---|
| Brand icon | `858:531` |
| Wordmark | `2514:12524` |
| Aura gray ramp | `2514:12537` |

Observed brand-adjacent values from Figma:

| Token | Hex |
|---|---|
| `AuraGray/50` | `#f9f8f6` |
| `AuraGray/100` | `#eeece8` |
| `AuraGray/200` | `#e4e2dc` |
| `AuraGray/300` | `#d1d5db` |
| `AuraGray/400` | `#9ca3af` |
| `AuraGray/600` | `#4b5563` |
| `AuraGray/700` | `#374151` |
| `AuraGray/800` | `#1f2937` |
| `AuraGray/900` | `#111827` |
| `AuraGray/950` | `#030712` |
| `White` | `#ffffff` |

---

## Section 1: Page Structure

Create a new story file at `src/stories/foundations/LogoBranding.stories.tsx` with Storybook metadata:

```ts
const meta: Meta = {
  title: "Foundations/Logo Branding",
  parameters: {
    controls: { disable: true },
  },
};
```

The page is documentation-style and follows the same lightweight pattern as the existing foundations stories. It opens with a short description that explains these are Aura's approved core brand marks, then renders four sections in this order:

1. Brand Assets
2. Recommended Sizes
3. Clear Space
4. Background Treatments

Each section should have a heading, a short educational description, and a clean grid or stack of visual examples.

---

## Section 2: Brand Assets

Display the two canonical brand marks in side-by-side asset cards:

- Aura brand icon
- Aura wordmark

Each card should include:

- asset label
- short usage note
- native or reference dimensions
- isolated visual preview in a framed area

The visual previews should keep a neutral presentation using Aura-aligned surfaces instead of introducing decorative styling. The goal is to help teammates identify the canonical assets quickly.

---

## Section 3: Recommended Sizes

Show the brand icon and wordmark at a few recommended example sizes to communicate legibility, not strict enforcement.

### Icon

Render the icon at:

- `24px`
- `32px`
- `48px`
- `64px`

### Wordmark

Render the wordmark in width-led examples that preserve the original aspect ratio, such as:

- `96px`
- `128px`
- `160px`
- `200px`

Each size sample should be labeled clearly. Copy should frame these as recommended working sizes for product UI, documentation, and presentation surfaces.

---

## Section 4: Clear Space

Show each brand mark inside a larger framed preview that demonstrates minimum breathing room around the asset.

Implementation approach:

- use a padded card with a visible outer boundary
- center the brand mark inside the container
- include a short note describing the spacing as recommended clear space

This should remain illustrative rather than mathematically strict. The page is meant to teach good usage patterns, not define a legalistic measurement system.

---

## Section 5: Background Treatments

Show approved background pairings using the Aura gray palette from Figma. This section should demonstrate that the marks work best on restrained neutral surfaces and help teammates judge contrast quickly.

Recommended treatments:

- light surface: `AuraGray/50` (`#f9f8f6`)
- soft neutral surface: `AuraGray/100` (`#eeece8`)
- dark neutral surface: `AuraGray/700` or `AuraGray/800`

Because the Figma references are light marks, the dark neutral treatment is especially important for readability examples. If a light-background treatment makes the source asset appear too low-contrast, keep it as an asset-display surface rather than presenting it as a recommended production pairing.

Each treatment card should include:

- background name
- hex value
- preview of icon and wordmark on that surface

---

## Component And Data Shape

Keep the story self-contained and driven by small local arrays/constants. No shared component extraction is needed unless the file becomes hard to scan.

Suggested local structures:

- `brandAssets`
- `iconSizeExamples`
- `wordmarkSizeExamples`
- `backgroundTreatments`

The story should use plain React and the repo's existing Tailwind-based utility styling, following the same conventions as the other foundations pages.

---

## Verification

Before considering the work complete:

1. Confirm the new page appears in Storybook as `Foundations/Logo Branding`.
2. Verify all four sections render with the expected headings and explanatory copy.
3. Verify the icon and wordmark remain legible across the recommended size examples.
4. Verify the background treatment cards render correctly in Storybook's light and dark UI chrome.
5. Confirm controls are disabled for the page, matching the existing foundations stories.

---

## Files Expected To Change

| File | Change |
|---|---|
| `docs/superpowers/specs/2026-03-30-logo-branding-design.md` | New design spec |
| `src/stories/foundations/LogoBranding.stories.tsx` | New Storybook foundations page |

---

## Out Of Scope

- Creating a full external brand guidelines site
- Export tooling for downloadable SVG/PNG assets
- Formal "do / don't" misuse examples
- Refactoring existing foundations stories
