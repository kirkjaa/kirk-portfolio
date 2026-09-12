/**
 * Guard: every page's section keys must resolve to a heading in English, Thai and Korean.
 *
 * The Thai and Korean headings carry the English title in parentheses, so their slugs
 * gain a prefix — "CSO와 자문으로서 (Where I serve as CSO and advisor)" slugifies to
 * "cso-where-i-serve-as-cso-and-advisor". A key that is a truncation of the English
 * slug ("where-i-serve") matches English and silently drops the whole section from the
 * other two languages. That shipped once; this stops it shipping again.
 *
 * Runs as part of `npm run build`.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const LANGUAGES = ["en", "th", "ko"];

/* Keep in step with the keys in src/pages/*.tsx. */
const PAGES = {
  "About.tsx": ["in-short", "where-i-come-from", "how-i-work"],
  "Ventures.tsx": [
    "what-i-build",
    "where-i-serve-as-cso-and-advisor",
    "thailand-to-korea",
    "recognition",
    "founders-i-mentor",
  ],
  "Publications.tsx": ["speaking", "what-i-can-help-with", "contact"],
};

/* Mirrors src/lib/slugify.ts. */
function slugify(value) {
  const latin = value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  if (latin) return latin;
  return "s-" + Array.from(value.trim()).map((ch) => ch.codePointAt(0).toString(36)).join("").slice(0, 32);
}

/* Mirrors the matcher in src/utils/markdown.ts. */
const matches = (id, key) => id === key || id.startsWith(`${key}-`) || id.endsWith(`-${key}`);

const headings = Object.fromEntries(
  LANGUAGES.map((lang) => [
    lang,
    [...readFileSync(join(root, "src/content", `profile.${lang}.md`), "utf8").matchAll(/^## (.+)$/gm)].map((m) =>
      slugify(m[1].trim())
    ),
  ])
);

const failures = [];
for (const [page, keys] of Object.entries(PAGES)) {
  for (const key of keys) {
    for (const lang of LANGUAGES) {
      if (!headings[lang].some((id) => matches(id, key))) {
        failures.push(`${page} · ${lang.toUpperCase()} · "${key}" matches no heading`);
      }
    }
  }
}

/* A key must not be a truncation that only works in English. */
for (const [page, keys] of Object.entries(PAGES)) {
  for (const key of keys) {
    const en = headings.en.filter((id) => matches(id, key));
    if (en.length > 1) failures.push(`${page} · "${key}" is ambiguous in English: ${en.join(", ")}`);
  }
}

if (failures.length > 0) {
  console.error("\nSection keys do not resolve:\n");
  for (const f of failures) console.error("  ✗ " + f);
  console.error("\nUse the full English slug of the heading as the key.\n");
  process.exit(1);
}

const total = Object.values(PAGES).reduce((n, keys) => n + keys.length, 0);
console.log(`✓ ${total} section keys resolve in ${LANGUAGES.join(", ")}`);
