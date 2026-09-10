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
          <p className="hero-text">ITMS Core ist mein webbasiertes System für Inventar, Standorte, Wartungen und Aufgaben. Die öffentliche Demo zeigt das Konzept mit Beispieldaten – ohne Zugriff auf meine private Infrastruktur.</p>
          <div className="hero-actions"><Link className="button" href="/demo">Demo öffnen</Link><Link className="text-link" href="/referenz">Projektweg ansehen <span>→</span></Link></div>
          <div className="hero-note"><span>✓ React &amp; Node.js</span><span>✓ PostgreSQL &amp; Docker</span><span>✓ Ubuntu, HTTPS &amp; Backups</span></div>
        </div>
        <ProductPreview />
      </section>
      <section className="trust"><p>Technologien im Projekt</p><div><span>React</span><span>Node.js</span><span>PostgreSQL</span><span>Docker</span><span>Ubuntu Linux</span></div></section>
      <section className="home-paths">
        <div className="section-heading"><p className="eyebrow">ITMS Core</p><h2>Aus einer Idee wurde ein laufendes System.</h2><p>Die Seite zeigt die Oberfläche, die wichtigsten Funktionen und was ich bei Entwicklung und Betrieb umgesetzt habe.</p></div>
        <div className="path-grid">
          <Link href="/demo"><span>01</span><h3>Demo</h3><p>Eine sichere, interaktive Vorschau mit frei erfundenen Beispieldaten.</p><b>Demo ausprobieren →</b></Link>
          <Link href="/produkt"><span>02</span><h3>Funktionen</h3><p>Inventar, Wartungen, Updates und Aufgaben übersichtlich erklärt.</p><b>Funktionen ansehen →</b></Link>
          <Link href="/referenz"><span>03</span><h3>Projektweg</h3><p>Meine Aufgaben, die Architektur und der abgesicherte Betrieb.</p><b>Projektweg ansehen →</b></Link>
        </div>
      </section>
      <section className="home-cta"><div><p className="eyebrow">Bewerbungsprojekt</p><h2>Was ich selbst umgesetzt habe.</h2><p>Von Anforderungen und Tests bis zur Serverkonfiguration, Dokumentation und Datensicherung.</p></div><Link className="button" href="/referenz">Meine Arbeit ansehen</Link></section>
      <SiteFooter />
    </main>
  );
}
