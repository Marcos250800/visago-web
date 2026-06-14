import type { ReactElement } from "react";

/**
 * Isotipo de VisaGo (solo las ondas, SIN el wordmark) para imágenes generadas
 * con `next/og` (Satori). Mismas constantes que el SVG de marca en Logo.tsx,
 * pero la traslación va incrustada en cada `d` (M0,y) para no depender del
 * atributo `transform` dentro del renderer.
 */

const SEGMENTS = "q6,-2.2 12,0 q6,2.2 12,0 q6,-2.2 12,0 q6,2.2 12,0 q6,-2.2 12,0 q6,2.2 12,0";
const COUNT = 11;
const GAP = 6.6;
const TOP = 7;
const STROKE = 1.7;
// viewBox del isotipo: ancho 76 × alto 79.
const VB_W = 76;
const VB_H = 79;

/** Devuelve el isotipo como `<svg>` con la altura pedida (proporción fija). */
export function LogoSvg({ height, stroke = "#f5f5f5" }: { height: number; stroke?: string }): ReactElement {
  const width = (height * VB_W) / VB_H;
  return (
    <svg width={width} height={height} viewBox="-2 1 76 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: COUNT }).map((_, i) => (
        <path
          key={i}
          d={`M0,${TOP + i * GAP} ${SEGMENTS}`}
          fill="none"
          stroke={stroke}
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
