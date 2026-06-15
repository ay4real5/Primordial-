import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms of Service | Velune Holdings LLC",
  description: "Terms and conditions governing the use of Velune Holdings LLC's website and services.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing or using Velune Holdings LLC&apos;s website and services, you agree to be bound 
                  by these Terms of Service. If you do not agree to these terms, please do not 
                  use our website or services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Use of Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  You agree to use our website only for lawful purposes and in accordance with 
                  these Terms. You agree not to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Use the website in any way that violates applicable laws</li>
                  <li>Attempt to interfere with the proper functioning of the website</li>
                  <li>Access data not intended for you</li>
                  <li>Use the website to transmit harmful code or malware</li>
                  <li>Engage in any activity that disrupts or interferes with the website</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The content on this website, including text, graphics, logos, images, and 
                  software, is the property of Velune Holdings LLC and is protected by copyright and 
                  other intellectual property laws. You may not reproduce, distribute, modify, 
                  or create derivative works without our prior written consent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Disclaimer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The information on this website is provided for general informational purposes 
                  only. We make no representations or warranties about the accuracy, completeness, 
                  or reliability of any information on the site. Your use of the website and 
                  reliance on any information is solely at your own risk.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To the fullest extent permitted by law, Velune Holdings LLC shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages arising from 
                  or related to your use of the website or services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Indemnification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You agree to indemnify and hold harmless Velune Holdings LLC and its affiliates, officers, 
                  directors, employees, and agents from any claims, liabilities, damages, losses, 
                  or expenses arising from your use of the website or violation of these Terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws 
                  of the United States and the State of [State], without regard to conflict of 
                  law principles. Any disputes shall be resolved in the courts of [State].
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms at any time. Changes will be 
                  effective immediately upon posting to the website. Your continued use 
                  of the website after changes constitutes acceptance of the modified Terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you have questions about these Terms, please contact us at:
                </p>
                <p className="mt-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:legal@primodial.org" className="text-primary hover:underline">
                    legal@primodial.org
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
