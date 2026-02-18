# CLAUDE.md — Ticket Marketplace MVP

## Project Overview

This is a Ticket Marketplace MVP — a platform for buying and selling event tickets. The repository is in its initial scaffolding phase.

## Repository Status

**Current state**: Fresh repository — no application code yet. Awaiting business plan and technical requirements to begin MVP development.

## Directory Structure

```
/ (root)
├── CLAUDE.md          # This file — AI assistant guide
├── README.md          # Project overview
├── tasks/
│   ├── todo.md        # Task tracking with checkable items
│   └── lessons.md     # Self-improvement patterns and corrections
└── .git/              # Git version control
```

> This section will be updated as the project structure is built out.

## Git Workflow

- **Main development branch**: `claude/build-mvp-platform-N51Wz`
- **Default branch**: `main`
- Push with: `git push -u origin claude/build-mvp-platform-N51Wz`
- Write clear, descriptive commit messages
- Never force push or push to `main` without explicit permission

## Development Conventions (To Be Established)

The following will be defined once the tech stack is chosen and scaffolding begins:

- Language and framework
- Package manager and dependency management
- Code style and linting rules
- Testing strategy and tools
- Database and ORM
- API design patterns
- Environment variable management
- Build and deployment pipeline

## Commands Reference

> Commands will be added here as the project is scaffolded (e.g., `npm run dev`, `npm test`, `npm run build`).

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
5. **Test your changes** — Run the test suite after making changes.
6. **Follow existing patterns** — Match the style and conventions already present in the codebase.
7. **Update this file** — Keep CLAUDE.md current as the project evolves.
8. **Log lessons** — After any correction, update `tasks/lessons.md` immediately.
