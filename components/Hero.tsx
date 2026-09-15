import { hero } from "@/content/site";
import { Arrow } from "./Icons";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-[120px] pb-20 md:pt-[150px] md:pb-28">
      {/* ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-neon/10 blur-[140px]" />
        <div className="absolute top-40 -right-40 h-[480px] w-[480px] rounded-full bg-neon-2/15 blur-[130px]" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <p className="chip mb-7 !text-[0.7rem] !text-fg/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            {hero.eyebrow}
          </p>

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-balance">
            <span className="block">{hero.titleA}</span>
            <span className="block text-gradient">{hero.titleB}</span>
            <span className="block text-muted">{hero.titleC}</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted text-pretty">{hero.lead}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label} <Arrow />
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-ghost">
              {hero.secondaryCta.label}
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-line border-y border-line">
            {hero.proof.map((p) => (
              <div key={p.label} className="px-4 py-4 first:pl-0">
                <dt className="sr-only">{p.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight md:text-3xl">{p.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-dim md:text-[0.8rem]">{p.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
