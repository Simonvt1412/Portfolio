import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import gsap from 'gsap';
import BootScreen from './components/BootScreen';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetailPage from './pages/ProjectDetailPage';
import DriftveilProject from './pages/DriftveilProject';
import EWasteProject from './pages/EWasteProject';
import VondelmolenProject from './pages/VondelmolenProject';
import BeestigeTijdreizigers from './pages/BeestigeTijdreizigers';
import ConnexionProject from './pages/ConnexionProject';
import './App.css';

function PageTransition() {
  const location = useLocation();
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let context;
    if (!prefersReducedMotion) {
      context = gsap.context(() => {
        gsap.fromTo(
          pageRef.current,
          { autoAlpha: 0, y: 12 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
          }
        );
      }, pageRef);
    }

    if (prefersReducedMotion) {
      return () => context?.revert();
    }

    const revealTargets = pageRef.current?.querySelectorAll(
      '.hero-content, .hero-character-panel, .section-heading, .project-card-link, .links-list, .availability-status, .project-detail-content, .project-header, .gallery-section, .detail-content, .section, .driftveil-hero, .driftveil-section, .driftveil-feature-card, .ewaste-hero, .ewaste-metrics-bar, .ewaste-section, .ewaste-stack-item, .ewaste-tech-list, .vondelmolen-hero, .vondelmolen-metrics-bar, .vondelmolen-section, .vondelmolen-stack-item, .vondelmolen-tech-list'
    );

    const targets = Array.from(revealTargets || []);
    let observer;

    targets.forEach((target, index) => {
      target.classList.add('scroll-reveal');
      target.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 55}ms`);

      const bounds = target.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0) {
        window.requestAnimationFrame(() => target.classList.add('is-visible'));
      }
    });

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
      );
      targets.forEach((target) => observer.observe(target));
    } else {
      targets.forEach((target) => target.classList.add('is-visible'));
    }

    const fallbackTimer = window.setTimeout(() => {
      targets.forEach((target) => target.classList.add('is-visible'));
    }, 800);

    return () => {
      window.clearTimeout(fallbackTimer);
      observer?.disconnect();
      context.revert();
    };
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
  const [isLightMode, setIsLightMode] = useState(() => {
    return window.localStorage.getItem('portfolio-theme') === 'light';
  });
  const themeInitializedRef = useRef(false);

  useEffect(() => {
    document.documentElement.dataset.theme = isLightMode ? 'light' : 'dark';
    window.localStorage.setItem('portfolio-theme', isLightMode ? 'light' : 'dark');

    if (themeInitializedRef.current) {
      document.documentElement.classList.add('theme-changing');
      window.setTimeout(() => {
        document.documentElement.classList.remove('theme-changing');
      }, 260);
    } else {
      themeInitializedRef.current = true;
    }
  }, [isLightMode]);

  return (
    <Router>
      <BootScreen />
      <Navbar
        isLightMode={isLightMode}
        onThemeToggle={() => setIsLightMode((current) => !current)}
      />
      <PageTransition />
      <Analytics />
    </Router>
  );
}
 
export default App;