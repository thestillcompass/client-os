import Container from "@/components/ui/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeading from "@/components/ui/SectionHeading";

const proofBlocks = [
  {
    title: "What This System Is Built to Fix",
    points: [
      "Slow response times after a lead comes in",
      "Manual follow-ups that depend on time, memory, or mood",
      "Low visibility into where prospects actually drop off",
      "Missed opportunities between lead capture and booking",
    ],
  },
  {
    title: "What Most Businesses Get Wrong",
    points: [
      "They assume the problem is traffic, when the problem is usually process",
      "They rely on inconsistent human effort instead of a disciplined system",
      "They treat every lead the same instead of qualifying properly",
      "They focus on getting more leads before fixing the leaks in the pipeline",
    ],
  },
  {
    title: "What CLIENT|OS Is Designed to Improve",
    points: [
      "Faster first response to high-intent leads",
      "More consistent qualification and routing",
      "Cleaner path from interest to booked call",
      "Better conversion without depending on manual effort",
    ],
  },
];

export default function Proof() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <Container className="relative py-24 md:py-28">
        <div className="max-w-4xl">
          <SectionBadge>Proof of Thinking</SectionBadge>

          <SectionHeading className="max-w-4xl">
            Built Around the Real Conversion Problems
            <span className="block text-white/70">
              That Cost Businesses Revenue
            </span>
          </SectionHeading>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            CLIENT|OS is not built around generic automation claims. It is built
            around the operational gaps that quietly reduce response speed,
            weaken follow-up, and lower the number of qualified calls that get
            booked.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {proofBlocks.map((block) => (
            <div
              key={block.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold leading-7 text-white">
                {block.title}
              </h3>

              <div className="mt-6 grid gap-4">
                {block.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/40" />
                    <p className="text-sm leading-7 text-white/72">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-black/30 p-8 backdrop-blur-sm md:p-10">
          <p className="text-lg leading-8 text-white/75">
            The goal is not to make your business look automated.
          </p>

          <p className="mt-4 text-2xl font-semibold leading-9 text-white md:text-3xl">
            The goal is to make lead handling faster, cleaner, and more
            reliable.
          </p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            When response, qualification, and booking are handled with more
            discipline, more of your existing demand turns into real
            conversations.
          </p>
        </div>
      </Container>
    </section>
  );
}