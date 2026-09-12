import { Language } from "@/contexts/LanguageContext";
import { TrackKind } from "@/content/strings";

export interface RoleItem {
  org: string;
  role: string;
  from: string;
  blurb: string;
  logo: string;
  link?: string;
}

export interface TrackItem {
  year: string;
  title: string;
  detail: string;
  kind: TrackKind;
}

export interface GalleryItem {
  src: string;
  caption: string;
  meta: string;
}

export interface ArticleItem {
  title: string;
  date: string;
  theme: string;
  link: string;
  /** A line from the piece, verbatim — only where the knowledge base records one. */
  quote?: string;
}

export interface MentorshipItem {
  name: string;
  logo: string;
  photo?: string;
  program: string;
  blurb: string;
  link?: string;
}

export interface SuccessStory {
  name: string;
  photo: string;
  achievement: string;
  blurb: string;
  program: string;
}

export interface HomeContent {
  about: string[];
  roles: RoleItem[];
  track: TrackItem[];
  gallery: GalleryItem[];
  articles: ArticleItem[];
  mentorship: MentorshipItem[];
  success: SuccessStory[];
}

/* Roles — English titles and dates are shared; the one-line blurb is translated. */
const roleBase = [
  { org: "QUEST EDTECH", role: "CEO & Co-Founder", from: "2018", logo: "/images/logos/quest-edtech.png", link: "https://questedtech.com" },
  { org: "CUBIKA / Digital Dialogue", role: "Chief Strategy Officer", from: "2025", logo: "/images/logos/cubika-digital-dialogue.png", link: "https://ddlghq.com" },
  { org: "SSL Logistics", role: "Chief Strategy Officer", from: "2025", logo: "/images/logos/ssl-logistics.png", link: "https://www.ssllogistics.co.th" },
  { org: "Whatnot Startup Studio", role: "Entrepreneur in Residence", from: "2025", logo: "/images/logos/whatnot-startup-studio.png", link: "https://whatnot.co" },
  { org: "duPhonics", role: "Founder", from: "2020", logo: "/images/logos/duphonics.png", link: "https://duphonics.com" },
  { org: "QuestLanguage", role: "Co-Founder", from: "2013", logo: "/images/logos/questlanguage.png", link: "https://questlanguage.com" },
  { org: "Digital Bridge Thailand", role: "Advisor", from: "2024", logo: "/images/logos/digital-bridge-thailand.webp", link: "https://www.digitalbridgethailand.com" },
] as const;

