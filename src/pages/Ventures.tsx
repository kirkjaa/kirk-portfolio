import { MarkdownContent } from "@/components/MarkdownContent";
import {
  buildMarkdownFromSections,
  getSectionsByIds,
  parseMarkdownSections,
} from "@/utils/markdown";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProfileMarkdown } from "@/content/profileContent";

const ventureSectionIds = [
  "core-ventures-leadership-roles",
  "awards-recognition-accelerator-programs",
  "mentorship-ecosystem-building",
  "current-focus-future-directions-2025",
  "impact-legacy",
];

export default function Ventures() {
  const { language } = useLanguage();
  const profileContent = useMemo(() => getProfileMarkdown(language), [language]);
  const markdown = useMemo(() => {
    const sections = parseMarkdownSections(profileContent);
    const selected = getSectionsByIds(sections, ventureSectionIds);
    return buildMarkdownFromSections(selected);
  }, [profileContent]);

  return (
    <div className="container">
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl">
        <p className="uppercase tracking-wide text-sm font-semibold text-white/80 mb-3">
          {language === "en"
            ? "Ventures & Strategic Leadership"
            : language === "th"
            ? "บริษัทร่วมก่อตั้งและภาวะผู้นำเชิงกลยุทธ์"
            : "벤처 & 전략적 리더십"}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {language === "en"
            ? "Building, Scaling, and Mentoring Asia-Pacific Innovation"
            : language === "th"
            ? "สร้าง ขยาย และโค้ชนวัตกรรมทั่วภูมิภาคเอเชียแปซิฟิก"
            : "아시아·태평양 혁신을 구축하고 성장시키며 멘토링하다"}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl">
          {language === "en"
            ? "Discover how Kirk Pathumanun founded and scaled ventures across education, sustainability, logistics, and AI—while mentoring 20+ startups and guiding regional innovation ecosystems."
            : language === "th"
            ? "สำรวจวิธีที่เคิร์ก ปถุมานันท์ ก่อตั้งและขยายธุรกิจในด้านการศึกษา ความยั่งยืน โลจิสติกส์ และ AI พร้อมให้คำปรึกษาสตาร์ทอัพกว่า 20 ราย และขับเคลื่อนระบบนิเวศนวัตกรรมในภูมิภาค"
            : "교육, 지속가능성, 물류, AI 분야에서 벤처를 설립하고 확장하며 20개 이상의 스타트업을 멘토링하고 지역 혁신 생태계를 이끄는 여정을 살펴보세요."}
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white shadow-lg p-6 md:p-10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
        <MarkdownContent content={markdown} className="space-y-6" />
      </div>
    </div>
  );
}
