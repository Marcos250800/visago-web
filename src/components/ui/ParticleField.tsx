"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";

/**
 * Malla de partículas conectadas (canvas): nodos que derivan y se enlazan con
 * líneas según su cercanía → textura "inorgánica" viva. Reacciona suavemente al
 * cursor. Theme-aware, pausa fuera de viewport y respeta prefers-reduced-motion.
 */
export function ParticleField({
  className,
  density = 0.00007,
  connect = 130,
  max = 85,
}: {
  className?: string;
  density?: number;
  connect?: number;
  max?: number;
}) {
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
    type P = { x: number; y: number; vx: number; vy: number };
    let ps: P[] = [];
    const mouse = { x: -9999, y: -9999 };

    function init() {
      const r = canvas!.getBoundingClientRect();
      w = r.width;
      h = r.height;
      if (!w || !h) return;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(14, Math.min(max, Math.round(w * h * density)));
      ps = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    }

    function frame() {
      ctx!.clearRect(0, 0, w, h);
      for (const p of ps) {
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
        }
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 18000) {
          const d = Math.sqrt(d2) || 1;
          p.x -= (dx / d) * 0.5;
          p.y -= (dy / d) * 0.5;
        }
      }
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const a = ps[i];
          const b = ps[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < connect) {
            ctx!.strokeStyle = `rgba(${rgb},${(1 - d / connect) * 0.22})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }
      ctx!.fillStyle = `rgba(${rgb},0.78)`;
      for (const p of ps) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function loop() {
      if (running) frame();
      raf = requestAnimationFrame(loop);
    }

    init();
    if (reduce) frame();
    else raf = requestAnimationFrame(loop);

    const onMove = (e: MouseEvent) => {
      const r = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    const ro = new ResizeObserver(() => init());
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
  }, [theme, density, connect, max]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
