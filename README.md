# Safia Faiz — Portfolio

Personal portfolio of **Safia Faiz**, AI Engineer & Researcher, live at **https://safia-faiz02.github.io/**.

A single-page static site covering research, work experience, projects, education, teaching and skills, with a downloadable CV. No build step and no framework: plain HTML, CSS and JavaScript served by GitHub Pages.

## Features

- **Light and dark themes**: follows the system setting by default. The navbar toggle overrides it, and the choice is saved in `localStorage` and applied before first paint so the page doesn't flash.
- **Responsive layout** with a collapsible mobile menu (closes on link click or `Esc`).
- **Scroll-spy navigation** that highlights the current section, using `IntersectionObserver`.
- **Reveal-on-scroll** animation for cards and timeline items. If the browser has no `IntersectionObserver`, the content just shows without animation.
- **Floating back-to-top button** that appears after you scroll down.
- **SEO and social previews**: meta description, Open Graph tags with `assets/images/og.jpg`, and an inline SVG "SF" favicon.
- **Accessible markup**: semantic landmarks, ARIA labels on icon buttons, and `aria-expanded` on the menu toggle.

## Sections

| Anchor        | Section    |
|---------------|------------|
| `#home`       | Hero: introduction, CV download, social links |
| `#about`      | About |
| `#research`   | Publications |
| `#experience` | Work experience timeline |
| `#projects`   | Selected projects |
| `#education`  | Academic record |
| `#teaching`   | Teaching, mentoring and community work |
| `#skills`     | Technical toolbox |
| `#contact`    | Contact |

## Tech stack

- HTML5
- CSS3 with custom properties for theming (`css/style.css`)
- Vanilla JavaScript (`js/main.js`)
- [Font Awesome 6.5.1](https://fontawesome.com/) via cdnjs
- Google Fonts: **Fraunces** (display) and **Plus Jakarta Sans** (body)

## Project structure

```
.
├── index.html            # All page content and sections
├── css/
│   └── style.css         # Styles, theme tokens, responsive rules
├── js/
│   └── main.js           # Menu, theme toggle, scroll-spy, reveal, back-to-top
├── assets/
│   ├── cv.pdf            # Downloadable CV
│   ├── profile.svg
│   └── images/
│       ├── profile.jpg   # Hero portrait
│       └── og.jpg        # Social preview image
├── generated-icon.png
└── .replit               # Replit run config (python http.server on port 5000)
```

## Running locally

It's a static site, so any local web server works:

```bash
python -m http.server 5000
```

Then open http://localhost:5000. You can also open `index.html` directly in a browser.

On Replit, the **Run** button starts the same server using the config in `.replit`.

## Customising

- **Content**: edit the sections in `index.html`.
- **Colours and fonts**: change the CSS variables at the top of `css/style.css`. Light values are in `:root`, and dark values are in the `prefers-color-scheme: dark` block and the `[data-theme="dark"]` block. Keep those two dark blocks in sync.
- **CV**: replace `assets/cv.pdf` and keep the same filename.

## Deployment

The site is served by GitHub Pages straight from the `main` branch of this repository (`<username>.github.io`). Push to `main` and the update goes live, with no build or workflow needed.

## License

Personal portfolio. The content, CV and images belong to Safia Faiz. You're welcome to use the code structure as a reference.
