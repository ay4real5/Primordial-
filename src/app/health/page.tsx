import type { Metadata } from "next";
import Link from "next/link";
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
  const services = [
    {
      icon: Home,
      title: "Daily Living Support",
      description: "Personal care, household support, and meal preparation bundled for comprehensive care."
    },
    {
      icon: HandHeart,
      title: "Companionship",
      description: "Meaningful social interaction, activities, and emotional support."
    },
    {
      icon: Stethoscope,
      title: "Health Management",
      description: "Health monitoring and medication management for better outcomes."
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Safe, reliable rides for appointments, errands, and social activities."
    }
  ];

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
      <section className="relative py-20 lg:py-32 bg-gradient-health overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-health text-white text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Compassionate Home Health Care
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Care That Feels Like Family
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Professional, compassionate care services that help your loved ones 
              maintain independence and quality of life in the comfort of home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18303993602">
                <Button size="lg" variant="health">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (830) 399-3602
                </Button>
              </a>
              <Link href="/health/services">
                <Button size="lg" variant="health-outline">
                  View Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
              Who We Help
            </h2>
            <p className="text-muted-foreground">
              We provide personalized care for individuals and families across various situations and needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Seniors", desc: "Maintaining independence at home" },
              { title: "Individuals with Disabilities", desc: "Support for daily living activities" },
              { title: "Post-Surgical Patients", desc: "Recovery and rehabilitation support" },
              { title: "Family Caregivers", desc: "Respite and supplemental care" }
            ].map((item) => (
              <Card key={item.title} className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground">
              Comprehensive care solutions designed to support independence and well-being.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-health-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-health" />
                  </div>
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Getting started with care is simple and straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
      <section className="py-20 bg-gradient-health">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Testimonials Placeholder */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
              What Families Say
            </h2>
            <p className="text-muted-foreground">
              Hear from families who have experienced our compassionate care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Heart key={j} className="w-4 h-4 fill-health text-health" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &quot;Testimonial coming soon. We&apos;re gathering feedback from our valued clients.&quot;
                  </p>
                  <p className="font-medium text-sm">— Family Member</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
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
      <section className="py-20 bg-health">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-health-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Contact us today for a free, no-obligation consultation. 
            We&apos;re here to help you find the right care solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18303993602">
              <Button size="lg" variant="secondary">
                <Phone className="w-5 h-5 mr-2" />
                Call (830) 399-3602
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
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
