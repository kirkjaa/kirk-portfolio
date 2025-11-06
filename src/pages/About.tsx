import profileContent from "@/content/profile.md?raw";
import { MarkdownContent } from "@/components/MarkdownContent";
import {
  buildMarkdownFromSections,
  getSectionsByIds,
  parseMarkdownSections,
} from "@/utils/markdown";
import { useMemo } from "react";

const aboutSectionIds = [
  "executive-summary",
  "professional-background-education",
  "early-career-pioneering-work-in-fintech",
  "business-philosophy-venture-building-approach",
  "unique-value-proposition-market-positioning",
];

export default function About() {
  const markdown = useMemo(() => {
    const sections = parseMarkdownSections(profileContent);
    const selected = getSectionsByIds(sections, aboutSectionIds);
    return buildMarkdownFromSections(selected);
  }, [profileContent]);

  return (
    <div className="container">
      <div className="max-w-3xl mb-12">
        <p className="uppercase tracking-wide text-sm font-semibold text-blue-600 mb-3">
          About Kirk Pathumanun
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Technical Founder, Venture Builder, Ecosystem Leader
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Explore the journey that shaped Kirk Pathumanun's 25-year career—from
          early fintech innovation to building transformative education ventures
          and advising companies across Asia-Pacific.
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white shadow-lg p-6 md:p-10">
        <MarkdownContent content={markdown} className="space-y-6" />
      </div>
    </div>
  );
}
