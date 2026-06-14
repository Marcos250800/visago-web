import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/lib/site";

const SOLID =
  "inline-flex items-center justify-center gap-2 rounded-full bg-contrast-fg px-6 py-3 text-sm font-medium text-contrast transition-opacity duration-300 hover:opacity-85";
const GHOST =
  "inline-flex items-center justify-center gap-2 rounded-full border border-contrast-fg/30 px-6 py-3 text-sm font-medium text-contrast-fg transition-colors duration-300 hover:bg-contrast-fg hover:text-contrast";

/** Banda CTA reutilizable al pie de las páginas internas. */
export function CtaBanner({
  title = "¿Empezamos tu ruta?",
  subtitle = "Cuéntanos tu caso y te asesoramos sin compromiso.",
  cta,
}: {
  title?: string;
  subtitle?: string;
  /** Acción principal opcional (p. ej. abrir la app de BecaLab). Si se pasa,
      "Solicitar asesoría" pasa a secundaria para no competir por la atención. */
  cta?: { label: string; href: string };
}) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-3xl bg-contrast px-8 py-16 text-center text-contrast-fg md:px-16 md:py-20">
            <h2 className="relative mx-auto max-w-2xl text-balance font-display text-display-sm font-semibold">
              {title}
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-contrast-fg/70">{subtitle}</p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
              {cta && (
                <a href={cta.href} target="_blank" rel="noopener noreferrer" className={SOLID}>
                  {cta.label}
                  <span aria-hidden>↗</span>
                </a>
              )}
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={cta ? GHOST : SOLID}
              >
                Solicitar asesoría
                <span aria-hidden>→</span>
              </a>
              <a href={`mailto:${SITE.email}`} className={GHOST}>
                {SITE.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
