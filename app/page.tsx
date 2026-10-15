import { Hero } from "@/components/sections/hero";
import { Ticker } from "@/components/sections/ticker";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Tools } from "@/components/sections/tools";
import { Projects } from "@/components/sections/projects";
import { Journey } from "@/components/sections/journey";
import { Contact } from "@/components/sections/contact";
import { Blogs } from "@/components/sections/blogs";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <main id="main" className="flex flex-1 flex-col overflow-x-clip">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Marquee Ticker Ribbon */}
      <Ticker />

      {/* 3. Services I Provide */}
      <Services />

      {/* 4. About Me (Deep Green Block with Stats & Signature) */}
      <About />

      {/* 5. Exploring the Tools Behind My Work */}
      <Tools />

      {/* 6. My Latest Projects (with Case Study Modal) */}
      <Projects />

      {/* 7. Academic and Professional Journey (Education & Work) */}
      <Journey />

      {/* 8. Let's Talk for Your Next Projects (Contact) */}
      <Contact />

      {/* 9. Our Latest News & Blogs */}
      <Blogs />

      {/* 10. FAQs (Interactive Accordion) */}
      <Faq />
    </main>
  );
}
