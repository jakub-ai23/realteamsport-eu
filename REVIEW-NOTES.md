# REAL TEAM, s.r.o. — site notes

**Last updated:** 2026-08-01 · **Status:** v2 built locally, NOT deployed.

## What this site is

A credibility page for a company that is not being marketed. The reader is the tax office or anyone
checking whether REAL TEAM, s.r.o. is a real, operating business. It is a document, not a brochure.

**Two pages per language.** Slovak at `/`, English at `/en/`. Legal at `/pravne.html` and
`/en/legal.html`. That is the whole site.

Everything else was deleted 2026-08-01: the blog, the roundnet page, the travel page, the three
separate legal pages, the DE stub, the old redirects, and the JavaScript (no menu, no scripts).

## Decisions behind it (Commander, 2026-08-01)

- **Only the latest event is shown** — FRESH 26, with photos. FRESH 25 and 24 appear as one dated
  line each, to show three consecutive years rather than a single event.
- **Nothing that did not happen goes on the site.** Researched and confirmed: no Slovak agency
  publishes trips that fell through. Commander: *"I went to Albania and the offer was shit so I
  couldn't offer it. No that's just bullshit."* He is right — and a website is the wrong artifact
  for that anyway. What defends a scouting trip is a dated record in the Naklady folder: who was
  met, what was offered, why it was declined.
- **Only legally compulsory data is published.** Three items: § 4 zákon 22/2004 identity,
  insolvency protection under zákon 170/2018, and a GDPR notice (required because the host
  processes server logs).
- **The insured sum is deliberately omitted.** The garančný list states 15 000 EUR, which is set at
  30% of planned annual package revenue and would let a reader infer roughly €50k of turnover. The
  insurer, policy number and validity are published, which discloses the protection as the law
  intends. Other SK agencies do publish the sum; this is a considered choice, not an oversight.

## From the garančný list (Union, policy 11-66238)

Insurer Union poisťovňa, a.s., Karadžičova 10, 813 60 Bratislava, IČO 31 322 051 · policy 11-66238 ·
valid for packages purchased **01.02.2026 – 31.01.2027** · claims majetok.likvidacia@union.sk,
+421 2 2081 1811 · 6-month claim deadline.

**⚠ Renewal date: 31.01.2027.** The page states a validity that expires. Put a calendar reminder for
January 2027 — the previous site sat stale for four months and this is the one field where stale
equals wrong.

## Still needed from you

1. **Real FRESH 26 photographs.** The four in the gallery are the `fresh26-*` files from
   `future-roundnet-website/` — a grass pitch in cold weather, and the first one is genuinely poor.
   They sit badly next to the beach lead image. You said you have hundreds; a set of 6–9 from
   FRESH 26 replaces them directly.
2. **The lead image is FRESH 23**, captioned "FRESH, Malorka" without a year so it states nothing
   false — but a FRESH 26 frame would be better on a page whose featured event is FRESH 26.
3. **Exact FRESH 26 dates.** The page says "marec 2026". FRESH 25 as "marec 2025" is inferred from
   the Helios rooming list (03.03–14.03.25) in Downloads. FRESH 24 carries a year only, since I have
   no source for the month. Give me the real dates and they go in.
4. **Two yellow placeholders** remain, both the same field in SK and EN: the competent SOI
   inspectorate and address, and a public telephone number for the legal page.
5. **Slovak proofread.** I drafted it; you are the native speaker and it is addressed to a Slovak
   authority. The legal terminology especially needs your eye before this goes live.
6. **Pavol should read `/pravne.html` once** — it is the company's legal exposure, and I am not a
   lawyer. Ask him specifically whether omitting the insured sum is acceptable.

## Before deploy

GitHub Pages serves branch **`gh-pages`**; the work is on **`main`**. That mismatch is why
realteamsport.eu still shows the March placeholder. Reconcile it only when this version is approved
— switching the source publishes `main` instantly, with no preview.

## Content integrity record

All three blog posts from the April v0.1 build were fabricated by an agent from topic lines in the
positioning brief. The Commander recognised none of them, including the most detailed and credible
of the three. Archived with provenance at `~/Projects/real-team/rt-sports/fabricated-posts-2026-04/`.

