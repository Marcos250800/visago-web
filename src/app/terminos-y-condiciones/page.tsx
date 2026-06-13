import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Prose } from "@/components/content/Prose";
import { ArticleSection } from "@/components/content/ArticleSection";
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

      <ArticleSection>
        <Prose className="max-w-3xl">{cleanArticle(terminos)}</Prose>
      </ArticleSection>
    </main>
  );
}
