# RT Sport Website

Created: 2026-04-07
Last updated: 2026-08-01 (v2 — stripped to a company page)

## What This Is

A **credibility page for REAL TEAM, s.r.o.** The reader is the tax office, or anyone verifying that
the company is a real, operating business. It is a **document, not a marketing site**: no selling,
no brand-building, no CTAs, no analytics, no scripts.

**Domain: `realteamsport.eu`** — singular "sport", never "sports".

**The whole site is four files:**
```
index.html      Slovak      (primary — the reader is a Slovak authority)
en/index.html   English
pravne.html     Slovak legal
en/legal.html   English legal
404.html
```

Deleted 2026-08-01 and not to be reinstated without a reason: blog, roundnet page, travel page,
the three separate legal pages, DE stubs, old redirects, all JavaScript.

## Status

**v2 built, NOT deployed.** Read `REVIEW-NOTES.md` first — open placeholders, missing photos,
and the Slovak proofread are listed there.

Pages serves `gh-pages`; work is on `main`. That is why the live domain still shows the March
placeholder. Do not switch the source until this version is approved.
## Deploy

```bash
cd ~/Projects/builds/websites/rt-sport && git add . && git commit -m "message" && git push
```

Git remote: `jakub-ai23/realteamsport-eu` · CNAME: `realteamsport.eu`
Pages source: `gh-pages` (see above — must be reconciled with `main` before launch).

Local preview: `python3 -m http.server 8899` then `http://localhost:8899/`

## File Structure

```
index.html · en/index.html · pravne.html · en/legal.html · 404.html
robots.txt · sitemap.xml · llms.txt   (SEO/GEO, added 2026-08-03)
css/       style.css (all shared styles) · fonts.css (self-hosted @font-face)
assets/    images/ (2000px max, q62; plus futureroundnet-logo.png 400px) · fonts/ (4 woff2)
preview/   screenshots — not part of the site
PLAN-v1.md · REVIEW-NOTES.md
```

## SEO / GEO

- **Never optimise into "kemp", "sústredenie" or "podujatie".** The CK licence covers selling
  travel, not organising events. The site says **športové cesty**, and so does every title,
  description, FAQ answer and schema field. This costs traffic on the stronger keyword and is
  deliberate.
- **Structured data lives inline as JSON-LD** in each page's `<head>`: one `Organization`
  (`@id` `https://realteamsport.eu/#organization`, the entity anchor for AI answer engines),
  plus `WebSite`, `WebPage` and `FAQPage`. The legal pages repeat the Organization block by
  `@id` because that is where the registry facts are.
- **Every schema value must trace to a page or to `~/Projects/real-team/CLAUDE.md`.**
  `foundingDate` is deliberately absent: the record says "licensed since 1994", which is not
  the same claim as the company's founding year.
- **`llms.txt`** is the plain-text brief for LLM crawlers. Update it when the company facts,
  the destination list or the FRESH dates change, or it starts lying on our behalf.
- **The Future Roundnet logo (`assets/images/futureroundnet-logo.png`) is black on transparent.**
  It only works on a light section. There is no light variant in this repo, so do not move the
  `.fr-mark` block onto `.section-ink`. Source: `~/Projects/real-team/rt-sports/future-roundnet-website/site/assets/Logo_FR_black2.png`.
- **The leadership block (`#vedenie`) says CEO / konateľ, never founder.** Jakub took the company
  over; he did not found it. The block is deliberately three sentences and meant to grow later.
- **The FAQ block is the GEO surface.** Answers stay short, factual and self-contained, because
  an answer engine quotes one paragraph, not the page.

## Design System

- **Restraint is the design.** Document-like: modest type scale, hairline rules, data tables.
  A brochure reads as marketing; a company profile reads as substance. That is the whole brief.
- **Colours:** `--ink #14131a` · `--sand #f6f4f2` · `--line #e2ded9` · `--accent #511090` used
  only as a hairline. The Future Roundnet pink/cyan lives **in the photographs**, never in the
  chrome — putting it in the UI would compete with the photos and invert the brand hierarchy.
- **Type:** Archivo (display) + Inter (body), variable, self-hosted.
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
