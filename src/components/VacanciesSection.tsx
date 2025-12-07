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
import { Briefcase, MapPin, Clock, ArrowRight, Mail, User, Send, Loader2, CheckCircle, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";

type JobOpportunity = {
  id: number;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
};

const VacanciesSection = () => {
  const jobOpportunities: JobOpportunity[] = [
    {
      id: 1,
      title: "Junior Project Manager",
      location: "Durban, South Africa",
      type: "Full-time",
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

  const [selectedJob, setSelectedJob] = useState<JobOpportunity | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<number>>(new Set());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // FormSubmit.co Configuration - same email as contact form
  const YOUR_EMAIL = 'Info@womaritime.com';

  // Function to get first 25 words
  const getFirstNWords = (text: string, n: number = 25): string => {
    const words = text.split(/\s+/);
    if (words.length <= n) return text;
    return words.slice(0, n).join(' ') + '...';
  };

  // Function to format description with sub-headers
  const formatDescription = (description: string, isExpanded: boolean): React.ReactNode => {
    if (!isExpanded) {
      const truncated = getFirstNWords(description, 25);
      return <span>{truncated}</span>;
    }

    // Split by lines and format
    const lines = description.split('\n').filter(line => line.trim());
    const parts: React.ReactNode[] = [];
    
    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      // Check if it's a sub-header (Responsibilities, Requirements, About the Role)
      if (trimmedLine === 'Responsibilities' || trimmedLine === 'Requirements' || trimmedLine === 'About the Role') {
        if (index > 0) parts.push(<br key={`br-${index}`} />);
        parts.push(
          <h4 key={`header-${index}`} className="font-bold text-foreground mt-4 mb-2 text-base">
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

  const handleApplyClick = (job: JobOpportunity) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
    setFormData({ name: '', email: '', phone: '', coverLetter: '' });
    setSubmitStatus('idle');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email) {
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
      hiddenForm.method = 'POST';
      hiddenForm.action = formAction;
      hiddenForm.target = 'hidden_iframe';
      hiddenForm.style.display = 'none';
      
      // Add form fields
      const fields = [
        { name: 'name', value: formData.name },
        { name: 'email', value: formData.email },
        { name: 'phone', value: formData.phone },
        { name: 'coverLetter', value: formData.coverLetter },
        { name: 'jobTitle', value: selectedJob?.title || '' },
        { name: 'jobLocation', value: selectedJob?.location || '' },
        { name: 'jobDepartment', value: selectedJob?.department || '' },
        { name: '_subject', value: `Job Application: ${selectedJob?.title || 'Position'}` },
        { name: '_captcha', value: 'false' },
        { name: '_template', value: 'box' },
        { name: '_next', value: window.location.href }
      ];
      
      // Add all fields to form
      fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value || '';
        hiddenForm.appendChild(input);
      });
      
      document.body.appendChild(hiddenForm);
      
      const handleSuccess = () => {
        if (isComplete) return;
        isComplete = true;
        
        setSubmitStatus('success');
        // Reset form
        setFormData({ name: '', email: '', phone: '', coverLetter: '' });
        setIsSubmitting(false);
        // Clean up
        try {
          document.body.removeChild(hiddenForm);
          document.body.removeChild(iframe);
        } catch (cleanupError) {
          // Ignore cleanup errors
        }
        // Close dialog after 2 seconds on success
        setTimeout(() => {
          setIsDialogOpen(false);
          setSubmitStatus('idle');
        }, 2000);
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
            <Card key={job.id} className="group hover:shadow-elevated transition-all duration-300 hover:border-primary/30">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </CardTitle>
                  <Briefcase className="w-6 h-6 text-primary flex-shrink-0 ml-4" />
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    {job.type}
                  </div>
                </div>
                <div className="mt-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                    {job.department}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {formatDescription(job.description, expandedDescriptions.has(job.id))}
                </CardDescription>
                {job.description.split(/\s+/).length > 25 && (
                  <button
                    onClick={() => toggleDescription(job.id)}
                    className="mt-3 text-primary hover:text-primary/80 font-semibold text-sm flex items-center gap-1 transition-colors"
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
              <CardFooter>
                <Button 
                  variant="outline-maritime" 
                  className="w-full group/btn"
                  onClick={() => handleApplyClick(job)}
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Application Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              Apply for {selectedJob?.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              {selectedJob && (
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Location:</span> {selectedJob.location}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Department:</span> {selectedJob.department}
                  </p>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-medium">
                      Application submitted successfully! We'll review your application and get back to you soon.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-800 font-medium">
                  {!formData.name || !formData.email 
                    ? 'Please fill in all required fields (marked with *).'
                    : 'Something went wrong. Please try again.'}
                </p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <Input 
                    name="name"
                    placeholder="Your full name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 border-2 border-border/30 focus:border-primary/50 rounded-xl h-12 text-gray-900"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 border-2 border-border/30 focus:border-primary/50 rounded-xl h-12 text-gray-900"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <Input 
                  name="phone"
                  type="tel"
                  placeholder="+27 XX XXX XXXX" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-2 border-border/30 focus:border-primary/50 rounded-xl h-12 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Cover Letter / Message
                </label>
                <Textarea 
                  name="coverLetter"
                  rows={5} 
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="border-2 border-border/30 focus:border-primary/50 rounded-xl resize-none text-gray-900"
                />
              </div>
            </div>

            <DialogFooter className="flex-col sm:flex-row gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VacanciesSection;

