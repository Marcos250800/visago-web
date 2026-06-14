"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { InteractiveGlobe } from "./InteractiveGlobe";
import { ShaderBackground } from "@/components/ui/ShaderBackground";
import { UNIVERSIDADES } from "@/lib/universidades";

// Leaflet accede a `window`: se carga solo en cliente.
const SpainMap = dynamic(() => import("./SpainMap").then((m) => m.SpainMap), {
  ssr: false,
  loading: () => (
    <div className="grid h-[70vh] min-h-[440px] place-items-center text-sm text-muted">Cargando mapa…</div>
  ),
});

/**
 * Globo con marcador en España → al pulsar "España" se abre el mapa de España
 * con un punto por universidad pública (web oficial).
 */
export function MapaInteractivo() {
  const [view, setView] = useState<"globe" | "spain">("globe");

  return (
    <div>
      <AnimatePresence mode="wait">
        {view === "globe" ? (
          <motion.div
            key="globe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col items-center"
          >
            {/* Cometas de luz detrás del globo (mismo shader que en BecaLab).
                A sangre completa (w-screen) + fundido radial → no se ve el borde
                del recuadro. Solo en la vista del globo → al abrir el mapa se desmonta. */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-screen -translate-x-1/2 -translate-y-1/2">
              <ShaderBackground
                intensity={1.1}
                className="[mask-image:radial-gradient(ellipse_55%_70%_at_50%_44%,black_18%,transparent_80%)]"
              />
            </div>
            <div className="relative z-10 flex w-full flex-col items-center">
              <InteractiveGlobe onSelect={() => setView("spain")} />
              <p className="mt-6 text-center text-sm text-muted">
                Toca el globo para ver las <span className="text-foreground">universidades públicas de España</span> y su web oficial.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="spain"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <button onClick={() => setView("globe")} className="btn-ghost">
                <span aria-hidden>←</span> Volver al globo
              </button>
              <span className="kicker">{UNIVERSIDADES.length} universidades</span>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line">
              <SpainMap universities={UNIVERSIDADES} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
