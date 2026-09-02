import Link from "next/link";

export function SiteHeader() {
  return <header className="site-header"><Link className="brand" href="/" aria-label="ITMS Core Startseite"><span className="brand-mark">IC</span><span><strong>ITMS Core</strong><small>IT-Management-System</small></span></Link><nav aria-label="Hauptnavigation"><Link href="/produkt">Produkt</Link><Link href="/loesungen">Lösungen</Link><Link href="/referenz">Referenz</Link><Link href="/preise">Preise</Link><Link href="/kontakt">Kontakt</Link></nav><a className="button button-small" href="https://itmscore.de/login">Zur Anwendung</a></header>;
}

export function SiteFooter() {
  return <footer><Link className="brand" href="/"><span className="brand-mark">IC</span><span><strong>ITMS Core</strong><small>IT-Management-System</small></span></Link><p>IT-Inventar für kleine Teams.</p><div><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div></footer>;
}

export function ProductPreview() {
  return <div className="product-frame" aria-label="Vorschau des ITMS Core Dashboards"><div className="preview-sidebar"><div className="preview-logo"><span>IC</span> ITMS Core</div>{["Dashboard","Inventar","Standorte","Netzwerk","Wartung","Aufgaben"].map((item,i)=><div className={`preview-nav ${i===0?"active":""}`} key={item}>{item}</div>)}</div><div className="preview-main"><div className="preview-top"><span>Systemübersicht</span><b>System online</b></div><div className="preview-title"><small>ÜBERSICHT</small><strong>ITMS Core Dashboard</strong><span>Inventar, Wartung und Aufgaben auf einen Blick.</span></div><div className="preview-grid">{[["Hardware","12 Geräte"],["Wartung","2 geplant"],["Updates","0 kritisch"],["Aufgaben","4 offen"]].map(([title,value])=><div className="preview-card" key={title}><small>{title}</small><strong>{value}</strong><span className="preview-line" /><span className="preview-line short" /></div>)}</div></div></div>;
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="subpage-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p></section>;
}
