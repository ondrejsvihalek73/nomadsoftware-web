import { network } from "@/content/site";
import world from "@/content/world-dots.json";
import { Arrow } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const W = 1000;
const H = 420;

function project(lat: number, lon: number) {
  return {
    x: ((lon + 180) / 360) * W,
    y: ((world.latMax - lat) / (world.latMax - world.latMin)) * H,
  };
}

export default function Network() {
  const hq = project(network.hubs[0].lat, network.hubs[0].lon);
  const dots = world.dots as [number, number][];

  return (
    <section id="network" className="relative overflow-hidden border-t border-line bg-ink-2/50 py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading eyebrow="The network" title={network.title} lead={network.lead} />
          <Reveal>
            <a href={network.joinCta.href} className="btn btn-ghost">
              {network.joinCta.label} <Arrow />
            </a>
          </Reveal>
        </div>

        <Reveal className="relative mt-14">
          <div className="card overflow-hidden !rounded-[1.5rem] bg-ink p-3 md:p-6">
            <div className="overflow-x-auto">
              <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full min-w-[640px]" role="img" aria-label="Map of NOMAD expert hubs worldwide">
                <defs>
                  <linearGradient id="arc" x1="0" x2="1">
                    <stop offset="0%" stopColor="#37F0FF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.2" />
                  </linearGradient>
                  <radialGradient id="hubglow">
                    <stop offset="0%" stopColor="#37F0FF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#37F0FF" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <g fill="rgba(255,255,255,0.13)">
                  {dots.map(([x, y], i) => (
                    <circle key={i} cx={(x / 100) * W} cy={(y / 100) * H} r={2.1} />
                  ))}
                </g>
                <g fill="none" stroke="url(#arc)" strokeWidth={1.1}>
                  {network.hubs.slice(1).map((h, i) => {
                    const p = project(h.lat, h.lon);
                    const mx = (p.x + hq.x) / 2;
                    const my = Math.min(p.y, hq.y) - Math.abs(p.x - hq.x) * 0.22 - 10;
                    return (
                      <path key={h.city} d={`M${hq.x},${hq.y} Q${mx},${my} ${p.x},${p.y}`} strokeDasharray="4 5" opacity={0.75}>
                        <animate attributeName="stroke-dashoffset" from="90" to="0" dur={`${3 + (i % 4)}s`} repeatCount="indefinite" />
                      </path>
                    );
                  })}
                </g>
                {network.hubs.map((h, i) => {
                  const p = project(h.lat, h.lon);
                  const isHq = i === 0;
                  return (
                    <g key={h.city}>
                      <circle cx={p.x} cy={p.y} r={isHq ? 26 : 14} fill="url(#hubglow)" opacity={isHq ? 0.7 : 0.45} />
                      <circle cx={p.x} cy={p.y} r={isHq ? 5.5 : 3.6} fill={isHq ? "#C4FF4D" : "#37F0FF"} />
                      {(isHq || "label" in h) && (
                        <text
                          x={isHq ? p.x + 10 : "label" in h && h.label === "end" ? p.x - 9 : p.x + 9}
                          y={isHq ? p.y + 20 : p.y - 8}
                          textAnchor={isHq ? "start" : "label" in h && h.label === "end" ? "end" : "start"}
                          fill={isHq ? "#C4FF4D" : "#9aa3b5"}
                          fontSize={isHq ? 14 : 11.5}
                          fontFamily="var(--font-geist-mono), monospace"
                        >
                          {isHq ? "Prague HQ" : h.city}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {network.vetting.map((v, i) => (
            <Reveal key={v.title} delay={i * 80} className="card p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neon/40 font-mono text-xs text-neon">
                  {i + 1}
                </span>
                <h3 className="font-semibold tracking-tight">{v.title}</h3>
              </div>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
