import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import SectionBadge from "@/components/ui/SectionBadge";

export default function Hero() {
  return (
    <section
  id="top"
  className="relative overflow-hidden border-b border-white/10 bg-black"
>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-0 top-24 h-[320px] w-[320px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute left-0 top-40 h-[260px] w-[260px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <Container className="relative py-20 md:py-28 xl:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-2xl">
            <SectionBadge>Client Acquisition System</SectionBadge>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl xl:text-7xl">
  <span className="block">Most Coaches Don’t Have</span>
  <span className="block text-white/70">a Lead Problem.</span>
  <span className="block">They Have a System Problem.</span>
</h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              We build disciplined client acquisition systems that capture,
              follow up, and convert high-intent leads automatically — so no
              opportunity is lost due to slow response, manual bottlenecks, or
              inconsistent execution.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton
                href="#cta"
                className="w-full sm:w-auto px-7 py-4 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
              >
                Book Strategy Call
              </PrimaryButton>

              <SecondaryButton
                href="#how-it-works"
                className="w-full sm:w-auto"
              >
                See How It Works
              </SecondaryButton>
            </div>

            <p className="mt-5 text-sm text-white/45">
              No-pressure call • 15–20 mins • Walk away with clarity
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75 backdrop-blur-sm">
                Respond to every lead in under 60 seconds
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75 backdrop-blur-sm">
                Eliminate missed follow-ups and lost prospects
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75 backdrop-blur-sm">
                Automate qualification and booking
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75 backdrop-blur-sm">
                See exactly where your pipeline is leaking
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-white/5 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-7">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                  System Snapshot
                </p>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-red-500/15 bg-red-500/8 p-5">
                  <p className="text-sm font-medium text-red-200/90">
                    Without System
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Lead enters → delayed response → interest fades → follow-up
                    missed → opportunity lost
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
                  <p className="text-sm font-medium text-emerald-200/90">
                    With System
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/75">
                    Lead enters → instant reply → qualification → booking →
                    structured follow-up
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-white/45">
                  Live Flow
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-white/80">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
                    Ad / Traffic
                  </span>
                  <span className="text-white/30">→</span>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
                    Lead Captured
                  </span>
                  <span className="text-white/30">→</span>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
                    Instant WhatsApp
                  </span>
                  <span className="text-white/30">→</span>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
                    AI Qualification
                  </span>
                  <span className="text-white/30">→</span>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
                    Booking
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                    Response Speed
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Under 60s
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                    Goal
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    More Booked Calls
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}