import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  HandHeart, 
  Utensils,
  Home,
  Car,
  Stethoscope,
  Package,
  Building2,
  ArrowLeft,
  Phone,
  CheckCircle
} from "lucide-react";

interface ServiceDetailProps {
  params: {
    slug: string;
  };
}

const servicesData: Record<string, {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  shortDesc: string;
  fullDescription: string;
  includes: string[];
  forWho: string[];
  whatToExpect: string[];
  safety: string[];
}> = {
  "personal-care": {
    title: "Personal Care",
    icon: Heart,
    shortDesc: "Bathing, dressing, grooming, and mobility assistance with dignity and respect.",
    fullDescription: "Our personal care services help individuals maintain their dignity and independence while receiving assistance with daily activities that may have become challenging. Our trained caregivers provide respectful, compassionate support tailored to each person's preferences and needs.",
    includes: [
      "Assistance with bathing and showering",
      "Dressing and grooming support",
      "Toileting and incontinence care",
      "Mobility assistance and transfers",
      "Skin care and monitoring",
      "Oral hygiene assistance"
    ],
    forWho: [
      "Seniors who need help with daily activities",
      "Individuals recovering from surgery",
      "Those with mobility limitations",
      "People with disabilities",
      "Anyone needing dignified personal care support"
    ],
    whatToExpect: [
      "Caregivers arrive on schedule as planned",
      "Respectful, dignified assistance with all activities",
      "Care tailored to personal preferences and routines",
      "Consistent caregiver when possible for continuity",
      "Regular communication with family members",
      "Documentation of care provided"
    ],
    safety: [
      "Background-checked caregivers",
      "Ongoing training and supervision",
      "Fall prevention protocols",
      "Infection control practices",
      "Emergency response procedures",
      "Regular quality assessments"
    ]
  },
  "household-support": {
    title: "Household Support",
    icon: Home,
    shortDesc: "Light housekeeping, laundry, bed making, and organization to maintain a safe home.",
    fullDescription: "A clean, organized home environment is essential for health and well-being. Our household support services help maintain a safe, comfortable living space so clients can focus on what matters most to them.",
    includes: [
      "Light housekeeping and dusting",
      "Laundry and linen changing",
      "Bed making and bedroom tidying",
      "Kitchen cleaning and organization",
      "Bathroom sanitization",
      "Decluttering and organization assistance"
    ],
    forWho: [
      "Seniors maintaining independence at home",
      "Individuals with limited mobility",
      "Those recovering from illness or surgery",
      "Family caregivers needing respite",
      "Anyone needing help maintaining their home"
    ],
    whatToExpect: [
      "Systematic cleaning of priority areas",
      "Respect for personal belongings and spaces",
      "Use of safe cleaning products",
      "Attention to fall hazards and safety",
      "Flexible scheduling to meet needs",
      "Coordination with other care services"
    ],
    safety: [
      "Safe lifting and bending techniques",
      "Non-toxic cleaning products available",
      "Fall hazard identification",
      "Safe storage of cleaning supplies",
      "Respect for client's possessions",
      "Regular supervisor check-ins"
    ]
  },
  "meal-preparation": {
    title: "Meal Preparation",
    icon: Utensils,
    shortDesc: "Nutritious meal planning, cooking, and special diet accommodation.",
    fullDescription: "Proper nutrition is fundamental to health and recovery. Our meal preparation services ensure clients receive delicious, nutritious meals tailored to their dietary needs, preferences, and any medical requirements.",
    includes: [
      "Meal planning and menu development",
      "Grocery shopping assistance",
      "Meal preparation and cooking",
      "Special diet accommodation",
      "Mealtime companionship",
      "Kitchen cleanup after meals"
    ],
    forWho: [
      "Seniors needing nutritious meals",
      "Individuals with dietary restrictions",
      "Those with diabetes or heart conditions",
      "People recovering from illness",
      "Anyone unable to prepare their own meals"
    ],
    whatToExpect: [
      "Meals prepared to dietary specifications",
      "Fresh, quality ingredients",
      "Meals served at preferred times",
      "Leftovers properly stored",
      "Kitchen cleaned after each meal",
      "Hydration reminders and assistance"
    ],
    safety: [
      "Food safety and hygiene practices",
      "Proper food storage temperatures",
      "Allergy awareness and precautions",
      "Choking prevention protocols",
      "Medication-meal coordination",
      "Hydration monitoring"
    ]
  },
  "companionship": {
    title: "Companionship",
    icon: HandHeart,
    shortDesc: "Meaningful social interaction, activities, and emotional support to combat loneliness.",
    fullDescription: "Social connection is vital for mental and emotional well-being. Our companionship services provide meaningful interaction, engagement in enjoyable activities, and emotional support to enhance quality of life and combat isolation.",
    includes: [
      "Friendly conversation and listening",
      "Games, puzzles, and hobbies",
      "Reading assistance and discussion",
      "Outings and social activities",
      "Emotional support and encouragement",
      "Technology help and communication support"
    ],
    forWho: [
      "Seniors living alone",
      "Individuals feeling isolated",
      "Those with limited mobility",
      "People needing social engagement",
      "Anyone wanting meaningful companionship"
    ],
    whatToExpect: [
      "Engaging, personalized activities",
      "Genuine interest and attention",
      "Flexible activities based on interests",
      "Indoor and outdoor options",
      "Family communication updates",
      "Joyful, positive interactions"
    ],
    safety: [
      "Caregivers trained in elder engagement",
      "Safe outing protocols",
      "Emergency communication plans",
      "Medication reminders as needed",
      "Fall prevention during activities",
      "Regular wellness check-ins"
    ]
  },
  "health-monitoring": {
    title: "Health Monitoring",
    icon: Stethoscope,
    shortDesc: "Vital signs tracking, exercise assistance, and care coordination.",
    fullDescription: "Regular health monitoring helps identify changes early and supports better health outcomes. Our caregivers track vital signs, assist with prescribed exercises, and serve as a communication bridge between clients and their healthcare providers.",
    includes: [
      "Vital signs tracking",
      "Weight monitoring",
      "Exercise and activity assistance",
      "Medication reminder support",
      "Symptom observation",
      "Healthcare provider communication"
    ],
    forWho: [
      "Seniors with chronic conditions",
      "Individuals with complex care needs",
      "Those recently discharged from hospital",
      "People with diabetes, heart conditions",
      "Anyone needing regular health oversight"
    ],
    whatToExpect: [
      "Regular vital sign documentation",
      "Observation and reporting of changes",
      "Assistance with prescribed exercises",
      "Clear communication with family",
      "Coordination with healthcare team",
      "Professional, attentive care"
    ],
    safety: [
      "Trained in vital sign measurement",
      "Clear escalation protocols",
      "Documentation accuracy",
      "Emergency response procedures",
      "Regular training updates",
      "Quality assurance monitoring"
    ]
  },
  "medication-management": {
    title: "Medication Management",
    icon: Package,
    shortDesc: "Reminders, tracking, and prescription coordination.",
    fullDescription: "Medication adherence is crucial for managing health conditions. Our medication management services provide reminders, organization, and coordination to help clients take their medications correctly and on time.",
    includes: [
      "Medication reminders",
      "Pill organization",
      "Prescription refill coordination",
      "Medication schedule tracking",
      "Side effect observation",
      "Pharmacy communication"
    ],
    forWho: [
      "Individuals on multiple medications",
      "Those with complex dosing schedules",
      "Seniors needing medication support",
      "People with memory challenges",
      "Anyone wanting medication oversight"
    ],
    whatToExpect: [
      "Timely medication reminders",
      "Organized medication systems",
      "Documentation of medications taken",
      "Observation of any concerns",
      "Communication with family",
      "Pharmacy coordination"
    ],
    safety: [
      "Strict no-administration policy",
      "Reminders and observation only",
      "Clear documentation protocols",
      "Family communication",
      "Healthcare provider coordination",
      "Regular training on medication safety"
    ]
  },
  "transportation": {
    title: "Transportation",
    icon: Car,
    shortDesc: "Safe, reliable rides for appointments, errands, and social activities.",
    fullDescription: "Reliable transportation is essential for maintaining independence and accessing healthcare. Our transportation services provide safe, courteous door-to-door service for medical appointments, errands, and social activities.",
    includes: [
      "Doctor and therapy appointments",
      "Pharmacy visits",
      "Grocery shopping assistance",
      "Social and family events",
      "Door-to-door service",
      "Wait-and-return available"
    ],
    forWho: [
      "Seniors who no longer drive",
      "Individuals with mobility challenges",
      "Those needing medical appointment transport",
      "People wanting to maintain social connections",
      "Anyone needing reliable transportation"
    ],
    whatToExpect: [
      "Punctual pickup and arrival",
      "Assistance in and out of vehicle",
      "Safe, comfortable transportation",
      "Courteous, patient service",
      "Wait-and-return for appointments",
      "Scheduling flexibility"
    ],
    safety: [
      "Licensed, insured drivers",
      "Vehicle safety inspections",
      "Accessibility accommodations",
      "Emergency protocols in place",
      "Driver background checks",
      "COVID-safe practices"
    ]
  },
  "group-home": {
    title: "Group Home Care",
    icon: Building2,
    shortDesc: "24/7 residential care in a comfortable group home setting.",
    fullDescription: "For individuals who need round-the-clock care in a home-like setting, our group home services provide comprehensive support in a comfortable, community-oriented environment that promotes dignity and quality of life.",
    includes: [
      "Private or shared room options",
      "24/7 supervision and support",
      "Community dining and meal service",
      "Social activities and engagement",
      "Medication management support",
      "All-inclusive care coordination"
    ],
    forWho: [
      "Individuals needing 24/7 care",
      "Seniors requiring continuous support",
      "Those with significant care needs",
      "People seeking community living",
      "Families needing full-time care solution"
    ],
    whatToExpect: [
      "Home-like, comfortable environment",
      "Individualized care plans",
      "Social activities and companionship",
      "Family involvement welcome",
      "Regular communication updates",
      "Professional, compassionate staff"
    ],
    safety: [
      "Licensed residential facility",
      "Trained, background-checked staff",
      "Emergency response systems",
      "Regular safety inspections",
      "Medication management oversight",
      "Health monitoring protocols"
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailProps): Promise<Metadata> {
  const service = servicesData[params.slug];
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  return {
    title: `${service.title} | Primodial Health`,
    description: service.shortDesc,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailProps) {
  const service = servicesData[params.slug];
  
  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gradient-health">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/health/services" className="inline-flex items-center gap-2 text-health hover:text-health-dark mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6">
              <IconComponent className="w-8 h-8 text-health" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {service.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                    What It Includes
                  </h2>
                  <p className="text-muted-foreground mb-6">{service.fullDescription}</p>
                  <ul className="space-y-3">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-health flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                    Who It&apos;s For
                  </h2>
                  <ul className="space-y-3">
                    {service.forWho.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-health flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                    What to Expect
                  </h2>
                  <ul className="space-y-3">
                    {service.whatToExpect.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-health flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                    Safety & Trust
                  </h2>
                  <ul className="space-y-3">
                    {service.safety.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-health flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-health text-white">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Get Started Today</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-health-foreground/90">
                    Contact us to learn more about {service.title} and how we can help.
                  </p>
                  <a href="tel:+18303993602">
                    <Button variant="secondary" className="w-full">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (830) 399-3602
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                      Send a Message
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Other Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="flex flex-col gap-2">
                    {Object.entries(servicesData)
                      .filter(([key]) => key !== params.slug)
                      .slice(0, 4)
                      .map(([key, svc]) => (
                        <Link
                          key={key}
                          href={`/health/services/${key}`}
                          className="text-sm text-muted-foreground hover:text-health transition-colors"
                        >
                          {svc.title}
                        </Link>
                      ))}
                  </nav>
                  <Link href="/health/services" className="text-health hover:text-health-dark text-sm font-medium mt-4 inline-block">
                    View all services →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-health">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Our team is here to answer your questions about {service.title} and help you 
            determine if it&apos;s the right fit for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18303993602">
              <Button size="lg" variant="health">
                <Phone className="w-5 h-5 mr-2" />
                Call for Free Consultation
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="health-outline">
                Request Information
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
