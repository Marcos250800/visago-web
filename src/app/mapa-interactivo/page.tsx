import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { MapaInteractivo } from "@/components/sections/MapaInteractivo";

export const metadata: Metadata = {
  title: "Recursos — Mapa interactivo",
  description:
    "Explora el globo y descubre las universidades públicas de España con enlace directo a su web oficial.",
  alternates: { canonical: "/mapa-interactivo" },
};

export default function MapaInteractivoPage() {
  return (
    <main>
      <PageHeader
        kicker="Recursos"
        title="Mapa interactivo"
        intro="Explora el globo y toca España para ver las universidades públicas y su web oficial."
      />

      <section className="relative overflow-hidden bg-background py-16 md:py-24">
        <div className="container">
          <MapaInteractivo />
        </div>
      </section>

      <CtaBanner
        title="¿Te ayudamos a elegir destino?"
        subtitle="Cuéntanos tu caso y te asesoramos sin compromiso."
      />
    </main>
  );
}
