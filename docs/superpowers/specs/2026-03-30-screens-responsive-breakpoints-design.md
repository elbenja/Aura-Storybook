# Screens Responsive Breakpoints — Design Spec

**Date:** 2026-03-30
**Status:** Approved

---

## Overview

Add three breakpoint toolbar buttons (Desktop, Tablet, Mobile) to Storybook, scoped to the `Screens/` story group. When clicked, they resize the Storybook iframe via the existing viewport system. The three screen stories (WelcomeScreen, UseCaseScreen, NatureAgentScreen) are updated to render responsively using Tailwind v4 responsive classes.

---

## Breakpoints

| Name | Width range | Viewport preset | Tailwind prefix |
|---|---|---|---|
| Mobile | < 576px | `375px × 812px` | (base, no prefix) |
| Tablet | 576px – 1024px | `768px × 1024px` | `tablet:` |
| Large Desktop | > 1024px | `1440px × 900px` | `lg:` |

Custom Tailwind breakpoint `--breakpoint-tablet: 576px` is added to the `@theme inline` block in `src/index.css`. Tailwind v4's existing `lg` (1024px) covers the desktop threshold.

---

## Section 1: Toolbar Buttons

### `globalTypes` entry in `preview.ts`

```ts
globalTypes: {
  screensBreakpoint: {
    name: 'Screens Breakpoint',
    toolbar: {
      title: 'Screens Breakpoint',
      items: [
        { value: 'desktop', icon: 'monitor', title: 'Large Desktop (>1024px)' },
        { value: 'tablet', icon: 'tablet', title: 'Tablet (576–1024px)' },
        { value: 'mobile', icon: 'mobile', title: 'Mobile (<576px)' },
      ],
      dynamicTitle: true,
    },
  },
},
```

Default value: `'desktop'`.

### Viewport presets in `preview.ts`

Add `tablet` to the existing `viewport.options`:

```ts
tablet: {
  name: 'Tablet',
  styles: { width: '768px', height: '1024px' },
},
```

### Decorator in `preview.ts`

A new decorator is added to the `decorators` array. It:

1. Reads `globals.screensBreakpoint` via `useGlobals`.
2. If the current story's `context.title` starts with `'Screens/'`, calls `updateGlobals({ viewport: viewportKey })` to sync the Storybook viewport whenever the breakpoint changes.
3. Returns `<Story />` unchanged — it has no visual wrapper.

```ts
const breakpointToViewport: Record<string, string> = {
  desktop: 'desktop',
  tablet: 'tablet',
  mobile: 'mobile',
};
```

The toolbar icons are visible globally but the viewport sync only fires for Screens stories.

---

## Section 2: Custom Tailwind Breakpoint

In `src/index.css`, inside the existing `@theme inline` block:

```css
--breakpoint-tablet: 576px;
```

Usage in stories:
- Base (no prefix) → Mobile styles (< 576px)
- `tablet:` → Tablet and up (≥ 576px)
- `lg:` → Desktop and up (≥ 1024px)

---

## Section 3: Responsive Screen Layouts

### WelcomeScreen & UseCaseScreen

Both share the same two-column pattern. Changes:

**Outer container:** `w-[1200px] h-[932px]` → `w-full min-h-screen`

**HeroPanel column:** Visible only on desktop:
```
hidden lg:block shrink-0 p-4
```

**Content column:** Full-width on mobile/tablet, shares space on desktop:
```
flex flex-1 flex-col bg-[#f9f8f6] min-w-0 overflow-hidden
```

**Content inner padding:** Responsive padding on the content area:
```
px-6 pt-10 tablet:px-12 tablet:pt-12 lg:px-20 lg:pt-16
```

### NatureAgentScreen

**Outer container:** `w-[1400px] h-[938px]` → `w-full min-h-screen`

**Sidebar:** Visible only on desktop:
```
hidden lg:flex h-full
```

**Chat panel:** Full-width on mobile/tablet, fixed width on desktop:
```
flex flex-col items-center justify-center w-full lg:w-[624px] px-5
```

**Topic cards grid:** Single column on mobile, two columns on tablet+:
```
grid grid-cols-1 tablet:grid-cols-2 gap-2 w-full tablet:w-[346px] mb-8
```

**Chat input:** Full-width on mobile, fixed on desktop:
```
w-full lg:w-[468px]
```

**Dashboard panel:** Hidden on mobile/tablet, visible on desktop:
```
hidden lg:flex flex-1 flex-col gap-4 p-2
```

---

## Files Changed

| File | Change |
|---|---|
| `src/index.css` | Add `--breakpoint-tablet: 576px` to `@theme inline` |
| `.storybook/preview.ts` | Add `globalTypes`, `tablet` viewport, breakpoint sync decorator |
| `src/stories/screens/WelcomeScreen.stories.tsx` | Responsive layout |
| `src/stories/screens/UseCaseScreen.stories.tsx` | Responsive layout |
| `src/stories/screens/NatureAgentScreen.stories.tsx` | Responsive layout |

---

## Out of Scope

- No changes to screen components outside of story files
- No changes to non-Screens stories
- No persistent breakpoint state across page reloads
