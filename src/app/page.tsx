import { Hero } from "@/components/sections/Hero";
import { KeywordMarquee } from "@/components/sections/KeywordMarquee";
import { About } from "@/components/sections/About";
import { Route } from "@/components/sections/Route";
import { Services } from "@/components/sections/Services";
import { HorizontalShowcase } from "@/components/sections/HorizontalShowcase";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <KeywordMarquee />
      <About />
      <Route />
      <Services />
      <HorizontalShowcase />
      <Faq />
      <Contact />
    </main>
  );
}
