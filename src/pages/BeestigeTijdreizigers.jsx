import { Link } from 'react-router-dom';
import './BeestigeTijdreizigers.css';

/**
 * BeestigeTijdreizigers Page
 * Standalone, custom-styled case study page for the Beestige Tijdreizigers project.
 */
export default function BeestigeTijdreizigers() {
  const heroImage = { src: '/Kina/kina_logo.png', alt: 'House of Kina logo' };

  const galleryScreenshots = [
    { src: '/Kina/image.png', alt: 'Team Quartz around the created installation' },
    { src: '/Kina/Kina.jpg', alt: 'The back and electronics of the system' },
  ];

  const techStack = ['Audio Design', 'Character Design', 'Physical Fabrication', 'Laser Cutting / Maker', 'Prototyping'];

  const features = [
    {
      title: 'My Contribution: Audio',
      description:
        'Assisted with the audio elements and sound experience for the interactive racing installation.',
    },
    {
      title: 'Character Design',
      description:
        'Responsible for the visual design and creation of the prehistoric characters/animals used in the game.',
    },
    {
      title: 'Physical Plates (Machine)',
      description:
        'Designing and manufacturing the physical plates that are inserted or used in the machine.',
    },
    {
      title: 'Additional Work as Needed',
      description:
        'Flexibly supported and provided assistance wherever extra hands or work was needed within the team.',
    },
    {
      title: 'Team Quartz & Assignment',
      description:
        'Developed an interactive wooden racing installation for the House of Kina[cite: 1] as part of Digital Product Studio 1[cite: 1].',
    },
  ];

  return (
    <div className="driftveil-page">
      {/* Hero */}
      <section className="driftveil-hero">
        <div className="driftveil-hero-content">
          <span className="driftveil-eyebrow">Case Study • Team Quartz</span>
          <h1 className="driftveil-title">Beestige Tijdreizigers</h1>
          <p className="driftveil-tagline">
            An interactive wooden racing installation developed for the House of Kina, where
            visitors race scaled prehistoric animals against each other.
          </p>
          <div className="driftveil-hero-links">
            <span className="driftveil-meta-pill">Digital Product Studio 1</span>
            <span className="driftveil-meta-pill">Audio, Design & Fabrication</span>
          </div>
        </div>
        <div className="driftveil-hero-image">
          <img src={heroImage.src} alt={heroImage.alt} />
        </div>
      </section>

      {/* Overview */}
      <section className="driftveil-section">
        <h2 className="driftveil-section-title">Overview & What I Did</h2>
        <p className="driftveil-body-text">
          For the "Beestige Tijdreizigers" project, Team Quartz realized a physical, interactive racing box on behalf of the House of Kina. Within this project, my contribution was specifically in the creative and tangible aspects of the installation.
        </p>
        <p className="driftveil-body-text" style={{ marginTop: '1rem' }}>
          I actively assisted with the <strong>audio</strong>, was responsible for the <strong>character design</strong>, and created the <strong>physical plates</strong> that go into the machine. Additionally, I flexibly supported the team wherever <strong>extra hands or work were needed</strong> to bring the project to a successful conclusion.
        </p>
      </section>

      {/* Feature grid */}
      <section className="driftveil-section driftveil-features-section">
        <h2 className="driftveil-section-title">Key Features & My Tasks</h2>
        <div className="driftveil-features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="driftveil-feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="driftveil-section">
        <h2 className="driftveil-section-title">Gallery</h2>
        <div className="driftveil-gallery">
          {galleryScreenshots.map((shot) => (
            <div key={shot.src} className="driftveil-gallery-item">
              <img src={shot.src} alt={shot.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="driftveil-section">
        <h2 className="driftveil-section-title">Focus Areas</h2>
        <div className="driftveil-tech-list">
          {techStack.map((tech) => (
            <span key={tech} className="driftveil-tech-pill">{tech}</span>
          ))}
        </div>
      </section>

      {/* Back link */}
      <div className="driftveil-back-link-wrapper">
        <Link to="/" className="driftveil-back-link">&larr; Back to all projects</Link>
      </div>
    </div>
  );
}