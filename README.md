# SYNDICATE

Öffentliche Website der SYNDICATE Research Division. Diese Branch enthält die Dashboard-Fassung zur Prüfung. `main` bleibt die veröffentlichte Website, bis diese Fassung freigegeben wird.

Der Eingang `index.html` ist keine Textseite. Oben steht SYNDICATE. Darunter steht Jailbreak als Platzhalter ohne Funktion. Darunter steht Home und öffnet `dashboard.html`.

## Dashboard

Home zeigt sechs Kacheln in dieser Reihenfolge: Forschung, Projekte, Entwicklung, Homebrew-Store, System und Einstellungen. Aktuelles, Über uns und die technische Beschreibung bleiben eigene Seiten und sind von dort aus erreichbar.

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
assets/css/style.css
assets/js/site.js
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
