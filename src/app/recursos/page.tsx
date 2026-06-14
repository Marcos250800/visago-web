import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { DudasGraph } from "@/components/sections/DudasGraph";

export const metadata: Metadata = {
  title: "Recursos — Dudas en un minuto",
  description:
    "Resuelve tus dudas sobre visados y estudios en el extranjero en un minuto: toca un término y te llevamos al contenido de VisaGo en Instagram.",
  alternates: { canonical: "/recursos" },
};

export default function RecursosPage() {
  return (
    <main>
      <PageHeader
        kicker="Recursos"
        title="Dudas en un minuto"
        intro="Toca un término y resuélvelo en un minuto con nuestras publicaciones de Instagram."
      />

      <section className="relative overflow-hidden bg-background py-16 md:py-24">
        <div className="container">
          <DudasGraph />
        </div>
      </section>

      <CtaBanner
        title="¿Tu duda necesita más de un minuto?"
        subtitle="Cuéntanos tu caso y te asesoramos sin compromiso."
      />
    </main>
  );
}
