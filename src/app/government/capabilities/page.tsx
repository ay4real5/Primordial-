import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  Download,
  Target,
  Users,
  Shield,
  Clock,
  CheckCircle,
  Building2,
  Zap,
  FileText,
  Award,
  Leaf,
  ShoppingCart,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Capabilities Statement | Velune Holdings LLC",
  description: "Velune Holdings LLC capabilities statement — healthcare support, facilities management, landscaping, procurement, and operational support for federal agencies.",
};

export default function CapabilitiesPage() {
  const serviceAreas = [
    {
      icon: Target as React.ComponentType<{ className?: string }>,
      naics: "621610",
      title: "Healthcare Support Services",
      description: "Professional support solutions for healthcare environments including operational coordination, administrative assistance, compliance support, and service delivery optimization to help facilities maintain high standards of care and efficiency."
    },
    {
      icon: Building2 as React.ComponentType<{ className?: string }>,
      naics: "561720",
      title: "Facilities Management & Janitorial Services",
      description: "Comprehensive janitorial and facilities support ensuring clean, safe, and well-maintained environments that meet government standards for appearance, hygiene, and operational readiness."
    },
    {
      icon: Leaf as React.ComponentType<{ className?: string }>,
      naics: "561730",
      title: "Landscaping & Grounds Maintenance",
      description: "Landscaping and grounds management services that help federal properties maintain professional, safe, and aesthetically pleasing outdoor environments while adhering to environmental and safety regulations."
    },
    {
      icon: ShoppingCart as React.ComponentType<{ className?: string }>,
      naics: "561499",
      title: "Procurement & Supply Chain Support",
      description: "End-to-end procurement assistance, supply chain coordination, vendor management, and logistics support with expertise in enterprise systems, process optimization, and compliant acquisition and delivery."
    },
    {
      icon: FileText as React.ComponentType<{ className?: string }>,
      naics: "623210",
      title: "Integrated Operational & Administrative Support",
      description: "Flexible support across administrative management, process improvement, data and performance analytics, stakeholder coordination, and general business operations — helping agencies streamline functions and focus on mission-critical priorities."
    }
  ];

  const companyData = {
    legalName: "Velune Holdings LLC",
    dba: "Velune",
    status: "SAM.gov Registered · Small Business",
    uei: "EUDTX5ULD6B1",
    cage: "Pending Assignment",
    phone: "571-575-7174"
  };

  const naicsCodes = [
    { code: "621610", description: "Home Health Care Services" },
    { code: "561720", description: "Janitorial Services" },
    { code: "561730", description: "Landscaping Services" },
    { code: "623210", description: "Residential Intellectual & Developmental Disability Facilities" },
    { code: "561499", description: "All Other Business Support Services" }
  ];

  const differentiators = [
    {
      icon: Award as React.ComponentType<{ className?: string }>,
      title: "Broad Capability, Single Partner",
      description: "Diverse services under one roof — a single, reliable partner capable of supporting multiple requirements with consistency and quality."
    },
    {
      icon: Zap as React.ComponentType<{ className?: string }>,
      title: "Agile Small Business Advantage",
      description: "We respond quickly, adapt to changing needs, and deliver personalized attention with the professionalism and scale of larger contractors."
    },
    {
      icon: Shield as React.ComponentType<{ className?: string }>,
      title: "Operational Excellence & Compliance",
      description: "Proven expertise in process optimization, quality assurance, and regulatory compliance — services delivered efficiently and to the highest standards."
    },
    {
      icon: Target as React.ComponentType<{ className?: string }>,
      title: "Results-Driven Approach",
      description: "We emphasize measurable outcomes, continuous improvement, and data-informed decision-making to maximize value and performance."
    },
    {
      icon: Clock as React.ComponentType<{ className?: string }>,
      title: "Mission-Aligned Partnership",
      description: "Committed to supporting federal missions with integrity, reliability, and genuine dedication to service excellence."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gradient-government">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="government" className="mb-4">Capabilities Statement</Badge>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-4">
              Velune Holdings LLC
            </h1>
            <p className="text-xl font-semibold text-foreground mb-4">
              Your Trusted Partner for Comprehensive Government Support Services
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto mb-8">
              A versatile, service-driven small business committed to delivering high-quality, reliable solutions across healthcare support, facilities management, landscaping, procurement, and full-spectrum operational support. We combine operational excellence with a client-first mindset to provide tailored, compliant, and cost-effective services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="government" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download PDF (Coming Soon)
              </Button>
              <a href="tel:+15715757174">
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  571-575-7174
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8">
              Company Overview
            </h2>
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-muted-foreground mb-1">Legal Name</h3>
                    <p className="font-medium">{companyData.legalName}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-muted-foreground mb-1">DBA</h3>
                    <p className="font-medium">{companyData.dba}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-muted-foreground mb-1">Business Type</h3>
                    <p className="font-medium">{companyData.status}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-muted-foreground mb-1">UEI</h3>
                    <Badge variant="government" className="text-sm font-mono tracking-wider">{companyData.uei}</Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold text-muted-foreground mb-1">CAGE Code</h3>
                    <Badge variant="outline">{companyData.cage}</Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold text-muted-foreground mb-1">Phone</h3>
                    <a href="tel:+15715757174" className="font-medium text-government hover:underline">{companyData.phone}</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">SAM.gov Registered · UEI Active</h3>
                  <p className="text-green-800 text-sm">
                    Velune Holdings LLC is SAM.gov registered with an active UEI (EUDTX5ULD6B1). 
                    CAGE code assignment is in progress. We are actively seeking federal contracting opportunities 
                    and available for teaming, subcontracting, and prime contract discussions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Service Areas */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Core Service Areas
            </h2>
            <p className="text-muted-foreground mb-10">
              We bring the expertise, agility, and dedication required to help federal agencies and prime contractors achieve their missions across five key service lines.
            </p>
            
            <div className="grid gap-6">
              {serviceAreas.map((area) => (
                <Card key={area.title} className="border-l-4 border-l-government">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-government-light flex items-center justify-center flex-shrink-0">
                        <area.icon className="w-6 h-6 text-government" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="font-heading font-semibold text-lg">{area.title}</h3>
                          <Badge variant="outline" className="font-mono text-xs">NAICS {area.naics}</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NAICS Codes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Primary NAICS Codes</CardTitle>
                <CardDescription>North American Industry Classification System — our primary business activity codes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {naicsCodes.map((n) => (
                    <div key={n.code} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <span className="font-medium">{n.description}</span>
                      <Badge variant="government" className="font-mono ml-4 shrink-0">{n.code}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Registrations */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8">
              Certifications &amp; Registrations
            </h2>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center border-t-4 border-government">
                <CheckCircle className="w-8 h-8 text-government mx-auto mb-3" />
                <h3 className="font-heading font-bold text-base mb-1">SAM.gov Registered</h3>
                <p className="text-xs text-muted-foreground">Active registration for federal contracting</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center border-t-4 border-government">
                <CheckCircle className="w-8 h-8 text-government mx-auto mb-3" />
                <h3 className="font-heading font-bold text-base mb-1">Small Business</h3>
                <p className="text-xs text-muted-foreground">Registered small business entity</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center border-t-4 border-government">
                <CheckCircle className="w-8 h-8 text-government mx-auto mb-3" />
                <h3 className="font-heading font-bold text-base mb-1">UEI: EUDTX5ULD6B1</h3>
                <p className="text-xs text-muted-foreground">Unique Entity ID — active</p>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {["8(a) Program", "SDVOSB", "WOSB", "HUBZone", "Veteran-Owned"].map((item) => (
                    <div key={item} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="font-medium">{item}</span>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Additional socioeconomic certifications will be updated as they are obtained.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Velune */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Why Velune Holdings LLC?
            </h2>
            <p className="text-muted-foreground mb-10">
              We combine operational excellence with a client-first mindset to provide tailored, compliant, and cost-effective services that meet the rigorous standards of government work.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {differentiators.map((diff) => (
                <Card key={diff.title} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-government-light flex items-center justify-center mb-4">
                      <diff.icon className="w-6 h-6 text-government" />
                    </div>
                    <CardTitle className="font-heading text-lg">{diff.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{diff.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-gradient-government">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">Our Commitment</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Velune Holdings LLC, we understand that government work demands precision, accountability, and unwavering reliability. Whether supporting healthcare operations, maintaining facilities, managing grounds, streamlining procurement, or providing comprehensive operational support, we approach every contract with the same level of professionalism and dedication.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are prepared to meet federal requirements for safety, compliance, quality, and performance while delivering cost-effective solutions that support your agency&apos;s goals. We are committed to building long-term partnerships based on trust, performance, and shared success.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Ready to Partner
            </h2>
            <p className="text-muted-foreground mb-2 text-lg">
              Velune Holdings LLC is actively seeking opportunities to support federal agencies and prime contractors with dependable, high-quality services.
            </p>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss how Velune Holdings LLC can support your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+15715757174">
                <Button size="lg" className="btn-government">
                  <Phone className="w-5 h-5 mr-2" />
                  571-575-7174
                </Button>
              </a>
              <Link href="/government/partners">
                <Button size="lg" variant="government">
                  Schedule a Discussion
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
