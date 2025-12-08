import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Treatments } from "@/components/Treatments";
import { ByonikTreatments } from "@/components/ByonikTreatments";
import { SlimyonikTreatments } from "@/components/SlimyonikTreatments";
import { WellnessServices } from "@/components/WellnessServices";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Treatments />
      <ByonikTreatments />
      <SlimyonikTreatments />
      <WellnessServices />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
