import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getStrings } from "@/content/strings";
import { getHomeContent } from "@/content/homeContent";
import { LINKS } from "@/content/links";

export function AtAGlance() {
  const { language } = useLanguage();
  const s = getStrings(language);
  const { roles } = getHomeContent(language);

  return (
    <section aria-labelledby="at-a-glance" className="card p-6">
      <h2 id="at-a-glance" className="eyebrow eyebrow-accent">
        {s.about.atAGlance.title}
      </h2>

      <dl className="mt-5 space-y-5 text-sm">
        <div>
          <dt className="caption">{s.about.atAGlance.roles}</dt>
          <dd className="mt-1.5">
            <ul className="space-y-1.5">
              {roles.slice(0, 5).map((role) => (
                <li key={role.org} className="leading-snug">
                  <span className="font-medium text-fg">{role.role}</span>
                  <span className="text-fg-muted">, {role.org}</span>
                </li>
              ))}
            </ul>
          </dd>
        </div>

        <div>
          <dt className="caption">{s.about.atAGlance.korea}</dt>
          <dd className="mt-1 leading-snug text-fg-2">{s.about.atAGlance.koreaValue}</dd>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <dt className="caption">{s.labels.location}</dt>
            <dd className="mt-1 text-fg-2">{s.labels.locationValue}</dd>
          </div>
          <div>
            <dt className="caption">{s.about.atAGlance.languages}</dt>
            <dd className="mt-1 text-fg-2">{s.about.atAGlance.languagesValue}</dd>
          </div>
        </div>
      </dl>

      <a className="btn btn-primary mt-6 w-full justify-center" href={`mailto:${LINKS.email}`}>
        {s.hero.ctaPrimary}
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </section>
  );
}
