(function () {
  var entries = [
    { href: "research.html", de: "Forschung", en: "Research", textDe: "Phase 1. Modellgruppen CFI-1000, CFI-2000 und CFI-7000 aus der Sony-USB-Ports-Anleitung. Original, Slim und Pro sind Unknown.", textEn: "Phase 1. Model groups CFI-1000, CFI-2000 and CFI-7000 from Sony’s USB ports guide. Original, Slim and Pro are Unknown." },
    { href: "projects.html", de: "Projekte", en: "Projects", textDe: "Öffentlicher Status der vorhandenen Bereiche. Leere Notizordner sind geplant.", textEn: "Public status of the existing areas. Empty note folders are planned." },
    { href: "development.html", de: "Entwicklung", en: "Development", textDe: "Geplant. Weitere Forschungsphasen sind nicht begonnen. Keine Firmware-Einträge.", textEn: "Planned. Further research phases have not started. No firmware entries." },
    { href: "homebrew.html", de: "Homebrew-Store", en: "Homebrew Store", textDe: "Geplant. Keine Angebote, keine Downloads und keine Releases.", textEn: "Planned. No listings, no downloads and no releases." },
    { href: "system.html", de: "System", en: "System", textDe: "Statische Website. Keine öffentliche Konsolenarchitektur.", textEn: "Static website. No public console architecture." },
    { href: "technology.html", de: "Technik", en: "Technology", textDe: "Lokale Dateien, kein Build-Schritt, Farben #030303, #39FF65, #75FF91 und #176B31.", textEn: "Local files, no build step, colors #030303, #39FF65, #75FF91 and #176B31." },
    { href: "settings.html", de: "Einstellungen", en: "Settings", textDe: "Sprache Deutsch oder Englisch. Hintergrundzeichen an oder aus.", textEn: "Language German or English. Background characters on or off." },
    { href: "about.html", de: "Über uns", en: "About", textDe: "Research Division. Veröffentlichung erst nach Quellenprüfung, Bewertung der Beleglage und Freigabe.", textEn: "Research Division. Publication only after a source check, an evidence assessment and approval." },
    { href: "updates.html", de: "Aktuelles", en: "Updates", textDe: "23. November 2026 Modellgruppen. 24. November 2026 Dashboard auf main veröffentlicht.", textEn: "23 November 2026 model groups. 24 November 2026 dashboard published on main." },
    { href: "dashboard.html", de: "Home", en: "Home", textDe: "Dashboard mit Forschung, Projekten, Entwicklung, Homebrew-Store, System und Einstellungen.", textEn: "Dashboard with research, projects, development, Homebrew Store, system and settings." },
    { href: "index.html", de: "Eingang", en: "Entry", textDe: "SYNDICATE, danach Jailbreak als Platzhalter ohne Funktion, danach Home.", textEn: "SYNDICATE, then Jailbreak as a placeholder with no function, then Home." },
    { href: "research-center.html", de: "Research Center", en: "Research Center", textDe: "Modellübersicht, Firmware-Übersicht, Kompatibilitätsmatrix, Quellen und Berichte.", textEn: "Model overview, firmware overview, compatibility matrix, sources and reports." },
    { href: "firmware.html", de: "Firmware-Übersicht", en: "Firmware overview", textDe: "Keine Firmware-Einträge. Status Unknown.", textEn: "No firmware entries. Status Unknown." },
    { href: "developer.html", de: "Developer Center", en: "Developer Center", textDe: "Dokumentation und JSON-Prüfung im Browser. Kein Konsolenzugriff.", textEn: "Documentation and in-browser JSON checking. No console access." },
    { href: "json-check.html", de: "JSON-Prüfer", en: "JSON checker", textDe: "Prüft das Format eines Datensatzes lokal. Nichts wird gesendet.", textEn: "Checks a dataset format locally. Nothing is sent." }
  ];

  var form = document.querySelector(".search-form");
  var list = document.getElementById("suchtreffer");
  var status = document.getElementById("suchstatus");
  if (!form || !list) return;

  function currentLang() {
    return document.documentElement.lang === "en" ? "en" : "de";
  }

  function render(query) {
    var lang = currentLang();
    var needle = query.trim().toLowerCase();
    var found = entries.filter(function (entry) {
      var hay = (entry.de + " " + entry.en + " " + entry.textDe + " " + entry.textEn).toLowerCase();
      return needle === "" || hay.indexOf(needle) !== -1;
    });
    list.textContent = "";
    found.forEach(function (entry) {
      var item = document.createElement("li");
      var link = document.createElement("a");
      link.href = entry.href;
      var title = document.createElement("strong");
      title.textContent = lang === "en" ? entry.en : entry.de;
      var text = document.createElement("span");
      text.textContent = " — " + (lang === "en" ? entry.textEn : entry.textDe);
      link.appendChild(title);
      link.appendChild(text);
      item.appendChild(link);
      list.appendChild(item);
    });
    if (status) {
      var word = lang === "en" ? (found.length === 1 ? " result" : " results") : " Treffer";
      status.textContent = found.length + word;
    }
  }

  var params = new URLSearchParams(window.location.search);
  var input = form.querySelector("input");
  if (input && params.get("q")) input.value = params.get("q");
  render(input ? input.value : "");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var value = input ? input.value : "";
    var next = "search.html" + (value.trim() ? "?q=" + encodeURIComponent(value.trim()) : "");
    if (location.pathname.endsWith("search.html")) {
      history.replaceState(null, "", next);
      render(value);
    } else {
      location.href = next;
    }
  });
  document.querySelectorAll("[data-set-lang]").forEach(function (button) {
    button.addEventListener("click", function () {
      render(input ? input.value : "");
    });
  });
})();
