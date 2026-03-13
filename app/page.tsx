import BackgroundGrid from "@/components/layout/BackgroundGrid";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/nav/Nav";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FeaturedProject from "@/components/sections/FeaturedProject";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Music from "@/components/sections/Music";
import Contact from "@/components/sections/Contact";
import ScanlineProgress from "@/components/ui/ScanlineProgress";

export default function Home() {
  return (
    <>
      <BackgroundGrid />
      <ScanlineProgress />
      <Nav />
      <main style={{ position: "relative" }}>
        <Hero />
        <Stats />
        <FeaturedProject />
        <About />
        <Projects />
        <Certifications />
        <Achievements />
        <Music />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
