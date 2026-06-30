import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title} — George Johnson`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const { detail } = project;

  return (
    <main className="min-h-screen pt-14">
      <div className="max-w-3xl mx-auto px-6 py-16">

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--green)] transition-colors mb-12 group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          All Projects
        </Link>

        {/* Header */}
        <div className="mb-12 fade-up fade-delay-0">
          <p className="font-mono text-sm mb-6">
            <span className="text-[var(--text-muted)]">~/projects</span>
            <span className="text-[var(--text-body)]"> $ </span>
            <span className="text-[var(--green)]">cat {project.id}.md</span>
          </p>

          {project.subtitle && (
            <p className="font-mono text-xs text-[var(--green)] mb-3">{project.subtitle}</p>
          )}

          <h1 className="text-4xl font-bold text-[var(--text)] mb-6 leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2 py-1 bg-[var(--tag-bg)] text-[var(--text-2)] rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-body)] transition-colors border border-[var(--border)] hover:border-[var(--green-40)] px-3 py-2 rounded"
            >
              <GitHubIcon />
              View on GitHub
            </a>
          )}
        </div>

        {!detail ? (
          <p className="text-[var(--text-muted)] font-mono text-sm">
            Detailed write-up coming soon.
          </p>
        ) : (
          <div className="space-y-14">

            <section className="fade-up fade-delay-1">
              <SectionHeader label="Overview" />
              <p className="text-[var(--text-2)] leading-relaxed">{detail.overview}</p>
            </section>

            <section className="fade-up fade-delay-2">
              <SectionHeader label="Highlights" />
              <ul className="space-y-3">
                {detail.highlights.map((point, i) => (
                  <li key={i} className="flex gap-3 text-[var(--text-2)]">
                    <span className="text-[var(--green)] font-mono shrink-0 mt-0.5">›</span>
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            {detail.images && detail.images.length > 0 && (
              <section className="fade-up fade-delay-3">
                <SectionHeader label="Images" />
                <div className="grid sm:grid-cols-2 gap-4">
                  {detail.images.map((img, i) => (
                    <figure key={i}>
                      <div className="w-full aspect-video rounded-lg border border-dashed border-[var(--border)] bg-[var(--surface)] flex flex-col items-center justify-center gap-2 text-[var(--border)] hover:border-[var(--green-20)] transition-colors">
                        <ImagePlaceholderIcon />
                        <span className="font-mono text-xs text-center px-4 text-[var(--border)]">{img.alt}</span>
                      </div>
                      {img.caption && (
                        <figcaption className="font-mono text-xs text-[var(--text-muted)] mt-2 text-center">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
                <p className="font-mono text-xs text-[var(--text-muted)] mt-4">
                  Drop images into{" "}
                  <code className="text-[var(--text-2)]">public/projects/{project.id}/</code>{" "}
                  and update the <code className="text-[var(--text-2)]">images</code> array in{" "}
                  <code className="text-[var(--text-2)]">src/data/projects.ts</code>.
                </p>
              </section>
            )}

            <section className="fade-up fade-delay-4">
              <SectionHeader label="Challenge & Outcome" />
              <div className="space-y-6">
                <div className="border-l-2 border-[var(--green-40)] pl-5">
                  <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2">
                    The Challenge
                  </p>
                  <p className="text-[var(--text-2)] leading-relaxed">{detail.challenge}</p>
                </div>
                <div className="border-l-2 border-[var(--green)] pl-5">
                  <p className="font-mono text-xs text-[var(--green)] uppercase tracking-widest mb-2">
                    The Outcome
                  </p>
                  <p className="text-[var(--text-2)] leading-relaxed">{detail.outcome}</p>
                </div>
              </div>
            </section>

          </div>
        )}

        <div className="mt-20 pt-8 border-t border-[var(--border)]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--green)] transition-colors group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
            Back to all projects
          </Link>
        </div>

      </div>
    </main>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-mono text-xs text-[var(--green)] uppercase tracking-widest">{label}</span>
      <div className="flex-1 h-px bg-[var(--border)]" />
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function ImagePlaceholderIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}
