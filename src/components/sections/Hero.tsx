"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { LogoParticles } from "@/components/brand/LogoParticles";
import { Magnetic } from "@/components/motion/Magnetic";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Hero principal — "Tu ruta segura".
 * El logo se ensambla con partículas (interactivo). Profundidad con glow + grano.
 * El contenido hace parallax (se eleva y desvanece) al hacer scroll.
 */
export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="grain relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-background text-foreground"
    >
      {/* Profundidad: glow radial sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(55% 55% at 72% 38%, rgb(var(--foreground) / 0.08), transparent 70%)",
        }}
      />

      {/* Partículas que forman el logo */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40 md:left-auto md:right-[-4%] md:w-[58%] md:opacity-100">
        <LogoParticles className="h-full w-full" />
      </div>

      <motion.div style={{ y, opacity }} className="container relative z-10 flex flex-1 flex-col justify-center pt-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-background/40 px-3.5 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-kicker text-muted">
            Visados EEUU &amp; España
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.08 }}
          className="mt-7 max-w-[16ch] font-display text-display font-medium leading-[0.95]"
        >
          Tu ruta segura
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.18 }}
          className="mt-7 max-w-md text-balance text-lg text-muted"
        >
          Facilitamos el acceso a oportunidades internacionales con asesoría
          profesional y gestión completa de tu visa para estudiar, trabajar o
          viajar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.28 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Magnetic className="inline-block">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Solicitar asesoría
              <span aria-hidden>→</span>
            </a>
          </Magnetic>
          <Magnetic className="inline-block">
            <Link href="/servicios" className="btn-ghost">
              Ver servicios
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>

      <div className="container relative z-10 flex items-end justify-between pb-8 pt-10">
        <span className="kicker">{SITE.location}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="kicker flex items-center gap-2"
        >
          Scroll
          <span className="inline-block h-8 w-px animate-pulse bg-current opacity-40" />
        </motion.span>
      </div>
    </section>
  );
}
