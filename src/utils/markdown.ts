import { slugify } from "@/lib/slugify";

export interface MarkdownSection {
  id: string;
  title: string;
  level: number;
  content: string;
}

export function parseMarkdownSections(markdown: string): MarkdownSection[] {
  const lines = markdown.split(/\r?\n/);
  const sections: MarkdownSection[] = [];
  let current: MarkdownSection | null = null;

  const pushCurrent = () => {
    if (current) {
      current.content = current.content.trimEnd();
      sections.push(current);
    }
  };

  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.*)$/);
    if (match) {
      const level = match[1].length;
      const title = match[2].trim();
      pushCurrent();
      current = { id: slugify(title), title, level, content: "" };
    } else {
      if (!current) {
        current = { id: "introduction", title: "Introduction", level: 1, content: "" };
      }
      current.content += line + "\n";
    }
  }

  pushCurrent();
  return sections;
}

export function buildMarkdownFromSections(sections: MarkdownSection[]): string {
  return sections
    .map((section) => `${"#".repeat(section.level)} ${section.title}\n${section.content.trim()}\n`)
    .join("\n");
}

/**
 * Select sections whose id matches one of the keys (exact, or key followed by
 * a hyphen — so "early-career" finds both "early-career-fintech" and
 * "early-career-pioneering-work-in-fintech" across the three languages) and
 * carry their child headings with them, up to the next heading of the same or
 * a higher level.
 */
export function getSectionsByIds(sections: MarkdownSection[], keys: string[]): MarkdownSection[] {
  // Thai and Korean headings may carry a Latin word before the parenthesis ("บทบาท CSO และ… (Where I serve…)"),
  // so a key may also match the end of an id.
  const matches = (id: string) => keys.some((key) => id === key || id.startsWith(`${key}-`) || id.endsWith(`-${key}`));
  const picked: MarkdownSection[] = [];
  let carryLevel: number | null = null;

  for (const section of sections) {
    if (matches(section.id)) {
      picked.push(section);
      carryLevel = section.level;
      continue;
    }
    if (carryLevel !== null && section.level > carryLevel) {
      picked.push(section);
      continue;
    }
    carryLevel = null;
  }

  return picked;
}

export function getSectionsByLevel(sections: MarkdownSection[], level: number): MarkdownSection[] {
  return sections.filter((section) => section.level === level);
}
