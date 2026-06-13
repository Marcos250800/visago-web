import type { ReactNode } from "react";
import { WaveMesh } from "@/components/ui/WaveMesh";

/**
 * Contenedor del cuerpo de las páginas de contenido (blogs, recursos, legal).
 * Mantiene el texto a la izquierda (max-w en el hijo) y rellena el margen
 * derecho —vacío en pantallas anchas— con una malla de ondas interactiva
 * (reacciona al cursor), oculta en móvil para no interferir con la lectura.
 */
export function ArticleSection({ children }: { children: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <WaveMesh className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] [mask-image:radial-gradient(ellipse_82%_78%_at_88%_50%,black,transparent_76%)] lg:block" />
      <div className="container relative">{children}</div>
    </section>
  );
}
