"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Líneas que fluyen (SVG) — eco del isotipo de ondas de VisaGo.
 * Capa de fondo sutil para rellenar zonas vacías sin recargar. Hereda el color
 * vía currentColor (theme-aware: el contenedor define `text-…`), y respeta
 * prefers-reduced-motion (se queda estática). GPU-composited, muy ligera.
 */
function PathGroup({
  position,
  count,
  animate,
}: {
  position: number;
  count: number;
  animate: boolean;
}) {
  const paths = Array.from({ length: count }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${
      312 - i * 5 * position
    } ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${
      470 - i * 6
    } ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.035,
  }));

  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 696 316"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={0.06 + path.id * 0.016}
          initial={animate ? { pathLength: 0.3, opacity: 0.5 } : false}
          animate={
            animate
              ? { pathLength: 1, opacity: [0.18, 0.42, 0.18], pathOffset: [0, 1, 0] }
              : undefined
          }
          transition={
            animate
              ? {
                  duration: 22 + (path.id % 6) * 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }
              : undefined
          }
        />
      ))}
    </svg>
  );
}

export function FlowPaths({
  className,
  count = 22,
  mirror = false,
}: {
  className?: string;
  count?: number;
  /** Dibuja además el grupo espejo (flujo en ambas direcciones). */
  mirror?: boolean;
}) {
  const reduce = useReducedMotion();
  const animate = !reduce;

  return (
    <div className={className} aria-hidden>
      <div className="absolute inset-0">
        <PathGroup position={1} count={count} animate={animate} />
      </div>
      {mirror && (
        <div className="absolute inset-0">
          <PathGroup position={-1} count={count} animate={animate} />
        </div>
      )}
    </div>
  );
}
