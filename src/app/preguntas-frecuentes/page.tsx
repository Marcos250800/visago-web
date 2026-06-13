import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqAccordion } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Resolvemos tus dudas sobre tipos de visados, tiempos de tramitación, seguimiento, cursos, entrevistas, legalización de documentos y más.",
  alternates: { canonical: "/preguntas-frecuentes" },
};

export default function FaqPage() {
  return (
    <main>
      <PageHeader
        kicker="Preguntas frecuentes"
        title="Todo lo que necesitas saber."
        intro="Las dudas más habituales sobre nuestros servicios de tramitación de visados. ¿No encuentras la tuya? Escríbenos."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="container max-w-3xl">
          <FaqAccordion />
        </div>
      </section>

      <CtaBanner title="¿Sigues con dudas?" subtitle="Hablamos por WhatsApp y te ayudamos en minutos." />
    </main>
  );
}
