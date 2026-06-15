import type { Metadata } from "next";

import About from "@/components/About";

export const metadata: Metadata = {
  title: { absolute: "김재경 | Frontend Engineer - 포트폴리오" },
};
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TeamLead from "@/components/TeamLead";
import TechMigrations from "@/components/TechMigrations";
import Timeline from "@/components/Timeline";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <TeamLead />
      <Achievements />
      <TechMigrations />
      <Timeline />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;
