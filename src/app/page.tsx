import Hero from "@/components/dom/Hero";
import Testimonials from "@/components/dom/Testimonials";
import About from "@/components/dom/About";
import Contact from "@/components/dom/Contact";
import Projects from "@/components/dom/Projects";
import Scene from "@/components/canvas/Scene";

export default function Home() {
  return (
    <main className="relative w-full bg-neutral-950 min-h-screen">
      <Scene />
      <Hero />
      <Projects />
      <Testimonials />
      <About />
      <Contact />
    </main>
  );
}
