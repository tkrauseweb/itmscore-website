import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "./sections.css";
import "./portfolio.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://itmscore.de"),
  title: "ITMScore – Praxisprojekt von Tim Krause",
  description: "Webbasiertes IT-Management-System für Inventar, Wartungen und Aufgaben – als persönliches Praxis- und Bewerbungsprojekt.",
  openGraph: {
    title: "ITMScore – Praxisprojekt von Tim Krause",
    description: "Von der Idee bis zum abgesicherten Betrieb: Entwicklung, Systemadministration und Dokumentation in einem Projekt.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ITMScore Praxisprojekt von Tim Krause" }],
    locale: "de_DE",
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body className={geist.variable}>{children}</body></html>;
}
