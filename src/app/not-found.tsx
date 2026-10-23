import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen grid-bg flex flex-col justify-center px-6 pt-14">
      <div className="max-w-5xl mx-auto w-full py-24">
        <p className="font-mono text-sm mb-6">
          <span className="text-[var(--text-muted)]">~/portfolio</span>
          <span className="text-[var(--text-body)]"> $ </span>
          <span className="text-[var(--green)]">cd this-page</span>
        </p>
        <h1 className="font-mono text-4xl md:text-6xl font-bold text-[var(--text)] tracking-tight mb-4">
          404
        </h1>
        <p className="font-mono text-sm text-[var(--text-2)] mb-10">
          cd: no such file or directory
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="font-mono text-sm px-5 py-3 bg-[var(--green)] text-[#0a0a0a] font-semibold rounded hover:bg-[var(--green-dim)] transition-colors"
          >
            ← Home
          </Link>
          <Link
            href="/projects"
            className="font-mono text-sm px-5 py-3 border border-[var(--border)] text-[var(--text-body)] rounded hover:border-[var(--green)] hover:text-[var(--green)] transition-colors"
          >
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
