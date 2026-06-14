"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { LogoMark } from "@/components/brand/Logo";
import { RevealWords } from "@/components/motion/RevealWords";
import { Tilt } from "@/components/motion/Tilt";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SITE } from "@/lib/site";

type Card = {
  kicker: string;
  title: string;
  desc: string;
  href: string;
  external?: boolean;
  /** Foto opcional (se aplica desaturación parcial + degradado). */
  image?: string;
};

const CARDS: Card[] = [
  {
    kicker: "Destino · España",
    title: "Estudiar en España",
    desc: "Visado de estudio, homologación de títulos, máster y formación profesional.",
    href: "/blog-espana",
    image: "/showcase/espana.webp",
  },
  {
    kicker: "Destino · EE.UU.",
    title: "Estudiar en EE.UU.",
    desc: "Visados F-1 / M-1, admisiones universitarias y planificación de costes.",
    href: "/blog-eeuu",
    image: "/showcase/eeuu.webp",
  },
  {
    kicker: "Recurso · BecaLab",
    title: "Becas con IA",
    desc: "Tu mentor inteligente para becas en España: probabilidad de éxito y optimización con IA.",
    href: "/becalab",
    image: "/showcase/becalab.webp",
  },
  {
    kicker: "Empieza hoy",
    title: "Habla con un asesor",
    desc: "Cuéntanos tu caso y te asesoramos sin compromiso por WhatsApp.",
    href: SITE.whatsapp,
    external: true,
    image: "/showcase/asesor.webp",
  },
];

const wrapCls =
  "group relative h-[58vh] max-h-[560px] min-h-[400px] w-[80vw] shrink-0 sm:w-[380px]";
// `active:` replica el efecto del hover de PC al TOCAR la tarjeta en móvil.
const innerCls =
  "relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-line p-7 transition-colors duration-300 hover:border-foreground/30 active:border-foreground/30";

function CardContent({ card }: { card: Card }) {
  return (
    <>
      {/* Base (placeholder) siempre presente */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-card to-background" />
      {card.image && (
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.image}
            alt=""
            onError={(e) => {
              const w = e.currentTarget.parentElement;
              if (w) w.style.display = "none";
            }}
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-smooth [filter:grayscale(0.55)_contrast(1.03)] group-hover:scale-[1.06] group-active:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
      )}
      <LogoMark className="pointer-events-none absolute -right-12 -top-10 h-52 w-52 text-foreground/[0.05] transition-transform duration-700 group-hover:scale-110 group-hover:text-foreground/[0.08] group-active:scale-110 group-active:text-foreground/[0.08]" />

      <div className="flex items-center justify-between">
        <span className="kicker !text-black/75 [text-shadow:0_1px_10px_rgb(255_255_255_/_0.55)]">{card.kicker}</span>
        <span aria-hidden className="text-xl opacity-30 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 group-active:translate-x-1 group-active:opacity-100">
          →
        </span>
      </div>
      <div>
        <h3 className="font-display text-3xl font-medium">{card.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{card.desc}</p>
      </div>
    </>
  );
}

function CardLink({ card }: { card: Card }) {
  const inner = <CardContent card={card} />;
  return card.external ? (
    <a href={card.href} target="_blank" rel="noopener noreferrer" className={innerCls}>
      {inner}
    </a>
  ) : (
    <Link href={card.href} className={innerCls}>
      {inner}
    </Link>
  );
}

/**
 * Carrusel "Destinos & Recursos".
 *  - Escritorio: "pinneado" estilo Operator (scroll vertical → desplaza la fila
 *    en horizontal mientras la sección queda fija).
 *  - Móvil: scroll horizontal nativo con el dedo (scroll-snap, sin barra). El
 *    efecto del hover se replica al TOCAR (variantes `active:`).
 */
export function HorizontalShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    const t = setTimeout(measure, 400);
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const gutter = "max(1.25rem, calc((100vw - 1280px) / 2 + 1.25rem))";

  return (
    <section
      ref={sectionRef}
      style={{ "--track-d": `${distance}px` } as React.CSSProperties}
      className="relative bg-background lg:h-[calc(100svh_+_var(--track-d))]"
    >
      <SectionDivider />
      <div className="py-20 lg:sticky lg:top-0 lg:flex lg:h-[100svh] lg:flex-col lg:justify-center lg:overflow-hidden">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <ScrambleText text="Destinos & Recursos" className="kicker" />
              <h2 className="mt-5 font-display text-display-sm font-medium">
                <RevealWords text="Explora tu ruta." />
              </h2>
            </div>
            <span className="shrink-0 text-sm text-muted">
              <span className="hidden lg:inline">Desplázate ↓</span>
              <span className="lg:hidden">Desliza →</span>
            </span>
          </div>
          {/* Barra de progreso: solo escritorio (ligada al scroll "pinneado") */}
          <div className="mt-7 hidden h-px w-full overflow-hidden bg-line lg:block">
            <motion.div style={{ width: progress }} className="h-px bg-foreground" />
          </div>
        </div>

        {/* ESCRITORIO: fila "pinneada" */}
        <motion.div
          ref={trackRef}
          style={{ x, paddingInline: gutter }}
          className="mt-10 hidden gap-5 lg:flex"
        >
          {CARDS.map((card) => (
            <Tilt key={card.title} className={wrapCls} max={5}>
              <CardLink card={card} />
            </Tilt>
          ))}
        </motion.div>

        {/* MÓVIL: swipe horizontal con el dedo. `isolate` crea el contexto de
            apilamiento que en PC aporta Tilt → la imagen (-z-10) queda visible. */}
        <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 lg:hidden">
          {CARDS.map((card) => (
            <div key={card.title} className={`${wrapCls} snap-center isolate`}>
              <CardLink card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
