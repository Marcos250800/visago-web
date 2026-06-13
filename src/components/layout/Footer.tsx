import Link from "next/link";
import { NAV, SITE, FOOTER_LEGAL } from "@/lib/site";
import { Wordmark } from "@/components/brand/Wordmark";

const servicios = NAV.find((n) => n.label === "Servicios")?.children ?? [];
const recursos = NAV.find((n) => n.label === "Recursos")?.children ?? [];

export function Footer() {
  return (
    <footer className="border-t border-line bg-background">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Marca */}
          <div className="md:col-span-4">
            <Wordmark />
            <p className="mt-5 max-w-xs text-balance text-sm text-muted">
              {SITE.tagline}. Asesoría y tramitación de visados de estudio, turismo y
              trabajo para EEUU y España.
            </p>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-6">
              Solicitar asesoría
            </a>
          </div>

          {/* Columnas */}
          <div className="grid grid-cols-2 gap-8 md:col-span-5 md:col-start-6 sm:grid-cols-3">
            <FooterCol title="Servicios" links={servicios} />
            <FooterCol title="Recursos" links={recursos} />
            <div>
              <p className="kicker">Empresa</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li><Link href="/contacto" className="link-underline text-muted transition-colors hover:text-foreground">Contacto</Link></li>
                <li><Link href="/preguntas-frecuentes" className="link-underline text-muted transition-colors hover:text-foreground">FAQ</Link></li>
                {FOOTER_LEGAL.map((l) => (
                  <li key={l.href}><Link href={l.href} className="link-underline text-muted transition-colors hover:text-foreground">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contacto directo */}
        <div className="mt-14 grid gap-6 border-t border-line pt-8 md:grid-cols-3">
          <ContactItem label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
          <ContactItem label="WhatsApp" value={SITE.phone} href={SITE.whatsapp} />
          <ContactItem label="Instagram" value={SITE.instagramHandle} href={SITE.instagram} />
        </div>

        {/* Pie */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <span>© 2026 {SITE.name}. Todos los derechos reservados.</span>
          <span className="kicker">{SITE.location}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="kicker">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="link-underline text-muted transition-colors hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-xl border border-line px-4 py-3 transition-colors hover:border-foreground/40"
    >
      <span className="text-sm text-foreground">{value}</span>
      <span className="kicker">{label}</span>
    </a>
  );
}
