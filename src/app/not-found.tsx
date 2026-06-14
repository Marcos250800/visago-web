import Link from "next/link";

/** Página 404 propia (marca VisaGo). */
export default function NotFound() {
  return (
    <main className="relative flex min-h-[70vh] flex-col items-center justify-center bg-background px-6 py-32 text-center">
      <p className="kicker">Error 404</p>
      <h1 className="mt-5 font-display text-display-sm font-medium md:text-display">
        Página no encontrada
      </h1>
      <p className="mt-6 max-w-md text-balance text-muted">
        La página que buscas no existe o se ha movido. Vuelve al inicio y sigue tu ruta.
      </p>
      <Link href="/" className="btn-primary mt-9">
        Volver al inicio
        <span aria-hidden>→</span>
      </Link>
    </main>
  );
}
