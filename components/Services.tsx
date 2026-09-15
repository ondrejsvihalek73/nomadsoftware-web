import { services } from "@/content/site";
import { ServiceIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="border-t border-line bg-ink-2/50 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Services"
            title={
              <>
                Complete product capability. <span className="text-muted">One accountable partner.</span>
              </>
            }
          />
          <Reveal className="max-w-sm text-muted lg:pb-2">
            Handcrafted digital solutions for corporates, startups and nonprofits — from the first idea to scale.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.key}
              delay={(i % 3) * 80}
              className={`card group flex flex-col p-7 hover:-translate-y-1 ${i === 0 ? "glow-border bg-gradient-to-br from-neon/[0.08] to-neon-2/[0.06]" : ""}`}
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line-2 bg-ink text-neon transition-colors group-hover:border-neon/50">
                  <ServiceIcon name={s.key} />
                </span>
                {i === 0 && <span className="chip !border-lime/40 !text-lime">Focus 2026</span>}
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{s.body}</p>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
