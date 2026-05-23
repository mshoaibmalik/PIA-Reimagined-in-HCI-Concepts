import { Link } from "@tanstack/react-router";
import logo from "@/assets/pia-logo.png";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Pakistan International Airlines logo" width={40} height={40} className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Great people to fly with. Connecting Pakistan to the world since 1955.
          </p>
        </div>
        {[
          { h: "Book & Fly", items: ["Search Flights", "Special Offers", "Destinations", "Group Booking"] },
          { h: "Manage", items: ["Web Check-In", "Manage Booking", "Flight Status", "Baggage"] },
          { h: "Company", items: ["About PIA", "Careers", "Press Room", "Contact"] },
        ].map((c) => (
          <div key={c.h}>
            <h3 className="text-sm font-semibold text-foreground">{c.h}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {c.items.map((i) => (
                <li key={i}>
                  <Link to="/" className="hover:text-primary">{i}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Pakistan International Airlines. Academic HCI redesign concept.</span>
          <span>WCAG 2.1 AA · Keyboard-friendly · Screen-reader optimized</span>
        </div>
      </div>
    </footer>
  );
}
