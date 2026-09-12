import { useLanguage } from "@/contexts/LanguageContext";
import { getStrings } from "@/content/strings";

/*
 * Bangkok → Seoul, the corridor this practice runs on. The deck's motif:
 * navy ground, amber cities, one electric-blue arc, years as waypoints.
 * Points are on the quadratic curve P0(90,210) Q(360,20) P2(630,80) at t = ¼, ½, ¾.
 */
const WAYPOINTS = [
  { x: 225, y: 131, year: "2024" },
  { x: 360, y: 83, year: "2025" },
  { x: 495, y: 66, year: "2026" },
];

export function KoreaArc() {
  const { language } = useLanguage();
  const s = getStrings(language);

  return (
    <figure className="mt-8 border border-line bg-navy p-6 dark:bg-void sm:p-8">
      <svg viewBox="0 0 720 260" role="img" aria-label={s.ventures.arcAlt} className="w-full">
        <defs>
          <linearGradient id="arc-fade" x1="0" x2="1">
            <stop offset="0%" stopColor="#2F6FED" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#2F6FED" stopOpacity="1" />
            <stop offset="100%" stopColor="#2F6FED" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* The corridor. */}
        <path d="M90 210 Q360 20 630 80" fill="none" stroke="url(#arc-fade)" strokeWidth="2.5" strokeLinecap="round" />

        {WAYPOINTS.map((p) => (
          <g key={p.year}>
            <circle cx={p.x} cy={p.y} r="4.5" fill="#0B1F3A" stroke="#2F6FED" strokeWidth="2" />
            <text
              x={p.x}
              y={p.y - 16}
              textAnchor="middle"
              fill="#AEB6C4"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="15"
              letterSpacing="1"
            >
              {p.year}
            </text>
          </g>
        ))}

        {/* Bangkok. */}
        <circle cx="90" cy="210" r="7" fill="#F2A93B" />
        <circle cx="90" cy="210" r="15" fill="none" stroke="#F2A93B" strokeOpacity="0.35" strokeWidth="1.5" />
        <text x="90" y="248" textAnchor="start" fill="#F7F6F2" fontFamily="Archivo, sans-serif" fontWeight="700" fontSize="21">
          {s.ventures.bangkok}
        </text>

        {/* Seoul. */}
        <circle cx="630" cy="80" r="7" fill="#F2A93B" />
        <circle cx="630" cy="80" r="15" fill="none" stroke="#F2A93B" strokeOpacity="0.35" strokeWidth="1.5" />
        <text x="630" y="44" textAnchor="end" fill="#F7F6F2" fontFamily="Archivo, sans-serif" fontWeight="700" fontSize="21">
          {s.ventures.seoul}
        </text>
      </svg>
      <figcaption className="caption mt-4 text-mist">{s.ventures.arcCaption}</figcaption>
    </figure>
  );
}
