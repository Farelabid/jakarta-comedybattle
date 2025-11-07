import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HeroStats } from "./components/HeroStats";
import { About } from "./components/About";
import { Timeline } from "./components/Timeline";
import { Venue } from "./components/Venue";
import { RegistrationForm } from "./components/RegistrationForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0a0e27] min-h-screen">
      <Navbar />
      <Hero />
      <HeroStats />
      <About />
      <Timeline />
      <Venue />
      <RegistrationForm />
      <Footer />
    </div>
  );
}