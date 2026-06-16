import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";
import { StickyCTA } from "@/components/sticky-cta";

export const metadata: Metadata = {
  title: {
    default: "Velune Holdings LLC | Healthcare & Government Contracting",
    template: "%s | Velune Holdings LLC",
  },
  description: "Velune Holdings LLC delivers excellence across healthcare services and government contracting solutions. Trusted partner for families and agencies.",
  keywords: ["healthcare", "home health", "government contracting", "federal contracts", "caregiver services"],
  authors: [{ name: "Velune Holdings LLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.primodial.org",
    siteName: "Velune Holdings LLC",
    title: "Velune Holdings LLC | Healthcare & Government Contracting",
    description: "Velune Holdings LLC delivers excellence across healthcare services and government contracting solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velune Holdings LLC | Healthcare & Government Contracting",
    description: "Velune Holdings LLC delivers excellence across healthcare services and government contracting solutions.",
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
