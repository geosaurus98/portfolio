import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-14">
        <div className="max-w-5xl mx-auto w-full py-24">
          <p className="text-sm font-medium text-[var(--accent)] mb-4 fade-up fade-delay-0">
            Mechatronics engineer · Christchurch, New Zealand
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--text)] tracking-tight leading-tight fade-up fade-delay-1">
            George Johnson
          </h1>

          <div className="mt-6 mb-8 flex flex-wrap gap-2 fade-up fade-delay-2">
            {["Firmware", "Embedded Linux", "Robotics", "Control Systems"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--accent-10)] text-[var(--accent)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[var(--text-2)] text-lg max-w-2xl leading-relaxed mb-5 fade-up fade-delay-3">
            I build software that connects sensors, machines, and people — from
            microcontroller firmware to embedded Linux systems.
          </p>
          <p className="text-[var(--text-2)] max-w-2xl leading-relaxed mb-10 fade-up fade-delay-3">
            I’m a final-year Mechatronics Engineering student at the{" "}
            <span className="text-[var(--text-body)]">University of Canterbury</span>{" "}
            in Christchurch, New Zealand. My projects span autonomous robotics,
            STM32 firmware, FPGA design, and a C-based surveying accessory.
            I enjoy modular design, practical testing, and working through
            hardware–software integration problems.
          </p>

          <div className="flex flex-wrap gap-3 fade-up fade-delay-4">
            <Link
              href="/projects"
              className="text-sm px-5 py-3 bg-[var(--accent-strong)] text-white font-semibold rounded-lg hover:bg-[var(--accent-dim)] transition-colors"
            >
              View Projects →
            </Link>
            <Link
              href="/experience"
              className="text-sm font-medium px-5 py-3 border border-[var(--border)] text-[var(--text-body)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              Experience
            </Link>
            <a
              href="mailto:george.johnson@outlook.co.nz?subject=CV%20request"
              className="text-sm font-medium px-5 py-3 border border-[var(--border)] text-[var(--text-body)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              Request CV ↗
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <p className="text-xs text-[var(--accent)] uppercase tracking-wider mb-4">
              Selected engineering work
            </p>
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">
              From sensor readings to system behaviour
            </h2>
            <p className="text-[var(--text-2)] max-w-2xl leading-relaxed mb-10">
              Three projects showing how I approach firmware architecture,
              control, and integration — including the constraints and what
              testing revealed.
            </p>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.filter((project) => project.featured).map((project, i) => (
              <AnimateIn key={project.id} delay={i * 60}>
                <Link
                  href={`/projects/${project.id}`}
                  className="block h-full border border-[var(--border)] rounded-lg p-5 bg-[var(--surface)] hover:border-[var(--accent)] transition-colors"
                >
                  <p className="text-xs text-[var(--accent)] mb-3">
                    {project.tags.slice(0, 2).join(" · ")}
                  </p>
                  <h3 className="font-semibold text-[var(--text)] mb-3">{project.title}</h3>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed mb-5">{project.description}</p>
                  <span className="text-xs text-[var(--accent)]">Read case study →</span>
                </Link>
              </AnimateIn>
            ))}
          </div>
          <Link href="/projects" className="inline-block mt-8 text-sm text-[var(--accent)] hover:underline">
            Explore all projects →
          </Link>
        </div>
      </section>

      {/* ── About ──────────────────────────────── */}
      <section className="border-t border-[var(--border)] px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10">
          <AnimateIn>
            <h2 className="text-2xl font-bold text-[var(--text)]">About me</h2>
          </AnimateIn>
          <AnimateIn delay={60}>
            <div className="space-y-4 text-[var(--text-2)] leading-relaxed max-w-2xl">
              <p>
                I came to mechatronics because I like seeing code make something
                physical happen. My favourite projects sit where firmware meets
                hardware: reading a sensor, closing a control loop, or tracking
                down why a board behaves differently on the bench than it does
                in simulation.
              </p>
              <p>
                Before engineering, I spent five years at McDonald’s, finishing
                as a department manager leading a team of 10+, and worked harvest
                seasons operating industrial hop machinery. An internship at
                Sharland Engineering put me on the workshop floor, welding,
                machining and assembling the kind of machines I now write
                software for. Today I also build VBA automation tools for a
                financial services firm.
              </p>
              <p>
                I’m looking for a graduate role in embedded systems, robotics or
                control engineering, where I can keep working across hardware and
                software and learn from experienced engineers.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Skills ─────────────────────────────── */}
      <section className="border-t border-[var(--border)] px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <h2 className="text-2xl font-bold text-[var(--text)] mb-10">Skills</h2>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, i) => (
              <AnimateIn key={group.category} delay={i * 60}>
                <div className="border border-[var(--border)] rounded-lg p-5 bg-[var(--surface)] h-full">
                  <h3 className="text-xs text-[var(--accent)] uppercase tracking-wider mb-4">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2 py-1 bg-[var(--tag-bg)] text-[var(--text-2)] rounded hover:text-[var(--text-body)] transition-colors"
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
