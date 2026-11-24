# Dokumentation der öffentlichen Website

## Zweck

Dieses Repository enthält die öffentliche, statische Website der SYNDICATE Research Division. GitHub Pages liefert den Branch `main` ohne eigenen Build-Schritt aus. Die mehrseitige Fassung liegt zur Prüfung vor und ersetzt `main` erst nach Freigabe.

## Seiten

Start stellt das Projekt vor. Forschung nennt die veröffentlichte Phase 1 und die belegte Modellgruppen-Notiz. Projekte zeigt den öffentlichen Status der vorhandenen Bereiche und kennzeichnet leere Bereiche als geplant. Technik beschreibt nur diese Website. Über uns nennt die Research Division, die Trennung von öffentlicher Forschung und interner Entwicklung und die Veröffentlichungsregel. Aktuelles führt die öffentlichen Schritte auf.

Deutsch und Englisch stehen in jeder Seite. Ohne gespeicherte Wahl bleibt Deutsch sichtbar. Die Wahl liegt lokal im Browser.

## Gestaltung

Hintergrund `#030303`, Neon-Grün `#39FF65`, Hellgrün `#75FF91`, Dunkelgrün `#176B31`, Schrift weiß und hellgrau. Die Schrift kommt vom System. Fallende Zeichen liegen hinter den Flächen, sind dekorativ und entfallen bei reduzierter Bewegung. Es gibt keine externen Schriften, Tracker oder CDNs.

## Inhaltliche Grenzen

Verwendet wird der Stand von `syndicate-research` auf `main`: Arbeitsregeln und die Modellgruppen CFI-1000, CFI-2000 und CFI-7000 aus der Sony-USB-Ports-Anleitung, abgerufen am 23. November 2026. Original, Slim und Pro bleiben Unknown. Firmware- und Architekturordner haben keine veröffentlichten Aussagen. Private Repository-Namen und interne Daten werden nicht angezeigt. Die Website enthält keine Downloads und keine Releases.

## Lokal ansehen

Im Repository-Root:

```bash
python3 -m http.server 8000
```

Die Startseite liegt unter `http://127.0.0.1:8000/`.
