import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-components";
import DemoClient from "./demo-client";

export const metadata: Metadata = { title: "Öffentliche Demo | ITMScore", description: "ITMScore sicher und ohne Anmeldung mit Beispieldaten kennenlernen." };

export default function DemoPage() {
  return <main><SiteHeader /><PageHero eyebrow="Öffentliche Demo" title="Ausprobieren, ohne private Daten zu sehen." text="Die Demo zeigt typische Ansichten von ITMScore. Alle Geräte, Aufgaben und Kennzahlen sind frei erfunden; eine Anmeldung ist nicht erforderlich." /><section className="demo-section"><DemoClient /><p className="demo-caption">Hinweis: Dies ist eine vereinfachte Vorschau der Oberfläche. Sie stellt keine Verbindung zum produktiven System her.</p></section><SiteFooter /></main>;
}
