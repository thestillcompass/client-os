export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-20 md:px-10">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-center">
          
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/50">
              Client Acquisition System
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Most Coaches Don’t Have a Lead Problem. They Have a System Problem.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              We build disciplined client acquisition systems that capture,
              follow up, and convert high-intent leads automatically — so no
              opportunity is lost due to slow response or inconsistent processes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#cta"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Fix My Client Acquisition System
              </a>

              <a
                href="#how-it-works"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                See How It Works
              </a>
            </div>

            <p className="mt-4 text-sm text-white/50">
              No-pressure call • Built for high-ticket coaches • Focused on
              fixing revenue leaks
            </p>

            <div className="mt-8 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                Respond to every lead in under 60 seconds
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                Eliminate missed follow-ups and lost prospects
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                Automate qualification and booking
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                See exactly where your pipeline is leaking
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Without vs With a System
            </p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
                <p className="text-sm font-medium text-red-200">Without System</p>
                <p className="mt-2 text-white/70">
                  Lead → Delay → Lost Interest → Drop
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
                <p className="text-sm font-medium text-emerald-200">With System</p>
                <p className="mt-2 text-white/70">
                  Lead → Instant Response → Qualification → Booked Call
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm text-white/50">System Flow</p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-white/80">
                <span className="rounded-full border border-white/10 px-3 py-2">
                  Ad / Traffic
                </span>
                <span>→</span>
                <span className="rounded-full border border-white/10 px-3 py-2">
                  Lead Captured
                </span>
                <span>→</span>
                <span className="rounded-full border border-white/10 px-3 py-2">
                  Instant WhatsApp
                </span>
                <span>→</span>
                <span className="rounded-full border border-white/10 px-3 py-2">
                  AI Qualification
                </span>
                <span>→</span>
                <span className="rounded-full border border-white/10 px-3 py-2">
                  Booking
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}