import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: {
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

const typeScale: Array<{
  label: string;
  className: string;
  tag: keyof React.JSX.IntrinsicElements;
  sample: string;
}> = [
  { label: "H1", className: "text-4xl font-bold", tag: "h1", sample: "Heading One" },
  { label: "H2", className: "text-3xl font-semibold", tag: "h2", sample: "Heading Two" },
  { label: "H3", className: "text-2xl font-semibold", tag: "h3", sample: "Heading Three" },
  { label: "H4", className: "text-xl font-semibold", tag: "h4", sample: "Heading Four" },
  { label: "H5", className: "text-lg font-medium", tag: "h5", sample: "Heading Five" },
  { label: "H6", className: "text-base font-medium", tag: "h6", sample: "Heading Six" },
  { label: "Body Large", className: "text-lg", tag: "p", sample: "Body large text used for introductions and prominent paragraphs." },
  { label: "Body", className: "text-base", tag: "p", sample: "Body text used for general content and descriptions across the platform." },
  { label: "Body Small", className: "text-sm", tag: "p", sample: "Small body text used for secondary content and supporting information." },
  { label: "Caption", className: "text-xs", tag: "span", sample: "Caption text for labels, metadata, and supplementary details." },
  { label: "Overline", className: "text-xs font-semibold uppercase tracking-widest", tag: "span", sample: "OVERLINE TEXT" },
];

export const TypeScale: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold border-b pb-2 mb-4">Type Scale</h2>
      <div className="space-y-4">
        {typeScale.map(({ label, className, tag: Tag, sample }) => (
          <div key={label} className="flex items-baseline gap-6 py-3 border-b border-border/50">
            <div className="w-28 shrink-0">
              <span className="text-xs font-mono text-muted-foreground">{label}</span>
            </div>
            <div className="w-48 shrink-0">
              <code className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{className}</code>
            </div>
            <Tag className={className}>{sample}</Tag>
          </div>
        ))}
      </div>
    </div>
  ),
};

const weights = [
  { weight: 100, name: "Thin" },
  { weight: 200, name: "Extra Light" },
  { weight: 300, name: "Light" },
  { weight: 400, name: "Regular" },
  { weight: 500, name: "Medium" },
  { weight: 600, name: "Semi Bold" },
  { weight: 700, name: "Bold" },
  { weight: 800, name: "Extra Bold" },
  { weight: 900, name: "Black" },
];

export const FontWeights: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold border-b pb-2 mb-4">Font Weights — Inter</h2>
      <div className="space-y-3">
        {weights.map(({ weight, name }) => (
          <div key={weight} className="flex items-center gap-6 py-2 border-b border-border/50">
            <div className="w-32 shrink-0">
              <span className="text-xs font-mono text-muted-foreground">{weight} — {name}</span>
            </div>
            <p className="text-xl" style={{ fontWeight: weight }}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const FontPairings: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold border-b pb-2 mb-4">Font Pairings</h2>

      <div className="space-y-1 p-4 rounded-lg border">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Reports</p>
        <h3 className="text-2xl font-bold">Portfolio Report</h3>
        <p className="text-sm text-muted-foreground">Stay on top of your property data with automated ESG reporting.</p>
      </div>

      <div className="space-y-1 p-4 rounded-lg border">
        <h4 className="text-lg font-semibold">BREEAM In-Use v6</h4>
        <p className="text-4xl font-bold">12</p>
        <p className="text-sm text-muted-foreground">Excellent</p>
      </div>

      <div className="space-y-0.5 p-4 rounded-lg border">
        <span className="text-xs text-muted-foreground">Building certification</span>
        <h4 className="text-base font-semibold">730</h4>
        <span className="text-sm text-muted-foreground">Properties</span>
      </div>

      <div className="flex items-center gap-3 p-4 rounded-lg border">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">AI</div>
        <div>
          <p className="text-sm font-medium">Hey, I'm Nature</p>
          <p className="text-xs text-muted-foreground">Ask me anything about biodiversity</p>
        </div>
      </div>
    </div>
  ),
};
