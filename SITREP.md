# SITREP — rt-sport

*Wiedereinstieg: lies den Strang, an dem du arbeitest. Jedes Fenster schreibt NUR seinen eigenen Strang.*

## Aktive Straenge

*⚠ = seit 7+ Tagen nicht angefasst. Der Stempel sagt, wann jemand GESCHRIEBEN hat, nicht wie die Lage HEUTE ist. Bei einem alten Strang mit ausstehender Aussenaktion (Mail raus? Seite deployed? Antrag eingereicht?) erst das Quellsystem pruefen, dann die Lage vortragen.*

| Strang | Stand | Lage |
|---|---|---|
| `rt-sport-website` | 2026-08-03 10:49 · heute | **LIVE auf realteamsport.eu.** Kein Staging mehr, jeder Push veroeffentlicht. Audit 0 FAIL. Offen: SK-Korrektur durch den Commander, Pavol auf `pravne.html`, Search Console. |

---

# Strang: rt-sport-website

*Stand: 2026-08-03 10:49 · Diese Fassung ersetzt die geschichtete Vorversion, die sich selbst
widersprochen hat ("nichts ist live" im Kopf, Livegang weiter unten). Historie liegt im Mission
Report, nicht hier.*

## Lage in einem Satz

**realteamsport.eu ist live** und liefert die zweisprachige v2 mit vollstaendigem SEO und GEO aus.
Der Text ist noch nicht vom Commander korrekturgelesen und `pravne.html` noch nicht von Pavol,
beides steht oeffentlich unter dem Namen einer lizenzierten Cestovná kancelária.

## DIE EINE REGEL, DIE SICH GEAENDERT HAT

**Es gibt kein Staging mehr. Pages serviert `main`. Jeder Push ist eine Veroeffentlichung.**
Also: lokal ansehen → ausdrueckliches OK vom Commander → erst dann pushen.

Rollback, falls etwas Falsches live geht:
```
gh api -X PUT repos/jakub-ai23/realteamsport-eu/pages -f "source[branch]=gh-pages" -f "source[path]=/"
```
`gh-pages` haelt weiterhin unveraendert den Maerz-Platzhalter (`cf985dc`).

**Falle, die schon zugeschnappt ist:** ein Wechsel der Pages-Quelle **loest keinen Build aus**.
Die API meldete 5 Minuten lang `status: built`, waehrend die Domain den alten Stand auslieferte,
weil das der alte Build war. Bauen erzwingen und pruefen:
```
gh api -X POST repos/jakub-ai23/realteamsport-eu/pages/builds
gh api repos/jakub-ai23/realteamsport-eu/pages/builds --jq '.[0].status'
```

## Aktueller Stand

- **Quellcode:** `~/Projects/builds/websites/rt-sport`, Branch `main`, **Working Tree sauber**,
  letzter Commit `c98007b`, Remote synchron.
- **Live:** v2, beide Sprachen, Pages-Quelle `main`, CNAME `realteamsport.eu`, HTTPS erzwungen.
- **Umfang (8 Dateien, mehr nicht):** `index.html` (SK, primaer) · `en/index.html` ·
  `pravne.html` · `en/legal.html` · `404.html` · `robots.txt` · `sitemap.xml` · `llms.txt`.
- **Audit:** **0 FAIL · 1 WARN · 3 INFO**.
  Bericht `~/Projects/ops/website-audit/reports/2026-08-03-rt-sport.md`.
  Der eine WARN ist die AI-Tell-Zahl (siehe unten, bewusst stehen gelassen).
- **Bilder:** 1,7 MB gesamt, jede Datei unter 300 KB, beide Startseiten unter dem Gewichtsbudget.
- **Kein Tracking, und das ist eine Entscheidung.** `pravne.html` sagt woertlich, dass beim Laden
  nichts von fremden Servern kommt. Live nachgemessen: **null Requests an fremde Hosts**.
  In `ops/website-audit/sites.json` sind `tracker_patterns` deshalb bewusst LEER.
  **Wer je messen will, muss zuerst `pravne.html` aendern.**
