import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import './VondelmolenProject.css';

/**
 * VondelmolenProject Page
 * Dedicated page showcasing the Vondelmolen student marketing campaign and touchscreen-optimized website,
 * developed with a team of 6 for the idea and co-built with Jarno Pennoit.
 */
export default function VondelmolenProject() {
  const project = projectsData.find((p) => p.id === 6) || projectsData[0];

  const highlightMetrics = [
    { label: 'Context', value: 'End-of-Year Exam' },
    { label: 'Team Concept', value: '6 Team Members' },
    { label: 'Web Collaboration', value: 'Jarno Pennoit' },
    { label: 'Live Demo', value: 'vondelmolen.vercel.app' },
  ];

  const features = [
    {
      title: 'Student-Focused Campaign Strategy',
      description: 'Repositioning traditional Vondelmolen gingerbread as a natural, nostalgic, yet trendy study fuel and energy booster for higher education students.',
    },
    {
      title: 'Digital Storytelling Platform & Touchscreen Sidebar',
      description: 'A custom-built web experience featuring a dedicated sidebar specifically optimized for touchscreen interaction to seamlessly guide exam evaluators through the campaign narrative.',
    },
    {
      title: 'Collaborative Concept & Development',
      description: 'The overall marketing campaign concept was shaped collaboratively with 5 other team members, while Jarno Pennoit specifically partnered with you to build and code the website.',
    },
    {
      title: 'Visual Mockups & Slogans',
      description: 'Developed distinct brand touchpoints, promotional slogans, and student-targeted social media campaign concepts tailored to Vondelmolen’s heritage.',
    },
  ];

  return (
    <div className="vondelmolen-page">
      {/* Hero Section */}
      <section className="vondelmolen-hero">
        <div className="vondelmolen-hero-content">
          <div className="vondelmolen-badge">📚 End-of-Year Exam Project • Concept by Team of 6</div>
          <h1 className="vondelmolen-title">{project.title}</h1>
          <p className="vondelmolen-tagline">{project.shortDescription}</p>
          <div className="vondelmolen-hero-links">
            <a 
              href="https://vondelmolen.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="vondelmolen-btn vondelmolen-btn-primary"
            >
              Visit Live Website &rarr;
            </a>
            <a href="#exam-details" className="vondelmolen-btn vondelmolen-btn-secondary">Read Story</a>
          </div>
        </div>
      </section>

      {/* Quick Metrics Bar */}
      <section className="vondelmolen-metrics-bar">
        {highlightMetrics.map((item) => (
          <div key={item.label} className="vondelmolen-metric-card">
            <span className="vondelmolen-metric-label">{item.label}</span>
            {item.label === 'Live Demo' ? (
              <a 
                href="https://vondelmolen.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="vondelmolen-metric-link"
              >
                {item.value}
              </a>
            ) : (
              <span className="vondelmolen-metric-value">{item.value}</span>
            )}
          </div>
        ))}
      </section>

      {/* Project Background / Story */}
      <section id="exam-details" className="vondelmolen-section">
        <h2 className="vondelmolen-section-title">The Exam Story &amp; Concept</h2>
        <p className="vondelmolen-body-text">{project.description}</p>
        <p className="vondelmolen-body-text" style={{ marginTop: '1rem' }}>
          While the overarching marketing concept was developed alongside 5 other team members for our end-of-year exam, the companion website itself was built directly by you in collaboration with <strong>Jarno Pennoit</strong>. It includes a specialized sidebar designed specifically to support smooth navigation on touchscreens during our presentation.
        </p>
      </section>

      {/* Feature Stack */}
      <section className="vondelmolen-section">
        <h2 className="vondelmolen-section-title">Core Campaign Pillars</h2>
        <div className="vondelmolen-feature-stack">
          {features.map((feature, idx) => (
            <div key={feature.title} className="vondelmolen-stack-item">
              <span className="vondelmolen-stack-num">0{idx + 1}</span>
              <div className="vondelmolen-stack-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Applied */}
      <section className="vondelmolen-section">
        <h2 className="vondelmolen-section-title">Skills &amp; Methods Applied</h2>
        <div className="vondelmolen-tech-list">
          {project.tech.map((techItem) => (
            <span key={techItem} className="vondelmolen-tech-pill">{techItem}</span>
          ))}
        </div>
      </section>

      {/* Back Link */}
      <div className="vondelmolen-back-link-wrapper">
        <Link to="/" className="vondelmolen-back-link">&larr; Back to all projects</Link>
      </div>
    </div>
  );
}