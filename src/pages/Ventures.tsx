import { useMemo } from "react";
import { MarkdownContent } from "@/components/MarkdownContent";
import { PageHeader } from "@/components/PageHeader";
import { buildMarkdownFromSections, getSectionsByIds, parseMarkdownSections } from "@/utils/markdown";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProfileMarkdown } from "@/content/profileContent";
import { getStrings } from "@/content/strings";

const VENTURE_SECTIONS = ["core-ventures", "awards-recognition", "mentorship-ecosystem", "current-focus", "impact-legacy"];

export default function Ventures() {
  const { language } = useLanguage();
  const s = getStrings(language);
  const markdown = useMemo(() => {
    const sections = parseMarkdownSections(getProfileMarkdown(language));
    return buildMarkdownFromSections(getSectionsByIds(sections, VENTURE_SECTIONS));
  }, [language]);

  return (
    <article>
      <PageHeader eyebrow={s.pages.ventures.eyebrow} title={s.pages.ventures.title} lede={s.pages.ventures.lede} />
      <div className="container pb-24 pt-4">
        <MarkdownContent content={markdown} />
      </div>
    </article>
  );
}
