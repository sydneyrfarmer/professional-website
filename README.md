# Professional Portfolio

A single-page website to showcase your experience, skills, and contact info.

## How to view the site

1. Open the project folder in Cursor: **File → Open Folder** → choose `professional-portfolio`.
2. Right-click `index.html` in the file explorer and choose **Reveal in File Explorer** (or open the folder in Windows Explorer).
3. Double-click `index.html` to open it in your default browser.

Or from a terminal in the project folder:

```bash
start index.html
```

## How to customize

All content is in **index.html**. Replace the placeholders in brackets with your own:

- **Hero**: Your headline, tagline, and short intro.
- **About**: Bio, location, availability, and a link to your resume PDF (upload the PDF to this folder and set `href="your-resume.pdf"`).
- **Experience**: Each timeline block is one role. Edit dates, titles, companies, and descriptions. Copy a full `<article class="timeline-item">...</article>` block to add more jobs; delete blocks you don’t need.
- **Skills**: Change category titles and list items to match your skills and tools.
- **Contact**: Replace the email and LinkedIn URL with yours.

## Files

- `index.html` — All page content and structure.
- `styles.css` — Layout, colors, typography. Change `:root` variables at the top to tweak colors and spacing.
- `script.js` — Footer year and mobile menu. No need to edit unless you add features.

## Optional: change colors

In **styles.css**, at the top under `:root`, you can change:

- `--color-accent: #2563eb` — Links and buttons (try `#0d9488` for teal or `#7c3aed` for purple).
- `--color-bg: #faf9f7` — Page background.
- `--color-text: #1a1a1a` — Main text.

Save the file and refresh the browser to see updates.
