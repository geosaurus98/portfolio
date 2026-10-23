const links = [
  { label: "GitHub", href: "https://github.com/geosaurus98" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/george-johnson-nz" },
  { label: "Email", href: "mailto:george.johnson@outlook.co.nz" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="font-mono text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} George Johnson · Christchurch, New Zealand
        </p>
        <div className="flex gap-5">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--green)] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
