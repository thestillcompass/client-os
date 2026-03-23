import Container from "@/components/ui/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeading from "@/components/ui/SectionHeading";

const problemPoints = [
  "Leads sit for hours before getting a reply",
  "Follow-ups depend on mood, time, or memory",
  "Some prospects are contacted while others slip through the cracks",
  "There’s no clear visibility into where leads actually drop",
];

export default function Problem() {
  return (
    <section
  id="problem"
  className="relative overflow-hidden border-t border-white/10 bg-zinc-950"
>
      {/* Background treatment */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <Container className="relative py-24 md:py-28">
        <div className="max-w-4xl">
          <SectionBadge>The Real Problem</SectionBadge>

          <SectionHeading className="max-w-4xl">
            You’re Not Losing Clients
            <span className="block text-white/70">Because of Your Offer.</span>
            <span className="block">You’re Losing Them in the First 5 Minutes.</span>
          </SectionHeading>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            Most high-ticket coaches don’t have a lead problem. They have a{" "}
            <span className="font-medium text-white">
              response and follow-up problem
            </span>
            . Leads come in. Interest is high. Intent is there. But what happens
            next is where revenue is lost.
          </p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            By the time you respond, the prospect may have already lost urgency,
            spoken to someone else, or forgotten why they signed up in the first
            place. Every delayed response quietly turns into{" "}
            <span className="font-medium text-white">
              lost revenue you never even see
            </span>
            .
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {problemPoints.map((point) => (
            <div
              key={point}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-white/40 transition group-hover:bg-white/70" />
                <p className="text-base leading-7 text-white/80">{point}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-4xl rounded-[2rem] border border-white/10 bg-black/30 p-8 backdrop-blur-sm md:p-10">
          <p className="text-lg leading-8 text-white/80">
            This isn’t a marketing problem.
          </p>

          <p className="mt-3 text-2xl font-semibold leading-9 text-white md:text-3xl">
            It’s a consistency problem.
          </p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            And consistency cannot be fixed with more ads, more leads, or more
            effort. It can only be fixed with a system that executes every time,
            without fail.
          </p>

          <p className="mt-8 text-lg font-medium leading-8 text-white">
            In high-ticket coaching, the business that responds first, follows
            up consistently, and controls the process wins the client.
          </p>
        </div>
      </Container>
    </section>
  );
}