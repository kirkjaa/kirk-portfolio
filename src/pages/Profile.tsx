import { useEffect, useMemo, useState } from "react";
import { MarkdownContent } from "@/components/MarkdownContent";
import {
  buildMarkdownFromSections,
  getSectionsByLevel,
  parseMarkdownSections,
} from "@/utils/markdown";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProfileMarkdown } from "@/content/profileContent";

export default function Profile() {
  const { language } = useLanguage();
  const profileContent = useMemo(() => getProfileMarkdown(language), [language]);
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
    if (topLevelSections.length > 0) {
      setActiveId(topLevelSections[0].id);
    }
  }, [language, topLevelSections]);

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
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 dark:from-slate-900 dark:via-slate-900 to-slate-950 rounded-3xl p-8 md:p-12 mb-12 shadow-lg">
        <p className="uppercase tracking-wide text-sm font-semibold text-blue-600 mb-3">
          {language === "en"
            ? "Comprehensive Portfolio"
            : language === "th"
            ? "ประวัติฉบับสมบูรณ์"
            : "종합 포트폴리오"}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
          {language === "en"
            ? "Kirk Pathumanun: 25-Year Venture Building Journey"
            : language === "th"
            ? "เคิร์ก ปถุมานันท์: 25 ปีแห่งการสร้างธุรกิจ"
            : "커크 파투마난: 25년 벤처 빌딩 여정"}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-slate-300 max-w-3xl">
          {language === "en"
            ? "A deep dive into the ventures, accomplishments, and strategic impact of Kirk Pathumanun, covering fintech innovation, educational leadership, mentorship, and global expansion strategies across three decades."
            : language === "th"
            ? "เจาะลึกการสร้างธุรกิจ ความสำเร็จ และผลลัพธ์เชิงกลยุทธ์ของเคิร์ก ปถุมานันท์ ตั้งแต่ฟินเทค การศึกษา การเป็นที่ปรึกษา ไปจนถึงการขยายธุรกิจสู่ระดับสากลในตลอดสามทศวรรษ"
            : "핀테크 혁신, 교육 리더십, 멘토십, 글로벌 확장 전략에 이르는 커크 파투마난의 30년에 걸친 임팩트를 깊이 있게 살펴봅니다."}
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[260px,1fr]">
        <div className="lg:hidden border border-gray-200 rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm dark:border-slate-700">
          <label className="block text-sm font-semibold text-gray-700 dark:text-slate-200 mb-2" htmlFor="profile-section-select">
            {language === "en"
              ? "Jump to section"
              : language === "th"
              ? "เลือกหัวข้อ"
              : "섹션 바로가기"}
          </label>
          <select
            id="profile-section-select"
            className="w-full rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-gray-700 dark:text-slate-200 focus:border-blue-500 focus:outline-none"
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
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-4">
              {language === "en"
                ? "Table of Contents"
                : language === "th"
                ? "สารบัญ"
                : "목차"}
            </h2>
            <nav className="space-y-2">
              {topLevelSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScrollTo(section.id)}
                  className={`block text-left text-sm font-medium leading-relaxed transition-colors hover:text-blue-600 ${
                    activeId === section.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-slate-300"
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
