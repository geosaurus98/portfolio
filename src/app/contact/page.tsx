import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — George Johnson",
  description: "Get in touch with George Johnson — Mechatronics Engineer.",
};

const contactItems = [
  {
    label: "Email",
    value: "george.johnson@outlook.co.nz",
    href: "mailto:george.johnson@outlook.co.nz",
  },
  {
    label: "GitHub",
    value: "github.com/geosaurus98",
    href: "https://github.com/geosaurus98",
  },
  {
    label: "Location",
    value: "Christchurch, New Zealand",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-14 flex flex-col justify-center">
      <div className="max-w-2xl mx-auto px-6 py-16 w-full">
        <p className="font-mono text-sm mb-4 fade-up fade-delay-0">
          <span className="text-[var(--text-muted)]">~/portfolio</span>
          <span className="text-[var(--text-body)]"> $ </span>
          <span className="text-[var(--green)]">contact --info</span>
        </p>
        <h1 className="text-3xl font-bold text-[var(--text)] mb-3 fade-up fade-delay-1">
          Get in touch
        </h1>
        <p className="text-[var(--text-2)] mb-10 fade-up fade-delay-2">
          Open to summer internships, graduate roles, and interesting engineering problems.
        </p>

        {/* CV Download */}
        <div className="mb-8 fade-up fade-delay-3">
          <a
            href="/George_Johnson_CV.pdf"
            download
            className="flex items-center gap-3 w-full p-4 border border-[var(--green-40)] rounded-lg bg-[var(--green-05)] hover:bg-[var(--green-10)] hover:border-[var(--green-70)] transition-colors group"
          >
            <span className="text-[var(--green)]">
              <DownloadIcon />
            </span>
            <div>
              <p className="font-mono text-sm font-semibold text-[var(--green)]">Download CV</p>
              <p className="font-mono text-xs text-[var(--text-muted)]">George_Johnson_CV.pdf</p>
            </div>
            <span className="ml-auto font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--green)] transition-colors">
              ↓
            </span>
          </a>
        </div>

        <div className="space-y-3 fade-up fade-delay-4">
          {contactItems.map(({ label, value, href }) => (
            <div
              key={label}
              className="flex items-center gap-6 p-4 border border-[var(--border)] rounded-lg bg-[var(--surface)] hover:border-[var(--green-40)] transition-colors"
            >
              <span className="font-mono text-xs text-[var(--text-muted)] w-16 shrink-0">
                {label}
              </span>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-mono text-sm text-[var(--text-body)] hover:text-[var(--green)] transition-colors"
                >
                  {value}
                </a>
              ) : (
                <span className="font-mono text-sm text-[var(--text-2)]">{value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
