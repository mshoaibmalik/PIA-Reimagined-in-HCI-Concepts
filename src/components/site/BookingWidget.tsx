import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Plane, Calendar, Users, ArrowLeftRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const cities = ["KHI Karachi", "LHE Lahore", "ISB Islamabad", "DXB Dubai", "LHR London", "JFK New York", "JED Jeddah", "PEW Peshawar"];

export function BookingWidget({ embedded = false }: { embedded?: boolean }) {
  const navigate = useNavigate();
  const today = new Date().toISOString().slice(0, 10);
  const [trip, setTrip] = useState<"round" | "one" | "multi">("round");
  const [from, setFrom] = useState("KHI Karachi");
  const [to, setTo] = useState("DXB Dubai");
  const [depart, setDepart] = useState(today);
  const [ret, setRet] = useState("");
  const [pax, setPax] = useState(1);
  const [cls, setCls] = useState("Economy");

  const swap = () => { setFrom(to); setTo(from); };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/search", search: { from, to, depart, ret, pax, cls } as never });
  };

  return (
    <form
      onSubmit={submit}
      className={cn(
        "w-full rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-elevated",
        embedded && "shadow-card"
      )}
      aria-label="Flight search"
    >
      <div role="tablist" aria-label="Trip type" className="mb-4 inline-flex rounded-lg bg-muted p-1">
        {([
          { id: "round", l: "Round Trip" },
          { id: "one", l: "One Way" },
          { id: "multi", l: "Multi-City" },
        ] as const).map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={trip === t.id}
            onClick={() => setTrip(t.id)}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium transition",
              trip === t.id ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {t.l}
          </button>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-12">
        <Field label="From" icon={<Plane className="h-4 w-4 -rotate-45" />} className="md:col-span-3">
          <select value={from} onChange={(e) => setFrom(e.target.value)} className="input">
            {cities.map((c) => <option key={c}>{c}</option>)}
          </select>
        </Field>

        <div className="hidden md:flex md:col-span-1 items-end justify-center pb-2">
          <button type="button" onClick={swap} aria-label="Swap origin and destination"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background hover:bg-accent">
            <ArrowLeftRight className="h-4 w-4" />
          </button>
        </div>

        <Field label="To" icon={<Plane className="h-4 w-4 rotate-45" />} className="md:col-span-3">
          <select value={to} onChange={(e) => setTo(e.target.value)} className="input">
            {cities.map((c) => <option key={c}>{c}</option>)}
          </select>
        </Field>

        <Field label="Depart" icon={<Calendar className="h-4 w-4" />} className="md:col-span-2">
          <input type="date" min={today} value={depart} onChange={(e) => setDepart(e.target.value)} className="input" />
        </Field>

        <Field label="Return" icon={<Calendar className="h-4 w-4" />} className="md:col-span-2">
          <input type="date" min={depart || today} value={ret} disabled={trip === "one"}
            onChange={(e) => setRet(e.target.value)} className="input disabled:opacity-50" />
        </Field>

        <Field label="Travelers" icon={<Users className="h-4 w-4" />} className="md:col-span-1">
          <input type="number" min={1} max={9} value={pax} onChange={(e) => setPax(+e.target.value)} className="input" />
        </Field>
      </div>

      <div className="mt-4 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <label className="flex items-center gap-2">
            <span className="text-muted-foreground">Class</span>
            <select value={cls} onChange={(e) => setCls(e.target.value)} className="input h-9 w-auto">
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
            </select>
          </label>
          <label className="flex items-center gap-2 text-muted-foreground">
            <input type="checkbox" className="h-4 w-4 accent-[var(--primary)]" /> Use Awards+ miles
          </label>
        </div>
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover active:scale-[0.98]"
        >
          <Search className="h-4 w-4" /> Search Flights
        </button>
      </div>

      <style>{`.input{height:2.5rem;width:100%;border-radius:.5rem;border:1px solid var(--border);background:var(--background);padding:0 .75rem;font-size:.875rem;color:var(--foreground)}`}</style>
    </form>
  );
}

function Field({ label, icon, className, children }: { label: string; icon: React.ReactNode; className?: string; children: React.ReactNode }) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        {icon} {label}
      </span>
      {children}
    </label>
  );
}
