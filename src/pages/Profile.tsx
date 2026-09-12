import { useEffect, useMemo, useState } from "react";
import { MarkdownContent } from "@/components/MarkdownContent";
import { PageHeader } from "@/components/PageHeader";
import { buildMarkdownFromSections, getSectionsByLevel, parseMarkdownSections } from "@/utils/markdown";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProfileMarkdown } from "@/content/profileContent";
import { getStrings } from "@/content/strings";

export default function Profile() {
  const { language } = useLanguage();
  const s = getStrings(language);
  const sections = useMemo(() => parseMarkdownSections(getProfileMarkdown(language)), [language]);
  const topLevel = useMemo(() => getSectionsByLevel(sections, 2), [sections]);
  const [activeId, setActiveId] = useState(() => topLevel[0]?.id ?? "");

  useEffect(() => {
    if (topLevel.length > 0) setActiveId(topLevel[0].id);
  }, [topLevel]);

  useEffect(() => {
    if (topLevel.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // Several headings can report at once (first paint, fast scrolls) — take the topmost visible one.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );
    topLevel
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => Boolean(el))
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [topLevel]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <article>
      <PageHeader eyebrow={s.pages.profile.eyebrow} title={s.pages.profile.title} lede={s.pages.profile.lede} />
      <div className="container grid gap-10 pb-24 pt-4 lg:grid-cols-[15rem_1fr] lg:gap-16">
        <div className="pt-6 lg:hidden">
          <label className="eyebrow block" htmlFor="profile-section-select">{s.labels.jumpTo}</label>
          <select
            id="profile-section-select"
            className="mt-2 w-full border border-line bg-surface-2 px-3 py-2 text-sm text-fg"
            value={activeId}
            onChange={(event) => scrollTo(event.target.value)}
          >
            {topLevel.map((section) => (
              <option key={section.id} value={section.id}>{section.title}</option>
            ))}
          </select>
        </div>

        <aside className="sticky top-24 hidden self-start lg:block">
          <p className="eyebrow">{s.labels.contents}</p>
          <nav className="mt-4 border-l border-line">
            {topLevel.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollTo(section.id)}
                className={`-ml-px block w-full border-l-2 py-1.5 pl-4 text-left text-sm leading-snug transition-colors ${
                  activeId === section.id ? "border-accent text-fg" : "border-transparent text-fg-muted hover:text-fg"
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* min-w-0 lets the column shrink below the awards table's natural width on phones. */}
        <MarkdownContent content={buildMarkdownFromSections(sections)} className="min-w-0" />
      </div>
    </article>
  );
}
