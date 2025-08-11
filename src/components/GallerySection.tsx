import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, ZoomIn, X } from "lucide-react";

import maritimeTraining from "@/assets/maritime-training.jpg";
import maritimePort from "@/assets/maritime-port.jpg";
import maritimeConsultation from "@/assets/maritime-consultation.jpg";
import maritimeWomenLeaders from "@/assets/maritime-women-leaders.jpg";
import GY from "@/assets/GY.png";
import WMGALL from "@/assets/WMGALL.png";


const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const placeholderSections = [
    {
      id: 1,
      title: "Womaritime Gallery",
      description: "Professional maritime services and expertise showcase",
      category: "Womaritime",
      image: WMGALL
    },
    {
      id: 2,
      title: "Global Maritime Youth Gallery", 
      description: "Youth development and training programs",
      category: "Global Maritime Youth",
      image: GY
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Work in Action</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Gallery of
            <span className="block text-secondary">Maritime Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Witness our commitment to maritime excellence through comprehensive 
            services, professional training, and industry-leading operations.
          </p>
        </div>

        {/* Gallery Placeholder Sections */}
        <div className="grid gap-8 mb-12">
          {placeholderSections.map((section) => (
            <>
              <Card 
                key={section.id} 
                className="w-full max-w-2xl mx-auto overflow-hidden border-2 border-dashed border-muted-foreground/30 p-0"
              >
                <div className="w-full aspect-[16/9] relative">
                  {/* Image or Placeholder Area */}
                  {section.image ? (
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => setSelectedImage(section.image)}
                    />
                  ) : (
                    <div className="w-full h-full bg-muted/50 flex items-center justify-center aspect-[16/9]">
                      <div className="text-center">
                        <Camera className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                        <p className="text-sm text-muted-foreground font-medium">
                          {section.category} Images
                        </p>
                        <p className="text-xs text-muted-foreground/70 mt-1">
                          Upload your photos here
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
              <div className="p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {section.title}
                </h3>
                <p className="text-muted-foreground">
                  {section.description}
                </p>
              </div>
            </>
          ))}
        </div>

      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;