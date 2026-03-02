# Aura-Storybook

Component library and design system for the Aura real estate/property analysis platform.

## Tech Stack

- **React 19** + TypeScript + Vite
- **Tailwind CSS v4**
- **shadcn/ui** (base components)
- **Storybook 10** (documentation & testing)
- **HugeIcons** (icon library)
- **Vitest** + Playwright (testing)

## Development

```bash
bun install              # Install dependencies
bun storybook            # Start Storybook on port 6006
bun dev                  # Start Vite dev server
bun test                 # Run tests
bun build-storybook      # Build static Storybook
```

## Project Structure

```
src/
├── components/
│   ├── icons/           # HugeIcons re-exports
│   └── ui/              # shadcn/ui base components
├── hooks/               # Custom hooks
├── lib/
│   └── utils.ts         # Utilities (cn helper)
├── stories/
│   └── primitives/      # Component stories
└── index.css            # Tailwind + design tokens
```
