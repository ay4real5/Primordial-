import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Heart, 
  Users, 
  Home as HomeIcon, 
  Clock, 
  Shield, 
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  Award
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

import heroImage1 from "@assets/centre-for-ageing-better-Sy2QJEibgHg-unsplash_1767484806404.jpg";
import heroImage2 from "@assets/georg-arthur-pflueger-TeWwYARfcM4-unsplash_1767484806405.jpg";
import heroImage3 from "@assets/raychan-yk7F8bdD0eU-unsplash_1767484806403.jpg";
import heroImage4 from "@assets/cdc-GnLuuG9crEY-unsplash_1767484806404.jpg";
import caregiverImage from "@assets/national-cancer-institute-BxXgTQEw1M4-unsplash_1767484806402.jpg";
import teamImage from "@assets/georg-arthur-pflueger-TeWwYARfcM4-unsplash_1767484806405.jpg";

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasAnimated || !ref.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Heart,
      title: "Personal Care",
      description: "Bathing, grooming, dressing assistance with dignity and respect",
    },
    {
      icon: Users,
      title: "Companionship",
      description: "Meaningful conversations, activities, and emotional support",
    },
    {
      icon: HomeIcon,
      title: "Household Support",
      description: "Light housekeeping, laundry, and home organization",
    },
    {
      icon: Clock,
      title: "Medication Reminders",
      description: "Timely reminders to help maintain health routines",
    },
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Families Served", icon: Users },
    { value: 15, suffix: "+", label: "Years Experience", icon: Award },
    { value: 98, suffix: "%", label: "Satisfaction Rate", icon: Star },
    { value: 24, suffix: "/7", label: "Care Available", icon: Clock },
  ];

  const steps = [
    { step: "01", title: "Contact Us", description: "Reach out for a free consultation" },
    { step: "02", title: "Care Assessment", description: "We evaluate your unique needs" },
    { step: "03", title: "Personalized Plan", description: "Custom care plan designed for you" },
    { step: "04", title: "Begin Care", description: "Your dedicated caregiver arrives" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.img 
              key={index}
              src={image} 
              alt={`Caring for elderly ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Compassionate Home Healthcare
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Quality Care in the{" "}
              <span className="text-primary">Comfort of Home</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Primordial Health Services provides professional, compassionate in-home care 
              that allows your loved ones to maintain their independence and dignity.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-hero-contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" data-testid="button-hero-services">
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute bottom-10 right-10 hidden lg:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-md p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Licensed & Insured</p>
                <p className="text-sm text-muted-foreground">Professional caregivers</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={fadeInUp}
                data-testid={`stat-${index}`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Dedicated to Enhancing Quality of Life
              </h2>
              <p className="text-muted-foreground mb-6">
                At Primordial Health Services, we believe everyone deserves compassionate, 
                personalized care in the comfort of their own home. Our team of experienced 
                caregivers is committed to providing the highest quality support while 
                respecting the independence and dignity of every client.
              </p>
              <ul className="space-y-4 mb-8">
                {["Personalized care plans", "Trained & certified caregivers", "24/7 availability", "Affordable rates"].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/about">
                <Button variant="outline" data-testid="link-about-learn-more">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img 
                  src={caregiverImage} 
                  alt="Caregiver with client" 
                  className="rounded-md shadow-lg w-full"
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-white rounded-md shadow-lg p-4 hidden md:block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center">
                          <Star className="h-4 w-4 text-primary" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold">Trusted by 500+</p>
                      <p className="text-sm text-muted-foreground">Happy families</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Care Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive home healthcare services tailored to meet your unique needs
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover-elevate group cursor-pointer" data-testid={`service-card-${index}`}>
                  <CardContent className="p-6">
                    <motion.div 
                      className="w-14 h-14 bg-primary/10 rounded-md flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <service.icon className="h-7 w-7 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/services">
              <Button size="lg" data-testid="button-view-all-services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting started with quality home care is easy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-testid={`step-${index}`}
              >
                <div className="relative inline-block mb-6">
                  <motion.div 
                    className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-primary/20 -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={teamImage} 
                alt="Our caring team" 
                className="rounded-md shadow-lg w-full"
              />
            </motion.div>
            
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Caring Professionals You Can Trust
              </h2>
              <p className="text-muted-foreground mb-6">
                Our caregivers are more than just healthcare professionals - they're 
                compassionate individuals who genuinely care about improving lives. 
                Each team member undergoes rigorous training and background checks.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Background Checked", "Certified Training", "Compassionate Care", "Reliable Service"].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link href="/careers">
                <Button variant="outline" data-testid="link-join-team">
                  Join Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-primary relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}
        />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. Let us help you create a care 
              plan that meets your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" data-testid="button-cta-contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+1234567890" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" data-testid="button-cta-call">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
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
