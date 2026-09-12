import { useMemo } from "react";
import { MarkdownContent } from "@/components/MarkdownContent";
import { PageHeader } from "@/components/PageHeader";
import { AtAGlance } from "@/components/AtAGlance";
import { CareerTimeline } from "@/components/CareerTimeline";
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
      <div className="container grid gap-12 pb-24 pt-4 lg:grid-cols-12 lg:gap-16">
        {/* min-w-0 lets the column shrink below the prose max-width on narrow screens. */}
        <div className="min-w-0 lg:col-span-7">
          <MarkdownContent content={markdown} />
        </div>
        <div className="lg:col-span-4 lg:col-start-9 lg:pt-12">
          <div className="space-y-10">
            <AtAGlance />
            <CareerTimeline />
          </div>
        </div>
      </div>
    </article>
  );
}
