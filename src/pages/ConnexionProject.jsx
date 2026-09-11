import { Link } from 'react-router-dom';
import './ConnexionProject.css';
 
/**
 * ConnexionProject Page
 * Standalone, custom-styled case study page for "The ConneXion" — an interactive
 * exoplanet-discovery installation built for Floraliën Gent 2026 by Team Ruimteverkenners,
 * as part of Digital Product Studio 2.
 */
export default function ConnexionProject() {
  const heroImage = {
    src: '/Connexion/Visual.png',
    alt: 'Visual concept art for The ConneXion installation',
  };
 
  const visualDesign = [
    { src: '/Connexion/UI.png', alt: 'UI design for the exoplanet info screen' },
    { src: '/Connexion/Visual.png', alt: 'Visual concept art for the installation' },
    { src: '/Connexion/Planet1.png', alt: '3D planet render created for the exoplanet starfield' },
    { src: '/Connexion/Planet2.png', alt: 'Second 3D planet render created for the exoplanet starfield' },
    { src: '/Connexion/Planet3.png', alt: 'Large green 3D planet render with a smaller nearby planet' },
  ];
 
  const techStack = [
    'Arduino Nano 33 IoT',
    'TouchDesigner',
    'Gyroscope & Rotary Encoder',
    'Addressable LED Strips',
    'Next.js',
    'PostgreSQL',
    'WebSockets',
    'Blender',
  ];
 
  const features = [
    {
      title: 'Physical Telescope Interface',
      description:
        'A lensless telescope fitted with a gyroscope and rotary encoder lets visitors physically aim and zoom into a projected starry sky to search for exoplanets.',
    },
    {
      title: 'Generative 3D Starfield',
      description:
        'A TouchDesigner-driven star system renders exoplanets, stars, and galaxies in real time, reacting live to the telescope\'s orientation.',
    },
    {
      title: 'Exoplanet Discovery & Data',
      description:
        'Zooming in on a planet reveals real scientific data on a second screen — distance from its star, gravity, size, and whether it falls within the habitable "Goldilocks zone."',
    },
    {
      title: 'Reactive LED Ambient Lighting',
      description:
        'Custom LED strips woven through the installation tent respond to the experience in real time, driven from TouchDesigner over serial to Arduino.',
    },
    {
      title: 'Leave Your Mark',
      description:
        'Visitors who discover a planet can plant a flag with their initials, which is saved to the database and shown to future visitors.',
    },
    {
      title: 'Full-Stack Systems Architecture',
      description:
        'Arduino sensors, TouchDesigner, a Next.js web server, and a PostgreSQL database communicate in real time via serial and WebSockets to tie the whole experience together.',
    },
  ];
 
  return (
    <div className="driftveil-page">
      {/* Hero */}
      <section className="driftveil-hero">
        <div className="driftveil-hero-content">
          <span className="driftveil-eyebrow">Digital Product Studio 2 • Floraliën Gent 2026</span>
          <h1 className="driftveil-title">The ConneXion</h1>
          <p className="driftveil-tagline">
            An interactive exoplanet-discovery installation built with Team Ruimteverkenners,
            where visitors become space explorers searching for habitable worlds through a
            physical telescope.
          </p>
          <div className="driftveil-hero-links">
            <a
              href="https://github.com/gdmgent-digitalproductstudio/dps2-project-1-ruimteverkenners"
              target="_blank"
              rel="noopener noreferrer"
              className="driftveil-btn driftveil-btn-primary"
            >
              View on GitHub
            </a>
            <span className="driftveil-meta-pill">Team Ruimteverkenners</span>
          </div>
        </div>
        <div className="driftveil-hero-image">
          <img src={heroImage.src} alt={heroImage.alt} />
        </div>
      </section>
 
      {/* Overview */}
      <section className="driftveil-section">
        <h2 className="driftveil-section-title">Overview</h2>
        <p className="driftveil-body-text">
          "The ConneXion" invites visitors to step into the role of a space explorer, searching a
          generative, projected starry sky for potentially habitable exoplanets. Built for
          Floraliën Gent 2026 — an event centered on nature and ecosystems — the installation
          connects that theme to a bigger question: what makes a planet livable at all? Visitors
          aim a physical, lensless telescope at the projection, and a gyroscope and rotary encoder
          translate their movement into a focus circle that glides across the sky in real time. Zooming
          in on a discovered exoplanet reveals real scientific data on a second screen, framed
          around the concept of the "Goldilocks zone" — the narrow band around a star where life
          could exist.
        </p>
      </section>
 
      {/* My role */}
      <section className="driftveil-section">
        <h2 className="driftveil-section-title">My Role</h2>
        <p className="driftveil-body-text">
          As part of Team Ruimteverkenners for Digital Product Studio 2, I contributed to several
          parts of the installation. I built and wired the <strong>LED strips</strong> woven
          through the installation tent and helped get an early version of the{' '}
          <strong>TouchDesigner visuals</strong> up and running. I also modeled{' '}
          <strong>all of the 3D planets</strong> used in the generative starfield, and pitched in
          wherever extra hands were needed to help the team finish the installation in time for
          opening day.
        </p>
      </section>
 
      {/* Feature grid */}
      <section className="driftveil-section driftveil-features-section">
        <h2 className="driftveil-section-title">How It Works</h2>
        <div className="driftveil-features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="driftveil-feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* Visual design / concept art */}
      <section className="driftveil-section">
        <h2 className="driftveil-section-title">Interface, Visual Design & 3D Planets</h2>
        <div className="driftveil-gallery">
          {visualDesign.map((visual) => (
            <div key={visual.src} className="driftveil-gallery-item">
              <img src={visual.src} alt={visual.alt} />
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