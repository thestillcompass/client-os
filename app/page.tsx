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

      <section
        id="how-it-works"
        className="border-t border-white/10 bg-zinc-950"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              A Simple Flow That Turns Interest Into Booked Calls
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
              Every lead is captured, contacted instantly, qualified, and guided
              toward a booked call through a structured process designed to reduce
              delay, inconsistency, and drop-off.
            </p>
          </div>

          <div className="mt-14 hidden xl:flex xl:items-center xl:gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80">
              Lead Enters
            </div>
            <span className="text-white/30">→</span>
            <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80">
              Instant Response
            </div>
            <span className="text-white/30">→</span>
            <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80">
              Qualification
            </div>
            <span className="text-white/30">→</span>
            <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80">
              Booking
            </div>
            <span className="text-white/30">→</span>
            <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80">
              Follow-Up
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                Step 1
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Lead Enters
              </h3>
              <p className="mt-4 text-base leading-7 text-white/70">
                A prospect lands on your funnel, page, or ad and submits their
                details.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/50">
                This is where intent is often highest.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                Step 2
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Instant Response
              </h3>
              <p className="mt-4 text-base leading-7 text-white/70">
                The system responds within seconds through WhatsApp, SMS, or an
                automated channel.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/50">
                Speed increases conversion probability.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                Step 3
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Qualification
              </h3>
              <p className="mt-4 text-base leading-7 text-white/70">
                The lead is filtered based on intent, readiness, and fit so the
                right prospects move forward faster.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/50">
                Not every lead should be treated the same.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                Step 4
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">Booking</h3>
              <p className="mt-4 text-base leading-7 text-white/70">
                Qualified leads are directed into a structured booking flow with
                reminders and minimal friction.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/50">
                This closes the gap between interest and action.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                Step 5
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Follow-Up
              </h3>
              <p className="mt-4 text-base leading-7 text-white/70">
                Unresponsive leads are re-engaged through messages or voice-based
                workflows so opportunities are not wasted.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/50">
                Most hidden revenue lives here.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-4xl">
            <p className="text-lg leading-8 text-white/70">
              Every lead is handled instantly, consistently, and without relying
              on manual effort.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              Founder
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Built on Discipline, Not Guesswork
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
              Most businesses don’t fail because of lack of opportunity. They fail
              because of inconsistency.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              For years, I struggled with weight and assumed the problem was
              motivation, knowledge, or the lack of the right plan. But the real
              problem was much simpler: inconsistency.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Once I shifted my focus from motivation to systems and discipline, I
              lost over <span className="font-medium text-white">16kg in 3 months</span>.
              That experience changed how I look at problems — not just in health,
              but in business.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Most coaching businesses don’t struggle because they lack leads.
              They struggle because their systems are reactive, inconsistent, and
              dependent on manual effort.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              That’s why I focus on building disciplined systems that respond
              instantly, follow up consistently, and move every lead through a
              clear process.
            </p>

            <p className="mt-8 text-xl font-medium leading-8 text-white">
              In both fitness and business, the outcome is not determined by
              intention — it’s determined by execution.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              What I Believe
            </p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-base font-medium text-white">
                  Systems beat motivation
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-base font-medium text-white">
                  Speed beats intention
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-base font-medium text-white">
                  Consistency beats intensity
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-6 text-white/50">
              If your current system is inconsistent, it’s only a matter of time
              before revenue becomes inconsistent too.
            </p>
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="border-t border-white/10 bg-zinc-950"
      >
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            Strategy Call
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Let’s Fix Your Client Acquisition System
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">
            If you’re generating leads but losing opportunities due to slow
            follow-ups, inconsistent processes, or lack of visibility, this is
            where we fix it.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-base leading-7 text-white/80">
                Identify where your current system is leaking revenue
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-base leading-7 text-white/80">
                Break down your lead flow from capture to booking
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-base leading-7 text-white/80">
                See how to respond faster and convert more consistently
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-base leading-7 text-white/80">
                Map a simple system tailored to your business
              </p>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-white/70">
            No generic advice. No fluff. Just a clear breakdown of what’s
            working, what’s broken, and how to fix it.
          </p>

          <div className="mt-10">
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Book My Strategy Call
            </a>
          </div>

          <p className="mt-5 text-sm text-white/50">
            No-pressure conversation • Built for high-ticket coaches • Focused on
            your current system
          </p>

          <p className="mt-4 text-sm text-white/40">
            You don’t need to prepare anything. We’ll walk through your setup
            together.
          </p>
        </div>
      </section>
    </main>
  );
}