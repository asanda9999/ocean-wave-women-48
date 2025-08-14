import { Button } from "@/components/ui/button";
import { ChevronRight, Anchor, Shield, Globe, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/f7cb6834-4458-4448-a972-ba0105cea5b9.png"
          alt="Women maritime professionals at port with vessel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maritime-deep/95 via-maritime-deep/80 to-maritime-deep/60"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Interactive cursor effect */}
      <motion.div
        className="fixed w-4 h-4 bg-secondary/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.3,
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto container-padding pt-20">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-white">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-8"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Anchor className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Proudly Women-Led Maritime Excellence</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
              variants={itemVariants}
            >
              Advancing Africa's
              <motion.span 
                className="block text-secondary"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  background: "linear-gradient(90deg, hsl(var(--secondary)), hsl(var(--secondary) / 0.8), hsl(var(--secondary)))",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Ocean Economy
              </motion.span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Expert vessel support, strategic advisory, and specialized training combining
              deep industry insight with global standards.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-16"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-2xl font-semibold group shadow-elevated hover:shadow-interactive transition-all duration-300"
                >
                  Explore Our Services
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-primary px-8 py-4 rounded-2xl font-semibold backdrop-blur-sm transition-all duration-300"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Key Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8"
              variants={itemVariants}
            >
              {[
                { icon: Shield, value: "100%", label: "Safety Standards" },
                { icon: Globe, value: "Global", label: "Standards" },
                { icon: Anchor, value: "Expert", label: "Maritime Team" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="flex items-center justify-center w-14 h-14 glass-card rounded-2xl mb-3 mx-auto group-hover:bg-white/20 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-6 h-6 text-secondary" />
                  </motion.div>
                  <div className="text-2xl font-bold text-secondary mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Interactive Features */}
          <motion.div 
            className="hidden lg:block"
            variants={itemVariants}
          >
            <motion.div 
              className="glass-card rounded-3xl p-8 border border-white/20 backdrop-blur-md"
              whileHover={{ scale: 1.02, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Womaritime?</h3>
              <ul className="space-y-4 text-white/90">
                {[
                  "Fresh perspective from women-led leadership",
                  "Technical excellence meets industry innovation", 
                  "Commitment to sustainable maritime practices",
                  "Comprehensive vessel support solutions"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start space-x-3 group cursor-pointer"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="group-hover:text-white transition-colors duration-200">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer group"
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-white/60 text-sm mb-2 group-hover:text-white transition-colors duration-200">Scroll to explore</span>
          <ArrowDown className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-200" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;