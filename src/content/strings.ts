import { Language } from "@/contexts/LanguageContext";

export type TrackKind = "win" | "selected" | "milestone" | "mentor" | "role";

export type LanguageStrings = {
  siteTitle: string;
  wordmark: string;
  navigation: {
    home: string;
    about: string;
    ventures: string;
    writing: string;
    profile: string;
    contact: string;
  };
  header: {
    menu: string;
    themeToggle: { light: string; dark: string; aria: string };
    language: { label: string; options: Record<Language, string> };
  };
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaTertiary: string;
    portraitCaption: string;
  };
  proof: { value: string; label: string }[];
  sections: {
    about: { eyebrow: string; title: string };
    roles: { eyebrow: string; title: string; lede: string };
    korea: { eyebrow: string; title: string; body: string; cta: string; photoCaption: string; chips: string[] };
    track: { eyebrow: string; title: string; lede: string };
    writing: { eyebrow: string; title: string; lede: string };
    mentorship: { eyebrow: string; title: string; lede: string };
    gallery: { eyebrow: string; title: string; lede: string };
    contact: { eyebrow: string; title: string; lede: string };
  };
  labels: {
    present: string;
    visit: string;
    readOnE27: string;
    fullProfile: string;
    contents: string;
    jumpTo: string;
    successStory: string;
    email: string;
    linkedin: string;
    company: string;
    location: string;
    locationValue: string;
    kinds: Record<TrackKind, string>;
  };
  about: {
    atAGlance: { title: string; roles: string; korea: string; koreaValue: string; languages: string; languagesValue: string };
    timeline: { title: string };
  };
  ventures: { arcCaption: string; arcAlt: string; bangkok: string; seoul: string };
  pages: {
    about: { eyebrow: string; title: string; lede: string };
    ventures: { eyebrow: string; title: string; lede: string };
    writing: { eyebrow: string; title: string; lede: string };
    profile: { eyebrow: string; title: string; lede: string };
    notFound: { title: string; body: string; cta: string };
  };
  footer: {
    roles: string;
    copyright: string;
    links: { linkedin: string; e27: string; company: string; digitalBridge: string };
  };
};

