import About from "@/components/About";
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
