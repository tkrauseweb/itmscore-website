"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [prepared, setPrepared] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Nachricht zum ITMS-Core-Projekt");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nE-Mail: ${data.get("email")}\nBezug: ${data.get("context")}\n\nNachricht:\n${data.get("message")}`,
    );
    setPrepared(true);
    window.location.href = `mailto:kontakt@itmscore.de?subject=${subject}&body=${body}`;
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label>Name<input name="name" autoComplete="name" required /></label><label>E-Mail<input name="email" type="email" autoComplete="email" required /></label></div>
    <label>Worum geht es?<select name="context" defaultValue=""><option value="" disabled>Bitte auswählen</option><option>Bewerbung und Portfolio</option><option>Technische Frage</option><option>Feedback zum Projekt</option><option>Sonstiges</option></select></label>
    <label>Deine Nachricht<textarea name="message" rows={5} required /></label>
    <button className="button" type="submit">E-Mail vorbereiten</button>
    <small>{prepared ? "Dein E-Mail-Programm wurde geöffnet." : "Die Angaben werden erst in deinem E-Mail-Programm versendet."}</small>
  </form>;
}
