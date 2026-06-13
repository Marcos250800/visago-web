import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Route } from "@/components/sections/Route";
import { Services } from "@/components/sections/Services";
import { Destinations } from "@/components/sections/Destinations";
import { BecaLabFeature } from "@/components/sections/BecaLabFeature";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Route />
      <Services />
      <Destinations />
      <BecaLabFeature />
      <Faq />
      <Contact />
    </main>
  );
}
