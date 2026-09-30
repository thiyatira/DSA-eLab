# DSA-eLab ⚡

> **Interactive C Challenges & Solutions Portal** — A fast, modern web application and knowledge base featuring 40 Level 2 university Data Structures & Algorithms challenges with verified C solutions, step-by-step algorithmic breakdowns, and beautiful LaTeX mathematical formula rendering.

---

## 🌟 Highlights & Features

- **40 Curated Level 2 Challenges**:
  - 🔍 **Searching** (Challenges 1 – 10)
  - 🔀 **Sorting** (Challenges 11 – 20)
  - 📊 **Arrays** (Challenges 21 – 30)
  - 🔗 **Linked List** (Challenges 31 – 40)
- **📐 Mathematical Symbol Rendering**: Full LaTeX math formula typesetting powered by [KaTeX](https://katex.org/) (handles inline `$x$`, `$\le$`, `$i \in [1, P]$`, `$Q_j$`, sets `$\{1, 3, 7\}$`, and display equations `$$\dots$$`).
- **💻 Verified C Solutions**: Clean C source code matching mandatory keywords, NLOC, cyclomatic complexity limits, and automated grader constraints.
- **⚡ Interactive Workspace**:
  - **Multi-View Modes**: Split View, Problem Only, Solution Only, and a continuous **All-in-One One Page View** with quick topic jumps, instant code copying, and card collapsing.
  - **One-Click Code Copy**: Instantly copy working C code to your clipboard.
  - **Instant Search & Topic Filter**: Search by problem title, code, keywords, or topics in both single and continuous views.
  - **Keyboard Navigation**: Use `Left Arrow` / `Right Arrow` keys to cycle through challenges.
  - **Dark & Light Mode**: Seamless dark/light theme switching with local preference persistence.
  - **Mobile Responsive & Print Ready**: Off-canvas navigation drawer and print/PDF stylesheet.

---

## 🚀 Live Deployment on Vercel

This repository is pre-configured with `vercel.json` for zero-configuration static deployment:

1. Import this repository (`https://github.com/thiyatira/DSA-eLab.git`) into [Vercel](https://vercel.com).
2. Framework Preset: **Other** (Root directory: `./`).
3. Click **Deploy**!

---

## 💻 Running Locally

No npm or build steps are required. You can run the application directly using any local web server:

```bash
# Using Python 3
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000) in your browser.

---

## 📁 Repository Structure

```
DSA-eLab/
├── index.html              # Main single-page application entry point
├── style.css               # Design system, themes (dark/light), and KaTeX styling
├── app.js                  # Search, filter, view switching, and math rendering
├── data.js                 # Compiled dataset of challenges, questions, and solutions
├── vercel.json             # Vercel deployment configuration
├── build_site.py           # Script to compile markdown files into data.js
├── generate_solutions.py   # Automated grader solution generator
├── code.py                 # Markdown question organizer utility
├── raw.md                  # Raw source problem statements
├── Solutions/              # Markdown solution explanations with C code
│   ├── Searching/
│   ├── Sorting/
│   ├── Arrays/
│   └── Linked List/
├── Searching/              # Searching challenge markdown files
├── Sorting/                # Sorting challenge markdown files
├── Arrays/                 # Arrays challenge markdown files
└── Linked List/            # Linked List challenge markdown files
```

---

## 🛠️ Rebuilding the Dataset

If you modify or add any markdown files under `Solutions/` or topic folders, re-compile `data.js` by running:

```bash
python build_site.py
```

---

## 📄 License

MIT © [thiyatira](https://github.com/thiyatira)
