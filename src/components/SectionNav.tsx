import { useEffect, useState } from "react";
import { MarkdownSection } from "@/utils/markdown";
import { useLanguage } from "@/contexts/LanguageContext";
import { getStrings } from "@/content/strings";

interface SectionNavProps {
  sections: MarkdownSection[];
}

/** Sticky contents list on desktop, a jump-to select on phones. */
export function SectionNav({ sections }: SectionNavProps) {
  const { language } = useLanguage();
  const s = getStrings(language);
  const [activeId, setActiveId] = useState(() => sections[0]?.id ?? "");

  useEffect(() => {
    if (sections.length > 0) setActiveId(sections[0].id);
  }, [sections]);

  useEffect(() => {
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // Several headings can report at once; take the topmost visible one.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );
    sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => Boolean(el))
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <>
      <div className="pt-6 lg:hidden">
        <label className="eyebrow block" htmlFor="section-nav-select">
          {s.labels.jumpTo}
        </label>
        <select
          id="section-nav-select"
          className="mt-2 w-full border border-line bg-surface-2 px-3 py-2 text-sm text-fg"
          value={activeId}
          onChange={(event) => scrollTo(event.target.value)}
        >
          {sections.map((section) => (
            <option key={section.id} value={section.id}>
              {section.title}
            </option>
          ))}
        </select>
      </div>

      <aside className="sticky top-24 hidden self-start lg:block">
        <p className="eyebrow">{s.labels.contents}</p>
        <nav className="mt-4 border-l border-line">
          {sections.map((section) => (
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
    </>
  );
}
