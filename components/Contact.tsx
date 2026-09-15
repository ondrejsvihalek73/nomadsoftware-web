"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Arrow, Check } from "./Icons";
import Reveal from "./Reveal";

const needs = ["New product / MVP", "AI solution", "Extend my team", "Senior specialist", "Discovery sprint", "Something else"];
const budgets = ["< €25k", "€25–75k", "€75–200k", "€200k+", "Not sure yet"];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState("");

  const toggle = (n: string) => setSelected((s) => (s.includes(n) ? s.filter((x) => x !== n) : [...s, n]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, needs: selected }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
      setSelected([]);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const input =
    "w-full rounded-xl border border-line-2 bg-ink px-4 py-3.5 text-fg placeholder:text-dim outline-none transition focus:border-neon/60 focus:ring-4 focus:ring-neon/10";

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0 opacity-60" />
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-neon/10 blur-[150px]" />
      </div>

      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow mb-5">Start here</p>
          <h2 className="h-section">
            Let&apos;s assemble <span className="text-gradient">your squad.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Tell us what you&apos;re building. A senior product lead will reply within one business day with next steps
            and a free consultation slot.
          </p>

          <ul className="mt-10 space-y-4">
            {["Free 30-minute consultation", "Squad proposal after scoping", "NDA on request, before any details"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neon/15 text-neon">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-4 border-t border-line pt-8 text-[0.95rem] sm:grid-cols-2">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-dim">Email</p>
              <a href={`mailto:${site.email}`} className="mt-1.5 block hover:text-neon">
                {site.email}
              </a>
            </div>
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-dim">Phone</p>
              <a href={site.phoneHref} className="mt-1.5 block hover:text-neon">
                {site.phone}
              </a>
            </div>
            <div className="sm:col-span-2">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-dim">Where</p>
              <p className="mt-1.5">{site.location}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glow-border rounded-[1.5rem] bg-panel/80 p-6 backdrop-blur-xl md:p-9">
            {status === "sent" ? (
              <div className="flex min-h-[460px] flex-col items-center justify-center text-center" role="status">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-lime/15 text-lime">
                  <Check className="h-8 w-8" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">Thanks — message received.</h3>
                <p className="mt-2 max-w-sm text-muted">We&apos;ll get back to you within one business day.</p>
                <button type="button" className="btn btn-ghost mt-8" onClick={() => setStatus("idle")}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
                <fieldset>
                  <legend className="mb-3 text-sm text-muted">What do you need?</legend>
                  <div className="flex flex-wrap gap-2">
                    {needs.map((n) => {
                      const on = selected.includes(n);
                      return (
                        <button
                          type="button"
                          key={n}
                          aria-pressed={on}
                          onClick={() => toggle(n)}
                          className={`rounded-full border px-3.5 py-2 text-sm transition-all ${
                            on ? "border-neon bg-neon/15 text-fg" : "border-line-2 text-muted hover:border-white/30 hover:text-fg"
                          }`}
                        >
                          {n}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-muted">Name</span>
                    <input name="name" required autoComplete="name" className={input} placeholder="Jane Doe" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-muted">Work email</span>
                    <input name="email" type="email" required autoComplete="email" className={input} placeholder="jane@company.com" />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-muted">Company</span>
                    <input name="company" autoComplete="organization" className={input} placeholder="Company name" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-muted">Estimated budget</span>
                    <select name="budget" className={`${input} appearance-none`} defaultValue="">
                      <option value="" disabled>
                        Select a range
                      </option>
                      {budgets.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm text-muted">Project details</span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className={`${input} resize-none`}
                    placeholder="Goals, timeline, current stage…"
                  />
                </label>

                {/* honeypot */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                <div className="flex flex-col-reverse items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                  <p className="max-w-xs text-xs leading-relaxed text-dim">
                    We use your details only to respond to this enquiry.
                  </p>
                  <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
                    {status === "sending" ? "Sending…" : "Send enquiry"} <Arrow />
                  </button>
                </div>
                {status === "error" && (
                  <p role="alert" className="text-sm text-red-400">
                    {error} You can also email us at {site.email}.
                  </p>
                )}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
