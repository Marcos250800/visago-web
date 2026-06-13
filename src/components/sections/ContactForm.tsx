"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

/**
 * Formulario de contacto (Nombre, Email, Mensaje).
 * Sin backend todavía: compone un mailto a VisaGo. Sustituible más adelante
 * por una API route (Resend/Formspree) sin cambiar el marcado.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") ?? "");
    const email = String(data.get("email") ?? "");
    const mensaje = String(data.get("mensaje") ?? "");
    const subject = encodeURIComponent(`Consulta de ${nombre}`);
    const body = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Nombre" name="nombre" type="text" autoComplete="name" />
      <Field label="Dirección de correo electrónico" name="email" type="email" autoComplete="email" />
      <div>
        <label htmlFor="mensaje" className="kicker">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          className="mt-2 w-full resize-none rounded-xl border border-line bg-transparent px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-foreground"
          placeholder="Cuéntanos tu caso…"
        />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        {sent ? "¡Gracias! Abriendo tu correo…" : "Enviar formulario"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="kicker">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-xl border border-line bg-transparent px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-foreground"
      />
    </div>
  );
}
