import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-components";
export const metadata: Metadata = { title: "Impressum | ITMS Core" };
export default function Impressum(){return <main><SiteHeader/><PageHero eyebrow="Rechtliches" title="Impressum" text="Diese private Vorschau ist noch nicht öffentlich freigeschaltet."/><section className="legal-page"><h2>Angaben vor Veröffentlichung ergänzen</h2><p>Für das vollständige Impressum werden Name beziehungsweise Firmenname, ladungsfähige Anschrift, Kontaktangaben und – falls vorhanden – Unternehmens- und Steuerdaten benötigt.</p><p>Vor einer öffentlichen Freigabe werden diese Angaben geprüft und hier vollständig eingetragen.</p></section><SiteFooter/></main>}
