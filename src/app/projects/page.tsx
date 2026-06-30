import { projects, type Project } from "@/data/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects — George Johnson",
  description: "Engineering projects across embedded systems, robotics, firmware, and software.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="min-h-screen pt-14">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="font-mono text-sm mb-4 fade-up fade-delay-0">
          <span className="text-[var(--text-muted)]">~/portfolio</span>
          <span className="text-[var(--text-body)]"> $ </span>
          <span className="text-[var(--green)]">ls projects/</span>
        </p>
        <h1 className="text-3xl font-bold text-[var(--text)] mb-2 fade-up fade-delay-1">Projects</h1>
        <p className="text-[var(--text-muted)] mb-12 fade-up fade-delay-2">
          Engineering projects across embedded systems, robotics, firmware, and software.
        </p>

        <div className="mb-3 fade-up fade-delay-3">
          <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest mb-4">// Featured</p>
          <div className="grid md:grid-cols-2 gap-4">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-8 fade-up fade-delay-4">
          <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest mb-4">// All projects</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`} className="block">
      <div className="card-lift border border-[var(--border)] rounded-lg p-5 bg-[var(--surface)] group flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h2 className="font-semibold text-[var(--text)] group-hover:text-[var(--green)] transition-colors">
              {project.title}
            </h2>
            {project.subtitle && (
              <p className="font-mono text-xs text-[var(--green)] mt-0.5">{project.subtitle}</p>
            )}
          </div>
          {project.github && (
            <span className="text-[var(--text-muted)] ml-4 shrink-0 mt-0.5" aria-hidden="true">
              <GitHubIcon />
            </span>
          )}
        </div>

        <p className="text-sm text-[var(--text-2)] leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2 py-0.5 bg-[var(--tag-bg)] text-[var(--tag-text)] rounded"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="font-mono text-xs px-2 py-0.5 text-[var(--text-muted)]">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
          <span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--green)] transition-colors shrink-0 ml-2">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}
