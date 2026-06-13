import { cn } from "@/lib/utils";
import { LogoMark } from "./Logo";

/**
 * Wordmark de VisaGo: isotipo (ondas) + nombre.
 * Usa los tokens de tema → se adapta a claro y oscuro.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tightest text-foreground",
        className,
      )}
    >
      <LogoMark className="h-6 w-auto" />
      VisaGo
    </span>
  );
}
