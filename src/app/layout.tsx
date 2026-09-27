import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";
import { StickyCTA } from "@/components/sticky-cta";

export const metadata: Metadata = {
  title: {
    default: "Primordial Health Services | Compassionate Home Health Care",
    template: "%s | Primordial Health Services",
  },
  description: "Primordial Health Services provides compassionate, personalized home health care services. Personal care, companionship, household support, and 24/7 care coordination for your loved ones.",
  keywords: ["home health care", "caregiver services", "personal care", "companionship", "elderly care", "in-home care"],
  authors: [{ name: "Primordial Health Services" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.primordialhealthservices.health",
    siteName: "Primordial Health Services",
    title: "Primordial Health Services | Compassionate Home Health Care",
    description: "Primordial Health Services provides compassionate, personalized home health care services for your loved ones.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=630&fit=crop&q=85",
        width: 1200,
        height: 630,
        alt: "Primordial Health Services — Compassionate Home Health Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Primordial Health Services | Compassionate Home Health Care",
    description: "Primordial Health Services provides compassionate, personalized home health care services for your loved ones.",
    images: ["https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=630&fit=crop&q=85"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased font-sans">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <StickyCTA />
      </body>
    </html>
  );
}
