import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { 
  Ship, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Award, 
  Heart,
  CheckCircle,
  Anchor,
  ArrowRight
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import FOUNDIMG from "@/assets/FOUND-IMG-removebg-preview.png";
import COMPRO from "@/assets/COMPRO.png";
import VISIONIMG from "@/assets/VISION.png";
import Logo from "@/assets/Logo.png"  



const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Carousel plugin and images
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  
  const carouselImages = [
    {
      src: "/placeholder.svg",
      alt: "Womaritime Experts Team Image 1",
      title: "Maritime Excellence in Action"
    },
    {
      src: "/placeholder.svg", 
      alt: "Womaritime Experts Team Image 2",
      title: "Women Leading Maritime Innovation"
    },
    {
      src: "/placeholder.svg",
      alt: "Womaritime Experts Team Image 3", 
      title: "Strategic Maritime Advisory"
    },
    {
      src: "/placeholder.svg",
      alt: "Womaritime Experts Team Image 4",
      title: "Vessel Support & Technical Services"
    }
  ];

  const services = [
    {
      icon: Ship,
      title: "Vessel Support & Technical Services",
      description: "Reliable, end-to-end support for vessel operations including dry docking, bunkering, crew services, ship provisioning, repairs, maintenance, compliance and certification.",
      delay: 0,
      isPopular: false
    },
    {
      icon: TrendingUp,
      title: "Strategic Maritime Advisory",
      description: "Expert guidance across regulatory compliance, project management, procurement solutions and shore-to-ship integration.",
      delay: 0.2,
      isPopular: true
    },
    {
      icon: BookOpen,
      title: "Specialised Maritime Training",
      description: "Accredited and industry-relevant training programmes designed to equip individuals and institutions with skills for the ocean economy.",
      delay: 0.4,
      isPopular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="section-padding bg-gradient-minimal" ref={sectionRef}>
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-primary/5 rounded-full px-4 py-2 mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Womaritime Experts</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            variants={itemVariants}
          >
            Integrated Maritime Services
            <span className="block text-secondary mt-2">for Africa's Ocean Economy</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We combine deep industry insight with global standards to keep fleets and 
            organisations operating safely, efficiently, and sustainably.
          </motion.p>
        </motion.div>

        {/* Company Profile Section */}
        <motion.div 
          className="mb-20"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid md:grid-cols-12 gap-0 rounded-3xl overflow-hidden shadow-elevated">
            <div className="md:col-span-1 bg-primary"></div>
            
            <div className="md:col-span-11 bg-white p-8 md:p-12 relative">
              <div className="absolute top-6 right-6 hidden md:block">
                <motion.img 
                  src={Logo} 
                  alt="Womaritime Experts Logo" 
                  className="h-20 w-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative group">
                    <img 
                      src={COMPRO} 
                      alt="Maritime women professionals at work" 
                      className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-card group-hover:shadow-elevated transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      <span className="text-primary">Company</span>
                      <span className="text-secondary ml-2">PROFILE</span>
                    </h3>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Womaritime Experts (PTY) LTD is an integrated maritime services company advancing Africa's 
                      ocean economy through expert vessel support, strategic advisory, and specialized training.
                    </p>
                    <p>
                      We combine deep industry insight with global standards to keep fleets and organisations 
                      operating safely, efficiently, and sustainably.
                    </p>
                    <p>
                      Proudly women-led, we bring fresh perspective, technical excellence, and a steadfast 
                      commitment to a thriving maritime ecosystem.
                    </p>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision & Mission Section */}
        <motion.div 
          className="mb-20"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-elevated">
            <div className="bg-white p-8 md:p-12">
              <div className="mb-8">
                <motion.img 
                  src={Logo} 
                  alt="Womaritime Experts Logo" 
                  className="h-20 w-auto"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="space-y-8">
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
                  <div className="bg-primary p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
                    <p className="text-white leading-relaxed pl-4">
                      To be Africa's most trusted maritime partner, advancing ocean economy growth through excellence, inclusion, and sustainable impact.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
                  <div className="bg-primary p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
                    <p className="text-white leading-relaxed pl-4">
                      To deliver integrated maritime services that drive vessel performance, reinforce compliance, and equip organisations with strategic tools powered by insight, innovation, and commitment to maritime transformation.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div 
              className="bg-white relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={VISIONIMG} 
                alt="Women working in maritime industry" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Story Card Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-elevated bg-white/90 backdrop-blur-sm border-2">
            <div className="flex flex-col items-center justify-center p-8 md:p-12">
              <img src={FOUNDIMG} alt="Founder" className="w-40 h-40 object-cover rounded-2xl mb-6 shadow-card" />
              <h2 className="text-4xl font-bold text-primary mb-2">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-2">Founded in 2019</p>
              <div className="mt-4 text-center">
                <span className="font-bold text-secondary text-lg">Londy Ngcobo</span>
                <p className="text-sm text-muted-foreground">CEO of Womaritime Experts and Founder Global Maritime Youth</p>
              </div>
            </div>
            <div className="bg-primary/90 p-8 md:p-12 flex items-center">
              <div>
                <p className="text-white font-semibold mb-4">
                  Womaritime Experts was born out of a deep understanding of both the operational and strategic needs of the maritime industry. After years at sea including making history as Africa’s first female dredge master and later serving as Maritime Compliance Manager and Designated Person Ashore (DPA) for one of South Africa’s largest state-owned entities, our founder, Londy Ngcobo, identified a crucial gap: the need for stronger alignment between onboard operations and shore-based strategy, and the visible underrepresentation of women in technical and advisory roles across the ocean economy.
                </p>
                <p className="text-white mb-4">
                  In response to the reality that women make up less than 2% of the maritime workforce, Womaritime Experts was founded not as a movement, but as a high-impact service company that delivers tangible results while championing greater representation.
                </p>
                <p className="text-white mb-4">
                  Today, our team of maritime professionals, consultants, and sector leaders reflects the strength, excellence, and diversity that continues to drive Africa’s ocean economy forward.
                </p>
                <p className="text-white mb-4">
                  From boardrooms to shipyards, and from training rooms to global stages, we lead with purpose and the bold belief that transformation is not a side agenda, it is a strategic advantage. One that the broader maritime ecosystem should not only recognize but take pride in supporting.
                </p>
                <p className="text-white">
                  Thank you for taking the time to explore our profile. At our core, we are maritime professionals and we look forward to bringing our expertise to your organization.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel Section */}
        <motion.div 
          className="mb-20"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-8">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              variants={itemVariants}
            >
              Our Maritime <span className="text-secondary">Excellence</span>
            </motion.h3>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Showcasing our commitment to maritime innovation and professional excellence
            </motion.p>
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
        </motion.div>

  <div id="services" className="mb-20">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-primary/5 rounded-full px-4 py-2 mb-6"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Anchor className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Core Services</span>
            </motion.div>
            
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              variants={itemVariants}
            >
              
              <span className="block text-secondary mt-2">Maritime Excellence</span>
            </motion.h3>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Comprehensive solutions that drive your maritime operations forward with precision and expertise.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={cn(
                  "relative group",
                  service.isPopular && "z-10"
                )}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: service.isPopular ? -10 : 0, 
                  scale: 1 
                } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: service.delay,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className={cn(
                  "relative h-full p-8 bg-white/90 backdrop-blur-sm border-2 transition-all duration-500 group-hover:shadow-interactive rounded-3xl",
                  service.isPopular 
                    ? "border-secondary shadow-elevated" 
                    : "border-border/20 hover:border-primary/30"
                )}>
                  {service.isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                     
                    </div>
                  )}
                  
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary p-4 shadow-card"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-secondary rounded-b-3xl"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
    
      </div>
    </section>
  );
};

export default AboutSection;