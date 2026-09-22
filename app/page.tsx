import Link from "./safe-link";
import { ProductPreview, SiteFooter, SiteHeader } from "./site-components";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Praxisprojekt von Tim Krause</p>
          <h1>IT verwalten.<br />Praxis zeigen.</h1>
          <p className="hero-text">
            ITMScore ist mein webbasiertes System für Inventar, Standorte, Wartungen und Aufgaben.
            Die öffentliche Demo zeigt das Konzept mit Beispieldaten – ohne Zugriff auf meine private Infrastruktur.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/demo">Demo öffnen</Link>
            <Link className="text-link" href="/portfolio">Portfolio ansehen <span>→</span></Link>
          </div>
          <div className="hero-note">
            <span>✓ React &amp; Node.js</span>
            <span>✓ PostgreSQL &amp; Docker</span>
            <span>✓ Linux, HTTPS &amp; Backups</span>
          </div>
        </div>
        <ProductPreview />
      </section>

      <section className="trust">
        <p>Technologien im Projekt</p>
        <div><span>React</span><span>Node.js</span><span>PostgreSQL</span><span>Docker</span><span>Linux</span></div>
      </section>

      <section className="home-paths">
        <div className="section-heading">
          <p className="eyebrow">ITMScore</p>
          <h2>Aus einer Idee wurde ein laufendes Praxisprojekt.</h2>
          <p>Die Seite verbindet einen schnellen Einblick mit technischen Details zu Entwicklung, Betrieb und Lernweg.</p>
        </div>
        <div className="path-grid">
          <Link href="/demo">
            <span>01</span><h3>Demo</h3>
            <p>Eine sichere, interaktive Vorschau mit frei erfundenen Beispieldaten.</p>
            <b>Demo ausprobieren →</b>
          </Link>
          <Link href="/referenz">
            <span>02</span><h3>Projektweg</h3>
            <p>Meine Aufgaben, die technischen Schwerpunkte und der Betrieb des Projekts.</p>
            <b>Projektweg ansehen →</b>
          </Link>
          <Link href="/portfolio">
            <span>03</span><h3>Portfolio</h3>
            <p>Ausbildung, Homelab, praktische Kenntnisse und mein wichtigstes Projekt.</p>
            <b>Portfolio ansehen →</b>
          </Link>
        </div>
      </section>

      <section className="home-cta">
        <div>
          <p className="eyebrow">Technisches Portfolio</p>
          <h2>Was ich aufbaue und dabei lerne.</h2>
          <p>Konkrete Projekte und Erfahrungen statt allgemeiner Selbstdarstellung.</p>
        </div>
        <Link className="button" href="/portfolio">Portfolio öffnen</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
