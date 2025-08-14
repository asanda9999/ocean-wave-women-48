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
import COMPLOGO from "@/assets/COMP-LOGO.png";
import COMPRO from "@/assets/COMPRO.png";
import VISIONIMG from "@/assets/VISION.png";

const AboutSection = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isDesktop = useMediaQuery("(min-width: 768px)");

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
                  src={COMPLOGO} 
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
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-3 group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
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
                  src={COMPLOGO} 
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

        {/* Services Section */}
        <div id="expertise" className="mb-20">
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
              Three Pillars of
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
                      <span className="bg-secondary text-white px-4 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </span>
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
        <motion.div 
          className="interactive-card text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Award className="w-12 h-12 text-secondary mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Maritime Professionals at Our Core
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            At our core, we are maritime professionals and we look forward to bringing our 
            expertise to your organization. One that the broader maritime ecosystem should 
            not only recognize but take pride in supporting.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;