import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Lock, 
  Users, 
  FileText,
  AlertTriangle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance & Security | Primodial Government",
  description: "Our compliance posture, quality assurance approach, and security commitments for government contracting.",
};

export default function CompliancePage() {
  const complianceAreas = [
    {
      icon: FileText,
      title: "FAR Awareness",
      description: "We maintain awareness of and adherence to Federal Acquisition Regulation requirements relevant to our contracting activities.",
      status: "Active Commitment"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Our QA processes ensure deliverables meet specifications and quality standards through systematic review and verification.",
      status: "Implemented"
    },
    {
      icon: Lock,
      title: "Data Handling",
      description: "We implement appropriate safeguards for any data we handle, following industry best practices for protection and privacy.",
      status: "In Progress"
    },
    {
      icon: Users,
      title: "Personnel Vetting",
      description: "Team members working on government contracts undergo appropriate background screening and clearance processes as required.",
      status: "Standard Process"
    },
    {
      icon: CheckCircle,
      title: "Documentation",
      description: "We maintain thorough documentation of processes, decisions, and deliverables to support compliance and audit requirements.",
      status: "Implemented"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gradient-government">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6">
              Compliance & Security
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain a proactive approach to compliance, understanding that 
              adherence to regulations and standards is fundamental to successful 
              government contracting.
            </p>
          </div>
        </div>
      </section>

      {/* FAR Awareness */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-government-light flex items-center justify-center">
                    <FileText className="w-6 h-6 text-government" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl">FAR Awareness</CardTitle>
                    <CardDescription>Federal Acquisition Regulation</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We maintain awareness of Federal Acquisition Regulation requirements 
                  relevant to our scope of work. As we engage in federal contracting, 
                  we commit to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-government flex-shrink-0 mt-0.5" />
                    <span>Staying informed of applicable FAR provisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-government flex-shrink-0 mt-0.5" />
                    <span>Incorporating FAR requirements into our processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-government flex-shrink-0 mt-0.5" />
                    <span>Ensuring team training on relevant regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-government flex-shrink-0 mt-0.5" />
                    <span>Maintaining documentation for compliance verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8">
              Compliance Areas
            </h2>
            
            <div className="grid gap-6">
              {complianceAreas.map((area) => (
                <Card key={area.title}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-government-light flex items-center justify-center flex-shrink-0">
                        <area.icon className="w-6 h-6 text-government" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-heading font-semibold text-lg">{area.title}</h3>
                          <Badge variant="outline">{area.status}</Badge>
                        </div>
                        <p className="text-muted-foreground">{area.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8">
              Data Handling & Security
            </h2>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-government-light flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-government" />
                </div>
                <CardTitle className="font-heading text-xl">Information Security Approach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to 
                  protect information we handle in the course of government contracting:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Access Controls</h4>
                    <p className="text-sm text-muted-foreground">
                      Role-based access limiting data to authorized personnel only.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Encryption</h4>
                    <p className="text-sm text-muted-foreground">
                      Data encryption in transit and at rest where appropriate.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Audit Logging</h4>
                    <p className="text-sm text-muted-foreground">
                      Logging of access and activities for accountability.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Incident Response</h4>
                    <p className="text-sm text-muted-foreground">
                      Procedures for identifying, reporting, and addressing security incidents.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-amber-900 mb-1">
                        Evolving Security Posture
                      </h4>
                      <p className="text-sm text-amber-800">
                        Our security practices continue to evolve as we grow and as 
                        requirements develop. We commit to meeting or exceeding the 
                        security requirements specified in any contract we undertake.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subcontractor Management */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8">
              Subcontractor Management
            </h2>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-government-light flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-government" />
                </div>
                <CardTitle className="font-heading text-xl">Our Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  When we engage subcontractors, we apply the same compliance and 
                  quality standards to their work:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-government flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Careful Selection:</span>
                      <span className="text-muted-foreground"> We vet subcontractors for capability and reliability.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-government flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Clear Requirements:</span>
                      <span className="text-muted-foreground"> We communicate compliance and quality expectations clearly.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-government flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Ongoing Oversight:</span>
                      <span className="text-muted-foreground"> We monitor performance and address issues promptly.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-government flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Documentation:</span>
                      <span className="text-muted-foreground"> We maintain records of subcontractor activities and deliverables.</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-government">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Questions About Our Compliance Posture?
          </h2>
          <p className="text-government-foreground/80 max-w-2xl mx-auto mb-8">
            We welcome inquiries about our approach to compliance, security, and 
            quality assurance. Contact us to discuss specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/government/partners">
              <Button size="lg" variant="secondary">
                Discuss Requirements
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
      </section>
    </div>
  );
}
