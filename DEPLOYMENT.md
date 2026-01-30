# Putting Your Portfolio on the Web

Your site is just HTML, CSS, and JS — no server or database. You can host it for **free** on any of these. Pick one and follow the steps.

---

## Option A: GitHub Pages (free, good if you use Git)

1. **Create a GitHub account** (if you don’t have one): [github.com](https://github.com).

2. **Create a new repository**
   - Click **New repository**.
   - Name it something like `professional-portfolio` (or `username.github.io` if you want the URL `https://username.github.io`).
   - Leave it **Public**, don’t add a README.
   - Click **Create repository**.

3. **Install Git** (if you haven’t already)
   - Download: [git-scm.com/download/win](https://git-scm.com/download/win). Run the installer and accept the defaults.
   - Close and reopen PowerShell (or Cursor’s terminal) so it recognizes `git`.

4. **Push your project**
   - **Open a terminal in your project folder** (e.g. in Cursor: **Ctrl+`** → Terminal opens in your project).
   - Run these commands **one at a time**. Do **not** copy the lines that say `powershell` or triple backticks (```)—only the lines that start with `git`:
     - `git init`
     - `git add .`
     - `git commit -m "Initial portfolio"`
     - `git branch -M main`
     - `git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git` ← replace YOUR_USERNAME and YOUR_REPO_NAME with your GitHub username and repo name
     - `git push -u origin main`
   - When you run `git push`, a browser or prompt may ask you to sign in to GitHub (or use a personal access token). Complete that to finish.

5. **Turn on GitHub Pages**
   - In the repo, go to **Settings → Pages**.
   - Under **Source**, choose **Deploy from a branch**.
   - Branch: **main**, folder: **/ (root)**.
   - Click **Save**.

6. **Wait a minute or two.** Your site will be at:
   - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`  
   - Or, if the repo is named `YOUR_USERNAME.github.io`, then: `https://YOUR_USERNAME.github.io/`.

---

## Option B: Netlify (free, no Git required)

1. **Create a Netlify account**: [netlify.com](https://www.netlify.com) (you can sign up with email or GitHub).

2. **Deploy**
   - Go to [app.netlify.com](https://app.netlify.com) and click **Add new site → Deploy manually**.
   - Drag and drop your **entire project folder** (the one that contains `index.html`, `styles.css`, `script.js`) into the upload area.

3. **Your site is live.** Netlify will give you a URL like `https://random-name-123.netlify.app`.

4. **Optional: custom name**
   - In Netlify: **Site settings → Domain management → Edit site name**.
   - You can pick something like `sydney-portfolio.netlify.app`.

---

## Option C: Vercel (free)

1. **Create a Vercel account**: [vercel.com](https://vercel.com).

2. **Install Vercel CLI** (optional) or use the website:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Import your project from GitHub (if you pushed it there), or drag and drop your folder.

3. **Deploy.** Vercel will give you a URL like `https://your-project.vercel.app`.

---

## After deployment

- **Resume PDF**: If you link to a resume, put the PDF file in the same folder as `index.html` and use `href="your-resume.pdf"` so it works on the live site.
- **Custom domain** (e.g. `sydney.com`): Netlify and Vercel both support adding your own domain on their free plans; they’ll show the steps in the dashboard.

---

**Recommendation:** If you’re new to Git, use **Netlify** (Option B) and drag-and-drop your folder. If you’re okay with Git, **GitHub Pages** (Option A) keeps your code in one place and updates the site when you push.
