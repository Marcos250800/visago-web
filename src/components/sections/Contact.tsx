import { Reveal } from "@/components/motion/Reveal";
import { RevealWords } from "@/components/motion/RevealWords";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { FlowPaths } from "@/components/ui/FlowPaths";
import { ContactForm } from "@/components/sections/ContactForm";
import { SITE } from "@/lib/site";

/** Sección Contacto / CTA final de la home. */
export function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-background py-24 md:py-36">
      <SectionDivider />
      <FlowPaths
        className="pointer-events-none absolute inset-0 text-foreground [mask-image:radial-gradient(ellipse_55%_70%_at_26%_55%,black,transparent_72%)]"
        mirror
      />
      <div className="container relative grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <p className="kicker">Contáctanos</p>
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
            <div className="rounded-2xl border border-line bg-card p-7 md:p-9">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
