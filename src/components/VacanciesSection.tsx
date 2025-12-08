import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Briefcase, MapPin, Clock, ArrowRight, Mail, User, Send, Loader2, CheckCircle, AlertCircle, ChevronDown, ChevronUp, Calendar } from "lucide-react";

type JobOpportunity = {
  id: number;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  closingDate: string;
};

const VacanciesSection = () => {
  const jobOpportunities: JobOpportunity[] = [
    {
      id: 1,
      title: "Junior Project Manager",
      location: "Durban, South Africa",
      type: "Full-time",
      closingDate: "26/01/2026",
      department: "Operations",
      description: `About the Role
We're seeking a motivated Junior Project Manager to support coordination and delivery of maritime projects.

Responsibilities
Assist with project planning & reporting
Coordinate with teams, clients & suppliers
Track deadlines & project tasks
Support documentation, compliance & logistics

Requirements
Diploma/Degree in Project Management or Maritime field
Strong communication & organizational skills
Ability to multitask & work under pressure
Maritime interest is an advantage`,
    },
    {
      id: 2,
      title: "Marketing Coordinator",
      location: "Durban, South Africa",
      type: "Full-time",
      closingDate: "26/01/2026",
      department: "Marketing",
      description: `About the Role
We’re looking for a creative and organised Marketing Coordinator to support our marketing department within our maritime services 

 Responsibilities
Assist with social media planning & content creation
Coordinate marketing campaigns & events
Manage website updates & digital analytics
Support brand materials, designs & presentations
Liaise with suppliers, partners & internal teams

Requirements
Diploma/Degree in Marketing, Communications or related field
Strong writing & content creation skills
Proficient in social media & design tools 
Organised, creative & able to work in a fast-paced environment
Interest in the ocean economy is a plus.`,
    },
    {
      id: 3,
      title: "Graphic Designer",
      location: "Durban, South Africa",
      type: "Full-time",
      closingDate: "26/01/2026",
      department: "Marketing",
      description:`About the Role
      We’re looking for a creative Graphic Designer to produce high-quality visuals that strengthen our brand across digital and print platforms.
      
      Responsibilities
      Design social media graphics, presentations & marketing materials
      Develop brand-aligned layouts, templates & visual assets
      Support website visuals & digital campaigns
      Create clean, modern designs for projects, events & training content
      Collaborate with marketing and project teams
      
      Requirements
      Diploma/Degree in Graphic Design or relevant field
      Strong portfolio showcasing modern, clean design
      Proficiency in Canva, Adobe or similar tools
      Creative, detail-oriented & able to work to deadlines
      Interest in maritime/ocean space is a plus `,
    },
    {
      id: 4,
      title: "SHEQ Coordinator",
      location: "Durban, South Africa",
      type: "Full-time",
      closingDate: "26/01/2026",
      department: "Technical Services",
      description: `About the Role
      We’re looking for a detail-oriented SHEQ Coordinator to support Safety, Health, Environment and Quality activities across our maritime services.
      
       Responsibilities
      Assist with SHEQ documentation, registers & reports
      Support SHE inspections, toolbox talks & basic risk assessments
      Help maintain compliance with maritime standards (SOLAS)
      Maintain quality records, checklists & internal audit support
      Coordinate SHEQ files for vessels, projects & training sites
      Assist with continuous improvement and QMS updates
      
      Requirements
      Diploma/Degree in SHEQ, Maritime Studies or related field
      Basic knowledge of safety practices and compliance
      Strong administrative and documentation skills
      Ability to follow procedures and work to deadlines`,
    },
  ];

  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<number>>(new Set());

  // Function to get first 25 words
  const getFirstNWords = (text: string, n: number = 25): string => {
    const words = text.split(/\s+/);
    if (words.length <= n) return text;
    return words.slice(0, n).join(' ') + '...';
  };

  // Function to format description with sub-headers
  const formatDescription = (description: string, isExpanded: boolean): React.ReactNode => {
    // Add email instruction to the description
    const descriptionWithEmail = `${description}\n\nHow to Apply\nEmail your CV to info@womaritime.com\n\nPlease note: If you don't hear from us within 2 weeks, consider your application unsuccessful.`;
    
    if (!isExpanded) {
      const truncated = getFirstNWords(descriptionWithEmail, 25);
      return <span>{truncated}</span>;
    }

    // Split by lines and format
    const lines = descriptionWithEmail.split('\n').filter(line => line.trim());
    const parts: React.ReactNode[] = [];
    
    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      // Check if it's a sub-header (Responsibilities, Requirements, About the Role, How to Apply)
      if (trimmedLine === 'Responsibilities' || trimmedLine === 'Requirements' || 
          trimmedLine === 'About the Role' || trimmedLine === 'How to Apply' ||
          trimmedLine.startsWith('Please note:')) {
        if (index > 0) parts.push(<br key={`br-${index}`} />);
        const isNote = trimmedLine.startsWith('Please note:');
        parts.push(
          <h4 key={`header-${index}`} className={`font-bold ${isNote ? 'text-amber-600' : 'text-foreground'} mt-4 mb-2 text-base`}>
            {trimmedLine}
          </h4>
        );
      } else if (trimmedLine) {
        parts.push(
          <p key={`para-${index}`} className="mb-2">
            {trimmedLine}
          </p>
        );
      }
    });
    
    return <div>{parts}</div>;
  };

  const toggleDescription = (jobId: number) => {
    setExpandedDescriptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(jobId)) {
        newSet.delete(jobId);
      } else {
        newSet.add(jobId);
      }
      return newSet;
    });
  };


  return (
    <section id="vacancies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Career Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Become part of a dynamic team driving excellence across Africa's ocean economy
            <br/>Discover opportunities to grow,innovate and make a lasting impact.
          </p>
        </div>

        {/* Job Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobOpportunities.map((job) => (
            <Card key={job.id} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-primary/70 hover:border-primary bg-white hover:bg-primary/5">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </CardTitle>
                  <Briefcase className="w-6 h-6 text-primary flex-shrink-0 ml-4" />
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center text-sm text-foreground/80">
                    <MapPin className="w-4 h-4 mr-2 text-[#AC963E]" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-foreground/80">
                    <Clock className="w-4 h-4 mr-2 text-[#AC963E]" />
                    <span className="font-medium">{job.type}</span>
                    <span className="mx-2 text-foreground/30">•</span>
                    <Calendar className="w-4 h-4 mr-1.5 text-[#AC963E]" />
                    <span className="font-medium">Closes {job.closingDate}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#F5F0E1] text-[#AC963E] border border-[#E0D5B8]">
                    {job.department}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground/80 leading-relaxed">
                  {formatDescription(job.description, expandedDescriptions.has(job.id))}
                </CardDescription>
                {job.description.split(/\s+/).length > 25 && (
                  <button
                    onClick={() => toggleDescription(job.id)}
                    className="mt-4 text-[#AC963E] hover:text-[#8A7A32] font-semibold text-sm flex items-center gap-1.5 transition-colors px-3 py-1.5 -ml-3 rounded-md hover:bg-[#F5F0E1]"
                  >
                    {expandedDescriptions.has(job.id) ? (
                      <>
                        View Less
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        View More
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </CardContent>
              <CardFooter className="pt-0">
                <div className="w-full text-center">
                  <a 
                    href="mailto:info@womaritime.com" 
                    className="inline-flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2 text-[#AC963E]" />
                    info@womaritime.com
                  </a>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

    </section>
  );
};

export default VacanciesSection;

