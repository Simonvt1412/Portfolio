import Hero from '../components/Hero';
import ProjectsGrid from '../components/ProjectsGrid';
import LinksSection from '../components/LinksSection';

/**
 * Home Page
 * Main landing page with:
 * - Hero section with intro
 * - Projects grid showing all projects from projects.json
 * - Contact/links section
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsGrid />
      <LinksSection />
    </main>
  );
}
