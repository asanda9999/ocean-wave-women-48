import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Ship, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Award, 
  Heart,
  CheckCircle,
  Anchor
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import FOUNDIMG from "@/assets/FOUND-IMG-removebg-preview.png";
import COMPLOGO from "@/assets/COMP-LOGO.png";
import MARITIMEWOMEN from "@/assets/maritime-women-leaders.jpg";

const AboutSection = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const services = [
    {
      icon: Ship,
      title: "Vessel Support & Technical Services",
      description: "Reliable, end-to-end support for vessel operations including dry docking, bunkering, crew services, ship provisioning, repairs, maintenance, compliance and certification. We ensure vessels meet regulatory standards and achieve safe, efficient port turnaround.",
      delay: 0,
      isPopular: false
    },
    {
      icon: TrendingUp,
      title: "Strategic Maritime Advisory",
      description: "Expert guidance across regulatory compliance, project management, procurement solutions and shore-to-ship integration. We help clients navigate complexities with insight and precision.",
      delay: 0.2,
      isPopular: true
    },
    {
      icon: BookOpen,
      title: "Specialised Maritime Training",
      description: "Accredited and industry-relevant training programmes designed to equip individuals and institutions with skills for the ocean economy. From technical competency and regulatory understanding to leadership and soft skills development.",
      delay: 0.4,
      isPopular: false
    }
  ];


  return (
    <section id="about" className="py-20 bg-maritime-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Womaritime Experts</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Integrated Maritime Services
            <span className="block text-secondary">for Africa's Ocean Economy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine deep industry insight with global standards to keep fleets and 
            organisations operating safely, efficiently, and sustainably.
          </p>
        </div>

        {/* Company Profile Section */}
        <div className="mb-16">
                     <div className="grid md:grid-cols-12 gap-0">
             {/* Left Column - Dark Green Background */}
             <div className="md:col-span-1 bg-maritime-deep"></div>
             
             {/* Right Column - White Background with Content */}
             <div className="md:col-span-11 bg-white p-6 md:p-8 rounded-l-2xl relative">
              {/* Logo in Top Right Corner */}
              <div className="absolute top-4 right-4">
                <img 
                  src={COMPLOGO} 
                  alt="Womaritime Experts Logo" 
                  className="h-24 w-auto"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
                {/* Left Side - Image */}
                <div>
                  <div className="relative">
                                           <img 
                        src={MARITIMEWOMEN} 
                        alt="Maritime women professionals at work" 
                        className="w-full h-96 object-cover rounded-lg shadow-xl"
                      />
                  </div>
                </div>
                
                {/* Right Side - Text Content */}
                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">
                      <span className="text-maritime-deep">Company</span>
                      <span className="text-secondary ml-2">PROFILE</span>
                    </h3>
                  </div>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
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
                </div>
              </div>
              
              {/* Contact Information at Bottom */}
              <div className="mt-8 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
                  <span>WWW.WOMARITIME.COM</span>
                  <span>INFO@WOMARITIME.COM</span>
                  <span>+27(0) 71 879 5034</span>
                  <span>SOUTH AFRICA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section - New Layout */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Column - Branding and Text */}
            <div className="bg-white p-8 md:p-12">
              {/* Logo and Branding */}
              <div className="mb-8">
                <img 
                  src={COMPLOGO} 
                  alt="Womaritime Experts Logo" 
                  className="h-16 w-auto mb-3"
                />
                <h3 className="text-xl font-bold text-maritime-deep mb-1">WOMARITIME EXPERTS</h3>
                <p className="text-sm text-muted-foreground">Trusted Aboard. Trusted Ashore.</p>
              </div>

              {/* Our Vision */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-secondary mb-4">Our Vision</h3>
                <div className="bg-maritime-deep p-6 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
                  <p className="text-white text-lg leading-relaxed pl-4">
                    To be Africa's most trusted maritime partner, advancing ocean economy growth through excellence, inclusion, and sustainable impact.
                  </p>
                </div>
              </div>

              {/* Our Mission */}
              <div>
                <h3 className="text-3xl font-bold text-secondary mb-4">Our Mission</h3>
                <div className="bg-maritime-deep p-6 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
                  <p className="text-white text-lg leading-relaxed pl-4">
                    To deliver integrated maritime services that drive vessel performance, reinforce compliance, and equip organisations with strategic tools that are powered by insight, innovation, and a bold commitment to maritime transformation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="bg-white">
              <img 
                src={MARITIMEWOMEN} 
                alt="Women working in maritime industry" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-0">
                         {/* Left Column - White Background */}
             <div className="bg-white p-4 md:p-8">
               {/* Logo and Title */}
               <div className="mb-6">
                 <div className="text-center mb-1">
                   <img 
                     src={COMPLOGO} 
                     alt="Womaritime Experts Logo" 
                     className="h-20 w-auto mx-auto"
                   />
                 </div>
                 
                 <h3 className="text-2xl font-bold text-center mb-2" style={{ color: '#024b31' }}>Our Story</h3>
                 <p className="text-sm text-center mb-6" style={{ color: '#024b31' }}>Founded in 2019</p>
               </div>
              
              {/* Founder Image */}
              <div className="text-center mb-6">
                <div className="w-64 h-64 mx-auto mb-4">
                  <img 
                    src={FOUNDIMG} 
                    alt="Londy Ngcobo - Founder of Womaritime Experts" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="w-16 h-0.5 mx-auto mb-4" style={{ backgroundColor: '#024b31' }}></div>
                <h4 className="font-semibold text-lg" style={{ color: '#024b31' }}>Londy Ngcobo</h4>
                <p className="text-sm" style={{ color: '#024b31' }}>CEO of Womaritime Experts and Founder Global Maritime Youth</p>
              </div>
              
              
            </div>
            
            {/* Right Column - Dark Green Background */}
            <div className="p-8 md:p-12" style={{ backgroundColor: '#024b31' }}>
              <div className="text-white space-y-4">
                <p>
                  Womaritime Experts was born out of a deep understanding of both the operational 
                  and strategic needs of the maritime industry. After years at sea including making 
                  history as Africa's first female dredge master and later serving as Maritime 
                  Compliance Manager and Designated Person Ashore (DPA) for one of South Africa's 
                  largest state-owned entities, our founder, Londy Ngcobo, identified a crucial gap: 
                  the need for stronger alignment between onboard operations and shore-based strategy, 
                  and the visible underrepresentation of women in technical and advisory roles across 
                  the ocean economy.
                </p>
                <p>
                  In response to the reality that women make up less than 2% of the maritime workforce, 
                  Womaritime Experts was founded not as a movement, but as a high-impact service company 
                  that delivers tangible results while championing greater representation.
                </p>
                <p>
                  Today, our team of maritime professionals, consultants, and sector leaders reflects 
                  the strength, excellence, and diversity that continues to drive Africa's ocean economy 
                  forward. From boardrooms to shipyards, and from training rooms to global stages, we 
                  lead with purpose and the bold belief that transformation is not a side agenda—it is 
                  a strategic advantage.
                </p>
                <p>
                  We believe that this transformation should be recognized and supported by the broader 
                  maritime ecosystem, as it represents not just progress, but a fundamental shift toward 
                  a more inclusive and effective industry.
                </p>
                <p>
                  Thank you for your interest in our story. We are maritime professionals first, and 
                  we look forward to offering our expertise to help drive your maritime initiatives forward.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Anchor className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Core Services</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Three Pillars of
              <span className="block text-secondary">Maritime Excellence</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions that drive your maritime operations forward with precision and expertise.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  y: 50,
                  scale: 0.95,
                  rotateY: index === 0 ? -15 : index === 2 ? 15 : 0
                }}
                whileInView={{
                  opacity: 1,
                  y: service.isPopular ? -20 : 0,
                  scale: 1,
                  rotateY: 0,
                  x: isDesktop ? (index === 0 ? 30 : index === 2 ? -30 : 0) : 0
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 1.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  delay: service.delay,
                  opacity: { duration: 0.6 }
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={cn(
                  "relative group",
                  service.isPopular && "z-10",
                  index === 0 || index === 2 ? "z-0" : "z-10"
                )}
              >
                
                
                <Card className={cn(
                  "relative h-full p-8 bg-white/80 backdrop-blur-sm border-2 transition-all duration-500 group-hover:shadow-2xl",
                  service.isPopular 
                    ? "border-secondary shadow-lg" 
                    : "border-white/20 hover:border-white/40"
                )}>
                  {/* Icon Container with Animation */}
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary p-4 shadow-lg"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: service.delay + 0.2, type: "spring" }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <motion.h4 
                      className="text-xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: service.delay + 0.4 }}
                    >
                      {service.title}
                    </motion.h4>
                    <motion.p 
                      className="text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: service.delay + 0.6 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <motion.div 
                    className="absolute top-4 right-4 w-2 h-2 bg-secondary rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.2, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 w-1 h-1 bg-secondary rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                  
                  {/* Hover Effect Line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-secondary rounded-b-2xl"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Connecting Lines with Animation */}
          <motion.div 
            className="hidden md:block relative mt-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="absolute top-1/2 left-1/3 w-1/6 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent transform -translate-y-1/2 opacity-30" />
            <div className="absolute top-1/2 right-1/3 w-1/6 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent transform -translate-y-1/2 opacity-30" />
          </motion.div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Maritime Professionals at Our Core
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At our core, we are maritime professionals and we look forward to bringing our 
              expertise to your organization. One that the broader maritime ecosystem should 
              not only recognize but take pride in supporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;