// src/app/page.tsx
import HeroData from "@/components/HeroData";
import AnalystToolkit from "@/components/AnalystToolkit";
import CaseStudies from "@/components/CaseStudies";
import ETLProcess from "@/components/ETLProcess";
import QueryContact from "@/components/QueryContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden scroll-smooth">
      <section id="about">
        <HeroData />
      </section>
      <section id="skills">
        <AnalystToolkit />
      </section>
      <section id="projects">
        <CaseStudies />
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