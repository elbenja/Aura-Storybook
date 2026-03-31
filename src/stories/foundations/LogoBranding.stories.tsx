import type { Meta, StoryObj } from "@storybook/react-vite";
import brandIconSrc from "@/assets/brand-icon.svg";

const wordmarkSrc = "https://www.figma.com/api/mcp/asset/d792d567-b98c-4bc4-8ce5-6c2922ee59a0";

const meta: Meta = {
  title: "Foundations/Logo Branding",
  parameters: {
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

const brandAssets = [
  {
    name: "Aura Brand Icon",
    note: "Use as the compact brand mark for avatars, app chrome, and favicon-style placements.",
    dimensions: "80 × 80",
    preview: <BrandIcon size={80} />,
  },
  {
    name: "Aura Wordmark",
    note: "Use when the full Aura name adds clarity, especially in onboarding, decks, and toolkit surfaces.",
    dimensions: "113.8 × 32",
    preview: <Wordmark width={160} />,
  },
];

const iconSizeExamples = [24, 32, 48, 64];
const wordmarkSizeExamples = [96, 128, 160, 200];

const backgroundTreatments = [
  {
    name: "AuraGray/50",
    hex: "#f9f8f6",
    description: "Best used as a soft asset-display surface. A darker stage keeps the light marks readable.",
    background: "#f9f8f6",
    stage: "#4b5563",
    recommended: false,
  },
  {
    name: "AuraGray/100",
    hex: "#eeece8",
    description: "A slightly denser neutral that still benefits from a darker inset for educational previews.",
    background: "#eeece8",
    stage: "#374151",
    recommended: false,
  },
  {
    name: "AuraGray/800",
    hex: "#1f2937",
    description: "Recommended for direct placement when you want the light marks to feel crisp and intentional.",
    background: "#1f2937",
    stage: null,
    recommended: true,
  },
];

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">{title}</h3>
      <p className="max-w-3xl text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  );
}

function BrandIcon({ size }: { size: number }) {
  return <img alt="Aura brand icon" className="block" src={brandIconSrc} style={{ width: size, height: "auto" }} />;
}

function Wordmark({ width }: { width: number }) {
  return (
    <img
      alt="Aura wordmark"
      className="block"
      src={wordmarkSrc}
      style={{ width, height: width * (32 / 113.778) }}
    />
  );
}

function SurfaceFrame({
  children,
  background,
  stage,
  className = "",
}: {
  children: React.ReactNode;
  background: string;
  stage?: string | null;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border/70 p-6 ${className}`}
      style={{ backgroundColor: background }}
    >
      <div
        className={`flex min-h-36 items-center justify-center rounded-xl ${stage ? "p-6" : ""}`}
        style={stage ? { backgroundColor: stage } : undefined}
      >
        {children}
      </div>
    </div>
  );
}

export const Overview: Story = {
  render: () => (
    <div className="space-y-10">
      <header className="space-y-3">
        <h2 className="border-b pb-2 text-2xl font-bold">Logo Branding</h2>
        <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
          Approved Aura core brand marks presented as recommended, educational guidance for product UI,
          documentation, and presentation work.
        </p>
      </header>

      <section className="space-y-5">
        <SectionHeader
          title="Brand Assets"
          description="These are the canonical Aura marks sourced from Figma. Use the icon when space is tight, and reach for the wordmark when the name should carry more presence."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {brandAssets.map((asset) => (
            <article key={asset.name} className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-base font-semibold">{asset.name}</h4>
                  <p className="text-sm text-muted-foreground">{asset.note}</p>
                </div>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {asset.dimensions}
                </span>
              </div>
              <SurfaceFrame background="#111827" className="min-h-52">
                {asset.preview}
              </SurfaceFrame>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader
          title="Recommended Sizes"
          description="These examples are recommendations rather than hard rules. They give teams a fast sense of what still feels crisp in interfaces, docs, and branded communications."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
            <h4 className="text-base font-semibold">Icon</h4>
            <p className="mt-1 text-sm text-muted-foreground">Compact, square applications benefit from these working sizes.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {iconSizeExamples.map((size) => (
                <div key={size} className="rounded-xl border border-border/60 bg-muted/30 p-4">
                  <div className="flex min-h-24 items-center justify-center rounded-lg bg-[#111827]">
                    <BrandIcon size={size} />
                  </div>
                  <p className="mt-3 text-xs font-medium text-muted-foreground">{size}px</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
            <h4 className="text-base font-semibold">Wordmark</h4>
            <p className="mt-1 text-sm text-muted-foreground">Width-led examples help preserve the wordmark's proportions across surfaces.</p>
            <div className="mt-5 grid gap-3">
              {wordmarkSizeExamples.map((width) => (
                <div key={width} className="rounded-xl border border-border/60 bg-muted/30 p-4">
                  <div className="flex min-h-24 items-center justify-center rounded-lg bg-[#111827]">
                    <Wordmark width={width} />
                  </div>
                  <p className="mt-3 text-xs font-medium text-muted-foreground">{width}px wide</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader
          title="Clear Space"
          description="Give the marks room to breathe. These examples illustrate recommended clear space so the icon and wordmark don't compete with nearby UI or layout edges."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
            <h4 className="text-base font-semibold">Icon Clear Space</h4>
            <p className="mt-1 text-sm text-muted-foreground">Treat the surrounding padding as minimum breathing room in dense layouts.</p>
            <SurfaceFrame background="#eeece8" stage="#1f2937" className="mt-4">
              <div className="rounded-[28px] border border-dashed border-white/35 p-8">
                <BrandIcon size={64} />
              </div>
            </SurfaceFrame>
          </article>

          <article className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
            <h4 className="text-base font-semibold">Wordmark Clear Space</h4>
            <p className="mt-1 text-sm text-muted-foreground">Keep the name clear of adjacent copy, controls, and framing elements.</p>
            <SurfaceFrame background="#f9f8f6" stage="#374151" className="mt-4">
              <div className="rounded-[28px] border border-dashed border-white/35 px-10 py-8">
                <Wordmark width={160} />
              </div>
            </SurfaceFrame>
          </article>
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader
          title="Background Treatments"
          description="Aura's neutral gray system helps the marks feel at home across product and presentation surfaces. Darker neutrals are the most reliable direct pairing for the current light assets."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {backgroundTreatments.map((treatment) => (
            <article key={treatment.name} className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h4 className="text-base font-semibold">{treatment.name}</h4>
                  <p className="text-xs font-medium text-muted-foreground">{treatment.hex}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    treatment.recommended ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {treatment.recommended ? "Recommended" : "Display Surface"}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{treatment.description}</p>
              <SurfaceFrame background={treatment.background} stage={treatment.stage} className="mt-4">
                <div className="flex flex-col items-center gap-5">
                  <BrandIcon size={52} />
                  <Wordmark width={132} />
                </div>
              </SurfaceFrame>
            </article>
          ))}
        </div>
      </section>
    </div>
  ),
};
