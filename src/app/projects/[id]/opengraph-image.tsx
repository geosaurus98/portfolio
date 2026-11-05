import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateImageMetadata({
  params,
}: {
  params: { id?: string };
}) {
  const project = projects.find((p) => p.id === params.id);
  // One image per project route. Its variant ID must also exist during
  // build-time collection, before a concrete project parameter is known.
  return [{
    id: "default",
    alt: project?.title ?? "Project — George Johnson",
    size,
    contentType,
  }];
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

        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "80px",
            bottom: "80px",
            width: "4px",
            background: "#3b82f6",
            borderRadius: "0 2px 2px 0",
          }}
        />

        {/* Subtitle */}
        {subtitle && (
          <div style={{ fontSize: "18px", color: "#3b82f6", marginBottom: "16px" }}>
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
                background: "#1a2333",
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