const roleBlurbs: Record<Language, string[]> = {
  en: [
    "Real-time coding and literacy platforms, now an AI consulting practice; Korean entity incorporated in Seoul in May 2026.",
    "Agentic-AI data management and CUBIKA Earth carbon accounting; I lead the expansion into Korea.",
    "AI transformation and expansion into Korea and Japan for a Thai digital freight platform.",
    "Venture building and AI transformation for businesses, from a Bangkok startup studio.",
    "Telenanny platform for life literacy — real-time metaverse and generative AI built for Gen Alpha.",
    "IELTS, SAT and TOEFL preparation with a 100% success rate into Thailand's top international programmes.",
    "Non-profit bridging the digital divide for underprivileged children in Thailand — Digital Access, Digital Skills & AI and Career Café, with IBM, AWS, SCG and Bangkok Bank.",
  ],
  th: [
    "แพลตฟอร์ม Coding และ Literacy แบบเรียลไทม์ ปัจจุบันขยายสู่งานที่ปรึกษา AI และจดทะเบียนบริษัทในโซลเมื่อพฤษภาคม 2026",
    "แพลตฟอร์มจัดการข้อมูลด้วย Agentic AI และ CUBIKA Earth สำหรับบัญชีคาร์บอน ผมดูแลการขยายสู่เกาหลี",
    "AI Transformation และการขยายสู่เกาหลีและญี่ปุ่นให้แพลตฟอร์มโลจิสติกส์ดิจิทัลของไทย",
    "Venture Building และ AI Transformation ให้ธุรกิจ จากสตาร์ทอัพสตูดิโอในกรุงเทพฯ",
    "แพลตฟอร์ม Telenanny เพื่อทักษะชีวิต ใช้ Metaverse แบบเรียลไทม์และ Generative AI สำหรับ Gen Alpha",
    "หลักสูตร IELTS, SAT และ TOEFL ที่ส่งนักเรียนเข้าหลักสูตรนานาชาติชั้นนำของไทยได้ 100%",
    "องค์กรไม่แสวงกำไรที่ลดช่องว่างดิจิทัลให้เด็กด้อยโอกาสในประเทศไทย ผ่านโครงการ Digital Access, Digital Skills & AI และ Career Café ร่วมกับ IBM, AWS, SCG และธนาคารกรุงเทพ",
  ],
  ko: [
    "실시간 코딩·문해력 플랫폼에서 AI 컨설팅으로 확장, 2026년 5월 서울 법인 설립.",
    "에이전틱 AI 데이터 관리와 CUBIKA Earth 탄소 회계, 한국 진출을 총괄.",
    "태국 디지털 화물 플랫폼의 AI 전환과 한국·일본 진출.",
    "방콕 스타트업 스튜디오에서 벤처 빌딩과 기업 AI 전환을 담당.",
    "생활 문해력을 위한 텔레내니 플랫폼 — Gen Alpha를 위한 실시간 메타버스와 생성형 AI.",
    "IELTS·SAT·TOEFL 준비 과정, 태국 최상위 국제 프로그램 진학 성공률 100%.",
    "태국 소외 계층 아동의 디지털 격차 해소를 위한 비영리 단체 — Digital Access, Digital Skills & AI, Career Café 프로그램을 IBM·AWS·SCG·방콕은행과 함께 운영.",
  ],
};

function rolesFor(language: Language): RoleItem[] {
  const blurbs = roleBlurbs[language] ?? roleBlurbs.en;
  return roleBase.map((r, i) => ({ ...r, blurb: blurbs[i] }));
}

/* Track record — proper nouns, kept in English in every language. Newest first. */
const track: TrackItem[] = [
  { year: "2026", kind: "milestone", title: "QUEST EDTECH Korea incorporated in Seoul", detail: "Application-software company (정보통신업), May 2026 — the landing after K-Scouter 2025" },
  { year: "2025", kind: "selected", title: "K-Scouter, K-Scouter Program 2025", detail: "Selected August 2025 with Nautilus Investment; Nautilus booth at COMEUP 2025, Seoul" },
  { year: "2025", kind: "win", title: "NextRise 2025 Seoul — Inc & IR Award", detail: "Strategist for CUBIKA's Korea expansion; pre-seed / Big Data booth E-036" },
  { year: "2025", kind: "win", title: "Angel Fund Connect 2025 — Winner, 500,000 THB", detail: "CUBIKA / Digital Dialogue, awarded by DIPROM and Delta Electronics" },
  { year: "2025", kind: "mentor", title: "e27 Top 100 Programme — Mentor", detail: "Three Thai winners: ASAPH (Top 10), Tasted Better and SSL Logistics" },
  { year: "2025", kind: "role", title: "Chief Strategy Officer, CUBIKA / Digital Dialogue and SSL Logistics", detail: "Overseas expansion and AI transformation mandates" },
  { year: "2024", kind: "selected", title: "NextRise 2024 Seoul — on-stage pitch", detail: "duPhonics at the Pitching Station, sponsored by DPIT, Ministry of Commerce of Thailand" },
  { year: "2024", kind: "selected", title: "Korean Market Landing Program 2024, Seoul", detail: "Thai startup delegation, 16–20 December" },
  { year: "2024", kind: "selected", title: "TECHBITE 5.0 Incubator", detail: "duPhonics, Investment & Demo Day" },
  { year: "2022", kind: "selected", title: "APTG 5G Accelerator", detail: "duPhonics" },
  { year: "2020", kind: "win", title: "e27 TOP100 APAC", detail: "QUEST among the top 100 startups in Asia-Pacific" },
  { year: "2020", kind: "milestone", title: "Seed round led by Reapra", detail: "Six-digit USD round with angel investors for QUEST EDTECH, announced February 2020" },
  { year: "2020", kind: "selected", title: "Y Combinator Startup School — graduate", detail: "REACH LearnSpace" },
  { year: "2019", kind: "win", title: "TMA Shark Tank — Winner", detail: "Thailand Competitiveness Conference 2019, \"Rethinking the Future\"" },
  { year: "2019", kind: "milestone", title: "US$80,000 in grants from Depa and TED Fund", detail: "Blockchain-backed workforce-management application" },
  { year: "2019", kind: "selected", title: "AWS EdStart — member", detail: "Amazon Web Services EdTech accelerator" },
  { year: "2019", kind: "selected", title: "DigitalOcean Hatch — member", detail: "Startup programme for QUEST EDTECH" },
  { year: "2019", kind: "selected", title: "Y Combinator Startup School — graduate", detail: "First completion, September 2019" },
  { year: "2019", kind: "selected", title: "TED Fund programme — member", detail: "Technology and innovation-based enterprise support" },
  { year: "2019", kind: "selected", title: "Startup Thailand 2019 — showcase", detail: "QUEST booth: \"Learn Coding, Prepare for Digital Literacy\"" },
  { year: "2018", kind: "win", title: "Asia Accelerator — 1-Minute Pitch Winner", detail: "" },
  { year: "2018", kind: "selected", title: "Project Alpha by SeedPlus — top finalist", detail: "The only Thai startup among the finalists" },
  { year: "2018", kind: "selected", title: "Depa S2 Programme — member", detail: "Digital Economy Promotion Agency" },
  { year: "2018", kind: "selected", title: "Startup Thailand 2018 — showcase", detail: "National startup showcase" },
  { year: "2018", kind: "selected", title: "Edtech Hackathon 2018 — finalist", detail: "Bangkok — where QUEST began" },
];

