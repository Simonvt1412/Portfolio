import { Link } from 'react-router-dom';
import './ProjectCard.css';
 
/**
 * ProjectCard Component
 * Displays a single project with title, short description, image (or placeholder), and tech tags.
 * Links to the detailed project page.
 *
 * Props:
 * - project: object with {id, title, shortDescription, image, tech, path}
 */
export default function ProjectCard({ project }) {
  // If `image` looks like a real path (starts with / or http, or has an image extension),
  // render it as an actual <img>. Otherwise, treat it as placeholder text.
  const hasRealImage =
    project.image &&
    (project.image.startsWith('/') ||
      project.image.startsWith('http') ||
      /\.(png|jpe?g|webp|gif|svg)$/i.test(project.image)) &&
    !project.image.startsWith('placeholder-image');
 
  return (
    <Link to={project.path || `/projects/${project.id}`} className="project-card-link">
      <div className="project-card">
        {/* Image or placeholder box */}
        <div className="project-image-placeholder">
          {hasRealImage ? (
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          ) : (
            <span className="image-text">
              {project.image || 'Image Placeholder'}
            </span>
          )}
        </div>
 
        {/* Project info */}
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.shortDescription}</p>
 
          {/* Tech tags */}
          <div className="tech-tags">
            {project.tech &&
              project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
}