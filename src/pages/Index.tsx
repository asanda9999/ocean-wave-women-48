import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GlobalMaritimeYouthSection from "@/components/GlobalMaritimeYouthSection";
import UnlockingOceansSection from "@/components/UnlockingOceansSection";
import ClientsPartnersSection from "@/components/ClientsPartnersSection";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GlobalMaritimeYouthSection />
      <UnlockingOceansSection />
      <ClientsPartnersSection />
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
