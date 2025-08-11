import { Button } from "@/components/ui/button";
import { ChevronRight, Anchor, Shield, Globe } from "lucide-react";
import heroImage from "@/assets/maritime-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/f7cb6834-4458-4448-a972-ba0105cea5b9.png"
          alt="Women maritime professionals at port with vessel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maritime-deep/90 via-maritime-deep/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Anchor className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Proudly Women-Led Maritime Excellence</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Advancing Africa's
              <span className="block text-secondary animate-wave">Ocean Economy</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Expert vessel support, strategic advisory, and specialized training combining
              deep industry insight with global standards.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="gold" size="lg" className="group">
                Explore Our Services
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-2 mx-auto">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">100%</div>
                <div className="text-sm text-white/80">Safety Standards</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-2 mx-auto">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">Global</div>
                <div className="text-sm text-white/80">Standards</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-2 mx-auto">
                  <Anchor className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">Expert</div>
                <div className="text-sm text-white/80">Maritime Team</div>
              </div>
            </div>
          </div>

          {/* Right Column - Additional Content */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Womaritime?</h3>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Fresh perspective from women-led leadership</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Technical excellence meets industry innovation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Commitment to sustainable maritime practices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comprehensive vessel support solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;