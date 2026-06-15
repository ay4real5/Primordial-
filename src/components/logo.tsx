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

  const uid = division + size; // unique gradient IDs per instance

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* SVG Mark — Custom geometric P lettermark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Left stem gradient (teal side) */}
          <linearGradient id={`stem-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          {/* Right bowl gradient (violet side) */}
          <linearGradient id={`bowl-${uid}`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          {/* Parent uses a flowing tri-gradient on the whole shape */}
          <linearGradient id={`full-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>

          <clipPath id={`mark-clip-${uid}`}>
            <path d="M12 6 h16 a14 14 0 0 1 0 28 h-6 v12 h-10 v-12 h-16 a6 6 0 0 1 -6 -6 v-16 a6 6 0 0 1 6 -6 Z" />
          </clipPath>

          <filter id={`glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="rgba(0,0,0,0.15)" />
          </filter>
        </defs>

        {/* Outer rounded-square container with soft shadow */}
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="12"
          fill="white"
          filter={`url(#glow-${uid})`}
        />

        {/* Main mark container clip */}
        <g clipPath={`url(#mark-clip-${uid})`}>
          {/* Full fill for parent, or split for divisions */}
          {division === "parent" ? (
            <rect x="0" y="0" width="48" height="48" fill={`url(#full-${uid})`} />
          ) : (
            <>
              {/* Left teal side */}
              <rect x="0" y="0" width="24" height="48" fill={`url(#stem-${uid})`} />
              {/* Right violet side */}
              <rect x="24" y="0" width="24" height="48" fill={`url(#bowl-${uid})`} />
            </>
          )}
        </g>

        {/* Thin white divider line between halves */}
        <line
          x1="24"
          y1="6"
          x2="24"
          y2="34"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.2"
        />

        {/* Inner "P" negative space — white */}
        <g fill="white">
          {/* Vertical stem of the P */}
          <rect x="14" y="12" width="5" height="24" rx="2.5" />
          {/* Circular bowl of the P */}
          <path
            d="M19 12 h6 a7 7 0 0 1 0 14 h-6 Z"
          />
          {/* Rounding the inside corner of the bowl */}
          <circle cx="19" cy="19" r="2.5" fill={`url(#${division === "parent" ? `full-${uid}` : division === "health" ? `stem-${uid}` : `bowl-${uid}`})`} />
        </g>

        {/* Bottom-right micro detail — small arc accent */}
        <path
          d="M34 38 a4 4 0 0 1 4 4"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
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
