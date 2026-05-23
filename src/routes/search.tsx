import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Breadcrumbs } from "@/components/site/Header";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Plane, Wifi, Coffee, Luggage, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search Flights | PIA" },
      { name: "description", content: "Compare PIA fares, choose your flight, and continue to passenger details." },
      { property: "og:title", content: "Search Flights — PIA" },
      { property: "og:description", content: "Pick your perfect PIA flight from real-time results." },
    ],
  }),
  component: SearchPage,
});

const flights = [
  { no: "PK-213", dep: "08:15", arr: "10:35", from: "KHI", to: "DXB", dur: "3h 20m", stops: "Non-stop", price: 54200, cls: "Economy" },
  { no: "PK-217", dep: "13:40", arr: "16:00", from: "KHI", to: "DXB", dur: "3h 20m", stops: "Non-stop", price: 58900, cls: "Economy" },
  { no: "PK-227", dep: "21:10", arr: "23:35", from: "KHI", to: "DXB", dur: "3h 25m", stops: "Non-stop", price: 49800, cls: "Economy" },
  { no: "PK-241", dep: "06:00", arr: "09:10", from: "KHI", to: "DXB", dur: "4h 10m", stops: "1 stop · LHE", price: 42100, cls: "Economy" },
];

function SearchPage() {
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Breadcrumbs steps={["Search", "Select Flight", "Passenger Details", "Payment"]} current={1} />

      <section className="mx-auto max-w-7xl px-4">
        <BookingWidget embedded />
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-6 px-4 lg:grid-cols-[260px_1fr]">
        {/* Filters */}
        <aside className="rounded-xl border border-border bg-card p-5 shadow-card h-fit" aria-label="Filters">
          <h2 className="text-sm font-semibold">Filter results</h2>
          {[
            { h: "Stops", opts: ["Non-stop", "1 stop", "2+ stops"] },
            { h: "Departure time", opts: ["Early morning", "Morning", "Afternoon", "Evening"] },
            { h: "Cabin class", opts: ["Economy", "Premium Economy", "Business"] },
          ].map((g) => (
            <fieldset key={g.h} className="mt-5 border-t border-border pt-4">
              <legend className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{g.h}</legend>
              <div className="mt-2 space-y-2">
                {g.opts.map((o) => (
                  <label key={o} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="h-4 w-4 accent-[var(--primary)]" /> {o}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
        </aside>

        {/* Results */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">Karachi → Dubai · {flights.length} flights</h1>
            <select className="h-9 rounded-md border border-input bg-background px-3 text-sm">
              <option>Sort: Recommended</option>
              <option>Price (low to high)</option>
              <option>Duration</option>
              <option>Departure time</option>
            </select>
          </div>

          {loading ? (
            <div className="space-y-3" aria-busy="true" aria-label="Loading flight results">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-28 animate-pulse rounded-xl border border-border bg-muted" />
              ))}
            </div>
          ) : (
            <ul className="space-y-3">
              {flights.map((f) => (
                <li key={f.no} className="rounded-xl border border-border bg-card shadow-card">
                  <div className="grid items-center gap-4 p-5 md:grid-cols-[1fr_auto]">
                    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Plane className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">PIA</div>
                          <div className="text-sm font-semibold">{f.no}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-center">
                          <div className="text-xl font-bold tabular-nums">{f.dep}</div>
                          <div className="text-xs text-muted-foreground">{f.from}</div>
                        </div>
                        <div className="flex-1 text-center">
                          <div className="text-[11px] text-muted-foreground">{f.dur}</div>
                          <div className="relative my-1 h-px bg-border">
                            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary" />
                          </div>
                          <div className="text-[11px] text-muted-foreground">{f.stops}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold tabular-nums">{f.arr}</div>
                          <div className="text-xs text-muted-foreground">{f.to}</div>
                        </div>
                      </div>
                      <div className="hidden gap-3 text-muted-foreground md:flex">
                        <Wifi className="h-4 w-4" aria-label="Wi-Fi" />
                        <Coffee className="h-4 w-4" aria-label="Meal" />
                        <Luggage className="h-4 w-4" aria-label="Baggage" />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 justify-self-end">
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">{f.cls} from</div>
                        <div className="text-lg font-bold text-primary">PKR {f.price.toLocaleString()}</div>
                      </div>
                      <button
                        onClick={() => setExpanded(expanded === f.no ? null : f.no)}
                        className="inline-flex h-10 items-center gap-1 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary-hover active:scale-[0.98]"
                      >
                        Select <ChevronDown className={`h-4 w-4 transition ${expanded === f.no ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                  </div>
                  {expanded === f.no && (
                    <div className="border-t border-border bg-secondary/40 p-5">
                      <div className="grid gap-3 md:grid-cols-3">
                        {[
                          { n: "Saver", p: f.price, b: "Carry-on only · No changes" },
                          { n: "Flex", p: f.price + 6500, b: "23kg bag · Free changes" },
                          { n: "Business", p: f.price + 38000, b: "Lounge · Priority · 2×32kg" },
                        ].map((fare) => (
                          <Link key={fare.n} to="/" className="rounded-lg border border-border bg-card p-4 hover:border-primary/40">
                            <div className="text-sm font-semibold">{fare.n}</div>
                            <div className="mt-1 text-lg font-bold text-primary">PKR {fare.p.toLocaleString()}</div>
                            <div className="mt-2 text-xs text-muted-foreground">{fare.b}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
