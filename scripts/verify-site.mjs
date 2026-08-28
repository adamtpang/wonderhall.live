import { analyzeHtml, validateHomeContract } from "./site-contract.mjs";

const requested = process.argv[2] || "http://127.0.0.1:3000";
const base = new URL(requested.endsWith("/") ? requested : `${requested}/`);

const browserUserAgent = "Mozilla/5.0 (compatible; WonderhallVerification/1.0)";
const botUserAgent = "Mozilla/5.0 AppleWebKit/537.36 (compatible; GPTBot/1.2; +https://openai.com/gptbot)";

async function fetchText(path, userAgent = browserUserAgent) {
  const response = await fetch(new URL(path, base), { headers: { "user-agent": userAgent } });
  return { response, text: await response.text() };
}

const [browser, bot, about, contact, privacy, llms] = await Promise.all([
  fetchText("/"),
  fetchText("/", botUserAgent),
  fetchText("/about"),
  fetchText("/contact"),
  fetchText("/privacy"),
  fetchText("/llms.txt"),
]);

const result = validateHomeContract({ html: browser.text, headers: browser.response.headers });
const botDocument = analyzeHtml(bot.text);
const parityRatio = Math.min(1, botDocument.textChars / Math.max(result.document.textChars, 1));

if (!browser.response.ok) result.errors.push(`browser request returned HTTP ${browser.response.status}`);
if (!bot.response.ok) result.errors.push(`GPTBot request returned HTTP ${bot.response.status}`);
if (botDocument.textChars < 700) result.errors.push("GPTBot HTML must contain at least 700 text characters");
if (parityRatio < 0.85) result.errors.push("browser and GPTBot text parity must be at least 85%");
for (const [name, item] of Object.entries({ about, contact, privacy })) {
  if (!item.response.ok) result.errors.push(`${name} returned HTTP ${item.response.status}`);
}
if (!llms.response.ok || !/^#\s+Wonderhall/m.test(llms.text) || !/\[[^\]]+\]\(https:\/\//.test(llms.text)) {
  result.errors.push("llms.txt must return useful Markdown with an H1 and absolute links");
}

const summary = {
  url: browser.response.url,
  status: browser.response.status,
  botStatus: bot.response.status,
  title: result.document.title,
  descriptionLength: result.document.description.length,
  canonical: result.document.canonical,
  textChars: result.document.textChars,
  botTextChars: botDocument.textChars,
  wordCount: result.document.wordCount,
  paragraphCount: result.document.paragraphCount,
  chunkableParagraphRatio: result.document.chunkableParagraphRatio,
  parityRatio,
  jsonLdTypes: result.document.jsonLdTypes,
  contentSecurityPolicy: browser.response.headers.get("content-security-policy"),
  xContentTypeOptions: browser.response.headers.get("x-content-type-options"),
  trustPages: {
    about: about.response.status,
    contact: contact.response.status,
    privacy: privacy.response.status,
  },
  llms: { status: llms.response.status, contentType: llms.response.headers.get("content-type") },
  errors: result.errors,
};

console.log(JSON.stringify(summary, null, 2));
if (result.errors.length) process.exitCode = 1;