/* Photographs — 1600px JPEGs in public/images/events. */
const gallery: GalleryItem[] = [
  { src: "/images/events/2024-nextrise-seoul-duphonics-on-stage.jpg", caption: "Pitching duPhonics at the Pitching Station", meta: "NextRise 2024 · Seoul" },
  { src: "/images/events/2025-nextrise-seoul-cubika-booth.jpg", caption: "CUBIKA booth E-036 with the Digital Dialogue delegation", meta: "NextRise 2025 · Seoul" },
  { src: "/images/events/2024-korean-market-landing-program-seoul.jpg", caption: "Korean Market Landing Program, Thai delegation", meta: "Dec 2024 · Seoul" },
  { src: "/images/events/2025-echelon-singapore-asaph-top100-booth.jpg", caption: "With the ASAPH founder — e27 Top 100, Top 10", meta: "Echelon 2025 · Singapore" },
  { src: "/images/events/2025-echelon-singapore-top100-award-stage.jpg", caption: "e27 Top 100 award stage", meta: "Echelon 2025 · Singapore" },
  { src: "/images/events/2025-echelon-singapore-tasted-better-top100-booth.jpg", caption: "Tasted Better, e27 Top 100 booth", meta: "Echelon 2025 · Singapore" },
  { src: "/images/events/2025-echelon-singapore-top100-zone.jpg", caption: "In the Top 100 Zone with a programme startup", meta: "Echelon 2025 · Singapore" },
  { src: "/images/events/2025-ntu-programme-speaking.jpg", caption: "Speaking to the NTU / NUS entrepreneurship programme", meta: "2025 · Bangkok" },
  { src: "/images/events/2025-ntu-workshop-session.jpg", caption: "Workshop session, NTU entrepreneurship academy", meta: "2025 · Bangkok" },
  { src: "/images/events/2025-ntu-entrepreneurship-academy-group.jpg", caption: "NTU entrepreneurship academy cohort", meta: "2025 · Bangkok" },
  { src: "/images/events/2025-bascii-culture-recreation-hackathon.jpg", caption: "Mentor, Culture Re-creation Hackathon at BASCII", meta: "2025 · Chulalongkorn" },
  { src: "/images/events/2024-techbite-5-duphonics-showcase.jpg", caption: "duPhonics metaverse demo, Investment & Demo Day", meta: "TECHBITE 5.0 · 2024" },
  { src: "/images/events/2019-tma-shark-tank-winner.jpg", caption: "Shark Tank winner, Thailand Competitiveness Conference", meta: "TMA · 2019" },
  { src: "/images/events/2019-startup-thailand-quest-booth.jpg", caption: "QUEST booth", meta: "Startup Thailand · 2019" },
  { src: "/images/events/corporate-consulting-workshop.jpg", caption: "Design-thinking workshop with a corporate team", meta: "Corporate consulting" },
];

