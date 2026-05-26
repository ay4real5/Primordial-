import { useParams, Link } from "wouter";
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
  Users,
  Package,
  ArrowRight,
  Phone,
  CheckCircle,
  ChevronLeft,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const allServices = {
  "personal-care": {
    icon: Heart,
    title: "Personal Care",
    description: "Compassionate assistance with daily personal care needs to maintain dignity and comfort in your own home.",
    fullDescription: "Our personal care services help clients maintain their independence while receiving the support they need for daily activities. Our trained caregivers provide respectful, dignified assistance tailored to each individual's needs and preferences.",
    features: [
      "Bathing and showering assistance",
      "Dressing and grooming support",
      "Oral hygiene care",
      "Incontinence care with dignity",
      "Mobility and transfer assistance",
      "Skin care and monitoring",
      "Hair washing and styling",
      "Shaving assistance",
      "Toileting assistance",
    ],
    benefits: [
      "Maintain independence at home",
      "Preserve dignity and privacy",
      "Reduce fall risks",
      "Improve personal hygiene",
      "Family peace of mind",
    ],
    idealFor: "Seniors, individuals with disabilities, post-surgery patients, and anyone needing help with daily personal care activities.",
  },
  "companionship": {
    icon: HandHeart,
    title: "Companionship",
    description: "Meaningful social interaction and emotional support to combat loneliness and improve quality of life.",
    fullDescription: "Loneliness can significantly impact health and wellbeing. Our companionship services provide friendly social interaction, engaging activities, and emotional support that helps clients stay connected and engaged with life.",
    features: [
      "Friendly conversation and active listening",
      "Playing games, cards, and puzzles",
      "Reading books aloud",
      "Accompanying on neighborhood walks",
      "Social outings and activities",
      "Arts and crafts projects",
      "Music and movie enjoyment",
      "Letter writing and correspondence",
      "Technology assistance",
    ],
    benefits: [
      "Reduce feelings of isolation",
      "Mental stimulation and engagement",
      "Emotional support and friendship",
      "Maintain social skills",
      "Improved mood and outlook",
    ],
    idealFor: "Seniors living alone, individuals with limited mobility, those recovering from loss, and anyone needing regular social connection.",
  },
  "meal-preparation": {
    icon: Utensils,
    title: "Meal Preparation",
    description: "Nutritious meal planning, preparation, and assistance with eating for better health.",
    fullDescription: "Proper nutrition is essential for health and recovery. Our meal preparation services ensure clients receive balanced, delicious meals that meet their dietary needs and personal preferences.",
    features: [
      "Customized meal planning",
      "Grocery shopping and provisioning",
      "Fresh meal preparation",
      "Special diet accommodation",
      "Eating assistance when needed",
      "Kitchen organization and cleanup",
      "Nutrition monitoring",
      "Recipe adaptation for restrictions",
      "Mealtime companionship",
    ],
    benefits: [
      "Better nutrition and health",
      "Maintain dietary requirements",
      "Enjoy favorite foods safely",
      "Reduce kitchen hazards",
      "Consistent meal schedules",
    ],
    idealFor: "Seniors with dietary restrictions, individuals with swallowing difficulties, those unable to cook safely, and post-hospitalization patients.",
  },
  "household-support": {
    icon: Home,
    title: "Household Support",
    description: "Light housekeeping to maintain a clean, safe, and comfortable living environment.",
    fullDescription: "A clean, organized home contributes to both physical and mental health. Our household support services help maintain a safe, comfortable living space without the burden of heavy housework.",
    features: [
      "Light housekeeping and dusting",
      "Laundry and linen changes",
      "Bed making and linen refresh",
      "Organization and decluttering",
      "Trash and recycling removal",
      "Vacuuming and sweeping",
      "Bathroom sanitizing",
      "Kitchen surface cleaning",
      "Closet organization",
    ],
    benefits: [
      "Safer, cleaner living space",
      "Reduced fall hazards",
      "Less stress and overwhelm",
      "More comfortable home environment",
      "Maintain independence longer",
    ],
    idealFor: "Seniors, individuals with limited mobility, those recovering from illness or surgery, and busy families needing extra support.",
  },
  "transportation": {
    icon: Car,
    title: "Transportation",
    description: "Safe, reliable transportation for appointments, errands, and social activities.",
    fullDescription: "Losing the ability to drive shouldn't mean losing independence. Our transportation services provide safe, reliable rides for all your important destinations, with caring drivers who ensure your comfort and safety.",
    features: [
      "Medical appointment transportation",
      "Pharmacy and prescription pickup",
      "Grocery shopping assistance",
      "Post office and banking errands",
      "Social events and gatherings",
      "Religious service attendance",
      "Hair salon and barber visits",
      "Door-to-door assistance",
      "Wait-and-return service",
    ],
    benefits: [
      "Maintain independence",
      "Never miss important appointments",
      "Safe, reliable transportation",
      "Companion during outings",
      "Continue social activities",
    ],
    idealFor: "Seniors who no longer drive, individuals with vision limitations, those recovering from surgery, and anyone needing reliable transportation support.",
  },
  "health-support": {
    icon: Stethoscope,
    title: "Health Support",
    description: "Non-medical health support services to help maintain wellbeing and medication compliance.",
    fullDescription: "Staying on top of health needs can be challenging. Our health support services provide non-medical assistance that helps clients maintain their health routines, monitor vital signs, and coordinate their care effectively.",
    features: [
      "Medication reminder system",
      "Vital signs monitoring",
      "Exercise program assistance",
      "Health appointment tracking",
      "Prescription pickup coordination",
      "Care coordination with providers",
      "Wellness check-ins",
      "Health journaling support",
      "Medical equipment assistance",
    ],
    benefits: [
      "Better medication compliance",
      "Early detection of changes",
      "Consistent health monitoring",
      "Improved communication with doctors",
      "Peace of mind for families",
    ],
    idealFor: "Individuals with chronic conditions, those on multiple medications, post-hospitalization patients, and anyone needing health routine support.",
  },
  "medication-management": {
    icon: Package,
    title: "Medication Management",
    description: "Comprehensive medication reminders, tracking, and coordination to ensure safety and compliance.",
    fullDescription: "Managing multiple medications can be overwhelming. Our medication management service provides reliable reminders, careful tracking, and coordination with pharmacies and healthcare providers to ensure medications are taken correctly and on time.",
    features: [
      "Daily medication reminders",
      "Pill organization and preparation",
      "Medication schedule tracking",
      "Prescription refill coordination",
      "Pharmacy communication",
      "Side effect monitoring",
      "Medication interaction awareness",
      "Family notification system",
      "Healthcare provider updates",
    ],
    benefits: [
      "Never miss a dose",
      "Reduce medication errors",
      "Better health outcomes",
      "Family peace of mind",
      "Professional oversight",
    ],
    idealFor: "Individuals on multiple medications, those with memory challenges, seniors managing complex drug regimens, and post-hospitalization patients with new prescriptions.",
  },
  "group-home": {
    icon: Users,
    title: "Group Home Care",
    description: "24/7 residential care in a comfortable group home setting with dedicated caregivers.",
    fullDescription: "When 24/7 care is needed, our group homes provide a warm, family-like environment where residents receive round-the-clock support while enjoying community living. Private and shared room options available.",
    features: [
      "Private and semi-private rooms",
      "24/7 caregiver supervision",
      "Community meals and dining",
      "Social activities and outings",
      "Medication management",
      "Safe, accessible environment",
      "Personal care assistance",
      "Housekeeping and laundry",
      "Family visitation welcome",
    ],
    benefits: [
      "24/7 professional care",
      "Community and social connection",
      "Safe, monitored environment",
      "All-inclusive living support",
      "Peace of mind for families",
    ],
    idealFor: "Individuals needing constant supervision, those with advanced care needs, seniors wanting community living, and families seeking residential care options.",
  },
};

export default function ServiceDetail() {
  const params = useParams();
  const serviceId = params.serviceId;
  const service = allServices[serviceId as keyof typeof allServices];

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/services">
              <Button variant="secondary" size="sm" className="mb-6">
                <ChevronLeft className="mr-2 h-4 w-4" />
                All Services
              </Button>
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-md bg-white/20 flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {service.title}
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-2xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-semibold mb-4">About This Service</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-semibold mb-6">What's Included</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-semibold mb-4">Who Benefits</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.idealFor}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                    <p className="mb-6 opacity-90">
                      Contact us for a free consultation to discuss how this service can help your family.
                    </p>
                    <Link href="/contact" className="block w-full">
                      <Button variant="secondary" className="w-full" size="lg">
                        Schedule Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Questions?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Call us directly for immediate assistance.
                    </p>
                    <a href="tel:+18303993602">
                      <Button variant="outline" className="w-full">
                        <Phone className="mr-2 h-4 w-4" />
                        (830) 399-3602
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
