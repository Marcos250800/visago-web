"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cursor personalizado monocromo: un anillo que sigue al ratón con suavizado y
 * crece sobre elementos interactivos. Usa mix-blend-difference para verse sobre
 * cualquier fondo. Solo en desktop (pointer fino) y si no hay reduced-motion.
 */
export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-none");

    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let mx = rx;
    let my = ry;
    let sc = 1;
    let targetSc = 1;
    let visible = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      visible = true;
      const t = e.target as HTMLElement | null;
      targetSc = t && t.closest("a,button,input,textarea,select,[role=button],[data-cursor]") ? 1.9 : 1;
    };
    const onLeave = () => {
      visible = false;
    };

    const loop = () => {
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      sc += (targetSc - sc) * 0.2;
      const r = ringRef.current;
      if (r) {
        r.style.opacity = visible ? "1" : "0";
        r.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(${sc})`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("cursor-none");
    };
  }, []);

  if (!enabled) return null;
  return (
    <div
      ref={ringRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] h-7 w-7 rounded-full border border-foreground opacity-0 mix-blend-difference"
      style={{ willChange: "transform, opacity" }}
    />
  );
}
