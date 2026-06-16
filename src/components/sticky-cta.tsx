"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);

  const isHealth = pathname.startsWith("/health");
  const isGovernment = pathname.startsWith("/government");

  React.useEffect(() => {
    if (dismissed) return;
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (dismissed || (!isHealth && !isGovernment)) return null;

  const phone = isHealth ? "tel:+18303993602" : "tel:+15715757174";
  const label = isHealth ? "(830) 399-3602" : "(571) 575-7174";
  const color = isHealth
    ? "bg-health hover:bg-health-dark shadow-health/40"
    : "bg-government hover:bg-government-dark shadow-government/40";

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      )}
    >
      <a href={phone}>
        <button
          className={cn(
            "flex items-center gap-2 px-5 py-3 rounded-full text-white font-semibold shadow-lg text-sm",
            color
          )}
        >
          <Phone className="w-4 h-4" />
          {label}
        </button>
      </a>
      <button
        onClick={() => setDismissed(true)}
        className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center hover:bg-muted/80 transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
