import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-6 pt-14">
      <div className="max-w-5xl mx-auto w-full py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--text)] tracking-tight mb-4">
          Page not found
        </h1>
        <p className="text-[var(--text-2)] mb-10">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="text-sm px-5 py-3 bg-[var(--accent-strong)] text-white font-semibold rounded-lg hover:bg-[var(--accent-dim)] transition-colors"
          >
            ← Home
          </Link>
          <Link
            href="/projects"
            className="text-sm px-5 py-3 border border-[var(--border)] text-[var(--text-body)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
