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
  Globe
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Globe,
      title: "Website",
      details: "WWW.WOMARITIME.COM",
      subtitle: "Visit our official website"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "INFO@WOMARITIME.COM",
      subtitle: "Quick response within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+27(0) 71 879 5034",
      subtitle: "Monday - Friday, 8AM - 6PM"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "SOUTH AFRICA",
      subtitle: "Strategic maritime hub location"
    }
  ];

  const services = [
    "Vessel Support Services",
    "Strategic Maritime Advisory",
    "Professional Training Programs"
  ];

  return (
    <section id="contact" className="py-20 bg-maritime-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your
            <span className="block text-secondary">Maritime Operations?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with our team of maritime experts to discuss how we can 
            support your vessel operations, strategic planning, and training needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="your.email@company.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input placeholder="Your company name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input placeholder="+27 XX XXX XXXX" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Interest
                  </label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    rows={5} 
                    placeholder="Tell us about your maritime needs, current challenges, or how we can help..."
                  />
                </div>

                <Button variant="maritime" size="lg" className="w-full group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-ocean rounded-lg">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary font-medium">
                        {info.details}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Africa's Maritime Transformation
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Be part of the maritime industry's evolution with Womaritime Experts. 
              Together, we're building a safer, more efficient, and sustainable ocean economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="maritime" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="gold" size="lg">
                Download Company Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;