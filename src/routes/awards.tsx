import { createFileRoute } from "@tanstack/react-router";
import { Award, TrendingUp, Plane, Gift, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards+ Plus Dashboard | PIA Loyalty" },
      { name: "description", content: "Manage your PIA Awards+ Plus account. Track miles, tier progress, and redeem rewards." },
      { property: "og:title", content: "PIA Awards+ Plus" },
      { property: "og:description", content: "Earn miles, climb tiers, redeem flights." },
    ],
  }),
  component: AwardsPage,
});

const activity = [
  { d: "Feb 14", desc: "PK-213 KHI → DXB", miles: "+1,240" },
  { d: "Jan 22", desc: "Hotel partner — Hyatt", miles: "+820" },
  { d: "Jan 03", desc: "PK-786 LHE → LHR", miles: "+5,460" },
  { d: "Dec 18", desc: "Redeemed — Lounge access", miles: "−2,000" },
];

function AwardsPage() {
  const earned = 24580;
  const next = 50000;
  const pct = Math.round((earned / next) * 100);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Awards+ Plus</p>
          <h1 className="mt-1 text-3xl font-bold">Welcome back, Ayesha.</h1>
          <p className="mt-1 text-sm text-muted-foreground">Member ID: PIA-009-241 · Silver tier</p>
        </div>
        <button className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">
          <Plane className="h-4 w-4" /> Book with miles
        </button>
      </header>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {/* Tier card */}
        <article className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary to-[oklch(0.28_0.11_160)] p-6 text-primary-foreground shadow-elevated lg:col-span-2">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold">
              <Award className="h-3.5 w-3.5" /> Silver Tier
            </div>
            <span className="text-xs opacity-80">Valid through Dec 2026</span>
          </div>
          <div className="mt-6 flex items-end justify-between">
            <div>
              <div className="text-xs opacity-80">Mileage balance</div>
              <div className="text-5xl font-bold tabular-nums">{earned.toLocaleString()}</div>
            </div>
            <div className="text-right text-xs opacity-80">
              <div>Next tier: <strong>Gold</strong></div>
              <div>{(next - earned).toLocaleString()} miles to go</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="h-2 w-full overflow-hidden rounded-full bg-primary-foreground/20" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Progress to Gold tier">
              <div className="h-full bg-[var(--gold)]" style={{ width: `${pct}%` }} />
            </div>
            <div className="mt-1 text-xs opacity-80">{pct}% to Gold</div>
          </div>
        </article>

        <article className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <TrendingUp className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-sm font-semibold">This year</h2>
          <div className="mt-2 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-secondary p-3">
              <div className="text-xs text-muted-foreground">Flights</div>
              <div className="text-xl font-bold tabular-nums">12</div>
            </div>
            <div className="rounded-lg bg-secondary p-3">
              <div className="text-xs text-muted-foreground">Segments</div>
              <div className="text-xl font-bold tabular-nums">18</div>
            </div>
            <div className="rounded-lg bg-secondary p-3">
              <div className="text-xs text-muted-foreground">Miles</div>
              <div className="text-xl font-bold tabular-nums">22.4k</div>
            </div>
            <div className="rounded-lg bg-secondary p-3">
              <div className="text-xs text-muted-foreground">Countries</div>
              <div className="text-xl font-bold tabular-nums">6</div>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <article className="rounded-2xl border border-border bg-card shadow-card">
          <header className="flex items-center justify-between border-b border-border p-5">
            <h2 className="text-sm font-semibold">Recent activity</h2>
            <a href="#" className="text-xs font-medium text-primary hover:underline">View all</a>
          </header>
          <ul className="divide-y divide-border text-sm">
            {activity.map((a) => (
              <li key={a.d + a.desc} className="flex items-center justify-between px-5 py-4">
                <div>
                  <div className="font-medium">{a.desc}</div>
                  <div className="text-xs text-muted-foreground">{a.d}</div>
                </div>
                <div className={`text-sm font-semibold tabular-nums ${a.miles.startsWith("−") ? "text-destructive" : "text-success"}`}>{a.miles}</div>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--gold)]/15 text-[var(--gold)]">
            <Gift className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-sm font-semibold">Redeem rewards</h2>
          <ul className="mt-3 space-y-3">
            {[
              { t: "Upgrade to Business · KHI → DXB", m: "18,000 miles" },
              { t: "Lounge access voucher", m: "4,000 miles" },
              { t: "Award flight · KHI → ISB", m: "9,500 miles" },
            ].map((r) => (
              <li key={r.t} className="flex items-center justify-between rounded-lg border border-border p-3 text-sm hover:border-primary/40">
                <div>
                  <div className="font-medium">{r.t}</div>
                  <div className="text-xs text-muted-foreground">{r.m}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
