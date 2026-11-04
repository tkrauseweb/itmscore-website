import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-components";
import DemoClient from "./demo-client";

export const metadata: Metadata = { title: "Öffentliche Demo | ITMScore", description: "ITMScore sicher und ohne Anmeldung mit Beispieldaten kennenlernen." };

export default function DemoPage() {
  return <main><SiteHeader /><PageHero eyebrow="Öffentliche Demo" title="Ausprobieren, ohne private Daten zu sehen." text="Die Demo zeigt typische Ansichten mit frei erfundenen Daten. Suche nach Geräten und ändere Aufgabenstatus direkt im Browser – ohne Anmeldung oder Verbindung zum produktiven System." /><section className="demo-section"><DemoClient /><p className="demo-caption">Hinweis: Diese vereinfachte Vorschau arbeitet ausschließlich im Browser mit Beispieldaten. Änderungen werden nicht gespeichert und nach dem Neuladen zurückgesetzt. Es gibt keine Verbindung zum produktiven System.</p></section><SiteFooter /></main>;
}
