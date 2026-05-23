import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plane, Search, CheckCircle2, AlertTriangle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/status")({
  head: () => ({
    meta: [
      { title: "Flight Status | Live Arrivals & Departures | PIA" },
      { name: "description", content: "Real-time PIA flight status. Track arrivals and departures by flight number or route." },
      { property: "og:title", content: "PIA Flight Status — Live Tracking" },
      { property: "og:description", content: "Track any PIA flight in real time." },
    ],
  }),
  component: StatusPage,
});

type Status = "On Time" | "Delayed" | "Boarding" | "Arrived";
const rows: { no: string; from: string; to: string; std: string; eta: string; gate: string; status: Status }[] = [
  { no: "PK-213", from: "KHI", to: "DXB", std: "08:15", eta: "08:15", gate: "B7", status: "On Time" },
  { no: "PK-786", from: "LHE", to: "LHR", std: "09:50", eta: "10:35", gate: "C2", status: "Delayed" },
  { no: "PK-301", from: "ISB", to: "JED", std: "11:20", eta: "11:20", gate: "A4", status: "Boarding" },
  { no: "PK-742", from: "KHI", to: "JFK", std: "13:00", eta: "13:00", gate: "B1", status: "On Time" },
  { no: "PK-217", from: "DXB", to: "KHI", std: "06:45", eta: "06:30", gate: "—", status: "Arrived" },
];

const styles: Record<Status, string> = {
  "On Time": "bg-success/15 text-success border-success/30",
  "Delayed": "bg-warning/15 text-warning border-warning/30",
  "Boarding": "bg-primary/15 text-primary border-primary/30",
  "Arrived": "bg-muted text-muted-foreground border-border",
};
const icons: Record<Status, React.ReactNode> = {
  "On Time": <CheckCircle2 className="h-3.5 w-3.5" />,
  "Delayed": <AlertTriangle className="h-3.5 w-3.5" />,
  "Boarding": <Plane className="h-3.5 w-3.5" />,
  "Arrived": <Clock className="h-3.5 w-3.5" />,
};

function StatusPage() {
  const [tab, setTab] = useState<"dep" | "arr">("dep");

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Flight Status</h1>
        <p className="mt-1 text-sm text-muted-foreground">Live arrivals and departures across the PIA network.</p>
      </header>

      <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
        <div role="tablist" className="mb-4 inline-flex rounded-lg bg-muted p-1">
          {[
            { id: "dep", l: "Departures" },
            { id: "arr", l: "Arrivals" },
          ].map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id as "dep" | "arr")}
              className={cn(
                "rounded-md px-4 py-1.5 text-sm font-medium transition",
                tab === t.id ? "bg-card text-primary shadow-sm" : "text-muted-foreground"
              )}
            >
              {t.l}
            </button>
          ))}
        </div>

        <form className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
          <input placeholder="Flight number (e.g. PK-213)" className="h-11 rounded-md border border-input bg-background px-3 text-sm" />
          <input placeholder="From (city or code)" className="h-11 rounded-md border border-input bg-background px-3 text-sm" />
          <input type="date" defaultValue={new Date().toISOString().slice(0, 10)} className="h-11 rounded-md border border-input bg-background px-3 text-sm" />
          <button type="button" className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">
            <Search className="h-4 w-4" /> Check Flight Status
          </button>
        </form>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Live {tab === "dep" ? "departures" : "arrivals"}</caption>
          <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th scope="col" className="px-4 py-3">Flight</th>
              <th scope="col" className="px-4 py-3">From</th>
              <th scope="col" className="px-4 py-3">To</th>
              <th scope="col" className="px-4 py-3">Scheduled</th>
              <th scope="col" className="px-4 py-3">Estimated</th>
              <th scope="col" className="px-4 py-3">Gate</th>
              <th scope="col" className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.no} className="border-t border-border hover:bg-secondary/40">
                <td className="px-4 py-4 font-semibold">{r.no}</td>
                <td className="px-4 py-4">{r.from}</td>
                <td className="px-4 py-4">{r.to}</td>
                <td className="px-4 py-4 tabular-nums">{r.std}</td>
                <td className="px-4 py-4 tabular-nums">{r.eta}</td>
                <td className="px-4 py-4">{r.gate}</td>
                <td className="px-4 py-4">
                  <span className={cn("inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium", styles[r.status])}>
                    {icons[r.status]} {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
