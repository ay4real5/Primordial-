import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Users,
  Award,
  Target,
  Eye,
  CheckCircle,
  ArrowRight,
  Clock,
} from "lucide-react";

import teamImage from "@assets/stock_images/nurse_caregiver_team_fce90364.jpg";
import caregiverImage from "@assets/stock_images/caregiver_helping_el_ee2750cc.jpg";

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

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We treat every client with genuine care, empathy, and respect, just as we would our own family members.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our interactions and care practices.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We continuously strive to exceed expectations and deliver the highest quality of care.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in building strong relationships with families and the communities we serve.",
    },
  ];

  const team = [
    {
      name: "Maria Santos",
      role: "Senior Caregiver",
      experience: "12 years experience",
      specialties: "Dementia Care, Personal Care",
    },
    {
      name: "James Wilson",
      role: "Certified Nursing Assistant",
      experience: "8 years experience",
      specialties: "Post-Surgery Recovery, Mobility Support",
    },
    {
      name: "Lisa Johnson",
      role: "Home Health Aide",
      experience: "10 years experience",
      specialties: "Companionship, Household Support",
    },
    {
      name: "David Chen",
      role: "Care Coordinator",
      experience: "6 years experience",
      specialties: "Care Planning, Family Communication",
    },
  ];

  const milestones = [
    { year: "2009", event: "Founded with a mission to transform home care" },
    { year: "2012", event: "Expanded services to cover 5 counties" },
    { year: "2015", event: "Reached 100+ families served" },
    { year: "2018", event: "Launched 24/7 care support program" },
    { year: "2021", event: "Celebrated 500+ families milestone" },
    { year: "2024", event: "Continuing to grow and serve our community" },
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
              Our Story
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-primary">Primordial Health Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              For over 15 years, we've been dedicated to providing exceptional home health care services that help families and seniors live their best lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <motion.div 
                    className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Target className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide compassionate, high-quality home health care services that enable individuals to maintain their independence, dignity, and quality of life while remaining in the comfort of their own homes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <motion.div 
                    className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Eye className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted and respected home health care provider in our community, known for our exceptional caregivers, personalized care plans, and unwavering commitment to our clients' well-being.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do and how we care for your loved ones.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center hover-elevate h-full" data-testid={`value-card-${index}`}>
                  <CardContent className="p-6">
                    <motion.div 
                      className="w-14 h-14 mx-auto rounded-md bg-primary/10 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <value.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium">Our Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                15+ Years of Caring
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Primordial Health Services was founded in 2009 with a simple but powerful belief: everyone deserves to age with dignity in the place they call home.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                What started as a small team of dedicated caregivers has grown into a trusted home health care provider serving hundreds of families across our region. Through the years, we've remained committed to our founding principles of compassion, integrity, and excellence.
              </p>
              
              <img 
                src={caregiverImage} 
                alt="Caregiver helping client" 
                className="rounded-md shadow-lg w-full mt-8"
              />
            </motion.div>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  data-testid={`milestone-${index}`}
                >
                  <motion.div 
                    className="w-16 h-10 rounded-md bg-primary flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm font-bold text-primary-foreground">{milestone.year}</span>
                  </motion.div>
                  <div className="flex-1 pt-2">
                    <p className="text-foreground">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Meet Our Caregivers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team brings compassion, expertise, and genuine care to every interaction.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center hover-elevate" data-testid={`team-member-${index}`}>
                  <CardContent className="p-6">
                    <motion.div 
                      className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-2xl font-semibold text-primary">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </motion.div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full">
                      <span className="text-xs text-primary">{member.specialties}</span>
                    </div>
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
            <Link href="/careers">
              <Button variant="outline" size="lg" data-testid="button-join-team">
                Join Our Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Why Families Choose Us</h2>
                  <div className="space-y-4">
                    {[
                      "Licensed, insured, and background-checked caregivers",
                      "Personalized care plans tailored to individual needs",
                      "24/7 availability for emergencies and support",
                      "Transparent pricing with no hidden fees",
                      "Regular quality assessments and family updates",
                      "Flexible scheduling to fit your family's needs",
                      "Compassionate, experienced care coordinators",
                      "Strong focus on caregiver-client compatibility",
                    ].map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Experience the Primordial Difference?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Contact us today for a free consultation. Let us show you why hundreds of families trust us with their loved ones' care.
              </p>
              <Link href="/contact">
                <Button size="lg" data-testid="button-contact-about">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
