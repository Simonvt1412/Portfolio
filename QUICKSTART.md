# Quick Start Guide

Welcome! This portfolio is ready to go. Here's how to customize it quickly.

## ⚡ 5-Minute Setup

### 1. Update Your Info

**File:** `src/components/Hero.jsx` (lines 19-22)
```javascript
<h1 className="hero-title">Hi, I'm [Your Name]</h1>
<p className="hero-description">
  I'm a passionate developer creating beautiful and functional web experiences.
  Explore my work below to see what I've been building.
</p>
```

### 2. Add Contact Links

**File:** `src/components/LinksSection.jsx` (lines 9-14)
```javascript
const links = {
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  twitter: 'https://twitter.com/yourhandle',
};
```

### 3. Add Your Projects

**File:** `src/data/projects.json`

```json
[
  {
    "id": 1,
    "title": "My Amazing Project",
    "shortDescription": "A brief one-line description",
    "description": "Longer description with details about what this project does, the tech stack, and what you learned.",
    "tech": ["React", "Node.js", "PostgreSQL"],
    "image": "project-1.jpg",
    "links": {
      "github": "https://github.com/you/project1",
      "live": "https://project1-demo.com"
    }
  }
]
```

### 4. Update Navbar

**File:** `src/components/Navbar.jsx` (line 11)
```javascript
<Link to="/" className="navbar-logo">
  Your Name
</Link>
```

## 🎨 Customization Options

### Change Colors

**File:** `src/index.css`

Find this section and modify the values:
```css
:root {
  --primary-blue: #5b9fd1;    /* Main accent color */
  --primary-blue-dark: #4a7db5; /* Hover state */
  --bg-white: #ffffff;
  --bg-light: #fafafa;
  --text-dark: #333333;
  --text-medium: #666666;
}
```

### Add Images to Projects

1. Place your images in `src/assets/`
2. Update `projects.json` with the filename
3. In `ProjectCard.jsx`, update the image section to display real images:
   ```javascript
   <img 
     src={`/src/assets/${project.image}`} 
     alt={project.title}
     className="project-image"
   />
   ```

### Customize Typography

**File:** `src/index.css`

Change font or sizes in the `:root` selector and media queries.

### Add More Navigation Links

**File:** `src/components/Navbar.jsx`

Add new links in the `nav-links` div (lines 14-21):
```javascript
<a href="/#projects" className="nav-link">
  Projects
</a>
<a href="/resume.pdf" className="nav-link">
  Resume
</a>
```

## 🚀 Before You Deploy

- [ ] Replace placeholder text with your actual info
- [ ] Update all social links
- [ ] Add 2-3 real projects to `projects.json`
- [ ] Add project images to `src/assets/`
- [ ] Test all links work
- [ ] Test on mobile device
- [ ] Run `npm run build` and check for errors

## 📤 Deployment Options

### Vercel (Recommended - Free)
```bash
npm install -g vercel
vercel
```
Then follow prompts. Takes 2 minutes.

### Netlify (Free)
1. Push code to GitHub
2. Connect repo at [netlify.com](https://netlify.com)
3. Deploy automatically on each push

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to GitHub Pages
```

## 🆘 Common Issues

**Q: I changed projects.json but nothing shows up**
- Restart dev server: Press `q` then run `npm run dev` again
- Check JSON syntax - must be valid JSON

**Q: Images aren't showing**
- Make sure image files are in `src/assets/`
- Check filename matches `projects.json` exactly
- Use relative paths: `/src/assets/image.jpg`

**Q: Routing not working**
- Make sure you're using `npm run dev` (not just opening HTML file)
- Check that React Router is properly imported in `App.jsx`

**Q: Styles look weird on mobile**
- Check browser DevTools responsive mode
- Look at media queries in component CSS files (around 768px breakpoint)

## 📚 File Guide

| File | Purpose | Edit When |
|------|---------|-----------|
| `src/components/Hero.jsx` | Hero text | Changing intro text |
| `src/components/LinksSection.jsx` | Contact links | Adding social profiles |
| `src/components/Navbar.jsx` | Top navigation | Changing logo/nav items |
| `src/data/projects.json` | Projects list | Adding your work |
| `src/index.css` | Colors & fonts | Customizing look |
| `README.md` | Documentation | N/A - reference only |

## 💬 Tips

- **Keep it simple**: Lots of whitespace is better than busy layouts
- **Subtle animations**: GSAP is already configured, but keep animations under 1 second
- **Mobile first**: Test on phone early and often
- **Link check**: Make sure all GitHub/LinkedIn links are correct
- **Performance**: Images should be compressed (under 500KB each)

## 🎯 What's Next?

After you've customized everything:

1. Test locally: `npm run dev` → visit `http://localhost:5173`
2. Build for production: `npm run build`
3. Deploy using Vercel, Netlify, or GitHub Pages
4. Share your portfolio!

---

Happy building! 🚀
