import { useLanguage } from "@/contexts/LanguageContext";
import { getStrings } from "@/content/strings";
import { getTimeline } from "@/content/timeline";

export function CareerTimeline() {
  const { language } = useLanguage();
  const s = getStrings(language);
  const entries = getTimeline(language);

  return (
    <section aria-labelledby="career-timeline">
      <h2 id="career-timeline" className="eyebrow eyebrow-accent">
        {s.about.timeline.title}
      </h2>
      <ol className="mt-5 border-l border-line">
        {entries.map((entry, index) => (
          <li key={`${entry.year}-${index}`} className="relative pb-6 pl-5 last:pb-0">
            {/* Node on the rule. */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent ring-4 ring-surface"
            />
            <span className="caption block text-accent-ink">{entry.year}</span>
            <span className="mt-0.5 block text-sm font-semibold leading-snug text-fg">{entry.title}</span>
            <span className="mt-0.5 block text-sm leading-snug text-fg-muted">{entry.detail}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
