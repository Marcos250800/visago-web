"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FAQS, type Faq as FaqItem } from "@/lib/content";
import { RevealWords } from "@/components/motion/RevealWords";
import { SectionDivider } from "@/components/ui/SectionDivider";

/** Acordeón de FAQs reutilizable (home y página dedicada). */
export function FaqAccordion({ items = FAQS }: { items?: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-lg font-medium md:text-xl">{item.q}</span>
              <span
                className="relative grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line"
                aria-hidden
              >
                <span className="absolute h-[1.5px] w-3 bg-foreground" />
                <span
                  className={`absolute h-3 w-[1.5px] bg-foreground transition-transform duration-300 ${isOpen ? "scale-y-0" : "scale-y-100"}`}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 text-muted">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

/** Sección FAQ para la home. */
export function Faq() {
  return (
    <section id="faq" className="relative py-24 md:py-36">
      <SectionDivider />
      <div className="container relative grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="kicker">Preguntas frecuentes</p>
          <h2 className="mt-5 font-display text-display-sm font-medium">
            <RevealWords text="Resolvemos tus dudas." />
          </h2>
          <p className="mt-6 max-w-xs text-muted">
            ¿No encuentras tu respuesta? Escríbenos y te ayudamos en minutos.
          </p>
          <Link href="/contacto" className="btn-ghost mt-6">
            Contáctanos
          </Link>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
