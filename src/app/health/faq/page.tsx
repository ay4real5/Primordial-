import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | Primodial Health",
  description: "Frequently asked questions about our home health care services, care plans, caregiver qualifications, and more.",
};

export default function HealthFAQPage() {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          q: "What areas do you serve?",
          a: "We provide home health care services across the United States. Contact us at (830) 399-3602 to confirm coverage in your specific area."
        },
        {
          q: "What are your hours of operation?",
          a: "Our office is available by phone during business hours, and we offer 24/7 care services for clients. For urgent needs, you can always reach us at (830) 399-3602."
        },
        {
          q: "Do you provide services on weekends and holidays?",
          a: "Yes, we provide care services 7 days a week, including weekends and holidays. Care schedules are arranged based on individual client needs."
        }
      ]
    },
    {
      category: "Care Services",
      questions: [
        {
          q: "What services do you offer?",
          a: "We offer comprehensive home health care including: Daily Living Support (personal care, household help, meal prep), Companionship, Health Management, Medication Reminders, Transportation, and Group Home Care. Services can be bundled or provided individually."
        },
        {
          q: "Can I customize my care plan?",
          a: "Absolutely. Every care plan is customized to meet the unique needs, preferences, and schedule of each client. We work with you to create a plan that fits your situation."
        },
        {
          q: "How quickly can services begin?",
          a: "In many cases, we can begin services within 24-48 hours after the initial consultation and care plan development. Emergency situations may be accommodated more quickly."
        },
        {
          q: "Can services be adjusted if needs change?",
          a: "Yes, care plans are regularly reviewed and can be modified as needs change. We maintain open communication with families to ensure the care plan remains appropriate."
        }
      ]
    },
    {
      category: "Caregivers & Staff",
      questions: [
        {
          q: "Are your caregivers background checked?",
          a: "Yes, all caregivers undergo comprehensive background checks, reference verification, and skills assessments before joining our team."
        },
        {
          q: "What training do your caregivers receive?",
          a: "Our caregivers receive training in areas including personal care techniques, safety protocols, communication skills, infection control, and specialized care needs. Training is ongoing to ensure high-quality care."
        },
        {
          q: "Will I have the same caregiver consistently?",
          a: "We strive to provide consistency by assigning the same caregiver(s) whenever possible. This helps build trust and familiarity. If a substitute is needed, they are fully briefed on your care plan."
        },
        {
          q: "Are caregivers insured?",
          a: "Yes, we carry comprehensive liability insurance, and our caregivers are covered under our workers' compensation policy."
        }
      ]
    },
    {
      category: "Costs & Insurance",
      questions: [
        {
          q: "How much do your services cost?",
          a: "Costs vary based on the type and frequency of services needed. We provide detailed pricing during your free consultation. Contact us at (830) 399-3602 for specific pricing information."
        },
        {
          q: "Do you accept insurance?",
          a: "We work with various payment options. Please contact us to discuss your specific situation and insurance coverage. We can help you understand your options."
        },
        {
          q: "Are there any long-term contracts?",
          a: "No, we don't require long-term contracts. Services can be arranged on a schedule that works for you, and you can adjust or discontinue services with reasonable notice."
        },
        {
          q: "Is there a minimum number of hours required?",
          a: "We offer flexible scheduling to meet various needs. Contact us to discuss minimum visit requirements for your area and service type."
        }
      ]
    },
    {
      category: "Safety & Quality",
      questions: [
        {
          q: "What safety measures do you have in place?",
          a: "We implement comprehensive safety protocols including: caregiver background checks, ongoing supervision, fall prevention measures, infection control practices, emergency response procedures, and regular quality assessments."
        },
        {
          q: "What if there's an emergency?",
          a: "Caregivers are trained in emergency response and follow established protocols. We maintain emergency contact information and coordinate with families and healthcare providers as appropriate."
        },
        {
          q: "How do you ensure quality care?",
          a: "Quality is ensured through: careful caregiver selection, ongoing training, regular supervision and assessments, client feedback collection, and continuous improvement processes."
        },
        {
          q: "Can family members be involved in care?",
          a: "Absolutely. We encourage family involvement and maintain open communication with family members. We welcome input and updates about changing needs or preferences."
        }
      ]
    },
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I get started?",
          a: "Getting started is easy: 1) Call us at (830) 399-3602 for a free consultation, 2) We'll discuss your needs and create a custom care plan, 3) Care begins with a matched caregiver."
        },
        {
          q: "What happens during the initial consultation?",
          a: "During the free consultation, we discuss your needs, preferences, schedule, and any special requirements. We explain our services, answer questions, and develop a preliminary care plan."
        },
        {
          q: "Do I need a doctor's referral?",
          a: "No physician referral is required for our non-medical home care services. However, we can coordinate with healthcare providers if you have specific medical care needs."
        },
        {
          q: "What if I'm not satisfied with the care?",
          a: "Your satisfaction is important to us. If you have concerns, please contact us immediately at (830) 399-3602. We'll work to address issues promptly, which may include adjusting the care plan or changing caregivers."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gradient-health">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our home health care services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.questions.map((faq, i) => (
                    <Card key={i}>
                      <CardHeader className="pb-3">
                        <CardTitle className="font-heading text-lg">{faq.q}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="max-w-2xl mx-auto mt-16 text-center">
            <Card className="bg-white border border-border">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground mb-6">
                  We&apos;re here to help. Contact us directly for personalized answers
                  to your specific situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+18303993602">
                    <Button size="lg" className="btn-health">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (830) 399-3602
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      Send a Message
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
