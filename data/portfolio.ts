export type PracticeArea = {
  title: string;
  summary: string;
  examples: string[];
};

export type Experience = {
  organization: string;
  role: string;
  period: string;
  details: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    title: "Linux und Server",
    summary: "Praktische Arbeit mit Debian, Ubuntu Server und Raspberry Pi OS.",
    examples: ["SSH und Benutzerverwaltung", "Dateirechte und Dienste", "Paketverwaltung und Bash"],
  },
  {
    title: "Netzwerke",
    summary: "Grundlagen und Aufbau kleiner Netzwerke im Homelab.",
    examples: ["IPv4, DNS und DHCP", "Router, Switches und WLAN", "Firewalls und Fehlersuche"],
  },
  {
    title: "Virtualisierung",
    summary: "Systeme getrennt aufbauen, testen und betreiben.",
    examples: ["Proxmox", "Virtuelle Maschinen", "Linux-Gastsysteme"],
  },
  {
    title: "Container",
    summary: "Anwendungen reproduzierbar bereitstellen und verwalten.",
    examples: ["Docker", "Docker Compose", "Service-Konfiguration"],
  },
  {
    title: "Webentwicklung",
    summary: "ITMScore als eigenes webbasiertes Praxisprojekt weiterentwickeln.",
    examples: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Dokumentation",
    summary: "Technische Systeme und Entscheidungen nachvollziehbar festhalten.",
    examples: ["Netzwerkdokumentation", "Knowledge Base", "Projektänderungen"],
  },
];

export const experiences: Experience[] = [
  {
    organization: "Grone Bildungszentrum MV in Rostock",
    role: "Ausbildung zum Fachinformatiker für Systemintegration",
    period: "Seit September 2026",
    details: ["Systemintegration", "Netzwerke und Administration", "Technische Dokumentation"],
  },
  {
    organization: "Stadtverwaltung Rostock",
    role: "Schülerpraktikum in der IT",
    period: "Praktikum",
    details: ["Windows-10-Laptops eingerichtet", "Mit iPads gearbeitet", "Einblicke in den IT-Betrieb"],
  },
  {
    organization: "Gesellschaft für Leit- und Regeltechnik mbH",
    role: "Praktikum in Software und IT",
    period: "Praktikum",
    details: ["Netzwerkdokumentation", "Patchfelder und Switch-Belegungen", "Knowledge Base und KNX-Recherche"],
  },
];

export const currentLearning = [
  "Linux-Systeme",
  "Netzwerke",
  "Docker",
  "Virtualisierung",
  "IT-Sicherheit",
];
