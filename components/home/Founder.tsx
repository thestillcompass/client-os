import Container from "@/components/ui/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeading from "@/components/ui/SectionHeading";

const beliefs = [
  "Systems beat motivation",
  "Speed beats intention",
  "Consistency beats intensity",
];

export default function Founder() {
  return (
    <section
  id="founder"
  className="relative overflow-hidden border-t border-white/10 bg-black"
>
      {/* Background treatment */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <Container className="relative py-24 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          {/* Left content */}
          <div className="max-w-3xl">
            <SectionBadge>Founder Philosophy</SectionBadge>

            <SectionHeading className="max-w-3xl">
              Built on Discipline,
              <span className="block text-white/70">Not Guesswork</span>
            </SectionHeading>

            <p className="mt-8 text-base leading-8 text-white/70 sm:text-lg">
              Most businesses don’t fail because of lack of opportunity.
              They fail because of inconsistency.
            </p>

            <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
              For years, I struggled with weight and assumed the problem was
              motivation, knowledge, or the lack of the right plan. But the
              real problem was much simpler: inconsistency.
            </p>

            <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
              Once I shifted my focus from motivation to systems and discipline,
              I lost over{" "}
              <span className="font-medium text-white">16kg in 3 months</span>.
              That experience changed how I look at problems — not just in
              health, but in business.
            </p>

            <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
              Most coaching businesses don’t struggle because they lack leads.
              They struggle because their systems are reactive, inconsistent,
              and dependent on manual effort.
            </p>

            <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
              That’s why I focus on building disciplined systems that respond
              instantly, follow up consistently, and move every lead through a
              clear process.
            </p>

            <p className="mt-8 text-lg font-medium leading-8 text-white md:text-xl">
              In both fitness and business, the outcome is not determined by
              intention — it’s determined by execution.
            </p>
          </div>

          {/* Right side belief card */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-white/[0.04] blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-7">
              <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                What I Believe
              </p>

              <div className="mt-6 grid gap-4">
                {beliefs.map((belief) => (
                  <div
                    key={belief}
                    className="rounded-[1.25rem] border border-white/10 bg-black/30 p-4"
                  >
                    <p className="text-base font-medium text-white">{belief}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-white/40">
                  Core View
                </p>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  If your current system is inconsistent, it’s only a matter of
                  time before revenue becomes inconsistent too.
                </p>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-white/40">
                  Why This Matters
                </p>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  Businesses grow faster when lead handling becomes a process,
                  not a habit that depends on energy, memory, or mood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}