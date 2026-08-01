# SITREP — rt-sport

*Wiedereinstieg: lies den Strang, an dem du arbeitest. Jedes Fenster schreibt NUR seinen eigenen Strang.*

## Aktive Straenge

*⚠ = seit 7+ Tagen nicht angefasst. Der Stempel sagt, wann jemand GESCHRIEBEN hat, nicht wie die Lage HEUTE ist. Bei einem alten Strang mit ausstehender Aussenaktion (Mail raus? Seite deployed? Antrag eingereicht?) erst das Quellsystem pruefen, dann die Lage vortragen.*

| Strang | Stand | Lage |
|---|---|---|
| `rt-sport-website` | 2026-08-01 20:49 · heute | Website fertig. **Nicht live, alles lokal.** Zwei Aenderungen sind nicht einmal committet. Wartet nur noch auf SK-Korrektur und Pavol. |

---

# Strang: rt-sport-website

*Stand: 2026-08-01 20:49 · Arbeitsfenster war 12:06–14:00, 20 min netto, autonom*

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

## Aktueller Stand
- **Quellcode:** `~/Projects/builds/websites/rt-sport`, Branch `main`.
  Letzter Commit `0e299d3`. **Nicht committet: `pravne.html`, `en/legal.html`** (Streichung
  Telefon + Inspektorat). Das ist Absicht — Commander: *"nechaj to ešte všetko ako local"*.
- **Live:** unveraendert der alte Maerz-Platzhalter. Pages-Quelle `gh-pages`, Arbeit auf `main`.
- **Umfang:** `index.html` (SK, primaer) · `en/index.html` · `pravne.html` · `en/legal.html` ·
  `404.html`. Mehr nicht.
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
  Besonders die Rechtsbegriffe.
- **Pavol (afes s.r.o.)** soll `pravne.html` einmal lesen, insbesondere ob das Weglassen der
  Versicherungssumme (15 000 EUR) in Ordnung ist.
- *(Erledigt, nicht mehr blockierend: Telefonnummer und SOI-Inspektorat wurden vom Commander
  gestrichen statt beschafft.)*

## Naechster Schritt (genauer Einstiegspunkt)
1. Lokal ansehen: `cd ~/Projects/builds/websites/rt-sport && python3 -m http.server 8899`,
   dann `http://localhost:8899/`.
2. SK-Text Korrektur lesen lassen, Pavol auf `pravne.html`.
3. Erst dann: die zwei offenen Aenderungen committen und pushen.
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
*Letzte Aenderung: 2026-08-01 20:49*
