"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [prepared, setPrepared] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Anfrage zu ITMS Core");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nE-Mail: ${data.get("email")}\nUnternehmen: ${data.get("company") || "–"}\nGeräteumfang: ${data.get("assets")}\n\nUmgebung / Wunsch:\n${data.get("message")}`,
    );
    setPrepared(true);
    window.location.href = `mailto:kontakt@itmscore.de?subject=${subject}&body=${body}`;
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label>Name<input name="name" autoComplete="name" required /></label><label>E-Mail<input name="email" type="email" autoComplete="email" required /></label></div>
    <label>Unternehmen <span>(optional)</span><input name="company" autoComplete="organization" /></label>
    <label>Wie viele Geräte möchtest du verwalten?<select name="assets" defaultValue=""><option value="" disabled>Bitte auswählen</option><option>Bis 25 Geräte</option><option>26–50 Geräte</option><option>51–150 Geräte</option><option>Mehr als 150 Geräte</option></select></label>
    <label>Was möchtest du mit ITMS Core lösen?<textarea name="message" rows={5} required /></label>
    <button className="button" type="submit">Anfrage per E-Mail vorbereiten</button>
    <small>{prepared ? "Dein E-Mail-Programm wurde geöffnet." : "Die Angaben werden erst in deinem E-Mail-Programm versendet."}</small>
  </form>;
}
