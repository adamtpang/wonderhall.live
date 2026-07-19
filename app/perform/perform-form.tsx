"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "done" | "error";

const inputClass =
  "w-full bg-[var(--dusk)] border rounded-md px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-3)] " +
  "focus:outline-none focus:border-[var(--aurora)] transition-colors";
const inputStyle = { borderColor: "var(--line)" } as const;

const labelClass = "block wh-eyebrow mb-2";

export default function PerformForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    try {
      const res = await fetch("/api/perform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="text-center py-8">
        <p className="wh-h2 mb-3">You&apos;re on the list</p>
        <p className="wh-body text-center">
          We run auditions before every show. We&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* honeypot, hidden from humans, catches bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] w-px h-px opacity-0"
      />

      <div>
        <label htmlFor="name" className={labelClass}>
          Your name
        </label>
        <input id="name" name="name" type="text" required maxLength={120} className={inputClass} style={inputStyle} placeholder="Jane Doe" />
      </div>

      <div>
        <label htmlFor="contact" className={labelClass}>
          How to reach you
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          maxLength={200}
          className={inputClass}
          style={inputStyle}
          placeholder="WhatsApp, Discord, email…"
        />
      </div>

      <div>
        <label htmlFor="act" className={labelClass}>
          What you do
        </label>
        <input
          id="act"
          name="act"
          type="text"
          required
          maxLength={200}
          className={inputClass}
          style={inputStyle}
          placeholder="Singer, guitarist, dancer, DJ…"
        />
      </div>

      <div>
        <label htmlFor="link" className={labelClass}>
          A link to your music or a clip{" "}
          <span style={{ color: "var(--text-3)" }}>(optional)</span>
        </label>
        <input id="link" name="link" type="text" maxLength={300} className={inputClass} style={inputStyle} placeholder="YouTube, IG, SoundCloud…" />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          What would you play?{" "}
          <span style={{ color: "var(--text-3)" }}>(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          maxLength={1000}
          className={inputClass + " resize-none"}
          style={inputStyle}
          placeholder="A song, a set, an idea…"
        />
      </div>

      {status === "error" && (
        <p className="wh-body" style={{ color: "var(--flame)" }}>
          Something went wrong. Try again, or message us on Discord.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="wh-btn w-full disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ fontSize: "0.8125rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
      >
        {status === "submitting" ? "Sending…" : "Raise your hand"}
      </button>
    </form>
  );
}
