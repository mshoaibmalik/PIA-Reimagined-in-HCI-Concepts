import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/pia-hero.jpg";
import istanbulImg from "@/assets/istanbul.png";
import londonImg from "@/assets/london.png";
import dubaiImg from "@/assets/dubai.png";
import torontoImg from "@/assets/toronto.png";
import { Banners } from "@/components/site/Banners";
import { Services } from "@/components/site/Services";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Plane, Activity, BadgeCheck, Award, Clock, MapPin, ArrowRight, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PIA — Book Flights to 30+ Destinations | Pakistan International Airlines" },
      { name: "description", content: "Search and book flights with PIA. Web check-in, flight status, and Awards+ miles in one modern, accessible experience." },
      { property: "og:title", content: "PIA — Pakistan International Airlines" },
      { property: "og:description", content: "Modern booking, check-in and Awards+ for PIA travelers." },
    ],
  }),
  component: Home,
});

const recent = [
  { from: "KHI", to: "DXB", date: "Mar 12" },
  { from: "LHE", to: "LHR", date: "Apr 04" },
  { from: "ISB", to: "JED", date: "Apr 22" },
];

const offers = [
  { city: "Istanbul", price: "PKR 89,500", img: istanbulImg },
  { city: "London", price: "PKR 184,000", img: londonImg },
  { city: "Dubai", price: "PKR 54,200", img: dubaiImg },
  { city: "Toronto", price: "PKR 312,000", img: torontoImg },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[260px] w-full overflow-hidden md:h-[360px] lg:h-[480px]">
          <img src={hero} alt="PIA aircraft soaring above the Karakoram mountains" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover object-bottom" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-transparent" />
          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> Great people to fly with — since 1955
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Discover the world above the clouds.
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Search fares, manage bookings, and earn Awards+ miles on every PIA flight to 30+ destinations across 4 continents.
            </p>
          </div>
        </div>

        {/* Booking widget overlapping hero */}
        <div className="mx-auto -mt-10 max-w-7xl px-4 md:-mt-14 lg:-mt-18 relative z-20">
          <BookingWidget />
        </div>
        {/* spacer to reserve space below overlapping widget so banners do not get covered */}
        <div aria-hidden className="h-20 md:h-24 lg:h-28" />
      </section>

      {/* Rotating banners */}
      <Banners />

      {/* Our services section */}
      <Services />

      {/* Quick services */}
      <section className="mx-auto mt-8 max-w-7xl px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: "/search", icon: Plane, t: "Book & Fly", d: "Find the best fare on PIA flights" },
            { to: "/status", icon: Activity, t: "Flight Status", d: "Live arrivals and departures" },
            { to: "/checkin", icon: BadgeCheck, t: "Web Check-In", d: "Open from 48h to 1h before takeoff" },
            { to: "/awards", icon: Award, t: "Awards+ Plus", d: "Earn miles and unlock tier benefits" },
          ].map((s) => (
            <Link key={s.to} to={s.to} className="group rounded-xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elevated">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Open <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent searches (accelerator) */}
      <section className="mx-auto mt-16 max-w-7xl px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold">Quick rebook</h2>
            <p className="mt-1 text-sm text-muted-foreground">Your recent searches — one click to continue.</p>
          </div>
          <Link to="/search" className="text-sm font-medium text-primary hover:underline">View all</Link>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {recent.map((r) => (
            <Link key={r.from + r.to} to="/search" className="flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-card hover:border-primary/30">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <Plane className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.from} → {r.to}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{r.date}</div>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </section>

      {/* Offers */}
      <section className="mx-auto mt-16 max-w-7xl px-4">
        <h2 className="text-2xl font-bold">Featured destinations</h2>
        <p className="mt-1 text-sm text-muted-foreground">Curated fares for the season ahead.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((o) => (
            <article key={o.city} className="overflow-hidden rounded-xl border border-border bg-card shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated">
              <div
                className="h-36 sm:h-40 w-full"
                style={{ backgroundImage: `url(${o.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
                aria-hidden
              />
              <div className="p-4">
                <div className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> From Karachi</div>
                <h3 className="mt-1 text-lg font-semibold">{o.city}</h3>
                <div className="mt-2 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">from</div>
                    <div className="text-base font-bold text-primary">{o.price}</div>
                  </div>
                  <Link to="/search" className="rounded-md border border-input px-3 py-1.5 text-xs font-medium hover:bg-accent">Book</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
