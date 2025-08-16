import { Button } from "@/components/ui/button";
import { GraduationCap, Lightbulb, Globe, Users, Target, ChevronRight, ArrowRight } from "lucide-react";
import YOUTHLOGO from "../assets/YOUTH-LOGO-removebg-preview.png";
import YOUTHIMG from "../assets/YOUTH-IMG.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import { useRef } from "react";


const GlobalMaritimeYouthSection = () => {
  // Carousel plugin and images (reused from AboutSection)
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const carouselImages = [
    {
      src: "/placeholder.svg",
      alt: "Maritime Youth Image 1",
      title: "Replace with your youth image 1"
    },
    {
      src: "/placeholder.svg",
      alt: "Maritime Youth Image 2",
      title: "Replace with your youth image 2"
    },
    {
      src: "/placeholder.svg",
      alt: "Maritime Youth Image 3",
      title: "Replace with your youth image 3"
    },
     {
      src: "/placeholder.svg",
      alt: "Maritime Youth Image 3",
      title: "Replace with your youth image 4"
    }
  ];
  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with enhanced styling */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Globe className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Global Maritime Youth
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The non-profit impact arm of Womaritime Experts, on a mission to ignite a love for 
            the ocean while closing the gap between maritime skills and industry needs.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Logo with enhanced styling */}
          <div className="mb-16">
            <div className="text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 p-4 bg-white rounded-full shadow-lg border-4 border-primary/20">
                <img 
                  src={YOUTHLOGO} 
                  alt="Global Maritime Youth Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Three Pillars with improved layout */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white border-2 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group" style={{ borderColor: '#024b31' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-3">Skills Development</h4>
                <p className="text-gray-600 leading-relaxed">Practical training to build a competent and employable maritime youth.</p>
              </div>
            </div>
            
            <div className="bg-white border-2 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group" style={{ borderColor: '#024b31' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-3">Entrepreneurship & Community Innovation</h4>
                <p className="text-gray-600 leading-relaxed">Nurturing ocean-based businesses and sustainable local impact.</p>
              </div>
            </div>
            
            <div className="bg-white border-2 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group" style={{ borderColor: '#024b31' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-3">Global Exposure & Collaboration</h4>
                <p className="text-gray-600 leading-relaxed">Connecting youth to international opportunities and real-world experience.</p>
              </div>
            </div>
          </div>
          
          {/* Impact Statement with enhanced styling */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-2 rounded-3xl p-8 mb-16 hover:shadow-xl transition-all duration-300" style={{ borderColor: '#024b31' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-800 mb-6 font-medium">
                GMY supports transformation, ESG, and inclusive growth through partnerships 
                with government, private sector, NGOs, and academia.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-800 mb-8 font-medium">
                As a trusted CSI partner, we help shape purpose-driven leaders who will 
                steer Africa's ocean economy forward.
              </p>
              
            </div>
          </div>
          
          {/* Image with enhanced styling */}
          <div className="mb-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl transform rotate-1"></div>
              <div className="relative">
                <img 
                  src={YOUTHIMG} 
                  alt="Global Maritime Youth Team" 
                  className="w-full h-auto max-h-96 object-contain rounded-3xl shadow-2xl border-4 transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                  style={{ borderColor: '#024b31' }}
                />
              </div>
            </div>
          </div>

          {/* Maritime Youth Image Carousel */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Global Maritime Youth <span className="text-secondary">Gallery</span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Showcasing youth engagement and maritime leadership
              </p>
            </div>
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-5xl mx-auto"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden">
                        <div className="aspect-[4/3] relative">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                              <p className="font-semibold">{image.title}</p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          
          {/* Contact Info with enhanced styling */}
          <div className="bg-white border-2 rounded-2xl p-8 text-center shadow-lg" style={{ borderColor: '#024b31' }}>
            <h3 className="text-xl font-bold text-primary mb-6">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
              <div className="space-y-2">
                <p className="font-semibold text-primary">Website</p>
                <p>WWW.WOMARITIME.COM</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-primary">Email</p>
                <p>INFO@GLOBALMARITIMEYOUTH.COM</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-primary">Phone</p>
                <p>+27 71 879 5034</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-primary">Location</p>
                <p>SOUTH AFRICA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMaritimeYouthSection;