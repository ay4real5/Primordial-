"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  const pathname = usePathname();
  
  const division = React.useMemo(() => {
    if (pathname.startsWith("/health")) return "health" as const;
    if (pathname.startsWith("/government")) return "government" as const;
    return "parent" as const;
  }, [pathname]);

  const accentColor = division === "health" ? "health" : division === "government" ? "government" : "primary";

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    health: [
      { label: "Home", href: "/health" },
      { label: "Services", href: "/health/services" },
      { label: "FAQ", href: "/health/faq" },
      { label: "Contact", href: "/contact" },
    ],
    government: [
      { label: "Home", href: "/government" },
      { label: "Capabilities", href: "/government/capabilities" },
      { label: "Past Performance", href: "/government/past-performance" },
      { label: "Compliance", href: "/government/compliance" },
      { label: "Partners", href: "/government/partners" },
      { label: "Contact", href: "/contact" },
    ],
    parent: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Health Division", href: "/health" },
      { label: "Government Division", href: "/government" },
      { label: "Contact", href: "/contact" },
    ],
  };

  const currentLinks = footerLinks[division];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo division={division} size="sm" showWordmark={false} />
              <span className="font-heading font-bold text-xl">
                {division === "health" ? "Primodial Health" : division === "government" ? "Velune" : "Velune Holdings LLC"}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              {division === "health" 
                ? "Compassionate home health care services for your loved ones. Trusted by families for quality elderly care."
                : division === "government"
                ? "Professional contracting services for federal, state, and local agencies. Prime and subcontractor capabilities."
                : "A trusted partner delivering excellence across healthcare services and government contracting solutions."}
            </p>
            
            {/* Contact Info */}
            {division === "health" && (
              <div className="space-y-2">
                <a href="tel:+18303993602" className="flex items-center gap-2 text-sm hover:text-health transition-colors">
                  <Phone className="h-4 w-4" />
                  (830) 399-3602
                </a>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {currentLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="mailto:contact@primodial.org" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@primodial.org
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>United States</span>
              </div>
            </div>

            {/* Division Switcher in Footer */}
            <div className="mt-6 pt-6 border-t">
              <h4 className="text-sm font-medium mb-3">Our Divisions</h4>
              <div className="flex flex-col gap-2">
                <Link 
                  href="/health" 
                  className={cn(
                    "text-sm flex items-center gap-2",
                    division === "health" ? "text-health font-medium" : "text-muted-foreground hover:text-health"
                  )}
                >
                  <div className="w-2 h-2 rounded-full bg-health" />
                  Primodial Health
                </Link>
                <Link 
                  href="/government" 
                  className={cn(
                    "text-sm flex items-center gap-2",
                    division === "government" ? "text-government font-medium" : "text-muted-foreground hover:text-government"
                  )}
                >
                  <div className="w-2 h-2 rounded-full bg-government" />
                  Velune
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Velune Holdings LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
