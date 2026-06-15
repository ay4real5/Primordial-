import { cn } from "@/lib/utils";

interface LogoProps {
  division?: "health" | "government" | "parent";
  size?: "sm" | "md" | "lg";
  className?: string;
  showWordmark?: boolean;
}

export function Logo({
  division = "parent",
  size = "md",
  className,
  showWordmark = true,
}: LogoProps) {
  const iconSize = size === "sm" ? 32 : size === "lg" ? 52 : 40;
  const textSize =
    size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-xl";
  const subtextSize =
    size === "sm" ? "text-[9px]" : size === "lg" ? "text-sm" : "text-[11px]";

  const divisionLabel =
    division === "health"
      ? "HEALTH"
      : division === "government"
      ? "GOVERNMENT"
      : null;

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* SVG Mark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`grad-health-${division}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id={`grad-gov-${division}`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id={`grad-parent-${division}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
          <clipPath id="shield-clip">
            <path d="M24 2 L44 10 L44 28 C44 38 34 44 24 46 C14 44 4 38 4 28 L4 10 Z" />
          </clipPath>
        </defs>

        {/* Shield background */}
        <path
          d="M24 2 L44 10 L44 28 C44 38 34 44 24 46 C14 44 4 38 4 28 L4 10 Z"
          fill={
            division === "health"
              ? `url(#grad-health-${division})`
              : division === "government"
              ? `url(#grad-gov-${division})`
              : `url(#grad-parent-${division})`
          }
        />

        {/* Diagonal split line — subtle lighter shade */}
        <line
          x1="4"
          y1="28"
          x2="44"
          y2="10"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
          clipPath="url(#shield-clip)"
        />

        {/* Letter P — white, bold, centred */}
        <text
          x="24"
          y="31"
          textAnchor="middle"
          fill="white"
          fontSize="22"
          fontWeight="800"
          fontFamily="DM Sans, system-ui, sans-serif"
          letterSpacing="-0.5"
        >
          P
        </text>

        {/* Small dot accent bottom-right of shield */}
        <circle
          cx="34"
          cy="38"
          r="2.5"
          fill="rgba(255,255,255,0.55)"
          clipPath="url(#shield-clip)"
        />
      </svg>

      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              "font-heading font-bold tracking-tight",
              textSize,
              division === "health" && "text-health-dark",
              division === "government" && "text-government-dark",
              division === "parent" && "text-primary-800"
            )}
          >
            Primodial
          </span>
          {divisionLabel && (
            <span
              className={cn(
                "font-sans font-semibold tracking-[0.12em] uppercase mt-0.5",
                subtextSize,
                division === "health" && "text-health",
                division === "government" && "text-government"
              )}
            >
              {divisionLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
