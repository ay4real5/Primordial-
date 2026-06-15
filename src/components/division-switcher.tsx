"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Heart, Building2, ChevronDown } from "lucide-react";

type Division = "parent" | "health" | "government";

interface DivisionInfo {
  id: Division;
  name: string;
  shortName: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  path: string;
  cta: string;
}

const divisions: DivisionInfo[] = [
  {
    id: "parent",
    name: "Primodial",
    shortName: "Parent",
    icon: Building2,
    color: "primary",
    path: "/",
    cta: "Contact Us",
  },
  {
    id: "health",
    name: "Primodial Health",
    shortName: "Health",
    icon: Heart,
    color: "health",
    path: "/health",
    cta: "Get Consultation",
  },
  {
    id: "government",
    name: "Primodial Government",
    shortName: "Government",
    icon: Building2,
    color: "government",
    path: "/government",
    cta: "Partner With Us",
  },
];

export function DivisionSwitcher() {
  const pathname = usePathname();
  
  const currentDivision = React.useMemo(() => {
    if (pathname.startsWith("/health")) return divisions.find((d) => d.id === "health");
    if (pathname.startsWith("/government")) return divisions.find((d) => d.id === "government");
    return divisions.find((d) => d.id === "parent");
  }, [pathname]);

  const otherDivisions = React.useMemo(() => {
    return divisions.filter((d) => d.id !== currentDivision?.id);
  }, [currentDivision]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 h-auto text-sm font-medium transition-colors",
            currentDivision?.color === "health" && "text-health hover:text-health-dark hover:bg-health-light",
            currentDivision?.color === "government" && "text-government hover:text-government-dark hover:bg-government-light",
            currentDivision?.color === "primary" && "text-primary hover:text-primary/80 hover:bg-primary/10"
          )}
        >
          <span className="hidden sm:inline">Switch Division</span>
          <span className="sm:hidden">Division</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {otherDivisions.map((division) => (
          <DropdownMenuItem key={division.id} asChild>
            <Link
              href={division.path}
              className="flex items-center gap-3 px-3 py-2 cursor-pointer"
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-md flex items-center justify-center",
                  division.color === "health" && "bg-health-light text-health",
                  division.color === "government" && "bg-government-light text-government",
                  division.color === "primary" && "bg-primary/10 text-primary"
                )}
              >
                <division.icon className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{division.name}</span>
                <span className="text-xs text-muted-foreground">{division.cta}</span>
              </div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Simple dropdown menu components since we don't have @radix-ui/react-dropdown-menu installed
function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div className="relative">{children}</div>
    </DropdownMenuContext.Provider>
  );
}

const DropdownMenuContext = React.createContext<{ open: boolean; setOpen: (open: boolean) => void }>({
  open: false,
  setOpen: () => {},
});

function DropdownMenuTrigger({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  const { open, setOpen } = React.useContext(DropdownMenuContext);
  const child = asChild ? React.Children.only(children) as React.ReactElement : null;
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!open);
  };

  if (asChild && child) {
    return React.cloneElement(child, {
      onClick: handleClick,
    });
  }

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
}

function DropdownMenuContent({ children, align, className }: { children: React.ReactNode; align?: "start" | "end"; className?: string }) {
  const { open } = React.useContext(DropdownMenuContext);
  const ref = React.useRef<HTMLDivElement>(null);
  const { setOpen } = React.useContext(DropdownMenuContext);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        align === "end" && "right-0",
        className
      )}
    >
      {children}
    </div>
  );
}

function DropdownMenuItem({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  const { setOpen } = React.useContext(DropdownMenuContext);
  
  const handleClick = () => {
    setOpen(false);
  };

  if (asChild) {
    return (
      <div onClick={handleClick} className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
        {children}
      </div>
    );
  }

  return (
    <div onClick={handleClick} className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
      {children}
    </div>
  );
}
