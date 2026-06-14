"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme/ThemeProvider";

/**
 * Globo (cobe) en rotación continua con un marcador en España.
 *  - Gira siempre (no se para al pasar el cursor).
 *  - Se puede arrastrar para girarlo; al soltar mantiene inercia y vuelve poco
 *    a poco a su ritmo base.
 *  - Un toque/clic (sin arrastrar) → `onSelect` (abre el mapa).
 * Theme-aware y respeta prefers-reduced-motion.
 */
export function InteractiveGlobe({
  onSelect,
  className,
}: {
  onSelect?: () => void;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const light = theme !== "light"; // tema oscuro → globo claro
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const baseVel = reduce ? 0 : 0.004; // ritmo base

    let globe: ReturnType<typeof createGlobe> | null = null;
    let raf = 0;
    let phi = 0;
    const theta = 0.28;
    let vel = 0; // inercia extra (decae hasta 0 → vuelve al ritmo base)
    let dragging = false;
    let lastX = 0;
    let lastDx = 0;
    let moved = 0;

    const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));

    const init = () => {
      const width = canvas.offsetWidth;
      if (!width || globe) return;
      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi,
        theta,
        dark: light ? 0 : 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: light ? 8 : 6,
        baseColor: light ? [1, 1, 1] : [0.13, 0.13, 0.14],
        markerColor: light ? [0.04, 0.04, 0.06] : [0.97, 0.97, 0.95],
        glowColor: light ? [0.9, 0.9, 0.9] : [0.18, 0.18, 0.2],
        opacity: 1, // opaco: lo que pasa por detrás no se ve a través del globo

        markers: [{ location: [40.4, -3.7], size: 0.09 }],
      });
      const render = () => {
        if (!dragging) {
          phi += baseVel + vel;
          vel *= 0.95; // decae la inercia
          if (Math.abs(vel) < 0.00005) vel = 0;
        }
        globe!.update({ phi, theta });
        raf = requestAnimationFrame(render);
      };
      render();
      requestAnimationFrame(() => {
        canvas.style.opacity = "1";
      });
    };

    const onDown = (e: PointerEvent) => {
      dragging = true;
      moved = 0;
      lastX = e.clientX;
      lastDx = 0;
      vel = 0;
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      lastDx = dx;
      moved += Math.abs(dx);
      phi += dx * 0.005; // arrastrar para girar
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      if (moved < 6) {
        onSelectRef.current?.(); // toque → abrir mapa
      } else {
        vel = clamp(lastDx * 0.005, 0.06); // inercia del "lanzamiento"
      }
    };

    canvas.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect();
          init();
        }
      });
      ro.observe(canvas);
    }

    return () => {
      canvas.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      if (raf) cancelAnimationFrame(raf);
      if (globe) globe.destroy();
    };
  }, [theme]);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Ver las universidades públicas de España"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect?.();
      }}
      className={cn("group relative mx-auto block aspect-square w-full max-w-lg", className)}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          opacity: 0,
          transition: "opacity 1s ease",
          contain: "layout paint size",
          cursor: "grab",
          touchAction: "pan-y",
        }}
      />
      <span className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-line bg-background/60 px-3 py-1 font-mono text-[11px] uppercase tracking-kicker text-muted backdrop-blur-sm transition-colors group-hover:text-foreground">
        Toca España · arrástralo para girar
      </span>
    </div>
  );
}
