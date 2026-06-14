import type { ReactNode } from "react";
import { WaveMesh } from "@/components/ui/WaveMesh";

/**
 * Contenedor del cuerpo de las páginas de contenido (blogs, recursos, legal).
 * Mantiene el texto a la izquierda (max-w en el hijo). Por defecto el fondo es
 * la malla de ondas interactiva a todo el ancho, con la máscara que la desvanece
 * sobre la columna de texto para no tocar las letras. Se puede pasar otro fondo
 * (`background`) —p. ej. el shader de aurora en BecaLab—, que se monta una sola
 * vez y es visible en escritorio Y móvil (el propio fondo se adapta).
 */
export function ArticleSection({
  children,
  background,
}: {
  children: ReactNode;
  background?: ReactNode;
}) {
  return (
    <section className="relative bg-background py-16 md:py-24">
      {background ? (
        /* Fondo personalizado (p. ej. shader BecaLab): un solo montaje, visible
           en escritorio Y móvil. Se adapta él mismo a cada tamaño. */
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="sticky top-0 h-screen w-full">{background}</div>
        </div>
      ) : (
        <>
          {/* Fondo "sticky" (ESCRITORIO): acompaña el scroll a la altura de pantalla */}
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
            <div className="sticky top-0 h-screen w-full">
              <WaveMesh className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_58%_92%_at_87%_50%,black_36%,transparent_82%)]" />
            </div>
          </div>

          {/* Fondo "sticky" (MÓVIL): malla tenue a pantalla completa, detrás del texto */}
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.25] lg:hidden">
            <div className="sticky top-0 h-screen w-full">
              <WaveMesh className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_92%_80%_at_50%_45%,black,transparent_96%)]" />
            </div>
          </div>
        </>
      )}
      <div className="container relative">{children}</div>
    </section>
  );
}
