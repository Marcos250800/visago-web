import { Reveal } from "@/components/motion/Reveal";
import { RevealWords } from "@/components/motion/RevealWords";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { VerticalBeam } from "@/components/ui/VerticalBeam";
import { ContactMap } from "@/components/sections/ContactMap";
import { SITE } from "@/lib/site";

/** Sección Contacto / CTA final de la home. */
export function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden py-24 md:py-36">
      <SectionDivider />
      {/* Haz vertical que nace arriba y atraviesa la sección */}
      <VerticalBeam className="pointer-events-none absolute inset-y-0 left-[6%] md:left-[9%]" />
      <div className="container relative grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <ScrambleText text="Contáctanos" className="kicker" />
            <h2 className="mt-5 font-display text-display-sm font-medium">
              <RevealWords text="¿Empezamos tu ruta?" />
            </h2>
            <p className="mt-6 max-w-sm text-muted">
              Coméntanos tus inquietudes para mejorar nuestros servicios. Te
              respondemos por el canal que prefieras.
            </p>

            <div className="mt-8 space-y-3">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                Escríbenos por WhatsApp
                <span aria-hidden>→</span>
              </a>
              <div className="flex flex-col gap-1 pt-2 text-sm text-muted">
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-foreground">{SITE.email}</a>
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">{SITE.instagramHandle}</a>
                <span>{SITE.location}</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={0.1}>
            <ContactMap className="h-[340px] md:h-[460px]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
