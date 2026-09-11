import { useLayoutEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetailPage from './pages/ProjectDetailPage';
import DriftveilProject from './pages/DriftveilProject';
import EWasteProject from './pages/EWasteProject';
import VondelmolenProject from './pages/VondelmolenProject';
import BeestigeTijdreizigers from './pages/BeestigeTijdreizigers'; // Pas het pad aan indien nodig (bijv. ./pages/BeestigeTijdreizigers)
import ConnexionProject from './pages/ConnexionProject';
import './App.css';

function PageTransition() {
  const location = useLocation();
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    const context = gsap.context(() => {
      gsap.fromTo(
        pageRef.current,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power2.out' }
      );
    }, pageRef);

    return () => context.revert();
  }, [location.pathname]);

  return (
    <div ref={pageRef} className="page-transition">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        <Route path="/projects/driftveil" element={<DriftveilProject />} />
        <Route path="/projects/ewaste-trail" element={<EWasteProject />} />
        <Route path="/projects/vondelmolen" element={<VondelmolenProject />} />
        <Route path="/projects/beestige-tijdreizigers" element={<BeestigeTijdreizigers />} />
        <Route path="/projects/connexion" element={<ConnexionProject />} />
      </Routes>
    </div>
  );
}

/**
 * App Component
 * Main application component with routing setup using React Router v6
 * Routes:
 * - / : Home page with hero, projects grid, and contact section
 * - /projects/:projectId : Individual project detail page
 */
function App() {
  return (
    <Router>
      <Navbar />
      <PageTransition />
    </Router>
  );
}
 
export default App;