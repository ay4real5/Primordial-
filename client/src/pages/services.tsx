import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  Bath,
  Shirt,
  Pill,
  ShoppingBag,
  Dog,
  Music,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react";

import seniorImage from "@assets/stock_images/senior_elderly_perso_7a86ef06.jpg";

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

export default function Services() {
  const mainServices = [
    {
      icon: Heart,
      title: "Personal Care",
      description: "Compassionate assistance with daily personal care needs to maintain dignity and comfort.",
      details: [
        "Bathing and showering assistance",
        "Dressing and grooming",
        "Oral hygiene care",
        "Incontinence care",
        "Mobility assistance",
        "Safety and fall protection",
      ],
    },
    {
      icon: HandHeart,
      title: "Companionship",
      description: "Meaningful social interaction and emotional support to combat loneliness.",
      details: [
        "Friendly conversation and listening",
        "Playing games and hobbies",
        "Reading aloud",
        "Accompanying on walks",
        "Social outings and activities",
        "Emotional support",
      ],
    },
    {
      icon: Utensils,
      title: "Meal Preparation",
      description: "Nutritious meal planning, preparation, and assistance with eating.",
      details: [
        "Meal planning and prep",
        "Special diet accommodation",
        "Eating assistance",
        "Kitchen cleanup",
        "Grocery shopping",
        "Nutrition monitoring",
      ],
    },
    {
      icon: Home,
      title: "Household Support",
      description: "Light housekeeping to maintain a clean, safe, and comfortable living environment.",
      details: [
        "Light housekeeping",
        "Laundry and linens",
        "Bed making",
        "Dusting and organizing",
        "Trash removal",
        "Pet care and feeding",
      ],
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Safe, reliable transportation for appointments, errands, and social activities.",
      details: [
        "Doctor appointments",
        "Pharmacy visits",
        "Grocery shopping",
        "Post office visits",
        "Social events",
        "Recreational outings",
      ],
    },
    {
      icon: Stethoscope,
      title: "Health Support",
      description: "Non-medical health support services to help maintain wellbeing.",
      details: [
        "Medication reminders",
        "Vital signs monitoring",
        "Exercise assistance",
        "Health appointment tracking",
        "Prescription pickups",
        "Care coordination",
      ],
    },
  ];

  const additionalServices = [
    { icon: Bath, name: "Bathing Assistance" },
    { icon: Shirt, name: "Dressing Help" },
    { icon: Pill, name: "Medication Reminders" },
    { icon: ShoppingBag, name: "Errands & Shopping" },
    { icon: Dog, name: "Pet Care" },
    { icon: Music, name: "Recreational Activities" },
  ];

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
              Comprehensive home health care services designed to help your loved ones live safely, comfortably, and independently at home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {mainServices.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden h-full" data-testid={`service-card-${index}`}>
                  <CardContent className="p-0">
                    <div className="p-6 border-b border-border">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.05 }}
                        >
                          <service.icon className="w-7 h-7 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-muted/30">
                      <div className="grid grid-cols-2 gap-3">
                        {service.details.map((detail, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We also offer a variety of other services to meet your specific care needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {additionalServices.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center hover-elevate" data-testid={`additional-service-${index}`}>
                  <CardContent className="p-4">
                    <motion.div 
                      className="w-12 h-12 mx-auto rounded-md bg-primary/10 flex items-center justify-center mb-3"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <p className="text-sm font-medium text-foreground">{service.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Every family's needs are unique. Contact us to discuss a personalized care plan tailored specifically for your loved one.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" data-testid="button-contact-services">
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+18303993602" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto" data-testid="button-call-services">
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
