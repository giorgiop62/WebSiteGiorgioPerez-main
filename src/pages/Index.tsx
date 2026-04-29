import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Tech } from "@/components/sections/Tech";
import { Contact } from "@/components/sections/Contact";
import { MapSection } from "@/components/sections/MapSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Tech />
      <Contact />
      <MapSection />
      <Footer />
    </main>
  );
};

export default Index;
