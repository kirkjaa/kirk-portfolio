import { MarkdownContent } from "@/components/MarkdownContent";
import {
  buildMarkdownFromSections,
  getSectionsByIds,
  parseMarkdownSections,
} from "@/utils/markdown";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProfileMarkdown } from "@/content/profileContent";
import { getStrings } from "@/content/strings";

const aboutSectionIds = [
  "executive-summary",
  "professional-background-education",
  "early-career-pioneering-work-in-fintech",
  "business-philosophy-venture-building-approach",
  "unique-value-proposition-market-positioning",
];

export default function About() {
  const { language } = useLanguage();
  const strings = getStrings(language);
  const profileContent = useMemo(() => getProfileMarkdown(language), [language]);
  const markdown = useMemo(() => {
    const sections = parseMarkdownSections(profileContent);
    const selected = getSectionsByIds(sections, aboutSectionIds);
    return buildMarkdownFromSections(selected);
  }, [profileContent]);

  return (
    <div className="container">
      <div className="max-w-3xl mb-12">
        <p className="uppercase tracking-wide text-sm font-semibold text-blue-600 mb-3">
          {strings.navigation.about} {strings.siteTitle}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
          {language === "en"
            ? "Technical Founder, Venture Builder, Ecosystem Leader"
            : language === "th"
            ? "ผู้ก่อตั้งสายเทคนิค ผู้สร้างธุรกิจ ผู้นำระบบนิเวศ"
            : "테크니컬 파운더, 벤처 빌더, 생태계 리더"}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-slate-300">
          {language === "en"
            ? "Explore the journey that shaped Kirk Pathumanun's 25-year career—from early fintech innovation to building transformative education ventures and advising companies across Asia-Pacific."
            : language === "th"
            ? "สำรวจเส้นทางที่สร้างประสบการณ์ 25 ปีของเคิร์ก ปถุมานันท์ จากการบุกเบิกฟินเทคสู่การสร้างธุรกิจการศึกษาและการให้คำปรึกษาแก่บริษัททั่วเอเชียแปซิฟิก"
            : "핀테크 개척부터 교육 혁신과 아시아·태평양 기업 자문에 이르기까지 커크 파투마난의 25년 여정을 만나보세요."}
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white shadow-lg p-6 md:p-10 dark:border-slate-700 dark:bg-slate-900">
        <MarkdownContent content={markdown} className="space-y-6" />
      </div>
    </div>
  );
}
