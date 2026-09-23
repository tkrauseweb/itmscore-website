import type { Metadata } from "next";
import Link from "../safe-link";
import { SiteFooter, SiteHeader } from "../site-components";
import { currentLearning, experiences, practiceAreas } from "../../data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio von Tim Krause | ITMScore",
  description: "Technisches Portfolio von Tim Krause mit ITMScore, Homelab, Linux, Netzwerken und Systemintegration.",
};

const projectEvidence = [
  {
    label: "Bereitstellung",
    title: "Anwendung selbst betrieben",
    text: "Ubuntu-VPS und Docker-Dienste eingerichtet sowie den Zugriff über Reverse Proxy und HTTPS angebunden.",
  },
  {
    label: "Absicherung",
    title: "Zugänge bewusst begrenzt",
    text: "SSH-Zugang, Firewall und Fail2ban eingesetzt, um Dienste kontrolliert erreichbar zu machen.",
  },
  {
    label: "Datensicherung",
    title: "Wiederherstellung mitgedacht",
    text: "Automatisierte Backups eingerichtet und die notwendigen Schritte zur Wiederherstellung vorbereitet.",
  },
  {
    label: "Qualität",
    title: "Änderungen nachvollziehbar gemacht",
    text: "Abläufe getestet, Fehler dokumentiert und Funktionen schrittweise in neuen Versionen verbessert.",
  },
];

export default function PortfolioPage() {
  return (
    <main>
      <SiteHeader />

      <section className="portfolio-hero">
        <div>
          <p className="eyebrow">Über mich</p>
          <h1>Tim Krause</h1>
          <p className="portfolio-role">Fachinformatiker für Systemintegration in Ausbildung</p>
          <p className="portfolio-lead">
            Ich lerne IT am liebsten, indem ich Systeme selbst aufbaue, betreibe und dokumentiere.
            Neben meiner Ausbildung beschäftige ich mich in meinem Homelab mit Linux, Netzwerken,
            Virtualisierung und Serverbetrieb. Mit ITMScore entwickle ich dazu ein eigenes
            webbasiertes IT-Management-System.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/referenz">ITMScore ansehen</Link>
          </div>
        </div>
        <div className="portfolio-facts" aria-label="Schwerpunkte">
          <span><small>Schwerpunkt</small><strong>Systemintegration</strong></span>
          <span><small>Praxisumgebung</small><strong>Eigenes Homelab</strong></span>
          <span><small>Hauptprojekt</small><strong>ITMScore</strong></span>
          <span><small>Arbeitsweise</small><strong>Aufbauen und dokumentieren</strong></span>
        </div>
      </section>

      <section className="portfolio-featured">
        <div>
          <p className="eyebrow">Hauptprojekt</p>
          <h2>ITMScore verbindet Entwicklung und IT-Betrieb.</h2>
          <p>
            ITMScore ist mein Lern- und Praxisprojekt zur strukturierten Verwaltung eigener
            IT-Infrastruktur. Die öffentliche Seite zeigt das Konzept, die Oberfläche und meinen
            Projektweg, ohne private Systeme oder echte Gerätedaten offenzulegen.
          </p>
          <div className="project-tags" aria-label="Technologien im Projekt">
            {['React', 'Node.js', 'PostgreSQL', 'Docker', 'Linux'].map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="text-link" href="/referenz">Projektweg lesen <span>→</span></Link>
          </div>
        </div>
        <div className="portfolio-project-proof">
          <p>Was das Projekt zeigen soll</p>
          <ul>
            <li>Technische Anforderungen strukturiert bearbeiten</li>
            <li>Oberfläche und Betrieb gemeinsam betrachten</li>
            <li>Sicherheits- und Datenschutzgrenzen beachten</li>
            <li>Entscheidungen und Lernfortschritt dokumentieren</li>
          </ul>
        </div>
      </section>

      <section className="portfolio-section evidence-section">
        <div className="section-heading">
          <p className="eyebrow">Konkrete Umsetzung</p>
          <h2>Was ich im Projekt selbst aufgebaut habe.</h2>
          <p>Die Beispiele verbinden Entwicklung, Systembetrieb und Dokumentation zu nachvollziehbaren Arbeitsergebnissen.</p>
        </div>
        <div className="evidence-grid">
          {projectEvidence.map((item, index) => (
            <article key={item.label}>
              <span className="evidence-number">0{index + 1}</span>
              <p className="evidence-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <div className="section-heading">
          <p className="eyebrow">Praktische Kenntnisse</p>
          <h2>Technisches Wissen praktisch angewendet.</h2>
          <p>
            Ein Überblick über die Technologien und Aufgaben, mit denen ich in Ausbildung, Homelab und eigenen
            Projekten arbeite.
          </p>
        </div>
        <div className="practice-grid">
          {practiceAreas.map((area) => (
            <article key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.summary}</p>
              <ul>
                {area.examples.map((example) => <li key={example}>{example}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section portfolio-experience">
        <div className="section-heading">
          <p className="eyebrow">Praktische Erfahrung</p>
          <h2>Ausbildung und erste Einblicke in den IT-Alltag.</h2>
        </div>
        <div className="experience-list">
          {experiences.map((experience) => (
            <article key={experience.organization}>
              <div>
                <span>{experience.period}</span>
                <h3>{experience.role}</h3>
                <p>{experience.organization}</p>
              </div>
              <ul>
                {experience.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="learning-section">
        <div>
          <p className="eyebrow">Aktuell lerne ich</p>
          <h2>Diese Themen vertiefe ich derzeit.</h2>
        </div>
        <div className="learning-tags">
          {currentLearning.map((topic) => <span key={topic}>{topic}</span>)}
        </div>
      </section>

      <section className="home-cta">
        <div>
          <p className="eyebrow">Mehr technische Tiefe</p>
          <h2>ITMScore im Detail ansehen.</h2>
          <p>Projektweg, öffentliche Demo und die technischen Schwerpunkte des Systems.</p>
        </div>
        <Link className="button" href="/referenz">Zum Projektweg</Link>
      </section>

      <SiteFooter />
    </main>
  );
}
