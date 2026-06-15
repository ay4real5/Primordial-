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

  const uid = division + size;

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* SVG Mark — Abstract interlocking dual-segment */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Teal → Blue gradient */}
          <linearGradient id={`g-teal-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          {/* Violet → Blue gradient */}
          <linearGradient id={`g-violet-${uid}`} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          {/* Parent tri-gradient */}
          <linearGradient id={`g-full-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>

          <filter id={`drop-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="rgba(0,0,0,0.12)" />
          </filter>
        </defs>

        {/* Outer rounded-square frame with subtle shadow */}
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="12"
          fill="white"
          filter={`url(#drop-${uid})`}
        />

        {/*
          Abstract interlocking mark — two curved segments that form a unified "pill" shape.
          The overall silhouette reads as a single entity, but the split reveals two divisions.
          Inspired by Mastercard's Venn principle + Audi's interlocking rings.
        */}

        {/* LEFT SEGMENT (teal) — curved vertical band with rounded top/bottom */}
        <path
          d="M14 10
             C14 10, 10 10, 10 14
             L10 34
             C10 38, 14 38, 14 38
             C18 38, 22 38, 22 34
             L22 28
             C22 24, 18 24, 18 24
             C14 24, 14 20, 14 20
             L14 10Z"
          fill={`url(#g-teal-${uid})`}
        />

        {/* RIGHT SEGMENT (violet) — curved horizontal bowl that interlocks with the stem */}
        <path
          d="M34 10
             C34 10, 38 10, 38 14
             L38 20
             C38 24, 34 24, 34 24
             C30 24, 26 24, 26 20
             L26 14
             C26 10, 30 10, 30 10
             L34 10Z"
          fill={`url(#g-violet-${uid})`}
        />

        {/* RIGHT SEGMENT lower arc — completes the bowl */}
        <path
          d="M34 24
             C38 24, 38 28, 38 28
             L38 34
             C38 38, 34 38, 34 38
             L30 38
             C26 38, 26 34, 26 34
             L26 28
             C26 24, 30 24, 30 24
             L34 24Z"
          fill={`url(#g-violet-${uid})`}
        />

        {/* Interlock bridge — small connector piece where the two halves meet */}
        <rect
          x="18"
          y="22"
          width="8"
          height="4"
          rx="2"
          fill={division === "parent"
            ? `url(#g-full-${uid})`
            : division === "health"
            ? `url(#g-teal-${uid})`
            : `url(#g-violet-${uid})`
          }
        />

        {/* Inner negative-space dot — white, creates a focal point */}
        <circle cx="22" cy="28" r="3" fill="white" opacity="0.9" />

        {/* Thin white highlight line along the top curve */}
        <path
          d="M14 12 C14 12, 10 12, 10 14"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
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
