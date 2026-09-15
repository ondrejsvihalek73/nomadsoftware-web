import { nav, services, site } from "@/content/site";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Expert squads assembled for every product. Senior people, global network, AI-accelerated delivery.
          </p>
          <a href="#contact" className="btn btn-ghost mt-6 !py-2.5 !text-sm">
            Book a free consultation
          </a>
        </div>
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-dim">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-muted hover:text-fg">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-dim">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.key}>
                <a href="#services" className="text-muted hover:text-fg">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-dim">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-fg">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-fg">
                {site.phone}
              </a>
            </li>
            <li>Prague, Czech Republic</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col justify-between gap-3 py-6 text-xs text-dim sm:flex-row">
          <p>© {year} NOMAD Software. All rights reserved.</p>
          <p className="font-mono">Built remote-first · Deployed on the edge</p>
        </div>
      </div>
    </footer>
  );
}
