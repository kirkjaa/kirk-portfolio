import { ArrowUpRight } from "lucide-react";
import { ArticleItem } from "@/content/homeContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { getStrings } from "@/content/strings";

interface ArticleListProps {
  articles: ArticleItem[];
}

/** The e27 contributor pieces: date, title, theme, a verbatim line where we hold one, and the link out. */
export function ArticleList({ articles }: ArticleListProps) {
  const { language } = useLanguage();
  const s = getStrings(language);

  return (
    <ol className="border-t border-line">
      {articles.map((article) => (
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
              {article.quote && (
                <span className="mt-2 block max-w-2xl text-[0.95rem] italic leading-snug text-fg-2">“{article.quote}”</span>
              )}
            </span>
            <span className="caption inline-flex items-center gap-1 group-hover:text-fg">
              {s.labels.readOnE27} <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </a>
        </li>
      ))}
    </ol>
  );
}
