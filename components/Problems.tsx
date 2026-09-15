import { problems } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Problems() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="The delivery gap"
          title={
            <>
              Great products need the <span className="text-gradient">right people</span> — at the right moment.
            </>
          }
          lead="Traditional models make you choose between speed, quality and flexibility. We built NOMAD so you don't have to."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className="card p-7">
              <span className="font-mono text-xs text-dim">0{i + 1} / problem</span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-balance">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4">
          <div className="glow-border flex flex-col items-start justify-between gap-4 rounded-[1.25rem] bg-gradient-to-r from-neon/[0.07] to-neon-2/[0.07] p-7 md:flex-row md:items-center">
            <p className="text-xl font-medium tracking-tight md:text-2xl">
              NOMAD answer: <span className="text-neon">composable senior squads</span>, amplified by AI.
            </p>
            <a href="#model" className="btn btn-ghost">How it works</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
