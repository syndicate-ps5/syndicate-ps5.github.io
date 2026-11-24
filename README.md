# SYNDICATE

Öffentliche Website der SYNDICATE Research Division. Diese Branch enthält die Dashboard-Fassung zur Prüfung. `main` bleibt die veröffentlichte Website, bis diese Fassung freigegeben wird.

Es gibt zwölf HTML-Seiten. Sie haben vier Rollen.

Der Eingang ist `index.html`. Oben steht SYNDICATE. Darunter steht Jailbreak als Schaltfläche ohne Ziel und ohne Funktion. Darunter steht Home und öffnet `dashboard.html`.

Das Dashboard ist `dashboard.html`. Es zeigt sechs Kacheln in dieser Reihenfolge: Forschung, Projekte, Entwicklung, Homebrew-Store, System und Einstellungen. Dieselben sechs Ziele stehen auch in der Seitenleiste, unter dem Platzhalter Jailbreak und unter Home.

Die sechs Kachelseiten sind `research.html`, `projects.html`, `development.html`, `homebrew.html`, `system.html` und `settings.html`.

Drei weitere Seiten bleiben erhalten und sind vom Dashboard aus verlinkt. `updates.html` ist Aktuelles. `about.html` ist Über uns. `technology.html` ist die ausführliche technische Beschreibung und von System aus erreichbar.

`search.html` durchsucht Seitentitel und hinterlegte Kurzbeschreibungen. Sie durchsucht nicht den vollständigen Seiteninhalt. Die Einstellungen speichern auf dem Gerät die Sprache und, ob die Hintergrundzeichen am Eingang sichtbar sind.

## Dateien

```text
index.html
dashboard.html
research.html
projects.html
development.html
homebrew.html
system.html
settings.html
technology.html
about.html
updates.html
search.html
assets/css/style.css
assets/js/site.js
assets/js/search.js
assets/img/mark.svg
docs/website.md
README.md
.gitignore
.nojekyll
```

Deutsch ist die Ausgangssprache. Englisch, einschließlich der Meta-Beschreibung, schaltet `assets/js/site.js` um. Jailbreak führt nirgendwohin. Der Homebrew-Store ist geplant und enthält keine Downloads. Weitere Forschungsphasen sind nicht begonnen.

Farben und Grenzen stehen in [docs/website.md](docs/website.md).

## Lokal ansehen

```bash
python3 -m http.server 8000
```

Die Eingangsseite liegt unter `http://127.0.0.1:8000/`.
