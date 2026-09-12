import { useMemo } from "react";
import { MarkdownContent } from "@/components/MarkdownContent";
import { PageHeader } from "@/components/PageHeader";
import { buildMarkdownFromSections, getSectionsByIds, parseMarkdownSections } from "@/utils/markdown";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProfileMarkdown } from "@/content/profileContent";
import { getStrings } from "@/content/strings";
import { usePageTitle } from "@/lib/usePageTitle";

const VENTURE_SECTIONS = ["what-i-build", "where-i-serve-as-cso-and-advisor", "thailand-to-korea", "recognition", "founders-i-mentor"];

export default function Ventures() {
  const { language } = useLanguage();
  const s = getStrings(language);
  usePageTitle(s.navigation.ventures);
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