const en: LanguageStrings = {
  siteTitle: "Kirk Pathumanun",
  wordmark: "Kirk Pathumanun",
  navigation: {
    home: "Home",
    about: "About",
    ventures: "Ventures",
    writing: "Writing",
    profile: "Full profile",
    contact: "Contact",
  },
  header: {
    menu: "Menu",
    themeToggle: { light: "Switch to light mode", dark: "Switch to dark mode", aria: "Toggle colour theme" },
    language: { label: "Language", options: { en: "EN", th: "TH", ko: "KO" } },
  },
  hero: {
    eyebrow: "Venture Builder & Technical Founder · Bangkok — Seoul",
    title: "I solve the impossible business requirement.",
    lede:
      "Twenty-five years from real-time fintech in Dallas to AI-powered EdTech in Bangkok — and today, taking Southeast Asian companies into Korea.",
    ctaPrimary: "Work with me",
    ctaSecondary: "LinkedIn",
    ctaTertiary: "Read the full profile",
    portraitCaption: "Kirk Pathumanun — CEO & Co-Founder, QUEST EDTECH · Bangkok",
  },
  proof: [
    { value: "25", label: "years building, from the US to Thailand" },
    { value: "20+", label: "businesses advised across Asia" },
    { value: "19+", label: "awards and programme selections, 2018–2025" },
    { value: "7", label: "contributor articles on e27" },
  ],
  sections: {
    about: { eyebrow: "About", title: "From Dallas fintech to Bangkok EdTech" },
    roles: { eyebrow: "Roles & ventures", title: "Where I work today", lede: "Founder seats, CSO mandates and the studio I build from." },
    korea: {
      eyebrow: "Thailand → Korea",
      title: "Landing Southeast Asian companies in Korea",
      body:
        "Since 2024 I have been taking Thai and Southeast Asian companies into Korea's startup system: duPhonics on stage at NextRise 2024 Seoul, the Korean Market Landing Program that December, CUBIKA's booth at NextRise 2025, selection as a K-Scouter in the 2025 batch with Nautilus Investment, COMEUP 2025 — and QUEST EDTECH Korea, incorporated in Seoul in May 2026 as an application-software company.",
      cta: "Entering Korea? Let's talk",
      photoCaption: "NextRise 2024 Seoul — pitching duPhonics at the Pitching Station",
      chips: ["NextRise Seoul 2024 · 2025", "Korean Market Landing Program 2024", "K-Scouter 2025 · Nautilus Investment", "COMEUP 2025", "QUEST EDTECH Korea · May 2026"],
    },
    track: { eyebrow: "Track record", title: "Wins, selections and milestones", lede: "2018 to 2026, newest first." },
    writing: { eyebrow: "Writing", title: "On e27 since 2022", lede: "Seven contributor pieces on Gen Alpha, generative AI, carbon data, logistics and emotional economics." },
    mentorship: { eyebrow: "Mentorship & consulting", title: "Founders I've worked with", lede: "e27 Top 100, BASCII at Chulalongkorn, and strategy engagements for companies entering China and the EV market." },
    gallery: { eyebrow: "Field notes", title: "On stage, at the booth, in the room", lede: "Seoul, Singapore, Bangkok — 2019 to 2025." },
    contact: { eyebrow: "Contact", title: "Building something across borders?", lede: "Venture building, AI transformation, fundraising and Korea market entry — in Thai or English, in Bangkok or online." },
  },
  labels: {
    present: "present",
    visit: "Visit",
    readOnE27: "Read on e27",
    fullProfile: "Full profile",
    contents: "Contents",
    jumpTo: "Jump to section",
    successStory: "Success story",
    email: "Email",
    linkedin: "LinkedIn",
    company: "Company",
    location: "Based in",
    locationValue: "Bangkok, Thailand",
    kinds: { win: "Winner", selected: "Selected", milestone: "Milestone", mentor: "Mentor", role: "Appointed" },
  },
  about: {
    atAGlance: {
      title: "At a glance",
      roles: "Current roles",
      korea: "Korea",
      koreaValue: "K-Scouter 2025 · QUEST EDTECH Korea, Seoul",
      languages: "Works in",
      languagesValue: "Thai, English",
    },
    timeline: { title: "The path" },
  },
  ventures: {
    arcCaption: "The corridor: Bangkok to Seoul, 2024 to 2026.",
    arcAlt: "An arc from Bangkok to Seoul marked 2024, 2025 and 2026",
    bangkok: "Bangkok",
    seoul: "Seoul",
  },
  pages: {
    about: { eyebrow: "About", title: "Technical founder, venture builder, ecosystem builder", lede: "The journey behind a 25-year career — from early fintech to education ventures in Thailand and advisory work across Asia-Pacific." },
    ventures: { eyebrow: "Ventures & leadership", title: "Building, scaling and mentoring across Asia-Pacific", lede: "Ventures in education, sustainability data, logistics and AI — and the founders mentored along the way." },
    writing: { eyebrow: "Writing & expertise", title: "Publications, expertise and reach", lede: "Articles, technical focus and where to find me." },
    profile: { eyebrow: "Full profile", title: "Twenty-five years of venture building", lede: "The long version: ventures, recognition, mentorship and strategy across three decades." },
    notFound: { title: "Page not found", body: "That address does not exist on this site.", cta: "Back to home" },
  },
  footer: {
    roles: "Venture Builder · Technical Founder · Strategic Advisor",
    copyright: "© 2026 Kirk Pathumanun",
    links: { linkedin: "LinkedIn", e27: "e27", company: "QUEST EDTECH", digitalBridge: "Digital Bridge Thailand" },
  },
};

