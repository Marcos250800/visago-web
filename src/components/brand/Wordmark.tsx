import { cn } from "@/lib/utils";
import { LogoMark } from "./Logo";
import { LOGO } from "@/lib/site";

/**
 * Lockup de VisaGo: isotipo (ondas finas) + "VisaGo".
 *
 * Si hay logo oficial en LOGO (public/brand/), se inserta TAL CUAL (pixel-perfect),
 * conmutando blanco/negro según el tema. Si no, se usa la recreación vectorial
 * (isotipo + wordmark en Questrial, casi idéntica al original).
 */
export function Wordmark({ className }: { className?: string }) {
  if (LOGO.light && LOGO.dark) {
    return (
      <span className={cn("inline-flex items-center", className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO.light} alt="VisaGo" className="h-7 w-auto [.light_&]:hidden" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO.dark} alt="VisaGo" className="hidden h-7 w-auto [.light_&]:block" />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-3 text-foreground", className)}>
      <LogoMark className="h-7 w-auto" />
      <span className="font-wordmark text-[1.55rem] font-normal leading-none tracking-[0.005em]">
        VisaGo
      </span>
    </span>
  );
}
