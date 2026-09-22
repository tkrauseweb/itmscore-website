import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-components";

export const metadata: Metadata = { title: "Projektweg | ITMScore", description: "Aufgaben, Technik und Betrieb des Praxisprojekts ITMScore." };

export default function Reference() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Mein Projektweg"
        title="Von der Idee zum laufenden IT-System."
        text="Ich habe ITMScore als persönliches Praxisprojekt konzipiert und mit KI-Unterstützung umgesetzt. Anforderungen, Entscheidungen, Tests, Dokumentation und Betrieb liegen dabei in meiner Verantwortung."
      />

      <section className="reference-detail">
        <div>
          <p className="eyebrow">Meine Aufgaben</p>
          <h2>Planen, umsetzen und prüfen.</h2>
          <p>Im Projekt habe ich nicht nur Funktionen gesammelt, sondern den gesamten Weg bis zu einer abgesicherten Installation begleitet.</p>
          <ul>
            <li>Anforderungen und Datenstrukturen festgelegt</li>
            <li>Oberfläche und Abläufe schrittweise getestet</li>
            <li>Fehler dokumentiert und Versionen verbessert</li>
            <li>Ubuntu-VPS und Docker-Dienste eingerichtet</li>
            <li>SSH-Zugang, Firewall und HTTPS abgesichert</li>
            <li>Datensicherung und Wiederherstellung vorbereitet</li>
          </ul>
        </div>
        <div className="case-card">
          <div className="case-header"><span>Projektstand</span><b>Laufend</b></div>
          <dl>
            <div><dt>Anwendung</dt><dd>React &amp; Node.js</dd></div>
            <div><dt>Datenbank</dt><dd>PostgreSQL</dd></div>
            <div><dt>Betrieb</dt><dd>Ubuntu &amp; Docker</dd></div>
            <div><dt>Sicherheit</dt><dd>HTTPS, Firewall, Fail2ban</dd></div>
            <div><dt>Sicherung</dt><dd>Automatisierte Backups</dd></div>
          </dl>
        </div>
      </section>

      <section className="architecture-section" aria-labelledby="architecture-title">
        <div className="section-heading">
          <p className="eyebrow">Architektur &amp; Betrieb</p>
          <h2 id="architecture-title">Vom Browser bis zur Sicherung.</h2>
          <p>Die öffentliche Darstellung zeigt nur den technischen Aufbau. Adressen, Zugangsdaten und interne Konfigurationen bleiben geschützt.</p>
        </div>

        <div className="architecture-flow" aria-label="Technischer Weg vom Browser über den geschützten Zugang und die Anwendung bis zur Datenbank">
          <article><span>01</span><small>Zugriff</small><h3>Browser</h3><p>Öffentliche Projektseite und geschützter Zugang zur Anwendung.</p></article>
          <b aria-hidden="true">→</b>
          <article><span>02</span><small>Schutzschicht</small><h3>HTTPS &amp; Reverse Proxy</h3><p>Verschlüsselte Verbindung und kontrollierte Weiterleitung.</p></article>
          <b aria-hidden="true">→</b>
          <article><span>03</span><small>Anwendung</small><h3>React &amp; Node.js</h3><p>Die Anwendung läuft containerisiert in einer Docker-Umgebung.</p></article>
          <b aria-hidden="true">→</b>
          <article><span>04</span><small>Datenhaltung</small><h3>PostgreSQL</h3><p>Strukturierte Ablage für Inventar, Wartungen und Aufgaben.</p></article>
        </div>

        <div className="architecture-operations">
          <article><span>Betrieb</span><h3>Ubuntu-VPS absichern</h3><p>Firewall, Fail2ban, SSH-Zugang und regelmäßige Aktualisierungen begrenzen die Angriffsfläche.</p></article>
          <article><span>Sicherung</span><h3>Wiederherstellung vorbereiten</h3><p>Automatisierte Backups und dokumentierte Abläufe sichern Daten und Konfigurationen ab.</p></article>
        </div>
      </section>

      <section className="section process">
        <div className="section-heading"><p className="eyebrow">Vorgehensweise</p><h2>Schritt für Schritt weiterentwickelt.</h2></div>
        <ol>
          <li><span>1</span><h3>Bedarf klären</h3><p>Welche Geräte, Informationen und Aufgaben sollen verwaltet werden?</p></li>
          <li><span>2</span><h3>Aufbauen</h3><p>Oberfläche, API und Datenbank zu einem System verbinden.</p></li>
          <li><span>3</span><h3>Testen</h3><p>Abläufe prüfen, Fehler festhalten und verständlicher gestalten.</p></li>
          <li><span>4</span><h3>Betreiben</h3><p>Server absichern, Backups einrichten und den Zustand überwachen.</p></li>
        </ol>
      </section>

      <section className="reference-result">
        <p className="eyebrow">Aktueller Stand</p>
        <h2>Ein echtes Lernprojekt – transparent dargestellt.</h2>
        <p>ITMScore wird weiterentwickelt. Die öffentliche Demo verwendet ausschließlich Beispieldaten; die produktive Installation und meine private Infrastruktur bleiben geschützt.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
