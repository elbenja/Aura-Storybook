import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");

test("index.css matches the resolved semantic colors from Figma", () => {
  const css = readFileSync(resolve(projectRoot, "src/index.css"), "utf8");

  assert.match(css, /--background:\s*var\(--gray-50\);/);
  assert.match(css, /--card:\s*var\(--gray-50\);/);
  assert.match(css, /--popover:\s*#ffffff;/);
  assert.match(css, /--secondary-foreground:\s*var\(--gray-700\);/);
  assert.match(css, /--destructive:\s*#dc2626;/);
  assert.match(css, /--chart-1:\s*#2a9d90;/);
  assert.match(css, /--chart-5:\s*#f4a462;/);

  assert.match(css, /--popover:\s*var\(--gray-950\);/);
  assert.match(css, /--secondary:\s*var\(--gray-800\);/);
  assert.match(css, /--secondary-foreground:\s*var\(--gray-100\);/);
  assert.match(css, /--destructive:\s*#991b1b;/);
  assert.match(css, /--border:\s*var\(--gray-700\);/);
  assert.match(css, /--chart-1:\s*#2662d9;/);
  assert.match(css, /--chart-5:\s*#2eb88a;/);
});

test("logo branding story uses shared CSS gray variables for preview surfaces", () => {
  const story = readFileSync(resolve(projectRoot, "src/stories/foundations/LogoBranding.stories.tsx"), "utf8");

  assert.match(story, /background:\s*"var\(--gray-50\)"/);
  assert.match(story, /background:\s*"var\(--gray-100\)"/);
  assert.match(story, /background:\s*"var\(--gray-800\)"/);
  assert.match(story, /style=\{\{\s*backgroundColor:\s*"var\(--gray-900\)"\s*\}\}/);
  assert.match(story, /stage="var\(--gray-800\)"/);
  assert.doesNotMatch(story, /bg-\[#111827\]/);
});
