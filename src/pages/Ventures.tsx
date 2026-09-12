import { useMemo } from "react";
import { MarkdownContent } from "@/components/MarkdownContent";
import { PageHeader } from "@/components/PageHeader";
import { SectionNav } from "@/components/SectionNav";
import { KoreaArc } from "@/components/KoreaArc";
import { TrackLedger } from "@/components/TrackLedger";
import { MarkdownSection, parseMarkdownSections } from "@/utils/markdown";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProfileMarkdown } from "@/content/profileContent";
import { getHomeContent } from "@/content/homeContent";
import { getStrings } from "@/content/strings";
import { usePageTitle } from "@/lib/usePageTitle";

/* In page order. A key matches a slug exactly, by prefix, or at the end — Thai and
   Korean headings carry the English title in parentheses. */
const KEYS = ["what-i-build", "where-i-serve-as-cso-and-advisor", "thailand-to-korea", "recognition", "founders-i-mentor"];

interface Part {
  head?: MarkdownSection;
  body: string;
}

/** A top-level section plus every heading beneath it, as one markdown string. */
function collect(sections: MarkdownSection[], key: string): Part {
  const matches = (id: string) => id === key || id.startsWith(`${key}-`) || id.endsWith(`-${key}`);
  const start = sections.findIndex((s) => s.level === 2 && matches(s.id));
  if (start < 0) return { body: "" };

  const head = sections[start];
  const parts: string[] = [head.content.trim()];
  for (let i = start + 1; i < sections.length && sections[i].level > head.level; i += 1) {
    const s = sections[i];
    parts.push(`${"#".repeat(s.level)} ${s.title}\n${s.content.trim()}`);
  }
  return { head, body: parts.filter(Boolean).join("\n\n") };
}

function Heading({ section }: { section?: MarkdownSection }) {
  if (!section) return null;
  return (
    <h2 id={section.id} className="display-md mt-16 border-t border-line pt-10 first:mt-0 first:border-0 first:pt-0">
      {section.title}
    </h2>
  );
}

export default function Ventures() {
  const { language } = useLanguage();
  const s = getStrings(language);
  const { track } = getHomeContent(language);
  usePageTitle(s.navigation.ventures);

  const parts = useMemo(() => {
    const sections = parseMarkdownSections(getProfileMarkdown(language));
    return Object.fromEntries(KEYS.map((key) => [key, collect(sections, key)])) as Record<string, Part>;
  }, [language]);

  const navSections = KEYS.map((key) => parts[key].head).filter((h): h is MarkdownSection => Boolean(h));

  return (
    <article>
      <PageHeader eyebrow={s.pages.ventures.eyebrow} title={s.pages.ventures.title} lede={s.pages.ventures.lede} />
      <div className="container grid gap-10 pb-24 pt-4 lg:grid-cols-[15rem_1fr] lg:gap-16">
        <SectionNav sections={navSections} />

        <div className="min-w-0">
          <Heading section={parts["what-i-build"].head} />
          <MarkdownContent content={parts["what-i-build"].body} ventureHeadings className="mt-6" />

          <Heading section={parts["where-i-serve-as-cso-and-advisor"].head} />
          <MarkdownContent content={parts["where-i-serve-as-cso-and-advisor"].body} ventureHeadings className="mt-6" />

          <Heading section={parts["thailand-to-korea"].head} />
          <KoreaArc />
          <MarkdownContent content={parts["thailand-to-korea"].body} className="mt-8" />

          <Heading section={parts.recognition.head} />
          <div className="mt-8">
            <TrackLedger items={track} compact />
          </div>

          <Heading section={parts["founders-i-mentor"].head} />
          <MarkdownContent content={parts["founders-i-mentor"].body} className="mt-6" />
        </div>
      </div>
    </article>
  );
}
