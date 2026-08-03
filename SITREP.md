# SITREP — rt-sport

*Wiedereinstieg: lies den Strang, an dem du arbeitest. Jedes Fenster schreibt NUR seinen eigenen Strang.*

## Aktive Straenge

*⚠ = seit 7+ Tagen nicht angefasst. Der Stempel sagt, wann jemand GESCHRIEBEN hat, nicht wie die Lage HEUTE ist. Bei einem alten Strang mit ausstehender Aussenaktion (Mail raus? Seite deployed? Antrag eingereicht?) erst das Quellsystem pruefen, dann die Lage vortragen.*

| Strang | Stand | Lage |
|---|---|---|
| `rt-sport-website` | 2026-08-03 09:56 · heute | SEO/GEO, Ponuka-Wortwahl, FR-Logo, Vedenie-Block. **Committet und auf `main` gepusht, aber weiterhin NICHT live** (Pages serviert `gh-pages`). Wartet auf SK-Korrektur und Pavol. |

---

# Strang: rt-sport-website

*Stand: 2026-08-03 09:48 · Vorgaenger-Fenster 2026-08-01 20:49*

## Lage in einem Satz
realteamsport.eu ist als zweisprachige Ein-Seiten-Website fertig, alle Platzhalter sind raus, aber
auf ausdrueckliche Commander-Anweisung bleibt **alles lokal** — nichts ist live, und die letzten
zwei Aenderungen sind noch nicht einmal committet.

## Was erledigt wurde
- **Ursache fuer vier Monate Stillstand:** die April-Version lag auf `main`, aber Pages liefert
  Branch `gh-pages`. Settings-Problem, kein Bau-Problem.
- **Positionierung dreimal korrigiert** (Roundnet-Firma → Sport-Reisebuero → reine Impressum-Seite,
  abgelehnt → kundenorientierte Seite im editorialen Design mit schlankem Text). Aktuell: Gruppen
  und Vereine zuerst, FRESH als Beleg.
- **Rechtliche Wortwahl (WICHTIG):** REAL TEAM verkauft **športové cesty (Reisen)**, keine
  **kempy/podujatia**. Eine CK-Lizenz deckt Reiseverkauf, nicht Event-Organisation. Sitewide
  durchgesetzt; Pokal-, Medaillen- und Siegerehrungsfotos geloescht.
- **Drei erfundene Blogartikel entfernt**, archiviert unter
  `~/Projects/real-team/rt-sports/fabricated-posts-2026-04/`.
- **Rechtsseiten neu unter SK-Recht** (§ 4 zákon 22/2004, zákon 170/2018, GDPR). Vorher deutsches
  Recht (§ 5 TMG, § 55 RStV) fuer eine slowakische s.r.o.
- **Google-Fonts-CDN raus**, Fonts selbst gehostet. Bilder 21 MB → ~5 MB.
- **Formular:** Formspree (`formspree.io/f/xzdaybpa`) als Hauptweg, plus einwilligungsgesteuerte
  Zweitablage in Brevo ueber einen **eigenen JP-Proxy** auf dem VPS. Live end-to-end getestet.
- **Porygon-Fund:** nach dem Stylesheet-Restore rendern die drei Dokumentseiten voellig ungestylt.
  Behoben und visuell nachgeprueft.
- **`check-ai-tells.py` gelaufen:** alle Em/En-Dashes entfernt (Site-weit 0). SK-Startseite
  0 Treffer. Restliche Meldungen als Parser-Artefakte verifiziert — der Satztrenner bricht an den
  Punkten in "zákona č. 22/2004 Z. z.", nicht am Schreibstil. Rechtstext deshalb NICHT umgeschrieben.
- **Zuletzt (noch nicht committet):** "Dopyt" → "Kontakt" ist drin und gepusht; danach hat der
  Commander **Telefonnummer und SOI-Inspektorat gestrichen** — beide gelben Platzhalter entfernt.
  Auf der Seite steht jetzt kein einziger Platzhalter mehr.

## Nachtrag 2026-08-03 09:48: Ponuka-Wortwahl + SEO/GEO

- **Wortwahl auf Ponuka umgestellt** (Commander-Entscheid, alle drei Stellen): Nav und
  Sektionslabel `Kontakt` → `Ponuka`, Hero-CTA `Napíšte nám` → `Chcem ponuku`, Formular-Button
  `Odoslať správu` → `Žiadam ponuku`, Formspree-`_subject` → `Žiadosť o ponuku z realteamsport.eu`.
  EN spiegelt: `Get a quote` / `Request a quote`. **Achtung:** das dreht die Umbenennung
  `Dopyt → Kontakt` aus Commit `71b5d26` teilweise wieder um.
- **futureroundnet.com** stand schon im Footer; zusaetzlich jetzt im FRESH-Abschnitt (Markenname
  verlinkt + eigene `link-arrow`-Zeile am Ende des Blocks), beide Sprachen.
- **SEO:** JSON-LD in allen vier Seiten, `robots.txt`, `sitemap.xml` (mit hreflang-Alternates),
  Titel und Descriptions geschaerft, zwei kaputte `<title>` repariert
  (`Právne informácie ,  REAL TEAM` — Artefakt aus dem Em-Dash-Lauf vom 01.08.).
- **GEO:** sichtbarer FAQ-Block mit 7 Fragen je Sprache (`#faq`, neue `.faq`-Styles) plus
  `FAQPage`-Schema und `llms.txt`. Jede Antwort belegbar aus der Seite oder `pravne.html`.
