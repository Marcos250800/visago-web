import type { ReactNode } from "react";
import { FlowPaths } from "@/components/ui/FlowPaths";

/**
 * Contenedor del cuerpo de las páginas de contenido (blogs, legal).
 * Mantiene el texto a la izquierda (max-w en el hijo) y rellena el margen
 * derecho —vacío en pantallas anchas— con líneas que fluyen (eco del logo),
 * ocultas en móvil para no interferir con la lectura.
 */
export function ArticleSection({ children }: { children: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <FlowPaths
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] text-foreground [mask-image:radial-gradient(ellipse_70%_75%_at_82%_45%,black,transparent_72%)] lg:block"
        count={18}
      />
      <div className="container relative">{children}</div>
    </section>
  );
}
