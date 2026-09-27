"use client";

import * as React from "react";
import { Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const [visible, setVisible] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    if (dismissed) return;
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      )}
    >
      <a href="tel:+15715757174">
        <button
          className={cn(
            "flex items-center gap-2 px-5 py-3 rounded-full text-white font-semibold shadow-lg text-sm",
            "bg-health hover:bg-health-dark shadow-health/40"
          )}
        >
          <Phone className="w-4 h-4" />
          (571) 575-7174
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
