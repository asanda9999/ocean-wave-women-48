import { Button } from "@/components/ui/button";
import { 
  Anchor, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Globe,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Vision", href: "#vision" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Vessel Support Services",
    "Strategic Maritime Advisory",
    "Professional Training Programs"
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-secondary rounded-lg">
                  <Anchor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">Womaritime Experts</span>
                  <span className="block text-sm text-white/80">(PTY) LTD</span>
                </div>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed max-w-md">
                An integrated maritime services company advancing Africa's ocean economy 
                through expert vessel support, strategic advisory, and specialized training. 
                Proudly women-led, bringing fresh perspective and technical excellence.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-secondary" />
                  <span className="text-sm">WWW.WOMARITIME.COM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-secondary" />
                  <span className="text-sm">INFO@WOMARITIME.COM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="text-sm">+27(0) 71 879 5034</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="text-sm">SOUTH AFRICA</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-secondary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-white/80 text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <p className="text-white/80 text-sm">
                © 2024 Womaritime Experts (PTY) LTD. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-white/80 hover:text-secondary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/80 hover:text-secondary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Social Links */}
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="text-white/80 hover:text-secondary hover:bg-white/10">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white/80 hover:text-secondary hover:bg-white/10">
                  <Globe className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white/80 hover:text-secondary hover:bg-white/10">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>

              {/* Back to Top */}
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="text-white/80 hover:text-secondary hover:bg-white/10"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;