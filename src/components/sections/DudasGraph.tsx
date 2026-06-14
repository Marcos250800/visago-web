"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Node = {
  label: string;
  href: string;
  /** Punto base (%) donde acaba la línea / va el nodo. */
  x: number;
  y: number;
  side: "left" | "right";
};

/** Los 10 términos alrededor de "VisaGo" con su post de Instagram. */
const NODES: Node[] = [
  { label: "Solvencia económica", href: "https://www.instagram.com/p/DN12Tpg0MfE/", x: 32, y: 18, side: "left" },
  { label: "Homologación de Títulos", href: "https://www.instagram.com/p/DR3Q5X3iLod/", x: 30, y: 33, side: "left" },
  { label: "IPREM", href: "https://www.instagram.com/p/DRBWFeOiPTs/", x: 33, y: 48, side: "left" },
  { label: "NIE", href: "https://www.instagram.com/p/DPFiDWPCGGQ/?img_index=1", x: 33, y: 63, side: "left" },
  { label: "Curso FP", href: "https://www.instagram.com/p/DQIXUOQCFIf/", x: 34, y: 78, side: "left" },
  { label: "Trabajar con visado", href: "https://www.instagram.com/p/DW9_90WDDpg/", x: 68, y: 18, side: "right" },
  { label: "Seguro Médico", href: "https://www.instagram.com/p/DSyVwmujH9i/", x: 70, y: 33, side: "right" },
  { label: "¿Qué es una beca?", href: "https://www.instagram.com/p/DVM-ISijDQ_/?img_index=1", x: 70, y: 48, side: "right" },
  { label: "I-20", href: "https://www.instagram.com/p/DSGqqiICDx4/?img_index=1", x: 70, y: 63, side: "right" },
  { label: "Cupo Estudiantes extranjeros", href: "https://www.instagram.com/p/DOuWlNSCNnl/", x: 66, y: 78, side: "right" },
];

export function DudasGraph() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Resalta la línea activa y atenúa el resto (vía refs, sin re-render → no
  // interrumpe la animación de deriva).
  const highlight = (idx: number | null) => {
    lineRefs.current.forEach((ln, i) => {
      if (ln) ln.style.opacity = idx === null ? "0.22" : i === idx ? "0.9" : "0.06";
    });
    nodeRefs.current.forEach((nd, i) => {
      if (nd) nd.dataset.dim = idx === null || i === idx ? "false" : "true";
    });
  };

  // Animación tipo Obsidian: cada nodo deriva suavemente y su línea lo sigue.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const wrap = wrapRef.current;
    if (!wrap) return;

    let W = 1;
    let H = 1;
    const measure = () => {
      const r = wrap.getBoundingClientRect();
      W = r.width || 1;
      H = r.height || 1;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);

    const params = NODES.map((_, i) => ({
      ampX: 0.8 + (i % 3) * 0.5,
      ampY: 1.0 + (i % 4) * 0.45,
      spX: 0.35 + (i % 5) * 0.06,
      spY: 0.45 + (i % 3) * 0.05,
      ph: i * 1.7,
    }));

    let raf = 0;
    let t = 0;
    const frame = () => {
      t += 0.016;
      for (let i = 0; i < NODES.length; i++) {
        const p = params[i];
        const dxPct = Math.sin(t * p.spX + p.ph) * p.ampX;
        const dyPct = Math.cos(t * p.spY + p.ph) * p.ampY;
        const ln = lineRefs.current[i];
        if (ln) {
          ln.setAttribute("x2", String(NODES[i].x + dxPct));
          ln.setAttribute("y2", String(NODES[i].y + dyPct));
        }
        const nd = nodeRefs.current[i];
        if (nd) nd.style.transform = `translate(${(dxPct / 100) * W}px, ${(dyPct / 100) * H}px)`;
      }
      raf = requestAnimationFrame(frame);
    };

    // Solo anima cuando está en pantalla (y nunca en móvil: el grafo es lg+).
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !raf) raf = requestAnimationFrame(frame);
      else if (!entry.isIntersecting && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });
    io.observe(wrap);

    return () => {
      ro.disconnect();
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    /* Grafo radial animado, ahora también en móvil (texto más pequeño y con
       salto de línea en pantallas estrechas; contenedor más alto). */
    <div
      ref={wrapRef}
      className="relative mx-auto aspect-[4/5] w-full max-w-5xl md:aspect-[3/2] lg:aspect-[16/10]"
    >
      {/* Glow central sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full lg:h-40 lg:w-40"
        style={{ background: "radial-gradient(circle, rgb(var(--foreground) / 0.10), transparent 70%)" }}
      />

      {/* Líneas */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
        {NODES.map((n, i) => (
          <line
            key={n.label}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="rgb(var(--foreground))"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
            className="transition-opacity duration-300"
            style={{ opacity: 0.22 }}
          />
        ))}
      </svg>

      {/* Centro: VisaGo */}
      <span
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 font-wordmark text-4xl sm:text-5xl lg:text-7xl"
        style={{ WebkitTextStroke: "0.6px rgb(var(--background))" }}
      >
        VisaGo
      </span>

      {/* Nodos (términos) */}
      {NODES.map((n, i) => (
        <div
          key={n.label}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
          data-dim="false"
          className="absolute transition-opacity duration-300 data-[dim=true]:opacity-25"
          style={{ left: `${n.x}%`, top: `${n.y}%`, willChange: "transform" }}
        >
          <a
            href={n.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => highlight(i)}
            onMouseLeave={() => highlight(null)}
            style={{ transform: n.side === "left" ? "translate(-100%, -50%)" : "translateY(-50%)" }}
            className={cn(
              "group flex items-center gap-1.5 font-mono text-[10px] leading-tight tracking-tight text-foreground/85 transition-colors duration-300 hover:text-foreground sm:text-xs lg:gap-2 lg:text-[13px]",
              n.side === "left" ? "flex-row-reverse text-right" : "text-left"
            )}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current transition-transform duration-300 group-hover:scale-150" />
            <span className="max-w-[26vw] whitespace-normal border-b border-transparent transition-colors duration-300 group-hover:border-current lg:max-w-none lg:whitespace-nowrap">
              {n.label}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}
