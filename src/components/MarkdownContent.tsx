import { isValidElement, ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowUpRight } from "lucide-react";
import { slugify } from "@/lib/slugify";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { mediaForHeading } from "@/content/ventureMedia";
import { useLanguage } from "@/contexts/LanguageContext";
import { getStrings } from "@/content/strings";

interface MarkdownContentProps {
  content: string;
  className?: string;
  /** Turn each venture's H3 into a logo/photo header block (Ventures and the full profile). */
  ventureHeadings?: boolean;
}

/** Plain text of a heading's children, so inline emphasis still yields a stable id. */
function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement(node)) return textOf((node.props as { children?: ReactNode }).children);
  return "";
}

export function MarkdownContent({ content, className = "", ventureHeadings = false }: MarkdownContentProps) {
  const { language } = useLanguage();
  const s = getStrings(language);

  const components: Components = {
    h1: ({ node, children, ...props }) => <h1 id={slugify(textOf(children))} {...props}>{children}</h1>,
    h2: ({ node, children, ...props }) => <h2 id={slugify(textOf(children))} {...props}>{children}</h2>,
    h3: ({ node, children, ...props }) => {
      const text = textOf(children);
      const id = slugify(text);
      const media = ventureHeadings ? mediaForHeading(text) : undefined;

      if (!media) return <h3 id={id} {...props}>{children}</h3>;

      // "QUEST EDTECH — CEO & Co-Founder, 2018 →" splits into name and role on the em dash.
      const [name, ...rest] = text.split(" — ");
      const role = rest.join(" — ").replace(/\s*→\s*$/, "");

      return (
        <div className="mt-12 border-t border-line pt-8 first:mt-0 first:border-0 first:pt-0">
          <div className="flex items-center gap-4">
            <div className="logo-plate h-16 w-16 shrink-0">
              <ImageWithFallback src={media.logo} alt="" className="max-h-11 max-w-full object-contain" loading="lazy" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 id={id} className="!mt-0 text-xl leading-tight">{name}</h3>
              {role && <p className="mt-1 text-sm font-medium text-accent-ink">{role}</p>}
            </div>
            {media.link && (
              <a
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link hidden shrink-0 items-center gap-1 self-start pt-1 text-sm no-underline hover:underline sm:inline-flex"
              >
                {s.labels.visit} <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
          {media.photo && (
            <figure className="mt-5">
              <div className="frame frame-bar aspect-[3/2]">
                <img src={media.photo} alt={media.photoCaption ?? name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              {media.photoCaption && <figcaption className="caption mt-2.5">{media.photoCaption}</figcaption>}
            </figure>
          )}
          {media.link && (
            <a
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link mt-4 inline-flex items-center gap-1 text-sm no-underline hover:underline sm:hidden"
            >
              {s.labels.visit} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      );
    },
    h4: ({ node, children, ...props }) => <h4 id={slugify(textOf(children))} {...props}>{children}</h4>,
    table: ({ node, ...props }) => (
      <div className="overflow-x-auto">
        <table {...props} />
      </div>
    ),
    a: ({ node, ...props }) => <a target="_blank" rel="noopener noreferrer" {...props} />,
  };

  return (
    <div className={`prose-kirk ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
