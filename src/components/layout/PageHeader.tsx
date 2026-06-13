import { Reveal } from "@/components/motion/Reveal";

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
    <section className="border-b border-line bg-background pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="container">
        <Reveal>
          <p className="kicker">{kicker}</p>
          <h1 className="mt-5 max-w-4xl font-display text-display-sm font-semibold md:text-display">
            {title}
          </h1>
          {intro && <p className="mt-7 max-w-2xl text-balance text-lg text-muted">{intro}</p>}
        </Reveal>
      </div>
    </section>
  );
}
