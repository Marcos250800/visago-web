"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Línea-guía vertical con un haz de luz que desciende de arriba abajo en bucle.
 * Nace en el borde superior (parece venir de arriba) y atraviesa el contenedor.
 * Theme-aware (usa los tokens foreground/line) y respeta prefers-reduced-motion
 * (se queda como una línea estática tenue).
 */
export function VerticalBeam({
  className,
  duration = 4.5,
  repeatDelay = 1.4,
}: {
  className?: string;
  duration?: number;
  repeatDelay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={className} aria-hidden>
      {/* Guía estática tenue */}
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-line to-transparent" />

      {/* Haz que cae */}
      {!reduce && (
        <motion.div
          className="absolute left-0 h-28 w-px -translate-x-px bg-gradient-to-b from-transparent via-foreground to-transparent"
          style={{ boxShadow: "0 0 14px 1px rgb(var(--foreground) / 0.45)" }}
          initial={{ top: "-18%", opacity: 0 }}
          animate={{ top: ["-18%", "118%"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay,
            ease: "easeIn",
            times: [0, 0.12, 0.88, 1],
          }}
        />
      )}
    </div>
  );
}
