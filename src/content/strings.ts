import { Language } from "@/contexts/LanguageContext";

type LanguageStrings = {
  siteTitle: string;
  navigation: {
    home: string;
    about: string;
    ventures: string;
    publications: string;
    profile: string;
    contact: string;
  };
  header: {
    themeToggle: {
      light: string;
      dark: string;
      aria: string;
    };
    language: {
      label: string;
      options: Record<Language, string>;
    };
  };
  cta: {
    connectLinkedIn: string;
    getInTouch: string;
    exploreProfile: string;
    contactLinkedIn: string;
    contactEmail: string;
    visitWebsite: string;
    readArticle: string;
  };
  footer: {
    title: string;
    subtitle: string;
    copyright: string;
    sourcesLabel: string;
    sources: {
      linkedin: string;
      e27: string;
      digitalBridge: string;
    };
  };
};

const strings: Record<Language, LanguageStrings> = {
  en: {
    siteTitle: "Kirk Pathumanun",
    navigation: {
      home: "Home",
      about: "About",
      ventures: "Ventures",
      publications: "Publications",
      profile: "Full Profile",
      contact: "Contact",
    },
    header: {
      themeToggle: {
        light: "Switch to light mode",
        dark: "Switch to dark mode",
        aria: "Toggle color theme",
      },
      language: {
        label: "Language",
        options: {
          en: "English",
          th: "ไทย",
          ko: "한국어",
        },
      },
    },
    cta: {
      connectLinkedIn: "Connect on LinkedIn",
      getInTouch: "Get in Touch",
      exploreProfile: "Explore Full Profile",
      contactLinkedIn: "LinkedIn Profile",
      contactEmail: "Email Me",
      visitWebsite: "Visit Website",
      readArticle: "Read Article",
    },
    footer: {
      title: "Kirk Pathumanun",
      subtitle:
        "Venture Builder • Technical Founder • Strategic Advisor",
      copyright: "© 2025 Kirk Pathumanun. All rights reserved.",
      sourcesLabel: "Sources:",
      sources: {
        linkedin: "LinkedIn",
        e27: "e27",
        digitalBridge: "Digital Bridge Thailand",
      },
    },
  },
  th: {
    siteTitle: "เคิร์ก ปถุมานันท์",
    navigation: {
      home: "หน้าแรก",
      about: "เกี่ยวกับ",
      ventures: "บริษัทร่วมก่อตั้ง",
      publications: "ผลงานเผยแพร่",
      profile: "ประวัติเต็ม",
      contact: "ติดต่อ",
    },
    header: {
      themeToggle: {
        light: "เปลี่ยนเป็นโหมดสว่าง",
        dark: "เปลี่ยนเป็นโหมดมืด",
        aria: "สลับโหมดสี",
      },
      language: {
        label: "ภาษา",
        options: {
          en: "English",
          th: "ไทย",
          ko: "한국어",
        },
      },
    },
    cta: {
      connectLinkedIn: "เชื่อมต่อผ่าน LinkedIn",
      getInTouch: "ติดต่อพูดคุย",
      exploreProfile: "ดูโปรไฟล์ฉบับเต็ม",
      contactLinkedIn: "โปรไฟล์ LinkedIn",
      contactEmail: "ส่งอีเมล",
      visitWebsite: "เยี่ยมชมเว็บไซต์",
      readArticle: "อ่านบทความ",
    },
    footer: {
      title: "เคิร์ก ปถุมานันท์",
      subtitle:
        "ผู้สร้างธุรกิจ • ผู้ก่อตั้งด้านเทคนิค • ที่ปรึกษากลยุทธ์",
      copyright: "© 2025 เคิร์ก ปถุมานันท์ สงวนลิขสิทธิ์.",
      sourcesLabel: "แหล่งข้อมูล:",
      sources: {
        linkedin: "LinkedIn",
        e27: "e27",
        digitalBridge: "Digital Bridge Thailand",
      },
    },
  },
  ko: {
    siteTitle: "커크 파투마난",
    navigation: {
      home: "홈",
      about: "소개",
      ventures: "벤처",
      publications: "기고문",
      profile: "전체 프로필",
      contact: "문의",
    },
    header: {
      themeToggle: {
        light: "라이트 모드로 전환",
        dark: "다크 모드로 전환",
        aria: "테마 전환",
      },
      language: {
        label: "언어",
        options: {
          en: "English",
          th: "ไทย",
          ko: "한국어",
        },
      },
    },
    cta: {
      connectLinkedIn: "LinkedIn에서 연결",
      getInTouch: "문의하기",
      exploreProfile: "전체 프로필 보기",
      contactLinkedIn: "LinkedIn 프로필",
      contactEmail: "이메일 보내기",
      visitWebsite: "웹사이트 방문",
      readArticle: "기사 읽기",
    },
    footer: {
      title: "커크 파투마난",
      subtitle: "벤처 빌더 • 테크니컬 파운더 • 전략 자문",
      copyright: "© 2025 커크 파투마난. All rights reserved.",
      sourcesLabel: "출처:",
      sources: {
        linkedin: "LinkedIn",
        e27: "e27",
        digitalBridge: "Digital Bridge Thailand",
      },
    },
  },
};

export function getStrings(language: Language): LanguageStrings {
  return strings[language] ?? strings.en;
}
