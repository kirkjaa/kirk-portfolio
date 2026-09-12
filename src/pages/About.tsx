import { useMemo } from "react";
import { MarkdownContent } from "@/components/MarkdownContent";
import { PageHeader } from "@/components/PageHeader";
import { buildMarkdownFromSections, getSectionsByIds, parseMarkdownSections } from "@/utils/markdown";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProfileMarkdown } from "@/content/profileContent";
import { getStrings } from "@/content/strings";
import { usePageTitle } from "@/lib/usePageTitle";

/* Section keys match by prefix so the EN, TH and KO headings all resolve. */
const ABOUT_SECTIONS = ["in-short", "where-i-come-from", "how-i-work"];

export default function About() {
  const { language } = useLanguage();
  const s = getStrings(language);
  usePageTitle(s.navigation.about);
  const markdown = useMemo(() => {
    const sections = parseMarkdownSections(getProfileMarkdown(language));
    return buildMarkdownFromSections(getSectionsByIds(sections, ABOUT_SECTIONS));
  }, [language]);

  return (
    <article>
      <PageHeader eyebrow={s.pages.about.eyebrow} title={s.pages.about.title} lede={s.pages.about.lede} />
      <div className="container pb-24 pt-4">
        <MarkdownContent content={markdown} />
      </div>
    </article>
  );
}
