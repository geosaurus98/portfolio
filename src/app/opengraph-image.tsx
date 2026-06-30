import { ImageResponse } from "next/og";

export const alt = "George Johnson — Mechatronics Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Terminal prompt */}
        <div style={{ display: "flex", marginBottom: "24px", fontSize: "20px" }}>
          <span style={{ color: "#64748b" }}>~/portfolio</span>
          <span style={{ color: "#e2e8f0", marginLeft: "8px" }}> $ </span>
          <span style={{ color: "#22c55e", marginLeft: "4px" }}>whoami</span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            color: "#f1f5f9",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          George Johnson
        </div>

        {/* Role */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "40px" }}>
          {["Mechatronics Engineer", "Embedded Systems", "Robotics"].map((tag) => (
            <div
              key={tag}
              style={{
                fontSize: "18px",
                color: "#22c55e",
                border: "1px solid #1a2332",
                padding: "6px 14px",
                borderRadius: "6px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "16px",
            color: "#64748b",
          }}
        >
          <span>University of Canterbury · Christchurch, NZ</span>
          <span>github.com/geosaurus98</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
