import { Language } from "@/contexts/LanguageContext";

export interface VentureContent {
  name: string;
  logo: string;
  role: string;
  year: string;
  description: string;
  link?: string;
}

export interface AwardContent {
  year: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  src: string;
  title: string;
  event: string;
}

export interface PublicationItem {
  title: string;
  date: string;
  outlet: string;
  link: string;
}

export interface MentorshipStartup {
  name: string;
  logo: string;
  photo: string;
  description: string;
  program: string;
  link?: string;
}

export interface SuccessStory {
  name: string;
  photo: string;
  achievement: string;
  description: string;
  program: string;
}

export interface HomeContent {
  hero: {
    subtitle: string;
    description: string;
  };
  aboutHeading: string;
  aboutParagraphs: string[];
  ventures: {
    heading: string;
    subheading: string;
    items: VentureContent[];
  };
  awards: {
    heading: string;
    subheading: string;
    items: AwardContent[];
  };
  gallery: {
    heading: string;
    subheading: string;
    items: GalleryItem[];
  };
  thoughtLeadership: {
    heading: string;
    subheading: string;
    items: PublicationItem[];
  };
  mentorship: {
    heading: string;
    subheading: string;
    items: MentorshipStartup[];
  };
  mentorshipSuccess: {
    heading: string;
    subheading: string;
    items: SuccessStory[];
  };
  contact: {
    heading: string;
    description: string;
  };
}

const venturesBase: VentureContent[] = [
  {
    name: "QUEST EDTECH",
    logo: "/images/Questlogo.png",
    role: "CEO & Co-Founder",
    year: "2018 - Present",
    description:
      "AI-powered EdTech platform revolutionizing education in Southeast Asia",
    link: "https://quest.ac",
  },
  {
    name: "duPhonics",
    logo: "/images/pasted_file_i889hI_image.png",
    role: "Founder",
    year: "2020 - Present",
    description:
      "Next-gen telenanny platform with AI for immersive children's learning in the metaverse",
    link: "https://duphonics.com",
  },
  {
    name: "QuestLanguage",
    logo: "/images/pasted_file_PQQ5VN_image.png",
    role: "Co-Founder",
    year: "2013 - Present",
    description:
      "Innovative language learning platform serving thousands of students",
    link: "https://questlanguage.com",
  },
  {
    name: "Whatnot Startup Studio",
    logo: "/images/pasted_file_LicBBY_image.png",
    role: "Entrepreneur in Residence",
    year: "2024 - Present",
    description: "Building and scaling startups across multiple verticals",
    link: "https://whatnot.co",
  },
  {
    name: "SSL Logistics",
    logo: "/images/pasted_file_tQ9Ums_image.png",
    role: "Chief Strategy Officer",
    year: "2025 - Present",
    description:
      "Leading international expansion strategy for logistics innovation",
    link: "https://www.ssllogistics.co.th",
  },
  {
    name: "CUBIKA",
    logo: "/images/pasted_file_JdvN30_image.png",
    role: "Chief Strategy Officer",
    year: "2025 - Present",
    description:
      "AI-driven analytics and intelligence provider for data-driven enterprises",
    link: "https://ddlghq.com",
  },
  {
    name: "Digital Bridge Thailand",
    logo: "/images/digital_bridge_logo.webp",
    role: "Advisor",
    year: "2024 - Present",
    description:
      "Empowering youth with digital skills and bridging the digital divide",
    link: "https://www.digitalbridgethailand.com",
  },
];

