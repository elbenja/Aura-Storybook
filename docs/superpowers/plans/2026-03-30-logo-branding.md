# Logo Branding Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a new `Foundations/Logo Branding` Storybook page that documents the Aura icon and wordmark with educational sections for assets, recommended sizes, clear space, and background treatments.

**Architecture:** Keep the implementation local to the foundations stories folder. Add one new Storybook story file driven by small data arrays and one lightweight Vitest render test that proves the page includes the expected headings and guidance copy. Use existing Tailwind utilities and Storybook patterns already present in the repo.

**Tech Stack:** React 19, TypeScript, Storybook 10, Vite, Vitest, Tailwind CSS v4

---

### Task 1: Add the failing render test

**Files:**
- Create: `src/stories/foundations/LogoBranding.stories.test.tsx`
- Test: `src/stories/foundations/LogoBranding.stories.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { Overview } from "./LogoBranding.stories";

describe("Logo Branding foundations story", () => {
  it("renders the approved educational sections", () => {
    const markup = renderToStaticMarkup(<>{Overview.render?.()}</>);

    expect(markup).toContain("Logo Branding");
    expect(markup).toContain("Brand Assets");
    expect(markup).toContain("Recommended Sizes");
    expect(markup).toContain("Clear Space");
    expect(markup).toContain("Background Treatments");
    expect(markup).toContain("recommended");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test src/stories/foundations/LogoBranding.stories.test.tsx`
Expected: FAIL because `./LogoBranding.stories` does not exist yet.

- [ ] **Step 3: Commit**

```bash
git add src/stories/foundations/LogoBranding.stories.test.tsx
git commit -m "test: add logo branding story render coverage"
```

### Task 2: Implement the Storybook foundations page

**Files:**
- Create: `src/stories/foundations/LogoBranding.stories.tsx`
- Modify: `src/stories/foundations/LogoBranding.stories.test.tsx`
- Test: `src/stories/foundations/LogoBranding.stories.test.tsx`

- [ ] **Step 1: Write minimal story implementation**

Create a new foundations story with:

```tsx
const meta: Meta = {
  title: "Foundations/Logo Branding",
  parameters: {
    controls: { disable: true },
  },
};
```

Include these sections in the `Overview` story render:

```tsx
<div className="space-y-10">
  <header className="space-y-3">
    <h2 className="text-2xl font-bold border-b pb-2">Logo Branding</h2>
    <p className="text-sm text-muted-foreground">
      Approved Aura core brand marks presented as recommended, educational guidance for product and documentation work.
    </p>
  </header>
</div>
```

Use local arrays for:

```ts
const brandAssets = [...];
const iconSizeExamples = [24, 32, 48, 64];
const wordmarkSizeExamples = [96, 128, 160, 200];
const backgroundTreatments = [...];
```

Render:
- two asset cards for icon and wordmark
- size examples with labels
- clear-space cards with padded containers
- background treatment cards using Aura grays from the spec

- [ ] **Step 2: Run test to verify it passes**

Run: `bun test src/stories/foundations/LogoBranding.stories.test.tsx`
Expected: PASS with 1 passing test.

- [ ] **Step 3: Refine for readability without changing behavior**

Keep the file self-contained, align spacing and headings with existing foundations stories, and keep copy educational rather than strict.

- [ ] **Step 4: Commit**

```bash
git add src/stories/foundations/LogoBranding.stories.tsx src/stories/foundations/LogoBranding.stories.test.tsx
git commit -m "feat: add logo branding foundations story"
```

### Task 3: Verify the page with repo-level checks

**Files:**
- Modify: none
- Test: `src/stories/foundations/LogoBranding.stories.test.tsx`

- [ ] **Step 1: Run the focused test**

Run: `bun test src/stories/foundations/LogoBranding.stories.test.tsx`
Expected: PASS with 1 passing test.

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: exit code 0.

- [ ] **Step 3: Run production build**

Run: `npm run build`
Expected: exit code 0.

- [ ] **Step 4: Run Storybook build**

Run: `npm run build-storybook`
Expected: exit code 0 and generated Storybook output.

- [ ] **Step 5: Review the diff**

Run: `git diff -- src/stories/foundations/LogoBranding.stories.tsx src/stories/foundations/LogoBranding.stories.test.tsx docs/superpowers/plans/2026-03-30-logo-branding.md`
Expected: new plan, new story, and new render test only.
