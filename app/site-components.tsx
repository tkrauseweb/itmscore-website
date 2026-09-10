import Link from "./safe-link";

export function SiteHeader() {
  return <header className="site-header"><Link className="brand" href="/" aria-label="ITMS Core Startseite"><span className="brand-mark">IC</span><span><strong>ITMS Core</strong><small>Praxisprojekt</small></span></Link><nav aria-label="Hauptnavigation"><Link href="/demo">Demo</Link><Link href="/produkt">Funktionen</Link><Link href="/loesungen">Lernfelder</Link><Link href="/referenz">Projektweg</Link><Link href="/kontakt">Kontakt</Link></nav><Link className="button button-small" href="/demo">Demo öffnen</Link></header>;
}

export function SiteFooter() {
  return <footer><Link className="brand" href="/"><span className="brand-mark">IC</span><span><strong>ITMS Core</strong><small>Praxisprojekt von Tim Krause</small></span></Link><p>IT-Management als persönliches Referenzprojekt.</p><div><Link href="/kontakt">Kontakt</Link><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div></footer>;
}

export function ProductPreview() {
  return <div className="product-frame" aria-label="Vorschau des ITMS Core Dashboards mit Beispieldaten"><span className="sample-badge">Beispieldaten</span><div className="preview-sidebar"><div className="preview-logo"><span>IC</span> ITMS Core</div>{["Dashboard", "Inventar", "Standorte", "Netzwerk", "Wartung", "Aufgaben"].map((item, i) => <div className={`preview-nav ${i === 0 ? "active" : ""}`} key={item}>{item}</div>)}</div><div className="preview-main"><div className="preview-top"><span>Demo-Übersicht</span><b>System online</b></div><div className="preview-title"><small>ÜBERSICHT</small><strong>ITMS Core Dashboard</strong><span>Inventar, Wartung und Aufgaben auf einen Blick.</span></div><div className="preview-grid">{[["Hardware", "12 Geräte"], ["Wartung", "2 geplant"], ["Updates", "0 kritisch"], ["Aufgaben", "4 offen"]].map(([title, value]) => <div className="preview-card" key={title}><small>{title}</small><strong>{value}</strong><span className="preview-line" /><span className="preview-line short" /></div>)}</div></div></div>;
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="subpage-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p></section>;
}
