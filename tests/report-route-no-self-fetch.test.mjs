import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

test("report page analyzes without calling the public API URL", () => {
  const source = readFileSync("app/report/[domain]/page.tsx", "utf8");

  assert.doesNotMatch(source, /NEXT_PUBLIC_SITE_URL/);
  assert.doesNotMatch(source, /\/api\/analyze/);
  assert.match(source, /analyzeSite/);
});

test("report page does not use inline scripts for session tokens", () => {
  const source = readFileSync("app/report/[domain]/page.tsx", "utf8");

  assert.doesNotMatch(source, /dangerouslySetInnerHTML/);
  assert.doesNotMatch(source, /<script/i);
  assert.match(source, /SessionTokenBridge/);
});

test("app code avoids inline HTML assignments blocked by production CSP", () => {
  const roots = ["app", "components"];
  const files = [];

  for (const root of roots) {
    const stack = [root];
    while (stack.length) {
      const current = stack.pop();
      for (const entry of readdirSync(current)) {
        const path = join(current, entry);
        if (statSync(path).isDirectory()) {
          stack.push(path);
        } else if (/\.(tsx|ts|jsx|js)$/.test(path)) {
          files.push(path);
        }
      }
    }
  }

  for (const file of files) {
    const source = readFileSync(file, "utf8");
    assert.doesNotMatch(source, /dangerouslySetInnerHTML/, `${file} uses inline HTML assignment`);
  }
});