const awardsBase: AwardContent[] = [
  { year: "2025", title: "NextRise 2025 Seoul Strategist", description: "Inc and IR Award for expanding CUBIKA to Korea" },
  { year: "2025", title: "E27 Top 100 Program Mentor", description: "Mentoring Top 10 ASAPH and Top 100 Tasted Better" },
  { year: "2025", title: "Chief Strategy Officer Appointment", description: "DDLG, CUBIKA, and SSL Logistics overseas expansion" },
  { year: "2024", title: "NextRise 2024 Seoul Presentation", description: "On-stage presentation for duPhonics sponsored by DPIT Ministry of Commerce" },
  { year: "2024", title: "TECHBITE 5.0 Incubator", description: "Selected member of TECHBITE 5.0 program" },
  { year: "2022", title: "APTG 5G Accelerator", description: "Participant for duPhonics" },
  { year: "2020", title: "TOP100 APAC by e27", description: "Recognized as one of the top 100 startups in Asia-Pacific" },
  { year: "2020", title: "Y Combinator Startup School Graduate", description: "Completed for REACH venture" },
  { year: "2019", title: "Startup Thailand 2019 Showcase", description: "Featured startup at national showcase" },
  { year: "2019", title: "TMA Shark Tank Winner", description: "Winner of Thailand Competitiveness Conference 2019 Shark Tank Pitch" },
  { year: "2019", title: "Digital Ocean Hatch Member", description: "Selected for Digital Ocean startup program" },
  { year: "2019", title: "AWS Edstart Member", description: "Accepted into AWS EdTech accelerator" },
  { year: "2019", title: "Y Combinator Startup School Graduate", description: "First completion of YC Startup School" },
  { year: "2019", title: "TED Fund Program Member", description: "Selected for TED Fund initiative" },
  { year: "2018", title: "Asia Accelerator Venture Winner", description: "Winner of 1 Minute Pitch Competition" },
  { year: "2018", title: "Depa S2 Program Member", description: "Selected for government startup program" },
  { year: "2018", title: "Project Alpha Finalist", description: "Top finalists and only Thai startup by SeedPlus" },
  { year: "2018", title: "Startup Thailand Showcase", description: "Featured at national startup showcase" },
  { year: "2018", title: "Edtech Hackathon Finalist", description: "Top finalist in EdTech innovation competition" },
];

const galleryBase: GalleryItem[] = [
  { src: "/images/pasted_file_ywHa5p_image.png", title: "NextRise 2024 Seoul - On Stage Presentation", event: "NextRise 2024" },
  { src: "/images/pasted_file_lZXPIM_image.png", title: "NextRise 2025 Seoul - CUBIKA Booth", event: "NextRise 2025" },
  { src: "/images/pasted_file_LQoKUq_image.png", title: "Korean Market Landing Program 2024", event: "NextRise 2024" },
  { src: "/images/pasted_file_bo3fCS_image.png", title: "E27 Echelon Singapore - ASAPH Mentorship", event: "E27 Echelon" },
  { src: "/images/pasted_file_0bg0es_image.png", title: "E27 Echelon Singapore - Tasted Better Mentorship", event: "E27 Echelon" },
  { src: "/images/pasted_file_nbuA7V_image.png", title: "E27 Top 100 Programme", event: "E27 Echelon" },
  { src: "/images/pasted_file_8el0On_image.png", title: "NTU Singapore Speaking Engagement", event: "Speaking" },
  { src: "/images/pasted_file_tYxBur_image.png", title: "NTU Entrepreneurship Academy", event: "Speaking" },
  { src: "/images/pasted_file_pgPWrw_image.png", title: "NTU Workshop Session", event: "Speaking" },
  { src: "/images/pasted_file_9qkVIw_image.png", title: "BASCII Mentorship - Culture Re-creation 2025", event: "BASCII" },
  { src: "/images/pasted_file_wvhWCi_image.png", title: "TECHBITE 5.0 - duPhonics Showcase", event: "TECHBITE" },
  { src: "/images/pasted_file_lzrhcD_image.png", title: "TMA Shark Tank Winner 2019", event: "Awards" },
  { src: "/images/pasted_file_wEYR4d_image.png", title: "Startup Thailand 2019", event: "Startup Thailand" },
  { src: "/images/pasted_file_HozVcE_image.png", title: "Corporate Consulting Workshop", event: "Consulting" },
];

