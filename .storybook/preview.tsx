import React, { useEffect } from "react";
import type { Preview, StoryContext } from "@storybook/react-vite";
import { useGlobals } from "storybook/preview-api";
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
