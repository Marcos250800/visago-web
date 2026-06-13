import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { RevealWords } from "@/components/motion/RevealWords";
import { Tilt } from "@/components/motion/Tilt";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ParticleField } from "@/components/ui/ParticleField";
import { LogoMarkAnimated } from "@/components/brand/Logo";
import { SERVICES, SERVICES_INTRO } from "@/lib/content";

/** Servicios — grid de los 7 servicios (texto verbatim). */
export function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-background py-24 md:py-36">
      <SectionDivider />
      {/* Malla de partículas que rellena la zona derecha de la cabecera */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_62%_85%_at_76%_28%,black,transparent_74%)]"
      >
        <ParticleField className="h-full w-full" connect={130} />
      </div>

      <div className="container relative">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="kicker">Servicios</p>
            </Reveal>
            <h2 className="mt-5 max-w-2xl text-balance font-display text-display-sm font-medium">
              <RevealWords text={SERVICES_INTRO} />
            </h2>
          </div>

          {/* Panel derecho: isotipo animado + índice + CTA (el botón ya no flota) */}
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.1}>
              <div className="relative flex flex-col items-start gap-6 rounded-2xl border border-line bg-card/40 p-7 backdrop-blur-sm">
                <LogoMarkAnimated className="h-12 w-12 text-foreground/70" />
                <span className="font-mono text-xs uppercase tracking-kicker text-muted">
                  01 — 0{SERVICES.length}
                </span>
                <Link href="/servicios" className="btn-ghost">
                  Ver todos los servicios
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.06} className="group h-full">
              <Tilt className="h-full" max={6}>
              <Link
                href={`/servicios#${s.id}`}
                className="flex h-full flex-col justify-between rounded-2xl border border-line bg-background p-7 transition-colors duration-300 hover:bg-contrast hover:text-contrast-fg"
              >
                <div className="flex items-start justify-between">
                  <span className="kicker transition-colors group-hover:text-contrast-fg/60">{s.index}</span>
                  <span className="text-lg opacity-30 transition-opacity group-hover:opacity-100" aria-hidden>↗</span>
                </div>
                <div className="mt-16">
                  <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted transition-colors group-hover:text-contrast-fg/70">
                    {s.description}
                  </p>
                </div>
              </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
