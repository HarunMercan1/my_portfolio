import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        {/* Blog placeholder - will be built later */}
        <section id="blog" className="py-20">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold gradient-text mb-4">Blog</h2>
            <p className="text-text-muted">Bu bölüm yakında eklenecek...</p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
