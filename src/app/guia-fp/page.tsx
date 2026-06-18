import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { RevealWords } from "@/components/motion/RevealWords";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { Tilt } from "@/components/motion/Tilt";
import { ParticleField } from "@/components/ui/ParticleField";
import { FlowPaths } from "@/components/ui/FlowPaths";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recursos — Guía FP de Grado Superior",
  description:
    "Guía completa de la Formación Profesional de Grado Superior en España para estudiantes extranjeros: requisitos, documentos, costes, prueba de acceso y oportunidades.",
  alternates: { canonical: "/guia-fp" },
};

const CATALOGO = "https://visagofp.base44.app/";

const QUE_ES = [
  {
    title: "Duración",
    desc: "2 años académicos (2000 horas totales)",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    title: "Nivel EQF",
    desc: "Equivale al nivel 5 del Marco Europeo de Cualificaciones",
    icon: <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.7 1-5.8L3.5 9.2l5.9-.9z" />,
  },
  {
    title: "Prácticas",
    desc: "Incluye FCT obligatoria en empresas reales",
    icon: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </>
    ),
  },
];

const OPORTUNIDADES = [
  { title: "Trabajar directamente", desc: "Accede al mercado laboral como técnico/a superior cualificado" },
  { title: "Acceder a la universidad", desc: "Convalida créditos o accede directamente a grados universitarios" },
  { title: "Especializaciones", desc: "Realiza Cursos de Especialización de FP avanzados" },
  { title: "Emprender", desc: "Lanza tu propio negocio en tu sector profesional" },
];

const REQUISITOS = [
  {
    n: "01",
    title: "Título equivalente al Bachillerato español",
    desc: "Necesitas un título de secundaria postobligatoria de tu país más el trámite de homologación o equivalencia oficial.",
  },
  {
    n: "02",
    title: "Certificado de idioma",
    desc: "La mayoría de cursos son en español. Nivel recomendado: B1/B2. En regiones bilingües pueden requerir catalán, gallego o euskera.",
  },
  {
    n: "03",
    title: "Visado de estudiante",
    desc: "Obligatorio si no tienes ciudadanía de la UE. Tramita tu visado de estudios antes de viajar.",
  },
];

const DOCS_HOMOLOGACION = [
  "Título de estudios original",
  "Certificado de notas académicas",
  "Traducción jurada oficial",
  "Legalización (Apostilla de La Haya)",
];

const DOCS_SOLICITUD = [
  { label: "Identificación", desc: "Copia del pasaporte o NIE válido" },
  { label: "Título académico", desc: "Título homologado o resguardo oficial" },
  { label: "Idioma", desc: "Certificado de español B1/B2 si aplica" },
  { label: "Solicitud", desc: "Formulario formal online o en papel" },
  { label: "Empadronamiento", desc: "Certificado si ya resides en España" },
  { label: "Fotografía", desc: "Foto reciente tamaño carnet" },
];

const VENTAJAS = [
  { title: "Reconocimiento oficial", desc: "Título válido en toda la Unión Europea" },
  { title: "Experiencia laboral", desc: "Trabaja en prácticas durante el curso" },
  { title: "Formación práctica", desc: "Acelera tu entrada al mercado laboral" },
  { title: "Vías de progresión", desc: "Caminos claros hacia universidad o especialización" },
];

const COSTES = [
  { title: "Centros públicos", price: "100 € – 500 €", note: "al año (solo tasas administrativas)" },
  { title: "Centros concertados o privados", price: "1.500 € – 6.000 €", note: "al año" },
  {
    title: "Becas disponibles",
    price: null,
    note: "Algunas comunidades ofrecen becas del Ministerio de Educación, regionales o específicas para situación de extranjería. Consulta las opciones en tu comunidad autónoma.",
  },
];

const RESUMEN = [
  ["Duración", "2 años (2000 horas)"],
  ["Requisitos extranjeros", "Estudios equivalentes al Bachillerato + homologación"],
  ["Idioma", "Español (mínimo B1 recomendado)"],
  ["Acceso", "Con título homologado o prueba de acceso"],
  ["Coste", "Público: bajo / Privado: medio-alto"],
  ["Título", "Oficial, con acceso laboral o universitario"],
  ["Prácticas", "Sí, obligatorias en empresas (FCT)"],
];

/** Icono de check monocromo reutilizable. */
function Check() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="mt-0.5 shrink-0 text-muted">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  );
}

