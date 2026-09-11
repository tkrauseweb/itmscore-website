"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("Deine Angaben werden verschlüsselt an meinen Server übertragen.");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setState("sending");
    setStatusMessage("Nachricht wird gesendet …");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });

      const result = await response.json().catch(() => null) as { error?: { message?: string } } | null;
      if (!response.ok) {
        throw new Error(result?.error?.message ?? "Die Nachricht konnte nicht gesendet werden.");
      }

      form.reset();
      setState("sent");
      setStatusMessage("Danke! Deine Nachricht wurde erfolgreich gesendet.");
    } catch (error) {
      setState("error");
      setStatusMessage(error instanceof Error ? error.message : "Die Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut.");
    }
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label>Name<input name="name" autoComplete="name" required /></label><label>E-Mail<input name="email" type="email" autoComplete="email" required /></label></div>
    <label>Worum geht es?<select name="context" defaultValue="" required><option value="" disabled>Bitte auswählen</option><option>Bewerbung und Portfolio</option><option>Technische Frage</option><option>Feedback zum Projekt</option><option>Sonstiges</option></select></label>
    <label>Deine Nachricht<textarea name="message" rows={5} minLength={10} maxLength={3000} required /></label>
    <label className="form-honeypot" aria-hidden="true">Website<input name="website" autoComplete="off" tabIndex={-1} /></label>
    <button className="button" type="submit" disabled={state === "sending"}>{state === "sending" ? "Wird gesendet …" : "Nachricht senden"}</button>
    <small className={`form-status form-status-${state}`} role="status" aria-live="polite">{statusMessage}</small>
  </form>;
}
