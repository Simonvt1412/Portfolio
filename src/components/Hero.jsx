import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Hero.css';

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

function buildSprite() {
  const grid = Array.from({ length: SPRITE_HEIGHT }, () =>
    Array(SPRITE_WIDTH).fill(0)
  );

  const rect = (x, y, width, height, color) => {
    for (let row = y; row < y + height; row += 1) {
      for (let column = x; column < x + width; column += 1) {
        if (row >= 0 && row < SPRITE_HEIGHT &&
            column >= 0 && column < SPRITE_WIDTH) {
          grid[row][column] = color;
        }
      }
    }
  };

  const point = (x, y, color) => {
    if (x >= 0 && x < SPRITE_WIDTH && y >= 0 && y < SPRITE_HEIGHT) {
      grid[y][x] = color;
    }
  };

  // Hair: tall swept-back volume with loose, ragged curls and light-brown highlights.
  rect(13, 8, 22, 3, 1);
  rect(11, 11, 26, 13, 1);
  rect(13, 6, 22, 18, 5);
  rect(16, 3, 15, 5, 5);
  rect(19, 1, 11, 4, 5);
  rect(22, 0, 6, 3, 5);
  rect(11, 10, 4, 11, 5);
  rect(33, 9, 4, 10, 5);
  rect(15, 5, 5, 3, 6);
  rect(21, 3, 4, 3, 6);
  rect(27, 2, 5, 4, 6);
  rect(31, 6, 4, 4, 6);
  rect(12, 13, 3, 4, 7);
  rect(34, 12, 3, 5, 7);
  rect(18, 7, 3, 2, 6);
  rect(24, 5, 3, 2, 6);
  rect(29, 7, 3, 2, 6);
  point(10, 12, 5);
  point(37, 10, 5);
  point(14, 4, 5);
  point(33, 3, 5);

  // Face: wider cheeks and jaw with a shorter, soft oval silhouette.
  rect(13, 14, 22, 15, 1);
  rect(14, 17, 20, 11, 1);
  rect(15, 13, 18, 17, 2);
  rect(14, 16, 20, 11, 2);
  rect(15, 27, 18, 4, 2);
  rect(17, 30, 14, 2, 2);
  rect(19, 31, 10, 1, 2);
  rect(15, 16, 3, 11, 4);
  rect(16, 14, 3, 3, 4);
  rect(32, 18, 2, 10, 3);
  rect(30, 28, 3, 2, 3);

  // Glasses: smaller round-ish 1px silver frames with faint lens tint.
  rect(18, 17, 5, 1, 13);
  rect(17, 18, 1, 4, 13);
  rect(18, 21, 5, 1, 13);
  rect(22, 18, 1, 4, 13);
  rect(26, 17, 5, 1, 13);
  rect(25, 18, 1, 4, 13);
  rect(26, 21, 5, 1, 13);
  rect(30, 18, 1, 4, 13);
  rect(23, 19, 2, 1, 13);
  rect(18, 18, 4, 3, 4);
  rect(26, 18, 4, 3, 4);

  // Eyes and eyebrows: 2x2 eyes with a one-pixel white highlight.
  rect(18, 15, 5, 1, 1);
  rect(25, 15, 5, 1, 1);
  rect(19, 19, 2, 2, 1);
  rect(27, 19, 2, 2, 1);
  point(19, 19, 4);
  point(27, 19, 4);
  rect(23, 20, 1, 4, 3);
  point(24, 25, 3);
  rect(21, 27, 6, 1, 1);
  point(21, 26, 3);
  point(26, 27, 3);

  // Neck: shortened by two rows.
  rect(21, 32, 6, 5, 1);
  rect(22, 32, 4, 5, 2);
  rect(22, 35, 4, 1, 3);

  // Jacket: 30% wider shoulders, open collar, and vertical corduroy shading.
  rect(16, 37, 16, 3, 1);
  rect(12, 40, 24, 18, 1);
  rect(8, 44, 32, 12, 1);
  rect(15, 38, 18, 20, 8);
  rect(11, 41, 26, 15, 8);
  rect(8, 44, 32, 10, 8);
  rect(15, 38, 8, 7, 10);
  rect(25, 38, 8, 7, 10);
  rect(19, 38, 10, 18, 11);
  rect(21, 40, 6, 16, 11);
  rect(20, 40, 2, 14, 12);
  rect(26, 40, 2, 14, 12);
  rect(14, 43, 2, 12, 9);
  rect(32, 43, 2, 12, 9);
  rect(17, 48, 1, 8, 10);
  rect(30, 48, 1, 8, 9);
  rect(12, 49, 1, 6, 10);
  rect(35, 49, 1, 6, 9);

  // Hands: tucked close to the jacket with no floating pose.
  rect(8, 54, 6, 7, 1);
  rect(34, 54, 6, 7, 1);
  rect(9, 54, 4, 5, 2);
  rect(35, 54, 4, 5, 2);
  rect(10, 58, 3, 2, 1);
  rect(35, 58, 3, 2, 1);

  return grid;
};

const SPRITE = buildSprite();

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

  useEffect(() => {
    // Fade in hero content when component mounts
    gsap.fromTo(
      '.hero-content',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
  }, []);

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

    SPRITE.forEach((row, y) => {
      row.forEach((paletteIndex, x) => {
        const color = PALETTE[paletteIndex];
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
            AVAILABLE FOR OPPORTUNITIES
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
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'end' });
              }}
            >
              LET&apos;S CONNECT <span>↓</span>
            </a>
          </div>

          <div className="hero-stats" aria-label="Portfolio statistics">
            <div>
              <strong>05</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>05</strong>
              <span>Creative fields</span>
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
