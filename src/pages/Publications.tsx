import { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { MarkdownContent } from "@/components/MarkdownContent";
import { PageHeader } from "@/components/PageHeader";
import { buildMarkdownFromSections, getSectionsByIds, parseMarkdownSections } from "@/utils/markdown";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProfileMarkdown } from "@/content/profileContent";
import { getHomeContent } from "@/content/homeContent";
import { getStrings } from "@/content/strings";
import { usePageTitle } from "@/lib/usePageTitle";

const WRITING_SECTIONS = ["thought-leadership", "technical-expertise", "digital-presence"];

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
      <div className="container pb-24 pt-12">
        <p className="eyebrow eyebrow-accent">{s.sections.writing.eyebrow}</p>
        <ol className="mt-6 max-w-3xl border-t border-line">
          {articles.map((article) => (
            <li key={article.link} className="border-b border-line">
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="group grid gap-1 py-4 md:grid-cols-[7.5rem_1fr] md:gap-6">
                <span className="caption md:pt-1">{article.date}</span>
                <span>
                  <span className="font-display font-semibold leading-snug tracking-tight decoration-accent decoration-2 underline-offset-4 group-hover:underline">
                    {article.title}
                  </span>
                  <span className="caption mt-1 inline-flex items-center gap-1 md:ml-3 md:mt-0">
                    {s.labels.readOnE27} <ArrowUpRight className="h-3 w-3" />
                  </span>
                  {article.quote && <span className="mt-1.5 block text-sm italic leading-snug text-fg-muted">“{article.quote}”</span>}
                </span>
              </a>
            </li>
          ))}
        </ol>
        <div className="mt-16">
          <MarkdownContent content={markdown} />
        </div>
      </div>
    </article>
  );
}
