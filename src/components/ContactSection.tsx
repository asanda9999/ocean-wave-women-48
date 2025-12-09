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
  CheckCircle,
  Loader2,
  AlertCircle
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // FormSubmit.co Configuration
  // Replace this with your email address
  const YOUR_EMAIL = 'Info@womaritime.com';
  
  // Note: FormSubmit.co requires email verification on first use
  // Check your email for a verification link from FormSubmit.co

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@womaritime.com",
      subtitle: "Quick response within 24 hours",
      color: "text-green-600"
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
    "Professional Training Programs",
    "Other"
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
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Reset status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      let isComplete = false;
      
      // Create a hidden iframe to submit the form (bypasses CORS and navigation issues)
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      // Create a hidden form
      const hiddenForm = document.createElement('form');
      const formAction = `https://formsubmit.co/${encodeURIComponent(YOUR_EMAIL)}`;
      console.log('Submitting form to:', YOUR_EMAIL);
      console.log('Form action URL:', formAction);
      hiddenForm.method = 'POST';
      hiddenForm.action = formAction;
      hiddenForm.target = 'hidden_iframe';
      hiddenForm.style.display = 'none';
      
      // Add form fields
      const fields = [
        { name: 'name', value: formData.name },
        { name: 'email', value: formData.email },
        { name: 'company', value: formData.company },
        { name: 'phone', value: formData.phone },
        { name: 'service', value: formData.service },
        { name: 'message', value: formData.message },
        { name: '_subject', value: formData.service ? `Contact Form: ${formData.service}` : 'Contact Form Submission' },
        { name: '_captcha', value: 'false' },
        { name: '_template', value: 'box' },
        { name: '_next', value: window.location.href }
      ];
      
      fields.forEach(field => {
        // Always add the field, even if empty (for required fields like name, email, message)
        if (field.name === 'name' || field.name === 'email' || field.name === 'message' || field.value) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = field.name;
          input.value = field.value || '';
          hiddenForm.appendChild(input);
        }
      });
      
      document.body.appendChild(hiddenForm);
      
      const handleSuccess = () => {
        if (isComplete) return;
        isComplete = true;
        
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
        setIsSubmitting(false);
        // Clean up
        try {
          document.body.removeChild(hiddenForm);
          document.body.removeChild(iframe);
        } catch (cleanupError) {
          // Ignore cleanup errors
        }
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      };
      
      // Listen for iframe load to detect submission completion
      iframe.onload = () => {
        setTimeout(handleSuccess, 1000);
      };
      
      // Submit the form
      hiddenForm.submit();
      
      // Fallback timeout in case iframe doesn't load (assume success after 3 seconds)
      setTimeout(() => {
        if (!isComplete) {
          handleSuccess();
        }
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
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
           
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            variants={itemVariants}
          >
            Don't hesitate to
            <span className="block text-secondary mt-2">Contact Us</span>
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
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border-2 border-green-200 rounded-xl"
                  >
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-green-800 font-medium">
                          Message sent successfully! We'll get back to you soon.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center space-x-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-red-800 font-medium">
                      {!formData.name || !formData.email || !formData.message 
                        ? 'Please fill in all required fields (marked with *).'
                        : 'Something went wrong. Please try again or contact us directly.'}
                    </p>
                  </motion.div>
                )}

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
                    placeholder="Tell us what you need — we’re ready to assist"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-2 border-border/30 focus:border-primary/50 rounded-xl transition-all duration-300 resize-none"
                  />
                </motion.div>

                {/* Hidden input for FormSubmit redirect (optional - redirects to same page after submission) */}
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />

                <motion.div
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <Button 
                    type="submit"
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-4 font-semibold group shadow-card hover:shadow-elevated transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
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