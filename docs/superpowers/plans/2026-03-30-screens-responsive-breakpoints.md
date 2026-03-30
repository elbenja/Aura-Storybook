# Screens Responsive Breakpoints Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Desktop/Tablet/Mobile toolbar icon buttons to Storybook that resize the iframe, and update the three Screens stories to render responsively at each breakpoint.

**Architecture:** A `screensBreakpoint` global (toolbar) in `preview.tsx` drives Storybook's existing viewport system via a React decorator. Stories use two Tailwind breakpoint prefixes — `tablet:` (≥576px, custom) and `lg:` (≥1024px, default) — to adapt layouts. HeroPanel and Dashboard are hidden below desktop; the NatureAgentSidebar is hidden below desktop.

**Tech Stack:** Storybook 10, React, Tailwind v4 (`@import "tailwindcss"`), `@storybook/preview-api` (`useGlobals`)

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/index.css` | Modify | Add `--breakpoint-tablet: 576px` to `@theme inline` |
| `.storybook/preview.ts` → `.storybook/preview.tsx` | Rename + Modify | globalTypes, tablet viewport preset, breakpoint sync decorator |
| `src/stories/screens/WelcomeScreen.stories.tsx` | Modify | Responsive two-column → single-column layout |
| `src/stories/screens/UseCaseScreen.stories.tsx` | Modify | Responsive two-column → single-column layout |
| `src/stories/screens/NatureAgentScreen.stories.tsx` | Modify | Responsive three-panel → single-panel layout |

---

## Task 1: Add Custom Tailwind Breakpoint

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Add `--breakpoint-tablet` to the `@theme inline` block**

Open `src/index.css`. Find the `@theme inline {` block (starts at line 7). Add one line after `--radius-4xl`:

```css
@theme inline {
    --radius-sm: calc(var(--radius) - 4px);
    --radius-md: calc(var(--radius) - 2px);
    --radius-lg: var(--radius);
    --radius-xl: calc(var(--radius) + 4px);
    --radius-2xl: calc(var(--radius) + 8px);
    --radius-3xl: calc(var(--radius) + 12px);
    --radius-4xl: calc(var(--radius) + 16px);
    --breakpoint-tablet: 576px;
    /* rest of existing theme tokens unchanged */
```

- [ ] **Step 2: Verify the breakpoint is available**

Run Storybook and open the browser console. In any story, run:

```js
getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-tablet')
```

Expected output: `" 576px"` (or `"576px"`).

Alternatively, just confirm `npm run storybook` starts without errors.

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: add tablet breakpoint (576px) to Tailwind theme"
```

---

## Task 2: Toolbar Buttons + Viewport Sync Decorator

**Files:**
- Rename: `.storybook/preview.ts` → `.storybook/preview.tsx`
- Modify: `.storybook/preview.tsx`
- Modify: `.storybook/vitest.setup.ts` (update import path)

### Why rename to `.tsx`?

The new decorator returns JSX (`<Story />`). Storybook's vite framework supports TSX in preview files, but the file extension must be `.tsx` for the JSX transform to work.

- [ ] **Step 1: Rename the file**

```bash
cd .storybook && mv preview.ts preview.tsx
```

- [ ] **Step 2: Update `vitest.setup.ts` import**

Open `.storybook/vitest.setup.ts`. The import on line 3 currently reads:

```ts
import * as projectAnnotations from './preview';
```

No change needed — TypeScript resolves `.tsx` automatically. Verify Storybook still starts: `npm run storybook`.

- [ ] **Step 3: Replace the contents of `.storybook/preview.tsx`**

Replace the entire file with:

```tsx
import React, { useEffect } from "react";
import type { Preview, StoryContext } from "@storybook/react-vite";
import { useGlobals } from "@storybook/preview-api";
import { withThemeByClassName } from "@storybook/addon-themes";

import "../src/index.css";

const breakpointToViewport: Record<string, string> = {
  desktop: "desktop",
  tablet: "tablet",
  mobile: "mobile",
};

function ScreensBreakpointDecorator(
  Story: React.ComponentType,
  context: StoryContext
) {
  const [globals, updateGlobals] = useGlobals();
  const bp = globals.screensBreakpoint as string | undefined;

  useEffect(() => {
    if (!context.title?.startsWith("Screens/")) return;
    if (bp && breakpointToViewport[bp]) {
      updateGlobals({ viewport: breakpointToViewport[bp] });
    }
  }, [bp]);

  return <Story />;
}

const preview: Preview = {
  globalTypes: {
    screensBreakpoint: {
      name: "Screens Breakpoint",
      toolbar: {
        title: "Screens Breakpoint",
        items: [
          { value: "desktop", icon: "monitor", title: "Large Desktop (>1024px)" },
          { value: "tablet", icon: "tablet", title: "Tablet (576–1024px)" },
          { value: "mobile", icon: "mobile", title: "Mobile (<576px)" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    screensBreakpoint: "desktop",
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    viewport: {
      options: {
        mobile: {
          name: "Mobile",
          styles: { width: "375px", height: "812px" },
        },
        tablet: {
          name: "Tablet",
          styles: { width: "768px", height: "1024px" },
        },
        desktop: {
          name: "Desktop",
          styles: { width: "1440px", height: "900px" },
        },
      },
    },
  },
  decorators: [
    ScreensBreakpointDecorator,
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
  tags: ["autodocs"],
};

export default preview;
```

- [ ] **Step 4: Verify toolbar buttons appear**

Run `npm run storybook`. Navigate to any story. Confirm three icons (monitor, tablet, mobile) appear in the toolbar next to the existing controls.

Navigate to `Screens/Nature Agent/WelcomeScreen`. Click the mobile icon. Confirm the iframe resizes to 375px width. Click desktop. Confirm it resizes to 1440px.

- [ ] **Step 5: Commit**

```bash
git add .storybook/preview.tsx
git commit -m "feat: add screens breakpoint toolbar buttons with viewport sync"
```

---

## Task 3: Responsive WelcomeScreen

**Files:**
- Modify: `src/stories/screens/WelcomeScreen.stories.tsx`

**Responsive rules:**
- Outer container: `w-full min-h-screen` (was `w-[1200px] h-[932px]`)
- HeroPanel column: `hidden lg:block` — hidden on mobile/tablet
- HeroPanel size: `h-full w-[400px]`
- Content inner area: `px-6 pt-10 tablet:px-12 tablet:pt-12 lg:px-20 lg:pt-16`

- [ ] **Step 1: Update WelcomeScreen story render**

Replace the entire `render` function body in `src/stories/screens/WelcomeScreen.stories.tsx`:

```tsx
export const Default: Story = {
  render: () => (
    <div className="flex min-h-screen w-full bg-[#f9f8f6]">
      {/* Left — Hero Panel (desktop only) */}
      <div className="hidden lg:block shrink-0 p-4">
        <HeroPanel className="h-full w-[400px]" />
      </div>

      {/* Right — Content Panel */}
      <div className="flex flex-1 flex-col bg-[#f9f8f6] min-w-0 overflow-hidden">
        <OnboardingHeader showSkip />

        <div className="flex flex-1 items-start justify-center px-6 pt-10 tablet:px-12 tablet:pt-12 lg:px-20 lg:pt-16">
          <div className="flex w-full max-w-[600px] flex-col gap-8">
            {/* Aura logo */}
            <AuraLogo size={55} className="text-foreground" />

            {/* Greeting */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-3 items-baseline text-2xl">
                <span>Hey Bradley, I'm your</span>
                <span className="font-semibold tracking-tight">Nature Agent.</span>
              </div>

              <p className="text-base text-foreground">
                I'm here to help you understand your portfolio's impact on nature
                and biodiversity and bring your sustainability goals to life.
                <br /><br />
                Here's a few things you should know about me:
              </p>

              {/* Feature items */}
              <div className="flex flex-col gap-6">
                <FeatureItem
                  icon={Leaf01Icon}
                  title="Curious? Just ask."
                  description="Chat with me about your biodiversity data, certifications, or even your hive's health - I'll help you explore insights and next steps."
                />
                <FeatureItem
                  icon={Navigation03Icon}
                  title="Built to guide, never overwhelm."
                  description="I turn complex frameworks like TNFD, GRESB, or CSRD into digestible insights you can act on. Always clear, never confusing."
                />
                <FeatureItem
                  icon={Tree03Icon}
                  title="We grow better together."
                  description="Every conversation helps me learn what matters to you, from biodiversity to tenant engagement, so I can serve you and your goals better."
                />
              </div>
            </div>

            {/* Continue button */}
            <div>
              <Button size="lg" className="rounded-full px-6 h-11 text-base">
                Continue <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
```

- [ ] **Step 2: Verify in Storybook**

Navigate to `Screens/Nature Agent/WelcomeScreen`. Click each breakpoint button:

- **Desktop**: HeroPanel visible on left, content with large padding on right
- **Tablet**: HeroPanel hidden, content fills full width with medium padding
- **Mobile**: HeroPanel hidden, content fills full width with small padding

- [ ] **Step 3: Commit**

```bash
git add src/stories/screens/WelcomeScreen.stories.tsx
git commit -m "feat: make WelcomeScreen story responsive"
```

---

## Task 4: Responsive UseCaseScreen

**Files:**
- Modify: `src/stories/screens/UseCaseScreen.stories.tsx`

**Responsive rules:** Same two-column pattern as WelcomeScreen.
- Outer container: `w-full min-h-screen` (was `w-[1200px] h-[932px]`)
- HeroPanel column: `hidden lg:block`
- Content inner area: `px-6 pt-10 tablet:px-12 tablet:pt-12 lg:px-20 lg:pt-16`

- [ ] **Step 1: Update UseCaseScreen story render**

Replace the `return (` JSX inside the `InteractiveScreen` component in `src/stories/screens/UseCaseScreen.stories.tsx`:

```tsx
return (
  <div className="flex min-h-screen w-full bg-[#f9f8f6]">
    {/* Left — Hero Panel (desktop only) */}
    <div className="hidden lg:block shrink-0 p-4">
      <HeroPanel className="h-full w-[400px]" />
    </div>

    {/* Right — Content Panel */}
    <div className="flex flex-1 flex-col bg-[#f9f8f6] min-w-0 overflow-hidden">
      <OnboardingHeader showBack showSkip />

      <div className="flex flex-1 items-start justify-center px-6 pt-10 tablet:px-12 tablet:pt-12 lg:px-20 lg:pt-16">
        <div className="flex w-full max-w-[600px] flex-col gap-8">
          {/* Aura logo */}
          <AuraLogo size={55} className="text-foreground" />

          {/* Question */}
          <h2 className="text-2xl">
            How are you planning to use Nature Agent?
          </h2>

          {/* Tag grid */}
          <div className="flex flex-wrap gap-3">
            {USE_CASES.map((tag) => (
              <TagButton
                key={tag}
                selected={selected.has(tag)}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </TagButton>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-full h-11 text-base">
              <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
              Back
            </Button>
            <Button size="lg" className="rounded-full px-6 h-11 text-base">
              Continue <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
```

- [ ] **Step 2: Verify in Storybook**

Navigate to `Screens/Nature Agent/UseCaseScreen`. Click each breakpoint button:

- **Desktop**: HeroPanel visible, content on right with full padding, tags wrap naturally
- **Tablet**: HeroPanel hidden, content fills width, tags still wrap
- **Mobile**: HeroPanel hidden, content fills width, small padding

- [ ] **Step 3: Commit**

```bash
git add src/stories/screens/UseCaseScreen.stories.tsx
git commit -m "feat: make UseCaseScreen story responsive"
```

---

## Task 5: Responsive NatureAgentScreen

**Files:**
- Modify: `src/stories/screens/NatureAgentScreen.stories.tsx`

**Responsive rules:**
- Outer container: `w-full min-h-screen` (was `w-[1400px] h-[938px]`)
- Sidebar: `hidden lg:flex h-full` — hidden below desktop
- Chat panel: `w-full lg:w-[624px]` — full-width on mobile/tablet
- Topic cards grid: `grid-cols-1 tablet:grid-cols-2 gap-2 w-full tablet:w-[346px]`
- Chat input: `w-full lg:w-[468px]`
- Dashboard panel: `hidden lg:flex flex-1 flex-col gap-4 p-2` — hidden below desktop

- [ ] **Step 1: Update NatureAgentScreen story render**

Replace the entire `render` function return value in `src/stories/screens/NatureAgentScreen.stories.tsx`:

```tsx
export const Default: Story = {
  render: () => (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar (desktop only) */}
      <div className="hidden lg:flex h-full">
        <NatureAgentSidebar className="h-full" />
      </div>

      {/* Chat panel */}
      <div className="flex w-full lg:w-[624px] flex-col items-center justify-center px-5">
        {/* Agent greeting */}
        <div className="flex flex-col items-center gap-5 mb-10">
          <AuraLogo size={72} className="text-foreground" />
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Hey, I'm your Nature Agent</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Ask me anything about biodiversity,
              <br />
              or how to help your properties thrive.
            </p>
          </div>
        </div>

        {/* Topic cards grid */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-2 w-full tablet:w-[346px] mb-8">
          <TopicCard
            icon={FlashIcon}
            label="My nature & biodiversity insights"
          />
          <TopicCard
            icon={Apple01Icon}
            label="Frameworks & certifications"
          />
          <TopicCard icon={Leaf02Icon} label="TBD" />
          <TopicCard icon={Building01Icon} label="TBD" />
        </div>

        {/* Chat Input */}
        <div className="w-full lg:w-[468px]">
          <ChatInput />
        </div>
      </div>

      {/* Dashboard panel (desktop only) */}
      <div className="hidden lg:flex flex-1 flex-col gap-4 p-2">
        <div className="flex flex-1 flex-col gap-4 rounded-2xl border bg-card p-3 overflow-y-auto">
          {/* Dashboard header */}
          <div className="flex flex-col gap-4 px-3 pt-3">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Property</span>
              <div className="flex flex-1 items-center rounded-lg border bg-background px-3 py-2 text-sm">
                <span className="flex-1 text-muted-foreground">
                  Search for an asset
                </span>
                <HugeiconsIcon icon={Search01Icon} size={16} className="text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Reports section */}
          <div className="px-3">
            <p className="text-sm font-medium mb-2">Reports</p>
            <ReportOrbit reports={reports} className="h-[282px]" />
          </div>

          {/* Explore your data */}
          <div className="px-3">
            <p className="text-sm font-medium mb-2">Explore your data</p>
            <div className="flex flex-col gap-3">
              <DataCard title="Portfolio insights" stat="730" statLabel="Properties" className="h-[200px]" />
              <DataCard title="Asset-level results" showSearch className="h-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
```

- [ ] **Step 2: Verify in Storybook**

Navigate to `Screens/Nature Agent/NatureAgentScreen`. Click each breakpoint button:

- **Desktop**: Sidebar on left, chat in center, dashboard on right — full three-column layout
- **Tablet**: Sidebar hidden, dashboard hidden, chat panel fills full width, topic cards in 2 columns
- **Mobile**: Sidebar hidden, dashboard hidden, chat panel fills full width, topic cards in 1 column

- [ ] **Step 3: Commit**

```bash
git add src/stories/screens/NatureAgentScreen.stories.tsx
git commit -m "feat: make NatureAgentScreen story responsive"
```

---

## Self-Review

**Spec coverage:**
- ✅ Custom breakpoints (`--breakpoint-tablet: 576px`) — Task 1
- ✅ Toolbar icon buttons (Desktop/Tablet/Mobile) — Task 2
- ✅ Buttons drive viewport sync via `useGlobals` — Task 2
- ✅ Buttons scoped to Screens group (decorator only fires for `Screens/`) — Task 2
- ✅ WelcomeScreen responsive — Task 3
- ✅ UseCaseScreen responsive — Task 4
- ✅ NatureAgentScreen responsive — Task 5

**Placeholder scan:** None found.

**Type consistency:** `screensBreakpoint` used consistently across `globalTypes`, `initialGlobals`, and `breakpointToViewport` map. Viewport keys `mobile`/`tablet`/`desktop` match `viewport.options` keys exactly.
