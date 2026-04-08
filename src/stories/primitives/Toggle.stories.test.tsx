import { describe, expect, it } from "vitest";

import meta from "./Toggle.stories";

describe("Toggle stories", () => {
  it("does not control the pressed state from default docs args", () => {
    expect(meta.args?.pressed).toBeUndefined();
  });
});
