import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Target, 
  Eye, 
  Compass, 
  Waves,
  Lightbulb,
  Globe,
  ArrowRight
} from "lucide-react";

const VisionSection = () => {
  const visionPoints = [
    {
      icon: Globe,
      title: "Global Maritime Standards",
      description: "Elevating African maritime operations to meet and exceed international benchmarks"
    },
    {
      icon: Waves,
      title: "Sustainable Ocean Economy",
      description: "Promoting environmentally responsible practices that protect our marine ecosystems"
    },
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
      description: "Pioneering new approaches and technologies in maritime services"
    },
    {
      icon: Target,
      title: "Operational Excellence",
      description: "Ensuring every vessel and operation meets the highest safety and efficiency standards"
    }
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Eye className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Our Vision & Mission</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Shaping the Future of
            <span className="block text-secondary">Maritime Excellence</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Building a thriving maritime ecosystem that drives economic growth while 
            maintaining the highest standards of safety and sustainability.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              To be Africa's leading integrated maritime services company, recognized 
              for excellence in vessel support, strategic innovation, and sustainable 
              ocean economy development. We envision a maritime industry where women 
              leadership drives transformational change.
            </p>
          </Card>

          {/* Mission Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <Compass className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              To deliver comprehensive maritime solutions that combine technical 
              expertise, strategic insight, and specialized training. We empower 
              organizations with the knowledge and support needed to operate safely, 
              efficiently, and sustainably in the global maritime landscape.
            </p>
          </Card>
        </div>

        {/* Strategic Pillars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-12">
            Our Strategic Pillars
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visionPoints.map((point, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-secondary/20 rounded-full mb-4 group-hover:bg-secondary/30 transition-colors">
                    <point.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {point.title}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionSection;