- **VPS (der einzige nicht-statische Teil):** `brevo-proxy-jp`, `/root/brevo-proxy-jp`, Port **8098**,
  PM2 (`pm2 save` erledigt), nginx `/api/brevo-jp/`. HD-Proxy auf 8097 unangetastet,
  nginx-Backup `/root/deflifeos.nginx.bak-2026-08-01`.
- **Brevo JP:** Ordner "REAL TEAM Sport" (10), Liste **11** `RT Sport – dopyty z webu`,
  Attribut `MESSAGE`. Formular: Formspree `formspree.io/f/xzdaybpa` als Hauptweg,
  einwilligungsgesteuerte Zweitablage in Brevo.

## Inhaltliche Entscheidungen, die niemand aus Versehen zurueckdrehen darf

- **REAL TEAM verkauft `športové cesty` (Reisen), keine `kempy` / `sústredenia` / `podujatia`.**
  Die CK-Lizenz deckt Reiseverkauf, nicht Event-Organisation. Sitewide durchgesetzt, auch in
  Titeln, Descriptions, FAQ-Antworten und im Schema. Kostet bewusst Traffic auf dem staerkeren
  Keyword. Pokal-, Medaillen- und Siegerehrungsfotos sind aus demselben Grund geloescht.
- **Titel des Commanders: oeffentlich `majiteľ` / `owner`.** Nicht `konateľ` (nur dort, wo es
  rechtlich sein muss, also `pravne.html`), und **niemals `founder`** — er hat die Firma vom Vater
  uebernommen, nicht gegruendet.
- **Kein `foundingDate` im Schema.** Aktenkundig ist "lizenziert seit 1994", und das ist nicht
  dieselbe Behauptung wie das Gruendungsjahr.
- **Die Seite behauptet nichts ueber Teamgroesse.** Der Commander sagt, ein Team kommt
  ("budem mať"). Bis es steht, sagt die Seite dazu schlicht nichts.
- **Sprachen: nur SK und EN.** Kein `/de/`, kein `/cs/`. Bewusster Entscheid 2026-08-03.
- **Das slowakische Znenie ist die verbindliche Fassung**, die englische eine Uebersetzung.
  Steht als Vorrangklausel auf beiden Rechtsseiten, und `pravne.html` ist aus dem gesamten
  englischen Zweig erreichbar.
- **Das FR-Logo (`assets/images/futureroundnet-logo.png`) ist schwarz auf transparent.**
  Nur auf hellen Abschnitten verwenden, es gibt hier keine helle Variante.
- **Alle Fakten auf der Seite sind belegt.** Im April hat ein Agent drei Blogartikel frei
  erfunden (archiviert unter `~/Projects/real-team/rt-sports/fabricated-posts-2026-04/`).
  Seither gilt: Zahl, Datum, Ort oder persoenliche Geschichte ist entweder in einer Datei
  nachweisbar, vom Commander gesagt, oder sie steht nicht drauf.

## Blocker

- **SK-Korrektur durch den Commander. Der wichtigste Punkt.** Der gesamte Text ist von mir und
  steht bereits oeffentlich. Zu pruefen: die Rechtsbegriffe, die 7 FAQ-Antworten, die
  Ponuka-Formulierungen und der Vedenie-Block.
- **Pavol (afes s.r.o.)** soll `pravne.html` lesen, jetzt inklusive der neuen Vorrangklausel.
  Offene Frage an ihn: ob das Weglassen der Versicherungssumme (15 000 EUR) in Ordnung ist.
- **Google Search Console:** die Seite ist nicht angemeldet, die sitemap nirgends eingereicht.
  **Kann nur der Commander**, es braucht seinen Google-Login.

## Naechster Schritt (genauer Einstiegspunkt)

1. Lokal: `cd ~/Projects/builds/websites/rt-sport && python3 -m http.server 8899`.
   **Vorher pruefen, ob der Port frei ist und WAS ausgeliefert wird:**
   `curl -s localhost:8899 | grep -i '<title>'` — ein 200 heisst nur, dass irgendetwas antwortet.
   Am 03.08. lief dort ein Server aus `builds/websites/future-roundnet` und ein ganzer
   Screenshot-Lauf ging gegen die falsche Website. Im Browser Cmd+Shift+R, sonst haengt die
   alte `style.css` im Cache.
