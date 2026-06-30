import { experience, type ExperienceEntry } from "@/data/experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience — George Johnson",
  description: "Work experience and education — George Johnson, Mechatronics Engineer.",
};

export default function ExperiencePage() {
  const work = experience.filter((e) => e.type === "work");
  const education = experience.filter((e) => e.type === "education");

  return (
    <main className="min-h-screen pt-14">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="font-mono text-sm mb-4 fade-up fade-delay-0">
          <span className="text-[var(--text-muted)]">~/portfolio</span>
          <span className="text-[var(--text-body)]"> $ </span>
          <span className="text-[var(--green)]">cat experience.json</span>
        </p>
        <h1 className="text-3xl font-bold text-[var(--text)] mb-12 fade-up fade-delay-1">
          Experience & Education
        </h1>

        <section className="mb-16 fade-up fade-delay-2">
          <h2 className="font-mono text-[var(--green)] text-xs uppercase tracking-widest mb-8">
            // Work Experience
          </h2>
          <div>
            {work.map((entry, i) => (
              <TimelineEntry key={i} entry={entry} isLast={i === work.length - 1} />
            ))}
          </div>
        </section>

        <section className="fade-up fade-delay-3">
          <h2 className="font-mono text-[var(--green)] text-xs uppercase tracking-widest mb-8">
            // Education
          </h2>
          <div>
            {education.map((entry, i) => (
              <TimelineEntry key={i} entry={entry} isLast={i === education.length - 1} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function TimelineEntry({ entry, isLast }: { entry: ExperienceEntry; isLast: boolean }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-[var(--green)] mt-1.5 shrink-0" />
        {!isLast && <div className="w-px flex-1 bg-[var(--border)] mt-1" />}
      </div>

      <div className={`${isLast ? "pb-0" : "pb-10"} flex-1`}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
          <h3 className="font-semibold text-[var(--text)]">{entry.title}</h3>
          <span className="hidden sm:block text-[var(--border)]">·</span>
          <span className="font-mono text-xs text-[var(--green)]">{entry.period}</span>
        </div>
        <p className="text-sm text-[var(--text-muted)] mb-3">
          {entry.org} — {entry.location}
        </p>
        <ul className="space-y-1.5">
          {entry.points.map((point, i) => (
            <li key={i} className="text-sm text-[var(--text-2)] flex gap-2">
              <span className="text-[var(--green)] font-mono shrink-0 mt-px">›</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
