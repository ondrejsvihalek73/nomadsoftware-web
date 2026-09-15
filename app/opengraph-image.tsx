import { ImageResponse } from "next/og";

export const alt = "NOMAD Software — Expert squads, assembled for your product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 80% 20%, rgba(123,97,255,0.35), transparent 45%), radial-gradient(circle at 10% 90%, rgba(55,240,255,0.25), transparent 45%), #05060a",
          color: "#eef1f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, fontWeight: 700 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, border: "2px solid #37f0ff", display: "flex" }} />
          NOMAD <span style={{ color: "#9aa3b5", fontWeight: 400, marginLeft: 8 }}>software</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2 }}>
          <span>The right experts.</span>
          <span style={{ color: "#37f0ff" }}>Assembled for your product.</span>
          <span style={{ color: "#9aa3b5" }}>Shipping at AI speed.</span>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#9aa3b5" }}>
          Distributed expert squads · AI-accelerated delivery · nomadsoftware.cz
        </div>
      </div>
    ),
    size,
  );
}
