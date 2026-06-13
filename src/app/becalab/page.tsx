import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Prose } from "@/components/content/Prose";
import { Reveal } from "@/components/motion/Reveal";
import { cleanArticle } from "@/lib/article-utils";
import { becaLab } from "@/lib/articles";

export const metadata: Metadata = {
  title: "BecaLab — Becas para estudiar en España",
  description:
    "BecaLab, tu mentor inteligente para becas en España: diagnóstico de probabilidad de éxito, optimización de carta de motivación y CV con IA, y gestión de apostilla con VisaGo.",
  alternates: { canonical: "/becalab" },
};

export default function BecaLabPage() {
  return (
    <main>
      <PageHeader
        kicker="Recursos · BecaLab"
        title="Becas para estudiar en España"
        intro="Tu mentor inteligente para becas: del diagnóstico de probabilidad a la optimización de tus documentos con IA."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <Reveal>
            <Prose className="max-w-3xl">{cleanArticle(becaLab, { stripTitle: true })}</Prose>
          </Reveal>
        </div>
      </section>

      <CtaBanner title="Empieza tu beca con ventaja" subtitle="Combina la tecnología de BecaLab con la asesoría de VisaGo." />
    </main>
  );
}
