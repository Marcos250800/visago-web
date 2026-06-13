"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { LogoMark } from "./Logo";
import { LOGO } from "@/lib/site";

/**
 * Lockup de VisaGo: isotipo + "VisaGo".
 *
 * Usa el logo oficial (LOGO.src, versión blanca) insertándolo tal cual; en tema
 * claro se invierte a negro por CSS. Si el archivo no existe (o falla la carga),
 * cae automáticamente a la recreación vectorial (isotipo + wordmark Questrial).
 */
export function Wordmark({ className }: { className?: string }) {
  const [imgFailed, setImgFailed] = useState(false);
  const useImg = Boolean(LOGO.src) && !imgFailed;

  if (useImg) {
    return (
      <span className={cn("inline-flex items-center", className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={LOGO.src as string}
          alt="VisaGo"
          onError={() => setImgFailed(true)}
          className="h-8 w-auto [.light_&]:invert"
        />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-3 text-foreground", className)}>
      <LogoMark className="h-7 w-auto" />
      <span className="font-wordmark text-[1.55rem] font-normal leading-none tracking-[0.005em]">
        VisaGo
      </span>
    </span>
  );
}
