import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Users, Lightbulb, TrendingUp, Heart } from "lucide-react";

const ImpactSection = () => {
  const impactPoints = [
    {
      title: "Demystify the oceans economy",
      description: "by spotlighting companies, their offerings, and their roles in the maritime value chain."
    },
    {
      title: "Illuminate opportunity",
      description: "by showcasing diverse career paths, business avenues, and success stories within the industry."
    },
    {
      title: "Bridge knowledge gaps",
      description: "by providing a single, clear, and compelling space for critical maritime conversations, challenges, and actionable insights."
    },
    {
      title: "Inspire transformation",
      description: "particularly for women and youth, through visibility and access to real industry stories."
    }
  ];

  const podcastEpisodes = [
    {
      id: 1,
      title: "Episode 1: Unlocking Ocean Economy",
      guest: "Doris Van Staden",
      description: "Exploring maritime opportunities"
    },
    {
      id: 2,
      title: "Episode 2: Ocean Leadership",
      guest: "Lizelle Remmers",
      description: "Women in maritime leadership"
    },
    {
      id: 3,
      title: "Episode 3: Maritime Innovation",
      guest: "David Parker",
      description: "Technology in ocean economy"
    },
    {
      id: 4,
      title: "Episode 4: Sustainable Oceans",
      guest: "Kendra Sothern-Moya",
      description: "Environmental sustainability"
    },
    {
      id: 5,
      title: "Episode 5: Future of Maritime",
      guest: "Linden McBride",
      description: "Next generation maritime"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Unlocking Oceans Economy - 
            <span className="block text-secondary">Flagship</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Unlocking Oceans Economy is a Womaritime Experts' flagship knowledge-sharing 
              platform, through podcasting that is designed to connect, inspire, and inform across 
              the maritime sector. Hosted by our founder, Londy Ngcobo, this video podcast brings 
              together voices from across the ocean economy, from seasoned executives and 
              technical experts to bold innovators and future-forward thinkers.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At its core, the podcast serves to:
            </p>

            {/* Impact Points */}
            <div className="space-y-6 mb-8">
              {impactPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {point.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              This platform is a direct response to public demand for greater access to insider 
              knowledge and inclusive voices in the maritime world. It stands as a proud pillar of 
              Womaritime Experts' impact strategy to foster cross-sector learning and accelerating 
              sustainable growth in the oceans economy.
            </p>
          </div>

          {/* Right Column - Podcast Episodes Grid */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {podcastEpisodes.map((episode) => (
                <Card key={episode.id} className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                    {/* Placeholder for podcast episode thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Users className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-xs font-medium text-primary">
                          {episode.guest}
                        </p>
                      </div>
                    </div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary ml-1" />
                      </div>
                    </div>

                    {/* Episode title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                      <p className="text-white text-xs font-medium">
                        {episode.title}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* YouTube Link */}
            <div className="flex justify-center">
              <Button 
                variant="maritime" 
                size="lg" 
                className="group"
              >
                <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center mr-3">
                  <Play className="w-3 h-3 text-white fill-white" />
                </div>
                Watch on YouTube
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;