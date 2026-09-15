import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  message?: string;
  needs?: string[];
  website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Silently accept bot submissions
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const company = clean(body.company, 160);
  const budget = clean(body.budget, 40);
  const message = clean(body.message, 5000);
  const needs = Array.isArray(body.needs) ? body.needs.map((n) => clean(n, 60)).filter(Boolean).slice(0, 10) : [];

  if (!name || !EMAIL_RE.test(email) || message.length < 5) {
    return NextResponse.json({ error: "Please fill in your name, a valid email and project details." }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "office@nomadsoftware.com";
  const from = process.env.CONTACT_FROM_EMAIL || "NOMAD Website <onboarding@resend.dev>";

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "-"}`,
    `Budget: ${budget || "-"}`,
    `Needs: ${needs.join(", ") || "-"}`,
    "",
    message,
  ].join("\n");

  if (!apiKey) {
    console.log("[contact] RESEND_API_KEY not set – enquiry logged only:\n" + text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `New enquiry – ${name}${company ? ` (${company})` : ""}`,
      text,
      html: `<pre style="font-family:ui-monospace,monospace;font-size:14px">${esc(text)}</pre>`,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return NextResponse.json({ error: "We couldn't send your message right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
