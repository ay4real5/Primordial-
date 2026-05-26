import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import {
  Heart,
  HandHeart,
  Utensils,
  Home,
  Car,
  Stethoscope,
  Users,
  ArrowRight,
  Phone,
  ChevronRight,
  Package,
  Building2,
} from "lucide-react";

import seniorImage from "@assets/stock_images/senior_elderly_perso_7a86ef06.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Bundled services - In-Home Daily Support
const inHomeServices = [
  {
    id: "personal-care",
    icon: Heart,
    title: "Personal Care",
    description: "Bathing, dressing, grooming, and mobility assistance with dignity.",
  },
  {
    id: "household-support",
    icon: Home,
    title: "Household Support",
    description: "Light housekeeping, laundry, bed making, and organization.",
  },
  {
    id: "meal-preparation",
    icon: Utensils,
    title: "Meal Preparation",
    description: "Nutritious meal planning, cooking, and special diet accommodation.",
  },
];

// Standalone service
const companionshipService = {
  id: "companionship",
  icon: HandHeart,
  title: "Companionship",
  description: "Meaningful social interaction, activities, and emotional support to combat loneliness.",
  features: [
    "Friendly conversation",
    "Games and hobbies",
    "Reading and outings",
    "Social activities",
    "Emotional support",
    "Technology help",
  ],
};

// Bundled services - Health Support
const healthServices = [
  {
    id: "health-support",
    icon: Stethoscope,
    title: "Health Monitoring",
    description: "Vital signs, exercise assistance, and care coordination.",
  },
  {
    id: "medication-management",
    icon: Package,
    title: "Medication Management",
    description: "Reminders, tracking, and prescription coordination.",
  },
];

// Standalone services
const standaloneServices = [
  {
    id: "transportation",
    icon: Car,
    title: "Transportation",
    description: "Safe, reliable rides for appointments, errands, and social activities.",
    features: [
      "Doctor appointments",
      "Pharmacy visits",
      "Grocery shopping",
      "Social events",
      "Door-to-door service",
      "Wait-and-return",
    ],
  },
  {
    id: "group-home",
    icon: Building2,
    title: "Group Home Care",
    description: "24/7 residential care in a comfortable group home setting.",
    features: [
      "Private & shared rooms",
      "24/7 supervision",
      "Community dining",
      "Social activities",
      "Medication management",
      "All-inclusive care",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={seniorImage} 
            alt="Senior receiving care" 
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
              Comprehensive Care Solutions
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Explore our care services. Some can be bundled together for comprehensive care, 
              while others work best as standalone services. Click any service to learn more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* In-Home Daily Support - Bundled */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="mb-4">
              <span className="text-sm font-medium text-primary uppercase tracking-wide">Bundled Services</span>
              <h2 className="text-2xl font-bold mt-1">In-Home Daily Support</h2>
              <p className="text-muted-foreground mt-2">
                These three services work seamlessly together for comprehensive in-home care
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="inhome" className="border rounded-lg overflow-hidden bg-card">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 [&[data-state=open]]:bg-muted/50">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Home className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Daily Living Support Package</h3>
                      <p className="text-sm text-muted-foreground font-normal">Personal Care + Household + Meal Prep</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-3 gap-4 pt-4">
                    {inHomeServices.map((service) => (
                      <Link key={service.id} href={`/services/${service.id}`}>
                        <Card className="h-full hover:border-primary transition-colors cursor-pointer group">
                          <CardContent className="p-4">
                            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20">
                              <service.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="font-semibold mb-2">{service.title}</h4>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                            <div className="flex items-center gap-1 mt-3 text-sm text-primary font-medium">
                              Learn more <ChevronRight className="w-4 h-4" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 rounded-md">
                    <p className="text-sm text-center">
                      <span className="font-medium">Bundle & Save:</span> Get all three services together for comprehensive daily support
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          {/* Companionship - Standalone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="mb-4">
              <span className="text-sm font-medium text-primary uppercase tracking-wide">Standalone Service</span>
            </div>
            
            <Link href={`/services/${companionshipService.id}`}>
              <Card className="overflow-hidden hover:border-primary transition-colors cursor-pointer group">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20">
                        <companionshipService.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold">{companionshipService.title}</h3>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <p className="text-muted-foreground mt-2">{companionshipService.description}</p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
                          {companionshipService.features.map((feature, idx) => (
                            <span key={idx} className="text-sm text-muted-foreground flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-primary"></span>
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* Health Support - Bundled */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="mb-4">
              <span className="text-sm font-medium text-primary uppercase tracking-wide">Bundled Services</span>
              <h2 className="text-2xl font-bold mt-1">Health & Wellness Support</h2>
              <p className="text-muted-foreground mt-2">
                Medical support services that work together for better health outcomes
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="health" className="border rounded-lg overflow-hidden bg-card">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 [&[data-state=open]]:bg-muted/50">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Health Management Package</h3>
                      <p className="text-sm text-muted-foreground font-normal">Health Monitoring + Medication Management</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    {healthServices.map((service) => (
                      <Link key={service.id} href={`/services/${service.id}`}>
                        <Card className="h-full hover:border-primary transition-colors cursor-pointer group">
                          <CardContent className="p-4">
                            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20">
                              <service.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="font-semibold mb-2">{service.title}</h4>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                            <div className="flex items-center gap-1 mt-3 text-sm text-primary font-medium">
                              Learn more <ChevronRight className="w-4 h-4" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          {/* Standalone Services Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <div className="mb-4">
              <span className="text-sm font-medium text-primary uppercase tracking-wide">Standalone Services</span>
              <h2 className="text-2xl font-bold mt-1">Specialized Care</h2>
              <p className="text-muted-foreground mt-2">
                Individual services that can be added to any care plan
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {standaloneServices.map((service) => (
                <Link key={service.id} href={`/services/${service.id}`}>
                  <Card className="h-full hover:border-primary transition-colors cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">{service.title}</h3>
                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mt-3">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                            {service.features.length > 3 && (
                              <span className="text-xs text-muted-foreground">+{service.features.length - 3} more</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Care Plan?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Every family's needs are unique. Contact us to discuss a personalized care plan 
              that bundles the right services for your loved one.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+18303993602" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (830) 399-3602
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
