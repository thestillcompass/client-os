import Container from "@/components/ui/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeading from "@/components/ui/SectionHeading";

const solutionSteps = [
  {
    number: "01",
    title: "Lead Capture Engine",
    description:
      "Attract and capture high-intent prospects through a focused entry point designed to filter stronger opportunities into your pipeline.",
    note: "Why it matters: the quality of leads entering your system affects everything downstream.",
  },
  {
    number: "02",
    title: "Instant Response Layer",
    description:
      "Every lead receives an immediate response through WhatsApp, SMS, or automation so interest does not fade before the conversation begins.",
    note: "Why it matters: speed determines whether intent converts or disappears.",
  },
  {
    number: "03",
    title: "Qualification & Routing",
    description:
      "Leads are filtered, categorized, and guided based on intent and readiness so your time goes to the prospects most likely to move.",
    note: "Why it matters: not every lead should be treated the same.",
  },
  {
    number: "04",
    title: "Booking & Re-Engagement",
    description:
      "Qualified leads are guided toward a booked call, while unresponsive leads are re-activated through automated follow-up and voice-based workflows.",
    note: "Why it matters: most revenue is lost between initial interest and the booking stage.",
  },
];

export default function Solution() {
  return (
    <section
  id="solution"
  className="relative overflow-hidden border-t border-white/10 bg-black"
>
      {/* Background treatment */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-10 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-emerald-500/8 blur-3xl" />
      </div>

      <Container className="relative py-24 md:py-28">
        <div className="max-w-4xl">
          <SectionBadge>The Solution</SectionBadge>

          <SectionHeading className="max-w-4xl">
            A Disciplined Client Acquisition System
            <span className="block text-white/70">
              That Eliminates Lost Opportunities
            </span>
          </SectionHeading>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            Instead of relying on manual effort, inconsistent follow-ups, and
            disconnected tools, we build a{" "}
            <span className="font-medium text-white">
              structured revenue control system
            </span>{" "}
            that ensures every lead is captured, contacted, qualified, and moved
            toward a decision automatically.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solutionSteps.map((step) => (
            <div
              key={step.number}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-white/35">
                {step.number}
              </p>

              <h3 className="mt-4 text-xl font-semibold leading-7 text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-white/72">
                {step.description}
              </p>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm leading-6 text-white/45">{step.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-lg leading-8 text-white/75">
                Most agencies give you tools. We give you a system that executes
                without relying on your time, memory, or manual effort.
              </p>

              <p className="mt-6 text-xl font-medium leading-8 text-white md:text-2xl">
                Capture → Respond → Qualify → Book → Re-engage
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
              <p className="text-sm uppercase tracking-[0.16em] text-white/40">
                Outcome
              </p>

              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75">
                  Faster lead response
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75">
                  Better qualification
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75">
                  More booked calls
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75">
                  Fewer lost opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
