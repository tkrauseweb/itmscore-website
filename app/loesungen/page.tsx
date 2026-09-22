import type { Metadata } from "next";
import Link from "../safe-link";
import { PageHero, SiteFooter, SiteHeader } from "../site-components";

export const metadata: Metadata = { title: "Lernfelder | ITMScore", description: "Erfahrungen aus Entwicklung, Systemadministration und Dokumentation." };
const areas = [["Webentwicklung", "Eine Oberfläche und eine API als zusammenhängende Anwendung planen und umsetzen.", ["React-Frontend", "Node.js-Backend", "PostgreSQL-Datenmodell"]], ["Linux & Betrieb", "Die Anwendung auf einem eigenen Ubuntu-VPS bereitstellen und zuverlässig betreiben.", ["Docker Compose", "HTTPS und Firewall", "Updates und Backups"]], ["IT-Dokumentation", "Geräte, Wartungen und technische Entscheidungen nachvollziehbar festhalten.", ["Strukturierte Inventardaten", "Aufgaben und Prüfschritte", "Versionen und Änderungen"]]];

export default function LearningAreas() {
  return <main><SiteHeader /><PageHero eyebrow="Lernfelder" title="Entwicklung und Betrieb gehören zusammen." text="Das Projekt verbindet Programmierung mit den Aufgaben, die im echten IT-Betrieb wichtig sind: planen, testen, absichern und dokumentieren." /><section className="solution-grid">{areas.map(([title, text, items]) => <article key={title as string}><span>Erfahrung aus dem Projekt</span><h2>{title as string}</h2><p>{text as string}</p><ul>{(items as string[]).map(item => <li key={item}>{item}</li>)}</ul></article>)}</section><section className="home-cta"><div><p className="eyebrow">Projektweg</p><h2>Technik mit nachvollziehbaren Entscheidungen.</h2><p>Mehr über meine Aufgaben, die Architektur und den abgesicherten Betrieb.</p></div><Link className="button" href="/referenz">Projektweg ansehen</Link></section><SiteFooter /></main>;
}
