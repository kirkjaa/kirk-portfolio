import { MarkdownContent } from "@/components/MarkdownContent";
import {
  buildMarkdownFromSections,
  getSectionsByIds,
  parseMarkdownSections,
} from "@/utils/markdown";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProfileMarkdown } from "@/content/profileContent";

const publicationSectionIds = [
  "thought-leadership-publications",
  "technical-expertise-innovation-focus",
  "digital-presence-contact-information",
  "references",
];

export default function Publications() {
  const { language } = useLanguage();
  const profileContent = useMemo(() => getProfileMarkdown(language), [language]);
  const markdown = useMemo(() => {
    const sections = parseMarkdownSections(profileContent);
    const selected = getSectionsByIds(sections, publicationSectionIds);
    return buildMarkdownFromSections(selected);
  }, [profileContent]);

  return (
    <div className="container">
      <div className="max-w-3xl mb-12">
        <p className="uppercase tracking-wide text-sm font-semibold text-blue-600 mb-3">
          {language === "en"
            ? "Thought Leadership & Media"
            : language === "th"
            ? "บทความและสื่อเผยแพร่"
            : "사고 리더십 & 미디어"}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
          {language === "en"
            ? "Publications, Expertise, and Global Reach"
            : language === "th"
            ? "ผลงานเผยแพร่ ความเชี่ยวชาญ และเครือข่ายระดับโลก"
            : "기고문, 전문성, 글로벌 영향력"}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-slate-300">
          {language === "en"
            ? "A curated library of articles, insights, and media coverage showcasing Kirk Pathumanun's thought leadership across education, sustainability, logistics, and innovation ecosystems."
            : language === "th"
            ? "รวมบทความ อินไซท์ และสื่อที่สะท้อนบทบาทผู้นำทางความคิดของเคิร์ก ปถุมานันท์ ในด้านการศึกษา ความยั่งยืน โลจิสติกส์ และระบบนิเวศนวัตกรรม"
            : "교육, 지속가능성, 물류, 혁신 생태계 전반에서 커크 파투마난의 사고 리더십을 보여 주는 기사와 인사이트, 미디어를 모았습니다."}
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white shadow-lg p-6 md:p-10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
        <MarkdownContent content={markdown} className="space-y-6" />
      </div>
    </div>
  );
}
