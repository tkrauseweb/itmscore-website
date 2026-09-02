import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "./sections.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://itmscore.de"),
  title: "ITMS Core – IT-Inventar für kleine Teams",
  description: "IT-Geräte, Wartungen und Aufgaben übersichtlich verwalten – sicher gehostet und persönlich eingerichtet.",
  openGraph: {
    title: "ITMS Core – IT-Inventar für kleine Teams",
    description: "IT-Geräte, Wartungen und Aufgaben übersichtlich verwalten.",
    images: ["/og.png"],
    locale: "de_DE",
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body className={geist.variable}>{children}</body></html>;
}
