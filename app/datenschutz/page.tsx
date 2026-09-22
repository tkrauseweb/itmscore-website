import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-components";

export const metadata: Metadata = { title: "Datenschutz | ITMScore" };

export default function Privacy() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutz"
        text="Informationen zur Verarbeitung personenbezogener Daten auf der öffentlichen ITMScore-Projektseite."
      />
      <section className="legal-page">
        <h2>1. Verantwortlicher</h2>
        <p>Tim Krause<br />Am See 30<br />18059 Papendorf<br />Deutschland</p>
        <p>E-Mail: <a href="mailto:kontakt@itmscore.de">kontakt@itmscore.de</a></p>

        <h2>2. Bereitstellung der Website</h2>
        <p>
          Beim Aufruf dieser Website werden technisch erforderliche Verbindungsdaten verarbeitet.
          Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene Adresse,
          übertragene Datenmenge, Browser- und Betriebssystemangaben sowie die zuvor besuchte Seite gehören.
        </p>
        <p>
          Die Verarbeitung erfolgt, soweit erforderlich, zur sicheren und fehlerfreien Bereitstellung
          der Website sowie zur Abwehr von Missbrauch. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          Das berechtigte Interesse liegt im zuverlässigen und sicheren Betrieb dieser Projektseite.
        </p>

        <h2>3. Hosting</h2>
        <p>
          Die öffentliche Projektseite wird über OpenAI Sites und die dazugehörige technische
          Auslieferungsinfrastruktur bereitgestellt. Dabei können die unter Abschnitt 2 genannten
          Daten verarbeitet werden. Soweit eine Verarbeitung außerhalb des Europäischen Wirtschaftsraums
          stattfindet, erfolgt sie auf Grundlage der jeweils anwendbaren gesetzlichen Übermittlungsmechanismen.
        </p>

        <h2>4. Kontakt per E-Mail</h2>
        <p>
          Das Kontaktformular übermittelt keine Daten automatisch an diese Website. Beim Absenden wird
          das auf deinem Gerät eingerichtete E-Mail-Programm mit einer vorbereiteten Nachricht geöffnet.
          Erst wenn du die Nachricht dort selbst versendest, werden deine Angaben per E-Mail verarbeitet.
        </p>
        <p>
          Bei einer Kontaktaufnahme verarbeite ich deine E-Mail-Adresse, deinen Namen und den Inhalt der
          Nachricht, um dein Anliegen zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO;
          soweit die Anfrage auf eine mögliche vertragliche Zusammenarbeit gerichtet ist, zusätzlich
          Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet
          ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2>5. Cookies, Analyse und Verkauf</h2>
        <p>
          Diese Projektseite verwendet keine Analyse-, Werbe- oder Trackingdienste und bietet keine
          Onlinebestellung oder Zahlungsabwicklung an. Die Website setzt selbst keine optionalen Marketing-Cookies.
        </p>

        <h2>6. Deine Rechte</h2>
        <p>
          Du hast im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung,
          Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem
          kannst du dich bei einer Datenschutzaufsichtsbehörde beschweren.
        </p>

        <h2>7. Stand</h2>
        <p>Stand: September 2026</p>
      </section>
      <SiteFooter />
    </main>
  );
}
