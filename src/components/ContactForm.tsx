"use client";

import { useForm, ValidationError } from "@formspree/react";

// Formspree form IDs are public (they appear in the page either way).
// NEXT_PUBLIC_FORMSPREE_ID can point the form somewhere else without a code change.
const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "mrppznbz";

const inputClass =
  "w-full font-mono text-sm px-3 py-2.5 rounded border border-[var(--border)] bg-[var(--surface)] text-[var(--text-body)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--green)] aria-[invalid=true]:border-red-500 transition-colors";

const errorClass = "font-mono text-xs text-red-500 mt-1.5";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="mb-8 p-4 border border-[var(--green-40)] rounded-lg bg-[var(--green-05)]" role="status">
        <p className="font-mono text-sm text-[var(--green)]">Message sent. Thanks! I’ll get back to you soon.</p>
      </div>
    );
  }

  const hasError = (field: string) => (state.errors?.getFieldErrors(field).length ?? 0) > 0;

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4">
      <input type="hidden" name="_subject" value="Portfolio enquiry" />
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block font-mono text-xs text-[var(--text-muted)] mb-1.5">Name</label>
          <input id="contact-name" name="name" required autoComplete="name" className={inputClass} aria-invalid={hasError("name")} />
          <ValidationError field="name" prefix="Name" errors={state.errors} className={errorClass} />
        </div>
        <div>
          <label htmlFor="contact-email" className="block font-mono text-xs text-[var(--text-muted)] mb-1.5">Email</label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" className={inputClass} aria-invalid={hasError("email")} />
          <ValidationError field="email" prefix="Email" errors={state.errors} className={errorClass} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="block font-mono text-xs text-[var(--text-muted)] mb-1.5">Message</label>
        <textarea id="contact-message" name="message" required rows={5} className={`${inputClass} resize-y`} aria-invalid={hasError("message")} />
        <ValidationError field="message" prefix="Message" errors={state.errors} className={errorClass} />
      </div>
      {/* Honeypot: hidden from people, filled in by bots, ignored by Formspree */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state.submitting}
          className="font-mono text-sm px-5 py-2.5 bg-[var(--green)] text-[#0a0a0a] font-semibold rounded hover:bg-[var(--green-dim)] transition-colors disabled:opacity-60"
        >
          {state.submitting ? "Sending…" : "Send message"}
        </button>
        {/* Form-level errors (e.g. form not found, rate limit) */}
        <ValidationError errors={state.errors} className={errorClass} role="alert" />
      </div>
    </form>
  );
}
