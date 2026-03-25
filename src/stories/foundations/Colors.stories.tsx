import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useRef, useState } from "react";

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: {
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

const tokenGroups = [
  {
    group: "Base",
    tokens: ["background", "foreground"],
  },
  {
    group: "Primary",
    tokens: ["primary", "primary-foreground"],
  },
  {
    group: "Secondary",
    tokens: ["secondary", "secondary-foreground"],
  },
  {
    group: "Muted",
    tokens: ["muted", "muted-foreground"],
  },
  {
    group: "Accent",
    tokens: ["accent", "accent-foreground"],
  },
  {
    group: "Destructive",
    tokens: ["destructive"],
  },
  {
    group: "Border / Input / Ring",
    tokens: ["border", "input", "ring"],
  },
  {
    group: "Card",
    tokens: ["card", "card-foreground"],
  },
  {
    group: "Popover",
    tokens: ["popover", "popover-foreground"],
  },
  {
    group: "Chart",
    tokens: ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"],
  },
  {
    group: "Sidebar",
    tokens: [
      "sidebar",
      "sidebar-foreground",
      "sidebar-primary",
      "sidebar-primary-foreground",
      "sidebar-accent",
      "sidebar-accent-foreground",
      "sidebar-border",
      "sidebar-ring",
    ],
  },
];

function ColorSwatch({ token }: { token: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (ref.current) {
      const computed = getComputedStyle(ref.current).backgroundColor;
      setValue(computed);
    }
  }, []);

  const isForeground = token.includes("foreground");
  const isLight = token === "background" || token === "card" || token === "popover" || token === "sidebar";

  return (
    <div className="flex flex-col gap-1.5">
      <div
        ref={ref}
        className={`h-16 w-full rounded-lg border ${isLight || isForeground ? "border-border" : "border-transparent"}`}
        style={{ backgroundColor: `var(--${token})` }}
      />
      <div>
        <p className="text-xs font-medium">{token}</p>
        <p className="text-[10px] font-mono text-muted-foreground truncate" title={value}>
          {value || "—"}
        </p>
      </div>
    </div>
  );
}

export const AllTokens: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold border-b pb-2 mb-4">Color Tokens</h2>
      {tokenGroups.map(({ group, tokens }) => (
        <div key={group}>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">{group}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {tokens.map((token) => (
              <ColorSwatch key={token} token={token} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

function SemanticPair({ bg, fg, label }: { bg: string; fg: string; label: string }) {
  return (
    <div className="rounded-lg overflow-hidden border">
      <div
        className="p-4"
        style={{ backgroundColor: `var(--${bg})`, color: `var(--${fg})` }}
      >
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-xs mt-1">
          {fg} on {bg}
        </p>
      </div>
    </div>
  );
}

const pairs = [
  { bg: "background", fg: "foreground", label: "Default" },
  { bg: "primary", fg: "primary-foreground", label: "Primary" },
  { bg: "secondary", fg: "secondary-foreground", label: "Secondary" },
  { bg: "muted", fg: "muted-foreground", label: "Muted" },
  { bg: "accent", fg: "accent-foreground", label: "Accent" },
  { bg: "card", fg: "card-foreground", label: "Card" },
  { bg: "popover", fg: "popover-foreground", label: "Popover" },
  { bg: "sidebar", fg: "sidebar-foreground", label: "Sidebar" },
  { bg: "sidebar-primary", fg: "sidebar-primary-foreground", label: "Sidebar Primary" },
  { bg: "sidebar-accent", fg: "sidebar-accent-foreground", label: "Sidebar Accent" },
];

export const SemanticPairs: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold border-b pb-2 mb-4">Semantic Pairs</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Foreground colors on their corresponding background colors. Toggle dark mode in the toolbar to compare.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {pairs.map((pair) => (
          <SemanticPair key={pair.label} {...pair} />
        ))}
      </div>
    </div>
  ),
};
