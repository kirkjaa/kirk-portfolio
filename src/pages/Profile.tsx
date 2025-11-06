import { useEffect, useMemo, useState } from "react";
import profileContent from "@/content/profile.md?raw";
import { MarkdownContent } from "@/components/MarkdownContent";
import {
  buildMarkdownFromSections,
  getSectionsByLevel,
  parseMarkdownSections,
} from "@/utils/markdown";

export default function Profile() {
  const sections = useMemo(
    () => parseMarkdownSections(profileContent),
    [profileContent]
  );
  const topLevelSections = useMemo(
    () => getSectionsByLevel(sections, 2),
    [sections]
  );
  const [activeId, setActiveId] = useState(
    () => topLevelSections[0]?.id ?? ""
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (topLevelSections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    const elements = topLevelSections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => Boolean(el));

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [topLevelSections]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <div className="container">
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 rounded-3xl p-8 md:p-12 mb-12 shadow-lg">
        <p className="uppercase tracking-wide text-sm font-semibold text-blue-600 mb-3">
          Comprehensive Portfolio
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Kirk Pathumanun: 25-Year Venture Building Journey
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
          A deep dive into the ventures, accomplishments, and strategic impact of
          Kirk Pathumanun, covering fintech innovation, educational leadership,
          mentorship, and global expansion strategies across three decades.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[260px,1fr]">
        <div className="lg:hidden border border-gray-200 rounded-2xl bg-white p-4 shadow-sm">
          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="profile-section-select">
            Jump to section
          </label>
          <select
            id="profile-section-select"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            value={activeId}
            onChange={(event) => handleScrollTo(event.target.value)}
          >
            {topLevelSections.map((section) => (
              <option key={section.id} value={section.id}>
                {section.title}
              </option>
            ))}
          </select>
        </div>

        <aside className="self-start hidden lg:block sticky top-28">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Table of Contents
            </h2>
            <nav className="space-y-2">
              {topLevelSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScrollTo(section.id)}
                  className={`block text-left text-sm font-medium leading-relaxed transition-colors hover:text-blue-600 ${
                    activeId === section.id
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-12">
          <MarkdownContent
            content={buildMarkdownFromSections(sections)}
            className="markdown-content"
          />
        </div>
      </div>
    </div>
  );
}
