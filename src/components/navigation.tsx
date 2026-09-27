"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/logo";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo size="sm" showWordmark={true} className="hidden sm:flex" />
            <Logo size="sm" showWordmark={true} className="sm:hidden" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  item.href === "/"
                    ? pathname === "/"
                      ? "bg-health-light text-health"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    : pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "bg-health-light text-health"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+15715757174"
              className={cn(
                "hidden sm:flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                "bg-health text-white hover:bg-health-dark"
              )}
            >
              <Phone className="h-4 w-4" />
              (571) 575-7174
            </a>
            <Link href="/contact" className="hidden md:flex">
              <Button variant="health" size="sm">
                Get Consultation
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  item.href === "/"
                    ? pathname === "/"
                      ? "bg-health-light text-health"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    : pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "bg-health-light text-health"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTAs */}
            <a
              href="tel:+15715757174"
              className="flex items-center justify-center gap-2 px-4 py-2 mt-2 rounded-md text-sm font-medium bg-health text-white"
            >
              <Phone className="h-4 w-4" />
              Call (571) 575-7174
            </a>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="health" className="w-full mt-2">
                Get Consultation
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
