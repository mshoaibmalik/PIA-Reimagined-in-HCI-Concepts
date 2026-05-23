import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/prebook-meal")({
  head: () => ({
    meta: [
      { title: "Pre-book Meal | PIA Services" },
      { name: "description", content: "Pre-book meals for your upcoming PIA flight." },
    ],
  }),
  component: PrebookMeal,
});

function PrebookMeal() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold">Pre-book Meal</h1>
      <p className="mt-4 text-sm text-muted-foreground">Choose your in-flight meal ahead of time to guarantee availability.</p>
      <div className="mt-6">
        <Link to="/search" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Pre-book now</Link>
      </div>
    </section>
  );
}
