import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { CONTENT_SECURITY_POLICY, SECURITY_HEADERS } from "../config/security.mjs";
import {
  HOME_JSON_LD,
  HOME_PASSAGES,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from "../app/site-data.mjs";
import { analyzeHtml, validateHomeContract } from "../scripts/site-contract.mjs";

test("homepage copy meets the measured content thresholds", () => {
  const passages = Object.values(HOME_PASSAGES).flat();
  const words = passages.join(" ").split(/\s+/).filter(Boolean);
  const chunkable = passages.filter((passage) => {
    const count = passage.split(/\s+/).filter(Boolean).length;
    return count >= 25 && count <= 120 && !/^(it|this|that|these|they|he|she|we|you)\b/i.test(passage);
  });

  assert.ok(words.length >= 250, `expected at least 250 words, got ${words.length}`);
  assert.ok(chunkable.length / passages.length >= 0.35);
});

test("substantive homepage copy uses a native, human-accessible disclosure", async () => {
  const root = fileURLToPath(new URL("..", import.meta.url));
  const [source, styles] = await Promise.all([
    readFile(`${root}/app/page.tsx`, "utf8"),
    readFile(`${root}/app/globals.css`, "utf8"),
  ]);

  assert.match(source, /<details className="wh-details">/);
  assert.match(source, /<summary>Wonderhall details<\/summary>/);
  assert.match(styles, /\.wh-details:not\(\[open\]\) > \.wh-details-content\s*{\s*display: none;/);
  assert.doesNotMatch(source, /(?:hidden|sr-only)[^\n]*HOME_PASSAGES|HOME_PASSAGES[^\n]*(?:hidden|sr-only)/);
});

test("metadata and JSON-LD expose canonical identity without unsupported fields", () => {
  assert.ok(SITE_TITLE.length >= 20 && SITE_TITLE.length <= 65);
  assert.ok(SITE_DESCRIPTION.length >= 70 && SITE_DESCRIPTION.length <= 170);
  assert.equal(new URL(SITE_URL).origin, SITE_URL);
  const organization = HOME_JSON_LD["@graph"].find((node) => node["@type"] === "Organization");
  assert.equal(organization?.name, "Wonderhall");
  assert.equal(organization?.url, `${SITE_URL}/`);
  assert.equal("review" in organization, false);
  assert.equal("offers" in organization, false);
});

test("security policy is enforced, origin-bounded, and contains no wildcard source", () => {
  assert.match(CONTENT_SECURITY_POLICY, /default-src 'self'/);
  assert.match(CONTENT_SECURITY_POLICY, /object-src 'none'/);
  assert.match(CONTENT_SECURITY_POLICY, /frame-ancestors 'none'/);
  assert.doesNotMatch(CONTENT_SECURITY_POLICY, /(^|\s)\*(\s|;|$)/);
  assert.equal(SECURITY_HEADERS.find((header) => header.key === "X-Content-Type-Options")?.value, "nosniff");
});

test("verification parser recognizes every Lightmark remediation signal", () => {
  const paragraphs = Object.values(HOME_PASSAGES).flat().map((passage) => `<p>${passage}</p>`).join("");
  const html = `<!doctype html><html lang="en"><head><title>${SITE_TITLE}</title><meta name="description" content="${SITE_DESCRIPTION}"><link rel="canonical" href="${SITE_URL}/"><script type="application/ld+json">${JSON.stringify(HOME_JSON_LD)}</script></head><body><h1>Wonderhall</h1>${paragraphs}<a href="/about">About</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/perform">Apply to perform</a><span>Ticket pricing is not published.</span></body></html>`;
  const headers = new Headers({
    "content-security-policy": CONTENT_SECURITY_POLICY,
    "x-content-type-options": "nosniff",
  });
  const validation = validateHomeContract({ html, headers });

  assert.deepEqual(validation.errors, []);
  assert.deepEqual(analyzeHtml(html).jsonLdTypes.sort(), ["Organization", "WebSite"]);
});

test("llms.txt provides an H1 and absolute Markdown links", async () => {
  const root = fileURLToPath(new URL("..", import.meta.url));
  const llms = await readFile(`${root}/public/llms.txt`, "utf8");
  assert.match(llms, /^# Wonderhall/m);
  assert.match(llms, /\[Wonderhall home\]\(https:\/\/wonderhall\.live\/\)/);
  assert.ok(llms.trim().length > 20);
});
