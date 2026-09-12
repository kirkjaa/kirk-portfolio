import { Language } from "@/contexts/LanguageContext";

export interface TimelineEntry {
  year: string;
  title: string;
  detail: string;
}

/* Years and proper nouns are shared; only the descriptive line is translated. */
const years = ["1999", "1999", "2006", "2007", "2012", "2013", "2018", "2020", "2024", "2025", "2026"];

const titles = [
  "StockSmart.com",
  "Dallas, Texas",
  "CommunityMobile × Land Development Department",
  "Morning Star Research",
  "Thailand",
  "QuestLanguage",
  "QUEST EDTECH",
  "duPhonics",
  "NextRise Seoul",
  "CSO ×2 · K-Scouter",
  "QUEST EDTECH Korea",
];

const details: Record<Language, string[]> = {
  en: [
    "Founding team of one of the world's first fintech startups",
    "Eight years building mobile applications and games",
    "A 12-terabyte aerial-photography GIS, made searchable online",
    "Quantitative analyst, Australian Stock Exchange",
    "Moved from finance into education",
    "Co-founder — IELTS, SAT and TOEFL, 100% into the top three programmes",
    "CEO and co-founder; Project Alpha finalist, the only Thai startup",
    "Founder; seed round led by Reapra with angel investors",
    "duPhonics on stage, and the Korean Market Landing Program that December",
    "CUBIKA and SSL Logistics; selected for the K-Scouter Program",
    "Incorporated in Seoul as an application-software company",
  ],
  th: [
    "ทีมผู้ก่อตั้งสตาร์ทอัพ Fintech รุ่นแรกของโลก",
    "แปดปีกับการสร้าง Mobile Application และเกม",
    "ฐานข้อมูลภาพถ่ายทางอากาศ 12 เทราไบต์ ค้นหาออนไลน์ได้",
    "นักวิเคราะห์เชิงปริมาณ ตลาดหลักทรัพย์ออสเตรเลีย",
    "ย้ายจากสายการเงินสู่การศึกษา",
    "ผู้ร่วมก่อตั้ง — IELTS, SAT และ TOEFL เข้าหลักสูตรชั้นนำ 100%",
    "CEO และผู้ร่วมก่อตั้ง; Top Finalist ของ Project Alpha สตาร์ทอัพไทยรายเดียว",
    "ผู้ก่อตั้ง; รอบ Seed นำโดย Reapra พร้อมนักลงทุน Angel",
    "duPhonics ขึ้นเวที และ Korean Market Landing Program ในเดือนธันวาคม",
    "CUBIKA และ SSL Logistics; ได้รับคัดเลือกเข้าโปรแกรม K-Scouter",
    "จดทะเบียนที่กรุงโซลในฐานะบริษัทซอฟต์แวร์",
  ],
  ko: [
    "세계 최초 핀테크 스타트업 중 하나의 창립 팀",
    "8년간 모바일 애플리케이션과 게임 개발",
    "온라인 검색이 가능한 12테라바이트 항공사진 GIS",
    "호주 증권거래소 담당 정량 애널리스트",
    "금융에서 교육으로",
    "공동창업자 — IELTS·SAT·TOEFL, 최상위 3개 프로그램 진학 100%",
    "CEO 겸 공동창업자; Project Alpha 최종 후보, 유일한 태국 스타트업",
    "창업자; Reapra가 리드한 시드 라운드",
    "duPhonics 무대 발표, 그리고 12월 Korean Market Landing Program",
    "CUBIKA와 SSL Logistics; K-Scouter 프로그램 선정",
    "서울에 응용 소프트웨어 기업으로 설립",
  ],
};

export function getTimeline(language: Language): TimelineEntry[] {
  const d = details[language] ?? details.en;
  return years.map((year, i) => ({ year, title: titles[i], detail: d[i] }));
}
