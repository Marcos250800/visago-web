"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ROUTE_STEPS } from "@/lib/content";

/**
 * "Tu ruta" — núcleo del scrolltelling.
 * Columna fija (sticky) con título + barra de progreso que se llena al hacer
 * scroll, y los pasos revelándose en secuencia. En móvil se apila en vertical.
 */
export function Route() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 80%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.3 });

  return (
    <section ref={ref} className="bg-background py-24 md:py-36">
      <div className="container grid gap-12 md:grid-cols-12">
        {/* Columna fija */}
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <p className="kicker">El proceso</p>
            <h2 className="mt-5 font-display text-display-sm font-semibold">
              Tu ruta,
              <br />
              paso a paso.
            </h2>
            <p className="mt-6 max-w-xs text-muted">
              Un acompañamiento claro y sin fricciones, desde la primera consulta
              hasta que logras tu objetivo internacional.
            </p>

            {/* Barra de progreso (desktop) */}
            <div className="relative mt-10 hidden h-40 w-px bg-line md:block">
              <motion.div
                style={{ scaleY: progress }}
                className="absolute inset-0 origin-top bg-foreground"
              />
            </div>
          </div>
        </div>

        {/* Pasos */}
        <ol className="relative md:col-span-7 md:col-start-6">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-line" aria-hidden />
          {ROUTE_STEPS.map((s, i) => (
            <motion.li
              key={s.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative pb-16 pl-8 last:pb-0"
            >
              <span className="absolute left-0 top-1.5 grid h-2 w-2 -translate-x-1/2 place-items-center rounded-full bg-foreground" />
              <span className="kicker">{s.step}</span>
              <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{s.title}</h3>
              <p className="mt-3 max-w-md text-balance text-muted">{s.description}</p>
              <span className="pointer-events-none absolute right-0 top-0 select-none font-display text-7xl font-bold text-foreground/[0.04] md:text-8xl">
                0{i + 1}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