- **Bewusst NICHT gemacht:** keine Optimierung auf `kemp` / `sústredenie` / `podujatie`
  (CK-Lizenz deckt Reiseverkauf, nicht Events), kein `foundingDate` im Schema (aktenkundig ist
  nur „lizenziert seit 1994"), kein Analytics, keine externen Requests.
- **Geprueft:** JSON-LD in allen vier Seiten valide, sitemap valides XML, 0 tote Links,
  kein horizontaler Ueberlauf bei 320/375/768/1440 in SK und EN (Playwright), SK/EN strukturell
  identisch (5 Sektionen, 6 h2, 13 h3, 7 FAQ-Items je Seite).
  Screenshots: `preview/2026-08-03-*.png`.
- **Sprachentscheid:** kein `/de/` und kein `/cs/`. EN bleibt die einzige zweite Sprache.
- **Nachschlag im selben Fenster:** Future-Roundnet-**Logo** im FRESH-Abschnitt (`.fr-mark`,
  schwarz auf transparent, 400px aus `Logo_FR_black2.png`, ersetzt die reine Textzeile) und ein
  neuer **Vedenie-Block** (`#vedenie`, sand, zwischen FAQ und Ponuka) mit drei Saetzen zur Person
  plus `Person`-Schema. **Titel: konateľ / CEO, ausdruecklich NICHT founder** — der Commander hat
  die Firma uebernommen, nicht gegruendet. Absichtlich kurz, soll spaeter wachsen.
- **Gepusht auf `main`.** Das veroeffentlicht nichts: Pages serviert weiter `gh-pages`.

## Aktueller Stand
- **Quellcode:** `~/Projects/builds/websites/rt-sport`, Branch `main`.
  Letzter Commit `325dc16`. **Nicht committet: `index.html`, `en/index.html`, `pravne.html`,
  `en/legal.html`, `css/style.css`, `CLAUDE.md`, neu `robots.txt`, `sitemap.xml`, `llms.txt`,
  `preview/2026-08-03-*.png`.** Das ist Absicht — Commander: *"nechaj to ešte všetko ako local"*.
- **Live:** unveraendert der alte Maerz-Platzhalter. Pages-Quelle `gh-pages`, Arbeit auf `main`.
- **Umfang:** `index.html` (SK, primaer) · `en/index.html` · `pravne.html` · `en/legal.html` ·
  `404.html` · `robots.txt` · `sitemap.xml` · `llms.txt`. Mehr nicht.
- **VPS:** `brevo-proxy-jp`, `/root/brevo-proxy-jp`, Port **8098**, PM2 (`pm2 save` erledigt),
  nginx `/api/brevo-jp/`. HD-Proxy auf 8097 unangetastet, nginx-Backup
  `/root/deflifeos.nginx.bak-2026-08-01`. **Laeuft bereits produktiv** — das ist der einzige Teil
  dieser Mission, der nicht lokal ist.
- **Brevo JP:** Ordner "REAL TEAM Sport" (10), Liste **11** `RT Sport – dopyty z webu`, 0 Kontakte
  (Testkontakte geloescht). Attribut `MESSAGE` angelegt.
- **Geprueft:** 0 tote Links, 0 Inline-Styles, 0 Google-Fonts, 0 Platzhalter, 0 Em-Dashes,
  kein horizontaler Ueberlauf bei 320/375/768, SK/EN strukturell identisch.

## Blocker
- **SK-Korrektur durch den Commander.** Der Text ist von mir und geht an eine slowakische Behoerde.
  Besonders die Rechtsbegriffe. **Neu dazugekommen:** 7 FAQ-Antworten und die Ponuka-Formulierungen.
- **Pavol (afes s.r.o.)** soll `pravne.html` einmal lesen, insbesondere ob das Weglassen der
  Versicherungssumme (15 000 EUR) in Ordnung ist.
- *(Erledigt, nicht mehr blockierend: Telefonnummer und SOI-Inspektorat wurden vom Commander
  gestrichen statt beschafft.)*

## Naechster Schritt (genauer Einstiegspunkt)
1. Lokal ansehen: `cd ~/Projects/builds/websites/rt-sport && python3 -m http.server 8899`,
   dann `http://localhost:8899/`. **Stylesheet hart neu laden** (Cmd+Shift+R), sonst zeigt der
   Browser die alte `style.css` und der FAQ-Block erscheint ohne Linien und ohne Abstaende.
2. SK-Text Korrektur lesen lassen — **jetzt zusaetzlich die 7 FAQ-Antworten und die Ponuka-Woerter**,
   Pavol auf `pravne.html`.
3. Erst dann: die offenen Aenderungen committen und pushen.
4. **Ganz zuletzt** Pages umstellen:
   `gh api -X PUT repos/jakub-ai23/realteamsport-eu/pages -f source[branch]=main -f source[path]=/`
   **Nicht vorher** — das veroeffentlicht `main` sofort und ohne Preview.

## Offene Loops
- **Versicherung laeuft 31.01.2027 ab.** Die Seite nennt diese Gueltigkeit. Kalendereintrag Januar
  2027 — das eine Feld, bei dem veraltet gleich falsch ist.
- **FRESH-25-Fotos** existieren nirgends auf Platte oder Drive.
- **FRESH-26-Termin 8. bis 15. Maerz 2026** ist aus Rooming-Listen abgeleitet, nicht bestaetigt.
- Eigenes Formspree-Formular fuer realteamsport.eu erwaegen statt `xzdaybpa` mit der Personal-Site
  zu teilen (andere juristische Person).

## Offene Entscheidungen
- Ob die Versicherungssumme doch auf die Seite soll. Andere SK-Reisebueros veroeffentlichen sie;
  bewusst weggelassen, weil sie auf ~50k Umsatz schliessen laesst. Pavol entscheidet mit.
- Ob die Seite ueberhaupt live gehen soll, oder vorerst lokal bleibt.

---
*Letzte Aenderung: 2026-08-03 09:56*
