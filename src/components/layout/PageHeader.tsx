import { Reveal } from "@/components/motion/Reveal";
import { FlickeringGrid } from "@/components/ui/FlickeringGrid";

/** Cabecera estándar de páginas internas (deja espacio para la navbar fija). */
export function PageHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-background pb-16 pt-36 md:pb-24 md:pt-44">
      {/* Textura sutil de partículas/malla */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_80%_at_70%_30%,black,transparent_75%)]"
      >
        <FlickeringGrid squareSize={3} gridGap={9} maxOpacity={0.1} flickerChance={0.18} />
      </div>

      <div className="container relative">
        <Reveal>
          <p className="kicker">{kicker}</p>
          <h1 className="mt-5 max-w-4xl font-display text-display-sm font-medium md:text-display">
            {title}
          </h1>
          {intro && <p className="mt-7 max-w-2xl text-balance text-lg text-muted">{intro}</p>}
        </Reveal>
      </div>
    </section>
  );
}
