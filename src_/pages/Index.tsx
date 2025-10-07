import HeroSection from "@/pages/home/01-HeroSection";
import ValuePillarsSection from "@/pages/home/02-ValuePillarsSection";
import AboutUsSection from "@/pages/home/03-AboutUsSection";
import SolutionsSection from "@/pages/home/04-SolutionsSection";
import TechnologiesSection from "@/pages/home/05-TechnologiesSection";
import TestimonialsSection from "@/pages/home/06-TestimonialsSection";
import LeadershipSection from "@/pages/home/07-LeadershipSection";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen">

      <HeroSection />
      <AnimatedSection animation="fade-slide">
        <ValuePillarsSection />
      </AnimatedSection>
      {/*<ValuePillarsSection />*/}
      <AboutUsSection />
      <SolutionsSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <LeadershipSection />

    </div>
  );
};

export default Index;