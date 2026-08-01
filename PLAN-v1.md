# REAL TEAM Sport — Website v1.0 Build Plan

**Created:** 2026-08-01
**Last updated:** 2026-08-01
**Protocol:** Daemon (PLAN → BRIEF → EXECUTE → DEBRIEF → LEARN)
**Domain:** realteamsport.eu (singular "sport" — confirmed, never "sports")
**Repo:** `jakub-ai23/realteamsport-eu`

---

## Commander's Intent

Build a site for REAL TEAM Sport that a 30-year-old family travel company can stand behind:
legally correct as a Slovak CK, written in original first-person copy, and good enough
that Jakub sends the link without a caveat attached.

The site's job is **credibility, not conversion**. Booking stays on futureroundnet.com.

---

## Decisions locked (Commander, 2026-08-01)

| # | Decision | Choice |
|---|----------|--------|
| 1 | Scope | **Rebuild design from scratch.** v0.1 copy kept as raw material, rewritten not discarded. Ships as v1.0. |
| 2 | Languages | **EN ships first.** `/de/` and `/sk/` paths + language switcher + hreflang built into the architecture now, populated later. No retrofit. |
| 3 | Compliance | **Full CK / travel-agency compliance.** Not just Impressum + GDPR. |
| 4 | FRESH | **Overview here, booking stays on futureroundnet.com.** No pricing, no packages, no registration on this site. |

---

## Situation — what already existed (FACT)

- Full v0.1 multi-page site at `~/Projects/builds/websites/rt-sport/`, committed to `main` on 2026-04-23.
- **It was never live.** GitHub Pages is configured to serve branch **`gh-pages`**; every commit went to `main`.
  The public site is the March-31 single-page placeholder carrying a "rebuild notice" banner.
  Root cause of four months of apparent inactivity. Fix is one setting, not a rebuild.
- `real-team/CLAUDE.md` §7 states "No website built, domains parked/forwarding" — outdated on both counts. Correct at debrief.

### Assets available
- **Brief:** `~/Projects/real-team/RT Digital/RT_SPORT_WEBSITE_BRIEF.md` (159 lines) — audiences, section story, photo guide, exclusions. Strong. Governs this build.
- **Brand narrative:** `~/Projects/real-team/RT Digital/BRAND_NARRATIVE.md` — origin story, credibility chain, voice rules.
- **Copy draft v1:** `~/Projects/real-team/RT Digital/website-copy-draft-v1.md` (419 lines) — ~all of it is **RT Digital** copy, not RT Sport. Not reusable here.
- **Photos:** 18 FRESH JPGs in `real-team/rt-sports/future-roundnet-website/`. 6 already copied into `assets/images/`. All real, no stock.
- **Logo:** `real-team/realteam-logo/` — RT-A and RT-B, dark/white, SVG + PNG. Site currently uses `logo-dark.svg` / `logo-white.svg` (verify these match the delivered set).

---

## Compliance findings (must fix — these are defects, not preferences)

1. **Impressum cites the wrong country's law.** Current `impressum.html` is built on German
   **§ 5 TMG** and **§ 55 Abs. 2 RStV**. REAL TEAM, s.r.o. is a **Slovak** company.
   Applicable law is **zákon č. 22/2004 Z. z. o elektronickom obchode** (§ 4 identification duties),
   implementing EU Directive 2000/31/EC. Additionally § 55 RStV was superseded in Germany by the
   MStV in 2020 — the citation is both wrong-jurisdiction and outdated.
2. **Missing CK insolvency-insurance disclosure.** Under **zákon č. 170/2018 Z. z.** every Slovak
   travel agency must publish its insolvency-protection information **on its website**. Absent entirely.
3. **Contact email mismatch.** Site says `jakub@realteamsport.de`; `real-team/CLAUDE.md` records the
   public address as `jakub@realteamsport.eu`. One of the two is wrong — resolve before ship.
4. **Missing § 4 fields:** DIČ/VAT (SK2020873745 is on record), and the supervisory authority
   (orgán dozoru) for the CK activity.

> **Boundary:** I am not a lawyer. This build produces the correct *structure* and cites the correct
> *statutes*. Every factual gap is marked `[NEED FROM YOU]` and never invented. Final sign-off before
> ship should come from Pavol (afes s.r.o.) or a SK lawyer.

