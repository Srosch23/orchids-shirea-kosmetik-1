import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Treatments } from "@/components/Treatments";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Treatments />
      <Process />
      <Pricing />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
