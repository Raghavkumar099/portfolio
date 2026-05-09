import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <ScrollyCanvas />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
