import { faq } from "@/content/site";
import { Plus } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered."
          lead="Anything else? We're happy to walk you through the model on a short call."
        />
        <Reveal>
          <div className="divide-y divide-line border-y border-line">
            {faq.map((f, i) => (
              <details key={f.q} className="group" open={i === 0}>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-left text-lg font-medium tracking-tight transition-colors hover:text-neon">
                  {f.q}
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-2 transition-transform duration-300 group-open:rotate-45 group-open:border-neon/50 group-open:text-neon">
                    <Plus />
                  </span>
                </summary>
                <p className="-mt-1 max-w-2xl pb-6 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
