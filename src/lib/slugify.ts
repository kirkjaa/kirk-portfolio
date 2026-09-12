/**
 * Heading text → anchor id. Non-Latin headings (Thai, Korean) keep the Latin part
 * that follows them, e.g. "สรุปผู้บริหาร (Executive Summary)" → "executive-summary";
 * a heading with no Latin characters at all gets a stable code-point fallback.
 */
export function slugify(value: string): string {
  const latin = value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  if (latin) return latin;
  return "s-" + Array.from(value.trim()).map((ch) => ch.codePointAt(0)!.toString(36)).join("").slice(0, 32);
}
