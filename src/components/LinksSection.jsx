import { useState } from 'react';
import './LinksSection.css';

/**
 * LinksSection Component
 * Displays contact and social media links.
 * Update the links object below with your actual contact information and social profiles.
 */
export default function LinksSection() {
  const [showEmail, setShowEmail] = useState(false);
  const links = {
    email: 'simon.vantomme@student.arteveldehs.be',
    github: 'https://github.com/Simonvt1412',
    portfolio: 'https://github.com/Simonvt1412/Portfolio',
    linkedin: 'https://www.linkedin.com/in/simon-van-tomme-76b701356',
  };

  return (
    <section id="contact" className="links-section">
      <div className="links-container">
        <h2 className="links-title">Let's Connect</h2>
        <p className="links-subtitle">
          Interested in working together? Reach out by email or connect with me online.
        </p>

        <div className="links-list">
          {/* Email Link */}
          <button
            type="button"
            className="link-item email-link"
            onClick={() => setShowEmail((isVisible) => !isVisible)}
            aria-expanded={showEmail}
          >
            <span className="link-icon">✉</span>
            <span className="link-text">Email</span>
            {showEmail && (
              <span className="email-popup" role="status">
                {links.email}
              </span>
            )}
          </button>

          {/* GitHub Link */}
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <span className="link-icon">⚙</span>
            <span className="link-text">GitHub</span>
          </a>

          {/* Portfolio Source Link */}
          <a
            href={links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <span className="link-icon">⌘</span>
            <span className="link-text">Portfolio Source</span>
          </a>

          {/* LinkedIn Link */}
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <span className="link-icon">💼</span>
            <span className="link-text">LinkedIn</span>
          </a>

        </div>
      </div>
    </section>
  );
}
