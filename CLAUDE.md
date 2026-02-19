# CLAUDE.md — Stub Vault MVP

## Project Overview

Stub Vault is a licensed sports ticket memorabilia marketplace MVP. Fans upload a digital ticket screenshot, the platform simulates verification, and they can preview and order a premium physical souvenir ticket. This is a non-functional demo built to showcase the user flow for investors and potential sports entity partners.

## Repository Status

**Current state**: MVP complete — 6-screen React SPA with mock data, Tailwind CSS styling, and full user flow from landing to order confirmation.

## Directory Structure

```
/ (root)
├── CLAUDE.md                          # This file — AI assistant guide
├── README.md                          # Project overview & quick start
├── package.json                       # Dependencies and scripts
├── vite.config.js                     # Vite + Tailwind plugin config
├── index.html                         # Entry HTML with Google Fonts
├── eslint.config.js                   # ESLint config
├── tasks/
│   ├── todo.md                        # Task tracking
│   └── lessons.md                     # Self-improvement log
├── src/
│   ├── main.jsx                       # React entry point
│   ├── index.css                      # Tailwind imports + brand theme
│   ├── App.jsx                        # Screen router / state orchestrator
│   ├── data/
│   │   └── mockData.js                # 10 teams, games, leagues, defaults
│   └── components/
│       ├── LandingPage.jsx            # Screen 1: Hero, how-it-works, partners
│       ├── BrowseTeams.jsx            # Screen 2: Team directory with league filter
│       ├── SelectGame.jsx             # Screen 3: Game list for selected team
│       ├── UploadTicket.jsx           # Screen 4: Drag-drop upload + verification
│       ├── TicketPreview.jsx          # Screen 5: Physical ticket preview + pricing
│       └── OrderCheckout.jsx          # Screen 6: Shipping form + confirmation
└── dist/                              # Production build output
```

## Tech Stack

- **React 19** (via Vite 7)
- **Tailwind CSS v4** (with `@tailwindcss/vite` plugin)
- **No backend** — all mock data, no API calls, no payment processing
- **No router library** — screen navigation via React useState

## Commands Reference

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Production build to dist/
npm run lint         # ESLint check
npm run preview      # Preview production build
```

## Brand Guidelines

| Element         | Value                                              |
|----------------|----------------------------------------------------|
| Brand Name      | Stub Vault                                         |
| Wordmark        | "Stub" white + "Vault" #A8281F italic (Playfair)   |
| Tagline         | Your Seat. Your Story. Your Stub.                  |
| Display Font    | Playfair Display (headings, team names, wordmark)  |
| Data Font       | IBM Plex Mono (numbers, buttons, labels, inputs)   |
| Body Font       | Libre Baskerville (paragraphs, descriptions)       |
| Page Background | `#F0E6CC` (cream) — never use #FFFFFF              |
| Card Surfaces   | `#F7F0DC` (cream-light)                            |
| Dark Panels     | `#111A0E` (void) / `#1C2E16` (deep)               |
| Primary CTA     | `#8C1F1A` (brick red), white text, 1px radius      |
| Data Accents    | `#B87310` (amber) on dark panels only              |
| Gold            | `#C9A227` — ticket stub seat numbers ONLY          |

Custom Tailwind theme colors defined in `src/index.css`:
- **Greens**: `void`, `deep`, `field`, `muted`
- **Reds**: `red`, `red-hover`, `red-pale`
- **Creams**: `cream`, `cream-light`, `parchment`, `cream-dark`
- **Ambers**: `amber`, `amber-light`
- **Inks**: `ink`, `ink-mid`, `ink-dim`

### Typography Rules
1. **Headings** (Playfair Display): H1–H3, brand wordmark, team names (always italic)
2. **Data & Controls** (IBM Plex Mono): Numbers, prices, dates, buttons, labels, inputs, badges, nav
3. **Body** (Libre Baskerville): Paragraphs, descriptions, captions only
4. Never use Inter, Roboto, Arial, or any sans-serif font
5. Never use pure white (#FFFFFF) as a background

## Git Workflow

- **Main development branch**: `claude/build-mvp-platform-N51Wz`
- **Default branch**: `main`
- Push with: `git push -u origin claude/build-mvp-platform-N51Wz`
- Write clear, descriptive commit messages
- Never force push or push to `main` without explicit permission

---

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.

---

## Workflow Orchestration

### 1. Plan Mode Default

- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, **STOP and re-plan immediately** — don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy

Keep the main context window clean:

- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop

- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done

- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)

- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes — don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing

- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests → then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

---

## Task Management

1. **Plan First**: Write plan to `tasks/todo.md` with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review to `tasks/todo.md`
6. **Capture Lessons**: Update `tasks/lessons.md` after corrections

---

## Key Conventions for AI Assistants

1. **Read before writing** — Always read existing files before modifying them.
2. **Minimal changes** — Only change what is necessary; avoid over-engineering.
3. **No secrets in code** — Never commit `.env` files, API keys, or credentials.
4. **Track work** — Use `tasks/todo.md` and TodoWrite to plan and track multi-step tasks.
5. **Test your changes** — Run `npm run lint` and `npm run build` after making changes.
6. **Follow existing patterns** — Match the style and conventions already present in the codebase.
7. **Update this file** — Keep CLAUDE.md current as the project evolves.
8. **Log lessons** — After any correction, update `tasks/lessons.md` immediately.
