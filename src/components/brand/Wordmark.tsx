import { cn } from "@/lib/utils";
import { LogoMark } from "./Logo";

/**
 * Wordmark de VisaGo: isotipo (ondas finas) + nombre en Jost fina.
 * Se adapta al tema (foreground). Para pixel-perfect del lockup oficial,
 * el usuario puede dejar su SVG en public/brand/.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-[1.3rem] font-normal leading-none tracking-tight text-foreground",
        className,
      )}
    >
      <LogoMark className="h-7 w-auto" />
      <span className="mt-[1px]">VisaGo</span>
    </span>
  );
}
