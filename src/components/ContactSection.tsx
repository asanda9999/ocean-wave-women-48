import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const contactInfo = [
  
    {
      icon: Mail,
      title: "Email Us",
      details: "INFO@WOMARITIME.COM",
      subtitle: "Quick response within 24 hours",
      color: "text-green-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+27 71 879 5034",
      subtitle: "Monday - Friday, 8AM - 6PM",
      color: "text-purple-600"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "SOUTH AFRICA",
      subtitle: "Strategic maritime hub location",
      color: "text-orange-600"
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-minimal" ref={sectionRef}>
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
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            variants={itemVariants}
          >
            Ready to Transform Your
            <span className="block text-secondary mt-2">Maritime Operations?</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Connect with our team of maritime experts to discuss how we can 
            support your vessel operations, strategic planning, and training needs.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card className="p-8 md:p-10 bg-white/80 backdrop-blur-sm border-2 border-border/20 hover:border-primary/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                <Send className="w-6 h-6 mr-3 text-primary" />
                Send Us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input 
                      name="name"
                      placeholder="Your full name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-2 border-border/30 focus:border-primary/50 rounded-xl h-12 transition-all duration-300"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input 
                      type="email" 
                      name="email"
                      placeholder="your.email@company.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-2 border-border/30 focus:border-primary/50 rounded-xl h-12 transition-all duration-300"
                    />
                  </motion.div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Company
                    </label>
                    <Input 
                      name="company"
                      placeholder="Your company name" 
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-2 border-border/30 focus:border-primary/50 rounded-xl h-12 transition-all duration-300"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input 
                      name="phone"
                      placeholder="+27 XX XXX XXXX" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-2 border-border/30 focus:border-primary/50 rounded-xl h-12 transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Service Interest
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-border/30 focus:border-primary/50 rounded-xl bg-background transition-all duration-300 h-12"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    name="message"
                    rows={5} 
                    placeholder="Tell us about your maritime needs, current challenges, or how we can help..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-2 border-border/30 focus:border-primary/50 rounded-xl transition-all duration-300 resize-none"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-4 font-semibold group shadow-card hover:shadow-elevated transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-2 border-border/20 hover:border-primary/20 hover:shadow-elevated transition-all duration-300 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className={`p-3 rounded-2xl ${info.color.replace('text-', 'bg-').replace('-600', '-100')}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Quick Response Promise */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h4 className="font-semibold text-foreground">Quick Response Guarantee</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;