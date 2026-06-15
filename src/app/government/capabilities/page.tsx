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
  CheckCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Capabilities Statement | Primodial Government",
  description: "Comprehensive capabilities statement for Primodial Government Contracting. Core competencies, qualifications, and company information.",
};

export default function CapabilitiesPage() {
  const coreCompetencies = [
    "Operational support services",
    "Administrative and clerical support",
    "Program management assistance",
    "Quality assurance and compliance",
    "Documentation and records management",
    "Staffing and personnel services",
    "Logistics and coordination support",
    "Training and development support"
  ];

  const companyData = {
    legalName: "Primodial",
    dba: "Primodial Government",
    status: "US-registered company",
    uei: "TBD - Pending Registration",
    cage: "TBD - Pending Assignment",
    website: "www.primodial.org"
  };

  const socioeconomicStatus = [
    { label: "Small Business", status: "TBD", badge: "outline" },
    { label: "8(a) Program", status: "TBD", badge: "outline" },
    { label: "SDVOSB", status: "TBD", badge: "outline" },
    { label: "WOSB", status: "TBD", badge: "outline" },
    { label: "HUBZone", status: "TBD", badge: "outline" },
    { label: "Veteran-Owned", status: "TBD", badge: "outline" }
  ];

  const differentiators = [
    {
      icon: Target as React.ComponentType<{ className?: string }>,
      title: "Mission-Focused",
      description: "We align our approach with agency objectives, ensuring our support advances mission outcomes."
    },
    {
      icon: Clock as React.ComponentType<{ className?: string }>,
      title: "Responsive Delivery",
      description: "We understand government timelines and respond with urgency to requirements and deadlines."
    },
    {
      icon: Shield as React.ComponentType<{ className?: string }>,
      title: "Compliance Built-In",
      description: "Compliance isn't an add-on—it's fundamental to how we operate and deliver."
    },
    {
      icon: Users as React.ComponentType<{ className?: string }>,
      title: "Relationship-Driven",
      description: "We build lasting partnerships based on trust, communication, and consistent performance."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gradient-government">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6">
              Capabilities Statement
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A comprehensive overview of our qualifications, core competencies, 
              and company information for government agencies and prime contractors.
            </p>
            <Button variant="government" size="lg">
              <Download className="w-5 h-5 mr-2" />
              Download PDF (Coming Soon)
            </Button>
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
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-muted-foreground mb-1">Legal Name</h3>
                    <p className="font-medium">{companyData.legalName}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-muted-foreground mb-1">DBA</h3>
                    <p className="font-medium">{companyData.dba}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-muted-foreground mb-1">Status</h3>
                    <p className="font-medium">{companyData.status}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-muted-foreground mb-1">Website</h3>
                    <p className="font-medium">{companyData.website}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-muted-foreground mb-1">UEI</h3>
                    <Badge variant="outline">{companyData.uei}</Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold text-muted-foreground mb-1">CAGE Code</h3>
                    <Badge variant="outline">{companyData.cage}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Registration In Progress</h3>
                  <p className="text-amber-800 text-sm">
                    We are currently completing SAM.gov registration and obtaining our UEI and CAGE codes. 
                    This page will be updated once registration is complete. Contact us for current 
                    status and preliminary discussions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8">
              Core Competencies
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {coreCompetencies.map((comp, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-government flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NAICS & PSC Codes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">NAICS Codes</CardTitle>
                  <CardDescription>North American Industry Classification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="font-medium">TBD</span>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      NAICS codes will be listed here upon completion of business classification review.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">PSC Codes</CardTitle>
                  <CardDescription>Product and Service Codes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="font-medium">TBD</span>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      PSC codes will be listed here upon completion of service classification.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Socioeconomic Status */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8">
              Socioeconomic Status
            </h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {socioeconomicStatus.map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="font-medium">{item.label}</span>
                      <Badge variant="outline">{item.status}</Badge>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Socioeconomic certifications will be updated as they are obtained. 
                  Please contact us for current status on any specific designation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8">
              Why Partner With Us
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {differentiators.map((diff) => (
                <Card key={diff.title}>
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

      {/* CTA */}
      <section className="py-20 bg-government">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Request More Information
            </h2>
            <p className="text-government-foreground/80 mb-8">
              Contact us to discuss how we can support your agency or teaming needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/government/partners">
                <Button size="lg" variant="secondary">
                  Schedule a Discussion
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
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
