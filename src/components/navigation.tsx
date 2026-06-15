"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DivisionSwitcher } from "@/components/division-switcher";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/logo";

interface NavItem {
  label: string;
  href: string;
  division?: "health" | "government";
}

const parentNavItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Health", href: "/health", division: "health" },
  { label: "Government", href: "/government", division: "government" },
  { label: "Contact", href: "/contact" },
];

const healthNavItems: NavItem[] = [
  { label: "Home", href: "/health" },
  { label: "Services", href: "/health/services" },
  { label: "FAQ", href: "/health/faq" },
  { label: "Contact", href: "/contact" },
];

const govNavItems: NavItem[] = [
  { label: "Home", href: "/government" },
  { label: "Capabilities", href: "/government/capabilities" },
  { label: "Past Performance", href: "/government/past-performance" },
  { label: "Compliance", href: "/government/compliance" },
  { label: "Partners", href: "/government/partners" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const division = React.useMemo(() => {
    if (pathname.startsWith("/health")) return "health" as const;
    if (pathname.startsWith("/government")) return "government" as const;
    return "parent" as const;
  }, [pathname]);

  const navItems = React.useMemo(() => {
    switch (division) {
      case "health":
        return healthNavItems;
      case "government":
        return govNavItems;
      default:
        return parentNavItems;
    }
  }, [division]);

  const accentColor = division === "health" ? "health" : division === "government" ? "government" : "primary";

  const logoText = division === "health" 
    ? "Primodial Health" 
    : division === "government" 
    ? "Primodial Government" 
    : "Primodial";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={division === "parent" ? "/" : `/${division}`} className="flex items-center">
            <Logo division={division} size="sm" showWordmark={true} className="hidden sm:flex" />
            <Logo division={division} size="sm" showWordmark={false} className="sm:hidden" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? cn(
                        accentColor === "health" && "bg-health-light text-health",
                        accentColor === "government" && "bg-government-light text-government",
                        accentColor === "primary" && "bg-primary/10 text-primary"
                      )
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <DivisionSwitcher />
            
            {/* Health Phone CTA */}
            {division === "health" && (
              <a
                href="tel:+18303993602"
                className={cn(
                  "hidden sm:flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  "bg-health text-white hover:bg-health-dark"
                )}
              >
                <Phone className="h-4 w-4" />
                (830) 399-3602
              </a>
            )}

            {/* Government CTA */}
            {division === "government" && (
              <Link href="/government/partners">
                <Button variant="government" size="sm" className="hidden sm:flex">
                  Partner With Us
                </Button>
              </Link>
            )}

            {/* Parent CTA */}
            {division === "parent" && (
              <Link href="/contact">
                <Button size="sm" className="hidden sm:flex">
                  Contact Us
                </Button>
              </Link>
            )}

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
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? cn(
                        accentColor === "health" && "bg-health-light text-health",
                        accentColor === "government" && "bg-government-light text-government",
                        accentColor === "primary" && "bg-primary/10 text-primary"
                      )
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile CTAs */}
            {division === "health" && (
              <a
                href="tel:+18303993602"
                className="flex items-center justify-center gap-2 px-4 py-2 mt-2 rounded-md text-sm font-medium bg-health text-white"
              >
                <Phone className="h-4 w-4" />
                Call (830) 399-3602
              </a>
            )}
            {division === "government" && (
              <Link href="/government/partners" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="health" className="w-full mt-2">
                  Partner With Us
                </Button>
              </Link>
            )}
            {division === "parent" && (
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-2">Contact Us</Button>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
