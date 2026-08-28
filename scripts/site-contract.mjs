const PRONOUN_STARTS = /^(it|this|that|these|they|he|she|we|you)\b/i;
const CTA_PATTERN = /\b(get started|start|try|buy|book|schedule|contact|request|sign up|subscribe|download|audit|scan|demo|join|apply)\b/i;
const OFFER_PATTERN = /\b(pricing|price|plans?|free trial|money.back|guarantee|per month|one.time|starting at|book a call|request a quote)\b|[$€£]\s?\d/i;

function decodeEntities(value) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function textFromHtml(value) {
  return decodeEntities(
    value
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, " ")
      .replace(/<svg\b[\s\S]*?<\/svg>/gi, " ")
      .replace(/<template\b[\s\S]*?<\/template>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function firstMatch(html, pattern) {
  return decodeEntities(html.match(pattern)?.[1]?.trim() || "");
}

function jsonLdTypes(html) {
  const types = new Set();
  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const pending = [JSON.parse(match[1])];
      while (pending.length) {
        const value = pending.pop();
        if (!value || typeof value !== "object") continue;
        if (Array.isArray(value)) {
          pending.push(...value);
          continue;
        }
        const type = value["@type"];
        if (Array.isArray(type)) type.forEach((item) => types.add(item));
        else if (type) types.add(type);
        if (Array.isArray(value["@graph"])) pending.push(...value["@graph"]);
      }
    } catch {
      // Invalid JSON-LD is treated as absent, matching the production scanner.
    }
  }
  return [...types];
}

export function analyzeHtml(html) {
  const body = firstMatch(html, /<body\b[^>]*>([\s\S]*?)<\/body>/i) || html;
  const text = textFromHtml(body);
  const paragraphs = [...body.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((match) => textFromHtml(match[1]))
    .filter(Boolean);
  const chunkable = paragraphs.filter((paragraph) => {
    const count = paragraph.split(/\s+/).filter(Boolean).length;
    return count >= 25 && count <= 120 && !PRONOUN_STARTS.test(paragraph);
  });
  const linkText = [...body.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)]
    .map((match) => `${match[1]} ${textFromHtml(match[2])}`.toLowerCase());
  const headingMatches = [...body.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)];

  return {
    title: firstMatch(html, /<title\b[^>]*>([\s\S]*?)<\/title>/i),
    description: firstMatch(html, /<meta\b[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i),
    canonical: firstMatch(html, /<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i),
    h1Count: headingMatches.filter((match) => match[1] === "1" && textFromHtml(match[2])).length,
    textChars: text.length,
    wordCount: text ? text.split(/\s+/).filter(Boolean).length : 0,
    paragraphCount: paragraphs.length,
    chunkableParagraphRatio: paragraphs.length ? chunkable.length / paragraphs.length : 0,
    jsonLdTypes: jsonLdTypes(html),
    hasAboutLink: linkText.some((link) => /\babout\b/.test(link)),
    hasContactLink: linkText.some((link) => /\b(contact|support|book|schedule)\b/.test(link)),
    hasPrivacyLink: linkText.some((link) => /\bprivacy\b/.test(link)),
    ctaCount: linkText.filter((link) => CTA_PATTERN.test(link)).length,
    hasOfferLanguage: OFFER_PATTERN.test(text),
  };
}

export function validateHomeContract({ html, headers }) {
  const document = analyzeHtml(html);
  const errors = [];
  if (document.title.length < 20 || document.title.length > 65) errors.push("title must be 20 to 65 characters");
  if (document.description.length < 70 || document.description.length > 170) errors.push("description must be 70 to 170 characters");
  if (!/^https?:\/\//.test(document.canonical)) errors.push("canonical must be absolute");
  if (document.h1Count !== 1) errors.push("exactly one non-empty H1 is required");
  if (document.textChars < 700) errors.push("raw text must contain at least 700 characters");
  if (document.wordCount < 250) errors.push("raw text must contain at least 250 words");
  if (document.chunkableParagraphRatio < 0.35) errors.push("at least 35% of paragraphs must be standalone passages");
  if (!document.jsonLdTypes.includes("Organization")) errors.push("Organization JSON-LD is required");
  if (!(document.hasAboutLink && document.hasContactLink && document.hasPrivacyLink)) errors.push("About, Contact, and Privacy links are required");
  if (document.ctaCount < 1) errors.push("an action-oriented link is required");
  if (!document.hasOfferLanguage) errors.push("explicit offer or pricing language is required");
  if (!headers.get("content-security-policy")) errors.push("Content-Security-Policy is required");
  if (!/nosniff/i.test(headers.get("x-content-type-options") || "")) errors.push("X-Content-Type-Options: nosniff is required");
  return { document, errors };
}
