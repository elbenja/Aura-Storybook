# p5 Art Studio — Design Spec

## Context

An interactive web app for creating algorithmic art and posters using p5.js. The goal is a creative coding playground where you can experiment with typography effects, image manipulation, generative patterns, and poster composition — all with real-time slider controls and live preview. Long-term vision: produce print-ready art and posters.

## Tech Stack

- **Vite** — dev server with hot reload, build tooling
- **Vanilla JS** with ES modules — no framework
- **p5.js** in instance mode (npm package) — each art mode gets its own p5 instance
- **CSS custom properties** — for dark/light theming
- **jsPDF** (npm package) — for PDF export

## App Layout

### Structure
```
┌─────────────────────────────────────────────────┐
│ Header: App name │ Format dropdown │ Theme toggle│
├──────────┬──────────────────────────────────────┤
│ Sidebar  │                                      │
│ 260px    │         Canvas Area                   │
│          │                                       │
│ [Tabs]   │   ┌─────────────────────┐             │
│ Typo     │   │                     │             │
│ Image    │   │   Poster Canvas     │             │
│ Gen      │   │   (with drag        │             │
│ Poster   │   │    handles)         │             │
│          │   │                     │             │
│ ──────── │   └─────────────────────┘             │
│ Controls │                                       │
│ (scroll) │              Zoom: - 67% + [Fit]      │
│          │                                       │
│ ──────── │                                       │
│ [Export] │                                       │
│ [Save]   │                                       │
└──────────┴──────────────────────────────────────┘
```

### Header Bar
- App name: "p5 Art Studio"
- Poster format selector: dropdown with A4, A3, Letter, 24×36", Custom
- Dark/light theme toggle

### Sidebar (260px, fixed left)
- **Mode tabs** at top: Typography | Image FX | Generative | Poster
- **Controls area** (scrollable): changes per active mode
- **Bottom bar** (fixed): Export dropdown (PNG/SVG/PDF) + Save State button

### Canvas Area
- Dark backdrop (darkest in dark theme, light gray in light theme)
- Poster canvas centered, scaled to fit viewport
- **Interactive resize handles**: 4 edges + 4 corners
  - Edge handles: resize one axis
  - Corner handles: resize both axes
  - Shift+drag on corners: lock aspect ratio
  - Dimensions label shown while dragging
  - Dragging switches format dropdown to "Custom"
- **Zoom controls**: bottom-right corner (−, percentage, +, Fit)

## Art Modes

### Mode 1: Typography Art
Text as visual art — warp, distort, and stylize type on the canvas.

**Controls:**
- Text input (multiline textarea)
- Font picker (Google Fonts dropdown with preview)
- Font size slider (8px → 400px)
- Letter spacing slider (-10 → 50)
- Line height slider (0.5 → 3.0)
- Text color picker
- Seed navigation (prev / next / random / input)

**Effects (select one):**
- **Wave** — sinusoidal text warping. Params: amplitude, frequency
- **Shatter** — text explodes into fragments. Params: force, gravity
- **Particle** — text made of flowing particles. Params: count, speed, particle size
- **Path** — text follows a bezier curve. Params: curvature, offset
- **ASCII** — render as ASCII art grid. Params: density, character set
- **Glitch** — digital glitch distortion. Params: intensity, speed

Each effect exposes its own 2-3 sliders below the effect selector.

### Mode 2: Image Manipulation
Upload an image and apply algorithmic effects.

**Controls:**
- Image upload (drag & drop zone + click to browse)
- Fit mode toggle: cover / contain / stretch / tile
- Position: x/y offset sliders
- Scale slider (10% → 500%)
- Background color picker (for uncovered areas)
- Seed navigation

**Effects (select one):**
- **Pixel Sort** — sort pixel rows/columns by brightness. Params: threshold, direction (horizontal/vertical)
- **Glitch** — channel shift + scan lines. Params: intensity, RGB offset
- **Halftone** — dot matrix print effect. Params: dot size, spacing, angle
- **Posterize** — reduce color palette. Params: levels, dithering toggle
- **Displacement** — noise-driven pixel displacement. Params: noise scale, displacement intensity
- **Mosaic** — tile into geometric cells. Params: cell size, shape (square/hex/circle)

### Mode 3: Generative Patterns
Classic algorithmic art — flow fields, particles, fractals.

**Controls:**
- Algorithm picker (dropdown/chips)
- Seed navigation (prev / next / random / input)
- Color palette selector (curated palettes + custom)
- Background color picker
- Play/Pause toggle (for animated algorithms)
- Speed multiplier slider (0.1x → 3x)