2. Commander liest den SK-Text korrektur. Aenderungen einarbeiten.
3. Pavol auf `pravne.html`.
4. Danach: Search Console einrichten und `sitemap.xml` einreichen.
5. Audit nach jeder Aenderungssession: `python3 ~/Projects/ops/website-audit/audit.py rt-sport --report`.

## Bewusst stehen gelassen

- **1 WARN, 18 AI-Tell-Fundstellen.** SK-Startseite **0**, EN-Startseite 7 (Partizip-Fuellsel),
  Rechtsseiten 9 — dort bricht der Satztrenner an den Punkten in "zákona č. 22/2004 Z. z.".
  Parser-Artefakt, kein Schreibstil. **Nicht auf null optimieren**, das entfernt funktionierende
  Rhetorik.
- **`404.html` ist in `sites.json` als `unlisted` eingetragen.** Waisenseite, noindex, nicht in
  der sitemap, kein canonical: genau so gehoert eine Fehlerseite gebaut.
- **INFO zum `FAQPage`-Schema:** laut einer einzelnen, nicht gegengeprueften Quelle hat Google die
  FAQ-Rich-Results im Mai 2026 eingestellt. Das Schema bleibt, es schadet nicht und Antwortmaschinen
  lesen es weiter. Vor einem Entfernen selbst verifizieren.

## Offene Loops

- **Versicherung laeuft 31.01.2027 ab.** Die Seite nennt diese Gueltigkeit. Kalendereintrag Januar
  2027 fehlt noch — das eine Feld, bei dem veraltet gleich falsch ist.
- **Nicht gemessen:** echte Ladezeiten (LCP/INP/CLS), Farbkontraste und Tap-Ziel-Groessen nach
  WCAG 2.2 AA (Ziel 4,5:1 / 3:1, Tap-Ziele mind. 24x24 px). Nur im echten Browser pruefbar,
  ueber den European Accessibility Act in AT/DE/SK rechtlich relevant.
- **FRESH-25-Fotos** existieren nirgends auf Platte oder Drive.
- **FRESH-26-Termin 8. bis 15. Maerz 2026** ist aus Rooming-Listen abgeleitet, nicht bestaetigt.
  Steht so auf der Seite.
- Eigenes Formspree-Formular fuer realteamsport.eu erwaegen, statt `xzdaybpa` mit der Personal-Site
  zu teilen (andere juristische Person).
- `ops/website-audit/` ist im `ops`-Repo komplett **untracked**. Betrifft auch die
  rt-sport-Registry-Eintraege. War schon vorher so.

## Offene Entscheidungen

- Ob die Versicherungssumme doch auf die Seite soll. Andere SK-Reisebueros veroeffentlichen sie;
  bewusst weggelassen, weil sie auf ~50k Umsatz schliessen laesst. Pavol entscheidet mit.

## Verlauf

| Datum | Was |
|---|---|
| 2026-03-31 | Platzhalter live auf `gh-pages` (`cf985dc`). |
| 2026-08-01 | v2 gebaut, blieb lokal. Ursache fuer 4 Monate Stillstand gefunden: Arbeit lag auf `main`, Pages lieferte `gh-pages`. |
| 2026-08-03 | Ponuka-Wortwahl · FR-Logo · SEO+GEO · echte Bio · **Livegang** · Audit 8 FAIL → 0 · Rechtstext-Vorrangklausel. Commits `1e427b2` `6e85140` `78866cf` `3608a4f` `2c525cd` `c98007b`. Entscheidung **D-0528**. |

Volle Geschichte des 03.08. inklusive der Fehlschlaege:
`~/Projects/real-team/mission-reports/2026-08-03-rt-sport-website-live-seo-geo.md`

---
*Letzte Aenderung: 2026-08-03 10:49*
