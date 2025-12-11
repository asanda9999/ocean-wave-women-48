import { Button } from "@/components/ui/button";
import { 
  Anchor, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Globe,
  ArrowUp,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "What we do", href: "#services" },
    { name: "Impact", href: "#impact" },
    { name: "Partners", href: "#clients" },
    { name: "Opportunties", href: "#vacancies" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Vessel Support Services",
    "Strategic Maritime Advisory",
    "Professional Training Programs"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center space-x-3 mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
               
                <div>
                  <span className="text-xl font-bold">Womaritime Experts</span>
                  <span className="block text-sm text-white/80">PTY LTD</span>
                </div>
              </motion.div>
              
              <p className="text-white/90 mb-8 leading-relaxed max-w-md">
                An integrated maritime services company advancing Africa's ocean economy 
                through expert vessel support, strategic advisory, and specialized training. 
                Proudly women-led, bringing fresh perspective and technical excellence.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                {[
                  { icon: Globe, text: "www.womaritime.com" },
                  { icon: Mail, text: "info@womaritime.com" },
                  { icon: MapPin, text: "SOUTH AFRICA" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 group cursor-pointer"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm group-hover:text-white transition-colors duration-200">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-secondary transition-colors duration-300 text-sm block py-1"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-white/80 text-sm block py-1">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-white/10 py-8"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <p className="text-white/80 text-sm flex items-center">
                
                © 2025 Hydra Tech Solutions. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <motion.a 
                  href="#" 
                  className="text-white/80 hover:text-secondary transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-white/80 hover:text-secondary transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  Terms of Service
                </motion.a>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {/* Social Links */}
              <div className="flex space-x-3">
           
              </div>

              {/* Back to Top */}
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={scrollToTop}
                  className="text-white/80 hover:text-secondary hover:bg-white/10 rounded-xl transition-all duration-300 group"
                >
                  <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;