"use client";

import { useState } from "react";

const views = {
  overview: {
    label: "Übersicht",
    title: "Guten Tag – hier ist der Demo-Bestand.",
    intro: "Die Kennzahlen zeigen, wo aktuell Handlungsbedarf besteht.",
    cards: [
      ["Geräte", "12", "10 aktiv"],
      ["Wartungen", "2", "diese Woche"],
      ["Updates", "0", "kritisch"],
      ["Aufgaben", "4", "noch offen"],
    ],
  },
  devices: {
    label: "Geräte",
    title: "Inventar mit klaren Zuständen.",
    intro: "Beispielgeräte lassen sich einem Typ, Standort und Status zuordnen.",
    columns: ["Gerät", "Typ", "Standort", "Status"],
    rows: [
      ["Demo-Server", "Server", "Technikraum", "Aktiv"],
      ["Demo-Notebook", "Notebook", "Arbeitsplatz 1", "Aktiv"],
      ["Demo-Switch", "Netzwerk", "Technikraum", "Wartung"],
    ],
  },
  tasks: {
    label: "Aufgaben",
    title: "Aufgaben nach Priorität ordnen.",
    intro: "Offene Arbeiten bleiben mit Status und Termin nachvollziehbar.",
    columns: ["Aufgabe", "Priorität", "Termin", "Status"],
    rows: [
      ["Backup prüfen", "Hoch", "Heute", "Offen"],
      ["Router aktualisieren", "Mittel", "Mittwoch", "Geplant"],
      ["Inventar ergänzen", "Niedrig", "Freitag", "In Arbeit"],
    ],
  },
  operation: {
    label: "Betrieb",
    title: "Sicherer Betrieb gehört dazu.",
    intro: "Auch die Infrastruktur hinter der Anwendung wird geplant und dokumentiert.",
    columns: ["Bereich", "Aufgabe", "Rhythmus", "Status"],
    rows: [
      ["HTTPS", "Verschlüsselte Verbindung", "Aktiv", "OK"],
      ["Firewall", "Nur benötigte Ports", "Aktiv", "OK"],
      ["Backup", "Automatisierte Sicherung", "Täglich", "Geplant"],
    ],
  },
} as const;

type ViewKey = keyof typeof views;

export default function DemoClient() {
  const [active, setActive] = useState<ViewKey>("overview");
  const view = views[active];

  return (
    <div className="demo-shell">
      <aside className="demo-nav" aria-label="Demo-Bereiche">
        <div className="demo-nav-title"><span>IS</span><b>Demo</b></div>
        {(Object.keys(views) as ViewKey[]).map((key) => (
          <button
            type="button"
            key={key}
            className={active === key ? "active" : ""}
            aria-pressed={active === key}
            onClick={() => setActive(key)}
          >
            {views[key].label}
          </button>
        ))}
      </aside>
      <div className="demo-workspace">
        <div className="demo-toolbar"><span>ITMScore · Öffentliche Vorschau</span><b>Nur Beispieldaten</b></div>
        <div className="demo-content">
          <p className="eyebrow">{view.label}</p>
          <h2>{view.title}</h2>
          <p className="demo-intro">{view.intro}</p>
          {"cards" in view ? (
            <div className="demo-metrics">
              {view.cards.map(([label, value, detail]) => (
                <article key={label}><span>{label}</span><strong>{value}</strong><small>{detail}</small></article>
              ))}
            </div>
          ) : (
            <div className="demo-table" role="table" aria-label={`${view.label} mit Beispieldaten`}>
              <div className="demo-row demo-row-header" role="row">
                {view.columns.map((column) => <span role="columnheader" key={column}>{column}</span>)}
              </div>
              {view.rows.map((row) => (
                <div className="demo-row" role="row" key={row[0]}>
                  {row.map((cell, index) => (
                    <span role="cell" key={cell} className={index === 0 ? "primary" : ""}>{cell}</span>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
