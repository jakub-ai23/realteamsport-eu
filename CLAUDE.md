# RT Sport Website

Created: 2026-04-07
Last updated: 2026-08-01 (v1.1 — positioning corrected)

## What This Is

Website for **REAL TEAM Sport** — a **sports travel agency**. REAL TEAM, s.r.o. takes sport
communities somewhere and handles everything that is not the sport. Roundnet community, diving
community, club, training group: the sport is the variable, the agency is the constant.

**This is not a roundnet site.** Roundnet is one discipline and it is the *proof*, not the identity.
**Future Roundnet is an owned sub-brand with its own house at futureroundnet.com** — roundnet
audiences belong there. `roundnet.html` here is a page *about* the brand that sends them onward.
The valuable traffic runs the other way: someone meets Future Roundnet, asks who is behind it,
lands here, finds a licensed 30-year-old company.

A **credibility site, not a conversion site.** No booking, no prices, no forms.

**Skydiving is not to be written about** until the Commander says otherwise (2026-08-01).

**Domain: `realteamsport.eu`** — singular "sport", never "sports". `realteamsport.de` also exists.

## Status

**v1.1 built locally, NOT deployed.** Read `REVIEW-NOTES.md` before doing anything else — it holds
the blocking items, the unverified copy claims, and what changed from v0.1.

**Deploy is currently broken by configuration:** GitHub Pages serves branch **`gh-pages`**; all work
is on **`main`**. That is why the live domain still shows the March 2026 placeholder. Do not switch
the Pages source until v1.0 is signed off — flipping it publishes `main` instantly, with no preview.

## Deploy

```bash
cd ~/Projects/builds/websites/rt-sport && git add . && git commit -m "message" && git push
```

Git remote: `jakub-ai23/realteamsport-eu` · CNAME: `realteamsport.eu`
Pages source: `gh-pages` (see above — must be reconciled with `main` before launch).

Local preview: `python3 -m http.server 8899` then `http://localhost:8899/`

## File Structure

```
index.html · roundnet.html · travel.html · 404.html
impressum.html, datenschutz.html   # redirects to /legal/ — keep, they preserve old links
legal/     imprint.html · privacy.html · travel-terms.html
de/, sk/   language stubs (noindex) — structure ready, content pending
css/       style.css (all shared styles) · fonts.css (generated, self-hosted @font-face)
js/        site.js (mobile nav only)
assets/    images/ (8 photos, 2000px max) · fonts/ (4 woff2, latin + latin-ext)
preview/   screenshots — not part of the site
PLAN-v1.md · REVIEW-NOTES.md
```

## Design System

- **Colours:** `--purple #511090` · `--ink #0f0d14` · `--sand #f7f5f3` (warm, not grey) · `--line #e4dfda`
- **Type:** Archivo (display) + Inter (body), both **variable, self-hosted**, weight range 100–900
- **Layout:** sticky nav · full-bleed hero with gradient scrim · "ledger" proof strip · asymmetric
  splits · bordered pillar grid · timeline rail · dark `.section-ink` for the honest/contact sections
- **`.needs-input`** = loud yellow placeholder for unconfirmed facts. Must never reach production.

## Content integrity — read before writing any copy

**All three blog posts from the April v0.1 build were fabricated.** An agent turned topic lines in
the positioning brief into first-person stories the Commander does not recognise — including the
FRESH behind-the-scenes post, which looked the most credible of the three. All removed 2026-08-01 to
`~/Projects/real-team/rt-sports/fabricated-posts-2026-04/`. **The blog section is gone entirely**:
no `blog.html`, no `blog/`, no Stories in the nav. It returns only when there is something real.

**A topic line in a brief is not a source.** Neither is a plausible detail that makes a sentence
better. Anything specific — a number, a date, a place, a piece of personal history — is either
traceable to a file, stated by the Commander, marked `.needs-input`, or left out. The surviving post
The most believable of the three was still invented — plausibility is not evidence.

## Rules

- **GitHub Pages only.** Not scp, not VPS. Vanilla HTML/CSS/JS — no frameworks, no build tools.
- **No inline CSS.** All styles in `css/style.css`, including per-page hero images
  (`.hero-media-*` modifiers). Currently zero inline styles — keep it that way.
- **Never re-add the Google Fonts CDN.** Fonts are self-hosted on purpose: `fonts.gstatic.com`
  sends every EU visitor's IP to Google, and the privacy page states we make no third-party requests.
  Adding it back silently makes that page a lie. Regenerate fonts with the method noted in
  `REVIEW-NOTES.md` §3 if a weight is ever needed.
- **No stock photos.** Real photos only. Originals: `~/Projects/real-team/rt-sports/future-roundnet-website/`.
  Resize to 2000px / q62 before committing — the originals are up to 8192px wide.
- **No fabricated facts.** Anything unconfirmed gets a `.needs-input` placeholder, never a
  plausible-sounding guess. This applies hardest to the legal pages and the blog posts.
- **Preview before push.** "los" / "go" is not deploy authorisation. Local preview → explicit OK → deploy.
- **Mobile check before ship.** Verified at 320 / 375 / 768. Re-run after any layout change.
- **Symmetry rule.** Equivalent elements share font sizes, padding and vertical alignment. Measure it,
  do not eyeball it — a `flex: 1` on the wrong selector already broke the pillar row once.
- Legal pages are the company's legal exposure. Changes there get read by Pavol or a lawyer, not shipped.

## Key References

- Build plan + decisions: `PLAN-v1.md`
- Open items + unverified claims: `REVIEW-NOTES.md`
- Positioning brief: `~/Projects/real-team/RT Digital/RT_SPORT_WEBSITE_BRIEF.md`
- Brand narrative + voice: `~/Projects/real-team/RT Digital/BRAND_NARRATIVE.md`
- Company facts (IČO, registration, units): `~/Projects/real-team/CLAUDE.md`
