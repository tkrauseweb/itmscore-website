import Link from "./safe-link";

const navigation = [
  { href: "/demo", label: "Demo" },
  { href: "/produkt", label: "Funktionen" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/referenz", label: "Projektweg" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="ITMScore Startseite">
        <span className="brand-mark">IS</span>
        <span>
          <strong>ITMScore</strong>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>{item.label}</Link>
        ))}
      </nav>

      <div className="header-actions">
        <Link className="button button-small" href="/demo">Demo öffnen</Link>
        <details className="mobile-nav">
          <summary aria-label="Navigation öffnen">Menü</summary>
          <nav aria-label="Mobile Navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand" href="/">
        <span className="brand-mark">IS</span>
        <span>
          <strong>ITMScore</strong>
        </span>
      </Link>
      <p>IT-Management als persönliches Referenzprojekt.</p>
      <div>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/kontakt">Kontakt</Link>
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </div>
    </footer>
  );
}

export function ProductPreview() {
  return (
    <div className="product-frame" aria-label="Vorschau des ITMScore Dashboards mit Beispieldaten">
      <span className="sample-badge">Beispieldaten</span>
      <div className="preview-sidebar">
        <div className="preview-logo"><span>IS</span> ITMScore</div>
        {["Dashboard", "Inventar", "Standorte", "Netzwerk", "Wartung", "Aufgaben"].map((item, index) => (
          <div className={`preview-nav ${index === 0 ? "active" : ""}`} key={item}>{item}</div>
        ))}
      </div>
      <div className="preview-main">
        <div className="preview-top"><span>Demo-Übersicht</span><b>System online</b></div>
        <div className="preview-title">
          <small>ÜBERSICHT</small>
          <strong>ITMScore Dashboard</strong>
          <span>Inventar, Wartung und Aufgaben auf einen Blick.</span>
        </div>
        <div className="preview-grid">
          {[
            ["Hardware", "12 Geräte"],
            ["Wartung", "2 geplant"],
            ["Updates", "0 kritisch"],
            ["Aufgaben", "4 offen"],
          ].map(([title, value]) => (
            <div className="preview-card" key={title}>
              <small>{title}</small>
              <strong>{value}</strong>
              <span className="preview-line" />
              <span className="preview-line short" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="subpage-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
