"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SITE } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Hero principal — "Tu ruta segura".
 * El motivo gira en torno al logo (placeholder). Para sustituirlo por la
 * escena Spline real, reemplaza <HeroLogoMotif /> por el componente <Spline />.
 */
export function Hero() {
  return (
    <section className="grain relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-background text-foreground">
      <HeroLogoMotif />

      <div className="container relative z-10 flex flex-1 flex-col justify-center pt-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="kicker"
        >
          Asesoría y tramitación de visados · EEUU &amp; España
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.08 }}
          className="mt-6 max-w-[14ch] font-display text-display font-semibold"
        >
          Tu ruta segura
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.18 }}
          className="mt-8 max-w-prose text-balance text-lg text-muted"
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
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Solicitar asesoría
            <span aria-hidden>→</span>
          </a>
          <Link href="/servicios" className="btn-ghost">
            Ver servicios
          </Link>
        </motion.div>
      </div>

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

/**
 * Motivo placeholder centrado en el logo: órbitas + ruta + isotipo "V".
 * Usa currentColor para adaptarse al tema claro/oscuro.
 * >>> Sustituir por <Spline scene="/brand/scene.splinecode" /> cuando llegue. <<<
 */
function HeroLogoMotif() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center text-foreground"
    >
      <div className="absolute right-[-12%] top-1/2 h-[120vmin] w-[120vmin] -translate-y-1/2 opacity-60 md:right-[-4%] md:opacity-100">
        {/* Órbitas concéntricas */}
        <div className="absolute inset-0 animate-spin-slow rounded-full border border-current opacity-[0.08]" />
        <div className="absolute inset-[12%] rounded-full border border-current opacity-[0.06]" />
        <div className="absolute inset-[26%] animate-spin-slow rounded-full border border-dashed border-current opacity-[0.07]" />

        {/* Ruta + recorrido animado */}
        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
          <path
            d="M40,360 C140,300 120,140 220,120 C300,104 320,60 360,40"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.16"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <circle r="3.5" fill="currentColor">
            <animateMotion dur="9s" repeatCount="indefinite" path="M40,360 C140,300 120,140 220,120 C300,104 320,60 360,40" />
          </circle>
        </svg>

        {/* Isotipo central (placeholder del logo) */}
        <div className="absolute left-1/2 top-1/2 flex h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.2 }}
            className="grid h-full w-full place-items-center rounded-full border border-line"
          >
            <span className="font-display text-[clamp(2rem,7vmin,5rem)] font-bold tracking-tightest opacity-90">
              V
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
