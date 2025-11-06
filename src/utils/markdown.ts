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
      const id = slugify(title);

      pushCurrent();
      current = {
        id,
        title,
        level,
        content: "",
      };
    } else {
      if (!current) {
        current = {
          id: "introduction",
          title: "Introduction",
          level: 1,
          content: "",
        };
      }

      current.content += line + "\n";
    }
  }

  pushCurrent();

  return sections;
}

export function buildMarkdownFromSections(sections: MarkdownSection[]): string {
  return sections
    .map((section) => {
      const hashes = "#".repeat(section.level);
      return `${hashes} ${section.title}\n${section.content.trim()}\n`;
    })
    .join("\n");
}

export function getSectionsByIds(
  sections: MarkdownSection[],
  ids: string[]
): MarkdownSection[] {
  const lookup = new Map(sections.map((section) => [section.id, section] as const));
  return ids
    .map((id) => lookup.get(id))
    .filter((section): section is MarkdownSection => Boolean(section));
}

export function getSectionsByLevel(
  sections: MarkdownSection[],
  level: number
): MarkdownSection[] {
  return sections.filter((section) => section.level === level);
}
