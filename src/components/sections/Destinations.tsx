import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { DESTINATIONS } from "@/lib/content";

/** Destinos — España y EE.UU., enlazan a las guías de blog. */
export function Destinations() {
  return (
    <section className="border-t border-line bg-background py-24 md:py-36">
      <div className="container">
        <Reveal>
          <p className="kicker">Destinos</p>
          <h2 className="mt-5 max-w-xl font-display text-display-sm font-semibold">
            Dos rutas, un mismo objetivo.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {DESTINATIONS.map((d, i) => (
            <Reveal key={d.code} delay={i * 0.08}>
              <Link
                href={d.href}
                className="group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl border border-line p-8 transition-colors duration-500 hover:bg-card md:aspect-[16/10]"
              >
                <div className="flex items-center justify-between">
                  <span className="kicker">{d.code}</span>
                  <span className="text-xl opacity-30 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden>→</span>
                </div>

                <span
                  className="pointer-events-none absolute -bottom-6 -right-2 select-none font-display text-[28vw] font-bold leading-none text-foreground/[0.04] transition-colors duration-500 group-hover:text-foreground/[0.06] md:text-[14vw]"
                  aria-hidden
                >
                  {d.code}
                </span>

                <div className="relative">
                  <h3 className="font-display text-4xl font-semibold md:text-5xl">{d.name}</h3>
                  <p className="mt-3 max-w-sm text-balance text-muted">{d.blurb}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
