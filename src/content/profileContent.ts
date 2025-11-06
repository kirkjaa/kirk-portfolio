import profileEn from "@/content/profile.en.md?raw";
import profileTh from "@/content/profile.th.md?raw";
import profileKo from "@/content/profile.ko.md?raw";
import { Language } from "@/contexts/LanguageContext";

const profiles: Record<Language, string> = {
  en: profileEn,
  th: profileTh,
  ko: profileKo,
};

export function getProfileMarkdown(language: Language): string {
  return profiles[language] ?? profileEn;
}