/* All seven e27 contributor pieces, newest first. */
const articles: ArticleItem[] = [
  { date: "3 Jun 2025", title: "How emotional economics is reshaping alternative investments in Southeast Asia", theme: "Collectibles and investor psychology", quote: "Emotional value and financial value are increasingly intertwined.", link: "https://e27.co/how-emotional-economics-is-reshaping-alternative-investments-in-southeast-asia-20250603/" },
  { date: "6 Apr 2025", title: "Navigating trade turbulence: Digital transformation enhances global logistics amid rising tariffs", theme: "Logistics resilience", quote: "Technology and startup ideas will flourish from this turbulent time in the logistics sector.", link: "https://e27.co/navigating-trade-turbulence-digital-transformation-enhances-global-logistics-amid-rising-tariffs-20250406/" },
  { date: "25 Nov 2024", title: "Bridging the carbon data gap: How predictive insights for data sustainability are revolutionising emission accounting", theme: "Carbon accounting and AI data", link: "https://e27.co/bridging-the-carbon-data-gap-how-predictive-insights-for-data-sustainability-are-revolutionising-emission-accounting-20241125/" },
  { date: "26 Oct 2024", title: "Innovate to Dominate: Open innovation paths for startups to grow with industry titans", theme: "Startup–corporate partnerships", link: "https://e27.co/innovate-to-dominate-open-innovation-paths-for-startups-to-grow-with-industry-titans-20241026/" },
  { date: "14 Jul 2024", title: "The future of Gen Alpha in the workplace: A primer for business leaders", theme: "Gen Alpha and XR", quote: "Gen Alpha will be working in Roblox.", link: "https://e27.co/the-future-of-gen-alpha-in-the-workplace-a-primer-for-business-leaders-20240714/" },
  { date: "27 Jun 2024", title: "Learning Reimagined: Enhancing literacy with real-time metaverse and Gen AI", theme: "duPhonics", link: "https://e27.co/learning-reimagined-enhancing-literacy-with-real-time-metaverse-and-gen-ai-20240627/" },
  { date: "6 Jun 2022", title: "The metaverse opens new opportunities for education", theme: "Metaverse education", quote: "Education in the metaverse will be more democratised, the academic curriculum will be more equitable and open.", link: "https://e27.co/the-metaverse-opens-new-opportunities-for-education-20220606/" },
];

const mentorshipBase = [
  { name: "ASAPH", logo: "/images/logos/asaph.png", photo: "/images/events/2025-echelon-singapore-asaph-top100-booth.jpg", program: "e27 Top 100 · 2025 (Top 10)" },
  { name: "Tasted Better", logo: "/images/logos/tasted-better.png", photo: "/images/events/2025-echelon-singapore-tasted-better-top100-booth.jpg", program: "e27 Top 100 · 2025" },
  { name: "SoPet", logo: "/images/logos/sopet.webp", photo: "/images/events/2025-bascii-mentorship-student-founders.jpg", program: "BASCII Mentorship", link: "https://sopet.co/en" },
  { name: "Wooffy", logo: "/images/mentees/wooffy-solution-slide.jpg", photo: "/images/mentees/wooffy-community-event.jpg", program: "BASCII Mentorship", link: "https://www.instagram.com/wooffy.bkk/" },
  { name: "STL Group / VEV", logo: "/images/logos/stl-group.webp", program: "Strategic consulting · 2023", link: "https://www.stlgh.com/" },
  { name: "TREG / SMO", logo: "/images/logos/treg.webp", program: "Strategic consulting · 2023", link: "https://treg.co.th/" },
] as const;

