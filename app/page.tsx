import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Thesis from "@/components/Thesis";
import Journey from "@/components/Journey";
import IELTSBuddy from "@/components/IELTSBuddy";
import Research from "@/components/Research";
import Education from "@/components/Education";
import Beyond from "@/components/Beyond";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Thesis />
        <Journey />
        <IELTSBuddy />
        <Research />
        <Education />
        <Beyond />
        <Contact />
      </main>
    </>
  );
}
