import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Toggle, toggleVariants } from "./toggle";

describe("Aura Toggle", () => {
  it("maps the default size alias to Aura md classes", () => {
    const className = toggleVariants({ size: "default", variant: "default" });

    expect(className).toContain("h-11");
    expect(className).toContain("px-3");
  });

  it("renders outline toggles with border styling", () => {
    const markup = renderToStaticMarkup(
      <Toggle variant="outline" aria-label="Outline toggle" />
    );

    expect(markup).toContain("border");
    expect(markup).toContain('data-slot="toggle"');
  });
});