export default function GuiaFpPage() {
  return (
    <main>
      {/* Hero — estilo cabecera interna (constelaciones) */}
      <section className="relative overflow-hidden border-b border-line bg-background pb-16 pt-36 md:pb-24 md:pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_90%_at_72%_35%,black,transparent_80%)]"
        >
          <ParticleField className="h-full w-full" connect={120} />
        </div>

        <div className="container relative">
          <Reveal>
            <ScrambleText text="Recursos · Guía FP" className="kicker" />
            <h1 className="mt-5 max-w-4xl font-display text-display-sm font-medium md:text-display">
              Guía de Formación Profesional
            </h1>
            <p className="mt-7 max-w-2xl text-balance text-lg text-muted">
              Tu puerta de entrada al mercado laboral europeo con cualificación técnica avanzada.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={CATALOGO} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Explorar cursos <span aria-hidden>→</span>
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Contactar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ¿Qué es? */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <SectionDivider />
        <div className="container">
          <Reveal>
            <ScrambleText text="Formación Profesional" className="kicker" />
          </Reveal>
          <h2 className="mt-5 max-w-3xl font-display text-display-sm font-medium">
            <RevealWords text="¿Qué es la FP de Grado Superior?" />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-balance text-lg leading-relaxed text-muted">
              La Formación Profesional de Grado Superior es una enseñanza oficial postsecundaria no universitaria que
              forma estudiantes para el acceso directo al mercado laboral con cualificación técnica avanzada. Son
              estudios prácticos orientados a cubrir necesidades profesionales reales de distintos sectores.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {QUE_ES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <Tilt className="h-full" max={6}>
                  <div className="h-full rounded-2xl border border-line bg-card/40 p-6 transition-colors duration-300 hover:border-foreground/30">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-muted">
                      {c.icon}
                    </svg>
                    <h3 className="mt-4 font-display text-lg font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Oportunidades */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <SectionDivider />
        <div className="container">
          <Reveal>
            <ScrambleText text="Después de la FP" className="kicker" />
          </Reveal>
          <h2 className="mt-5 font-display text-display-sm font-medium">
            <RevealWords text="Oportunidades después de la FP" />
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {OPORTUNIDADES.map((o, i) => (
              <Reveal key={o.title} delay={(i % 2) * 0.08}>
                <Tilt className="h-full" max={5}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-card/40 p-6 transition-colors duration-300 hover:border-foreground/30">
                    <span aria-hidden className="mt-0.5 text-muted">→</span>
                    <div>
                      <h3 className="font-medium">{o.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{o.desc}</p>
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos extranjeros — con líneas que fluyen de fondo */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <SectionDivider />
        <FlowPaths
          className="pointer-events-none absolute inset-0 text-foreground [mask-image:radial-gradient(ellipse_55%_75%_at_82%_50%,black,transparent_72%)]"
          mirror
        />
        <div className="container relative">
          <Reveal>
            <ScrambleText text="Para extranjeros" className="kicker" />
          </Reveal>
          <h2 className="mt-5 font-display text-display-sm font-medium">
            <RevealWords text="Requisitos para estudiantes extranjeros" />
          </h2>
          <ol className="mt-12 space-y-3">
            {REQUISITOS.map((r, i) => (
              <Reveal key={r.n} delay={i * 0.08}>
                <li className="flex gap-5 rounded-2xl border border-line bg-card/40 p-6 transition-colors duration-300 hover:border-foreground/30">
                  <span className="font-mono text-sm text-muted">{r.n}</span>
                  <div>
                    <h3 className="font-medium">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{r.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Documentos */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <SectionDivider />
        <div className="container">
          <Reveal>
            <ScrambleText text="Trámites" className="kicker" />
          </Reveal>
          <h2 className="mt-5 font-display text-display-sm font-medium">
            <RevealWords text="Documentos necesarios" />
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <Reveal>
              <h3 className="font-display text-xl font-medium">Para homologación</h3>
              <ul className="mt-6 space-y-2.5">
                {DOCS_HOMOLOGACION.map((d) => (
                  <li key={d} className="flex items-start gap-3 rounded-xl border border-line bg-card/40 px-4 py-3 text-sm">
                    <Check />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-display text-xl font-medium">Para la solicitud</h3>
              <ul className="mt-6 space-y-2.5">
                {DOCS_SOLICITUD.map((d) => (
                  <li key={d.label} className="flex items-start gap-3 rounded-xl border border-line bg-card/40 px-4 py-3 text-sm">
                    <Check />
                    <span>
                      <strong className="font-medium">{d.label}:</strong> <span className="text-muted">{d.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Periodo / Proceso */}
          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-8 rounded-2xl border border-line bg-card/40 p-7 md:grid-cols-2 md:p-9">
              <div>
                <h3 className="font-display text-lg font-semibold">Periodo de admisión</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Entre mayo y julio (varía según comunidad autónoma). Si hay más solicitantes que plazas, se usa baremo
                  de notas. El proceso completo puede tomar entre <strong className="text-foreground">3 y 6 meses</strong>.
                  Planifica con anticipación para cumplir todos los plazos administrativos.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">Proceso de solicitud</h3>
                <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-sm">
                  <span className="rounded-md border border-line px-3 py-1.5">Homologar</span>
                  <span aria-hidden className="text-muted">→</span>
                  <span className="rounded-md border border-line px-3 py-1.5">Buscar FP</span>
                  <span aria-hidden className="text-muted">→</span>
                  <span className="rounded-md border border-line px-3 py-1.5">Solicitar</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ventajas */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <SectionDivider />
        <div className="container">
          <Reveal>
            <ScrambleText text="Por qué FP" className="kicker" />
          </Reveal>
          <h2 className="mt-5 font-display text-display-sm font-medium">
            <RevealWords text="Ventajas para estudiantes extranjeros" />
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VENTAJAS.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.06}>
                <Tilt className="h-full" max={6}>
                  <div className="h-full rounded-2xl border border-line bg-card/40 p-6 transition-colors duration-300 hover:border-foreground/30">
                    <h3 className="font-medium">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Costes */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <SectionDivider />
        <div className="container">
          <Reveal>
            <ScrambleText text="Inversión" className="kicker" />
          </Reveal>
          <h2 className="mt-5 font-display text-display-sm font-medium">
            <RevealWords text="Costes de estudiar FP de Grado Superior" />
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {COSTES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <Tilt className="h-full" max={6}>
                  <div className="h-full rounded-2xl border border-line bg-card/40 p-6 transition-colors duration-300 hover:border-foreground/30">
                    <h3 className="font-medium">{c.title}</h3>
                    {c.price && <p className="mt-3 font-display text-3xl font-semibold">{c.price}</p>}
                    <p className="mt-2 text-sm leading-relaxed text-muted">{c.note}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>

          {/* Prueba de acceso alternativa */}
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-line bg-card/40 p-7 md:p-9">
              <h3 className="font-display text-lg font-semibold">Prueba de acceso alternativa</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                <strong className="text-foreground">¿No tienes el bachillerato homologado?</strong> Puedes presentarte a
                la prueba de acceso a Grado Superior si tienes mínimo 19 años (o 18 con título de Grado Medio).
              </p>
              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div>
                  <p className="kicker">Contenido del examen</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <Check />
                      <span>Parte general: lengua, inglés, matemáticas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check />
                      <span>Parte específica: según familia profesional elegida</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="kicker">Convocatoria</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Se convoca una vez al año en cada comunidad autónoma. El título obtenido es oficial y válido en toda
                    la UE según el Marco Europeo de Cualificaciones (EQF).
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Resumen rápido */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <SectionDivider />
        <div className="container">
          <Reveal>
            <ScrambleText text="De un vistazo" className="kicker" />
          </Reveal>
          <h2 className="mt-5 font-display text-display-sm font-medium">
            <RevealWords text="Resumen rápido" />
          </h2>
          <Reveal delay={0.1}>
            <dl className="mt-10 border-t border-line">
              {RESUMEN.map(([k, v]) => (
                <div key={k} className="grid gap-1 border-b border-line py-4 sm:grid-cols-3">
                  <dt className="font-medium">{k}</dt>
                  <dd className="text-muted sm:col-span-2">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Consejo final */}
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-line border-l-2 border-l-foreground bg-card/40 p-7 md:p-9">
              <p className="text-sm leading-relaxed text-muted">
                <strong className="text-foreground">Consejo final:</strong> si eres estudiante extranjero, la FP de Grado
                Superior es una de las formas más rápidas y efectivas de entrar legalmente a España, formarte, obtener
                experiencia laboral y acceder a la residencia posterior.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <Reveal>
            <div className="grain relative overflow-hidden rounded-3xl bg-contrast px-8 py-16 text-center text-contrast-fg md:px-16 md:py-20">
              <h2 className="relative mx-auto max-w-2xl text-balance font-display text-display-sm font-semibold">
                Encuentra tu ciclo de FP
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-contrast-fg/70">
                Explora el catálogo de ciclos de Grado Superior o escríbenos y te ayudamos a elegir.
              </p>
              <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={CATALOGO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-contrast-fg px-6 py-3 text-sm font-medium text-contrast transition-opacity duration-300 hover:opacity-85"
                >
                  Ver catálogo de cursos
                  <span aria-hidden>→</span>
                </a>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-contrast-fg/30 px-6 py-3 text-sm font-medium text-contrast-fg transition-colors duration-300 hover:bg-contrast-fg hover:text-contrast"
                >
                  Contactar
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
