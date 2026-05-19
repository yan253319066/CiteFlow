import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

test("report page analyzes without calling the public API URL", () => {
  const source = readFileSync("app/report/[domain]/page.tsx", "utf8");

  assert.doesNotMatch(source, /NEXT_PUBLIC_SITE_URL/);
  assert.doesNotMatch(source, /\/api\/analyze/);
  assert.match(source, /analyzeSite/);
});

test("report page does not use inline scripts or session token bridges", () => {
  const source = readFileSync("app/report/[domain]/page.tsx", "utf8");

  assert.doesNotMatch(source, /dangerouslySetInnerHTML/);
  assert.doesNotMatch(source, /<script/i);
  assert.doesNotMatch(source, /SessionTokenBridge/);
  assert.doesNotMatch(source, /sessionToken/);
});

test("Turnstile flow does not use window cf token session state", () => {
  const hero = readFileSync("components/Hero.tsx", "utf8");
  const verification = readFileSync("lib/verification.ts", "utf8");
  const apiRoute = readFileSync("app/api/analyze/route.ts", "utf8");

  assert.doesNotMatch(hero, /__cf_token/);
  assert.doesNotMatch(hero, /interface Window/);
  assert.doesNotMatch(verification, /createSessionToken|verifySessionToken|createHmac|SESSION_TTL/);
  assert.doesNotMatch(apiRoute, /sessionToken|createSessionToken/);
  assert.equal(existsSync("components/SessionTokenBridge.tsx"), false);
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

test("root layout nonces the Turnstile script", () => {
  const source = readFileSync("app/layout.tsx", "utf8");

  assert.match(source, /nonce=\{nonce\}/);
  assert.match(source, /challenges\.cloudflare\.com\/turnstile\/v0\/api\.js/);
});

test("middleware CSP supports Next scripts and Turnstile without Trusted Types enforcement", () => {
  const source = readFileSync("middleware.ts", "utf8");

  assert.match(source, /x-nonce/);
  assert.match(source, /script-src[^`]+nonce-/s);
  assert.match(source, /https:\/\/challenges\.cloudflare\.com/);
  assert.doesNotMatch(source, /require-trusted-types-for/);
  assert.doesNotMatch(source, /trusted-types/);
});

test("Turnstile widget hides after a successful verification", () => {
  const source = readFileSync("components/TurnstileWidget.tsx", "utf8");

  assert.match(source, /const \[verified, setVerified\]/);
  assert.match(source, /setVerified\(true\)/);
  assert.match(source, /verified \? 'hidden'/);
  assert.match(source, /setVerified\(false\)/);
});
