import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Mail,
  Clock,
  Target,
  Shield,
  Handshake
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partners & Teaming | Velune",
  description: "Partner with Velune for teaming opportunities, subcontracting arrangements, and joint capabilities.",
};

export default function PartnersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gradient-government">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6">
              Partner With Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re actively seeking teaming opportunities with prime contractors 
              and agencies. Let&apos;s explore how we can work together to deliver 
              outstanding results.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8 text-center">
              Why Partner With Velune?
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-government-light flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-government" />
                  </div>
                  <CardTitle className="font-heading text-lg">Mission Alignment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    We understand government missions and align our capabilities 
                    to support agency objectives effectively.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-government-light flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-government" />
                  </div>
                  <CardTitle className="font-heading text-lg">Compliance Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Compliance is built into our processes, reducing risk and 
                    ensuring smooth contract execution.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-government-light flex items-center justify-center mb-4">
                    <Handshake className="w-6 h-6 text-government" />
                  </div>
                  <CardTitle className="font-heading text-lg">Reliable Partner</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    We communicate proactively, meet commitments, and maintain 
                    transparency throughout engagements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-government-light flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-government" />
                  </div>
                  <CardTitle className="font-heading text-lg">Quality Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    We bring operational excellence and quality focus to every 
                    aspect of contract performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8 text-center">
              How We Can Partner
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Badge className="mx-auto mb-2" variant="government">Prime</Badge>
                  <CardTitle className="font-heading text-lg">Prime Contractor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    We serve as prime, managing contract delivery and coordinating 
                    subcontractor teams.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Badge className="mx-auto mb-2" variant="secondary">Sub</Badge>
                  <CardTitle className="font-heading text-lg">Subcontractor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    We partner with primes as a reliable subcontractor, bringing 
                    specialized capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Badge className="mx-auto mb-2" variant="outline">Team</Badge>
                  <CardTitle className="font-heading text-lg">Teaming Partner</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    We join teaming arrangements, contributing expertise to 
                    collaborative proposals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Intake Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-primary mb-4">
                Partner Intake Form
              </h2>
              <p className="text-muted-foreground">
                Tell us about your company and partnership interests. We&apos;ll 
                respond within 2-3 business days.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  {/* Company Information */}
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-government" />
                      Company Information
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input id="companyName" placeholder="Acme Corp" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" type="url" placeholder="www.example.com" />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-government" />
                      Contact Information
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Contact Name *</Label>
                        <Input id="contactName" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" placeholder="Business Development" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                  </div>

                  {/* Partnership Details */}
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                      <Handshake className="w-5 h-5 text-government" />
                      Partnership Interest
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="partnershipType">Partnership Type *</Label>
                        <Select id="partnershipType" required>
                          <option value="">Select type...</option>
                          <option value="prime-to-sub">Prime seeking Subcontractor</option>
                          <option value="sub-to-prime">Subcontractor seeking Prime</option>
                          <option value="teaming">Teaming Arrangement</option>
                          <option value="joint-venture">Joint Venture</option>
                          <option value="other">Other</option>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="capabilities">Your Capabilities *</Label>
                        <Textarea 
                          id="capabilities" 
                          placeholder="Describe your company's capabilities, relevant experience, and what you bring to a partnership..."
                          rows={4}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vehicles">Contract Vehicles / Opportunities</Label>
                        <Input 
                          id="vehicles" 
                          placeholder="e.g., GSA Schedule, specific RFQs, NAICS codes of interest"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes</Label>
                        <Textarea 
                          id="notes" 
                          placeholder="Any other information you'd like to share..."
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-government" />
                      Certifications (if applicable)
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {["Small Business", "8(a)", "SDVOSB", "WOSB", "HUBZone", "Veteran-Owned"].map((cert) => (
                        <div key={cert} className="flex items-center gap-2">
                          <input type="checkbox" id={cert} className="rounded border-input" />
                          <Label htmlFor={cert} className="text-sm font-normal">{cert}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      className="rounded border-input"
                      required
                    />
                    <Label htmlFor="consent" className="text-sm font-normal">
                      I authorize Velune Holdings LLC to contact me regarding partnership opportunities. *
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto" variant="government">
                    Submit Partner Inquiry
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 inline mr-1" />
                    We typically respond within 2-3 business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">
              Prefer Direct Contact?
            </h2>
            <p className="text-muted-foreground mb-6">
              Reach out to us directly to discuss partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:partners@primodial.org" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-government text-white rounded-lg hover:bg-government-dark transition-colors">
                <Mail className="w-5 h-5" />
                partners@primodial.org
              </a>
              <a href="mailto:gov@primodial.org" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-government text-government rounded-lg hover:bg-government-light transition-colors">
                <Mail className="w-5 h-5" />
                gov@primodial.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We&apos;re eager to explore how a partnership with Velune can help
            achieve mission success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/government/capabilities">
              <Button size="lg" className="btn-government">
                View Our Capabilities
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
      </section>
    </div>
  );
}
