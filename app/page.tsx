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

      <section className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              The Real Problem
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              You’re Not Losing Clients Because of Your Offer.
              <br className="hidden md:block" /> You’re Losing Them in the First
              5 Minutes.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
              Most high-ticket coaches don’t have a lead problem. They have a{" "}
              <span className="font-medium text-white">
                response and follow-up problem
              </span>
              . Leads come in. Interest is high. Intent is there. But what
              happens next is where revenue is lost.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              By the time you respond, the prospect may have already lost urgency,
              spoken to someone else, or forgotten why they signed up in the first
              place. Every delayed response quietly turns into{" "}
              <span className="font-medium text-white">
                lost revenue you never even see
              </span>
              .
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-base leading-7 text-white/80">
                Leads sit for hours before getting a reply
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-base leading-7 text-white/80">
                Follow-ups depend on mood, time, or memory
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-base leading-7 text-white/80">
                Some prospects are contacted while others slip through the cracks
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-base leading-7 text-white/80">
                There’s no clear visibility into where leads actually drop
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-4xl">
            <p className="text-xl leading-8 text-white/80">
              This isn’t a marketing problem.
            </p>

            <p className="mt-3 text-2xl font-semibold leading-9 text-white">
              It’s a consistency problem.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              And consistency cannot be fixed with more ads, more leads, or more
              effort. It can only be fixed with a system that executes every time,
              without fail.
            </p>

            <p className="mt-8 text-lg font-medium leading-8 text-white">
              In high-ticket coaching, the business that responds first, follows
              up consistently, and controls the process wins the client.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              The Solution
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              A Disciplined Client Acquisition System That Eliminates Lost
              Opportunities
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
              Instead of relying on manual effort, inconsistent follow-ups, and
              disconnected tools, we build a{" "}
              <span className="font-medium text-white">
                structured revenue control system
              </span>{" "}
              that ensures every lead is captured, contacted, qualified, and moved
              toward a decision automatically.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                01
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Lead Capture Engine
              </h3>
              <p className="mt-4 text-base leading-7 text-white/70">
                Attract and capture high-intent prospects through a focused entry
                point designed to filter stronger opportunities into your pipeline.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/50">
                Why it matters: the quality of leads entering your system affects
                everything downstream.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                02
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Instant Response Layer
              </h3>
              <p className="mt-4 text-base leading-7 text-white/70">
                Every lead receives an immediate response through WhatsApp, SMS,
                or automation so interest does not fade before the conversation
                begins.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/50">
                Why it matters: speed determines whether intent converts or
                disappears.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                03
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Qualification & Routing
              </h3>
              <p className="mt-4 text-base leading-7 text-white/70">
                Leads are filtered, categorized, and guided based on intent and
                readiness so your time goes to the prospects most likely to move.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/50">
                Why it matters: not every lead should be treated the same.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                04
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Booking & Re-Engagement
              </h3>
              <p className="mt-4 text-base leading-7 text-white/70">
                Qualified leads are guided toward a booked call, while unresponsive
                leads are re-activated through automated follow-up and voice-based
                workflows.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/50">
                Why it matters: most revenue is lost between initial interest and
                the booking stage.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-4xl">
            <p className="text-lg leading-8 text-white/70">
              Most agencies give you tools. We give you a system that executes
              without relying on your time, memory, or manual effort.
            </p>

            <p className="mt-6 text-xl font-medium leading-8 text-white">
              Capture → Respond → Qualify → Book → Re-engage
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}