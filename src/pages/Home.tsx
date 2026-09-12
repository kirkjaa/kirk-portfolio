import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getStrings } from "@/content/strings";
import { getHomeContent, TrackItem } from "@/content/homeContent";
import { LINKS } from "@/content/links";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageWithFallback } from "@/components/ImageWithFallback";

function groupByYear(items: TrackItem[]): [string, TrackItem[]][] {
  const map = new Map<string, TrackItem[]>();
  for (const item of items) {
    const list = map.get(item.year) ?? [];
    list.push(item);
    map.set(item.year, list);
  }
  return Array.from(map.entries());
}

export default function Home() {
  const { language } = useLanguage();
  const s = getStrings(language);
  const c = getHomeContent(language);
  const years = groupByYear(c.track);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="container grid gap-12 pb-14 pt-14 lg:grid-cols-12 lg:items-end lg:gap-16 lg:pb-20 lg:pt-20">
          <div className="lg:col-span-7">
            <p className="eyebrow eyebrow-accent">{s.hero.eyebrow}</p>
            <h1 className="display-xl mt-6">{s.hero.title}</h1>
            <p className="lede mt-6">{s.hero.lede}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a className="btn btn-primary" href={`mailto:${LINKS.email}`}>
                {s.hero.ctaPrimary}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a className="btn" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                {s.hero.ctaSecondary}
              </a>
              <Link href="/profile" className="btn btn-ghost">
                {s.hero.ctaTertiary}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <figure className="w-full max-w-sm lg:col-span-5 lg:justify-self-end">
            <div className="frame frame-bar aspect-[4/5]">
              <img
                src="/images/kirk-pathumanun-portrait.jpg"
                alt="Kirk Pathumanun"
                width={800}
                height={800}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="caption mt-3">{s.hero.portraitCaption}</figcaption>
          </figure>
        </div>

        <div className="container">
          <dl className="grid grid-cols-2 border-t border-line md:grid-cols-4">
            {s.proof.map((item, index) => (
              <div
                key={item.label}
                className={`py-7 pr-6 ${index > 0 ? "md:border-l md:border-line md:pl-6" : ""} ${index % 2 === 1 ? "border-l border-line pl-6 md:border-l md:pl-6" : ""}`}
              >
                <dt className="numeral">{item.value}</dt>
                <dd className="mt-3 max-w-[18ch] text-sm leading-snug text-fg-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow={s.sections.about.eyebrow} title={s.sections.about.title} />
          </div>
          <div className="space-y-5 lg:col-span-7 lg:col-start-6">
            {c.about.map((paragraph, index) => (
              <p key={index} className={`leading-relaxed text-fg-2 ${index === 0 ? "text-xl md:text-[1.35rem] md:leading-snug" : "text-[1.0625rem]"}`}>
                {paragraph}
              </p>
            ))}
            <Link href="/about" className="text-link inline-flex items-center gap-1 pt-2 text-sm font-medium">
              {s.labels.fullProfile} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Roles & ventures */}
      <section className="section border-t border-line">
        <div className="container">
          <SectionHeading eyebrow={s.sections.roles.eyebrow} title={s.sections.roles.title} lede={s.sections.roles.lede} />
          <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {c.roles.map((role, index) => {
              // The first role (QUEST EDTECH) runs full width; the remaining six fill a 3 × 2 grid.
              const feature = index === 0;
              return (
                <li
                  key={role.org}
                  className={`flex flex-col gap-4 bg-surface-2 p-6 ${feature ? "lg:col-span-3 lg:flex-row lg:items-start lg:gap-10 lg:p-8" : ""}`}
                >
                  <div className={`flex items-start justify-between gap-4 ${feature ? "lg:w-40 lg:shrink-0 lg:flex-col" : ""}`}>
                    <div className="logo-plate h-14 w-28">
                      <ImageWithFallback src={role.logo} alt="" className="max-h-10 max-w-full object-contain" loading="lazy" />
                    </div>
                    <span className="caption pt-1">
                      {role.from} — {s.labels.present}
                    </span>
                  </div>
                  <div className={`flex flex-col gap-4 ${feature ? "lg:max-w-2xl lg:flex-1" : "flex-1"}`}>
                    <div>
                      <h3 className={`font-display font-bold tracking-tight ${feature ? "text-2xl" : "text-lg"}`}>{role.org}</h3>
                      <p className="mt-0.5 text-sm font-medium text-accent-ink">{role.role}</p>
                    </div>
                    <p className={`leading-relaxed text-fg-muted ${feature ? "text-base" : "text-sm"}`}>{role.blurb}</p>
                    {role.link && (
                      <a href={role.link} target="_blank" rel="noopener noreferrer" className="text-link mt-auto inline-flex items-center gap-1 text-sm">
                        {s.labels.visit} <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Thailand → Korea */}
      <section className="section bg-navy text-paper dark:bg-void">
        <div className="container grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading inverse eyebrow={s.sections.korea.eyebrow} title={s.sections.korea.title} />
            <p className="mt-6 max-w-prose text-[1.0625rem] leading-relaxed text-paper/80">{s.sections.korea.body}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {s.sections.korea.chips.map((chip) => (
                <li key={chip} className="chip border-paper/25 text-paper/90">{chip}</li>
              ))}
            </ul>
            <a className="btn btn-accent mt-8" href={`mailto:${LINKS.email}`}>
              {s.sections.korea.cta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <figure className="lg:col-span-6">
            <div className="frame border-paper/20 bg-void">
              <img
                src="/images/events/2024-nextrise-seoul-duphonics-on-stage.jpg"
                alt={s.sections.korea.photoCaption}
                width={1600}
                height={1200}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
            <figcaption className="caption mt-3 text-mist">{s.sections.korea.photoCaption}</figcaption>
          </figure>
        </div>
      </section>

      {/* Track record */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={s.sections.track.eyebrow} title={s.sections.track.title} lede={s.sections.track.lede} />
          <div className="mt-12 border-t-2 border-line-strong">
            {years.map(([year, items]) => (
              <div key={year} className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-2">
                  <span className="numeral text-[2.25rem] md:text-[2.75rem]">{year}</span>
                </div>
                <ul className="divide-y divide-line md:col-span-10">
                  {items.map((item) => (
                    <li key={item.title} className="grid gap-1 py-3 md:grid-cols-[7.5rem_1fr] md:gap-6">
                      <span className="caption md:pt-1">{s.labels.kinds[item.kind]}</span>
                      <div>
                        <p className="font-medium text-fg">{item.title}</p>
                        {item.detail && <p className="mt-0.5 text-sm text-fg-muted">{item.detail}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing */}
      <section className="section border-t border-line bg-surface-3/50">
        <div className="container">
          <SectionHeading eyebrow={s.sections.writing.eyebrow} title={s.sections.writing.title} lede={s.sections.writing.lede} />
          <ol className="mt-12 border-t border-line">
            {c.articles.map((article) => (
              <li key={article.link} className="border-b border-line">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-2 py-5 md:grid-cols-[8rem_1fr_auto] md:items-baseline md:gap-8"
                >
                  <span className="caption">{article.date}</span>
                  <span>
                    <span className="font-display text-lg font-semibold leading-snug tracking-tight decoration-accent decoration-2 underline-offset-4 group-hover:underline">
                      {article.title}
                    </span>
                    <span className="mt-1 block text-sm text-fg-muted">{article.theme}</span>
                  </span>
                  <span className="caption inline-flex items-center gap-1 group-hover:text-fg">
                    {s.labels.readOnE27} <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Mentorship & consulting */}
      <section className="section border-t border-line">
        <div className="container">
          <SectionHeading eyebrow={s.sections.mentorship.eyebrow} title={s.sections.mentorship.title} lede={s.sections.mentorship.lede} />
          <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {c.mentorship.map((item) => (
              <li key={item.name} className="flex flex-col bg-surface-2 p-6">
                <div className="flex items-center gap-4">
                  <div className="logo-plate h-14 w-14 shrink-0">
                    <ImageWithFallback src={item.logo} alt="" className="max-h-10 max-w-full object-contain" loading="lazy" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold tracking-tight">{item.name}</h3>
                    <p className="caption mt-0.5">{item.program}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-fg-muted">{item.blurb}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-link mt-4 inline-flex items-center gap-1 text-sm">
                    {s.labels.visit} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </li>
            ))}
          </ul>

          {c.success.map((story) => (
            <div key={story.name} className="card mt-8 grid overflow-hidden md:grid-cols-[18rem_1fr]">
              <div className="bg-void">
                <ImageWithFallback src={story.photo} alt={story.name} className="h-56 w-full object-contain md:h-full" loading="lazy" />
              </div>
              <div className="p-6 md:p-8">
                <p className="eyebrow eyebrow-accent">{s.labels.successStory}</p>
                <h3 className="display-md mt-4">{story.name}</h3>
                <p className="mt-1 font-medium text-accent-ink">{story.achievement}</p>
                <p className="mt-4 max-w-prose leading-relaxed text-fg-muted">{story.blurb}</p>
                <p className="caption mt-4">{story.program}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Field notes */}
      <section className="section border-t border-line">
        <div className="container">
          <SectionHeading eyebrow={s.sections.gallery.eyebrow} title={s.sections.gallery.title} lede={s.sections.gallery.lede} />
          <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {c.gallery.map((photo) => (
              <li key={photo.src}>
                <figure>
                  <div className="frame aspect-[4/3]">
                    <img src={photo.src} alt={photo.caption} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <figcaption className="mt-3">
                    <p className="caption">{photo.meta}</p>
                    <p className="mt-1 text-sm text-fg-2">{photo.caption}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section scroll-mt-16 bg-navy text-paper dark:bg-void">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading inverse eyebrow={s.sections.contact.eyebrow} title={s.sections.contact.title} lede={s.sections.contact.lede} />
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn btn-accent" href={`mailto:${LINKS.email}`}>
                {LINKS.email}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a className="btn border-paper/40 text-paper hover:bg-paper hover:text-navy" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                {s.labels.linkedin}
              </a>
            </div>
          </div>
          <dl className="grid gap-5 border-t border-paper/20 pt-8 text-sm lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:pt-2">
            <div>
              <dt className="caption text-mist">{s.labels.email}</dt>
              <dd className="mt-1"><a href={`mailto:${LINKS.email}`} className="text-paper hover:text-amber">{LINKS.email}</a></dd>
            </div>
            <div>
              <dt className="caption text-mist">{s.labels.linkedin}</dt>
              <dd className="mt-1"><a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-paper hover:text-amber">linkedin.com/in/kirkjaa</a></dd>
            </div>
            <div>
              <dt className="caption text-mist">{s.labels.company}</dt>
              <dd className="mt-1"><a href={LINKS.company} target="_blank" rel="noopener noreferrer" className="text-paper hover:text-amber">questedtech.com</a></dd>
            </div>
            <div>
              <dt className="caption text-mist">{s.labels.location}</dt>
              <dd className="mt-1 text-paper">{s.labels.locationValue}</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
