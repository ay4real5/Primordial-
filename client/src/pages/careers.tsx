import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Briefcase,
  Heart,
  Clock,
  DollarSign,
  GraduationCap,
  Users,
  CheckCircle,
  ArrowRight,
  MapPin,
  Award,
  Upload,
  FileText,
  X,
} from "lucide-react";

import teamImage from "@assets/stock_images/nurse_caregiver_team_0031a28d.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const applicationFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please select your experience level"),
  message: z.string().min(10, "Please tell us about yourself"),
});

type ApplicationFormData = z.infer<typeof applicationFormSchema>;

export default function Careers() {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      message: "",
    },
  });

  const applicationMutation = useMutation({
    mutationFn: async (data: ApplicationFormData) => {
      return apiRequest("POST", "/api/careers", data);
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
      });
      form.reset();
      setSelectedJob(null);
      setResumeFile(null);
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at info@primordialhealthservices.health",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ApplicationFormData) => {
    applicationMutation.mutate(data);
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Above-market compensation with regular raises and bonuses",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose hours that work for your lifestyle",
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Ongoing education and certification opportunities",
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Medical, dental, and vision coverage for eligible employees",
    },
    {
      icon: Users,
      title: "Supportive Team",
      description: "Work with caring professionals who support each other",
    },
    {
      icon: Award,
      title: "Recognition Programs",
      description: "Rewards for exceptional care and dedication",
    },
  ];

  const openPositions = [
    {
      id: "caregiver",
      title: "Caregiver",
      type: "Full-time / Part-time",
      location: "Various Locations",
      description: "Provide compassionate in-home care including personal care, companionship, and household assistance.",
      requirements: [
        "High school diploma or equivalent",
        "Valid driver's license",
        "Ability to pass background check",
        "Compassionate and patient demeanor",
        "Prior caregiving experience preferred",
      ],
    },
    {
      id: "cna",
      title: "Certified Nursing Assistant (CNA)",
      type: "Full-time",
      location: "Various Locations",
      description: "Provide skilled personal care services under the direction of healthcare professionals.",
      requirements: [
        "Current CNA certification",
        "1+ year experience in home health or related field",
        "Valid driver's license",
        "Strong communication skills",
        "CPR certification",
      ],
    },
    {
      id: "care-coordinator",
      title: "Care Coordinator",
      type: "Full-time",
      location: "Main Office",
      description: "Coordinate care plans, manage caregiver schedules, and serve as the point of contact for families.",
      requirements: [
        "Bachelor's degree in healthcare or related field",
        "2+ years healthcare coordination experience",
        "Excellent organizational skills",
        "Strong interpersonal abilities",
        "Knowledge of home health care regulations",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={teamImage} 
            alt="Our healthcare team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Join Our Team
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-primary">Caring Team</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Make a real difference in people's lives. We're looking for compassionate individuals who want to help seniors live independently and with dignity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium">Why Work With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Benefits of Joining Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We value our caregivers and offer competitive benefits to support your career and wellbeing.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover-elevate h-full" data-testid={`benefit-card-${index}`}>
                  <CardContent className="p-6">
                    <motion.div 
                      className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium">Open Positions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Current Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our open positions and find the role that's right for you.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {openPositions.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
              <Card data-testid={`job-card-${index}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      
                      {selectedJob === job.id && (
                        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                          <h4 className="font-medium text-foreground mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-foreground">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto"
                        onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                        data-testid={`button-view-job-${index}`}
                      >
                        {selectedJob === job.id ? "Hide Details" : "View Details"}
                      </Button>
                      <Button
                        className="w-full sm:w-auto"
                        onClick={() => {
                          form.setValue("position", job.title);
                          document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        data-testid={`button-apply-job-${index}`}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Apply Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll be in touch soon.
            </p>
          </div>
          
          <Card>
            <CardContent className="p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            data-testid="input-applicant-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              {...field}
                              data-testid="input-applicant-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="(555) 123-4567"
                              {...field}
                              data-testid="input-applicant-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position Applying For</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-position">
                              <SelectValue placeholder="Select a position" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Caregiver">Caregiver</SelectItem>
                            <SelectItem value="Certified Nursing Assistant (CNA)">Certified Nursing Assistant (CNA)</SelectItem>
                            <SelectItem value="Care Coordinator">Care Coordinator</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Years of Experience</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-experience">
                              <SelectValue placeholder="Select your experience" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0-1">Less than 1 year</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5+">5+ years</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Resume Upload */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Upload Resume (Optional)
                    </label>
                    <div className="relative">
                      {!resumeFile ? (
                        <label
                          htmlFor="resume-upload"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-md cursor-pointer hover:border-primary/50 transition-colors bg-muted/30"
                        >
                          <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                          <span className="text-sm text-muted-foreground">Click to upload your resume</span>
                          <span className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX (Max 5MB)</span>
                          <input
                            id="resume-upload"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                if (file.size > 5 * 1024 * 1024) {
                                  toast({
                                    title: "File too large",
                                    description: "Please upload a file smaller than 5MB",
                                    variant: "destructive",
                                  });
                                  return;
                                }
                                setResumeFile(file);
                              }
                            }}
                            data-testid="input-resume-upload"
                          />
                        </label>
                      ) : (
                        <div className="flex items-center justify-between p-4 border rounded-md bg-muted/30">
                          <div className="flex items-center gap-3">
                            <FileText className="w-8 h-8 text-primary" />
                            <div>
                              <p className="text-sm font-medium">{resumeFile.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {(resumeFile.size / 1024).toFixed(1)} KB
                              </p>
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => setResumeFile(null)}
                            data-testid="button-remove-resume"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell Us About Yourself</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Share your experience, qualifications, and why you want to join our team..."
                            className="resize-none min-h-[150px]"
                            {...field}
                            data-testid="textarea-applicant-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={applicationMutation.isPending}
                    data-testid="button-submit-application"
                  >
                    {applicationMutation.isPending ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
