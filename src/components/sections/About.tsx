import { Reveal } from "@/components/motion/Reveal";
import { RevealWords } from "@/components/motion/RevealWords";
import { FlowPaths } from "@/components/ui/FlowPaths";
import { ABOUT } from "@/lib/content";

/** Sección "Sobre nosotros" — texto verbatim de la web actual, en clave editorial. */
export function About() {
  return (
    <section id="sobre-nosotros" className="relative overflow-hidden bg-background py-24 md:py-36">
      {/* Líneas que fluyen (eco del logo) en el hueco entre columnas */}
      <FlowPaths
        className="pointer-events-none absolute inset-0 text-foreground [mask-image:radial-gradient(ellipse_60%_75%_at_72%_45%,black,transparent_72%)]"
        mirror
      />
      <div className="container relative grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="kicker">{ABOUT.heading}</p>
          </Reveal>
          <p className="mt-6 font-display text-display-sm font-medium">
            <RevealWords text="Empresa online con sede en Suiza." />
          </p>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <Reveal delay={0.1}>
            <p className="text-balance text-xl leading-relaxed text-muted md:text-2xl">
              {ABOUT.body}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
