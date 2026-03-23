import Container from "@/components/ui/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "Step 1",
    title: "Lead Enters",
    description:
      "A prospect lands on your funnel, page, or ad and submits their details.",
    note: "This is where intent is often highest.",
  },
  {
    step: "Step 2",
    title: "Instant Response",
    description:
      "The system responds within seconds through WhatsApp, SMS, or an automated channel.",
    note: "Speed increases conversion probability.",
  },
  {
    step: "Step 3",
    title: "Qualification",
    description:
      "The lead is filtered based on intent, readiness, and fit so the right prospects move forward faster.",
    note: "Not every lead should be treated the same.",
  },
  {
    step: "Step 4",
    title: "Booking",
    description:
      "Qualified leads are directed into a structured booking flow with reminders and minimal friction.",
    note: "This closes the gap between interest and action.",
  },
  {
    step: "Step 5",
    title: "Follow-Up",
    description:
      "Unresponsive leads are re-engaged through messages or voice-based workflows so opportunities are not wasted.",
    note: "Most hidden revenue lives here.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-t border-white/10 bg-zinc-950"
    >
      {/* Background treatment */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-28 h-80 w-80 rounded-full bg-white/[0.02] blur-3xl" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <Container className="relative py-24 md:py-28">
        <div className="max-w-4xl">
          <SectionBadge>How It Works</SectionBadge>

          <SectionHeading className="max-w-4xl">
            A Simple Flow
            <span className="block text-white/70">
              That Turns Interest Into Booked Calls
            </span>
          </SectionHeading>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            Every lead is captured, contacted instantly, qualified, and guided
            toward a booked call through a structured process designed to reduce
            delay, inconsistency, and drop-off.
          </p>
        </div>

        {/* Desktop flow line */}
        <div className="mt-12 hidden xl:flex xl:items-center xl:gap-3">
          {["Lead Enters", "Instant Response", "Qualification", "Booking", "Follow-Up"].map(
            (item, index) => (
              <div key={item} className="flex items-center gap-3">
                <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75">
                  {item}
                </div>
                {index < 4 && <span className="text-white/25">→</span>}
              </div>
            )
          )}
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-white/35">
                {item.step}
              </p>

              <h3 className="mt-4 text-xl font-semibold leading-7 text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-white/72">
                {item.description}
              </p>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm leading-6 text-white/45">{item.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing box */}
        <div className="mt-14 rounded-[2rem] border border-white/10 bg-black/30 p-8 backdrop-blur-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-lg leading-8 text-white/75">
                Every lead is handled instantly, consistently, and without
                relying on manual effort.
              </p>

              <p className="mt-6 text-xl font-medium leading-8 text-white md:text-2xl">
                Less delay. Less drop-off. More qualified conversations.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm uppercase tracking-[0.16em] text-white/40">
                System Effect
              </p>

              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/75">
                  Faster contact speed
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/75">
                  Better lead handling
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/75">
                  Cleaner booking flow
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/75">
                  Higher conversion consistency
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}