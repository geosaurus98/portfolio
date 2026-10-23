import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projects", "/experience", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const projectPages = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.id}`,
    changeFrequency: "monthly" as const,
    priority: p.featured ? 0.7 : 0.5,
  }));
  return [...pages, ...projectPages];
}
