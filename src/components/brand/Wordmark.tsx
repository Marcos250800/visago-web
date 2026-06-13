import { cn } from "@/lib/utils";

/**
 * Wordmark provisional de VisaGo (placeholder monocromo).
 * Usa los tokens de tema (foreground/line) → se adapta a claro y oscuro.
 * Se sustituirá por el logo real (SVG B/N) cuando llegue.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tightest text-foreground",
        className,
      )}
    >
      <span
        aria-hidden
        className="grid h-6 w-6 place-items-center rounded-full border border-line text-[11px] font-bold"
      >
        V
      </span>
      VisaGo
    </span>
  );
}
