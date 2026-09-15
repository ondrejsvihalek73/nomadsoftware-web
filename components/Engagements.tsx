import { engagements, sprints } from "@/content/site";
import { Arrow, Check } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Engagements() {
  return (
    <section id="engagements" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Engagement models"
          align="center"
          title={
            <>
              Work with us <span className="text-gradient">your way.</span>
            </>
          }
          lead="From a fully managed product squad to a single senior specialist — flexible, temporary or long-term."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {engagements.map((e, i) => (
            <Reveal
              key={e.name}
              delay={i * 90}
              className={`card flex flex-col p-8 ${
                e.featured ? "glow-border bg-gradient-to-b from-neon/[0.09] via-transparent to-neon-2/[0.06] lg:-my-3 lg:py-11" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="chip">{e.tag}</span>
                {e.featured && <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-lime">Most chosen</span>}
              </div>
              <h3 className="mt-7 text-3xl font-semibold tracking-tight">{e.name}</h3>
              <p className="mt-3 leading-relaxed text-muted">{e.body}</p>
              <p className="mt-6 text-sm">
                <span className="text-dim">Best for: </span>
                {e.bestFor}
              </p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
                {e.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[0.95rem]">
                    <Check className="h-4 w-4 shrink-0 text-neon" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn mt-8 ${e.featured ? "btn-primary" : "btn-ghost"}`}>
                Discuss {e.name} <Arrow />
              </a>
            </Reveal>
          ))}
        </div>

        {/* Starter sprints */}
        <div className="mt-24">
          <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">Not sure where to begin?</p>
              <h3 className="text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-tight tracking-[-0.03em]">
                Start with a focused sprint.
              </h3>
            </div>
            <p className="max-w-md text-muted">Low-risk, fixed-scope entry points that deliver tangible outputs in weeks.</p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {sprints.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="card group flex flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-neon">{s.duration}</span>
                  <span className="text-dim transition-transform group-hover:translate-x-1 group-hover:text-neon">
                    <Arrow />
                  </span>
                </div>
                <h4 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h4>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{s.body}</p>
                <p className="mt-6 border-t border-line pt-4 font-mono text-xs text-dim">{s.output}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
