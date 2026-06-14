import { Hero } from "@/components/sections/Hero";
import { KeywordMarquee } from "@/components/sections/KeywordMarquee";
import { About } from "@/components/sections/About";
import { Route } from "@/components/sections/Route";
import { Services } from "@/components/sections/Services";
import { HorizontalShowcase } from "@/components/sections/HorizontalShowcase";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { FlowPaths } from "@/components/ui/FlowPaths";

export default function Home() {
  return (
    <main>
      <Hero />
      <KeywordMarquee />
      <About />
      <Route />
      <Services />
      <HorizontalShowcase />

      {/* FAQ + Contacto comparten un único grupo de líneas continuo: nacen
          arriba, atraviesan la raya divisoria y siguen hacia abajo sin cortarse. */}
      <div className="relative bg-background">
        <FlowPaths
          className="pointer-events-none absolute inset-0 text-foreground [mask-image:radial-gradient(ellipse_52%_82%_at_18%_50%,black,transparent_74%)]"
          mirror
        />
        <Faq />
        <Contact />
      </div>
    </main>
  );
}
