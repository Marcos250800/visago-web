"use client";

import Link from "next/link";
import { useEffect } from "react";

/** Límite de error de la app (marca VisaGo). Debe ser Client Component. */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Punto único para reportar a un servicio externo en el futuro.
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-[70vh] flex-col items-center justify-center bg-background px-6 py-32 text-center">
      <p className="kicker">Algo ha fallado</p>
      <h1 className="mt-5 font-display text-display-sm font-medium md:text-display">
        Error inesperado
      </h1>
      <p className="mt-6 max-w-md text-balance text-muted">
        Ha ocurrido un problema al cargar esta página. Puedes reintentar o volver al inicio.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <button onClick={reset} className="btn-primary">
          Reintentar
        </button>
        <Link href="/" className="btn-ghost">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
