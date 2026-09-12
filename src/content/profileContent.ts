import profileEn from "@/content/profile.en.md?raw";
import profileTh from "@/content/profile.th.md?raw";
import profileKo from "@/content/profile.ko.md?raw";
import { Language } from "@/contexts/LanguageContext";

const profiles: Record<Language, string> = {
  en: profileEn,
  th: profileTh,
  ko: profileKo,
};

/**
 * The profile markdown was compiled as a research report. Strip the report
 * furniture — the H1, tagline, date stamp, bracketed citation numbers and the
 * References list — so it reads as a profile, not a dossier.
 */
export function cleanProfileMarkdown(markdown: string): string {
  let text = markdown.replace(/\r\n/g, "\n");

  // Leading H1 + optional bold tagline + optional italic date line + optional rule.
  text = text.replace(/^# [^\n]*\n+(\*\*[^\n]*\*\*\n+)?(\*[^\n]*\*\n+)?(---\n+)?/, "");

  // [12], [3][4], [12][13] citation markers.
  text = text.replace(/(\[\d+\])+/g, "");

  // Drop the References section (numbered "[n]: source" lines) and anything after it.
  text = text.replace(/\n## (References|อ้างอิง|참고 자료|참고문헌)[\s\S]*$/, "\n");

  // Tidy whitespace left by the removals.
  text = text.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n");

  return text.trim() + "\n";
}

export function getProfileMarkdown(language: Language): string {
  return cleanProfileMarkdown(profiles[language] ?? profileEn);
}
