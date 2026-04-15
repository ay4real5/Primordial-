import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Phone, Menu, X } from "lucide-react";
import logoImage from "@assets/image_1767476299687.png";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
            <img 
              src={logoImage} 
              alt="Primordial Health Services LLC" 
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+18303993602"
              className="hidden lg:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-phone-header"
            >
              <Phone className="w-4 h-4" />
              <span>(830) 399-3602</span>
            </a>
            <ThemeToggle />
            <Link href="/contact">
              <Button className="hidden sm:flex" data-testid="button-get-care-header">
                Get Care Now
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border mt-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded-md font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  data-testid={`link-nav-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+18303993602"
                className="flex items-center gap-2 py-2 px-3 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-phone-mobile"
              >
                <Phone className="w-4 h-4" />
                <span>(830) 399-3602</span>
              </a>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-2" data-testid="button-get-care-mobile">
                  Get Care Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