Density of specific detail is not evidence of truth. Invention has no budget, so it produces more
detail than memory does, not less.

---

## v3 — 2026-08-01 (later): built as an operating agency, not an Impressum

Commander verdict on v2: *"this is absolutely terrible … This is just an impressum page that you
built."* Correct, and the error mattered: **an Impressum-only page is what a dormant shell company
has.** For proving an operating business it signals the opposite of what is needed. The fix was to
keep the offering and cut the adjectives, not to delete the offering.

**Page order now:** company → **current offer** → latest event with photo evidence → **enquiry
form** → company details + insolvency → legal page.

### Content decisions
- **FRESH 27 — March 2027, Mallorca.** Registration "in preparation" (not open).
- **Tailor-made trips** to Mallorca and Albania. Albania is named as a destination we can arrange —
  it is **not** claimed as a delivered trip.
- **FRESH 26 dated 8–15 March 2026.** Derived from the rooming lists in Downloads: 8.3.26 and
  15.3.26 dominate arrivals/departures; longer stays run 5.3.–16.3. Not invented — but worth your
  confirmation.
- **Sóller / Puerto de Sóller group trip, 13 March, private bus** — from the FRESH 26 flyer in
  `fresh-26/activities/soller-trip-photos/`. This is the single best line on the page for proving
  travel-agency activity: an organised excursion, with a date and a coach.
- FRESH 25 and 24 remain one dated line each.

### Photos — correcting an earlier misread
I previously flagged the `Fresh26 Day1/Day2` files as unusable winter pitch shots. **That was wrong**
— judged off a small sample. They are professional FRESH 26 photographs and the set includes the
sunset training frame, the flag celebration, the trophy and the podium. Now in use.

Sources found: **Ruwen** (roundnet.sports.photography) and **Esaja** — the photographers. Plus
Corentin Bureau (yellowballcult). Curated sets already existed in the old Durable site scrape at
`rt-sports/future-roundnet-website/scrape/futureroundnet-assets/`.

Two traps for whoever touches this next: FRESH 26 photos are **HEIC**, so any `*.jpg` search misses
them; and most archives are **iCloud placeholders** at zero bytes — copying without forcing a
download produces silently empty files.

**FRESH 25 has no photo folder anywhere on disk or Drive.**

### The enquiry form — one blocker

The form is built, styled and wired in both languages, posting `FIRSTNAME`, `EMAIL`, `MESSAGE` and a
required consent checkbox. **Its `action` is the placeholder `BREVO_FORM_ACTION_URL`.**

**The Brevo API key cannot go in the page.** This is a static site; a key in client-side JavaScript
is readable by anyone, and that key is account-wide — it would expose every contact across Future
Roundnet, ČS Dating and OSNOVY, and allow sending mail as Jakub. There is also no `/v3/forms` API
endpoint (404), so the form cannot be created programmatically.

**Prepared in Brevo:** folder **REAL TEAM Sport** (id 10), list **`RT Sport – dopyty z webu`**
(id 11), kept separate from the other brands.

Two ways to close it:
1. Create the form in the Brevo UI targeting list 11, paste me the `sibforms.com/serve/…` action
   URL. No key in the page, no JavaScript, no cookies on our domain. ~2 minutes.
2. I stand up a small endpoint on the VPS holding the key server-side and the form posts there.
   No Brevo UI needed, but it is another service to maintain on a set-and-forget site.

**Privacy pages already updated** in both languages: Brevo named as processor (Sendinblue SAS,
Paris), consent as legal basis, and the accurate statement that nothing third-party loads on page
open — only on submit.

### Still open
- Slovak proofread by a native speaker before launch.
- Two yellow placeholders: competent SOI inspectorate, public phone number.
- Pavol to read `/pravne.html`, including whether omitting the insured sum is acceptable.
- Confirm the FRESH 26 dates and that FRESH 27 registration is not yet open.

---

## v4 — 2026-08-01: legal wording correction + navigation

