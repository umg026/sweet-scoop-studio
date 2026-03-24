import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FlavorsSection from "@/components/FlavorsSection";
import AboutSection from "@/components/AboutSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FlavorsSection />
      <AboutSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
