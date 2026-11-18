import { useEffect, useRef, useState } from 'react';
import './Hero.css';
import projectsData from '../data/projects.json';

// 48x64 sprite grid. Values are palette indices.
// Edit a row by changing one character; "." is transparent.
const SPRITE_WIDTH = 48;
const SPRITE_HEIGHT = 64;

const PALETTE = [
  null,
  '#1E1A18', // outline
  '#E8B896', // skin
  '#C98F6B', // skin shadow
  '#F3CDB0', // skin highlight
  '#3B2A22', // hair
  '#5A4234', // hair highlight
  '#241912', // hair deep shadow
  '#A9703F', // corduroy jacket
  '#7E4F2B', // jacket shadow
  '#C48A55', // jacket highlight
  '#8A8F94', // crew-neck shirt
  '#6B7075', // shirt shadow
  '#AEB3B8', // glasses frame
];

// 48x64 string-grid sprite. Edit each region directly with the character keys below.
// 0=transparent, 1=outline, 2=skin, 3=skin shadow, 4=skin highlight,
// 5=hair, 6=hair highlight, 7=hair deep shadow, 8=jacket,
// 9=jacket shadow, A=jacket highlight, B=shirt, C=shirt shadow, D=glasses.
const SPRITE_MAP = {
  0: null,
  1: '#1E1A18',
  2: '#E8B896',
  3: '#C98F6B',
  4: '#F3CDB0',
  5: '#3B2A22',
  6: '#5A4234',
  7: '#241912',
  8: '#A9703F',
  9: '#7E4F2B',
  A: '#C48A55',
  B: '#8A8F94',
  C: '#6B7075',
  D: '#AEB3B8',
};

const SPRITE_ROWS = [
  '000000000000000000000055555500000000000000000000',
  '000000000000000000055555555555000000000000000000',
  '000000000000000000055555555666660000000000000000',
  '000000000000000055555666655666660500000000000000',
  '000000000000005055555666655666660000000000000000',
  '000000000000000666665666666666660000000000000000',
  '000000000000055666665555666555566660000000000000',
  '000000000000055666666555555556666660000000000000',
  '000000000000055555666555555556666660000000000000',
  '000000000000055555555555555555566665500000000000',
  '000000000005555555555555555555555555550000000000',
  '000000000005555555555555555555555555500000000000',
  '000000000055555555555555555555555577700000000000',
  '000000000005777222222222222222222577700000000000',
  '000000000005711244422222222222222117700000000000',
  '000000000005711244111112211111222117700000000000',
  '000000000005712444422222222222222217700000000000',
  '000000000005512444DDDDD222DDDDD22215500000000000',
  '00000000000551244D4444D22D4444D23315500000000000',
  '00000000000551244D4414DDDD4414D23311100000000000',
  '00000000000551244D4114D32D4114D23311100000000000',
  '00000000000111244DDDDDD32DDDDDD23311100000000000',
  '000000000001112444222223222222223311100000000000',
  '000000000001112444222223222222223311100000000000',
  '000000000000012444222222222222223310000000000000',
  '000000000000012444222222322222223310000000000000',
  '000000000000012444222322222222223310000000000000',
  '000000000000011222222111113222223310000000000000',
  '000000000000011222222222222222333110000000000000',
  '000000000000000222222222222222333000000000000000',
  '000000000000000222222222222222222000000000000000',
  '000000000000000002222222222222200000000000000000',
  '000000000000000000000122221000000000000000000000',
  '000000000000000000000122221000000000000000000000',
  '000000000000000000000122221000000000000000000000',
  '000000000000000000000133331000000000000000000000',
  '000000000000000000000122221000000000000000000000',
  '000000000000000011111111111111110000000000000000',
  '000000000000000AAAABBBBBBBBBBAAAA000000000000000',
  '000000000000000AAAABBBBBBBBBBAAAA000000000000000',
  '000000000000111AAAABCCBBBBCCBAAAA111000000000000',
  '000000000008888AAAABCCBBBBCCBAAAA888800000000000',
  '000000000008888AAAABCCBBBBCCBAAAA888800000000000',
  '0000000000088899AAABCCBBBBCCBAAA9988800000000000',
  '0000000088888899AAABCCBBBBCCBAAA9988888800000000',
  '0000000088888899888BCCBBBBCCB8889988888800000000',
  '0000000088888899888BCCBBBBCCB8889988888800000000',
  '0000000088888899888BCCBBBBCCB8889988888800000000',
  '00000000888888998A8BCCBBBBCCB8989988888800000000',
  '000000008888A8998A8BCCBBBBCCB8989989888800000000',
  '000000008888A8998A8BCCBBBBCCB8989989888800000000',
  '000000008888A8998A8BCCBBBBCCB8989989888800000000',
  '000000008888A8998A8BCCBBBBCCB8989989888800000000',
  '000000008888A8998A8BCCBBBBCCB8989989888800000000',
  '00000000122221998A8BBBBBBBBBB8989912222100000000',
  '00000000122221888A8BBBBBBBBBB8988812222100000000',
  '000000001222211888888888888888888112222100000000',
  '000000001222211888888888888888888112222100000000',
  '000000001211110000000000000000000011112100000000',
  '000000001111110000000000000000000011111100000000',
  '000000001111110000000000000000000011111100000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
];

