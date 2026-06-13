"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SITE } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Hero principal — "Tu ruta segura".
 * Fondo oscuro (logo en negativo). El motivo SVG animado de "ruta"
 * actúa como slot provisional hasta integrar la escena Spline 3D real.
 */
export function Hero() {
  return (
    <section className="grain relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-ink text-paper">
      {/* Motivo de ruta animado (placeholder de la escena Spline) */}
      <RouteMotif />

      <div className="container relative z-10 flex flex-1 flex-col justify-center pt-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="kicker text-neutral-400"
        >
          Asesoría y tramitación de visados · EEUU &amp; España
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.08 }}
          className="mt-6 max-w-[14ch] font-display text-display font-semibold text-paper"
        >
          Tu ruta segura
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.18 }}
          className="mt-8 max-w-prose text-balance text-lg text-neutral-300"
        >
          Facilitamos el acceso a oportunidades internacionales con asesoría
          profesional y gestión completa de tu visa para estudiar, trabajar o
          viajar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.28 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-neutral-200"
          >
            Solicitar asesoría
            <span aria-hidden>→</span>
          </a>
          <Link
            href="/servicios"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/25 px-6 py-3 text-sm font-medium text-paper transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-ink"
          >
            Ver servicios
          </Link>
        </motion.div>
      </div>

      {/* Pie del hero: localización + scroll cue */}
      <div className="container relative z-10 flex items-end justify-between pb-8 pt-10">
        <span className="kicker text-neutral-500">{SITE.location}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="kicker flex items-center gap-2 text-neutral-500"
        >
          Scroll
          <span className="inline-block h-8 w-px animate-pulse bg-neutral-600" />
        </motion.span>
      </div>
    </section>
  );
}

/** Motivo SVG monocromo: órbitas + ruta punteada con punto en movimiento. */
function RouteMotif() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-[0.5]"
    >
      <div className="absolute right-[-10%] top-1/2 h-[120vmin] w-[120vmin] -translate-y-1/2">
        {/* Órbitas concéntricas */}
        <div className="absolute inset-0 animate-spin-slow rounded-full border border-paper/10" />
        <div className="absolute inset-[12%] rounded-full border border-paper/[0.07]" />
        <div className="absolute inset-[26%] animate-spin-slow rounded-full border border-dashed border-paper/[0.08]" />
        {/* Ruta punteada con recorrido */}
        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
          <path
            d="M40,360 C140,300 120,140 220,120 C300,104 320,60 360,40"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <circle r="4" fill="#fff">
            <animateMotion
              dur="9s"
              repeatCount="indefinite"
              path="M40,360 C140,300 120,140 220,120 C300,104 320,60 360,40"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
}
