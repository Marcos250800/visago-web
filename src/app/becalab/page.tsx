import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Prose } from "@/components/content/Prose";
import { ArticleSection } from "@/components/content/ArticleSection";
import { ShaderBackground } from "@/components/ui/ShaderBackground";
import { Reveal } from "@/components/motion/Reveal";
import { cleanArticle } from "@/lib/article-utils";
import { becaLab } from "@/lib/articles";
import { SITE } from "@/lib/site";

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
        cta={{ label: "Abrir BecaLab", href: SITE.becalabApp }}
      />

      <ArticleSection
        background={
          <ShaderBackground className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_115%_65%_at_50%_30%,black_20%,transparent_80%)] lg:[mask-image:radial-gradient(ellipse_58%_92%_at_87%_50%,black_36%,transparent_82%)]" />
        }
      >
        <Reveal>
          <Prose className="max-w-3xl">{cleanArticle(becaLab, { stripTitle: true })}</Prose>
        </Reveal>
      </ArticleSection>

      <CtaBanner
        title="Empieza tu beca con ventaja"
        subtitle="Combina la tecnología de BecaLab con la asesoría de VisaGo."
        cta={{ label: "Abrir BecaLab", href: SITE.becalabApp }}
      />
    </main>
  );
}
