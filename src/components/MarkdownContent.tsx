import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugify } from "@/lib/slugify";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => {
            const text = String(props.children);
            const id = slugify(text);
            return (
              <h1
                id={id}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                {...props}
              />
            );
          },
          h2: ({ node, ...props }) => {
            const text = String(props.children);
            const id = slugify(text);
            return (
              <h2
                id={id}
                className="text-2xl md:text-3xl font-semibold text-gray-900 mt-12 mb-4"
                {...props}
              />
            );
          },
          h3: ({ node, ...props }) => {
            const text = String(props.children);
            const id = slugify(text);
            return (
              <h3
                id={id}
                className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-3"
                {...props}
              />
            );
          },
          h4: ({ node, ...props }) => (
            <h4
              className="text-lg font-semibold text-gray-900 mt-6 mb-2"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4" {...props} />
          ),
          ul: ({ node, ordered, ...props }) => (
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4" {...props} />
          ),
          ol: ({ node, ordered, ...props }) => (
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4" {...props} />
          ),
          li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
          strong: ({ node, ...props }) => <strong className="font-semibold text-gray-900" {...props} />,          
          em: ({ node, ...props }) => <em className="italic" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-blue-200 bg-blue-50/60 px-4 py-3 italic rounded-r-lg text-gray-700 mb-6" {...props} />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-200 text-left text-sm" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-gray-100 text-gray-700" {...props} />
          ),
          tbody: ({ node, ...props }) => <tbody className="divide-y divide-gray-200" {...props} />,
          tr: ({ node, ...props }) => <tr className="border-b border-gray-200" {...props} />,
          th: ({ node, ...props }) => (
            <th className="px-4 py-3 font-semibold text-gray-900" {...props} />
          ),
          td: ({ node, ...props }) => <td className="px-4 py-3 align-top text-gray-700" {...props} />,
          a: ({ node, ...props }) => (
            <a
              className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
