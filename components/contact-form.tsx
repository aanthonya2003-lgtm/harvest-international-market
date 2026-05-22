"use client";

import { useState, FormEvent } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setErrorMsg(
        `We couldn't send your message. Please call ${site.phone} or try again in a moment.`
      );
    }
  }

  if (status === "success") {
    return (
      <div className="p-10 border border-[var(--color-saffron)]/40 bg-[var(--color-saffron)]/[0.04] rounded-sm">
        <p className="eyebrow text-[var(--color-saffron)] mb-4">⟢ Message Received</p>
        <h3 className="display text-[2rem] leading-tight mb-3">
          Thank you. We'll be in touch.
        </h3>
        <p className="text-[14px] text-[var(--color-ink-dim)]">
          Our team responds during store hours ({site.hours.daily}). For
          immediate help, call{" "}
          <a
            href={`tel:${site.phoneRaw}`}
            className="text-[var(--color-saffron)] link-underline"
          >
            {site.phone}
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[12px] eyebrow text-[var(--color-ink-muted)] hover:text-[var(--color-saffron)] link-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="grid md:grid-cols-2 gap-5">
        <Field name="name" label="Name" required />
        <Field name="email" label="Email" type="email" required />
      </div>
      <Field name="phone" label="Phone" type="tel" />
      <Field name="message" label="Message" textarea required />

      {status === "error" && (
        <div className="p-4 border border-[var(--color-pomegranate)]/40 bg-[var(--color-pomegranate)]/[0.05] rounded-sm">
          <p className="text-[13px] text-[var(--color-ink-dim)]">{errorMsg}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <p className="text-[12px] text-[var(--color-ink-muted)]">
          Prefer to call?{" "}
          <a
            href={`tel:${site.phoneRaw}`}
            className="text-[var(--color-saffron)] link-underline"
          >
            {site.phone}
          </a>
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-3 px-7 py-3.5 bg-[var(--color-saffron)] text-[var(--color-bg)] text-[13px] font-medium tracking-wide rounded-sm hover:bg-[var(--color-saffron-soft)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
          {status !== "loading" && (
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  textarea = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "block w-full bg-transparent border-b border-[var(--color-line)] text-[15px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-muted)] px-0 py-3 focus:border-[var(--color-saffron)] focus:outline-none transition-colors";
  return (
    <label className="block group">
      <span className="eyebrow text-[10px] text-[var(--color-ink-muted)] group-focus-within:text-[var(--color-saffron)] transition-colors">
        {label}
        {required && <span className="text-[var(--color-saffron)]"> ·</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          className={`${base} resize-none mt-1`}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className={`${base} mt-1`}
        />
      )}
    </label>
  );
}
