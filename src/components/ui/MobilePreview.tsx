"use client";

import { useEffect, useState } from "react";

/**
 * PROVISIONAL (herramienta de desarrollo): botón flotante que abre la página
 * actual dentro de un marco tipo móvil (iframe a 390px de ancho), para previsualizar
 * la versión móvil desde el PC. Eliminar cuando ya no haga falta.
 */
export function MobilePreview() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState("/");

  const openPreview = () => {
    setSrc(window.location.pathname + window.location.search);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={openPreview}
        className="fixed bottom-5 left-5 z-[120] inline-flex items-center gap-2 rounded-full border border-line bg-background/70 px-4 py-2 font-mono text-[11px] uppercase tracking-kicker text-muted backdrop-blur-sm transition-colors hover:text-foreground"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <line x1="11" y1="18" x2="13" y2="18" />
        </svg>
        Vista móvil
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between gap-6 font-mono text-[11px] uppercase tracking-kicker text-white/70">
              <span>Vista móvil · 390px · provisional</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/20 px-3 py-1 text-white transition-colors hover:bg-white/10"
              >
                Cerrar ✕
              </button>
            </div>
            <div
              className="overflow-hidden rounded-[2.2rem] border-[7px] border-neutral-800 bg-black shadow-2xl"
              style={{ width: 390, height: "min(844px, 82vh)" }}
            >
              <iframe src={src} title="Vista móvil" className="h-full w-full border-0" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
