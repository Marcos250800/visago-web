"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Inclinación 3D sutil al pasar el cursor (rotateX/Y según la posición),
 * con muelle al volver. Envuelve una tarjeta.
 */
export function Tilt({
  children,
  className,
  max = 7,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 150, damping: 16, mass: 0.3 });
  const sy = useSpring(py, { stiffness: 150, damping: 16, mass: 0.3 });
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);

  const apply = (clientX: number, clientY: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((clientX - r.left) / r.width);
    py.set((clientY - r.top) / r.height);
  };
  const onMove = (e: React.MouseEvent) => apply(e.clientX, e.clientY);
  // Táctil (móvil): la inclinación 3D sigue al dedo, igual que el ratón en PC.
  const onTouch = (e: React.TouchEvent) => {
    const t = e.touches[0];
    if (t) apply(t.clientX, t.clientY);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onTouchStart={onTouch}
      onTouchMove={onTouch}
      onTouchEnd={onLeave}
      onTouchCancel={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
