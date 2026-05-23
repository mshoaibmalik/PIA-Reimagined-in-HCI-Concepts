import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/special-assistance")({
  head: () => ({
    meta: [
      { title: "Special Assistance | PIA Services" },
      { name: "description", content: "Request special assistance services with PIA for a comfortable journey." },
    ],
  }),
  component: SpecialAssistance,
});

function SpecialAssistance() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold">Special Assistance</h1>
      <p className="mt-4 text-sm text-muted-foreground">We provide wheelchair and accessibility support — request assistance for your trip.</p>
      <div className="mt-6">
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Request assistance</Link>
      </div>
    </section>
  );
}
