import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeading from "@/components/ui/SectionHeading";

const callBenefits = [
  "Identify where your current system is leaking revenue",
  "Break down your lead flow from capture to booking",
  "See how to respond faster and convert more consistently",
  "Map a simple system tailored to your business",
];

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-white/10 bg-zinc-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <Container className="relative py-24 md:py-28">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-sm md:p-12">
          <SectionBadge className="text-center">Strategy Call</SectionBadge>

          <SectionHeading className="mx-auto mt-6 max-w-4xl">
            Let’s Fix Your
            <span className="block text-white/70">
              Client Acquisition System
            </span>
          </SectionHeading>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            If you’re generating leads but losing opportunities due to slow
            follow-ups, inconsistent processes, or lack of visibility, this is
            where we fix it.
          </p>

          <div className="mx-auto mt-12 grid max-w-3xl gap-4 text-left md:grid-cols-2">
            {callBenefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5"
              >
                <p className="text-base leading-7 text-white/80">{benefit}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            No generic advice. No fluff. Just a clear breakdown of what’s
            working, what’s broken, and how to fix it.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton
              href="https://calendly.com/thestillcompass1"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-7 py-4 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
            >
              Book My Strategy Call
            </PrimaryButton>

            <SecondaryButton
              href="https://wa.me/917760875502?text=Hi%2C%20I%20want%20to%20fix%20my%20client%20acquisition%20system"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              Message Me on WhatsApp
            </SecondaryButton>
          </div>

          <p className="mt-6 text-sm text-white/50">
            No-pressure conversation • Built for high-ticket coaches • Focused
            on your current system
          </p>
        </div>
      </Container>
    </section>
  );
}