### `[NEED FROM YOU]` — blocking full compliance
- Insolvency insurer name + policy number + validity period (Union? per CLAUDE.md ~€1.5k/yr premium)
- Scan/PDF of the insurance certificate to link
- Correct public contact email (.eu or .de)
- Supervisory authority for CK activity (likely the district office / MH SR — to confirm, not guess)
- Confirmation the CK licence number/registration as it appears on the ORSR entry

---

## Architecture

```
rt-sport/
├── index.html                  EN home — hero, who we are, what we do, track record, story
├── fresh.html                  FRESH overview → CTA out to futureroundnet.com
├── travel.html                 Active travel / groups / partnerships
├── blog.html
├── blog/                       3 existing posts, re-designed
├── legal/
│   ├── imprint.html            zákon 22/2004 § 4 — SK law, correct citations
│   ├── privacy.html            GDPR
│   └── travel-terms.html       zákon 170/2018 — CK disclosures + insolvency protection
├── de/                         structure only, EN fallback, populated later
├── sk/                         structure only
├── css/style.css
├── assets/images/
└── CNAME                       realteamsport.eu
```

- Language switcher in nav; `hreflang` + `x-default` on every page from day one.
- Old `impressum.html` / `datenschutz.html` become redirects to `/legal/` so no link rots.

## Design direction

- Brand: Deep Purple `#511090`, black, white. Photography-driven, mobile-first.
- Kill from v0.1: emoji pillar icons, purple-gradient placeholder blog heroes.
- Tone: warm, personal, confident. Family company that does real things. Not startup, not corporate.
- Symmetry rule applies — equal font sizes, padding, line counts across equivalent elements.

## Copy principle (the primary focus)

**Every line original, written from Jakub's actual history.** No template phrases, no AI-voice, no
corporate filler. First person where it's his story. Facts only — anything unverified gets
`[NEED FROM YOU]` rather than a plausible invention. v0.1 copy is raw material to sharpen, not a base
to pad out.

---

## PACE

- **Primary:** Rebuild v1.0 on the existing repo. Fix Pages source `gh-pages` → `main`. Preview locally, Commander signs off, then deploy.
- **Alternate:** If the Pages source can't be switched cleanly, push the built site to `gh-pages` instead and leave `main` as source-of-truth.
- **Contingency:** If compliance `[NEED FROM YOU]` items stay open, ship EN site with legal pages carrying visible placeholders and keep the domain on the placeholder until Pavol signs off.
- **Emergency:** Live placeholder stays up. Nothing about the current public state gets worse by working on this.

## Hard rules for this build

- Vanilla HTML/CSS/JS. No frameworks, no build tools. GitHub Pages.
- All shared styles in `css/style.css`. No inline CSS.
- Real photos only. Never stock.
- **Preview before push.** "los" / "go" is not deploy authorization. Local preview → explicit OK → deploy.
- Mobile check on every changed page before ship.
- No fabricated facts, dates, numbers, or legal citations.

---

## Status log

- 2026-08-01 — Plan written. Terrain read, 4 decisions locked, compliance defects identified. Execution begins.
- 2026-08-01 — **EXECUTE complete. v1.0 built, not deployed.** 15 HTML files: home, FRESH, travel,
  blog + 3 posts, 3 legal pages, DE/SK stubs, 404, 2 redirects. New stylesheet, self-hosted fonts,
  images 21 MB → 4.1 MB. Verified: no broken internal links, no horizontal overflow at 320/375/768
  across all 11 real pages, zero inline CSS, zero German-law citations. Open items and every
  unverified copy claim written up in `REVIEW-NOTES.md`. Awaiting Commander review, then the
  `gh-pages` reconciliation, then deploy.
- 2026-08-01 — **v1.1 after Commander review.** Positioning was wrong: built as a roundnet company
  with a travel department, corrected to a sports travel agency serving sport communities, with
  Future Roundnet as an owned sub-brand pointing at its own site. `fresh.html` → `roundnet.html`,
  rewritten as a brand page. Homepage "What we do" reframed capability-first. Travel page opens on
  the multi-sport frame. "World's biggest roundnet training camp" restored (Commander confirms it is
  proven). Two fabricated blog posts removed from the repo after the Commander did not recognise
  them. Re-verified: 0 broken links, no overflow at 320/375/768, 0 inline CSS.
