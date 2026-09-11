import { useEffect } from 'react';
import gsap from 'gsap';
import './Hero.css';

/**
 * Hero Component
 * Main hero section with intro heading and description.
 * Features a subtle fade-in animation on page load using GSAP.
 */
export default function Hero() {
  useEffect(() => {
    // Fade in hero content when component mounts
    gsap.fromTo(
      '.hero-content',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Simon</h1>
        <p className="hero-description">
          I'm a creative developer building interactive web experiences,
          3D worlds, and physical installations. Explore my work below.
        </p>
      </div>
    </section>
  );
}
