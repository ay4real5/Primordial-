import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Building2, 
  ArrowRight, 
  Shield, 
  Users, 
  Award,
  CheckCircle,
  Phone,
  Mail,
  Star,
  Clock,
  TrendingUp,
  Briefcase,
  HandHeart,
  Stethoscope,
  Home,
  Car,
  ChevronRight,
  Quote
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Primodial | Healthcare & Government Contracting Excellence",
  description: "Primodial delivers excellence across healthcare services and government contracting solutions. Two divisions, one commitment to quality.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* HERO - Full width with image background */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&q=85"
            alt="Confident professional team ready to serve"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-white">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">
              Trusted Across Texas
            </Badge>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Caring for
              <br />
              <span className="text-health-light">People.</span>
              <br />
              Serving
              <br />
              <span className="text-government-light">Government.</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
              Two divisions united by one mission: delivering exceptional service 
              with compassion, precision, and unwavering commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/health">
                <Button size="lg" className="bg-health hover:bg-health-dark text-white shadow-lg shadow-health/30 h-14 px-8 text-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Healthcare Services
                </Button>
              </Link>
              <Link href="/government">
                <Button size="lg" className="bg-government hover:bg-government-dark text-white shadow-lg shadow-government/30 h-14 px-8 text-lg">
                  <Building2 className="w-5 h-5 mr-2" />
                  Government Solutions
                </Button>
              </Link>
            </div>
            
            {/* Quick stats row */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-white/70">Care Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold">TX</div>
                <div className="text-sm text-white/70">Statewide</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-white/70">Licensed</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronRight className="w-8 h-8 rotate-90" />
        </div>
      </section>

      {/* DIVISIONS - Image cards with overlay */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4">Our Divisions</Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Two Ways We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Excellence delivered through specialized expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Health Card with Image */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=85"
                  alt="Compassionate caregiver supporting elderly patient at home"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-health/90 via-health/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2">Primodial Health</h3>
                <p className="text-white/90 mb-4">
                  Compassionate home health care for your loved ones. Personal care, 
                  companionship, and household support.
                </p>
                <div className="flex items-center gap-2 text-sm mb-4">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(830) 399-3602</span>
                </div>
                <Link href="/health">
                  <Button variant="secondary" className="bg-white text-health hover:bg-white/90">
                    Explore Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Government Card with Image */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=85"
                  alt="Professional government contractors in a formal meeting"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-government/90 via-government/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2">Primodial Government</h3>
                <p className="text-white/90 mb-4">
                  Professional contracting for federal, state, and local agencies. 
                  Compliance-focused solutions.
                </p>
                <div className="flex items-center gap-2 text-sm mb-4">
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">gov@primodial.org</span>
                </div>
                <Link href="/government">
                  <Button variant="secondary" className="bg-white text-government hover:bg-white/90">
                    View Capabilities
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW - Icon grid with images */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4" variant="secondary">What We Offer</Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From home care to government contracting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Health Services */}
            <Card className="overflow-hidden border-health/20">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=600&q=85"
                  alt="Caregiver holding hands with elderly patient in warm home setting"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-health/20" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-health text-white">Health</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-health/5 hover:bg-health/10 transition-colors">
                    <Stethoscope className="w-5 h-5 text-health" />
                    <span className="text-sm font-medium">Personal Care</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-health/5 hover:bg-health/10 transition-colors">
                    <Home className="w-5 h-5 text-health" />
                    <span className="text-sm font-medium">Household Help</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-health/5 hover:bg-health/10 transition-colors">
                    <HandHeart className="w-5 h-5 text-health" />
                    <span className="text-sm font-medium">Companionship</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-health/5 hover:bg-health/10 transition-colors">
                    <Car className="w-5 h-5 text-health" />
                    <span className="text-sm font-medium">Transportation</span>
                  </div>
                </div>
                <Link href="/health/services" className="mt-6 block">
                  <Button className="w-full btn-health">
                    View All Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Government Services */}
            <Card className="overflow-hidden border-government/20">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=85"
                  alt="Government building with American flag symbolizing federal contracting"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-government/20" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-government text-white">Government</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-government/5 hover:bg-government/10 transition-colors">
                    <TrendingUp className="w-5 h-5 text-government" />
                    <span className="text-sm font-medium">Program Mgmt</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-government/5 hover:bg-government/10 transition-colors">
                    <Shield className="w-5 h-5 text-government" />
                    <span className="text-sm font-medium">Compliance</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-government/5 hover:bg-government/10 transition-colors">
                    <Users className="w-5 h-5 text-government" />
                    <span className="text-sm font-medium">Teaming</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-government/5 hover:bg-government/10 transition-colors">
                    <Award className="w-5 h-5 text-government" />
                    <span className="text-sm font-medium">Capabilities</span>
                  </div>
                </div>
                <Link href="/government/capabilities" className="mt-6 block">
                  <Button className="w-full btn-government">
                    View Capabilities
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Features with icons */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4">Why Primodial</Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Excellence in Everything
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-health/10 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-health" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Compassionate</h3>
                <p className="text-muted-foreground">
                  Treating every client like family with genuine care and empathy.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Trusted</h3>
                <p className="text-muted-foreground">
                  Fully licensed, bonded, and insured for your complete peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-government/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-government" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Quality Focused</h3>
                <p className="text-muted-foreground">
                  Rigorous standards and continuous improvement in all we do.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Always Available</h3>
                <p className="text-muted-foreground">
                  24/7 support for healthcare needs and responsive contracting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL - Quote section with background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1920&q=85"
            alt="Warm family moment representing compassionate care"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Quote className="w-16 h-16 mx-auto mb-8 text-white/30" />
            <blockquote className="text-2xl md:text-3xl font-heading font-medium mb-8 leading-relaxed">
              &ldquo;Primodial Health gave our family peace of mind. Their caregivers treated 
              my mother with such dignity and compassion. We couldn&apos;t ask for better care.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <Users className="w-7 h-7" />
              </div>
              <div className="text-left">
                <div className="font-semibold">The Martinez Family</div>
                <div className="text-sm text-white/70">San Antonio, TX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-12 items-center">
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-12 h-12 rounded-full bg-health/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-health" />
              </div>
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium">Background Checked</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-12 h-12 rounded-full bg-government/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-government" />
              </div>
              <span className="font-medium">5-Star Service</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA CARDS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Health CTA */}
            <Card className="overflow-hidden border-health/20 hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1559839914-17aae19cec71?w=600&q=85"
                  alt="Friendly home health aide assisting senior client"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-health/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Phone className="w-12 h-12 text-white/60" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-3">Need Care Now?</h3>
                <p className="text-muted-foreground mb-6">
                  Speak with our care coordinators today. We&apos;re available 24/7 to
                  discuss your family&apos;s needs.
                </p>
                <a href="tel:+18303993602" className="block">
                  <Button className="w-full btn-health h-12 text-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (830) 399-3602
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Government CTA */}
            <Card className="overflow-hidden border-government/20 hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=85"
                  alt="Professional government team reviewing contract documents"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-government/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Briefcase className="w-12 h-12 text-white/60" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-3">Explore Partnership?</h3>
                <p className="text-muted-foreground mb-6">
                  Discuss capabilities, teaming opportunities, or agency requirements 
                  with our government team.
                </p>
                <Link href="/government/partners" className="block">
                  <Button className="w-full btn-government h-12 text-lg">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Start the Conversation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
