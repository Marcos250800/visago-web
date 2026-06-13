"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";

/**
 * Malla de ondas (canvas): una superficie de puntos en pseudo-perspectiva que
 * fluye como una onda y se "abulta" allí donde pasa el cursor (ripple).
 * Monocroma/theme-aware, pausa fuera del viewport y respeta
 * prefers-reduced-motion (queda como una onda estática).
 */
export function WaveMesh({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rgb = theme === "light" ? "10,10,11" : "244,244,243";
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let t = 0;
    let cols = 0;
    let rows = 0;
    const mouse = { x: -9999, y: -9999 };

    function setup() {
      const r = canvas!.getBoundingClientRect();
      w = r.width;
      h = r.height;
      if (!w || !h) return;
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.max(12, Math.min(40, Math.round(w / 20)));
      rows = Math.max(16, Math.min(60, Math.round(h / 20)));
    }

    // Campo de altura: suma de senos en movimiento → onda fluida.
    function height(u: number, v: number) {
      return (
        Math.sin(u * 5.0 + t) * 0.55 +
        Math.sin(v * 4.2 - t * 0.7) * 0.32 +
        Math.sin((u * 2.0 + v * 3.0) + t * 1.4) * 0.22
      );
    }

    function frame() {
      if (!reduce) t += 0.012;
      ctx!.clearRect(0, 0, w, h);

      for (let j = 0; j < rows; j++) {
        const v = rows > 1 ? j / (rows - 1) : 0;
        // Pseudo-perspectiva: las filas de arriba se estrechan y atenúan.
        const persp = 0.5 + v * 0.5;
        const rowY = v * h;
        for (let i = 0; i < cols; i++) {
          const u = cols > 1 ? i / (cols - 1) : 0;
          let hgt = height(u, v);

          const sx = (u - 0.5) * w * persp + w / 2;
          let sy = rowY;

          // Ripple del cursor: abulta la onda alrededor del puntero.
          const dx = sx - mouse.x;
          const dy = sy - mouse.y;
          const d = Math.hypot(dx, dy);
          const R = 150;
          if (d < R) {
            const f = 1 - d / R;
            hgt += Math.cos(d * 0.06 - t * 5) * f * 1.5;
          }

          sy -= hgt * 16 * persp;

          const bright = (hgt + 1.3) / 2.6;
          const radius = Math.max(0.35, (0.55 + bright * 1.95) * persp);
          const alpha = Math.max(0, Math.min(0.82, 0.11 + bright * 0.62));

          ctx!.beginPath();
          ctx!.fillStyle = `rgba(${rgb},${alpha})`;
          ctx!.arc(sx, sy, radius, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
    }

    function loop() {
      if (running) frame();
      raf = requestAnimationFrame(loop);
    }

    setup();
    if (reduce) frame();
    else raf = requestAnimationFrame(loop);

    const onMove = (e: MouseEvent) => {
      const r = canvas!.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (x >= -40 && x <= w + 40 && y >= -40 && y <= h + 40) {
        mouse.x = x;
        mouse.y = y;
      } else {
        mouse.x = -9999;
        mouse.y = -9999;
      }
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    const ro = new ResizeObserver(() => setup());
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      ro.disconnect();
      io.disconnect();
    };
  }, [theme]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
