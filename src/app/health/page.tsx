import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  ArrowRight, 
  Phone, 
  CheckCircle,
  Clock,
  Shield,
  Users,
  Stethoscope,
  Home,
  Car,
  HandHeart
} from "lucide-react";

export const metadata: Metadata = {
  title: "Primodial Health | Compassionate Home Health Care",
  description: "Professional, compassionate home health care services for your loved ones. Personal care, companionship, and household support.",
};

export default function HealthPage() {
  const howItWorks = [
    {
      step: "1",
      title: "Free Consultation",
      description: "Call us at (830) 399-3602 for a no-obligation discussion about your needs."
    },
    {
      step: "2",
      title: "Customized Care Plan",
      description: "We create a personalized care plan tailored to your specific situation."
    },
    {
      step: "3",
      title: "Begin Care",
      description: "A matched caregiver begins providing compassionate support in your home."
    }
  ];

  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We provide home health care services across the United States. Contact us to confirm coverage in your specific area."
    },
    {
      question: "Are your caregivers background checked?",
      answer: "Yes, all caregivers undergo comprehensive background checks, reference verification, and ongoing training."
    },
    {
      question: "Can I customize my care plan?",
      answer: "Absolutely. Every care plan is customized to meet the unique needs and preferences of each client."
    },
    {
      question: "What are your hours of operation?",
      answer: "We offer flexible scheduling including 24/7 care options. Our office is available by phone at (830) 399-3602."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[100svh] sm:min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1920&q=85"
            alt="Caring nurse holding hands with elderly patient in home setting"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-health/90 via-health/70 to-health/20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Compassionate Home Health Care
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Care That Feels
              <br />
              Like Family
            </h1>
            <p className="text-sm sm:text-xl text-white/90 max-w-xl mb-6 sm:mb-10 leading-relaxed">
              Professional, compassionate care services that help your loved ones 
              maintain independence and quality of life in the comfort of home.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+18303993602" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-health hover:bg-white/90 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg shadow-xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (830) 399-3602
                </Button>
              </a>
              <Link href="/health/services" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-white border border-white/40 hover:bg-white/30 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg">
                  View Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="flex gap-6 sm:gap-8 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/20">
              <div>
                <div className="text-2xl sm:text-3xl font-bold">24/7</div>
                <div className="text-xs sm:text-sm text-white/70">Care Available</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">100%</div>
                <div className="text-xs sm:text-sm text-white/70">Background Checked</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">US</div>
                <div className="text-xs sm:text-sm text-white/70">Nationwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=800&q=85"
                  alt="Senior woman smiling with family caregiver at home"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-health/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-health" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Serving families nationwide</p>
                    <p className="text-xs text-muted-foreground">Personalized care for every situation</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
                Who We Help
              </h2>
              <p className="text-muted-foreground mb-8">
                We provide personalized care for individuals and families across various situations and needs.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Seniors", desc: "Maintaining independence at home", img: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=200&q=80" },
                  { title: "Individuals with Disabilities", desc: "Support for daily living activities", img: "https://images.unsplash.com/photo-1559839734-2b71a1973802?w=200&q=80" },
                  { title: "Post-Surgical Patients", desc: "Recovery and rehabilitation support", img: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=200&q=80" },
                  { title: "Family Caregivers", desc: "Respite and supplemental care", img: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?w=200&q=80" }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl bg-health/5 hover:bg-health/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 relative">
                      <Image src={item.img} alt={item.title} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 sm:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground">
              Comprehensive care solutions designed to support independence and well-being.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Home, title: "Daily Living Support", description: "Personal care, household support, and meal preparation bundled for comprehensive care.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=600&q=85", alt: "Caregiver helping with daily household activities" },
              { icon: HandHeart, title: "Companionship", description: "Meaningful social interaction, activities, and emotional support.", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=85", alt: "Senior enjoying companionship and social activities" },
              { icon: Stethoscope, title: "Health Management", description: "Health monitoring and medication management for better outcomes.", img: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=85", alt: "Health aide monitoring patient vitals at home" },
              { icon: Car, title: "Transportation", description: "Safe, reliable rides for appointments, errands, and social activities.", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=85", alt: "Reliable transportation service for seniors" }
            ].map((service) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-44">
                  <Image
                    src={service.img}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-health/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link 
                    href="/health/services" 
                    className="text-health hover:text-health-dark font-medium inline-flex items-center gap-1"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/health/services">
              <Button variant="health" size="lg">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Getting started with care is simple and straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {howItWorks.map((step) => (
              <Card key={step.step} className="text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-health text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 sm:py-20 bg-gradient-health">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Shield className="w-6 h-6 text-health" />
              </div>
              <h3 className="font-heading font-semibold mb-1">Fully Insured</h3>
              <p className="text-sm text-muted-foreground">Comprehensive liability coverage</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Users className="w-6 h-6 text-health" />
              </div>
              <h3 className="font-heading font-semibold mb-1">Screened Caregivers</h3>
              <p className="text-sm text-muted-foreground">Background checked & trained</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Clock className="w-6 h-6 text-health" />
              </div>
              <h3 className="font-heading font-semibold mb-1">24/7 Availability</h3>
              <p className="text-sm text-muted-foreground">Care when you need it</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                <CheckCircle className="w-6 h-6 text-health" />
              </div>
              <h3 className="font-heading font-semibold mb-1">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">Ongoing supervision & support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-14 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516307365426-bea591f05011?w=1920&q=85"
            alt="Happy senior couple at home"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-health/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white mb-4">
              What Families Say
            </h2>
            <p className="text-white/80">
              Hear from families who have experienced our compassionate care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { quote: "The caregiver assigned to my mother was incredible. She treated her with such dignity and patience. Our whole family feels so relieved.", name: "Sarah T.", location: "San Antonio, TX" },
              { quote: "After my surgery, Primodial Health sent someone who genuinely cared. They helped me recover with confidence and kept me on track.", name: "Marcus R.", location: "Austin, TX" },
              { quote: "My father refused outside help for years. Within a week, he loved his caregiver. That says everything about the quality of their staff.", name: "Linda M.", location: "Houston, TX" }
            ].map((t, i) => (
              <Card key={i} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Heart key={j} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-white/90 italic mb-6 leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-white/60 text-xs">{t.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Common questions about our home health care services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i}>
                <CardHeader className="pb-3">
                  <CardTitle className="font-heading text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/health/faq">
              <Button variant="health-outline">
                View All FAQs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Contact us today for a free, no-obligation consultation.
            We&apos;re here to help you find the right care solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18303993602">
              <Button size="lg" className="btn-health">
                <Phone className="w-5 h-5 mr-2" />
                Call (830) 399-3602
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Send a Message
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
