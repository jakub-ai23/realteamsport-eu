# RT Sport Website

Created: 2026-04-07
Last updated: 2026-04-23

## What This Is

Website for **REAL TEAM Sport** (realteamsport.de / realteamsport.eu) — sport events, active travel, and the parent brand for Future Roundnet. Full multi-page site built 2026-04-23. Positioning: travel agency + event company, NOT just roundnet. Blog is a first-class feature — Jakub has diving + travel stories to publish.

## Status

**Built — needs review before deploy.** Commander has seen it in browser. Feedback pending.

**Missing before deploy:**
- [ ] Photo of Jakub in action (coaching/organizing, candid — not posed). Goes in Who We Are section.
- [ ] Diving/travel photo (Red Sea, Egypt, or wherever). Goes in `blog/diving-red-sea.html` hero.
- [ ] Munich story photo (optional). Goes in `blog/munich-sports-club.html` hero.
- [ ] Commander review and sign-off on all copy

**Nice to have (not blocking):**
- [ ] Old parents-era photo (skiing/handball, 90s/2000s) for Track Record section
- [ ] Lapras quality review before wide sharing

## Deploy

```bash
# GitHub Pages — push to main deploys automatically
cd ~/Projects/websites/rt-sport && git add . && git commit -m "message" && git push
```

CNAME: `realteamsport.de` (realteamsport.eu also points here)
Git remote: `jakub-ai23/realteamsport-eu`

## File Structure

```
rt-sport/
├── index.html          # Main landing page (all sections)
├── fresh.html          # FRESH/roundnet overview → futureroundnet.com
├── blog.html           # Blog listing (3 cards)
├── impressum.html      # Legal (real data — Pri kríži 18, Bratislava)
├── datenschutz.html    # GDPR privacy policy
├── blog/
│   ├── fresh-behind-the-scenes.html   # Full FRESH 26 BTS story
│   ├── diving-red-sea.html            # Red Sea diving story
│   └── munich-sports-club.html        # Munich immigrant club story
├── css/
│   └── style.css       # Shared stylesheet (ALL pages link here)
├── assets/
│   └── images/         # FRESH photos (copied + renamed from rt-sports/)
│       ├── fresh26-scream.jpg
│       ├── fresh26-action.jpg
│       ├── fresh26-beach.jpg
│       ├── fresh24-pro.jpg
│       ├── fresh26-group.jpg
│       └── fresh26-day2.jpg
├── hero.jpeg           # Main hero (already existed)
├── logo-dark.svg       # Nav logo on white backgrounds
└── logo-white.svg      # Nav logo on dark/image backgrounds
```

## Design System

- **Theme:** White body, photography-driven, Deep Purple accent
- **Colors:** `--purple: #511090` / `--purple-light: #7b2cbf` / `--black: #0a0a0a` / `--white: #fff` / `--grey-light: #f5f5f5`
- **Fonts:** Raleway (headings, 400/600/700/800) + Inter (body) — Google Fonts CDN
- **Nav:** Fixed top, white background, hamburger on mobile (< 768px)
- **Sections:** White → Grey-light alternating. Purple for "story" section and FRESH stats bar.
- **Cards:** Border + subtle hover shadow. Blog cards with image + body.
- **No inline CSS** — everything in `css/style.css`. Pages only have structural HTML.

## Known Issues / Next Round

- **Design needs more work** — Commander confirmed this build is v0.1, not final. Needs proper design pass once photos are in and feedback is given.
- **Blog placeholder images** — Two blog post heroes are purple gradient placeholders. Replace when photos arrive.
- **Copy review** — All copy is draft. Commander to review tone, accuracy of personal details.
- **No analytics yet** — Add Plausible or simple VPS beacon before wide sharing.

## Brand Context

- REAL TEAM Sport = sport events + active travel arm of REAL TEAM s.r.o.
- CK travel agency license since 1994 | IČO: 31 369 049
- Pri kríži 18, 841 02 Bratislava | Mestský súd Bratislava III, Sro, Vložka: 6700/B
- Jakub took over in 2023 — third chapter
- FRESH / Future Roundnet lives under this umbrella
- Sibling: REAL TEAM Digital (realteamdigital.sk) = tech arm

## Key References

- Full positioning brief: `~/Projects/real-team/RT Digital/RT_SPORT_WEBSITE_BRIEF.md`
- Brand hierarchy: `~/Projects/real-team/RT Digital/WEBSITE_PLAN.md`
- Photo source: `~/Projects/real-team/rt-sports/future-roundnet-website/`

## Rules

- Deploy via GitHub Pages (push to main) — NOT scp, NOT VPS
- Vanilla HTML/CSS/JS only — no frameworks, no build tools
- All shared styles in `css/style.css` — no inline CSS
- No stock photos. Real photos only.
- No hide-until-active patterns (no opacity:0 on content that needs JS to show)
- Symmetry rule: same font sizes, padding, line counts across equivalent elements
- This is a credibility site — personal and direct, not corporate
- Read this CLAUDE.md + RT_SPORT_WEBSITE_BRIEF.md before any future edits
