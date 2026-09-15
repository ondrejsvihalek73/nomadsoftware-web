"use client";

import { useState } from "react";
import { model } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function SquadModel() {
  const [phase, setPhase] = useState(1);
  const current = model.phases[phase];
  const allRoles = Array.from(new Set(model.phases.flatMap((p) => p.roles.map((r) => r.role))));

  return (
    <section id="model" className="relative py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-[500px] max-w-4xl rounded-full bg-neon-2/10 blur-[140px]" />
      <div className="container-x">
        <SectionHeading eyebrow="The NOMAD model" title={model.title} lead={model.lead} />

        {/* Steps */}
        <ol className="mt-16 grid gap-px overflow-hidden rounded-[1.25rem] border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {model.steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80} className="group relative bg-ink p-7 transition-colors hover:bg-panel">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-neon">{s.n}</span>
                <span className="h-px flex-1 bg-gradient-to-r from-neon/50 to-transparent" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>

        {/* Interactive phase composer */}
        <Reveal className="mt-6">
          <div className="card overflow-hidden !rounded-[1.5rem] bg-panel/60">
            <div className="flex flex-col gap-6 border-b border-line p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-dim">Squad evolves by phase</p>
                <p className="mt-2 text-xl font-medium tracking-tight">Experts step in exactly when their skill is needed.</p>
              </div>
              <div role="tablist" aria-label="Project phase" className="inline-flex rounded-full border border-line bg-ink p-1">
                {model.phases.map((p, i) => (
                  <button
                    key={p.id}
                    role="tab"
                    type="button"
                    aria-selected={phase === i}
                    aria-controls="phase-panel"
                    onClick={() => setPhase(i)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all md:px-5 ${
                      phase === i ? "bg-neon text-ink shadow-[0_0_30px_-6px_rgba(55,240,255,.7)]" : "text-muted hover:text-fg"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div id="phase-panel" role="tabpanel" className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-mono text-sm text-neon">{current.duration}</p>
                <p className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-balance">{current.summary}</p>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-neon" /> Core squad
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full border border-neon-2 bg-neon-2/30" /> Specialist on demand
                  </span>
                </div>
                <p className="mt-6 text-3xl font-semibold tabular-nums">
                  {current.roles.length}
                  <span className="ml-2 text-base font-normal text-dim">experts in this phase</span>
                </p>
              </div>

              <ul className="grid gap-2 sm:grid-cols-2">
                {allRoles.map((role) => {
                  const r = current.roles.find((x) => x.role === role);
                  return (
                    <li
                      key={role}
                      className={`flex items-center justify-between rounded-xl border px-4 py-3 transition-all duration-500 ${
                        r
                          ? r.core
                            ? "border-neon/40 bg-neon/[0.06]"
                            : "border-neon-2/40 bg-neon-2/[0.07]"
                          : "border-line bg-transparent opacity-35"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`h-2 w-2 rounded-full transition-colors ${
                            r ? (r.core ? "bg-neon" : "bg-neon-2") : "bg-dim"
                          }`}
                        />
                        <span className="text-[0.95rem]">{role}</span>
                      </span>
                      <span className="font-mono text-[0.7rem] text-muted">{r ? `${r.level} · ${r.tz}` : "off"}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
