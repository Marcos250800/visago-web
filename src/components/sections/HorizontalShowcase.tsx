"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { LogoMark } from "@/components/brand/Logo";
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
    // image: "/showcase/espana.jpg",
  },
  {
    kicker: "Destino · EE.UU.",
    title: "Estudiar en EE.UU.",
    desc: "Visados F-1 / M-1, admisiones universitarias y planificación de costes.",
    href: "/blog-eeuu",
    // image: "/showcase/eeuu.jpg",
  },
  {
    kicker: "Recurso · BecaLab",
    title: "Becas con IA",
    desc: "Tu mentor inteligente para becas en España: probabilidad de éxito y optimización con IA.",
    href: "/becalab",
    // image: "/showcase/becalab.jpg",
  },
  {
    kicker: "Empieza hoy",
    title: "Habla con un asesor",
    desc: "Cuéntanos tu caso y te asesoramos sin compromiso por WhatsApp.",
    href: SITE.whatsapp,
    external: true,
  },
];

/**
 * Carrusel "pinneado" estilo Operator: al hacer scroll vertical, la fila de
 * tarjetas se desplaza en horizontal mientras la sección queda fija.
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
      style={{ height: `calc(100svh + ${distance}px)` }}
      className="relative border-t border-line bg-background"
    >
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden py-20">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="kicker">Destinos &amp; Recursos</p>
              <h2 className="mt-5 font-display text-display-sm font-medium">Explora tu ruta.</h2>
            </div>
            <span className="hidden shrink-0 text-sm text-muted md:block">Desplázate ↓</span>
          </div>
          <div className="mt-7 h-px w-full overflow-hidden bg-line">
            <motion.div style={{ width: progress }} className="h-px bg-foreground" />
          </div>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x, paddingInline: gutter }}
          className="mt-10 flex gap-5"
        >
          {CARDS.map((card) => {
            const Inner = (
              <>
                {card.image ? (
                  <div className="absolute inset-0 -z-10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={card.image}
                      alt=""
                      className="h-full w-full object-cover [filter:grayscale(0.55)_contrast(1.03)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
                  </div>
                ) : (
                  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-card to-background" />
                )}
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
              "group relative flex h-[58vh] max-h-[560px] min-h-[400px] w-[80vw] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-line p-7 transition-colors duration-300 hover:border-foreground/30 sm:w-[380px]";
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
        </motion.div>
      </div>
    </section>
  );
}
