"use client";

import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

/** Barra de progreso de scroll (monocroma) fija en la parte superior. */
export function ScrollProgress({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className={cn("fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-foreground", className)}
      aria-hidden
    />
  );
}
