"use client";

import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Marquee horizontal infinito (adaptado de Magic UI a Tailwind v3).
 * Duplica el contenido y desplaza el track -50% → bucle continuo.
 * Los items deben llevar su propio margen horizontal para un empalme uniforme.
 */
interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  reverse?: boolean;
  pauseOnHover?: boolean;
}

export function Marquee({ className, reverse, pauseOnHover, children, ...props }: MarqueeProps) {
  return (
    <div {...props} className={cn("group flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 animate-marquee items-center",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
