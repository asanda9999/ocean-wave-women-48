import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GlobalMaritimeYouthSection from "@/components/GlobalMaritimeYouthSection";
import ClientsPartnersSection from "@/components/ClientsPartnersSection";
import VacanciesSection from "@/components/VacanciesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { preloadImages } from "@/lib/imagePreloader";

// Import all images used across the application
// Global Maritime Youth Section images
import YOUTHLOGO from "@/assets/YOUTH-LOGO-removebg-preview.png";
import YOUTHIMG from "@/assets/YOUTH-IMG.png";
import EP8 from "@/assets/EP8.png";
import EP7 from "@/assets/EP7.png";
import EP6 from "@/assets/EP6.png";
import EP5 from "@/assets/EP5.png";
import EP4 from "@/assets/EP4.png";
import EP3 from "@/assets/EP3.png";
import EP2 from "@/assets/EP2.png";
import EP1 from "@/assets/EP1.png";
import GMY1 from "@/assets/GMY/_EBP0845.jpg";
import GMY2 from "@/assets/GMY/_EBP8918_Original.jpg";
import GMY3 from "@/assets/GMY/Copy of WhatsApp Image 2023-10-27 at 16.10.54.jpg";
import GMY4 from "@/assets/GMY/GMY13.JPG";
import GMY5 from "@/assets/GMY/GMYY.JPG";
import GMY6 from "@/assets/GMY/image (1).png";
import GMY7 from "@/assets/GMY/IMG-20211110-WA0006.jpg";
import GMY8 from "@/assets/GMY/IMG-20211110-WA0015.jpg";
import GMY9 from "@/assets/GMY/WhatsApp Image 2021-01-14 at 13.27.44 (1).jpg";

// About Section images
import FOUNDIMG from "@/assets/FOUND-IMG-removebg-preview.png";
import COMPRO from "@/assets/COMPRO.png";
import VISIONIMG from "@/assets/VISION.png";
import Logo from "@/assets/Logo.png";
import WME1 from "@/assets/WME/WME1.jpg";
import WME2 from "@/assets/WME/WME2.jpg";
import WME3 from "@/assets/WME/WME3.jpg";
import WME4 from "@/assets/WME/WME4.jpg";
import WME5 from "@/assets/WME/WME5.jpg";
import WME6 from "@/assets/WME/WME6.jpg";
import WME7 from "@/assets/WME/WME7.jpg";
import WME8 from "@/assets/WME/WME8.jpg";
import WME9 from "@/assets/WME/WME9.jpg";
import WME10 from "@/assets/WME/WME10.jpg";
import WME11 from "@/assets/WME/WME11.jpg";
// @ts-expect-error - JPG files are valid image imports
import WME12 from "@/assets/WME/WME12.JPG";
// @ts-expect-error - JPG files are valid image imports
import WME13 from "@/assets/WME/WME13.JPG";
// @ts-expect-error - JPG files are valid image imports
import WME14 from "@/assets/WME/WME14.JPG";
import WME15 from "@/assets/WME/WME15.jpg";
import WME16 from "@/assets/WME/WME16.jpg";

// Gallery Section images
import maritimeTraining from "@/assets/maritime-training.jpg";
import maritimePort from "@/assets/maritime-port.jpg";
import maritimeConsultation from "@/assets/maritime-consultation.jpg";
import maritimeWomenLeaders from "@/assets/maritime-women-leaders.jpg";
import GY from "@/assets/GY.png";
import WMGALL from "@/assets/WMGALL.png";

// Navigation images
import COMPLOGO from "@/assets/COMP-LOGO.png";

// Hero Section image
const HERO_IMAGE_PATH = "/lovable-uploads/f7cb6834-4458-4448-a972-ba0105cea5b9.png";

const Index = () => {
  useEffect(() => {
    // Collect all images to preload
    const allImages = [
      // Global Maritime Youth Section
      YOUTHLOGO,
      YOUTHIMG,
      EP8,
      EP7,
      EP6,
      EP5,
      EP4,
      EP3,
      EP2,
      EP1,
      GMY1,
      GMY2,
      GMY3,
      GMY4,
      GMY5,
      GMY6,
      GMY7,
      GMY8,
      GMY9,
      // About Section
      FOUNDIMG,
      COMPRO,
      VISIONIMG,
      Logo,
      WME1,
      WME2,
      WME3,
      WME4,
      WME5,
      WME6,
      WME7,
      WME8,
      WME9,
      WME10,
      WME11,
      WME12,
      WME13,
      WME14,
      WME15,
      WME16,
      // Gallery Section
      maritimeTraining,
      maritimePort,
      maritimeConsultation,
      maritimeWomenLeaders,
      GY,
      WMGALL,
      // Navigation
      COMPLOGO,
      // Hero Section
      HERO_IMAGE_PATH,
    ];

    // Preload all images in the background
    // Images will be cached by the browser and ready when components render
    preloadImages(allImages).catch((error) => {
      console.warn("Some images failed to preload:", error);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GlobalMaritimeYouthSection />
      <ClientsPartnersSection />
      <VacanciesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
