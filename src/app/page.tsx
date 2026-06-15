import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Heart, 
  Building2, 
  ArrowRight, 
  Shield, 
  Users, 
  Award,
  CheckCircle,
  Phone,
  Mail
} from "lucide-react";

export const metadata: Metadata = {
  title: "Primodial | Healthcare & Government Contracting Excellence",
  description: "Primodial delivers excellence across healthcare services and government contracting solutions. Two divisions, one commitment to quality.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              One Company.
              <br />
              <span className="text-secondary">Two Divisions.</span>
              <br />
              Endless Commitment.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Primodial delivers excellence across healthcare services and government 
              contracting solutions. We serve families with compassion and agencies 
              with precision.
            </p>
            
            {/* Division Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {/* Health Card */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-health/20">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-xl bg-health-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Heart className="w-8 h-8 text-health" />
                  </div>
                  <CardTitle className="font-heading text-2xl">Primodial Health</CardTitle>
                  <CardDescription className="text-base">
                    Compassionate home health care for your loved ones
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6 text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-health" />
                      In-home daily support & companionship
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-health" />
                      Health monitoring & medication management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-health" />
                      Transportation & group home care
                    </li>
                  </ul>
                  <Link href="/health">
                    <Button variant="health" className="w-full group">
                      Explore Health Services
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Government Card */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-government/20">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-xl bg-government-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Building2 className="w-8 h-8 text-government" />
                  </div>
                  <CardTitle className="font-heading text-2xl">Primodial Government</CardTitle>
                  <CardDescription className="text-base">
                    Professional contracting for federal, state & local agencies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6 text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-government" />
                      Prime & subcontractor capabilities
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-government" />
                      Wide range of contracting domains
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-government" />
                      Compliance-focused delivery
                    </li>
                  </ul>
                  <Link href="/government">
                    <Button variant="government" className="w-full group">
                      Explore Government Services
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Primodial Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
              Why Primodial?
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine operational excellence with unwavering integrity across 
              every service we deliver.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="font-heading">Trust & Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rigorous background checks, ongoing training, and comprehensive 
                  insurance coverage for complete peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="font-heading">Quality Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuous quality monitoring, regular assessments, and a 
                  commitment to exceeding standards in every engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="font-heading">Client-First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Whether serving families or agencies, we prioritize understanding 
                  needs and delivering tailored solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Division Highlights */}
      <section className="py-20 bg-gradient-health">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-health/10 text-health text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                Healthcare Division
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
                Compassionate Care for Families
              </h2>
              <p className="text-muted-foreground mb-6">
                Our Health division provides personalized in-home care services that 
                help seniors and individuals maintain independence while receiving 
                the support they need. From daily living assistance to specialized 
                care, we treat every client like family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/health">
                  <Button variant="health">
                    View Health Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+18303993602" className="inline-flex items-center gap-2 text-health hover:text-health-dark font-medium">
                  <Phone className="w-5 h-5" />
                  (830) 399-3602
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-health mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Care available around the clock</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-health mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Background-checked caregivers</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-health mb-2">Custom</div>
                <p className="text-sm text-muted-foreground">Personalized care plans</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-health mb-2">Local</div>
                <p className="text-sm text-muted-foreground">Community-based service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-government">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-government mb-2">Prime</div>
                <p className="text-sm text-muted-foreground">Prime contractor capabilities</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-government mb-2">Sub</div>
                <p className="text-sm text-muted-foreground">Subcontractor partnerships</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-government mb-2">FAR</div>
                <p className="text-sm text-muted-foreground">FAR-compliant processes</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-government mb-2">Team</div>
                <p className="text-sm text-muted-foreground">Teaming arrangements</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-government/10 text-government text-sm font-medium mb-4">
                <Building2 className="w-4 h-4" />
                Government Division
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
                Professional Contracting Solutions
              </h2>
              <p className="text-muted-foreground mb-6">
                Our Government division serves as a capable partner for federal, 
                state, and local agencies across a wide range of contracting needs. 
                We bring operational excellence, compliance focus, and proven 
                management practices to every engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/government">
                  <Button variant="government">
                    View Capabilities
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/government/partners" className="inline-flex items-center gap-2 text-government hover:text-government-dark font-medium">
                  <Mail className="w-5 h-5" />
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Connect?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Whether you&apos;re seeking care for a loved one or exploring partnership 
            opportunities, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="mailto:contact@primodial.org">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Mail className="w-5 h-5 mr-2" />
                contact@primodial.org
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
