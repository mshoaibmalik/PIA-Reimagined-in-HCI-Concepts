import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — PIA" },
      { name: "description", content: "Sign in to your PIA account." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <section className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="mt-2 text-sm text-muted-foreground">Sign in to manage bookings, check-in, and access Awards+ features.</p>

      <form className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm">Email or Member ID</span>
          <input type="text" className="mt-1 block w-full rounded-md border border-border bg-card p-2 text-sm" />
        </label>
        <label className="block">
          <span className="text-sm">Password</span>
          <input type="password" className="mt-1 block w-full rounded-md border border-border bg-card p-2 text-sm" />
        </label>
        <div className="flex items-center justify-between">
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
        </div>

        <div>
          <button type="submit" className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">Sign in</button>
        </div>
      </form>
    </section>
  );
}
