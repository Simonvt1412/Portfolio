import { Link } from 'react-router-dom';
import './Navbar.css';

/**
 * Navbar Component
 * Simple top navigation bar with logo/name on the left and nav links on the right.
 * Responsive design that works on mobile and desktop.
 */
export default function Navbar() {
  const handleSmoothScroll = (e, targetId) => {
    // If on a different page, let the link work normally
    if (window.location.pathname !== '/') {
      return;
    }

    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Portfolio
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <a
            href="/#projects"
            className="nav-link"
            onClick={(e) => handleSmoothScroll(e, 'projects')}
          >
            Projects
          </a>
          <a
            href="/#contact"
            className="nav-link"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
