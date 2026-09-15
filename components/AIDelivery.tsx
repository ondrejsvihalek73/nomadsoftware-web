import { ai } from "@/content/site";
import { Check } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Bar({ rows, total, tone }: { rows: { label: string; span: number }[]; total: number; tone: "muted" | "neon" }) {
  const sum = rows.reduce((a, r) => a + r.span, 0);
  return (
    <div>
      <div className="flex h-11 w-full overflow-hidden rounded-xl border border-line bg-ink">
        {rows.map((r, i) => (
          <div
            key={r.label}
            title={`${r.label} · ${r.span} wk`}
            style={{ width: `${(r.span / total) * 100}%` }}
            className={`flex items-center justify-center border-r border-ink px-1 text-[0.68rem] font-medium last:border-r-0 ${
              tone === "neon"
                ? i === rows.length - 1
                  ? "bg-gradient-to-r from-neon to-neon-2 text-ink"
                  : "bg-neon/25 text-fg"
                : i === rows.length - 1
                  ? "bg-white/20 text-fg"
                  : "bg-white/[0.07] text-muted"
            }`}
          >
            <span className="truncate">{r.span >= 2 ? r.label : ""}</span>
          </div>
        ))}
      </div>
      <p className="mt-2 font-mono text-xs text-dim">
        ≈ {sum} weeks to first production release
      </p>
    </div>
  );
}

export default function AIDelivery() {
  const total = ai.timeline.traditional.reduce((a, r) => a + r.span, 0);

  return (
    <section id="ai" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 -z-10 h-[520px] w-[520px] rounded-full bg-neon/10 blur-[140px]" />
      <div className="container-x">
        <SectionHeading
          eyebrow="AI-augmented delivery"
          title={
            <>
              <span className="text-gradient">{ai.title.split(".")[0]}.</span>
              {ai.title.split(".").slice(1).join(".")}
            </>
          }
          lead={ai.lead}
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.25fr_1fr]">
          {/* Pipeline */}
          <Reveal className="card overflow-hidden !rounded-[1.5rem]">
            <div className="hidden grid-cols-[140px_1fr_1fr] gap-4 border-b border-line px-6 py-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-dim md:grid">
              <span>Stage</span>
              <span className="text-neon">AI accelerates</span>
              <span>Experts decide</span>
            </div>
            <ul>
              {ai.pipeline.map((p, i) => (
                <li
                  key={p.stage}
                  className="grid gap-2 border-b border-line px-6 py-5 text-[0.95rem] last:border-b-0 md:grid-cols-[140px_1fr_1fr] md:items-start md:gap-4"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <span className="font-mono text-[0.68rem] text-dim">0{i + 1}</span>
                    {p.stage}
                  </span>
                  <span className="text-fg/90"><span className="mr-2 font-mono text-[0.65rem] uppercase tracking-wider text-neon md:hidden">AI</span>{p.ai}</span>
                  <span className="text-muted"><span className="mr-2 font-mono text-[0.65rem] uppercase tracking-wider text-dim md:hidden">Expert</span>{p.human}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Timeline + guarantees */}
          <div className="grid gap-4">
            <Reveal delay={100} className="card p-7">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-dim">Typical MVP timeline</p>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="mb-2 text-sm text-muted">Traditional hire-and-build</p>
                  <Bar rows={ai.timeline.traditional} total={total} tone="muted" />
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-fg">NOMAD squad + AI</p>
                  <Bar rows={ai.timeline.nomad} total={total} tone="neon" />
                </div>
              </div>
              <p className="mt-5 text-xs text-dim">Indicative comparison. Actual timelines depend on scope and are agreed during discovery.</p>
            </Reveal>

            <Reveal delay={180} className="card p-7">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-dim">Responsible AI by default</p>
              <ul className="mt-5 space-y-3">
                {ai.guarantees.map((g) => (
                  <li key={g} className="flex gap-3 text-[0.95rem]">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
