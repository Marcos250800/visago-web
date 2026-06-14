"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";

/**
 * Partículas que se ensamblan formando el isotipo de VisaGo (ondas).
 * Canvas 2D, interactivo (repulsión con el cursor Y con el dedo en móvil), con
 * deriva sutil en reposo. En móvil hay menos partículas y son redondas (evita
 * el aspecto "pixelado"). Theme-aware y respeta prefers-reduced-motion.
 */
export function LogoParticles({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const color = theme === "light" ? "10,10,11" : "244,244,243";
    const isMobile = window.innerWidth < 768;
    // Móvil: renderiza a la resolución real del dispositivo (hasta 3x) para que
    // los puntos se vean nítidos y no pixelados.
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 3 : 2);
    // Móvil: puntos redondos algo mayores → más limpio.
    const dotR = isMobile ? 1.1 : 0.9;
    // Repulsión: en móvil, radio y fuerza menores → deformación sutil.
    const repelR = isMobile ? 55 : 110;
    const repelR2 = repelR * repelR;
    const repelForce = isMobile ? 1.2 : 3.2;

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let t = 0;

    type P = { x: number; y: number; tx: number; ty: number; vx: number; vy: number; o: number; ph: number };
    let particles: P[] = [];
    const mouse = { x: -9999, y: -9999 };

    // Dibuja el isotipo en un canvas auxiliar y muestrea sus píxeles → objetivos.
    function buildTargets(cw: number, ch: number): [number, number][] {
      const S = 300;
      const off = document.createElement("canvas");
      off.width = S;
      off.height = S;
      const o = off.getContext("2d");
      if (!o) return [];

      const pad = S * 0.13;
      const width = S - 2 * pad;
      const half = width / 6;
      const amp = width * 0.03;
      o.strokeStyle = "#fff";
      o.lineWidth = Math.max(2, width * 0.032);
      o.lineCap = "round";
      for (let i = 0; i < 11; i++) {
        const y = pad + i * (width / 10);
        o.beginPath();
        o.moveTo(pad, y);
        let x = pad;
        for (let k = 0; k < 6; k++) {
          const cy = y + (k % 2 === 0 ? -amp : amp);
          o.quadraticCurveTo(x + half / 2, cy, x + half, y);
          x += half;
        }
        o.stroke();
      }

      const data = o.getImageData(0, 0, S, S).data;
      const pts: [number, number][] = [];
      // Paso menor = más partículas (más relleno). Mayor en móvil = menos puntos.
      const step = isMobile ? 5 : 3;
      for (let y = 0; y < S; y += step) {
        for (let x = 0; x < S; x += step) {
          if (data[(y * S + x) * 4 + 3] > 110) pts.push([x, y]);
        }
      }

      const size = Math.min(cw, ch) * 0.84;
      const scale = size / S;
      const ox = (cw - size) / 2;
      const oy = (ch - size) / 2;
      return pts.map(([x, y]) => [ox + x * scale, oy + y * scale] as [number, number]);
    }

    function init() {
      const rect = canvas!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      if (w === 0 || h === 0) return;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targets = buildTargets(w, h);
      particles = targets.map(([tx, ty]) => {
        const a = Math.random() * Math.PI * 2;
        const r = Math.max(w, h) * (0.6 + Math.random() * 0.6);
        return {
          x: w / 2 + Math.cos(a) * r,
          y: h / 2 + Math.sin(a) * r,
          tx,
          ty,
          vx: 0,
          vy: 0,
          o: 0.35 + Math.random() * 0.65,
          ph: Math.random() * Math.PI * 2,
        };
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      t += 0.01;
      ctx!.fillStyle = `rgb(${color})`;
      for (const p of particles) {
        const driftX = reduce ? 0 : Math.cos(t + p.ph) * 0.35;
        const driftY = reduce ? 0 : Math.sin(t * 0.9 + p.ph) * 0.35;
        let ax = (p.tx + driftX - p.x) * 0.025;
        let ay = (p.ty + driftY - p.y) * 0.025;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < repelR2) {
          const d = Math.sqrt(d2) || 1;
          const f = ((repelR - d) / repelR) * repelForce;
          ax += (dx / d) * f;
          ay += (dy / d) * f;
        }

        p.vx = (p.vx + ax) * 0.86;
        p.vy = (p.vy + ay) * 0.86;
        p.x += p.vx;
        p.y += p.vy;

        ctx!.globalAlpha = p.o;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, dotR, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    function loop() {
      if (running) draw();
      raf = requestAnimationFrame(loop);
    }

    init();
    if (reduce) {
      for (const p of particles) {
        p.x = p.tx;
        p.y = p.ty;
      }
      draw();
    } else {
      raf = requestAnimationFrame(loop);
    }

    const onMove = (e: MouseEvent) => {
      const r = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    // Táctil: el dedo perturba las partículas igual que el ratón.
    const onTouch = (e: TouchEvent) => {
      const tch = e.touches[0];
      if (!tch) return;
      const r = canvas!.getBoundingClientRect();
      mouse.x = tch.clientX - r.left;
      mouse.y = tch.clientY - r.top;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onLeave);
    window.addEventListener("touchcancel", onLeave);

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
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onLeave);
      window.removeEventListener("touchcancel", onLeave);
      ro.disconnect();
      io.disconnect();
    };
  }, [theme]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
