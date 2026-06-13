"use client";

import { motion } from "framer-motion";

/**
 * Transición de página: cada navegación entra con un fundido + leve desplazamiento.
 * (template.tsx se remonta en cada cambio de ruta).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
