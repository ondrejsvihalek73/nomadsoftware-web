"use client";

import { useEffect, useState } from "react";

/** Global talent pool rendered as orbiting nodes; the squad is assembled one match at a time. */
const POOL = [
  { role: "Product Lead", level: "Principal", city: "Prague", fit: 97, a: 200 },
  { role: "Product Designer", level: "Lead", city: "Lisbon", fit: 95, a: 250 },
  { role: "AI Engineer", level: "Staff", city: "San Francisco", fit: 98, a: 305 },
  { role: "Full-stack Engineer", level: "Senior", city: "Warsaw", fit: 94, a: 15 },
  { role: "iOS Engineer", level: "Senior", city: "Oslo", fit: 93, a: 75 },
  { role: "Cloud Architect", level: "Staff", city: "Toronto", fit: 96, a: 135 },
];
const DECOYS = [30, 55, 100, 115, 160, 175, 225, 280, 330, 350, 5, 190];

const R = 150;
const C = 190;
const pos = (deg: number, r = R) => {
  const rad = (deg * Math.PI) / 180;
  return { x: C + r * Math.cos(rad), y: C + r * Math.sin(rad) };
};

export default function HeroVisual() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(POOL.length);
      return;
    }
    const id = window.setInterval(() => {
      setCount((c) => (c >= POOL.length + 2 ? 0 : c + 1));
    }, 1300);
    return () => window.clearInterval(id);
  }, []);

  const active = Math.min(count, POOL.length);
  const matching = count < POOL.length ? POOL[count] : null;

  return (
    <div className="relative mx-auto w-full max-w-[520px] pb-4 sm:pb-24 lg:pb-16" aria-hidden="true">
      <div className="relative w-full">
        <svg viewBox="0 0 380 380" className="aspect-square h-auto w-full">
          <defs>
            <radialGradient id="core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#37F0FF" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#7B61FF" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#7B61FF" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="beam" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#37F0FF" />
              <stop offset="100%" stopColor="#7B61FF" />
            </linearGradient>
          </defs>

          {[R + 28, R, R - 52, R - 96].map((r, i) => (
            <circle
              key={r}
              cx={C}
              cy={C}
              r={r}
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeDasharray={i % 2 ? "2 6" : undefined}
            />
          ))}

          <g className="origin-center" style={{ transformOrigin: "190px 190px", animation: "spin 90s linear infinite" }}>
            {DECOYS.map((d, i) => {
              const p = pos(d, i % 2 ? R + 28 : R - 52);
              return <circle key={d} cx={p.x} cy={p.y} r={2.2} fill="rgba(255,255,255,0.28)" />;
            })}
          </g>

          {POOL.map((m, i) => {
            const p = pos(m.a);
            const on = i < active;
            return (
              <g key={m.role}>
                <line
                  x1={p.x}
                  y1={p.y}
                  x2={C}
                  y2={C}
                  stroke="url(#beam)"
                  strokeWidth={1.4}
                  strokeDasharray="220"
                  strokeDashoffset={on ? 0 : 220}
                  style={{ transition: "stroke-dashoffset 0.9s cubic-bezier(.2,.7,.2,1)", opacity: on ? 0.9 : 0 }}
                />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={on ? 7 : 4}
                  fill={on ? "#37F0FF" : "rgba(255,255,255,0.4)"}
                  style={{ transition: "all .5s ease" }}
                />
                {on && <circle cx={p.x} cy={p.y} r={13} fill="none" stroke="#37F0FF" strokeOpacity={0.35} />}
                {matching === m && (
                  <circle cx={p.x} cy={p.y} r={16} fill="none" stroke="#C4FF4D" strokeWidth={1.5}>
                    <animate attributeName="r" from="6" to="22" dur="1.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="1" to="0" dur="1.2s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            );
          })}

          <circle cx={C} cy={C} r={70} fill="url(#core)" />
          <circle cx={C} cy={C} r={36} fill="#0b0e16" stroke="url(#beam)" strokeWidth={1.5} />
          <text x={C} y={C - 3} textAnchor="middle" fill="#eef1f7" fontSize="10.5" fontWeight={600}>
            YOUR
          </text>
          <text x={C} y={C + 10} textAnchor="middle" fill="#eef1f7" fontSize="10.5" fontWeight={600}>
            PRODUCT
          </text>
        </svg>

        {/* Squad card */}
        <div className="glow-border relative -mt-10 w-full rounded-2xl bg-panel/90 p-4 shadow-2xl shadow-black/60 backdrop-blur-xl sm:absolute sm:-bottom-20 sm:right-0 sm:mt-0 sm:w-[310px] lg:-bottom-14 lg:-right-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-dim">Squad composer</span>
            <span className="font-mono text-[0.68rem] text-lime">
              {matching ? "matching…" : "squad ready"}
            </span>
          </div>
          <ul className="space-y-1.5">
            {POOL.map((m, i) => {
              const on = i < active;
              return (
                <li
                  key={m.role}
                  className={`flex items-center justify-between rounded-lg px-2 py-1.5 text-[0.78rem] transition-all duration-500 ${
                    on ? "bg-white/[0.04] opacity-100" : "opacity-25"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${on ? "bg-neon" : "bg-dim"}`} />
                    <span className="text-fg">{m.role}</span>
                    <span className="text-dim">· {m.level}</span>
                  </span>
                  <span className="font-mono text-[0.68rem] text-muted">{on ? `${m.fit}% fit` : "—"}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Floating chips */}
        <div className="absolute top-4 left-0 hidden animate-float sm:block">
          <span className="chip bg-panel/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-2" /> AI copilots in every role
          </span>
        </div>
        <div className="absolute top-16 right-0 hidden animate-float sm:block" style={{ animationDelay: "-3s" }}>
          <span className="chip bg-panel/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" /> {matching ? matching.city : "Global network"}
          </span>
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
