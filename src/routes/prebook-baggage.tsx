import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/prebook-baggage")({
  head: () => ({
    meta: [
      { title: "Pre-book Baggage | PIA Services" },
      { name: "description", content: "Reserve extra baggage allowance in advance with PIA." },
    ],
  }),
  component: PrebookBaggage,
});

function PrebookBaggage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold">Pre-book Baggage</h1>
      <p className="mt-4 text-sm text-muted-foreground">Reserve additional baggage allowance for a smoother check-in experience.</p>
      <div className="mt-6">
        <Link to="/search" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Reserve baggage</Link>
      </div>
    </section>
  );
}
