import HeroSection from "@/components/landing/HeroSection";
import AssistancePrograms from "@/components/landing/AssistancePrograms";
import HowItWorks from "@/components/landing/HowItWorks";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <AssistancePrograms />
        <HowItWorks />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;