import { useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './ProjectDetail.css';
import projectsData from '../data/projects.json';

/**
 * ProjectDetail Component
 * Displays the full details of a single project based on the :projectId URL parameter.
 * Fetches project data from projects.json and displays:
 * - Title and full description
 * - Tech stack used
 * - Image gallery placeholder
 * - Links (GitHub, Live Demo, etc.)
 * - Back to home button
 */
export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Find the project from JSON data by ID
  const project = projectsData.find(
    (p) => p.id === parseInt(projectId)
  );

  useEffect(() => {
    // Scroll to top when project changes
    window.scrollTo(0, 0);

    // Fade in project detail content with slide up effect
    gsap.fromTo(
      '.project-detail-content',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
  }, [projectId]);

  const handleBackClick = (e) => {
    e.preventDefault();
    // Fade out before navigating
    gsap.to('.project-detail-content', {
      opacity: 0,
      y: -30,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => {
        navigate('/');
      }
    });
  };

  if (!project) {
    return (
      <div className="project-detail" ref={containerRef}>
        <div className="project-detail-container">
          <div className="not-found">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/" className="back-button" onClick={handleBackClick}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail" ref={containerRef}>
      <div className="project-detail-container">
        <a href="/" className="back-button" onClick={handleBackClick}>
          ← Back to Home
        </a>

        <div className="project-detail-content">
          {/* Project Header */}
          <div className="project-header">
            <h1 className="project-detail-title">{project.title}</h1>
          </div>

          {/* Image Gallery Placeholder */}
          <div className="gallery-section">
            <div className="gallery-placeholder">
              <span className="gallery-text">
                Gallery: {project.image || 'Project Screenshots'}
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="detail-content">
            {/* Description */}
            <div className="section">
              <h2 className="section-title">About This Project</h2>
              <p className="section-text">{project.description}</p>
            </div>

            {/* Tech Stack */}
            {project.tech && project.tech.length > 0 && (
              <div className="section">
                <h2 className="section-title">Technologies Used</h2>
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <div key={index} className="tech-item">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {project.links && (
              <div className="section">
                <h2 className="section-title">Links</h2>
                <div className="project-links">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View on GitHub
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
