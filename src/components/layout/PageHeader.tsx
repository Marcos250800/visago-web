import { Reveal } from "@/components/motion/Reveal";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { ParticleField } from "@/components/ui/ParticleField";

/** Cabecera estándar de páginas internas (deja espacio para la navbar fija). */
export function PageHeader({
  kicker,
  title,
  intro,
  cta,
}: {
  kicker: string;
  title: string;
  intro?: string;
  /** CTA principal opcional bajo el intro (p. ej. abrir la app de BecaLab). */
  cta?: { label: string; href: string; external?: boolean };
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-background pb-16 pt-36 md:pb-24 md:pt-44">
      {/* Malla de partículas sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_90%_at_72%_35%,black,transparent_80%)]"
      >
        <ParticleField className="h-full w-full" connect={120} />
      </div>

      <div className="container relative">
        <Reveal>
          <ScrambleText text={kicker} className="kicker" />
          <h1 className="mt-5 max-w-4xl font-display text-display-sm font-medium md:text-display">
            {title}
          </h1>
          {intro && <p className="mt-7 max-w-2xl text-balance text-lg text-muted">{intro}</p>}
          {cta && (
            <div className="mt-9">
              <a
                href={cta.href}
                {...(cta.external !== false
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="btn-primary"
              >
                {cta.label}
                <span aria-hidden>↗</span>
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