const publicationsBase: PublicationItem[] = [
  {
    title:
      "Navigating Trade Turbulence: Digital Transformation Enhances Global Logistics Amid Rising Tariffs",
    date: "April 6, 2025",
    outlet: "e27",
    link: "https://e27.co/navigating-trade-turbulence-digital-transformation-enhances-global-logistics-amid-rising-tariffs-20250406/",
  },
  {
    title:
      "How Emotional Economics is Reshaping Alternative Investments in Southeast Asia",
    date: "June 3, 2025",
    outlet: "e27",
    link: "https://e27.co/how-emotional-economics-is-reshaping-alternative-investments-in-southeast-asia-20250603/",
  },
  {
    title:
      "Bridging the Carbon Data Gap: How Predictive Insights for Data Sustainability Are Revolutionising Emission Accounting",
    date: "November 25, 2024",
    outlet: "e27",
    link: "https://e27.co/bridging-the-carbon-data-gap-how-predictive-insights-for-data-sustainability-are-revolutionising-emission-accounting-20241125/",
  },
  {
    title: "The Future of Gen Alpha in the Workplace: A Primer for Business Leaders",
    date: "July 14, 2024",
    outlet: "e27",
    link: "https://e27.co/the-future-of-gen-alpha-in-the-workplace-a-primer-for-business-leaders-20240714/",
  },
  {
    title: "The Metaverse Opens New Opportunities for Education",
    date: "June 6, 2022",
    outlet: "e27",
    link: "https://e27.co/the-metaverse-opens-new-opportunities-for-education-20220606/",
  },
];

const mentorshipBase: MentorshipStartup[] = [
  {
    name: "SoPet",
    logo: "/images/sopet_logo.webp",
    photo: "/images/sopet_photo.png",
    description:
      "Online veterinary consultation platform connecting pet owners with licensed vets",
    program: "BASCII Mentorship",
    link: "https://sopet.co/en",
  },
  {
    name: "Wooffy",
    logo: "/images/wooffy_logo_slide.png",
    photo: "/images/wooffy_photo.png",
    description:
      "Dog-loving community hosting social events for pet owners and their pups",
    program: "BASCII Mentorship",
    link: "https://www.instagram.com/wooffy.bkk/",
  },
  {
    name: "ASAPH",
    logo: "/images/asaph_logo.png",
    photo: "/images/asaph_photo.png",
    description:
      "E27 Top 100 2025 (Top 10) - Innovative startup transforming the industry",
    program: "E27 Top 100 Programme",
  },
  {
    name: "Tasted Better",
    logo: "/images/tasted_better_logo.png",
    photo: "/images/tasted_better_photo.png",
    description:
      "Near-zero GI flour revolutionizing global staples for healthier living",
    program: "E27 Top 100 Programme",
  },
  {
    name: "STL Group / VEV",
    logo: "/images/stl_logo.webp",
    photo: "/images/stl_logo.webp",
    description:
      "EV and logistics consulting for international market expansion",
    program: "Strategic Consulting",
    link: "https://www.stlgh.com/",
  },
  {
    name: "TREG / SMO",
    logo: "/images/treg_logo.webp",
    photo: "/images/treg_logo.webp",
    description:
      "Hyperlocal Fanclub application consulting for Chinese market entry",
    program: "Strategic Consulting",
    link: "https://treg.co.th/",
  },
];

const mentorshipSuccessBase: SuccessStory[] = [
  {
    name: "Thanat (Munich) Limapichat",
    photo: "/images/munich_mit_success.png",
    achievement: "MIT CEE Internship Program 2025",
    description:
      "MFCs fuel cell bacterial power generation startup mentored and co-developed at Quest Edtech. Accepted to MIT's Center for Excellence in Education Research Science Institute for summer 2025.",
    program: "Quest Edtech Mentorship",
  },
];

