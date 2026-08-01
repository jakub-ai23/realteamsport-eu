# SITREP — rt-sport

*Wiedereinstieg: lies den Strang, an dem du arbeitest. Jedes Fenster schreibt NUR seinen eigenen Strang.*

## Aktive Straenge

*⚠ = seit 7+ Tagen nicht angefasst. Der Stempel sagt, wann jemand GESCHRIEBEN hat, nicht wie die Lage HEUTE ist. Bei einem alten Strang mit ausstehender Aussenaktion (Mail raus? Seite deployed? Antrag eingereicht?) erst das Quellsystem pruefen, dann die Lage vortragen.*

| Strang | Stand | Lage |
|---|---|---|
| `rt-sport-website` | 2026-08-01 17:18 · heute | Website v6 fertig gebaut und auf `main` gepusht, **nicht live** — wartet auf SK-Korrektur, zwei Platzhalter und Pavol |

---

# Strang: rt-sport-website

*Stand: 2026-08-01 17:18*

## Lage in einem Satz
realteamsport.eu ist als zweisprachige Ein-Seiten-Website fertig gebaut, auf `main` gepusht und
end-to-end getestet, aber **bewusst noch nicht live** — GitHub Pages liefert weiterhin `gh-pages`
mit dem alten Maerz-Platzhalter.

## Was erledigt wurde
- **Ursache fuer vier Monate Stillstand gefunden:** die April-Version lag auf `main`, aber Pages
  liefert Branch `gh-pages`. Kein Bau-Problem, ein Settings-Problem.
- **Positionierung dreimal korrigiert**, jeweils nach Ablehnung: Roundnet-Firma → Sport-Reisebuero
  → reine Impressum-Seite (abgelehnt, "sieht aus wie 1990er") → kundenorientierte Seite im
  v1.1-Design mit schlankem Text. Aktuell: Gruppen und Vereine zuerst, FRESH als Beleg.
- **Rechtliche Wortwahl (WICHTIG):** REAL TEAM verkauft **športové cesty (Reisen)**, keine
  **kempy/podujatia (Camps/Events)**. Eine CK-Lizenz deckt Reiseverkauf, nicht Event-Organisation.
  Sitewide durchgesetzt, null Treffer fuer kemp/camp/turnaj/tournament/trofej/trophy/podujat.
  Fotos mit Pokalen, Medaillen und Siegerehrung geloescht.
- **Drei Blogartikel als Faelschung entlarvt und entfernt.** Ein Agent hatte im April aus zwei
  Themenzeilen des Briefings komplette Ich-Erzaehlungen erfunden; der Commander erkannte keine
  davon wieder — auch die glaubwuerdigste nicht. Archiviert samt Herkunftsnachweis unter
  `~/Projects/real-team/rt-sports/fabricated-posts-2026-04/`.
- **Rechtsseiten neu unter slowakischem Recht** (§ 4 zákon 22/2004, zákon 170/2018, GDPR). Vorher
  standen sie auf **deutschem** Recht (§ 5 TMG, § 55 RStV) — falsche Jurisdiktion fuer eine
  slowakische s.r.o., und § 55 RStV ist in DE seit 2020 abgeloest.
- **Google-Fonts-CDN entfernt**, Fonts selbst gehostet (latin + latin-ext fuer SK/DE-Diakritika).
- **Bilder:** 21 MB → ~5 MB. Fotoarchiv lokalisiert (Fotografen **Ruwen** und **Esaja**), FRESH-26-
  Fotos sind HEIC und lagen als iCloud-Platzhalter mit 0 Byte.
- **Formular:** postet an **Formspree** (`formspree.io/f/xzdaybpa`). Dazu ein
  **eigener Brevo-Proxy fuer den JP-Account** auf dem VPS (siehe unten), als einwilligungs-
  gesteuerte Zweitablage. Live end-to-end aus dem Browser getestet.
- **Porygon** fand einen Fehler von mir: nach dem Stylesheet-Restore rendern `pravne.html`,
  `en/legal.html` und `404.html` voellig ungestylt, weil sie gegen das alte v2-CSS geschrieben
  waren. Behoben und selbst visuell nachgeprueft.
