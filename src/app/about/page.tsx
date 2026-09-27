import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Eye, Compass, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Primodial Health | Our Mission & Values",
  description: "Learn about Primodial Health's mission, values, and commitment to excellence in home health care.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=85"
            alt="Diverse professional team in a collaborative meeting"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
              About Primodial Health
            </h1>
            <p className="text-lg text-white/90 max-w-xl leading-relaxed">
              A US-registered company committed to delivering compassionate, 
              personalized home health care that helps your loved ones stay safe, 
              comfortable, and independent at home.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To deliver exceptional care that improves lives and strengthens 
                  families. We bring dedication, expertise, and integrity to every 
                  home we serve.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="font-heading text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be recognized as the home care provider of choice—known for 
                  compassionate care that families rely on. We aim to set the 
                  standard for quality in home health services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              These principles guide every decision we make and every service we deliver.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Target, title: "Excellence", color: "bg-primary/10 text-primary", border: "border-l-primary", description: "We pursue the highest standards in every service we deliver and every family we serve." },
              { icon: Heart, title: "Compassion", color: "bg-health/10 text-health", border: "border-l-health", description: "We approach every interaction with empathy and understanding, recognizing the human impact of our work." },
              { icon: Compass, title: "Integrity", color: "bg-secondary/10 text-secondary", border: "border-l-secondary", description: "We operate with transparency, honesty, and unwavering ethical standards in all our business practices." },
              { icon: CheckCircle, title: "Reliability", color: "bg-health/10 text-health", border: "border-l-health", description: "We show up consistently and dependably, giving families peace of mind day after day." }
            ].map((value) => (
              <Card key={value.title} className={`border-l-4 ${value.border} hover:shadow-md transition-shadow`}>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center flex-shrink-0`}>
                    <value.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-heading">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground">
              Compassionate in-home care, delivered with a common commitment to excellence.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-health/20">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-health-light flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-health" />
                </div>
                <CardTitle className="font-heading text-xl">Home Health Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Primodial Health provides compassionate, personalized in-home care 
                  services for seniors and individuals who need assistance with daily 
                  living. We help families keep their loved ones safe, comfortable, and 
                  independent in their own homes.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Personal care and companionship</li>
                  <li>• Health monitoring and medication management</li>
                  <li>• Transportation and specialized care services</li>
                  <li>• 24/7 care coordination and support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
                Why Choose Primodial Health?
              </h2>
              <p className="text-muted-foreground mb-8">
                We bring genuine care, trained professionals, and a family-first mindset 
                to every home we serve. When you are seeking care for a loved one, 
                we show up with compassion and dedication.
              </p>
              <div className="space-y-4">
                {[
                  "Background-checked and trained caregivers",
                  "Licensed, bonded, and insured",
                  "24/7 care coordination and support",
                  "Personalized care plans for every client",
                  "Single trusted partner for your family's care needs"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 lg:mt-0">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=85"
                    alt="Caregiver with patient"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=400&q=85"
                    alt="Caregiver holding hands with a client"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations/Coverage */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
              Coverage & Operations
            </h2>
            <p className="text-muted-foreground">
              We operate across the United States, serving families nationwide.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">United States</div>
                <p className="text-sm text-muted-foreground">Nationwide operations and coverage</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Care availability</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Multi-State</div>
                <p className="text-sm text-muted-foreground">Regional care coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
