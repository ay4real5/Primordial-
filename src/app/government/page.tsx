import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2,
  ArrowRight,
  Mail,
  Phone,
  CheckCircle,
  Target,
  Shield,
  Users,
  FileText,
  Award,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Velune | Comprehensive Government Support Services",
  description: "Your trusted partner for healthcare support, facilities management, landscaping, procurement, and full-spectrum operational support for federal agencies.",
};

export default function GovernmentPage() {
  const capabilities = [
    {
      icon: Target,
      title: "Healthcare Support Services",
      description: "Operational coordination, administrative assistance, compliance support, and service delivery optimization for healthcare environments."
    },
    {
      icon: Building2,
      title: "Facilities Management & Janitorial",
      description: "Comprehensive janitorial and facilities support ensuring clean, safe, and well-maintained environments that meet government standards."
    },
    {
      icon: Users,
      title: "Landscaping & Grounds Maintenance",
      description: "Professional grounds management for federal properties — safe, aesthetically maintained outdoor environments adhering to regulations."
    },
    {
      icon: Zap,
      title: "Procurement & Supply Chain",
      description: "End-to-end procurement assistance, vendor management, and logistics support with enterprise-level process optimization."
    },
    {
      icon: FileText,
      title: "Administrative & Operational Support",
      description: "Flexible support across administrative management, data analytics, stakeholder coordination, and process improvement."
    },
    {
      icon: Award,
      title: "Quality Assurance & Compliance",
      description: "FAR-aware processes, quality control systems, and regulatory compliance built into every service we deliver."
    }
  ];

  const engagementModels = [
    {
      title: "Prime Contractor",
      description: "We serve as the primary contractor, managing all aspects of contract delivery including subcontractor coordination and compliance."
    },
    {
      title: "Subcontractor",
      description: "We partner with prime contractors as a reliable subcontractor, bringing specialized capabilities and proven performance."
    },
    {
      title: "Teaming Partner",
      description: "We participate in teaming arrangements, contributing our expertise to collaborative proposals and shared contract execution."
    },
    {
      title: "BPA Support",
      description: "We support Blanket Purchase Agreements with responsive delivery and consistent performance across task orders."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[100svh] sm:min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=1920&q=85"
            alt="United States Capitol building representing federal government contracting"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-government/90 via-government/70 to-government/20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Government Contracting
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Capable Partner
              <br />
              for Government
              <br />
              <span className="text-white/80">Agencies</span>
            </h1>
            <p className="text-sm sm:text-xl text-white/90 max-w-xl mb-6 sm:mb-10 leading-relaxed">
              Your trusted partner for healthcare support, facilities management, landscaping, procurement, and full-spectrum operational support — delivering excellence with agility and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/government/capabilities" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-government hover:bg-white/90 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg shadow-xl">
                  View Capabilities
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/government/partners" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-white border border-white/40 hover:bg-white/30 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Partner With Us
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 sm:gap-8 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/20">
              <div>
                <div className="text-xl sm:text-3xl font-bold">Federal</div>
                <div className="text-xs sm:text-sm text-white/70">& State Agencies</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold">FAR</div>
                <div className="text-xs sm:text-sm text-white/70">Compliant</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold">SB</div>
                <div className="text-xs sm:text-sm text-white/70">Certified</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold">UEI</div>
                <div className="text-xs sm:text-sm text-white/70">EUDTX5ULD6B1</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 inline-block -mt-1" />
                </div>
                <div className="text-xs sm:text-sm text-white/70">(571) 575-7174</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center mb-10 sm:mb-16">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
                Capabilities Overview
              </h2>
              <p className="text-muted-foreground mb-6">
                We offer a wide range of contracting capabilities to support government 
                agencies in achieving their mission objectives.
              </p>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 rounded-xl bg-government/5">
                  <div className="text-xl sm:text-2xl font-bold text-government">Prime</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">Contractor</div>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-xl bg-government/5">
                  <div className="text-xl sm:text-2xl font-bold text-government">Sub</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">Contractor</div>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-xl bg-government/5">
                  <div className="text-xl sm:text-2xl font-bold text-government">BPA</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=85"
                  alt="Professional government contractors reviewing documents in formal office"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-government/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-government/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-government" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Compliance-first approach</p>
                      <p className="text-xs text-muted-foreground">FAR-aware • Fully documented • Quality assured</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <Card key={cap.title} className="group hover:shadow-lg transition-all">
                <CardHeader className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-government-light flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <cap.icon className="w-5 h-5 sm:w-6 sm:h-6 text-government" />
                  </div>
                  <CardTitle className="font-heading text-base sm:text-lg">{cap.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                  <p className="text-muted-foreground text-sm">{cap.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/government/capabilities">
              <Button variant="government" size="lg">
                View Full Capabilities Statement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="relative py-14 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1462206092226-f46025ffe607?w=1920&q=85"
            alt="Professional business handshake representing government partnership"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-government/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white mb-4 [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
              Our Differentiators
            </h2>
            <p className="text-white font-medium [text-shadow:0_2px_6px_rgba(0,0,0,0.5)]">
              What sets us apart in the government contracting landscape.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {[
              { title: "Broad Capability, Single Partner", description: "Diverse services under one roof — a single, reliable partner capable of supporting multiple requirements with consistency and quality.", icon: Building2 },
              { title: "Agile Small Business", description: "We respond quickly, adapt to changing needs, and deliver personalized attention with the professionalism and scale of larger contractors.", icon: Zap },
              { title: "Compliance & Excellence", description: "Proven expertise in process optimization, quality assurance, and regulatory compliance — services delivered efficiently and to the highest standards.", icon: Shield }
            ].map((diff) => (
              <Card key={diff.title} className="bg-black/40 backdrop-blur-md border-white/20 text-center shadow-xl">
                <CardContent className="p-5 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <diff.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg mb-2 sm:mb-3 text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">{diff.title}</h3>
                  <p className="text-white text-sm font-medium leading-relaxed [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">{diff.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
                Engagement Models
              </h2>
              <p className="text-muted-foreground mb-8">
                Flexible approaches to meet diverse contracting needs.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {engagementModels.map((model) => (
                  <Card key={model.title} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="font-heading text-base">{model.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{model.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="space-y-4 hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[16/9] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=85"
                    alt="Government agency professionals collaborating on contracts"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-government/50 to-transparent" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=85"
                      alt="Business professional in formal attire"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-government/30" />
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=85"
                      alt="Team reviewing government compliance documents"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-government/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Commitment */}
      <section className="py-12 sm:py-20 bg-gradient-government">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
              Compliance-First Approach
            </h2>
            <p className="text-muted-foreground mb-8">
              We maintain a proactive stance on compliance, understanding that 
              adherence to regulations, standards, and contractual requirements 
              is fundamental to successful government contracting.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-government mx-auto mb-1 sm:mb-2" />
                <p className="text-xs sm:text-sm font-medium">FAR Awareness</p>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-government mx-auto mb-1 sm:mb-2" />
                <p className="text-xs sm:text-sm font-medium">Quality Systems</p>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-government mx-auto mb-1 sm:mb-2" />
                <p className="text-xs sm:text-sm font-medium">Data Security</p>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-government mx-auto mb-1 sm:mb-2" />
                <p className="text-xs sm:text-sm font-medium">Subcontractor Oversight</p>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-government mx-auto mb-1 sm:mb-2" />
                <p className="text-xs sm:text-sm font-medium">UEI: EUDTX5ULD6B1</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/government/compliance">
                <Button variant="government">
                  Learn About Our Compliance Posture
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Explore Partnership?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Whether you&apos;re a government agency seeking capabilities or a prime
            contractor looking for a reliable partner, we&apos;re ready to discuss
            how we can support your mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15715757174" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-11 sm:h-12 bg-government hover:bg-government-dark text-white">
                <Phone className="w-5 h-5 mr-2" />
                (571) 575-7174
              </Button>
            </a>
            <Link href="/government/capabilities" className="w-full sm:w-auto">
              <Button size="lg" variant="government" className="w-full sm:w-auto h-11 sm:h-12">
                Request Capability Statement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/government/partners" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-11 sm:h-12">
                Schedule Vendor Introduction
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
