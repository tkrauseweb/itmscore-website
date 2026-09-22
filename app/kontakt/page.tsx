import type { Metadata } from "next";
import ContactForm from "../contact-form";
import { PageHero, SiteFooter, SiteHeader } from "../site-components";

export const metadata: Metadata = {
  title: "Kontakt | ITMScore",
  description: "Kontakt zum ITMScore-Projekt und seinem Entwickler.",
};

export default function Contact() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Kontakt"
        title="Fragen zum Projekt?"
        text="Für Rückfragen zu ITMScore, zur technischen Umsetzung oder zu meinem Entwicklungsweg erreichst du mich per E-Mail."
      />
      <section className="contact contact-page">
        <div>
          <h2>Direkter Kontakt</h2>
          <div className="contact-details">
            <span><strong>E-Mail</strong><a href="mailto:kontakt@itmscore.de">kontakt@itmscore.de</a></span>
            <span><strong>Themen</strong>Projekt, Entwicklung und technischer Betrieb</span>
            <span><strong>Hinweis</strong>Aktuell keine Onlinebestellung und kein öffentliches Verkaufsangebot</span>
          </div>
        </div>
        <div className="contact-box">
          <h3>Nachricht vorbereiten</h3>
          <p>
            Das Formular öffnet dein E-Mail-Programm mit einer vorbereiteten Nachricht.
            Es übermittelt keine Angaben automatisch an diese Website.
          </p>
          <ContactForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
