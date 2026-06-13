import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Prose } from "@/components/content/Prose";
import { cleanArticle } from "@/lib/article-utils";
import { terminos } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y Condiciones del Servicio y Política de Privacidad de VisaGo, conforme a la legislación suiza (LPD/OPDo).",
  alternates: { canonical: "/terminos-y-condiciones" },
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  return (
    <main>
      <PageHeader kicker="Legal" title="Términos y Condiciones" />

      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <Prose className="max-w-3xl">{cleanArticle(terminos)}</Prose>
        </div>
      </section>
    </main>
  );
}
