import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("report page analyzes without calling the public API URL", () => {
  const source = readFileSync("app/report/[domain]/page.tsx", "utf8");

  assert.doesNotMatch(source, /NEXT_PUBLIC_SITE_URL/);
  assert.doesNotMatch(source, /\/api\/analyze/);
  assert.match(source, /analyzeSite/);
});
