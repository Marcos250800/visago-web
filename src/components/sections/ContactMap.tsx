"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// Leaflet accede a `window`: el mapa se carga solo en cliente.
const BernMap = dynamic(() => import("./BernMap").then((m) => m.BernMap), {
  ssr: false,
  loading: () => (
    <div className="grid h-full w-full place-items-center text-sm text-muted">Cargando mapa…</div>
  ),
});

/** Tarjeta con el mapa de Berna (sede de VisaGo). Sustituye al formulario. */
export function ContactMap({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-line bg-card", className)}>
      <BernMap />
    </div>
  );
}
