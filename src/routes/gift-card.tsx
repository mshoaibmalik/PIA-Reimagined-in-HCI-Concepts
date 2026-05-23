import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/gift-card")({
  head: () => ({
    meta: [
      { title: "Gift Card | PIA Services" },
      { name: "description", content: "Give the gift of travel with a PIA Gift Card." },
    ],
  }),
  component: GiftCard,
});

function GiftCard() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold">PIA Gift Card</h1>
      <p className="mt-4 text-sm text-muted-foreground">Share the joy of travel — buy a PIA Gift Card for friends and family.</p>
      <div className="mt-6">
        <Link to="/search" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Buy Gift Card</Link>
      </div>
    </section>
  );
}
