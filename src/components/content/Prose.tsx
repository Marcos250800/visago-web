import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Renderiza contenido markdown con estética editorial monocroma.
 * Las cabeceras del markdown se bajan un nivel (h1→h2, h2→h3, h3→h4) para
 * mantener una jerarquía semántica correcta bajo el H1 de la página.
 */
export function Prose({ children, className }: { children: string; className?: string }) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h2 className="mt-14 font-display text-3xl font-semibold first:mt-0 md:text-4xl">{children}</h2>
          ),
          h2: ({ children }) => (
            <h3 className="mt-12 font-display text-2xl font-semibold first:mt-0 md:text-3xl">{children}</h3>
          ),
          h3: ({ children }) => (
            <h4 className="mt-9 font-display text-lg font-semibold first:mt-0 md:text-xl">{children}</h4>
          ),
          p: ({ children }) => <p className="mt-5 leading-relaxed text-muted">{children}</p>,
          ul: ({ children }) => <ul className="mt-5 space-y-2.5">{children}</ul>,
          ol: ({ children }) => <ol className="mt-5 space-y-2.5">{children}</ol>,
          li: ({ children }) => (
            <li className="relative pl-5 leading-relaxed text-muted before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-foreground/40">
              {children}
            </li>
          ),
          strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="mt-8 border-l-2 border-foreground pl-5 font-display text-xl italic text-foreground">
              {children}
            </blockquote>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