const th: LanguageStrings = {
  siteTitle: "เกริก ปทุมานันท์",
  wordmark: "Kirk Pathumanun",
  navigation: {
    home: "หน้าแรก",
    about: "เกี่ยวกับ",
    ventures: "ธุรกิจ",
    writing: "บทความ",
    profile: "โปรไฟล์ฉบับเต็ม",
    contact: "ติดต่อ",
  },
  header: {
    menu: "เมนู",
    themeToggle: { light: "เปลี่ยนเป็นโหมดสว่าง", dark: "เปลี่ยนเป็นโหมดมืด", aria: "สลับโหมดสี" },
    language: { label: "ภาษา", options: { en: "EN", th: "TH", ko: "KO" } },
  },
  hero: {
    eyebrow: "Venture Builder & Technical Founder · กรุงเทพฯ — โซล",
    title: "ผมแก้โจทย์ธุรกิจที่ใครก็ว่าเป็นไปไม่ได้",
    lede:
      "25 ปี จาก Fintech แบบเรียลไทม์ในดัลลัส สู่ EdTech ที่ขับเคลื่อนด้วย AI ในกรุงเทพฯ และวันนี้กำลังพาบริษัทจากอาเซียนเข้าสู่ตลาดเกาหลี",
    ctaPrimary: "ร่วมงานกับผม",
    ctaSecondary: "LinkedIn",
    ctaTertiary: "อ่านโปรไฟล์ฉบับเต็ม",
    portraitCaption: "Kirk Pathumanun — CEO & Co-Founder, QUEST EDTECH · กรุงเทพฯ",
  },
  proof: [
    { value: "25", label: "ปีแห่งการสร้างธุรกิจ จากสหรัฐฯ ถึงไทย" },
    { value: "20+", label: "ธุรกิจทั่วเอเชียที่ให้คำปรึกษา" },
    { value: "19+", label: "รางวัลและโปรแกรมที่ได้รับคัดเลือก 2018–2025" },
    { value: "7", label: "บทความบน e27" },
  ],
  sections: {
    about: { eyebrow: "เกี่ยวกับ", title: "จาก Fintech ในดัลลัส สู่ EdTech ในกรุงเทพฯ" },
    roles: { eyebrow: "บทบาทและธุรกิจ", title: "งานที่ผมทำอยู่ตอนนี้", lede: "ตำแหน่งผู้ก่อตั้ง บทบาท CSO และสตูดิโอที่ผมใช้สร้างธุรกิจ" },
    korea: {
      eyebrow: "ไทย → เกาหลี",
      title: "พาบริษัทจากอาเซียนไปลงหลักปักฐานในเกาหลี",
      body:
        "ตั้งแต่ปี 2024 ผมพาบริษัทไทยและอาเซียนเข้าสู่ระบบสตาร์ทอัพของเกาหลี: นำ duPhonics ขึ้นเวที NextRise 2024 Seoul เข้าร่วม Korean Market Landing Program ในเดือนธันวาคมปีเดียวกัน ตั้งบูธ CUBIKA ที่ NextRise 2025 ได้รับคัดเลือกเป็น K-Scouter รุ่นปี 2025 ร่วมกับ Nautilus Investment ร่วมงาน COMEUP 2025 และจดทะเบียน QUEST EDTECH Korea ที่กรุงโซลในเดือนพฤษภาคม 2026 ในฐานะบริษัทซอฟต์แวร์",
      cta: "กำลังจะไปเกาหลี? คุยกับผมได้ครับ",
      photoCaption: "NextRise 2024 Seoul — นำเสนอ duPhonics บนเวที Pitching Station",
      chips: ["NextRise Seoul 2024 · 2025", "Korean Market Landing Program 2024", "K-Scouter 2025 · Nautilus Investment", "COMEUP 2025", "QUEST EDTECH Korea · พ.ค. 2026"],
    },
    track: { eyebrow: "ผลงาน", title: "รางวัล การคัดเลือก และหมุดหมายสำคัญ", lede: "ตั้งแต่ปี 2018 ถึง 2026 เรียงจากล่าสุด" },
    writing: { eyebrow: "บทความ", title: "เขียนให้ e27 ตั้งแต่ปี 2022", lede: "บทความ 7 ชิ้นว่าด้วย Gen Alpha, Generative AI, ข้อมูลคาร์บอน, โลจิสติกส์ และ Emotional Economics" },
    mentorship: { eyebrow: "Mentorship และที่ปรึกษา", title: "ผู้ก่อตั้งที่ผมร่วมงานด้วย", lede: "e27 Top 100, BASCII จุฬาฯ และงานที่ปรึกษากลยุทธ์ให้บริษัทที่บุกตลาดจีนและตลาด EV" },
    gallery: { eyebrow: "ภาพจากงานจริง", title: "บนเวที ที่บูธ และในห้องประชุม", lede: "โซล สิงคโปร์ กรุงเทพฯ — 2019 ถึง 2025" },
    contact: { eyebrow: "ติดต่อ", title: "กำลังสร้างอะไรข้ามพรมแดนอยู่หรือเปล่า?", lede: "Venture Building, AI Transformation, การระดมทุน และการเข้าตลาดเกาหลี — ภาษาไทยหรืออังกฤษ ที่กรุงเทพฯ หรือออนไลน์" },
  },
  labels: {
    present: "ปัจจุบัน",
    visit: "เยี่ยมชม",
    readOnE27: "อ่านบน e27",
    fullProfile: "โปรไฟล์ฉบับเต็ม",
    contents: "สารบัญ",
    jumpTo: "ไปที่หัวข้อ",
    successStory: "เรื่องราวความสำเร็จ",
    email: "อีเมล",
    linkedin: "LinkedIn",
    company: "บริษัท",
    location: "ประจำอยู่ที่",
    locationValue: "กรุงเทพฯ ประเทศไทย",
    kinds: { win: "ชนะเลิศ", selected: "ได้รับคัดเลือก", milestone: "หมุดหมาย", mentor: "Mentor", role: "แต่งตั้ง" },
  },
  about: {
    atAGlance: {
      title: "ข้อมูลโดยสรุป",
      roles: "บทบาทปัจจุบัน",
      korea: "เกาหลี",
      koreaValue: "K-Scouter 2025 · QUEST EDTECH Korea, โซล",
      languages: "ภาษาที่ใช้ทำงาน",
      languagesValue: "ไทย, อังกฤษ",
    },
    timeline: { title: "เส้นทาง" },
  },
  ventures: {
    arcCaption: "เส้นทางเชื่อม: กรุงเทพฯ สู่โซล ปี 2024 ถึง 2026",
    arcAlt: "เส้นโค้งจากกรุงเทพฯ ไปโซล ระบุปี 2024, 2025 และ 2026",
    bangkok: "กรุงเทพฯ",
    seoul: "โซล",
  },
  pages: {
    about: { eyebrow: "เกี่ยวกับ", title: "ผู้ก่อตั้งสายเทคนิค ผู้สร้างธุรกิจ ผู้สร้างระบบนิเวศ", lede: "เส้นทาง 25 ปี จากฟินเทคยุคแรกสู่การสร้างธุรกิจการศึกษาในไทยและงานที่ปรึกษาทั่วเอเชียแปซิฟิก" },
    ventures: { eyebrow: "ธุรกิจและภาวะผู้นำ", title: "สร้าง ขยาย และเป็น Mentor ทั่วเอเชียแปซิฟิก", lede: "ธุรกิจด้านการศึกษา ข้อมูลความยั่งยืน โลจิสติกส์ และ AI รวมถึงผู้ก่อตั้งที่ได้ร่วมเป็น Mentor" },
    writing: { eyebrow: "บทความและความเชี่ยวชาญ", title: "ผลงานเผยแพร่ ความเชี่ยวชาญ และช่องทางติดต่อ", lede: "บทความ จุดเน้นด้านเทคโนโลยี และช่องทางที่ติดต่อผมได้" },
    profile: { eyebrow: "โปรไฟล์ฉบับเต็ม", title: "25 ปีแห่งการสร้างธุรกิจ", lede: "ฉบับเต็ม: ธุรกิจ รางวัล การเป็น Mentor และกลยุทธ์ตลอดสามทศวรรษ" },
    notFound: { title: "ไม่พบหน้านี้", body: "ที่อยู่นี้ไม่มีอยู่บนเว็บไซต์", cta: "กลับหน้าแรก" },
  },
  footer: {
    roles: "Venture Builder · Technical Founder · ที่ปรึกษากลยุทธ์",
    copyright: "© 2026 Kirk Pathumanun",
    links: { linkedin: "LinkedIn", e27: "e27", company: "QUEST EDTECH", digitalBridge: "Digital Bridge Thailand" },
  },
};

