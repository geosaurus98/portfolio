import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  return [{ id, alt: project?.title ?? "Project — George Johnson" }];
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  const title = project?.title ?? "Project";
  const subtitle = project?.subtitle ?? "";
  const tags = project?.tags.slice(0, 4) ?? [];

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
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Left green border accent */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "80px",
            bottom: "80px",
            width: "4px",
            background: "#22c55e",
            borderRadius: "0 2px 2px 0",
          }}
        />

        {/* Prompt */}
        <div style={{ display: "flex", marginBottom: "20px", fontSize: "18px" }}>
          <span style={{ color: "#64748b" }}>~/projects</span>
          <span style={{ color: "#e2e8f0", margin: "0 4px" }}>$</span>
          <span style={{ color: "#22c55e" }}>cat {id}.md</span>
        </div>

        {/* Subtitle */}
        {subtitle && (
          <div style={{ fontSize: "18px", color: "#22c55e", marginBottom: "16px" }}>
            {subtitle}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#f1f5f9",
            letterSpacing: "-1px",
            lineHeight: 1.1,
            marginBottom: "32px",
          }}
        >
          {title}
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                fontSize: "16px",
                color: "#94a3b8",
                background: "#1a2332",
                padding: "5px 12px",
                borderRadius: "4px",
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
          <span>George Johnson · Portfolio</span>
          <span>george.johnson@outlook.co.nz</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
