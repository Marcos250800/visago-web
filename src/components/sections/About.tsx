import { Reveal } from "@/components/motion/Reveal";
import { ABOUT } from "@/lib/content";

/** Sección "Sobre nosotros" — texto verbatim de la web actual, en clave editorial. */
export function About() {
  return (
    <section id="sobre-nosotros" className="bg-paper py-24 md:py-36">
      <div className="container grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="kicker">{ABOUT.heading}</p>
            <p className="mt-6 font-display text-display-sm font-semibold text-ink">
              Empresa online
              <br />
              con sede en Suiza.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <Reveal delay={0.1}>
            <p className="text-balance text-xl leading-relaxed text-neutral-700 md:text-2xl">
              {ABOUT.body}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
