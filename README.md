# SYNDICATE

Öffentliche Website der SYNDICATE Research Division. Die Seiten sind statisch, ohne Build-Schritt. `.nojekyll` sorgt dafür, dass GitHub Pages die Dateien ohne Jekyll ausliefert. Deutsch ist die Ausgangssprache. Englisch, einschließlich der Meta-Beschreibung, schaltet `assets/js/site.js` um.

Diese Fassung enthält sechs Seiten und liegt zur Prüfung vor. GitHub Pages veröffentlicht weiterhin den Branch `main`. Erst nach Freigabe ersetzt diese Fassung die dort liegende Seite.

Öffentliche Forschung: <https://github.com/syndicate-ps5/syndicate-research>

## Seiten

`index.html` ist die Startseite und gibt die Projektübersicht. `research.html` nennt die veröffentlichte Forschungsphase 1 und die belegte Modellgruppen-Notiz. `projects.html` zeigt den öffentlichen Status der vorhandenen Bereiche und kennzeichnet leere Bereiche als geplant. `technology.html` beschreibt nur den Aufbau dieser Website. `about.html` stellt die Research Division, die Trennung von öffentlicher Forschung und interner Entwicklung und die Veröffentlichungsregel vor. `updates.html` führt die öffentlichen Schritte auf.

## Dateien

```text
index.html
research.html
projects.html
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

Farben, Gestaltung und die inhaltlichen Grenzen stehen in [docs/website.md](docs/website.md).

## Lokal ansehen

Im Repository-Root:

```bash
python3 -m http.server 8000
```

Die Startseite liegt unter `http://127.0.0.1:8000/`.

## Grenzen

Die Texte folgen dem veröffentlichten Stand von `syndicate-research` auf `main`. Weitere Forschungsphasen sind dort nicht begonnen. Original, Slim und Pro bleiben Unknown. Diese Website enthält keine Downloads und keine Releases. Private Repositorys werden nicht genannt.