const mentorshipBlurbs: Record<Language, string[]> = {
  en: [
    "Mobile-first live auction marketplace for authenticated collectibles.",
    "Near-zero GI flour reinventing everyday staples.",
    "Online veterinary consultation connecting pet owners with licensed vets.",
    "Dog-loving community hosting events for owners and their pups.",
    "EV and logistics market-expansion strategy, pitch decks in EN / TH / ZH.",
    "Hyperlocal fan-club application entering the Chinese market.",
  ],
  th: [
    "ตลาดประมูลสดบนมือถือสำหรับของสะสมที่ผ่านการรับรอง",
    "แป้ง Low GI ใกล้ศูนย์ที่สร้างนิยามใหม่ให้อาหารหลักประจำวัน",
    "แพลตฟอร์มปรึกษาสัตวแพทย์ออนไลน์ เชื่อมเจ้าของสัตว์เลี้ยงกับสัตวแพทย์วิชาชีพ",
    "คอมมูนิตี้คนรักสุนัข จัดกิจกรรมให้เจ้าของและน้องหมา",
    "กลยุทธ์ขยายตลาด EV และโลจิสติกส์ พร้อม Pitch Deck ภาษาอังกฤษ ไทย จีน",
    "แอปพลิเคชันแฟนคลับแบบ Hyperlocal สำหรับการรุกตลาดจีน",
  ],
  ko: [
    "인증 수집품을 위한 모바일 라이브 경매 마켓플레이스.",
    "일상 주식을 재발명하는 초저 GI 밀가루.",
    "반려인과 수의사를 연결하는 온라인 수의 상담 플랫폼.",
    "반려견과 보호자를 위한 커뮤니티 이벤트 브랜드.",
    "EV·물류 시장 확장 전략과 영어·태국어·중국어 피치덱.",
    "중국 시장에 진출하는 하이퍼로컬 팬클럽 애플리케이션.",
  ],
};

function mentorshipFor(language: Language): MentorshipItem[] {
  const blurbs = mentorshipBlurbs[language] ?? mentorshipBlurbs.en;
  return mentorshipBase.map((m, i) => ({ ...m, blurb: blurbs[i] }));
}

const successBase = {
  name: "Thanat \"Munich\" Limapichat",
  photo: "/images/mentees/2025-munich-limapichat-mit-rsi.jpg",
  achievement: "MIT Research Science Institute 2025",
  program: "QUEST EDTECH mentorship",
};

const successBlurbs: Record<Language, string> = {
  en: "A microbial-fuel-cell bacterial power-generation startup, mentored and co-developed at QUEST EDTECH; selected for MIT's Center for Excellence in Education Research Science Institute, summer 2025.",
  th: "สตาร์ทอัพผลิตไฟฟ้าจากแบคทีเรียด้วยเซลล์เชื้อเพลิงจุลินทรีย์ ที่ผมเป็น Mentor และร่วมพัฒนาที่ QUEST EDTECH ได้รับคัดเลือกเข้า Research Science Institute ของ MIT ช่วงฤดูร้อน 2025",
  ko: "QUEST EDTECH에서 멘토링하고 공동 개발한 미생물 연료전지 발전 스타트업. 2025년 여름 MIT Center for Excellence in Education의 Research Science Institute에 선발.",
};

