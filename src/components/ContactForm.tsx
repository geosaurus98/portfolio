"use client";

import { FormEvent, useState } from "react";

// Create a free form at formspree.io and set NEXT_PUBLIC_FORMSPREE_ID to its ID
// (the part after /f/ in the form's endpoint). Without it the form is hidden.
const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full font-mono text-sm px-3 py-2.5 rounded border border-[var(--border)] bg-[var(--surface)] text-[var(--text-body)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--green)] transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  if (!formId) return null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Formspree returned ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mb-8 p-4 border border-[var(--green-40)] rounded-lg bg-[var(--green-05)]" role="status">
        <p className="font-mono text-sm text-[var(--green)]">Message sent — thanks! I’ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="block font-mono text-xs text-[var(--text-muted)] mb-1.5">Name</span>
          <input name="name" required autoComplete="name" className={inputClass} />
        </label>
        <label className="block">
          <span className="block font-mono text-xs text-[var(--text-muted)] mb-1.5">Email</span>
          <input name="email" type="email" required autoComplete="email" className={inputClass} />
        </label>
      </div>
      <label className="block">
        <span className="block font-mono text-xs text-[var(--text-muted)] mb-1.5">Message</span>
        <textarea name="message" required rows={5} className={`${inputClass} resize-y`} />
      </label>
      {/* Honeypot: hidden from people, filled in by bots, ignored by Formspree */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="font-mono text-sm px-5 py-2.5 bg-[var(--green)] text-[#0a0a0a] font-semibold rounded hover:bg-[var(--green-dim)] transition-colors disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" && (
          <p className="font-mono text-xs text-red-500" role="alert">
            Something went wrong. Please email me directly instead.
          </p>
        )}
      </div>
    </form>
  );
}
