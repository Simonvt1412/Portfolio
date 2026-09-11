import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import './EWasteProject.css';

/**
 * EWasteProject Page
 * Dynamically linked to projects.json, emphasizing that this was purely a conceptual idea with no technical elaboration.
 */
export default function EWasteProject() {
  const project = projectsData.find((p) => p.id === 5) || projectsData[0];

  const highlightMetrics = [
    { label: 'Award', value: '1st Place Winner' },
    { label: 'Context', value: 'Cronos Group Hackathon' },
    { label: 'Project Type', value: 'Pure Concept / Idea' },
    { label: 'Phase', value: 'No further development' },
  ];

  const features = [
    {
      title: 'Interactive Art Installations',
      description: 'An idea for sculptures shaped like floating e-waste (cables, old phones, batteries), strategically placed along coastlines or in harbors.',
    },
    {
      title: 'Sensor & Light Activation',
      description: 'Envisioned as a setup with solar panels and proximity sensors through which passersby activate moving shadows and LED lighting.',
    },
    {
      title: 'Educational QR Experience',
      description: 'A proposed system in which QR codes are linked to insights about the dangers of e-waste and ocean conservation.',
    },
    {
      title: 'Gamified Companion App',
      description: 'The idea of a mobile app through which visitors could virtually collect litter and earn points.',
    },
  ];

  return (
    <div className="ewaste-page">
      {/* Hero without image */}
      <section className="ewaste-hero ewaste-hero-no-image">
        <div className="ewaste-hero-content">
          <div className="ewaste-badge">🏆 1st Place Hackathon Win • Cronos Group &amp; Artevelde University of Applied Sciences</div>
          <h1 className="ewaste-title">{project.title}</h1>
          <p className="ewaste-tagline">
            This project was <strong>purely a conceptual idea</strong>. No technical or in-depth development was undertaken during this hackathon; the focus was entirely on the vision and strategic concept.
          </p>
        </div>
      </section>

      {/* Quick metrics bar */}
      <section className="ewaste-metrics-bar">
        {highlightMetrics.map((item) => (
          <div key={item.label} className="ewaste-metric-card">
            <span className="ewaste-metric-label">{item.label}</span>
            <span className="ewaste-metric-value">{item.value}</span>
          </div>
        ))}
      </section>

      {/* Concept background */}
      <section id="concept-details" className="ewaste-section">
        <h2 className="ewaste-section-title">The Foundations of the Idea</h2>
        <p className="ewaste-body-text">{project.description}</p>
      </section>

      {/* Asymmetric feature layout */}
      <section className="ewaste-section">
        <h2 className="ewaste-section-title">Conceptual Architecture</h2>
        <div className="ewaste-feature-stack">
          {features.map((feature, idx) => (
            <div key={feature.title} className="ewaste-stack-item">
              <span className="ewaste-stack-num">0{idx + 1}</span>
              <div className="ewaste-stack-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Methodologies & Skills */}
      <section className="ewaste-section">
        <h2 className="ewaste-section-title">Applied Skills</h2>
        <div className="ewaste-tech-list">
          {project.tech.map((techItem) => (
            <span key={techItem} className="ewaste-tech-pill">{techItem}</span>
          ))}
        </div>
      </section>

      {/* Back link at the bottom */}
      <div className="ewaste-back-link-wrapper">
        <Link to="/" className="ewaste-back-link">&larr; Back to all projects</Link>
      </div>
    </div>
  );
}