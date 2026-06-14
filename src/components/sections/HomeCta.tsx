import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { SITE } from "@/lib/site";

/**
 * Banda CTA de cierre de la home. Panel invertido (`bg-contrast`): blanco sobre
 * tema oscuro, negro sobre tema claro. (La home no tenía CTA final.)
 */
export function HomeCta() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-3xl bg-contrast px-8 py-20 text-center text-contrast-fg md:px-16 md:py-28">
            <ScrambleText
              text="Empieza hoy"
              className="relative font-mono text-[11px] uppercase tracking-kicker text-contrast-fg/50"
            />
            <h2 className="relative mx-auto mt-5 max-w-2xl text-balance font-display text-display-sm font-semibold">
              ¿Empezamos tu ruta?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-balance text-lg text-contrast-fg/70">
              Cuéntanos tu caso y te asesoramos sin compromiso.
            </p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
              <Magnetic className="inline-block">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-contrast-fg px-6 py-3 text-sm font-medium text-contrast transition-opacity duration-300 hover:opacity-85"
                >
                  Solicitar asesoría
                  <span aria-hidden>→</span>
                </a>
              </Magnetic>
              <Magnetic className="inline-block">
                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-contrast-fg/30 px-6 py-3 text-sm font-medium text-contrast-fg transition-colors duration-300 hover:bg-contrast-fg hover:text-contrast"
                >
                  Ver servicios
                </Link>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
