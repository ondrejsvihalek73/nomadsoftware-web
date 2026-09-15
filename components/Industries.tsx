import { industries } from "@/content/site";

export default function Industries() {
  const items = [...industries, ...industries];
  return (
    <section aria-label="Industries we serve" className="border-y border-line bg-ink-2/60 py-6">
      <div className="container-x flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-10">
        <p className="shrink-0 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-dim">
          Corporates · startups · nonprofits
        </p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <ul className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
            {items.map((it, i) => (
              <li key={i} aria-hidden={i >= industries.length} className="flex items-center gap-10 whitespace-nowrap text-lg font-medium text-muted/80">
                {it}
                <span className="h-1 w-1 rounded-full bg-neon/60" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
