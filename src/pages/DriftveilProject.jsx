import { Link } from 'react-router-dom';
import './DriftveilProject.css';
 
/**
 * DriftveilProject Page
 * Standalone, custom-styled case study page for the Driftveil City 3D project.
 * Not driven by projects.json — this page is hand-built so it can look
 * different from the other (generic) project detail pages.
 *
 * TODO: swap placeholder image paths below with your real screenshots
 * once you've decided on final file names/locations.
 */
export default function DriftveilProject() {
  const screenshots = [
    { src: '/Driftveil/Screenshot1-Noivern.png', alt: 'Flying Noivern over the Driftveil docks and cliffside path' },
    { src: '/Driftveil/Screenshot2-Ditto.png', alt: 'Ditto crowd gathered near the Driftveil battle platform' },
    { src: '/Driftveil/Screenshot3-Scizor.png', alt: 'Twin Scizor battling on the arena platform' },
  ];
 
  const techStack = ['React', 'Three.js', 'React Three Fiber', 'Rapier Physics', 'Vite'];
 
  const features = [
    {
      title: 'Interactive Buildings',
      description:
        'Clickable buildings scattered around the city each open their own quiz or minigame.',
    },
    {
      title: 'Pokéball Physics',
      description:
        'A "drop pokeballs" mode lets you scatter physics-simulated pokeballs across the city using Rapier.',
    },
    {
      title: 'Custom-Modelled Static Buildings',
      description:
        'Created custom 3D models of the city\'s most iconic static buildings from scratch to form the core architectural layout of the scene.',
    },
    {
      title: 'Music Configurator',
      description:
        'Toggle between the Driftveil City theme, ambient background wind, or no music at all.',
    },
    {
      title: 'Resettable Quizzes',
      description:
        'Reset all quiz progress at any time to replay them from scratch.',
    },
    {
      title: 'Custom Gen 5 UI',
      description:
        'A landing page and site styling inspired by Pokémon Black & White 2, featuring Reshiram, Zekrom, and site credits.',
    },
  ];
 
  return (
    <div className="driftveil-page">
      {/* Hero */}
      <section className="driftveil-hero">
        <div className="driftveil-hero-content">
          <span className="driftveil-eyebrow">Case Study</span>
          <h1 className="driftveil-title">Driftveil City — Interactive 3D World</h1>
          <p className="driftveil-tagline">
            A 3D recreation of Driftveil City from Pokémon Black &amp; White, brought to life
            with roaming Pokémon, clickable minigames, and a physics-based pokeball playground.
          </p>
          <div className="driftveil-hero-links">
            <a
              href="https://driftveil-city-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="driftveil-btn driftveil-btn-primary"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Simonvt1412/driftveil-city-website"
              target="_blank"
              rel="noopener noreferrer"
              className="driftveil-btn driftveil-btn-secondary"
            >
              View on GitHub
            </a>
          </div>
        </div>
        <div className="driftveil-hero-image">
          <img src={screenshots[0].src} alt={screenshots[0].alt} />
        </div>
      </section>
 
      {/* Overview */}
      <section className="driftveil-section">
        <h2 className="driftveil-section-title">Overview</h2>
        <p className="driftveil-body-text">
          This project reimagines Driftveil City as an interactive 3D scene built with React
          Three Fiber. Pokémon like Ditto, Scizor, Mimikyu, Victini, and Charizard move around
          the city using pre-made animations, while clicking on different buildings opens quizzes
          and minigames tied to the location. A separate "drop pokeballs" mode uses Rapier physics
          to scatter pokeballs across the city with realistic falling and collision behavior. A
          small in-scene configurator lets you switch between the Driftveil City theme, ambient
          wind sound, or no music, and reset your quiz progress at any time. The main technical
          focus was structuring a fairly dense Three.js scene — multiple buildings, foliage, and
          several animated models — so it stays responsive while handling click interactions and
          physics simultaneously.
        </p>
      </section>
 
      {/* Feature grid */}
      <section className="driftveil-section driftveil-features-section">
        <h2 className="driftveil-section-title">Key Features</h2>
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
          {screenshots.map((shot) => (
            <div key={shot.src} className="driftveil-gallery-item">
              <img src={shot.src} alt={shot.alt} />
            </div>
          ))}
        </div>
      </section>
 
      {/* Tech stack */}
      <section className="driftveil-section">
        <h2 className="driftveil-section-title">Built With</h2>
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