import { useMemo } from "react";
import { MarkdownContent } from "@/components/MarkdownContent";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { ArticleList } from "@/components/ArticleList";
import { buildMarkdownFromSections, getSectionsByIds, parseMarkdownSections } from "@/utils/markdown";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProfileMarkdown } from "@/content/profileContent";
import { getHomeContent } from "@/content/homeContent";
import { getStrings } from "@/content/strings";
import { usePageTitle } from "@/lib/usePageTitle";

const WRITING_SECTIONS = ["speaking", "what-i-can-help-with", "contact"];

export default function Publications() {
  const { language } = useLanguage();
  const s = getStrings(language);
  usePageTitle(s.navigation.writing);
  const { articles } = getHomeContent(language);
  const markdown = useMemo(() => {
    const sections = parseMarkdownSections(getProfileMarkdown(language));
    return buildMarkdownFromSections(getSectionsByIds(sections, WRITING_SECTIONS));
  }, [language]);

  return (
    <article>
      <PageHeader eyebrow={s.pages.writing.eyebrow} title={s.pages.writing.title} lede={s.pages.writing.lede} />
      <section className="container pt-14">
        <SectionHeading eyebrow={s.sections.writing.eyebrow} title={s.sections.writing.title} lede={s.sections.writing.lede} />
        <div className="mt-10">
          <ArticleList articles={articles} />
        </div>
      </section>
      <div className="container pb-24 pt-16">
        <MarkdownContent content={markdown} />
      </div>
    </article>
  );
}
