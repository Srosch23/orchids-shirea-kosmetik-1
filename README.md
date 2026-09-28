# SHIREÁ – Facial & Beauty Space by Schahira

Neue Website für [shirea-kosmetik.de](https://www.shirea-kosmetik.de). Reines HTML/CSS/JS – kein
Framework, kein Build-Schritt, keine externen Ressourcen, keine Cookies. Läuft auf jedem
Hosting-Paket (statische Dateien reichen; PHP ist nicht nötig).

## Lokal ansehen

```bash
python3 -m http.server 4400
```

Dann `http://127.0.0.1:4400/` öffnen.

## Deployment (Vercel)

Die bisherige Seite (mit Lovable gebaut) liegt auf Vercel, der Code in einem GitHub-Repository
der Kundin. Domain bei IONOS (DNS zeigt auf Vercel), E-Mail über ImprovMX (MX-Einträge nicht
anfassen). Diese Version ist so vorbereitet, dass sie ohne Umkonfiguration in das bestehende
Vercel-Projekt passt:

- `vercel.json` überschreibt die alten Projekteinstellungen (kein Framework, Build `node build.mjs`,
  Ausgabe `dist/`), setzt Sicherheits-Header und leitet die alten URLs (`/preise`, `/leistungen`,
  `/behandlungen/…`, `/datenschutz` …) per 301 auf die neuen Ziele um.
- `build.mjs` kopiert nur die Live-Dateien nach `dist/` (ohne `assets/img/src`).
- `.htaccess` wird von Vercel ignoriert und nur bei einem Umzug auf Apache-Hosting gebraucht.

Ablauf: Repository der Kundin klonen, alten Inhalt durch diesen Ordner ersetzen, Branch pushen,
Pull Request öffnen, Kundin mergt. Hinweis: Im Vercel-Hobby-Tarif werden Deployments aus
Commits fremder GitHub-Nutzer in privaten Repos blockiert; der Merge durch die Kundin löst das
Deployment aus. Rückweg jederzeit über „Instant Rollback“ im Vercel-Dashboard.

Lokal testen: `npm run build`, danach `dist/` mit `python3 -m http.server` ausliefern.

## Seiten

| Datei | Inhalt |
|---|---|
| `index.html` | One-Pager: Hero, Empfehlung (180 €), Vorher/Nachher, Behandlungen & Preise (Tabs: Gesicht, BYONIK®, Wimpern & Brauen, Körper, Massage, Waxing), Ablauf, Über Schahira, Bewertungs-Slider, Studio, FAQ, Kontakt |
| `impressum.html` | Impressum (§ 5 DDG) |
| `datenschutz.html` | Datenschutzerklärung (DSGVO) |
| `agb.html` | AGB inkl. 24-h-Absageregel |

## Conversion-Konzept

- **Ein Held**: Das 180-€-Paket „Aquafacial + Microneedling“ ist im Hero, als eigene Sektion
  direkt darunter und als dunkle Feature-Karte im Gesicht-Tab präsent.
  Preisanker: 250 € bei Einzelbuchung → „70 € gespart“.
- **Eine Stelle für Leistungen und Preise**: Tabs statt zwei getrennter Sektionen. Der
  Gesicht-Tab zeigt die 180-€-Karte plus eine kompakte Liste (eine Zeile je Behandlung, Details
  klappen per Tipp auf), die anderen Tabs eine kurze Einführung plus Preisliste.
- **Tonalität**: Schahira spricht selbst in der Ich-Form, konkret und ohne Werbefloskeln.
- **Zwei Buchungswege überall**: Treatwell (online, 24/7) und WhatsApp (mit vorformulierter
  Nachricht, die die gewählte Behandlung enthält). Auf Mobil zusätzlich eine feste Leiste unten.
- **Vertrauen früh**: 5,0 Google / 4,9 Treatwell in der Topbar, im Hero und als eigene Sektion;
  „Staatlich anerkannte Fachkosmetikerin“ als Badge; echte Vorher/Nachher-Bilder mit Regler.
- **Einwände abfangen**: FAQ zu Schmerz, Rötung, Anzahl Sitzungen, Kontraindikationen, Absage.

## Design-System

Editorial und streng monochrom, angelehnt an den Look großer Beauty-Marken, aber eigenständig:
Weiß als Basis, helles Grau für Wechselflächen, Schwarz für Buttons, dunkle Sektionen und
Footer. Keine Akzentfarbe; Hervorhebungen in Überschriften laufen in Grau und leichterem
Schnitt. Buttons und Labels in Versalien mit Sperrung, rechteckig ohne Rundung, keine
Schatten. Tabs als Textreihe mit schwarzer Unterstreichung. Alle Fotos in Farbe (Schwarzweiß wurde abgelehnt). Hero und „Über mich“ zeigen das Porträt der
Inhaberin in unterschiedlichen Ausschnitten. Textfarben mit Kontrast von mindestens 8:1. Komponentenmuster nach shadcn/ui (per
Shadcn-MCP), Variablennamen in `style.css` sind historisch.

**Schriften:** genau zwei Familien, beide lokal – Fraunces (Überschriften, Preise, Wortmarke)
und Figtree (alles andere). Keine Kursivschnitte im Einsatz.

**Tonalität der Texte:** professionell, vertrauensbildend, ergebnisorientiert; Ich-Form nur
in der Vorstellung von Schahira. Keine Verkleinerungen („kleines Studio“), keine Floskeln.

## Animationen

Alle ohne Bibliothek, alle respektieren `prefers-reduced-motion`: langsamer Ken-Burns-Zoom auf
Hero-Porträt, Empfehlungsbild, Arbeitsfoto, Studio-Galerie (versetzt) und Tab-Bildern, damit
Standbilder wie ruhige Videos wirken; gestaffelte Hero-Einblendung, schwebendes Badge, Scroll-Reveals mit Versatz in Rastern, animierte Tab-Markierung und
Panel-Wechsel, „Anstupsen“ des Vorher/Nachher-Reglers beim ersten Sichtbarwerden, hochzählende
Bewertungszahlen, Endlos-Slider für Bewertungen (pausiert bei Hover), Glanz auf dem Gold-Button.

## SEO

- Fokus-Keyword „Gesichtsbehandlung München“ in Title, Description, H1, zwei H2, Bild-Alt-Texten,
  FAQ („Was kostet eine Gesichtsbehandlung in München?“) und Schema.org-Service-Namen
  („Aquafacial München“, „Microneedling München“); Nebenkeywords Aquafacial, Microneedling,
  Mikrodermabrasion, BYONIK, Anti-Aging, Akne, Stachus
- Schema.org JSON-LD: `BeautySalon` (Adresse, Öffnungszeiten, Geo, Preise als `OfferCatalog`,
  `ReserveAction` → Treatwell), `Person` (Schahira), `WebSite`, `FAQPage`
- Open Graph + Twitter Card mit eigenem 1200×630-Bild (`assets/img/og-image.jpg`)
- `sitemap.xml` (inkl. Bild-Sitemap), `robots.txt`, Canonical, `site.webmanifest`
- Alle Bilder als WebP mit `alt`-Text, `width`/`height`, Lazy-Loading; Hero preloaded
- `.htaccess`: HTTPS/www-Redirect, 301-Weiterleitungen der alten URLs (`/preise`, `/leistungen`,
  `/behandlungen/…`) auf die passenden Anker, Security-Header, Caching

## Vor dem Livegang ausfüllen

Im Code mit gelbem `todo`-Hintergrund markiert (`class="todo"`):

**Impressum**
- [x] Berufsaufsicht/Kammer entfernt: Kosmetiker ist zulassungsfreies Handwerk (Anlage B1 HwO),
      kein reglementierter Beruf nach § 5 Abs. 1 Nr. 5 DDG, daher keine Kammerangabe nötig
- [ ] USt-IdNr. nur falls vorhanden (§ 5 Abs. 1 Nr. 6 DDG) eintragen, Vorlage als Kommentar in
      `impressum.html`. Öffentlich nicht auffindbar. Steuernummer gehört NICHT ins Impressum.

**Datenschutz**
- [x] Hosting (Vercel), E-Mail-Weiterleitung (ImprovMX), Treatwell-Anschrift eingetragen
- [x] Kartenzahlung und Ziel-Postfach als Empfängerkategorie formuliert (Art. 13 Abs. 1 lit. e DSGVO)
- [x] Löschfristen mit Standardwerten festgelegt (12 Monate Anfragen, 3 Jahre Kundenkartei)
- [ ] AV-Vertrag (DPA) mit Vercel im Konto der Kundin bestätigen
- [ ] Schriftliche Einwilligung für Gesundheitsdaten & Fotos im Studio tatsächlich einholen

**Inhalt**
- [ ] Zahlungsarten klären: Website/AGB nennen bar und Karte, Treatwell listet nur Barzahlung
- [x] Öffnungszeiten laut Inhaberin (29.09.2026): Mo/Di/Do 15–20, Fr/Sa 10–20, Mi/So zu, andere Termine nach Vereinbarung
      (Treatwell zeigt noch bis 20 Uhr – dort angleichen)
- [ ] Bewertungszahlen (Google 68, Treatwell 44) gelegentlich aktualisieren
- [ ] Vorher/Nachher-Bilder: Einwilligung der Kundinnen liegt vor?
- [ ] Preise auf Treatwell angleichen (dort teils andere Preise/Nebenzeiten-Rabatte)

**Rechtlich**
- [ ] Impressum, Datenschutz und AGB von Anwalt/Anwältin gegenlesen lassen. Die Texte sind
      sorgfältig erstellt, ersetzen aber keine Rechtsberatung.

## Struktur

```
index.html  impressum.html  datenschutz.html  agb.html
.htaccess  robots.txt  sitemap.xml  site.webmanifest  favicon.svg
assets/css/   style.css, fonts.css
assets/js/    main.js (Navigation, Tabs, Buchungsdialog, Vorher/Nachher, Bewertungs-Slider, Zähler, Öffnungszeiten-Status)
assets/fonts/ Fraunces (Überschriften) + Figtree (Text) als variable woff2, lokal (DSGVO)
assets/img/   optimierte WebP-Bilder, og-image.jpg, Icons
assets/img/src/  Originale (per .htaccess gesperrt, nicht hochladen nötig)
```

## Bildquellen

Alle Bilder stammen von der bisherigen Website shirea-kosmetik.de und dem Instagram-Profil
@shirea_kosmetik. Die kombinierten Vorher/Nachher-Bilder wurden automatisch getrennt.
