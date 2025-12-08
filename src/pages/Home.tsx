import { MainLayout } from "@/components/layout/MainLayout";
import { HomeHero } from "@/components/home/HomeHero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

const Home = () => {
  return (
    <MainLayout>
      <HomeHero />
      <ServicesPreview />
      <AboutPreview />
      <Testimonials />
      <FinalCTA />
    </MainLayout>
  );
};

export default Home;
