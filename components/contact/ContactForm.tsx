"use client";

import { type FormEvent, useState } from "react";

const needsOptions = ["Branding", "Website", "Marketing", "All"] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const need = String(data.get("need") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Anotherly Studio inquiry — ${business || name || "Project"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nBusiness: ${business}\nWhat you need: ${need}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:hello@anotherly.studio?subject=${subject}&body=${body}`;
    setStatus("opened");
  }

  return (
    <form className="jelly-contact-form max-w-xl border-0" onSubmit={handleSubmit}>
      <div className="jelly-contact-field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required className="jelly-contact-input" />
      </div>
      <div className="jelly-contact-field">
        <label htmlFor="contact-business">Business</label>
        <input
          id="contact-business"
          name="business"
          type="text"
          autoComplete="organization"
          className="jelly-contact-input"
        />
      </div>
      <div className="jelly-contact-field">
        <label htmlFor="contact-need">What you need</label>
        <select id="contact-need" name="need" className="jelly-contact-input" defaultValue="All">
          {needsOptions.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <div className="jelly-contact-field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={5} className="jelly-contact-input" required />
      </div>
      <button type="submit" className="jelly-cta-primary mt-2 w-full sm:w-auto">
        Submit
      </button>
      {status === "opened" ? (
        <p className="mt-3 text-xs text-[var(--text-muted)]">If your mail app didn&apos;t open, email us directly.</p>
      ) : null}
    </form>
  );
}