- **Heute zuletzt:** "Dopyt" → "Kontakt" in beiden Sprachen (Nav, Anker `#kontakt`, Label, Buttons,
  `_subject`, plus Rechtstexte auf "správa" umgestellt). Null Resttreffer fuer "dopyt".

## Aktueller Stand
- **Quellcode:** `~/Projects/builds/websites/rt-sport`, Branch `main`, alles gepusht.
  Letzter Commit vor diesem SITREP: `b10f15e`.
- **Live:** unveraendert der alte Platzhalter. Pages-Quelle steht auf `gh-pages`, Arbeit auf `main`.
- **Umfang:** `index.html` (SK, primaer) · `en/index.html` · `pravne.html` · `en/legal.html` ·
  `404.html`. Mehr nicht. Blog, Roundnet-Seite, Travel-Seite, DE-Stubs sind bewusst geloescht.
- **VPS:** `brevo-proxy-jp`, `/root/brevo-proxy-jp`, Port **8098**, PM2 (`pm2 save` erledigt),
  nginx `/api/brevo-jp/`. Der Hill-Digital-Proxy auf 8097 wurde **nicht angefasst**;
  nginx-Backup `/root/deflifeos.nginx.bak-2026-08-01`, `nginx -t` gruen, HD-Health nach Reload 200.
- **Brevo JP:** Ordner "REAL TEAM Sport" (10), Liste **11** `RT Sport – dopyty z webu`, aktuell
  0 Kontakte (Testkontakte geloescht). Attribut `MESSAGE` neu angelegt.
- **Geprueft:** 0 tote Links, 0 Inline-Styles, 0 Google-Fonts, kein horizontaler Ueberlauf bei
  320/375/768, SK/EN strukturell identisch.

## Blocker
- **SK-Korrektur durch den Commander.** Der Text ist von mir geschrieben und geht an eine
  slowakische Behoerde. Muss ein Muttersprachler lesen, besonders die Rechtsbegriffe.
- **Zwei gelbe Platzhalter** auf den Rechtsseiten: zustaendiges SOI-Inspektorat samt Adresse, und
  eine oeffentliche Telefonnummer.
- **Pavol (afes s.r.o.)** soll `pravne.html` einmal lesen — insbesondere, ob das Weglassen der
  Versicherungssumme (15 000 EUR) in Ordnung ist.

## Naechster Schritt (genauer Einstiegspunkt)
- Lokal ansehen: `cd ~/Projects/builds/websites/rt-sport && python3 -m http.server 8899`,
  dann `http://localhost:8899/`.
- Wenn die drei Blocker erledigt sind: Pages-Quelle von `gh-pages` auf `main` umstellen
  (`gh api -X PUT repos/jakub-ai23/realteamsport-eu/pages -f source[branch]=main -f source[path]=/`).
  **Nicht vorher** — das Umstellen veroeffentlicht `main` sofort und ohne Preview.

## Offene Loops
- **Versicherung laeuft am 31.01.2027 ab.** Die Seite nennt diese Gueltigkeit. Kalendereintrag fuer
  Januar 2027 setzen — die Vorgaengerseite stand vier Monate veraltet herum, und das ist das eine
  Feld, bei dem veraltet gleich falsch ist.
- **FRESH-25-Fotos existieren nirgends** auf Platte oder Drive. Falls sie gebraucht werden, beim
  Fotografen nachfragen.
- Eigenes Formspree-Formular fuer realteamsport.eu erwaegen, statt `xzdaybpa` mit der
  Personal-Site zu teilen (andere juristische Person, getrennte Einreichungsarchive).
- FRESH-26-Termin **8. – 15. Maerz 2026** ist aus den Rooming-Listen abgeleitet, nicht bestaetigt.

## Offene Entscheidungen
- **"KI parser"** — der Commander erwaehnte am Ende "a ešte cez to dáš KI parser". Unklar, was
  gemeint ist; nicht geraten, sondern nachgefragt. Antwort steht aus.
- Ob die Versicherungssumme doch auf die Seite soll (andere SK-Reisebueros veroeffentlichen sie;
  bewusst weggelassen, weil sie auf ~50k Umsatz schliessen laesst).

---
*Letzte Aenderung: 2026-08-01 17:18*
