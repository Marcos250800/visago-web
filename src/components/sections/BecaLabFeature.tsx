import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

/** BecaLab — módulo destacado en bloque de contraste (invertido). */
export function BecaLabFeature() {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-3xl bg-contrast px-8 py-14 text-contrast-fg md:px-16 md:py-20">
            <div className="relative z-10 grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <p className="font-mono text-[11px] uppercase tracking-kicker text-contrast-fg/50">
                  BecaLab
                </p>
                <h2 className="mt-5 text-balance font-display text-display-sm font-semibold">
                  Tu mentor inteligente para becas en España.
                </h2>
                <p className="mt-6 max-w-xl text-balance text-contrast-fg/70">
                  No solo te informa: actúa como mentor. Analiza tu perfil y te da una
                  probabilidad de éxito, optimiza tu carta de motivación y tu CV al
                  estándar europeo, y detecta si tus documentos necesitan apostilla.
                </p>
                <Link
                  href="/becalab"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-contrast-fg px-6 py-3 text-sm font-medium text-contrast transition-opacity duration-300 hover:opacity-85"
                >
                  Descubrir BecaLab
                  <span aria-hidden>→</span>
                </Link>
              </div>

              <div className="md:col-span-4 md:col-start-9">
                <ul className="space-y-3 text-sm">
                  {[
                    "Probabilidad de éxito (Alta / Media / Baja)",
                    "Optimización de carta de motivación con IA",
                    "Analizador de CV al estándar europeo",
                    "Detección de apostilla + conexión con VisaGo",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 border-t border-contrast-fg/15 pt-3">
                      <span aria-hidden className="mt-1 text-xs">◆</span>
                      <span className="text-contrast-fg/80">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