**Algorithms:**
- **Flow Field** — particle trails following Perlin noise. Params: particle count, trail length, noise scale
- **Particle System** — forces, attractors, repellers. Params: gravity, friction, particle count
- **Noise Landscape** — terrain-like contour lines. Params: octaves, lacunarity, gain
- **Recursive Geometry** — fractal subdivision patterns. Params: recursion depth, angle, scale ratio
- **Voronoi** — cell-based patterns. Params: point count, coloring mode (solid/gradient/stroke)
- **Spirograph** — parametric curves. Params: inner radius, outer radius, pen offset

### Mode 4: Poster Composer
Combine elements from other modes into a composed poster.

**Controls:**
- Layers panel: reorder (drag), show/hide toggle, opacity slider per layer
- Add layer button: text, image, generative, shape, gradient
- Grid overlay toggle (columns, margins, gutter)
- Background: solid color, gradient, or generative fill
- Margin/safe area guides for print

**Layer Types:**
- **Text layer** — same controls as Typography mode (font, size, effects)
- **Image layer** — uploaded image with optional FX from Image mode
- **Generative layer** — any algorithm from Generative mode as fill
- **Shape layer** — rectangles, circles, lines with fill/stroke controls
- **Gradient layer** — linear, radial, or angular gradient fills

**Per-layer properties:**
- Position (x, y) — via sliders or direct drag on canvas
- Size (w, h)
- Rotation
- Opacity (0-100%)
- Blend mode (normal, multiply, screen, overlay, etc.)

## Shared Features

### Canvas & Sizing
- Poster format presets: A4 (210×297mm), A3 (297×420mm), Letter (8.5×11"), 24×36"
- Custom sizing via drag handles on canvas edges/corners
- Canvas renders at actual poster pixel dimensions internally (300dpi equivalent)
- Display scaling: canvas fits viewport with zoom controls

### Export
- **PNG** — render at full poster resolution, download
- **SVG** — available for typography and geometric generative art (not pixel-based effects)
- **PDF** — via jsPDF, at defined poster dimensions with proper scaling
- **Export dropdown** in sidebar bottom bar

### Save/Load State
- Save all parameters (mode, effect, slider values, seed, canvas size) as a JSON file
- Load JSON to restore exact state
- Useful for iterating on a design across sessions

### Theme
- Dark mode: `--bg: #141413`, `--surface: #1c1c1b`, `--text: #faf9f5`
- Light mode: `--bg: #faf9f5`, `--surface: #ffffff`, `--text: #141413`
- Accent colors: orange `#d97757`, blue `#6a9bcc`, green `#788c5d`
- Toggle in header, preference saved to localStorage

## File Structure

```
js-art/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.js              # App entry: init sidebar, tabs, theme, canvas
│   ├── canvas.js             # Canvas manager: sizing, handles, zoom, p5 lifecycle
│   ├── sidebar.js            # Sidebar UI: tabs, control rendering, events
│   ├── theme.js              # Dark/light theme toggle + localStorage
│   ├── export.js             # PNG/SVG/PDF export + save/load state
│   ├── state.js              # Centralized state management for params
│   ├── modes/
│   │   ├── typography.js     # Typography mode: p5 sketch + effect implementations
│   │   ├── image-fx.js       # Image FX mode: p5 sketch + effect implementations
│   │   ├── generative.js     # Generative mode: p5 sketch + algorithm implementations
│   │   └── poster.js         # Poster composer: layer system + composite rendering
│   └── styles/
│       ├── main.css          # Layout, sidebar, header
│       ├── theme.css         # CSS custom properties for dark/light
│       ├── controls.css      # Sliders, dropdowns, buttons, chips
│       └── canvas.css        # Canvas area, handles, zoom controls
└── public/
    └── fonts/                # Any bundled fallback fonts
```

## Implementation Priority

Build incrementally — each mode is independently functional:

1. **Foundation** — Vite setup, layout shell (header, sidebar, canvas area), theme toggle, canvas with drag handles and zoom
2. **Typography mode** — text rendering + all 6 effects with controls
3. **Generative mode** — all 6 algorithms with controls and seed system
4. **Image FX mode** — image upload + all 6 effects
5. **Poster Composer** — layer system combining elements from other modes
6. **Export & State** — PNG/SVG/PDF export + JSON save/load

## Verification

- Open `npm run dev` and verify hot reload works
- Switch between all 4 tabs and confirm controls swap correctly
- Drag canvas handles and verify resize works (check "Custom" appears in format dropdown)
- Toggle dark/light theme
- In each mode: adjust every slider and verify canvas updates in real-time
- Typography: type text, change font, apply each effect
- Image FX: drag-drop an image, apply each effect
- Generative: switch algorithms, change seed, play/pause animation
- Poster: add layers, reorder, adjust blend modes, toggle grid
- Export PNG at full resolution and verify dimensions match poster format
- Save state, reload page, load state — verify identical output
- Test SVG export with typography mode
- Test PDF export and verify page dimensions
