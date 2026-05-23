import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs } from "@/components/site/Header";
import { CheckCircle2, XCircle, BadgeCheck, Luggage, MapPin } from "lucide-react";

export const Route = createFileRoute("/checkin")({
  head: () => ({
    meta: [
      { title: "Web Check-In | PIA" },
      { name: "description", content: "Check in online for your PIA flight from 48 hours up to 1 hour before departure." },
      { property: "og:title", content: "PIA Web Check-In" },
      { property: "og:description", content: "Fast, paperless boarding pass in minutes." },
    ],
  }),
  component: CheckinPage,
});

function CheckinPage() {
  const [pnr, setPnr] = useState("");
  const [last, setLast] = useState("");
  const pnrOk = /^[A-Z0-9]{6}$/.test(pnr.toUpperCase());
  const nameOk = last.trim().length >= 2;

  return (
    <>
      <Breadcrumbs steps={["Find Booking", "Passengers", "Seats", "Boarding Pass"]} current={0} />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <h1 className="text-2xl font-bold">Web Check-In</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Open from <strong>48 hours</strong> before takeoff, closes <strong>1 hour</strong> before departure.
          </p>

          <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <Field
              label="Booking reference (PNR)"
              hint="6 letters & numbers, e.g. K7H2QP"
              value={pnr}
              onChange={(v) => setPnr(v.toUpperCase())}
              valid={pnr.length > 0 ? pnrOk : null}
              error={pnr.length > 0 && !pnrOk ? "PNR must be exactly 6 alphanumeric characters." : undefined}
            />
            <Field
              label="Passenger last name"
              hint="As shown on your passport"
              value={last}
              onChange={setLast}
              valid={last.length > 0 ? nameOk : null}
              error={last.length > 0 && !nameOk ? "Please enter at least 2 characters." : undefined}
            />

            <fieldset className="rounded-lg border border-border p-4">
              <legend className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Travel document</legend>
              <div className="grid gap-3 md:grid-cols-2">
                <label className="text-sm">
                  <span className="mb-1 block text-muted-foreground">Passport number</span>
                  <input className="h-11 w-full rounded-md border border-input bg-background px-3" placeholder="AB1234567" />
                </label>
                <label className="text-sm">
                  <span className="mb-1 block text-muted-foreground">Expiry date</span>
                  <input type="date" className="h-11 w-full rounded-md border border-input bg-background px-3" />
                </label>
              </div>
            </fieldset>

            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-[var(--primary)]" />
              <span className="text-muted-foreground">
                I confirm I am not carrying any prohibited items and accept the conditions of carriage.
              </span>
            </label>

            <button
              disabled={!(pnrOk && nameOk)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <BadgeCheck className="h-4 w-4" /> Continue to Seat Selection
            </button>
          </form>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="text-sm font-semibold">Your trip</h2>
            <div className="mt-3 rounded-lg bg-gradient-to-br from-primary to-[oklch(0.28_0.11_160)] p-5 text-primary-foreground">
              <div className="text-xs opacity-80">PIA · Boarding pass preview</div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold tabular-nums">KHI</div>
                  <div className="text-xs opacity-80">Karachi</div>
                </div>
                <div className="text-center text-xs opacity-80">
                  <div>3h 20m</div>
                  <div className="my-1 h-px w-20 bg-primary-foreground/40" />
                  <div>Non-stop</div>
                </div>
                <div>
                  <div className="text-3xl font-bold tabular-nums">DXB</div>
                  <div className="text-xs opacity-80">Dubai</div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                <div><div className="opacity-70">Flight</div><div className="font-semibold">PK-213</div></div>
                <div><div className="opacity-70">Date</div><div className="font-semibold">12 Mar</div></div>
                <div><div className="opacity-70">Class</div><div className="font-semibold">Economy</div></div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="text-sm font-semibold">Before you fly</h2>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary" /> Arrive at airport 2 hours before departure.</li>
              <li className="flex gap-2"><Luggage className="h-4 w-4 text-primary" /> Economy: 1×30kg checked, 7kg cabin.</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Passport valid for 6+ months.</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label, hint, value, onChange, valid, error,
}: { label: string; hint?: string; value: string; onChange: (v: string) => void; valid: boolean | null; error?: string }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">{label}</label>
      {hint && <div className="text-xs text-muted-foreground">{hint}</div>}
      <div className="relative mt-1">
        <input
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={valid === false}
          aria-describedby={error ? `${id}-err` : undefined}
          className={`h-11 w-full rounded-md border bg-background px-3 pr-10 text-sm transition ${
            valid === true ? "border-success" : valid === false ? "border-destructive" : "border-input"
          }`}
        />
        {valid === true && <CheckCircle2 className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-success" />}
        {valid === false && <XCircle className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-destructive" />}
      </div>
      {error && <p id={`${id}-err`} className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
