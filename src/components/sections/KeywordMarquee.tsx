import { Marquee } from "@/components/ui/Marquee";
import { LogoMark } from "@/components/brand/Logo";

const KEYWORDS = [
  "Visado de Estudio",
  "Visado de Turismo",
  "Visado de Trabajo",
  "Homologación de Títulos",
  "Apostilla de la Haya",
  "Seguro Médico",
  "Búsqueda de Cursos",
  "EEUU",
  "España",
];

/** Tira en movimiento con palabras clave de marca (factuales). */
export function KeywordMarquee() {
  return (
    <section className="border-y border-line bg-background py-5" aria-hidden>
      <Marquee pauseOnHover>
        {KEYWORDS.map((k) => (
          <span key={k} className="mx-8 inline-flex items-center gap-8">
            <span className="font-display text-lg uppercase tracking-wide text-muted md:text-xl">{k}</span>
            <LogoMark className="h-3 w-auto text-foreground/30" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
