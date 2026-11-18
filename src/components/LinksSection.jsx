import { useEffect, useRef, useState } from 'react';
import './LinksSection.css';

// 16x16 icon grids. "." is transparent and "#" uses the accent palette.
const PIXEL_ICON_SIZE = 16;
const ICON_GRID = {
  email: [
    '................',
    '................',
    '..############..',
    '.#............#. ',
    '.#.#........#.#.',
    '.#..#......#..#. ',
    '.#...#....#...#. ',
    '.#....#..#....#. ',
    '.#.....##.....#. ',
    '.#.............#. ',
    '.#............#. ',
    '..############..',
    '................',
    '................',
  ],
  github: [
    '................',
    '......####......',
    '....########....',
    '..##.####.##....',
    '.##.######.##...',
    '.##########.##..',
    '.##########.##..',
    '..###########...',
    '..##.######.#...',
    '..##.####.##....',
    '...########.....',
    '....######......',
    '.....####.......',
    '................',
  ],
  code: [
    '................',
    '................',
    '...##.......##..',
    '..#.........#...',
    '.#...........#..',
    '.#...........#..',
    '..#.........#...',
    '...#.......#....',
    '....#.....#.....',
    '...#.......#....',
    '..#.........#...',
    '.#...........#..',
    '..##.......##..',
    '................',
  ],
  linkedin: [
    '................',
    '.##.............',
    '.##.##.#.###....',
    '.##.###.###.....',
    '.##.###.###.....',
    '.##.###.###.....',
    '.##.###.###.....',
    '.##.###.###.....',
    '.##.###.###.....',
    '.##.............',
    '................',
    '................',
    '................',
    '................',
  ],
};

function PixelIcon({ name, label }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scale = 2;
    canvas.width = PIXEL_ICON_SIZE * scale;
    canvas.height = PIXEL_ICON_SIZE * scale;
    const context = canvas.getContext('2d');
    context.imageSmoothingEnabled = false;
    context.clearRect(0, 0, canvas.width, canvas.height);

    const rows = ICON_GRID[name];
    rows.forEach((row, y) => {
      for (let x = 0; x < row.length; x += 1) {
        if (row[x] === '#') {
          context.fillStyle = '#272522';
          context.fillRect(x * scale, y * scale, scale, scale);
        }
      }
    });
  }, [name]);

  return (
    <canvas
      ref={canvasRef}
      className="link-icon"
      role="img"
      aria-label={label}
    />
  );
}

export default function LinksSection() {
  const [copied, setCopied] = useState(false);
  const links = {
    email: 'simon.vantomme@student.arteveldehs.be',
    github: 'https://github.com/Simonvt1412',
    portfolio: 'https://github.com/Simonvt1412/Portfolio',
    linkedin: 'https://www.linkedin.com/in/simon-van-tomme-76b701356',
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
    } catch {
      const input = document.createElement('textarea');
      input.value = links.email;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="contact" className="links-section">
      <div className="links-container">
        <h2 className="links-title">Let's Connect</h2>
        <p className="links-subtitle">
          Interested in working together? Reach out by email or connect with me online.
        </p>

        <div className="availability-status" role="status">
          <span className="availability-pixel" aria-hidden="true" />
          AVAILABLE FOR INTERNSHIPS
        </div>

        <div className="links-list">
          <button
            type="button"
            className="link-item email-link"
            onClick={copyEmail}
            aria-label={`Copy email address ${links.email}`}
          >
            <PixelIcon name="email" label="Email" />
            <span className="link-text">{copied ? 'COPIED!' : 'Email'}</span>
          </button>

          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <PixelIcon name="github" label="GitHub" />
            <span className="link-text">GitHub</span>
          </a>

          <a
            href={links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <PixelIcon name="code" label="Code" />
            <span className="link-text">Portfolio Source</span>
          </a>

          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <PixelIcon name="linkedin" label="LinkedIn" />
            <span className="link-text">LinkedIn</span>
          </a>

        </div>
      </div>
    </section>
  );
}
