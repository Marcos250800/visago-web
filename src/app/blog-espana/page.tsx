import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Prose } from "@/components/content/Prose";
import { ArticleSection } from "@/components/content/ArticleSection";
import { Reveal } from "@/components/motion/Reveal";
import { cleanArticle } from "@/lib/article-utils";
import { blogEspana } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Visado de Estudio para España | Guía Completa",
  description:
    "Guía completa de los requisitos para estudiar en España siendo extranjero: requisitos académicos, visado de estudiante, seguro médico, homologación de títulos, alojamiento, recursos económicos e idioma.",
  alternates: { canonical: "/blog-espana" },
};

export default function BlogEspanaPage() {
  return (
    <main>
      <PageHeader
        kicker="Blog · España"
        title="Visado de Estudio para España"
        intro="Todo lo que necesitas saber sobre los requisitos para estudiar en España para extranjeros y los pasos para cumplir tu sueño."
      />

      <ArticleSection>
        <Reveal>
          <Prose className="max-w-3xl">{cleanArticle(blogEspana)}</Prose>
        </Reveal>
      </ArticleSection>

      <CtaBanner title="¿Listo para estudiar en España?" subtitle="Te ayudamos con el visado, la homologación y la búsqueda de tu curso." />
    </main>
  );
}
