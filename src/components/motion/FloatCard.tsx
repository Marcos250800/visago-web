"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const entranceSpring = { type: "spring", stiffness: 120, damping: 15, mass: 0.9 } as const;

/**
 * Tarjeta de la grid de Servicios.
 *
 *  - Entrada "desordenada": aparece dispersa (offset + rotación + escala) y cae
 *    a su sitio con muelle, en cascada según el `index`.
 *  - En ESCRITORIO añade balanceo idle continuo, arrastre con vuelta elástica y
 *    elevación al pasar el cursor.
 *  - En MÓVIL se queda solo con la entrada: ni flotar ni arrastrar, para no
 *    gastar batería ni capturar el scroll (es el dispositivo prioritario).
 *
 * La dispersión es determinista (función del `index`) para que SSR y cliente
 * coincidan. Respeta `prefers-reduced-motion`.
 */
export function FloatCard({
  children,
  index = 0,
  className,
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (hover: hover)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  // Dispersión determinista por índice (consistente SSR/cliente, sin random).
  const dir = index % 2 === 0 ? -1 : 1;
  const fromX = dir * (38 + ((index * 53) % 46)); // ~38–84px
  const fromY = 26 + ((index * 29) % 34); //         ~26–60px
  const fromRotate = dir * (3 + ((index * 31) % 6)); // ~3–9°

  // En escritorio: balanceo idle + arrastre + hover. En móvil: solo el contenido.
  const inner = desktop ? (
    <motion.div
      className="h-full"
      animate={{ y: [0, -(6 + (index % 3) * 1.5), 0] }}
      transition={{
        duration: 4.5 + (index % 4) * 0.6,
        delay: 0.8 + index * 0.08, // arranca tras la entrada
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.18}
        dragTransition={{ bounceStiffness: 220, bounceDamping: 18 }}
        whileHover={{ scale: 1.03, y: -6 }}
        whileTap={{ scale: 0.98 }}
        whileDrag={{ scale: 1.05, zIndex: 50 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="h-full cursor-grab active:cursor-grabbing"
      >
        {children}
      </motion.div>
    </motion.div>
  ) : (
    children
  );

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: fromX, y: fromY, rotate: fromRotate, scale: 0.85 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...entranceSpring, delay: index * 0.08 }}
    >
      {inner}
    </motion.div>
  );
}
