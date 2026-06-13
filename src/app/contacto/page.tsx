import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con VisaGo. Coméntanos tus inquietudes y te asesoramos sobre tu visado de estudio, turismo o trabajo para EEUU y España.",
  alternates: { canonical: "/contacto" },
};

const channels = [
  { label: "WhatsApp", value: SITE.phone, href: SITE.whatsapp },
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "Instagram", value: SITE.instagramHandle, href: SITE.instagram },
];

export default function ContactoPage() {
  return (
    <main>
      <PageHeader
        kicker="Contáctanos"
        title="Empecemos tu ruta."
        intro="Coméntanos tus inquietudes para mejorar nuestros servicios. Te respondemos por el canal que prefieras."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="container grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="kicker">Canales directos</p>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-5"
                    >
                      <span className="text-lg text-foreground">{c.value}</span>
                      <span className="kicker transition-colors group-hover:text-foreground">{c.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-muted">{SITE.location}</p>
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
    </main>
  );
}
