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
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {/* Map over projects from JSON file - add new projects by editing projects.json */}
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
