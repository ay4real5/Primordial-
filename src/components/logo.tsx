import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showWordmark?: boolean;
}

export function Logo({
  size = "md",
  className,
  showWordmark = true,
}: LogoProps) {
  const iconHeight = size === "sm" ? 48 : size === "lg" ? 72 : 60;
  const iconWidth = iconHeight * (294 / 504);
  const textSize =
    size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-xl";
  const subtextSize =
    size === "sm" ? "text-[9px]" : size === "lg" ? "text-sm" : "text-[11px]";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/site-logo.png"
        alt={showWordmark ? "" : "Primodial Health logo"}
        width={294}
        height={504}
        style={{ width: iconWidth, height: iconHeight }}
        className="shrink-0 rounded-sm object-contain"
      />

      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              "font-heading font-bold tracking-tight text-health-dark",
              textSize
            )}
          >
            Primodial
          </span>
          <span
            className={cn(
              "font-sans font-semibold tracking-[0.12em] uppercase mt-0.5 text-health",
              subtextSize
            )}
          >
            Health
          </span>
        </div>
      )}
    </div>
  );
}
