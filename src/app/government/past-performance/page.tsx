import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Building2, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Past Performance | Primodial Government",
  description: "Our track record of successful contract delivery and client satisfaction in government contracting.",
};

export default function PastPerformancePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gradient-government">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6">
              Past Performance
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence is demonstrated through successful contract 
              delivery and satisfied clients. We build our reputation one engagement at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Government Contracts Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8">
              Government Contract History
            </h2>
            
            <Card className="mb-8">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-government-light flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-government" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Building Our Portfolio
                </h3>
                <p className="text-muted-foreground mb-4">
                  As a growing government contractor, we are actively building our past 
                  performance portfolio. We are currently pursuing opportunities and 
                  establishing our track record with initial contracts.
                </p>
                <Badge variant="government">Portfolio Building Phase</Badge>
              </CardContent>
            </Card>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-semibold text-amber-900 mb-2">
                No Active Contracts to Display
              </h3>
              <p className="text-amber-800 text-sm mb-4">
                We do not currently have active government contracts to display. This 
                section will be updated as we secure and complete contract engagements.
              </p>
              <p className="text-amber-800 text-sm">
                In the interim, we invite prime contractors and agencies to consider 
                our commercial experience and team capabilities as indicators of our 
                potential for successful government contract delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial/Team Experience */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8">
              Selected Commercial Experience
            </h2>
            
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">Commercial</Badge>
                  </div>
                  <CardTitle className="font-heading text-xl">Health Services Operations</CardTitle>
                  <CardDescription>Care delivery and operations management</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Scope:</span>
                      <p className="font-medium">Care operations, staffing, compliance</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Key Outcomes:</span>
                      <p className="font-medium">Quality care delivery, regulatory compliance</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Period:</span>
                      <p className="font-medium">Ongoing operations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">Commercial</Badge>
                  </div>
                  <CardTitle className="font-heading text-xl">Operational Management</CardTitle>
                  <CardDescription>Business process and quality management</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Scope:</span>
                      <p className="font-medium">Process optimization, compliance systems</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Key Outcomes:</span>
                      <p className="font-medium">Efficient operations, quality assurance</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Period:</span>
                      <p className="font-medium">Ongoing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> The above represents our commercial operational 
                experience that demonstrates our capabilities in quality delivery, 
                compliance management, and operational excellence—skills directly 
                transferable to government contracting requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Experience Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8">
              Team Experience
            </h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-government-light flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-government" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Relevant Professional Background
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Our leadership and key personnel bring experience from various 
                      sectors including healthcare operations, program management, 
                      compliance, and administrative services. While we are building 
                      our direct government contracting portfolio, our team has the 
                      skills and knowledge to deliver successful outcomes.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Detailed team bios and experience summaries available upon request 
                      for specific opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Commitment */}
      <section className="py-20 bg-gradient-government">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">
              Our Performance Commitment
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We are committed to building a track record of excellence. Every contract 
              is an opportunity to demonstrate our capabilities and earn your trust.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <Clock className="w-8 h-8 text-government mx-auto mb-3" />
                <h3 className="font-heading font-semibold mb-2">On-Time Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  We understand government timelines and commit to meeting all deadlines.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <Badge className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 bg-government text-white">Q</Badge>
                <h3 className="font-heading font-semibold mb-2">Quality Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Deliverables meet or exceed specifications through rigorous QA.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <Users className="w-8 h-8 text-government mx-auto mb-3" />
                <h3 className="font-heading font-semibold mb-2">Clear Communication</h3>
                <p className="text-sm text-muted-foreground">
                  Proactive updates and responsive support throughout the engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Let&apos;s Build Our Track Record Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We invite agencies and prime contractors to consider us for upcoming
            opportunities. Let us demonstrate our capabilities firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/government/partners">
              <Button size="lg" className="btn-government">
                Discuss Opportunities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/government/capabilities">
              <Button size="lg" variant="outline">
                View Capabilities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
