import { isValidElement, ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugify } from "@/lib/slugify";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

/** Plain text of a heading's children, so inline emphasis still yields a stable id. */
function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement(node)) return textOf((node.props as { children?: ReactNode }).children);
  return "";
}

const components: Components = {
  h1: ({ node, children, ...props }) => (
    <h1 id={slugify(textOf(children))} {...props}>{children}</h1>
  ),
  h2: ({ node, children, ...props }) => (
    <h2 id={slugify(textOf(children))} {...props}>{children}</h2>
  ),
  h3: ({ node, children, ...props }) => (
    <h3 id={slugify(textOf(children))} {...props}>{children}</h3>
  ),
  h4: ({ node, children, ...props }) => (
    <h4 id={slugify(textOf(children))} {...props}>{children}</h4>
  ),
  table: ({ node, ...props }) => (
    <div className="overflow-x-auto">
      <table {...props} />
    </div>
  ),
  a: ({ node, ...props }) => <a target="_blank" rel="noopener noreferrer" {...props} />,
};

export function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  return (
    <div className={`prose-kirk ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
