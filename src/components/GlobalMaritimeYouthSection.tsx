import { Button } from "@/components/ui/button";
import { GraduationCap, Lightbulb, Globe, Users, ChevronRight, ArrowRight, ExternalLink, Play, Plus, Minus } from "lucide-react";
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
import GMY1 from "@/assets/GMY/_EBP0845.jpg";
import GMY2 from "@/assets/GMY/_EBP8918_Original.jpg";
import GMY3 from "@/assets/GMY/Copy of WhatsApp Image 2023-10-27 at 16.10.54.jpg";
import GMY4 from "@/assets/GMY/GMY13.JPG";
import GMY5 from "@/assets/GMY/GMYY.JPG";
import GMY6 from "@/assets/GMY/image (1).png";
import GMY7 from "@/assets/GMY/IMG-20211110-WA0006.jpg";
import GMY8 from "@/assets/GMY/IMG-20211110-WA0015.jpg";
import GMY9 from "@/assets/GMY/WhatsApp Image 2021-01-14 at 13.27.44 (1).jpg";
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
      src: GMY1,
      alt: "Global Maritime Youth Image 1",
      title: "Global Maritime Youth"
    },
    {
      src: GMY2,
      alt: "Global Maritime Youth Image 2",
      title: "Global Maritime Youth"
    },
    {
      src: GMY3,
      alt: "Global Maritime Youth Image 3",
      title: "Global Maritime Youth"
    },
    {
      src: GMY4,
      alt: "Global Maritime Youth Image 4",
      title: "Global Maritime Youth"
    },
    {
      src: GMY5,
      alt: "Global Maritime Youth Image 5",
      title: "Global Maritime Youth"
    },
    {
      src: GMY6,
      alt: "Global Maritime Youth Image 6",
      title: "Global Maritime Youth"
    },
    {
      src: GMY7,
      alt: "Global Maritime Youth Image 7",
      title: "Global Maritime Youth"
    },
    {
      src: GMY8,
      alt: "Global Maritime Youth Image 8",
      title: "Global Maritime Youth"
    },
    {
      src: GMY9,
      alt: "Global Maritime Youth Image 9",
      title: "Global Maritime Youth"
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
    <section id="impact" className="py-24 bg-primary/5 relative overflow-hidden">
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
         
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight transform transition-all duration-1000 hover:scale-105">
            Global Maritime Youth
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-200 hover:translate-y-1">
          Global Maritime Youth, the non-profit impact arm of Womaritime Experts exists to ignite a passion for the ocean and bridge the skills gap in the maritime sector.

Through strong partnerships across government, private sector, NGOs, and academia, GMY drives transformation, ESG impact, and inclusive growth.
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
                bgColor: "bg-primary/10"
              },
              {
                icon: Lightbulb,
                title: "Entrepreneurship & Community Innovation",
                description: "Nurturing ocean-based businesses and sustainable local impact.",
                details: "Supporting innovative ocean-based startups, community projects, and sustainable business models that benefit coastal communities.",
                color: "from-secondary/10 to-secondary/20",
                bgColor: "bg-secondary/10"
              },
              {
                icon: Users,
                title: "Global Exposure & Collaboration",
                description: "Connecting youth to international opportunities and real-world experience.",
                details: "Facilitating international exchanges, global partnerships, and cross-cultural learning experiences in the maritime sector.",
                color: "from-primary/10 to-secondary/20",
                bgColor: "bg-primary/10"
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
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <pillar.icon className="w-8 h-8 text-white" />
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
          
          

          {/* Fun Maritime Youth Image Carousel */}
          <div className="mb-16">
            <div className="text-center mb-8">
             
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Global Maritime Youth Gallery
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                As a trusted CSI partner, we develop purpose-driven leaders ready to further drive Africa's blue growth responsibly and inclusively.
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

          {/* Our Impact Header Section */}
          <div className="mb-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Our Impact
              </h2>
            </div>
          </div>

          {/* Fun Podcast Section */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left: Text Content */}
              <div>
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
          <div className="bg-primary/10 border-2 border-primary rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <h3 className="text-2xl font-bold text-primary mb-6 group-hover:scale-105 transition-transform duration-300">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              {[
                { label: "Website", value: "www.womaritime.com", href: "https://www.womaritime.com" },
                { label: "Email", value: "info@globalmaritimeyouth.com", href: "mailto:info@womaritime.com" },
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