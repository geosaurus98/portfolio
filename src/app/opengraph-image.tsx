import { ImageResponse } from "next/og";

export const alt = "George Johnson — Mechatronics Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b0f17",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", fontSize: "22px", color: "#3b82f6", marginBottom: "20px" }}>
          Mechatronics engineer · Christchurch, New Zealand
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
                color: "#93c5fd",
                background: "rgba(59,130,246,0.15)",
                padding: "6px 16px",
                borderRadius: "999px",
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
