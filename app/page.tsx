import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Capabilities } from "@/components/sections/capabilities";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main id="main" className="flex flex-1 flex-col overflow-x-clip">
      <Hero />
      <About />
      <Capabilities />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
