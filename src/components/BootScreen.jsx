import { useEffect, useState } from 'react';
import projectsData from '../data/projects.json';
import './BootScreen.css';

// Keep these values aligned with the CSS delays and exit animation duration.
const BOOT_MS = 3000;
const EXIT_MS = 600;

export default function BootScreen() {
  const [phase, setPhase] = useState(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 'done';
    }
    return 'boot';
  });

  useEffect(() => {
    if (phase === 'done') return undefined;

    document.documentElement.classList.add('is-booting');

    return () => {
      document.documentElement.classList.remove('is-booting');
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== 'boot') return undefined;

    const startOpening = () => {
      setPhase('exit');
    };

    const handleKeyDown = () => startOpening();
    const handlePointerDown = () => startOpening();

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('pointerdown', handlePointerDown);

    const bootTimer = window.setTimeout(startOpening, BOOT_MS);

    return () => {
      window.clearTimeout(bootTimer);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== 'exit') return undefined;

    const exitTimer = window.setTimeout(() => {
      setPhase('done');
    }, EXIT_MS);

    return () => {
      window.clearTimeout(exitTimer);
    };
  }, [phase]);

  if (phase === 'done') return null;

  const projectCount = String(projectsData.length).padStart(2, '0');
  const title = 'SIMON_VT';

  return (
    <div
      className={`boot-screen boot-screen-${phase}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="boot-half boot-half-top" aria-hidden="true" />
      <div className="boot-half boot-half-bottom" aria-hidden="true" />
      <div className="boot-seam" aria-hidden="true" />

      <div className="boot-content">
        <div
          className="boot-title"
          style={{ '--chars': title.length }}
          aria-label={title}
        >
          <span aria-hidden="true">SIMON</span>
          <span className="boot-title-accent" aria-hidden="true">_</span>
          <span aria-hidden="true">VT</span>
        </div>

        <div className="boot-logs" aria-hidden="true">
          <div className="boot-log boot-log-one">
            &gt; LOADING CARTRIDGES ... {projectCount}/{projectCount}
          </div>
          <div className="boot-log boot-log-two">
            &gt; CONNECTING PLAYER 01 ... OK
          </div>
          <div className="boot-log boot-log-three">
            &gt; HELLO, PLAYER!
          </div>
        </div>

        <div
          className="boot-progress"
          aria-hidden="true"
          role="presentation"
        >
          {Array.from({ length: 12 }, (_, index) => (
            <span
              className="boot-progress-block"
              style={{ '--block-index': index }}
              key={index}
            />
          ))}
        </div>

        <div className="boot-hint" aria-hidden="true">
          Click or press any key to skip
        </div>
      </div>
    </div>
  );
}
