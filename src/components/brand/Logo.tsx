"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Isotipo de VisaGo — recreación vectorial del logo (ondas).
 * Usa currentColor → blanco en tema oscuro, negro en claro, automáticamente.
 */

// Una línea de onda: 6 medios-periodos (q) → 72 de ancho, amplitud ±3.2
const WAVE =
  "M0,0 q6,-3.2 12,0 q6,3.2 12,0 q6,-3.2 12,0 q6,3.2 12,0 q6,-3.2 12,0 q6,3.2 12,0";
const COUNT = 11;
const GAP = 5.4;
const TOP = 8;
const STROKE = 3.6;
const VIEWBOX = "-4 0 80 70";

/** Versión estática (navbar, footer, favicon). */
export function LogoMark({
  className,
  label = "VisaGo",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <svg viewBox={VIEWBOX} role="img" aria-label={label} className={cn("text-current", className)}>
      {Array.from({ length: COUNT }).map((_, i) => (
        <path
          key={i}
          d={WAVE}
          transform={`translate(0 ${TOP + i * GAP})`}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

/** Versión animada (hero): las ondas riplean en secuencia, como agua/bandera. */
export function LogoMarkAnimated({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg viewBox={VIEWBOX} role="img" aria-label="VisaGo" className={cn("text-current", className)}>
      {Array.from({ length: COUNT }).map((_, i) => {
        const base = TOP + i * GAP;
        return (
          <motion.path
            key={i}
            d={WAVE}
            fill="none"
            stroke="currentColor"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ y: base }}
            animate={reduce ? { y: base } : { y: [base, base - 2.4, base, base + 2.4, base] }}
            transition={
              reduce
                ? undefined
                : { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.13 }
            }
          />
        );
      })}
    </svg>
  );
}
