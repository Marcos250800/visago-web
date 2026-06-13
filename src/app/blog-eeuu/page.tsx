import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Prose } from "@/components/content/Prose";
import { ArticleSection } from "@/components/content/ArticleSection";
import { Reveal } from "@/components/motion/Reveal";
import { cleanArticle } from "@/lib/article-utils";
import { blogEeuu } from "@/lib/articles";

export const metadata: Metadata = {
  title: "¿Cómo estudiar en Estados Unidos siendo extranjero?",
  description:
    "Requisitos y pasos para estudiar en EE.UU. siendo extranjero: visa F-1/M-1, admisión, pruebas de idioma, financiación, mudanza y desglose detallado de costes.",
  alternates: { canonical: "/blog-eeuu" },
};

export default function BlogEeuuPage() {
  return (
    <main>
      <PageHeader
        kicker="Blog · EE.UU."
        title="¿Cómo estudiar en Estados Unidos siendo extranjero?"
        intro="Requisitos académicos y administrativos, los pasos del proceso y cuánto cuesta estudiar en Estados Unidos."
      />

      <ArticleSection>
        <Reveal>
          <Prose className="max-w-3xl">{cleanArticle(blogEeuu, { stripTitle: true })}</Prose>
        </Reveal>
      </ArticleSection>

      <CtaBanner title="¿Sueñas con estudiar en EE.UU.?" subtitle="Gestionamos tu visa F-1/M-1 y te acompañamos en cada paso." />
    </main>
  );
}