const ko: LanguageStrings = {
  siteTitle: "커크 파투마난",
  wordmark: "Kirk Pathumanun",
  navigation: {
    home: "홈",
    about: "소개",
    ventures: "벤처",
    writing: "기고",
    profile: "전체 프로필",
    contact: "문의",
  },
  header: {
    menu: "메뉴",
    themeToggle: { light: "라이트 모드로 전환", dark: "다크 모드로 전환", aria: "테마 전환" },
    language: { label: "언어", options: { en: "EN", th: "TH", ko: "KO" } },
  },
  hero: {
    eyebrow: "벤처 빌더 & 테크니컬 파운더 · 방콕 — 서울",
    title: "불가능해 보이는 비즈니스 과제를 해결합니다.",
    lede:
      "댈러스의 실시간 핀테크에서 방콕의 AI 기반 EdTech까지 25년. 지금은 동남아시아 기업의 한국 진출을 이끌고 있습니다.",
    ctaPrimary: "함께 일하기",
    ctaSecondary: "LinkedIn",
    ctaTertiary: "전체 프로필 보기",
    portraitCaption: "Kirk Pathumanun — QUEST EDTECH CEO & 공동창업자 · 방콕",
  },
  proof: [
    { value: "25", label: "년의 경력, 미국에서 태국까지" },
    { value: "20+", label: "아시아 전역 자문 기업" },
    { value: "19+", label: "수상 및 프로그램 선정, 2018–2025" },
    { value: "7", label: "e27 기고문" },
  ],
  sections: {
    about: { eyebrow: "소개", title: "댈러스 핀테크에서 방콕 EdTech까지" },
    roles: { eyebrow: "역할 & 벤처", title: "현재 활동", lede: "창업자 자리, CSO 역할, 그리고 벤처를 만드는 스튜디오." },
    korea: {
      eyebrow: "태국 → 한국",
      title: "동남아시아 기업의 한국 안착을 돕습니다",
      body:
        "2024년부터 태국과 동남아시아 기업의 한국 스타트업 생태계 진출을 이끌어 왔습니다. NextRise 2024 Seoul 무대에서 duPhonics를 피칭했고, 같은 해 12월 Korean Market Landing Program에 참가했으며, NextRise 2025에서는 CUBIKA 부스를 운영했습니다. 2025년에는 Nautilus Investment와 함께하는 K-Scouter 프로그램에 선정되어 COMEUP 2025에 참여했고, 2026년 5월 서울에 응용 소프트웨어 기업 QUEST EDTECH Korea를 설립했습니다.",
      cta: "한국 진출을 준비 중이신가요? 이야기 나눠요",
      photoCaption: "NextRise 2024 Seoul — Pitching Station에서 duPhonics 피칭",
      chips: ["NextRise Seoul 2024 · 2025", "Korean Market Landing Program 2024", "K-Scouter 2025 · Nautilus Investment", "COMEUP 2025", "QUEST EDTECH Korea · 2026년 5월"],
    },
    track: { eyebrow: "트랙 레코드", title: "수상, 선정, 주요 성과", lede: "2018년부터 2026년까지, 최신순." },
    writing: { eyebrow: "기고", title: "2022년부터 e27 기고", lede: "Gen Alpha, 생성형 AI, 탄소 데이터, 물류, 감성 경제를 다룬 7편의 기고문." },
    mentorship: { eyebrow: "멘토링 & 컨설팅", title: "함께한 창업자들", lede: "e27 Top 100, 출라롱콘 BASCII, 그리고 중국·EV 시장 진출 전략 자문." },
    gallery: { eyebrow: "현장 기록", title: "무대에서, 부스에서, 회의실에서", lede: "서울, 싱가포르, 방콕 — 2019년부터 2025년까지." },
    contact: { eyebrow: "문의", title: "국경을 넘는 무언가를 만들고 계신가요?", lede: "벤처 빌딩, AI 전환, 자금 조달, 한국 시장 진출 — 태국어 또는 영어로, 방콕 또는 온라인에서." },
  },
  labels: {
    present: "현재",
    visit: "방문",
    readOnE27: "e27에서 읽기",
    fullProfile: "전체 프로필",
    contents: "목차",
    jumpTo: "섹션 이동",
    successStory: "성공 사례",
    email: "이메일",
    linkedin: "LinkedIn",
    company: "회사",
    location: "거점",
    locationValue: "태국 방콕",
    kinds: { win: "수상", selected: "선정", milestone: "마일스톤", mentor: "멘토", role: "임명" },
  },
  about: {
    atAGlance: {
      title: "한눈에 보기",
      roles: "현재 역할",
      korea: "한국",
      koreaValue: "K-Scouter 2025 · QUEST EDTECH Korea, 서울",
      languages: "사용 언어",
      languagesValue: "태국어, 영어",
    },
    timeline: { title: "발자취" },
  },
  ventures: {
    arcCaption: "회랑: 방콕에서 서울로, 2024년부터 2026년까지.",
    arcAlt: "방콕에서 서울까지 2024, 2025, 2026이 표시된 곡선",
    bangkok: "방콕",
    seoul: "서울",
  },
  pages: {
    about: { eyebrow: "소개", title: "테크니컬 파운더, 벤처 빌더, 생태계 빌더", lede: "초기 핀테크에서 태국 교육 벤처와 아시아·태평양 자문까지, 25년 경력의 여정." },
    ventures: { eyebrow: "벤처 & 리더십", title: "아시아·태평양에서 구축하고 성장시키며 멘토링하다", lede: "교육, 지속가능성 데이터, 물류, AI 분야의 벤처와 함께한 창업자들." },
    writing: { eyebrow: "기고 & 전문성", title: "기고문, 전문성, 글로벌 영향력", lede: "기고문, 기술적 초점, 그리고 연락처." },
    profile: { eyebrow: "전체 프로필", title: "25년의 벤처 빌딩", lede: "긴 버전: 30년에 걸친 벤처, 수상, 멘토링, 전략." },
    notFound: { title: "페이지를 찾을 수 없습니다", body: "이 주소는 사이트에 존재하지 않습니다.", cta: "홈으로" },
  },
  footer: {
    roles: "벤처 빌더 · 테크니컬 파운더 · 전략 자문",
    copyright: "© 2026 Kirk Pathumanun",
    links: { linkedin: "LinkedIn", e27: "e27", company: "QUEST EDTECH", digitalBridge: "Digital Bridge Thailand" },
  },
};

const strings: Record<Language, LanguageStrings> = { en, th, ko };

export function getStrings(language: Language): LanguageStrings {
  return strings[language] ?? strings.en;
}
