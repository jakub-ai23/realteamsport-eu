# RT Sport Website

Created: 2026-04-07
Last updated: 2026-04-07

## What This Is

Website for **REAL TEAM Sport** (realteamsport.de / realteamsport.eu) — sport events, active travel, and the parent brand for Future Roundnet. Currently a minimal landing page. Full build planned.

## Deploy

```bash
# GitHub Pages — push to main deploys automatically
cd ~/Projects/websites/rt-sport && git add . && git commit -m "message" && git push
```

CNAME: `realteamsport.de` (realteamsport.eu also points here)
Git remote: `jakub-ai23/realteamsport-eu`

## Tech Stack

- Vanilla HTML/CSS/JS — no frameworks
- Currently single file: `index.html` with inline CSS
- Hero image: `hero.jpeg`, logos: `logo-dark.svg`, `logo-white.svg`

## Design System

- **Theme:** Light background (#fff), dark text (#111). Hero with darkened background image.
- **Fonts:** System fonts (-apple-system, BlinkMacSystemFont)
- **Current state:** Minimal landing page. No external CSS file yet.
- **Planned:** Full single-page or 3-page site per the positioning brief.

## Brand Context

- REAL TEAM Sport = sport events + active travel arm of REAL TEAM s.r.o.
- 30+ year company heritage (CK travel agency license since 1994)
- Jakub took over in 2023
- FRESH / Future Roundnet lives under this umbrella
- Sibling: REAL TEAM Digital (realteamdigital.sk) = tech arm

## Key Reference (outside this folder)

- Full positioning brief: `~/Projects/real-team/RT Digital/RT_SPORT_WEBSITE_BRIEF.md`
- Brand hierarchy: `~/Projects/real-team/RT Digital/WEBSITE_PLAN.md`
- Competitor research: `~/Projects/real-team/RT Digital/competitor-research-sport-event-companies.md`
- Design inspiration: `~/Projects/real-team/RT Digital/research-design-inspiration-sport.md`

## Planned Site Structure (from brief)

1. Hero — "Sport events & active travel since 1994"
2. Who We Are — family-rooted travel company, Jakub's story
3. What We Do — FRESH, active travel, partnerships
4. Track Record — timeline 1994-2026
5. The Story Behind It — personal, direct, not corporate
6. Contact / Footer

## Rules

- Deploy via GitHub Pages (push to main)
- Keep vanilla HTML/CSS/JS
- Read RT_SPORT_WEBSITE_BRIEF.md before any build work
- This is a credibility site — tone is personal and direct, not corporate