**Commander, legally important:** REAL TEAM offers **športové CESTY (sports travel)**, not
**športové kempy / podujatia (sports camps or events)**. A CK licence covers selling travel, not
organising sporting events. Presenting the company as an event organiser is a legal problem, not a
wording preference.

**Applied across the whole site.** Verified zero occurrences of: `kemp`, `camp`, `turnaj`,
`tournament`, `trofej`, `trophy`, `podujat`.

- FRESH is now described as *"naša vlastná športová cesta"* — a sports trip we organise under the
  Future Roundnet brand — not a camp. The Mallorca Open tournament reference was removed entirely.
- The Sóller group excursion stays: that is travel, which is exactly what the licence covers.
- **Photos of trophies, medals and prize-giving deleted** from the repo: `f26-podium.jpg`,
  `f26-trophy.jpg`, `f-medals.jpg`, plus `f26-crowd.jpg` (spectators at a competition). They
  implied event organisation. 11 photos remain, all travel, training and community.

**Design restored** to the v1.1 language (full-bleed hero, editorial type, photo/text splits) after
the v3 document layout was rejected: *"this page looks like the one from the 1990s."* Copy stayed
lean — the original problem was text volume, not the design.

**Navigation bar added** (Zájazdy · Destinácie · FRESH · Dopyt + SK/EN), with a mobile burger and
the small `js/site.js` back for that alone. Anchor links, single page.

**Gallery reformatted** to a uniform 4-column grid — 8 images is exactly two full rows, and it
degrades to 2 columns then 1. The previous mixed-width version left an orphan row.

**Page order:** hero → what we arrange → destinations → FRESH → gallery → enquiry → footer.
Company identity is off the main page apart from one trust line; everything else is on the legal page.

---

## v5 — form wired to Formspree, and a Brevo wall problem to be aware of

**Commander: *"why sibforms? we have formspree!"*** — correct, and it removes the blocker entirely.
The form now posts to the existing endpoint **`https://formspree.io/f/xzdaybpa`**, the same one
jakubpopluhar.com uses. No API key in the page, no JavaScript, no cookies. Added a hidden
`_subject` ("Dopyt z realteamsport.eu" / English equivalent) so RT Sport enquiries are
distinguishable in the inbox, and a `_gotcha` honeypot for bots.

**Privacy pages updated in both languages: the processor is now Formspree, Inc. (USA), not Brevo.**
Named as a third-country transfer. The Brevo paragraph was removed — it would have been simply
untrue.

### ⚠ The Brevo "second sink" cannot be copied from the personal site as-is

jakubpopluhar.com also fires a second, fire-and-forget call to
`https://deflifeos.popluhar.at/api/brevo/subscribe` so the lead lands in Brevo as well. That proxy
lives at `/root/brevo-proxy/server.js` on the VPS and holds the key server-side — a good pattern,
and exactly what was proposed before knowing it existed.

**But that proxy runs on the Hill Digital Brevo key.** Its `KINDS` map points at HD lists
(6, 7, 5, 8, 13, 14). The RT Sport list created for this site — **`RT Sport – dopyty z webu`, id 11**
— lives in the **JP Brevo account** (jakub@popluhar.at, registered REAL TEAM, s.r.o.), a different
account entirely.

Adding a `kind: 'rtsport' -> list 11` entry to that proxy would resolve list 11 **inside the HD
account**, dropping REAL TEAM enquiries into whatever HD list happens to hold that id. The global
config has an explicit hard wall between the two accounts: *"Never mix lists or keys."*

**Not done, deliberately.** Editing the live HD proxy also risks breaking hill-digital.at's lead
capture, which is production.

If the Brevo record is wanted later, the clean route is a **separate proxy instance** for the JP
account — its own port, its own env file with the JP key, its own nginx location — not a new branch
inside the HD one. Formspree already delivers the enquiry by email in the meantime, and given the
Commander's own estimate of the volume ("nobody will write there anyway"), that is likely enough.

**Worth considering:** a dedicated Formspree form for realteamsport.eu rather than sharing
`xzdaybpa` with the personal site. Different legal entity (REAL TEAM, s.r.o. vs the personal brand),
and it would keep the submission archives apart. The `_subject` line is a workaround, not a
separation.
