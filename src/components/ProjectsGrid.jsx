import ProjectCard from './ProjectCard';
import './ProjectsGrid.css';
import projectsData from '../data/projects.json';

/**
 * ProjectsGrid Component
 * Displays all projects from projects.json as a responsive grid of ProjectCards.
 * Projects are mapped from the JSON data file for easy updates.
 */
export default function ProjectsGrid() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-heading">
          <p className="section-kicker">02 // SELECT YOUR CARTRIDGE</p>
          <h2 className="projects-title">The collection</h2>
          <p className="section-note">A few things I&apos;ve built, designed, and shipped.</p>
        </div>
        <div className="projects-grid">
          {/* Map over projects from JSON file - add new projects by editing projects.json */}
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              position={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
