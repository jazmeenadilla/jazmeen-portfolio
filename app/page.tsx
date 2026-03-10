// src/app/page.tsx
import HeroData from "@/components/HeroData";
import AnalystToolkit from "@/components/AnalystToolkit";
import CaseStudies from "@/components/CaseStudies";
import ETLProcess from "@/components/ETLProcess";
import QueryContact from "@/components/QueryContact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Education from "@/components/Education";
import Certification from "@/components/Certification";
import Recommendation from "@/components/Recommendation";

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden scroll-smooth">
      <section id="about">
        <HeroData />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <AnalystToolkit />
      </section>
      <section id="projects">
        <CaseStudies />
      </section>
      <section id="certification">
        <Certification />
      </section>
      <section id="recommendation">
        <Recommendation />
      </section>
      <section id="process">
        <ETLProcess />
      </section>
      <section id="contact">
        <QueryContact />
      </section>

      <Footer />
    </main>
  );
}