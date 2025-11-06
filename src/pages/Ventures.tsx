import profileContent from "@/content/profile.md?raw";
import { MarkdownContent } from "@/components/MarkdownContent";
import {
  buildMarkdownFromSections,
  getSectionsByIds,
  parseMarkdownSections,
} from "@/utils/markdown";
import { useMemo } from "react";

const ventureSectionIds = [
  "core-ventures-leadership-roles",
  "awards-recognition-accelerator-programs",
  "mentorship-ecosystem-building",
  "current-focus-future-directions-2025",
  "impact-legacy",
];

export default function Ventures() {
  const markdown = useMemo(() => {
    const sections = parseMarkdownSections(profileContent);
    const selected = getSectionsByIds(sections, ventureSectionIds);
    return buildMarkdownFromSections(selected);
  }, [profileContent]);

  return (
    <div className="container">
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl">
        <p className="uppercase tracking-wide text-sm font-semibold text-white/80 mb-3">
          Ventures & Strategic Leadership
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Building, Scaling, and Mentoring Asia-Pacific Innovation
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl">
          Discover how Kirk Pathumanun founded and scaled ventures across
          education, sustainability, logistics, and AI—while mentoring 20+ startups
          and guiding regional innovation ecosystems.
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white shadow-lg p-6 md:p-10">
        <MarkdownContent content={markdown} className="space-y-6" />
      </div>
    </div>
  );
}
