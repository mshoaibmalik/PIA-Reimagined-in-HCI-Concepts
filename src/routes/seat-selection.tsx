import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/seat-selection")({
  head: () => ({
    meta: [
      { title: "Seat Selection | PIA Services" },
      { name: "description", content: "Select your preferred seat on PIA flights." },
    ],
  }),
  component: SeatSelection,
});

function SeatSelection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold">Seat Selection</h1>
      <p className="mt-4 text-sm text-muted-foreground">Reserve your preferred seat for comfort and convenience.</p>
      <div className="mt-6">
        <Link to="/search" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Choose seat</Link>
      </div>
    </section>
  );
}
