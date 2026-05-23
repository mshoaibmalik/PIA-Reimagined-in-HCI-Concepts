import { Link } from "@tanstack/react-router";

const services = [
  {
    title: "Gift Card",
    imgUrl: "https://www.piac.com.pk/images/services/gift_card_285x285.png",
    href: "/gift-card",
    desc:
      "Surprise your loved ones with the gift of travel through a PIA Gift Card. Let them choose their destination and create memories that last a lifetime.",
  },
  {
    title: "Pre-book Meal",
    imgUrl: "https://www.piac.com.pk/images/services/services1.png",
    href: "/prebook-meal",
    desc:
      "Indulge in anticipation with our Pre-booked Meals – a culinary journey designed to elevate your dining experience while onboard.",
  },
  {
    title: "Seat Selection",
    imgUrl: "https://www.piac.com.pk/images/services/servies2.png",
    href: "/seat-selection",
    desc:
      "Tailor your travel experience with our Seat Selection feature, where comfort meets choice for a personalized journey.",
  },
  {
    title: "Pre-book Baggage",
    imgUrl: "https://www.piac.com.pk/images/services/services3.png",
    href: "/prebook-baggage",
    desc:
      "Simplify your travel with ease and foresight by opting for our Pre-book Baggage service and reserve luggage space in advance.",
  },
  {
    title: "Special Assistance",
    imgUrl: "https://www.piac.com.pk/images/services/services4.png",
    href: "/special-assistance",
    desc:
      "Elevate your journey with our Special Assistance services, including personalized wheelchair support and accessible travel help.",
  },
];

export function Services() {
  return (
    <section className="mx-auto my-12 max-w-7xl px-4">
      <h2 className="mb-6 text-2xl font-bold text-primary">OUR SERVICES</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {services.map((s) => (
          <article key={s.title} className="overflow-hidden rounded-xl border border-border bg-card p-4 shadow-card">
            <div className="overflow-hidden rounded-lg">
              <Link to={s.href}>
                <img src={s.imgUrl} alt={s.title} className="h-36 sm:h-40 w-full object-cover hover:opacity-90 transition" />
              </Link>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-primary">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
