import { useLanguage } from "@/contexts/LanguageContext";
import { getStrings } from "@/content/strings";
import { LINKS } from "@/content/links";

export function Footer() {
  const { language } = useLanguage();
  const s = getStrings(language);

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container grid gap-8 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-display text-xl font-bold tracking-tight">{s.wordmark}</p>
          <p className="mt-1 text-sm text-fg-muted">{s.footer.roles}</p>
          <p className="caption mt-5 flex flex-wrap gap-x-4 gap-y-1">
            <a href={`mailto:${LINKS.email}`} className="hover:text-fg">{LINKS.email}</a>
            <a href={LINKS.site} className="hover:text-fg">kirkp.com</a>
            <a href={LINKS.company} target="_blank" rel="noopener noreferrer" className="hover:text-fg">questedtech.com</a>
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <nav className="flex gap-5 text-sm" aria-label="External">
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-fg">{s.footer.links.linkedin}</a>
            <a href={LINKS.e27} target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-fg">{s.footer.links.e27}</a>
            <a href={LINKS.company} target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-fg">{s.footer.links.company}</a>
          </nav>
          <p className="caption">{s.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
