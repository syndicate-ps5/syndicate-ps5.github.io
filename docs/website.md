# Dokumentation der öffentlichen Website

## Zweck

Dieses Repository enthält die öffentliche, statische Website von SYNDICATE. Sie ist eine Projektseite für ein Forschungs- und Dokumentationsprojekt. GitHub Pages liefert die Dateien aus dem Branch `main` ohne eigenen Build-Schritt aus.

## Umfang von Phase 1

Die Startseite nennt den Projektnamen, eine kurze Beschreibung, den Status **In Aufbau (Phase 1)** und einen Link auf das öffentliche Forschungsrepository:

<https://github.com/syndicate-ps5/syndicate-research>

## Dateien

| Pfad | Rolle |
| --- | --- |
| `index.html` | Startseite |
| `assets/css/style.css` | Gestaltung, nur lokale Datei |
| `assets/img/mark.svg` | Eigenes Zeichen, keine Fremdmarke |
| `docs/website.md` | Diese Dokumentation |
| `README.md` | Kurze Repository-Beschreibung |
| `.gitignore` | Schließt lokale und geheime Dateien aus |
| `.nojekyll` | Unterbindet die Jekyll-Verarbeitung |

## Gestaltung

Die Farben stammen aus der Projektvorgabe:

| Rolle | Wert |
| --- | --- |
| Hintergrund | `#030303` |
| Akzent | `#39FF65` |
| Helles Grün | `#75FF91` |
| Dunkles Grün | `#176B31` |
| Schrift | Weiß und Hellgrau |

Die Schrift kommt vom System. Es werden keine externen Schriften, Skripte, Tracker oder CDNs eingebunden. Das Layout bleibt eine einzelne Spalte und passt sich schmalen und breiten Ansichtsfenstern an.

## Inhaltliche Grenzen

Die öffentliche Seite enthält in dieser Phase keine Downloads, keine Veröffentlichungen, keine Produktzusagen, keine Ankündigung einzelner Funktionen und keine Sicherheitsaussagen. Private Repositorys werden nicht verlinkt. Das Zeichen unter `assets/img/` ist eine eigene Grafik.

## Lokale Ansicht

`index.html` kann direkt geöffnet werden. Für eine Prüfung über HTTP im Repository-Root:

```bash
python3 -m http.server 8000
```

Danach ist die Seite unter `http://127.0.0.1:8000/` erreichbar.

## GitHub Pages

Für ein Repository mit dem Namen `syndicate-ps5.github.io` veröffentlicht GitHub Pages den Branch `main` unter <https://syndicate-ps5.github.io>, sofern Pages für diesen Branch eingeschaltet ist. Ob die Veröffentlichung aktiv ist, wird am Repository geprüft und nicht von dieser Dokumentation umgestellt.
