import { principles } from "@/content/site";
import Reveal from "./Reveal";

export default function Principles() {
  return (
    <section aria-labelledby="principles-title" className="border-y border-line bg-ink-2/50 py-20 md:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="eyebrow mb-5">How we show up</p>
          <h2 id="principles-title" className="h-section !text-[clamp(1.9rem,3.6vw,2.9rem)]">
            A partnership mentality, <span className="text-muted">engineered into every squad.</span>
          </h2>
        </Reveal>
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 2) * 80} className="flex gap-5 border-t border-line py-6">
              <span className="font-mono text-sm text-neon">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-1.5 text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
