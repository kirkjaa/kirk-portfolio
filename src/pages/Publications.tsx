import profileContent from "@/content/profile.md?raw";
import { MarkdownContent } from "@/components/MarkdownContent";
import {
  buildMarkdownFromSections,
  getSectionsByIds,
  parseMarkdownSections,
} from "@/utils/markdown";
import { useMemo } from "react";

const publicationSectionIds = [
  "thought-leadership-publications",
  "technical-expertise-innovation-focus",
  "digital-presence-contact-information",
  "references",
];

export default function Publications() {
  const markdown = useMemo(() => {
    const sections = parseMarkdownSections(profileContent);
    const selected = getSectionsByIds(sections, publicationSectionIds);
    return buildMarkdownFromSections(selected);
  }, [profileContent]);

  return (
    <div className="container">
      <div className="max-w-3xl mb-12">
        <p className="uppercase tracking-wide text-sm font-semibold text-blue-600 mb-3">
          Thought Leadership & Media
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Publications, Expertise, and Global Reach
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          A curated library of articles, insights, and media coverage showcasing
          Kirk Pathumanun's thought leadership across education, sustainability,
          logistics, and innovation ecosystems.
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white shadow-lg p-6 md:p-10">
        <MarkdownContent content={markdown} className="space-y-6" />
      </div>
    </div>
  );
}
