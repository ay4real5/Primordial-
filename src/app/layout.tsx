import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Primodial | Healthcare & Government Contracting",
    template: "%s | Primodial",
  },
  description: "Primodial delivers excellence across healthcare services and government contracting solutions. Trusted partner for families and agencies.",
  keywords: ["healthcare", "home health", "government contracting", "federal contracts", "caregiver services"],
  authors: [{ name: "Primodial" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.primodial.org",
    siteName: "Primodial",
    title: "Primodial | Healthcare & Government Contracting",
    description: "Primodial delivers excellence across healthcare services and government contracting solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Primodial | Healthcare & Government Contracting",
    description: "Primodial delivers excellence across healthcare services and government contracting solutions.",
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
      </body>
    </html>
  );
}
