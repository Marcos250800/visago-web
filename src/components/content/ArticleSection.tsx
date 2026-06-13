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
    <section className="relative bg-background py-16 md:py-24">
      {/* Malla "sticky": acompaña el scroll del artículo a la altura de pantalla */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="sticky top-0 h-screen w-full">
          <WaveMesh className="absolute inset-y-0 right-0 w-[55%] [mask-image:radial-gradient(ellipse_85%_82%_at_88%_50%,black,transparent_78%)]" />
        </div>
      </div>
      <div className="container relative">{children}</div>
    </section>
  );
}
