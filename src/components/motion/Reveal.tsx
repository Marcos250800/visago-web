"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

/**
 * Revela su contenido al entrar en viewport (desplazamiento + fade).
 * Primitiva base del scrolltelling, reutilizable en todas las secciones.
 */
export function Reveal({ children, delay = 0, y = 24, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
