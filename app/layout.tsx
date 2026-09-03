import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "./sections.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://itmscore.de"),
  title: "ITMS Core – IT-Management als Referenzprojekt",
  description: "Eigenentwickeltes webbasiertes IT-Management-System für Inventar, Standorte, Wartungen, Aufgaben und Berichte.",
  openGraph: {
    title: "ITMS Core – IT-Management als Referenzprojekt",
    description: "Vom Konzept bis zum abgesicherten produktiven Betrieb: ITMS Core dokumentiert IT-Infrastruktur übersichtlich.",
    images: ["/og.png"],
    locale: "de_DE",
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body className={geist.variable}>{children}</body></html>;
}