/**
 * Hero Component
 * Main hero section with intro heading and description.
 * Features a subtle fade-in animation on page load using GSAP.
 */
export default function Hero() {
  const characterRef = useRef(null);
  const canvasRef = useRef(null);
  const [isWaving, setIsWaving] = useState(false);
  const [look, setLook] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const projectCount = projectsData.length;
  const installationCount = projectsData.filter(
    (project) => project.category === 'Interactive installation'
  ).length;

  useEffect(() => {
    const blinkInterval = window.setInterval(() => {
      setIsBlinking(true);
      window.setTimeout(() => setIsBlinking(false), 140);
    }, 3000);
    return () => window.clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = SPRITE_WIDTH * 5;
    canvas.height = SPRITE_HEIGHT * 5;
    const context = canvas.getContext('2d');
    context.imageSmoothingEnabled = false;
    context.clearRect(0, 0, canvas.width, canvas.height);

    SPRITE_ROWS.forEach((row, y) => {
      [...row].forEach((paletteKey, x) => {
        const color = SPRITE_MAP[paletteKey];
        if (!color) return;
        context.fillStyle = color;
        context.fillRect(x * 5, y * 5, 5, 5);
      });
    });

    // Eye pupils react a single pixel to the cursor.
    if (!isBlinking) {
      context.fillStyle = PALETTE[1];
      context.fillRect((19 + look.x) * 5, (19 + look.y) * 5, 10, 10);
      context.fillRect((27 + look.x) * 5, (19 + look.y) * 5, 10, 10);
      context.fillStyle = PALETTE[4];
      context.fillRect((19 + look.x) * 5, (19 + look.y) * 5, 5, 5);
      context.fillRect((27 + look.x) * 5, (19 + look.y) * 5, 5, 5);
    } else {
      context.fillStyle = PALETTE[1];
      context.fillRect(19 * 5, 20 * 5, 10, 5);
      context.fillRect(27 * 5, 20 * 5, 10, 5);
    }
  }, [look, isBlinking]);

  const handleMouseMove = (event) => {
    const character = characterRef.current;
    if (!character) return;

    const bounds = character.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    setLook({
      x: x > 0.15 ? 1 : x < -0.15 ? -1 : 0,
      y: y > 0.15 ? 1 : y < -0.15 ? -1 : 0,
    });
  };

  const resetLook = () => {
    const character = characterRef.current;
    if (!character) return;
    character.style.setProperty('--look-x', '0px');
    character.style.setProperty('--look-y', '0px');
    setLook({ x: 0, y: 0 });
  };

  const triggerWave = () => {
    setIsWaving(true);
    window.setTimeout(() => setIsWaving(false), 900);
  };

  return (
    <section className="hero">
      <div className="hero-shell">
        <div className="hero-content">
          <div className="hero-status">
            <span className="status-light" aria-hidden="true" />
            AVAILABLE FOR INTERNSHIPS
          </div>
          <p className="hero-kicker">CREATIVE DEVELOPER // PLAYER 01</p>
          <h1 className="hero-title">Hi, I&apos;m Simon<span className="hero-cursor">_</span></h1>
          <p className="hero-description">
            I build interactive web experiences, 3D worlds, and physical installations.
            Combining code, design, and a little arcade magic.
          </p>

          <div className="hero-actions">
            <a
              className="hero-text-link"
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                const reduceMotion = window.matchMedia(
                  '(prefers-reduced-motion: reduce)'
                ).matches;
                document
                  .getElementById('contact')
                  ?.scrollIntoView({
                    behavior: reduceMotion ? 'auto' : 'smooth',
                    block: 'end',
                  });
              }}
            >
              LET&apos;S CONNECT <span>↓</span>
            </a>
          </div>

          <div className="hero-stats" aria-label="Portfolio statistics">
            <div>
              <strong>{String(projectCount).padStart(2, '0')}</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>{String(installationCount).padStart(2, '0')}</strong>
              <span>Interactive installations</span>
            </div>
            <div>
              <strong>01</strong>
              <span>Available player</span>
            </div>
          </div>
        </div>

        <div
          className="hero-character-panel"
          ref={characterRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetLook}
          onClick={triggerWave}
          role="button"
          tabIndex={0}
          aria-label="Pixel character of Simon"
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') triggerWave();
          }}
        >
          <div className="character-level"><span>LVL</span> 01</div>
          <div className="character-speech">HELLO, PLAYER!</div>
          <div className={`pixel-character ${isWaving ? 'is-waving' : ''}`} aria-hidden="true">
            <canvas ref={canvasRef} className="pixel-character-canvas" />
            <span className="sprite-badge">SV</span>
          </div>
          <div className="character-platform">
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
