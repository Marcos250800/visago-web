import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Reveal } from "@/components/motion/Reveal";
import { SERVICES, SERVICES_INTRO_FULL } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Tramitación de visas de turismo, estudio y trabajo para EEUU y España: asesoría, visado de estudio, turismo, seguro médico, homologación de títulos, búsqueda de cursos y legalizaciones consulares.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <main>
      <PageHeader kicker="Servicios" title="Tu visado, gestionado de principio a fin." intro={SERVICES_INTRO_FULL} />

      <div className="bg-background">
        {SERVICES.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24 border-b border-line">
            <div className="container">
              <Reveal>
                <div className="grid gap-8 py-16 md:grid-cols-12 md:gap-10 md:py-24">
                  {/* Encabezado del servicio */}
                  <div className="md:col-span-4">
                    <span className="font-mono text-sm text-muted">{s.index}</span>
                    <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{s.title}</h2>
                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary mt-7 !px-5 !py-2.5"
                    >
                      Solicitar este servicio
                      <span aria-hidden>→</span>
                    </a>
                  </div>

                  {/* Cuerpo */}
                  <div className="md:col-span-8 md:col-start-5">
                    <div className="space-y-4 text-balance text-lg leading-relaxed text-muted">
                      {s.body.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    {s.note && (
                      <p className="mt-6 rounded-xl border border-line bg-card p-5 text-sm text-foreground">
                        {s.note}
                      </p>
                    )}

                    <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {s.features.map((f) => {
                        const [label, ...rest] = f.split(/:\s(.+)/);
                        const text = rest.join("");
                        return (
                          <li key={f} className="flex gap-3 border-t border-line pt-3 text-sm">
                            <span aria-hidden className="mt-1 text-[10px] text-muted">◆</span>
                            <span className="text-muted">
                              {text ? (
                                <>
                                  <span className="font-medium text-foreground">{label}:</span> {text}
                                </>
                              ) : (
                                <span className="text-foreground">{label}</span>
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <CtaBanner />
    </main>
  );
}
