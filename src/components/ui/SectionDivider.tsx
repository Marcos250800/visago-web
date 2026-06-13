"use client";

import { motion } from "framer-motion";

/**
 * Divisor de sección: línea fina con un destello que la recorre cuando entra
 * en el viewport. Se auto-posiciona en el borde superior de una sección relativa.
 */
export function SectionDivider() {
  return (
    <div aria-hidden className="absolute inset-x-0 top-0 z-10 h-px overflow-hidden bg-line">
      <motion.div
        initial={{ x: "-130%" }}
        whileInView={{ x: "130%" }}
        viewport={{ margin: "-12% 0px" }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-1/3 bg-gradient-to-r from-transparent via-foreground to-transparent"
      />
    </div>
  );
}
