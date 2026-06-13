"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Isotipo de VisaGo — recreación vectorial fiel del logo (ondas finas).
 * Líneas delgadas, en fase, proporción cuadrada. Usa currentColor → se adapta
 * al tema (blanco en oscuro, negro en claro).
 */

// Una línea de onda: 6 medios-periodos (3 ondas), amplitud ±2.2, ancho 72.
const WAVE =
  "M0,0 q6,-2.2 12,0 q6,2.2 12,0 q6,-2.2 12,0 q6,2.2 12,0 q6,-2.2 12,0 q6,2.2 12,0";
const COUNT = 11;
const GAP = 6.6;
const TOP = 7;
const STROKE = 1.7;
const VIEWBOX = "-2 1 76 79";

/** Versión estática (navbar, footer, favicon). */
export function LogoMark({ className, label = "VisaGo" }: { className?: string; label?: string }) {
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

/** Versión animada (ripple sutil de ondas). */
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
            animate={reduce ? { y: base } : { y: [base, base - 1.8, base, base + 1.8, base] }}
            transition={reduce ? undefined : { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.13 }}
          />
        );
      })}
    </svg>
  );
}
