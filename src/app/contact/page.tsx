import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Heart, Building2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Primodial. Contact our Health division for care inquiries or our Government division for partnership opportunities.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              We&apos;re here to help. Reach out to the appropriate division for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Health Contact Card */}
            <Card className="border-health/20">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-health-light flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-health" />
                </div>
                <CardTitle className="font-heading text-xl">Health Division</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  For home health care inquiries, care planning, and service questions.
                </p>
                <div className="space-y-3">
                  <a href="tel:+18303993602" className="flex items-center gap-3 text-health hover:text-health-dark">
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">(830) 399-3602</span>
                  </a>
                  <a href="mailto:health@primodial.org" className="flex items-center gap-3 text-muted-foreground hover:text-health">
                    <Mail className="w-5 h-5" />
                    <span>health@primodial.org</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                    <span>Available 24/7 for urgent needs</span>
                  </div>
                </div>
                <Link href="/health">
                  <Button variant="health" className="w-full mt-4">
                    Visit Health Division
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Government Contact Card */}
            <Card className="border-government/20">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-government-light flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-government" />
                </div>
                <CardTitle className="font-heading text-xl">Government Division</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  For contracting inquiries, partnership opportunities, and vendor introductions.
                </p>
                <div className="space-y-3">
                  <a href="mailto:gov@primodial.org" className="flex items-center gap-3 text-government hover:text-government-dark">
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">gov@primodial.org</span>
                  </a>
                  <a href="mailto:partners@primodial.org" className="flex items-center gap-3 text-muted-foreground hover:text-government">
                    <Mail className="w-5 h-5" />
                    <span>partners@primodial.org</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                    <span>Business hours: Mon-Fri, 9AM-5PM ET</span>
                  </div>
                </div>
                <Link href="/government">
                  <Button variant="government" className="w-full mt-4">
                    Visit Government Division
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="division">I&apos;m interested in *</Label>
                  <Select id="division" required>
                    <option value="">Select a division...</option>
                    <option value="health">Health Services</option>
                    <option value="government">Government Contracting</option>
                    <option value="general">General Inquiry</option>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?"
                    rows={5}
                    required
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    className="rounded border-input"
                    required
                  />
                  <Label htmlFor="consent" className="text-sm font-normal">
                    I consent to Primodial contacting me regarding my inquiry. *
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground">
                  We respect your privacy. Your information will only be used to respond to your inquiry.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* General Info */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">United States</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">
                <a href="mailto:contact@primodial.org" className="hover:text-primary">
                  contact@primodial.org
                </a>
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Response Time</h3>
              <p className="text-muted-foreground text-sm">Within 1-2 business days</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
