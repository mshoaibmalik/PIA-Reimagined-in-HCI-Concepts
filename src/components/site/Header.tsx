import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Contrast, Type, Languages, User, HelpCircle, Menu, X } from "lucide-react";
import logo from "@/assets/pia-logo.png";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/search", label: "Book & Fly" },
  { to: "/status", label: "Flight Status" },
  { to: "/checkin", label: "Web Check-In" },
  { to: "/awards", label: "Awards+" },
] as const;

export function Header() {
  const [scale, setScale] = useState<"base" | "lg" | "xl">("base");
  const [hc, setHc] = useState(false);
  const [lang, setLang] = useState<"EN" | "UR">("EN");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.textScale = scale;
  }, [scale]);
  useEffect(() => {
    document.documentElement.classList.toggle("hc", hc);
  }, [hc]);

  const cycleScale = () =>
    setScale((s) => (s === "base" ? "lg" : s === "lg" ? "xl" : "base"));

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Utility bar */}
      <div className="border-b border-border/60 bg-secondary/50">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs text-muted-foreground">
          <span className="hidden sm:inline">Welcome to Pakistan International Airlines</span>
          <div className="ml-auto flex items-center gap-1">
            <button
              onClick={cycleScale}
              aria-label={`Text size: ${scale}. Click to change.`}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 hover:bg-accent hover:text-accent-foreground"
            >
              <Type className="h-3.5 w-3.5" aria-hidden /> A{scale === "lg" ? "+" : scale === "xl" ? "++" : ""}
            </button>
            <button
              onClick={() => setHc((v) => !v)}
              aria-pressed={hc}
              aria-label="Toggle high-contrast mode"
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 hover:bg-accent hover:text-accent-foreground"
            >
              <Contrast className="h-3.5 w-3.5" aria-hidden /> Contrast
            </button>
            <button
              onClick={() => setLang((l) => (l === "EN" ? "UR" : "EN"))}
              aria-label={`Language: ${lang}. Click to switch.`}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 hover:bg-accent hover:text-accent-foreground"
            >
              <Languages className="h-3.5 w-3.5" aria-hidden /> {lang === "EN" ? "English" : "اردو"}
            </button>
            <span className="mx-1 h-4 w-px bg-border" />
            <Link to="/" className="inline-flex items-center gap-1 rounded-md px-2 py-1 hover:bg-accent hover:text-accent-foreground">
              <HelpCircle className="h-3.5 w-3.5" aria-hidden /> Help
            </Link>
            <Link to="/awards" className="inline-flex items-center gap-1 rounded-md px-2 py-1 hover:bg-accent hover:text-accent-foreground">
              <User className="h-3.5 w-3.5" aria-hidden /> Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center" aria-label="PIA home">
          <img src={logo} alt="Pakistan International Airlines logo" width={56} height={56} className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  activeProps={{ className: "text-primary bg-accent" }}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-primary transition-colors"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/search"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover active:scale-[0.98]"
          >
            Book Now
          </Link>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="md:hidden border-t border-border bg-background">
          <ul className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function Breadcrumbs({ steps, current }: { steps: string[]; current: number }) {
  return (
    <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-4 text-sm" aria-label="Progress">
      {steps.map((s, i) => {
        const active = i === current;
        const done = i < current;
        return (
          <li key={s} className="flex items-center gap-2">
            <span
              className={cn(
                "inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition",
                done && "bg-primary text-primary-foreground",
                active && "bg-primary text-primary-foreground ring-4 ring-primary/15",
                !done && !active && "bg-muted text-muted-foreground"
              )}
              aria-current={active ? "step" : undefined}
            >
              {i + 1}
            </span>
            <span className={cn("font-medium", active ? "text-foreground" : "text-muted-foreground")}>{s}</span>
            {i < steps.length - 1 && <span className="mx-1 text-muted-foreground">›</span>}
          </li>
        );
      })}
    </ol>
  );
}
