import { Button } from "@/components/ui/button";
import { GraduationCap, Lightbulb, Globe, Users, Target, ChevronRight, ArrowRight, ExternalLink, Play, Plus, Minus, Eye } from "lucide-react";
import YOUTHLOGO from "@/assets/YOUTH-LOGO-removebg-preview.png";
import YOUTHIMG from "@/assets/YOUTH-IMG.png";
import EP8 from "@/assets/EP8.png";
import EP7 from "@/assets/EP7.png";
import EP6 from "@/assets/EP6.png";
import EP5 from "@/assets/EP5.png";
import EP4 from "@/assets/EP4.png";
import EP3 from "@/assets/EP3.png";
import EP2 from "@/assets/EP2.png";
import EP1 from "@/assets/EP1.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import { useRef, useState } from "react";


const GlobalMaritimeYouthSection = () => {
  // State for interactive elements
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);

  // Carousel plugin and images (reused from AboutSection)
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const carouselImages = [
    {
      src: "/placeholder.svg",
      alt: "Maritime Youth Image 1",
      title: "Replace with your youth image 1"
    },
    {
      src: "/placeholder.svg",
      alt: "Maritime Youth Image 2",
      title: "Replace with your youth image 2"
    },
    {
      src: "/placeholder.svg",
      alt: "Maritime Youth Image 3",
      title: "Replace with your youth image 3"
    },
     {
      src: "/placeholder.svg",
      alt: "Maritime Youth Image 3",
      title: "Replace with your youth image 4"
    }
  ];

  // Podcast episodes data with YouTube links
  const podcastEpisodes = [
    {
      id: 1,
      thumbnail: EP8,
      title: "Episode 8",
      youtubeUrl: "https://www.youtube.com/watch?v=Lsitjgu1dxg"
    },
    {
      id: 2,
      thumbnail: EP7,
      title: "Episode 7",
      youtubeUrl: "https://www.youtube.com/watch?v=gkL9qgHCn3U"
    },
    {
      id: 3,
      thumbnail: EP6,
      title: "Episode 6",
      youtubeUrl: "https://www.youtube.com/watch?v=Uq2RJ1skaO4"
    },
    {
      id: 4,
      thumbnail: EP5,
      title: "Episode 5",
      youtubeUrl: "https://www.youtube.com/watch?v=zeUeZJzPfOc"
    },
    {
      id: 5,
      thumbnail: EP4,
      title: "Episode 4",
      youtubeUrl: "https://www.youtube.com/watch?v=Zr5Ro4UWezk"
    },
    {
      id: 6,
      thumbnail: EP3,
      title: "Episode 3",
      youtubeUrl: "https://www.youtube.com/watch?v=EL5jBUZFwAg"
    },
    {
      id: 7,
      thumbnail: EP2,
      title: "Episode 2",
      youtubeUrl: "https://www.youtube.com/watch?v=s8ZBJek5Exc"
    },
    {
      id: 8,
      thumbnail: EP1,
      title: "Episode 1",
      youtubeUrl: "https://www.youtube.com/watch?v=noqRsZVLgIA"
    }
  ];
  return (
    <section id="impact" className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 relative overflow-hidden">
      {/* Fun and playful background elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Floating maritime-themed shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary rounded-full animate-ping"></div>
        {/* Fun geometric shapes */}
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-secondary/60 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-primary/40 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-secondary/50 rounded-full animate-ping delay-700"></div>
        {/* Wave-like shapes */}
        <div className="absolute top-10 right-20 w-20 h-20 bg-primary/30 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-10 left-20 w-16 h-16 bg-secondary/40 rounded-full animate-bounce delay-800"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Logo with enhanced interactive styling */}
          <div className="mb-16">
            <div className="text-center">
              <div 
                className={`w-48 h-48 md:w-56 md:h-56 mx-auto mb-8 p-4 bg-white rounded-full shadow-lg border-4 border-primary/20 transition-all duration-500 cursor-pointer group ${isHoveringLogo ? 'scale-110 shadow-2xl border-primary/40' : 'hover:scale-105'}`}
                onMouseEnter={() => setIsHoveringLogo(true)}
                onMouseLeave={() => setIsHoveringLogo(false)}
              >
                <img 
                  src={YOUTHLOGO} 
                  alt="Global Maritime Youth Logo" 
                  className={`w-full h-full object-contain transition-all duration-500 ${isHoveringLogo ? 'rotate-12' : 'group-hover:rotate-6'}`}
                />
                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className={`absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full transition-all duration-700 ${isHoveringLogo ? 'animate-ping' : ''}`}></div>
                  <div className={`absolute bottom-3 left-3 w-1.5 h-1.5 bg-primary/40 rounded-full transition-all duration-700 delay-100 ${isHoveringLogo ? 'animate-ping' : ''}`}></div>
                  <div className={`absolute top-1/2 right-1 w-1 h-1 bg-primary/50 rounded-full transition-all duration-700 delay-200 ${isHoveringLogo ? 'animate-ping' : ''}`}></div>
                </div>
              </div>
            </div>
          </div>
        {/* Fun and energetic header */}
        <div className="text-center mb-20">
         
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-6 leading-tight transform transition-all duration-1000 hover:scale-105">
            Global Maritime Youth
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-200 hover:translate-y-1">
            The non-profit impact arm of Womaritime Experts, on a mission to ignite a love for 
            the ocean while closing the gap between maritime skills and industry needs.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
        
          
          {/* Three Pillars with fun and interactive layout */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: GraduationCap,
                title: "Skills Development",
                description: "Practical training to build a competent and employable maritime youth.",
                details: "We provide hands-on training programs, mentorship opportunities, and industry certifications to prepare youth for successful maritime careers.",
                color: "from-primary/10 to-primary/20",
                bgColor: "bg-gradient-to-br from-primary/5 to-primary/15"
              },
              {
                icon: Lightbulb,
                title: "Entrepreneurship & Community Innovation",
                description: "Nurturing ocean-based businesses and sustainable local impact.",
                details: "Supporting innovative ocean-based startups, community projects, and sustainable business models that benefit coastal communities.",
                color: "from-secondary/10 to-secondary/20",
                bgColor: "bg-gradient-to-br from-secondary/5 to-secondary/15"
              },
              {
                icon: Users,
                title: "Global Exposure & Collaboration",
                description: "Connecting youth to international opportunities and real-world experience.",
                details: "Facilitating international exchanges, global partnerships, and cross-cultural learning experiences in the maritime sector.",
                color: "from-primary/10 to-secondary/20",
                bgColor: "bg-gradient-to-br from-primary/5 to-secondary/15"
              }
            ].map((pillar, index) => (
              <div 
                key={index}
                className={`${pillar.bgColor} border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden ${expandedPillar === index ? 'scale-105 shadow-2xl border-primary' : 'hover:scale-105 border-primary/30'}`}
                onClick={() => setExpandedPillar(expandedPillar === index ? null : index)}
              >
                {/* Fun background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-secondary/20 rounded-full animate-bounce"></div>
                </div>
                
                <div className="flex flex-col items-center text-center relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <pillar.icon className="w-8 h-8" />
                  </div>
                  
                  <h4 className="font-bold text-xl text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  
                  {/* Expandable content with fun styling */}
                  <div className={`overflow-hidden transition-all duration-500 ${expandedPillar === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-white/50 rounded-2xl p-4 border border-primary/20">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {pillar.details}
                      </p>
                    </div>
                  </div>
                  
                  {/* Fun expand/collapse indicator */}
                  <div className="mt-4 flex items-center justify-center">
                    {expandedPillar === index ? (
                      <div className="flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
                        <Minus className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Less</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 group-hover:bg-secondary/20 transition-colors duration-300">
                        <Plus className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-medium text-secondary">More</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Fun Impact Statement */}
          <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 border-2 border-primary/30 rounded-3xl p-10 mb-16 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
            {/* Playful animated background elements */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-6 h-6 bg-secondary/30 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/2 right-8 w-4 h-4 bg-primary/25 rounded-full animate-pulse delay-700"></div>
              <div className="absolute top-1/4 left-8 w-5 h-5 bg-secondary/20 rounded-full animate-bounce delay-500"></div>
            </div>
            
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-500">
                <Target className="w-8 h-8 group-hover:rotate-12 transition-transform duration-500" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 group-hover:scale-105 transition-transform duration-300">
                Our Impact Mission
              </h3>
              
              <div className="space-y-6">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-medium group-hover:text-primary transition-colors duration-500">
                  GMY supports transformation, ESG, and inclusive growth through partnerships 
                  with government, private sector, NGOs, and academia.
                </p>
                <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-medium group-hover:text-primary transition-colors duration-500">
                  As a trusted CSI partner, we help shape purpose-driven leaders who will 
                  steer Africa's ocean economy forward.
                </p>
              </div>
              
            </div>
          </div>
          
          {/* Image with enhanced styling */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <img 
                src={YOUTHIMG} 
                alt="Global Maritime Youth Team" 
                className="w-full h-auto max-h-[600px] object-contain rounded-[3rem] shadow-2xl"
              />
            </div>
          </div>

          {/* Fun Maritime Youth Image Carousel */}
          <div className="mb-16">
            <div className="text-center mb-8">
             
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                Global Maritime Youth Gallery
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Showcasing youth engagement and maritime leadership in action
              </p>
            </div>
            <Carousel
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card 
                        className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-105"
                        onClick={() => setSelectedImage(selectedImage === index ? null : index)}
                      >
                        <div className="aspect-[4/3] relative">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                          />
                          {/* Enhanced overlay with more interactive elements */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="absolute bottom-4 left-4 text-white">
                              <p className="font-semibold text-lg mb-1">{image.title}</p>
                              <p className="text-sm opacity-90">Click to view details</p>
                            </div>
                            {/* Eye icon for viewing */}
                            <div className="absolute top-4 right-4">
                              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                                <Eye className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            {/* Expand indicator */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-12 h-12 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                                <Plus className="w-6 h-6 text-white" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hover:bg-primary/10 hover:border-primary/20 transition-all duration-300" />
              <CarouselNext className="hover:bg-primary/10 hover:border-primary/20 transition-all duration-300" />
            </Carousel>
          </div>

          {/* Fun Podcast Section */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left: Text Content */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">Our Impact</h2>
                <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-4">
                  Unlocking Oceans Economy - Flag ship
                </h3>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Unlocking Oceans Economy is a Womaritime Experts’ flagship knowledge-sharing platform, through podcasting that is designed to connect, inspire, and inform across the maritime sector. Hosted by our founder, Londy Ngcobo, this video podcast brings together voices from across the ocean economy, from seasoned executives and technical experts to bold innovators and future-forward thinkers.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  At its core, the podcast serves to:
                </p>
                <ul className="space-y-3 mb-4">
                  <li>
                    <span className="font-semibold text-primary">Demystify the oceans economy</span> by spotlighting companies, their offerings, and their roles in the maritime value chain.
                  </li>
                  <li>
                    <span className="font-semibold text-secondary">Illuminate opportunity</span> by showcasing diverse career paths, business avenues, and success stories within the industry.
                  </li>
                  <li>
                    <span className="font-semibold text-primary">Bridge knowledge gaps</span> by providing a single, clear, and compelling space for critical maritime conversations, challenges, and actionable insights.
                  </li>
                  <li>
                    <span className="font-semibold text-secondary">Inspire transformation</span>, particularly for women and youth, through visibility and access to real industry stories.
                  </li>
                </ul>
                <p className="text-base md:text-lg text-gray-700">
                  This platform is a direct response to public demand for greater access to insider knowledge and inclusive voices in the maritime world. It stands as a proud pillar of Womaritime Experts’ impact strategy to foster cross-sector learning and accelerating sustainable growth in the oceans economy.
                </p>
              </div>
              {/* Right: Enhanced 2x3 Image Grid with better interactions */}
              <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Enhanced clickable podcast images */}
                  {podcastEpisodes.map((episode) => (
                    <a
                      key={episode.id}
                      href={episode.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-110 group relative cursor-pointer"
                    >
                      <img
                        src={episode.thumbnail}
                        alt={episode.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Enhanced hover overlay with better animations */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 ml-1" />
                          </div>
                          <p className="text-sm font-semibold mb-1">{episode.title}</p>
                          <div className="flex items-center justify-center space-x-1">
                            <ExternalLink className="w-3 h-3" />
                            <span className="text-xs opacity-90">Watch on YouTube</span>
                          </div>
                        </div>
                      </div>
                      {/* Subtle border animation */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-lg transition-all duration-500"></div>
                    </a>
                  ))}
                </div>
               
              </div>
            </div>
          </div>
          
          {/* Fun Contact Info */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/30 rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 group-hover:scale-105 transition-transform duration-300">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
              {[
                { label: "Website", value: "www.womaritime.com", href: "https://www.womaritime.com" },
                { label: "Email", value: "info@globalmaritimeyouth.com", href: "mailto:info@globalmaritimeyouth.com" },
                { label: "Phone", value: "+27 71 879 5034", href: "tel:+27718795034" },
                { label: "Location", value: "SOUTH AFRICA", href: null }
              ].map((contact, index) => (
                <div key={index} className="space-y-2 group/item">
                  <p className="font-semibold text-primary group-hover/item:text-primary/80 transition-colors duration-300">{contact.label}</p>
                  {contact.href ? (
                    <a 
                      href={contact.href}
                      className="block hover:text-primary transition-colors duration-300 hover:scale-105 transform"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="group-hover/item:text-primary/80 transition-colors duration-300">{contact.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMaritimeYouthSection;