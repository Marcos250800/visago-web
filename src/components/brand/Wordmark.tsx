import { cn } from "@/lib/utils";

/**
 * Wordmark provisional de VisaGo (placeholder monocromo).
 * Se sustituirá por el logo real (SVG B/N positivo/negativo) cuando llegue.
 * `tone` controla el color para colocarlo sobre fondo claro u oscuro.
 */
export function Wordmark({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "paper";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tightest",
        tone === "paper" ? "text-paper" : "text-ink",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "grid h-6 w-6 place-items-center rounded-full border text-[11px] font-bold",
          tone === "paper" ? "border-paper/40 text-paper" : "border-ink/30 text-ink",
        )}
      >
        V
      </span>
      VisaGo
    </span>
  );
}
