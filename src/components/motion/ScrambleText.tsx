"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

/**
 * Texto "decode": las letras se barajan con caracteres aleatorios y se resuelven.
 * Monocromo (hereda el color del contenedor, p. ej. `.kicker`).
 *
 * Disparo: una vez al entrar en pantalla (IntersectionObserver → también en
 * móvil, que no tiene hover) y de nuevo al pasar el cursor (escritorio).
 * Respeta `prefers-reduced-motion` (muestra el texto sin animar). SSR-safe:
 * el texto limpio está en el HTML inicial y como `aria-label` (accesible/SEO).
 */
export function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const randomized = useCallback(
    (revealed: number) =>
      text
        .split("")
        .map((ch, i) =>
          ch === " " ? " " : i < revealed ? text[i] : CHARS[Math.floor(Math.random() * CHARS.length)]
        )
        .join(""),
    [text]
  );

  const scramble = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      return;
    }
    let frame = 0;
    const duration = Math.max(8, text.length * 2);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplay(randomized(0)); // arranca ya revuelto (sin destello del texto limpio)
    intervalRef.current = setInterval(() => {
      frame++;
      const revealed = Math.floor((frame / duration) * text.length);
      setDisplay(randomized(revealed));
      if (frame >= duration) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplay(text);
      }
    }, 30);
  }, [text, randomized]);

  // Una pasada al entrar en pantalla (móvil incluido).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let played = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played) {
          played = true;
          scramble();
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [scramble]);

  useEffect(
    () => () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    },
    []
  );

  return (
    <span ref={ref} className={cn("inline-block", className)} onMouseEnter={scramble} aria-label={text}>
      <span aria-hidden>{display}</span>
    </span>
  );
}
