"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

/**
 * Formulario de contacto (Nombre, Email, Mensaje).
 *
 * Backend: Web3Forms (sin servidor propio). Necesita una "access key" gratuita
 * en NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (la access key de Web3Forms es pública por
 * diseño y va atada a tu email + protección antispam).
 *  - Si NO hay clave configurada → cae a `mailto` (sigue funcionando).
 *  - Honeypot `botcheck` para descartar bots.
 */

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Sin access key: fallback a mailto para no perder el mensaje.
    if (!ACCESS_KEY) {
      const nombre = String(data.get("nombre") ?? "");
      const email = String(data.get("email") ?? "");
      const mensaje = String(data.get("mensaje") ?? "");
      const subject = encodeURIComponent(`Consulta de ${nombre}`);
      const body = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`);
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Nueva consulta desde ${SITE.name}`,
          from_name: SITE.name,
          name: data.get("nombre"),
          email: data.get("email"),
          message: data.get("mensaje"),
          botcheck: data.get("botcheck"),
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 py-4">
        <p className="font-display text-xl font-medium">¡Gracias por escribirnos!</p>
        <p className="text-muted">
          Hemos recibido tu mensaje y te responderemos lo antes posible. Si lo prefieres,
          también puedes escribirnos por WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot antispam: oculto para humanos. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

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
      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
        {status === "submitting" ? "Enviando…" : "Enviar formulario"}
      </button>
      {status === "error" && (
        <p className="text-sm text-muted">
          No se pudo enviar el formulario. Inténtalo de nuevo o escríbenos por WhatsApp o a {SITE.email}.
        </p>
      )}
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
