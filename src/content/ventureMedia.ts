/**
 * Logo (and, where one honestly exists, a photograph) for each venture named by an
 * H3 on the Ventures page. Matched on the Latin name that starts the heading, so the
 * same map works for the English, Thai and Korean headings.
 *
 * Only three ventures have a period-correct photograph; the rest are logo-only,
 * and that is deliberate — no photo is better than a misleading one.
 */
export interface VentureMedia {
  logo: string;
  photo?: string;
  photoCaption?: string;
  link?: string;
}

export const VENTURE_MEDIA: Record<string, VentureMedia> = {
  "QUEST EDTECH": {
    logo: "/images/logos/quest-edtech.png",
    photo: "/images/events/2019-startup-thailand-quest-booth.jpg",
    photoCaption: "Startup Thailand 2019 — the QUEST booth, “Learn Coding, Prepare for Digital Literacy”",
    link: "https://questedtech.com",
  },
  duPhonics: {
    logo: "/images/logos/duphonics.png",
    photo: "/images/events/2024-techbite-5-duphonics-showcase.jpg",
    photoCaption: "TECHBITE 5.0 Investment & Demo Day, 2024 — the duPhonics metaverse class",
    link: "https://duphonics.com",
  },
  QuestLanguage: {
    logo: "/images/logos/questlanguage.png",
    link: "https://questlanguage.com",
  },
  CUBIKA: {
    logo: "/images/logos/cubika-digital-dialogue.png",
    photo: "/images/events/2025-nextrise-seoul-cubika-booth.jpg",
    photoCaption: "NextRise 2025 Seoul — CUBIKA booth E-036 with the Digital Dialogue delegation",
    link: "https://ddlghq.com",
  },
  "SSL Logistics": {
    logo: "/images/logos/ssl-logistics.png",
    link: "https://www.ssllogistics.co.th",
  },
  "Whatnot Startup Studio": {
    logo: "/images/logos/whatnot-startup-studio.png",
    link: "https://whatnot.co",
  },
  "Digital Bridge Thailand": {
    logo: "/images/logos/digital-bridge-thailand.webp",
    link: "https://www.digitalbridgethailand.com",
  },
};

/** The longest key that the heading starts with, so "QUEST EDTECH" doesn't swallow nothing else. */
export function mediaForHeading(heading: string): VentureMedia | undefined {
  const key = Object.keys(VENTURE_MEDIA)
    .filter((k) => heading.startsWith(k))
    .sort((a, b) => b.length - a.length)[0];
  return key ? VENTURE_MEDIA[key] : undefined;
}