const homeContent: Record<Language, HomeContent> = {
  en: {
    hero: {
      subtitle: "Venture Builder & Technical Founder",
      description:
        "25 years of experience solving the impossibility of business requirements. From pioneering fintech at StockSmart.com to revolutionizing EdTech across Asia.",
    },
    aboutHeading: "About",
    aboutParagraphs: [
      "Kirk Pathumanun is a tech startup builder with 25 years of experience spanning from the United States to Thailand. Throughout his career, Kirk has built a reputation as \"the guy who can solve the impossibility of business requirements for the team\".",
      "His journey began in 1999 as part of the founding team of StockSmart.com, one of the world's first fintech startups. There, he helped secure groundbreaking business partnerships including the world's first 3G implementation for British Telecom, and the world's first real-time fintech app with NTT DoCoMo FOMA and Credit Suisse.",
      "After 8 years working with tech startups in Dallas, Texas focusing on Mobile Applications and Gaming, Kirk joined Morning Star Research as a Quantitative Analyst and Qualitative Reporter for the Australian Stock Exchange in 2007.",
      "In 2012, Kirk found his passion for education and has since worked on various successful educational ventures in Thailand. As a Technical Founder with expertise in advanced video conferencing infrastructure, full-stack metaverse, and full-stack LLMs, Kirk continues to push the boundaries of what's possible in EdTech and AI.",
      "Kirk also engages in business consulting for over 20+ businesses in various industries across Asia, serving his clients with expertise and insights for the global arena.",
    ],
    ventures: {
      heading: "Ventures",
      subheading: "Building and scaling innovative companies across multiple industries",
      items: venturesBase,
    },
    awards: {
      heading: "Awards & Recognition",
      subheading: "19 major awards and recognitions from 2018 to 2025",
      items: awardsBase,
    },
    gallery: {
      heading: "Event & Pitching",
      subheading:
        "Highlights from conferences, mentorship sessions, and speaking engagements",
      items: galleryBase,
    },
    thoughtLeadership: {
      heading: "Thought Leadership",
      subheading:
        "Published articles and insights on technology, education, and innovation",
      items: publicationsBase,
    },
    mentorship: {
      heading: "Young Startups Under Mentorship",
      subheading:
        "Guiding the next generation of entrepreneurs through strategic mentorship and hands-on support",
      items: mentorshipBase,
    },
    mentorshipSuccess: {
      heading: "Mentorship Success Stories",
      subheading:
        "Celebrating the achievements of entrepreneurs who've grown through our mentorship programs",
      items: mentorshipSuccessBase,
    },
    contact: {
      heading: "Let's Connect",
      description:
        "Interested in venture building, consulting, or collaboration opportunities? Let's discuss how we can work together.",
    },
  },
  th: {
    hero: {
      subtitle: "ผู้สร้างธุรกิจและผู้ก่อตั้งสายเทคนิค",
      description:
        "ประสบการณ์ 25 ปีในการแก้สมการธุรกิจที่ดูเหมือนเป็นไปไม่ได้ ตั้งแต่บุกเบิกฟินเทคที่ StockSmart.com จนถึงยกระดับ EdTech ทั่วเอเชีย",
    },
    aboutHeading: "เกี่ยวกับ",
    aboutParagraphs: [
      "เคิร์ก ปถุมานันท์ คือผู้สร้างสตาร์ทอัพสายเทคโนโลยีที่มีประสบการณ์ 25 ปี ครอบคลุมทั้งสหรัฐอเมริกาและประเทศไทย ได้รับการยอมรับว่าเป็น \"คนที่แก้ปัญหาธุรกิจที่เป็นไปไม่ได้ให้ทีมได้\"",
      "เขาเริ่มต้นเส้นทางตั้งแต่ปี 1999 ในฐานะทีมผู้ก่อตั้ง StockSmart.com หนึ่งในสตาร์ทอัพฟินเทครุ่นบุกเบิกของโลก และสร้างพันธมิตรทางธุรกิจที่สร้างประวัติศาสตร์ เช่น การเปิดใช้ 3G รายแรกให้ British Telecom และแอปฟินเทคแบบเรียลไทม์กับ NTT DoCoMo FOMA และ Credit Suisse",
      "หลังจากทำงานกับสตาร์ทอัพในดัลลัส เท็กซัส เป็นเวลา 8 ปี โดยเน้นด้าน mobile apps และเกม เคิร์กย้ายสู่ Morning Star Research ในปี 2007 รับหน้าที่นักวิเคราะห์เชิงปริมาณและผู้รายงานเชิงคุณภาพให้ตลาดหลักทรัพย์ออสเตรเลีย",
      "ปี 2012 เขาพบความหลงใหลในด้านการศึกษา และต่อยอดสร้างธุรกิจการศึกษาที่ประสบความสำเร็จหลายโครงการในไทย ในฐานะผู้ก่อตั้งสายเทคนิคที่เชี่ยวชาญระบบวิดีโอคอนเฟอเรนซ์ขั้นสูง เมตาเวิร์สแบบเต็มสแต็ก และ LLM แบบเต็มสแต็ก",
      "เคิร์กยังเป็นที่ปรึกษาด้านกลยุทธ์ให้ธุรกิจมากกว่า 20 แห่งในเอเชีย ถ่ายทอดประสบการณ์และมุมมองระดับสากลให้ลูกค้า",
    ],
    ventures: {
      heading: "บริษัทร่วมก่อตั้ง",
      subheading: "สร้างและขยายธุรกิจนวัตกรรมในหลากหลายอุตสาหกรรม",
      items: venturesBase,
    },
    awards: {
      heading: "รางวัลและการยอมรับ",
      subheading: "19 รางวัลและความสำเร็จสำคัญระหว่างปี 2018-2025",
      items: awardsBase,
    },
    gallery: {
      heading: "งานอีเวนต์และเวที Pitching",
      subheading: "ไฮไลต์จากเวทีสัมมนา การให้คำปรึกษา และงานบรรยาย",
      items: galleryBase,
    },
    thoughtLeadership: {
      heading: "บทความเชิงความคิด",
      subheading: "ผลงานเผยแพร่เกี่ยวกับเทคโนโลยี การศึกษา และนวัตกรรม",
      items: publicationsBase,
    },
    mentorship: {
      heading: "สตาร์ทอัพรุ่นใหม่ภายใต้การดูแล",
      subheading:
        "พัฒนาเถ้าแก่น้อยด้วยกลยุทธ์เชิงลึกและการลงมือทำร่วมกัน",
      items: mentorshipBase.map((item) => {
        switch (item.name) {
          case "SoPet":
            return {
              ...item,
              description:
                "แพลตฟอร์มปรึกษาสัตวแพทย์ออนไลน์ เชื่อมโยงเจ้าของสัตว์เลี้ยงกับสัตวแพทย์มืออาชีพ",
              program: "โครงการ BASCII Mentorship",
            };
          case "Wooffy":
            return {
              ...item,
              description:
                "คอมมูนิตี้คนรักสุนัข จัดกิจกรรมให้เจ้าของและน้องหมามาพบปะ",
              program: "โครงการ BASCII Mentorship",
            };
          case "ASAPH":
            return {
              ...item,
              description:
                "Top 10 ใน E27 Top 100 2025 นำเสนอ Solution เชิงสร้างสรรค์",
              program: "E27 Top 100 Programme",
            };
          case "Tasted Better":
            return {
              ...item,
              description:
                "แป้ง Low GI ที่สร้างนิยามใหม่ให้ผลิตภัณฑ์อาหารเพื่อสุขภาพ",
              program: "E27 Top 100 Programme",
            };
          case "STL Group / VEV":
            return {
              ...item,
              description:
                "ที่ปรึกษาด้าน EV และโลจิสติกส์สำหรับการขยายสู่ตลาดต่างประเทศ",
              program: "Strategic Consulting",
            };
          case "TREG / SMO":
            return {
              ...item,
              description:
                "ที่ปรึกษาแพลตฟอร์มแฟนคลับแบบ Hyperlocal สำหรับการรุกตลาดจีน",
              program: "Strategic Consulting",
            };
          default:
            return item;
        }
      }),
    },
    mentorshipSuccess: {
      heading: "เรื่องราวความสำเร็จ",
      subheading:
        "เฉลิมฉลองผู้ประกอบการที่เติบโตจากโปรแกรม mentorship",
      items: mentorshipSuccessBase,
    },
    contact: {
      heading: "มาร่วมสร้างอนาคต",
      description:
        "สนใจ venture building การให้คำปรึกษา หรือโอกาสร่วมมือ? มาพูดคุยกันว่าเราจะสร้างคุณค่าไปด้วยกันได้อย่างไร",
    },
  },
  ko: {
    hero: {
      subtitle: "벤처 빌더 & 테크니컬 파운더",
      description:
        "불가능해 보이는 비즈니스 요구를 해결해 온 25년의 경험. StockSmart.com의 핀테크 개척부터 아시아 EdTech 혁신까지 이어집니다.",
    },
    aboutHeading: "소개",
    aboutParagraphs: [
      "커크 파투마난은 미국과 태국을 넘나들며 25년 동안 스타트업을 성장시켜 온 테크 기반 창업가입니다. 팀의 불가능한 비즈니스 요구를 해결하는 사람으로 알려져 있습니다.",
      "1999년, 세계 최초의 핀테크 스타트업 중 하나인 StockSmart.com 공동 창업 멤버로 경력을 시작했으며 British Telecom의 최초 3G 도입과 NTT DoCoMo FOMA, Credit Suisse와의 실시간 핀테크 앱을 성사시켰습니다.",
      "모바일 애플리케이션과 게임에 집중한 텍사스 댈러스의 스타트업 생태계에서 8년을 보낸 후 2007년에는 Morning Star Research에서 호주 증권거래소를 담당하는 정량/정성 애널리스트로 활동했습니다.",
      "2012년 교육 분야에 열정을 발견한 그는 태국에서 여러 EdTech 벤처를 성공적으로 이끌었습니다. 고급 화상회의 인프라, 메타버스 풀스택, LLM 풀스택 역량을 갖춘 테크니컬 파운더로서 교육과 AI의 가능성을 확장하고 있습니다.",
      "또한 아시아 전역 20개 이상의 기업을 대상으로 컨설팅을 제공하며 글로벌 관점의 전략을 제시합니다.",
    ],
    ventures: {
      heading: "벤처",
      subheading: "다양한 산업에서 혁신 기업을 구축하고 확장합니다",
      items: venturesBase,
    },
    awards: {
      heading: "수상 및 인정",
      subheading: "2018년부터 2025년까지 19개의 주요 수상 실적",
      items: awardsBase,
    },
    gallery: {
      heading: "이벤트 & 피칭",
      subheading: "컨퍼런스, 멘토십, 강연 현장의 주요 순간",
      items: galleryBase,
    },
    thoughtLeadership: {
      heading: "사고 리더십",
      subheading: "기술, 교육, 혁신에 대한 기고와 인사이트",
      items: publicationsBase,
    },
    mentorship: {
      heading: "멘토링 중인 스타트업",
      subheading: "전략적 멘토링과 실무 코칭으로 차세대 창업가를 지원합니다",
      items: mentorshipBase.map((item) => {
        switch (item.name) {
          case "SoPet":
            return {
              ...item,
              description:
                "수의사와 반려인를 연결하는 온라인 수의 상담 플랫폼",
              program: "BASCII Mentorship",
            };
          case "Wooffy":
            return {
              ...item,
              description:
                "반려견과 보호자를 위한 커뮤니티 이벤트를 운영하는 브랜드",
              program: "BASCII Mentorship",
            };
          case "ASAPH":
            return {
              ...item,
              description:
                "E27 Top 100 2025 Top 10에 선정된 혁신 스타트업",
              program: "E27 Top 100 Programme",
            };
          case "Tasted Better":
            return {
              ...item,
              description:
                "건강한 식생활을 위한 초저 GI 밀가루 솔루션",
              program: "E27 Top 100 Programme",
            };
          case "STL Group / VEV":
            return {
              ...item,
              description:
                "EV 및 물류 기업의 해외 진출을 지원하는 컨설팅",
              program: "Strategic Consulting",
            };
          case "TREG / SMO":
            return {
              ...item,
              description:
                "중국 시장 진출을 위한 하이퍼로컬 팬클럽 플랫폼 컨설팅",
              program: "Strategic Consulting",
            };
          default:
            return item;
        }
      }),
    },
    mentorshipSuccess: {
      heading: "멘토십 성공 사례",
      subheading: "멘토링 프로그램을 통해 성장한 창업가들의 이야기",
      items: mentorshipSuccessBase,
    },
    contact: {
      heading: "함께 성장할 파트너를 찾습니다",
      description:
        "벤처 빌딩, 컨설팅, 협업 기회에 관심이 있으신가요? 함께 만들 수 있는 가치를 이야기해 보세요.",
    },
  },
};

export function getHomeContent(language: Language): HomeContent {
  return homeContent[language] ?? homeContent.en;
}
