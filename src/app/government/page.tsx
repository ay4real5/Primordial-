import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2,
  ArrowRight,
  Mail,
  CheckCircle,
  Target,
  Shield,
  Users,
  FileText,
  Award,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Primodial Government | Professional Contracting Solutions",
  description: "Professional contracting services for federal, state, and local agencies. Prime and subcontractor capabilities with compliance focus.",
};

export default function GovernmentPage() {
  const capabilities = [
    {
      icon: Target,
      title: "Operational Support",
      description: "Comprehensive operational support services for government agencies."
    },
    {
      icon: Users,
      title: "Staffing Solutions",
      description: "Qualified personnel placement for temporary and long-term needs."
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Regulatory compliance support and quality assurance processes."
    },
    {
      icon: Zap,
      title: "Program Support",
      description: "Administrative and logistical support for government programs."
    },
    {
      icon: FileText,
      title: "Documentation Services",
      description: "Records management, reporting, and documentation support."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Process improvement and quality control implementation."
    }
  ];

  const differentiators = [
    {
      title: "Speed & Responsiveness",
      description: "We understand the importance of timely delivery in government contracting. Our streamlined processes enable rapid response to requirements."
    },
    {
      title: "Compliance Mindset",
      description: "Compliance isn't an afterthought—it's built into every process. We maintain rigorous adherence to regulations and reporting requirements."
    },
    {
      title: "Quality Focus",
      description: "We deliver outcomes that meet or exceed expectations, with quality assurance processes that ensure consistent performance."
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
      <section className="relative py-20 lg:py-32 bg-gradient-government overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-government text-white text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Government Contracting
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Capable Partner for Government Agencies
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Professional contracting services for federal, state, and local agencies. 
              We bring operational excellence, compliance focus, and proven management 
              to a wide range of contracting needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/government/capabilities">
                <Button size="lg" variant="government">
                  View Capabilities
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/government/partners">
                <Button size="lg" variant="government-outline">
                  <Mail className="w-5 h-5 mr-2" />
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
              Capabilities Overview
            </h2>
            <p className="text-muted-foreground">
              We offer a wide range of contracting capabilities to support government 
              agencies in achieving their mission objectives.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <Card key={cap.title} className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-government-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <cap.icon className="w-6 h-6 text-government" />
                  </div>
                  <CardTitle className="font-heading text-lg">{cap.title}</CardTitle>
                </CardHeader>
                <CardContent>
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
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
              Our Differentiators
            </h2>
            <p className="text-muted-foreground">
              What sets us apart in the government contracting landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((diff) => (
              <Card key={diff.title} className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-3">{diff.title}</h3>
                  <p className="text-muted-foreground text-sm">{diff.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
              Engagement Models
            </h2>
            <p className="text-muted-foreground">
              Flexible approaches to meet diverse contracting needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {engagementModels.map((model) => (
              <Card key={model.title}>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">{model.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{model.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Commitment */}
      <section className="py-20 bg-gradient-government">
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle className="w-6 h-6 text-government mx-auto mb-2" />
                <p className="text-sm font-medium">FAR Awareness</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle className="w-6 h-6 text-government mx-auto mb-2" />
                <p className="text-sm font-medium">Quality Systems</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle className="w-6 h-6 text-government mx-auto mb-2" />
                <p className="text-sm font-medium">Data Security</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle className="w-6 h-6 text-government mx-auto mb-2" />
                <p className="text-sm font-medium">Subcontractor Oversight</p>
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
      <section className="py-20 bg-white border-t border-border">
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
            <Link href="/government/capabilities">
              <Button size="lg" className="btn-government">
                Request Capability Statement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/government/partners">
              <Button size="lg" variant="outline">
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
