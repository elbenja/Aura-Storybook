import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { Overview } from "./LogoBranding.stories";

describe("Logo Branding foundations story", () => {
  it("renders the approved educational sections", () => {
    const markup = renderToStaticMarkup(<>{Overview.render?.({}, {} as never)}</>);

    expect(markup).toContain("Logo Branding");
    expect(markup).toContain("Brand Assets");
    expect(markup).toContain("Recommended Sizes");
    expect(markup).toContain("Clear Space");
    expect(markup).toContain("Background Treatments");
    expect(markup).toContain("recommended");
  });

  it("uses the checked-in wordmark asset instead of a remote Figma URL", () => {
    const markup = renderToStaticMarkup(<>{Overview.render?.({}, {} as never)}</>);

    expect(markup).toContain("brand-wordmark.svg");
    expect(markup).not.toContain("figma.com/api/mcp/asset");
  });
});
