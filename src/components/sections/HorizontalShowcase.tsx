"use client";

import { useRef } from "react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { LogoMark } from "@/components/brand/Logo";
import { SITE } from "@/lib/site";

type Card = {
  kicker: string;
  title: string;
  desc: string;
  href: string;
  external?: boolean;
};

const CARDS: Card[] = [
  {
    kicker: "Destino · España",
    title: "Estudiar en España",
    desc: "Visado de estudio, homologación de títulos, máster y formación profesional.",
    href: "/blog-espana",
  },
  {
    kicker: "Destino · EE.UU.",
    title: "Estudiar en EE.UU.",
    desc: "Visados F-1 / M-1, admisiones universitarias y planificación de costes.",
    href: "/blog-eeuu",
  },
  {
    kicker: "Recurso · BecaLab",
    title: "Becas con IA",
    desc: "Tu mentor inteligente para becas en España: probabilidad de éxito y optimización con IA.",
    href: "/becalab",
  },
  {
    kicker: "Empieza hoy",
    title: "Habla con un asesor",
    desc: "Cuéntanos tu caso y te asesoramos sin compromiso por WhatsApp.",
    href: SITE.whatsapp,
    external: true,
  },
];

/** Carrusel horizontal (scroll-snap) de destinos y recursos. */
export function HorizontalShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) =>
    trackRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });

  return (
    <section className="overflow-hidden border-t border-line bg-background py-24 md:py-36">
      <div className="container flex items-end justify-between gap-6">
        <Reveal>
          <p className="kicker">Destinos &amp; Recursos</p>
          <h2 className="mt-5 font-display text-display-sm font-medium">Explora tu ruta.</h2>
        </Reveal>
        <div className="hidden shrink-0 gap-2 md:flex">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Anterior"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Siguiente"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ paddingInline: "max(1.25rem, calc((100vw - 1280px) / 2 + 1.25rem))" }}
      >
        {CARDS.map((card) => {
          const Inner = (
            <>
              {/* Zona "imagen": gradiente monocromo + marca de agua del logo.
                  (Aquí se puede colocar una foto en escala de grises.) */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-card to-background" />
              <LogoMark className="pointer-events-none absolute -right-12 -top-10 h-52 w-52 text-foreground/[0.05] transition-transform duration-700 group-hover:scale-110 group-hover:text-foreground/[0.08]" />

              <div className="flex items-center justify-between">
                <span className="kicker">{card.kicker}</span>
                <span aria-hidden className="text-xl opacity-30 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl font-medium">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{card.desc}</p>
              </div>
            </>
          );
          const cls =
            "group relative flex aspect-[3/4] w-[78vw] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl border border-line p-7 transition-colors duration-300 hover:border-foreground/30 sm:w-[340px]";
          return card.external ? (
            <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer" className={cls}>
              {Inner}
            </a>
          ) : (
            <Link key={card.title} href={card.href} className={cls}>
              {Inner}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