const about: Record<Language, string[]> = {
  en: [
    "I'm a technical founder and venture builder with 25 years of experience across the United States and Thailand. Along the way I picked up a reputation as the guy who can solve the impossibility of business requirements for the team.",
    "I started in 1999 on the founding team of StockSmart.com, one of the world's first fintech startups, where I helped secure the world's first 3G implementation partnership with British Telecom and the world's first real-time fintech app with NTT DoCoMo FOMA and Credit Suisse.",
    "After eight years building mobile applications and games with startups in Dallas, Texas, I joined Morning Star Research in 2007 as a Quantitative Analyst and Qualitative Reporter covering the Australian Stock Exchange.",
    "In 2012 I found my passion for education and moved to Thailand, where I've built and led educational ventures ever since — with hands-on depth in real-time video infrastructure, full-stack metaverse, and full-stack LLMs and agentic AI.",
    "I also consult for more than twenty businesses across Asia — corporates, government bodies and startups — on venture building, AI transformation and cross-border expansion into Korea, Japan and Singapore.",
  ],
  th: [
    "ผมเป็น Technical Founder และ Venture Builder ที่มีประสบการณ์ 25 ปีทั้งในสหรัฐอเมริกาและประเทศไทย ตลอดเส้นทางนี้ผมได้รับการยอมรับว่าเป็น \"คนที่แก้โจทย์ธุรกิจที่เป็นไปไม่ได้ให้ทีมได้\"",
    "ผมเริ่มต้นในปี 1999 ในทีมผู้ก่อตั้ง StockSmart.com หนึ่งในสตาร์ทอัพ Fintech รุ่นแรกของโลก และมีส่วนช่วยปิดดีลพันธมิตรที่เป็นครั้งแรกของโลก ทั้งการใช้งาน 3G กับ British Telecom และแอป Fintech แบบเรียลไทม์กับ NTT DoCoMo FOMA และ Credit Suisse",
    "หลังจาก 8 ปีในการสร้าง Mobile Application และเกมกับสตาร์ทอัพในดัลลัส เท็กซัส ผมเข้าร่วม Morning Star Research ในปี 2007 ในตำแหน่ง Quantitative Analyst และ Qualitative Reporter ดูแลตลาดหลักทรัพย์ออสเตรเลีย",
    "ปี 2012 ผมพบความหลงใหลในด้านการศึกษาและย้ายมาประเทศไทย และสร้างธุรกิจการศึกษามาโดยตลอด ด้วยความเชี่ยวชาญเชิงลึกด้านโครงสร้างพื้นฐานวิดีโอแบบเรียลไทม์ Metaverse แบบ Full-stack รวมถึง LLM และ Agentic AI แบบ Full-stack",
    "ผมยังเป็นที่ปรึกษาให้ธุรกิจมากกว่า 20 แห่งทั่วเอเชีย ทั้งองค์กรขนาดใหญ่ หน่วยงานภาครัฐ และสตาร์ทอัพ ในเรื่อง Venture Building, AI Transformation และการขยายธุรกิจสู่เกาหลี ญี่ปุ่น และสิงคโปร์",
  ],
  ko: [
    "미국과 태국을 오가며 25년간 일해 온 테크니컬 파운더이자 벤처 빌더입니다. 그동안 '팀의 불가능한 비즈니스 요구를 해결하는 사람'이라는 평판을 얻었습니다.",
    "1999년 세계 최초의 핀테크 스타트업 중 하나인 StockSmart.com의 창립 팀에서 경력을 시작했으며, British Telecom과의 세계 최초 3G 도입 파트너십과 NTT DoCoMo FOMA·Credit Suisse와의 세계 최초 실시간 핀테크 앱을 성사시키는 데 기여했습니다.",
    "텍사스 댈러스의 스타트업에서 8년간 모바일 애플리케이션과 게임을 만든 뒤, 2007년 Morning Star Research에 합류해 호주 증권거래소를 담당하는 정량 애널리스트 겸 정성 리포터로 일했습니다.",
    "2012년 교육에 대한 열정을 발견하고 태국으로 이주한 이후 줄곧 교육 벤처를 만들고 이끌어 왔습니다. 실시간 영상 인프라, 풀스택 메타버스, 풀스택 LLM과 에이전틱 AI에 대한 실무 깊이를 갖추고 있습니다.",
    "또한 아시아 전역 20개 이상의 기업·정부기관·스타트업에 벤처 빌딩, AI 전환, 한국·일본·싱가포르 진출 전략을 자문하고 있습니다.",
  ],
};

export function getHomeContent(language: Language): HomeContent {
  return {
    about: about[language] ?? about.en,
    roles: rolesFor(language),
    track,
    gallery,
    articles,
    mentorship: mentorshipFor(language),
    success: [{ ...successBase, blurb: successBlurbs[language] ?? successBlurbs.en }],
  };
}
