# SYNDICATE

Öffentliche Website der SYNDICATE Research Division. Diese Branch enthält die Fassung mit Research Center und Developer Center zur Prüfung. `main` bleibt die veröffentlichte Website, bis diese Fassung freigegeben wird.

Es gibt 22 HTML-Seiten in vier Bereichen.

Der erste Bereich ist Eingang und Dashboard. `index.html` zeigt oben SYNDICATE, darunter Jailbreak ohne Funktion und darunter Home. Home öffnet `dashboard.html`.

Der zweite Bereich sind die bestehenden Seiten. Die sechs Kachelseiten sind `research.html`, `projects.html`, `development.html`, `homebrew.html`, `system.html` und `settings.html`. Dazu bleiben `technology.html`, `about.html`, `updates.html` und `search.html`. Die Suche durchsucht Seitentitel und hinterlegte Kurzbeschreibungen. Sie durchsucht nicht den vollständigen Seiteninhalt.

Der dritte Bereich ist das Research Center. `research-center.html` führt zu `models.html`, `firmware.html`, `compatibility.html`, `sources.html` und `reports.html`. Die Firmware-Seite enthält keine Einträge.

Der vierte Bereich ist das Developer Center. `developer.html` führt zu `developer-docs.html`, `json-check.html` und `test-notes.html`. Der JSON-Prüfer arbeitet nur im Browser und überträgt keine Daten.

## Dateien

Die 22 HTML-Seiten sind `index.html`, `dashboard.html`, `research.html`, `projects.html`, `development.html`, `homebrew.html`, `system.html`, `settings.html`, `technology.html`, `about.html`, `updates.html`, `search.html`, `research-center.html`, `models.html`, `firmware.html`, `compatibility.html`, `sources.html`, `reports.html`, `developer.html`, `developer-docs.html`, `json-check.html` und `test-notes.html`.

Die Skripte sind `assets/js/site.js`, `assets/js/search.js` und `assets/js/json-check.js`. Die Gestaltung liegt in `assets/css/style.css`, das Zeichen in `assets/img/mark.svg`. Dokumentation und Grenzen stehen in [docs/website.md](docs/website.md).

Deutsch ist die Ausgangssprache. Englisch, einschließlich der Meta-Beschreibung, schaltet `assets/js/site.js` um. Jailbreak führt nirgendwohin. Der Homebrew-Store ist geplant und enthält keine Downloads. Weitere Forschungsphasen sind nicht begonnen.

## Lokal ansehen

```bash
python3 -m http.server 8000
```

Die Eingangsseite liegt unter `http://127.0.0.1:8000/`.
