"use client";

import { useState } from "react";

type TaskStatus = "Offen" | "Geplant" | "In Arbeit" | "Erledigt";

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
    intro: "Eine Auswahl aus dem fiktiven Gerätebestand. Suche nach Geräten, Typen oder Standorten.",
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
      ["Zugänge prüfen", "Mittel", "Donnerstag", "Offen"],
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
const initialTasks = views.tasks.rows.map(([title, priority, due, status]) => ({ title, priority, due, status: status as TaskStatus }));
const taskStatuses: TaskStatus[] = ["Offen", "Geplant", "In Arbeit", "Erledigt"];

export default function DemoClient() {
  const [active, setActive] = useState<ViewKey>("overview");
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState(initialTasks);
  const view = views[active];
  const openTasks = tasks.filter((task) => task.status !== "Erledigt").length;

  function resetDemo() {
    setActive("overview");
    setQuery("");
    setTasks(initialTasks.map((task) => ({ ...task })));
  }

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
        <div className="demo-toolbar">
          <span>ITMScore · Öffentliche Vorschau</span>
          <div className="demo-toolbar-actions">
            <b>Nur Beispieldaten</b>
            <button type="button" onClick={resetDemo}>Zurücksetzen</button>
          </div>
        </div>
        <div className="demo-content">
          <p className="eyebrow">{view.label}</p>
          <h2>{view.title}</h2>
          <p className="demo-intro">{view.intro}</p>
          {active === "devices" && (
            <label className="demo-search">
              Geräte suchen
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Name, Typ oder Standort"
              />
            </label>
          )}
          {active === "tasks" && <p className="demo-help">Du kannst den Status jeder Aufgabe ändern. Die Änderungen sind nur in dieser Demo-Sitzung sichtbar.</p>}
          {"cards" in view ? (
            <div className="demo-metrics">
              {view.cards.map(([label, value, detail]) => (
                <article key={label}><span>{label}</span><strong>{label === "Aufgaben" ? openTasks : value}</strong><small>{label === "Aufgaben" && openTasks === 0 ? "alle erledigt" : detail}</small></article>
              ))}
            </div>
          ) : (
            <div className="demo-table" role="table" aria-label={`${view.label} mit Beispieldaten`}>
              <div className="demo-row demo-row-header" role="row">
                {view.columns.map((column) => <span role="columnheader" key={column}>{column}</span>)}
              </div>
              {active === "tasks" ? tasks.map((task) => (
                <div className="demo-row" role="row" key={task.title}>
                  <span role="cell" className="primary">{task.title}</span>
                  <span role="cell">{task.priority}</span>
                  <span role="cell">{task.due}</span>
                  <span role="cell">
                    <select
                      aria-label={`Status für ${task.title}`}
                      value={task.status}
                      onChange={(event) => {
                        const next = event.target.value as TaskStatus;
                        setTasks((current) => current.map((item) => item.title === task.title ? { ...item, status: next } : item));
                      }}
                    >
                      {taskStatuses.map((status) => <option key={status} value={status}>{status}</option>)}
                    </select>
                  </span>
                </div>
              )) : view.rows.filter((row) => active !== "devices" || row.join(" ").toLocaleLowerCase("de").includes(query.trim().toLocaleLowerCase("de"))).map((row) => (
                <div className="demo-row" role="row" key={row[0]}>
                  {row.map((cell, index) => (
                    <span role="cell" key={index} className={index === 0 ? "primary" : ""}>{cell}</span>
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
