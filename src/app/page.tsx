import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { skills } from "@/data/skills";

export default function Home() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────── */}
      <section className="min-h-screen grid-bg flex flex-col justify-center px-6 pt-14">
        <div className="max-w-5xl mx-auto w-full py-24">

          <p className="font-mono text-sm mb-6 fade-up fade-delay-0">
            <span className="text-[var(--text-muted)]">~/portfolio</span>
            <span className="text-[var(--text-body)]"> $ </span>
            <span className="text-[var(--green)]">whoami</span>
          </p>

          <h1 className="font-mono text-5xl md:text-7xl font-bold text-[var(--text)] tracking-tight leading-tight fade-up fade-delay-1">
            George Johnson
            <span className="inline-block w-[3px] h-12 md:h-16 bg-[var(--green)] ml-2 align-bottom cursor-blink" />
          </h1>

          <div className="mt-6 mb-8 flex flex-wrap gap-2 fade-up fade-delay-2">
            {["Mechatronics Engineer", "Embedded Systems", "Robotics", "Control Engineering"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1 border border-[var(--border)] text-[var(--green)] rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[var(--text-2)] text-lg max-w-2xl leading-relaxed mb-10 fade-up fade-delay-3">
            Final-year Mechatronics Engineering student at the{" "}
            <span className="text-[var(--text-body)]">University of Canterbury</span>,
            Christchurch, NZ. Building embedded systems, autonomous robots, and
            firmware that works in the real world.
          </p>

          <div className="flex flex-wrap gap-3 fade-up fade-delay-4">
            <Link
              href="/projects"
              className="font-mono text-sm px-5 py-3 bg-[var(--green)] text-[#0a0a0a] font-semibold rounded hover:bg-[var(--green-dim)] transition-colors"
            >
              View Projects →
            </Link>
            <Link
              href="/experience"
              className="font-mono text-sm px-5 py-3 border border-[var(--border)] text-[var(--text-body)] rounded hover:border-[var(--green)] hover:text-[var(--green)] transition-colors"
            >
              Experience
            </Link>
            <a
              href="/George_Johnson_CV.pdf"
              download
              className="font-mono text-sm px-5 py-3 border border-[var(--border)] text-[var(--text-body)] rounded hover:border-[var(--green)] hover:text-[var(--green)] transition-colors"
            >
              Download CV ↓
            </a>
          </div>

          <div className="mt-20 pt-8 border-t border-[var(--border)] fade-up fade-delay-5">
            <p className="font-mono text-xs text-[var(--text-muted)]">
              <span className="text-[var(--green)]">●</span>{" "}
              Available for summer internships — Christchurch, NZ ·{" "}
              <a
                href="https://github.com/geosaurus98"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-body)] transition-colors"
              >
                github.com/geosaurus98
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Skills ─────────────────────────────── */}
      <section className="border-t border-[var(--border)] px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <p className="font-mono text-sm mb-4">
              <span className="text-[var(--text-muted)]">~/portfolio</span>
              <span className="text-[var(--text-body)]"> $ </span>
              <span className="text-[var(--green)]">cat skills.json</span>
            </p>
            <h2 className="text-2xl font-bold text-[var(--text)] mb-10">Skills</h2>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, i) => (
              <AnimateIn key={group.category} delay={i * 60}>
                <div className="border border-[var(--border)] rounded-lg p-5 bg-[var(--surface)] h-full">
                  <h3 className="font-mono text-xs text-[var(--green)] uppercase tracking-widest mb-4">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-2 py-1 bg-[var(--tag-bg)] text-[var(--text-2)] rounded hover:text-[var(--text-body)] transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
